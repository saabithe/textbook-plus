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

export default function WorkEnergyAndPowerChapter() {
  return (
    <>
      <h2 id="h-intro">5.1 Introduction</h2>
      <p>
        The everyday words work, energy and power carry loose meanings: a farmer ploughing, a construction
        worker carrying bricks, a student studying, an artist painting — all &ldquo;work&rdquo;. A long-distance
        runner is admired for &ldquo;stamina&rdquo; or &ldquo;energy&rdquo; — our capacity to do work. In physics these
        three terms have precise definitions, and there is at best a loose correlation with our intuitive
        pictures. The aim of this chapter is to develop an understanding of the three quantities. Before
        that we need one mathematical prerequisite — the <strong>scalar product of two vectors</strong>.
      </p>

      <h2 id="h-scalar">5.1.1 The Scalar Product</h2>
      <p>
        From Chapter 3 we know how vectors are added or subtracted. There are two ways to{" "}
        <em>multiply</em> them: the <strong>scalar product</strong> (gives a scalar from two vectors, taken
        up here) and the <strong>vector product</strong> (produces a new vector, Chapter 6).
      </p>
      <Callout type="important" title="Definition of the scalar (dot) product">
        <Formula>{String.raw`\mathbf{A}\cdot\mathbf{B} = AB\cos\theta`}</Formula> (5.1a) — where θ is the
        angle between the vectors. Since A, B and cosθ are scalars, the dot product is a scalar; it has
        <strong> no direction</strong>.
      </Callout>
      <p>
        Geometrically, B cosθ is the projection of B onto A and A cosθ the projection of A onto B; so A·B
        is the product of the magnitude of one vector and the component of the other vector along it.
      </p>
      <FormulaCard>
        <ul>
          <li><strong>Commutative:</strong> <Formula>{String.raw`\mathbf{A}\cdot\mathbf{B} = \mathbf{B}\cdot\mathbf{A}`}</Formula></li>
          <li><strong>Distributive:</strong> <Formula>{String.raw`\mathbf{A}\cdot(\mathbf{B}+\mathbf{C}) = \mathbf{A}\cdot\mathbf{B} + \mathbf{A}\cdot\mathbf{C}`}</Formula>, and <Formula>{String.raw`\mathbf{A}\cdot(\lambda\mathbf{B}) = \lambda(\mathbf{A}\cdot\mathbf{B})`}</Formula> for a real number λ</li>
          <li><strong>Unit vectors:</strong> <Formula>{String.raw`\hat{\mathbf{i}}\cdot\hat{\mathbf{i}} = \hat{\mathbf{j}}\cdot\hat{\mathbf{j}} = \hat{\mathbf{k}}\cdot\hat{\mathbf{k}} = 1`}</Formula> and <Formula>{String.raw`\hat{\mathbf{i}}\cdot\hat{\mathbf{j}} = \hat{\mathbf{j}}\cdot\hat{\mathbf{k}} = \hat{\mathbf{k}}\cdot\hat{\mathbf{i}} = 0`}</Formula></li>
          <li><strong>Component form:</strong> <Formula>{String.raw`\mathbf{A}\cdot\mathbf{B} = A_xB_x + A_yB_y + A_zB_z`}</Formula> (5.1b)</li>
          <li><Formula>{String.raw`\mathbf{A}\cdot\mathbf{A} = A^2`}</Formula> (5.1c) since <Formula>{String.raw`\mathbf{A}\cdot\mathbf{A} = A^2\cos 0 = A^2`}</Formula></li>
          <li><strong>Perpendicular:</strong> <Formula>{String.raw`\mathbf{A}\cdot\mathbf{B} = 0`}</Formula> iff A and B are perpendicular.</li>
        </ul>
      </FormulaCard>
      <Expandable title="Example 5.1 — Angle between two vectors" variant="example">
        <ProblemSolution.Problem>
          <p>
            Find the angle between <Formula>{String.raw`\mathbf{F} = (3\hat{\mathbf{i}} + 4\hat{\mathbf{j}} - 5\hat{\mathbf{k}})`}</Formula>{" "}
            unit and <Formula>{String.raw`\mathbf{d} = (5\hat{\mathbf{i}} + 4\hat{\mathbf{j}} + 3\hat{\mathbf{k}})`}</Formula>{" "}
            unit. Also find the projection of F on d.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\mathbf{F}\cdot\mathbf{d} = 3(5) + 4(4) + (-5)(3) = 16\ \text{unit}`} />
          <FormulaBlock latex={String.raw`F^2 = 9 + 16 + 25 = 50,\qquad d^2 = 25 + 16 + 9 = 50`} />
          <FormulaBlock latex={String.raw`\cos\theta = \frac{16}{\sqrt{50}\sqrt{50}} = 0.32,\qquad \theta = \cos^{-1}(0.32)`} important />
          <p>Projection of F on d = <Formula>{String.raw`\frac{\mathbf{F}\cdot\mathbf{d}}{d} = \frac{16}{\sqrt{50}}`}</Formula>.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-we">5.2 Notions of Work and Kinetic Energy — The Work-Energy Theorem</h2>
      <p>For rectilinear motion under constant acceleration a (Chapter 3):</p>
      <FormulaBlock latex={String.raw`v^2 - u^2 = 2as`} />
      <p>Multiplying both sides by m/2 and using Newton&rsquo;s second law:</p>
      <FormulaBlock latex={String.raw`\tfrac{1}{2}mv^2 - \tfrac{1}{2}mu^2 = mas = Fs`} />
      <p>
        Generalising with vectors, <Formula>{String.raw`v^2 - u^2 = 2\mathbf{a}\cdot\mathbf{d}`}</Formula>.
      </p>
      <FormulaCard>
        <p>
          <Formula>{String.raw`\tfrac{1}{2}mv^2 - \tfrac{1}{2}mu^2 = m\mathbf{a}\cdot\mathbf{d} = \mathbf{F}\cdot\mathbf{d}`}</Formula> (5.2b)
        </p>
        <p>
          The left side is the change in <strong>½ (mass) × (speed)²</strong> — the{" "}
          <Highlight color="blue">kinetic energy K</Highlight>. The right side — the product of
          displacement and the component of force along it — is called{" "}
          <Highlight color="blue">work W</Highlight>.
        </p>
      </FormulaCard>
      <Callout type="important" title="Work-energy theorem">
        <FormulaBlock latex={String.raw`K_f - K_i = W`} important />
        The change in kinetic energy of a particle equals the work done on it by the <strong>net
        force</strong>. Later we generalise to a varying force.
      </Callout>
      <Expandable title="Example 5.2 — Raindrop falling with resistance" variant="example">
        <ProblemSolution.Problem>
          <p>
            A raindrop falls under gravity and an opposing resistive force (proportional to speed but
            otherwise undetermined). A drop of mass 1.00 g falls from a height 1.00 km and hits the ground
            at 50.0 m s⁻¹. (a) Work done by gravity? (b) Work done by the unknown resistive force?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\Delta K = \tfrac{1}{2}mv^2 = \tfrac{1}{2}\times 10^{-3}\times 50 \times 50 = 1.25\ \text{J}`} important />
          <FormulaBlock latex={String.raw`W_g = mgh = 10^{-3}\times 10 \times 10^3 = 10.0\ \text{J}`} />
          <p>By the work-energy theorem <Formula>{String.raw`\Delta K = W_g + W_r`}</Formula>:</p>
          <FormulaBlock latex={String.raw`W_r = 1.25 - 10 = -8.75\ \text{J}`} important />
          <p>Negative — the resistive force opposes the motion. Here WE theorem computed a work even though the exact force is unknown.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-work">5.3 Work</h2>
      <p>The work done by a constant force is the product of the component of the force in the direction of displacement and the magnitude of the displacement:</p>
      <Callout type="important" title="Definition of work">
        <FormulaBlock latex={String.raw`W = (F\cos\theta)d = \mathbf{F}\cdot\mathbf{d}`} important />
      </Callout>
      <FormulaCard>
        <p><strong>No work is done if:</strong></p>
        <ul>
          <li><strong>Displacement is zero</strong> — a weightlifter holding 150 kg steadily for 30 s does no work on the load (though his muscles tire, using internal energy).</li>
          <li><strong>Force is zero</strong> — a block gliding on a smooth horizontal table (no friction) undergoes a large displacement with no horizontal force.</li>
          <li><strong>Force ⟂ displacement</strong> — θ = π/2 gives cosθ = 0. Gravity does no work on a block moving on a smooth horizontal table; for a perfectly circular moon orbit, Earth&rsquo;s (radial) gravity does no work on the tangential displacement.</li>
        </ul>
        <p>Work can be <strong>positive</strong> (0° &lt; θ &lt; 90°) or <strong>negative</strong> (90° &lt; θ &lt; 180°). Friction, opposing displacement at θ = 180°, does negative work (cos 180° = −1).</p>
      </FormulaCard>
      <p>
        Work and energy share dimensions <Formula>{String.raw`[ML^2T^{-2}]`}</Formula>; the SI unit is the{" "}
        <strong>joule (J)</strong>, named after James Prescott Joule (1811–1869). Because the concepts are
        so widely used, alternative units abound — e.g. the electron-volt (1 eV = 1.60 × 10⁻¹⁹ J) and the
        kilowatt-hour (1 kWh = 3.6 × 10⁶ J).
      </p>
      <Expandable title="Example 5.3 — Cyclist skidding to a stop" variant="example">
        <ProblemSolution.Problem>
          <p>
            A cyclist skids to a stop in 10 m; during this the road exerts 200 N on the cycle, directly
            opposed to motion. (a) How much work does the road do on the cycle? (b) How much work does the
            cycle do on the road?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`W_r = Fd\cos\theta = 200 \times 10 \times \cos\pi = -2000\ \text{J}`} important />
          <p>This negative work is what halts the cycle, in accordance with the WE theorem.</p>
          <p>
            (b) By Newton&rsquo;s third law the cycle exerts an equal and opposite force (200 N) on the road —
            but the road undergoes <strong>no displacement</strong>. Hence the work done by the cycle on
            the road is <strong>zero</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <MistakeCard
        mistake="&ldquo;Since F₁₂ and F₂₁ are equal and opposite, the work done on A by B must equal the work done on B by A.&rdquo;"
        correction="Wrong. Mutual forces are equal and opposite, but the WORK done on A by B is not necessarily equal and opposite to the work done on B by A — the two bodies may have different displacements (Example 5.3: −2000 J vs 0)."
      />

      <h2 id="h-kinetic">5.4 Kinetic Energy</h2>
      <Callout type="important" title="Kinetic energy">
        For an object of mass m with velocity v:
        <FormulaBlock latex={String.raw`K = \tfrac{1}{2}mv^2`} important />
        A scalar; a measure of the work an object can do <strong>by virtue of its motion</strong>. Fast
        streams grind corn; sailing ships employ the kinetic energy of the wind.
      </Callout>
      <Expandable title="Example 5.4 — Bullet emerging from plywood" variant="example">
        <ProblemSolution.Problem>
          <p>A 50.0 g bullet fired at 200 m s⁻¹ passes through 2.00 cm of soft plywood and emerges with only 10% of its initial kinetic energy. What is its emergent speed?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`K_i = \tfrac{1}{2}\times 0.05 \times 200^2 = 1000\ \text{J},\qquad K_f = 0.1 \times 1000 = 100\ \text{J}`} />
          <FormulaBlock latex={String.raw`v_f = \sqrt{\frac{2\times 100}{0.05}} = 63.2\ \text{m s}^{-1}`} important />
          <p>Speed is reduced by ≈ 68% — not 90%, since KE ∝ v².</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-variable">5.5 Work Done by a Variable Force</h2>
      <p>
        A constant force is rare; variable forces are the rule. Over a small displacement Δx the force
        F(x) is approximately constant, so
      </p>
      <FormulaBlock latex={String.raw`\Delta W = F(x)\,\Delta x`} />
      <p>
        Adding successive rectangular areas (Fig. 5.3) gives the total work; letting Δx → 0, the sum
        approaches the <strong>area under the F–x curve</strong>:
      </p>
      <Callout type="important" title="Work of a variable force (1-D)">
        <FormulaBlock latex={String.raw`W = \int_{x_i}^{x_f} F(x)\,\mathrm{d}x`} important />
      </Callout>
      <Expandable title="Example 5.5 — Woman pushing a trunk" variant="example">
        <ProblemSolution.Problem>
          <p>A woman pushes a trunk on a rough platform with 100 N over 10 m; she tires, and her force drops linearly to 50 N over the next 10 m. Friction is 50 N. Calculate the work done by the two forces over the 20 m.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`W_F = 100 \times 10 + \tfrac{1}{2}(100 + 50)\times 10 = 1000 + 750 = 1750\ \text{J}`} important />
          <FormulaBlock latex={String.raw`W_f = (-50)\times 20 = -1000\ \text{J}`} important />
          <p>Areas on the negative side of the force axis carry a negative sign.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-we-variable">5.6 The Work-Energy Theorem for a Variable Force</h2>
      <Stepper
        steps={[
          { label: "Rate of change of K", description: "dK/dt = (d/dt)(½mv²) = mv(dv/dt)." },
          { label: "Apply Newton&rsquo;s 2nd law", description: "mv(dv/dt) = vF = F(dx/dt), so dK = F dx." },
          { label: "Integrate xᵢ → xf", description: "∫dK = ∫F dx ⟹ K_f − K_i = W." },
        ]}
      />
      <Callout type="important" title="WE theorem for a variable force">
        <FormulaBlock latex={String.raw`K_f - K_i = \int_{x_i}^{x_f} F(x)\,\mathrm{d}x = W`} important />
        Thus the WE theorem holds for a variable force.
      </Callout>
      <MistakeCard
        mistake="&ldquo;The work-energy theorem gives me everything Newton&rsquo;s second law does.&rdquo;"
        correction="No — the WE theorem is an INTEGRAL (scalar) form of the second law. The temporal (time) information of F = ma is integrated over, and the vectorial/directional information is lost (scalar equation)."
      />
      <Expandable title="Example 5.6 — Block through a rough patch" variant="example">
        <ProblemSolution.Problem>
          <p>A block of mass m = 1 kg at vᵢ = 2 m s⁻¹ enters a rough patch (0.10 m &lt; x &lt; 2.01 m) where the retarding force is inversely proportional to x: F_r = −k/x with k = 0.5 J, and zero outside. Find the final kinetic energy and speed across the patch.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`K_f = K_i - \int_{0.1}^{2.01}\frac{k}{x}\,\mathrm{d}x = \tfrac{1}{2}\times 1\times 2^2 - 0.5\ln\frac{2.01}{0.1}`} />
          <FormulaBlock latex={String.raw`K_f = 2 - 0.5\ln(20.1) = 2 - 1.5 = 0.5\ \text{J},\qquad v_f = \sqrt{\frac{2K_f}{m}} = 1\ \text{m s}^{-1}`} important />
          <p>ln is the natural logarithm to base e: ln X = log_e X = 2.303 log₁₀ X.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-potential">5.7 The Concept of Potential Energy</h2>
      <p>
        &ldquo;Potential&rdquo; suggests capacity for action — potential energy is{" "}
        <strong>stored energy by virtue of position or configuration</strong>. A stretched bowstring; fault
        lines in the earth&rsquo;s crust behave like compressed springs (earthquakes when they readjust).
        Left to itself, a body releases this stored energy as kinetic energy.
      </p>
      <FormulaCard>
        <p>
          For a ball of mass m near the earth&rsquo;s surface (h ≪ R_E, so g may be treated constant), the
          external agency raising it to height h does work mgh, which is stored:
        </p>
        <p><Formula>{String.raw`V(h) = mgh`}</Formula> and <Formula>{String.raw`F = -\frac{\mathrm{d}V}{\mathrm{d}h} = -mg`}</Formula></p>
        <p>
          The negative sign shows gravity points downward. Released, v² = 2gh ⟹ ½mv² = mgh — potential
          energy manifests as kinetic energy at the ground.
        </p>
      </FormulaCard>
      <KeyPoint title="Definition of a conservative force">
        The potential V(x) is defined only when the force can be written{" "}
        <Formula>{String.raw`F(x) = -\mathrm{d}V/\mathrm{d}x`}</Formula>. Then work depends only on the end
        points: <Formula>{String.raw`\int F(x)\mathrm{d}x = V_i - V_f`}</Formula>. Equivalently: work over a
        closed path is zero. Gravity is conservative — a mass released from rest slides down a smooth
        incline of height h at speed √(2gh), regardless of the angle of inclination. If the work depended
        on the path or on velocity, the force would be <strong>non-conservative</strong>.
      </KeyPoint>
      <p>
        PE has the same dimensions as work [ML²T⁻²], unit J. The change in PE for a conservative force
        equals the negative of the work done by the force:
      </p>
      <FormulaBlock latex={String.raw`\Delta V = -F(x)\,\Delta x`} important />

      <h2 id="h-conservation">5.8 The Conservation of Mechanical Energy</h2>
      <p>
        For one-dimensional motion under a conservative force F: the WE theorem gives{" "}
        <Formula>{String.raw`\Delta K = F(x)\Delta x`}</Formula>, while conservativeness gives{" "}
        <Formula>{String.raw`-\Delta V = F(x)\Delta x`}</Formula>. Hence
      </p>
      <FormulaBlock latex={String.raw`\Delta K + \Delta V = 0,\qquad \Delta(K + V) = 0`} important />
      <Callout type="important" title="Conservation of mechanical energy">
        K + V is constant along the path — <Formula>{String.raw`K_i + V(x_i) = K_f + V(x_f)`}</Formula> (5.11).
        K and V may individually vary point to point, but their sum is constant. The total mechanical
        energy of a system is conserved <strong>if the forces doing work on it are conservative</strong>.
      </Callout>
      <Expandable title="Ball dropped from a cliff of height H">
        <p>
          At the top the energy is purely potential, at ground level purely kinetic: E_H = mgH, E_h =
          mgh + ½mv_h², E₀ = ½mv_f². Conservation gives v_f = √(2gH) and v_h = √(2g(H − h)) — familiar
          kinematic results, now obtained from energy conservation.
        </p>
      </Expandable>
      <Expandable title="Example 5.7 — Bob on a string circling the top" variant="example">
        <ProblemSolution.Problem>
          <p>A bob of mass m on a light string of length L is given a horizontal velocity v₀ at the lowest point A so that it completes a semi-circular trajectory with the string slack only at the topmost point C. Find (i) v₀; (ii) the speeds at B and C; (iii) K_B/K_C. Comment on the trajectory after C.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The tension does no work (displacement always perpendicular to the string), so only gravity
            matters and mechanical energy is conserved. Take V = 0 at A.
          </p>
          <FormulaBlock latex={String.raw`E_A = \tfrac{1}{2}mv_0^2,\qquad E_C = \tfrac{1}{2}mv_C^2 + 2mgL`} />
          <p>
            At C the string slackens (T_C = 0), so Newton&rsquo;s second law gives{" "}
            <Formula>{String.raw`mv_C^2/L = mg`}</Formula>, i.e. v_C² = gL.
          </p>
          <FormulaBlock latex={String.raw`E_C = \tfrac{1}{2}mgL + 2mgL = \tfrac{5}{2}mgL`} />
          <FormulaBlock latex={String.raw`v_0 = \sqrt{5gL},\qquad v_C = \sqrt{gL},\qquad v_B = \sqrt{3gL}`} important />
          <FormulaBlock latex={String.raw`\frac{K_B}{K_C} = \frac{3gL}{gL} = 3`} important />
          <p>
            At C the string is slack; if it were cut there, the bob would leave with horizontal velocity
            and follow a <strong>projectile trajectory</strong> (like a rock kicked horizontally off a
            cliff). With the string intact it continues and completes the revolution.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-spring">5.9 The Potential Energy of a Spring</h2>
      <p>
        The spring force is variable and conservative. For an ideal (light, massless) spring, the force is
        proportional to the displacement x from equilibrium — <strong>Hooke&rsquo;s law</strong>:
      </p>
      <Callout type="important" title="Hooke&rsquo;s law">
        <FormulaBlock latex={String.raw`F_s = -kx`} important />
        k is the spring constant (unit N m⁻¹); the spring is stiff if k is large, soft if k is small.
      </Callout>
      <FormulaCard>
        <ul>
          <li>Work done by the spring (extension x_m): <Formula>{String.raw`W_s = \int_0^{x_m}(-kx)\,\mathrm{d}x = -\tfrac{1}{2}kx_m^2`}</Formula> (5.15) — the area of the F–x triangle, negative.</li>
          <li>Work done by the external pulling force: <Formula>{String.raw`W = +\tfrac{1}{2}kx_m^2`}</Formula> (5.16).</li>
          <li>From xᵢ to xf: <Formula>{String.raw`W_s = \tfrac{1}{2}kx_i^2 - \tfrac{1}{2}kx_f^2`}</Formula> (5.17) — depends only on end points; cyclic work = 0 (5.18). Conservative.</li>
          <li>Potential energy (zero at x = 0): <Formula>{String.raw`V(x) = \tfrac{1}{2}kx^2`}</Formula> (5.19); one checks −dV/dx = −kx.</li>
        </ul>
      </FormulaCard>
      <p>
        A block extended to x_m and released has ½mv² + ½kx² = ½kx_m² at every point. Speed and KE are
        maximum at equilibrium (x = 0): <Formula>{String.raw`v_m = x_m\sqrt{k/m}`}</Formula> (k/m has
        dimensions [T⁻²], so the equation is dimensionally correct). The KE and PE plots are
        complementary parabolas (Fig. 5.8), with the total E = K + V constant.
      </p>
      <Expandable title="Example 5.8 — Car crashing into a spring" variant="example">
        <ProblemSolution.Problem>
          <p>In a car-accident simulation, a car of mass 1000 kg moving at 18.0 km/h collides with a horizontally mounted spring (k = 5.25 × 10³ N m⁻¹). What is the maximum compression of the spring?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`K = \tfrac{1}{2}\times 1000 \times 5^2 = 1.25\times 10^4\ \text{J}`} />
          <p>(18 km h⁻¹ = 5 m s⁻¹; handy conversion: 36 km h⁻¹ = 10 m s⁻¹.)</p>
          <FormulaBlock latex={String.raw`\tfrac{1}{2}kx_m^2 = K \;\Rightarrow\; x_m = 2.00\ \text{m}`} important />
          <p>Idealised: the spring is massless and the surface friction is negligible.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 5.9 — Car crushing a spring with friction" variant="example">
        <ProblemSolution.Problem>
          <p>Repeat Example 5.8 taking coefficient of friction μ = 0.5 between car and road. What is the maximum compression now?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Both the spring force and friction oppose the compression, so we invoke the WE theorem rather than conservation of mechanical energy:</p>
          <FormulaBlock latex={String.raw`\tfrac{1}{2}kx_m^2 + \mu mg x_m = \tfrac{1}{2}mv^2`} />
          <p>μmg = 0.5 × 10³ × 10 = 5 × 10³ N (g = 10 m s⁻²).</p>
          <FormulaBlock latex={String.raw`x_m = 1.35\ \text{m}`} important />
          <p>Less than in Example 5.8, as expected — friction dissipates some energy.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <FormulaCard>
        <p>
          With a conservative force F_c and a non-conservative force F_nc, the WE theorem gives:
        </p>
        <p><Formula>{String.raw`E_f - E_i = W_{nc}`}</Formula> — the change in total mechanical energy equals the total work done by non-conservative forces (path-dependent).</p>
        <p>
          <strong>Remarks:</strong> (i) time information is absent — we can compute the spring
          compression but not <em>how long</em> it takes; (ii) not all forces are conservative (friction);
          (iii) the zero of PE is arbitrary — spring: V = 0 at x = 0; weight: V = 0 at the earth&rsquo;s
          surface; universal gravitation: best V = 0 at infinity. Once fixed in a discussion, it must be
          adhered to consistently.
        </p>
      </FormulaCard>

      <h2 id="h-power">5.10 Power</h2>
      <p>
        Often we care not just how much work is done but how <strong>fast</strong> — we call a fit person
        one who climbs four floors <em>quickly</em>. Power is the time rate at which work is done or energy
        is transferred.
      </p>
      <Callout type="important" title="Power">
        Average: <Formula>{String.raw`P_{av} = \frac{W}{t}`}</Formula>; instantaneous:
        <FormulaBlock latex={String.raw`P = \frac{\mathrm{d}W}{\mathrm{d}t} = \mathbf{F}\cdot\mathbf{v}`} important />
        since dW = F·dr.
      </Callout>
      <p>
        Scalar; dimensions [ML²T⁻³]; SI unit <strong>watt (W) = 1 J s⁻¹</strong>, named after James Watt.
        Horse-power: <strong>1 hp = 746 W</strong> (automobiles). Electricity bills use{" "}
        <strong>kilowatt-hour</strong>: a 100 W bulb on for 10 h uses 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J
        — note kWh is an <em>energy</em> unit, not a power unit.
      </p>
      <Expandable title="Example 5.10 — Elevator motor power" variant="example">
        <ProblemSolution.Problem>
          <p>An elevator (with passengers) of total mass 1800 kg moves up at a constant 2 m s⁻¹; friction opposing motion is 4000 N. Determine the minimum power the motor must deliver, in watts and horse-power.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`F = mg + F_f = 18000 + 4000 = 22000\ \text{N}`} />
          <FormulaBlock latex={String.raw`P = Fv = 22000 \times 2 = 44000\ \text{W} = 59\ \text{hp}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-collisions">5.11 Collisions</h2>
      <p>
        Physics studies quantities that don&rsquo;t change in a process; momentum and energy conservation
        are the classic examples. We apply them to collisions — billiards, marbles, carrom. Model: mass m₁
        moving with speed v₁ᵢ collides with a stationary mass m₂ (Fig. 5.10); they fly off at angles θ₁
        and θ₂. (Choosing m₂ at rest loses no generality.)
      </p>
      <h3>5.11.1 Elastic and Inelastic Collisions</h3>
      <Callout type="important" title="Momentum vs kinetic energy">
        In <strong>all</strong> collisions total linear momentum is conserved: Δp₁ = F₁₂Δt, Δp₂ = F₂₁Δt,
        and F₁₂ = −F₂₁ (third law, true at every instant) ⟹ Δp₁ + Δp₂ = 0. But total{" "}
        <strong>kinetic energy is not necessarily conserved</strong> — impact and deformation generate heat
        and sound.
      </Callout>
      <TableCard
        headers={["Elastic", "Completely inelastic", "Inelastic"]}
        rows={[
          { cells: [
            "The 'compressed spring' of deformation regains its shape without energy loss: initial KE = final KE (KE is NOT constant during the collision).",
            "The two bodies move together after the collision (deformation not relieved), maximum KE lost.",
            "Deformation partly relieved, some KE lost — the common, intermediate case.",
          ] },
        ]}
        caption="The 'compressed spring' picture of a collision (Sec. 5.11.1)."
      />
      <h3>5.11.2 Collisions in One Dimension</h3>
      <p>
        Complete (θ₁ = θ₂ = 0). <strong>Completely inelastic:</strong> momentum conservation gives
      </p>
      <FormulaBlock latex={String.raw`m_1 v_{1i} = (m_1 + m_2)v_f \;\Rightarrow\; v_f = \frac{m_1}{m_1 + m_2}v_{1i}`} important />
      <p>
        The KE lost is <Formula>{String.raw`\Delta K = \tfrac{1}{2}\frac{m_1m_2}{m_1+m_2}v_{1i}^2`}</Formula>{" "}
        (positive). <strong>Elastic:</strong>
      </p>
      <FormulaBlock latex={String.raw`v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}v_{1i},\qquad v_{2f} = \frac{2m_1}{m_1 + m_2}v_{1i}`} important />
      <FormulaCard>
        <ul>
          <li><strong>Equal masses (m₁ = m₂):</strong> v₁f = 0, v₂f = v₁ᵢ — the first stops and the second leaves with the initial speed.</li>
          <li><strong>Heavy target (m₂ ≫ m₁):</strong> v₁f ≈ −v₁ᵢ, v₂f ≈ 0 — the heavy mass is undisturbed and the light mass reverses at the same speed.</li>
        </ul>
      </FormulaCard>
      <Expandable title="Example 5.11 — Slowing down neutrons" variant="example">
        <ProblemSolution.Problem>
          <p>In a nuclear reactor, neutrons (~10⁷ m s⁻¹) must slow to ~10³ m s⁻¹ to fission ²³⁵U. Show that a neutron can lose most of its kinetic energy by elastic collision with light nuclei (deuterium or carbon) — the moderator (heavy water D₂O or graphite).</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Fraction of KE retained by the neutron (Eq. 5.26):</p>
          <FormulaBlock latex={String.raw`f_1 = \frac{K_{1f}}{K_{1i}} = \left(\frac{m_2 - m_1}{m_1 + m_2}\right)^2`} important />
          <FormulaBlock latex={String.raw`f_2 = 1 - f_1 = \frac{4m_1m_2}{(m_1 + m_2)^2}`} />
          <p>
            Deuterium (m₂ = 2m₁): f₁ = 1/9, f₂ = 8/9 — almost <strong>90%</strong> of the neutron&rsquo;s
            energy is transferred in one head-on hit. Carbon: f₁ = 71.6%, f₂ = 28.4%. In practice the
            figure is smaller since head-on collisions are rare.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <h3>5.11.3 Collisions in Two Dimensions</h3>
      <p>
        When the final velocities are not collinear, momentum conservation (vector) gives three component
        equations. Choosing the plane of the final velocities as the x–y plane, the z-equation shows the
        collision stays in that plane:
      </p>
      <FormulaBlock latex={String.raw`m_1v_{1i} = m_1v_{1f}\cos\theta_1 + m_2v_{2f}\cos\theta_2 \qquad (x)`} />
      <FormulaBlock latex={String.raw`0 = m_1v_{1f}\sin\theta_1 - m_2v_{2f}\sin\theta_2 \qquad (y)`} />
      <p>
        Unknowns &#123;v₁f, v₂f, θ₁, θ₂&#125; exceed the two equations; an elastic collision adds the kinetic-energy
        equation, and one more datum (say θ₁, found by moving a detector) is needed.
      </p>
      <Expandable title="Example 5.12 — Billiard sink at 37°" variant="example">
        <ProblemSolution.Problem>
          <p>Equal-mass billiard balls; the target must sink at θ₂ = 37° (elastic, friction and spin ignored). Find the cue&rsquo;s deflection θ₁.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`v_{1i}^2 = v_{1f}^2 + v_{2f}^2 + 2v_{1f}v_{2f}\cos(\theta_1 + 37^\circ)`} />
          <p>Elasticity with equal masses: <Formula>{String.raw`v_{1i}^2 = v_{1f}^2 + v_{2f}^2`}</Formula>. Comparing:</p>
          <FormulaBlock latex={String.raw`\cos(\theta_1 + 37^\circ) = 0 \;\Rightarrow\; \theta_1 + 37^\circ = 90^\circ \;\Rightarrow\; \theta_1 = 53^\circ`} important />
          <p>
            Result: after a glancing elastic collision of two equal masses (one at rest), they leave{" "}
            <strong>at right angles to each other</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <Callout type="note" title="Collisions vs scattering">
        Marbles, carrom, billiards involve contact only on touching. But a comet approaching the sun, or an
        α-particle meeting a nucleus, involves action at a distance — an event called{" "}
        <strong>scattering</strong>. The outgoing velocities and directions depend on the initial
        velocities, the type of interaction, and the masses, shapes and sizes of the bodies.
      </Callout>

      <h2 id="h-exercises">Exercises 5.1 – 5.23</h2>
      <Expandable title="Exercises 5.1 – 5.23" variant="exercise">
        <p><em>State carefully the sign of the work done in each part of Exercise 5.1; use g = 10 m s⁻² for numerical parts unless stated.</em></p>
        <ol>
          <li>The sign of work done by (a) a man lifting a bucket out of a well by a rope, (b) gravity in that case, (c) friction on a body sliding down an inclined plane, (d) an applied force on a body moving with uniform velocity on a rough horizontal plane, (e) the resistive force of air on a vibrating pendulum bringing it to rest.</li>
          <li>A 2 kg body starts from rest under a horizontal applied force of 7 N on a table with μₖ = 0.1. Compute the work done by (a) the applied force, (b) friction, (c) the net force in 10 s, and (d) the change in kinetic energy. Interpret.</li>
          <li>For the potential-energy curves of Fig. 5.11 (total energy shown by a cross), specify the regions where the particle cannot be found, and the minimum total energy in each case. Think of simple physical contexts.</li>
          <li>V(x) = kx²/2, k = 0.5 N m⁻¹ for a linear SHM. Show that a particle of total energy 1 J must &lsquo;turn back&rsquo; at x = ± 2 m.</li>
          <li>(a) At whose expense does a rocket casing burn up by friction? (b) Why is the work by gravity over a full comet orbit zero? (c) Why does an orbiting satellite speed up as atmospheric resistance drags it closer? (d) In Fig. 5.13 which walk does greater work — carrying 15 kg, or pulling a 15 kg mass up over a pulley? </li>
          <li>Choose the correct alternative: (a) a conservative force doing positive work increases/decreases potential energy; (b) work against friction costs kinetic/potential energy; (c) rate of change of total momentum of a many-particle system is proportional to the external force / sum of internal forces; (d) after an inelastic collision the unchanged quantities are total kinetic energy / total linear momentum / total energy.</li>
          <li>True or false: (a) in elastic collisions the momentum and energy of EACH body is conserved; (b) total energy of a system is always conserved; (c) work over a closed loop is zero for every force; (d) in an inelastic collision final KE is always less than initial.</li>
          <li>(a) Is total KE conserved during the short time two billiard balls are in contact in an elastic collision? (b) Is total linear momentum conserved during that contact? (c) Same questions for an inelastic collision. (d) If the collision force has a PE depending only on separation, is the collision elastic or inelastic?</li>
          <li>For a body initially at rest accelerating uniformly, the power delivered at time t is proportional to (i) t^½ (ii) t (iii) t^{3/2} (iv) t².</li>
          <li>For a body moving unidirectionally under constant power, displacement is proportional to (i) t^½ (ii) t (iii) t^{3/2} (iv) t².</li>
          <li>A body moves 4 m along the z-axis under the constant force F = −î + 2ĵ + 3k̂ N. Work done?</li>
          <li>An electron (10 keV) and a proton (100 keV) are detected. Which is faster? Obtain the speed ratio. (m_e = 9.11 × 10⁻³¹ kg, m_p = 1.67 × 10⁻²⁷ kg, 1 eV = 1.60 × 10⁻¹⁹ J.)</li>
          <li>A raindrop of radius 2 mm falls from 500 m, reaching terminal speed at half height. Work by gravity in the first and second halves? Work by the resistive force over the whole journey if it lands at 10 m s⁻¹?</li>
          <li>A gas molecule hits a wall at 200 m s⁻¹, 30° with the normal, and rebounds with the same speed. Is momentum conserved in the collision? Is the collision elastic or inelastic?</li>
          <li>A 30 m³ tank 40 m above ground is filled in 15 min by a pump of 30% efficiency. What electric power does the pump consume?</li>
          <li>Two identical bearings at rest are hit head-on by a third identical bearing moving at V (elastic). Which of the outcomes shown in Fig. 5.14 results?</li>
          <li>Bob A of a pendulum (released from 30°) hits an equal-mass bob B at rest (elastic). How high does A rise after the collision?</li>
          <li>A pendulum bob of length 1.5 m is released from the horizontal; 5% of energy is lost to air resistance. What is the speed at the lowermost point?</li>
          <li>A 300 kg trolley carrying a 25 kg sandbag moves at 27 km/h on a frictionless track; sand leaks at 0.05 kg s⁻¹. What is the trolley speed after the bag empties?</li>
          <li>A 0.5 kg body moves with v = a x^{3/2}, a = 5 m^−1/2 s⁻¹. Work done by the net force from x = 0 to x = 2 m?</li>
          <li>Windmill blades sweep area A. (a) Mass of air through in time t; (b) kinetic energy of air; (c) electrical power if 25% efficient, A = 30 m², v = 36 km/h, ρ = 1.2 kg m⁻³.</li>
          <li>A dieter lifts a 10 kg mass 1000 times to 0.5 m each time. (a) Work against gravity? (b) How much fat used up, if fat supplies 3.8 × 10⁷ J kg⁻¹ at 20% mechanical efficiency?</li>
          <li>Direct solar energy arrives at 200 W m⁻²; 20% converts to electricity. What area supplies 8 kW? Compare it with a typical house roof.</li>
        </ol>
        <Expandable title="Answer Key — Exercises 5.1 – 5.23">
          <ol>
            <li>(a) positive; (b) negative; (c) negative; (d) positive; (e) negative.</li>
            <li>f = 2 N, net force 5 N, a = 2.5 m s⁻², s = 125 m. (a) 875 J; (b) −250 J; (c) 625 J; (d) ΔK = 625 J = W_net. The net work equals the change in KE; applied force supplies 875 J, friction removes 250 J.</li>
            <li>The particle is classically forbidden wherever E &lt; V(x). For each curve, give the forbidden regions shown in Fig. 5.11 and the minimum total energy to escape/be classically allowed (contexts: box/well, step, oscillator, free space).</li>
            <li>½ × 0.5 × x² = 1 ⟹ x = ±2 m: at these points K = 0 and the particle turns back.</li>
            <li>(a) the rocket&rsquo;s own kinetic energy; (b) gravity is conservative — closed-orbit work is zero; (c) total energy falls but PE falls more, so KE (speed) rises; (d) case (ii) — in (i) the vertical force is perpendicular to the horizontal displacement, so no work.</li>
            <li>(a) decreases; (b) kinetic; (c) external force; (d) total linear momentum and total energy (not kinetic energy).</li>
            <li>(a) False — each BODY&rsquo;s momentum/energy is not conserved; (b) True — total energy always conserved; (c) False — only conservative forces; (d) False — KE can increase if internal energy is released (explosive/inelastic-with-spring case).</li>
            <li>(a) No (KE of the two-ball system is not conserved during the brief contact, even in an elastic collision); (b) Yes always; (c) (a) No, (b) Yes; (d) elastic — a separation-only PE makes the interaction conservative.</li>
            <li>(ii) t. (P = Fv = ma·at = ma²t.)</li>
            <li>(iii) t^{3/2}. (Pt = ½mv² ⟹ v ∝ t^½ ⟹ s ∝ t^{3/2}.)</li>
            <li>12 J (W = F·d = 3 × 4, the î, ĵ components are perpendicular to the ẑ displacement).</li>
            <li>Electron; v_e/v_p = √[(E_e/E_p)(m_p/m_e)] = √(0.1 × 1833) ≈ 13.5.</li>
            <li>m = (4/3)π(2×10⁻³)³ × 10³ ≈ 3.35 × 10⁻⁵ kg. W_g per half = mg × 250 ≈ 8.4 × 10⁻² J (equal halves). W_res = ΔK − W_g(total) = ½×3.35×10⁻⁵×10² − 0.1675 ≈ −0.166 J.</li>
            <li>Momentum of the (molecule + wall) system is conserved. The collision is elastic — the molecule&rsquo;s speed (hence KE) is unchanged.</li>
            <li>mgh = 3×10⁴×10×40 = 1.2×10⁷ J; P_out = 1.2×10⁷/900 ≈ 1.33×10⁴ W; P_in = 1.33×10⁴/0.3 ≈ 4.4×10⁴ W ≈ 44.4 kW.</li>
            <li>The incoming bearing stops; only the LAST bearing moves off at V (momentum transfers through the chain).</li>
            <li>A comes to rest at its collision point (transfers everything to B, equal masses elastic); it rises by 0.</li>
            <li>½mv² = 0.95mgh ⟹ v = √(2 × 0.95 × 9.8 × 1.5) ≈ 5.3 m s⁻¹.</li>
            <li>27 km/h (7.5 m s⁻¹) — no external horizontal force; the escaping sand carries away its own momentum, leaving the trolley speed unchanged.</li>
            <li>W = ΔK = ½ × 0.5 × (5 × 2^{3/2})² = 50 J.</li>
            <li>(a) m = ρAvt; (b) KE = ½ρAv³t; (c) P = 0.25 × ½ × 1.2 × 30 × 10³ = 4500 W = 4.5 kW.</li>
            <li>(a) 10 × 10 × 0.5 × 10³ = 5 × 10⁴ J. (b) Useful per kg = 0.2 × 3.8 × 10⁷ J; fat used = 5 × 10⁴/7.6 × 10⁶ ≈ 6.6 g.</li>
            <li>Useful solar power = 0.2 × 200 = 40 W m⁻²; area = 8000/40 = 200 m² — a few times the roof area of a typical house.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <MetricCard
        label="1 J"
        value="1 kg m² s⁻²"
        unit="SI unit of work / energy"
        trend="neutral"
        description="Work = (component of force along displacement) × displacement; 1 eV = 1.6 × 10⁻¹⁹ J; 1 kWh = 3.6 × 10⁶ J; 1 hp = 746 W."
      />
      <Expandable title="Key formulas &amp; facts — one page">
        <ul>
          <li>Scalar product A·B = AB cosθ = AₓBₓ + A_yB_y + A_zB_z; zero if perpendicular.</li>
          <li>K = ½mv²; W = F·d; WE theorem: K_f − K_i = W (net force, holds for variable forces too: W = ∫F dx).</li>
          <li>No work: zero displacement, zero force, or force ⟂ displacement.</li>
          <li>Conservative force: derivable from V(x) (F = −dV/dx); work depends only on end points; closed-path work zero.</li>
          <li>V = mgh; V_spring = ½kx²; ΔV = −F(x)Δx.</li>
          <li>Conservation: K + V constant if only conservative forces act; E_f − E_i = W_nc otherwise.</li>
          <li>Power P = dW/dt = F·v; 1 W = 1 J s⁻¹.</li>
          <li>Collisions: momentum ALWAYS conserved; elastic 1-D v₁f = (m₁−m₂)/(m₁+m₂) v₁ᵢ, v₂f = 2m₁/(m₁+m₂) v₁ᵢ; equal masses exchange; m₂ ≫ m₁ reflects the light ball.</li>
          <li>Complete inelastic: vf = m₁/(m₁+m₂) v₁ᵢ; KE loss = ½ m₁m₂/(m₁+m₂) v₁ᵢ².</li>
          <li>Equal-mass glancing elastic collision: balls leave at right angles.</li>
        </ul>
      </Expandable>
      <Expandable title="Last-minute recall — formulas only">
        <ul>
          <li><Formula>{String.raw`\mathbf{A}\cdot\mathbf{B} = AB\cos\theta`}</Formula>, <Formula>{String.raw`K = \tfrac{1}{2}mv^2`}</Formula>, <Formula>{String.raw`W = \mathbf{F}\cdot\mathbf{d} = \int F\,\mathrm{d}x`}</Formula></li>
          <li><Formula>{String.raw`K_f - K_i = W`}</Formula>, <Formula>{String.raw`F = -\frac{\mathrm{d}V}{\mathrm{d}x}`}</Formula>, <Formula>{String.raw`V = mgh`}</Formula>, <Formula>{String.raw`V = \tfrac{1}{2}kx^2`}</Formula></li>
          <li><Formula>{String.raw`K_i + V_i = K_f + V_f`}</Formula>, <Formula>{String.raw`E_f - E_i = W_{nc}`}</Formula>, <Formula>{String.raw`P = \mathbf{F}\cdot\mathbf{v}`}</Formula></li>
          <li><Formula>{String.raw`v_f = \frac{m_1}{m_1+m_2}v_{1i}`}</Formula>, <Formula>{String.raw`v_{1f} = \frac{m_1-m_2}{m_1+m_2}v_{1i}`}</Formula>, <Formula>{String.raw`v_{2f} = \frac{2m_1}{m_1+m_2}v_{1i}`}</Formula></li>
        </ul>
      </Expandable>
    </>
  );
}