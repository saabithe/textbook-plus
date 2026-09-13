import type { Question, Flashcard } from "@/types/chapter";


// Practice data is lazy-loaded per chapter so visiting one chapter doesn't
// download every chapter's questions/flashcards. Keys are static (sync
// hasQuestions/hasFlashcards); data arrives via dynamic import.
const QUESTION_KEYS = new Set([
  "magnetism-and-matter",
  "electric-charges-and-fields",
  "electromagnetic-induction",
  "c11/maths/sets",
  "c11/maths/relations-and-functions",
  "c11/maths/trigonometric-functions",
  "c11/maths/complex-numbers-and-quadratic-equations",
  "c11/maths/linear-inequalities",
  "c11/maths/permutations-and-combinations",
  "c11/maths/binomial-theorem",
  "c11/maths/sequences-and-series",
  "c11/maths/straight-lines",
  "c11/maths/limits-and-derivatives",
  "c11/maths/probability",
  "c11/maths/introduction-to-three-dimensional-geometry",
  "c11/maths/statistics",
  "c11/physics/units-and-measurements",
  "c11/physics/motion-in-a-straight-line",
  "c11/physics/motion-in-a-plane",
  "c11/physics/laws-of-motion",
  "c11/physics/work-energy-and-power",
  "c11/physics/system-of-particles-and-rotational-motion",
  "c11/physics/gravitation",
  "c11/physics/mechanical-properties-of-solids",
  "c11/physics/mechanical-properties-of-fluids",
  "c11/physics/thermal-properties-of-matter",
  "c11/physics/thermodynamics",
  "c11/physics/kinetic-theory",
  "c11/physics/oscillations",
  "c11/physics/waves",
]);

const FLASHCARD_KEYS = new Set(QUESTION_KEYS);

const questionLoaders: Record<string, () => Promise<Question[]>> = {
  "magnetism-and-matter": () =>
    import("@/content/physics/magnetism-and-matter/questions.json").then((m) => m.default as Question[]),
  "electric-charges-and-fields": () =>
    import("@/content/physics/electric-charges-and-fields/questions.json").then((m) => m.default as Question[]),
  "electromagnetic-induction": () =>
    import("@/content/physics/electromagnetic-induction/questions.json").then((m) => m.default as Question[]),
  "c11/maths/sets": () =>
    import("@/content/maths/sets/questions.json").then((m) => m.default as Question[]),
  "c11/maths/relations-and-functions": () =>
    import("@/content/maths/relations-and-functions/questions.json").then((m) => m.default as Question[]),
  "c11/maths/trigonometric-functions": () =>
    import("@/content/maths/trigonometric-functions/questions.json").then((m) => m.default as Question[]),
  "c11/maths/complex-numbers-and-quadratic-equations": () =>
    import("@/content/maths/complex-numbers-and-quadratic-equations/questions.json").then((m) => m.default as Question[]),
  "c11/maths/linear-inequalities": () =>
    import("@/content/maths/linear-inequalities/questions.json").then((m) => m.default as Question[]),
  "c11/maths/permutations-and-combinations": () =>
    import("@/content/maths/permutations-and-combinations/questions.json").then((m) => m.default as Question[]),
  "c11/maths/binomial-theorem": () =>
    import("@/content/maths/binomial-theorem/questions.json").then((m) => m.default as Question[]),
  "c11/maths/sequences-and-series": () =>
    import("@/content/maths/sequences-and-series/questions.json").then((m) => m.default as Question[]),
  "c11/maths/straight-lines": () =>
    import("@/content/maths/straight-lines/questions.json").then((m) => m.default as Question[]),
  "c11/maths/probability": () =>
    import("@/content/maths/probability/questions.json").then((m) => m.default as Question[]),
  "c11/maths/limits-and-derivatives": () =>
    import("@/content/maths/limits-and-derivatives/questions.json").then((m) => m.default as Question[]),
  "c11/maths/statistics": () =>
    import("@/content/maths/statistics/questions.json").then((m) => m.default as Question[]),
  "c11/physics/units-and-measurements": () =>
    import("@/content/physics/units-and-measurements/questions.json").then((m) => m.default as Question[]),
  "c11/physics/motion-in-a-straight-line": () =>
    import("@/content/physics/motion-in-a-straight-line/questions.json").then((m) => m.default as Question[]),
  "c11/physics/motion-in-a-plane": () =>
    import("@/content/physics/motion-in-a-plane/questions.json").then((m) => m.default as Question[]),
  "c11/physics/laws-of-motion": () =>
    import("@/content/physics/laws-of-motion/questions.json").then((m) => m.default as Question[]),
  "c11/physics/work-energy-and-power": () =>
    import("@/content/physics/work-energy-and-power/questions.json").then((m) => m.default as Question[]),
  "c11/physics/system-of-particles-and-rotational-motion": () =>
    import("@/content/physics/system-of-particles-and-rotational-motion/questions.json").then((m) => m.default as Question[]),
  "c11/physics/gravitation": () =>
    import("@/content/physics/gravitation/questions.json").then((m) => m.default as Question[]),
  "c11/physics/mechanical-properties-of-solids": () =>
    import("@/content/physics/mechanical-properties-of-solids/questions.json").then((m) => m.default as Question[]),
  "c11/physics/mechanical-properties-of-fluids": () =>
    import("@/content/physics/mechanical-properties-of-fluids/questions.json").then((m) => m.default as Question[]),
  "c11/physics/thermal-properties-of-matter": () =>
    import("@/content/physics/thermal-properties-of-matter/questions.json").then((m) => m.default as Question[]),
  "c11/physics/thermodynamics": () =>
    import("@/content/physics/thermodynamics/questions.json").then((m) => m.default as Question[]),
  "c11/physics/kinetic-theory": () =>
    import("@/content/physics/kinetic-theory/questions.json").then((m) => m.default as Question[]),
  "c11/physics/oscillations": () =>
    import("@/content/physics/oscillations/questions.json").then((m) => m.default as Question[]),
  "c11/physics/waves": () =>
    import("@/content/physics/waves/questions.json").then((m) => m.default as Question[]),
};

