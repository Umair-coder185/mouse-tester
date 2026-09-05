import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | MouseTester',
    };
  }

  return {
    title: `${post.meta.title} | MouseTester Blog`,
    description: post.meta.description,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-8">
        <Link 
          href="/blog"
          className="text-primary hover:text-primary-hover font-medium flex items-center mb-8 inline-flex"
        >
          &larr; Back to all posts
        </Link>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <time dateTime={post.meta.date}>
            {new Date(post.meta.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>&bull;</span>
          <span>{post.meta.author || 'MouseTester Team'}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
          {post.meta.title}
        </h1>
        
        <p className="text-xl text-muted-foreground border-l-4 border-primary pl-4">
          {post.meta.description}
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary-hover prose-strong:text-foreground prose-img:rounded-xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
