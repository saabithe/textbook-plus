"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface QAItem {
  question: string;
  answer: React.ReactNode;
}

interface ReadRespondProps {
  title?: string;
  items: QAItem[];
  className?: string;
  /**
   * Set to false when the page already collapses this section (e.g. inside an
   * Expandable) so the prompts and responses are not hidden behind two toggles.
   */
  collapsible?: boolean;
}

export function ReadRespond({
  title = "Read & Respond",
  items,
  className,
  collapsible = true,
}: ReadRespondProps) {
  const [sectionOpen, setSectionOpen] = useState(!collapsible);

  const pairs = (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          className="grid gap-2 border-t border-border py-4 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1.35fr)] md:gap-6"
        >
          <div>
            <p className="t-micro tabular-nums">Question {i + 1}</p>
            <p className="mt-1.5 text-[0.9375rem] leading-[1.65] text-foreground">
              {item.question}
            </p>
          </div>
          <Separator orientation="vertical" className="hidden md:block" />
          <div>
            <p className="t-micro tabular-nums">Response {i + 1}</p>
            <div className="mt-1.5 text-base leading-[1.7] text-foreground/90">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (!collapsible) {
    return (
      <div id="read-and-respond" className={cn("my-6", className)}>
        <h3 className="t-h3 mb-3 mt-10 scroll-mt-24">{title}</h3>
        <div className="border-b border-border">{pairs}</div>
      </div>
    );
  }

  return (
    <div id="read-and-respond" className={cn("my-6 border-y border-border", className)}>
      <button
        type="button"
        onClick={() => setSectionOpen((open) => !open)}
        aria-expanded={sectionOpen}
        aria-controls="read-and-respond-panel"
        className="flex w-full items-baseline gap-3 py-3 text-left transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="text-[0.9375rem] font-semibold text-foreground">{title}</span>
        <span className="t-micro ml-auto tabular-nums">
          {items.length} question{items.length === 1 ? "" : "s"}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 self-center text-muted-foreground transition-transform duration-200",
            sectionOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div id="read-and-respond-panel">
        {sectionOpen && <div className="animate-fade-in pb-1">{pairs}</div>}
      </div>
    </div>
  );
}
