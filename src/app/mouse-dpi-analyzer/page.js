import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { DpiTester } from "../../components/tools/DpiTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Mouse DPI Analyzer: Test Your Mouse DPI with High Accuracy",
  description: "Test your mouse DPI instantly with our free mouse DPI analyzer. Check DPI, sensitivity, and accuracy in seconds. No download needed.",
  alternates: {
    canonical: '/mouse-dpi-analyzer',
  },
};

export default function MouseDpiAnalyzerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a DPI test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A DPI test measures how far your cursor moves on screen against how far you physically move your mouse. It then calculates an accurate DPI reading in seconds."
        }
      },
      {
        "@type": "Question",
        "name": "How can I check my DPI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Run an online mouse DPI analyzer and move your mouse across a measured distance. The tool reads your cursor's movement and returns your DPI value instantly."
        }
      },
      {
        "@type": "Question",
        "name": "How can I convert 800 DPI to 1600 DPI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Switch your mouse's DPI button to its 1600 stage if it has one. If not, double your in-game sensitivity while keeping DPI at 800 for a similar feel."
        }
      },
      {
        "@type": "Question",
        "name": "What DPI is normal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most mice ship with a default DPI between 800 and 1600. That range suits general browsing, office work, and casual gaming for most people."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good DPI number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "800 DPI is a common, comfortable starting point for gaming and daily tasks alike. From there, small adjustments up or down usually find your ideal setting."
        }
      },
      {
        "@type": "Question",
        "name": "How much DPI is high?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DPI above 3200 is generally considered high. It's mainly useful for large or high-resolution monitors rather than precise, competitive aiming."
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
          url: `${SITE_CONFIG.url}/mouse-dpi-analyzer`
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
              { name: 'DPI Analyzer', path: '/mouse-dpi-analyzer' }
            ]} />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-6 mb-4">
              Mouse DPI Analyzer: Test Your Mouse DPI with High Accuracy
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Last updated: {currentDate}
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your cursor moves too fast during a firefight, or too slow when you're editing a photo pixel by pixel, and you've probably blamed your hand for it. The real culprit is often your mouse's DPI setting, not you. A reliable mouse DPI analyzer clears up the confusion in seconds. Move your mouse, read the result, and finally know the exact number behind every twitch of your cursor.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Tool Section */}
      <section className="py-12 bg-background relative" id="dpi-test-tool">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg border border-border p-4 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
              
              <DpiTester />
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
                  <a href="#overview" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Overview</a>
                  <a href="#what-is-dpi-analyzer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">What Is a Mouse DPI Analyzer?</a>
                  <a href="#what-is-dpi" className="block text-sm text-muted-foreground hover:text-primary transition-colors">What is Mouse DPI?</a>
                  <a href="#why-does-dpi-matter" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Why Does DPI Matter?</a>
                  <a href="#gaming-performance" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Mouse DPI for Gaming Performance</a>
                  <a href="#what-dpi-to-use" className="block text-sm text-muted-foreground hover:text-primary transition-colors">What DPI Should I Use?</a>
                  <a href="#dpi-vs-sensitivity" className="block text-sm text-muted-foreground hover:text-primary transition-colors">DPI vs In-Game Sensitivity</a>
                  <a href="#tool-features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Feature Of Mouse DPI Test</a>
                  <a href="#how-to-use" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How To Use Online DPI Analyzer Tool?</a>
                  <a href="#change-dpi-windows" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Change Mouse DPI on Windows 10/11?</a>
                  <a href="#change-dpi-macos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Change Mouse DPI on MacOS?</a>
                  <a href="#why-check" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Why Should You Check Your Mouse DPI?</a>
                  <a href="#faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Frequently Asked Questions</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              <div id="overview" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This page walks you through everything tied to your mouse's DPI, from what the number actually means to how you can test it right now with our free mouse DPI analyzer. You'll also find clear steps for changing DPI on both Windows and macOS, so you're not stuck guessing at settings menus.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gamers, designers, and everyday desktop users all rely on accurate DPI for different reasons. Whether you're chasing tighter aim in a shooter or steadier lines in a design program, the sections below break down exactly what to check and why it matters.
                </p>
              </div>

              <div id="what-is-dpi-analyzer" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">What Is a Mouse DPI Analyzer?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A mouse DPI tester is a device which helps to calculate how much the cursor moves relative to your mouse movement in terms of distance. It works when the user moves the cursor for some predetermined distance and the tester then calculates the number of pixels moved, giving the real DPI of the mouse instantly.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  DPI tested on this type of DPI tester would give more realistic results rather than the ones mentioned on the package of the mouse. Various factors like software configurations, surface texture and even mouse pad can change the number slightly.
                </p>
              </div>

              <div id="what-is-dpi" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">What is Mouse DPI?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  DPI is an acronym for dots per inch, which refers to the number of pixels traveled by the cursor for every inch the user moves the mouse on his/her table. For instance, if a mouse is configured at 800 DPI, it will move the pointer 800 pixels for each inch moved by the hand. In the case where a mouse is configured at 1600 DPI, it will travel twice the distance covered by a mouse configured at 800 DPI for each inch traveled by the hand.
                </p>
                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm mt-4">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Imagine gears on a bike: a small gear takes more effort to travel a certain distance than a bigger gear. Therefore, high DPI means faster pointer speed for small movements while low DPI means slow pointer speed for bigger distances. Most of the mice allow the user to change the settings through a DPI button to change DPI settings.
                  </p>
                </div>
              </div>

              <div id="why-does-dpi-matter" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Why Does DPI Matter?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your DPI setting shapes how your hand movements translate into on-screen action, and that connection touches almost everything you do with a mouse. Too high, and small movements send your cursor flying past its target. Too low, and you're stuck dragging your arm across the desk just to reach the other side of the screen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Finding the right balance improves comfort, cuts down on wrist strain, and sharpens your cursor control across every task, whether that's lining up a headshot or nudging a single pixel in a photo editor.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>
                      Improve Gaming
                    </h3>
                    <p className="text-muted-foreground">Competitive shooters like Valorant and Counter-Strike reward players who pair the right DPI with the right in-game sensitivity. Pro players often run low sensitivity setups for precise aiming, since smaller, more controlled hand movements translate into steadier, more predictable shots.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
                      Enhance Accuracy
                    </h3>
                    <p className="text-muted-foreground">Designers spend hours nudging anchor points, cropping images, and lining up layers, and a poorly calibrated DPI makes every one of those tasks harder than it needs to be. A DPI tuned for pixel-level accuracy turns shaky, overshot clicks into smooth, controlled strokes.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                      Optimize Use
                    </h3>
                    <p className="text-muted-foreground">Even outside gaming and design, DPI affects how comfortable your daily tasks feel. A setting that matches your screen size and desk space cuts down on unnecessary hand movement, which makes browsing, emailing, and general multitasking noticeably smoother.</p>
                  </div>
                </div>
              </div>

              <div id="gaming-performance" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Mouse DPI for Gaming Performance</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Serious players hardly ever consider only the value of DPI. Rather, they use a value called effective DPI or eDPI, which is calculated by taking the product of the DPI value of the mouse and the in-game sensitivity multiplier.
                </p>
                <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200 rounded-xl border border-indigo-200 dark:border-indigo-900/50 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    Quick Tip
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    eDPI = Mouse DPI × In-Game Sensitivity. Two players can run different DPI settings and still play with identical aim once their eDPI matches.
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most competitive FPS players land somewhere between 400 and 1600 DPI, favoring lower numbers for steadier, more repeatable aim. Higher DPI can still work well in fast, map-heavy games like certain MOBA or RTS titles; meanwhile, competitive shooters typically stick with lower, more controlled numbers.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">Mouse DPI for Productivity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Work that takes place in the office and designs typically requires a different perspective when compared to gaming. A medium DPI is normally one in between 800 and 1200, which provides a good compromise between smooth movement and precision required for spreadsheets and graphic editing software.
                </p>
              </div>

              <div id="what-dpi-to-use" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">What DPI Should I Use?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  There's no single correct number, since the right DPI depends on your monitor size, desk space, and the kind of work or gaming you do most. As a starting point:
                </p>
                <ul className="space-y-4 mb-6">
                  {[
                    { label: "Low DPI (400 to 800)", desc: "Best for precise aiming and detailed design work" },
                    { label: "Mid DPI (800 to 1600)", desc: "A balanced, all-purpose range for gaming and daily tasks" },
                    { label: "High DPI (1600 and up)", desc: "Suited to large or high-resolution monitors where the cursor needs to cover more ground" }
                  ].map((range, i) => (
                    <li key={i} className="flex gap-3 items-center bg-muted/40 p-4 rounded-xl border border-border/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      <span className="text-lg"><strong className="text-foreground">{range.label}:</strong> <span className="text-muted-foreground">{range.desc}</span></span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your best move is to start in the middle, run a quick mouse DPI test, and adjust from there. However, small tweaks make a noticeable difference, so give each setting a few minutes before deciding it isn't right.
                </p>
              </div>

              <div id="dpi-vs-sensitivity" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Understanding Mouse DPI vs In-Game Sensitivity</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  DPI and in-game sensitivity often get lumped together. However, they're not the same thing. DPI is a hardware-level setting controlled by your mouse or its driver software, while in-game sensitivity is a software multiplier that lives inside a specific game and only affects that game.
                </p>

                <div className="overflow-x-auto bg-card rounded-xl border border-border shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-muted/50 text-foreground">
                        <th className="p-4 font-bold border-b border-border"></th>
                        <th className="p-4 font-bold border-b border-border">Mouse DPI</th>
                        <th className="p-4 font-bold border-b border-border">In-Game Sensitivity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-lg">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">Set where</td>
                        <td className="p-4 text-muted-foreground">Mouse hardware or driver software</td>
                        <td className="p-4 text-muted-foreground">Inside each individual game</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">Affects</td>
                        <td className="p-4 text-muted-foreground">Every app and program on your PC</td>
                        <td className="p-4 text-muted-foreground">Only the game it's set in</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">Changed how</td>
                        <td className="p-4 text-muted-foreground">DPI button or mouse software</td>
                        <td className="p-4 text-muted-foreground">In-game settings menu</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground border-r border-border">Best used for</td>
                        <td className="p-4 text-muted-foreground">A consistent baseline across all uses</td>
                        <td className="p-4 text-muted-foreground">Fine-tuning aim per game</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding the difference matters most when you switch games or share settings with teammates. Two players can both use 800 DPI, yet feel completely different aim if their sensitivity sliders don't match, which is exactly why competitive players lean on eDPI to compare setups fairly.
                </p>
              </div>

              <div id="tool-features" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Feature Of Mouse DPI Test</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A good DPI tester should get out of your way and just give you an accurate number. That's the goal behind this mouse DPI analyzer: minimal setup, a clear result, and nothing standing between you and knowing your real DPI.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Here's what makes this mouse DPI checker worth bookmarking.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                      100% Free and Instant
                    </h3>
                    <p className="text-muted-foreground">There's no signup, no trial period, and no hidden fee. Open the tool, run the test, and get your DPI results immediately.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
                      No Downloads or Setup Required
                    </h3>
                    <p className="text-muted-foreground">This is a web-based DPI test, so there's no download, no installation, and no drivers required. Everything runs directly in your browser.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                      Works on All Devices and Browsers
                    </h3>
                    <p className="text-muted-foreground">The tool works the same way across setups, including: Devices: desktop computer, laptop, tablet. Operating systems: Windows, macOS, Linux, Chromebook. Browsers: Chrome, Firefox, Safari, Edge.</p>
                  </div>
                </div>
              </div>

              <div id="how-to-use" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">How To Use Online Mouse DPI Analyzer Tool?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Testing your DPI takes less than a minute once you know the steps. You'll measure a short physical distance, move your mouse across it, and let the tool handle the math.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Follow the three steps below for the most accurate DPI results.
                </p>
                <ol className="space-y-6">
                  {[
                    { title: "Set the Distance", desc: "Pick a physical distance you can measure easily, such as 10 centimeters or 4 inches, and mark a clear starting position on your mouse pad or desk." },
                    { title: "Start the Test", desc: "Move your mouse in a straight line across the marked distance, keeping your motion steady rather than jerky. The tool tracks the tracking distance your cursor covers on screen during that movement." },
                    { title: "Get DPI Results", desc: "Once you finish the movement, the tool runs the DPI calculation and displays your real-time DPI instantly. Repeat the test a couple of times and average the results for the most reliable number." }
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

              <div id="change-dpi-windows" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">How to Change Mouse DPI on Windows 10/11?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Windows gives you a few different ways to change mouse DPI, and which one works best depends on your mouse. Gaming mice usually offer the most direct control, while basic mice rely more on Windows' built-in pointer settings.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Try the options below in order, starting with your mouse itself before moving into software or system settings.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="5" y="2" width="14" height="20" rx="7"></rect><path d="M12 2v6"></path></svg>
                      Using the DPI Button on Your Mouse
                    </h3>
                    <p className="text-muted-foreground text-lg">Many mice, especially gaming models, include a dedicated DPI button near the scroll wheel. Pressing it cycles through preset DPI levels, often shown briefly through an on-screen indicator or a small LED light on the mouse itself.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                      Using Mouse Software (for Gaming Mice)
                    </h3>
                    <p className="text-muted-foreground text-lg">Brands like Logitech, SteelSeries, and Glorious offer their own gaming mouse software, letting you set custom DPI stages, assign them to buttons, and fine-tune sensitivity well beyond what Windows allows on its own.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                      Via Windows Pointer Settings
                    </h3>
                    <p className="text-muted-foreground text-lg">Head to Windows Settings, then Bluetooth & devices, then Mouse, and open additional mouse options. From there, the Pointer Options tab lets you adjust pointer speed and enable enhance pointer precision, which softens the impact of a high DPI setting during everyday use.</p>
                  </div>
                </div>
              </div>

              <div id="change-dpi-macos" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">How to Change Mouse DPI on MacOS?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  macOS handles DPI a bit differently than Windows does, since Apple's built-in settings focus more on tracking speed than a raw DPI number. Third-party mice, though, often bring their own DPI controls along with them.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Here's where to look, depending on the mouse you're using.
                </p>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                      System Preferences
                    </h3>
                    <p className="text-muted-foreground text-lg">Open System Preferences, then Mouse, and use the tracking speed slider to adjust how far your cursor moves for a given hand motion. It's not a literal DPI value, but it controls the same underlying cursor sensitivity.</p>
                  </div>
                  <div className="flex-1 p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                      Use Manufacturer Software
                    </h3>
                    <p className="text-muted-foreground text-lg">If you're using a third-party mouse, check whether the manufacturer offers dedicated macOS mouse settings software. Apps like Logitech Options often expose real DPI controls that Apple's native settings simply don't include.</p>
                  </div>
                </div>
              </div>

              <div id="why-check" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Should You Check Your Mouse DPI?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Manufacturers don't always deliver exactly what's printed on the box. Running your own check with a mouse DPI analyzer confirms whether your mouse performs at its advertised number or falls short of it, which matters more than most people realize.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Checking your DPI also helps you troubleshoot a cursor that suddenly feels too fast or too slow, calibrate settings after switching to a new mouse pad, and keep your setup consistent across different desks or workstations.
                </p>
              </div>
              
              <div id="about-tool" className="space-y-6">
                <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Who developed the DPI Analyzer Tool?</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    This tool comes from a small team of developers who wanted a faster, more honest way to check mouse performance. Rather than trusting a number printed on a box, they built something that measures real, physical mouse movement and turns it into an accurate DPI reading.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The goal was simple: strip away the downloads, the sign-ups, and the clutter, and leave behind a DPI analyzer that just works, right in the browser, for anyone who needs it.
                  </p>
                </div>
                
                <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-3">What is the use of this website?</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    This site exists to answer one specific question quickly: what DPI is your mouse actually running at right now? From there, it goes further, covering how to change that number on Windows or macOS and how to pick a DPI that fits your gaming, design, or everyday needs.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Think of it as a one-stop reference for anything DPI-related, whether you're buying a new mouse, troubleshooting a cursor that feels off, or fine-tuning a competitive gaming setup.
                  </p>
                </div>
              </div>

              <div id="conclusion" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Conclusion</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The sensitivity of your mouse affects most, if not all, of your interactions on the screen, be it taking a perfectly aimed shot or moving just one single pixel. Not knowing your DPI means not taking advantage of its full capabilities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A mouse DPI test only takes about 30 seconds, and the result will help you calibrate your equipment in accordance with your style of gaming, designing, or working. Just pick a correct in-game sensitivity or pointer speed, and you'll see the change almost immediately.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Check your DPI now and configure it accordingly to Windows or macOS guidelines above.
                </p>
              </div>

              <div id="faq" className="space-y-6 pt-8 border-t border-border">
                <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is a DPI test?",
                      a: "A DPI test measures how far your cursor moves on screen against how far you physically move your mouse. It then calculates an accurate DPI reading in seconds."
                    },
                    {
                      q: "How can I check my DPI?",
                      a: "Run an online mouse DPI analyzer and move your mouse across a measured distance. The tool reads your cursor's movement and returns your DPI value instantly."
                    },
                    {
                      q: "How can I convert 800 DPI to 1600 DPI?",
                      a: "Switch your mouse's DPI button to its 1600 stage if it has one. If not, double your in-game sensitivity while keeping DPI at 800 for a similar feel."
                    },
                    {
                      q: "What DPI is normal?",
                      a: "Most mice ship with a default DPI between 800 and 1600. That range suits general browsing, office work, and casual gaming for most people."
                    },
                    {
                      q: "What is a good DPI number?",
                      a: "800 DPI is a common, comfortable starting point for gaming and daily tasks alike. From there, small adjustments up or down usually find your ideal setting."
                    },
                    {
                      q: "How much DPI is high?",
                      a: "DPI above 3200 is generally considered high. It's mainly useful for large or high-resolution monitors rather than precise, competitive aiming."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="p-6 bg-card rounded-xl border border-border shadow-sm">
                      <h3 className="text-xl font-bold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-lg text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
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
                 <Link href="/mouse-scroll-wheel-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                   Run Scroll Wheel Test
                 </Link>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
