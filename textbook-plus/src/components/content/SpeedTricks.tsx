"use client";

import { useId, useState } from "react";
import { ChevronRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SpeedTricksProps {
  children: React.ReactNode;
}

export function SpeedTricks({ children }: SpeedTricksProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-amber-500/30 bg-card shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-2.5 border-b border-transparent px-4 py-3 text-left transition-colors hover:bg-amber-500/[0.08] dark:hover:bg-amber-500/[0.10]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 text-white shadow-sm shadow-amber-500/30">
          <Zap className="h-4 w-4" />
        </span>
        <ChevronRight
          className={cn(
            "h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300 transition-transform duration-200",
            open && "rotate-90"
          )}
        />
        <span className="text-sm font-extrabold tracking-wide text-amber-900 dark:text-amber-100">
          Speed Tricks
        </span>
        <span className="hidden sm:inline text-xs text-amber-700/60 dark:text-amber-300/60">
          — solve faster, think smarter
        </span>
        <Badge className="ml-auto rounded-full bg-gradient-to-br from-amber-500 to-orange-500 px-2.5 py-0.5 text-[10px] font-extrabold tracking-widest text-white shadow-sm shadow-amber-500/30">
          TRICKS
        </Badge>
      </button>
      {open && (
        <div
          id={panelId}
          className="border-t border-amber-500/15 bg-amber-500/[0.03] px-4 pb-3 pt-2 dark:bg-amber-500/[0.04]"
        >
          {children}
        </div>
      )}
    </div>
  );
}