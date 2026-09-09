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

export function CollapsibleSection({
  title,
  id,
  defaultOpen = false,
  children,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div
        id={id}
        className="rounded-2xl border border-border/60 bg-card/50 overflow-hidden scroll-mt-24 shadow-sm"
      >
        <CollapsibleTrigger
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-foreground transition-colors hover:bg-primary/[0.05]"
        >
          <span className="text-base font-bold tracking-tight">{title}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-5 pb-5 pt-1">
            {children}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
