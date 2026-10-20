"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TopicPane {
  /** Hash id — deep links look like /discourses/reports#news-report */
  id: string;
  /** Label shown on the card, and printed above the pane. */
  label: string;
  content: ReactNode;
}

interface TopicSwitchProps {
  panes: TopicPane[];
  /** Accessible name for the card list, e.g. "Report formats". */
  label: string;
  className?: string;
}

/**
 * Card list used by the merged discourse pages: one card per writing form,
 * and the open card carries its pane below the card.
 *
 * One card is open at a time (accordion). Opening a card deep-links with
 * `#<pane id>`, and a card that is already open prints expanded, so printing
 * the page by hand prints only the form that is open.
 */
export function TopicSwitch({ panes, label, className }: TopicSwitchProps) {
  const [active, setActive] = useState<string | null>(() => panes[0]?.id ?? null);
  const listRef = useRef<HTMLDivElement>(null);

  // Honour the hash on load and on back/forward navigation.
  useEffect(() => {
    function syncFromHash() {
      const id = window.location.hash.replace(/^#/, "");
      if (id && panes.some((pane) => pane.id === id)) {
        setActive(id);
      }
    }
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [panes]);

  const select = useCallback((id: string, moveFocus = false) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
    if (moveFocus) {
      requestAnimationFrame(() => {
        listRef.current
          ?.querySelector<HTMLButtonElement>(`[data-pane-tab="${id}"]`)
          ?.focus();
      });
    }
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = panes.findIndex((pane) => pane.id === active);
    if (index < 0) return;

    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % panes.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + panes.length) % panes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = panes.length - 1;
    else return;

    event.preventDefault();
    select(panes[next].id, true);
  }

  return (
    <div
      className={cn("my-8 flex flex-col gap-3", className)}
      role="group"
      aria-label={label}
      onKeyDown={handleKeyDown}
    >
      {panes.map((pane) => {
        const isActive = pane.id === active;
        return (
          <div
            key={pane.id}
            id={pane.id}
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors",
              isActive ? "border-border bg-card shadow-sm" : "border-border/60 bg-card/60",
            )}
          >
            <h3>
              <button
                type="button"
                id={`tab-${pane.id}`}
                data-pane-tab={pane.id}
                aria-expanded={isActive}
                aria-controls={`panel-${pane.id}`}
                onClick={() => select(isActive ? "" : pane.id)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="text-base font-bold tracking-tight">
                  {pane.label}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200 print:hidden",
                    isActive && "rotate-180",
                  )}
                  strokeWidth={2}
                  aria-hidden
                />
              </button>
            </h3>

            {isActive && (
              <section
                id={`panel-${pane.id}`}
                aria-labelledby={`tab-${pane.id}`}
                className="border-t border-border/60 px-5 py-5"
              >
                {pane.content}
              </section>
            )}
          </div>
        );
      })}
    </div>
  );
}
