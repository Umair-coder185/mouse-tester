import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { CpsTester } from "../../components/tools/CpsTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "CPS Test – Clicks Per Second Mouse Test",
  description: "Measure your mouse clicking speed with a clean 1, 5, or 10 second clicks-per-second test.",
  alternates: {
    canonical: '/cps-test',
  },
};

export default function CpsTestPage() {
  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: metadata.title,
          description: metadata.description,
          url: `${SITE_CONFIG.url}/cps-test`
        }} 
      />
      <div className="bg-muted/30 border-b border-border py-8 md:py-12">
        <Container>
          <div className="max-w-4xl">
            <Breadcrumb items={[
              { name: 'Home', path: '/' },
              { name: 'All Tests', path: '/all-tests' },
              { name: 'CPS Test', path: '/cps-test' }
            ]} />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              CPS Test (Clicks Per Second)
            </h1>
            <p className="text-lg text-muted-foreground">
              Measure your raw mouse clicking speed over a set time limit.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <CpsTester />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                What is CPS?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CPS stands for Clicks Per Second. It is a standard metric used to evaluate how rapidly a user can actuate their primary mouse button. While heavily popularized by competitive gaming communities (like Minecraft PvP), it also serves as a basic interaction benchmark for hardware feel.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                How is CPS calculated?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The formula is straightforward: 
              </p>
              <div className="bg-background border border-border p-4 rounded-lg font-mono text-foreground mb-4 max-w-sm">
                CPS = Total Clicks / Actual Duration Seconds
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This test uses the high-resolution <code>performance.now()</code> system clock to guarantee the time boundary is strictly enforced, preventing any &quot;late clicks&quot; from leaking into the score after the time expires.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                How to get a consistent CPS result
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-lg">
                <li>Use the same test duration when comparing results (e.g., 5 seconds).</li>
                <li>Use the same mouse and switch to isolate your physical technique.</li>
                <li>Repeat the test several times and look at the average rather than just your single best score.</li>
                <li>Keep the browser window focused. If the tab loses visibility, the test safely resets.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Does mouse polling rate affect CPS?</h3>
                  <p className="text-muted-foreground">Technically, yes, but negligibly for humans. A 1000 Hz mouse reports 1000 times a second. Even the fastest clickers rarely exceed 20 CPS. Polling rate limits do not bottleneck human clicking speed.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Is the 1-second CPS test less consistent?</h3>
                  <p className="text-muted-foreground">Yes. A 1-second test heavily relies on exactly when you start your clicking burst relative to the countdown ending. A 5-second or 10-second test provides a much more accurate average of your sustained clicking speed.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Why does CPS change between runs?</h3>
                  <p className="text-muted-foreground">Human muscles fatigue quickly. Your first run might be your fastest, or you might need a few runs to &quot;warm up.&quot; Small variations are completely natural.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Does double clicking affect CPS?</h3>
                  <p className="text-muted-foreground">Yes. If your mouse has a worn microswitch that accidentally registers two clicks for every physical press (switch chatter), your CPS score will be artificially inflated. You can check your mouse for this issue using our <Link href="/double-click-test" className="text-primary hover:underline">Double Click Test</Link>.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border flex flex-wrap gap-4">
               <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                 Back to Complete Mouse Test
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
