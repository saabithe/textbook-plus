"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
  type TouchEvent as ReactTouchEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  /** Accessible name for the tab strip, e.g. "Report formats". */
  label: string;
  className?: string;
}

/** Horizontal travel that locks a touch gesture to paging. */
const SWIPE_LOCK_PX = 8;
/** Horizontal travel that actually commits a swipe. */
const SWIPE_COMMIT_PX = 56;

interface TouchState {
  x: number;
  y: number;
  lastX: number;
  locked: "none" | "h" | "v";
  ignore: boolean;
}

/** True when the gesture started inside something that scrolls sideways (wide table, code block). */
function startsInHorizontalScroller(start: HTMLElement, stopAt: HTMLElement | null) {
  let node: HTMLElement | null = start;
  while (node && node !== stopAt) {
    if (node.scrollWidth > node.clientWidth + 4) return true;
    node = node.parentElement;
  }
  return false;
}

/**
 * Left/right pager used by the merged discourse pages: one writing form on
 * screen at a time, with a sticky tab strip (direct jumps + "2 of 4" counter),
 * hover-revealed edge buttons on desktop, arrow keys and touch swipe.
 *
 * The reader keeps their scroll position when the format changes, so the strip
 * stays pinned under the navbar to keep the current format visible. Only the
 * active pane is mounted, so printing prints just that format, and a hash such
 * as `#news-report` selects its pane on load and on back/forward.
 */
