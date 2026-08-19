import { Callout } from "@/components/content/Callout";
import { Example } from "@/components/content/Example";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";

export default function ElectricChargesChapter() {
  return (
    <>
      <h2 id="h-1-1">1.1 Introduction</h2>
      <Callout type="important">
        Electrostatics deals with the study of forces, fields and potentials arising from static charges.
      </Callout>
      <Stepper
        steps={[
          { label: "Rub insulating surfaces together" },
          { label: "Electrons transfer from one surface to the other", description: "One surface loses electrons (+ve), the other gains (−ve)." },
          { label: "Both surfaces become charged" },
          { label: "Charges accumulate until a discharge path exists" },
          { label: "Discharge produces spark, shock, or light" },
        ]}
      />

      <h2 id="h-1-2">1.2 Electric Charge</h2>
      <p><strong>Fundamental Observations:</strong></p>
      <Comparison
        columns={[
          {
            title: "Repel",
            children: (
              <ul>
                <li>Glass rod + silk/wool (both rubbed)</li>
                <li>Plastic rod + fur (both rubbed)</li>
              </ul>
            ),
          },
          {
            title: "Attract",
            children: (
              <ul>
                <li>Glass rod + wool/silk (unrubbed)</li>
                <li>Plastic rod + glass rod</li>
              </ul>
            ),
          },
        ]}
      />
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

      <Expandable id="h-1-4-1" title="1.4.1 Additivity of Charges">
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
      </Expandable>

      <Expandable id="h-1-4-2" title="1.4.2 Conservation of Charge">
        <p>Net charge of an isolated system remains constant, regardless of internal redistribution.</p>
        <ul>
          <li>Charging by rubbing transfers electrons — no charge is created or destroyed.</li>
          <li>Conservation of charge has been established experimentally.</li>
        </ul>
        <Callout type="important">
          Conservation of charge: A neutron turns into a proton and an electron. Total charge is zero before and after — equal and opposite charges created simultaneously.
        </Callout>
      </Expandable>

      <Expandable id="h-1-4-3" title="1.4.3 Quantisation of Charge">
        <p>All observable charges are integral multiples of a fundamental unit charge e.</p>
        <FormulaBlock latex="q = ne \quad \text{where } n \in \mathbb{Z}" important />
        <FormulaBlock latex="e = 1.602 \times 10^{-19} \text{ C}" important />
        <ul>
          <li>Electron carries −e, proton carries +e.</li>
          <li>SI unit: 1 C = charge flowing at 1 A for 1 s.</li>
          <li>~6 × 10¹⁸ electrons per coulomb.</li>
          <li>Practical units: 1 μC = 10⁻⁶ C, 1 mC = 10⁻³ C.</li>
        </ul>
      </Expandable>

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

      <h2 id="h-1-5">1.5 Coulomb&apos;s Law</h2>
      <Callout type="important">
        Coulomb&apos;s Law: The electrostatic force between two point charges is directly proportional
        to the product of the magnitudes of the two charges and inversely proportional to the
        square of the distance between them. The force acts along the line joining the two charges.
      </Callout>

      <h3 id="h-1-5-1">1.5.1 Scalar Form</h3>
      <p>
        If two point charges q₁ and q₂ are separated by a distance r in vacuum, the magnitude of
        the force between them is:
      </p>
      <FormulaBlock latex="F = k \frac{|q_1 q_2|}{r^2}" important />
      <p>The constant k is written as k = 1/(4πε₀), so:</p>
      <FormulaBlock latex="F = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2}" important />
      <p>where ε₀ is the permittivity of free space:</p>
      <FormulaBlock latex="\varepsilon_0 = 8.854 \times 10^{-12} \text{ C}^2 \text{N}^{-1}\text{m}^{-2}" important />
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
      <FormulaBlock latex="F_{\text{medium}} = \frac{F_{\text{vacuum}}}{K}" important />
      <FormulaBlock latex="K = \frac{\varepsilon}{\varepsilon_0}" important />
      <FormulaBlock latex="\varepsilon = \varepsilon_0 K" important />
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

      <h2 id="h-1-6">1.6 Forces between Multiple Charges</h2>
      <Callout type="important">
        Principle of Superposition: The force on any charge due to a number of other charges is
        the vector sum of all the forces on that charge due to the other charges, taken one at a
        time. Individual forces are unaffected by the presence of other charges.
      </Callout>
      <FormulaBlock latex="\vec{F}_1 = \sum_{i=2}^{n} \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_i}{r_{1i}^2} \hat{r}_{1i}" important />
      <p>
        The vector sum is obtained by the parallelogram law. Each individual force is calculated
        using Coulomb&apos;s law, then added vectorially.
      </p>

      <Expandable title="Problem 1.6.1 — Equilateral Triangle Charges">
        <ProblemSolution problemNumber="1.6.1">
          <ProblemSolution.Problem>
            <p>
              Three equal charges +q are placed at the vertices of an equilateral triangle of side a.
              Find the magnitude and direction of the force on any one of the charges.
            </p>
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              Consider the charge at vertex A. It experiences two forces:
            </p>
            <ul>
              <li>F₁ due to the charge at B, directed along BA (away from B)</li>
              <li>F₂ due to the charge at C, directed along CA (away from C)</li>
            </ul>
            <p>Both forces have the same magnitude:</p>
            <FormulaBlock latex="F_1 = F_2 = \frac{1}{4\pi\varepsilon_0} \frac{q^2}{a^2}" />
            <p>
              The angle between F₁ and F₂ is 60° (since the triangle is equilateral).
              Using the parallelogram law:
            </p>
            <FormulaBlock latex="F_{\text{net}} = \sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \cos 60°}" />
            <p>Since F₁ = F₂ = F and cos 60° = ½:</p>
            <FormulaBlock latex="F_{\text{net}} = \sqrt{F^2 + F^2 + 2F^2 \cdot \frac{1}{2}} = \sqrt{3F^2} = \sqrt{3} \, F" important />
            <FormulaBlock latex="F_{\text{net}} = \frac{\sqrt{3}}{4\pi\varepsilon_0} \frac{q^2}{a^2}" important />
            <p>
              The direction is along the angle bisector of the 60° angle, pointing away from the
              opposite side (i.e., radially outward from the centre of the triangle).
            </p>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-1-7">1.7 Electric Field</h2>
      <p>
        Consider a point charge Q in vacuum. The charge Q produces an electric field everywhere in
        the surrounding. When another charge q is brought at point P, the field acts on it and
        produces a force.
      </p>
      <FormulaBlock latex="\vec{E}(\vec{r}) = \frac{1}{4\pi\varepsilon_0} \frac{Q}{r^2} \hat{r}" important />
      <p>The force on a charge q in an electric field:</p>
      <FormulaBlock latex="\vec{F}(\vec{r}) = q\vec{E}(\vec{r})" important />
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
      <FormulaBlock latex="\Delta\Phi = \vec{E} \cdot d\vec{S} = E \, dS \cos\theta" important />
      <p>The total flux through surface S:</p>
      <FormulaBlock latex="\Phi = \oint \vec{E} \cdot d\vec{S}" important />
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
      <FormulaBlock latex="\vec{p} = q \times 2a \, \hat{p}" important />
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
      <FormulaBlock latex="\vec{\tau} = \vec{p} \times \vec{E}" important />
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
      <FormulaBlock latex="\sigma = \frac{\Delta Q}{\Delta S} \quad (\text{surface charge density, C/m}^2)" important />
      <FormulaBlock latex="\lambda = \frac{\Delta Q}{\Delta l} \quad (\text{linear charge density, C/m})" important />
      <FormulaBlock latex="\rho = \frac{\Delta Q}{\Delta V} \quad (\text{volume charge density, C/m}^3)" important />
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
      <FormulaBlock latex="\oint \vec{E} \cdot d\vec{A} = \frac{q}{\varepsilon_0}" important />
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
      <FormulaBlock latex="E = \frac{\lambda}{2\pi\varepsilon_0 r}" important />

      <h3 id="h-1-14-2">1.14.2 Uniformly Charged Infinite Plane Sheet</h3>
      <p>
        Let σ be the uniform surface charge density. By symmetry, the field is uniform and parallel
        to the normal:
      </p>
      <FormulaBlock latex="E = \frac{\sigma}{2\varepsilon_0}" important />
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
      <FormulaBlock latex="\vec{E} = \frac{q}{4\pi\varepsilon_0 r^2} \hat{r} \quad (r > R)" important />
      <FormulaBlock latex="E = 0 \quad (r < R)" important />
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
      <Example title="Example 1.3 — Coulomb's Law vs Gravitational Force">
        <p>
          Coulomb's law for electrostatic force between two point charges and Newton's law
          for gravitational force between two stationary point masses, both have inverse-square
          dependence on the distance between the charges and masses respectively.
        </p>
        <p>
          <strong>(a) Compare the strength of these forces by determining the ratio of their
          magnitudes (i) for an electron and a proton and (ii) for two protons.</strong>
        </p>
        <p><strong>(b) Estimate the accelerations of electron and proton due to the electrical
          force of their mutual attraction when they are 1 Å (= 10⁻¹⁰ m) apart?</strong></p>
        <p className="text-sm text-muted-foreground">(mₚ = 1.67 × 10⁻²⁷ kg, mₑ = 9.11 × 10⁻³¹ kg)</p>

        <p className="mt-4"><strong>Solution</strong></p>
        <p><strong>(a)(i)</strong> The electric force between an electron and a proton at a distance r apart is:</p>
        <FormulaBlock latex="F_e = -\frac{e^2}{4\pi\varepsilon_0 \, r^2}" />
        <p>where the negative sign indicates that the force is attractive. The corresponding
          gravitational force (always attractive) is:</p>
        <FormulaBlock latex="F_G = \frac{G \, m_p \, m_e}{r^2}" />
        <p>The ratio of their magnitudes is:</p>
        <FormulaBlock latex="\frac{F_e}{F_G} = \frac{e^2}{4\pi\varepsilon_0 \, G \, m_p \, m_e} \approx 2.4 \times 10^{39}" important />
        <p>where mₚ and mₑ are the masses of a proton and an electron respectively.</p>

        <p><strong>(a)(ii)</strong> On similar lines, the ratio of the magnitudes of electric force to the
          gravitational force between two protons at a distance r apart is:</p>
        <FormulaBlock latex="\frac{F_e}{F_G} = \frac{e^2}{4\pi\varepsilon_0 \, G \, m_p^2} \approx 1.3 \times 10^{36}" important />
        <p>
          However, it may be mentioned here that the signs of the two forces are different. For
          two protons, the gravitational force is attractive in nature and the Coulomb force is
          repulsive. The actual values of these forces between two protons inside a nucleus
          (distance between two protons is ~ 10⁻¹⁵ m inside a nucleus) are Fₑ ~ 230 N,
          whereas, F<sub>G</sub> ~ 1.9 × 10⁻³⁴ N.
        </p>
        <p>
          The (dimensionless) ratio of the two forces shows that electrical forces are enormously
          stronger than the gravitational forces.
        </p>

        <p><strong>(b)</strong> The electric force F exerted by a proton on an electron is same in magnitude to
          the force exerted by an electron on a proton; however, the masses of an electron and
          a proton are different. Thus, the magnitude of force is:</p>
        <FormulaBlock latex="|F| = \frac{1}{4\pi\varepsilon_0} \frac{e^2}{r^2} = 8.987 \times 10^9 \times \frac{(1.6 \times 10^{-19})^2}{(10^{-10})^2} = 2.3 \times 10^{-8} \text{ N}" important />
        <p>Using Newton's second law of motion, F = ma, the acceleration that an electron will
          undergo is:</p>
        <FormulaBlock latex="a = \frac{2.3 \times 10^{-8}}{9.11 \times 10^{-31}} = 2.5 \times 10^{22} \text{ m/s}^2" />
        <p>
          Comparing this with the value of acceleration due to gravity, we can conclude that the
          effect of gravitational field is negligible on the motion of electron and it undergoes
          very large accelerations under the action of Coulomb force due to a proton.
        </p>
        <p>The value for acceleration of the proton is:</p>
        <FormulaBlock latex="a = \frac{2.3 \times 10^{-8}}{1.67 \times 10^{-27}} = 1.4 \times 10^{19} \text{ m/s}^2" />
      </Example>

      <Example title="Example 1.4 — Charge Sharing and Coulomb's Law">
        <p>
          A charged metallic sphere A is suspended by a nylon thread. Another charged metallic
          sphere B held by an insulating handle is brought close to A such that the distance
          between their centres is 10 cm, as shown in Fig. 1.4(a). The resulting repulsion of A
          is noted (for example, by shining a beam of light and measuring the deflection of its
          shadow on a screen). Spheres A and B are touched by uncharged spheres C and D
          respectively, as shown in Fig. 1.4(b). C and D are then removed and B is brought
          closer to A to a distance of 5.0 cm between their centres, as shown in Fig. 1.4(c).
          What is the expected repulsion of A on the basis of Coulomb's law?
        </p>
        <p className="text-sm text-muted-foreground">
          Spheres A and C and spheres B and D have identical sizes. Ignore the sizes of A and B
          in comparison to the separation between their centres.
        </p>

        <p className="mt-4"><strong>Solution</strong></p>
        <p>
          Let the original charge on sphere A be q and that on B be q'. At a distance r between
          their centres, the magnitude of the electrostatic force on each is given by:
        </p>
        <FormulaBlock latex="F = \frac{1}{4\pi\varepsilon_0} \frac{qq'}{r^2}" />
        <p>neglecting the sizes of spheres A and B in comparison to r.</p>
        <p>
          When an identical but uncharged sphere C touches A, the charges redistribute on A
          and C and, by symmetry, each sphere carries a charge q/2. Similarly, after D touches B,
          the redistributed charge on each is q'/2.
        </p>
        <p>
          Now, if the separation between A and B is halved, the magnitude of the electrostatic
          force on each is:
        </p>
        <FormulaBlock latex="F' = \frac{1}{4\pi\varepsilon_0} \frac{(q/2)(q'/2)}{(r/2)^2} = \frac{1}{4\pi\varepsilon_0} \frac{qq'/4}{r^2/4} = \frac{1}{4\pi\varepsilon_0} \frac{qq'}{r^2} = F" important />
        <p>Thus the electrostatic force on A, due to B, remains unaltered.</p>
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
