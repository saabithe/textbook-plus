import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function OscillationsChapter() {
  return (
    <>
      <h2 id="o-intro">13.1 Introduction</h2>
      <p>
        In daily life we come across various kinds of motions. Rectilinear motion and the motion of a projectile are{" "}
        <strong>non-repetitive</strong>. Uniform circular motion and the orbital motion of planets are{" "}
        <strong>periodic</strong> — the motion repeats after a certain interval of time. The rocking of a cradle and
        the swinging of a swing are also repetitive but different: the object moves to and fro about a mean position.
        So too the pendulum of a wall clock, a boat tossing up and down in a river, and the piston of a steam engine
        going back and forth. Such motion is called <strong>oscillatory motion</strong>.
      </p>
      <p>
        The study of oscillatory motion is basic to physics. In musical instruments (sitar, guitar, violin) we have
        vibrating strings; drum membranes and telephone/speaker diaphragms vibrate about their mean positions; the
        vibrations of air molecules make the propagation of sound possible; in a solid, atoms vibrate about their
        equilibrium positions, the average energy of vibrations being proportional to temperature; and an AC power
        supply gives a voltage that oscillates, alternately going positive and negative about the mean value zero.
      </p>
      <p>
        Describing such motion requires fundamental concepts — period, frequency, displacement, amplitude and phase —
        which we develop next.
      </p>

      <h2 id="o-periodic">13.2 Periodic and Oscillatory Motions</h2>
      <p>
        An insect climbing up a ramp and falling down, then repeating the process identically, has a height-versus-time
        graph as in Fig. 13.1(a). A child climbing a step, coming down and repeating gives Fig. 13.1(b); and the height
        of a ball bouncing between the palm and the ground gives Fig. 13.1(c), whose curved sections are parabolas from
        h = ut − ½gt². All three repeat at regular intervals. Thus, a motion that{" "}
        <strong>repeats itself at regular intervals of time</strong> is called <strong>periodic motion</strong>.
      </p>
      <p>
        Very often the body undergoing periodic motion has an <strong>equilibrium position</strong> somewhere inside its
        path. When the body is there, no net external force acts on it — left at rest, it stays there forever. If given
        a small displacement from that position, a force comes into play that tries to bring it back, giving rise to{" "}
        <strong>oscillations</strong> or <strong>vibrations</strong>. For example, a ball placed in a bowl is in
        equilibrium at the bottom; displaced a little, it oscillates in the bowl.
      </p>
      <KeyPoint title="Oscillatory vs periodic">
        Every oscillatory motion is periodic, but <strong>every periodic motion need not be oscillatory</strong>.
        Circular motion is periodic but not oscillatory. There is no significant difference between oscillations and
        vibrations — when the frequency is small we call it oscillation (a branch of a tree), when it is high we call it
        vibration (a string of a musical instrument).
      </KeyPoint>
      <p>
        <strong>Simple harmonic motion (SHM)</strong> is the simplest form of oscillatory motion: the force on the
        oscillating body is directly proportional to its displacement from the mean (equilibrium) position, and at any
        point of the oscillation it is directed towards the mean position. In practice, oscillating bodies eventually
        come to rest at their equilibrium positions because of damping due to friction and other dissipative causes,
        though they can be forced to keep oscillating by an external periodic agency (damped and forced oscillations).
      </p>
      <p>
        Any material medium can be pictured as a collection of a large number of coupled oscillators; their collective
        oscillations manifest as waves — water waves, seismic waves, electromagnetic waves. Waves are studied in the
        next chapter.
      </p>

      <h3 id="o-freq">13.2.1 Period and Frequency</h3>
      <p>
        The smallest interval of time after which the motion is repeated is called its <strong>period</strong>,
        denoted T; its SI unit is the second. For motions too fast or too slow on the scale of seconds, other convenient
        units are used: the period of a quartz crystal is expressed in microseconds (10⁻⁶ s), the orbital period of the
        planet Mercury is 88 earth days, and Halley&rsquo;s comet appears after every 76 years.
      </p>
      <p>
        The reciprocal of T is the number of repetitions per unit time — the <strong>frequency</strong> of the periodic
        motion, denoted ν (nu):
      </p>
      <FormulaBlock latex={String.raw`\nu = \frac{1}{T}`} important />
      <p>
        The unit of ν is s⁻¹. After Heinrich Rudolph Hertz (1857–1894), the discoverer of radio waves, this unit is
        called the <strong>hertz</strong> (Hz):
      </p>
      <FormulaBlock latex={String.raw`1\ \text{hertz} = 1\ \text{Hz} = 1\ \text{oscillation per second} = 1\ \text{s}^{-1}`} />
      <p>
        Note that the frequency ν is not necessarily an integer.
      </p>

      <h3 id="o-displacement">13.2.2 Displacement</h3>
      <p>
        In this chapter displacement is used in a general sense — it refers to the change with time of{" "}
        <em>any physical property under consideration</em>. For a block attached to a spring it is the distance x from
        the equilibrium position; for an oscillating simple pendulum it is the angle θ from the vertical; other examples
        are the voltage across a capacitor in an AC circuit, pressure variations during sound propagation, and the
        changing electric and magnetic fields in a light wave.
      </p>
      <p>
        The displacement variable may take both positive and negative values, and in periodic motions it is a periodic
        function of time. One of the simplest periodic functions is:
      </p>
      <FormulaBlock latex={String.raw`f(t) = A \cos \omega t`} />
      <p>
        If the argument ωt is increased by an integral multiple of 2π radians the value of the function is unchanged, so
        f(t) is periodic with period:
      </p>
      <FormulaBlock latex={String.raw`T = \frac{2\pi}{\omega},\qquad f(t) = f(t + T)`} />
      <p>
        The same holds for a sine function f(t) = A sinωt. A linear combination f(t) = A sinωt + B cosωt is also
        periodic with the same period T. With A = D cosφ and B = D sinφ it can be written as:
      </p>
      <FormulaBlock latex={String.raw`f(t) = D \sin(\omega t + \phi),\qquad D = \sqrt{A^2 + B^2},\quad \tan\phi = \frac{B}{A}`} />
      <Callout type="note" title="The importance of sine and cosine functions">
        A remarkable result proved by the French mathematician Jean Baptiste Joseph Fourier (1768–1830): any periodic
        function can be expressed as a <strong>superposition of sine and cosine functions</strong> of different time
        periods with suitable coefficients.
      </Callout>

      <h2 id="o-shm">13.3 Simple Harmonic Motion</h2>
      <p>
        Consider a particle oscillating back and forth about the origin of an x-axis between the limits +A and −A. The
        oscillatory motion is said to be <strong>simple harmonic</strong> if the displacement x from the origin varies
        with time as:
      </p>
      <FormulaBlock latex={String.raw`x(t) = A \cos(\omega t + \phi)`} important />
      <p>
        where A, ω and φ are constants. Thus, SHM is not any periodic motion but one in which displacement is a
        sinusoidal function of time. The quantities A, ω and φ have standard names:
      </p>
      <TableCard
        caption="13.1 Table — Symbols of Eq. (13.4)"
        headers={["Quantity", "Definition"]}
        rows={[
          { cells: ["x(t)", "Displacement as a function of time t"] },
          { cells: ["A", "Amplitude — the magnitude of the maximum displacement"] },
          { cells: ["ω", "Angular frequency — determines the time period T = 2π/ω"] },
          { cells: ["ωt + φ", "Phase — the time-dependent state (position and velocity)"] },
          { cells: ["φ", "Phase constant — the value of the phase at t = 0"] },
        ]}
      />
      <p>
        As the cosine function varies from +1 to −1, the displacement varies between the extremes A and −A. The speed
        of the particle is <strong>maximum at zero displacement</strong> (x = 0) and <strong>zero at the extremes</strong>{" "}
        of motion; the period T remains fixed no matter which location you choose as the initial (t = 0) location.
      </p>
      <p>
        While A is fixed for a given SHM, the state of motion (position and velocity) at any time t is determined by the{" "}
        <strong>phase</strong>, (ωt + φ). Two SHMs may have the same ω and φ but different amplitudes A and B
        [Fig. 13.7(a)]; or the same A and ω but different phase angles φ [Fig. 13.7(b)]. If the amplitude is known, φ
        can be determined from the displacement at t = 0.
      </p>
      <p>
        For simplicity set φ = 0: x(t) = A cosωt. Since the motion has a period T, x(t) = x(t + T), i.e. A cosωt =
        A cosω(t + T). The cosine function first repeats itself when its argument changes by 2π, so ω(t + T) = ωt + 2π:
      </p>
      <FormulaBlock latex={String.raw`\omega = \frac{2\pi}{T}`} important />
      <p>
        ω is the <strong>angular frequency</strong>, with SI unit radians per second; being 2π times the frequency of
        oscillation, ω = 2πν. Two SHMs may have the same A and φ but different ω — one with half the period and twice
        the frequency of the other [Fig. 13.8].
      </p>
      <Callout type="note" title="Radian convention">
        The radian is a dimensionless unit defined through the ratio of arc to radius, so it is not always necessary to
        state it. If the argument of a trigonometric function is written without units, it is understood to be radians;
        if degrees are used, they must be shown explicitly. For example, sin(150°) means sine of 15 degrees, but sin(15)
        means sine of 15 radians.
      </Callout>
      <KeyPoint title="Fourier idea in SHM">
        Any periodic function can be expressed as a sum of sine and cosine functions of different time periods.
        Conversely, a function that is a sum of several SHMs of arbitrary amplitudes and phases is{" "}
        <strong>not necessarily periodic</strong> — it repeats only if the frequencies are commensurate (one an integral
        multiple of another).
      </KeyPoint>

      <h2 id="o-circular">13.4 SHM and Uniform Circular Motion</h2>
      <p>
        The projection of uniform circular motion on a diameter of the circle follows simple harmonic motion. Tie a
        ball to a string and make it move in a horizontal plane with constant angular speed; viewed sideways the ball
        appears to execute a to-and-fro motion along a horizontal line with the point of rotation as the midpoint — the
        motion of the ball on a diameter of the circle normal to the viewing direction.
      </p>
      <p>
        Mathematically: a particle P moves uniformly on a circle of radius A with angular speed ω (anticlockwise). At
        t = 0 its position vector OP makes angle φ with the positive x-axis; at time t it makes angle ωt + φ. The
        projection OP′ on the x-axis is:
      </p>
      <FormulaBlock latex={String.raw`x(t) = A \cos(\omega t + \phi)`} />
      <p>
        which is the defining equation of SHM. So if P moves uniformly on a circle, its projection P′ on a diameter
        executes SHM; P and the circle are called the <strong>reference particle</strong> and the{" "}
        <strong>reference circle</strong>. Projection on any other diameter, say the y-axis, gives y = A sin(ωt + φ) —
        an SHM of the same amplitude differing in phase by π/2.
      </p>
      <KeyPoint title="Same kinematics, different force">
        Despite this connection, the force acting on a particle in <em>linear</em> SHM is very different from the
        centripetal force needed to keep a particle in uniform circular motion.
      </KeyPoint>

      <h2 id="o-velocity">13.5 Velocity and Acceleration in SHM</h2>
      <p>
        The speed of the reference particle in uniform circular motion is v = ωA. From the geometry, the velocity of
        the projection particle P′ at time t is:
      </p>
      <FormulaBlock latex={String.raw`v(t) = -\omega A \sin(\omega t + \phi)`} important />
      <p>
        where the negative sign shows that v(t) is opposite to the positive direction of the x-axis. This is the
        instantaneous velocity in SHM; the same result follows from differentiating x(t).
      </p>
      <p>
        The centripetal acceleration of the reference particle has magnitude v²/A = ω²A and is directed towards the
        centre, along PO. The instantaneous acceleration of the projection particle is therefore:
      </p>
      <FormulaBlock latex={String.raw`a(t) = -\omega^2 A \cos(\omega t + \phi) = -\omega^2 x(t)`} important />
      <p>
        The important property: <strong>acceleration is proportional to displacement</strong>. For x &gt; 0, a &lt; 0;
        for x &lt; 0, a &gt; 0 — whatever the value of x between −A and A, the acceleration is always directed towards
        the centre.
      </p>
      <p>
        For φ = 0: x(t) = A cosωt, v(t) = −ωA sinωt, a(t) = −ω²A cosωt. All quantities vary sinusoidally with the same
        period, differing only in their maxima (A, ωA, ω²A) and phase — the velocity plot differs from the displacement
        plot by π/2, the acceleration plot by π.
      </p>
      <TableCard
        caption="13.2 Table — Variation of x, v and a in SHM"
        headers={["Position", "x", "v", "a = −ω²x", "Kinetic / potential energy"]}
        rows={[
          { cells: ["Mean position (x = 0)", "0", "±ωA (max)", "0", "All kinetic"] },
          { cells: ["Extremes (x = ±A)", "±A", "0", "∓ω²A (max)", "All potential"] },
          { cells: ["General x", "between −A and +A", "±ω√(A² − x²)", "−ω²x", "E = ½kA² conserved"] },
        ]}
      />

      <h2 id="o-force">13.6 Force Law for SHM</h2>
      <p>
        Using Newton&rsquo;s second law with the expression for the acceleration in SHM, the force on a particle of mass
        m is:
      </p>
      <FormulaBlock latex={String.raw`F(t) = m a = -m\omega^2 x(t) = -k x(t)`} important />
      <FormulaBlock latex={String.raw`k = m\omega^2,\qquad \omega = \sqrt{\frac{k}{m}}`} important />
      <p>
        Like acceleration, the force is always directed towards the mean position — it is a{" "}
        <strong>restoring force</strong>. Simple harmonic motion can therefore be defined in two equivalent ways, by the
        displacement equation x(t) = A cos(ωt + φ) or by the force law F = −kx; differentiating the displacement twice
        gives the force law, and integrating the force law twice recovers the displacement.
      </p>
      <p>
        Note that the force is linearly proportional to x(t); a particle oscillating under such a force is a{" "}
        <strong>linear harmonic oscillator</strong>. In the real world the force may contain small additional terms
        proportional to x², x³, etc. — these give non-linear oscillators.
      </p>
      <KeyPoint title="Spring–mass system">
        A particle of mass m attached to a spring of force constant k satisfying Hooke&rsquo;s law F = −kx executes SHM
        with angular frequency ω = √(k/m) and period T = 2π√(m/k). The period is independent of the amplitude.
      </KeyPoint>

      <h2 id="o-energy">13.7 Energy in SHM</h2>
      <p>
        Both kinetic and potential energies of a particle in SHM vary between zero and their maximum values, twice per
        period. The kinetic energy is:
      </p>
      <FormulaBlock latex={String.raw`K = \frac12 mv^2 = \frac12 m\omega^2 A^2 \sin^2(\omega t + \phi) = \frac12 kA^2 \sin^2(\omega t + \phi)`} />
      <p>
        It is zero when the displacement is maximum and maximum at the mean position. Since the sign of v is immaterial
        in K, the period of K is T/2.
      </p>
      <p>
        The spring force F = −kx is conservative, with associated potential energy U = ½kx². Hence:
      </p>
      <FormulaBlock latex={String.raw`U(x) = \frac12 k x^2 = \frac12 kA^2 \cos^2(\omega t + \phi)`} important />
      <p>
        The potential energy is also periodic with period T/2 — zero at the mean position and maximum at the extreme
        displacements. Summing the two:
      </p>
      <FormulaBlock latex={String.raw`E = U + K = \frac12 kA^2 \left[\cos^2(\omega t + \phi) + \sin^2(\omega t + \phi)\right] = \frac12 kA^2`} important />
      <p>
        The total mechanical energy of a harmonic oscillator is independent of time, as expected for any conservative
        force. Kinetic and potential energies are both always positive (PE by choice of the undetermined constant); both
        peak twice per period. At x = 0 the energy is all kinetic; at the extremes x = ±A it is all potential; in
        between, kinetic energy increases at the expense of potential energy or vice-versa.
      </p>

      <h2 id="o-pendulum">13.8 The Simple Pendulum</h2>
      <p>
        Galileo measured the periods of a swinging chandelier in a church by his pulse beats. A simple pendulum is a
        small bob of mass m tied to an inextensible massless string of length L, the other end fixed to a rigid support,
        oscillating in a plane about the vertical line through the support.
      </p>
      <p>
        Let θ be the angle the string makes with the vertical (θ = 0 at the mean position). Two forces act on the bob:
        the tension T along the string and the weight mg vertically. Resolving mg: the component mg cosθ along the string
        combines with T to provide the radial (centripetal) acceleration ω²L, while the tangential component mg sinθ
        provides the tangential acceleration. Working with torque about the support is convenient, since the radial
        force gives zero torque:
      </p>
      <FormulaBlock latex={String.raw`\tau = -L (mg \sin\theta)`} />
      <p>
        This is the restoring torque that tends to reduce the angular displacement — hence the negative sign. By
        Newton&rsquo;s law of rotational motion, τ = Iα with I the moment of inertia about the support:
      </p>
      <FormulaBlock latex={String.raw`I\alpha = -mgL\sin\theta,\qquad \alpha = -\frac{mgL}{I}\sin\theta`} />
      <p>
        For small displacements, sinθ ≈ θ (in radians):
      </p>
      <FormulaBlock latex={String.raw`\sin\theta = \theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \dots`} />
      <TableCard
        caption="Table 13.1 — sin θ as a function of angle θ"
        headers={["θ (degrees)", "θ (radians)", "sin θ"]}
        rows={[
          { cells: ["0", "0", "0"] },
          { cells: ["5", "0.087", "0.087"] },
          { cells: ["10", "0.174", "0.174"] },
          { cells: ["15", "0.262", "0.259"] },
          { cells: ["20", "0.349", "0.342"] },
        ]}
      />
      <p>
        For θ as large as 20°, sinθ is nearly the same as θ in radians. Thus α = −(mgL/I)θ, which is mathematically
        identical to the SHM equation with an angular displacement variable — the motion is simple harmonic for small θ.
      </p>
      <FormulaBlock latex={String.raw`\omega = \sqrt{\frac{mgL}{I}},\qquad T = 2\pi\sqrt{\frac{I}{mgL}}`} />
      <p>
        Since the string is massless, I = mL², giving the well-known formula:
      </p>
      <FormulaBlock latex={String.raw`T = 2\pi\sqrt{\frac{L}{g}}`} important />
      <KeyPoint title="What the period of a simple pendulum does NOT depend on">
        The period of a simple pendulum depends on its length and g — but not on the mass of the bob and (for small
        angles) not on the amplitude. This is why a pendulum is the heart of a clock: its period is a reliable constant.
      </KeyPoint>

      <h2 id="o-examples">Worked Examples</h2>

      <Expandable variant="default" title="Example 13.1 — heart beat frequency and period">
        <ProblemSolution.Problem>
          On an average, a human heart is found to beat 75 times in a minute. Calculate its frequency and period.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Beat frequency = 75/(1 min) = 75/(60 s) = <strong>1.25 s⁻¹ = 1.25 Hz</strong>. The time period T = 1/(1.25
            s⁻¹) = <strong>0.8 s</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 13.2 — periodic vs non-periodic functions">
        <ProblemSolution.Problem>
          Which of the following functions of time represent (a) periodic and (b) non-periodic motion? Give the period
          for each case of periodic motion [ω is any positive constant]: (i) sinωt + cosωt; (ii) sinωt + cos2ωt +
          sin4ωt; (iii) e^(−ωt); (iv) log(ωt).
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (i) sinωt + cosωt = √2 sin(ωt + π/4). Since √2 sin(ωt + π/4) = √2 sin[ω(t + 2π/ω) + π/4], the function is
            periodic with period <strong>T = 2π/ω</strong>.
          </p>
          <p>
            (ii) Each term is periodic with a different angular frequency: sinωt has period T₀ = 2π/ω, cos2ωt has
            period T₀/2, and sin4ωt has period T₀/4. The period of the first term is a multiple of the last two, so the
            smallest interval after which the sum repeats is <strong>T = 2π/ω</strong> — the sum is periodic.
          </p>
          <p>
            (iii) e^(−ωt) decreases monotonically and tends to zero as t → ∞ — it never repeats, so it is{" "}
            <strong>non-periodic</strong>.
          </p>
          <p>
            (iv) log(ωt) increases monotonically and diverges as t → ∞ — <strong>non-periodic</strong>. It could not
            represent any physical displacement.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 13.3 — SHM vs periodic but not SHM">
        <ProblemSolution.Problem>
          Which of the following functions of time represent (a) simple harmonic motion and (b) periodic but not simple
          harmonic? Give the period for each case: (1) sinωt − cosωt; (2) sin²ωt.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (1) sinωt − cosωt = √2 cos(π/4) sin(ωt − π/4) = <strong>√2 sin(ωt − π/4)</strong> — SHM of amplitude √2,
            period 2π/ω, and phase angle (−π/4) or (7π/4).
          </p>
          <p>
            (2) sin²ωt = <strong>½ − ½ cos2ωt</strong> — periodic with period π/ω, and it is harmonic but not simple
            harmonic (its equilibrium occurs at ½ instead of zero).
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 13.4 — two circular motions give SHM">
        <ProblemSolution.Problem>
          The figure depicts two circular motions — the radius, period of revolution, initial position and sense of
          revolution are indicated. Obtain the SHM of the x-projection of the radius vector of the rotating particle P in
          each case.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) At t = 0, OP makes an angle of 45° = π/4 with the positive x-axis and rotates anticlockwise; T = 4 s.
            After time t it covers an extra angle 2πt/T and makes an angle π/4 + 2πt/T with the x-axis. The projection is:
          </p>
          <FormulaBlock latex={String.raw`x(t) = A \cos\!\left(\frac{2\pi t}{T} + \frac{\pi}{4}\right) = A \cos\!\left(\frac{\pi t}{2} + \frac{\pi}{4}\right)`} />
          <p>
            — SHM of amplitude A, period 4 s and initial phase π/4.
          </p>
          <p>
            (b) At t = 0, OP makes an angle 90° = π/2 with the x-axis and rotates clockwise; T = 30 s. The projection is:
          </p>
          <FormulaBlock latex={String.raw`x(t) = B \cos\!\left(\frac{\pi}{2} - \frac{2\pi t}{T}\right) = B \sin\frac{\pi t}{15} = B \cos\!\left(\frac{\pi t}{15} - \frac{\pi}{2}\right)`} />
          <p>
            — SHM of amplitude B, period 30 s and initial phase −π/2.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 13.5 — displacement, speed and acceleration at a given time">
        <ProblemSolution.Problem>
          A body oscillates with SHM according to the equation (in SI units) x = 5 cos[2πt + π/4]. At t = 1.5 s calculate
          the (a) displacement, (b) speed and (c) acceleration of the body.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The angular frequency is ω = 2π s⁻¹ and the time period T = 1 s. At t = 1.5 s:
          </p>
          <p>
            (a) Displacement = (5.0 m) cos[(2π s⁻¹)(1.5 s) + π/4] = (5.0 m) cos(3π + π/4) = –5.0 × 0.707 ={" "}
            <strong>−3.535 m</strong>.
          </p>
          <p>
            (b) Speed = −(5.0 m)(2π s⁻¹) sin[(2π s⁻¹)(1.5 s) + π/4] = −10π × sin(3π + π/4) m s⁻¹ = 10π × 0.707 m s⁻¹ ={" "}
            <strong>22 m s⁻¹</strong>.
          </p>
          <p>
            (c) Acceleration = −(2π s⁻¹)² × displacement = −(2π s⁻¹)² × (−3.535 m) = <strong>140 m s⁻²</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 13.6 — two springs attached to a block">
        <ProblemSolution.Problem>
          Two identical springs of spring constant k are attached to a block of mass m and to fixed supports on either
          side. Show that when the mass is displaced from its equilibrium position on either side, it executes simple
          harmonic motion. Find the period of oscillations.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Let the mass be displaced a small distance x to the right. The left spring is elongated by x and the right
            spring is compressed by x. The forces on the mass are:
          </p>
          <FormulaBlock latex={String.raw`F_1 = -kx\ \text{(left spring, pulling towards the mean position)},\qquad F_2 = -kx\ \text{(right spring, pushing towards the mean position)}`} />
          <p>
            The net force is F = −2kx: proportional to the displacement and directed towards the mean position, so the
            motion is simple harmonic. The period is:
          </p>
          <FormulaBlock latex={String.raw`\omega = \sqrt{\frac{2k}{m}},\qquad T = 2\pi\sqrt{\frac{m}{2k}}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 13.7 — kinetic, potential and total energy of a block">
        <ProblemSolution.Problem>
          A block of mass 1 kg is fastened to a spring of spring constant 50 N m⁻¹. The block is pulled to a distance x
          = 10 cm from its equilibrium position (x = 0) on a frictionless surface, from rest at t = 0. Calculate the
          kinetic, potential and total energies of the block when it is 5 cm away from the mean position.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The block executes SHM with angular frequency ω = √(k/m) = √(50/1) = 7.07 rad s⁻¹, and displacement x(t) =
            0.1 cos(7.07t). When the particle is 5 cm from the mean position, 0.05 = 0.1 cos(7.07t), so cos(7.07t) = 0.5
            and sin(7.07t) = √3/2 = 0.866. The velocity is:
          </p>
          <FormulaBlock latex={String.raw`v = \omega A\sin(\omega t) = 0.1 \times 7.07 \times 0.866 = 0.61\ \text{m s}^{-1}`} />
          <p>
            Kinetic energy = ½mv² = ½[1 kg × (0.6123 m s⁻¹)²] = <strong>0.19 J</strong>.
          </p>
          <p>
            Potential energy = ½kx² = ½(50 N m⁻¹)(0.05 m)(0.05 m) = <strong>0.0625 J</strong>.
          </p>
          <p>
            Total energy = KE + PE = <strong>0.25 J</strong>. Check: at maximum displacement KE is zero, so total =
            ½kA² = ½(50)(0.1 m)(0.1 m) = 0.25 J — the same value, in conformity with the conservation of energy.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 13.8 — length of a seconds pendulum">
        <ProblemSolution.Problem>
          What is the length of a simple pendulum which ticks seconds?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            From T = 2π√(L/g), the length is L = gT²/4π². A pendulum that ticks seconds has T = 2 s. For g = 9.8 m s⁻²
            and T = 2 s:
          </p>
          <FormulaBlock latex={String.raw`L = \frac{9.8 \times 4}{4\pi^2} = 1\ \text{m}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="o-exercises">Exercises 13.1 – 13.18</h2>
      <p>NCERT<sup>Reprint 2025-26</sup> exercises with hints and the essential answers.</p>

      <Expandable variant="exercise" title="Exercise 13.1 — examples of periodic motion">
        <ProblemSolution.Problem>
          Which of the following examples represent periodic motion? (a) A swimmer completing one (return) trip from one
          bank of a river to the other and back. (b) A freely suspended bar magnet displaced from its N-S direction and
          released. (c) A hydrogen molecule rotating about its centre of mass. (d) An arrow released from a bow.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) The motion is <strong>not periodic</strong>, though it is to and fro — a swimmer&rsquo;s trip is
            controlled, not a natural repetition at regular intervals.
          </p>
          <p>(b) Periodic — the magnet swings to and fro in a repeatable oscillation.</p>
          <p>(c) Periodic — the rotating molecule returns to the same configuration at regular intervals.</p>
          <p>(d) Not periodic — the arrow&rsquo;s projectile motion does not repeat.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.2 — near-SHM and periodic-but-not-SHM">
        <ProblemSolution.Problem>
          Which of the following examples represent (nearly) simple harmonic motion and which represent periodic but not
          simple harmonic motion? (a) The rotation of the Earth about its axis. (b) Motion of an oscillating mercury
          column in a U-tube. (c) Motion of a ball bearing inside a smooth curved bowl, when released from a point
          slightly above the lowermost point. (d) General vibrations of a polyatomic molecule about its equilibrium
          position.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) <strong>Periodic but not SHM</strong> — rotation at constant angular speed is not governed by a
            restoring force proportional to displacement.
          </p>
          <p>
            (b) <strong>SHM</strong> — the excess weight of mercury provides a restoring force proportional to the
            displacement of the column.
          </p>
          <p>
            <strong>(c) SHM</strong> — for small displacement from the lowest point, the restoring force along the
            bowl&rsquo;s arc is proportional to displacement.
          </p>
          <p>
            (d) <strong>Periodic but not SHM</strong> — a polyatomic molecule has several natural frequencies, so its
            vibration is a superposition of SHMs of different frequencies.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.3 — which x–t plots are periodic">
        <ProblemSolution.Problem>
          Figure 13.18 depicts four x–t plots for linear motion of a particle. Which of the plots represent periodic
          motion? What is the period of motion (in case of periodic motion)?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Plots <strong>(b) and (d)</strong> represent periodic motion, each with a period of{" "}
            <strong>2 s</strong>. Plots (a) and (c) are non-periodic.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.4 — classify functions of time">
        <ProblemSolution.Problem>
          Which of the following functions of time represent (a) simple harmonic, (b) periodic but not simple harmonic,
          and (c) non-periodic motion? Give the period for each case of periodic motion (ω is any positive constant):
          (a) sinωt − cosωt; (b) sin³ωt; (c) 3 cos(π/4 − 2ωt); (d) cosωt + cos3ωt + cos5ωt; (e) exp(−ω²t²); (f) 1 +
          ωt + ω²t².
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) sinωt − cosωt = √2 sin(ωt − π/4) — <strong>SHM</strong>, period <strong>2π/ω</strong>.
          </p>
          <p>
            (b) sin³ωt = ¼(3 sinωt − sin3ωt) — a superposition of two SHMs of commensurate frequencies:{" "}
            <strong>periodic but not SHM</strong>, period <strong>2π/ω</strong>.
          </p>
          <p>
            (c) 3 cos(π/4 − 2ωt) = 3 cos(2ωt − π/4) — <strong>SHM</strong> of amplitude 3, period <strong>π/ω</strong>.
          </p>
          <p>
            (d) cosωt + cos3ωt + cos5ωt — periodic but not SHM; period = LCM(2π/ω, 2π/3ω, 2π/5ω) ={" "}
            <strong>2π/ω</strong>.
          </p>
          <p>(e) exp(−ω²t²) — exponential, <strong>non-periodic</strong>.</p>
          <p>(f) 1 + ωt + ω²t² — grows monotonically with t, <strong>non-periodic</strong>.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.5 — signs of velocity, acceleration and force">
        <ProblemSolution.Problem>
          A particle is in linear simple harmonic motion between two points, A and B, 10 cm apart. Take the direction
          from A to B as the positive direction and give the signs of velocity, acceleration and force on the particle
          when it is (a) at the end A, (b) at the end B, (c) at the mid-point of AB going towards A, (d) at 2 cm away
          from B going towards A, (e) at 3 cm away from A going towards B, and (f) at 4 cm away from B going towards A.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <TableCard
            caption="Signs of velocity, acceleration and force"
            headers={["Position & motion", "v", "a", "F"]}
            rows={[
              { cells: ["(a) at end A", "0", "+", "+"] },
              { cells: ["(b) at end B", "0", "−", "−"] },
              { cells: ["(c) mid-point, going towards A", "− (max magnitude)", "0", "0"] },
              { cells: ["(d) 2 cm from B, going towards A", "−", "−", "−"] },
              { cells: ["(e) 3 cm from A, going towards B", "+", "+", "+"] },
              { cells: ["(f) 4 cm from B, going towards A", "−", "−", "−"] },
            ]}
          />
          <p>
            At the ends the velocity is zero and the acceleration (and force) points towards the mean position; at the
            midpoint the acceleration and force vanish.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.6 — which relation is SHM">
        <ProblemSolution.Problem>
          Which of the following relationships between the acceleration a and the displacement x of a particle involve
          simple harmonic motion? (a) a = 0.7x; (b) a = −200x²; (c) a = −10x; (d) a = 100x³.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Only <strong>(c) a = −10x</strong> represents SHM: the acceleration is proportional in magnitude to the
            displacement and directed opposite to it (the signature a = −ω²x).
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.7 — amplitude and phase from initial conditions">
        <ProblemSolution.Problem>
          The motion of a particle executing SHM is described by x(t) = A cos(ωt + φ). If the initial (t = 0) position
          is 1 cm and the initial velocity is ω cm/s, what are its amplitude and initial phase angle? The angular
          frequency is π s⁻¹. If instead we choose the sine function x = B sin(ωt + α), what are the amplitude and
          initial phase?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            At t = 0: x(0) = A cosφ = 1 cm, and v(0) = −Aω sinφ = ω, so −A sinφ = 1. Squaring and adding: A²(cos²φ +
            sin²φ) = 1 + 1 = 2 ⟹ <strong>A = √2 cm</strong>. Dividing gives tanφ = −1 with cosφ &gt; 0 and sinφ &lt; 0,
            so <strong>φ = −π/4 (or 7π/4)</strong>.
          </p>
          <p>
            For the sine form: x(0) = B sinα = 1 and v(0) = Bω cosα = ω, so B cosα = 1. Squaring and adding gives{" "}
            <strong>B = √2 cm</strong>; dividing gives tanα = 1 with both sinα, cosα &gt; 0, so{" "}
            <strong>α = π/4</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.8 — weight from spring-balance oscillations">
        <ProblemSolution.Problem>
          A spring balance has a scale that reads from 0 to 50 kg. The length of the scale is 20 cm. A body suspended
          from this balance, when displaced and released, oscillates with a period of 0.6 s. What is the weight of the
          body?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Spring constant: k = (50 × 9.8)/(20 × 10⁻²) = <strong>2450 N m⁻¹</strong>. Mass: m = kT²/4π² = 2450 ×
            (0.6)²/(4π²) = 22.34 kg. Weight = mg = 22.34 × 9.8 = <strong>≈ 219 N</strong> (about 22.3 kg-weight).
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.9 — frequency, maximum acceleration and speed">
        <ProblemSolution.Problem>
          A spring of spring constant 1200 N m⁻¹ is mounted on a horizontal table. A mass of 3 kg is attached to the free
          end. The mass is pulled sideways to a distance of 2.0 cm and released. Determine (i) the frequency of
          oscillations, (ii) the maximum acceleration of the mass, and (iii) the maximum speed of the mass.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (i) ν = (1/2π)√(k/m) = (1/2π)√(1200/3) = (1/2π)(20) = <strong>3.18 Hz</strong>.
          </p>
          <p>
            (ii) a_max = kA/m = 1200 × 0.02/3 = <strong>8 m s⁻²</strong>.
          </p>
          <p>
            (iii) ω = 20 rad s⁻¹, so v_max = ωA = 20 × 0.02 = <strong>0.4 m s⁻¹</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.10 — displacement functions for three starting points">
        <ProblemSolution.Problem>
          In Exercise 13.9, take the position of mass when the spring is unstretched as x = 0, and left-to-right as the
          positive x-direction. Give x as a function of time t if at the moment we start the stopwatch (t = 0) the mass
          is (a) at the mean position, (b) at the maximum stretched position, and (c) at the maximum compressed position.
          In what way do these functions differ — in frequency, amplitude or initial phase?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Amplitude A = 0.02 m and ω = √(k/m) = √(1200/3) = 20 rad/s:
          </p>
          <p>(a) At t = 0 the mass is at the mean position: <strong>x(t) = 0.02 sin(20t)</strong> m.</p>
          <p>
            (b) At maximum stretched position, x(0) = A, so φ = π/2: x(t) = 0.02 sin(20t + π/2) ={" "}
            <strong>0.02 cos(20t)</strong> m.
          </p>
          <p>
            (c) At maximum compressed position, x(0) = −A, so φ = 3π/2: x(t) = 0.02 sin(20t + 3π/2) ={" "}
            <strong>−0.02 cos(20t)</strong> m.
          </p>
          <p>
            The functions differ only in <strong>initial phase</strong> — the amplitude and frequency are the same in
            all three cases.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.11 — SHM from two circular motions">
        <ProblemSolution.Problem>
          Figures 13.20 correspond to two circular motions; the radius, period of revolution, initial position and sense
          of revolution are indicated on each figure. Obtain the corresponding SHM of the x-projection of the radius
          vector of the revolving particle P, in each case.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) Amplitude 3 cm, T = 2 s, ω = 2π/T = π rad s⁻¹. The initial position is x(0) = 0 (φ = 0) and the sense
            of revolution is clockwise:
          </p>
          <FormulaBlock latex={String.raw`x(t) = a\sin(-\omega t) = -3\sin(\pi t)\ \text{cm}\qquad(= -0.03\sin\pi t\ \text{m})`} />
          <p>
            (b) Amplitude 2 m, T = 4 s, ω = π/2 rad s⁻¹. The initial position is x(0) = −A, i.e. φ = 3π/2, anticlockwise:
          </p>
          <FormulaBlock latex={String.raw`x(t) = 2\sin\!\left(\omega t + \frac{3\pi}{2}\right) = -2\cos\!\left(\frac{\pi}{2}\,t\right)\ \text{m}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.12 — reference circle parameters">
        <ProblemSolution.Problem>
          Plot the reference circle for each of the following SHMs, indicating the initial (t = 0) position, the radius
          and the angular speed. The sense of rotation may be fixed to be anticlockwise in every case (x in cm, t in s):
          (a) x = −2 sin(3t + π/3); (b) x = cos(π/6 − t); (c) x = 3 sin(2πt + π/4); (d) x = 2 cos(πt).
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <TableCard
            caption="Reference circle parameters (x(t) = A cos(ωt + φ))"
            headers={["Part", "A (cm)", "ω (rad s⁻¹)", "Initial phase φ", "x(0) (cm)"]}
            rows={[
              { cells: ["(a) −2 sin(3t + π/3) = 2 cos(3t + 5π/6)", "2", "3", "5π/6 = 150°", "−√3 ≈ −1.73"] },
              { cells: ["(b) cos(π/6 − t) = cos(t − π/6)", "1", "1", "−π/6 = −30°", "√3/2 ≈ 0.87"] },
              { cells: ["(c) 3 sin(2πt + π/4) = 3 cos(2πt − π/4)", "3", "2π", "−π/4 = −45°", "3/√2 ≈ 2.12"] },
              { cells: ["(d) 2 cos(πt)", "2", "π", "0", "2"] },
            ]}
          />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.13 — spring clamped vs both ends free">
        <ProblemSolution.Problem>
          Figure 13.21(a) shows a spring of force constant k clamped rigidly at one end with a mass m attached to the
          free end; a force F stretches the spring. Figure 13.21(b) shows the same spring with both ends free, attached
          to a mass m at either end, each end stretched by the same force F. (a) What is the maximum extension in the two
          cases? (b) If the mass in (a) and the two masses in (b) are released, what is the period of oscillation in each
          case?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) Case (a): F = kx ⟹ <strong>x = F/k</strong>. Case (b): the extension x is shared — the left force
            stretches each half by x/2 and the right force by another x/2, i.e. F = k(x/2) + k(x/2), so the total
            extension is also <strong>x = F/k</strong>.
          </p>
          <p>
            (b) Case (a): one end fixed, so the period is T₁ = <strong>2π√(m/k)</strong>. Case (b): the two masses
            oscillate about the stationary centre of the spring — each behaves like a mass m on a half-spring of
            constant 2k, so T₂ = <strong>2π√(m/2k)</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.14 — maximum piston speed">
        <ProblemSolution.Problem>
          The piston in the cylinder head of a locomotive has a stroke (twice the amplitude) of 1.0 m. If the piston
          moves with SHM with an angular frequency of 200 rad/min, what is its maximum speed?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Amplitude A = 0.5 m; ω = 200/60 = 3.33 rad s⁻¹. v_max = Aω = 0.5 × 3.33 = <strong>1.67 m s⁻¹</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.15 — period of a pendulum on the Moon">
        <ProblemSolution.Problem>
          The acceleration due to gravity on the surface of the Moon is 1.7 m s⁻². What is the time period of a simple
          pendulum on the Moon if its period on the surface of the Earth is 3.5 s? (g on Earth = 9.8 m s⁻².)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            T ∝ 1/√g, so T_moon = T_earth × √(g_earth/g_moon) = 3.5 × √(9.8/1.7) = <strong>8.4 s</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.16 — pendulum in a car on a circular track">
        <ProblemSolution.Problem>
          A simple pendulum of length l with a bob of mass M is suspended in a car. The car moves on a circular track of
          radius R with a uniform speed v. If the pendulum makes small oscillations in a radial direction about its
          equilibrium position, what will be its time period?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            In the car&rsquo;s frame the bob experiences, besides g downwards, a pseudo-acceleration v²/R radially
            outward. The effective acceleration is:
          </p>
          <FormulaBlock latex={String.raw`g' = \sqrt{g^2 + \left(\frac{v^2}{R}\right)^2}`} />
          <FormulaBlock latex={String.raw`T = 2\pi\sqrt{\frac{l}{g'}} = 2\pi\sqrt{\frac{l}{\sqrt{g^2 + \dfrac{v^4}{R^2}}}}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.17 — cork floating in a liquid: SHM">
        <ProblemSolution.Problem>
          A cylindrical piece of cork of density ρ, base area A and height h floats in a liquid of density ρ₁. The cork
          is depressed slightly and then released. Show that the cork oscillates up and down simple harmonically with a
          period T = 2π√(ρh/(ρ₁g)), where ρ is the density of the cork. Ignore damping due to the viscosity of the
          liquid.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Let the cork be displaced downward by a small distance x from equilibrium. The extra volume of liquid
            displaced is Ax, giving a restoring force (taking downward as positive):
          </p>
          <FormulaBlock latex={String.raw`\rho A h\,\frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -\rho_1 g A x\;\Longrightarrow\;\frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -\frac{\rho_1 g}{\rho h}\,x`} />
          <p>
            This has the form a = −ω²x with ω² = ρ₁g/(ρh), so the motion is SHM with period:
          </p>
          <FormulaBlock latex={String.raw`T = 2\pi\sqrt{\frac{\rho h}{\rho_1 g}}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 13.18 — U-tube mercury executes SHM">
        <ProblemSolution.Problem>
          One end of a U-tube containing mercury is connected to a suction pump and the other end to the atmosphere. A
          small pressure difference is maintained between the two columns. Show that, when the suction pump is removed,
          the column of mercury in the U-tube executes simple harmonic motion.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Let the height of each mercury column be h (total length 2h), the cross-sectional area A and the density ρ.
            If one column dips by a distance x, the level difference between the two columns is 2x, and the excess weight
            driving the column back to equilibrium is 2xAρg. The mass of the whole column is 2hAρ:
          </p>
          <FormulaBlock latex={String.raw`2hA\rho\,a = -2xA\rho g\;\Longrightarrow\;a = -\frac{g}{h}\,x`} />
          <p>
            The acceleration is proportional to the displacement and opposite in direction — the motion is SHM, with
            period:
          </p>
          <FormulaBlock latex={String.raw`T = 2\pi\sqrt{\frac{h}{g}}\qquad\left(= 2\pi\sqrt{\frac{L}{2g}}\ \text{with total length}\ L = 2h\right)`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="o-revision">Quick Revision</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormulaCard>
          <p><strong>Periodic motion basics</strong></p>
          Periodic motion repeats at regular intervals. Period T (least repeat time, in s); frequency ν = 1/T; 1 Hz = 1
          oscillation per second = 1 s⁻¹. Displacement is any physical property changing with time.
        </FormulaCard>
        <FormulaCard>
          <p><strong>SHM displacement</strong></p>
          x(t) = A cos(ωt + φ). A = amplitude, (ωt + φ) = phase, φ = phase constant, ω = 2π/T = 2πν. Also f(t) = A sinωt
          + B cosωt = D sin(ωt + φ), D = √(A² + B²), tanφ = B/A.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Circular motion ↔ SHM</strong></p>
          The x-projection of uniform circular motion on a reference circle of radius A is x = A cos(ωt + φ). Projection
          on a perpendicular diameter differs in phase by π/2. Velocity v(t) = −ωA sin(ωt + φ); acceleration a(t) =
          −ω²x(t). v_max = ωA, a_max = ω²A.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Force law and the spring</strong></p>
          F = −kx with k = mω², ω = √(k/m), T = 2π√(m/k). Two springs on either side of a body: F = −2kx, T = 2π√(m/2k).
          Linear harmonic oscillator: F linearly proportional to x.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Energy in SHM</strong></p>
          K = ½mω²A² sin²(ωt + φ); U = ½kx² = ½kA² cos²(ωt + φ); E = ½kA² = constant. K and U each have period T/2 — both
          peak twice per period. At x = 0 all kinetic; at x = ±A all potential.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Simple pendulum</strong></p>
          For small θ, α = −(mgL/I)θ; T = 2π√(I/mgL); for a massless string I = mL² so T = 2π√(L/g). Period is
          independent of the bob&rsquo;s mass and (small) amplitude. Seconds pendulum (T = 2 s) has L ≈ 1 m. Small-angle
          table: sinθ ≈ θ in radians (to ~20°).
        </FormulaCard>
      </div>

      <MistakeCard
        mistake="Thinking that any oscillatory motion is simple harmonic motion, or that in SHM the acceleration is constant."
        correction="SHM is a very specific motion: the displacement must be sinusoidal, x = A cos(ωt + φ), which is equivalent to the force law F = −kx. In SHM the acceleration is NOT constant — it is proportional to the displacement and always directed towards the mean position: a = −ω²x."
      />
      <MistakeCard
        mistake="Assuming the period of a spring–mass or pendulum system depends on the amplitude or on how hard you start it."
        correction="For a given system the period is fixed: T = 2π√(m/k) for a spring of stiffness k and mass m, and T = 2π√(L/g) for a pendulum — independent of amplitude (for small angles) and of initial energy. This is why clocks work."
      />
      <MistakeCard
        mistake="Confusing angular frequency ω with frequency ν (their units, and factors of 2π)."
        correction="ω = 2πν and ω = 2π/T. ν is measured in hertz (s⁻¹) — the number of oscillations per second — while ω is in rad s⁻¹, i.e. 2π times ν. Angular arguments like (ωt + φ) are in radians by default."
      />
      <MistakeCard
        mistake="Thinking the reference particle's centripetal force is the same as the force causing the SHM."
        correction="The reference-circle construction is a kinematic trick: only the PROJECTION of position, velocity and acceleration match the SHM. The force on a particle in linear SHM is the linear restoring force F = −kx, which is quite different from the centripetal force needed for uniform circular motion."
      />
      <MistakeCard
        mistake="Believing the kinetic and potential energies in SHM oscillate with the full period T, or that total energy varies with time."
        correction="K ∝ sin² and U ∝ cos², so both repeat after T/2 AND are always positive; the total mechanical energy E = K + U = ½kA² is constant at every instant (conservative system)."
      />
    </>
  );
}