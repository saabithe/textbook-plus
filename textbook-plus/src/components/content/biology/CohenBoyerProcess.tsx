import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * CohenBoyerProcess — the 1972 construction of the first recombinant DNA.
 *
 * Deliberately kept visually apart from the eight-step insulin sequence: a
 * different gene (antibiotic resistance, ABRG), a different purpose (proving
 * the technique), and a different shape — the milestone, then the detailed
 * five-step procedure, then one full-width flow.
 *
 * Blue (indigo) marks DNA manipulation; green (emerald) marks the cloning
 * outcome, as the brief asks.
 */

export function CohenBoyerMilestone() {
  return (
    <div className="my-5 grid grid-cols-1 gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-5">
      <div className="flex items-center gap-3 sm:block">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:text-center">
          Historical
          <br className="hidden sm:block" /> milestone
        </div>
        <div className="text-3xl font-bold tabular-nums leading-none tracking-tight text-foreground sm:mt-1 sm:text-center">
          1972
        </div>
      </div>

      <div className="min-w-0">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Pioneers</div>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {["Stanley Cohen", "Herbert Boyer"].map((name) => (
            <span
              key={name}
              className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2 py-0.5 text-sm font-semibold text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="mt-2 text-sm leading-relaxed text-foreground">
          They constructed the <strong className="font-semibold">first artificial recombinant DNA molecule</strong> in
          1972.
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- procedure */

interface ProcedureStep {
  n: string;
  title: string;
  lines: React.ReactNode[];
  note?: React.ReactNode;
  body: React.ReactNode;
}

const PROCEDURE: ProcedureStep[] = [
  {
    n: "1",
    title: "Isolation of antibiotic resistance gene",
    lines: [
      <>
        An antibiotic resistance gene was isolated from a native plasmid of <em>Salmonella typhimurium</em>.
      </>,
    ],
    note: (
      <>
        <span className="font-medium text-foreground">Plasmid</span> — autonomously replicating, circular,
        extra-chromosomal DNA.
      </>
    ),
    body: (
      <div className="flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-center sm:gap-2">
        <Node label="Source">
          Plasmid of <em>Salmonella typhimurium</em>
        </Node>
        <FlowArrow />
        <Node label="Isolated" accent="blue">
          ABRG
        </Node>
      </div>
    ),
  },
  {
    n: "2",
    title: "Cutting DNA",
    lines: [<>DNA was cut at specific locations using restriction enzymes.</>],
    body: (
      <div className="flex items-center gap-2.5 rounded-lg border border-border bg-muted/25 px-3 py-2">
        <span className="flex h-8 items-center justify-center rounded-md border-2 border-violet-600/35 bg-violet-50 px-2 text-sm font-bold text-violet-800 dark:bg-violet-950/30 dark:text-violet-200">
          RE
        </span>
        <div className="min-w-0">
          <div className="text-xs font-semibold text-foreground">Restriction enzymes</div>
          <div className="text-[10px] text-muted-foreground">Molecular scissors — cut at specific locations</div>
        </div>
      </div>
    ),
  },
  {
    n: "3",
    title: "Formation of recombinant DNA",
    lines: [<>The cut antibiotic resistance gene was linked to a plasmid vector.</>],
    body: (
      <div>
        <div className="grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[1fr_auto_1fr]">
          <Node label="Input">Cut ABRG</Node>
          <div className="text-center text-sm font-semibold text-muted-foreground" aria-hidden>
            +
          </div>
          <Node label="Input">Plasmid vector</Node>
        </div>
        <DownArrow label="DNA ligase" />
        <Node label="Product" accent="blue">
          Recombinant DNA
        </Node>
      </div>
    ),
  },
  {
    n: "4",
    title: "Transfer into host",
    lines: [
      <>
        Newly created <em>in vitro</em> recombinant DNA was transferred into <em>Escherichia coli</em> (
        <em>E. coli</em>).
      </>,
    ],
    note: (
      <>
        <em>E. coli</em> is closely related to <em>Salmonella</em>.
      </>
    ),
    body: (
      <div className="flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-center sm:gap-2">
        <Node label="Input" accent="blue">
          rDNA
        </Node>
        <FlowArrow />
        <div className="flex-1 rounded-lg border-2 border-dashed border-teal-600/40 bg-teal-50/40 px-2.5 py-1.5 dark:bg-teal-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
            Receiving host
          </div>
          <div className="text-sm font-medium leading-snug text-foreground">
            <em>E. coli</em>
          </div>
        </div>
      </div>
    ),
  },
  {
    n: "5",
    title: "Replication & cloning",
    lines: [<>Recombinant DNA replicated inside <em>E. coli</em>, using the host&rsquo;s DNA polymerase.</>],
    body: (
      <div className="rounded-lg border border-border bg-muted/25 px-3 py-2">
        <div className="flex items-center gap-2">
          <Node label="Starting point" className="flex-1">
            One recombinant DNA molecule
          </Node>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
          <div className="flex flex-1 flex-wrap justify-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="h-4 w-4 rounded-full border border-emerald-600/40 bg-emerald-50 dark:bg-emerald-950/30"
                aria-hidden
              />
            ))}
          </div>
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          <Tag tone="violet">DNA polymerase</Tag>
          <Tag tone="green">Cloning</Tag>
        </div>
      </div>
    ),
  },
];

export function CohenBoyerProcedure() {
  return (
    <div className="my-5 space-y-2" role="list">
      {PROCEDURE.map((step) => (
        <div key={step.n} className="rounded-xl border border-border bg-card p-3" role="listitem">
          <div className="flex items-start gap-2.5">
            <span className="mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40 text-[11px] font-bold tabular-nums text-muted-foreground">
              {step.n}
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold leading-snug text-foreground">{step.title}</div>

              <div className="mt-1 space-y-1">
                {step.lines.map((line, i) => (
                  <div key={i} className="text-xs leading-snug text-foreground">
                    {line}
                  </div>
                ))}
              </div>

              <div className="mt-2">{step.body}</div>

              {step.note && (
                <div className="mt-1.5 text-[11px] leading-snug text-muted-foreground">{step.note}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------- flow */

export function CohenBoyerFlow() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Complete process flow</div>

      <div className="mt-3">
        <FlowNode
          label="Source"
          tone="blue"
          title={
            <>
              Plasmid from <em>Salmonella typhimurium</em>
            </>
          }
          detail="Contains Antibiotic Resistance Gene (ABRG)"
        />
        <FlowStep label="Restriction enzymes · Molecular scissors" />
        <FlowNode
          label="Cut pieces"
          tone="blue"
          title="Isolated gene + cut vector plasmid"
        />
        <FlowStep label="DNA ligase · Molecular glue" />
        <FlowNode label="Joined" tone="blue" title="Recombinant DNA molecule" />
        <FlowStep label="Transferred into host bacteria" />
        <FlowNode
          label="Host"
          tone="teal"
          title={
            <>
              <em>Escherichia coli</em> (host cell)
            </>
          }
        />
        <FlowStep label="Replication via host's DNA polymerase" />
        <FlowNode
          label="Outcome"
          tone="green"
          title="Multiple copies of rDNA"
          detail="Cloning"
          strong
        />
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        One antibiotic resistance gene, one plasmid, one host — the experiment that produced the first artificial
        recombinant DNA molecule.
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ atoms */

function Node({
  label,
  accent,
  className,
  children,
}: {
  label: string;
  accent?: "blue";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "min-w-0 flex-1 rounded-lg border px-2.5 py-1.5",
        accent === "blue"
          ? "border-indigo-600/30 bg-indigo-50/50 dark:bg-indigo-950/25"
          : "border-border bg-muted/25",
        className,
      )}
    >
      <div
        className={cn(
          "text-[9px] font-semibold uppercase tracking-[0.08em]",
          accent === "blue" ? "text-indigo-800 dark:text-indigo-300" : "text-muted-foreground",
        )}
      >
        {label}
      </div>
      <div className="text-sm font-medium leading-snug text-foreground">{children}</div>
    </div>
  );
}

function Tag({ tone, children }: { tone: "violet" | "green"; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-1.5 py-px text-[10px] font-semibold",
        tone === "violet" && "border border-violet-600/30 bg-violet-50 text-violet-900 dark:bg-violet-950/30 dark:text-violet-300",
        tone === "green" &&
          "border border-emerald-600/30 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300",
      )}
    >
      {children}
    </span>
  );
}

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5 py-0.5 text-muted-foreground" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
      <span className="hidden sm:inline-flex sm:items-center sm:gap-1.5">
        <span className="h-px w-4 bg-current opacity-40" />
        {label && <span className="text-[9px] uppercase tracking-[0.08em]">{label}</span>}
        <span className="text-xs">→</span>
      </span>
      {label && <span className="text-[10px] sm:hidden">{label}</span>}
    </div>
  );
}

function DownArrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5 py-1 text-muted-foreground" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5" />
      {label && <span className="text-[9px] uppercase tracking-[0.08em]">{label}</span>}
    </div>
  );
}

function FlowNode({
  label,
  title,
  detail,
  tone,
  strong = false,
}: {
  label: string;
  title: React.ReactNode;
  detail?: string;
  tone: "blue" | "teal" | "green";
  strong?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border px-3 py-2",
        strong && "border-2",
        tone === "blue" && "border-indigo-600/30 bg-indigo-50/50 dark:bg-indigo-950/25",
        tone === "teal" && "border-dashed border-teal-600/40 bg-teal-50/40 dark:bg-teal-950/20",
        tone === "green" && "border-emerald-600/40 bg-emerald-50/50 dark:bg-emerald-950/25",
      )}
    >
      <div
        className={cn(
          "text-[9px] font-semibold uppercase tracking-[0.08em]",
          tone === "blue" && "text-indigo-800 dark:text-indigo-300",
          tone === "teal" && "text-teal-800 dark:text-teal-300",
          tone === "green" && "text-emerald-800 dark:text-emerald-300",
        )}
      >
        {label}
      </div>
      <div className="text-sm font-semibold leading-snug text-foreground">{title}</div>
      {detail && <div className="text-xs leading-snug text-muted-foreground">{detail}</div>}
    </div>
  );
}

function FlowStep({ label }: { label: string }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center py-1" aria-hidden>
      <span />
      <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />
      <span className="pl-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{label}</span>
    </div>
  );
}
