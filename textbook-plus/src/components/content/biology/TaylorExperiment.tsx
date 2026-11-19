import { Highlight } from "@/components/content/Highlight";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

/**
 * Compact supporting experiment card. Kept visually lighter than the detailed
 * Meselson–Stahl treatment (amber accent, smaller footprint), with no headings:
 * the page owns all section headings.
 */
export function TaylorExperiment() {
  return (
    <div className="my-6 rounded-2xl border border-amber-500/40 bg-amber-50/40 p-4 dark:bg-amber-950/15">
      <div className={EYEBROW}>Supporting experiment</div>

      <div className="mt-3 rounded-xl border border-amber-500/30 bg-card p-3.5">
        <div className={EYEBROW}>Plant</div>
        <div className="mt-1.5 text-sm leading-relaxed text-foreground">
          <strong>Vicia faba</strong> (faba bean)
        </div>
      </div>

      <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
        <li>Used <strong>radioactive thymidine</strong> to study DNA replication in plant chromosomes.</li>
        <li>Radioactive thymidine was used to track newly synthesised DNA.</li>
        <li>The experiment demonstrated the distribution of parental and newly synthesised DNA in chromosomes.</li>
      </ul>

      <div className="rounded-xl border border-amber-500/40 bg-card px-3.5 py-3">
        <div className={EYEBROW}>Conclusion</div>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground">
          DNA replication in eukaryotic chromosomes also occurs through the{" "}
          <Highlight color="yellow">semiconservative mechanism</Highlight>.
        </p>
      </div>
    </div>
  );
}
