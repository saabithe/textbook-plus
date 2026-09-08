import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Class11Subject } from "@/data/class11";

interface Class11SubjectCardProps {
  subject: Class11Subject;
}

export function Class11SubjectCard({ subject }: Class11SubjectCardProps) {
  const Icon = subject.icon;

  return (
    <Link
      href={`/class-11/${subject.slug}`}
      className="group block transition-all duration-300 ease-out hover:-translate-y-1"
    >
      <Card
        className="border border-border/60 py-0 ring-0 transition-all duration-300 ease-out group-hover:border-[var(--card-border)] group-hover:shadow-[0_8px_30px_-12px_var(--card-shadow)]"
        style={
          {
            "--card-shadow": subject.color,
            "--card-border": subject.color,
          } as React.CSSProperties
        }
      >
        <CardContent className="flex flex-col items-start gap-4 p-5 px-5 sm:gap-5 sm:p-7 sm:px-7">
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

          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {subject.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {subject.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
