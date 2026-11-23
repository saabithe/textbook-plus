/*
 * ScalarVectorComparison — two compact cards separating scalar from vector
 * quantities, followed by the identification rule. Purely presentational:
 * no hooks, no client directive, no external libraries. Accents come from
 * theme CSS vars so the neutral and subject hues stay legible in light/dark.
 */

const SCALAR_ACCENT = "var(--muted-foreground)";
const VECTOR_ACCENT = "var(--subject-mathematics)";

const SCALAR_EXAMPLES = [
  "Mass, length, time",
  "Distance, speed, area",
  "Volume, temperature, work",
  "Voltage",
];

const VECTOR_EXAMPLES = ["Displacement, velocity", "Acceleration, force", "Weight, momentum"];

/** One example line: a small accent dot followed by the exact example text. */
function ExampleLine({ text, accent }: { text: string; accent: string }) {
  return (
    <li className="flex items-baseline gap-2 text-[0.85rem] leading-relaxed text-foreground/80">
      <span
        aria-hidden="true"
        className="mt-[0.45rem] inline-block h-1 w-1 shrink-0 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <span>{text}</span>
    </li>
  );
}

/** Scalar vs vector at a glance, then the two-line direction test. */
export function ScalarVectorComparison() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <section
          className="rounded-2xl border border-border/60 bg-card shadow-sm"
          style={{ borderTopColor: SCALAR_ACCENT }}
        >
          <div className="px-4 py-3.5 sm:px-5">
            <p
              className="text-xs font-extrabold uppercase tracking-[0.14em]"
              style={{ color: SCALAR_ACCENT }}
            >
              Scalar quantities
            </p>
            <p className="mt-2 text-sm font-extrabold tracking-tight text-foreground">
              Possess magnitude only
            </p>
            <ul className="mt-3 space-y-1.5">
              {SCALAR_EXAMPLES.map((example) => (
                <ExampleLine key={example} text={example} accent={SCALAR_ACCENT} />
              ))}
            </ul>
          </div>
        </section>

        <section
          className="rounded-2xl border border-border/60 bg-card shadow-sm"
          style={{ borderTopColor: VECTOR_ACCENT }}
        >
          <div className="px-4 py-3.5 sm:px-5">
            <p
              className="text-xs font-extrabold uppercase tracking-[0.14em]"
              style={{ color: VECTOR_ACCENT }}
            >
              Vector quantities
            </p>
            <p className="mt-2 text-sm font-extrabold tracking-tight text-foreground">
              Possess magnitude and direction
            </p>
            <ul className="mt-3 space-y-1.5">
              {VECTOR_EXAMPLES.map((example) => (
                <ExampleLine key={example} text={example} accent={VECTOR_ACCENT} />
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-3 rounded-xl border border-border/40 bg-muted/30 px-4 py-3">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
          Identification rule
        </p>
        <div className="mt-2 space-y-1.5 text-[0.85rem] leading-relaxed text-foreground/80">
          <p>
            Direction required to specify the quantity{" "}
            <span className="font-extrabold" style={{ color: VECTOR_ACCENT }}>
              →
            </span>{" "}
            <strong style={{ color: VECTOR_ACCENT }}>Vector</strong>
          </p>
          <p>
            Magnitude alone is sufficient{" "}
            <span className="font-extrabold" style={{ color: SCALAR_ACCENT }}>
              →
            </span>{" "}
            <strong style={{ color: SCALAR_ACCENT }}>Scalar</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
