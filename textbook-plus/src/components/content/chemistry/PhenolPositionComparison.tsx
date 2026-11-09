interface PhenolPosition {
  prefix: string;
  name: string;
  locants: string;
  /** Ring vertex of the second substituent: 2 = ortho, 3 = meta, 4 = para. */
  position: 2 | 3 | 4;
}

interface PhenolPositionComparisonProps {
  positions: PhenolPosition[];
}

const VERTEX: Record<number, [number, number]> = {
  1: [24, 8],
  2: [37.86, 16],
  3: [37.86, 32],
  4: [24, 40],
  5: [10.14, 32],
  6: [10.14, 16],
};

function PositionRing({ position }: { position: 2 | 3 | 4 }) {
  const target = VERTEX[position];

  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      className="h-16 w-16 text-foreground/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    >
      <polygon points="24,8 37.86,16 37.86,32 24,40 10.14,32 10.14,16" />
      <circle cx="24" cy="24" r="10" strokeWidth="1.1" opacity="0.45" />

      <circle cx={VERTEX[1][0]} cy={VERTEX[1][1]} r="4.4" fill="currentColor" stroke="none" className="text-[var(--subject-chemistry)]" />
      <text x={VERTEX[1][0]} y={VERTEX[1][1] + 1.6} textAnchor="middle" fontSize="5.4" fontWeight="800" fill="white" stroke="none">
        1
      </text>

      <circle cx={target[0]} cy={target[1]} r="4.4" fill="currentColor" stroke="none" className="text-warning" />
      <text x={target[0]} y={target[1] + 1.6} textAnchor="middle" fontSize="5.4" fontWeight="800" fill="white" stroke="none">
        {position}
      </text>
    </svg>
  );
}

/**
 * PhenolPositionComparison — ortho, meta and para as three cards. The position
 * pair is the largest element, and the ring marks both the –OH carbon (1) and
 * the substituent carbon (2, 3 or 4).
 */
export function PhenolPositionComparison({ positions }: PhenolPositionComparisonProps) {
  return (
    <div className="my-6">
      <div className="grid gap-3 sm:grid-cols-3">
        {positions.map((item) => (
          <article
            key={item.prefix}
            className="flex h-full flex-col items-center rounded-lg border border-border bg-card p-4 text-center"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold italic text-[var(--subject-chemistry)]">
                {item.prefix}
              </span>
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                {item.name}
              </span>
            </div>

            <p className="mt-1 text-2xl font-extrabold tabular-nums tracking-tight text-foreground">
              {item.locants}
            </p>

            <div className="mt-2 flex justify-center">
              <PositionRing position={item.position} />
            </div>

            <p className="mt-1 text-[0.7rem] text-muted-foreground">
              1 = –OH · {item.position} = substituent
            </p>
          </article>
        ))}
      </div>

      <p className="mt-2 text-[0.72rem] text-muted-foreground">
        <span className="font-bold text-foreground">IUPAC system:</span> numerical locants specify
        the positions.
      </p>
    </div>
  );
}
