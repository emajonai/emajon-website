"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { ContentPillar } from "@/lib/constants";

interface BlogFilterProps {
  categories: ContentPillar[];
  activeCategory?: string;
}

export default function BlogFilter({ categories, activeCategory }: BlogFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (slug?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    router.push(`/blog?${params.toString()}`);
  };

  const investmentPillars = categories.filter((c) => c.type === "investment");
  const foundationPillars = categories.filter((c) => c.type === "foundation");

  return (
    <div className="flex flex-col items-center gap-3 mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => handleFilter()}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !activeCategory
              ? "bg-primary text-white"
              : "bg-background-light text-text-secondary hover:bg-blue-50 hover:text-primary"
          }`}
        >
          All
        </button>
        {investmentPillars.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleFilter(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.slug
                ? "bg-primary text-white"
                : "bg-background-light text-text-secondary hover:bg-blue-50 hover:text-primary"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <span className="px-2 py-2 text-xs text-text-light">Foundation:</span>
        {foundationPillars.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleFilter(cat.slug)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === cat.slug
                ? "bg-secondary text-white"
                : "bg-purple-50 text-text-secondary hover:bg-purple-100 hover:text-secondary"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
