import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

interface ExerciseQaProps {
  questions: ReactNode[];
  answers?: ReactNode[];
  answersHeading?: string;
}

export function ExerciseQa({
  questions,
  answers,
  answersHeading = "Answer key",
}: ExerciseQaProps) {
  return (
    <div className="space-y-5">
      <ol className="space-y-3">
        {questions.map((q, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-500 text-[0.75rem] font-bold text-white shadow-sm shadow-indigo-500/30">
              {i + 1}
            </span>
            <div className="text-[0.95rem] leading-[1.7] text-foreground/90">{q}</div>
          </li>
        ))}
      </ol>
      {answers && (
        <div className="rounded-2xl border border-emerald-300/60 bg-emerald-50/40 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">
          <p className="mb-3 flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            {answersHeading}
          </p>
          <ol className="space-y-2.5">
            {answers.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-600/15 text-[0.7rem] font-bold text-emerald-700 dark:text-emerald-300">
                  {i + 1}
                </span>
                <div className="text-[0.9rem] leading-relaxed text-foreground/85">{a}</div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}