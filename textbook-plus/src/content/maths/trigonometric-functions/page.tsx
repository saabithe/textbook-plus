import { Callout } from "@/components/content/Callout";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { FormulaCard } from "@/components/content/FormulaCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { UnitCircle } from "@/components/content/maths/UnitCircle";
import { FunctionGraph } from "@/components/content/maths/FunctionGraph";

const TAU = Math.PI * 2;
const TRIG_XTICKS = [
  { at: -TAU, label: "−2π" },
  { at: -Math.PI, label: "−π" },
  { at: Math.PI, label: "π" },
  { at: TAU, label: "2π" },
];
const HALF_YTICKS = [
  { at: -1, label: "−1" },
  { at: 1, label: "1" },
];

export default function TrigonometricFunctionsChapter() {
  return (
    <>
      <h2 id="h-intro">3.1 Introduction</h2>
      <Callout type="important" title="The Idea">
        Earlier classes treated trigonometry as <strong>ratios of sides</strong> of right triangles.
        This chapter generalises them to <strong>trigonometric functions of real numbers</strong>{" "}
        using the unit circle — the same sin, cos, tan, but now defined for every real input.
      </Callout>

      <h2 id="h-3-2">3.2 Angles</h2>
      <Callout type="important" title="Definition: Angle">
        An <strong>angle</strong> is the measure of rotation of a ray about its initial point. The
        original ray is the <strong>initial side</strong>, the final position is the{" "}
        <strong>terminal side</strong>, and the point of rotation is the{" "}
        <strong>vertex</strong>. <Highlight>Anticlockwise rotation gives a <em>positive</em>{" "}
        angle; clockwise gives a <em>negative</em> angle</Highlight>.
      </Callout>

      <p>
        <strong>Degree measure.</strong> One degree (1°) is 1/360 of a complete revolution. A
        degree splits into minutes, a minute into seconds:
      </p>
      <FormulaBlock latex={String.raw`1^{\circ} = 60', \qquad 1' = 60''`} />

      <p>
        <strong>Radian measure.</strong> The angle subtended at the centre by an arc of length 1
        unit in a unit circle is <strong>1 radian</strong>. One full revolution subtends 2π
        radians. In general, an arc of length l in a circle of radius r subtends angle θ where:
      </p>
      <FormulaBlock latex={String.raw`\theta = \frac{l}{r} \qquad \text{or equivalently} \qquad l = r\,\theta`} important />

      <p>
        <strong>Degree ↔ radian.</strong> One revolution is both 360° and 2π radians, so:
      </p>
      <FormulaBlock latex={String.raw`\pi \text{ radian} = 180^{\circ}`} important />
      <FormulaBlock latex={String.raw`1 \text{ radian} = \frac{180^{\circ}}{\pi} \approx 57^{\circ}\,16' \qquad\qquad 1^{\circ} = \frac{\pi}{180} \text{ radian} \approx 0.01746 \text{ radian}`} />

      <table>
        <thead>
          <tr>
            <th>Degree</th>
            <th>30°</th>
            <th>45°</th>
            <th>60°</th>
            <th>90°</th>
            <th>180°</th>
            <th>270°</th>
            <th>360°</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Radian</td>
            <td>π/6</td>
            <td>π/4</td>
            <td>π/3</td>
            <td>π/2</td>
            <td>π</td>
            <td>3π/2</td>
            <td>2π</td>
          </tr>
        </tbody>
      </table>

      <Expandable id="h-examples-3-2" title="Examples 1 to 5">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>Convert 40° 20′ into radian measure.</ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`40^{\circ}20' = 40\tfrac{1}{3}^{\circ} = \frac{\pi}{180} \times \frac{121}{3} = \frac{121\pi}{540} \text{ radian}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>Convert 6 radians into degree measure.</ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Using π ≈ 22/7:</p>
            <FormulaBlock latex={String.raw`6 = \frac{180}{\pi} \times 6 = \frac{1080 \times 7}{22} = 343\tfrac{7}{11}^{\circ}`} />
            <p>
              The fraction 7/11 of a degree × 60 = 38 2/11 minutes; and 2/11 of a minute × 60 =
              10.9 seconds. Hence 6 radians ≈ <strong>343° 38′ 11″</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            Find the radius of the circle in which a central angle of 60° intercepts an arc of
            length 37.4 cm. (use π = 22/7)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Convert first: θ = 60° = π/3 radian. Then l = rθ gives</p>
            <FormulaBlock latex={String.raw`r = \frac{l}{\theta} = \frac{37.4 \times 3}{22/7} = 35.7 \text{ cm}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            The minute hand of a watch is 1.5 cm long. How far does its tip move in 40 minutes?
            (use π = 3.14)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              In 60 minutes the hand completes one revolution, so in 40 minutes it turns through
              2/3 of a revolution: θ = (2/3) × 2π = 4π/3 radian.
            </p>
            <FormulaBlock latex={String.raw`l = r\theta = 1.5 \times \frac{4\pi}{3} = 2\pi = 2 \times 3.14 = 6.28 \text{ cm}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            If arcs of the same lengths in two circles subtend angles 65° and 110° at the centre,
            find the ratio of their radii.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              θ₁ = 65° = 13π/36 and θ₂ = 110° = 22π/36. Equal arcs: l = r₁θ₁ = r₂θ₂, so
            </p>
            <FormulaBlock latex={String.raw`\frac{r_1}{r_2} = \frac{\theta_2}{\theta_1} = \frac{22}{13} \;\;\Rightarrow\;\; r_1 : r_2 = 22 : 13`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Cancel Before You Multiply">
          240° → 240 × π/180: reduce 240/180 = 4/3 first, answer 4π/3 in one line. Full table of
          common angles follows from π/6 steps — never recompute from scratch.
        </Callout>
        <Callout type="tip" title="Radians Rule Everything">
          In l = rθ (and everywhere later in calculus), θ <Highlight>must be in radians</Highlight>.
          See degrees? Convert first, every single time.
        </Callout>
        <Callout type="tip" title="Revolution Bridge">
          revolutions × 2π = radians. A wheel doing 360 rev/min does 6 rev/s ={" "}
          <strong>12π rad/s</strong> — no formula crunching needed.
        </Callout>
        <Callout type="tip" title="Decimal Degrees to Minutes Fast">
          0.1° = 6′ and 0.01° = 36″. So 39.375° = 39° + 0.375×60′ = 39° 22.5′ ={" "}
          <strong>39° 22′ 30″</strong> mentally.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-exercise-3-1" title="Exercise 3.1">
        <ol>
          <li>
            Find the radian measures corresponding to the following degree measures:
            <ul>
              <li>(i) 25°</li>
              <li>(ii) –47°30′</li>
              <li>(iii) 240°</li>
              <li>(iv) 520°</li>
            </ul>
          </li>
          <li>
            Find the degree measures corresponding to the following radian measures (use π =
            22/7):
            <ul>
              <li>(i) 11/16</li>
              <li>(ii) –4</li>
              <li>(iii) 5π/3</li>
              <li>(iv) 7π/6</li>
            </ul>
          </li>
          <li>A wheel makes 360 revolutions in one minute. Through how many radians does it turn in one second?</li>
          <li>
            Find the degree measure of the angle subtended at the centre of a circle of radius 100
            cm by an arc of length 22 cm (use π = 22/7).
          </li>
          <li>In a circle of diameter 40 cm, the length of a chord is 20 cm. Find the length of minor arc of the chord.</li>
          <li>If in two circles, arcs of the same length subtend angles 60° and 75° at the centre, find the ratio of their radii.</li>
          <li>
            Find the angle in radian through which a pendulum swings if its length is 75 cm and
            the tip describes an arc of length:
            <ul>
              <li>(i) 10 cm</li>
              <li>(ii) 15 cm</li>
              <li>(iii) 21 cm</li>
            </ul>
          </li>
        </ol>
        <Expandable title="Answer Key — Exercise 3.1">
          <ol>
            <li>(i) 5π/36 (ii) –19π/72 (iii) 4π/3 (iv) 26π/9</li>
            <li>(i) 39° 22′ 30″ (ii) –229° 5′ 27″ approx (iii) 300° (iv) 210°</li>
            <li>360 rev/min = 6 rev/s ⇒ 6 × 2π = 12π radian per second.</li>
            <li>θ = 22/100 = 0.22 rad = 0.22 × 180×7/22 = 12.6° = 12° 36′.</li>
            <li>Chord = radius ⇒ equilateral triangle ⇒ θ = 60° = π/3; l = 20 × π/3 = 20π/3 cm.</li>
            <li>Same arc length: r₁θ₁ = r₂θ₂ ⇒ r₁/r₂ = 75/60 ⇒ r₁ : r₂ = 5 : 4.</li>
            <li>θ = l/75: (i) 2/15 radian (ii) 1/5 radian (iii) 7/25 radian.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-3-3">3.3 Trigonometric Functions</h2>
      <p>
        Take a unit circle centred at the origin. Let P(a, b) be any point on it with ∠AOP = x
        radian (the arc AP has length x):
      </p>
      <div className="grid items-center gap-4 sm:grid-cols-2">
        <div>
          <UnitCircle angle={1} caption="P(a, b) on the unit circle with ∠AOP = x" />
        </div>
        <div>
          <FormulaBlock latex={String.raw`\cos x = a \qquad \sin x = b`} important />
          <p>
            Since △OMP is right-angled, OM² + MP² = OP² gives a² + b² = 1 for every point of the
            circle:
          </p>
          <FormulaBlock latex={String.raw`\cos^2 x + \sin^2 x = 1`} important />
        </div>
      </div>

      <p>
        <strong>Quadrantal angles</strong> (integral multiples of π/2) come straight from the four
        compass points A(1, 0), B(0, 1), C(−1, 0), D(0, −1):
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>0</th>
            <th>π/2</th>
            <th>π</th>
            <th>3π/2</th>
            <th>2π</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sin x</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>–1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>cos x</td>
            <td>1</td>
            <td>0</td>
            <td>–1</td>
            <td>0</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <p>
        One full revolution returns P to itself, so sine and cosine repeat every 2π:
      </p>
      <FormulaBlock latex={String.raw`\sin(2n\pi + x) = \sin x \quad\text{and}\quad \cos(2n\pi + x) = \cos x, \qquad n \in \mathbb{Z}`} important />
      <FormulaBlock latex={String.raw`\sin x = 0 \iff x = n\pi \qquad\qquad \cos x = 0 \iff x = (2n+1)\frac{\pi}{2}, \quad n \in \mathbb{Z}`} important />

      <p>The other four functions are built from these two:</p>
      <FormulaCard>
        <p className="font-semibold mb-2">Definitions and Where They Break</p>
        <FormulaBlock latex={String.raw`\mathrm{cosec}\,x = \frac{1}{\sin x}, \quad x \neq n\pi`} />
        <FormulaBlock latex={String.raw`\sec x = \frac{1}{\cos x}, \quad x \neq (2n+1)\frac{\pi}{2}`} />
        <FormulaBlock latex={String.raw`\tan x = \frac{\sin x}{\cos x}, \quad x \neq (2n+1)\frac{\pi}{2}`} />
        <FormulaBlock latex={String.raw`\cot x = \frac{\cos x}{\sin x}, \quad x \neq n\pi`} />
      </FormulaCard>
      <p>Dividing sin²x + cos²x = 1 by sin²x or cos²x gives the other two Pythagorean identities:</p>
      <FormulaBlock latex={String.raw`1 + \tan^2 x = \sec^2 x \qquad\qquad 1 + \cot^2 x = \mathrm{cosec}^2 x`} important />

      <p>
        <strong>Standard values.</strong> Same as the old ratios — now valid for all real inputs,
        extended periodically:
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>0</th>
            <th>π/6</th>
            <th>π/4</th>
            <th>π/3</th>
            <th>π/2</th>
            <th>π</th>
            <th>3π/2</th>
            <th>2π</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sin x</td>
            <td>0</td>
            <td>1/2</td>
            <td>1/√2</td>
            <td>√3/2</td>
            <td>1</td>
            <td>0</td>
            <td>–1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>cos x</td>
            <td>1</td>
            <td>√3/2</td>
            <td>1/√2</td>
            <td>1/2</td>
            <td>0</td>
            <td>–1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>tan x</td>
            <td>0</td>
            <td>1/√3</td>
            <td>1</td>
            <td>√3</td>
            <td>n.d.</td>
            <td>0</td>
            <td>n.d.</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <p>cosec, sec, cot take reciprocals of these — wherever the base value is 0, they are not defined.</p>

      <h3 id="h-3-3-1">3.3.1 Sign of Trigonometric Functions</h3>
      <p>
        Mark P(a, b) on the unit circle at angle x. Reflecting P across the x-axis keeps the
        x-coordinate and negates the y-coordinate — so the reflected point sits at angle −x with
        coordinates (a, −b):
      </p>
      <FormulaBlock latex={String.raw`P(x) = (a,\, b) \qquad\qquad P(-x) = (a,\, -b)`} />
      <p>
        Now read each function from the two points. Cosine reads the x-coordinate — and both
        points share the same a. Therefore:
      </p>
      <FormulaBlock latex={String.raw`\cos(-x) = a = \cos x \quad\Longrightarrow\quad \boxed{\cos(-x) = \cos x}`} important />
      <p>
        Sine reads the y-coordinate — and reflection flipped b to −b. But:
      </p>
      <FormulaBlock latex={String.raw`\sin(-x) = -b = -\sin x \quad\Longrightarrow\quad \boxed{\sin(-x) = -\sin x}`} important />
      <KeyPoint title="Cosine Is Even, Sine Is Odd">
        <strong>cos(−x) = cos x</strong> — cosine treats x and −x identically: it is an{" "}
        <strong>even</strong> function. <strong>sin(−x) = −sin x</strong> — sine flips sign with
        the angle: it is an <strong>odd</strong> function. Both satisfy −1 ≤ value ≤ 1 everywhere.
      </KeyPoint>
      <p>Quadrant-wise signs follow from the signs of a and b:</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>I</th>
            <th>II</th>
            <th>III</th>
            <th>IV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sin x</td>
            <td>+</td>
            <td>+</td>
            <td>–</td>
            <td>–</td>
          </tr>
          <tr>
            <td>cos x</td>
            <td>+</td>
            <td>–</td>
            <td>–</td>
            <td>+</td>
          </tr>
          <tr>
            <td>tan x</td>
            <td>+</td>
            <td>–</td>
            <td>+</td>
            <td>–</td>
          </tr>
          <tr>
            <td>cosec x</td>
            <td>+</td>
            <td>+</td>
            <td>–</td>
            <td>–</td>
          </tr>
          <tr>
            <td>sec x</td>
            <td>+</td>
            <td>–</td>
            <td>–</td>
            <td>+</td>
          </tr>
          <tr>
            <td>cot x</td>
            <td>+</td>
            <td>–</td>
            <td>+</td>
            <td>–</td>
          </tr>
        </tbody>
      </table>
      <p>
        <Highlight>Each reciprocal inherits the sign of its base function</Highlight>, so the
        whole table collapses to three rows: sin-row (+ + – –), cos-row (+ – – +), tan-row
        (+ – + –).
      </p>

      <h3 id="h-3-3-2">3.3.2 Domain and Range of Trigonometric Functions</h3>
      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Domain</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>y = sin x</td>
            <td>ℝ</td>
            <td>[–1, 1]</td>
          </tr>
          <tr>
            <td>y = cos x</td>
            <td>ℝ</td>
            <td>[–1, 1]</td>
          </tr>
          <tr>
            <td>y = cosec x</td>
            <td>{"{x ∈ ℝ : x ≠ nπ}"}</td>
            <td>(–∞, –1] ∪ [1, ∞)</td>
          </tr>
          <tr>
            <td>y = sec x</td>
            <td>{"{x ∈ ℝ : x ≠ (2n+1)π/2}"}</td>
            <td>(–∞, –1] ∪ [1, ∞)</td>
          </tr>
          <tr>
            <td>y = tan x</td>
            <td>{"{x ∈ ℝ : x ≠ (2n+1)π/2}"}</td>
            <td>ℝ</td>
          </tr>
          <tr>
            <td>y = cot x</td>
            <td>{"{x ∈ ℝ : x ≠ nπ}"}</td>
            <td>ℝ</td>
          </tr>
        </tbody>
      </table>

      <p>Behaviour inside each quadrant — quadrant-wise signs follow from the signs of a and b:</p>
      <div className="my-6 rounded-xl border border-border/60 overflow-hidden">
        {/* ASTC mnemonic strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border/40 bg-muted/30 border-b border-border/40">
          {[
            { q: "I", letter: "A", label: "All positive" },
            { q: "II", letter: "S", label: "Sin (+ cosec)" },
            { q: "III", letter: "T", label: "Tan (+ cot)" },
            { q: "IV", letter: "C", label: "Cos (+ sec)" },
          ].map((cell) => (
            <div key={cell.q} className="flex items-center gap-3 px-4 py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                {cell.letter}
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Quadrant {cell.q}
                </span>
                <span className="block text-sm font-medium truncate">{cell.label}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Sign matrix */}
        <table>
          <thead>
            <tr>
              <th></th>
              <th>I</th>
              <th>II</th>
              <th>III</th>
              <th>IV</th>
            </tr>
          </thead>
          <tbody>
            {[
              { fn: "sin x", signs: ["+", "+", "–", "–"] },
              { fn: "cos x", signs: ["+", "–", "–", "+"] },
              { fn: "tan x", signs: ["+", "–", "+", "–"] },
              { fn: "cosec x", signs: ["+", "+", "–", "–"] },
              { fn: "sec x", signs: ["+", "–", "–", "+"] },
              { fn: "cot x", signs: ["+", "–", "+", "–"] },
            ].map((row, ri) => (
              <tr key={row.fn} className={ri === 3 ? "border-t-2 border-t-border/60" : undefined}>
                <td className="font-medium">{row.fn}</td>
                {row.signs.map((s, qi) => (
                  <td key={qi} className="text-center">
                    <span
                      className={
                        s === "+"
                          ? "inline-flex h-6 w-6 items-center justify-center rounded-md bg-green-500/15 text-sm font-bold text-green-700 dark:text-green-400"
                          : "inline-flex h-6 w-6 items-center justify-center rounded-md bg-red-500/10 text-sm font-bold text-red-600 dark:text-red-400"
                      }
                    >
                      {s}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p className="px-5 py-3 text-sm text-muted-foreground border-t border-border/40">
          Each reciprocal inherits the sign of its base function, so the whole table collapses to
          three rows: <strong>sin-row (+ + – –)</strong>, <strong>cos-row (+ – – +)</strong>,{" "}
          <strong>tan-row (+ – + –)</strong>.
        </p>
      </div>
      <KeyPoint title="Reading ∞ Correctly">
        &ldquo;tan x increases from 0 to ∞&rdquo; means tan x keeps growing and takes arbitrarily
        large values as x approaches π/2. The symbols ∞, –∞ describe behaviour — they are not
        values the function attains.
      </KeyPoint>

      <p>Periodicity decides the graph shapes: sin, cos, cosec, sec repeat every 2π; tan, cot every π.</p>
      <div className="grid gap-x-6 gap-y-0 sm:grid-cols-2">
        <FunctionGraph
          curves={[{ fn: Math.sin, from: -TAU, to: TAU }]}
          xTicks={TRIG_XTICKS}
          yTicks={HALF_YTICKS}
          xMin={-6.8}
          xMax={6.8}
          yMin={-1.7}
          yMax={1.7}
          caption="y = sin x — odd, period 2π"
        />
        <FunctionGraph
          curves={[{ fn: Math.cos, from: -TAU, to: TAU }]}
          xTicks={TRIG_XTICKS}
          yTicks={HALF_YTICKS}
          xMin={-6.8}
          xMax={6.8}
          yMin={-1.7}
          yMax={1.7}
          caption="y = cos x — even, period 2π"
        />
        <FunctionGraph
          curves={[{ fn: Math.tan, from: -6.8, to: 6.8 }]}
          vlines={[
            -3 * Math.PI / 2,
            -Math.PI / 2,
            Math.PI / 2,
            3 * Math.PI / 2,
          ]}
          xTicks={TRIG_XTICKS}
          xMin={-6.8}
          xMax={6.8}
          yMin={-5}
          yMax={5}
          caption="y = tan x — branches at odd multiples of π/2, period π"
        />
        <FunctionGraph
          curves={[{ fn: (x) => 1 / Math.tan(x), from: -6.8, to: 6.8 }]}
          vlines={[-TAU, -Math.PI, 0, Math.PI, TAU]}
          xTicks={TRIG_XTICKS}
          xMin={-6.8}
          xMax={6.8}
          yMin={-5}
          yMax={5}
          caption="y = cot x — branches at multiples of π, period π"
        />
        <FunctionGraph
          curves={[{ fn: (x) => 1 / Math.cos(x), from: -6.8, to: 6.8 }]}
          vlines={[
            -3 * Math.PI / 2,
            -Math.PI / 2,
            Math.PI / 2,
            3 * Math.PI / 2,
          ]}
          xTicks={TRIG_XTICKS}
          xMin={-6.8}
          xMax={6.8}
          yMin={-5}
          yMax={5}
          caption="y = sec x — touches ±1 at turning points, period 2π"
        />
        <FunctionGraph
          curves={[{ fn: (x) => 1 / Math.sin(x), from: -6.8, to: 6.8 }]}
          vlines={[-TAU, -Math.PI, 0, Math.PI, TAU]}
          xTicks={TRIG_XTICKS}
          xMin={-6.8}
          xMax={6.8}
          yMin={-5}
          yMax={5}
          caption="y = cosec x — touches ±1 at turning points, period 2π"
        />
      </div>

      <SpeedTricks>
        <Callout type="tip" title="ASTC — Add Sugar To Coffee">
          Quadrant <strong>I</strong>: <strong>A</strong>ll positive. <strong>II</strong>: only{" "}
          <strong>S</strong>in (and cosec). <strong>III</strong>: only <strong>T</strong>an (and
          cot). <strong>IV</strong>: only <strong>C</strong>os (and sec). Reciprocals always
          inherit their base function&rsquo;s sign.
        </Callout>
        <Callout type="tip" title="Rebuild, Don't Recall">
          Given cos x = –3/5 in QIII: sketch the 3-4-5 triangle, then attach signs by quadrant.
          sin x = –4/5, tan x = 4/3 — zero memorisation, zero slips.
        </Callout>
        <Callout type="tip" title="Strip First, Evaluate Second">
          Big angle? Remove full turns: sin(31π/3) = sin(31π/3 – 10π) = sin(π/3) = √3/2. In
          degrees, shed multiples of 360° the same way.
        </Callout>
        <Callout type="tip" title="Domain Split in One Glance">
          tan dies exactly where cos dies ((2n+1)π/2); cot dies exactly where sin dies (nπ).
          Range shortcuts: |sin|, |cos| ≤ 1 forces |cosec|, |sec| ≥ 1; tan, cot hit everything.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-examples-3-3" title="Examples 6 to 9">
        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            If cos x = –3/5, x lies in the third quadrant, find the values of the other five
            trigonometric functions.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Immediately sec x = –5/3. From sin²x = 1 – 9/25 = 16/25,</p>
            <FormulaBlock latex={String.raw`\sin x = \pm\frac{4}{5}`} />
            <p>
              Third quadrant ⇒ sine negative: sin x = –4/5, cosec x = –5/4. Then
              tan x = sin x / cos x = (–4/5)/(–3/5) = <strong>4/3</strong> and cot x ={" "}
              <strong>3/4</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            If cot x = –5/12, x lies in the second quadrant, find the values of the other five
            trigonometric functions.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>tan x = –12/5. Then sec²x = 1 + 144/25 = 169/25 gives sec x = ±13/5;</p>
            <p>
              second quadrant ⇒ sec negative: sec x = –13/5, cos x = –5/13. Now sin x = tan x ·
              cos x = (–12/5)(–5/13) = <strong>12/13</strong>, so cosec x ={" "}
              <strong>13/12</strong>.
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>Find the value of sin 31π/3.</ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\sin\frac{31\pi}{3} = \sin\left(10\pi + \frac{\pi}{3}\right) = \sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>Find the value of cos (–1710°).</ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\cos(-1710^{\circ}) = \cos(-1710^{\circ} + 5 \times 360^{\circ}) = \cos 90^{\circ} = 0`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-exercise-3-2" title="Exercise 3.2">
        <p className="font-semibold">Find the values of the other five trigonometric functions in Exercises 1 to 5.</p>
        <ol start={1}>
          <li>cos x = –1/2, x lies in third quadrant.</li>
          <li>sin x = 3/5, x lies in second quadrant.</li>
          <li>cot x = 3/4, x lies in third quadrant.</li>
          <li>sec x = 13/5, x lies in fourth quadrant.</li>
          <li>tan x = –5/12, x lies in second quadrant.</li>
        </ol>
        <p className="font-semibold mt-3">Find the values of the trigonometric functions in Exercises 6 to 10.</p>
        <ol start={6}>
          <li>sin 765°</li>
          <li>cosec (–1410°)</li>
          <li>tan 19π/3</li>
          <li>sin (–11π/3)</li>
          <li>cot (–15π/4)</li>
        </ol>
        <Expandable title="Answer Key — Exercise 3.2">
          <ol>
            <li>sin x = –√3/2, tan x = √3, sec x = –2, cosec x = –2/√3, cot x = 1/√3.</li>
            <li>cos x = –4/5, tan x = –3/4, cosec x = 5/3, sec x = –5/4, cot x = –4/3.</li>
            <li>tan x = 4/3, sin x = –4/5, cos x = –3/5, cosec x = –5/4, sec x = –5/3.</li>
            <li>cos x = 5/13, sin x = –12/13, tan x = –12/5, cosec x = –13/12, cot x = –5/12.</li>
            <li>sin x = 5/13, cos x = –12/13, cosec x = 13/5, sec x = –13/12, cot x = –12/5.</li>
            <li>sin 765° = sin 45° = 1/√2.</li>
            <li>cosec(–1410°) = cosec 30° = 2.</li>
            <li>tan 19π/3 = tan(6π + π/3) = √3.</li>
            <li>sin(–11π/3) = –sin(11π/3 – 2π) = –sin(5π/3) = √3/2.</li>
            <li>cot(–15π/4) = cot(–15π/4 + 4π) = cot(π/4) = 1.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-3-4">3.4 Trigonometric Functions of Sum and Difference of Two Angles</h2>
      <p>
        Two facts we already own: sin(–x) = –sin x and cos(–x) = cos x. From the unit circle,
        <Highlight>four addition formulas generate everything else in this chapter</Highlight>.
      </p>
      <FormulaCard>
        <p className="font-semibold mb-2">The Four Addition Formulas</p>
        <FormulaBlock latex={String.raw`\cos(x + y) = \cos x \cos y - \sin x \sin y`} important />
        <FormulaBlock latex={String.raw`\cos(x - y) = \cos x \cos y + \sin x \sin y`} important />
        <FormulaBlock latex={String.raw`\sin(x + y) = \sin x \cos y + \cos x \sin y`} important />
        <FormulaBlock latex={String.raw`\sin(x - y) = \sin x \cos y - \cos x \sin y`} important />
      </FormulaCard>
      <Callout type="important" title="Hard-Level Tips">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Sign discipline.</strong> For the sine pair the middle sign mirrors the
            angle: sin(x + y) takes a plus, sin(x − y) takes a minus. Cosine does the opposite —
            cos(x + y) is the formula that takes the minus. When in doubt, re-derive cos(x − y)
            from cos(x + y) by substituting −y and using cos(−y) = cos y, sin(−y) = −sin y.
          </li>
          <li>
            <strong>The tan(x + y) trap.</strong> The denominator 1 − tan x tan y vanishes when
            x + y = π/2, so the formula is undefined exactly where exams love to place the
            angles. If tan x tan y = 1, switch to the sine/cosine forms (or complementary
            angles) instead of forcing the tangent formula.
          </li>
          <li>
            <strong>π/2 swaps, π does not.</strong> In the shifted-angle family, shifts by π/2
            (and 3π/2) force a sin ↔ cos swap, while shifts by π (and 2π) keep the same
            function. Fix the function first, then read the sign off the quadrant of the
            resulting angle.
          </li>
        </ul>
      </Callout>

      <p>Substituting special angles produces the shifted-angle family:</p>
      <FormulaBlock
        latex={String.raw`\begin{aligned} \cos\left(\tfrac{\pi}{2} - x\right) &= \sin x & \sin\left(\tfrac{\pi}{2} - x\right) &= \cos x \ \cos\left(\tfrac{\pi}{2} + x\right) &= -\sin x & \sin\left(\tfrac{\pi}{2} + x\right) &= \cos x \ \cos(\pi - x) &= -\cos x & \sin(\pi - x) &= \sin x \ \cos(\pi + x) &= -\cos x & \sin(\pi + x) &= -\sin x \ \cos(2\pi - x) &= \cos x & \sin(2\pi - x) &= -\sin x \end{aligned}`}
        important
      />

      <p>
        Dividing the sine formula by the cosine formula (divide top and bottom by cos x cos y)
        gives the tangent pair — valid when none of x, y, (x±y) is an odd multiple of π/2:
      </p>
      <FormulaCard>
        <p className="font-semibold mb-2">Tangent and Cotangent Sums</p>
        <FormulaBlock latex={String.raw`\tan(x + y) = \frac{\tan x + \tan y}{1 - \tan x \tan y}`} important />
        <FormulaBlock latex={String.raw`\tan(x - y) = \frac{\tan x - \tan y}{1 + \tan x \tan y}`} important />
        <FormulaBlock
          latex={String.raw`\cot(x + y) = \frac{\cot x \cot y - 1}{\cot x + \cot y} \qquad \cot(x - y) = \frac{\cot x \cot y + 1}{\cot y - \cot x}`}
        />
        <p className="mt-2 text-sm text-muted-foreground">
          cot versions require none of x, y, (x±y) to be a multiple of π.
        </p>
      </FormulaCard>

      <p>Setting y = x in the addition formulas gives the double-angle family:</p>
      <FormulaCard>
        <p className="font-semibold mb-2">Double Angle Formulas</p>
        <FormulaBlock
          latex={String.raw`\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x = \frac{1 - \tan^2 x}{1 + \tan^2 x}`}
          important
        />
        <FormulaBlock latex={String.raw`\sin 2x = 2\sin x \cos x = \frac{2\tan x}{1 + \tan^2 x}`} important />
        <FormulaBlock latex={String.raw`\tan 2x = \frac{2\tan x}{1 - \tan^2 x}`} important />
        <Expandable title="Derivation — try it yourself before expanding">
          <p>
            Every formula here is just an addition formula with <strong>y = x</strong>. Cosine:
          </p>
          <FormulaBlock latex={String.raw`\cos 2x = \cos(x + x) = \cos x\cos x - \sin x\sin x = \cos^2 x - \sin^2 x`} />
          <p>
            Apply sin²x + cos²x = 1 once replacing sin²x, once replacing cos²x:
          </p>
          <FormulaBlock latex={String.raw`\cos^2 x - (1 - \cos^2 x) = 2\cos^2 x - 1 \qquad\qquad (1-\sin^2 x) - \sin^2 x = 1 - 2\sin^2 x`} />
          <p>
            For the tangent form, divide the numerator and denominator of (
            cos²x − sin²x)/(sin²x + cos²x) = 1 by cos²x:
          </p>
          <FormulaBlock latex={String.raw`1 = \frac{\cos^2 x - \sin^2 x}{\cos^2 x + \sin^2 x} = \frac{1 - \tan^2 x}{1 + \tan^2 x}`} />
          <p>Sine works identically:</p>
          <FormulaBlock latex={String.raw`\sin 2x = \sin x\cos x + \cos x\sin x = 2\sin x\cos x`} />
          <p>Divide it by sin²x + cos²x = 1 and cancel cos²x top and bottom:</p>
          <FormulaBlock latex={String.raw`\sin 2x = \frac{2\sin x\cos x}{\sin^2 x + \cos^2 x} = \frac{2\tan x}{1 + \tan^2 x}`} />
          <p>Tangent needs no extra step:</p>
          <FormulaBlock latex={String.raw`\tan 2x = \frac{\tan x + \tan x}{1 - \tan x\tan x} = \frac{2\tan x}{1 - \tan^2 x}`} />
          <p className="text-sm text-muted-foreground">
            The divisions by cos x assume cos x ≠ 0 — the formulas hold wherever both sides are
            defined.
          </p>
        </Expandable>
      </FormulaCard>

      <p>And iterating once more (writing 3x = 2x + x) gives the triple-angle family:</p>
      <FormulaCard>
        <p className="font-semibold mb-2">Triple Angle Formulas</p>
        <FormulaBlock latex={String.raw`\sin 3x = 3\sin x - 4\sin^3 x`} important />
        <FormulaBlock latex={String.raw`\cos 3x = 4\cos^3 x - 3\cos x`} important />
        <FormulaBlock latex={String.raw`\tan 3x = \frac{3\tan x - \tan^3 x}{1 - 3\tan^2 x}`} important />
        <Expandable title="Derivation — try it yourself before expanding">
          <p>
            Write <strong>3x = 2x + x</strong> and reuse the addition plus double-angle results.
            Sine first:
          </p>
          <FormulaBlock latex={String.raw`\sin 3x = \sin 2x\cos x + \cos 2x\sin x = 2\sin x\cos^2 x + (\cos^2 x - \sin^2 x)\sin x`} />
          <FormulaBlock latex={String.raw`= 3\sin x\cos^2 x - \sin^3 x = 3\sin x(1 - \sin^2 x) - \sin^3 x = 3\sin x - 4\sin^3 x`} />
          <p>Cosine runs the same route:</p>
          <FormulaBlock latex={String.raw`\cos 3x = \cos 2x\cos x - \sin 2x\sin x = (\cos^2 x - \sin^2 x)\cos x - 2\sin^2 x\cos x`} />
          <FormulaBlock latex={String.raw`= \cos^3 x - 3\cos x\sin^2 x = \cos x(1 - 4\sin^2 x) = \cos x\big(1 - 4(1-\cos^2 x)\big) = 4\cos^3 x - 3\cos x`} />
          <p>
            Tangent: substitute tan 2x = 2tan x/(1 − tan²x) into tan(2x + x) and clear the nested
            fraction:
          </p>
          <FormulaBlock latex={String.raw`\tan 3x = \frac{\dfrac{2t}{1-t^2} + t}{1 - \dfrac{2t^2}{1-t^2}} \quad\text{where } t = \tan x`} />
          <FormulaBlock latex={String.raw`= \frac{2t + t(1-t^2)}{(1-t^2) - 2t^2} = \frac{3t - t^3}{1 - 3t^2} = \frac{3\tan x - \tan^3 x}{1 - 3\tan^2 x}`} />
        </Expandable>
      </FormulaCard>

      <p>
        Adding and subtracting the expansions of cos(x±y) and sin(x±y), then renaming (
        x+y = θ, x–y = φ), converts sums to products — and vice versa:
      </p>
      <FormulaCard>
        <p className="font-semibold mb-2">Sum ↔ Product Transformations</p>
        <FormulaBlock
          latex={String.raw`\begin{aligned} \cos x + \cos y &= 2\cos\tfrac{x+y}{2}\cos\tfrac{x-y}{2} & \sin x + \sin y &= 2\sin\tfrac{x+y}{2}\cos\tfrac{x-y}{2} \ \cos x - \cos y &= -2\sin\tfrac{x+y}{2}\sin\tfrac{x-y}{2} & \sin x - \sin y &= 2\cos\tfrac{x+y}{2}\sin\tfrac{x-y}{2} \end{aligned}`}
          important
        />
        <FormulaBlock
          latex={String.raw`\begin{aligned} 2\cos x \cos y &= \cos(x+y) + \cos(x-y) & 2\sin x \cos y &= \sin(x+y) + \sin(x-y) \ -2\sin x \sin y &= \cos(x+y) - \cos(x-y) & 2\cos x \sin y &= \sin(x+y) - \sin(x-y) \end{aligned}`}
          important
        />
      </FormulaCard>

      <SpeedTricks>
        <Callout type="tip" title="Decompose Non-Standard Angles">
          75° = 45° + 30°, 15° = 45° – 30°, 105° = 60° + 45°. Every exam angle that isn&rsquo;t in
          the table cracks into two standard ones through the addition formulas.
        </Callout>
        <Callout type="tip" title="Complementary Mirror">
          sin 75° = cos 15° — pick whichever side has the friendlier decomposition. Saves half the
          algebra when both options exist.
        </Callout>
        <Callout type="tip" title="Spot Disguised Formulas">
          sinA cosB ± cosA sinB is sin(A±B) wearing a coat. Products like 2 sin 50° cos 10°
          collapse instantly to sin 60° + sin 40° by product-to-sum.
        </Callout>
        <Callout type="tip" title="(beyond syllabus) Difference-of-Squares Pair">
          sin(A+B)·sin(A–B) = sin²A – sin²B and cos(A+B)·cos(A–B) = cos²A – sin²B — frequent
          one-step finishers in proof questions.
        </Callout>
      </SpeedTricks>

      <Expandable id="h-examples-3-4" title="Examples 10 to 17">
        <ProblemSolution problemNumber="Example 10">
          <ProblemSolution.Problem>
            Prove that 3sin(π/6)sec(π/3) – 4sin(5π/6)cot(π/4) = 1.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`3 \times \tfrac{1}{2} \times 2 - 4 \times \sin\left(\pi - \tfrac{\pi}{6}\right) \times 1 = 3 - 4 \times \tfrac{1}{2} = 1 = \text{R.H.S.}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 11">
          <ProblemSolution.Problem>Find the value of sin 15°.</ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\sin 15^{\circ} = \sin(45^{\circ} - 30^{\circ}) = \sin 45^{\circ}\cos 30^{\circ} - \cos 45^{\circ}\sin 30^{\circ} = \frac{\sqrt{3} - 1}{2\sqrt{2}}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 12">
          <ProblemSolution.Problem>Find the value of tan 13π/12.</ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Period π strips the extra rotation: tan 13π/12 = tan(π + π/12) = tan(π/4 – π/6).</p>
            <FormulaBlock latex={String.raw`\tan\left(\frac{\pi}{4} - \frac{\pi}{6}\right) = \frac{1 - 1/\sqrt{3}}{1 + 1/\sqrt{3}} = \frac{\sqrt{3}-1}{\sqrt{3}+1} = 2 - \sqrt{3}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 13">
          <ProblemSolution.Problem>
            Prove that sin(x+y)/sin(x–y) = (tan x + tan y)/(tan x – tan y).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Expand both sines: numerator = sin x cos y + cos x sin y, denominator = sin x cos y –
              cos x sin y. Divide top and bottom by cos x cos y:
            </p>
            <FormulaBlock latex={String.raw`\frac{\sin(x+y)}{\sin(x-y)} = \frac{\tan x + \tan y}{\tan x - \tan y}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 14">
          <ProblemSolution.Problem>
            Show that tan 3x tan 2x tan x = tan 3x – tan 2x – tan x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Since 3x = 2x + x, the tangent sum formula rearranges to tan 3x(1 – tan 2x tan x) =
              tan 2x + tan x. Move everything:
            </p>
            <FormulaBlock latex={String.raw`\tan 3x - \tan 3x\tan 2x\tan x = \tan 2x + \tan x \;\Rightarrow\; \tan 3x\tan 2x\tan x = \tan 3x - \tan 2x - \tan x`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 15">
          <ProblemSolution.Problem>
            Prove that cos(π/4 + x) + cos(π/4 – x) = √2 cos x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`2\cos\frac{\pi/4 + x + \pi/4 - x}{2}\cos\frac{(\pi/4 + x) - (\pi/4 - x)}{2} = 2\cos\frac{\pi}{4}\cos x = \sqrt{2}\cos x`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 16">
          <ProblemSolution.Problem>
            Prove that (cos 7x + cos 5x)/(sin 7x – sin 5x) = cot x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\frac{2\cos 6x \cos x}{2\cos 6x \sin x} = \cot x = \text{R.H.S.}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 17">
          <ProblemSolution.Problem>
            Prove that (sin 5x – 2sin 3x + sin x)/(cos 5x – cos x) = tan x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Numerator: group sin 5x + sin x = 2 sin 3x cos 2x, so numerator = 2 sin 3x(cos 2x –
              1) = –4 sin 3x sin²x. Denominator: cos 5x – cos x = –2 sin 3x sin 2x.
            </p>
            <FormulaBlock latex={String.raw`\frac{-4\sin 3x \sin^2 x}{-2\sin 3x \sin 2x} = \frac{2\sin^2 x}{2\sin x \cos x} = \tan x = \text{R.H.S.}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-exercise-3-3" title="Exercise 3.3">
        <ol>
          <li>sin²(π/6) + cos²(π/3) – tan²(π/4) = –1/2</li>
          <li>2sin²(π/6) + cosec²(7π/6) + cos²(π/3) = 19/4</li>
          <li>cot²(π/6) + cosec(5π/6) + 3tan²(π/6) = 6</li>
          <li>2sin²(3π/4) + 2cos²(π/4) + 2sec²(π/3) = 10</li>
          <li>
            Find the value of:
            <ul>
              <li>(i) sin 75°</li>
              <li>(ii) tan 15°</li>
            </ul>
          </li>
          <li>cos(π/4 – x)cos(π/4 + x) + sin(π/4 – x)sin(π/4 + x) = cos 2x</li>
          <li>tan(π/4 + x)/tan(π/4 – x) = ((1 + tan x)/(1 – tan x))²</li>
          <li>[cos(π + x)cos(–x)]/[sin(π – x)cos(π/2 + x)] = cot²x</li>
          <li>cos(3π/2 + x)cos(2π + x)[cot(3π/2 – x) + cot(2π + x)] = 1</li>
          <li>sin(n+1)x sin(n+2)x + cos(n+1)x cos(n+2)x = cos x</li>
          <li>cos(π/4 + x) + cos(π/4 – x) = √2 cos x</li>
          <li>sin²6x – sin²4x = sin 2x sin 10x</li>
          <li>cos²2x – cos²6x = sin 4x sin 8x</li>
          <li>sin 2x + 2sin 4x + sin 6x = 4cos²x sin 4x</li>
          <li>cot 4x (sin 5x + sin 3x) = cot x (sin 5x – sin 3x)</li>
          <li>(cos 9x – cos 5x)/(sin 17x – sin 3x) = –sin 2x/cos 10x</li>
          <li>(sin 5x + sin 3x)/(cos 5x + cos 3x) = tan 4x</li>
          <li>(sin x – sin y)/(cos x + cos y) = tan((x – y)/2)</li>
          <li>(sin x + sin 3x)/(cos x + cos 3x) = tan 2x</li>
          <li>(sin x – sin 3x)/(sin²x – cos²x) = 2 sin x</li>
          <li>(cos 4x + cos 3x + cos 2x)/(sin 4x + sin 3x + sin 2x) = cot 3x</li>
          <li>cot x cot 2x – cot 2x cot 3x – cot 3x cot x = 1</li>
          <li>–tan 4x = 4tan x (1 – tan²x)/(1 – 6tan²x + tan⁴x)</li>
          <li>cos 4x = 1 – 8sin²x cos²x</li>
          <li>cos 6x = 32cos⁶x – 48cos⁴x + 18cos²x – 1</li>
        </ol>
        <Expandable title="Answer Key — Exercise 3.3">
          <ol>
            <li>1/4 + 1/4 – 1 = –1/2 ✓</li>
            <li>2(1/4) + 4 + 1/4 = 19/4 ✓</li>
            <li>3 + 2 + 1 = 6 ✓</li>
            <li>1 + 1 + 8 = 10 ✓</li>
            <li>(i) sin 75° = (√3 + 1)/(2√2) (ii) tan 15° = 2 – √3</li>
            <li>LHS = cos((π/4 – x) – (π/4 + x)) = cos(–2x) = cos 2x.</li>
            <li>Apply tan(x ± π/4) with tan(π/4) = 1 and divide the two results.</li>
            <li>Numerator = –cos²x, denominator = –sin²x ⇒ cot²x.</li>
            <li>cos(3π/2 + x) = sin x, cos(2π + x) = cos x; bracket = tan x + cot x = 1/(sin x cos x) ⇒ product 1.</li>
            <li>LHS = cos((n+1)x – (n+2)x) = cos(–x) = cos x.</li>
            <li>2 cos(π/4)cos x = √2 cos x.</li>
            <li>sin²A – sin²B = sin(A+B)sin(A–B) with A = 6x, B = 4x.</li>
            <li>cos²A – cos²B = –sin(A+B)sin(A–B) = –sin 8x·sin(–4x) = sin 8x sin 4x.</li>
            <li>Sin 2x + sin 6x = 2 sin 4x cos 2x; factor and use 1 + cos 2x = 2cos²x.</li>
            <li>cot 4x(sin 5x + sin 3x) = (cos 4x/sin 4x)(2sin 4x cos x) and cot x(sin 5x – sin 3x) = (cos x/sin x)(2cos 4x sin x) — both equal 2cos 4x cos x.</li>
            <li>Numerator = –2sin 7x sin 2x; denominator = 2cos 10x sin 7x ⇒ –sin 2x/cos 10x.</li>
            <li>Numerator = 2sin 4x cos x; denominator = 2cos 4x cos x ⇒ tan 4x.</li>
            <li>sin x – sin y = 2cos((x+y)/2)sin((x–y)/2); cos x + cos y = 2cos((x+y)/2)cos((x–y)/2).</li>
            <li>Numerator = 2sin 2x cos x; denominator = 2cos 2x cos x ⇒ tan 2x.</li>
            <li>Numerator = –2cos 2x sin x; denominator sin²x – cos²x = –cos 2x ⇒ 2 sin x.</li>
            <li>Pair cos 4x + cos 2x = 2cos 3x cos x; everything divides to cos 3x over sin 3x.</li>
            <li>Write cot 2x = (cot²x – 1)/2cot x and cot 3x = (cot³x – 3cot x)/(3cot²x – 1); simplify to 1.</li>
            <li>Apply tan 2x twice with t = tan x: tan 4x = 4t(1 – t²)/(t⁴ – 6t² + 1).</li>
            <li>cos 4x = 1 – 2sin²2x = 1 – 8sin²x cos²x.</li>
            <li>cos 6x = 2cos²3x – 1 with cos 3x expanded; collect powers of cos²x.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-misc">Miscellaneous Exercise on Chapter 3</h2>
      <Expandable id="h-examples-misc" title="Miscellaneous Examples 18 to 22">
        <ProblemSolution problemNumber="Example 18">
          <ProblemSolution.Problem>
            If sin x = 3/5 and cos y = –12/13, where x and y both lie in the second quadrant, find
            the value of sin (x + y).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Quadrant signs", description: "For QII: sin x, sin y, cos y > 0 but cos x < 0." },
                { label: "Find cos x", description: <Formula>{String.raw`\cos^2 x = 1 - \sin^2 x = 1 - \frac{9}{25} = \frac{16}{25} \;\Rightarrow\; \cos x = -\frac{4}{5}`}</Formula> },
                { label: "Find sin y", description: <Formula>{String.raw`\sin^2 y = 1 - \cos^2 y = 1 - \frac{144}{169} = \frac{25}{169} \;\Rightarrow\; \sin y = \frac{5}{13}`}</Formula> },
                { label: "Compound-angle formula", description: <Formula>{String.raw`\sin(x+y) = \sin x \cos y + \cos x \sin y`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`= \left(\frac{3}{5}\right)\left(-\frac{12}{13}\right) + \left(-\frac{4}{5}\right)\left(\frac{5}{13}\right) = \frac{-36}{65} - \frac{20}{65}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\sin(x+y) = \frac{-56}{65}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 19">
          <ProblemSolution.Problem>
            Prove that cos 2x cos(x/2) – cos 3x cos(9x/2) = sin 5x sin(5x/2).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Use the product-to-sum identity <Formula>{String.raw`2\cos A \cos B = \cos(A+B) + \cos(A-B)`}</Formula>.</p>
            <Stepper
              steps={[
                { label: "Multiply LHS by 2", description: <Formula>{String.raw`\text{LHS}\times 2 = 2\cos 2x\cos\tfrac{x}{2} - 2\cos 3x\cos\tfrac{9x}{2}`}</Formula> },
                { label: "Apply product-to-sum", description: <Formula>{String.raw`= \left(\cos\tfrac{5x}{2} + \cos\tfrac{3x}{2}\right) - \left(\cos\tfrac{15x}{2} + \cos\tfrac{3x}{2}\right)`}</Formula> },
                { label: "Cancel cos(3x/2)", description: <Formula>{String.raw`= \cos\tfrac{5x}{2} - \cos\tfrac{15x}{2}`}</Formula> },
                { label: "Use cos A − cos B", description: <Formula>{String.raw`\cos A - \cos B = -2\sin\tfrac{A+B}{2}\sin\tfrac{A-B}{2}`}</Formula> },
                { label: "Substitute A, B", description: <Formula>{String.raw`= -2\sin 5x\sin\left(-\tfrac{5x}{2}\right) = 2\sin 5x\sin\tfrac{5x}{2}`}</Formula> },
              ]}
            />
            <p>Dividing both sides by 2 (the factor on the LHS):</p>
            <FormulaBlock latex={String.raw`\cos 2x\cos\tfrac{x}{2} - \cos 3x\cos\tfrac{9x}{2} = \sin 5x\sin\tfrac{5x}{2} = \text{RHS}`} important />
            <p><strong>Hence proved.</strong> ∎</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 20">
          <ProblemSolution.Problem>Find the value of tan π/8.</ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Let x = π/8", description: <Formula>{String.raw`2x = \frac{\pi}{4}, \qquad \tan 2x = 1`}</Formula> },
                { label: "Double-angle identity", description: <Formula>{String.raw`\tan 2x = \frac{2\tan x}{1 - \tan^2 x}\;\Rightarrow\; 1 = \frac{2y}{1-y^2}`}</Formula> },
                { label: "Form quadratic", description: <Formula>{String.raw`1 - y^2 = 2y \;\Rightarrow\; y^2 + 2y - 1 = 0`}</Formula> },
                { label: "Solve", description: <Formula>{String.raw`y = \frac{-2 \pm \sqrt{4+4}}{2} = \frac{-2 \pm 2\sqrt{2}}{2} = -1 \pm \sqrt{2}`}</Formula> },
                { label: "Pick root", description: <Formula>{String.raw`\frac{\pi}{8} \in \text{QI} \Rightarrow \tan\frac{\pi}{8} > 0 \;\Rightarrow\; y = \sqrt{2} - 1`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\tan\frac{\pi}{8} = \sqrt{2} - 1`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 21">
          <ProblemSolution.Problem>
            If tan x = 3/4 and π &lt; x &lt; 3π/2, find the value of sin(x/2), cos(x/2) and
            tan(x/2).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Locate x/2", description: <Formula>{String.raw`\frac{\pi}{2} < \frac{x}{2} < \frac{3\pi}{4}\;\Rightarrow\;\frac{x}{2}\in \text{QII}`}</Formula> },
                { label: "Half-angle signs", description: <Formula>{String.raw`\sin\frac{x}{2} > 0,\quad \cos\frac{x}{2} < 0,\quad \tan\frac{x}{2} < 0`}</Formula> },
                { label: "Find cos x", description: <Formula>{String.raw`\sec^2 x = 1 + \tan^2 x = 1 + \frac{9}{16} = \frac{25}{16}\;\Rightarrow\; \cos x = -\frac{4}{5}`}</Formula> },
                { label: "sin(x/2)", description: <Formula>{String.raw`\sin^2\frac{x}{2} = \frac{1-\cos x}{2} = \frac{1+\frac{4}{5}}{2} = \frac{9}{10}\;\Rightarrow\; \sin\frac{x}{2} = +\frac{3}{\sqrt{10}}`}</Formula> },
                { label: "cos(x/2)", description: <Formula>{String.raw`\cos^2\frac{x}{2} = \frac{1+\cos x}{2} = \frac{1-\frac{4}{5}}{2} = \frac{1}{10}\;\Rightarrow\; \cos\frac{x}{2} = -\frac{1}{\sqrt{10}}`}</Formula> },
                { label: "tan(x/2)", description: <Formula>{String.raw`\tan\frac{x}{2} = \frac{\sin\frac{x}{2}}{\cos\frac{x}{2}} = \frac{3/\sqrt{10}}{-1/\sqrt{10}} = -3`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`\sin\frac{x}{2} = \frac{3}{\sqrt{10}}, \qquad \cos\frac{x}{2} = -\frac{1}{\sqrt{10}}, \qquad \tan\frac{x}{2} = -3`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
        <ProblemSolution problemNumber="Example 22">
          <ProblemSolution.Problem>
            Prove that cos²x + cos²(x + π/3) + cos²(x – π/3) = 3/2.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Use cos²θ = (1 + cos 2θ)/2 on all three terms:</p>
            <FormulaBlock latex={String.raw`\text{LHS} = \frac{3}{2} + \frac{1}{2}\left[\cos 2x + \cos\left(2x + \tfrac{2\pi}{3}\right) + \cos\left(2x - \tfrac{2\pi}{3}\right)\right]`} />
            <p>
              The last two cosines sum to 2cos 2x cos(2π/3) = –cos 2x, so the bracket vanishes and
              LHS = <strong>3/2</strong>. ∎
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-exercise-misc" title="Miscellaneous Exercise — Questions">
        <p className="font-semibold">Prove that:</p>
        <ol>
          <li>2cos(π/13)cos(9π/13) + cos(3π/13) + cos(5π/13) = 0</li>
          <li>(sin 3x + sin x) sin x + (cos 3x – cos x) cos x = 0</li>
          <li>(cos x + cos y)² + (sin x – sin y)² = 4cos²((x + y)/2)</li>
          <li>(cos x – cos y)² + (sin x – sin y)² = 4sin²((x – y)/2)</li>
          <li>sin x + sin 3x + sin 5x + sin 7x = 4cos x cos 2x sin 4x</li>
          <li>
            [(sin 7x + sin 5x) + (sin 9x + sin 3x)] / [(cos 7x + cos 5x) + (cos 9x + cos 3x)] =
            tan 6x
          </li>
          <li>sin 3x + sin 2x – sin x = 4sin x cos(x/2) cos(3x/2)</li>
        </ol>
        <p className="font-semibold mt-3">
          Find sin(x/2), cos(x/2) and tan(x/2) in each of the following:
        </p>
        <ol start={8}>
          <li>tan x = –4/3, x in quadrant II</li>
          <li>cos x = –1/3, x in quadrant III</li>
          <li>sin x = 1/4, x in quadrant II</li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>Group cos 3π/13 + cos 5π/13 = 2cos(4π/13)cos(π/13). Then LHS = 2cos(π/13)[cos(9π/13) + cos(4π/13)] = 2cos(π/13)·2cos(π/2)cos(5π/26) = 0.</li>
            <li>cos 3x cos x + sin 3x sin x = cos 2x, so LHS = cos 2x + (sin²x – cos²x) = cos 2x – cos 2x = 0.</li>
            <li>Expand: 2 + 2(cos x cos y – sin x sin y) = 2 + 2cos(x+y) = 4cos²((x+y)/2).</li>
            <li>Expand: 2 – 2(cos x cos y + sin x sin y) = 2 – 2cos(x–y) = 4sin²((x–y)/2).</li>
            <li>Pair (sin x + sin 7x) = 2sin 4x cos 3x and (sin 3x + sin 5x) = 2sin 4x cos x ⇒ 4sin 4x cos x cos 2x.</li>
            <li>Numerator = 2sin 6x(cos x + cos 3x); denominator = 2cos 6x(cos x + cos 3x) ⇒ tan 6x.</li>
            <li>sin 3x – sin x = 2cos 2x sin x and sin 3x + sin 2x = 2sin(5x/2)cos(x/2); regroup and apply 2sinA cosB repeatedly to reach 4sin x cos(x/2) cos(3x/2).</li>
            <li>cos x = –3/5, x/2 in (π/4, π/2): sin(x/2) = 2/√5, cos(x/2) = 1/√5, tan(x/2) = 2.</li>
            <li>x/2 in (π/2, 3π/4): sin(x/2) = √(2/3) = √6/3, cos(x/2) = –1/√3, tan(x/2) = –√2.</li>
            <li>cos x = –√15/4, x/2 in quadrant I: sin(x/2) = √((4 + √15)/8), cos(x/2) = √((4 – √15)/8), tan(x/2) = √((4 + √15)/(4 – √15)).</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-pyq">Previous Year Questions</h2>
      <Expandable id="h-pyq-mcq" title="PYQ — MCQ &amp; Conceptual">
        <ProblemSolution problemNumber="PYQ-M1">
          <ProblemSolution.Problem>
            If sin A + cos A = 1, then the value of sin 2A is: (a) −1 (b) −2 (c) 0 (d) 1
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Square both sides", description: <Formula>{String.raw`(\sin A + \cos A)^2 = 1^2`}</Formula> },
                { label: "Expand", description: <Formula>{String.raw`\sin^2 A + \cos^2 A + 2\sin A\cos A = 1`}</Formula> },
                { label: "Use identities", description: <Formula>{String.raw`1 + \sin 2A = 1 \;\Rightarrow\; \sin 2A = 0`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Answer: <strong>(c) 0</strong>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-M2">
          <ProblemSolution.Problem>
            The value of sec²2 − tan²2 is: (a) −8 (b) 8 (c) 0 (d) 1
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Pythagorean identity", description: <Formula>{String.raw`\sec^2 x - \tan^2 x = 1`}</Formula> },
                { label: "Hold for any x", description: <Formula>{String.raw`\sec^2 2 - \tan^2 2 = 1`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Answer: <strong>(d) 1</strong>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-M3">
          <ProblemSolution.Problem>
            The domain of the function sec x is:
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Since sec x = 1/cos x, it is undefined where cos x = 0, i.e. at odd multiples of π/2.</p>
            <FormulaBlock latex={String.raw`\text{Domain}(\sec x) = \mathbb{R} - \{(2n+1)\tfrac{\pi}{2} : n \in \mathbb{Z}\}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-M4">
          <ProblemSolution.Problem>
            Show that (1 − tan²15°)/(1 + tan²15°) = √3/2.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Use double-angle", description: <Formula>{String.raw`\frac{1-\tan^2 x}{1+\tan^2 x} = \cos 2x`}</Formula> },
                { label: "Apply with x = 15°", description: <Formula>{String.raw`\frac{1-\tan^2 15°}{1+\tan^2 15°} = \cos 30° = \frac{\sqrt{3}}{2}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-M5">
          <ProblemSolution.Problem>
            sin 765° = (a) 0 (b) 1 (c) 1/√2 (d) −1/√2
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Strip full cycles", description: <Formula>{String.raw`765° = 2 \times 360° + 45°`}</Formula> },
                { label: "Reduce", description: <Formula>{String.raw`\sin 765° = \sin 45° = \frac{1}{\sqrt{2}}`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Answer: <strong>(c) 1/√2</strong>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-M6">
          <ProblemSolution.Problem>
            In which interval does f(x) = cos x increase from −1 to 0? (A) [0, π/2] (B) [π/2, π] (C) [π, 3π/2] (D) [3π/2, 2π]
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>cos x rises from −1 to 0 as x goes from π to 3π/2 (cos π = −1, cos 3π/2 = 0).</p>
            <FormulaBlock latex={String.raw`\text{Answer: } [\pi,\ \tfrac{3\pi}{2}]`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-M7">
          <ProblemSolution.Problem>
            Which of the following is an incorrect value of sin x? (i) 0 (ii) 1/2 (iii) 3 (iv) 1
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Range of sin x", description: <Formula>{String.raw`-1 \le \sin x \le 1`}</Formula> },
                { label: "Identify the outlier", description: <Formula>{String.raw`3 \notin [-1,\ 1] \;\Rightarrow\; \text{incorrect}`}</Formula> },
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Answer: <strong>(iii) 3</strong>.</p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-pyq-arc" title="PYQ — Arc Length &amp; Conversions">
        <ProblemSolution problemNumber="PYQ-A1">
          <ProblemSolution.Problem>
            An arc of a circle of radius 80 cm subtends an angle 10° at the centre. Find the arc length.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Convert to radians", description: <Formula>{String.raw`\theta = 10° \times \frac{\pi}{180°} = \frac{\pi}{18}`}</Formula> },
                { label: "Apply arc-length formula", description: <Formula>{String.raw`l = r\theta = 80 \times \frac{\pi}{18} = \frac{40\pi}{9}\text{ cm}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-A2">
          <ProblemSolution.Problem>
            The minute hand of a watch is 1.5 cm long. How far does its tip move in 40 minutes? (Use π = 3.14)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Angle in 40 min", description: <Formula>{String.raw`\theta = 360° \times \frac{40}{60} = 240°`}</Formula> },
                { label: "Convert to radians", description: <Formula>{String.raw`\theta = 240° \times \frac{\pi}{180°} = \frac{4\pi}{3}`}</Formula> },
                { label: "Distance moved", description: <Formula>{String.raw`l = r\theta = 1.5 \times \frac{4\pi}{3} = 2\pi = 2 \times 3.14 = 6.28\text{ cm}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-A3">
          <ProblemSolution.Problem>
            The degree measure of 4π/3 is:
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\frac{180°}{\pi} \times \frac{4\pi}{3} = 240°`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-A4">
          <ProblemSolution.Problem>
            Convert 25° into radians.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`25° \times \frac{\pi}{180°} = \frac{5\pi}{36}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-A5">
          <ProblemSolution.Problem>
            Find the radian measure corresponding to −47°30′.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Express minutes", description: <Formula>{String.raw`30' = \tfrac{1}{2}° \;\Rightarrow\; 47°30' = \tfrac{95}{2}°`}</Formula> },
                { label: "Convert to radians", description: <Formula>{String.raw`\frac{\pi}{180} \times \frac{95}{2} = \frac{19\pi}{72}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`-47°30' = -\frac{19\pi}{72}\text{ radians}`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-pyq-unitcircle" title="PYQ — Unit Circle">
        <ProblemSolution problemNumber="PYQ-U1">
          <ProblemSolution.Problem>
            A point P on the unit circle has coordinates (0.6, 0.8). Write sin x and cos x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\cos x = 0.6, \qquad \sin x = 0.8`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-U2">
          <ProblemSolution.Problem>
            For P(0.6, 0.8) on the unit circle, evaluate sin 2x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Double-angle formula", description: <Formula>{String.raw`\sin 2x = 2\sin x \cos x`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`= 2 \times 0.8 \times 0.6 = 0.96`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-U3">
          <ProblemSolution.Problem>
            If ∠POQ = 180° and P = (0.6, 0.8), find the coordinates of Q.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Angle of Q", description: <Formula>{String.raw`\angle \text{ of } Q = 180° + x`}</Formula> },
                { label: "Coordinates", description: <Formula>{String.raw`(\cos(180°+x), \sin(180°+x)) = (-\cos x, -\sin x)`}</Formula> },
                { label: "Result", description: <Formula>{String.raw`Q = (-0.6, -0.8)`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-U4">
          <ProblemSolution.Problem>
            Write the radian measure of ∠AOB = 150° and the coordinates of B on the unit circle.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Radian measure", description: <Formula>{String.raw`150° \times \frac{\pi}{180°} = \frac{5\pi}{6}`}</Formula> },
                { label: "Coordinates", description: <Formula>{String.raw`B = (\cos 150°, \sin 150°)`}</Formula> },
                { label: "Evaluate", description: <Formula>{String.raw`\cos 150° = -\frac{\sqrt{3}}{2},\ \sin 150° = \frac{1}{2}`}</Formula> },
              ]}
            />
            <FormulaBlock latex={String.raw`B = \left(-\frac{\sqrt{3}}{2},\ \frac{1}{2}\right)`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-pyq-proofs" title="PYQ — Identity Proofs">
        <ProblemSolution problemNumber="PYQ-P1">
          <ProblemSolution.Problem>
            Show that cos 20° + cos 100° + cos 140° = 0.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Group first two", description: <Formula>{String.raw`\cos 100° + \cos 20° = 2\cos 60° \cos 40° = \cos 40°`}</Formula> },
                { label: "Use supplementary", description: <Formula>{String.raw`\cos 140° = \cos(180° - 40°) = -\cos 40°`}</Formula> },
                { label: "Sum", description: <Formula>{String.raw`\cos 40° - \cos 40° = 0 = \text{RHS}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P2">
          <ProblemSolution.Problem>
            Prove that (sin 24° cos 6° − sin 6° sin 66°) / (sin 21° cos 39° − cos 51° sin 69°) = −1.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Cofunction substitutions", description: <Formula>{String.raw`\sin 66° = \cos 24°,\ \sin 69° = \cos 21°,\ \cos 51° = \sin 39°`}</Formula> },
                { label: "Rewrite numerator", description: <Formula>{String.raw`\sin 24°\cos 6° - \cos 24°\sin 6° = \sin(24°-6°) = \sin 18°`}</Formula> },
                { label: "Rewrite denominator", description: <Formula>{String.raw`\sin 21°\cos 39° - \cos 21°\sin 39° = \sin(21°-39°) = \sin(-18°)`}</Formula> },
                { label: "Divide", description: <Formula>{String.raw`\frac{\sin 18°}{-\sin 18°} = -1 = \text{RHS}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P3">
          <ProblemSolution.Problem>
            Prove that (cos 5x − cos 7x) / (2 sin 6x) = sin x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Sum-to-product", description: <Formula>{String.raw`\cos 5x - \cos 7x = -2\sin 6x \sin(-x)`}</Formula> },
                { label: "Since sin(−x) = −sin x", description: <Formula>{String.raw`= 2\sin 6x \sin x`}</Formula> },
                { label: "Divide", description: <Formula>{String.raw`\frac{2\sin 6x \sin x}{2\sin 6x} = \sin x = \text{RHS}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P4">
          <ProblemSolution.Problem>
            Find the exact value of cos 75°.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Split angle", description: <Formula>{String.raw`75° = 45° + 30°`}</Formula> },
                { label: "Compound-angle formula", description: <Formula>{String.raw`\cos 75° = \cos 45°\cos 30° - \sin 45°\sin 30°`}</Formula> },
                { label: "Evaluate", description: <Formula>{String.raw`\frac{1}{\sqrt{2}}\cdot\frac{\sqrt{3}}{2} - \frac{1}{\sqrt{2}}\cdot\frac{1}{2} = \frac{\sqrt{3}-1}{2\sqrt{2}}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P5">
          <ProblemSolution.Problem>
            Show that cos(x + y) + cos(x − y) = 2 cos x cos y.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Expand each", description: <Formula>{String.raw`(\cos x\cos y - \sin x\sin y) + (\cos x\cos y + \sin x\sin y)`}</Formula> },
                { label: "Cancel opposite terms", description: <Formula>{String.raw`= 2\cos x \cos y = \text{RHS}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P6">
          <ProblemSolution.Problem>
            Prove that cos(3π/4 + x) + cos(3π/4 − x) = −√2 cos x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Use cos(x+y)+cos(x−y)", description: <Formula>{String.raw`\text{LHS} = 2\cos\tfrac{3\pi}{4}\cos x`}</Formula> },
                { label: "Evaluate cos(3π/4)", description: <Formula>{String.raw`\cos\tfrac{3\pi}{4} = -\tfrac{1}{\sqrt{2}}`}</Formula> },
                { label: "Multiply", description: <Formula>{String.raw`2\left(-\frac{1}{\sqrt{2}}\right)\cos x = -\sqrt{2}\cos x = \text{RHS}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P7">
          <ProblemSolution.Problem>
            If tan θ = 1/2 and tan φ = 1/3, show that θ + φ = π/4.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Tangent sum formula", description: <Formula>{String.raw`\tan(\theta+\phi) = \frac{\tan\theta + \tan\phi}{1 - \tan\theta\tan\phi}`}</Formula> },
                { label: "Substitute", description: <Formula>{String.raw`\frac{\frac{1}{2}+\frac{1}{3}}{1 - \frac{1}{2}\cdot\frac{1}{3}} = \frac{\frac{5}{6}}{\frac{5}{6}} = 1`}</Formula> },
                { label: "Conclusion", description: <Formula>{String.raw`\tan(\theta+\phi) = 1 = \tan\tfrac{\pi}{4} \;\Rightarrow\; \theta + \phi = \frac{\pi}{4}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P8">
          <ProblemSolution.Problem>
            Match the following:
            <br />
            (a) sin x cos y − cos x sin y &nbsp; ↔
            <br />
            (b) tan π/4 &nbsp; ↔
            <br />
            (c) 2 sin x cos x &nbsp; ↔
            <br />
            (d) 1 + cos 2x &nbsp; ↔
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <ul className="list-disc pl-5 space-y-1">
              <li>sin x cos y − cos x sin y = <strong>sin(x − y)</strong></li>
              <li>tan π/4 = <strong>1</strong></li>
              <li>2 sin x cos x = <strong>sin 2x</strong></li>
              <li>1 + cos 2x = <strong>2 cos²x</strong> (since 1 + cos 2x = 1 + 2cos²x − 1 = 2cos²x)</li>
            </ul>
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P9">
          <ProblemSolution.Problem>
            Prove that cos(3π/4 + x) − cos(3π/4 − x) = −√2 sin x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Expand both", description: <Formula>{String.raw`(\cos\tfrac{3\pi}{4}\cos x - \sin\tfrac{3\pi}{4}\sin x) - (\cos\tfrac{3\pi}{4}\cos x + \sin\tfrac{3\pi}{4}\sin x)`}</Formula> },
                { label: "Cancel the cos terms", description: <Formula>{String.raw`= -2\sin\tfrac{3\pi}{4}\sin x`}</Formula> },
                { label: "Evaluate", description: <Formula>{String.raw`-2\times\frac{1}{\sqrt{2}}\sin x = -\sqrt{2}\sin x = \text{RHS}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P10">
          <ProblemSolution.Problem>
            Prove that (cos x − cos y)² + (sin x − sin y)² = 4 sin²((x−y)/2).
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Sum-to-product", description: <Formula>{String.raw`\cos x-\cos y = -2\sin\tfrac{x+y}{2}\sin\tfrac{x-y}{2},\quad \sin x-\sin y = 2\cos\tfrac{x+y}{2}\sin\tfrac{x-y}{2}`}</Formula> },
                { label: "Square and add", description: <Formula>{String.raw`4\sin^2\tfrac{x-y}{2}\left[\sin^2\tfrac{x+y}{2} + \cos^2\tfrac{x+y}{2}\right]`}</Formula> },
                { label: "Pythagorean identity", description: <Formula>{String.raw`4\sin^2\frac{x-y}{2} = \text{RHS}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P11">
          <ProblemSolution.Problem>
            Prove that (sin 7x + sin 5x + sin 9x + sin 3x) / (cos 7x + cos 5x + cos 9x + cos 3x) = tan 6x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Group numerator", description: <Formula>{String.raw`2\sin 6x\cos x + 2\sin 6x\cos 3x = 2\sin 6x(\cos x + \cos 3x)`}</Formula> },
                { label: "Group denominator", description: <Formula>{String.raw`2\cos 6x\cos x + 2\cos 6x\cos 3x = 2\cos 6x(\cos x + \cos 3x)`}</Formula> },
                { label: "Divide", description: <Formula>{String.raw`\frac{2\sin 6x\cancel{(\cos x+\cos 3x)}}{2\cos 6x\cancel{(\cos x+\cos 3x)}} = \frac{\sin 6x}{\cos 6x} = \tan 6x`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P12">
          <ProblemSolution.Problem>
            Prove that sin x + sin 3x + sin 5x + sin 7x = 4 cos x cos 2x sin 4x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Group in pairs", description: <Formula>{String.raw`(\sin 3x+\sin x) + (\sin 7x+\sin 5x) = 2\sin 2x\cos x + 2\sin 6x\cos x`}</Formula> },
                { label: "Factor cos x", description: <Formula>{String.raw`= 2\cos x(\sin 6x + \sin 2x)`}</Formula> },
                { label: "Sum-to-product", description: <Formula>{String.raw`= 2\cos x(2\sin 4x\cos 2x) = 4\cos x\cos 2x\sin 4x`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P13">
          <ProblemSolution.Problem>
            Prove that tan 1° · tan 2° · tan 3° ⋯ tan 89° = 1.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Pair complementary", description: <Formula>{String.raw`\tan 89° = \cot 1° = \frac{1}{\tan 1°},\quad \tan 88° = \frac{1}{\tan 2°},\ \dots`}</Formula> },
                { label: "Pair products", description: <Formula>{String.raw`(\tan 1°\cdot\tfrac{1}{\tan 1°})(\tan 2°\cdot\tfrac{1}{\tan 2°})\cdots\tan 45°`}</Formula> },
                { label: "Result", description: <Formula>{String.raw`1 \times 1 \times \cdots \times 1 = 1`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="PYQ-P14">
          <ProblemSolution.Problem>
            Show that sin(π − x) = sin x.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Since π − x is the supplement of x in the unit-circle convention, sine stays positive:</p>
            <FormulaBlock latex={String.raw`\sin(\pi - x) = \sin\pi\cos x - \cos\pi\sin x = 0\cdot\cos x - (-1)\sin x = \sin x`} important />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>
    </>
  );
}
