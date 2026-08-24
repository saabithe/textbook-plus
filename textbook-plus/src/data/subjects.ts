import {
  Atom,
  FlaskConical,
  Calculator,
  Leaf,
  BookOpen,
  Languages,
  type LucideIcon,
} from "lucide-react";

export interface Subject {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  color: string;
  colorLight: string;
  chapterCount: number;
  description: string;
}

export const subjects: Subject[] = [
  {
    id: "physics",
    name: "Physics",
    slug: "physics",
    icon: Atom,
    color: "var(--subject-physics)",
    colorLight: "var(--subject-physics-light)",
    chapterCount: 14,
    description: "Electrostatics, Optics, Modern Physics & more",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    slug: "chemistry",
    icon: FlaskConical,
    color: "var(--subject-chemistry)",
    colorLight: "var(--subject-chemistry-light)",
    chapterCount: 10,
    description: "Physical, Organic & Inorganic Chemistry",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    slug: "mathematics",
    icon: Calculator,
    color: "var(--subject-mathematics)",
    colorLight: "var(--subject-mathematics-light)",
    chapterCount: 13,
    description: "Calculus, Algebra, Probability & more",
  },
  {
    id: "biology",
    name: "Biology",
    slug: "biology",
    icon: Leaf,
    color: "var(--subject-biology)",
    colorLight: "var(--subject-biology-light)",
    chapterCount: 13,
    description: "Genetics, Ecology, Human Physiology & more",
  },
  {
    id: "english",
    name: "English",
    slug: "english",
    icon: BookOpen,
    color: "var(--subject-english)",
    colorLight: "var(--subject-english-light)",
    chapterCount: 16,
    description: "Flights of Freedom — Kerala Board SCERT",
  },
  {
    id: "arabic",
    name: "Arabic",
    slug: "arabic",
    icon: Languages,
    color: "var(--subject-arabic)",
    colorLight: "var(--subject-arabic-light)",
    chapterCount: 12,
    description: "Kerala Board SCERT Plus Two",
  },
];

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}
