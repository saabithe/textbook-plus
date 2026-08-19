"use client";

import dynamic from "next/dynamic";

const chapterComponents: Record<string, React.ComponentType> = {
  "electric-charges-and-fields": dynamic(() => import("@/content/physics/electric-charges-and-fields/page")) as React.ComponentType,
  "electrostatic-potential-and-capacitance": dynamic(() => import("@/content/physics/electrostatic-potential-and-capacitance/page")) as React.ComponentType,
  "horegallu": dynamic(() => import("@/content/english/horegallu/page")) as React.ComponentType,
  "mending-wall": dynamic(() => import("@/content/english/mending-wall/page")) as React.ComponentType,
};

export function ChapterContent({ slug }: { slug: string }) {
  const Component = chapterComponents[slug];
  if (!Component) return <div className="text-muted-foreground py-12 text-center">Content coming soon...</div>;
  return (
    <div className="prose-custom">
      <Component />
    </div>
  );
}
