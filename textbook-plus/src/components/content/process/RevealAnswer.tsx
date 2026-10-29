"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface RevealAnswerProps {
  title?: string;
  question: React.ReactNode;
  answer: React.ReactNode;
  buttonLabel?: string;
}

export function RevealAnswer({
  title = "Find the missing term",
  question,
  answer,
  buttonLabel = "Reveal",
}: RevealAnswerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-6 rounded-lg border border-border bg-card px-5 py-4">
      <p className="t-micro text-foreground">{title}</p>
      <p className="mt-1.5 text-base leading-[1.7] text-foreground">{question}</p>

      {open ? (
        <div className="mt-4 border-l-[3px] border-ok bg-muted px-4 py-3">
          <p className="t-micro">Answer</p>
          <div className="mt-1.5 text-base font-medium leading-[1.7] text-foreground">
            {answer}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "mt-4 inline-flex items-center gap-2 rounded-[3px] border border-border bg-card px-3 py-2",
            "t-micro text-foreground transition-colors hover:bg-muted",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
        >
          {buttonLabel}
          <ChevronDown className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
