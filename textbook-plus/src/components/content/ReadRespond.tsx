"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
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
}

export function ReadRespond({ title = "Textbook \"Read and Respond\" Questions & Answers", items, className }: ReadRespondProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="read-and-respond" className={cn("my-6", className)}>
      <h3 className="text-lg font-extrabold tracking-tight mt-10 mb-3 scroll-mt-24 text-foreground flex items-center gap-2">
        <span className="text-xl">📘</span> {title}
      </h3>
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
    </div>
  );
}
