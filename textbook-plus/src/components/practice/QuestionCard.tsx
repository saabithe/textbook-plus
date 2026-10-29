"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Question } from "@/types/chapter";

interface QuestionCardProps {
  question: Question;
  index: number;
  subjectColor: string;
  isRevealed?: boolean;
  onReveal?: () => void;
}

export function QuestionCard({ question, index, subjectColor, isRevealed = false, onReveal }: QuestionCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(isRevealed);

  const praiseOptions = ["Brilliant!", "Nailed it!", "Nicely done!"];
  const praise = praiseOptions[index % praiseOptions.length];

  // Sync when navigating to a different question that was already revealed
  useEffect(() => {
    setRevealed(isRevealed);
    setSelected(null);
  }, [question.id, isRevealed]);

  const isMCQ = question.type === "mcq";
  const correctIndex = isMCQ ? (question.answer as number) : null;

  function handleSelect(idx: number) {
    if (revealed) return;
    setSelected(idx);
  }

  function handleReveal() {
    setRevealed(true);
    onReveal?.();
  }

  function handleReset() {
    setSelected(null);
    setRevealed(false);
  }

  return (
    <div className="rounded-lg border border-border bg-card">
      {/* Header strip — a label, not a heading */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-border px-5 py-3">
        <span className="t-micro tabular-nums" style={{ color: subjectColor }}>
          {String(index).padStart(2, "0")}
        </span>
        <span className="t-micro text-border" aria-hidden>
          ·
        </span>
        <span className="t-micro">{question.difficulty}</span>
        <span className="t-micro text-border" aria-hidden>
          ·
        </span>
        <span className="t-micro">{question.type === "mcq" ? "MCQ" : "Short Answer"}</span>
      </div>

      <div className="px-5 py-5">
        {/* Question */}
        <p className="mb-5 text-[17px] font-medium leading-[1.65] text-foreground">
          {question.question}
        </p>

        {/* MCQ Options — rows separated by hairlines, never cards */}
        {isMCQ && question.options && (
          <div className="mb-5 border-y border-border">
            {question.options.map((option, idx) => {
              const isSelected = selected === idx;
              const isCorrectOption = idx === correctIndex;
              const isWrongOption = revealed && isSelected && !isCorrectOption;
              const isCorrectState = revealed && isCorrectOption;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  disabled={revealed}
                  aria-pressed={isSelected}
                  className={cn(
                    "flex w-full items-start gap-3 border-l-[3px] border-l-transparent px-3 py-3 text-left",
                    "transition-colors duration-[120ms] ease-[var(--ease-blueprint)]",
                    "[&+&]:border-t [&+&]:border-t-border",
                    !revealed && "hover:bg-muted/60",
                    revealed && isCorrectState && "font-medium",
                    revealed && !isCorrectState && !isWrongOption && "text-muted-foreground",
                    revealed && "cursor-default"
                  )}
                  style={
                    isCorrectState
                      ? {
                          borderLeftColor: "var(--ok)",
                          backgroundColor: "color-mix(in srgb, var(--ok) 6%, transparent)",
                          color: "var(--ok)",
                        }
                      : isWrongOption
                        ? {
                            borderLeftColor: "var(--bad)",
                            backgroundColor: "color-mix(in srgb, var(--bad) 6%, transparent)",
                            color: "var(--bad)",
                          }
                        : isSelected
                          ? {
                              borderLeftColor: subjectColor,
                              backgroundColor: `color-mix(in srgb, ${subjectColor} 6%, transparent)`,
                            }
                          : undefined
                  }
                >
                  <span
                    className={cn(
                      "mt-0.5 inline-flex w-5 shrink-0 justify-center text-[13px] font-bold tabular-nums",
                      isCorrectState || isWrongOption || isSelected
                        ? "text-current"
                        : "text-muted-foreground"
                    )}
                  >
                    {isCorrectState ? (
                      <CheckCircle2 className="h-4 w-4" aria-hidden />
                    ) : isWrongOption ? (
                      <XCircle className="h-4 w-4" aria-hidden />
                    ) : (
                      String.fromCharCode(65 + idx)
                    )}
                  </span>
                  <span className="text-[15px] leading-[1.6]">{option}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Short answer */}
        {!isMCQ && (
          <div className="mb-5">
            {revealed ? (
              <div className="border-l-[3px] border-l-[color:var(--ok)] bg-muted/40 px-4 py-3">
                <p className="t-micro mb-2">Answer</p>
                <p className="whitespace-pre-line text-[15px] leading-[1.7] text-foreground">
                  {question.answer as string}
                </p>
              </div>
            ) : (
              <div className="border border-dashed border-border px-4 py-3">
                <p className="text-[15px] italic text-muted-foreground">
                  Think about your answer, then reveal to check.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Verdict + explanation */}
        {revealed && (
          <div className="mb-5 border-t border-border pt-4">
            {isMCQ && selected !== null && (
              <div className="mb-3 flex items-start gap-2">
                {selected === correctIndex ? (
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--ok)" }}
                    aria-hidden
                  />
                ) : (
                  <XCircle
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--bad)" }}
                    aria-hidden
                  />
                )}
                <p
                  className="text-[15px] font-medium leading-[1.6]"
                  style={{ color: selected === correctIndex ? "var(--ok)" : "var(--bad)" }}
                >
                  {selected === correctIndex
                    ? `${praise} You got it.`
                    : "Not quite — check the correct answer above, then give it another shot."}
                </p>
              </div>
            )}
            <p className="t-micro mb-1.5">Explanation</p>
            <p className="text-[15px] leading-[1.7] text-foreground/90">{question.explanation}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          {!revealed ? (
            <Button onClick={handleReveal} disabled={isMCQ && selected === null}>
              <Eye className="h-4 w-4" aria-hidden />
              Reveal Answer
            </Button>
          ) : (
            <Button variant="outline" onClick={handleReset}>
              <EyeOff className="h-4 w-4" aria-hidden />
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
