import type { ReactNode } from "react";

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
      <ol className="divide-y divide-border">
        {questions.map((q, i) => (
          <li key={i} className="flex gap-3 py-2.5 first:pt-0 last:pb-0">
            <span className="t-micro w-5 shrink-0 pt-1 tabular-nums">{i + 1}</span>
            <div className="text-base leading-[1.7] text-foreground">{q}</div>
          </li>
        ))}
      </ol>

      {answers && (
        <div className="border-l-[3px] border-ok bg-muted px-4 py-3">
          <div className="flex items-baseline justify-between gap-3">
            <p className="t-micro">{answersHeading}</p>
            <p className="t-micro tabular-nums">
              {answers.length} answer{answers.length === 1 ? "" : "s"}
            </p>
          </div>
          <ol className="mt-2.5 divide-y divide-border">
            {answers.map((a, i) => (
              <li key={i} className="flex gap-3 py-2 first:pt-0 last:pb-0">
                <span className="t-micro w-5 shrink-0 pt-1 tabular-nums">{i + 1}</span>
                <div className="text-[0.9375rem] leading-[1.7] text-foreground">{a}</div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
