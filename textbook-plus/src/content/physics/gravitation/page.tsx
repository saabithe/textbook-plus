import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Derivation } from "@/components/content/process/Derivation";
import { GravityGGraph } from "@/components/content/physics/GravityGGraph";
import { UniversalLawExplorer } from "@/components/content/physics/UniversalLawExplorer";

export default function GravitationChapter() {
  return (
    <>
      <h2 id="h-universal-law">7.1 Universal Law of Gravitation</h2>
      <Callout type="important" title="Newton's Universal Law of Gravitation">
        Every body in the universe attracts every other body with a force which is directly proportional to
        the product of their masses and inversely proportional to the square of the distance between them.
      </Callout>
      <div className="grid items-start gap-4 lg:grid-cols-2">
        <div>
          <p>The force on a point mass m₂ due to another point mass m₁ has magnitude</p>
          <FormulaBlock latex={String.raw`F = G\,\frac{m_1 m_2}{r^2}`} important />
        </div>
        <UniversalLawExplorer />
      </div>

      <KeyPoint title="Properties of gravitational force">
        <ol className="space-y-1.5">
          <li>
            <strong>Always attractive</strong> — gravitational force is never repulsive; it pulls every mass
            towards every other.
          </li>
          <li>
            <strong>Very weak</strong> — G = 6.67 × 10⁻¹¹ is tiny, so gravitational forces are usually far
            smaller than everyday forces (a magnet, friction, or electrostatic attraction easily overpowers
            them).
          </li>
          <li>
            <strong>Long range</strong> — it extends to infinity (<Formula>{String.raw`r \to \infty`}</Formula>),
            weakening as 1/r².
          </li>
          <li>
            <strong>Independent of the intervening medium</strong> — the force between two bodies is exactly
            the same through vacuum, air, water, or glass.
          </li>
        </ol>
      </KeyPoint>

      <Derivation
        title="Board exam — mass doubled, distance halved (F′ = 8F)"
        highlightResult
        steps={[
          {
            label: "Write the original force",
            latex: String.raw`F = G\,\frac{m_1 m_2}{r^2}`,
          },
          {
            label: "New mass and new separation",
            latex: String.raw`m_1' = 2 m_1, \qquad r' = \frac{r}{2}`,
            note: "One mass is doubled and the separation is halved.",
          },
          {
            label: "Substitute into the universal law",
            latex: String.raw`F' = G\,\frac{(2 m_1)\, m_2}{(r/2)^2} = G\,\frac{2 m_1 m_2}{r^2/4}`,
            note: "Halving r squares to ¼ in the denominator, which multiplies F by 4.",
          },
          {
            label: "Simplify",
            latex: String.raw`F' = 8\,G\,\frac{m_1 m_2}{r^2} = 8F`,
            note: "Doubling a mass alone gives 2F; halving the distance alone gives 4F; together → 8F.",
          },
        ]}
      />

      <Expandable variant="exercise" title="Quick questions — the universal law">
        <ExerciseQa
          questions={[
            <>Who formulated the universal law of gravitation?</>,
            <>
              Two bodies attract each other with force F at a separation of 1 m. If the distance is reduced to
              0.5 m, the force becomes ___
            </>,
            <>
              If the mass of the earth were doubled (radius unchanged), the acceleration due to gravity on its
              surface would ___
            </>,
            <>
              The moon revolves at distance r with force F. If the moon were twice as far from the earth, the
              gravitational force on it would be ___
            </>,
            <>
              An astronaut measures the gravitational force between two masses on the earth. If the same two
              masses at the same separation were taken to the moon, the force between them would be ___
            </>,
          ]}
          answers={[
            <>
              <strong>Sir Isaac Newton</strong> formulated the universal law of gravitation (1687).
            </>,
            <>
              <strong>4F</strong> — force ∝ 1/distance², so halving the distance multiplies the force by 4.
            </>,
            <>
              <strong>Double</strong> — g = GM/R² is directly proportional to the earth&rsquo;s mass M.
            </>,
            <>
              <strong>F/4</strong> — force inversely proportional to the square of the distance.
            </>,
            <>
              <strong>Exactly the same</strong> — the force depends only on the two masses and their
              separation, not on the location; G is universal.
            </>,
          ]}
        />
      </Expandable>

      <h2 id="h-g-constant">7.2 The Gravitational Constant</h2>
      <p>
        The constant G fixes the <em>strength</em> of gravity in the universal law and is the same
        everywhere in the universe — for every pair of bodies:
      </p>
      <div className="my-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-violet-500/25 bg-violet-500/[0.07] px-4 py-4 shadow-sm">
          <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300">
            Numerical value
          </p>
          <p className="text-lg font-black text-foreground">6.67 × 10⁻¹¹</p>
        </div>
        <div className="rounded-2xl border border-violet-500/25 bg-violet-500/[0.07] px-4 py-4 shadow-sm">
          <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300">
            Unit (SI)
          </p>
          <p className="text-lg font-black text-foreground">N m² kg⁻²</p>
        </div>
        <div className="rounded-2xl border border-violet-500/25 bg-violet-500/[0.07] px-4 py-4 shadow-sm">
          <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300">
            Dimensions
          </p>
          <p className="text-lg font-black text-foreground">[M⁻¹ L³ T⁻²]</p>
        </div>
      </div>

      <h2 id="h-g-earth">7.3 Acceleration due to Gravity of the Earth</h2>
      <Callout type="important" title="Definition of g">
        <p>
          <Highlight>
            The acceleration with which a body falls freely towards the earth, under the influence of the
            earth&rsquo;s gravity alone
          </Highlight>
          , is called the <strong>acceleration due to gravity</strong> and is denoted by g. Its average value
          on the earth&rsquo;s surface is <strong>g ≈ 9.8 m s⁻²</strong>. It equals the gravitational force on
          a unit mass:
        </p>
        <Formula>{String.raw`g = \frac{F}{m}`}</Formula>
      </Callout>
      <p>
        Imagine the earth as a sphere of many concentric shells, the smallest at the centre and the largest
        at the surface.
      </p>
      <Derivation
        title="Derivation of g from the universal law"
        steps={[
          {
            label: "Universal law applied to a mass m at distance r from the earth",
            latex: String.raw`F = \frac{G\,M\,m}{r^2}`,
            note: "M is the earth's mass; the force is along the line joining the mass to the earth's centre.",
          },
          {
            label: "A uniform sphere acts like a point mass at its centre",
            latex: String.raw`F = \frac{G\,M\,m}{r^2}, \quad r \geq R`,
            note:
              "For a point outside the earth every concentric shell attracts as if its mass were at the common centre, so the whole earth behaves as a point mass M at the centre.",
          },
          {
            label: "Weight of a body on the surface (r = R)",
            latex: String.raw`mg = \frac{G\,M\,m}{R^2}`,
            note: "Newton's second law: the gravitational force on a body of mass m on the surface is its weight.",
          },
          {
            label: "Cancel m and solve for g",
            latex: String.raw`g = \frac{G\,M}{R^2}`,
            note: "g depends only on the earth (its mass and radius), not on the falling body.",
          },
        ]}
        highlightResult
      />
      <Callout type="important" title="Acceleration due to gravity of the earth">
        <Formula>{String.raw`g = \frac{F}{m} = \frac{G\,M}{R^2}\approx 9.8\;\mathrm{m\,s^{-2}}`}</Formula> (7.12)
        — g is readily measurable and R is known, so measuring G fixes the earth&rsquo;s mass M:{" "}
        <Formula>{String.raw`M = \frac{g\,R^2}{G}`}</Formula>.
      </Callout>

      <h2 id="h-g-below-above">7.4 Acceleration due to Gravity below and above the Surface of Earth</h2>
      <h3>At a height h above the surface</h3>
      <Derivation
        title="Derivation of g(h) — acceleration at a height h"
        steps={[
          {
            label: "Force at distance R + h from the centre",
            latex: String.raw`F(h) = \frac{G M m}{(R + h)^2}`,
            note: "The point mass is outside the earth, so the whole earth still acts as a point mass M at the centre.",
          },
          {
            label: "Acceleration due to gravity at height h",
            latex: String.raw`g(h) = \frac{F(h)}{m} = \frac{G M}{(R+h)^2}`,
          },
          {
            label: "Compare with g on the surface (g = GM/R²)",
            latex: String.raw`\frac{g(h)}{g} = \frac{R^2}{(R+h)^2} = \left(1+\frac{h}{R}\right)^{-2}`,
          },
          {
            label: "Binomial expansion for h « R",
            latex: String.raw`\left(1+\frac{h}{R}\right)^{-2} \approx 1 - \frac{2h}{R}`,
            note: "This is clearly less than 1, so g(h) < g on the surface.",
          },
          {
            label: "Result",
            latex: String.raw`g(h) \approx g\left(1 - \frac{2h}{R}\right)`,
          },
        ]}
      />
      <FormulaBlock latex={String.raw`g(h) = g\left(1+\frac{h}{R}\right)^{-2} \approx g\left(1-\frac{2h}{R}\right)`} important />

      <h3>At a depth d below the surface</h3>
      <p>
        <Highlight>The shell exerts no force (inside a uniform shell); the inner sphere behaves as a point
        mass at the centre</Highlight>
        :
      </p>
      <Derivation
        title="Derivation of g(d) — acceleration at a depth d"
        steps={[
          {
            label: "The earth splits into an inner sphere and a shell",
            latex: String.raw`R \to (R - d) + d`,
            note: "Only the sphere of radius R − d contributes; the outer shell of thickness d exerts no force on a point inside it.",
          },
          {
            label: "Mass of the inner sphere (uniform density)",
            latex: String.raw`\frac{M'}{M} = \frac{(R - d)^3}{R^3}, \qquad M' = M\left(1-\frac{d}{R}\right)^3`,
          },
          {
            label: "Force on the mass m at depth d",
            latex: String.raw`F(d) = \frac{G M' m}{(R-d)^2} = \frac{G M m}{R^3}\,(R - d)`,
          },
          {
            label: "Acceleration due to gravity at depth d",
            latex: String.raw`g(d) = \frac{F(d)}{m} = \frac{G M}{R^2}\left(1-\frac{d}{R}\right)`,
          },
          {
            label: "Result",
            latex: String.raw`g(d) = g\left(1-\frac{d}{R}\right)`,
          },
        ]}
      />
      <FormulaBlock latex={String.raw`g(d) = \frac{G M}{R^2}\left(1-\frac{d}{R}\right) = g\left(1-\frac{d}{R}\right)`} important />
      <KeyPoint title="g is maximum at the surface">
        The acceleration due to gravity of the earth is maximum on its surface and{" "}
        <strong>decreases whether you go up or go down</strong>.
      </KeyPoint>

      <h3>Variation with the shape of the earth</h3>
      <p>
        The earth is not a perfect sphere — it is slightly <strong>flattened at the poles</strong> and bulges
        at the equator (an oblate spheroid). The polar radius is about 21 km smaller than the equatorial
        radius, and since
      </p>
      <FormulaBlock latex={String.raw`g = \frac{GM}{R^2}`} />
      <p>
        <Highlight>g is maximum at the poles and minimum at the equator</Highlight>:{" "}
        g<sub>pole</sub> ≈ 9.83 m s⁻² versus g<sub>equator</sub> ≈ 9.78 m s⁻².
      </p>

      <GravityGGraph />

      <Expandable variant="exercise" title="Board numericals — variations of g">
        <ExerciseQa
          questions={[
            <>
              At what height above the earth&rsquo;s surface (R = 6371 km) is g reduced to 8.57 m
              s⁻²? (Board, class work: h = 400 km.)
            </>,
            <>
              How does g compare at a height h = R above the surface? Compute g(h).
            </>,
            <>
              At what height is the value of g halved? (Answer in terms of R.)
            </>,
            <>
              What is g at a depth of 400 km below the surface (R = 6371 km)?
            </>,
            <>
              What is g at the centre of the earth? What would a body weigh there?
            </>,
            <>
              At what depth does g equal its value at a height of 50 km above the surface?
            </>,
          ]}
          answers={[
            <>
              Using <Formula>{String.raw`g_h = g\left(1-\frac{2h}{R}\right)`}</Formula> with 2h/R{" "}
              = 800/6371 ≈ 0.1256: g_h = 9.8 × (1 − 0.1256) = 9.8 × 0.8744 ≈ <strong>8.57 m s⁻²</strong>.
              Height h = 400 km above ground.
            </>,
            <>
              At h = R, r = 2R, so the exact formula gives g<sub>h</sub> = g(R/2R)² = g/4 = 9.8/4 = <strong>2.45 m s⁻²</strong>.
            </>,
            <>
              Solve g/2 = g(1 − 2h/R): 1/2 = 1 − 2h/R → h = R/4 (approx). The
              exact inverse-square answer is h = (√2 − 1)R ≈ <strong>0.414 R</strong>.
            </>,
            <>
              g<sub>d</sub> = g(1 − d/R) = 9.8(1 − 400/6371) = 9.8 × 0.9372 ≈{" "}
              <strong>9.18 m s⁻²</strong>.
            </>,
            <>
              At the centre d = R: g<sub>d</sub> = g(1 − 1) = <strong>0 m s⁻²</strong>. A body
              there is <strong>weightless</strong> — apparent weight zero (exactly at the centre every pull is
              balanced).
            </>,
            <>
              Depth and height give the same g when g(1 − d/R) = g(1 − 2h/R), i.e. d =
              2h = 2 × 50 = <strong>100 km</strong>. So g at 100 km depth ≈ g at 50 km height.
            </>,
          ]}
        />
      </Expandable>

      <Expandable variant="exercise" title="Quick questions — acceleration due to gravity">
        <ExerciseQa
          questions={[
            <>Which of these does <em>not</em> affect the value of g: the earth&rsquo;s mass, the earth&rsquo;s radius, the mass of the falling body, altitude? </>,
            <>Where is g a maximum on the earth, and where is it a minimum at the surface? </>
            ,
            <>If the earth had twice its present radius but the same mass, how would g change?</>,
            <>Why does g decrease as we go deeper into the earth?</>,
            <>
              A person weighs 70 kgf at the surface. What is his weight at a height h = R?
            </>,
            <>
              A planet has g = 2.45 m s⁻² on its surface and a radius equal to the earth&rsquo;s. How does its
              mass compare with the earth&rsquo;s?
            </>,
          ]}
          answers={[
            <>
              <strong>The mass of the falling body</strong> — g = GM/R² depends only on
              the earth (its mass and radius), never on the body that falls.
            </>,
            <>
              g is maximum at the <strong>poles</strong> (g ≈ 9.83 m s⁻²) and minimum at the{" "}
              <strong>equator</strong> (g ≈ 9.78 m s⁻²) — the flattening makes R<sub>pole</sub> &lt; R
              <sub>equator</sub>.
            </>,
            <>
              g ∝ 1/R², so doubling R would divide g by <strong>4</strong>: g&prime; = 9.8/4 = 2.45 m s⁻².
            </>,
            <>
              At depth d, only the sphere of radius R − d contributes (the outer shell exerts no force). Its
              mass shrinks as (1 − d/R)³, so g<sub>d</sub> = g(1 − d/R) — a straight-line decrease to 0 at the
              centre.
            </>,
            <>
              At h = R, g&prime; = g/4, so weight W&prime; = W/4 = 70/4 ={" "}
              <strong>17.5 kgf</strong>.
            </>,
            <>
              g&prime;/g = 2.45/9.8 = 1/4. Same radius ⟹ M&prime; = (g&prime;/g)·M = M/4 — the planet&rsquo;s mass is <strong>one-fourth</strong> of the earth&rsquo;s.
            </>,
          ]}
        />
      </Expandable>

      <h2 id="h-potential-energy">7.5 Gravitational Potential Energy</h2>
      <p>
        <Highlight>Gravitation is a conservative force, so a potential energy function exists.</Highlight>{" "}
        Near the earth&rsquo;s surface (F ≈ mg constant), lifting a particle from height h₁ to h₂ does work
      </p>
      <FormulaBlock latex={String.raw`W_{12} = mg(h_2 - h_1),\qquad W(h) = mgh + W_0`} />
      <p>
        so W<sub>12</sub> = W(h₂) − W(h₁) and only <em>differences</em> matter. For arbitrary distances the
        force F = GMm/r² is no longer constant; the work done lifting the particle from r₁ to
        r₂ is
      </p>
      <FormulaBlock latex={String.raw`W_{12} = \int_{r_1}^{r_2} G\,\frac{M m}{r^2}\,dr = -G\,M\,m\left(\frac{1}{r_2}-\frac{1}{r_1}\right)`} />
      <p>
        <Highlight>We may therefore associate a potential energy at distance r, with a constant choosing the
        zero:</Highlight>
      </p>
      <FormulaBlock latex={String.raw`W(r) = -\frac{G M m}{r} + W_1`} />
      <Callout type="important" title="Convention: zero potential energy at infinity">
        Setting W₁ = 0 means the potential energy at a point is the work done in bringing the particle from
        infinity to that point. For two masses m₁ and m₂ at separation r:
        <Formula>{String.raw`V = -\frac{G\,m_1 m_2}{r}`}</Formula> (V = 0 as r → ∞). The total potential
        energy of a system of particles is the sum over all possible pairs (superposition principle).
      </Callout>

      <Expandable variant="example" title="Example 7.3">
        <ProblemSolution.Problem>
            Find the potential energy of a system of four particles placed at the vertices of a square of
            side l. Also obtain the potential at the centre of the square.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Consider four masses, each of mass m, at the corners of a square of side l. There are four
              mass pairs at distance l and two diagonal pairs at distance l√2. Hence
            </p>
            <FormulaBlock latex={String.raw`W = -4\,\frac{Gm^2}{l} - 2\,\frac{Gm^2}{\sqrt{2}\,l} = -\frac{Gm^2}{l}\left(4+\sqrt{2}\right) = -5.41\,\frac{Gm^2}{l}`} />
            <p>
              The gravitational potential at the centre of the square (distance r = l/√2 from each mass) is
            </p>
            <FormulaBlock latex={String.raw`U(r) = -4\,\frac{Gm}{l/\sqrt{2}} = -\frac{4\sqrt{2}\,Gm}{l} = -5.66\,\frac{Gm}{l}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-escape">7.6 Escape Speed</h2>
      <p>
        Can we throw an object with such a high initial speed that it does not fall back to the earth? Energy
        conservation answers the question. Suppose the object reaches infinity with speed V<sub>f</sub>; its
        total energy at infinity is ½mV<sub>f</sub>² + W₁, and energy conservation gives
      </p>
      <FormulaBlock latex={String.raw`\frac{1}{2}mV_f^2 = \frac{1}{2}mV_i^2 - \frac{G\,m\,M}{h + R}`} />
      <p>
        The RHS must be non-negative for the object to reach infinity, so the minimum initial speed
        corresponds to the LHS being zero:
      </p>
      <FormulaBlock latex={String.raw`\frac{1}{2}m\left(V_i\right)_{\min}^2 = \frac{G\,m\,M}{h+R} \quad\Rightarrow\quad \left(V_i\right)_{\min} = \sqrt{\frac{2GM}{h+R}}`} />
      <p>From the surface of the earth (h = 0), using g = GM/R²:</p>
      <FormulaBlock latex={String.raw`V_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR} \approx 11.2\,\mathrm{km\,s^{-1}}`} important />
      <p>
        <Highlight>
          This is the <strong>escape speed</strong> (loosely, escape velocity) — about 11.2 km/s from the
          earth&rsquo;s surface
        </Highlight>
        . The same relation applies to the moon using its surface gravity and radius:
        the escape speed of the moon is only 2.3 km/s, about five times smaller.{" "}
        <Highlight>
          This is why the moon has no atmosphere — gas molecules with speeds above 2.3 km/s escape its pull.
        </Highlight>
      </p>

      <Expandable variant="example" title="Example 7.4">
        <ProblemSolution.Problem>
            Two uniform solid spheres of equal radii R, but mass M and 4M, have a centre-to-centre separation
            6R and are held fixed. A projectile of mass m is projected from the surface of the sphere of mass
            M directly towards the centre of the second sphere. Obtain an expression for the minimum speed v
            of the projectile so that it reaches the surface of the second sphere.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Define the <strong>neutral point N</strong> as the position where the two opposing forces cancel
              exactly. If ON = r, then
            </p>
            <FormulaBlock latex={String.raw`\frac{GMm}{r^2} = \frac{G(4M)m}{(6R-r)^2} \quad\Rightarrow\quad (6R-r)^2 = 4r^2`} />
            <FormulaBlock latex={String.raw`6R-r = \pm 2r \quad\Rightarrow\quad r = 2R \;\text{ or }\; r = -6R`} />
            <p>
              The root r = −6R is unphysical, so the neutral point is at ON = r = 2R. It suffices to project
              the particle with a speed that enables it to just reach N — thereafter the greater pull of 4M
              takes over. The mechanical energy at the surface of M is
            </p>
            <FormulaBlock latex={String.raw`E_i = \frac{1}{2}mv^2 - \frac{GMm}{R} - \frac{G(4M)m}{5R} = \frac{1}{2}mv^2 - \frac{9}{5}\frac{GMm}{R}`} />
            <p>
              At the neutral point the speed approaches zero, so the energy is purely potential:
            </p>
            <FormulaBlock latex={String.raw`E_N = -\frac{GMm}{2R} - \frac{G(4M)m}{4R} = -\frac{3}{2}\frac{GMm}{R}`} />
            <p>Conservation of mechanical energy E<sub>i</sub> = E<sub>N</sub> gives</p>
            <FormulaBlock latex={String.raw`\frac{1}{2}v^2 = \left(\frac{9}{5}-\frac{3}{2}\right)\frac{GM}{R} = \frac{3}{10}\frac{GM}{R}`} important />
            <FormulaBlock latex={String.raw`v = \left(\frac{3GM}{5R}\right)^{1/2}`} important />
            <p>
              Note: the speed of the projectile is zero at N but non-zero when it strikes the heavier sphere
              4M — that calculation is left as an exercise.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-satellites">7.7 Earth Satellites</h2>
      <p>
        Earth satellites are objects that revolve around the earth; their motion is very similar to that of
        planets around the Sun, so Kepler&rsquo;s laws apply to them equally.{" "}
        <Highlight>
          The moon — the only natural satellite — has a near-circular orbit with a period of about 27.3 days
        </Highlight>
        , roughly equal to its rotation period about its own axis.
      </p>
      <p>
        Consider a satellite of mass m in a circular orbit of radius R + h around the earth. The
        required centripetal force F = mV²/(R+h) is supplied by gravity F = GmM
        /(R+h)². Equating and cancelling m:
      </p>
      <FormulaBlock latex={String.raw`V = \sqrt{\frac{G\,M}{R + h}}`} important />
      <p>
        The orbital speed <strong>decreases as h increases</strong>.{" "}
        <Highlight>For h = 0, V(0) = √(GM/R) = √(gR) ≈ 7.9 km s⁻¹</Highlight>
        . The time period of revolution is
      </p>
      <FormulaBlock latex={String.raw`T = \frac{2\pi(R+h)}{V} = 2\pi\,\frac{(R+h)^{3/2}}{\sqrt{GM}}`} />
      <FormulaBlock latex={String.raw`T^2 = k\,(R+h)^3,\qquad k = \frac{4\pi^2}{GM}`} />
      <p>
        — Kepler&rsquo;s law of periods as applied to satellites. For satellites very close to the surface
        (h negligible compared with R),
      </p>
      <FormulaBlock latex={String.raw`T_0 = 2\pi\sqrt{\frac{R}{g}} \approx 85\;\text{minutes}`} />
      <KeyPoint title="Orbits and period">
        Equation T² = k(R+h)³ also holds for <strong>elliptical</strong> orbits if
        (R+h) is replaced by the semi-major axis of the ellipse — the earth then lies at one of
        its foci.
      </KeyPoint>
      <MistakeCard
        mistake="Weightlessness in orbit means gravity has vanished at that height."
        correction="Gravity at orbital altitude is nearly the same as on the earth's surface; the astronaut and the satellite are both in free fall, so the astronaut feels no supporting reaction."
      />
      <MistakeCard
        mistake="Linear momentum is conserved for a body moving under another body's gravitational influence."
        correction="Angular momentum and total mechanical energy are conserved; the linear momentum of the single body is not (it is continuously accelerated by the central force)."
      />

      <Expandable variant="example" title="Example 7.5">
        <ProblemSolution.Problem>
            The planet Mars has two moons, Phobos and Deimos. (i) Phobos has a period 7 hours 39 minutes and
            an orbital radius of 9.4 × 10³ km. Calculate the mass of Mars. (ii) Assume earth and Mars move in
            circular orbits around the sun, with the Martian orbit being 1.52 times the orbital radius of the
            earth. What is the length of the Martian year in days?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>(i) Using T² = 4π²r³/(GM) with the sun&rsquo;s mass replaced by the Martian mass M<sub>m</sub>:</p>
            <FormulaBlock latex={String.raw`M_m = \frac{4\pi^2 r^3}{G T^2} = \frac{4(3.14)^2(9.4\times10^6)^3}{(6.67\times10^{-11})(459\times60)^2} = 6.48\times10^{23}\,\mathrm{kg}`} important />
            <p>(ii) Kepler&rsquo;s third law applied to the two orbits:</p>
            <FormulaBlock latex={String.raw`\frac{T_M^2}{T_E^2} = \frac{R_{MS}^3}{R_{ES}^3}\;\Rightarrow\; T_M = (1.52)^{3/2}\times 365 = 684\;\text{days}`} important />
            <p>
              (The orbits of all planets except Mercury and Mars are very close to circular; for the earth
              b/a = 0.99986.)
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="example" title="Example 7.6">
        <ProblemSolution.Problem>
            Weighing the Earth: g = 9.81 m s⁻², R = 6.37 × 10⁶ m, the distance to the moon r =
            3.84 × 10⁸ m, and the moon&rsquo;s period of revolution is 27.3 days. Obtain the mass of the
            earth M in two different ways.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Method 1 — from the surface value of g:</p>
            <FormulaBlock latex={String.raw`M = \frac{g R^2}{G} = \frac{9.81\times(6.37\times10^6)^2}{6.67\times10^{-11}} = 5.97\times10^{24}\,\mathrm{kg}`} />
            <p>Method 2 — treating the moon as an earth satellite, via Kepler&rsquo;s third law:</p>
            <FormulaBlock latex={String.raw`M = \frac{4\pi^2 r^3}{G T^2} = \frac{4(3.14)^2(3.84\times10^8)^3}{(6.67\times10^{-11})(27.3\times24\times60\times60)^2} = 6.02\times10^{24}\,\mathrm{kg}`} />
            <p>
              Both methods yield almost the same answer — the difference between them is less than 1%.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="example" title="Example 7.7">
        <ProblemSolution.Problem>
            Express the constant k of Eq. (7.38) in days and kilometres, given k = 10⁻¹³ s² m⁻³. The moon is
            at a distance of 3.84 × 10⁵ km from the earth. Obtain its time period of revolution in days.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Convert seconds to days and metres to kilometres:</p>
            <FormulaBlock latex={String.raw`k = 10^{-13}\,\frac{\mathrm{s}^2}{\mathrm{m}^3} = \frac{10^{-13}}{(24\times60\times60)^2\,/\,(1000)^3}\,\frac{\mathrm{d}^2}{\mathrm{km}^3} = 1.33\times10^{-14}\,\mathrm{d^2\,km^{-3}}`} />
            <p>Using T² = kr³ with r = 3.84 × 10⁵ km:</p>
            <FormulaBlock latex={String.raw`T^2 = (1.33\times10^{-14})(3.84\times10^5)^3\quad\Rightarrow\quad T = 27.3\;\text{days}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-satellite-energy">7.8 Energy of an Orbiting Satellite</h2>
      <Stepper
        steps={[
          {
            label: "Kinetic energy",
            description:
              "K = ½mV² with V² = GM/(R+h), giving K = G m M / 2(R+h) — always positive.",
          },
          {
            label: "Potential energy",
            description:
              "With zero potential at infinity, V = −G m M / (R+h) — negative.",
          },
          {
            label: "Total energy",
            description:
              "E = K + V = −G m M / 2(R+h). In magnitude the KE is half the PE, and the total energy is negative.",
          },
        ]}
      />
      <FormulaBlock latex={String.raw`K = \frac{G m M}{2(R+h)},\qquad V = -\frac{G m M}{R+h},\qquad E = -\frac{G m M}{2(R+h)}`} important />
      <p>
        In an elliptical orbit both K and V vary from point to point, but the <strong>total energy remains
        constant and negative</strong>. This is as expected: if the total energy were positive or zero the
        object would escape to infinity, but{" "}
        <Highlight>satellites are always at finite distance, so their energy is negative</Highlight>.
      </p>
      <MistakeCard
        mistake="A satellite's negative total energy means its kinetic energy is negative."
        correction="E = −GMm/2r is negative even though K = +GMm/2r and V = −GMm/r; in magnitude |V| = 2K and E = −K. Negative total energy is what makes the orbit bound."
      />

      <Expandable variant="example" title="Example 7.8">
        <ProblemSolution.Problem>
            A 400 kg satellite is in a circular orbit of radius 2R about the earth. How much
            energy is required to transfer it to a circular orbit of radius 4R? What are the
            changes in the kinetic and potential energies?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              In a circular orbit r = 2R: E = −GmM/(2r), so
            </p>
            <FormulaBlock latex={String.raw`E_i = -\frac{G m M}{4R},\qquad E_f = -\frac{G m M}{8R}`} />
            <p>The change in total energy is</p>
            <FormulaBlock
              latex={String.raw`\Delta E = E_f - E_i = \frac{G m M}{8R} = \frac{1}{8}\,m g R = \frac{400\times9.8\times6.4\times10^6}{8}`}
            />
            <FormulaBlock latex={String.raw`\Delta E = 3.13\times10^9\;\mathrm{J}`} important />
            <p>The kinetic energy is reduced and mimics ΔE:</p>
            <FormulaBlock latex={String.raw`\Delta K = K_f - K_i = -3.13\times10^9\;\mathrm{J}`} />
            <p>
              The change in potential energy is twice the change in the total energy. Because the satellite
              moves to a higher orbit, its potential energy <em>rises</em> (becomes less negative):
            </p>
            <FormulaBlock latex={String.raw`\Delta V = V_f - V_i = +\frac{G m M}{4R} = +6.25\times10^9\;\mathrm{J}`} important />
            <p>
              (The printed book gives ΔV = −6.25 × 10⁹ J, but the sign is inconsistent with E = −GMm/2r at the
              two radii; physically the potential energy increases by +6.25 × 10⁹ J.)
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-kepler">7.9 Kepler&rsquo;s Laws</h2>
      <p>
        The Danish astronomer <strong>Tycho Brahe</strong> recorded planetary positions for over twenty years;
        his assistant <strong>Johannes Kepler</strong> used those measurements to establish three empirical
        laws of planetary motion (1609–1619) — derived purely from observation, without any theory of why the
        planets move this way.
      </p>
      <ol className="list-decimal space-y-3 pl-5">
        <li>
          <strong>Law of orbits.</strong>{" "}
          <Highlight>
            Every planet moves in an <em>ellipse</em> with the sun at one of the foci.
          </Highlight>
        </li>
        <li>
          <strong>Law of areas.</strong>{" "}
          <Highlight>
            The line joining a planet to the sun sweeps out <em>equal areas in equal intervals of time</em>.
          </Highlight>
        </li>
        <li>
          <strong>Law of periods (Kepler&rsquo;s third law).</strong>{" "}
          <Highlight>The square of the orbital period of a planet is proportional to the cube of the semi-major axis of its ellipse.</Highlight>
        </li>
      </ol>
      <Callout type="didyouknow" title="Why the orbits are ellipses — clocks and symbols">
        An ellipse is the set of points whose distances from two fixed points (the <strong>foci</strong>) add
        up to a constant. For nearly circular orbits the focus is very close to the centre, which is why early
        astronomers assumed circular (and then epicycle-upon-epicycle) paths — the deviation is tiny. Kepler,
        by insisting the data was right, heard the real music.
      </Callout>
      <TableCard
        title="Kepler&rsquo;s third law in practice"
        headers={["Planet", "T (years)", "a (AU)", "T²/a³"]}
        rows={[
          { cells: ["Mercury", "0.241", "0.387", "1.002"] },
          { cells: ["Venus", "0.615", "0.723", "1.000"] },
          { cells: ["Earth", "1.000", "1.000", "1.000"] },
          { cells: ["Mars", "1.881", "1.524", "1.001"] },
          { cells: ["Jupiter", "11.86", "5.203", "0.994"] },
        ]}
      />
      <p>
        The last column is nearly constant — the same number for every planet — which is exactly what the
        third law <em>predicts</em>: the square of the period divided by the cube of the semi-major axis is a
        universal constant for the whole solar system.
      </p>
      <p>For the second law, now with a derivation:</p>
      <Derivation
        title="Board exam — Kepler&rsquo;s law of areas (conservation of angular momentum)"
        steps={[
          {
            label: "Angular momentum of a planet at position r",
            latex: String.raw`\vec L = \vec r \times m \vec v = m\,(\vec r \times \vec v)`
          },
          {
            label: "Areal velocity — area swept per unit time",
            latex: String.raw`\frac{dA}{dt} = \frac12\,|\vec r \times \vec v|`
          },
          {
            label: "Linking dA/dt to L",
            latex: String.raw`\frac{dA}{dt} = \frac{1}{2m}\,|\vec L|`
          },
          {
            label: "Gravity is central, so L is conserved",
            latex: String.raw`\vec r \parallel \vec F \implies \frac{d\vec L}{dt} = 0 \implies \frac{dA}{dt} = \text{const}`
          },
          {
            label: "Result",
            latex: String.raw`\frac{dA}{dt} = \frac{L}{2m}\ \text{(constant)}\implies A_1 = A_2\ \text{in equal times}`
          },
        ]}
        highlightResult
      />
      <MistakeCard
        mistake="Kepler's second law (equal areas in equal times) is special to the inverse-square law."
        correction="It follows from conservation of angular momentum and holds for any central force, not just inverse-square gravity."
      />
      <Callout type="important" title="Kepler&rsquo;s third law fixes the sun&rsquo;s mass">
        For a planet of mass m at mean distance a from the sun of mass M, equating the centripetal force with
        gravity gives:
      </Callout>
      <FormulaBlock latex={String.raw`\frac{4\pi^2 a}{T^2} = \frac{GM}{a^2} \implies T^2 = \frac{4\pi^2}{GM}\,a^3`} />
      <p>
        so T² ∝ a³ with the proportionality constant set by the sun&rsquo;s mass — agreeing with the table
        column T²/a³ ≈ 1. This law also lets us <em>weigh</em> planetary systems: with T and a measured, M is
        known.
      </p>
      <Expandable variant="exercise" title="Example 7.1 — perihelion and aphelion">
        <ProblemSolution.Problem>
          A planet has perihelion distance r<sub>p</sub> and aphelion distance r<sub>a</sub>. Given that the
          solar gravitational force does not do any work on the planet between the perihelion and aphelion
          (gravitation is conservative and the motion is symmetric about the sun along the major axis), verify
          that v<sub>p</sub>r<sub>p</sub> = v<sub>a</sub>r<sub>a</sub> — where v<sub>p</sub> and v
          <sub>a</sub> are the speeds at the perihelion and aphelion respectively.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Perihelion and aphelion are the points of closest and farthest approach, so</p>
          <FormulaBlock latex={String.raw`\frac{1}{2}m v_p^2 - \frac{GMm}{r_p} = \frac{1}{2}m v_a^2 - \frac{GMm}{r_a}`} />
          <p>Also, both points lie on the major axis, so the position and velocity are perpendicular there:</p>
          <FormulaBlock latex={String.raw`m v_p r_p = m v_a r_a \implies v_p r_p = v_a r_a`} />
          <p>
            (Equivalently, the law of areas gives the same relation — the planet moves fastest at perihelion,
            slowest at aphelion.)
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-exercises">Exercises 7.1 – 7.21</h2>
      <Expandable variant="exercise" title="Exercises 7.1 – 7.21 (with hints and answers)">
        <p className="mb-4">Selected exercises with hints and the essential answers.</p>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.1</h3>
        <ProblemSolution.Problem>
          (a) Can you shield a body from the gravitational influence of nearby matter by putting it inside a
          hollow sphere or by some other means? (b) An astronaut inside a small spaceship orbiting the earth
          cannot detect gravity. If the space station is very large, can he hope to detect gravity? (c)
          Though the Sun&rsquo;s pull on the earth exceeds the moon&rsquo;s pull, the tidal effect of the
          moon&rsquo;s pull is greater. Why?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) <strong>No</strong> — gravitational shielding is not possible. (b) In a small ship no; it
            is in free fall. A very large station would experience detectable differential (tidal)
            gravitational force across its length. (c) Tidal effect depends on the{" "}
            <em>difference</em> of forces and falls off as 1/r³, while the total pull falls off only as
            1/r²; the moon is far closer, so its tide-producing effect dominates.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.2</h3>
        <ProblemSolution.Problem>
          Choose the correct alternative: (a) g increases/decreases with increasing altitude. (b) g
          increases/decreases with increasing depth (uniform-density sphere). (c) g is independent of the
          mass of the earth/mass of the body. (d) −GMm(1/r₂ − 1/r₁) is more/less accurate than mg(r₂ − r₁)
          for the difference of potential energy between two points at distances r₂ and r₁ from the centre.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>(a) decreases; (b) decreases; (c) independent of the mass of the body; (d) more accurate.</p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.3</h3>
        <ProblemSolution.Problem>
          Suppose a planet went around the Sun twice as fast as the earth. What would be its orbital size as
          compared to that of the earth?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            T ∝ a^(3/2) (Kepler&rsquo;s third law): if T = T<sub>E</sub>/2, then a = (1/2)^(2/3) a
            <sub>E</sub> ≈ <strong>0.63 × the earth&rsquo;s orbital size</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.4</h3>
        <ProblemSolution.Problem>
          Io, a satellite of Jupiter, has an orbital period of 1.769 days and orbital radius 4.22 × 10⁸ m.
          Show that the mass of Jupiter is about one-thousandth that of the Sun.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            M<sub>J</sub> = 4π²Rₒ³/(GT²) = 4(3.14)²(4.22×10⁸)³/[(6.67×10⁻¹¹)(1.769×86400)²] ≈ 1.9×10²⁷ kg,
            which is ≈ <strong>10⁻³ M<sub>Sun</sub></strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.5</h3>
        <ProblemSolution.Problem>
          Assume our galaxy consists of 2.5 × 10¹¹ stars each of one solar mass. How long will a star at a
          distance of 50,000 ly from the galactic centre take to complete one revolution? Take the diameter
          of the Milky Way to be 10⁵ ly.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            M<sub>gal</sub> = 2.5 × 10¹¹ M<sub>Sun</sub>, a = 50,000 ly = 4.73 × 10²⁰ m. Then T = 2π√(a³
            /GM<sub>gal</sub>) ≈ <strong>3.6 × 10⁸ years</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.6</h3>
        <ProblemSolution.Problem>
          Choose the correct alternative: (a) If the zero of potential energy is at infinity, the total
          energy of an orbiting satellite is the negative of its kinetic/potential energy. (b) The energy
          required to launch an orbiting satellite out of the earth&rsquo;s influence is more/less than the
          energy required to project a stationary object at the same height out of the earth&rsquo;s
          influence.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>(a) negative of its kinetic energy (E = −K); (b) more.</p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.7</h3>
        <ProblemSolution.Problem>
          Does the escape speed of a body from the earth depend on (a) the mass of the body, (b) the location
          from where it is projected, (c) the direction of projection, (d) the height of the location from
          where it is launched?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Independent of (a) the body&rsquo;s mass and (c) the direction of projection. Depend on (b) and
            (d) — through the distance from the earth&rsquo;s centre: v<sub>e</sub> = √(2GM/(R+h)).
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.8</h3>
        <ProblemSolution.Problem>
          A comet orbits the sun in a highly elliptical orbit. Does the comet have a constant (a) linear
          speed, (b) angular speed, (c) angular momentum, (d) kinetic energy, (e) potential energy, (f)
          total energy throughout its orbit?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) No; (b) No; (c) <strong>Yes</strong> (central force ⟹ angular momentum conserved); (d) No;
            (e) No; (f) <strong>Yes</strong> (total mechanical energy conserved).
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.9</h3>
        <ProblemSolution.Problem>
          Which of the following symptoms is likely to afflict an astronaut in space: (a) swollen feet, (b)
          swollen face, (c) headache, (d) orientational problems?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>(b) swollen face and (d) orientational problems.</p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">
          Exercise 7.10 &amp; 7.11
        </h3>
        <ProblemSolution.Problem>
          7.10 The gravitational intensity at the centre of a hemispherical shell of uniform mass density has
          the direction indicated by which arrow? 7.11 At an arbitrary point P, the direction of the
          gravitational intensity is indicated by which arrow?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            7.10 Arrow <strong>(iii) c</strong> — by symmetry the resultant at the centre points along the
            axis, away from the curved cap. 7.11 Arrow <strong>(i) d</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.12</h3>
        <ProblemSolution.Problem>
          A rocket is fired from the earth towards the sun. At what distance from the earth&rsquo;s centre is
          the gravitational force on the rocket zero? Mass of the sun = 2×10³⁰ kg, mass of the earth = 6×10²⁴
          kg, orbital radius = 1.5 × 10¹¹ m.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Balance forces: GM/x² = GM<sub>S</sub>/(d−x)² with d = 1.5×10¹¹ m. This gives (d−x)
            /x = √(M<sub>S</sub>/M) = √(3.33×10⁵) ≈ 577, so x = d/578 ≈{" "}
            <strong>2.6 × 10⁸ m from the earth&rsquo;s centre</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.13</h3>
        <ProblemSolution.Problem>
          How will you &ldquo;weigh the sun&rdquo;, that is, estimate its mass? The mean orbital radius of the
          earth around the sun is 1.5 × 10⁸ km.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Apply Kepler&rsquo;s third law for the earth&rsquo;s orbit: M<sub>S</sub> = 4π²a³/(GT²). With a =
            1.5×10¹¹ m and T = 1 year = 3.156×10⁷ s, M<sub>S</sub> ≈{" "}
            <strong>2.0 × 10³⁰ kg</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.14</h3>
        <ProblemSolution.Problem>
          A Saturn year is 29.5 times the earth year. How far is Saturn from the sun if the earth is 1.50 ×
          10⁸ km away?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            a<sub>Saturn</sub> = (29.5)^(2/3) × 1.50 × 10⁸ km ≈ <strong>1.43 × 10⁹ km</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.15</h3>
        <ProblemSolution.Problem>
          A body weighs 63 N on the surface of the earth. What is the gravitational force on it due to the
          earth at a height equal to half the radius of the earth?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            At height h = R/2, r = 3R/2, and F scales as 1/r²: F = 63 × (2/3)² ={" "}
            <strong>28 N</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.16</h3>
        <ProblemSolution.Problem>
          Assuming the earth to be a sphere of uniform mass density, how much would a body weigh halfway down
          to the centre of the earth if it weighed 250 N on the surface?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            g(d) = g(1 − d/R) = g/2 at d = R/2. Weight = <strong>125 N</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.17</h3>
        <ProblemSolution.Problem>
          A rocket is fired vertically with a speed of 5 km s⁻¹ from the earth&rsquo;s surface. How far from
          the earth does it go before returning? M = 6.0×10²⁴ kg, R = 6.4×10⁶ m, G =
          6.67×10⁻¹¹ N m² kg⁻².
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Energy conservation: ½mvᵢ² − GMm/R = −GMm/(R+h). Here GM/R =
            gR = 6.272×10⁷ and ½vᵢ² = 1.25×10⁷, so GM/(R+h) = 5.022×10⁷, giving
            R+h ≈ 1.25 R and h ≈ <strong>1.6 × 10⁶ m</strong> (≈ 0.25 R).
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.18</h3>
        <ProblemSolution.Problem>
          The escape speed of a projectile on the earth&rsquo;s surface is 11.2 km s⁻¹. A body is projected
          out with thrice this speed. What is the speed of the body far away from the earth? Ignore the
          presence of the sun and other planets.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            v_far² = v² − v<sub>e</sub>² = (3v<sub>e</sub>)² − v<sub>e</sub>² = 8v<sub>e</sub>² = 8 ×
            (11.2)², so v<sub>far</sub> ≈ <strong>31.7 km s⁻¹</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.19</h3>
        <ProblemSolution.Problem>
          A 200 kg satellite orbits the earth at a height of 400 km above the surface. How much energy must
          be expended to rocket the satellite out of the earth&rsquo;s gravitational influence? M
          = 6.0×10²⁴ kg, R = 6.4×10⁶ m, G = 6.67×10⁻¹¹.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Energy to escape = −E<sub>orbit</sub> = GMm/(2r) with r = 6.8 × 10⁶ m and GM = gR² =
            4.01 × 10¹⁴ → <strong>≈ 5.9 × 10⁹ J</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.20</h3>
        <ProblemSolution.Problem>
          Two stars, each of one solar mass (2×10³⁰ kg), are approaching each other for a head-on collision.
          When they are a distance 10⁹ km apart their speeds are negligible. What is the speed with which
          they collide? The radius of each star is 10⁴ km.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            By energy conservation, ½(M/2)v_rel² = GM²(1/(2R) − 1/d), i.e. v_rel² = 4GM(1/(2R) − 1/d) with
            2R = 2×10⁷ m and d = 10¹² m. This gives v_rel ≈ <strong>5.2 × 10⁶ m s⁻¹</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">Exercise 7.21</h3>
        <ProblemSolution.Problem>
          Two heavy spheres each of mass 100 kg and radius 0.10 m are placed 1.0 m apart on a horizontal
          table. What is the gravitational force and potential at the midpoint of the line joining the
          centres? Is an object placed there in equilibrium, and if so is it stable or unstable?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The two forces at the midpoint are equal and opposite: <strong>net force = 0</strong>. Potential
            at r = 0.5 m: V = −2GM/r = −2 × 6.67×10⁻¹¹ × 100 / 0.5 ={" "}
            <strong>−2.67 × 10⁻⁸ J kg⁻¹</strong>. The object is in equilibrium, but it is{" "}
            <strong>unstable</strong> — a small displacement towards either sphere grows.
          </p>
        </ProblemSolution.Solution>
      </Expandable>
    </>
  );
}