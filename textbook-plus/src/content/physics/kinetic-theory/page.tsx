import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function KineticTheoryChapter() {
  return (
    <>
      <h2 id="k-intro">12.1 Introduction</h2>
      <p>
        Boyle discovered the law named after him in 1661. Boyle, Newton and several others tried to explain the
        behaviour of gases by considering that gases are made up of tiny atomic particles; the actual atomic theory
        was established more than 150 years later. <strong>Kinetic theory</strong> explains the behaviour of gases
        based on the idea that a gas consists of rapidly moving atoms or molecules. This is possible because the
        inter-atomic forces — which are short-range and important for solids and liquids — can be neglected for
        gases.
      </p>
      <p>
        The kinetic theory was developed in the nineteenth century by Maxwell, Boltzmann and others. It has been
        remarkably successful: it gives a <strong>molecular interpretation of pressure and temperature</strong> of a
        gas, is consistent with the gas laws and Avogadro&rsquo;s hypothesis, correctly explains the specific heat
        capacities of many gases, and relates measurable properties of gases (viscosity, conduction, diffusion) to
        molecular parameters — yielding estimates of molecular sizes and masses.
      </p>

      <h2 id="k-mols">12.2 Molecular Nature of Matter</h2>
      <p>
        Richard Feynman considered the discovery that <strong>&ldquo;matter is made up of atoms&rdquo;</strong> to
        be a very significant one. If all scientific knowledge were ever destroyed, he would want the{" "}
        <em>Atomic Hypothesis</em> communicated to the next generation: <em>all things are made of atoms — little
        particles that move around in perpetual motion, attracting each other when they are a little distance apart,
        but repelling upon being squeezed into one another.</em>
      </p>
      <p>
        The speculation that matter is not continuous is ancient. Kanada in India (Vaiseshika school, around the
        sixth century BC) and Democritus in Greece (fourth century BC) suggested that matter consists of indivisible
        constituents. The scientific atomic theory is usually credited to <strong>John Dalton</strong>, who proposed
        it to explain the laws of definite and multiple proportions. His picture: atoms of one element are identical
        but differ from those of other elements; a small number of atoms combine to form a molecule of a compound.
        Gay Lussac&rsquo;s law states that when gases combine chemically, their volumes are in ratios of small
        integers. <strong>Avogadro&rsquo;s law</strong> — equal volumes of all gases at equal temperature and
        pressure contain the same number of molecules — when combined with Dalton&rsquo;s theory explains Gay
        Lussac&rsquo;s law, so Dalton&rsquo;s atomic theory is also referred to as the molecular theory of matter.
      </p>
      <Callout type="note" title="Ancient atomic ideas">
        In the Vaiseshika school, atoms (Paramanu — &ldquo;smallest particle&rdquo;) were thought to be eternal,
        indivisible and ultimate. The four kinds postulated were Bhoomi (Earth), Ap (water), Tejas (fire) and Vayu
        (air); Akasa (space) had no atomic structure. Two atoms combine to form a <em>dvyanuka</em> (diatomic
        molecule), three a <em>tryanuka</em> (triatomic). Some ancient estimates of atomic size are close to the
        modern value of order 10⁻¹⁰ m. This is intuition and conjecture — not tested by quantitative experiments, the
        hallmark of modern science.
      </Callout>
      <p>
        Today we know that molecules (one or more atoms) constitute matter, and electron and scanning-tunnelling
        microscopes let us see them. The size of an atom is about an angstrom (10⁻¹⁰ m). In solids atoms are tightly
        packed about 2 Å apart; in liquids the separation is similar but atoms can move around, which is why liquids
        flow. In gases the interatomic distances are <strong>tens of angstroms</strong>, and the average distance a
        molecule travels without colliding — the <strong>mean free path</strong> — is of the order of thousands of
        angstroms, so molecules travel long distances before colliding. The interatomic force is attractive at a few
        angstroms and repulsive at closer range.
      </p>
      <KeyPoint title="Dynamic equilibrium">
        The static appearance of a gas is misleading: the gas is full of activity and its equilibrium is a dynamic
        one. Molecules collide and change their speeds during collisions; only the <strong>average</strong>
        properties stay constant. (Atoms themselves are not indivisible — they consist of a nucleus and electrons,
        and the proton and neutron are made of quarks.)
      </KeyPoint>

      <h2 id="k-gas">12.3 Behaviour of Gases</h2>
      <p>
        Gases at low pressures and high temperatures (much above the temperature at which they liquefy or solidify)
        approximately satisfy a simple relation between pressure, temperature and volume:
      </p>
      <FormulaBlock latex={String.raw`PV = K T`} important />
      <p>
        where T is the absolute (kelvin) temperature and K is constant for a given sample but varies with the volume
        of the gas. If we bring in the idea of molecules, K is proportional to the number of molecules N in the
        sample, so we write K = N k_B. Observation shows k_B is the same for all gases; it is called the{" "}
        <strong>Boltzmann constant</strong>, with SI value 1.38 × 10⁻²³ J K⁻¹.
      </p>
      <FormulaBlock latex={String.raw`\frac{P_1V_1}{N_1T_1} = \frac{P_2V_2}{N_2T_2} = k_B`} />
      <p>
        If P, V and T are the same, then N must be the same for all gases — this is{" "}
        <strong>Avogadro&rsquo;s hypothesis</strong>: the number of molecules per unit volume is the same for all
        gases at a fixed temperature and pressure. The number in 22.4 litres of any gas (the <em>molar volume</em>)
        is 6.02 × 10²³, the <strong>Avogadro number</strong> N_A. The mass of 22.4 litres is equal to its molecular
        weight in grams — one mole.
      </p>
      <FormulaBlock latex={String.raw`PV = \mu RT,\qquad R = N_A k_B = 8.314\ \text{J mol}^{-1}\text{K}^{-1}`} important />
      <p>
        The perfect-gas equation can also be written PV = k_B NT, or P = n k_B T where n is the number density
        (molecules per unit volume), and in terms of density ρ and molar mass M₀ as P = (ρ/M₀)RT. A gas that
        satisfies PV = μRT exactly at all pressures and temperatures is defined to be an <strong>ideal gas</strong> —
        a simple theoretical model; <em>no real gas is truly ideal</em>. Real gases approach ideal behaviour at low
        pressures and high temperatures, where molecules are far apart and interactions negligible.
      </p>
      <TableCard
        caption="12.3 Table — What each gas law sets fixed"
        headers={["Law", "Fixed quantity", "Statement"]}
        rows={[
          { cells: ["Boyle's law", "μ and T", "PV = constant — pressure varies inversely as volume"] },
          { cells: ["Charles' law", "P fixed", "V ∝ T — volume proportional to absolute temperature"] },
          { cells: ["Dalton's law of partial pressures", "Mixture in same V, T", "P = P₁ + P₂ + …; each Pᵢ = μᵢRT/V is the partial pressure"] },
        ]}
      />
      <p>
        For a mixture of non-interacting ideal gases with μ₁ moles of gas 1, μ₂ moles of gas 2, and so on, in volume
        V at temperature T and pressure P, the equation of state is:
      </p>
      <FormulaBlock latex={String.raw`PV = \left(\mu_1 + \mu_2 + \dots\right)RT,\qquad P = P_1 + P_2 + \dots`} />
      <p>
        P₁ = μ₁RT/V is the pressure gas 1 would exert at the same V and T if the other gases were absent — its{" "}
        <strong>partial pressure</strong>. Thus the total pressure of a mixture of ideal gases is the sum of the
        partial pressures: <strong>Dalton&rsquo;s law of partial pressures</strong>.
      </p>

      <h2 id="k-models">12.4 Kinetic Theory of an Ideal Gas</h2>
      <p>
        Kinetic theory pictures a gas as a collection of a very large number of molecules (of the order of
        Avogadro&rsquo;s number) in incessant random motion. At ordinary pressure and temperature the average
        distance between molecules is a factor of ten or more than the typical molecular size, so the interaction
        between molecules is negligible and they move freely in straight lines according to Newton&rsquo;s first
        law. Occasionally they come close, experience intermolecular forces, and change velocities —{" "}
        <strong>collisions</strong>. All collisions (between molecules, or with the walls) are considered{" "}
        <strong>elastic</strong>, so total kinetic energy and total momentum are conserved.
      </p>

      <h3 id="k-pressure">12.4.1 Pressure of an Ideal Gas</h3>
      <p>
        Consider a gas in a cube of side l with axes parallel to the sides. A molecule with velocity (v_x, v_y, v_z)
        hits the planar wall parallel to the yz-plane of area A = l². The collision is elastic, so the x-component
        of its velocity reverses: the change in the molecule&rsquo;s momentum is −2mv_x, and by conservation of
        momentum the momentum imparted to the wall is 2mv_x.
      </p>
      <p>
        In a small time interval ∆t a molecule with x-component v_x can hit the wall only if it is within distance
        v_x∆t of it — all molecules in the volume A v_x∆t. On average half of these are moving towards the wall and
        half away, so the number hitting the wall in time ∆t is ½nAv_x∆t. The total momentum transferred is:
      </p>
      <FormulaBlock latex={String.raw`Q = (2mv_x)\,\left(\frac12 n A v_x \Delta t\right) = n m v_x^2 A \Delta t`} />
      <p>
        The force on the wall is the rate of momentum transfer Q/∆t, and pressure is force per unit area:
      </p>
      <FormulaBlock latex={String.raw`P = \frac{Q}{A\,\Delta t} = n m v_x^2`} important />
      <p>
        Since all molecules do not have the same velocity, this holds for the group with x-component v_x; summing
        over all groups (with n the number density of each group) gives P = n m ⟨v_x²⟩. A gas in equilibrium is{" "}
        <strong>isotropic</strong> — there is no preferred direction of molecular velocity — so by symmetry:
      </p>
      <FormulaBlock latex={String.raw`\langle v_x^2\rangle = \langle v_y^2\rangle = \langle v_z^2\rangle = \frac13 \langle v^2\rangle`} important />
      <FormulaBlock latex={String.raw`P = \frac13\, n m \langle v^2\rangle`} important />
      <Callout type="note" title="Remarks on the derivation">
        The shape of the vessel is immaterial — for a vessel of arbitrary shape we can choose a small infinitesimal
        planar area and repeat the steps; A and ∆t do not appear in the final result. By Pascal&rsquo;s law, the
        pressure is the same everywhere in a gas in equilibrium. Collisions between molecules were ignored in the
        derivation, yet this is not erroneous: the gas is in a steady state, and if collision gives a molecule a new
        velocity, some other molecule acquires the old one — so the distribution of velocities (and the average
        ⟨v_x²⟩) is maintained.
      </Callout>

      <h3 id="k-temp">12.4.2 Kinetic Interpretation of Temperature</h3>
      <FormulaBlock latex={String.raw`PV = \frac13\,nV\,m\langle v^2\rangle = \frac23\,N\left(\frac12 m\langle v^2\rangle\right)`} />
      <p>
        where N = nV is the number of molecules. The quantity in brackets is the average translational kinetic
        energy of a molecule. Since the internal energy E of an ideal gas is purely kinetic:
      </p>
      <FormulaBlock latex={String.raw`E = N\left(\frac12 m\langle v^2\rangle\right)\qquad\Longrightarrow\qquad PV = \frac23 E`} />
      <p>
        Combining with the ideal-gas equation PV = k_B NT gives the kinetic interpretation of temperature:
      </p>
      <FormulaBlock latex={String.raw`E = \frac32 k_B N T,\qquad \frac{E}{N} = \frac12 m\langle v^2\rangle = \frac32 k_B T`} important />
      <KeyPoint title="Temperature = average kinetic energy of a molecule">
        The average kinetic energy of a molecule is <strong>proportional to the absolute temperature</strong> of the
        gas, and is independent of pressure, volume or the nature of the ideal gas. This fundamental result connects
        temperature — a macroscopic, measurable parameter (a thermodynamic variable) — to a molecular quantity, the
        average kinetic energy of a molecule. The two domains are linked by the Boltzmann constant. It also implies
        the internal energy of an ideal gas depends <em>only on temperature</em>, not on pressure or volume.
      </KeyPoint>
      <p>
        For a mixture of non-reactive ideal gases, P = (1/3)[n₁m₁⟨v₁²⟩ + n₂m₂⟨v₂²⟩ + …]. In equilibrium the average
        kinetic energies of the molecules of the different gases are equal — ½m₁⟨v₁²⟩ = ½m₂⟨v₂²⟩ = (3/2)k_B T — giving
        P = (n₁ + n₂ + …)k_B T, which is Dalton&rsquo;s law of partial pressures.
      </p>
      <p>
        From ½m⟨v²⟩ = (3/2)k_B T we get an idea of typical molecular speeds. For nitrogen at T = 300 K (molecule
        mass m ≈ 4.65 × 10⁻²⁶ kg) the mean-square speed is ⟨v²⟩ = 3k_BT/m = (516)² m²s⁻². The square root of ⟨v²⟩ is
        the <strong>root-mean-square (rms) speed</strong>:
      </p>
      <FormulaBlock latex={String.raw`v_{rms} = \sqrt{\langle v^2\rangle} = \sqrt{\frac{3k_B T}{m}} = 516\ \text{m}\ \text{s}^{-1}`} important />
      <p>
        This is of the order of the speed of sound in air. Since v_rms ∝ 1/√m, at the same temperature{" "}
        <strong>lighter molecules have greater rms speed</strong>.
      </p>

      <h2 id="k-equip">12.5 Law of Equipartition of Energy</h2>
      <p>
        The kinetic energy of a single molecule is ε_t = ½mv_x² + ½mv_y² + ½mv_z². For a gas in thermal equilibrium
        at temperature T, the average value is:
      </p>
      <FormulaBlock latex={String.raw`\langle \varepsilon_t \rangle = \frac12 m\langle v_x^2\rangle + \frac12 m\langle v_y^2\rangle + \frac12 m\langle v_z^2\rangle = \frac32 k_B T`} />
      <p>
        Since there is no preferred direction, each term averages to ½ k_B T. A molecule free to move in space needs
        three coordinates to specify its location — it has three <strong>translational degrees of freedom</strong>;
        constrained to a plane it has two; along a line, one. Each translational degree of freedom contributes a term
        containing the square of a variable of motion (½mv_x² and similar), and in thermal equilibrium the average
        of each such term is ½ k_B T.
      </p>
      <TableCard
        caption="12.1 Table — Degrees of freedom"
        headers={["Molecule", "Translational", "Rotational", "Vibrational", "Total quadratic terms"]}
        rows={[
          { cells: ["Monatomic (Ar, He)", "3", "0", "0", "3"] },
          { cells: ["Diatomic, rigid (O₂, N₂)", "3", "2", "0", "5"] },
          { cells: ["Diatomic with vibration (CO)", "3", "2", "1 mode = 2 terms", "7"] },
          { cells: ["Polyatomic (general)", "3", "3", "f modes = 2f terms", "6 + 2f"] },
        ]}
      />
      <p>
        A diatomic molecule like O₂ has three translational degrees of freedom, and can also rotate about two
        independent axes normal to the interatomic axis, giving two rotational degrees of freedom; each contributes a
        squared term to the total energy. If the molecule is a rigid rotator (a dumbbell), it does not vibrate. But
        molecules like CO have, even at moderate temperatures, a vibrational mode — atoms oscillating along the
        interatomic axis like a one-dimensional oscillator — contributing a vibrational energy term ε_v = ½m(dy/dt)² +
        ½ky².
      </p>
      <KeyPoint title="Law of Equipartition of Energy">
        In equilibrium, the total energy is <strong>equally distributed in all possible energy modes</strong>, each
        mode having an average energy equal to ½ k_B T. Each translational and rotational degree of freedom
        contributes ½ k_B T to the energy; each <strong>vibrational frequency contributes 2 × ½ k_B T = k_B T</strong>,
        since a vibrational mode has both kinetic and potential energy modes. (The proof, first given by Maxwell, is
        beyond the scope of this book.)
      </KeyPoint>
      <p>
        Notice the important feature: while each translational and rotational degree of freedom contributes only one
        squared term, one vibrational mode contributes <strong>two</strong> squared terms — kinetic and potential.
        Each quadratic term in the energy expression is a mode of absorption of energy.
      </p>

      <h2 id="k-spec">12.6 Specific Heat Capacity</h2>
      <p>
        We can now apply the law of equipartition to predict the specific heats of gases theoretically. Recall that
        C_v = (dU/dT)_v and, for an ideal gas, C_p − C_v = R.
      </p>

      <h3 id="k-spec-mono">12.6.1 Monatomic Gases</h3>
      <p>
        A monatomic gas molecule has only three translational degrees of freedom, so the average energy of a
        molecule at temperature T is (3/2)k_B T. The internal energy of one mole is:
      </p>
      <FormulaBlock latex={String.raw`U = \frac32 k_B T \times N_A = \frac32 RT`} />
      <FormulaBlock latex={String.raw`C_v = \frac{dU}{dT} = \frac32 R,\qquad C_p = \frac52 R,\qquad \gamma = \frac{C_p}{C_v} = \frac53 \approx 1.67`} important />

      <h3 id="k-spec-di">12.6.2 Diatomic Gases</h3>
      <p>
        As a rigid rotator (dumbbell), a diatomic molecule has 5 degrees of freedom: 3 translational and 2
        rotational. Using equipartition, the internal energy of a mole is U = (5/2)N_A k_B T = (5/2)RT:
      </p>
      <FormulaBlock latex={String.raw`C_v = \frac52 R,\qquad C_p = \frac72 R,\qquad \gamma = \frac75 = 1.40`} important />
      <p>
        If the diatomic molecule is not rigid but has in addition a vibrational mode, U = (5/2)RT + k_B T × N_A =
        (7/2)RT, giving C_v = (7/2)R, C_p = (9/2)R and γ = 9/7.
      </p>

      <h3 id="k-spec-poly">12.6.3 Polyatomic Gases</h3>
      <p>
        In general a polyatomic molecule has 3 translational, 3 rotational degrees of freedom and a certain number f
        of vibrational modes. One mole then has:
      </p>
      <FormulaBlock latex={String.raw`U = \left(\frac32 k_B T + \frac32 k_B T + f\,k_B T\right)N_A`} />
      <FormulaBlock latex={String.raw`C_v = (3 + f)R,\qquad C_p = (4 + f)R,\qquad \gamma = \frac{4 + f}{3 + f}`} important />
      <KeyPoint title="C_p − C_v = R for every ideal gas">
        The relation C_p − C_v = R is true for <strong>any ideal gas</strong>, whether monatomic, diatomic or
        polyatomic. The measured values (Table 12.2) agree with the predictions for several gases; where they
        disagree (Cl₂, C₂H₆, and many polyatomic gases — with experimental values usually greater), the agreement is
        improved by including vibrational modes of motion. The law of equipartition is thus well verified
        experimentally at ordinary temperatures.
      </KeyPoint>
      <TableCard
        caption="Table 12.1 — Predicted values of specific heat capacities of gases (ignoring vibrational modes), in J mol⁻¹ K⁻¹"
        headers={["Nature of gas", "C_v", "C_p", "C_p − C_v", "γ"]}
        rows={[
          { cells: ["Monatomic", "12.5", "20.8", "8.31", "1.67"] },
          { cells: ["Diatomic", "20.8", "29.1", "8.31", "1.40"] },
          { cells: ["Triatomic", "24.93", "33.24", "8.31", "1.33"] },
        ]}
      />
      <TableCard
        caption="Table 12.2 — Measured values of specific heat capacities of some gases (J mol⁻¹ K⁻¹)"
        headers={["Nature of gas", "Gas", "C_v", "C_p", "C_p − C_v", "γ"]}
        rows={[
          { cells: ["Monatomic", "He", "12.5", "20.8", "8.30", "1.66"] },
          { cells: ["Monatomic", "Ne", "12.7", "20.8", "8.12", "1.64"] },
          { cells: ["Monatomic", "Ar", "12.5", "20.8", "8.30", "1.67"] },
          { cells: ["Diatomic", "H₂", "20.4", "28.8", "8.45", "1.41"] },
          { cells: ["Diatomic", "O₂", "21.0", "29.3", "8.32", "1.40"] },
          { cells: ["Diatomic", "N₂", "20.8", "29.1", "8.32", "1.40"] },
          { cells: ["Triatomic", "H₂O", "27.0", "35.4", "8.35", "1.31"] },
          { cells: ["Polyatomic", "CH₄", "27.1", "35.4", "8.36", "1.31"] },
        ]}
      />

      <h3 id="k-spec-solid">12.6.4 Specific Heat Capacity of Solids</h3>
      <p>
        Consider a solid of N atoms, each vibrating about its mean position. An oscillation in one dimension has
        average energy 2 × ½ k_B T = k_B T; in three dimensions the average energy is 3 k_B T. For a mole of solid
        (N = N_A), the total energy is U = 3k_B T × N_A = 3RT. At constant pressure ∆Q = ∆U + P∆V ≈ ∆U, since for a
        solid ∆V is negligible:
      </p>
      <FormulaBlock latex={String.raw`C = \frac{\Delta Q}{\Delta T} = 3R , \qquad 3R \approx 24.9\ \text{J mol}^{-1}\text{K}^{-1}\ \text{(Dulong--Petit)}`} important />
      <p>
        The prediction generally agrees with experimental values at ordinary temperatures; carbon is an exception
        (see Table 12.3 — the same solids table as in Ch 11).
      </p>
      <Expandable variant="default" title="Specific heat of solids — measured values">
        <ProblemSolution.Problem>
          Table 12.3 lists measured specific and molar heat capacities of some solids at room temperature and
          atmospheric pressure. Which value deviates from the equipartition prediction C ≈ 3R?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <TableCard
            caption="Table 12.3 — Specific heat capacities of some solids at room temperature"
            headers={["Substance", "Specific heat (J kg⁻¹ K⁻¹)", "Molar specific heat (J mol⁻¹ K⁻¹)"]}
            rows={[
              { cells: ["Aluminium", "900.0", "24.4"] },
              { cells: ["Carbon", "506.5", "6.1"] },
              { cells: ["Copper", "386.4", "24.5"] },
              { cells: ["Lead", "127.7", "26.5"] },
              { cells: ["Silver", "236.1", "25.5"] },
              { cells: ["Tungsten", "134.4", "24.9"] },
            ]}
          />
          <p>
            Most substances cluster near 3R ≈ 24.9 J mol⁻¹ K⁻¹. <strong>Carbon</strong> (6.1 J mol⁻¹ K⁻¹) is a
            striking exception — its vibration frequencies are so high that the classical equipartition prediction
            fails at ordinary temperatures (quantum effects freeze out some vibrational modes).
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="k-mfp">12.7 Mean Free Path</h2>
      <p>
        Molecules in a gas have large speeds of the order of the speed of sound, yet a gas leaking from a cylinder
        takes considerable time to diffuse across a room, and a cloud of smoke holds together for hours. The reason:
        molecules have a finite though small size, so they must undergo collisions. Their paths keep getting
        deflected.
      </p>
      <p>
        Suppose the molecules are spheres of diameter d, and focus on a single molecule with the average speed ⟨v⟩.
        It will collide with any molecule that comes within distance d (centre-to-centre). In time ∆t it sweeps a
        volume πd²⟨v⟩∆t. If n is the number of molecules per unit volume, the rate of collisions is nπd²⟨v⟩, so the
        time between two successive collisions is on average:
      </p>
      <FormulaBlock latex={String.raw`\tau = \frac{1}{n\pi \langle v\rangle d^2},\qquad l = \langle v\rangle\tau = \frac{1}{n\pi d^2}`} />
      <p>
        We imagined the other molecules at rest, but actually all molecules move, so the collision rate is
        determined by the average relative velocity. A more exact treatment gives:
      </p>
      <FormulaBlock latex={String.raw`l = \frac{1}{\sqrt{2}\,\pi\, n\, d^2}`} important />
      <p>
        For air molecules with average speed ⟨v⟩ = 485 m s⁻¹ at STP: n = 0.02 × 10²³/(22.4 × 10⁻³) = 2.7 × 10²⁵
        m⁻³; taking d = 2 × 10⁻¹⁰ m gives τ = 6.1 × 10⁻¹⁰ s and l = 2.9 × 10⁻⁷ m ≈ 1500d. The mean free path
        depends inversely on number density and molecular size. In a highly evacuated tube n is small, so the mean
        free path can be as large as the length of the tube.
      </p>
      <KeyPoint title="Why gases behave as gases">
        At ordinary pressures and temperatures the intermolecular distance in a gas is only about 10 times the
        interatomic distance in solids/liquids. What is different is the <strong>mean free path</strong> — in a gas
        it is ~100 times the interatomic distance and ~1000 times the molecular size. It is this large value of the
        mean free path that leads to typical gaseous behaviour, such as gases not being confinable without a
        container. Through kinetic theory, bulk measurable properties (viscosity, heat conductivity, diffusion) are
        related to microscopic parameters like molecular size — which is how molecular sizes were first estimated.
      </KeyPoint>

      <h2 id="k-examples">Worked Examples</h2>

      <Expandable variant="default" title="Example 12.1 — fraction of molecular volume">
        <ProblemSolution.Problem>
          The density of water is 1000 kg m⁻³. The density of water vapour at 100 °C and 1 atm pressure is 0.6 kg
          m⁻³. Estimate the ratio (fraction) of the molecular volume to the total volume occupied by the water
          vapour under these conditions.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            For a given mass of water molecules, the volume is larger when the density is smaller: the vapour volume
            is 1000/0.6 = 1/(6 × 10⁻⁴) times larger than the liquid volume. If the densities of bulk water and of the
            water molecules are the same, the fraction of molecular volume to total volume in the liquid state is 1.
            As the volume in the vapour state has increased by the factor 1/(6 × 10⁻⁴), the fractional volume is
            smaller by the same amount:
          </p>
          <p>
            <strong>Fraction = 6 × 10⁻⁴</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 12.2 — volume of a water molecule">
        <ProblemSolution.Problem>
          Estimate the volume of a water molecule using the data in Example 12.1.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            In the liquid phase the water molecules are closely packed, so the density of a water molecule may be
            regarded as roughly equal to the density of bulk water, 1000 kg m⁻³. One mole of water has a mass of 18 g
            = 0.018 kg and contains about 6 × 10²³ molecules, so the mass of a single molecule is (0.018)/(6 × 10²³)
            = 3 × 10⁻²⁶ kg.
          </p>
          <p>
            Volume of a water molecule = (3 × 10⁻²⁶ kg)/(1000 kg m⁻³) = <strong>3 × 10⁻²⁹ m³</strong>. Since this
            equals (4/3)πR³, the radius is R ≈ 2 × 10⁻¹⁰ m = <strong>2 Å</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 12.3 — interatomic distance in water">
        <ProblemSolution.Problem>
          What is the average distance between atoms (interatomic distance) in water? Use the data in Examples 12.1
          and 12.2.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            A given mass of water in the vapour state has about 1.67 × 10³ (≈ 10³) times the volume of the same
            mass in the liquid state, so the volume available for each molecule increases by this factor. When the
            volume increases by 10³ the radius increases by (10³)^(1/3) = 10, i.e. 10 × 2 Å = 20 Å. The average
            interatomic distance is therefore ≈ 2 × 20 = <strong>40 Å</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 12.4 — neon and oxygen in a vessel">
        <ProblemSolution.Problem>
          A vessel contains two non-reactive gases: neon (monatomic) and oxygen (diatomic). The ratio of their
          partial pressures is 3:2. Estimate the ratio of (i) the number of molecules and (ii) the mass density of
          neon and oxygen in the vessel. (Atomic mass of Ne = 20.2 u, molecular mass of O₂ = 32.0 u.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Since V and T are common to the two gases, P₁V = μ₁RT and P₂V = μ₂RT, so P₁/P₂ = μ₁/μ₂. Given P₁/P₂ =
            3/2, we have μ₁/μ₂ = 3/2.
          </p>
          <p>
            (i) μ₁ = N₁/N_A and μ₂ = N₂/N_A, so <strong>N₁/N₂ = μ₁/μ₂ = 3:2</strong>.
          </p>
          <p>
            (ii) μ₁ = m₁/M₁ and μ₂ = m₂/M₂, so m₁/m₂ = (μ₁/μ₂)(M₁/M₂) = (3/2)(20.2/32.0) = 0.947. With the same
            volume, <strong>ρ₁/ρ₂ = m₁/m₂ = 0.947</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 12.5 — argon and chlorine: KE and rms speed">
        <ProblemSolution.Problem>
          A flask contains argon and chlorine in the ratio of 2:1 by mass. The temperature of the mixture is 27 °C.
          Obtain the ratio of (i) the average kinetic energy per molecule and (ii) the root mean square speed v_rms
          of the molecules of the two gases. (Atomic mass of argon = 39.9 u; molecular mass of chlorine = 70.9 u.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The average kinetic energy per molecule of <em>any</em> ideal gas — monatomic, diatomic or polyatomic —
            is always (3/2)k_B T; it depends only on temperature and is independent of the nature of the gas.
          </p>
          <p>
            (i) Since both gases are at the same temperature, <strong>the ratio of average kinetic energies is
            1:1</strong>.
          </p>
          <p>
            (ii) ½mv_rms² = (3/2)k_B T, so v_rms ∝ 1/√m ∝ 1/√M:
          </p>
          <FormulaBlock latex={String.raw`\frac{v_{rms}(\text{Ar})}{v_{rms}(\text{Cl})} = \sqrt{\frac{M_{\text{Cl}}}{M_{\text{Ar}}}} = \sqrt{\frac{70.9}{39.9}} = 1.33`} />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 12.6 — uranium isotopes in UF₆">
        <ProblemSolution.Problem>
          Uranium has two isotopes of masses 235 and 238 units. If both are present in uranium hexafluoride gas,
          which would have the larger average speed? If the atomic mass of fluorine is 19 units, estimate the
          percentage difference in speeds at any temperature.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            At a fixed temperature the average energy ½m⟨v²⟩ is constant, so the smaller the mass of the molecule,
            the faster its speed. The UF₆ molecular masses are 235 + 6×19 = 349 and 238 + 6×19 = 352 units:
          </p>
          <FormulaBlock latex={String.raw`\frac{v_{349}}{v_{352}} = \sqrt{\frac{352}{349}} = 1.0044\;\;\Longrightarrow\;\;\frac{\Delta v}{v} \approx 0.44\%`} />
          <p>
            <strong>²³⁵UF₆ travels faster</strong>, by about 0.44%. (²³⁵U is the isotope needed for nuclear fission;
            enriching it exploits this speed difference — the lighter molecule leaks out first through a porous
            cylinder, and the process is repeated several times for sufficient enrichment.)
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 12.7 — ball, bat, piston and temperature">
        <ProblemSolution.Problem>
          (a) When a molecule (or an elastic ball) hits a massive wall it rebounds with the same speed; so too when a
          ball hits a massive bat held firmly. However, when the bat is <em>moving</em> towards the ball, the ball
          rebounds with a different speed. Does the ball move faster or slower? (b) When gas in a cylinder is
          compressed by pushing in a piston, its temperature rises. Explain in terms of kinetic theory using (a). (c)
          What happens when a compressed gas pushes a piston out and expands? (d) Did Sachin Tendulkar&rsquo;s heavy
          cricket bat help him in any way?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>(a) Let the ball speed relative to the wicket be u and the bat speed towards the ball be V. The relative
          speed of ball to bat is V + u; after rebounding off the massive bat its speed relative to the bat is V + u
          away from it, so relative to the wicket it is V + (V + u) = 2V + u. The ball <strong>speeds up</strong>.
          (The rebound speed is less than u only if the bat is not massive.)</p>
          <p>(b) The moving piston is like a moving bat approaching the molecules. Each molecule rebounds faster, so
          the average kinetic energy — and hence the temperature — rises.</p>
          <p>(c) The piston moves away from the molecules, like a bat receding; molecules rebound slower, the average
          kinetic energy falls, and the gas <strong>cools on expansion</strong>.</p>
          <p>(d) A heavy bat resists being slowed by the ball, so it transfers more energy to the ball — a lighter
          bat would recoil and impart less. Hint: piston ↔ bat, cylinder ↔ wicket, molecule ↔ ball.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 12.8 — heating helium at constant volume">
        <ProblemSolution.Problem>
          A cylinder of fixed capacity 44.8 litres contains helium gas at standard temperature and pressure. What is
          the amount of heat needed to raise the temperature of the gas in the cylinder by 15.0 °C? (R = 8.31 J
          mol⁻¹ K⁻¹.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Using the gas law PV = μRT, 1 mol of any ideal gas at 273 K and 1 atm occupies 22.4 litres (the molar
            volume), so the cylinder contains 2 mol of helium. Helium is monatomic: C_v = (3/2)R and C_p = (5/2)R.
            Since the volume is fixed, the heat required is determined by C_v:
          </p>
          <FormulaBlock latex={String.raw`Q = \mu\, C_v\, \Delta T = 2 \times \frac32 R \times 15.0 = 45 R = 45 \times 8.31 = 374\ \text{J}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="default" title="Example 12.9 — mean free path of water vapour">
        <ProblemSolution.Problem>
          Estimate the mean free path for a water molecule in water vapour at 373 K. Use information from Exercise
          12.1 and Eq. (12.41).
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The diameter d of a water molecule is the same as that of air. The number density varies inversely with
            absolute temperature, so at 373 K:
          </p>
          <FormulaBlock latex={String.raw`n = 2.7 \times 10^{25} \times \frac{273}{373} = 2.0 \times 10^{25}\ \text{m}^{-3}`} />
          <p>
            Using the mean-free-path value for air at STP (l ∝ 1/n), l = 2.9 × 10⁻⁷ × (2.7/2.0) ={" "}
            <strong>4 × 10⁻⁷ m</strong>. This is about 100 times the interatomic distance (~40 Å ≈ 4 × 10⁻⁹ m) — and
            it is this large value of the mean free path that leads to typical gaseous behaviour.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="k-exercises">Exercises 12.1 – 12.10</h2>
      <p>NCERT<sup>Reprint 2025-26</sup> exercises with hints and the essential answers.</p>

      <Expandable variant="exercise" title="Exercise 12.1 — molecular volume fraction of oxygen">
        <ProblemSolution.Problem>
          Estimate the fraction of molecular volume to the actual volume occupied by oxygen gas at STP. Take the
          diameter of an oxygen molecule to be 3 Å.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Volume of one molecule: (1/6)πd³ = (1/6)π(3 × 10⁻¹⁰)³ ≈ 1.41 × 10⁻²⁹ m³. At STP the number density n =
            N_A/(22.4 × 10⁻³) = 2.69 × 10²⁵ m⁻³, so the actual volume per molecule is 1/n = 3.72 × 10⁻²⁶ m³.
          </p>
          <p>
            Fraction = 1.41 × 10⁻²⁹ / 3.72 × 10⁻²⁶ = <strong>3.8 × 10⁻⁴</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 12.2 — molar volume is 22.4 L">
        <ProblemSolution.Problem>
          Molar volume is the volume occupied by 1 mol of any (ideal) gas at standard temperature and pressure (STP:
          1 atmospheric pressure, 0 °C). Show that it is 22.4 litres.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            V = μRT/P = (1 mol)(8.314 J mol⁻¹ K⁻¹)(273 K)/(1.013 × 10⁵ Pa) ≈ 0.0224 m³ = <strong>22.4 L</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 12.3 — PV/T versus P for oxygen">
        <ProblemSolution.Problem>
          Figure 12.8 shows a plot of PV/T versus P for 1.00 × 10⁻³ kg of oxygen gas at two different temperatures.
          (a) What does the dotted plot signify? (b) Which is true: T₁ &gt; T₂ or T₁ &lt; T₂? (c) What is the value
          of PV/T where the curves meet on the y-axis? (d) If we obtained similar plots for 1.00 × 10⁻³ kg of
          hydrogen, would we get the same value of PV/T at the y-axis meet point? If not, what mass of hydrogen
          yields the same value? (Molecular mass of H₂ = 2.02 u, of O₂ = 32.0 u, R = 8.31 J mol⁻¹ K⁻¹.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) The dotted plot signifies <strong>ideal-gas behaviour</strong>: PV/T is constant (= μR) independent
            of pressure. <br />
            (b) <strong>T₁ &gt; T₂</strong> — a real gas approaches ideal behaviour at higher temperatures, so the
            curve at the higher temperature (T₁) lies closer to the dotted ideal line. <br />
            (c) Where the curves meet the y-axis (P → 0) they approach the ideal limit PV/T = μR. With μ =
            (1.00 × 10⁻³ kg)/(32 × 10⁻³ kg mol⁻¹) = 1/32 mol, PV/T = (1/32)(8.31) = <strong>0.26 J K⁻¹</strong>.{" "}
            <br />
            (d) No. For 1.00 × 10⁻³ kg of hydrogen μ = (1.00 × 10⁻³)/(2.02 × 10⁻³) = 0.495 mol, giving a different
            PV/T ≈ 4.11 J K⁻¹. To match 0.26 J K⁻¹ we need μ = 1/32 mol, i.e. mass = (1/32)(2.02 × 10⁻³) ={" "}
            <strong>6.3 × 10⁻⁵ kg</strong> of hydrogen.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 12.4 — oxygen withdrawn from a cylinder">
        <ProblemSolution.Problem>
          An oxygen cylinder of volume 30 litres has an initial gauge pressure of 15 atm and a temperature of 27 °C.
          After some oxygen is withdrawn from the cylinder, the gauge pressure drops to 11 atm and its temperature
          drops to 17 °C. Estimate the mass of oxygen taken out of the cylinder. (R = 8.31 J mol⁻¹ K⁻¹, molecular
          mass of O₂ = 32 u.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Using the gas law with the given pressures: n₁ = (15 × 1.013 × 10⁵ × 30 × 10⁻³)/(8.314 × 300) = 18.28
            mol, so m₁ = 18.28 × 32 = 584.8 g. After withdrawal, n₂ = (11 × 1.013 × 10⁵ × 30 × 10⁻³)/(8.314 × 290) =
            13.86 mol, so m₂ = 13.86 × 32 = 453.1 g.
          </p>
          <p>
            Mass taken out = 584.8 − 453.1 = <strong>≈ 0.131 kg (131.7 g)</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 12.5 — air bubble rising in a lake">
        <ProblemSolution.Problem>
          An air bubble of volume 1.0 cm³ rises from the bottom of a lake 40 m deep at a temperature of 12 °C. To
          what volume does it grow when it reaches the surface, which is at a temperature of 35 °C?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            At the bottom: P₁ = P_atm + ρgh = 1.013 × 10⁵ + 10³ × 9.8 × 40 = 4.933 × 10⁵ Pa; T₁ = 285 K. At the
            surface: P₂ = 1.013 × 10⁵ Pa; T₂ = 308 K. For a fixed amount of the (ideal) air:
          </p>
          <FormulaBlock latex={String.raw`V_2 = V_1\,\frac{P_1}{P_2}\,\frac{T_2}{T_1} = 1.0 \times \frac{4.933}{1.013} \times \frac{308}{285} = 5.26\ \text{cm}^3`} />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 12.6 — molecules in a room">
        <ProblemSolution.Problem>
          Estimate the total number of air molecules (inclusive of oxygen, nitrogen, water vapour and other
          constituents) in a room of capacity 25.0 m³ at a temperature of 27 °C and 1 atm pressure.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            N = PV/k_B T = (1.013 × 10⁵ × 25.0)/(1.38 × 10⁻²³ × 300) = <strong>≈ 6.1 × 10²⁶ molecules</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 12.7 — thermal energy of a helium atom">
        <ProblemSolution.Problem>
          Estimate the average thermal energy of a helium atom at (i) room temperature (27 °C), (ii) the temperature
          on the surface of the Sun (6000 K), (iii) the temperature of 10 million kelvin (the typical core
          temperature in the case of a star).
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Average thermal energy = (3/2)k_B T:
          </p>
          <p>
            (i) (3/2)(1.38 × 10⁻²³)(300) = <strong>6.2 × 10⁻²¹ J</strong>; (ii) (3/2)(1.38 × 10⁻²³)(6000) ={" "}
            <strong>1.24 × 10⁻¹⁹ J</strong>; (iii) (3/2)(1.38 × 10⁻²³)(10⁷) = <strong>2.07 × 10⁻¹⁶ J</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 12.8 — three vessels: neon, chlorine, UF₆">
        <ProblemSolution.Problem>
          Three vessels of equal capacity have gases at the same temperature and pressure. The first vessel contains
          neon (monatomic), the second contains chlorine (diatomic), and the third contains uranium hexafluoride
          (polyatomic). Do the vessels contain equal numbers of respective molecules? Is the root mean square speed
          of molecules the same in the three cases? If not, in which case is v_rms the largest?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Equal V, T and P ⟹ equal numbers of molecules (Avogadro&rsquo;s law) — <strong>yes</strong>.
          </p>
          <p>
            v_rms = √(3k_BT/m) depends on molecular mass, so the rms speeds are <strong>not the same</strong>.
            Neon is the lightest of the three, so <strong>v_rms is largest for neon</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 12.9 — rms speed of argon equals helium">
        <ProblemSolution.Problem>
          At what temperature is the root mean square speed of an atom in an argon gas cylinder equal to the rms
          speed of a helium gas atom at –20 °C? (Atomic mass of Ar = 39.9 u, of He = 4.0 u.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            v_rms ∝ √(T/M). For equal speeds, T_Ar/M_Ar = T_He/M_He with T_He = 273 − 20 = 253 K:
          </p>
          <FormulaBlock latex={String.raw`T_{Ar} = 253 \times \frac{39.9}{4.0} = 2523.7\ \text{K} \approx 2.52 \times 10^3\ \text{K}`} />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 12.10 — mean free path of nitrogen at 2 atm">
        <ProblemSolution.Problem>
          Estimate the mean free path and collision frequency of a nitrogen molecule in a cylinder containing
          nitrogen at 2.0 atm and temperature 17 °C. Take the radius of a nitrogen molecule to be roughly 1.0 Å.
          Compare the collision time with the time the molecule moves freely between two successive collisions.
          (Molecular mass of N₂ = 28.0 u.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Number density: n = P/k_BT = (2 × 1.013 × 10⁵)/(1.38 × 10⁻²³ × 290) = 5.06 × 10²⁵ m⁻³. Diameter d =
            2.0 × 10⁻¹⁰ m:
          </p>
          <FormulaBlock latex={String.raw`l = \frac{1}{\sqrt{2}\,\pi\,n\,d^2} = 1.11 \times 10^{-7}\ \text{m}`} />
          <p>
            v_rms = √(3RT/M) = √(3 × 8.31 × 290/0.028) = 508 m s⁻¹. Collision frequency = v_rms/l = 508/(1.11 ×
            10⁻⁷) ≈ <strong>4.58 × 10⁹ s⁻¹</strong>. The free time between collisions is τ ≈ 1/(4.58 × 10⁹) = 2.2 ×
            10⁻¹⁰ s, while the collision time itself is ~d/v_rms ≈ 2 × 10⁻¹⁰/508 ≈ 3.9 × 10⁻¹³ s — about 550 times
            smaller.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="k-revision">Quick Revision</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormulaCard>
          <p><strong>Ideal-gas laws</strong></p>
          PV = μRT = k_B NT; P = n k_B T; P = (ρ/M₀)RT. k_B = 1.38 × 10⁻²³ J K⁻¹, R = 8.314 J mol⁻¹ K⁻¹. Dalton:
          P = P₁ + P₂ + …. Molar volume = 22.4 L at STP.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Pressure and temperature (kinetic)</strong></p>
          P = (1/3)nm⟨v²⟩; PV = (2/3)E; E/N = ½m⟨v²⟩ = (3/2)k_B T. v_rms = √(3k_BT/m). Only averages stay
          constant; collisions are elastic.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Equipartition of energy</strong></p>
          Each translational/rotational DOF → ½ k_B T; each vibrational mode → k_B T (two quadratic terms). Monatomic
          3 DOF; rigid diatomic 5; diatomic with vibration 7; polyatomic 6 + 2f.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Specific heats of gases</strong></p>
          Monatomic: C_v = (3/2)R, C_p = (5/2)R, γ = 5/3. Rigid diatomic: (5/2)R, (7/2)R, γ = 7/5. Non-rigid
          diatomic: (7/2)R, (9/2)R, γ = 9/7. Polyatomic: C_v = (3+f)R, C_p = (4+f)R. C_p − C_v = R always. Solids: C
          = 3R.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Mean free path</strong></p>
          l = 1/(√2 π n d²); τ = l/⟨v⟩. Air at STP: n = 2.7 × 10²⁵ m⁻³, τ = 6.1 × 10⁻¹⁰ s, l = 2.9 × 10⁻⁷ m ≈
          1500 d. Large l ⇒ gaseous behaviour.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Highlights to remember</strong></p>
          Average KE/molecule = (3/2)k_B T for any ideal gas (independent of nature). Lighter molecules move faster
          at the same T. Internal energy of an ideal gas depends only on T. Mean free path ∝ 1/(n d²).
        </FormulaCard>
      </div>

      <MistakeCard
        mistake="Thinking the average kinetic energy of a molecule depends on the type of gas, or that heavier gases have higher average energy at the same temperature."
        correction="For any ideal gas the average kinetic energy per molecule is (3/2)k_B T — it depends ONLY on temperature. At the same temperature the average kinetic energy is identical for argon, chlorine and UF₆; what differs is the rms speed, which is larger for lighter molecules."
      />
      <MistakeCard
        mistake="Counting a vibrational mode as a single degree of freedom contributing ½ k_B T."
        correction="Each quadratic term in the energy is a degree of freedom (a mode of absorption). A vibrational mode has TWO quadratic terms — kinetic (½m(dy/dt)²) and potential (½ky²) — so it contributes 2 × ½ k_B T = k_B T, not ½ k_B T."
      />
      <MistakeCard
        mistake="Memorising C_v / C_p without distinguishing rigid vs non-rigid diatomic molecules."
        correction="Rigid (dumbbell) diatomic: 5 DOF → C_v = (5/2)R, C_p = (7/2)R, γ = 7/5. Including the vibrational mode: 7 quadratic terms → C_v = (7/2)R, C_p = (9/2)R, γ = 9/7. The table of predicted values (ignoring vibration) lists the rigid case."
      />
      <MistakeCard
        mistake="Using ⟨v⟩² instead of ⟨v²⟩, or confusing mean speed with rms speed."
        correction="⟨v²⟩ is (usually) NOT equal to (⟨v⟩)² — the average of a squared quantity is not the square of the average. The rms speed is the square root of the average of the squared speeds: v_rms = √⟨v²⟩ = √(3k_BT/m)."
      />
      <MistakeCard
        mistake="Assuming the mean free path is large because molecules are far apart (intermolecular distance is not the point)."
        correction="Intermolecular distance in a gas is only ~10 times the interatomic distance in solids/liquids. The mean free path is ~100 times the interatomic distance and ~1000 times the molecular size because the molecules are small AND the number density is low; l = 1/(√2 π n d²). It is l that produces typical gaseous behaviour."
      />
    </>
  );
}