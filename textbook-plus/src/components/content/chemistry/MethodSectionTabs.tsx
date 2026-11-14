"use client";

import {
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type SectionAccent = "chemistry" | "warning" | "ink";

const ACCENT: Record<
  SectionAccent,
  {
    bar: string;
    badge: string;
    activeBorder: string;
    activeBg: string;
    panelRule: string;
  }
> = {
  chemistry: {
    bar: "bg-[var(--subject-chemistry)]",
    badge:
      "bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] text-[var(--subject-chemistry)]",
    activeBorder:
      "border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)]",
    activeBg: "bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]",
    panelRule: "bg-[var(--subject-chemistry)]",
  },
  warning: {
    bar: "bg-warning",
    badge: "bg-warning/15 text-warning",
    activeBorder: "border-warning/50",
    activeBg: "bg-warning/[0.06]",
    panelRule: "bg-warning",
  },
  ink: {
    bar: "bg-foreground",
    badge: "bg-muted text-foreground",
    activeBorder: "border-rule-strong",
    activeBg: "bg-muted/40",
    panelRule: "bg-foreground",
  },
};

export interface MethodSectionPane {
  /** Anchor id, used for the tab and panel ids. */
  id: string;
  /** Numeral printed in the tab badge, e.g. "I". */
  numeral: ReactNode;
  /** Tab label, e.g. "Common methods". */
  label: ReactNode;
  /** One line under the label, e.g. "Oxidation, dehydrogenation, hydrocarbons". */
  caption?: ReactNode;
  /** Each section gets its own accent so the three tabs read apart. */
  accent: SectionAccent;
  content: ReactNode;
}

interface MethodSectionTabsProps {
  /** Accessible name for the tab strip. */
  label: string;
  panes: MethodSectionPane[];
}

/**
 * MethodSectionTabs — the one-of-three navigator used where a chapter splits a
 * topic into scopes (methods common to both families, then the routes that only
 * one family takes). Each tab is a card carrying its numeral, label and scope
 * line, with its own accent; the selected section renders alone in the panel
 * below, under a slim numeral strip that keeps the scope visible while reading.
 */
export function MethodSectionTabs({ label, panes }: MethodSectionTabsProps) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const pane = panes[active];
  const accent = ACCENT[pane.accent];

  function goTo(next: number, focusTab = false) {
    const clamped = Math.max(0, Math.min(panes.length - 1, next));
    if (clamped === active) return;
    setActive(clamped);
    if (focusTab) {
      requestAnimationFrame(() => tabRefs.current[clamped]?.focus());
    }
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    let next = active;
    if (event.key === "ArrowRight") next = active + 1;
    else if (event.key === "ArrowLeft") next = active - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = panes.length - 1;
    else return;

    event.preventDefault();
    goTo(next, true);
  }

  return (
    <div className="my-6" role="group" aria-label={label}>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={handleKeyDown}
        className="grid gap-2 sm:grid-cols-3"
      >
        {panes.map((item, index) => {
          const itemAccent = ACCENT[item.accent];
          const isActive = index === active;

          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={isActive ? `panel-${item.id}` : undefined}
              tabIndex={isActive ? 0 : -1}
              onClick={() => goTo(index)}
              className={cn(
                "group relative flex min-h-11 min-w-0 flex-col gap-1 overflow-hidden rounded-md border px-3 pb-2.5 pt-3 text-left transition-colors duration-[120ms] ease-[var(--ease-blueprint)]",
                isActive
                  ? cn(itemAccent.activeBorder, itemAccent.activeBg)
                  : "border-border/70 bg-card hover:bg-muted/40",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-0 top-0 h-[3px]",
                  isActive ? itemAccent.bar : "bg-transparent",
                )}
              />

              <span className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] text-[0.62rem] font-extrabold leading-none",
                    itemAccent.badge,
                  )}
                >
                  {item.numeral}
                </span>
                <span
                  className={cn(
                    "min-w-0 text-sm font-extrabold leading-snug",
                    isActive ? "text-foreground" : "text-foreground/80",
                  )}
                >
                  {item.label}
                </span>
              </span>

              {item.caption && (
                <span className="hidden text-[0.66rem] leading-snug text-muted-foreground sm:block">
                  {item.caption}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <section
        key={pane.id}
        id={`panel-${pane.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${pane.id}`}
        tabIndex={0}
        className="mt-3 rounded-lg border border-border bg-card px-4 py-4 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:px-5 sm:py-5"
      >
        <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
          <span
            aria-hidden
            className={cn("h-3.5 w-[3px] rounded-full", accent.panelRule)}
          />
          <span className="t-micro">
            Section {pane.numeral} · {pane.label}
          </span>
        </div>

        {pane.content}
      </section>
    </div>
  );
}
