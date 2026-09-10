import Link from "next/link";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { MouseTester } from "../components/tools/MouseTester";
import { JsonLd } from "../components/ui/JsonLd";
import { SITE_CONFIG } from "../lib/site";
import { FaqAccordion } from "../components/ui/FaqAccordion";

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const faqs = [
    { question: "What exactly is a mouse tester tool?", answer: "A mouse tester is an online diagnostic utility designed to verify if your mouse buttons, scroll wheel, and optical sensor are registering inputs correctly without any lag or double-clicking." },
    { question: "Do I need to install software or drivers to test my mouse?", answer: "No! Our mouse tester runs entirely in your web browser. There are no drivers or third-party software installations required to check your hardware." },
    { question: "Can an online mouse tester fix my broken mouse?", answer: "A mouse tester is a diagnostic tool. While it can't physically repair a broken mechanical switch, it gives you the exact data needed to confirm the issue so you can fix it or claim a warranty." },
    { question: "Why does my mouse double-click when I click once?", answer: "Unintentional double-clicking is usually caused by worn-out mechanical switches or static buildup inside the mouse. Our test can detect this bouncing effect instantly." },
    { question: "Does mouse testing work for wireless and Bluetooth mice?", answer: "Yes. Browser-based testing works perfectly for both wired and wireless mice. It accurately captures the inputs your operating system receives, regardless of the connection." },
    { question: "How often should I test my gaming mouse?", answer: "If you're a competitive gamer, testing every few months ensures peak performance. Otherwise, only test when you suspect an issue like missed clicks or scroll jumping." },
    { question: "Can a bad mouse affect my gaming performance?", answer: "Absolutely. A faulty mouse with polling rate drops, sensor skipping, or switch bouncing can lead to missed shots and input lag, severely impacting your competitive edge." },
    { question: "Is scroll wheel jumping a sign that my mouse is broken?", answer: "Scroll jumping (scrolling down but the page jumps up) often indicates dust inside the scroll encoder or a failing rotary switch. You can use our scroll test to confirm the inconsistency." }
  ];

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

        {/* Decorative Floating Gaming Keyboard (Left) */}
        <div className="absolute -left-24 lg:-left-12 top-10 md:top-20 -z-10 opacity-[0.08] dark:opacity-[0.05] transform -rotate-[15deg] scale-110 pointer-events-none hidden md:block">
          <svg width="450" height="450" viewBox="0 0 300 120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-700 dark:text-cyan-300">
            {/* Chassis */}
            <path d="M15,15 L285,15 L295,100 L5,100 Z" />
            <path d="M20,20 L280,20 L288,95 L12,95 Z" strokeWidth="0.5" />
            {/* WASD cluster highlighted */}
            <rect x="55" y="40" width="12" height="12" rx="2" className="stroke-cyan-500 dark:stroke-cyan-400" />
            <rect x="40" y="55" width="12" height="12" rx="2" className="stroke-cyan-500 dark:stroke-cyan-400" />
            <rect x="55" y="55" width="12" height="12" rx="2" className="stroke-cyan-500 dark:stroke-cyan-400" />
            <rect x="70" y="55" width="12" height="12" rx="2" className="stroke-cyan-500 dark:stroke-cyan-400" />
            {/* Other keys represented by dashed tech lines */}
            <path d="M25,30 L275,30" strokeWidth="6" strokeDasharray="12 4" opacity="0.6"/>
            <path d="M75,46 L270,46" strokeWidth="6" strokeDasharray="12 4" opacity="0.6"/>
            <path d="M90,61 L265,61" strokeWidth="6" strokeDasharray="12 4" opacity="0.6"/>
            {/* Spacebar row */}
            <path d="M20,76 L60,76 M70,76 L150,76 M160,76 L260,76" strokeWidth="6" strokeDasharray="12 4" opacity="0.6"/>
          </svg>
        </div>

        {/* Decorative Floating Gaming Mouse (Right) */}
        <div className="absolute -right-24 lg:-right-12 top-32 md:top-24 -z-10 opacity-[0.08] dark:opacity-[0.05] transform rotate-[20deg] scale-110 pointer-events-none hidden md:block">
          <svg width="380" height="380" viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-700 dark:text-purple-300">
            {/* Ergonomic Gaming Chassis */}
            <path d="M50,10 C70,10 80,30 85,60 C90,100 80,130 50,140 C20,130 10,100 15,60 C20,30 30,10 50,10 Z" />
            {/* Sharp button cutouts */}
            <path d="M50,10 L50,55" />
            <path d="M25,15 L35,60" />
            <path d="M75,15 L65,60" />
            {/* Scroll Wheel */}
            <rect x="46" y="25" width="8" height="18" rx="4" />
            <path d="M46,30 L54,30 M46,34 L54,34 M46,38 L54,38" strokeWidth="0.5" />
            {/* DPI Buttons */}
            <path d="M50,58 L50,65" strokeWidth="2" />
            {/* Thumb rest geometric grid */}
            <path d="M15,60 C5,80 5,100 12,120" strokeDasharray="3 3" />
            {/* Geometric RGB logo / accents */}
            <path d="M30,85 L50,105 L70,85" className="stroke-purple-500 dark:stroke-purple-400" />
            <path d="M50,105 L50,125" className="stroke-purple-500 dark:stroke-purple-400" />
          </svg>
        </div>

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
      <section id="mouse-test" className="py-24 relative overflow-hidden bg-background border-t border-border">
        {/* Decorative background for the tester section */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <Container relative z-10>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Live Diagnostic Tool
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-6">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Mouse Test</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Verify all basic mouse inputs including clicks, scrolling, and movement. Ensure your cursor remains inside the test area for accurate results.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto relative group">
            {/* Glowing border effect around the tester */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-primary to-blue-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative bg-card rounded-[2rem] p-2 sm:p-4 ring-1 ring-border shadow-2xl backdrop-blur-xl">
              <MouseTester />
            </div>
          </div>
        </Container>
      </section>

      {/* 1. Features Section */}
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none -z-10"></div>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Premium Features of Click Mouse Test
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the most accurate and responsive browser-based diagnostic tool designed for gamers and professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Zero Latency Testing", desc: "Built with optimized React hooks for instantaneous click detection without browser lag.", icon: "⚡" },
              { title: "100% Privacy Safe", desc: "All diagnostics run locally in your browser. No data is ever sent to our servers.", icon: "🛡️" },
              { title: "Universal Compatibility", desc: "Works seamlessly across Windows, macOS, and Linux without installing any drivers.", icon: "🌐" }
            ].map((feature, i) => (
              <div key={i} className="relative group rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Why Use Section */}
      <section className="py-20 bg-muted/30 border-y border-border relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Why Should You Use a Click Mouse Test?
              </h2>
              <div className="space-y-8 mt-10">
                {[
                  { title: "Detect Hardware Degradation", desc: "Mouse switches wear out over time. Testing catches double-clicking before it ruins your workflow." },
                  { title: "Verify Manufacturer Claims", desc: "Don't just trust the box. Prove your mouse actually hits that 1000Hz polling rate." },
                  { title: "Optimize Gaming Performance", desc: "Ensure every click registers exactly when you press it, giving you the competitive edge." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full"></div>
              <div className="rounded-3xl border border-border bg-white dark:bg-card/60 backdrop-blur-2xl p-8 shadow-2xl relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-bl-full pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">System Healthy</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">No hardware faults detected</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">Polling Rate</span>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white text-lg">1000 Hz</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                        </div>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">Double Clicks</span>
                      </div>
                      <span className="font-bold text-emerald-500 text-lg">0% Error</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                        </div>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">Scroll Wheel</span>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white text-lg">Perfect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Benefits Section */}
      <section className="py-20 relative bg-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Benefits of Regular Mouse Testing
            </h2>
            <p className="text-lg text-muted-foreground">
              Make testing a routine to keep your hardware running at peak performance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Save money by fixing instead of replacing",
              "Maintain peak competitive gaming accuracy",
              "Prevent repetitive strain from faulty clicks",
              "Diagnose software vs hardware issues instantly"
            ].map((benefit, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-gradient-to-b from-card to-card/50 border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="font-semibold text-foreground text-lg leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Solutions & Maintenance Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
              Solutions & Maintenance Tips
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Found an issue? Here is how to maintain your mouse and fix common hardware faults like a pro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-10 backdrop-blur-md hover:bg-white/[0.06] hover:border-blue-500/50 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">Fixing Double Clicks</h3>
              <p className="text-slate-300 leading-relaxed">
                If our test detects double clicks, try blowing compressed air under the main buttons to clear dust. If that fails, you may need to increase your software debounce time or solder new switches.
              </p>
            </div>
            
            <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-10 backdrop-blur-md hover:bg-white/[0.06] hover:border-purple-500/50 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <span className="text-2xl">🧹</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">Sensor Cleaning</h3>
              <p className="text-slate-300 leading-relaxed">
                Inconsistent tracking or polling rate drops? Use a Q-tip with 99% isopropyl alcohol to gently clean the optical sensor lens. Keep your mousepad free of pet hair and crumbs.
              </p>
            </div>
            
            <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-10 backdrop-blur-md hover:bg-white/[0.06] hover:border-cyan-500/50 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">Firmware Updates</h3>
              <p className="text-slate-300 leading-relaxed">
                Always keep your mouse drivers and firmware updated via the manufacturer's software. Many tracking bugs and sleep-wake issues are patched silently through software updates.
              </p>
            </div>
            
            <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-10 backdrop-blur-md hover:bg-white/[0.06] hover:border-emerald-500/50 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">Cable Management</h3>
              <p className="text-slate-300 leading-relaxed">
                For wired mice, use a mouse bungee. Dragging a heavy braided cable creates false resistance and can prematurely wear out the internal wire connections over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Tests / Deeper Diagnosis */}
      <section id="all-tests" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-border">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
        <Container relative z-10>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-6">
              Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Deeper Diagnosis?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              If you suspect a hardware issue such as switch bouncing or sensor lag, try our specialized diagnostic tools designed for enthusiasts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tests.map((test, index) => (
              <Link 
                key={index}
                href={test.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-950 dark:bg-white/[0.02] border border-slate-800 dark:border-white/10 p-8 hover:bg-slate-900 dark:hover:bg-white/[0.06] hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                    {/* Unique Icon based on index */}
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />}
                      {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                      {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />}
                      {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />}
                      {index === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                      {index === 5 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />}
                      {index === 6 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />}
                      {index === 7 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors mb-3">
                    {test.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {test.description}
                  </p>
                </div>
                
                <div className="relative z-10 flex items-center gap-2 text-sm font-bold text-primary group-hover:text-blue-400 mt-auto">
                  Run Diagnostic
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[100px] pointer-events-none"></div>
        <Container relative z-10>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Questions</span>
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about testing, maintaining, and fixing your mouse.
            </p>
          </div>
          
          <FaqAccordion faqs={faqs} />
        </Container>
      </section>
    </>
  );
}
