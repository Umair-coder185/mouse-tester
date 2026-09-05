import Link from "next/link";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { MouseTester } from "../components/tools/MouseTester";
import { JsonLd } from "../components/ui/JsonLd";
import { SITE_CONFIG } from "../lib/site";

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const tests = [
    {
      title: "Double Click Test",
      description: "Detect if your switches are failing and double-clicking unintentionally.",
      href: "/double-click-test"
    },
    {
      title: "Polling Rate Test",
      description: "Measure the actual report rate of your mouse in Hz.",
      href: "/polling-rate-test"
    },
    {
      title: "Scroll Wheel Test",
      description: "Check scroll step consistency, speed, and middle click reliability.",
      href: "/mouse-scroll-wheel-test"
    },
    {
      title: "DPI Test",
      description: "Estimate your true DPI by measuring physical movement distance.",
      href: "/mouse-dpi-analyzer"
    },
    {
      title: "Debounce Test",
      description: "Check for possible rapid switch chatter during press and release.",
      href: "/debounce-test-guide"
    },
    {
      title: "CPS Test",
      description: "Measure your raw clicks per second over 1, 5, or 10 seconds.",
      href: "/cps-test"
    },
    {
      title: "Drag & Hold Test",
      description: "Check if your mouse accidentally releases items while dragging.",
      href: "/drag-test"
    },
    {
      title: "Accuracy Test",
      description: "Measure your tracking accuracy and cursor precision.",
      href: "/mouse-accuracy-test"
    }
  ];

  return (
    <>
      <JsonLd 
        type="WebSite" 
        data={{ 
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
          description: SITE_CONFIG.description 
        }} 
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16">
        {/* Background Blobs for Contrast */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-cyan-200/40 blur-[80px] sm:top-10 dark:bg-cyan-900/30"></div>
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-purple-150/40 blur-[80px] dark:bg-purple-900/30"></div>

        <Container>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-2">
            <div className="mb-2 flex justify-center">
              <div className="relative rounded-full px-4 text-sm font-semibold leading-6 text-slate-700 ring-1 ring-slate-900/10 hover:ring-slate-900/20 bg-white/60 backdrop-blur-sm dark:text-slate-300 dark:ring-white/20 dark:bg-slate-900/60">
                <span className="text-cyan-500 mr-2">✨</span> Free browser-based mouse diagnostics
              </div>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-7xl dark:text-white leading-[1.1] sm:leading-tight">
              Test Your Mouse. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Know </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Exactly </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">What&apos;s Wrong.</span>
            </h1>
            
            <p className="max-w-2xl text-lg text-slate-600 sm:text-xl leading-relaxed mt-4 dark:text-slate-400">
              Check buttons, scrolling, double-click issues, polling rate and more with fast browser-based mouse diagnostics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="#mouse-test" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Start Mouse Test
              </Link>
              <Link 
                href="#all-tests" 
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-base font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:bg-slate-900 dark:text-white dark:border-slate-800 dark:hover:bg-slate-800"
              >
                View All Tests <span className="ml-2 text-purple-500 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            
            <div className="pt-6">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-500">
                No account, no complicated setup, and no need to download software.
              </p>
            </div>
          </div>
        </Container> 
      </section>

      {/* Main Tester Section */}
      <section id="mouse-test" className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <SectionHeading 
            title="Complete Mouse Test" 
            description="Verify all basic mouse inputs including clicks, scrolling, and movement. Ensure your cursor remains inside the test area."
            className="mb-10 text-center items-center"
          />
          
          <div className="max-w-5xl mx-auto">
            <MouseTester />
          </div>
        </Container>
      </section>

      {/* Explanation Section */}
      <section className="py-16 bg-background border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl mb-6">
              What does this mouse test check?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              This interactive tool verifies whether your web browser is successfully receiving hardware inputs from your mouse. It checks:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-lg mb-8">
              <li><strong>Primary Clicks:</strong> Left and Right buttons.</li>
              <li><strong>Middle Click:</strong> Pressing down on the scroll wheel.</li>
              <li><strong>Scroll Input:</strong> Wheel movement up and down.</li>
              <li><strong>Movement:</strong> General cursor tracking and detection.</li>
              <li><strong>Side Buttons (Optional):</strong> Forward and Back inputs if your mouse has them.</li>
            </ul>
            <p className="text-muted-foreground">
              <em>Note: Your input is processed entirely locally within your browser for immediate feedback. Nothing is uploaded or stored.</em>
            </p>
          </div>
        </Container>
      </section>

      {/* Other Tests / Deeper Diagnosis */}
      <section id="all-tests" className="py-16 md:py-24 bg-muted border-t border-border">
        <Container>
          <SectionHeading 
            title="Need a deeper diagnosis?" 
            description="If you suspect a hardware issue such as switch bouncing or sensor lag, try our specialized diagnostic tools."
            className="mb-12 text-center items-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tests.map((test, index) => (
              <Link 
                key={index}
                href={test.href}
                className="group relative overflow-hidden rounded-3xl border border-cyan-200/80 bg-white/95 p-6 shadow-md shadow-cyan-950/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-cyan-900/50 dark:bg-slate-950/85 dark:shadow-black/20 dark:hover:border-cyan-700 dark:hover:shadow-black/40"
              >
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-200/75 via-purple-200/60 to-emerald-200/60 opacity-70 blur-3xl dark:from-cyan-800/30 dark:via-purple-800/20 dark:to-emerald-800/20"></div>
                <div className="relative">
                  <div>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-950 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                      {test.title}
                    </h3>
                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {test.description}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    Open tool
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute -bottom-5 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500"></div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
