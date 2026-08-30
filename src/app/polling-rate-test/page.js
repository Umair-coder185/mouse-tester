import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { PollingRateTester } from "../../components/tools/PollingRateTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Mouse Polling Rate Test – Check Mouse Hz",
  description: "Measure the browser-observed polling rate of your mouse in Hz with this quick and accurate diagnostic tool.",
  alternates: {
    canonical: '/polling-rate-test',
  },
};

export default function PollingRateTestPage() {
  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: metadata.title,
          description: metadata.description,
          url: `${SITE_CONFIG.url}/polling-rate-test`
        }} 
      />
      <div className="bg-muted/30 border-b border-border py-8 md:py-12">
        <Container>
          <div className="max-w-4xl">
            <Breadcrumb items={[
              { name: 'Home', path: '/' },
              { name: 'All Tests', path: '/all-tests' },
              { name: 'Polling Rate Test', path: '/polling-rate-test' }
            ]} />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              Mouse Polling Rate Test
            </h1>
            <p className="text-lg text-muted-foreground">
              Move your mouse continuously inside the test area to measure how frequently your browser receives movement updates.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <PollingRateTester />
            <p className="text-center text-xs text-muted-foreground mt-6">
              Browser-based polling-rate tests measure the input events available to the browser, not the mouse firmware directly. Results may vary between browsers and systems.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What is mouse polling rate?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mouse polling rate describes how often input updates are reported over time and is commonly expressed in Hz (Hertz). It determines the interval between your physical movement and the computer receiving that data.
              </p>
              <p className="mt-4 text-muted-foreground">
                For example:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                <li>125 Hz ≈ updates every 8 ms</li>
                <li>500 Hz ≈ updates every 2 ms</li>
                <li>1000 Hz ≈ updates every 1 ms</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground italic">
                Note: These are approximate intervals based on perfect math. Real-world browser observations often fluctuate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                How to test your mouse polling rate
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-lg">
                <li>Start the test.</li>
                <li>Move the mouse continuously inside the test area in steady circles or zig-zags.</li>
                <li>Keep movement steady until the 5-second test finishes.</li>
                <li>Review the browser-observed Hz result.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Why does my polling rate change?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You might notice that the measured rate fluctuates or does not perfectly match your mouse&apos;s advertised specifications. This is normal and can be caused by:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li><strong>Browser Event Handling:</strong> Browsers sometimes throttle or delay events based on rendering schedules.</li>
                <li><strong>Operating System:</strong> OS-level cursor acceleration or input scheduling can alter timing.</li>
                <li><strong>Mouse Software/Settings:</strong> Companion apps (like Razer Synapse or Logitech G Hub) might be set to a lower rate for battery saving.</li>
                <li><strong>Connection Quality:</strong> Wireless interference or USB hub bottlenecks can affect delivery.</li>
                <li><strong>Event Coalescing:</strong> Modern browsers often combine rapid movements into fewer events to save CPU, though advanced APIs try to expose the raw data.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
                Nominal Polling Rates Reference
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 font-semibold text-foreground">Polling Rate</th>
                      <th className="py-3 px-4 font-semibold text-foreground">Approx. Interval</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4">125 Hz</td>
                      <td className="py-3 px-4">8 ms</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4">250 Hz</td>
                      <td className="py-3 px-4">4 ms</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4">500 Hz</td>
                      <td className="py-3 px-4">2 ms</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4">1000 Hz</td>
                      <td className="py-3 px-4">1 ms</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4">2000 Hz</td>
                      <td className="py-3 px-4">0.5 ms</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4">4000 Hz</td>
                      <td className="py-3 px-4">0.25 ms</td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4">8000 Hz</td>
                      <td className="py-3 px-4">0.125 ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-muted-foreground italic">
                These are nominal mathematical intervals. Browser-observed measurements can differ.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Is this the exact hardware polling rate?</h3>
                  <p className="text-muted-foreground">No. This test measures what the web browser actually receives. It is an excellent representation of your practical polling rate in web applications and browser games, but firmware-level diagnostics require native OS tools.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Why is my 1000 Hz mouse showing less than 1000 Hz?</h3>
                  <p className="text-muted-foreground">A 1000 Hz rating is a maximum limit. If you move the mouse slowly, it doesn&apos;t need to report 1000 times a second. Additionally, browser event loops naturally introduce slight variations, meaning a perfect 1000 Hz average is rarely observed in a browser.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Can browsers measure 4000 Hz or 8000 Hz mice accurately?</h3>
                  <p className="text-muted-foreground">Usually, no. Most modern web browsers cap their event dispatching or coalesce inputs far below 8000 Hz to prevent extreme CPU usage. You may see higher numbers with raw pointer events enabled, but the numbers will often fall short of the hardware maximum.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Does screen refresh rate equal mouse polling rate?</h3>
                  <p className="text-muted-foreground">No. Your monitor&apos;s refresh rate (e.g., 60 Hz or 144 Hz) dictates how often the display updates visually. Mouse polling rate dictates how often the computer checks the mouse for physical movement data.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Does wireless polling rate differ from wired?</h3>
                  <p className="text-muted-foreground">Not necessarily. Premium modern wireless gaming mice are capable of identical 1000 Hz (or higher) polling rates compared to their wired counterparts. However, standard wireless office mice may default to 125 Hz to conserve battery life.</p>
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
            
            <div className="pt-8 border-t border-border flex flex-wrap gap-4">
               <Link href="/dpi-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Run DPI Test
               </Link>
               <Link href="/accuracy-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Run Accuracy Test
               </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
