"use client";

import { useId, useState } from "react";
import { ChevronRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpeedTricksProps {
  children: React.ReactNode;
}

export function SpeedTricks({ children }: SpeedTricksProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="my-6 overflow-hidden rounded-xl border-2 border-dashed border-amber-500/40 bg-gradient-to-br from-amber-500/[0.07] via-orange-500/[0.04] to-transparent dark:from-amber-500/[0.10] dark:via-orange-500/[0.05] shadow-[0_0_24px_-12px_rgba(245,158,11,0.45)]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-2.5 px-5 py-3.5 text-left transition-colors hover:bg-amber-500/[0.08] dark:hover:bg-amber-500/[0.10]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/15 dark:bg-amber-500/20 ring-1 ring-amber-500/20">
          <Zap className="h-4 w-4 fill-amber-400 text-amber-600 dark:text-amber-400" />
        </span>
        <ChevronRight
          className={cn(
            "h-4 w-4 text-amber-700 dark:text-amber-300 transition-transform duration-200",
            open && "rotate-90"
          )}
        />
        <span className="text-sm font-bold tracking-tight text-amber-800 dark:text-amber-200">
          Speed Tricks
        </span>
        <span className="hidden sm:inline text-xs text-amber-700/60 dark:text-amber-300/60">
          — solve faster, think smarter
        </span>
        <span className="ml-auto text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500 text-white">TRICKS</span>
      </button>
      {open && (
        <div id={panelId} className="border-t-2 border-dashed border-amber-500/25 bg-amber-500/[0.03] dark:bg-amber-500/[0.04] px-5 py-3">{children}</div>
      )}
    </div>
  );
}
