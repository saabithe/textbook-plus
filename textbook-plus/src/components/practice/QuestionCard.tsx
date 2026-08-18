"use client";

import { useState } from "react";
import { Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Question } from "@/types/chapter";

interface QuestionCardProps {
  question: Question;
  index: number;
  subjectColor: string;
}

export function QuestionCard({ question, index, subjectColor }: QuestionCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const isMCQ = question.type === "mcq";
  const correctIndex = isMCQ ? (question.answer as number) : null;

  function handleSelect(idx: number) {
    if (revealed) return;
    setSelected(idx);
  }

  function handleReveal() {
    setRevealed(true);
  }

  function handleReset() {
    setSelected(null);
    setRevealed(false);
  }

  const difficultyColors = {
    easy: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    hard: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  };

  return (
    <div className="rounded-xl border border-border/60 bg-card p-5 sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold text-white shrink-0"
            style={{ backgroundColor: subjectColor }}
          >
            {index}
          </span>
          <span
            className={cn(
              "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium capitalize",
              difficultyColors[question.difficulty]
            )}
          >
            {question.difficulty}
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {question.type === "mcq" ? "MCQ" : "Short Answer"}
          </span>
        </div>
      </div>

      {/* Question */}
      <p className="text-sm sm:text-base font-medium leading-relaxed mb-4">
        {question.question}
      </p>

      {/* MCQ Options */}
      {isMCQ && question.options && (
        <div className="space-y-2 mb-4">
          {question.options.map((option, idx) => {
            const isSelected = selected === idx;
            const isCorrectOption = idx === correctIndex;
            let optionStyle = "border-border/60 bg-muted/30 hover:bg-muted/60";
            if (revealed) {
              if (isCorrectOption) {
                optionStyle = "border-green-500/40 bg-green-500/10";
              } else if (isSelected && !isCorrectOption) {
                optionStyle = "border-red-500/40 bg-red-500/10";
              } else {
                optionStyle = "border-border/30 bg-muted/10 opacity-60";
              }
            } else if (isSelected) {
              optionStyle = "border-primary/40 bg-primary/10";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={revealed}
                className={cn(
                  "w-full flex items-start gap-3 rounded-lg border p-3 text-left text-sm transition-all duration-200",
                  optionStyle,
                  revealed && "cursor-default"
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium mt-0.5",
                    revealed && isCorrectOption
                      ? "border-green-500 bg-green-500 text-white"
                      : revealed && isSelected && !isCorrectOption
                      ? "border-red-500 bg-red-500 text-white"
                      : isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border"
                  )}
                >
                  {revealed && isCorrectOption ? (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  ) : revealed && isSelected && !isCorrectOption ? (
                    <XCircle className="h-3.5 w-3.5" />
                  ) : (
                    String.fromCharCode(65 + idx)
                  )}
                </span>
                <span className="leading-relaxed">{option}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Short answer */}
      {!isMCQ && (
        <div className="mb-4">
          {revealed ? (
            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
              <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">Answer:</p>
              <p className="text-sm leading-relaxed whitespace-pre-line">{question.answer as string}</p>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border/60 bg-muted/20 p-4">
              <p className="text-sm text-muted-foreground italic">
                Think about your answer, then reveal to check.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Explanation (shown after reveal) */}
      {revealed && (
        <div className="rounded-lg bg-muted/30 border border-border/40 p-4 mb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
            Explanation
          </p>
          <p className="text-sm leading-relaxed">{question.explanation}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2">
        {!revealed ? (
          <button
            onClick={handleReveal}
            disabled={isMCQ && selected === null}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              isMCQ && selected === null
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "text-white hover:opacity-90"
            )}
            style={
              !(isMCQ && selected === null)
                ? { backgroundColor: subjectColor }
                : undefined
            }
          >
            <Eye className="h-4 w-4" />
            Reveal Answer
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200"
          >
            <EyeOff className="h-4 w-4" />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
