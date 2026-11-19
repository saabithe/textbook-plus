import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

type SegmentKind = "exon" | "intron";

interface SegmentStyle {
  rect: string;
  text: string;
}

const SEGMENT_STYLES: Record<SegmentKind, SegmentStyle> = {
  exon: {
    rect: "fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400",
    text: "text-emerald-700 dark:text-emerald-300",
  },
  intron: {
    rect: "fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400",
    text: "text-amber-700 dark:text-amber-300",
  },
};

interface StrandSegment {
  id: string;
  label: string;
  kind: SegmentKind;
  x: number;
  width: number;
}

const HNRNA_SEGMENTS: StrandSegment[] = [
  { id: "exon-1", label: "Exon 1", kind: "exon", x: 38, width: 84 },
  { id: "intron-1", label: "Intron 1", kind: "intron", x: 128, width: 84 },
  { id: "exon-2", label: "Exon 2", kind: "exon", x: 218, width: 84 },
  { id: "intron-2", label: "Intron 2", kind: "intron", x: 308, width: 84 },
  { id: "exon-3", label: "Exon 3", kind: "exon", x: 398, width: 84 },
];

interface ProcessingStep {
  id: string;
  number: string;
  title: string;
  site: string;
  body?: ReactNode;
  details?: { id: string; content: ReactNode }[];
}

const PROCESSING_STEPS: ProcessingStep[] = [
  {
    id: "capping",
    number: "01",
    title: "Capping 🧢",
    site: "5′-end",
    body: (
      <p className="text-sm leading-relaxed text-foreground">
        An unusual nucleotide, <strong>methyl guanosine triphosphate (m⁷Gppp)</strong>, is attached to the{" "}
        <strong>5′-end</strong> of hnRNA.
      </p>
    ),
  },
  {
    id: "splicing",
    number: "02",
    title: "Splicing ✂️",
    site: "Introns → exons",
    details: [
      { id: "introns-removed", content: <><strong>Introns</strong> (non-coding regions) are removed.</> },
      {
        id: "exons-joined",
        content: <><strong>Exons</strong> (coding regions) are joined together in a precise, defined order.</>,
      },
    ],
  },
  {
    id: "tailing",
    number: "03",
    title: "Tailing",
    site: "3′-end",
    details: [
      {
        id: "adenylate-residues",
        content: <><strong>Approximately 200–300 adenylate residues</strong> are added to the <strong>3′-end</strong>.</>,
      },
      { id: "template-independent", content: <>Addition occurs in a <strong>template-independent manner</strong>.</> },
      { id: "poly-a-tail", content: <>This forms the <strong>Poly-A tail</strong>.</> },
    ],
  },
];

interface FlowCard {
  id: string;
  x: number;
  width: number;
  label: string;
  phrase: string;
  labelX: number;
}

const FLOW_CARDS: FlowCard[] = [
  { id: "capping", x: 20, width: 196, label: "Capping", phrase: "m⁷Gppp at 5′-end", labelX: 46 },
  { id: "splicing", x: 236, width: 250, label: "Splicing", phrase: "Introns removed; exons joined", labelX: 326 },
  { id: "tailing", x: 506, width: 234, label: "Tailing", phrase: "200–300 adenylate residues at 3′-end", labelX: 623 },
];

interface FlowSegment {
  id: string;
  label: string;
  kind: SegmentKind;
  x: number;
  width: number;
}

const FLOW_HNRNA_SEGMENTS: FlowSegment[] = [
  { id: "flow-exon-1", label: "Exon 1", kind: "exon", x: 38, width: 110 },
  { id: "flow-intron-1", label: "Intron 1", kind: "intron", x: 154, width: 76 },
  { id: "flow-exon-2", label: "Exon 2", kind: "exon", x: 236, width: 110 },
  { id: "flow-intron-2", label: "Intron 2", kind: "intron", x: 352, width: 76 },
  { id: "flow-exon-3", label: "Exon 3", kind: "exon", x: 434, width: 110 },
];

const FLOW_MATURE_EXONS: FlowSegment[] = [
  { id: "mature-exon-1", label: "Exon 1", kind: "exon", x: 68, width: 100 },
  { id: "mature-exon-2", label: "Exon 2", kind: "exon", x: 172, width: 100 },
  { id: "mature-exon-3", label: "Exon 3", kind: "exon", x: 276, width: 100 },
];

