import { SignBadge } from "@/components/content/biology/InteractionSigns";

/**
 * CommensalismGallery — four relationship rows, not a generic card grid.
 * Every row keeps the same anatomy: illustration · the two species ·
 * Beneficiary (+) · Unaffected partner (0). The asymmetry is the point.
 */

interface CommensalismRow {
  title: string;
  beneficiary: string;
  benefit: string;
  partner: string;
  illustration: React.ReactNode;
}

const ROWS: CommensalismRow[] = [
  {
    title: "Epiphytic orchid on a mango branch",
    beneficiary: "Orchid",
    benefit: "Gets space",
    partner: "Mango tree",
    illustration: <OrchidGlyph />,
  },
  {
    title: "Barnacles on a whale’s back",
    beneficiary: "Barnacles",
    benefit: "Get transport and food",
    partner: "Whale",
    illustration: <WhaleGlyph />,
  },
  {
    title: "Cattle egrets and grazing cattle",
    beneficiary: "Egrets",
    benefit: "Catch insects flushed out by the cattle",
    partner: "Cattle",
    illustration: <EgretCattleGlyph />,
  },
  {
    title: "Clown fish and sea anemone",
    beneficiary: "Clown fish",
    benefit: "Gets protection among the stinging tentacles",
    partner: "Sea anemone",
    illustration: <AnemoneGlyph />,
  },
];

export function CommensalismGallery() {
  return (
    <div className="my-5 space-y-2" role="list">
      {ROWS.map((row) => (
        <div key={row.title} className="rounded-xl border border-border bg-card p-3" role="listitem">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/30 text-foreground/70">
              {row.illustration}
            </span>

            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                {row.title}
              </div>

              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex items-start gap-2 rounded-md border border-border border-l-2 border-l-emerald-500/50 bg-muted/20 px-2.5 py-2">
                  <SignBadge sign="+" size="sm" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                      Beneficiary
                    </div>
                    <div className="text-sm font-medium leading-snug text-foreground">{row.beneficiary}</div>
                    <div className="text-xs leading-snug text-muted-foreground">{row.benefit}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-md border border-border border-l-2 border-l-slate-400/60 bg-muted/20 px-2.5 py-2">
                  <SignBadge sign="0" size="sm" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                      Unaffected partner
                    </div>
                    <div className="text-sm font-medium leading-snug text-foreground">{row.partner}</div>
                    <div className="text-xs leading-snug text-muted-foreground">Neither helped nor harmed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const GLYPH = "h-7 w-7";

function OrchidGlyph() {
  return (
    <svg viewBox="0 0 48 48" className={GLYPH} aria-hidden>
      <line x1="4" y1="14" x2="44" y2="12" className="stroke-current" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="26" y1="13" x2="26" y2="22" className="stroke-current" strokeWidth="1.4" />
      <circle cx="26" cy="30" r="4.5" className="fill-none stroke-current" strokeWidth="1.6" />
      <ellipse cx="26" cy="21.5" rx="4" ry="3" className="fill-none stroke-current" strokeWidth="1.3" />
      <ellipse cx="17" cy="27" rx="4" ry="3" className="fill-none stroke-current" strokeWidth="1.3" transform="rotate(-35 17 27)" />
      <ellipse cx="35" cy="27" rx="4" ry="3" className="fill-none stroke-current" strokeWidth="1.3" transform="rotate(35 35 27)" />
      <ellipse cx="20" cy="36" rx="4" ry="3" className="fill-none stroke-current" strokeWidth="1.3" transform="rotate(35 20 36)" />
      <ellipse cx="32" cy="36" rx="4" ry="3" className="fill-none stroke-current" strokeWidth="1.3" transform="rotate(-35 32 36)" />
    </svg>
  );
}

function WhaleGlyph() {
  return (
    <svg viewBox="0 0 48 48" className={GLYPH} aria-hidden>
      <path
        d="M8 30 C 8 21, 18 17, 28 18 C 36 19, 41 23, 41 27 L 45 22 L 45 34 L 41 31 C 40 36, 32 39, 24 38 C 15 37, 8 35, 8 30 Z"
        className="fill-none stroke-current"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="22" r="1.6" className="fill-current" />
      <circle cx="24" cy="21" r="1.3" className="fill-current" />
      <circle cx="30" cy="22" r="1.3" className="fill-current" />
      <circle cx="21" cy="25" r="1.1" className="fill-current" />
      <circle cx="27" cy="25" r="1.1" className="fill-current" />
    </svg>
  );
}

function EgretCattleGlyph() {
  return (
    <svg viewBox="0 0 48 48" className={GLYPH} aria-hidden>
      {/* egret */}
      <ellipse cx="14" cy="16" rx="6" ry="4.5" className="fill-none stroke-current" strokeWidth="1.4" />
      <path d="M 8 15 L 3 13 L 8 18" className="fill-none stroke-current" strokeWidth="1.3" strokeLinejoin="round" />
      <line x1="13" y1="20" x2="12" y2="27" className="stroke-current" strokeWidth="1.2" />
      {/* cattle */}
      <path
        d="M12 38 C 12 31, 18 28, 27 28 C 36 28, 42 31, 42 37 L 42 41 L 38 41 L 38 37 L 32 37 L 32 41 L 28 41 L 28 37 L 20 37 L 20 41 L 16 41 L 16 37 Z"
        className="fill-none stroke-current"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M16 28 L 14 25 M 38 28 L 40 25" className="stroke-current" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function AnemoneGlyph() {
  return (
    <svg viewBox="0 0 48 48" className={GLYPH} aria-hidden>
      {/* anemone tentacles */}
      <path
        d="M10 42 C 8 34, 12 30, 14 26 M18 42 C 16 33, 20 28, 22 23 M26 42 C 25 33, 29 28, 31 24 M34 42 C 33 34, 37 30, 39 27"
        className="fill-none stroke-current"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <line x1="6" y1="42" x2="42" y2="42" className="stroke-current" strokeWidth="1.6" strokeLinecap="round" />
      {/* fish */}
      <ellipse cx="24" cy="15" rx="9" ry="5.5" className="fill-none stroke-current" strokeWidth="1.5" />
      <path d="M33 15 L 39 10 L 39 20 Z" className="fill-none stroke-current" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="18" cy="14" r="1.3" className="fill-current" />
      <line x1="21" y1="18" x2="27" y2="18" className="stroke-current" strokeWidth="1.1" />
    </svg>
  );
}
