// app/sitemap.js
import { SITE_CONFIG, TOOL_ROUTES } from "../lib/site";
import { getAllPosts } from "../lib/blog";

// Only put a date here if you really changed that page on that date.
// Pages without an entry get NO <lastmod>, which is better than a fake date:
// Google ignores <lastmod> if it learns it can't trust it.
// Example: { "/cps-test": "2026-10-01" }
const STATIC_LAST_MODIFIED = {};

const BASE_URL = String(SITE_CONFIG.url).replace(/\/+$/, "");

// Returns a valid Date or undefined (never "Invalid Date", which would break the build).
function toDate(value) {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

// Builds a sitemap entry and leaves out lastModified when there is no real date.
function entry(path, date) {
  const url = path === "/" ? BASE_URL : `${BASE_URL}${path}`;
  return date ? { url, lastModified: date } : { url };
}

export default function sitemap() {
  // 1. Blog posts (skip drafts, keep only valid dates)
  const posts = getAllPosts().filter((post) => post?.slug && post?.meta?.draft !== true);

  const blogEntries = posts.map((post) =>
    entry(`/blog/${post.slug}`, toDate(post.meta?.date))
  );

  // 2. /blog index page: its lastmod = date of the newest post
  const postDates = blogEntries.map((e) => e.lastModified).filter(Boolean);
  const newestPost = postDates.length
    ? new Date(Math.max(...postDates.map((d) => d.getTime())))
    : undefined;

  // 3. Tool pages and static pages
  const staticPaths = [
    ...TOOL_ROUTES.map((route) => route.path),
    "/about",
    "/methodology",
    "/privacy",
    "/terms",
  ];

  const staticEntries = staticPaths.map((path) =>
    entry(path, toDate(STATIC_LAST_MODIFIED[path]))
  );

  const blogIndexEntry = entry("/blog", newestPost);

  // 4. Combine and remove duplicate URLs
  const all = [...staticEntries, blogIndexEntry, ...blogEntries];
  const seen = new Set();
  return all.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}