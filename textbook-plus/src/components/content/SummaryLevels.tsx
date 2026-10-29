"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SummaryLevelsProps {
  defaultLevel?: "quick" | "standard" | "detailed";
  quick: React.ReactNode;
  standard: React.ReactNode;
  detailed: React.ReactNode;
}

const LEVELS = [
  { key: "quick" as const, label: "Quick", indent: "pl-0" },
  { key: "standard" as const, label: "Standard", indent: "pl-4" },
  { key: "detailed" as const, label: "Detailed", indent: "pl-8" },
];

export function SummaryLevels({ defaultLevel = "standard", quick, standard, detailed }: SummaryLevelsProps) {
  const [level, setLevel] = useState(() => {
    const i = LEVELS.findIndex((l) => l.key === defaultLevel);
    return i < 0 ? 1 : i;
  });

  const content = [quick, standard, detailed];

  return (
    <div className="my-6 border-t border-border">
      {LEVELS.map((l, i) => {
        const active = level === i;
        return (
          // The hairline itself indents with depth — nesting is drawn, not boxed.
          <div key={l.key} className={l.indent}>
            <div className="border-b border-border">
              <button
                type="button"
                onClick={() => setLevel(i)}
                aria-expanded={active}
                className="flex w-full items-baseline gap-3 py-3 pr-1 text-left transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="t-micro tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-[0.9375rem] leading-snug",
                    active
                      ? "font-semibold text-foreground"
                      : "font-normal text-muted-foreground"
                  )}
                >
                  {l.label}
                </span>
                <ChevronDown
                  className={cn(
                    "ml-auto h-4 w-4 shrink-0 self-center text-muted-foreground transition-transform duration-200",
                    active && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              {active && (
                <div className="animate-fade-in pb-4 pr-1 text-base leading-[1.7]">
                  {content[i]}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
