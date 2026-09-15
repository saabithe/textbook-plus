"use client";

import { useProgress } from "@/hooks/useProgress";
import { getChaptersBySubject } from "@/data/chapters";
import { ChapterRow, type ChapterStatus } from "@/components/app/ChapterRow";

interface ChapterListProps {
  subjectSlug: string;
  subjectColor: string;
}

export function ChapterList({ subjectSlug, subjectColor }: ChapterListProps) {
  const chapters = getChaptersBySubject(subjectSlug);
  const { isCompleted, getChapterPractice } = useProgress(subjectSlug);

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
      {chapters.map((chapter) => (
        <ChapterRow
          key={chapter.id}
          href={`/chapter/${chapter.slug}`}
          number={chapter.number}
          title={chapter.title}
          meta={`${chapter.topicCount} topics`}
          color={subjectColor}
          status={statusFor(chapter.slug)}
        />
      ))}
    </div>
  );
}