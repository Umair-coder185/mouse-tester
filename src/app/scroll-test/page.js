import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { ScrollWheelTester } from "../../components/tools/ScrollWheelTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Mouse Scroll Test – Test Scroll Wheel Up & Down",
  description: "Test your mouse scroll wheel for up and down input, responsiveness, and possible unexpected reverse scroll signals directly in your browser.",
  alternates: {
    canonical: '/scroll-test',
  },
};

export default function ScrollTestPage() {
  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: metadata.title,
          description: metadata.description,
          url: `${SITE_CONFIG.url}/scroll-test`
        }} 
      />
      <div className="bg-muted/30 border-b border-border py-8 md:py-12">
        <Container>
          <div className="max-w-4xl">
            <Breadcrumb items={[
              { name: 'Home', path: '/' },
              { name: 'All Tests', path: '/all-tests' },
              { name: 'Scroll Wheel Test', path: '/scroll-test' }
            ]} />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              Mouse Scroll Wheel Test
            </h1>
            <p className="text-lg text-muted-foreground">
              Scroll your mouse wheel inside the test area to check whether up and down inputs are being detected normally.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollWheelTester />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What does the scroll wheel test check?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It checks whether the browser receives upward and downward wheel events and looks for possible isolated opposite-direction signals during guided scrolling. It is designed to evaluate browser-observed consistency.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                How to use the test
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-lg">
                <li>Start the test.</li>
                <li>Scroll steadily upward when instructed.</li>
                <li>Then scroll steadily downward.</li>
                <li>Review the consistency result.</li>
                <li>Retest if unexpected reverse inputs appear.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Why does my mouse scroll the wrong way sometimes?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Possible causes may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Accidental wheel movement (especially on frictionless/free-spin wheels)</li>
                <li>A worn or dirty mechanical encoder inside the mouse</li>
                <li>Mouse software or companion app settings</li>
                <li>Operating-system settings or scroll inversion</li>
                <li>Trackpad inertia creating false events after a physical gesture ends</li>
                <li>Browser input handling glitches</li>
              </ul>
            </div>
            
            <div>
               <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                 What should I do if reverse scrolling is detected?
               </h2>
               <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-lg">
                 <li>Run the test again.</li>
                 <li>Scroll more slowly and deliberately.</li>
                 <li>Test in another browser.</li>
                 <li>Check mouse software/settings.</li>
                 <li>If wireless, verify the connection.</li>
                 <li>Test another USB port where relevant.</li>
                 <li>Test the mouse on another computer if possible.</li>
               </ol>
               <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                 If the same unexpected behavior repeatedly appears across environments, the wheel mechanism may need cleaning, repair, or replacement.
               </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Why does my mouse wheel jump up when I scroll down?</h3>
                  <p className="text-muted-foreground">This is often caused by dust or wear inside the mechanical scroll encoder. As the wheel spins, the tiny internal contacts can bounce or misread the direction, sending an opposite signal to the computer.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Can this test confirm a bad scroll-wheel encoder?</h3>
                  <p className="text-muted-foreground">No web-based test can confirm a hardware defect with 100% certainty. This test confirms that your browser is receiving unexpected directional inputs. If the issue persists across different browsers and computers, hardware wear is a likely cause.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Why does my trackpad generate so many scroll events?</h3>
                  <p className="text-muted-foreground">Trackpads generate high-resolution fluid scroll events rather than standard &quot;notches&quot; or &quot;clicks&quot; like a traditional mouse wheel. They also implement simulated momentum/inertia that continues producing events even after you lift your fingers.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Why are scroll values different between browsers?</h3>
                  <p className="text-muted-foreground">Browsers process scroll input differently. Some normalize physical wheel clicks into standard pixel distances, while others use line or page-based distances. This test relies on directional signs rather than absolute magnitude to avoid this inconsistency.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Does one wheel event equal one physical notch?</h3>
                  <p className="text-muted-foreground">Not always. While standard mice often fire one event per physical detent (notch), smooth-scrolling mice, free-spin wheels, trackpads, and specific operating system settings can fire dozens of micro-events for a tiny physical movement.</p>
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
               <Link href="/polling-rate-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Run Polling Rate Test
               </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
