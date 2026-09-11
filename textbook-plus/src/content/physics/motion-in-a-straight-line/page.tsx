import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
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
        This chapter is confined to <strong>rectilinear motion</strong> — motion of objects along a
        straight line.
      </p>
      <KeyPoint title="Kinematics vs dynamics">
        <ul>
          <li>
            <strong>Kinematics</strong> describes motion <em>without</em> going into its causes: a car is{" "}
            <em>kinematically described</em> by its x–t, v–t and a–t graphs.
          </li>
          <li>
            <strong>Dynamics</strong> studies the <em>cause</em> of motion — why a body accelerates. That
            is the subject of Chapter 4 (Laws of Motion).
          </li>
        </ul>
      </KeyPoint>
      <Comparison
        columns={[
          {
            title: "Distance (path length)",
            children: (
              <ul>
                <li>The <strong>actual length of the path</strong> travelled between two points.</li>
                <li><strong>Always positive</strong> — a scalar that never decreases.</li>
                <li>Depends on the path taken, not just the end positions.</li>
                <li>SI unit: <strong>metre</strong> (m).</li>
              </ul>
            ),
          },
          {
            title: "Displacement",
            children: (
              <ul>
                <li>
                  The <strong>shortest straight-line distance</strong> from the initial to the final
                  position, together with its direction.
                </li>
                <li>Can be <strong>positive, negative or zero</strong> — a vector.</li>
                <li>Depends only on the end points; never longer than the path (&le; distance).</li>
                <li>SI unit: <strong>metre</strong> (m).</li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-classification">Classification of Motion</h2>
      <ul>
        <li>
          <strong>1. Uniform Motion</strong> — velocity is <strong>constant</strong>:
          <ul>
            <li>
              Acceleration: <Formula>{String.raw`a = 0`}</Formula>
            </li>
            <li>
              Displacement formula: <Formula>{String.raw`S = ut`}</Formula>
            </li>
          </ul>
        </li>
        <li>
          <strong>2. Non-Uniform Motion</strong> — velocity is <strong>changing</strong>:
          <ul>
            <li>
              <strong>A. Uniformly Accelerated Motion</strong> — acceleration is constant (
              <Formula>{String.raw`a = \text{constant}`}</Formula>). Equations of motion:
              <Formula>{String.raw`v = u + at`}</Formula>;{" "}
              <Formula>{String.raw`S = ut + \tfrac{1}{2}at^2`}</Formula>;{" "}
              <Formula>{String.raw`v^2 = u^2 + 2aS`}</Formula>.
            </li>
            <li>
              <strong>B. Non-Uniformly Accelerated Motion</strong> — acceleration is changing (
              <Formula>{String.raw`a \neq \text{constant}`}</Formula>).
            </li>
          </ul>
        </li>
      </ul>

      <h3 id="h-unit-conversions">Unit conversions: km/h to m/s</h3>
      <p>
        <strong>Conversion factor:</strong> multiply by <Formula>{String.raw`\frac{5}{18}`}</Formula>
      </p>
      <FormulaBlock latex={String.raw`1\ \text{km/h} = \frac{5}{18}\ \text{m/s}`} important />
      <TableCard
        caption="Common values (km/h → m/s)."
        headers={["Speed (km/h)", "Speed (m/s)"]}
        rows={[
          { cells: ["18", "5"] },
          { cells: ["36", "10"] },
          { cells: ["54", "15"] },
          { cells: ["72", "20"] },
          { cells: ["90", "25"] },
          { cells: ["108", "30"] },
          { cells: ["126", "35"] },
          { cells: ["144", "40"] },
        ]}
      />

      <h3 id="h-speed-vs-velocity">Speed and velocity — the essentials</h3>
      <Comparison
        columns={[
          {
            title: "Speed",
            children: (
              <ul>
                <li>
                  <strong>Definition:</strong> <em>distance</em> covered in unit time — a{" "}
                  <strong>scalar</strong> quantity.
                </li>
                <li>
                  <strong>Formula:</strong>{" "}
                  <Formula>{String.raw`\text{Speed} = \frac{\text{Distance}}{\text{Time}}`}</Formula>
                </li>
                <li>
                  <strong>Examples:</strong> 20 km/h, 10 m/s — only a magnitude, no direction.
                </li>
                <li>
                  <strong>SI unit:</strong> <Formula>{String.raw`\text{m s}^{-1}`}</Formula>
                </li>
              </ul>
            ),
          },
          {
            title: "Velocity",
            children: (
              <ul>
                <li>
                  <strong>Definition:</strong> <em>displacement</em> in unit time — a{" "}
                  <strong>vector</strong> quantity.
                </li>
                <li>
                  <strong>Formula:</strong>{" "}
                  <Formula>{String.raw`\text{Velocity} = \frac{\text{Displacement}}{\text{Time}}`}</Formula>
                </li>
                <li>
                  <strong>Examples:</strong> 20 km/h east, 10 m/s north — needs a direction.
                </li>
                <li>
                  <strong>SI unit:</strong> <Formula>{String.raw`\text{m s}^{-1}`}</Formula>
                </li>
              </ul>
            ),
          },
        ]}
      />

      <Expandable title="Types of speed">
        <ul>
          <li>
            <strong>Uniform speed:</strong> the object covers <em>equal distances in equal intervals of
            time</em> — speed is constant throughout the motion.
          </li>
          <li>
            <strong>Variable (non-uniform) speed:</strong> the object covers <em>unequal distances in equal
            intervals of time</em> — speed keeps changing.
          </li>
          <li>
            <strong>Average speed:</strong> for the whole journey, the total distance divided by the total
            time:
            <Formula>{String.raw`\text{Average Speed} = \frac{\text{Total Distance}}{\text{Total Time}}`}</Formula>
            example: a distance of 10 m covered in 10 s gives an average speed of 10/10 ={" "}
            <strong>1 m/s</strong>.
          </li>
          <li>
            <strong>Instantaneous speed:</strong> the speed at a <em>specific instant</em> — how fast the
            object is moving right now:
            <Formula>{String.raw`v = \frac{\mathrm{d}x}{\mathrm{d}t}`}</Formula>
          </li>
        </ul>
      </Expandable>

      <Expandable title="Types of velocity">
        <ul>
          <li>
            <strong>Uniform velocity (uniform motion):</strong> the object covers <em>equal displacements
            in equal intervals of time</em> — velocity is constant in magnitude and direction.
          </li>
          <li>
            <strong>Variable (non-uniform) velocity (non-uniform motion):</strong> the object covers{" "}
            <em>unequal displacements in equal intervals of time</em> — velocity keeps changing.
          </li>
          <li>
            <strong>Average velocity:</strong> total displacement divided by total time:
            <Formula>{String.raw`\text{Average Velocity} = \frac{\text{Total Displacement}}{\text{Total Time}} = \frac{\Delta s}{\Delta t}`}</Formula>
          </li>
          <li>
            <strong>Instantaneous velocity:</strong> the velocity at a specific instant:
            <Formula>{String.raw`v = \frac{\mathrm{d}s}{\mathrm{d}t}`}</Formula>
          </li>
        </ul>
      </Expandable>

      <Callout type="note" title="Key notes & relationships">
        <ul>
          <li><Formula>{String.raw`\text{Distance} \ge \text{Displacement}`}</Formula></li>
          <li><Formula>{String.raw`|\text{Average Speed}| \ge |\text{Average Velocity}|`}</Formula></li>
          <li><Formula>{String.raw`\text{Instantaneous Speed} = |\text{Instantaneous Velocity}|`}</Formula></li>
        </ul>
      </Callout>

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
      <Expandable title="Worked examples — computing acceleration" variant="example">
        <p>
          Acceleration = change in velocity ÷ time. So for a body whose velocity changes from{" "}
          <strong>u</strong> (initial) to <strong>v</strong> (final) in time <strong>t</strong>:
        </p>
        <FormulaBlock latex={String.raw`a = \frac{v - u}{t}`} important />
        <p>
          SI unit: <strong>m s⁻²</strong>.
        </p>
        <p>
          <strong>Example 1 — positive acceleration:</strong> an object at rest (u = 0 m/s) reaches a
          velocity of 20 m/s in 2 s.
        </p>
        <ul>
          <li>Initial velocity (u) = 0 m/s</li>
          <li>Final velocity (v) = 20 m/s</li>
          <li>Time (t) = 2 s</li>
        </ul>
        <FormulaBlock latex={String.raw`a = \frac{v - u}{t} = \frac{20 - 0}{2} = 10\ \text{m s}^{-2}`} important />
        <p>
          <strong>Example 2 — negative acceleration:</strong> an object slows from 20 m/s to rest in 2 s.
        </p>
        <ul>
          <li>Initial velocity (u) = 20 m/s</li>
          <li>Final velocity (v) = 0 m/s</li>
          <li>Time (t) = 2 s</li>
        </ul>
        <FormulaBlock latex={String.raw`a = \frac{v - u}{t} = \frac{0 - 20}{2} = \frac{-20}{2} = -10\ \text{m s}^{-2}`} important />
        <Callout type="note" title="Retardation / deceleration">
          A <strong>negative acceleration</strong> means the velocity is decreasing, and is often called{" "}
          <strong>retardation</strong> or <strong>deceleration</strong>.
        </Callout>
        <p>
          <strong>Solved problem:</strong> a body&rsquo;s velocity changes from 20 m/s to 80 m/s in 4 s.
          Find its acceleration.
        </p>
        <ul>
          <li>Initial velocity (u) = 20 m/s</li>
          <li>Final velocity (v) = 80 m/s</li>
          <li>Time (t) = 4 s</li>
        </ul>
        <FormulaBlock latex={String.raw`a = \frac{v - u}{t} = \frac{80 - 20}{4} = \frac{60}{4} = 15\ \text{m s}^{-2}`} important />
      </Expandable>
      <KeyPoint title="Types of acceleration">
        <ul>
          <li>
            <strong>Uniform acceleration:</strong> velocity changes by <em>equal amounts in equal
            intervals of time</em> — acceleration is constant (e.g. free fall near the Earth&rsquo;s
            surface).
          </li>
          <li>
            <strong>Variable (non-uniform) acceleration:</strong> acceleration itself keeps changing —
            the rate of change of velocity is <em>not</em> constant.
          </li>
          <li>
            <strong>Average acceleration:</strong> total change in velocity over total time:
            <Formula>{String.raw`a = \frac{\Delta v}{\Delta t}`}</Formula>
          </li>
          <li>
            <strong>Instantaneous acceleration:</strong> acceleration at a specific instant:
            <Formula>{String.raw`a = \frac{\mathrm{d}v}{\mathrm{d}t}`}</Formula>
          </li>
        </ul>
      </KeyPoint>
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

      <Expandable title="Supplementary solved problems — kinematic equations (3)" variant="exercise">
        <p>
          <strong>Problem 1 — distance travelled by the train.</strong> The velocity of a train increases
          uniformly from 20 km/h to 60 km/h in 4 h. The distance travelled by the train during this period
          is:
        </p>
        <ul>
          <li>a) 160 km</li>
          <li>b) 180 km</li>
          <li>c) 100 km</li>
          <li>d) 120 km</li>
        </ul>
        <p>
          <strong>Given data:</strong> u = 20 km/h, v = 60 km/h, t = 4 h.
        </p>
        <p><strong>Solution.</strong></p>
        <ol>
          <li>
            <strong>Acceleration (a):</strong>
            <FormulaBlock latex={String.raw`a = \frac{v - u}{t} = \frac{60 - 20}{4} = \frac{40}{4} = 10\ \text{km/h}^2`} />
          </li>
          <li>
            <strong>Distance (S):</strong>
            <FormulaBlock latex={String.raw`S = ut + \tfrac{1}{2}at^2`} />
            <FormulaBlock latex={String.raw`S = (20 \times 4) + \tfrac{1}{2}(10)(4)^2 = 80 + \tfrac{1}{2}(10)(16) = 80 + 80 = 160\ \text{km}`} />
            <p>
              <em>Alternatively, using v² = u² + 2aS:</em>
            </p>
            <FormulaBlock latex={String.raw`60^2 = 20^2 + 2(10)S \;\Rightarrow\; 3600 = 400 + 20S \;\Rightarrow\; 3200 = 20S \;\Rightarrow\; S = 160\ \text{km}`} />
          </li>
        </ol>
        <p>
          <strong>Correct option:</strong> a) 160 km.
        </p>

        <p>
          <strong>Problem 2 — time taken to change velocity.</strong> A particle moves in a straight line
          with a constant acceleration. It changes its velocity from 10 m/s to 20 m/s while passing through
          a distance of 135 m in t seconds. The value of t is:
        </p>
        <ul>
          <li>a) 10 s</li>
          <li>b) 1.8 s</li>
          <li>c) 12 s</li>
          <li>d) 9 s</li>
        </ul>
        <p>
          <strong>Given data:</strong> u = 10 m/s, v = 20 m/s, S = 135 m.
        </p>
        <p><strong>Solution.</strong></p>
        <ol>
          <li>
            <strong>Find acceleration (a):</strong>
            <FormulaBlock latex={String.raw`v^2 = u^2 + 2aS`} />
            <FormulaBlock latex={String.raw`20^2 = 10^2 + 2a(135) \;\Rightarrow\; 400 = 100 + 270a \;\Rightarrow\; a = \frac{300}{270} = \frac{10}{9}\ \text{m/s}^2`} />
          </li>
          <li>
            <strong>Find time (t):</strong>
            <FormulaBlock latex={String.raw`v = u + at`} />
            <FormulaBlock latex={String.raw`20 = 10 + \left(\frac{10}{9}\right)t \;\Rightarrow\; 10 = \frac{10}{9}t \;\Rightarrow\; t = 9\ \text{s}`} />
          </li>
        </ol>
        <p>
          <strong>Correct option:</strong> d) 9 s.
        </p>

        <p>
          <strong>Problem 3 — distance covered by the car.</strong> If a car at rest accelerates uniformly
          to a speed of 144 km/h in 20 s, it covers a distance of:
        </p>
        <ul>
          <li>a) 2880 m</li>
          <li>b) 1440 m</li>
          <li>c) 400 m</li>
          <li>d) 20 m</li>
        </ul>
        <p>
          <strong>Given data:</strong> initial velocity u = 0 m/s (at rest); final velocity v = 144 km/h =
          40 m/s; time t = 20 s.
        </p>
        <p><strong>Solution.</strong></p>
        <ol>
          <li>
            <strong>Acceleration (a):</strong>
            <FormulaBlock latex={String.raw`a = \frac{v - u}{t} = \frac{40 - 0}{20} = 2\ \text{m/s}^2`} />
          </li>
          <li>
            <strong>Distance (S):</strong>
            <FormulaBlock latex={String.raw`S = ut + \tfrac{1}{2}at^2 = 0 + \tfrac{1}{2}(2)(20)^2 = 400\ \text{m}`} />
            <p>
              <em>Alternatively, using v² = u² + 2aS:</em>
            </p>
            <FormulaBlock latex={String.raw`40^2 = 0 + 2(2)S \;\Rightarrow\; 1600 = 4S \;\Rightarrow\; S = 400\ \text{m}`} />
          </li>
        </ol>
        <p>
          <strong>Correct option:</strong> c) 400 m.
        </p>
      </Expandable>

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

      <h3 id="h-stopping-distance">Stopping distance and stopping time</h3>
      <p>
        <strong>Stopping distance (s).</strong> Using <Formula>{String.raw`v^2 = u^2 + 2as`}</Formula> with
        final velocity v = 0 and acceleration a = −a (retardation):
      </p>
      <FormulaBlock latex={String.raw`0 = u^2 + 2(-a)s \;\Rightarrow\; 0 = u^2 - 2as`} />
      <FormulaBlock latex={String.raw`2as = u^2 \;\Rightarrow\; s = \frac{u^2}{2a}`} important />
      <p>
        <strong>Key relationship:</strong> stopping distance is directly proportional to the square of the
        initial velocity: <Formula>{String.raw`s \propto u^2`}</Formula>.
      </p>
      <p>
        <strong>Stopping time (t).</strong> Using <Formula>{String.raw`v = u + at`}</Formula> with v = 0
        and a = −a (retardation):
      </p>
      <FormulaBlock latex={String.raw`0 = u + (-a)t \;\Rightarrow\; 0 = u - at`} />
      <FormulaBlock latex={String.raw`at = u \;\Rightarrow\; t = \frac{u}{a}`} important />

      <Expandable title="Supplementary solved problems — stopping distance and stopping time (2)" variant="exercise">
        <p>
          <strong>Problem 1 — car stopping distance.</strong> A car moving with a speed of 40 km/h can be
          stopped after 2 m by applying brakes. If the same car is moving with a speed of 80 km/h, what is
          the minimum stopping distance?
        </p>
        <ul>
          <li>a) 8 m</li>
          <li>b) 2 m</li>
          <li>c) 4 m</li>
          <li>d) 6 m</li>
        </ul>
        <p>
          <strong>Given data:</strong> u₁ = 40 km/h, s₁ = 2 m; u₂ = 80 km/h, s₂ = ?
        </p>
        <p><strong>Solution.</strong> Since s ∝ u²:</p>
        <FormulaBlock latex={String.raw`\frac{s_1}{s_2} = \left(\frac{u_1}{u_2}\right)^2`} />
        <FormulaBlock latex={String.raw`\frac{2}{s_2} = \left(\frac{40}{80}\right)^2 = \left(\frac{1}{2}\right)^2 = \frac{1}{4}`} />
        <FormulaBlock latex={String.raw`s_2 = 2 \times 4 = 8\ \text{m}`} important />
        <p>
          <strong>Correct option:</strong> a) 8 m.
        </p>

        <p>
          <strong>Problem 2 — bullet penetration into a wooden block.</strong> If a body loses half of its
          velocity on penetrating 3 cm in a wooden block, then how much will it penetrate more before
          coming to rest?
        </p>
        <p>
          <strong>Shortcut formula.</strong> If a bullet loses <Formula>{String.raw`\tfrac{1}{n}`}</Formula>{" "}
          of its velocity in penetrating a distance x, the further distance x&prime; it penetrates before
          coming to rest is:
        </p>
        <FormulaBlock latex={String.raw`x' = \frac{x}{n^2 - 1}`} />
        <p>
          <strong>Method 1 (shortcut formula).</strong> Given x = 3 cm and the velocity becomes half (u/2),
          so n = 2:
        </p>
        <FormulaBlock latex={String.raw`x' = \frac{3}{2^2 - 1} = \frac{3}{4 - 1} = \frac{3}{3} = 1\ \text{cm}`} important />
        <p>
          <strong>Method 2 (standard derivation).</strong>
        </p>
        <ol>
          <li>
            <strong>First phase (u → u/2 over distance x = 3 cm):</strong>
            <FormulaBlock latex={String.raw`v^2 = u^2 + 2as`} />
            <FormulaBlock latex={String.raw`\left(\frac{u}{2}\right)^2 = u^2 + 2(-a)(3) \;\Rightarrow\; \frac{u^2}{4} = u^2 - 6a`} />
            <FormulaBlock latex={String.raw`6a = u^2 - \frac{u^2}{4} = \frac{3u^2}{4} \;\Rightarrow\; a = \frac{u^2}{8}`} />
          </li>
          <li>
            <strong>Second phase (u/2 → 0 over distance x&prime;):</strong>
            <FormulaBlock latex={String.raw`0^2 = \left(\frac{u}{2}\right)^2 + 2\left(-\frac{u^2}{8}\right)x' \;\Rightarrow\; 0 = \frac{u^2}{4} - \frac{u^2 x'}{4}`} />
            <FormulaBlock latex={String.raw`\frac{u^2 x'}{4} = \frac{u^2}{4} \;\Rightarrow\; x' = 1\ \text{cm}`} important />
          </li>
        </ol>
        <p>
          <strong>Answer:</strong> 1 cm.
        </p>
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

      <h2 id="h-motion-under-gravity">Motion Under Gravity</h2>
      <p>
        When the only force on a body is its own weight, it moves with the acceleration due to gravity{" "}
        <Formula>{String.raw`\pm g`}</Formula>. Choosing the upward direction as positive:
      </p>
      <Comparison
        columns={[
          {
            title: "Upward motion (a = −g)",
            children: (
              <ul>
                <li><Formula>{String.raw`v = u - gt`}</Formula></li>
                <li><Formula>{String.raw`s = ut - \tfrac{1}{2}gt^2`}</Formula></li>
                <li><Formula>{String.raw`v^2 = u^2 - 2gs`}</Formula></li>
              </ul>
            ),
          },
          {
            title: "Downward motion (a = +g)",
            children: (
              <ul>
                <li><Formula>{String.raw`v = u + gt`}</Formula></li>
                <li><Formula>{String.raw`s = ut + \tfrac{1}{2}gt^2`}</Formula></li>
                <li><Formula>{String.raw`v^2 = u^2 + 2gs`}</Formula></li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-dropped-from-height">1. An object dropped from a height h</h3>
      <p>
        Initial velocity <Formula>{String.raw`u = 0\ \text{m/s}`}</Formula>.
      </p>
      <p><strong>Velocity with which the body strikes the ground:</strong></p>
      <FormulaBlock latex={String.raw`v^2 = u^2 + 2gh \;\Rightarrow\; v^2 = 0 + 2gh \;\Rightarrow\; v = \sqrt{2gh}`} important />
      <p><strong>Time taken to reach the ground:</strong></p>
      <FormulaBlock latex={String.raw`h = ut + \tfrac{1}{2}gt^2 \;\Rightarrow\; h = 0 + \tfrac{1}{2}gt^2`} />
      <FormulaBlock latex={String.raw`2h = gt^2 \;\Rightarrow\; t = \sqrt{\frac{2h}{g}}`} important />

      <h3 id="h-thrown-upward">2. An object thrown upward with a velocity u</h3>
      <p>
        <strong>Time of ascent (t_A) and time of descent (t_D).</strong> At maximum height, the final
        velocity v = 0:
      </p>
      <FormulaBlock latex={String.raw`v = u - gt_A \;\Rightarrow\; 0 = u - gt_A \;\Rightarrow\; gt_A = u`} />
      <FormulaBlock latex={String.raw`t_A = \frac{u}{g}`} important />
      <KeyPoint title="Symmetry — t_A = t_D">
        Time of ascent = time of descent = <Formula>{String.raw`\frac{u}{g}`}</Formula>. Example (u = 20
        m/s, g = 10 m/s²): t_A = 20/10 = 2 s and t_D = 20/10 = 2 s.
      </KeyPoint>
      <p>
        <strong>Maximum height reached (h<sub>max</sub>).</strong> At maximum height, v = 0:
      </p>
      <FormulaBlock latex={String.raw`v^2 = u^2 - 2gh \;\Rightarrow\; 0 = u^2 - 2gh`} />
      <FormulaBlock latex={String.raw`2gh = u^2 \;\Rightarrow\; h = \frac{u^2}{2g}`} important />

      <Expandable title="Solved problems — motion under gravity (8)" variant="exercise">
        <p>
          <strong>Problem 1 — velocity of the stone hitting the ground.</strong> A boy standing at the top
          of a tower of 20 m height drops a stone. Assuming g = 10 m/s², the velocity with which it hits
          the ground is:
        </p>
        <ul>
          <li>a) 20 m/s</li>
          <li>b) 40 m/s</li>
          <li>c) 5 m/s</li>
          <li>d) 10 m/s</li>
        </ul>
        <p>
          <strong>Given data:</strong> height h = 20 m; initial velocity u = 0 m/s (dropped); g = 10 m/s².
        </p>
        <p><strong>Solution:</strong></p>
        <FormulaBlock latex={String.raw`v = \sqrt{2gh} = \sqrt{2 \times 10 \times 20} = \sqrt{400} = 20\ \text{m/s}`} important />
        <p>
          <strong>Correct option:</strong> a) 20 m/s.
        </p>

        <p>
          <strong>Problem 2 — ratio of times for two falling bodies.</strong> Two bodies A (of mass 1 kg)
          and B (of mass 3 kg) are dropped from heights of 16 m and 25 m, respectively. The ratio of the
          time taken by them to reach the ground is:
        </p>
        <ul>
          <li>a) 5/4</li>
          <li>b) 12/5</li>
          <li>c) 5/12</li>
          <li>d) 4/5</li>
        </ul>
        <p>
          <strong>Given data:</strong> h_A = 16 m, h_B = 25 m.
        </p>
        <p>
          <strong>Solution.</strong> From <Formula>{String.raw`t = \sqrt{\frac{2h}{g}}`}</Formula>, time is
          proportional to <Formula>{String.raw`\sqrt{h}`}</Formula>:
        </p>
        <FormulaBlock latex={String.raw`\frac{t_A}{t_B} = \sqrt{\frac{h_A}{h_B}} = \sqrt{\frac{16}{25}} = \frac{4}{5}`} important />
        <p>
          <strong>Correct option:</strong> d) 4/5.
        </p>

        <p>
          <strong>Problem 3 — velocity of the ball after 2 s.</strong> If a ball is thrown vertically
          upwards with a velocity of 40 m/s, then the velocity of the ball after 2 s will be (g = 10
          m/s²):
        </p>
        <ul>
          <li>a) 15 m/s</li>
          <li>b) 20 m/s</li>
          <li>c) 25 m/s</li>
          <li>d) 28 m/s</li>
        </ul>
        <p>
          <strong>Given data:</strong> initial velocity u = 40 m/s; time t = 2 s; g = 10 m/s².
        </p>
        <p><strong>Solution:</strong></p>
        <FormulaBlock latex={String.raw`v = u - gt = 40 - (10 \times 2) = 40 - 20 = 20\ \text{m/s}`} important />
        <p>
          <strong>Correct option:</strong> b) 20 m/s.
        </p>

        <p>
          <strong>Problem 4 — maximum height from the half-height speed.</strong> A stone is thrown
          vertically upwards. When the stone is at a height half of its maximum height, its speed is 10
          m/s. The maximum height attained by the stone is (g = 10 m/s²):
        </p>
        <ul>
          <li>a) 8 m</li>
          <li>b) 10 m</li>
          <li>c) 15 m</li>
          <li>d) 20 m</li>
        </ul>
        <p>
          <strong>Given data:</strong> at s = H/2, speed v = 10 m/s; at s = H, speed v_H = 0 m/s.
        </p>
        <p><strong>Solution.</strong> Using <Formula>{String.raw`v^2 = u^2 - 2gs`}</Formula>:</p>
        <ol>
          <li>
            For maximum height H (v = 0):{" "}
            <Formula>{String.raw`0 = u^2 - 2gH \;\Rightarrow\; u^2 = 2gH`}</Formula>
          </li>
          <li>
            At half maximum height (s = H/2):
            <FormulaBlock latex={String.raw`10^2 = u^2 - 2g\left(\frac{H}{2}\right)`} />
            <FormulaBlock latex={String.raw`100 = 2gH - gH = gH`} />
            <FormulaBlock latex={String.raw`H = \frac{100}{g} = \frac{100}{10} = 10\ \text{m}`} important />
          </li>
        </ol>
        <p>
          <strong>Correct option:</strong> b) 10 m.
        </p>

        <p>
          <strong>Problem 5 — descent time from maximum height.</strong> A body is thrown vertically
          upwards from the ground. It reaches a maximum height of 20 m in 2 s. After what time will it
          reach the ground from its maximum height position?
        </p>
        <ul>
          <li>a) 2.5 s</li>
          <li>b) 5 s</li>
          <li>c) 10 s</li>
          <li>d) 2 s</li>
        </ul>
        <p>
          <strong>Solution.</strong> Time of ascent (t_A) = time of descent (t_D). Given t_A = 2 s, the
          time taken to reach the ground from the maximum height position (t_D) is also{" "}
          <strong>2 s</strong>.
        </p>
        <p>
          <strong>Correct option:</strong> d) 2 s.
        </p>

        <p>
          <strong>Problem 6 — final velocity with a non-zero initial velocity.</strong> A body dropped from
          a height h with initial velocity zero strikes the ground with a velocity of 3 m/s. Another body
          of the same mass dropped from the same height h with an initial velocity of 4 m/s. The final
          velocity of the second body, with which it strikes the ground, is:
        </p>
        <ul>
          <li>a) 4 m/s</li>
          <li>b) 12 m/s</li>
          <li>c) 3 m/s</li>
          <li>d) 5 m/s</li>
        </ul>
        <p>
          <strong>Given data:</strong> Case 1: u₁ = 0, v₁ = 3 m/s, distance = h. Case 2: u₂ = 4 m/s, v₂ =
          ?, distance = h.
        </p>
        <p><strong>Solution:</strong></p>
        <ol>
          <li>
            From case 1:{" "}
            <Formula>{String.raw`v_1^2 = u_1^2 + 2gh \;\Rightarrow\; 3^2 = 0 + 2gh \;\Rightarrow\; 2gh = 9`}</Formula>
          </li>
          <li>
            From case 2: <Formula>{String.raw`v_2^2 = u_2^2 + 2gh = 4^2 + 9 = 16 + 9 = 25`}</Formula>
            <FormulaBlock latex={String.raw`v_2 = \sqrt{25} = 5\ \text{m/s}`} important />
          </li>
        </ol>
        <p>
          <strong>Correct option:</strong> d) 5 m/s.
        </p>

        <p>
          <strong>Problem 7 — height of the tower.</strong> A ball is thrown vertically downward with a
          velocity of 20 m/s from the top of a tower. It hits the ground after some time with a velocity
          of 80 m/s. The height of the tower is (g = 10 m/s²):
        </p>
        <ul>
          <li>a) 340 m</li>
          <li>b) 320 m</li>
          <li>c) 300 m</li>
          <li>d) 360 m</li>
        </ul>
        <p>
          <strong>Given data:</strong> initial velocity u = 20 m/s; final velocity v = 80 m/s; g = 10 m/s².
        </p>
        <p><strong>Solution:</strong></p>
        <FormulaBlock latex={String.raw`v^2 = u^2 + 2gh`} />
        <FormulaBlock latex={String.raw`80^2 = 20^2 + 2(10)h \;\Rightarrow\; 6400 = 400 + 20h`} />
        <FormulaBlock latex={String.raw`6000 = 20h \;\Rightarrow\; h = \frac{6000}{20} = 300\ \text{m}`} important />
        <p>
          <strong>Correct option:</strong> c) 300 m.
        </p>

        <p>
          <strong>Problem 8 — height of the bridge.</strong> A horizontal bridge is built across a river. A
          student standing on the bridge throws a small ball vertically upwards with a velocity of 4 m/s.
          The ball strikes the water surface after 4 s. The height of the bridge above the water surface is
          (g = 10 m/s²):
        </p>
        <ul>
          <li>a) 60 m</li>
          <li>b) 64 m</li>
          <li>c) 68 m</li>
          <li>d) 56 m</li>
        </ul>
        <p>
          <strong>Given data:</strong> initial velocity u = +4 m/s (upwards); time t = 4 s; acceleration a
          = −g = −10 m/s²; displacement S = −h (downward from bridge to water).
        </p>
        <p><strong>Solution:</strong></p>
        <FormulaBlock latex={String.raw`S = ut + \tfrac{1}{2}at^2`} />
        <FormulaBlock latex={String.raw`-h = (4 \times 4) + \tfrac{1}{2}(-10)(4)^2`} />
        <FormulaBlock latex={String.raw`-h = 16 - 5(16) = 16 - 80 = -64\ \text{m}`} />
        <FormulaBlock latex={String.raw`h = 64\ \text{m}`} important />
        <p>
          <strong>Correct option:</strong> b) 64 m.
        </p>
      </Expandable>

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