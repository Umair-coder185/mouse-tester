import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { DebounceTester } from "../../components/tools/DebounceTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Debounce Test: What It Is and Why It Matters",
  description: "Run a simple debounce test to catch mouse, keyboard, and software glitches early. See how it works and fix issues today.",
  alternates: {
    canonical: '/debounce-test-guide',
  },
};

export default function DebounceTestGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good debounce time for gaming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most competitive players use somewhere between four and sixteen milliseconds, depending on switch quality and click style."
        }
      },
      {
        "@type": "Question",
        "name": "Can software fully fix a failing switch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Raising the debounce setting can hide symptoms temporarily, but it does not repair worn or oxidized contacts."
        }
      },
      {
        "@type": "Question",
        "name": "Is debounce the same as delay or cooldown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not exactly. Debounce filters noise from one physical event, while a cooldown intentionally blocks repeated actions."
        }
      },
      {
        "@type": "Question",
        "name": "Do optical switches need debounce tests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rarely, since optical switches use a light beam instead of metal contacts, though some firmware still applies light debounce logic."
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
          url: `${SITE_CONFIG.url}/debounce-test-guide`
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
              { name: 'Debounce Test', path: '/debounce-test-guide' }
            ]} />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-6 mb-4">
              Debounce Test: What It Is and Why It Matters
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Last updated: {currentDate}
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              One click lands, two actions fire. A key tap sneaks in as a double letter. Before you blame a broken mouse or a bad habit, run a debounce test. Skip that step and you'll chase the wrong fix, swap good hardware, or tweak settings that never touch the real problem. This guide shows exactly how a debounce test works across mice, keyboards, code, and email lists, and how to read the results.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Tool Section */}
      <section className="py-12 bg-background relative" id="debounce-test-tool">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg border border-border p-4 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
              
              <DebounceTester />
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
                  <a href="#what-is-it" className="block text-sm text-muted-foreground hover:text-primary transition-colors">What Is a Debounce Test?</a>
                  <a href="#who-needs-it" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Who Needs a Debounce Test?</a>
                  <a href="#types" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Types of Debounce Tests</a>
                  <a href="#mouse-debounce" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How Mouse Debounce Tests Work</a>
                  <a href="#run-mouse-test" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Run a Mouse Debounce Test</a>
                  <a href="#keyboard-debounce" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How Keyboard Debounce Tests Work</a>
                  <a href="#run-keyboard-test" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Run a Keyboard Debounce Test</a>
                  <a href="#software-debounce" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Debounce in Software and Code</a>
                  <a href="#test-debounce-function" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Test a Debounce Function (For Developers)</a>
                  <a href="#email-debounce" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Email and Data Debounce Tests</a>
                  <a href="#best-tools" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Best Tools and Sites</a>
                  <a href="#how-to-fix" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Fix Debounce Problems</a>
                  <a href="#faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">FAQs</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              <div id="what-is-it" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">What Is a Debounce Test?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A debounce test checks whether one physical click or key press gets reported as a single, clean event, or as two. Mechanical switches don't close instantly; the contacts settle over a few milliseconds, and that tiny window of noise is what engineers call contact bounce. A debounce test simply counts the gap between signals from one press and flags anything that looks like an accidental second click.
                </p>
                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm border-l-4 border-l-primary">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    You'll find this idea applied in four different places, and they don't all mean the exact same thing. Hardware testers check mice and keyboards for switch wear. Developers write debounce tests for code that delays repeated function calls. Email teams use the same word for list-cleaning tools that catch invalid addresses before a campaign goes out. Each version solves a real, separate problem, and this guide walks through all four.
                  </p>
                </div>
              </div>

              <div id="who-needs-it" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">Who Needs a Debounce Test?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Anyone who clicks, types, codes, or emails for a living has a reason to run a debounce test at some point. Competitive gamers care because a single accidental double click can misfire a weapon or place a unit in the wrong spot. Office workers and writers notice it as doubled letters or files opening twice from one click. Developers need it because a debounce function that fires too often, or not at all, breaks search bars, buttons, and API calls. Email marketers rely on a version of it to keep bounce rates and spam complaints low.
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-4">A quick way to see who benefits most:</h3>
                <ul className="space-y-3">
                  {[
                    "Gamers chasing consistent clicks per second and clean fast clicking or drag click technique",
                    "Typists and support staff who keep seeing doubled characters mid-sentence",
                    "Developers shipping search fields, buttons, or scroll handlers",
                    "Email marketers sending to large lists that need cleaning before a send",
                    "IT and repair techs diagnosing whether hardware or software caused a fault"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="types" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Types of Debounce Tests</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Despite the shared name, these four test types measure completely different things. What connects them is the underlying pattern: a rapid, unwanted repeat of a signal that should have fired once, and a method for filtering it out. Knowing which debounce test applies to your problem saves you from tweaking the wrong setting entirely.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="5" y="2" width="14" height="20" rx="7"></rect><path d="M12 2v6"></path></svg>
                      Mouse Debounce Test
                    </h3>
                    <p className="text-muted-foreground">A mouse debounce test measures the time between two clicks registered from what should have been one physical press. Most online mouse click testers log a running event list with the exact millisecond gap, then flag any pair that falls below a set threshold. This is the most common test people search for, usually right after noticing accidental double clicks during normal browsing or gaming.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                      Keyboard Debounce Test
                    </h3>
                    <p className="text-muted-foreground">A keyboard debounce test works the same way but tracks key presses instead of mouse buttons. You type normally in a text field, and the tool watches for two characters appearing from a single tap. Mechanical, membrane, and even some optical boards can develop this fault as switches age or collect dust.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                      Software / Code Debounce Test
                    </h3>
                    <p className="text-muted-foreground">This version has nothing to do with hardware. Developers write unit tests to confirm that a debounce function correctly delays and merges repeated calls, so a search box doesn't fire a network request on every keystroke. These tests run in milliseconds using fake timers rather than real hardware.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                      Email Verification Test
                    </h3>
                    <p className="text-muted-foreground">Some email verification platforms borrowed the word "debounce" for a different purpose entirely: cleaning a mailing list of addresses that would otherwise bounce. This email debounce test checks syntax, domain records, and mailbox status before you send, and it shares nothing with the electrical meaning beyond the name.</p>
                  </div>
                </div>
              </div>

              <div id="mouse-debounce" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">How Mouse Debounce Tests Work</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Inside every mechanical mouse button sits a small switch with metal contacts. When you press down, those contacts don't meet cleanly; they vibrate against each other for a short burst before settling. Firmware has to decide, within a tiny window, whether that vibration counts as one click or several.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  That decision process is exactly what a mouse debounce test is built to reveal. It won't tell you why a switch is failing, but it will tell you clearly whether it is, based on timing alone rather than guesswork.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mt-8">What Is Mouse Switch Bounce?</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Switch bounce, sometimes called contact bounce, happens because a spring-loaded metal leaf strikes its contact point and rebounds slightly before it stays put. This typically lasts somewhere around one to five milliseconds on a healthy switch. Firmware applies a debounce window, often in the range of four to twenty milliseconds depending on the brand, and treats every signal inside that window as part of one click.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">How Double-Click Issues Happen</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Problems start once bounce duration grows beyond what the debounce window can absorb. Dust, oxidation on the contact surface, and simple spring fatigue all stretch that bounce out over time. Once the bounce outlasts the window, the mouse reports two separate clicks from one press, which is the classic accidental double click users complain about. Many people ask why their mouse double clicks out of nowhere, and worn contacts are almost always the answer.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">How Debounce Logic Fixes It</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Firmware generally uses one of two approaches. Eager debounce reports the click immediately, then ignores further signals for a set period. Defer debounce waits until the signal goes fully quiet before reporting anything, which is more reliable but adds a touch of extra delay. Raising the debounce setting in mouse software can mask a failing switch for a while, though it never actually repairs the worn contacts underneath.
                </p>
              </div>

              <div id="run-mouse-test" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Run a Mouse Debounce Test</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Running a mouse debounce test takes less than a minute and needs no extra software for most users. A browser-based click test page is usually enough, since it can log timing with millisecond accuracy and doesn't touch your system settings.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Keep one thing in mind before you start: test on a real mouse, not a touchscreen or trackpad, since those don't use the same mechanical switches and won't produce a meaningful reading.
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-4">Step-by-Step: Using an Online Mouse Debounce Tester</h3>
                <ol className="space-y-4 mb-8">
                  {[
                    "Open a mouse double-click tester in your browser and clear any existing log.",
                    "Click the left button once, firmly, and check whether the counter jumps by one or two.",
                    "Repeat for the right and middle buttons separately, since wear rarely affects every switch equally.",
                    "Click naturally around fifty to one hundred times to build a reliable sample.",
                    "Note any pair of clicks with a very short gap between them in the event log."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0 shadow-sm">{i + 1}</span>
                      <span className="text-lg text-muted-foreground pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>

                <h3 className="text-xl font-bold text-foreground mb-4">Interpreting Click Interval Results</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The exact numbers vary slightly between tools, but the pattern stays consistent. Use this as a rough guide rather than a strict rule:
                </p>
                
                <div className="overflow-x-auto bg-muted/30 rounded-xl border border-border mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-muted/50 text-foreground">
                        <th className="p-4 font-bold border-b border-border">Click Gap (Click Interval)</th>
                        <th className="p-4 font-bold border-b border-border">Likely Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-lg">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">Under 15ms</td>
                        <td className="p-4 text-muted-foreground">Almost certainly switch bounce, not a genuine second click</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">15ms to 50ms</td>
                        <td className="p-4 text-muted-foreground">Gray zone; several testers flag this range as a possible switch fault</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">Over 50ms</td>
                        <td className="p-4 text-muted-foreground">Usually two separate, intentional clicks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-6 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 rounded-xl border border-amber-200 dark:border-amber-900/50 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Common Mouse Debounce Test Mistakes
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    The biggest mistake is testing on a touch screen or a laptop trackpad, since neither uses a mechanical switch. Another common one is clicking too gently, which won't reproduce the sharp, hard press that triggers real bounce. People also forget to test the right and middle buttons, assuming the left button represents the whole mouse. Finally, running only a handful of clicks isn't enough; a worn switch may pass ten clicks and fail on the fortieth.
                  </p>
                </div>
              </div>

              <div id="keyboard-debounce" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">How Keyboard Debounce Tests Work</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Keyboards face the exact same physics problem as mice, just multiplied across dozens of switches instead of two or three. Each key has its own contact point, so wear and dust don't hit every key at once, which is why chatter often shows up on one or two letters long before the rest of the board.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Testing a full keyboard takes a little longer than testing a mouse, simply because there are more switches to check individually.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mt-8">What Is Keyboard Chattering?</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Keyboard chattering describes one key press registering as two or more characters. It comes from the same contact bounce mechanism found in mice: metal contacts inside a mechanical switch vibrate briefly before settling. Oxidation, dust, and worn springs all make that vibration last longer, eventually pushing it past the keyboard's debounce window.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">Key Bounce vs Intentional Double Press</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A genuine double press and true bounce look different once you slow down and check timing. Intentional double presses, even fast ones, rarely land under fifteen milliseconds apart for most typists. Anything tighter than that, especially on the same key repeatedly, points toward hardware chatter rather than a deliberate action.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">How Debounce Settings Affect Typing and Gaming</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Raising a keyboard's debounce time filters out chatter but adds a small delay to every keystroke on affected keys. Enthusiast boards running QMK or VIA firmware allow per-key debounce tuning, so only the problem switch gets a longer window instead of the entire keyboard. Competitive typists and gamers generally want this delay as short as the hardware safely allows, since global settings applied too broadly slow down every key, not just the faulty one.
                </p>
              </div>

              <div id="run-keyboard-test" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Run a Keyboard Debounce Test</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Most keyboard testers work the same basic way as mouse testers: you type into a monitored field, and the tool logs the timing between characters. The main difference is volume, since a full sweep should touch every key at least once.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Run a keyboard debounce test after cleaning your board or updating firmware too, so you have a fresh baseline to compare against later.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">Using an Online Keyboard Tester</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Open a browser-based keyboard tester and type each letter, number, and symbol slowly and deliberately. Hold modifier keys like Shift and Ctrl briefly to catch chatter that only shows up under sustained pressure. Then repeat the full pass at your normal typing speed, since some faults only appear under real-world conditions.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">Reading Key Press Intervals and Chatter Logs</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Most testers highlight any key that fires twice within a short window, commonly somewhere around eighty milliseconds. A single flagged key usually points to one worn switch, while several flagged keys across the board suggest a firmware or debounce-setting issue instead. Keep the log open in a second window so you can screenshot proof if you plan to file a warranty claim.
                </p>

                <div className="p-6 bg-muted/40 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-2">When to Adjust Firmware or Replace Switches</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If only one or two keys chatter, per-key debounce tuning or a simple switch swap solves it faster than changing global settings. Hot-swappable boards make replacement straightforward, since you can pull the faulty switch and drop in a new one without soldering. Soldered boards need more care, and a full keyboard that chatters everywhere after firmware updates usually points to a settings problem rather than dying switches across the entire board.
                  </p>
                </div>
              </div>

              <div id="software-debounce" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Debounce in Software and Code</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Software borrowed the term from electronics because the underlying problem is nearly identical: a rapid burst of signals that should really count as one event. Instead of a metal switch bouncing, you get a user typing quickly, a window resizing continuously, or a button getting clicked twice before the first request even finishes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A debounce function solves this by waiting for a pause in activity before it actually runs your code, collapsing dozens of rapid triggers into a single, well-timed call.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">What Does a Debounce Function Do?</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A debounce function wraps another function and delays its execution until a set amount of time has passed without another call. Every new call resets that timer, so only the last call in a rapid burst actually executes. This differs from throttling, which runs the function at fixed intervals regardless of how often it's called.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">Real-World Examples: Search Bars, Buttons, API Calls</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Search-as-you-type fields are the textbook example, since debouncing stops a network request from firing on every single keystroke. Resize and scroll event handlers use it too, avoiding expensive recalculations dozens of times per second. Submit buttons often get debounced to block a duplicate order or form post if someone clicks twice out of impatience.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">Why Developers Write Debounce Tests</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A debounce function that fires too early defeats its own purpose, while one that never fires breaks the feature entirely. Developers write tests to lock in the exact delay behavior and catch regressions when someone edits the timing logic later. Since the whole function revolves around time, these tests need a reliable way to simulate the passage of milliseconds without actually waiting for them.
                </p>
              </div>

              <div id="test-debounce-function" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Test a Debounce Function (For Developers)</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Real timers make debounce tests slow and flaky, since a test suite shouldn't need to pause for hundreds of milliseconds just to check one delay. Testing frameworks solve this with fake timers, letting you fast-forward time inside the test instead of waiting for it.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Both Jest and Vitest ship this capability out of the box, and Jasmine offers a similar clock mock for older codebases.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">Setting Up Unit Tests with Fake Timers</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A simple debounce implementation looks roughly like this:
                </p>
                <pre className="bg-slate-900 text-slate-50 p-4 rounded-xl overflow-x-auto text-sm font-mono mb-4">
{`function debounce(callback, duration) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), duration);
  };
}`}
                </pre>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Enable fake timers before each test, then call the debounced function several times in quick succession without any real delay between calls.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">Checking That Calls Are Delayed and Deduplicated</h3>
                <pre className="bg-slate-900 text-slate-50 p-4 rounded-xl overflow-x-auto text-sm font-mono mb-4">
{`test("only the last call fires after the delay", () => {
  const spy = jest.fn();
  const debounced = debounce(spy, 300);
  
  debounced("first");
  debounced("second");
  debounced("third");
  
  expect(spy).not.toHaveBeenCalled();
  
  jest.advanceTimersByTime(300);
  
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith("third");
});`}
                </pre>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  This pattern confirms two things at once: the function stays silent during rapid calls, then fires exactly once with the most recent arguments.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4 text-red-500 dark:text-red-400">Common Pitfalls in Debounce Testing</h3>
                <ul className="space-y-3">
                  {[
                    "Forgetting to advance fake timers, which leaves the assertion checking a function that never had a chance to run",
                    "Mixing real and fake timers in the same test file without resetting between them",
                    "Not clearing mocks between tests, causing call counts to leak from one test into the next",
                    "Writing an assertion that runs before an async tick completes, creating a flaky pass-or-fail result"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-1 shrink-0"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="email-debounce" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Email and Data Debounce (Verification) Tests</h2>
                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm border-l-4 border-l-primary">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    This section covers a completely different meaning of the same word, and it's worth separating clearly from everything above. A handful of email verification platforms use "debounce" or "DeBounce" as a brand name, describing a tool that catches addresses likely to bounce before you ever hit send. Nothing here involves switches, timers, or milliseconds. It's a data-quality check applied to an entire mailing list at once.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-foreground mt-8">What Is Email Debouncing?</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Email debouncing means running your subscriber list through a validation service before a campaign goes out, removing addresses that are invalid, disposable, or likely to bounce. The goal is protecting your sender reputation, since high bounce rates can get a domain flagged or blocklisted by major mail providers. Cleaning a list this way is standard practice for any marketer sending to more than a small handful of contacts.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">How Email Verification Tools Use Debounce Logic</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  These platforms typically check syntax first, confirming an address is even formatted correctly. From there, they look at domain and MX records, run an SMTP-level check against the mail server, and flag catch-all domains that accept everything without truly verifying a mailbox. Well-known services in this space include DeBounce, NeverBounce, and Bouncer, each offering bulk list-cleaning alongside single-address checks.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">When to Use an Email Debounce Test</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Run one before any large campaign, especially after importing a list from an event, form, or third-party source. Quarterly cleaning also helps, since email addresses naturally go stale as people change jobs or abandon old inboxes. Skipping this step on a big send is one of the fastest ways to trigger spam-trap hits and tank your deliverability.
                </p>
              </div>

              <div id="best-tools" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Best Tools and Sites for Debounce Tests</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The right tool depends entirely on which of the four debounce test types you actually need. Hardware testers, code-testing frameworks, and email-verification platforms don't overlap at all, despite sharing the same underlying word.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Here's a quick rundown organized by category, so you can jump straight to what applies to your situation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="5" y="2" width="14" height="20" rx="7"></rect><path d="M12 2v6"></path></svg>
                      Top Mouse Debounce Test Tools
                    </h3>
                    <p className="text-muted-foreground">Browser-based click counters remain the fastest option, since they need no installation and log click intervals immediately. Manufacturer software such as Logitech G Hub, Razer Synapse, and SteelSeries GG also expose debounce or "angle snapping" style settings alongside their own diagnostic tools. For a definitive hardware verdict, a browser tester paired with the manufacturer's own diagnostic mode gives the clearest picture.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                      Best Online Keyboard Testers
                    </h3>
                    <p className="text-muted-foreground">Most general keyboard testers log key events and highlight repeats within a short window automatically. Enthusiast keyboards running QMK or VIA firmware go a step further, exposing per-key debounce settings directly inside a configurator app. If your board supports either firmware, that configurator is usually more useful than a generic browser test.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                      Developer Resources
                    </h3>
                    <p className="text-muted-foreground">Jest and Vitest both include fake-timer utilities built specifically for testing time-based code like debounce and throttle functions. Jasmine offers a comparable clock mock for teams on older tooling. Utility libraries such as Lodash also ship a ready-made debounce function, which saves you from writing one from scratch in smaller projects.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                      Email Verification Services
                    </h3>
                    <p className="text-muted-foreground">DeBounce focuses on affordable bulk list cleaning with syntax, domain, and SMTP checks bundled together. NeverBounce and Bouncer serve a similar purpose with their own accuracy claims and pricing tiers. Compare a small trial batch across two services before committing to one for a full list, since accuracy can vary between providers.</p>
                  </div>
                </div>
              </div>

              <div id="how-to-fix" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Fix Debounce-Related Problems</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Once a debounce test confirms a real fault, the fix depends on whether the cause is dirt, aging hardware, or a setting that needs adjusting. Work through these in order, from cheapest to most invasive, before assuming you need new hardware.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Most double-click and chatter issues resolve at the first or second step below, so there's rarely a need to jump straight to a full switch replacement.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                      Cleaning and Maintaining Switches
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Compressed air can dislodge loose dust sitting around the switch housing without opening anything up. For a deeper clean, a small amount of isopropyl alcohol dripped into the switch, followed by several presses and full drying time, often clears light oxidation. Always unplug the device first, and give it plenty of time to dry before testing again.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                      Adjusting Debounce Time
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Raise the debounce setting in small steps, testing a few hundred clicks or keystrokes after each change. Going too high adds noticeable input delay, so stop as soon as the fault disappears rather than maxing out the setting. On keyboards with per-key control, apply the higher value only to the affected key instead of the whole board.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                      When Hardware Replacement Is the Only Solution
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      If cleaning and adjusted settings don't resolve it, the switch itself has likely reached the end of its lifespan. Hot-swappable mice and keyboards make replacement simple, since you can pull the worn switch and press in a new one. Soldered devices, or mice still under warranty, are usually better sent back to the manufacturer than opened up yourself.
                    </p>
                  </div>
                </div>
              </div>

              <div id="faq" className="space-y-6 pt-8 border-t border-border">
                <h2 className="text-3xl font-bold text-foreground">FAQs About Debounce Tests</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is a good debounce time for gaming?",
                      a: "Most competitive players use somewhere between four and sixteen milliseconds, depending on switch quality and click style. Lower settings favor speed; higher ones favor reliability against accidental double clicks."
                    },
                    {
                      q: "Can software fully fix a failing switch?",
                      a: "No. Raising the debounce setting can hide symptoms for a while, but it doesn't repair worn or oxidized contacts underneath. Eventually the bounce outlasts even a generous setting, and the fault returns."
                    },
                    {
                      q: "Is \"debounce\" the same as \"delay\" or \"cooldown\"?",
                      a: "Not exactly. Debounce specifically filters noise from one physical event, while a cooldown intentionally blocks repeated actions for gameplay or rate-limiting reasons. They can look similar in practice but solve different problems."
                    },
                    {
                      q: "Do optical switches need debounce tests?",
                      a: "Rarely, since optical switches use a light beam instead of metal contacts, removing the mechanical bounce that causes double clicks. Some optical mice still apply light debounce logic in firmware, but chatter from switch wear is far less common."
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
                  A debounce test looks simple on the surface, just a count of clicks or characters, yet it answers a question that guesswork usually gets wrong. Whether the issue sits inside a mouse switch, a keyboard key, a search bar's code, or a mailing list full of dead addresses, the same core idea applies: catch a repeated signal that should have counted as one, and decide what to do about it.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Start with the version that matches your actual problem rather than running every test out of curiosity. Gamers and typists get the fastest answers from a browser-based click or key tester, developers get theirs from a few lines of fake-timer code, and email teams get theirs from a list-cleaning pass before the next big send.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fixing what the test reveals usually costs nothing more than a few minutes of cleaning or a small settings change. Save hardware replacement for cases where cleaning and adjusted timing genuinely don't help, since a worn switch is the one problem no software setting can permanently repair.
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
