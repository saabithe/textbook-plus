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
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Comparison } from "@/components/content/Comparison";
import { LevelRoadFigure, BankedRoadFigure, RecoilFigure } from "@/components/content/physics/LomFigures";

export default function LawsOfMotionChapter() {
  return (
    <>
      <h2 id="h-intro">4.1 Introduction</h2>
      <p>
        In the preceding chapter we described motion quantitatively. We have not yet asked the question:
        <strong> what governs the motion of bodies?</strong> Common experience suggests a force is needed to
        put a stationary body in motion, to stop a moving body, and to change its speed or direction. The
        agency providing force may or may not be in contact with the body (gravity, magnetism act at a
        distance).
      </p>
      <Callout type="note" title="The central question of this chapter">
        But is an external force required to keep a body in <strong>uniform motion</strong> — say a skater
        gliding with constant speed on horizontal ice? Answering this took ages; Galileo&rsquo;s answer laid
        the foundation of Newtonian mechanics.
      </Callout>

      <h2 id="h-aristotle">4.2 Aristotle&rsquo;s Fallacy</h2>
      <p>
        Aristotle (384–322 B.C.) held that <em>if a body is moving, something external is required to keep it
        moving</em> — for example an arrow is kept flying by the air pushing behind it. This is a natural
        view from common experience: a toy car dragged on a floor stops the moment the string is released.
      </p>
      <KeyPoint title="Where the fallacy lies">
        A moving toy car comes to rest because <strong>friction</strong> opposes its motion. When it moves
        uniformly, there is <strong>no net external force</strong> — the child&rsquo;s pull cancels friction.
        If there were no friction, no force would be needed to keep it moving. Aristotle coded the
        ever-present effects of friction into a wrong &ldquo;law&rdquo;.
      </KeyPoint>
      <Expandable title="Ideas on Motion in Ancient Indian Science">
        <p>
          Ancient Indian thinkers developed an elaborate system of ideas on motion: force due to continuous
          pressure (nodan), impact (abhighat), persistent tendency (sanskara) — with <em>vega</em>, the
          tendency to move in a straight line, closest to the concept of inertia, opposed by contact with
          objects (a parallel to friction and air resistance). They understood that translational,
          rotational and vibrational motion of a body arise from the translational motion of its
          constituents, and distinguished a wave from a current of water. Bhaskara (1150 A.D.) introduced
          &ldquo;instantaneous motion&rdquo; (tatkaliki gati), anticipating the notion of instantaneous
          velocity.
        </p>
      </Expandable>

      <h2 id="h-inertia">4.3 The Law of Inertia</h2>
      <p>
        Galileo studied balls on inclined planes: motion down accelerates, up retards, horizontal motion is
        the intermediate case. <Highlight>On a frictionless horizontal plane a ball neither accelerates nor retards —
        it moves with <strong>constant velocity</strong>.</Highlight> The double inclined-plane experiment confirms
        this: releasing a ball on one plane, it climbs the other to nearly the same height; as the second
        slope is reduced, it travels farther. With the second plane horizontal and friction absent, the ball
        travels an infinite distance — its motion never ceases.
      </p>
      <Callout type="important" title="Galileo&rsquo;s insight">
        The state of rest and the state of uniform linear motion are <strong>equivalent</strong>: in both
        cases there is no net force on the body. This property of a body is called{" "}
        <Highlight>inertia</Highlight> — &ldquo;resistance to change&rdquo;.
      </Callout>
      <p>
        In practice we still need an external force to keep a body in uniform motion — exactly to counter
        the ever-present frictional/viscous opposition, so that the net external force is zero.
      </p>
      <KeyPoint title="Inertia — the three faces">
        Inertia is the <Highlight>inability of a body to change its own state of rest or uniform motion</Highlight>
        by itself. Exam questions classify it by which change the body resists:
        <ul>
          <li><strong>Inertia of rest</strong> — resists starting to move from rest. A book stays on the table until pushed; dust flies off when a carpet is struck.</li>
          <li><strong>Inertia of motion</strong> — resists stopping or turning once moving. Passengers lurch forward when a bus brakes.</li>
          <li><strong>Inertia of direction</strong> — resists a lateral change of direction. A stone thrown tangentially from a whirling sling flies off along a tangent.</li>
        </ul>
      </KeyPoint>

      <h2 id="h-first">4.4 Newton&rsquo;s First Law of Motion</h2>
      <Callout type="important" title="First Law">
        Every body continues to be in its state of rest or of uniform motion in a straight line unless
        compelled by some external force to act otherwise. Equivalently: if the net external force on a body
        is zero, its acceleration is zero.
      </Callout>
      <p>
        The first law is used in two ways. When we know the net force is zero (a spaceship in interstellar
        space, rockets off), we conclude the acceleration is zero. More often we know the{" "}
        <em>motion</em>: <Highlight>if an object on earth is at rest or in uniform motion, we infer the net
        external force is zero</Highlight> — i.e. the various forces (weight, normal reaction, friction)
        cancel exactly.
      </p>
      <MistakeCard
        mistake="&ldquo;Since W = R, the forces cancel, therefore the book is at rest.&rdquo;"
        correction="Incorrect order of reasoning. The correct statement is: since the book is observed to be at rest, the first law requires the net force to be zero, hence the normal force R must equal and oppose the weight W. The normal force R is a self-adjusting force."
        example="A car picking up speed accelerates only because of an external net force — along the road this is the force of friction. Internal forces can never explain the car's own acceleration."
      />
      <Expandable title="The bus in motion — inertia in action" variant="example">
        <p>
          When a bus suddenly <em>starts</em>, friction accelerates your feet with the bus but the rest of
          your (deformable) body stays back by inertia — you are thrown backward (until muscular forces move
          it along). When the bus suddenly <em>stops</em>, your feet stop but the upper body continues
          forward by inertia — you are thrown forward.
        </p>
      </Expandable>
      <Expandable title="Example 4.1 — Astronaut separated from his spaceship" variant="example">
        <ProblemSolution.Problem>
          <p>
            An astronaut accidentally gets separated from his small spaceship accelerating in interstellar
            space at a constant rate of 100 m s⁻². What is his acceleration the instant after he is outside
            the spaceship? (No nearby stars to exert gravitational force.)
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            With no nearby stars, the net force on the astronaut (once outside) is zero — the spaceship&rsquo;s
            gravitational pull is negligible. By the first law, <strong>his acceleration is zero</strong>.
          </p>
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

      <h2 id="h-second">4.5 Newton&rsquo;s Second Law of Motion</h2>
      <p>
        The first law covers zero net force; <Highlight>the second law relates a net external force to the
        resulting acceleration</Highlight>.
      </p>
      <h3>Momentum</h3>
      <FormulaCard>
        <p>
          <strong>Momentum</strong> of a body: <Formula>{String.raw`\mathbf{p} = m\mathbf{v}`}</Formula> — a
          vector.
        </p>
        <p>
          Evidence it is the relevant variable: a heavier body needs a bigger force to reach the same speed
          in the same time; a bullet&rsquo;s damage depends on its speed; the same force applied for the same
          time gives <em>every</em> body (of any mass) the same change in momentum; rotating a stone on a
          string needs a force to change the <em>direction</em> of momentum even though its magnitude is
          fixed.
        </p>
      </FormulaCard>
      <Callout type="important" title="Second Law">
        The rate of change of momentum of a body is directly proportional to the applied force and takes
        place in the direction in which the force acts:
        <FormulaBlock latex={String.raw`\mathbf{F} = \frac{\mathrm{d}\mathbf{p}}{\mathrm{d}t} = m\mathbf{a}`} important />
        with the SI unit of force chosen so the constant k = 1: <strong>1 N = 1 kg m s⁻²</strong>.
      </Callout>
      <FormulaCard>
        <ul>
          <li>F = 0 ⟹ a = 0 — consistent with the first law.</li>
          <li><strong>Vector law</strong>: Fₓ = dpₓ/dt = maₓ, F_y = dp_y/dt = ma_y, F_z = dp_z/dt = ma_z. A force changes only the velocity component parallel to itself (e.g. the projectile&rsquo;s horizontal velocity stays constant under a vertical weight).</li>
          <li>F in the law is the <strong>net external force</strong>; internal forces are excluded. For a system, a is the acceleration of the centre of mass.</li>
          <li><strong>Local law</strong>: force here and now determines acceleration here and now — no memory of prior motion. (A stone dropped out of an accelerating train has no horizontal acceleration, if air is neglected.)</li>
        </ul>
      </FormulaCard>
      <Expandable title="Example 4.2 — Bullet stopped by a wooden block" variant="example">
        <ProblemSolution.Problem>
          <p>A bullet of mass 0.04 kg moving with a speed of 90 m s⁻¹ enters a heavy wooden block and is stopped after a distance of 60 cm. What is the average resistive force exerted by the block?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`a = -\frac{u^2}{2s} = -\frac{90 \times 90}{2 \times 0.6}\ \text{m s}^{-2} = -6750\ \text{m s}^{-2}`} />
          <FormulaBlock latex={String.raw`F = 0.04 \times 6750 = 270\ \text{N}`} important />
          <p>The resistive force may not be uniform — this is only the <strong>average</strong> value.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 4.3 — Motion y = ut + ½gt²: find the force" variant="example">
        <ProblemSolution.Problem>
          <p>The motion of a particle of mass m is described by <Formula>{String.raw`y = ut + \tfrac{1}{2}gt^2`}</Formula>. Find the force acting on the particle.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`v = \frac{\mathrm{d}y}{\mathrm{d}t} = u + gt, \qquad a = \frac{\mathrm{d}v}{\mathrm{d}t} = g`} />
          <FormulaBlock latex={String.raw`F = ma = mg`} important />
          <p>The described motion is that of a particle under uniform acceleration due to gravity, y being measured in the direction of g.</p>
        </ProblemSolution.Solution>
      </Expandable>
      <h3>Impulse</h3>
      <Callout type="note" title="Impulse">
        When a <strong>large force acts for a very short time</strong> (a ball bouncing off a wall), force and
        duration are hard to measure separately, but their product — the change in momentum — is measurable:
        <FormulaBlock latex={String.raw`\text{Impulse} = \mathbf{F}\,\Delta t = \Delta\mathbf{p}`} important />
        An impulsive force is not a special kind of force — Newtonian mechanics treats it like any other,
        just large and brief.
      </Callout>
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

      <h2 id="h-third">4.6 Newton&rsquo;s Third Law of Motion</h2>
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

      <h2 id="h-momentum">4.7 Conservation of Momentum</h2>
      <p>
        Firing a gun: by the third law, the force on the bullet (F) and on the gun (−F) act for the same
        interval Δt. By the second law each equals the momentum change of that body. Starting from rest,
        <Formula>{String.raw`\mathbf{p}_g = -\mathbf{p}_b`}</Formula> — <Highlight>the total momentum of the
        isolated (bullet + gun) system is conserved</Highlight>.
      </p>
      <Callout type="important" title="Law of conservation of momentum">
        <FormulaBlock latex={String.raw`\mathbf{p}_A' + \mathbf{p}_B' = \mathbf{p}_A + \mathbf{p}_B`} important />
        The total momentum of an isolated system of interacting particles is conserved. Mutual forces for
        each pair are equal and opposite, so the momentum changes cancel in pairs. This follows from the
        second and third laws together, and holds for <strong>elastic and inelastic</strong> collisions
        alike (elastic collisions additionally conserve kinetic energy).
      </Callout>

      <h3 id="h-recoil">Recoil of a gun</h3>
      <p>
        When a bullet is fired, the gun exerts an <strong>action force</strong> accelerating the bullet forward; by the
        third law the bullet pushes the gun backward with an <strong>equal and opposite reaction force</strong> — the{" "}
        <strong>recoil</strong>. The gun (mass m_g) and bullet (mass m_b) were at rest together, so the total momentum
        of the isolated (gun + bullet) system is zero and stays zero.
      </p>
      <RecoilFigure />
      <p>
        With the bullet moving forward at muzzle speed v_b and the gun recoiling backward at speed v_g, conservation of
        momentum gives:
      </p>
      <Stepper
        steps={[
          { label: "Before firing", description: "Gun and bullet are both at rest — total initial momentum = 0." },
          { label: "After firing", description: "Bullet carries m_b·v_b forward; the gun carries m_g·v_g backward — total final momentum = m_g v_g − m_b v_b." },
          { label: "Conservation", description: "0 = m_g v_g − m_b v_b, so m_b v_b = m_g v_g. The bullet and gun have equal and opposite momenta." },
          { label: "Recoil velocity", description: "v_g = m_b v_b / m_g — the heavier the gun, the slower (gentler) the recoil." },
        ]}
      />
      <FormulaBlock latex={String.raw`v_g = \frac{m_b\,v_b}{m_g}`} important />
      <FormulaBlock latex={String.raw`v_b = \frac{m_g\,v_g}{m_b}`} />

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
                <li><strong>(b)</strong> m_b = 15 g = 0.015 kg, v_b = 100 m s⁻¹, m_g = 2 kg.</li>
                <li>v_g = m_b v_b / m_g = (0.015 × 100) / 2 = 1.5 / 2</li>
                <li><strong>v_g = 0.75 m s⁻¹</strong> (backward).</li>
              </ul>
            </div>,
            <div key={3}>
              <ul className="space-y-1.5 list-none">
                <li>m_b = 0.020 kg, m_g = 100 kg, v_b = 80 m s⁻¹.</li>
                <li>v_g = m_b v_b / m_g = (0.020 × 80) / 100 = 1.6 / 100</li>
                <li><strong>v_g = 0.016 m s⁻¹</strong> (backward).</li>
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

      <h2 id="h-equilibrium">4.8 Equilibrium of a Particle</h2>
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

      <h2 id="h-forces">4.9 Common Forces in Mechanics</h2>
      <p>
        Besides the pervasive (non-contact) gravitational force, the forces common in mechanics are{" "}
        <strong>contact forces</strong>: <Highlight>the component normal to the surfaces in contact is the{" "}
        <strong>normal reaction</strong>, the component parallel to them is <strong>friction</strong>.</Highlight>
        Buoyancy, viscous force and air resistance are also contact forces. Tension (the restoring force in
        a string, assumed constant for a massless string) and the spring force{" "}
        <Formula>{String.raw`F = -kx`}</Formula> (k the force constant, restoring against displacement) round
        out the list.
      </p>
      <Callout type="didyouknow" title="What are contact forces really?">
        All contact forces arise ultimately from <strong>electrical forces</strong> between the charged
        constituents (nuclei and electrons) of the bodies. They are nevertheless treated as distinct forces
        in macroscopic mechanics because their microscopic origin is too complex for practical problems.
      </Callout>

      <h2 id="h-friction">4.9.1 Friction</h2>
      <p>
        When a small force F is applied horizontally to a body on a table, the body stays at rest: the{" "}
        <strong>static friction</strong> fₛ comes into play, self-adjusting to exactly match F up to a limit.
        <Highlight>Static friction opposes <strong>impending</strong> motion (motion that would occur if
        friction were absent)</Highlight>.
      </p>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`f_s \le (f_s)_{\max} = \mu_s N`}</Formula> — independent of the area of contact; μₛ the coefficient of static friction.</li>
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
        Without slipping, ideal rolling suffers <strong>no friction</strong> — the point of contact is
        momentarily at rest. In practice, momentary deformation gives a finite contact area and a rolling
        friction that is far smaller (by 2–3 orders of magnitude) than static or sliding friction — the
        discovery of the wheel. Ball bearings, air cushions and lubricants reduce friction; brakes, walking
        and car acceleration <em>require</em> it.
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

      <h2 id="h-circular">4.10 Circular Motion</h2>
      <p>
        From Chapter 3, <Highlight>a body moving uniformly on a circle of radius R has acceleration v²/R
        toward the centre</Highlight>; the <strong>centripetal force</strong> providing it is:
      </p>
      <FormulaBlock latex={String.raw`f_c = \frac{mv^2}{R}`} important />

      <h3 id="h-level-road">4.10.1 Car on a level circular road</h3>
      <p>
        When a vehicle turns on a circular path it needs a <strong>centripetal force</strong> directed towards the
        centre of the curve. On a flat, level road{" "}
        <Highlight>static friction between the tyres and the road is the only agency that supplies it</Highlight>. For a
        car of mass m turning on a level circular track of radius r:
      </p>
      <LevelRoadFigure />
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

      <h3 id="h-banked-road">4.10.2 Banking of roads</h3>
      <p>
        Friction alone is not a reliable source of centripetal force on curved tracks; at high speed the vehicle is
        likely to <strong>skid and go out of its track</strong>. <strong>Banking of roads</strong> is the process of{" "}
        <Highlight>raising the outer edge of the curved road above its inner edge</Highlight>, so that the normal
        reaction itself contributes a horizontal component towards the centre. The <strong>angle of banking</strong> θ
        is the angle through which the outer edge is raised above the inner edge.
      </p>
      <BankedRoadFigure />
      <p>
        For a vehicle of mass m on a banked curve of radius r, three forces act: the weight W = mg vertically down, the
        normal reaction N perpendicular to the road surface, and friction F acting along the surface. Resolving N and F
        into horizontal and vertical components:
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
      <FormulaBlock latex={String.raw`v_{\max} = \left[rg\,\frac{\mu_s + \tan\theta}{1 - \mu_s\tan\theta}\right]^{1/2}`} important />
      <p>Two special cases follow directly:</p>
      <FormulaCard>
        <ul>
          <li><strong>Case 1 — level road</strong> (no banking, θ = 0°): the formula collapses to v_max = √(μ_s r g) — exactly the level-road result of §4.10.1.</li>
          <li><strong>Case 2 — perfectly smooth banked road</strong> (μ_s = 0): no friction is needed, avoiding the wear and tear of tyres; this defines the <strong>optimum speed</strong>: v_o = √(rg tanθ).</li>
        </ul>
      </FormulaCard>
      <FormulaBlock latex={String.raw`v_o = (rg\tan\theta)^{1/2}`} important />
      <TableCard
        headers={["On a level road", "On a banked road"]}
        rows={[
          { cells: [
            "Friction (static) alone supplies f_c: v² ≤ μₛRg, so vₘₐₓ = √(μₛRg) — independent of the car&rsquo;s mass.",
            "Both N and friction contribute; the optimum speed needs no friction: v₀ = (Rg tanθ)^½; below v₀ friction acts up the slope; parking possible only if tanθ ≤ μₛ.",
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
          <p>A circular racetrack of radius 300 m is banked at 15°, μₛ = 0.2. Find (a) the optimum (friction-free) speed and (b) the maximum permissible speed.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`v_o = (Rg\tan\theta)^{1/2} = (300 \times 9.8 \times \tan 15^\circ)^{1/2} = 28.1\ \text{m s}^{-1}`} important />
          <FormulaBlock latex={String.raw`v_{\max} = \left[300 \times 9.8 \times \frac{0.268 + 0.2}{1 - 0.2 \times 0.268}\right]^{1/2} \approx 38.1\ \text{m s}^{-1}`} important />
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
                <li>(b) Resolve N and friction into components and balance them — see the derivation in §4.10.2: v_max = √[ rg (μ_s + tanθ) / (1 − μ_s tanθ) ].</li>
                <li>(c) v_opt = √(r g tanθ) = √(300 × 9.8 × tan 15°) ≈ <strong>28.08 m s⁻¹</strong>.</li>
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
      <MistakeCard
        mistake="&ldquo;The centripetal force is a new kind of force that acts on round objects.&rdquo;"
        correction="There is no such separate force. Centripetal force is just a NAME for whatever material force (tension, gravity, friction, electrical force) supplies the inward radial acceleration mv²/R. Always look for the real agency behind it."
      />

      <h2 id="h-solving">4.11 Solving Problems in Mechanics</h2>
      <Stepper
        steps={[
          { label: "Diagram", description: "Sketch the assembly of bodies, links and supports." },
          { label: "Choose a system", description: "Pick any convenient part of the assembly and apply the laws to it, including ALL forces on it due to the rest." },
          { label: "Free-body diagram", description: "Draw the system alone with every force on it by the environment (including other agencies). Do not draw forces the system exerts on the environment." },
          { label: "Knowns vs unknowns", description: "Mark forces you are sure of; treat the rest as unknowns to be found from the laws of motion." },
          { label: "Repeat with the third law", description: "If the force on A by B is F in A&rsquo;s diagram, the force on B by A is −F in B&rsquo;s diagram." },
        ]}
      />
      <Expandable title="Example 4.12 — Block and cylinder on a yielding floor" variant="example">
        <ProblemSolution.Problem>
          <p>A wooden block of mass 2 kg rests on a soft floor. An iron cylinder of mass 25 kg is placed on top, and together they descend with acceleration 0.1 m s⁻². What is the action of the block on the floor (a) before and (b) after the floor yields? (g = 10 m s⁻².) Identify the action–reaction pairs.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) At rest, R = 20 N by the first law; the block&rsquo;s action on the floor is 20 N downward.
          </p>
          <FormulaBlock latex={String.raw`270 - R' = 27 \times 0.1 \;\Rightarrow\; R' = 267.3\ \text{N}`} important />
          <p>(b) action of the system on the floor = 267.3 N downward.</p>
          <p>
            Action–reaction pairs are always mutual forces between <em>two different bodies</em>: (gravity on
            the mass by the earth, gravity on the earth by the mass) and (force on the floor by the block/
            system, force on the block/system by the floor). The weight mg and the normal force R are{" "}
            <strong>not</strong> an action–reaction pair — they act on the <em>same</em> body and, as in (b),
            may even differ (270 N vs 267.3 N).
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <KeyPoint>
        Two forces on the same body that happen to be equal and opposite are <em>never</em> an
        action&ndash;reaction pair.
      </KeyPoint>

      <h2 id="h-exercises">Exercises 4.1 – 4.23</h2>
      <Expandable title="Exercises 4.1 – 4.23" variant="exercise">
        <p><em>For numerical simplicity, take g = 10 m s⁻².</em></p>
        <ol>
          <li>Give the magnitude and direction of the net force acting on (a) a drop of rain falling with constant speed, (b) a cork of mass 10 g floating on water, (c) a kite held stationary in the sky, (d) a car moving with constant velocity 30 km/h on a rough road, (e) a high-speed electron in space far from all material objects and free of electric and magnetic fields.</li>
          <li>A pebble of mass 0.05 kg is thrown vertically up. Give the magnitude and direction of the net force on it (a) during upward motion, (b) during downward motion, (c) at the highest point. Does the answer change if thrown at 45°? Ignore air resistance.</li>
          <li>Net force on a stone of mass 0.1 kg (a) just after dropping from a stationary train&rsquo;s window, (b) from a window of a train at uniform 36 km/h, (c) from a window of a train accelerating at 1 m s⁻², (d) lying on the floor of that accelerating train, at rest relative to the train. Neglect air resistance.</li>
          <li>One end of a string of length l joins a particle of mass m to a peg on a smooth table; the particle moves in a circle with speed v. The net force on the particle (toward the centre) is: (i) T, (ii) T − mv²/l, (iii) T + mv²/l, (iv) 0. Choose correctly.</li>
          <li>A constant retarding force of 50 N acts on a 20 kg body moving at 15 m s⁻¹. How long does it take to stop?</li>
          <li>A constant force changes a 3.0 kg body&rsquo;s speed from 2.0 to 3.5 m s⁻¹ in 25 s (direction unchanged). Magnitude and direction of the force?</li>
          <li>A 5 kg body is acted on by two perpendicular forces 8 N and 6 N. Find the magnitude and direction of its acceleration.</li>
          <li>A three-wheeler (vehicle 400 kg + driver 65 kg) moving at 36 km/h is brought to rest in 4.0 s. What average retarding force is needed?</li>
          <li>Rocket with lift-off mass 20,000 kg blasted upward with initial acceleration 5.0 m s⁻². Calculate the initial thrust.</li>
          <li>A 0.40 kg body moving at 10 m s⁻¹ north is subject to a constant 8.0 N force south for 30 s. Predict its position at t = −5 s, 25 s and 100 s (x = 0, t = 0 at the instant of applying the force).</li>
          <li>A truck accelerating at 2.0 m s⁻² (from rest) has a stone dropped from its top (6 m high) at t = 10 s. At t = 11 s find (a) the stone&rsquo;s velocity and (b) its acceleration. Neglect air resistance.</li>
          <li>A 0.1 kg bob on a 2 m string oscillates; its speed at the mean position is 1 m s⁻¹. What is the trajectory if the string is cut at (a) an extreme position, (b) the mean position?</li>
          <li>A 70 kg man stands on a scale in a lift moving (a) up at uniform 10 m s⁻¹, (b) down with acceleration 5 m s⁻², (c) up with acceleration 5 m s⁻². What does the scale read in each? (d) What does it read if the lift falls freely?</li>
          <li>The position–time graph of a 4 kg particle is: straight line (slope 3 m s⁻¹) for t &lt; 0, a parabola for 0 &lt; t &lt; 4 s (velocity 0 → −1.5 m s⁻¹), straight line (slope −1.5 m s⁻¹) for t &gt; 4 s. Find (a) the force for each interval, and (b) the impulse at t = 0 and t = 4 s.</li>
          <li>Masses 10 kg (A) and 20 kg (B) on a smooth surface are tied by a light string. A horizontal force F = 600 N is applied to (i) A, (ii) B. Find the tension in each case.</li>
          <li>8 kg and 12 kg masses hang from a light inextensible string over a frictionless pulley. Find the acceleration and the tension when released.</li>
          <li>A nucleus at rest disintegrates into two smaller nuclei. Show the products must move in opposite directions.</li>
          <li>Two billiard balls (0.05 kg each) moving in opposite directions at 6 m s⁻¹ collide and rebound with the same speed. What impulse is imparted to each ball?</li>
          <li>A shell of mass 0.020 kg is fired from a 100 kg gun with muzzle speed 80 m s⁻¹. Recoil speed of the gun?</li>
          <li>A batsman deflects a ball (0.15 kg, 54 km/h) by 45° without changing speed. Impulse imparted to the ball?</li>
          <li>A 0.25 kg stone whirled on a 1.5 m string at 40 rev/min in a horizontal plane. Tension? Maximum speed if the string withstands 200 N?</li>
          <li>If in Exercise 4.21 the speed exceeds the maximum and the string breaks, the stone: (a) moves radially outward, (b) flies off tangentially, (c) flies off at some angle with the tangent. Choose correctly.</li>
          <li>Explain why (a) a horse cannot pull a cart in empty space, (b) passengers are thrown forward when a bus stops suddenly, (c) it is easier to pull a lawn mower than to push it, (d) a cricketer draws his hands back while holding a catch.</li>
        </ol>
        <Expandable title="Answer Key — Exercises 4.1 – 4.23">
          <ol>
            <li>Zero net force in all five cases.</li>
            <li>mg = 0.5 N, vertically downward, in all three phases; unchanged for a 45° throw (weight is always mg downward).</li>
            <li>(a) 1 N downward; (b) 1 N downward; (c) 1 N downward (just after release there is no horizontal force on the stone — force is not carried from history); (d) 0.1 N horizontally in the direction of the train&rsquo;s acceleration.</li>
            <li>(i) T — the tension is the net force providing mv²/l.</li>
            <li>t = mv/F = (20 × 15)/50 = 6 s.</li>
            <li>0.18 N in the direction of motion (F = 3.0 × 1.5/25).</li>
            <li>F = 10 N, a = 2 m s⁻², at tan⁻¹(6/8) ≈ 37° with the 8 N force.</li>
            <li>F = 465 × 2.5 ≈ 1.16 × 10³ N (retarding).</li>
            <li>Thrust = m(a + g) = 20,000 × 15 = 3.0 × 10⁵ N.</li>
            <li>a = −20 m s⁻² (south); x = 10t − 10t²: t = −5 s → −300 m; t = 25 s → −6000 m; t = 100 s → −99,000 m (99 km south).</li>
            <li>(a) vₓ = 20 m s⁻¹, v_y = 10 m s⁻¹ → v ≈ 22 m s⁻¹ at ≈ 63° below horizontal; (b) a = g = 10 m s⁻² downward.</li>
            <li>(a) vertical free fall; (b) a parabola (projectile).</li>
            <li>(a) 700 N; (b) 350 N; (c) 1050 N; (d) 0.</li>
            <li>(a) F = 0 (t &lt; 0, t &gt; 4 s); F = 4 × (−0.375) = −1.5 N (0 &lt; t &lt; 4 s); (b) impulse at t = 0: 4(0 − 3) = −12 N s; at t = 4 s: 4(−1.5 − 0) = −6 N s.</li>
            <li>a = 20 m s⁻²; (i) T = 20 × 20 = 400 N; (ii) T = 10 × 20 = 200 N.</li>
            <li>a = 2 m s⁻²; T = 96 N.</li>
            <li>Momentum conservation with zero initial momentum demands p₁ + p₂ = 0 — equal and opposite momenta along the same line.</li>
            <li>Impulse on each = 0.05 × 12 = 0.6 N s.</li>
            <li>v = 0.020 × 80/100 = 0.016 m s⁻¹.</li>
            <li>J = 2mu sin(45°/2) = 2 × 0.15 × 15 × sin 22.5° ≈ 1.7 N s.</li>
            <li>T = mω²r = 0.25 × (4.19)² × 1.5 ≈ 6.6 N; vₘₐₓ = √(200 × 1.5/0.25) ≈ 34.6 m s⁻¹.</li>
            <li>(b) — the stone flies off tangentially (no force, uniform velocity in the last velocity direction).</li>
            <li>(a) no external forward force exists in empty space (the horse–cart forces cancel); (b) inertia of the upper body; (c) pulling lowers N (hence friction f ≤ μN), pushing raises it; (d) longer contact time ⇒ smaller impulsive force.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <MetricCard
        label="1 N"
        value="1 kg m s⁻²"
        unit="SI unit of force"
        trend="neutral"
        description="The force that gives a 1 kg mass an acceleration of 1 m s⁻² — the constant k in F = kma is set to 1."
      />
      <Expandable title="Key formulas &amp; facts — one page">
        <ul>
          <li>Rest and uniform linear motion are equivalent states: zero net force ⟺ zero acceleration (1st law).</li>
          <li>Momentum p = mv; F = dp/dt = ma (2nd law); components Fₓ = maₓ, etc.</li>
          <li>Impulse = FΔt = Δp — measurable when force/time are unknowable.</li>
          <li>Third law: F_AB = −F_BA — forces occur in pairs, act on different bodies, simultaneous, no cause–effect.</li>
          <li>Conservation of momentum holds for isolated systems, elastic or inelastic.</li>
          <li>Equilibrium: F₁ + F₂ + F₃ = 0 (closed force triangle/polygon).</li>
          <li>Static friction fₛ ≤ μₛN (self-adjusting, opposes impending motion); kinetic fₖ = μₖN; μₖ &lt; μₛ.</li>
          <li>Centripetal force f_c = mv²/R; car on level road vₘₐₓ = √(μₛRg); banked road vₘₐₓ = √[Rg(μₛ + tanθ)/(1 − μₛ tanθ)], optimum speed v₀ = (Rg tanθ)^½.</li>
          <li>Recoil of a gun: v_g = m_b v_b / m_g — bullet and gun carry equal and opposite momenta.</li>
          <li>Free-body diagrams: draw the system, include every force ON it, then apply the laws.</li>
          <li>Friction is empirical, not fundamental; contact forces are electrical in origin.</li>
        </ul>
      </Expandable>
      <Expandable title="Last-minute recall — formulas only">
        <ul>
          <li><Formula>{String.raw`\mathbf{F} = \frac{\mathrm{d}\mathbf{p}}{\mathrm{d}t} = m\mathbf{a}`}</Formula>, <Formula>{String.raw`\mathbf{p} = m\mathbf{v}`}</Formula></li>
          <li><Formula>{String.raw`\mathbf{F}_{AB} = -\mathbf{F}_{BA}`}</Formula>, <Formula>{String.raw`\mathbf{p}_A' + \mathbf{p}_B' = \mathbf{p}_A + \mathbf{p}_B`}</Formula></li>
          <li><Formula>{String.raw`f_s \le \mu_s N`}</Formula>, <Formula>{String.raw`f_k = \mu_k N`}</Formula>, <Formula>{String.raw`F = -kx`}</Formula></li>
          <li><Formula>{String.raw`f_c = \frac{mv^2}{R}`}</Formula>, <Formula>{String.raw`v_{\max} = \sqrt{\mu_s R g}`}</Formula>, <Formula>{String.raw`v_o = (Rg\tan\theta)^{1/2}`}</Formula></li>
          <li><Formula>{String.raw`v_g = \frac{m_b v_b}{m_g}`}</Formula>, <Formula>{String.raw`v_{\max} = \left[Rg\,\frac{\mu_s + \tan\theta}{1 - \mu_s\tan\theta}\right]^{1/2}`}</Formula></li>
        </ul>
      </Expandable>
    </>
  );
}