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

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
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
      {categories.map((cat) => (
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
  );
}
