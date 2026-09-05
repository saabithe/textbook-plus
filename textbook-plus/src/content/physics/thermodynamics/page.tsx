import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function ThermodynamicsChapter() {
  return (
    <>
      <h2 id="h-intro">11.1 Introduction</h2>
      <p>
        In the previous chapter we studied the thermal properties of matter. Here we study the laws that govern
        thermal energy and the processes where work is converted into heat and vice versa. In winter, rubbing our
        palms together makes them warmer — the work done in rubbing produces the &ldquo;heat&rdquo;. Conversely,
        in a steam engine the &ldquo;heat&rdquo; of the steam is used to do useful work in moving the pistons,
        which rotate the wheels of the train.
      </p>
      <p>
        Physics needs careful definitions of heat, temperature, work and so on. Historically it took a long time
        to arrive at the proper concept of heat. Before the modern picture, heat was regarded as a fine invisible{" "}
        <strong>fluid</strong> (called <strong>caloric</strong>) filling the pores of a substance. On contact
        between a hot body and a cold body, caloric was supposed to flow from the colder to the hotter body — just
        as water flows between two tanks at different heights until the levels equalise, so heat was thought to
        flow until the &ldquo;caloric levels&rdquo; (temperatures) equalise.
      </p>
      <Callout type="note" title="Heat is not a fluid — Count Rumford, 1798">
        Benjamin Thomson (Count Rumford) observed that boring a brass cannon generated a lot of heat — enough to
        boil water. Crucially, the amount of heat produced depended on the <strong>work done</strong> (by the
        horses turning the drill) but <strong>not</strong> on the sharpness of the drill. In the caloric picture a
        sharper drill would scoop out more heat fluid from the pores — but this was not observed. The natural
        explanation: <strong>heat is a form of energy</strong>, and the experiment demonstrated the conversion of
        energy from work to heat.
      </Callout>
      <p>
        <strong>Thermodynamics</strong> is the branch of physics that deals with the concepts of heat and
        temperature and the inter-conversion of heat and other forms of energy. It is a{" "}
        <strong>macroscopic</strong> science: it deals with bulk systems and does not go into the molecular
        constitution of matter. Its laws were formulated in the nineteenth century using only a few macroscopic
        variables (pressure, volume, temperature, mass, composition) that can be measured directly.
      </p>
      <p>
        The distinction between mechanics and thermodynamics is worth bearing in mind. Mechanics studies the
        motion of particles or bodies under forces; thermodynamics is not concerned with the motion of the system
        as a whole but with its <strong>internal macroscopic state</strong>. When a bullet is fired from a gun,
        what changes is the mechanical state of the bullet — its kinetic energy — not its temperature. When the
        bullet pierces wood and stops, its kinetic energy is converted into heat, raising the temperature of the
        bullet and the surrounding wood. Temperature is related to the energy of the{" "}
        <em>internal (disordered) motion</em> of the bullet, not to its motion as a whole.
      </p>

      <h2 id="h-thermal-equilibrium">11.2 Thermal Equilibrium</h2>
      <p>
        In mechanics, &ldquo;equilibrium&rdquo; means that the net external force and torque on a system are zero.
        In thermodynamics the term appears in a different context: the state of a system is an{" "}
        <strong>equilibrium state</strong> if the macroscopic variables that characterise it do not change with
        time. For example, a gas inside a closed rigid container, completely insulated from its surroundings, with
        fixed values of pressure, volume, temperature, mass and composition that do not change with time, is in a
        state of thermodynamic equilibrium.
      </p>
      <KeyPoint title="Walls matter">
        An <strong>adiabatic wall</strong> is an insulating wall that does not allow the flow of energy (heat)
        from one system to another. A <strong>diathermic wall</strong> is a conducting wall that allows heat to
        flow. Whether or not a system is in equilibrium depends on the surroundings and on the nature of the wall
        separating them.
      </KeyPoint>
      <p>
        Consider two gases A and B in separate containers with pressures and volumes (P<sub>A</sub>, V
        <sub>A</sub>) and (P<sub>B</sub>, V<sub>B</sub>). If they are separated by an adiabatic wall, any pair of
        values (P<sub>A</sub>, V<sub>A</sub>) is in equilibrium with any pair (P<sub>B</sub>, V
        <sub>B</sub>) — no energy flows. Replace the adiabatic wall by a diathermic wall, and the macroscopic
        variables of A and B change spontaneously until both attain equilibrium states: pressure and volume become
        (P<sub>A</sub>′, V<sub>A</sub>′) and (P<sub>B</sub>′, V<sub>B</sub>′) such that the new states are in
        equilibrium with each other and there is no more energy flow. We then say that A is in{" "}
        <strong>thermal equilibrium</strong> with B — in thermal equilibrium, the temperatures of the two systems
        are equal.
      </p>

      <h2 id="h-zeroth-law">11.3 Zeroth Law of Thermodynamics</h2>
      <p>
        How does one arrive at the concept of temperature? The <strong>Zeroth Law</strong> provides the clue.
        Imagine two systems A and B separated by an adiabatic wall, while each is in contact with a third system C
        via a conducting wall. The states of A and B change until both come to thermal equilibrium with C. Now
        replace the adiabatic wall between A and B with a conducting wall, and insulate C from A and B with an
        adiabatic wall.
      </p>
      <FormulaBlock latex={String.raw`\left.\begin{aligned}T_A &= T_C\\ T_B &= T_C\end{aligned}\;\right\}\;\Longrightarrow\; T_A = T_B`} />
      <KeyPoint title="Zeroth Law of Thermodynamics">
        <strong>&ldquo;Two systems in thermal equilibrium with a third system separately are in thermal
        equilibrium with each other.&rdquo;</strong> When two systems A and B are in thermal equilibrium, there
        must be a physical quantity that has the same value for both — this thermodynamic variable is called{" "}
        <strong>temperature (T)</strong>. If A and B are separately in equilibrium with C, then T<sub>A</sub> =
        T<sub>C</sub> and T<sub>B</sub> = T<sub>C</sub>, which implies T<sub>A</sub> = T<sub>B</sub>.
      </KeyPoint>
      <Callout type="note" title="Why is it called the Zeroth Law?">
        R. H. Fowler formulated this law in 1931 — <em>long after</em> the First and Second Laws had been stated,
        so it was numbered &ldquo;zero&rdquo; because it is logically prior to them. It gave us a formal,
        operational route to the concept of temperature, from which quantity (thermometry, the earlier chapter) we
        construct a temperature scale.
      </Callout>

      <h2 id="h-heat-internal-work">11.4 Heat, Internal Energy and Work</h2>
      <p>
        Temperature is a marker of the &ldquo;hotness&rdquo; of a body. It determines the direction of heat flow:
        heat flows from the body at higher temperature to the one at lower temperature, and the flow stops when the
        temperatures equalise (thermal equilibrium).
      </p>
      <p>
        The <strong>internal energy U</strong> of a system is the sum of the kinetic energies and potential
        energies of its molecules, evaluated in the frame in which the centre of mass of the system is at rest. It
        includes only the <em>disordered</em> energy associated with the random motion of the molecules — not the
        kinetic energy of the system as a whole. If we neglect the small intermolecular forces in a gas, its
        internal energy is just the sum of the kinetic energies of the various random motions (translational,
        rotational and vibrational).
      </p>
      <KeyPoint title="Internal energy is a state variable">
        U depends only on the <strong>state</strong> of the system, not on how that state was achieved — i.e. it is
        independent of the <strong>path</strong> taken to arrive at that state. The internal energy of a given mass
        of gas depends on its pressure, volume and temperature, not on its history.
      </KeyPoint>
      <p>
        There are two ways to change the internal energy of a system (say a gas in a cylinder with a movable
        piston):
      </p>
      <Stepper
        steps={[
          {
            label: "Heat transfer",
            description:
              "Put the cylinder in contact with a body at a higher temperature. The temperature difference causes a flow of energy (heat) into the gas, increasing its internal energy — or out of it to a colder surroundings.",
          },
          {
            label: "Work",
            description:
              "Push the piston down to do work on the gas, increasing its internal energy — or let the gas push the piston up to do work on the surroundings. Energy is transferred by means (moving a piston, raising a weight) that do not involve a temperature difference.",
          },
        ]}
      />
      <Callout type="important" title="Heat is energy in transit — not a property of a state">
        Heat is certainly energy, but it is the energy <strong>in transit</strong>. The state of a system is
        characterised by its internal energy, not by heat. &ldquo;A gas in a given state has a certain amount of
        heat&rdquo; is as meaningless as &ldquo;a gas in a given state has a certain amount of work&rdquo;; but
        &ldquo;a gas in a given state has a certain amount of internal energy&rdquo; is perfectly meaningful.
        Heat and work are <strong>not state variables</strong> — they are modes of energy transfer to a system
        that change its internal energy, which is a state variable.
      </Callout>

      <h2 id="h-first-law">11.5 First Law of Thermodynamics</h2>
      <p>Let ∆Q = heat supplied to the system by the surroundings, ∆W = work done by the system on the surroundings, and ∆U = change in internal energy. Conservation of energy then gives:</p>
      <FormulaBlock latex={String.raw`\Delta Q = \Delta U + \Delta W`} important />
      <p>
        The energy supplied to the system goes partly to increase its internal energy (∆U) and the rest into work
        on the environment (∆W). This is the <strong>First Law of Thermodynamics</strong> — the general law of
        conservation of energy applied to a system with energy transfer through heat and work. In the alternative
        form:
      </p>
      <FormulaBlock latex={String.raw`\Delta Q - \Delta W = \Delta U`} />
      <KeyPoint title="What depends on the path?">
        U is a state variable, so ∆U depends only on the initial and final states, not on the path. But ∆Q and ∆W
        individually <strong>do</strong> depend on the path — the combination ∆Q − ∆W (= ∆U) is however path
        independent. If a system goes through a process with ∆U = 0 (e.g. the isothermal expansion of an ideal
        gas), then <Formula>{String.raw`\Delta Q = \Delta W`}</Formula>: heat supplied is used up entirely in
        doing work on the environment.
      </KeyPoint>
      <p>
        For a gas in a cylinder with a movable piston doing work against a constant pressure P, force is pressure
        times area and area times displacement is volume, so:
      </p>
      <FormulaBlock latex={String.raw`\Delta W = P\,\Delta V\;\;\Longrightarrow\;\;\Delta Q = \Delta U + P\,\Delta V`} important />
      <Expandable variant="default" title="Application — 1 g of water, liquid to vapour at 100 °C">
        <ProblemSolution.Problem>
          For 1 g of water the measured latent heat is 2256 J/g, so ∆Q = 2256 J. At atmospheric pressure, 1 g of
          water occupies V<sub>l</sub> = 1 cm³ as liquid and V<sub>g</sub> = 1671 cm³ as vapour. Find how much of
          the heat goes into internal energy.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Work done by the water against the atmosphere: ∆W = P(V<sub>g</sub> − V<sub>l</sub>) = 1.013 × 10⁵ ×
            (1671 × 10⁻⁶) = <strong>169.2 J</strong>. From the First Law, ∆U = ∆Q − ∆W = 2256 − 169.2 ={" "}
            <strong>2086.8 J</strong>.
          </p>
          <p>
            Most of the heat goes to increase the internal energy of the water in the transition — only about 7.5%
            is used to push back the atmosphere.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-specific-heat">11.6 Specific Heat Capacity</h2>
      <p>
        If an amount of heat ∆Q changes the temperature of a substance from T to T + ∆T, we define the{" "}
        <strong>heat capacity</strong> S = ∆Q/∆T. S is proportional to the mass and can depend on temperature.
        Dividing by the mass m (in kg) gives the specific heat capacity:
      </p>
      <FormulaBlock latex={String.raw`s = \frac{1}{m}\,\frac{\Delta Q}{\Delta T}`} important />
      <p>
        s has unit J kg⁻¹ K⁻¹ and depends on the nature of the substance and its temperature. If the amount of
        substance is specified in moles μ instead of mass, we define the <strong>molar specific heat
        capacity</strong>:
      </p>
      <FormulaBlock latex={String.raw`C = \frac{1}{\mu}\,\frac{\Delta Q}{\Delta T}`} />
      <p>
        C is measured in J mol⁻¹ K⁻¹. Both C and s are independent of the amount of substance, but (as we shall
        see for gases) additional conditions may be needed — the process under which heat is supplied matters.
      </p>
      <KeyPoint title="Why solids give C ≈ 3R">
        The law of equipartition of energy (Chapter 12) predicts that a one-dimensional oscillator has average
        energy k<sub>B</sub>T, so an atom vibrating in three dimensions has average energy 3k<sub>B</sub>T. For a
        mole of a solid U = 3k<sub>B</sub>T × N<sub>A</sub> = 3RT. At constant pressure ∆Q ≅ ∆U since ∆V is
        negligible, so <Formula>{String.raw`C = \Delta Q/\Delta T = 3R`}</Formula>. The measured values agree with
        3R at ordinary temperatures (carbon is an exception), but the agreement breaks down at low temperatures.
      </KeyPoint>
      <TableCard
        caption="Table 11.1 — Specific and molar heat capacities of some solids at room temperature and atmospheric pressure. The molar values cluster near 3R ≈ 24.9 J mol⁻¹ K⁻¹, with carbon a striking exception."
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
        The old unit of heat was the <strong>calorie</strong>: the amount of heat required to raise the
        temperature of 1 g of water from 14.5 °C to 15.5 °C (the specific heat of water varies slightly with
        temperature, so a precise interval was needed). Since heat is a form of energy, the joule is preferable; 1
        cal = 4.186 J. The so-called <strong>mechanical equivalent of heat</strong> is simply a conversion factor
        between the two units of energy and is now superfluous. In SI, the specific heat capacity of water is{" "}
        <strong>4186 J kg⁻¹ K⁻¹</strong>.
      </p>
      <p>For an ideal gas, the molar specific heat capacities at constant pressure and at constant volume satisfy:</p>
      <FormulaBlock latex={String.raw`C_p - C_v = R`} important />
      <p>The proof: for 1 mole of ideal gas, ∆Q = ∆U + P∆V. At constant volume ∆V = 0, so</p>
      <FormulaBlock latex={String.raw`C_v = \frac{(\Delta Q)_v}{\Delta T} = \frac{\Delta U}{\Delta T}`} />
      <p>because U of an ideal gas depends only on temperature. At constant pressure,</p>
      <FormulaBlock latex={String.raw`C_p = \frac{(\Delta Q)_p}{\Delta T} = \frac{\Delta U}{\Delta T} + P\,\frac{\Delta V}{\Delta T}`} />
      <p>
        Using PV = RT for one mole, P(∆V/∆T)<sub>p</sub> = R, and the first terms cancel because (∆U/∆T) depends
        only on T. Hence C<sub>p</sub> − C<sub>v</sub> = R — a mole of gas at constant pressure must absorb extra
        heat to do the work of expansion.
      </p>

      <h2 id="h-state-vars">11.7 Thermodynamic State Variables and Equation of State</h2>
      <p>
        Every equilibrium state of a thermodynamic system is completely described by specific values of some{" "}
        <strong>state variables</strong>. For a gas: pressure, volume, temperature, mass (and composition if a
        mixture). A system is not always in equilibrium: a gas expanding freely into vacuum, or a mixture of
        petrol vapour and air ignited by a spark, passes through states with non-uniform pressure and temperature
        that cannot be described by state variables — until the gas attains uniform temperature and pressure and
        comes to equilibrium with its surroundings.
      </p>
      <p>
        The state variables are not necessarily independent. The connection between them is called the{" "}
        <strong>equation of state</strong>. For an ideal gas it is the ideal-gas relation:
      </p>
      <FormulaBlock latex={String.raw`PV = \mu RT`} important />
      <p>
        For a fixed amount of gas (given μ) there are only two independent variables, say P and V (or T and V).
        The pressure–volume curve for a fixed temperature is called an <strong>isotherm</strong>. Real gases have
        more complicated equations of state.
      </p>
      <KeyPoint title="Extensive vs intensive variables">
        <strong>Extensive</strong> variables indicate the &ldquo;size&rdquo; of the system — divide the system
        into two equal parts and they get halved (internal energy U, volume V, total mass M).{" "}
        <strong>Intensive</strong> variables stay the same in each part (pressure P, temperature T, density ρ). Use
        this as a consistency check: in ∆Q = ∆U + P∆V both sides are extensive, because the product of an
        intensive variable (P) with an extensive increment (∆V) is extensive.
      </KeyPoint>

      <h2 id="h-processes">11.8 Thermodynamic Processes</h2>
      <p>
        Several special processes recur throughout thermodynamics; their defining constraints are summarised
        below.
      </p>
      <TableCard
        caption="Table 11.2 — Some special thermodynamic processes. Each sets one quantity (or its flow) to a fixed value."
        headers={["Process", "Quantity fixed", "Key consequence"]}
        rows={[
          { cells: ["Isothermal", "Temperature T", "PV = constant (Boyle's law); for an ideal gas ∆U = 0, so Q = W"] },
          { cells: ["Isobaric", "Pressure P", "W = P(V₂ − V₁) = μR(T₂ − T₁); heat partly raises U, partly does work"] },
          { cells: ["Isochoric", "Volume V", "W = 0; all heat goes to change U and T (use C_v)"] },
          { cells: ["Adiabatic", "No heat flow (Q = 0)", "PV^γ = constant, γ = C_p/C_v; work changes U and hence T"] },
          { cells: ["Cyclic", "Returns to initial state", "∆U = 0; total heat absorbed = work done by the system"] },
        ]}
      />

      <h3 id="h-quasi-static">Quasi-static process</h3>
      <p>
        When external pressure is suddenly reduced (by lifting the weight on a piston), the gas passes through
        states that are not equilibrium states — non-equilibrium states do not have well-defined pressure and
        temperature. It is convenient to imagine an idealised process in which at <strong>every stage</strong> the
        system is in an equilibrium state. Such a process is, in principle, infinitely slow — hence{" "}
        <strong>quasi-static</strong> (&ldquo;nearly static&rdquo;).
      </p>
      <FormulaBlock latex={String.raw`\text{quasi-static: }\;P_{\text{ext}} \simeq P,\qquad T_{\text{surr}} \simeq T\;\;(\text{infinitesimally equal})`} />
      <Stepper
        steps={[
          {
            label: "Change pressure slowly",
            description:
              "Change the external pressure by a very small amount, allow the system to equalise its pressure with the surroundings, and repeat infinitely slowly until the system achieves the desired pressure P′.",
          },
          {
            label: "Change temperature with reservoirs",
            description:
              "Introduce an infinitesimal temperature difference between the system and surrounding reservoirs; by choosing reservoirs of progressively different temperatures from T to T′, the system smoothly achieves T′.",
          },
        ]}
      />
      <Callout type="note" title="An idealisation">
        A quasi-static process is a hypothetical construct. In practice, processes that are sufficiently slow and
        do not involve accelerated piston motion or large temperature gradients are reasonable approximations. We
        deal only with quasi-static processes from here on, except when stated otherwise.
      </Callout>

      <h3 id="h-isothermal">Isothermal process</h3>
      <p>
        Temperature is kept fixed. For an ideal gas, PV = constant — pressure varies inversely as volume, which is
        nothing but <strong>Boyle&rsquo;s Law</strong>. The work done in an isothermal expansion from (P₁, V₁) to
        (P₂, V₂) at temperature T is:
      </p>
      <FormulaBlock latex={String.raw`W = \int_{V_1}^{V_2} P\,dV = \mu R T \int_{V_1}^{V_2}\frac{dV}{V} = \mu R T \ln\!\frac{V_2}{V_1}`} important />
      <p>
        For an ideal gas, internal energy depends only on temperature, so in an isothermal process ∆U = 0 and the
        First Law gives <strong>Q = W</strong>. For V₂ &gt; V₁ (expansion) W &gt; 0 — the gas absorbs heat and does
        work; for V₂ &lt; V₁ (compression) W &lt; 0 — work is done on the gas and heat is released.
      </p>

      <h3 id="h-adiabatic">Adiabatic process</h3>
      <p>
        The system is insulated from its surroundings, so heat absorbed or released is zero. From the First Law,
        work done by the gas results in a decrease in its internal energy (and hence temperature, for an ideal
        gas). For an ideal gas in an adiabatic process:
      </p>
      <FormulaBlock latex={String.raw`PV^{\gamma} = \text{constant},\qquad \gamma = \frac{C_p}{C_v}`} important />
      <p>
        So if the state changes adiabatically from (P₁, V₁) to (P₂, V₂),
      </p>
      <FormulaBlock latex={String.raw`P_1V_1^{\gamma} = P_2V_2^{\gamma}`} />
      <FormulaBlock latex={String.raw`W = \frac{P_2V_2 - P_1V_1}{1-\gamma} = \frac{\mu R (T_1 - T_2)}{\gamma - 1}`} />
      <p>
        As expected: if the gas does work adiabatically (W &gt; 0), then T₂ &lt; T₁ — the gas cools; if work is
        done on the gas (W &lt; 0), T₂ &gt; T₁ — it heats up.
      </p>

      <h3 id="h-isochoric">Isochoric process</h3>
      <p>
        Volume is constant, so no work is done on or by the gas. From the First Law, the heat absorbed goes
        entirely to change the internal energy and the temperature. The temperature change for a given amount of
        heat is determined by the specific heat at constant volume.
      </p>

      <h3 id="h-isobaric">Isobaric process</h3>
      <p>
        Pressure is fixed. The work done by the gas is:
      </p>
      <FormulaBlock latex={String.raw`W = P(V_2 - V_1) = \mu R (T_2 - T_1)`} />
      <p>
        Since the temperature changes, so does the internal energy: the heat absorbed goes partly to increase
        internal energy and partly to do work. The temperature change is determined by the specific heat at
        constant pressure.
      </p>

      <h3 id="h-cyclic">Cyclic process</h3>
      <p>
        The system returns to its initial state. Since internal energy is a state variable, ∆U = 0 for a cyclic
        process, and the total heat absorbed equals the work done by the system.
      </p>

      <h2 id="h-second-law">11.9 Second Law of Thermodynamics</h2>
      <p>
        The First Law is the principle of conservation of energy. But common experience shows there are many
        conceivable processes allowed by the First Law that are never observed. Nobody has ever seen a book lying
        on a table jump to a height by itself — yet if conservation of energy were the only restriction, the table
        could cool spontaneously, convert some of its internal energy into equal mechanical energy of the book, and
        the book would hop up. This never happens, so some additional basic principle of nature must forbid it.
      </p>
      <KeyPoint title="Second Law of Thermodynamics">
        The Second Law disallows many phenomena consistent with the First Law and puts a fundamental limit on a
        heat engine&rsquo;s efficiency and a refrigerator&rsquo;s co-efficient of performance: efficiency of a heat
        engine can never be unity, and the co-efficient of performance can never be infinite. Two equivalent
        statements:
        <ul>
          <li>
            <strong>Kelvin-Planck:</strong> No process is possible whose sole result is the absorption of heat
            from a reservoir and the complete conversion of the heat into work.
          </li>
          <li>
            <strong>Clausius:</strong> No process is possible whose sole result is the transfer of heat from a
            colder object to a hotter object.
          </li>
        </ul>
        The two statements are completely equivalent and can be proved so.
      </KeyPoint>

      <h2 id="h-reversible">11.10 Reversible and Irreversible Processes</h2>
      <p>
        Consider a process in which a system goes from state i to state f, absorbing heat Q from the surroundings
        and performing work W. Can we reverse it and bring <em>both the system and the surroundings</em> to their
        initial states with no other effect anywhere? For most processes in nature the answer is no — the{" "}
        <strong>spontaneous processes of nature are irreversible</strong>.
      </p>
      <Stepper
        steps={[
          {
            label: "Nature's irreversible processes",
            description:
              "A vessel base hotter than its other parts cools to uniform temperature (the reverse would violate the Second Law); free expansion of a gas; combustion of petrol-air mixture; cooking gas diffusing from a cylinder into the whole room; stirring a liquid, converting work into heat.",
          },
          {
            label: "Two causes of irreversibility",
            description:
              "Many processes (free expansion, an explosive chemical reaction) take the system through non-equilibrium states; and most processes involve dissipative effects — friction and viscosity — which can be minimised but never fully eliminated.",
          },
        ]}
      />
      <KeyPoint title="What makes a process reversible?">
        A process is <strong>reversible</strong> if it can be turned back so that both the system and the
        surroundings return to their original states, with no other change anywhere else in the universe. This is
        an idealised notion: the process must be <strong>quasi-static</strong> (in equilibrium at every stage) and
        have <strong>no dissipative effects</strong>. A quasi-static isothermal expansion of an ideal gas in a
        cylinder fitted with a frictionless movable piston is reversible.
      </KeyPoint>
      <p>
        Reversibility is basic because thermodynamics seeks the efficiency with which heat converts into work. A
        heat engine based on idealised reversible processes achieves the <strong>highest efficiency possible</strong>;
        all other engines, involving irreversibility in any way, have lower than this limiting efficiency.
      </p>

      <h2 id="h-carnot">11.11 Carnot Engine</h2>
      <p>
        Suppose we have a hot reservoir at temperature T₁ and a cold reservoir at T₂. What is the maximum
        efficiency of a heat engine operating between them, and which cycle achieves it? Sadi Carnot, a French
        engineer, answered this in 1824 — correctly, even though the basic concepts of heat and thermodynamics had
        yet to be firmly established.
      </p>
      <p>
        The ideal engine between two temperatures must be a <strong>reversible</strong> engine, so its heat
        exchange must be isothermal (to avoid finite temperature differences), and the temperature changes from T₁
        to T₂ and back must be brought about by <strong>adiabatic</strong> processes (which involve no heat flow
        from any reservoir). The sequence of steps — the Carnot cycle, with an ideal gas as working substance — is:
      </p>
      <Stepper
        steps={[
          {
            label: "Step 1 → 2: Isothermal expansion at T₁",
            description:
              "From (P₁, V₁, T₁) to (P₂, V₂, T₁). The gas absorbs heat Q₁; W₁→₂ = Q₁ = μRT₁ ln(V₂/V₁).",
          },
          {
            label: "Step 2 → 3: Adiabatic expansion T₁ → T₂",
            description:
              "From (P₂, V₂, T₁) to (P₃, V₃, T₂). No heat exchange; W₂→₃ = μR(T₁ − T₂)/(γ − 1).",
          },
          {
            label: "Step 3 → 4: Isothermal compression at T₂",
            description:
              "From (P₃, V₃, T₂) to (P₄, V₄, T₂). The gas releases heat Q₂; W₃→₄ = Q₂ = μRT₂ ln(V₃/V₄).",
          },
          {
            label: "Step 4 → 1: Adiabatic compression T₂ → T₁",
            description:
              "Back to (P₁, V₁, T₁). No heat exchange; W₄→₁ = μR(T₁ − T₂)/(γ − 1).",
          },
        ]}
      />
      <p>
        The total work done by the gas in one complete cycle is W = W₁→₂ + W₂→₃ − W₃→₄ − W₄→₁. Using the
        adiabatic relations it follows that V₂/V₁ = V₃/V₄, which gives the celebrated result:
      </p>
      <FormulaBlock latex={String.raw`\eta = \frac{W}{Q_1} = 1 - \frac{Q_2}{Q_1} = 1 - \frac{T_2}{T_1}`} important />
      <KeyPoint title="Carnot's theorem">
        Working between two given temperatures, <strong>no engine can have efficiency greater than the Carnot
        engine</strong>, and the Carnot efficiency is <strong>independent of the nature of the working
        substance</strong> — we are justified in using an ideal gas to calculate η. It also gives the universal
        relation Q₁/Q₂ = T₁/T₂, which can be used to define a thermodynamic temperature scale independent of any
        particular system. Reversing every step of the Carnot cycle yields a reversible refrigerator.
      </KeyPoint>
      <Callout type="note" title="Sign conventions">
        If Q &gt; 0, heat is added to the system; if Q &lt; 0, heat is removed. If W &gt; 0, work is done by the
        system; if W &lt; 0, work is done on the system. The Second Law implies no heat engine can have η = 1 and
        no refrigerator can have co-efficient of performance α = ∞.
      </Callout>

      <h2 id="h-exercises">Exercises 11.1 – 11.8</h2>
      <p>NCERT<sup>Reprint 2025-26</sup> exercises with hints and the essential answers.</p>

      <Expandable variant="exercise" title="Exercise 11.1 — geyser fuel consumption">
        <ProblemSolution.Problem>
          A geyser heats water flowing at the rate of 3.0 litres per minute from 27 °C to 77 °C. If the geyser
          operates on a gas burner, what is the rate of consumption of the fuel if its heat of combustion is 4.0 ×
          10⁴ J/g?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Heat needed per minute: m s ∆T = (3.0 kg) × (4.186 × 10³ J kg⁻¹ K⁻¹) × (77 − 27) K = 6.279 × 10⁵
            J/min. Fuel burned per minute: 6.279 × 10⁵ / (4.0 × 10⁴) = <strong>15.7 ≈ 16 g min⁻¹</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 11.2 — heating nitrogen at constant pressure">
        <ProblemSolution.Problem>
          What amount of heat must be supplied to 2.0 × 10⁻² kg of nitrogen (at room temperature) to raise its
          temperature by 45 °C at constant pressure? (Molecular mass of N₂ = 28; R = 8.3 J mol⁻¹ K⁻¹.)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Moles: μ = 20 g / 28 g mol⁻¹ = 0.714 mol. N₂ is diatomic, so C<sub>p</sub> = (7/2)R = 29.05 J mol⁻¹ K⁻¹.
            At constant pressure Q = μ C<sub>p</sub> ∆T = 0.714 × 29.05 × 45 ={" "}
            <strong>≈ 933 J</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 11.3 — explain why">
        <ProblemSolution.Problem>
          Explain why: (a) two bodies at different temperatures T₁ and T₂, brought into thermal contact, do not
          necessarily settle to the mean temperature (T₁ + T₂)/2; (b) the coolant in a chemical or nuclear plant
          should have high specific heat; (c) the air pressure in a car tyre increases during driving; (d) the
          climate of a harbour town is more temperate than that of a town in a desert at the same latitude.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) The final temperature is set by <strong>energy conservation weighted by the heat capacities</strong>:
            m₁s₁(T − T₁) = m₂s₂(T₂ − T), which gives (T₁ + T₂)/2 only when m₁s₁ = m₂s₂. Bodies with different
            masses and specific heats settle to a capacity-weighted value. <br />
            (b) A <strong>high specific heat</strong> removes the most heat per unit temperature rise for a given
            mass of coolant, keeping the plant&rsquo;s parts from overheating. <br />
            (c) While driving, the tyres heat up (friction with the road and flexing). At roughly constant volume PV
            = μRT, so as temperature rises the <strong>pressure rises</strong>. <br />
            (d) The sea has a high specific heat, so it warms and cools slowly, moderating the harbour town&rsquo;s
            temperature swings; desert land heats and cools quickly, giving extreme temperatures.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 11.4 — adiabatic compression factor">
        <ProblemSolution.Problem>
          A cylinder with a movable piston contains 3 moles of hydrogen at standard temperature and pressure. The
          walls are heat insulators and the piston is insulated by a pile of sand. By what factor does the
          pressure increase if the gas is compressed to half its original volume?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            The sand-cover makes the process <strong>adiabatic</strong>: P₁V₁^γ = P₂V₂^γ with V₂ = V₁/2, so P₂
            /P₁ = (V₁/V₂)^γ = 2^γ. Hydrogen (H₂) is diatomic: γ = C<sub>p</sub>/C<sub>v</sub> = 7/5 = 1.4. Hence
            P₂/P₁ = 2^1.4 = <strong>2.64</strong> — the pressure increases by about 2.6 times.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 11.5 — path-independent ∆U">
        <ProblemSolution.Problem>
          In changing the state of a gas adiabatically from state A to state B, an amount of work equal to 22.3 J
          is done <em>on</em> the system. If the gas is taken from A to B via a process in which the net heat
          absorbed is 9.35 cal, how much is the net work done <em>by</em> the system in the latter case? (1 cal =
          4.19 J)
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Adiabatic path: Q = 0, and work done on the gas = 22.3 J means W<sub>by</sub> = −22.3 J. First Law: 0
            = ∆U + W<sub>by</sub> = ∆U − 22.3 ⟹ <strong>∆U = 22.3 J</strong>, a property of the change A→B.
          </p>
          <p>
            Second path: Q = 9.35 × 4.19 = 39.2 J. First Law: ∆U = Q − W<sub>by</sub>, so W<sub>by</sub> = 39.2 −
            22.3 = <strong>16.9 J</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 11.6 — free expansion through a stopcock">
        <ProblemSolution.Problem>
          Two cylinders A and B of equal capacity are connected via a stopcock. A contains gas at STP; B is
          completely evacuated. The entire system is thermally insulated and the stopcock is suddenly opened. (a)
          What is the final pressure in A and B? (b) What is the change in internal energy of the gas? (c) What is
          the change in temperature? (d) Do the intermediate states lie on the P-V-T surface?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            (a) The gas expands freely into twice the volume; no work is done (it expands into vacuum), so the
            temperature stays at its initial value and by Boyle&rsquo;s law the pressure halves:{" "}
            <strong>P/2 (0.5 atm) in each cylinder</strong>. <br />
            (b) <strong>∆U = 0</strong> — no heat (insulated) and no work (free expansion). <br />
            (c) <strong>No change in temperature</strong> (ideal gas; ∆U = 0 ⟹ T constant). <br />
            (d) <strong>No</strong> — this free expansion is rapid; the intermediate states are non-equilibrium
            states that do not satisfy the gas equation and do not lie on the P-V-T surface. The system eventually
            settles to a new equilibrium state.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 11.7 — rate of internal energy increase">
        <ProblemSolution.Problem>
          An electric heater supplies heat to a system at a rate of 100 W. If the system performs work at a rate of
          75 joules per second, at what rate is the internal energy increasing?
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            dU/dt = dQ/dt − dW/dt = 100 − 75 = <strong>25 J s⁻¹ (25 W)</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable variant="exercise" title="Exercise 11.8 — work from D to E to F">
        <ProblemSolution.Problem>
          A thermodynamic system is taken from its original state D to an intermediate state E by the linear
          process shown in the figure (Fig. 11.13: D = (V 2.0 m³, P 300 N/m²), E = (V 5.0 m³, P 600 N/m²)). Its
          volume is then reduced from E back to the original value by an isobaric process to F. Calculate the total
          work done by the gas from D to E to F.
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            Work on a P-V diagram is the area under the curve. D→E is linear (trapezium under it) and E→F is
            isobaric at P = 600 N/m² back to V = 2.0 m³, so the region bounded by D→E→F→(2.0, 300) is a triangle:
          </p>
          <p>
            Area = ½ × (V<sub>E</sub> − V<sub>F</sub>) × (P<sub>E</sub> − P<sub>D</sub>) = ½ × (5.0 − 2.0) × (600
            − 300) = ½ × 3.0 × 300 = <strong>450 J</strong>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormulaCard>
          <p><strong>First law &amp; sign convention</strong></p>
          ∆Q = ∆U + ∆W (heat in; work by system, positive out). At constant pressure ∆W = P∆V. Q &gt; 0 heat in,
          Q &lt; 0 heat out; W &gt; 0 work by system, W &lt; 0 work on system. ∆U is path independent; ∆Q, ∆W are
          not.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Heat capacities</strong></p>
          Specific s = (1/m)∆Q/∆T; molar C = (1/μ)∆Q/∆T. Solids: C ≈ 3R (equipartition; carbon excepted). Ideal
          gas: C_p − C_v = R. Water: 4186 J kg⁻¹K⁻¹; 1 cal = 4.186 J.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Special processes</strong></p>
          Isothermal: PV = const, W = μRT ln(V₂/V₁), Q = W (∆U = 0). Adiabatic: PV^γ = const, γ = C_p/C_v, W =
          μR(T₁ − T₂)/(γ − 1). Isochoric: W = 0. Isobaric: W = P∆V = μR∆T. Cyclic: ∆U = 0, Q = W.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Equilibrium &amp; state variables</strong></p>
          Zeroth law: two systems each in equilibrium with a third are in equilibrium with each other — defines
          temperature. State variables (P, V, T, U) vs path quantities (Q, W). Equation of state: PV = μRT.
          Intensive (P, T, ρ) vs extensive (U, V, M).
        </FormulaCard>
        <FormulaCard>
          <p><strong>Carnot engine</strong></p>
          Reversible, operating between T₁ (source) and T₂ (sink): two isotherms joined by two adiabats. η = 1 −
          T₂/T₁; Q₁/Q₂ = T₁/T₂. No engine is more efficient; efficiency independent of working substance.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Second law &amp; reversibility</strong></p>
          Kelvin-Planck: no process with sole result heat→work from one reservoir. Clausius: no process with sole
          result cold→hot heat flow. Reversible = quasi-static + no dissipation; natural processes are
          irreversible.
        </FormulaCard>
      </div>

      <MistakeCard
        mistake="Thinking heat, work and internal energy are the same kind of quantity — e.g. &ldquo;a hot gas has a lot of heat&rdquo;."
        correction="Heat and work are energy IN TRANSIT, not properties of a state — a gas in a given state has a definite internal energy U, but no &ldquo;amount of heat&rdquo; or &ldquo;amount of work&rdquo;. It is meaningful to say &ldquo;heat was supplied&rdquo; or &ldquo;work was done&rdquo;, never that the state <em>contains</em> heat."
      />
      <MistakeCard
        mistake="Applying ∆Q = ∆U + P∆V with signs flipped, or treating ∆U as path-dependent."
        correction="First law: ∆Q is heat INTO the system and ∆W is work done BY the system. ∆U depends only on the initial and final states (state variable); ∆Q and ∆W depend on the path, but their difference is path-independent. In adiabatic work-on-gas problems, W_by is negative."
      />
      <MistakeCard
        mistake="Using an isochoric or any non-adiabatic step to move between the two reservoirs in a Carnot engine."
        correction="Between two fixed temperatures only two reversible paths exist: an isothermal (heat exchange, no temperature change) and an adiabatic (temperature change, no heat exchange). Any other quasi-static path would demand a continuous series of reservoirs, so it is not a two-temperature reversible engine."
      />
      <MistakeCard
        mistake="Believing a slow process is automatically reversible, or that free expansion is quasi-static."
        correction="Reversibility requires quasi-static behaviour AND zero dissipative effects (friction, viscosity). Free expansion into vacuum is irreversible however slow it is perceived — the gas passes through non-equilibrium states with no well-defined P and T, so work W = 0 but the process cannot be turned back."
      />
      <MistakeCard
        mistake="Plugging °C into η = 1 − T₂/T₁ or into PV=μRT, which need absolute temperatures."
        correction="The Carnot efficiency and all gas-law relations require ABSOLUTE (kelvin) temperatures. A difference ∆T may be expressed in °C or K, but ratios like T₁/T₂ and products μRT must use kelvin (T = t_C + 273.15)."
      />
    </>
  );
}