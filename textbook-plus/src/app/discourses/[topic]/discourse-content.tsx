"use client";

import dynamic from "next/dynamic";

const discourseComponents: Record<string, React.ComponentType> = {
  "letter-writing": dynamic(() => import("@/content/discourses/letter-writing/page")) as React.ComponentType,
  "essay-article-paragraph": dynamic(() => import("@/content/discourses/essay-article-paragraph/page")) as React.ComponentType,
  "precis-review-blurb": dynamic(() => import("@/content/discourses/precis-review-blurb/page")) as React.ComponentType,
  "reports": dynamic(() => import("@/content/discourses/reports/page")) as React.ComponentType,
  "spoken-english": dynamic(() => import("@/content/discourses/spoken-english/page")) as React.ComponentType,
  "character-sketch": dynamic(() => import("@/content/discourses/character-sketch/page")) as React.ComponentType,
  "appreciation": dynamic(() => import("@/content/discourses/appreciation/page")) as React.ComponentType,
  "announcement-notice": dynamic(() => import("@/content/discourses/announcement-notice/page")) as React.ComponentType,
  "travel-writing": dynamic(() => import("@/content/discourses/travel-writing/page")) as React.ComponentType,
};

export function DiscourseContent({ slug }: { slug: string }) {
  const Component = discourseComponents[slug];
  if (!Component) return <div className="text-muted-foreground py-12 text-center">Content coming soon...</div>;
  return (
    <div className="prose-custom">
      <Component />
    </div>
  );
}
