/**
 * Central Site Configuration
 * 
 * For a custom production domain, configure:
 * NEXT_PUBLIC_SITE_URL=https://yourdomain.com
 */

export const getSiteUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'https://www.clickmousetest.com';
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
  { name: 'Scroll Wheel Test', path: '/mouse-scroll-wheel-test' },
  { name: 'DPI Test', path: '/mouse-dpi-analyzer' },
  { name: 'Debounce Test', path: '/debounce-test-guide' },
  { name: 'CPS Test', path: '/cps-test' },
  { name: 'Drag & Hold Test', path: '/drag-test' },
  { name: 'Accuracy Test', path: '/mouse-accuracy-test' },
  { name: 'All Tests', path: '/all-tests' },
];
