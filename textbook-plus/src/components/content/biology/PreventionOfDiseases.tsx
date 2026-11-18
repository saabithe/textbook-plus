import type { ReactNode } from "react";
import { ArrowRight, Check, Droplets, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";

/**
 * PreventionOfDiseases — the three transmission categories from the notes,
 * each as its own card, plus the prominent Eduport practice note that closes
 * the chapter.
 *
 * sky = food and water, violet = the airborne route, emerald = prevention,
 * amber = the closing practice note.
 */

const FOOD_WATER_DISEASES = ["Typhoid", "Amoebiasis", "Ascariasis"];
const FOOD_WATER_MEASURES = ["Personal hygiene", "Public hygiene"];
const AIRBORNE_DISEASES = ["Pneumonia", "Common cold"];

function CardHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2 border-b border-border bg-muted/25 px-4 py-2.5">
      <div className="text-sm font-bold tracking-tight text-foreground">{title}</div>
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{index}</div>
    </div>
  );
}

export function FoodWaterBorneCard() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-sky-600/35 bg-card">
      <CardHeader index="1 of 3 · food and water" title="Food- and water-borne diseases" />

      <div className="p-4">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Examples</div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {FOOD_WATER_DISEASES.map((disease) => (
            <span
              key={disease}
              className="rounded-md border border-sky-600/30 bg-sky-50/45 px-2 py-1 text-[11px] font-semibold text-foreground dark:bg-sky-950/20"
            >
              {disease}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-sky-600/35 bg-sky-50/40 px-2.5 py-2 dark:bg-sky-950/20">
          <Droplets className="h-3.5 w-3.5 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
          <span className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-sky-800 dark:text-sky-300">
            Common route
          </span>
          <span className="text-[11px] font-semibold text-foreground">Contaminated food and water</span>
        </div>

        <div className="mt-3 border-t border-border pt-2.5">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Preventive measures
          </div>
          <div className="mt-1.5 space-y-1">
            {FOOD_WATER_MEASURES.map((measure) => (
              <div key={measure} className="flex items-center gap-2">
                <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-emerald-600/40 bg-emerald-50/60 text-emerald-800 dark:bg-emerald-950/25 dark:text-emerald-300">
                  <Check className="h-2.5 w-2.5" aria-hidden />
                </span>
                <span className="text-[10.5px] leading-snug text-foreground">{measure}.</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Person({ tone }: { tone: "rose" | "teal" }) {
  return (
    <svg viewBox="0 0 60 80" className="h-14 w-11" aria-hidden>
      <g className={tone === "rose" ? "fill-rose-500/75" : "fill-teal-500/75"}>
        <circle cx="30" cy="16" r="12" />
        <path d="M8 76 Q8 34 30 34 Q52 34 52 76 Z" />
      </g>
    </svg>
  );
}

export function AirborneTransmissionCard() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-violet-600/35 bg-card">
      <CardHeader index="2 of 3 · air" title="Air-borne diseases" />

      <div className="p-4">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Examples</div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {AIRBORNE_DISEASES.map((disease) => (
            <span
              key={disease}
              className="rounded-md border border-violet-600/30 bg-violet-50/45 px-2 py-1 text-[11px] font-semibold text-foreground dark:bg-violet-950/20"
            >
              {disease}
            </span>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-border bg-muted/20 px-3 py-3">
          <div className="flex items-start justify-between gap-1">
            <div className="w-16 shrink-0 text-center">
              <Person tone="rose" />
              <div className="mt-1 text-[9px] font-semibold leading-tight text-foreground">Infected person</div>
            </div>

            <div className="min-w-0 flex-1 pt-5">
              <div className="text-center text-[9px] font-semibold uppercase tracking-[0.06em] text-violet-800 dark:text-violet-300">
                Droplets / aerosols
              </div>
              <div className="mt-1 flex items-center gap-1">
                <Droplets className="h-3.5 w-3.5 shrink-0 text-violet-600 dark:text-violet-300" aria-hidden />
                <span className="h-px flex-1 border-t border-dashed border-violet-500/50" aria-hidden />
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-violet-600 dark:text-violet-300" aria-hidden />
              </div>
            </div>

            <div className="w-16 shrink-0 text-center">
              <Person tone="teal" />
              <div className="mt-1 text-[9px] font-semibold leading-tight text-foreground">Another person</div>
            </div>
          </div>
        </div>

        <div className="mt-2 space-y-1">
          <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-600/60" aria-hidden />
            <span>Airborne droplets or aerosols.</span>
          </div>
          <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-600/60" aria-hidden />
            <span>Close contact with infected individuals.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const VECTORS: { vector: ReactNode; disease: string }[] = [
  {
    vector: (
      <>
        Female <em>Anopheles</em> mosquito
      </>
    ),
    disease: "Malaria",
  },
  {
    vector: (
      <>
        Female <em>Culex</em> mosquito
      </>
    ),
    disease: "Filariasis",
  },
  {
    vector: (
      <>
        <em>Aedes</em> mosquito
      </>
    ),
    disease: "Chikungunya",
  },
];

export function VectorBorneCard() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <CardHeader index="3 of 3 · vectors" title="Vector-borne diseases" />

      <div className="p-4">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Vector → disease</div>

        <div className="mt-1.5 overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            <div className="px-2.5 py-1.5">Vector</div>
            <div className="px-2.5 py-1.5">Disease</div>
          </div>

          {VECTORS.map((row) => (
            <div key={row.disease} className="grid grid-cols-2 border-b border-border last:border-b-0">
              <div className="px-2.5 py-2 text-[10.5px] leading-snug text-foreground">{row.vector}</div>
              <div className="px-2.5 py-2 text-[11px] font-bold leading-snug text-foreground">{row.disease}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-start gap-2 rounded-lg border border-emerald-600/35 bg-emerald-50/40 px-2.5 py-2 dark:bg-emerald-950/20">
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-800 dark:text-emerald-300" aria-hidden />
          <div className="text-[10.5px] leading-snug text-foreground">
            <span className="font-bold">Shared prevention.</span> Avoid vector exposure and promote vector control.
          </div>
        </div>
      </div>
    </div>
  );
}

export function EduportMcqNote() {
  return (
    <div className="my-10 overflow-hidden rounded-2xl border-2 border-amber-500/60 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-5 shadow-sm dark:from-amber-950/30 dark:via-yellow-950/20 dark:to-orange-950/30">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500 text-white shadow-sm dark:bg-amber-600">
          <FlaskConical className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber-800 dark:text-amber-300">
            Before you finish
          </div>
          <div className="mt-0.5 text-lg font-bold tracking-tight text-foreground">
            Extra practice — Eduport MCQs
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
            Try the MCQ questions from Eduport for this chapter; it would be beneficial.
          </p>
        </div>
        <Sparkles className="hidden h-5 w-5 shrink-0 text-amber-500 sm:block" aria-hidden />
      </div>
    </div>
  );
}
