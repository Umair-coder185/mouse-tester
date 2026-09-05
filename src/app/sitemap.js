import { SITE_CONFIG, TOOL_ROUTES } from "../lib/site";

export default function sitemap() {
  const routes = [
    ...TOOL_ROUTES,
    { path: '/about' },
    { path: '/methodology' },
    { path: '/privacy' },
    { path: '/terms' },
  ].map((route) => ({
    url: `${SITE_CONFIG.url}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date('2024-05-01'), // Stable date for baseline
  }));

  return routes;
}
