"use client";

import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { chapters } from "@/data/chapters";
import type { Subject } from "@/data/subjects";

interface SubjectProgressProps {
  subject: Subject;
  completedSlugs: string[];
}

export function SubjectProgress({ subject, completedSlugs }: SubjectProgressProps) {
  const subjectChapters = chapters[subject.slug] ?? [];
  const completedCount = completedSlugs.length;
  const totalCount = subjectChapters.length;
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <Card className="border border-border/60 py-0 ring-0">
      <CardContent className="px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: subject.colorLight }}
            >
              <subject.icon
                className="h-5 w-5"
                style={{ color: subject.color }}
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h3 className="font-semibold">{subject.name}</h3>
              <p className="text-xs text-muted-foreground">
                {completedCount}/{totalCount} chapters
              </p>
            </div>
          </div>
          <span className="text-2xl font-bold" style={{ color: subject.color }}>
            {pct}%
          </span>
        </div>

        {/* Progress bar */}
        <Progress
          value={pct}
          className="mb-5 [&_[data-slot=progress-track]]:h-2 [&_[data-slot=progress-indicator]]:bg-[var(--progress-color)]"
          style={{ "--progress-color": subject.color } as React.CSSProperties}
        />

        {/* Chapter list */}
        <div className="space-y-1">
          {subjectChapters.map((ch) => {
            const done = completedSlugs.includes(ch.slug);
            return (
              <Link
                key={ch.id}
                href={`/chapter/${ch.slug}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted/50"
              >
                {done ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                ) : (
                  <Circle className="h-4 w-4 shrink-0 text-muted-foreground/40" />
                )}
                <span
                  className={cn(
                    "truncate",
                    done ? "text-muted-foreground line-through" : "text-foreground"
                  )}
                >
                  {ch.number}. {ch.title}
                </span>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
