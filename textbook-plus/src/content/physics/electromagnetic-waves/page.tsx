import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { Timeline } from "@/components/content/process/Timeline";
import { ProblemInsightSolutionCard } from "@/components/content/process/ProblemInsightSolutionCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { AmpereSurfaceToggle } from "@/components/content/physics/AmpereSurfaceToggle";
import { ChargeFateTrio } from "@/components/content/physics/ChargeFateTrio";
import { OscillationPlayer } from "@/components/content/physics/OscillationPlayer";
import { TransverseLongitudinal } from "@/components/content/physics/TransverseLongitudinal";
import { FormulaAnatomy } from "@/components/content/physics/FormulaAnatomy";
import { SpeedLayers } from "@/components/content/physics/SpeedLayers";
import { FieldRatio } from "@/components/content/physics/FieldRatio";
import { PropagationExplorer } from "@/components/content/physics/PropagationExplorer";
import { SpectrumExplorer } from "@/components/content/physics/SpectrumExplorer";
import { SpectrumTable } from "@/components/content/physics/SpectrumTable";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { RevealAnswer } from "@/components/content/process/RevealAnswer";

export default function ElectromagneticWavesChapter() {
  return (
    <>
      <h2 id="h-8-1">8.1 Introduction</h2>
      <ProcessCard
        title="⚡ From Electricity &amp; Magnetism → Electromagnetic Waves"
        steps={[
          { label: "Chapter 4", description: <>An <strong>electric current</strong> produces a magnetic field.</> },
          { label: "Chapter 6", description: <>A <strong>changing magnetic field</strong> produces an electric field.</> },
        ]}
      />
      <KeyPoint title="🟨 The question Maxwell asked">
        If a changing magnetic field can produce an electric field, can a{" "}
        <strong>changing electric field</strong> produce a magnetic field?
      </KeyPoint>
      <Callout type="note" title="James Clerk Maxwell · Physicist (1831–1879)">
        <p>
          <strong>Key idea:</strong> A magnetic field can be generated not only by an{" "}
          <strong>electric current</strong>, but also by a <strong>time-varying electric field</strong>.
        </p>
        <p className="mt-2">
          <strong>✏️ Why?</strong> Maxwell found an inconsistency when applying{" "}
          <strong>Ampère&apos;s circuital law</strong> to a capacitor carrying a time-varying current, and resolved it
          by introducing the concept of a <Highlight color="yellow">displacement current</Highlight> — the reasoning
          below.
        </p>
      </Callout>
      <ProblemInsightSolutionCard
        title="Maxwell&apos;s reasoning"
        problem={
          <>
            Two surfaces bounded by the same <strong>Ampère loop</strong> give different answers — one sees the conduction
            current, the other does not, so the magnetic field at a point is ambiguous.
          </>
        }
        insight={
          <>
            What passes between the capacitor plates is a <strong>changing electric flux</strong> — the contribution the law
            is missing.
          </>
        }
        solution={
          <>
            Treat the changing flux like a current: <Formula>{String.raw`I_d = \varepsilon_0\,\frac{\mathrm{d}\Phi_E}{\mathrm{d}t}`}</Formula>.{" "}
            <Highlight color="green">Displacement current</Highlight> — now every surface gives the same answer.
          </>
        }
      />
      <KeyPoint title="Maxwell&apos;s crowning achievement">
        Maxwell wrote a full set of equations — <Highlight color="yellow">Maxwell&apos;s equations</Highlight> — describing
        the relationship between <strong>electric fields, magnetic fields and their sources</strong>. Their most striking
        prediction is the existence of <strong>electromagnetic waves</strong>: coupled, time-varying electric and magnetic
        fields that propagate through space.
      </KeyPoint>
      <MetricCard
        label="Speed of electromagnetic waves in vacuum"
        value="3 × 10⁸"
        unit="m/s"
        description={
          <>
            ≈ speed of light — <Highlight color="green">Light is an electromagnetic wave.</Highlight>
          </>
        }
      />
      <Timeline
        title="💡 From theory to technology"
        color="#7c3aed"
        rtl={false}
        events={[
          { date: "1865", label: "Maxwell's theory", detail: "The equations unify electricity, magnetism and light into a single theory of electromagnetic waves." },
          { date: "1885", label: "Hertz", detail: "Experimentally demonstrates electromagnetic waves, verifying Maxwell's theory." },
          { date: "1890s", label: "Marconi & others", detail: "Turn the waves into technology — long-distance wireless transmission." },
          { date: "Today", label: "📡 Modern communication", detail: "Radio, TV, mobile telephony, radar, satellites — all ride on electromagnetic waves." },
        ]}
      />

      <h2 id="h-8-2">8.2 Displacement Current</h2>
      <figure className="my-6">
        <img
          src="/images/physics/electromagnetic-waves/ampere-inconsistency-displacement.png"
          alt="The inconsistency in Ampere&apos;s circuital law applied to a charging capacitor, and how the displacement current resolves it."
          className="max-w-md mx-auto w-full h-auto rounded-lg object-contain bg-white"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Inconsistency in Ampere&apos;s law — resolved by the displacement current.
        </figcaption>
      </figure>
      <Expandable title="↻ Recall: Ampere&apos;s circuital law (Ch. 4)" variant="recall">
        <p>
          Ampere&apos;s circuital law relates the magnetic field along a closed loop to the current it encloses:
        </p>
        <FormulaBlock latex={String.raw`\oint \mathbf{B}\cdot \mathrm{d}\mathbf{l} = \mu_0 I_{\text{enclosed}}`} />
        <figure className="my-6">
          <img
            src="/images/physics/electromagnetic-waves/ampere-wire-field.png"
            alt="A long straight wire carrying a current I, with the magnetic field curling in closed loops around it"
            className="max-w-xs mx-auto w-full h-auto rounded-lg object-contain bg-white"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            The magnetic field around a current-carrying wire — the closed field lines along which we integrate.
          </figcaption>
        </figure>
      </Expandable>
      <p>To see how the law fails, consider the <strong>charging of a capacitor</strong> and apply Ampere&apos;s circuital law to find the magnetic field at a point outside it:</p>
      <AmpereSurfaceToggle />
      <RevealAnswer
        title="🔎 Find the missing term"
        question="What passes through the surface S between the capacitor plates?"
        answer={
          <>
            <Highlight color="green">The electric field!</Highlight> As the charge Q on the plates changes, the electric
            flux changes — this is the missing term the law needs.
          </>
        }
      />
      <EquationLadder
        title="Deriving the missing term"
        steps={[
          {
            label: "Surface charge density",
            equation: String.raw`\sigma = \frac{q}{A}`,
            note: "On each plate the charge spreads uniformly.",
          },
          {
            label: "Field between the plates",
            equation: String.raw`E = \frac{\sigma}{\varepsilon_0} = \frac{q}{A\varepsilon_0}`,
            note: "Uniform and perpendicular to the plates.",
          },
          {
            label: "Electric flux",
            equation: String.raw`\Phi_E = E\,A = \frac{q}{\varepsilon_0}`,
            note: "Multiplying the field by the area A gives the flux through the surface.",
          },
          {
            label: "Change with time",
            equation: String.raw`\varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t} = \frac{\mathrm{d}q}{\mathrm{d}t} = i`,
            note: "Differentiating at constant ε₀ and A gives the displacement current I_d = i (the charging current).",
          },
        ]}
      />
      <p>Thus, for plates of area A and charge Q:</p>
      <FormulaBlock label="Flux through capacitor" tag="Eq. 8.3" latex={String.raw`\Phi_E = E A = \frac{Q}{\varepsilon_0}`} important />
      <p>Since the charging current is <Formula>{String.raw`i = \mathrm{d}Q/\mathrm{d}t`}</Formula>:</p>
      <FormulaBlock label="Displacement current relation" tag="Eq. 8.4" latex={String.raw`\varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t} = i`} important />
      <p>This is the missing term. Adding <Formula>{String.raw`\varepsilon_0\,\mathrm{d}\Phi_E/\mathrm{d}t`}</Formula> to the total current gives the <Highlight color="yellow">same value i for all surfaces</Highlight> — the contradiction disappears, and B at P is non-zero no matter which surface is used.</p>
      <figure className="my-6">
        <img
          src="/images/physics/electromagnetic-waves/maxwells-experiment.png"
          alt="Maxwell&apos;s experiment — a charging capacitor; the magnetic needle between the plates deflects, showing a magnetic field there although no conduction current flows between the plates."
          className="max-w-md mx-auto w-full h-auto rounded-lg object-contain bg-white"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Maxwell&apos;s experiment — the magnetic needle deflects even between the plates, where only displacement current exists.
        </figcaption>
      </figure>
      <MistakeCard
        mistake="Applying Ampere&apos;s law (without the displacement term) across the surface that passes through the region between capacitor plates."
        correction="The full Ampere-Maxwell law must include ε₀ dΦ_E/dt. Between the plates the conduction current is zero but the displacement current ε₀ dΦ_E/dt equals the charging current — this is what keeps the magnetic field consistent for every surface."
      />

      <h3 id="h-8-2-1">Conduction vs displacement current</h3>
      <TableCard
        title="Conduction vs displacement current"
        headers={["", "Conduction current (i_c)", "Displacement current (i_d)"]}
        rows={[
          { cells: ["What causes it?", "Flow of charges (moving charges)", "Changing electric field"] },
          { cells: ["Where?", "In the conductor (wire)", "Between the capacitor plates"] },
          { cells: ["Symbol", "i_c", "i_d"] },
          { cells: ["Charging capacitor", "i_c = i (outside the plates)", "i_d = i (between the plates)"] },
          { cells: ["Physical source", "Actual flow of charges", "Changing electric flux"] },
        ]}
      />
      <EquationLadder
        title="AMPÈRE → AMPÈRE-MAXWELL — the final form"
        steps={[
          {
            label: "Original law",
            equation: String.raw`\oint \mathbf{B}\cdot \mathrm{d}\mathbf{l} = \mu_0 I_c`,
            note: "Only the conduction current I_c is counted — this created the contradiction.",
          },
          {
            label: "Maxwell's correction",
            equation: String.raw`i = i_c + i_d = i_c + \varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t}`,
            note: "The total current now includes the displacement current.",
          },
          {
            label: "Generalised law",
            equation: String.raw`\oint \mathbf{B}\cdot \mathrm{d}\mathbf{l} = \mu_0\left(i_c + \varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t}\right)`,
            note: "The Ampère-Maxwell law — every surface through the loop gives the same answer.",
            final: true,
            tag: "Eq. 8.6",
          },
        ]}
      />
      <KeyPoint title="Ampère-Maxwell law">
        The total current passing through any surface is the sum of the{" "}
        <Highlight color="yellow">conduction current</Highlight> and the{" "}
        <Highlight color="yellow">displacement current</Highlight>.
      </KeyPoint>
      <h4 className="mb-3 mt-8 text-sm font-extrabold uppercase tracking-wider text-foreground">
        Properties of displacement current
      </h4>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          title="Nature"
          icon="🌀"
          definition="Not a conventional current — a hypothetical current that accounts for the changing electric field in a region with no actual flow of charges."
        />
        <FactCard
          title="Expression"
          icon="🧮"
          definition="I_d = ε₀ dΦ_E/dt — it produces the same physical effects as a conduction current and acts as a source of magnetic field."
        />
        <FactCard
          title="Steady conditions"
          icon="❄️"
          definition="Does not exist under steady (DC) conditions; measured only while the electric field or flux is changing."
        />
        <FactCard
          title="Continuity"
          icon="🔗"
          definition="Together with the conduction current it satisfies continuity: I_c = I_d — verified experimentally, since B between the plates equals B just outside."
        />
      </div>
      <MistakeCard
        mistake="Thinking displacement current is the same as conduction current flowing through the dielectric."
        correction="Displacement current is not a flow of charges — it arises from the time-varying electric field. It has the same magnetic effects as a real current, but inside the capacitor there is no physical charge flow."
      />

      <h3 id="h-8-2-2">The beautiful symmetry</h3>
      <ul>
        <li><strong>Faraday&apos;s law:</strong> a <Highlight color="yellow">magnetic field changing with time gives rise to an electric field</Highlight>.</li>
        <li><strong>Ampere-Maxwell law:</strong> an <Highlight color="yellow">electric field changing with time gives rise to a magnetic field</Highlight>.</li>
      </ul>
      <KeyPoint title="Time-dependent fields give rise to each other!">
        The symmetry of these two laws is the basis of <Highlight color="green">electromagnetic waves</Highlight>.
      </KeyPoint>
      <p className="text-sm text-muted-foreground">The symmetry is imperfect: there are no known sources of magnetic field (magnetic monopoles) analogous to electric charges.</p>

      <h3 id="h-8-2-3">Maxwell&apos;s equations in vacuum</h3>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Gauss&apos;s law in electrostatics</p>
          <FormulaBlock latex={String.raw`\oint \mathbf{E}\cdot\mathrm{d}\mathbf{s} = \frac{q}{\varepsilon_0}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Gauss&apos;s law in magnetism</p>
          <FormulaBlock latex={String.raw`\oint \mathbf{B}\cdot\mathrm{d}\mathbf{s} = 0`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Faraday–Lenz law</p>
          <FormulaBlock latex={String.raw`\oint \mathbf{E}\cdot\mathrm{d}\mathbf{l} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}`} important />
        </FormulaCard>
        <FormulaCard>
          <p className="text-[0.75rem] font-medium text-muted-foreground">Ampere–Maxwell law</p>
          <FormulaBlock latex={String.raw`\oint \mathbf{B}\cdot\mathrm{d}\mathbf{l} = \mu_0\left(i_c + \varepsilon_0\frac{\mathrm{d}\Phi_E}{\mathrm{d}t}\right)`} important />
        </FormulaCard>
      </div>
      <p className="my-3 text-sm text-muted-foreground">
        The modified form — <Highlight color="yellow">Ampere&apos;s law + displacement current</Highlight> — is what Maxwell added. This
        fourth equation, together with Faraday&apos;s law, is the seed of electromagnetic waves.
      </p>

      <h2 id="h-8-3">8.3 Electromagnetic Waves</h2>

      <h3 id="h-8-3-1">8.3.1 Sources of electromagnetic waves</h3>
      <ChargeFateTrio />
      <OscillationPlayer />
      <p>Why not test this with visible light directly?</p>
      <Callout type="warning">
        The frequency of yellow light is about <Formula>{String.raw`6\times 10^{14}\ \text{Hz}`}</Formula>, while even modern electronic circuits
        barely reach <Formula>{String.raw`10^{11}\ \text{Hz}`}</Formula>. The first experimental demonstration therefore had to come in the{" "}
        <strong>low frequency (radio) region</strong>. The experimental trail — <strong>Hertz (1887)</strong>, followed by J. C. Bose&apos;s
        still-laboratory-confined <strong>25 mm to 5 mm</strong> waves (Kolkata, 1894), and Marconi&apos;s long-distance transmission — is traced
        in the introduction.
      </Callout>

      <h3 id="h-8-3-2">8.3.2 Nature of electromagnetic waves</h3>
      <p>From Maxwell&apos;s equations it follows that electric and magnetic fields in an electromagnetic wave are <Highlight color="yellow">perpendicular to each other, and to the direction of propagation</Highlight>.</p>
      <TransverseLongitudinal />
      <figure className="my-6">
        <img
          src="/images/physics/electromagnetic-waves/em-wave.png"
          alt="An electromagnetic wave — oscillating electric and magnetic fields perpendicular to each other and to the direction of propagation."
          className="max-w-md mx-auto w-full h-auto rounded-lg object-contain bg-white"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Electromagnetic wave — E and B oscillate perpendicular to each other and to the direction of travel.
        </figcaption>
      </figure>
      <p>Every field oscillation follows the general <strong>wave equation</strong>, with the oscillating field as the wave&apos;s displacement:</p>
      <FormulaAnatomy
        title="Wave equation anatomy"
        equation={String.raw`y = A \sin(kx - \omega t)`}
        tokens={[
          { latex: "y", label: "the oscillating quantity — here the field E or B" },
          { latex: "A", label: <>amplitude — <Formula>{String.raw`E_0`}</Formula> or <Formula>{String.raw`B_0`}</Formula> (also <Formula>{String.raw`E_m`}</Formula>, <Formula>{String.raw`B_m`}</Formula>)</> },
          { latex: "k", label: <>propagation constant — <Formula>{String.raw`k = 2\pi/\lambda`}</Formula> (8.8)</> },
          { latex: "x", label: "position along the direction of travel" },
          { latex: "\\omega", label: <>angular frequency — <Formula>{String.raw`\omega = 2\pi f = 2\pi/T`}</Formula></> },
          { latex: "t", label: "time" },
        ]}
      />
      <KeyPoint title="Sign convention — direction of propagation">
        The sign between the two terms fixes the direction of travel:{" "}
        <Formula>{String.raw`(kx - \omega t)`}</Formula> → <strong>+x (positive axis)</strong>,{" "}
        <Formula>{String.raw`(kx + \omega t)`}</Formula> → <strong>−x (negative axis)</strong>.
      </KeyPoint>
      <p>For a plane wave propagating along the z-direction, with <strong>E along x</strong> and <strong>B along y</strong>:</p>
      <FormulaBlock latex={String.raw`E_x = E_0 \sin(kz - \omega t) \qquad [8.7\mathrm{(a)}]`} />
      <FormulaBlock latex={String.raw`B_y = B_0 \sin(kz - \omega t) \qquad [8.7\mathrm{(b)}]`} />
      <MistakeCard
        mistake="Forgetting that E ⊥ B ⊥ propagation, and using inconsistent directions in problems."
        correction="Always check directions with the rule that E × B points along the direction of propagation. For propagation along +x with E along +y, B must be along +z (since ĵ × k̂ = î)."
      />
      <EquationLadder
        title="The wave parameters form a network, not isolated facts"
        steps={[
          { label: "Wave number", equation: String.raw`k = \frac{2\pi}{\lambda}`, tag: "8.8" },
          { label: "Angular frequency — Maxwell's relation", equation: String.raw`\omega = ck`, tag: "8.9(a)" },
          { label: "Rearrange for c", equation: String.raw`c = \frac{\omega}{k}`, note: "Speed as angular frequency ÷ wave number." },
          { label: "Frequency × wavelength", equation: String.raw`\nu\lambda = c`, final: true, tag: "8.9(b)" },
        ]}
      />
      <FieldRatio />
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <MetricCard
          label="Momentum of an EM wave"
          value="p = U/c"
          description="An EM wave carrying energy U also carries momentum U/c along its direction of propagation, even though it has no mass."
        />
        <MetricCard
          label="Self-sustaining in vacuum"
          value="No medium"
          description="EM waves are self-sustaining oscillations of E and B in free space — no material medium is involved in the vibrations (unlike mechanical waves)."
        />
      </div>
      <SpeedLayers />
      <PropagationExplorer />
      <MistakeCard
        mistake="Believing EM waves need a medium, or that their speed in a medium is still c."
        correction="EM waves are self-sustaining in vacuum and need no medium. In a material of permittivity ε and permeability μ the speed becomes v = 1/√(με), which is how refractive index is defined."
      />
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard
          label="Phase of E & B"
          value="Same phase"
          description="E and B oscillate together — their maxima and minima occur at the same points in space and time."
        />
        <MetricCard
          label="Wave behaviour"
          value="Superposition"
          description="EM waves obey the principle of superposition and exhibit reflection, refraction, interference, diffraction and polarisation."
        />
        <MetricCard
          label="Frequency across media"
          value="Unchanged"
          description="Speed and wavelength change on entering another medium, but frequency stays the same — identical in vacuum and air."
        />
      </div>

      <Expandable title="QUESTIONS — Worked Examples 8.1–8.4 (wave equations)" id="h-8-3-3-questions" variant="exercise">
        <div className="space-y-10">
          <section>
            <p className="mb-2 text-sm font-extrabold text-blue-900 dark:text-blue-100">Example 8.1 — Direction of B given E and propagation</p>
            <ProblemSolution.Problem>
              <p>A plane electromagnetic wave of frequency 25 MHz travels in free space along the x-direction. At a particular point in space and time, E = 6.3 ĵ V/m. What is B at this point?</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <p>Using Eq. (8.10):</p>
              <FormulaBlock latex={String.raw`B = \frac{E}{c} = \frac{6.3\ \text{V/m}}{3 \times 10^8\ \text{m/s}} = 2.1 \times 10^{-8}\ \text{T}`} />
              <p>E is along the y-direction and the wave propagates along x. So B must be perpendicular to both — using <Formula>{String.raw`(+\hat{\mathbf{j}})\times(+\hat{\mathbf{k}}) = \hat{\mathbf{i}}`}</Formula>, B is along the z-direction:</p>
              <FormulaBlock latex={String.raw`\mathbf{B} = 2.1 \times 10^{-8}\, \mathbf{\hat{k}}\ \text{T}`} important />
            </ProblemSolution.Solution>
          </section>

          <section>
            <p className="mb-2 text-sm font-extrabold text-blue-900 dark:text-blue-100">Example 8.2 — Wave parameters from a given B</p>
            <ProblemSolution.Problem>
              <p>The magnetic field in a plane electromagnetic wave is given by <Formula>{String.raw`B_y = (2\times 10^{-7})\ \text{T}\ \sin(0.5\times 10^3 x + 1.5\times 10^{11} t)`}</Formula>. (a) What is the wavelength and frequency of the wave? (b) Write an expression for the electric field.</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <p><strong>(a)</strong> Comparing with <Formula>{String.raw`B_y = B_0\sin(2\pi x/\lambda + 2\pi t/T)`}</Formula>:</p>
              <FormulaBlock latex={String.raw`\lambda = \frac{2\pi}{0.5\times 10^3}\ \text{m} = 1.26\ \text{cm}`} />
              <FormulaBlock latex={String.raw`\nu = \frac{1.5\times 10^{11}}{2\pi} = 23.9\ \text{GHz}`} />
              <p><strong>(b)</strong> From Eq. (8.10):</p>
              <FormulaBlock latex={String.raw`E_0 = B_0 c = 2\times 10^{-7} \times 3\times 10^8 = 6\times 10^1 = 60\ \text{V/m}`} />
              <p>The electric field component is perpendicular to the direction of propagation and to B, so along the z-axis:</p>
              <FormulaBlock latex={String.raw`E_z = 60\, \sin(0.5\times 10^3 x + 1.5\times 10^{11} t)\ \text{V/m}`} important />
            </ProblemSolution.Solution>
          </section>

          <section>
            <p className="mb-2 text-sm font-extrabold text-blue-900 dark:text-blue-100">Example 8.3 — Writing the E expression from ν, E₀ and the direction</p>
            <ProblemSolution.Problem>
              <p>An oscillating electric field of frequency <Formula>{String.raw`3\times 10^{10}\ \text{Hz}`}</Formula> and amplitude 30 V/m propagates in free space in the positive x-direction. Write down the expression for the electric field.</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <p><strong>Given:</strong> <Formula>{String.raw`\nu = 3\times 10^{10}\ \text{Hz}`}</Formula>, <Formula>{String.raw`E_0 = 30\ \text{V/m}`}</Formula>, direction <strong>+x</strong>.</p>
              <p>The general form is <Formula>{String.raw`E = E_0 \sin(kx - \omega t)`}</Formula> — with the minus sign because the wave travels toward <strong>+x</strong>.</p>
              <p><strong>Angular frequency:</strong></p>
              <FormulaBlock latex={String.raw`\omega = 2\pi\nu = 2\pi \times 3\times 10^{10} = 6\pi\times 10^{10}\ \text{rad/s}`} />
              <p><strong>Wavelength:</strong></p>
              <FormulaBlock latex={String.raw`\lambda = \frac{c}{\nu} = \frac{3\times 10^8}{3\times 10^{10}} = 10^{-2}\ \text{m}`} />
              <p><strong>Propagation constant:</strong></p>
              <FormulaBlock latex={String.raw`k = \frac{2\pi}{\lambda} = \frac{2\pi}{10^{-2}} = 200\pi\ \text{rad/m}`} />
              <p><strong>Final expression:</strong></p>
              <FormulaBlock latex={String.raw`E = 30 \sin(200\pi x - 6\pi\times 10^{10} t)\ \text{V/m}`} important />
            </ProblemSolution.Solution>
          </section>

          <section>
            <p className="mb-2 text-sm font-extrabold text-blue-900 dark:text-blue-100">Example 8.4 — Writing the B expression from a given E expression</p>
            <ProblemSolution.Problem>
              <p>An electromagnetic wave is represented by <Formula>{String.raw`E_x = E_m\sin(kz - \omega t)`}</Formula>. Write the equation for the magnetic field component.</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <p><strong>Direction of B:</strong> the wave travels along <strong>+z</strong> (the <Formula>{String.raw`(kz - \omega t)`}</Formula> sign) and E oscillates along <strong>+x</strong>. Using the E × B rule, <Formula>{String.raw`\hat{k} = \hat{i}\times\hat{j}`}</Formula>, so B must vibrate along <strong>+y</strong>.</p>
              <p><strong>Amplitude of B:</strong> from <Formula>{String.raw`c = \frac{E_m}{B_m}`}</Formula>:</p>
              <FormulaBlock latex={String.raw`B_m = \frac{E_m}{c}`} />
              <p><strong>Final equation:</strong></p>
              <FormulaBlock latex={String.raw`B_y = \frac{E_m}{c}\,\sin(kz - \omega t)`} important />
            </ProblemSolution.Solution>
          </section>
        </div>
      </Expandable>

      <Expandable title="Quick practice — nature, speed, peak values &amp; direction of propagation" variant="exercise">
        <ExerciseQa
          questions={[
            <>Which of the following can change the velocity of light in vacuum: (a) frequency, (b) wavelength, (c) amplitude, (d) none of these?</>,
            <>A typical plane EM wave propagates along the z-direction with E along the x-axis and B along the y-axis. Write the equations for E and B.</>,
            <>Which physical quantity does the ratio <Formula>{String.raw`E_0/B_0`}</Formula> represent?</>,
            <>The ratio <Formula>{String.raw`B_0/E_0`}</Formula> has the dimensions of: (i) velocity, (ii) acceleration, (iii) reciprocal of velocity, (iv) reciprocal of acceleration.</>,
            <>An EM wave travels in free space with <Formula>{String.raw`E_0 = 6.3\ \text{V/m}`}</Formula>. Find <Formula>{String.raw`B_0`}</Formula>.</>,
            <>The magnetic field of an EM wave is <Formula>{String.raw`B = B_0\sin(kz - \omega t)\,\hat{j}`}</Formula>. What is the direction of wave propagation?</>,
            <>The electric field of an EM wave is <Formula>{String.raw`E = E_0\sin(kz - \omega t)\,\hat{i}`}</Formula> with <Formula>{String.raw`k = 2\pi\times 10^6\ \text{m}^{-1}`}</Formula>. Find the wavelength.</>,
          ]}
          answers={[
            <><strong>(d) None of these.</strong> In vacuum <Formula>{String.raw`c = 1/\sqrt{\mu_0\varepsilon_0}`}</Formula> is fixed once and for all — it does not depend on frequency, wavelength or amplitude.</>,
            <><Formula>{String.raw`E_x = E_0\sin(kz - \omega t)`}</Formula> and <Formula>{String.raw`B_y = B_0\sin(kz - \omega t)`}</Formula>.</>,
            <><Formula>{String.raw`E_0/B_0 = c`}</Formula> — the speed of light in vacuum.</>,
            <><strong>(iii)</strong> reciprocal of velocity, since <Formula>{String.raw`B_0/E_0 = 1/c`}</Formula>.</>,
            <><Formula>{String.raw`B_0 = \frac{E_0}{c} = \frac{6.3}{3\times 10^8} = 2.1\times 10^{-8}\ \text{T}`}</Formula>.</>,
            <>Along <strong>+z</strong> — B oscillates along <strong>+y</strong>, and the <Formula>{String.raw`(kz - \omega t)`}</Formula> sign means the wave runs in the +z-direction.</>,
            <><Formula>{String.raw`\lambda = \frac{2\pi}{k} = \frac{2\pi}{2\pi\times 10^6} = 10^{-6}\ \text{m} = 1\ \mu\text{m}`}</Formula>.</>,
          ]}
        />
      </Expandable>

      <h2 id="h-8-4">8.4 Electromagnetic Spectrum</h2>
      <KeyPoint title="The electromagnetic spectrum">
        The <Highlight color="yellow">orderly distribution of EM waves by wavelength λ or frequency ν</Highlight> into distinct groups. There is{" "}
        <strong>no sharp division</strong> between one kind of wave and the next — classes are based roughly on how the waves are produced
        and/or detected. As frequency rises across the spectrum, wavelength falls — and <strong>energy rises</strong>.
      </KeyPoint>
      <SpectrumExplorer />
      <SpectrumTable />

      <Expandable title="Quick practice — spectrum order" variant="exercise">
        <ExerciseQa
          questions={[
            <>Arrange the following waves in order of <strong>increasing wavelength</strong>: microwaves, X-rays, visible, gamma rays, ultraviolet, radio, infrared.</>,
            <>Arrange the same set in order of <strong>increasing frequency</strong>.</>,
            <>Which wave has the <strong>highest frequency</strong> and <strong>shortest wavelength</strong>? Which has the <strong>lowest frequency</strong> and <strong>longest wavelength</strong>?</>,
          ]}
          answers={[
            <><Formula>{String.raw`\text{Gamma} < \text{X-rays} < \text{UV} < \text{Visible} < \text{Infrared} < \text{Microwaves} < \text{Radio}`}</Formula> — the GXUVIMR order.</>,
            <><Formula>{String.raw`\text{Radio} < \text{Microwaves} < \text{Infrared} < \text{Visible} < \text{UV} < \text{X-rays} < \text{Gamma}`}</Formula> — the exact reverse, since <Formula>{String.raw`\nu = c/\lambda`}</Formula>.</>,
            <>Gamma rays have the <Highlight color="yellow">highest frequency / shortest wavelength</Highlight>; radio waves have the <Highlight color="yellow">lowest frequency / longest wavelength</Highlight>.</>,
          ]}
        />
      </Expandable>

      <Expandable title="Quick practice — which wave for which job?" variant="exercise">
        <ExerciseQa
          questions={[
            <>Which wave is used as a <strong>diagnostic tool in medicine</strong>?</>,
            <>Which type is used to <strong>kill germs in water purifiers</strong>?</>,
            <>Which waves power <strong>cellular phones</strong> and long-distance radio/TV communication?</>,
            <>Which waves work in the <strong>remote switches of household electronics</strong> (TV remotes)?</>,
            <>Which wave drives a <strong>microwave oven</strong>, and why does it heat food?</>,
            <>Which waves are used in <strong>RADAR</strong> systems for aircraft navigation?</>,
            <>Which are used to <strong>destroy cancer cells</strong> in medicine?</>,
            <>Which type produces <strong>night-vision camera</strong> images and heat-wave photographs?</>,
            <>Excessive exposure to which waves causes <strong>sunburn and skin cancer</strong>?</>,
          ]}
          answers={[
            <>X-rays — they pass through flesh but not bone.</>,
            <>Ultraviolet rays.</>,
            <>Radio waves — 500 kHz to about 1000 MHz, including the cellular UHF band.</>,
            <>Infrared — LEDs emit IR used in TV/video/hi-fi remotes.</>,
            <>Microwaves — frequency matched to the resonant frequency of water molecules, so energy transfers to their kinetic energy and raises the temperature of any food containing water.</>,
            <>Microwaves.</>,
            <>Gamma rays — high energy gives strong penetrating power.</>,
            <>Infrared waves.</>,
            <>Ultraviolet rays.</>,
          ]}
        />
      </Expandable>

      <h2 id="h-8-rev">Key Equations — Revision Board</h2>
      <Expandable title="Key Equations — Revision Board (grid)" id="h-8-rev-board" variant="exercise">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.05] p-4 text-center shadow-sm">
            <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-300">Displacement current</p>
            <FormulaBlock latex={String.raw`i_d = \varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t}`} important />
          </div>
          <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.05] p-4 text-center shadow-sm lg:col-span-2">
            <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-300">Ampere-Maxwell law</p>
            <FormulaBlock latex={String.raw`\oint \mathbf{B}\cdot\mathrm{d}\mathbf{l} = \mu_0\left(i_c + \varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t}\right)`} important />
          </div>
          <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.05] p-4 text-center shadow-sm">
            <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-300">Speed of EM waves in vacuum</p>
            <FormulaBlock latex={String.raw`c = \frac{1}{\sqrt{\mu_0\varepsilon_0}}`} important />
          </div>
          <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.05] p-4 text-center shadow-sm">
            <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-300">Wave relations</p>
            <FormulaBlock latex={String.raw`\nu\lambda = c, \qquad k = \frac{2\pi}{\lambda}, \qquad \omega = ck`} important />
          </div>
          <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.05] p-4 text-center shadow-sm">
            <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-300">Field amplitude</p>
            <FormulaBlock latex={String.raw`B_0 = \frac{E_0}{c}`} important />
          </div>
          <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.05] p-4 text-center shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-300">Speed in a material medium</p>
            <FormulaBlock latex={String.raw`v = \frac{1}{\sqrt{\mu\varepsilon}}`} important />
          </div>
        </div>
      </Expandable>

      <h2 id="h-8-exercises">Back-of-Chapter Exercises</h2>

      <Expandable title="QUESTIONS — Back-of-Chapter Exercises 8.1–8.10" id="h-8-exercises-questions" variant="exercise">
        <div className="space-y-10">
          <section>
            <p className="mb-2 text-sm font-extrabold text-amber-900 dark:text-amber-100">Exercise 8.1 — Charging capacitor: capacitance, dV/dt, displacement current</p>
            <ProblemSolution.Problem>
              <p>Figure 8.5 shows a capacitor made of two circular plates each of radius 12 cm, separated by 5.0 cm, charged by an external source with a constant charging current of 0.15 A. (a) Calculate the capacitance and the rate of change of potential difference between the plates. (b) Obtain the displacement current across the plates. (c) Is Kirchhoff&apos;s first rule (junction rule) valid at each plate? Explain.</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <p><strong>Given:</strong> r = 12 cm = 0.12 m, d = 5.0 cm = 0.05 m, i = 0.15 A.</p>
              <p><strong>(a)</strong> Capacitance:</p>
              <FormulaBlock latex={String.raw`C = \frac{\varepsilon_0 A}{d} = \frac{8.85\times 10^{-12}\times \pi(0.12)^2}{0.05} = 8.0\times 10^{-11}\ \text{F}`} important />
              <p>Rate of change of potential difference — Q = CV, so i = C dV/dt:</p>
              <FormulaBlock latex={String.raw`\frac{\mathrm{d}V}{\mathrm{d}t} = \frac{i}{C} = \frac{0.15}{8.0\times 10^{-11}} = 1.87\times 10^9\ \text{V/s}`} important />
              <p><strong>(b)</strong> Displacement current across the plates equals the charging current:</p>
              <FormulaBlock latex={String.raw`i_d = i = 0.15\ \text{A}`} important />
              <p><strong>(c)</strong> Kirchhoff&apos;s junction rule is valid at each plate. The conduction current arriving through the wire, and the displacement current leaving through the region between the plates, are continuous — the current is the same at every point of the circuit when the displacement current is included.</p>
            </ProblemSolution.Solution>
          </section>

      <section>
            <p className="mb-2 text-sm font-extrabold text-amber-900 dark:text-amber-100">Exercise 8.2 — AC-fed capacitor: conduction current, B between plates</p>
            <ProblemSolution.Problem>
              <p>A parallel plate capacitor made of circular plates each of radius R = 6.0 cm has a capacitance C = 100 pF, connected to a 230 V ac supply with angular frequency 300 rad/s. (a) What is the rms value of the conduction current? (b) Is the conduction current equal to the displacement current? (c) Determine the amplitude of B at a point 3.0 cm from the axis between the plates.</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <p><strong>(a)</strong> For a capacitor <Formula>{String.raw`X_C = 1/(\omega C)`}</Formula>, so:</p>
              <FormulaBlock latex={String.raw`I_{\text{rms}} = \frac{V_{\text{rms}}}{X_C} = V\omega C = 230 \times 300 \times 100\times 10^{-12} = 6.9\times 10^{-6}\ \text{A}`} important />
              <p><strong>(b)</strong> Yes — inside the capacitor the conduction current is zero and the displacement current equals i (6.9 × 10⁻⁶ A rms).</p>
              <p><strong>(c)</strong> Peak current <Formula>{String.raw`I_0 = \sqrt{2}\,I_{\text{rms}} = 9.76\times 10^{-6}\ \text{A}`}</Formula>. Using <Formula>{String.raw`B(2\pi r) = \mu_0 I_d\,\frac{r^2}{R^2}`}</Formula>:</p>
              <FormulaBlock latex={String.raw`B = \frac{\mu_0 I_0\, r}{2\pi R^2} = \frac{4\pi\times 10^{-7}\times 9.76\times 10^{-6}\times 0.03}{2\pi\times (0.06)^2} = 1.63\times 10^{-11}\ \text{T}`} important />
            </ProblemSolution.Solution>
          </section>

          <section>
            <p className="mb-2 text-sm font-extrabold text-amber-900 dark:text-amber-100">Exercise 8.3 &amp; 8.6 — Same physical quantity; oscillator frequency</p>
            <ProblemSolution.Problem>
              <p><strong>8.3</strong> What physical quantity is the same for X-rays of wavelength 10⁻¹⁰ m, red light of wavelength 6800 Å and radiowaves of wavelength 500 m?</p>
              <p><strong>8.6</strong> A charged particle oscillates about its mean equilibrium position with a frequency of 10⁹ Hz. What is the frequency of the electromagnetic waves produced?</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <p><strong>8.3</strong> The <Highlight color="yellow">speed in vacuum, c</Highlight> — all electromagnetic waves travel at 3 × 10⁸ m/s regardless of wavelength.</p>
              <p><strong>8.6</strong> The wave frequency equals the oscillation frequency of the charge: <Formula>{String.raw`\nu = 10^9\ \text{Hz}`}</Formula>.</p>
            </ProblemSolution.Solution>
          </section>

          <section>
            <p className="mb-2 text-sm font-extrabold text-amber-900 dark:text-amber-100">Exercise 8.4 — Plane wave directions and wavelength</p>
            <ProblemSolution.Problem>
              <p>A plane electromagnetic wave travels in vacuum along the z-direction. What can you say about the directions of its electric and magnetic field vectors? If the frequency of the wave is 30 MHz, what is its wavelength?</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <p>The E and B vectors are <Highlight color="yellow">perpendicular to each other and to the z-direction</Highlight> — both lie in the xy-plane, mutually perpendicular.</p>
              <FormulaBlock latex={String.raw`\lambda = \frac{c}{\nu} = \frac{3\times 10^8}{30\times 10^6} = 10\ \text{m}`} important />
            </ProblemSolution.Solution>
          </section>

          <section>
            <p className="mb-2 text-sm font-extrabold text-amber-900 dark:text-amber-100">Exercise 8.5 — Wavelength band of a radio</p>
            <ProblemSolution.Problem>
              <p>A radio can tune in to any station in the 7.5 MHz to 12 MHz band. What is the corresponding wavelength band?</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <FormulaBlock latex={String.raw`\lambda_1 = \frac{3\times 10^8}{7.5\times 10^6} = 40\ \text{m},\qquad \lambda_2 = \frac{3\times 10^8}{12\times 10^6} = 25\ \text{m}`} />
              <p>The wavelength band is <Highlight color="yellow">25 m to 40 m</Highlight>.</p>
            </ProblemSolution.Solution>
          </section>

          <section>
            <p className="mb-2 text-sm font-extrabold text-amber-900 dark:text-amber-100">Exercise 8.7 — Electric field amplitude from B₀</p>
            <ProblemSolution.Problem>
              <p>The amplitude of the magnetic field part of a harmonic electromagnetic wave in vacuum is B₀ = 510 nT. What is the amplitude of the electric field part of the wave?</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <FormulaBlock latex={String.raw`E_0 = cB_0 = 3\times 10^8 \times 510\times 10^{-9} = 153\ \text{V/m}`} important />
            </ProblemSolution.Solution>
          </section>

          <section>
            <p className="mb-2 text-sm font-extrabold text-amber-900 dark:text-amber-100">Exercise 8.8 — Full wave parameters from E₀ and ν</p>
            <ProblemSolution.Problem>
              <p>Suppose that the electric field amplitude of an electromagnetic wave is E₀ = 120 N/C and its frequency is ν = 50.0 MHz. (a) Determine B₀, ω, k and λ. (b) Find expressions for E and B.</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <p><strong>(a)</strong></p>
              <FormulaBlock latex={String.raw`B_0 = \frac{E_0}{c} = \frac{120}{3\times 10^8} = 4\times 10^{-7}\ \text{T}`} />
              <FormulaBlock latex={String.raw`\omega = 2\pi\nu = 2\pi\times 50\times 10^6 = 3.14\times 10^8\ \text{rad/s}`} />
              <FormulaBlock latex={String.raw`k = \frac{\omega}{c} = \frac{3.14\times 10^8}{3\times 10^8} = 1.05\ \text{rad/m},\qquad \lambda = \frac{c}{\nu} = 6\ \text{m}`} />
              <p><strong>(b)</strong> Choosing propagation along x with E along y and B along z:</p>
              <FormulaBlock latex={String.raw`E_y = 120\, \sin(1.05 x - 3.14\times 10^8 t)\ \text{N/C}`} />
              <FormulaBlock latex={String.raw`B_z = 4\times 10^{-7}\, \sin(1.05 x - 3.14\times 10^8 t)\ \text{T}`} important />
            </ProblemSolution.Solution>
          </section>

          <section>
            <p className="mb-2 text-sm font-extrabold text-amber-900 dark:text-amber-100">Exercise 8.10 — Wavelength, B₀, and energy densities</p>
            <ProblemSolution.Problem>
              <p>In a plane electromagnetic wave, the electric field oscillates sinusoidally at a frequency of 2.0 × 10¹⁰ Hz and amplitude 48 V m⁻¹. (a) What is the wavelength? (b) What is the amplitude of the oscillating magnetic field? (c) Show that the average energy density of the E field equals the average energy density of the B field. [c = 3 × 10⁸ m s⁻¹.]</p>
            </ProblemSolution.Problem>
            <ProblemSolution.Solution>
              <p><strong>(a)</strong></p>
              <FormulaBlock latex={String.raw`\lambda = \frac{c}{\nu} = \frac{3\times 10^8}{2.0\times 10^{10}} = 1.5\times 10^{-2}\ \text{m} = 1.5\ \text{cm}`} important />
              <p><strong>(b)</strong></p>
              <FormulaBlock latex={String.raw`B_0 = \frac{E_0}{c} = \frac{48}{3\times 10^8} = 1.6\times 10^{-7}\ \text{T}`} important />
              <p><strong>(c)</strong> Average energy densities (½ of the peak values):</p>
              <FormulaBlock latex={String.raw`\bar{u}_E = \frac{1}{2}\varepsilon_0 E_0^2,\qquad \bar{u}_B = \frac{1}{2}\,\frac{B_0^2}{\mu_0}`} />
              <p>Using <Formula>{String.raw`B_0 = E_0/c`}</Formula> and <Formula>{String.raw`c^2 = 1/(\mu_0\varepsilon_0)`}</Formula>:</p>
              <FormulaBlock latex={String.raw`\bar{u}_B = \frac{1}{2\mu_0}\frac{E_0^2}{c^2} = \frac{1}{2\mu_0} E_0^2 (\mu_0\varepsilon_0) = \frac{1}{2}\varepsilon_0 E_0^2 = \bar{u}_E`} important />
              <p>The average energy density of the E field <Highlight color="green">equals</Highlight> that of the B field.</p>
            </ProblemSolution.Solution>
          </section>
        </div>
      </Expandable>
    </>
  );
}