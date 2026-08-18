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
  const { query, setQuery, results } = useSearch();

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, setQuery]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        onClose();
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
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="absolute inset-x-4 top-[15vh] mx-auto max-w-lg">
        <div className="rounded-2xl border border-border/60 bg-background shadow-2xl overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border/40">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chapters..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border/60 bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto">
            {query.trim() && results.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                No chapters found for &quot;{query}&quot;
              </div>
            )}
            {results.map((r) => (
              <button
                key={r.chapterSlug}
                onClick={() => navigate(r.chapterSlug)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-muted/50"
              >
                <span
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded text-[11px] font-bold text-white"
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
