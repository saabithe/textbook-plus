import { Fragment } from "react";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";

/**
 * NucleotideComponents — the three parts of a nucleotide, with a labelled
 * schematic (base / pentose sugar / phosphate) that stacks vertically on
 * small screens. PentoseSugar follows with the DNA-vs-RNA table, the 2′-carbon
 * comparison, the note-mentioned chemical-structure image and the consequence.
 *
 * emerald = ribose / RNA, blue = deoxyribose / DNA, amber = the consequence.
 */

/* -------------------------------------------------------------------------- */
/* 1. NucleotideComponents                                                     */
/* -------------------------------------------------------------------------- */

type PartTone = "violet" | "emerald" | "blue";

type NucleotidePart = {
  numeral: string;
  title: string;
  detail: string;
  tone: PartTone;
};

const NUCLEOTIDE_PARTS: NucleotidePart[] = [
  { numeral: "1", title: "Nitrogenous base", detail: "A, G, T, C or U", tone: "violet" },
  { numeral: "2", title: "Pentose sugar", detail: "Ribose / Deoxyribose", tone: "emerald" },
  { numeral: "3", title: "Phosphate group", detail: "PO₄ group", tone: "blue" },
];

function PartBox({ numeral, title, detail, tone }: NucleotidePart) {
  const palette =
    tone === "violet"
      ? "border-violet-600/40 bg-violet-50/45 dark:bg-violet-950/20"
      : tone === "emerald"
        ? "border-emerald-600/50 bg-emerald-50/50 dark:bg-emerald-950/20"
        : "border-blue-600/40 bg-blue-50/45 dark:bg-blue-950/20";
  const titleTone =
    tone === "violet"
      ? "text-violet-900 dark:text-violet-200"
      : tone === "emerald"
        ? "text-emerald-900 dark:text-emerald-200"
        : "text-blue-900 dark:text-blue-200";

  return (
    <div className={`w-full rounded-lg border-2 px-2.5 py-2 text-center sm:w-auto sm:flex-1 ${palette}`}>
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Component {numeral}
      </div>
      <div className={`mt-1 text-sm font-bold tracking-tight ${titleTone}`}>{title}</div>
      <div className="mt-0.5 text-sm leading-relaxed text-foreground">{detail}</div>
    </div>
  );
}

/** Straight connector: vertical when the parts stack, horizontal from sm up. */
function Connector() {
  return (
    <span className="flex shrink-0 items-center justify-center py-0.5" aria-hidden>
      <span className="h-3 w-px bg-border/80 sm:h-px sm:w-5" />
    </span>
  );
}

