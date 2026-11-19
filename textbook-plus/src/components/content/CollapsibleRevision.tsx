"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleRevisionProps {
  /** Clickable header content — include the section heading so deep links and search terms survive. */
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  label?: string;
}

/**
 * Shared shell for the app's revision sheets and equation boards.
 * Collapsed by default; the whole header is the toggle.
 */
export function CollapsibleRevision({
  header,
  children,
  className,
  contentClassName,
  label = "revision sheet",
}: CollapsibleRevisionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "my-6 overflow-hidden rounded-xl border border-border bg-card",
        className
      )}
    >
      <div className="relative">
        {header}
        <ChevronDown
          className={cn(
            "pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${label}`}
          className="absolute inset-0 z-10 cursor-pointer rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
        />
      </div>
      {open && <div className={contentClassName}>{children}</div>}
    </div>
  );
}
