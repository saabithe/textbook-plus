import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Stepper } from "@/components/content/Stepper";
import { FormulaBlock, Formula } from "@/components/content/Formula";

const chapters: [string, string][] = [
  ["ds-c01", "1. Units and Measurements"],
  ["ds-c02", "2. Motion in a Straight Line"],
  ["ds-c03", "3. Motion in a Plane"],
  ["ds-c04", "4. Laws of Motion"],
  ["ds-c05", "5. Work, Energy and Power"],
  ["ds-c06", "6. System of Particles and Rotational Motion"],
  ["ds-c07", "7. Gravitation"],
  ["ds-c08", "8. Mechanical Properties of Solids"],
  ["ds-c09", "9. Mechanical Properties of Fluids"],
  ["ds-c10", "10. Thermal Properties of Matter"],
  ["ds-c11", "11. Thermodynamics"],
  ["ds-c12", "12. Kinetic Theory"],
  ["ds-c13", "13. Oscillations"],
  ["ds-c14", "14. Waves"],
];

export default function DerivationSheet() {
  return (
    <>
      <Callout type="note" title="How to use this sheet">
        Every derivation from all fourteen Class 11 Physics chapters, worked in full, numbered
        step by step, with the final result highlighted. Read it top to bottom, or jump to a
        chapter from the index below. The whole page is expanded — nothing is hidden.
      </Callout>

      <div className="my-8 grid gap-2 sm:grid-cols-2">
        {chapters.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="rounded-lg border border-border/40 px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-border/80 hover:bg-card hover:shadow-sm"
          >
            {label}
          </a>
        ))}
      </div>

      <section>
      <h2 id="ds-c01" className="scroll-mt-24">Chapter 1 — Units and Measurements</h2>
      <p>
        Two derivations in this chapter: how dimensional analysis is used to
        <em> check</em> an equation, and how it is used to <em>derive</em> the form of a
        relation between physical quantities.
      </p>

      <h3 id="ds-c01-01" className="scroll-mt-24">
        1.1 Checking the dimensional consistency of an equation
      </h3>
      <p>
        Every term of a valid physical equation must have the same dimensions. We illustrate
        the method by checking whether the well-known relation for the time period of a simple
        pendulum, <Formula>{String.raw`T = 2\pi\sqrt{l/g}`}</Formula>, is dimensionally correct.
      </p>
      <Stepper
        steps={[
          { label: "Write down the dimensions of every quantity that appears", description: "Time period T has the dimension of time: [T]. Length l has dimension [L]. The acceleration due to gravity g has dimension [L T⁻²]." },
          { label: "Build the radical on the right-hand side", description: <>The quantity under the square root is <Formula>{String.raw`l/g`}</Formula>, so its dimension is <Formula>{String.raw`\dfrac{[L]}{[L\,T^{-2}]} = [T^2]`}</Formula>.</> },
          { label: "Take the square root", description: <>Taking the square root gives the dimension of <Formula>{String.raw`\sqrt{l/g}`}</Formula> as <Formula>{String.raw`\sqrt{[T^2]} = [T]`}</Formula>.</> },
          { label: "Handle the dimensionless factor 2π", description: "Since 2π is a pure number, it does not change the dimension; the whole right-hand side 2π√(l/g) therefore has dimension [T]." },
          { label: "Equate the dimensions of both sides", description: "Left-hand side T has dimension [T]; right-hand side has dimension [T]. The equation is dimensionally correct — note this proves dimensional consistency only, it says nothing about the numerical factor 2π." },
        ]}
      />
      <FormulaBlock latex={String.raw`T = 2\pi\sqrt{l/g} \quad\Longrightarrow\quad [T] = [T]\;\text{ (dimensionally consistent)}`} important />

      <h3 id="ds-c01-02" className="scroll-mt-24">
        1.2 Deriving a relation by dimensional analysis (simple pendulum)
      </h3>
      <p>
        Suppose we want to find how the time period T of a simple pendulum depends on the mass
        m of the bob, the length l of the string and the acceleration due to gravity g. Let
      </p>
      <FormulaBlock latex={String.raw`T = k\, m^a\, l^b\, g^c`} />
      <Stepper
        steps={[
          { label: "Write the dimensional equation", description: <>Left side: T has dimension <Formula>{String.raw`[T]`}</Formula>. Right side: m gives <Formula>{String.raw`[M]^a`}</Formula>, l gives <Formula>{String.raw`[L]^b`}</Formula> and g gives <Formula>{String.raw`[L\,T^{-2}]^c = [L^c T^{-2c}]`}</Formula>. Multiplying, the right side has overall dimension <Formula>{String.raw`[M]^a\,[L]^{b+c}\,[T]^{-2c}`}</Formula>.</> },
          { label: "Equate the exponents of M, L and T", description: <>For the two sides to match: exponent of M gives <Formula>{String.raw`a = 0`}</Formula>; exponent of L gives <Formula>{String.raw`b + c = 0`}</Formula>; exponent of T gives <Formula>{String.raw`-2c = 1`}</Formula>.</> },
          { label: "Solve for the exponents", description: <>From the T-equation, <Formula>{String.raw`c = -\tfrac12`}</Formula>. Then the L-equation gives <Formula>{String.raw`b - \tfrac12 = 0`}</Formula>, so <Formula>{String.raw`b = \tfrac12`}</Formula>. The mass exponent a = 0 — the period does not depend on the bob&rsquo;s mass.</> },
          { label: "Combine everything", description: <>Substituting back, <Formula>{String.raw`T = k\, l^{\frac12} g^{-\frac12} = k\sqrt{l/g}`}</Formula>.</> },
          { label: "Fix the constant k by measurement", description: "Dimensional analysis cannot fix the dimensionless constant; experiment gives k = 2π, recovering T = 2π√(l/g). (Chapter 13 derives the same result from dynamics.)" },
        ]}
      />
      <FormulaBlock latex={String.raw`T = k\sqrt{l/g}\qquad\text{and, with }k=2\pi,\qquad T = 2\pi\sqrt{l/g}`} important />
      </section>

      <section>
      <h2 id="ds-c02" className="scroll-mt-24">Chapter 2 — Motion in a Straight Line</h2>
      <p>
        The three kinematic equations of uniformly accelerated motion and the relative-velocity
        relation. The calculus below mirrors the pictogram method of the textbook (velocity–time
        graph).
      </p>

      <h3 id="ds-c02-01" className="scroll-mt-24">
        2.1 First equation of motion: v = u + at
      </h3>
      <Stepper
        steps={[
          { label: "Start from the definition of acceleration", description: <>&quot;Acceleration is the rate of change of velocity&quot;: <Formula>{String.raw`a = \frac{dv}{dt}`}</Formula>.</> },
          { label: "Separate the variables", description: <>Bring dt to the other side: <Formula>{String.raw`dv = a\,dt`}</Formula>.</> },
          { label: "Integrate with the correct limits", description: <>At t = 0 the velocity is u; at time t it is v. Integrate: <Formula>{String.raw`\int_{u}^{v} dv = \int_{0}^{t} a\,dt`}</Formula>. For uniform acceleration a is taken outside the integral.</> },
          { label: "Evaluate the integrals", description: <>The left side gives <Formula>{String.raw`v - u`}</Formula> and the right side gives <Formula>{String.raw`a\,t`}</Formula>:</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = u + at`} important />

      <h3 id="ds-c02-02" className="scroll-mt-24">
        2.2 Second equation of motion: s = ut + ½at²
      </h3>
      <Stepper
        steps={[
          { label: "Write velocity as a rate of change of displacement", description: <>&quot;Velocity is the rate of change of displacement&quot;: <Formula>{String.raw`v = \frac{ds}{dt}`}</Formula>, so <Formula>{String.raw`ds = v\,dt`}</Formula>.</> },
          { label: "Substitute the first equation of motion", description: <>Replace v by <Formula>{String.raw`u + at`}</Formula>: <Formula>{String.raw`ds = (u + a\,t)\,dt`}</Formula>.</> },
          { label: "Integrate from t = 0 to t", description: <>Integrate between s = 0 and s, t = 0 and t: <Formula>{String.raw`\int_{0}^{s} ds = \int_{0}^{t} (u + a\,t)\,dt = u\int_{0}^{t} dt + a\int_{0}^{t} t\,dt`}</Formula>.</> },
          { label: "Evaluate", description: <>This gives <Formula>{String.raw`s = u\,t + a\,\frac{t^2}{2}`}</Formula>, i.e. the classic form:</> },
        ]}
      />
      <FormulaBlock latex={String.raw`s = ut + \tfrac12 a t^2`} important />

      <h3 id="ds-c02-03" className="scroll-mt-24">
        2.3 Third equation of motion: v² = u² + 2as
      </h3>
      <Stepper
        steps={[
          { label: "Express acceleration as v dv/ds", description: <>By the chain rule, <Formula>{String.raw`a = \frac{dv}{dt} = \frac{dv}{ds}\frac{ds}{dt} = v\,\frac{dv}{ds}`}</Formula>.</> },
          { label: "Rearrange to separate the variables", description: <>Multiply through: <Formula>{String.raw`a\,ds = v\,dv`}</Formula>.</> },
          { label: "Integrate", description: <>Velocity goes from u to v as displacement goes from 0 to s: <Formula>{String.raw`\int_{u}^{v} v\,dv = \int_{0}^{s} a\,ds`}</Formula>. With uniform a:</> },
          { label: "Evaluate both sides", description: <>Left side: <Formula>{String.raw`\frac{v^2}{2} - \frac{u^2}{2}`}</Formula>. Right side: <Formula>{String.raw`a\,s`}</Formula>. Equating:</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v^2 = u^2 + 2as`} important />

      <h3 id="ds-c02-04" className="scroll-mt-24">
        2.4 Relative velocity: v(AB) = v(A) − v(B)
      </h3>
      <Stepper
        steps={[
          { label: "Define the relative position", description: <>The position of A measured from B is the difference of their absolute positions: <Formula>{String.raw`x_{AB}(t) = x_A(t) - x_B(t)`}</Formula>.</> },
          { label: "Differentiate with respect to time", description: <>&quot;Relative velocity is the rate of change of relative position&quot;: <Formula>{String.raw`v_{AB} = \frac{dx_{AB}}{dt} = \frac{dx_A}{dt} - \frac{dx_B}{dt} = v_A - v_B`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v_{\mathrm{AB}} = v_A - v_B`} important />
      </section>

      <section>
      <h2 id="ds-c03" className="scroll-mt-24">Chapter 3 — Motion in a Plane</h2>
      <p>
        Vector addition, projectile kinematics and the centripetal acceleration of uniform
        circular motion.
      </p>

      <h3 id="ds-c03-01" className="scroll-mt-24">
        3.1 Resultant of two vectors (triangle law): magnitude and direction
      </h3>
      <p>
        Two vectors A and B, with angle θ between them (directions same as their tails coincide),
        are added head-to-tail; the resultant R closes the triangle.
      </p>
      <Stepper
        steps={[
          { label: "Draw the triangle and identify the interior angle", description: "Place B at the head of A. In triangle OAB, the side lengths are OA = |A|, AB = |B| and OB = |R|. The interior angle at A is (π − θ), because the turn from direction A to direction B is the angle θ." },
          { label: "Apply the law of cosines", description: <><Formula>{String.raw`R^2 = A^2 + B^2 - 2AB\cos(\pi - \theta)`}</Formula>. Since <Formula>{String.raw`\cos(\pi - \theta) = -\cos\theta`}</Formula>:</> },
          { label: "Simplify", description: <><Formula>{String.raw`R^2 = A^2 + B^2 + 2AB\cos\theta`}</Formula>.</> },
          { label: "Find the direction", description: <>Resolve along A (x-axis) and perpendicular: <Formula>{String.raw`R_x = A + B\cos\theta`}</Formula>, <Formula>{String.raw`R_y = B\sin\theta`}</Formula>. The angle α that R makes with A satisfies <Formula>{String.raw`\tan\alpha = \frac{B\sin\theta}{A + B\cos\theta}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`|\mathbf{R}| = \sqrt{A^2 + B^2 + 2AB\cos\theta}, \qquad \tan\alpha = \frac{B\sin\theta}{A + B\cos\theta}`} important />

      <h3 id="ds-c03-02" className="scroll-mt-24">
        3.2 Projectile trajectory: y = x tanθ − gx²/2u²cos²θ
      </h3>
      <Stepper
        steps={[
          { label: "Resolve the initial velocity", description: <>Horizontal component <Formula>{String.raw`u_x = u\cos\theta`}</Formula>; vertical component <Formula>{String.raw`u_y = u\sin\theta`}</Formula>.</> },
          { label: "Write the horizontal motion (no acceleration)", description: <><Formula>{String.raw`x = (u\cos\theta)\, t`}</Formula>.</> },
          { label: "Write the vertical motion (free fall)", description: <>Vertical displacement with initial speed u sinθ and acceleration −g: <Formula>{String.raw`y = (u\sin\theta)\, t - \tfrac12 g t^2`}</Formula>.</> },
          { label: "Eliminate the time", description: <>From the x-equation, <Formula>{String.raw`t = \frac{x}{u\cos\theta}`}</Formula>. Substitute into the y-equation:</> },
          { label: "Simplify the two terms", description: <><Formula>{String.raw`y = x\,\frac{u\sin\theta}{u\cos\theta} - \frac12 g\,\frac{x^2}{u^2\cos^2\theta}`}</Formula>. The ratio of the velocity components is <Formula>{String.raw`\tan\theta`}</Formula>:</> },
        ]}
      />
      <FormulaBlock latex={String.raw`y = x\tan\theta - \frac{g\,x^2}{2u^2\cos^2\theta}`} important />
      <KeyPoint title="Shape of the trajectory">
        Because y is quadratic in x, the path is a parabola symmetric about the vertical through
        its maximum height.
      </KeyPoint>

      <h3 id="ds-c03-03" className="scroll-mt-24">
        3.3 Time of flight and maximum height of a projectile
      </h3>
      <Stepper
        steps={[
          { label: "Find the time to reach the top", description: <>At the top the vertical velocity is zero. Using the first equation of motion for the vertical part: <Formula>{String.raw`0 = u\sin\theta - g\,t_{\mathrm{up}}`}</Formula>, giving <Formula>{String.raw`t_{\mathrm{up}} = \frac{u\sin\theta}{g}`}</Formula>.</> },
          { label: "Double it for the total time of flight", description: <>By symmetry the descent takes the same time: <Formula>{String.raw`T = 2t_{\mathrm{up}} = \frac{2u\sin\theta}{g}`}</Formula>.</> },
          { label: "Find the maximum height from the velocity–displacement relation", description: <>Vertically, with final speed 0 at height H: <Formula>{String.raw`0 = (u\sin\theta)^2 - 2gH`}</Formula>.</> },
          { label: "Rearrange", description: <><Formula>{String.raw`H = \frac{u^2\sin^2\theta}{2g}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`T = \frac{2u\sin\theta}{g}, \qquad H = \frac{u^2\sin^2\theta}{2g}`} important />

      <h3 id="ds-c03-04" className="scroll-mt-24">
        3.4 Horizontal range of a projectile
      </h3>
      <Stepper
        steps={[
          { label: "Relate the range to the time of flight", description: <>Range = horizontal component of velocity × time of flight: <Formula>{String.raw`R = (u\cos\theta) T`}</Formula>.</> },
          { label: "Substitute the time of flight", description: <><Formula>{String.raw`R = u\cos\theta \cdot \frac{2u\sin\theta}{g} = \frac{u^2 (2\sin\theta\cos\theta)}{g}`}</Formula>.</> },
          { label: "Use the double-angle identity", description: <>Since <Formula>{String.raw`2\sin\theta\cos\theta = \sin 2\theta`}</Formula>:</> },
          { label: "Optimise the angle", description: <><Formula>{String.raw`\sin 2\theta`}</Formula> is maximum (equal to 1) at <Formula>{String.raw`2\theta = 90^\circ`}</Formula>, i.e. <Formula>{String.raw`\theta = 45^\circ`}</Formula>, giving <Formula>{String.raw`R_{\max} = u^2/g`}</Formula>. Also <Formula>{String.raw`\sin 2\theta = \sin(180^\circ - 2\theta)`}</Formula>, so angles θ and <Formula>{String.raw`90^\circ - \theta`}</Formula> give equal ranges.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`R = \frac{u^2\sin 2\theta}{g}, \qquad R_{\max} = \frac{u^2}{g}\ \text{at } 45^\circ`} important />

      <h3 id="ds-c03-05" className="scroll-mt-24">
        3.5 Uniform circular motion: v = rω and centripetal acceleration a = ω²r = v²/r
      </h3>
      <Stepper
        steps={[
          { label: "Write the position vector of the particle", description: <>Particle moves with constant angular speed ω on a circle of radius R. If it starts on the x-axis, <Formula>{String.raw`\mathbf{r} = R\cos(\omega t)\,\hat{i} + R\sin(\omega t)\,\hat{j}`}</Formula>.</> },
          { label: "Differentiate to get the velocity", description: <><Formula>{String.raw`\mathbf{v} = \frac{d\mathbf{r}}{dt} = R\omega\big[-\sin(\omega t)\,\hat{i} + \cos(\omega t)\,\hat{j}\big]`}</Formula>. Its magnitude is <Formula>{String.raw`v = R\omega\sqrt{\sin^2\omega t + \cos^2\omega t} = R\omega`}</Formula>, so <Formula>{String.raw`v = R\omega`}</Formula>.</> },
          { label: "Differentiate again to get the acceleration", description: <><Formula>{String.raw`\mathbf{a} = \frac{d\mathbf{v}}{dt} = -R\omega^2\big[\cos(\omega t)\,\hat{i} + \sin(\omega t)\,\hat{j}\big] = -\omega^2 \mathbf{r}`}</Formula>.</> },
          { label: "Read off the direction and magnitude", description: <>The minus sign means a points opposite to r, i.e. towards the centre. Its magnitude is <Formula>{String.raw`a = \omega^2 R`}</Formula>, and with <Formula>{String.raw`v = R\omega`}</Formula> this can be written <Formula>{String.raw`a = \frac{v^2}{R}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = R\omega, \qquad a_{\mathrm{c}} = \omega^2 R = \frac{v^2}{R}\ \text{(towards the centre)}`} important />
      </section>

      <section>
      <h2 id="ds-c04" className="scroll-mt-24">Chapter 4 — Laws of Motion</h2>
      <p>
        The impulse–momentum theorem, conservation of momentum, circular-motion on roads and the
        conical pendulum.
      </p>

      <h3 id="ds-c04-01" className="scroll-mt-24">
        4.1 Impulse–momentum theorem: J = ∫F dt = Δp
      </h3>
      <Stepper
        steps={[
          { label: "Start from Newton's second law", description: <>The net force equals the rate of change of momentum: <Formula>{String.raw`\mathbf{F} = \frac{d\mathbf{p}}{dt}`}</Formula>.</> },
          { label: "Separate the differentials", description: <><Formula>{String.raw`\mathbf{F}\,dt = d\mathbf{p}`}</Formula>.</> },
          { label: "Integrate over the collision/impact time", description: <>Impulse is the time-integral of the force: <Formula>{String.raw`\mathbf{J} = \int_{t_i}^{t_f}\mathbf{F}\,dt = \int_{\mathbf{p}_i}^{\mathbf{p}_f}d\mathbf{p}`}</Formula>.</> },
          { label: "Evaluate", description: <><Formula>{String.raw`\mathbf{J} = \mathbf{p}_f - \mathbf{p}_i = m\mathbf{v}_f - m\mathbf{u}`}</Formula>. For a constant force this reduces to <Formula>{String.raw`\mathbf{J} = \mathbf{F}\Delta t`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\mathbf{J} = \int \mathbf{F}\,dt = \Delta\mathbf{p} = m\mathbf{v} - m\mathbf{u}`} important />

      <h3 id="ds-c04-02" className="scroll-mt-24">
        4.2 Law of conservation of linear momentum (two interacting bodies)
      </h3>
      <Stepper
        steps={[
          { label: "Identify the action–reaction pair", description: <>Body 2 exerts F₁₂ on body 1; body 1 exerts F₂₁ on body 2. By Newton&rsquo;s third law <Formula>{String.raw`\mathbf{F}_{12} = -\mathbf{F}_{21}`}</Formula>.</> },
          { label: "Write the second law for each body", description: <><Formula>{String.raw`\mathbf{F}_{12} = \frac{d\mathbf{p}_1}{dt}`}</Formula> and <Formula>{String.raw`\mathbf{F}_{21} = \frac{d\mathbf{p}_2}{dt}`}</Formula>.</> },
          { label: "Add the two equations", description: <><Formula>{String.raw`\frac{d\mathbf{p}_1}{dt} + \frac{d\mathbf{p}_2}{dt} = \mathbf{F}_{12} + \mathbf{F}_{21} = 0`}</Formula>, i.e. <Formula>{String.raw`\frac{d}{dt}(\mathbf{p}_1 + \mathbf{p}_2) = 0`}</Formula>.</> },
          { label: "Integrate", description: <>The total momentum is constant. Written in terms of masses and speeds: <Formula>{String.raw`m_1\mathbf{u}_1 + m_2\mathbf{u}_2 = m_1\mathbf{v}_1 + m_2\mathbf{v}_2`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\mathbf{p}_1 + \mathbf{p}_2 = \text{constant}, \qquad m_1\mathbf{u}_1 + m_2\mathbf{u}_2 = m_1\mathbf{v}_1 + m_2\mathbf{v}_2`} important />

      <h3 id="ds-c04-03" className="scroll-mt-24">
        4.3 Maximum safe speed on an unbanked road: v_max = √(μrg)
      </h3>
      <Stepper
        steps={[
          { label: "Identify the source of the centripetal force", description: "On a level circular road, static friction between the tyres and the road alone provides the centripetal force: f = mv²/r." },
          { label: "Write the friction limit", description: <>Friction cannot exceed its limiting value: <Formula>{String.raw`f \le f_{\max} = \mu N`}</Formula>. Vertically there is no acceleration, so <Formula>{String.raw`N = mg`}</Formula>, giving <Formula>{String.raw`f \le \mu mg`}</Formula>.</> },
          { label: "Combine the two requirements", description: <><Formula>{String.raw`\frac{mv^2}{r} \le \mu mg`}</Formula>. Cancel the mass:</> },
          { label: "Solve for the speed", description: <><Formula>{String.raw`v^2 \le \mu g r`}</Formula>, so the maximum safe speed is <Formula>{String.raw`v_{\max} = \sqrt{\mu r g}`}</Formula> — independent of the mass of the vehicle.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v_{\max} = \sqrt{\mu r g}`} important />

      <h3 id="ds-c04-04" className="scroll-mt-24">
        4.4 Banking of roads: design speed v₀ = √(rg tanθ)
      </h3>
      <Stepper
        steps={[
          { label: "Resolve the normal reaction", description: "The road is tilted inward at angle θ. The normal reaction N is not vertical: it has a vertical component N cosθ and a horizontal component N sinθ." },
          { label: "Apply the vertical equilibrium", description: <>&quot;No vertical acceleration&quot;: <Formula>{String.raw`N\cos\theta = mg`}</Formula> (taking friction neglected at the design speed).</> },
          { label: "Apply the horizontal (centripetal) equation", description: <>&quot;The horizontal component supplies the centripetal force&quot;: <Formula>{String.raw`N\sin\theta = \frac{mv^2}{r}`}</Formula>.</> },
          { label: "Divide the two equations", description: <><Formula>{String.raw`\frac{N\sin\theta}{N\cos\theta} = \frac{mv^2/r}{mg}`}</Formula>, giving <Formula>{String.raw`\tan\theta = \frac{v^2}{rg}`}</Formula>.</> },
          { label: "Solve for the design speed", description: <><Formula>{String.raw`v_0 = \sqrt{rg\tan\theta}`}</Formula>. With friction present the speeds between <Formula>{String.raw`v_{\min}`}</Formula> and <Formula>{String.raw`v_{\max}`}</Formula> are allowed so the vehicle does not skid.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v_0 = \sqrt{rg\tan\theta}`} important />

      <h3 id="ds-c04-05" className="scroll-mt-24">
        4.5 Angle of repose: μ = tanα
      </h3>
      <Stepper
        steps={[
          { label: "Set up the forces on the incline of angle α", description: <>Weight mg resolves into mg sinα down the plane and mg cosα into the plane; normal reaction <Formula>{String.raw`N = mg\cos\alpha`}</Formula>.</> },
          { label: "State the condition for limiting equilibrium", description: <>At exactly the angle of repose the block is about to slip, so the component down the plane equals the limiting friction: <Formula>{String.raw`mg\sin\alpha = \mu N`}</Formula>.</> },
          { label: "Substitute the normal reaction", description: <><Formula>{String.raw`mg\sin\alpha = \mu\, mg\cos\alpha`}</Formula>. Cancel <Formula>{String.raw`mg`}</Formula>:</> },
          { label: "Simplify", description: <><Formula>{String.raw`\tan\alpha = \mu`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\mu = \tan\alpha`} important />

      <h3 id="ds-c04-06" className="scroll-mt-24">
        4.6 Conical pendulum: period T = 2π√(l cosθ/g)
      </h3>
      <Stepper
        steps={[
          { label: "Geometry of the motion", description: <>Bob of mass m on a string of length l moves in a horizontal circle of radius <Formula>{String.raw`r = l\sin\theta`}</Formula>, the string making angle θ with the vertical.</> },
          { label: "Vertical equilibrium", description: <>&quot;The vertical component of the tension balances the weight&quot;: <Formula>{String.raw`T\cos\theta = mg`}</Formula>.</> },
          { label: "Horizontal (centripetal) force", description: <>&quot;The horizontal component of the tension provides the centripetal force&quot;: <Formula>{String.raw`T\sin\theta = \frac{mv^2}{r}`}</Formula>.</> },
          { label: "Divide the two equations", description: <><Formula>{String.raw`\frac{T\sin\theta}{T\cos\theta} = \frac{mv^2/r}{mg} \;\Rightarrow\; \tan\theta = \frac{v^2}{rg}`}</Formula>, so <Formula>{String.raw`v = \sqrt{rg\tan\theta}`}</Formula>.</> },
          { label: "Replace r and v by the period", description: <>With <Formula>{String.raw`r = l\sin\theta`}</Formula> and <Formula>{String.raw`v = \frac{2\pi r}{T_{\mathrm{period}}}`}</Formula>:</> },
          { label: "Simplify", description: <><Formula>{String.raw`\frac{4\pi^2 l\sin\theta}{T^2} = g\tan\theta \;\Rightarrow\; T^2 = \frac{4\pi^2 l\sin\theta}{g\tan\theta} = \frac{4\pi^2 l\cos\theta}{g}`}</Formula>. Taking the square root:</> },
        ]}
      />
      <FormulaBlock latex={String.raw`T = 2\pi\sqrt{\frac{l\cos\theta}{g}}`} important />
      </section>

      <section>
      <h2 id="ds-c05" className="scroll-mt-24">Chapter 5 — Work, Energy and Power</h2>
      <p>
        Work and the work–energy theorem, kinetic and potential energies, power, and the two
        standard collision results.
      </p>

      <h3 id="ds-c05-01" className="scroll-mt-24">
        5.1 Work done by a constant force: W = F·s
      </h3>
      <Stepper
        steps={[
          { label: "Take only the force component along the displacement", description: <>For a constant force F acting at angle θ to a straight displacement s, the work is <Formula>{String.raw`W = (F\cos\theta)\, s = \mathbf{F}\cdot\mathbf{s}`}</Formula>.</> },
          { label: "Write the differential form for a curving path", description: <>Split the path into tiny displacements dr; on each the force is effectively constant, so <Formula>{String.raw`dW = \mathbf{F}\cdot d\mathbf{r}`}</Formula>. This is the work element that integrates to the total work.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`W = \mathbf{F}\cdot\mathbf{s} = Fs\cos\theta, \qquad dW = \mathbf{F}\cdot d\mathbf{r}`} important />

      <h3 id="ds-c05-02" className="scroll-mt-24">
        5.2 Work done by a variable force: W = ∫F(x) dx
      </h3>
      <Stepper
        steps={[
          { label: "Divide the displacement into small elements", description: <>Over a small displacement dx, the force is nearly constant, so <Formula>{String.raw`dW = F(x)\,dx`}</Formula>.</> },
          { label: "Sum the elements as an integral", description: <><Formula>{String.raw`W = \int_{x_i}^{x_f} F(x)\,dx`}</Formula>.</> },
          { label: "Identify the graphical meaning", description: "The work equals the area under the F(x) versus x curve between the two limits." },
        ]}
      />
      <FormulaBlock latex={String.raw`W = \int_{x_i}^{x_f} F(x)\,dx`} important />

      <h3 id="ds-c05-03" className="scroll-mt-24">
        5.3 Kinetic energy: K = ½mv²
      </h3>
      <Stepper
        steps={[
          { label: "Start from the work needed to change the speed", description: <>A body of mass m accelerated from rest to speed v by a net force is acted on along a distance s: <Formula>{String.raw`W = \int F\,ds`}</Formula> with the force directed along the displacement.</> },
          { label: "Replace the force using Newton's second law", description: <><Formula>{String.raw`W = \int m\frac{dv}{dt}\,ds = \int m\,v\,dv`}</Formula>, since <Formula>{String.raw`ds/dt = v`}</Formula>.</> },
          { label: "Integrate", description: <><Formula>{String.raw`W = m\int_{0}^{v} v\,dv = \tfrac12 mv^2`}</Formula>.</> },
          { label: "Define this as the kinetic energy", description: <>The energy of a body purely due to its motion: <Formula>{String.raw`K = \tfrac12 mv^2`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`K = \tfrac12 mv^2`} important />

      <h3 id="ds-c05-04" className="scroll-mt-24">
        5.4 Work–energy theorem: K_f − K_i = W
      </h3>
      <Stepper
        steps={[
          { label: "Constant-force case from kinematics", description: <>Using <Formula>{String.raw`v^2 = u^2 + 2as`}</Formula>, <Formula>{String.raw`\tfrac12 m v^2 - \tfrac12 m u^2 = m\,a\,s = F\,s = W`}</Formula>.</> },
          { label: "Variable-force case from the differential", description: <>Since <Formula>{String.raw`dK = F\,dx`}</Formula> (from section 5.3, step 2—3 applied as a differential), integrate: <Formula>{String.raw`\int dK = \int F\,dx`}</Formula>.</> },
          { label: "Evaluate both sides", description: <><Formula>{String.raw`K_f - K_i = W`}</Formula>. The net work done on a body equals the change in its kinetic energy.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`K_f - K_i = W = \int_{x_i}^{x_f} F(x)\,dx`} important />

      <h3 id="ds-c05-05" className="scroll-mt-24">
        5.5 Potential energy and conservative forces: ΔU = −W
      </h3>
      <Stepper
        steps={[
          { label: "Define potential energy through work", description: <>For a conservative force, moving a body from position 1 to position 2 stores energy: <Formula>{String.raw`\Delta U = U_2 - U_1 = -W`}</Formula>, where W is the work done by the conservative force itself.</> },
          { label: "Write the differential form", description: <><Formula>{String.raw`dU = -\mathbf{F}\cdot d\mathbf{r}`}</Formula>. Choosing a reference point where U = 0:</> },
          { label: "Integrate", description: <><Formula>{String.raw`U(\mathbf{r}) = -\int_{\mathbf{r}_0}^{\mathbf{r}} \mathbf{F}\cdot d\mathbf{r}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\Delta U = U_f - U_i = -W = -\int \mathbf{F}\cdot d\mathbf{r}`} important />

      <h3 id="ds-c05-06" className="scroll-mt-24">
        5.6 Elastic potential energy of a spring: U(x) = ½kx²
      </h3>
      <Stepper
        steps={[
          { label: "Write the restoring force", description: <>&quot;For a spring stretched by x&quot;, <Formula>{String.raw`F = -kx`}</Formula> (Hooke&rsquo;s law).</> },
          { label: "Integrate the potential energy", description: <><Formula>{String.raw`U(x) = -\int_{0}^{x} F\,dx = -\int_{0}^{x}(-kx)\,dx = k\int_{0}^{x}x\,dx`}</Formula>.</> },
          { label: "Evaluate", description: <><Formula>{String.raw`U(x) = \tfrac12 kx^2`}</Formula>. Equivalently, the area under the linear F–x graph from 0 to x is the triangle ½ × x × (kx) = ½kx².</> },
        ]}
      />
      <FormulaBlock latex={String.raw`U(x) = \tfrac12 k x^2`} important />

      <h3 id="ds-c05-07" className="scroll-mt-24">
        5.7 Gravitational potential energy near the Earth&rsquo;s surface: U = mgh
      </h3>
      <Stepper
        steps={[
          { label: "Write the constant gravitational force", description: <>Taking y upward, the weight is <Formula>{String.raw`F = -mg`}</Formula>.</> },
          { label: "Integrate the potential energy relation", description: <><Formula>{String.raw`U(y) = -\int_{0}^{y} F\,dy = -\int_{0}^{y}(-mg)\,dy = mg\int_{0}^{y}dy = mgy`}</Formula>.</> },
          { label: "Express in terms of a height change", description: <><Formula>{String.raw`\Delta U = mg\,\Delta h`}</Formula> — the change depends only on the change in height, not on the path taken.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`U = mgh, \qquad \Delta U = mg\,\Delta h`} important />

      <h3 id="ds-c05-08" className="scroll-mt-24">
        5.8 Power: P = F·v
      </h3>
      <Stepper
        steps={[
          { label: "Define power as the rate of doing work", description: <><Formula>{String.raw`P = \frac{dW}{dt}`}</Formula>.</> },
          { label: "Substitute the differential work", description: <><Formula>{String.raw`P = \frac{\mathbf{F}\cdot d\mathbf{r}}{dt} = \mathbf{F}\cdot\frac{d\mathbf{r}}{dt}`}</Formula>.</> },
          { label: "Recognise the velocity", description: <><Formula>{String.raw`\frac{d\mathbf{r}}{dt} = \mathbf{v}`}</Formula>, hence <Formula>{String.raw`P = \mathbf{F}\cdot\mathbf{v}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`P = \mathbf{F}\cdot\mathbf{v}`} important />

      <h3 id="ds-c05-09" className="scroll-mt-24">
        5.9 Head-on elastic collision of two masses
      </h3>
      <p>
        Two bodies of masses m₁ and m₂ moving along the same line with speeds u₁ and u₂ collide
        head-on and separate with speeds v₁ and v₂. Total momentum and total kinetic energy are
        both conserved.
      </p>
      <Stepper
        steps={[
          { label: "Conserve momentum", description: <><Formula>{String.raw`m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2`}</Formula>.</> },
          { label: "Conserve kinetic energy", description: <><Formula>{String.raw`\frac12 m_1u_1^2 + \frac12 m_2u_2^2 = \frac12 m_1v_1^2 + \frac12 m_2v_2^2`}</Formula>.</> },
          { label: "Rearrange the energy equation", description: <><Formula>{String.raw`m_1(u_1^2 - v_1^2) = m_2(v_2^2 - u_2^2)`}</Formula>, then factor both sides: <Formula>{String.raw`m_1(u_1 - v_1)(u_1 + v_1) = m_2(v_2 - u_2)(v_2 + u_2)`}</Formula>.</> },
          { label: "Rearrange the momentum equation and divide", description: <><Formula>{String.raw`m_1(u_1 - v_1) = m_2(v_2 - u_2)`}</Formula>. Dividing the factored energy equation by this (assuming <Formula>{String.raw`u_1 \neq v_1`}</Formula>) gives <Formula>{String.raw`u_1 + v_1 = v_2 + u_2`}</Formula>, i.e. the relative velocity reverses: <Formula>{String.raw`u_1 - u_2 = v_2 - v_1`}</Formula>.</> },
          { label: "Solve the linear system", description: <>Solve <Formula>{String.raw`m_1u_1+m_2u_2 = m_1v_1+m_2v_2`}</Formula> together with <Formula>{String.raw`v_2 = u_1+u_2-v_1`}</Formula> for v₁, then v₂:</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v_1 = \frac{(m_1-m_2)u_1 + 2m_2u_2}{m_1+m_2}, \qquad v_2 = \frac{(m_2-m_1)u_2 + 2m_1u_1}{m_1+m_2}`} important />
      <Callout type="note" title="Two useful special cases">
        Target at rest (u₂ = 0): v₁ = (m₁ − m₂)u₁/(m₁ + m₂), v₂ = 2m₁u₁/(m₁ + m₂). Equal masses
        (m₁ = m₂): the bodies simply exchange velocities.
      </Callout>

      <h3 id="ds-c05-10" className="scroll-mt-24">
        5.10 Perfectly inelastic collision: common velocity
      </h3>
      <Stepper
        steps={[
          { label: "Only momentum is conserved", description: "In a perfectly inelastic collision the bodies stick together and move with a common velocity v; kinetic energy is not conserved." },
          { label: "Write the momentum equation", description: <><Formula>{String.raw`m_1u_1 + m_2u_2 = (m_1 + m_2)v`}</Formula>.</> },
          { label: "Solve for the common velocity", description: <><Formula>{String.raw`v = \frac{m_1u_1 + m_2u_2}{m_1 + m_2}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = \frac{m_1u_1 + m_2u_2}{m_1 + m_2}`} important />
      </section>

      <section>
      <h2 id="ds-c06" className="scroll-mt-24">Chapter 6 — System of Particles and Rotational Motion</h2>
      <p>
        Centre of mass, the kinematics and dynamics of rotation, moments of inertia, theorems for
        composite bodies and pure rolling.
      </p>

      <h3 id="ds-c06-01" className="scroll-mt-24">
        6.1 Centre of mass of a system of particles
      </h3>
      <Stepper
        steps={[
          { label: "Write the weighted average of the positions", description: <>For n particles of masses m₁, m₂, …, mₙ at positions r₁, r₂, …, rₙ with total mass <Formula>{String.raw`M = \sum_i m_i`}</Formula>, the centre of mass is defined by</> },
          { label: "State the result as a vector sum", description: <><Formula>{String.raw`\mathbf{R} = \frac{1}{M}\sum_i m_i \mathbf{r}_i = \frac{\sum_i m_i\mathbf{r}_i}{\sum_i m_i}`}</Formula>.</> },
          { label: "Project onto the coordinate axes", description: <>Componentwise: <Formula>{String.raw`X = \frac{\sum m_i x_i}{M}`}</Formula>, <Formula>{String.raw`Y = \frac{\sum m_i y_i}{M}`}</Formula>, <Formula>{String.raw`Z = \frac{\sum m_i z_i}{M}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\mathbf{R} = \frac{\sum_i m_i\,\mathbf{r}_i}{\sum_i m_i}`} important />

      <h3 id="ds-c06-02" className="scroll-mt-24">
        6.2 Centre of mass of a uniform rod
      </h3>
      <Stepper
        steps={[
          { label: "Write the linear mass density", description: <>()A uniform rod of length L and mass M has <Formula>{String.raw`\lambda = M/L`}</Formula>. Take x from one end; an element is <Formula>{String.raw`dm = \lambda\,dx`}</Formula> at distance x.</> },
          { label: "Evaluate the weighted average as an integral", description: <><Formula>{String.raw`X = \frac{1}{M}\int_{0}^{L} x\,dm = \frac{\lambda}{M}\int_{0}^{L} x\,dx`}</Formula>.</> },
          { label: "Integrate and simplify", description: <><Formula>{String.raw`X = \frac{\lambda}{M}\left[\frac{x^2}{2}\right]_0^L = \frac{\lambda L^2/2}{\lambda L} = \frac{L}{2}`}</Formula> — the centre of mass sits at the midpoint.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`X_{\mathrm{cm}} = \frac{L}{2}`} important />

      <h3 id="ds-c06-03" className="scroll-mt-24">
        6.3 Relation between linear and angular velocity: v = rω
      </h3>
      <Stepper
        steps={[
          { label: "Relate arc length to angle", description: <>A point at distance r from the axis sweeps an arc <Formula>{String.raw`\Delta s = r\,\Delta\theta`}</Formula> as the body turns through Δθ.</> },
          { label: "Differentiate with respect to time", description: <><Formula>{String.raw`\frac{ds}{dt} = r\,\frac{d\theta}{dt}`}</Formula>.</> },
          { label: "Identify the angular speed", description: <><Formula>{String.raw`v = r\omega`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = r\omega`} important />

      <h3 id="ds-c06-04" className="scroll-mt-24">
        6.4 Torque and angular momentum: dL/dt = τ
      </h3>
      <Stepper
        steps={[
          { label: "Write the angular momentum of a particle", description: <><Formula>{String.raw`\mathbf{L} = \mathbf{r}\times\mathbf{p}`}</Formula>.</> },
          { label: "Differentiate using the product rule", description: <><Formula>{String.raw`\frac{d\mathbf{L}}{dt} = \frac{d\mathbf{r}}{dt}\times\mathbf{p} + \mathbf{r}\times\frac{d\mathbf{p}}{dt}`}</Formula>.</> },
          { label: "Simplify the first term", description: <>The first term is <Formula>{String.raw`\mathbf{v}\times (m\mathbf{v})`}</Formula>, which is zero because the two vectors are parallel.</> },
          { label: "Recognise the second term", description: <>Newton&rsquo;s second law gives <Formula>{String.raw`\frac{d\mathbf{p}}{dt} = \mathbf{F}`}</Formula>, so the second term is <Formula>{String.raw`\mathbf{r}\times\mathbf{F} = \boldsymbol{\tau}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\frac{d\mathbf{L}}{dt} = \boldsymbol{\tau}`} important />
      <KeyPoint title="Consequence">
        When the net external torque is zero, dL/dt = 0 — angular momentum is conserved.
      </KeyPoint>

      <h3 id="ds-c06-05" className="scroll-mt-24">
        6.5 Rotational kinetic energy: K = ½Iω²
      </h3>
      <Stepper
        steps={[
          { label: "Sum the kinetic energies of the particles", description: <>A rigid body has <Formula>{String.raw`K = \sum_i \tfrac12 m_i v_i^2`}</Formula>.</> },
          { label: "Put the common angular speed outside", description: <>Every particle has <Formula>{String.raw`v_i = r_i\omega`}</Formula> with the same ω, so <Formula>{String.raw`K = \tfrac12 \omega^2 \sum_i m_i r_i^2`}</Formula>.</> },
          { label: "Define the moment of inertia", description: <><Formula>{String.raw`I = \sum_i m_i r_i^2`}</Formula>, giving <Formula>{String.raw`K = \tfrac12 I\omega^2`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`K = \tfrac12 I\omega^2, \qquad I = \sum_i m_i r_i^2`} important />

      <h3 id="ds-c06-06" className="scroll-mt-24">
        6.6 Work done in rotation: W = ∫τ dθ
      </h3>
      <Stepper
        steps={[
          { label: "Write the differential work", description: <>For a force with tangential component F_t acting through arc ds: <Formula>{String.raw`dW = F_t\,ds`}</Formula>.</> },
          { label: "Replace the arc length", description: <><Formula>{String.raw`ds = r\,d\theta`}</Formula>, so <Formula>{String.raw`dW = F_t r\,d\theta = \tau\,d\theta`}</Formula>, since torque <Formula>{String.raw`\tau = F_t r`}</Formula>.</> },
          { label: "Integrate", description: <><Formula>{String.raw`W = \int \tau\,d\theta`}</Formula>. Using <Formula>{String.raw`\tau = I(d\omega/dt)`}</Formula> and <Formula>{String.raw`d\theta = \omega\,dt`}</Formula>:</> },
          { label: "Convert to a ω-integral", description: <><Formula>{String.raw`d\theta = \omega\,dt`}</Formula>, hence <Formula>{String.raw`W = \int I\omega\,d\omega = \tfrac12 I\big(\omega_f^2 - \omega_i^2\big)`}</Formula> — the rotational work–energy theorem.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`W = \int \tau\,d\theta = \tfrac12 I\big(\omega_f^2 - \omega_i^2\big)`} important />

      <h3 id="ds-c06-07" className="scroll-mt-24">
        6.7 Moment of inertia of a uniform rod about its midpoint: ML²/12
      </h3>
      <Stepper
        steps={[
          { label: "Start from the integral definition", description: <><Formula>{String.raw`I = \int r^2\,dm`}</Formula>.</> },
          { label: "Set up the rod and measure x from the centre", description: <>Element <Formula>{String.raw`dm = \lambda\,dx = (M/L)\,dx`}</Formula> at distance x from the midpoint, integrated from −L/2 to +L/2.</> },
          { label: "Evaluate the integral", description: <><Formula>{String.raw`I = \frac{M}{L}\int_{-L/2}^{L/2} x^2\,dx = \frac{M}{L}\cdot\frac{2(L/2)^3}{3} = \frac{ML^2}{12}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`I_{\mathrm{rod, centre}} = \frac{ML^2}{12}`} important />

      <h3 id="ds-c06-08" className="scroll-mt-24">
        6.8 Parallel axis theorem: I = I_cm + Ma²
      </h3>
      <Stepper
        steps={[
          { label: "Set up the two parallel axes", description: <>Axis z&prime; passes through the centre of mass; axis z is parallel to it, offset by distance a. Coordinates of dm about z are <Formula>{String.raw`(x'+a,\, y')`}</Formula>.</> },
          { label: "Write the moment of inertia about z", description: <><Formula>{String.raw`I = \int\big[(x'+a)^2 + y'^2\big]dm = \int\big(x'^2 + y'^2\big)dm + 2a\int x'\,dm + a^2\int dm`}</Formula>.</> },
          { label: "Recognise the three integrals", description: <>The first integral is <Formula>{String.raw`I_{\mathrm{cm}}`}</Formula>; the second vanishes because <Formula>{String.raw`\int x'\,dm = 0`}</Formula> (x&prime; is measured from the centre of mass); the third equals M.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`I = I_{\mathrm{cm}} + M a^2`} important />

      <h3 id="ds-c06-09" className="scroll-mt-24">
        6.9 Perpendicular axis theorem: I_z = I_x + I_y
      </h3>
      <Stepper
        steps={[
          { label: "Describe the body and axes", description: "For a planar lamina in the xy-plane, take x and y axes in the plane meeting at O and a z axis perpendicular to the plane through O." },
          { label: "Write the three moments of inertia", description: <><Formula>{String.raw`I_x = \sum_i m_i y_i^2,\quad I_y = \sum_i m_i x_i^2,\quad I_z = \sum_i m_i\big(x_i^2 + y_i^2\big)`}</Formula>.</> },
          { label: "Add the in-plane moments", description: <><Formula>{String.raw`I_x + I_y = \sum_i m_i\big(y_i^2 + x_i^2\big) = I_z`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`I_z = I_x + I_y`} important />

      <h3 id="ds-c06-10" className="scroll-mt-24">
        6.10 Kinetic energy of a rolling body: K = ½mv²(1 + k²/R²)
      </h3>
      <Stepper
        steps={[
          { label: "Use the no-slip condition", description: <>For pure rolling the point of contact is instantaneously at rest, so the centre moves with <Formula>{String.raw`v = \omega R`}</Formula>.</> },
          { label: "Add translational and rotational kinetic energies", description: <><Formula>{String.raw`K = \tfrac12 mv^2 + \tfrac12 I\omega^2`}</Formula>.</> },
          { label: "Replace ω by v/R", description: <><Formula>{String.raw`K = \tfrac12 mv^2 + \tfrac12 I\,\frac{v^2}{R^2}`}</Formula>.</> },
          { label: "Introduce the radius of gyration", description: <>Writing <Formula>{String.raw`I = mk^2`}</Formula> (k is the radius of gyration), <Formula>{String.raw`K = \tfrac12 mv^2 + \tfrac12 mk^2\,\frac{v^2}{R^2}`}</Formula>,</> },
          { label: "Factor out the common term", description: <><Formula>{String.raw`K = \tfrac12 mv^2\Big(1 + \frac{k^2}{R^2}\Big)`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`K = \tfrac12 mv^2\left(1 + \frac{k^2}{R^2}\right), \qquad v = \omega R`} important />
      </section>

      <section>
      <h2 id="ds-c07" className="scroll-mt-24">Chapter 7 — Gravitation</h2>
      <p>
        Acceleration due to gravity and its variation, potential and escape speed, satellites
        and Kepler&rsquo;s laws.
      </p>

      <h3 id="ds-c07-01" className="scroll-mt-24">
        7.1 Acceleration due to gravity: g = GM/R²
      </h3>
      <Stepper
        steps={[
          { label: "Write Newton's gravitational force at the surface", description: <>A mass m on the surface (Earth mass M, radius R) experiences <Formula>{String.raw`F = \frac{GMm}{R^2}`}</Formula>.</> },
          { label: "Equate it to the weight", description: <>The same force is the weight <Formula>{String.raw`F = mg`}</Formula>.</> },
          { label: "Cancel the mass", description: <><Formula>{String.raw`mg = \frac{GMm}{R^2} \;\Rightarrow\; g = \frac{GM}{R^2}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`g = \frac{GM}{R^2}`} important />

      <h3 id="ds-c07-02" className="scroll-mt-24">
        7.2 Variation of g with altitude: g_h ≈ g(1 − 2h/R)
      </h3>
      <Stepper
        steps={[
          { label: "Write g at height h above the surface", description: <><Formula>{String.raw`g_h = \frac{GM}{(R+h)^2}`}</Formula>.</> },
          { label: "Factor out R", description: <><Formula>{String.raw`g_h = \frac{GM}{R^2}\left(1 + \frac{h}{R}\right)^{-2} = g\left(1 + \frac{h}{R}\right)^{-2}`}</Formula>.</> },
          { label: "Expand binomially for h ≪ R", description: <><Formula>{String.raw`\Big(1 + \frac{h}{R}\Big)^{-2} \approx 1 - \frac{2h}{R}`}</Formula>.</> },
          { label: "Combine", description: <><Formula>{String.raw`g_h \approx g\Big(1 - \frac{2h}{R}\Big)`}</Formula> — gravity falls off with height.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`g_h \approx g\left(1 - \frac{2h}{R}\right)\quad(h \ll R)`} important />

      <h3 id="ds-c07-03" className="scroll-mt-24">
        7.3 Variation of g with depth: g_d = g(1 − d/R)
      </h3>
      <Stepper
        steps={[
          { label: "Find the attracting mass", description: <>At depth d, only the sphere of radius <Formula>{String.raw`(R-d)`}</Formula> attracts (uniform density ρ). Its mass is <Formula>{String.raw`M' = \rho\cdot\tfrac43\pi(R-d)^3 = M\frac{(R-d)^3}{R^3}`}</Formula>.</> },
          { label: "Write g at that point", description: <><Formula>{String.raw`g_d = \frac{GM'}{(R-d)^2} = \frac{G\,M(R-d)^3/R^3}{(R-d)^2} = \frac{GM}{R^2}\cdot\frac{(R-d)}{R}`}</Formula>.</> },
          { label: "Recognise g = GM/R²", description: <><Formula>{String.raw`g_d = g\Big(1 - \frac{d}{R}\Big)`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`g_d = g\left(1 - \frac{d}{R}\right)`} important />

      <h3 id="ds-c07-04" className="scroll-mt-24">
        7.4 Gravitational potential energy: U = −GMm/r
      </h3>
      <Stepper
        steps={[
          { label: "Write the gravitational force magnitude", description: <><Formula>{String.raw`F = \frac{GMm}{r^2}`}</Formula>, directed towards the centre.</> },
          { label: "Work to bring the mass in from infinity", description: <>An external agent pulling m slowly inwards does work <Formula>{String.raw`W = \int_{\infty}^{r} \frac{GMm}{r'^2}\,dr'`}</Formula> (against the attractive force).</> },
          { label: "Integrate", description: <><Formula>{String.raw`W = GMm\Big[-\frac{1}{r'}\Big]_{\infty}^{r} = -\frac{GMm}{r}`}</Formula>.</> },
          { label: "Identify this as the potential energy", description: <><Formula>{String.raw`U(r) = -\frac{GMm}{r}`}</Formula> with U(∞) = 0. Near the surface, <Formula>{String.raw`U = -\frac{GMm}{R+h} \approx -\frac{GMm}{R} + mgh`}</Formula>, so <Formula>{String.raw`\Delta U = mgh`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`U(r) = -\frac{GMm}{r}, \qquad \Delta U = mgh\ \text{(near the surface)}`} important />

      <h3 id="ds-c07-05" className="scroll-mt-24">
        7.5 Escape speed: v_e = √(2GM/R) = √(2gR)
      </h3>
      <Stepper
        steps={[
          { label: "Write the energy at the surface", description: <>A mass m projected with speed v has <Formula>{String.raw`E = \tfrac12 mv^2 - \frac{GMm}{R}`}</Formula>.</> },
          { label: "Impose the escape condition", description: <>To escape, the body must reach infinity with zero speed: at infinity E = 0 (both K and U vanish).</> },
          { label: "Conserve energy", description: <><Formula>{String.raw`\tfrac12 mv_e^2 - \frac{GMm}{R} = 0`}</Formula>.</> },
          { label: "Solve and rewrite", description: <><Formula>{String.raw`v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR}`}</Formula>, using g = GM/R².</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR}`} important />

      <h3 id="ds-c07-06" className="scroll-mt-24">
        7.6 Orbital velocity and period of a satellite
      </h3>
      <Stepper
        steps={[
          { label: "Balance gravity against the centripetal force", description: <>For a circular orbit of radius r: <Formula>{String.raw`\frac{GMm}{r^2} = \frac{mv^2}{r}`}</Formula>.</> },
          { label: "Solve for the orbital speed", description: <><Formula>{String.raw`v = \sqrt{\frac{GM}{r}}`}</Formula>. A low orbit just above the surface (r ≈ R) moves at <Formula>{String.raw`v_o = \sqrt{gR}`}</Formula>.</> },
          { label: "Write the time period", description: <><Formula>{String.raw`T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{GM}{r}}, \qquad T = 2\pi\sqrt{\frac{r^3}{GM}}`} important />

      <h3 id="ds-c07-07" className="scroll-mt-24">
        7.7 Energy of an orbiting satellite: E = −GMm/2r
      </h3>
      <Stepper
        steps={[
          { label: "Write the kinetic energy", description: <>Using <Formula>{String.raw`v^2 = GM/r`}</Formula>: <Formula>{String.raw`K = \tfrac12 mv^2 = \frac{GMm}{2r}`}</Formula>.</> },
          { label: "Write the potential energy", description: <><Formula>{String.raw`U = -\frac{GMm}{r}`}</Formula>.</> },
          { label: "Add the two", description: <><Formula>{String.raw`E = K + U = \frac{GMm}{2r} - \frac{GMm}{r} = -\frac{GMm}{2r}`}</Formula> — the total energy is negative: the satellite is bound.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`E = -\frac{GMm}{2r}`} important />

      <h3 id="ds-c07-08" className="scroll-mt-24">
        7.8 Kepler&rsquo;s second law from conservation of angular momentum
      </h3>
      <Stepper
        steps={[
          { label: "Write the area swept per unit time", description: <>The infinitesimal area swept by the radius vector is <Formula>{String.raw`dA = \tfrac12|\mathbf{r}\times d\mathbf{r}|`}</Formula>, so the areal velocity is <Formula>{String.raw`\frac{dA}{dt} = \tfrac12|\mathbf{r}\times\mathbf{v}|`}</Formula>.</> },
          { label: "Relate it to angular momentum", description: <><Formula>{String.raw`\mathbf{r}\times\mathbf{v} = \frac{\mathbf{L}}{m}`}</Formula> (angular momentum <Formula>{String.raw`\mathbf{L} = m\,\mathbf{r}\times\mathbf{v}`}</Formula>), hence <Formula>{String.raw`\frac{dA}{dt} = \frac{L}{2m}`}</Formula>.</> },
          { label: "Note that gravity is a central force", description: <>The gravitational force acts along r, so <Formula>{String.raw`\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F} = 0`}</Formula> — L is constant.</> },
          { label: "Conclude", description: <><Formula>{String.raw`dA/dt`}</Formula> is constant: the radius vector sweeps equal areas in equal times.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\frac{dA}{dt} = \frac{L}{2m} = \text{constant}`} important />

      <h3 id="ds-c07-09" className="scroll-mt-24">
        7.9 Kepler&rsquo;s third law for circular orbits: T² ∝ r³
      </h3>
      <Stepper
        steps={[
          { label: "Write the centripetal condition with the orbital angular speed", description: <><Formula>{String.raw`\frac{GMm}{r^2} = m\omega^2 r`}</Formula> with <Formula>{String.raw`\omega = 2\pi/T`}</Formula>.</> },
          { label: "Substitute the angular speed", description: <><Formula>{String.raw`\frac{GM}{r^2} = \frac{4\pi^2}{T^2}\,r`}</Formula>.</> },
          { label: "Rearrange", description: <><Formula>{String.raw`T^2 = \frac{4\pi^2}{GM}\,r^3`}</Formula>, i.e. the square of the period is proportional to the cube of the orbit radius.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`T^2 = \left(\frac{4\pi^2}{GM}\right) r^3 \quad\Longrightarrow\quad T^2 \propto r^3`} important />
      </section>

      <section>
      <h2 id="ds-c08" className="scroll-mt-24">Chapter 8 — Mechanical Properties of Solids</h2>
      <p>
        Stress and strain, Hooke&rsquo;s law, and the energy stored in a deformed body.
      </p>

      <h3 id="ds-c08-01" className="scroll-mt-24">
        8.1 Elongation of a rod: ΔL = FL/AY
      </h3>
      <Stepper
        steps={[
          { label: "Define stress", description: <>For a force F applied over a uniform cross-sectional area A, the longitudinal stress is <Formula>{String.raw`\sigma = F/A`}</Formula>.</> },
          { label: "Define strain", description: <>If the rod (original length L) stretches by ΔL, the longitudinal strain is <Formula>{String.raw`\varepsilon = \Delta L / L`}</Formula>.</> },
          { label: "Apply Hooke's law", description: <>Within the elastic limit, stress is proportional to strain, with Young&rsquo;s modulus Y as the constant: <Formula>{String.raw`\frac{F}{A} = Y\,\frac{\Delta L}{L}`}</Formula>.</> },
          { label: "Solve for the elongation", description: <><Formula>{String.raw`\Delta L = \frac{FL}{AY}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\Delta L = \frac{FL}{AY}`} important />

      <h3 id="ds-c08-02" className="scroll-mt-24">
        8.2 Elastic potential energy stored per unit volume: ½ × stress × strain
      </h3>
      <Stepper
        steps={[
          { label: "Relate the force to the extension", description: <>Within the elastic limit the force grows linearly with extension x: <Formula>{String.raw`F = \frac{AY}{L}\,x`}</Formula>.</> },
          { label: "Compute the work done to stretch the rod by ΔL", description: <>The work equals the area under the force–extension graph, a triangle: <Formula>{String.raw`W = \tfrac12 F\,\Delta L`}</Formula>.</> },
          { label: "Divide by the volume of the rod", description: <>With volume <Formula>{String.raw`V = A L`}</Formula>, the energy per unit volume is <Formula>{String.raw`u = \frac{W}{AL} = \frac{1}{2}\,\frac{F}{A}\,\frac{\Delta L}{L}`}</Formula>.</> },
          { label: "Identify stress and strain", description: <><Formula>{String.raw`u = \tfrac12 \times \text{stress} \times \text{strain}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`u = \tfrac12 \times \text{stress} \times \text{strain}`} important />

      <h3 id="ds-c08-03" className="scroll-mt-24">
        8.3 Strain energy in terms of stress or strain: u = (stress)²/2Y = ½Y(strain)²
      </h3>
      <Stepper
        steps={[
          { label: "Start from the basic formula", description: <><Formula>{String.raw`u = \tfrac12 \times \text{stress} \times \text{strain}`}</Formula>.</> },
          { label: "Use Hooke's law to eliminate the strain", description: <>Since <Formula>{String.raw`\text{strain} = \text{stress}/Y`}</Formula>, <Formula>{String.raw`u = \tfrac12 \times \text{stress} \times \frac{\text{stress}}{Y} = \frac{\text{stress}^2}{2Y}`}</Formula>.</> },
          { label: "Alternatively eliminate the stress", description: <>Since <Formula>{String.raw`\text{stress} = Y \times \text{strain}`}</Formula>, <Formula>{String.raw`u = \tfrac12\,Y\,(\text{strain})^2`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`u = \frac{(\text{stress})^2}{2Y} = \tfrac12\,Y\,(\text{strain})^2`} important />
      </section>

      <section>
      <h2 id="ds-c09" className="scroll-mt-24">Chapter 9 — Mechanical Properties of Fluids</h2>
      <p>
        Pressure in a fluid at rest, Pascal&rsquo;s and Bernoulli&rsquo;s principles, surface tension
        and viscosity.
      </p>

      <h3 id="ds-c09-01" className="scroll-mt-24">
        9.1 Pressure at a depth h in a fluid: P = P₀ + ρgh
      </h3>
      <Stepper
        steps={[
          { label: "Consider a fluid column above an area", description: <>Take a horizontal area A at depth h. The column of fluid above it has volume Ah and mass <Formula>{String.raw`\rho A h`}</Formula>.</> },
          { label: "Find the weight of the column", description: <>Its weight is <Formula>{String.raw`(\rho A h)\,g`}</Formula>, and the atmospheric pressure P₀ acts on the open surface.</> },
          { label: "Divide by the area", description: <><Formula>{String.raw`P = \frac{P_0 A + \rho g A h}{A} = P_0 + \rho g h`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`P = P_0 + \rho g h`} important />

      <h3 id="ds-c09-02" className="scroll-mt-24">
        9.2 Pascal&rsquo;s law: an external pressure is transmitted undiminished
      </h3>
      <Stepper
        steps={[
          { label: "Note that pressure at a point depends only on depth", description: <>From <Formula>{String.raw`P = P_0 + \rho g h`}</Formula>, all points at the same depth share the same pressure — the fluid cannot sustain tangential stress.</> },
          { label: "Increase the surface pressure", description: <>If the pressure at the surface is raised by ΔP, the pressure everywhere in the fluid becomes <Formula>{String.raw`P' = (P_0 + \Delta P) + \rho g h = P + \Delta P`}</Formula>.</> },
          { label: "Conclude", description: <>The change ΔP is the same at every point — it is transmitted undiminished. In a hydraulic lift this gives <Formula>{String.raw`\frac{F_2}{F_1} = \frac{A_2}{A_1}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`P' = P + \Delta P \quad \text{everywhere}, \qquad \frac{F_2}{F_1} = \frac{A_2}{A_1}`} important />

      <h3 id="ds-c09-03" className="scroll-mt-24">
        9.3 Equation of continuity: A₁v₁ = A₂v₂
      </h3>
      <Stepper
        steps={[
          { label: "Write the mass that crosses a section in time Δt", description: <>Fluid moving with speed v through area A displaces a volume <Formula>{String.raw`A v \Delta t`}</Formula>, i.e. mass <Formula>{String.raw`\rho A v \Delta t`}</Formula>.</> },
          { label: "Conserve mass", description: <>For steady flow the mass entering section 1 equals the mass leaving section 2: <Formula>{String.raw`\rho A_1 v_1 \Delta t = \rho A_2 v_2 \Delta t`}</Formula>.</> },
          { label: "Simplify (incompressible fluid)", description: <>For an incompressible fluid ρ is constant and cancels: <Formula>{String.raw`A_1 v_1 = A_2 v_2`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`A_1 v_1 = A_2 v_2`} important />

      <h3 id="ds-c09-04" className="scroll-mt-24">
        9.4 Bernoulli&rsquo;s theorem: P + ½ρv² + ρgh = constant
      </h3>
      <Stepper
        steps={[
          { label: "Apply the work–energy principle to a fluid element", description: <>Consider an incompressible, non-viscous fluid flowing along a streamline between sections 1 and 2.</> },
          { label: "Write the work done by the pressure forces", description: <>The pressure forces push fluid into section 1 and against the flow at section 2: <Formula>{String.raw`W = P_1 A_1 v_1 \Delta t - P_2 A_2 v_2 \Delta t = (P_1 - P_2) V`}</Formula>, where V is the volume displaced (using continuity).</> },
          { label: "Write the change in kinetic energy", description: <><Formula>{String.raw`\Delta K = \tfrac12 \rho V\, (v_2^2 - v_1^2)`}</Formula>.</> },
          { label: "Write the change in potential energy", description: <><Formula>{String.raw`\Delta U = \rho V g\,(h_2 - h_1)`}</Formula>.</> },
          { label: "Equate work to the change in mechanical energy", description: <><Formula>{String.raw`(P_1 - P_2) V = \tfrac12 \rho V (v_2^2 - v_1^2) + \rho V g (h_2 - h_1)`}</Formula>.</> },
          { label: "Rearrange", description: <><Formula>{String.raw`P_1 + \tfrac12 \rho v_1^2 + \rho g h_1 = P_2 + \tfrac12 \rho v_2^2 + \rho g h_2`}</Formula>, i.e. the quantity is constant along a streamline.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`P + \tfrac12 \rho v^2 + \rho g h = \text{constant}`} important />

      <h3 id="ds-c09-05" className="scroll-mt-24">
        9.5 Torricelli&rsquo;s theorem: v = √(2gh)
      </h3>
      <Stepper
        steps={[
          { label: "Apply Bernoulli's equation between the surface and the hole", description: <>Consider a tank open to the atmosphere with the liquid surface at height H and a small hole at height <Formula>{String.raw`H - h`}</Formula>. The speed of the surface is negligible: <Formula>{String.raw`v_1 \approx 0`}</Formula>.</> },
          { label: "Write the two pressures", description: <>Both the surface and the issuing jet are at atmospheric pressure: <Formula>{String.raw`P_1 = P_2 = P_0`}</Formula>.</> },
          { label: "Substitute into Bernoulli's equation", description: <><Formula>{String.raw`P_0 + \rho g H = P_0 + \tfrac12 \rho v^2 + \rho g (H - h)`}</Formula>.</> },
          { label: "Cancel and solve", description: <><Formula>{String.raw`\tfrac12 \rho v^2 = \rho g h \;\Rightarrow\; v = \sqrt{2gh}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = \sqrt{2gh}`} important />

      <h3 id="ds-c09-06" className="scroll-mt-24">
        9.6 Excess pressure inside a liquid drop: ΔP = 2T/r
      </h3>
      <Stepper
        steps={[
          { label: "Cut the drop into two halves", description: <>A spherical drop of radius r and surface tension T. Cut along a plane through its centre exposes a circle of radius r.</> },
          { label: "Write the surface-tension force on each half", description: <>Surface tension acts along the circumference (length <Formula>{String.raw`2\pi r`}</Formula>), so <Formula>{String.raw`F_T = T \times 2\pi r`}</Formula>.</> },
          { label: "Write the force due to the excess pressure", description: <>The excess pressure ΔP acts over the circular cross-section: <Formula>{String.raw`F_P = \Delta P \times \pi r^2`}</Formula>.</> },
          { label: "Balance the two forces", description: <><Formula>{String.raw`\Delta P\, \pi r^2 = T\, 2\pi r \;\Rightarrow\; \Delta P = \frac{2T}{r}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\Delta P = \frac{2T}{r}`} important />

      <h3 id="ds-c09-07" className="scroll-mt-24">
        9.7 Excess pressure inside a soap bubble: ΔP = 4T/r
      </h3>
      <Stepper
        steps={[
          { label: "State why a bubble differs from a drop", description: <>A soap bubble has two free surfaces — the inner and outer faces of the soap film.</> },
          { label: "Write the work done by the pressure", description: <>If the radius grows from r to <Formula>{String.raw`r + dr`}</Formula>, the pressure force does work <Formula>{String.raw`W = \Delta P \times 4\pi r^2 \times dr`}</Formula>.</> },
          { label: "Write the change in surface energy", description: <>The surface area changes by <Formula>{String.raw`dA = 8\pi r\,dr`}</Formula>, and there are two surfaces, so <Formula>{String.raw`\Delta E = 2T \times 8\pi r\,dr = 16\pi T r\,dr`}</Formula>.</> },
          { label: "Equate the work to the energy change", description: <><Formula>{String.raw`\Delta P \times 4\pi r^2 dr = 16\pi T r\,dr \;\Rightarrow\; \Delta P = \frac{4T}{r}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\Delta P = \frac{4T}{r}`} important />

      <h3 id="ds-c09-08" className="scroll-mt-24">
        9.8 Capillary rise: h = 2T cosθ/(ρgr)
      </h3>
      <Stepper
        steps={[
          { label: "Identify the force lifting the column", description: <>The liquid rises in a tube of radius r until surface tension balances its weight. At the contact circle, the surface-tension force has a vertical component <Formula>{String.raw`T\cos\theta`}</Formula> per unit length.</> },
          { label: "Write the total surface-tension force", description: <>Around the inner circumference <Formula>{String.raw`2\pi r`}</Formula>: <Formula>{String.raw`F = T\cos\theta \times 2\pi r`}</Formula>.</> },
          { label: "Write the weight of the raised column", description: <>The column of liquid has weight <Formula>{String.raw`W = \rho g \times \pi r^2 h`}</Formula> (neglecting the small meniscus correction).</> },
          { label: "Balance force and weight", description: <><Formula>{String.raw`T\cos\theta \times 2\pi r = \rho g \pi r^2 h \;\Rightarrow\; h = \frac{2T\cos\theta}{\rho g r}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`h = \frac{2T\cos\theta}{\rho g r}`} important />

      <h3 id="ds-c09-09" className="scroll-mt-24">
        9.9 Terminal velocity of a sphere (Stokes): v_t = 2r²(ρ − σ)g/(9η)
      </h3>
      <Stepper
        steps={[
          { label: "List the forces on the falling sphere", description: <>A sphere of radius r and density ρ falling in a fluid of density σ experiences its weight DOWN, buoyancy UP and viscous drag (Stokes) UP.</> },
          { label: "Write each force", description: <>Weight <Formula>{String.raw`\tfrac43\pi r^3 \rho g`}</Formula>; buoyancy <Formula>{String.raw`\tfrac43\pi r^3 \sigma g`}</Formula>; viscous drag <Formula>{String.raw`6\pi \eta r v`}</Formula>.</> },
          { label: "Set the net force to zero at terminal speed", description: <><Formula>{String.raw`\tfrac43\pi r^3 \rho g - \tfrac43\pi r^3 \sigma g - 6\pi \eta r v_t = 0`}</Formula>.</> },
          { label: "Solve for the terminal velocity", description: <><Formula>{String.raw`v_t = \frac{\tfrac43\pi r^3 (\rho - \sigma) g}{6\pi \eta r} = \frac{2 r^2 (\rho - \sigma) g}{9\eta}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v_t = \frac{2r^2(\rho - \sigma)g}{9\eta}`} important />
      </section>

      <section>
      <h2 id="ds-c10" className="scroll-mt-24">Chapter 10 — Thermal Properties of Matter</h2>
      <p>
        Thermal expansion, temperature scales, and steady-state heat conduction.
      </p>

      <h3 id="ds-c10-01" className="scroll-mt-24">
        10.1 Relation among the coefficients of expansion: β = 2α, γ = 3α
      </h3>
      <Stepper
        steps={[
          { label: "Define the three coefficients", description: <>For a solid of linear size L, area A = L² and volume V = L³: <Formula>{String.raw`\alpha = \frac{\Delta L}{L\,\Delta t}`}</Formula>, <Formula>{String.raw`\beta = \frac{\Delta A}{A\,\Delta t}`}</Formula>, <Formula>{String.raw`\gamma = \frac{\Delta V}{V\,\Delta t}`}</Formula>.</> },
          { label: "Expand the new length", description: <>After a change Δt, <Formula>{String.raw`L' = L(1 + \alpha\Delta t)`}</Formula>.</> },
          { label: "Square to get the area coefficient", description: <><Formula>{String.raw`A' = L'^2 = L^2(1 + \alpha\Delta t)^2 \approx A(1 + 2\alpha\Delta t)`}</Formula> (higher orders dropped), so <Formula>{String.raw`\beta = 2\alpha`}</Formula>.</> },
          { label: "Cube to get the volume coefficient", description: <><Formula>{String.raw`V' = L'^3 \approx V(1 + 3\alpha\Delta t)`}</Formula>, so <Formula>{String.raw`\gamma = 3\alpha`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\beta = 2\alpha, \qquad \gamma = 3\alpha`} important />

      <h3 id="ds-c10-02" className="scroll-mt-24">
        10.2 Relation between Celsius, Fahrenheit and Kelvin scales
      </h3>
      <Stepper
        steps={[
          { label: "Interpolate linearly between the fixed points", description: <>The same temperature gives equal fractions on each scale between the ice point and the steam point:</> },
          { label: "Write the proportion", description: <><Formula>{String.raw`\frac{C - 0}{100 - 0} = \frac{F - 32}{212 - 32} = \frac{K - 273.15}{373.15 - 273.15}`}</Formula>.</> },
          { label: "Simplify", description: <><Formula>{String.raw`\frac{C}{100} = \frac{F - 32}{180} = \frac{K - 273.15}{100}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\frac{C}{100} = \frac{F - 32}{180} = \frac{K - 273.15}{100}`} important />

      <h3 id="ds-c10-03" className="scroll-mt-24">
        10.3 Heat conduction through a rod: Q/t = κA(θ₁ − θ₂)/L
      </h3>
      <Stepper
        steps={[
          { label: "Write Fourier's experimental law", description: <>The heat Q conducted in time t through area A is proportional to the temperature gradient: <Formula>{String.raw`Q = \kappa A \left(\frac{\Delta\theta}{\Delta x}\right) t`}</Formula>, where κ is the thermal conductivity.</> },
          { label: "Identify the gradient for a uniform rod", description: <>A rod of length L with its ends held at θ₁ and θ₂ (θ₁ &gt; θ₂) has a steady linear gradient <Formula>{String.raw`\frac{\theta_1 - \theta_2}{L}`}</Formula>.</> },
          { label: "Substitute", description: <><Formula>{String.raw`\frac{Q}{t} = \kappa A\,\frac{\theta_1 - \theta_2}{L}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\frac{Q}{t} = \kappa A\,\frac{\theta_1 - \theta_2}{L}`} important />
      </section>

      <section>
      <h2 id="ds-c11" className="scroll-mt-24">Chapter 11 — Thermodynamics</h2>
      <p>
        Work in thermodynamic processes, the first law, adiabatic relations, Mayer&rsquo;s relation
        and the Carnot engine.
      </p>

      <h3 id="ds-c11-01" className="scroll-mt-24">
        11.1 Work done by a gas: W = ∫P dV
      </h3>
      <Stepper
        steps={[
          { label: "Consider a small expansion", description: <>Gas in a cylinder pushes a frictionless piston of area A through a distance dx, the gas pressure being P.</> },
          { label: "Write the infinitesimal work", description: <><Formula>{String.raw`dW = F\,dx = P A \,dx = P\,dV`}</Formula> (using <Formula>{String.raw`dV = A\,dx`}</Formula>).</> },
          { label: "Integrate between the end states", description: <><Formula>{String.raw`W = \int_{V_i}^{V_f} P\,dV`}</Formula> — positive for expansion. For a cyclic process this is the area enclosed by the P–V loop.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`W = \int_{V_i}^{V_f} P\,dV`} important />

      <h3 id="ds-c11-02" className="scroll-mt-24">
        11.2 Work in an isothermal process: W = μRT ln(Vf/Vi)
      </h3>
      <Stepper
        steps={[
          { label: "Write the pressure from the ideal gas law", description: <>For an isothermal change of μ moles at temperature T: <Formula>{String.raw`P = \frac{\mu R T}{V}`}</Formula>.</> },
          { label: "Substitute into the work integral", description: <><Formula>{String.raw`W = \int_{V_i}^{V_f} \frac{\mu RT}{V}\,dV = \mu RT \int_{V_i}^{V_f} \frac{dV}{V}`}</Formula>.</> },
          { label: "Evaluate", description: <><Formula>{String.raw`W = \mu RT \ln\frac{V_f}{V_i}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`W = \mu R T \ln\left(\frac{V_f}{V_i}\right)`} important />

      <h3 id="ds-c11-03" className="scroll-mt-24">
        11.3 Work in an adiabatic process: W = (P₁V₁ − P₂V₂)/(γ − 1)
      </h3>
      <Stepper
        steps={[
          { label: "Use the adiabatic relation for the pressure", description: <>During an adiabatic change <Formula>{String.raw`PV^\gamma = P_1 V_1^\gamma`}</Formula>, so <Formula>{String.raw`P = P_1 V_1^\gamma\,V^{-\gamma}`}</Formula>.</> },
          { label: "Evaluate the work integral", description: <><Formula>{String.raw`W = \int_{V_1}^{V_2} P_1 V_1^\gamma\,V^{-\gamma}\,dV = P_1 V_1^\gamma \left[\frac{V^{1-\gamma}}{1-\gamma}\right]_{V_1}^{V_2}`}</Formula>.</> },
          { label: "Simplify the limits", description: <><Formula>{String.raw`W = \frac{P_1 V_1^\gamma V_2^{1-\gamma} - P_1 V_1^{\gamma}V_1^{1-\gamma}}{1-\gamma} = \frac{P_2 V_2 - P_1 V_1}{1 - \gamma}`}</Formula> (using <Formula>{String.raw`P_2 V_2^\gamma = P_1 V_1^\gamma`}</Formula>).</> },
          { label: "Multiply by −1 for the conventional sign", description: <><Formula>{String.raw`W = \frac{P_1 V_1 - P_2 V_2}{\gamma - 1}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`W = \frac{P_1 V_1 - P_2 V_2}{\gamma - 1}`} important />

      <h3 id="ds-c11-04" className="scroll-mt-24">
        11.4 Adiabatic relation: PVᵞ = constant
      </h3>
      <Stepper
        steps={[
          { label: "Apply the first law to an adiabatic change", description: <>No heat flows, so <Formula>{String.raw`dU + dW = 0`}</Formula>: <Formula>{String.raw`C_v\,dT + P\,dV = 0`}</Formula> (per mole).</> },
          { label: "Differentiate the ideal gas law", description: <>For one mole <Formula>{String.raw`PV = RT`}</Formula> gives <Formula>{String.raw`dT = \frac{P\,dV + V\,dP}{R}`}</Formula>.</> },
          { label: "Eliminate dT", description: <><Formula>{String.raw`\frac{C_v}{R}(P\,dV + V\,dP) + P\,dV = 0`}</Formula>. Multiply by R and use <Formula>{String.raw`C_v + R = C_p`}</Formula>: <Formula>{String.raw`C_p\,P\,dV + C_v\,V\,dP = 0`}</Formula>.</> },
          { label: "Separate variables and integrate", description: <>Divide by <Formula>{String.raw`C_v P V`}</Formula>: <Formula>{String.raw`\gamma\,\frac{dV}{V} + \frac{dP}{P} = 0`}</Formula>. Integrating, <Formula>{String.raw`\gamma\ln V + \ln P = \text{constant}`}</Formula>,</> },
          { label: "Exponentiate", description: <><Formula>{String.raw`P V^\gamma = \text{constant}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`P V^\gamma = \text{constant}`} important />

      <h3 id="ds-c11-05" className="scroll-mt-24">
        11.5 Mayer&rsquo;s relation: C_p − C_v = R
      </h3>
      <Stepper
        steps={[
          { label: "Write the heat absorbed at constant volume", description: <>For one mole, <Formula>{String.raw`\Delta Q_V = C_v\,\Delta T`}</Formula> (no work done).</> },
          { label: "Write the heat absorbed at constant pressure", description: <><Formula>{String.raw`\Delta Q_P = C_p\,\Delta T = \Delta U + P\,\Delta V = C_v\,\Delta T + P\,\Delta V`}</Formula>.</> },
          { label: "Use the ideal gas law at constant pressure", description: <><Formula>{String.raw`P\,\Delta V = R\,\Delta T`}</Formula> (per mole).</> },
          { label: "Combine", description: <><Formula>{String.raw`C_p\,\Delta T = C_v\,\Delta T + R\,\Delta T \;\Rightarrow\; C_p - C_v = R`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`C_p - C_v = R`} important />

      <h3 id="ds-c11-06" className="scroll-mt-24">
        11.6 Carnot efficiency: η = 1 − T₂/T₁
      </h3>
      <Stepper
        steps={[
          { label: "Describe the Carnot cycle", description: <>1) Isothermal expansion at the hot temperature T₁ absorbing heat Q₁; 2) adiabatic expansion to the cold temperature T₂; 3) isothermal compression at T₂ rejecting heat Q₂; 4) adiabatic compression back to the start.</> },
          { label: "Write the heats exchanged in the two isothermal steps", description: <>For μ moles: <Formula>{String.raw`Q_1 = \mu R T_1 \ln\frac{V_B}{V_A}`}</Formula> and <Formula>{String.raw`Q_2 = \mu R T_2 \ln\frac{V_C}{V_D}`}</Formula>.</> },
          { label: "Relate the volumes through the adiabatic steps", description: <>The two adiabatics give <Formula>{String.raw`T_1 V_A^{\gamma-1} = T_2 V_D^{\gamma-1}`}</Formula> and <Formula>{String.raw`T_1 V_B^{\gamma-1} = T_2 V_C^{\gamma-1}`}</Formula>. Dividing yields <Formula>{String.raw`\frac{V_B}{V_A} = \frac{V_C}{V_D}`}</Formula>.</> },
          { label: "So the rejected heat is proportional to the cold temperature", description: <><Formula>{String.raw`\frac{Q_2}{Q_1} = \frac{T_2}{T_1}`}</Formula>.</> },
          { label: "Write the efficiency", description: <><Formula>{String.raw`\eta = \frac{W}{Q_1} = \frac{Q_1 - Q_2}{Q_1} = 1 - \frac{T_2}{T_1}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\eta = 1 - \frac{T_2}{T_1}`} important />
      </section>

      <section>
      <h2 id="ds-c12" className="scroll-mt-24">Chapter 12 — Kinetic Theory of Gases</h2>
      <p>
        Pressure of an ideal gas from molecular motion, rms speed, kinetic energy and the mean
        free path.
      </p>

      <h3 id="ds-c12-01" className="scroll-mt-24">
        12.1 Pressure of an ideal gas: P = ⅓ nm⟨v²⟩
      </h3>
      <Stepper
        steps={[
          { label: "Consider one molecule bouncing off a wall", description: <>A molecule of mass m with speed component v_x hits a wall and rebounds, changing its x-momentum by <Formula>{String.raw`2m v_x`}</Formula>.</> },
          { label: "Count collisions per unit time", description: <>In a cube of side l, the molecule crosses the distance <Formula>{String.raw`2l`}</Formula> and hits the same wall each round trip, i.e. <Formula>{String.raw`v_x/2l`}</Formula> collisions per second.</> },
          { label: "Get the force that one molecule exerts", description: <>Momentum change per second: <Formula>{String.raw`2m v_x \times \frac{v_x}{2l} = \frac{m v_x^2}{l}`}</Formula>.</> },
          { label: "Sum over all molecules", description: <>Total force on the wall: <Formula>{String.raw`F = \frac{m}{l}\sum_i v_{x,i}^2 = \frac{m N}{l}\langle v_x^2 \rangle`}</Formula>.</> },
          { label: "Convert to pressure", description: <>Dividing by the wall area <Formula>{String.raw`l^2`}</Formula>: <Formula>{String.raw`P = \frac{mN}{l^3}\langle v_x^2 \rangle = \rho \langle v_x^2 \rangle`}</Formula> with <Formula>{String.raw`\rho = mN/V`}</Formula>.</> },
          { label: "Use isotropy", description: <>On average the three directions share the motion: <Formula>{String.raw`\langle v^2 \rangle = 3\langle v_x^2 \rangle`}</Formula>. Writing n as the number of molecules per unit volume, <Formula>{String.raw`P = \tfrac13 n m \langle v^2 \rangle`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`P = \tfrac13 n m \langle v^2 \rangle = \tfrac13 \rho \langle v^2 \rangle`} important />

      <h3 id="ds-c12-02" className="scroll-mt-24">
        12.2 Root mean square speed: v_rms = √(3RT/M)
      </h3>
      <Stepper
        steps={[
          { label: "Equate the kinetic-theory pressure with the ideal gas law", description: <>From the kinetic result <Formula>{String.raw`P = \tfrac13 \rho \langle v^2 \rangle`}</Formula>. The ideal gas law with density ρ is <Formula>{String.raw`P = \frac{\rho R T}{M}`}</Formula> (M = molar mass).</> },
          { label: "Cancel the density", description: <><Formula>{String.raw`\tfrac13 \langle v^2 \rangle = \frac{RT}{M} \;\Rightarrow\; \langle v^2 \rangle = \frac{3RT}{M}`}</Formula>.</> },
          { label: "Take the square root", description: <><Formula>{String.raw`v_{\mathrm{rms}} = \sqrt{\langle v^2 \rangle} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3kT}{m}}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v_{\mathrm{rms}} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3kT}{m}}`} important />

      <h3 id="ds-c12-03" className="scroll-mt-24">
        12.3 Average kinetic energy of a molecule: ½m⟨v²⟩ = 3/2 kT
      </h3>
      <Stepper
        steps={[
          { label: "Rewrite the pressure in terms of the number density", description: <>With <Formula>{String.raw`n = N/V`}</Formula>: <Formula>{String.raw`P = \tfrac13 \frac{N}{V} m \langle v^2 \rangle`}</Formula>.</> },
          { label: "Combine with the ideal gas law P = NkT/V", description: <><Formula>{String.raw`\tfrac13 \frac{N}{V} m \langle v^2 \rangle = \frac{N k T}{V}`}</Formula>.</> },
          { label: "Cancel common factors", description: <><Formula>{String.raw`\tfrac13 m\langle v^2 \rangle = kT \;\Rightarrow\; \tfrac12 m\langle v^2 \rangle = \tfrac32 kT`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\overline{K} = \tfrac12 m\langle v^2 \rangle = \tfrac32 kT`} important />

      <h3 id="ds-c12-04" className="scroll-mt-24">
        12.4 Mean free path: λ = 1/(√2 π d² n)
      </h3>
      <Stepper
        steps={[
          { label: "Count collisions per unit time", description: <>A molecule of diameter d travels through a gas of number density n. The effective collision cross-section is <Formula>{String.raw`\pi d^2`}</Formula>, and the target volume swept per second is <Formula>{String.raw`\pi d^2 \bar{v}`}</Formula>.</> },
          { label: "Account for the motion of the targets", description: <>Because all molecules move, the relative speed raises the collision rate by a factor <Formula>{String.raw`\sqrt{2}`}</Formula>: collisions per second <Formula>{String.raw`= \sqrt{2}\,\pi d^2\,n\,\bar{v}`}</Formula>.</> },
          { label: "Divide the average speed by the collision rate", description: <><Formula>{String.raw`\lambda = \frac{\bar{v}}{\sqrt{2}\,\pi d^2 n \bar{v}} = \frac{1}{\sqrt{2}\,\pi d^2 n}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\lambda = \frac{1}{\sqrt{2}\,\pi d^2 n}`} important />
      </section>

      <section>
      <h2 id="ds-c13" className="scroll-mt-24">Chapter 13 — Oscillations</h2>
      <p>
        Simple harmonic motion from uniform circular motion, its velocity, acceleration and
        energy, and the simple pendulum.
      </p>

      <h3 id="ds-c13-01" className="scroll-mt-24">
        13.1 SHM as the projection of uniform circular motion: x = A cos(ωt + φ)
      </h3>
      <Stepper
        steps={[
          { label: "Set up the reference circle", description: <>A particle P moves on a circle of radius A with constant angular speed ω; its position angle is <Formula>{String.raw`\theta(t) = \omega t + \phi`}</Formula>.</> },
          { label: "Take the projection", description: <>The x-coordinate of P, the projection onto the diameter, is <Formula>{String.raw`x(t) = A\cos(\omega t + \phi)`}</Formula>.</> },
          { label: "Recognise SHM", description: <>The projection executes simple harmonic motion with amplitude A, angular frequency ω and phase constant φ.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`x(t) = A\cos(\omega t + \phi)`} important />

      <h3 id="ds-c13-02" className="scroll-mt-24">
        13.2 Velocity and acceleration in SHM
      </h3>
      <Stepper
        steps={[
          { label: "Differentiate the displacement", description: <>From <Formula>{String.raw`x = A\cos(\omega t + \phi)`}</Formula>: <Formula>{String.raw`v = \frac{dx}{dt} = -A\omega\sin(\omega t + \phi)`}</Formula>.</> },
          { label: "Find the speed in terms of position", description: <>Using <Formula>{String.raw`\sin^2 + \cos^2 = 1`}</Formula>: <Formula>{String.raw`v = \pm\omega\sqrt{A^2 - x^2}`}</Formula>, with its maximum <Formula>{String.raw`v_{\max} = A\omega`}</Formula> at the centre.</> },
          { label: "Differentiate again for the acceleration", description: <><Formula>{String.raw`a = \frac{dv}{dt} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = \pm\omega\sqrt{A^2 - x^2}, \qquad a = -\omega^2 x`} important />

      <h3 id="ds-c13-03" className="scroll-mt-24">
        13.3 Force law, angular frequency and period: ω = √(k/m), T = 2π√(m/k)
      </h3>
      <Stepper
        steps={[
          { label: "Write the restoring force", description: <>For a spring of constant k: <Formula>{String.raw`F = -kx`}</Formula>.</> },
          { label: "Apply Newton's second law", description: <><Formula>{String.raw`m\frac{d^2x}{dt^2} = -kx \;\Rightarrow\; \frac{d^2x}{dt^2} + \frac{k}{m}x = 0`}</Formula>.</> },
          { label: "Compare with the SHM differential equation", description: <>SHM satisfies <Formula>{String.raw`\frac{d^2x}{dt^2} + \omega^2 x = 0`}</Formula>, so <Formula>{String.raw`\omega^2 = \frac{k}{m}`}</Formula>.</> },
          { label: "Get the period", description: <><Formula>{String.raw`T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\omega = \sqrt{\frac{k}{m}}, \qquad T = 2\pi\sqrt{\frac{m}{k}}`} important />

      <h3 id="ds-c13-04" className="scroll-mt-24">
        13.4 Energy in SHM: E = ½kA²
      </h3>
      <Stepper
        steps={[
          { label: "Write the kinetic energy", description: <>Using <Formula>{String.raw`v^2 = \omega^2(A^2 - x^2)`}</Formula>: <Formula>{String.raw`K = \tfrac12 m v^2 = \tfrac12 m\omega^2 (A^2 - x^2)`}</Formula>.</> },
          { label: "Write the potential energy", description: <>For a spring, <Formula>{String.raw`U = \tfrac12 k x^2`}</Formula>.</> },
          { label: "Add with ω² = k/m", description: <><Formula>{String.raw`E = K + U = \tfrac12 m\omega^2 A^2 = \tfrac12 k A^2`}</Formula> — the total energy is constant.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`E = \tfrac12 kA^2 = \tfrac12 m\omega^2 A^2`} important />

      <h3 id="ds-c13-05" className="scroll-mt-24">
        13.5 Simple pendulum: T = 2π√(L/g)
      </h3>
      <Stepper
        steps={[
          { label: "Write the restoring torque", description: <>For a bob of mass m on a string of length L, the weight component perpendicular to the string restores motion: <Formula>{String.raw`\tau = -mg L \sin\theta \approx -mgL\theta`}</Formula> for small angles.</> },
          { label: "Apply the rotational form of Newton's second law", description: <>With <Formula>{String.raw`I = mL^2`}</Formula>: <Formula>{String.raw`mL^2\frac{d^2\theta}{dt^2} = -mgL\theta \;\Rightarrow\; \frac{d^2\theta}{dt^2} + \frac{g}{L}\theta = 0`}</Formula>.</> },
          { label: "Compare with angular SHM", description: <>Angular SHM satisfies <Formula>{String.raw`\alpha = -\omega^2\theta`}</Formula>, hence <Formula>{String.raw`\omega^2 = \frac{g}{L}`}</Formula>.</> },
          { label: "Get the period", description: <><Formula>{String.raw`T = 2\pi\sqrt{\frac{L}{g}}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`T = 2\pi\sqrt{\frac{L}{g}}`} important />
      </section>

      <section>
      <h2 id="ds-c14" className="scroll-mt-24">Chapter 14 — Waves</h2>
      <p>
        Wave speed relations, sound speed, superposition, standing waves, normal modes and
        beats.
      </p>

      <h3 id="ds-c14-01" className="scroll-mt-24">
        14.1 Relation between wave speed and wave parameters: v = ω/k = λν
      </h3>
      <Stepper
        steps={[
          { label: "Write a harmonic travelling wave", description: <><Formula>{String.raw`y = A\sin(kx - \omega t)`}</Formula>.</> },
          { label: "Track a point of constant phase", description: <>A wave feature moves so that <Formula>{String.raw`kx - \omega t = \text{constant}`}</Formula>; differentiating, <Formula>{String.raw`k\,dx - \omega\,dt = 0`}</Formula>, so <Formula>{String.raw`dx/dt = \omega/k`}</Formula>.</> },
          { label: "Express in terms of wavelength and frequency", description: <>With <Formula>{String.raw`\omega = 2\pi\nu`}</Formula> and <Formula>{String.raw`k = 2\pi/\lambda`}</Formula>: <Formula>{String.raw`v = \frac{\omega}{k} = \lambda\nu`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = \frac{\omega}{k} = \lambda\nu`} important />

      <h3 id="ds-c14-02" className="scroll-mt-24">
        14.2 Speed of a transverse wave on a string: v = √(T/μ)
      </h3>
      <Stepper
        steps={[
          { label: "Take a small curved element of the string", description: <>A pulse travels along a string of linear density μ under tension T. Consider a small element of length Δl which is an arc of radius R, subtending angle <Formula>{String.raw`\Delta\theta = \Delta l / R`}</Formula> at the centre.</> },
          { label: "Find the restoring force on the element", description: <>The two tension forces give a net force towards the centre, <Formula>{String.raw`2T\sin(\Delta\theta/2) \approx T\,\Delta\theta = T\,\frac{\Delta l}{R}`}</Formula>.</> },
          { label: "Equate it to the centripetal force", description: <>The element of mass <Formula>{String.raw`\mu\Delta l`}</Formula> moving with speed v needs <Formula>{String.raw`\mu\Delta l\,\frac{v^2}{R}`}</Formula>. Thus <Formula>{String.raw`T\,\frac{\Delta l}{R} = \mu\Delta l\,\frac{v^2}{R}`}</Formula>.</> },
          { label: "Solve for the speed", description: <><Formula>{String.raw`v^2 = \frac{T}{\mu} \;\Rightarrow\; v = \sqrt{\frac{T}{\mu}}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{T}{\mu}}`} important />

      <h3 id="ds-c14-03" className="scroll-mt-24">
        14.3 Speed of a longitudinal wave: in a fluid v = √(B/ρ), in a solid bar v = √(Y/ρ)
      </h3>
      <Stepper
        steps={[
          { label: "Identify the restoring property for a fluid", description: <>Compressional waves in a fluid are governed by the bulk modulus <Formula>{String.raw`B = -V\,\frac{dP}{dV}`}</Formula>.</> },
          { label: "Apply Newton's second law to a compression pulse", description: <>A pressure difference across a small layer accelerates it with density ρ; carrying the same analysis as a differential elastic force yields <Formula>{String.raw`v = \sqrt{\frac{B}{\rho}}`}</Formula>.</> },
          { label: "Repeat for a solid bar", description: <>For a longitudinal wave in a long solid bar, the relevant modulus is Young&rsquo;s modulus Y, giving <Formula>{String.raw`v = \sqrt{\frac{Y}{\rho}}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{B}{\rho}} \quad \text{(fluid)},\qquad v = \sqrt{\frac{Y}{\rho}} \quad \text{(solid bar)}`} important />

      <h3 id="ds-c14-04" className="scroll-mt-24">
        14.4 Speed of sound in a gas: v = √(γP/ρ) (Laplace correction)
      </h3>
      <Stepper
        steps={[
          { label: "Start from Newton's isothermal estimate", description: <>Treating the compressions as isothermal gives <Formula>{String.raw`v = \sqrt{P/\rho}`}</Formula>, about 280 m/s for air — too small versus the measured ≈ 331 m/s.</> },
          { label: "Apply the Laplace correction", description: <>Oscillations are too fast for heat to flow, so the compressions are adiabatic: <Formula>{String.raw`PV^\gamma = \text{constant}`}</Formula>.</> },
          { label: "Get the effective bulk modulus", description: <>For an adiabatic change, <Formula>{String.raw`B = \gamma P`}</Formula>.</> },
          { label: "Substitute into the fluid formula", description: <><Formula>{String.raw`v = \sqrt{\frac{\gamma P}{\rho}}`}</Formula>. Using the ideal gas law this is also <Formula>{String.raw`v = \sqrt{\gamma RT/M}`}</Formula>, matching experiment.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma RT}{M}}`} important />

      <h3 id="ds-c14-05" className="scroll-mt-24">
        14.5 Superposition of two waves: resultant amplitude A = 2a cos(φ/2)
      </h3>
      <Stepper
        steps={[
          { label: "Write the two waves", description: <>Two waves of equal amplitude a and angular frequency ω, with a phase difference φ: <Formula>{String.raw`y_1 = a\sin(kx - \omega t)`}</Formula> and <Formula>{String.raw`y_2 = a\sin(kx - \omega t + \phi)`}</Formula>.</> },
          { label: "Add them", description: <>Superposition gives <Formula>{String.raw`y = a\big[\sin(kx-\omega t) + \sin(kx-\omega t+\phi)\big]`}</Formula>.</> },
          { label: "Use the sum-to-product identity", description: <><Formula>{String.raw`\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}`}</Formula>, so <Formula>{String.raw`y = 2a\cos\frac{\phi}{2}\,\sin\!\Big(kx - \omega t + \frac{\phi}{2}\Big)`}</Formula>.</> },
          { label: "Read off the amplitude", description: <>The resultant is a wave of amplitude <Formula>{String.raw`A = 2a\cos\frac{\phi}{2}`}</Formula>.</> },
          { label: "State the interference limits", description: <>Constructive: <Formula>{String.raw`\phi = 0, 2\pi, \ldots\Rightarrow A_{\max} = 2a`}</Formula>. Destructive: <Formula>{String.raw`\phi = \pi, 3\pi, \ldots\Rightarrow A_{\min} = 0`}</Formula>. Intensity <Formula>{String.raw`I \propto A^2 \propto 4a^2\cos^2(\phi/2)`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`A = \left\lvert 2a\cos\frac{\phi}{2}\right\rvert, \qquad I \propto 4a^2\cos^2\frac{\phi}{2}`} important />

      <h3 id="ds-c14-06" className="scroll-mt-24">
        14.6 Standing (stationary) waves: y = 2a sin kx cos ωt
      </h3>
      <Stepper
        steps={[
          { label: "Superpose counter-propagating waves", description: <>An incident wave <Formula>{String.raw`y_1 = a\sin(kx - \omega t)`}</Formula> meeting its reflected counterpart <Formula>{String.raw`y_2 = a\sin(kx + \omega t)`}</Formula>.</> },
          { label: "Add the two waves", description: <><Formula>{String.raw`y = a\big[\sin(kx-\omega t) + \sin(kx+\omega t)\big]`}</Formula>.</> },
          { label: "Use the sum-to-product identity", description: <><Formula>{String.raw`y = 2a\sin kx\,\cos\omega t`}</Formula>.</> },
          { label: "Locate nodes and antinodes", description: <>Nodes where <Formula>{String.raw`\sin kx = 0`}</Formula>, i.e. <Formula>{String.raw`x = n\frac{\lambda}{2}`}</Formula>; antinodes where <Formula>{String.raw`|\sin kx| = 1`}</Formula>, i.e. <Formula>{String.raw`x = (2n+1)\frac{\lambda}{4}`}</Formula>.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`y = 2a\sin kx\,\cos\omega t`} important />

      <h3 id="ds-c14-07" className="scroll-mt-24">
        14.7 Normal modes of a string fixed at both ends: λ_n = 2L/n
      </h3>
      <Stepper
        steps={[
          { label: "Impose the boundary conditions", description: <>Both ends are fixed, so they must be nodes.</> },
          { label: "Fit whole loops into the length", description: <>The length L must hold n half-wavelengths: <Formula>{String.raw`L = n\,\frac{\lambda_n}{2}`}</Formula>, hence <Formula>{String.raw`\lambda_n = \frac{2L}{n}`}</Formula>.</> },
          { label: "Write the frequencies", description: <><Formula>{String.raw`f_n = \frac{v}{\lambda_n} = \frac{n v}{2L}`}</Formula>, n = 1, 2, 3, … giving the fundamental, second harmonic, and so on.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\lambda_n = \frac{2L}{n}, \qquad f_n = \frac{nv}{2L}\quad (n = 1, 2, 3, \ldots)`} important />

      <h3 id="ds-c14-08" className="scroll-mt-24">
        14.8 Normal modes of air columns: open and closed pipes
      </h3>
      <Stepper
        steps={[
          { label: "Open pipe — antinodes at both ends", description: <>Both open ends are antinodes, so <Formula>{String.raw`L = n\frac{\lambda_n}{2}`}</Formula>: <Formula>{String.raw`f_n = \frac{nv}{2L}`}</Formula> — all harmonics are present.</> },
          { label: "Closed pipe — node at the closed end, antinode at the open end", description: <>The length fits an odd number of quarter-wavelengths: <Formula>{String.raw`L = (2n-1)\frac{\lambda_n}{4}`}</Formula>.</> },
          { label: "Get the closed-pipe frequencies", description: <><Formula>{String.raw`f_n = \frac{(2n-1)v}{4L}`}</Formula>, n = 1, 2, 3, … — only odd harmonics.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`f_n = \frac{nv}{2L}\ (\text{open}), \qquad f_n = \frac{(2n-1)v}{4L}\ (\text{closed})`} important />

      <h3 id="ds-c14-09" className="scroll-mt-24">
        14.9 Beats: beat frequency = |ν₁ − ν₂|
      </h3>
      <Stepper
        steps={[
          { label: "Superpose two waves of nearly equal frequency", description: <>Waves of equal amplitude but slightly different angular frequencies ω₁ and ω₂: <Formula>{String.raw`y = a\sin\omega_1 t + a\sin\omega_2 t`}</Formula>.</> },
          { label: "Combine the sines", description: <><Formula>{String.raw`y = 2a\cos\frac{(\omega_1 - \omega_2)t}{2}\,\sin\frac{(\omega_1+\omega_2)t}{2}`}</Formula>.</> },
          { label: "Interpret the result", description: <>The amplitude <Formula>{String.raw`2a\cos\frac{(\omega_1-\omega_2)t}{2}`}</Formula> rises and falls slowly; loudness peaks twice per modulation cycle.</> },
          { label: "State the beat frequency", description: <><Formula>{String.raw`\nu_b = \frac{2(\omega_1 - \omega_2)/2}{2\pi} = \nu_1 - \nu_2`}</Formula>, or <Formula>{String.raw`|\nu_1 - \nu_2|`}</Formula> in magnitude.</> },
        ]}
      />
      <FormulaBlock latex={String.raw`\nu_b = |\nu_1 - \nu_2|`} important />
      </section>
    </>
  );
}