"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  /** Subject color hex (e.g. subject.color). Falls back to biology tokens when omitted. */
  color?: string;
}

function hexA(hex: string, alpha: string) {
  return /^#[0-9a-fA-F]{6}$/.test(hex) ? `${hex}${alpha}` : undefined;
}

export function Timeline({ title, events, orientation = "horizontal", rtl = true, color }: TimelineProps) {
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

  const soft = color ? hexA(color, "1c") : "var(--subject-biology-light)";
  const accent = color ?? "var(--subject-biology)";

  if (!isHorizontal) {
    return (
      <div className="my-6 rounded-2xl border border-border/60 bg-background px-5 py-4">
        {title && <span className="mb-4 block text-sm font-bold tracking-tight">{title}</span>}
        <div className="relative">
          <div className="absolute bottom-3 left-[15px] top-3 w-0.5 rounded-full bg-gradient-to-b from-foreground/15 to-foreground/5" />
          <div className="space-y-5">
            {ordered.map((event, i) => (
              <div key={i} className="relative flex gap-4">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-card" style={{ borderColor: accent, boxShadow: `0 0 0 3px ${soft}` }}>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: accent }} />
                </div>
                <div className="pb-1 pt-0.5">
                  <span
                    className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold"
                    style={{ backgroundColor: soft, color: accent }}
                  >
                    {event.date}
                  </span>
                  <p className="mt-1.5 text-sm font-semibold leading-snug text-foreground">{event.label}</p>
                  {event.detail && <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{event.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 rounded-2xl border border-border/60 bg-card px-5 py-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        {title && <h3 className="text-sm font-bold tracking-tight text-foreground">{title}</h3>}
        {canScroll && (
          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={() => scroll(-260)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background transition-colors hover:bg-muted"
              aria-label="Scroll to newer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll(260)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background transition-colors hover:bg-muted"
              aria-label="Scroll to older"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-[9px] h-0.5 rounded-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
        <div ref={scrollRef} className="overflow-x-auto overflow-y-hidden scroll-smooth pb-2">
          <div className="flex min-w-max items-start gap-4 px-0.5 pt-0">
            {ordered.map((event, i) => (
              <div key={i} className="flex w-[220px] flex-shrink-0 flex-col items-center">
                <div
                  className="relative z-10 flex h-[22px] w-5 items-center justify-center rounded-full border-2 bg-card"
                  style={{ borderColor: accent, boxShadow: `0 0 0 3px ${soft}` }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
                </div>
                <div className="h-3 w-px bg-border/60" />
                <div className="w-full rounded-xl border border-border/60 bg-background p-3.5 transition-shadow hover:shadow-md">
                  <span
                    className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold"
                    style={{ backgroundColor: soft, color: accent }}
                  >
                    {event.date}
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-tight text-foreground">{event.label}</p>
                  {event.detail && (
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">{event.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
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