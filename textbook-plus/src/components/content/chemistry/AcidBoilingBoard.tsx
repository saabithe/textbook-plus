import { Fragment, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BoilingRung {
  /** Family or compound class, e.g. "Alcohol". */
  label: ReactNode;
  /** Tints the rung as the top of the supplied sequence. */
  highlight?: boolean;
}

interface AcidBoilingBoardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The order, lowest boiling point first. */
  order: BoilingRung[];
  /** Why the acids sit at the top, one fact per row. */
  reasons: ReactNode[];
  /** Caption under the dimer diagram. */
  dimerCaption?: ReactNode;
}

/** Two carboxylic acid molecules closed into a ring by two hydrogen bonds. */
function DimerDiagram() {
  return (
    <svg
      viewBox="0 0 260 170"
      role="img"
      aria-label="Two carboxylic acid molecules held together as a dimer by two hydrogen bonds"
      className="h-auto w-56 shrink-0 text-foreground"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeWidth={1.3} fill="none">
        {/* Top molecule: O=C–O–H */}
        <line x1="66" y1="52" x2="96" y2="52" />
        <line x1="66" y1="58" x2="96" y2="58" />
        <line x1="112" y1="55" x2="134" y2="55" />
        <line x1="150" y1="55" x2="168" y2="55" />
        <line x1="104" y1="47" x2="104" y2="28" />
        {/* Bottom molecule: H–O–C=O */}
        <line x1="92" y1="125" x2="74" y2="125" />
        <line x1="126" y1="125" x2="148" y2="125" />
        <line x1="164" y1="122" x2="194" y2="122" />
        <line x1="164" y1="128" x2="194" y2="128" />
        <line x1="156" y1="133" x2="156" y2="152" />
      </g>

      {/* Hydrogen bonds */}
      <g
        stroke="var(--subject-chemistry)"
        strokeLinecap="round"
        strokeWidth={1.3}
        strokeDasharray="3 3"
        fill="none"
      >
        <line x1="176" y1="63" x2="176" y2="114" />
        <line x1="58" y1="63" x2="58" y2="114" />
      </g>

      <g fill="currentColor" fontSize={11} fontWeight={700} textAnchor="middle">
        <text x="58" y="59">O</text>
        <text x="104" y="59">C</text>
        <text x="142" y="59">O</text>
        <text x="176" y="59">H</text>
        <text x="58" y="129">H</text>
        <text x="92" y="129">O</text>
        <text x="156" y="129">C</text>
        <text x="200" y="129">O</text>
      </g>

      <g fill="currentColor" fontSize={10} fontWeight={700} textAnchor="middle" opacity={0.8}>
        <text x="104" y="22">R</text>
        <text x="156" y="162">R</text>
      </g>

      <text
        x="222"
        y="92"
        textAnchor="middle"
        fontSize={7}
        fontWeight={700}
        fill="var(--subject-chemistry)"
      >
        H-bond
      </text>
    </svg>
  );
}

/**
 * AcidBoilingBoard — the boiling-point order as a left-to-right ladder with the
 * acids tinted at the top, then the two reasons printed as separate rows, then
 * the dimer drawn. The order, the cause and the structure it produces stay in
 * one frame, so the acid's high boiling point is not a fact to memorise alone.
 */
export function AcidBoilingBoard({
  title,
  order,
  reasons,
  dimerCaption,
}: AcidBoilingBoardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Boiling point"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          Lowest → highest
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <ol className="flex flex-wrap items-stretch gap-1">
          {order.map((rung, index) => (
            <Fragment key={index}>
              {index > 0 && (
                <li
                  aria-hidden
                  className="flex items-center px-0.5 text-[1rem] font-extrabold leading-none text-muted-foreground"
                >
                  &lt;
                </li>
              )}
              <li
                className={cn(
                  "flex min-w-0 flex-col items-center justify-center rounded-md border px-2.5 py-1.5 text-center",
                  rung.highlight
                    ? "border-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_12%,transparent)]"
                    : "border-border/70 bg-muted/20",
                )}
              >
                <span
                  className={cn(
                    "text-[0.8rem] font-extrabold leading-snug",
                    rung.highlight ? "text-[var(--subject-chemistry)]" : "text-foreground",
                  )}
                >
                  {rung.label}
                </span>
                {rung.highlight && (
                  <span className="mt-0.5 text-[0.52rem] font-extrabold uppercase tracking-[0.08em] text-[var(--subject-chemistry)]">
                    Highest
                  </span>
                )}
              </li>
            </Fragment>
          ))}
        </ol>

        <div className="mt-3 rounded-md border border-border/70 bg-muted/20 px-3 py-2.5">
          <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            Reason
          </p>
          <ul className="mt-1.5 space-y-1">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check
                  aria-hidden
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--subject-chemistry)]"
                  strokeWidth={3}
                />
                <span className="min-w-0 text-[0.82rem] font-semibold leading-snug text-foreground/90">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2 flex flex-col items-center gap-2 rounded-md border border-border/70 bg-card px-3 py-3 sm:flex-row sm:items-center">
          <DimerDiagram />
          <div className="min-w-0">
            <span className="inline-block rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-2 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-[var(--subject-chemistry)]">
              Stable dimer
            </span>
            <p className="mt-1.5 text-[0.8rem] leading-relaxed text-foreground/85">
              {dimerCaption ?? "Two hydrogen bonds hold the pair together."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
