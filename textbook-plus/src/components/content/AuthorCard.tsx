"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface AuthorCardProps {
  name: string;
  /** Secondary line under the name — transliteration or native script. */
  subname?: string;
  /** Role label above the name. Defaults to "Author". */
  role?: string;
  /** Genre / lesson type. */
  genre?: string;
  /** Genre / lesson type in Arabic script. */
  genreArabic?: string;
  /** Avatar initials. Derived from `name` when omitted. */
  initials?: string;
  /** Writing direction of the card. */
  dir?: "ltr" | "rtl";
  children?: React.ReactNode;
  className?: string;
}

export function AuthorCard({
  name,
  subname,
  role = "Author",
  genre,
  genreArabic,
  initials,
  dir = "ltr",
  children,
  className,
}: AuthorCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = !!children;
  const avatarInitials =
    initials ??
    name
      .split(/\s+/)
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <Card
      dir={dir}
      className={cn(
        "my-6 gap-0 rounded-2xl border-border/50 bg-card py-0 shadow-sm",
        className
      )}
    >
      <CardContent className="px-6 py-5">
        <Collapsible open={expanded} onOpenChange={setExpanded}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-extrabold text-white shadow-md shadow-fuchsia-500/25">
                {avatarInitials}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] mb-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
                  {role}
                </p>
                <h3
                  dir="auto"
                  className="text-xl font-extrabold tracking-tight text-foreground"
                >
                  {name}
                </h3>
                {subname && (
                  <p dir="auto" className="mt-0.5 text-sm font-semibold text-muted-foreground">
                    {subname}
                  </p>
                )}
              </div>
            </div>
            {hasChildren && (
              <CollapsibleTrigger
                className="flex shrink-0 items-center justify-center gap-1.5 rounded-xl p-2.5 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground aria-expanded:bg-muted/50"
                aria-label={expanded ? "Collapse author details" : "Expand author details"}
              >
                <span className="text-[0.72rem] font-bold uppercase tracking-widest">
                  {expanded ? "Hide" : "More"}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    expanded && "rotate-180"
                  )}
                />
              </CollapsibleTrigger>
            )}
          </div>

          {/* Genre / lesson type */}
          {(genre || genreArabic) && (
            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-border/40 pt-3.5">
              <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                Genre
              </span>
              {genreArabic && (
                <span dir="rtl" className="text-[1.05rem] font-bold text-foreground">
                  {genreArabic}
                </span>
              )}
              {genre && (
                <span dir="ltr" className="text-sm font-medium text-muted-foreground">
                  {genre}
                </span>
              )}
            </div>
          )}

          {hasChildren && (
            <CollapsibleContent
              keepMounted
              className="overflow-hidden transition-all duration-300 ease-in-out data-[closed]:max-h-0 data-[closed]:opacity-0 data-[open]:mt-4 data-[open]:max-h-[2000px] data-[open]:opacity-100"
            >
              <div className="text-[0.95rem] leading-[1.75] text-foreground/85">
                {children}
              </div>
            </CollapsibleContent>
          )}
        </Collapsible>
      </CardContent>
    </Card>
  );
}
