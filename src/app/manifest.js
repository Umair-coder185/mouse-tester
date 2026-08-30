import { SITE_CONFIG } from "../lib/site";

export default function manifest() {
  return {
    name: SITE_CONFIG.name,
    short_name: 'MouseTester',
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
