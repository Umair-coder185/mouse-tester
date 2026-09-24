import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';
import { BlogToc } from '@/components/blog/BlogToc';
import { JsonLd } from '@/components/ui/JsonLd';

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

// Helper to generate id for headings
function generateId(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Extract headings from markdown
  const headings = [];
  const lines = post.content.split(/\r?\n/);
  let isCodeBlock = false;

  lines.forEach((line) => {
    if (line.startsWith('```')) {
      isCodeBlock = !isCodeBlock;
      return;
    }
    if (isCodeBlock) return;

    const match = line.match(/^(#{2,3})\s+(.*)$/);
    if (match) {
      headings.push({
        level: match[1].length,
        text: match[2],
        id: generateId(match[2]),
      });
    }
  });

  // Custom components for ReactMarkdown to add IDs to headings and styling
  const customComponents = {
    h2: ({ node, children, ...props }) => {
      const text = String(children);
      const id = generateId(text);
      return <h2 id={id} className="text-3xl font-bold text-foreground mt-12 mb-6" {...props}>{children}</h2>;
    },
    h3: ({ node, children, ...props }) => {
      const text = String(children);
      const id = generateId(text);
      return <h3 id={id} className="text-2xl font-bold text-foreground mt-8 mb-4" {...props}>{children}</h3>;
    },
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto bg-card rounded-xl border border-border shadow-sm mt-8 mb-8">
        <table className="w-full text-left border-collapse" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => <thead className="bg-muted/50 text-foreground" {...props} />,
    th: ({ node, ...props }) => <th className="p-4 font-bold border-b border-border" {...props} />,
    tbody: ({ node, ...props }) => <tbody className="divide-y divide-border text-lg" {...props} />,
    tr: ({ node, ...props }) => <tr className="hover:bg-muted/30 transition-colors" {...props} />,
    td: ({ node, ...props }) => <td className="p-4 text-muted-foreground border-r border-border last:border-r-0" {...props} />,
    blockquote: ({ node, ...props }) => (
      <div className="p-6 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-900 dark:text-cyan-200 rounded-xl border border-cyan-200 dark:border-cyan-900/50 shadow-sm my-6">
        <blockquote className="opacity-90 leading-relaxed font-medium m-0" {...props} />
      </div>
    ),
    img: ({ node, ...props }) => (
      <Image 
        src={props.src} 
        alt={props.alt || 'Blog image'} 
        width={1200} 
        height={630} 
        className="rounded-xl w-full h-auto object-cover my-8 shadow-md"
        sizes="(max-width: 768px) 100vw, 800px"
      />
    ),
  };

  let faqSchemaObj = null;
  if (post.meta.faqSchema) {
    try {
      faqSchemaObj = JSON.parse(post.meta.faqSchema);
    } catch (e) {
      console.error("Failed to parse faqSchema from frontmatter", e);
    }
  }

  return (
    <>
      {faqSchemaObj && <JsonLd type="FAQPage" data={faqSchemaObj} />}
      
      {/* Header Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background border-b border-border py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link 
            href="/blog"
            className="text-primary hover:text-primary-hover font-medium flex items-center mb-8 inline-flex transition-colors"
          >
            &larr; Back to all posts
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground mb-6">
            <time dateTime={post.meta.date} className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              {new Date(post.meta.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              {post.meta.author || 'MouseTester Team'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight max-w-4xl">
            {post.meta.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            {post.meta.description}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar TOC */}
          <div className="lg:col-span-4 hidden lg:block">
            <BlogToc headings={headings} />
          </div>
          
          {/* Article Body */}
          <article className="lg:col-span-8">
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary-hover prose-strong:text-foreground prose-img:rounded-xl marker:text-primary">
              <ReactMarkdown components={customComponents}>
                {post.content}
              </ReactMarkdown>
            </div>
            
            {/* Footer Links */}
            <div className="pt-12 border-t border-border flex flex-wrap gap-4 mt-12">
              <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                Back to Complete Mouse Test
              </Link>
              <Link href="/mouse-dpi-analyzer" className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                Run DPI Analyzer
              </Link>
            </div>
          </article>
          
        </div>
      </div>
    </>
  );
}
