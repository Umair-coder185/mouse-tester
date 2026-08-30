import Link from "next/link";
import { Container } from "../../components/layout/Container";

export const metadata = {
  title: "About | MouseTester",
  description: "Learn about MouseTester, a collection of browser-based diagnostic tools designed to help you observe and measure your mouse's behavior.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-muted/30 border-b border-border py-12">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              About MouseTester
            </h1>
            <p className="text-lg text-muted-foreground">
              Browser-based diagnostics for observing mouse input behavior.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-3xl space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              MouseTester provides a suite of interactive tools running directly in your web browser. 
              The project is designed to help users diagnose common issues with their computer mice, 
              such as failing microswitches (double clicking), jumpy scroll wheels, and sensor behavior.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Philosophy</h2>
            <p>
              All results provided by our tools are <strong>browser-observed</strong>. This means we measure exactly what your operating system passes to your web browser. 
              We believe in being transparent about the limitations of web-based diagnostics. 
            </p>
            <p>
              While our tools are excellent at spotting undeniable hardware flaws (like severe switch chatter), 
              they are not a replacement for manufacturer firmware diagnostics. Browser event loops, OS pointer acceleration settings, and display scaling can influence results like Polling Rate and DPI estimates.
              Our tools aim to carefully explain these limitations alongside your results.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Privacy & Local Execution</h2>
            <p>
              All interactive diagnostic tests execute locally via JavaScript on your machine. We do not transmit your clicks, mouse movements, or test results to a backend server.
              You can read more in our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/all-tests" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-primary-hover">
                View All Tools
              </Link>
              <Link href="/methodology" className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-8 font-medium text-foreground transition-colors hover:bg-muted">
                Read How Tests Work
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
