import { ArrowLeft, ArrowRight } from "lucide-react";

function Node({ symbol, note }: { symbol: string; note: string }) {
  return (
    <div className="min-w-[5rem] rounded-md border border-border bg-muted/40 px-3 py-2.5 text-center">
      <p className="text-lg font-extrabold text-foreground">{symbol}</p>
      <p className="mt-0.5 text-[0.7rem] leading-tight text-muted-foreground">{note}</p>
    </div>
  );
}

function Effect({
  tone,
  bond,
  change,
}: {
  tone: "ok" | "warning";
  bond: string;
  change: string;
}) {
  return (
    <div
      className={
        tone === "ok"
          ? "rounded-md border border-ok/40 bg-ok/10 px-3 py-2.5"
          : "rounded-md border border-warning/40 bg-warning/10 px-3 py-2.5"
      }
    >
      <p className={tone === "ok" ? "t-micro text-ok" : "t-micro text-warning"}>{bond}</p>
      <p className="mt-0.5 text-sm font-extrabold text-foreground">{change}</p>
    </div>
  );
}

/**
 * SynergicSummary — the visual summary: two opposite arrows between the metal
 * and CO, then the two bond effects they produce.
 */
export function SynergicSummary() {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">Synergic bonding · combined effect</span>
      </div>

      <div className="px-4 py-5">
        <div className="flex items-center justify-center gap-4">
          <Node symbol="M" note="metal" />

          <div className="flex min-w-[9rem] flex-1 flex-col gap-3">
            <div className="flex items-center gap-2">
              <ArrowLeft aria-hidden className="h-4 w-4 shrink-0 text-warning" />
              <span className="h-px flex-1 bg-warning/60" />
              <span className="t-micro whitespace-nowrap">σ · CO → M</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="t-micro whitespace-nowrap">π · M → CO</span>
              <span className="h-px flex-1 bg-[color-mix(in_oklab,var(--subject-physics)_60%,transparent)]" />
              <ArrowRight
                aria-hidden
                className="h-4 w-4 shrink-0 text-[var(--subject-physics)]"
              />
            </div>
          </div>

          <Node symbol="CO" note="carbonyl" />
        </div>

        <div className="mt-3 flex items-center justify-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
          <span>ligand → metal</span>
          <span aria-hidden className="h-3 w-px bg-border" />
          <span>metal → ligand</span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Effect tone="ok" bond="M–CO bond" change="Strengthened ↑" />
          <Effect tone="warning" bond="C–O bond" change="Weakened ↓" />
        </div>
      </div>
    </div>
  );
}
