import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "All Mouse Tools | Complete Testing Directory",
  description: "Explore our complete suite of mouse testing tools. Check your mouse for double clicking, polling rate accuracy, DPI precision, scrolling issues, and more.",
  alternates: {
    canonical: '/all-tools',
  },
};

export default function AllToolsPage() {
  // Logical groupings for the directory
  const groups = [
    {
      name: "Essential Tools",
      tests: [
        { name: "Complete Mouse Test", path: "/", desc: "Verify basic inputs (Left, Right, Middle, Scroll, Movement)." },
        { name: "Double Click Test", path: "/double-click-test", desc: "Check if your switches are unintentionally sending multiple clicks." },
        { name: "Scroll Wheel Test", path: "/mouse-scroll-wheel-test", desc: "Verify scroll step reliability and detect jumpy behavior." },
        { name: "Drag & Hold Test", path: "/drag-test", desc: "Check if your mouse accidentally releases items while dragging." },
      ]
    },
    {
      name: "Performance & Precision",
      tests: [
        { name: "Polling Rate Tool", path: "/polling-rate-test", desc: "Measure the actual report rate of your mouse in Hz." },
        { name: "DPI Analyzer", path: "/mouse-dpi-analyzer", desc: "Estimate your true DPI using physical measurement calibration." },
        { name: "Accuracy Trainer", path: "/mouse-accuracy-test", desc: "Test your pointer precision and geometric error." },
        { name: "CPS Tester", path: "/cps-test", desc: "Measure your raw clicks per second." },
      ]
    },
    {
      name: "Advanced Diagnostics",
      tests: [
        { name: "Debounce Tool", path: "/debounce-test-guide", desc: "Observe micro-chatter during deliberate press and release actions." },
      ]
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-primary/5 to-background border-b border-border py-16 md:py-20 relative overflow-hidden">
        {/* Premium Ambient Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
        </div>
        
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              All Mouse <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you're diagnosing a faulty switch, verifying your new gaming mouse's polling rate, or practicing your aim, our complete suite of browser-based tools has you covered.
            </p>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl max-w-3xl mx-auto text-left shadow-sm">
              <h2 className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                Why Use These Tools?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Modern mice are complex devices with specific firmware tuning for debounce times, sensor liftoff distance, and polling intervals. Over time, mechanical switches wear out leading to the dreaded double-click issue, and sensors can develop tracking anomalies. We built this collection of free, privacy-first tools so you can benchmark, diagnose, and optimize your setup directly from your browser—no downloads or heavy peripheral software required.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-24 bg-background min-h-[50vh]">
        <Container>
          <div className="max-w-6xl mx-auto space-y-20">
            {groups.map((group) => (
              <div key={group.name}>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 pb-4 border-b border-border">
                  {group.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.tests.map((test) => (
                    <Link 
                      key={test.name}
                      href={test.path}
                      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/50 block"
                    >
                      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl duration-500"></div>
                      <div className="relative h-full flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {test.name}
                          </h3>
                          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                            {test.desc}
                          </p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary">
                          Launch Tool
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
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
