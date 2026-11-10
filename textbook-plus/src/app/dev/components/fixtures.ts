import type { Chapter } from "@/data/chapters";
import type { Flashcard, Question } from "@/types/chapter";
import type { GrammarQuestion } from "@/components/grammar/GrammarQuiz";

export const QUESTIONS: Question[] = [
  {
    id: "q-1",
    type: "mcq",
    difficulty: "easy",
    question: "The SI unit of electric flux is",
    options: ["N m² C⁻¹", "N C⁻¹", "C m⁻²", "V m⁻¹"],
    answer: 0,
    explanation: "Flux is E·A, so the unit is (N C⁻¹)(m²) = N m² C⁻¹.",
  },
  {
    id: "q-2",
    type: "short",
    difficulty: "medium",
    question: "State Gauss's law in words.",
    answer:
      "The total electric flux through a closed surface equals the enclosed charge divided by ε₀.",
    explanation: "Φ = q/ε₀. The flux depends only on the charge inside the surface.",
  },
  {
    id: "q-3",
    type: "mcq",
    difficulty: "hard",
    question: "A charge is placed at the centre of a cube. The flux through one face is",
    options: ["q/ε₀", "q/6ε₀", "q/8ε₀", "zero"],
    answer: 1,
    explanation: "The cube has six faces, so symmetry gives q/6ε₀ per face.",
  },
];

export const FLASHCARDS: Flashcard[] = [
  { id: "f-1", front: "Electric flux", back: "Φ = E·A cos θ, measured in N m² C⁻¹." },
  { id: "f-2", front: "Gauss's law", back: "Φ through a closed surface = q_enclosed / ε₀." },
  { id: "f-3", front: "Dipole moment", back: "p = q · 2a, directed from −q to +q." },
];

export const SAMPLE_CHAPTER: Chapter = {
  id: "physics-1",
  subjectSlug: "physics",
  number: 1,
  title: "Electric Charges and Fields",
  slug: "electric-charges-and-fields",
};

export const PREV_CHAPTER: Chapter = {
  id: "physics-0",
  subjectSlug: "physics",
  number: 0,
  title: "Physical World",
  slug: "physical-world",
};

export const NEXT_CHAPTER: Chapter = {
  id: "physics-2",
  subjectSlug: "physics",
  number: 2,
  title: "Electrostatic Potential and Capacitance",
  slug: "electrostatic-potential-and-capacitance",
};

export const ARABIC_CHAPTER: Chapter = {
  id: "arabic-1",
  subjectSlug: "arabic",
  number: 1,
  title: "الرحلة إلى الجبل",
  titleArabic: "الرحلة إلى الجبل",
  slug: "ar-1",
  author: "K. T. Muhammad",
  authorArabic: "ك. ت. محمد",
  genre: "Travelogue",
  genreArabic: "رحلة",
  authorDetails: [
    { label: "Birthplace", labelArabic: "مكان الميلاد", value: "Kadavathoor, Kannur", valueArabic: "كادافاثور، كانور" },
    { label: "Born", labelArabic: "الميلاد", value: "1929", valueArabic: "١٩٢٩" },
  ],
};

export const GRAMMAR_QUESTIONS: GrammarQuestion[] = [
  {
    id: "g-1",
    type: "mcq",
    question: "Choose the correct form: She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    answer: 1,
    explanation: "Third-person singular takes -s in the simple present.",
  },
  {
    id: "g-2",
    type: "fill-blank",
    question: "They ___ (be) here yesterday.",
    answer: "were",
    accepted: ["were"],
    explanation: "Past tense of be for plural subjects is were.",
  },
];