export function TopicSwitch({ panes, label, className }: TopicSwitchProps) {
  const count = panes.length;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [animate, setAnimate] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const touchRef = useRef<TouchState>({ x: 0, y: 0, lastX: 0, locked: "none", ignore: false });

  // The panes array is a fresh literal on every render of the page, so the
  // effects below key off the ids rather than the array identity.
  const paneKey = panes.map((pane) => pane.id).join("|");

  // Honour the hash on load and on back/forward navigation.
  useEffect(() => {
    const ids = paneKey.split("|");
    function syncFromHash() {
      const id = window.location.hash.replace(/^#/, "");
      const index = id ? ids.indexOf(id) : -1;
      if (index >= 0) setActive(index);
    }
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [paneKey]);

  // Keep the selected tab visible inside the horizontally scrolling strip,
  // without ever scrolling the page itself.
  useEffect(() => {
    const list = listRef.current;
    const tab = tabRefs.current[active];
    if (!list || !tab) return;
    const left = tab.offsetLeft;
    const right = left + tab.offsetWidth;
    if (left < list.scrollLeft) list.scrollLeft = Math.max(0, left - 8);
    else if (right > list.scrollLeft + list.clientWidth) {
      list.scrollLeft = right - list.clientWidth + 8;
    }
  }, [active]);

  const goTo = useCallback(
    (next: number, focusTab = false) => {
      const clamped = Math.max(0, Math.min(count - 1, next));
      if (clamped === active) return;
      setDirection(clamped > active ? 1 : -1);
      setAnimate(true);
      setActive(clamped);
      const id = panes[clamped]?.id;
      if (id) window.history.replaceState(null, "", `#${id}`);
      if (focusTab) {
        requestAnimationFrame(() => tabRefs.current[clamped]?.focus());
      }
    },
    [active, count, panes],
  );

  // Arrow keys page the module while it is on screen, so the reader never has
  // to hunt for a control. Editable fields, the tab strip itself and anything
  // marked data-arrow-keys="off" keep their own arrow behaviour.
  useEffect(() => {
    if (count < 2) return;
    function handleDocumentKey(event: globalThis.KeyboardEvent) {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

      const target = event.target as HTMLElement | null;
      if (
        target?.closest(
          "input, textarea, select, [contenteditable='true'], [role='tablist'], [role='dialog'], [role='menu'], [data-arrow-keys='off']",
        )
      ) {
        return;
      }

      const root = rootRef.current;
      if (!root) return;
      const rect = root.getBoundingClientRect();
      const middle = window.innerHeight / 2;
      if (rect.top > middle || rect.bottom < middle) return;

      event.preventDefault();
      goTo(active + (event.key === "ArrowRight" ? 1 : -1));
    }
    document.addEventListener("keydown", handleDocumentKey);
    return () => document.removeEventListener("keydown", handleDocumentKey);
  }, [active, count, goTo]);

  function handleTabKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    let next = active;
    if (event.key === "ArrowRight") next = Math.min(active + 1, count - 1);
    else if (event.key === "ArrowLeft") next = Math.max(active - 1, 0);
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = count - 1;
    else return;

    event.preventDefault();
    goTo(next, true);
  }

  function handleTouchStart(event: ReactTouchEvent<HTMLElement>) {
    if (count < 2 || event.touches.length !== 1) {
      touchRef.current.ignore = true;
      return;
    }
    const touch = event.touches[0];
    const target = event.target as HTMLElement;
    touchRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      lastX: touch.clientX,
      locked: "none",
      ignore:
        Boolean(target.closest("[data-no-swipe]")) ||
        startsInHorizontalScroller(target, rootRef.current),
    };
  }

  function handleTouchMove(event: ReactTouchEvent<HTMLElement>) {
    const state = touchRef.current;
    if (state.ignore || state.locked === "v") return;
    const touch = event.touches[0];
    if (!touch) return;

    const dx = touch.clientX - state.x;
    const dy = touch.clientY - state.y;
    state.lastX = touch.clientX;

    if (state.locked === "none") {
      if (Math.abs(dx) > SWIPE_LOCK_PX && Math.abs(dx) > Math.abs(dy) * 1.2) {
        state.locked = "h";
      } else if (Math.abs(dy) > SWIPE_LOCK_PX && Math.abs(dy) >= Math.abs(dx)) {
        state.locked = "v";
      }
    }
  }

  function handleTouchEnd() {
    const state = touchRef.current;
    if (!state.ignore && state.locked === "h") {
      const dx = state.lastX - state.x;
      if (Math.abs(dx) > SWIPE_COMMIT_PX) {
        goTo(active + (dx < 0 ? 1 : -1));
      }
    }
    state.locked = "none";
    state.ignore = false;
  }

  // A single format needs no controls — render it plainly.
  if (count <= 1) {
    return <div className={cn("my-8", className)}>{panes[0]?.content}</div>;
  }

  const pane = panes[active];
  const atStart = active === 0;
  const atEnd = active === count - 1;

  return (
    <div
      ref={rootRef}
      className={cn("relative my-8 scroll-mt-24", className)}
      role="group"
      aria-label={label}
    >
      <div className="sticky top-16 z-30 mb-4 flex items-center gap-3 rounded-xl border border-border/60 bg-background/90 p-1 pl-1.5 backdrop-blur supports-[backdrop-filter]:bg-background/75 print:hidden">
        <div
          ref={listRef}
          role="tablist"
          aria-label={label}
          onKeyDown={handleTabKeyDown}
          className="relative flex min-w-0 flex-1 items-center gap-1 overflow-x-auto"
        >
          {panes.map((item, index) => {
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
                data-pane-tab={item.id}
                aria-selected={isActive}
                aria-controls={isActive ? `panel-${item.id}` : undefined}
                tabIndex={isActive ? 0 : -1}
                onClick={() => goTo(index)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <span
          aria-hidden
          className="shrink-0 pr-1.5 text-xs font-medium tabular-nums text-muted-foreground"
        >
          <span className="text-foreground">{active + 1}</span> of {count}
        </span>
      </div>

      {/* Desktop edge buttons: invisible until the reader hovers the gutter,
          and pinned to the middle of the viewport so a long pane never puts
          them out of reach. */}
      <div className="group/prev absolute inset-y-0 -left-14 hidden w-12 lg:block print:hidden">
        <div className="sticky top-[calc(50vh-1.25rem)] flex justify-center opacity-0 transition-opacity duration-150 group-hover/prev:opacity-100 group-focus-within/prev:opacity-100">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label={atStart ? "Previous format" : `Previous format: ${panes[active - 1].label}`}
            aria-disabled={atStart}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/95 shadow-sm backdrop-blur transition-colors",
              atStart
                ? "cursor-not-allowed text-muted-foreground/40"
                : "text-foreground hover:bg-muted",
            )}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </div>

      <div className="group/next absolute inset-y-0 -right-14 hidden w-12 lg:block print:hidden">
        <div className="sticky top-[calc(50vh-1.25rem)] flex justify-center opacity-0 transition-opacity duration-150 group-hover/next:opacity-100 group-focus-within/next:opacity-100">
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label={atEnd ? "Next format" : `Next format: ${panes[active + 1].label}`}
            aria-disabled={atEnd}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/95 shadow-sm backdrop-blur transition-colors",
              atEnd
                ? "cursor-not-allowed text-muted-foreground/40"
                : "text-foreground hover:bg-muted",
            )}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </div>

      <div id={pane.id} className="relative scroll-mt-28">
        <p className="mb-3 hidden text-sm font-semibold text-foreground print:block">
          Format {active + 1} of {count} &mdash; {pane.label}
        </p>
        <section
          key={pane.id}
          id={`panel-${pane.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${pane.id}`}
          tabIndex={0}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          className={cn(
            "touch-pan-y rounded-2xl border border-border bg-card px-5 py-5 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:px-6 sm:py-6",
            animate &&
              (direction === 1 ? "animate-pane-in-from-right" : "animate-pane-in-from-left"),
          )}
        >
          {pane.content}
        </section>
      </div>
    </div>
  );
}