function HnrnaStrand() {
  return (
    <div className="mt-4">
      <div className={EYEBROW}>hnRNA strand — 5′ → 3′</div>
      <svg
        viewBox="0 0 560 116"
        className="mt-2 w-full max-w-[560px]"
        role="img"
        aria-label="hnRNA strand labelled 5 prime to 3 prime, with alternating exon and intron segments"
      >
        <text x={12} y={62} className="fill-current text-xs font-bold text-muted-foreground">5′</text>
        <line x1={28} y1={55} x2={492} y2={55} className="stroke-border" strokeWidth={1} />
        {HNRNA_SEGMENTS.map((segment) => (
          <g key={segment.id}>
            <rect
              x={segment.x}
              y={38}
              width={segment.width}
              height={34}
              rx={6}
              strokeWidth={1}
              className={SEGMENT_STYLES[segment.kind].rect}
            />
            <text
              x={segment.x + segment.width / 2}
              y={59}
              textAnchor="middle"
              className={`fill-current text-[11px] font-bold ${SEGMENT_STYLES[segment.kind].text}`}
            >
              {segment.label}
            </text>
          </g>
        ))}
        <text x={500} y={62} className="fill-current text-xs font-bold text-muted-foreground">3′</text>
      </svg>
    </div>
  );
}

function ProcessingFlowchart() {
  return (
    <div className="mt-4">
      <div className={EYEBROW}>hnRNA → mature mRNA</div>
      <svg
        viewBox="0 0 760 320"
        className="mt-2 w-full max-w-[760px]"
        role="img"
        aria-label="Flowchart from an hnRNA strand containing exons and introns to mature mRNA carrying a 5 prime cap, joined exons and a 3 prime Poly-A tail, through capping, splicing and tailing"
      >
        <text x={12} y={22} className="fill-current text-[11px] font-bold text-foreground">
          hnRNA — 5′ → 3′ · Contains exons and introns
        </text>
        <text x={12} y={68} className="fill-current text-xs font-bold text-muted-foreground">5′</text>
        {FLOW_HNRNA_SEGMENTS.map((segment) => (
          <g key={segment.id}>
            <rect
              x={segment.x}
              y={46}
              width={segment.width}
              height={28}
              rx={5}
              strokeWidth={1}
              className={SEGMENT_STYLES[segment.kind].rect}
            />
            <text
              x={segment.x + segment.width / 2}
              y={64}
              textAnchor="middle"
              className={`fill-current text-[10px] font-bold ${SEGMENT_STYLES[segment.kind].text}`}
            >
              {segment.label}
            </text>
          </g>
        ))}
        <text x={552} y={68} className="fill-current text-xs font-bold text-muted-foreground">3′</text>

        {FLOW_CARDS.map((card) => (
          <g key={card.id}>
            <rect
              x={card.x}
              y={112}
              width={card.width}
              height={64}
              rx={10}
              strokeWidth={1}
              className="fill-muted stroke-border"
            />
            <text x={card.x + 12} y={136} className="fill-current text-[11px] font-bold text-foreground">
              {card.label}
            </text>
            <text x={card.x + 12} y={156} className="fill-current text-[10px] text-muted-foreground">
              {card.phrase}
            </text>
          </g>
        ))}

        <line x1={46} y1={74} x2={46} y2={112} className="stroke-muted-foreground/40" strokeWidth={1} />
        <line x1={46} y1={176} x2={46} y2={232} className="stroke-muted-foreground/40" strokeWidth={1} />
        <line x1={326} y1={74} x2={326} y2={112} className="stroke-muted-foreground/40" strokeWidth={1} />
        <line x1={326} y1={176} x2={326} y2={232} className="stroke-muted-foreground/40" strokeWidth={1} />
        <line x1={552} y1={74} x2={623} y2={112} className="stroke-muted-foreground/40" strokeWidth={1} />
        <line x1={623} y1={176} x2={439} y2={232} className="stroke-muted-foreground/40" strokeWidth={1} />

        <text x={12} y={250} className="fill-current text-xs font-bold text-muted-foreground">5′</text>
        <rect
          x={32}
          y={232}
          width={28}
          height={28}
          rx={5}
          strokeWidth={1}
          className="fill-violet-500/25 stroke-violet-600 dark:stroke-violet-400"
        />
        <text
          x={46}
          y={226}
          textAnchor="middle"
          className="fill-current text-[9px] font-bold text-violet-700 dark:text-violet-300"
        >
          5′ cap
        </text>
        {FLOW_MATURE_EXONS.map((segment) => (
          <g key={segment.id}>
            <rect
              x={segment.x}
              y={232}
              width={segment.width}
              height={28}
              rx={5}
              strokeWidth={1}
              className={SEGMENT_STYLES[segment.kind].rect}
            />
            <text
              x={segment.x + segment.width / 2}
              y={250}
              textAnchor="middle"
              className={`fill-current text-[10px] font-bold ${SEGMENT_STYLES[segment.kind].text}`}
            >
              {segment.label}
            </text>
          </g>
        ))}
        <rect
          x={384}
          y={232}
          width={110}
          height={28}
          rx={5}
          strokeWidth={1}
          className="fill-sky-500/20 stroke-sky-600 dark:stroke-sky-400"
        />
        <text
          x={439}
          y={226}
          textAnchor="middle"
          className="fill-current text-[9px] font-bold text-sky-700 dark:text-sky-300"
        >
          3′ Poly-A tail
        </text>
        <text x={502} y={250} className="fill-current text-xs font-bold text-muted-foreground">3′</text>

        <text x={12} y={292} className="fill-current text-[11px] font-bold text-foreground">
          Mature mRNA — 5′ cap + joined exons + 3′ Poly-A tail
        </text>
      </svg>
    </div>
  );
}

