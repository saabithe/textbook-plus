import type { ReactNode } from "react";
import { BookOpen, CheckCircle2, Target } from "lucide-react";

interface SolvedOption {
  label: string;
  text: ReactNode;
}

interface SolvedProblemProps {
  number: number;
  title: string;
  question: ReactNode;
  options?: SolvedOption[];
  given?: ReactNode;
  solution: ReactNode;
  answer?: ReactNode;
}

export function SolvedProblem({
  number,
  title,
  question,
  options,
  given,
  solution,
  answer,
}: SolvedProblemProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
      <div className="flex items-center gap-3 border-b border-border/60 bg-gradient-to-r from-amber-500/[0.09] via-transparent to-transparent px-4 py-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-sm font-bold text-white shadow-sm shadow-amber-500/30">
          {number}
        </span>
        <div className="min-w-0">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-amber-600 dark:text-amber-400">
            Solved problem {number}
          </p>
          <h4 className="truncate text-sm font-extrabold text-foreground">{title}</h4>
        </div>
      </div>
      <div className="space-y-3 px-4 py-4">
        <div className="text-[0.95rem] leading-relaxed text-foreground/90">{question}</div>
        {options && (
          <div className="grid gap-2 sm:grid-cols-2">
            {options.map((o) => (
              <div
                key={o.label}
                className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-muted/40 px-3 py-2"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-card text-xs font-bold text-slate-600 dark:text-slate-300">
                  {o.label}
                </span>
                <span className="text-sm text-foreground/85">{o.text}</span>
              </div>
            ))}
          </div>
        )}
        {given && (
          <div className="flex items-start gap-2 rounded-lg border border-sky-200/70 bg-sky-50/60 px-3 py-2 text-[0.9rem] leading-relaxed text-sky-900 dark:border-sky-900/40 dark:bg-sky-950/40 dark:text-sky-100">
            <Target className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" />
            <span>
              <strong>Given:</strong> {given}
            </span>
          </div>
        )}
        <div className="rounded-xl border border-indigo-200/60 bg-indigo-50/50 px-4 py-3 dark:border-indigo-900/40 dark:bg-indigo-950/30">
          <p className="mb-2 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-indigo-600 dark:text-indigo-400">
            <BookOpen className="h-3.5 w-3.5" />
            Solution
          </p>
          <div className="space-y-3 text-[0.95rem] leading-[1.75] text-foreground/85">
            {solution}
          </div>
        </div>
        {answer && (
          <div className="flex items-center gap-2.5 rounded-xl border border-emerald-300/60 bg-emerald-50/70 px-4 py-2.5 text-[0.95rem] font-bold text-emerald-800 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-200">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>{answer}</span>
          </div>
        )}
      </div>
    </div>
  );
}