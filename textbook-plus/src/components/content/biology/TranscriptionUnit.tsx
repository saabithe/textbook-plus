import type { ReactNode } from "react";
import { Highlight } from "@/components/content/Highlight";
import { Callout } from "@/components/content/Callout";
import { TableCard } from "@/components/content/data/TableCard";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

interface UnitRegion {
  label: string;
  definition: string;
}

const REGIONS: UnitRegion[] = [
  { label: "Promoter", definition: "Initiation region." },
  { label: "Structural Gene", definition: "Region that is transcribed." },
  { label: "Terminator", definition: "Termination region." },
];

type StrandTone = "template" | "coding";

interface StrandInfo {
  title: string;
  polarity: string;
  tone: StrandTone;
  points: ReactNode[];
}

const STRAND_TONE: Record<StrandTone, string> = {
  template:
    "border-indigo-500/30 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300",
  coding:
    "border-emerald-500/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
};

const STRANDS: StrandInfo[] = [
  {
    title: "Template strand",
    polarity: "3′ → 5′",
    tone: "template",
    points: [
      <>
        <strong>RNA synthesis:</strong> Serves as the template for RNA
        synthesis.
      </>,
      <>
        <strong>Reading enzyme:</strong> Read by DNA-dependent RNA polymerase.
      </>,
      <>
        <strong>RNA direction:</strong> RNA is synthesised in the opposite
        direction: <strong>5′ → 3′</strong>.
      </>,
    ],
  },
  {
    title: "Coding strand",
    polarity: "5′ → 3′",
    tone: "coding",
    points: [
      <>
        <strong>Complementarity:</strong> Complementary to the template strand.
      </>,
      <>
        <strong>Displacement:</strong> Displaced during transcription.
      </>,
      <>
        <strong>Sequence match:</strong> Its sequence is identical to the
        synthesised RNA, except: DNA contains <strong>Thymine (T)</strong>; RNA
        contains <strong>Uracil (U)</strong>.
      </>,
    ],
  },
];

interface TableRow {
  cells: string[];
}

const PROMOTER_TERMINATOR_ROWS: TableRow[] = [
  {
    cells: ["Location", "5′-end of coding strand", "3′-end of coding strand"],
  },
  { cells: ["Directional term", "Upstream", "Downstream"] },
  {
    cells: [
      "Function",
      "RNA polymerase binding site; defines the template strand",
      "Marks the end of transcription",
    ],
  },
];

/**
 * Section 2 — the transcription unit, strand nomenclature and the promoter /
 * terminator comparison. All section headings live in the page; this
 * component only supplies eyebrows and styled sub-titles.
 */
