import { SITE_CONFIG, TOOL_ROUTES } from "../lib/site";
import { getAllPosts } from "../lib/blog";

export default function sitemap() {
  const posts = getAllPosts();
  
  const blogRoutes = posts.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date || '2024-05-01'),
  }));

  const routes = [
    ...TOOL_ROUTES,
    { path: '/about' },
    { path: '/methodology' },
    { path: '/privacy' },
    { path: '/terms' },
    { path: '/blog' },
  ].map((route) => ({
    url: `${SITE_CONFIG.url}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date('2024-05-01'), // Stable date for baseline
  }));

  return [...routes, ...blogRoutes];
}
