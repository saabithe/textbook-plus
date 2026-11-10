"use client";

import { useState, type ReactNode } from "react";
import { ChapterNav } from "@/components/chapter/ChapterNav";
import { ChapterSkeleton } from "@/components/chapter/ChapterSkeleton";
import { ChapterTabs } from "@/components/chapter/ChapterTabs";
import { ChapterToc } from "@/components/chapter/ChapterToc";
import { ReadingProgress } from "@/components/chapter/ReadingProgress";
import { PracticeSession } from "@/components/practice/PracticeSession";
import { QuestionCard } from "@/components/practice/QuestionCard";
import { DifficultyFilter } from "@/components/practice/DifficultyFilter";
import { FlashcardCard } from "@/components/flashcard/FlashcardCard";
import { FlashcardDeck } from "@/components/flashcard/FlashcardDeck";
import { FlashcardProgress } from "@/components/flashcard/FlashcardProgress";
import { GrammarQuiz } from "@/components/grammar/GrammarQuiz";
import { GrammarSection } from "@/components/grammar/GrammarSection";
import { GrammarTabs } from "@/components/grammar/GrammarTabs";
import { GrammarTopicLayout } from "@/components/grammar/GrammarTopicLayout";
import { SubjectCard } from "@/components/subject/SubjectCard";
import { ChapterList } from "@/components/subject/ChapterList";
import { ChapterRow } from "@/components/app/ChapterRow";
import { SectionHeading } from "@/components/app/SectionHeading";
import { ErrorBoundary } from "@/components/auth/ErrorBoundary";
import { CreditFooter } from "@/components/layout/CreditFooter";
import { UpdateBanner } from "@/components/layout/UpdateBanner";
import { subjects } from "@/data/subjects";
import {
  FLASHCARDS,
  GRAMMAR_QUESTIONS,
  NEXT_CHAPTER,
  PREV_CHAPTER,
  QUESTIONS,
} from "./fixtures";

const SUBJECT = subjects[0];
const COLOR = SUBJECT.color;

function ChapterTabsDemo() {
  const [tab, setTab] = useState("read");
  return (
    <div className="max-w-lg">
      <ChapterTabs activeTab={tab} onTabChange={setTab} showPractice />
      <p className="pt-3 text-sm text-muted-foreground">Active tab: {tab}</p>
    </div>
  );
}

function DifficultyDemo() {
  const [active, setActive] = useState<"all" | "easy" | "medium" | "hard">("all");
  return (
    <div className="max-w-lg space-y-3">
      <DifficultyFilter
        active={active}
        onChange={setActive}
        subjectColor={COLOR}
        counts={{ all: 12, easy: 5, medium: 4, hard: 3 }}
      />
      <p className="text-sm text-muted-foreground">Filter: {active}</p>
    </div>
  );
}

function GrammarTabsDemo() {
  const [tab, setTab] = useState<"concept" | "practice">("concept");
  return (
    <div className="max-w-lg">
      <GrammarTabs tab={tab} onTabChange={setTab} />
      <p className="text-sm text-muted-foreground">Active tab: {tab}</p>
    </div>
  );
}

