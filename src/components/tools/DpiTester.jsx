"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../ui/Button";

export function DpiTester() {
  const [testState, setTestState] = useState("IDLE"); // IDLE, RUNNING, COMPLETE, ERROR
  const [distanceUnit, setDistanceUnit] = useState("cm");
  const [distanceValue, setDistanceValue] = useState(10);
  const [finalDpi, setFinalDpi] = useState(null);
  const [finalMovement, setFinalMovement] = useState(0);
  const [modeUsed, setModeUsed] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isTouch, setIsTouch] = useState(false);
  
  const testAreaRef = useRef(null);
  
  // High-frequency measurement refs
  const movementRef = useRef({ x: 0, y: 0, pathLength: 0 });
  const isLockedRef = useRef(false);

  // Fallback tracking
  const lastPosRef = useRef(null);

  const endTest = useCallback((success = true, reason = "") => {
    if (document.pointerLockElement === testAreaRef.current) {
      document.exitPointerLock();
    }
    
    if (!success) {
      setErrorMessage(reason);
      setTestState("ERROR");
      return;
    }

    const { x, y, pathLength } = movementRef.current;
    
    // Quality check: User must move horizontally. If Y deviation is massive, reject it.
    const absX = Math.abs(x);
    const absY = Math.abs(y);
    
    if (absX < 50) {
      setErrorMessage("Not enough horizontal movement detected.");
      setTestState("ERROR");
      return;
    }
    
    if (absY > absX * 0.5) {
      setErrorMessage("Movement was not straight enough for a reliable estimate. Try moving steadily in one horizontal direction.");
      setTestState("ERROR");
      return;
    }

    // A lot of reversal will make pathLength much larger than net X
    if (pathLength > absX * 1.5) {
      setErrorMessage("Movement reversed direction too much. Try moving steadily in one direction.");
      setTestState("ERROR");
      return;
    }

    const distanceInches = distanceUnit === "cm" ? distanceValue / 2.54 : distanceValue;
    const estimatedDpi = Math.round(absX / distanceInches);
    
    setFinalDpi(estimatedDpi);
    setFinalMovement(Math.round(absX));
    setTestState("COMPLETE");
  }, [distanceUnit, distanceValue]);

  // Handle keyboard events (Space to finish, Esc to cancel)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (testState !== "RUNNING") return;
      if (e.code === "Space") {
        e.preventDefault();
        endTest(true);
      } else if (e.code === "Escape") {
        endTest(false, "Measurement cancelled by user.");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [testState, endTest]);

  // Handle pointer lock changes
  useEffect(() => {
    const handleLockChange = () => {
      if (testState !== "RUNNING") return;
      
      const isLocked = document.pointerLockElement === testAreaRef.current;
      isLockedRef.current = isLocked;
      
      // If we unexpectedly lose lock and we haven't finished the test, we don't necessarily abort 
      // if they just hit escape, but the keydown handler catches that.
    };
    
    document.addEventListener("pointerlockchange", handleLockChange);
    return () => document.removeEventListener("pointerlockchange", handleLockChange);
  }, [testState]);

  const handlePointerMove = useCallback((e) => {
    if (e.pointerType === "touch") {
      setIsTouch(true);
      return;
    }
    
    if (testState !== "RUNNING") return;
    
    let dx = 0;
    let dy = 0;

    if (isLockedRef.current) {
      // Use movement API directly
      dx = e.movementX || 0;
      dy = e.movementY || 0;
    } else {
      // Fallback
      if (lastPosRef.current) {
        dx = e.clientX - lastPosRef.current.x;
        dy = e.clientY - lastPosRef.current.y;
      }
      lastPosRef.current = { x: e.clientX, y: e.clientY };
    }

    movementRef.current.x += dx;
    movementRef.current.y += dy;
    movementRef.current.pathLength += Math.sqrt(dx * dx + dy * dy);
  }, [testState]);

  const startTest = async () => {
    if (distanceValue <= 0 || isNaN(distanceValue)) {
      setErrorMessage("Please enter a valid distance.");
      setTestState("ERROR");
      return;
    }

    setTestState("RUNNING");
    setErrorMessage("");
    setFinalDpi(null);
    setIsTouch(false);
    movementRef.current = { x: 0, y: 0, pathLength: 0 };
    lastPosRef.current = null;
    isLockedRef.current = false;
    
    const area = testAreaRef.current;
    if (area && area.requestPointerLock) {
      try {
        // Attempt unadjusted movement (raw input)
        // Note: promise-based requestPointerLock is modern standard
        await area.requestPointerLock({ unadjustedMovement: true });
        setModeUsed("Pointer Lock — unadjusted input requested");
      } catch (err) {
        // Fallback to standard pointer lock if unadjusted fails
        try {
          await area.requestPointerLock();
          setModeUsed("Pointer Lock");
        } catch (err2) {
          // Standard browser movement fallback
          setModeUsed("Standard browser movement");
        }
      }
    } else {
      setModeUsed("Standard browser movement");
    }
  };

  const handleReset = () => {
    if (document.pointerLockElement === testAreaRef.current) {
      document.exitPointerLock();
    }
    setTestState("IDLE");
    setErrorMessage("");
    setFinalDpi(null);
    setIsTouch(false);
  };

  // Visibility interruption
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && testState === "RUNNING") {
        endTest(false, "Test interrupted — keep this tab active and try again.");
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [testState, endTest]);

  return (
    <div className="w-full bg-card border border-cyan-200/50 rounded-3xl shadow-md shadow-cyan-950/5 overflow-hidden flex flex-col">
      <div className="p-6 border-b border-border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Mouse DPI Test</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Estimate your mouse DPI using a measured physical movement.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Interactive Zone */}
        <div 
          ref={testAreaRef}
          onPointerMove={handlePointerMove}
          className="flex-1 p-8 flex flex-col items-center justify-center min-h-[400px] touch-none select-none relative bg-background"
        >
          {isTouch && testState !== "COMPLETE" ? (
             <div className="text-center p-6 bg-warning/10 rounded-lg border border-warning/20">
               <p className="text-warning font-medium">This test works best with a physical mouse on a desktop or laptop.</p>
               <Button onClick={startTest} className="mt-4">Start Anyway</Button>
             </div>
          ) : testState === "IDLE" ? (
            <div className="text-center w-full max-w-sm">
              <div className="bg-muted/30 p-6 rounded-lg border border-border mb-6 flex flex-col gap-4">
                <label className="text-sm font-semibold text-foreground text-left">Measurement Distance</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    value={distanceValue}
                    onChange={(e) => setDistanceValue(Number(e.target.value))}
                    className="flex-1 bg-background border border-input rounded-md px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    min="1"
                  />
                  <select 
                    value={distanceUnit}
                    onChange={(e) => setDistanceUnit(e.target.value)}
                    className="bg-background border border-input rounded-md px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="cm">cm</option>
                    <option value="in">inch</option>
                  </select>
                </div>
                <p className="text-xs text-muted-foreground text-left leading-relaxed">
                  Place your mouse beside a physical ruler. You will need to move it horizontally by exactly the distance shown.
                </p>
              </div>
              <Button onClick={startTest} size="lg" className="w-full">Start Measurement</Button>
            </div>
          ) : testState === "RUNNING" ? (
            <div className="text-center flex flex-col items-center justify-center h-full">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Measurement in progress</h3>
              <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
                Move your mouse horizontally exactly <strong className="text-foreground">{distanceValue} {distanceUnit}</strong>, then press <strong className="bg-muted px-2 py-1 rounded text-foreground">Space</strong> to finish.
              </p>
              <p className="text-sm text-muted-foreground">Press Esc to cancel</p>
            </div>
          ) : testState === "ERROR" ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/20 text-warning rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Measurement Failed</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {errorMessage}
              </p>
              <Button onClick={handleReset}>Try Again</Button>
            </div>
          ) : testState === "COMPLETE" ? (
            <div className="text-center flex flex-col items-center w-full max-w-lg p-6">
              <h3 className="text-lg font-bold text-muted-foreground uppercase tracking-widest mb-2">Estimated DPI</h3>
              <div className="text-6xl font-extrabold text-primary mb-6">
                ≈ {finalDpi}
              </div>
              
              <p className="text-base text-muted-foreground mb-6 leading-relaxed text-balance">
                Your browser observed approximately {finalDpi} horizontal movement units per inch during this measurement.
              </p>
              
              <div className="bg-muted/30 border border-border rounded-lg p-4 mb-8 text-left w-full space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Measurement distance:</span>
                  <strong className="text-foreground">{distanceValue} {distanceUnit}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Observed movement:</span>
                  <strong className="text-foreground">{finalMovement} units</strong>
                </div>
                <div className="flex justify-between">
                  <span>Measurement mode:</span>
                  <strong className="text-foreground text-right max-w-[200px] truncate" title={modeUsed}>{modeUsed}</strong>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground/80 mb-8 max-w-md mx-auto">
                This is a browser-based estimate and may differ from the DPI configured in your mouse software. Try running 2–3 measurements and compare them for consistency.
              </p>
              
              <Button onClick={handleReset} variant="primary" size="lg">Measure Again</Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
