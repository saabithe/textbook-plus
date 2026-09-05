import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function MechanicalPropertiesOfFluidsChapter() {
  return (
    <>
      <h2 id="h-intro">9.1 Introduction</h2>
      <p>
        Liquids and gases can flow and are therefore called <strong>fluids</strong> — it is this property that
        distinguishes them from solids in a basic way. Fluids are everywhere: an envelope of air surrounds the
        earth, two-thirds of its surface is water, and every living process is mediated by fluids.
      </p>
      <Callout type="note" title="How fluids differ from solids">
        <p>
          Unlike a solid, a fluid has <strong>no definite shape of its own</strong>. Solids and liquids have a
          fixed volume (at atmospheric pressure), while a gas fills the entire volume of its container.
          Solids and liquids are largely incompressible; gases change volume markedly with pressure. Most
          importantly, fluids offer <strong>very little resistance to shear stress</strong> — the shearing
          stress of fluids is about a million times smaller than that of solids.
        </p>
      </Callout>

      <h2 id="h-pressure">9.2 Pressure</h2>
      <p>
        A sharp needle pierces the skin while a blunt object with the same force does not; an elephant&rsquo;s
        step would crack a man&rsquo;s ribs, but a large plank spread across the chest saves him. Both the{" "}
        <em>force</em> and its <em>area</em> matter: the smaller the area on which a force acts, the greater the{" "}
        <strong>impact</strong> — this impact is <strong>pressure</strong>.
      </p>
      <p>
        A fluid at rest exerts forces that are <strong>normal (perpendicular) to the surface</strong>: a
        tangential component would set the fluid flowing, which cannot happen for a fluid at rest. The average
        pressure is the normal force per unit area,
      </p>
      <FormulaBlock latex={String.raw`P_{av} = \frac{F}{A}`} />
      <p>and, taking the piston area to zero, in the limiting sense</p>
      <FormulaBlock latex={String.raw`P = \lim_{\Delta A \to 0}\frac{\Delta F}{\Delta A}`} important />
      <Callout type="important" title="Pressure is a scalar">
        It is the <em>component of the force normal to the area</em>, not the (vector) force, that appears in
        F/A. Pressure has dimensions [ML⁻¹T⁻²] and the SI unit N m⁻², named the{" "}
        <strong>pascal (Pa)</strong> after Blaise Pascal (1623–1662). A common unit is the atmosphere:{" "}
        <strong>1 atm = 1.013 × 10⁵ Pa</strong>.
      </Callout>
      <p>
        The <strong>density</strong> of a fluid of mass m occupying volume V is
      </p>
      <FormulaBlock latex={String.raw`\rho = \frac{m}{V}`} />
      <p>
        with dimensions [ML⁻³] (SI unit kg m⁻³). A liquid is largely incompressible, so its density is nearly
        constant at all pressures; gases vary greatly. Water at 4 °C has density 1.0 × 10³ kg m⁻³, and the{" "}
        <strong>relative density</strong> of a substance is its density divided by this reference value
        (e.g. aluminium: relative density 2.7 ⟹ density 2.7 × 10³ kg m⁻³).
      </p>

      <Expandable variant="example" title="Example 9.1">
        <ProblemSolution.Problem>
            The two thigh bones (femurs), each of cross-sectional area 10 cm², support the upper part of a
            human body of mass 40 kg. Estimate the average pressure sustained by the femurs. (Take g = 10 m s⁻².)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Total cross-sectional area of the two femurs:</p>
            <FormulaBlock latex={String.raw`A = 2\times 10\;\mathrm{cm^2} = 20\times10^{-4}\;\mathrm{m^2} = 2\times10^{-3}\;\mathrm{m^2}`} />
            <p>The force acting on them is F = 40 kg wt = 400 N (vertically down, hence normal to the femurs):</p>
            <FormulaBlock latex={String.raw`P_{av} = \frac{F}{A} = \frac{400}{2\times10^{-3}} = 2\times10^5\;\mathrm{N\,m^{-2}}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h3 id="h-pascals-law">9.2.1 Pascal's Law</h3>
      <p>
        Pascal observed that the pressure in a fluid at rest is the same at all points which are at the same
        height. Consider a tiny prismatic element ABC-DEF of the fluid: the forces on its faces are normal to
        them. Equilibrium (F_b sinθ = F_c, F_b cosθ = F_a) combined with geometry (A_b sinθ = A_c, A_b cosθ =
        A_a) gives
      </p>
      <FormulaBlock latex={String.raw`P_a = P_b = P_c`} important />
      <p>
        — the pressure is the same in all directions. A horizontal bar of fluid must also have equal pressures
        at its two ends, so in the absence of flow <strong>the pressure is the same everywhere in a horizontal
        plane</strong>: if it were not, the fluid would have a net force and would flow.
      </p>

      <h3 id="h-depth">9.2.2 Variation of Pressure with Depth</h3>
      <p>
        Consider a vertical cylinder of fluid of base area A and height h, with points 1 (top, pressure P₁) and
        2 (bottom, pressure P₂). The vertical forces balance the weight of the column:
      </p>
      <FormulaBlock latex={String.raw`(P_2 - P_1)A = mg = \rho h A g`} />
      <FormulaBlock latex={String.raw`P_2 - P_1 = \rho g h`} important />
      <p>
        The pressure difference depends only on the vertical separation h, the density ρ and g —{" "}
        <strong>not on the shape or cross-sectional area</strong> of the container. This leads to the
        <em>hydrostatic paradox</em>: three vessels of different shapes connected at the bottom and filled to the
        same height all have the same bottom pressure, so the level in each vessel is the same.
      </p>
      <FormulaBlock latex={String.raw`P = P_a + \rho g h`} important />
      <p>
        The pressure at depth h below the free surface of a liquid open to the atmosphere exceeds atmospheric
        pressure P_a by the <strong>gauge pressure</strong> ρgh.
      </p>

      <Expandable variant="example" title="Example 9.2">
        <ProblemSolution.Problem>
            What is the pressure on a swimmer 10 m below the surface of a lake? (ρ = 1000 kg m⁻³, g = 10 m s⁻²)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`P = P_a + \rho g h = 1.01\times10^5 + 1000\times 10\times 10 = 2.01\times10^5\;\mathrm{Pa} \approx 2\;\mathrm{atm}`} important />
            <p>
              This is a 100% increase from the surface value. At 1 km depth the increase is 100 atm — which is
              why submarines must be built to withstand such enormous pressures.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="example" title="Example 9.3">
        <ProblemSolution.Problem>
            The density of the atmosphere at sea level is 1.29 kg m⁻³. Assuming it does not change with
            altitude, how high would the atmosphere extend?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\rho g h = 1.29\times 9.8\times h = 1.01\times10^5\;\mathrm{Pa} \quad\Rightarrow\quad h = 7989\;\mathrm{m} \approx 8\;\mathrm{km}`} important />
            <p>
              In reality the air density (and g) decreases with height, so the atmospheric cover extends over
              100 km at decreasing pressure. Note also that sea-level pressure is not always 760 mm of Hg — a
              drop of 10 mm or more signals an approaching storm.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="example" title="Example 9.4">
        <ProblemSolution.Problem>
            At a depth of 1000 m in an ocean: (a) what is the absolute pressure? (b) what is the gauge
            pressure? (c) what force acts on a 20 cm × 20 cm window of a submarine at this depth, if its
            interior is maintained at sea-level atmospheric pressure? (ρ<sub>seawater</sub> = 1.03 × 10³ kg m⁻³,
            g = 10 m s⁻²)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>(a) Absolute pressure:</p>
            <FormulaBlock latex={String.raw`P = P_a + \rho g h = 1.01\times10^5 + 1.03\times10^3\times 10\times 1000 = 1.04\times10^7\;\mathrm{Pa} \approx 104\;\mathrm{atm}`} important />
            <p>(b) Gauge pressure:</p>
            <FormulaBlock latex={String.raw`P_g = \rho g h = 1.03\times10^3\times 10\times 1000 = 1.03\times10^7\;\mathrm{Pa} \approx 103\;\mathrm{atm}`} important />
            <p>(c) Net pressure on the window = gauge pressure; area A = 0.04 m²:</p>
            <FormulaBlock latex={String.raw`F = P_g\,A = 1.03\times10^7\times 0.04 = 4.12\times10^5\;\mathrm{N}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h3 id="h-atmosphere">9.2.3 Atmospheric Pressure and Gauge Pressure</h3>
      <p>
        Atmospheric pressure at any point equals the weight of a column of air of unit cross-section reaching to
        the top of the atmosphere — 1.013 × 10⁵ Pa at sea level. The Italian scientist{" "}
        <strong>Evangelista Torricelli</strong> (1608–1647) devised the first method to measure it: a long glass
        tube, closed at one end and filled with mercury, is inverted into a trough of mercury. Above the mercury
        column only mercury vapour remains (its negligible pressure may be ignored), so atmospheric pressure
        balances the column:
      </p>
      <FormulaBlock latex={String.raw`P_a = \rho_{\mathrm{Hg}}\,g\,h`} />
      <p>
        At sea level the column is about <strong>76 cm of mercury = 1 atm</strong>. Pressure is commonly stated
        in mm of Hg; a pressure equivalent to 1 mm is called a <strong>torr</strong> (1 torr = 133 Pa). In
        meteorology the <strong>bar</strong> and millibar are used (1 bar = 10⁵ Pa).
      </p>
      <p>
        An <strong>open-tube manometer</strong> (a U-tube with a suitable liquid — oil for small differences,
        mercury for large ones) measures pressure differences: one end open to the atmosphere, the other to the
        system of interest. The gauge pressure P − P_a is proportional to the manometer height h.
      </p>

      <h3 id="h-hydraulic">9.2.4 Hydraulic Machines</h3>
      <Callout type="important" title="Pascal's law — second form">
        Whenever external pressure is applied on any part of a fluid contained in a vessel, it is transmitted{" "}
        <strong>undiminished and equally in all directions</strong>.
      </Callout>
      <p>
        In a <strong>hydraulic lift</strong> a small piston of area A₁ exerts force F₁ on the liquid; the
        pressure P = F₁/A₁ is transmitted to a larger piston of area A₂, which supports a large load:
      </p>
      <FormulaBlock latex={String.raw`F_2 = P\,A_2 = \frac{A_2}{A_1}\,F_1`} important />
      <p>
        The factor A₂/A₁ is the <strong>mechanical advantage</strong>. Hydraulic brakes work the same way: a
        small pedal force drives a master piston, and the pressure is transmitted equally to the cylinders at
        all four wheels, giving equal braking effort everywhere.
      </p>

      <Expandable variant="example" title="Example 9.5">
        <ProblemSolution.Problem>
            Two syringes of different cross-sections (diameters 1.0 cm and 3.0 cm) are connected with a rubber
            tube filled with water. (a) Find the force on the larger piston when 10 N is applied to the smaller.
            (b) If the smaller piston is pushed in through 6.0 cm, how much does the larger piston move out?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>(a) Pressure is transmitted undiminished:</p>
            <FormulaBlock latex={String.raw`F_2 = \frac{A_2}{A_1}F_1 = \frac{\pi(3/2\times10^{-2})^2}{\pi(1/2\times10^{-2})^2}\times 10 = 9\times 10 = 90\;\mathrm{N}`} important />
            <p>(b) Water is incompressible: displaced volumes are equal, A₁L₁ = A₂L₂:</p>
            <FormulaBlock latex={String.raw`L_2 = \frac{A_1}{A_2}L_1 = \frac{1}{9}\times 6.0 = 0.67\;\mathrm{cm}`} important />
            <p>(Atmospheric pressure is common to both pistons and has been ignored.)</p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="example" title="Example 9.6">
        <ProblemSolution.Problem>
            In a car lift compressed air exerts a force F₁ on a small piston of radius 5.0 cm; the pressure is
            transmitted to a second piston of radius 15 cm. If the mass of the car is 1350 kg, calculate F₁ and
            the pressure needed to accomplish this task. (g = 9.8 m s⁻²)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`F_1 = \frac{A_1}{A_2}F_2 = \left(\frac{5}{15}\right)^2\times 1350\times 9.8 = 1470\;\mathrm{N} \approx 1.5\times10^3\;\mathrm{N}`} important />
            <FormulaBlock latex={String.raw`P = \frac{F_1}{A_1} = \frac{1470}{\pi(0.05)^2} \approx 1.9\times10^5\;\mathrm{Pa}`} important />
            <p>— almost double the atmospheric pressure.</p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-streamline">9.3 Streamline Flow</h2>
      <p>
        The study of fluids in motion is <strong>fluid dynamics</strong>. Flow is <strong>steady</strong> if at
        any given point the velocity of each passing fluid particle remains constant in time (the velocity may
        differ from point to point, but the map of flow is stationary and particle paths do not cross).
      </p>
      <p>
        A <strong>streamline</strong> is a curve whose tangent at any point is in the direction of the fluid
        velocity there. No two streamlines can cross — otherwise a particle would have two possible velocities.
        Closely spaced streamlines mean high speed.
      </p>
      <p>
        Consider the flow across three planes P, R, Q cut perpendicular to the streamlines (areas A_P, A_R, A_Q
        with speeds v_P, v_R, v_Q). The mass crossing each surface per time Δt is the same:
      </p>
      <FormulaBlock latex={String.raw`\rho_P A_P v_P \Delta t = \rho_R A_R v_R \Delta t = \rho_Q A_Q v_Q \Delta t`} />
      <p>
        For an incompressible fluid (ρ constant) this reduces to the <strong>equation of continuity</strong> —
        a statement of conservation of mass:
      </p>
      <FormulaBlock latex={String.raw`A_P v_P = A_R v_R = A_Q v_Q \qquad\Rightarrow\qquad A v = \mathrm{constant}`} important />
      <p>
        The product Av is the <strong>volume flux (flow rate)</strong>, constant along the pipe: at narrower
        portions the fluid speeds up. Steady laminar flow is achieved at low flow speeds; beyond a critical
        speed the flow becomes <strong>turbulent</strong> (fast streams striking rocks produce the foamy
        &ldquo;white-water rapids&rdquo;).
      </p>

      <h2 id="h-bernoulli">9.4 Bernoulli's Principle</h2>
      <p>
        Bernoulli&rsquo;s equation relates the pressure difference between two points of a pipe to the{" "}
        <em>kinetic</em> energy change and the <em>elevation (potential)</em> change. It was developed by the
        Swiss physicist <strong>Daniel Bernoulli</strong> in 1738 using conservation of energy.
      </p>
      <Stepper
        steps={[
          {
            label: "Geometry of the flow",
            description:
              "In a pipe of varying cross-section, fluid initially between B and D moves in time Δt: at B (speed v₁) to C, a distance v₁Δt, and at D (speed v₂) to E. Pressures P₁ and P₂ act on the faces of areas A₁ and A₂.",
          },
          {
            label: "Work done on the fluid",
            description:
              "W₁ = P₁A₁(v₁Δt) = P₁ΔV and W₂ = P₂A₂(v₂Δt) = P₂ΔV, with the same volume ΔV passing both regions (continuity). Net work = (P₁ − P₂)ΔV.",
          },
          {
            label: "Energy changes",
            description:
              "This work goes partly into kinetic and partly into potential energy: ΔK = ½ρΔV(v₂² − v₁²) and ΔU = ρgΔV(h₂ − h₁), where Δm = ρΔV.",
          },
          {
            label: "Work–energy theorem",
            description:
              "(P₁ − P₂)ΔV = ½ρΔV(v₂² − v₁²) + ρgΔV(h₂ − h₁). Dividing by ΔV and rearranging gives Bernoulli's equation.",
          },
        ]}
      />
      <FormulaBlock latex={String.raw`P_1 + \frac12\rho v_1^2 + \rho g h_1 = P_2 + \frac12\rho v_2^2 + \rho g h_2`} important />
      <FormulaBlock latex={String.raw`P + \frac12\rho v^2 + \rho g h = \mathrm{constant}`} important />
      <Callout type="note" title="Restrictions on Bernoulli's equation">
        <p>
          It assumes <strong>no viscous friction</strong> (internal friction between the layers converts kinetic
          energy into heat), so it applies ideally to non-viscous fluids, and the fluid must be{" "}
          <strong>incompressible</strong> and in <strong>steady</strong> flow — it does not hold for turbulent
          flow where pressure and velocity fluctuate in time. For a fluid at rest (v = 0) it reduces to the
          hydrostatic relation P₁ − P₂ = ρg(h₂ − h₁).
        </p>
      </Callout>

      <h3 id="h-efflux">9.4.1 Speed of Efflux: Torricelli's Law</h3>
      <p>
        <em>Efflux</em> means fluid outflow. Consider a tank with a small hole at height y₁ and a liquid surface
        at height y₂ under pressure P. If the tank area is much larger than the hole, v₂ ≈ 0, and Bernoulli
        between the surface (2) and the hole (1, where P₁ = P_a) gives
      </p>
      <FormulaBlock latex={String.raw`v_1^2 = 2gh + \frac{2(P-P_a)}{\rho},\qquad h = y_2 - y_1`} />
      <p>
        When P &gt;&gt; P_a and 2gh is negligible the efflux speed is set by the container pressure — the
        situation in <strong>rocket propulsion</strong>. If the tank is open to the atmosphere (P = P_a):
      </p>
      <FormulaBlock latex={String.raw`v = \sqrt{2gh}`} important />
      <p>
        This is <strong>Torricelli's law</strong>: the efflux speed equals the speed a body reaches in free
        fall from height h.
      </p>

      <h3 id="h-lift">9.4.2 Dynamic Lift</h3>
      <p>
        <strong>Dynamic lift</strong> is the force on a body (an aeroplane wing, a hydrofoil, a spinning ball)
        by virtue of its motion through a fluid.
      </p>
      <Stepper
        steps={[
          {
            label: "Ball without spin",
            description:
              "Streamlines are symmetric above and below, so the air speeds (and pressures) are equal — no net force on the ball.",
          },
          {
            label: "Ball with spin — Magnus effect",
            description:
              "The spinning ball drags air with it; the flow speed is larger over one side than the other, so the pressure there is lower and the ball experiences a sideways/upward force — the deviation from a parabolic trajectory in cricket, tennis, baseball and golf.",
          },
          {
            label: "Aerofoil (aircraft wing)",
            description:
              "The wing's asymmetric shape crowds the streamlines above it, making the air speed higher above and lower below. The resulting upward pressure difference produces the lift that balances the plane's weight.",
          },
        ]}
      />

      <Expandable variant="example" title="Example 9.7">
        <ProblemSolution.Problem>
            A fully loaded Boeing aircraft has a mass of 3.3 × 10⁵ kg and a total wing area of 500 m². It flies
            level with speed 960 km/h. (a) Estimate the pressure difference between the lower and upper wing
            surfaces. (b) Estimate the fractional increase in the air speed on the upper surface relative to the
            lower. (ρ<sub>air</sub> = 1.2 kg m⁻³)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>(a) In level flight the weight is balanced by the pressure difference over the wings:</p>
            <FormulaBlock latex={String.raw`\Delta P\times A = mg \quad\Rightarrow\quad \Delta P = \frac{3.3\times10^5\times 9.8}{500} = 6.5\times10^3\;\mathrm{N\,m^{-2}}`} important />
            <p>
              (b) Ignoring the height difference between the two surfaces, ΔP = ½ρ(v₂² − v₁²) ≈ ρ v_av (v₂ −
              v₁), where v_av = (v₂ + v₁)/2 = 267 m s⁻¹:
            </p>
            <FormulaBlock latex={String.raw`\frac{v_2 - v_1}{v_{av}} = \frac{\Delta P}{\rho\,v_{av}^2} = \frac{6.5\times10^3}{1.2\times 267^2} \approx 0.08`} important />
            <p>The air above the wing needs to be only about 8% faster than that below.</p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-viscosity">9.5 Viscosity</h2>
      <p>
        Most fluids are not ideal: they offer resistance to motion, an <strong>internal friction</strong> known
        as <strong>viscosity</strong>. Consider oil between two glass plates: the bottom is fixed, the top moves
        with velocity v. The layer in contact with the top plate moves at v, the layer at the bottom is at rest,
        and the intermediate layers have uniformly increasing velocities — this is <em>laminar</em> flow. Each
        layer is pulled forward by its upper layer and backward by its lower one.
      </p>
      <p>
        In pipe flow the velocity is maximum along the axis and falls to zero at the walls. Since a flowing fluid
        shears continuously, the stress depends on the <strong>rate of strain</strong> (v/l) rather than the
        strain itself. The <strong>coefficient of viscosity</strong> η is
      </p>
      <FormulaBlock latex={String.raw`\eta = \frac{\mathrm{shearing\;stress}}{\mathrm{strain\;rate}} = \frac{F/A}{v/l}`} important />
      <p>
        The SI unit is the <strong>poiseuille (Pl)</strong> = N s m⁻² = Pa s; dimensions [ML⁻¹T⁻¹]. Thin liquids
        (water, alcohol) are less viscous than thick ones (coal tar, blood, glycerine).
      </p>
      <TableCard
        caption="Table 9.2 — Viscosities of some fluids (mPl). Viscosity of liquids falls with temperature; that of gases rises."
        headers={["Fluid", "Temperature (°C)", "Viscosity (mPl)"]}
        rows={[
          { cells: ["Water", "20", "1.0"] },
          { cells: ["Water", "100", "0.3"] },
          { cells: ["Blood", "37", "2.7"] },
          { cells: ["Machine oil", "16", "113"] },
          { cells: ["Machine oil", "38", "34"] },
          { cells: ["Glycerine", "20", "830"] },
          { cells: ["Honey", "—", "200"] },
          { cells: ["Air", "0", "0.017"] },
          { cells: ["Air", "40", "0.019"] },
        ]}
      />
      <KeyPoint title="Temperature behaviour of viscosity">
        <strong>Liquids:</strong> η <em>decreases</em> as temperature rises (atoms become more mobile).{" "}
        <strong>Gases:</strong> η <em>increases</em> with temperature (random atomic motion increases). Blood is
        more viscous than water, and its relative viscosity η/η<sub>water</sub> is constant between 0 °C and
        37 °C.
      </KeyPoint>

      <Expandable variant="example" title="Example 9.8">
        <ProblemSolution.Problem>
            A metal block of area 0.10 m² is connected to a 0.010 kg mass via a string over an ideal pulley. The
            liquid film between the block and the table has thickness 0.30 mm. When released the block moves to
            the right at a constant speed of 0.085 m s⁻¹. Find the coefficient of viscosity of the liquid.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>The shear force equals the tension, i.e. the weight of the suspended mass:</p>
            <FormulaBlock latex={String.raw`F = T = mg = 0.010\times 9.8 = 9.8\times10^{-2}\;\mathrm{N}`} />
            <p>Shear stress = F/A = 0.98 N m⁻²; strain rate = v/l = 0.085/(3.0×10⁻⁴) = 283 s⁻¹:</p>
            <FormulaBlock latex={String.raw`\eta = \frac{F/A}{v/l} = \frac{0.98}{283} = 3.46\times10^{-3}\;\mathrm{Pa\,s}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h3 id="h-stokes">9.5.1 Stokes' Law</h3>
      <p>
        A body falling through a fluid drags the fluid layer in contact with it, setting up relative motion
        between layers and hence a retarding force. For a sphere of radius a moving with velocity v through a
        fluid of viscosity η, <strong>Stokes&rsquo; law</strong> (George G. Stokes, 1819–1903) gives the drag
        force as
      </p>
      <FormulaBlock latex={String.raw`F = 6\pi\eta a v`} important />
      <p>
        A raindrop accelerates initially, but as its velocity grows the drag grows, until viscous force plus
        buoyancy balance gravity: the drop then falls with constant <strong>terminal velocity</strong>,
      </p>
      <FormulaBlock latex={String.raw`6\pi\eta a v_t = \frac{4\pi}{3}a^3(\rho-\sigma)g \qquad\Rightarrow\qquad v_t = \frac{2a^2(\rho-\sigma)g}{9\eta}`} important />
      <p>
        where ρ and σ are the densities of the sphere and the fluid. The terminal velocity varies as the{" "}
        <strong>square of the radius</strong> and inversely as the viscosity.
      </p>

      <Expandable variant="example" title="Example 9.9">
        <ProblemSolution.Problem>
            The terminal velocity of a copper ball of radius 2.0 mm falling through a tank of oil at 20 °C is
            6.5 cm s⁻¹. Compute the viscosity of the oil at 20 °C. (Density of copper 8.9 × 10³ kg m⁻³, of oil
            1.5 × 10³ kg m⁻³, g = 9.8 m s⁻²)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`\eta = \frac{2a^2(\rho-\sigma)g}{9v_t} = \frac{2\times(2\times10^{-3})^2\times(8.9\times10^3-1.5\times10^3)\times 9.8}{9\times 6.5\times10^{-2}}`} />
            <FormulaBlock latex={String.raw`\eta = 9.9\times10^{-1}\;\mathrm{kg\,m^{-1}\,s^{-1}}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-surface-tension">9.6 Surface Tension</h2>
      <p>
        Oil and water do not mix; water wets you and me but not ducks; mercury does not wet glass; oil rises up
        a cotton wick and sap rises to the leaves of tall trees; wet paint-brush hairs form a fine tip when the
        brush is taken out of water. All these phenomena involve the <strong>free surface</strong> of a liquid,
        which possesses <strong>additional energy</strong>. This extra energy is surface tension — and since
        gases have no free surface, it is a property of liquids only.
      </p>

      <h3 id="h-surface-energy">9.6.1 Surface Energy</h3>
      <p>
        A molecule well inside a liquid is attracted by all the surrounding molecules, giving it a negative
        potential energy — which is why a large heat of vaporisation (~40 kJ/mol for water) is needed to
        disperse the liquid&rsquo;s molecules. A molecule at the surface is surrounded only on the lower side,
        so its potential energy is roughly <strong>half</strong> that of an interior molecule:{" "}
        <strong>surface molecules carry extra energy</strong>. A liquid therefore tends to have the least
        surface area the external conditions allow, and creating surface requires energy.
      </p>

      <h3 id="h-st-surface-energy">9.6.2 Surface Energy and Surface Tension</h3>
      <p>
        Slide a bar of length l along parallel guides over a liquid film (two surfaces). Moving the bar a
        distance d creates extra area 2dl; the extra surface energy equals the work done,
      </p>
      <FormulaBlock latex={String.raw`S(2dl) = Fd \qquad\Rightarrow\qquad S = \frac{F}{2l}`} important />
      <p>
        The quantity S — the <strong>surface tension</strong> — is the surface energy per unit area and
        simultaneously the force per unit length exerted by the liquid on the bar, acting in the plane of the
        interface. It is really a property of the <em>interface between two materials</em>: attractive molecules
        across the interface reduce the surface energy, repulsive ones increase it.
      </p>
      <TableCard
        caption="Table 9.3 — Surface tension of some liquids at the temperatures indicated, with heats of vaporisation."
        headers={["Liquid", "Temperature (°C)", "Surface tension (N/m)", "Heat of vaporisation (kJ/mol)"]}
        rows={[
          { cells: ["Helium", "−270", "0.000239", "0.115"] },
          { cells: ["Oxygen", "−183", "0.0132", "7.1"] },
          { cells: ["Ethanol", "20", "0.0227", "40.6"] },
          { cells: ["Water", "20", "0.0727", "44.16"] },
          { cells: ["Mercury", "20", "0.4355", "63.2"] },
        ]}
      />
      <p>
        Surface tension, like viscosity, <strong>falls with temperature</strong>. It can be measured by
        balancing a flat glass plate whose edge just touches the liquid surface: the extra weight W needed to
        lift it gives S<sub>la</sub> = W/2l = mg/2l, where l is the length of the plate edge and the subscript
        (la) flags the liquid–air interface.
      </p>

      <h3 id="h-contact-angle">9.6.3 Angle of Contact</h3>
      <p>
        The liquid surface near its line of contact with another medium is generally curved. The{" "}
        <strong>angle of contact θ</strong> is the angle between the tangent to the liquid surface at the point
        of contact and the solid surface (measured inside the liquid). It decides whether a liquid spreads or
        forms droplets: water forms droplets on a lotus leaf but spreads over a clean plastic plate.
      </p>
      <p>
        At the contact line the three interfacial tensions S<sub>la</sub> (liquid–air), S<sub>sa</sub>
        (solid–air) and S<sub>sl</sub> (solid–liquid) are in equilibrium:
      </p>
      <FormulaBlock latex={String.raw`S_{la}\cos\theta + S_{sl} = S_{sa}`} important />
      <Stepper
        steps={[
          {
            label: "Obtuse angle — no wetting",
            description:
              "S_sl > S_la: liquid molecules attract each other strongly and the solid weakly (water on a waxy/oily surface, mercury on any surface). It costs energy to create a liquid–solid surface, so the liquid does not wet the solid.",
          },
          {
            label: "Acute angle — wetting",
            description:
              "S_sl < S_la: the liquid molecules are attracted strongly to the solid (water on glass or plastic, kerosene on virtually anything). The liquid spreads.",
          },
          {
            label: "Wetting and waterproofing agents",
            description:
              "Soaps, detergents and dyes are wetting agents — they make the angle of contact small so they penetrate and act well. Water-proofing agents do the opposite, creating a large angle of contact between water and the fibres.",
          },
        ]}
      />

      <h3 id="h-drops-bubbles">9.6.4 Drops and Bubbles</h3>
      <p>
        Free liquid drops and bubbles are <strong>spherical</strong> (when gravity and other forces can be
        neglected) because a sphere has the least surface area — hence the least surface energy — for a given
        volume, and a liquid aims at the smallest possible surface.
      </p>
      <p>
        Surface tension also implies that the pressure inside a spherical drop exceeds the outside pressure. If
        the radius grows by Δr the extra surface energy is [4π(r + Δr)² − 4πr²]S<sub>la</sub> = 8πrΔr·S_la,
        balanced by the work (P_i − P_o)4πr²Δr, giving
      </p>
      <FormulaBlock latex={String.raw`P_i - P_o = \frac{2\,S_{la}}{r}`} important />
      <p>
        In general the <strong>convex side of a liquid-gas interface has higher pressure</strong> than the
        concave side — an air bubble in a liquid has higher internal pressure. A <strong>soap bubble</strong> has
        two interfaces, so the excess pressure doubles:
      </p>
      <FormulaBlock latex={String.raw`P_i - P_o = \frac{4\,S_{la}}{r}`} important />
      <p>— which is why you must blow hard (but not too hard) to form a soap bubble.</p>

      <h3 id="h-capillary">9.6.5 Capillary Rise</h3>
      <p>
        The pressure difference across a curved interface explains why water rises up a narrow tube against
        gravity. In a capillary of radius a dipped in water the meniscus is concave (acute contact angle), and
        the pressure just below it is lower than atmospheric:
      </p>
      <FormulaBlock latex={String.raw`P_i - P_o = \frac{2S\cos\theta}{a}`} />
      <p>
        Equating this to the hydrostatic pressure hρg of the raised column gives the{" "}
        <strong>capillary rise</strong>:
      </p>
      <FormulaBlock latex={String.raw`h = \frac{2S\cos\theta}{\rho g a}`} important />
      <p>
        The rise is larger for a smaller tube radius — typically a few cm for fine capillaries. For water in a
        capillary of a = 0.05 cm with S = 0.073 N m⁻¹: h = 2(0.073)/(10³ × 9.8 × 5 × 10⁻⁴) ={" "}
        <strong>2.98 cm</strong>. If the meniscus is convex (mercury: cosθ negative), the liquid is{" "}
        <strong>depressed</strong> below its outside level.
      </p>

      <Expandable variant="example" title="Example 9.10">
        <ProblemSolution.Problem>
            The lower end of a capillary tube of diameter 2.00 mm is dipped 8.00 cm below the surface of water
            in a beaker. What pressure in the tube is required to blow a hemispherical bubble at its end in
            water? Also calculate the excess pressure. (S = 7.30 × 10⁻² N m⁻¹, 1 atm = 1.01 × 10⁵ Pa, ρ = 1000
            kg m⁻³, g = 9.80 m s⁻²)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              A bubble of gas in a liquid has a single liquid surface, so the excess pressure is 2S/r (not 4S/r).
              The pressure outside equals atmospheric plus the 8.00 cm water column:
            </p>
            <FormulaBlock latex={String.raw`P_o = 1.01\times10^5 + 0.08\times 1000\times 9.80 = 1.01784\times10^5\;\mathrm{Pa}`} />
            <p>With r = 1.00 × 10⁻³ m (equal to the tube radius, the bubble being hemispherical):</p>
            <FormulaBlock latex={String.raw`P_i = P_o + \frac{2S}{r} = 1.01784\times10^5 + \frac{2\times 7.3\times10^{-2}}{10^{-3}} = 1.02\times10^5\;\mathrm{Pa}`} important />
            <p>The excess pressure in the bubble is <strong>146 Pa</strong>.</p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-exercises">Exercises 9.1 – 9.20</h2>
      <p>Selected exercises with hints and the essential answers.</p>

      <Expandable variant="exercise" title="Exercises 9.1 &amp; 9.2">
        <ProblemSolution.Problem>
            9.1 Explain why: (a) blood pressure in humans is greater at the feet than at the brain; (b)
            atmospheric pressure at ~6 km is nearly half its sea-level value though the atmosphere is over 100
            km high; (c) hydrostatic pressure is a scalar though it is force divided by area. <br />
            9.2 Explain why: (a) the angle of contact of mercury with glass is obtuse while that of water with
            glass is acute; (b) water on a clean glass surface spreads while mercury forms drops; (c) surface
            tension is independent of the area of the surface; (d) water with detergent should have small angles
            of contact; (e) a drop of liquid under no external forces is always spherical.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              9.1 (a) Hydrostatic ρgh adds to the pressure: the blood column above the feet is taller. (b) Air
              is compressible — its density falls rapidly with height, so most of the atmosphere&rsquo;s mass
              lies close to the ground. (c) The numerator is the <em>normal component</em> of the force; pressure
              has no direction — the force on any area is normal to it.
            </p>
            <p>
              9.2 (a) Mercury molecules attract each other more strongly than glass attracts them (S_sl &gt;
              S_la) ⟹ obtuse θ; water is strongly pulled by glass ⟹ acute θ. (b) Water-to-glass adhesion exceeds
              water cohesion; for mercury cohesion dominates. (c) S is an interface property (force/length or
              energy/area), not an extent of surface. (d) Detergents lower the angle of contact so the solution
              penetrates and acts well. (e) A sphere has the least area (hence least surface energy) for a given
              volume.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 9.3">
        <ProblemSolution.Problem>
            Fill in the blanks: (a) Surface tension of liquids generally ___ with temperature. (b) Viscosity of
            gases ___ with temperature, while viscosity of liquids ___ with temperature. (c) For solids the
            shearing force is proportional to ___, while for fluids it is proportional to ___. (d) For a fluid
            in steady flow, the increase in flow speed at a constriction follows ___. (e) For a model plane in a
            wind tunnel, turbulence occurs at a ___ speed than for an actual plane.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              (a) decreases; (b) increases, decreases; (c) shear strain, rate of shear strain (v/l); (d)
              conservation of mass (continuity: Av = constant); (e) greater — the model is smaller, and the
              critical speed scales as 1/L, so turbulence needs a higher speed to set in.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 9.4">
        <ProblemSolution.Problem>
            Explain briefly: (a) to keep a piece of paper horizontal you should blow over, not under, it; (b)
            closing a water tap with your fingers makes fast jets gush through the openings; (c) the needle of a
            syringe controls flow rate better than thumb pressure; (d) fluid flowing out of a small hole results
            in a backward thrust on the vessel; (e) a spinning cricket ball in air does not follow a parabolic
            trajectory.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              (a) Fast air above the paper has lower pressure (Bernoulli); higher pressure below lifts it. (b)
              The narrow gaps force the speed to rise (continuity: Av = constant). (c) The outflow speed/rate is
              set by the needle&rsquo;s small cross-section; thumb pressure mainly sets the driving pressure. (d)
              Momentum conservation: the expelled stream carries forward momentum, so the vessel recoils
              backward (rocket principle). (e) The spin drags air, creating a pressure difference (Magnus effect)
              that deflects the ball.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 9.5 – 9.8">
        <ProblemSolution.Problem>
            9.5 A 50 kg girl in high heels balances on a single heel of diameter 1.0 cm. What is the pressure on
            the floor? <br />
            9.6 Pascal duplicated the mercury barometer using French wine (ρ = 984 kg m⁻³). What height of wine
            corresponds to normal atmospheric pressure? <br />
            9.7 A vertical offshore structure can withstand a maximum stress of 10⁹ Pa. Is it suitable for a 3 km
            deep ocean oil well? <br />
            9.8 A hydraulic automobile lift lifts cars up to 3000 kg; the load piston area is 425 cm². What
            maximum pressure must the smaller piston bear?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              9.5 A = π(0.01)²/4 = 7.85 × 10⁻⁵ m²; P = (50 × 9.8)/7.85 × 10⁻⁵ ={" "}
              <strong>6.24 × 10⁶ ≈ 6 × 10⁶ Pa</strong>.
            </p>
            <p>
              9.6 h = P_atm/(ρg) = 1.013 × 10⁵/(984 × 9.8) = <strong>10.5 m</strong>.
            </p>
            <p>
              9.7 Pressure at 3 km ≈ ρgh = 1.03 × 10³ × 9.8 × 3000 ≈ <strong>3 × 10⁷ Pa</strong>, far below 10⁹
              Pa ⟹ <strong>suitable</strong>.
            </p>
            <p>
              9.8 A = 4.25 × 10⁻² m²; P = (3000 × 9.8)/4.25 × 10⁻² ={" "}
              <strong>6.9 × 10⁵ ≈ 7 × 10⁵ Pa</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 9.9 &amp; 9.10">
        <ProblemSolution.Problem>
            9.9 A U-tube contains water and methylated spirit separated by mercury; the mercury columns are level
            with 10.0 cm of water in one arm and 12.5 cm of spirit in the other. What is the specific gravity of
            spirit? <br />
            9.10 If 15.0 cm of water and spirit each are further poured into the arms, what is the difference in
            the mercury levels? (s.g. of mercury = 13.6)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              9.9 Equal mercury levels: ρ_w g(0.10) = ρ_s g(0.125) ⟹ ρ_s = 0.8 × 10³ kg m⁻³ ⟹{" "}
              <strong>specific gravity = 0.8</strong>.
            </p>
            <p>
              9.10 New columns: water 25.0 cm, spirit 27.5 cm. ΔP = g(10³ × 0.250 − 0.8 × 10³ × 0.275) = 9.8 ×
              30 = 294 Pa. Mercury: Δh = 294/(13.6 × 10³ × 9.8) = <strong>2.2 × 10⁻³ m ≈ 0.22 cm</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 9.11 &amp; 9.12">
        <ProblemSolution.Problem>
            9.11 Can Bernoulli&rsquo;s equation describe the flow of water through a rapid in a river? <br />
            9.12 Does it matter if one uses gauge instead of absolute pressures in applying Bernoulli&rsquo;s
            equation?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              9.11 <strong>No</strong> — Bernoulli holds only for steady (streamline) flow of a non-viscous,
              incompressible fluid; rapids are turbulent and unsteady.
            </p>
            <p>
              9.12 <strong>No</strong> — adding the same (uniform) atmospheric pressure to every term adds a
              constant that cancels, so gauge pressures give the same pressure differences as absolute ones as
              long as the surrounding pressure is the same.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 9.13 &amp; 9.14">
        <ProblemSolution.Problem>
            9.13 Glycerine flows steadily through a horizontal tube (length 1.5 m, radius 1.0 cm). If 4.0 × 10⁻³
            kg is collected per second, what pressure difference exists between the ends? (ρ = 1.3 × 10³ kg m⁻³,
            η = 0.83 Pa s) Also check the laminar-flow assumption. <br />
            9.14 In a wind-tunnel test the flow speeds on the upper and lower surfaces of a model wing (area 2.5
            m²) are 70 m s⁻¹ and 63 m s⁻¹. What is the lift? (ρ_air = 1.3 kg m⁻³)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              9.13 Using the Poiseuille-type relation ΔP = 8ηlm&prime;/(ρπr⁴) with m&prime; = 4.0 × 10⁻³ kg s⁻¹:
              ΔP = <strong>9.75 × 10² Pa</strong>. For laminar check: v ≈ 9.8 × 10⁻³ m s⁻¹, so Re ≈ ρv(2r)/η ≈
              0.3 &lt;&lt; 1000 ⟹ the assumption holds.
            </p>
            <p>
              9.14 ΔP = ½ρ(v_u² − v_l²) = ½ × 1.3 × (70² − 63²) ≈ 605 Pa; Lift = ΔP × 2.5 ={" "}
              <strong>1.51 × 10³ N</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 9.15 &amp; 9.16">
        <ProblemSolution.Problem>
            9.15 Figures (a) and (b) show the steady flow of a non-viscous liquid in pipes with vertical pressure
            tubes. Which figure is incorrect and why? <br />
            9.16 The tube of a spray pump has cross-section 8.0 cm²; one end has 40 fine holes of diameter 1.0
            mm each. If the liquid flows in the tube at 1.5 m min⁻¹, what is the ejection speed through the
            holes?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              9.15 The figure that shows a <em>higher</em> liquid column at the constriction is incorrect: at the
              constriction the speed is higher (continuity) so the pressure — and hence the column height — must
              be <strong>lower</strong> (Bernoulli).
            </p>
            <p>
              9.16 Volume flow Q = 8 × 10⁻⁴ × (1.5/60) = 2 × 10⁻⁵ m³ s⁻¹; total hole area = 40 × π(0.5 × 10⁻³)²
              = 3.14 × 10⁻⁵ m²; v = Q/A = <strong>0.64 m s⁻¹</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 9.17 &amp; 9.18">
        <ProblemSolution.Problem>
            9.17 A U-shaped wire dipped in soap solution forms a film between the wire and a 30 cm slider that
            supports a weight of 1.5 × 10⁻² N. What is the surface tension of the film? <br />
            9.18 A thin film supports a weight 4.5 × 10⁻² N [Fig (a)]. What weight is supported by films of the
            same liquid at the same temperature in Figs (b) and (c)? Explain physically.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              9.17 A soap film has two surfaces: S = W/(2l) = 1.5 × 10⁻²/(2 × 0.30) ={" "}
              <strong>2.5 × 10⁻² N m⁻¹</strong>.
            </p>
            <p>
              9.18 The supported weight balances the surface-tension force, which depends only on the slider edge
              length and the liquid&rsquo;s surface tension — both unchanged — so the same <strong>4.5 × 10⁻²
              N</strong> is supported in (b) and (c).
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 9.19 &amp; 9.20">
        <ProblemSolution.Problem>
            9.19 What is the pressure inside a mercury drop of radius 3.00 mm at 20 °C, and what is the excess
            pressure? (S = 4.65 × 10⁻¹ N m⁻¹, P_atm = 1.01 × 10⁵ Pa) <br />
            9.20 What is the excess pressure inside a soap bubble of radius 5.00 mm (S = 2.50 × 10⁻² N m⁻¹)? If
            an air bubble of the same size forms at 40.0 cm depth in the solution (relative density 1.20), what
            pressure is inside it?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              9.19 Excess = 2S/r = 2 × 0.465/(3.00 × 10⁻³) = <strong>310 Pa</strong>; total pressure = 1.01 ×
              10⁵ + 310 = <strong>1.01 × 10⁵ Pa</strong>.
            </p>
            <p>
              9.20 Excess in the soap bubble = 4S/r = 4 × 0.025/(5 × 10⁻³) = <strong>20 Pa</strong>. In the
              liquid at 40.0 cm depth: P_o = 1.01 × 10⁵ + 1200 × 9.8 × 0.40 ≈ 1.057 × 10⁵ Pa; excess for the
              single liquid surface 2S/r = 10 Pa ⟹ P_i ≈ <strong>1.057 × 10⁵ Pa</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormulaCard>
          <p><strong>Pressure &amp; density</strong></p>
          P = F/A (Pa); scalar. P(depth) = P_a + ρgh; gauge pressure = ρgh. Units: 1 atm = 1.01 × 10⁵ Pa, 1 bar
          = 10⁵ Pa, 1 torr = 133 Pa. Density ρ = m/V; relative density = ρ/ρ(water at 4 °C).
        </FormulaCard>
        <FormulaCard>
          <p><strong>Pascal's law &amp; hydraulics</strong></p>
          Pressure in a fluid at rest is equal at equal heights and is transmitted undiminished in all
          directions. Hydraulic lift: F₂ = (A₂/A₁)F₁ — mechanical advantage A₂/A₁ (hydraulic brakes, car lift).
        </FormulaCard>
        <FormulaCard>
          <p><strong>Continuity &amp; Bernoulli</strong></p>
          <FormulaBlock latex={String.raw`A v = \mathrm{constant}`} />
          <FormulaBlock latex={String.raw`P + \frac12\rho v^2 + \rho g h = \mathrm{constant}`} />
          Valid for steady, non-viscous, incompressible flow. Speed of efflux (open tank): v = √(2gh)
          (Torricelli).
        </FormulaCard>
        <FormulaCard>
          <p><strong>Viscosity &amp; Stokes</strong></p>
          η = (F/A)/(v/l), SI unit Pl = Pa s. Liquids: η falls with T; gases: η rises. Stokes: F = 6πηav;
          terminal velocity v_t = 2a²(ρ − σ)g/(9η).
        </FormulaCard>
        <FormulaCard>
          <p><strong>Surface tension</strong></p>
          S = force/length = energy/area (F/2l for a film). Angle of contact: S_la cosθ + S_sl = S_sa. Drop:
          excess = 2S/r; soap bubble: 4S/r. Capillary rise: h = 2S cosθ/(ρga); mercury (cosθ &lt; 0) is
          depressed.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Key physical insights</strong></p>
          Pressure exists throughout a fluid, not just on walls. Streamlines never cross in steady flow.
          Dynamic lift: fast airflow ⟹ low pressure (aerofoil, Magnus effect). Surface energy of molecules is
          what drives drops to be spherical.
        </FormulaCard>
      </div>

      <MistakeCard
        mistake="Pressure is a vector; it acts in the direction of the applied force."
        correction="Pressure is a SCALAR. Only the component of force normal to the area enters F/A, and the force on any area (or wall) is normal to it whatever its orientation. Gauge pressure P_g = P − P_a is what tyre and blood-pressure gauges read."
      />
      <MistakeCard
        mistake="The bottom pressure in a container depends on how much liquid it holds (wide vs narrow vessels)."
        correction="P = P_a + ρgh depends only on the depth h, density and g — not on the amount, cross-section or shape of the container. This is the hydrostatic paradox: equal depths give equal pressures."
      />
      <MistakeCard
        mistake="Bernoulli's equation applies to any real fluid flow."
        correction="It requires a steady, non-viscous (ideal), incompressible fluid. Real viscous flow loses kinetic energy to heat (internal friction), and turbulent/non-steady flows violate it. For a resting fluid it reduces to hydrostatics."
      />
      <MistakeCard
        mistake="An atomosphere would have roughly the same pressure at 6 km as at sea level because it is 100 km tall."
        correction="Air is compressible: density falls rapidly with altitude, so most of the atmosphere's mass (and hence most of the pressure) is near the ground — pressure is already halved by ~6 km, even though the envelope extends beyond 100 km."
      />
      <MistakeCard
        mistake="A soap bubble and an air bubble in a liquid need the same excess pressure for the same radius."
        correction="A soap bubble has TWO liquid-air interfaces: excess = 4S/r; an air bubble inside a liquid has ONE: excess = 2S/r. Using the wrong factor is a classic error (Example 9.10 highlights the one-surface case)."
      />
    </>
  );
}