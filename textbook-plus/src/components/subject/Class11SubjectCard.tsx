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
      className="group block transition-all duration-300 ease-out hover:-translate-y-1.5"
    >
      <Card
        className="overflow-hidden border-2 border-transparent py-0 ring-0 transition-all duration-300 ease-out group-hover:border-[var(--card-border)] group-hover:shadow-[0_12px_32px_-12px_var(--card-shadow)]"
        style={
          {
            "--card-shadow": subject.color,
            "--card-border": subject.color,
          } as React.CSSProperties
        }
      >
        <CardContent className="flex flex-col items-start gap-4 p-5 sm:gap-5 sm:p-6">
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

          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-extrabold tracking-tight text-foreground">
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
