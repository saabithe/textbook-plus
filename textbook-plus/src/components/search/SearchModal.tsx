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

export function SearchModal({ open, onClose }: SearchModalProps) {
  const router = useRouter();
  const { query, setQuery, results } = useSearch();

  // Clear the query each time the dialog opens (focus management,
  // ESC-to-close, and focus restore are handled natively by the Dialog).
  useEffect(() => {
    if (open) setQuery("");
  }, [open, setQuery]);

  function navigate(slug: string) {
    router.push(`/chapter/${slug}`);
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
      className="sm:max-w-lg"
    >
      <Command label="Search chapters" shouldFilter={false} className="bg-transparent p-0">
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Search chapters..."
          aria-label="Search chapters"
        />
        <CommandList>
          {!query.trim() ? (
            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
              Type to search across all subjects and chapters
            </div>
          ) : results.length === 0 ? (
            <CommandEmpty>No chapters found for &quot;{query}&quot;</CommandEmpty>
          ) : (
            <CommandGroup>
              {results.map((r) => (
                <CommandItem
                  key={r.chapterSlug}
                  value={`${r.chapterTitle} ${r.subjectName} ${r.chapterSlug}`}
                  onSelect={() => navigate(r.chapterSlug)}
                  className="gap-3 px-4 py-3"
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
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
        <div className="flex items-center justify-end gap-1.5 border-t border-border/40 px-3 py-2 text-[10px] text-muted-foreground">
          <Kbd>
            ESC
          </Kbd>
          to close
        </div>
      </Command>
    </CommandDialog>
  );
}
