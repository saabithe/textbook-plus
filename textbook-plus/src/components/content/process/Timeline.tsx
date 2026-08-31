"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface TimelineEvent {
  date: string;
  label: string;
  detail?: string;
}

export interface TimelineProps {
  title?: string;
  events: TimelineEvent[];
  orientation?: "vertical" | "horizontal";
  rtl?: boolean;
}

export function Timeline({ title, events, orientation = "horizontal", rtl = true }: TimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  const ordered = rtl ? [...events].reverse() : events;
  const isHorizontal = orientation === "horizontal";

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollWidth > el.clientWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [events]);

  const scroll = (dx: number) => {
    scrollRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  if (!isHorizontal) {
    return (
      <div className="rounded-xl border border-border/60 bg-background px-5 py-4 my-6">
        {title && <span className="text-sm font-semibold block mb-3">{title}</span>}
        <div className="space-y-0">
          {ordered.map((event, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                  {i + 1}
                </div>
                {i < ordered.length - 1 && <div className="w-px flex-1 bg-border/60 my-1" />}
              </div>
              <div className="pb-4 pt-0.5">
                <span className="text-xs font-medium text-primary">{event.date}</span>
                <p className="text-sm font-medium text-foreground leading-snug">{event.label}</p>
                {event.detail && <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{event.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl border border-border/60 bg-card px-5 py-4 shadow-sm my-6">
      <div className="flex items-center justify-between mb-3">
        {title && <h3 className="text-sm font-semibold">{title}</h3>}
        {canScroll && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => scroll(-200)}
              className="h-7 w-7 rounded-full border border-border/60 bg-background flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Scroll to newer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => scroll(200)}
              className="h-7 w-7 rounded-full border border-border/60 bg-background flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Scroll to older"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
      <div className="relative">
        <div ref={scrollRef} className="overflow-x-auto overflow-y-hidden scroll-smooth flex items-center gap-0 pb-2">
          {ordered.map((event, i) => (
            <>
              {i > 0 && (
                <div className="flex-shrink-0 w-8 h-px bg-primary/20 relative flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              )}
              <div className="flex-shrink-0 w-[200px] rounded-xl border border-border/60 bg-background px-3 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-200">
                <span className="inline-block px-2 py-0.5 rounded-full text-[11px] font-bold bg-[var(--subject-biology-light)] text-[var(--subject-biology)]">
                  {event.date}
                </span>
                <p className="text-sm font-semibold text-foreground leading-tight mt-1.5">{event.label}</p>
                <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed line-clamp-3">{event.detail}</p>
              </div>
            </>
          ))}
        </div>
        {canScroll && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-card to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-card to-transparent" />
          </>
        )}
      </div>
    </div>
  );
}
