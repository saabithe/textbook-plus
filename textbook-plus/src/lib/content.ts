import type { Question, Flashcard } from "@/types/chapter";


// Practice data is lazy-loaded per chapter so visiting one chapter doesn't
// download every chapter's questions/flashcards. Keys are static (sync
// hasQuestions/hasFlashcards); data arrives via dynamic import.
const QUESTION_KEYS = new Set([
  "relations-and-functions",
  "inverse-trigonometric-functions",
  "matrices",
  "determinants",
  "electric-charges-and-fields",
  "electrostatic-potential-and-capacitance",
  "current-electricity",
  "moving-charges-and-magnetism",
  "magnetism-and-matter",
  "electromagnetic-induction",
  "alternating-current",
  "electromagnetic-waves",
  "ray-optics-and-optical-instruments",
  "wave-optics",
  "dual-nature-of-radiation-and-matter",
  "atoms",
  "nuclei",
  "semiconductor-electronics",
  "sexual-reproduction-in-flowering-plants",
  "human-reproduction",
  "reproductive-health",
]);

const FLASHCARD_KEYS = new Set(QUESTION_KEYS);

const questionLoaders: Record<string, () => Promise<Question[]>> = {
  "relations-and-functions": () =>
    import("@/content/mathematics/relations-and-functions/questions.json").then((m) => m.default as Question[]),
  "inverse-trigonometric-functions": () =>
    import("@/content/mathematics/inverse-trigonometric-functions/questions.json").then((m) => m.default as Question[]),
  "matrices": () =>
    import("@/content/mathematics/matrices/questions.json").then((m) => m.default as Question[]),
  "determinants": () =>
    import("@/content/mathematics/determinants/questions.json").then((m) => m.default as Question[]),
  "electrostatic-potential-and-capacitance": () =>
    import("@/content/physics/electrostatic-potential-and-capacitance/questions.json").then((m) => m.default as Question[]),
  "current-electricity": () =>
    import("@/content/physics/current-electricity/questions.json").then((m) => m.default as Question[]),
  "moving-charges-and-magnetism": () =>
    import("@/content/physics/moving-charges-and-magnetism/questions.json").then((m) => m.default as Question[]),
  "magnetism-and-matter": () =>
    import("@/content/physics/magnetism-and-matter/questions.json").then((m) => m.default as Question[]),
  "electromagnetic-induction": () =>
    import("@/content/physics/electromagnetic-induction/questions.json").then((m) => m.default as Question[]),
  "alternating-current": () =>
    import("@/content/physics/alternating-current/questions.json").then((m) => m.default as Question[]),
  "electromagnetic-waves": () =>
    import("@/content/physics/electromagnetic-waves/questions.json").then((m) => m.default as Question[]),
  "ray-optics-and-optical-instruments": () =>
    import("@/content/physics/ray-optics-and-optical-instruments/questions.json").then((m) => m.default as Question[]),
  "wave-optics": () =>
    import("@/content/physics/wave-optics/questions.json").then((m) => m.default as Question[]),
  "dual-nature-of-radiation-and-matter": () =>
    import("@/content/physics/dual-nature-of-radiation-and-matter/questions.json").then((m) => m.default as Question[]),
  "atoms": () =>
    import("@/content/physics/atoms/questions.json").then((m) => m.default as Question[]),
  "nuclei": () =>
    import("@/content/physics/nuclei/questions.json").then((m) => m.default as Question[]),
  "semiconductor-electronics": () =>
    import("@/content/physics/semiconductor-electronics/questions.json").then((m) => m.default as Question[]),
  "sexual-reproduction-in-flowering-plants": () =>
    import("@/content/biology/sexual-reproduction-in-flowering-plants/questions.json").then((m) => m.default as Question[]),
  "human-reproduction": () =>
    import("@/content/biology/human-reproduction/questions.json").then((m) => m.default as Question[]),
  "reproductive-health": () =>
    import("@/content/biology/reproductive-health/questions.json").then((m) => m.default as Question[]),
};

const flashcardLoaders: Record<string, () => Promise<Flashcard[]>> = {
  "relations-and-functions": () =>
    import("@/content/mathematics/relations-and-functions/flashcards.json").then((m) => m.default as Flashcard[]),
  "inverse-trigonometric-functions": () =>
    import("@/content/mathematics/inverse-trigonometric-functions/flashcards.json").then((m) => m.default as Flashcard[]),
  "matrices": () =>
    import("@/content/mathematics/matrices/flashcards.json").then((m) => m.default as Flashcard[]),
  "determinants": () =>
    import("@/content/mathematics/determinants/flashcards.json").then((m) => m.default as Flashcard[]),
  "electrostatic-potential-and-capacitance": () =>
    import("@/content/physics/electrostatic-potential-and-capacitance/flashcards.json").then((m) => m.default as Flashcard[]),
  "current-electricity": () =>
    import("@/content/physics/current-electricity/flashcards.json").then((m) => m.default as Flashcard[]),
  "moving-charges-and-magnetism": () =>
    import("@/content/physics/moving-charges-and-magnetism/flashcards.json").then((m) => m.default as Flashcard[]),
  "magnetism-and-matter": () =>
    import("@/content/physics/magnetism-and-matter/flashcards.json").then((m) => m.default as Flashcard[]),
  "electromagnetic-induction": () =>
    import("@/content/physics/electromagnetic-induction/flashcards.json").then((m) => m.default as Flashcard[]),
  "alternating-current": () =>
    import("@/content/physics/alternating-current/flashcards.json").then((m) => m.default as Flashcard[]),
  "electromagnetic-waves": () =>
    import("@/content/physics/electromagnetic-waves/flashcards.json").then((m) => m.default as Flashcard[]),
  "ray-optics-and-optical-instruments": () =>
    import("@/content/physics/ray-optics-and-optical-instruments/flashcards.json").then((m) => m.default as Flashcard[]),
  "wave-optics": () =>
    import("@/content/physics/wave-optics/flashcards.json").then((m) => m.default as Flashcard[]),
  "dual-nature-of-radiation-and-matter": () =>
    import("@/content/physics/dual-nature-of-radiation-and-matter/flashcards.json").then((m) => m.default as Flashcard[]),
  "atoms": () =>
    import("@/content/physics/atoms/flashcards.json").then((m) => m.default as Flashcard[]),
  "nuclei": () =>
    import("@/content/physics/nuclei/flashcards.json").then((m) => m.default as Flashcard[]),
  "semiconductor-electronics": () =>
    import("@/content/physics/semiconductor-electronics/flashcards.json").then((m) => m.default as Flashcard[]),
  "sexual-reproduction-in-flowering-plants": () =>
    import("@/content/biology/sexual-reproduction-in-flowering-plants/flashcards.json").then((m) => m.default as Flashcard[]),
  "human-reproduction": () =>
    import("@/content/biology/human-reproduction/flashcards.json").then((m) => m.default as Flashcard[]),
  "reproductive-health": () =>
    import("@/content/biology/reproductive-health/flashcards.json").then((m) => m.default as Flashcard[]),
};

export async function getQuestionsForChapter(slug: string): Promise<Question[]> {
  return questionLoaders[slug]?.() ?? [];
}

export async function getFlashcardsForChapter(slug: string): Promise<Flashcard[]> {
  return flashcardLoaders[slug]?.() ?? [];
}

export function hasQuestions(slug: string): boolean {
  return QUESTION_KEYS.has(slug);
}

export function hasFlashcards(slug: string): boolean {
  return FLASHCARD_KEYS.has(slug);
}
