"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface CollapsibleSectionProps {
  title: React.ReactNode;
  id?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

/**
 * CollapsibleSection — a section header with a 1px rule beneath, nothing else.
 * No card frame: sections are separated by structure, not boxed.
 */
export function CollapsibleSection({
  title,
  id,
  defaultOpen = false,
  children,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div id={id} className="scroll-mt-24">
        <CollapsibleTrigger className="group -mx-2 flex w-full items-center justify-between gap-3 rounded-[3px] border-b border-border px-2 py-3 text-left text-[0.9375rem] font-semibold tracking-[-0.005em] text-foreground transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-muted/60">
          <span>{title}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-[var(--ease-blueprint)]",
              open && "rotate-180"
            )}
            aria-hidden
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-4">{children}</div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
