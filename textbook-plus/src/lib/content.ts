import type { ChapterSection, Question, Flashcard } from "@/types/chapter";
import ch1Questions from "@/content/physics/electric-charges-and-fields/questions.json";
import ch1Flashcards from "@/content/physics/electric-charges-and-fields/flashcards.json";
import ch2Questions from "@/content/physics/electrostatic-potential-and-capacitance/questions.json";
import ch2Flashcards from "@/content/physics/electrostatic-potential-and-capacitance/flashcards.json";

const SECTIONS_MAP: Record<string, ChapterSection[]> = {
  "electric-charges-and-fields": [
    { id: "h-1-1", title: "1.1 Introduction" },
    { id: "h-1-2", title: "1.2 Electric Charge" },
    { id: "h-1-3", title: "1.3 Conductors and Insulators" },
    { id: "h-1-4", title: "1.4 Basic Properties of Electric Charges" },
    { id: "h-1-5", title: "1.5 Coulomb's Law" },
    { id: "h-1-6", title: "1.6 Forces between Multiple Charges" },
    { id: "h-1-7", title: "1.7 Electric Field" },
    { id: "h-1-8", title: "1.8 Electric Field Lines" },
    { id: "h-1-9", title: "1.9 Electric Flux" },
    { id: "h-1-10", title: "1.10 Electric Dipole" },
    { id: "h-1-11", title: "1.11 Dipole in a Uniform External Field" },
    { id: "h-1-12", title: "1.12 Continuous Charge Distribution" },
    { id: "h-1-13", title: "1.13 Gauss's Law" },
    { id: "h-1-14", title: "1.14 Applications of Gauss's Law" },
  ],
  "electrostatic-potential-and-capacitance": [
    { id: "h-2-1", title: "2.1 Introduction" },
    { id: "h-2-2", title: "2.2 Electrostatic Potential" },
    { id: "h-2-3", title: "2.3 Potential Due to a Point Charge" },
    { id: "h-2-4", title: "2.4 Potential Due to an Electric Dipole" },
    { id: "h-2-5", title: "2.5 Potential Due to a System of Charges" },
    { id: "h-2-6", title: "2.6 Equipotential Surfaces" },
    { id: "h-2-7", title: "2.7 Potential Energy of a System of Charges" },
    { id: "h-2-8", title: "2.8 Potential Energy in an External Field" },
    { id: "h-2-9", title: "2.9 Electrostatics of Conductors" },
    { id: "h-2-10", title: "2.10 Dielectrics and Polarisation" },
    { id: "h-2-11", title: "2.11 Capacitors and Capacitance" },
    { id: "h-2-12", title: "2.12 The Parallel Plate Capacitor" },
    { id: "h-2-13", title: "2.13 Effect of Dielectric on Capacitance" },
    { id: "h-2-14", title: "2.14 Combination of Capacitors" },
    { id: "h-2-15", title: "2.15 Energy Stored in a Capacitor" },
  ],
};

const QUESTIONS_MAP: Record<string, Question[]> = {
  "electric-charges-and-fields": ch1Questions as Question[],
  "electrostatic-potential-and-capacitance": ch2Questions as Question[],
};

const FLASHCARDS_MAP: Record<string, Flashcard[]> = {
  "electric-charges-and-fields": ch1Flashcards as Flashcard[],
  "electrostatic-potential-and-capacitance": ch2Flashcards as Flashcard[],
};

export function getSectionsForChapter(slug: string): ChapterSection[] {
  return SECTIONS_MAP[slug] ?? [];
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
