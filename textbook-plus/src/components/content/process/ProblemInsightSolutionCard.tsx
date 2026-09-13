import type { ReactNode } from "react";
import { CircleAlert, Lightbulb, CheckCircle2, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface Stage {
  text: ReactNode;
}

interface ProblemInsightSolutionCardProps {
  question?: ReactNode;
  problem?: ReactNode;
  insight?: ReactNode;
  solution: ReactNode;
  title?: string;
}

const stageStyles = {
  question: {
    chip: "bg-blue-500/12 text-blue-600 dark:text-blue-400 border-blue-500/30",
    Icon: HelpCircle,
    label: "Question",
  },
  problem: {
    chip: "bg-rose-500/12 text-rose-600 dark:text-rose-400 border-rose-500/30",
    Icon: CircleAlert,
    label: "Problem",
  },
  insight: {
    chip: "bg-amber-500/12 text-amber-700 dark:text-amber-300 border-amber-500/30",
    Icon: Lightbulb,
    label: "Insight",
  },
  solution: {
    chip: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
    Icon: CheckCircle2,
    label: "Solution",
  },
} as const;

export function ProblemInsightSolutionCard({
  question,
  problem,
  insight,
  solution,
  title = "Reasoning",
}: ProblemInsightSolutionCardProps) {
  return (
    <Card className="my-6 gap-0 overflow-hidden rounded-2xl border-border/60 bg-card py-0 shadow-sm">
      <div className="flex items-center gap-2.5 px-5 py-3 bg-muted/30">
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 text-white">
          <Lightbulb className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-foreground">{title}</span>
      </div>
      <CardContent className="px-5 py-4 space-y-3">
        {question && (
          <StageRow stage="question" {...stageStyles.question}>
            {question}
          </StageRow>
        )}
        {problem && (
          <StageRow stage="problem" {...stageStyles.problem}>
            {problem}
          </StageRow>
        )}
        {insight && (
          <StageRow stage="insight" {...stageStyles.insight}>
            {insight}
          </StageRow>
        )}
        <StageRow stage="solution" {...stageStyles.solution}>
          {solution}
        </StageRow>
      </CardContent>
    </Card>
  );
}

function StageRow({
  stage,
  chip,
  Icon,
  label,
  children,
}: {
  stage: "question" | "problem" | "insight" | "solution";
  chip: string;
  Icon: React.ElementType;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex gap-3")}>
      <div className="flex flex-col items-center">
        <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border", chip)}>
          <Icon className="h-4 w-4" />
        </span>
        {stage !== "solution" && <div className="w-px flex-1 bg-border/60 my-1" />}
      </div>
      <div className="pb-4 pt-1 min-w-0 flex-1">
        <span className={cn("inline-block px-2 py-0.5 rounded-full border text-xs font-extrabold uppercase tracking-wider mb-1.5", chip)}>
          {label}
        </span>
        <div className="text-[0.95rem] leading-[1.75] text-foreground/85">{children}</div>
      </div>
    </div>
  );
}