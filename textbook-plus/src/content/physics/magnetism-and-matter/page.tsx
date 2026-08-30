import { Callout } from "@/components/content/Callout";
import { Example } from "@/components/content/Example";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { TableCard } from "@/components/content/data/TableCard";

export default function MagnetismAndMatterChapter() {
  return (
    <>
      <h2 id="h-5-1">5.1 Introduction</h2>
      <Callout type="important">
        Magnetic phenomena are universal in nature — from distant galaxies to tiny invisible atoms. Isolated magnetic north and south poles, known as magnetic monopoles, do not exist. The word "magnet" comes from Magnesia, an island in Greece where magnetic ore was found as early as 600 BC.
      </Callout>
      <p>Some commonly known ideas regarding magnetism:</p>
      <ul>
        <li>The earth behaves as a magnet, with the magnetic field pointing approximately from the geographic south to the north.</li>
        <li>When a bar magnet is freely suspended, it points in the north-south direction. The tip pointing to the geographic north is the <strong>north pole</strong>; the tip pointing to the geographic south is the <strong>south pole</strong>.</li>
        <li>Like poles repel; unlike poles attract.</li>
        <li>We cannot isolate the north or south pole. If a bar magnet is broken into two halves, we get two similar bar magnets with somewhat weaker properties.</li>
        <li>It is possible to make magnets out of iron and its alloys.</li>
      </ul>

      <h2 id="h-5-2">5.2 The Bar Magnet</h2>
      <p>
        Examining iron filings sprinkled on glass over a short bar magnet, the pattern suggests the magnet has two poles, similar to the positive and negative charge of an electric dipole. A similar pattern is observed around a current-carrying solenoid.
      </p>

      <h3 id="h-5-2-1">5.2.1 The magnetic field lines</h3>
      <p>The pattern of iron filings permits us to plot the magnetic field lines — a visual and intuitive realisation of the magnetic field.</p>
      <Callout type="important">
        Properties of magnetic field lines:
      </Callout>
      <ul>
        <li>They form <strong>continuous closed loops</strong> — unlike electric dipole field lines, which begin on a positive charge and end on a negative charge or escape to infinity.</li>
        <li>The tangent to the field line at a given point represents the direction of the net magnetic field <strong>B</strong> at that point.</li>
        <li>The larger the number of field lines crossing per unit area, the stronger is the magnitude of B.</li>
        <li>Magnetic field lines <strong>do not intersect</strong> — otherwise the direction of the field would not be unique at the point of intersection.</li>
      </ul>
      <Comparison
        columns={[
          {
            title: "Bar Magnet",
            children: (
              <ul>
                <li>Field lines form closed loops</li>
                <li>Continuous — emerge and re-enter</li>
                <li>B stronger near poles</li>
              </ul>
            ),
          },
          {
            title: "Current-carrying solenoid",
            children: (
              <ul>
                <li>Field lines mimic a bar magnet</li>
                <li>Also form closed loops</li>
                <li>Pattern similar to bar magnet</li>
              </ul>
            ),
          },
          {
            title: "Electric dipole",
            children: (
              <ul>
                <li>Field lines start at +, end at −</li>
                <li>Do not form closed loops</li>
                <li>At large distances, very similar to magnet</li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-5-2-2">5.2.2 Bar magnet as an equivalent solenoid</h3>
      <Expandable title="Ampere's hypothesis">
        <p>All magnetic phenomena can be explained in terms of circulating currents.</p>
        <p>The resemblance of field lines for a bar magnet and a solenoid suggests a bar magnet may be thought of as a large number of circulating currents in analogy with a solenoid.</p>
        <ul>
          <li>Cutting a bar magnet in half is like cutting a solenoid — we get two smaller solenoids with weaker magnetic properties.</li>
          <li>Field lines remain continuous, emerging from one face and entering the other.</li>
          <li>This analogy can be tested with a compass needle near a bar magnet and a current-carrying solenoid.</li>
        </ul>
      </Expandable>
      <p>
        To make this analogy firm, we calculate the axial field of a finite solenoid. At large distances this axial field resembles that of a bar magnet. The magnitude of the field at point P due to the solenoid is:
      </p>
      <FormulaBlock latex={String.raw`B = \frac{\mu_0}{4\pi} \frac{2m}{r^3}`} important />
      <p>
        This is also the <strong>far axial magnetic field of a bar magnet</strong> which one may obtain experimentally. The magnetic moment of a bar magnet is thus equal to the magnetic moment of an equivalent solenoid that produces the same magnetic field.
      </p>

      <h3 id="h-5-2-3">5.2.3 The dipole in a uniform magnetic field</h3>
      <p>
        Place a small compass needle of known magnetic moment <strong>m</strong> in a magnetic field, allowing it to oscillate. The torque on the needle is:
      </p>
      <FormulaBlock latex={String.raw`\vec{\tau} = \vec{m} \times \vec{B}`} important />
      <p>In magnitude:</p>
      <FormulaBlock latex={String.raw`\tau = mB \sin\theta`} />
      <p>
        Here τ is the restoring torque and θ is the angle between <strong>m</strong> and <strong>B</strong>. An expression for magnetic potential energy can be obtained on lines similar to electrostatic potential energy.
      </p>
      <FormulaBlock latex={String.raw`U_m = \int \tau\, d\theta = \int mB \sin\theta \, d\theta = -mB\cos\theta = -\vec{m}\cdot\vec{B}`} important />
      <Callout type="important">
        The zero of potential energy is fixed at θ = 90°, i.e., when the needle is perpendicular to the field. Potential energy is minimum (−mB) at θ = 0° (most stable position) and maximum (+mB) at θ = 180° (most unstable position).
      </Callout>

      <h3 id="h-5-2-4">5.2.4 The electrostatic analog</h3>
      <p>
        Comparing the magnetic equations with the electric dipole equations suggests that the magnetic field at large distances due to a bar magnet of moment <strong>m</strong> can be obtained from the electric field of an electric dipole of moment <strong>p</strong> by the replacements:
      </p>
      <FormulaBlock latex={String.raw`\vec{E} \to \vec{B}, \qquad \vec{p} \to \vec{m}, \qquad \frac{1}{4\pi\varepsilon_0} \to \frac{\mu_0}{4\pi}`} />
      <p>In particular, the <strong>equatorial field</strong> (B_E) of a bar magnet at a distance r (for r &gt;&gt; l, where l is the size of the magnet):</p>
      <FormulaBlock latex={String.raw`B_E = -\frac{\mu_0}{4\pi} \frac{m}{r^3}`} important />
      <p>Likewise, the <strong>axial field</strong> (B_A) of a bar magnet for r &gt;&gt; l:</p>
      <FormulaBlock latex={String.raw`B_A = \frac{\mu_0}{4\pi} \frac{2m}{r^3}`} important />
      <TableCard
        caption="Table 5.1 — The Dipole Analogy. Magnetic quantities are obtained from electrostatic quantities by these replacements."
        headers={["Electrostatics", "Magnetism"]}
        rows={[
          { cells: ["1/ε₀", "µ₀"] },
          { cells: ["Dipole moment p", "Dipole moment m"] },
          { cells: ["Equatorial Field for a short dipole −p/4πε₀r³", "−µ₀m/4πr³"] },
          { cells: ["Axial Field for a short dipole 2p/4πε₀r³", "µ₀2m/4πr³"] },
          { cells: ["External Field: torque p × E", "m × B"] },
          { cells: ["External Field: Energy −p·E", "−m·B"] },
        ]}
      />

      <h2 id="h-5-3">5.3 Magnetism and Gauss's Law</h2>
      <p>
        For magnetic fields, which are continuous and form closed loops, the number of field lines leaving any closed surface is balanced by the number entering it. The net magnetic flux is zero for any closed surface.
      </p>
      <FormulaBlock latex={String.raw`\sum_{\text{all}} \vec{B}\cdot\Delta\vec{S} = 0`} important />
      <Callout type="important">
        Gauss's law for magnetism: The net magnetic flux through any closed surface is zero. Isolated magnetic poles (monopoles) are not known to exist — there are no sources or sinks of B. The simplest magnetic element is a dipole or a current loop.
      </Callout>
      <Comparison
        columns={[
          {
            title: "Magnetism",
            children: (
              <ul>
                <li>Σ B·ΔS = 0</li>
                <li>Net flux through closed surface is always zero</li>
                <li>No sources or sinks of B</li>
                <li>Monopoles do not exist</li>
              </ul>
            ),
          },
          {
            title: "Electrostatics",
            children: (
              <ul>
                <li>Σ E·ΔS = q/ε₀</li>
                <li>Flux equals enclosed charge / ε₀</li>
                <li>Field lines begin on + and end on −</li>
                <li>Isolated charges exist</li>
              </ul>
            ),
          },
        ]}
      />
      <KeyPoint title="Key Exam Point">
        The difference between Gauss's law of magnetism and that for electrostatics reflects the fact that isolated magnetic poles are not known to exist. All magnetic phenomena can be explained in terms of an arrangement of dipoles and/or current loops.
      </KeyPoint>

      <h2 id="h-5-4">5.4 Magnetisation and Magnetic Intensity</h2>
      <p>
        A circulating electron in an atom has a magnetic moment. In bulk material, these moments add up vectorially and can give a non-zero net magnetic moment. We define <strong>magnetisation M</strong> of a sample to be equal to its net magnetic moment per unit volume:
      </p>
      <FormulaBlock latex={String.raw`\vec{M} = \frac{m_{\text{net}}}{V}`} important />
      <p>
        <strong>M</strong> is a vector with dimensions L⁻¹A and is measured in units of A m⁻¹. Consider a long solenoid of n turns per unit length carrying a current I. The magnetic field in the interior of the solenoid is:
      </p>
      <FormulaBlock latex={String.raw`B_0 = \mu_0 n I`} important />
      <p>
        If the interior is filled with a material with non-zero magnetisation, the net B field is greater than B₀:
      </p>
      <FormulaBlock latex={String.raw`B = B_0 + B_m`} important />
      <p>
        The additional field B_m contributed by the material core is proportional to the magnetisation M:
      </p>
      <FormulaBlock latex={String.raw`B_m = \mu_0 M`} />
      <p>
        It is convenient to introduce another vector field <strong>H</strong>, called the <strong>magnetic intensity</strong>:
      </p>
      <FormulaBlock latex={String.raw`H = \frac{B}{\mu_0} - M`} important />
      <p>where H has the same dimensions as M and is measured in units of A m⁻¹. Thus the total magnetic field B is written as:</p>
      <FormulaBlock latex={String.raw`B = \mu_0 (H + M)`} important />
      <p>
        We partition the total field into two parts: one due to external factors such as the current in the solenoid (represented by H), and the other due to the specific nature of the material (M). The latter can be influenced by external factors:
      </p>
      <FormulaBlock latex={String.raw`M = \chi H`} important />
      <p>
        where χ, a dimensionless quantity, is called the <strong>magnetic susceptibility</strong>. It measures how a material responds to an external field. χ is <strong>small and positive</strong> for <strong>paramagnetic</strong> materials, and <strong>small and negative</strong> for <strong>diamagnetic</strong> materials (in which case M and H are opposite in direction).
      </p>
      <p>From Eqs. M = χH and B = µ₀(H + M), we obtain:</p>
      <FormulaBlock latex={String.raw`B = \mu_0 (1 + \chi) H`} important />
      <FormulaBlock latex={String.raw`B = \mu_0 \mu_r H = \mu H`} important />
      <p>
        where µ_r = 1 + χ is a dimensionless quantity called the <strong>relative magnetic permeability</strong> of the substance — the analog of the dielectric constant in electrostatics. The magnetic permeability of the substance is µ, with the same dimensions and units as µ₀:
      </p>
      <FormulaBlock latex={String.raw`\mu = \mu_0 \mu_r = \mu_0 (1 + \chi)`} important />
      <Callout type="important">
        The three quantities χ, µ_r and µ are interrelated and only one of them is independent. Given one, the other two may be easily determined.
      </Callout>

      <h2 id="h-5-5">5.5 Magnetic Properties of Materials</h2>
      <p>
        In terms of the susceptibility χ, a material is <strong>diamagnetic</strong> if χ is negative, <strong>para-</strong> if χ is positive and small, and <strong>ferro-</strong> if χ is large and positive. Here ε is a small positive number introduced to quantify paramagnetic materials.
      </p>
      <TableCard
        caption="Table 5.2 — Classification of Magnetic Materials."
        headers={["Diamagnetic", "Paramagnetic", "Ferromagnetic"]}
        rows={[
          { cells: ["−1 ≤ χ < 0", "0 < χ < ε", "χ >> 1"] },
          { cells: ["0 ≤ µr < 1", "1 < µr < 1 + ε", "µr >> 1"] },
          { cells: ["µ < µ₀", "µ > µ₀", "µ >> µ₀"] },
        ]}
      />

      <h3 id="h-5-5-1">5.5.1 Diamagnetism</h3>
      <Callout type="important">
        Diamagnetic substances have a tendency to move from stronger to weaker parts of an external magnetic field — a magnet would <strong>repel</strong> a diamagnetic substance.
      </Callout>
      <ul>
        <li>Field lines are repelled or expelled, and the field inside the material is <strong>reduced</strong> (slight, one part in 10⁵).</li>
        <li>Orbiting electrons possess orbital angular momentum and orbital magnetic moment — diamagnetic substances are those in which the resultant magnetic moment in an atom is zero.</li>
        <li>When a magnetic field is applied, those electrons having orbital magnetic moment in the same direction slow down, and those in the opposite direction speed up (induced current in accordance with Lenz's law).</li>
        <li>The substance develops a net magnetic moment <strong>opposite</strong> to the applied field, hence <strong>repulsion</strong>.</li>
        <li>Examples: bismuth, copper, lead, silicon, nitrogen (at STP), water, sodium chloride.</li>
        <li>Diamagnetism is present in all substances, but the effect is so weak it gets masked by other effects.</li>
      </ul>
      <Callout type="didyouknow">
        The most exotic diamagnetic materials are <strong>superconductors</strong> — metals cooled to very low temperatures exhibiting perfect conductivity and perfect diamagnetism. Here χ = −1 and µr = 0; field lines are completely expelled. This phenomenon is called the <strong>Meissner effect</strong>. Superconducting magnets can run magnetically levitated superfast trains.
      </Callout>

      <h3 id="h-5-5-2">5.5.2 Paramagnetism</h3>
      <Callout type="important">
        Paramagnetic substances get weakly magnetised when placed in an external magnetic field — they tend to move from weak to strong field, i.e., get <strong>weakly attracted</strong> to a magnet.
      </Callout>
      <ul>
        <li>The individual atoms (or ions or molecules) possess a <strong>permanent magnetic dipole moment</strong> of their own.</li>
        <li>Due to random thermal motion, no net magnetisation is seen without an external field.</li>
        <li>In a strong external field B₀ and at low temperatures, the individual atomic dipoles can be made to align and point in the same direction as B₀.</li>
        <li>Field lines get <strong>concentrated inside</strong> the material, and the field inside is <strong>enhanced</strong> (slight, one part in 10⁵).</li>
        <li>Examples: aluminium, sodium, calcium, oxygen (at STP), copper chloride.</li>
        <li>Both χ and µr depend on the material and (in a simple fashion) on the sample temperature.</li>
        <li>As the field increases or the temperature lowers, magnetisation increases until it reaches the <strong>saturation value</strong> when all dipoles are perfectly aligned with the field.</li>
      </ul>

      <h3 id="h-5-5-3">5.5.3 Ferromagnetism</h3>
      <Callout type="important">
        Ferromagnetic substances get strongly magnetised when placed in an external magnetic field — they get <strong>strongly attracted</strong> to a magnet.
      </Callout>
      <ul>
        <li>The individual atoms possess a dipole moment as in a paramagnetic material, but they interact so as to spontaneously align over a macroscopic volume called a <strong>domain</strong>.</li>
        <li>Each domain has a net magnetisation. Typical domain size is 1 mm and the domain contains about 10¹¹ atoms.</li>
        <li>Initially the magnetisation varies randomly from domain to domain and there is no bulk magnetisation.</li>
        <li>On applying an external field B₀, the domains orient in the direction of B₀ and the domain oriented in the direction of B₀ grows in size — they can form a single "giant" domain.</li>
        <li>In a non-uniform field, the sample tends to move towards the region of high field.</li>
        <li><strong>Hard ferromagnets</strong> (e.g. Alnico, lodestone): magnetisation persists after the field is removed — form permanent magnets used as compass needles.</li>
        <li><strong>Soft ferromagnets</strong> (e.g. soft iron): magnetisation disappears when the external field is removed.</li>
        <li>Ferromagnetic elements: iron, cobalt, nickel, gadolinium; relative magnetic permeability &gt; 1000.</li>
        <li>Ferromagnetic property depends on temperature — at high enough temperature, a ferromagnet becomes a paramagnet.</li>
      </ul>

      <h2 id="h-5-materials-compare">Comparing the Three Materials</h2>
      <Comparison
        columns={[
          {
            title: "Diamagnetic",
            children: (
              <ul>
                <li>χ negative and small</li>
                <li>µr slightly less than 1</li>
                <li>Repelled by magnet</li>
                <li>Field inside reduced</li>
                <li>Examples: copper, water, bismuth</li>
              </ul>
            ),
          },
          {
            title: "Paramagnetic",
            children: (
              <ul>
                <li>χ positive and small</li>
                <li>µr slightly greater than 1</li>
                <li>Weakly attracted</li>
                <li>Field inside enhanced</li>
                <li>Examples: aluminium, oxygen</li>
              </ul>
            ),
          },
          {
            title: "Ferromagnetic",
            children: (
              <ul>
                <li>χ large and positive</li>
                <li>µr &gt;&gt; 1 (&gt;1000)</li>
                <li>Strongly attracted</li>
                <li>Field highly concentrated</li>
                <li>Examples: iron, cobalt, nickel</li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-5-examples">Worked Examples</h2>

      <ProblemSolution problemNumber="5.1">
        <ProblemSolution.Problem>
          <p>(a) What happens if a bar magnet is cut into two pieces: (i) transverse to its length, (ii) along its length?</p>
          <p>(b) A magnetised needle in a uniform magnetic field experiences a torque but no net force. An iron nail near a bar magnet, however, experiences a force of attraction in addition to a torque. Why?</p>
          <p>(c) Must every magnetic configuration have a north pole and a south pole? What about the field due to a toroid?</p>
          <p>(d) Two identical looking iron bars A and B are given, one of which is definitely known to be magnetised. How would one ascertain whether or not both are magnetised? If only one is magnetised, how does one ascertain which one?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> In either case, one gets two magnets, each with a north and a south pole.</p>
          <p><strong>(b)</strong> No force if the field is uniform. The iron nail experiences a non-uniform field due to the bar magnet. There is an induced magnetic moment in the nail, so it experiences both force and torque. The net force is attractive because the induced south pole in the nail is closer to the north pole of the magnet than the induced north pole.</p>
          <p><strong>(c)</strong> Not necessarily. True only if the source of the field has a net non-zero magnetic moment. This is not so for a toroid or even for a straight infinite conductor.</p>
          <p><strong>(d)</strong> Try to bring different ends of the bars closer. A repulsive force in some situation establishes both are magnetised. If always attractive, one of them is not magnetised. In a bar magnet, the field is strongest at the two ends (poles) and weakest at the central region. Pick up A and lower one end, first on an end of B, then on the middle of B. If A experiences no force at the middle of B, then B is magnetised. If no change is noticed, A is magnetised.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="5.2">
        <ProblemSolution.Problem>
          <p>A small magnetised needle P is placed at a point O. The arrow shows the direction of its magnetic moment. Another identical magnetised needle Q is placed in various positions and orientations.</p>
          <p>(a) In which configuration is the system not in equilibrium?</p>
          <p>(b) In which configuration is the system in (i) stable, and (ii) unstable equilibrium?</p>
          <p>(c) Which configuration corresponds to the lowest potential energy among all configurations shown?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Potential energy arises due to the potential energy of one dipole (Q) in the field due to the other (P). The field due to P is given by:</p>
          <FormulaBlock latex={String.raw`B_P = -\frac{\mu_0}{4\pi} \frac{m_P}{r^3} \quad \text{(on the normal bisector)}`} />
          <FormulaBlock latex={String.raw`B_P = \frac{\mu_0}{4\pi} \frac{2m_P}{r^3} \quad \text{(on the axis)}`} />
          <p>Equilibrium is <strong>stable</strong> when m_Q is <strong>parallel</strong> to B_P, and <strong>unstable</strong> when it is <strong>anti-parallel</strong> to B_P.</p>
          <p>(a) PQ1 and PQ2</p>
          <p>(b) (i) PQ3, PQ6 (stable); (ii) PQ5, PQ4 (unstable)</p>
          <p>(c) PQ6</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <Example title="Example 5.3 — Correct / Incorrect Field-Line Diagrams">
        <p>Many diagrams show magnetic field lines wrongly. Point out what is wrong with them.</p>
        <p><strong>(a) Wrong.</strong> Magnetic field lines can never emanate from a point. Over any closed surface the net flux of B must be zero — as many lines should enter as leave. These lines actually represent the electric field of a long positively charged wire; the correct magnetic field lines circle the straight conductor.</p>
        <p><strong>(b) Wrong.</strong> Magnetic field lines can never cross each other, otherwise the direction of the field is ambiguous. Also, magnetostatic field lines can never form closed loops around empty space — a closed loop of static field must enclose a region with a current passing.</p>
        <p><strong>(c) Right.</strong> Magnetic lines are completely confined within a toroid; each loop encloses a region across which a current passes.</p>
        <p><strong>(d) Wrong.</strong> Field lines due to a solenoid at its ends and outside cannot be so completely straight and confined — this violates Ampere's law. Lines should curve out at both ends and meet to form closed loops.</p>
        <p><strong>(e) Right.</strong> Field lines outside and inside a bar magnet. Around both the N-pole and S-pole, the net flux of the field is zero.</p>
        <p><strong>(f) Wrong.</strong> These lines cannot represent a magnetic field — all lines seem to emanate out of the shaded plate, giving non-zero net flux. These are actually electrostatic field lines around a positively charged upper plate and a negatively charged lower plate.</p>
        <p><strong>(g) Wrong.</strong> Magnetic field lines between two pole pieces cannot be precisely straight at the ends; some fringing is inevitable, otherwise Ampere's law is violated.</p>
      </Example>

      <Example title="Example 5.4 — Conceptual Questions on Gauss's Law">
        <p><strong>(a)</strong> Magnetic field lines show the direction along which a small magnetised needle aligns. Do the field lines also represent lines of force on a moving charged particle?</p>
        <p><strong>No.</strong> The magnetic force is always normal to B (F = qv × B). It is misleading to call magnetic field lines lines of force.</p>
        <p><strong>(b)</strong> If magnetic monopoles existed, how would Gauss's law of magnetism be modified?</p>
        <p>If monopoles existed, the right-hand side of ∮ B·dS = 0 would equal the monopole (magnetic charge) q_m enclosed by S — analogous to Gauss's law of electrostatics: ∮ B·dS = µ₀q_m.</p>
        <p><strong>(c)</strong> Does a bar magnet exert a torque on itself due to its own field?</p>
        <p><strong>No.</strong> There is no force or torque on an element due to the field produced by that element itself. (For a special case of a straight wire, this force is zero.)</p>
        <p><strong>(d)</strong> Can a system have magnetic moments even though its net charge is zero?</p>
        <p><strong>Yes.</strong> The average charge may be zero, yet the mean of the magnetic moments due to various current loops may not be zero — as in paramagnetic materials where atoms have net dipole moment while net charge is zero.</p>
      </Example>

      <ProblemSolution problemNumber="5.5">
        <ProblemSolution.Problem>
          <p>A solenoid has a core of a material with relative permeability 400. The windings carry a current of 2 A. If the number of turns is 1000 per metre, calculate (a) H, (b) M, (c) B, and (d) the magnetising current I_m.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> The field H is independent of the material of the core:</p>
          <FormulaBlock latex={String.raw`H = nI = 1000 \times 2.0 = 2 \times 10^3 \ \text{A/m}`} important />
          <p><strong>(b)</strong> The magnetic field B is given by:</p>
          <FormulaBlock latex={String.raw`B = \mu_r \mu_0 H = 400 \times 4\pi \times 10^{-7} \times 2 \times 10^3 = 1.0 \ \text{T}`} important />
          <p><strong>(c)</strong> Magnetisation is given by:</p>
          <FormulaBlock latex={String.raw`M = \frac{B - \mu_0 H}{\mu_0} = (\mu_r - 1)H = 399 \times H \cong 8 \times 10^5 \ \text{A/m}`} important />
          <p><strong>(d)</strong> The magnetising current I_M is the additional current needed in the windings, in the absence of the core, to give the same B value. Thus B = µ_r n (I + I_M). Using I = 2 A, B = 1 T:</p>
          <FormulaBlock latex={String.raw`I_M = 794 \ \text{A}`} important />
        </ProblemSolution.Solution>
      </ProblemSolution>

      <h2 id="h-5-summary">Summary</h2>
      <ul>
        <li>The science of magnetism is old — magnetic materials tend to point north-south; like poles repel, unlike attract; cutting a bar magnet in two leads to two smaller magnets. Magnetic poles cannot be isolated.</li>
        <li>When a bar magnet of dipole moment m is placed in a uniform magnetic field B: (a) the force on it is zero, (b) the torque on it is m × B, (c) its potential energy is −m·B, with the zero of energy at the orientation where m is perpendicular to B.</li>
        <li>For a bar magnet of size l and moment m at distance r (r &gt;&gt; l): B = (µ₀/4π)(2m/r³) along axis, and B = −(µ₀/4π)(m/r³) along equator.</li>
        <li>Gauss's law for magnetism states the net magnetic flux through any closed surface is zero: Σ B·ΔS = 0.</li>
        <li>For a material placed in an external field B₀, the magnetic intensity is H = B/µ₀. Magnetisation M is the dipole moment per unit volume. The magnetic field B in the material is B = µ₀(H + M).</li>
        <li>For a linear material M = χH, so B = µH, and χ is the magnetic susceptibility. The three quantities relate as µ = µ₀µ_r and µ_r = 1 + χ.</li>
        <li>Magnetic materials are broadly classified as diamagnetic (χ negative and small), paramagnetic (χ positive and small), and ferromagnetic (χ large).</li>
        <li>Substances which at room temperature retain their ferromagnetic property for a long time are called <strong>permanent magnets</strong>.</li>
      </ul>

      <h2 id="h-5-ponder">Points to Ponder</h2>
      <ul>
        <li>A satisfactory understanding of magnetic phenomena in terms of moving charges/currents came after 1800 AD, but technological exploitation of the directional properties of magnets predates this by two thousand years.</li>
        <li>Magnetic monopoles do not exist — slicing a magnet in half gives two smaller magnets. Electric charge, however, is quantised (|e| = 1.6 × 10⁻¹⁹ C and all other charges are integral multiples). We do not know why.</li>
        <li>A consequence of the absence of magnetic monopoles is that magnetic field lines are continuous and form closed loops.</li>
        <li>A miniscule difference in χ yields radically different behaviour: diamagnetic (χ = −10⁻⁵) versus paramagnetic (χ = +10⁻⁵).</li>
        <li>There exists a perfect diamagnet — a superconductor (χ = −1, µr = 0, µ = 0), also a perfect conductor. The BCS theory (1957, Nobel Prize 1970) explains these effects.</li>
        <li>Diamagnetism is universal — present in all materials, but weak and hard to detect if the substance is para- or ferromagnetic.</li>
        <li>Beyond dia-/para-/ferromagnetism there exist ferrimagnetic, anti-ferromagnetic, and spin glass materials, with exotic properties.</li>
      </ul>
    </>
  );
}
