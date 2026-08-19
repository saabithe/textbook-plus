import { Wrench } from "lucide-react";

interface ProblemSolutionProps {
  problemNumber: string;
  children: React.ReactNode;
}

function Problem({ children }: { children: React.ReactNode }) {
  return <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>;
}

function Solution({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t border-border/40 mt-4 pt-4">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        Solution
      </span>
      <div className="text-sm leading-relaxed text-muted-foreground mt-3">
        {children}
      </div>
    </div>
  );
}

export function ProblemSolution({ problemNumber, children }: ProblemSolutionProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10">
          <Wrench className="h-3.5 w-3.5 text-primary" />
        </div>
        <span className="text-sm font-semibold">Problem {problemNumber}</span>
      </div>
      {children}
    </div>
  );
}

ProblemSolution.Problem = Problem;
ProblemSolution.Solution = Solution;
