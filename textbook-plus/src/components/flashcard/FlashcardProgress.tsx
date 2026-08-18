"use client";

import { CheckCircle2, XCircle, Layers } from "lucide-react";

interface FlashcardProgressProps {
  total: number;
  known: number;
  unknown: number;
  subjectColor: string;
}

export function FlashcardProgress({ total, known, unknown, subjectColor }: FlashcardProgressProps) {
  const reviewed = known + unknown;
  const remaining = total - reviewed;

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-1.5 text-sm">
        <Layers className="h-4 w-4" style={{ color: subjectColor }} />
        <span className="font-medium">{total}</span>
        <span className="text-muted-foreground">total</span>
      </div>
      <div className="flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400">
        <CheckCircle2 className="h-4 w-4" />
        <span className="font-medium">{known}</span>
        <span className="text-muted-foreground">known</span>
      </div>
      <div className="flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400">
        <XCircle className="h-4 w-4" />
        <span className="font-medium">{unknown}</span>
        <span className="text-muted-foreground">unknown</span>
      </div>
      {remaining > 0 && (
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">{remaining}</span> remaining
        </div>
      )}
      {reviewed === total && total > 0 && (
        <div className="text-sm font-medium" style={{ color: subjectColor }}>
          All reviewed! 🎉
        </div>
      )}
    </div>
  );
}
