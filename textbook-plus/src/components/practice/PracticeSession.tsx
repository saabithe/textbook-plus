"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuestionCard } from "./QuestionCard";
import { DifficultyFilter } from "./DifficultyFilter";
import type { Question } from "@/types/chapter";

interface PracticeSessionProps {
  questions: Question[];
  subjectColor: string;
  revealedIds?: string[];
  onQuestionRevealed?: (questionId: string) => void;
}

type Difficulty = "all" | "easy" | "medium" | "hard";

export function PracticeSession({ questions, subjectColor, revealedIds = [], onQuestionRevealed }: PracticeSessionProps) {
  const [difficulty, setDifficulty] = useState<Difficulty>("all");
  const [current, setCurrent] = useState(0);
  const [showList, setShowList] = useState(false);

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
      <div className="text-center py-12 text-muted-foreground">
        No questions available for this difficulty.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Filters */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <DifficultyFilter
          active={difficulty}
          onChange={handleDifficultyChange}
          subjectColor={subjectColor}
          counts={counts}
        />
        <button
          onClick={() => setShowList(!showList)}
          className={cn(
            "flex items-center gap-1.5 rounded-lg border border-border/60 px-3 py-1.5 text-xs font-medium transition-all duration-200",
            showList
              ? "bg-muted text-foreground"
              : "bg-muted/30 text-muted-foreground hover:bg-muted"
          )}
        >
          <List className="h-3.5 w-3.5" />
          {showList ? "Hide list" : "Question list"}
        </button>
      </div>

      {/* Question list (jump to) */}
      {showList && (
        <div className="rounded-xl border border-border/60 bg-card p-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Jump to question
          </p>
          <div className="flex flex-wrap gap-2">
            {filtered.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => {
                  setCurrent(idx);
                  setShowList(false);
                }}
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-all duration-200 border",
                  idx === current
                    ? "text-white border-transparent"
                    : "border-border/60 bg-muted/30 text-muted-foreground hover:bg-muted"
                )}
                style={idx === current ? { backgroundColor: subjectColor } : undefined}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Counter */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Question <span className="font-medium text-foreground">{current + 1}</span> of{" "}
          <span className="font-medium text-foreground">{filtered.length}</span>
        </p>
        <div className="flex items-center gap-1">
          {filtered.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                idx === current ? "w-6" : "w-1.5"
              )}
              style={{
                backgroundColor: idx === current ? subjectColor : "var(--muted)",
              }}
            />
          ))}
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
          onReveal={() => onQuestionRevealed?.(question.id)}
        />
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prev}
          disabled={current === 0}
          className={cn(
            "flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2.5 text-sm font-medium transition-all duration-200",
            current === 0
              ? "text-muted-foreground cursor-not-allowed"
              : "text-foreground hover:bg-muted"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>
        <button
          onClick={next}
          disabled={current === filtered.length - 1}
          className={cn(
            "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-all duration-200",
            current === filtered.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:opacity-90"
          )}
          style={
            current < filtered.length - 1
              ? { backgroundColor: subjectColor }
              : { backgroundColor: subjectColor, opacity: 0.5 }
          }
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
