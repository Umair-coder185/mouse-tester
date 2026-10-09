import Link from "next/link";
import Image from "next/image";
export function Header() {
  const navLinks = [
    { name: "Mouse Test", href: "/" },
    { name: "Double Click", href: "/double-click-test" },
    { name: "Polling Rate", href: "/polling-rate-test" },
    { name: "DPI", href: "/mouse-dpi-analyzer" },
    { name: "All Tests", href: "/all-tests" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 flex justify-center pointer-events-none">
      <div className="w-full max-w-6xl rounded-full border border-white/10 bg-slate-950/85 backdrop-blur-xl shadow-2xl px-6 pointer-events-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden border border-white/10 shadow-sm transition-transform group-hover:scale-105">
                <Image src="/icon.png" alt="ClickMouseTest Logo" width={40} height={40} className="object-cover" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Click<span className="text-cyan-400">MouseTest</span>
              </span>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Test Your Mouse
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