export function TranscriptionUnit() {
  return (
    <section className="my-6">
      <div className="mt-6">
        <div className={EYEBROW}>2.1 Structure of a transcription unit</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          A transcription unit is a DNA segment consisting of three regions:
        </p>

        <div className="mt-3 rounded-2xl border border-border bg-card p-4">
          <svg
            viewBox="0 0 720 150"
            className="h-auto w-full"
            role="img"
            aria-label="Transcription unit DNA track: promoter, structural gene and terminator blocks in sequence from the 5-prime end to the 3-prime end; transcription runs from the promoter to the terminator"
          >
            <defs>
              <marker
                id="tu-track-arrow"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L9,3 z" className="fill-foreground/70" />
              </marker>
            </defs>

            <text
              x="24"
              y="22"
              className="fill-muted-foreground text-[13px] font-bold"
            >
              5′
            </text>
            <text
              x="696"
              y="22"
              textAnchor="end"
              className="fill-muted-foreground text-[13px] font-bold"
            >
              3′
            </text>

            <rect
              x="24"
              y="34"
              width="150"
              height="44"
              rx="10"
              className="fill-violet-500/10 stroke-violet-500/50 dark:fill-violet-950/30"
              strokeWidth="1.5"
            />
            <line
              x1="178"
              y1="56"
              x2="244"
              y2="56"
              className="stroke-foreground/60"
              strokeWidth="2"
              markerEnd="url(#tu-track-arrow)"
            />
            <rect
              x="250"
              y="34"
              width="250"
              height="44"
              rx="10"
              className="fill-sky-500/10 stroke-sky-500/50 dark:fill-sky-950/30"
              strokeWidth="1.5"
            />
            <line
              x1="504"
              y1="56"
              x2="564"
              y2="56"
              className="stroke-foreground/60"
              strokeWidth="2"
              markerEnd="url(#tu-track-arrow)"
            />
            <rect
              x="570"
              y="34"
              width="126"
              height="44"
              rx="10"
              className="fill-amber-500/10 stroke-amber-500/50 dark:fill-amber-950/30"
              strokeWidth="1.5"
            />

            <text
              x="99"
              y="61"
              textAnchor="middle"
              className="fill-violet-800 dark:fill-violet-200 text-[13px] font-bold"
            >
              Promoter
            </text>
            <text
              x="375"
              y="61"
              textAnchor="middle"
              className="fill-sky-800 dark:fill-sky-200 text-[13px] font-bold"
            >
              Structural Gene
            </text>
            <text
              x="633"
              y="61"
              textAnchor="middle"
              className="fill-amber-800 dark:fill-amber-200 text-[13px] font-bold"
            >
              Terminator
            </text>

            <line
              x1="24"
              y1="106"
              x2="696"
              y2="106"
              className="stroke-foreground/50"
              strokeWidth="1.5"
              markerEnd="url(#tu-track-arrow)"
            />
            <text
              x="24"
              y="134"
              className="fill-muted-foreground text-[11px] font-bold uppercase tracking-wider"
            >
              Transcription direction: initiation → termination
            </text>
          </svg>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {REGIONS.map((region) => (
              <div
                key={region.label}
                className="rounded-xl border border-border bg-card p-3.5"
              >
                <div className="text-sm font-bold tracking-tight text-foreground">
                  {region.label}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  {region.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className={EYEBROW}>2.2 The two DNA strands</div>

        <div className="mt-3 rounded-2xl border border-border bg-card p-4">
          <svg
            viewBox="0 0 720 160"
            className="h-auto w-full"
            role="img"
            aria-label="Two antiparallel DNA strands: the indigo template strand runs 3 prime to 5 prime, and the emerald coding strand runs 5 prime to 3 prime"
          >
            <defs>
              <marker
                id="tu-template-arrow"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L9,3 z" className="fill-indigo-500" />
              </marker>
              <marker
                id="tu-coding-arrow"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L9,3 z" className="fill-emerald-500" />
              </marker>
            </defs>

            <text
              x="24"
              y="24"
              className="fill-indigo-800 dark:fill-indigo-200 text-[12px] font-bold"
            >
              Template strand · 3′ → 5′
            </text>
            <line
              x1="24"
              y1="48"
              x2="690"
              y2="48"
              className="stroke-indigo-500 dark:stroke-indigo-400"
              strokeWidth="6"
              strokeLinecap="round"
              markerEnd="url(#tu-template-arrow)"
            />
            <text
              x="24"
              y="72"
              className="fill-indigo-800 dark:fill-indigo-200 text-[13px] font-bold"
            >
              3′
            </text>
            <text
              x="696"
              y="72"
              textAnchor="end"
              className="fill-indigo-800 dark:fill-indigo-200 text-[13px] font-bold"
            >
              5′
            </text>

            <text
              x="24"
              y="104"
              className="fill-emerald-800 dark:fill-emerald-200 text-[12px] font-bold"
            >
              Coding strand · 5′ → 3′
            </text>
            <line
              x1="24"
              y1="128"
              x2="690"
              y2="128"
              className="stroke-emerald-500 dark:stroke-emerald-400"
              strokeWidth="6"
              strokeLinecap="round"
              markerEnd="url(#tu-coding-arrow)"
            />
            <text
              x="24"
              y="152"
              className="fill-emerald-800 dark:fill-emerald-200 text-[13px] font-bold"
            >
              5′
            </text>
            <text
              x="696"
              y="152"
              textAnchor="end"
              className="fill-emerald-800 dark:fill-emerald-200 text-[13px] font-bold"
            >
              3′
            </text>
          </svg>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {STRANDS.map((strand) => (
            <div
              key={strand.tone}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <div className="text-sm font-bold tracking-tight text-foreground">
                  {strand.title}
                </div>
                <span
                  className={`rounded-md border px-2 py-0.5 text-[0.68rem] font-bold tabular-nums ${STRAND_TONE[strand.tone]}`}
                >
                  {strand.polarity}
                </span>
              </div>
              <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
                {strand.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-border bg-card p-3.5">
          <div className={EYEBROW}>Sequence annotation</div>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground">
            Coding-strand sequence → RNA sequence:{" "}
            <Highlight color="yellow">T → U</Highlight>
          </p>
        </div>

        <Callout type="important" title="Important">
          The coding strand does not serve as the transcription template.
          However, promoter and terminator reference positions are defined with
          respect to the coding strand.
        </Callout>
      </div>

      <div className="mt-6">
        <div className={EYEBROW}>2.3 Promoter and terminator</div>
        <div className="mt-3">
          <TableCard
            headers={["Feature", "Promoter", "Terminator"]}
            rows={PROMOTER_TERMINATOR_ROWS}
          />
        </div>
        <div className="mt-3 rounded-xl border border-border bg-card p-3.5">
          <div className="flex items-center gap-3">
            <div className="min-w-0 flex-1">
              <div className={EYEBROW}>Upstream · 5′-end</div>
            </div>
            <svg
              viewBox="0 0 160 16"
              className="h-4 w-24 shrink-0"
              role="img"
              aria-label="Direction along the coding strand from upstream at the 5-prime end toward downstream at the 3-prime end"
            >
              <defs>
                <marker
                  id="tu-dir-arrow"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L0,6 L9,3 z" className="fill-foreground/60" />
                </marker>
              </defs>
              <line
                x1="4"
                y1="8"
                x2="150"
                y2="8"
                className="stroke-foreground/50"
                strokeWidth="1.5"
                markerEnd="url(#tu-dir-arrow)"
              />
            </svg>
            <div className="min-w-0 flex-1 text-right">
              <div className={EYEBROW}>Downstream · 3′-end</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
