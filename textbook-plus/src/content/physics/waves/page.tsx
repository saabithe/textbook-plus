import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function WavesChapter() {
  return (
    <>
      <h2 id="w-intro">14.1 Introduction</h2>
      <p>
        In the previous chapter we studied objects oscillating in isolation. What happens when many such objects form
        a collection? A material medium is one such example: elastic forces bind the constituents to each other, so the
        motion of one affects that of the other. Drop a little pebble into a pond of still water — the water surface gets
        disturbed, and the disturbance does not stay at one place but propagates outward along a circle. Drop the
        pebbles repeatedly and you see circles rapidly moving outward. It gives a feeling as if the water itself is
        moving outward. Put some cork pieces on the disturbed surface and you will see that they bob up and down but do
        not move away from the centre of disturbance. The water mass does not flow outward with the circles — rather, a{" "}
        <em>moving disturbance</em> is created. Similarly, when we speak, sound moves outward from us without any flow
        of air from one part of the medium to another. These patterns, which move without the actual physical transfer
        or flow of matter as a whole, are called <strong>waves</strong>.
      </p>
      <p>
        Waves transport energy, and the disturbance pattern carries information that propagates from one point to
        another — all our communications essentially depend on transmission of signals through waves. Speech means
        production of sound waves in air; hearing amounts to their detection. Often, communication involves different
        kinds of waves: sound waves may be converted into an electric current signal, which in turn may generate an
        electromagnetic wave transmitted by an optical cable or via a satellite, the original signal being recovered in
        reverse order at the detector.
      </p>
      <p>
        Not all waves require a medium for their propagation. Light waves travel through vacuum — the light of stars
        hundreds of light years away reaches us through interstellar space, which is practically a vacuum. There are
        three kinds of waves:
      </p>
      <TableCard
        caption="14.1 Table — Kinds of waves"
        headers={["Type", "Medium required?", "Examples"]}
        rows={[
          { cells: ["Mechanical", "Yes — cannot propagate through vacuum; involve oscillations of constituents, depend on elastic properties", "String, water, sound, seismic waves"] },
          { cells: ["Electromagnetic", "No — can travel through vacuum; in vacuum all move at c = 299, 792, 458 m s⁻¹", "Light, radio waves, X-rays"] },
          { cells: ["Matter", "Associated with constituents of matter (quantum mechanical)", "Waves of electrons, protons, atoms, molecules — used in electron microscopes"] },
        ]}
      />
      <p>
        In this chapter we study <strong>mechanical waves</strong>, which require a material medium for their
        propagation. The first scientific analysis of wave motion dates back to the seventeenth century; physicists
        associated with it include Christiaan Huygens (1629–1695), Robert Hooke and Isaac Newton. Waves in elastic media
        are intimately connected with harmonic oscillations — stretched strings, coiled springs and air are elastic
        media.
      </p>
      <p>
        Consider a collection of springs connected to one another (Fig 14.1): if the spring at one end is pulled
        suddenly and released, the disturbance travels to the other end. The first spring is disturbed from its
        equilibrium length; because the second is connected to the first, it too is stretched or compressed, and so on.
        The disturbance moves from one end to the other, but each spring only executes small oscillations about its
        equilibrium position. As a practical example, the bogies of a stationary train are coupled through springs: when
        an engine gives a push to the bogie next to it, the push is transmitted from one bogie to another without the
        entire train being bodily displaced.
      </p>
      <p>
        As a sound wave passes through air, it compresses or expands small regions, changing the density δρ of that
        region and inducing a change in pressure δp. Pressure is force per unit area, so a restoring force proportional
        to the disturbance acts just as in a spring — the quantity analogous to extension or compression of the spring
        is the change in density. A compressed region has its molecules packed together; they tend to move out into the
        adjoining region, creating a compression there and leaving a rarefaction behind. Thus compression and
        rarefaction move from region to region, making propagation possible in air. In a crystalline solid, atoms are
        arranged in a periodic lattice; displacing one atom leads to restoring forces exactly as in a spring, so we may
        picture the atoms of a lattice as points connected by springs.
      </p>

      <h2 id="w-types">14.2 Transverse and Longitudinal Waves</h2>
      <p>
        Mechanical waves involve oscillations of the constituents of the medium. If the constituents oscillate{" "}
        <strong>perpendicular</strong> to the direction of wave propagation, the wave is a{" "}
        <strong>transverse wave</strong>; if they oscillate <strong>along</strong> the direction of propagation, it is
        a <strong>longitudinal wave</strong>.
      </p>
      <p>
        A single up-and-down jerk at one end of a long string sends a single pulse along it: the elements of the string
        oscillate about their equilibrium positions normal to the direction of wave motion (Fig 14.2). If the jerk is
        continuous and periodic (sinusoidal), the resulting disturbance is a sinusoidal wave (Fig 14.3) — a transverse
        wave. A wave can be looked at in two ways: fix an instant of time and picture the shape of the wave in space;
        or fix a location and watch the oscillatory motion of a particular element in time.
      </p>
      <p>
        For longitudinal waves, take the most familiar example — sound in air (Fig 14.4). A pipe filled with air has a
        piston at one end. A single sudden push forward and pull back of the piston generates a pulse of condensations
        (higher density) and rarefactions (lower density) in the air. If the push-pull is continuous and sinusoidal, a
        sinusoidal longitudinal wave propagates along the length of the pipe; a volume element of air oscillates
        parallel to the direction of propagation.
      </p>
      <KeyPoint title="Waves vs flow of matter">
        The transverse and longitudinal waves considered are <strong>travelling</strong> or <strong>progressive</strong>{" "}
        waves, since they travel from one part of the medium to another. The medium as a whole does not move. A stream
        is motion of water as a whole; in a water wave it is the disturbance that moves, not the water. A wind (motion
        of air as a whole) should not be confused with a sound wave, which propagates a disturbance of pressure and
        density through air at rest on the whole.
      </KeyPoint>
      <p>
        In transverse waves the particle motion is normal to the direction of propagation, so every element of the
        medium undergoes a <strong>shearing strain</strong>. Transverse waves can therefore be propagated only in media
        that can sustain shearing stress — solids, not fluids. Fluids as well as solids can sustain compressive strain,
        so longitudinal waves propagate in all elastic media. In steel, both transverse and longitudinal waves can
        propagate, while air can sustain only longitudinal waves.
      </p>
      <p>
        Water-surface waves are of two kinds. <strong>Capillary waves</strong> are ripples of fairly short wavelength
        (not more than a few centimetres), restored by surface tension. <strong>Gravity waves</strong> have wavelengths
        from several metres to several hundred metres, restored by gravity, which tends to keep the surface at its
        lowest level. Their oscillations extend — with diminishing amplitude — to the very bottom, and the particle
        motion is complicated: particles not only move up and down but also back and forth. Ocean waves are therefore a
        combination of both longitudinal and transverse waves. Generally, transverse and longitudinal waves travel with
        different speeds in the same medium.
      </p>

      <h2 id="w-displacement">14.3 Displacement Relation in a Progressive Wave</h2>
      <p>
        For a mathematical description of a travelling wave we need a function of both position x and time t. At every
        instant it must give the shape of the wave in space; at every given location it must describe the motion of the
        constituent of the medium. For a sinusoidal travelling wave the corresponding function must also be sinusoidal.
        Take the wave to be transverse, with x the position of the constituents and y the displacement from equilibrium.
        A sinusoidal travelling wave is then described by:
      </p>
      <FormulaBlock latex={String.raw`y(x, t) = a\,\sin(kx - \omega t + \phi)`} important />
      <p>
        The phase constant φ in the argument means equivalently that we are considering a linear combination of sine and
        cosine functions:
      </p>
      <FormulaBlock latex={String.raw`y(x, t) = A\,\sin(kx - \omega t) + B\,\cos(kx - \omega t)`} />
      <p>From these two equations,</p>
      <FormulaBlock latex={String.raw`a = \sqrt{A^2 + B^2},\qquad \tan\phi = \frac{B}{A}`} />
      <p>
        To understand why Eq. (14.2) represents a travelling wave, fix an instant, say t = t₀: the argument of the sine
        is simply kx + a constant, so the shape of the wave at that instant is a sine wave in x. Fix a location, say x =
        x₀: the argument becomes a constant − ωt, so the displacement at that location varies sinusoidally with time —
        the constituents execute simple harmonic motion. Finally, as t increases, x must increase in the positive
        direction to keep kx − ωt + φ constant. Eq. (14.2) therefore represents a sinusoidal (harmonic) wave travelling
        along the <strong>positive</strong> direction of the x-axis, whereas
      </p>
      <FormulaBlock latex={String.raw`y(x, t) = a\,\sin(kx + \omega t + \phi)`} />
      <p>represents a wave travelling in the <strong>negative</strong> direction of the x-axis.</p>
      <p>
        In a wave, a <strong>crest</strong> is a point of maximum positive displacement and a{" "}
        <strong>trough</strong> a point of maximum negative displacement. If we mark a crest and watch how it progresses
        with time, and also mark a fixed element (say at the origin), the plots show that in the time the marked element
        completes one full oscillation the crest has advanced by a certain distance — the wavelength.
      </p>

      <h3 id="w-amp">14.3.1 Amplitude and Phase</h3>
      <p>
        Since the sine function varies between +1 and −1, the displacement y(x, t) varies between +a and −a. Taking a to
        be a positive constant, a represents the maximum displacement of the constituents from their equilibrium
        position; it is called the <strong>amplitude</strong> of the wave. (y may be positive or negative, but a is
        positive.)
      </p>
      <p>
        The quantity (kx − ωt + φ) is called the <strong>phase</strong> of the wave. Given the amplitude a, the phase
        determines the displacement at any position and at any instant. The constant φ is the phase at x = 0 and t = 0,
        called the <strong>initial phase angle</strong>. By a suitable choice of origin on the x-axis and of initial
        time, it is possible to have φ = 0 — so there is no loss of generality in dropping φ.
      </p>

      <h3 id="w-wavelength">14.3.2 Wavelength and Angular Wave Number</h3>
      <p>
        The minimum distance between two points having the same phase is the <strong>wavelength</strong> λ of the wave.
        Choosing the points of same phase to be crests (or troughs), λ is the distance between two consecutive crests
        (or troughs). Taking φ = 0 in Eq. (14.2), the displacement at t = 0 is:
      </p>
      <FormulaBlock latex={String.raw`y(x, 0) = a\,\sin kx`} />
      <p>
        Since the sine function repeats its value after every 2π change in its argument, the displacements at points x
        and x + 2πn/k are the same (n = 1, 2, 3, …). The least distance between points with the same displacement at any
        given instant is obtained by taking n = 1:
      </p>
      <FormulaBlock latex={String.raw`k = \frac{2\pi}{\lambda}\qquad\text{or}\qquad \lambda = \frac{2\pi}{k}`} important />
      <p>
        k is the <strong>angular wave number</strong> or <strong>propagation constant</strong>; its SI unit is radian
        per metre (rad m⁻¹), or simply m⁻¹. It represents 2π times the number of waves (total phase difference) per
        unit length.
      </p>

      <h3 id="w-period">14.3.3 Period, Angular Frequency and Frequency</h3>
      <p>
        Monitor the displacement of an element at a fixed location as a function of time. With φ = 0, at x = 0,
      </p>
      <FormulaBlock latex={String.raw`y(0, t) = a\,\sin(-\omega t) = -a\,\sin\omega t`} />
      <p>
        The <strong>period of oscillation</strong> of the wave is the time an element takes to complete one full
        oscillation. Since the sine function repeats after every 2π, ωT = 2π, giving:
      </p>
      <FormulaBlock latex={String.raw`\omega = \frac{2\pi}{T}`} important />
      <p>
        ω is the <strong>angular frequency</strong> of the wave, with SI unit rad s⁻¹. The <strong>frequency</strong> ν
        is the number of oscillations per second:
      </p>
      <FormulaBlock latex={String.raw`\nu = \frac{1}{T} = \frac{\omega}{2\pi}`} />
      <p>
        measured in hertz. In a longitudinal wave, the displacement of an element is parallel to the direction of
        propagation, and the displacement function is written as:
      </p>
      <FormulaBlock latex={String.raw`s(x, t) = a\,\sin(kx - \omega t + \phi)`} />
      <p>
        where s(x, t) is the displacement of an element in the direction of propagation at position x and time t; all
        other quantities have the same meaning as for a transverse wave.
      </p>
      <TableCard
        caption="14.2 Table — Standard symbols of Eq. (14.2)"
        headers={["Symbol", "Meaning"]}
        rows={[
          { cells: ["y(x, t) / s(x, t)", "Displacement as a function of position x and time t"] },
          { cells: ["a", "Amplitude of the wave (maximum displacement)"] },
          { cells: ["ω", "Angular frequency of the wave (rad s⁻¹), ω = 2π/T"] },
          { cells: ["k", "Angular wave number (rad m⁻¹), k = 2π/λ"] },
          { cells: ["kx − ωt + φ", "Phase; φ is the initial phase angle (at x = 0, t = 0)"] },
        ]}
      />

      <h2 id="w-speed">14.4 The Speed of a Travelling Wave</h2>
      <p>
        To determine the speed of propagation, fix attention on a particular point of the wave (some fixed value of the
        phase — say a crest) and see how it moves in time. The motion of a fixed-phase point is given by:
      </p>
      <FormulaBlock latex={String.raw`kx - \omega t = \text{constant}`} />
      <p>
        As t changes, x must change so the phase remains constant. Two instants separated by a small time ∆t find the
        same phase point displaced by ∆x, with k∆x − ω∆t = 0. In the limit of vanishingly small intervals:
      </p>
      <FormulaBlock latex={String.raw`v = \frac{\mathrm{d}x}{\mathrm{d}t} = \frac{\omega}{k}`} important />
      <p>
        Relating ω to T and k to λ:
      </p>
      <FormulaBlock latex={String.raw`v = \frac{\lambda}{T} = \lambda\,\nu`} important />
      <p>
        This general relation for all progressive waves shows that in the time required for one full oscillation by any
        constituent, the wave pattern travels a distance equal to the wavelength. The speed of a mechanical wave is{" "}
        <strong>determined by the medium</strong> — its inertial properties (linear mass density μ for strings, mass
        density in general) and elastic properties (Young&rsquo;s, shear or bulk modulus). The medium fixes v; Eq.
        (14.12) then relates wavelength to frequency for that speed. As noted, the same medium can support transverse
        and longitudinal waves, which travel at different speeds.
      </p>

      <h3 id="w-speed-string">14.4.1 Speed of a Transverse Wave on a Stretched String</h3>
      <p>
        The speed is expected to be directly related to the restoring force and inversely to the inertial property. For
        a string, the restoring force is the tension T and the inertial property is the linear mass density μ = m/L
        (mass of the string divided by its length). The exact formula follows from Newton&rsquo;s laws, but a
        dimensional analysis suffices: [μ] = ML⁻¹, [T] = MLT⁻², and the quantity T/μ has dimension L²T⁻². Dimensional
        analysis leaves a constant C undetermined;
      </p>
      <FormulaBlock latex={String.raw`v = C\sqrt{\frac{T}{\mu}}`} />
      <p>
        The exact derivation gives C = 1, so the speed of transverse waves on a stretched string is:
      </p>
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{T}{\mu}}`} important />
      <p>
        The speed depends only on the properties of the medium (T and μ) — not on the wavelength or frequency of the
        wave. In higher studies you will meet waves whose speed depends on frequency; for the string it does not. Given
        the speed and the source frequency, the wavelength is fixed by:
      </p>
      <FormulaBlock latex={String.raw`\lambda = \frac{v}{\nu}`} />
      <p>
        A string&rsquo;s frequent phrase: is it transverse or longitudinal? — a question that belongs to §14.2; here we
        simply record the answer for a tensioned string.
      </p>

      <h3 id="w-speed-sound">14.4.2 Speed of a Longitudinal Wave (Speed of Sound)</h3>
      <p>
        Sound waves travel as compressions and rarefactions of small volume elements. The elastic property that
        determines the stress under compressional strain is the <strong>bulk modulus</strong> of the medium:
      </p>
      <FormulaBlock latex={String.raw`B = -\frac{\Delta P}{\Delta V/V}`} />
      <p>
        with B measured in pascals. The inertial property relevant for propagation is the mass density ρ (ML⁻³). The
        quantity B/ρ has dimensions L²T⁻², so the speed is:
      </p>
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{B}{\rho}}`} important />
      <p>
        For a linear medium, like a solid bar with negligible lateral expansion, the relevant modulus is{" "}
        <strong>Young&rsquo;s modulus</strong> Y (same dimension as the bulk modulus):
      </p>
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{Y}{\rho}}`} />
      <p>
        Liquids and solids generally have higher speeds of sound than gases because they are much harder to compress —
        their bulk moduli are much larger. Although solids and liquids also have higher densities, the increase in B
        dominates, which is why sound travels faster in them. Table 14.1 in the NCERT text lists speeds of sound in
        various media.
      </p>
      <TableCard
        caption="Values quoted in this chapter (NCERT Table 14.1 / exercises)"
        headers={["Medium", "Speed of sound (m s⁻¹)"]}
        rows={[
          { cells: ["Air at STP (0 °C)", "331"] },
          { cells: ["Dry air at 20 °C", "343"] },
          { cells: ["Water", "1486"] },
          { cells: ["Steel (from Ex 14.16)", "5060"] },
        ]}
      />
      <p>In the ideal-gas approximation, PV = Nk_BT. For an isothermal change, ∆(PV) = 0, so B = P, giving:</p>
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{P}{\rho}}`} />
      <p>
        This relation is known as <strong>Newton&rsquo;s formula</strong>. Newton assumed the pressure variations in a
        sound wave to be isothermal; the value it gives for air at STP is about 280 m s⁻¹ — nearly 15% lower than the
        experimental 331 m s⁻¹. <strong>Laplace</strong> pointed out the flaw: the pressure variations in sound are so
        fast that there is little time for heat flow, so they are <strong>adiabatic</strong>, not isothermal. For an
        adiabatic process PV^γ = constant, giving B_ad = γP, and:
      </p>
      <FormulaBlock latex={String.raw`v = \sqrt{\frac{\gamma P}{\rho}}`} important />
      <p>
        This modification is the <strong>Laplace correction</strong>. For air γ = 7/5, and the formula gives 331.3 m
        s⁻¹ — in agreement with measurement.
      </p>

      <h2 id="w-superposition">14.5 The Principle of Superposition of Waves</h2>
      <p>
        What happens when two wave pulses travelling in opposite directions cross each other? They continue to retain
        their identities after crossing. During the time they overlap, the wave pattern is different from either pulse;
        the resultant displacement is the <strong>algebraic sum</strong> of the displacements due to each pulse. This is
        the <strong>principle of superposition of waves</strong>: each pulse moves as if the others were not present,
        and since displacements can be positive or negative, the net displacement is their algebraic sum. (Fig 14.9(c)
        shows the two pulses exactly cancelling, giving zero displacement throughout.)
      </p>
      <FormulaBlock latex={String.raw`y(x, t) = y_1(x, t) + y_2(x, t)`} important />
      <p>
        More generally, if the moving waves are y₁ = f₁(x − vt), y₂ = f₂(x − vt), …, yn = fn(x − vt), the wave function
        describing the disturbance is:
      </p>
      <FormulaBlock latex={String.raw`y = f_1(x-vt) + f_2(x-vt) + \dots + f_n(x-vt) = \sum_{i=1}^{n} f_i(x-vt)`} />
      <p>The principle of superposition is basic to the phenomenon of <strong>interference</strong>.</p>
      <p>
        Consider two harmonic travelling waves on a string, both with the same ω (angular frequency) and k (wave
        number), hence the same wavelength and speed, with equal amplitudes, travelling in the positive x-direction,
        differing only in initial phase:
      </p>
      <FormulaBlock latex={String.raw`y_1(x, t) = a\,\sin(kx - \omega t),\qquad y_2(x, t) = a\,\sin(kx - \omega t + \phi)`} />
      <p>By superposition and the identity sin A + sin B = 2 sin[(A+B)/2] cos[(A−B)/2]:</p>
      <FormulaBlock latex={String.raw`y(x, t) = 2a\,\cos\!\left(\frac{\phi}{2}\right)\,\sin\!\left(kx - \omega t + \frac{\phi}{2}\right)`} important />
      <p>
        This is a harmonic travelling wave with the same frequency and wavelength, initial phase φ/2, and — the
        significant point — an amplitude that depends on the phase difference φ between the constituent waves:
      </p>
      <FormulaBlock latex={String.raw`A(\phi) = 2a\,\cos\!\left(\frac{\phi}{2}\right)`} />
      <p>
        For <strong>φ = 0</strong>, the waves are in phase and the resultant has amplitude <strong>2a</strong> — the
        largest possible value; this is <strong>constructive interference</strong>. For <strong>φ = π</strong>, the
        waves are completely out of phase and the resultant displacement is zero everywhere at all times —{" "}
        <strong>destructive interference</strong>.
      </p>
      <Callout type="note" title="Constructive and destructive interference">
        y(x, t) = 2a sin(kx − ωt) for in-phase waves (φ = 0, amplitudes add). y(x, t) = 0 for out-of-phase waves
        (φ = π, amplitudes subtract). The amplitude of the resultant lies between these two extremes for intermediate
        phase differences.
      </Callout>

      <h2 id="w-reflection">14.6 Reflection of Waves</h2>
      <p>
        So far we treated waves propagating in an unbounded medium. What happens when a pulse or wave meets a boundary?
        If the boundary is <strong>rigid</strong>, the pulse is reflected; the phenomenon of <strong>echo</strong> is an
        example of reflection by a rigid boundary. If the boundary is an interface between two different elastic media,
        part of the incident wave is reflected and part is <strong>transmitted</strong> into the second medium
        (refracted, if incident obliquely; incident and refracted waves obey Snell&rsquo;s law, and incident and
        reflected waves obey the usual laws of reflection).
      </p>
      <p>
        For a pulse meeting a rigid boundary the reflected wave has the same shape as the incident pulse but suffers a{" "}
        <strong>phase change of π (180°)</strong>, because the disturbance must have zero displacement at all times at
        the boundary. By superposition, this requires the reflected and incident waves to differ by a phase π. The same
        conclusion follows dynamically: the pulse exerts a force on the wall, and by Newton&rsquo;s third law the wall
        gives rise to a reflected pulse differing in phase by π.
      </p>
      <p>
        If the boundary is not rigid but <em>completely free to move</em> (a string tied to a freely moving ring on a
        rod), the reflected pulse has the <strong>same phase and amplitude</strong> as the incident pulse (assuming no
        energy dissipation). The net maximum displacement at the boundary is then twice the amplitude of each pulse. An
        example of a non-rigid boundary is the open end of an organ pipe.
      </p>
      <KeyPoint title="Phase change on reflection">
        A travelling wave or pulse suffers a <strong>phase change of π</strong> on reflection at a rigid boundary and{" "}
        <strong>no phase change</strong> on reflection at an open boundary. For incident y(x, t) = a sin(kx − ωt):
      </KeyPoint>
      <FormulaBlock latex={String.raw`\text{Rigid: } y_r = a\,\sin(kx - \omega t + \pi) = -a\,\sin(kx - \omega t)\qquad \text{Open: } y_r = a\,\sin(kx - \omega t + 0)`} />
      <p>At a rigid boundary, y + y_r = 0 at all times, as required by the boundary condition.</p>

      <h3 id="w-standing">14.6.1 Standing Waves and Normal Modes</h3>
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
        left — hence the name standing or stationary wave. Points where the amplitude is zero (no motion at all) are{" "}
        <strong>nodes</strong>; points where the amplitude is largest are <strong>antinodes</strong>.
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
        Strings and air columns can also undergo forced oscillations; if the external frequency is close to a natural
        frequency, the system shows <strong>resonance</strong>. Normal modes of a circular membrane (as in a tabla) are
        set by the same boundary-condition physics in two dimensions.
      </p>

      <h2 id="w-beats">14.7 Beats</h2>
      <p>
        When two harmonic sound waves of close (but not equal) frequencies are heard at the same time, we hear a sound
        of approximately the average of the two frequencies, together with an audibly distinct{" "}
        <strong>waxing and waning of intensity</strong> — <strong>beats</strong>. Musicians use this while tuning: they
        keep adjusting until a sensitive ear detects no beats.
      </p>
      <p>
        Take two waves of nearly equal angular frequencies ω₁ and ω₂, at a fixed location x = 0, equal amplitudes, and a
        choice of phase making each a cosine:
      </p>
      <FormulaBlock latex={String.raw`s_1 = a\,\cos\omega_1 t,\qquad s_2 = a\,\cos\omega_2 t`} />
      <p>
        (We use s for longitudinal displacement.) Let ω₁ be the slightly greater frequency. By superposition, using cos
        A + cos B:
      </p>
      <FormulaBlock latex={String.raw`s = 2a\,\cos\!\left(\frac{\omega_1 - \omega_2}{2}\,t\right)\,\cos\!\left(\frac{\omega_1 + \omega_2}{2}\,t\right)`} important />
      <p>
        Writing ω_b = (ω₁ − ω₂)/2 (much less than ω₁, ω₂) and ω_a = (ω₁ + ω₂)/2, the resultant oscillates at the average
        angular frequency ω_a, but its amplitude is not constant in time. It is largest whenever cos ω_b t is ±1, so the
        intensity waxes and wanes with frequency 2ω_b = ω₁ − ω₂. In terms of frequencies:
      </p>
      <FormulaBlock latex={String.raw`\nu_{\text{beat}} = \nu_1 - \nu_2`} important />
      <p>
        For example, two harmonic waves of frequency 11 Hz and 9 Hz produce beats at a frequency of 2 Hz.
      </p>
      <Callout type="note" title="Musical pillars of Nellaiappar temple">
        Temples often have pillars portraying figures playing musical instruments, but seldom do the pillars themselves
        produce music. At the Nellaiappar temple in Tamil Nadu, gentle taps on a cluster of pillars carved from a single
        piece of rock produce the basic notes of Indian classical music — Sa, Re, Ga, Ma, Pa, Dha, Ni, Sa. Vibrations
        depend on the elasticity of the stone, its density and shape. Three types exist: <strong>Shruti pillars</strong>{" "}
        (produce the basic notes — the swaras), <strong>Gana Thoongal</strong> (the ragas), and{" "}
        <strong>Laya Thoongal</strong> (the taal — beats — when tapped). The pillars at Nellaiappar are a combination of
        Shruti and Laya types. The temple dates from the 7th century and was built by successive rulers of the Pandyan
        dynasty; similar pillars exist at Hampi, Kanyakumari and Thiruvananthapuram.
      </Callout>

      <h2 id="w-examples">Worked Examples</h2>

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

      <Expandable variant="default" title="Example 14.2 — parameters of a wave along a string">
        <ProblemSolution.Problem>
          A wave travelling along a string is described by y(x, t) = 0.005 sin(80.0x − 3.0t), with the numerical
          constants in SI units (0.005 m, 80.0 rad m⁻¹, and 3.0 rad s⁻¹). Calculate (a) the amplitude, (b) the
          wavelength, (c) the period and frequency of the wave. Also calculate the displacement y of the wave at a
          distance x = 30.0 cm and time t = 20 s.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Comparing with y(x, t) = a sin(kx − ωt): (a) the amplitude of the wave is{" "}
            <strong>0.005 m = 5 mm</strong>.
          </p>
          <p>
            (b) k = 80.0 m⁻¹ and ω = 3.0 s⁻¹. The wavelength follows from λ = 2π/k:
          </p>
          <FormulaBlock latex={String.raw`\lambda = \frac{2\pi}{80.0\ \text{m}^{-1}} = 7.85 \times 10^{-2}\ \text{m} = 7.85\ \text{cm}`} />
          <p>
            (c) The period is T = 2π/ω = 2π/(3.0 s⁻¹) = <strong>2.09 s</strong>, and the frequency ν = 1/T ={" "}
            <strong>0.48 Hz</strong>.
          </p>
          <p>
            The displacement at x = 30.0 cm and t = 20 s is y = 0.005 sin(80.0 × 0.3 – 3.0 × 20)
          </p>
          <FormulaBlock latex={String.raw`y = (0.005\ \text{m})\,\sin(24 - 60) = (0.005\ \text{m})\,\sin(-36 + 12\pi) = (0.005\ \text{m})\,\sin(1.699)`} />
          <p>
            = <strong>≈ 5 mm</strong> — the displacement is approximately the amplitude, since the phase 1.699 rad is
            near π/2.
          </p>
        </ProblemSolution.Solution>
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

      <h2 id="w-exercises">Exercises 14.1 – 14.19</h2>
      <p>NCERT<sup>Reprint 2025-26</sup> exercises with hints and the essential answers.</p>

      <Expandable variant="exercise" title="Exercise 14.1 — travel time of a transverse jerk">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.2 — when is the splash heard?">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.3 — tension to match speed of sound">
        <ProblemSolution.Problem>
          A steel wire has a length of 12.0 m and a mass of 2.10 kg. What should be the tension in the wire so that the
          speed of a transverse wave on the wire equals the speed of sound in dry air at 20 °C = 343 m s⁻¹?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>μ = 2.10/12.0 = 0.175 kg m⁻¹. Since v = √(T/μ):</p>
          <FormulaBlock latex={String.raw`T = \mu v^2 = 0.175 \times (343)^2 = 2.06 \times 10^{4}\ \text{N}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.4 — pressure, temperature and humidity">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.5 — is the converse true?">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.6 — wavelengths for a bat&rsquo;s sound">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.7 — wavelength in tissue (ultrasonic scanner)">
        <ProblemSolution.Problem>
          A hospital uses an ultrasonic scanner to locate tumours in a tissue. What is the wavelength of sound in the
          tissue in which the speed of sound is 1.7 km s⁻¹? The operating frequency of the scanner is 4.2 MHz.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <FormulaBlock latex={String.raw`\lambda = \frac{v}{\nu} = \frac{1.7 \times 10^{3}}{4.2 \times 10^{6}} = 4.0 \times 10^{-4}\ \text{m}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.8 — properties of a given wave">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.9 — graphs at different locations">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.10 — phase difference between two points">
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

      <Expandable variant="exercise" title="Exercise 14.11 — stationary wave on a clamped string">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.12 — same frequency, phase, amplitude?">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.13 — classify the displacement functions">
        <ProblemSolution.Problem>
          Given below are some functions of x and t to represent the displacement (transverse or longitudinal) of an
          elastic wave. State which of these represent (i) a travelling wave, (ii) a stationary wave or (iii) none at
          all: (a) y = 2 cos(3x) sin(10t); (b) y = 2√(x − vt); (c) y = 3 sin(5x − 0.5t) + 4 cos(5x − 0.5t); (d) y = cos
          x sin t + cos 2x sin 2t.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>(a) y = 2 cos(3x) sin(10t) — <strong>stationary wave</strong> (x and t separate).</p>
          <p>(b) y = 2√(x − vt) — <strong>none</strong>; undefined for x − vt &lt; 0.</p>
          <p>
            (c) y = 3 sin(5x − 0.5t) + 4 cos(5x − 0.5t) — a single travelling wave (one k = 5, one ω = 0.5) with amplitude
            √(3² + 4²) = 5.
          </p>
          <p>
            (d) y = cos x sin t + cos 2x sin 2t — a superposition of two stationary waves, hence a{" "}
            <strong>stationary</strong> wave.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.14 — fundamental mode of a wire">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.15 — resonance in a tube with a piston">
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
      </Expandable>

      <Expandable variant="exercise" title="Exercise 14.16 — speed of sound in a steel rod">
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

      <Expandable variant="exercise" title="Exercise 14.17 — harmonic mode of a closed pipe">
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

      <Expandable variant="exercise" title="Exercise 14.18 — beats between two sitar strings">
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

      <Expandable variant="exercise" title="Exercise 14.19 — explain why (five questions)">
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

      <h2 id="w-revision">Quick Revision</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormulaCard>
          <p><strong>Progressive wave &amp; its parameters</strong></p>
          y(x, t) = a sin(kx − ωt + φ): kx − ωt + φ is the phase, φ the initial phase, a the amplitude. +x direction for
          (kx − ωt); y = a sin(kx + ωt + φ) travels along −x. λ = 2π/k; ω = 2π/T = 2πν; ν = 1/T. Longitudinal form:
          s(x, t) = a sin(kx − ωt + φ).
        </FormulaCard>
        <FormulaCard>
          <p><strong>Speed of a progressive wave</strong></p>
          v = ω/k = λν = λ/T: in one period the pattern advances one wavelength. The speed is set by the medium (inertia
          + elasticity) — not by the source; then λ = v/ν fixes the wavelength.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Speed in strings</strong></p>
          v = √(T/μ), with linear mass density μ = m/L. Speed depends on tension and mass density only — independent of
          wavelength and frequency.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Speed of sound</strong></p>
          Fluid: v = √(B/ρ); solid bar: v = √(Y/ρ). Newton: v = √(P/ρ) for a gas (isothermal, ~280 m s⁻¹ for air);
          Laplace (adiabatic): v = √(γP/ρ), γ = 7/5 for air → 331.3 m s⁻¹. v = √(γRT/M) — independent of pressure,
          ∝ √T, larger in humid air.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Superposition &amp; interference</strong></p>
          Resultant y = y₁ + y₂. Two equal waves differing by phase φ: y = 2a cos(φ/2) sin(kx − ωt + φ/2), amplitude
          A(φ) = 2a cos(φ/2). φ = 0 → constructive (2a); φ = π → destructive (0).
        </FormulaCard>
        <FormulaCard>
          <p><strong>Reflection &amp; standing waves</strong></p>
          Rigid boundary: phase reversal (y_r = −a sin(kx − ωt)); open boundary: no change. Standing wave: y = 2a sin kx
          cos ωt; nodes at x = nλ/2, antinodes at x = (n+½)λ/2, separated by λ/2. String fixed both ends: ν = nv/2L.
          Pipe closed at one end: ν = (2n+1)v/4L (odd harmonics); open pipe: ν = nv/2L.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Beats</strong></p>
          Two waves of close frequencies superpose to s = 2a cos(ω_b t) cos(ω_a t) with ω_b = (ω₁−ω₂)/2. Intensity
          waxes and wanes at the beat frequency ν_beat = ν₁ − ν₂ (e.g., 11 Hz + 9 Hz → 2 Hz beats).
        </FormulaCard>
      </div>

      <MistakeCard
        mistake="Thinking a wave involves movement of the medium itself."
        correction="A wave is a moving disturbance; the medium as a whole does not flow. A wind is motion of air, but a sound wave is propagation of compressions and rarefactions through air; cork bobs float up and down without travelling outward with the ripple."
      />
      <MistakeCard
        mistake="Classifying a wave by how it looks rather than by the particle motion relative to propagation."
        correction="Transverse: particles oscillate perpendicular to propagation (string wave). Longitudinal: parallel to propagation (sound in a pipe). Ocean surface waves look up-and-down, but the water particles also move back and forth — ocean waves are a combination of both."
      />
      <MistakeCard
        mistake="Assuming the wave speed depends on frequency or is fixed by the source."
        correction="For a mechanical wave, v is fixed by the medium's inertial and elastic properties (v = √(T/μ) for a string, v = √(B/ρ) for sound). The source sets the frequency; the wavelength then adjusts through λ = v/ν."
      />
      <MistakeCard
        mistake="Using the isothermal bulk modulus (Newton's formula) for sound in gases."
        correction="Sound variations are too fast for heat to flow, so they are adiabatic: use B = γP and v = √(γP/ρ). Newton's isothermal value (~280 m s⁻¹ for air) is ~15% too low; Laplace's correction (γ = 7/5) gives 331.3 m s⁻¹, matching experiment."
      />
      <MistakeCard
        mistake="Comparing a standing wave to a travelling wave by its phase/amplitude behaviour."
        correction="In a progressive wave all particles have the same amplitude but different phases; in a standing wave all particles between two nodes have the same phase but different amplitudes (zero at nodes, maximum at antinodes). Only standing waves are constrained to discrete normal-mode frequencies."
      />
    </>
  );
}