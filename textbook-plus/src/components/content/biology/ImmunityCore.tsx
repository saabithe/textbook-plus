import type { ReactNode } from "react";
import {
  FlaskConical,
  Microscope,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * ImmunityCore — the opening immunity block: the host-definition panel and the
 * two-type branching diagram, the four innate barriers as like-for-like cards,
 * and the compact quick-revision table.
 *
 * indigo / violet = immunity and its two types,
 * sky = barrier structure, emerald = barrier function.
 */

/* -------------------------------------------------------------------------- */
/* 1. ImmunityOverview                                                         */
/* -------------------------------------------------------------------------- */

function BranchCard({
  title,
  lines,
  tone,
}: {
  title: string;
  lines: string[];
  tone: "indigo" | "violet";
}) {
  const palette =
    tone === "indigo"
      ? "border-indigo-600/35 bg-indigo-50/35 dark:bg-indigo-950/20"
      : "border-violet-600/35 bg-violet-50/35 dark:bg-violet-950/20";
  const textTone =
    tone === "indigo"
      ? "text-indigo-900 dark:text-indigo-200"
      : "text-violet-900 dark:text-violet-200";

  return (
    <div className={`rounded-lg border p-3 ${palette}`}>
      <div className={`text-[11px] font-bold ${textTone}`}>{title}</div>
      <div className="mt-1.5 space-y-0.5">
        {lines.map((line) => (
          <div key={line} className="text-[10.5px] leading-snug text-foreground">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImmunityOverview() {
  return (
    <div className="my-5 space-y-4">
      <div className="flex items-start gap-2.5 rounded-xl border-2 border-violet-600/35 bg-violet-50/40 p-4 dark:bg-violet-950/20">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-700 dark:text-violet-300" aria-hidden />
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
            Definition
          </div>
          <p className="mt-1 text-[10.5px] leading-snug text-foreground">
            <strong>Immunity</strong> is the overall ability of the host to defend itself against disease-causing
            organisms through the immune system.
          </p>
        </div>
      </div>

      <div>
        <div className="text-sm font-bold tracking-tight text-foreground">Two Types of Immunity</div>

        <div className="mt-3">
          <div className="mx-auto w-fit rounded-lg border-2 border-violet-600/45 bg-violet-50/55 px-5 py-1.5 text-center dark:bg-violet-950/25">
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-violet-900 dark:text-violet-200">
              Immunity
            </span>
          </div>

          {/* straight-line connector: central stem → horizontal bar → two drops */}
          <div className="relative mx-auto h-8 w-full max-w-md" aria-hidden>
            <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-indigo-500/55" />
            <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-indigo-500/55" />
            <div className="absolute left-1/4 top-1/2 h-1/2 w-px -translate-x-1/2 bg-indigo-500/55" />
            <div className="absolute right-1/4 top-1/2 h-1/2 w-px translate-x-1/2 bg-violet-500/55" />
          </div>

          <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
            <BranchCard
              title="1. Innate immunity"
              lines={["Present at birth.", "Non-specific defence."]}
              tone="indigo"
            />
            <BranchCard
              title="2. Acquired immunity"
              lines={["Developed during lifetime.", "Pathogen-specific defence."]}
              tone="violet"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. InnateBarrierCards                                                       */
/* -------------------------------------------------------------------------- */

const CHARACTERISTICS = [
  "Present from birth.",
  "Provides non-specific protection against foreign agents.",
  "Consists of four types of barriers.",
];

type BarrierRow = { label: ReactNode; detail: ReactNode };

function BarrierCard({
  numeral,
  Icon,
  title,
  tableHead,
  rows,
  functionBody,
}: {
  numeral: string;
  Icon: LucideIcon;
  title: string;
  tableHead?: [string, string];
  rows?: BarrierRow[];
  functionBody: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-sky-600/30 bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-sky-50/40 px-3 py-2 dark:bg-sky-950/20">
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-sky-600/45 bg-card text-[10px] font-bold text-sky-800 dark:text-sky-200">
          {numeral}
        </span>
        <Icon className="h-4 w-4 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
        <span className="text-[11px] font-bold tracking-tight text-foreground">{title}</span>
      </div>

      <div className="p-3">
        {rows && rows.length > 0 && tableHead && (
          <div>
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Components
            </div>
            <div className="mt-1 overflow-hidden rounded-lg border border-border">
              <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                <div className="px-2 py-1.5">{tableHead[0]}</div>
                <div className="px-2 py-1.5">{tableHead[1]}</div>
              </div>
              {rows.map((row, index) => (
                <div key={index} className="grid grid-cols-2 border-b border-border last:border-b-0">
                  <div className="px-2 py-1.5 text-[10.5px] font-semibold leading-snug text-foreground">
                    {row.label}
                  </div>
                  <div className="px-2 py-1.5 text-[10.5px] leading-snug text-foreground/85">{row.detail}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={rows && rows.length > 0 ? "mt-2.5" : ""}>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Function</div>
          <div className="mt-1 rounded-md border border-emerald-600/25 bg-emerald-50/35 px-2.5 py-1.5 dark:bg-emerald-950/15">
            {functionBody}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InnateBarrierCards() {
  return (
    <div className="my-5 space-y-4">
      <div>
        <div className="text-sm font-bold tracking-tight text-foreground">Characteristics</div>
        <div className="mt-2 space-y-1.5">
          {CHARACTERISTICS.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border border-emerald-600/40 bg-card text-emerald-800 dark:text-emerald-300">
                <ShieldCheck className="h-2.5 w-2.5" aria-hidden />
              </span>
              <span className="text-[10.5px] leading-snug text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-sm font-bold tracking-tight text-foreground">Four Barriers of Innate Immunity</div>

        <div className="mt-2 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
          <BarrierCard
            numeral="①"
            Icon={Shield}
            title="Physical Barriers"
            tableHead={["Barrier", "Function"]}
            rows={[
              { label: <strong>Skin</strong>, detail: "Main physical barrier; prevents microbial entry" },
              {
                label: "Mucus coating",
                detail: "Traps microbes entering respiratory, gastrointestinal and urogenital tracts",
              },
            ]}
            functionBody={
              <p className="text-[10.5px] leading-snug text-foreground">
                Prevent the entry of microorganisms into the body.
              </p>
            }
          />

          <BarrierCard
            numeral="②"
            Icon={FlaskConical}
            title="Physiological Barriers"
            tableHead={["Barrier", "Function"]}
            rows={[
              {
                label: (
                  <>
                    Stomach acid (<strong>HCl</strong>)
                  </>
                ),
                detail: "Kills ingested microbes",
              },
              { label: "Saliva", detail: "Contains antibacterial enzyme lysozyme" },
              { label: "Tears", detail: "Contain antibacterial enzyme lysozyme" },
            ]}
            functionBody={
              <p className="text-[10.5px] leading-snug text-foreground">
                Chemical substances that prevent microbial growth or destroy microbes.
              </p>
            }
          />

          <BarrierCard
            numeral="③"
            Icon={ShieldCheck}
            title="Cellular Barriers"
            tableHead={["Cell", "Location / identification"]}
            rows={[
              {
                label: "Neutrophils (PMNL)",
                detail: (
                  <>
                    Main <strong>phagocytic</strong> white blood cells
                  </>
                ),
              },
              { label: "Monocytes", detail: "Blood" },
              { label: "Natural Killer (NK) cells", detail: "Blood; a type of lymphocyte" },
              { label: "Macrophages", detail: "Body tissues" },
            ]}
            functionBody={
              <p className="text-[10.5px] leading-snug text-foreground">
                Cellular defence helps destroy invading microbes. Neutrophils, monocytes and macrophages are
                phagocytic cells.
              </p>
            }
          />

          <BarrierCard
            numeral="④"
            Icon={Microscope}
            title="Cytokine Barriers"
            functionBody={
              <ul className="space-y-1">
                <li className="flex gap-1.5 text-[10.5px] leading-snug text-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-600/60" aria-hidden />
                  <span>
                    Virus-infected cells secrete proteins called <strong>interferons</strong>.
                  </span>
                </li>
                <li className="flex gap-1.5 text-[10.5px] leading-snug text-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-600/60" aria-hidden />
                  <span>Interferons protect surrounding, non-infected cells against further viral infection.</span>
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. InnateQuickRevision                                                      */
/* -------------------------------------------------------------------------- */

const REVISION_ROWS: [string, string][] = [
  ["Physical", "Skin, mucus"],
  ["Physiological", "HCl, saliva, tears, lysozyme"],
  ["Cellular", "Neutrophils, monocytes, NK cells, macrophages"],
  ["Cytokine", "Interferons"],
];

export function InnateQuickRevision() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-muted/25 px-3.5 py-2.5">
        <Zap className="h-3.5 w-3.5 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
        <div className="text-sm font-bold tracking-tight text-foreground">Innate Immunity — Quick Revision</div>
      </div>

      <div className="overflow-hidden">
        <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          <div className="px-2.5 py-1.5">Barrier</div>
          <div className="px-2.5 py-1.5">Important components</div>
        </div>
        {REVISION_ROWS.map(([barrier, components]) => (
          <div key={barrier} className="grid grid-cols-2 border-b border-border last:border-b-0">
            <div className="px-2.5 py-1.5 text-[10.5px] font-semibold text-foreground">{barrier}</div>
            <div className="px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground/85">{components}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
