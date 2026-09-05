import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { ProcessCard } from "@/components/content/process/ProcessCard";

export default function MotionInAPlaneChapter() {
  return (
    <>
      <h2 id="h-intro">3.1 Introduction</h2>
      <p>
        In Chapter 2 the directional aspect of position, displacement, velocity and acceleration was
        handled by +/− signs — in one dimension only two directions exist. To describe motion in{" "}
        <strong>two dimensions</strong> (a plane) or <strong>three dimensions</strong> (space) we need{" "}
        <strong>vectors</strong>.
      </p>
      <KeyPoint>
        This chapter first develops the language of vectors (scalars, addition, multiplication,
        resolution), then applies it to motion in a plane: motion with constant acceleration,{" "}
        <strong>projectile motion</strong> in detail, and <strong>uniform circular motion</strong>. The
        equations extend naturally to three dimensions.
      </KeyPoint>

      <h2 id="h-scalars-vectors">3.2 Scalars and Vectors</h2>
      <Callout type="important" title="Scalar vs vector">
        A <strong>scalar</strong> has magnitude only — a single number with the proper unit (distance,
        mass, temperature, time); combined with the rules of ordinary algebra. A{" "}
        <Highlight color="blue">vector</Highlight> has magnitude <em>and</em> direction and obeys the
        <strong> triangle law</strong> (equivalently the <strong>parallelogram law</strong>) of addition —
        examples: displacement, velocity, acceleration, force.
      </Callout>
      <p>
        Notation: bold face <strong>v</strong> or arrow <Formula>{String.raw`\vec{v}`}</Formula>; magnitude
        |<strong>v</strong>| = v.
      </p>
      <h3>3.2.1 Position and displacement vectors</h3>
      <ul>
        <li>Position vector <strong>r</strong> of a point P with respect to origin O; at P′ it is <strong>r′</strong>.</li>
        <li>Displacement vector PP′ = <strong>r′</strong> − <strong>r</strong> — the <strong>straight line</strong> joining initial and final positions, <strong>independent of the actual path</strong>.</li>
        <li>|displacement| ≤ path length (equality only when the path never turns back).</li>
      </ul>
      <h3>3.2.2 Equality of vectors</h3>
      <p>
        Two vectors are equal <strong>iff</strong> they have the same magnitude <em>and</em> the same
        direction. Vectors have no fixed location — shifting a vector parallel to itself leaves it
        unchanged (<strong>free vectors</strong>).
      </p>

      <h2 id="h-multiplication">3.3 Multiplication of Vectors by Real Numbers</h2>
      <FormulaCard>
        <ul>
          <li>λ &gt; 0: magnitude ×λ, <strong>same direction</strong> (2A, |2A| = 2|A|).</li>
          <li>λ &lt; 0: magnitude ×|λ|, <strong>opposite direction</strong> (−A, −1.5A).</li>
          <li>If λ has physical dimension, the dimension of λA is the product of the dimensions — e.g. constant velocity × duration gives displacement.</li>
        </ul>
      </FormulaCard>

      <h2 id="h-addition">3.4 Addition and Subtraction of Vectors — Graphical Method</h2>
      <p>
        <strong>Head-to-tail (triangle) method:</strong> place <strong>B</strong>&rsquo;s tail at{" "}
        <strong>A</strong>&rsquo;s head; the resultant <strong>R</strong> joins <strong>A</strong>&rsquo;s
        tail to <strong>B</strong>&rsquo;s head.
      </p>
      <FormulaCard>
        <ul>
          <li>Commutative: <Formula>{String.raw`\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}`}</Formula></li>
          <li>Associative: <Formula>{String.raw`(\mathbf{A} + \mathbf{B}) + \mathbf{C} = \mathbf{A} + (\mathbf{B} + \mathbf{C})`}</Formula></li>
          <li>Null vector: <Formula>{String.raw`\mathbf{A} + (-\mathbf{A}) = \mathbf{0}`}</Formula>, |0| = 0; direction not specified. Properties: <Formula>{String.raw`\mathbf{A}+\mathbf{0}=\mathbf{A}`}</Formula>, λ0 = 0, 0·A = 0.</li>
          <li>Subtraction: <Formula>{String.raw`\mathbf{A} - \mathbf{B} = \mathbf{A} + (-\mathbf{B})`}</Formula></li>
        </ul>
      </FormulaCard>
      <p>
        The <strong>parallelogram method</strong> (tails at a common origin; complete the parallelogram;
        resultant along the diagonal) is equivalent to the triangle method.
      </p>
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

      <h2 id="h-resolution">3.5 Resolution of Vectors</h2>
      <p>
        A vector <strong>A</strong> in a plane can be expressed along two non-collinear vectors{" "}
        <strong>a</strong>, <strong>b</strong>: <Formula>{String.raw`\mathbf{A} = \lambda\mathbf{a} + \mu\mathbf{b}`}</Formula>.
        Most convenient: the axes of a rectangular coordinate system using <strong>unit vectors</strong>.
      </p>
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

      <h2 id="h-analytical">3.6 Vector Addition — Analytical Method</h2>
      <p>Add component-wise — more accurate and less tedious than the graphical method:</p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`\mathbf{R} = \mathbf{A} + \mathbf{B}\;\Rightarrow\; R_x = A_x + B_x,\ R_y = A_y + B_y`}</Formula> (2-D)</li>
          <li>3-D: <Formula>{String.raw`R_x = A_x + B_x,\ R_y = A_y + B_y,\ R_z = A_z + B_z`}</Formula></li>
          <li>For <Formula>{String.raw`\mathbf{T} = \mathbf{a} + \mathbf{b} - \mathbf{c}`}</Formula>: <Formula>{String.raw`T_x = a_x + b_x - c_x`}</Formula>, likewise for the y- and z-components.</li>
        </ul>
      </FormulaCard>
      <Expandable title="Example 3.2 — Magnitude & direction of the resultant (law of cosines/sines)" variant="example">
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
      <Expandable title="Example 3.3 — Motorboat vs water current" variant="example">
        <ProblemSolution.Problem>
          <p>A motorboat races north at 25 km h⁻¹ while the water current is 10 km h⁻¹ in a direction 60° east of south. Find the resultant velocity of the boat.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The angle between the boat direction (north) and the current (60° east of south) is 120°.</p>
          <FormulaBlock latex={String.raw`R = \sqrt{25^2 + 10^2 + 2(25)(10)\cos 120^\circ} = \sqrt{625 + 100 - 250} \approx 22\ \text{km h}^{-1}`} important />
          <p>Direction by the law of sines:</p>
          <FormulaBlock latex={String.raw`\sin\phi = \frac{v_c\sin\theta}{R} = \frac{10\sin 120^\circ}{21.8} \approx 0.397`} />
          <FormulaBlock latex={String.raw`\phi \approx 23.4^\circ`} />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-motion-plane">3.7 Motion in a Plane</h2>
      <p>
        Position vector <Formula>{String.raw`\mathbf{r}(t) = x\hat{\mathbf{i}} + y\hat{\mathbf{j}}`}</Formula>;
        displacement <Formula>{String.raw`\Delta\mathbf{r} = \mathbf{r}' - \mathbf{r} = \Delta x\hat{\mathbf{i}} + \Delta y\hat{\mathbf{j}}`}</Formula>.
      </p>
      <Callout type="important" title="Velocity">
        Average velocity v̄ = <Formula>{String.raw`\Delta\mathbf{r}/\Delta t`}</Formula> (same direction as Δr).
        Instantaneous velocity:
        <FormulaBlock latex={String.raw`\mathbf{v} = \lim_{\Delta t\to 0}\frac{\Delta\mathbf{r}}{\Delta t} = \frac{\mathrm{d}\mathbf{r}}{\mathrm{d}t}`} important />
      </Callout>
      <p>
        The direction of velocity at any point is <Highlight color="blue">tangential to the path</Highlight>,
        in the direction of motion. Components: vₓ = dx/dt, v_y = dy/dt;{" "}
        <Formula>{String.raw`v = \sqrt{v_x^2 + v_y^2}`}</Formula>,{" "}
        <Formula>{String.raw`\tan\theta = v_y/v_x`}</Formula>.
      </p>
      <Callout type="important" title="Acceleration">
        Average acceleration ā = <Formula>{String.raw`\Delta\mathbf{v}/\Delta t`}</Formula>; instantaneous:
        <FormulaBlock latex={String.raw`\mathbf{a} = \lim_{\Delta t\to 0}\frac{\Delta\mathbf{v}}{\Delta t} = \frac{\mathrm{d}\mathbf{v}}{\mathrm{d}t}`} important />
        with components aₓ = dvₓ/dt, a_y = dv_y/dt.
      </Callout>
      <KeyPoint title="1-D vs 2-D/3-D">
        In one dimension velocity and acceleration are always along the same straight line. In two or three
        dimensions the angle between <strong>v</strong> and <strong>a</strong> can be{" "}
        <strong>anything from 0° to 180°</strong>.
      </KeyPoint>
      <Expandable title="Example 3.4 — Given r(t), find v(t), a(t)" variant="example">
        <ProblemSolution.Problem>
          <p>The position of a particle is given by <Formula>{String.raw`\mathbf{r} = 3.0t\,\hat{\mathbf{i}} + 2.0t^2\,\hat{\mathbf{j}} + 5.0\,\hat{\mathbf{k}}`}</Formula> (t in seconds, r in metres). (a) Find v(t) and a(t). (b) Find the magnitude and direction of v(t) at t = 1.0 s.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\mathbf{v} = \frac{\mathrm{d}\mathbf{r}}{\mathrm{d}t} = 3.0\,\hat{\mathbf{i}} + 4.0t\,\hat{\mathbf{j}}`} />
          <FormulaBlock latex={String.raw`\mathbf{a} = \frac{\mathrm{d}\mathbf{v}}{\mathrm{d}t} = 4.0\,\hat{\mathbf{j}}\ \Rightarrow\ a = 4.0\ \text{m s}^{-2}\ \text{along } y`} important />
          <p>At t = 1.0 s: <Formula>{String.raw`\mathbf{v} = 3.0\hat{\mathbf{i}} + 4.0\hat{\mathbf{j}}`}</Formula></p>
          <FormulaBlock latex={String.raw`|\mathbf{v}| = \sqrt{3^2 + 4^2} = 5.0\ \text{m s}^{-1}`} />
          <FormulaBlock latex={String.raw`\theta = \tan^{-1}\frac{v_y}{v_x} = \tan^{-1}\frac{4}{3} \approx 53^\circ\ \text{with the } x\text{-axis}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-constant-accel">3.8 Motion in a Plane with Constant Acceleration</h2>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`\mathbf{v} = \mathbf{v}_0 + \mathbf{a}t`}</Formula></li>
          <li><Formula>{String.raw`\mathbf{r} = \mathbf{r}_0 + \mathbf{v}_0 t + \tfrac{1}{2}\mathbf{a}t^2`}</Formula></li>
          <li>Components: <Formula>{String.raw`x = x_0 + v_{ox}t + \tfrac{1}{2}a_x t^2`}</Formula>, <Formula>{String.raw`y = y_0 + v_{oy}t + \tfrac{1}{2}a_y t^2`}</Formula>, <Formula>{String.raw`v_x = v_{ox} + a_x t`}</Formula>, <Formula>{String.raw`v_y = v_{oy} + a_y t`}</Formula></li>
        </ul>
      </FormulaCard>
      <Callout type="important" title="The independence result">
        Motion in a plane is treated as <Highlight color="blue">two separate simultaneous one-dimensional motions</Highlight> with constant acceleration along two perpendicular directions. A similar result holds in three dimensions.
      </Callout>
      <Expandable title="Example 3.5 — v₀ = 5.0î, a = 3.0î + 2.0ĵ: where is the particle?" variant="example">
        <ProblemSolution.Problem>
          <p>A particle starts from the origin at t = 0 with a velocity 5.0 î m s⁻¹ and moves in the x–y plane under a force producing constant acceleration (3.0î + 2.0ĵ) m s⁻². (a) What is the y-coordinate at the instant its x-coordinate is 84 m? (b) What is the speed at this time?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>From r = v₀t + ½at²:</p>
          <FormulaBlock latex={String.raw`\mathbf{r} = 5.0t\,\hat{\mathbf{i}} + \tfrac{1}{2}(3.0\,\hat{\mathbf{i}} + 2.0\,\hat{\mathbf{j}})t^2 = (5.0t + 1.5t^2)\hat{\mathbf{i}} + 1.0t^2\,\hat{\mathbf{j}}`} />
          <p>So <Formula>{String.raw`x(t) = 5.0t + 1.5t^2`}</Formula>, <Formula>{String.raw`y(t) = 1.0t^2`}</Formula>. Setting x = 84:</p>
          <FormulaBlock latex={String.raw`5.0t + 1.5t^2 = 84\ \Rightarrow\ t = 6\ \text{s}`} />
          <FormulaBlock latex={String.raw`y = 1.0(6)^2 = 36.0\ \text{m}`} important />
          <p>Velocity: <Formula>{String.raw`\mathbf{v} = (5.0 + 3.0t)\hat{\mathbf{i}} + 2.0t\,\hat{\mathbf{j}}`}</Formula>; at t = 6 s, <Formula>{String.raw`\mathbf{v} = 23.0\hat{\mathbf{i}} + 12.0\hat{\mathbf{j}}`}</Formula>:</p>
          <FormulaBlock latex={String.raw`|\mathbf{v}| = \sqrt{23^2 + 12^2} \approx 26\ \text{m s}^{-1}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-projectile">3.9 Projectile Motion</h2>
      <p>
        A <strong>projectile</strong> is an object in flight after being thrown or projected (a football, a
        cricket ball, …). Its motion is the result of two separate, simultaneously occurring components:
        horizontal motion with no acceleration, and vertical motion with constant acceleration g.{" "}
        <strong>Galileo</strong> first stated this independence (Dialogue on the Great World Systems, 1632).
        We neglect air resistance.
      </p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`a_x = 0, \quad a_y = -g`}</Formula>; <Formula>{String.raw`v_{ox} = v_0\cos\theta_0, \quad v_{oy} = v_0\sin\theta_0`}</Formula></li>
          <li><Formula>{String.raw`x = (v_0\cos\theta_0)t`}</Formula></li>
          <li><Formula>{String.raw`y = (v_0\sin\theta_0)t - \tfrac{1}{2}gt^2`}</Formula></li>
          <li><Formula>{String.raw`v_x = v_0\cos\theta_0\ (\text{constant})`}</Formula>; <Formula>{String.raw`v_y = v_0\sin\theta_0 - gt`}</Formula></li>
        </ul>
      </FormulaCard>
      <KeyPoint>
        The horizontal component vₓ stays <strong>constant</strong>; the vertical component behaves like free
        fall. At the maximum height v_y = 0 — the velocity is purely horizontal there.
      </KeyPoint>
      <p><strong>Equation of path (trajectory)</strong> — eliminate t between x and y:</p>
      <FormulaBlock latex={String.raw`y = x\tan\theta_0 - \frac{gx^2}{2v_0^2\cos^2\theta_0}`} important />
      <p>
        Since g, θ₀ and v₀ are constants this has the form y = ax + bx² —{" "}
        <Highlight color="blue">the path of a projectile is a parabola</Highlight>.
      </p>
      <Stepper
        steps={[
          { label: "Time of maximum height", description: <Formula>{String.raw`v_y = 0 \Rightarrow t_m = \frac{v_0\sin\theta_0}{g}`}</Formula> },
          { label: "Time of flight", description: (<><Formula>{String.raw`y = 0 \Rightarrow T_f = \frac{2v_0\sin\theta_0}{g} = 2t_m`}</Formula> (symmetry of the parabola)</>) },
          { label: "Maximum height", description: <Formula>{String.raw`h_m = \frac{v_0^2\sin^2\theta_0}{2g}`}</Formula> },
          { label: "Horizontal range", description: (<><Formula>{String.raw`R = \frac{v_0^2\sin 2\theta_0}{g}`}</Formula> — maximum at θ₀ = 45°: R_m = v₀²/g</>) },
        ]}
      />
      <MetricCard
        label="Maximum range"
        value="45°"
        unit="projection angle"
        trend="neutral"
        description="For a given launch speed, R = v₀² sin2θ₀/g is largest when sin2θ₀ = 1, i.e. θ₀ = 45°, giving R_m = v₀²/g."
      />
      <Expandable title="Example 3.6 — Galileo: ranges at 45° ± α are equal" variant="example">
        <ProblemSolution.Problem>
          <p>Galileo, in Two New Sciences, stated that &ldquo;for elevations which exceed or fall short of 45° by equal amounts, the ranges are equal&rdquo;. Prove this.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>R = v₀² sin2θ₀/g. For angles 45° + α and 45° − α, the argument 2θ₀ is 90° + 2α and 90° − 2α respectively:</p>
          <FormulaBlock latex={String.raw`\sin(90^\circ + 2\alpha) = \sin(90^\circ - 2\alpha) = \cos 2\alpha`} />
          <p>So the two ranges are identical.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 3.7 — Stone thrown horizontally from a cliff" variant="example">
        <ProblemSolution.Problem>
          <p>A hiker on a cliff 490 m above the ground throws a stone horizontally with initial speed 15 m s⁻¹. Neglecting air resistance, find the time taken to reach the ground and the speed with which it hits the ground. (g = 9.8 m s⁻²)</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Origin at the cliff edge, t = 0 at the throw; x positive along the throw, y positive upward.
            Then x₀ = y₀ = 0, v_oy = 0, a_y = −g, v_ox = 15 m s⁻¹. The stone hits the ground when y = −490 m:
          </p>
          <FormulaBlock latex={String.raw`-490 = -\tfrac{1}{2}(9.8)t^2\ \Rightarrow\ t = 10\ \text{s}`} important />
          <p>Velocity components at impact: vₓ = 15 m s⁻¹; v_y = 0 − 9.8 × 10 = −98 m s⁻¹.</p>
          <FormulaBlock latex={String.raw`v = \sqrt{v_x^2 + v_y^2} = \sqrt{15^2 + 98^2} \approx 99\ \text{m s}^{-1}`} important />
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 3.8 — Cricket ball at 28 m s⁻¹, 30° above horizontal" variant="example">
        <ProblemSolution.Problem>
          <p>A cricket ball is thrown at a speed of 28 m s⁻¹ in a direction 30° above the horizontal. Calculate (a) the maximum height, (b) the time to return to the same level, and (c) the distance from the thrower to where it returns to the same level.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>(a) Maximum height:</p>
          <FormulaBlock latex={String.raw`h_m = \frac{(v_0\sin\theta_0)^2}{2g} = \frac{(28\sin 30^\circ)^2}{2 \times 9.8} = \frac{14^2}{19.6} = 10.0\ \text{m}`} />
          <p>(b) Time of flight:</p>
          <FormulaBlock latex={String.raw`T_f = \frac{2v_0\sin\theta_0}{g} = \frac{2 \times 28 \times 0.5}{9.8} = 2.9\ \text{s}`} />
          <p>(c) Range:</p>
          <FormulaBlock latex={String.raw`R = \frac{v_0^2\sin 2\theta_0}{g} = \frac{28^2\sin 60^\circ}{9.8} \approx 69\ \text{m}`} />
        </ProblemSolution.Solution>
      </Expandable>
      <MistakeCard
        mistake="'The kinematic equations apply to uniform circular motion too — the acceleration magnitude is constant.'"
        correction="They do NOT. In UCM the magnitude of acceleration is constant but its direction keeps changing (always towards the centre), so the acceleration is not constant. The kinematic equations require constant acceleration as a vector."
      />

      <h2 id="h-circular">3.10 Uniform Circular Motion</h2>
      <p>
        An object following a circular path at <strong>constant speed</strong> is in{" "}
        <strong>uniform circular motion</strong> (&ldquo;uniform&rdquo; refers to the speed). Since the
        velocity keeps changing direction, the object is accelerating.
      </p>
      <ProcessCard
        title="Where does centripetal acceleration come from?"
        steps={[
          { label: "Tangents & Δv", description: "Velocities v and v′ are tangent at P and P′; Δv = v′ − v by the triangle law, and Δv ⊥ Δr." },
          { label: "Pointing towards the centre", description: "As Δt → 0 the direction of Δv (hence of the acceleration) settles along the radius toward the centre at every point." },
          { label: "Similar triangles", description: "|Δv|/v = |Δr|/R; for small Δt, |Δr| ≈ vΔt." },
          { label: "Take the limit", description: "a_c = lim(Δv/Δt) = (v/R)·v = v²/R." },
        ]}
      />
      <FormulaCard>
        <ul>
          <li>Centripetal acceleration: <Formula>{String.raw`a_c = \frac{v^2}{R}`}</Formula>, directed <strong>towards the centre</strong> (Newton&rsquo;s term; analysis by Huygens, 1673).</li>
          <li>Angular speed ω = Δθ/Δt; with Δs = RΔθ: <Formula>{String.raw`v = R\omega`}</Formula></li>
          <li>Also: <Formula>{String.raw`a_c = \omega^2 R`}</Formula></li>
          <li>Period/frequency: <Formula>{String.raw`T = 1/\nu`}</Formula>, <Formula>{String.raw`\omega = 2\pi\nu`}</Formula>, <Formula>{String.raw`v = 2\pi R/T = 2\pi R\nu`}</Formula>, <Formula>{String.raw`a_c = 4\pi^2\nu^2 R`}</Formula></li>
        </ul>
      </FormulaCard>
      <Callout type="warning" title="Constant magnitude, changing direction">
        Since v and R are constant, |a_c| is constant — but the direction is always towards the centre.{" "}
        <strong>The centripetal acceleration is not a constant vector.</strong> Likewise the resultant
        acceleration in circular motion points to the centre only if the speed is constant.
      </Callout>
      <Expandable title="Example 3.9 — Insect in a circular groove" variant="example">
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
            <li>Projection must satisfy h_m = v₀²sin²θ/2g ≤ 25 m with v₀ = 40 m s⁻¹: sinθ ≤ √(2gh/v₀²) = √(490/1600) → θ ≈ 33.6°. R = (1600 sin 67.2°)/9.8 ≈ <strong>150 m</strong>.</li>
            <li>R_m = v₀²/g = 100 m → v₀² = 980. Max height (vertical throw) = v₀²/2g = 980/19.6 = <strong>50 m</strong>.</li>
            <li>a = ω²R = (2π × 14/25)² × 0.80 ≈ <strong>9.9 m s⁻²</strong>, always directed towards the centre of the circle.</li>
            <li>v = 250 m s⁻¹; a_c = v²/R = 250²/1000 = 62.5 m s⁻² ≈ <strong>6.4 g</strong>.</li>
            <li>(a) False — true only for uniform circular motion; (b) True; (c) True — average acceleration over a full cycle is zero (the velocity vectors average out).</li>
            <li>v = 6.0tî − 2.0ĵ + 4.0k̂; a = 6.0î m s⁻². At t = 2.0 s: v = 12î − 2ĵ + 4k̂, |v| = √(144 + 4 + 16) ≈ <strong>12.8 m s⁻¹</strong>.</li>
            <li>(a) x = ½aₓt² = 4t² = 16 → t = 2 s; y = v_oy t + ½a_yt² = 20 + 4 = <strong>24 m</strong>. (b) vₓ = 16, v_y = 14 → speed = √(256 + 196) ≈ <strong>21.3 m s⁻¹</strong>.</li>
            <li>î + ĵ: √2 at 45°; î − ĵ: √2 at −45°. A = 2î + 3ĵ: component along (î+ĵ)/√2 = (5/√2) ≈ 3.54; along (î−ĵ)/√2 = (−1/√2) ≈ −0.71.</li>
            <li>Only (b) and (e) are always true; (c) and (d) hold only for constant acceleration.</li>
            <li>Only (e) is true — scalars like work (not conserved, dimensional) or pressure (varies in space) break the others.</li>
            <li>Level flight at 3400 m, chord subtends 30°: s ≈ h tan 30° = 3400/√3 ≈ 1963 m in 10 s → <strong>v ≈ 196 m s⁻¹</strong> (≈ 706 km h⁻¹).</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <Expandable title="Key formulas &amp; facts — one page">
        <ul>
          <li>Scalar: magnitude only. Vector: magnitude + direction, obeys triangle/parallelogram law.</li>
          <li>A = Aₓî + A_yĵ; Aₓ = A cosθ, A_y = A sinθ; A = √(Aₓ² + A_y²); tanθ = A_y/Aₓ.</li>
          <li>Resultant: R² = A² + B² + 2AB cosθ; R/sinθ = A/sinβ = B/sinα.</li>
          <li>Motion in a plane: v = dr/dt, a = dv/dt; v tangential to path.</li>
          <li>Constant acceleration: v = v₀ + at; r = r₀ + v₀t + ½at² (independent components).</li>
          <li>Projectile: x = v₀cosθ₀·t; y = v₀sinθ₀·t − ½gt²; path a parabola; t_m = v₀sinθ₀/g; T_f = 2t_m; h_m = (v₀sinθ₀)²/2g; R = v₀²sin2θ₀/g; R_max = v₀²/g at 45°.</li>
          <li>Uniform circular motion: a_c = v²/R = ω²R towards the centre; v = Rω; ω = 2π/T = 2πν; v = 2πRν; a_c = 4π²ν²R.</li>
          <li>Kinematic equations do NOT apply to UCM (a not constant).</li>
        </ul>
      </Expandable>
      <Expandable title="Last-minute recall — formulas only">
        <ul>
          <li><Formula>{String.raw`\mathbf{R} = \mathbf{A} + \mathbf{B}`}</Formula>, <Formula>{String.raw`|\mathbf{R}| = \sqrt{A^2 + B^2 + 2AB\cos\theta}`}</Formula></li>
          <li><Formula>{String.raw`\mathbf{v} = \frac{\mathrm{d}\mathbf{r}}{\mathrm{d}t}`}</Formula>, <Formula>{String.raw`\mathbf{a} = \frac{\mathrm{d}\mathbf{v}}{\mathrm{d}t}`}</Formula></li>
          <li><Formula>{String.raw`\mathbf{r} = \mathbf{r}_0 + \mathbf{v}_0 t + \tfrac{1}{2}\mathbf{a}t^2`}</Formula></li>
          <li><Formula>{String.raw`h_m = \frac{v_0^2\sin^2\theta_0}{2g}`}</Formula>, <Formula>{String.raw`R = \frac{v_0^2\sin2\theta_0}{g}`}</Formula>, <Formula>{String.raw`R_m = \frac{v_0^2}{g}`}</Formula></li>
          <li><Formula>{String.raw`a_c = \frac{v^2}{R} = \omega^2 R = 4\pi^2\nu^2 R`}</Formula>, <Formula>{String.raw`v = R\omega`}</Formula></li>
        </ul>
      </Expandable>
    </>
  );
}