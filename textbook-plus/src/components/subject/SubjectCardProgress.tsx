"use client";

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

interface SubjectProgressProps {
  slug: string;
  total: number;
  color: string;
  name: string;
}

function useDone(slug: string, total: number) {
  const { completed } = useProgress(slug);
  const done = Math.min(completed.length, total);
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  return { done, pct, finished: total > 0 && done >= total };
}

export function SubjectProgressBadge({ slug, total, color }: SubjectProgressProps) {
  const { pct, finished } = useDone(slug, total);
  if (finished) {
    return (
      <Badge className="rounded-full font-bold" style={{ backgroundColor: color }}>
        <Trophy className="h-3 w-3" />
        Done!
      </Badge>
    );
  }
  if (pct > 0) {
    return (
      <Badge variant="secondary" className="rounded-full font-bold">
        {pct}%
      </Badge>
    );
  }
  return null;
}

export function SubjectProgressBar({ slug, total, color, name }: SubjectProgressProps) {
  const { done, pct } = useDone(slug, total);
  return (
    <div className="flex flex-col gap-1.5">
      <Progress
        value={pct}
        aria-label={`${name} progress`}
        className="h-2.5 [&_[data-slot=progress-indicator]]:bg-[var(--bar)]"
        style={{ "--bar": color } as React.CSSProperties}
      />
      <span className="text-xs font-semibold text-muted-foreground">
        {done}/{total} done
      </span>
    </div>
  );
}
