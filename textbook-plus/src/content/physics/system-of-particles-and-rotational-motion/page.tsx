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

export default function SystemsOfParticlesAndRotationalMotionChapter() {
  return (
    <>
      <h2 id="h-intro">6.1 Introduction</h2>
      <p>
        Earlier chapters treated the motion of a single particle — ideally a point mass with no size —
        and applied the same results to bodies of finite size. But every real body we encounter has finite
        size, and for such <strong>extended bodies</strong> the particle model is inadequate. An extended
        body is, first of all, a <strong>system of particles</strong>. We begin with the motion of the
        system as a whole: the <Highlight color="blue">centre of mass</Highlight> is the key concept.
      </p>
      <KeyPoint title="Definition of a rigid body">
        An ideal rigid body has a perfectly definite and unchanging shape — the distances between all
        pairs of its particles never change. No real body is truly rigid (bodies deform under force), but
        for wheels, tops, steel beams, molecules and planets the deformation is negligible, so we may
        treat them as rigid.
      </KeyPoint>

      <h3>6.1.1 What kind of motion can a rigid body have?</h3>
      <FormulaCard>
        <ul>
          <li>
            <strong>Pure translation:</strong> every particle of the body has the same velocity at any
            instant (a block sliding down an inclined plane, Fig. 6.1).
          </li>
          <li>
            <strong>Rolling motion is not pure translation:</strong> the points of a rolling cylinder have
            different velocities at any instant; the point of contact is instantaneously at rest when it
            rolls without slipping (Fig. 6.2).
          </li>
          <li>
            <strong>Rotation about a fixed axis:</strong> every particle moves in a circle in a plane
            perpendicular to the axis, with its centre on the axis; particles on the axis are stationary.
            Examples: a ceiling fan, a potter&rsquo;s wheel, a merry-go-round.
          </li>
        </ul>
      </FormulaCard>
      <Callout type="note" title="The axis need not always be fixed">
        In more general rotation only <em>one point</em> of the body is fixed: a spinning top precesses
        about the vertical through its point of contact, and an oscillating table fan swings around its
        pivot while the blades rotate. In this chapter we restrict ourselves to rotation about a{" "}
        <strong>fixed axis</strong> unless stated otherwise. Rolling is then rotation about a fixed axis
        combined with translation — the centre of mass of the body follows the pure translational
        trajectory.
      </Callout>

      <h2 id="h-com">6.2 Centre of Mass</h2>
      <p>
        Take two particles on the x-axis, masses m₁ and m₂ at x₁ and x₂ from an origin O. The centre of
        mass is the point C at a distance X given by
      </p>
      <FormulaBlock latex={String.raw`X = \frac{m_1x_1 + m_2x_2}{m_1 + m_2}`} important />
      <p>
        X is the <strong>mass-weighted mean</strong> of x₁ and x₂. For equal masses (m₁ = m₂ = m), X = (x₁
        + x₂)/2 — the CM lies exactly midway between them. For n particles along a line, the definition
        generalises to X = Σmᵢxᵢ / Σmᵢ, where <Formula>{String.raw`M = \sum_i m_i`}</Formula> is the total
        mass.
      </p>
      <p>
        For n particles distributed in space, the centre of mass is the point (X, Y, Z) with
      </p>
      <FormulaCard>
        <ul>
          <li>
            <Formula>{String.raw`X = \frac{\sum_i m_ix_i}{M}`}</Formula>,{" "}
            <Formula>{String.raw`Y = \frac{\sum_i m_iy_i}{M}`}</Formula>,{" "}
            <Formula>{String.raw`Z = \frac{\sum_i m_iz_i}{M}`}</Formula> (6.4a–c)
          </li>
          <li>Vector form: <Formula>{String.raw`\mathbf{R} = \frac{\sum_i m_i\mathbf{r}_i}{M}`}</Formula> (6.4d)</li>
          <li>
            If the origin is chosen at the centre of mass, <Formula>{String.raw`\sum_i m_i\mathbf{r}_i = 0`}</Formula>.
          </li>
        </ul>
      </FormulaCard>
      <p>
        A rigid body is a system of closely packed particles, but its particle count is astronomically
        large. Treating the body as a continuous distribution of mass, the sums pass over into integrals:
      </p>
      <FormulaBlock latex={String.raw`\mathbf{R} = \frac{1}{M}\int \mathbf{r}\,\mathrm{d}m`} important />
      <p>
        With the origin at the CM, <Formula>{String.raw`\int \mathbf{r}\,\mathrm{d}m = 0`}</Formula>.
      </p>
      <KeyPoint title="Symmetry argument for regular bodies">
        For homogeneous bodies of regular shape — rings, discs, spheres, rods — the CM lies at the
        geometric centre. A thin rod: for every element dm at x there is an equal-mass element at −x
        (reflection symmetry), so the integral x dm is zero and the CM is the geometric centre.
      </KeyPoint>
      <Expandable title="Example 6.2 — Triangular lamina: CM at the centroid" variant="example">
        <ProblemSolution.Problem>
          <p>Find the centre of mass of a uniform triangular lamina.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Subdivide the lamina into narrow strips parallel to the base. By symmetry each strip has its
            CM at its midpoint; joining the midpoints gives the median. The CM of the whole triangle must
            therefore lie on the median — and by the same argument on all three medians — so the CM is the
            point of concurrence of the medians, the <strong>centroid</strong> of the triangle.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 6.1 — Three particles at the corners of an equilateral triangle" variant="example">
        <ProblemSolution.Problem>
          <p>
            Find the centre of mass of three particles of masses 100 g, 150 g and 200 g placed at the
            vertices of an equilateral triangle of side 0.5 m.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Take the vertices O, A, B at (0,0), (0.5,0) and (0.25, 0.25√3) m with masses 100 g, 150 g, 200 g:
          </p>
          <FormulaBlock latex={String.raw`X = \frac{100\times 0 + 150\times 0.5 + 200\times 0.25}{450} = \frac{125}{450} = \frac{5}{18}\ \text{m}`} />
          <FormulaBlock latex={String.raw`Y = \frac{100\times 0 + 150\times 0 + 200\times 0.25\sqrt{3}}{450} = \frac{50\sqrt{3}}{450} = \frac{\sqrt{3}}{9}\ \text{m}`} important />
          <p>
            The CM is at (5/18, √3/9) m — not the geometric centre of the triangle, because the masses are
            unequal.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 6.3 — Centre of mass of a uniform L-shaped lamina" variant="example">
        <ProblemSolution.Problem>
          <p>
            Find the centre of mass of a uniform L-shaped lamina (a thin flat plate made of three 1 m × 1 m
            squares) of mass 3 kg.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The lamina consists of 3 squares of mass 1 kg each; by symmetry each square&rsquo;s CM is its
            geometric centre, at (½, ½), (3/2, ½) and (½, 3/2).
          </p>
          <FormulaBlock latex={String.raw`X = \frac{1(\frac{1}{2}) + 1(\frac{3}{2}) + 1(\frac{1}{2})}{3} = \frac{5}{6}\ \text{m},\qquad Y = \frac{1(\frac{1}{2}) + 1(\frac{1}{2}) + 1(\frac{3}{2})}{3} = \frac{5}{6}\ \text{m}`} important />
          <p>
            The CM lies on the diagonal OD. If the three squares had different masses, each square&rsquo;s
            CM would have to be weighted by its own mass.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-com-motion">6.3 Motion of the Centre of Mass</h2>
      <p>Rewrite the definition of the CM as</p>
      <FormulaBlock latex={String.raw`M\mathbf{R} = m_1\mathbf{r}_1 + m_2\mathbf{r}_2 + \cdots`} />
      <p>
        Differentiating twice with respect to time (masses constant):
      </p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`M\mathbf{V} = m_1\mathbf{v}_1 + m_2\mathbf{v}_2 + \cdots`}</Formula> (6.8) — the velocity of the CM</li>
          <li><Formula>{String.raw`M\mathbf{A} = m_1\mathbf{a}_1 + m_2\mathbf{a}_2 + \cdots`}</Formula> (6.9) — the acceleration of the CM</li>
        </ul>
      </FormulaCard>
      <p>
        By Newton&rsquo;s second law, mᵢaᵢ = Fᵢ, so M A = ΣFᵢ. The internal forces occur in equal and
        opposite pairs (third law) and cancel:
      </p>
      <Callout type="important" title="Equation governing the centre of mass">
        <FormulaBlock latex={String.raw`M\mathbf{A} = \mathbf{F}_{ext}`} important />
        The centre of mass of a system moves as if the <strong>entire mass</strong> of the system were
        concentrated there and <strong>all the external forces</strong> acted at that point. To determine
        the motion of the CM, no knowledge of the internal forces is required.
      </Callout>
      <Callout type="note" title="A projectile exploding in flight">
        A projectile following a parabolic path explodes midway into fragments. The forces of the explosion
        are internal — they contribute nothing to the CM&rsquo;s motion. Gravity, the only external force,
        is unchanged, so the CM continues along the same parabola it would have followed with no explosion.
      </Callout>

      <h2 id="h-p-system">6.4 Linear Momentum of a System of Particles</h2>
      <p>
        Recall for a single particle: p = mv (6.12) and Newton&rsquo;s second law F = dp/dt (6.13). For a
        system of n particles, the total linear momentum is the vector sum of the individual momenta:
      </p>
      <FormulaBlock latex={String.raw`\mathbf{P} = \sum_i \mathbf{p}_i = \sum_i m_i\mathbf{v}_i = M\mathbf{V}`} important />
      <p>
        Differentiating P = MV with respect to time and using M A = F_ext,
      </p>
      <FormulaBlock latex={String.raw`\frac{\mathrm{d}\mathbf{P}}{\mathrm{d}t} = \mathbf{F}_{ext}`} important />
      <p>
        — Newton&rsquo;s second law extended to a system of particles.
      </p>
      <Callout type="important" title="Conservation of total linear momentum">
        If the total external force on the system is zero, dP/dt = 0 and{" "}
        <Formula>{String.raw`\mathbf{P} = \text{constant}`}</Formula> (6.18a) — equivalently, the velocity
        of the centre of mass is <strong>constant</strong>. Each component (P_x, P_y, P_z) is separately
        conserved. Individual particles can trace complicated trajectories under internal forces while
        the CM moves uniformly in a straight line, like a free particle.
      </Callout>
      <FormulaCard>
        <p><strong>Radioactive decay:</strong> a radium nucleus disintegrates into radon and an alpha particle. The decay forces are internal and external forces are negligible, so the total linear momentum is unchanged. The CM keeps moving along the original path [Fig. 6.13(a)]; observed in the CM frame the two particles fly back to back [Fig. 6.13(b)].</p>
        <p><strong>Binary stars:</strong> with no external forces the CM moves like a free particle; in the CM frame the two stars circle the CM, diametrically opposite each other (Fig. 6.14).</p>
      </FormulaCard>
      <KeyPoint title="A powerful technique">
        Separating the motion of a system into (i) the motion of the centre of mass and (ii) the motion
        about the centre of mass greatly simplifies the description (decay, binary stars, and later, rigid
        bodies).
      </KeyPoint>

      <h2 id="h-vector-product">6.5 Vector Product of Two Vectors</h2>
      <p>
        Chapter 5 defined the scalar (dot) product. For rotational motion we need the other product — the
        <strong>vector product</strong> or <strong>cross product</strong>: torque and angular momentum are
        both defined as vector products.
      </p>
      <Callout type="important" title="Definition of the vector product c = a × b">
        <ul>
          <li>Magnitude: <Formula>{String.raw`c = ab\sin\theta`}</Formula>, θ the angle between a and b.</li>
          <li>Direction: perpendicular to the plane containing a and b, given by the <strong>right-handed screw rule</strong> — turn the screw head from a to b; the tip advances along c — or the right-hand rule (fingers curl from a to b, stretched thumb points along c).</li>
          <li>Rotate through the smaller angle (&lt; 180°) between the vectors.</li>
        </ul>
      </Callout>
      <FormulaCard>
        <ul>
          <li><strong>Not commutative:</strong> <Formula>{String.raw`\mathbf{a}\times\mathbf{b} = -\mathbf{b}\times\mathbf{a}`}</Formula> — same magnitude, opposite direction.</li>
          <li><strong>Distributive:</strong> <Formula>{String.raw`\mathbf{a}\times(\mathbf{b}+\mathbf{c}) = \mathbf{a}\times\mathbf{b} + \mathbf{a}\times\mathbf{c}`}</Formula></li>
          <li><strong>Reflection:</strong> under mirror reflection a → −a, b → −b, so <Formula>{String.raw`\mathbf{a}\times\mathbf{b} \to (-\mathbf{a})\times(-\mathbf{b}) = \mathbf{a}\times\mathbf{b}`}</Formula> — the cross product is unchanged.</li>
          <li><strong>Elementary products:</strong> <Formula>{String.raw`\hat{\mathbf{i}}\times\hat{\mathbf{i}} = 0`}</Formula>, and in cyclic order <Formula>{String.raw`\hat{\mathbf{i}}\times\hat{\mathbf{j}} = \hat{\mathbf{k}},\quad \hat{\mathbf{j}}\times\hat{\mathbf{k}} = \hat{\mathbf{i}},\quad \hat{\mathbf{k}}\times\hat{\mathbf{i}} = \hat{\mathbf{j}}`}</Formula>; reversing the order introduces a minus sign.</li>
        </ul>
      </FormulaCard>
      <p>
        In components, a × b can be evaluated as the determinant
      </p>
      <FormulaBlock latex={String.raw`\mathbf{a}\times\mathbf{b} = \begin{vmatrix} \hat{\mathbf{i}} & \hat{\mathbf{j}} & \hat{\mathbf{k}} \\ a_x & a_y & a_z \\ b_x & b_y & b_z \end{vmatrix}`} />
      <Expandable title="Example 6.4 — Scalar and vector products" variant="example">
        <ProblemSolution.Problem>
          <p>
            Find the scalar and vector products of the vectors a = 3î − 4ĵ + 5k̂ and b = −2î + ĵ − 3k̂.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\mathbf{a}\cdot\mathbf{b} = 3(-2) + (-4)(1) + 5(-3) = -6 - 4 - 15 = -25`} important />
          <FormulaBlock latex={String.raw`\mathbf{a}\times\mathbf{b} = \begin{vmatrix} \hat{\mathbf{i}} & \hat{\mathbf{j}} & \hat{\mathbf{k}} \\ 3 & -4 & 5 \\ -2 & 1 & -3 \end{vmatrix} = 7\hat{\mathbf{i}} - \hat{\mathbf{j}} - 5\hat{\mathbf{k}}`} important />
          <FormulaBlock latex={String.raw`\mathbf{b}\times\mathbf{a} = -(\mathbf{a}\times\mathbf{b}) = -7\hat{\mathbf{i}} + \hat{\mathbf{j}} + 5\hat{\mathbf{k}}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-angular-velocity">6.6 Angular Velocity and its Relation with Linear Velocity</h2>
      <p>
        Every particle of a body rotating about a fixed axis moves in a circle (Fig. 6.16). The ratio
        Δθ/Δt as Δt → 0 gives the <strong>instantaneous angular velocity</strong> ω = dθ/dt. For a
        particle at perpendicular distance rᵢ from the axis, the linear speed is
      </p>
      <FormulaBlock latex={String.raw`v_i = \omega r_i`} important />
      <p>
        All particles of the body share the same ω — we call it the angular velocity of the whole body.
        Particles on the axis (r = 0) are stationary, as expected for a fixed axis. ω is actually a{" "}
        <strong>vector</strong>: directed along the axis of rotation, in the sense an advancing
        right-handed screw would take (Fig. 6.17a). With an origin on the axis,
      </p>
      <FormulaBlock latex={String.raw`\mathbf{v} = \boldsymbol{\omega} \times \mathbf{r}`} important />
      <p>
        since ω × OC = 0 (parallel vectors), this equals ω × CP — perpendicular to the axis and to CP,
        hence tangential, with magnitude ω r⊥. The relation v = ω × r holds even for rotation with one
        point fixed (a spinning top), with r measured from that fixed point.
      </p>
      <h3>6.6.1 Angular acceleration</h3>
      <p>
        By analogy with linear acceleration, the <strong>angular acceleration</strong> is the time rate of
        change of angular velocity:
      </p>
      <FormulaBlock latex={String.raw`\alpha = \frac{\mathrm{d}\omega}{\mathrm{d}t}`} important />
      <p>
        For a fixed axis the direction of ω (and hence of α) is fixed, so this vector equation reduces to
        the scalar equation α = dω/dt.
      </p>

      <h2 id="h-torque">6.7 Torque and Angular Momentum</h2>
      <p>
        Opening a door is a lesson in torque: a force on the hinge line rotates nothing, while a force of
        the same magnitude applied at the outer edge, at right angles to the door, is highly effective.
        Not the force alone, but how and where it is applied, matters in rotation. The rotational analogue
        of force is the <strong>moment of force</strong>, also called the <strong>torque</strong>.
      </p>
      <h3>6.7.1 Moment of force (Torque)</h3>
      <p>
        A force F acting on a particle at position r (relative to origin O) produces a moment of force
      </p>
      <FormulaBlock latex={String.raw`\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}`} important />
      <FormulaCard>
        <ul>
          <li>Magnitude: <Formula>{String.raw`\tau = rF\sin\theta = r_\perp F = rF_\perp`}</Formula> (6.24a–c) — r⊥ is the perpendicular distance of the force&rsquo;s line of action from the origin.</li>
          <li>τ = 0 if r = 0, F = 0, or the line of action passes through the origin (θ = 0° or 180°).</li>
          <li>Dimensions ML²T⁻² (same as work/energy), but torque is a <strong>vector</strong> while work is a scalar; SI unit the newton-metre (N m).</li>
          <li>Reversing F reverses τ; reversing both r and F leaves τ unchanged.</li>
        </ul>
      </FormulaCard>
      <h3>6.7.2 Angular momentum</h3>
      <p>
        Angular momentum is the rotational analogue of linear momentum — the <em>moment of (linear)
        momentum</em>. For a particle of mass m and momentum p at position r,
      </p>
      <FormulaBlock latex={String.raw`\mathbf{l} = \mathbf{r}\times\mathbf{p}`} important />
      <FormulaCard>
        <p>
          Magnitude <Formula>{String.raw`l = rp\sin\theta = r_\perp p = rp_\perp`}</Formula>. Zero if p = 0,
          r = 0, or the line of p passes through the origin.
        </p>
        <p>
          Differentiating l = r × p: dl/dt = v × mv + r × dp/dt = 0 + r × F, hence
        </p>
        <p><Formula>{String.raw`\frac{\mathrm{d}\mathbf{l}}{\mathrm{d}t} = \boldsymbol{\tau}`}</Formula> (6.27) — the rotational analogue of F = dp/dt.</p>
      </FormulaCard>
      <p>
        For a system of n particles, the total angular momentum and total torque are obtained by vector
        addition:
      </p>
      <FormulaBlock latex={String.raw`\mathbf{L} = \sum_i \mathbf{r}_i\times\mathbf{p}_i,\qquad \boldsymbol{\tau} = \sum_i \mathbf{r}_i\times\mathbf{F}_i`} />
      <Stepper
        steps={[
          { label: "Separate external and internal forces", description: "τ = τ_ext + τ_int, with F_i = F_i_ext + F_i_int." },
          { label: "Newton's third law + central forces", description: "Assuming inter-particle forces act along the line joining the particles, each action–reaction pair contributes zero torque, so τ_int = 0." },
          { label: "Rotational second law for a system", description: "dL/dt = τ_ext (6.28b), the analogue of dP/dt = F_ext." },
        ]}
      />
      <Callout type="important" title="Conservation of angular momentum">
        If the total external torque is zero, <Formula>{String.raw`\frac{\mathrm{d}\mathbf{L}}{\mathrm{d}t} = 0`}</Formula>{" "}
        and <Formula>{String.raw`\mathbf{L} = \text{constant}`}</Formula> (6.29a) — each component L_x, L_y,
        L_z is separately conserved.
      </Callout>
      <Expandable title="Example 6.5 — Torque about the origin" variant="example">
        <ProblemSolution.Problem>
          <p>
            Find the torque of the force F = 7î + 3ĵ − 5k̂ about the origin. The force acts on a particle
            whose position vector is r = î − ĵ + k̂.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F} = \begin{vmatrix} \hat{\mathbf{i}} & \hat{\mathbf{j}} & \hat{\mathbf{k}} \\ 1 & -1 & 1 \\ 7 & 3 & -5 \end{vmatrix}`} />
          <FormulaBlock latex={String.raw`\boldsymbol{\tau} = \hat{\mathbf{i}}(5-3) - \hat{\mathbf{j}}(-5-7) + \hat{\mathbf{k}}(3+7) = 2\hat{\mathbf{i}} + 12\hat{\mathbf{j}} + 10\hat{\mathbf{k}}\ \text{N m}`} important />
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 6.6 — Constant angular momentum of a constant-velocity particle" variant="example">
        <ProblemSolution.Problem>
          <p>
            Show that the angular momentum about any point of a single particle moving with constant
            velocity remains constant throughout the motion.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The angular momentum is l = r × mv with magnitude mvr sinθ. As the particle moves, the line of
            direction of v is fixed, so the perpendicular distance OM = r sinθ is constant — the magnitude
            is constant. The direction of l is perpendicular to the plane of r and v (into the page of Fig.
            6.19), and this too does not change. Hence l is conserved in magnitude and direction. There is
            no external torque on the particle.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <Callout type="note" title="Bicycle rim experiment">
        Hold a spinning bicycle rim vertical on two strings. Release one string: the rim keeps rotating
        but the plane of rotation turns around the remaining string — the angular momentum{" "}
        <strong>precesses</strong>. The torque generated changes the direction (not the magnitude) of the
        angular momentum, making it precess about an axis perpendicular to both L and τ.
      </Callout>

      <h2 id="h-equilibrium">6.8 Equilibrium of a Rigid Body</h2>
      <p>
        External forces change the translational state of a body (Eq. 6.17); if the total torque does not
        vanish they also change its rotational state (Eq. 6.28b). A rigid body is in{" "}
        <strong>mechanical equilibrium</strong> if neither its linear nor its angular momentum is changing:
      </p>
      <Callout type="important" title="Conditions for mechanical equilibrium">
        <ul>
          <li>(1) Total force zero — <Formula>{String.raw`\sum_i \mathbf{F}_i = 0`}</Formula> (6.30a): <strong>translational equilibrium</strong>.</li>
          <li>(2) Total torque zero — <Formula>{String.raw`\sum_i \boldsymbol{\tau}_i = 0`}</Formula> (6.30b): <strong>rotational equilibrium</strong>.</li>
        </ul>
      </Callout>
      <p>
        These are two vector equations — six independent scalar conditions. For <strong>coplanar
        forces</strong> only three conditions are needed: two force-component sums (any two perpendicular
        axes in the plane) and one torque sum (about any axis perpendicular to the plane). The rotational
        condition is independent of the origin when the translational condition holds. For an
        <strong>equilibrium particle</strong> only translational equilibrium applies (forces concurrent).
      </p>
      <FormulaCard>
        <p><strong>Partial equilibrium:</strong> the two conditions are independent — a body may satisfy one but not the other.</p>
        <ul>
          <li>Two equal parallel forces in the same direction at the ends of a light rod: net force ≠ 0 but the moments cancel about the midpoint ⟹ rotational equilibrium, not translational.</li>
          <li>With the force at B reversed: net force = 0 but the rod undergoes pure rotation — a <strong>couple</strong>.</li>
        </ul>
        <p>
          A <strong>couple</strong> is a pair of equal and opposite forces with different lines of action; it
          produces rotation without translation (opening a bottle lid, a compass needle in the
          earth&rsquo;s magnetic field).
        </p>
      </FormulaCard>
      <Expandable title="Example 6.7 — Moment of a couple is origin-independent" variant="example">
        <ProblemSolution.Problem>
          <p>Show that the moment of a couple does not depend on the point about which the moments are taken.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Let the forces F and −F act at points with position vectors r₂ and r₁. The moment of the couple
            is
          </p>
          <FormulaBlock latex={String.raw`\mathbf{r}_1\times(-\mathbf{F}) + \mathbf{r}_2\times\mathbf{F} = (\mathbf{r}_2 - \mathbf{r}_1)\times\mathbf{F} = \mathbf{AB}\times\mathbf{F}`} important />
          <p>
            Since AB is the fixed vector joining the points of application, the moment of a couple is the
            same whatever origin is chosen.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <h3>6.8.1 Principle of moments</h3>
      <p>
        An ideal lever is a light rod pivoted at the <strong>fulcrum</strong> (a see-saw is the classic
        example). Forces F₁ (the load) and F₂ (the effort) act at distances d₁ and d₂ from the fulcrum,
        with reaction R at the fulcrum.
      </p>
      <FormulaCard>
        <ul>
          <li>Translational equilibrium: R − F₁ − F₂ = 0.</li>
          <li>Rotational equilibrium (moments about the fulcrum): <Formula>{String.raw`d_1F_1 - d_2F_2 = 0`}</Formula>, i.e. <Formula>{String.raw`d_1F_1 = d_2F_2`}</Formula> (6.32a): <strong>load arm × load = effort arm × effort</strong>.</li>
          <li>Mechanical Advantage: <Formula>{String.raw`\text{M.A.} = \frac{F_1}{F_2} = \frac{d_2}{d_1}`}</Formula> (6.32b) — greater than one when the effort arm is longer, so a small effort lifts a large load.</li>
        </ul>
      </FormulaCard>
      <h3>6.8.2 Centre of gravity</h3>
      <p>
        The <strong>centre of gravity (CG)</strong> of a body is the point about which the total
        gravitational torque is zero:
      </p>
      <FormulaBlock latex={String.raw`\sum_i \mathbf{r}_i \times m_i\mathbf{g} = 0`} important />
      <p>
        Since g is the same for all particles of a small body, it factors out of the sum, leaving Σmᵢrᵢ =
        0 — the CG is at the <strong>centre of mass</strong>. In a field so non-uniform that g varies
        across the body, the two points cease to coincide: the centre of mass is purely a matter of mass
        distribution, independent of gravity. Methods of locating the CG: balancing (cardboard on a pencil
        tip), and the suspension method — suspend from different points, draw the verticals through them,
        and their intersection is the CG.
      </p>
      <Expandable title="Example 6.8 — Reactions of a bar on two knife edges" variant="example">
        <ProblemSolution.Problem>
          <p>
            A metal bar 70 cm long and 4.00 kg in mass is supported on two knife edges placed 10 cm from
            each end. A 6.00 kg load is suspended at 30 cm from one end. Find the reactions at the knife
            edges. (Bar uniform and homogeneous.)
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The bar&rsquo;s weight W acts at its centre G: AG = 35 cm, AP = 30 cm, PG = 5 cm, K₁G = K₂G =
            25 cm. Take g = 9.8 m s⁻². Vertical equilibrium:
          </p>
          <FormulaBlock latex={String.raw`R_1 + R_2 = W_1 + W = 10.00\,g = 98.00\ \text{N}`} />
          <p>Moments about G (R₁ clockwise, W₁ and R₂ anticlockwise):</p>
          <FormulaBlock latex={String.raw`-R_1(0.25) + W_1(0.05) + R_2(0.25) = 0 \;\Rightarrow\; R_1 - R_2 = 1.2\,g = 11.76\ \text{N}`} />
          <FormulaBlock latex={String.raw`R_1 = 54.88\ \text{N} \approx 55\ \text{N},\qquad R_2 = 43.12\ \text{N} \approx 43\ \text{N}`} important />
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 6.9 — Ladder against a frictionless wall" variant="example">
        <ProblemSolution.Problem>
          <p>
            A 3 m long ladder weighing 20 kg leans on a frictionless wall; its feet rest on the floor 1 m
            from the wall. Find the reaction forces of the wall and the floor.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            With AC = 1 m and AB = 3 m, BC = √(3² − 1²) = 2√2 m. Forces: weight W = 20g = 196.0 N at the
            midpoint D; wall reaction F₁ (horizontal, perpendicular to the frictionless wall); floor
            reaction F₂ resolved into normal N and friction F (toward the wall).
          </p>
          <FormulaBlock latex={String.raw`N - W = 0 \;\Rightarrow\; N = 196.0\ \text{N},\qquad F - F_1 = 0`} />
          <p>Moments about A:</p>
          <FormulaBlock latex={String.raw`F_1(2\sqrt{2}) - \tfrac{1}{2}W = 0 \;\Rightarrow\; F_1 = \frac{W}{4\sqrt{2}} = \frac{196.0}{4\sqrt{2}} = 34.6\ \text{N}`} important />
          <FormulaBlock latex={String.raw`F_2 = \sqrt{N^2 + F^2} = \sqrt{196.0^2 + 34.6^2} = 199.0\ \text{N}`} important />
          <p>
            F₂ makes angle α with the horizontal where tanα = N/F = 4√2, so α ≈ 80°.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-moment-inertia">6.9 Moment of Inertia</h2>
      <p>
        What is the rotational analogue of mass? For rotation about a fixed axis, a particle at distance
        rᵢ from the axis moves with vᵢ = ωrᵢ, contributing kinetic energy ½mᵢrᵢ²ω². Summing over the
        body,
      </p>
      <FormulaBlock latex={String.raw`K = \tfrac{1}{2}\left(\sum_i m_ir_i^2\right)\omega^2`} />
      <Callout type="important" title="Moment of inertia">
        <FormulaBlock latex={String.raw`I = \sum_i m_ir_i^2,\qquad K = \tfrac{1}{2}I\omega^2`} important />
        I is a characteristic of the rigid body and of the axis about which it rotates — independent of ω.
        It is the <strong>rotational analogue of mass</strong> (compare K = ½Mv²).
      </Callout>
      <FormulaCard>
        <p><strong>Two simple cases:</strong></p>
        <ul>
          <li>Thin ring of mass M, radius R, rotating in its own plane about its centre: I = <Formula>{String.raw`MR^2`}</Formula>.</li>
          <li>Light rod of length l with two masses M/2 each at distance l/2 from the CM (perpendicular axis through the CM): I = (M/2)(l/2)² + (M/2)(l/2)² = <Formula>{String.raw`Ml^2/4`}</Formula>.</li>
        </ul>
      </FormulaCard>
      <TableCard
        headers={["Body", "Axis", "Moment of inertia"]}
        rows={[
          { cells: ["Thin circular ring, radius R", "Perpendicular to plane, at centre", "MR²"] },
          { cells: ["Thin circular ring, radius R", "Diameter", "MR²/2"] },
          { cells: ["Thin rod, length L", "Perpendicular to rod, at midpoint", "ML²/12"] },
          { cells: ["Circular disc, radius R", "Perpendicular to disc, at centre", "MR²/2"] },
          { cells: ["Circular disc, radius R", "Diameter", "MR²/4"] },
          { cells: ["Hollow cylinder, radius R", "Axis of cylinder", "MR²"] },
          { cells: ["Solid cylinder, radius R", "Axis of cylinder", "MR²/2"] },
          { cells: ["Solid sphere, radius R", "Diameter", "2MR²/5"] },
        ]}
        caption="Table 6.1 — Moments of inertia of some regular shaped bodies about specific axes."
      />
      <p>
        In every case I = Mk², where k has the dimension of length — the <strong>radius of
        gyration</strong>: the distance from the axis of a point mass equal to the body&rsquo;s total mass
        whose moment of inertia equals the body&rsquo;s. For a rod about its midpoint k = L/√12; for a
        disc about a diameter k = R/2.
      </p>
      <KeyPoint title="What determines the moment of inertia">
        I depends on the body&rsquo;s mass, its shape and size, the distribution of mass about the axis,
        and the position and orientation of the axis. Dimensions ML²; SI unit kg m². Unlike mass, I is
        not a fixed property of the body alone.
      </KeyPoint>
      <Callout type="note" title="The flywheel">
        Machines that produce rotational motion (steam engine, automobile engine) carry a disc of large
        moment of inertia called a <strong>flywheel</strong>. It resists sudden increases or decreases in
        speed, smoothing the ride.
      </Callout>

      <h2 id="h-angular-kinematics">6.10 Kinematics of Rotational Motion about a Fixed Axis</h2>
      <p>
        Rotation about a fixed axis has a single degree of freedom — one variable, the angular displacement
        θ. The angular velocity is ω = dθ/dt and the angular acceleration is α = dω/dt; with the axis
        fixed these reduce to scalars. The kinematical equations of uniform acceleration carry over
        directly:
      </p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`\omega = \omega_0 + \alpha t`}</Formula> (6.36)</li>
          <li><Formula>{String.raw`\theta = \theta_0 + \omega_0 t + \tfrac{1}{2}\alpha t^2`}</Formula> (6.37)</li>
          <li><Formula>{String.raw`\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)`}</Formula> (6.38)</li>
        </ul>
      </FormulaCard>
      <Expandable title="Example 6.10 — Obtaining Eq. (6.36) from first principles" variant="example">
        <ProblemSolution.Problem>
          <p>Obtain the equation ω = ω₀ + αt for uniform angular acceleration from first principles.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The angular acceleration is uniform, so dω/dt = α = constant. Integrating:
          </p>
          <FormulaBlock latex={String.raw`\omega = \int \alpha\,\mathrm{d}t + c = \alpha t + c`} />
          <p>At t = 0, ω = ω₀, so c = ω₀. Hence ω = αt + ω₀, as required. Integrating ω = dθ/dt gives Eq. (6.37), and eliminating t gives Eq. (6.38).</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 6.11 — Motor wheel getting up to speed" variant="example">
        <ProblemSolution.Problem>
          <p>
            The angular speed of a motor wheel is increased from 1200 rpm to 3120 rpm in 16 seconds.
            (i) What is its angular acceleration, assuming it is uniform? (ii) How many revolutions does
            the engine make during this time?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\omega_0 = \frac{2\pi\times 1200}{60} = 40\pi\ \text{rad s}^{-1},\qquad \omega = \frac{2\pi\times 3120}{60} = 104\pi\ \text{rad s}^{-1}`} />
          <FormulaBlock latex={String.raw`\alpha = \frac{\omega - \omega_0}{t} = \frac{104\pi - 40\pi}{16} = 4\pi\ \text{rad s}^{-2}`} important />
          <FormulaBlock latex={String.raw`\theta = \omega_0 t + \tfrac{1}{2}\alpha t^2 = 40\pi\times 16 + \tfrac{1}{2}\times 4\pi\times 16^2 = (640\pi + 512\pi)\ \text{rad} = 1152\pi\ \text{rad}`} />
          <FormulaBlock latex={String.raw`\text{revolutions} = \frac{1152\pi}{2\pi} = 576`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-dynamics">6.11 Dynamics of Rotational Motion about a Fixed Axis</h2>
      <p>
        With the axis fixed, only the components of torque <strong>along the axis</strong> need be
        considered — a perpendicular component would only tend to tilt the axis, and constraint forces
        cancel it. Accordingly we consider only forces lying in planes perpendicular to the axis, and only
        position-vector components perpendicular to the axis.
      </p>
      <p>
        A typical force F₁ at P₁ displaces the particle by ds₁ = r₁ dθ (tangential). The work done is
      </p>
      <FormulaBlock latex={String.raw`\mathrm{d}W_1 = F_1\mathrm{d}s_1\cos\varphi_1 = (r_1F_1\sin\alpha_1)\,\mathrm{d}\theta = \tau_1\,\mathrm{d}\theta`} />
      <p>Summing over all forces on the body:</p>
      <Callout type="important" title="Work and power for rotation">
        <FormulaBlock latex={String.raw`\mathrm{d}W = \tau\,\mathrm{d}\theta,\qquad P = \frac{\mathrm{d}W}{\mathrm{d}t} = \tau\omega`} important />
        the exact analogues of dW = F ds and P = Fv.
      </Callout>
      <p>
        For a rigid body no internal motion exists, so the external work goes entirely into rotational
        kinetic energy. The rate of increase of energy is d(½Iω²)/dt = Iωα; with P = τω and α = dω/dt,
      </p>
      <FormulaBlock latex={String.raw`\tau = I\alpha`} important />
      <Callout type="note" title="Newton's second law for rotation">
        Just as force produces acceleration, torque produces angular acceleration: α is proportional to the
        applied torque and inversely proportional to the moment of inertia. Equation (6.41) is Newton&rsquo;s
        second law for rotation about a fixed axis.
      </Callout>
      <TableCard
        headers={["Quantity", "Linear motion", "Rotational motion about a fixed axis"]}
        rows={[
          { cells: ["Displacement", "x", "θ"] },
          { cells: ["Velocity", "v = dx/dt", "ω = dθ/dt"] },
          { cells: ["Acceleration", "a = dv/dt", "α = dω/dt"] },
          { cells: ["Mass", "M", "I"] },
          { cells: ["Force", "F = Ma", "τ = Iα"] },
          { cells: ["Work", "dW = F ds", "dW = τ dθ"] },
          { cells: ["Kinetic energy", "K = Mv²/2", "K = Iω²/2"] },
          { cells: ["Power", "P = Fv", "P = τω"] },
          { cells: ["Linear momentum", "p = Mv", "L = Iω"] },
        ]}
        caption="Table 6.2 — Comparison of translational and rotational motion."
      />
      <Expandable title="Example 6.12 — Flywheel pulled by a cord" variant="example">
        <ProblemSolution.Problem>
          <p>
            A cord of negligible mass is wound round the rim of a flywheel of mass 20 kg and radius 20 cm. A
            steady pull of 25 N is applied on the cord (frictionless bearings). (a) Compute the angular
            acceleration. (b) Find the work done by the pull when 2 m of cord is unwound. (c) Find the
            kinetic energy of the wheel at that point (starting from rest). (d) Compare (b) and (c).
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>(a) With Iα = τ:</p>
          <FormulaBlock latex={String.raw`\tau = FR = 25\times 0.20 = 5.0\ \text{N m},\qquad I = \tfrac{1}{2}MR^2 = \tfrac{1}{2}\times 20\times (0.2)^2 = 0.4\ \text{kg m}^2`} />
          <FormulaBlock latex={String.raw`\alpha = \frac{\tau}{I} = \frac{5.0}{0.4} = 12.5\ \text{s}^{-2}`} important />
          <p>(b) Work done by the pull:</p>
          <FormulaBlock latex={String.raw`W = Fs = 25\times 2 = 50\ \text{J}`} important />
          <p>(c) Angular displacement θ = 2/0.2 = 10 rad; with ω₀ = 0:</p>
          <FormulaBlock latex={String.raw`\omega^2 = 2\alpha\theta = 2\times 12.5\times 10 = 250\ (\text{rad s}^{-1})^2`} />
          <FormulaBlock latex={String.raw`K = \tfrac{1}{2}I\omega^2 = \tfrac{1}{2}\times 0.4\times 250 = 50\ \text{J}`} important />
          <p>
            (d) The answers agree: the kinetic energy gained equals the work done by the force — no energy
            is lost to friction.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-fixed-axis-angular">6.12 Angular Momentum in the Case of Rotation about a Fixed Axis</h2>
      <p>
        We now specialise L = Σ rᵢ × pᵢ (6.25b) to rotation about a fixed axis. For a particle at P with r =
        OC + CP (C the centre of its circle),
      </p>
      <FormulaBlock latex={String.raw`\mathbf{l} = m\,\mathbf{OC}\times\mathbf{v} + m\,\mathbf{CP}\times\mathbf{v}`} />
      <p>
        CP × v is parallel to the fixed axis with magnitude mr⊥²ω (since v = ωr⊥) — hence l_z = mr⊥²ω k̂
        — while OC × v is perpendicular to the axis. Summing over the body,
      </p>
      <FormulaCard>
        <ul>
          <li>Component perpendicular to the axis: <Formula>{String.raw`\mathbf{L}_\perp = \sum_i m_i\,\mathbf{OC}_i\times\mathbf{v}_i`}</Formula> (6.42a)</li>
          <li>Component along the axis: <Formula>{String.raw`\mathbf{L}_z = I\omega\,\hat{\mathbf{k}}`}</Formula> (6.42b), and <Formula>{String.raw`\mathbf{L} = \mathbf{L}_\perp + \mathbf{L}_z`}</Formula> (6.42c)</li>
          <li>For a body <strong>symmetric</strong> about the axis, particles on opposite sides cancel in L⊥: <Formula>{String.raw`\mathbf{L} = I\omega\,\hat{\mathbf{k}}`}</Formula> (6.42d) — L lies along the axis. For asymmetric bodies L is not along the axis.</li>
        </ul>
      </FormulaCard>
      <p>
        Differentiating L_z = Iω k̂ and using dL/dt = τ_ext (considering only axis components of torque),
      </p>
      <FormulaBlock latex={String.raw`\frac{\mathrm{d}}{\mathrm{d}t}(I\omega) = \tau`} />
      <p>
        The component of angular momentum perpendicular to the axis is constant. When I is constant,
        d(Iω)/dt = Iα, recovering τ = Iα (6.41) — consistent with the work–energy route.
      </p>
      <h3>6.12.1 Conservation of angular momentum</h3>
      <Callout type="important" title="Conservation of angular momentum for a fixed axis">
        If the external torque is zero, <Formula>{String.raw`L_z = I\omega = \text{constant}`}</Formula>{" "}
        (6.44). For symmetric bodies L may replace L_z.
      </Callout>
      <Callout type="note" title="The swivel-chair experiment">
        Sit on a swivel chair, arms folded, feet off the ground, and be spun; then stretch your arms
        horizontally. Your angular speed drops; fold them again and it rises. Neglecting friction there is
        no external torque about the axis, so Iω is constant — stretching the arms increases I and lowers
        ω; folding them reverses the change. Circus acrobats, divers, skaters and dancers performing a
        pirouette exploit the same principle.
      </Callout>

      <h2 id="h-exercises">Exercises 6.1 – 6.17</h2>
      <Expandable title="Exercises 6.1 – 6.17" variant="exercise">
        <p><em>Use g = 9.8 m s⁻² where a value of g is required.</em></p>
        <ol>
          <li>Give the location of the centre of mass of (i) a sphere, (ii) a cylinder, (iii) a ring, and (iv) a cube, each of uniform mass density. Does the centre of mass of a body necessarily lie inside the body?</li>
          <li>In the HCl molecule, the separation between the nuclei of the two atoms is about 1.27 Å (1 Å = 10⁻¹⁰ m). Find the approximate location of the CM of the molecule, given that a chlorine atom is about 35.5 times as massive as a hydrogen atom and nearly all the mass of an atom is concentrated in its nucleus.</li>
          <li>A child sits stationary at one end of a long trolley moving uniformly with speed V on a smooth horizontal floor. If the child gets up and runs about on the trolley in any manner, what is the speed of the CM of the (trolley + child) system?</li>
          <li>Show that the area of the triangle contained between the vectors a and b is one half of the magnitude of a × b.</li>
          <li>Show that a·(b × c) is equal in magnitude to the volume of the parallelepiped formed on the three vectors a, b and c.</li>
          <li>Find the components along the x, y, z axes of the angular momentum l of a particle whose position vector is r with components x, y, z and momentum p with components p_x, p_y, p_z. Show that if the particle moves only in the x-y plane the angular momentum has only a z-component.</li>
          <li>Two particles, each of mass m and speed v, travel in opposite directions along parallel lines separated by a distance d. Show that the angular momentum vector of the two-particle system is the same whatever be the point about which the angular momentum is taken.</li>
          <li>A non-uniform bar of weight W is suspended at rest by two strings of negligible weight. The angles made by the strings with the vertical are 36.9° and 53.1° respectively. The bar is 2 m long. Calculate the distance d of the centre of gravity of the bar from its left end.</li>
          <li>A car weighs 1800 kg. The distance between its front and back axles is 1.8 m. Its centre of gravity is 1.05 m behind the front axle. Determine the force exerted by the level ground on each front wheel and each back wheel.</li>
          <li>Torques of equal magnitude are applied to a hollow cylinder and a solid sphere, both having the same mass and radius. The cylinder is free to rotate about its standard axis of symmetry, and the sphere about an axis through its centre. Which will acquire the greater angular speed after a given time?</li>
          <li>A solid cylinder of mass 20 kg rotates about its axis with angular speed 100 rad s⁻¹. The radius of the cylinder is 0.25 m. What is the kinetic energy associated with the rotation of the cylinder? What is the magnitude of the angular momentum of the cylinder about its axis?</li>
          <li>(a) A child stands at the centre of a turntable with his two arms outstretched. The turntable is set rotating with an angular speed of 40 rev/min. How much is the angular speed of the child if he folds his hands back and thereby reduces his moment of inertia to 2/5 times the initial value? (Assume the turntable rotates without friction.) (b) Show that the child&rsquo;s new kinetic energy of rotation is more than the initial kinetic energy of rotation. How do you account for this increase in kinetic energy?</li>
          <li>A rope of negligible mass is wound round a hollow cylinder of mass 3 kg and radius 40 cm. What is the angular acceleration of the cylinder if the rope is pulled with a force of 30 N? What is the linear acceleration of the rope? Assume that there is no slipping.</li>
          <li>To maintain a rotor at a uniform angular speed of 200 rad s⁻¹, an engine needs to transmit a torque of 180 N m. What is the power required by the engine? (Note: uniform angular velocity in the absence of friction implies zero torque. In practice, applied torque is needed to counter frictional torque.) Assume the engine is 100% efficient.</li>
          <li>From a uniform disk of radius R, a circular hole of radius R/2 is cut out. The centre of the hole is at R/2 from the centre of the original disc. Locate the centre of gravity of the resulting flat body.</li>
          <li>A metre stick is balanced on a knife edge at its centre. When two coins, each of mass 5 g, are put one on top of the other at the 12.0 cm mark, the stick is found to be balanced at 45.0 cm. What is the mass of the metre stick?</li>
          <li>The oxygen molecule has a mass of 5.30 × 10⁻²⁶ kg and a moment of inertia of 1.94 × 10⁻⁴⁶ kg m² about an axis through its centre perpendicular to the line joining the two atoms. Suppose the mean speed of such a molecule in a gas is 500 m/s and its kinetic energy of rotation is two thirds of its kinetic energy of translation. Find the average angular velocity of the molecule.</li>
        </ol>
        <Expandable title="Answer Key — Exercises 6.1 – 6.17">
          <ol>
            <li>(i) geometric centre; (ii) mid-point of the axis (geometric centre); (iii) centre of the ring; (iv) geometric centre. The CM need not lie inside the body — e.g. for a ring or bangle it is in empty space.</li>
            <li>x_CM = (35.5 × 1.27)/(35.5 + 1) ≈ 1.24 Å from the hydrogen atom, toward the chlorine atom.</li>
            <li>V — unchanged. The child&rsquo;s running is internal to the system; with no external horizontal force the CM&rsquo;s velocity is constant.</li>
            <li>The parallelogram spanned by a and b has area |a × b|; the triangle contained by them is half of it, so area = ½|a × b|.</li>
            <li>|b × c| is the base-area of the parallelepiped and |a|cosθ its height onto that base; the scalar triple product a·(b × c) equals base × height = volume.</li>
            <li>l_x = y p_z − z p_y, l_y = z p_x − x p_z, l_z = x p_y − y p_x. For x-y plane motion: z = 0 and p_z = 0 ⟹ l_x = l_y = 0; only l_z survives.</li>
            <li>About any chosen point, L = mvd (the sum of the angular momenta of the two opposite-moving particles); compute it about any origin and the perpendicular distances always add to d, so L is point-independent.</li>
            <li>d = 0.72 m from the left end.</li>
            <li>Front wheels: 7350 N total (3675 N each); back wheels: 10290 N total (5145 N each). R_p = (1800 × 9.8 × 1.05)/1.8 = 10290 N.</li>
            <li>Solid sphere — I = (2/5)MR² is smaller than I = MR² of the hollow cylinder; equal torque gives larger α = τ/I, hence larger ω after the same time.</li>
            <li>I = ½ × 20 × 0.25² = 0.625 kg m²; K = ½Iω² = 3125 J; L = Iω = 62.5 kg m² s⁻¹.</li>
            <li>(a) ω₂ = I₁ω₁/I₂ = 40/(2/5) = 100 rev/min. (b) K₂/K₁ = (2/5)(100/40)² = 2.5 — the new KE is 2.5 times the initial. Angular momentum is conserved (no external torque), so the increase comes from the work done by the child&rsquo;s muscles as he folds his arms.</li>
            <li>I = MR² = 3 × 0.16 = 0.48 kg m²; τ = FR = 30 × 0.4 = 12 N m; α = 12/0.48 = 25 rad s⁻²; linear acceleration of the rope a = Rα = 0.4 × 25 = 10 m s⁻².</li>
            <li>P = τω = 180 × 200 = 36000 W = 36 kW.</li>
            <li>CG at a distance R/6 from the centre of the original disc, on the side opposite the hole. (Hole mass = M/4; remaining mass = 3M/4; (3M/4)x = −(M/4)(R/2).)</li>
            <li>Moments about the 45 cm balance point: m × 5 = 10 × 33 ⟹ m = 66 g.</li>
            <li>K_t = ½ × 5.30×10⁻²⁶ × 500² = 6.63×10⁻²¹ J; K_r = (2/3)K_t = ½Iω² ⟹ ω = √(2K_r/I) ≈ 6.7 × 10¹² rad/s.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <MetricCard
        label="I = Σ mᵢrᵢ²"
        value="kg m²"
        unit="Moment of inertia — rotational analogue of mass"
        trend="neutral"
        description="K = ½Iω²; τ = Iα; L = Iω. For a fixed axis, torque, work dW = τ dθ and power P = τω mirror their linear counterparts."
      />
      <Expandable title="Key formulas &amp; facts — one page">
        <ul>
          <li>Centre of mass: R = Σmᵢrᵢ/M; continuous body R = (1/M)∫r dm; Σmᵢrᵢ = 0 when the origin is at the CM.</li>
          <li>CM motion: M A = F_ext — internal forces never matter; P = M V, and dP/dt = F_ext; P constant (CM uniform) if F_ext = 0.</li>
          <li>Cross product: |a × b| = ab sinθ, right-hand/screw rule; a × b = −b × a; distributive; î×ĵ = k̂ (cyclic).</li>
          <li>v = ω × r; vᵢ = ωrᵢ; α = dω/dt.</li>
          <li>Torque τ = r × F (τ = r⊥F); angular momentum l = r × p; dl/dt = τ; dL/dt = τ_ext; L constant if τ_ext = 0.</li>
          <li>Equilibrium: ΣF = 0 and Στ = 0 (six scalar conditions; three for coplanar forces). Load arm × load = effort arm × effort.</li>
          <li>Kinematics: ω = ω₀ + αt; θ = θ₀ + ω₀t + ½αt²; ω² = ω₀² + 2α(θ − θ₀).</li>
          <li>Table 6.1 moments of inertia: ring MR²; disc MR²/2; rod ML²/12; solid sphere 2MR²/5; I = Mk² defines the radius of gyration.</li>
          <li>Fixed axis: L_z = Iω (symmetric bodies L = Iω); conservation: Iω = constant if τ_ext = 0.</li>
        </ul>
      </Expandable>
      <Expandable title="Last-minute recall — formulas only">
        <ul>
          <li><Formula>{String.raw`\mathbf{R} = \frac{\sum_i m_i\mathbf{r}_i}{M}`}</Formula>, <Formula>{String.raw`M\mathbf{A} = \mathbf{F}_{ext}`}</Formula>, <Formula>{String.raw`\mathbf{P} = M\mathbf{V}`}</Formula></li>
          <li><Formula>{String.raw`\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}`}</Formula>, <Formula>{String.raw`\mathbf{l} = \mathbf{r}\times\mathbf{p}`}</Formula>, <Formula>{String.raw`\frac{\mathrm{d}\mathbf{L}}{\mathrm{d}t} = \boldsymbol{\tau}_{ext}`}</Formula></li>
          <li><Formula>{String.raw`I = \sum_i m_ir_i^2`}</Formula>, <Formula>{String.raw`K = \tfrac{1}{2}I\omega^2`}</Formula>, <Formula>{String.raw`\tau = I\alpha`}</Formula>, <Formula>{String.raw`L_z = I\omega`}</Formula></li>
          <li><Formula>{String.raw`\omega = \omega_0 + \alpha t`}</Formula>, <Formula>{String.raw`\theta = \theta_0 + \omega_0 t + \tfrac{1}{2}\alpha t^2`}</Formula>, <Formula>{String.raw`\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)`}</Formula></li>
        </ul>
      </Expandable>
    </>
  );
}