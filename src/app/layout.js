import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import "./globals.css";

import { SITE_CONFIG } from "../lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} – Test Buttons, Scroll, DPI & Polling Rate`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <a 
          href="#main-content" 
          className="absolute left-0 top-0 -translate-y-full bg-primary text-primary-foreground px-4 py-2 z-50 transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 flex flex-col focus:outline-none" tabIndex="-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
