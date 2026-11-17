import { ArrowDown, ArrowRight, Landmark, Leaf, ShieldAlert, Sprout } from "lucide-react";

/**
 * EthicalIssues — regulation, GEAC, biopiracy and the two Indian patent cases.
 *
 * indigo = governance and law, amber = risk or patent claim, rose = biopiracy,
 * teal = biodiversity and traditional knowledge, emerald = the protected side.
 */

const INK = "var(--foreground)";

function BranchSplit() {
  return (
    <>
      <div className="flex justify-center py-0.5 sm:hidden" aria-hidden>
        <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
      <svg viewBox="0 0 400 32" className="hidden h-8 w-full sm:block" aria-hidden preserveAspectRatio="none">
        <path
          d="M200 0 V11 M200 11 H100 V32 M200 11 H300 V32"
          fill="none"
          stroke={INK}
          strokeOpacity={0.28}
          strokeWidth={1.2}
        />
      </svg>
    </>
  );
}

export function RegulationCard() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <Landmark className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Need for regulation
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-lg border border-amber-600/35 bg-amber-50/45 px-3 py-2.5 dark:bg-amber-950/20">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
            Risk
          </div>
          <div className="mt-0.5 text-[11px] leading-relaxed text-foreground">
            Genetic modification can produce unpredictable results when modified organisms are released into
            ecosystems.
          </div>
        </div>

        <div className="flex items-center justify-center text-muted-foreground" aria-hidden>
          <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
          <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
        </div>

        <div className="rounded-lg border border-indigo-600/35 bg-indigo-50/45 px-3 py-2.5 text-center dark:bg-indigo-950/20">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
            Response
          </div>
          <div className="mt-0.5 text-[11px] font-semibold leading-relaxed text-foreground">
            Regulation is required to evaluate research and safety.
          </div>
        </div>
      </div>

      <div className="mt-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Regulatory body
      </div>

      <div className="mx-auto mt-1.5 max-w-md">
        <div className="rounded-lg border-2 border-indigo-600/40 bg-indigo-50/50 px-3 py-2 text-center dark:bg-indigo-950/25">
          <div className="text-xs font-bold tracking-tight text-foreground">GEAC</div>
          <div className="text-[10.5px] font-semibold text-foreground">Genetic Engineering Approval Committee</div>
          <div className="mt-1 inline-flex rounded border border-indigo-700/30 bg-card px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.06em] text-indigo-800 dark:text-indigo-300">
            Established by the Indian Government
          </div>
        </div>

        <BranchSplit />

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-indigo-600/30 bg-card px-2.5 py-2">
            <div className="flex items-center gap-1.5">
              <span className="grid h-4 w-4 place-items-center rounded-full border border-indigo-600/35 text-[8.5px] font-bold text-indigo-800 dark:text-indigo-300">
                1
              </span>
              <span className="text-[8.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
                Responsibility
              </span>
            </div>
            <div className="mt-1 text-[11px] font-semibold leading-snug text-foreground">
              Validity of GM research
            </div>
          </div>

          <div className="rounded-lg border border-indigo-600/30 bg-card px-2.5 py-2">
            <div className="flex items-center gap-1.5">
              <span className="grid h-4 w-4 place-items-center rounded-full border border-indigo-600/35 text-[8.5px] font-bold text-indigo-800 dark:text-indigo-300">
                2
              </span>
              <span className="text-[8.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
                Responsibility
              </span>
            </div>
            <div className="mt-1 text-[11px] font-semibold leading-snug text-foreground">
              Safety of introducing GM organisms for public services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BiopiracyDefinitionCard() {
  return (
    <div className="my-5 rounded-xl border-2 border-rose-600/35 bg-rose-50/40 p-4 dark:bg-rose-950/20">
      <div className="flex items-center gap-2">
        <ShieldAlert className="h-3.5 w-3.5 text-rose-800 dark:text-rose-300" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
          Definition
        </div>
      </div>

      <div className="mt-1 text-base font-bold tracking-tight text-foreground">Biopiracy</div>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground">
        Use of bio-resources by multinational companies or other organisations:
      </div>

      <div className="mt-2 space-y-1.5">
        <div className="flex gap-2 rounded-md border border-rose-700/25 bg-card px-2.5 py-1.5 text-[11.5px] leading-snug text-foreground">
          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-rose-600/40 text-[8.5px] font-bold text-rose-800 dark:text-rose-300">
            1
          </span>
          <span>Without proper authorisation from the countries and people concerned.</span>
        </div>
        <div className="flex gap-2 rounded-md border border-rose-700/25 bg-card px-2.5 py-1.5 text-[11.5px] leading-snug text-foreground">
          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-rose-600/40 text-[8.5px] font-bold text-rose-800 dark:text-rose-300">
            2
          </span>
          <span>Without compensatory payment.</span>
        </div>
      </div>
    </div>
  );
}

