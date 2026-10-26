"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PocketItem {
  /** Stable id — also used as the hash, e.g. "h-6-3-fossils". */
  id: string;
  /** Emoji shown in the pocket's icon square. */
  icon: string;
  /** Pocket title, e.g. "1. Palaeontological evidences". */
  label: string;
  /** One-line teaser shown while the pocket is closed. */
  note?: string;
  /** The full note, rendered only while the pocket is open. */
  content: ReactNode;
}

interface PocketGridProps {
  items: PocketItem[];
  /** Small uppercase label printed above the grid. */
  title?: string;
  /** Grid columns on wide screens. Defaults to 3. */
  columns?: 2 | 3;
}

/**
 * Pocket grid: a responsive set of compact cards ("pockets") that each hold a
 * chunk of a chapter. Clicking a pocket opens it in place — the card expands to
 * the full grid width and its note renders inside it. One pocket is open at a
 * time; clicking the open pocket closes it, so a reader enters a pocket, reads
 * it, and goes back to pick another.
 *
 * The open pocket is deep-linked with `#<item id>`, which also means an anchor
 * pointing at the same id (e.g. a TopicIndex card) opens the matching pocket.
 */
export function PocketGrid({ items, title, columns = 3 }: PocketGridProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const cards = useRef(new Map<string, HTMLDivElement>());

  const scrollToCard = useCallback((id: string) => {
    requestAnimationFrame(() => {
      cards.current.get(id)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }, []);

  // A stable key for the item ids, so the hash effect does not re-run (and
  // re-scroll) on every parent render — the `items` array is usually inline JSX.
  const idKey = items.map((item) => item.id).join("|");

  // Honour the hash on load and on back/forward navigation / anchor clicks.
  useEffect(() => {
    function syncFromHash() {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      if (!idKey.split("|").includes(id)) return;
      setOpenId(id);
      scrollToCard(id);
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [idKey, scrollToCard]);

  const openPocket = useCallback(
    (id: string) => {
      setOpenId(id);
      window.history.replaceState(null, "", `#${id}`);
      scrollToCard(id);
    },
    [scrollToCard],
  );

  const closePocket = useCallback(() => {
    setOpenId(null);
    // Drop the hash entirely rather than leaving a stale "#" in the URL.
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }, []);

  // Escape leaves the pocket that is open.
  useEffect(() => {
    if (!openId) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closePocket();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openId, closePocket]);

  if (items.length === 0) return null;

  return (
    <div className="my-8">
      {title && (
        <p className="mb-3 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
          {title}
        </p>
      )}

      <div
        className={cn(
          "grid grid-cols-1 gap-3 sm:grid-cols-2",
          columns === 3 && "lg:grid-cols-3",
        )}
        role="group"
        aria-label={title}
      >
        {items.map((item) => {
          const isOpen = item.id === openId;
          const buttonId = `pocket-${item.id}`;
          const panelId = `${item.id}-panel`;

          return (
            <div
              key={item.id}
              ref={(node) => {
                if (node) cards.current.set(item.id, node);
                else cards.current.delete(item.id);
              }}
              className={cn(
                "overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-200",
                "bg-gradient-to-br from-violet-500/[0.06] via-indigo-500/[0.03] to-transparent",
                "dark:from-violet-500/[0.10] dark:via-indigo-500/[0.05]",
                isOpen
                  ? "border-violet-500/60 shadow-md sm:col-span-2"
                  : "border-border/70 hover:border-violet-500/40 hover:shadow-md",
                isOpen && columns === 3 && "lg:col-span-3",
              )}
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => (isOpen ? closePocket() : openPocket(item.id))}
                className={cn(
                  "flex w-full gap-3 p-4 text-left transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isOpen
                    ? "items-start text-foreground"
                    : "min-h-[5.5rem] items-center text-foreground hover:bg-muted/40",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-base leading-none text-white shadow-sm shadow-violet-500/30",
                    "transition-transform duration-200",
                  )}
                >
                  {item.icon}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-extrabold tracking-tight text-foreground">
                    {item.label}
                  </span>
                  {item.note && (
                    <span
                      className={cn(
                        "mt-0.5 block text-xs leading-snug text-muted-foreground",
                        isOpen && "hidden",
                      )}
                    >
                      {item.note}
                    </span>
                  )}
                </span>

                <ChevronDown
                  aria-hidden
                  strokeWidth={2}
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    isOpen
                      ? "mt-1.5 rotate-180 text-violet-600 dark:text-violet-400"
                      : "text-muted-foreground/60",
                  )}
                />
              </button>

              {isOpen && (
                <section
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="border-t border-border/60 px-4 pb-4"
                >
                  <div className="pt-2">{item.content}</div>
                </section>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
