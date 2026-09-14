"use client";

import { useState } from "react";
import { Eye, Sparkles } from "lucide-react";

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
    <div className="my-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.04] p-4 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-extrabold tracking-wide text-emerald-800 dark:text-emerald-200">
        <Sparkles className="h-4 w-4 shrink-0" />
        {title}
      </div>
      <p className="mt-1 text-sm text-foreground/80">{question}</p>
      {open ? (
        <div className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-[0.95rem] font-semibold leading-relaxed text-emerald-900 dark:text-emerald-100">
          {answer}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-3 inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-4 py-2 text-sm font-bold text-emerald-800 transition-colors hover:bg-emerald-500/25 dark:text-emerald-200"
        >
          <Eye className="h-4 w-4" />
          {buttonLabel}
        </button>
      )}
    </div>
  );
}