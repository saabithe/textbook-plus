import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface GreekPosition {
  /** The position marker, e.g. "α" or "β′". */
  symbol: ReactNode;
  /** Line under the marker, only worth printing on the highlighted cell. */
  note?: ReactNode;
  /** Tints the cell as the one the rule singles out. */
  highlight?: boolean;
}

interface GreekPositionLadderProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The carbon the markers are counted from, e.g. "CHO" or ">C=O". */
  anchor: ReactNode;
  /** Caption under the anchor. */
  anchorNote?: ReactNode;
  /** Markers left of the anchor, nearest last. */
  left?: GreekPosition[];
  /** Markers right of the anchor, nearest first. */
  right: GreekPosition[];
  /** Line printed under the rail. */
  note?: ReactNode;
}

function Cell({ position }: { position: GreekPosition }) {
  const highlight = position.highlight === true;

  return (
    <div
      className={cn(
        "flex w-[3.4rem] shrink-0 flex-col items-center justify-center rounded-md border px-1 py-2 text-center",
        highlight
          ? "border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)]"
          : "border-border/70 bg-muted/20",
      )}
    >
      <span
        className={cn(
          "text-base font-extrabold leading-none",
          highlight ? "text-[var(--subject-chemistry)]" : "text-foreground",
        )}
      >
        {position.symbol}
      </span>
      {position.note && (
        <span className="mt-1 text-[0.5rem] font-bold uppercase leading-tight tracking-[0.04em] text-muted-foreground">
          {position.note}
        </span>
      )}
    </div>
  );
}

/**
 * GreekPositionLadder — the Greek locant system drawn as a chain: one anchor
 * carbon with the markers counted outwards from it. Aldehydes read only to the
 * right of –CHO; ketones read outwards on both sides, which is why the anchor
 * sits in the middle and the primes fall on the far side.
 */
export function GreekPositionLadder({
  title,
  anchor,
  anchorNote,
  left,
  right,
  note,
}: GreekPositionLadderProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Greek-letter positions"}</span>
      </div>

      <div className="overflow-x-auto px-3 py-4 sm:px-4">
        <div className="mx-auto flex w-max items-stretch">
          {(left ?? []).map((position, index) => (
            <div key={`left-${index}`} className="flex items-stretch">
              <Cell position={position} />
              <span aria-hidden className="my-auto h-px w-2.5 shrink-0 bg-border" />
            </div>
          ))}

          <div className="flex w-[3.4rem] shrink-0 flex-col items-center justify-center rounded-md border border-border bg-card px-1 py-2 text-center">
            <span className="whitespace-nowrap text-sm font-extrabold leading-none tracking-tight text-foreground">
              {anchor}
            </span>
            {anchorNote && (
              <span className="mt-1 text-[0.5rem] font-bold uppercase leading-tight tracking-[0.04em] text-muted-foreground">
                {anchorNote}
              </span>
            )}
          </div>

          {right.map((position, index) => (
            <div key={`right-${index}`} className="flex items-stretch">
              <span aria-hidden className="my-auto h-px w-2.5 shrink-0 bg-border" />
              <Cell position={position} />
            </div>
          ))}
        </div>
      </div>

      {note && (
        <p className="border-t border-border px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
          {note}
        </p>
      )}
    </section>
  );
}
