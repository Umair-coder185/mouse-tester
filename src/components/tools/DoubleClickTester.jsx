"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";

const TARGET_TRIALS = 20;
const OBSERVATION_WINDOW_MS = 300;

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

export function DoubleClickTester() {
  const [testState, setTestState] = useState("IDLE"); // IDLE, READY, OBSERVING, COMPLETE
  const [selectedButton, setSelectedButton] = useState(BUTTONS.left);
  const [currentTrial, setCurrentTrial] = useState(0);
  const [sessionData, setSessionData] = useState([]);
  const [isTouch, setIsTouch] = useState(false);
  const [wrongButtonMsg, setWrongButtonMsg] = useState("");
  const router = useRouter();
  
  const timerRef = useRef(null);
  
  // Use a ref to track extra signals in the current observation window 
  // so the setTimeout closure can read the final values.
  const trialStateRef = useRef({
    extrasCount: 0,
    shortestInterval: Infinity,
    lastTime: 0
  });

  const handlePointerDown = (e) => {
    if (e.pointerType === "touch") {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);
    
    // Prevent default right-click menu or middle click auto-scroll inside target
    if (e.button === 1 || e.button === 2) {
      // In some browsers pointerdown doesn't fully stop context menu, we also use onContextMenu
    }

    if (testState === "IDLE" || testState === "COMPLETE") return;

    if (e.button !== selectedButton) {
      setWrongButtonMsg(`Use the selected ${BUTTON_NAMES[selectedButton]} for this test.`);
      setTimeout(() => setWrongButtonMsg(""), 2000);
      return;
    }

    setWrongButtonMsg("");
    const now = performance.now();

    if (testState === "READY") {
      setTestState("OBSERVING");
      trialStateRef.current = { extrasCount: 0, shortestInterval: Infinity, lastTime: now };
      
      timerRef.current = setTimeout(() => {
        // End of observation window
        const { extrasCount, shortestInterval } = trialStateRef.current;
        
        setSessionData((prev) => {
          const newData = [...prev, {
            trial: prev.length + 1,
            status: extrasCount > 0 ? "Possible extra signal" : "Normal",
            interval: shortestInterval === Infinity ? null : shortestInterval,
            extrasCount
          }];
          
          if (newData.length >= TARGET_TRIALS) {
            setTestState("COMPLETE");
            setCurrentTrial(newData.length);
          } else {
            setTestState("READY");
            setCurrentTrial(newData.length);
          }
          
          return newData;
        });
      }, OBSERVATION_WINDOW_MS);
      
    } else if (testState === "OBSERVING") {
      // Extra signal detected during observation window
      const interval = Math.round(now - trialStateRef.current.lastTime);
      trialStateRef.current.extrasCount += 1;
      trialStateRef.current.shortestInterval = Math.min(trialStateRef.current.shortestInterval, interval);
      trialStateRef.current.lastTime = now;
    }
  };

  const handleContextMenu = (e) => {
    if (selectedButton === 2) {
      e.preventDefault();
    }
  };

  const handleMouseDown = (e) => {
    if (selectedButton === 1 && e.button === 1) {
      e.preventDefault();
    }
  };

  const handleStart = () => {
    setTestState("READY");
    setCurrentTrial(0);
    setSessionData([]);
    setWrongButtonMsg("");
    setIsTouch(false);
  };

  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setTestState("IDLE");
    setCurrentTrial(0);
    setSessionData([]);
    setWrongButtonMsg("");
    setIsTouch(false);
  };

  const changeButton = (btnVal) => {
    setSelectedButton(btnVal);
    handleReset();
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const totalObserved = sessionData.reduce((acc, curr) => acc + 1 + curr.extrasCount, 0);
  const possibleDuplicates = sessionData.filter(d => d.extrasCount > 0).length;
  const overallShortestInterval = sessionData.reduce((min, curr) => {
    if (curr.interval !== null && curr.interval < min) return curr.interval;
    return min;
  }, Infinity);

  return (
    <div className="w-full bg-card border border-cyan-200/50 rounded-3xl shadow-md shadow-cyan-950/5 overflow-hidden flex flex-col">
      {/* Top controls */}
      <div className="p-6 border-b border-border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Mouse Double Click Test</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Press the test button once each time it becomes ready. Do not intentionally double-click.
          </p>
        </div>
        
        <div className="flex gap-2 bg-muted p-1 rounded-lg">
          {[BUTTONS.left, BUTTONS.middle, BUTTONS.right].map(btn => (
            <button
              key={btn}
              onClick={() => changeButton(btn)}
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
        {/* Testing Area */}
        <div className="flex-1 p-8 flex flex-col items-center justify-center min-h-[400px] relative touch-none select-none">
          {isTouch ? (
            <div className="text-center p-6 bg-warning/10 rounded-lg border border-warning/20">
              <p className="text-warning font-medium">This diagnostic works best with a physical mouse on a desktop or laptop.</p>
            </div>
          ) : testState === "IDLE" ? (
            <div className="text-center">
              <Button onClick={handleStart} size="lg">Start Test</Button>
            </div>
          ) : testState === "COMPLETE" ? (
            <div className="text-center flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${possibleDuplicates === 0 ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                {possibleDuplicates === 0 ? (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {possibleDuplicates === 0 ? "No duplicate registrations detected" : "Possible duplicate input detected"}
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-2">
                {possibleDuplicates === 0 
                  ? "All 20 single-click trials registered as expected in this session."
                  : `We observed additional press signals during ${possibleDuplicates} of the single-click trials.`}
              </p>
              <p className="text-xs text-muted-foreground/80 max-w-md mx-auto mb-8">
                {possibleDuplicates === 0 
                  ? "This does not guarantee that a mouse switch can never double-click, but no unintended duplicate input was observed during this test."
                  : "Retest a few times before drawing a conclusion. Browser behavior, mouse software, connection quality, and the physical switch can all affect input."}
              </p>
              
              <div className="flex gap-4">
                <Button onClick={handleStart} variant="primary">Test Again</Button>
                {possibleDuplicates > 0 && (
                  <Button onClick={() => router.push('/')} variant="outline">Run Complete Mouse Test</Button>
                )}
              </div>
            </div>
          ) : (
            <div 
              onPointerDown={handlePointerDown}
              onContextMenu={handleContextMenu}
              onMouseDown={handleMouseDown}
              className={`w-full max-w-xs aspect-square rounded-full border-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 shadow-sm ${
                testState === "READY" 
                  ? 'border-primary bg-primary/5 hover:bg-primary/10 hover:shadow-md'
                  : 'border-muted-foreground bg-muted/30 cursor-wait'
              }`}
            >
              <span className={`text-2xl font-bold tracking-tight ${testState === "READY" ? 'text-primary' : 'text-muted-foreground'}`}>
                {testState === "READY" ? "CLICK ONCE" : "Checking input..."}
              </span>
              <span className="text-sm font-medium text-muted-foreground mt-2">
                {testState === "READY" ? `Press the ${BUTTON_NAMES[selectedButton]}` : "Wait for next trial"}
              </span>
            </div>
          )}
          
          {wrongButtonMsg && (
            <div className="absolute bottom-8 px-4 py-2 bg-foreground text-background text-sm rounded-md shadow-lg animate-in fade-in zoom-in duration-200">
              {wrongButtonMsg}
            </div>
          )}
        </div>

        {/* Sidebar Results / Status */}
        <div className="md:w-80 border-t md:border-t-0 md:border-l border-border bg-muted/10 p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Test Progress</h3>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-foreground">Trial {Math.min(currentTrial + 1, TARGET_TRIALS)} of {TARGET_TRIALS}</span>
              <span className="text-muted-foreground">{Math.round((currentTrial / TARGET_TRIALS) * 100)}%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(currentTrial / TARGET_TRIALS) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-6 flex-1">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Session Data</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Intended clicks:</span>
                <span className="font-semibold text-foreground">{currentTrial}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Observed signals:</span>
                <span className="font-semibold text-foreground">{totalObserved}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Possible duplicates:</span>
                <span className={`font-semibold ${possibleDuplicates > 0 ? 'text-warning' : 'text-foreground'}`}>{possibleDuplicates}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-muted-foreground">Shortest interval:</span>
                <span className="font-semibold text-foreground">
                  {overallShortestInterval === Infinity ? '--' : `${overallShortestInterval} ms`}
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
             <Button onClick={handleReset} variant="outline" className="w-full text-sm h-9">
               Reset Test
             </Button>
          </div>
        </div>
      </div>
      
      {/* Session History Log */}
      {sessionData.length > 0 && (
        <div className="border-t border-border bg-muted/5 p-6">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Test Details</h3>
          <div className="max-h-40 overflow-y-auto pr-2 space-y-2">
            {[...sessionData].reverse().map((data) => (
              <div key={data.trial} className="flex items-center justify-between text-sm py-1 border-b border-border/50 last:border-0">
                <span className="text-muted-foreground w-16">Trial {data.trial}</span>
                <span className={`flex-1 ${data.extrasCount > 0 ? 'text-warning font-medium' : 'text-foreground'}`}>
                  {data.status} {data.interval ? `· ${data.interval} ms` : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
