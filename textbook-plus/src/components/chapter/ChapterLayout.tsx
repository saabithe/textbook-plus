"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, CheckCircle2, Circle, Brain, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sidebar } from "./Sidebar";
import { MobileSidebar } from "./MobileSidebar";
import { ChapterNav } from "./ChapterNav";
import { ChapterTabs, PracticePlaceholder } from "./ChapterTabs";
import { PracticeSession } from "@/components/practice/PracticeSession";
import { FlashcardDeck } from "@/components/flashcard/FlashcardDeck";
import { getAdjacentChapters } from "@/data/chapters";
import { getSectionsForChapter, getQuestionsForChapter, getFlashcardsForChapter, hasQuestions, hasFlashcards } from "@/lib/content";
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
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Restore sidebar state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sidebar-open");
      if (stored !== null) setSidebarOpen(stored === "true");
    } catch {}
  }, []);

  // Persist sidebar state
  useEffect(() => {
    try {
      localStorage.setItem("sidebar-open", String(sidebarOpen));
    } catch {}
  }, [sidebarOpen]);

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
      />

      {/* Two-column layout (Learning tab) */}
      {activeTab === "learning" ? (
        <div className="flex gap-12 relative">
          {/* Desktop sidebar */}
          {hasSidebar && sidebarOpen && (
            <aside className="hidden lg:block w-60 shrink-0">
              <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <Sidebar sections={sections} subjectColor={subjectColor} />
              </div>
            </aside>
          )}

          {/* Content */}
          <article className="min-w-0 flex-1 max-w-3xl mx-auto">
            {/* Sidebar toggle */}
            {hasSidebar && (
              <button
                onClick={() => setSidebarOpen((prev) => !prev)}
                className={cn(
                  "hidden lg:flex fixed top-1/2 -translate-y-1/2 z-30 h-8 w-5 items-center justify-center rounded-r-lg border border-l-0 border-border/60 bg-background/80 backdrop-blur-sm text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground",
                  sidebarOpen ? "left-[calc(50%-12rem+1.5rem)]" : "left-6"
                )}
                title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
                aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              >
                {sidebarOpen ? (
                  <ChevronLeft className="h-3.5 w-3.5" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5" />
                )}
              </button>
            )}

            {children}

            <ChapterNav prev={prev} next={next} />
          </article>
        </div>
      ) : (
        /* Practice tab */
        <div className="mx-auto max-w-3xl">
          <PracticeTabContent
            chapterSlug={chapter.slug}
            subjectSlug={subjectSlug}
            subjectColor={subjectColor}
          />

          <ChapterNav prev={prev} next={next} />
        </div>
      )}
    </div>
  );
}

function PracticeTabContent({
  chapterSlug,
  subjectSlug,
  subjectColor,
}: {
  chapterSlug: string;
  subjectSlug: string;
  subjectColor: string;
}) {
  const { getChapterPractice, updateFlashcardProgress, markQuestionRevealed } = useProgress(subjectSlug);
  const hasQ = hasQuestions(chapterSlug);
  const hasFC = hasFlashcards(chapterSlug);
  const [subTab, setSubTab] = useState<"questions" | "flashcards">(hasQ ? "questions" : "flashcards");
  const questions = getQuestionsForChapter(chapterSlug);
  const flashcards = getFlashcardsForChapter(chapterSlug);
  const practice = getChapterPractice(chapterSlug);

  if (!hasQ && !hasFC) {
    return (
      <div className="py-12">
        <PracticePlaceholder subjectColor={subjectColor} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Sub-tabs: Questions / Flashcards */}
      {(hasQ && hasFC) && (
        <div className="flex items-center gap-1 rounded-xl border border-border/60 bg-muted/30 p-1">
          <button
            onClick={() => setSubTab("questions")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 flex-1 justify-center",
              subTab === "questions"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Brain className="h-4 w-4" />
            Questions ({questions.length})
          </button>
          <button
            onClick={() => setSubTab("flashcards")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 flex-1 justify-center",
              subTab === "flashcards"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Layers className="h-4 w-4" />
            Flashcards ({flashcards.length})
          </button>
        </div>
      )}

      {/* Content */}
      {subTab === "questions" && hasQ && (
        <PracticeSession
          questions={questions}
          subjectColor={subjectColor}
          revealedIds={practice.questionsRevealed}
          onQuestionRevealed={(id) => markQuestionRevealed(chapterSlug, id)}
        />
      )}
      {subTab === "flashcards" && hasFC && (
        <FlashcardDeck
          cards={flashcards}
          subjectColor={subjectColor}
          initialKnown={practice.flashcardsKnown}
          initialUnknown={practice.flashcardsUnknown}
          onProgressUpdate={(known, unknown) => updateFlashcardProgress(chapterSlug, known, unknown)}
        />
      )}
      {subTab === "questions" && !hasQ && (
        <div className="text-center py-12 text-muted-foreground">
          No questions available yet for this chapter.
        </div>
      )}
      {subTab === "flashcards" && !hasFC && (
        <div className="text-center py-12 text-muted-foreground">
          No flashcards available yet for this chapter.
        </div>
      )}
    </div>
  );
}
