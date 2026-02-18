import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug, getPostsByCategory } from "@/lib/blog";
import { getCategoryName, SITE_URL } from "@/lib/constants";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Article header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full">
            {getCategoryName(post.category)}
          </span>
          <span className="text-sm text-text-light">{post.readingTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="text-lg text-text-secondary italic">{post.subtitle}</p>
        )}
        <div className="flex items-center gap-4 mt-4 text-sm text-text-light">
          <span>By {post.author}</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      {/* Article body */}
      <div className="prose prose-lg max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-primary hover:prose-a:text-primary-hover prose-strong:text-text-primary prose-blockquote:border-primary prose-blockquote:text-text-secondary">
        <MDXRemote source={post.content} />
      </div>

      {/* Sponsor slot placeholder */}
      <aside className="mt-12 p-6 bg-background-light rounded-xl border border-border-light text-center">
        <p className="text-sm text-text-light">Interested in supporting Emajon? <a href="mailto:hello@emajon.com" className="text-primary hover:text-primary-hover">Get in touch</a></p>
      </aside>

      {/* Newsletter CTA */}
      <div className="mt-12">
        <NewsletterSignup />
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
