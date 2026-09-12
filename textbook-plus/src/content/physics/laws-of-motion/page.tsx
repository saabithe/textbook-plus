import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { TableCard } from "@/components/content/data/TableCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Comparison } from "@/components/content/Comparison";

export default function LawsOfMotionChapter() {
  return (
    <>
      <h2 id="h-inertia">4.1 The Law of Inertia</h2>
      <p>
        Inertia is the natural tendency of matter to <strong>resist any change</strong> in its state of rest or
        of uniform motion. Newton&rsquo;s first law — rooted in Galileo&rsquo;s demonstrations — states this
        property rigorously.
      </p>
      <Callout type="important" title="Galileo&rsquo;s insight">
        The state of rest and the state of uniform linear motion are <strong>equivalent</strong>: in both cases
        there is no net force on the body. This property of a body is called{" "}
        <Highlight>inertia</Highlight> — &ldquo;resistance to change&rdquo;.
      </Callout>
      <KeyPoint title="Inertia — the three faces">
        Inertia is the <Highlight>inability of a body to change its own state of rest or uniform motion</Highlight>
        by itself. Exam questions classify it by which change the body resists:
        <ul>
          <li><strong>Inertia of rest</strong> — resists starting to move from rest. A book stays on the table until pushed; dust flies off when a carpet is struck.</li>
          <li><strong>Inertia of motion</strong> — resists stopping or turning once moving. Passengers lurch forward when a bus brakes.</li>
          <li><strong>Inertia of direction</strong> — resists a lateral change of direction. A stone thrown tangentially from a whirling sling flies off along a tangent.</li>
        </ul>
      </KeyPoint>

      <h2 id="h-first">4.2 Newton&rsquo;s First Law of Motion</h2>
      <Callout type="important" title="First Law">
        Every body continues to be in its state of rest or of uniform motion in a straight line unless
        compelled by some external force to act otherwise. Equivalently: if the net external force on a body
        is zero, its acceleration is zero.
      </Callout>
      <Expandable title="The bus in motion — inertia in action" variant="example">
        <p>
          <strong>When the bus starts suddenly:</strong> friction accelerates your feet with the bus, while the
          rest of the body resists motion by inertia — you are thrown <strong>backward</strong>.
        </p>
        <p>
          <strong>When the bus stops suddenly:</strong> the feet stop with the bus, but the upper body keeps
          moving forward by inertia — you are thrown <strong>forward</strong>.
        </p>
        <p>Reason: inertia (Newton&rsquo;s first law of motion).</p>
      </Expandable>
      <KeyPoint title="Key idea">
        <Highlight>Inertia = resistance to change in motion</Highlight>. Objects stay at rest, or keep moving
        uniformly, unless a force acts on them.
      </KeyPoint>
      <Expandable title="Example 4.1 — Astronaut separated from his spaceship" variant="example">
        <ProblemSolution.Problem>
          <p>
            An astronaut accidentally gets separated from his small spaceship accelerating in interstellar space
            at a constant rate of 100 m s⁻². What is his acceleration the instant after he is outside the
            spaceship? (No nearby stars to exert gravitational force.)
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <ul className="space-y-1.5 list-none">
            <li>Once outside the spaceship, no external force acts on the astronaut — no nearby stars, negligible gravitational pull.</li>
            <li>Net force = 0 ⟹ by the first law, <strong>acceleration = 0</strong>.</li>
            <li>His motion: he continues with <strong>constant velocity</strong>.</li>
          </ul>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="PYQs — First law &amp; the force from momentum">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ · Board Exam 2020 · 1 mark</p>
              <p>Newton&rsquo;s first law of motion describes: (a) energy &nbsp;(b) work &nbsp;(c) inertia &nbsp;(d) momentum.</p>
            </div>,
            <div key={2}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ · Improvement Exam 2018 / Board Exam</p>
              <p>
                A man jumping out of a slow-moving bus falls forward. (a) This is due to which property, and which law
                of motion governs it? (b) State the law. (c) What should he do to land safely?
              </p>
            </div>,
            <div key={3}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ · Board / Model / Christmas Exam · 3 marks</p>
              <p>
                According to Newton&rsquo;s law of motion, force depends on the rate of change of momentum. (a) Name the
                law that helps to measure force. (b) Deduce an expression for force.
              </p>
            </div>,
          ]}
          answers={[
            <div key={1}>(c) <strong>Inertia</strong> — the first law is the law of inertia.</div>,
            <div key={2}>
              <ul className="space-y-1.5 list-none">
                <li><strong>(a)</strong> Due to <strong>inertia of motion</strong> (Newton&rsquo;s first law of motion) — his feet stop with the ground but his upper body continues to move forward.</li>
                <li><strong>(b)</strong> Every object continues in its state of rest or of uniform motion in a straight line unless acted upon by an external unbalanced force.</li>
                <li><strong>(c)</strong> Run a few steps forward in the direction of motion of the bus — the feet are checked gradually and the upper body is gently brought to rest instead of stopping suddenly.</li>
              </ul>
            </div>,
            <div key={3}>
              <ul className="space-y-1.5 list-none">
                <li><strong>(a)</strong> Newton&rsquo;s second law of motion.</li>
                <li><strong>(b)</strong> Force is proportional to the rate of change of momentum; choosing the unit so that k = 1:</li>
                <li>F = dp/dt = (mv − mu)/t = m(v − u)/t</li>
                <li>Since a = (v − u)/t, this reduces to:</li>
                <li><strong>F = ma</strong></li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>

      <h2 id="h-second">4.3 Newton&rsquo;s Second Law of Motion</h2>
      <p>
        The first law covers zero net force; <Highlight>the second law relates a net external force to the
        resulting acceleration</Highlight>.
      </p>
      <h3>Momentum</h3>
      <FormulaCard>
        <p>
          <strong>Momentum</strong> p of a body is defined as the product of its mass m and velocity v:{" "}
          <Formula>{String.raw`\mathbf{p} = m\mathbf{v}`}</Formula>.
        </p>
        <ul>
          <li>Momentum is a <strong>vector</strong> quantity.</li>
          <li>SI unit: <strong>kg m s⁻¹</strong>; dimensional formula <Formula>{String.raw`[MLT^{-1}]`}</Formula>.</li>
        </ul>
      </FormulaCard>
      <Callout type="important" title="Second Law">
        The rate of change of momentum of a body is directly proportional to the applied force and takes
        place in the direction in which the force acts:
        <FormulaBlock latex={String.raw`\mathbf{F} = \frac{\mathrm{d}\mathbf{p}}{\mathrm{d}t}`} important />
        with the SI unit of force chosen so the constant k = 1: <strong>1 N = 1 kg m s⁻²</strong>.
      </Callout>
      <h3>Deducing F = ma from the second law</h3>
      <Stepper
        steps={[
          { label: "Second law", description: "F = dp/dt — the applied force equals the rate of change of momentum." },
          { label: "Substitute p = mv", description: "F = d(mv)/dt." },
          { label: "Constant mass", description: "For a given body the mass m does not change, so F = m·(dv/dt)." },
          { label: "Recognise acceleration", description: "dv/dt = a, hence F = ma." },
        ]}
      />
      <FormulaBlock latex={String.raw`\mathbf{F} = m\mathbf{a}`} important />
      <FormulaCard>
        <ul>
          <li>F = 0 ⟹ a = 0 — consistent with the first law.</li>
          <li>F in the law is the <strong>net external force</strong>; internal forces are excluded. For a system, a is the acceleration of the centre of mass.</li>
        </ul>
      </FormulaCard>
      <Expandable title="Example 4.2 — Bullet stopped by a wooden block" variant="example">
        <ProblemSolution.Problem>
          <p>A bullet of mass 0.04 kg moving with a speed of 90 m s⁻¹ enters a heavy wooden block and is stopped after a distance of 60 cm. What is the average resistive force exerted by the block?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`a = -\frac{u^2}{2s} = -\frac{90 \times 90}{2 \times 0.6}\ \text{m s}^{-2} = -6750\ \text{m s}^{-2}`} />
          <FormulaBlock latex={String.raw`F = m a = 0.04 \times 6750 = 270\ \text{N}`} important />
          <p>The resistive force may not be uniform — this is only the <strong>average</strong> value.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 4.3 — Motion y = ut + ½gt²: find the force" variant="example">
        <ProblemSolution.Problem>
          <p>The motion of a particle of mass m is described by <Formula>{String.raw`y = ut + \tfrac{1}{2}gt^2`}</Formula>. Find the force acting on the particle.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <Stepper
            steps={[
              { label: "Velocity — differentiate y", description: "v = dy/dt = d(ut + ½gt²)/dt = u·dt/dt + ½g·dt²/dt = u + gt." },
              { label: "Acceleration — differentiate v", description: "a = dv/dt = d(u + gt)/dt = du/dt + g·dt/dt = g." },
              { label: "Force — by the second law", description: "F = ma = m·g." },
            ]}
          />
          <FormulaBlock latex={String.raw`v = \frac{\mathrm{d}y}{\mathrm{d}t} = u + gt, \qquad a = \frac{\mathrm{d}v}{\mathrm{d}t} = g`} />
          <FormulaBlock latex={String.raw`F = ma = mg`} important />
          <p>The described motion is that of a particle falling under uniform acceleration due to gravity, y being measured in the direction of g.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <h3>Impulse &amp; the impulse–momentum principle</h3>
      <Callout type="note" title="Impulse">
        When a <strong>large force acts for a very short time</strong> (a ball bouncing off a wall), force and
        duration are hard to measure separately, but their product — the change in momentum — is measurable:
        <FormulaBlock latex={String.raw`\text{Impulse} = \mathbf{F}\,\Delta t`} important />
        Unit: <strong>kg m s⁻¹</strong> (= N s). An impulsive force is not a special kind of force — Newtonian
        mechanics treats it like any other, just large and brief.
      </Callout>
      <KeyPoint title="Impulse–momentum principle">
        <Highlight>Impulse is equal to the change in momentum of the body</Highlight>. Starting from the second law:
        <FormulaBlock latex={String.raw`\mathbf{F} = \frac{\mathrm{d}\mathbf{p}}{\mathrm{d}t} \;\Rightarrow\; \mathbf{F}\,\mathrm{d}t = \mathrm{d}\mathbf{p} \;\Rightarrow\; \mathbf{I} = \Delta\mathbf{p}`} />
        <strong>Impulse = change in momentum</strong> (I = dp).
      </KeyPoint>
      <Expandable title="Example 4.4 — Batsman hits the ball straight back" variant="example">
        <ProblemSolution.Problem>
          <p>A batsman hits back a ball straight in the direction of the bowler without changing its initial speed of 12 m s⁻¹. If the mass of the ball is 0.15 kg, determine the impulse imparted to the ball. (Assume linear motion.)</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\Delta p = 0.15 \times 12 - (-0.15 \times 12) = 3.6\ \text{N s}`} important />
          <p>Impulse = 3.6 N s, in the direction from the batsman to the bowler. This is a case where the force and contact time are unknown but the impulse is readily computed.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Impulse in everyday life — exam explanations">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p>Why does a cricketer move his hands backward while taking a catch?</p>
            </div>,
            <div key={2}>
              <p>Why is it more dangerous to fall on frozen ice than on fresh snow?</p>
            </div>,
          ]}
          answers={[
            <div key={1}>
              <ul className="space-y-1.5 list-none">
                <li>The momentum change of the ball is fixed (Δp = mv − mu); impulse = F·t = Δp.</li>
                <li>Pulling the hands backward <strong>increases the impact time (t)</strong>.</li>
                <li>Since F = Δp/t, a longer impact time means a <strong>smaller force</strong> on the hands — preventing injury.</li>
              </ul>
            </div>,
            <div key={2}>
              <ul className="space-y-1.5 list-none">
                <li><strong>Frozen ice:</strong> stiff — the fall is stopped almost instantly, so the impact time t is very short and the stopping force F = Δp/t is very large.</li>
                <li><strong>Fresh snow:</strong> yields on impact — the stopping time t increases, so the stopping force is much smaller.</li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>

      <Expandable variant="exercise" title="PYQ 2019 · Billiard balls collide and rebound">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ 2019</p>
              <p>Two billiard balls, each of mass 0.05 kg, moving in opposite directions with a speed of 6 m s⁻¹, collide and rebound with the same speed. What is the impulse imparted to each ball due to the other?</p>
            </div>,
          ]}
          answers={[
            <div key={1}>
              <ul className="space-y-1.5 list-none">
                <li>For one ball: m = 0.05 kg, initial velocity u = 6 m s⁻¹, final velocity v = −6 m s⁻¹ (rebound in the opposite direction).</li>
                <li>I = mv − mu = m(v − u)</li>
                <li>I = 0.05 × [6 − (−6)] = 0.05 × (6 + 6) = 0.05 × 12</li>
                <li><strong>I = 0.6 N s (or kg m s⁻¹)</strong>, directed opposite the ball&rsquo;s initial motion.</li>
                <li>Each ball receives the same impulse in magnitude; by the third law the two impulses are equal and opposite.</li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>

      <h3>Weight of a body in a lift</h3>
      <p>
        The weight of a body is the <strong>normal reaction R exerted by the surface in contact</strong> with the
        body — not mg itself. A person standing on a weighing scale in a lift reads the normal reaction R. Applying{" "}
        F_net = ma to each case:
      </p>
      <TableCard
        headers={["Case", "Motion of the lift", "Equation of motion", "Reading on the scale"]}
        rows={[
          { cells: ["1", "At rest, or moving up/down with uniform velocity (a = 0)", "R − mg = 0", "R = mg — no change in weight"] },
          { cells: ["2", "Moving up with acceleration a", "R − mg = ma", "R = m(g + a) — weight increases"] },
          { cells: ["3", "Moving down with acceleration a", "mg − R = ma", "R = m(g − a) — weight decreases"] },
          { cells: ["4", "Mechanism fails — falling freely (a = g)", "R = m(g − g)", "R = 0 — weightlessness"] },
        ]}
        caption="Weight of a body in a lift (F_net = ma)."
      />
      <Expandable title="Example 4.12 — Man standing on a scale in a lift" variant="example">
        <ProblemSolution.Problem>
          <p>
            A man of mass 70 kg stands on a weighing scale in a lift which is (a) moving upwards with a uniform
            speed of 10 m s⁻¹, (b) moving downwards with a uniform acceleration of 5 m s⁻², (c) moving upwards
            with a uniform acceleration of 5 m s⁻², (d) falling freely as the mechanism fails. What would be the
            readings on the scale in each case? Take g = 10 m s⁻².
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <ul className="space-y-1.5 list-none">
            <li><strong>(a)</strong> Uniform speed ⟹ a = 0: R = mg = 70 × 10 = <strong>700 N</strong>; reading = 700/10 = <strong>70 kg</strong>.</li>
            <li><strong>(b)</strong> Downwards, a = 5 m s⁻²: R = m(g − a) = 70(10 − 5) = 70 × 5 = <strong>350 N</strong>; reading = 350/10 = <strong>35 kg</strong>.</li>
            <li><strong>(c)</strong> Upwards, a = 5 m s⁻²: R = m(g + a) = 70(10 + 5) = 70 × 15 = <strong>1050 N</strong>; reading = 1050/10 = <strong>105 kg</strong>.</li>
            <li><strong>(d)</strong> Free fall, a = g: R = m(g − g) = <strong>0</strong>.</li>
          </ul>
          <p>The scale reading in kg is R/g, so a scale calibrated in kg shows 70 kg, 35 kg, 105 kg and zero respectively.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-third">4.4 Newton&rsquo;s Third Law of Motion</h2>
      <Callout type="important" title="Third Law">
        To every action there is always an equal and opposite reaction. Clear form:{" "}
        <Highlight>forces always occur in pairs</Highlight> — the force on A by B is equal and
        opposite to the force on B by A:
        <FormulaBlock latex={String.raw`\mathbf{F}_{AB} = -\mathbf{F}_{BA}`} important />
      </Callout>
      <Stepper
        steps={[
          { label: "&ldquo;Action&rdquo; and &ldquo;reaction&rdquo; just mean force", description: "Using different words for the same concept can confuse. Force on A by B equals minus force on B by A." },
          { label: "No cause–effect relation", description: "The two mutual forces act at the SAME instant. Either one may be called action; the other reaction. Action does not precede or cause reaction." },
          { label: "They act on DIFFERENT bodies", description: "Adding them and claiming the net force is zero is an error — they never act on the same body. Only when A and B form one system do they cancel as internal forces." },
        ]}
      />
      <Expandable title="Example 4.5 — Billiard balls bouncing off a wall" variant="example">
        <ProblemSolution.Problem>
          <p>Two identical billiard balls strike a rigid wall with the same speed but at different angles and are reflected without change of speed (one normal, one at 30° to the normal). What is (i) the direction of the force on the wall due to each ball, and (ii) the ratio of the magnitudes of the impulses imparted to the balls?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Use the second law on a ball, then the third law to answer for the wall. Choose x normal to the
            wall. The y-component (parallel to the wall) of momentum is unchanged by the collision in both
            cases.
          </p>
          <p>Case (a): impulse on the ball = −2mu (x-component), 0 (y).</p>
          <p>Case (b): <Formula>{String.raw`\Delta p_x = -2mu\cos 30^\circ`}</Formula>, <Formula>{String.raw`\Delta p_y = 0`}</Formula>.</p>
          <KeyPoint>
            The force (and impulse) on the ball is normal to the wall in <strong>both</strong> cases — the
            instinctive guess that case (b) is inclined at 30° is wrong. By the third law, the force on the
            wall is normal too.
          </KeyPoint>
          <FormulaBlock latex={String.raw`\frac{|\text{impulse}(a)|}{|\text{impulse}(b)|} = \frac{2mu}{2mu\cos 30^\circ} = \frac{2}{\sqrt{3}} \approx 1.2`} important />
          <p>The magnitudes of force cannot be found — the (small) collision time is not specified.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-momentum">4.5 Conservation of Momentum</h2>
      <Callout type="important" title="Law of conservation of momentum">
        <FormulaBlock latex={String.raw`\mathbf{p}_A' + \mathbf{p}_B' = \mathbf{p}_A + \mathbf{p}_B`} important />
        The total momentum of an isolated system of interacting particles is conserved. Mutual forces for
        each pair are equal and opposite, so the momentum changes cancel in pairs. This follows from the
        second and third laws together, and holds for <strong>elastic and inelastic</strong> collisions
        alike (elastic collisions additionally conserve kinetic energy).
      </Callout>
      <KeyPoint title="Proof — via the second law">
        <Stepper
          steps={[
            { label: "Second law", description: "F = dp/dt for the system." },
            { label: "No external force", description: "Isolated system: the net external force is zero, so dp/dt = 0, i.e. dp = 0." },
            { label: "Constant momentum", description: "Hence p = constant — the total momentum of an isolated system never changes." },
          ]}
        />
      </KeyPoint>

      <h3 id="h-recoil">Recoil of a gun</h3>
      <p>
        When a bullet is fired from a gun, the <strong>backward movement of the gun</strong> is called the{" "}
        <strong>recoil of the gun</strong>. The (gun + bullet) system is isolated, so by the law of conservation
        of momentum its total momentum stays constant:
      </p>
      <Stepper
        steps={[
          { label: "Before firing", description: "The gun and the bullet are at rest together — initial momentum of the system = 0." },
          { label: "After firing", description: "The bullet carries p_b = mv forward; the gun carries p_g = MV backward." },
          { label: "Conservation requirement", description: "Initial momentum = final momentum, so p_b + p_g = 0, i.e. p_b = −p_g — the negative sign shows the gun recoils to conserve momentum." },
          { label: "Equate magnitudes", description: "mv = MV, giving the recoil velocity of the gun: V = mv/M." },
          { label: "Muzzle velocity", description: "Re-arranging, the muzzle velocity of the bullet is v = MV/m — the lighter bullet gets the greater speed." },
        ]}
      />
      <FormulaBlock latex={String.raw`V = \frac{m\,v}{M} \qquad v = \frac{M\,V}{m}`} important />
      <p>
        Here M = mass of the gun, V = recoil velocity of the gun, m = mass of the bullet, v = muzzle velocity of
        the bullet (V is opposite in direction to v).
      </p>

      <Expandable variant="exercise" title="PYQs — Recoil of a gun">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ 2019</p>
              <p>A light bullet is fired from a heavy gun. Choose the correct statement: (i) the speed of the gun and the bullet are equal; (ii) the momentum of the bullet and the gun are equal in magnitude and opposite in direction; (iii) the momentum of the gun and the bullet are equal in magnitude and in the same direction; (iv) the velocity of the gun and the bullet are equal.</p>
            </div>,
            <div key={2}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ 2022</p>
              <p>A person firing a bullet from a gun experiences a backward jerk. (a) Write the principle behind this. (b) A bullet of mass 15 g is fired with a velocity of 100 m s⁻¹ from a gun of mass 2 kg. Find the recoil speed of the gun.</p>
            </div>,
            <div key={3}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ 2018</p>
              <p>A shell of mass 0.020 kg is fired by a gun of mass 100 kg. If the muzzle speed of the shell is 80 m s⁻¹, what is the recoil speed of the gun?</p>
            </div>,
          ]}
          answers={[
            <div key={1}>(ii) <strong>Momentum of the bullet and the gun are equal in magnitude and opposite in direction</strong> — the lighter bullet gets the greater speed.</div>,
            <div key={2}>
              <ul className="space-y-1.5 list-none">
                <li><strong>(a)</strong> The principle of conservation of linear momentum (equivalently, Newton&rsquo;s third law of motion).</li>
                <li><strong>(b)</strong> m = 15 g = 0.015 kg, v = 100 m s⁻¹, M = 2 kg.</li>
                <li>V = mv/M = (0.015 × 100) / 2 = 1.5 / 2</li>
                <li><strong>V = 0.75 m s⁻¹</strong> (backward).</li>
              </ul>
            </div>,
            <div key={3}>
              <ul className="space-y-1.5 list-none">
                <li>m = 0.020 kg, M = 100 kg, v = 80 m s⁻¹.</li>
                <li>V = mv/M = (0.020 × 80) / 100 = 1.6 / 100</li>
                <li><strong>V = 0.016 m s⁻¹</strong> (backward).</li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>

      <TableCard
        caption="March 2013 — Matching exercise on the laws"
        headers={["Column A", "Column B"]}
        rows={[
          { cells: ["Newton&rsquo;s first law", "Law of inertia"] },
          { cells: ["Conservation of linear momentum", "Momentum before collision = momentum after collision"] },
          { cells: ["Newton&rsquo;s third law", "Action ⇌ Reaction"] },
          { cells: ["Impulse", "Change in momentum"] },
        ]}
      />

      <h2 id="h-equilibrium">4.6 Equilibrium of a Particle</h2>
      <p>
        <Highlight>A particle is in <strong>equilibrium</strong> when the net external force on it is
        zero</Highlight> — by the first law it is then at rest or in uniform motion. Two forces:{" "}
        <Formula>{String.raw`\mathbf{F}_1 = -\mathbf{F}_2`}</Formula>. Three concurrent forces:
      </p>
      <FormulaBlock latex={String.raw`\mathbf{F}_1 + \mathbf{F}_2 + \mathbf{F}_3 = 0`} important />
      <p>
        i.e. the resultant of any two is equal and opposite to the third; the three forces may be drawn as
        the sides of a triangle with arrows in the same sense. Generalising: n forces in equilibrium can be
        represented by a closed n-sided polygon. In components: a vector sum of zero means the sum of
        x-components, of y-components and of z-components are each separately zero.
      </p>
      <Expandable title="Example 4.6 — Mass on a rope pulled sideways" variant="example">
        <ProblemSolution.Problem>
          <p>A mass of 6 kg is suspended by a rope of length 2 m from the ceiling. A force of 50 N horizontally is applied at the mid-point P. What is the angle the rope makes with the vertical in equilibrium? (g = 10 m s⁻²; rope massless.)</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Free-body diagrams: for the weight W, <Formula>{String.raw`T_2 = 6 \times 10 = 60\ \text{N}`}</Formula>. For point P, resolve: </p>
          <FormulaBlock latex={String.raw`T_1\cos\theta = 60\ \text{N}, \qquad T_1\sin\theta = 50\ \text{N}`} />
          <FormulaBlock latex={String.raw`\tan\theta = \frac{50}{60} = \frac{5}{6} \;\Rightarrow\; \theta = \tan^{-1}(5/6) \approx 40^\circ`} important />
          <p>The answer depends neither on the rope length nor on which point the horizontal force is applied.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-forces">4.7 Common Forces in Mechanics</h2>
      <p>
        Besides the pervasive (non-contact) gravitational force, the forces common in mechanics are{" "}
        <strong>contact forces</strong>: <Highlight>the component normal to the surfaces in contact is the{" "}
        <strong>normal reaction</strong>, the component parallel to them is <strong>friction</strong>.</Highlight>
        Tension (the restoring force in a string, assumed constant for a massless string) and the spring force{" "}
        <Formula>{String.raw`F = -kx`}</Formula> (k the force constant, restoring against displacement) round
        out the list.
      </p>
      <Comparison
        columns={[
          {
            title: "Contact forces",
            children: (
              <ul className="space-y-1.5 list-none">
                <li>A <strong>contact force</strong> arises due to contact with some other object — solid or fluid.</li>
                <li>Examples: frictional force, viscous force, air (fluid) resistance.</li>
              </ul>
            ),
          },
          {
            title: "Non-contact forces",
            children: (
              <ul className="space-y-1.5 list-none">
                <li>A <strong>non-contact force</strong> acts at a distance, without the need of any intervening medium.</li>
                <li>Example: gravitational force.</li>
              </ul>
            ),
          },
        ]}
      />
      <Callout type="didyouknow" title="What are contact forces really?">
        All contact forces arise ultimately from <strong>electrical forces</strong> between the charged
        constituents (nuclei and electrons) of the bodies. They are nevertheless treated as distinct forces
        in macroscopic mechanics because their microscopic origin is too complex for practical problems.
      </Callout>

      <h2 id="h-friction">4.7.1 Friction</h2>
      <p>
        The force that opposes (impending or actual) relative motion between two surfaces in contact is called
        the <strong>frictional force</strong>. <Highlight>Static friction fₛ opposes <strong>impending</strong>{" "}
        relative motion (motion that would occur if friction were absent); kinetic friction fₖ opposes actual
        sliding</Highlight>. When a small force F is applied horizontally to a body on a table, static friction
        is self-adjusting and exactly matches F up to a limit:
      </p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`f_s \le (f_s)_{\max} = \mu_s N`}</Formula> — the limiting value (f_s)max is <strong>independent of the area of contact</strong> and varies with the normal force N; μₛ is the <strong>coefficient of static friction</strong>, depending only on the nature of the surfaces in contact.</li>
          <li>Once sliding starts, friction drops to the <strong>kinetic friction</strong>: <Formula>{String.raw`f_k = \mu_k N`}</Formula>, with <strong>μₖ &lt; μₛ</strong>; nearly independent of area and velocity.</li>
          <li>These are <strong>empirical relations</strong>, approximately true and very useful — not fundamental laws.</li>
          <li>Friction opposes <strong>relative</strong> motion, not motion itself: a box on the floor of an accelerating train is kept accelerating with the train <em>by</em> static friction.</li>
        </ul>
      </FormulaCard>
      <Comparison
        columns={[
          {
            title: "Laws of static friction",
            children: (
              <ul className="space-y-1.5 list-none">
                <li>Friction depends only on the <strong>nature of the surfaces</strong> in contact.</li>
                <li>The magnitude of limiting friction is <strong>independent of the area of contact</strong>.</li>
                <li>Limiting static friction (f_s)max is directly proportional to the normal reaction N:{" "}
                  <Formula>{String.raw`(f_s)_{\max} = \mu_s\,N`}</Formula>
                </li>
              </ul>
            ),
          },
          {
            title: "Laws of kinetic friction",
            children: (
              <ul className="space-y-1.5 list-none">
                <li>Kinetic friction depends on the <strong>nature of the two surfaces</strong> in contact.</li>
                <li>It is <strong>independent of the relative velocity</strong> between the surfaces.</li>
                <li>It is directly proportional to the normal reaction N:{" "}
                  <Formula>{String.raw`f_k = \mu_k\,N`}</Formula>
                </li>
              </ul>
            ),
          },
        ]}
      />
      <KeyPoint title="Terminology — limiting friction">
        The <strong>limiting friction</strong> is the maximum value that static friction can reach — the boundary
        where a body <em>just</em> begins to slide. Beyond this boundary, kinetic friction takes over.
      </KeyPoint>
      <Expandable title="Example 4.7 — Box on an accelerating train floor" variant="example">
        <ProblemSolution.Problem>
          <p>Determine the maximum acceleration of a train in which a box on its floor will remain stationary, given μₛ = 0.15 between box and floor.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`ma = f_s \le \mu_s N = \mu_s m g \;\Rightarrow\; a \le \mu_s g`} />
          <FormulaBlock latex={String.raw`a_{\max} = 0.15 \times 10 = 1.5\ \text{m s}^{-2}`} important />
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 4.8 — Angle of repose" variant="example">
        <ProblemSolution.Problem>
          <p>A mass of 4 kg rests on a horizontal plane. The plane is gradually inclined until at θ = 15° the mass just begins to slide. What is μₛ between block and surface?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Resolving the weight along the plane: <Formula>{String.raw`mg\sin\theta = f_s`}</Formula>, <Formula>{String.raw`mg\cos\theta = N`}</Formula>. At θ = θₘₐₓ, fₛ = μₛN, so:</p>
          <FormulaBlock latex={String.raw`\tan\theta_{\max} = \mu_s \;\Rightarrow\; \theta_{\max} = \tan^{-1}\mu_s`} important />
          <p>θₘₐₓ (the angle of repose) depends only on μₛ, <strong>not on the mass</strong>.</p>
          <FormulaBlock latex={String.raw`\mu_s = \tan 15^\circ = 0.27`} important />
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 4.9 — Block and trolley system" variant="example">
        <ProblemSolution.Problem>
          <p>A 3 kg block hangs by a light inextensible string over a smooth pulley, pulling a 20 kg trolley on a rough horizontal surface (μₖ = 0.04). Find the acceleration of the system and the tension in the string. (g = 10 m s⁻².)</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Both accelerate equally. Block: <Formula>{String.raw`30 - T = 3a`}</Formula>. Trolley: <Formula>{String.raw`T - f_k = 20a`}</Formula> with <Formula>{String.raw`f_k = \mu_k N = 0.04 \times 200 = 8\ \text{N}`}</Formula>, so <Formula>{String.raw`T - 8 = 20a`}</Formula>.</p>
          <FormulaBlock latex={String.raw`30 - T = 3a,\ T - 8 = 20a \;\Rightarrow\; a = \frac{22}{23} \approx 0.96\ \text{m s}^{-2}`} important />
          <FormulaBlock latex={String.raw`T = 27.1\ \text{N}`} important />
        </ProblemSolution.Solution>
      </Expandable>
      <Callout type="note" title="Rolling friction">
        <strong>Rolling friction</strong> is the frictional force between the surfaces in contact when one body
        rolls over the other. Without slipping, ideal rolling suffers no friction — the point of contact is
        momentarily at rest. In practice, momentary deformation gives a finite contact area and a rolling
        friction that is <Highlight>much smaller than static or sliding friction</Highlight> — the discovery of
        the wheel. Ball bearings, air cushions and lubricants reduce friction; brakes, walking and car
        acceleration <em>require</em> it.
      </Callout>

      <Expandable variant="exercise" title="PYQs — Friction">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ 2021 · 1 mark</p>
              <p>The maximum value of static friction is called ______.</p>
            </div>,
            <div key={2}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ 2021 · 3 marks</p>
              <p>State the law of static friction.</p>
            </div>,
            <div key={3}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Model Exam 2021 · 3 marks — True or False</p>
              <p>
                (A) Kinetic friction depends on the velocity of the body.
                (B) Static friction is independent of the area of contact.
                (C) Kinetic friction is directly proportional to normal reaction.
              </p>
            </div>,
            <div key={4}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ · March 2019 Board Exam</p>
              <p>
                (a) Write the equation connecting limiting static friction with normal reaction. (b) Both kinetic
                friction and static friction are independent of the area of contact — True or False? (c) Show that{" "}
                μ_s = tanθ when a block is on an inclined plane just about to slide.
              </p>
            </div>,
          ]}
          answers={[
            <div key={1}><strong>Limiting friction</strong> — (f_s)max.</div>,
            <div key={2}>
              <ul className="space-y-1 list-none">
                <li>1. Friction depends only on the <strong>nature of the surfaces</strong> in contact.</li>
                <li>2. The magnitude of limiting friction is <strong>independent of the area of contact</strong>.</li>
                <li>3. Limiting friction is directly proportional to the normal reaction N: (f_s)max ∝ N, so (f_s)max = μ_s N.</li>
              </ul>
            </div>,
            <div key={3}>
              <ul className="space-y-1.5 list-none">
                <li>(A) <strong>False</strong> — kinetic friction is approximately independent of the relative velocity between the surfaces.</li>
                <li>(B) <strong>True</strong> — both static and kinetic friction are independent of the area of contact.</li>
                <li>(C) <strong>True</strong> — f_k = μ_k N by definition.</li>
              </ul>
            </div>,
            <div key={4}>
              <ul className="space-y-1.5 list-none">
                <li><strong>(a)</strong> (f_s)max = μ_s N</li>
                <li><strong>(b)</strong> <strong>True</strong> — both types of friction are independent of contact area.</li>
                <li><strong>(c)</strong> For a block on an inclined plane just about to slide, resolve forces along and perpendicular to the surface:</li>
                <li>Perpendicular to the plane: N = mg cosθ</li>
                <li>Parallel to the plane: f = mg sinθ (the component of weight trying to move the block)</li>
                <li>At the point of sliding, f = (f_s)max = μ_s N, so μ_s = f/N = (mg sinθ)/(mg cosθ) = tanθ</li>
                <li>∴ <strong>μ_s = tanθ</strong></li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>

      <Expandable title="Friction — a necessary evil; methods to reduce it" variant="default">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-sm font-semibold text-muted-foreground">Why friction is evil</p>
            <ul className="space-y-1 text-sm list-disc pl-4">
              <li>Causes wear and tear of machinery and tools, shortening their life.</li>
              <li>Generates heat — wasted energy and lost efficiency.</li>
            </ul>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-muted-foreground">Why friction is necessary</p>
            <ul className="space-y-1 text-sm list-disc pl-4">
              <li>Enables walking, writing, holding objects, and applying brakes.</li>
              <li>Keeps vehicles accelerating and turning without slipping.</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-sm font-semibold text-muted-foreground">Common methods to reduce friction:</p>
        <ol className="mt-1 space-y-1 text-sm list-decimal pl-4">
          <li>Using <strong>lubricants</strong> (oil, grease) to smooth the contact surfaces.</li>
          <li>Using <strong>ball bearings</strong> to convert sliding friction into the far smaller rolling friction.</li>
          <li><strong>Polishing</strong> surfaces to reduce roughness.</li>
          <li><strong>Streamlining</strong> shapes of vehicles to reduce fluid drag (air resistance).</li>
        </ol>
      </Expandable>

      <h2 id="h-circular">4.8 Circular Motion</h2>
      <p>
        From Chapter 3, <Highlight>a body moving uniformly on a circle of radius R has acceleration v²/R
        toward the centre</Highlight>; the <strong>centripetal force</strong> providing it is:
      </p>
      <FormulaBlock latex={String.raw`f_c = \frac{mv^2}{R}`} important />

      <figure className="my-6">
        <img
          src="/images/physics/laws-of-motion/fig-4.14-car-level-banked.png"
          alt="NCERT Fig. 4.14 — Circular motion of a car on (a) a level road and (b) a banked road, showing the weight, normal reaction and friction acting on the car."
          className="w-full h-auto rounded-lg object-contain bg-white"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          NCERT Fig. 4.14 — Circular motion of a car on (a) a level road, (b) a banked road.
        </figcaption>
      </figure>

      <h3 id="h-level-road">4.8.1 Car on a level circular road</h3>
      <p>
        When a vehicle turns on a circular path it needs a <strong>centripetal force</strong> directed towards the
        centre of the curve. On a flat, level road{" "}
        <Highlight>static friction between the tyres and the road is the only agency that supplies it</Highlight>{" "}
        [Fig. 4.14(a)]. For a car of mass m turning on a level circular track of radius r:
      </p>
      <Stepper
        steps={[
          { label: "Vertical equilibrium", description: "The weight is balanced by the normal reaction: N = mg." },
          { label: "Centripetal force requirement", description: "Static friction alone must provide the inward force: (F_s)max = mv²/r." },
          { label: "Law of static friction", description: "(F_s)max = μ_s N = μ_s mg." },
          { label: "Equate the two", description: "μ_s mg = mv²/r ⟹ μ_s g = v²/r." },
          { label: "Maximum safe speed", description: "v_max = √(μ_s r g) — independent of the car&rsquo;s mass." },
        ]}
      />
      <FormulaBlock latex={String.raw`v_{\max} = \sqrt{\mu_s\,r\,g}`} important />

      <h3 id="h-banked-road">4.8.2 Banking of roads</h3>
      <p>
        Friction alone is not a reliable source of centripetal force on curved tracks; at high speed the vehicle is
        likely to <strong>skid and go out of its track</strong>. <strong>Banking of roads</strong> is the process of{" "}
        <Highlight>raising the outer edge of the curved road above its inner edge</Highlight>, so that the normal
        reaction itself contributes a horizontal component towards the centre [Fig. 4.14(b)]. The{" "}
        <strong>angle of banking</strong> θ is the angle through which the outer edge is raised above the inner
        edge.
      </p>
      <p>
        For a vehicle of mass m on a banked curve of radius r, three forces act: the weight W = mg vertically down,
        the normal reaction N perpendicular to the road surface, and friction F acting along the surface. Resolving
        N and F into horizontal and vertical components:
      </p>
      <Stepper
        steps={[
          { label: "Vertical equilibrium", description: "N cosθ = mg + F sinθ — the horizontal components do not appear in the vertical balance (Eq. 1)." },
          { label: "Horizontal (centripetal) equilibrium", description: "N sinθ + F cosθ = mv²/r (Eq. 2)." },
          { label: "Substitute limiting friction", description: "At the maximum speed F = μ_s N. Divide Eq. (2) by Eq. (1): (N sinθ + μ_s N cosθ) / (N cosθ − μ_s N sinθ) = (mv²/r) / mg." },
          { label: "Cancel N and m", description: "(sinθ + μ_s cosθ) / (cosθ − μ_s sinθ) = v²/rg." },
          { label: "Divide through by cosθ", description: "(tanθ + μ_s) / (1 − μ_s tanθ) = v²/rg." },
          { label: "Maximum permissible speed", description: "v_max = √[ rg (μ_s + tanθ) / (1 − μ_s tanθ) ]." },
        ]}
      />
      <FormulaBlock latex={String.raw`v_{\max} = \sqrt{rg\,\frac{\mu_s + \tan\theta}{1 - \mu_s\tan\theta}}`} important />
      <p>Two special cases follow directly:</p>
      <FormulaCard>
        <ul>
          <li><strong>Case 1 — level road</strong> (no banking, θ = 0°): the formula collapses to v_max = √(μ_s r g) — exactly the level-road result of §4.8.1.</li>
          <li><strong>Case 2 — perfectly smooth banked road</strong> (μ_s = 0): no friction is needed, avoiding the wear and tear of tyres; this defines the <strong>optimum speed</strong>: v_o = √(rg tanθ).</li>
        </ul>
      </FormulaCard>
      <FormulaBlock latex={String.raw`v_o = \sqrt{rg\tan\theta}`} important />
      <TableCard
        headers={["On a level road", "On a banked road"]}
        rows={[
          { cells: [
            "Friction (static) alone supplies f_c: v² ≤ μₛRg, so vₘₐₓ = √(μₛRg) — independent of the car&rsquo;s mass.",
            "Both N and friction contribute; the optimum speed needs no friction: v₀ = √(Rg tanθ); below v₀ friction acts up the slope; parking possible only if tanθ ≤ μₛ.",
          ] },
        ]}
        caption="Car turning on a circular path of radius R (Eqs. 4.17–4.22)."
      />
      <Expandable title="Example 4.10 — Cyclist on a level turn: will he slip?" variant="example">
        <ProblemSolution.Problem>
          <p>A cyclist rides at 18 km/h (5 m s⁻¹) around a sharp circular turn of radius 3 m on a level road, μₛ = 0.1. Will he slip?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Condition for no slip: <Formula>{String.raw`v^2 \le \mu_s R g`}</Formula>. Here <Formula>{String.raw`\mu_s R g = 0.1 \times 3 \times 9.8 = 2.94\ \text{m}^2\text{s}^{-2}`}</Formula> but <Formula>{String.raw`v^2 = 25\ \text{m}^2\text{s}^{-2}`}</Formula>.</p>
          <FormulaBlock latex={String.raw`v^2 = 25 > 2.94 \;\Rightarrow\; \text{the cyclist WILL slip}`} important />
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 4.11 — Racetrack banked at 15°" variant="example">
        <ProblemSolution.Problem>
          <p>
            A circular racetrack of radius 300 m is banked at an angle of 15°. If the coefficient of friction between
            the wheels of a race-car and the road is 0.2, what is the (a) optimum speed of the racecar to avoid wear
            and tear on its tyres, and (b) maximum permissible speed to avoid slipping?
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Given: r = 300 m, θ = 15°, μ_s = 0.2; tan 15° = 0.2679.</p>
          <Stepper
            steps={[
              { label: "(a) Optimum speed", description: "v_o = √(rg tanθ) = √(300 × 9.8 × tan 15°) = √(300 × 9.8 × 0.2679)." },
              { label: "Evaluate", description: "v_o = √787.6 ≈ 28.1 m s⁻¹." },
              { label: "(b) Maximum permissible speed", description: "v_max = √[ rg (tanθ + μ_s) / (1 − μ_s tanθ) ] = √[ 300 × 9.8 × (0.2679 + 0.2) / (1 − 0.2 × 0.2679) ]." },
              { label: "Evaluate", description: "v_max = √[ 2940 × 0.4679 / 0.9464 ] ≈ √1453 ≈ 38.1 m s⁻¹." },
            ]}
          />
          <FormulaBlock latex={String.raw`v_o = \sqrt{rg\tan\theta} = \sqrt{300 \times 9.8 \times \tan 15^\circ} = \sqrt{300 \times 9.8 \times 0.2679} \approx 28.1\ \text{m s}^{-1}`} important />
          <FormulaBlock latex={String.raw`v_{\max} = \sqrt{rg\,\frac{\tan\theta + \mu_s}{1 - \mu_s\tan\theta}} = \sqrt{300 \times 9.8 \times \frac{0.4679}{0.9464}} \approx 38.1\ \text{m s}^{-1}`} important />
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable variant="exercise" title="PYQs — Level circular road">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ · Christmas Exam 2019 / Board Exam 2021</p>
              <p>
                A cyclist travelling at 18 km/h on a level road takes a sharp circular turn of radius 3 m without
                reducing speed. The coefficient of static friction between the tyres and the road is 0.1. (a) Calculate
                the maximum permissible speed to avoid slipping. (b) Will the cyclist slip while taking the turn?
              </p>
            </div>,
            <div key={2}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ 2022 / Model Exam · 3 marks</p>
              <p>
                A car is moving on a circular level road. What are the three forces acting on it? Derive an expression
                for the maximum safe speed of the car.
              </p>
            </div>,
          ]}
          answers={[
            <div key={1}>
              <ul className="space-y-1.5 list-none">
                <li>Given: radius r = 3 m, μ_s = 0.1, g = 10 m s⁻²; the cyclist&rsquo;s speed is v = 18 km/h = 18 × 5/18 = 5 m s⁻¹.</li>
                <li>(a) v_max = √(μ_s r g) = √(0.1 × 3 × 10) = √3 ≈ <strong>1.73 m s⁻¹</strong> — the maximum permissible speed to avoid slipping.</li>
                <li>(b) The actual speed (5 m s⁻¹) exceeds v_max (1.73 m s⁻¹); since v² = 25 &gt; μ_s r g = 3, <strong>the cyclist WILL slip</strong>.</li>
              </ul>
            </div>,
            <div key={2}>
              <ul className="space-y-1.5 list-none">
                <li>The three forces: weight W = mg (vertically down), normal reaction N (vertically up, N = mg), and static friction (F_s)max (horizontal, towards the centre).</li>
                <li>(F_s)max = mv²/r and (F_s)max = μ_s N = μ_s mg, so μ_s mg = mv²/r.</li>
                <li>v² = μ_s r g ⟹ <strong>v_max = √(μ_s r g)</strong>.</li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>
      <Expandable variant="exercise" title="PYQs — Banking of roads">
        <ExerciseQa
          questions={[
            <div key={1}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ · Board Exam Sept 2021</p>
              <p>
                (a) Identify the forces A and B in the diagram of a car on a banked road. (b) A cyclist travelling on a
                level road takes a sharp turn of radius 3 m with μ_s = 0.1. Calculate the maximum permissible speed.
              </p>
            </div>,
            <div key={2}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ · Improvement Exam 2020</p>
              <p>
                (a) List the forces acting on a vehicle on a banked road. (b) Derive an expression for the maximum safe
                speed. (c) A circular road of radius 300 m is banked at an angle of 15°. If μ = 0.2 and g = 9.8 m s⁻²,
                find the optimum speed.
              </p>
            </div>,
            <div key={3}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ · March 2020</p>
              <p>Identify the forces A, B, C, D in the diagram of circular motion on a banked road.</p>
            </div>,
            <div key={4}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ · March 2017 · MCQ</p>
              <p>The optimum speed of a car on a banked road that avoids wear and tear on its tyres is:</p>
            </div>,
            <div key={5}>
              <p className="mb-1.5 inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">PYQ · Improvement Exam 2013</p>
              <p>
                A circular track of radius 400 m has its outer edge raised at an angle of 5°. The coefficient of friction
                μ_s = 0.2. (a) Name this construction. (b) Calculate the permissible speed.
              </p>
            </div>,
          ]}
          answers={[
            <div key={1}>
              <ul className="space-y-1.5 list-none">
                <li>(a) A = <strong>N</strong> — the normal reaction, perpendicular to the road surface; B = <strong>N sinθ</strong> — its horizontal component towards the centre.</li>
                <li>(b) v_max = √(μ_s r g) = √(0.1 × 3 × 9.8) ≈ <strong>1.714 m s⁻¹</strong>.</li>
              </ul>
            </div>,
            <div key={2}>
              <ul className="space-y-1.5 list-none">
                <li>(a) Normal reaction N, frictional force (F_s)max, and weight W = mg.</li>
                <li>(b) Resolve N and friction into components and balance them — see the derivation in §4.8.2: v_max = √[ rg (μ_s + tanθ) / (1 − μ_s tanθ) ].</li>
                <li>(c) v_o = √(r g tanθ) = √(300 × 9.8 × tan 15°) ≈ <strong>28.08 m s⁻¹</strong>.</li>
              </ul>
            </div>,
            <div key={3}>
              <ul className="space-y-1 list-none">
                <li>A → N &nbsp;&nbsp;(normal reaction)</li>
                <li>B → W = mg &nbsp;&nbsp;(weight)</li>
                <li>C → F cosθ + N sinθ &nbsp;&nbsp;(horizontal components of friction and normal — the centripetal force)</li>
                <li>D → F &nbsp;&nbsp;(friction)</li>
              </ul>
            </div>,
            <div key={4}>
              <strong>√(Rg tanθ)</strong> — the friction-free (optimum) speed on a banked road.
            </div>,
            <div key={5}>
              <ul className="space-y-1.5 list-none">
                <li>(a) <strong>Banking of roads</strong>.</li>
                <li>(b) Permissible speed: v = √[ 400 × 9.8 × (0.2 + tan 5°) / (1 − 0.2 × tan 5°) ] ≈ <strong>33.6 m s⁻¹</strong>.</li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>

      <h2 id="h-exercises">Exercises 4.1 – 4.23</h2>
      <Expandable title="Exercises 4.1 – 4.23 — answers" variant="exercise">
        <p><em>For numerical simplicity, take g = 10 m s⁻².</em></p>
        <ExerciseQa
          questions={[
            <div key={1}><p><strong>4.1</strong> Give the magnitude and direction of the net force acting on (a) a drop of rain falling with constant speed, (b) a cork of mass 10 g floating on water, (c) a kite held stationary in the sky, (d) a car moving with constant velocity 30 km/h on a rough road, (e) a high-speed electron in space far from all material objects and free of electric and magnetic fields.</p></div>,
            <div key={2}><p><strong>4.2</strong> A pebble of mass 0.05 kg is thrown vertically up. Give the magnitude and direction of the net force on it (a) during upward motion, (b) during downward motion, (c) at the highest point. Does the answer change if thrown at 45°? Ignore air resistance.</p></div>,
            <div key={3}><p><strong>4.3</strong> Give the net force on a stone of mass 0.1 kg (a) just after dropping from a stationary train&rsquo;s window, (b) from a window of a train at uniform 36 km/h, (c) from a window of a train accelerating at 1 m s⁻², (d) lying on the floor of that accelerating train, at rest relative to the train. Neglect air resistance.</p></div>,
            <div key={4}><p><strong>4.4</strong> One end of a string of length l joins a particle of mass m to a peg on a smooth table; the particle moves in a circle with speed v. The net force on the particle (toward the centre) is: (i) T, (ii) T − mv²/l, (iii) T + mv²/l, (iv) 0. Choose correctly.</p></div>,
            <div key={5}><p><strong>4.5</strong> A constant retarding force of 50 N acts on a 20 kg body moving at 15 m s⁻¹. How long does it take to stop?</p></div>,
            <div key={6}><p><strong>4.6</strong> A constant force changes a 3.0 kg body&rsquo;s speed from 2.0 to 3.5 m s⁻¹ in 25 s (direction unchanged). Find the magnitude and direction of the force.</p></div>,
            <div key={7}><p><strong>4.7</strong> A 5 kg body is acted on by two perpendicular forces 8 N and 6 N. Find the magnitude and direction of its acceleration.</p></div>,
            <div key={8}><p><strong>4.8</strong> A three-wheeler (vehicle 400 kg + driver 65 kg) moving at 36 km/h is brought to rest in 4.0 s. What average retarding force is needed?</p></div>,
            <div key={9}><p><strong>4.9</strong> A rocket with lift-off mass 20,000 kg is blasted upward with initial acceleration 5.0 m s⁻². Calculate the initial thrust.</p></div>,
            <div key={10}><p><strong>4.10</strong> A 0.40 kg body moving at 10 m s⁻¹ north is subject to a constant 8.0 N force south for 30 s. Predict its position at t = −5 s, 25 s and 100 s (x = 0, t = 0 at the instant of applying the force).</p></div>,
            <div key={11}><p><strong>4.11</strong> A truck accelerating at 2.0 m s⁻² (from rest) has a stone dropped from its top (6 m high) at t = 10 s. At t = 11 s find (a) the stone&rsquo;s velocity and (b) its acceleration. Neglect air resistance.</p></div>,
            <div key={12}><p><strong>4.12</strong> A 0.1 kg bob on a 2 m string oscillates; its speed at the mean position is 1 m s⁻¹. What is the trajectory if the string is cut at (a) an extreme position, (b) the mean position?</p></div>,
            <div key={13}><p><strong>4.13</strong> A 70 kg man stands on a scale in a lift moving (a) up at uniform 10 m s⁻¹, (b) down with acceleration 5 m s⁻², (c) up with acceleration 5 m s⁻². What does the scale read in each? (d) What does it read if the lift falls freely?</p></div>,
            <div key={14}><p><strong>4.14</strong> The position–time graph of a 4 kg particle is: a straight line (slope 3 m s⁻¹) for t &lt; 0, a parabola for 0 &lt; t &lt; 4 s (velocity 0 → −1.5 m s⁻¹), a straight line (slope −1.5 m s⁻¹) for t &gt; 4 s. Find (a) the force for each interval, and (b) the impulse at t = 0 and t = 4 s.</p></div>,
            <div key={15}><p><strong>4.15</strong> Masses 10 kg (A) and 20 kg (B) on a smooth surface are tied by a light string. A horizontal force F = 600 N is applied to (i) A, (ii) B. Find the tension in each case.</p></div>,
            <div key={16}><p><strong>4.16</strong> 8 kg and 12 kg masses hang from a light inextensible string over a frictionless pulley. Find the acceleration and the tension when released.</p></div>,
            <div key={17}><p><strong>4.17</strong> A nucleus at rest disintegrates into two smaller nuclei. Show the products must move in opposite directions.</p></div>,
            <div key={18}><p><strong>4.18</strong> Two billiard balls (0.05 kg each) moving in opposite directions at 6 m s⁻¹ collide and rebound with the same speed. What impulse is imparted to each ball?</p></div>,
            <div key={19}><p><strong>4.19</strong> A shell of mass 0.020 kg is fired from a 100 kg gun with muzzle speed 80 m s⁻¹. Find the recoil speed of the gun.</p></div>,
            <div key={20}><p><strong>4.20</strong> A batsman deflects a ball (0.15 kg, 54 km/h) by 45° without changing speed. Find the impulse imparted to the ball.</p></div>,
            <div key={21}><p><strong>4.21</strong> A 0.25 kg stone is whirled on a 1.5 m string at 40 rev/min in a horizontal plane. Find its tension. What is the maximum speed if the string withstands 200 N?</p></div>,
            <div key={22}><p><strong>4.22</strong> If in Exercise 4.21 the speed exceeds the maximum and the string breaks, the stone: (a) moves radially outward, (b) flies off tangentially, (c) flies off at some angle with the tangent. Choose correctly.</p></div>,
            <div key={23}><p><strong>4.23</strong> Explain why (a) a horse cannot pull a cart in empty space, (b) passengers are thrown forward when a bus stops suddenly, (c) it is easier to pull a lawn mower than to push it, (d) a cricketer draws his hands back while holding a catch.</p></div>,
          ]}
          answers={[
            <div key={1}>
              <ul className="space-y-1.5 list-none">
                <li><strong>Zero net force in all five cases.</strong> (a) Constant speed ⟹ a = 0 ⟹ F_net = 0; (b) floating ⟹ buoyancy balances the weight; (c) held stationary ⟹ F_net = 0; (d) uniform velocity ⟹ a = 0; (e) no fields and no bodies ⟹ no force at all.</li>
              </ul>
            </div>,
            <div key={2}>
              <ul className="space-y-1.5 list-none">
                <li>Net force = mg = 0.05 × 10 = <strong>0.5 N, vertically downward</strong>.</li>
                <li>(a), (b) and (c) are all the same — the only force is the weight, mg, and it never changes direction. The 45° throw changes nothing (air resistance ignored).</li>
              </ul>
            </div>,
            <div key={3}>
              <ul className="space-y-1.5 list-none">
                <li>(a) 1 N downward; (b) 1 N downward — a uniform train gives the stone no horizontal force; (c) 1 N downward just after release (the instant after dropping, the stone still has the train&rsquo;s horizontal speed but no horizontal <em>force</em>); (d) <strong>0.1 N horizontally</strong> in the direction of the train&rsquo;s acceleration — F = ma = 0.1 × 1.</li>
              </ul>
            </div>,
            <div key={4}>
              <strong>(i) T</strong> — the tension is the only horizontal force and it provides the centripetal mv²/l.
            </div>,
            <div key={5}>
              <ul className="space-y-1.5 list-none">
                <li>a = F/m = 50/20 = 2.5 m s⁻² (retarding).</li>
                <li>t = v/a = 15/2.5 = <strong>6 s</strong>.</li>
              </ul>
            </div>,
            <div key={6}>
              <ul className="space-y-1.5 list-none">
                <li>a = (3.5 − 2.0)/25 = 1.5/25 = 0.06 m s⁻².</li>
                <li>F = ma = 3.0 × 0.06 = <strong>0.18 N in the direction of motion</strong>.</li>
              </ul>
            </div>,
            <div key={7}>
              <ul className="space-y-1.5 list-none">
                <li>F = √(8² + 6²) = √100 = 10 N.</li>
                <li>a = F/m = 10/5 = <strong>2 m s⁻²</strong> at tan⁻¹(6/8) ≈ <strong>37° with the 8 N force</strong>.</li>
              </ul>
            </div>,
            <div key={8}>
              <ul className="space-y-1.5 list-none">
                <li>m = 400 + 65 = 465 kg; v = 36 km/h = 10 m s⁻¹.</li>
                <li>a = v/t = 10/4 = 2.5 m s⁻² (retarding).</li>
                <li>F = 465 × 2.5 ≈ <strong>1.16 × 10³ N</strong> (retarding).</li>
              </ul>
            </div>,
            <div key={9}>
              <ul className="space-y-1.5 list-none">
                <li>Upward net force: Thrust − mg = ma ⟹ Thrust = m(g + a).</li>
                <li>Thrust = 20,000 × (10 + 5) = <strong>3.0 × 10⁵ N</strong>.</li>
              </ul>
            </div>,
            <div key={10}>
              <ul className="space-y-1.5 list-none">
                <li>a = 8.0/0.40 = 20 m s⁻² (south, i.e. negative).</li>
                <li>x = ut + ½at² = 10t − 10t².</li>
                <li>t = −5 s: x = −50 − 250 = −<strong>300 m</strong>; t = 25 s: 250 − 6250 = −<strong>6000 m</strong>; t = 100 s: 1000 − 100000 = −<strong>99000 m (99 km south)</strong>.</li>
              </ul>
            </div>,
            <div key={11}>
              <ul className="space-y-1.5 list-none">
                <li>At t = 10 s the truck speed is u = 2.0 × 10 = 20 m s⁻¹ — the stone&rsquo;s horizontal velocity forever after.</li>
                <li>(a) One second after release, vₓ = 20 m s⁻¹ and v_y = g × 1 = 10 m s⁻¹ (down).</li>
                <li>v = √(20² + 10²) = √500 ≈ <strong>22 m s⁻¹</strong> at tan⁻¹(10/20) ≈ <strong>26.6° below the horizontal</strong> (63.4° with the direction of the truck).</li>
                <li>(b) <strong>a = g = 10 m s⁻², vertically downward</strong> — air resistance neglected.</li>
              </ul>
            </div>,
            <div key={12}>
              <ul className="space-y-1.5 list-none">
                <li>(a) At an extreme position the bob is momentarily at rest ⟹ <strong>vertical free fall</strong>.</li>
                <li>(b) At the mean position the bob has the full speed 1 m s⁻¹ horizontally ⟹ <strong>a parabola</strong> (projectile motion).</li>
              </ul>
            </div>,
            <div key={13}>
              <ul className="space-y-1.5 list-none">
                <li>Exactly as in Example 4.12: (a) <strong>700 N</strong>; (b) <strong>350 N</strong>; (c) <strong>1050 N</strong>; (d) <strong>0</strong>.</li>
              </ul>
            </div>,
            <div key={14}>
              <ul className="space-y-1.5 list-none">
                <li>(a) t &lt; 0 and t &gt; 4 s: uniform velocity ⟹ <strong>F = 0</strong>. For 0 &lt; t &lt; 4 s: a = dv/dt = −1.5/4 = −0.375 ⟹ F = 4 × (−0.375) = <strong>−1.5 N</strong>.</li>
                <li>(b) Impulse = Δp: at t = 0: 4(0 − 3) = <strong>−12 N s</strong>; at t = 4 s: 4(−1.5 − 0) = <strong>−6 N s</strong>.</li>
              </ul>
            </div>,
            <div key={15}>
              <ul className="space-y-1.5 list-none">
                <li>The pair moves together: a = F/(m_A + m_B) = 600/30 = 20 m s⁻².</li>
                <li>(i) Force applied to A: tension must accelerate B alone ⟹ T = m_B a = 20 × 20 = <strong>400 N</strong>.</li>
                <li>(ii) Force applied to B: tension must accelerate A alone ⟹ T = m_A a = 10 × 20 = <strong>200 N</strong>.</li>
              </ul>
            </div>,
            <div key={16}>
              <ul className="space-y-1.5 list-none">
                <li>Net force = (12 − 8)g = 4 × 10 = 40 N; total mass 20 kg.</li>
                <li>a = 40/20 = <strong>2 m s⁻²</strong>; T = 8(g + a) = 8 × 12 = <strong>96 N</strong>.</li>
              </ul>
            </div>,
            <div key={17}>
              <ul className="space-y-1.5 list-none">
                <li>Nucleus at rest ⟹ initial total momentum = 0. Conservation requires 0 = p₁ + p₂, so <strong>p₂ = −p₁</strong> — the two fragments have equal and opposite momenta and hence move in opposite directions.</li>
              </ul>
            </div>,
            <div key={18}>
              <ul className="space-y-1.5 list-none">
                <li>I = m(v − u) = 0.05 × [6 − (−6)] = 0.05 × 12 = <strong>0.6 N s</strong> on each ball (opposite directions).</li>
              </ul>
            </div>,
            <div key={19}>
              <ul className="space-y-1.5 list-none">
                <li>V = mv/M = 0.020 × 80/100 = <strong>0.016 m s⁻¹</strong> (backward).</li>
              </ul>
            </div>,
            <div key={20}>
              <ul className="space-y-1.5 list-none">
                <li>Speed 54 km/h = 15 m s⁻¹; deflection 45° ⟹ Δp = 2mu sin(45°/2).</li>
                <li>J = 2 × 0.15 × 15 × sin 22.5° = 4.5 × 0.3827 ≈ <strong>1.7 N s</strong> (along the bisector of the angle between the initial and final directions — the vector change of momentum).</li>
              </ul>
            </div>,
            <div key={21}>
              <ul className="space-y-1.5 list-none">
                <li>ω = 40 × (2π/60) = 4.19 rad s⁻¹.</li>
                <li>T = mω²r = 0.25 × (4.19)² × 1.5 ≈ <strong>6.6 N</strong>.</li>
                <li>Maximum when T = 200 N: mv²/r = 200 ⟹ v = √(200 × 1.5/0.25) = √1200 ≈ <strong>34.6 m s⁻¹</strong>.</li>
              </ul>
            </div>,
            <div key={22}>
              <strong>(b)</strong> The stone flies off <strong>tangentially</strong> — once the string breaks there is no force, so the stone continues with uniform velocity in the direction it had at the instant of break.
            </div>,
            <div key={23}>
              <ul className="space-y-1.5 list-none">
                <li>(a) In empty space the horse has nothing to push against; the equal-and-opposite horse–cart forces are <em>internal</em> to the horse–cart system and cannot provide the external forward force needed.</li>
                <li>(b) Inertia of the upper body — the feet stop but the upper body continues forward.</li>
                <li>(c) Pulling gives the force an upward component that <em>reduces</em> N (hence friction f ≤ μN); pushing adds a downward component that increases N and friction.</li>
                <li>(d) Drawing the hands back increases the impact time for the same momentum change, so the impulsive force on the hands is smaller.</li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>
    </>
  );
}