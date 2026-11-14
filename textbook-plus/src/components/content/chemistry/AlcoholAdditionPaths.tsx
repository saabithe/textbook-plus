import { type ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

type StageTone = "default" | "intermediate" | "product";

export interface AlcoholStage {
  /** Step or stage name, e.g. "Hemiacetal formation". */
  label: ReactNode;
  /** KaTeX for the stage. */
  equation: string;
  /** Qualifier under the equation, e.g. "Unstable intermediate". */
  note?: ReactNode;
  tone?: StageTone;
}

export interface KetoneAlcoholRoute {
  /** Why the direct route fails, e.g. "Do not react directly with mono-alcohols efficiently." */
  note: ReactNode;
  /** Reagent name, e.g. "Ethylene glycol". */
  reagent: ReactNode;
  /** KaTeX for the reagent, e.g. HO–CH₂–CH₂–OH. */
  reagentEquation: string;
  /** KaTeX for the overall reaction. */
  equation: string;
}

interface AlcoholAdditionPathsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The aldehyde route: one stage per equivalent of alcohol. */
  aldehyde: AlcoholStage[];
  /** The ketone route: the glycol that gives the cyclic ketal. */
  ketone: KetoneAlcoholRoute;
}

const TONE: Record<StageTone, string> = {
  default: "border-border/70 bg-card",
  intermediate:
    "border-warning/40 bg-warning/[0.06]",
  product:
    "border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)]",
};

function StageBox({ stage }: { stage: AlcoholStage }) {
  const tone = stage.tone ?? "default";

  return (
    <div className={cn("rounded-md border px-3 py-2.5", TONE[tone])}>
      <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
        {stage.label}
      </p>
      <div className="mt-1.5 overflow-x-auto text-center text-foreground">
        <Formula>{stage.equation}</Formula>
      </div>
      {stage.note && (
        <p className="mt-1 text-center text-[0.66rem] font-bold uppercase tracking-[0.07em] text-muted-foreground">
          {stage.note}
        </p>
      )}
    </div>
  );
}

/**
 * AlcoholAdditionPaths — the two alcohol routes side by side: aldehydes climb
 * one equivalent at a time from hemiacetal to acetal, while ketones refuse the
 * mono-alcohol and take ethylene glycol to the cyclic ketal instead. Reading the
 * columns in parallel makes the asymmetry the point, not a footnote.
 */
export function AlcoholAdditionPaths({
  title,
  aldehyde,
  ketone,
}: AlcoholAdditionPathsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Addition of alcohols (R–OH)"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          Two routes
        </span>
      </div>

      <div className="grid gap-3 px-3 py-3 sm:px-4 sm:py-4 lg:grid-cols-2">
        <div className="min-w-0">
          <div className="flex items-baseline justify-between gap-2 rounded-[3px] bg-muted/45 px-2.5 py-1.5">
            <p className="text-[0.8rem] font-extrabold leading-snug text-foreground">
              Aldehydes
            </p>
            <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.07em] text-muted-foreground">
              Hemiacetal → Acetal
            </span>
          </div>

          <div className="mt-2">
            {aldehyde.map((stage, index) => (
              <div key={index}>
                <StageBox stage={stage} />
                {index < aldehyde.length - 1 && (
                  <ArrowDown
                    aria-hidden
                    className="mx-auto my-1 h-3.5 w-3.5 text-muted-foreground"
                    strokeWidth={2.5}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="flex items-baseline justify-between gap-2 rounded-[3px] bg-muted/45 px-2.5 py-1.5">
            <p className="text-[0.8rem] font-extrabold leading-snug text-foreground">
              Ketones
            </p>
            <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.07em] text-muted-foreground">
              Cyclic ketal
            </span>
          </div>

          <div className="mt-2 rounded-md border border-border/70 bg-card px-3 py-2.5">
            <p className="text-[0.82rem] leading-relaxed text-foreground/90">{ketone.note}</p>

            <div className="mt-2 rounded-[4px] border border-border/70 bg-muted/25 px-2 py-2 text-center">
              <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                {ketone.reagent}
              </p>
              <div className="mt-1 overflow-x-auto text-foreground">
                <Formula>{ketone.reagentEquation}</Formula>
              </div>
            </div>

            <div className="mt-2 rounded-[4px] border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-2 py-2">
              <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
                Reaction
              </p>
              <div className="mt-1 overflow-x-auto text-center text-foreground">
                <Formula>{ketone.equation}</Formula>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
