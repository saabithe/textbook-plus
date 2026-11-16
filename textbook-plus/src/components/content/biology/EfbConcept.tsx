import { ArrowDown } from "lucide-react";

/**
 * EfbConcept — the EFB definition as a full-width quotation, then the same
 * definition taken apart: two input blocks (natural science, biological
 * components) feeding integration, which produces products and services.
 *
 * The four biological components stay individually identifiable as chips.
 */

export function EfbQuoteCard() {
  return (
    <div className="my-6 rounded-2xl border border-border bg-muted/25 px-5 py-6 sm:px-8 sm:py-7">
      <div className="t-micro">European Federation of Biotechnology (EFB)</div>

      <div className="mt-3 text-lg leading-[1.6] text-foreground sm:text-xl">
        <span aria-hidden className="mr-0.5 align-top text-2xl leading-none text-muted-foreground">
          &ldquo;
        </span>
        The{" "}
        <span className="rounded-[4px] bg-indigo-100 px-1.5 py-0.5 font-semibold text-indigo-900 dark:bg-indigo-900/50 dark:text-indigo-100">
          integration
        </span>{" "}
        of{" "}
        <span className="rounded-[4px] bg-indigo-100 px-1.5 py-0.5 font-semibold text-indigo-900 dark:bg-indigo-900/50 dark:text-indigo-100">
          natural science
        </span>{" "}
        and organisms, cells, parts thereof, and molecular analogues for{" "}
        <span className="rounded-[4px] bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-900 dark:bg-amber-900/50 dark:text-amber-100">
          products and services
        </span>
        .
        <span aria-hidden className="ml-0.5 align-top text-2xl leading-none text-muted-foreground">
          &rdquo;
        </span>
      </div>
    </div>
  );
}

export function EfbConceptFlow() {
  return (
    <div className="my-6 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">The definition as a flow</div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <InputBlock title="Natural science" accent="indigo">
          <Chip>DNA</Chip>
          <Chip>RNA</Chip>
        </InputBlock>

        <InputBlock title="Biological components" accent="teal">
          <Chip>Organisms</Chip>
          <Chip>Cells</Chip>
          <Chip>Parts thereof</Chip>
          <Chip>Molecular analogues (MA)</Chip>
        </InputBlock>
      </div>

      <Step />

      <div className="rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-center text-sm font-semibold tracking-tight text-foreground">
        Integration
      </div>

      <Step />

      <div className="rounded-lg border-2 border-foreground/25 bg-foreground/5 px-3 py-2.5 text-center text-sm font-semibold tracking-tight text-foreground">
        Products &amp; services
      </div>
    </div>
  );
}

function InputBlock({
  title,
  accent,
  children,
}: {
  title: string;
  accent: "indigo" | "teal";
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-muted/20 px-3 py-2.5">
      <div
        className={
          accent === "indigo"
            ? "text-[10px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300"
            : "text-[10px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300"
        }
      >
        {title}
      </div>
      <div className="mt-1.5 flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-card px-2 py-0.5 text-xs font-medium text-foreground">
      {children}
    </span>
  );
}

function Step() {
  return (
    <div className="flex justify-center py-1.5 text-muted-foreground" aria-hidden>
      <ArrowDown className="h-4 w-4" />
    </div>
  );
}
