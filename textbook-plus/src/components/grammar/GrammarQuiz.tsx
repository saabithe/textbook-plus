"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

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
      <h3 className="text-lg font-bold">Practice</h3>
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
    <div className="rounded-xl border border-border/60 bg-background p-5">
      <p className="text-sm font-medium text-foreground mb-3">
        <span className="text-muted-foreground mr-2">{index}.</span>
        {q.question}
      </p>

      {q.type === "mcq" && q.options && (
        <div className="space-y-2 mb-4">
          {q.options.map((opt, i) => {
            const isThis = selected === i;
            let ring = "";
            if (revealed && i === q.answer) ring = "border-green-500 bg-green-500/5";
            else if (revealed && isThis && !isCorrect) ring = "border-red-500 bg-red-500/5";
            else if (isThis) ring = "border-primary/50 bg-primary/5";

            return (
              <button
                key={i}
                onClick={() => !revealed && setSelected(i)}
                disabled={revealed}
                className={`w-full text-left rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                  ring || "border-border/40 hover:border-border/80"
                } ${revealed ? "cursor-default" : ""}`}
              >
                <span className="font-medium text-muted-foreground mr-2">
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {q.type === "fill-blank" && (
        <div className="mb-4">
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
            disabled={revealed}
            placeholder="Type your answer…"
            className={`w-full rounded-lg border px-4 py-2.5 text-sm bg-transparent outline-none transition-colors ${
              revealed && isCorrect
                ? "border-green-500"
                : revealed && !isCorrect
                ? "border-red-500"
                : "border-border/60 focus:border-primary/50"
            } ${revealed ? "cursor-default" : ""}`}
          />
        </div>
      )}

      {revealed && (
        <div className={`flex items-start gap-2 text-sm mb-3 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
          {isCorrect ? <Check className="h-4 w-4 mt-0.5 shrink-0" /> : <X className="h-4 w-4 mt-0.5 shrink-0" />}
          <span>{isCorrect ? "Correct!" : q.type === "mcq" ? `Incorrect — the answer is ${String.fromCharCode(65 + (q.answer as number))}.` : `Incorrect — the answer is "${q.answer}".`}</span>
        </div>
      )}

      {revealed && (
        <p className="text-sm text-muted-foreground italic">{q.explanation}</p>
      )}

      <div className="mt-4 flex justify-end">
        {!revealed ? (
          <button
            onClick={handleCheck}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Check
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="rounded-lg border border-border/60 px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
          >
            Try again
          </button>
        )}
      </div>
    </div>
  );
}
