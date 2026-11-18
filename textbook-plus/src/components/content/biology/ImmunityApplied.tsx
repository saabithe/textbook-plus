import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Dna,
  FlaskConical,
  ShieldCheck,
  Siren,
  Syringe,
} from "lucide-react";
import { Highlight } from "@/components/content/Highlight";

/**
 * ImmunityApplied — applied immunity from the notes: active vs passive
 * immunity, the vaccination process, and the chapter's Final Revision Sheet.
 *
 * emerald = active immunity, amber = passive immunity and emergency/recombinant
 * notes, sky = the vaccination process, indigo = the revision block.
 */

/* -------------------------------------------------------------------------- */
/* Shared primitives                                                          */
/* -------------------------------------------------------------------------- */

function SectionTitle({ children }: { children: ReactNode }) {
  return <div className="text-sm font-bold tracking-tight text-foreground">{children}</div>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <div className="mt-2 space-y-1.5">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2">
          <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border border-emerald-600/40 bg-card text-emerald-800 dark:text-emerald-300">
            <Check className="h-2.5 w-2.5" aria-hidden />
          </span>
          <span className="text-[10.5px] leading-snug text-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
};

function MiniTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  const cols = GRID_COLS[headers.length] ?? "grid-cols-2";
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div
        className={`grid ${cols} border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground`}
      >
        {headers.map((header) => (
          <div key={header} className="px-2.5 py-1.5">
            {header}
          </div>
        ))}
      </div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid ${cols} border-b border-border last:border-b-0`}
        >
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`px-2.5 py-1.5 text-[10.5px] leading-snug ${
                cellIndex === 0 ? "font-semibold text-foreground" : "text-foreground/85"
              }`}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function NumberBadge({ n }: { n: number }) {
  return (
    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-sky-600/40 bg-sky-50/60 text-[8.5px] font-bold text-sky-800 dark:bg-sky-950/25 dark:text-sky-200">
      {n}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. ActivePassiveImmunity                                                   */
/* -------------------------------------------------------------------------- */

type ImmunityTone = "active" | "amber";

interface ImmunityPanelProps {
  number: string;
  title: string;
  mechanism: string;
  bullets: string[];
  tone: ImmunityTone;
  types: { number: number; title: string; lines: string[] }[];
}

const toneStyles: Record<ImmunityTone, { border: string; bg: string; badge: string; icon: string }> = {
  active: {
    border: "border-emerald-600/35",
    bg: "bg-emerald-50/30 dark:bg-emerald-950/15",
    badge: "border-emerald-600/45 bg-emerald-50/70 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200",
    icon: "text-emerald-700 dark:text-emerald-300",
  },
  amber: {
    border: "border-amber-600/35",
    bg: "bg-amber-50/30 dark:bg-amber-950/15",
    badge: "border-amber-600/45 bg-amber-50/70 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200",
    icon: "text-amber-700 dark:text-amber-300",
  },
};

function ImmunityPanel({ number, title, mechanism, bullets, tone, types }: ImmunityPanelProps) {
  const styles = toneStyles[tone];
  return (
    <div className={`rounded-xl border-2 ${styles.border} ${styles.bg} p-4`}>
      <div className="flex items-center gap-2">
        <span className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border text-[8.5px] font-bold ${styles.badge}`}>
          {number}
        </span>
        <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
      </div>

      <div className="mt-2 rounded-lg border border-border bg-card px-2.5 py-2">
        <div className="text-[10.5px] leading-snug text-foreground">
          <strong className="font-bold">Mechanism:</strong> {mechanism}
        </div>
        <Bullets items={bullets} />
      </div>

      <div className="mt-3">
        <Eyebrow>Types and examples</Eyebrow>
        <div className="mt-1.5 space-y-2">
          {types.map((type) => (
            <div key={type.number} className="rounded-lg border border-border bg-card px-2.5 py-2">
              <div className="flex items-center gap-1.5">
                <span className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border text-[8.5px] font-bold ${styles.badge}`}>
                  {type.number}
                </span>
                <span className="text-[10.5px] font-bold leading-snug text-foreground">{type.title}</span>
              </div>
              <div className="mt-1 space-y-0.5 pl-[22px]">
                {type.lines.map((line) => (
                  <div key={line} className="text-[10.5px] leading-snug text-foreground/85">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClassificationGrid() {
  return (
    <div className="mt-3 overflow-hidden rounded-lg border border-border">
      <div className="grid grid-cols-3 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        <div className="px-2.5 py-1.5">Category</div>
        <div className="px-2.5 py-1.5">Natural</div>
        <div className="px-2.5 py-1.5">Artificial</div>
      </div>
      <div className="grid grid-cols-3 border-b border-border bg-emerald-50/30 dark:bg-emerald-950/10">
        <div className="px-2.5 py-2 text-[10.5px] font-bold text-emerald-800 dark:text-emerald-300">
          Active
        </div>
        <div className="px-2.5 py-2 text-[10.5px] leading-snug text-foreground">Infection and recovery</div>
        <div className="px-2.5 py-2 text-[10.5px] leading-snug text-foreground">Vaccination</div>
      </div>
      <div className="grid grid-cols-3 bg-amber-50/30 dark:bg-amber-950/10">
        <div className="px-2.5 py-2 text-[10.5px] font-bold text-amber-800 dark:text-amber-300">
          Passive
        </div>
        <div className="px-2.5 py-2 text-[10.5px] leading-snug text-foreground">
          Colostrum (IgA), placenta (IgG)
        </div>
        <div className="px-2.5 py-2 text-[10.5px] leading-snug text-foreground">ATS, snake antivenom</div>
      </div>
    </div>
  );
}

export function ActivePassiveImmunity() {
  return (
    <div className="my-5 space-y-4">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-300" aria-hidden />
        <SectionTitle>Active and passive immunity</SectionTitle>
      </div>

      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <ImmunityPanel
          number="1"
          title="Active Immunity"
          mechanism="The host's own immune system produces antibodies in response to exposure to antigens."
          bullets={[
            "Takes time to develop.",
            "Usually long-lasting.",
            "Generates immunological memory.",
          ]}
          tone="active"
          types={[
            {
              number: 1,
              title: "Natural active immunity",
              lines: ["Develops after surviving an infection."],
            },
            {
              number: 2,
              title: "Artificial active immunity",
              lines: ["Develops through vaccination.", "Example: Polio vaccination."],
            },
          ]}
        />
        <ImmunityPanel
          number="2"
          title="Passive Immunity"
          mechanism="Ready-made antibodies are directly transferred into the host."
          bullets={[
            "Provides immediate protection.",
            "Shorter duration.",
            "Does not create the same lasting immunological memory as active immunity.",
          ]}
          tone="amber"
          types={[
            {
              number: 1,
              title: "Natural passive immunity",
              lines: ["Colostrum → IgA antibodies.", "Placenta → IgG antibodies."],
            },
            {
              number: 2,
              title: "Artificial passive immunity",
              lines: [
                "Anti-tetanus serum (ATS) → Tetanus.",
                "Snake antivenom → Snakebite.",
              ],
            },
          ]}
        />
      </div>

      <div>
        <SectionTitle>3. Active vs Passive Immunity</SectionTitle>
        <div className="mt-2">
          <MiniTable
            headers={["Feature", "Active immunity", "Passive immunity"]}
            rows={[
              ["Mechanism", "Host produces antibodies", "Ready-made antibodies transferred"],
              ["Speed", "Slow", "Immediate"],
              ["Duration", "Long-lasting", "Shorter"],
              ["Memory", "Develops", "No lasting immune memory"],
              ["Natural example", "Recovery from infection", "Colostrum, placenta"],
              ["Artificial example", "Vaccination", "Antiserum, antivenom"],
            ]}
          />
        </div>
        <ClassificationGrid />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. VaccinationProcess                                                      */
/* -------------------------------------------------------------------------- */

const VACCINE_CONTENTS = [
  "Antigenic proteins of pathogens.",
  "Inactivated or dead pathogens.",
  "Weakened pathogens.",
];

const VACCINATION_STEPS = [
  "Vaccine introduces pathogen-specific antigens into the body.",
  "These antigens activate B-lymphocytes and T-lymphocytes.",
  "B-lymphocytes produce antibodies.",
  "Memory cells develop.",
  "During a later encounter with the actual pathogen, the immune system recognises it and responds rapidly.",
];

const MEMORY_FLOW = [
  { title: "Vaccine introduced", detail: "Antigenic material enters the body" },
  { title: "Lymphocyte activation", detail: "B cells and T cells become activated" },
  { title: "Antibody production", detail: "B cells produce antibodies" },
  { title: "Memory cell formation", detail: "Immunological memory develops" },
  { title: "Future exposure", detail: "Rapid, intensified immune response" },
];

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-0.5 sm:py-0">
      <ArrowRight
        className="h-4 w-4 rotate-90 text-sky-600 dark:text-sky-300 sm:rotate-0"
        aria-hidden
      />
    </div>
  );
}

function MemoryFlowDiagram() {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-sky-600/35 bg-sky-50/25 p-3.5 dark:bg-sky-950/15">
      <div className="flex items-center gap-2">
        <Syringe className="h-4 w-4 text-sky-700 dark:text-sky-300" aria-hidden />
        <div className="text-sm font-bold tracking-tight text-foreground">
          Vaccination → Immunological Memory
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 items-stretch gap-0 sm:grid-cols-9 sm:gap-0">
        {MEMORY_FLOW.map((step, index) => (
          <div key={step.title} className="contents">
            <div className="flex-1 rounded-lg border border-sky-600/35 bg-card px-2.5 py-2 sm:col-span-1">
              <div className="flex items-center gap-1.5">
                <NumberBadge n={index + 1} />
                <span className="text-[10px] font-bold leading-snug text-foreground">{step.title}</span>
              </div>
              <div className="mt-1 text-[9.5px] leading-snug text-muted-foreground">{step.detail}</div>
            </div>
            {index < MEMORY_FLOW.length - 1 && (
              <div className="sm:col-span-1">
                <FlowArrow />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function VaccinationProcess() {
  return (
    <div className="my-5 space-y-4">
      {/* 1. Principle */}
      <div className="rounded-xl border border-border bg-card p-4">
        <SectionTitle>1. Principle of Vaccination</SectionTitle>
        <div className="mt-1.5 text-[10.5px] leading-snug text-foreground">
          Vaccination is based on the immune system&apos;s ability to develop{" "}
          <strong className="font-bold">immunological memory</strong>.
        </div>
      </div>

      {/* 2. Vaccine */}
      <div className="rounded-xl border border-border bg-card p-4">
        <SectionTitle>2. Vaccine</SectionTitle>
        <div className="mt-1.5 text-[10.5px] leading-snug text-foreground">
          A vaccine contains antigenic material that stimulates an immune response. It may contain:
        </div>
        <Bullets items={VACCINE_CONTENTS} />
      </div>

      {/* 3. How vaccination works */}
      <div className="rounded-xl border border-border bg-card p-4">
        <SectionTitle>3. How Vaccination Works</SectionTitle>
        <ol className="mt-2 space-y-1.5">
          {VACCINATION_STEPS.map((step, index) => (
            <li key={step} className="flex items-start gap-2">
              <NumberBadge n={index + 1} />
              <span className="text-[10.5px] leading-snug text-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Primary visual */}
      <MemoryFlowDiagram />

      <div className="flex items-start gap-2 rounded-lg border border-sky-600/35 bg-sky-50/40 px-3 py-2 dark:bg-sky-950/20">
        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
        <div className="text-[10.5px] leading-snug text-foreground">
          <strong className="font-bold">Immunisation:</strong> Development of immunity following vaccination.
        </div>
      </div>

      {/* 4 & 5 */}
      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-amber-600/35 bg-amber-50/30 p-4 dark:bg-amber-950/15">
          <div className="flex items-center gap-2">
            <Siren className="h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden />
            <div className="text-sm font-bold tracking-tight text-foreground">
              4. Passive Immunisation — Emergency Protection
            </div>
          </div>
          <div className="mt-2 text-[10.5px] leading-snug text-foreground">
            In some emergencies, pre-formed antibodies or antitoxins are directly injected into the body.
          </div>
          <div className="mt-2 space-y-1">
            {["Tetanus → Anti-tetanus serum.", "Snakebite → Snake antivenom."].map((line) => (
              <div key={line} className="flex gap-1.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-600/60" aria-hidden />
                <span className="text-[10.5px] leading-snug text-foreground">{line}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border-2 border-amber-600/35 bg-amber-50/30 p-4 dark:bg-amber-950/15">
          <div className="flex items-center gap-2">
            <Dna className="h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden />
            <div className="text-sm font-bold tracking-tight text-foreground">
              5. Recombinant DNA Vaccines
            </div>
          </div>
          <div className="mt-2 text-[10.5px] leading-snug text-foreground">
            Recombinant DNA technology enables mass production of antigenic polypeptides in microorganisms.
          </div>
          <div className="mt-2 flex items-start gap-2 rounded-lg border border-amber-600/35 bg-card px-2.5 py-2">
            <FlaskConical className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden />
            <div className="text-[10.5px] leading-snug text-foreground">
              <strong className="font-bold">Example.</strong>{" "}
              <Highlight>Hepatitis B vaccine produced using yeast.</Highlight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. FinalRevisionSheet                                                      */
/* -------------------------------------------------------------------------- */

const CORE_CONCEPTS: ReactNode[][] = [
  ["Immunity", "Ability to defend against pathogens"],
  ["Innate immunity", "Present at birth; non-specific"],
  ["Acquired immunity", "Pathogen-specific; develops during lifetime"],
  ["Innate barriers", "Physical, physiological, cellular, cytokine"],
  ["Interferons", "Protect non-infected cells from viral infection"],
  ["Acquired immunity", "Specificity + memory"],
  ["Primary response", "First encounter; low intensity"],
  ["Secondary response", "Subsequent encounter; highly intensified"],
  ["B cells", "Antibody production"],
  ["T cells", "Help B cells; mediate CMI"],
  ["Antibody structure", <>H<sub>2</sub>L<sub>2</sub></>],
  ["Antibody classes", "IgA, IgM, IgE, IgG"],
  ["Humoral immunity", "Antibody-mediated"],
  ["Cell-mediated immunity", "T-lymphocyte-mediated"],
];

function RevisionSubheading({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-1 rounded-full bg-indigo-500 dark:bg-indigo-400" aria-hidden />
      <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
        {children}
      </div>
    </div>
  );
}

export function FinalRevisionSheet() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border-2 border-indigo-500/50 bg-gradient-to-br from-amber-50/60 via-card to-indigo-50/50 shadow-sm dark:from-amber-950/20 dark:via-card dark:to-indigo-950/20">
      <div className="flex items-start gap-3 border-b border-indigo-500/30 bg-indigo-50/50 px-4 py-3.5 dark:bg-indigo-950/25">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-indigo-600 text-white shadow-sm dark:bg-indigo-500">
          <ShieldCheck className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">
            Chapter revision
          </div>
          <div className="text-lg font-bold tracking-tight text-foreground">Final Revision Sheet</div>
        </div>
        <FlaskConical className="ml-auto hidden h-5 w-5 shrink-0 text-indigo-500 sm:block" aria-hidden />
      </div>

      <div className="space-y-4 p-4">
        <div>
          <RevisionSubheading>Immunity — Core Concepts</RevisionSubheading>
          <div className="mt-2">
            <MiniTable headers={["Topic", "Key point"]} rows={CORE_CONCEPTS} />
          </div>
        </div>

        <div>
          <RevisionSubheading>Active vs Passive — One Look</RevisionSubheading>
          <div className="mt-2 overflow-hidden rounded-lg border border-border">
            <div className="grid grid-cols-3 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              <div className="px-2.5 py-1.5">Category</div>
              <div className="px-2.5 py-1.5">Natural</div>
              <div className="px-2.5 py-1.5">Artificial</div>
            </div>
            <div className="grid grid-cols-3 border-b border-border bg-emerald-50/30 dark:bg-emerald-950/10">
              <div className="px-2.5 py-2 text-[10.5px] font-bold text-emerald-800 dark:text-emerald-300">
                Active
              </div>
              <div className="px-2.5 py-2 text-[10.5px] leading-snug text-foreground">Infection and recovery</div>
              <div className="px-2.5 py-2 text-[10.5px] leading-snug text-foreground">Vaccination</div>
            </div>
            <div className="grid grid-cols-3 bg-amber-50/30 dark:bg-amber-950/10">
              <div className="px-2.5 py-2 text-[10.5px] font-bold text-amber-800 dark:text-amber-300">
                Passive
              </div>
              <div className="px-2.5 py-2 text-[10.5px] leading-snug text-foreground">
                Colostrum (IgA), placenta (IgG)
              </div>
              <div className="px-2.5 py-2 text-[10.5px] leading-snug text-foreground">ATS, snake antivenom</div>
            </div>
          </div>
        </div>

        <div>
          <RevisionSubheading>Vaccination — One-Line Flow</RevisionSubheading>
          <div className="mt-2 flex items-start gap-2 rounded-lg border-2 border-indigo-500/35 bg-indigo-50/40 px-3 py-2.5 dark:bg-indigo-950/20">
            <Syringe className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-700 dark:text-indigo-300" aria-hidden />
            <div className="text-[10.5px] font-semibold leading-snug text-foreground">
              Vaccine → Antigen recognition → B-cell and T-cell activation → Antibody production + Memory cells →
              Faster response on future exposure.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
