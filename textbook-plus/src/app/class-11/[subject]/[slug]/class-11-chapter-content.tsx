"use client";

import dynamic from "next/dynamic";

const chapterComponents: Record<string, React.ComponentType> = {
  "maths/sets": dynamic(() => import("@/content/maths/sets/page")) as React.ComponentType,
  "maths/relations-and-functions": dynamic(() => import("@/content/maths/relations-and-functions/page")) as React.ComponentType,
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
