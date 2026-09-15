import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  SubjectProgressBadge,
  SubjectProgressRing,
} from "./SubjectCardProgress";
import type { Subject } from "@/data/subjects";

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const Icon = subject.icon;
  const total = subject.chapterCount;

  return (
    <Link
      href={`/subjects/${subject.slug}`}
      className="group block transition-all duration-300 ease-out hover:-translate-y-1"
    >
      <Card
        className="overflow-hidden border-border/70 py-0 shadow-sm transition-all duration-300 ease-out group-hover:shadow-[0_12px_32px_-14px_var(--card-shadow)]"
        style={
          {
            "--card-shadow": subject.color,
          } as React.CSSProperties
        }
      >
        <CardContent className="flex flex-col gap-4 p-5 transition-colors duration-300 group-hover:bg-muted/20 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:h-16 sm:w-16"
              style={{
                background: `linear-gradient(135deg, ${subject.color}, ${subject.color}B3)`,
                boxShadow: `0 8px 20px -8px ${subject.color}`,
              }}
            >
              <Icon
                className="h-7 w-7 text-white sm:h-8 sm:w-8"
                strokeWidth={2}
              />
            </div>
            <SubjectProgressBadge
              slug={subject.slug}
              total={total}
              color={subject.color}
              name={subject.name}
            />
          </div>

          <h3 className="text-lg font-extrabold tracking-tight text-foreground">
            {subject.name}
          </h3>

          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3.5">
            <span className="text-xs font-semibold text-muted-foreground">
              {total} chapters
            </span>
            <SubjectProgressRing
              slug={subject.slug}
              total={total}
              color={subject.color}
              name={subject.name}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}