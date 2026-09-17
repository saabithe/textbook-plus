import { Highlight } from "@/components/content/Highlight";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Comparison } from "@/components/content/Comparison";
import { OrgChart } from "@/components/content/OrgChart";
import { WaveTypesPanels } from "@/components/content/physics/WaveTypesPanels";
import { WaveAnatomyDiagram } from "@/components/content/physics/WaveAnatomyDiagram";
import { DisplacementExplorer } from "@/components/content/physics/DisplacementExplorer";

export default function WavesChapter() {
  return (
    <>
      <h2 id="w-intro">14.1 Introduction</h2>
      <p>
        A wave is a <Highlight>moving disturbance that transfers energy from one place to another without moving the
        physical matter (particles) along with it</Highlight>. The particles of the medium only oscillate about their
        mean positions — the disturbance, not the matter, travels outward.
      </p>

      <h3 id="w-classification">14.1.1 Classification of Waves</h3>
      <p>
        Waves are classified by whether they need a material medium to travel:
      </p>
      <OrgChart
        title="Classification of waves"
        nodes={[
          {
            label: "Waves",
            children: [
              { label: "Mechanical", detail: "need a medium — sound, string, water, seismic" },
              { label: "Electromagnetic", detail: "no medium needed — light, radio, X-rays" },
              { label: "Matter waves", detail: "associated with matter" },
            ],
          },
        ]}
      />

      <h3 id="w-types">14.1.2 Mechanical Waves: Transverse and Longitudinal</h3>
      <WaveTypesPanels />
      <TableCard
        caption="A transverse wave shows crests and troughs and needs a medium with shear strength; a longitudinal wave shows compressions and rarefactions and needs only compressibility, so it can travel through fluids."
        headers={["", "Transverse", "Longitudinal"]}
        rows={[
          { cells: ["Particle motion", "⟂ propagation", "∥ propagation"] },
          { cells: ["Characteristic pattern", "Crests / troughs", "Compressions / rarefactions"] },
          { cells: ["Examples", "Ripples on water, water waves, light waves, string wave", "Sound in air, spring vibrations"] },
          { cells: ["Required medium property", "Shear strength", "Compressibility"] },
          { cells: ["Fluids?", "No ✗", "Yes ✓"] },
        ]}
      />

      <Expandable variant="default" title="Example 14.1 — transverse, longitudinal or combined?">
        <ProblemSolution.Problem>
          Given below are some examples of wave motion. State in each case if the wave motion is transverse,
          longitudinal or a combination of both: (a) motion of a kink in a longitudinal spring produced by displacing one
          end of the spring sideways; (b) waves produced in a cylinder containing a liquid by moving its piston back and
          forth; (c) waves produced by a motorboat sailing in water; (d) ultrasonic waves in air produced by a vibrating
          quartz crystal.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <TableCard
            caption="Classification of wave motions"
            headers={["Case", "Type", "Reason"]}
            rows={[
              { cells: ["(a) Kink in a spring displaced sideways", "Transverse and longitudinal", "Sideways displacement sends a transverse kink along the coil; the spring also stretches and compresses longitudinally."] },
              { cells: ["(b) Piston moving back and forth in a liquid", "Longitudinal", "The piston compresses and rarefies the liquid along the cylinder axis."] },
              { cells: ["(c) Motorboat sailing in water", "Transverse and longitudinal", "Water particles move up and down as well as back and forth."] },
              { cells: ["(d) Ultrasonic waves in air from a quartz crystal", "Longitudinal", "The crystal compresses and rarefies the air along its direction of vibration."] },
            ]}
          />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercises — wave types and the nature of waves">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.19 — Explain why (five questions)</h3>
        <ProblemSolution.Problem>
          Explain why (or how): (a) in a sound wave, a displacement node is a pressure antinode and vice versa; (b) bats
          can ascertain distances, directions, nature and sizes of obstacles without any &lsquo;eyes&rsquo;; (c) a violin
          note and a sitar note may have the same frequency, yet we can distinguish between the two notes; (d) solids
          can support both longitudinal and transverse waves, but only longitudinal waves can propagate in gases; (e) the
          shape of a pulse gets distorted during propagation in a dispersive medium.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) At a displacement node the particles do not move, but the adjacent layers are alternately compressed and
            rarefied — the pressure variation is maximum there (pressure antinode); conversely, where displacement is
            maximum the pressure variation is minimum (pressure node). Pressure variation is proportional to −∂y/∂x.
          </p>
          <p>
            (b) Bats emit high-frequency ultrasonic pulses and analyse the echoes from obstacles; the time delay gives
            distance, the two ears give direction, and the intensity and pattern of the reflected pulse give the nature
            and size of the obstacle.
          </p>
          <p>
            (c) The two instruments produce different harmonics (overtones) with different relative intensities — the{" "}
            <strong>quality or timbre</strong> differs even though the fundamental (pitch) is the same.
          </p>
          <p>
            (d) Transverse waves require a shear modulus (restoring force against shear); gases have none. Longitudinal
            waves need bulk modulus, which all media possess.
          </p>
          <p>
            (e) A pulse is a superposition of components of many wavelengths. In a dispersive medium the speed depends on
            wavelength (frequency), so the components separate and the pulse shape is distorted.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="w-travelling-standing">14.1.3 Travelling and Standing Waves</h3>
      <p>
        On the basis of how they progress, waves are classified into two main types:
      </p>
      <Comparison
        columns={[
          {
            title: "Travelling (progressive) wave",
            children: (
              <>
                Any wave that travels through a medium, carrying energy from one region to another. It can be
                transverse or longitudinal.
              </>
            ),
          },
          {
            title: "Standing wave",
            children: (
              <>
                A wave pattern formed when a wave and its reflection (travelling in opposite directions) superpose,
                so the disturbance is confined with fixed nodes and antinodes.
              </>
            ),
          },
        ]}
      />

      <h3 id="w-parameters">14.1.4 Parameters of a Wave</h3>
      <ul>
        <li>
          <strong>Mean position / equilibrium position:</strong> the horizontal line around which the wave oscillates
          and along which energy is carried.
        </li>
        <li>
          <strong>Amplitude (A):</strong> the maximum displacement of a particle from the mean position.
        </li>
        <li>
          <strong>Wavelength (λ):</strong> the length of one complete wave.
        </li>
        <li>
          <strong>Crest and trough:</strong> the high points (crests) and low points (troughs) of a transverse wave.
        </li>
      </ul>
      <WaveAnatomyDiagram />

      <h2 id="w-displacement">14.2 Displacement of a Travelling Wave</h2>
      <h3 id="w-equation">14.2.1 Reading the Wave Equation</h3>
      <p>
        For a mathematical description of a travelling wave we need a function of both position x and time t: at every
        instant it must give the shape of the wave in space, and at every location it must describe the motion of the
        medium there. For a sinusoidal travelling wave that function is:
      </p>
      <FormulaBlock latex={String.raw`y(x, t) = a\,\sin(kx - \omega t + \phi)`} important />
      <p>
        Don&rsquo;t memorise it as a blob — deconstruct it. Tap each coloured term to see what it controls on the wave:
      </p>
      <DisplacementExplorer />

      <h3 id="w-wave-params">14.2.2 Wave Parameters and Formulas</h3>
      <div className="grid items-start gap-x-4 sm:grid-cols-2 [&_div.my-6]:my-2">
        <FormulaBlock label="Propagation constant (k) — wavelengths per unit distance" latex={String.raw`k = \frac{2\pi}{\lambda}`} important />
        <FormulaBlock label="Angular frequency (ω)" latex={String.raw`\omega = \frac{2\pi}{T} = 2\pi\nu`} important />
        <FormulaBlock label="Time period (T)" latex={String.raw`T = \frac{2\pi}{\omega}`} />
        <FormulaBlock label="Frequency (ν)" latex={String.raw`\nu = \frac{\omega}{2\pi}`} />
        <FormulaBlock label="Wave speed (v)" latex={String.raw`v = \frac{\lambda}{T} = \lambda\,\nu`} important />
        <FormulaBlock label="Wave speed — from ω and k" latex={String.raw`v = \frac{\omega}{k}`} important />
      </div>

      <h3 id="w-dictionary">14.2.3 Equation Dictionary</h3>
      <TableCard
        caption="Standard symbols of the travelling-wave equation"
        headers={["Symbol", "Meaning"]}
        rows={[
          { cells: ["y(x, t) / s(x, t)", "Displacement at position x, time t"] },
          { cells: ["a", "Amplitude"] },
          { cells: ["k", "Angular wave number"] },
          { cells: ["ω", "Angular frequency"] },
          { cells: ["φ", "Initial phase angle"] },
          { cells: ["kx − ωt + φ", "Phase"] },
          { cells: ["λ", "Wavelength"] },
          { cells: ["T", "Period"] },
          { cells: ["ν", "Frequency"] },
        ]}
      />

      <Expandable variant="default" title="Board Exam Numerical (Sep 2021) — parameters of a travelling wave">
        <ProblemSolution.Problem>
          A wave travelling along a string is described by y(x, t) = 0.005 sin(80.0x − 3.0t), in which the numerical
          constants are in SI units. Calculate: the amplitude (A); the wavelength (λ); the period (T) and frequency
          (f) of the wave; speed of wave (v).
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Comparing with standard equation y(x, t) = A sin(kx − ωt):</p>
          <p>(a) Amplitude (A):</p>
          <FormulaBlock latex={String.raw`A = 0.005\ \text{m}`} />
          <p>(b) Wavelength (λ): Given k = 80.0 rad/m</p>
          <FormulaBlock latex={String.raw`k = \frac{2\pi}{\lambda} \implies \lambda = \frac{2\pi}{k} = \frac{2\pi}{80} = \frac{\pi}{40}\ \text{m}`} important />
          <p>(c) Period (T) and Frequency (f): Given ω = 3.0 rad/s</p>
          <p>Time Period (T):</p>
          <FormulaBlock latex={String.raw`T = \frac{2\pi}{\omega} = \frac{2\pi}{3}\ \text{s}`} />
          <p>Frequency (f):</p>
          <FormulaBlock latex={String.raw`f = \frac{\omega}{2\pi} = \frac{3}{2\pi}\ \text{Hz}`} />
          <p>(d) Speed of Wave (v):</p>
          <FormulaBlock latex={String.raw`v = \frac{\omega}{k} = \frac{3.0}{80.0} = \frac{3}{80}\ \text{m/s}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercises — wave parameters and phase">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.5 — Is the converse true?</h3>
        <ProblemSolution.Problem>
          You have learnt that a travelling wave in one dimension is represented by a function y = f(x, t) where x and
          t must appear in the combination x − vt or x + vt, i.e. y = f(x ± vt). Is the converse true? Examine if the
          following functions for y can possibly represent a travelling wave: (a) (x − vt)²; (b) log[(x + vt)/x₀]; (c)
          1/(x + vt).
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The converse is <strong>not</strong> true. A travelling wave must represent a finite, well-behaved
            disturbance.
          </p>
          <p>(a) (x − vt)² — does not converge to a finite constant as x or t → ∞; does not represent a wave.</p>
          <p>(b) log[(x + vt)/x₀] — diverges as x + vt → ∞; not a wave.</p>
          <p>(c) 1/(x + vt) — diverges as x, t → 0; not a wave.</p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.6 — Wavelengths for a bat&rsquo;s sound</h3>
        <ProblemSolution.Problem>
          A bat emits ultrasonic sound of frequency 1000 kHz in air. If the sound meets a water surface, what is the
          wavelength of (a) the reflected sound, (b) the transmitted sound? Speed of sound in air is 340 m s⁻¹ and in
          water 1486 m s⁻¹.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) Reflected sound stays in air: λ = v/ν = 340/10⁶ = <strong>3.4 × 10⁻⁴ m</strong>.
          </p>
          <p>
            (b) The frequency does not change on transmission; λ = 1486/10⁶ = <strong>1.49 × 10⁻³ m</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.7 — Wavelength in tissue (ultrasonic scanner)</h3>
        <ProblemSolution.Problem>
          A hospital uses an ultrasonic scanner to locate tumours in a tissue. What is the wavelength of sound in the
          tissue in which the speed of sound is 1.7 km s⁻¹? The operating frequency of the scanner is 4.2 MHz.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\lambda = \frac{v}{\nu} = \frac{1.7 \times 10^{3}}{4.2 \times 10^{6}} = 4.0 \times 10^{-4}\ \text{m}`} important />
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.8 — Properties of a given wave</h3>
        <ProblemSolution.Problem>
          A transverse harmonic wave on a string is described by y(x, t) = 3.0 sin(36t + 0.018x + π/4), where x and y
          are in cm and t in s. The positive direction of x is from left to right. (a) Is this a travelling wave or a
          stationary wave? If travelling, what are the speed and direction of its propagation? (b) What are its amplitude
          and frequency? (c) What is the initial phase at the origin? (d) What is the least distance between two
          successive crests in the wave?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Comparing with y = a sin(kx + ωt + φ): (a) it is a <strong>travelling wave</strong>, moving in the{" "}
            <strong>negative x-direction</strong> (from right to left). With ω = 36 s⁻¹ and k = 0.018 cm⁻¹ = 1.8 m⁻¹:
          </p>
          <FormulaBlock latex={String.raw`v = \frac{\omega}{k} = \frac{36\ \text{s}^{-1}}{1.8\ \text{m}^{-1}} = 20\ \text{m s}^{-1}`} />
          <p>
            (b) Amplitude <strong>3.0 cm</strong>; frequency ν = ω/2π = 36/(2π) = <strong>5.73 Hz</strong>.
          </p>
          <p>(c) Initial phase at origin (x = 0, t = 0) = <strong>π/4</strong>.</p>
          <p>
            (d) Least distance between successive crests = wavelength λ = 2π/k = 2π×10⁻²/0.018 = <strong>3.49 m</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.9 — Graphs at different locations</h3>
        <ProblemSolution.Problem>
          For the wave described in Exercise 14.8, plot the displacement (y) versus (t) graphs for x = 0, 2 and 4 cm.
          What are the shapes of these graphs? In which aspects does the oscillatory motion in a travelling wave differ
          from one point to another: amplitude, frequency or phase?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            All three graphs are sine curves with the <strong>same amplitude and frequency</strong>; they differ only in{" "}
            <strong>phase</strong>. For x = 0, y(t) = 3.0 sin(36t + π/4) has period T = 2π/36 = π/18 s; for x = 2 cm and
            x = 4 cm the curves are shifted by kx relative to that of x = 0. In a travelling wave, the oscillatory motion
            from one point to another differs in <strong>phase</strong>, not in amplitude or frequency.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.10 — Phase difference between two points</h3>
        <ProblemSolution.Problem>
          For the travelling harmonic wave y(x, t) = 2.0 cos 2π(10t − 0.0080x + 0.35), where x and y are in cm and t in
          s, calculate the phase difference between the oscillatory motion of two points separated by a distance of
          (a) 4 m, (b) 0.5 m, (c) λ/2, (d) 3λ/4.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Phase difference over a separation Δx is Δφ = kΔx, with k = 2π × 0.0080 cm⁻¹ = 2π × 0.80 m⁻¹.
          </p>
          <p>(a) Δφ = 2π × 0.80 × 4 = <strong>6.4π rad</strong>.</p>
          <p>(b) Δφ = 2π × 0.80 × 0.5 = <strong>0.8π rad</strong>.</p>
          <p>(c) Δφ = 2π/λ × λ/2 = <strong>π rad</strong>.</p>
          <p>(d) Δφ = 2π/λ × 3λ/4 = <strong>3π/2 rad</strong>.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="w-speed">14.3 The Speed of a Travelling Wave</h2>
      <p>
        The speed of a mechanical wave is <Highlight>determined by the medium</Highlight> — its inertial properties and
        its elastic properties. The medium fixes the speed v; the source fixes the frequency ν; the wavelength then
        follows from λ = v/ν. Transverse and longitudinal waves in the same medium travel at different speeds, because
        they involve different elastic moduli.
      </p>

      <h3 id="w-speed-string">14.3.1 Speed of Transverse Wave in a Stretched String</h3>
      <p>
        Factors affecting speed:
      </p>
      <ul>
        <li>
          Mass per unit length (μ)
        </li>
        <li>
          Tension (T)
        </li>
      </ul>
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{T}{\mu}}`} important />
      <p>
        (where mass per unit length <Formula>{String.raw`\mu = \frac{m}{L}`}</Formula>)
      </p>
      <p>
        <Highlight>The speed depends only on the properties of the medium (T and μ)</Highlight> — not on the wavelength
        or frequency of the wave.
      </p>

      <h3 id="w-speed-sound">14.3.2 Speed of Longitudinal Waves</h3>
      <p>
        In solids:
      </p>
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{Y}{\rho}}`} important />
      <p>
        (where Y = Young&rsquo;s modulus, ρ = density)
      </p>
      <p>
        In fluids:
      </p>
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{B}{\rho}}`} important />
      <p>
        (where B = bulk modulus, ρ = density)
      </p>
      <p>
        <strong>Newton&rsquo;s assumption (isothermal process):</strong> Newton assumed sound wave propagation in gases
        to be an <strong>isothermal</strong> process. Formula given by Newton:
      </p>
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{P}{\rho}}`} />

      <h3 id="w-laplace">14.3.3 Laplace Correction</h3>
      <p>
        Sound wave propagation is rapid, making it a heat-insulated (<strong>adiabatic</strong>) process rather than
        isothermal. Laplace corrected Newton&rsquo;s formula by introducing the adiabatic exponent (γ).
      </p>
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{\gamma P}{\rho}}`} important />
      <p>
        Here γP is the adiabatic elasticity (Newton used the isothermal elasticity P). Laplace&rsquo;s relation is more
        accurate than Newton&rsquo;s formula and agrees with experimental results.
      </p>

      <Expandable variant="default" title="Board Exam Questions & Problems — wave speed">
        <ProblemSolution.Problem>
          A steel wire 100 cm long has a mass of 10 gm. If the wire is under a tension of 400 N, what is the speed of
          transverse waves in the wire? (Imp 2020)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Length L = 100 cm = 1 m; mass m = 10 gm = 0.01 kg. Mass per unit length:
          </p>
          <FormulaBlock latex={String.raw`\mu = \frac{m}{L} = \frac{0.01}{1} = 0.01\ \text{kg/m}`} />
          <p>Tension T = 400 N. Speed:</p>
          <FormulaBlock latex={String.raw`v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{400}{0.01}} = \sqrt{40000} = 200\ \text{m/s}`} important />
        </ProblemSolution.Solution>

        <ProblemSolution.Problem>
          What were the corrections made by Laplace in the formula of velocity of sound?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            1. Considered the process to be <strong>adiabatic</strong> instead of isothermal.
          </p>
          <p>
            2. Introduced γP instead of P (<Formula>{String.raw`\sqrt{\frac{\gamma P}{\rho}}`}</Formula>).
          </p>
        </ProblemSolution.Solution>

        <ProblemSolution.Problem>
          Transverse waves cannot be propagated through gases. Why?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            A transverse wave needs a restoring force against shear (shearing stress). Gases have no shear strength —
            only solids do — so only longitudinal waves (which need just compressibility) can propagate in gases.
          </p>
        </ProblemSolution.Solution>

        <ProblemSolution.Problem>
          Explain the speed of longitudinal wave and write the value of speed of sound at 0 °C after Laplace
          correction.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            In a fluid the speed of sound depends on the bulk modulus of elasticity{" "}
            <Formula>{String.raw`B = -\frac{\Delta P}{\Delta V / V}`}</Formula> and the density ρ:{" "}
            <Formula>{String.raw`v = \sqrt{\frac{B}{\rho}}`}</Formula>. In a solid bar the relevant modulus is
            Young&rsquo;s modulus Y: <Formula>{String.raw`v = \sqrt{\frac{Y}{\rho}}`}</Formula>. For air Newton&rsquo;s
            (isothermal) formula <Formula>{String.raw`v = \sqrt{\frac{P}{\rho}}`}</Formula> gives only ≈ 280 m s⁻¹;
            Laplace&rsquo;s (adiabatic) correction <Formula>{String.raw`v = \sqrt{\frac{\gamma P}{\rho}}`}</Formula>{" "}
            gives <strong>331 m s⁻¹ at 0 °C</strong>, in agreement with experiment.
          </p>
        </ProblemSolution.Solution>

        <p>
          The 12.0 m / 2.10 kg steel-wire tension problem (v = 343 m s⁻¹) is worked below as{" "}
          <strong>Exercise 14.3</strong> — T = 2.06 × 10⁴ N.
        </p>
      </Expandable>

      <Expandable variant="default" title="Example 14.3 — speed of a transverse wave on a wire">
        <ProblemSolution.Problem>
          A steel wire 0.72 m long has a mass of 5.0 × 10⁻³ kg. If the wire is under a tension of 60 N, what is the
          speed of transverse waves on the wire?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Mass per unit length of the wire:</p>
          <FormulaBlock latex={String.raw`\mu = \frac{5.0 \times 10^{-3}\ \text{kg}}{0.72\ \text{m}} = 6.9 \times 10^{-3}\ \text{kg m}^{-1}`} />
          <p>With tension T = 60 N, the speed is:</p>
          <FormulaBlock latex={String.raw`v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{60}{6.9 \times 10^{-3}}} = 93\ \text{m s}^{-1}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 14.4 — speed of sound in air at STP (Newton vs Laplace)">
        <ProblemSolution.Problem>
          Estimate the speed of sound in air at standard temperature and pressure. The mass of 1 mole of air is 29.0 ×
          10⁻³ kg. (1 mole occupies 22.4 L at STP.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The density of air at STP is:</p>
          <FormulaBlock latex={String.raw`\rho = \frac{29.0 \times 10^{-3}\ \text{kg}}{22.4 \times 10^{-3}\ \text{m}^3} = 1.29\ \text{kg m}^{-3}`} />
          <p>
            Newton&rsquo;s formula gives for air at STP (P ≈ 1.013 × 10⁵ Pa):
          </p>
          <FormulaBlock latex={String.raw`v = \sqrt{\frac{P}{\rho}} \approx 280\ \text{m s}^{-1}`} />
          <p>
            This is about <strong>15% smaller</strong> than the experimental value of 331 m s⁻¹ — Newton&rsquo;s
            assumption of isothermal pressure variations is wrong. Laplace&rsquo;s correction (adiabatic variations) uses
            v = √(γP/ρ), and for air γ = 7/5:
          </p>
          <FormulaBlock latex={String.raw`v = \sqrt{\frac{7/5 \times 1.013 \times 10^5}{1.29}} = 331.3\ \text{m s}^{-1}`} important />
          <p>which agrees with the measured speed of sound in air.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <MistakeCard
        mistake="Assuming the wave speed depends on frequency or is fixed by the source."
        correction="For a mechanical wave, v is fixed by the medium's inertial and elastic properties (v = √(T/μ) for a string, v = √(B/ρ) for sound). The source sets the frequency; the wavelength then adjusts through λ = v/ν."
      />

      <MistakeCard
        mistake="Using the isothermal bulk modulus (Newton's formula) for sound in gases."
        correction="Sound variations are too fast for heat to flow, so they are adiabatic: use B = γP and v = √(γP/ρ). Newton's isothermal value (~280 m s⁻¹ for air) is ~15% too low; Laplace's correction (γ = 7/5) gives 331.3 m s⁻¹, matching experiment."
      />

      <Expandable variant="exercise" title="Exercises — wave speed in strings and sound in air">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.1 — Travel time of a transverse jerk</h3>
        <ProblemSolution.Problem>
          A string of mass 2.50 kg is under a tension of 200 N. The length of the stretched string is 20.0 m. If the
          transverse jerk is struck at one end of the string, how long does the disturbance take to reach the other end?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Linear mass density μ = 2.50/20.0 = 0.125 kg m⁻¹. Wave speed:</p>
          <FormulaBlock latex={String.raw`v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{200}{0.125}} = 40\ \text{m s}^{-1}`} />
          <p>
            Time taken = L/v = 20.0/40 = <strong>0.5 s</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.2 — When is the splash heard?</h3>
        <ProblemSolution.Problem>
          A stone dropped from the top of a tower of height 300 m splashes into the water of a pond near the base of the
          tower. When is the splash heard at the top given that the speed of sound in air is 340 m s⁻¹? (g = 9.8 m s⁻².)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Time of fall: s = ½gt₁², so t₁ = √(2×300/9.8) = √61.2 = <strong>7.82 s</strong>.
          </p>
          <p>
            Time for sound to travel up: t₂ = 300/340 = <strong>0.88 s</strong>. Total time = t₁ + t₂ ={" "}
            <strong>8.7 s</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.3 — Tension to match speed of sound</h3>
        <ProblemSolution.Problem>
          A steel wire has a length of 12.0 m and a mass of 2.10 kg. What should be the tension in the wire so that the
          speed of a transverse wave on the wire equals the speed of sound in dry air at 20 °C = 343 m s⁻¹?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>μ = 2.10/12.0 = 0.175 kg m⁻¹. Since v = √(T/μ):</p>
          <FormulaBlock latex={String.raw`T = \mu v^2 = 0.175 \times (343)^2 = 2.06 \times 10^{4}\ \text{N}`} important />
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.4 — Pressure, temperature and humidity</h3>
        <ProblemSolution.Problem>
          Use the formula v = √(γP/ρ) to explain why the speed of sound in air (a) is independent of pressure,
          (b) increases with temperature, (c) increases with humidity.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            For an ideal gas, P/ρ = RT/M (1 mole), so v = √(γRT/M).
          </p>
          <p>
            (a) At constant temperature, RT/M is fixed, so the speed is <strong>independent of pressure</strong> — P and
            ρ change together, leaving P/ρ unchanged.
          </p>
          <p>
            (b) v ∝ √T — the speed <strong>increases with temperature</strong>.
          </p>
          <p>
            (c) Water vapour (M = 18) is lighter than N₂ (M = 28) and O₂ (M = 32). Humid air has a larger proportion of
            water molecules, so its average density ρ is <em>lower</em>; since v ∝ 1/√ρ, the speed{" "}
            <strong>increases with humidity</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.16 — Speed of sound in a steel rod</h3>
        <ProblemSolution.Problem>
          A steel rod 100 cm long is clamped at its middle. The fundamental frequency of longitudinal vibrations of the
          rod is given to be 2.53 kHz. What is the speed of sound in steel?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Clamped at the middle, the rod has a node at its centre and antinodes at its ends in the fundamental mode: L
            = 2(λ/4), so λ = 2L = 2.0 m.
          </p>
          <FormulaBlock latex={String.raw`v = \nu\lambda = 2.53 \times 10^{3} \times 2.0 = 5060\ \text{m s}^{-1}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="w-reflection">14.4 Reflection of Waves</h2>
      <p>
        A wave meeting a boundary is reflected — with a <strong>phase change of π</strong> at a rigid boundary and{" "}
        <strong>no phase change</strong> at an open boundary. Repeated reflection between two boundaries sets up
        standing waves.
      </p>

      <h3 id="w-standing">14.4.1 Standing Waves and Normal Modes</h3>
      <p>
        A string fixed at both ends (or an air column in a pipe) reflects waves at <em>two</em> boundaries. A wave going
        in one direction is reflected at one end, travels back and is reflected at the other end, and so on, until a
        steady wave pattern — a <strong>standing</strong> or <strong>stationary wave</strong> — is set up. Consider an
        incident wave and a reflected wave of the same amplitude and wavelength travelling in opposite directions:
      </p>
      <FormulaBlock latex={String.raw`y_1 = a\,\sin(kx - \omega t),\qquad y_2 = a\,\sin(kx + \omega t)`} />
      <p>Using sin A + sin B = 2 sin[(A+B)/2] cos[(A−B)/2], the resultant is:</p>
      <FormulaBlock latex={String.raw`y(x, t) = 2a\,\sin(kx)\,\cos(\omega t)`} important />
      <p>
        The important difference from Eq. (14.2): kx and ωt appear <em>separately</em>, not in the combination kx − ωt.
        The amplitude is 2a sin kx — it varies from point to point, while each element oscillates with the same angular
        frequency and time period. There is no phase difference between the oscillations of different elements; the
        string vibrates in phase with different amplitudes at different points. The pattern moves neither right nor
        left — hence the name standing or stationary wave. <Highlight>Points where the amplitude is zero (no motion at all) are <strong>nodes</strong>; points where the
        amplitude is largest are <strong>antinodes</strong></Highlight>.
      </p>
      <p>
        The most significant feature: the boundary conditions constrain the possible wavelengths and frequencies. The
        system cannot oscillate at any arbitrary frequency; it is characterised by a set of <strong>natural
        frequencies</strong> or <strong>normal modes</strong>. For a stretched string fixed at both ends:
      </p>
      <FormulaBlock latex={String.raw`\sin kx = 0 \ \Longrightarrow\ x = \frac{n\lambda}{2};\qquad n = 0, 1, 2, 3, \dots \ \text{(nodes)}`} />
      <FormulaBlock latex={String.raw`|\sin kx| = 1 \ \Longrightarrow\ x = \left(n+\tfrac{1}{2}\right)\frac{\lambda}{2};\qquad n = 0, 1, 2, 3, \dots \ \text{(antinodes)}`} />
      <p>
        The distance between any two successive nodes (or successive antinodes) is λ/2; nodes stay fixed at all times.
        For a string of length L fixed at both ends, x = 0 and x = L are nodes, so:
      </p>
      <FormulaBlock latex={String.raw`\lambda = \frac{2L}{n},\qquad \nu = \frac{nv}{2L};\qquad n = 1, 2, 3, \dots`} important />
      <p>
        These are the natural frequencies — the normal modes. The lowest is the <strong>fundamental mode</strong> or{" "}
        <strong>first harmonic</strong>, ν₁ = v/(2L); n = 2 is the <strong>second harmonic</strong>, n = 3 the{" "}
        <strong>third harmonic</strong>, and so on. A string need not vibrate in one mode only; usually its vibration is
        a superposition of modes, some excited more strongly than others. Where a string is plucked or bowed decides
        which modes dominate — the principle behind sitar and violin.
      </p>
      <p>
        For an air column with one end closed and the other open (a glass tube partially filled with water): the closed
        end is a <strong>node</strong> (maximum pressure change, minimum displacement), the open end an{" "}
        <strong>antinode</strong> (least pressure change, maximum displacement amplitude). With the closed end at x = 0:
      </p>
      <FormulaBlock latex={String.raw`L = \left(n+\tfrac{1}{2}\right)\frac{\lambda}{2}\ \Longrightarrow\ \lambda = \frac{2L}{n+\tfrac12},\qquad \nu = \left(n+\tfrac12\right)\frac{v}{2L} = \frac{(2n+1)\,v}{4L};\qquad n = 0, 1, 2, \dots`} important />
      <p>
        The fundamental (n = 0) is v/(4L); the higher frequencies are <strong>odd harmonics</strong> — 3v/(4L), 5v/(4L),
        and so on. For a pipe open at both ends, each end is an antinode and all harmonics are generated, ν_n = nv/(2L).
        Strings and air columns can also undergo forced oscillations; <Highlight>if the external frequency is close to a
        natural frequency, the system shows <strong>resonance</strong></Highlight>. Normal modes of a circular membrane
        (as in a tabla) are
        set by the same boundary-condition physics in two dimensions.
      </p>

      <Expandable variant="default" title="Example 14.5 — harmonics of a pipe (open vs closed)">
        <ProblemSolution.Problem>
          A pipe, 30.0 cm long, is open at both ends. Which harmonic mode of the pipe resonates a 1.1 kHz source? Will
          resonance with the same source be observed if one end of the pipe is closed? Take the speed of sound in air as
          330 m s⁻¹.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>For an open pipe, the fundamentals and harmonics are ν_n = nv/(2L), n = 1, 2, 3, …:</p>
          <FormulaBlock latex={String.raw`\nu_n = \frac{n \times 330\ \text{m s}^{-1}}{2 \times 0.30\ \text{m}} = 550\,n\ \text{Hz}`} />
          <p>
            A source of 1.1 kHz = 1100 Hz = 2 × 550 Hz resonates at <strong>the second harmonic</strong> of the open
            pipe.
          </p>
          <p>
            If one end is closed, only odd harmonics are permitted, with fundamental v/(4L) = 330/(4 × 0.30) = 275 Hz.
            The source frequency 1100 Hz = 4 × 275 Hz corresponds to the fourth harmonic — an even harmonic which is{" "}
            <em>not</em> a possible mode. Hence <strong>no resonance</strong> will be observed once one end is closed.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <MistakeCard
        mistake="Comparing a standing wave to a travelling wave by its phase/amplitude behaviour."
        correction="In a progressive wave all particles have the same amplitude but different phases; in a standing wave all particles between two nodes have the same phase but different amplitudes (zero at nodes, maximum at antinodes). Only standing waves are constrained to discrete normal-mode frequencies."
      />

      <Expandable variant="exercise" title="Exercises — stationary waves, pipes and bars">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.11 — Stationary wave on a clamped string</h3>
        <ProblemSolution.Problem>
          The transverse displacement of a string (clamped at its both ends) is given by y(x, t) = 0.06 sin(2πx/3)
          cos(120πt), where x and y are in m and t in s. The length of the string is 1.5 m and its mass is 3.0 × 10⁻²
          kg. (a) Does the function represent a travelling wave or a stationary wave? (b) Interpret the wave as a
          superposition of two waves travelling in opposite directions. What is the wavelength, frequency and speed of
          each wave? (c) Determine the tension in the string.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) The function has the form 2A sin kx cos ωt — x and t appear separately — so it represents a{" "}
            <strong>stationary wave</strong>.
          </p>
          <p>
            (b) It is the sum of y = 0.03 sin(kx − ωt) and y = 0.03 sin(kx + ωt), travelling in opposite directions. With
            k = 2π/3 m⁻¹:
          </p>
          <FormulaBlock latex={String.raw`\lambda = \frac{2\pi}{k} = 3\ \text{m},\qquad \omega = 120\pi\ \Rightarrow\ \nu = \frac{\omega}{2\pi} = 60\ \text{Hz},\qquad v = \lambda\nu = 3 \times 60 = 180\ \text{m s}^{-1}`} />
          <p>
            (c) μ = (3.0 × 10⁻²)/1.5 = 0.02 kg m⁻¹; the tension is T = μv² = 0.02 × 180² = <strong>648 N</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.12 — Same frequency, phase, amplitude?</h3>
        <ProblemSolution.Problem>
          (i) For the wave on a string described in Exercise 14.11, do all the points on the string oscillate with the
          same (a) frequency, (b) phase, (c) amplitude? Explain your answers. (ii) What is the amplitude of a point
          0.375 m away from one end?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) All points vibrate with the <strong>same frequency</strong>, 60 Hz (except the nodes, which are at rest).
            (b) All points between two consecutive nodes have the <strong>same phase</strong>, since the time dependence
            cos(120πt) is the same for all. (c) The <strong>amplitude differs</strong>: A(x) = 0.06 sin(2πx/3), zero at
            nodes (x = 0, 1.5 m) and maximum at the antinode.
          </p>
          <FormulaBlock latex={String.raw`A(0.375) = 0.06\,\sin\!\left(\frac{2\pi}{3} \times 0.375\right) = 0.06\,\sin\frac{\pi}{4} = \frac{0.06}{\sqrt{2}} = 0.042\ \text{m}`} important />
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.14 — Fundamental mode of a wire</h3>
        <ProblemSolution.Problem>
          A wire stretched between two rigid supports vibrates in its fundamental mode with a frequency of 45 Hz. The
          mass of the wire is 3.5 × 10⁻² kg and its linear mass density is 4.0 × 10⁻² kg m⁻¹. What are (a) the speed of
          a transverse wave on the string, and (b) the tension in the string?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Length L = M/μ = 3.5×10⁻²/4.0×10⁻² = 0.875 m. In the fundamental mode L = λ/2, so λ = 1.75 m.
          </p>
          <p>(a) v = νλ = 45 × 1.75 = <strong>78.75 m s⁻¹</strong>.</p>
          <p>
            (b) T = μv² = 4.0×10⁻² × (78.75)² = <strong>248 N</strong> (≈ 2.5 × 10² N).
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.15 — Resonance in a tube with a piston</h3>
        <ProblemSolution.Problem>
          A metre-long tube open at one end, with a movable piston at the other end, shows resonance with a fixed
          frequency source (a tuning fork of frequency 340 Hz) when the tube length is 25.5 cm or 79.3 cm. Estimate the
          speed of sound in air at the temperature of the experiment. The edge effects may be neglected.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The tube acts as a pipe closed at one end, supporting only odd harmonics: ν = (2n−1)v/(4l). Both resonances
            correspond to the same source frequency, so:
          </p>
          <FormulaBlock latex={String.raw`\frac{(2n-1)v}{4l_1} = \frac{(2n+1)v}{4l_2}\ \Rightarrow\ \frac{2n-1}{2n+1} = \frac{25.5}{79.3} \approx \frac{1}{3}\ \Rightarrow\ n = 1`} />
          <p>
            With n = 1, the first resonance is the fundamental: v = 4νl₁ = 4 × 340 × 0.255 ={" "}
            <strong>346.8 m s⁻¹</strong>.
          </p>
        </ProblemSolution.Solution>

        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.17 — Harmonic mode of a closed pipe</h3>
        <ProblemSolution.Problem>
          A pipe 20 cm long is closed at one end. Which harmonic mode of the pipe is resonantly excited by a 430 Hz
          source? Will the same source be in resonance with the pipe if both ends are open? (Speed of sound in air is
          340 m s⁻¹.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Closed pipe: ν = (2n−1)v/(4L). For the fundamental (n = 1), v/(4L) = 340/(4 × 0.20) = 425 Hz. The 430 Hz
            source resonates the pipe in its <strong>fundamental mode</strong>.
          </p>
          <p>
            If both ends are open, harmonics are ν = mv/(2L); for resonance m = 2Lν/v = 2 × 0.20 × 430/340 = 0.506,
            which is less than 1 — no integer mode. Hence <strong>no resonance</strong> with both ends open.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="w-beats">14.5 Beats</h2>
      <p>
        Two sound waves of nearly equal frequency heard together produce an audibly distinct{" "}
        <strong>waxing and waning of intensity</strong> — <strong>beats</strong>, used by musicians while tuning.
      </p>
      <FormulaBlock latex={String.raw`\nu_{\text{beat}} = \nu_1 - \nu_2`} important />
      <Expandable variant="default" title="Example 14.6 — tuning sitar strings with beats">
        <ProblemSolution.Problem>
          Two sitar strings A and B playing the note &lsquo;Dha&rsquo; are slightly out of tune and produce beats of
          frequency 5 Hz. The tension of the string B is slightly increased and the beat frequency is found to decrease
          to 3 Hz. What is the original frequency of B if the frequency of A is 427 Hz?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Increasing the tension of a string <strong>increases</strong> its frequency. If the original frequency of B
            were greater than that of A, further increasing ν_B would increase the beat frequency. But the beat
            frequency is found to decrease, so <strong>ν_B &lt; ν_A</strong>.
          </p>
          <p>
            Since ν_A − ν_B = 5 Hz with ν_A = 427 Hz, the original frequency of B is{" "}
            <strong>ν_B = 427 − 5 = 422 Hz</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercises — beats">
        <h3 className="my-4 text-sm font-extrabold uppercase tracking-wide text-foreground">14.18 — Beats between two sitar strings</h3>
        <ProblemSolution.Problem>
          Two sitar strings A and B playing the note &lsquo;Ga&rsquo; are slightly out of tune and produce beats of
          frequency 6 Hz. The tension in string A is slightly reduced and the beat frequency is found to reduce to 3 Hz.
          If the original frequency of A is 324 Hz, what is the frequency of B?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Initially ν_A − ν_B = ±6. Reducing the tension lowers ν_A; if ν_B &gt; ν_A, decreasing ν_A would increase the
            beat frequency, but it decreases — so ν_B &lt; ν_A and ν_A − ν_B = 6.
          </p>
          <p>
            ν_B = 324 − 6 = <strong>318 Hz</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="w-board-revision">14.6 Board Revision — Standing Waves, Pipes &amp; Beats</h2>

      <h3 id="w-rev-standing">14.6.1 Standing / Stationary Waves</h3>
      <p>
        When <strong>two waves of the same amplitude, frequency, and wavelength</strong> traveling in{" "}
        <strong>opposite directions</strong> interfere with each other, they produce standing waves.
      </p>
      <p>
        <strong>Nodes (N):</strong> points in a stationary wave where the displacement is{" "}
        <strong>minimum (zero)</strong>. <strong>Antinodes (AN):</strong> points where the displacement is{" "}
        <strong>maximum</strong>.
      </p>
      <TableCard
        caption="Distances between nodes and antinodes"
        headers={["Separation", "Distance"]}
        rows={[
          { cells: ["Consecutive nodes (N − N)", "λ/2"] },
          { cells: ["Consecutive antinodes (AN − AN)", "λ/2"] },
          { cells: ["Node to adjacent antinode (N − AN)", "λ/4"] },
        ]}
      />
      <Expandable variant="exercise" title="Board questions — standing waves">
        <ExerciseQa
          questions={[
            <>How are standing waves produced? (March 2023)</>,
            <>Where will a man hear a louder sound in a stationary wave — node or antinode? (March 2023)</>,
            <>What are nodes and antinodes?</>,
          ]}
          answers={[
            <>By the interference of two waves of the same amplitude, frequency, and wavelength traveling in opposite directions.</>,
            <>At the <strong>antinode</strong>, because the displacement and sound intensity are maximum.</>,
            <><strong>Nodes:</strong> points of zero displacement. <strong>Antinodes:</strong> points of maximum displacement.</>,
          ]}
        />
      </Expandable>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <figure>
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Standing_Waves.jpg"
            alt="Standing waves on a string fixed at both ends — fundamental frequency with one loop, 2nd harmonic with two loops, 3rd harmonic with three loops"
            className="w-full h-auto rounded-lg object-contain max-h-[420px] mx-auto bg-white"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            String fixed at both ends — fundamental, 2nd and 3rd harmonics (N at both ends).
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Standing_waves_in_air_column,_open_and_closed_pipes.svg"
            alt="Standing waves in air columns — open pipe with antinodes at both ends and closed pipe with a node at the closed end"
            className="w-full h-auto rounded-lg object-contain max-h-[420px] mx-auto bg-white"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            Open pipe (AN at both ends) and closed pipe (N at closed end, AN at open end).
          </figcaption>
        </figure>
      </div>

      <h3 id="w-rev-string">14.6.2 Standing Waves in a Stretched String (Fixed at Both Ends)</h3>
      <p>
        <strong>Mode 1 (fundamental frequency / first harmonic):</strong> 2 nodes (N) at the fixed ends and 1 antinode
        (AN) in the middle.
      </p>
      <FormulaBlock latex={String.raw`l = \frac{\lambda_1}{2} \implies \lambda_1 = 2l`} />
      <FormulaBlock latex={String.raw`f_1 = \frac{v}{\lambda_1} = \frac{v}{2l}`} important />
      <p>
        <strong>Mode 2 (second harmonic / first overtone):</strong> 3 nodes and 2 antinodes.
      </p>
      <FormulaBlock latex={String.raw`l = \lambda_2`} />
      <FormulaBlock latex={String.raw`f_2 = \frac{v}{\lambda_2} = \frac{v}{l} = 2\left(\frac{v}{2l}\right) = 2f_1`} important />
      <p>
        <strong>Mode 3 (third harmonic / second overtone):</strong> 4 nodes and 3 antinodes.
      </p>
      <FormulaBlock latex={String.raw`l = \frac{3\lambda_3}{2} \implies \lambda_3 = \frac{2l}{3}`} />
      <FormulaBlock latex={String.raw`f_3 = \frac{v}{\lambda_3} = \frac{3v}{2l} = 3f_1`} important />
      <p>The frequencies form the ratio:</p>
      <FormulaBlock latex={String.raw`f_1 : f_2 : f_3 = 1 : 2 : 3`} important />

      <h3 id="w-rev-open">14.6.3 Standing Waves in an Open Organ Pipe</h3>
      <p>
        An open organ pipe is open at both ends, so <strong>antinodes (AN)</strong> form at both ends. Its equations
        and frequency modes are identical to those of a stretched string fixed at both ends:
      </p>
      <FormulaBlock latex={String.raw`f_1 = \frac{v}{2l}`} />
      <FormulaBlock latex={String.raw`f_2 = 2f_1 = \frac{v}{l}`} />
      <FormulaBlock latex={String.raw`f_3 = 3f_1 = \frac{3v}{2l}`} />
      <p>General formula for the n-th harmonic:</p>
      <FormulaBlock latex={String.raw`f_n = n \times \frac{v}{2l} \qquad (n = 1, 2, 3, \dots)`} important />
      <FormulaBlock latex={String.raw`f_1 : f_2 : f_3 = 1 : 2 : 3`} />
      <Expandable variant="exercise" title="Board questions & practice — open pipe">
        <ExerciseQa
          questions={[
            <>Draw the first two harmonics of a stretched string fixed at both ends and mark nodes and antinodes.</>,
            <>Standing waves produced in an open pipe contain: (i) fundamental only (ii) odd harmonics only (iii) even harmonics only (iv) all harmonics.</>,
          ]}
          answers={[
            <>Mode 1: one loop with N at both ends and AN in the centre. Mode 2: two loops with N at the ends and centre, AN at the quarter points (see figures above).</>,
            <><strong>(iv) all harmonics</strong> — an open pipe supports every n = 1, 2, 3, ….</>,
          ]}
        />
        <ProblemSolution.Problem>
          Which harmonic mode of the pipe is resonantly excited by 1.1 kHz in an open pipe of length 30 cm? (Velocity
          of sound v = 330 m/s.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Given: frequency f_n = 1.1 kHz = 1.1 × 10³ Hz = 1100 Hz; length l = 30 cm = 0.3 m; velocity v = 330 m/s.
            Using the formula:
          </p>
          <FormulaBlock latex={String.raw`f_n = n \times \frac{v}{2l}`} />
          <FormulaBlock latex={String.raw`1100 = n \times \frac{330}{2 \times 0.3} = n \times \frac{330}{0.6} = n \times 550`} />
          <FormulaBlock latex={String.raw`n = \frac{1100}{550} = 2`} important />
          <p>
            Equivalently: 1.1 × 10³ = n × 330/(2 × 30 × 10⁻²) ⟹ n = 2. The pipe is excited in the{" "}
            <strong>2nd harmonic</strong> mode.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="w-rev-closed">14.6.4 Standing Waves in a Closed Organ Pipe</h3>
      <p>
        A closed organ pipe is closed at one end and open at the other: a <strong>node (N)</strong> at the closed end
        and an <strong>antinode (AN)</strong> at the open end.
      </p>
      <p>
        <strong>Mode 1 (fundamental / first harmonic):</strong> 1 node at the closed end, 1 antinode at the open end.
      </p>
      <FormulaBlock latex={String.raw`l = \frac{\lambda_1}{4} \implies \lambda_1 = 4l`} />
      <FormulaBlock latex={String.raw`f_1 = \frac{v}{\lambda_1} = \frac{v}{4l}`} important />
      <p>
        <strong>Mode 2 (third harmonic / first overtone):</strong> 2 nodes and 2 antinodes.
      </p>
      <FormulaBlock latex={String.raw`l = \frac{3\lambda_2}{4} \implies \lambda_2 = \frac{4l}{3}`} />
      <FormulaBlock latex={String.raw`f_2 = \frac{v}{\lambda_2} = \frac{3v}{4l} = 3f_1`} important />
      <p>
        <strong>Mode 3 (fifth harmonic / second overtone):</strong> 3 nodes and 3 antinodes.
      </p>
      <FormulaBlock latex={String.raw`l = \frac{5\lambda_3}{4} \implies \lambda_3 = \frac{4l}{5}`} />
      <FormulaBlock latex={String.raw`f_3 = \frac{v}{\lambda_3} = \frac{5v}{4l} = 5f_1`} important />
      <FormulaBlock latex={String.raw`f_1 : f_2 : f_3 = 1 : 3 : 5`} important />
      <p>
        Only <strong>odd harmonics</strong> are present in a closed organ pipe.
      </p>
      <Expandable variant="exercise" title="Board question — closed pipe (June 2022, 4 marks)">
        <ExerciseQa
          questions={[
            <>(a) Draw the waveforms of the first two harmonics in a closed pipe. (b) Show that the first two harmonic frequencies are in the ratio 1 : 3.</>,
          ]}
          answers={[
            <>(a) Mode 1: quarter wave with N at the closed bottom and AN at the open top. Mode 2: three-quarter wave with an additional node–antinode pair (see figures above). (b) With <Formula>{String.raw`f_1 = \frac{v}{4l}`}</Formula> and <Formula>{String.raw`f_2 = \frac{3v}{4l}`}</Formula>, the ratio is f₁/f₂ = 1/3, i.e. <strong>1 : 3</strong>.</>,
          ]}
        />
      </Expandable>

      <h3 id="w-rev-beats">14.6.5 Beats — Board Capsule</h3>
      <p>
        A phenomenon caused by the interference of <strong>two sound waves of nearly the same frequency and
        amplitude</strong> traveling in the <strong>same direction</strong>.
      </p>
      <FormulaBlock latex={String.raw`\text{Beat frequency} = f_2 - f_1`} important />
      <p>
        Used in the <strong>tuning of musical instruments</strong>.
      </p>

      <h3 id="w-rev-speed">14.6.6 Speed Drill</h3>
      <Expandable variant="default" title="Speed drill — wave velocity problems">
        <ProblemSolution.Problem>
          A wave is described by y(x, t) = 0.02 sin(4πx − 200πt). What is the velocity of the wave?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Comparing with y(x, t) = a sin(kx − ωt): k = 4π rad m⁻¹ and ω = 200π rad s⁻¹.</p>
          <FormulaBlock latex={String.raw`v = \frac{\omega}{k} = \frac{200\pi}{4\pi} = 50\ \text{m s}^{-1}`} important />
          <p>The minus sign gives propagation along <strong>+x</strong>.</p>
        </ProblemSolution.Solution>
        <ProblemSolution.Problem>
          Find the velocity of a transverse wave in a stretched string if the tension is 100 N and the linear mass
          density is 0.04 kg/m.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{100}{0.04}} = \sqrt{2500} = 50\ \text{m s}^{-1}`} important />
        </ProblemSolution.Solution>
      </Expandable>

    </>
  );
}