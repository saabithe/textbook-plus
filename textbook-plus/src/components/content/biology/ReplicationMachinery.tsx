import type { ReactNode } from "react";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

const REQUIREMENTS: ReactNode[] = [
  <><strong>Parental DNA</strong> as the template.</>,
  <><strong>DNA-dependent DNA polymerase</strong>.</>,
  <><strong>Deoxyribonucleoside triphosphates (dNTPs)</strong>.</>,
  <><strong>Origin of replication</strong>.</>,
  <><strong>Helicase</strong>.</>,
  <><strong>DNA ligase</strong>.</>,
];

const POLYMERASE_CHARACTERISTICS: ReactNode[] = [
  "Catalyses DNA synthesis.",
  <>Works exclusively in the <Highlight color="yellow">5′ → 3′ direction</Highlight>.</>,
  "Ensures high accuracy (fidelity) during DNA replication.",
];

/** Two-branch schematic of the dual role of dNTPs. */
function DntpDualRoleDiagram() {
  return (
    <figure className="mt-3 rounded-xl border border-border bg-muted/25 p-3">
      <svg
        viewBox="0 0 320 130"
        className="h-auto w-full"
        role="img"
        aria-label="The dual role of dNTPs: as substrates supplying nucleotide building blocks and as an energy source that powers polymerisation."
      >
        <title>Dual role of dNTPs — substrate and energy</title>

        <rect x={120} y={8} width={80} height={30} rx={8} className="fill-muted stroke-border" strokeWidth={1.5} />
        <text x={160} y={27} textAnchor="middle" className="fill-foreground text-[12px] font-bold">
          dNTPs
        </text>

        <path d="M160 38 V56 H80 V70" fill="none" className="stroke-border" strokeWidth={1.5} />
        <path d="M160 38 V56 H240 V70" fill="none" className="stroke-border" strokeWidth={1.5} />

        <rect
          x={16}
          y={70}
          width={128}
          height={52}
          rx={8}
          className="fill-blue-50 stroke-blue-500/50 dark:fill-blue-950/30"
          strokeWidth={1.2}
        />
        <text x={80} y={89} textAnchor="middle" className="fill-blue-900 text-[11px] font-bold dark:fill-blue-100">
          Substrate
        </text>
        <text x={80} y={104} textAnchor="middle" className="fill-blue-800 text-[9px] dark:fill-blue-200">
          Nucleotide building
        </text>
        <text x={80} y={115} textAnchor="middle" className="fill-blue-800 text-[9px] dark:fill-blue-200">
          blocks
        </text>

        <rect
          x={176}
          y={70}
          width={128}
          height={52}
          rx={8}
          className="fill-orange-50 stroke-orange-500/50 dark:fill-orange-950/30"
          strokeWidth={1.2}
        />
        <text x={240} y={89} textAnchor="middle" className="fill-orange-900 text-[11px] font-bold dark:fill-orange-100">
          Energy
        </text>
        <text x={240} y={104} textAnchor="middle" className="fill-orange-800 text-[9px] dark:fill-orange-200">
          Powers
        </text>
        <text x={240} y={115} textAnchor="middle" className="fill-orange-800 text-[9px] dark:fill-orange-200">
          polymerisation
        </text>
      </svg>
      <figcaption className="mt-2 text-xs leading-snug text-muted-foreground">
        Dual role of dNTPs — Substrate (nucleotide building blocks); Energy (powers polymerisation).
      </figcaption>
    </figure>
  );
}

export function ReplicationMachinery() {
  return (
    <section className="my-8 space-y-6">
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className={EYEBROW}>3.1 Basic requirements</div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">DNA replication involves:</p>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {REQUIREMENTS.map((requirement, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-3.5 text-sm leading-relaxed text-foreground">
              {requirement}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className={EYEBROW}>3.2 DNA-dependent DNA polymerase</div>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              <strong>DNA-dependent DNA polymerase</strong> = Enzyme that synthesises new DNA using an existing DNA
              strand as a template.
            </p>
            <div className={EYEBROW}>Important characteristics</div>
            <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              {POLYMERASE_CHARACTERISTICS.map((characteristic, index) => (
                <li key={index}>{characteristic}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4">
            <div className={EYEBROW}>3.3 Rate of DNA replication</div>
            <p className="mt-2 text-sm leading-relaxed text-foreground">In <strong>E. coli</strong>:</p>
            <TableCard
              headers={["Parameter", "Value"]}
              rows={[
                { cells: ["Genome size", "4.6 × 10⁶ bp"] },
                { cells: ["Approximate replication time", "18 minutes"] },
                { cells: ["Polymerisation rate", "~2,000 bp/second"] },
              ]}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4">
          <div className={EYEBROW}>3.4 Role of dNTPs</div>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            <strong>Deoxyribonucleoside triphosphates (dNTPs)</strong> perform two functions:
          </p>
          <ol className="my-4 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
            <li><strong>Substrates</strong> → Provide the building blocks for DNA synthesis.</li>
            <li><strong>Energy source</strong> → Supply energy for polymerisation through their high-energy phosphate bonds.</li>
          </ol>
          <DntpDualRoleDiagram />
        </div>
      </div>
    </section>
  );
}
