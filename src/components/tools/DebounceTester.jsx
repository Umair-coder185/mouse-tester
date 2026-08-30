"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../ui/Button";

const TOTAL_TRIALS = 10;
const HOLD_DURATION_MS = 500;
const SETTLE_DURATION_MS = 300;
// We consider any state toggle shorter than this as suspicious chatter
const CHATTER_WINDOW_MS = 30; 

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

export function DebounceTester() {
  // States: IDLE, READY_TO_PRESS, HOLDING, READY_TO_RELEASE, RELEASE_OBSERVATION, NEXT_TRIAL, COMPLETE
  const [testState, setTestState] = useState("IDLE");
  const [selectedButton, setSelectedButton] = useState(BUTTONS.left);
  const [currentTrial, setCurrentTrial] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const [wrongButtonMsg, setWrongButtonMsg] = useState("");
  
  // Results
  const [pressChatterCount, setPressChatterCount] = useState(0);
  const [releaseChatterCount, setReleaseChatterCount] = useState(0);
  const [inconclusiveCount, setInconclusiveCount] = useState(0);
  
  const timerRef = useRef(null);
  const stateRef = useRef(testState);
  
  // For chatter heuristics
  const lastStateChangeRef = useRef(0);
  const currentExpectedStateRef = useRef(""); // "DOWN" or "UP"
  const expectedButtonRef = useRef(selectedButton);

  useEffect(() => {
    stateRef.current = testState;
  }, [testState]);
  
  useEffect(() => {
    expectedButtonRef.current = selectedButton;
  }, [selectedButton]);

  const advanceToNextPhase = useCallback((nextPhase, delay) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setTestState(nextPhase);
    }, delay);
  }, []);

  const handlePointerDown = useCallback((e) => {
    if (e.pointerType === "touch") {
      setIsTouch(true);
      return;
    }
    
    // Ignore context menu/scroll default on test element
    
    if (stateRef.current === "IDLE" || stateRef.current === "COMPLETE") return;
    
    if (e.button !== expectedButtonRef.current) {
      if (stateRef.current !== "NEXT_TRIAL") {
        setWrongButtonMsg(`Use the ${BUTTON_NAMES[expectedButtonRef.current]}`);
        setTimeout(() => setWrongButtonMsg(""), 2000);
      }
      return;
    }
    
    setWrongButtonMsg("");
    const now = performance.now();

    if (stateRef.current === "READY_TO_PRESS") {
      setTestState("HOLDING");
      currentExpectedStateRef.current = "DOWN";
      lastStateChangeRef.current = now;
      advanceToNextPhase("READY_TO_RELEASE", HOLD_DURATION_MS);
    } 
    else if (stateRef.current === "HOLDING") {
      // We got another DOWN while holding. This implies an UP happened.
      // But we check up->down intervals.
      const interval = now - lastStateChangeRef.current;
      if (interval < CHATTER_WINDOW_MS) {
        setPressChatterCount(c => c + 1);
      }
      lastStateChangeRef.current = now;
    }
    else if (stateRef.current === "RELEASE_OBSERVATION") {
      // We expected them to release, but we got a new DOWN.
      const interval = now - lastStateChangeRef.current;
      if (interval < CHATTER_WINDOW_MS) {
         setReleaseChatterCount(c => c + 1);
      }
      lastStateChangeRef.current = now;
    }
  }, [advanceToNextPhase]);

  const handlePointerUp = useCallback((e) => {
    if (e.button !== expectedButtonRef.current) return;
    const now = performance.now();

    if (stateRef.current === "HOLDING") {
      // Released too early during hold phase
      if (timerRef.current) clearTimeout(timerRef.current);
      setTestState("NEXT_TRIAL");
      setInconclusiveCount(c => c + 1);
      setWrongButtonMsg("Released too early. Trial marked inconclusive.");
      setTimeout(() => setWrongButtonMsg(""), 2000);
      
      setCurrentTrial(t => {
        if (t + 1 >= TOTAL_TRIALS) return TOTAL_TRIALS; // Will trigger effect to COMPLETE
        return t + 1;
      });
    }
    else if (stateRef.current === "READY_TO_RELEASE") {
      setTestState("RELEASE_OBSERVATION");
      currentExpectedStateRef.current = "UP";
      lastStateChangeRef.current = now;
      
      advanceToNextPhase("NEXT_TRIAL", SETTLE_DURATION_MS);
      
      setCurrentTrial(t => {
        return t + 1;
      });
    }
    else if (stateRef.current === "RELEASE_OBSERVATION") {
      // Additional UP implies a DOWN happened in observation
      const interval = now - lastStateChangeRef.current;
      if (interval < CHATTER_WINDOW_MS) {
        setReleaseChatterCount(c => c + 1);
      }
      lastStateChangeRef.current = now;
    }
  }, [advanceToNextPhase]);

  const handlePointerCancel = useCallback(() => {
    if (stateRef.current === "HOLDING" || stateRef.current === "RELEASE_OBSERVATION") {
      if (timerRef.current) clearTimeout(timerRef.current);
      setTestState("NEXT_TRIAL");
      setInconclusiveCount(c => c + 1);
      
      setCurrentTrial(t => t + 1);
    }
  }, []);

  // When moving to NEXT_TRIAL, auto advance to READY_TO_PRESS unless complete
  useEffect(() => {
    if (testState === "NEXT_TRIAL") {
      if (currentTrial >= TOTAL_TRIALS) {
        setTimeout(() => setTestState("COMPLETE"), 0);
      } else {
        const t = setTimeout(() => {
          setTestState("READY_TO_PRESS");
        }, 300);
        return () => clearTimeout(t);
      }
    }
    if (testState === "RELEASE_OBSERVATION" && currentTrial >= TOTAL_TRIALS) {
       // Just wait for observation to finish
    }
  }, [testState, currentTrial]);

  const handleContextMenu = (e) => {
    if (selectedButton === BUTTONS.right) {
      e.preventDefault();
    }
  };

  const handleMouseDown = (e) => {
    if (selectedButton === BUTTONS.middle && e.button === 1) {
      e.preventDefault();
    }
  };

  const startTest = () => {
    setTestState("READY_TO_PRESS");
    setCurrentTrial(0);
    setPressChatterCount(0);
    setReleaseChatterCount(0);
    setInconclusiveCount(0);
    setWrongButtonMsg("");
    setIsTouch(false);
  };

  const resetTest = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setTestState("IDLE");
    setCurrentTrial(0);
    setPressChatterCount(0);
    setReleaseChatterCount(0);
    setInconclusiveCount(0);
    setWrongButtonMsg("");
    setIsTouch(false);
  };

  return (
    <div className="w-full bg-card border border-cyan-200/50 rounded-3xl shadow-md shadow-cyan-950/5 overflow-hidden flex flex-col">
      <div className="p-6 border-b border-border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Mouse Debounce Test</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Check for possible rapid mouse-button re-toggle or switch chatter.
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
        <div className="flex-1 p-8 flex flex-col items-center justify-center min-h-[400px] relative touch-none select-none">
          {isTouch ? (
            <div className="text-center p-6 bg-warning/10 rounded-lg border border-warning/20">
              <p className="text-warning font-medium">This test works best with a physical mouse on a desktop or laptop.</p>
            </div>
          ) : testState === "IDLE" ? (
            <div className="text-center">
              <Button onClick={startTest} size="lg">Start Test</Button>
            </div>
          ) : testState === "COMPLETE" ? (
            <div className="text-center flex flex-col items-center max-w-lg">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${pressChatterCount > 0 || releaseChatterCount > 0 ? 'bg-warning/20 text-warning' : 'bg-success/20 text-success'}`}>
                {pressChatterCount > 0 || releaseChatterCount > 0 ? (
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
                {pressChatterCount > 0 || releaseChatterCount > 0 ? "Possible rapid button re-toggle observed" : "No rapid re-toggle pattern was observed"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {pressChatterCount > 0 || releaseChatterCount > 0
                  ? "One or more unexpected state changes appeared during a controlled hold/release sequence."
                  : "No browser-observed chatter pattern appeared during these controlled trials."}
              </p>
              
              <div className="flex gap-4">
                <Button onClick={startTest} variant="primary">Test Again</Button>
              </div>
            </div>
          ) : (
            <div 
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
              onContextMenu={handleContextMenu}
              onMouseDown={handleMouseDown}
              className={`w-full max-w-sm aspect-square rounded-full border-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-150 shadow-sm ${
                testState === "READY_TO_PRESS" ? 'border-primary bg-primary/5 hover:bg-primary/10' :
                testState === "HOLDING" ? 'border-success bg-success/10 scale-95' :
                testState === "READY_TO_RELEASE" ? 'border-success bg-success/20 animate-pulse' :
                testState === "RELEASE_OBSERVATION" ? 'border-muted-foreground bg-muted/30' :
                'border-border bg-muted/10'
              }`}
            >
              <span className={`text-2xl font-bold tracking-tight text-center px-4 ${
                testState === "READY_TO_PRESS" ? 'text-primary' : 
                testState === "HOLDING" || testState === "READY_TO_RELEASE" ? 'text-success' : 'text-muted-foreground'
              }`}>
                {testState === "READY_TO_PRESS" ? "PRESS & HOLD" : 
                 testState === "HOLDING" ? "HOLD..." : 
                 testState === "READY_TO_RELEASE" ? "RELEASE NOW" : 
                 testState === "RELEASE_OBSERVATION" ? "Checking..." : 
                 testState === "NEXT_TRIAL" ? "Next trial..." : ""}
              </span>
            </div>
          )}
          
          {wrongButtonMsg && (
            <div className="absolute bottom-8 px-4 py-2 bg-foreground text-background text-sm rounded-md shadow-lg animate-in fade-in zoom-in duration-200">
              {wrongButtonMsg}
            </div>
          )}
        </div>

        <div className="md:w-80 border-t md:border-t-0 md:border-l border-border bg-muted/10 p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Test Progress</h3>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-foreground">Trial {Math.min(currentTrial, TOTAL_TRIALS)} of {TOTAL_TRIALS}</span>
              <span className="text-muted-foreground">{Math.round((Math.min(currentTrial, TOTAL_TRIALS) / TOTAL_TRIALS) * 100)}%</span>
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
                <span className="text-muted-foreground">Press-edge chatter:</span>
                <span className={`font-semibold ${pressChatterCount > 0 ? 'text-warning' : 'text-foreground'}`}>{pressChatterCount}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Release-edge chatter:</span>
                <span className={`font-semibold ${releaseChatterCount > 0 ? 'text-warning' : 'text-foreground'}`}>{releaseChatterCount}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-muted-foreground">Inconclusive trials:</span>
                <span className="font-semibold text-foreground">{inconclusiveCount}</span>
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
