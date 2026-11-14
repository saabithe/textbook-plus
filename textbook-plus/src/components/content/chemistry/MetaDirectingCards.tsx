import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";

export interface MetaDirectingCard {
  /** Reaction name, e.g. "Nitration". */
  title: ReactNode;
  /** Reagent line, when the source gives one. */
  reagent?: ReactNode;
  /** KaTeX for the ring substitution. */
  equation: string;
  /** The named product. */
  product: ReactNode;
  /** Group drawn at the meta position, e.g. "NO₂". */
  substituent: string;
}

interface MetaDirectingCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The directing group, e.g. "–CHO". */
  group: ReactNode;
  /** What the group directs, e.g. "Meta-directing". */
  effect: ReactNode;
  cards: MetaDirectingCard[];
}

/** Benzene ring with –CHO at position 1 and the incoming group at position 3. */
function MetaRing({ substituent }: { substituent: string }) {
  return (
    <svg
      viewBox="0 0 170 118"
      role="img"
      aria-label={`Benzene ring with CHO at position 1 and ${substituent} at the meta position`}
      className="h-auto w-28 shrink-0 text-foreground"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.3}>
        <polygon points="62,38 84.5,51 84.5,77 62,90 39.5,77 39.5,51" />
        <circle cx="62" cy="64" r="17" opacity={0.45} />
        <line x1="62" y1="38" x2="62" y2="22" />
        <line x1="84.5" y1="77" x2="103" y2="87" />
      </g>

      <text
        x="62"
        y="18"
        textAnchor="middle"
        fontSize={9}
        fontWeight={700}
        fill="currentColor"
      >
        CHO
      </text>
      <text
        x="106"
        y="92"
        textAnchor="start"
        fontSize={9}
        fontWeight={700}
        fill="currentColor"
      >
        {substituent}
      </text>
      <text
        x="52"
        y="30"
        textAnchor="middle"
        fontSize={6.5}
        fontWeight={700}
        fill="currentColor"
        opacity={0.55}
      >
        1
      </text>
      <text
        x="88"
        y="72"
        textAnchor="middle"
        fontSize={6.5}
        fontWeight={700}
        fill="currentColor"
        opacity={0.55}
      >
        3
      </text>
    </svg>
  );
}

/**
 * MetaDirectingCards — the –CHO group named as a meta director, then the two
 * ring reactions side by side, each drawn on the same benzene template with the
 * incoming group at position 3. The shared ring makes "meta" a position on the
 * page rather than a word to remember.
 */
export function MetaDirectingCards({
  title,
  group,
  effect,
  cards,
}: MetaDirectingCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Electrophilic substitution"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          Directing group effect
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_40%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)] px-3 py-2.5">
          <span className="flex items-baseline gap-2">
            <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Carbonyl group
            </span>
            <span className="text-[0.95rem] font-extrabold leading-none text-foreground">
              {group}
            </span>
          </span>
          <p className="text-[1rem] font-extrabold leading-none tracking-tight text-[var(--subject-chemistry)]">
            {effect}
          </p>
        </div>

        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {cards.map((card, index) => (
            <article
              key={index}
              className="flex min-w-0 flex-col overflow-hidden rounded-md border border-border/70 bg-card"
            >
              <div className="flex items-baseline justify-between gap-2 border-b border-border/70 px-2.5 py-2">
                <p className="text-[0.82rem] font-extrabold leading-snug text-foreground">
                  {card.title}
                </p>
                <span className="shrink-0 rounded-[3px] bg-muted px-1.5 py-0.5 text-[0.58rem] font-extrabold uppercase tracking-[0.05em] text-muted-foreground">
                  meta
                </span>
              </div>

              <div className="flex items-start gap-2 px-2.5 py-2.5">
                <MetaRing substituent={card.substituent} />

                <div className="min-w-0 flex-1">
                  {card.reagent && (
                    <>
                      <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                        Reagents
                      </p>
                      <p className="mt-0.5 text-[0.78rem] font-bold leading-snug text-foreground/90">
                        {card.reagent}
                      </p>
                    </>
                  )}

                  <div className="mt-1.5 flex items-baseline gap-1.5">
                    <ArrowRight
                      aria-hidden
                      className="h-3 w-3 shrink-0 text-muted-foreground"
                      strokeWidth={2.5}
                    />
                    <p className="min-w-0 text-[0.78rem] font-extrabold leading-snug text-foreground">
                      {card.product}
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto border-t border-border/70 bg-muted/20 px-2 py-2 text-center text-foreground">
                <Formula>{card.equation}</Formula>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
