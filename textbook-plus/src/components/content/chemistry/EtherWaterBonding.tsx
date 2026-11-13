import type { ReactNode } from "react";

interface EtherWaterBondingProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Label under the ether molecule. */
  etherLabel?: ReactNode;
  /** Label under the water molecule. */
  waterLabel?: ReactNode;
  /** Line printed under the diagram. */
  note?: ReactNode;
}

/**
 * EtherWaterBonding — the ether–water hydrogen bond drawn with both partners
 * labelled: the ether oxygen on the left, the water hydrogen on the right, the
 * dashed bond between them. Labels sit under the molecule they describe, so the
 * diagram is readable without a caption.
 */
export function EtherWaterBonding({
  title,
  etherLabel = "Ether oxygen",
  waterLabel = "Water hydrogen",
  note,
}: EtherWaterBondingProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)]">
      <div className="border-b border-[color-mix(in_oklab,var(--subject-chemistry)_22%,transparent)] px-4 py-3">
        <span className="t-micro">{title ?? "Hydrogen bonding with water"}</span>
      </div>

      <div className="px-3 py-4 sm:px-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 rounded-md border border-border/70 bg-card px-2 py-4 sm:gap-x-4">
          <div className="min-w-0 text-center">
            <p className="text-[1.1rem] font-extrabold leading-none tracking-tight text-foreground">
              <em>R</em>—<span className="inline-flex flex-col items-center align-middle leading-none"><span aria-hidden className="text-[0.5em] tracking-[0.18em] text-[var(--subject-chemistry)]">••</span><span className="text-[var(--subject-chemistry)]">O</span></span>—<em>R</em>′
            </p>
            <p className="mt-2 text-[0.58rem] font-extrabold uppercase leading-none tracking-[0.1em] text-muted-foreground">
              {etherLabel}
            </p>
          </div>

          <div className="flex flex-col items-center self-center">
            <span
              aria-hidden
              className="w-9 border-t-2 border-dashed border-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)] sm:w-14"
            />
            <span className="mt-1 text-[0.52rem] font-extrabold uppercase leading-none tracking-[0.1em] text-[var(--subject-chemistry)]">
              H-bond
            </span>
          </div>

          <div className="min-w-0 text-center">
            <p className="text-[1.1rem] font-extrabold leading-none tracking-tight text-foreground">
              <span className="text-[var(--subject-chemistry)]">H</span>—O—H
            </p>
            <p className="mt-2 text-[0.58rem] font-extrabold uppercase leading-none tracking-[0.1em] text-muted-foreground">
              {waterLabel}
            </p>
          </div>
        </div>

        {note && (
          <p className="mt-2.5 text-sm leading-relaxed text-foreground/85">{note}</p>
        )}
      </div>
    </section>
  );
}
