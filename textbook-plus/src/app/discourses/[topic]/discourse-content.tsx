"use client";

import dynamic from "next/dynamic";

const discourseComponents: Record<string, React.ComponentType> = {
  "letter-writing": dynamic(() => import("@/content/discourses/letter-writing/page")) as React.ComponentType,
  "essay-article-paragraph": dynamic(() => import("@/content/discourses/essay-article-paragraph/page")) as React.ComponentType,
  "speech": dynamic(() => import("@/content/discourses/speech/page")) as React.ComponentType,
  "news-report": dynamic(() => import("@/content/discourses/news-report/page")) as React.ComponentType,
  "precis-writing": dynamic(() => import("@/content/discourses/precis-writing/page")) as React.ComponentType,
  "character-sketch": dynamic(() => import("@/content/discourses/character-sketch/page")) as React.ComponentType,
  "review": dynamic(() => import("@/content/discourses/review/page")) as React.ComponentType,
  "event-seminar-report": dynamic(() => import("@/content/discourses/event-seminar-report/page")) as React.ComponentType,
  "job-application-resume": dynamic(() => import("@/content/discourses/job-application-resume/page")) as React.ComponentType,
  "interview": dynamic(() => import("@/content/discourses/interview/page")) as React.ComponentType,
  "appreciation": dynamic(() => import("@/content/discourses/appreciation/page")) as React.ComponentType,
  "announcement-notice": dynamic(() => import("@/content/discourses/announcement-notice/page")) as React.ComponentType,
  "poster-notice-email": dynamic(() => import("@/content/discourses/poster-notice-email/page")) as React.ComponentType,
  "debate": dynamic(() => import("@/content/discourses/debate/page")) as React.ComponentType,
  "book-play-blurb": dynamic(() => import("@/content/discourses/book-play-blurb/page")) as React.ComponentType,
  "conversation": dynamic(() => import("@/content/discourses/conversation/page")) as React.ComponentType,
  "live-tv-reporting": dynamic(() => import("@/content/discourses/live-tv-reporting/page")) as React.ComponentType,
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
