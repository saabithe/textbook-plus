/*
 * VectorChapterHeader — chapter strip for NCERT Class 12 Mathematics,
 * Chapter 10 (Vector Algebra). Purely presentational: no hooks, no client
 * directive, no external libraries. The small coordinate sketch is decorative
 * only; its strokes inherit theme tokens, with the mathematics subject colour
 * reserved for the single directed vector.
 */

const ACCENT = "var(--subject-mathematics)";

/** Decorative x/y/z axes from O with one accent vector arrow. */
function VectorAxesSketch() {
  return (
    <svg viewBox="0 0 120 100" className="w-full h-auto" fill="none">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="44" y1="74" x2="102" y2="90" />
        <polyline points="95.5,90.9 102,90 96.9,85.9" />
        <line x1="44" y1="74" x2="92" y2="46" />
        <polyline points="88.1,51.2 92,46 85.5,46.8" />
        <line x1="44" y1="74" x2="44" y2="14" />
        <polyline points="41.5,20 44,14 46.5,20" />
      </g>
      <g stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="44" y1="74" x2="84" y2="32" />
        <polyline points="80.7,39.9 84,32 76.3,35.7" />
      </g>
      <circle cx="84" cy="32" r="2.6" fill={ACCENT} />
      <circle cx="44" cy="74" r="2" fill="currentColor" />
      <g fill="currentColor" fontSize="8">
        <text x="105" y="96">x</text>
        <text x="96" y="43">y</text>
        <text x="38" y="13">z</text>
        <text x="31" y="80">O</text>
      </g>
    </svg>
  );
}

/** Vector Algebra chapter header: number, title, subtitle and a faint sketch. */
export function VectorChapterHeader() {
  return (
    <header className="rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Mathematics · Chapter
        </span>
        <span
          className="text-xs font-extrabold uppercase tracking-[0.14em]"
          style={{ color: ACCENT }}
        >
          10
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-5">
        <div className="min-w-0">
          <h2 className="text-sm font-extrabold tracking-tight text-foreground">
            Vector Algebra
          </h2>
          <p className="mt-1 text-[0.8rem] leading-relaxed text-muted-foreground">
            Basic Vector Concepts &amp; Types of Vectors
          </p>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none hidden w-24 shrink-0 text-muted-foreground opacity-40 sm:block sm:w-28"
        >
          <VectorAxesSketch />
        </div>
      </div>
    </header>
  );
}
