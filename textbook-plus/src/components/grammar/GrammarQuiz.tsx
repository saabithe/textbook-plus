"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
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
  return (
    <div className="space-y-6 mt-6">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold">Practice</h3>
        <Badge variant="secondary">{questions.length} questions</Badge>
      </div>
      {questions.map((q, i) => (
        <QuizItem key={q.id} question={q} index={i + 1} />
      ))}
    </div>
  );
}

function QuizItem({ question: q, index }: { question: GrammarQuestion; index: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [textInput, setTextInput] = useState("");
  const [revealed, setRevealed] = useState(false);

  const isCorrect = q.type === "mcq"
    ? selected === q.answer
    : textInput.trim().toLowerCase() === (q.answer as string).toLowerCase();

  const handleCheck = () => {
    if (q.type === "mcq" && selected === null) return;
    if (q.type === "fill-blank" && textInput.trim() === "") return;
    setRevealed(true);
  };

  const handleReset = () => {
    setSelected(null);
    setTextInput("");
    setRevealed(false);
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
                    "h-auto w-full justify-start whitespace-normal px-4 py-2.5 text-left text-sm font-normal",
                    revealed && i === q.answer && "border-green-500 bg-green-500/5 hover:bg-green-500/5",
                    revealed && isThis && !isCorrect && "border-red-500 bg-red-500/5 hover:bg-red-500/5",
                    !revealed && isThis && "border-primary/50 bg-primary/5",
                    revealed && "cursor-default"
                  )}
                >
                  <span className="font-medium text-muted-foreground mr-2">
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
              "mb-3",
              isCorrect && "border-green-500/30 text-green-600 dark:text-green-400"
            )}
          >
            {isCorrect ? <Check className="h-4 w-4 shrink-0" /> : <X className="h-4 w-4 shrink-0" />}
            <AlertTitle>
              {isCorrect
                ? "Correct!"
                : q.type === "mcq"
                  ? `Incorrect — the answer is ${String.fromCharCode(65 + (q.answer as number))}.`
                  : `Incorrect — the answer is "${q.answer}".`}
            </AlertTitle>
            <AlertDescription className="italic">{q.explanation}</AlertDescription>
          </Alert>
        )}

        <div className="mt-4 flex justify-end">
          {!revealed ? (
            <Button onClick={handleCheck}>
              Check
            </Button>
          ) : (
            <Button variant="outline" onClick={handleReset}>
              Try again
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
