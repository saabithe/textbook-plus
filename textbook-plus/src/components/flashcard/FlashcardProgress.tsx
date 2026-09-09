"use client";

import { CheckCircle2, XCircle, Layers, Trophy } from "lucide-react";
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
      <Badge variant="secondary" className="h-7 gap-1.5 rounded-full px-3 text-xs font-bold">
        <Layers style={{ color: subjectColor }} />
        <span className="font-extrabold">{total}</span>
        <span className="text-muted-foreground font-bold">total</span>
      </Badge>
      <Badge variant="outline" className="h-7 gap-1.5 rounded-full border-2 border-green-600/30 bg-green-500/10 px-3 text-xs font-bold text-green-600 dark:text-green-400">
        <CheckCircle2 />
        <span className="font-extrabold">{known}</span>
        <span>known</span>
      </Badge>
      <Badge variant="outline" className="h-7 gap-1.5 rounded-full border-2 border-red-600/30 bg-red-500/10 px-3 text-xs font-bold text-red-600 dark:text-red-400">
        <XCircle />
        <span className="font-extrabold">{unknown}</span>
        <span>unknown</span>
      </Badge>
      {remaining > 0 && (
        <Badge variant="outline" className="h-7 rounded-full border-2 px-3 text-xs font-bold text-muted-foreground">
          <span className="font-extrabold">{remaining}</span> remaining
        </Badge>
      )}
      {reviewed === total && total > 0 && (
        <Badge className="h-7 gap-1.5 rounded-full px-3 text-xs font-extrabold text-white" style={{ backgroundColor: subjectColor }}>
          <Trophy className="h-3.5 w-3.5" />
          All reviewed!
        </Badge>
      )}
    </div>
  );
}
