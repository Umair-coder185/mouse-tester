import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { DragHoldTester } from "../../components/tools/DragHoldTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Mouse Drag Test – Test Click and Hold",
  description: "Test whether your mouse button stays pressed while dragging with a browser-based click-and-hold diagnostic.",
  alternates: {
    canonical: '/drag-test',
  },
};

export default function DragTestPage() {
  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: metadata.title,
          description: metadata.description,
          url: `${SITE_CONFIG.url}/drag-test`
        }} 
      />
      <div className="bg-muted/30 border-b border-border py-8 md:py-12">
        <Container>
          <div className="max-w-4xl">
            <Breadcrumb items={[
              { name: 'Home', path: '/' },
              { name: 'All Tests', path: '/all-tests' },
              { name: 'Drag & Hold Test', path: '/drag-test' }
            ]} />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              Mouse Drag & Hold Test
            </h1>
            <p className="text-lg text-muted-foreground">
              Check if your mouse accidentally releases items while dragging.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <DragHoldTester />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What does the Drag & Hold Test check?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This tool checks whether a mouse button remains continuously pressed while the user moves the mouse. It is specifically useful for diagnosing scenarios where you might accidentally drop a file while dragging it across your desktop, or where a weapon stops firing unexpectedly in a video game while holding the trigger.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Why does my mouse release while dragging?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Possible causes include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Worn Switch:</strong> The most common hardware cause. The internal metal spring in the microswitch loses tension over time and microscopically bounces off the contact point when horizontal friction is applied to the mouse shell.</li>
                <li><strong>Accidental Release:</strong> Relaxing your finger grip slightly while concentrating on moving the mouse.</li>
                <li><strong>Connection Issues:</strong> Wireless interference or a faulty USB cable temporarily dropping the data packet that says &quot;I am still holding this button.&quot;</li>
                <li><strong>Software Overlays:</strong> Applications intercepting mouse inputs unexpectedly.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What should I do if the hold keeps interrupting?
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-lg">
                <li>Press more firmly and try the test again to rule out accidental finger relaxation.</li>
                <li>Test the other buttons (Middle/Right) to see if the issue is isolated to a single switch.</li>
                <li>If you are using a wireless mouse, plug it in directly with a wire to rule out radio interference.</li>
                <li>If the interruption is repeatable across different environments and computers, the switch may require replacement.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Does an interrupted hold mean my mouse is broken?</h3>
                  <p className="text-muted-foreground">Not necessarily. It could be user error, a smudge on a trackpad, or momentary wireless interference. However, if it happens consistently and exclusively on your primary click button, hardware wear is a strong possibility.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Can wireless connection issues affect dragging?</h3>
                  <p className="text-muted-foreground">Yes. If a wireless mouse loses connection for even a few milliseconds, the operating system may interpret this as a button release to prevent a &quot;stuck click&quot; scenario, causing you to drop whatever you were dragging.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Why does drag work in one app but not another?</h3>
                  <p className="text-muted-foreground">Different applications handle mouse events differently. Some games use raw input, bypassing the operating system&apos;s built-in debounce software, making hardware flaws much more obvious than they are on your desktop.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Should I repeat the test?</h3>
                  <p className="text-muted-foreground">Always. A single interrupted trial could just mean you brushed a notification or tapped the Escape key. Try to complete the 3 trials cleanly.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border flex flex-wrap gap-4">
               <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Back to Complete Mouse Test
               </Link>
               <Link href="/debounce-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Run Debounce Test
               </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
