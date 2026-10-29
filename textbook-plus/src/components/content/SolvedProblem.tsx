import type { ReactNode } from "react";

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
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-border px-5 py-3">
        <span className="t-micro tabular-nums">Solved problem {number}</span>
        <span className="min-w-0 text-[0.9375rem] font-medium leading-snug text-foreground">
          {title}
        </span>
      </div>

      <div className="px-5 py-4">
        <p className="t-micro">Question</p>
        <div className="mt-1.5 text-base leading-[1.7] text-foreground">{question}</div>

        {options && (
          <div className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {options.map((o) => (
              <div key={o.label} className="flex items-baseline gap-2.5">
                <span className="t-micro w-4 shrink-0">{o.label}</span>
                <span className="text-base leading-[1.6] text-foreground">{o.text}</span>
              </div>
            ))}
          </div>
        )}

        {given && (
          <div className="mt-4 border-t border-border pt-3">
            <p className="t-micro">Given</p>
            <div className="mt-1.5 text-[0.9375rem] leading-[1.7] text-foreground">{given}</div>
          </div>
        )}

        <div className="mt-4 border-t border-border pt-3">
          <p className="t-micro">Solution</p>
          <div className="mt-1.5 space-y-3 text-base leading-[1.75] text-foreground">
            {solution}
          </div>
        </div>

        {answer && (
          <div className="mt-4 border-l-[3px] border-ok bg-muted px-4 py-3">
            <p className="t-micro">Answer</p>
            <div className="mt-1.5 text-base font-medium leading-[1.7] text-foreground">
              {answer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
