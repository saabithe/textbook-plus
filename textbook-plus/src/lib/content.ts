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
    { id: "conduction-and-induction", title: "1.2 Conduction and Induction" },
    { id: "coulombs-law", title: "1.3 Coulomb's Law" },
    { id: "electric-field", title: "1.4 Electric Field" },
    { id: "electric-flux", title: "1.5 Electric Flux" },
    { id: "gauss-law", title: "1.6 Gauss's Law" },
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
