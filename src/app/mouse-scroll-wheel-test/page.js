import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { ScrollWheelTester } from "../../components/tools/ScrollWheelTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Mouse Scroll Wheel Test: Speed, Direction & Issue Check",
  description: "Run a free mouse scroll wheel test online. Check scroll speed, direction, and hardware issues in seconds. Try it now.",
  alternates: {
    canonical: '/mouse-scroll-wheel-test',
  },
};

export default function MouseScrollWheelTestPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is my scroll wheel broken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Run the test and watch for reverse ticks, skipped notches, or dead input. Two or more of these together usually point to hardware rather than software."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my scrolling reversed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check OS scroll settings first, since a natural scrolling toggle can flip direction. If the setting is correct and it still reverses, the wheel may be at fault."
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
          url: `${SITE_CONFIG.url}/mouse-scroll-wheel-test`
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
              { name: 'Scroll Wheel Test', path: '/mouse-scroll-wheel-test' }
            ]} />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-6 mb-4">
              Mouse Scroll Wheel Test: Speed, Direction & Issue Check
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Last updated: {currentDate}
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your cursor jumps two lines when you meant to scroll one, or it scrolls backward when you push forward. That gets old fast, especially mid-game or mid-deadline. This free mouse scroll wheel test reads your wheel's raw input and shows you, in under a minute, whether it's your settings or your hardware.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Tool Section */}
      <section className="py-12 bg-background relative" id="scroll-wheel-test-tool">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-3">Free Online Scroll Wheel Test Tool</h2>
              <p className="text-lg text-muted-foreground">
                Scroll inside the test area below and watch the dashboard update live. Every notch you turn shows up instantly as a delta value, a direction marker, and a running events-per-second count.
              </p>
            </div>
            <div className="bg-card rounded-2xl shadow-lg border border-border p-4 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
              
              <ScrollWheelTester />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
              This mouse wheel tester reads standard browser wheel events, so nothing needs installing. It works with vertical scroll, horizontal scroll, and, on supported mice, the middle-click button too. Start test, scroll naturally, and let the numbers do the explaining.
            </p>
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
                  <a href="#what-is-it" className="block text-sm text-muted-foreground hover:text-primary transition-colors">What Is a Scroll Wheel Test?</a>
                  <a href="#how-to-test" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Test Mouse Scroll Wheel</a>
                  <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How the Test Works</a>
                  <a href="#key-features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Key Features of This Test</a>
                  <a href="#testing-guide" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Detailed Testing Guide</a>
                  <a href="#for-gamers" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Scroll Testing for Gamers</a>
                  <a href="#common-issues" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Common Scroll Issues</a>
                  <a href="#faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">FAQs</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              <div id="what-is-it" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">What Is a Mouse Scroll Wheel Test?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A mouse scroll wheel test is a browser tool that turns your wheel's input into readable numbers: speed, direction, and consistency. Instead of guessing whether your mouse is glitching, you scroll through a scroll test area and watch the scroll data confirm or rule out a hardware fault.
                </p>
                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Gamers run a quick scroll wheel test before ranked matches, since a missed weapon switch can cost a round. Designers use it to catch jumpy scrolling before it slows down a workday, and office users just want to know if the mouse needs cleaning or replacing. Whoever you are, the mouse wheel check takes less than a minute.
                  </p>
                </div>
              </div>

              <div id="how-to-test" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">How to Test Mouse Scroll Wheel (Step-by-Step)</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Here's how to test scroll wheel performance properly:
                </p>
                <ol className="space-y-4 mb-8">
                  {[
                    "Open the tool in your browser.",
                    "Hover over the test area and scroll at your normal, everyday speed.",
                    "Watch the live metrics: pixels per second, delta values, and direction.",
                    "Try the optional modes: one-direction scrolling, a scroll wheel speed test, or a reverse and jitter diagnostic.",
                    "Read the auto-report and compare it against normal ranges.",
                    "Set a short test duration, thirty seconds is plenty, since most issues show up within the first ten."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0 shadow-sm">{i + 1}</span>
                      <span className="text-lg text-muted-foreground pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="p-5 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/50">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    How to Test if Your Scroll Wheel Clicks
                  </h3>
                  <p className="text-lg text-blue-800 dark:text-blue-300 opacity-90 leading-relaxed">
                    Some wheels double as a middle-click button, and that switch wears out separately from the scroll mechanism. Press straight down without turning the wheel, then check whether the tool logs a middle-click event. If nothing registers, the click switch is the likely culprit, not the scroll encoder.
                  </p>
                </div>
              </div>

              <div id="how-it-works" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">How the Scroll Wheel Test Works</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your browser fires a wheel event every time you turn the mouse wheel, and that event carries properties worth knowing. DeltaY measures vertical wheel input, DeltaX tracks horizontal movement, and DeltaMode tells the browser whether it's counting in pixels, lines, or pages.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The testing algorithm behind this tool logs each event, then calculates Accuracy ScrollY, Accuracy ScrollX, cumulative delta, and the DeltaY Max Peak and DeltaY Min Peak for your session. It's watching for basic signal reversal, checking stroke consistency notch by notch, and flagging wheel signal spikes the moment they appear.
                </p>
                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm mt-4 border-l-4 border-l-primary">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    It helps to know what this kind of wheel input analysis can and can't catch. It's excellent at spotting reverse ticks, signal stability issues, and inconsistent scrolling rhythm, since those all show up clearly in the real-time metrics. It's weaker at diagnosing deep driver conflicts or OS-level scroll settings, which sit outside what a browser can observe.
                  </p>
                </div>
              </div>

              <div id="key-features" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Key Features of This Scroll Test</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Real-time scroll chart and live dashboard for instant diagnostic results",
                    "Direction and scroll accuracy check for reverse ticks, jitter, and skipped notches",
                    "Scroll speed measurement in PPS and scrolls per second, with a plain-language rating",
                    "Horizontal scroll and middle-click testing where your hardware supports it",
                    "No downloads required, and it runs on Windows, Mac, and Linux alike"
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-3 items-start p-5 bg-card rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5 shrink-0"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      <span className="text-lg text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div id="testing-guide" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Detailed Testing Guide</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Different problems show up under different conditions, so a few short tests beat one long one.
                </p>
                <div className="space-y-4 mt-4">
                  <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
                    <strong className="text-foreground text-lg block mb-1">Basic Speed Test</strong>
                    <span className="text-muted-foreground">Scroll up and down as fast as feels natural and note your wheel speed reading.</span>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
                    <strong className="text-foreground text-lg block mb-1">Precision Test</strong>
                    <span className="text-muted-foreground">Turn the wheel one notch at a time and check for normal stroke consistency, since skipping here points to a worn encoder.</span>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
                    <strong className="text-foreground text-lg block mb-1">Direction Test</strong>
                    <span className="text-muted-foreground">Scroll deliberately one way and confirm the on-screen scroll direction matches your intent instead of firing a reverse signal.</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  If your mouse supports it, try a horizontal scroll test by holding Shift while scrolling, or tilting the wheel side to side. Finish with a middle-click test, since click failure and scroll failure almost always trace back to different causes.
                </p>
              </div>

              <div id="for-gamers" className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">Scroll Wheel Testing for Gamers</h2>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  A gaming mouse wheel does more than scroll a page. It handles weapon switching in shooter games, camera control in third-person titles, and map zoom in strategy and MMO games, so a half-second delay or a skipped notch has real consequences mid-match.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Running a gaming mouse test before a tournament or ranked session catches wheel drift and ghost scrolling while there's still time to clean the mouse or switch to a backup. It only takes a minute, and it's a lot cheaper than losing a round to hardware you could've caught early.
                </p>
              </div>

              <div id="common-issues" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Common Scroll Wheel Issues & How to Spot Them</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most complaints fall into a handful of recognizable patterns, and the test data usually points straight at the cause.
                </p>
                <ul className="space-y-4">
                  {[
                    { label: "Reverse scrolling", desc: "The wheel moves opposite to what you'd expect; this can be an OS setting or a genuine signal reversal in the hardware." },
                    { label: "Skipped notches or unstable scrolling", desc: "Often a sign of dust buildup or contact oxidation inside the wheel encoder." },
                    { label: "Jitter or signal bursts", desc: "Random small events and abnormal stroke consistency usually mean a worn or dirty encoder." },
                    { label: "Dead input", desc: "No scroll response at all, which typically means a broken encoder, a loose connection, or a low battery on a wireless mouse." },
                    { label: "Middle-click not working", desc: "The click switch has worn out separately from the scroll mechanism." }
                  ].map((issue, i) => (
                    <li key={i} className="flex gap-3 items-start p-4 bg-card rounded-xl border border-border shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 shrink-0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                      <div>
                        <strong className="text-foreground text-lg">{issue.label}:</strong>
                        <span className="text-muted-foreground block mt-1">{issue.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you're already searching "mouse wheel not working" or "mouse wheel scrolls backwards," running the test first tells you whether to clean the mouse wheel or start shopping for a replacement.
                </p>

                <div className="p-6 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 rounded-xl border border-amber-200 dark:border-amber-900/50 shadow-sm mt-6">
                  <h3 className="text-xl font-bold mb-2">Is My Scroll Wheel Broken? Quick Checklist</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    If two or more of the patterns above show up during a normal test, that's a fair sign the hardware, not your settings, is the problem. At that point, cleaning or repairing the mouse wheel encoder is worth trying before you replace anything.
                  </p>
                </div>
              </div>

              <div id="faq" className="space-y-6 pt-8 border-t border-border">
                <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Is my scroll wheel broken?",
                      a: "Run the test and watch for reverse ticks, skipped notches, or dead input. Two or more of these together usually point to hardware rather than software."
                    },
                    {
                      q: "Why is my scrolling reversed?",
                      a: "Check your OS scroll settings first, since a \"natural scrolling\" toggle can flip direction. If the setting's correct and it still reverses, the wheel itself may be at fault."
                    },
                    {
                      q: "What counts as a good scroll speed test result?",
                      a: "Most healthy mice land in a steady mid-range during normal use. Consistently very low or erratic PPS is the number worth watching, not the raw peak."
                    },
                    {
                      q: "Does this scroll test work on touchpads?",
                      a: "It reads the same wheel events, but touchpad gestures behave differently from a physical wheel, so results aren't directly comparable."
                    },
                    {
                      q: "How accurate is this mouse wheel diagnostic?",
                      a: "It's as accurate as the data your browser and OS report, making it a strong first check, though it can't replace a full hardware teardown."
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
                  A glitchy scroll wheel rarely announces itself clearly. It just makes everyday scrolling feel slightly wrong, until you run a real mouse scroll wheel test and see the pattern in the data instead of guessing at it.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From gaming, where a missed weapon switch actually costs you something, to ordinary browsing, where jumpy scrolling just wears you down, a sixty-second check tells you whether the fix is a quick clean or a full mouse replacement. The scroll wheel tester above covers speed, direction, and consistency in one pass, so you don't need three separate tools to get a straight answer.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If your results point to hardware wear, cleaning the encoder is worth trying before you spend on a new mouse. If they come back clean, you can rule the hardware out entirely and look at drivers or OS settings instead. Either way, you're no longer guessing.
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
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
