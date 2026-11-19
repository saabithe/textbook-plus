import type { ReactNode } from "react";
import { TableCard } from "@/components/content/data/TableCard";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

/* Colour contract shared with the split-gene figure elsewhere in the chapter. */
const EXON_BLOCK =
  "fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400";
const INTRON_BLOCK =
  "fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400";
const EXON_TEXT = "text-emerald-700 dark:text-emerald-300";
const INTRON_TEXT = "text-amber-700 dark:text-amber-300";

interface TableRow {
  cells: ReactNode[];
}

const SPLIT_GENE_ROWS: TableRow[] = [
  {
    cells: [
      "Exons",
      <strong key="exon-meaning">Expressed coding sequences</strong>,
      <strong key="exon-fate">Retained in mature RNA</strong>,
    ],
  },
  {
    cells: [
      "Introns",
      <strong key="intron-meaning">Intervening non-coding sequences</strong>,
      <strong key="intron-fate">Removed during RNA processing</strong>,
    ],
  },
];

interface GeneBlock {
  kind: "exon" | "intron";
  x: number;
  width: number;
}

const GENE_BLOCKS: GeneBlock[] = [
  { kind: "exon", x: 70, width: 66 },
  { kind: "intron", x: 142, width: 54 },
  { kind: "exon", x: 202, width: 66 },
  { kind: "intron", x: 274, width: 54 },
  { kind: "exon", x: 334, width: 66 },
];

const MATURE_EXONS = [
  { x: 150, width: 66 },
  { x: 218, width: 66 },
  { x: 286, width: 66 },
];

function MonocistronicArt() {
  return (
    <svg
      viewBox="0 0 260 92"
      className="mt-2 h-auto w-full"
      role="img"
      aria-label="A single transcript yields one polypeptide"
    >
      <rect
        x="70"
        y="8"
        width="120"
        height="16"
        rx="8"
        className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400"
        strokeWidth="1.4"
      />
      <text
        x="130"
        y="19"
        textAnchor="middle"
        className="fill-blue-700 text-[8px] font-semibold dark:fill-blue-300"
      >
        single transcript
      </text>
      <path
        d="M130 24 L130 44 M126 40 L130 46 L134 40"
        className="stroke-muted-foreground"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="95"
        y="52"
        width="70"
        height="24"
        rx="6"
        className="fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400"
        strokeWidth="1.4"
      />
      <text
        x="130"
        y="68"
        textAnchor="middle"
        className="fill-emerald-700 text-[9px] font-semibold dark:fill-emerald-300"
      >
        polypeptide
      </text>
    </svg>
  );
}

function PolycistronicArt() {
  const outputs = [48, 130, 212];
  return (
    <svg
      viewBox="0 0 260 92"
      className="mt-2 h-auto w-full"
      role="img"
      aria-label="A single transcript yields multiple polypeptides"
    >
      <rect
        x="70"
        y="8"
        width="120"
        height="16"
        rx="8"
        className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400"
        strokeWidth="1.4"
      />
      <text
        x="130"
        y="19"
        textAnchor="middle"
        className="fill-blue-700 text-[8px] font-semibold dark:fill-blue-300"
      >
        single transcript
      </text>
      <path
        d="M130 24 L130 40 M48 40 L212 40"
        className="stroke-muted-foreground"
        fill="none"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {outputs.map((x) => (
        <g key={x}>
          <path
            d={`M${x} 40 L${x} 50 M${x - 3} 46 L${x} 51 L${x + 3} 46`}
            className="stroke-muted-foreground"
            fill="none"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x={x - 30}
            y="52"
            width="60"
            height="24"
            rx="6"
            className="fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="1.4"
          />
          <text
            x={x}
            y="68"
            textAnchor="middle"
            className="fill-emerald-700 text-[8px] font-semibold dark:fill-emerald-300"
          >
            polypeptide
          </text>
        </g>
      ))}
    </svg>
  );
}

