"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../ui/Button";

const TEST_DURATION_MS = 5000;
const MAX_SAMPLES = 50000;
const PAUSE_THRESHOLD_MS = 50; // Intervals > 50ms (20Hz) are considered pauses

export function PollingRateTester() {
  const [testState, setTestState] = useState("IDLE"); // IDLE, RUNNING, INTERRUPTED, COMPLETE
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION_MS);
  const [liveHz, setLiveHz] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const [finalStats, setFinalStats] = useState(null);
  const [measurementMode, setMeasurementMode] = useState("");
  const [coalescedSupported, setCoalescedSupported] = useState(false);
  
  const testAreaRef = useRef(null);
  
  // Refs for high-frequency data to avoid React re-renders
  const timestampsRef = useRef([]);
  const stateRef = useRef("IDLE");
  const startTimeRef = useRef(0);
  const rafRef = useRef(null);
  
  // Sync state to ref for the event handler
  useEffect(() => {
    stateRef.current = testState;
  }, [testState]);

  // Main high-frequency pointer handler
  const handlePointerUpdate = useCallback((e) => {
    if (e.pointerType === "touch") {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);
    
    if (stateRef.current !== "RUNNING") return;

    const addSample = (timestamp) => {
      if (timestampsRef.current.length < MAX_SAMPLES) {
        timestampsRef.current.push(timestamp);
      }
    };

    if (typeof e.getCoalescedEvents === "function") {
      const coalesced = e.getCoalescedEvents();
      if (coalesced && coalesced.length > 0) {
        for (let i = 0; i < coalesced.length; i++) {
          addSample(coalesced[i].timeStamp);
        }
        return;
      }
    }
    
    // Fallback if no coalesced events
    addSample(e.timeStamp);
  }, []);

  // Setup Event Listeners & Loop
  useEffect(() => {
    const area = testAreaRef.current;
    if (!area) return;

    // Feature detect
    const hasRaw = "onpointerrawupdate" in window;
    const eventName = hasRaw ? "pointerrawupdate" : "pointermove";
    
    // Check coalesced support on a dummy event isn't easy here, so we detect during test or just assume true if supported.
    // We'll set the static capability strings
    setMeasurementMode(hasRaw ? "Raw Pointer Events" : "Standard Pointer Events");
    setCoalescedSupported(typeof PointerEvent !== "undefined" && "getCoalescedEvents" in PointerEvent.prototype);

    // Attach native listener
    area.addEventListener(eventName, handlePointerUpdate, { passive: true });

    return () => {
      area.removeEventListener(eventName, handlePointerUpdate);
    };
  }, [handlePointerUpdate]);

  const endTest = useCallback((interrupted = false) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    if (interrupted) {
      setTestState("INTERRUPTED");
      return;
    }

    // Process final stats
    const samples = timestampsRef.current;
    if (samples.length < 2) {
      setTestState("INTERRUPTED"); // Not enough data
      return;
    }

    const intervals = [];
    for (let i = 1; i < samples.length; i++) {
      const diff = samples[i] - samples[i - 1];
      if (diff > 0 && diff < PAUSE_THRESHOLD_MS) {
        intervals.push(diff);
      }
    }

    if (intervals.length === 0) {
      setTestState("INTERRUPTED");
      return;
    }

    intervals.sort((a, b) => a - b);
    
    const medianInterval = intervals[Math.floor(intervals.length / 2)];
    const sum = intervals.reduce((a, b) => a + b, 0);
    const avgInterval = sum / intervals.length;
    
    // Find peak over a small rolling window (e.g. 10 intervals = 10ms for 1000Hz)
    let peakHz = 0;
    const windowSize = Math.min(10, intervals.length);
    for (let i = 0; i <= intervals.length - windowSize; i++) {
      let windowSum = 0;
      for (let j = 0; j < windowSize; j++) {
        windowSum += intervals[i + j];
      }
      const windowAvg = windowSum / windowSize;
      const windowHz = 1000 / windowAvg;
      if (windowHz > peakHz) {
        peakHz = windowHz;
      }
    }

    setFinalStats({
      estimatedHz: Math.round(1000 / avgInterval),
      medianInterval: medianInterval.toFixed(2),
      avgActiveHz: Math.round(1000 / avgInterval),
      peakHz: Math.round(peakHz),
      samplesCount: samples.length
    });
    
    setTestState("COMPLETE");
  }, []);

  // Tab visibility interruption
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && stateRef.current === "RUNNING") {
        endTest(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [endTest]);

  // Update loop
  const updateLoop = useCallback(function loop() {
    if (stateRef.current !== "RUNNING") return;

    const now = performance.now();
    const elapsed = now - startTimeRef.current;
    const remaining = Math.max(0, TEST_DURATION_MS - elapsed);
    
    setTimeLeft(remaining);

    // Calculate live Hz from the last 1000ms window
    const windowStart = now - 1000;
    // Since event.timeStamp and performance.now() might have different epochs in some older browsers,
    // we use the time relative to the samples themselves.
    const samples = timestampsRef.current;
    
    if (samples.length > 2) {
      // Find samples in the last ~1000ms. 
      // Note: event.timeStamp is relative to page load, same as performance.now() in modern browsers.
      let recentCount = 0;
      for (let i = samples.length - 1; i >= 0; i--) {
        if (samples[i] >= windowStart) {
          recentCount++;
        } else {
          break;
        }
      }
      
      // We don't want to compute expensive median on every frame.
      // We'll just do a quick average interval for the live display over recent samples
      if (recentCount > 2) {
        const startIndex = samples.length - recentCount;
        const endIndex = samples.length - 1;
        let validIntervals = 0;
        let sum = 0;
        
        for (let i = startIndex + 1; i <= endIndex; i++) {
          const diff = samples[i] - samples[i - 1];
          if (diff > 0 && diff < PAUSE_THRESHOLD_MS) {
            sum += diff;
            validIntervals++;
          }
        }
        
        if (validIntervals > 0) {
          const avgInterval = sum / validIntervals;
          setLiveHz(Math.round(1000 / avgInterval));
        }
      }
    }

    if (remaining <= 0) {
      endTest(false);
    } else {
      rafRef.current = requestAnimationFrame(loop);
    }
  }, [endTest]);

  const startTest = () => {
    setTestState("RUNNING");
    setTimeLeft(TEST_DURATION_MS);
    setLiveHz(0);
    setFinalStats(null);
    setIsTouch(false);
    
    timestampsRef.current = [];
    startTimeRef.current = performance.now();
    
    rafRef.current = requestAnimationFrame(updateLoop);
  };

  const handleReset = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    timestampsRef.current = [];
    setTestState("IDLE");
    setTimeLeft(TEST_DURATION_MS);
    setLiveHz(0);
    setFinalStats(null);
    setIsTouch(false);
  };

  return (
    <div className="w-full bg-card border border-cyan-200/50 rounded-3xl shadow-md shadow-cyan-950/5 overflow-hidden flex flex-col">
      {/* Top Bar */}
      <div className="p-6 border-b border-border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Mouse Polling Rate Test</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Move your mouse continuously inside the test area to measure update frequency.
          </p>
        </div>
        
        {testState === "RUNNING" && (
          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Time Remaining</span>
            <span className="text-2xl font-bold font-mono text-primary">{(timeLeft / 1000).toFixed(1)}s</span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row relative">
        {/* Interactive Zone */}
        <div 
          ref={testAreaRef}
          className={`flex-1 p-8 flex flex-col items-center justify-center min-h-[400px] touch-none select-none transition-colors ${
            testState === "RUNNING" ? 'bg-primary/5 border-primary/20 cursor-crosshair' : 'bg-muted/30 cursor-default'
          }`}
          style={{ isolation: 'isolate' }}
        >
          {isTouch ? (
            <div className="text-center p-6 bg-warning/10 rounded-lg border border-warning/20">
              <p className="text-warning font-medium">This test works best with a physical mouse on a desktop or laptop.</p>
            </div>
          ) : testState === "IDLE" ? (
            <div className="text-center">
              <Button onClick={startTest} size="lg">Start Polling Rate Test</Button>
            </div>
          ) : testState === "RUNNING" ? (
            <div className="text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-primary/30 flex items-center justify-center relative mb-4 animate-pulse">
                <span className="text-2xl font-bold text-primary">{liveHz > 0 ? `${liveHz} Hz` : '...'}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Move your mouse continuously</h3>
              <p className="text-muted-foreground mt-2">Use steady movement for the best estimate.</p>
              
              <Button onClick={() => endTest(true)} variant="outline" className="mt-8">
                Stop Test
              </Button>
            </div>
          ) : testState === "INTERRUPTED" ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/20 text-warning rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Test Interrupted</h3>
              <p className="text-muted-foreground mb-6">
                The test was stopped, you left the tab, or not enough movement was detected.
              </p>
              <Button onClick={handleReset}>Try Again</Button>
            </div>
          ) : testState === "COMPLETE" && finalStats ? (
            <div className="text-center flex flex-col items-center w-full max-w-lg">
              <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-1">Estimated Polling Rate</h3>
              <div className="text-5xl font-extrabold text-primary mb-6">
                ≈ {finalStats.estimatedHz} Hz
              </div>
              
              <p className="text-sm text-muted-foreground mb-8 text-balance">
                Your browser observed mouse movement at approximately {finalStats.estimatedHz} Hz during this test.
                <br className="mb-2" />
                <span className="text-xs">
                  Polling-rate measurements in a browser are estimates. Browser scheduling, operating system behavior, connection type, system load, and event coalescing can affect the observed result.
                </span>
              </p>
              
              <Button onClick={handleReset} variant="primary">Test Again</Button>
            </div>
          ) : null}
        </div>

        {/* Sidebar Results */}
        <div className="md:w-80 border-t md:border-t-0 md:border-l border-border bg-muted/10 p-6 flex flex-col">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Diagnostic Details</h3>
          
          <div className="space-y-4 text-sm flex-1">
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Estimated Rate:</span>
              <span className="font-semibold text-foreground">
                {finalStats ? `≈ ${finalStats.estimatedHz} Hz` : '--'}
              </span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Average Active Rate:</span>
              <span className="font-semibold text-foreground">
                {finalStats ? `${finalStats.avgActiveHz} Hz` : '--'}
              </span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Median Interval:</span>
              <span className="font-semibold text-foreground">
                {finalStats ? `${finalStats.medianInterval} ms` : '--'}
              </span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Peak Observed Rate:</span>
              <span className="font-semibold text-foreground">
                {finalStats ? `${finalStats.peakHz} Hz` : '--'}
              </span>
            </div>
            <div className="flex justify-between pb-3">
              <span className="text-muted-foreground">Samples Collected:</span>
              <span className="font-semibold text-foreground">
                {finalStats ? finalStats.samplesCount.toLocaleString() : '--'}
              </span>
            </div>
          </div>
          
          <div className="mt-8 p-3 bg-muted/30 rounded-lg text-xs text-muted-foreground space-y-1">
            <div className="flex justify-between">
              <span>Measurement Mode:</span>
              <span className="font-medium text-foreground">{measurementMode}</span>
            </div>
            <div className="flex justify-between">
              <span>Coalesced Samples:</span>
              <span className="font-medium text-foreground">{coalescedSupported ? "Supported" : "Unavailable"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
