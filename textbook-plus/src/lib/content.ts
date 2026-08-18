import type { ComponentType } from "react";
import type { ChapterSection } from "@/types/chapter";

import PhysicsElectricCharges from "@/content/physics/electric-charges-and-fields/page.mdx";

const MDX_MAP: Record<string, ComponentType> = {
  "electric-charges-and-fields": PhysicsElectricCharges as ComponentType,
};

const SECTIONS_MAP: Record<string, ChapterSection[]> = {
  "electric-charges-and-fields": [
    { id: "electric-charge", title: "1.1 Electric Charge" },
    { id: "conduction-and-induction", title: "1.2 Conduction and Induction" },
    { id: "coulombs-law", title: "1.3 Coulomb's Law" },
    { id: "electric-field", title: "1.4 Electric Field" },
    { id: "electric-flux", title: "1.5 Electric Flux" },
    { id: "gauss-law", title: "1.6 Gauss's Law" },
  ],
};

export function getMDXComponent(slug: string): ComponentType | null {
  return MDX_MAP[slug] ?? null;
}

export function getSectionsForChapter(slug: string): ChapterSection[] {
  return SECTIONS_MAP[slug] ?? [];
}

export function hasMDXContent(slug: string): boolean {
  return slug in MDX_MAP;
}
