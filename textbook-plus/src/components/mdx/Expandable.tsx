"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableProps {
  title: string;
  children: React.ReactNode;
}

export function Expandable({ title, children }: ExpandableProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border/60 my-6 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium transition-colors hover:bg-muted/50"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="border-t border-border/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  );
}
