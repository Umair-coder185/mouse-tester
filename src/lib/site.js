/**
 * Central Site Configuration
 * 
 * For a custom production domain, configure:
 * NEXT_PUBLIC_SITE_URL=https://yourdomain.com
 */

export const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return 'http://localhost:3000';
};

export const SITE_URL = getSiteUrl();

export const SITE_CONFIG = {
  name: 'MouseTester',
  description: 'Browser-based mouse diagnostics. Check buttons, scrolling, polling rate, double-click issues, DPI, and more.',
  url: SITE_URL,
};

export const TOOL_ROUTES = [
  { name: 'Complete Mouse Test', path: '/' },
  { name: 'Double Click Test', path: '/double-click-test' },
  { name: 'Polling Rate Test', path: '/polling-rate-test' },
  { name: 'Scroll Wheel Test', path: '/scroll-test' },
  { name: 'DPI Test', path: '/dpi-test' },
  { name: 'Debounce Test', path: '/debounce-test' },
  { name: 'CPS Test', path: '/cps-test' },
  { name: 'Drag & Hold Test', path: '/drag-test' },
  { name: 'Accuracy Test', path: '/accuracy-test' },
];
