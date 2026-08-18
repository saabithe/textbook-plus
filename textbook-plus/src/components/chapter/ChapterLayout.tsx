"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ChapterNav } from "./ChapterNav";
import { getAdjacentChapters } from "@/data/chapters";
import type { Chapter } from "@/data/chapters";

interface ChapterLayoutProps {
  chapter: Chapter;
  subjectName: string;
  subjectSlug: string;
  subjectColor: string;
  children: React.ReactNode;
}

export function ChapterLayout({
  chapter,
  subjectName,
  subjectSlug,
  subjectColor,
  children,
}: ChapterLayoutProps) {
  const { prev, next } = getAdjacentChapters(chapter);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
        <Link
          href="/"
          className="transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link
          href={`/subjects/${subjectSlug}`}
          className="transition-colors hover:text-foreground"
        >
          {subjectName}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium truncate">
          {chapter.title}
        </span>
      </nav>

      {/* Chapter Header */}
      <header className="mb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{ backgroundColor: subjectColor }}
            >
              {chapter.number}
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {chapter.title}
            </h1>
          </div>
          <p className="text-sm text-muted-foreground ml-11">
            {chapter.topicCount} topics
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-3xl">
        {children}

        <ChapterNav prev={prev} next={next} subjectColor={subjectColor} />
      </article>
    </div>
  );
}
