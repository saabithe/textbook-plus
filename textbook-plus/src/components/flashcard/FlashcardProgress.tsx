"use client";

import { CheckCircle2, XCircle, Layers, Trophy } from "lucide-react";

interface FlashcardProgressProps {
  total: number;
  known: number;
  unknown: number;
  subjectColor: string;
}

export function FlashcardProgress({ total, known, unknown, subjectColor }: FlashcardProgressProps) {
  const reviewed = known + unknown;
  const remaining = total - reviewed;

  const chip =
    "inline-flex items-center gap-1.5 rounded-[3px] border border-border bg-card px-2.5 py-1 text-[12px] font-semibold";

  return (
    <div className="flex flex-wrap gap-2">
      <span className={chip}>
        <Layers className="h-3 w-3" style={{ color: subjectColor }} />
        <span className="font-bold tabular-nums">{total}</span>
        <span className="font-medium text-muted-foreground">total</span>
      </span>
      <span className={`${chip} border-ok/30`} style={{ color: "var(--ok)" }}>
        <CheckCircle2 className="h-3 w-3" />
        <span className="font-bold tabular-nums">{known}</span>
        <span className="opacity-70">known</span>
      </span>
      <span className={`${chip} border-bad/30`} style={{ color: "var(--bad)" }}>
        <XCircle className="h-3 w-3" />
        <span className="font-bold tabular-nums">{unknown}</span>
        <span className="opacity-70">unknown</span>
      </span>
      {remaining > 0 && (
        <span className={chip}>
          <span className="font-bold tabular-nums">{remaining}</span>
          <span className="font-medium text-muted-foreground">remaining</span>
        </span>
      )}
      {reviewed === total && total > 0 && (
        <span className="inline-flex items-center gap-1.5 rounded-[3px] border border-border bg-card px-2.5 py-1 text-[12px] font-bold" style={{ color: subjectColor }}>
          <Trophy className="h-3.5 w-3.5" />
          All reviewed!
        </span>
      )}
    </div>
  );
}
