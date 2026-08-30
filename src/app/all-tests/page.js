import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { TOOL_ROUTES } from "../../lib/site";

export const metadata = {
  title: "All Mouse Tests | Directory",
  description: "Choose a test to check mouse buttons, scrolling, polling rate, DPI, clicking behavior, dragging, and pointer precision.",
  alternates: {
    canonical: '/all-tests',
  },
};

export default function AllTestsPage() {
  // Logical groupings for the directory
  const groups = [
    {
      name: "Essential Tests",
      tests: [
        { name: "Complete Mouse Test", path: "/", desc: "Verify basic inputs (Left, Right, Middle, Scroll, Movement)." },
        { name: "Double Click Test", path: "/double-click-test", desc: "Check if your switches are unintentionally sending multiple clicks." },
        { name: "Scroll Wheel Test", path: "/scroll-test", desc: "Verify scroll step reliability and detect jumpy behavior." },
        { name: "Drag & Hold Test", path: "/drag-test", desc: "Check if your mouse accidentally releases items while dragging." },
      ]
    },
    {
      name: "Performance & Precision",
      tests: [
        { name: "Polling Rate Test", path: "/polling-rate-test", desc: "Measure the actual report rate of your mouse in Hz." },
        { name: "DPI Test", path: "/dpi-test", desc: "Estimate your true DPI using physical measurement calibration." },
        { name: "Accuracy Test", path: "/accuracy-test", desc: "Test your pointer precision and geometric error." },
        { name: "CPS Test", path: "/cps-test", desc: "Measure your raw clicks per second." },
      ]
    },
    {
      name: "Advanced Button Diagnostics",
      tests: [
        { name: "Debounce Test", path: "/debounce-test", desc: "Observe micro-chatter during deliberate press and release actions." },
      ]
    }
  ];

  return (
    <>
      <div className="bg-muted/30 border-b border-border py-12">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              Mouse Testing Tools
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose a test to check mouse buttons, scrolling, polling rate, DPI, clicking behavior, dragging, and pointer precision.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background min-h-[50vh]">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            {groups.map((group) => (
              <div key={group.name}>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6 pb-2 border-b border-border">
                  {group.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.tests.map((test) => (
                    <Link 
                      key={test.name}
                      href={test.path}
                      className="group relative overflow-hidden rounded-3xl border border-cyan-200/80 bg-white/95 p-6 shadow-md shadow-cyan-950/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/15 focus-visible:outline-none focus-visible:ring-2 focus:ring-cyan-500 focus-visible:ring-offset-2 dark:border-cyan-900/50 dark:bg-slate-950/85 dark:shadow-black/20 dark:hover:border-cyan-700 dark:hover:shadow-black/40"
                    >
                      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-200/75 via-purple-200/60 to-emerald-200/60 opacity-70 blur-3xl dark:from-cyan-800/30 dark:via-purple-800/20 dark:to-emerald-800/20"></div>
                      <div className="relative">
                        <div>
                          <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-950 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                            {test.name}
                          </h3>
                          <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {test.desc}
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
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
