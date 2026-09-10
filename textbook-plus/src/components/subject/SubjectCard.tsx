import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SubjectProgressBadge, SubjectProgressBar } from "./SubjectCardProgress";
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
      className="group block transition-all duration-300 ease-out hover:-translate-y-1.5"
    >
      <Card
        className="overflow-hidden border-2 border-transparent py-0 transition-all duration-300 ease-out group-hover:border-[var(--card-border)] group-hover:shadow-[0_12px_32px_-12px_var(--card-shadow)]"
        style={
          {
            "--card-shadow": subject.color,
            "--card-border": subject.color,
          } as React.CSSProperties
        }
      >
        <CardContent className="flex flex-col gap-4 p-5 sm:p-6">
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

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-extrabold tracking-tight text-foreground">
              {subject.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {total} chapters
            </p>
          </div>

          <SubjectProgressBar
            slug={subject.slug}
            total={total}
            color={subject.color}
            name={subject.name}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
