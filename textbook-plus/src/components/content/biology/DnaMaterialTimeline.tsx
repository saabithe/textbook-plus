import type { ReactNode } from "react";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

type Phase = "discovery" | "location" | "identification";

const PHASE_STYLE: Record<
  Phase,
  { card: string; badge: string; accent: string; dot: string }
> = {
  discovery: {
    card: "border-emerald-500/30 bg-emerald-50/45 dark:bg-emerald-950/20",
    badge: "bg-emerald-600 text-white dark:bg-emerald-500",
    accent: "text-emerald-800 dark:text-emerald-200",
    dot: "bg-emerald-500",
  },
  location: {
    card: "border-blue-500/30 bg-blue-50/45 dark:bg-blue-950/20",
    badge: "bg-blue-600 text-white dark:bg-blue-500",
    accent: "text-blue-800 dark:text-blue-200",
    dot: "bg-blue-500",
  },
  identification: {
    card: "border-violet-500/30 bg-violet-50/45 dark:bg-violet-950/20",
    badge: "bg-violet-600 text-white dark:bg-violet-500",
    accent: "text-violet-800 dark:text-violet-200",
    dot: "bg-violet-500",
  },
};

const PHASE_LABEL: Record<Phase, string> = {
  discovery: "Discovery",
  location: "Location",
  identification: "Identification",
};

const PROGRESSION: { phase: Phase; label: string }[] = [
  { phase: "discovery", label: "Nuclein" },
  {
    phase: "location",
    label: "Hereditary material located on chromosomes",
  },
  {
    phase: "identification",
    label: "DNA identified as genetic material",
  },
];

interface Milestone {
  year: string;
  title: string;
  detail: ReactNode;
  phase: Phase;
}

const MILESTONES: Milestone[] = [
  {
    year: "1869",
    title: "Friedrich Miescher",
    detail: "Discovered an acidic substance in the nucleus. Named it Nuclein.",
    phase: "discovery",
  },
  {
    year: "1926",
    title: "The search for genetic material",
    detail:
      "Research had narrowed the location of hereditary material to chromosomes in the cell nucleus. Its precise molecular identity remained unknown.",
    phase: "location",
  },
  {
    year: "1928",
    title: "Frederick Griffith",
    detail: (
      <>
        Discovered the transforming principle through experiments on{" "}
        <em>Streptococcus pneumoniae</em>.
      </>
    ),
    phase: "identification",
  },
  {
    year: "1933–1944",
    title: "Avery, MacLeod and McCarty",
    detail:
      "Biochemically demonstrated that DNA was responsible for transformation.",
    phase: "identification",
  },
  {
    year: "1952",
    title: "Hershey and Chase",
    detail:
      "Provided strong experimental evidence that DNA, not protein, is the genetic material.",
    phase: "identification",
  },
];

function ProgressionStrip() {
  return (
    <div className="flex flex-wrap items-stretch gap-2 sm:flex-nowrap">
      {PROGRESSION.map((item, i) => {
        const style = PHASE_STYLE[item.phase];
        return (
          <div key={item.phase} className="flex min-w-0 flex-1 items-center gap-1.5">
            <div className={`min-w-0 flex-1 rounded-xl border px-3 py-2.5 ${style.card}`}>
              <div className={`${EYEBROW} ${style.accent}`}>
                {PHASE_LABEL[item.phase]}
              </div>
              <div className="mt-1 text-sm font-bold leading-snug text-foreground">
                {item.label}
              </div>
            </div>
            {i < PROGRESSION.length - 1 && (
              <span className="shrink-0 px-0.5 text-lg text-muted-foreground" aria-hidden>
                →
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function MilestoneRow({
  milestone,
  isLast,
}: {
  milestone: Milestone;
  isLast: boolean;
}) {
  const style = PHASE_STYLE[milestone.phase];
  return (
    <li className={`relative pl-10 sm:pl-12 ${isLast ? "" : "pb-5"}`}>
      <span
        className="absolute left-[7px] top-[6px] grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-border bg-card"
        aria-hidden
      >
        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      </span>
      {!isLast && (
        <span
          className="absolute bottom-0 left-[13px] top-[22px] w-px bg-border"
          aria-hidden
        />
      )}

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex rounded-md px-2 py-0.5 text-xs font-bold tabular-nums ${style.badge}`}
        >
          {milestone.year}
        </span>
        <span className={`${EYEBROW} ${style.accent}`}>
          {PHASE_LABEL[milestone.phase]}
        </span>
      </div>

      <div className={`rounded-xl border p-3.5 ${style.card}`}>
        <p className="text-sm font-bold leading-snug text-foreground">
          {milestone.title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-foreground/80">
          {milestone.detail}
        </p>
      </div>
    </li>
  );
}

/** Vertical scientific timeline: nuclein → location → DNA identified. */
export function DnaMaterialTimeline() {
  return (
    <section className="my-6 rounded-2xl border border-border bg-card p-4 sm:p-5">
      <div className={EYEBROW}>The search for genetic material</div>
      <div className="mt-1 text-sm font-bold tracking-tight text-foreground">
        Timeline of Major Discoveries
      </div>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        The discovery of DNA and identification of the genetic material took
        several decades.
      </p>

      <div className="mt-4">
        <ProgressionStrip />
      </div>

      <ol className="mt-6">
        {MILESTONES.map((milestone, i) => (
          <MilestoneRow
            key={milestone.year}
            milestone={milestone}
            isLast={i === MILESTONES.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}
