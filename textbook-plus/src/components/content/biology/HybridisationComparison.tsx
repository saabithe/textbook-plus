import { ArrowDown } from "lucide-react";

/**
 * HybridisationComparison — the section's main table, plus the crossing that
 * shows why the table's third row reads the way it does.
 *
 * Desktop: one full-width table, feature column narrower than the two
 * technique columns. Mobile: each feature becomes a stacked card so nothing
 * scrolls sideways. No offspring traits are invented — the outcome node only
 * restates "desirable + undesirable characters".
 */

interface FeatureRow {
  feature: string;
  hybridisation: string;
  engineering: string;
  emphasis?: boolean;
}

const ROWS: FeatureRow[] = [
  {
    feature: "Approach",
    hybridisation: "Cross-pollination / breeding between species",
    engineering: "Direct insertion of specific genes",
  },
  {
    feature: "Specificity",
    hybridisation: "Low",
    engineering: "High",
    emphasis: true,
  },
  {
    feature: "Outcome",
    hybridisation: "Combines desirable characters along with undesirable characters",
    engineering: "Transfers only desirable characters without mixing undesirable traits",
    emphasis: true,
  },
  {
    feature: "Example",
    hybridisation: "Large flower + more thorns crossed with small flower + fewer thorns",
    engineering: "Isolating and inserting only the targeted beneficial gene",
  },
];

export function HybridisationVsEngineering() {
  return (
    <div className="my-5">
      {/* Desktop / tablet: full-width table */}
      <div className="hidden overflow-hidden rounded-xl border border-border sm:block">
        <table className="w-full border-collapse text-left align-top">
          <thead>
            <tr className="bg-muted/40">
              <th className="w-[18%] border-b border-border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Feature
              </th>
              <th className="border-b border-l border-border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Traditional hybridisation
              </th>
              <th className="border-b border-l border-border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
                Genetic engineering
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.feature} className="align-top">
                <th
                  scope="row"
                  className="border-b border-border px-3 py-2.5 text-xs font-semibold text-foreground"
                >
                  {row.feature}
                </th>
                <td className="border-b border-l border-border px-3 py-2.5 text-sm leading-snug text-foreground">
                  <Cell text={row.hybridisation} emphasis={row.emphasis} tone="plain" />
                </td>
                <td className="border-b border-l border-border px-3 py-2.5 text-sm leading-snug text-foreground">
                  <Cell text={row.engineering} emphasis={row.emphasis} tone="accent" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: one card per feature */}
      <div className="space-y-2 sm:hidden" role="list">
        {ROWS.map((row) => (
          <div key={row.feature} className="rounded-xl border border-border bg-card" role="listitem">
            <div className="border-b border-border bg-muted/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {row.feature}
            </div>
            <div className="divide-y divide-border">
              <div className="px-3 py-2">
                <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  Traditional hybridisation
                </div>
                <div className="mt-0.5 text-sm leading-snug text-foreground">
                  <Cell text={row.hybridisation} emphasis={row.emphasis} tone="plain" />
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
                  Genetic engineering
                </div>
                <div className="mt-0.5 text-sm leading-snug text-foreground">
                  <Cell text={row.engineering} emphasis={row.emphasis} tone="accent" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cell({ text, emphasis, tone }: { text: string; emphasis?: boolean; tone: "plain" | "accent" }) {
  if (!emphasis) return <>{text}</>;

  return (
    <span
      className={
        tone === "accent"
          ? "font-semibold text-indigo-900 dark:text-indigo-200"
          : "font-semibold text-foreground"
      }
    >
      {text}
    </span>
  );
}

export function HybridisationCrossing() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Traditional hybridisation — the crossing</div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Parent name="Large flower" trait="More thorns" />
        <Parent name="Small flower" trait="Fewer thorns" />
      </div>

      {/* converging connectors (desktop) */}
      <div className="hidden sm:block" aria-hidden>
        <svg viewBox="0 0 200 26" preserveAspectRatio="none" className="h-6 w-full text-border">
          <path d="M 50 0 V 10 Q 50 22 100 22" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 150 0 V 10 Q 150 22 100 22" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="flex justify-center py-1 text-muted-foreground sm:hidden" aria-hidden>
        <ArrowDown className="h-4 w-4" />
      </div>

      <div className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-center text-sm font-semibold tracking-tight text-foreground">
        Crossing
      </div>

      <div className="flex justify-center py-1 text-muted-foreground" aria-hidden>
        <ArrowDown className="h-4 w-4" />
      </div>

      <div className="rounded-lg border-2 border-foreground/25 bg-foreground/5 px-3 py-2.5">
        <div className="text-center text-sm font-semibold tracking-tight text-foreground">
          Desirable + Undesirable Characters
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-1.5">
          <span className="inline-flex items-center rounded-full border border-emerald-600/30 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
            Desirable
          </span>
          <span className="inline-flex items-center rounded-full border border-rose-600/30 bg-rose-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:bg-rose-950/30 dark:text-rose-300">
            Undesirable
          </span>
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Both characters travel together — the thorns come along with the large flower, which is the limitation genetic
        engineering removes.
      </figcaption>
    </figure>
  );
}

function Parent({ name, trait }: { name: string; trait: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/25 px-3 py-2">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Parent</div>
      <div className="mt-0.5 text-sm font-semibold leading-snug text-foreground">{name}</div>
      <div className="text-xs leading-snug text-muted-foreground">{trait}</div>
    </div>
  );
}
