"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../ui/Button";

const DURATIONS = [1, 5, 10];

export function CpsTester() {
  // States: IDLE, COUNTDOWN, RUNNING, COMPLETE
  const [testState, setTestState] = useState("IDLE");
  const [duration, setDuration] = useState(5);
  const [countdown, setCountdown] = useState(3);
  
  // Real-time tracking for UI updates
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [cps, setCps] = useState(0);
  const [bestBurst, setBestBurst] = useState(0);
  const [isTouch, setIsTouch] = useState(false);

  // Authoritative refs
  const clicksRef = useRef([]); // stores timestamps
  const startTimeRef = useRef(0);
  const endTimeRef = useRef(0);
  const rAFRef = useRef(null);

  const calculateBurst = (timestamps) => {
    if (timestamps.length < 2) return 0;
    let maxBurst = 0;
    
    // Simple sliding window for best 1-second burst
    for (let i = 0; i < timestamps.length; i++) {
      let currentBurst = 1;
      const startT = timestamps[i];
      for (let j = i + 1; j < timestamps.length; j++) {
        if (timestamps[j] - startT <= 1000) {
          currentBurst++;
        } else {
          break;
        }
      }
      if (currentBurst > maxBurst) maxBurst = currentBurst;
    }
    return maxBurst;
  };

  const finishTest = useCallback(() => {
    if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    
    // Filter out any late clicks just in case
    const validClicks = clicksRef.current.filter(
      t => t >= startTimeRef.current && t <= endTimeRef.current
    );
    
    const totalCount = validClicks.length;
    const finalCps = (totalCount / duration).toFixed(2);
    const burst = calculateBurst(validClicks);
    
    setClicks(totalCount);
    setCps(finalCps);
    setBestBurst(burst);
    setTestState("COMPLETE");
  }, [duration]);

  const updateLoop = useCallback(function updateLoopFn() {
    if (testState !== "RUNNING") return;

    const now = performance.now();
    
    if (now >= endTimeRef.current) {
      setTimeRemaining(0);
      finishTest();
      return;
    }

    // Update UI remaining time
    setTimeRemaining(Math.max(0, ((endTimeRef.current - now) / 1000).toFixed(1)));
    
    // Calculate live CPS safely
    const elapsed = Math.max(0.1, (now - startTimeRef.current) / 1000);
    const currentClicks = clicksRef.current.length;
    setCps((currentClicks / elapsed).toFixed(1));

    rAFRef.current = requestAnimationFrame(updateLoopFn);
  }, [testState, finishTest]);

  useEffect(() => {
    if (testState === "RUNNING") {
      rAFRef.current = requestAnimationFrame(updateLoop);
    }
    return () => {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    };
  }, [testState, updateLoop]);

  // Handle countdown
  useEffect(() => {
    let timer;
    if (testState === "COUNTDOWN") {
      if (countdown > 0) {
        timer = setTimeout(() => {
          setCountdown(c => c - 1);
        }, 1000);
      } else {
        // Start actual test via timeout to avoid sync state update in effect
        timer = setTimeout(() => {
          setTestState("RUNNING");
          clicksRef.current = [];
          setClicks(0);
          setCps(0);
          setTimeRemaining(duration.toFixed(1));
          
          const now = performance.now();
          startTimeRef.current = now;
          endTimeRef.current = now + (duration * 1000);
        }, 0);
      }
    }
    return () => clearTimeout(timer);
  }, [testState, countdown, duration]);

  const handlePointerDown = useCallback((e) => {
    if (e.pointerType === "touch") {
      setIsTouch(true);
      return;
    }
    
    if (testState !== "RUNNING") return;
    
    // Only count physical left clicks inside the area
    if (e.button !== 0) return;
    
    const now = performance.now();
    
    // Prevent late leakage
    if (now >= startTimeRef.current && now <= endTimeRef.current) {
      // Bounded array to prevent infinite memory usage just in case
      if (clicksRef.current.length < 5000) {
        clicksRef.current.push(now);
      }
      setClicks(clicksRef.current.length);
    }
  }, [testState]);

  const startCountdown = () => {
    setCountdown(3);
    setTestState("COUNTDOWN");
    setIsTouch(false);
  };

  const handleReset = () => {
    setTestState("IDLE");
    setIsTouch(false);
  };

  // Visibility interruption
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && (testState === "RUNNING" || testState === "COUNTDOWN")) {
        if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
        setTestState("IDLE"); // Reset entirely to avoid fake slow results
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [testState]);

  return (
    <div className="w-full bg-card border border-cyan-200/50 rounded-3xl shadow-md shadow-cyan-950/5 overflow-hidden flex flex-col">
      <div className="p-6 border-b border-border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">CPS Test</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Measure your mouse clicking speed.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">Duration:</span>
          <div className="flex gap-2 bg-muted p-1 rounded-lg">
            {DURATIONS.map(d => (
              <button
                key={d}
                disabled={testState !== "IDLE" && testState !== "COMPLETE"}
                onClick={() => setDuration(d)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  duration === d 
                  ? 'bg-background shadow-sm text-foreground' 
                  : 'text-muted-foreground hover:text-foreground disabled:opacity-50'
                }`}
              >
                {d}s
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Interactive Zone */}
        <div 
          onPointerDown={handlePointerDown}
          onContextMenu={(e) => e.preventDefault()}
          className={`flex-1 p-8 flex flex-col items-center justify-center min-h-[400px] touch-none select-none relative transition-colors ${
            testState === "RUNNING" ? 'bg-primary/5 cursor-pointer hover:bg-primary/10' : 'bg-background'
          }`}
        >
          {isTouch && testState !== "COMPLETE" ? (
             <div className="text-center p-6 bg-warning/10 rounded-lg border border-warning/20">
               <p className="text-warning font-medium">This test works best with a physical mouse on a desktop or laptop.</p>
               <Button onClick={startCountdown} className="mt-4">Start Anyway</Button>
             </div>
          ) : testState === "IDLE" ? (
            <div className="text-center">
              <Button onClick={startCountdown} size="lg" className="px-12 py-6 text-xl">Start CPS Test</Button>
            </div>
          ) : testState === "COUNTDOWN" ? (
            <div className="text-center">
              <span className="text-8xl font-extrabold text-primary animate-pulse">{countdown > 0 ? countdown : "GO!"}</span>
            </div>
          ) : testState === "RUNNING" ? (
            <div className="text-center pointer-events-none">
              <span className="text-6xl font-extrabold text-foreground block mb-2">{clicks}</span>
              <span className="text-xl text-muted-foreground uppercase tracking-widest font-bold">CLICK HERE</span>
            </div>
          ) : testState === "COMPLETE" ? (
            <div className="text-center flex flex-col items-center max-w-lg p-6">
              <h3 className="text-lg font-bold text-muted-foreground uppercase tracking-widest mb-2">Clicks Per Second</h3>
              <div className="text-6xl font-extrabold text-primary mb-6">
                {cps} <span className="text-2xl">CPS</span>
              </div>
              
              <div className="bg-muted/30 border border-border rounded-lg p-4 mb-8 text-left w-full space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Total Clicks:</span>
                  <strong className="text-foreground text-lg">{clicks}</strong>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Duration:</span>
                  <strong className="text-foreground text-lg">{duration.toFixed(1)} sec</strong>
                </div>
                <div className="flex justify-between">
                  <span>Best 1-second burst:</span>
                  <strong className="text-foreground text-lg">{bestBurst} clicks</strong>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground/80 mb-8 max-w-md mx-auto">
                This result reflects your clicking speed during this session.
              </p>
              
              <Button onClick={startCountdown} variant="primary" size="lg">Test Again</Button>
            </div>
          ) : null}
        </div>

        {/* Sidebar Status (Visible during run/idle) */}
        {testState !== "COMPLETE" && (
          <div className="md:w-80 border-t md:border-t-0 md:border-l border-border bg-muted/10 p-6 flex flex-col">
            <div className="mb-6">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Live Status</h3>
              <div className="h-16 bg-background border border-border rounded-md flex items-center justify-center shadow-sm">
                <span className={`font-semibold text-2xl tracking-tight tabular-nums ${testState === "RUNNING" ? 'text-primary' : 'text-muted-foreground'}`}>
                  {testState === "RUNNING" ? `${timeRemaining}s` : `${duration.toFixed(1)}s`}
                </span>
              </div>
            </div>

            <div className="mb-6 flex-1">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Live Metrics</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Current CPS:</span>
                  <span className="font-semibold text-foreground tabular-nums">{testState === "RUNNING" ? cps : "0.0"}</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-muted-foreground">Clicks:</span>
                  <span className="font-semibold text-foreground tabular-nums">{testState === "RUNNING" ? clicks : "0"}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
               <Button onClick={handleReset} variant="outline" className="w-full text-sm h-9" disabled={testState === "IDLE"}>
                 Reset
               </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
