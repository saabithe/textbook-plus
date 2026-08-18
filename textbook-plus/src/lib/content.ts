import type { ComponentType } from "react";
import type { ChapterSection, Question, Flashcard } from "@/types/chapter";

import PhysicsElectricCharges from "@/content/physics/electric-charges-and-fields/page.mdx";
import PhysicsElectricChargesQuestions from "@/content/physics/electric-charges-and-fields/questions.json";
import PhysicsElectricChargesFlashcards from "@/content/physics/electric-charges-and-fields/flashcards.json";

const MDX_MAP: Record<string, ComponentType> = {
  "electric-charges-and-fields": PhysicsElectricCharges as ComponentType,
};

const SECTIONS_MAP: Record<string, ChapterSection[]> = {
  "electric-charges-and-fields": [
    { id: "electric-charge", title: "1.1 Electric Charge" },
    { id: "conductors-and-insulators", title: "1.2 Conductors and Insulators" },
    { id: "charging-by-induction", title: "1.3 Charging by Induction" },
    { id: "basic-properties-of-electric-charges", title: "1.4 Basic Properties of Electric Charges" },
    { id: "coulombs-law", title: "1.5 Coulomb's Law" },
    { id: "forces-between-multiple-charges", title: "1.6 Forces between Multiple Charges" },
    { id: "electric-field", title: "1.7 Electric Field" },
    { id: "electric-field-lines", title: "1.8 Electric Field Lines" },
    { id: "electric-flux", title: "1.9 Electric Flux" },
    { id: "electric-dipole", title: "1.10 Electric Dipole" },
    { id: "dipole-in-a-uniform-external-field", title: "1.11 Dipole in a Uniform External Field" },
    { id: "continuous-charge-distribution", title: "1.12 Continuous Charge Distribution" },
    { id: "gausss-law", title: "1.13 Gauss's Law" },
    { id: "applications-of-gausss-law", title: "1.14 Applications of Gauss's Law" },
    { id: "examples", title: "Examples" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "summary", title: "Summary" },
    { id: "points-to-ponder", title: "Points to Ponder" },
  ],
};

const QUESTIONS_MAP: Record<string, Question[]> = {
  "electric-charges-and-fields": PhysicsElectricChargesQuestions as Question[],
};

const FLASHCARDS_MAP: Record<string, Flashcard[]> = {
  "electric-charges-and-fields": PhysicsElectricChargesFlashcards as Flashcard[],
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

export function getQuestionsForChapter(slug: string): Question[] {
  return QUESTIONS_MAP[slug] ?? [];
}

export function getFlashcardsForChapter(slug: string): Flashcard[] {
  return FLASHCARDS_MAP[slug] ?? [];
}

export function hasQuestions(slug: string): boolean {
  return slug in QUESTIONS_MAP;
}

export function hasFlashcards(slug: string): boolean {
  return slug in FLASHCARDS_MAP;
}
