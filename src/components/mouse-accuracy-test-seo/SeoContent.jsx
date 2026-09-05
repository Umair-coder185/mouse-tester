import Link from "next/link";

export function SeoContent() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Sidebar (Table of Contents) */}
      <div className="lg:col-span-4 hidden lg:block">
        <div className="sticky top-24 p-6 bg-card rounded-xl border border-border shadow-sm">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            Table of Contents
          </h3>
          <nav className="space-y-3">
            <a href="#overview" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Overview</a>
            <a href="#features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#how-to-use" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Use This Tool</a>
            <a href="#what-is-it" className="block text-sm text-muted-foreground hover:text-primary transition-colors">What Is Mouse Accuracy?</a>
            <a href="#dpi-vs-cpi" className="block text-sm text-muted-foreground hover:text-primary transition-colors">DPI vs CPI vs Actual Accuracy</a>
            <a href="#factors" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Factors Affecting Accuracy</a>
            <a href="#how-to-test" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Test Mouse Accuracy</a>
            <a href="#how-to-improve" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Step-by-Step Guide to Improve</a>
            <a href="#common-problems" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Common Problems</a>
            <a href="#myths" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Mistakes and Myths</a>
            <a href="#best-practices" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Best Practices</a>
            <a href="#comparison" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Comparison Table</a>
            <a href="#faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#conclusion" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Conclusion</a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-8 space-y-12">
        
        <div id="overview" className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This tool runs a browser-based series of target challenges that check flick aiming, cursor tracking, and click precision in one session. No downloads, no accounts, no waiting around.
          </p>
          <div className="p-6 bg-card rounded-2xl border border-border shadow-sm border-l-4 border-l-primary mt-4">
            <p className="text-lg text-foreground/90 leading-relaxed">
              It's built for FPS players chasing tighter aim, designers who need pixel-perfect cursor control, editors doing precise selections, and honestly, anyone who spends hours a day moving a mouse for work. If your job or your K/D ratio depends on where your cursor actually lands, this is for you.
            </p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unlike a pure aim trainer, which focuses on reflexes and game-style scenarios, this test isolates raw mouse tracking accuracy and input consistency. And unlike a basic DPI checker, it doesn't just confirm your sensor's numbers, it measures how those numbers translate into real, on-screen accuracy.
          </p>
        </div>

        <div id="features" className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Features</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Here's what you're working with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { title: "Multiple difficulty levels", desc: "Easy, Medium, Hard, and Pro, so beginners and competitive players both get a useful benchmark." },
              { title: "Real-time metrics", desc: "Accuracy %, average error in pixels, average time per target, and an overall score." },
              { title: "Zero setup", desc: "Works with any wired or wireless mouse, no installation required." },
              { title: "Pairs with sensitivity checks", desc: "Use it alongside a DPI and polling rate test for the full picture of your setup." }
            ].map((feature, i) => (
              <div key={i} className="p-5 bg-card rounded-xl border border-border shadow-sm">
                <h3 className="font-bold text-foreground text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="how-to-use" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Use This Tool</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Getting a reading takes less than two minutes.
          </p>
          <ol className="space-y-4 mb-8">
            {[
              "Hit start and pick your difficulty.",
              "Complete the rounds of targets as they appear, don't overthink each click, aim like you would in a normal session.",
              "Review your results screen."
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0 shadow-sm mt-0.5">{i + 1}</span>
                <span className="text-lg text-muted-foreground pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-xl font-bold text-foreground mb-4">Here's how to read what you get back:</h3>
          <ul className="space-y-4">
            {[
              { label: "Accuracy %", desc: "Tells you how many targets you hit cleanly. Above 85% is solid; below 70% points to a poor mouse accuracy pattern worth investigating." },
              { label: "Avg error (px)", desc: "Shows how far off your average click was from dead center. Lower is better, and this number is often more revealing than accuracy % alone." },
              { label: "Avg time (ms)", desc: "Measures your reaction and target acquisition speed. Fast times with low accuracy usually mean you're rushing." },
              { label: "Score", desc: "Blends speed and precision into one comparable number." }
            ].map((metric, i) => (
              <li key={i} className="flex gap-3 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="text-lg"><strong className="text-foreground">{metric.label}:</strong> <span className="text-muted-foreground">{metric.desc}</span></span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-muted/40 rounded-xl border border-border">
            <p className="text-muted-foreground">Retest any time you change DPI, sensitivity, or your grip style — even small adjustments can shift your numbers noticeably.</p>
          </div>
        </div>

        <div id="what-is-it" className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">What Is Mouse Accuracy?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In plain terms, mouse accuracy is how closely your cursor and clicks match where you actually intended to go. It's the gap between "I meant to click there" and "I actually clicked there."
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            That gap matters more than people realize. In FPS games, it's the difference between a headshot and a whiff. In design and photo editing, it's the difference between a clean selection and a redo. And in everyday cursor control, it's just fewer misclicks and less frustration during a normal workday.
          </p>
        </div>

        <div id="dpi-vs-cpi" className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">DPI vs CPI vs Actual Accuracy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            DPI (dots per inch) and CPI (counts per inch) both describe how sensitive your sensor is — how far your cursor moves per inch of physical hand movement. Most gaming mice use these terms interchangeably, even though CPI is technically the more accurate label.
          </p>
          <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200 rounded-xl border border-indigo-200 dark:border-indigo-900/50 shadow-sm mt-4">
            <p className="text-lg opacity-90 leading-relaxed font-medium">
              Here's the part people miss: higher DPI does not mean better accuracy. It just means your cursor moves faster for the same physical distance. Past a certain point, extra sensitivity actually hurts precision because tiny hand tremors get amplified into big cursor jumps.
            </p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real accuracy depends on sensor quality, polling rate, and how consistently your setup translates physical mouse movement into 1:1 movement on screen. A cheap sensor at 1600 DPI can perform worse than a great sensor at 800 DPI.
          </p>
        </div>

        <div id="factors" className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Factors Affecting Mouse Accuracy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A handful of variables quietly shape every test result:
          </p>
          <ul className="space-y-4">
            {[
              { label: "Hardware", desc: "Sensor quality, polling rate (1000Hz, 4K, or 8K), mouse weight and shape, worn mouse feet, and whether you're on a wired mouse or dealing with wireless mouse latency." },
              { label: "Software and OS", desc: "Windows' 'Enhance Pointer Precision,' in-game raw input settings, and aggressive angle snapping or acceleration curves." },
              { label: "Setup", desc: "Your mousepad surface, desk height, and posture all affect control more than people expect." },
              { label: "Human factors", desc: "Fatigue, tension in your mouse grip, and inconsistent crosshair placement habits creep in during long sessions and quietly tank your numbers." }
            ].map((factor, i) => (
              <li key={i} className="p-5 bg-card rounded-xl border border-border shadow-sm flex flex-col gap-1">
                <strong className="text-xl text-foreground">{factor.label}</strong>
                <span className="text-muted-foreground text-lg">{factor.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="how-to-test" className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">How to Test Mouse Accuracy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            There are three core test types worth running:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
            <li><strong className="text-foreground">Static click precision:</strong> how tightly your clicks cluster on a still target</li>
            <li><strong className="text-foreground">Flick accuracy:</strong> how well you snap to a target that appears suddenly, elsewhere on screen</li>
            <li><strong className="text-foreground">Tracking smoothness:</strong> how cleanly your cursor follows a moving target without jitter or overshoot</li>
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            A simple routine works best: run a baseline test, change exactly one setting (DPI, sensitivity, or mousepad), then retest. Changing multiple things at once makes it impossible to know what actually helped.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Testing weekly is enough for most people. If you swap hardware, update mouse firmware or mouse drivers, or change your desk setup, retest right away — those changes tend to move the needle fast.
          </p>
        </div>

        <div id="how-to-improve" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step-by-Step Guide: How to Improve Mouse Accuracy</h2>
          <ol className="space-y-4">
            {[
              "Lock in a consistent grip and posture. Switching between palm, claw, and fingertip grip week to week makes it impossible to build real tracking consistency.",
              "Set a stable DPI, typically in the 400 to 1600 range, and keep Windows pointer speed at the neutral default (6/11).",
              "Turn off 'Enhance Pointer Precision' along with in-game smoothing or angle snapping; these features add prediction that fights against raw precision.",
              "Choose a mousepad sized for your grip. Arm aimers generally want a larger surface; wrist aimers can work well with something smaller and firmer.",
              "Train with structure. Do precision drills first, then move to flick and tracking exercises once your baseline is steady.",
              "Hold your settings steady for several sessions before changing anything again. Muscle memory needs repetition, not constant tweaking."
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0 shadow-sm mt-0.5">{i + 1}</span>
                <span className="text-lg text-muted-foreground pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div id="common-problems" className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Common Problems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { title: "Cursor feels jittery or 'floaty'", desc: "Usually points to a mouse sensor accuracy issue, a dirty sensor lens, or an unstable mousepad surface." },
              { title: "Overshooting or undershooting consistently", desc: "Often a sign your DPI doesn't match your grip and arm/wrist movement style." },
              { title: "Accuracy drops during long sessions", desc: "This is fatigue, not a settings problem, grip tension builds and tracking gets sloppy after 45 to 60 minutes." },
              { title: "Big gap between test score and in-game performance", desc: "Games add movement, recoil, and pressure the test doesn't simulate. A huge gap usually means the issue is decision-making, not raw mechanics." },
              { title: "Wireless inconsistencies", desc: "Low battery and 2.4GHz interference can both quietly introduce input lag and cursor deviation." }
            ].map((problem, i) => (
              <div key={i} className="p-5 bg-card rounded-xl border border-border shadow-sm">
                <h3 className="font-bold text-foreground text-xl mb-2 flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="myths" className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Common Mistakes and Myths</h2>
          <ul className="space-y-4">
            {[
              "'More DPI always means better aim.' It doesn't. Past your sensor's sweet spot, higher DPI adds noise, not precision.",
              "Constantly changing sensitivity instead of sticking with one setting long enough to build muscle memory.",
              "Ignoring your mousepad and desk setup, which often matters more than the mouse itself.",
              "Only using aim trainers, or only playing games — the best results come from mixing structured drills with real match practice.",
              "Cranking up angle snapping or prediction for competitive FPS play, which trades genuine skill for artificial assistance."
            ].map((myth, i) => (
              <li key={i} className="flex gap-3 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 shrink-0"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                <span className="text-lg text-muted-foreground">{myth}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="best-practices" className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Best Practices for Maximum Precision</h2>
          <div className="p-6 bg-muted/30 rounded-xl border border-border">
            <ul className="space-y-4">
              {[
                "Pick one fixed DPI stage and stay with it.",
                "Keep Windows pointer speed at default and disable pointer enhancements.",
                "Use raw input in-game and turn off unnecessary motion filters.",
                "Check lift-off distance (LOD) and calibrate to your mousepad surface if your mouse software allows it.",
                "Warm up with short precision drills before ranked or competitive sessions.",
                "Track your scores over time under the same conditions so the numbers are actually comparable."
              ].map((practice, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-lg text-foreground font-medium">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="comparison" className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Comparison Table: Key Factors That Impact Accuracy</h2>
          <div className="overflow-x-auto bg-card rounded-xl border border-border shadow-sm mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50 text-foreground">
                  <th className="p-4 font-bold border-b border-border">Factor</th>
                  <th className="p-4 font-bold border-b border-border">Typical Range</th>
                  <th className="p-4 font-bold border-b border-border">Effect on Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-lg">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold text-foreground border-r border-border">DPI</td>
                  <td className="p-4 text-muted-foreground border-r border-border">400–1600</td>
                  <td className="p-4 text-muted-foreground">Higher isn't better past your sensor's sweet spot; mismatched DPI causes over/undershoot</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold text-foreground border-r border-border">Polling rate</td>
                  <td className="p-4 text-muted-foreground border-r border-border">1000Hz–8K</td>
                  <td className="p-4 text-muted-foreground">Higher polling reduces input lag and smooths tracking</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold text-foreground border-r border-border">Sensor quality</td>
                  <td className="p-4 text-muted-foreground border-r border-border">Budget–flagship (e.g. PixArt 3395)</td>
                  <td className="p-4 text-muted-foreground">Directly affects tracking consistency and jitter</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold text-foreground border-r border-border">Mousepad type</td>
                  <td className="p-4 text-muted-foreground border-r border-border">Cloth, hard, hybrid</td>
                  <td className="p-4 text-muted-foreground">Cloth favors control; hard favors speed and glide</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold text-foreground border-r border-border">Grip style</td>
                  <td className="p-4 text-muted-foreground border-r border-border">Palm, claw, fingertip</td>
                  <td className="p-4 text-muted-foreground">Affects stability and how DPI should be tuned</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="faq" className="space-y-6 pt-8 border-t border-border">
          <h2 className="text-3xl font-bold text-foreground">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is a good mouse accuracy score?",
                a: "Accuracy above 85% with low average error is considered strong. Under 70% usually signals a setup or consistency issue worth fixing."
              },
              {
                q: "How often should I test my mouse accuracy?",
                a: "Weekly is enough for most players, and always after changing hardware, DPI, or drivers."
              },
              {
                q: "Does wireless affect accuracy in 2026?",
                a: "Modern wireless mice with good polling rates match wired performance closely, though battery level and interference can still cause minor lag."
              },
              {
                q: "What DPI should most players use?",
                a: "Most competitive players land between 400 and 1600 DPI — the 'best' number depends on grip and arm vs wrist aiming, not a universal figure."
              },
              {
                q: "Can this test replace in-game aim training?",
                a: "No. It's a precise way to measure raw tracking and click precision, but in-game practice adds movement, recoil, and decision-making the test doesn't cover."
              },
              {
                q: "How do I know if my mouse sensor is bad?",
                a: "Inconsistent tracking, jitter at low speeds, or skipping on a clean, well-lit mousepad are the usual signs of a failing or low-quality sensor."
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
            Chasing better aim by randomly tweaking settings rarely works, and it's frustrating when nothing seems to stick. A real mouse accuracy test gives you an actual baseline — accuracy percentage, average error, and speed — so every change you make afterward is based on evidence, not guesswork.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Start with a baseline test, adjust one variable at a time, and give each change a few sessions before judging it. Between your DPI, grip style, mousepad, and settings like raw input, small consistent tweaks compound into a real, measurable improvement in cursor control.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Retest regularly, especially after any hardware or driver update, and use your score history as a ranking signal for your own progress. Precision isn't about one lucky match — it's built through consistent setup and consistent practice, tracked over time.
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
           <Link href="/drag-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
             Run Drag Test
           </Link>
        </div>

      </div>
    </div>
  );
}
