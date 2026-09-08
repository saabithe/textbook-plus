"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
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

  const difficultyColors = {
    easy: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    medium: "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    hard: "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400",
  };

  return (
    <Card className="p-5 sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold text-white shrink-0"
            style={{ backgroundColor: subjectColor }}
          >
            {index}
          </span>
          <Badge
            variant="outline"
            className={cn("capitalize", difficultyColors[question.difficulty])}
          >
            {question.difficulty}
          </Badge>
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
            let optionStyle = "hover:bg-muted/60";
            if (revealed) {
              if (isCorrectOption) {
                optionStyle = "border-green-500/40 bg-green-500/10";
              } else if (isSelected && !isCorrectOption) {
                optionStyle = "border-red-500/40 bg-red-500/10";
              } else {
                optionStyle = "opacity-60";
              }
            } else if (isSelected) {
              optionStyle = "border-primary/40 bg-primary/10";
            }

            return (
              <Button
                key={idx}
                variant="outline"
                onClick={() => handleSelect(idx)}
                disabled={revealed}
                className={cn(
                  "h-auto w-full items-start justify-start gap-3 p-3 text-left whitespace-normal disabled:opacity-100",
                  optionStyle,
                  revealed && "cursor-default"
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium mt-0.5",
                    revealed && isCorrectOption
                      ? "border-green-700 bg-green-700 text-white"
                      : revealed && isSelected && !isCorrectOption
                      ? "border-red-600 bg-red-600 text-white"
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
              </Button>
            );
          })}
        </div>
      )}

      {/* Short answer */}
      {!isMCQ && (
        <div className="mb-4">
          {revealed ? (
            <Alert className="border-green-500/30 bg-green-500/5 p-4">
              <AlertTitle className="text-green-700 dark:text-green-300">Answer:</AlertTitle>
              <AlertDescription className="text-foreground leading-relaxed whitespace-pre-line">{question.answer as string}</AlertDescription>
            </Alert>
          ) : (
            <Alert className="border-dashed bg-muted/20 p-4">
              <AlertDescription className="italic">
                Think about your answer, then reveal to check.
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}

      {/* Explanation (shown after reveal) */}
      {revealed && (
        <Alert className="border-border/40 bg-muted/30 p-4 mb-4">
          <AlertTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Explanation
          </AlertTitle>
          <AlertDescription className="text-foreground leading-relaxed">{question.explanation}</AlertDescription>
        </Alert>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2">
        {!revealed ? (
          <Button
            onClick={handleReveal}
            disabled={isMCQ && selected === null}
            style={
              !(isMCQ && selected === null)
                ? { backgroundColor: subjectColor }
                : undefined
            }
          >
            <Eye className="h-4 w-4" />
            Reveal Answer
          </Button>
        ) : (
          <Button variant="outline" onClick={handleReset}>
            <EyeOff className="h-4 w-4" />
            Try Again
          </Button>
        )}
      </div>
    </Card>
  );
}
