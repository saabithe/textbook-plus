"use client";

import { Fragment, useEffect, useRef, useState, type RefObject } from "react";
import Link from "next/link";
import { ChapterNav } from "./ChapterNav";
import { ChapterTabs, PracticePlaceholder } from "./ChapterTabs";
import { ChapterToc } from "./ChapterToc";
import { ReadingProgress } from "./ReadingProgress";
import { AnnotationLayer } from "@/components/annotate/AnnotationLayer";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { getAdjacentChapters } from "@/data/chapters";
import { getQuestionsForChapter, getFlashcardsForChapter, hasQuestions, hasFlashcards } from "@/lib/content";
import type { Chapter } from "@/data/chapters";
import type { Question, Flashcard } from "@/types/chapter";

export interface Crumb {
  label: string;
  href?: string;
}

interface ChapterLayoutProps {
  chapter: Chapter;
  subjectName: string;
  subjectSlug: string;
  subjectColor: string;
  children: React.ReactNode;
  breadcrumb?: Crumb[];
  subtitle?: string;
}

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

function toRoman(n: number): string {
  return ROMAN[n - 1] ?? String(n);
}

export function ChapterLayout({
  chapter,
  subjectName,
  subjectSlug,
  subjectColor,
  children,
  breadcrumb,
  subtitle,
}: ChapterLayoutProps) {
  const adjacent = getAdjacentChapters(chapter);
  const registryKey = chapter.slug;
  const navBase = "/chapter";
  const [activeTab, setActiveTab] = useState("learning");
  const showPractice = subjectSlug !== "english" && subjectSlug !== "arabic";
  const articleRef = useRef<HTMLElement | null>(null);

  const crumbs: Crumb[] = breadcrumb ?? [
    { label: "Home", href: "/" },
    { label: subjectName, href: `/subjects/${subjectSlug}` },
    { label: chapter.title },
  ];

  const numeral = String(chapter.number).padStart(2, "0");
  const eyebrow = [
    `Chapter ${numeral}`,
    chapter.unit ? `Unit ${toRoman(chapter.unit)}` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  const meta =
    subtitle ??
    (chapter.titleArabic
      ? [chapter.title, chapter.unit ? `Unit ${chapter.unit}` : null]
          .filter(Boolean)
          .join(" · ")
      : `${subjectName} · ${chapter.topicCount} topics`);

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-10">
      <ReadingProgress color={subjectColor} />
      <AnnotationLayer containerRef={articleRef as RefObject<HTMLElement | null>} enabled={activeTab === "learning"} />

      {/* Breadcrumb — micro-label, current page in ink */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList className="t-micro gap-2">
          {crumbs.map((crumb, i) => (
            <Fragment key={i}>
              {i > 0 && <BreadcrumbSeparator className="text-faint" />}
              <BreadcrumbItem className="min-w-0">
                {crumb.href ? (
                  <BreadcrumbLink render={<Link href={crumb.href} />} className="truncate">
                    {crumb.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="truncate text-foreground">{crumb.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {/* Chapter header — bordered, minimal, designed (§5.3) */}
      <header className="relative mb-8 overflow-hidden rounded-lg border border-border bg-card p-7 sm:p-8">
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-[3px]"
          style={{ background: subjectColor }}
        />
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="t-micro" style={{ color: subjectColor }}>
              {eyebrow}
            </p>
            <h1 className="t-h1 mt-3">
              {chapter.titleArabic ? (
                <span dir="rtl" className="arabic-font">
                  {chapter.titleArabic}
                </span>
              ) : (
                chapter.title
              )}
            </h1>
          </div>
          <span
            aria-hidden
            className="shrink-0 font-sans text-[48px] font-extrabold leading-[0.9] tabular-nums"
            style={{ color: subjectColor }}
          >
            {numeral}
          </span>
        </div>

        {/* The one inner rule: title above, meta below */}
        <div aria-hidden className="-mx-7 mt-6 border-t border-border sm:-mx-8" />
        <p className="t-micro mt-4">{meta}</p>
      </header>

      {/* Learning / Practice tabs — hidden for English/Arabic (they use Read/Discourses) */}
      {showPractice && (
        <ChapterTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          showPractice={showPractice}
        />
      )}

      {/* Content — railed on Learning only */}
      {activeTab === "learning" ? (
        <div className="xl:grid xl:grid-cols-[200px_minmax(0,72ch)_200px] xl:gap-12">
          {/* Empty spacer: keeps the reading column optically centred (§5.13) */}
          <div aria-hidden className="hidden xl:block" />

          <article ref={articleRef} data-chapter-content className="min-w-0 max-w-none">
            {children}

            <ChapterNav prev={adjacent.prev ?? null} next={adjacent.next ?? null} basePath={navBase} />
          </article>

          <ChapterToc />
        </div>
      ) : (
        /* Practice tab — no rail, single column */
        <div className="mx-auto max-w-[72ch]">
          <PracticeTabContent
            registryKey={registryKey}
            subjectColor={subjectColor}
          />

          <ChapterNav prev={adjacent.prev ?? null} next={adjacent.next ?? null} basePath={navBase} />
        </div>
      )}
    </div>
  );
}

function PracticeTabContent({
  registryKey,
  subjectColor,
}: {
  registryKey: string;
  subjectColor: string;
}) {
  const hasQ = hasQuestions(registryKey);
  const hasFC = hasFlashcards(registryKey);
  const [subTab, setSubTab] = useState<"questions" | "flashcards">(hasQ ? "questions" : "flashcards");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

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
    <div className="space-y-8">
      {/* Sub-tabs: Questions / Flashcards — same line grammar as the chapter tabs */}
      {hasQ && hasFC && (
        <Tabs
          value={subTab}
          onValueChange={(v) => setSubTab(v as "questions" | "flashcards")}
        >
          <TabsList variant="line" className="w-full justify-start gap-6">
            <TabsTrigger value="questions" className="px-0">
              Questions
              <span className="t-micro ml-1.5 tabular-nums">{questions.length}</span>
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="px-0">
              Flashcards
              <span className="t-micro ml-1.5 tabular-nums">{flashcards.length}</span>
            </TabsTrigger>
          </TabsList>
          <Separator />
        </Tabs>
      )}

      {/* Content */}
      {subTab === "questions" && hasQ && (
        <PracticeSession
          questions={questions}
          subjectColor={subjectColor}
        />
      )}
      {subTab === "flashcards" && hasFC && (
        <FlashcardDeck
          cards={flashcards}
          subjectColor={subjectColor}
        />
      )}
      {subTab === "questions" && !hasQ && (
        <div className="py-12 text-center text-muted-foreground">
          No questions available yet for this chapter.
        </div>
      )}
      {subTab === "flashcards" && !hasFC && (
        <div className="py-12 text-center text-muted-foreground">
          No flashcards available yet for this chapter.
        </div>
      )}
    </div>
  );
}
