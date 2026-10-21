"use client";

import dynamic from "next/dynamic";

const discourseComponents: Record<string, React.ComponentType> = {
  "central-message": dynamic(() => import("@/content/arabic/discourses/central-message/page")) as React.ComponentType,
};

export function ArabicDiscourseContent({ slug }: { slug: string }) {
  const Component = discourseComponents[slug];
  return (
    <div className="prose-custom prose-ar" dir="rtl">
      {Component ? (
        <Component />
      ) : (
        <div className="text-muted-foreground py-12 text-center">Content coming soon...</div>
      )}
    </div>
  );
}
