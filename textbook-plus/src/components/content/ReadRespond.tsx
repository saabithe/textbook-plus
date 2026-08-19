"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
      <h3 className="text-lg font-bold tracking-tight mt-10 mb-3 scroll-mt-24 text-foreground flex items-center gap-2">
        <span className="text-xl">📘</span> {title}
      </h3>
      <div className="rounded-2xl border border-border/50 overflow-hidden divide-y divide-border/40">
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={i} className="bg-card">
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex items-center gap-3 w-full px-5 py-3.5 text-left hover:bg-muted/40 transition-colors"
              >
                <ChevronRight
                  className={cn(
                    "h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200",
                    open && "rotate-90"
                  )}
                />
                <span className="text-[0.95rem] font-semibold text-foreground leading-snug">
                  Q{i + 1}. {item.question}
                </span>
              </button>
              {open && (
                <div className="px-5 pb-4 pl-12 text-[0.95rem] leading-[1.75] text-foreground/85 animate-fade-in">
                  <span className="font-semibold text-foreground">A{i + 1}.</span> {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
