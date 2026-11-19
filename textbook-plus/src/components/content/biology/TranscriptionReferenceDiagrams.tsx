import { TableCard } from "@/components/content/data/TableCard";
import { Callout } from "@/components/content/Callout";
import { Expandable } from "@/components/content/Expandable";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

interface CoverageRow {
  diagram: string;
  preserve: string;
}

const COVERAGE_ROWS: CoverageRow[] = [
  { diagram: "Prokaryotic transcription", preserve: "Initiation, elongation, termination" },
  { diagram: "DNA strand map", preserve: "Template strand, coding strand, P, sg, T, polarity" },
  { diagram: "Eukaryotic transcription", preserve: "hnRNA synthesis" },
  { diagram: "hnRNA processing", preserve: "Capping, splicing, tailing" },
  { diagram: "Structural gene", preserve: "Promoter, structural gene, Protein – 1" },
];

/** Original textbook and handwritten diagrams kept accessible, collapsed by default. */
export function TranscriptionReferenceDiagrams() {
  return (
    <Expandable title="Reference Diagrams">
      <div className={EYEBROW}>Diagram coverage</div>
      <TableCard
        headers={["Diagram", "Information to preserve"]}
        rows={COVERAGE_ROWS.map((row) => ({
          cells: [row.diagram, row.preserve],
        }))}
      />

      <figure className="my-6 rounded-2xl border border-border bg-card p-4">
        {/* eslint-disable-next-line @next/next/no-img-element -- preserved original source image */}
        <img
          src="/images/biology/molecular-basis-of-inheritance/transcription-unit.png"
          alt="Schematic structure of a transcription unit"
          loading="lazy"
          className="mx-auto h-auto max-h-[420px] w-full rounded-lg object-contain bg-white"
        />
        <figcaption className="mt-3 text-center text-xs font-medium text-muted-foreground">
          Schematic structure of a transcription unit
        </figcaption>
      </figure>

      <Callout type="warning" title="Source clarification">
        The handwritten eukaryotic termination diagram labels a ρ (Rho) factor. This annotation needs verification before treating it as an established eukaryotic mechanism.
      </Callout>
    </Expandable>
  );
}