function NucleotideSchematic() {
  return (
    <div
      className="rounded-xl border border-border/60 bg-muted/20 p-3 dark:bg-muted/10"
      role="img"
      aria-label="Labelled nucleotide schematic: a nitrogenous base (A, G, T, C or U) at left, a pentose sugar (ribose or deoxyribose) at the centre joining the other two, and a phosphate (PO4 group) at right."
    >
      <div className="text-center text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Nucleotide
      </div>
      <div className="mt-2.5 flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-center">
        {NUCLEOTIDE_PARTS.map((part, index) => (
          <Fragment key={part.title}>
            <PartBox {...part} />
            {index < NUCLEOTIDE_PARTS.length - 1 && <Connector />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function NucleotideComponents() {
  return (
    <div className="my-5 space-y-4">
      <div>
        <p className="text-sm leading-relaxed text-foreground">A nucleotide consists of three components:</p>
        <ol className="mt-2 space-y-1.5">
          {NUCLEOTIDE_PARTS.map((part) => (
            <li key={part.title} className="flex items-start gap-2">
              <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border border-emerald-600/40 bg-card text-[8.5px] font-bold text-emerald-900 dark:text-emerald-200">
                {part.numeral}
              </span>
              <span className="text-sm leading-relaxed text-foreground">
                <strong>{part.title}</strong>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <NucleotideSchematic />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. PentoseSugar                                                             */
/* -------------------------------------------------------------------------- */

type CarbonTone = "emerald" | "blue";

function CarbonCard({
  tone,
  title,
  formula,
  detail,
}: {
  tone: CarbonTone;
  title: string;
  formula: string;
  detail: string;
}) {
  const emerald = tone === "emerald";
  const palette = emerald
    ? "border-emerald-600/40 bg-emerald-50/40 dark:bg-emerald-950/20"
    : "border-blue-600/40 bg-blue-50/40 dark:bg-blue-950/20";
  const titleTone = emerald ? "text-emerald-900 dark:text-emerald-200" : "text-blue-900 dark:text-blue-200";
  const formulaTone = emerald ? "text-emerald-700 dark:text-emerald-300" : "text-blue-700 dark:text-blue-300";

  return (
    <div className={`rounded-xl border-2 p-3.5 ${palette}`}>
      <div className={`text-sm font-bold tracking-tight ${titleTone}`}>{title}</div>
      <div className={`mt-2 text-2xl font-bold tracking-tight ${formulaTone}`}>{formula}</div>
      <div className="mt-1 text-sm leading-relaxed text-foreground">{detail}</div>
    </div>
  );
}

export function PentoseSugar() {
  return (
    <div className="my-5 space-y-4">
      <p className="text-sm leading-relaxed text-foreground">
        <strong>Pentose sugars</strong> are five-carbon sugars present in nucleotides.
      </p>

      <TableCard
        title="Pentose Sugars — DNA vs RNA"
        headers={["Feature", "DNA", "RNA"]}
        rows={[
          {
            cells: [
              "Sugar",
              <span key="dna-sugar" className="text-blue-700 dark:text-blue-300">Deoxyribose</span>,
              <span key="rna-sugar" className="text-emerald-700 dark:text-emerald-300">Ribose</span>,
            ],
          },
          {
            cells: [
              "Position 2′",
              <span key="dna-2" className="text-blue-700 dark:text-blue-300">H instead of OH</span>,
              <span key="rna-2" className="text-emerald-700 dark:text-emerald-300">OH group</span>,
            ],
          },
          {
            cells: [
              "Position 3′",
              <span key="dna-3" className="text-blue-700 dark:text-blue-300">OH group</span>,
              <span key="rna-3" className="text-emerald-700 dark:text-emerald-300">OH group</span>,
            ],
          },
        ]}
      />

      <div className="rounded-xl border border-border bg-card p-3.5">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Key structural difference
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-600/70" aria-hidden />
            <span className="text-sm leading-relaxed text-foreground">
              <strong className="text-emerald-800 dark:text-emerald-200">Ribose:</strong> Contains an –OH group at the
              2′ carbon.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-600/70" aria-hidden />
            <span className="text-sm leading-relaxed text-foreground">
              <strong className="text-blue-800 dark:text-blue-200">Deoxyribose:</strong> Has –H instead of –OH at the
              2′ carbon.
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm font-bold tracking-tight text-foreground">2′-Carbon comparison</div>
        <div className="mt-2 grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2">
          <CarbonCard tone="emerald" title="Ribose — RNA" formula="2′–OH" detail="Hydroxyl group present" />
          <CarbonCard tone="blue" title="Deoxyribose — DNA" formula="2′–H" detail="Hydroxyl group absent" />
        </div>
      </div>

      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/The_difference_between_ribose_and_deoxyribose.png" alt="Ribose vs Deoxyribose — difference at 2' carbon: –OH vs –H" className="w-full h-auto rounded-lg object-contain max-h-[420px] mx-auto bg-white" loading="lazy" />
        <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Chemical structures of ribose and deoxyribose, with carbons labelled C1′–C5′. The difference is highlighted at{" "}
          <Highlight color="orange">C2′</Highlight>.
        </figcaption>
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-amber-600/30 bg-amber-50/50 px-2 py-1 text-xs font-semibold text-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
          <ArrowUpRight className="h-3 w-3 shrink-0" aria-hidden />
          C2′ — the only difference: –OH in ribose, –H in deoxyribose
        </div>
      </figure>

      <div className="flex items-start gap-2.5 rounded-xl border-2 border-amber-600/40 bg-amber-50/45 p-3.5 dark:bg-amber-950/20">
        <FlaskConical
          className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300"
          aria-hidden
        />
        <p className="text-sm leading-relaxed text-foreground">
          <strong className="text-amber-900 dark:text-amber-200">Consequence:</strong> The additional 2′-OH group makes
          RNA <strong>chemically more reactive and easily degradable</strong>.
        </p>
      </div>
    </div>
  );
}
