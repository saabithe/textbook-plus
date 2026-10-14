import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChapterRowProps {
  href: string;
  number: number;
  title: string;
  meta?: string;
  color: string;
  badge?: React.ReactNode;
  className?: string;
}

export function ChapterRow({
  href,
  number,
  title,
  meta,
  color,
  badge,
  className,
}: ChapterRowProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-xl border border-transparent px-3.5 py-3 transition-all duration-200 hover:bg-card hover:shadow-sm sm:gap-4 sm:px-4 sm:py-3.5",
        className
      )}
    >
      <span
        className="flex h-9 min-w-9 items-center justify-center rounded-lg text-xs font-bold transition-colors sm:h-10 sm:min-w-10 sm:text-sm"
        style={{ backgroundColor: `${color}15`, color }}
      >
        {String(number).padStart(2, "0")}
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span
          className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-[var(--hover-color)] sm:text-[15px]"
          style={{ "--hover-color": color } as React.CSSProperties}
        >
          {title}
        </span>
        {meta && <span className="text-xs text-muted-foreground/60">{meta}</span>}
      </div>

      {badge}

      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-muted-foreground/70" />
    </Link>
  );
}
