import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { DpiTester } from "../../components/tools/DpiTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Mouse DPI Test – Estimate Your Mouse DPI",
  description: "Estimate your mouse DPI using a measured physical movement and a browser-based mouse sensitivity test.",
  alternates: {
    canonical: '/dpi-test',
  },
};

export default function DpiTestPage() {
  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: metadata.title,
          description: metadata.description,
          url: `${SITE_CONFIG.url}/dpi-test`
        }} 
      />
      <div className="bg-muted/30 border-b border-border py-8 md:py-12">
        <Container>
          <div className="max-w-4xl">
            <Breadcrumb items={[
              { name: 'Home', path: '/' },
              { name: 'All Tests', path: '/all-tests' },
              { name: 'DPI Test', path: '/dpi-test' }
            ]} />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              Mouse DPI Test
            </h1>
            <p className="text-lg text-muted-foreground">
              Measure a physical distance to calculate your browser-based DPI estimate.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <DpiTester />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What is mouse DPI?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DPI stands for Dots Per Inch. It measures mouse sensitivity by defining how many cursor &quot;dots&quot; (or pixels) the mouse pointer will move on your screen for every single inch of physical movement by the mouse on your desk. A higher DPI means the cursor moves further across the screen with less physical effort.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                How to test mouse DPI
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-lg">
                <li>Place your mouse next to a physical ruler or tape measure on your desk.</li>
                <li>Enter a known physical distance in the tool (e.g., 10 cm or 5 inches).</li>
                <li>Click <strong>Start Measurement</strong>.</li>
                <li>Move the mouse horizontally for exactly that physical distance along the ruler.</li>
                <li>Press the <strong>Space</strong> bar to finish the measurement and review your browser-observed estimate.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Why can browser DPI results differ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                This test measures effective input sensitivity available to the browser. Your result might differ from your mouse&apos;s advertised hardware specifications due to several layers between the sensor and the web page:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>OS Pointer Acceleration:</strong> Operating systems often dynamically increase cursor speed if you move the mouse quickly. The tool requests unadjusted raw input where supported to minimize this, but support varies.</li>
                <li><strong>Pointer Speed Settings:</strong> Windows &quot;Pointer Speed&quot; sliders modify the scale of raw input before the browser receives it.</li>
                <li><strong>Display Scaling:</strong> High-DPI displays (Retina/4K) and browser zoom levels can alter how pixel coordinates are reported.</li>
                <li><strong>Measurement Technique:</strong> A slight diagonal curve or physical measurement error (e.g., moving 10.5 cm instead of exactly 10 cm) will naturally skew the mathematical result.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Can a website read my exact mouse DPI?</h3>
                  <p className="text-muted-foreground">No. A standard web page cannot interrogate your mouse firmware to retrieve its internal hardware configuration. We can only estimate effective DPI by correlating physical distance with reported pixel deltas.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Why does my result change every time?</h3>
                  <p className="text-muted-foreground">Human hand movement is rarely perfectly consistent. Tiny variations in how far you actually moved the mouse, coupled with operating system acceleration applied to slight variations in speed, will cause the estimate to fluctuate. Running it a few times gives you a reliable average.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Should I disable mouse acceleration?</h3>
                  <p className="text-muted-foreground">If you play competitive shooter games, disabling OS acceleration (like &quot;Enhance pointer precision&quot; in Windows) creates a 1:1 consistent relationship between hand movement and cursor distance. It is recommended for muscle-memory accuracy.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Is higher DPI always better?</h3>
                  <p className="text-muted-foreground">Not necessarily. Extremely high DPIs (like 25,000) are largely marketing metrics. Most professional gamers use a low DPI (400, 800, or 1600) combined with a large mousepad for better micro-control.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border flex flex-wrap gap-4">
               <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Back to Complete Mouse Test
               </Link>
               <Link href="/accuracy-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Run Mouse Accuracy Test
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
