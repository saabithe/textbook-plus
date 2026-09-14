import type { ReactNode } from "react";
import { Atom } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScientistCardProps {
  name: string;
  years?: string;
  /** Shown as a small badge under the name. */
  field?: string;
  /** The scientist's key contribution/main idea. */
  keyIdea: ReactNode;
  /** Optional "why / how" explanation shown below the key idea. */
  children?: ReactNode;
  /** Accent color (hex). Defaults to violet. */
  color?: string;
}

export function ScientistCard({
  name,
  years,
  field,
  keyIdea,
  children,
  color = "#7c3aed",
}: ScientistCardProps) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .filter((c) => c && /[A-Za-z\u00C0-\u00FF]/.test(c))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="relative my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
      />
      <div className="px-5 py-4">
        <div className="flex items-start gap-3.5">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold text-white shadow-md"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
          >
            {initials}
          </span>
          <div className="min-w-0">
            <p
              className="mb-1 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.14em]"
              style={{ color }}
            >
              <Atom className="h-3.5 w-3.5" /> Scientist
            </p>
            <h3 className="text-lg font-extrabold tracking-tight text-foreground leading-tight">
              {name}
            </h3>
            {(years || field) && (
              <p className="mt-0.5 text-xs text-muted-foreground">
                {years && <span className="font-semibold">{years}</span>}
                {years && field && <span className="mx-1.5 text-border/80">·</span>}
                {field}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <p className="mb-1.5 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-700 dark:text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Key idea
          </p>
          <div
            className={cn(
              "rounded-xl border px-3.5 py-3 text-[0.95rem] leading-[1.75] text-foreground/90"
            )}
            style={{
              borderColor: `${color}40`,
              background: `color-mix(in srgb, ${color} 6%, transparent)`,
            }}
          >
            {keyIdea}
          </div>
        </div>

        {children && (
          <div className="mt-3.5 text-[0.95rem] leading-[1.75] text-foreground/85">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}