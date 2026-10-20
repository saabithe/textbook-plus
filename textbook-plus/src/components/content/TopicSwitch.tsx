"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TopicPane {
  /** Hash id — deep links look like /discourses/reports#news-report */
  id: string;
  /** Label shown on the tab, and printed above the pane. */
  label: string;
  content: ReactNode;
}

interface TopicSwitchProps {
  panes: TopicPane[];
  /** Accessible name for the tab list, e.g. "Report formats". */
  label: string;
  className?: string;
}

/**
 * Horizontal switch used by the merged discourse pages: one pill per writing
 * form, sticky under the navbar, with hash deep links.
 *
 * Every pane stays in the DOM — inactive ones are hidden on screen only
 * (`.topic-pane-hidden`), so printing a page prints every form in order.
 */
export function TopicSwitch({ panes, label, className }: TopicSwitchProps) {
  const [active, setActive] = useState(() => panes[0]?.id ?? "");
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
    if (event.key === "ArrowRight") next = (index + 1) % panes.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + panes.length) % panes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = panes.length - 1;
    else return;

    event.preventDefault();
    select(panes[next].id, true);
  }

  return (
    <div className={cn("my-8", className)}>
      <div className="sticky top-16 z-30 mb-8 rounded-2xl border border-border/60 bg-background/85 p-1.5 shadow-sm backdrop-blur-xl print:static print:mb-6 print:border-0 print:bg-transparent print:p-0 print:shadow-none">
        <div
          ref={listRef}
          role="tablist"
          aria-label={label}
          onKeyDown={handleKeyDown}
          className="flex items-center gap-1.5 overflow-x-auto"
        >
          {panes.map((pane) => {
            const isActive = pane.id === active;
            return (
              <button
                key={pane.id}
                type="button"
                role="tab"
                id={`tab-${pane.id}`}
                data-pane-tab={pane.id}
                aria-selected={isActive}
                aria-controls={pane.id}
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(pane.id)}
                className={cn(
                  "shrink-0 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors sm:px-4",
                  isActive
                    ? "bg-card font-bold text-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {pane.label}
              </button>
            );
          })}
        </div>
      </div>

      {panes.map((pane) => {
        const isActive = pane.id === active;
        return (
          <section
            key={pane.id}
            id={pane.id}
            role="tabpanel"
            aria-labelledby={`tab-${pane.id}`}
            className={cn("scroll-mt-32", !isActive && "topic-pane-hidden")}
          >
            {pane.content}
          </section>
        );
      })}
    </div>
  );
}
