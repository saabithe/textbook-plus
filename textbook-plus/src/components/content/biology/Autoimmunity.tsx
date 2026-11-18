import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

/**
 * Autoimmunity — the self-tolerance failure block: the definition panel,
 * the three-node breakdown sequence, and the rheumatoid-arthritis example.
 *
 * amber = the definition, rose = the breakdown sequence,
 * indigo = the worked example.
 */

/* -------------------------------------------------------------------------- */
/* 1. Breakdown sequence                                                       */
/* -------------------------------------------------------------------------- */

function SequenceNode({ label }: { label: string }) {
  return (
    <div className="w-full rounded-lg border-2 border-rose-600/35 bg-rose-50/40 px-3 py-2 text-center dark:bg-rose-950/20 sm:w-auto sm:flex-1">
      <div className="text-[10.5px] font-bold leading-snug text-foreground">{label}</div>
    </div>
  );
}

function SequenceArrow() {
  return (
    <div className="flex h-5 w-full shrink-0 items-center justify-center sm:h-auto sm:w-7" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5 text-rose-600/70 dark:text-rose-400 sm:hidden" />
      <ArrowRight className="hidden h-4 w-4 text-rose-600/70 dark:text-rose-400 sm:block" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Section                                                                  */
/* -------------------------------------------------------------------------- */

export function AutoimmunitySection() {
  return (
    <div className="my-5 space-y-4">
      {/* Definition — bone / amber */}
      <div className="flex items-start gap-2.5 rounded-xl border-2 border-amber-700/35 bg-amber-50/50 p-4 dark:bg-amber-950/20">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-800 dark:text-amber-300" aria-hidden />
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-amber-900 dark:text-amber-300">
            Definition
          </div>
          <p className="mt-1 text-[10.5px] leading-snug text-foreground">
            <strong>Autoimmunity</strong> = A condition in which the immune system loses its ability to distinguish
            between <strong>self and non-self</strong> and attacks the body&apos;s own cells or tissues.
          </p>
          <p className="mt-1.5 border-t border-amber-700/20 pt-1.5 text-[10.5px] leading-snug text-foreground">
            Caused by a breakdown of <strong>self-tolerance</strong>.
          </p>
        </div>
      </div>

      {/* Breakdown sequence — rose / red */}
      <div className="rounded-xl border-2 border-rose-600/35 bg-rose-50/30 p-3.5 dark:bg-rose-950/15">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
          Sequence
        </div>
        <div className="mt-2 flex flex-col items-stretch sm:flex-row sm:items-center">
          <SequenceNode label="Loss of self-tolerance" />
          <SequenceArrow />
          <SequenceNode label="Immune attack on own tissues" />
          <SequenceArrow />
          <SequenceNode label="Autoimmune disease" />
        </div>
      </div>

      {/* Example — indigo */}
      <div className="rounded-xl border-2 border-indigo-600/35 bg-indigo-50/35 p-4 dark:bg-indigo-950/20">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
          Example
        </div>
        <div className="mt-0.5 text-sm font-bold tracking-tight text-foreground">Rheumatoid arthritis</div>
        <div className="mt-2 space-y-1">
          <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
            <span>
              An <strong>autoimmune disease</strong>.
            </span>
          </div>
          <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
            <span>
              Causes <strong>inflammation</strong> and damage to joints.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
