import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ContinueItem {
  href: string;
  title: string;
  subject: string;
  color: string;
  completed?: boolean;
  meta?: string;
}

interface ContinueCardProps extends ContinueItem {
  className?: string;
}

export function ContinueCard({ href, title, subject, color, completed, meta, className }: ContinueCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-border/70 bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <span
        className="absolute inset-y-0 left-0 w-1"
        style={{ background: `linear-gradient(180deg, ${color}, ${color}66)` }}
      />
      {completed && (
        <span className="absolute right-3 top-3 text-emerald-500">
          <CheckCircle2 className="h-4 w-4" />
        </span>
      )}
      <div className="min-w-0 pl-2">
        <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          {subject}
        </p>
        <h3 className="mt-1.5 line-clamp-2 text-sm font-bold leading-snug text-foreground">
          {title}
        </h3>
        {meta && <p className="mt-1 text-xs text-muted-foreground/70">{meta}</p>}
      </div>
      <span className="mt-auto flex items-center gap-1 pl-2 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-[var(--hover-color)]" style={{ "--hover-color": color } as React.CSSProperties}>
        {completed ? "Review" : "Continue"}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}