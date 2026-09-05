import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { DoubleClickTester } from "../../components/tools/DoubleClickTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export default function DoubleClickTestPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can my mouse fail a double-click test without me noticing a problem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A mouse can misfire only occasionally at first, so normal use might not reveal it. Running the double click test catches those early, intermittent clicks before they get worse."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to install anything to use it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No installation is required. The double click test tool runs directly in your browser and checks nothing beyond the clicks you send it."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: "Double Click Test – Check Your Mouse for Double Clicks",
          description: "Run our free double click test to check if your mouse is double clicking. A quick 1-minute test to diagnose broken mouse switches and accidental clicks.",
          url: `${SITE_CONFIG.url}/double-click-test`
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
              { name: 'Double Click Test', path: '/double-click-test' }
            ]} />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-6 mb-6">
              Double Click Test – Check Your Mouse for Double Clicks
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A single click that fires twice can wreck your aim in a shootout or open the wrong file at work. That flicker usually comes from a worn switch, a stray setting, or a loose connection, and it gets worse the longer you ignore it. Run the double click test below, watch the interval log, and you'll know in under a minute whether your mouse needs a fix or a replacement.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Tool Section */}
      <section className="py-12 bg-background relative" id="double-click-test-tool">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg border border-border p-4 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
              
              <DoubleClickTester />
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
                  <a href="#quick-answer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Quick Answer</a>
                  <a href="#what-is-it" className="block text-sm text-muted-foreground hover:text-primary transition-colors">What Is a Double Click Test?</a>
                  <a href="#how-to-test" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Test If Your Mouse Is Double Clicking</a>
                  <a href="#double-click-test-tool" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Double Click Test Tool</a>
                  <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How This Double Click Tester Works</a>
                  <a href="#why-double-clicking" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Why Is My Mouse Double Clicking?</a>
                  <a href="#how-to-fix" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Fix a Double Clicking Mouse</a>
                  <a href="#speed-settings" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Double Click Speed & Settings</a>
                  <a href="#when-to-use" className="block text-sm text-muted-foreground hover:text-primary transition-colors">When to Use the Double Click Test</a>
                  <a href="#faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Featured Snippet Target */}
              <div id="quick-answer" className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Quick Answer</h2>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  Your mouse is double clicking if one press of the left or right button registers as two clicks in a row, usually within less than 100 milliseconds. You'll notice it most when a single click opens a file twice, selects extra text, or fires a second shot in a game. A mouse double-click test settles the question in seconds instead of leaving you to guess.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Open the tool above, press the button you want to check twenty or thirty times at your normal speed, and read the verdict underneath the log. Each entry shows the exact gap between presses, so you can spot a mouse double-click problem the moment it happens instead of just suspecting one. If most of your clicks land in the safe range and only a couple slip under the threshold, treat it as an early warning rather than a full failure.
                </p>
              </div>

              <div id="what-is-it" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">What Is a Double Click Test?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A double click test measures the time between two presses of the same mouse button and flags anything that lands closer together than a genuine second click should. Real double clicking happens when you deliberately press twice, usually somewhere between 200 and 500 milliseconds apart. The test exists to catch the other kind: an involuntary second signal your mouse sends when you only pressed once.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This matters for more than mild annoyance. Gamers lose fights when a single click accidentally opens a chest or fires twice, office workers open the wrong file or send an email early, and anyone browsing the web can end up buying two of an item by mistake. A quick mouse diagnostic turns a vague suspicion into a clear yes or no, so you know whether to adjust a setting, clean the switch, or replace the mouse.
                </p>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200 rounded-xl border border-blue-200 dark:border-blue-900/50 flex gap-4 items-start shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                  <div>
                    <strong className="block mb-1">Quick Fact:</strong>
                    Genuine double clicks usually land 200 to 500 milliseconds apart. Anything under 100 milliseconds points to hardware, not intent.
                  </div>
                </div>
              </div>

              <div id="how-to-test" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">How to Test If Your Mouse Is Double Clicking</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Testing takes less effort than living with the problem. Follow the steps below to run a proper mouse click test and get a straight answer in under a minute.
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-4">Step-by-Step Instructions</h3>
                <ol className="space-y-4">
                  {[
                    "Open the Double Click Test tool above and let it load fully before you start clicking.",
                    "Choose the button you want to check: left, right, or middle.",
                    "Click that button naturally 20 to 30 times, at the speed you'd normally use.",
                    "Check the interval log and the verdict badge underneath it for a pass or fail result.",
                    "Change one variable, a different USB port, mouse pad, or surface, and retest to confirm the result."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0 shadow-sm">{i + 1}</span>
                      <span className="text-lg text-muted-foreground pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div id="tool-features" className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Tool Features</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Double Click Test above runs entirely in your browser, so nothing you click gets sent anywhere or stored on a server. Press the button you're checking, and the tool timestamps every signal it receives down to the millisecond. You'll see a running tally next to a plain pass or fail verdict, no technical background required.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Precise Detection", desc: "Timestamps every click down to the millisecond, so short intervals don't slip past unnoticed." },
                    { title: "All Mouse Buttons", desc: "Test left, right, middle, and side buttons, including back and forward." },
                    { title: "Interval Log", desc: "A running click log that records total clicks and click rate so you can review results afterward." },
                    { title: "Instant Verdict", desc: "A clear pass or fail badge instead of raw numbers you have to interpret yourself." },
                    { title: "Privacy & Security", desc: "Everything runs locally in your browser, and no click data ever leaves your device." }
                  ].map((feature, i) => (
                    <div key={i} className="p-5 bg-card rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                      <strong className="block text-foreground text-lg mb-2">{feature.title}</strong>
                      <span className="text-muted-foreground">{feature.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div id="how-it-works" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">How This Double Click Tester Works</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every time you press a button, your mouse sends an electrical signal through its switch to your computer. The tool records the exact moment each signal arrives and compares it to the one before it. If two signals land close enough together, they get flagged as a possible double-click detection event instead of two separate, intentional clicks.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most testers set the cutoff somewhere between 50 and 100 milliseconds, since a genuine human double click rarely happens that fast. Anything faster usually points to a hardware issue rather than quick fingers. That gap is often called the double-click threshold, and it's the same idea your operating system uses to decide whether two clicks count as one action or two.
                </p>
                <div className="p-6 mt-6 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 rounded-xl border border-amber-200 dark:border-amber-900/50 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">What a Short Interval Means</h3>
                  <p className="text-lg opacity-90">
                    A short interval on its own isn't proof of a broken mouse, but a pattern of them is. One flagged click out of thirty could just be click timing that happened to land close together, so don't panic over a single result. If it keeps happening across multiple tests, though, you're likely looking at mouse chatter, a worn switch letting the contact bounce and fire twice from a single press.
                  </p>
                </div>
              </div>

              <div id="why-double-clicking" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Why Is My Mouse Double Clicking?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A single click that registers twice almost always traces back to one of three places: a setting on your computer, the connection between your mouse and your PC, or the switch inside the mouse itself. Ruling these out one at a time is faster than guessing, and it usually points straight to the fix you need.
                </p>
                <div className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-4">Common Causes</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 shrink-0"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>
                      <div>
                        <strong className="text-foreground">Settings and macros:</strong>
                        <span className="text-muted-foreground ml-2">an overly aggressive double-click speed setting, a bound macro, or driver software duplicating input.</span>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 shrink-0"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                      <div>
                        <strong className="text-foreground">Connection and power:</strong>
                        <span className="text-muted-foreground ml-2">wireless interference, a low battery in a wireless mouse, or a USB hub adding noise to the signal.</span>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 shrink-0"><path d="m14 14-8 8"></path><path d="M3 21h6"></path><path d="m12.3 8.3 4.4-4.4a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 1 0 2.8l-4.4 4.4"></path><path d="M22 22 17.5 17.5"></path></svg>
                      <div>
                        <strong className="text-foreground">Wear and apps:</strong>
                        <span className="text-muted-foreground ml-2">a worn mouse switch from age and use, or a specific app misreading rapid input as two separate clicks.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="how-to-fix" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">How to Fix a Double Clicking Mouse</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most double-clicking problems have a cheap fix before they need an expensive one. Work through the checklist below in order, from the simplest change to the most involved, and retest with the tool above after each step.
                </p>
                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-4">Quick Fixes</h3>
                  <ul className="space-y-3">
                    {[
                      "Clean the mouse: use compressed air around the button and wipe away any dust near the switch.",
                      "Change the connection: try a different USB port, swap the cable, or move a wireless receiver closer to cut down on connection problems.",
                      "Adjust the double-click speed in your OS settings so it's less sensitive to fast repeat clicks.",
                      "Update your mouse drivers, or reinstall them if they haven't been touched in a while.",
                      "Test the mouse on another surface or mouse pad, and on a second computer if you have one, to confirm whether the issue follows the mouse."
                    ].map((fix, i) => (
                      <li key={i} className="flex gap-3 items-start bg-muted/40 p-3 rounded-lg border border-border/50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span className="text-lg text-foreground/90">{fix}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you get through the whole list and the problem persists, especially across more than one computer, the switch inside the mouse has likely worn out. At that point, repair or replacement is really the only option left, and for most mice, replacement is the more practical choice.
                </p>
              </div>

              <div id="speed-settings" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Double Click Speed & Settings</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your operating system has its own double-click speed setting, separate from anything happening inside the mouse. It controls how much time can pass between two clicks before your computer treats them as one action instead of two, and adjusting it can mask a mild hardware issue or fix a software one.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  There's no single universal number, but most systems default to somewhere in the 400 to 500 millisecond range, adjustable roughly between 100 and 900 milliseconds. Microsoft's own support documentation and Apple's support documentation both walk through the exact menu path for their systems, summarized below.
                </p>
                
                <div className="overflow-x-auto bg-card rounded-xl border border-border shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-muted/50 text-foreground">
                        <th className="p-4 font-bold border-b border-border">Platform</th>
                        <th className="p-4 font-bold border-b border-border">Where to Find It</th>
                        <th className="p-4 font-bold border-b border-border">What to Adjust</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Windows</td>
                        <td className="p-4 text-muted-foreground">Settings {'>'} Bluetooth & devices {'>'} Mouse {'>'} Additional mouse settings</td>
                        <td className="p-4 text-muted-foreground">Double-click speed slider</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">macOS</td>
                        <td className="p-4 text-muted-foreground">System Settings {'>'} Trackpad or Mouse {'>'} Point & Click</td>
                        <td className="p-4 text-muted-foreground">Double-click speed slider</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="when-to-use" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">When to Use the Double Click Test</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Some setups call for a double-click check almost every session, while others only need a one-time look. Knowing which camp you fall into helps you decide how often to run the test.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>
                    </div>
                    <strong className="block text-foreground mb-2">Gamers</strong>
                    <span className="text-sm text-muted-foreground">An accidental double-fire can cost a fight in a shooter or waste an item in a survival game, so competitive players on a gaming mouse often test before big matches.</span>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
                    </div>
                    <strong className="block text-foreground mb-2">Office and Work</strong>
                    <span className="text-sm text-muted-foreground">A stray extra click can open the wrong file, submit a form twice, or select more text than intended.</span>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <strong className="block text-foreground mb-2">New or Older Mice</strong>
                    <span className="text-sm text-muted-foreground">Worth running right out of the box, and again every few months on a mouse you use daily.</span>
                  </div>
                </div>
                
                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-3">Platform Policies</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Rules around double clicking vary by game and platform, so check the specific rules wherever you play. On Hypixel, for example, community discussion and the server's published rules generally draw a line between an unintentional hardware double click and software that fires extra inputs on your behalf: the first is treated as a hardware quirk to fix, while the second falls under the same restrictions as autoclicking. Consistently high click rates can still get flagged for review regardless of the cause, so fixing an unintentional double click is worth doing either way.
                  </p>
                </div>
              </div>

              <div id="faq" className="space-y-6 pt-8 border-t border-border">
                <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions (FAQ)</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Can my mouse fail a double-click test without me noticing a problem?",
                      a: "Yes. A mouse can misfire only occasionally at first, so normal use might not reveal it. Running the double click test catches those early, intermittent clicks before they get worse."
                    },
                    {
                      q: "Does this tool measure click accuracy too?",
                      a: "The core test focuses on double-click detection rather than raw speed, but the same log shows your click rate in clicks per second. That gives you a rough accuracy picture alongside the double-click verdict."
                    },
                    {
                      q: "Can I run the double click test on mobile?",
                      a: "The test is built around a physical mouse button, so it works best on a desktop or laptop with a mouse plugged in. Touchscreens don't have the same switch-based issue this tool is designed to catch."
                    },
                    {
                      q: "Do I need to install anything to use it?",
                      a: "No installation is required. The double click test tool runs directly in your browser and checks nothing beyond the clicks you send it."
                    },
                    {
                      q: "Which browser should I use for the most accurate results?",
                      a: "Any modern, updated browser works, including Chrome, Firefox, Edge, and Safari. Keeping your browser current avoids input lag that could distort your click response time."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="p-6 bg-card rounded-xl border border-border shadow-sm">
                      <h3 className="text-xl font-bold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-lg text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