const flashcardLoaders: Record<string, () => Promise<Flashcard[]>> = {
  "magnetism-and-matter": () =>
    import("@/content/physics/magnetism-and-matter/flashcards.json").then((m) => m.default as Flashcard[]),
  "electric-charges-and-fields": () =>
    import("@/content/physics/electric-charges-and-fields/flashcards.json").then((m) => m.default as Flashcard[]),
  "electromagnetic-induction": () =>
    import("@/content/physics/electromagnetic-induction/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/sets": () =>
    import("@/content/maths/sets/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/relations-and-functions": () =>
    import("@/content/maths/relations-and-functions/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/trigonometric-functions": () =>
    import("@/content/maths/trigonometric-functions/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/complex-numbers-and-quadratic-equations": () =>
    import("@/content/maths/complex-numbers-and-quadratic-equations/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/linear-inequalities": () =>
    import("@/content/maths/linear-inequalities/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/permutations-and-combinations": () =>
    import("@/content/maths/permutations-and-combinations/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/binomial-theorem": () =>
    import("@/content/maths/binomial-theorem/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/sequences-and-series": () =>
    import("@/content/maths/sequences-and-series/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/straight-lines": () =>
    import("@/content/maths/straight-lines/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/introduction-to-three-dimensional-geometry": () =>
    import("@/content/maths/introduction-to-three-dimensional-geometry/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/limits-and-derivatives": () =>
    import("@/content/maths/limits-and-derivatives/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/maths/statistics": () =>
    import("@/content/maths/statistics/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/units-and-measurements": () =>
    import("@/content/physics/units-and-measurements/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/motion-in-a-straight-line": () =>
    import("@/content/physics/motion-in-a-straight-line/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/motion-in-a-plane": () =>
    import("@/content/physics/motion-in-a-plane/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/laws-of-motion": () =>
    import("@/content/physics/laws-of-motion/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/work-energy-and-power": () =>
    import("@/content/physics/work-energy-and-power/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/system-of-particles-and-rotational-motion": () =>
    import("@/content/physics/system-of-particles-and-rotational-motion/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/gravitation": () =>
    import("@/content/physics/gravitation/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/mechanical-properties-of-solids": () =>
    import("@/content/physics/mechanical-properties-of-solids/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/mechanical-properties-of-fluids": () =>
    import("@/content/physics/mechanical-properties-of-fluids/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/thermal-properties-of-matter": () =>
    import("@/content/physics/thermal-properties-of-matter/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/thermodynamics": () =>
    import("@/content/physics/thermodynamics/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/kinetic-theory": () =>
    import("@/content/physics/kinetic-theory/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/oscillations": () =>
    import("@/content/physics/oscillations/flashcards.json").then((m) => m.default as Flashcard[]),
  "c11/physics/waves": () =>
    import("@/content/physics/waves/flashcards.json").then((m) => m.default as Flashcard[]),
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

const CONTENT_SLUGS = new Set(QUESTION_KEYS);

export function hasChapterContent(slug: string): boolean {
  return CONTENT_SLUGS.has(slug);
}
