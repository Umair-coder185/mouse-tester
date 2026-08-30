"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../ui/Button";

const TOTAL_TARGETS = 20;

export function AccuracyTester() {
  // States: IDLE, RUNNING, COMPLETE, ERROR
  const [testState, setTestState] = useState("IDLE");
  const [currentTarget, setCurrentTarget] = useState(0);
  const [targetPos, setTargetPos] = useState(null); // {x, y} relative to board
  const [isTouch, setIsTouch] = useState(false);
  
  // Results
  const [avgError, setAvgError] = useState(0);
  const [medianError, setMedianError] = useState(0);
  const [hitCount, setHitCount] = useState(0);
  const [avgTime, setAvgTime] = useState(0);
  
  const boardRef = useRef(null);
  
  // Data refs
  const stateRef = useRef(testState);
  const trialsRef = useRef([]); // { errorPx, isHit, timeMs }
  const targetSpawnTimeRef = useRef(0);

  useEffect(() => {
    stateRef.current = testState;
  }, [testState]);

  const generateTargetPos = useCallback(() => {
    if (!boardRef.current) return null;
    
    const board = boardRef.current;
    const padding = 60; // keep away from edges
    const width = board.clientWidth;
    const height = board.clientHeight;
    
    if (width < padding * 2 || height < padding * 2) return null;
    
    // Simple random coordinate within padded bounds
    const x = padding + Math.random() * (width - padding * 2);
    const y = padding + Math.random() * (height - padding * 2);
    
    return { x, y };
  }, []);

  const spawnNextTarget = useCallback(() => {
    const pos = generateTargetPos();
    if (!pos) {
      setTestState("ERROR");
      return;
    }
    setTargetPos(pos);
    targetSpawnTimeRef.current = performance.now();
  }, [generateTargetPos]);

  const handleResize = useCallback(() => {
    if (stateRef.current === "RUNNING") {
      // Abort test gracefully if they resize aggressively during it, otherwise geometry invalidates
      setTestState("ERROR");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const calculateResults = useCallback(() => {
    const trials = trialsRef.current;
    if (trials.length === 0) return;
    
    let sumError = 0;
    let sumTime = 0;
    let hits = 0;
    const errors = [];
    
    trials.forEach(t => {
      sumError += t.errorPx;
      sumTime += t.timeMs;
      if (t.isHit) hits++;
      errors.push(t.errorPx);
    });
    
    errors.sort((a, b) => a - b);
    const medError = errors.length % 2 === 0 
      ? (errors[errors.length / 2 - 1] + errors[errors.length / 2]) / 2 
      : errors[Math.floor(errors.length / 2)];
      
    setAvgError((sumError / trials.length).toFixed(1));
    setMedianError(medError.toFixed(1));
    setHitCount(hits);
    setAvgTime(Math.round(sumTime / trials.length));
    
    setTestState("COMPLETE");
  }, []);

  const handlePointerDown = useCallback((e) => {
    if (e.pointerType === "touch") {
      setIsTouch(true);
      return;
    }
    
    if (stateRef.current !== "RUNNING" || !targetPos) return;
    if (e.button !== 0) return; // Only primary clicks
    
    const now = performance.now();
    const board = boardRef.current;
    if (!board) return;
    
    const rect = board.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    const dx = clickX - targetPos.x;
    const dy = clickY - targetPos.y;
    const errorPx = Math.sqrt(dx * dx + dy * dy);
    
    const timeMs = now - targetSpawnTimeRef.current;
    
    // Hit criteria: target visible radius is ~24px (w-12 = 48px diameter)
    const isHit = errorPx <= 24;
    
    trialsRef.current.push({ errorPx, isHit, timeMs });
    
    setCurrentTarget(c => {
      const next = c + 1;
      if (next >= TOTAL_TARGETS) {
        setTargetPos(null);
        calculateResults();
      } else {
        spawnNextTarget();
      }
      return next;
    });
  }, [targetPos, spawnNextTarget, calculateResults]);

  const startTest = () => {
    setTestState("RUNNING");
    trialsRef.current = [];
    setCurrentTarget(0);
    setIsTouch(false);
    
    // Allow React to mount the board before spawning
    setTimeout(() => {
      spawnNextTarget();
    }, 50);
  };

  const handleReset = () => {
    setTestState("IDLE");
    trialsRef.current = [];
    setCurrentTarget(0);
    setTargetPos(null);
    setIsTouch(false);
  };

  return (
    <div className="w-full bg-card border border-cyan-200/50 rounded-3xl shadow-md shadow-cyan-950/5 overflow-hidden flex flex-col">
      <div className="p-6 border-b border-border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Mouse Accuracy Test</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Check your pointer precision by clicking target centers.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Interactive Zone */}
        <div 
          ref={boardRef}
          onPointerDown={handlePointerDown}
          onContextMenu={(e) => e.preventDefault()}
          className={`flex-1 p-8 flex flex-col items-center justify-center min-h-[500px] touch-none select-none relative transition-colors ${
            testState === "RUNNING" ? 'bg-muted/10 cursor-crosshair' : 'bg-background'
          }`}
        >
          {isTouch && testState !== "COMPLETE" ? (
             <div className="text-center p-6 bg-warning/10 rounded-lg border border-warning/20">
               <p className="text-warning font-medium">This test works best with a physical mouse on a desktop or laptop.</p>
               <Button onClick={startTest} className="mt-4">Start Anyway</Button>
             </div>
          ) : testState === "IDLE" ? (
            <div className="text-center">
              <Button onClick={startTest} size="lg" className="px-12 py-6 text-xl">Start Accuracy Test</Button>
            </div>
          ) : testState === "ERROR" ? (
            <div className="text-center p-6 bg-muted rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-2">Test Aborted</h3>
              <p className="text-muted-foreground mb-4">The test board dimensions changed or an error occurred.</p>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : testState === "RUNNING" && targetPos ? (
            <>
              <div className="absolute top-4 left-4 text-xs font-bold text-muted-foreground uppercase tracking-widest pointer-events-none">
                Target {currentTarget + 1} of {TOTAL_TARGETS}
              </div>
              <div 
                className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center pointer-events-none"
                style={{ left: targetPos.x, top: targetPos.y }}
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              </div>
            </>
          ) : testState === "COMPLETE" ? (
            <div className="text-center flex flex-col items-center max-w-lg p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Precision test complete</h3>
              <p className="text-muted-foreground mb-8">Your average pointer error was {avgError} pixels across {TOTAL_TARGETS} targets.</p>
              
              <div className="bg-muted/30 border border-border rounded-lg p-5 mb-8 text-left w-full space-y-4 text-sm text-muted-foreground">
                <div className="flex justify-between border-b border-border pb-3">
                  <span>Average error:</span>
                  <strong className="text-foreground text-lg">{avgError} px</strong>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span>Median error:</span>
                  <strong className="text-foreground text-lg">{medianError} px</strong>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span>Hits:</span>
                  <strong className="text-foreground text-lg">{hitCount} / {TOTAL_TARGETS}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Average target time:</span>
                  <strong className="text-foreground text-lg">{avgTime} ms</strong>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground/80 mb-8 max-w-md mx-auto">
                This test reflects pointer control in this browser session and does not isolate mouse sensor hardware. Display scaling and sensitivity settings affect these results.
              </p>
              
              <Button onClick={handleReset} variant="primary" size="lg">Test Again</Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
