"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sidebar } from "./Sidebar";
import { MobileSidebar } from "./MobileSidebar";
import { ChapterNav } from "./ChapterNav";
import { ChapterTabs, PracticePlaceholder } from "./ChapterTabs";
import { getAdjacentChapters } from "@/data/chapters";
import { getSectionsForChapter } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
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
  const sections = getSectionsForChapter(chapter.slug);
  const hasSidebar = sections.length > 0;
  const { isCompleted, toggle } = useProgress(subjectSlug);
  const completed = isCompleted(chapter.slug);
  const [activeTab, setActiveTab] = useState("learning");

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
      <header className="mb-6 flex items-start justify-between gap-4">
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
        <div className="flex items-center gap-2 shrink-0">
          {/* Mark complete button */}
          <button
            onClick={() => toggle(chapter.slug)}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200",
              completed
                ? "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400"
                : "border-border/60 bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {completed ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <Circle className="h-4 w-4" />
            )}
            <span className="hidden sm:inline">
              {completed ? "Completed" : "Mark complete"}
            </span>
          </button>
          {hasSidebar && activeTab === "learning" && (
            <MobileSidebar
              sections={sections}
              subjectColor={subjectColor}
              chapterTitle={chapter.title}
            />
          )}
        </div>
      </header>

      {/* Learning / Practice Tabs */}
      <ChapterTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        subjectColor={subjectColor}
      />

      {/* Two-column layout (Learning tab) */}
      {activeTab === "learning" ? (
        <div className="flex gap-12">
          {/* Desktop sidebar */}
          {hasSidebar && (
            <aside className="hidden lg:block w-60 shrink-0">
              <div className="sticky top-24">
                <Sidebar sections={sections} subjectColor={subjectColor} />
              </div>
            </aside>
          )}

          {/* Content */}
          <article className="min-w-0 flex-1 max-w-3xl">
            {children}

            <ChapterNav prev={prev} next={next} subjectColor={subjectColor} />
          </article>
        </div>
      ) : (
        /* Practice tab */
        <div className="max-w-3xl">
          <PracticePlaceholder subjectColor={subjectColor} />

          <ChapterNav prev={prev} next={next} subjectColor={subjectColor} />
        </div>
      )}
    </div>
  );
}
