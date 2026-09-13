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
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";

export default function ElectromagneticInductionChapter() {
  return (
    <>
      <h2 id="h-6-1">6.1 Introduction</h2>
      <Callout type="note">
        For a long time, electricity and magnetism were treated as <strong>separate, unrelated phenomena</strong>.
        The experiments of <Highlight color="yellow">Oersted, ampere and others</Highlight> (early 19th century) first proved
        they are inter-related — moving electric charges produce magnetic fields, e.g. a current deflects a compass needle.
      </Callout>
      <p>This naturally raises the questions:</p>
      <ul>
        <li>Is the <Highlight color="blue">converse effect</Highlight> possible?</li>
        <li>Can moving magnets produce electric currents?</li>
        <li>Does nature permit such a relation between electricity and magnetism?</li>
      </ul>
      <p>The answer is a resounding <Highlight color="green">yes</Highlight>!</p>
      <p>
        The experiments of <strong>Michael Faraday</strong> (England) and <strong>Joseph Henry</strong> (USA), conducted around{" "}
        <Highlight color="yellow">1830</Highlight>, demonstrated conclusively that{" "}
        <strong>electric currents were induced in closed coils when subjected to changing magnetic fields</strong> — the very
        inverse of Oersted&apos;s discovery.
      </p>
      <KeyPoint title="Definition">
        The phenomenon of producing an induced emf (or current) due to a{" "}
        <Highlight color="yellow">changing magnetic flux</Highlight> is known as{" "}
        <strong>electromagnetic induction</strong>.
      </KeyPoint>

      <h2 id="h-6-2">6.2 The Experiments of Faraday and Henry</h2>
      <p>The discovery and understanding of electromagnetic induction are based on a long series of experiments carried out by Faraday and Henry.</p>

      <h3 id="h-6-2-1">Experiment 6.1</h3>
      <p>A coil <strong>C₁</strong> is connected to a galvanometer <strong>G</strong>.</p>
      <ul>
        <li>When the <Highlight color="pink">north-pole</Highlight> of a bar magnet is <strong>pushed towards</strong> the coil, the pointer deflects — a current flows in the coil. The deflection lasts <strong>only as long as the magnet is in motion</strong>.</li>
        <li>The galvanometer shows <strong>no deflection</strong> when the magnet is held <em>stationary</em>.</li>
        <li>When the magnet is <strong>pulled away</strong> from the coil, the galvanometer deflects in the <Highlight color="yellow">opposite direction</Highlight> — the current reverses.</li>
        <li>Moving the <Highlight color="blue">south-pole</Highlight> towards or away gives deflections <em>opposite</em> to those with the north-pole.</li>
        <li>The deflection is <Highlight color="green">larger when the magnet moves faster</Highlight>.</li>
        <li>When the magnet is held fixed and the <strong>coil C₁ is moved</strong> instead, the same effects are observed.</li>
      </ul>
      <TableCard
        title="Experiment 6.1 — Coil &amp; magnet observations"
        caption="Relative motion between the magnet and the coil is enough — the deflection appears only while the magnet is in motion."
        headers={["Situation", "Galvanometer"]}
        rows={[
          { cells: ["N-pole moved towards the coil", "Deflection (✓)"] },
          { cells: ["Magnet held at rest", "No deflection (✗)"] },
          { cells: ["N-pole moved away from the coil", "Deflection in the opposite direction (✓)"] },
          { cells: ["Magnet fixed, coil C₁ moved instead", "Deflection (✓)"] },
        ]}
      />
      <KeyPoint title="Key Insight">
        It is the <Highlight color="yellow">relative motion</Highlight> between the magnet and the coil that is responsible for the
        generation (induction) of the electric current in the coil.
      </KeyPoint>

      <h3 id="h-6-2-2">Experiment 6.2</h3>
      <p>The bar magnet is replaced by a second coil <strong>C₂</strong> connected to a battery — a steady current in C₂ produces a steady magnetic field.</p>
      <ul>
        <li>As coil C₂ is moved <strong>towards</strong> C₁, the galvanometer shows a deflection — current is induced in C₁.</li>
        <li>Moving C₂ <strong>away</strong> gives a deflection in the <Highlight color="yellow">opposite direction</Highlight>.</li>
        <li>The deflection lasts <strong>only while C₂ is in motion</strong>.</li>
        <li>When C₂ is fixed and C₁ is moved, the same effects are observed.</li>
      </ul>
      <p>Again, it is the <Highlight color="yellow">relative motion</Highlight> between the coils that induces the electric current.</p>

      <h3 id="h-6-2-3">Experiment 6.3</h3>
      <Callout type="important">
        Through a third experiment, Faraday showed that this <Highlight color="yellow">relative motion is not an absolute requirement.</Highlight>{" "}
        Both coils C₁ and C₂ are held <strong>stationary</strong> — C₁ connected to the galvanometer G, C₂ connected to a battery through a{" "}
        <strong>tapping key K</strong>.
      </Callout>
      <ul>
        <li>There is a <Highlight color="blue">momentary deflection when the tapping key K is pressed</Highlight>. The pointer returns to zero immediately.</li>
        <li>If the key is held pressed <strong>continuously</strong>, there is <em>no deflection</em>.</li>
        <li>On releasing the key, a momentary deflection appears again, but in the <Highlight color="yellow">opposite direction</Highlight>.</li>
        <li>The deflection <Highlight color="green">increases dramatically</Highlight> when an <strong>iron rod is inserted into the coils</strong> along their axis.</li>
      </ul>
      <ProcessCard
        title="Experiment 6.3 — press, hold, release"
        steps={[
          { label: "Press the key", description: "Current in C₂ (and its magnetic field) rises from zero to a maximum in a short time. Flux through C₁ increases → induced emf → momentary deflection." },
          { label: "Hold the key pressed", description: "Current in C₂ (and the field) is constant → no change in flux through C₁ → no induced current." },
          { label: "Release the key", description: "Current (and field) falls from maximum to zero → flux through C₁ decreases → induced emf in the opposite direction." },
        ]}
      />
      <TableCard
        title="Experiment 6.3 — Coil C₂ &amp; tapping key"
        caption="Observations when C₁ is connected to the galvanometer and C₂ to a battery through a tapping key K."
        headers={["Key state", "Galvanometer"]}
        rows={[
          { cells: ["Key at OFF (no current in C₂)", "No deflection (✗)"] },
          { cells: ["Key turned ON", "Momentary deflection (✓)"] },
          { cells: ["Key held ON (steady current)", "No deflection (✗)"] },
          { cells: ["Key turned OFF", "Momentary deflection in the opposite direction (✓)"] },
        ]}
      />

      <h2 id="h-6-3">6.3 Magnetic Flux</h2>
      <p>
        Faraday&apos;s great insight lay in discovering a <strong>simple mathematical relation</strong> to explain his series of experiments.
        Before stating his laws, we must get familiar with the notion of <Highlight color="yellow">magnetic flux, Φ_B</Highlight> — defined the
        same way as electric flux in Chapter 1.
      </p>
      <KeyPoint title="Magnetic flux">
        The <Highlight color="yellow">magnetic flux Φ_B</Highlight> through a surface is the{" "}
        <strong>number of magnetic field lines passing normally through the surface</strong>.
      </KeyPoint>
      <p>For a plane surface of area <strong>A</strong> placed in a uniform magnetic field <strong>B</strong>:</p>
      <FormulaBlock latex={String.raw`\Phi_B = \mathbf{B} \cdot \mathbf{A} = BA\cos\theta`} important />
      <ul>
        <li>θ is the angle between <strong>B</strong> and <strong>A</strong>.</li>
        <li>The area is treated as a <strong>vector</strong>, with direction normal to the surface (as discussed in Chapter 1).</li>
        <li>Eq. (6.1) extends to curved surfaces and nonuniform fields.</li>
      </ul>
      <p>If the field varies over the surface, we sum over area elements, taking the <strong>normal component of B</strong> at each element:</p>
      <FormulaBlock latex={String.raw`\Phi_B = \int B\,\mathrm{d}A\,\cos\theta`} important />
      <p>Equivalently, in <Highlight color="blue">vector form</Highlight>:</p>
      <FormulaBlock latex={String.raw`\Phi_B = \int \mathbf{B} \cdot \mathrm{d}\mathbf{A}`} important />
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          title="SI Unit"
          definition="The SI unit of magnetic flux is the tesla metre squared (T m²) — also called the weber (Wb)."
          icon="📏"
        />
        <FactCard
          title="Nature"
          definition="Magnetic flux is a scalar quantity — the dot product (or normal component) of the vectors B and A."
          icon="🔢"
        />
      </div>

      <h2 id="h-6-4">6.4 Faraday&apos;s Law of Induction</h2>
      <p>From the experimental observations, Faraday arrived at a conclusion:</p>
      <Callout type="important">
        <Highlight color="yellow">An emf is induced in a coil when magnetic flux through the coil changes with time.</Highlight>{" "}
        The motion of the magnet (Exp. 6.1), the moving current-carrying coil (Exp. 6.2), and the changing current (Exp. 6.3) all{" "}
        <strong>change the magnetic flux</strong> through the coil — and it is this change that induces the emf. The induced emf lasts{" "}
        <Highlight color="yellow">only as long as the flux is changing</Highlight>.
      </Callout>
      <p>Summarising the common point in all observations:</p>
      <KeyPoint title="Faraday&apos;s law of electromagnetic induction">
        The magnitude of the induced emf in a circuit is <Highlight color="yellow">equal to the time rate of change of magnetic flux</Highlight>{" "}
        through the circuit.
      </KeyPoint>
      <FormulaBlock latex={String.raw`\varepsilon = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}`} important />
      <ul>
        <li>The <Highlight color="blue">negative sign</Highlight> indicates the direction of ε (and hence the direction of current in a closed loop) — discussed in Section 6.5.</li>
      </ul>
      <Callout type="note">
        Faraday&apos;s law could not, however, <Highlight color="yellow">explain the polarity of the induced emf</Highlight> — that
        question was resolved by <strong>Lenz&apos;s law</strong>, which we take up in Section 6.5.
      </Callout>
      <p>For a <Highlight color="yellow">closely wound coil of N turns</Highlight>, the flux change associated with each turn is the same, so the total induced emf is:</p>
      <FormulaBlock latex={String.raw`\varepsilon = -N\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}`} important />
      <p>The induced emf can be <Highlight color="green">increased by increasing the number of turns N</Highlight> of a closed coil.</p>

      <Expandable title="Example 6.1 — Large deflection and demonstrating induced current">
        <ProblemSolution.Problem>
          <p>Consider Experiment 6.2. (a) What would you do to obtain a large deflection of the galvanometer? (b) How would you demonstrate the presence of an induced current in the absence of a galvanometer?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a)</strong> One or more of the following:</p>
          <ul>
            <li>Use a rod made of <Highlight color="yellow">soft iron</Highlight> inside the coil C₂,</li>
            <li>Connect the coil to a <strong>powerful battery</strong>,</li>
            <li>Move the arrangement <strong>rapidly</strong> towards the test coil C₁.</li>
          </ul>
          <p><strong>(b)</strong> Replace the galvanometer by a <Highlight color="blue">small bulb</Highlight> (of the kind used in a small torch light). The relative motion between the two coils will cause the bulb to glow.</p>
          <p className="mt-3 text-sm text-muted-foreground">In experimental physics one must learn to innovate. Michael Faraday — ranked as one of the best experimentalists ever — was legendary for his innovative skills.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 6.2 — Square loop in a decreasing magnetic field">
        <ProblemSolution.Problem>
          <p>A square loop of side 10 cm and resistance 0.5 Ω is placed vertically in the east-west plane. A uniform magnetic field of 0.10 T is set up across the plane in the north-east direction. The magnetic field is decreased to zero in 0.70 s at a steady rate. Determine the magnitudes of induced emf and current during this interval.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The angle θ made by the area vector of the coil with the magnetic field is <strong>45°</strong>. Initial flux:</p>
          <FormulaBlock latex={String.raw`\Phi = BA\cos\theta = 0.1 \times 10^{-2} \times \frac{1}{\sqrt{2}} = 0.707\ \text{mWb}`} />
          <p>Final flux: Φ = 0. The change is brought about in 0.70 s. From Faraday&apos;s law:</p>
          <FormulaBlock latex={String.raw`|\varepsilon| = \frac{|\Delta\Phi|}{|\Delta t|} = \frac{0.707 \times 10^{-3}}{0.7} = 1.0\ \text{mV}`} />
          <FormulaBlock latex={String.raw`I = \frac{\varepsilon}{R} = \frac{10^{-3}}{0.5} = 2\ \text{mA}`} important />
          <p className="text-sm text-muted-foreground">Note: the earth&apos;s magnetic field also produces flux through the loop, but it is steady (does not change in the time span of the experiment) and hence induces no emf.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 6.3 — Circular coil rotated through 180°">
        <ProblemSolution.Problem>
          <p>A circular coil of radius 10 cm, 500 turns and resistance 2 Ω is placed with its plane perpendicular to the horizontal component of the earth&apos;s magnetic field. It is rotated about its vertical diameter through 180° in 0.25 s. Estimate the magnitudes of the emf and current induced. Horizontal component of the earth&apos;s magnetic field = 3.0 × 10⁻⁵ T.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Initial flux (θ = 0°):</p>
          <FormulaBlock latex={String.raw`\Phi_B(\text{initial}) = BA\cos 0° = 3.0 \times 10^{-5} \times \pi \times 10^{-2} = 3\pi \times 10^{-7}\ \text{Wb}`} />
          <p>Final flux after rotation (θ = 180°):</p>
          <FormulaBlock latex={String.raw`\Phi_B(\text{final}) = 3.0 \times 10^{-5} \times \pi \times 10^{-2} \times \cos 180° = -3\pi \times 10^{-7}\ \text{Wb}`} />
          <p>Total change in flux = 6π × 10⁻⁷ Wb. The induced emf:</p>
          <FormulaBlock latex={String.raw`\varepsilon = N\frac{|\Delta\Phi|}{\Delta t} = 500 \times \frac{6\pi \times 10^{-7}}{0.25} = 3.8 \times 10^{-3}\ \text{V}`} />
          <FormulaBlock latex={String.raw`I = \frac{\varepsilon}{R} = \frac{3.8 \times 10^{-3}}{2} = 1.9 \times 10^{-3}\ \text{A}`} important />
          <p className="text-sm text-muted-foreground">The values of ε and I are <strong>estimated</strong> — instantaneous values differ and depend on the speed of rotation at each instant.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-6-5">6.5 Lenz&apos;s Law and Conservation of Energy</h2>
      <Callout type="important">
        <Highlight color="yellow">Lenz&apos;s law:</Highlight> the polarity of the induced emf is such that it tends to produce a current which{" "}
        <strong>opposes the change in magnetic flux</strong> that produced it.
      </Callout>
      <ul>
        <li>The <Highlight color="blue">negative sign</Highlight> in Eq. (6.3) represents this effect.</li>
      </ul>
      <p>We can understand Lenz&apos;s law by examining Experiment 6.1:</p>
      <ul>
        <li><strong>North-pole pushed towards the coil:</strong> flux through the coil <Highlight color="yellow">increases</Highlight>. The induced current <strong>opposes the increase</strong> — it flows <strong>counter-clockwise</strong> as seen from the magnet&apos;s side, giving a <Highlight color="pink">north polarity facing the approaching north pole</Highlight>.</li>
        <li><strong>North-pole withdrawn from the coil:</strong> flux <Highlight color="yellow">decreases</Highlight>. The induced current flows <strong>clockwise</strong>, with its <Highlight color="blue">south pole facing the receding north pole</Highlight> of the bar magnet. This produces an <Highlight color="green">attractive force</Highlight> opposing the motion.</li>
      </ul>
      <Callout type="note">
        <strong>Open-circuit case:</strong> even if an open circuit replaces the closed loop, an{" "}
        <Highlight color="yellow">emf is induced across the open ends</Highlight>. The direction of the induced emf can be found using Lenz&apos;s law.
      </Callout>
      <Comparison
        columns={[
          {
            title: "Advancing magnet",
            children: (
              <ul>
                <li>Flux through the loop <strong>increases</strong></li>
                <li>Induced current sets up an <strong>opposing magnetic field</strong> (repulsion)</li>
                <li>The magnet is <strong>repelled</strong></li>
              </ul>
            ),
          },
          {
            title: "Receding magnet",
            children: (
              <ul>
                <li>Flux through the loop <strong>decreases</strong></li>
                <li>Induced current tries to <strong>maintain the flux</strong> (attraction)</li>
                <li>The magnet is <strong>attracted</strong></li>
              </ul>
            ),
          },
        ]}
      />
      <KeyPoint title="Lenz&apos;s law and energy">
        Lenz&apos;s law is a <Highlight color="yellow">direct consequence of the law of conservation of energy</Highlight>. The induced current is
        always so directed as to <strong>oppose the change in flux</strong>; the work done by the external agent appears as{" "}
        <Highlight color="green">Joule heating</Highlight> produced by the induced current.
      </KeyPoint>

      <Expandable title="Example 6.4 — Direction of induced current using Lenz&apos;s law">
        <ProblemSolution.Problem>
          <p>Planar loops of different shapes move out of (or into) a region of magnetic field directed normal to the plane of the loop, away from the reader. Determine the direction of induced current in each loop.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <ul>
            <li><strong>(i) Rectangular loop abcd moving into the field:</strong> flux <Highlight color="yellow">increases</Highlight> → induced current flows along the path <strong>bcdab</strong> to oppose the increase.</li>
            <li><strong>(ii) Triangular loop abc moving out:</strong> flux decreases → induced current flows along <strong>bacb</strong>.</li>
            <li><strong>(iii) Irregular loop abcd moving out:</strong> flux decreases → induced current flows along <strong>cdabc</strong>.</li>
          </ul>
          <p className="mt-3"><strong>Note:</strong> There is <Highlight color="yellow">no induced current</Highlight> as long as the loops are <em>completely</em> inside or outside the field region.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 6.5 — Conceptual questions on induced current">
        <ProblemSolution.Problem>
          <p>(a) A closed loop is held stationary in a magnetic field between two fixed permanent magnets. Can very strong magnets generate current in the loop?</p>
          <p>(b) A closed loop moves normal to a constant electric field between the plates of a large capacitor. Is a current induced (i) wholly inside, (ii) partially outside? The electric field is normal to the loop.</p>
          <p>(c) A rectangular loop and a circular loop move out of a uniform field region with constant velocity v. In which is the induced emf constant?</p>
          <p>(d) Predict the polarity of the capacitor in the described situation.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a) No.</strong> However strong the magnet, current can be induced only by <Highlight color="yellow">changing the magnetic flux</Highlight> through the loop — a stationary loop in a steady field experiences no flux change.</p>
          <p><strong>(b) No current is induced in either case.</strong> Current cannot be induced by changing the <em>electric</em> flux.</p>
          <p><strong>(c) Only the rectangular loop.</strong> Its rate of change of area during exit is constant. For the circular loop, the rate of change of area is <em>not</em> constant, so the induced emf varies.</p>
          <p><strong>(d)</strong> Plate <strong>A</strong> will be <Highlight color="green">positive</Highlight> with respect to plate <strong>B</strong>.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-6-6">6.6 Motional Electromotive Force</h2>
      <p>Consider a straight conductor moving in a <strong>uniform and time-independent</strong> magnetic field.</p>
      <Stepper
        steps={[
          { label: "Set up the circuit", description: "A rectangular conductor PQRS in a uniform field B perpendicular to its plane. The arm PQ is free to move and is pulled left with constant velocity v." },
          { label: "The area changes", description: "As PQ moves, the area enclosed by PQRS changes — RQ = x, RS = l, so Φ_B = Blx." },
          { label: "Apply Faraday's law", description: "The rate of change of flux induces an emf: ε = −dΦ_B/dt." },
          { label: "Use dx/dt = −v", description: "The conductor moves left, so x decreases at rate v. This gives the motional emf ε = Blv." },
        ]}
      />
      <FormulaBlock latex={String.raw`\Phi_B = Blx`} />
      <FormulaBlock latex={String.raw`\varepsilon = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t} = -\frac{\mathrm{d}(Blx)}{\mathrm{d}t} = -Bl\frac{\mathrm{d}x}{\mathrm{d}t} = Blv`} important />
      <p>
        The induced emf <strong>Blv</strong> is called <Highlight color="yellow">motional emf</Highlight>. We are able to produce induced emf by{" "}
        <strong>moving a conductor</strong> instead of varying the magnetic field — that is, by changing the flux enclosed by the circuit.
      </p>

      <h3 id="h-6-6-1">Lorentz force explanation of motional emf</h3>
      <p>The motional emf can also be explained by the <Highlight color="yellow">Lorentz force</Highlight> acting on the free charge carriers of the conductor PQ:</p>
      <ul>
        <li>Any charge <strong>q</strong> in the moving rod PQ moves with speed <strong>v</strong> in field <strong>B</strong>. The Lorentz force is <strong>qvB</strong> in magnitude, directed <strong>towards Q</strong>.</li>
        <li>All charges experience the same force, in magnitude and direction, irrespective of position in the rod.</li>
        <li>Work done in moving the charge from P to Q: <Formula>{String.raw`W = qvBl`}</Formula>.</li>
        <li>Since emf is work done per unit charge:</li>
      </ul>
      <FormulaBlock latex={String.raw`\varepsilon = \frac{W}{q} = Blv`} important />
      <p>This matches Eq. (6.5), helping us understand the basis of Faraday&apos;s law when the conductor moves through a uniform, time-independent field.</p>

      <h3 id="h-6-6-2">Stationary conductor, changing magnetic field</h3>
      <p>
        It is <strong>not obvious</strong> how an emf is induced when the conductor is <em>stationary</em> and the magnetic field is{" "}
        <em>changing</em> — a fact Faraday verified by numerous experiments. For a stationary conductor, the force on its charges is:
      </p>
      <FormulaBlock latex={String.raw`\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B}) = q\mathbf{E}`} />
      <ul>
        <li>Since v = 0, any force on the charge must arise from the <strong>electric field term E alone</strong>.</li>
        <li>Therefore, to explain induced emf or current, we must assume that a <Highlight color="yellow">time-varying magnetic field generates an electric field</Highlight>.</li>
      </ul>
      <KeyPoint title="Fundamental significance">
        In Chapter 4, we learnt that <Highlight color="blue">charges in motion (current) can exert force/torque on a stationary magnet</Highlight>.
        Conversely, a moving bar magnet (or more generally, a changing magnetic field) can{" "}
        <Highlight color="yellow">exert a force on a stationary charge</Highlight>. All this demonstrates that{" "}
        <strong>electricity and magnetism are related.</strong>
      </KeyPoint>

      <Expandable title="Example 6.6 — Rotating rod (motional emf by two methods)">
        <ProblemSolution.Problem>
          <p>A metallic rod of length 1 m is rotated with a frequency of 50 rev/s, with one end hinged at the centre and the other at the circumference of a circular metallic ring of radius 1 m (about an axis through the centre, perpendicular to the ring). A constant uniform magnetic field of 1 T parallel to the axis is present everywhere. What is the emf between the centre and the metallic ring?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>Method I — using motional emf:</strong></p>
          <p>Free electrons move towards the outer end due to the Lorentz force and distribute over the ring, building up an emf until steady state. Across a length dr moving at right angles to B:</p>
          <FormulaBlock latex={String.raw`\mathrm{d}\varepsilon = Bv\,\mathrm{d}r`} />
          <FormulaBlock latex={String.raw`\varepsilon = \int \mathrm{d}\varepsilon = \int_0^R Bv\,\mathrm{d}r = \int_0^R B\omega r\,\mathrm{d}r = B\,\frac{\omega R^2}{2}`} />
          <p>with v = ωr. Substituting values (ω = 2πν = 2π × 50):</p>
          <FormulaBlock latex={String.raw`\varepsilon = \frac{1}{2} \times 1.0 \times (2\pi \times 50) \times (1)^2 = 157\ \text{V}`} important />
          <p><strong>Method II — flux through the sector:</strong></p>
          <p>Imagine a closed loop OPQ with O and P connected by a resistor and OQ the rotating rod. The potential difference equals the induced emf = B × (rate of change of area of the loop). Area of sector OPQ (angle θ):</p>
          <FormulaBlock latex={String.raw`A = \frac{\theta}{2\pi} \times \pi R^2 = \frac{1}{2}R^2\theta`} />
          <FormulaBlock latex={String.raw`\varepsilon = B \times \frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{1}{2}R^2\theta\right) = \frac{1}{2}BR^2\,\frac{\mathrm{d}\theta}{\mathrm{d}t} = \frac{1}{2}BR^2\omega`} important />
          <p className="text-sm text-muted-foreground">Both methods give the identical result ε = ½BωR² = 157 V.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 6.7 — Wheel with 10 spokes in earth&apos;s field">
        <ProblemSolution.Problem>
          <p>A wheel with 10 metallic spokes, each 0.5 m long, is rotated at 120 rev/min in a plane normal to the horizontal component of the earth&apos;s magnetic field H_E at a place. If H_E = 0.4 G, what is the induced emf between the axle and the rim? (1 G = 10⁻⁴ T).</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Using the rotating-rod result ε = (1/2)ωBR², with ω = 2πν = 2π × 2 (since 120 rev/min = 2 rev/s):</p>
          <FormulaBlock latex={String.raw`\varepsilon = \frac{1}{2} \times 4\pi \times 0.4\times 10^{-4} \times (0.5)^2 = 6.28\times 10^{-5}\ \text{V}`} important />
          <p className="text-sm text-muted-foreground">The number of spokes is <strong>immaterial</strong> — the emf&apos;s across the spokes are in parallel.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-6-7">6.7 Inductance</h2>
      <p>An electric current can be induced in a coil by a flux change produced by <strong>another coil in its vicinity</strong> or by flux change produced by <strong>the same coil</strong>.</p>
      <ul>
        <li>In both cases, the flux through a coil is <Highlight color="yellow">proportional to the current</Highlight>: <Formula>{String.raw`\Phi_B \propto I`}</Formula>.</li>
        <li>If the geometry does not vary with time, then <Formula>{String.raw`\frac{\mathrm{d}\Phi_B}{\mathrm{d}t} \propto \frac{\mathrm{d}I}{\mathrm{d}t}`}</Formula>.</li>
        <li>For a closely wound coil of N turns, the same flux is linked with all turns — the term <Highlight color="yellow">flux linkage NΦ_B</Highlight> is used, and <Formula>{String.raw`N\Phi_B \propto I`}</Formula>.</li>
      </ul>
      <p>The constant of proportionality in this relation is called <Highlight color="yellow">inductance</Highlight>.</p>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          title="What it depends on"
          definition="Inductance depends only on the geometry of the coil and intrinsic material properties — akin to capacitance, which depends on geometry and the dielectric constant K."
          icon="🧲"
        />
        <FactCard
          title="Nature & units"
          definition="Inductance is a scalar with dimensions [M L² T⁻² A⁻²]. SI unit: henry (H), named after Joseph Henry."
          icon="⚖️"
        />
      </div>

      <h3 id="h-6-7-1">6.7.1 Mutual inductance</h3>
      <p>Consider two long co-axial solenoids of the same length l — inner solenoid S₁ (radius r₁, turns per unit length n₁) and outer solenoid S₂ (radius r₂, turns per unit length n₂).</p>
      <p>When a current I₂ flows through S₂, it sets up a magnetic flux through S₁. The flux linkage with S₁ is:</p>
      <FormulaBlock latex={String.raw`N_1\Phi_1 = M_{12}I_2`} />
      <ul>
        <li><strong>M₁₂</strong> is called the <Highlight color="yellow">mutual inductance of solenoid S₁ with respect to S₂</Highlight>, also referred to as the <strong>coefficient of mutual induction</strong>.</li>
      </ul>
      <Expandable title="Derivation — mutual inductance of co-axial solenoids">
        <p>The magnetic field due to current I₂ in S₂ is <Formula>{String.raw`B_2 = \mu_0 n_2 I_2`}</Formula>. The flux linkage with S₁ (turns n₁l, area πr₁²):</p>
        <FormulaBlock latex={String.raw`N_1\Phi_1 = (n_1l)(\pi r_1^2)(\mu_0 n_2 I_2) = \mu_0 n_1 n_2 \pi r_1^2 l\, I_2`} />
        <p>Comparing with <Formula>{String.raw`N_1\Phi_1 = M_{12}I_2`}</Formula>:</p>
        <FormulaBlock latex={String.raw`M_{12} = \mu_0 n_1 n_2 \pi r_1^2 l`} />
        <p className="text-sm text-muted-foreground">We neglect edge effects and consider the field μ₀n₂I₂ uniform throughout the solenoid — a good approximation since the solenoid is long (l ≫ r₂).</p>
        <p>For the reverse case, a current I₁ through S₁ produces a flux linkage with S₂:</p>
        <FormulaBlock latex={String.raw`N_2\Phi_2 = (n_2l)(\pi r_1^2)(\mu_0 n_1 I_1) \;\Rightarrow\; M_{21} = \mu_0 n_1 n_2 \pi r_1^2 l`} />
        <p>Thus:</p>
        <FormulaBlock latex={String.raw`M_{12} = M_{21} = M`} important />
        <p className="text-sm text-muted-foreground">This equality is far more general than the co-axial solenoid example. The mutual inductance of a pair of coils depends on their <strong>separation</strong> and <strong>relative orientation</strong>.</p>
      </Expandable>
      <p>With a medium of relative permeability μ_r filling the solenoids:</p>
      <FormulaBlock latex={String.raw`M = \mu_r\, \mu_0\, n_1 n_2\, \pi r_1^2 l`} />

      <Expandable title="Example 6.8 — Two concentric circular coils">
        <ProblemSolution.Problem>
          <p>Two concentric circular coils, one of small radius r₁ and the other of large radius r₂ (r₁ ≪ r₂), are placed co-axially with centres coinciding. Obtain the mutual inductance of the arrangement.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Let current I₂ flow through the outer coil. The field at the centre is:</p>
          <FormulaBlock latex={String.raw`B_2 = \frac{\mu_0 I_2}{2r_2}`} />
          <p>Since the inner coil has a very small radius, B₂ is essentially constant over its cross-section. Hence:</p>
          <FormulaBlock latex={String.raw`\Phi_1 = \pi r_1^2 B_2 = \frac{\mu_0 \pi r_1^2}{2r_2}I_2 = M_{12}I_2`} />
          <FormulaBlock latex={String.raw`M_{12} = \frac{\mu_0 \pi r_1^2}{2r_2} = M_{21}`} important />
          <p className="text-sm text-muted-foreground">We accept the approximate value because r₁ ≪ r₂ makes the field uniform over πr₁².</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h4 id="h-6-7-1-exp">Recollecting Experiment 6.3</h4>
      <p>In Experiment 6.3, emf is induced in coil C₁ whenever the current through C₂ changes. With <Formula>{String.raw`N_1\Phi_1 = MI_2`}</Formula>, for time-varying currents:</p>
      <FormulaBlock latex={String.raw`\frac{\mathrm{d}}{\mathrm{d}t}(N_1\Phi_1) = M\frac{\mathrm{d}I_2}{\mathrm{d}t}`} />
      <p>Since the induced emf in C₁ is <Formula>{String.raw`\varepsilon_1 = -\frac{\mathrm{d}}{\mathrm{d}t}(N_1\Phi_1)`}</Formula>:</p>
      <FormulaBlock latex={String.raw`\varepsilon_1 = -M\frac{\mathrm{d}I_2}{\mathrm{d}t}`} important />
      <p>
        A varying current in one coil induces an emf in a neighbouring coil. The magnitude depends on the{" "}
        <Highlight color="yellow">rate of change of current</Highlight> and the <Highlight color="yellow">mutual inductance</Highlight> of the two coils.
      </p>

      <h3 id="h-6-7-2">6.7.2 Self-inductance</h3>
      <p>It is also possible that an emf is induced in a <strong>single isolated coil</strong> due to a change of flux through it from a varying current through the <em>same</em> coil. This phenomenon is called <Highlight color="yellow">self-induction</Highlight>.</p>
      <p>For a coil of N turns, the flux linkage is proportional to the current:</p>
      <FormulaBlock latex={String.raw`N\Phi_B = LI`} />
      <ul>
        <li><strong>L</strong> is the <Highlight color="yellow">self-inductance of the coil</Highlight>, also called the <strong>coefficient of self-induction</strong>.</li>
      </ul>
      <p>When the current varies, the flux linked with the coil changes and an emf is induced:</p>
      <FormulaBlock latex={String.raw`\varepsilon = -\frac{\mathrm{d}}{\mathrm{d}t}(N\Phi_B) = -L\frac{\mathrm{d}I}{\mathrm{d}t}`} important />
      <p>The <Highlight color="blue">self-induced emf always opposes any change (increase or decrease) of current</Highlight> in the coil. It is also called the <Highlight color="yellow">back emf</Highlight>.</p>

      <p><strong>Self-inductance of a long solenoid</strong> (cross-sectional area A, length l, n turns per unit length):</p>
      <Expandable title="Derivation — self-inductance of a long solenoid">
        <p>The magnetic field inside due to current I is <Formula>{String.raw`B = \mu_0 n I`}</Formula>. The total flux linkage (total turns nl):</p>
        <FormulaBlock latex={String.raw`N\Phi_B = (nl)(\mu_0 n I)(A) = \mu_0 n^2 A l\, I`} />
        <p>Thus the self-inductance is:</p>
        <FormulaBlock latex={String.raw`L = \frac{N\Phi_B}{I} = \mu_0 n^2 A l`} important />
        <p>If filled with a material of relative permeability μ_r (e.g. soft iron):</p>
        <FormulaBlock latex={String.raw`L = \mu_r\, \mu_0\, n^2 A l`} important />
      </Expandable>
      <p>The self-inductance of a coil depends on its <strong>geometry</strong> and on the <strong>permeability of the medium</strong>.</p>
      <Callout type="note">
        <strong>Physical role of L — electrical inertia:</strong> Physically, self-inductance plays the role of{" "}
        <Highlight color="yellow">inertia</Highlight> — it is the electromagnetic analogue of <strong>mass in mechanics</strong>. Work must be done{" "}
        against the back emf in establishing the current; this work is stored as <strong>magnetic potential energy</strong>.
      </Callout>
      <p><strong>Energy stored in establishing the current:</strong> the rate of work done is <Formula>{String.raw`\frac{\mathrm{d}W}{\mathrm{d}t} = \varepsilon I`}</Formula>. Ignoring resistive losses and using ε = −L dI/dt:</p>
      <FormulaBlock latex={String.raw`\frac{\mathrm{d}W}{\mathrm{d}t} = L I\,\frac{\mathrm{d}I}{\mathrm{d}t}`} />
      <FormulaBlock latex={String.raw`W = \int \mathrm{d}W = \int_0^I L I\,\mathrm{d}I = \frac{1}{2}LI^2`} important />
      <p>
        This expression reminds us of <Formula>{String.raw`\tfrac{1}{2}mv^2`}</Formula> for the kinetic energy of a particle of mass m, and shows that{" "}
        <Highlight color="yellow">L is analogous to m</Highlight> — it opposes the growth and decay of current in the circuit.
      </p>
      <Callout type="note">
        <strong>General case — two nearby coils:</strong> when currents flow simultaneously in two nearby coils, the flux linked with one is the{" "}
        sum of two independent fluxes: <Formula>{String.raw`N_1\Phi_1 = M_{11}I_1 + M_{12}I_2`}</Formula>. Using Faraday&apos;s law,
        <Formula>{String.raw`\varepsilon_1 = -M_{11}\frac{\mathrm{d}I_1}{\mathrm{d}t} - M_{12}\frac{\mathrm{d}I_2}{\mathrm{d}t}`}</Formula>,
        where <strong>M₁₁ = L₁</strong> is the self-inductance:
        <Formula>{String.raw`\varepsilon_1 = -L_1\frac{\mathrm{d}I_1}{\mathrm{d}t} - M_{12}\frac{\mathrm{d}I_2}{\mathrm{d}t}`}</Formula>.
      </Callout>

      <Expandable title="Example 6.9 — Magnetic energy in a solenoid vs capacitor">
        <ProblemSolution.Problem>
          <p>(a) Obtain the expression for the magnetic energy stored in a solenoid in terms of magnetic field B, area A and length l. (b) How does this compare with the electrostatic energy stored in a capacitor?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>(a) From U = ½LI², using B = μ₀nI and L = μ₀n²Al:</p>
          <FormulaBlock latex={String.raw`U_B = \frac{1}{2}LI^2 = \frac{1}{2}L\left(\frac{B}{\mu_0 n}\right)^2 = \frac{1}{2}\left(\frac{\mu_0 n^2 A l}{\mu_0^2 n^2}\right)B^2 = \frac{1}{2}\frac{B^2}{\mu_0} A l`} />
          <p>Energy per unit volume (V = Al):</p>
          <FormulaBlock latex={String.raw`u_B = \frac{U_B}{V} = \frac{1}{2}\frac{B^2}{\mu_0}`} important />
          <p>(b) The electrostatic energy density in a parallel plate capacitor (Chapter 2, Eq. 2.73) is:</p>
          <FormulaBlock latex={String.raw`u_E = \frac{1}{2}\varepsilon_0 E^2`} />
          <p>
            In both cases the energy is proportional to the <Highlight color="yellow">square of the field strength</Highlight>. Although derived for
            a solenoid and a parallel plate capacitor, both results are <strong>general and valid for any region of space</strong> containing a
            magnetic or electric field.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-6-8">6.8 The AC Generator</h2>
      <p>
        An exceptionally important application is the <Highlight color="yellow">generation of alternating currents (ac)</Highlight>. The modern
        ac generator (typical output 100 MW) was credited to the Yugoslav inventor <strong>Nicola Tesla</strong>.
      </p>
      <ul>
        <li>As pointed out in Section 6.3, one way to induce emf is through a <strong>change in the loop&apos;s orientation</strong> or effective area.</li>
        <li>As the coil rotates in field B, the effective area facing the field is <strong>A cos θ</strong>, where θ is the angle between A and B.</li>
        <li>The ac generator <Highlight color="yellow">converts mechanical energy into electrical energy</Highlight>.</li>
      </ul>
      <p><strong>Basic elements:</strong></p>
      <ul>
        <li>A coil mounted on a <strong>rotor shaft</strong>; the axis of rotation is perpendicular to the magnetic field.</li>
        <li>The coil (called <Highlight color="yellow">armature</Highlight>) is rotated mechanically in the uniform field, changing the flux through it.</li>
        <li>The coil ends connect to an external circuit via <Highlight color="blue">slip rings</Highlight> and <Highlight color="blue">brushes</Highlight>.</li>
      </ul>
      <p>When the coil rotates with constant angular speed ω, the angle at time t is θ = ωt (θ = 0° at t = 0). The flux is:</p>
      <FormulaBlock latex={String.raw`\Phi_B = BA\cos\theta = BA\cos\omega t`} />
      <p>From Faraday&apos;s law, for a coil of N turns:</p>
      <FormulaBlock latex={String.raw`\varepsilon = -N\frac{\mathrm{d}\Phi_B}{\mathrm{d}t} = -\frac{\mathrm{d}}{\mathrm{d}t}(NBA\cos\omega t)`} />
      <p>Thus the instantaneous emf is:</p>
      <FormulaBlock latex={String.raw`\varepsilon = NBA\omega\sin\omega t`} important />
      <ul>
        <li><strong>NBAω</strong> is the <Highlight color="yellow">maximum value of the emf</Highlight>, occurring when sin ωt = ±1.</li>
        <li>Denoting NBAω as ε₀:</li>
      </ul>
      <FormulaBlock latex={String.raw`\varepsilon = \varepsilon_0\sin\omega t`} />
      <ul>
        <li>The sine function varies between +1 and −1, so the <Highlight color="yellow">polarity of the emf changes with time</Highlight> — the direction of current changes periodically, giving <strong>alternating current (ac)</strong>.</li>
        <li>The emf has its extremum at θ = 90° and θ = 270°, where the change of flux is greatest.</li>
        <li>With ω = 2πn (n = frequency of revolution):</li>
      </ul>
      <FormulaBlock latex={String.raw`\varepsilon = \varepsilon_0\sin 2\pi nt`} />
      <p>Equations (6.20) and (6.21) give the <strong>instantaneous</strong> value; ε varies between +ε₀ and −ε₀ periodically. (Time-averaged values are studied in the next chapter.)</p>

      <h3 id="h-6-8-1">Commercial generators</h3>
      <Callout type="note">
        In commercial generators, the mechanical energy for rotating the armature comes from{" "}
        <Highlight color="yellow">water falling from dams (hydro-electric)</Highlight>,{" "}
        <Highlight color="yellow">steam raised by burning coal (thermal)</Highlight>, or{" "}
        <Highlight color="yellow">nuclear fuel (nuclear power generators)</Highlight>.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard label="Output capacity" value="500 MW" description="A single modern generator can light up 5 million 100 W bulbs." />
        <MetricCard label="Moving part" value="Electro-magnets" description="In most generators the coils are stationary and the electromagnets rotate." />
        <MetricCard label="Mains frequency" value="50 / 60 Hz" description="50 Hz in India; 60 Hz in countries such as the USA." />
      </div>
      <ProcessCard
        title="From rotation to electricity"
        steps={[
          { label: "Coil rotates", description: "The armature is spun mechanically in a uniform magnetic field (axis ⊥ field)." },
          { label: "Flux changes with angle", description: "Φ_B = BA cos ωt varies as θ = ωt changes the effective area facing the field." },
          { label: "Emf is induced", description: "ε = NBAω sin ωt — maximum NBAω when θ = 90° or 270°." },
          { label: "Slip rings + brushes take it out", description: "The sinusoidal emf drives alternating current through the external circuit." },
        ]}
      />

      <Expandable title="Example 6.10 — Kamla&apos;s stationary bicycle generator">
        <ProblemSolution.Problem>
          <p>Kamla peddles a stationary bicycle. The pedals are attached to a 100-turn coil of area 0.10 m². The coil rotates at half a revolution per second in a uniform field of 0.01 T perpendicular to the axis of rotation. What is the maximum voltage generated in the coil?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Here n = 0.5 rev/s, N = 100, A = 0.10 m², B = 0.01 T. Using ε₀ = NBA(2πn):</p>
          <FormulaBlock latex={String.raw`\varepsilon_0 = NBA(2\pi n) = 100 \times 0.01 \times 0.1 \times 2 \times 3.14 \times 0.5 = 0.314\ \text{V}`} important />
          <p className="text-sm text-muted-foreground">The maximum voltage is 0.314 V. (Exploring such alternative possibilities for power generation is encouraged!)</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-6-appendix">Key Equations — Revision Board</h2>
      <FormulaCard>
        <p className="text-[0.85rem] text-muted-foreground mb-2">Electromagnetic Induction — core relations</p>
        <p className="text-[0.75rem] font-medium text-muted-foreground">Faraday&apos;s law (N turns)</p>
        <FormulaBlock latex={String.raw`\varepsilon = -N\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}`} important />
        <p className="text-[0.75rem] font-medium text-muted-foreground">Motional emf</p>
        <FormulaBlock latex={String.raw`\varepsilon = Blv`} important />
        <p className="text-[0.75rem] font-medium text-muted-foreground">Mutual induction</p>
        <FormulaBlock latex={String.raw`\varepsilon_1 = -M\frac{\mathrm{d}I_2}{\mathrm{d}t}`} important />
        <p className="text-[0.75rem] font-medium text-muted-foreground">Self-induction</p>
        <FormulaBlock latex={String.raw`\varepsilon = -L\frac{\mathrm{d}I}{\mathrm{d}t}`} important />
        <p className="text-[0.75rem] font-medium text-muted-foreground">Energy stored in an inductor</p>
        <FormulaBlock latex={String.raw`W = \frac{1}{2}LI^2`} important />
        <p className="text-[0.75rem] font-medium text-muted-foreground">AC generator emf</p>
        <FormulaBlock latex={String.raw`\varepsilon = \varepsilon_0\sin\omega t, \quad \varepsilon_0 = NBA\omega`} important />
      </FormulaCard>

      <h2 id="h-6-exercises">Back-of-Chapter Exercises</h2>

      <Expandable title="Exercise 6.3 — Induced emf in a small loop inside a solenoid" variant="exercise">
        <ProblemSolution.Problem>
          <p>A long solenoid with 15 turns per cm has a small loop of area 2.0 cm² placed inside the solenoid normal to its axis. If the current carried by the solenoid changes steadily from 2.0 A to 4.0 A in 0.1 s, what is the induced emf in the loop while the current is changing?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>Given:</strong> n = 15 turns/cm = 1500 turns/m, A = 2.0 cm² = 2.0 × 10⁻⁴ m², ΔI = 2.0 A, Δt = 0.1 s.</p>
          <p>The flux through the loop is Φ = μ₀nI A, so the induced emf is:</p>
          <FormulaBlock latex={String.raw`\varepsilon = \frac{\mathrm{d}\Phi}{\mathrm{d}t} = \mu_0 n A\,\frac{\mathrm{d}I}{\mathrm{d}t}`} />
          <FormulaBlock latex={String.raw`\varepsilon = 4\pi\times 10^{-7} \times 1500 \times 2.0\times 10^{-4} \times \frac{2.0}{0.1}`} />
          <FormulaBlock latex={String.raw`\varepsilon = 4\pi \times 10^{-7} \times 1500 \times 2 \times 10^{-4} \times 20 = 7.5 \times 10^{-6}\ \text{V}`} important />
          <p className="text-sm text-muted-foreground">Induced emf ≈ 7.5 × 10⁻⁶ V.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 6.4 — Rectangular loop moving out of a field" variant="exercise">
        <ProblemSolution.Problem>
          <p>A rectangular wire loop of sides 8 cm and 2 cm with a small cut is moving out of a region of uniform magnetic field of magnitude 0.3 T directed normal to the loop. What is the emf developed across the cut if the velocity of the loop is 1 cm s⁻¹ in a direction normal to the (a) longer side, (b) shorter side of the loop? For how long does the induced voltage last in each case?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>(a) Normal to the longer side:</strong> the conductor crossing the field boundary is the <strong>shorter side</strong>, l = 2 cm = 0.02 m.</p>
          <FormulaBlock latex={String.raw`\varepsilon = B l v = 0.3 \times 0.02 \times 0.01 = 6 \times 10^{-5}\ \text{V}`} important />
          <FormulaBlock latex={String.raw`t = \frac{0.02}{0.01} = 2\ \text{s}`} />
          <p><strong>(b) Normal to the shorter side:</strong> the crossing conductor is the <strong>longer side</strong>, l = 8 cm = 0.08 m.</p>
          <FormulaBlock latex={String.raw`\varepsilon = B l v = 0.3 \times 0.08 \times 0.01 = 2.4 \times 10^{-4}\ \text{V}`} important />
          <FormulaBlock latex={String.raw`t = \frac{0.08}{0.01} = 8\ \text{s}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 6.5 — Rotating rod with one end on axis" variant="exercise">
        <ProblemSolution.Problem>
          <p>A 1.0 m long metallic rod is rotated with an angular frequency of 400 rad s⁻¹ about an axis normal to the rod through its one end. The other end is in contact with a circular metallic ring. A constant uniform magnetic field of 0.5 T parallel to the axis exists everywhere. Calculate the emf developed between the centre and the ring.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Using the rotating-rod result:</p>
          <FormulaBlock latex={String.raw`\varepsilon = \frac{1}{2}B\omega R^2`} />
          <FormulaBlock latex={String.raw`\varepsilon = \frac{1}{2} \times 0.5 \times 400 \times (1.0)^2 = 100\ \text{V}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 6.6 — Falling wire and earth&apos;s field" variant="exercise">
        <ProblemSolution.Problem>
          <p>A horizontal straight wire 10 m long extending from east to west is falling with a speed of 5.0 m s⁻¹, at right angles to the horizontal component of the earth&apos;s magnetic field, 0.30 × 10⁻⁴ Wb m⁻². (a) What is the instantaneous value of the emf induced in the wire? (b) What is the direction of the emf? (c) Which end of the wire is at higher electrical potential?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>(a) With the wire moving at right angles to B:</p>
          <FormulaBlock latex={String.raw`\varepsilon = Blv = 0.30 \times 10^{-4} \times 10 \times 5.0 = 1.5 \times 10^{-3}\ \text{V}`} important />
          <p>(b) Using the right-hand rule for <Formula>{String.raw`\mathbf{F} = q(\mathbf{v} \times \mathbf{B})`}</Formula> (v downward, B horizontal northwards), the free electrons (or the positive charge convention) separate with the emf directed <Highlight color="yellow">from west to east</Highlight>.</p>
          <p>(c) The <Highlight color="green">east end</Highlight> of the wire is at the higher potential.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 6.7 — Self-inductance estimate" variant="exercise">
        <ProblemSolution.Problem>
          <p>Current in a circuit falls from 5.0 A to 0.0 A in 0.1 s. If an average emf of 200 V is induced, estimate the self-inductance of the circuit.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>From <Formula>{String.raw`\varepsilon = -L\frac{\mathrm{d}I}{\mathrm{d}t}`}</Formula>:</p>
          <FormulaBlock latex={String.raw`L = \frac{\varepsilon}{\mathrm{d}I/\mathrm{d}t} = \frac{200}{5.0/0.1} = \frac{200}{50} = 4\ \text{H}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 6.8 — Change of flux linkage between adjacent coils" variant="exercise">
        <ProblemSolution.Problem>
          <p>A pair of adjacent coils has a mutual inductance of 1.5 H. If the current in one coil changes from 0 to 20 A in 0.5 s, what is the change of flux linkage with the other coil?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Flux linkage is <Formula>{String.raw`N_2\Phi_2 = M I_1`}</Formula>, so the change is:</p>
          <FormulaBlock latex={String.raw`\Delta(N_2\Phi_2) = M\,\Delta I_1 = 1.5 \times 20 = 30\ \text{Wb}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <TableCard
        caption="Appendix — Physical quantities in electromagnetic induction."
        headers={["Quantity", "Symbol", "Units", "Dimensions", "Equation"]}
        rows={[
          { cells: ["Magnetic Flux", "Φ_B", "Wb (weber)", "[M L² T⁻² A⁻¹]", "Φ_B = B·A"] },
          { cells: ["EMF", "ε", "V (volt)", "[M L² T⁻³ A⁻¹]", "ε = −N dΦ_B/dt"] },
          { cells: ["Mutual Inductance", "M", "H (henry)", "[M L² T⁻² A⁻²]", "ε₁ = −M₁₂ dI₂/dt"] },
          { cells: ["Self Inductance", "L", "H (henry)", "[M L² T⁻² A⁻²]", "ε = −L dI/dt"] },
        ]}
      />

      <MistakeCard
        mistake="Forgetting the cosθ in magnetic flux — writing Φ_B = BA even when B is not perpendicular to the surface."
        correction="Always use the component of B normal to the surface: Φ_B = BA cosθ, where θ is the angle between B and the area vector A."
        example="Example 6.2: the field of 0.10 T at 45° to the plane normal gives Φ = 0.707 mWb, not 1.0 mWb."
      />
      <MistakeCard
        mistake="Sign/direction errors — assuming the induced current always opposes the current in the inducing coil."
        correction="Lenz&apos;s law is about opposing the change in flux, not the current: an increasing flux is opposed by an induced field pointing opposite to B; a decreasing flux by one pointing along B."
      />
      <MistakeCard
        mistake="Using ε = Blv for a stationary conductor in a changing field — motional emf only applies to conductors actually moving through a steady field."
        correction="For a stationary conductor in a time-varying field, the emf comes from the induced electric field E generated by the changing B (F = qE), not from Blv."
      />
    </>
  );
}