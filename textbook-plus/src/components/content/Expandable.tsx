"use client";

import { useId, useState } from "react";
import { ChevronRight, BookOpen, FlaskConical, ClipboardList, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

type ExpandableVariant = "example" | "exercise" | "misc" | "default";

interface ExpandableProps {
  title: string;
  id?: string;
  variant?: ExpandableVariant;
  children: React.ReactNode;
}

function inferVariant(title: string): ExpandableVariant {
  const t = title.toLowerCase();
  if (t.includes("exercise")) return "exercise";
  if (t.includes("misc")) return "misc";
  if (t.includes("example")) return "example";
  return "default";
}

const variantStyles = {
  example: {
    wrapper: "border-blue-500/20 shadow-sm",
    trigger: "bg-blue-500/[0.07] hover:bg-blue-500/[0.11] dark:bg-blue-500/[0.10] dark:hover:bg-blue-500/[0.14] border-b-blue-500/10",
    iconWrap: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    Icon: FlaskConical,
    badge: "EX",
    badgeClass: "bg-blue-500 text-white",
    titleClass: "text-blue-900 dark:text-blue-100",
  },
  exercise: {
    wrapper: "border-amber-500/30 shadow-sm",
    trigger: "bg-amber-500/[0.09] hover:bg-amber-500/[0.14] dark:bg-amber-500/[0.12] dark:hover:bg-amber-500/[0.16] border-b-amber-500/15",
    iconWrap: "bg-amber-500/20 text-amber-700 dark:text-amber-300",
    Icon: ClipboardList,
    badge: "EX",
    badgeClass: "bg-amber-500 text-white",
    titleClass: "text-amber-900 dark:text-amber-100",
  },
  misc: {
    wrapper: "border-slate-500/20 shadow-sm",
    trigger: "bg-slate-500/[0.06] hover:bg-slate-500/[0.10] dark:bg-slate-500/[0.10] dark:hover:bg-slate-500/[0.14]",
    iconWrap: "bg-slate-500/15 text-slate-600 dark:text-slate-400",
    Icon: Layers,
    badge: "M",
    badgeClass: "bg-slate-600 text-white",
    titleClass: "text-slate-800 dark:text-slate-100",
  },
  default: {
    wrapper: "border-border/60",
    trigger: "bg-muted/40 hover:bg-muted/60",
    iconWrap: "bg-muted text-foreground",
    Icon: BookOpen,
    badge: null as string | null,
    badgeClass: "",
    titleClass: "text-foreground",
  },
} as const;

export function Expandable({ title, id, variant, children }: ExpandableProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const v = variantStyles[variant ?? inferVariant(title)];
  const VariantIcon = v.Icon;

  return (
    <div id={id} className={cn("my-6 rounded-xl border overflow-hidden", v.wrapper)}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className={cn("flex items-center gap-2.5 w-full px-4 py-3 text-left transition-colors border-b", open ? "border-border/30" : "border-transparent", v.trigger)}
      >
        <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-md", v.iconWrap)}>
          <VariantIcon className="h-3.5 w-3.5" />
        </span>
        <ChevronRight
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            v.titleClass,
            open && "rotate-90"
          )}
        />
        <span className={cn("text-sm font-semibold", v.titleClass)}>{title}</span>
        {v.badge && (
          <span className={cn("ml-auto text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded", v.badgeClass)}>
            {v.badge}
          </span>
        )}
      </button>
      {open && (
        <div id={panelId} className="px-5 py-4 text-[0.95rem] leading-[1.75] text-foreground/85 bg-card">
          {children}
        </div>
      )}
    </div>
  );
}
