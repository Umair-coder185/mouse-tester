import { SITE_CONFIG } from "../lib/site";

/**
 * @type {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'anthropic-ai'],
        disallow: ['/'],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}