"use client";

import { useState } from "react";
import { BookOpen, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
   * Expandable) so the questions are not hidden behind two accordions.
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = (
    <Accordion
      value={openIndex === null ? [] : [openIndex]}
      onValueChange={(value) => setOpenIndex(value.length > 0 ? (value[0] as number) : null)}
      className="rounded-2xl border border-border/50 overflow-hidden shadow-sm"
    >
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <AccordionItem key={i} value={i} className="bg-card">
            <AccordionTrigger className="px-5 py-3.5 transition-colors hover:no-underline hover:bg-primary/[0.05] [&_[data-slot=accordion-trigger-icon]]:hidden">
              <span className="flex items-center gap-3 text-left">
                <ChevronRight
                  className={cn(
                    "h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200",
                    open && "rotate-90"
                  )}
                />
                <span className="text-[0.95rem] font-semibold text-foreground leading-snug">
                  Q{i + 1}. {item.question}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 pl-12 text-[0.95rem] leading-[1.75] text-foreground/85 animate-fade-in">
              <span className="font-semibold text-foreground">A{i + 1}.</span> {item.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );

  if (!collapsible) {
    return (
      <div id="read-and-respond" className={cn("my-6", className)}>
        <h3 className="text-lg font-extrabold tracking-tight mt-10 mb-3 scroll-mt-24 text-foreground flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          {title}
        </h3>
        {questions}
      </div>
    );
  }

  return (
    <div id="read-and-respond" className={cn("my-6", className)}>
      <button
        type="button"
        onClick={() => setSectionOpen((open) => !open)}
        aria-expanded={sectionOpen}
        aria-controls="read-and-respond-panel"
        className="flex w-full items-center gap-3 rounded-2xl border border-border/50 bg-card px-5 py-4 text-left shadow-sm transition-colors hover:bg-primary/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <span className="flex-1 text-[0.95rem] font-semibold text-foreground">
          {title}
        </span>
        <span className="shrink-0 text-xs font-medium text-muted-foreground tabular-nums">
          {items.length} question{items.length === 1 ? "" : "s"}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            sectionOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id="read-and-respond-panel"
        className={cn("mt-3", sectionOpen ? "animate-fade-in" : "hidden")}
      >
        {sectionOpen && questions}
      </div>
    </div>
  );
}
