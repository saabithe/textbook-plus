"use client";

import { useState } from "react";
import { Check, X, Trophy, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export interface GrammarQuestion {
  id: string;
  type: "mcq" | "fill-blank";
  question: string;
  options?: string[];
  answer: number | string;
  /** Extra acceptable fill-blank answers (the model answer in `answer` is always accepted). */
  accepted?: string[];
  explanation: string;
}

/** Normalise a typed answer so harmless differences don't mark it wrong. */
function normalise(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[.!?,;]+$/g, "");
}

function matchFill(input: string, q: GrammarQuestion): boolean {
  const guess = normalise(input);
  if (!guess) return false;
  const answers = [q.answer as string, ...(q.accepted ?? [])].map(normalise);
  return answers.includes(guess);
}

interface GrammarQuizProps {
  questions: GrammarQuestion[];
}

export function GrammarQuiz({ questions }: GrammarQuizProps) {
  const [results, setResults] = useState<Record<string, boolean>>({});

  const answeredCount = Object.keys(results).length;
  const score = Object.values(results).filter(Boolean).length;
  const allAnswered = questions.length > 0 && answeredCount >= questions.length;

  function handleResult(id: string, correct: boolean) {
    setResults((prev) => (prev[id] === correct ? prev : { ...prev, [id]: correct }));
  }

  function handleRetry(id: string) {
    setResults((prev) => {
      if (!(id in prev)) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  return (
    <div className="space-y-6 mt-6">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="text-lg font-extrabold">Practice</h3>
        <Badge variant="secondary" className="rounded-[3px] font-bold">{questions.length} questions</Badge>
        <Badge variant="secondary" className="gap-1.5 rounded-[3px] border font-extrabold">
          <Trophy className="h-3.5 w-3.5" />
          Score {score}/{questions.length}
        </Badge>
      </div>
      {allAnswered && (
        <Alert className="border border-border bg-muted p-4">
          <Trophy className="h-5 w-5 shrink-0 text-ok" />
          <AlertTitle className="font-extrabold text-green-700 dark:text-green-300">
            Quiz complete! You scored {score} out of {questions.length}.
          </AlertTitle>
          <AlertDescription className="font-semibold text-green-700/80 dark:text-green-300/80">
            {score === questions.length
              ? "Flawless victory — brilliant work!"
              : "Nice effort — review the ones you missed and try again."}
          </AlertDescription>
        </Alert>
      )}
      {questions.map((q, i) => (
        <QuizItem
          key={q.id}
          question={q}
          index={i + 1}
          onResult={handleResult}
          onRetry={handleRetry}
        />
      ))}
    </div>
  );
}

function QuizItem({ question: q, index, onResult, onRetry }: { question: GrammarQuestion; index: number; onResult: (id: string, correct: boolean) => void; onRetry: (id: string) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [textInput, setTextInput] = useState("");
  const [revealed, setRevealed] = useState(false);

  const praiseOptions = ["Brilliant!", "Nailed it!", "Nicely done!"];
  const praise = praiseOptions[index % praiseOptions.length];
  const PraiseIcon = index % 2 === 0 ? Trophy : PartyPopper;

  const isCorrect = q.type === "mcq"
    ? selected === q.answer
    : matchFill(textInput, q);

  const handleCheck = () => {
    if (q.type === "mcq" && selected === null) return;
    if (q.type === "fill-blank" && textInput.trim() === "") return;
    const correct = q.type === "mcq"
      ? selected === q.answer
      : matchFill(textInput, q);
    setRevealed(true);
    onResult(q.id, correct);
  };

  const handleReset = () => {
    setSelected(null);
    setTextInput("");
    setRevealed(false);
    onRetry(q.id);
  };

  return (
    <Card className="border border-border/60 bg-background py-0">
      <CardContent className="px-5 py-5">
        <p className="text-sm font-medium text-foreground mb-3">
          <span className="text-muted-foreground mr-2">{index}.</span>
          {q.question}
        </p>

        {q.type === "mcq" && q.options && (
          <div className="space-y-2 mb-4">
            {q.options.map((opt, i) => {
              const isThis = selected === i;

              return (
                <Button
                  key={i}
                  variant="outline"
                  onClick={() => !revealed && setSelected(i)}
                  disabled={revealed}
                  className={cn(
                    "h-auto w-full justify-start whitespace-normal rounded-lg border px-4 py-2.5 text-left text-sm font-bold ",
                    revealed && i === q.answer && "border-ok bg-muted font-medium",
                    revealed && isThis && !isCorrect && "border-bad bg-muted font-medium",
                    !revealed && isThis && "border-primary/50 bg-primary/5",
                    revealed && "cursor-default"
                  )}
                >
                  <span className={cn(
                    "font-extrabold mr-2",
                    revealed && (i === q.answer || (isThis && !isCorrect))
                      ? "text-white"
                      : "text-muted-foreground"
                  )}>
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {opt}
                </Button>
              );
            })}
          </div>
        )}

        {q.type === "fill-blank" && (
          <div className="mb-4 space-y-2">
            <Label htmlFor={`grammar-${q.id}`}>Your answer</Label>
            <Input
              id={`grammar-${q.id}`}
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCheck()}
              disabled={revealed}
              placeholder="Type your answer…"
              className={cn(
                revealed && isCorrect && "border-green-500",
                revealed && !isCorrect && "border-red-500"
              )}
            />
          </div>
        )}

        {revealed && (
          <Alert
            variant={isCorrect ? "default" : "destructive"}
            className={cn(
              "mb-3 border",
              isCorrect && "border-border bg-muted text-ok"
            )}
          >
            {isCorrect ? <PraiseIcon className="h-5 w-5 shrink-0" /> : <X className="h-4 w-4 shrink-0" />}
            <AlertTitle className="font-extrabold">
              {isCorrect
                ? `${praise} You got it!`
                : q.type === "mcq"
                  ? `Not quite — try again! The answer is ${String.fromCharCode(65 + (q.answer as number))}.`
                  : `Not quite — try again! The answer is "${q.answer}".`}
            </AlertTitle>
            <AlertDescription className="font-medium italic">{q.explanation}</AlertDescription>
          </Alert>
        )}

        <div className="mt-4 flex justify-end">
          {!revealed ? (
            <Button size="lg" onClick={handleCheck} className="rounded-lg font-extrabold">
              <Check className="h-4 w-4" />
              Check
            </Button>
          ) : (
            <Button variant="outline" size="lg" onClick={handleReset} className="rounded-lg border font-extrabold">
              Try again
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
