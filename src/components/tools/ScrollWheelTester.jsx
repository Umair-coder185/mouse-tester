"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../ui/Button";

const REQUIRED_EVENTS_PER_DIRECTION = 15;
const DIRECTION_HISTORY_SIZE = 5;

export function ScrollWheelTester() {
  const [testState, setTestState] = useState("IDLE"); // IDLE, PHASE_UP, PHASE_DOWN, COMPLETE
  const [upEvents, setUpEvents] = useState(0);
  const [downEvents, setDownEvents] = useState(0);
  const [reverseInputs, setReverseInputs] = useState(0);
  const [lastDirection, setLastDirection] = useState("");
  const [totalEvents, setTotalEvents] = useState(0);
  const [wheelPos, setWheelPos] = useState(0); // for visual animation
  const [isTouch, setIsTouch] = useState(false);
  
  const testAreaRef = useRef(null);
  
  // Use refs for rapid state that doesn't need to trigger re-renders on every single event
  const historyRef = useRef([]);
  const countersRef = useRef({ up: 0, down: 0, reverse: 0, total: 0 });
  const phaseRef = useRef("IDLE");
  const updateTimeoutRef = useRef(null);

  // Sync state phase to ref for the handler
  useEffect(() => {
    phaseRef.current = testState;
  }, [testState]);

  const detectIsolatedReverse = (expectedDir) => {
    const hist = historyRef.current;
    if (hist.length < 3) return false;
    
    // Convert array to string for easy pattern matching
    const pattern = hist.map(d => d === "UP" ? "U" : "D").join("");
    
    // We look for an isolated opposite direction surrounded by the expected direction
    // E.g., if expected is UP (U), look for "UDU" or "UUDUU"
    if (expectedDir === "UP" && pattern.includes("UDU")) {
      return true;
    }
    if (expectedDir === "DOWN" && pattern.includes("DUD")) {
      return true;
    }
    
    return false;
  };

  const handleWheel = useCallback((e) => {
    // Only process if test is active
    if (phaseRef.current === "IDLE" || phaseRef.current === "COMPLETE") return;
    
    // Prevent default scrolling on the page ONLY inside this component when active
    e.preventDefault();

    // Ignore pure horizontal scrolling or trackpad diagonal input where X dominates heavily
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaY) < Math.abs(e.deltaX) * 0.5) {
      return;
    }

    if (e.deltaY === 0) return;

    const direction = e.deltaY < 0 ? "UP" : "DOWN";
    
    // Visual animation update (throttled/css-based)
    setWheelPos(prev => {
      const newPos = prev + (direction === "UP" ? -15 : 15);
      return Math.max(-40, Math.min(40, newPos));
    });
    
    // Reset visual position shortly after
    if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    updateTimeoutRef.current = setTimeout(() => {
      setWheelPos(0);
    }, 150);

    const counters = countersRef.current;
    counters.total += 1;
    setLastDirection(direction);

    // Update direction buffers
    historyRef.current.push(direction);
    if (historyRef.current.length > DIRECTION_HISTORY_SIZE) {
      historyRef.current.shift();
    }

    const currentPhase = phaseRef.current;

    // Check for isolated jump/reverse
    let jumpDetected = false;
    if (currentPhase === "PHASE_UP" && detectIsolatedReverse("UP")) {
      jumpDetected = true;
    } else if (currentPhase === "PHASE_DOWN" && detectIsolatedReverse("DOWN")) {
      jumpDetected = true;
    }

    if (jumpDetected) {
      counters.reverse += 1;
      // Clear history so we don't double-count the same isolated jump
      historyRef.current = [];
    }

    if (direction === "UP") counters.up += 1;
    if (direction === "DOWN") counters.down += 1;

    // Phase transitions
    if (currentPhase === "PHASE_UP" && counters.up >= REQUIRED_EVENTS_PER_DIRECTION) {
      setTestState("PHASE_DOWN");
      historyRef.current = []; // clear history on phase change
    } else if (currentPhase === "PHASE_DOWN" && counters.down >= REQUIRED_EVENTS_PER_DIRECTION) {
      setTestState("COMPLETE");
    }

    // Throttle React state updates to avoid massive re-renders on free-spin wheels
    // We update the counters strictly via the event loop queue or conditionally
    if (counters.total % 3 === 0 || currentPhase !== phaseRef.current) {
      setUpEvents(counters.up);
      setDownEvents(counters.down);
      setReverseInputs(counters.reverse);
      setTotalEvents(counters.total);
    }
  }, []);

  // Sync final remaining counts on test complete
  useEffect(() => {
    if (testState === "COMPLETE") {
      setUpEvents(countersRef.current.up);
      setDownEvents(countersRef.current.down);
      setReverseInputs(countersRef.current.reverse);
      setTotalEvents(countersRef.current.total);
    }
  }, [testState]);

  // Bind the wheel event directly to the DOM element with passive: false
  // so we can preventDefault and stop the page from scrolling while testing.
  useEffect(() => {
    const el = testAreaRef.current;
    if (!el) return;

    el.addEventListener("wheel", handleWheel, { passive: false });
    
    // Check if the user is primarily using touch
    const handleTouch = () => setIsTouch(true);
    el.addEventListener("touchstart", handleTouch, { passive: true });

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouch);
      if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    };
  }, [handleWheel]);

  const startTest = () => {
    setTestState("PHASE_UP");
    historyRef.current = [];
    countersRef.current = { up: 0, down: 0, reverse: 0, total: 0 };
    setUpEvents(0);
    setDownEvents(0);
    setReverseInputs(0);
    setTotalEvents(0);
    setLastDirection("");
    setWheelPos(0);
    setIsTouch(false);
  };

  const handleReset = () => {
    setTestState("IDLE");
    historyRef.current = [];
    countersRef.current = { up: 0, down: 0, reverse: 0, total: 0 };
    setUpEvents(0);
    setDownEvents(0);
    setReverseInputs(0);
    setTotalEvents(0);
    setLastDirection("");
    setWheelPos(0);
  };

  return (
    <div className="w-full bg-card border border-cyan-200/50 rounded-3xl shadow-md shadow-cyan-950/5 overflow-hidden flex flex-col">
      {/* Top Bar */}
      <div className="p-6 border-b border-border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Mouse Scroll Wheel Test</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Place your cursor inside the test area and scroll the wheel steadily up and down.
          </p>
        </div>
        <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-md border border-border/50">
          Your input is processed locally in your browser.
        </div>
      </div>

      <div className="flex flex-col md:flex-row relative">
        {/* Interactive Zone */}
        <div 
          ref={testAreaRef}
          className={`flex-1 flex flex-col items-center justify-center min-h-[500px] select-none transition-colors relative ${
            testState === "IDLE" || testState === "COMPLETE" ? 'bg-muted/10' : 'bg-background'
          }`}
          style={{ isolation: 'isolate' }}
        >
          {/* Subtle track background styling */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <div className="w-24 h-[80%] border-x-2 border-dashed border-foreground/50 rounded-full"></div>
          </div>

          {isTouch && testState !== "COMPLETE" ? (
             <div className="text-center p-6 bg-warning/10 rounded-lg border border-warning/20 z-10 m-8">
               <p className="text-warning font-medium">This test is designed for a physical mouse wheel. Trackpad behavior may differ.</p>
               <Button onClick={startTest} className="mt-4">Start Anyway</Button>
             </div>
          ) : testState === "IDLE" ? (
            <div className="text-center z-10">
              <Button onClick={startTest} size="lg">Start Scroll Test</Button>
            </div>
          ) : testState === "PHASE_UP" || testState === "PHASE_DOWN" ? (
            <div className="text-center z-10 w-full px-4 flex flex-col items-center h-full justify-between py-12">
              <div className={`transition-opacity duration-300 ${testState === "PHASE_UP" ? 'opacity-100 scale-110' : 'opacity-30'}`}>
                <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">Expected Input</span>
                <span className="text-4xl font-extrabold text-foreground tracking-tight">SCROLL UP</span>
              </div>
              
              <div className="relative w-16 h-24 my-8 flex items-center justify-center rounded-full border-2 border-border bg-card shadow-inner">
                 {/* Visual Wheel Indicator */}
                 <div 
                   className="w-8 h-12 rounded-full border-2 border-primary/50 bg-primary/10 transition-transform duration-75 ease-out flex items-center justify-center"
                   style={{ transform: `translateY(${wheelPos}px)` }}
                 >
                   <div className="w-4 h-1 bg-primary/40 rounded-full my-0.5"></div>
                   <div className="w-4 h-1 bg-primary/40 rounded-full my-0.5"></div>
                   <div className="w-4 h-1 bg-primary/40 rounded-full my-0.5"></div>
                 </div>
              </div>
              
              <div className={`transition-opacity duration-300 ${testState === "PHASE_DOWN" ? 'opacity-100 scale-110' : 'opacity-30'}`}>
                <span className="text-4xl font-extrabold text-foreground tracking-tight">SCROLL DOWN</span>
                <span className="text-sm font-bold uppercase tracking-widest text-primary mt-2 block">Expected Input</span>
              </div>
            </div>
          ) : testState === "COMPLETE" ? (
            <div className="text-center flex flex-col items-center p-8 z-10 w-full max-w-lg">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${reverseInputs > 0 ? 'bg-warning/20 text-warning' : 'bg-success/20 text-success'}`}>
                {reverseInputs > 0 ? (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ) : (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {reverseInputs > 0 ? "Possible inconsistent scroll input detected" : "Scroll input looks consistent"}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {reverseInputs > 0 
                  ? "We observed one or more opposite-direction signals while you were asked to scroll steadily in one direction." 
                  : "Upward and downward wheel input was detected consistently during this test."}
              </p>
              
              <p className="text-sm text-muted-foreground/80 mb-8 max-w-md mx-auto">
                {reverseInputs > 0 
                  ? "Run the test again to confirm. Trackpads, free-spin wheels, browser behavior, and accidental direction changes can also affect results."
                  : "No unexpected reverse input was observed in this session. This browser-based test cannot guarantee that a physical scroll-wheel encoder has no intermittent issue."}
              </p>
              
              <Button onClick={handleReset} variant="primary" size="lg">Test Again</Button>
            </div>
          ) : null}
        </div>

        {/* Sidebar Results */}
        <div className="md:w-80 border-t md:border-t-0 md:border-l border-border bg-muted/10 p-6 flex flex-col">
          <div className="mb-8">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Live Status</h3>
            <div className="h-12 bg-background border border-border rounded-md flex items-center justify-center shadow-sm">
              <span className={`font-semibold text-lg tracking-tight ${testState === "IDLE" ? 'text-muted-foreground' : 'text-foreground'}`}>
                {testState === "IDLE" ? "Waiting for input" : 
                 testState === "COMPLETE" ? "Test Complete" : 
                 lastDirection ? `Scrolling ${lastDirection}` : "Ready"}
              </span>
            </div>
          </div>

          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Test Statistics</h3>
          
          <div className="space-y-4 text-sm flex-1">
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Up Events:</span>
              <span className="font-semibold text-foreground">{upEvents}</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Down Events:</span>
              <span className="font-semibold text-foreground">{downEvents}</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Total Events:</span>
              <span className="font-semibold text-foreground">{totalEvents}</span>
            </div>
            <div className="flex justify-between pb-3">
              <span className="text-muted-foreground">Possible Reverse Inputs:</span>
              <span className={`font-semibold ${reverseInputs > 0 ? 'text-warning' : 'text-foreground'}`}>{reverseInputs}</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Button onClick={handleReset} variant="outline" className="w-full text-sm h-9">
              Reset Test
            </Button>
            <p className="text-[11px] text-muted-foreground mt-4 text-center">
              Trackpads and smooth/free-spin mouse wheels may generate different event patterns from traditional stepped mouse wheels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
