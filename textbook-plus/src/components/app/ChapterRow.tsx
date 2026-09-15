import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export type ChapterStatus = "done" | "started" | "pending";

interface ChapterRowProps {
  href: string;
  number: number;
  title: string;
  meta?: string;
  color: string;
  status?: ChapterStatus;
  badge?: React.ReactNode;
  className?: string;
}

const STATUS_UI: Record<ChapterStatus, { label: string; className: string }> = {
  done: {
    label: "Completed",
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  started: {
    label: "Started",
    className: "bg-primary/10 text-primary",
  },
  pending: {
    label: "Not started",
    className: "bg-muted text-muted-foreground",
  },
};

export function ChapterRow({
  href,
  number,
  title,
  meta,
  color,
  status = "pending",
  badge,
  className,
}: ChapterRowProps) {
  const statusUi = STATUS_UI[status];

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-xl border border-transparent px-3.5 py-3 transition-all duration-200 hover:bg-card hover:shadow-sm sm:gap-4 sm:px-4 sm:py-3.5",
        status === "done" && "border-emerald-500/15 bg-emerald-500/[0.04] hover:border-emerald-500/25",
        className
      )}
    >
      <span
        className={cn(
          "flex h-9 min-w-9 items-center justify-center rounded-lg text-xs font-bold transition-colors sm:h-10 sm:min-w-10 sm:text-sm",
          status === "done" && "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
        )}
        style={
          status !== "done"
            ? { backgroundColor: `${color}15`, color }
            : undefined
        }
      >
        {status === "done" ? <Check className="h-4 w-4" /> : String(number).padStart(2, "0")}
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-[var(--hover-color)] sm:text-[15px]"
          style={{ "--hover-color": color } as React.CSSProperties}
        >
          {title}
        </span>
        {meta && <span className="text-xs text-muted-foreground/60">{meta}</span>}
      </div>

      {status !== "done" && (badge ?? (
        <Badge
          variant="outline"
          className={cn("hidden h-6 rounded-full px-2.5 text-[0.68rem] font-semibold sm:inline-flex", statusUi.className)}
        >
          {statusUi.label}
        </Badge>
      ))}

      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-muted-foreground/70" />
    </Link>
  );
}