import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { PollingRateTester } from "../../components/tools/PollingRateTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Polling Rate Test online to instantly check your mouse Hz",
  description: "Polling Rate Test online to instantly check your mouse Hz, response speed, stability, jitter, and peak polling rate up to 8000Hz.",
  alternates: {
    canonical: '/polling-rate-test',
  },
};

export default function PollingRateTestPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I test my mouse or controller polling rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Open the tester, choose your device, and move or press it steadily for 10 to 15 seconds. Read the current, average, peak, and minimum Hz once it settles."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good polling rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1000 Hz is the sweet spot for competitive gaming, 500 Hz handles most other games comfortably, and 125 Hz is the long-standing baseline for everyday use."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my device showing only 125 Hz or 60 Hz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A mouse stuck at 125 Hz usually means an old USB port or an unset driver rate. A controller capped near 60 Hz in a browser is almost always the Gamepad API's refresh-rate limit, not a fault."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: metadata.title,
          description: metadata.description,
          url: `${SITE_CONFIG.url}/polling-rate-test`
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
              { name: 'Polling Rate Test', path: '/polling-rate-test' }
            ]} />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-6 mb-6">
              How to Test Polling Rate (Mouse, Keyboard & Controller)
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your mouse feels a little off during ranked matches, and you can't tell if it's you or your gear. A skipped flick shot or a stuttery aim swing often traces back to one hidden number: your device's real polling rate, not the one printed on the box. Run a polling rate test below, move your mouse or press your controller stick for about fifteen seconds, and you'll see the true Hz your setup delivers right now.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Tool Section */}
      <section className="py-12 bg-background relative" id="polling-rate-test-tool">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg border border-border p-4 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
              
              <PollingRateTester />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Browser-based polling-rate tests measure the input events available to the browser. Results may vary between browsers and systems.
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
                  <a href="#quick-answer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Quick Answer</a>
                  <a href="#what-is-polling-rate" className="block text-sm text-muted-foreground hover:text-primary transition-colors">What Is Polling Rate?</a>
                  <a href="#why-polling-rate-matters" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Why Polling Rate Matters</a>
                  <a href="#polling-rate-test-tool" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Free Polling Rate Tester Tool</a>
                  <a href="#how-to-use" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Use This Tool</a>
                  <a href="#test-mouse" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Test Mouse Polling Rate</a>
                  <a href="#test-controller" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Test Controller</a>
                  <a href="#test-keyboard" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Test Keyboard</a>
                  <a href="#common-problems" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Common Problems and Fixes</a>
                  <a href="#benchmarks" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Benchmarks & Recommendations</a>
                  <a href="#how-to-change" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Change Polling Rate</a>
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
                  Open the tester above, pick your device (mouse, keyboard, or controller), then move or press it steadily for 10 to 15 seconds. A stable reading close to the device's rated speed (125, 500, 1000, 2000, 4000, or 8000 Hz) with low jitter means everything is working the way it should.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  This guide gets updated whenever new devices or browser behaviors change how testing works, and that kind of freshness is itself a ranking signal search engines reward, along with clear structure and answers that match what people actually search for.
                </p>
              </div>

              <div id="what-is-polling-rate" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">What Is Polling Rate?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Polling rate is how often your mouse, keyboard, or controller tells your computer where it is and what's being pressed. It's measured in Hertz (Hz), so a mouse polling rate test reading of 1000 Hz means your mouse sends an update every 1 millisecond. Drop to 125 Hz and that gap widens to 8 milliseconds between each report.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You'll also hear this called report rate, polling frequency, or USB polling rate, and they all mean the same thing. The number that actually matters, though, isn't the rate printed on the packaging. It's the effective polling rate, the number your device holds once it's plugged into your specific PC, running your specific software, over your specific USB port.
                </p>
              </div>

              <div id="why-polling-rate-matters" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Why Polling Rate Matters for Gaming and Input Lag</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Every millisecond between your hand moving and the cursor reacting is input latency, and polling rate is one of the biggest levers you have over it. Think of it like a flip book: more pages per second means smoother, more current motion. Fewer pages, and the picture lags a beat behind what you're actually doing.
                </p>
                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    For fast-paced shooters, that gap shows up as jerky micro-adjustments right when you need precision most. A competitive gaming mouse paired with a high refresh rate monitor only delivers its full benefit when the polling rate keeps up, otherwise the monitor is drawing frames faster than the mouse is reporting them. Slower genres feel this far less, which is why the right rate really depends on what you play.
                  </p>
                </div>
              </div>

              <div id="tool-details" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Free Polling Rate Tester Tool</h2>
                
                <h3 className="text-2xl font-bold text-foreground mt-4">Tool Overview</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This tester runs entirely in your browser, no install and no account needed. It listens to your device's raw pointer events or, for gamepads, the browser's Gamepad API, and turns that stream into a live number you can actually read.
                </p>
                
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Live Hz counter that updates in real time as you move or press.",
                    "Average, peak, and minimum Hz across your whole test session.",
                    "Jitter and stability score so you can see polling rate consistency, not just a single number.",
                    "A polling rate chart and waveform view to spot polling rate drops or spikes visually.",
                    "Separate device modes for mouse, keyboard, and controller."
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-3 items-start p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200 rounded-xl border border-indigo-200 dark:border-indigo-900/50 shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Supported Devices</h3>
                  <ul className="space-y-2 text-lg opacity-90 list-disc pl-5">
                    <li>Mice from 125 Hz up to 8000 Hz, wired, 2.4GHz wireless, and Bluetooth</li>
                    <li>Keyboards, including boards with adjustable USB polling</li>
                    <li>Controllers, including Xbox, PlayStation, Nintendo Switch, and generic HID gamepads</li>
                  </ul>
                </div>
              </div>

              <div id="how-to-use" className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">How to Use This Tool</h2>
                <ol className="space-y-4">
                  {[
                    "Pick a device mode: mouse, keyboard, or controller.",
                    "Move the mouse, press a key, or push a stick for 10 to 15 seconds without stopping.",
                    "Watch the current Hz reading settle, then check the average, peak, and minimum values.",
                    "Look at the jitter score. A low, steady number means solid polling stability; a jumpy one points to a problem worth chasing down."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0 shadow-sm">{i + 1}</span>
                      <span className="text-lg text-muted-foreground pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div id="test-mouse" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">How to Test Mouse Polling Rate</h2>
                
                <h3 className="text-xl font-semibold text-foreground mt-4">Step-by-Step Mouse Test</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Plug directly into a motherboard USB port on the back of your PC rather than a front-panel hub, which can add USB hub latency.",
                    "Close overlays from Razer Synapse, Logitech G Hub, SteelSeries GG, or Corsair iCUE if they're fighting the browser for the same input stream.",
                    "Confirm your target Hz is actually set in that same software, since a driver mismatch is a common cause of low readings.",
                    "Open the tester above and move the mouse in smooth circles or a steady figure-eight. Avoid jerky stops, since those can briefly distort the reading.",
                    "Keep moving for at least 15 to 20 seconds. This mouse testing duration gives the tool enough samples for an accurate polling rate measurement."
                  ].map((fix, i) => (
                    <li key={i} className="flex gap-3 items-start bg-muted/40 p-4 rounded-xl border border-border/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><rect x="5" y="2" width="14" height="20" rx="7"></rect><path d="M12 2v6"></path></svg>
                      <span className="text-lg text-foreground/90">{fix}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-foreground">How to Read Mouse Test Results</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The current value is whatever your mouse is reporting right this second, while average smooths that out across your whole test. Peak shows the fastest burst it hit, and minimum shows its worst dip, sometimes called the low 5 percent, which matters more for competitive play than the peak does.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A healthy result sits close to your rated speed with only small gaps between average and minimum. If your mouse is set to 1000 Hz and the average lands near 950 to 1000 Hz with a tight, calm waveform, that's a normal, stable 1000 Hz result and nothing to worry about.
                </p>
              </div>

              <div id="test-controller" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">How to Test Controller Polling Rate</h2>
                
                <h3 className="text-xl font-semibold text-foreground mt-4">Step-by-Step Controller Test</h3>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-lg mb-6">
                  <li>Decide which connection you're testing: wired USB, a 2.4GHz dongle, or Bluetooth. Test them separately rather than assuming they behave the same.</li>
                  <li>Move both sticks in full circles and hold down the triggers partway, since sticks and triggers can report at different rates than face buttons.</li>
                  <li>Hold the test for 15 to 20 seconds so the tool captures a real average rather than a lucky snapshot.</li>
                  <li>Compare your wired and wireless results side by side. It's common to run a polling rate test controller check twice, once per connection type, before deciding which one to use for ranked play.</li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground">Controller Polling Rate Reference Table</h3>
                <div className="overflow-x-auto bg-card rounded-xl border border-border shadow-sm mb-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-muted/50 text-foreground">
                        <th className="p-4 font-bold border-b border-border">Controller</th>
                        <th className="p-4 font-bold border-b border-border">Wired (USB)</th>
                        <th className="p-4 font-bold border-b border-border">Wireless</th>
                        <th className="p-4 font-bold border-b border-border">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Xbox Series X|S / One</td>
                        <td className="p-4 text-muted-foreground">~125 Hz (8 ms)</td>
                        <td className="p-4 text-muted-foreground">~125 Hz</td>
                        <td className="p-4 text-sm text-muted-foreground">Consistent across console generations based on latency tests.</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">PS5 DualSense</td>
                        <td className="p-4 text-muted-foreground">~250 Hz (4 ms)</td>
                        <td className="p-4 text-muted-foreground">~250 Hz</td>
                        <td className="p-4 text-sm text-muted-foreground">Can be pushed toward 1000 Hz with third-party tools (unsupported).</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">PS4 DualShock 4</td>
                        <td className="p-4 text-muted-foreground">~250 Hz</td>
                        <td className="p-4 text-muted-foreground">~250 Hz</td>
                        <td className="p-4 text-sm text-muted-foreground">Similar profile to DualSense.</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Nintendo Switch Pro</td>
                        <td className="p-4 text-muted-foreground">No official high-poll</td>
                        <td className="p-4 text-muted-foreground">~66 Hz (15 ms)</td>
                        <td className="p-4 text-sm text-muted-foreground">Lowest of major consoles; fine for Switch, noticeable on PC.</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Third-party PC gamepads</td>
                        <td className="p-4 text-muted-foreground">500 - 1000 Hz claimed</td>
                        <td className="p-4 text-muted-foreground">Varies by dongle</td>
                        <td className="p-4 text-sm text-muted-foreground">Real sustained rate depends heavily on emulation layers.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground italic mb-6">
                  These are typical figures, not a guarantee for every unit. Firmware version, OS, and background software can all shift your own real-world polling rate slightly.
                </p>

                <div className="p-6 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 rounded-xl border border-amber-200 dark:border-amber-900/50 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Browser Limits for Controller Testing
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed mb-3">
                    Browsers read gamepads through the Gamepad API, which is tied to requestAnimationFrame, the same clock your screen uses to draw frames. That means a browser-based controller polling rate test effectively caps out near your monitor's refresh rate (commonly 60, 120, 144, or 240 Hz), even when the controller is physically reporting faster over USB.
                  </p>
                  <p className="text-lg opacity-90 leading-relaxed">
                    This is exactly why a controller can show "only" 60 to 240 Hz in a web tool while a wired mouse happily shows 1000 Hz or more. For the true hardware number on a controller, dedicated desktop polling rate software that reads raw HID reports will get you closer than any browser test can.
                  </p>
                </div>
              </div>

              <div id="test-keyboard" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">How to Test Keyboard Polling Rate</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most keyboards still default to 125 Hz over USB, the same as an entry-level mouse, though many gaming boards now offer 500, 1000, or even higher keyboard polling rate settings in their companion software. To test one, switch the tester to keyboard mode and hold a key down or tap it rapidly and steadily for 10 to 15 seconds.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Expect the reading to hover near your keyboard's rated Hz with minimal jitter. Keyboards rarely need the extreme rates mice chase, since key travel time is usually the bigger factor in how fast a press actually registers.
                </p>
              </div>

              <div id="common-problems" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Common Problems and Fixes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { 
                      title: "Reading stuck at 125 Hz", 
                      desc: "Usually means you're on an older USB 1.1 port, a passive hub, or you never actually raised the rate in your mouse's driver software. Plug straight into a rear USB port and double-check settings."
                    },
                    { 
                      title: "Results lower than advertised", 
                      desc: "Background tabs can be throttled by the browser, Windows USB selective suspend can slow things down, and heavy background apps eat CPU. Keep the tab focused and close heavy overlays."
                    },
                    { 
                      title: "High jitter or unstable Hz", 
                      desc: "Wireless interference from other 2.4GHz devices, a cramped Bluetooth connection, or a busy CPU. Move your dongle onto a short USB extension and retest wired to confirm baseline."
                    },
                    { 
                      title: "Wireless vs wired differences", 
                      desc: "A small gap between wired and wireless is normal. What's worth worrying about is a rate that repeatedly crashes toward zero, which usually points to a failing dongle or bad placement."
                    }
                  ].map((issue, i) => (
                    <div key={i} className="p-5 bg-card rounded-xl border border-border shadow-sm">
                      <h4 className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        {issue.title}
                      </h4>
                      <p className="text-muted-foreground">{issue.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="benchmarks" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Polling Rate Benchmarks & Recommendations</h2>
                
                <h3 className="text-xl font-bold text-foreground">What Polling Rate Is Best for Gaming?</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3 items-start p-3 bg-muted/30 rounded-lg">
                    <strong className="text-foreground shrink-0">Competitive FPS:</strong>
                    <span className="text-muted-foreground">Aim for 1000 Hz or higher (1 ms polling down to 0.25 ms polling) for the tightest tracking.</span>
                  </li>
                  <li className="flex gap-3 items-start p-3 bg-muted/30 rounded-lg">
                    <strong className="text-foreground shrink-0">MOBA & Strategy:</strong>
                    <span className="text-muted-foreground">500 to 1000 Hz is plenty, since these titles lean less on flick-heavy aiming.</span>
                  </li>
                  <li className="flex gap-3 items-start p-3 bg-muted/30 rounded-lg">
                    <strong className="text-foreground shrink-0">Casual & Productivity:</strong>
                    <span className="text-muted-foreground">125 to 500 Hz feels completely smooth and saves a small amount of CPU load and battery life.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-foreground">Typical Rates by Device Class</h3>
                <div className="overflow-x-auto bg-card rounded-xl border border-border shadow-sm mb-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-muted/50 text-foreground">
                        <th className="p-4 font-bold border-b border-border">Device Class</th>
                        <th className="p-4 font-bold border-b border-border">Typical Rate</th>
                        <th className="p-4 font-bold border-b border-border">Polling Interval</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Budget or office mouse/keyboard</td>
                        <td className="p-4 text-muted-foreground">125 Hz</td>
                        <td className="p-4 text-muted-foreground">8 ms</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Mid-range gaming mouse</td>
                        <td className="p-4 text-muted-foreground">500 to 1000 Hz</td>
                        <td className="p-4 text-muted-foreground">2 ms to 1 ms</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Enthusiast or competitive mouse</td>
                        <td className="p-4 text-muted-foreground">2000 to 4000 Hz</td>
                        <td className="p-4 text-muted-foreground">0.5 ms to 0.25 ms</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground">Flagship gaming mouse</td>
                        <td className="p-4 text-muted-foreground">8000 Hz</td>
                        <td className="p-4 text-muted-foreground">0.125 ms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-3">Wired vs Bluetooth vs 2.4GHz Wireless</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Wired connections stay the most consistent and give you the lowest USB latency, making a stable 1000 Hz result easy to hit. Modern 2.4GHz wireless dongles come remarkably close to wired performance these days, as long as the dongle sits somewhere with a clear line of sight to the mouse. Bluetooth is the most convenient of the three but has historically capped out lower and shown more USB stability issues under load, which makes it a better fit for office work than ranked matches.
                  </p>
                </div>
              </div>

              <div id="how-to-change" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">How to Change or Increase Your Polling Rate</h2>
                <div className="space-y-4">
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h4 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="5" y="2" width="14" height="20" rx="7"></rect><path d="M12 2v6"></path></svg>
                      Mouse
                    </h4>
                    <p className="text-muted-foreground text-lg">Most mice let you set the rate in their own companion app. Open Logitech G Hub, Razer Synapse, Corsair iCUE, or SteelSeries GG, find the performance or polling rate menu, pick your target speed, and apply it. Once it's saved, run the tester again to confirm the new mouse report rate actually took effect.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h4 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M9 12h.01M15 12h.01M18 12h.01"></path></svg>
                      Controller
                    </h4>
                    <p className="text-muted-foreground text-lg">Wired controllers generally lock to whatever their manufacturer set, though some players use third-party utilities to override that default. Premium high-Hz controllers from third-party brands usually expose their own rate setting right inside a companion app.</p>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border shadow-sm">
                    <h4 className="font-bold text-foreground text-xl mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"></path></svg>
                      Keyboard
                    </h4>
                    <p className="text-muted-foreground text-lg">If your board supports adjustable polling, you'll typically find the setting in the same mouse driver settings style software your brand already ships for its mice. Choose your target Hz there and retest to confirm it stuck.</p>
                  </div>
                </div>
              </div>

              <div id="conclusion" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Conclusion</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Testing your polling rate takes less time than tying your shoes, and it tells you something a spec sheet never can: what your device is actually doing on your specific PC, right now. Whether you're chasing every fraction of a millisecond in ranked play or just confirming your new mouse works as advertised, the numbers on this page turn a vague feeling into something you can actually measure.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Run the polling rate tester any time you install a new driver, switch USB ports, or add a wireless dongle to your desk, since any of those can quietly shift your results. A five-second check now can save you from blaming your aim for a problem that was sitting in a USB port the whole time.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bookmark this page and come back after firmware updates or a fresh Windows install. Polling rate isn't something you set once and forget, and a quick retest is one of the easiest habits a competitive player can build.
                </p>
              </div>

              <div id="faq" className="space-y-6 pt-8 border-t border-border">
                <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions (FAQ)</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "How do I test my mouse or controller polling rate?",
                      a: "Open the tester, choose your device, and move or press it steadily for 10 to 15 seconds. Read the current, average, peak, and minimum Hz once it settles."
                    },
                    {
                      q: "What is a good polling rate?",
                      a: "1000 Hz is the sweet spot for competitive gaming, 500 Hz handles most other games comfortably, and 125 Hz is the long-standing baseline for everyday use."
                    },
                    {
                      q: "Why is my device showing only 125 Hz or 60 Hz?",
                      a: "A mouse stuck at 125 Hz usually means an old USB port or an unset driver rate. A controller capped near 60 Hz in a browser is almost always the Gamepad API's refresh-rate limit, not a fault."
                    },
                    {
                      q: "Can browser tests measure 4000 to 8000 Hz accurately?",
                      a: "Modern browsers can register very fast pointer events, but results depend on your CPU load and OS scheduling. For flagship rates, cross-check with dedicated desktop polling rate software."
                    },
                    {
                      q: "Does a higher polling rate improve aim or online play?",
                      a: "It shrinks the delay between your hand and the cursor, which helps. Past 1000 Hz the gains get smaller fast, and your reflexes and network ping start to matter more than the extra Hz."
                    },
                    {
                      q: "Wireless vs wired, which should I use for testing?",
                      a: "Test wired first to establish a clean baseline, then test your everyday wireless setup so you know exactly how much gap, if any, you're actually dealing with."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="p-6 bg-card rounded-xl border border-border shadow-sm">
                      <h3 className="text-xl font-bold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-lg text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation Links */}
              <div className="pt-12 border-t border-border flex flex-wrap gap-4 mt-12">
                 <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                   Back to Complete Mouse Test
                 </Link>
                 <Link href="/double-click-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                   Run Double Click Test
                 </Link>
                 <Link href="/mouse-dpi-analyzer" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                   Run DPI Test
                 </Link>
                 <Link href="/mouse-accuracy-test" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                   Run Accuracy Test
                 </Link>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
