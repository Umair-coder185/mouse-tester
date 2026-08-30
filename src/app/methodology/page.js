import Link from "next/link";
import { Container } from "../../components/layout/Container";

export const metadata = {
  title: "Methodology | How Our Mouse Tests Work",
  description: "Understand the technical methodologies and browser limitations behind our mouse diagnostic tools.",
  alternates: {
    canonical: '/methodology',
  },
};

export default function MethodologyPage() {
  return (
    <>
      <div className="bg-muted/30 border-b border-border py-12">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              How Our Mouse Tests Work
            </h1>
            <p className="text-lg text-muted-foreground">
              A transparent look at how we measure mouse performance directly in your browser.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-3xl space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Browser-Based Measurements</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MouseTester operates entirely within your web browser. This means our tools do not communicate directly with your mouse&apos;s internal hardware controller or USB firmware. Instead, we measure the input events that successfully travel through your mouse, through the USB protocol, into your operating system, and finally into the web browser&apos;s event loop.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Because of this pipeline, results can be affected by your operating system settings (like pointer acceleration), browser event handling efficiency, and connection type.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-card border border-border p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">Complete Mouse Test</h3>
                <p className="text-muted-foreground">Listens for standard DOM <code>PointerEvent</code> and <code>WheelEvent</code> APIs to verify basic routing of Left, Right, Middle, and side button clicks into the browser context.</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">Double Click Test</h3>
                <p className="text-muted-foreground">Runs controlled single-click trials and observes whether the browser fires repeated <code>pointerdown</code> signals within a fractional time window, indicating a bouncing microswitch.</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">Polling Rate Test</h3>
                <p className="text-muted-foreground">Analyzes the time deltas between sequential <code>pointermove</code> events fired by the browser. Because browsers heavily throttle event loops to match screen refresh rates, this test uses background circular buffers to approximate the underlying report rate, which remains a software-observed estimate.</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">Scroll Wheel Test</h3>
                <p className="text-muted-foreground">Monitors the <code>deltaY</code> property of the <code>WheelEvent</code> to check directional consistency and step count, looking for reverse inputs caused by a dirty encoder.</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">DPI Test</h3>
                <p className="text-muted-foreground">Utilizes the browser&apos;s Pointer Lock API to capture raw movement vectors without hitting screen edges. It compares the total horizontal pixel movement against a user-provided physical measurement to estimate Dots Per Inch.</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">Debounce Test</h3>
                <p className="text-muted-foreground">Implements a strict state machine to isolate the exact moment of physical press and release, logging any rapid micro-toggles (chatter) that occur during the deliberate action.</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">CPS Test</h3>
                <p className="text-muted-foreground">Divides your total valid clicks by the exact measured elapsed time utilizing the high-resolution <code>performance.now()</code> timer to prevent UI thread lag from distorting the score.</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">Drag & Hold Test</h3>
                <p className="text-muted-foreground">Combines continuous <code>pointerdown</code> validation with pointer capture mechanics to ensure the hardware switch maintains its electrical connection while horizontal friction is applied to the mouse&apos;s shell.</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">Accuracy Test</h3>
                <p className="text-muted-foreground">Calculates the Euclidean geometric distance between the absolute center coordinate of a generated target and the exact coordinate of your subsequent <code>pointerdown</code> event.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
