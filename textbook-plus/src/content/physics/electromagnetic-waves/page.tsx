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
import { Timeline } from "@/components/content/process/Timeline";
import {
  PlaneWaveFigure,
  SpectrumBandFigure,
  ChargingCapacitorFigure,
} from "@/components/content/physics/EmWaveFigures";

export default function ElectromagneticWavesChapter() {
  return (
    <>
      <h2 id="h-8-1">8.1 Introduction</h2>
      <Callout type="note">
        In Chapter 4 we learnt that an <strong>electric current produces a magnetic field</strong>, and that two current-carrying wires{" "}
        <strong>exert a magnetic force</strong> on each other. In Chapter 6 we saw that a <strong>magnetic field changing with time gives rise
        to an electric field</strong>.
      </Callout>
      <p>Is the converse true — does an <Highlight color="blue">electric field changing with time</Highlight> give rise to a magnetic field?</p>
      <ul>
        <li><strong>James Clerk Maxwell (1831–1879)</strong> argued that this was indeed the case: not only an electric current but also a <strong>time-varying electric field</strong> generates a magnetic field.</li>
        <li>While applying <strong>Ampere&apos;s circuital law</strong> to find the magnetic field at a point outside a capacitor connected to a time-varying current, Maxwell noticed an <Highlight color="yellow">inconsistency</Highlight> in the law.</li>
        <li>He suggested the existence of an additional current — the <Highlight color="yellow">displacement current</Highlight> — to remove this inconsistency.</li>
      </ul>
      <KeyPoint title="Maxwell&apos;s crowning achievement">
        Maxwell formulated a set of equations — <Highlight color="yellow">Maxwell&apos;s equations</Highlight> — involving electric and magnetic
        fields and their sources. Their most important prediction is the existence of <strong>electromagnetic waves</strong>: coupled
        time-varying electric and magnetic fields that propagate in space with{" "}
        <Formula>{String.raw`c = 3 \times 10^8\ \text{m/s}`}</Formula> — very close to the speed of light, implying that{" "}
        <Highlight color="green">light is an electromagnetic wave</Highlight>.
      </KeyPoint>
      <Callout type="didyouknow">
        Maxwell&apos;s work unified the domains of <Highlight color="yellow">electricity, magnetism and light</Highlight>.{" "}
        <strong>Hertz (1885)</strong> experimentally demonstrated the existence of electromagnetic waves; their technological use by{" "}
        <strong>Marconi</strong> and others led to today&apos;s revolution in communication.
      </Callout>
      <p>The electromagnetic spectrum stretches from <strong>gamma rays (wavelength ~10⁻¹² m)</strong> to <strong>long radio waves (wavelength ~10⁶ m)</strong>.</p>

      <h2 id="h-8-2">8.2 Displacement Current</h2>
      <p>Maxwell showed that for <Highlight color="yellow">logical consistency</Highlight>, a changing electric field must also produce a magnetic field. This explains the existence of radio waves, gamma rays, visible light and all other electromagnetic waves.</p>
      <p>To see how, consider the <strong>charging of a capacitor</strong> and apply Ampere&apos;s circuital law to find the magnetic field at a point outside it:</p>
      <FormulaBlock latex={String.raw`\oint \mathbf{B}\cdot \mathrm{d}\mathbf{l} = \mu_0\, i(t)`} />
      <ChargingCapacitorFigure />
      <p>For a circular loop of radius r concentric with the wire, symmetry gives <Formula>{String.raw`B (2\pi r) = \mu_0 i(t)`}</Formula>.</p>
      <Stepper
        steps={[
          { label: "Same boundary, different surface", description: "Now take a pot-like surface that shares the loop&apos;s rim but has its bottom between the capacitor plates. A tiffin-shaped surface has a flat circular bottom between the plates." },
          { label: "The contradiction", description: "These surfaces touch no current — the right-hand side of Ampere&apos;s law is zero, while the left side is unchanged. So the law yields B = 0 at P one way, and B ≠ 0 another way." },
          { label: "Find the missing term", description: "What passes through the surface S between the plates? The electric field! As the charge Q on the plates changes, the electric flux changes — this provides the missing term." },
        ]}
      />
      <p>With plates of area A and charge Q, the field between them is <Formula>{String.raw`E = \frac{Q/A}{\varepsilon_0}`}</Formula>, perpendicular to the surface S. The electric flux through S is:</p>
      <FormulaBlock latex={String.raw`\Phi_E = E A = \frac{Q}{\varepsilon_0} \qquad (8.3)`} />
      <p>Since the charging current is <Formula>{String.raw`i = \mathrm{d}Q/\mathrm{d}t`}</Formula>:</p>
      <FormulaBlock latex={String.raw`\frac{\mathrm{d}\Phi_E}{\mathrm{d}t} = \frac{1}{\varepsilon_0}\frac{\mathrm{d}Q}{\mathrm{d}t} \;\Rightarrow\; \varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t} = i \qquad (8.4)`} />
      <p>This is the missing term. Adding <Formula>{String.raw`\varepsilon_0\,\mathrm{d}\Phi_E/\mathrm{d}t`}</Formula> to the total current gives the <Highlight color="yellow">same value i for all surfaces</Highlight> — the contradiction disappears, and B at P is non-zero no matter which surface is used.</p>

      <h3 id="h-8-2-1">Conduction vs displacement current</h3>
      <Comparison
        columns={[
          {
            title: "Conduction current i_c",
            children: (
              <ul>
                <li>Carried by the actual <strong>flow of charges</strong> in conductors.</li>
                <li>Outside the capacitor plates: <Formula>{String.raw`i_c = i,\ i_d = 0`}</Formula>.</li>
              </ul>
            ),
          },
          {
            title: "Displacement current i_d",
            children: (
              <ul>
                <li>Due to a <strong>changing electric field</strong> — <Formula>{String.raw`i_d = \varepsilon_0\,\mathrm{d}\Phi_E/\mathrm{d}t`}</Formula>.</li>
                <li>Inside the capacitor: <Formula>{String.raw`i_d = i,\ i_c = 0`}</Formula>.</li>
              </ul>
            ),
          },
        ]}
      />
      <p>The total current is:</p>
      <FormulaBlock latex={String.raw`i = i_c + i_d = i_c + \varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t} \qquad (8.5)`} important />
      <Callout type="important">
        The generalised law is known as the <Highlight color="yellow">Ampere-Maxwell law</Highlight>: the total current passing through any
        surface is the sum of the conduction and displacement currents.
      </Callout>
      <FormulaBlock latex={String.raw`\oint \mathbf{B}\cdot \mathrm{d}\mathbf{l} = \mu_0\left(i_c + \varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t}\right) \qquad (8.6)`} important />
      <ul>
        <li>The displacement current has <Highlight color="yellow">the same physical effects as conduction current</Highlight> — in all respects it acts as a source of magnetic field.</li>
        <li>For steady fields it is zero; for a charging capacitor both may be present in different regions; and in large regions there may be <strong>no conduction current but only a displacement current</strong> — yet a magnetic field is expected there.</li>
        <li>This is verified experimentally: the magnetic field at point M between the plates equals that just outside at P.</li>
      </ul>

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
      <div className="my-2 grid gap-3 sm:grid-cols-2">
        <FormulaBlock latex={String.raw`\oint \mathbf{E}\cdot\mathrm{d}\mathbf{A} = Q/\varepsilon_0`} />
        <FormulaBlock latex={String.raw`\oint \mathbf{B}\cdot\mathrm{d}\mathbf{A} = 0`} />
        <FormulaBlock latex={String.raw`\oint \mathbf{E}\cdot\mathrm{d}\mathbf{l} = -\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}`} />
        <FormulaBlock latex={String.raw`\oint \mathbf{B}\cdot\mathrm{d}\mathbf{l} = \mu_0\left(i_c + \varepsilon_0\frac{\mathrm{d}\Phi_E}{\mathrm{d}t}\right)`} />
      </div>
      <div className="my-3 grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground">
        <span>Gauss&apos;s law for electricity (left) and magnetism (right)</span>
        <span>Faraday&apos;s law (left) and Ampere-Maxwell law (right)</span>
      </div>

      <h2 id="h-8-3">8.3 Electromagnetic Waves</h2>

      <h3 id="h-8-3-1">8.3.1 Sources of electromagnetic waves</h3>
      <p>How are electromagnetic waves produced?</p>
      <ul>
        <li><strong>Stationary charges</strong> produce only electrostatic fields; <strong>charges in uniform motion (steady currents)</strong> produce magnetic fields that do not vary with time — <Highlight color="yellow">neither radiates</Highlight>.</li>
        <li>It is an important result of Maxwell&apos;s theory that <Highlight color="green">accelerated charges radiate electromagnetic waves</Highlight>.</li>
      </ul>
      <ProcessCard
        title="An oscillating charge produces an electromagnetic wave"
        steps={[
          { label: "Oscillate the charge", description: "An oscillating charge is an accelerating charge — set up with some frequency ν." },
          { label: "Oscillating E field", description: "The charge produces an oscillating electric field in space." },
          { label: "Oscillating B field", description: "The changing electric field produces an oscillating magnetic field, which in turn is a source of oscillating electric field." },
          { label: "Self-regeneration", description: "The oscillating E and B regenerate each other as the wave propagates. The wave frequency equals the oscillation frequency of the charge; the energy comes from the source." },
        ]}
      />
      <p>Why not test this with visible light directly?</p>
      <Callout type="warning">
        The frequency of yellow light is about <Formula>{String.raw`6\times 10^{14}\ \text{Hz}`}</Formula>, while even modern electronic circuits
        barely reach <Formula>{String.raw`10^{11}\ \text{Hz}`}</Formula>. The first experimental demonstration therefore had to come in the{" "}
        <strong>low frequency (radio) region</strong>.
      </Callout>
      <Timeline
        title="From prediction to communication"
        color="#7c3aed"
        events={[
          { date: "1887", label: "Hertz", detail: "First produces and observes electromagnetic waves in the laboratory (radio-wave region), verifying Maxwell&apos;s theory." },
          { date: "1894", label: "J. C. Bose (Kolkata)", detail: "Produces and observes EM waves of much shorter wavelength — 25 mm to 5 mm — still laboratory-confined." },
          { date: "Marconi (Italy)", label: "Communication era", detail: "Transmits electromagnetic waves over distances of many kilometres — the beginning of communication using electromagnetic waves." },
        ]}
      />

      <h3 id="h-8-3-2">8.3.2 Nature of electromagnetic waves</h3>
      <p>From Maxwell&apos;s equations it follows that electric and magnetic fields in an electromagnetic wave are <Highlight color="yellow">perpendicular to each other, and to the direction of propagation</Highlight>.</p>
      <p>For a plane wave propagating along the z-direction, with <strong>E along x</strong> and <strong>B along y</strong>:</p>
      <PlaneWaveFigure />
      <FormulaBlock latex={String.raw`E_x = E_0 \sin(kz - \omega t) \qquad [8.7\mathrm{(a)}]`} />
      <FormulaBlock latex={String.raw`B_y = B_0 \sin(kz - \omega t) \qquad [8.7\mathrm{(b)}]`} />
      <p>with the wave number <Formula>{String.raw`k = \frac{2\pi}{\lambda} \qquad (8.8)`}</Formula>, ω the angular frequency, and <strong>k</strong> the wave vector whose direction gives the direction of propagation.</p>
      <p>Maxwell&apos;s equations give the speed of propagation:</p>
      <FormulaBlock latex={String.raw`\omega = ck, \qquad c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} \qquad [8.9\mathrm{(a)}]`} important />
      <p>Equivalently, in terms of frequency ν and wavelength λ:</p>
      <FormulaBlock latex={String.raw`\nu\lambda = c \qquad [8.9\mathrm{(b)}]`} important />
      <p>The magnitudes of the electric and magnetic fields are related:</p>
      <FormulaBlock latex={String.raw`B_0 = \frac{E_0}{c} \qquad (8.10)`} important />
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          title="Self-sustaining in vacuum"
          definition="EM waves are self-sustaining oscillations of E and B in free space — no material medium is involved in the vibrations (unlike mechanical waves)."
          icon="🌌"
        />
        <FactCard
          title="Speed depends on the medium"
          definition="In a medium of permittivity ε and permeability μ, the velocity is v = 1/√(με). Refractive index = ratio of light speeds in two media."
          icon="💧"
        />
      </div>
      <FormulaBlock latex={String.raw`v = \frac{1}{\sqrt{\mu\varepsilon}} \qquad (8.11)`} />
      <Callout type="note">
        The velocity of electromagnetic waves in vacuum is <Highlight color="yellow">the same for all wavelengths</Highlight> to within a few
        m/s of <Formula>{String.raw`3\times 10^8`}</Formula> m/s. This constant speed is so well established that it is used to{" "}
        <strong>define a standard of length</strong>. EM waves carry energy — light from the Sun makes life on Earth possible.
      </Callout>

      <Expandable title="Example 8.1 — Direction of B given E and propagation">
        <ProblemSolution.Problem>
          <p>A plane electromagnetic wave of frequency 25 MHz travels in free space along the x-direction. At a particular point in space and time, E = 6.3 ĵ V/m. What is B at this point?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Using Eq. (8.10):</p>
          <FormulaBlock latex={String.raw`B = \frac{E}{c} = \frac{6.3\ \text{V/m}}{3 \times 10^8\ \text{m/s}} = 2.1 \times 10^{-8}\ \text{T}`} />
          <p>E is along the y-direction and the wave propagates along x. So B must be perpendicular to both — using <Formula>{String.raw`(+\hat{\mathbf{j}})\times(+\hat{\mathbf{k}}) = \hat{\mathbf{i}}`}</Formula>, B is along the z-direction:</p>
          <FormulaBlock latex={String.raw`\mathbf{B} = 2.1 \times 10^{-8}\, \mathbf{\hat{k}}\ \text{T}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 8.2 — Wave parameters from a given B">
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
      </Expandable>

      <h2 id="h-8-4">8.4 Electromagnetic Spectrum</h2>
      <p>
        Electromagnetic waves include visible light, X-rays, gamma rays, radio waves, microwaves, ultraviolet and infrared waves. Their{" "}
        <Highlight color="yellow">classification according to frequency is the electromagnetic spectrum</Highlight>. There is{" "}
        <strong>no sharp division</strong> between one kind of wave and the next — the classification is based roughly on how the waves are{" "}
        produced and/or detected.
      </p>
      <SpectrumBandFigure />
      <TableCard
        title="TABLE 8.1 — Different types of electromagnetic waves"
        headers={["Type", "Wavelength range", "Production", "Detection"]}
        rows={[
          { cells: ["Radio", "> 0.1 m", "Rapid acceleration and decelerations of electrons in aerials", "Receiver&apos;s aerials"] },
          { cells: ["Microwave", "0.1 m to 1 mm", "Klystron valve or magnetron valve", "Point contact diodes"] },
          { cells: ["Infra-red", "1 mm to 700 nm", "Vibration of atoms and molecules", "Thermopiles, Bolometer, Infrared photographic film"] },
          { cells: ["Light", "700 nm to 400 nm", "Electrons in atoms emitting when moving between energy levels", "The eye, Photocells, Photographic film"] },
          { cells: ["Ultraviolet", "400 nm to 1 nm", "Inner shell electrons in atoms moving between levels", "Photocells, Photographic film"] },
          { cells: ["X-rays", "1 nm to 10⁻³ nm", "X-ray tubes or inner shell electrons", "Photographic film, Geiger tubes, Ionisation chamber"] },
          { cells: ["Gamma rays", "< 10⁻³ nm", "Radioactive decay of the nucleus", "Photographic film, Geiger tubes, Ionisation chamber"] },
        ]}
      />

      <h3 id="h-8-4-1">8.4.1 Radio waves</h3>
      <ul>
        <li>Produced by the <Highlight color="yellow">accelerated motion of charges in conducting wires</Highlight>; used in radio and television communication.</li>
        <li>Generally from <Formula>{String.raw`500\ \text{kHz}`}</Formula> to about <Formula>{String.raw`1000\ \text{MHz}`}</Formula>.</li>
      </ul>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <MetricCard label="AM band" value="530–1710" unit="kHz" description="Amplitude modulated band." />
        <MetricCard label="Short wave bands" value="up to 54" unit="MHz" description="Short wave bands." />
        <MetricCard label="TV waves" value="54–890" unit="MHz" description="Television broadcast band." />
        <MetricCard label="FM band" value="88–108" unit="MHz" description="Frequency modulated radio band." />
      </div>
      <p>
        <Highlight color="blue">Cellular phones</Highlight> use radio waves to transmit voice communication in the{" "}
        <strong>ultrahigh frequency (UHF)</strong> band.
      </p>

      <h3 id="h-8-4-2">8.4.2 Microwaves</h3>
      <ul>
        <li>Short-wavelength radio waves with frequencies in the <Highlight color="yellow">gigahertz (GHz) range</Highlight>.</li>
        <li>Produced by special vacuum tubes: <strong>klystrons, magnetrons and Gunn diodes</strong>.</li>
      </ul>
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard label="Radar" value="Short λ" description="Suitable for aircraft navigation and 'speed guns' for fast balls, tennis serves and automobiles." />
        <MetricCard label="Microwave ovens" value="Water resonance" description="Frequency matched to the resonant frequency of water molecules — energy transfers efficiently to molecular kinetic energy." />
        <MetricCard label="Common in" value="Domestic" description="Any food containing water rises in temperature." />
      </div>

      <h3 id="h-8-4-3">8.4.3 Infrared waves</h3>
      <ul>
        <li>Produced by <Highlight color="yellow">hot bodies and molecules</Highlight>; adjacent to the long-wavelength end of the visible spectrum.</li>
        <li>Also called <strong>heat waves</strong> — water molecules in most materials readily absorb them, heating the material and its surroundings.</li>
      </ul>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          title="Greenhouse effect"
          definition="Incoming visible light passes easily through the atmosphere, is absorbed by the Earth's surface, and re-radiated as infrared. Greenhouse gases (CO₂, water vapour) trap this longer-wavelength radiation, maintaining the Earth's warmth."
          icon="🌍"
        />
        <FactCard
          title="Practical uses"
          definition="Infrared lamps for physical therapy; infrared detectors in Earth satellites (military and agriculture); semiconductor LED remotes for TVs, video recorders and hi-fi systems."
          icon="📡"
        />
      </div>

      <h3 id="h-8-4-4">8.4.4 Visible rays</h3>
      <ul>
        <li>The most familiar form — the part of the spectrum detected by the human eye.</li>
        <li>Runs from about <Formula>{String.raw`4\times 10^{14}`}</Formula> Hz to about <Formula>{String.raw`7\times 10^{14}`}</Formula> Hz, i.e. wavelengths from about <Highlight color="yellow">700 – 400 nm</Highlight>.</li>
      </ul>
      <Callout type="didyouknow">
        Different animals sense different ranges: <Highlight color="yellow">snakes can detect infrared waves</Highlight>, and the
        &ldquo;visible&rdquo; range of many insects extends well into the ultraviolet.
      </Callout>

      <h3 id="h-8-4-5">8.4.5 Ultraviolet rays</h3>
      <ul>
        <li>Covers wavelengths from about <Formula>{String.raw`4\times 10^{-7}\ \text{m (400 nm)}`}</Formula> down to <Formula>{String.raw`6\times 10^{-10}\ \text{m (0.6 nm)}`}</Formula>.</li>
        <li>Produced by special lamps and very hot bodies; the <Highlight color="yellow">Sun is an important source</Highlight>.</li>
        <li>Most of the Sun&apos;s UV is absorbed in the <strong>ozone layer</strong> at an altitude of about 40–50 km.</li>
      </ul>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          title="Harmful effects"
          definition="UV exposure induces more melanin, causing tanning. Ordinary glass absorbs UV — no tanning/sunburn through glass windows. Welders wear special goggles against UV from welding arcs."
          icon="⚠️"
        />
        <FactCard
          title="Useful applications"
          definition="UV focuses into narrow beams for LASIK eye surgery; UV lamps kill germs in water purifiers. Ozone depletion by CFCs (e.g. freon) is a matter of international concern."
          icon="🔬"
        />
      </div>

      <h3 id="h-8-4-6">8.4.6 X-rays</h3>
      <ul>
        <li>Covers wavelengths from about <Formula>{String.raw`10^{-8}\ \text{m (10 nm)}`}</Formula> down to <Formula>{String.raw`10^{-13}\ \text{m (10}^{-4}\text{ nm)}`}</Formula>.</li>
        <li>One common way to generate them: <Highlight color="yellow">bombard a metal target with high energy electrons</Highlight>.</li>
        <li>Used as a <strong>diagnostic tool in medicine</strong> and as a treatment for certain cancers.</li>
      </ul>
      <Callout type="warning">
        X-rays <Highlight color="pink">damage or destroy living tissues</Highlight>. Care must be taken to avoid unnecessary or over exposure.
      </Callout>

      <h3 id="h-8-4-7">8.4.7 Gamma rays</h3>
      <ul>
        <li>Highest frequencies of the spectrum: wavelengths from about <Formula>{String.raw`10^{-10}\ \text{m}`}</Formula> to less than <Formula>{String.raw`10^{-14}\ \text{m}`}</Formula>.</li>
        <li>Produced in <Highlight color="yellow">nuclear reactions</Highlight> and emitted by <strong>radioactive nuclei</strong>.</li>
        <li>Used in medicine to <Highlight color="green">destroy cancer cells</Highlight>.</li>
      </ul>

      <h2 id="h-8-rev">Key Equations — Revision Board</h2>
      <FormulaCard>
        <p className="text-[0.85rem] text-muted-foreground mb-2">Electromagnetic Waves — core relations</p>
        <p className="text-[0.75rem] font-medium text-muted-foreground">Displacement current</p>
        <FormulaBlock latex={String.raw`i_d = \varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t}`} important />
        <p className="text-[0.75rem] font-medium text-muted-foreground">Ampere-Maxwell law</p>
        <FormulaBlock latex={String.raw`\oint \mathbf{B}\cdot\mathrm{d}\mathbf{l} = \mu_0\left(i_c + \varepsilon_0 \frac{\mathrm{d}\Phi_E}{\mathrm{d}t}\right)`} important />
        <p className="text-[0.75rem] font-medium text-muted-foreground">Speed of EM waves in vacuum</p>
        <FormulaBlock latex={String.raw`c = \frac{1}{\sqrt{\mu_0\varepsilon_0}}`} important />
        <p className="text-[0.75rem] font-medium text-muted-foreground">Wave relations</p>
        <FormulaBlock latex={String.raw`\nu\lambda = c, \qquad k = \frac{2\pi}{\lambda}, \qquad \omega = ck`} important />
        <p className="text-[0.75rem] font-medium text-muted-foreground">Field amplitude relation</p>
        <FormulaBlock latex={String.raw`B_0 = \frac{E_0}{c}`} important />
        <p className="text-[0.75rem] font-medium text-muted-foreground">Speed in a material medium</p>
        <FormulaBlock latex={String.raw`v = \frac{1}{\sqrt{\mu\varepsilon}}`} important />
      </FormulaCard>

      <h2 id="h-8-exercises">Back-of-Chapter Exercises</h2>

      <Expandable title="Exercise 8.1 — Charging capacitor: capacitance, dV/dt, displacement current" variant="exercise">
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
      </Expandable>

      <Expandable title="Exercise 8.2 — AC-fed capacitor: conduction current, B between plates" variant="exercise">
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
      </Expandable>

      <Expandable title="Exercise 8.3 & 8.6 — Same physical quantity; oscillator frequency" variant="exercise">
        <ProblemSolution.Problem>
          <p><strong>8.3</strong> What physical quantity is the same for X-rays of wavelength 10⁻¹⁰ m, red light of wavelength 6800 Å and radiowaves of wavelength 500 m?</p>
          <p><strong>8.6</strong> A charged particle oscillates about its mean equilibrium position with a frequency of 10⁹ Hz. What is the frequency of the electromagnetic waves produced?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p><strong>8.3</strong> The <Highlight color="yellow">speed in vacuum, c</Highlight> — all electromagnetic waves travel at 3 × 10⁸ m/s regardless of wavelength.</p>
          <p><strong>8.6</strong> The wave frequency equals the oscillation frequency of the charge: <Formula>{String.raw`\nu = 10^9\ \text{Hz}`}</Formula>.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 8.4 — Plane wave directions and wavelength" variant="exercise">
        <ProblemSolution.Problem>
          <p>A plane electromagnetic wave travels in vacuum along the z-direction. What can you say about the directions of its electric and magnetic field vectors? If the frequency of the wave is 30 MHz, what is its wavelength?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The E and B vectors are <Highlight color="yellow">perpendicular to each other and to the z-direction</Highlight> — both lie in the xy-plane, mutually perpendicular.</p>
          <FormulaBlock latex={String.raw`\lambda = \frac{c}{\nu} = \frac{3\times 10^8}{30\times 10^6} = 10\ \text{m}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 8.5 — Wavelength band of a radio" variant="exercise">
        <ProblemSolution.Problem>
          <p>A radio can tune in to any station in the 7.5 MHz to 12 MHz band. What is the corresponding wavelength band?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\lambda_1 = \frac{3\times 10^8}{7.5\times 10^6} = 40\ \text{m},\qquad \lambda_2 = \frac{3\times 10^8}{12\times 10^6} = 25\ \text{m}`} />
          <p>The wavelength band is <Highlight color="yellow">25 m to 40 m</Highlight>.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 8.7 — Electric field amplitude from B₀" variant="exercise">
        <ProblemSolution.Problem>
          <p>The amplitude of the magnetic field part of a harmonic electromagnetic wave in vacuum is B₀ = 510 nT. What is the amplitude of the electric field part of the wave?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`E_0 = cB_0 = 3\times 10^8 \times 510\times 10^{-9} = 153\ \text{V/m}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Exercise 8.8 — Full wave parameters from E₀ and ν" variant="exercise">
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
      </Expandable>

      <Expandable title="Exercise 8.10 — Wavelength, B₀, and energy densities" variant="exercise">
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
      </Expandable>

      <MistakeCard
        mistake="Applying Ampere&apos;s law (without the displacement term) across the surface that passes through the region between capacitor plates."
        correction="The full Ampere-Maxwell law must include ε₀ dΦ_E/dt. Between the plates the conduction current is zero but the displacement current ε₀ dΦ_E/dt equals the charging current — this is what keeps the magnetic field consistent for every surface."
      />
      <MistakeCard
        mistake="Thinking displacement current is the same as conduction current flowing through the dielectric."
        correction="Displacement current is not a flow of charges — it arises from the time-varying electric field. It has the same magnetic effects as a real current, but inside the capacitor there is no physical charge flow."
      />
      <MistakeCard
        mistake="Forgetting that E ⊥ B ⊥ propagation, and using inconsistent directions in problems."
        correction="Always check directions with the rule that E × B points along the direction of propagation. For propagation along +x with E along +y, B must be along +z (since ĵ × k̂ = î)."
      />
      <MistakeCard
        mistake="Believing EM waves need a medium, or that their speed in a medium is still c."
        correction="EM waves are self-sustaining in vacuum and need no medium. In a material of permittivity ε and permeability μ the speed becomes v = 1/√(με), which is how refractive index is defined."
      />
    </>
  );
}