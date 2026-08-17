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
          className="group flex items-center gap-4 rounded-xl border border-transparent px-5 py-4 transition-all duration-200 hover:border-border/60 hover:bg-card hover:shadow-sm"
        >
          {/* Chapter number */}
          <span
            className="flex h-10 min-w-10 items-center justify-center rounded-lg text-sm font-bold"
            style={{
              backgroundColor: subjectColor + "15",
              color: subjectColor,
            }}
          >
            {String(chapter.number).padStart(2, "0")}
          </span>

          {/* Title + topic count */}
          <div className="flex flex-1 flex-col gap-0.5">
            <span className="text-[15px] font-medium text-foreground transition-colors group-hover:text-[var(--hover-color)]"
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
            className="h-4 w-4 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-muted-foreground/70"
          />
        </Link>
      ))}
    </div>
  );
}