export function GlobalImbalance() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Global imbalance
      </div>

      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="rounded-lg border border-indigo-600/35 bg-indigo-50/40 p-3 dark:bg-indigo-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
            Industrialised nations
          </div>
          <div className="mt-1.5 space-y-1">
            <div className="flex gap-2 text-[11px] leading-snug text-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
              <span>Financially rich</span>
            </div>
            <div className="flex gap-2 text-[11px] leading-snug text-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
              <span>Poor in biodiversity and traditional knowledge</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-teal-600/35 bg-teal-50/45 p-3 dark:bg-teal-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
            Developing / underdeveloped nations
          </div>
          <div className="mt-1.5 space-y-1">
            <div className="flex gap-2 text-[11px] leading-snug text-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-600/60" aria-hidden />
              <span>Possess immense biodiversity</span>
            </div>
            <div className="flex gap-2 text-[11px] leading-snug text-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-600/60" aria-hidden />
              <span>Rich in traditional knowledge related to bio-resources</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepArrow() {
  return (
    <div className="flex items-center justify-center py-0.5 sm:px-1" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5 text-muted-foreground sm:hidden" />
      <ArrowRight className="hidden h-3.5 w-3.5 text-muted-foreground sm:block" />
    </div>
  );
}

function Stat({
  value,
  sub,
  label,
  tone = "plain",
}: {
  value: string;
  sub?: string;
  label: string;
  tone?: "plain" | "amber";
}) {
  return (
    <div
      className={
        tone === "amber"
          ? "flex-1 rounded-lg border border-amber-600/40 bg-amber-50/50 px-2.5 py-2 dark:bg-amber-950/20"
          : "flex-1 rounded-lg border border-border bg-muted/25 px-2.5 py-2"
      }
    >
      <div className="text-xl font-bold leading-none tracking-tight text-foreground">{value}</div>
      {sub && <div className="mt-0.5 text-[9px] font-medium text-muted-foreground">{sub}</div>}
      <div className="mt-1 text-[10.5px] leading-snug text-foreground/80">{label}</div>
    </div>
  );
}

export function BasmatiCaseStudy() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
            A. Basmati rice
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Patent case study</div>
        </div>
        <div className="text-[10px] text-muted-foreground">India → US Patent and Trademark Office</div>
      </div>

      <div className="mt-2.5 flex flex-col sm:flex-row sm:items-stretch">
        <Stat value="2 lakh" sub="200,000" label="estimated varieties of rice in India" />
        <StepArrow />
        <Stat value="27" label="documented Basmati varieties grown in India" />
        <StepArrow />
        <Stat
          value="1997"
          label="An American company obtains patent rights through the US Patent and Trademark Office"
          tone="amber"
        />
      </div>

      <div className="mt-2 rounded-lg border border-amber-600/35 bg-amber-50/45 px-3 py-2 dark:bg-amber-950/20">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
          The claim
        </div>
        <div className="mt-0.5 text-[11px] leading-relaxed text-foreground">
          Indian Basmati was crossed with semi-dwarf varieties and claimed as an invention or novelty.
        </div>
      </div>
    </figure>
  );
}

export function TraditionalHerbalResources() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        B. Traditional herbal medicines
      </div>
      <div className="mt-0.5 text-[11px] text-foreground/70">
        Examples of Indian bio-resources and traditional knowledge
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-amber-600/35 bg-amber-50/45 px-3 py-3 text-center dark:bg-amber-950/20">
          <Sprout className="mx-auto h-6 w-6 text-amber-700 dark:text-amber-300" aria-hidden />
          <div className="mt-1 text-xs font-bold tracking-tight text-foreground">Turmeric</div>
        </div>
        <div className="rounded-lg border border-teal-600/35 bg-teal-50/45 px-3 py-3 text-center dark:bg-teal-950/20">
          <Leaf className="mx-auto h-6 w-6 text-teal-700 dark:text-teal-300" aria-hidden />
          <div className="mt-1 text-xs font-bold tracking-tight text-foreground">Neem</div>
        </div>
      </div>
    </div>
  );
}

export function IndianPatentsBill() {
  return (
    <div className="my-5 rounded-xl border-l-[3px] border-indigo-600/60 bg-indigo-50/40 px-4 py-3 dark:bg-indigo-950/20">
      <div className="flex items-center gap-2">
        <Landmark className="h-3.5 w-3.5 text-indigo-800 dark:text-indigo-300" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
          Policy note
        </div>
      </div>
      <div className="mt-1 text-xs leading-relaxed text-foreground">
        The Indian Parliament cleared the second amendment of the <strong>Indian Patents Bill</strong>.
      </div>
    </div>
  );
}
