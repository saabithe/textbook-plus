import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Derivation } from "@/components/content/process/Derivation";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { ShmEquationAnatomy } from "@/components/content/physics/ShmEquationAnatomy";
import { ShmDisplacementDiagram } from "@/components/content/physics/ShmDisplacementDiagram";
import { ShmGraphs } from "@/components/content/physics/ShmGraphs";

/** Sample one period of sin(2πt) / cos(2πt) into an SVG polyline (used in the v–t exam answer). */
function examCurve(kind: "sin" | "cos"): string {
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const t = i / 120;
    const px = 30 + t * 425;
    const val = kind === "sin" ? Math.sin(2 * Math.PI * t) : Math.cos(2 * Math.PI * t);
    const py = 85 - val * 40;
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  return pts.join(" ");
}

export default function OscillationsChapter() {
  return (
    <>
      <h2 id="o-intro">13.1 Introduction</h2>
      <figure className="my-6 rounded-xl border border-border/60 bg-white p-4 dark:bg-zinc-900">
        <svg viewBox="0 0 720 640" className="w-full max-w-[720px] h-auto" role="img" aria-labelledby="motionFlowTitle motionFlowDesc">
          <title id="motionFlowTitle">Types of motion — flow chart</title>
          <desc id="motionFlowDesc">
            Motion splits into non-periodic motion (non-repetitive; e.g. rectilinear motion, motion of a projectile)
            and periodic motion (repeats at regular intervals; e.g. uniform circular motion, orbital motion of
            planets). Oscillatory motion is periodic to and fro motion (e.g. cradle, swing, pendulum of a wall clock),
            and it further splits into oscillation (low frequency) and vibration (high frequency).
          </desc>
          <defs>
            <marker id="motionFlowArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#818cf8" />
            </marker>
          </defs>
          {/* connectors */}
          <line x1="360" y1="70" x2="200" y2="122" stroke="#818cf8" strokeWidth="1.8" markerEnd="url(#motionFlowArrow)" />
          <line x1="360" y1="70" x2="520" y2="122" stroke="#818cf8" strokeWidth="1.8" markerEnd="url(#motionFlowArrow)" />
          <path d="M 532 240 L 532 272 L 360 272 L 360 302" fill="none" stroke="#818cf8" strokeWidth="1.8" markerEnd="url(#motionFlowArrow)" />
          <line x1="360" y1="424" x2="230" y2="484" stroke="#818cf8" strokeWidth="1.8" markerEnd="url(#motionFlowArrow)" />
          <line x1="360" y1="424" x2="490" y2="484" stroke="#818cf8" strokeWidth="1.8" markerEnd="url(#motionFlowArrow)" />
          {/* Motion (root) */}
          <rect x="250" y="16" width="220" height="54" rx="12" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <text x="360" y="40" textAnchor="middle" fontSize="15" fontWeight="700" fill="#4338ca">Motion</text>
          <text x="360" y="58" textAnchor="middle" fontSize="11" fill="#6b7280">kinds of motion in daily life</text>
          {/* Non-Periodic */}
          <rect x="36" y="124" width="304" height="116" rx="10" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <text x="188" y="152" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#4338ca">Non-Periodic Motion</text>
          <text x="188" y="176" textAnchor="middle" fontSize="11.5" fill="#374151">The motion which is non-repetitive.</text>
          <text x="188" y="200" textAnchor="middle" fontSize="11" fill="#6b7280">e.g. rectilinear motion,</text>
          <text x="188" y="216" textAnchor="middle" fontSize="11" fill="#6b7280">motion of a projectile</text>
          {/* Periodic */}
          <rect x="380" y="124" width="304" height="116" rx="10" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <text x="532" y="152" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#4338ca">Periodic Motion</text>
          <text x="532" y="176" textAnchor="middle" fontSize="11.5" fill="#374151">A motion that repeats itself at regular</text>
          <text x="532" y="190" textAnchor="middle" fontSize="11.5" fill="#374151">intervals of time is called periodic motion.</text>
          <text x="532" y="213" textAnchor="middle" fontSize="11" fill="#6b7280">e.g. uniform circular motion, orbital</text>
          <text x="532" y="229" textAnchor="middle" fontSize="11" fill="#6b7280">motion of planets in the solar system</text>
          {/* Oscillatory */}
          <rect x="140" y="304" width="440" height="120" rx="10" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <text x="360" y="330" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#4338ca">Oscillatory Motion</text>
          <text x="360" y="354" textAnchor="middle" fontSize="11.5" fill="#374151">Periodic to and fro motion is called oscillatory motion.</text>
          <text x="360" y="378" textAnchor="middle" fontSize="11" fill="#6b7280">e.g. motion of a cradle, motion of a swing,</text>
          <text x="360" y="396" textAnchor="middle" fontSize="11" fill="#6b7280">motion of the pendulum of a wall clock</text>
          {/* Oscillation / Vibration */}
          <rect x="60" y="486" width="280" height="96" rx="10" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <text x="200" y="512" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#4338ca">Oscillation</text>
          <text x="200" y="536" textAnchor="middle" fontSize="11.5" fill="#374151">frequency is small</text>
          <text x="200" y="560" textAnchor="middle" fontSize="10.5" fill="#6b7280">e.g. oscillation of a branch of a tree</text>
          <rect x="380" y="486" width="280" height="96" rx="10" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <text x="520" y="512" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#4338ca">Vibration</text>
          <text x="520" y="536" textAnchor="middle" fontSize="11.5" fill="#374151">frequency is high</text>
          <text x="520" y="560" textAnchor="middle" fontSize="10.5" fill="#6b7280">e.g. vibration of a string of a musical instrument</text>
        </svg>
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          Types of motion — oscillatory motion is a sub-class of periodic motion.
        </figcaption>
      </figure>
      <KeyPoint title="Oscillations and Vibration">
        <ul className="space-y-2">
          <li>
            <Highlight>Every oscillatory motion is periodic, but every periodic motion need not be oscillatory</Highlight>{" "}
            — circular motion, for instance, is periodic but not oscillatory.
          </li>
          <li>
            There is <strong>no significant difference</strong> between oscillations and vibrations — the same to and
            fro motion is called an <strong>oscillation</strong> when the frequency is small and a{" "}
            <strong>vibration</strong> when the frequency is high (examples in the chart above).
          </li>
        </ul>
      </KeyPoint>

      <h2 id="o-periodic">13.2 Period, Frequency, Displacement and Amplitude</h2>

      <h3 id="o-freq">13.2.1 Period and Frequency</h3>
      <Comparison
        columns={[
          {
            title: "Period (T)",
            children: (
              <div className="space-y-2.5">
                <p>
                  <strong>Meaning</strong> — <Highlight>Time for one complete cycle</Highlight>.
                </p>
                <p>
                  <strong>SI unit</strong> — the <strong>second</strong> (s).
                </p>
                <p>
                  <strong>Think of it as</strong> — <em>time per cycle</em>.
                </p>
              </div>
            ),
          },
          {
            title: "Frequency (ν)",
            children: (
              <div className="space-y-2.5">
                <p>
                  <strong>Meaning</strong> — <Highlight>Number of cycles per unit time</Highlight>.
                </p>
                <p>
                  <strong>SI unit</strong> — the <strong>hertz</strong> (Hz); 1 Hz = 1 oscillation per second = 1 s⁻¹.
                </p>
                <p>
                  <strong>Relationship</strong> — the reciprocal of the period:{" "}
                  <Formula>{String.raw`\nu = \frac{1}{T}`}</Formula>.
                </p>
                <p>
                  <strong>Think of it as</strong> — <em>cycles per time</em>.
                </p>
              </div>
            ),
          },
        ]}
      />

      <Expandable variant="default" title="Example 13.1 — heart beat frequency and period">
        <ProblemSolution.Problem>
          On an average, a human heart is found to beat 75 times in a minute. Calculate its frequency and period.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The beat frequency of the heart:{" "}
            <Formula>{String.raw`\nu = \frac{75}{1\ \text{min}} = \frac{75}{60\ \text{s}} = 1.25\ \text{s}^{-1} = 1.25\ \text{Hz}`}</Formula>
          </p>
          <p>
            The time period: <Formula>{String.raw`T = \frac{1}{1.25} = 0.8\ \text{s}`}</Formula>
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="o-displacement">13.2.2 Displacement</h3>
      <p>
        <Highlight>
          The distance of the oscillating body from its mean (equilibrium) position is called its{" "}
          <strong>displacement</strong> (x)
        </Highlight>
        . At the mean position the displacement is <strong>x = 0</strong>, and at the extreme positions of the
        oscillation it is <strong>x = ±A</strong>.
      </p>

      <ShmDisplacementDiagram />

      <h3 id="o-amplitude">13.2.3 Amplitude</h3>
      <p>
        <Highlight>
          The maximum displacement from the mean position is called the <strong>amplitude</strong> (A) of the
          oscillation
        </Highlight>
        . The displacement stays within the limits −A and +A as the motion repeats.
      </p>

      <h3 id="o-expression">13.2.4 Mathematical Expression for Displacement</h3>
      <p>
        The displacement can be represented by a <strong>mathematical function of time</strong> — a sine function, a
        cosine function, or a linear combination of sine and cosine functions:
      </p>
      <FormulaBlock latex={String.raw`f(t) = A \cos \omega t \qquad \text{or} \qquad f(t) = A \sin \omega t`} />
      <p>
        A linear combination of sine and cosine functions:
      </p>
      <FormulaBlock latex={String.raw`f(t) = A \sin \omega t + B \cos \omega t`} />
      <p>
        Here <strong>A is the amplitude</strong> and <strong>ω is the angular frequency</strong> of the oscillation:
      </p>
      <FormulaBlock latex={String.raw`\omega = \frac{2\pi}{T} = 2\pi\nu`} important />

      <Expandable variant="default" title="Example 13.2 — periodic vs non-periodic functions">
        <ProblemSolution.Problem>
          Which of the following functions of time represent (a) periodic and (b) non-periodic motion? Give the period
          for each case of periodic motion [ω is any positive constant]: (i) sinωt + cosωt; (ii) sinωt + cos2ωt +
          sin4ωt; (iii) e^(−ωt); (iv) log(ωt).
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (i) sinωt + cosωt = √2 sin(ωt + π/4). Since √2 sin(ωt + π/4) = √2 sin[ω(t + 2π/ω) + π/4], the function is
            periodic with period <strong>T = 2π/ω</strong>.
          </p>
          <p>
            (ii) Each term is periodic with a different angular frequency: sinωt has period T₀ = 2π/ω, cos2ωt has
            period T₀/2, and sin4ωt has period T₀/4. The period of the first term is a multiple of the last two, so the
            smallest interval after which the sum repeats is <strong>T = 2π/ω</strong> — the sum is periodic.
          </p>
          <p>
            (iii) e^(−ωt) decreases monotonically and tends to zero as t → ∞ — it never repeats, so it is{" "}
            <strong>non-periodic</strong>.
          </p>
          <p>
            (iv) log(ωt) increases monotonically and diverges as t → ∞ — <strong>non-periodic</strong>. It could not
            represent any physical displacement.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <MistakeCard
        mistake="Confusing angular frequency ω with frequency ν (their units, and factors of 2π)."
        correction="ω = 2πν and ω = 2π/T. ν is measured in hertz (s⁻¹) — the number of oscillations per second — while ω is in rad s⁻¹, i.e. 2π times ν. Angular arguments like (ωt + φ) are in radians by default."
      />

      <Expandable variant="exercise" title="Exercises — periodic motion basics">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.1 — Examples of periodic motion</h3>
        <ProblemSolution.Problem>
          Which of the following examples represent periodic motion? (a) A swimmer completing one (return) trip from one
          bank of a river to the other and back. (b) A freely suspended bar magnet displaced from its N-S direction and
          released. (c) A hydrogen molecule rotating about its centre of mass. (d) An arrow released from a bow.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) The motion is <strong>not periodic</strong>, though it is to and fro — a swimmer&rsquo;s trip is
            controlled, not a natural repetition at regular intervals.
          </p>
          <p>(b) Periodic — the magnet swings to and fro in a repeatable oscillation.</p>
          <p>(c) Periodic — the rotating molecule returns to the same configuration at regular intervals.</p>
          <p>(d) Not periodic — the arrow&rsquo;s projectile motion does not repeat.</p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.3 — Which x–t plots are periodic</h3>
        <ProblemSolution.Problem>
          Figure 13.18 depicts four x–t plots for linear motion of a particle. Which of the plots represent periodic
          motion? What is the period of motion (in case of periodic motion)?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Plots <strong>(b) and (d)</strong> represent periodic motion, each with a period of{" "}
            <strong>2 s</strong>. Plots (a) and (c) are non-periodic.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="o-shm">13.3 Simple Harmonic Motion</h2>
      <Callout type="important" title="Definition — simple harmonic motion">
        <p>
          A particle is said to be in simple harmonic motion if the force acting on the particle is{" "}
          <strong>proportional to its displacement</strong> and is <strong>directed towards the mean position</strong>.
        </p>
      </Callout>
      <p>
        Notice what the definition is <em>not</em> — SHM is more than &ldquo;an oscillation described by a cosine&rdquo;.{" "}
        <strong>Two conditions must act together:</strong>
      </p>
      <Comparison
        columns={[
          {
            title: "1 · Proportionality",
            children: (
              <>
                <p>The magnitude of the restoring force grows linearly with the displacement:</p>
                <p className="text-center">
                  <Formula>{String.raw`|F| \propto |x|`}</Formula>
                </p>
              </>
            ),
          },
          {
            title: "2 · Opposite direction",
            children: (
              <>
                <p>The force always points back towards the equilibrium (mean) position:</p>
                <p className="text-center">
                  <Formula>{String.raw`F \rightarrow \text{mean position}`}</Formula>
                </p>
              </>
            ),
          },
        ]}
      />
      <p>
        Both conditions together — the minus sign in F ∝ −x is the whole point:
      </p>
      <FormulaBlock latex={String.raw`F \propto -x`} important />
      <KeyPoint title="Key lock">
        The minus sign represents the restoring direction — it is what turns a mere oscillation into simple harmonic
        motion.
      </KeyPoint>

      <h3 id="o-shm-eq">The central SHM equation</h3>
      <p>
        Consider a particle vibrating back and forth about the origin of an x-axis between the limits +A and −A. If the
        motion is simple harmonic, its position can be represented as a function of time:
      </p>
      <FormulaBlock latex={String.raw`x(t) = A \cos(\omega t + \phi)`} important />
      <p>
        where A, ω and φ are constants. Thus,{" "}
        <Highlight>
          SHM is not any periodic motion but one in which displacement is a sinusoidal function of time
        </Highlight>
        . The equation carries every piece of the motion inside it — click each term to see what it does:
      </p>
      <ShmEquationAnatomy />
      <p>
        As the cosine function varies from +1 to −1, the displacement varies between the extremes A and −A. The speed
        of the particle is <strong>maximum at zero displacement</strong> (x = 0) and <strong>zero at the extremes</strong>{" "}
        of motion; the period T remains fixed no matter which location you choose as the initial (t = 0) location.
      </p>
      <KeyPoint title="Phase constant φ — &ldquo;where did the motion start?&rdquo;">
        The time-varying quantity (ωt + φ) is the <strong>phase</strong> of the motion — it describes the state of
        motion (position and velocity) at any given time. At t = 0 the phase reduces to φ, the{" "}
        <strong>phase constant</strong> (or phase angle). Its value is fixed by the initial conditions — the
        displacement and velocity of the particle at t = 0 — so the phase constant tells you exactly where the motion
        began.
      </KeyPoint>
      <p>
        Two SHMs may have the same ω and φ but different amplitudes A and B; or the same amplitude A and frequency ω
        but different phase angles φ; or the same φ = 0 but different periods. The plots below show all three
        situations:
      </p>
      <ShmGraphs />
      <p>
        For simplicity set φ = 0: x(t) = A cosωt. Since the motion has a period T, x(t) = x(t + T), i.e. A cosωt =
        A cosω(t + T). The cosine function first repeats itself when its argument changes by 2π, so ω(t + T) = ωt + 2π:
      </p>
      <FormulaBlock latex={String.raw`\omega = \frac{2\pi}{T}`} important />
      <p>
        ω is the <strong>angular frequency</strong>, with SI unit radians per second;{" "}
        <Highlight>being 2π times the frequency of oscillation, ω = 2πν</Highlight>. Two SHMs may have the same A and φ but different ω — one with half the period and twice
        the frequency of the other [Fig. 13.8].
      </p>

      <Expandable variant="default" title="Example 13.3 — SHM vs periodic but not SHM">
        <ProblemSolution.Problem>
          Which of the following functions of time represent (a) simple harmonic motion and (b) periodic but not simple
          harmonic? Give the period for each case: (1) sinωt − cosωt; (2) sin²ωt.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (1) Combining the two terms into a single sine:{" "}
            <Formula>{String.raw`y = \sin\omega t - \cos\omega t = \sqrt{2}\sin\!\left(\omega t - \frac{\pi}{4}\right)`}</Formula>,
            because{" "}
            <Formula>{String.raw`\sin\!\left(\omega t - \frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}\sin\omega t - \frac{1}{\sqrt{2}}\cos\omega t`}</Formula>.
            This is exactly the standard solution of SHM, y = A sin(ωt ± φ), with A = √2 and φ = π/4 — so the function{" "}
            <strong>represents simple harmonic motion</strong> of amplitude √2, period 2π/ω and initial phase −π/4 (or
            equivalently 7π/4).
          </p>
          <p>
            (2) sin²ωt = <strong>½ − ½ cos2ωt</strong> — periodic with period π/ω, and it is harmonic but not simple
            harmonic (its equilibrium occurs at ½ instead of zero).
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <KeyPoint title="Periodic but not simple harmonic">
        <ul className="space-y-2">
          <li>
            <strong>Motion of the Earth around the Sun</strong> — the orbit repeats every year, but the displacement is
            not sinusoidal, and the acceleration (inverse-square gravitational force) is not proportional to
            displacement from a mean position.
          </li>
          <li>
            <strong>A pendulum displaced through a large angle</strong> — strictly periodic, but only for small
            displacements does it reduce to SHM: the restoring force is mg sinθ, not −kx.
          </li>
          <li>
            <strong>Uniform circular motion</strong> — periodic, and although its projection on a diameter is SHM, the
            motion itself does not to-and-fro about a mean position.
          </li>
        </ul>
      </KeyPoint>

      <MistakeCard
        mistake="Thinking that any oscillatory motion is simple harmonic motion, or that in SHM the acceleration is constant."
        correction="SHM is a very specific motion: the displacement must be sinusoidal, x = A cos(ωt + φ), which is equivalent to the force law F = −kx. In SHM the acceleration is NOT constant — it is proportional to the displacement and always directed towards the mean position: a = −ω²x."
      />

      <Expandable variant="exercise" title="Exercises — identifying simple harmonic motion">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.2 — Near-SHM and periodic-but-not-SHM</h3>
        <ProblemSolution.Problem>
          Which of the following examples represent (nearly) simple harmonic motion and which represent periodic but not
          simple harmonic motion? (a) The rotation of the Earth about its axis. (b) Motion of an oscillating mercury
          column in a U-tube. (c) Motion of a ball bearing inside a smooth curved bowl, when released from a point
          slightly above the lowermost point. (d) General vibrations of a polyatomic molecule about its equilibrium
          position.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) <strong>Periodic but not SHM</strong> — rotation at constant angular speed is not governed by a
            restoring force proportional to displacement.
          </p>
          <p>
            (b) <strong>SHM</strong> — the excess weight of mercury provides a restoring force proportional to the
            displacement of the column.
          </p>
          <p>
            <strong>(c) SHM</strong> — for small displacement from the lowest point, the restoring force along the
            bowl&rsquo;s arc is proportional to displacement.
          </p>
          <p>
            (d) <strong>Periodic but not SHM</strong> — a polyatomic molecule has several natural frequencies, so its
            vibration is a superposition of SHMs of different frequencies.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.4 — Classify functions of time</h3>
        <ProblemSolution.Problem>
          Which of the following functions of time represent (a) simple harmonic, (b) periodic but not simple harmonic,
          and (c) non-periodic motion? Give the period for each case of periodic motion (ω is any positive constant):
          (a) sinωt − cosωt; (b) sin³ωt; (c) 3 cos(π/4 − 2ωt); (d) cosωt + cos3ωt + cos5ωt; (e) exp(−ω²t²); (f) 1 +
          ωt + ω²t².
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) sinωt − cosωt = √2 sin(ωt − π/4) — <strong>SHM</strong>, period <strong>2π/ω</strong>.
          </p>
          <p>
            (b) sin³ωt = ¼(3 sinωt − sin3ωt) — a superposition of two SHMs of commensurate frequencies:{" "}
            <strong>periodic but not SHM</strong>, period <strong>2π/ω</strong>.
          </p>
          <p>
            (c) 3 cos(π/4 − 2ωt) = 3 cos(2ωt − π/4) — <strong>SHM</strong> of amplitude 3, period <strong>π/ω</strong>.
          </p>
          <p>
            (d) cosωt + cos3ωt + cos5ωt — periodic but not SHM; period = LCM(2π/ω, 2π/3ω, 2π/5ω) ={" "}
            <strong>2π/ω</strong>.
          </p>
          <p>(e) exp(−ω²t²) — exponential, <strong>non-periodic</strong>.</p>
          <p>(f) 1 + ωt + ω²t² — grows monotonically with t, <strong>non-periodic</strong>.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="o-circular">13.4 SHM and Uniform Circular Motion</h2>
      <p>
        <Highlight>The projection of uniform circular motion on a diameter of the circle follows simple harmonic motion</Highlight>. Tie a
        ball to a string and make it move in a horizontal plane with constant angular speed; viewed sideways the ball
        appears to execute a to-and-fro motion along a horizontal line with the point of rotation as the midpoint — the
        motion of the ball on a diameter of the circle normal to the viewing direction.
      </p>
      <p>
        Mathematically: a particle P moves uniformly on a circle of radius A with angular speed ω (anticlockwise). At
        t = 0 its position vector OP makes angle φ with the positive x-axis; at time t it makes angle ωt + φ. The
        projection OP′ on the x-axis is:
      </p>
      <FormulaBlock latex={String.raw`x(t) = A \cos(\omega t + \phi)`} />
      <p>
        which is the defining equation of SHM. So if P moves uniformly on a circle, its projection P′ on a diameter
        executes SHM; P and the circle are called the <strong>reference particle</strong> and the{" "}
        <strong>reference circle</strong>. Projection on any other diameter, say the y-axis, gives y = A sin(ωt + φ) —
        an SHM of the same amplitude differing in phase by π/2.
      </p>
      <KeyPoint title="Same kinematics, different force">
        Despite this connection, the force acting on a particle in <em>linear</em> SHM is very different from the
        centripetal force needed to keep a particle in uniform circular motion.
      </KeyPoint>

      <Expandable variant="default" title="Example 13.4 — two circular motions give SHM">
        <ProblemSolution.Problem>
          The figure depicts two circular motions — the radius, period of revolution, initial position and sense of
          revolution are indicated. Obtain the SHM of the x-projection of the radius vector of the rotating particle P in
          each case.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) At t = 0, OP makes an angle of 45° = π/4 with the positive x-axis and rotates anticlockwise; T = 4 s.
            After time t it covers an extra angle 2πt/T and makes an angle π/4 + 2πt/T with the x-axis. The projection is:
          </p>
          <FormulaBlock latex={String.raw`x(t) = A \cos\!\left(\frac{2\pi t}{T} + \frac{\pi}{4}\right) = A \cos\!\left(\frac{\pi t}{2} + \frac{\pi}{4}\right)`} />
          <p>
            — SHM of amplitude A, period 4 s and initial phase π/4.
          </p>
          <p>
            (b) At t = 0, OP makes an angle 90° = π/2 with the x-axis and rotates clockwise; T = 30 s. The projection is:
          </p>
          <FormulaBlock latex={String.raw`x(t) = B \cos\!\left(\frac{\pi}{2} - \frac{2\pi t}{T}\right) = B \sin\frac{\pi t}{15} = B \cos\!\left(\frac{\pi t}{15} - \frac{\pi}{2}\right)`} />
          <p>
            — SHM of amplitude B, period 30 s and initial phase −π/2.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <MistakeCard
        mistake="Thinking the reference particle's centripetal force is the same as the force causing the SHM."
        correction="The reference-circle construction is a kinematic trick: only the PROJECTION of position, velocity and acceleration match the SHM. The force on a particle in linear SHM is the linear restoring force F = −kx, which is quite different from the centripetal force needed for uniform circular motion."
      />

      <Expandable variant="exercise" title="Exercises — SHM and circular motion">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.11 — SHM from two circular motions</h3>
        <ProblemSolution.Problem>
          Figures 13.20 correspond to two circular motions; the radius, period of revolution, initial position and sense
          of revolution are indicated on each figure. Obtain the corresponding SHM of the x-projection of the radius
          vector of the revolving particle P, in each case.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) Amplitude 3 cm, T = 2 s, ω = 2π/T = π rad s⁻¹. The initial position is x(0) = 0 (φ = 0) and the sense
            of revolution is clockwise:
          </p>
          <FormulaBlock latex={String.raw`x(t) = a\sin(-\omega t) = -3\sin(\pi t)\ \text{cm}\qquad(= -0.03\sin\pi t\ \text{m})`} />
          <p>
            (b) Amplitude 2 m, T = 4 s, ω = π/2 rad s⁻¹. The initial position is x(0) = −A, i.e. φ = 3π/2, anticlockwise:
          </p>
          <FormulaBlock latex={String.raw`x(t) = 2\sin\!\left(\omega t + \frac{3\pi}{2}\right) = -2\cos\!\left(\frac{\pi}{2}\,t\right)\ \text{m}`} />
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.12 — Reference circle parameters</h3>
        <ProblemSolution.Problem>
          Plot the reference circle for each of the following SHMs, indicating the initial (t = 0) position, the radius
          and the angular speed. The sense of rotation may be fixed to be anticlockwise in every case (x in cm, t in s):
          (a) x = −2 sin(3t + π/3); (b) x = cos(π/6 − t); (c) x = 3 sin(2πt + π/4); (d) x = 2 cos(πt).
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <TableCard
            caption="Reference circle parameters (x(t) = A cos(ωt + φ))"
            headers={["Part", "A (cm)", "ω (rad s⁻¹)", "Initial phase φ", "x(0) (cm)"]}
            rows={[
              { cells: ["(a) −2 sin(3t + π/3) = 2 cos(3t + 5π/6)", "2", "3", "5π/6 = 150°", "−√3 ≈ −1.73"] },
              { cells: ["(b) cos(π/6 − t) = cos(t − π/6)", "1", "1", "−π/6 = −30°", "√3/2 ≈ 0.87"] },
              { cells: ["(c) 3 sin(2πt + π/4) = 3 cos(2πt − π/4)", "3", "2π", "−π/4 = −45°", "3/√2 ≈ 2.12"] },
              { cells: ["(d) 2 cos(πt)", "2", "π", "0", "2"] },
            ]}
          />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="o-velocity">13.5 Velocity and Acceleration in SHM</h2>
      <p>
        The speed of the reference particle in uniform circular motion is v = ωA. From the geometry, the velocity of
        the projection particle P′ at time t is:
      </p>
      <FormulaBlock latex={String.raw`v(t) = -\omega A \sin(\omega t + \phi)`} important />
      <p>
        where the negative sign shows that v(t) is opposite to the positive direction of the x-axis. This is the
        instantaneous velocity in SHM; the same result follows from differentiating x(t).
      </p>
      <p>
        The centripetal acceleration of the reference particle has magnitude v²/A = ω²A and is directed towards the
        centre, along PO. The instantaneous acceleration of the projection particle is therefore:
      </p>
      <FormulaBlock latex={String.raw`a(t) = -\omega^2 A \cos(\omega t + \phi) = -\omega^2 x(t)`} important />
      <p>
        The important property: <strong>acceleration is proportional to displacement</strong>. For x &gt; 0, a &lt; 0;
        for x &lt; 0, a &gt; 0 —{" "}
        <Highlight>
          whatever the value of x between −A and A, the acceleration is always directed towards the centre
        </Highlight>.
      </p>
      <p>
        For φ = 0: x(t) = A cosωt, v(t) = −ωA sinωt, a(t) = −ω²A cosωt. All quantities vary sinusoidally with the same
        period, differing only in their maxima (A, ωA, ω²A) and phase — the velocity plot differs from the displacement
        plot by π/2, the acceleration plot by π.
      </p>
      <TableCard
        caption="13.2 Table — Variation of x, v and a in SHM"
        headers={["Position", "x", "v", "a = −ω²x", "Kinetic / potential energy"]}
        rows={[
          { cells: ["Mean position (x = 0)", "0", "±ωA (max)", "0", "All kinetic"] },
          { cells: ["Extremes (x = ±A)", "±A", "0", "∓ω²A (max)", "All potential"] },
          { cells: ["General x", "between −A and +A", "±ω√(A² − x²)", "−ω²x", "E = ½kA² conserved"] },
        ]}
      />

      <h3 id="o-deriv">13.5.1 Deriving velocity and acceleration by differentiation</h3>
      <p>
        The geometric route above gives the answers; the calculus route is the one to use in exams. Differentiate the
        displacement equation — with v = dx/dt and a = dv/dt:
      </p>
      <Derivation
        title="Case 1 — x = A cos(ωt): velocity and acceleration"
        steps={[
          {
            label: "Velocity is the time rate of change of displacement:",
            latex: String.raw`v = \frac{dx}{dt}`,
          },
          {
            label:
              "Substitute x = A cos(ωt) and pull the constant A out. Using d/dt[cos θ] = −sin θ · dθ/dt:",
            latex: String.raw`v = \frac{d}{dt}\left[A\cos(\omega t)\right] = -A\sin(\omega t)\cdot\frac{d}{dt}(\omega t)`,
          },
          {
            label: "Since d(ωt)/dt = ω:",
            latex: String.raw`v = -A\omega\sin(\omega t)`,
          },
          {
            label: "Acceleration is the time rate of change of velocity:",
            latex: String.raw`a = \frac{dv}{dt} = \frac{d}{dt}\left[-A\omega\sin(\omega t)\right] = -A\omega^2\cos(\omega t)`,
          },
          {
            label: "Group the terms to recover the displacement x = A cos(ωt):",
            latex: String.raw`a = -\omega^2\left[A\cos(\omega t)\right] = -\omega^2 x`,
          },
        ]}
      />
      <Derivation
        title="Case 2 — x = A sin(ωt): velocity and acceleration"
        steps={[
          {
            label: "Differentiate x = A sin(ωt), using d/dt[sin θ] = cos θ · dθ/dt:",
            latex: String.raw`v = \frac{d}{dt}\left[A\sin(\omega t)\right] = A\omega\cos(\omega t)`,
          },
          {
            label: "Differentiate again for the acceleration:",
            latex: String.raw`a = \frac{dv}{dt} = \frac{d}{dt}\left[A\omega\cos(\omega t)\right] = -A\omega^2\sin(\omega t)`,
          },
          {
            label: "Group the terms to recover x = A sin(ωt):",
            latex: String.raw`a = -\omega^2\left[A\sin(\omega t)\right] = -\omega^2 x`,
          },
        ]}
      />
      <p>
        In both cases the result is the same: <strong>a = −ω²x</strong>. Since ω² is a positive constant for a given
        oscillator, <strong>acceleration is directly proportional to displacement</strong> — restating, in kinematic
        form, the two-condition definition of §13.3 — and the negative sign keeps the acceleration always directed
        towards the mean position.
      </p>

      <h3 id="o-diffeq">13.5.2 The differential equation of SHM</h3>
      <p>
        Writing the acceleration as d²x/dt² combines everything into a single compact statement — the differential
        equation every SHM satisfies, whatever the physical system:
      </p>
      <FormulaBlock latex={String.raw`\frac{\mathrm{d}^2x}{\mathrm{d}t^2} + \omega^2 x = 0`} important />
      <p>
        Its general solution is x(t) = A cos(ωt + φ) — or, equivalently, x(t) = A sin(ωt + φ).
      </p>

      <Expandable variant="default" title="Example 13.5 — displacement, speed and acceleration at a given time">
        <ProblemSolution.Problem>
          A body oscillates with SHM according to the equation (in SI units) x = 5 cos[2πt + π/4]. At t = 1.5 s calculate
          the (a) displacement, (b) speed and (c) acceleration of the body.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The angular frequency is ω = 2π s⁻¹ and the time period T = 1 s. At t = 1.5 s:
          </p>
          <p>
            (a) Displacement = (5.0 m) cos[(2π s⁻¹)(1.5 s) + π/4] = (5.0 m) cos(3π + π/4) = –5.0 × 0.707 ={" "}
            <strong>−3.535 m</strong>.
          </p>
          <p>
            (b) Speed = −(5.0 m)(2π s⁻¹) sin[(2π s⁻¹)(1.5 s) + π/4] = −10π × sin(3π + π/4) m s⁻¹ = 10π × 0.707 m s⁻¹ ={" "}
            <strong>22 m s⁻¹</strong>.
          </p>
          <p>
            (c) Acceleration = −(2π s⁻¹)² × displacement = −(2π s⁻¹)² × (−3.535 m) = <strong>140 m s⁻²</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 13.6 — amplitude and period from the SHM equation">
        <ProblemSolution.Problem>
          The displacement y (in cm) of an oscillating particle varies with time t (in s) according to the equation y =
          2cos(0.5πt + π/3). Find the amplitude and period of the particle.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Comparing with the standard SHM form y = A cos(ωt + φ): <strong>amplitude A = 2 cm</strong>, angular
            frequency ω = 0.5π rad s⁻¹, and phase constant φ = π/3.
          </p>
          <FormulaBlock latex={String.raw`T = \frac{2\pi}{\omega} = \frac{2\pi}{0.5\pi} = 4\ \text{s}`} />
          <p>
            The particle oscillates with <strong>amplitude 2 cm</strong> and <strong>period 4 s</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exam questions — displacement, velocity and acceleration">
        <ExerciseQa
          questions={[
            <>
              A simple harmonic motion is represented as x = A cos(ωt). Obtain the expression for the velocity and
              acceleration of the object and hence prove that acceleration is directly proportional to the displacement.{" "}
              <span className="ml-1 rounded-md bg-muted px-1.5 py-0.5 text-[0.7rem] font-bold text-muted-foreground">
                March 2018
              </span>
            </>,
            <>
              A simple harmonic motion is represented as x = A sin(ωt). Obtain the expression for the velocity and
              acceleration of the object and hence prove that acceleration is directly proportional to the displacement.{" "}
              <span className="ml-1 rounded-md bg-muted px-1.5 py-0.5 text-[0.7rem] font-bold text-muted-foreground">
                March 2018
              </span>
            </>,
            <>
              For a simple harmonic motion, the time period T = 2 s. If the displacement from the mean position is 10
              cm, calculate the instantaneous acceleration.{" "}
              <span className="ml-1 rounded-md bg-muted px-1.5 py-0.5 text-[0.7rem] font-bold text-muted-foreground">
                Imp 2016
              </span>
            </>,
            <>
              A particle executing SHM is an example of acceleration of changing magnitude and direction. Explain.{" "}
              <span className="ml-1 rounded-md bg-muted px-1.5 py-0.5 text-[0.7rem] font-bold text-muted-foreground">
                March 2015
              </span>
            </>,
            <>At which point in an SHM is the speed half its maximum speed?</>,
            <>
              The velocity of a simple harmonic motion is V(t) = −ωA sin(ωt + φ). Find the expression for the
              acceleration of the simple harmonic motion.
            </>,
            <>
              The displacement of a particle executing SHM is y = A sinωt, where A is the amplitude and ω the angular
              frequency. Draw the variation of the velocity of the particle with time.
            </>,
          ]}
          answers={[
            <>
              v = dx/dt = −Aω sin(ωt) and a = dv/dt = −ω²A cos(ωt) = −ω²[A cos(ωt)] = <strong>−ω²x</strong>. Since ω²
              is a constant, <strong>a ∝ x</strong> — the minus sign shows the acceleration is directed opposite to the
              displacement, towards the mean position.
            </>,
            <>
              v = dx/dt = Aω cos(ωt) and a = dv/dt = −ω²A sin(ωt) = −ω²[A sin(ωt)] = <strong>−ω²x</strong>, so again{" "}
              <strong>a ∝ x</strong> for the sine form.
            </>,
            <>
              ω = 2π/T = 2π/2 = π rad s⁻¹. Taking magnitudes, a = ω²x = π² × 10 = <strong>10π² cm s⁻²</strong> (≈ 98.7
              cm s⁻²), directed towards the mean position.
            </>,
            <>
              In SHM, a = −ω²x: both the magnitude and the direction change with the displacement — zero at the mean
              position, maximum at the extremes (±ω²A), always pointing towards the mean position, and reversing sign
              every half cycle. It is never constant.
            </>,
            <>
              v = ω√(A² − x²) and v_max = ωA. Setting v = v_max/2: ω√(A² − x²) = ½ωA ⟹ A² − x² = A²/4 ⟹ x² = 3A²/4.
              So the speed is half its maximum at <strong>x = ±(√3/2)A ≈ ±0.866A</strong> — the two symmetric points
              0.866 of the amplitude away from the mean position.
            </>,
            <>
              a = dV/dt = d/dt[−ωA sin(ωt + φ)] = −ω²A cos(ωt + φ) = <strong>−ω²x</strong> — the same relation as
              before, with the phase φ carried along.
            </>,
            <>
              v = dy/dt = Aω cos(ωt) — a cosine curve of amplitude ωA leading the displacement by π/2: the velocity is
              maximum at the mean position (y = 0) and zero at the extremes ±A:
              <svg
                viewBox="0 0 480 170"
                className="my-3 h-auto w-full rounded-xl border border-border/50 bg-white p-2 dark:bg-zinc-900"
                role="img"
                aria-label="Graph of y = A sin omega t and its velocity v = A omega cos omega t against time over one period"
              >
                <line x1="30" y1="85" x2="455" y2="85" stroke="var(--muted-foreground)" strokeWidth="1.5" />
                <line x1="30" y1="35" x2="30" y2="135" stroke="var(--muted-foreground)" strokeWidth="1.5" />
                <text x="26" y="39" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--foreground)">
                  +A, +Aω
                </text>
                <text x="26" y="131" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--foreground)">
                  −A, −Aω
                </text>
                <polyline points={examCurve("sin")} fill="none" stroke="#f43f5e" strokeWidth="2.5" />
                <polyline points={examCurve("cos")} fill="none" stroke="#6366f1" strokeWidth="2.5" />
                <text x="455" y="100" textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--muted-foreground)">
                  t
                </text>
                <text x="300" y="22" fontSize="10.5" fontWeight="700" fill="#f43f5e">
                  y = A sin ωt
                </text>
                <text x="300" y="36" fontSize="10.5" fontWeight="700" fill="#6366f1">
                  v = Aω cos ωt
                </text>
                <text x="242" y="158" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--muted-foreground)">
                  T — one period
                </text>
              </svg>
            </>,
          ]}
        />
      </Expandable>

      <Expandable variant="exercise" title="Exercises — displacement, velocity and acceleration">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.5 — Signs of velocity, acceleration and force</h3>
        <ProblemSolution.Problem>
          A particle is in linear simple harmonic motion between two points, A and B, 10 cm apart. Take the direction
          from A to B as the positive direction and give the signs of velocity, acceleration and force on the particle
          when it is (a) at the end A, (b) at the end B, (c) at the mid-point of AB going towards A, (d) at 2 cm away
          from B going towards A, (e) at 3 cm away from A going towards B, and (f) at 4 cm away from B going towards A.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <TableCard
            caption="Signs of velocity, acceleration and force"
            headers={["Position & motion", "v", "a", "F"]}
            rows={[
              { cells: ["(a) at end A", "0", "+", "+"] },
              { cells: ["(b) at end B", "0", "−", "−"] },
              { cells: ["(c) mid-point, going towards A", "− (max magnitude)", "0", "0"] },
              { cells: ["(d) 2 cm from B, going towards A", "−", "−", "−"] },
              { cells: ["(e) 3 cm from A, going towards B", "+", "+", "+"] },
              { cells: ["(f) 4 cm from B, going towards A", "−", "−", "−"] },
            ]}
          />
          <p>
            At the ends the velocity is zero and the acceleration (and force) points towards the mean position; at the
            midpoint the acceleration and force vanish.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.7 — Amplitude and phase from initial conditions</h3>
        <ProblemSolution.Problem>
          The motion of a particle executing SHM is described by x(t) = A cos(ωt + φ). If the initial (t = 0) position
          is 1 cm and the initial velocity is ω cm/s, what are its amplitude and initial phase angle? The angular
          frequency is π s⁻¹. If instead we choose the sine function x = B sin(ωt + α), what are the amplitude and
          initial phase?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            At t = 0: x(0) = A cosφ = 1 cm, and v(0) = −Aω sinφ = ω, so −A sinφ = 1. Squaring and adding: A²(cos²φ +
            sin²φ) = 1 + 1 = 2 ⟹ <strong>A = √2 cm</strong>. Dividing gives tanφ = −1 with cosφ &gt; 0 and sinφ &lt; 0,
            so <strong>φ = −π/4 (or 7π/4)</strong>.
          </p>
          <p>
            For the sine form: x(0) = B sinα = 1 and v(0) = Bω cosα = ω, so B cosα = 1. Squaring and adding gives{" "}
            <strong>B = √2 cm</strong>; dividing gives tanα = 1 with both sinα, cosα &gt; 0, so{" "}
            <strong>α = π/4</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.9 — Frequency, maximum acceleration and speed</h3>
        <ProblemSolution.Problem>
          A spring of spring constant 1200 N m⁻¹ is mounted on a horizontal table. A mass of 3 kg is attached to the free
          end. The mass is pulled sideways to a distance of 2.0 cm and released. Determine (i) the frequency of
          oscillations, (ii) the maximum acceleration of the mass, and (iii) the maximum speed of the mass.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (i) ν = (1/2π)√(k/m) = (1/2π)√(1200/3) = (1/2π)(20) = <strong>3.18 Hz</strong>.
          </p>
          <p>
            (ii) a_max = kA/m = 1200 × 0.02/3 = <strong>8 m s⁻²</strong>.
          </p>
          <p>
            (iii) ω = 20 rad s⁻¹, so v_max = ωA = 20 × 0.02 = <strong>0.4 m s⁻¹</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.10 — Displacement functions for three starting points</h3>
        <ProblemSolution.Problem>
          In Exercise 13.9, take the position of mass when the spring is unstretched as x = 0, and left-to-right as the
          positive x-direction. Give x as a function of time t if at the moment we start the stopwatch (t = 0) the mass
          is (a) at the mean position, (b) at the maximum stretched position, and (c) at the maximum compressed position.
          In what way do these functions differ — in frequency, amplitude or initial phase?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Amplitude A = 0.02 m and ω = √(k/m) = √(1200/3) = 20 rad/s:
          </p>
          <p>(a) At t = 0 the mass is at the mean position: <strong>x(t) = 0.02 sin(20t)</strong> m.</p>
          <p>
            (b) At maximum stretched position, x(0) = A, so φ = π/2: x(t) = 0.02 sin(20t + π/2) ={" "}
            <strong>0.02 cos(20t)</strong> m.
          </p>
          <p>
            (c) At maximum compressed position, x(0) = −A, so φ = 3π/2: x(t) = 0.02 sin(20t + 3π/2) ={" "}
            <strong>−0.02 cos(20t)</strong> m.
          </p>
          <p>
            The functions differ only in <strong>initial phase</strong> — the amplitude and frequency are the same in
            all three cases.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.14 — Maximum piston speed</h3>
        <ProblemSolution.Problem>
          The piston in the cylinder head of a locomotive has a stroke (twice the amplitude) of 1.0 m. If the piston
          moves with SHM with an angular frequency of 200 rad/min, what is its maximum speed?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Amplitude A = 0.5 m; ω = 200/60 = 3.33 rad s⁻¹. v_max = Aω = 0.5 × 3.33 = <strong>1.67 m s⁻¹</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="o-force">13.6 Force Law for SHM</h2>
      <p>
        Using Newton&rsquo;s second law with the expression for the acceleration in SHM, the force on a particle of mass
        m is:
      </p>
      <FormulaBlock latex={String.raw`F(t) = m a = -m\omega^2 x(t) = -k x(t)`} important />
      <FormulaBlock latex={String.raw`k = m\omega^2,\qquad \omega = \sqrt{\frac{k}{m}}`} important />
      <p>
        Like acceleration, <Highlight>the force is always directed towards the mean position — it is a{" "}
        <strong>restoring force</strong></Highlight>.{" "}
        <Highlight>
          Simple harmonic motion can therefore be defined in two equivalent ways, by the displacement equation x(t) = A
          cos(ωt + φ) or by the force law F = −kx
        </Highlight>
        ; differentiating the displacement twice
        gives the force law, and integrating the force law twice recovers the displacement.
      </p>
      <p>
        Note that the force is linearly proportional to x(t); a particle oscillating under such a force is a{" "}
        <strong>linear harmonic oscillator</strong>. In the real world the force may contain small additional terms
        proportional to x², x³, etc. — these give non-linear oscillators.
      </p>
      <KeyPoint title="Spring–mass system">
        A particle of mass m attached to a spring of force constant k satisfying Hooke&rsquo;s law F = −kx executes SHM
        with angular frequency ω = √(k/m) and period T = 2π√(m/k). The period is independent of the amplitude.
      </KeyPoint>

      <Expandable variant="default" title="Example 13.7 — two springs attached to a block">
        <ProblemSolution.Problem>
          Two identical springs of spring constant k are attached to a block of mass m and to fixed supports on either
          side. Show that when the mass is displaced from its equilibrium position on either side, it executes simple
          harmonic motion. Find the period of oscillations.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Let the mass be displaced a small distance x to the right. The left spring is elongated by x and the right
            spring is compressed by x. The forces on the mass are:
          </p>
          <FormulaBlock latex={String.raw`F_1 = -kx\ \text{(left spring, pulling towards the mean position)},\qquad F_2 = -kx\ \text{(right spring, pushing towards the mean position)}`} />
          <p>
            The net force is F = −2kx: proportional to the displacement and directed towards the mean position, so the
            motion is simple harmonic. The period is:
          </p>
          <FormulaBlock latex={String.raw`\omega = \sqrt{\frac{2k}{m}},\qquad T = 2\pi\sqrt{\frac{m}{2k}}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <MistakeCard
        mistake="Assuming the period of a spring–mass or pendulum system depends on the amplitude or on how hard you start it."
        correction="For a given system the period is fixed: T = 2π√(m/k) for a spring of stiffness k and mass m, and T = 2π√(L/g) for a pendulum — independent of amplitude (for small angles) and of initial energy. This is why clocks work."
      />

      <Expandable variant="exercise" title="Exercises — force law and spring systems">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.6 — Which relation is SHM</h3>
        <ProblemSolution.Problem>
          Which of the following relationships between the acceleration a and the displacement x of a particle involve
          simple harmonic motion? (a) a = 0.7x; (b) a = −200x²; (c) a = −10x; (d) a = 100x³.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Only <strong>(c) a = −10x</strong> represents SHM: the acceleration is proportional in magnitude to the
            displacement and directed opposite to it (the signature a = −ω²x).
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.8 — Weight from spring-balance oscillations</h3>
        <ProblemSolution.Problem>
          A spring balance has a scale that reads from 0 to 50 kg. The length of the scale is 20 cm. A body suspended
          from this balance, when displaced and released, oscillates with a period of 0.6 s. What is the weight of the
          body?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Spring constant: k = (50 × 9.8)/(20 × 10⁻²) = <strong>2450 N m⁻¹</strong>. Mass: m = kT²/4π² = 2450 ×
            (0.6)²/(4π²) = 22.34 kg. Weight = mg = 22.34 × 9.8 = <strong>≈ 219 N</strong> (about 22.3 kg-weight).
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.13 — Spring clamped vs both ends free</h3>
        <ProblemSolution.Problem>
          Figure 13.21(a) shows a spring of force constant k clamped rigidly at one end with a mass m attached to the
          free end; a force F stretches the spring. Figure 13.21(b) shows the same spring with both ends free, attached
          to a mass m at either end, each end stretched by the same force F. (a) What is the maximum extension in the two
          cases? (b) If the mass in (a) and the two masses in (b) are released, what is the period of oscillation in each
          case?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) Case (a): F = kx ⟹ <strong>x = F/k</strong>. Case (b): the extension x is shared — the left force
            stretches each half by x/2 and the right force by another x/2, i.e. F = k(x/2) + k(x/2), so the total
            extension is also <strong>x = F/k</strong>.
          </p>
          <p>
            (b) Case (a): one end fixed, so the period is T₁ = <strong>2π√(m/k)</strong>. Case (b): the two masses
            oscillate about the stationary centre of the spring — each behaves like a mass m on a half-spring of
            constant 2k, so T₂ = <strong>2π√(m/2k)</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.17 — Cork floating in a liquid: SHM</h3>
        <ProblemSolution.Problem>
          A cylindrical piece of cork of density ρ, base area A and height h floats in a liquid of density ρ₁. The cork
          is depressed slightly and then released. Show that the cork oscillates up and down simple harmonically with a
          period T = 2π√(ρh/(ρ₁g)), where ρ is the density of the cork. Ignore damping due to the viscosity of the
          liquid.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Let the cork be displaced downward by a small distance x from equilibrium. The extra volume of liquid
            displaced is Ax, giving a restoring force (taking downward as positive):
          </p>
          <FormulaBlock latex={String.raw`\rho A h\,\frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -\rho_1 g A x\;\Longrightarrow\;\frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -\frac{\rho_1 g}{\rho h}\,x`} />
          <p>
            This has the form a = −ω²x with ω² = ρ₁g/(ρh), so the motion is SHM with period:
          </p>
          <FormulaBlock latex={String.raw`T = 2\pi\sqrt{\frac{\rho h}{\rho_1 g}}`} important />
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.18 — U-tube mercury executes SHM</h3>
        <ProblemSolution.Problem>
          One end of a U-tube containing mercury is connected to a suction pump and the other end to the atmosphere. A
          small pressure difference is maintained between the two columns. Show that, when the suction pump is removed,
          the column of mercury in the U-tube executes simple harmonic motion.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Let the height of each mercury column be h (total length 2h), the cross-sectional area A and the density ρ.
            If one column dips by a distance x, the level difference between the two columns is 2x, and the excess weight
            driving the column back to equilibrium is 2xAρg. The mass of the whole column is 2hAρ:
          </p>
          <FormulaBlock latex={String.raw`2hA\rho\,a = -2xA\rho g\;\Longrightarrow\;a = -\frac{g}{h}\,x`} />
          <p>
            The acceleration is proportional to the displacement and opposite in direction — the motion is SHM, with
            period:
          </p>
          <FormulaBlock latex={String.raw`T = 2\pi\sqrt{\frac{h}{g}}\qquad\left(= 2\pi\sqrt{\frac{L}{2g}}\ \text{with total length}\ L = 2h\right)`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="o-energy">13.7 Energy in SHM</h2>
      <p>
        Both kinetic and potential energies of a particle in SHM vary between zero and their maximum values, twice per
        period. The kinetic energy is:
      </p>
      <FormulaBlock latex={String.raw`K = \frac12 mv^2 = \frac12 m\omega^2 A^2 \sin^2(\omega t + \phi) = \frac12 kA^2 \sin^2(\omega t + \phi)`} />
      <p>
        It is zero when the displacement is maximum and maximum at the mean position. Since the sign of v is immaterial
        in K, the period of K is T/2.
      </p>
      <p>
        The spring force F = −kx is conservative, with associated potential energy U = ½kx². Hence:
      </p>
      <FormulaBlock latex={String.raw`U(x) = \frac12 k x^2 = \frac12 kA^2 \cos^2(\omega t + \phi)`} important />
      <p>
        The potential energy is also periodic with period T/2 — zero at the mean position and maximum at the extreme
        displacements. Summing the two:
      </p>
      <FormulaBlock latex={String.raw`E = U + K = \frac12 kA^2 \left[\cos^2(\omega t + \phi) + \sin^2(\omega t + \phi)\right] = \frac12 kA^2`} important />
      <p>
        <Highlight>The total mechanical energy of a harmonic oscillator is independent of time</Highlight>, as expected for any conservative
        force. Kinetic and potential energies are both always positive (PE by choice of the undetermined constant); both
        peak twice per period. <Highlight>At x = 0 the energy is all kinetic; at the extremes x = ±A it is all potential</Highlight>; in
        between, kinetic energy increases at the expense of potential energy or vice-versa.
      </p>

      <Expandable variant="default" title="Example 13.8 — kinetic, potential and total energy of a block">
        <ProblemSolution.Problem>
          A block of mass 1 kg is fastened to a spring of spring constant 50 N m⁻¹. The block is pulled to a distance x
          = 10 cm from its equilibrium position (x = 0) on a frictionless surface, from rest at t = 0. Calculate the
          kinetic, potential and total energies of the block when it is 5 cm away from the mean position.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The block executes SHM with angular frequency ω = √(k/m) = √(50/1) = 7.07 rad s⁻¹, and displacement x(t) =
            0.1 cos(7.07t). When the particle is 5 cm from the mean position, 0.05 = 0.1 cos(7.07t), so cos(7.07t) = 0.5
            and sin(7.07t) = √3/2 = 0.866. The velocity is:
          </p>
          <FormulaBlock latex={String.raw`v = \omega A\sin(\omega t) = 0.1 \times 7.07 \times 0.866 = 0.61\ \text{m s}^{-1}`} />
          <p>
            Kinetic energy = ½mv² = ½[1 kg × (0.6123 m s⁻¹)²] = <strong>0.19 J</strong>.
          </p>
          <p>
            Potential energy = ½kx² = ½(50 N m⁻¹)(0.05 m)(0.05 m) = <strong>0.0625 J</strong>.
          </p>
          <p>
            Total energy = KE + PE = <strong>0.25 J</strong>. Check: at maximum displacement KE is zero, so total =
            ½kA² = ½(50)(0.1 m)(0.1 m) = 0.25 J — the same value, in conformity with the conservation of energy.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <MistakeCard
        mistake="Believing the kinetic and potential energies in SHM oscillate with the full period T, or that total energy varies with time."
        correction="K ∝ sin² and U ∝ cos², so both repeat after T/2 AND are always positive; the total mechanical energy E = K + U = ½kA² is constant at every instant (conservative system)."
      />

      <h2 id="o-pendulum">13.8 The Simple Pendulum</h2>
      <p>
        Galileo measured the periods of a swinging chandelier in a church by his pulse beats. A simple pendulum is a
        small bob of mass m tied to an inextensible massless string of length L, the other end fixed to a rigid support,
        oscillating in a plane about the vertical line through the support.
      </p>
      <p>
        Let θ be the angle the string makes with the vertical (θ = 0 at the mean position). Two forces act on the bob:
        the tension T along the string and the weight mg vertically. Resolving mg: the component mg cosθ along the string
        combines with T to provide the radial (centripetal) acceleration ω²L, while the tangential component mg sinθ
        provides the tangential acceleration. Working with torque about the support is convenient, since the radial
        force gives zero torque:
      </p>
      <FormulaBlock latex={String.raw`\tau = -L (mg \sin\theta)`} />
      <p>
        This is the restoring torque that tends to reduce the angular displacement — hence the negative sign. By
        Newton&rsquo;s law of rotational motion, τ = Iα with I the moment of inertia about the support:
      </p>
      <FormulaBlock latex={String.raw`I\alpha = -mgL\sin\theta,\qquad \alpha = -\frac{mgL}{I}\sin\theta`} />
      <p>
        <Highlight>For small displacements, sinθ ≈ θ (in radians)</Highlight>:
      </p>
      <FormulaBlock latex={String.raw`\sin\theta = \theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \dots`} />
      <TableCard
        caption="Table 13.1 — sin θ as a function of angle θ"
        headers={["θ (degrees)", "θ (radians)", "sin θ"]}
        rows={[
          { cells: ["0", "0", "0"] },
          { cells: ["5", "0.087", "0.087"] },
          { cells: ["10", "0.174", "0.174"] },
          { cells: ["15", "0.262", "0.259"] },
          { cells: ["20", "0.349", "0.342"] },
        ]}
      />
      <p>
        For θ as large as 20°, sinθ is nearly the same as θ in radians. Thus α = −(mgL/I)θ, which is mathematically
        identical to the SHM equation with an angular displacement variable — <Highlight>the motion is simple harmonic for small θ</Highlight>.
      </p>
      <FormulaBlock latex={String.raw`\omega = \sqrt{\frac{mgL}{I}},\qquad T = 2\pi\sqrt{\frac{I}{mgL}}`} />
      <p>
        Since the string is massless, I = mL², giving the well-known formula:
      </p>
      <FormulaBlock latex={String.raw`T = 2\pi\sqrt{\frac{L}{g}}`} important />
      <KeyPoint title="What the period of a simple pendulum does NOT depend on">
        The period of a simple pendulum depends on its length and g — but not on the mass of the bob and (for small
        angles) not on the amplitude. This is why a pendulum is the heart of a clock: its period is a reliable constant.
      </KeyPoint>

      <Expandable variant="default" title="Example 13.9 — length of a seconds pendulum">
        <ProblemSolution.Problem>
          What is the length of a simple pendulum which ticks seconds?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            From T = 2π√(L/g), the length is L = gT²/4π². A pendulum that ticks seconds has T = 2 s. For g = 9.8 m s⁻²
            and T = 2 s:
          </p>
          <FormulaBlock latex={String.raw`L = \frac{9.8 \times 4}{4\pi^2} = 1\ \text{m}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercises — the simple pendulum">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.15 — Period of a pendulum on the Moon</h3>
        <ProblemSolution.Problem>
          The acceleration due to gravity on the surface of the Moon is 1.7 m s⁻². What is the time period of a simple
          pendulum on the Moon if its period on the surface of the Earth is 3.5 s? (g on Earth = 9.8 m s⁻².)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            T ∝ 1/√g, so T_moon = T_earth × √(g_earth/g_moon) = 3.5 × √(9.8/1.7) = <strong>8.4 s</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">13.16 — Pendulum in a car on a circular track</h3>
        <ProblemSolution.Problem>
          A simple pendulum of length l with a bob of mass M is suspended in a car. The car moves on a circular track of
          radius R with a uniform speed v. If the pendulum makes small oscillations in a radial direction about its
          equilibrium position, what will be its time period?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            In the car&rsquo;s frame the bob experiences, besides g downwards, a pseudo-acceleration v²/R radially
            outward. The effective acceleration is:
          </p>
          <FormulaBlock latex={String.raw`g' = \sqrt{g^2 + \left(\frac{v^2}{R}\right)^2}`} />
          <FormulaBlock latex={String.raw`T = 2\pi\sqrt{\frac{l}{g'}} = 2\pi\sqrt{\frac{l}{\sqrt{g^2 + \dfrac{v^4}{R^2}}}}`} important />
        </ProblemSolution.Solution>
      </Expandable>

    </>
  );
}