"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getChaptersBySubject } from "@/data/chapters";

interface ChapterListProps {
  subjectSlug: string;
  subjectColor: string;
}

export function ChapterList({ subjectSlug, subjectColor }: ChapterListProps) {
  const chapters = getChaptersBySubject(subjectSlug);

  return (
    <div className="flex flex-col gap-2">
      {chapters.map((chapter) => (
        <Link
          key={chapter.id}
          href={`/chapter/${chapter.slug}`}
          className="group flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 transition-all duration-200 hover:border-border/60 hover:bg-card hover:shadow-sm sm:gap-4 sm:px-5 sm:py-4"
        >
          {/* Chapter number */}
          <span
            className="flex h-9 min-w-9 items-center justify-center rounded-lg text-xs font-bold sm:h-10 sm:min-w-10 sm:text-sm"
            style={{
              backgroundColor: subjectColor + "15",
              color: subjectColor,
            }}
          >
            {String(chapter.number).padStart(2, "0")}
          </span>

          {/* Title + topic count */}
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <span className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-[var(--hover-color)] sm:text-[15px]"
              style={{ "--hover-color": subjectColor } as React.CSSProperties}
            >
              {chapter.title}
            </span>
            <span className="text-xs text-muted-foreground/60">
              {chapter.topicCount} topics
            </span>
          </div>

          {/* Chevron */}
          <ChevronRight
            className="h-4 w-4 shrink-0 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-muted-foreground/70"
          />
        </Link>
      ))}
    </div>
  );
}
