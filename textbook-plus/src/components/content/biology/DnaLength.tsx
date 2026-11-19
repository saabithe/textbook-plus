import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Highlight } from "@/components/content/Highlight";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

export function DnaLengthFormula() {
  return (
    <>
      <p className="my-4 text-sm leading-relaxed text-foreground">
        DNA length is calculated using:
      </p>
      <FormulaBlock
        latex={String.raw`\boxed{\text{DNA length}=\text{Total number of bp}\times\text{Distance between adjacent bp}}`}
        important
      />
      <p className="my-4 text-sm leading-relaxed text-foreground">
        <strong>Given distance:</strong> <Formula>{String.raw`0.34\,\text{nm}`}</Formula> per base pair.
      </p>
    </>
  );
}

function Part({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-foreground text-[0.7rem] font-bold tabular-nums text-background">
          {n}
        </span>
        <span className={EYEBROW}>{title}</span>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

/** Collapsed worked example — Given → Formula → Substitution and Answer. */
export function DnaLengthSolvedExample() {
  return (
    <Expandable title="Solved example — Human diploid DNA (2n)" variant="example">
      <div className="space-y-3">
        <Part n="01" title="Given">
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
            <li>
              <strong>Total base pairs:</strong> <Formula>{String.raw`6.6\times10^{9}`}</Formula>
            </li>
            <li>
              <strong>Distance between adjacent base pairs:</strong>{" "}
              <Formula>{String.raw`0.34\,\text{nm}`}</Formula>
            </li>
          </ul>
        </Part>

        <Part n="02" title="Formula">
          <div className="[&>div]:my-2">
            <FormulaBlock
              latex={String.raw`\text{DNA length}=\text{Total bp}\times\text{Distance between adjacent bp}`}
            />
          </div>
        </Part>

        <Part n="03" title="Substitution and Answer">
          <div className="space-y-2 [&>div]:my-0">
            <FormulaBlock latex={String.raw`\text{DNA length}=6.6\times10^{9}\times0.34\,\text{nm}`} />
            <p className="text-center text-sm text-muted-foreground">
              Convert nanometres to metres first:
            </p>
            <div className="rounded-lg border border-amber-500/40 bg-amber-50/60 px-3 py-2 text-center dark:bg-amber-950/20">
              <Formula>{String.raw`1\,\text{nm}=10^{-9}\,\text{m}`}</Formula>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                Essential unit conversion
              </p>
            </div>
            <FormulaBlock latex={String.raw`=6.6\times10^{9}\times0.34\times10^{-9}\,\text{m}`} />
            <FormulaBlock latex={String.raw`=2.244\,\text{m}`} important />
          </div>

          <div className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-50/60 p-4 text-center dark:bg-emerald-950/20">
            <div className={EYEBROW}>Final answer — human diploid DNA</div>
            <p className="mt-1 text-3xl font-bold tracking-tight tabular-nums text-emerald-800 dark:text-emerald-300">
              <Highlight color="green">≈ 2.2 m</Highlight>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              The supplied notes round 2.244 m to approximately 2.2 m.
            </p>
          </div>
        </Part>
      </div>
    </Expandable>
  );
}
