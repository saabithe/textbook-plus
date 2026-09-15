"use client";

import { ListTree, CircleCheckBig } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { getChaptersBySubject } from "@/data/chapters";
import { StatPill } from "@/components/app/StatPill";
import { ProgressRing } from "@/components/app/ProgressRing";

interface SubjectHeaderStatsProps {
  subjectSlug: string;
  subjectColor: string;
}

export function SubjectHeaderStats({ subjectSlug, subjectColor }: SubjectHeaderStatsProps) {
  const chapters = getChaptersBySubject(subjectSlug);
  const { completed } = useProgress(subjectSlug);
  const total = chapters.length;
  const done = chapters.filter((c) => completed.includes(c.slug)).length;
  const topics = chapters.reduce((n, c) => n + c.topicCount, 0);
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <StatPill icon={<ListTree className="h-3.5 w-3.5" />} value={chapters.length} label="chapters" />
      <StatPill icon={<CircleCheckBig className="h-3.5 w-3.5" />} value={`${done}/${total}`} label="completed" />
      <div className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card px-3 py-1.5 shadow-sm">
        <ProgressRing value={pct} size={34} strokeWidth={3} color={subjectColor}>
          <span className="text-[0.6rem] font-bold tabular-nums text-foreground">{topics}</span>
        </ProgressRing>
        <span className="text-sm font-semibold text-muted-foreground">topics</span>
      </div>
    </div>
  );
}