function SplitGeneArt() {
  return (
    <svg
      viewBox="0 0 470 128"
      className="mt-2 h-auto w-full"
      role="img"
      aria-label="Eukaryotic gene with alternating exons and introns; after RNA processing the mature RNA contains joined exons only"
    >
      <text
        x="6"
        y="38"
        className="fill-muted-foreground text-[10px] font-bold uppercase tracking-wider"
      >
        Gene
      </text>
      {GENE_BLOCKS.map((block) => {
        const isExon = block.kind === "exon";
        return (
          <g key={block.x}>
            <rect
              x={block.x}
              y="18"
              width={block.width}
              height="34"
              rx="4"
              className={isExon ? EXON_BLOCK : INTRON_BLOCK}
              strokeWidth="1.4"
            />
            <text
              x={block.x + block.width / 2}
              y="39"
              textAnchor="middle"
              fill="currentColor"
              className={`text-[10px] font-bold ${isExon ? EXON_TEXT : INTRON_TEXT}`}
            >
              {isExon ? "Exon" : "Intron"}
            </text>
          </g>
        );
      })}

      <path
        d="M235 58 L235 78 M230 73 L235 79 L240 73"
        className="stroke-muted-foreground"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="248"
        y="72"
        className="fill-muted-foreground text-[9px] font-semibold"
      >
        RNA processing
      </text>

      <text
        x="6"
        y="107"
        className="fill-muted-foreground text-[10px] font-bold uppercase tracking-wider"
      >
        Mature RNA
      </text>
      {MATURE_EXONS.map((block) => (
        <g key={block.x}>
          <rect
            x={block.x}
            y="88"
            width={block.width}
            height="30"
            rx="4"
            className={EXON_BLOCK}
            strokeWidth="1.4"
          />
          <text
            x={block.x + block.width / 2}
            y="107"
            textAnchor="middle"
            fill="currentColor"
            className={`text-[10px] font-bold ${EXON_TEXT}`}
          >
            Exon
          </text>
        </g>
      ))}
    </svg>
  );
}

/**
 * GeneOrganisation — gene vs cistron definitions, monocistronic vs
 * polycistronic structural genes, and the exon/intron split-gene architecture
 * of eukaryotic genes with the mature RNA that remains after processing.
 */
export function GeneOrganisation() {
  return (
    <div className="my-6">
      <div>
        <div className={EYEBROW}>Gene and cistron</div>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-3.5">
            <div className="text-sm font-bold tracking-tight text-foreground">
              Gene
            </div>
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              <strong>Functional unit of inheritance.</strong>
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-3.5">
            <div className="text-sm font-bold tracking-tight text-foreground">
              Cistron
            </div>
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              A segment of <strong>DNA</strong> coding for a single{" "}
              <strong>polypeptide</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className={EYEBROW}>Types of structural genes</div>
        <div className="mt-2 grid gap-4 sm:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card p-4">
            <div className="text-sm font-bold tracking-tight text-foreground">
              Monocistronic
            </div>
            <MonocistronicArt />
            <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              <li>
                Codes for a <strong>single polypeptide</strong>.
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-2 border-t border-border pt-3">
              <span className={EYEBROW}>Predominant in</span>
              <span className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-semibold text-foreground">
                eukaryotes
              </span>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-4">
            <div className="text-sm font-bold tracking-tight text-foreground">
              Polycistronic
            </div>
            <PolycistronicArt />
            <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              <li>
                Codes for <strong>multiple polypeptides</strong> in a single
                transcript.
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-2 border-t border-border pt-3">
              <span className={EYEBROW}>Predominant in</span>
              <span className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-semibold text-foreground">
                prokaryotes (bacteria)
              </span>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-8">
        <div className={EYEBROW}>Split-gene architecture in eukaryotes</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Eukaryotic <strong>monocistronic genes</strong> have interrupted coding
          sequences.
        </p>
        <div className="mt-4">
          <TableCard
            title="Exons and introns"
            headers={["Component", "Meaning", "Fate during RNA processing"]}
            rows={SPLIT_GENE_ROWS}
          />
        </div>
        <div className="mt-4 rounded-2xl border border-border bg-card p-4">
          <SplitGeneArt />
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-3">
            <span className="flex items-center gap-2">
              <span
                className="h-3 w-5 rounded border border-emerald-600 bg-emerald-500/25 dark:border-emerald-400"
                aria-hidden
              />
              <span className="text-xs text-foreground">
                Exon — retained in mature RNA
              </span>
            </span>
            <span className="flex items-center gap-2">
              <span
                className="h-3 w-5 rounded border border-amber-600 bg-amber-500/20 dark:border-amber-400"
                aria-hidden
              />
              <span className="text-xs text-foreground">
                Intron — removed during RNA processing
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
