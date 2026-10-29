import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Subject } from "@/data/subjects";

interface SubjectCardProps {
  subject: Subject;
}

/* The hover signature is the ONE sanctioned shadow in the system: it exists
   only while the card is pointed at. Resting state is a flat hairline box. */
export function SubjectCard({ subject }: SubjectCardProps) {
  const Icon = subject.icon;
  const total = subject.chapterCount;

  return (
    <Link
      href={`/subjects/${subject.slug}`}
      className="group block transition-transform duration-[240ms] ease-[var(--ease-blueprint)] motion-safe:hover:-translate-y-1"
    >
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-[box-shadow,border-color] duration-[240ms] ease-[var(--ease-blueprint)] group-hover:border-rule-strong group-hover:shadow-[0_12px_32px_-14px_var(--card-glow)]"
        style={
          {
            "--card-glow": subject.color,
          } as React.CSSProperties
        }
      >
        {/* 3px top rule — the subject hue as a marker, never a surface */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ backgroundColor: subject.color }}
        />

        <div className="flex flex-col gap-3 px-5 pb-5 pt-6 sm:px-6 sm:pt-7">
          <Icon
            aria-hidden
            className="h-5 w-5 transition-transform duration-[240ms] ease-[var(--ease-blueprint)] motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110"
            style={{ color: subject.color }}
            strokeWidth={1.8}
          />
          <h3 className="t-h3 font-bold">{subject.name}</h3>
          <p className="t-caption">{subject.description}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-border px-5 py-3 sm:px-6">
          <span className="t-micro tabular-nums">{total} chapters</span>
          <span
            className="flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground transition-colors duration-[240ms] ease-[var(--ease-blueprint)] group-hover:text-[var(--arrow-color)]"
            style={{ "--arrow-color": subject.color } as React.CSSProperties}
          >
            Open
            <ArrowRight
              aria-hidden
              className="h-3.5 w-3.5 transition-transform duration-[240ms] ease-[var(--ease-blueprint)] group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
