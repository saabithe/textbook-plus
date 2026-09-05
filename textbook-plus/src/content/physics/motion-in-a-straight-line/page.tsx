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

export default function MotionInAStraightLineChapter() {
  return (
    <>
      <h2 id="h-intro">2.1 Introduction</h2>
      <p>
        Motion is change in position of an object with time. It is everywhere: we walk and run, blood
        flows through veins, leaves fall, water flows down a dam, the Earth rotates every 24 hours and
        revolves round the Sun once a year, the Sun itself moves through the Milky Way.
      </p>
      <p>
        This chapter is confined to <strong>rectilinear motion</strong> — motion of objects along a
        straight line. We develop the concepts of <strong>velocity</strong> and{" "}
        <strong>acceleration</strong>, and for rectilinear motion with uniform acceleration we obtain a
        set of simple equations.
      </p>
      <Callout type="important" title="Point-object approximation">
        Objects in motion are treated as <strong>point objects</strong>. This is valid so far as the size
        of the object is much smaller than the distance it moves in a reasonable duration of time — a
        good number of real-life situations can be treated this way without much error.
      </Callout>
      <KeyPoint>
        In <strong>kinematics</strong> we describe motion <em>without</em> going into its causes. What
        causes the motion is the subject of Chapter 4 (Laws of Motion). A car can be {""}
        <em>kinematically described</em> by its x–t, v–t and a–t graphs; <em>why</em> it accelerates is a
        dynamics question.
      </KeyPoint>

      <h2 id="h-2-2">2.2 Instantaneous Velocity and Speed</h2>
      <p>
        Average velocity tells us how fast an object has been moving over a given interval, but not how
        fast it moves at different instants within that interval. For that we define the{" "}
        <strong>instantaneous velocity</strong> (or simply velocity) as the limit of the average
        velocity as the time interval Δt becomes infinitesimally small:
      </p>
      <FormulaBlock latex={String.raw`v = \lim_{\Delta t \to 0}\frac{\Delta x}{\Delta t} = \frac{\mathrm{d}x}{\mathrm{d}t}`} important />
      <p>
        In calculus terms, v is the <strong>differential coefficient of x with respect to t</strong> — the
        rate of change of position with respect to time at that instant. It can be obtained{" "}
        <strong>graphically</strong> or <strong>numerically</strong>.
      </p>
      <p>
        Graphically, for the motion in Fig. 2.1, the slope of the chord P₁P₂ gives the average velocity
        over the interval; as Δt → 0 the chord becomes the <strong>tangent</strong> at point P and the
        velocity at t = 4 s is the <strong>slope of the tangent</strong> to the position–time graph at
        that instant.
      </p>
      <p>
        Numerically, for the curve x = 0.08t³ the limiting process is made clear by shrinking Δt
        centred at t = 4.0 s:
      </p>
      <TableCard
        caption="Table 2.1 — Limiting value of Δx/Δt at t = 4 s for x = 0.08t³."
        headers={["Δt (s)", "t₁ (s)", "t₂ (s)", "x(t₁) (m)", "x(t₂) (m)", "Δx (m)", "Δx/Δt (m s⁻¹)"]}
        rows={[
          { cells: ["2.0", "3.0", "5.0", "2.16", "10.0", "7.84", "3.92"] },
          { cells: ["1.0", "3.5", "4.5", "3.43", "7.29", "3.86", "3.86"] },
          { cells: ["0.5", "3.75", "4.25", "4.22", "6.14", "1.92", "3.845"] },
          { cells: ["0.1", "3.95", "4.05", "4.93", "5.31", "0.384", "3.840"] },
          { cells: ["0.01", "3.995", "4.005", "5.100", "5.134", "0.0342", "3.842"] },
        ]}
      />
      <p>
        As Δt decreases from 2.0 s to 0.01 s the average velocity approaches the limiting value{" "}
        <Highlight color="blue">3.84 m s⁻¹</Highlight>, the value of dx/dt at t = 4.0 s.
      </p>

      <Expandable title="Example 2.1 — x = a + bt²: velocity at two instants + average velocity" variant="example">
        <ProblemSolution.Problem>
          <p>
            The position of an object moving along the x-axis is given by x = a + bt² where a = 8.5 m, b = 2.5 m s⁻²
            and t is measured in seconds. What is its velocity at t = 0 s and t = 2.0 s? What is the average
            velocity between t = 2.0 s and t = 4.0 s?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>In differential-calculus notation the velocity is</p>
          <FormulaBlock latex={String.raw`v = \frac{\mathrm{d}x}{\mathrm{d}t} = \frac{\mathrm{d}}{\mathrm{d}t}\left(a + bt^2\right) = 2b\,t = 5.0\,t\ \text{m s}^{-1}`} />
          <ul>
            <li>At t = 0 s: <Formula>{String.raw`v = 0\ \text{m s}^{-1}`}</Formula></li>
            <li>At t = 2.0 s: <Formula>{String.raw`v = 10\ \text{m s}^{-1}`}</Formula></li>
            <li>
              Average velocity (t = 2 to 4 s):
              <Formula>{String.raw`\frac{x(4) - x(2)}{4 - 2} = \frac{(16b) - (4b)}{2} = 6b = 15\ \text{m s}^{-1}`}</Formula>
            </li>
          </ul>
          <p>
            Note that for <strong>uniform motion</strong>, the velocity is the same as the average
            velocity at all instants.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Callout type="important" title="Speed is magnitude">
        <strong>Instantaneous speed</strong> = magnitude of velocity. +24.0 m s⁻¹ and −24.0 m s⁻¹ both have
        speed 24.0 m s⁻¹.
        <ul>
          <li>Average speed over a finite interval ≥ magnitude of average velocity.</li>
          <li>Instantaneous speed = magnitude of instantaneous velocity (always equal).</li>
        </ul>
      </Callout>
      <MistakeCard
        mistake="'If average speed ≥ |average velocity|, then speed must also differ from velocity at an instant.'"
        correction="The inequality applies to the finite-intentional averages. At an instant the speed is exactly |v| — a particle has a single velocity, and speed is just its size. The asymmetry comes only from averaging over a path that can double back."
      />

      <h2 id="h-2-3">2.3 Acceleration</h2>
      <p>
        The velocity of an object generally changes during its motion. Should this change be described as
        rate of change of velocity <em>with distance</em> or <em>with time</em>? This was a problem even
        in Galileo&rsquo;s time.
      </p>
      <Callout type="didyouknow" title="Galileo's resolution">
        Through studies of freely falling objects and motion on inclined planes, Galileo concluded the
        rate of change of velocity with <strong>time</strong> is a constant for all objects in free fall.
        The change with <strong>distance</strong> is not constant (it decreases with increasing distance of
        fall). Hence <strong>acceleration</strong> is defined as the rate of change of velocity with time.
      </Callout>
      <p>Average acceleration over a time interval (t₁ → t₂):</p>
      <FormulaBlock latex={String.raw`a = \frac{v_2 - v_1}{t_2 - t_1} = \frac{\Delta v}{\Delta t}`} />
      <p>SI unit <strong>m s⁻²</strong>. On a velocity–time plot it is the slope of the line connecting (v₁, t₁) and (v₂, t₂).</p>
      <p>Instantaneous acceleration — slope of the tangent to the v–t curve:</p>
      <FormulaBlock latex={String.raw`a = \lim_{\Delta t \to 0}\frac{\Delta v}{\Delta t} = \frac{\mathrm{d}v}{\mathrm{d}t}`} important />
      <p>
        Since velocity has magnitude <em>and</em> direction, acceleration may come from a change in
        speed, a change in direction, or both. Acceleration can be positive, negative or zero.
      </p>
      <p>Four v–t graph cases for constant acceleration:</p>
      <TableCard
        caption="Constant-acceleration v–t graphs (Fig. 2.3)."
        headers={["Case", "Motion", "v–t graph"]}
        rows={[
          { cells: ["(a)", "Positive direction, positive acceleration", "Rising straight line"] },
          { cells: ["(b)", "Positive direction, negative acceleration", "Falling straight line"] },
          { cells: ["(c)", "Negative direction, negative acceleration", "Falling line below the axis"] },
          { cells: ["(d)", "Positive direction till t₁, then reverses", "V-shaped line crossing zero at t₁"] },
        ]}
      />
      <p>
        Correspondingly, the <strong>x–t</strong> graph curves <em>upward</em> for positive acceleration,
        <em> downward</em> for negative acceleration, and is a straight line for zero acceleration.
      </p>
      <KeyPoint title="Area under the v–t curve = displacement">
        For constant velocity u over 0 → T the v–t curve is a horizontal line and the area under it is the
        rectangle u × T = uT, which is exactly the displacement — v·t has the dimension of length.
      </KeyPoint>
      <Callout type="warning" title="No instantaneous jumps">
        Real graphs are smooth: acceleration and velocity <strong>cannot change values abruptly at an
        instant</strong>. Sharp kinks in x–t, v–t or a–t figures imply the functions are not
        differentiable at those points — an idealization only.
      </Callout>
      <p>For constant acceleration, with v = v₀ at t = 0:</p>
      <FormulaBlock latex={String.raw`a = \frac{v - v_0}{t}\;\;\Rightarrow\;\; v = v_0 + at`} />

      <h2 id="h-2-4">2.4 Kinematic Equations for Uniformly Accelerated Motion</h2>
      <p>For uniform acceleration, five quantities — displacement x, time t, initial velocity v₀, final velocity v and acceleration a — are related by simple equations.</p>
      <p><strong>Deriving x from the v–t graph:</strong></p>
      <Stepper
        steps={[
          { label: "The v–t graph", description: "A straight line rising from v₀ to v = v₀ + at. Displacement = area between 0 and t." },
          { label: "Break the area into triangle + rectangle", description: "Area = ½(v − v₀)t + v₀t = ½(v + v₀)t." },
          { label: "Use v − v₀ = at", description: "x = ½·at·t + v₀t, giving the displacement equation." },
        ]}
      />
      <p><strong>The three kinematic equations (x = 0 at t = 0):</strong></p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`v = v_0 + at`}</Formula></li>
          <li><Formula>{String.raw`x = v_0 t + \tfrac{1}{2}at^2`}</Formula></li>
          <li><Formula>{String.raw`v^2 = v_0^2 + 2ax`}</Formula> (from x = ½(v₀ + v)t with t = (v − v₀)/a)</li>
        </ul>
      </FormulaCard>
      <p>There is also the compact average-velocity form</p>
      <FormulaBlock latex={String.raw`x = \bar{v}\,t, \qquad \bar{v} = \frac{v_0 + v}{2}\quad (\text{constant acceleration only})`} />
      <p><strong>General forms (position x₀ at t = 0):</strong></p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`v = v_0 + at`}</Formula></li>
          <li><Formula>{String.raw`x = x_0 + v_0 t + \tfrac{1}{2}at^2`}</Formula></li>
          <li><Formula>{String.raw`v^2 = v_0^2 + 2a(x - x_0)`}</Formula></li>
        </ul>
      </FormulaCard>

      <Expandable title="Example 2.2 — Equations of motion by the method of calculus" variant="example">
        <ProblemSolution.Problem>
          <p>Obtain equations of motion for constant acceleration using the method of calculus.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>By definition a = dv/dt, so</p>
          <FormulaBlock latex={String.raw`\mathrm{d}v = a\,\mathrm{d}t`} />
          <p>Integrating both sides (a is constant):</p>
          <FormulaBlock latex={String.raw`\int_{v_0}^{v}\mathrm{d}v = \int_0^t a\,\mathrm{d}t \;\;\Rightarrow\;\; v - v_0 = at\;\;\Rightarrow\;\; v = v_0 + at`} />
          <p>Further, v = dx/dt so dx = v dt. Integrating:</p>
          <FormulaBlock latex={String.raw`\int_{x_0}^{x}\mathrm{d}x = \int_0^t (v_0 + at)\,\mathrm{d}t \;\;\Rightarrow\;\; x = x_0 + v_0 t + \tfrac{1}{2}at^2`} />
          <p>Also, using the chain rule:</p>
          <FormulaBlock latex={String.raw`a = \frac{\mathrm{d}v}{\mathrm{d}t} = \frac{\mathrm{d}v}{\mathrm{d}x}\frac{\mathrm{d}x}{\mathrm{d}t} = v\frac{\mathrm{d}v}{\mathrm{d}x}\;\;\Rightarrow\;\; v\,\mathrm{d}v = a\,\mathrm{d}x`} />
          <p>Integrating:</p>
          <FormulaBlock latex={String.raw`\int_{v_0}^{v} v\,\mathrm{d}v = a\int_{x_0}^{x}\mathrm{d}x\;\;\Rightarrow\;\; \frac{v^2 - v_0^2}{2} = a(x - x_0)\;\;\Rightarrow\;\; v^2 = v_0^2 + 2a(x - x_0)`} important />
          <p>
            The advantage of this method is that it can <strong>also be used for motion with
            non-uniform acceleration</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 2.3 — A ball thrown up from a building (two methods)" variant="example">
        <ProblemSolution.Problem>
          <p>
            A ball is thrown vertically upwards with a velocity of 20 m s⁻¹ from the top of a multistorey
            building. The height of the point from where the ball is thrown is 25.0 m from the ground.
            (a) How high will the ball rise? and (b) how long will it be before the ball hits the ground?
            Take g = 10 m s⁻².
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Take the y-axis in the vertically upward direction with zero at the ground. Then v₀ = +20 m s⁻¹,
            a = −g = −10 m s⁻², v = 0 m s⁻¹ at the top.
          </p>
          <p><strong>(a) Maximum height.</strong> Using v² = v₀² + 2a(y − y₀):</p>
          <FormulaBlock latex={String.raw`0 = (20)^2 + 2(-10)(y - y_0)\;\;\Rightarrow\;\; y - y_0 = 20\ \text{m}`} important />
          <p><strong>(b) Time to hit the ground — two methods, note them carefully.</strong></p>
          <p><em>First method (split the path).</em> Upward A→B: v = v₀ + at gives 0 = 20 − 10t₁ → t₁ = 2 s. From B the ball falls freely with v₀ = 0 from y₀ = 45 m:</p>
          <FormulaBlock latex={String.raw`0 = 45 + \frac{1}{2}(-10)t_2^2\;\;\Rightarrow\;\; t_2 = 3\ \text{s}`} />
          <p>Total time = t₁ + t₂ = 2 s + 3 s = <strong>5 s</strong>.</p>
          <p><em>Second method (single equation).</em> Using y = y₀ + v₀t + ½at² with y₀ = 25 m, y = 0, v₀ = 20 m s⁻¹, a = −10 m s⁻²:</p>
          <FormulaBlock latex={String.raw`0 = 25 + 20t + \frac{1}{2}(-10)t^2 \;\;\Rightarrow\;\; 5t^2 - 20t - 25 = 0`} />
          <p>Solving the quadratic for t gives <strong>t = 5 s</strong>.</p>
          <Callout type="note" title="Why the second method is better">
            Under constant acceleration you need not worry about the path of the motion — a single
            correctly-signed equation handles the whole motion.
          </Callout>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 2.4 — Free fall" variant="example">
        <ProblemSolution.Problem>
          <p>Discuss the motion of an object under free fall. Neglect air resistance.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            An object released near the surface of the Earth is accelerated downward with magnitude g. With
            air resistance neglected it is in <strong>free fall</strong>; if the height of fall is small
            compared with the Earth&rsquo;s radius, g ≈ 9.8 m s⁻² constant — so free fall is uniform
            acceleration.
          </p>
          <p>
            Choose upward as positive (motion is then in the −y direction, a = −g = −9.8 m s⁻²). Released
            from rest at y = 0 (v₀ = 0):
          </p>
          <FormulaBlock latex={String.raw`v = -9.8\,t\ \text{m s}^{-1}`} />
          <FormulaBlock latex={String.raw`y = -\tfrac{1}{2}gt^2 = -4.9\,t^2\ \text{m}`} />
          <FormulaBlock latex={String.raw`v^2 = -2gy = -19.6\,y\ \ \text{m}^2\text{s}^{-2}`} important />
          <ul>
            <li>a–t graph: horizontal line at −9.8 (constant).</li>
            <li>v–t graph: straight line of slope −9.8 passing through origin.</li>
            <li>y–t graph: downward-opening parabola.</li>
          </ul>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 2.5 — Galileo's law of odd numbers" variant="example">
        <ProblemSolution.Problem>
          <p>
            &ldquo;The distances traversed, during equal intervals of time, by a body falling from rest,
            stand to one another in the same ratio as the odd numbers beginning with unity (1 : 3 : 5 : 7…
            ).&rdquo; Prove it.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            For free fall from rest, <Formula>{String.raw`y = -\tfrac{1}{2}gt^2`}</Formula>. Divide the time
            into equal intervals τ and compare positions at 0, τ, 2τ, 3τ, …, which grow as 0, 1, 4, 9, 16, 25, 36, …
          </p>
          <TableCard
            caption="Distances traversed in successive intervals τ (in units of y₀ = ½gτ²)."
            headers={["Interval", "Position (units of y₀)", "Distance in the τ", "Ratio"]}
            rows={[
              { cells: ["0–τ", "1", "1", "1"] },
              { cells: ["τ–2τ", "4", "3", "3"] },
              { cells: ["2τ–3τ", "9", "5", "5"] },
              { cells: ["3τ–4τ", "16", "7", "7"] },
              { cells: ["4τ–5τ", "25", "9", "9"] },
              { cells: ["5τ–6τ", "36", "11", "11"] },
            ]}
          />
          <p>Distances in successive equal intervals stand in the ratio <strong>1 : 3 : 5 : 7 : 9 : 11…</strong>.</p>
          <Callout type="didyouknow" title="Galileo Galilei (1564–1642)">
            The first to make quantitative studies of free fall, establishing this law empirically.
          </Callout>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 2.6 — Stopping distance of vehicles" variant="example">
        <ProblemSolution.Problem>
          <p>
            When brakes are applied to a moving vehicle, the distance it travels before stopping is the
            stopping distance. It depends on the initial velocity v₀ and the braking capacity (deceleration
            of magnitude a). Derive an expression for the stopping distance in terms of v₀ and a.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            With v² = v₀² + 2ax and v = 0 at the stop (x = d_s), and taking a as the magnitude of the
            deceleration:
          </p>
          <FormulaBlock latex={String.raw`0 = v_0^2 - 2a\,d_s\;\;\Rightarrow\;\; d_s = \frac{v_0^2}{2a}`} important />
          <MetricCard
            label="Stopping distance ∝ v₀²"
            value="×4"
            unit="when speed doubles"
            trend="up"
            description="Doubling the initial velocity quadruples the stopping distance for the same deceleration. Observed braking distances 10, 20, 34, 50 m at 11, 15, 20, 25 m s⁻¹ are consistent with the formula."
          />
          <p>
            Stopping distance is an important factor in setting speed limits, for example, in{" "}
            <strong>school zones</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 2.7 — Reaction time" variant="example">
        <ProblemSolution.Problem>
          <p>
            When a situation demands immediate action, it takes some time before we respond. Reaction time
            is the time a person takes to observe, think and act. Measure it: ask a friend to drop a ruler
            vertically through the gap between your thumb and forefinger, then catch it and measure the
            distance d it fell. For d = 21.0 cm, estimate the reaction time.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The ruler drops under free fall: v₀ = 0, a = −g = −9.8 m s⁻². The fall distance d and reaction time t_r are related by</p>
          <FormulaBlock latex={String.raw`t_r = \sqrt{\frac{2d}{g}}`} important />
          <FormulaBlock latex={String.raw`t_r = \sqrt{\frac{2 \times 0.21}{9.8}} \approx 0.207\ \text{s} \approx 0.2\ \text{s}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <Callout type="warning" title="Zero velocity ≠ zero acceleration">
        A particle may be momentarily at rest and yet have non-zero acceleration — a ball thrown up has
        <strong>zero velocity</strong> at its highest point but its acceleration there is still g. Also,
        the sign of acceleration does not tell whether speed increases or decreases: falling under gravity
        (with upward positive) the particle has negative a yet speeds up; the thrown-up particle has the
        same negative a yet slows down.
      </Callout>
      <KeyPoint title="Correct-sign discipline">
        Kinematic-equation quantities are <strong>algebraic</strong>. Choose the origin and positive
        direction first, then substitute every quantity with its proper sign. If a particle is speeding
        up, acceleration points along the velocity; if slowing down, it points opposite — independent of
        the axis choice.
      </KeyPoint>

      <h2 id="h-exercises">Exercises 2.1 – 2.18</h2>
      <Expandable title="Exercises 2.1 – 2.18" variant="exercise">
        <ol>
          <li>In which of the following examples of motion can the body be considered approximately a point object: (a) a railway carriage moving without jerks between two stations; (b) a monkey sitting on top of a man cycling smoothly on a circular track; (c) a spinning cricket ball that turns sharply on hitting the ground; (d) a tumbling beaker that has slipped off the edge of a table?</li>
          <li>The position–time (x–t) graphs for two children A and B returning from their school O to their homes P and Q respectively are shown in Fig. 2.9. Choose the correct entries: (a) (A/B) lives closer to the school than (B/A); (b) (A/B) starts from the school earlier than (B/A); (c) (A/B) walks faster than (B/A); (d) A and B reach home at the (same/different) time; (e) (A/B) overtakes (B/A) on the road (once/twice).</li>
          <li>A woman starts from her home at 9.00 am, walks with a speed of 5 km h⁻¹ on a straight road up to her office 2.5 km away, stays at the office up to 5.00 pm, and returns home by an auto with a speed of 25 km h⁻¹. Choose suitable scales and plot the x–t graph of her motion.</li>
          <li>A drunkard walking in a narrow lane takes 5 steps forward and 3 steps backward, followed again by 5 steps forward and 3 steps backward, and so on. Each step is 1 m long and requires 1 s. Plot the x–t graph of his motion. Determine graphically and otherwise how long the drunkard takes to fall in a pit 13 m away from the start.</li>
          <li>A car moving along a straight highway with speed of 126 km h⁻¹ is brought to a stop within a distance of 200 m. What is the retardation of the car (assumed uniform), and how long does it take for the car to stop?</li>
          <li>A player throws a ball upwards with an initial speed of 29.4 m s⁻¹. (a) What is the direction of acceleration during the upward motion of the ball? (b) What are the velocity and acceleration of the ball at the highest point of its motion? (c) Choose x = 0 m and t = 0 s at the highest point with the vertically downward direction positive, and give the signs of position, velocity and acceleration of the ball during its upward and downward motion. (d) To what height does the ball rise and after how long does the ball return to the player&rsquo;s hands? (Take g = 9.8 m s⁻² and neglect air resistance.)</li>
          <li>Read each statement below carefully and state with reasons and examples if it is true or false. A particle in one-dimensional motion (a) with zero speed at an instant may have non-zero acceleration at that instant; (b) with zero speed may have non-zero velocity; (c) with constant speed must have zero acceleration; (d) with positive value of acceleration must be speeding up.</li>
          <li>A ball is dropped from a height of 90 m on a floor. At each collision with the floor, the ball loses one tenth of its speed. Plot the speed–time graph of its motion between t = 0 to 12 s.</li>
          <li>Explain clearly, with examples, the distinction between: (a) magnitude of displacement over an interval of time and the total length of path covered by a particle over the same interval; (b) magnitude of average velocity over an interval and the average speed over the same interval (total path length / time). Show that in both (a) and (b) the second quantity is greater than or equal to the first. When does equality hold? [One-dimensional motion only.]</li>
          <li>A man walks on a straight road from his home to a market 2.5 km away with a speed of 5 km h⁻¹. Finding the market closed, he instantly turns and walks back home with a speed of 7.5 km h⁻¹. What is the (a) magnitude of average velocity, and (b) average speed of the man over (i) 0 to 30 min, (ii) 0 to 50 min, (iii) 0 to 40 min? [Note: this is why average speed is defined as total path length / time, not as |average velocity| — you would not tell the tired man his average speed was zero!]</li>
          <li>In Exercises 2.9 and 2.10 we carefully distinguished average speed from magnitude of average velocity. No such distinction is needed for instantaneous speed and magnitude of velocity. Instantaneous speed is always equal to the magnitude of instantaneous velocity. Why?</li>
          <li>Look at the graphs (a) to (d) carefully and state, with reasons, which of these cannot possibly represent one-dimensional motion of a particle.</li>
          <li>The figure shows the x–t plot of one-dimensional motion of a particle. Is it correct to say that the particle moves in a straight line for t &lt; 0 and on a parabolic path for t &gt; 0? If not, suggest a suitable physical context for this graph.</li>
          <li>A police van moving on a highway with a speed of 30 km h⁻¹ fires a bullet at a thief&rsquo;s car speeding away in the same direction with a speed of 192 km h⁻¹. If the muzzle speed of the bullet is 150 m s⁻¹, with what speed does the bullet hit the thief&rsquo;s car? (Obtain the speed relevant for damaging the car.)</li>
          <li>Suggest a suitable physical situation for each of the graphs shown.</li>
          <li>The figure gives the x–t plot of a particle executing one-dimensional simple harmonic motion (Chapter 13). Give the signs of position, velocity and acceleration variables of the particle at t = 0.3 s, 1.2 s, −1.2 s.</li>
          <li>The figure gives the x–t plot of a particle in one-dimensional motion. Three different equal intervals of time are shown. In which interval is the average speed greatest, and in which is it the least? Give the sign of average velocity for each interval.</li>
          <li>The figure gives a speed–time graph of a particle in motion along a constant direction. Three equal intervals of time are shown. In which interval is the average acceleration greatest in magnitude? In which interval is the average speed greatest? Choosing the positive direction as the constant direction of motion, give the signs of v and a in the three intervals. What are the accelerations at the points A, B, C and D?</li>
        </ol>
        <Expandable title="Answer Key — Exercises 2.1 – 2.18">
          <ol>
            <li>(a) Yes — the carriage&apos;s size is negligible compared with the distance between stations. (b) Yes — the monkey-and-man system is small compared with the track radius, so its motion can be treated point-like. (c) No — the spinning/turning ball&apos;s size and rotation matter. (d) No — the tumbling motion of the whole beaker depends on its size.</li>
            <li>(a) A; (b) A; (c) B; (d) same; (e) B overtakes A once. (A starts earlier and nearer; B walks faster with a steeper x–t slope and catches A on the way.)</li>
            <li>Graph: rising line 0 → 0.5 h (2.5 km at 9:00–9:30), horizontal until 17:00, then a steep falling line back to x = 0 at 17:06 (2.5 km at 25 km h⁻¹ = 0.1 h).</li>
            <li>Each 8 s cycle (5 forward, 3 backward) nets +2 m. After 4 cycles (32 s) the drunkard is at 8 m facing forward; the 5th step (at t = 37 s) takes him to 13 m — just reaching the pit. Total time ≈ 37 s.</li>
            <li>126 km h⁻¹ = 35 m s⁻¹. v² = v₀² − 2ad → 0 = 35² − 2a(200) → a ≈ 3.06 m s⁻² (retardation). t = v₀/a = 35/3.06 ≈ 11.4 s.</li>
            <li>(a) Downward (acceleration due to gravity) throughout the flight, including upward motion. (b) v = 0; a = 9.8 m s⁻² downward. (c) Upward motion: x positive, v negative, a positive (all along +x downward? No — with downward positive: during upward motion x &gt; 0 (above origin), v &lt; 0, a &gt; 0; during downward motion x &gt; 0, v &gt; 0, a &gt; 0.) (d) Height = (29.4)²/(2 × 9.8) = 44.1 m; total flight time = 2 × 29.4/9.8 = 6 s.</li>
            <li>(a) True — the top of a vertical throw is a moment of zero speed with a = g. (b) False — speed is |v|; zero speed means v = 0. (c) False — uniform circular motion has constant speed but centripetal acceleration (though that is not one-dimensional); in 1-D, constant speed with straight-line motion does give a = 0, but the statement as given is false without that qualification. (d) False — a can be positive while the speed decreases (e.g. upward motion with upward-positive axis).</li>
            <li>Fall from 90 m: v = √(2 × 9.8 × 90) ≈ 42 m s⁻¹, t = 4.29 s; after each bounce v loses 10%, so successive peak speeds are 42, 37.8, 34.0, … with constant slopes g between bounces — a sawtooth speed–time graph decaying until t ≈ 12 s.</li>
            <li>(a) Magnitude of displacement ≤ total path length; equality when motion is along one straight line without turning back. (b) |average velocity| ≤ average speed; equality when the path length equals |displacement|, i.e. no reversal.</li>
            <li>(i) 0–30 min: home→market 2.5 km done in 0.5 h: avg velocity = 5 km h⁻¹, avg speed = 5 km h⁻¹. (ii) 0–50 min: returns 2.5 km in 1/3 h (20 min); net displacement 0 → avg velocity 0; total path 5 km in 1 h? Wait — 30 min out + 20 min back = 50 min = 5/6 h → avg speed = 5/(5/6) = 6 km h⁻¹. (iii) 0–40 min: out for 30 min (2.5 km), back for 10 min at 7.5 → 1.25 km; net displacement 1.25 km, time 2/3 h → avg velocity 1.875 km h⁻¹; total path 3.75 km / (2/3) h = 5.625 km h⁻¹.</li>
            <li>At any instant the particle has a single velocity v, and speed is just |v| — there is no path-length vs displacement distinction at a single instant to average over.</li>
            <li>The graphs that imply two positions at one time, or a vertical (infinite-slope) x–t segment, or looping back in time cannot represent one-dimensional motion. (Answers: (a)–(d) per figure; those with multiple x for one t are impossible.)</li>
            <li>No — being an x–t graph, the particle is always moving along the straight x-axis; the parabola merely means the acceleration (curvature) is present for t &gt; 0 and absent for t &lt; 0. Suitable context: an object at uniform motion that starts decelerating/accelerating at t = 0.</li>
            <li>Relative approach speed = muzzle speed against the closing ambient: bullet at 150 m s⁻¹ relative to van; van at 30 km h⁻¹ = 8.33 m s⁻¹; thief car at 192 km h⁻¹ = 53.3 m s⁻¹. Ground speed of bullet = 150 + 8.33 ≈ 158.3 m s⁻¹; relative to thief car = 158.3 − 53.3 ≈ 105 m s⁻¹.</li>
            <li>Suggestions: (1) horizontal line in v–t → constant velocity; falling x–t curve → acceleration; (2) the classic: a body thrown upward (v decreasing then negative); (3) a child on a swing / car braking.</li>
            <li>At t = 0.3 s (recently past equilibrium, moving +x): x &gt; 0, v &gt; 0, a &lt; 0. At t = 1.2 s (past positive turning point): x &gt; 0, v &lt; 0, a &lt; 0. At t = −1.2 s (mirror of +1.2 s): x &lt; 0, v &gt; 0, a &gt; 0. [Signs read from the slope of the x–t sinusoid.]</li>
            <li>Greatest average speed where the path length per time is largest (steepest-slope majority interval) — the interval with both the largest excursion; least where the curve is almost flat (small net change but large path). Sign of average velocity is the sign of (x₁ − x₂) over the interval.</li>
            <li>Accelerations at A, B, C, D are 0 (slope of speed–time is zero at the flat extents); greatest |a| in the interval with the steepest slope; greatest average speed in the interval at the highest speeds; signs: with positive direction = direction of motion, v &gt; 0 throughout; a &lt; 0 where speed falls, a &gt; 0 where speed rises, a = 0 at A/B/C/D.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <Expandable title="Key formulas &amp; facts — one page">
        <ul>
          <li>Instantaneous velocity: <Formula>{String.raw`v = \mathrm{d}x/\mathrm{d}t`}</Formula> = slope of x–t tangent; speed = |v|.</li>
          <li>Instantaneous acceleration: <Formula>{String.raw`a = \mathrm{d}v/\mathrm{d}t`}</Formula> = slope of v–t tangent.</li>
          <li>Average acceleration = Δv/Δt; SI unit m s⁻².</li>
          <li>Area under v–t curve = displacement over the interval.</li>
          <li>Kinematic equations: v = v₀ + at; x = v₀t + ½at²; v² = v₀² + 2ax; x = ½(v₀ + v)t. Replace x by x − x₀ and v₀→(x₀, v₀) for a starting point x₀.</li>
          <li>Free fall: v = −gt; y = −½gt²; v² = −2gy (upward positive).</li>
          <li>Stopping distance: d_s = v₀²/(2a) — ∝ v₀².</li>
          <li>Reaction time (ruler drop): t_r = √(2d/g).</li>
          <li>Galileo&rsquo;s law: fall distances in successive equal intervals go 1 : 3 : 5 : 7 : …</li>
        </ul>
      </Expandable>
      <Expandable title="Last-minute recall — formulas only">
        <ul>
          <li><Formula>{String.raw`v = v_0 + at`}</Formula></li>
          <li><Formula>{String.raw`x = v_0 t + \tfrac{1}{2}at^2`}</Formula></li>
          <li><Formula>{String.raw`v^2 = v_0^2 + 2ax`}</Formula></li>
          <li><Formula>{String.raw`\bar v = \tfrac{1}{2}(v_0 + v)`}</Formula> (constant a)</li>
          <li><Formula>{String.raw`d_s = \frac{v_0^2}{2a}`}</Formula>, <Formula>{String.raw`t_r = \sqrt{\frac{2d}{g}}`}</Formula></li>
          <li><Formula>{String.raw`v = \mathrm{d}x/\mathrm{d}t`}</Formula>, <Formula>{String.raw`a = \mathrm{d}v/\mathrm{d}t`}</Formula></li>
        </ul>
      </Expandable>
    </>
  );
}