export function EukaryoticTranscription() {
  return (
    <section className="my-8 space-y-6">
      <div>
        <div className={EYEBROW}>5. Transcription in Eukaryotes</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Eukaryotic transcription has two major additional complexities:
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4">
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className={EYEBROW}>5.1 · RNA polymerases</div>
            <div className="mt-2 text-sm font-semibold leading-snug text-foreground">
              Division of Labour Among Three RNA Polymerases
            </div>
          </div>
          <ArrowRight
            className="mx-auto h-5 w-5 rotate-90 text-muted-foreground sm:rotate-0"
            aria-hidden
          />
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className={EYEBROW}>5.2 · hnRNA processing</div>
            <div className="mt-2 text-sm font-semibold leading-snug text-foreground">
              Post-Transcriptional Processing of hnRNA
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={EYEBROW}>5.1 Division of Labour Among Three RNA Polymerases</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Eukaryotes have at least three RNA polymerases in the nucleus, in addition to RNA polymerases found in
          organelles.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground">Each enzyme has a distinct function.</p>
        <TableCard
          headers={["Enzyme", "Function"]}
          rows={[
            {
              cells: [
                <strong key="pol-i">RNA Polymerase I</strong>,
                "Transcribes precursor rRNAs: 28S, 18S and 5.8S",
              ],
            },
            {
              cells: [
                <strong key="pol-ii">RNA Polymerase II</strong>,
                <>Transcribes the mRNA precursor: <Highlight color="yellow">hnRNA</Highlight></>,
              ],
            },
            {
              cells: [
                <strong key="pol-iii">RNA Polymerase III</strong>,
                "Transcribes tRNA, 5S rRNA and snRNAs",
              ],
            },
          ]}
        />
        <div className="mt-3 rounded-xl border border-border bg-card p-3.5 text-sm font-semibold text-foreground">
          hnRNA = Heterogeneous Nuclear RNA
        </div>
      </div>

      <div>
        <div className={EYEBROW}>5.2 Primary transcript — hnRNA</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          RNA Polymerase II transcribes the precursor of mRNA, called{" "}
          <strong>heterogeneous nuclear RNA (hnRNA)</strong>.
        </p>
        <div className="mt-4 text-sm font-bold text-foreground">Structure of hnRNA</div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-600/40 bg-card p-3.5 text-sm leading-relaxed text-emerald-700 dark:text-emerald-300">
            <strong>Exons</strong> → Coding sequences.
          </div>
          <div className="rounded-xl border border-amber-600/40 bg-card p-3.5 text-sm leading-relaxed text-amber-700 dark:text-amber-300">
            <strong>Introns</strong> → Non-coding sequences.
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          hnRNA contains both exons and introns and must undergo post-transcriptional processing to become functional
          mRNA.
        </p>
        <HnrnaStrand />
      </div>

      <div>
        <div className={EYEBROW}>5.3 Post-Transcriptional Processing of hnRNA</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Three processing steps transform hnRNA into mature mRNA:
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {PROCESSING_STEPS.map((step) => (
            <div key={step.id} className="rounded-2xl border border-border bg-card p-4">
              <div className={EYEBROW}>{step.number}. {step.title}</div>
              <div className="mt-3 inline-flex rounded-xl border border-border bg-muted/40 px-3 py-1.5 text-[0.68rem] font-bold text-muted-foreground">
                {step.site}
              </div>
              <div className="mt-3">
                {step.body}
                {step.details && (
                  <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
                    {step.details.map((detail) => (
                      <li key={detail.id}>{detail.content}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={EYEBROW}>5.4 hnRNA → Mature mRNA</div>
        <ProcessingFlowchart />
        <div className="mt-4">
          <div className={EYEBROW}>Nuclear Export</div>
          <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
            <li><strong>Fully processed hnRNA</strong> becomes functional mRNA.</li>
            <li>
              <strong>Mature mRNA</strong> is exported from the nucleus into the cytoplasm for translation.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className={EYEBROW}>5.5 Evolutionary significance</div>
        <KeyPoint title="Evolutionary significance">
          <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
            <li><strong>Split-gene arrangement</strong> is an ancient genomic feature.</li>
            <li><strong>Presence of introns</strong> reflects antiquity.</li>
            <li>
              <strong>Splicing</strong> highlights the dominance of the{" "}
              <Highlight color="yellow">RNA world</Highlight>.
            </li>
          </ul>
        </KeyPoint>
      </div>
    </section>
  );
}
