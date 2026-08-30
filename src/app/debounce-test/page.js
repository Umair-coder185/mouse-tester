import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { DebounceTester } from "../../components/tools/DebounceTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Mouse Debounce Test – Check Button Chatter",
  description: "Check for possible rapid mouse-button re-toggle or switch chatter using controlled browser-based press and release trials.",
  alternates: {
    canonical: '/debounce-test',
  },
};

export default function DebounceTestPage() {
  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: metadata.title,
          description: metadata.description,
          url: `${SITE_CONFIG.url}/debounce-test`
        }} 
      />
      <div className="bg-muted/30 border-b border-border py-8 md:py-12">
        <Container>
          <div className="max-w-4xl">
            <Breadcrumb items={[
              { name: 'Home', path: '/' },
              { name: 'All Tests', path: '/all-tests' },
              { name: 'Debounce Test', path: '/debounce-test' }
            ]} />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              Mouse Debounce Test
            </h1>
            <p className="text-lg text-muted-foreground">
              Check for possible rapid mouse-button re-toggle or switch chatter using controlled press and release trials.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <DebounceTester />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What is mouse debounce?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you press a physical button on a mouse, the internal metal contacts hit each other. Because they are metal, they often &quot;bounce&quot; microscopically for a few milliseconds before settling. To prevent the computer from reading this single press as dozens of rapid clicks, mouse firmware uses a &quot;debounce delay&quot; to ignore further inputs for a fraction of a second.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What does this test actually measure?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This test observes button state transitions in the browser. By asking you to deliberately hold and then cleanly release the button, we can monitor the edges of your input for &quot;chatter&quot; (a fast down/up/down signal) that might indicate a failing microswitch or an overly aggressive software debounce setting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Debounce test vs double click test
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The <Link href="/double-click-test" className="text-primary hover:underline font-medium">Double Click Test</Link> simply asks you to click normally to see if an entirely separate, unwanted second click registers. The Debounce Test slows the process down, separating the <strong>Press</strong> action from the <strong>Release</strong> action to isolate exactly which part of the switch engagement is causing the bounce.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Can this test read my mouse&apos;s firmware debounce setting?</h3>
                  <p className="text-muted-foreground">No. Browsers cannot read internal mouse settings. It only monitors the final electrical signals that make it through the mouse firmware and the operating system into the web browser.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">What is switch chatter?</h3>
                  <p className="text-muted-foreground">Switch chatter occurs when a switch contact wears out or gathers dust, causing it to send rapid multiple electrical pulses when only pressed once. This causes unwanted double-clicks or causes items to drop while dragging.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Why should I hold the button during the test?</h3>
                  <p className="text-muted-foreground">Holding the button ensures a clear separation between the press and the release. This prevents a genuinely fast normal click from being confused with micro-chatter.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Does a possible re-toggle mean my mouse is broken?</h3>
                  <p className="text-muted-foreground">Not immediately. If you have your mouse debounce time manually set to 0 ms in gaming software, re-toggling is expected and normal. If it happens consistently on a standard mouse, the physical switch might be degrading.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border flex flex-wrap gap-4">
               <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Back to Complete Mouse Test
               </Link>
               <Link href="/double-click-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Run Double Click Test
               </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
