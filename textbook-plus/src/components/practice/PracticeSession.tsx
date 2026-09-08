"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuestionCard } from "./QuestionCard";
import { DifficultyFilter } from "./DifficultyFilter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
        <Button
          variant={showList ? "secondary" : "outline"}
          size="sm"
          onClick={() => setShowList(!showList)}
        >
          <List className="h-3.5 w-3.5" />
          {showList ? "Hide list" : "Question list"}
        </Button>
      </div>

      {/* Question list (jump to) */}
      {showList && (
        <Card className="p-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Jump to question
          </p>
          <div className="flex flex-wrap gap-2">
            {filtered.map((q, idx) => (
              <Button
                key={q.id}
                variant={idx === current ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setCurrent(idx);
                  setShowList(false);
                }}
                className="h-9 w-9 rounded-lg px-0"
                style={idx === current ? { backgroundColor: subjectColor } : undefined}
                aria-label={`Go to question ${idx + 1}`}
                aria-current={idx === current}
              >
                {idx + 1}
              </Button>
            ))}
          </div>
        </Card>
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
        <Button
          variant="outline"
          onClick={prev}
          disabled={current === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button
          onClick={next}
          disabled={current === filtered.length - 1}
          style={{ backgroundColor: subjectColor }}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
