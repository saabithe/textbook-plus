import { Callout } from "@/components/content/Callout";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

/**
 * Structural gene organisation — a compact horizontal schematic that preserves
 * the original handwritten labels, including the ambiguous structural-gene mark.
 */
export function StructuralGeneOrganisation() {
  return (
    <section className="my-8 space-y-4">
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className={EYEBROW}>Structural genes: Monocistronic</div>

        <figure className="mt-3">
          <svg
            viewBox="0 0 720 160"
            className="h-auto w-full"
            role="img"
            aria-label="Structural gene organisation: a promoter labelled P leads to a structural gene whose handwritten label is unclear between Sq and Sg, which leads to Protein 1."
          >
            <defs>
              <marker
                id="sgo-arrow"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L9,3 z" className="fill-muted-foreground" />
              </marker>
            </defs>

            {/* arrows between the three blocks */}
            <line
              x1="204"
              y1="80"
              x2="252"
              y2="80"
              className="stroke-muted-foreground"
              strokeWidth="2"
              markerEnd="url(#sgo-arrow)"
            />
            <line
              x1="466"
              y1="80"
              x2="514"
              y2="80"
              className="stroke-muted-foreground"
              strokeWidth="2"
              markerEnd="url(#sgo-arrow)"
            />

            {/* Promoter (P) */}
            <rect
              x="20"
              y="48"
              width="180"
              height="64"
              rx="14"
              className="fill-sky-50 stroke-sky-500/50 dark:fill-sky-950/30"
              strokeWidth="1.5"
            />
            <text
              x="110"
              y="78"
              textAnchor="middle"
              className="fill-sky-900 text-[18px] font-bold dark:fill-sky-200"
            >
              Promoter
            </text>
            <text
              x="110"
              y="97"
              textAnchor="middle"
              className="fill-sky-700 text-[12px] dark:fill-sky-300"
            >
              (P)
            </text>

            {/* Structural gene — ambiguous handwriting preserved verbatim */}
            <rect
              x="260"
              y="48"
              width="200"
              height="64"
              rx="14"
              className="fill-amber-50 stroke-amber-500/50 dark:fill-amber-950/30"
              strokeWidth="1.5"
            />
            <text
              x="360"
              y="68"
              textAnchor="middle"
              className="fill-amber-900 text-[13px] font-semibold dark:fill-amber-200"
            >
              Structural gene
            </text>
            <text
              x="360"
              y="90"
              textAnchor="middle"
              className="fill-amber-900 text-[18px] font-bold dark:fill-amber-200"
            >
              Sq / Sg
            </text>
            <text
              x="360"
              y="105"
              textAnchor="middle"
              className="fill-amber-700 text-[10px] italic dark:fill-amber-300"
            >
              (unclear)
            </text>

            {/* Protein – 1 */}
            <rect
              x="520"
              y="48"
              width="180"
              height="64"
              rx="14"
              className="fill-emerald-50 stroke-emerald-500/50 dark:fill-emerald-950/30"
              strokeWidth="1.5"
            />
            <text
              x="610"
              y="85"
              textAnchor="middle"
              className="fill-emerald-900 text-[18px] font-bold dark:fill-emerald-200"
            >
              Protein – 1
            </text>
          </svg>
        </figure>
      </div>

      <Callout type="warning" title="Source clarification needed">
        The handwritten structural-gene label is unclear (<code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.9em]">Sq</code> / <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.9em]">Sg</code>). Confirm the intended label before finalising the diagram.
      </Callout>
    </section>
  );
}
