"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface ChapterIntroProps {
  /** Who wrote it — author, poet, playwright, or speaker. */
  author: string;
  /** Label before the name. Defaults to "Author". */
  role?: string;
  /** Secondary line: native script, transliteration, or a translator credit. */
  subname?: string;
  /** What kind of text it is — "Short story", "Poem", "One-act play · Comedy" … */
  genre?: string;
  /** The genre in Arabic script. */
  genreArabic?: string;
  /** Named parts, for plays and stories only. Plays list the full cast. */
  characters?: string[];
  /** Author facts, revealed behind the "More about the author" dropdown. */
  children?: ReactNode;
  dir?: "ltr" | "rtl";
  className?: string;
}

export function ChapterIntro({
  author,
  role = "Author",
  subname,
  genre,
  genreArabic,
  characters,
  children,
  dir = "ltr",
  className,
}: ChapterIntroProps) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(children);

  return (
    <section
      dir={dir}
      className={cn("my-8 border-y border-border py-4", className)}
    >
      {/* Who + what */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
        <span className="t-micro text-muted-foreground">{role}</span>
        <span dir="auto" className="text-[15px] font-bold leading-tight tracking-tight text-foreground">
          {author}
        </span>
        {subname && (
          <span dir="auto" className="text-[15px] font-medium text-muted-foreground">
            {subname}
          </span>
        )}
        {(genre || genreArabic) && (
          <span className="ms-auto flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-[15px] text-muted-foreground">
            {genreArabic && (
              <span dir="rtl" className="font-semibold text-foreground/80">
                {genreArabic}
              </span>
            )}
            {genre && <span>{genre}</span>}
          </span>
        )}
      </div>

      {/* Who is in it — plays and stories only */}
      {characters && characters.length > 0 && (
        <div className="mt-2 border-t border-border pt-2 text-[15px] leading-relaxed text-foreground/75">
          <span className="me-2 t-micro text-muted-foreground">Characters</span>
          {characters.join(" · ")}
        </div>
      )}

      {/* Author facts, folded away */}
      {hasChildren && (
        <div className="mt-2 border-t border-border pt-2">
          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger className="flex w-full items-center gap-1.5 t-micro text-muted-foreground transition-colors hover:text-foreground">
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 shrink-0 transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
              {open ? "Hide author notes" : "More about the author"}
            </CollapsibleTrigger>
            <CollapsibleContent
              keepMounted
              className="overflow-hidden transition-all duration-300 ease-in-out data-[closed]:max-h-0 data-[closed]:opacity-0 data-[open]:max-h-[2000px] data-[open]:opacity-100"
            >
              <div className="pt-2 text-[15px] leading-[1.7] text-foreground/80">
                {children}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}
    </section>
  );
}