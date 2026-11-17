import type { ReactNode } from "react";
import { FlaskConical, Microscope, ShieldAlert, Stethoscope, Syringe } from "lucide-react";

/**
 * TransgenicAnimals — the definition, the species strip, the mice statistic and
 * the five applications.
 *
 * The species drawings are small schematic icons, not specimen art: one body
 * shape, one head, the feature that names the animal (ears, snout, horns, wool,
 * tail). teal = the animal, amber = the product it makes, emerald = the stat.
 */

const PLANT = "var(--subject-biology)";

type Species = "rat" | "rabbit" | "pig" | "sheep" | "cow" | "fish";

function SpeciesIcon({ kind, className = "h-8 w-11" }: { kind: Species; className?: string }) {
  const body = { fill: PLANT, fillOpacity: 0.14, stroke: PLANT, strokeWidth: 1.5 } as const;

  return (
    <svg viewBox="0 0 48 36" className={className} aria-hidden>
      {kind === "rat" && (
        <g>
          <ellipse cx={22} cy={21} rx={11} ry={6.5} {...body} />
          <circle cx={33} cy={16} r={4.6} {...body} />
          <circle cx={34} cy={11} r={2.4} fill={PLANT} fillOpacity={0.2} stroke={PLANT} strokeWidth={1.3} />
          <path d="M11 22 C 5 22 4 29 9 30" fill="none" stroke={PLANT} strokeWidth={1.6} strokeLinecap="round" />
          <path d="M18 27 v4 M26 27 v4" stroke={PLANT} strokeWidth={1.5} strokeLinecap="round" />
          <circle cx={35} cy={15} r={0.9} fill={PLANT} />
        </g>
      )}

      {kind === "rabbit" && (
        <g>
          <ellipse cx={21} cy={24} rx={10} ry={6} {...body} />
          <circle cx={32} cy={19} r={4.6} {...body} />
          <ellipse cx={30} cy={9} rx={2} ry={5} transform="rotate(-12 30 9)" {...body} />
          <ellipse cx={35} cy={9} rx={2} ry={5} transform="rotate(10 35 9)" {...body} />
          <circle cx={9} cy={21} r={3} {...body} />
          <path d="M18 30 v3 M25 30 v3" stroke={PLANT} strokeWidth={1.5} strokeLinecap="round" />
          <circle cx={34} cy={18} r={0.8} fill={PLANT} />
        </g>
      )}

      {kind === "pig" && (
        <g>
          <ellipse cx={21} cy={21} rx={11} ry={7} {...body} />
          <circle cx={34} cy={19} r={5.2} {...body} />
          <ellipse cx={39} cy={19} rx={2.3} ry={2.8} fill={PLANT} fillOpacity={0.2} stroke={PLANT} strokeWidth={1.3} />
          <path
            d="M30 14 l2 -4 l3 4"
            fill={PLANT}
            fillOpacity={0.14}
            stroke={PLANT}
            strokeWidth={1.3}
            strokeLinejoin="round"
          />
          <path d="M10 21 C 5 21 6 26 9 27" fill="none" stroke={PLANT} strokeWidth={1.5} strokeLinecap="round" />
          <path d="M18 28 v3 M26 28 v3" stroke={PLANT} strokeWidth={1.5} strokeLinecap="round" />
          <circle cx={36} cy={17} r={0.8} fill={PLANT} />
        </g>
      )}

      {kind === "sheep" && (
        <g>
          <ellipse cx={21} cy={21} rx={12} ry={7} {...body} />
          <path
            d="M13 16 q3 -3 6 0 M19 14 q3 -3 6 0 M25 16 q3 -3 6 0"
            fill="none"
            stroke={PLANT}
            strokeWidth={1.2}
            strokeLinecap="round"
          />
          <circle cx={34} cy={18} r={4.4} {...body} />
          <path d="M30 15 q-2 -1 -3 1" fill="none" stroke={PLANT} strokeWidth={1.3} strokeLinecap="round" />
          <path d="M18 28 v3 M26 28 v3" stroke={PLANT} strokeWidth={1.5} strokeLinecap="round" />
          <circle cx={35} cy={17} r={0.8} fill={PLANT} />
        </g>
      )}

      {kind === "cow" && (
        <g>
          <ellipse cx={21} cy={21} rx={12} ry={7} {...body} />
          <circle cx={34} cy={17} r={4.8} {...body} />
          <path
            d="M31 12 q-1 -3 2 -3 M37 12 q1 -3 -2 -3"
            fill="none"
            stroke={PLANT}
            strokeWidth={1.4}
            strokeLinecap="round"
          />
          <ellipse cx={38} cy={19} rx={2.4} ry={2.8} fill={PLANT} fillOpacity={0.2} stroke={PLANT} strokeWidth={1.3} />
          <path d="M10 21 C 5 22 6 27 10 27" fill="none" stroke={PLANT} strokeWidth={1.5} strokeLinecap="round" />
          <path d="M17 28 v3 M26 28 v3" stroke={PLANT} strokeWidth={1.5} strokeLinecap="round" />
          <circle cx={35} cy={15.5} r={0.8} fill={PLANT} />
        </g>
      )}

      {kind === "fish" && (
        <g>
          <ellipse cx={24} cy={18} rx={11} ry={7} {...body} />
          <path
            d="M13 18 l-6 -5 v10 z"
            fill={PLANT}
            fillOpacity={0.14}
            stroke={PLANT}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
          <path d="M23 11 q4 -4 7 -1" fill="none" stroke={PLANT} strokeWidth={1.4} strokeLinecap="round" />
          <circle cx={30} cy={16} r={0.9} fill={PLANT} />
        </g>
      )}
    </svg>
  );
}

