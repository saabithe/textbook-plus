"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableProps {
  title: string;
  children: React.ReactNode;
}

export function Expandable({ title, children }: ExpandableProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-6 rounded-xl border border-border/60 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full px-5 py-3 text-left bg-muted/20 hover:bg-muted/40 transition-colors"
      >
        <ChevronRight
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            open && "rotate-90"
          )}
        />
        <span className="text-sm font-semibold">{title}</span>
      </button>
      {open && (
        <div className="px-5 py-4 text-sm leading-relaxed text-muted-foreground border-t border-border/40">
          {children}
        </div>
      )}
    </div>
  );
}
