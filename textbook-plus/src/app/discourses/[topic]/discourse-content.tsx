"use client";

import dynamic from "next/dynamic";

const discourseComponents: Record<string, React.ComponentType> = {
  "letter-writing": dynamic(() => import("@/content/discourses/letter-writing/page")) as React.ComponentType,
  "article-essay": dynamic(() => import("@/content/discourses/article-essay/page")) as React.ComponentType,
  "speech": dynamic(() => import("@/content/discourses/speech/page")) as React.ComponentType,
  "news-report": dynamic(() => import("@/content/discourses/news-report/page")) as React.ComponentType,
  "review": dynamic(() => import("@/content/discourses/review/page")) as React.ComponentType,
  "profile-bio-sketch": dynamic(() => import("@/content/discourses/profile-bio-sketch/page")) as React.ComponentType,
  "poster-notice-email": dynamic(() => import("@/content/discourses/poster-notice-email/page")) as React.ComponentType,
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