const SPECIES: { name: string; kind: Species }[] = [
  { name: "Rats", kind: "rat" },
  { name: "Rabbits", kind: "rabbit" },
  { name: "Pigs", kind: "pig" },
  { name: "Sheep", kind: "sheep" },
  { name: "Cows", kind: "cow" },
  { name: "Fish", kind: "fish" },
];

export function TransgenicDefinitionCard() {
  return (
    <div className="my-5 rounded-xl border-2 border-teal-600/35 bg-teal-50/40 p-4 dark:bg-teal-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
        Definition
      </div>
      <div className="mt-1 text-base font-bold tracking-tight text-foreground">Transgenic animals</div>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground">
        Animals whose DNA has been manipulated to contain and express an additional foreign gene.
      </div>

      <div className="mt-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Examples of transgenic animals
      </div>

      <div className="mt-1.5 grid grid-cols-3 gap-1.5 sm:grid-cols-6">
        {SPECIES.map((species) => (
          <div
            key={species.name}
            className="flex flex-col items-center rounded-lg border border-teal-700/20 bg-card px-1 py-1.5"
          >
            <SpeciesIcon kind={species.kind} />
            <div className="mt-0.5 text-[10px] font-semibold text-foreground">{species.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MouseGlyph() {
  return (
    <svg viewBox="0 0 80 56" className="h-14 w-20" aria-hidden>
      <ellipse cx={34} cy={32} rx={20} ry={13} fill={PLANT} fillOpacity={0.14} stroke={PLANT} strokeWidth={2} />
      <circle cx={55} cy={24} r={8} fill={PLANT} fillOpacity={0.14} stroke={PLANT} strokeWidth={2} />
      <circle cx={48} cy={15} r={5} fill={PLANT} fillOpacity={0.2} stroke={PLANT} strokeWidth={1.6} />
      <circle cx={57} cy={15} r={5} fill={PLANT} fillOpacity={0.2} stroke={PLANT} strokeWidth={1.6} />
      <path d="M15 34 C 5 34 4 46 12 48" fill="none" stroke={PLANT} strokeWidth={2} strokeLinecap="round" />
      <circle cx={58} cy={22} r={1.3} fill={PLANT} />
    </svg>
  );
}

export function TransgenicMiceStat() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Of all existing transgenic animals
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <div className="text-3xl font-bold leading-none tracking-tight text-foreground">Over 95%</div>
            <div className="text-xs font-semibold text-foreground/70">are mice</div>
          </div>
          <div className="mt-1.5 text-[11.5px] leading-relaxed text-foreground">
            Mice are the predominant transgenic animal model.
          </div>
        </div>

        <div className="flex items-center justify-center rounded-lg border border-teal-700/25 bg-teal-50/45 px-4 py-2 dark:bg-teal-950/20">
          <MouseGlyph />
        </div>
      </div>
    </div>
  );
}

function ApplicationCard({
  n,
  title,
  icon,
  children,
  wide = false,
}: {
  n: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={`rounded-xl border border-border bg-card p-3.5 ${wide ? "sm:col-span-2" : ""}`}>
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-teal-600/35 bg-teal-50/50 text-[10px] font-bold text-teal-900 dark:bg-teal-950/25 dark:text-teal-200">
          {n}
        </span>
        <span className="text-muted-foreground" aria-hidden>
          {icon}
        </span>
        <div className="text-xs font-bold leading-snug tracking-tight text-foreground">{title}</div>
      </div>

      <div className="mt-2.5 space-y-2">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-[11px] leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

function DiseaseChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-teal-600/30 bg-teal-50/45 px-1.5 py-1 text-[10.5px] font-medium leading-snug text-foreground dark:bg-teal-950/20">
      {children}
    </span>
  );
}

export function TransgenicApplications() {
  return (
    <div className="my-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
      <ApplicationCard n="1" title="Study of Normal Physiology and Development" icon={<Microscope className="h-4 w-4" />}>
        <Field label="Purpose">
          Understand how genes are regulated and how they influence normal body functions and development.
        </Field>
        <Field label="Key detail">Used to study complex factors involved in growth.</Field>
        <Field label="Example">
          <div>Insulin-like growth factor.</div>
          <div className="mt-1 text-[10.5px] leading-snug text-foreground/75">
            Introducing genes from other species that alter the formation of this factor helps determine its
            biological role.
          </div>
        </Field>
      </ApplicationCard>

      <ApplicationCard n="2" title="Study of Human Diseases" icon={<Stethoscope className="h-4 w-4" />}>
        <Field label="Purpose">
          Understand how genes contribute to disease development and investigate potential treatments.
        </Field>
        <Field label="Key detail">Transgenic animal models are available for studying:</Field>
        <div className="flex flex-wrap gap-1">
          <DiseaseChip>Cancer</DiseaseChip>
          <DiseaseChip>Cystic fibrosis</DiseaseChip>
          <DiseaseChip>Rheumatoid arthritis</DiseaseChip>
          <DiseaseChip>Alzheimer’s disease</DiseaseChip>
        </div>
      </ApplicationCard>

      <ApplicationCard
        n="3"
        title="Production of Biological Products"
        icon={<FlaskConical className="h-4 w-4" />}
        wide
      >
        <Field label="Purpose">
          Transgenic animals can produce expensive therapeutic biological products by introducing DNA coding for
          specific human proteins.
        </Field>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-teal-600/30 bg-teal-50/40 p-2.5 dark:bg-teal-950/20">
            <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
              Example 1
            </div>
            <div className="mt-0.5 text-xs font-bold tracking-tight text-foreground">α-1-antitrypsin</div>
            <div className="mt-1 text-[10.5px] leading-snug text-foreground">
              A human protein used to treat <strong>emphysema</strong>.
            </div>
            <div className="mt-1.5 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Similar attempts are ongoing for
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
              <DiseaseChip>Phenylketonuria (PKU)</DiseaseChip>
              <DiseaseChip>Cystic fibrosis</DiseaseChip>
            </div>
          </div>

          <div className="rounded-lg border border-amber-600/35 bg-amber-50/45 p-2.5 dark:bg-amber-950/20">
            <div className="flex items-baseline justify-between gap-2">
              <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
                Example 2 · Rosie the Cow
              </div>
              <div className="text-[10px] font-semibold text-muted-foreground">1997</div>
            </div>
            <div className="text-[10px] font-semibold text-foreground/75">First transgenic cow</div>

            <div className="mt-1.5 flex items-center gap-2.5">
              <SpeciesIcon kind="cow" className="h-11 w-14 shrink-0" />
              <div>
                <div className="text-xl font-bold leading-none tracking-tight text-foreground">2.4 g/L</div>
                <div className="mt-0.5 text-[9.5px] text-muted-foreground">human protein in milk</div>
              </div>
            </div>

            <div className="mt-1.5 space-y-1 text-[10.5px] leading-snug text-foreground/85">
              <div>Produced milk containing human α-lactalbumin.</div>
              <div>Milk was nutritionally more balanced for human babies than natural cow milk.</div>
            </div>
          </div>
        </div>
      </ApplicationCard>

      <ApplicationCard n="4" title="Vaccine Safety Testing" icon={<Syringe className="h-4 w-4" />}>
        <Field label="Purpose">Test vaccine safety before human use.</Field>
        <Field label="Key detail">
          Transgenic mice are developed for this purpose. If proved reliable, they will replace monkeys for vaccine
          batch testing.
        </Field>
        <Field label="Example">Testing batches of the polio vaccine.</Field>
      </ApplicationCard>

      <ApplicationCard n="5" title="Chemical Safety and Toxicity Testing" icon={<ShieldAlert className="h-4 w-4" />}>
        <Field label="Purpose">Observe the effects of toxic chemicals.</Field>
        <Field label="Key detail">
          Animals are engineered with genes that make them more sensitive to toxic substances than non-transgenic
          animals.
        </Field>
        <Field label="Outcome">The effects can be observed in less time.</Field>
      </ApplicationCard>
    </div>
  );
}
