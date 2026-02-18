export const SITE_NAME = "Emajon";
export const SITE_URL = "https://www.emajon.com";
export const SITE_DESCRIPTION =
  "Content and community for profitable living — in health, wealth, and relationships. Built for brains that work differently.";

export type CategorySlug =
  | "financial-future"
  | "health"
  | "community"
  | "focus"
  | "organization"
  | "executive-function";

export type PillarType = "investment" | "foundation";

export interface ContentPillar {
  slug: CategorySlug;
  name: string;
  description: string;
  type: PillarType;
}

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    slug: "financial-future",
    name: "Financial Future",
    description: "Financial literacy, planning, and building wealth",
    type: "investment",
  },
  {
    slug: "health",
    name: "Health",
    description: "Physical, mental, and emotional wellbeing",
    type: "investment",
  },
  {
    slug: "community",
    name: "Community",
    description: "Relationships, social connections, and belonging",
    type: "investment",
  },
  {
    slug: "focus",
    name: "Focus",
    description: "Staying on track in an attention-deficit world",
    type: "foundation",
  },
  {
    slug: "organization",
    name: "Organization",
    description: "Managing complexity without overwhelm",
    type: "foundation",
  },
  {
    slug: "executive-function",
    name: "Executive Function",
    description: "Planning, prioritizing, and following through",
    type: "foundation",
  },
];

export function getCategoryName(slug: string): string {
  const pillar = CONTENT_PILLARS.find((p) => p.slug === slug);
  return pillar ? pillar.name : slug;
}
