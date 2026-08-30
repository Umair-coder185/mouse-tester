"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "../ui/Button";

const BUTTON_MAP = {
  0: "left",
  1: "middle",
  2: "right",
  3: "back",
  4: "forward",
};

const BUTTON_NAMES = {
  left: "Left",
  middle: "Middle",
  right: "Right",
  back: "Back (Mouse 4)",
  forward: "Forward (Mouse 5)",
};

const REQUIRED_TESTS = ["left", "right", "middle", "scrollUp", "scrollDown", "move"];

export function MouseTester() {
  const [stats, setStats] = useState({
    left: 0,
    right: 0,
    middle: 0,
    back: 0,
    forward: 0,
    scrollUp: 0,
    scrollDown: 0,
  });
  
  const [activeButtons, setActiveButtons] = useState(new Set());
  const [testedInputs, setTestedInputs] = useState(new Set());
  const [currentAction, setCurrentAction] = useState("Waiting for input...");
  const [movementDetected, setMovementDetected] = useState(false);
  const testAreaRef = useRef(null);

  const handlePointerDown = (e) => {
    // Only process mouse and pen events. We ignore touch to avoid alarming errors,
    // but pointerdown captures all.
    if (e.pointerType === "touch") {
      setCurrentAction("Mouse testing works best with a physical mouse.");
      return;
    }
    
    // Prevent default to avoid middle-click auto-scroll and side-button navigation.
    // However, calling preventDefault on pointerdown can sometimes prevent pointer capture.
    // For a test area, this is usually acceptable, but we'll also capture pointer to track it outside.
    e.target.setPointerCapture(e.pointerId);
    
    const btnKey = BUTTON_MAP[e.button];
    if (!btnKey) return;

    setActiveButtons((prev) => {
      const next = new Set(prev);
      next.add(btnKey);
      return next;
    });

    setTestedInputs((prev) => {
      const next = new Set(prev);
      next.add(btnKey);
      return next;
    });

    setStats((prev) => ({
      ...prev,
      [btnKey]: prev[btnKey] + 1,
    }));

    setCurrentAction(`Holding ${BUTTON_NAMES[btnKey]} Button`);
  };

  const handlePointerUp = (e) => {
    e.target.releasePointerCapture(e.pointerId);
    
    const btnKey = BUTTON_MAP[e.button];
    if (!btnKey) return;

    setActiveButtons((prev) => {
      const next = new Set(prev);
      next.delete(btnKey);
      return next;
    });

    setCurrentAction(`${BUTTON_NAMES[btnKey]} Button Released`);
  };

  const handlePointerMove = (e) => {
    if (e.pointerType === "touch") return;
    if (!movementDetected) {
      setMovementDetected(true);
      setTestedInputs((prev) => {
        const next = new Set(prev);
        next.add("move");
        return next;
      });
    }
    
    // Only update current action if not holding a button, to avoid spamming over hold status
    if (activeButtons.size === 0) {
      setCurrentAction("Mouse movement detected");
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent right-click menu only in this zone
  };

  const handleMouseDown = (e) => {
    // Secondary prevention for side-button navigation
    if (e.button === 3 || e.button === 4 || e.button === 1) {
      e.preventDefault();
    }
  };

  const handleMouseUp = (e) => {
    if (e.button === 3 || e.button === 4 || e.button === 1) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const area = testAreaRef.current;
    if (!area) return;

    const handleWheel = (e) => {
      e.preventDefault(); // Prevent page scrolling
      
      const direction = e.deltaY > 0 ? "scrollDown" : e.deltaY < 0 ? "scrollUp" : null;
      if (!direction) return;

      setStats((prev) => ({
        ...prev,
        [direction]: prev[direction] + 1,
      }));

      setTestedInputs((prev) => {
        const next = new Set(prev);
        next.add(direction);
        return next;
      });

      setCurrentAction(direction === "scrollUp" ? "Scroll Up Detected" : "Scroll Down Detected");
    };

    // Attach passive: false so we can preventDefault
    area.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      area.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleReset = () => {
    setStats({
      left: 0, right: 0, middle: 0, back: 0, forward: 0, scrollUp: 0, scrollDown: 0
    });
    setActiveButtons(new Set());
    setTestedInputs(new Set());
    setCurrentAction("Waiting for input...");
    setMovementDetected(false);
  };

  // Progress logic
  const completedRequired = REQUIRED_TESTS.filter(test => testedInputs.has(test)).length;
  const progressPercentage = (completedRequired / REQUIRED_TESTS.length) * 100;
  const isComplete = completedRequired === REQUIRED_TESTS.length;

  return (
    <div className="w-full bg-card border border-cyan-200/50 rounded-3xl shadow-md shadow-cyan-950/5 overflow-hidden flex flex-col md:flex-row">
      {/* LEFT: Testing Zone & Diagram */}
      <div 
        ref={testAreaRef}
        className="relative flex-1 bg-muted/30 p-8 flex flex-col items-center justify-center min-h-[400px] touch-none select-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary/50"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
        onContextMenu={handleContextMenu}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        tabIndex={0}
        aria-label="Interactive mouse testing area"
      >
        <p className="absolute top-4 text-sm font-medium text-muted-foreground text-center px-4">
          Move your mouse here, press buttons, and scroll.
        </p>

        {/* Visual Mouse Diagram */}
        <div className="relative w-40 h-64 mt-8 rounded-full border-4 border-border bg-card shadow-inner flex flex-col items-center p-2">
          {/* Cord */}
          <div className="absolute -top-12 w-1 h-12 bg-border"></div>
          
          <div className="flex w-full h-24 gap-1 relative">
            {/* Left Button */}
            <div className={`flex-1 rounded-tl-full rounded-bl-sm border-2 border-border transition-colors ${activeButtons.has('left') ? 'bg-primary border-primary' : testedInputs.has('left') ? 'bg-primary/10' : 'bg-muted'}`}></div>
            
            {/* Scroll Wheel / Middle */}
            <div className="w-6 h-full flex flex-col items-center justify-start pt-2">
              <div className={`w-3 h-8 rounded-full border-2 border-border transition-colors ${activeButtons.has('middle') ? 'bg-primary border-primary' : testedInputs.has('middle') || testedInputs.has('scrollUp') || testedInputs.has('scrollDown') ? 'bg-primary/20' : 'bg-muted'}`}></div>
            </div>

            {/* Right Button */}
            <div className={`flex-1 rounded-tr-full rounded-br-sm border-2 border-border transition-colors ${activeButtons.has('right') ? 'bg-primary border-primary' : testedInputs.has('right') ? 'bg-primary/10' : 'bg-muted'}`}></div>
          </div>
          
          {/* Side Buttons container (visual only, left side) */}
          <div className="absolute left-[-8px] top-28 flex flex-col gap-1">
            <div className={`w-2 h-8 rounded-l-md border-2 border-r-0 border-border transition-colors ${activeButtons.has('forward') ? 'bg-primary border-primary' : testedInputs.has('forward') ? 'bg-primary/10' : 'bg-muted'}`}></div>
            <div className={`w-2 h-8 rounded-l-md border-2 border-r-0 border-border transition-colors ${activeButtons.has('back') ? 'bg-primary border-primary' : testedInputs.has('back') ? 'bg-primary/10' : 'bg-muted'}`}></div>
          </div>

          {/* Mouse Body (Movement indicator) */}
          <div className={`mt-2 w-full flex-1 rounded-b-full border-2 border-border transition-colors flex items-center justify-center ${movementDetected ? 'bg-primary/5' : 'bg-card'}`}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-30">
               {/* simple logo or dot */}
               <div className={`w-2 h-2 rounded-full ${movementDetected ? 'bg-primary' : 'bg-border'}`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Live Status & Results */}
      <div className="flex-1 p-6 md:p-8 border-t md:border-t-0 md:border-l border-border bg-card flex flex-col">
        <div className="mb-8">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Live Input</h3>
          <div 
            className="p-4 rounded-lg bg-muted text-foreground font-medium text-lg min-h-[60px] flex items-center shadow-sm"
            aria-live="polite"
          >
            {currentAction}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Input Counters</h3>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Left Clicks:</span>
              <span className="font-semibold">{stats.left}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Right Clicks:</span>
              <span className="font-semibold">{stats.right}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Middle Clicks:</span>
              <span className="font-semibold">{stats.middle}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Scroll Up:</span>
              <span className="font-semibold">{stats.scrollUp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Scroll Down:</span>
              <span className="font-semibold">{stats.scrollDown}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Movement:</span>
              <span className="font-semibold">{movementDetected ? "Yes" : "Waiting"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Side Back:</span>
              <span className="font-semibold">{stats.back}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Side Forward:</span>
              <span className="font-semibold">{stats.forward}</span>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Test Progress</h3>
          
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-3">
            <div 
              className={`h-full transition-all duration-500 ease-in-out ${isComplete ? 'bg-success' : 'bg-primary'}`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          <p className="text-sm font-medium mb-2">
            {completedRequired} of {REQUIRED_TESTS.length} basic checks completed
          </p>
          
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            {isComplete 
              ? "Basic mouse inputs are responding normally. This test confirms your browser receives the inputs. Side buttons are optional."
              : "Everything tested so far is responding normally. Keep interacting with the test area."}
          </p>

          <Button onClick={handleReset} variant="outline" className="w-full">
            Reset Test
          </Button>
        </div>
      </div>
    </div>
  );
}
