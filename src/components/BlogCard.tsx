import Link from "next/link";
import { getCategoryName } from "@/lib/constants";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl border border-border-light shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full">
            {getCategoryName(post.category)}
          </span>
          <span className="text-xs text-text-light">{post.readingTime}</span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold text-text-primary mb-2 hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>

        {post.subtitle && (
          <p className="text-sm text-text-secondary italic mb-3">{post.subtitle}</p>
        )}

        <p className="text-text-secondary text-sm mb-4 line-clamp-3">{post.description}</p>

        <div className="flex items-center justify-between text-xs text-text-light">
          <span>{post.author}</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    </article>
  );
}
