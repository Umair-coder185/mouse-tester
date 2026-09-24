import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | MouseTester',
  description: 'Read our latest articles on mouse hardware, polling rates, switches, and performance optimization.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen">
      {/* Premium Ambient Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 dark:opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen opacity-40 dark:opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-2/3 w-[400px] h-[400px] bg-cyan-400/20 dark:bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50 dark:opacity-30 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl relative z-10">
        <div className="mb-16 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
            MouseTester <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
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
            <div className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
              {/* Cover Image */}
              <div className="w-full h-56 bg-muted relative overflow-hidden">
                {post.meta.coverImage ? (
                  <Image 
                    src={post.meta.coverImage} 
                    alt={post.meta.title} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-muted-foreground">
                    <svg className="w-12 h-12 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col bg-background">
                <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.meta.title}
                </h2>
                
                {/* Meta Row: Author, Date, Read Time */}
                <div className="flex flex-wrap items-center gap-4 text-[15px] text-muted-foreground mb-5">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <span>{post.meta.author || 'Umair Tufail'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span>
                      {new Date(post.meta.date).toLocaleDateString('en-CA')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{post.meta.readTime || '10 min read'}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {(post.meta.tags || ['mouse dpi', 'gaming mouse', 'hardware']).map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-medium rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-2">
                  <span className="inline-flex items-center gap-2 bg-[#1281c9] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#0e6ba8] transition-colors">
                    Read More 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
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
    </div>
  );
}
