"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, CheckCircle2, XCircle, PartyPopper, Trophy } from "lucide-react";
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

  const praiseOptions = ["Brilliant!", "Nailed it!", "Nicely done!"];
  const praise = praiseOptions[index % praiseOptions.length];
  const PraiseIcon = index % 2 === 0 ? Trophy : PartyPopper;

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
            let optionStyle = "border-2 hover:bg-muted/60 active:translate-y-0.5";
            if (revealed) {
              if (isCorrectOption) {
                optionStyle = "border-2 border-green-600 bg-green-500 text-white hover:bg-green-500 hover:text-white active:translate-y-0.5";
              } else if (isSelected && !isCorrectOption) {
                optionStyle = "border-2 border-red-600 bg-red-500 text-white hover:bg-red-500 hover:text-white active:translate-y-0.5";
              } else {
                optionStyle = "border-2 opacity-60";
              }
            } else if (isSelected) {
              optionStyle = "border-2 border-primary/50 bg-primary/10 active:translate-y-0.5";
            }

            return (
              <Button
                key={idx}
                variant="outline"
                onClick={() => handleSelect(idx)}
                disabled={revealed}
                className={cn(
                  "h-auto w-full items-start justify-start gap-3 rounded-2xl p-3 text-left font-bold whitespace-normal disabled:opacity-100",
                  optionStyle,
                  revealed && "cursor-default"
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold mt-0.5",
                    revealed && isCorrectOption
                      ? "border-white bg-white/20 text-white"
                      : revealed && isSelected && !isCorrectOption
                      ? "border-white bg-white/20 text-white"
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

      {/* Celebration / encouragement feedback (MCQ only) */}
      {revealed && isMCQ && selected !== null && selected === correctIndex && (
        <Alert className="mb-4 border-2 border-green-600/40 bg-green-500/15 p-4">
          <PraiseIcon className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
          <AlertTitle className="font-extrabold text-green-700 dark:text-green-300">
            {praise} You got it!
          </AlertTitle>
          <AlertDescription className="font-semibold text-green-700/80 dark:text-green-300/80">
            Keep the streak going.
          </AlertDescription>
        </Alert>
      )}
      {revealed && isMCQ && selected !== null && selected !== correctIndex && (
        <Alert className="mb-4 border-2 border-red-600/40 bg-red-500/10 p-4">
          <XCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
          <AlertTitle className="font-extrabold text-red-700 dark:text-red-300">
            Not quite — try again!
          </AlertTitle>
          <AlertDescription className="font-semibold text-red-700/80 dark:text-red-300/80">
            Check the correct answer below, then give it another shot.
          </AlertDescription>
        </Alert>
      )}

      {/* Short answer */}
      {!isMCQ && (
        <div className="mb-4">
          {revealed ? (
            <Alert className="border-2 border-green-600/30 bg-green-500/10 p-4">
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
        <Alert className="mb-4 border-2 border-amber-500/30 bg-amber-500/10 p-4">
          <AlertTitle className="text-xs font-extrabold text-amber-700 dark:text-amber-300 uppercase tracking-wide">
            Explanation
          </AlertTitle>
          <AlertDescription className="text-foreground font-medium leading-relaxed">{question.explanation}</AlertDescription>
        </Alert>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2">
        {!revealed ? (
          <Button
            onClick={handleReveal}
            disabled={isMCQ && selected === null}
            size="lg"
            className="rounded-2xl font-extrabold"
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
          <Button variant="outline" size="lg" onClick={handleReset} className="rounded-2xl border-2 font-extrabold">
            <EyeOff className="h-4 w-4" />
            Try Again
          </Button>
        )}
      </div>
    </Card>
  );
}
