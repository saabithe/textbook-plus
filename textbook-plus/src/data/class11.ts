import { Atom, Calculator, type LucideIcon } from "lucide-react";

export interface Class11Chapter {
  id: string;
  subjectSlug: string;
  number: number;
  title: string;
  slug: string;
  part?: number;
  topicCount: number;
}

export interface Class11Subject {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  color: string;
  colorLight: string;
  description: string;
}

export const class11Subjects: Class11Subject[] = [
  {
    id: "maths",
    name: "Mathematics",
    slug: "maths",
    icon: Calculator,
    color: "var(--subject-mathematics)",
    colorLight: "var(--subject-mathematics-light)",
    description: "Class 11 Mathematics for the improvement exam",
  },
  {
    id: "physics",
    name: "Physics",
    slug: "physics",
    icon: Atom,
    color: "var(--subject-physics)",
    colorLight: "var(--subject-physics-light)",
    description: "Class 11 Physics for the improvement exam",
  },
];

export function getClass11SubjectBySlug(slug: string): Class11Subject | undefined {
  return class11Subjects.find((s) => s.slug === slug);
}

export const class11Chapters: Record<string, Class11Chapter[]> = {
  maths: [
    { id: "m11-01", subjectSlug: "maths", number: 1, title: "Sets", slug: "sets", topicCount: 10 },
    { id: "m11-02", subjectSlug: "maths", number: 2, title: "Relations and Functions", slug: "relations-and-functions", topicCount: 5 },
    { id: "m11-03", subjectSlug: "maths", number: 3, title: "Trigonometric Functions", slug: "trigonometric-functions", topicCount: 5 },
    { id: "m11-04", subjectSlug: "maths", number: 4, title: "Complex Numbers and Quadratic Equations", slug: "complex-numbers-and-quadratic-equations", topicCount: 0 },
    { id: "m11-05", subjectSlug: "maths", number: 5, title: "Linear Inequalities", slug: "linear-inequalities", topicCount: 0 },
    { id: "m11-06", subjectSlug: "maths", number: 6, title: "Permutations and Combinations", slug: "permutations-and-combinations", topicCount: 0 },
    { id: "m11-07", subjectSlug: "maths", number: 7, title: "Binomial Theorem", slug: "binomial-theorem", topicCount: 0 },
    { id: "m11-08", subjectSlug: "maths", number: 8, title: "Sequences and Series", slug: "sequences-and-series", topicCount: 0 },
    { id: "m11-09", subjectSlug: "maths", number: 9, title: "Straight Lines", slug: "straight-lines", topicCount: 0 },
    { id: "m11-10", subjectSlug: "maths", number: 10, title: "Conic Sections", slug: "conic-sections", topicCount: 0 },
    { id: "m11-11", subjectSlug: "maths", number: 11, title: "Introduction to Three Dimensional Geometry", slug: "introduction-to-three-dimensional-geometry", topicCount: 0 },
    { id: "m11-12", subjectSlug: "maths", number: 12, title: "Limits and Derivatives", slug: "limits-and-derivatives", topicCount: 0 },
    { id: "m11-13", subjectSlug: "maths", number: 13, title: "Statistics", slug: "statistics", topicCount: 0 },
    { id: "m11-14", subjectSlug: "maths", number: 14, title: "Probability", slug: "probability", topicCount: 0 },
  ],
  physics: [
    { id: "p11-01", subjectSlug: "physics", number: 1, title: "Units and Measurements", slug: "units-and-measurements", part: 1, topicCount: 0 },
    { id: "p11-02", subjectSlug: "physics", number: 2, title: "Motion in a Straight Line", slug: "motion-in-a-straight-line", part: 1, topicCount: 0 },
    { id: "p11-03", subjectSlug: "physics", number: 3, title: "Motion in a Plane", slug: "motion-in-a-plane", part: 1, topicCount: 0 },
    { id: "p11-04", subjectSlug: "physics", number: 4, title: "Laws of Motion", slug: "laws-of-motion", part: 1, topicCount: 0 },
    { id: "p11-05", subjectSlug: "physics", number: 5, title: "Work, Energy and Power", slug: "work-energy-and-power", part: 1, topicCount: 0 },
    { id: "p11-06", subjectSlug: "physics", number: 6, title: "System of Particles and Rotational Motion", slug: "system-of-particles-and-rotational-motion", part: 1, topicCount: 0 },
    { id: "p11-07", subjectSlug: "physics", number: 7, title: "Gravitation", slug: "gravitation", part: 1, topicCount: 0 },
    { id: "p11-08", subjectSlug: "physics", number: 8, title: "Mechanical Properties of Solids", slug: "mechanical-properties-of-solids", part: 2, topicCount: 0 },
    { id: "p11-09", subjectSlug: "physics", number: 9, title: "Mechanical Properties of Fluids", slug: "mechanical-properties-of-fluids", part: 2, topicCount: 0 },
    { id: "p11-10", subjectSlug: "physics", number: 10, title: "Thermal Properties of Matter", slug: "thermal-properties-of-matter", part: 2, topicCount: 0 },
    { id: "p11-11", subjectSlug: "physics", number: 11, title: "Thermodynamics", slug: "thermodynamics", part: 2, topicCount: 0 },
    { id: "p11-12", subjectSlug: "physics", number: 12, title: "Kinetic Theory", slug: "kinetic-theory", part: 2, topicCount: 0 },
    { id: "p11-13", subjectSlug: "physics", number: 13, title: "Oscillations", slug: "oscillations", part: 2, topicCount: 0 },
    { id: "p11-14", subjectSlug: "physics", number: 14, title: "Waves", slug: "waves", part: 2, topicCount: 0 },
  ],
};

export function getClass11Chapters(subjectSlug: string): Class11Chapter[] {
  return class11Chapters[subjectSlug] ?? [];
}

export function getClass11ChapterBySlugFromAll(slug: string): Class11Chapter | undefined {
  return Object.values(class11Chapters)
    .flat()
    .find((c) => c.slug === slug);
}

export function getAdjacentClass11Chapters(chapter: Class11Chapter): {
  prev?: Class11Chapter;
  next?: Class11Chapter;
} {
  const list = class11Chapters[chapter.subjectSlug] ?? [];
  const index = list.findIndex((c) => c.id === chapter.id);

  if (index === -1) return {};

  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: index < list.length - 1 ? list[index + 1] : undefined,
  };
}