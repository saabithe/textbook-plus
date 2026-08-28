import { Wrench, FlaskConical } from "lucide-react";

interface ProblemSolutionProps {
  problemNumber: string;
  children: React.ReactNode;
}

function Problem({ children }: { children: React.ReactNode }) {
  return <div className="text-[0.95rem] leading-relaxed text-foreground/85">{children}</div>;
}

function Solution({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 -mx-5 -mb-4 px-5 py-4 bg-blue-500/[0.04] dark:bg-blue-500/[0.06] border-t border-blue-500/10 rounded-b-xl">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-bold tracking-[0.12em] text-emerald-700 dark:text-emerald-400 uppercase">
          Solution
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent ml-2" />
      </div>
      <div className="text-sm leading-relaxed text-foreground/80">
        {children}
      </div>
    </div>
  );
}

export function ProblemSolution({ problemNumber, children }: ProblemSolutionProps) {
  const isExample = problemNumber.toLowerCase().includes("example");
  return (
    <div className="rounded-xl border border-blue-500/15 bg-card overflow-hidden my-6 shadow-sm">
      <div className="flex items-center gap-2.5 px-5 py-3 bg-blue-500/[0.06] dark:bg-blue-500/[0.08] border-b border-blue-500/10">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/15 dark:bg-blue-500/20 ring-1 ring-blue-500/15">
          {isExample ? <FlaskConical className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" /> : <Wrench className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />}
        </span>
        <span className="text-sm font-semibold tracking-tight text-blue-900 dark:text-blue-100">Problem {problemNumber}</span>
        <span className="ml-auto text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-500 text-white">
          {isExample ? "EXAMPLE" : "PROBLEM"}
        </span>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

ProblemSolution.Problem = Problem;
ProblemSolution.Solution = Solution;
