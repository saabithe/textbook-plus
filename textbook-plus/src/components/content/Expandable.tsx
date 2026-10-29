"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

type ExpandableVariant = "example" | "exercise" | "misc" | "recall" | "default";

interface ExpandableProps {
  title: string;
  id?: string;
  variant?: ExpandableVariant;
  children: React.ReactNode;
  /** Subject hue for the `example` / `exercise` accents, e.g. `var(--subject-physics)`. */
  subjectColor?: string;
}

function inferVariant(title: string): ExpandableVariant {
  const t = title.toLowerCase();
  if (t.includes("exercise")) return "exercise";
  if (t.includes("misc")) return "misc";
  if (t.includes("recall")) return "recall";
  if (t.includes("example")) return "example";
  return "default";
}

/**
 * Five props, two tones: `example` carries an ink accent, `exercise` a warning
 * accent, everything else stays neutral (a --border rule keeps the box anatomy
 * consistent). No icon tile, no filled badge, no shadow.
 */
const variantStyles = {
  example: {
    accent: "border-l-[3px] border-l-foreground",
    tone: "var(--foreground)",
  },
  exercise: {
    accent: "border-l-[3px] border-l-warning",
    tone: "var(--warning)",
  },
  misc: { accent: "border-l-[3px] border-l-border", tone: "var(--muted-foreground)" },
  recall: { accent: "border-l-[3px] border-l-border", tone: "var(--muted-foreground)" },
  default: { accent: "border-l-[3px] border-l-border", tone: "var(--muted-foreground)" },
} as const;

export function Expandable({
  title,
  id,
  variant,
  children,
  subjectColor,
}: ExpandableProps) {
  const [open, setOpen] = useState(false);
  const resolved = variant ?? inferVariant(title);
  const v = variantStyles[resolved];
  const accent =
    subjectColor && (resolved === "example" || resolved === "exercise")
      ? subjectColor
      : null;

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div
        id={id}
        className={cn(
          "my-6 overflow-hidden rounded-lg border bg-card transition-colors duration-[120ms] ease-[var(--ease-blueprint)]",
          open ? "border-rule-strong" : "border-border",
          v.accent
        )}
        style={accent ? { borderLeftColor: accent } : undefined}
      >
        <CollapsibleTrigger
          className="group flex w-full items-center gap-3 px-4 py-3.5 text-start transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-muted/50 sm:px-5"
        >
          <ChevronRight
            className={cn(
              "h-4 w-4 shrink-0 transition-transform duration-200 ease-[var(--ease-blueprint)]",
              open && "rotate-90"
            )}
            style={{ color: v.tone }}
            aria-hidden
          />
          <span className="text-[0.9375rem] font-semibold tracking-[-0.005em] text-foreground">
            {title}
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="border-t border-border px-4 py-4 text-[1.03125rem] leading-[1.7] text-foreground/90 sm:px-5 sm:py-5">
            {children}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
