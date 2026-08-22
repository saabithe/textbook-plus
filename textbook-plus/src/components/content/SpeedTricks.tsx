"use client";

import { useState } from "react";
import { ChevronRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpeedTricksProps {
  children: React.ReactNode;
}

export function SpeedTricks({ children }: SpeedTricksProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-dashed border-amber-500/50 bg-amber-500/5 shadow-[0_0_20px_-10px_rgba(245,158,11,0.4)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 px-5 py-3 text-left transition-colors hover:bg-amber-500/10"
      >
        <ChevronRight
          className={cn(
            "h-4 w-4 text-amber-600 transition-transform duration-200 dark:text-amber-400",
            open && "rotate-90"
          )}
        />
        <Zap className="h-4 w-4 fill-amber-400 text-amber-600 dark:text-amber-400" />
        <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
          Speed Tricks
        </span>
        <span className="text-xs text-muted-foreground">
          — solve faster, think smarter
        </span>
      </button>
      {open && (
        <div className="border-t border-dashed border-amber-500/40 px-5 py-2">{children}</div>
      )}
    </div>
  );
}
