import { Fragment } from "react";
import { ArrowDown, ArrowRight, Pill, Sparkles, Zap } from "lucide-react";

/**
 * Allergies — the allergy block: the exaggerated-response definition, the
 * common-allergen chips, the four-stage reaction sequence, and the compact
 * symptoms / treatment pair, followed by a quick-revision table.
 *
 * rose / pink = allergy and its reaction sequence,
 * amber = the treatment strip.
 */

/* -------------------------------------------------------------------------- */
/* Shared helpers                                                              */
/* -------------------------------------------------------------------------- */

function DotList({ items, dotClass }: { items: string[]; dotClass: string }) {
  return (
    <div className="mt-2 space-y-1">
      {items.map((item) => (
        <div key={item} className="flex gap-2 text-[10.5px] leading-snug text-foreground">
          <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dotClass}`} aria-hidden />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. AllergySection                                                           */
/* -------------------------------------------------------------------------- */

const ALLERGENS = ["Dust", "Dust mites", "Pollen", "Animal dander"];

const STAGES: { title: string; note?: string }[] = [
  { title: "Allergen exposure" },
  { title: "IgE-mediated response", note: "Mediated by IgE antibodies." },
  { title: "Mast-cell chemical release", note: "Mast cells release histamine and serotonin." },
  { title: "Symptoms" },
];

const SYMPTOMS = ["Sneezing.", "Watery eyes.", "Running nose.", "Itching.", "Difficulty in breathing."];

const TREATMENTS = ["Antihistamines.", "Adrenaline.", "Steroids."];

export function AllergySection() {
  return (
    <div className="my-5 space-y-4">
      {/* Definition */}
      <div className="flex items-start gap-2.5 rounded-xl border-2 border-rose-600/35 bg-rose-50/40 p-4 dark:bg-rose-950/20">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Definition
          </div>
          <p className="mt-1 text-[10.5px] leading-snug text-foreground">
            <strong>Allergy</strong> = An exaggerated response of the immune system to certain normally harmless
            antigens present in the environment.
          </p>
          <p className="mt-1 text-[10.5px] leading-snug text-foreground">
            These allergy-causing antigens are called <strong>allergens</strong>.
          </p>
        </div>
      </div>

      {/* Common allergens */}
      <div>
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Common allergens
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {ALLERGENS.map((allergen) => (
            <span
              key={allergen}
              className="rounded-md border border-rose-600/30 bg-rose-50/45 px-2 py-1 text-[11px] font-semibold text-foreground dark:bg-rose-950/20"
            >
              {allergen}
            </span>
          ))}
        </div>
      </div>

      {/* Four-stage reaction sequence */}
      <div className="rounded-xl border border-rose-600/25 bg-card p-3 dark:bg-rose-950/10">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Sequence of events
        </div>
        <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-stretch">
          {STAGES.map((stage, index) => (
            <Fragment key={stage.title}>
              <div className="flex-1 rounded-lg border border-rose-600/30 bg-rose-50/40 p-2.5 dark:bg-rose-950/20">
                <div className="flex items-center gap-1.5">
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-rose-600/40 bg-card text-[8.5px] font-bold text-rose-800 dark:text-rose-200">
                    {index + 1}
                  </span>
                  <span className="text-[10.5px] font-bold leading-snug text-foreground">{stage.title}</span>
                </div>
                {stage.note && (
                  <div className="mt-1.5 text-[10px] leading-snug text-foreground/85">{stage.note}</div>
                )}
              </div>
              {index < STAGES.length - 1 && (
                <div className="flex shrink-0 items-center justify-center py-0.5 sm:px-1 sm:py-0" aria-hidden>
                  <ArrowDown className="h-3.5 w-3.5 text-rose-500/70 sm:hidden" />
                  <ArrowRight className="hidden h-3.5 w-3.5 text-rose-500/70 sm:block" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Supporting sections */}
      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-rose-600/35 bg-rose-50/30 p-3.5 dark:bg-rose-950/15">
          <div className="text-sm font-bold tracking-tight text-foreground">Symptoms</div>
          <DotList items={SYMPTOMS} dotClass="bg-rose-600/60" />
        </div>

        <div className="rounded-xl border-2 border-amber-600/45 bg-amber-50/50 p-3.5 dark:bg-amber-950/20">
          <div className="flex items-center gap-1.5">
            <Pill className="h-3.5 w-3.5 shrink-0 text-amber-800 dark:text-amber-300" aria-hidden />
            <div className="text-sm font-bold tracking-tight text-foreground">Treatment</div>
          </div>
          <div className="mt-2 text-[10.5px] leading-snug text-foreground/85">
            Drugs used to reduce allergic symptoms:
          </div>
          <DotList items={TREATMENTS} dotClass="bg-amber-600/60" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. AllergyQuickRevision                                                     */
/* -------------------------------------------------------------------------- */

const REVISION_ROWS: [string, string][] = [
  ["Definition", "Exaggerated immune response"],
  ["Allergens", "Dust, mites, pollen, animal dander"],
  ["Antibody", "IgE"],
  ["Cells involved", "Mast cells"],
  ["Chemicals released", "Histamine, serotonin"],
  ["Treatment", "Antihistamines, adrenaline, steroids"],
];

export function AllergyQuickRevision() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-muted/25 px-3.5 py-2.5">
        <Zap className="h-3.5 w-3.5 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
        <div className="text-sm font-bold tracking-tight text-foreground">Allergy — Quick Revision</div>
      </div>

      <div className="overflow-hidden">
        <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          <div className="px-2.5 py-1.5">Feature</div>
          <div className="px-2.5 py-1.5">Key point</div>
        </div>
        {REVISION_ROWS.map(([feature, keyPoint]) => (
          <div key={feature} className="grid grid-cols-2 border-b border-border last:border-b-0">
            <div className="px-2.5 py-1.5 text-[10.5px] font-semibold text-foreground">{feature}</div>
            <div className="px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground/85">{keyPoint}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
