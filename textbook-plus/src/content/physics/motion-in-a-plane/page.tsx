import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { SolvedProblem } from "@/components/content/SolvedProblem";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import {
  ProjectileComponentGraphs,
  CircularMotionVectors,
  ThreeProjectilePaths,
} from "@/components/content/physics/ProjectileGraphs";
import {
  VectorTypeFigures,
  ScalarMultiplicationFigure,
  RectangularComponentsFigure,
  AdditionSubtractionFigure,
} from "@/components/content/physics/VectorFigures";
import { Stepper } from "@/components/content/Stepper";
import { MetricCard } from "@/components/content/study/MetricCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function MotionInAPlaneChapter() {
  return (
    <>
      <h2 id="h-scalars-vectors">3.2 Scalars and Vectors</h2>
      <Comparison
        columns={[
          {
            title: "Scalar",
            children: (
              <ul className="space-y-1 list-none">
                <li>Has <strong>magnitude only</strong> — a single number with the proper unit.</li>
                <li>Combined with the rules of <strong>ordinary algebra</strong>.</li>
                <li>Examples: distance, mass, temperature, time, speed, work, density, energy.</li>
              </ul>
            ),
          },
          {
            title: "Vector",
            children: (
              <ul className="space-y-1 list-none">
                <li>Has <strong>magnitude and direction</strong>.</li>
                <li>Obeys the <strong>triangle law</strong> (equivalently the <strong>parallelogram law</strong>) of addition.</li>
                <li>Examples: displacement, velocity, acceleration, force, torque, momentum.</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        Notation: bold face <strong>v</strong> or arrow <Formula>{String.raw`\vec{v}`}</Formula>; magnitude
        |<strong>v</strong>| = v.
      </p>
      <KeyPoint title="The two tests of a vector">
        A physical quantity is a <strong>vector</strong> only if it has <strong>both</strong> magnitude and
        direction <em>and</em> obeys the <strong>laws of vector algebra</strong>. Scalars — mass, time, work,
        distance, density, temperature, heat, energy — have magnitude only. Vectors — displacement, velocity,
        acceleration, force, torque, momentum — satisfy both tests.
      </KeyPoint>

      <h3>3.2.1 Types of vectors</h3>
      <VectorTypeFigures />

      <h3>3.2.2 Position and displacement vectors</h3>
      <p>
        The <strong>position vector</strong> of a point P with respect to the origin O is{" "}
        <Formula>{String.raw`\mathbf{r}`}</Formula>; when P moves to P&prime;, it becomes{" "}
        <Formula>{String.raw`\mathbf{r}^{\prime}`}</Formula>.
      </p>
      <p>
        The <strong>displacement vector</strong> is the straight line joining the initial and final
        positions — independent of the actual path taken:
      </p>
      <FormulaBlock latex={String.raw`\Delta\mathbf{r} = \mathbf{r}^{\prime} - \mathbf{r}`} important />
      <KeyPoint title="Displacement vs path length">
        <Formula>{String.raw`|\Delta\mathbf{r}| \le `}</Formula> path length. The two are equal only when the
        path never turns back (motion along a straight line without reversal).
      </KeyPoint>

      <h3>3.2.3 Equality of vectors</h3>
      <p>
        Two vectors are equal <strong>iff</strong> they have the same magnitude <em>and</em> the same
        direction. Vectors have no fixed location — shifting a vector parallel to itself leaves it
        unchanged (<strong>free vectors</strong>).
      </p>

      <Expandable title="Important questions &amp; PYQs — Scalars &amp; Vectors" variant="exercise">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ 2016 · 1 mark</p>
              <p>Identify the scalar quantity from: (i) momentum, (ii) work, (iii) torque, (iv) acceleration.</p>
            </div>,
            <div key={2}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ 2021 · 2 marks</p>
              <p>What are the conditions for equality of two vectors?</p>
            </div>,
            <div key={3}>
              <p>Define the modulus of a vector.</p>
            </div>,
            <div key={4}>
              <p>What are unit vectors?</p>
            </div>,
            <div key={5}>
              <p>What do you mean by a null vector or zero vector? Give one example.</p>
            </div>,
          ]}
          answers={[
            <div key={1}>(ii) <strong>Work</strong>.</div>,
            <div key={2}>
              <ul className="space-y-1 list-none">
                <li>1 — same magnitude</li>
                <li>2 — same direction</li>
              </ul>
            </div>,
            <div key={3}>
              The magnitude of a vector is called its modulus, <Formula>{String.raw`|\vec{A}|`}</Formula> or{" "}
              <Formula>{String.raw`A`}</Formula>.
            </div>,
            <div key={4}>
              A vector of magnitude 1 unit drawn in the direction of a given vector — e.g. î, ĵ, k̂.
            </div>,
            <div key={5}>
              A vector with zero magnitude and an arbitrary direction — e.g. the position vector of the
              origin.
            </div>,
          ]}
        />
      </Expandable>

      <h2 id="h-multiplication">3.3 Multiplication of Vectors by Real Numbers</h2>
      <p>
        Multiplying a vector <Formula>{String.raw`\vec{A}`}</Formula> by a real number λ stretches or shrinks
        its length and may flip its direction — the result is the same kind of vector:
      </p>
      <ScalarMultiplicationFigure />
      <Comparison
        columns={[
          {
            title: "λ > 0 — same direction",
            children: (
              <ul className="space-y-1 list-none">
                <li>Magnitude becomes λ times bigger; direction stays the same.</li>
                <li><Formula>{String.raw`2\vec{A}`}</Formula> → twice as long, same direction.</li>
              </ul>
            ),
          },
          {
            title: "λ < 0 — direction reverses",
            children: (
              <ul className="space-y-1 list-none">
                <li>Magnitude becomes |λ| times bigger; direction reverses.</li>
                <li><Formula>{String.raw`-\vec{A}`}</Formula> → same length, opposite direction.</li>
                <li><Formula>{String.raw`-1.5\,\vec{A}`}</Formula> → 1.5 times longer, opposite direction.</li>
              </ul>
            ),
          },
        ]}
      />
      <KeyPoint title="Scalar with units">
        The result&rsquo;s units are the product of the units — (units of λ) × (units of{" "}
        <Formula>{String.raw`\vec{A}`}</Formula>). Example: velocity × time = displacement.
      </KeyPoint>
      <KeyPoint title="Shortcut to remember">
        Positive λ — stretch the <strong>same way</strong>. Negative λ — stretch the{" "}
        <strong>opposite way</strong>.
      </KeyPoint>

      <h2 id="h-addition">3.4 Addition &amp; Subtraction of Vectors — Graphical Method</h2>
      <p>There are two graphical methods — both handle <strong>addition and subtraction</strong>:</p>
      <h3>Method 1 — Triangle (head-to-tail) law</h3>
      <p>
        Place <strong>B</strong>&rsquo;s tail at <strong>A</strong>&rsquo;s head; the resultant{" "}
        <strong>R</strong> joins <strong>A</strong>&rsquo;s tail to <strong>B</strong>&rsquo;s head. Stated
        as a law: if two vectors are represented in magnitude and direction by two sides of a triangle taken
        in the <strong>same order</strong>, their resultant is represented by the third side taken in the{" "}
        <strong>opposite order</strong>:
      </p>
      <FormulaBlock latex={String.raw`\vec{R} = \vec{A} + \vec{B}`} important />
      <img
        src="https://commons.wikimedia.org/wiki/Special:FilePath/Vector_addition.svg"
        alt="Triangle (head-to-tail) law of vector addition — the resultant R closes the triangle"
        className="w-full h-auto rounded-lg object-contain max-h-[280px] mx-auto bg-white"
        loading="lazy"
      />
      <h3>Method 2 — Parallelogram law</h3>
      <p>
        Place the vectors with their <strong>tails at a common origin</strong> and complete the
        parallelogram. The resultant <strong>R</strong> is the <strong>diagonal through that origin</strong>,
        with magnitude and direction (θ = angle between A and B, α = angle R makes with A):
      </p>
      <FormulaBlock latex={String.raw`R = \sqrt{A^2 + B^2 + 2AB\cos\theta}`} important />
      <FormulaBlock latex={String.raw`\tan\alpha = \frac{B\sin\theta}{A + B\cos\theta}`} />
      <img
        src="https://commons.wikimedia.org/wiki/Special:FilePath/Parallelogram-law-of-combination.svg"
        alt="Parallelogram law of vector addition — the resultant R is the diagonal through the common origin"
        className="w-full h-auto rounded-lg object-contain max-h-[340px] mx-auto bg-white"
        loading="lazy"
      />
      <p>
        <strong>Subtraction</strong> — both methods subtract by adding the reversed vector:{" "}
        <strong>A</strong> − <strong>B</strong> = <strong>A</strong> + (−<strong>B</strong>). Draw −B first,
        then use Method 1 or 2 with A and −B:
      </p>
      <AdditionSubtractionFigure />
      <p>Special cases of the resultant:</p>
      <TableCard
        headers={["Case", "Angle θ between A and B", "Resultant", "Remark"]}
        rows={[
          { cells: ["Same direction", "θ = 0°", "R_max = A + B", "Maximum possible resultant"] },
          { cells: ["Opposite direction", "θ = 180°", "R_min = |A − B|", "Minimum possible resultant"] },
          { cells: ["Perpendicular", "θ = 90°", "R = √(A² + B²)", "cos 90° = 0 — Pythagoras"] },
        ]}
        caption="R = √(A² + B² + 2AB cosθ) evaluated at the three special angles."
      />
      <Expandable title="Example 3.1 — Which way to hold the umbrella in wind?" variant="example">
        <ProblemSolution.Problem>
          <p>Rain falls vertically with a speed of 35 m s⁻¹. Wind starts blowing from east to west with a speed of 12 m s⁻¹. In which direction should a boy at a bus stop hold his umbrella?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The resultant of the rain&rsquo;s velocity <Formula>{String.raw`\vec{v}_r`}</Formula> and the wind&rsquo;s velocity <Formula>{String.raw`\vec{v}_w`}</Formula> is <Formula>{String.raw`\vec{R}`}</Formula>, perpendicular components (Fig. 3.7):</p>
          <FormulaBlock latex={String.raw`|\vec{R}| = \sqrt{35^2 + 12^2} = 37\ \text{m s}^{-1}`} important />
          <p>Direction with the vertical: <Formula>{String.raw`\tan\theta = \frac{v_w}{v_r} = \frac{12}{35} = 0.343`}</Formula> → θ ≈ <strong>19°</strong> with the vertical <strong>towards the east</strong>.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 3.2 — Magnitude &amp; direction of the resultant (law of cosines/sines)" variant="example">
        <ProblemSolution.Problem>
          <p>Find the magnitude and direction of the resultant of two vectors A and B in terms of their magnitudes A, B and the angle θ between them.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>From the parallelogram geometry (OS² = ON² + SN² with ON = A + B cosθ, SN = B sinθ):</p>
          <FormulaBlock latex={String.raw`R^2 = A^2 + B^2 + 2AB\cos\theta`} important />
          <FormulaBlock latex={String.raw`\frac{R}{\sin\theta} = \frac{A}{\sin\beta} = \frac{B}{\sin\alpha}`} />
          <FormulaBlock latex={String.raw`\tan\alpha = \frac{B\sin\theta}{A + B\cos\theta}`} />
          <p>Eq. (3.24a) is the <strong>law of cosines</strong>; Eq. (3.24d) the <strong>law of sines</strong>; α is the angle R makes with A.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Solved problems — resultant of two forces (PYQs)" variant="example">
        <SolvedProblem
          number={1}
          title="Perpendicular forces — Model Exam PYQ (2021)"
          question="Two forces A and B of magnitudes 6 N and 8 N act perpendicular to each other (θ = 90°). Find the magnitude of the resultant force."
          given="A = 6 N, B = 8 N, θ = 90°"
          solution={
            <>
              <p>With θ = 90°, cos 90° = 0, so the general formula reduces to a right triangle (Pythagoras):</p>
              <FormulaBlock latex={String.raw`R = \sqrt{A^2 + B^2 + 2AB\cos 90^\circ} = \sqrt{A^2 + B^2}`} />
              <FormulaBlock latex={String.raw`R = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10\ \text{N}`} important />
            </>
          }
          answer="10 N"
        />
        <SolvedProblem
          number={2}
          title="Forces at 60° — Model Exam PYQ (2020)"
          question="Two forces of 5 N and 7 N act at a point; the angle between them is 60°. Find the resultant force."
          given="A = 5 N, B = 7 N, θ = 60°"
          solution={
            <>
              <p>Substitute cos 60° = ½ into the parallelogram law:</p>
              <FormulaBlock latex={String.raw`R = \sqrt{A^2 + B^2 + 2AB\cos \theta} = \sqrt{5^2 + 7^2 + 2(5)(7)\cos 60^\circ}`} />
              <FormulaBlock latex={String.raw`R = \sqrt{25 + 49 + 2(5)(7)\left(\frac{1}{2}\right)} = \sqrt{25 + 49 + 35} = \sqrt{109}`} important />
            </>
          }
          answer="√109 N ≈ 10.44 N"
        />
      </Expandable>

      <h2 id="h-resolution">3.5 Resolution of Vectors</h2>
      <Callout type="note" title="Unit vectors">
        î, ĵ, k̂ have magnitude 1 and point along the x-, y-, z-axes; they are dimensionless, unitless and
        mutually perpendicular. Any vector <Formula>{String.raw`\mathbf{A} = |\mathbf{A}|\,\hat{n}`}</Formula>.
      </Callout>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`\mathbf{A} = A_x\hat{\mathbf{i}} + A_y\hat{\mathbf{j}}`}</Formula></li>
          <li><Formula>{String.raw`A_x = A\cos\theta, \quad A_y = A\sin\theta`}</Formula> (θ with x-axis)</li>
          <li>Recovery: <Formula>{String.raw`A = \sqrt{A_x^2 + A_y^2}`}</Formula>, <Formula>{String.raw`\tan\theta = \frac{A_y}{A_x}`}</Formula></li>
          <li>3-D: <Formula>{String.raw`\mathbf{A} = A_x\hat{\mathbf{i}} + A_y\hat{\mathbf{j}} + A_z\hat{\mathbf{k}}, \quad A = \sqrt{A_x^2 + A_y^2 + A_z^2}`}</Formula></li>
        </ul>
      </FormulaCard>
      <p>
        Components are <strong>signed real numbers</strong> (Aₓ itself is not a vector; Aₓî is). The
        position vector is <Formula>{String.raw`\mathbf{r} = x\hat{\mathbf{i}} + y\hat{\mathbf{j}} + z\hat{\mathbf{k}}`}</Formula>.
      </p>

      <h3>3.5.1 Vector multiplication — scalar (dot) and vector (cross) product</h3>
      <p>
        <strong>Scalar (dot) product</strong> — the product of the magnitudes of two vectors and the cosine of
        the smaller angle between them:
      </p>
      <FormulaBlock latex={String.raw`\vec{A}\cdot\vec{B} = AB\cos\theta`} important />
      <ul>
        <li>The result is a <strong>scalar</strong>: A·B equals the magnitude of one vector times the component of the other along it.</li>
        <li>Commutative: <Formula>{String.raw`\vec{A}\cdot\vec{B} = \vec{B}\cdot\vec{A}`}</Formula>. Distributive: <Formula>{String.raw`\vec{A}\cdot(\vec{B} + \vec{C}) = \vec{A}\cdot\vec{B} + \vec{A}\cdot\vec{C}`}</Formula>.</li>
        <li>î·î = ĵ·ĵ = k̂·k̂ = 1, while î·ĵ = ĵ·k̂ = k̂·î = 0.</li>
        <li><Formula>{String.raw`\vec{A}\cdot\vec{A} = A^2`}</Formula>; if A·B = 0 with neither vector zero, the vectors are perpendicular.</li>
      </ul>
      <img
        src="https://commons.wikimedia.org/wiki/Special:FilePath/Dot_Product.svg"
        alt="Scalar (dot) product A·B = AB cosθ — the projection of B onto A"
        className="w-full h-auto rounded-lg object-contain max-h-[280px] mx-auto bg-white"
        loading="lazy"
      />
      <p>
        <strong>Vector (cross) product</strong> — the product of the magnitudes of two vectors and the sine of
        the smaller angle between them; the result is a vector perpendicular to both, with magnitude:
      </p>
      <FormulaBlock latex={String.raw`|\vec{A}\times\vec{B}| = AB\sin\theta`} important />
      <ul>
        <li>Direction: along the normal to the plane of A and B, fixed by the <strong>right-hand thumb rule</strong> (curl the fingers from A towards B; the thumb points along <Formula>{String.raw`\vec{A}\times\vec{B}`}</Formula>).</li>
        <li>Anti-commutative: <Formula>{String.raw`\vec{A}\times\vec{B} = -(\vec{B}\times\vec{A})`}</Formula>; it is <strong>not</strong> associative.</li>
        <li>Its magnitude equals the area of the parallelogram spanned by A and B.</li>
        <li>î × î = ĵ × ĵ = k̂ × k̂ = 0; in cyclic order î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ.</li>
      </ul>
      <div className="grid gap-3 sm:grid-cols-2">
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Cross_product_parallelogram.svg"
          alt="Magnitude of the cross product equals the area of the parallelogram spanned by the two vectors"
          className="w-full h-auto rounded-lg object-contain max-h-[260px] mx-auto bg-white"
          loading="lazy"
        />
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Right_hand_rule_cross_product.svg"
          alt="Right-hand thumb rule fixes the direction of the cross product"
          className="w-full h-auto rounded-lg object-contain max-h-[260px] mx-auto bg-white"
          loading="lazy"
        />
      </div>
      <Expandable title="Board exam PYQ (2020) [3 Marks] — position vector &amp; rectangular components" variant="example">
        <SolvedProblem
          number={1}
          title="Position vector of a particle P in the x–y plane"
          question={
            <p>
              The position vector <Formula>{String.raw`\vec{r}`}</Formula> of a particle P located in an x–y
              plane is shown in the figure. (a) Redraw the figure showing the rectangular components. (b)
              Write the position vector in terms of rectangular components. (c) Write an equation to find the
              magnitude of the resultant of two vectors A and B.
            </p>
          }
          solution={
            <>
              <p><strong>(a)</strong> Redraw the vector with its rectangular components — <Formula>{String.raw`r_x\hat{\mathbf{i}}`}</Formula> along the x-axis and <Formula>{String.raw`r_y\hat{\mathbf{j}}`}</Formula> along the y-axis — so that <Formula>{String.raw`\vec{r}`}</Formula> is the diagonal of the rectangle:</p>
              <RectangularComponentsFigure />
              <p><strong>(b)</strong></p>
              <FormulaBlock latex={String.raw`\vec{r} = r_x\hat{\mathbf{i}} + r_y\hat{\mathbf{j}}`} important />
              <p><strong>(c)</strong> Resultant magnitude by the parallelogram law:</p>
              <FormulaBlock latex={String.raw`R = \sqrt{A^2 + B^2 + 2AB\cos\theta}`} important />
            </>
          }
          answer={<>r = rₓî + r_yĵ; R = √(A² + B² + 2AB cosθ)</>}
        />
      </Expandable>
      <Expandable title="Practice problem — angle between two vectors" variant="example">
        <SolvedProblem
          number={2}
          title="Angle between F = 3î + 4ĵ − 5k̂ and d = 5î + 4ĵ + 3k̂"
          question="Find the angle between the force F = (3î + 4ĵ − 5k̂) units and the displacement d = (5î + 4ĵ + 3k̂) units."
          given={<>F = 3î + 4ĵ − 5k̂, d = 5î + 4ĵ + 3k̂</>}
          solution={
            <>
              <p><strong>Step 1 — dot product:</strong></p>
              <FormulaBlock latex={String.raw`\vec{F}\cdot\vec{d} = (3)(5) + (4)(4) + (-5)(3) = 15 + 16 - 15 = 16`} important />
              <p><strong>Step 2 — magnitudes:</strong></p>
              <FormulaBlock latex={String.raw`|\vec{F}| = \sqrt{3^2 + 4^2 + (-5)^2} = \sqrt{9 + 16 + 25} = \sqrt{50} = 5\sqrt{2}`} />
              <FormulaBlock latex={String.raw`|\vec{d}| = \sqrt{5^2 + 4^2 + 3^2} = \sqrt{25 + 16 + 9} = \sqrt{50} = 5\sqrt{2}`} />
              <p><strong>Step 3 — angle</strong> from <Formula>{String.raw`\vec{F}\cdot\vec{d} = |\vec{F}||\vec{d}|\cos\theta`}</Formula>:</p>
              <FormulaBlock latex={String.raw`\cos\theta = \frac{\vec{F}\cdot\vec{d}}{|\vec{F}||\vec{d}|} = \frac{16}{(5\sqrt{2})(5\sqrt{2})} = \frac{16}{50} = \frac{8}{25}`} important />
              <FormulaBlock latex={String.raw`\theta = \cos^{-1}\left(\frac{8}{25}\right) \approx 71.33^\circ`} important />
            </>
          }
          answer="θ ≈ 71.33°"
        />
      </Expandable>

      <h2 id="h-projectile">3.6 Projectile Motion</h2>
      <p>
        A <strong>projectile</strong> is an object in flight after being thrown or projected — a football, a
        cricket ball, an arrow, … .
      </p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`a_x = 0, \quad a_y = -g`}</Formula>; initial components <Formula>{String.raw`u_x = u\cos\theta_0, \quad u_y = u\sin\theta_0`}</Formula></li>
          <li><Formula>{String.raw`x = (u\cos\theta_0)\,t`}</Formula></li>
          <li><Formula>{String.raw`y = (u\sin\theta_0)\,t - \tfrac{1}{2}g\,t^2`}</Formula></li>
          <li><Formula>{String.raw`v_x = u\cos\theta_0\ (\text{constant})`}</Formula>; <Formula>{String.raw`v_y = u\sin\theta_0 - g\,t`}</Formula></li>
        </ul>
      </FormulaCard>
      <KeyPoint title="Velocity & acceleration at the highest point">
        The horizontal component <Formula>{String.raw`u_x = u\cos\theta_0`}</Formula> stays{" "}
        <strong>constant</strong>; the vertical component behaves like free fall. At the topmost point{" "}
        <strong>v_y = 0</strong> and the velocity is purely horizontal — but the acceleration is{" "}
        <strong>still g downward</strong> (a = −g). Gravity does not switch off at the top.
      </KeyPoint>
      <p><strong>Equation of path (trajectory)</strong> — eliminate t between x and y:</p>
      <FormulaBlock latex={String.raw`y = x\tan\theta_0 - \frac{gx^2}{2u^2\cos^2\theta_0}`} important />
      <p>
        Since g, θ₀ and u are constants this has the form y = ax + bx² —{" "}
        <Highlight color="blue">the path of a projectile is a parabola</Highlight>.
      </p>
      <Stepper
        steps={[
          { label: "Time of maximum height", description: <Formula>{String.raw`v_y = 0 \Rightarrow t_m = \frac{u\sin\theta_0}{g}`}</Formula> },
          { label: "Time of flight", description: (<><Formula>{String.raw`y = 0 \Rightarrow T_f = \frac{2u\sin\theta_0}{g} = 2t_m`}</Formula> (symmetry of the parabola)</>) },
          { label: "Maximum height", description: <Formula>{String.raw`h_m = \frac{u^2\sin^2\theta_0}{2g}`}</Formula> },
          { label: "Horizontal range", description: (<><Formula>{String.raw`R = \frac{u^2\sin 2\theta_0}{g}`}</Formula> — maximum at θ₀ = 45°: R_m = u²/g</>) },
        ]}
      />
      <MetricCard
        label="Maximum range"
        value="45°"
        unit="projection angle"
        trend="neutral"
        description="For a given launch speed, R = u² sin2θ₀/g is largest when sin2θ₀ = 1, i.e. θ₀ = 45°, giving R_m = u²/g."
      />
      <Expandable title="Derivations — time of flight, maximum height &amp; horizontal range" variant="example">
        <p><strong>Time of flight (T)</strong> — vertical motion up to the highest point with <Formula>{String.raw`v_y = u\sin\theta - gt`}</Formula>, where v_y = 0:</p>
        <FormulaBlock latex={String.raw`0 = u\sin\theta - g\,t_m \;\Rightarrow\; t_m = \frac{u\sin\theta}{g}`} />
        <FormulaBlock latex={String.raw`T = 2\,t_m = \frac{2u\sin\theta}{g}`} important />
        <p><strong>Maximum height (H)</strong> — from <Formula>{String.raw`v_y^2 = u^2\sin^2\theta - 2gH`}</Formula> with v_y = 0 at the top:</p>
        <FormulaBlock latex={String.raw`0 = u^2\sin^2\theta - 2gH \;\Rightarrow\; H = \frac{u^2\sin^2\theta}{2g}`} important />
        <p>Projected straight up (θ = 90°), it reaches its greatest possible value:</p>
        <FormulaBlock latex={String.raw`H_{\max} = \frac{u^2}{2g}`} />
        <p><strong>Horizontal range (R)</strong> — horizontal velocity × time of flight:</p>
        <FormulaBlock latex={String.raw`R = u\cos\theta \cdot T = u\cos\theta \cdot \frac{2u\sin\theta}{g} = \frac{u^2(2\sin\theta\cos\theta)}{g} = \frac{u^2\sin 2\theta}{g}`} important />
        <p>Range is greatest when sin 2θ = 1, i.e. θ = 45°: <Formula>{String.raw`R_{\max} = u^2/g`}</Formula>. Comparing the two maxima:</p>
        <FormulaBlock latex={String.raw`H_{\max} = \frac{R_{\max}}{2}`} important />
        <p className="text-sm text-muted-foreground">
          Notice what this last line says: for a given speed, the maximum height (reached throwing straight
          up) is exactly half the maximum horizontal range (reached at 45°).
        </p>
      </Expandable>

      <Expandable title="Previous year questions — Projectile Motion" variant="exercise">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Board Exam 2022 · 2 marks</p>
              <p>A javelin is projected at an angle of 30° with an initial velocity of 5 m/s from the ground. What are its velocity and acceleration at the highest point?</p>
            </div>,
            <div key={2}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Model Exam 2023 · 2 marks</p>
              <ul className="space-y-1 list-none">
                <li>(A) What is the shape of the path followed by a projectile?</li>
                <li>(B) Draw the variation of the velocity components of a projectile with time.</li>
              </ul>
            </div>,
            <div key={3}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Model Exam 2018 · 2 marks</p>
              <p>A javelin is thrown with an initial velocity u at an angle θ with the horizontal. What are the horizontal and vertical velocities at (A) the point of projection and (B) the maximum height?</p>
            </div>,
            <div key={4}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Christmas Exam 2019 · 4 marks</p>
              <p>A player kicks a football at an angle of 30° with an initial velocity of 20 m/s. Find the time of flight of the football (g = 10 m/s²).</p>
            </div>,
            <div key={5}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Model Exam 2022 · 3 marks</p>
              <p>A cricket ball is thrown at a speed of 20 m/s at an angle θ = 30° with the horizontal. Calculate the maximum height (sin 30° = 0.5, g = 10 m/s²).</p>
            </div>,
            <div key={6}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Board Exam 2020 · 4 marks</p>
              <p>Three paths are shown for a football kicked from ground level with the same velocity.</p>
              <ul className="mt-1 ml-5 list-none space-y-1">
                <li>(a) Derive an equation for the maximum height of the football.</li>
                <li>(b) In which path is the horizontal component of velocity maximum?</li>
              </ul>
            </div>,
          ]}
          answers={[
            <div key={1}>
              <ul className="space-y-1 list-none">
                <li>Horizontal velocity at the top: <Formula>{String.raw`u_x = u\cos 30^\circ = 5 \times \frac{\sqrt{3}}{2} = \frac{5\sqrt{3}}{2}\ \text{m s}^{-1}`}</Formula> (≈ 4.3 m/s), unchanged.</li>
                <li>Vertical velocity at the top: v_y = 0 m/s.</li>
                <li>Acceleration: a = −g = −9.8 m/s² — still straight down.</li>
              </ul>
            </div>,
            <div key={2}>
              <p>(A) A <strong>parabola</strong> — the path has the form y = ax + bx².</p>
              <p className="mt-1"><strong>(B)</strong> The two components plotted against time:</p>
              <ProjectileComponentGraphs />
              <p className="mt-1">
                vₓ vs t is a horizontal straight line (constant u cosθ); v_y vs t is a straight line of slope
                −g, falling from +u sinθ to 0 at the top, then continuing below zero.
              </p>
            </div>,
            <div key={3}>
              <ul className="space-y-1 list-none">
                <li>(A) At the point of projection: u_x = u cosθ, u_y = u sinθ.</li>
                <li>(B) At maximum height: v_x = u cosθ (unchanged), v_y = 0.</li>
              </ul>
            </div>,
            <div key={4}>
              <p>T = 2u sinθ / g = 2 × 20 × sin 30° / 10 = 40 × 0.5 / 10 = <strong>2 s</strong>.</p>
            </div>,
            <div key={5}>
              <p>H = u² sin²θ / (2g) = 20² × (0.5)² / (2 × 10) = 400 × 0.25 / 20 = 100 / 20 = <strong>5 m</strong>.</p>
            </div>,
            <div key={6}>
              <p><strong>(a)</strong> At maximum height v_y = 0 in v² = u² − 2gS:</p>
              <p className="mt-1">0 = u² sin²θ − 2gH <Formula>{String.raw`\Rightarrow`}</Formula> <strong>H = u² sin²θ / 2g</strong>.</p>
              <ThreeProjectilePaths />
              <p className="mt-1"><strong>(b)</strong> <strong>Path 3</strong> — laid the flattest (smallest θ), it has the largest horizontal component u cosθ, so it travels the farthest R = u² sin2θ/g.</p>
            </div>,
          ]}
        />
      </Expandable>

      <h2 id="h-circular">3.7 Uniform Circular Motion</h2>
      <p>
        An object following a circular path at <strong>constant speed</strong> is in{" "}
        <strong>uniform circular motion</strong> (&ldquo;uniform&rdquo; refers to the speed). The
        velocity&rsquo;s magnitude stays constant but its <strong>direction changes continuously</strong> —
        the linear velocity is always <strong>tangential</strong> to the path and at right angles to the
        radius. Because the direction changes, the object is accelerating.
      </p>
      <FormulaCard>
        <ul>
          <li>Centripetal acceleration: <Formula>{String.raw`a_c = \frac{v^2}{R}`}</Formula>, directed <strong>towards the centre</strong> (Newton&rsquo;s term; analysed by Huygens, 1673).</li>
          <li>Angular speed: <Formula>{String.raw`\omega = \frac{\Delta\theta}{\Delta t}`}</Formula>; with Δs = RΔθ this gives <Formula>{String.raw`v = R\omega`}</Formula>.</li>
          <li>Also: <Formula>{String.raw`a_c = \omega^2 R`}</Formula></li>
          <li>Period–frequency link: <Formula>{String.raw`T = \frac{1}{\nu}`}</Formula></li>
          <li>Angular speed from frequency: <Formula>{String.raw`\omega = \frac{2\pi}{T} = 2\pi\nu`}</Formula></li>
          <li>Linear speed from a full cycle: <Formula>{String.raw`v = \frac{2\pi R}{T} = 2\pi R\nu`}</Formula></li>
          <li>Centripetal acceleration from frequency: <Formula>{String.raw`a_c = 4\pi^2\nu^2 R`}</Formula></li>
        </ul>
      </FormulaCard>
      <Expandable title="Derivation — v = ωr (arc geometry)" variant="example">
        <p>An object sweeps out an arc AB of length s over a time t on a circle of radius r.</p>
        <p><strong>1 · Linear distance</strong> — at constant speed v: <Formula>{String.raw`s = v\,t \qquad (1)`}</Formula></p>
        <p><strong>2 · Angle subtended at the centre</strong> — arc over radius: <Formula>{String.raw`\theta = \frac{s}{r} \;\Rightarrow\; s = r\,\theta \qquad (2)`}</Formula></p>
        <p><strong>3 · Equating (1) and (2)</strong>:</p>
        <FormulaBlock latex={String.raw`r\,\theta = v\,t \;\Rightarrow\; v = r\,\frac{\theta}{t}`} />
        <p>Since the angular velocity is, by definition, <Formula>{String.raw`\omega = \theta/t`}</Formula>:</p>
        <FormulaBlock latex={String.raw`v = \omega r`} important />
      </Expandable>
      <Expandable title="Example 3.3 — Insect in a circular groove" variant="example">
        <ProblemSolution.Problem>
          <p>An insect trapped in a circular groove of radius 12 cm moves along the groove steadily, completing 7 revolutions in 100 s. (a) What are the angular speed and the linear speed? (b) Is the acceleration vector a constant vector? What is its magnitude?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\omega = \frac{2\pi}{T} = \frac{2\pi \times 7}{100} = 0.44\ \text{rad s}^{-1}`} />
          <FormulaBlock latex={String.raw`v = \omega R = 0.44 \times 12 = 5.3\ \text{cm s}^{-1}`} />
          <p>
            The direction of v is tangential at every point; the acceleration (magnitude constant) is always
            towards the centre — its direction changes continuously, so it is{" "}
            <strong>not a constant vector</strong>.
          </p>
          <FormulaBlock latex={String.raw`a = \omega^2 R = (0.44)^2 (12) = 2.3\ \text{cm s}^{-2}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Previous year questions — Uniform Circular Motion" variant="exercise">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Christmas Exam 2018 · 1 + 2 = 3 marks</p>
              <p>In circular motion, the direction of linear velocity changes continuously.</p>
              <ul className="mt-1 ml-5 list-none space-y-1">
                <li>(A) Write the direction of linear velocity.</li>
                <li>(B) Derive the relation between linear velocity and angular velocity in uniform circular motion.</li>
              </ul>
            </div>,
            <div key={2}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Board Exam 2019 · 1 + 2 = 3 marks</p>
              <ul className="space-y-1 list-none">
                <li>(a) The figure shows the path of an object in uniform circular motion. Mark the directions of the velocity and the centripetal acceleration of the particle at point P.</li>
                <li>(b) An object moving uniformly on a circular path of radius 12 cm completes 7 revolutions in 100 s. Find the angular speed and the linear speed of the motion.</li>
              </ul>
            </div>,
          ]}
          answers={[
            <div key={1}>
              <p><strong>(A)</strong> <strong>Tangential</strong> — along the tangent to the circular path at that point.</p>
              <p className="mt-1"><strong>(B)</strong> With the arc–radius relation s = rθ (see the &ldquo;v = ωr&rdquo; derivation box above): <strong>v = ωr</strong>.</p>
            </div>,
            <div key={2}>
              <p><strong>(a)</strong></p>
              <CircularMotionVectors />
              <p className="mt-1"><strong>(b)</strong> r = 12 cm = 0.12 m, n = 7 revolutions in t = 100 s — the same numbers as Example 3.3:</p>
              <ul className="mt-1 ml-5 space-y-1 list-none">
                <li>Angular speed: ω = 2πn/t = 44/100 = <strong>0.44 rad/s</strong>.</li>
                <li>Linear speed: v = ωr = 0.44 × 0.12 = <strong>0.0528 m/s</strong> (≈ 5.3 cm/s).</li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>

      <h3>3.7.1 Centripetal force and acceleration</h3>
      <p>
        <strong>Centripetal acceleration</strong> — the acceleration directed towards the centre of the
        circular path that keeps a body moving along that circle. Its magnitude has three equivalent forms:
      </p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`a_c = \frac{v^2}{r} = v\,\omega = \omega^2 r`}</Formula></li>
          <li>v = linear velocity · r = radius · ω = angular velocity.</li>
        </ul>
      </FormulaCard>
      <p>
        <strong>Centripetal force</strong> — by Newton&rsquo;s second law (<Formula>{String.raw`F = ma`}</Formula>),
        the net force towards the centre that produces this acceleration:
      </p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`F_c = \frac{m v^2}{r} = m v\,\omega = m \omega^2 r`}</Formula></li>
          <li>m = mass of the object · v = linear velocity · r = radius · ω = angular velocity.</li>
        </ul>
        <p className="pt-2 text-[0.9rem] text-muted-foreground">
          Centripetal force is <strong>not a new kind of force</strong> — it is the name given to whichever
          inward pull does the job: tension in a string, friction of tyres, gravity in orbit.
        </p>
      </FormulaCard>
      <Expandable title="Derivation — a_c = v²/r for uniform circular motion" variant="example">
        <p>
          As the particle traverses a tiny arc from P to P&prime;, both its radius and its velocity turn
          through the same angle, so the triangle of displacements (<Formula>{String.raw`\mathbf{r}, \mathbf{r}^{\prime}, \Delta\mathbf{r}`}</Formula>)
          is <strong>similar</strong> to the triangle of velocities (<Formula>{String.raw`\mathbf{v}, \mathbf{v}^{\prime}, \Delta\mathbf{v}`}</Formula>):
        </p>
        <FormulaBlock latex={String.raw`\frac{|\Delta\mathbf{r}|}{r} = \frac{|\Delta\mathbf{v}|}{v} \;\Rightarrow\; |\Delta\mathbf{v}| = \frac{v}{r}\,|\Delta\mathbf{r}|`} />
        <p>Divide both sides by Δt and let Δt → 0:</p>
        <FormulaBlock latex={String.raw`a_c = \lim_{\Delta t\to 0}\frac{|\Delta\mathbf{v}|}{\Delta t} = \frac{v}{r}\,\lim_{\Delta t\to 0}\frac{|\Delta\mathbf{r}|}{\Delta t} = \frac{v}{r}\cdot v = \frac{v^2}{r}`} important />
      </Expandable>
      <Expandable title="Board exam questions — acceleration with constant speed" variant="exercise">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p>Uniform circular motion is a special case of two-dimensional motion having centripetal acceleration.</p>
              <ul className="mt-1 ml-5 list-none space-y-1">
                <li>(a) Define centripetal acceleration.</li>
                <li>(b) Can a body have acceleration while moving with constant speed? Explain.</li>
                <li>(c) Express angular velocity in terms of angular displacement.</li>
              </ul>
            </div>,
          ]}
          answers={[
            <div key={1}>
              <p><strong>(a)</strong> The acceleration directed towards the centre of the circular path in uniform circular motion, given by a_c = v²/r.</p>
              <p className="mt-1"><strong>(b)</strong> <strong>Yes.</strong> In uniform circular motion the speed stays constant but the direction of the velocity changes continuously, so there is a centripetal acceleration towards the centre.</p>
              <p className="mt-1"><strong>(c)</strong> ω = θ/t, where θ is the angular displacement swept out in time t.</p>
            </div>,
          ]}
        />
      </Expandable>

      <h2 id="h-exercises">Exercises 3.1 – 3.22</h2>
      <Expandable title="Exercises 3.1 – 3.22" variant="exercise">
        <ol>
          <li>State, for each of the following physical quantities, if it is a scalar or a vector: volume, mass, speed, acceleration, density, number of moles, velocity, angular frequency, displacement, angular velocity.</li>
          <li>Pick out the two scalar quantities in the following list: force, angular momentum, work, current, linear momentum, electric field, average velocity, magnetic moment, relative velocity.</li>
          <li>Pick out the only vector quantity in the following list: temperature, pressure, impulse, time, power, total path length, energy, gravitational potential, coefficient of friction, charge.</li>
          <li>State with reasons whether the following algebraic operations with scalar and vector quantities are meaningful: (a) adding any two scalars; (b) adding a scalar to a vector of the same dimensions; (c) multiplying any vector by any scalar; (d) multiplying any two scalars; (e) adding any two vectors; (f) adding a component of a vector to the same vector.</li>
          <li>Read each statement carefully and state, with reasons, if it is true or false: (a) the magnitude of a vector is always a scalar; (b) each component of a vector is always a scalar; (c) total path length is always equal to the magnitude of the displacement vector; (d) average speed is either greater or equal to |average velocity|; (e) three vectors not lying in a plane can never add up to a null vector.</li>
          <li>Establish the following vector inequalities geometrically or otherwise: (a) |a + b| ≤ |a| + |b|; (b) |a + b| ≥ ||a| − |b||; (c) |a − b| ≤ |a| + |b|; (d) |a − b| ≥ ||a| − |b||. When does the equality sign apply?</li>
          <li>Given a + b + c + d = 0, which of the following statements are correct: (a) a, b, c, d must each be a null vector; (b) the magnitude of (a + c) equals the magnitude of (b + d); (c) the magnitude of a can never be greater than the sum of the magnitudes of b, c and d; (d) b + c must lie in the plane of a and d if a and d are not collinear, and in the line of a and d if they are collinear?</li>
          <li>Three girls skating on a circular ice ground of radius 200 m start from a point P on the edge and reach a point Q diametrically opposite to P following different paths. What is the magnitude of the displacement vector for each? For which girl is this equal to the actual length of path skated?</li>
          <li>A cyclist starts from the centre O of a circular park of radius 1 km, reaches the edge P, cycles along the circumference, and returns to the centre along QO as shown. If the round trip takes 10 min, what are the (a) net displacement, (b) average velocity, and (c) average speed?</li>
          <li>On an open ground, a motorist follows a track that turns left by 60° after every 500 m. Starting from a given turn, specify the displacement at the third, sixth and eighth turn. Compare with the total path length in each case.</li>
          <li>A passenger arriving in a new town wishes to go from the station to a hotel 10 km away on a straight road. A dishonest cabman takes him along a circuitous path 23 km long, reaching the hotel in 28 min. What are (a) the average speed of the taxi and (b) the magnitude of average velocity? Are the two equal?</li>
          <li>The ceiling of a long hall is 25 m high. What is the maximum horizontal distance a ball thrown with a speed of 40 m s⁻¹ can go without hitting the ceiling?</li>
          <li>A cricketer can throw a ball to a maximum horizontal distance of 100 m. How high above the ground can the cricketer throw the same ball?</li>
          <li>A stone tied to the end of a string 80 cm long is whirled in a horizontal circle with a constant speed; it makes 14 revolutions in 25 s. What is the magnitude and direction of the acceleration?</li>
          <li>An aircraft executes a horizontal loop of radius 1.00 km with a steady speed of 900 km h⁻¹. Compare its centripetal acceleration with g.</li>
          <li>Read each statement carefully and state, with reasons, if it is true or false: (a) the net acceleration of a particle in circular motion is always along the radius towards the centre; (b) the velocity vector of a particle at a point is always along the tangent to the path at that point; (c) the acceleration vector of a particle in uniform circular motion averaged over one cycle is a null vector.</li>
          <li>The position of a particle is given by <Formula>{String.raw`\mathbf{r} = 3.0t^2\hat{\mathbf{i}} - 2.0t\hat{\mathbf{j}} + 4.0t\hat{\mathbf{k}}`}</Formula> m where t is in seconds. (a) Find v and a. (b) What are the magnitude and direction of the velocity at t = 2.0 s?</li>
          <li>A particle starts from the origin at t = 0 with a velocity of 10.0 ĵ m s⁻¹ and moves in the x–y plane with constant acceleration (8.0î + 2.0ĵ) m s⁻². (a) At what time is the x-coordinate 16 m, and what is the y-coordinate then? (b) What is the speed at that time?</li>
          <li>î and ĵ are unit vectors along x- and y-axes. What are the magnitude and direction of the vectors î + ĵ and î − ĵ? What are the components of a vector A = 2î + 3ĵ along the directions of î + ĵ and î − ĵ? [You may use the graphical method.]</li>
          <li>For any arbitrary motion in space, which of the following relations are true: (a) v_avg = ½[v(t₁) + v(t₂)]; (b) v_avg = [r(t₂) − r(t₁)]/(t₂ − t₁); (c) v(t) = v(0) + at; (d) r(t) = r(0) + v(0)t + ½at²; (e) a_avg = [v(t₂) − v(t₁)]/(t₂ − t₁)?</li>
          <li>Read each statement carefully. A scalar quantity is one that (a) is conserved in a process; (b) can never take negative values; (c) must be dimensionless; (d) does not vary from one point to another in space; (e) has the same value for observers with different orientations of axes.</li>
          <li>An aircraft is flying at a height of 3400 m above the ground. If the angle subtended at a ground observation point by the aircraft positions 10.0 s apart is 30°, what is the speed of the aircraft?</li>
        </ol>
        <Expandable title="Answer Key — Exercises 3.1 – 3.22">
          <ol>
            <li>Scalars: volume, mass, speed, density, number of moles, angular frequency. Vectors: acceleration, velocity, displacement, angular velocity.</li>
            <li>Scalars: work, current.</li>
            <li>Vector: impulse.</li>
            <li>(a) Yes, if the scalars have the same units; (b) no — a scalar and a vector cannot be added; (c) yes; (d) yes — product of two scalars is a scalar; (e) yes; (f) no — a component is not a vector.</li>
            <li>(a) True; (b) True — a component is a signed number, hence a scalar; (c) False — only for motion without reversal; (d) True; (e) True — their sum would have a component perpendicular to the plane left unbalanced.</li>
            <li>Equalities: in (a) and (c) when a and b are parallel and in the same direction; in (b) and (d) when they are parallel and opposite.</li>
            <li>Correct: (b), (c), (d). (a) is wrong — e.g. a + b = −(c + d) with all non-zero.</li>
            <li>|displacement| = 400 m (the diameter) for each girl. It equals the path length for the girl who skates straight along the diameter.</li>
            <li>(a) 0; (b) 0; (c) path ≈ 1 + π(1) + 1 ≈ 5.14 km in 10 min ≈ 8.6 m s⁻¹.</li>
            <li>Third turn: displacement 500 m (path 1500 m). Sixth turn: 0 (six turns × 60° = 360°; path 3000 m). Eighth turn: 500 m, path 4000 m — the motorist is two steps back from the start.</li>
            <li>(a) Average speed = 23/28 × 60 ≈ 49.3 km h⁻¹. (b) |average velocity| = 10/28 × 60 ≈ 21.4 km h⁻¹. Not equal (path ≠ |displacement|).</li>
            <li>Projection must satisfy h_m = u²sin²θ/2g ≤ 25 m with u = 40 m s⁻¹: sinθ ≤ √(2gh/u²) = √(490/1600) → θ ≈ 33.6°. R = (1600 sin 67.2°)/9.8 ≈ <strong>150 m</strong>.</li>
            <li>R_m = u²/g = 100 m → u² = 980. Max height (vertical throw) = u²/2g = 980/19.6 = <strong>50 m</strong>.</li>
            <li>a = ω²R = (2π × 14/25)² × 0.80 ≈ <strong>9.9 m s⁻²</strong>, always directed towards the centre of the circle.</li>
            <li>v = 250 m s⁻¹; a_c = v²/R = 250²/1000 = 62.5 m s⁻² ≈ <strong>6.4 g</strong>.</li>
            <li>(a) False — true only for uniform circular motion; (b) True; (c) True — average acceleration over a full cycle is zero (the velocity vectors average out).</li>
            <li>v = 6.0tî − 2.0ĵ + 4.0k̂; a = 6.0î m s⁻². At t = 2.0 s: v = 12î − 2ĵ + 4k̂, |v| = √(144 + 4 + 16) ≈ <strong>12.8 m s⁻¹</strong>.</li>
            <li>(a) x = ½aₓt² = 4t² = 16 → t = 2 s; y = u_y t + ½a_yt² = 20 + 4 = <strong>24 m</strong>. (b) vₓ = 16, v_y = 14 → speed = √(256 + 196) ≈ <strong>21.3 m s⁻¹</strong>.</li>
            <li>î + ĵ: √2 at 45°; î − ĵ: √2 at −45°. A = 2î + 3ĵ: component along (î+ĵ)/√2 = (5/√2) ≈ 3.54; along (î−ĵ)/√2 = (−1/√2) ≈ −0.71.</li>
            <li>Only (b) and (e) are always true; (c) and (d) hold only for constant acceleration.</li>
            <li>Only (e) is true — scalars like work (not conserved, dimensional) or pressure (varies in space) break the others.</li>
            <li>Level flight at 3400 m, chord subtends 30°: s ≈ h tan 30° = 3400/√3 ≈ 1963 m in 10 s → <strong>v ≈ 196 m s⁻¹</strong> (≈ 706 km h⁻¹).</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <Expandable title="Last-minute recall — formulas only">
        <ul>
          <li><Formula>{String.raw`\mathbf{R} = \mathbf{A} + \mathbf{B}`}</Formula>, <Formula>{String.raw`|\mathbf{R}| = \sqrt{A^2 + B^2 + 2AB\cos\theta}`}</Formula></li>
          <li><Formula>{String.raw`\mathbf{v} = \frac{\mathrm{d}\mathbf{r}}{\mathrm{d}t}`}</Formula>, <Formula>{String.raw`\mathbf{a} = \frac{\mathrm{d}\mathbf{v}}{\mathrm{d}t}`}</Formula></li>
          <li><Formula>{String.raw`\mathbf{r} = \mathbf{r}_0 + \mathbf{u} t + \tfrac{1}{2}\mathbf{a}t^2`}</Formula></li>
          <li><Formula>{String.raw`h_m = \frac{u^2\sin^2\theta_0}{2g}`}</Formula></li>
          <li><Formula>{String.raw`R = \frac{u^2\sin2\theta_0}{g}`}</Formula>, maximum <Formula>{String.raw`R_m = \frac{u^2}{g}`}</Formula> at 45°</li>
          <li><Formula>{String.raw`a_c = \frac{v^2}{R} = \omega^2 R = 4\pi^2\nu^2 R`}</Formula>, <Formula>{String.raw`v = R\omega`}</Formula></li>
        </ul>
      </Expandable>
    </>
  );
}