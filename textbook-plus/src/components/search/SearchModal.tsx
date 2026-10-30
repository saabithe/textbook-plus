"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

/* Overlay dialog: hairline box, 10px radius, results as hairline rows.
   The elevation belongs to the dialog primitive, not to any class here. */
export function SearchModal({ open, onClose }: SearchModalProps) {
  const router = useRouter();
  const { query, setQuery, results } = useSearch();

  // Clear the query each time the dialog opens (focus management,
  // ESC-to-close, and focus restore are handled natively by the Dialog).
  useEffect(() => {
    if (open) setQuery("");
  }, [open, setQuery]);

  function navigate(href: string) {
    router.push(href);
    onClose();
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
      title="Search chapters"
      description="Search across all subjects and chapters"
      className="top-1/3 rounded-[10px]! border border-border bg-card sm:max-w-lg"
    >
      <Command
        label="Search chapters"
        shouldFilter={false}
        className="rounded-none! bg-transparent p-0"
      >
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Search chapters..."
          aria-label="Search chapters"
          className="h-9 text-lg"
        />
        <CommandList className="mt-2">
          {!query.trim() ? (
            <div className="t-caption px-4 py-8 text-center">
              Type to search across all subjects and chapters
            </div>
          ) : results.length === 0 ? (
            <CommandEmpty className="t-caption px-4 py-8">
              No chapters found for &quot;{query}&quot;
            </CommandEmpty>
          ) : (
            <CommandGroup className="p-0">
              <div className="t-micro border-b border-border px-4 pb-2 pt-1">
                Chapters
              </div>
              {results.map((r) => (
                <CommandItem
                  key={r.chapterSlug}
                  value={`${r.chapterTitle} ${r.subjectName} ${r.chapterSlug}`}
                  onSelect={() => navigate(r.href)}
                  className="gap-3 rounded-none! border-b border-border px-4 py-3 data-selected:bg-foreground/4"
                >
                  <span
                    className="w-7 shrink-0 text-[13px] font-semibold tabular-nums"
                    style={{ color: r.subjectColor }}
                  >
                    {String(r.chapterNumber).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[15px] font-semibold text-foreground">
                      {r.chapterTitle}
                    </p>
                    <p className="t-micro mt-1 truncate">{r.subjectName}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
        <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-2">
          <span className="t-micro">Navigate · Enter to open</span>
          <span className="t-micro flex items-center gap-1.5">
            <Kbd className="rounded-[3px] border border-border bg-background">
              ESC
            </Kbd>
            to close
          </span>
        </div>
      </Command>
    </CommandDialog>
  );
}
