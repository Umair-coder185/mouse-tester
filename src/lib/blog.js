import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'blog');

/**
 * Gets the metadata and content of a single post by slug.
 */
export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data,
    content,
  };
}

/**
 * Gets all posts, sorted by date in descending order.
 */
export function getAllPosts() {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const slugs = fs.readdirSync(contentDirectory);
  
  const posts = slugs
    .filter((slug) => slug.endsWith('.md'))
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post !== null)
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));

  return posts;
}
