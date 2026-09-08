"use client";

import { CheckCircle2, XCircle, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    <div className="flex items-center gap-2 flex-wrap">
      <Badge variant="secondary" className="h-6 gap-1.5 px-2.5 text-xs font-normal">
        <Layers style={{ color: subjectColor }} />
        <span className="font-medium">{total}</span>
        <span className="text-muted-foreground">total</span>
      </Badge>
      <Badge variant="outline" className="h-6 gap-1.5 border-green-500/30 bg-green-500/10 px-2.5 text-xs font-normal text-green-600 dark:text-green-400">
        <CheckCircle2 />
        <span className="font-medium">{known}</span>
        <span>known</span>
      </Badge>
      <Badge variant="outline" className="h-6 gap-1.5 border-red-500/30 bg-red-500/10 px-2.5 text-xs font-normal text-red-600 dark:text-red-400">
        <XCircle />
        <span className="font-medium">{unknown}</span>
        <span>unknown</span>
      </Badge>
      {remaining > 0 && (
        <Badge variant="outline" className="h-6 px-2.5 text-xs font-normal text-muted-foreground">
          <span className="font-medium">{remaining}</span> remaining
        </Badge>
      )}
      {reviewed === total && total > 0 && (
        <Badge className="h-6 px-2.5 text-xs text-white" style={{ backgroundColor: subjectColor }}>
          All reviewed! 🎉
        </Badge>
      )}
    </div>
  );
}
