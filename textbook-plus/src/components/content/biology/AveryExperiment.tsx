import { Stepper } from "@/components/content/Stepper";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

interface EnzymeRow {
  treatment: string;
  destroyed: string;
  result: string;
  decisive: boolean;
}

const ENZYME_ROWS: EnzymeRow[] = [
  { treatment: "RNase", destroyed: "RNA", result: "Transformation occurred", decisive: false },
  { treatment: "Protease", destroyed: "Proteins", result: "Transformation occurred", decisive: false },
  { treatment: "DNase", destroyed: "DNA", result: "Transformation did not occur", decisive: true },
];

const APPROACH_STEPS = [
  { label: "Extracted major biochemical components from heat-killed S bacteria." },
  { label: "Identified three major components: DNA, RNA, Proteins." },
  { label: "Treated the extracts with specific enzymes." },
  { label: "Mixed the treated extracts with living R-strain bacteria." },
  { label: "Observed whether transformation occurred." },
];

interface DeductionPath {
  label: string;
  chain: string[];
  decisive: boolean;
}

const DEDUCTION_PATHS: DeductionPath[] = [
  {
    label: "RNase + Protease path",
    chain: ["RNase + Protease", "DNA remains intact", "Transformation continues"],
    decisive: false,
  },
  {
    label: "DNase path",
    chain: ["DNase", "DNA is destroyed", "Transformation stops"],
    decisive: true,
  },
];

function EnzymeMatrix() {
  return (
    <div className="mt-3 overflow-hidden rounded-2xl border border-border">
      <div className="grid grid-cols-3 border-b border-border bg-muted/50 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
        <div className="min-w-0 px-3 py-2">Treatment</div>
        <div className="min-w-0 px-3 py-2">Substance destroyed</div>
        <div className="min-w-0 px-3 py-2">Result</div>
      </div>
      {ENZYME_ROWS.map((row) => (
        <div
          key={row.treatment}
          className={`grid grid-cols-3 border-b border-border last:border-b-0 ${
            row.decisive
              ? "border-l-[3px] border-l-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/20"
              : "bg-card"
          }`}
        >
          <div
            className={`min-w-0 break-words px-3 py-2.5 text-sm font-semibold leading-snug ${
              row.decisive
                ? "text-emerald-900 dark:text-emerald-200"
                : "text-foreground"
            }`}
          >
            {row.treatment}
            {row.decisive && (
              <span className="mt-1 block w-fit rounded-full bg-emerald-600 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-white dark:bg-emerald-500">
                Decisive
              </span>
            )}
          </div>
          <div className="min-w-0 break-words px-3 py-2.5 text-sm leading-snug text-foreground/85">
            {row.destroyed}
          </div>
          <div
            className={`min-w-0 break-words px-3 py-2.5 text-sm leading-snug ${
              row.decisive ? "font-semibold text-emerald-900 dark:text-emerald-200" : "text-foreground/85"
            }`}
          >
            {row.decisive ? (
              <Highlight color="green">{row.result}</Highlight>
            ) : (
              row.result
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function DeductionFlows() {
  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {DEDUCTION_PATHS.map((path) => (
          <div
            key={path.label}
            className={`rounded-xl border p-3.5 ${
              path.decisive
                ? "border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/15"
                : "border-border bg-card"
            }`}
          >
            <div className={EYEBROW}>{path.label}</div>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
              {path.chain.map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                  <span
                    className={`rounded-lg border px-2 py-1 text-xs font-semibold leading-snug ${
                      path.decisive
                        ? "border-emerald-500/40 bg-card text-emerald-900 dark:text-emerald-200"
                        : "border-border bg-muted/40 text-foreground"
                    }`}
                  >
                    {step}
                  </span>
                  {index < path.chain.length - 1 && (
                    <span className="text-muted-foreground" aria-hidden>
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-50/70 px-3 py-2.5 text-center dark:bg-emerald-950/25">
        <span className="text-emerald-700 dark:text-emerald-300" aria-hidden>
          ↓
        </span>
        <span className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
          <Highlight color="yellow">DNA identified as the transforming principle</Highlight>
        </span>
      </div>
    </div>
  );
}

export function AveryExperiment() {
  return (
    <section className="my-8 space-y-6">
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className={EYEBROW}>3.1 Researchers</div>
        <ul className="my-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li>Oswald Avery.</li>
          <li>Colin MacLeod.</li>
          <li>Maclyn McCarty.</li>
        </ul>
        <p className="text-sm leading-relaxed text-foreground">
          <strong>Objective:</strong> Identify the biochemical nature of Griffith’s transforming principle.
        </p>
      </div>

      <div>
        <div className={EYEBROW}>3.2 Experimental approach</div>
        <Stepper steps={APPROACH_STEPS} />
      </div>

      <div>
        <div className={EYEBROW}>3.3 Enzymatic digestion experiments</div>
        <EnzymeMatrix />
      </div>

      <div>
        <div className={EYEBROW}>Experimental deduction</div>
        <DeductionFlows />
      </div>

      <div>
        <div className={EYEBROW}>3.4 Conclusion</div>
        <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li>Destroying RNA did not stop transformation.</li>
          <li>Destroying proteins did not stop transformation.</li>
          <li>Destroying DNA prevented transformation.</li>
        </ul>
        <KeyPoint title="Conclusion">
          <strong>Therefore, DNA is the transforming principle and hereditary material.</strong>
        </KeyPoint>
      </div>
    </section>
  );
}
