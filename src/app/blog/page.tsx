import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { CONTENT_PILLARS } from "@/lib/constants";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import BlogFilter from "./BlogFilter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about ADHD, relationships, loneliness, and building meaningful connections.",
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const allPosts = getAllPosts();
  const filteredPosts = params.category
    ? allPosts.filter((post) => post.category === params.category)
    : allPosts;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Blog</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Honest writing about ADHD, loneliness, friendship, and building tools
          that actually help.
        </p>
      </div>

      <BlogFilter
        categories={CONTENT_PILLARS}
        activeCategory={params.category}
      />

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-secondary">No posts found in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      <div className="mt-12">
        <NewsletterSignup />
      </div>
    </div>
  );
}
