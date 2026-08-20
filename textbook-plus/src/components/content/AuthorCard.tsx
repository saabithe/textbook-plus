"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthorCardProps {
  name: string;
  children?: React.ReactNode;
  className?: string;
}

export function AuthorCard({ name, children, className }: AuthorCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = !!children;

  return (
    <div
      className={cn(
        "rounded-2xl border border-border/50 bg-card px-6 py-5 my-6",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Author
          </p>
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
        </div>
        {hasChildren && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="shrink-0 rounded-lg p-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
            aria-label={expanded ? "Collapse author bio" : "Expand author bio"}
          >
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                expanded && "rotate-180"
              )}
            />
          </button>
        )}
      </div>
      {hasChildren && (
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            expanded ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="text-[0.95rem] leading-[1.75] text-foreground/85">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
