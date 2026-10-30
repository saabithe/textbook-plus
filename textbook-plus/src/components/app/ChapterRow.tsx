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
  /** Text direction of the title — "rtl" for native-script titles. */
  titleDir?: "ltr" | "rtl";
  className?: string;
}

/* A row, not a card: the separator is the 1px rule it carries underneath. */
export function ChapterRow({
  href,
  number,
  title,
  meta,
  color,
  badge,
  titleDir = "ltr",
  className,
}: ChapterRowProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 border-b border-border py-4 pl-1 pr-2 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/3 sm:gap-4",
        className
      )}
    >
      <span
        className="w-8 shrink-0 text-[13px] font-semibold tabular-nums"
        style={{ color }}
      >
        {String(number).padStart(2, "0")}
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span
          dir={titleDir}
          className={cn(
            "truncate text-[15px] font-semibold text-foreground min-h-[44px] flex items-center",
            titleDir === "rtl" && "arabic-font"
          )}
        >
          {title}
        </span>
        {meta && <span className="t-micro">{meta}</span>}
      </div>

      {badge}

      <ChevronRight
        aria-hidden
        className="h-4 w-4 shrink-0 text-faint transition-transform duration-[120ms] ease-[var(--ease-blueprint)] group-hover:translate-x-0.5"
      />
    </Link>
  );
}
