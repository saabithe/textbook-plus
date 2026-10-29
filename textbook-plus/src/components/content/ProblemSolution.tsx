import { Separator } from "@/components/ui/separator";

interface ProblemSolutionProps {
  problemNumber: string;
  children: React.ReactNode;
}

function Problem({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="t-micro">Question</p>
      <div className="mt-1.5 text-base leading-[1.7] text-foreground">{children}</div>
    </div>
  );
}

function Solution({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Separator className="my-4" />
      <div className="border-l-[3px] border-ok bg-muted px-4 py-3">
        <p className="t-micro">Solution</p>
        <div className="mt-1.5 text-base leading-[1.7] text-foreground">{children}</div>
      </div>
    </>
  );
}

export function ProblemSolution({ problemNumber, children }: ProblemSolutionProps) {
  const isExample = problemNumber.toLowerCase().includes("example");
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline gap-2.5 border-b border-border px-5 py-3">
        <span className="t-micro tabular-nums">
          {isExample ? "Example" : "Problem"} {problemNumber}
        </span>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

ProblemSolution.Problem = Problem;
ProblemSolution.Solution = Solution;
