import type { ReactNode } from "react";

interface ProblemInsightSolutionCardProps {
  question?: ReactNode;
  problem?: ReactNode;
  insight?: ReactNode;
  solution: ReactNode;
  title?: string;
}

export function ProblemInsightSolutionCard({
  question,
  problem,
  insight,
  solution,
  title = "Reasoning",
}: ProblemInsightSolutionCardProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-5 py-3">
        <span className="t-micro">{title}</span>
      </div>
      <div className="px-5 py-1">
        {question && <Part label="Question">{question}</Part>}
        {problem && <Part label="Problem">{problem}</Part>}
        {insight && <Part label="Insight">{insight}</Part>}
        <Part label="Solution">{solution}</Part>
      </div>
    </div>
  );
}

function Part({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-b border-border py-3.5 last:border-b-0">
      <p className="t-micro">{label}</p>
      <div className="mt-1.5 text-base leading-[1.7] text-foreground/90">{children}</div>
    </div>
  );
}
