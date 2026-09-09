"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Circle, Brain, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChapterNav } from "./ChapterNav";
import { ChapterTabs, PracticePlaceholder } from "./ChapterTabs";
import { ReadingProgress } from "./ReadingProgress";
import { PracticeSession } from "@/components/practice/PracticeSession";
import { FlashcardDeck } from "@/components/flashcard/FlashcardDeck";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAdjacentChapters } from "@/data/chapters";
import { getAdjacentClass11Chapters, getClass11ChapterBySlugFromAll } from "@/data/class11";
import { getQuestionsForChapter, getFlashcardsForChapter, hasQuestions, hasFlashcards } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
import type { Chapter } from "@/data/chapters";
import type { Class11Chapter } from "@/data/class11";
import type { Question, Flashcard } from "@/types/chapter";

export interface Crumb {
  label: string;
  href?: string;
}

type ChapterLike = Chapter | Class11Chapter;

interface ChapterLayoutProps {
  chapter: ChapterLike;
  subjectName: string;
  subjectSlug: string;
  subjectColor: string;
  children: React.ReactNode;
  breadcrumb?: Crumb[];
  subtitle?: string;
  contentKey?: string;
  prevNext?: { prev?: ChapterLike | null; next?: ChapterLike | null };
  navBasePath?: string;
}

export function ChapterLayout({
  chapter,
  subjectName,
  subjectSlug,
  subjectColor,
  children,
  breadcrumb,
  subtitle,
  contentKey,
  prevNext,
  navBasePath,
}: ChapterLayoutProps) {
  const adjacent = (() => {
    if (prevNext) return prevNext as { prev: Chapter | null; next: Chapter | null };
    const main = getAdjacentChapters(chapter as Chapter);
    if (main.prev || main.next) return main;
    const class11 = getClass11ChapterBySlugFromAll(chapter.slug);
    if (class11) {
      const c = getAdjacentClass11Chapters(class11);
      return { prev: c.prev as unknown as Chapter | null, next: c.next as unknown as Chapter | null };
    }
    return main;
  })();
  const registryKey = contentKey ?? chapter.slug;
  const navBase = navBasePath ?? (getClass11ChapterBySlugFromAll(chapter.slug) ? `/class-11/${chapter.subjectSlug}` : "/chapter");
  const { isCompleted, toggle } = useProgress(subjectSlug);
  const completed = isCompleted(chapter.slug);
  const [activeTab, setActiveTab] = useState("learning");
  const showPractice = subjectSlug !== "english" && subjectSlug !== "arabic";

  const crumbs: Crumb[] = breadcrumb ?? [
    { label: "Home", href: "/" },
    { label: subjectName, href: `/subjects/${subjectSlug}` },
    { label: chapter.title },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <ReadingProgress color={subjectColor} />
      {/* Breadcrumb */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          {crumbs.map((crumb, i) => (
            <Fragment key={i}>
              {i > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem className="min-w-0">
                {crumb.href ? (
                  <BreadcrumbLink render={<Link href={crumb.href} />}>
                    {crumb.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="font-medium truncate">{crumb.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {/* Chapter Header */}
      <header
        className="mb-8 overflow-hidden rounded-3xl border-2 p-5 sm:p-7"
        style={{
          borderColor: `${subjectColor}33`,
          background: `linear-gradient(135deg, ${subjectColor}14, transparent 65%)`,
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold text-white sm:h-14 sm:w-14 sm:text-xl"
              style={{
                background: `linear-gradient(135deg, ${subjectColor}, ${subjectColor}B3)`,
                boxShadow: `0 8px 20px -8px ${subjectColor}`,
              }}
            >
              {chapter.number}
            </span>
            <div className="space-y-1">
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
                {chapter.title}
              </h1>
              <p className="text-sm font-semibold text-muted-foreground">
                {subtitle ?? `${chapter.topicCount} topics`}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {/* Mark complete button */}
            <Button
              variant={completed ? "default" : "outline"}
              onClick={() => toggle(chapter.slug)}
              className={cn(
                "h-9 rounded-full px-3 sm:px-4",
                !completed && "bg-muted/50 text-muted-foreground hover:text-foreground"
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
            </Button>
          </div>
        </div>
      </header>

      {/* Learning / Practice Tabs — hidden for English/Arabic (they use Read/Discourses) */}
      {showPractice && (
        <ChapterTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          showPractice={showPractice}
        />
      )}

      {/* Content */}
      {activeTab === "learning" ? (
        <article className="max-w-3xl mx-auto">
          {children}

          <ChapterNav prev={adjacent.prev ?? null} next={adjacent.next ?? null} basePath={navBase} />
        </article>
      ) : (
        /* Practice tab */
        <div className="mx-auto max-w-3xl">
          <PracticeTabContent
            chapterSlug={chapter.slug}
            registryKey={registryKey}
            subjectSlug={subjectSlug}
            subjectColor={subjectColor}
          />

          <ChapterNav prev={adjacent.prev ?? null} next={adjacent.next ?? null} basePath={navBase} />
        </div>
      )}
    </div>
  );
}

function PracticeTabContent({
  chapterSlug,
  registryKey,
  subjectSlug,
  subjectColor,
}: {
  chapterSlug: string;
  registryKey: string;
  subjectSlug: string;
  subjectColor: string;
}) {
  const { getChapterPractice, updateFlashcardProgress, markQuestionRevealed } = useProgress(subjectSlug);
  const hasQ = hasQuestions(registryKey);
  const hasFC = hasFlashcards(registryKey);
  const [subTab, setSubTab] = useState<"questions" | "flashcards">(hasQ ? "questions" : "flashcards");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const practice = getChapterPractice(chapterSlug);

  useEffect(() => {
    let cancelled = false;
    Promise.all([getQuestionsForChapter(registryKey), getFlashcardsForChapter(registryKey)]).then(
      ([qs, fcs]) => {
        if (!cancelled) {
          setQuestions(qs);
          setFlashcards(fcs);
        }
      }
    );
    return () => {
      cancelled = true;
    };
  }, [registryKey]);

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
          <Button
            variant={subTab === "questions" ? "secondary" : "ghost"}
            onClick={() => setSubTab("questions")}
            className={cn(
              "flex-1 justify-center px-4 py-2.5",
              subTab === "questions" && "bg-background shadow-sm hover:bg-background"
            )}
          >
            <Brain className="h-4 w-4" />
            Questions
            <Badge variant="secondary" className="ml-1">{questions.length}</Badge>
          </Button>
          <Button
            variant={subTab === "flashcards" ? "secondary" : "ghost"}
            onClick={() => setSubTab("flashcards")}
            className={cn(
              "flex-1 justify-center px-4 py-2.5",
              subTab === "flashcards" && "bg-background shadow-sm hover:bg-background"
            )}
          >
            <Layers className="h-4 w-4" />
            Flashcards
            <Badge variant="secondary" className="ml-1">{flashcards.length}</Badge>
          </Button>
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
