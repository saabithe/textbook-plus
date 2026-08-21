"use client";

const chapterComponents: Record<string, React.ComponentType> = {};

export function Class11ChapterContent({ subject, slug }: { subject: string; slug: string }) {
  const Component = chapterComponents[`${subject}/${slug}`];
  if (!Component) return <div className="text-muted-foreground py-12 text-center">Content coming soon...</div>;
  return (
    <div className="prose-custom">
      <Component />
    </div>
  );
}