export const APP_DEMOS: Record<string, ReactNode> = {
  "chapter/ChapterNav.tsx#ChapterNav": (
    <ChapterNav prev={PREV_CHAPTER} next={NEXT_CHAPTER} basePath="/chapter" />
  ),

  "chapter/ChapterSkeleton.tsx#ChapterSkeleton": (
    <div className="max-w-3xl">
      <ChapterSkeleton />
    </div>
  ),

  "chapter/ChapterTabs.tsx#ChapterTabs": <ChapterTabsDemo />,

  "chapter/ChapterToc.tsx#ChapterToc": (
    <div className="h-64 w-64 overflow-auto rounded-lg border border-border">
      <ChapterToc />
    </div>
  ),

  "chapter/ReadingProgress.tsx#ReadingProgress": (
    <div className="space-y-2 text-sm text-muted-foreground">
      <p>The reading progress rule is fixed to the top of the viewport.</p>
      <ReadingProgress color={COLOR} />
    </div>
  ),

  "practice/DifficultyFilter.tsx#DifficultyFilter": <DifficultyDemo />,

  "practice/QuestionCard.tsx#QuestionCard": (
    <div className="max-w-2xl">
      <QuestionCard question={QUESTIONS[0]} index={0} subjectColor={COLOR} isRevealed />
    </div>
  ),

  "practice/PracticeSession.tsx#PracticeSession": (
    <div className="max-w-2xl">
      <PracticeSession questions={QUESTIONS} subjectColor={COLOR} />
    </div>
  ),

  "flashcard/FlashcardCard.tsx#FlashcardCard": (
    <div className="max-w-md">
      <FlashcardCard card={FLASHCARDS[0]} subjectColor={COLOR} onKnown={() => {}} onUnknown={() => {}} />
    </div>
  ),

  "flashcard/FlashcardDeck.tsx#FlashcardDeck": (
    <div className="max-w-2xl">
      <FlashcardDeck cards={FLASHCARDS} subjectColor={COLOR} />
    </div>
  ),

  "flashcard/FlashcardProgress.tsx#FlashcardProgress": (
    <div className="max-w-md">
      <FlashcardProgress total={12} known={7} unknown={3} subjectColor={COLOR} />
    </div>
  ),

  "grammar/GrammarQuiz.tsx#GrammarQuiz": (
    <div className="max-w-2xl">
      <GrammarQuiz questions={GRAMMAR_QUESTIONS} />
    </div>
  ),

  "grammar/GrammarSection.tsx#GrammarSection": (
    <div className="max-w-2xl">
      <GrammarSection id="demo-section" title="Articles">
        <p className="text-sm text-muted-foreground">A, an, and the — definiteness and sound.</p>
      </GrammarSection>
      <GrammarSection id="demo-section-2">
        <p className="text-sm text-muted-foreground">A heading-less section.</p>
      </GrammarSection>
    </div>
  ),

  "grammar/GrammarTabs.tsx#GrammarTabs": <GrammarTabsDemo />,

  "grammar/GrammarTopicLayout.tsx#GrammarTopicLayout": (
    <div className="max-w-2xl">
      <GrammarTopicLayout
        intro={<p className="text-sm">A determiner that marks whether a noun is specific or general.</p>}
        questions={GRAMMAR_QUESTIONS}
      >
        <GrammarSection id="g-demo" title="Definite article">
          <p className="text-sm text-muted-foreground">Use “the” when both speaker and listener know the referent.</p>
        </GrammarSection>
      </GrammarTopicLayout>
    </div>
  ),

  "subject/SubjectCard.tsx#SubjectCard": (
    <div className="max-w-xs">
      <SubjectCard subject={SUBJECT} />
    </div>
  ),

  "subject/ChapterList.tsx#ChapterList": (
    <div className="max-w-2xl">
      <ChapterList subjectSlug="physics" subjectColor={COLOR} />
    </div>
  ),

  "app/ChapterRow.tsx#ChapterRow": (
    <div className="max-w-xl space-y-2">
      <ChapterRow href="/chapter/electric-charges-and-fields" number={1} title="Electric Charges and Fields" meta="14 sections" color={COLOR} />
      <ChapterRow href="/chapter/electrostatic-potential" number={2} title="Electrostatic Potential and Capacitance" meta="12 sections" color={COLOR} />
    </div>
  ),

  "app/SectionHeading.tsx#SectionHeading": (
    <div className="max-w-2xl">
      <SectionHeading
        eyebrow="Physics · Chapter 1"
        title="Electric charges and fields"
        description="Charge, force, field, and the law that ties them."
      />
    </div>
  ),

  "auth/ErrorBoundary.tsx#ErrorBoundary": (
    <div className="max-w-xl">
      <ErrorBoundary>
        <div className="rounded border border-border p-4 text-sm">Protected content renders normally.</div>
      </ErrorBoundary>
    </div>
  ),

  "layout/CreditFooter.tsx#CreditFooter": (
    <div className="max-w-xl border border-border">
      <CreditFooter />
    </div>
  ),

  "layout/UpdateBanner.tsx#UpdateBanner": (
    <div className="max-w-xl">
      <UpdateBanner />
    </div>
  ),
};
