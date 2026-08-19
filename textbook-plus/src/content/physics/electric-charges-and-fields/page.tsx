import { Callout } from "@/components/content/Callout";
import { Example } from "@/components/content/Example";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";

export default function ElectricChargesChapter() {
  return (
    <>
      <h2 id="h-1-1">1.1 Introduction</h2>
      <Callout type="important">
        Electrostatics deals with the study of forces, fields and potentials arising from static charges.
      </Callout>
      <p><strong>Cause of these phenomena:</strong></p>
      <ul>
        <li>Rubbing insulating surfaces transfers electrons.</li>
        <li>Surfaces become charged (positive or negative).</li>
        <li>Charges accumulate until they find a path to discharge.</li>
        <li>Discharge produces spark, shock, or light.</li>
      </ul>

      <h2 id="h-1-2">1.2 Electric Charge</h2>
      <p><strong>Fundamental Observations:</strong></p>
      <ul>
        <li>Glass rod rubbed with silk/wool → <strong>repel each other</strong></li>
        <li>Plastic rod rubbed with fur → <strong>repel each other</strong></li>
        <li>Glass rod vs wool/silk → <strong>attract</strong></li>
        <li>Plastic rod vs glass rod → <strong>attract</strong></li>
      </ul>
      <p><strong>Conclusion:</strong> Two kinds of charges exist.</p>
      <Callout type="important">
        There are only two kinds of electric charge. Like charges repel and unlike charges attract each other. The property which differentiates the two kinds is called the polarity of charge.
      </Callout>

      <h2 id="h-1-3">1.3 Conductors and Insulators</h2>
      <Comparison
        columns={[
          {
            title: "⚡ Conductors",
            children: (
              <ul>
                <li>Allow electricity to pass easily</li>
                <li>Free electrons move inside the material</li>
                <li>Examples: metals, human body, animal body, earth</li>
                <li>When charged → charge spreads over entire surface</li>
              </ul>
            ),
          },
          {
            title: "🚫 Insulators",
            children: (
              <ul>
                <li>Do not allow electricity to pass easily</li>
                <li>Electrons are tightly bound, charges stay localized</li>
                <li>Examples: glass, porcelain, plastic, nylon, wood</li>
                <li>When charged → charge remains at same spot</li>
              </ul>
            ),
          },
        ]}
      />
      <Callout type="note">
        <strong>🔄 Semiconductors:</strong> Third category → properties intermediate between conductors and insulators. Conductivity can be controlled (basis of modern electronics).
      </Callout>

      <h2 id="h-1-4">1.4 Basic Properties of Electric Charges</h2>
      <p>Electric charge has three fundamental properties that govern all electrostatic behaviour.</p>

      <h3 id="h-1-4-1">1.4.1 Additivity of Charges</h3>
      <p>Total charge of a system is the algebraic sum of individual charges.</p>
      <ul>
        <li>Charges are scalars — they add like real numbers, not vectors.</li>
        <li>Sign matters: +ve for positive charge, −ve for negative.</li>
        <li>Formula: q<sub>total</sub> = q₁ + q₂ + ... + qₙ</li>
      </ul>
      <Example title="Additivity of Charges">
        <p>Five charges in a system: +1, +2, −3, +4, −5 (in some unit).</p>
        <FormulaBlock latex="q_{\text{total}} = (+1) + (+2) + (-3) + (+4) + (-5) = -1" />
      </Example>

      <h3 id="h-1-4-2">1.4.2 Conservation of Charge</h3>
      <p>Net charge of an isolated system remains constant, regardless of internal redistribution.</p>
      <ul>
        <li>Charging by rubbing transfers electrons — no charge is created or destroyed.</li>
        <li>Conservation of charge has been established experimentally.</li>
      </ul>
      <Callout type="important">
        Conservation of charge: A neutron turns into a proton and an electron. Total charge is zero before and after — equal and opposite charges created simultaneously.
      </Callout>

      <h3 id="h-1-4-3">1.4.3 Quantisation of Charge</h3>
      <p>All observable charges are integral multiples of a fundamental unit charge e.</p>
      <FormulaBlock latex="q = ne \quad \text{where } n \in \mathbb{Z}" />
      <FormulaBlock latex="e = 1.602 \times 10^{-19} \text{ C}" />
      <ul>
        <li>Electron carries −e, proton carries +e.</li>
        <li>SI unit: 1 C = charge flowing at 1 A for 1 s.</li>
        <li>~6 × 10¹⁸ electrons per coulomb.</li>
        <li>Practical units: 1 μC = 10⁻⁶ C, 1 mC = 10⁻³ C.</li>
      </ul>

      <Comparison
        columns={[
          {
            title: "Quantisation",
            children: (
              <ul>
                <li><FormulaBlock latex="q = ne" /></li>
                <li>Every charge is an integral multiple of e</li>
              </ul>
            ),
          },
          {
            title: "Additivity",
            children: (
              <ul>
                <li><FormulaBlock latex="q_{\text{total}} = \sum q_i" /></li>
                <li>Charges add algebraically with proper signs</li>
              </ul>
            ),
          },
          {
            title: "Conservation",
            children: (
              <ul>
                <li><FormulaBlock latex="\Delta q_{\text{isolated}} = 0" /></li>
                <li>Net charge of an isolated system never changes</li>
              </ul>
            ),
          },
        ]}
      />

      <KeyPoint title="Key Exam Point">
        Three basic properties of electric charge: (1) Quantisation — q = ne, (2) Additivity —
        total charge is algebraic sum, (3) Conservation — total charge of isolated system is
        constant.
      </KeyPoint>

      <h2 id="h-1-5">1.5 Coulomb&apos;s Law</h2>
      <p>
        Coulomb&apos;s law is a quantitative statement about the force between two point charges.
        When the linear size of charged bodies are much smaller than the distance separating them,
        they are treated as point charges. The force varies inversely as the square of the distance
        and directly as the product of the magnitudes of the two charges.
      </p>

      <h3 id="h-1-5-1">1.5.1 Scalar Form</h3>
      <p>
        If two point charges q₁ and q₂ are separated by a distance r in vacuum, the magnitude of
        the force between them is:
      </p>
      <FormulaBlock latex="F = k \frac{|q_1 q_2|}{r^2}" />
      <p>The constant k is written as k = 1/(4πε₀), so:</p>
      <FormulaBlock latex="F = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2}" />
      <p>where ε₀ is the permittivity of free space:</p>
      <FormulaBlock latex="\varepsilon_0 = 8.854 \times 10^{-12} \text{ C}^2 \text{N}^{-1}\text{m}^{-2}" />
      <ul>
        <li>In SI units, k ≈ 9 × 10⁹ N m² C⁻².</li>
        <li>1 C is the charge that when placed at 1 m from another 1 C charge in vacuum experiences a force of 9 × 10⁹ N.</li>
        <li>Valid for both like charges (repulsion) and unlike charges (attraction).</li>
        <li>Valid down to subatomic level (r ~ 10⁻¹⁰ m).</li>
      </ul>

      <Expandable title="Vector form of Coulomb&apos;s Law">
        <p>Let the position vectors of charges q₁ and q₂ be r⃗₁ and r⃗₂. The vector from 1 to 2 is r⃗₂₁ = r⃗₂ − r⃗₁. The unit vector is r̂₂₁ = r⃗₂₁/r₂₁.</p>
        <FormulaBlock latex="\vec{F}_{21} = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r_{21}^2} \hat{r}_{21}" />
        <ul>
          <li>If q₁ and q₂ have same sign: F⃗₂₁ is along r̂₂₁ (repulsion).</li>
          <li>If q₁ and q₂ have opposite signs: F⃗₂₁ is along −r̂₂₁ (attraction).</li>
          <li>By Newton&apos;s third law: F⃗₁₂ = −F⃗₂₁.</li>
        </ul>
      </Expandable>

      <h3 id="h-1-5-2">1.5.2 Force in a Medium</h3>
      <p>
        When charges are placed in a medium instead of vacuum, the force between them decreases.
        The reduction depends on the relative permittivity (dielectric constant) K of the medium.
      </p>
      <FormulaBlock latex="F_{\text{medium}} = \frac{F_{\text{vacuum}}}{K}" />
      <FormulaBlock latex="K = \frac{\varepsilon}{\varepsilon_0}" />
      <FormulaBlock latex="\varepsilon = \varepsilon_0 K" />
      <ul>
        <li>K is the relative permittivity (dielectric constant) of the medium.</li>
        <li>K = 1 for vacuum, K &gt; 1 for all other media.</li>
        <li>ε is the permittivity of the medium.</li>
        <li>Force is always reduced in a medium compared to vacuum.</li>
      </ul>

      <Expandable title="Derivation: Force in a Medium">
        <p><strong>In vacuum:</strong></p>
        <FormulaBlock latex="F = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2}" />
        <p><strong>In a medium:</strong></p>
        <FormulaBlock latex="F&apos; = \frac{1}{4\pi\varepsilon} \frac{q_1 q_2}{r^2}" />
        <p>Since the permittivity of the medium is ε = ε₀K:</p>
        <FormulaBlock latex="F&apos; = \frac{1}{4\pi\varepsilon_0 K} \frac{q_1 q_2}{r^2}" />
        <p>Factor out 1/K:</p>
        <FormulaBlock latex="F&apos; = \frac{1}{K} \times \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2} = \frac{F}{K}" />
        <p>The force in a medium is the vacuum force divided by the relative permittivity.</p>
      </Expandable>

      <KeyPoint title="Key Exam Point">
        Coulomb&apos;s law: F = (1/4πε₀)(q₁q₂/r²). In a medium, force decreases by factor K: F&apos; = F/K. Larger K means weaker force — this is why dielectrics reduce electrostatic forces.
      </KeyPoint>

      <h2 id="h-1-6">1.6 Forces between Multiple Charges</h2>
      <Callout type="important">
        Principle of Superposition: The force on any charge due to a number of other charges is
        the vector sum of all the forces on that charge due to the other charges, taken one at a
        time. Individual forces are unaffected by the presence of other charges.
      </Callout>
      <FormulaBlock latex="\vec{F}_1 = \sum_{i=2}^{n} \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_i}{r_{1i}^2} \hat{r}_{1i}" />
      <p>
        The vector sum is obtained by the parallelogram law. All of electrostatics is basically a
        consequence of Coulomb&apos;s law and the superposition principle.
      </p>

      <h2 id="h-1-7">1.7 Electric Field</h2>
      <p>
        Consider a point charge Q in vacuum. The charge Q produces an electric field everywhere in
        the surrounding. When another charge q is brought at point P, the field acts on it and
        produces a force.
      </p>
      <FormulaBlock latex="\vec{E}(\vec{r}) = \frac{1}{4\pi\varepsilon_0} \frac{Q}{r^2} \hat{r}" />
      <p>The force on a charge q in an electric field:</p>
      <FormulaBlock latex="\vec{F}(\vec{r}) = q\vec{E}(\vec{r})" />
      <KeyPoint>
        The electric field due to a charge Q is independent of the test charge q. It is a
        characteristic of the system of charges. For positive charge, field is radially outwards;
        for negative, radially inwards.
      </KeyPoint>

      <h3 id="h-1-7-1">1.7.1 Electric Field due to a System of Charges</h3>
      <FormulaBlock latex="\vec{E}(\vec{r}) = \sum_{i=1}^{n} \frac{1}{4\pi\varepsilon_0} \frac{q_i}{r_{iP}^2} \hat{r}_{iP}" />

      <h3 id="h-1-7-2">1.7.2 Physical Significance of Electric Field</h3>
      <p>
        The true significance of the electric field emerges beyond electrostatics. The greatest
        speed with which a signal can go from one point to another is c, the speed of light. The
        effect of any motion of q₁ on q₂ cannot arise instantaneously.
      </p>
      <p>
        The accelerated motion of charge q₁ produces electromagnetic waves, which propagate with
        speed c, reach q₂ and cause a force. The notion of field elegantly accounts for the time
        delay. The concept was first introduced by Faraday.
      </p>

      <h2 id="h-1-8">1.8 Electric Field Lines</h2>
      <p>
        An electric field line is a curve drawn so that the tangent at each point is in the
        direction of the net field at that point. The magnitude of the field is represented by the
        density of field lines — strong near the charge, weak far from it.
      </p>
      <Callout type="important">
        Properties of electric field lines: (i) Start from positive charges and end at negative
        charges. (ii) Continuous curves without breaks in charge-free regions. (iii) Two field
        lines can never cross. (iv) Electrostatic field lines do not form closed loops.
      </Callout>
      <p>
        The picture of field lines was invented by Faraday. Faraday called them lines of force. The
        more appropriate term is field lines.
      </p>

      <h2 id="h-1-9">1.9 Electric Flux</h2>
      <p>
        Consider flow of a liquid with velocity v⃗ through a small flat surface dS normal to the
        flow. The rate of flow v dS represents the flux. For electric field, we define an analogous
        quantity called electric flux.
      </p>
      <p>
        An area element should be treated as a vector along its normal. For a closed surface, the
        vector is in the direction of the outward normal.
      </p>
      <FormulaBlock latex="\Delta\Phi = \vec{E} \cdot d\vec{S} = E \, dS \cos\theta" />
      <p>The total flux through surface S:</p>
      <FormulaBlock latex="\Phi = \oint \vec{E} \cdot d\vec{S}" />
      <p>
        The unit of electric flux is N C⁻¹ m². The angle θ is between E⃗ and dS⃗. When θ = 90°,
        field lines are parallel to the area and do not cross it.
      </p>

      <h2 id="h-1-10">1.10 Electric Dipole</h2>
      <p>
        An electric dipole is a pair of equal and opposite point charges q and −q, separated by
        distance 2a. The direction from −q to q is the dipole direction. The total charge is zero,
        but the fields do not exactly cancel.
      </p>
      <h3 id="h-1-10-1">1.10.1 The Field of an Electric Dipole</h3>
      <Expandable title="Dipole field derivation (axial and equatorial)">
        <p>For points on the axis (r ≫ a):</p>
        <FormulaBlock latex="\vec{E} = \frac{1}{4\pi\varepsilon_0} \frac{2\vec{p}}{r^3}" />
        <p>For points on the equatorial plane (r ≫ a):</p>
        <FormulaBlock latex="\vec{E} = -\frac{1}{4\pi\varepsilon_0} \frac{\vec{p}}{r^3}" />
        <p>The dipole field falls as 1/r³, unlike 1/r² for a point charge.</p>
      </Expandable>
      <FormulaBlock latex="\vec{p} = q \times 2a \, \hat{p}" />
      <p>
        The dipole moment vector p⃗ has magnitude q × 2a and direction from −q to q. The field
        depends on the product qa, not q and a separately.
      </p>
      <h3 id="h-1-10-2">1.10.2 Physical Significance of Dipoles</h3>
      <p>
        In most molecules, centres of positive and negative charges coincide (dipole moment = 0).
        CO₂ and CH₄ are of this type. They develop a dipole moment when an electric field is
        applied.
      </p>
      <Callout type="note">
        Polar molecules have a permanent electric dipole moment even without an external field,
        because the centres of positive and negative charges do not coincide. Water (H₂O) is a
        common example.
      </Callout>

      <h2 id="h-1-11">1.11 Dipole in a Uniform External Field</h2>
      <p>
        Consider a permanent dipole p⃗ in uniform external field E⃗. Forces qE⃗ and −qE⃗ act at
        different points, resulting in a torque. Net force is zero since E⃗ is uniform.
      </p>
      <FormulaBlock latex="\vec{\tau} = \vec{p} \times \vec{E}" />
      <Callout type="important">
        Torque τ⃗ = p⃗ × E⃗ tends to align the dipole with the field. When p⃗ is aligned with
        E⃗, torque is zero.
      </Callout>
      <p>
        If the field is not uniform, net force is non-zero. A comb run through dry hair attracts
        paper — the charged comb polarises the paper, and the non-uniform field makes the induced
        dipole experience a net force.
      </p>

      <h2 id="h-1-12">1.12 Continuous Charge Distribution</h2>
      <p>
        For many purposes, it is impractical to work with discrete charges. We define charge
        densities for continuous distributions:
      </p>
      <FormulaBlock latex="\sigma = \frac{\Delta Q}{\Delta S} \quad (\text{surface charge density, C/m}^2)" />
      <FormulaBlock latex="\lambda = \frac{\Delta Q}{\Delta l} \quad (\text{linear charge density, C/m})" />
      <FormulaBlock latex="\rho = \frac{\Delta Q}{\Delta V} \quad (\text{volume charge density, C/m}^3)" />
      <p>The field due to a continuous charge distribution:</p>
      <FormulaBlock latex="\vec{E} \cong \sum \frac{1}{4\pi\varepsilon_0} \frac{\rho \Delta V}{r&apos;^2} \hat{r}&apos;" />

      <h2 id="h-1-13">1.13 Gauss&apos;s Law</h2>
      <p>
        As a simple application of electric flux, consider the total flux through a sphere of
        radius r enclosing a point charge q at its centre.
      </p>
      <Expandable title="Derivation of Gauss's Law from Coulomb's Law">
        <p>Flux through area element ΔS on sphere of radius r:</p>
        <FormulaBlock latex="\Delta\Phi = E \Delta S = \frac{q}{4\pi\varepsilon_0 r^2} \Delta S" />
        <p>Total flux through the sphere:</p>
        <FormulaBlock latex="\Phi = \sum \frac{q}{4\pi\varepsilon_0 r^2} \Delta S = \frac{q}{4\pi\varepsilon_0 r^2} \times 4\pi r^2 = \frac{q}{\varepsilon_0}" />
        <p>
          This is a special case of Gauss&apos;s Law: total electric flux through any closed surface
          = q_enclosed/ε₀.
        </p>
      </Expandable>
      <FormulaBlock latex="\oint \vec{E} \cdot d\vec{A} = \frac{q}{\varepsilon_0}" />
      <Callout type="important">
        Gauss&apos;s Law: The total electric flux through a closed surface is zero if no charge is
        enclosed. The term q includes sum of all charges enclosed by the surface.
      </Callout>
      <KeyPoint title="Key Exam Point">
        Gauss&apos;s law is true for any closed surface. The electric field on the left side is due
        to ALL charges (inside and outside), but q on the right side represents only the total
        charge inside S.
      </KeyPoint>

      <h2 id="h-1-14">1.14 Applications of Gauss&apos;s Law</h2>
      <h3 id="h-1-14-1">1.14.1 Infinitely Long Straight Uniformly Charged Wire</h3>
      <p>
        Consider an infinitely long thin wire with uniform linear charge density λ. The electric
        field is everywhere radial and depends only on the distance r:
      </p>
      <FormulaBlock latex="E = \frac{\lambda}{2\pi\varepsilon_0 r}" />

      <h3 id="h-1-14-2">1.14.2 Uniformly Charged Infinite Plane Sheet</h3>
      <p>
        Let σ be the uniform surface charge density. By symmetry, the field is uniform and parallel
        to the normal:
      </p>
      <FormulaBlock latex="E = \frac{\sigma}{2\varepsilon_0}" />
      <p>
        The field is directed away from the plate if σ &gt; 0 and toward it if σ &lt; 0. The field
        is independent of distance from the sheet.
      </p>

      <h3 id="h-1-14-3">1.14.3 Uniformly Charged Thin Spherical Shell</h3>
      <Expandable title="Spherical shell field — outside and inside derivation">
        <p>Let σ be uniform surface charge density of shell radius R.</p>
        <p><strong>Outside (r &gt; R):</strong></p>
        <p>Gaussian surface: sphere of radius r</p>
        <FormulaBlock latex="E \times 4\pi r^2 = \frac{\sigma \times 4\pi R^2}{\varepsilon_0} = \frac{q}{\varepsilon_0}" />
        <FormulaBlock latex="E = \frac{q}{4\pi\varepsilon_0 r^2}" />
        <p>Same as if all charge concentrated at centre.</p>
        <p><strong>Inside (r &lt; R):</strong></p>
        <p>Gaussian surface encloses no charge</p>
        <FormulaBlock latex="E \times 4\pi r^2 = 0" />
        <FormulaBlock latex="E = 0" />
      </Expandable>
      <FormulaBlock latex="\vec{E} = \frac{q}{4\pi\varepsilon_0 r^2} \hat{r} \quad (r > R)" />
      <FormulaBlock latex="E = 0 \quad (r < R)" />
      <KeyPoint title="Key Exam Point">
        For points outside a uniformly charged spherical shell, the field is as if all charge is at
        the centre. Inside the shell, E = 0 at all points.
      </KeyPoint>

      <h2 id="h-1-examples">Worked Examples</h2>
      <Example title="Example 1.1 — Time to Accumulate 1 Coulomb">
        <p>If 10⁹ electrons move out of a body every second, how much time to get 1 C?</p>
        <p>Charge per second = 1.6 × 10⁻¹⁹ × 10⁹ = 1.6 × 10⁻¹⁰ C</p>
        <p>Time = 1 C ÷ 1.6 × 10⁻¹⁰ C/s = 6.25 × 10⁹ s ≈ 198 years</p>
        <p>One coulomb is a very large unit.</p>
      </Example>
      <Example title="Example 1.2 — Charge in a Cup of Water">
        <p>Mass = 250 g, molecular mass = 18 g. Molecules = (250/18) × 6.02 × 10²³. Each has 10 electrons + 10 protons.</p>
        <p>Total charge = (250/18) × 6.02 × 10²³ × 10 × 1.6 × 10⁻¹⁹ = 1.34 × 10⁷ C</p>
      </Example>
      <Example title="Example 1.3 — Electric vs Gravitational Force Ratio">
        <p>(i) Electron-proton: Fe/FG = e²/(4πε₀Gm_pm_e) = 2.4 × 10³⁹</p>
        <p>(ii) Two protons: Fe/FG = e²/(4πε₀Gm²_p) = 1.3 × 10³⁶</p>
        <p>Electrical forces are enormously stronger than gravitational forces.</p>
      </Example>
      <Example title="Example 1.4 — Charge Sharing and Coulomb's Law">
        <p>Charged spheres A and B touched by uncharged C and D. Distance halved.</p>
        <FormulaBlock latex="F&apos; = k\frac{(q/2)(q&apos;/2)}{(r/2)^2} = \frac{kqq&apos;}{r^2} = F" />
        <p>The force remains unaltered.</p>
      </Example>
      <Example title="Example 1.5 — Force at Centroid of Equilateral Triangle">
        <p>Three charges q at vertices, charge Q at centroid.</p>
        <p>By symmetry, the three forces sum to zero.</p>
        <p>Total force on Q = 0</p>
      </Example>
      <Example title="Example 1.7 — Electron and Proton in Electric Field">
        <p>Electron falls 1.5 cm in E = 2.0 × 10⁴ N/C.</p>
        <FormulaBlock latex="t_e = \sqrt{\frac{2hm_e}{eE}} = 2.9 \times 10^{-9} \text{ s}" />
        <FormulaBlock latex="t_p = \sqrt{\frac{2hm_p}{eE}} = 1.3 \times 10^{-7} \text{ s}" />
        <p>Heavier particle takes greater time. Contrasts with gravity where time is mass-independent.</p>
      </Example>
      <Example title="Example 1.8 — Electric Field at Three Points">
        <p>Two charges ±10⁻⁸ C at 0.1 m apart.</p>
        <p>E_A = 7.2 × 10⁴ N/C (right)</p>
        <p>E_B = 3.2 × 10⁴ N/C (left)</p>
        <p>E_C = 9 × 10³ N/C (right)</p>
      </Example>
      <Example title="Example 1.10 — Flux through a Cube">
        <p>E_x = αx^(1/2), α = 800, cube side 0.1 m.</p>
        <FormulaBlock latex="\Phi = \alpha a^{5/2}(\sqrt{2} - 1) = 1.05 \text{ N·m²/C}" />
        <p>q = Φε₀ = 9.27 × 10⁻¹² C</p>
      </Example>
      <Example title="Example 1.12 — Atom Model (Gauss's Law)">
        <p>Nucleus Ze, uniform negative charge to radius R.</p>
        <p>r &lt; R: E = (1/4πε₀)(Ze/r²)(1 − r³/R³)</p>
        <p>r &gt; R: E = 0 (atom is neutral)</p>
      </Example>

      <h2 id="h-1-summary">Summary</h2>
      <ul>
        <li>Electric and magnetic forces determine the properties of atoms, molecules and bulk matter.</li>
        <li>Two types of charges: like charges repel, unlike attract. Glass rod rubbed with silk is positive; plastic rod rubbed with fur is negative.</li>
        <li>Conductors allow charge movement; insulators do not. In metals, mobile charges are electrons; in electrolytes, both ions are mobile.</li>
        <li>Three basic properties: quantisation (q = ne), additivity (algebraic sum), conservation (constant for isolated system).</li>
        <li>Coulomb&apos;s Law: F = (1/4πε₀)(q₁q₂/r²). k ≈ 9 × 10⁹ N·m²·C⁻², ε₀ = 8.854 × 10⁻¹².</li>
        <li>Superposition: Force on any charge is vector sum of forces due to all other charges.</li>
        <li>Electric field E⃗ = F⃗/q. Point charge: E = q/(4πε₀r²). Independent of test charge.</li>
        <li>Field lines: start at positive, end at negative, never cross, no closed loops in electrostatics.</li>
        <li>Dipole: pair of ±q separated by 2a. p⃗ = q × 2a. Field falls as 1/r³ at large distances.</li>
        <li>In uniform E⃗, dipole experiences torque τ⃗ = p⃗ × E⃗, no net force.</li>
        <li>Flux: ΔΦ = E⃗ · dS⃗. For closed surface, outward normal is positive by convention.</li>
        <li>Gauss&apos;s Law: Φ = q/ε₀. Applications: wire (E = λ/2πε₀r), sheet (E = σ/2ε₀), shell (E = q/4πε₀r² outside, 0 inside).</li>
      </ul>

      <h2 id="h-1-ponder">Points to Ponder</h2>
      <ul>
        <li>Protons are held inside the nucleus by the strong force (range ~10⁻¹⁴ m). Electrons are kept outside by quantum mechanics.</li>
        <li>Coulomb force and gravity follow inverse-square law, but gravity is always attractive while Coulomb can be both — allowing cancellation.</li>
        <li>The large value of k arises because 1C is defined in terms of magnetic forces, which are generally much weaker than electric forces.</li>
        <li>Charge is invariant under rotation AND for frames in relative motion — not true for every scalar.</li>
        <li>Superposition says force on one charge due to another is unaffected by other charges — no multi-body forces.</li>
        <li>For charge configurations with total charge zero, the field is not zero but falls faster than 1/r². A dipole is the simplest example.</li>
      </ul>
    </>
  );
}
