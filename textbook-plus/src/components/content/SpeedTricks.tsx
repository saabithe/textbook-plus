"use client";

import { useId, useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface SpeedTricksProps {
  children: React.ReactNode;
}

export function SpeedTricks({ children }: SpeedTricksProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="my-6 border-y border-border">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-baseline gap-2.5 py-3 text-left transition-colors hover:bg-muted/60"
      >
        <ChevronRight
          className={cn(
            "h-4 w-4 shrink-0 self-center text-muted-foreground transition-transform duration-200",
            open && "rotate-90"
          )}
          aria-hidden="true"
        />
        <span className="t-micro text-foreground">Speed tricks</span>
        <span className="t-micro ml-auto hidden tabular-nums sm:block">
          {open ? "Hide" : "Show"}
        </span>
      </button>

      {open && (
        <>
          <Separator />
          <div
            id={panelId}
            className={cn(
              // Numbered rows, hairlines between, no colour (§14.3).
              "py-1 pb-3 text-base leading-[1.7] text-foreground",
              "[counter-reset:trick]",
              "[&_ul]:m-0 [&_ul]:list-none [&_ul]:space-y-0 [&_ul]:p-0",
              "[&_li]:relative [&_li]:border-b [&_li]:border-border [&_li]:py-2.5 [&_li]:pl-7 [&_li]:pr-1",
              "[&_li:last-child]:border-b-0",
              "[&_li]:[counter-increment:trick]",
              "[&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-2.5",
              "[&_li]:before:tabular-nums [&_li]:before:text-[0.6875rem] [&_li]:before:font-bold",
              "[&_li]:before:text-muted-foreground [&_li]:before:content-[counter(trick)]"
            )}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}
