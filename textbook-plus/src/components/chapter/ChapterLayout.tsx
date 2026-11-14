"use client";

import { Fragment, useCallback, useEffect, useRef, useState, type RefObject } from "react";
import Link from "next/link";
import { List, X } from "lucide-react";
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
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [tocAvailable, setTocAvailable] = useState(false);
  const showPractice = subjectSlug !== "english" && subjectSlug !== "arabic";
  const articleRef = useRef<HTMLDivElement | null>(null);
  const tocTriggerRef = useRef<HTMLButtonElement | null>(null);
  const tocPanelRef = useRef<HTMLDivElement | null>(null);
  /**
   * The trigger lives while the TOC is available *or* the drawer is open, so a
   * late availability report from the child can never unmount an open drawer
   * or steal focus back out of it. Only an explicit close ends the session.
   */
  const showContents = activeTab === "learning" && (tocAvailable || mobileTocOpen);

  const closeMobileToc = useCallback(() => {
    setMobileTocOpen(false);
    // Restore focus without yanking the reader back up the page after a jump.
    requestAnimationFrame(() => tocTriggerRef.current?.focus({ preventScroll: true }));
  }, []);

  // The drawer belongs to the Learning tab only; leaving it drops the session.
  useEffect(() => {
    if (activeTab !== "learning") setMobileTocOpen(false);
  }, [activeTab]);

  // Drawer open → lock body scroll, focus the panel, Escape closes.
  // The cleanup restores the previous overflow on close *and* on unmount.
  useEffect(() => {
    if (!mobileTocOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    tocPanelRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.stopPropagation();
      closeMobileToc();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileTocOpen, closeMobileToc]);

  async function copySelection() {
    const sel = window.getSelection()?.toString() ?? "";
    if (sel) await navigator.clipboard.writeText(sel).catch(() => {});
  }
  async function copyArticle() {
    const root = articleRef.current;
    if (root) await navigator.clipboard.writeText(root.innerText).catch(() => {});
  }

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
      : subjectName);

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-10" style={{ "--accent": subjectColor, "--heading-accent": subjectColor } as React.CSSProperties}>
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

      {/* Mobile contents — an in-flow sub-bar under the tabs. It never covers
          the reading column and never collides with the progress badge. */}
      {showContents && (
        <div className="sticky top-16 z-30 -mx-6 mb-6 flex items-center justify-between gap-3 border-b border-border bg-background px-6 py-2 xl:hidden">
          <p className="t-micro">On this page</p>
          <button
            ref={tocTriggerRef}
            type="button"
            aria-label="Open contents"
            aria-haspopup="dialog"
            aria-expanded={mobileTocOpen}
            aria-controls="chapter-contents-drawer"
            onClick={() => setMobileTocOpen(true)}
            className="inline-flex h-11 min-w-11 items-center gap-2 rounded-[3px] border border-border bg-card px-4 text-[12px] font-semibold text-foreground outline-none transition-colors duration-[120ms] ease-[var(--ease-blueprint)] active:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <List aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
            Contents
          </button>
        </div>
      )}

      {/* Content — railed on Learning only */}
      {activeTab === "learning" ? (
        <div className="xl:grid xl:grid-cols-[200px_minmax(0,72ch)_200px] xl:gap-12">
          {/* Empty spacer: keeps the reading column optically centred (§5.13) */}
          <div aria-hidden className="hidden xl:block" />

          <article
            ref={articleRef}
            data-chapter-content
            className="min-w-0 max-w-none"
          >
            {children}

            <ChapterNav prev={adjacent.prev ?? null} next={adjacent.next ?? null} basePath={navBase} />
          </article>

          <ChapterToc onAvailableChange={setTocAvailable} />
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
      {mobileTocOpen && (
        <div
          className="fixed inset-0 z-[60] flex justify-end bg-foreground/40 backdrop-blur-sm xl:hidden"
          role="presentation"
          onClick={closeMobileToc}
        >
          <div
            ref={tocPanelRef}
            id="chapter-contents-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Contents"
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
            className="flex h-[100dvh] w-[280px] max-w-[85vw] flex-col border-l border-border bg-card pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] outline-none"
          >
            <div className="flex shrink-0 items-center justify-end px-1 pt-1">
              <button
                type="button"
                aria-label="Close contents"
                onClick={closeMobileToc}
                className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] text-muted-foreground outline-none transition-colors duration-[120ms] ease-[var(--ease-blueprint)] active:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <X aria-hidden className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain [&>[data-slot=sidebar]]:w-full">
              {/* Availability from the drawer's own TOC is deliberately ignored:
                  the desktop rail owns `tocAvailable`, so a re-report can never
                  close the drawer mid-flight. A jump closes it. */}
              <ChapterToc mobile onNavigate={closeMobileToc} />
            </div>
          </div>
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
