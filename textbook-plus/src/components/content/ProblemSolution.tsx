import { Wrench, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ProblemSolutionProps {
  problemNumber: string;
  children: React.ReactNode;
}

function Problem({ children }: { children: React.ReactNode }) {
  return <div className="text-[0.95rem] leading-relaxed text-foreground/85">{children}</div>;
}

function Solution({ children }: { children: React.ReactNode }) {
  return (
    <div className="-mx-5 -mb-4 mt-4 bg-blue-500/[0.04] dark:bg-blue-500/[0.06] rounded-b-2xl">
      <Separator className="bg-blue-500/10" />
      <div className="px-5 py-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-extrabold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">
            Solution
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent ml-2" />
        </div>
        <div className="text-sm leading-relaxed text-foreground/80">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ProblemSolution({ problemNumber, children }: ProblemSolutionProps) {
  const isExample = problemNumber.toLowerCase().includes("example");
  return (
    <Card className={cn("my-6 gap-0 overflow-hidden rounded-2xl border-blue-500/15 bg-card py-0 shadow-sm")}>
      <div className="flex items-center gap-2.5 px-5 py-3 bg-blue-500/[0.06] dark:bg-blue-500/[0.08] border-b border-blue-500/10">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 shadow-sm shadow-blue-500/30">
          {isExample ? <FlaskConical className="h-4 w-4 text-white" /> : <Wrench className="h-4 w-4 text-white" />}
        </span>
        <span className="text-sm font-extrabold tracking-wide text-blue-900 dark:text-blue-100">Problem {problemNumber}</span>
        <Badge className="ml-auto bg-blue-500 px-1.5 py-0.5 text-xs font-extrabold tracking-widest text-white hover:bg-blue-500/90 dark:bg-blue-500 dark:text-white">
          {isExample ? "EXAMPLE" : "PROBLEM"}
        </Badge>
      </div>
      <CardContent className="px-5 py-4">{children}</CardContent>
    </Card>
  );
}

ProblemSolution.Problem = Problem;
ProblemSolution.Solution = Solution;
