import { SITE_CONFIG } from "../lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
