"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, List, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuestionCard } from "./QuestionCard";
import { DifficultyFilter } from "./DifficultyFilter";
import { Button } from "@/components/ui/button";
import type { Question } from "@/types/chapter";

interface PracticeSessionProps {
  questions: Question[];
  subjectColor: string;
}

type Difficulty = "all" | "easy" | "medium" | "hard";

export function PracticeSession({ questions, subjectColor }: PracticeSessionProps) {
  const [difficulty, setDifficulty] = useState<Difficulty>("all");
  const [current, setCurrent] = useState(0);
  const [showList, setShowList] = useState(false);
  // Session-only: which questions have been revealed in this visit.
  const [revealedIds, setRevealedIds] = useState<string[]>([]);

  const filtered = useMemo(() => {
    if (difficulty === "all") return questions;
    return questions.filter((q) => q.difficulty === difficulty);
  }, [questions, difficulty]);

  const counts = useMemo(
    () => ({
      all: questions.length,
      easy: questions.filter((q) => q.difficulty === "easy").length,
      medium: questions.filter((q) => q.difficulty === "medium").length,
      hard: questions.filter((q) => q.difficulty === "hard").length,
    }),
    [questions]
  );

  const question = filtered[current];

  const allRevealed = questions.length > 0 && revealedIds.length >= questions.length;

  function handleDifficultyChange(d: Difficulty) {
    setDifficulty(d);
    setCurrent(0);
  }

  function prev() {
    setCurrent((c) => Math.max(0, c - 1));
  }

  function next() {
    setCurrent((c) => Math.min(filtered.length - 1, c + 1));
  }

  if (filtered.length === 0) {
    return (
      <div className="py-12 text-center text-[15px] text-muted-foreground">
        No questions available for this difficulty.
      </div>
    );
  }

  const progressPct = ((current + 1) / filtered.length) * 100;

  return (
    <div className="space-y-6">
      {/* Completion — hairline panel, ink rule, no celebration */}
      {allRevealed && (
        <div className="border-l-[3px] border-l-foreground bg-muted/40 px-4 py-3">
          <div className="mb-1 flex items-center gap-2">
            <Trophy className="h-4 w-4 text-muted-foreground" aria-hidden />
            <p className="t-micro">Complete</p>
          </div>
          <p className="text-[15px] font-medium leading-[1.6] text-foreground">
            You revealed all {questions.length} {questions.length === 1 ? "question" : "questions"}.
          </p>
          <p className="text-[15px] leading-[1.6] text-muted-foreground">
            Review the list or run through them again.
          </p>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <DifficultyFilter
          active={difficulty}
          onChange={handleDifficultyChange}
          subjectColor={subjectColor}
          counts={counts}
        />
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowList(!showList)}
        >
          <List className="h-3.5 w-3.5" aria-hidden />
          {showList ? "Hide list" : "Question list"}
        </Button>
      </div>

      {/* Question list (jump to) */}
      {showList && (
        <div className="rounded-lg border border-border bg-card px-4 py-4">
          <p className="t-micro mb-3">Jump to question</p>
          <div className="flex flex-wrap gap-2">
            {filtered.map((q, idx) => (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  setCurrent(idx);
                  setShowList(false);
                }}
                className={cn(
                  "h-8 w-8 rounded-[3px] border text-[13px] font-semibold tabular-nums transition-colors duration-[120ms] ease-[var(--ease-blueprint)]",
                  idx === current
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:bg-foreground/[0.03] hover:text-foreground"
                )}
                aria-label={`Go to question ${idx + 1}`}
                aria-current={idx === current}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Counter + 2px ink progress */}
      <div className="space-y-2">
        <div className="flex items-baseline justify-between gap-4">
          <p className="t-micro tabular-nums">
            Question {current + 1} / {filtered.length}
          </p>
          <p className="t-micro tabular-nums">
            Revealed {revealedIds.length} / {questions.length}
          </p>
        </div>
        <div
          className="h-0.5 w-full bg-muted"
          role="progressbar"
          aria-label="Question progress"
          aria-valuemin={0}
          aria-valuemax={filtered.length}
          aria-valuenow={current + 1}
        >
          <div
            className="h-0.5 bg-foreground transition-[width] duration-[180ms] ease-[var(--ease-blueprint)]"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Question */}
      {question && (
        <QuestionCard
          key={question.id}
          question={question}
          index={current + 1}
          subjectColor={subjectColor}
          isRevealed={revealedIds.includes(question.id)}
          onReveal={() =>
            setRevealedIds((p) => (p.includes(question.id) ? p : [...p, question.id]))
          }
        />
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        <Button variant="outline" onClick={prev} disabled={current === 0}>
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Previous
        </Button>
        <Button onClick={next} disabled={current === filtered.length - 1}>
          Next
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </div>
  );
}
