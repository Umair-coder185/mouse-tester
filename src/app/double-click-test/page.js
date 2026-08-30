import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { DoubleClickTester } from "../../components/tools/DoubleClickTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Mouse Double Click Test – Check Mouse Double Clicking",
  description: "Test your mouse for possible unwanted double-click registrations using a browser-based single-click diagnostic test.",
  alternates: {
    canonical: '/double-click-test',
  },
};

export default function DoubleClickTestPage() {
  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: metadata.title,
          description: metadata.description,
          url: `${SITE_CONFIG.url}/double-click-test`
        }} 
      />
      <div className="bg-muted/30 border-b border-border py-8 md:py-12">
        <Container>
          <div className="max-w-4xl">
            <Breadcrumb items={[
              { name: 'Home', path: '/' },
              { name: 'All Tests', path: '/all-tests' },
              { name: 'Double Click Test', path: '/double-click-test' }
            ]} />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              Mouse Double Click Test
            </h1>
            <p className="text-lg text-muted-foreground">
              Click once at a time to check whether your mouse may be sending unintended duplicate inputs.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <DoubleClickTester />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What is mouse double clicking?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A mouse can sometimes send more than one click signal from what the user intended as a single press. Causes may include switch wear, software settings, mouse firmware/software, connection issues, or other system behavior.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                How to use this test
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-lg">
                <li>Select the mouse button you want to test (Left, Middle, or Right).</li>
                <li>Click only once whenever the test target says &quot;Click Once.&quot;</li>
                <li>Complete 20 trials and review whether additional signals were observed.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What should I do if duplicate clicks are detected?
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-lg">
                <li>Run the test again.</li>
                <li>Try another browser if results seem inconsistent.</li>
                <li>Check mouse software/driver settings.</li>
                <li>Try another USB port or connection where appropriate.</li>
                <li>Test the mouse on another computer if possible.</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                If duplicate behavior is repeatable across environments, the physical switch may need attention or replacement.
              </p>
            </div>
            
            <div>
               <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                 Frequently Asked Questions
               </h2>
               <div className="space-y-6">
                 <div>
                   <h3 className="text-lg font-medium text-foreground mb-1">What causes a mouse to double-click by itself?</h3>
                   <p className="text-muted-foreground">Usually, it&apos;s wear and tear on the physical microswitch inside the mouse, causing the metal contact to &quot;bounce&quot; and send multiple signals. It can also be caused by static electricity or software glitches.</p>
                 </div>
                 <div>
                   <h3 className="text-lg font-medium text-foreground mb-1">Can this test confirm a broken mouse switch?</h3>
                   <p className="text-muted-foreground">No web-based test can confirm a hardware defect with 100% certainty. It can only indicate that your browser is receiving duplicate click events. Retesting in different environments helps narrow down the cause.</p>
                 </div>
                 <div>
                   <h3 className="text-lg font-medium text-foreground mb-1">Why should I click only once per trial?</h3>
                   <p className="text-muted-foreground">This test is designed to measure what happens when you attempt a single click. Intentionally double-clicking will skew the results by introducing deliberate rapid inputs into the observation window.</p>
                 </div>
                 <div>
                   <h3 className="text-lg font-medium text-foreground mb-1">Can browser settings affect the result?</h3>
                   <p className="text-muted-foreground">Yes. Some browser extensions or accessibility settings can alter how clicks are interpreted. Testing in an incognito window or different browser is recommended if you suspect interference.</p>
                 </div>
               </div>
             </div>
            
            <div className="pt-8 border-t border-border flex flex-wrap gap-4">
               <Link href="/debounce-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Run Debounce Test
               </Link>
               <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Back to Complete Mouse Test
               </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
