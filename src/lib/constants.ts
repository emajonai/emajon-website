export const SITE_NAME = "Emajon";
export const SITE_URL = "https://www.emajon.com";
export const SITE_DESCRIPTION =
  "ADHD-informed tools and community for managing your relationships, health, and finances.";

export type CategorySlug =
  | "loneliness-crisis"
  | "adhd-and-relationships"
  | "art-of-connection"
  | "tools-and-supports"
  | "building-emajon";

export interface ContentPillar {
  slug: CategorySlug;
  name: string;
  description: string;
}

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    slug: "loneliness-crisis",
    name: "The Loneliness Crisis",
    description: "Understanding why so many of us feel disconnected",
  },
  {
    slug: "adhd-and-relationships",
    name: "ADHD & Relationships",
    description: "How ADHD shapes the way we connect with others",
  },
  {
    slug: "art-of-connection",
    name: "The Art of Connection",
    description: "Practical strategies for building and maintaining relationships",
  },
  {
    slug: "tools-and-supports",
    name: "Tools & Supports",
    description: "Technology and systems that help us stay connected",
  },
  {
    slug: "building-emajon",
    name: "Building Emajon",
    description: "Behind the scenes of what we are creating",
  },
];

export function getCategoryName(slug: string): string {
  const pillar = CONTENT_PILLARS.find((p) => p.slug === slug);
  return pillar ? pillar.name : slug;
}
