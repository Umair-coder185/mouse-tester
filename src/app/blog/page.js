import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | MouseTester',
  description: 'Read our latest articles on mouse hardware, polling rates, switches, and performance optimization.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
          MouseTester <span className="text-primary">Blog</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Guides, hardware deep-dives, and performance tips.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-primary/5">
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-sm text-primary mb-3 font-medium">
                  {new Date(post.meta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.meta.title}
                </h2>
                <p className="text-muted-foreground flex-1">
                  {post.meta.description}
                </p>
                <div className="mt-6 text-sm text-muted-foreground font-medium flex items-center">
                  By {post.meta.author || 'MouseTester Team'}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-xl">No posts available yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
