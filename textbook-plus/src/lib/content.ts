import type { ChapterSection, Question, Flashcard } from "@/types/chapter";
import ch1Questions from "@/content/physics/electric-charges-and-fields/questions.json";
import ch1Flashcards from "@/content/physics/electric-charges-and-fields/flashcards.json";
import ch2Questions from "@/content/physics/electrostatic-potential-and-capacitance/questions.json";
import ch2Flashcards from "@/content/physics/electrostatic-potential-and-capacitance/flashcards.json";

const SECTIONS_MAP: Record<string, ChapterSection[]> = {
  "horegallu": [
    { id: "author", title: "Author" },
    { id: "introduction", title: "Introduction" },
    { id: "summary", title: "Summary" },
    { id: "character-sketch-ratna", title: "Character Sketch: Ratna" },
    { id: "character-sketch-grandfather", title: "Character Sketch: Grandfather" },
    { id: "character-comparison", title: "Character Comparison" },
    {
      id: "symbolism-themes", title: "Symbolism & Themes", children: [
        { id: "the-burden", title: "The Symbolism of Burden" },
        { id: "power-of-listening", title: "The Power of Listening" },
        { id: "human-horegallus", title: "Human Horegallus" },
      ],
    },
    { id: "key-takeaway", title: "Key Takeaway" },
    { id: "read-and-respond", title: "Read & Respond" },
  ],
  "mending-wall": [
    { id: "author", title: "Author" },
    { id: "introduction", title: "Introduction" },
    { id: "the-poem", title: "The Poem" },
    { id: "summary", title: "Summary" },
    { id: "wall-debate", title: "The Wall Debate" },
    {
      id: "poetic-devices", title: "Poetic Devices", children: [
        { id: "device-personification", title: "Personification" },
        { id: "device-simile", title: "Simile" },
        { id: "device-metaphor", title: "Metaphor" },
        { id: "device-irony", title: "Irony" },
        { id: "device-apostrophe", title: "Apostrophe" },
        { id: "device-epigram", title: "Epigram" },
        { id: "device-enjambment", title: "Enjambment" },
        { id: "device-assonance", title: "Assonance" },
        { id: "device-symbolism", title: "Symbolism" },
        { id: "device-blank-verse", title: "Blank Verse" },
      ],
    },
    { id: "theme", title: "Theme" },
    { id: "appreciation", title: "Poem Appreciation" },
    { id: "key-takeaway", title: "Key Takeaway" },
  ],
  "electric-charges-and-fields": [
    { id: "h-1-1", title: "1.1 Introduction" },
    { id: "h-1-2", title: "1.2 Electric Charge" },
    { id: "h-1-3", title: "1.3 Conductors and Insulators" },
    {
      id: "h-1-4", title: "1.4 Basic Properties of Electric Charges", children: [
        { id: "h-1-4-1", title: "1.4.1 Additivity of Charges" },
        { id: "h-1-4-2", title: "1.4.2 Charge is Conserved" },
        { id: "h-1-4-3", title: "1.4.3 Quantisation of Charge" },
      ],
    },
    {
      id: "h-1-5", title: "1.5 Coulomb's Law", children: [
        { id: "h-1-5-1", title: "1.5.1 Scalar Form" },
        { id: "h-1-5-2", title: "1.5.2 Force in a Medium" },
      ],
    },
    { id: "h-1-6", title: "1.6 Forces between Multiple Charges" },
    {
      id: "h-1-7", title: "1.7 Electric Field", children: [
        { id: "h-1-7-1", title: "1.7.1 Electric Field due to a System of Charges" },
        { id: "h-1-7-2", title: "1.7.2 Physical Significance of Electric Field" },
      ],
    },
    { id: "h-1-8", title: "1.8 Electric Field Lines" },
    { id: "h-1-9", title: "1.9 Electric Flux" },
    {
      id: "h-1-10", title: "1.10 Electric Dipole", children: [
        { id: "h-1-10-1", title: "1.10.1 The Field of an Electric Dipole" },
        { id: "h-1-10-2", title: "1.10.2 Physical Significance of Dipoles" },
      ],
    },
    { id: "h-1-11", title: "1.11 Dipole in a Uniform External Field" },
    { id: "h-1-12", title: "1.12 Continuous Charge Distribution" },
    { id: "h-1-13", title: "1.13 Gauss's Law" },
    {
      id: "h-1-14", title: "1.14 Applications of Gauss's Law", children: [
        { id: "h-1-14-1", title: "1.14.1 Infinitely Long Straight Uniformly Charged Wire" },
        { id: "h-1-14-2", title: "1.14.2 Uniformly Charged Infinite Plane Sheet" },
        { id: "h-1-14-3", title: "1.14.3 Uniformly Charged Thin Spherical Shell" },
      ],
    },
    { id: "h-1-examples", title: "Worked Examples" },
    { id: "h-1-summary", title: "Summary" },
    { id: "h-1-ponder", title: "Points to Ponder" },
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

const CONTENT_SLUGS = new Set(Object.keys(QUESTIONS_MAP));

export function hasChapterContent(slug: string): boolean {
  return CONTENT_SLUGS.has(slug) || slug in SECTIONS_MAP;
}
