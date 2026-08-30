"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../ui/Button";

const TOTAL_TRIALS = 3;
const HOLD_DURATION_MS = 4000;
const MIN_DRAG_DISTANCE = 50; // px

const BUTTONS = {
  left: 0,
  middle: 1,
  right: 2,
};

const BUTTON_NAMES = {
  0: "Left Button",
  1: "Middle Button",
  2: "Right Button",
};

export function DragHoldTester() {
  // States: IDLE, HOLDING, NEXT_TRIAL, COMPLETE
  const [testState, setTestState] = useState("IDLE");
  const [selectedButton, setSelectedButton] = useState(BUTTONS.left);
  const [currentTrial, setCurrentTrial] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const [wrongButtonMsg, setWrongButtonMsg] = useState("");
  
  // Realtime UI updates for puck
  const [puckOffset, setPuckOffset] = useState({ x: 0, y: 0 });
  const [timeRemaining, setTimeRemaining] = useState((HOLD_DURATION_MS / 1000).toFixed(1));
  
  // Results
  const [successCount, setSuccessCount] = useState(0);
  const [interruptedCount, setInterruptedCount] = useState(0);
  const [inconclusiveCount, setInconclusiveCount] = useState(0);
  const [maxHoldTime, setMaxHoldTime] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);
  
  const testAreaRef = useRef(null);
  const puckRef = useRef(null);
  const stateRef = useRef(testState);
  const expectedButtonRef = useRef(selectedButton);
  const rAFRef = useRef(null);
  
  // Trial tracking
  const trialDataRef = useRef({
    startTime: 0,
    endTime: 0,
    distance: 0,
    lastPos: null,
    startX: 0,
    startY: 0
  });

  useEffect(() => {
    stateRef.current = testState;
  }, [testState]);
  
  useEffect(() => {
    expectedButtonRef.current = selectedButton;
  }, [selectedButton]);

  const recordTrialResult = useCallback((status, holdTimeMs, distance) => {
    if (status === "SUCCESS") setSuccessCount(c => c + 1);
    if (status === "INTERRUPTED") setInterruptedCount(c => c + 1);
    if (status === "INCONCLUSIVE") setInconclusiveCount(c => c + 1);
    
    if (holdTimeMs > maxHoldTime) setMaxHoldTime(holdTimeMs);
    setTotalDistance(d => d + distance);
    
    setPuckOffset({ x: 0, y: 0 });
    
    setCurrentTrial(t => {
      const next = t + 1;
      if (next >= TOTAL_TRIALS) {
        setTestState("COMPLETE");
      } else {
        setTestState("NEXT_TRIAL");
        setTimeout(() => setTestState("IDLE"), 1000);
      }
      return next;
    });
  }, [maxHoldTime]);

  const updateLoop = useCallback(function updateLoopFn() {
    if (stateRef.current !== "HOLDING") return;
    
    const now = performance.now();
    const data = trialDataRef.current;
    
    if (now >= data.endTime) {
      // Reached full hold time! But wait, they need to have moved.
      if (data.distance < MIN_DRAG_DISTANCE) {
         setWrongButtonMsg("You must move the puck while holding it.");
         setTimeout(() => setWrongButtonMsg(""), 3000);
         // Extend the timer
         data.endTime = now + 500;
         setTimeRemaining("0.0");
         rAFRef.current = requestAnimationFrame(updateLoopFn);
      } else {
         setTimeRemaining("0.0");
         // User actually successfully held it.
         // We wait for them to release it to log it, or they can just sit there.
         // Let's actually complete the trial successfully here.
         if (puckRef.current) {
           puckRef.current.releasePointerCapture(data.pointerId);
         }
         recordTrialResult("SUCCESS", now - data.startTime, data.distance);
      }
      return;
    }

    setTimeRemaining(Math.max(0, ((data.endTime - now) / 1000)).toFixed(1));
    rAFRef.current = requestAnimationFrame(updateLoopFn);
  }, [recordTrialResult]);

  const handlePointerDown = useCallback((e) => {
    if (e.pointerType === "touch") {
      setIsTouch(true);
      return;
    }
    
    if (stateRef.current !== "IDLE") return;
    
    if (e.button !== expectedButtonRef.current) {
      setWrongButtonMsg(`Use the ${BUTTON_NAMES[expectedButtonRef.current]} to drag`);
      setTimeout(() => setWrongButtonMsg(""), 2000);
      return;
    }
    
    setWrongButtonMsg("");
    setTestState("HOLDING");
    
    // Capture pointer
    e.target.setPointerCapture(e.pointerId);
    
    const now = performance.now();
    trialDataRef.current = {
      startTime: now,
      endTime: now + HOLD_DURATION_MS,
      distance: 0,
      lastPos: { x: e.clientX, y: e.clientY },
      startX: e.clientX,
      startY: e.clientY,
      pointerId: e.pointerId
    };
    
    setTimeRemaining((HOLD_DURATION_MS / 1000).toFixed(1));
    
    if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    rAFRef.current = requestAnimationFrame(updateLoop);
  }, [updateLoop]);

  const handlePointerMove = useCallback((e) => {
    if (stateRef.current !== "HOLDING") return;
    
    const data = trialDataRef.current;
    if (data.lastPos) {
      const dx = e.clientX - data.lastPos.x;
      const dy = e.clientY - data.lastPos.y;
      data.distance += Math.sqrt(dx * dx + dy * dy);
    }
    data.lastPos = { x: e.clientX, y: e.clientY };
    
    // Calculate bounding box offset so puck doesn't escape visually
    if (testAreaRef.current) {
      const rect = testAreaRef.current.getBoundingClientRect();
      let offsetX = e.clientX - data.startX;
      let offsetY = e.clientY - data.startY;
      
      // Limit puck visuals roughly to container (simple clamping)
      const maxDist = rect.width / 2 - 40;
      const maxDistY = rect.height / 2 - 40;
      
      offsetX = Math.max(-maxDist, Math.min(maxDist, offsetX));
      offsetY = Math.max(-maxDistY, Math.min(maxDistY, offsetY));
      
      setPuckOffset({ x: offsetX, y: offsetY });
    }
  }, []);

  const handlePointerUp = useCallback((e) => {
    if (stateRef.current !== "HOLDING") return;
    if (e.button !== expectedButtonRef.current) return;
    
    if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    
    const data = trialDataRef.current;
    const now = performance.now();
    const heldMs = now - data.startTime;
    
    // They released before duration completed
    if (now < data.endTime) {
      setWrongButtonMsg("The button was released before this trial finished.");
      setTimeout(() => setWrongButtonMsg(""), 3000);
      recordTrialResult("INTERRUPTED", heldMs, data.distance);
    } else {
      // Actually we already succeeded inside updateLoop, but if it somehow reached here:
      recordTrialResult("SUCCESS", heldMs, data.distance);
    }
    
    if (e.target.hasPointerCapture(e.pointerId)) {
      e.target.releasePointerCapture(e.pointerId);
    }
  }, [recordTrialResult]);

  const handlePointerCancel = useCallback((e) => {
    if (stateRef.current !== "HOLDING") return;
    
    if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    
    const data = trialDataRef.current;
    const now = performance.now();
    const heldMs = now - data.startTime;
    
    setWrongButtonMsg("Test interrupted by system or browser.");
    setTimeout(() => setWrongButtonMsg(""), 3000);
    recordTrialResult("INCONCLUSIVE", heldMs, data.distance);
    
    if (e.target.hasPointerCapture(e.pointerId)) {
      e.target.releasePointerCapture(e.pointerId);
    }
  }, [recordTrialResult]);

  const handleContextMenu = (e) => {
    if (selectedButton === BUTTONS.right) {
      e.preventDefault();
    }
  };

  const handleMouseDown = (e) => {
    // Only prevent default on middle click to stop auto-scroll in test zone
    if (selectedButton === BUTTONS.middle && e.button === 1) {
      e.preventDefault();
    }
  };

  const resetTest = () => {
    if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    setTestState("IDLE");
    setCurrentTrial(0);
    setSuccessCount(0);
    setInterruptedCount(0);
    setInconclusiveCount(0);
    setMaxHoldTime(0);
    setTotalDistance(0);
    setWrongButtonMsg("");
    setPuckOffset({ x: 0, y: 0 });
    setIsTouch(false);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && stateRef.current === "HOLDING") {
        handlePointerCancel({ target: { hasPointerCapture: () => false } }); 
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    };
  }, [handlePointerCancel]);

  return (
    <div className="w-full bg-card border border-cyan-200/50 rounded-3xl shadow-md shadow-cyan-950/5 overflow-hidden flex flex-col">
      <div className="p-6 border-b border-border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Drag & Hold Test</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Test whether your mouse button stays pressed while dragging.
          </p>
        </div>
        <div className="flex gap-2 bg-muted p-1 rounded-lg">
          {[BUTTONS.left, BUTTONS.middle, BUTTONS.right].map(btn => (
            <button
              key={btn}
              onClick={() => { setSelectedButton(btn); resetTest(); }}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                selectedButton === btn 
                ? 'bg-background shadow-sm text-foreground' 
                : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {BUTTON_NAMES[btn].split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div 
          ref={testAreaRef}
          className="flex-1 p-8 flex flex-col items-center justify-center min-h-[400px] relative touch-none select-none bg-background overflow-hidden"
          onContextMenu={handleContextMenu}
          onMouseDown={handleMouseDown}
        >
          {isTouch ? (
            <div className="text-center p-6 bg-warning/10 rounded-lg border border-warning/20">
              <p className="text-warning font-medium">This test works best with a physical mouse on a desktop or laptop.</p>
            </div>
          ) : testState === "COMPLETE" ? (
            <div className="text-center flex flex-col items-center max-w-lg z-10">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${interruptedCount > 0 ? 'bg-warning/20 text-warning' : 'bg-success/20 text-success'}`}>
                {interruptedCount > 0 ? (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {interruptedCount > 0 ? "Possible hold interruption observed" : "Hold and drag input remained active"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {interruptedCount > 0
                  ? "The selected button was released before the guided hold completed in one or more trials. Repeat the test and try another application/device before assuming a hardware problem."
                  : "During the completed trials, the mouse button stayed pressed successfully while dragging."}
              </p>
              
              <div className="flex gap-4">
                <Button onClick={resetTest} variant="primary">Test Again</Button>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl">
              {testState === "NEXT_TRIAL" ? (
                 <span className="text-lg font-semibold text-muted-foreground">Preparing next trial...</span>
              ) : (
                 <>
                   <div 
                     ref={puckRef}
                     onPointerDown={handlePointerDown}
                     onPointerMove={handlePointerMove}
                     onPointerUp={handlePointerUp}
                     onPointerCancel={handlePointerCancel}
                     style={{ transform: `translate(${puckOffset.x}px, ${puckOffset.y}px)` }}
                     className={`w-32 h-32 rounded-full flex flex-col items-center justify-center cursor-pointer shadow-lg select-none ${
                       testState === "HOLDING" ? 'bg-primary border-4 border-primary-foreground text-primary-foreground shadow-primary/30 shadow-xl' : 'bg-muted border-4 border-muted-foreground/30 text-foreground hover:bg-muted-foreground/10'
                     }`}
                   >
                     <span className="font-bold uppercase tracking-wider text-sm mb-1">{testState === "HOLDING" ? "HOLDING" : "DRAG ME"}</span>
                     {testState === "HOLDING" && (
                       <span className="text-2xl font-extrabold font-mono tabular-nums">{timeRemaining}s</span>
                     )}
                   </div>
                   {testState === "IDLE" && (
                     <div className="absolute bottom-8 text-muted-foreground text-sm font-medium">
                       Press and hold the {BUTTON_NAMES[selectedButton]} on the test handle and drag it around.
                     </div>
                   )}
                 </>
              )}
            </div>
          )}
          
          {wrongButtonMsg && (
            <div className="absolute bottom-6 px-4 py-2 bg-foreground text-background text-sm rounded-md shadow-lg animate-in fade-in zoom-in duration-200 z-20">
              {wrongButtonMsg}
            </div>
          )}
        </div>

        <div className="md:w-80 border-t md:border-t-0 md:border-l border-border bg-muted/10 p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Test Progress</h3>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-foreground">Trial {Math.min(currentTrial, TOTAL_TRIALS)} of {TOTAL_TRIALS}</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(Math.min(currentTrial, TOTAL_TRIALS) / TOTAL_TRIALS) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-6 flex-1">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Observations</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Successful holds:</span>
                <span className="font-semibold text-foreground">{successCount}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Interrupted holds:</span>
                <span className={`font-semibold ${interruptedCount > 0 ? 'text-warning' : 'text-foreground'}`}>{interruptedCount}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Inconclusive:</span>
                <span className="font-semibold text-foreground">{inconclusiveCount}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-muted-foreground">Max hold time:</span>
                <span className="font-semibold text-foreground">{(maxHoldTime / 1000).toFixed(1)}s</span>
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
             <Button onClick={resetTest} variant="outline" className="w-full text-sm h-9">
               Reset Test
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
