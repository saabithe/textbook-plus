import Link from "next/link";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";

export default function MagnetismAndMatterChapter() {
  return (
    <>
      <h2 id="h-5-1">5.1 Introduction</h2>
      <Callout type="important">
        <Highlight color="yellow">Magnetic phenomena are universal</Highlight> — from distant galaxies to tiny invisible atoms.
        The crucial fact is that <Highlight color="blue">isolated magnetic poles (monopoles) do not exist</Highlight>. The word &ldquo;magnet&rdquo;
        comes from <em>Magnesia</em>, an island in Greece where magnetic ore was found as early as 600 BC.
      </Callout>
      <p>Some commonly known ideas regarding magnetism:</p>
      <ul>
        <li>The earth behaves as a magnet, with the magnetic field pointing approximately from the geographic <Highlight color="blue">south to north</Highlight>.</li>
        <li>When a bar magnet is freely suspended, it points north-south. The tip toward the <Highlight color="yellow">geographic north</Highlight> is the <strong>north pole</strong>; the other is the <strong>south pole</strong>.</li>
        <li><Highlight color="pink">Like poles repel; unlike poles attract.</Highlight></li>
        <li>We cannot isolate the north or south pole — cutting a bar magnet yields <Highlight color="yellow">two weaker magnets</Highlight>, never an isolated pole.</li>
        <li>It is possible to make magnets out of iron and its alloys.</li>
      </ul>
      <Expandable title="Q: If a magnet is cut into two equal parts, what happens to its poles?">
        <p><strong>Answer:</strong> Each part becomes a <Highlight color="yellow">complete magnet with both a north pole and a south pole</Highlight> — the two poles are never separated.</p>
        <p>This is a direct consequence of the fact that{" "}
        <Highlight color="blue">isolated magnetic poles (monopoles) do not exist</Highlight> — however many times you cut,
        every piece retains a pair of opposite poles, and the pieces get progressively weaker.</p>
      </Expandable>
      <Expandable title="Q: What causes a freely suspended magnet to align itself in the North-South direction?">
        <p><strong>Answer:</strong> The <Highlight color="yellow">Earth itself behaves as a giant magnet</Highlight> with a magnetic field around it, and a freely suspended magnet acts like a compass needle — it aligns with this field.</p>
        <p>The Earth&apos;s magnetic field exerts a <Highlight color="blue">restoring torque</Highlight> on the suspended magnet, turning it until the field lines through it align with the Earth&apos;s field, pointing essentially from geographic south to geographic north.</p>
        <p>The tip that points toward <Highlight color="green">geographic north</Highlight> is called the <strong>north pole</strong>; the opposite tip is the <strong>south pole</strong>.</p>
      </Expandable>

      <h2 id="h-5-2">5.2 The Bar Magnet</h2>
      <p>
        Iron-filing patterns over a bar magnet suggest two poles, analogous to an electric dipole,
        and resemble the pattern around a current-carrying solenoid — the first hint that
        <Highlight color="yellow"> magnetism and moving charges are related</Highlight>.
      </p>

      <h3 id="h-5-2-0">Key Definitions</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [&>div]:my-0">
        <FactCard
          title="Magnetism"
          definition="A piece of material that has both attractive and repulsive properties is called a magnet, and this property is called magnetism."
          icon="🧲"
        />
        <FactCard
          title="Magnetic Field"
          definition="The region or space around a magnet where its effect can be felt is called the magnetic field around the magnet. It is a vector field represented by the symbol B."
          icon="🧭"
        />
        <FactCard
          title="Magnetic Field Line"
          definition="The imaginary lines used to represent a magnetic field are called magnetic field lines. Their tangent at any point gives the direction of the magnetic field there."
          icon="➿"
        />
        <FactCard
          title="Magnetic Field Intensity (B)"
          definition="The force acting on a unit north pole placed at a point gives the magnetic field intensity B at that point. Its unit is the tesla (T)."
          icon="🔶"
        />
        <FactCard
          title="Pole Strength (p)"
          definition="The strength of a magnetic pole to attract magnetic material towards it is called its pole strength. It is a scalar quantity, measured in ampere-metre (A m)."
          icon="🧲"
        />
        <FactCard
          title="Neutral Point"
          definition="The attracting power of a bar magnet at its centre point is zero, so the centre is called the neutral point. The field lines are parallel here and there is no resultant attractive force."
          icon="⚫"
        />
      </div>
      <Callout type="important" title="Properties of magnetic field lines">
        <ol className="list-decimal pl-5 space-y-2">
          <li>The magnetic field lines of a magnet form <Highlight color="blue">continuous closed loops</Highlight>.</li>
          <li>A tangent drawn at any point on a magnetic field line gives the <strong>direction of the magnetic field</strong> at that point.</li>
          <li>A <Highlight color="yellow">larger number of field lines crossing per unit area</Highlight> means a <strong>stronger magnetic field</strong> there.</li>
          <li>Two magnetic field lines <Highlight color="pink">never intersect</Highlight> each other.</li>
        </ol>
      </Callout>

      <h3 id="h-5-2-1">5.2.1 The magnetic field lines</h3>
      <p>The pattern of iron filings lets us plot the <strong>magnetic field lines</strong> — a visual and intuitive realisation of the magnetic field.</p>
      <p><strong>Direction of magnetic field lines</strong> — around a bar magnet with a north (N) and a south (S) pole:</p>
      <Comparison
        columns={[
          {
            title: "Outside the magnet",
            children: (
              <ul>
                <li>Field lines run from the <Highlight color="pink">north pole (N)</Highlight> to the <Highlight color="blue">south pole (S)</Highlight>.</li>
                <li>The tangent at any external point points from N to S.</li>
              </ul>
            ),
          },
          {
            title: "Inside the magnet",
            children: (
              <ul>
                <li>Field lines run from the <Highlight color="blue">south pole (S)</Highlight> to the <Highlight color="pink">north pole (N)</Highlight>.</li>
                <li>Together with the outside lines this forms the continuous closed loop.</li>
              </ul>
            ),
          },
        ]}
      />
      <Expandable title="Q: Why do two magnetic field lines never intersect?">
        <p><strong>Answer:</strong> At the point where two field lines meet, there would be <Highlight color="yellow">two different tangents</Highlight>, and hence two different directions of the magnetic field at the <em>same</em> point.</p>
        <p>But the magnetic field at any point has <Highlight color="blue">only one unique direction</Highlight> — the tangent is fixed. Since two distinct tangents cannot both describe the same point,{" "}
        <Highlight color="pink">two magnetic field lines can never cross each other</Highlight>.</p>
      </Expandable>
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
                <li>At large distances, very similar to a magnet</li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-5-2-2">5.2.2 Bar magnet as an equivalent solenoid</h3>
      <Callout type="note">
        <strong>Ampere&apos;s hypothesis:</strong> <Highlight color="yellow">all magnetic phenomena can be explained in terms of circulating currents.</Highlight>
        A bar magnet behaves like a solenoid because both are arrangements of many tiny current loops.
      </Callout>
      <Stepper
        steps={[
          { label: "A bar magnet ≈ many circulating currents", description: "Like a finite solenoid, which is a helical coil of current." },
          { label: "Cutting a bar magnet ≈ cutting a solenoid", description: "You get two smaller solenoids (or magnets) with weaker magnetic properties." },
          { label: "Field lines remain continuous", description: "They emerge from one face and enter the other." },
          { label: "Test with a compass needle", description: "Deflections near a bar magnet and a current-carrying solenoid are similar." },
        ]}
      />
      <p>
        To make this analogy firm, we calculate the axial field of a finite solenoid. At large distances it
        resembles that of a bar magnet. The magnitude of the field at point P is:
      </p>
      <FormulaBlock latex={String.raw`B = \frac{\mu_0}{4\pi} \frac{2m}{r^3}`} important />
      <KeyPoint title="Key Idea">
        This is the <Highlight color="yellow">far axial field of a bar magnet</Highlight>, obtained experimentally.
        The magnetic moment of a bar magnet equals that of an <strong>equivalent solenoid</strong> producing the same field.
      </KeyPoint>

      <h3 id="h-5-2-moment">Magnetic Dipole &amp; Magnetic Dipole Moment</h3>
      <FactCard
        title="Magnetic Dipole"
        definition="A magnetic north pole and a south pole separated by a small distance is called a magnetic dipole. Examples: a bar magnet, a current-carrying loop."
        icon="🧲"
      />
      <KeyPoint title="Magnetic Dipole Moment (m)">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>It represents the <strong>strength of a magnet</strong>.</li>
          <li>It is the product of pole strength (P) and effective length (2l).</li>
          <li>It is a <Highlight color="yellow">vector quantity</Highlight> (m).</li>
          <li>Directed along the axis of the magnet <Highlight color="pink">from the south pole to the north pole</Highlight>.</li>
          <li><strong>Unit:</strong> A m&#178;.</li>
        </ul>
      </KeyPoint>
      <FormulaCard>
        <p className="text-[0.85rem] text-muted-foreground mb-2">Equations for magnetic dipole moment</p>
        <p className="text-[0.75rem] font-medium text-muted-foreground">Bar magnet</p>
        <FormulaBlock latex={String.raw`\vec{M} = P \times 2l`} />
        <p className="text-[0.75rem] font-medium text-muted-foreground">Solenoid / current loop</p>
        <FormulaBlock latex={String.raw`\vec{M} = N I A`} />
        <p className="text-[0.85rem] text-muted-foreground">Here P is the pole strength and 2l the effective length of the bar magnet; N is the number of turns, I the current, and A the area of the current loop.</p>
      </FormulaCard>

      <h3 id="h-5-2-3">5.2.3 The dipole in a uniform magnetic field</h3>
      <p>
        Place a small compass needle of known moment <strong>m</strong> in a field, allowing it to oscillate.
        The needle experiences a <Highlight color="blue">restoring torque</Highlight> that tends to align it with the field:
      </p>
      <FormulaBlock latex={String.raw`\vec{\tau} = \vec{m} \times \vec{B}`} important />
      <p>In magnitude:</p>
      <FormulaBlock latex={String.raw`\tau = mB \sin\theta`} />
      <p>Here τ is the restoring torque and θ is the angle between <strong>m</strong> and <strong>B</strong>.</p>
      <FormulaBlock latex={String.raw`U_m = -\vec{m}\cdot\vec{B} = -mB\cos\theta`} important />
      <p><strong>Field uniformity:</strong> whether a dipole also feels a net force depends on whether the field is uniform.</p>
      <Comparison
        columns={[
          {
            title: "Uniform magnetic field",
            children: (
              <ul>
                <li>Net force <strong>F_net = 0</strong></li>
                <li>Only a torque acts, tending to align m with B</li>
              </ul>
            ),
          },
          {
            title: "Non-uniform magnetic field",
            children: (
              <ul>
                <li>Net force <strong>F_net ≠ 0</strong></li>
                <li>Both a force and a torque act on the dipole</li>
              </ul>
            ),
          },
        ]}
      />
      <TableCard
        caption="Potential energy of a magnetic dipole: U = −m·B = −mB cos θ"
        headers={["Angle θ", "U = −mB cos θ", "Result"]}
        rows={[
          { cells: ["0°", "−mB", "Minimum · Stable equilibrium"] },
          { cells: ["90°", "0", "Zero of energy (midway)"] },
          { cells: ["180°", "+mB", "Maximum · Unstable equilibrium"] },
        ]}
      />
      <Callout type="note">
        <strong>Key Note:</strong> A magnetic needle in a <Highlight color="blue">non-uniform magnetic field</Highlight> experiences{" "}
        <strong>both a torque and a force</strong>; in a <Highlight color="green">uniform magnetic field</Highlight> it experiences{" "}
        <strong>a torque while the net force is zero</strong>.
      </Callout>

      <h3 id="h-5-2-4">5.2.4 The electrostatic analog</h3>
      <p>
        Comparing the magnetic dipole equations with the electric dipole equations reveals a striking
        <Highlight color="yellow">one-to-one analogy</Highlight> — the magnetic field drops out of the electric field by simple replacements:
      </p>
      <FormulaBlock latex={String.raw`\vec{E} \to \vec{B}, \qquad \vec{p} \to \vec{m}, \qquad \frac{1}{4\pi\varepsilon_0} \to \frac{\mu_0}{4\pi}`} />
      <p>In particular for r &gt;&gt; l (l = size of the magnet):</p>
      <FormulaCard>
        <p className="text-[0.85rem] text-muted-foreground mb-2">Bar magnet fields (large distance, r &gt;&gt; l)</p>
        <FormulaBlock latex={String.raw`\text{Equatorial } B_E = -\frac{\mu_0}{4\pi} \frac{m}{r^3} \quad;\quad \text{Axial } B_A = \frac{\mu_0}{4\pi} \frac{2m}{r^3}`} />
        <p className="text-[0.85rem] text-muted-foreground">The axial field is <strong>twice</strong> the equatorial field in magnitude and opposite in sign; both fall off as 1/r³.</p>
      </FormulaCard>
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
      <Callout type="note">
        <strong>Connecting back to Chapter 1.</strong> This analogy is built from the electric dipole results you met in{" "}
        <Highlight color="yellow"><Link className="underline underline-offset-2" href="/chapter/electric-charges-and-fields#h-1-10">Section 1.10 (Electric Dipole)</Link></Highlight> and{" "}
        <Highlight color="yellow"><Link className="underline underline-offset-2" href="/chapter/electric-charges-and-fields#h-1-11">Section 1.11 (Dipole in a Uniform External Field)</Link></Highlight>.
      </Callout>
      <KeyPoint title="Key Exam Point">
        Both dipole fields fall off as <strong>1/r³</strong> — not 1/r² like a single charge/pole. That is why
        two dipoles (electric or magnetic) interact much more weakly at large separation than two isolated charges would.
        The axial field is <Highlight color="yellow">twice the equatorial field</Highlight> for both dipoles.
      </KeyPoint>

      <h2 id="h-5-3">5.3 Magnetism and Gauss&apos;s Law</h2>
      <p>
        Magnetic fields are <Highlight color="blue">continuous and form closed loops</Highlight>, so for any closed surface
        the number of field lines entering equals the number leaving — the net flux is always zero.
      </p>
      <FormulaBlock latex={String.raw`\phi = \oint \vec{B}\cdot d\vec{s} = 0`} important />
      <Callout type="important">
        <Highlight color="yellow">Gauss&apos;s law for magnetism:</Highlight> it states the surface integral of magnetic flux through any closed surface is Zero.
        This reflects the fact that <strong>isolated magnetic poles (monopoles) do not exist</strong> — there are no sources or sinks of B.
      </Callout>
      <Comparison
        columns={[
          {
            title: "Magnetism",
            children: (
              <ul>
                <li>φ = ∮ B·ds = 0</li>
                <li>Net flux through a closed surface is always zero</li>
                <li>No sources or sinks of B</li>
                <li>Monopoles do not exist</li>
              </ul>
            ),
          },
          {
            title: "Electrostatics",
            children: (
              <ul>
                <li>φ = ∮ E·ds = q/ε₀</li>
                <li>Flux equals enclosed charge / ε₀</li>
                <li>Field lines begin on + and end on −</li>
                <li>Isolated charges exist</li>
              </ul>
            ),
          },
        ]}
      />
      <KeyPoint title="Key Insights &amp; Observations">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><Highlight color="yellow">Isolated magnetic poles do not exist</Highlight> — magnetic monopoles are nonexistent.</li>
          <li><Highlight color="blue">Magnetic field lines always form closed loops</Highlight>, unlike electric field lines, which can originate from or terminate on isolated electric charges.</li>
        </ul>
      </KeyPoint>
      <Expandable title="What if monopoles existed? (Example 5.4)">
        <p>Then Gauss&apos;s law of magnetism would read ∮ B·dS = µ₀q_m, where q_m is the enclosed monopole (magnetic charge) — exactly analogous to electrostatics.</p>
      </Expandable>
      <Callout type="note">
        <strong>Connecting back to Chapter 1.</strong> The electrostatics statement was <Highlight color="yellow"><Link className="underline underline-offset-2" href="/chapter/electric-charges-and-fields#h-1-13">Gauss&apos;s law (Section 1.13)</Link></Highlight>,
        <Formula>{String.raw`\phi = \oint \vec{E}\cdot d\vec{s} = q/\varepsilon_0`}</Formula>,
        where the flux is set by the enclosed charge. The magnetic statement sets the flux to <em>zero</em> for every closed surface —
        the single conceptual contrast that organises the whole chapter.
      </Callout>

      <h2 id="h-5-4">5.4 Magnetisation and Magnetic Intensity</h2>
      <Callout type="note">
        <strong>Magnetisation:</strong> the process of bringing up magnetism in a material is known as
        magnetisation. It is described by three interlinked quantities — the{" "}
        <strong>intensity of magnetisation M</strong>, the <strong>magnetising field intensity H</strong>, and the{" "}
        <strong>magnetic susceptibility χ</strong>.
      </Callout>
      <p>
        A circulating electron in an atom has a magnetic moment; in bulk material these moments add up vectorially.
        We define <Highlight color="yellow">magnetisation M</Highlight> as the net magnetic moment per unit volume:
      </p>
      <FormulaBlock latex={String.raw`\vec{M} = \frac{m_{\text{net}}}{V}`} important />
      <p><strong>M</strong> is a vector with dimensions <strong>L⁻¹A</strong>, measured in <strong>A m⁻¹</strong>.</p>
      <Callout type="note">
        <p>For a long solenoid of n turns per unit length carrying current I, the interior field is <Formula>{String.raw`B_0 = \mu_0 n I`}</Formula>.
        With a material core this becomes part of the field from external factors.</p>
      </Callout>
      <FormulaCard>
        <p className="text-[0.85rem] text-muted-foreground mb-2">Building up the field inside a material</p>
        <FormulaBlock latex={String.raw`B_0 = \mu_0 n I \qquad\qquad B = B_0 + B_m \qquad\qquad B_m = \mu_0 M`} />
        <p className="text-[0.85rem] text-muted-foreground">The material core adds a field B_m proportional to its magnetisation M.</p>
      </FormulaCard>
      <p>
        It is convenient to introduce the <Highlight color="yellow">magnetic intensity H</Highlight>,
        the part of the field due to external factors (like the solenoid current):
      </p>
      <FormulaBlock latex={String.raw`H = \frac{B}{\mu_0} - M`} important />
      <p>
        For a long solenoid the magnetising field intensity is set entirely by the current — with{" "}
        <strong>n = N/l</strong> turns per unit length, the magnetising force is:
      </p>
      <FormulaBlock latex={String.raw`H = nI = \frac{N}{l}\, I`} />
      <p>H has the same dimensions as M (units A m⁻¹). Rearranging gives the total field:</p>
      <FormulaBlock latex={String.raw`B = \mu_0 (H + M)`} important />
      <p>
        The material&apos;s response to the external field is captured by the
        <Highlight color="yellow">magnetic susceptibility χ</Highlight>:
      </p>
      <FormulaBlock latex={String.raw`M = \chi H`} important />
      <p>Equivalently, χ is the ratio of the intensity of magnetisation to the magnetising field:
        <Formula>{String.raw`\chi = \frac{M}{H}`}</Formula>.</p>
      <Callout type="important">
        χ is <Highlight color="blue">small and positive</Highlight> for <strong>paramagnetic</strong> materials and
        <Highlight color="pink">small and negative</Highlight> for <strong>diamagnetic</strong> materials (in which case M and H point opposite).
      </Callout>
      <p>Combining M = χH with B = µ₀(H + M):</p>
      <FormulaBlock latex={String.raw`B = \mu_0 (1 + \chi) H`} important />
      <FormulaBlock latex={String.raw`B = \mu_0 \mu_r H = \mu H`} important />
      <p>
        Here <strong>µ_r = 1 + χ</strong> is the <Highlight color="yellow">relative magnetic permeability</Highlight> — the ratio of the
        permeability of the medium to that of free space, <strong>µ_r = µ/µ₀</strong>, and the analog of the{" "}
        <Link className="underline underline-offset-2" href="/chapter/electric-charges-and-fields#h-1-5-2">dielectric constant in electrostatics</Link>.
        The magnetic permeability µ has the same dimensions as µ₀:
      </p>
      <FormulaBlock latex={String.raw`\mu = \mu_0 \mu_r = \mu_0 (1 + \chi)`} important />
      <KeyPoint title="Memory Anchor">
        <Highlight color="yellow">χ, µ_r and µ are interrelated — only one is independent.</Highlight>
        Given any one, the other two follow from µ_r = 1 + χ and µ = µ₀µ_r.
      </KeyPoint>
      <Comparison
        columns={[
          {
            title: "Electrostatics (Ch. 1) — dielectric",
            children: (
              <ul>
                <li><strong>E = E₀/ε_r</strong> — field is <em>reduced</em></li>
                <li>ε_r &gt; 1 for dielectrics</li>
                <li>Permittivity ε = ε₀ε_r</li>
                <li>Polarisation P ∝ E reduces field inside</li>
              </ul>
            ),
          },
          {
            title: "Magnetism (Ch. 5) — magnetic material",
            children: (
              <ul>
                <li><strong>B = µ_r B₀</strong> — field enhanced or reduced</li>
                <li>µ_r &gt; 1 (para/ferro) or µ_r &lt; 1 (dia)</li>
                <li>Permeability µ = µ₀µ_r</li>
                <li>Magnetisation M can add to or oppose B₀</li>
              </ul>
            ),
          },
        ]}
      />
      <Callout type="important">
        <Highlight color="pink">Key contrast:</Highlight> a dielectric always <em>weakens</em> an electric field (E = E₀/ε_r, ε_r &gt; 1),
        but a magnetic material can <Highlight color="yellow">strengthen</Highlight> it (para/ferro, µ_r &gt; 1) or{" "}
        <Highlight color="yellow">weaken</Highlight> it (dia, µ_r &lt; 1), depending on the sign of χ. This is why permeability,
        unlike permittivity, can be either larger or smaller than the vacuum value.
      </Callout>

      <h2 id="h-5-5">5.5 Magnetic Properties of Materials</h2>
      <p>
        Based on their magnetic properties, materials are classified into three main categories:
      </p>
      <ul>
        <li><Highlight color="blue">Diamagnetic</Highlight></li>
        <li><Highlight color="green">Paramagnetic</Highlight></li>
        <li><Highlight color="pink">Ferromagnetic</Highlight></li>
      </ul>

      <h3 id="h-5-5-1">5.1 Diamagnetic Materials</h3>
      <p>
        Magnetic susceptibility <Highlight color="blue">χ is negative, but small</Highlight>.
      </p>
      <ul>
        <li><strong>Behavior in an external field:</strong> Diamagnetic substances tend to move from <strong>stronger to weaker</strong> parts of an external field and are <strong>repelled</strong> when placed in an external magnetic field.</li>
        <li><strong>Atomic / molecular structure:</strong> Individual constituents do not have a net magnetic moment of their own.</li>
        <li><strong>Examples:</strong> Bismuth, copper, lead, silicon, nitrogen.</li>
      </ul>
      <Callout type="important">
        <strong>Exam Question (Model 2022):</strong> The susceptibility of a diamagnetic material is <Highlight color="yellow">negative</Highlight>.
      </Callout>

      <h3 id="h-5-5-2">5.2 Paramagnetic Materials</h3>
      <p>
        Magnetic susceptibility <Highlight color="green">χ is positive, but small</Highlight>.
      </p>
      <ul>
        <li><strong>Behavior in an external field:</strong> Paramagnetic substances tend to move from <strong>weaker to stronger</strong> parts of an external field and are <strong>weakly attracted</strong> when placed in an external magnetic field.</li>
        <li><strong>Atomic / molecular structure:</strong> Individual constituents possess a net magnetic moment of their own, but they are randomly oriented in the absence of an external field.</li>
        <li><strong>Examples:</strong> Aluminium, calcium, oxygen, <Formula>{String.raw`\mathrm{CuCl}_2`}</Formula>.</li>
      </ul>

      <h3 id="h-5-5-3">5.3 Ferromagnetic Materials</h3>
      <p>
        Magnetic susceptibility <Highlight color="pink">χ is positive and large</Highlight>.
      </p>
      <ul>
        <li><strong>Behavior in an external field:</strong> Ferromagnetic substances tend to move <strong>strongly from weaker to stronger</strong> parts of an external field and possess a <strong>strong force of attraction</strong> when placed in an external magnetic field.</li>
        <li><strong>Atomic / molecular structure:</strong> They possess a permanent magnetic dipole moment even in the absence of an external magnetic field (due to domain structures).</li>
        <li><strong>Examples:</strong> Iron, cobalt, nickel.</li>
      </ul>

      <h2 id="h-5-exam-materials">Exam Questions &amp; Applications (March 2021)</h2>
      <p>
        <strong>Question Analysis:</strong> Given the behavior of magnetic field lines near two magnetic substances <strong>P</strong> and <strong>Q</strong>:
      </p>
      <ul>
        <li><strong>(a)</strong> Identify the paramagnetic substance from the field line configuration.</li>
        <li><strong>(b)</strong> The magnetic susceptibility of substance <strong>P</strong> is <Highlight color="green">positive</Highlight>.</li>
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
                <li>Repelled by a magnet</li>
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

      <h2 id="h-5-connections">Electrostatics ↔ Magnetism: Concept Connections</h2>
      <p>
        Magnetism and electrostatics are deeply connected. Nearly every idea in this chapter has a{" "}
        <Highlight color="yellow">direct counterpart in Chapter 1</Highlight>. Learning the pairings together makes both chapters easier.
      </p>
      <div className="flex flex-wrap gap-2 my-4">
        {[
          ["In this chapter — §5.2.4 Electrostatic analog", "/chapter/magnetism-and-matter#h-5-2-4"],
          ["In this chapter — §5.3 Gauss's law", "/chapter/magnetism-and-matter#h-5-3"],
          ["In this chapter — §5.4 Permeability analog", "/chapter/magnetism-and-matter#h-5-4"],
          ["Chapter 1 — §1.13 Gauss's law (electrostatics)", "/chapter/electric-charges-and-fields#h-1-13"],
          ["Chapter 1 — §1.10 Electric dipole", "/chapter/electric-charges-and-fields#h-1-10"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="rounded-lg border border-border/60 bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground/85 transition-colors hover:bg-muted hover:border-foreground/30"
          >
            {label}
          </Link>
        ))}
      </div>
      <KeyPoint title="Revision Tool">
        Use the replacements <strong>p → m, E → B, 1/ε₀ → µ₀, q → (none)</strong> to convert any electrostatics result into its
        magnetic twin. The one rule that has <em>no</em> electric counterpart is{" "}
        <Highlight color="yellow">&ldquo;monopoles do not exist&rdquo;</Highlight> — the root of every difference.
      </KeyPoint>

      <h2 id="h-5-examples">Worked Examples</h2>

      <Expandable title="Example 5.1 — Cutting a Bar Magnet and Related Ideas">
        <p><strong>(a)</strong> What happens if a bar magnet is cut (i) transverse to its length, (ii) along its length?</p>
        <p><Highlight color="yellow">In either case you get two magnets, each with a north and a south pole.</Highlight></p>
        <p><strong>(b)</strong> A magnetised needle in a uniform field experiences torque but no net force. An iron nail near a bar magnet also experiences a force of attraction. Why?</p>
        <p>In a <strong>uniform</strong> field there is no net force. The nail sits in a <strong>non-uniform</strong> field, so it acquires an induced moment and feels both force and torque — the force is attractive because the induced south pole is closer to the magnet&apos;s north pole.</p>
        <p><strong>(c)</strong> Must every configuration have a north and south pole?</p>
        <p><Highlight color="blue">Not necessarily.</Highlight> Only if the source has net non-zero moment. A toroid or straight infinite conductor does not.</p>
        <p><strong>(d)</strong> Identify the single magnet among two bars A and B.</p>
        <p>A repulsive force in some situation shows both are magnetised. If always attractive, one is unmagnetised. Lower end A onto an end of B, then onto the middle of B: no force at B&apos;s middle means <Highlight color="yellow">B is the magnet</Highlight>.</p>
      </Expandable>

      <Expandable title="Example 5.2 — Stable and Unstable Equilibrium of Two Needles">
        <p>Needle Q is placed in six positions relative to fixed needle P. Potential energy arises from Q in P&apos;s field.</p>
        <FormulaBlock latex={String.raw`B_P = -\frac{\mu_0}{4\pi} \frac{m_P}{r^3} \quad \text{(normal bisector)} \qquad B_P = \frac{\mu_0}{4\pi} \frac{2m_P}{r^3} \quad \text{(axis)}`} />
        <p>Equilibrium is <Highlight color="green">stable when m_Q is parallel to B_P</Highlight> and <Highlight color="pink">unstable when anti-parallel</Highlight>.</p>
        <ul>
          <li>(a) Not in equilibrium: <strong>PQ1, PQ2</strong></li>
          <li>(b) (i) Stable: <strong>PQ3, PQ6</strong>; (ii) Unstable: <strong>PQ5, PQ4</strong></li>
          <li>(c) Lowest potential energy: <strong>PQ6</strong></li>
        </ul>
      </Expandable>

      <ProblemSolution problemNumber="5.3">
        <ProblemSolution.Problem>
          <p>Many diagrams of magnetic field lines are drawn wrongly. Point out what is wrong with each, and note any that correctly describe electrostatic field lines.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a) Wrong.</strong> Field lines can never emanate from a point; net flux over a closed surface must be zero. These are actually electric field lines of a long charged wire.</p>
          <p><strong>(b) Wrong.</strong> Field lines can never cross, and static magnetic loops cannot enclose empty space — a closed loop must enclose a current.</p>
          <p><strong>(c) Right.</strong> Magnetic lines are confined within a toroid, each enclosing a current.</p>
          <p><strong>(d) Wrong.</strong> Solenoid field lines cannot be straight and confined outside — violates Ampere&apos;s law.</p>
          <p><strong>(e) Right.</strong> Field lines outside and inside a bar magnet; net flux around each pole is zero.</p>
          <p><strong>(f) Wrong.</strong> All lines emanate from a plate (non-zero flux) — actually electrostatic field lines between charged plates.</p>
          <p><strong>(g) Wrong.</strong> Field lines between poles cannot be precisely straight at the ends (fringing is inevitable).</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="5.4">
        <ProblemSolution.Problem>
          <p>(a) Do magnetic field lines also represent lines of force on a moving charge?</p>
          <p>(b) How would Gauss&apos;s law of magnetism change if monopoles existed?</p>
          <p>(c) Does a bar magnet exert a torque on itself? Does one element of a wire exert a force on another element of the same wire?</p>
          <p>(d) Can a system have magnetic moment yet zero net charge?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a) No.</strong> The magnetic force is always normal to B (F = qv × B), so calling field lines &ldquo;lines of force&rdquo; is misleading.</p>
          <p><strong>(b)</strong> The closed-surface flux would equal µ₀q_m, where q_m is the enclosed monopole charge.</p>
          <p><strong>(c) No</strong> to the self-torque; but an element can feel a force from another element of the same wire (zero for a straight wire).</p>
          <p><strong>(d) Yes.</strong> Mean of magnetic moments from current loops can be non-zero with zero net charge — as in paramagnetic atoms.</p>
        </ProblemSolution.Solution>
      </ProblemSolution>

      <ProblemSolution problemNumber="5.5">
        <ProblemSolution.Problem>
          <p>A solenoid has a core of relative permeability 400, current 2 A, and 1000 turns per metre. Calculate (a) H, (b) M, (c) B, and (d) the magnetising current I_m.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> H is independent of the core material:</p>
          <FormulaBlock latex={String.raw`H = nI = 1000 \times 2.0 = 2 \times 10^3 \ \text{A/m}`} important />
          <p><strong>(b)</strong> The magnetic field B:</p>
          <FormulaBlock latex={String.raw`B = \mu_r \mu_0 H = 400 \times 4\pi \times 10^{-7} \times 2 \times 10^3 = 1.0 \ \text{T}`} important />
          <p><strong>(c)</strong> Magnetisation:</p>
          <FormulaBlock latex={String.raw`M = \frac{B - \mu_0 H}{\mu_0} = (\mu_r - 1)H = 399 \times H \cong 8 \times 10^5 \ \text{A/m}`} important />
          <p><strong>(d)</strong> Magnetising current from B = µ_r n (I + I_M), with I = 2 A, B = 1 T:</p>
          <FormulaBlock latex={String.raw`I_M = 794 \ \text{A}`} important />
        </ProblemSolution.Solution>
      </ProblemSolution>
      <MetricCard label="Core effect" value="794" unit="A magnetising current" trend="up" description="The µr = 400 core amplifies the effective field: without it, 794 A would be needed instead of 2 A." />
    </>
  );
}
