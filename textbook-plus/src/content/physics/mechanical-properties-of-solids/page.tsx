import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function MechanicalPropertiesOfSolidsChapter() {
  return (
    <>
      <h2 id="h-intro">8.1 Introduction</h2>
      <p>
        In previous chapters we studied the motion of <em>ideal</em> bodies — bodies that are assumed to be{" "}
        <strong>perfectly rigid</strong>. In reality no body is perfectly rigid: even a steel bar can be
        stretched, compressed, bent or twisted when forces are applied. Whenever such a force is removed the
        body tends to regain its original size and shape, and this property is called <strong>elasticity</strong>.
        If a body retains its deformed shape when the deforming forces are removed, it is said to be{" "}
        <strong>plastic</strong> (putty and mud behave as ideal plastics).
      </p>
      <Callout type="note" title="Why elastic behaviour matters">
        <p>
          The design of buildings (steel and concrete columns), bridges, automobile components and ropeways all
          depend on how materials respond to stress. It also explains the characteristic shapes of railway
          tracks, why glass is brittle while brass can be drawn into wires, and how the strength and weight of
          an aeroplane or an artificial limb are balanced against elasticity.
        </p>
      </Callout>

      <h2 id="h-stress-strain">8.2 Stress and Strain</h2>
      <p>
        When a deforming force acts on a body, internal <strong>restoring forces</strong> are set up that are
        equal and opposite to the applied force, distributed over the cross-sectional area. This restoring force
        per unit area is the <strong>stress</strong>:
      </p>
      <FormulaBlock latex={String.raw`\mathrm{Stress} = \frac{F}{A}`} important />
      <p>
        Stress has units N m⁻², the <strong>pascal (Pa)</strong>, and dimensions [ML⁻¹T⁻²]. The fractional
        change in the dimension of a body is its <strong>strain</strong>, a pure (dimensionless) number equal to
        the relative change in length, shape or volume. There are three kinds of deformation, each with its own
        stress and strain:
      </p>
      <Stepper
        steps={[
          {
            label: "Longitudinal (tensile / compressive)",
            description:
              "Equal and opposite forces act normal to the cross-section. Stretching produces tensile stress; squeezing produces compressive stress (both are longitudinal). The strain is the fractional change in length ΔL/L.",
          },
          {
            label: "Shearing (tangential)",
            description:
              "Equal and opposite forces act parallel to the cross-sectional area. The two faces slide relative to each other by Δx over a length L, giving shearing strain Δx/L = tanθ.",
          },
          {
            label: "Hydraulic (volume)",
            description:
              "The body is immersed in a fluid at high pressure: forces act normal to every point of the surface, the shape is unchanged but the volume falls. Hydraulic stress equals the pressure and the volume strain is ΔV/V.",
          },
        ]}
      />
      <FormulaBlock latex={String.raw`\mathrm{Longitudinal\;\;strain}=\frac{\Delta L}{L}`} />
      <FormulaBlock latex={String.raw`\mathrm{Shearing\;\;strain} = \frac{\Delta x}{L} = \tan\theta \;\approx\; \theta`} />
      <FormulaBlock latex={String.raw`\mathrm{Volume\;\;strain} = \frac{\Delta V}{V}`} />
      <TableCard
        caption="Table 8.4 — Summary of the three types of stress, strain and modulus of elasticity."
        headers={["Type of stress", "Deformation produced", "Change in shape", "Change in volume", "Modulus of elasticity", "Name of modulus", "State of matter"]}
        rows={[
          { cells: ["Tensile or compressive stress, F/A", "Elongation or compression, ΔL/L", "Yes", "No", "Y = FL/(AΔL)", "Young's modulus", "Solid"] },
          { cells: ["Shearing stress, F/A", "Pure shear, θ or Δx/L", "Yes", "No", "G = F/(Aθ)", "Shear or rigidity modulus", "Solid"] },
          { cells: ["Hydraulic stress, pressure p (normal at every point)", "Volume change, ΔV/V", "No", "Yes", "B = −p/(ΔV/V)", "Bulk modulus", "Solid, liquid and gas"] },
        ]}
      />

      <h2 id="h-hookes-law">8.3 Hooke's Law</h2>
      <p>
        Experimentally, for <em>small</em> deformations the stress is directly proportional to the strain. This
        is <strong>Hooke&rsquo;s law</strong>:
      </p>
      <FormulaBlock latex={String.raw`\mathrm{stress} = k\times\mathrm{strain}`} important />
      <p>
        The proportionality constant k is the <strong>modulus of elasticity</strong> of the material. Hooke&rsquo;s
        law is an <em>empirical law</em> — it holds for most materials but is not universal.
      </p>

      <h2 id="h-ss-curve">8.4 Stress-Strain Curve</h2>
      <p>
        Wire a material into a wire and load it step by step while recording the extension: a{" "}
        <strong>stress-strain curve</strong> results. For a typical metal the key features are:
      </p>
      <Stepper
        steps={[
          {
            label: "O → A — linear elastic region",
            description:
              "Stress is proportional to strain; Hooke's law holds. Remove the load and the body returns to its original dimensions.",
          },
          {
            label: "A → B — nonlinear but recoverable",
            description:
              "Stress and strain are no longer proportional, yet the body still completely recovers when unloaded. B is the yield point; the stress at B is the yield strength σ_y of the material.",
          },
          {
            label: "B → D — plastic deformation",
            description:
              "Strain grows rapidly for a small increase in stress. Unloading at C leaves the body with a permanent set (strain ≠ 0 at zero stress). D is the ultimate tensile strength σ_u — the largest stress the material can take.",
          },
          {
            label: "Beyond D — fracture",
            description:
              "The material stretches even under a decreasing load and finally breaks at E. If D and E are close the material is brittle; if far apart it is ductile.",
          },
        ]}
      />
      <KeyPoint title="Elastomers deform differently">
        Materials like aorta tissue and rubber (elastomers) have a very large elastic region but{" "}
        <strong>do not obey Hooke&rsquo;s law</strong> over most of it, and they have no well-defined plastic
        region.
      </KeyPoint>
      <Callout type="tip" title="More elastic = stretches less">
        Compare steel, aluminium, brass and copper wires of identical geometry under the same stretching force:
        steel needs 2000 N while aluminium needs only 690 N, brass 900 N and copper 1100 N to produce the same
        0.1% elongation. <strong>Steel is therefore the most elastic</strong> of the four — it deforms the least
        for a given load — which is why it is used in heavy-duty machines and structures.
      </Callout>

      <h2 id="h-elastic-moduli">8.5 Elastic Moduli</h2>
      <h3 id="h-young">8.5.1 Young's Modulus (elasticity in length)</h3>
      <p>
        For tensile and compressive stress of the same magnitude the strain of a given material is the same.
        <strong>Young&rsquo;s modulus</strong> is the ratio of longitudinal stress to longitudinal strain:
      </p>
      <FormulaBlock latex={String.raw`Y = \frac{\mathrm{tensile\;or\;compressive\;stress}}{\mathrm{longitudinal\;strain}} = \frac{\sigma}{\varepsilon}`} />
      <FormulaBlock latex={String.raw`Y = \frac{F/A}{\Delta L/L} = \frac{F\,L}{A\,\Delta L}`} important />
      <p>
        Metals have large values of Y — small elongations need large forces. Wood, bone, concrete and glass have
        comparatively small values.
      </p>
      <TableCard
        caption="Young's moduli used in this chapter (GPa). Steel is the stiffest and hence the most elastic."
        headers={["Material", "Y (GPa)"]}
        rows={[
          { cells: ["Structural steel", "200"] },
          { cells: ["Copper", "110"] },
          { cells: ["Brass", "≈ 91"] },
          { cells: ["Aluminium", "≈ 69"] },
          { cells: ["Bone (thighbone)", "9.4"] },
          { cells: ["Mild steel yield strength σ_y", "300 × 10⁶ N m⁻²"] },
        ]}
      />

      <Expandable variant="example" title="Example 8.1">
        <ProblemSolution.Problem>
            A structural steel rod has a radius of 10 mm and a length of 1.0 m. A 100 kN force stretches it
            along its length. Calculate: (a) the stress, (b) the elongation, (c) the strain on the rod. Young&rsquo;s
            modulus of structural steel is 2.0 × 10¹¹ N m⁻².
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>(a) Cross-sectional area</p>
            <FormulaBlock latex={String.raw`A = \pi r^2 = 3.14\times(10^{-2})^2 = 3.14\times10^{-4}\;\mathrm{m^2}`} />
            <FormulaBlock latex={String.raw`\sigma = \frac{F}{A} = \frac{10^5}{3.14\times10^{-4}} = 3.18\times10^8\;\mathrm{N\,m^{-2}}`} important />
            <p>(b) Elongation ΔL = FL/(AY):</p>
            <FormulaBlock latex={String.raw`\Delta L = \frac{F L}{A Y} = \frac{3.18\times10^8\times 1.0}{2.0\times10^{11}} = 1.59\times10^{-3}\;\mathrm{m} = 1.59\;\mathrm{mm}`} important />
            <p>(c) Strain ε = ΔL/L:</p>
            <FormulaBlock latex={String.raw`\varepsilon = \frac{1.59\times10^{-3}}{1.0} = 1.59\times10^{-3} = 0.16\%`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="example" title="Example 8.2">
        <ProblemSolution.Problem>
            A copper wire of length 2.2 m and a steel wire of length 1.6 m, both of diameter 3.0 mm, are
            connected end to end. When stretched by a load, the net elongation is found to be 0.70 mm. Obtain
            the load applied. (Y<sub>copper</sub> = 1.1 × 10¹¹ N m⁻² and Y<sub>steel</sub> = 2.0 × 10¹¹ N m⁻²)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              The same load W and the same area A act in both wires, so W/A = Y<sub>c</sub>ΔL<sub>c</sub>
              /L<sub>c</sub> = Y<sub>s</sub>ΔL<sub>s</sub>/L<sub>s</sub>. Hence the ratio of the elongations is
            </p>
            <FormulaBlock latex={String.raw`\frac{\Delta L_c}{\Delta L_s} = \frac{Y_s}{Y_c}\,\frac{L_c}{L_s} = \frac{2.0\times10^{11}}{1.1\times10^{11}}\times\frac{2.2}{1.6} = 2.5`} />
            <p>With ΔL<sub>c</sub> + ΔL<sub>s</sub> = 7.0 × 10⁻⁴ m:</p>
            <FormulaBlock latex={String.raw`\Delta L_c = 5.0\times10^{-4}\;\mathrm{m},\qquad \Delta L_s = 2.0\times10^{-4}\;\mathrm{m}`} />
            <FormulaBlock latex={String.raw`W = \frac{A\,Y_c\,\Delta L_c}{L_c} = \frac{\pi(1.5\times10^{-3})^2\times 1.1\times10^{11}\times 5.0\times10^{-4}}{2.2} = 1.8\times10^2\;\mathrm{N}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="example" title="Example 8.3">
        <ProblemSolution.Problem>
            In a human pyramid of four persons a person in the bottom row supports a total load of about 280 kg
            (warrior + a bend beneath row). His own body mass is about 60 kg. What is the compressional strain
            of the legs of the person who is supporting the load? (Assume each leg has a length of 0.5 m, a
            cross-sectional area of ~1.26 × 10⁻³ m² and a Young&rsquo;s modulus of 9.4 × 10⁹ N m⁻².)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              The legs carry the total load: 280 kg. Each leg supports a load of 280/2 = 140 kg − the mass of
              the bottom person&rsquo;s own legs and arms is itself distributed, so the force on one
              thighbone(with mass of the leg reconsidered) follows. Full balance: total mass on the legs =
              280 − 60 = 220 kg (the bottom person&rsquo;s weight is transmitted through his legs as well).
              Force on each thighbone = (220/2) × 9.8 m s⁻² = 1078 N.
            </p>
            <FormulaBlock latex={String.raw`\sigma = \frac{F}{A} = \frac{1078}{1.26\times10^{-3}} = 8.5\times10^5\;\mathrm{N\,m^{-2}}`} />
            <FormulaBlock latex={String.raw`\Delta L = \frac{F\,L}{A\,Y} = \frac{1078\times 0.5}{9.4\times10^9\times 1.26\times10^{-3}} = 4.55\times10^{-5}\;\mathrm{m}`} important />
            <p>
              The compressional strain ΔL/L = 4.55 × 10⁻⁵/0.5 = <strong>0.0091%</strong> — a barely
              observable compression of the thighbone.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <h3 id="h-shear">8.5.2 Shear Modulus (rigidity modulus of elasticity)</h3>
      <p>
        The <strong>shear modulus of rigidity</strong> is the ratio of shearing stress to shearing strain:
      </p>
      <FormulaBlock latex={String.raw`G = \frac{\mathrm{shearing\;stress}}{\mathrm{shearing\;strain}} = \frac{F/A}{\Delta x/L} = \frac{F\,L}{A\,\Delta x}`} />
      <FormulaBlock latex={String.raw`G = \frac{F}{A\,\theta},\qquad \sigma_s = G\,\theta`} important />
      <p>It has the unit Pa. Generally G &lt; Y; for most materials G ≈ Y/3.</p>
      <TableCard
        caption="Table 8.2 — Shear moduli of some materials (GPa)."
        headers={["Material", "G (GPa)"]}
        rows={[
          { cells: ["Aluminium", "25"] },
          { cells: ["Brass", "36"] },
          { cells: ["Copper", "42"] },
          { cells: ["Glass", "23"] },
          { cells: ["Iron", "70"] },
          { cells: ["Lead", "5.6"] },
          { cells: ["Nickel", "77"] },
          { cells: ["Steel", "84"] },
          { cells: ["Tungsten", "150"] },
          { cells: ["Wood", "10"] },
        ]}
      />

      <Expandable variant="example" title="Example 8.4">
        <ProblemSolution.Problem>
            A square lead slab of side 50 cm and thickness 10 cm is subjected to a shearing force (on its narrow
            face) of 9.0 × 10⁴ N. The lower edge is riveted to the floor. How much will the upper edge be
            displaced? (G for lead = 5.6 × 10⁹ N m⁻²)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Area of the face being sheared:</p>
            <FormulaBlock latex={String.raw`A = 0.50\times0.10 = 0.05\;\mathrm{m^2}`} />
            <p>Shearing stress and displacement Δx (L = 0.5 m):</p>
            <FormulaBlock latex={String.raw`\frac{F}{A} = \frac{9.0\times10^4}{0.05} = 1.8\times10^6\;\mathrm{N\,m^{-2}}`} />
            <FormulaBlock latex={String.raw`\Delta x = \frac{\Delta L}{G}\,\frac{F}{A} = \frac{1.8\times10^6\times 0.5}{5.6\times10^9} = 1.6\times10^{-4}\;\mathrm{m} = 0.16\;\mathrm{mm}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h3 id="h-bulk">8.5.3 Bulk Modulus (volume elasticity)</h3>
      <p>
        When a body is fully surrounded by a fluid under pressure p, the volume strain ΔV/V follows a{" "}
        <strong>bulk modulus</strong> B:
      </p>
      <FormulaBlock latex={String.raw`B = -\frac{p}{\Delta V/V}`} important />
      <p>
        The minus sign makes B positive: an increase in pressure decreases the volume. Its reciprocal is the{" "}
        <strong>compressibility</strong>:
      </p>
      <FormulaBlock latex={String.raw`k = \frac{1}{B} = -\frac{1}{\Delta p}\,\frac{\Delta V}{V}`} important />
      <p>
        Bulk moduli fall in the order B<sub>solids</sub> &gt;&gt; B<sub>liquids</sub> &gt;&gt; B
        <sub>gases</sub>; air is about a million times more compressible than solids. The incompressibility of
        solids arises from the tight coupling of their atoms.
      </p>
      <TableCard
        caption="Table 8.3 — Bulk moduli (GPa). Gases are enormously more compressible than solids or liquids."
        headers={["Material", "B (GPa)"]}
        rows={[
          { cells: ["Solids — Aluminium", "72"] },
          { cells: ["Solids — Brass", "61"] },
          { cells: ["Solids — Copper", "140"] },
          { cells: ["Solids — Glass", "37"] },
          { cells: ["Solids — Iron", "100"] },
          { cells: ["Solids — Nickel", "260"] },
          { cells: ["Solids — Steel", "160"] },
          { cells: ["Liquids — Water", "2.2"] },
          { cells: ["Liquids — Ethanol", "0.9"] },
          { cells: ["Liquids — Carbon disulphide", "1.56"] },
          { cells: ["Liquids — Glycerine", "4.76"] },
          { cells: ["Liquids — Mercury", "25"] },
          { cells: ["Gases — Air (STP)", "1.0 × 10⁻⁴"] },
        ]}
      />

      <Expandable variant="example" title="Example 8.5">
        <ProblemSolution.Problem>
            The average depth of the Indian Ocean is about 3000 m. Calculate the fractional compression
            ΔV/V of water at the bottom of the ocean, given the bulk modulus of water is 2.2 × 10⁹ N m⁻² and g
            = 10 m s⁻².
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>The pressure at a depth h of 3000 m:</p>
            <FormulaBlock latex={String.raw`p = h\,\rho\,g = 3000\times 10^3\times 10 = 3\times10^7\;\mathrm{N\,m^{-2}}`} />
            <p>The fractional compression follows from B = −p/(ΔV/V):</p>
            <FormulaBlock latex={String.raw`\frac{\Delta V}{V} = \frac{p}{B} = \frac{3\times10^7}{2.2\times10^9} = 1.36\times10^{-2} = 1.36\%`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h3 id="h-poisson">8.5.4 Poisson's Ratio</h3>
      <p>
        A deforming force in one direction also produces strain in the perpendicular direction: stretching a wire
        makes it thinner. Within the elastic limit, the <strong>lateral strain</strong> is proportional to the{" "}
        <strong>longitudinal strain</strong>; the ratio is <strong>Poisson&rsquo;s ratio</strong>:
      </p>
      <FormulaBlock latex={String.raw`\frac{\Delta d/d}{\Delta L/L} = \frac{\Delta d}{\Delta L}\,\frac{L}{d}`} important />
      <p>
        a dimensionless, material-dependent number (e.g. 0.28–0.30 for steels, ≈ 0.33 for aluminium alloys).
      </p>

      <h3 id="h-penergy">8.5.5 Elastic Potential Energy in a Stretched Wire</h3>
      <p>
        Work done against the inter-atomic forces while stretching the wire is stored as{" "}
        <strong>elastic potential energy</strong>. With F = YAl/L, the work of a further element dl is dW = F
        dl, and integrating from 0 to l gives
      </p>
      <FormulaBlock latex={String.raw`W = \frac{Y\,A\,l^2}{2L} = \frac12\,Y\,(\mathrm{strain})^2\times V = \frac12\times\sigma\times\varepsilon\times V`} />
      <p>so the elastic potential energy per unit volume is</p>
      <FormulaBlock latex={String.raw`u = \frac12\,\sigma\varepsilon`} important />

      <h2 id="h-applications">8.6 Applications of Elastic Behaviour of Materials</h2>
      <p>
        A knowledge of strength-of-materials is needed in every engineering detail: the columns and beams of a
        building, the supports of a bridge, the rails themselves, why cement and concrete are chosen, and why
        heaps of sand or hills are pyramidal in shape.
      </p>
      <Stepper
        steps={[
          {
            label: "Crane ropes",
            description:
              "To lift a 10-tonne load, the rope must satisfy A ≥ Mg/σ_y = (10⁴ × 9.8)/(300×10⁶) = 3.3×10⁻⁴ m², i.e. radius ≈ 1 cm. A safety factor of ~10 dictates a thicker rope (radius ≈ 3 cm); such a single wire would be a rigid rod, so ropes are braided from many thin wires — flexible, easy to make and strong.",
          },
          {
            label: "Bending of a beam",
            description:
              "A beam supported at its ends and loaded at the centre sags by δ = Wl³/(4bd³Y). Doubling the depth d reduces the sag by a factor 8 (δ ∝ d⁻³) — far more effective than doubling the breadth (δ ∝ b⁻¹) — but too deep a bar buckles sideways. The compromise is the I-section.",
          },
          {
            label: "Pillars and columns",
            description:
              "Pillars with rounded ends support less load than those with distributed ends; vertical loads must pass through the axis to avoid buckling.",
          },
        ]}
      />
      <Callout type="important" title="Why the highest mountain is ~ 10 km">
        <p>
          At the base of a mountain of height h the vertical force per unit area is hρg. The sides are free, so
          the material is in a <em>shear</em> situation with stress ≈ hρg. Setting this equal to the elastic
          limit of rock, 30 × 10⁷ N m⁻², with ρ = 3 × 10³ kg m⁻³ and g = 10 m s⁻²:
        </p>
        <FormulaBlock latex={String.raw`h\,\rho\,g = 30\times10^7\;\Rightarrow\; h = \frac{30\times10^7}{3\times10^3\times 10} \approx 10\;\mathrm{km}`} />
        <p>
          So rocks on the earth can climb no higher than about 10 km — which is why Mount Everest&rsquo;s peak
          (8.8 km) is near the possible maximum for terrestrial mountains.
        </p>
      </Callout>

      <h2 id="h-exercises">Exercises 8.1 – 8.16</h2>
      <p>Selected exercises with hints and the essential answers.</p>

      <Expandable variant="exercise" title="Exercise 8.1">
        <ProblemSolution.Problem>
            A steel wire of length 4.7 m and cross-sectional area 3.0 × 10⁻⁵ m² stretches by the same amount as
            a copper wire of length 3.5 m and cross-sectional area 4.0 × 10⁻⁵ m² under a given load. What is the
            ratio of the Young&rsquo;s modulus of steel to that of copper?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Equal load F and equal elongation ΔL for both wires: F = YA·ΔL/L must be the same. Hence
            </p>
            <FormulaBlock latex={String.raw`\frac{Y_s}{Y_c} = \frac{L_s/A_s}{L_c/A_c} = \frac{4.7/3.0\times10^{-5}}{3.5/4.0\times10^{-5}} = \frac{4.7\times4.0}{3.5\times3.0} = 1.79`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.2">
        <ProblemSolution.Problem>
            The stress-strain graphs for materials A and B are in the form of straight lines up to the fracture
            point. What is: (a) the Young&rsquo;s modulus, and (b) the approximate yield strength of each?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              (a) Y = slope of the linear part of the stress-strain graph: material A has the steeper slope, so
              Y<sub>A</sub> ≈ 2 × 10¹¹ N m⁻² and Y<sub>B</sub> &lt; Y<sub>A</sub>. (b) The yield strength is the
              stress at the break: A ≈ 3 × 10⁸ N m⁻², B ≈ 3 × 10⁸ N m⁻².
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.3">
        <ProblemSolution.Problem>
            The stress-strain graphs for two materials A and B are shown drawn on the same scale. (a) Which has
            the greater Young&rsquo;s modulus? (b) Which is the stronger material?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              (a) <strong>A</strong> — its linear region is steeper (greater slope = greater Y). (b){" "}
              <strong>A</strong> — it fractures at a higher stress, so its ultimate/breaking strength is larger.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.4">
        <ProblemSolution.Problem>
            Read the statements and judge: (a) The Young&rsquo;s modulus of rubber is greater than that of steel.
            (b) The stretching of a coil is determined by its shear modulus.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              (a) <strong>False</strong> — Y<sub>rubber</sub> is smaller; steel is more elastic (deforms less
              for a given load). (b) <strong>True</strong> — pulling a coil twists the wire (shear), so the
              extension is governed by the shear modulus.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.5">
        <ProblemSolution.Problem>
            Two wires of equal diameter 0.25 cm, one of steel and the other of brass, are loaded as shown
            (steel 4 kg, brass 6 kg). The unloaded steel length is 1.5 m, brass 1.0 m. Compute their
            elongations. (Y<sub>s</sub> = 2.0 × 10¹¹, Y<sub>brass</sub> ≈ 0.91 × 10¹¹ Pa)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              A = π(1.25 × 10⁻³)² = 4.9 × 10⁻⁶ m²; ΔL = FL/(AY).
            </p>
            <FormulaBlock latex={String.raw`\Delta L_s = \frac{4\times9.8\times 1.5}{4.9\times10^{-6}\times 2.0\times10^{11}} = 6.0\times10^{-5}\;\mathrm{m}`} />
            <FormulaBlock latex={String.raw`\Delta L_b = \frac{6\times9.8\times 1.0}{4.9\times10^{-6}\times 0.91\times10^{11}} = 1.3\times10^{-4}\;\mathrm{m}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.6">
        <ProblemSolution.Problem>
            One face of an aluminium cube of edge 10 cm is firmly fixed to a vertical wall. A mass of 100 kg is
            attached to the opposite face. What is the vertical deflection of the face? (G<sub>Al</sub> = 25 GPa)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              F = 100 × 9.8 = 980 N, A = 0.01 m², L = 0.1 m. Shearing stress = 980/0.01 = 9.8 × 10⁴ Pa.
            </p>
            <FormulaBlock latex={String.raw`\Delta x = \frac{\sigma_s\,L}{G} = \frac{9.8\times10^4\times 0.1}{25\times10^9} = 3.9\times10^{-7}\;\mathrm{m}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.7">
        <ProblemSolution.Problem>
            A four-column structure of hollow mild-steel columns carries a load of 50,000 kg. If the inner and
            outer radii are 30 cm and 60 cm, what is the compressional strain of each column?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Load per column = 50,000 × 9.8/4 = 1.225 × 10⁵ N; A = π(0.60² − 0.30²) = 0.85 m².</p>
            <FormulaBlock latex={String.raw`\mathrm{strain} = \frac{F/A}{Y} = \frac{1.225\times10^5/0.85}{2.0\times10^{11}} = 7.2\times10^{-7}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.8">
        <ProblemSolution.Problem>
            A piece of copper having a rectangular cross-section of 15.2 × 19.1 mm is pulled in tension with a
            force of 44,500 N. What is the strain produced? If only elastic deformation occurs, what is the
            resulting strain? (Y<sub>Cu</sub> = 1.1 × 10¹¹ N m⁻²)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>A = 15.2 × 19.1 mm² = 2.9 × 10⁻⁴ m²; stress = 44,500/2.9 × 10⁻⁴ = 1.53 × 10⁸ Pa.</p>
            <FormulaBlock latex={String.raw`\varepsilon = \frac{\sigma}{Y} = \frac{1.53\times10^8}{1.1\times10^{11}} = 1.4\times10^{-3}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.9">
        <ProblemSolution.Problem>
            A steel cable with a radius of 1.5 cm supports a chairlift. If the maximum stress is not to exceed
            10⁸ N m⁻², what is the maximum load the cable can support?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>A = π(0.015)² = 7.1 × 10⁻⁴ m².</p>
            <FormulaBlock latex={String.raw`F_{\max} = \sigma\,A = 10^8\times 7.1\times10^{-4} = 7.1\times10^4\;\mathrm{N}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.10">
        <ProblemSolution.Problem>
            A rigid bar of mass 15 kg is supported symmetrically by three wires, each 2.0 m long. Those at each
            end are of copper and the middle one is of iron. If all three are elongated by the same amount, what
            is the ratio of their diameters? (Y<sub>iron</sub> = 2.0 × 10¹¹, Y<sub>Cu</sub> = 1.1 × 10¹¹)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Equal tension and equal extension in each: F = Y A ΔL/L ⟹ A ∝ 1/Y, and A = πd²/4, so d²Y is the
              same:
            </p>
            <FormulaBlock latex={String.raw`\frac{d_c}{d_f} = \sqrt{\frac{Y_f}{Y_c}} = \sqrt{\frac{2.0\times10^{11}}{1.1\times10^{11}}} = 1.35`} important />
            <p>i.e. <strong>1.35 : 1 (copper : iron)</strong>.</p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.11">
        <ProblemSolution.Problem>
            A 14.5 kg mass is attached to a steel wire of length 1.0 m and cross-sectional area 0.065 cm²; the
            mass is whirled in a vertical circle with a uniform speed of 2 rev/s at the bottom point. What is the
            elongation of the wire at this point? (Y<sub>s</sub> = 2.0 × 10¹¹ N m⁻²)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Tension at the bottom = weight + centripetal force. With ω = 2 × 2π = 4π rad s⁻¹:
            </p>
            <FormulaBlock latex={String.raw`T = mg + m\omega^2 r = 14.5(9.8 + 16\pi^2) = 2.43\times10^3\;\mathrm{N}`} />
            <FormulaBlock latex={String.raw`\Delta L = \frac{T L}{A Y} = \frac{2.43\times10^3\times 1.0}{6.5\times10^{-6}\times 2.0\times10^{11}} = 1.9\times10^{-3}\;\mathrm{m}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.12">
        <ProblemSolution.Problem>
            Compute the bulk modulus of water from the following data: 100.0 L of water is compressed by a
            pressure of 100 atm to a volume of 100.5 L. Compare it with the bulk modulus of air and explain why.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>ΔV = 0.5 L, p = 100 × 1.01 × 10⁵ = 1.01 × 10⁷ Pa:</p>
            <FormulaBlock latex={String.raw`B = \frac{p}{|\Delta V|/V} = \frac{1.01\times10^7}{0.5/100} = 2.0\times10^9\;\mathrm{Pa}`} important />
            <p>
              Air has B ≈ 1.0 × 10⁵ Pa, so B<sub>water</sub> ≈ 2 × 10⁴ B<sub>air</sub> — water molecules are
              tightly coupled (nearly incompressible) while the widely separated air molecules are easily pushed
              together.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.13">
        <ProblemSolution.Problem>
            The density of water at the surface of the ocean is 1.03 × 10³ kg m⁻³ and the bulk modulus is 2.2 ×
            10⁹ N m⁻². What is the density of water at a depth where the pressure is 80 atm?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              p = 80 × 1.013 × 10⁵ = 8.1 × 10⁶ Pa; ΔV/V = p/B = 8.1 × 10⁶/2.2 × 10⁹ = 3.7 × 10⁻³.
            </p>
            <FormulaBlock latex={String.raw`\rho' = \frac{\rho}{1-\Delta V/V} = \frac{1.03\times10^3}{1-3.7\times10^{-3}} = 1.03\times10^3\;\mathrm{kg\,m^{-3}}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.14">
        <ProblemSolution.Problem>
            Compute the fractional change in volume of a glass slab when subjected to a hydraulic pressure of 10
            atm. (B<sub>glass</sub> = 37 × 10⁹ N m⁻²)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>p = 10 atm = 1.013 × 10⁶ Pa:</p>
            <FormulaBlock latex={String.raw`\frac{\Delta V}{V} = \frac{p}{B} = \frac{1.013\times10^6}{3.7\times10^{10}} = 2.7\times10^{-5}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.15">
        <ProblemSolution.Problem>
            What is the volume contraction of a 10 cm × 10 cm × 10 cm copper cube when a pressure of 7.0 × 10⁶ Pa
            is applied on all its faces? (B<sub>Cu</sub> = 140 × 10⁹ Pa)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>V = 10⁻³ m³:</p>
            <FormulaBlock latex={String.raw`\Delta V = \frac{p\,V}{B} = \frac{7.0\times10^6\times 10^{-3}}{1.4\times10^{11}} = 5\times10^{-8}\;\mathrm{m^3} = 0.05\;\mathrm{cm^3}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercise 8.16">
        <ProblemSolution.Problem>
            How much should the pressure on a litre of water be changed to compress it by 0.10%? (Take
            B<sub>water</sub> = 2.2 × 10⁹ Pa)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Compression of 0.10% means ΔV/V = 10⁻³:</p>
            <FormulaBlock latex={String.raw`\Delta p = B\,\frac{\Delta V}{V} = 2.2\times10^9\times 10^{-3} = 2.2\times10^6\;\mathrm{Pa}`} important />
            <p>i.e. ≈ <strong>22 atm</strong> — quite a large pressure for a tiny 0.1% volume change, again
            confirming how incompressible water is.</p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormulaCard>
          <p>
            <strong>Stress and strain</strong>
          </p>
          Stress = F/A (Pa = N m⁻²). Three deformations: longitudinal (tensile/compressive) with strain ΔL/L;
          shearing with strain Δx/L = tanθ ≈ θ; hydraulic with volume strain ΔV/V. Strain is dimensionless.
          Hooke&rsquo;s law: stress = k × strain for small deformations.
        </FormulaCard>
        <FormulaCard>
          <p>
            <strong>Young&rsquo;s modulus</strong>
          </p>
          <FormulaBlock latex={String.raw`Y = \frac{F/A}{\Delta L/L} = \frac{F\,L}{A\,\Delta L}`} />
          Measured for tension and compression. Steel (200 GPa) is the most elastic of the common metals: it
          needs the largest force for a given elongation. Validity: only in the linear (Hookean) region.
        </FormulaCard>
        <FormulaCard>
          <p>
            <strong>Shear and bulk moduli</strong>
          </p>
          <FormulaBlock latex={String.raw`G = \frac{F}{A\theta},\qquad B = -\frac{p}{\Delta V/V}`} />
          G applies to solids alone; B applies to solids, liquids and gases. Compressibility k = 1/B. Generally
          G ≈ Y/3, and B<sub>solid</sub> &gt;&gt; B<sub>liquid</sub> &gt;&gt; B<sub>gas</sub>.
        </FormulaCard>
        <FormulaCard>
          <p>
            <strong>Elastic potential energy</strong>
          </p>
          Work done in stretching a wire from 0 to l: W = YAl²/2L = ½σ ε V. Elastic potential energy density u =
          ½σε — the small energy stored per unit volume under deformation.
        </FormulaCard>
        <FormulaCard>
          <p>
            <strong>Stress-strain curve features</strong>
          </p>
          Linear O→A (Hooke), A→B recoverable, B = yield point (σ_y), B→D plastic with permanent set, D =
          ultimate tensile strength σ_u, beyond D fracture at E. D and E close ⟹ brittle; far apart ⟹ ductile.
          Elastomers have huge elastic strain but no Hooke&rsquo;s law and no plastic region.
        </FormulaCard>
        <FormulaCard>
          <p>
            <strong>Engineering applications</strong>
          </p>
          Crane rope: A ≥ Mg/σ_y; safety factor ~10. Beam sag δ = Wl³/(4bd³Y) — doubling the depth is more
          effective than doubling the breadth; I-sections resist buckling. Mountains cannot exceed h = σ_rock
          /ρg ≈ 10 km.
        </FormulaCard>
      </div>

      <MistakeCard
        mistake="The same magnitude of stress produces larger strain in steel than in aluminium."
        correction="Steel is the most elastic of the common metals: for a given stress its strain is the SMALLEST. 'More elastic' means stretches less, not more — the steel wire needs 2000 N for a 0.1% elongation, aluminium only 690 N."
      />
      <MistakeCard
        mistake="Stress is a vector — it points in the direction of the applied force."
        correction="Stress is not a vector: a force on a defined section has a definite direction, but the stress (force per unit area) has no single direction. Strains in other directions are produced even by a one-directional stress (Poisson effect)."
      />
      <MistakeCard
        mistake="The tension inside a wire supports twice the applied load, so the tensile stress is 2F/A."
        correction="At every cross-section of the wire the tension is exactly F (the applied force), so the tensile stress is F/A — the book stresses this point explicitly. Shear stress is possible only in solids because the cross-section must transmit tangential forces."
      />
      <MistakeCard
        mistake="Rubber, because it stretches enormously, has a greater Young's modulus than steel."
        correction="Ease of stretching is INVERSE to Young's modulus. Rubber's huge elongations under small forces mean a very small Y, and it does not even follow Hooke's law over most of its range. Steel's high Y is what makes it resist deformation so effectively."
      />
    </>
  );
}