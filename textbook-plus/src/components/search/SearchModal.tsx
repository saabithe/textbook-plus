"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const { query, setQuery, results } = useSearch();

  // Focus the input on open; restore focus to the previously
  // focused element when the dialog closes.
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    setQuery("");
    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    return () => {
      clearTimeout(timer);
      previous?.focus?.();
    };
  }, [open, setQuery]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        onClose();
        return;
      }
      if (e.key === "Tab" && open && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, input, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (e.shiftKey) {
          if (active === first || active === dialogRef.current) {
            e.preventDefault();
            last.focus();
          }
        } else if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  function navigate(slug: string) {
    router.push(`/chapter/${slug}`);
    onClose();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      {/* Modal */}
      <div className="absolute inset-x-4 top-[15vh] mx-auto max-w-lg">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Search chapters"
          className="rounded-2xl border border-border/60 bg-background shadow-2xl overflow-hidden"
        >
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border/40">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chapters..."
              aria-label="Search chapters"
              role="combobox"
              aria-expanded="true"
              aria-controls="search-results"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border/60 bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div id="search-results" role="listbox" aria-label="Search results" className="max-h-80 overflow-y-auto">
            {query.trim() && results.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground" role="status">
                No chapters found for &quot;{query}&quot;
              </div>
            )}
            {results.map((r) => (
              <button
                key={r.chapterSlug}
                role="option"
                aria-selected="false"
                onClick={() => navigate(r.chapterSlug)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-muted/50"
              >
                <span
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded text-[11px] font-bold text-white dark:text-background"
                  style={{ backgroundColor: r.subjectColor }}
                >
                  {r.chapterNumber}
                </span>
                <div className="min-w-0">
                  <p className="font-medium truncate">{r.chapterTitle}</p>
                  <p className="text-xs text-muted-foreground">{r.subjectName}</p>
                </div>
              </button>
            ))}
            {!query.trim() && (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                Type to search across all subjects and chapters
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
