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

export default function GravitationChapter() {
  return (
    <>
      <h2 id="h-intro">7.1 Introduction</h2>
      <p>
        Early in our lives we become aware of the tendency of all material objects to be attracted towards
        the earth: anything thrown up falls back down, going uphill is far more tiring than going downhill,
        and raindrops fall from the clouds. Historically it was the Italian physicist <strong>Galileo</strong>{" "}
        (1564–1642) who recognised that all bodies, irrespective of their masses, are accelerated towards
        the earth with a constant acceleration. He arrived, through incline-plane experiments, at a value of
        the acceleration due to gravity close to the more accurate value obtained later.
      </p>
      <Callout type="didyouknow" title="Geocentric vs heliocentric models">
        <p>
          Ptolemy (&asymp;2000 years ago) built a <strong>geocentric</strong> model — stars, sun and planets
          all revolving around the earth in circles, with the circle centres themselves moving in larger
          circles (epicycles). Indian astronomers advanced similar theories some 400 years later, but{" "}
          <strong>Aryabhatta</strong> (5th century A.D.) had already mentioned the{" "}
          <strong>heliocentric</strong> (sun-centred) model in his treatise. A thousand years later{" "}
          <strong>Copernicus</strong> (1473–1543) proposed planets moving in circles around a fixed central
          sun — discredited by the church, but supported by Galileo.
        </p>
      </Callout>
      <p>
        Around Galileo&rsquo;s time the nobleman <strong>Tycho Brahe</strong> (1546–1601) spent his entire
        lifetime recording naked-eye observations of the planets. His data were analysed by his assistant{" "}
        <strong>Johannes Kepler</strong> (1571–1640), who extracted three elegant laws. These laws were known
        to Newton and enabled his great leap — the <em>universal law of gravitation</em>.
      </p>

      <h2 id="h-kepler">7.2 Kepler&rsquo;s Laws</h2>
      <h3>The three laws of planetary motion</h3>
      <ol>
        <li>
          <strong>Law of orbits:</strong> all planets move in elliptical orbits with the Sun at one of the
          foci. The closest point <strong>P</strong> is the <em>perihelion</em> and the farthest point{" "}
          <strong>A</strong> the <em>aphelion</em>; the semi-major axis is half the distance AP.
        </li>
        <li>
          <strong>Law of areas:</strong> the line that joins any planet to the Sun sweeps out equal areas in
          equal intervals of time — planets appear to move slower when farther from the Sun.
        </li>
        <li>
          <strong>Law of periods:</strong> the square of the time period of revolution is proportional to the
          cube of the semi-major axis of the ellipse traced out by the planet.
        </li>
      </ol>
      <Callout type="tip" title="Drawing an ellipse">
        Fix the ends of a string at two points <Formula>{String.raw`F_1`}</Formula> and{" "}
        <Formula>{String.raw`F_2`}</Formula> (the foci) with pins. Stretch the string taut with a pencil tip
        and move it around. For any point T on the curve, the sum of distances from F₁ and F₂ is constant.
        A circle is the special case where the two foci merge and the semi-major axis becomes the radius.
      </Callout>
      <p>
        The <strong>law of areas</strong> is a consequence of conservation of angular momentum, valid for any{" "}
        <em>central force</em> (a force along the line joining the Sun and the planet). With the Sun at the
        origin and planet position and momentum r and p, the area swept in time Δt is
      </p>
      <FormulaBlock latex={String.raw`\Delta A = \tfrac12\,(\mathbf{r}\times\mathbf{v}\,\Delta t)`} />
      <FormulaBlock
        latex={String.raw`\frac{\Delta A}{\Delta t}=\frac{1}{2m}(\mathbf{r}\times\mathbf{p})=\frac{L}{2m}`}
      />
      <p>
        For a central force directed along r, L = r × p is constant as the planet goes around, so ΔA/Δt is
        constant — the law of areas. Gravitation is a central force, hence the law follows.
      </p>
      <TableCard
        caption="Table 7.1 — Data confirming Kepler's Law of Periods. a ≡ semi-major axis in units of 10¹⁰ m, T ≡ period in years, Q ≡ T²/a³ in units of 10⁻³⁴ y² m⁻³."
        headers={["Planet", "a", "T", "Q"]}
        rows={[
          { cells: ["Mercury", "5.79", "0.24", "2.95"] },
          { cells: ["Venus", "10.8", "0.615", "3.00"] },
          { cells: ["Earth", "15.0", "1", "2.96"] },
          { cells: ["Mars", "22.8", "1.88", "2.98"] },
          { cells: ["Jupiter", "77.8", "11.9", "3.01"] },
          { cells: ["Saturn", "143", "29.5", "2.98"] },
          { cells: ["Uranus", "287", "84", "2.98"] },
          { cells: ["Neptune", "450", "165", "2.99"] },
        ]}
      />
      <p>
        The quotient Q is very nearly constant across all eight planets — a direct confirmation of the law of
        periods.
      </p>

      <Expandable variant="example" title="Example 7.1">
        <ProblemSolution.Problem>
            Let the speed of the planet at the perihelion P be v<sub>P</sub> and the Sun–planet distance SP be
            r<sub>P</sub>. Relate &#123;r<sub>P</sub>, v<sub>P</sub>&#125; to the corresponding quantities at the
            aphelion &#123;r<sub>A</sub>, v<sub>A</sub>&#125;. Will the planet take equal times to traverse the arcs BAC
            and CPB?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              At both P and A, r and v are mutually perpendicular. The magnitude of angular momentum at P is
              L<sub>P</sub> = m<sub>P</sub> r<sub>P</sub> v<sub>P</sub>, and L<sub>A</sub> = m<sub>P</sub>{" "}
              r<sub>A</sub> v<sub>A</sub>. Conservation of angular momentum gives
            </p>
            <FormulaBlock latex={String.raw`m_p r_p v_p = m_p r_A v_A \quad\Rightarrow\quad \frac{v_p}{v_A}=\frac{r_A}{r_p}`} />
            <p>
              Since r<sub>A</sub> &gt; r<sub>P</sub>, we have v<sub>P</sub> &gt; v<sub>A</sub>. The area SBAC
              bounded by the ellipse and the radius vectors SB and SC is larger than SBPC, so by the law of
              equal areas the planet takes a <strong>longer</strong> time to traverse BAC than CPB.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-universal-law">7.3 Universal Law of Gravitation</h2>
      <p>
        Legend has it that an apple falling from a tree inspired Newton to arrive at a universal law
        explaining terrestrial gravitation as well as Kepler&rsquo;s laws. Newton reasoned that the moon,
        orbiting at radius R<sub>m</sub>, undergoes a centripetal acceleration due to earth&rsquo;s gravity:
      </p>
      <FormulaBlock latex={String.raw`a_m = \frac{V^2}{R_m} = \frac{4\pi^2 R_m}{T^2}`} />
      <p>
        with T ≈ 27.3 days and R<sub>m</sub> ≈ 3.84 × 10⁸ m — giving a value of a<sub>m</sub> much smaller
        than g on the earth&rsquo;s surface. This shows the force of gravity <em>decreases with distance</em>.
        Assuming an inverse-square decrease,
      </p>
      <FormulaBlock latex={String.raw`a_m\propto R_m^{-2},\qquad g\propto R_E^{-2}\qquad\Rightarrow\qquad \frac{a_m}{g}=\frac{R_E^2}{R_m^2}=\frac{1}{3600}`} />
      <p>in agreement with the value of a_<sub>m</sub> from the lunar data.</p>
      <Callout type="important" title="Newton's Universal Law of Gravitation">
        Every body in the universe attracts every other body with a force which is directly proportional to
        the product of their masses and inversely proportional to the square of the distance between them.
      </Callout>
      <p>The force on a point mass m₂ due to another point mass m₁ has magnitude</p>
      <FormulaBlock latex={String.raw`F = G\,\frac{m_1 m_2}{r^2}`} important />
      <p>
        In vector form, with r̂ the unit vector from m₁ to m₂ and r = r₂ − r₁, the force on m₂ is F = −G m₁
        m₂ r̂/r² — attractive, along −r̂. The force on m₁ due to m₂ is −F by Newton&rsquo;s third law:{" "}
        <Formula>{String.raw`\mathbf{F}_{12}=-\mathbf{F}_{21}`}</Formula>.
      </p>
      <p>
        <strong>Superposition:</strong> for a collection of point masses, the force on any one of them is the
        vector sum of the gravitational forces exerted by all the others.
      </p>
      <Callout type="note" title="Extended objects: two special results">
        <p>
          The law as written applies to point masses; for an extended object (like the earth) each point mass
          contributes, and the forces must be added vectorially. For two special cases this integration gives
          simple laws:
        </p>
        <ol>
          <li>
            A hollow spherical shell of uniform density attracts an <strong>external</strong> point mass as if
            all its mass were concentrated at the centre (the components perpendicular to the joining line
            cancel).
          </li>
          <li>
            The force on a point mass <strong>inside</strong> a uniform hollow spherical shell is{" "}
            <strong>zero</strong> (forces from the various regions cancel completely).
          </li>
        </ol>
      </Callout>

      <Expandable variant="example" title="Example 7.2">
        <ProblemSolution.Problem>
            Three equal masses of m kg each are fixed at the vertices of an equilateral triangle ABC.
            (a) What is the force acting on a mass 2m placed at the centroid G of the triangle? (b) What is
            the force if the mass at the vertex A is doubled? Take AG = BG = CG = 1 m.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Take G as the origin, GA along +ŷ. Then GB is at 30° below the negative x-axis and GC at 30°
              above the positive x-axis. The three individual forces (magnitude 2Gm² each) are:
            </p>
            <FormulaBlock latex={String.raw`\mathbf{F}_{GA}=2Gm^2\hat{\mathbf{j}}`} />
            <FormulaBlock latex={String.raw`\mathbf{F}_{GB}=2Gm^2(-\cos30°\,\hat{\mathbf{i}}-\sin30°\,\hat{\mathbf{j}})`} />
            <FormulaBlock latex={String.raw`\mathbf{F}_{GC}=2Gm^2(\cos30°\,\hat{\mathbf{i}}-\sin30°\,\hat{\mathbf{j}})`} />
            <p>
              (a) By the principle of superposition and vector addition the î components cancel and the ĵ
              components give 2Gm² − 2Gm²·½ − 2Gm²·½ = 0. The resultant force is{" "}
              <strong>F<sub>R</sub> = 0</strong> — as expected from symmetry.
            </p>
            <p>
              (b) Doubling the mass at A makes F<sub>GA</sub> = G(2m)(2m)/1² = 4Gm² along +ŷ, while F
              <sub>GB</sub> and F<sub>GC</sub> are unchanged. The x-components still cancel and the net force
              is
            </p>
            <FormulaBlock latex={String.raw`\mathbf{F}_R = (4Gm^2 - Gm^2 - Gm^2)\hat{\mathbf{j}} = 2Gm^2\,\hat{\mathbf{j}}`} important />
            <p>i.e. magnitude <strong>2 Gm² directed along GA</strong> (towards A).</p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-g-constant">7.4 The Gravitational Constant</h2>
      <p>
        The value of G was first determined experimentally by the English scientist <strong>Henry
        Cavendish</strong> in 1798, using a torsion balance. A light bar AB carrying two small lead spheres
        is suspended from a rigid support by a fine wire; two large lead spheres are brought close, one on
        each side.
      </p>
      <p>
        The big spheres attract the neighbouring small spheres with equal and opposite forces of magnitude F
        = G Mm/d² (with d the separation of the centres — the spheres attract as if their masses were
        concentrated at their centres). There is no net force on the bar, only a <strong>torque F × L</strong>.
        The wire twists until its restoring torque equals the gravitational torque:
      </p>
      <FormulaBlock latex={String.raw`\tau\theta = G\,\frac{Mm}{d^2}\,L`} />
      <p>
        where τ is the restoring couple per unit angle of twist (measured independently). Observing the angle
        of twist θ thus enables one to compute G. Refined measurements give the currently accepted value
      </p>
      <FormulaBlock latex={String.raw`G = 6.67 \times 10^{-11}\,\mathrm{N\,m^2\,kg^{-2}}`} important />
      <Callout type="didyouknow" title="Cavendish weighed the earth">
        The measurement of G, combined with knowledge of g and R<sub>E</sub>, enables the mass of the earth
        M<sub>E</sub> to be estimated from g = GM<sub>E</sub>/R<sub>E</sub>² — which is why the famous
        statement is made that &ldquo;Cavendish weighed the earth&rdquo;.
      </Callout>

      <h2 id="h-g-earth">7.5 Acceleration due to Gravity of the Earth</h2>
      <p>
        Imagine the earth as a sphere of many concentric shells, the smallest at the centre and the largest
        at the surface.
      </p>
      <Stepper
        steps={[
          {
            label: "Point outside the earth",
            description:
              "It lies outside all the shells, so every shell acts as if its mass were concentrated at the common centre. The gravitational force is just as if the entire mass of the earth were concentrated at its centre.",
          },
          {
            label: "Point inside the earth (at distance r from the centre)",
            description:
              "The point lies outside the sphere of radius r but inside all shells of radius greater than r. Those outer shells exert no force; only the interior sphere of radius r matters, acting as a point mass Mᵣ at the centre.",
          },
          {
            label: "Force on the mass m",
            description:
              "F = G m Mᵣ / r², where for uniform density Mᵣ = (r³/R_E³) M_E, so F = (G m M_E / R_E³) r.",
          },
        ]}
      />
      <p>For a point on the surface (r = R<sub>E</sub>):</p>
      <FormulaBlock latex={String.raw`F = G\,\frac{M_E\,m}{R_E^2}`} />
      <Callout type="important" title="Acceleration due to gravity of the earth">
        <Formula>{String.raw`g = \frac{F}{m} = \frac{G\,M_E}{R_E^2}`}</Formula> (7.12) — g is readily
        measurable and R<sub>E</sub> is known, so measuring G fixes the earth&rsquo;s mass M<sub>E</sub>.
      </Callout>

      <h2 id="h-g-below-above">7.6 Acceleration due to Gravity below and above the Surface of Earth</h2>
      <h3>At a height h above the surface</h3>
      <p>
        The point mass is outside the earth, at distance R<sub>E</sub> + h from the centre:
      </p>
      <FormulaBlock latex={String.raw`F(h) = \frac{G M_E m}{(R_E + h)^2},\qquad g(h) = \frac{F(h)}{m} = \frac{G M_E}{(R_E+h)^2}`} />
      <p>This is clearly less than g on the surface. For h &lt;&lt; R<sub>E</sub> we expand binomially:</p>
      <FormulaBlock latex={String.raw`g(h) = g\left(1+\frac{h}{R_E}\right)^{-2} \approx g\left(1-\frac{2h}{R_E}\right)`} important />
      <h3>At a depth d below the surface</h3>
      <p>
        The earth splits into a sphere of radius R<sub>E</sub> − d plus a shell of thickness d. The shell
        exerts no force (inside a uniform shell); the inner sphere (mass M<sub>s</sub>) behaves as a point
        mass at the centre:
      </p>
      <FormulaBlock latex={String.raw`\frac{M_s}{M_E} = \frac{(R_E - d)^3}{R_E^3},\qquad F(d) = \frac{G M_s m}{(R_E-d)^2}`} />
      <FormulaBlock latex={String.raw`g(d) = \frac{G M_E}{R_E^2}\left(1-\frac{d}{R_E}\right) = g\left(1-\frac{d}{R_E}\right)`} important />
      <KeyPoint title="g is maximum at the surface">
        The acceleration due to gravity of the earth is maximum on its surface and{" "}
        <strong>decreases whether you go up or go down</strong>.
      </KeyPoint>

      <h2 id="h-potential-energy">7.7 Gravitational Potential Energy</h2>
      <p>
        Gravitation is a conservative force, so a potential energy function exists. Near the earth&rsquo;s
        surface (F ≈ mg constant), lifting a particle from height h₁ to h₂ does work
      </p>
      <FormulaBlock latex={String.raw`W_{12} = mg(h_2 - h_1),\qquad W(h) = mgh + W_0`} />
      <p>
        so W<sub>12</sub> = W(h₂) − W(h₁) and only <em>differences</em> matter. For arbitrary distances the
        force F = GM<sub>E</sub>m/r² is no longer constant; the work done lifting the particle from r₁ to
        r₂ is
      </p>
      <FormulaBlock latex={String.raw`W_{12} = \int_{r_1}^{r_2} G\,\frac{M_E m}{r^2}\,dr = -G\,M_E\,m\left(\frac{1}{r_2}-\frac{1}{r_1}\right)`} />
      <p>
        We may therefore associate a potential energy at distance r, with a constant choosing the zero:
      </p>
      <FormulaBlock latex={String.raw`W(r) = -\frac{G M_E m}{r} + W_1`} />
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

      <h2 id="h-escape">7.8 Escape Speed</h2>
      <p>
        Can we throw an object with such a high initial speed that it does not fall back to the earth? Energy
        conservation answers the question. Suppose the object reaches infinity with speed V<sub>f</sub>; its
        total energy at infinity is ½mV<sub>f</sub>² + W₁, and energy conservation gives
      </p>
      <FormulaBlock latex={String.raw`\frac{1}{2}mV_f^2 = \frac{1}{2}mV_i^2 - \frac{G\,m\,M_E}{h + R_E}`} />
      <p>
        The RHS must be non-negative for the object to reach infinity, so the minimum initial speed
        corresponds to the LHS being zero:
      </p>
      <FormulaBlock latex={String.raw`\frac{1}{2}m\left(V_i\right)_{\min}^2 = \frac{G\,m\,M_E}{h+R_E} \quad\Rightarrow\quad \left(V_i\right)_{\min} = \sqrt{\frac{2GM_E}{h+R_E}}`} />
      <p>From the surface of the earth (h = 0), using g = GM<sub>E</sub>/R<sub>E</sub>²:</p>
      <FormulaBlock latex={String.raw`V_e = \sqrt{\frac{2GM_E}{R_E}} = \sqrt{2gR_E} \approx 11.2\,\mathrm{km\,s^{-1}}`} important />
      <p>
        This is the <strong>escape speed</strong> (loosely, escape velocity) — about 11.2 km/s from the
        earth&rsquo;s surface. The same relation applies to the moon using its surface gravity and radius:
        the escape speed of the moon is only 2.3 km/s, about five times smaller. This is why the moon has no
        atmosphere — gas molecules with speeds above 2.3 km/s escape its pull.
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

      <h2 id="h-satellites">7.9 Earth Satellites</h2>
      <p>
        Earth satellites are objects that revolve around the earth; their motion is very similar to that of
        planets around the Sun, so Kepler&rsquo;s laws apply to them equally. The moon — the only natural
        satellite — has a near-circular orbit with a period of about 27.3 days, roughly equal to its rotation
        period about its own axis.
      </p>
      <p>
        Consider a satellite of mass m in a circular orbit of radius R<sub>E</sub> + h around the earth. The
        required centripetal force F = mV²/(R<sub>E</sub>+h) is supplied by gravity F = GmM<sub>E</sub>
        /(R<sub>E</sub>+h)². Equating and cancelling m:
      </p>
      <FormulaBlock latex={String.raw`V = \sqrt{\frac{G\,M_E}{R_E + h}}`} important />
      <p>
        The orbital speed <strong>decreases as h increases</strong>. For h = 0, V(0) = √(GM<sub>E</sub>
        /R<sub>E</sub>) = √(gR<sub>E</sub>) ≈ 7.9 km s⁻¹. The time period of revolution is
      </p>
      <FormulaBlock latex={String.raw`T = \frac{2\pi(R_E+h)}{V} = 2\pi\,\frac{(R_E+h)^{3/2}}{\sqrt{GM_E}}`} />
      <FormulaBlock latex={String.raw`T^2 = k\,(R_E+h)^3,\qquad k = \frac{4\pi^2}{GM_E}`} />
      <p>
        — Kepler&rsquo;s law of periods as applied to satellites. For satellites very close to the surface
        (h negligible compared with R<sub>E</sub>),
      </p>
      <FormulaBlock latex={String.raw`T_0 = 2\pi\sqrt{\frac{R_E}{g}} \approx 85\;\text{minutes}`} />
      <KeyPoint title="Orbits and period">
        Equation T² = k(R<sub>E</sub>+h)³ also holds for <strong>elliptical</strong> orbits if
        (R<sub>E</sub>+h) is replaced by the semi-major axis of the ellipse — the earth then lies at one of
        its foci.
      </KeyPoint>

      <Expandable variant="example" title="Example 7.5">
        <ProblemSolution.Problem>
            The planet Mars has two moons, Phobos and Deimos. (i) Phobos has a period 7 hours 39 minutes and
            an orbital radius of 9.4 × 10³ km. Calculate the mass of Mars. (ii) Assume earth and Mars move in
            circular orbits around the sun, with the Martian orbit being 1.52 times the orbital radius of the
            earth. What is the length of the Martian year in days?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>(i) Using T² = 4π²R³/(GM) with the sun&rsquo;s mass replaced by the Martian mass M<sub>m</sub>:</p>
            <FormulaBlock latex={String.raw`M_m = \frac{4\pi^2 R^3}{G T^2} = \frac{4(3.14)^2(9.4\times10^6)^3}{(6.67\times10^{-11})(459\times60)^2} = 6.48\times10^{23}\,\mathrm{kg}`} important />
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
            Weighing the Earth: g = 9.81 m s⁻², R<sub>E</sub> = 6.37 × 10⁶ m, the distance to the moon R =
            3.84 × 10⁸ m, and the moon&rsquo;s period of revolution is 27.3 days. Obtain the mass of the
            earth M<sub>E</sub> in two different ways.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Method 1 — from the surface value of g:</p>
            <FormulaBlock latex={String.raw`M_E = \frac{g R_E^2}{G} = \frac{9.81\times(6.37\times10^6)^2}{6.67\times10^{-11}} = 5.97\times10^{24}\,\mathrm{kg}`} />
            <p>Method 2 — treating the moon as an earth satellite, via Kepler&rsquo;s third law:</p>
            <FormulaBlock latex={String.raw`M_E = \frac{4\pi^2 R^3}{G T^2} = \frac{4(3.14)^2(3.84\times10^8)^3}{(6.67\times10^{-11})(27.3\times24\times60\times60)^2} = 6.02\times10^{24}\,\mathrm{kg}`} />
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
            <p>Using T² = kR³ with R = 3.84 × 10⁵ km:</p>
            <FormulaBlock latex={String.raw`T^2 = (1.33\times10^{-14})(3.84\times10^5)^3\quad\Rightarrow\quad T = 27.3\;\text{days}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-satellite-energy">7.10 Energy of an Orbiting Satellite</h2>
      <Stepper
        steps={[
          {
            label: "Kinetic energy",
            description:
              "K = ½mV² with V² = GM_E/(R_E+h), giving K = G m M_E / 2(R_E+h) — always positive.",
          },
          {
            label: "Potential energy",
            description:
              "With zero potential at infinity, V = −G m M_E / (R_E+h) — negative.",
          },
          {
            label: "Total energy",
            description:
              "E = K + V = −G m M_E / 2(R_E+h). In magnitude the KE is half the PE, and the total energy is negative.",
          },
        ]}
      />
      <FormulaBlock latex={String.raw`K = \frac{G m M_E}{2(R_E+h)},\qquad V = -\frac{G m M_E}{R_E+h},\qquad E = -\frac{G m M_E}{2(R_E+h)}`} important />
      <p>
        In an elliptical orbit both K and V vary from point to point, but the <strong>total energy remains
        constant and negative</strong>. This is as expected: if the total energy were positive or zero the
        object would escape to infinity, but satellites are always at finite distance, so their energy is
        negative.
      </p>

      <Expandable variant="example" title="Example 7.8">
        <ProblemSolution.Problem>
            A 400 kg satellite is in a circular orbit of radius 2R<sub>E</sub> about the earth. How much
            energy is required to transfer it to a circular orbit of radius 4R<sub>E</sub>? What are the
            changes in the kinetic and potential energies?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              In a circular orbit r = 2R<sub>E</sub>: E = −GmM<sub>E</sub>/(2r), so
            </p>
            <FormulaBlock latex={String.raw`E_i = -\frac{G m M_E}{4R_E},\qquad E_f = -\frac{G m M_E}{8R_E}`} />
            <p>The change in total energy is</p>
            <FormulaBlock
              latex={String.raw`\Delta E = E_f - E_i = \frac{G m M_E}{8R_E} = \frac{1}{8}\,m g R_E = \frac{400\times9.8\times6.4\times10^6}{8}`}
            />
            <FormulaBlock latex={String.raw`\Delta E = 3.13\times10^9\;\mathrm{J}`} important />
            <p>The kinetic energy is reduced and mimics ΔE:</p>
            <FormulaBlock latex={String.raw`\Delta K = K_f - K_i = -3.13\times10^9\;\mathrm{J}`} />
            <p>
              The change in potential energy is twice the change in the total energy. Because the satellite
              moves to a higher orbit, its potential energy <em>rises</em> (becomes less negative):
            </p>
            <FormulaBlock latex={String.raw`\Delta V = V_f - V_i = +\frac{G m M_E}{4R_E} = +6.25\times10^9\;\mathrm{J}`} important />
            <p>
              (The printed book gives ΔV = −6.25 × 10⁹ J, but the sign is inconsistent with E = −GMm/2r at the
              two radii; physically the potential energy increases by +6.25 × 10⁹ J.)
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-exercises">Exercises 7.1 – 7.21</h2>
      <p>Selected exercises with hints and the essential answers.</p>

      <Expandable variant="exercise" title="Exercise 7.1">
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
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.2">
        <ProblemSolution.Problem>
            Choose the correct alternative: (a) g increases/decreases with increasing altitude. (b) g
            increases/decreases with increasing depth (uniform-density sphere). (c) g is independent of the
            mass of the earth/mass of the body. (d) −GMm(1/r₂ − 1/r₁) is more/less accurate than mg(r₂ − r₁)
            for the difference of potential energy between two points at distances r₂ and r₁ from the centre.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>(a) decreases; (b) decreases; (c) independent of the mass of the body; (d) more accurate.</p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.3">
        <ProblemSolution.Problem>
            Suppose a planet went around the Sun twice as fast as the earth. What would be its orbital size as
            compared to that of the earth?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              T ∝ a^&#123;3/2&#125; (Kepler&rsquo;s third law): if T = T<sub>E</sub>/2, then a = (1/2)^&#123;2/3&#125; a
              <sub>E</sub> ≈ <strong>0.63 × the earth&rsquo;s orbital size</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.4">
        <ProblemSolution.Problem>
            Io, a satellite of Jupiter, has an orbital period of 1.769 days and orbital radius 4.22 × 10⁸ m.
            Show that the mass of Jupiter is about one-thousandth that of the Sun.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              M<sub>J</sub> = 4π²R³/(GT²) = 4(3.14)²(4.22×10⁸)³/[(6.67×10⁻¹¹)(1.769×86400)²] ≈ 1.9×10²⁷ kg,
              which is ≈ <strong>10⁻³ M<sub>Sun</sub></strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.5">
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
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.6">
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
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.7">
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
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.8">
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
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.9">
        <ProblemSolution.Problem>
            Which of the following symptoms is likely to afflict an astronaut in space: (a) swollen feet, (b)
            swollen face, (c) headache, (d) orientational problems?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>(b) swollen face and (d) orientational problems.</p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.10 &amp; 7.11">
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
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.12">
        <ProblemSolution.Problem>
            A rocket is fired from the earth towards the sun. At what distance from the earth&rsquo;s centre is
            the gravitational force on the rocket zero? Mass of the sun = 2×10³⁰ kg, mass of the earth = 6×10²⁴
            kg, orbital radius = 1.5 × 10¹¹ m.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Balance forces: GM<sub>E</sub>/x² = GM<sub>S</sub>/(d−x)² with d = 1.5×10¹¹ m. This gives (d−x)
              /x = √(M<sub>S</sub>/M<sub>E</sub>) = √(3.33×10⁵) ≈ 577, so x = d/578 ≈{" "}
              <strong>2.6 × 10⁸ m from the earth&rsquo;s centre</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.13">
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
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.14">
        <ProblemSolution.Problem>
            A Saturn year is 29.5 times the earth year. How far is Saturn from the sun if the earth is 1.50 ×
            10⁸ km away?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              a<sub>Saturn</sub> = (29.5)^&#123;2/3&#125; × 1.50 × 10⁸ km ≈ <strong>1.43 × 10⁹ km</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.15">
        <ProblemSolution.Problem>
            A body weighs 63 N on the surface of the earth. What is the gravitational force on it due to the
            earth at a height equal to half the radius of the earth?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              At height h = R<sub>E</sub>/2, r = 3R<sub>E</sub>/2, and F scales as 1/r²: F = 63 × (2/3)² ={" "}
              <strong>28 N</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.16">
        <ProblemSolution.Problem>
            Assuming the earth to be a sphere of uniform mass density, how much would a body weigh halfway down
            to the centre of the earth if it weighed 250 N on the surface?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              g(d) = g(1 − d/R<sub>E</sub>) = g/2 at d = R<sub>E</sub>/2. Weight = <strong>125 N</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.17">
        <ProblemSolution.Problem>
            A rocket is fired vertically with a speed of 5 km s⁻¹ from the earth&rsquo;s surface. How far from
            the earth does it go before returning? M<sub>E</sub> = 6.0×10²⁴ kg, R<sub>E</sub> = 6.4×10⁶ m, G =
            6.67×10⁻¹¹ N m² kg⁻².
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Energy conservation: ½mvᵢ² − GMm/R<sub>E</sub> = −GMm/(R<sub>E</sub>+h). Here GM/R<sub>E</sub> =
              gR<sub>E</sub> = 6.272×10⁷ and ½vᵢ² = 1.25×10⁷, so GM/(R<sub>E</sub>+h) = 5.022×10⁷, giving
              R<sub>E</sub>+h ≈ 1.25 R<sub>E</sub> and h ≈ <strong>1.6 × 10⁶ m</strong> (≈ 0.25 R<sub>E</sub>).
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.18">
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
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.19">
        <ProblemSolution.Problem>
            A 200 kg satellite orbits the earth at a height of 400 km above the surface. How much energy must
            be expended to rocket the satellite out of the earth&rsquo;s gravitational influence? M<sub>E</sub>
            = 6.0×10²⁴ kg, R<sub>E</sub> = 6.4×10⁶ m, G = 6.67×10⁻¹¹.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Energy to escape = −E<sub>orbit</sub> = GMm/(2r) with r = 6.8 × 10⁶ m and GM = gR<sub>E</sub>² =
              4.01 × 10¹⁴ → <strong>≈ 5.9 × 10⁹ J</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.20">
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
        </Expandable>

      <Expandable variant="exercise" title="Exercise 7.21">
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

      <h2 id="h-revision">Quick Revision</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormulaCard>
          <p>
            <strong>Universal law &amp; gravitational constant</strong>
          </p>
          <FormulaBlock latex={String.raw`F = \frac{G\,m_1 m_2}{r^2}`} />
          G = 6.67 × 10⁻¹¹ N m² kg⁻². Force is attractive, along the joining line; F₁₂ = −F₂₁. Outside a
          uniform sphere/shell the body acts as a point mass at its centre; inside a uniform hollow shell the
          force is zero.
        </FormulaCard>
        <FormulaCard>
          <p>
            <strong>Kepler&rsquo;s laws</strong>
          </p>
          Orbits are ellipses (Sun at a focus). Equal areas are swept in equal times — follows from angular
          momentum conservation for any central force. T² = (4π²/GM<sub>S</sub>) a³. Same law holds for
          satellites: T² = k(R<sub>E</sub>+h)³.
        </FormulaCard>
        <FormulaCard>
          <p>
            <strong>Acceleration due to gravity</strong>
          </p>
          On the surface: g = GM<sub>E</sub>/R<sub>E</sub>². At height h: g(h) = GM<sub>E</sub>/(R<sub>E</sub>
          +h)² ≈ g(1 − 2h/R<sub>E</sub>). At depth d: g(d) = g(1 − d/R<sub>E</sub>). g is maximum on the
          surface.
        </FormulaCard>
        <FormulaCard>
          <p>
            <strong>Gravitational potential energy</strong>
          </p>
          V = −G m₁ m₂/r (zero at infinity). Difference of PE = work done, −GMm(1/r₂ − 1/r₁). mgh is only an
          approximation for h &lt;&lt; R<sub>E</sub>. No gravitational shielding exists.
        </FormulaCard>
        <FormulaCard>
          <p>
            <strong>Escape speed</strong>
          </p>
          v<sub>e</sub> = √(2GM<sub>E</sub>/R<sub>E</sub>) = √(2gR<sub>E</sub>) ≈ 11.2 km s⁻¹ from the earth;
          ≈ 2.3 km s⁻¹ from the moon. Independent of the body&rsquo;s mass and direction of projection.
        </FormulaCard>
        <FormulaCard>
          <p>
            <strong>Orbiting satellite</strong>
          </p>
          V = √(GM<sub>E</sub>/(R<sub>E</sub>+h)); T₀ ≈ 85 min near the surface. K = GMm/2r, V = −GMm/r, E =
          −GMm/2r (negative — bound). A satellite&rsquo;s total energy = − the kinetic energy.
        </FormulaCard>
      </div>

      <MistakeCard
        mistake="Weightlessness in orbit means gravity has vanished at that height."
        correction="Gravity at orbital altitude is nearly the same as on the earth's surface; the astronaut and the satellite are both in free fall, so the astronaut feels no supporting reaction."
      />
      <MistakeCard
        mistake="Kepler's second law (equal areas in equal times) is special to the inverse-square law."
        correction="It follows from conservation of angular momentum and holds for any central force, not just inverse-square gravity."
      />
      <MistakeCard
        mistake="A satellite's negative total energy means its kinetic energy is negative."
        correction="E = −GMm/2r is negative even though K = +GMm/2r and V = −GMm/r; in magnitude |V| = 2K and E = −K. Negative total energy is what makes the orbit bound."
      />
      <MistakeCard
        mistake="Linear momentum is conserved for a body moving under another body's gravitational influence."
        correction="Angular momentum and total mechanical energy are conserved; the linear momentum of the single body is not (it is continuously accelerated by the central force)."
      />
    </>
  );
}