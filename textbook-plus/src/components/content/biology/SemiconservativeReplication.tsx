import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Callout } from "@/components/content/Callout";
import { Stepper } from "@/components/content/Stepper";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

type StrandKind = "parental" | "new";

/** One hue per strand type; kept on SVG elements so both themes stay legible. */
const STRAND_STROKE: Record<StrandKind, string> = {
  parental: "stroke-indigo-600 dark:stroke-indigo-400",
  new: "stroke-emerald-600 dark:stroke-emerald-400",
};

const STRAND_SWATCH: Record<StrandKind, string> = {
  parental: "bg-indigo-600 dark:bg-indigo-400",
  new: "bg-emerald-600 dark:bg-emerald-400",
};

interface ProcessStep {
  label: ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  { label: "The two parental DNA strands separate." },
  {
    label: (
      <>
        Each parental strand acts as a <strong>template</strong>.
      </>
    ),
  },
  { label: "A new complementary strand is synthesised using each template." },
  { label: "Two daughter DNA molecules are formed." },
];

interface DuplexSvgProps {
  left: StrandKind;
  right: StrandKind;
  label: string;
}

function DuplexSvg({ left, right, label }: DuplexSvgProps) {
  return (
    <svg viewBox="0 0 112 72" className="mx-auto h-14 w-auto" role="img" aria-label={label}>
      <line
        x1="38"
        y1="8"
        x2="38"
        y2="64"
        strokeWidth="3"
        strokeLinecap="round"
        className={STRAND_STROKE[left]}
      />
      <line
        x1="74"
        y1="8"
        x2="74"
        y2="64"
        strokeWidth="3"
        strokeLinecap="round"
        className={STRAND_STROKE[right]}
      />
      {[18, 30, 42, 54].map((y) => (
        <line key={y} x1="38" y1={y} x2="74" y2={y} strokeWidth="1.5" className="stroke-border" />
      ))}
    </svg>
  );
}

function SeparationSvg() {
  return (
    <svg
      viewBox="0 0 112 60"
      className="mx-auto h-12 w-auto"
      role="img"
      aria-label="The two parental DNA strands separating"
    >
      <line
        x1="46"
        y1="8"
        x2="30"
        y2="52"
        strokeWidth="3"
        strokeLinecap="round"
        className={STRAND_STROKE.parental}
      />
      <line
        x1="66"
        y1="8"
        x2="82"
        y2="52"
        strokeWidth="3"
        strokeLinecap="round"
        className={STRAND_STROKE.parental}
      />
      <line x1="44" y1="22" x2="68" y2="22" strokeWidth="1.5" strokeDasharray="3 3" className="stroke-border" />
      <line x1="38" y1="40" x2="74" y2="40" strokeWidth="1.5" strokeDasharray="3 3" className="stroke-border" />
    </svg>
  );
}

interface StageProps {
  label: string;
  caption: string;
  children: ReactNode;
}

function Stage({ label, caption, children }: StageProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-3.5 text-center">
      <div className={EYEBROW}>{label}</div>
      <div className="mt-2">{children}</div>
      <div className="mt-1.5 text-xs leading-snug text-muted-foreground">{caption}</div>
    </div>
  );
}

export function SemiconservativeReplication() {
  return (
    <section className="my-8 space-y-6">
      <div>
        <div className={EYEBROW}>1.1 Watson and Crick&apos;s hypothesis</div>
        <Callout type="note">
          While proposing the DNA double-helix model in 1953, <strong>Watson and Crick</strong> suggested a possible
          mechanism for DNA duplication.
        </Callout>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4">
        <div className={EYEBROW}>1.2 Semiconservative mechanism</div>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          <strong>Semiconservative replication</strong> — each newly formed DNA molecule contains:
        </p>
        <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li>
            <strong>One parental strand</strong> (old strand).
          </li>
          <li>
            <strong>One newly synthesised complementary strand</strong>.
          </li>
        </ul>
      </div>

      <div>
        <div className={EYEBROW}>Process</div>
        <Stepper steps={PROCESS_STEPS} />
      </div>

      <figure className="my-6 rounded-2xl border border-border bg-card p-4">
        <div className="text-sm font-bold tracking-tight text-foreground">Semiconservative DNA replication</div>

        <div className="mt-4 space-y-2">
          <Stage label="Parent DNA" caption="Two original strands">
            <DuplexSvg left="parental" right="parental" label="Parent DNA — two original parental strands" />
          </Stage>

          <div className="flex flex-col items-center gap-1.5 py-1">
            <SeparationSvg />
            <div className={EYEBROW}>Separation of parental strands</div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Stage label="Template 1" caption="New complementary strand">
              <DuplexSvg
                left="parental"
                right="new"
                label="Template 1 paired with its newly synthesised complementary strand"
              />
            </Stage>
            <Stage label="Template 2" caption="New complementary strand">
              <DuplexSvg
                left="parental"
                right="new"
                label="Template 2 paired with its newly synthesised complementary strand"
              />
            </Stage>
          </div>

          <div className="flex justify-center py-0.5 text-muted-foreground" aria-hidden>
            ↓
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Stage label="Daughter DNA 1" caption="1 old + 1 new">
              <DuplexSvg
                left="parental"
                right="new"
                label="Daughter DNA 1 — one old parental strand and one new strand"
              />
            </Stage>
            <Stage label="Daughter DNA 2" caption="1 old + 1 new">
              <DuplexSvg
                left="parental"
                right="new"
                label="Daughter DNA 2 — one old parental strand and one new strand"
              />
            </Stage>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-3">
          <div className="flex items-center gap-2 text-xs text-foreground">
            <span className={cn("h-1 w-5 rounded-full", STRAND_SWATCH.parental)} aria-hidden />
            Parental strand (old)
          </div>
          <div className="flex items-center gap-2 text-xs text-foreground">
            <span className={cn("h-1 w-5 rounded-full", STRAND_SWATCH.new)} aria-hidden />
            Newly synthesised strand
          </div>
        </div>
      </figure>
    </section>
  );
}
