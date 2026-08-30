import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { AccuracyTester } from "../../components/tools/AccuracyTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Mouse Accuracy Test – Check Pointer Precision",
  description: "Test your mouse pointer precision by clicking target centers and measuring average cursor error in your browser.",
  alternates: {
    canonical: '/accuracy-test',
  },
};

export default function AccuracyTestPage() {
  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: metadata.title,
          description: metadata.description,
          url: `${SITE_CONFIG.url}/accuracy-test`
        }} 
      />
      <div className="bg-muted/30 border-b border-border py-8 md:py-12">
        <Container>
          <div className="max-w-4xl">
            <Breadcrumb items={[
              { name: 'Home', path: '/' },
              { name: 'All Tests', path: '/all-tests' },
              { name: 'Accuracy Test', path: '/accuracy-test' }
            ]} />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              Mouse Accuracy Test
            </h1>
            <p className="text-lg text-muted-foreground">
              Evaluate your pointer precision by clicking the exact center of targets.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <AccuracyTester />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What does the Mouse Accuracy Test measure?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This tool measures geometric pointer precision. It asks you to click the absolute center of a target, calculates the exact distance (in pixels) between your click and the true center, and averages that error across multiple trials.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                How is accuracy calculated?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The test uses a mathematical distance formula (Euclidean distance). It takes the <code>X</code> and <code>Y</code> coordinates of the target&apos;s center and compares them against the coordinates of your mouse pointer when you press the button. A lower average error distance represents higher precision. A &quot;Hit&quot; is recorded if your click lands within the visible radius of the target ring.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What affects pointer accuracy?
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-lg">
                <li><strong>DPI and Sensitivity:</strong> Higher sensitivity makes it harder to precisely land on small targets due to the required micro-adjustments.</li>
                <li><strong>Pointer Acceleration:</strong> Inconsistent cursor speed depending on how fast you move your hand can throw off muscle memory.</li>
                <li><strong>Mouse Surface:</strong> A dirty or uneven mousepad can cause the sensor to skip microscopically, shifting the pointer.</li>
                <li><strong>Display Scaling:</strong> Using 150% scaling in Windows alters how pixel geometry translates to the browser.</li>
                <li><strong>User Control:</strong> Ultimately, this test is a combination of your physical hand control and the hardware you are using.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Is this a mouse sensor test?</h3>
                  <p className="text-muted-foreground">No. While a severely malfunctioning sensor (or dust in the lens) will ruin your score, this test primarily evaluates your hand-eye coordination combined with your software pointer settings.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Does DPI affect pointer accuracy?</h3>
                  <p className="text-muted-foreground">Yes. Finding the right DPI balance is crucial. If your DPI is too high, your average error will increase. If it&apos;s too low, your average target acquisition time will suffer. You can estimate your DPI using our <Link href="/dpi-test" className="text-primary hover:underline">DPI Test</Link>.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Why do results change between runs?</h3>
                  <p className="text-muted-foreground">Targets are generated in random positions. Sometimes you will get clusters of targets that are easy to flick to, and sometimes you will get wide cross-screen targets that are harder to hit accurately. Try taking the average of 3 runs.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Is lower average error better?</h3>
                  <p className="text-muted-foreground">Yes. An average error of 0 pixels would mean you perfectly clicked the exact geometric center point of every target.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border flex flex-wrap gap-4">
               <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Back to Complete Mouse Test
               </Link>
               <Link href="/dpi-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Run DPI Test
               </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
