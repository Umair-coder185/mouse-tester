import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { CpsTester } from "../../components/tools/CpsTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "CPS Test (Measure Your Clicks Per Second Online)",
  description: "Test your clicking speed with our free CPS test. Measure clicks per second in real time and improve your mouse speed for gaming.",
  alternates: {
    canonical: '/cps-test',
  },
};

export default function CpsTestPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a CPS test (clicks per second test)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's a tool that measures how many mouse clicks or screen taps you can perform within a chosen time limit, giving you a clear clicking speed number."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good CPS score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anywhere from 6 to 7 CPS is considered average, while 8 or higher on a standard test is generally seen as fast."
        }
      },
      {
        "@type": "Question",
        "name": "Does my gaming mouse affect my CPS score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Switch type, click travel distance, and overall mouse grip comfort can all shift your CPS benchmark up or down."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between CPS and CPM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPS measures clicks per second, while CPM measures clicks per minute, useful for tracking clicking endurance over longer round lengths."
        }
      },
      {
        "@type": "Question",
        "name": "What is jitter clicking and butterfly clicking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both are clicking techniques that use hand vibration or rapid two-finger taps to boost hits per second beyond what normal clicking allows."
        }
      },
      {
        "@type": "Question",
        "name": "Which test duration should I use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shorter tests like a 5 second CPS test show peak burst speed, while longer ones reveal sustained clicking ability."
        }
      },
      {
        "@type": "Question",
        "name": "Does this CPS test work on mobile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it supports tablet tapping and mobile clicking through touch input, alongside standard mouse-based testing."
        }
      }
    ]
  };

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

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
      <JsonLd type="FAQPage" data={faqSchema} />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background border-b border-border py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb items={[
              { name: 'Home', path: '/' },
              { name: 'All Tests', path: '/all-tests' },
              { name: 'CPS Test', path: '/cps-test' }
            ]} />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-6 mb-4">
              CPS Test (Measure Your Clicks Per Second Online)
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Last updated: {currentDate}
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your mouse finger might be faster than you think, or slower. Either way, there's only one way to find out for sure. A CPS test gives you an instant, accurate read on your clicking speed, whether you're chasing a higher rank in Minecraft PvP, comparing gaming mice, or just curious how your reflexes stack up. This guide walks you through what a clicks per second actually measures, how the scoring works, and how to push your numbers higher.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Tool Section */}
      <section className="py-12 bg-background relative" id="cps-test-tool">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg border border-border p-4 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
              
              <CpsTester />
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar (Table of Contents) */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-24 p-6 bg-card rounded-xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                  Table of Contents
                </h3>
                <nav className="space-y-3">
                  <a href="#what-is-it" className="block text-sm text-muted-foreground hover:text-primary transition-colors">What Is a CPS Test?</a>
                  <a href="#how-calculated" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How CPS Is Calculated</a>
                  <a href="#why-take-it" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Why People Take CPS Tests</a>
                  <a href="#typical-scores" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Typical Score Ranges</a>
                  <a href="#how-to-use" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Use This CPS Test Tool</a>
                  <a href="#tips" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Tips for Better Scores</a>
                  <a href="#key-features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Key Features of a Good CPS Test</a>
                  <a href="#faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">FAQs</a>
                  <a href="#conclusion" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Conclusion</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              <div id="what-is-it" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">What Is a CPS Test?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A CPS, short for clicks per second test, tracks how many times you can click a mouse button (or tap a screen) within a set window of time. You pick a duration, click as fast as possible until the timer runs out, and the tool reports your speed instantly.
                </p>
                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm border-l-4 border-l-primary mt-4">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    It sounds simple, but a good CPS checker does more than count clicks. It benchmarks your clicking rate against typical human ranges, tracks your session best, and often breaks results down by clicking style, since a jitter click test and a drag click test produce very different numbers from normal clicking.
                  </p>
                </div>
              </div>

              <div id="how-calculated" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">How CPS Is Calculated</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The math behind every CPS counter is refreshingly simple:
                </p>
                <div className="flex items-center justify-center p-6 bg-muted/40 rounded-xl border border-border/50 mb-6 font-mono text-2xl font-bold text-foreground">
                  CPS = Total Clicks &divide; Time (in seconds)
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you land 42 clicks in a 10 second CPS, your score is 4.2 CPS. Shorter windows like a 1 second CPS test tend to produce higher peak numbers since fatigue hasn't set in yet, while a 60 second CPS test rewards clicking endurance over raw burst speed.
                </p>
              </div>

              <div id="why-take-it" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Why People Take CPS Tests</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gamers run a Minecraft CPS test to see how their clicking speed holds up in real PvP combat, where faster hits per second can mean the difference between winning and losing a fight. Others use a mouse click speed purely as a benchmark, tracking how their finger and wrist position affect performance over time, or comparing results after switching to a new mouse switch.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond gaming, a click speed test doubles as a quick reflex and dexterity check. Physical therapists and hobbyists alike use repeated CPS practice sessions to monitor small changes in hand speed, which can reflect fatigue, forearm tension, or simple lack of warmup.
                </p>
              </div>

              <div id="typical-scores" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Typical Score Ranges (5-Second Test)</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most people land somewhere in a predictable band on a standard CPS benchmark:
                </p>
                
                <div className="overflow-x-auto bg-card rounded-xl border border-border shadow-sm mt-4">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-muted/50 text-foreground">
                        <th className="p-4 font-bold border-b border-border">Skill Level</th>
                        <th className="p-4 font-bold border-b border-border">CPS Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-lg">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">Beginner</td>
                        <td className="p-4 text-muted-foreground">Under 4 CPS</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">Average</td>
                        <td className="p-4 text-muted-foreground">6 to 7 CPS</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">Fast</td>
                        <td className="p-4 text-muted-foreground">8+ CPS</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">Elite (with technique)</td>
                        <td className="p-4 text-muted-foreground">10+ CPS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-5 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200 rounded-xl border border-indigo-200 dark:border-indigo-900/50 shadow-sm mt-4">
                  <p className="text-lg opacity-90 leading-relaxed">
                    Scores above 10 usually involve jitter clicking or butterfly clicking, both of which trade raw effort for mechanical tricks that boost total clicks without extra strain.
                  </p>
                </div>
              </div>

              <div id="how-to-use" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Use This CPS Test Tool</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Getting an accurate score takes less than a minute. Here's the full flow from start to finish.
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-4">Step-by-Step</h3>
                <ol className="space-y-6">
                  {[
                    { title: "Pick your duration", desc: "Choose a 5 second CPS for a quick burst reading, or a 30 second CPS test if you want to measure sustained clicking." },
                    { title: "Select your input method", desc: "Mouse, spacebar, or touch, depending on whether you're testing mobile clicking, tablet tapping, or standard desktop clicking." },
                    { title: "Hit Start", desc: "The timer begins the moment your first click or tap registers, so there's no wasted time waiting on a countdown." },
                    { title: "Click as fast as you can", desc: "Stay inside the test area and keep your clicking rate steady until the round ends." },
                    { title: "Check your results", desc: "You'll see your final CPS, total clicks, and, if you've tested before, how it compares to your session best." }
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0 shadow-sm mt-1">{i + 1}</span>
                      <div>
                        <strong className="text-xl text-foreground block mb-1">{step.title}</strong>
                        <span className="text-lg text-muted-foreground leading-relaxed">{step.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div id="tips" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Tips for Better Scores</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A few small adjustments often matter more than raw effort. Relax your hand instead of tensing it, since a loose grip actually shortens click travel distance and speeds up recovery between clicks. Warm up for thirty seconds before your real attempt, and pick a lightweight mouse if you're chasing a personal record.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Some players experiment with butterfly clicking, a two-finger technique that can spike your CPS score dramatically. It's worth knowing, though, that many games flag or outright ban this method in competitive settings, so check the rules before relying on it.
                </p>
              </div>

              <div id="key-features" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Key Features of a Good CPS Test</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Not every click speed test online is built the same. Look for a tool that includes the following:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    "A live, real-time CPS counter paired with a visible countdown bar",
                    "Multiple round lengths, from a 1 second CPS test up to a full 60 second CPS test, plus custom timers",
                    "Support for mouse, spacebar, and touch events, so screen taps count just like mouse clicks",
                    "Local history and trend graphs, so you can track clicking performance over weeks, not just one round",
                    "Privacy-friendly design, meaning your data stays in the browser instead of being uploaded anywhere",
                    "Extra modes such as best-of-five 1 second CPS test rounds, CPM tracking, right-click testing, and dedicated jitter click test or drag click test modes"
                  ].map((feature, i) => (
                    <div key={i} className="p-4 bg-card rounded-xl border border-border shadow-sm flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-muted/40 rounded-xl border border-border mt-6">
                  <p className="text-lg text-foreground/90 leading-relaxed text-center">
                    Together, these features turn a simple gimmick into a genuinely useful CPS training tool, one you can return to regularly to track real progress instead of a single lucky round.
                  </p>
                </div>
              </div>

              <div id="faq" className="space-y-6 pt-8 border-t border-border">
                <h2 className="text-3xl font-bold text-foreground">FAQs</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is a CPS test (clicks per second test)?",
                      a: "It's a tool that measures how many mouse clicks or screen taps you can perform within a chosen time limit, giving you a clear clicking speed number."
                    },
                    {
                      q: "What is a good CPS score?",
                      a: "Anywhere from 6 to 7 CPS is considered average, while 8 or higher on a standard test is generally seen as fast."
                    },
                    {
                      q: "Does my gaming mouse affect my CPS score?",
                      a: "Yes. Switch type, click travel distance, and overall mouse grip comfort can all shift your CPS benchmark up or down."
                    },
                    {
                      q: "What is the difference between CPS and CPM?",
                      a: "CPS measures clicks per second, while CPM measures clicks per minute, useful for tracking clicking endurance over longer round lengths."
                    },
                    {
                      q: "What is jitter clicking and butterfly clicking?",
                      a: "Both are clicking techniques that use hand vibration or rapid two-finger taps to boost hits per second beyond what normal clicking allows."
                    },
                    {
                      q: "Which test duration should I use?",
                      a: "Shorter tests like a 5 second CPS test show peak burst speed, while longer ones reveal sustained clicking ability."
                    },
                    {
                      q: "Does this CPS test work on mobile?",
                      a: "Yes, it supports tablet tapping and mobile clicking through touch input, alongside standard mouse-based testing."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="p-6 bg-card rounded-xl border border-border shadow-sm">
                      <h3 className="text-xl font-bold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-lg text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="conclusion" className="space-y-4 pt-8 border-t border-border">
                <h2 className="text-3xl font-bold text-foreground">Conclusion</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A CPS test is a small tool with a surprisingly wide range of uses, from casual curiosity about your clicking speed to serious CPS training for competitive Minecraft PvP. Understanding how CPS is calculated, what counts as a strong CPS benchmark, and which clicking techniques actually help makes the results far more meaningful than a single number on a screen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're running a quick 1 second CPS test to check your reflexes or a full 60 second CPS test to build clicking endurance, consistency matters more than any one attempt. Track your session best over time, experiment with grip and posture, and let the trend line tell the real story.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At the end of the day, this test is less about chasing a viral high score and more about understanding your own hand speed. Use it, revisit it, and let steady practice do the rest.
                </p>
              </div>

              {/* Related Tools Links */}
              <div className="pt-12 border-t border-border flex flex-wrap gap-4 mt-12">
                 <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                   Back to Complete Mouse Test
                 </Link>
                 <Link href="/double-click-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                   Run Double Click Test
                 </Link>
                 <Link href="/polling-rate-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                   Run Polling Rate Test
                 </Link>
                 <Link href="/mouse-dpi-analyzer" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                   Run DPI Test
                 </Link>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
