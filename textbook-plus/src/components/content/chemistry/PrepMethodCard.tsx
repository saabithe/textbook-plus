import type { ReactNode } from "react";
import { AlertTriangle, Check, Sparkles } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface PrepEquation {
  /** KaTeX for the equation. */
  latex: string;
  /** Caption under the equation, e.g. "Example". */
  label?: ReactNode;
}

export type PrepZoneTone = "default" | "warning" | "highlight" | "quiet";

export interface PrepZone {
  /** Zone heading, e.g. "Catalyst & function". */
  label: ReactNode;
  /** One line of prose for the zone. */
  text?: ReactNode;
  /** Equations printed as centred bands inside the zone. */
  equations?: PrepEquation[];
  /** Bullet rows, one fact each. */
  items?: ReactNode[];
  /** Warning tints the limitation, highlight the key selectivity, quiet the aside. */
  tone?: PrepZoneTone;
}

interface PrepMethodCardProps {
  /** Reaction or method name, e.g. "Rosenmund reduction". */
  title: ReactNode;
  /** Chip in the header, e.g. "From acid chlorides". */
  tag?: ReactNode;
  /** Framing line under the header, e.g. the reagent. */
  principle?: ReactNode;
  /** Zones in reading order — reaction, then what the condition does, then limits. */
  zones: PrepZone[];
}

const ZONE = {
  default: {
    frame: "border-border/70 bg-card",
    label: "text-muted-foreground",
    icon: null,
  },
  warning: {
    frame: "border-warning/40 bg-warning/[0.06]",
    label: "text-warning",
    icon: AlertTriangle,
  },
  highlight: {
    frame:
      "border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)]",
    label: "text-[var(--subject-chemistry)]",
    icon: Sparkles,
  },
  quiet: {
    frame: "border-border/70 bg-muted/25",
    label: "text-muted-foreground",
    icon: null,
  },
} as const;

/**
 * PrepMethodCard — one named preparation as a card of labelled zones: the
 * reaction equations first, then the catalyst and what it does, then the
 * limitation (warning tone) or the selectivity note (highlight tone). Zones keep
 * the reaction, the condition and the caveat from running into one paragraph.
 */
export function PrepMethodCard({
  title,
  tag,
  principle,
  zones,
}: PrepMethodCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-border px-4 py-3">
        <p className="text-sm font-extrabold leading-snug text-foreground">
          {title}
        </p>
        {tag && (
          <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-2 py-0.5 text-[0.66rem] font-extrabold text-[var(--subject-chemistry)]">
            {tag}
          </span>
        )}
      </div>

      <div className="space-y-2 px-3 py-3 sm:px-4 sm:py-4">
        {principle && (
          <p className="text-sm leading-relaxed text-foreground/85">{principle}</p>
        )}

        {zones.map((zone, index) => {
          const tone = ZONE[zone.tone ?? "default"];
          const Icon = tone.icon;

          return (
            <div
              key={index}
              className={cn(
                "rounded-md border px-3 py-2.5",
                tone.frame,
              )}
            >
              <div className="flex items-center gap-1.5">
                {Icon && (
                  <Icon
                    aria-hidden
                    className={cn(
                      "h-3.5 w-3.5 shrink-0",
                      zone.tone === "warning"
                        ? "text-warning"
                        : "text-[var(--subject-chemistry)]",
                    )}
                    strokeWidth={2}
                  />
                )}
                <span
                  className={cn(
                    "text-[0.6rem] font-extrabold uppercase tracking-[0.09em]",
                    tone.label,
                  )}
                >
                  {zone.label}
                </span>
              </div>

              {zone.text && (
                <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                  {zone.text}
                </p>
              )}

              {zone.equations && zone.equations.length > 0 && (
                <div className="mt-1.5 space-y-1.5">
                  {zone.equations.map((equation, equationIndex) => (
                    <div
                      key={equationIndex}
                      className="rounded-[4px] border border-border/70 bg-card px-2 py-2"
                    >
                      <div className="overflow-x-auto text-center text-foreground">
                        <Formula>{equation.latex}</Formula>
                      </div>
                      {equation.label && (
                        <p className="mt-1 text-center text-[0.62rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                          {equation.label}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {zone.items && zone.items.length > 0 && (
                <ul className="mt-1.5 space-y-1">
                  {zone.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex gap-2 text-[0.82rem] leading-relaxed text-foreground/90"
                    >
                      {zone.tone === "warning" ? (
                        <AlertTriangle
                          aria-hidden
                          className="mt-[0.2em] h-3 w-3 shrink-0 text-warning"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <Check
                          aria-hidden
                          className="mt-[0.2em] h-3 w-3 shrink-0 text-[var(--subject-chemistry)]"
                          strokeWidth={3}
                        />
                      )}
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
