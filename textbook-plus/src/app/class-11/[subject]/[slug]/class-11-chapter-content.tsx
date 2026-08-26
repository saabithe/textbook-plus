"use client";

import dynamic from "next/dynamic";

const chapterComponents: Record<string, React.ComponentType> = {
  "maths/sets": dynamic(() => import("@/content/maths/sets/page")) as React.ComponentType,
  "maths/relations-and-functions": dynamic(() => import("@/content/maths/relations-and-functions/page")) as React.ComponentType,
  "maths/trigonometric-functions": dynamic(() => import("@/content/maths/trigonometric-functions/page")) as React.ComponentType,
  "maths/complex-numbers-and-quadratic-equations": dynamic(
    () => import("@/content/maths/complex-numbers-and-quadratic-equations/page")
  ) as React.ComponentType,
  "maths/linear-inequalities": dynamic(() => import("@/content/maths/linear-inequalities/page")) as React.ComponentType,
  "maths/permutations-and-combinations": dynamic(() => import("@/content/maths/permutations-and-combinations/page")) as React.ComponentType,
  "maths/binomial-theorem": dynamic(() => import("@/content/maths/binomial-theorem/page")) as React.ComponentType,
  "maths/sequences-and-series": dynamic(() => import("@/content/maths/sequences-and-series/page")) as React.ComponentType,
  "maths/straight-lines": dynamic(() => import("@/content/maths/straight-lines/page")) as React.ComponentType,
  "maths/limits-and-derivatives": dynamic(() => import("@/content/maths/limits-and-derivatives/page")) as React.ComponentType,
  "maths/probability": dynamic(() => import("@/content/maths/probability/page")) as React.ComponentType,
  "maths/conic-sections": dynamic(() => import("@/content/maths/conic-sections/page")) as React.ComponentType,
  "maths/introduction-to-three-dimensional-geometry": dynamic(
    () => import("@/content/maths/introduction-to-three-dimensional-geometry/page")
  ) as React.ComponentType,
};

export function Class11ChapterContent({ subject, slug }: { subject: string; slug: string }) {
  const Component = chapterComponents[`${subject}/${slug}`];
  if (!Component) return <div className="text-muted-foreground py-12 text-center">Content coming soon...</div>;
  return (
    <div className="prose-custom">
      <Component />
    </div>
  );
}
