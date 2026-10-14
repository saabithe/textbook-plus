import type { Question, Flashcard } from "@/types/chapter";


// Practice data is lazy-loaded per chapter so visiting one chapter doesn't
// download every chapter's questions/flashcards. Keys are static (sync
// hasQuestions/hasFlashcards); data arrives via dynamic import.
const QUESTION_KEYS = new Set([
  "magnetism-and-matter",
  "electric-charges-and-fields",
  "electromagnetic-induction",
  "electromagnetic-waves",
]);

const FLASHCARD_KEYS = new Set(QUESTION_KEYS);

const questionLoaders: Record<string, () => Promise<Question[]>> = {
  "magnetism-and-matter": () =>
    import("@/content/physics/magnetism-and-matter/questions.json").then((m) => m.default as Question[]),
  "electric-charges-and-fields": () =>
    import("@/content/physics/electric-charges-and-fields/questions.json").then((m) => m.default as Question[]),
  "electromagnetic-induction": () =>
    import("@/content/physics/electromagnetic-induction/questions.json").then((m) => m.default as Question[]),
  "electromagnetic-waves": () =>
    import("@/content/physics/electromagnetic-waves/questions.json").then((m) => m.default as Question[]),
};

const flashcardLoaders: Record<string, () => Promise<Flashcard[]>> = {
  "magnetism-and-matter": () =>
    import("@/content/physics/magnetism-and-matter/flashcards.json").then((m) => m.default as Flashcard[]),
  "electric-charges-and-fields": () =>
    import("@/content/physics/electric-charges-and-fields/flashcards.json").then((m) => m.default as Flashcard[]),
  "electromagnetic-induction": () =>
    import("@/content/physics/electromagnetic-induction/flashcards.json").then((m) => m.default as Flashcard[]),
  "electromagnetic-waves": () =>
    import("@/content/physics/electromagnetic-waves/flashcards.json").then((m) => m.default as Flashcard[]),
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
