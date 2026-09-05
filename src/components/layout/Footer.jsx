import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-[#020617] py-16 mt-auto border-t border-slate-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-sm shadow-blue-500/20 transition-transform group-hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="5" y="2" width="14" height="20" rx="7" />
                  <path d="M12 2v6" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Mouse<span className="text-cyan-500">Tester</span>
              </span>
            </Link>
            <p className="text-[15px] leading-relaxed text-slate-400 mb-8 max-w-sm">
              Free browser-based tools for mouse diagnostics, hardware testing, and input analysis. Fast, practical, and built to help you troubleshoot your peripherals efficiently.
            </p>
            
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-span-3 lg:col-start-6">
            <h3 className="text-[13px] font-bold tracking-[0.15em] text-white uppercase mb-6">Popular Tests</h3>
            <ul className="space-y-4 text-[15px] text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Complete Mouse Test</Link></li>
              <li><Link href="/double-click-test" className="hover:text-white transition-colors">Double Click Test</Link></li>
              <li><Link href="/polling-rate-test" className="hover:text-white transition-colors">Polling Rate Test</Link></li>
              <li><Link href="/mouse-scroll-wheel-test" className="hover:text-white transition-colors">Scroll Wheel Test</Link></li>
              <li><Link href="/mouse-dpi-analyzer" className="hover:text-white transition-colors">DPI Test</Link></li>
              <li className="pt-2"><Link href="/all-tests" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors flex items-center">View all tests <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3">
            <div className="mb-10">
              <h3 className="text-[13px] font-bold tracking-[0.15em] text-white uppercase mb-6">Company</h3>
              <ul className="space-y-4 text-[15px] text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/methodology" className="hover:text-white transition-colors">How Our Tests Work</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[13px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-4">Support</h3>
              <p className="text-[15px] text-slate-400 hover:text-white transition-colors cursor-pointer">contact@mousetester.com</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MouseTester. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </div>
        
        <div className="mt-6 text-[13px] text-slate-600 max-w-4xl">
          <p>MouseTester is an independent online diagnostic platform. All processing happens locally in your browser. No input data is collected, stored, or transmitted to any server.</p>
        </div>
      </Container>
    </footer>
  );
}
