import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Subject } from "@/data/subjects";

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const Icon = subject.icon;

  return (
    <Link
      href={`/subjects/${subject.slug}`}
      className={cn(
        "group flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 sm:gap-5 sm:p-7",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_var(--card-shadow)]",
        "hover:border-[var(--card-border)]"
      )}
      style={
        {
          "--card-shadow": subject.color,
          "--card-border": subject.color,
        } as React.CSSProperties
      }
    >
      {/* Icon */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl"
        style={{ backgroundColor: subject.colorLight }}
      >
        <Icon
          className="h-7 w-7 transition-colors duration-300"
          style={{ color: subject.color }}
          strokeWidth={1.8}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {subject.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {subject.chapterCount} chapters
        </p>
      </div>
    </Link>
  );
}
