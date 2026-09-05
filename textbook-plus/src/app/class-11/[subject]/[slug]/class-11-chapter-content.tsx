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
  "maths/statistics": dynamic(() => import("@/content/maths/statistics/page")) as React.ComponentType,
  "physics/units-and-measurements": dynamic(
    () => import("@/content/physics/units-and-measurements/page")
  ) as React.ComponentType,
  "physics/motion-in-a-straight-line": dynamic(
    () => import("@/content/physics/motion-in-a-straight-line/page")
  ) as React.ComponentType,
  "physics/motion-in-a-plane": dynamic(
    () => import("@/content/physics/motion-in-a-plane/page")
  ) as React.ComponentType,
  "physics/laws-of-motion": dynamic(
    () => import("@/content/physics/laws-of-motion/page")
  ) as React.ComponentType,
  "physics/work-energy-and-power": dynamic(
    () => import("@/content/physics/work-energy-and-power/page")
  ) as React.ComponentType,
  "physics/system-of-particles-and-rotational-motion": dynamic(
    () => import("@/content/physics/system-of-particles-and-rotational-motion/page")
  ) as React.ComponentType,
  "physics/gravitation": dynamic(
    () => import("@/content/physics/gravitation/page")
  ) as React.ComponentType,
  "physics/mechanical-properties-of-solids": dynamic(
    () => import("@/content/physics/mechanical-properties-of-solids/page")
  ) as React.ComponentType,
  "physics/mechanical-properties-of-fluids": dynamic(
    () => import("@/content/physics/mechanical-properties-of-fluids/page")
  ) as React.ComponentType,
  "physics/thermal-properties-of-matter": dynamic(
    () => import("@/content/physics/thermal-properties-of-matter/page")
  ) as React.ComponentType,
  "physics/thermodynamics": dynamic(
    () => import("@/content/physics/thermodynamics/page")
  ) as React.ComponentType,
  "physics/kinetic-theory": dynamic(
    () => import("@/content/physics/kinetic-theory/page")
  ) as React.ComponentType,
  "physics/oscillations": dynamic(
    () => import("@/content/physics/oscillations/page")
  ) as React.ComponentType,
  "physics/waves": dynamic(
    () => import("@/content/physics/waves/page")
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
