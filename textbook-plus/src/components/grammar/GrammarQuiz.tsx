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
  explanation: string;
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
        <Badge variant="secondary" className="rounded-full font-bold">{questions.length} questions</Badge>
        <Badge variant="secondary" className="gap-1.5 rounded-full border-2 font-extrabold">
          <Trophy className="h-3.5 w-3.5" />
          Score {score}/{questions.length}
        </Badge>
      </div>
      {allAnswered && (
        <Alert className="border-2 border-green-600/40 bg-green-500/10 p-4">
          <Trophy className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
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
    : textInput.trim().toLowerCase() === (q.answer as string).toLowerCase();

  const handleCheck = () => {
    if (q.type === "mcq" && selected === null) return;
    if (q.type === "fill-blank" && textInput.trim() === "") return;
    const correct = q.type === "mcq"
      ? selected === q.answer
      : textInput.trim().toLowerCase() === (q.answer as string).toLowerCase();
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
    <Card className="border border-border/60 bg-background py-0 ring-0">
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
                    "h-auto w-full justify-start whitespace-normal rounded-2xl border-2 px-4 py-2.5 text-left text-sm font-bold active:translate-y-0.5",
                    revealed && i === q.answer && "border-green-600 bg-green-500 text-white hover:bg-green-500 hover:text-white",
                    revealed && isThis && !isCorrect && "border-red-600 bg-red-500 text-white hover:bg-red-500 hover:text-white",
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
              "mb-3 border-2",
              isCorrect && "border-green-600/40 bg-green-500/10 text-green-600 dark:text-green-400"
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
            <Button size="lg" onClick={handleCheck} className="rounded-2xl font-extrabold">
              <Check className="h-4 w-4" />
              Check
            </Button>
          ) : (
            <Button variant="outline" size="lg" onClick={handleReset} className="rounded-2xl border-2 font-extrabold">
              Try again
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
