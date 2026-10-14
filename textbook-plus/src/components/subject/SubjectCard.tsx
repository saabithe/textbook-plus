import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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

          <h3 className="text-lg font-extrabold tracking-tight text-foreground">
            {subject.name}
          </h3>

          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3.5">
            <span className="text-xs font-semibold text-muted-foreground">
              {total} chapters
            </span>
            <span
              className="flex items-center gap-1 text-xs font-bold text-muted-foreground transition-colors group-hover:text-[var(--arrow-color)]"
              style={{ "--arrow-color": subject.color } as React.CSSProperties}
            >
              Open
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
