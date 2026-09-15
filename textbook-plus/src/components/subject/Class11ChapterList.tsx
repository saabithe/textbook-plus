"use client";

import { Badge } from "@/components/ui/badge";
import { useProgress } from "@/hooks/useProgress";
import { getClass11Chapters } from "@/data/class11";
import { hasChapterContent } from "@/lib/content";
import { ChapterRow, type ChapterStatus } from "@/components/app/ChapterRow";

interface Class11ChapterListProps {
  subjectSlug: string;
  subjectColor: string;
}

export function Class11ChapterList({ subjectSlug, subjectColor }: Class11ChapterListProps) {
  const chapters = getClass11Chapters(subjectSlug);
  const { isCompleted, getChapterPractice } = useProgress(subjectSlug);

  if (chapters.length === 0) {
    return <p className="text-sm text-muted-foreground">Chapters coming soon.</p>;
  }

  const statusFor = (slug: string): ChapterStatus => {
    if (isCompleted(slug)) return "done";
    const p = getChapterPractice(slug);
    const started =
      p.questionsRevealed.length > 0 ||
      p.flashcardsKnown.length > 0 ||
      p.flashcardsUnknown.length > 0;
    return started ? "started" : "pending";
  };

  return (
    <div className="flex flex-col gap-2">
      {chapters.map((chapter) => {
        const hasContent = hasChapterContent(`c11/${subjectSlug}/${chapter.slug}`);
        return (
          <ChapterRow
            key={chapter.id}
            href={`/class-11/${subjectSlug}/${chapter.slug}`}
            number={chapter.number}
            title={chapter.title}
            meta={
              chapter.part
                ? `Part ${chapter.part} · ${hasContent ? "Ready to explore" : "Coming soon"}`
                : hasContent
                  ? "Ready to explore"
                  : "Coming soon"
            }
            color={subjectColor}
            status={statusFor(chapter.slug)}
            badge={
              hasContent ? undefined : (
                <Badge variant="outline" className="hidden rounded-full text-[0.68rem] font-semibold sm:inline-flex">
                  Coming soon
                </Badge>
              )
            }
          />
        );
      })}
    </div>
  );
}