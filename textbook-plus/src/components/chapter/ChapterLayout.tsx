"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { MobileSidebar } from "./MobileSidebar";
import { ChapterContent } from "./ChapterContent";
import { ChapterNav } from "./ChapterNav";
import { getChapterContent } from "@/data/sample-chapter";
import { getAdjacentChapters } from "@/data/chapters";
import type { Chapter } from "@/data/chapters";

interface ChapterLayoutProps {
  chapter: Chapter;
  subjectName: string;
  subjectSlug: string;
  subjectColor: string;
}

export function ChapterLayout({ chapter, subjectName, subjectSlug, subjectColor }: ChapterLayoutProps) {
  const content = getChapterContent(chapter.slug);
  const { prev, next } = getAdjacentChapters(chapter);

  const sections = content?.sections ?? [];

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
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
      <header className="mb-10 flex items-start justify-between gap-4">
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
        <MobileSidebar
          sections={sections}
          subjectColor={subjectColor}
          chapterTitle={chapter.title}
        />
      </header>

      {/* Two-column layout */}
      <div className="flex gap-12">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <Sidebar sections={sections} subjectColor={subjectColor} />
          </div>
        </aside>

        {/* Content */}
        <article className="min-w-0 flex-1 max-w-3xl">
          {sections.length > 0 ? (
            <ChapterContent sections={sections} />
          ) : (
            <div className="rounded-xl border border-dashed border-border/60 bg-muted/20 px-8 py-16 text-center">
              <p className="text-lg font-medium text-muted-foreground">
                Content coming soon
              </p>
              <p className="text-sm text-muted-foreground/70 mt-1">
                This chapter is being prepared.
              </p>
            </div>
          )}

          <ChapterNav prev={prev} next={next} subjectColor={subjectColor} />
        </article>
      </div>
    </div>
  );
}
