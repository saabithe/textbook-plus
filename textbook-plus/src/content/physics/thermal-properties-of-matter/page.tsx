import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function ThermalPropertiesOfMatterChapter() {
  return (
    <>
      <h2 id="h-intro">10.1 Introduction</h2>
      <p>
        We all have common-sense notions of heat and temperature. A kettle with boiling water is hotter than a
        box containing ice, but physics needs careful definitions of <strong>heat</strong>,{" "}
        <strong>temperature</strong> and the processes by which heat flows from one body to another. Along the
        way you will discover why blacksmiths heat the iron ring before fitting it on the rim of a wooden wheel
        of a horse cart, why the wind at the beach often reverses direction after the sun goes down, and why the
        temperature of water does not change while it boils or freezes even though a great deal of heat flows in
        or out.
      </p>

      <h2 id="h-temp-heat">10.2 Temperature and Heat</h2>
      <p>
        <strong>Temperature</strong> is a relative measure (indication) of hotness or coldness. An object at a
        higher temperature than another is said to be hotter — <em>hot</em> and <em>cold</em> are relative terms,
        like tall and short. We can perceive temperature by touch, but this temperature sense is unreliable and
        its range too limited for scientific purposes.
      </p>
      <Callout type="note" title="Heat — the precise definition">
        A glass of ice-cold water on a summer table warms up, while a cup of hot tea cools down: heat flows
        between the system and its surroundings until both reach the same temperature. So{" "}
        <strong>heat</strong> is the <em>form of energy transferred between two (or more) systems — or a system
        and its surroundings — by virtue of a temperature difference</em>. Its SI unit is the joule (J); the SI
        unit of temperature is the kelvin (K), with degree Celsius (°C) also in common use.
      </Callout>

      <h2 id="h-measurement">10.3 Measurement of Temperature</h2>
      <p>
        A thermometer measures temperature using some physical property that changes with temperature — the{" "}
        <strong>thermometric property</strong>. The commonly used property is the variation of the volume of a
        liquid: in liquid-in-glass thermometers, mercury or alcohol vary linearly with temperature over a wide
        range.
      </p>
      <p>
        Any standard scale needs two fixed reference points. Since all substances change dimensions with
        temperature, no absolute reference for expansion exists — instead the fixed points are linked to physical
        phenomena that always happen at the same temperature. The <strong>ice point</strong> (freezing point) and{" "}
        <strong>steam point</strong> (boiling point) of pure water under standard pressure are the two convenient
        fixed points. On the Fahrenheit scale they are assigned 32 °F and 212 °F (180 equal intervals); on the
        Celsius scale 0 °C and 100 °C (100 equal intervals).
      </p>
      <FormulaBlock latex={String.raw`t_F = \frac{9}{5}\, t_C + 32`} important />
      <Callout type="important" title="Scale pitfalls">
        The same temperature difference reads differently on the two scales: a change of 100 °C equals a change
        of 180 °F, so 1 Celsius degree = (9/5) Fahrenheit degrees. Never compare numbers — convert first. For
        example 77 °F = (77 − 32) × 5/9 = 25 °C.
      </Callout>

      <h2 id="h-ideal-gas">10.4 Ideal-Gas Equation and Absolute Temperature</h2>
      <p>
        Liquid-in-glass thermometers disagree at temperatures other than the fixed points because different
        liquids expand differently. A <strong>gas thermometer</strong>, however, agrees for every gas, because
        <strong>all gases at low densities exhibit the same expansion behaviour</strong>. The variables describing
        a given quantity of gas are pressure, volume and temperature (where T = t + 273.15).
      </p>
      <Stepper
        steps={[
          {
            label: "Boyle's law (1661)",
            description:
              "At constant temperature, PV = constant — discovered by Robert Boyle (1627–1691). Halving the volume doubles the pressure.",
          },
          {
            label: "Charles' law",
            description:
              "At constant pressure, V/T = constant — discovered by Jacques Charles (1747–1823). A gas expands on heating at fixed pressure.",
          },
          {
            label: "Combine into the ideal-gas equation",
            description:
              "Since PV = constant and V/T = constant for a given quantity, PV/T is also constant. Generalising to any quantity of any low-density gas: PV = μRT, where μ is the number of moles and R the universal gas constant.",
          },
        ]}
      />
      <FormulaBlock latex={String.raw`PV = \mu R T`} important />
      <FormulaBlock latex={String.raw`R = 8.31\;\mathrm{J\,mol^{-1}\,K^{-1}}`} />
      <p>
        Since PV ∝ T, a gas at constant volume gives P ∝ T — a <strong>constant-volume gas thermometer</strong>{" "}
        reads temperature in terms of pressure. Extrapolating the pressure-versus-temperature lines of low-density
        gases to zero pressure gives the same interception for every gas:{" "}
        <strong>−273.15 °C, called absolute zero</strong> — the foundation of the{" "}
        <strong>Kelvin scale</strong> (or absolute scale), named after Lord Kelvin. On this scale
        −273.15 °C corresponds to 0 K.
      </p>
      <FormulaBlock latex={String.raw`T = t_C + 273.15`} important />
      <KeyPoint title="Kelvin vs Celsius">
        The <strong>size of the unit</strong> is identical on both scales — a 1 K change equals a 1 °C change.
        They differ only in their origin (zero point). Because absolute temperatures enter the gas laws
        (T ∝ P, T ∝ V), kelvin must always be used in PV = μRT and similar relations.
      </KeyPoint>

      <h2 id="h-expansion">10.5 Thermal Expansion</h2>
      <p>
        Most substances expand on heating and contract on cooling: a sealed metallic lid loosens in hot water, the
        mercury rises in a warm thermometer, and a balloon partially inflated in a cool room swells in warm water.
        The increase in the dimensions of a body caused by a rise in temperature is{" "}
        <strong>thermal expansion</strong> — in length (<strong>linear</strong>), in area (
        <strong>area</strong>) or in volume (<strong>volume</strong>) expansion.
      </p>

      <h3 id="h-linear-expansion">Linear expansion</h3>
      <p>
        For a long rod, small changes ΔT produce fractional length changes directly proportional to ΔT:
      </p>
      <FormulaBlock latex={String.raw`\frac{\Delta l}{l} = \alpha_l\, \Delta T`} important />
      <p>
        α<sub>l</sub> is the <strong>coefficient of linear expansion</strong>, characteristic of the material.
        Metals normally expand more and have relatively high α<sub>l</sub>.
      </p>
      <TableCard
        caption="Table 10.1 — Coefficient of linear expansion of some materials (0–100 °C, in 10⁻⁵ K⁻¹). Copper expands about five times more than Pyrex for the same rise."
        headers={["Material", "α_l (10⁻⁵ K⁻¹)"]}
        rows={[
          { cells: ["Aluminium", "2.5"] },
          { cells: ["Brass", "1.8"] },
          { cells: ["Iron", "1.2"] },
          { cells: ["Copper", "1.7"] },
          { cells: ["Silver", "1.9"] },
          { cells: ["Gold", "1.4"] },
          { cells: ["Glass (pyrex)", "0.32"] },
          { cells: ["Lead", "0.29"] },
        ]}
      />

      <h3 id="h-volume-expansion">Volume expansion</h3>
      <p>Similarly, for a substance of volume V:</p>
      <FormulaBlock latex={String.raw`\frac{\Delta V}{V} = \alpha_V\, \Delta T`} important />
      <p>
        α<sub>V</sub> is the <strong>coefficient of volume expansion</strong>. It is not strictly constant — it
        becomes constant only at high temperature. Thermal expansion of solids and liquids is rather small, with
        Pyrex glass and invar (an iron-nickel alloy) particularly low. Alcohol (ethanol) has a bigger α_V than
        mercury and expands more for the same rise.
      </p>
      <TableCard
        caption="Table 10.2 — Coefficient of volume expansion of some substances (0–100 °C, K⁻¹). Note water's relative density anomaly."
        headers={["Material", "α_V (K⁻¹)"]}
        rows={[
          { cells: ["Aluminium", "7 × 10⁻⁵"] },
          { cells: ["Brass", "6 × 10⁻⁵"] },
          { cells: ["Iron", "3.55 × 10⁻⁵"] },
          { cells: ["Paraffin", "58.8 × 10⁻⁵"] },
          { cells: ["Glass (ordinary)", "2.5 × 10⁻⁵"] },
          { cells: ["Glass (pyrex)", "1 × 10⁻⁵"] },
          { cells: ["Hard rubber", "2.4 × 10⁻⁴"] },
          { cells: ["Invar", "2 × 10⁻⁶"] },
          { cells: ["Mercury", "18.2 × 10⁻⁵"] },
          { cells: ["Water", "20.7 × 10⁻⁵"] },
          { cells: ["Alcohol (ethanol)", "110 × 10⁻⁵"] },
        ]}
      />
      <Callout type="important" title="Water's anomalous behaviour">
        Water <strong>contracts on heating between 0 °C and 4 °C</strong> and has its{" "}
        <strong>maximum density at 4 °C</strong>. As a lake cools toward 4 °C the surface water becomes denser and
        sinks; once the top layer falls below 4 °C it becomes <em>less</em> dense and stays at the surface, where
        it freezes. Without this, lakes and ponds would freeze from the bottom up, destroying much of their animal
        and plant life.
      </Callout>
      <p>
        Gases expand far more than solids and liquids. For an ideal gas at constant pressure, PV = μRT gives
        PΔV = μRΔT and:
      </p>
      <FormulaBlock latex={String.raw`\alpha_V = \frac{1}{T}`} important />
      <p>
        At 0 °C, α_V = 3.7 × 10⁻³ K⁻¹ (about 1000 times the value for typical liquids); at room temperature about
        3300 × 10⁻⁶ K⁻¹ — orders of magnitude larger than for typical liquids.
      </p>

      <h3 id="h-alpha-relation">Relation between α_V and α_l</h3>
      <p>
        A cube of side l expanding equally in all directions: Δl = α_l l ΔT, so
      </p>
      <FormulaBlock latex={String.raw`\Delta V = (l + \Delta l)^3 - l^3 \simeq 3 l^2 \Delta l`} />
      <FormulaBlock latex={String.raw`\frac{\Delta V}{V} = \frac{3\Delta l}{l} = 3 \alpha_l \Delta T \quad\Longrightarrow\quad \alpha_V = 3\alpha_l`} important />

      <h3 id="h-thermal-stress">Thermal stress</h3>
      <p>
        If a rod is rigidly clamped so it cannot expand, heating it produces a{" "}
        <strong>compressive strain and corresponding stress</strong> — the{" "}
        <strong>thermal stress</strong>. For a steel rail 5 m long, area 40 cm², prevented from expanding while
        the temperature rises 10 °C (α_l = 1.2 × 10⁻⁵ K⁻¹):
      </p>
      <FormulaBlock latex={String.raw`\frac{\Delta l}{l} = \alpha_l \Delta T = 1.2\times10^{-5}\times 10 = 1.2\times10^{-4}`} />
      <FormulaBlock latex={String.raw`\frac{\Delta F}{A} = Y_{\mathrm{steel}}\,\frac{\Delta l}{l} = 2\times10^{11}\times1.2\times10^{-4} = 2.4\times10^7\;\mathrm{N\,m^{-2}}`} important />
      <p>
        That stress corresponds to a force ΔF ≈ 2.4 × 10⁷ × 40 × 10⁻⁴ ≈ 10⁵ N — easily enough to bend two steel
        rails in contact. This is why rails (and bridges) have expansion gaps.
      </p>

      <Expandable variant="example" title="Example 10.1 — coefficient of area expansion">
        <ProblemSolution.Problem>
            Show that the coefficient of area expansion, (ΔA/A)/ΔT, of a rectangular sheet of a solid is twice its
            linear expansivity α_l.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Consider a rectangular sheet of length a and breadth b. When ΔT increases,</p>
            <FormulaBlock latex={String.raw`\Delta a = \alpha_l\,a\,\Delta T,\qquad \Delta b = \alpha_l\,b\,\Delta T`} />
            <p>The area increase splits into three regions:</p>
            <FormulaBlock latex={String.raw`\Delta A = a\,\Delta b + b\,\Delta a + \Delta a\,\Delta b`} />
            <FormulaBlock latex={String.raw`= 2\alpha_l\,ab\,\Delta T + (\alpha_l)^2 ab\,(\Delta T)^2 = \alpha_l\,A\,\Delta T\,(2 + \alpha_l\Delta T)`} />
            <p>
              Since α_l ≈ 10⁻⁵ K⁻¹, the product α_lΔT is negligible compared with 2. Hence (ΔA/A)/ΔT = 2α_l — the
              coefficient of area expansion is twice the linear expansivity.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="example" title="Example 10.2 — blacksmith's iron ring">
        <ProblemSolution.Problem>
            A blacksmith fits an iron ring on the rim of a wooden wheel of a horse cart. The diameter of the rim
            and the iron ring are 5.243 m and 5.231 m respectively at 27 °C. To what temperature should the ring
            be heated so as to fit the rim?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <FormulaBlock latex={String.raw`L_{T_2} = L_{T_1}\left[1 + \alpha_l(T_2 - T_1)\right]`} />
            <FormulaBlock latex={String.raw`5.243 = 5.231\left[1 + 1.2\times10^{-5}(T_2 - 27^\circ\mathrm{C})\right]`} />
            <FormulaBlock latex={String.raw`T_2 - 27 = \frac{5.243/5.231 - 1}{1.2\times10^{-5}} = \frac{2.294\times10^{-3}}{1.2\times10^{-5}} = 191^\circ\mathrm{C}`} important />
            <FormulaBlock latex={String.raw`T_2 = 218^\circ\mathrm{C}`} important />
            <p>
              The ring is heated to about 218 °C so its diameter expands 12 mm to slip over the wooden rim; on
              cooling it grips tightly.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-specific-heat">10.6 Specific Heat Capacity</h2>
      <p>
        Experiment shows that the heat needed to warm a substance depends on its mass m, the temperature change ΔT
        and the nature of the substance — heating twice the mass or raising the temperature twice both take twice
        the time (hence twice the heat), while the same mass of mustard oil needs less heat than water for the same
        rise. The <strong>heat capacity</strong> S of a substance is
      </p>
      <FormulaBlock latex={String.raw`S = \frac{\Delta Q}{\Delta T}`} />
      <p>
        and the <strong>specific heat capacity</strong> s — the heat per unit mass per unit temperature change — is
      </p>
      <FormulaBlock latex={String.raw`\Delta Q = m\,s\,\Delta T \qquad s = \frac{1}{m}\frac{\Delta Q}{\Delta T}`} important />
      <p>
        Its SI unit is J kg⁻¹ K⁻¹. If the amount is specified in moles μ rather than mass, we get the{" "}
        <strong>molar specific heat capacity</strong> C = ΔQ/(μΔT), in J mol⁻¹ K⁻¹. For gases the molar specific
        heat depends on the conditions — C_p at constant pressure or C_V at constant volume (Chapter 11).
      </p>
      <TableCard
        caption="Table 10.3 — Specific heat capacity of some substances at room temperature and atmospheric pressure (J kg⁻¹ K⁻¹)."
        headers={["Substance", "Specific heat", "Substance", "Specific heat"]}
        rows={[
          { cells: ["Aluminium", "900.0", "Ice", "2060"] },
          { cells: ["Carbon", "506.5", "Glass", "840"] },
          { cells: ["Copper", "386.4", "Iron", "450"] },
          { cells: ["Lead", "127.7", "Kerosene", "2118"] },
          { cells: ["Silver", "236.1", "Edible oil", "1965"] },
          { cells: ["Tungsten", "134.4", "Mercury", "140"] },
          { cells: ["Water", "4186.0", "—", "—"] },
        ]}
      />
      <TableCard
        caption="Table 10.4 — Molar specific heat capacities of some gases (J mol⁻¹ K⁻¹)."
        headers={["Gas", "C_p", "C_V"]}
        rows={[
          { cells: ["He", "20.8", "12.5"] },
          { cells: ["H₂", "28.8", "20.4"] },
          { cells: ["N₂", "29.1", "20.8"] },
          { cells: ["O₂", "29.4", "21.1"] },
          { cells: ["CO₂", "37.0", "28.5"] },
        ]}
      />
      <KeyPoint title="Why water is special">
        Water has the <strong>highest specific heat capacity</strong> of any common substance (4186 J kg⁻¹ K⁻¹).
        It warms more slowly than land during the day, so the sea breeze cools the coast; land heats and cools
        quickly, making desert days hot and nights cold. Water is used as a coolant in automobile radiators and as
        a heater in hot-water bags.
      </KeyPoint>

      <h2 id="h-calorimetry">10.7 Calorimetry</h2>
      <p>
        <strong>Calorimetry means measurement of heat.</strong> When a hot body touches a colder body in an
        isolated system, the <strong>heat lost by the hot part equals the heat gained by the cold part</strong>.
        The measuring device, a <strong>calorimeter</strong>, is a metallic vessel with a stirrer of the same
        material (copper or aluminium), kept inside a wooden jacket packed with insulating material (glass wool)
        that acts as a heat shield; a thermometer dips in through an opening.
      </p>
      <Expandable variant="example" title="Example 10.3 — specific heat of aluminium">
        <ProblemSolution.Problem>
            A 0.047 kg aluminium sphere is kept in boiling water until at 100 °C, then immediately transferred to a
            0.14 kg copper calorimeter containing 0.25 kg water at 20 °C. The temperature attains a steady value of
            23 °C. Calculate the specific heat capacity of aluminium.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Steady state: heat lost by the sphere = heat gained by water + calorimeter.</p>
            <p>Heat lost by aluminium (ΔT₁ = 100 − 23 = 77 °C):</p>
            <FormulaBlock latex={String.raw`0.047\,s_{\mathrm{Al}}\times 77\;\mathrm{J}`} />
            <p>Heat gained by water and calorimeter (ΔT₂ = 23 − 20 = 3 °C):</p>
            <FormulaBlock latex={String.raw`(0.25\times 4186 + 0.14\times 386)\times 3 = (1046.5 + 54.0)\times 3 = 3301.6\;\mathrm{J}`} />
            <FormulaBlock latex={String.raw`s_{\mathrm{Al}} = \frac{3301.6}{0.047\times 77} = 912\;\mathrm{J\,kg^{-1}\,K^{-1}} \approx 0.91\;\mathrm{kJ\,kg^{-1}\,K^{-1}}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-change-of-state">10.8 Change of State</h2>
      <p>
        Matter normally exists in three states — solid, liquid and gas — and a transition between them under heat
        exchange is a <strong>change of state</strong>. Heating a beaker of ice with constant stirring shows the
        temperature <em>does not change while any ice remains</em>: the heat is being used to change the state.
      </p>

      <h3 id="h-melting">Melting and freezing</h3>
      <p>
        Solid → liquid is <strong>melting (fusion)</strong>; liquid → solid is <strong>freezing</strong>. During
        the change both phases coexist in thermal equilibrium at the{" "}
        <strong>melting point</strong>, which is characteristic of the substance and depends on pressure (the
        normal melting point is at standard atmospheric pressure). The <strong>wire-through-ice</strong> trick: a
        weighted wire passes through an ice slab without splitting it because pressure lowers ice&rsquo;s melting
        temperature just under the wire, and the water refreezes above it — <strong>regelation</strong>. Skating is
        possible because the skate&rsquo;s pressure melts a fine water film that lubricates.
      </p>

      <h3 id="h-boiling">Boiling point</h3>
      <p>
        Liquid → vapour is <strong>vaporisation</strong>; the temperature stays constant until all the liquid
        vaporises, both phases coexisting at the <strong>boiling point</strong>. Boiling water in a flask shows
        that <strong>boiling point rises with pressure</strong> (sealing the steam outlet stops the boil) and{" "}
        <strong>falls with reduced pressure</strong> (ice-cold water over an inverted flask makes it boil again at
        a lower temperature). Hence cooking is difficult on hills — low atmospheric pressure lowers the boiling
        point — while a pressure cooker raises it, cooking faster.
      </p>

      <h3 id="h-sublimation">Sublimation</h3>
      <p>
        Some substances pass directly from solid to vapour without the liquid state (and vice versa):{" "}
        <strong>sublimation</strong>. Dry ice (solid CO₂) sublimes, and so does iodine; solid and vapour coexist
        in thermal equilibrium during the process.
      </p>

      <h3 id="h-triple-point">Triple point</h3>
      <p>
        A <strong>phase (P–T) diagram</strong> divides the P–T plane into solid, liquid and vapour regions separated
        by the sublimation curve, fusion curve and vaporisation curve where the adjacent phases coexist. The three
        curves meet at the <strong>triple point</strong>, where all three phases coexist at a unique temperature and
        pressure. For water: <strong>273.16 K and 6.11 × 10⁻³ Pa</strong>. Because it is unique and reproducible,
        the triple point is used as the standard fixed point for thermometry.
      </p>

      <h3 id="h-latent-heat">10.8.1 Latent Heat</h3>
      <p>
        The heat per unit mass transferred during a change of state is the{" "}
        <strong>latent heat</strong>, L = Q/m, in J kg⁻¹:
      </p>
      <FormulaBlock latex={String.raw`Q = m\,L`} important />
      <p>
        The latent heat for a solid–liquid change is the <strong>latent heat of fusion</strong> (L_f); for a
        liquid–gas change the <strong>latent heat of vaporisation</strong> (L_V). During a change of state the
        temperature stays constant, and the slopes of a temperature-versus-heat plot are unequal because the three
        phases have different specific heats.
      </p>
      <TableCard
        caption="Table 10.5 — Change-of-state temperatures and latent heats at 1 atm pressure."
        headers={["Substance", "Melting pt (°C)", "L_f (10⁵ J kg⁻¹)", "Boiling pt (°C)", "L_V (10⁵ J kg⁻¹)"]}
        rows={[
          { cells: ["Ethanol", "−114", "1.0", "78", "8.5"] },
          { cells: ["Gold", "1063", "0.645", "2660", "15.8"] },
          { cells: ["Lead", "328", "0.25", "1744", "8.67"] },
          { cells: ["Mercury", "−39", "0.12", "357", "2.7"] },
          { cells: ["Nitrogen", "−210", "0.26", "−196", "2.0"] },
          { cells: ["Oxygen", "−219", "0.14", "−183", "2.1"] },
          { cells: ["Water", "0", "3.33", "100", "22.6"] },
        ]}
      />
      <Callout type="note" title="Steam burns are worse than boiling-water burns">
        For water: L_f = 3.33 × 10⁵ J kg⁻¹ and L_V = 22.6 × 10⁵ J kg⁻¹. Steam at 100 °C carries over 2.2 MJ kg⁻¹{" "}
        <em>more</em> heat than boiling water at 100 °C — that latent heat is released on the skin, which is why
        steam burns are usually more serious.
      </Callout>

      <Expandable variant="example" title="Example 10.4 — heat of fusion of ice">
        <ProblemSolution.Problem>
            When 0.15 kg of ice at 0 °C is mixed with 0.30 kg of water at 50 °C in a container, the resulting
            temperature is 6.7 °C. Calculate the heat of fusion of ice. (s_water = 4186 J kg⁻¹ K⁻¹)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Heat lost by the warm water (cooling 50 → 6.7 °C):</p>
            <FormulaBlock latex={String.raw`Q_{\mathrm{lost}} = 0.30\times 4186\times (50.0 - 6.7) = 54{,}376\;\mathrm{J}`} />
            <p>Heat gained by ice = melt + warm the melt from 0 → 6.7 °C:</p>
            <FormulaBlock latex={String.raw`Q_{\mathrm{gained}} = 0.15\,L_f + 0.15\times 4186\times 6.7 = 0.15\,L_f + 4{,}207\;\mathrm{J}`} />
            <p>Equate heat lost = heat gained:</p>
            <FormulaBlock latex={String.raw`54{,}376 = 0.15\,L_f + 4{,}207 \quad\Rightarrow\quad L_f = \frac{50{,}169}{0.15} = 3.34\times10^5\;\mathrm{J\,kg^{-1}}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="example" title="Example 10.5 — ice at −12 °C to steam at 100 °C">
        <ProblemSolution.Problem>
            Calculate the heat required to convert 3 kg of ice at −12 °C (kept in a calorimeter) to steam at
            100 °C at atmospheric pressure. Given s_ice = 2100 J kg⁻¹K⁻¹, s_water = 4186 J kg⁻¹K⁻¹, L_f = 3.35 × 10⁵
            J kg⁻¹, L_steam = 2.256 × 10⁶ J kg⁻¹.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Four stages: warm the ice to 0 °C, melt it, warm the water to 100 °C, vaporise it.</p>
            <FormulaBlock latex={String.raw`Q_1 = m s_{\mathrm{ice}}\Delta T_1 = 3\times 2100\times 12 = 75{,}600\;\mathrm{J}`} />
            <FormulaBlock latex={String.raw`Q_2 = m L_f = 3\times 3.35\times10^5 = 1{,}005{,}000\;\mathrm{J}`} />
            <FormulaBlock latex={String.raw`Q_3 = m s_w \Delta T_2 = 3\times 4186\times 100 = 1{,}255{,}800\;\mathrm{J}`} />
            <FormulaBlock latex={String.raw`Q_4 = m L_{\mathrm{steam}} = 3\times 2.256\times10^6 = 6{,}768{,}000\;\mathrm{J}`} />
            <FormulaBlock latex={String.raw`Q = Q_1+Q_2+Q_3+Q_4 = 9.1\times10^6\;\mathrm{J}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-heat-transfer">10.9 Heat Transfer</h2>
      <p>
        Heat is energy transferred because of a temperature difference, through three distinct modes:{" "}
        <strong>conduction</strong>, <strong>convection</strong> and <strong>radiation</strong>.
      </p>

      <h3 id="h-conduction">10.9.1 Conduction</h3>
      <p>
        Conduction transfers heat between adjacent parts of a body by molecular collision, without any flow of
        matter. A metallic rod held in a flame soon burns the hand: heat travels up it by conduction. Gases are
        poor thermal conductors; liquids fall between solids and gases. For a bar of length L and uniform
        cross-section A with sides insulated, the steady-state <strong>heat current</strong> obeys
      </p>
      <FormulaBlock latex={String.raw`H = K\,A\frac{T_C - T_D}{L}`} important />
      <p>
        K is the <strong>thermal conductivity</strong> in W m⁻¹ K⁻¹ — the larger K, the faster the flow. Copper-
        coated pot bottoms spread heat evenly; plastic foams insulate because they trap pockets of air (poor
        conductors); concrete roofs need earth-foam insulation; nuclear-reactor cores need elaborate heat-transfer
        systems to avoid overheating.
      </p>
      <TableCard
        caption="Table 10.6 — Thermal conductivities (J s⁻¹ m⁻¹ K⁻¹). Comparison shows metals are ~10⁴ times better conductors than gases."
        headers={["Material", "Conductivity", "Material", "Conductivity"]}
        rows={[
          { cells: ["Silver", "406", "Insulating brick", "0.15"] },
          { cells: ["Copper", "385", "Concrete", "0.8"] },
          { cells: ["Aluminium", "205", "Body fat", "0.20"] },
          { cells: ["Brass", "109", "Felt", "0.04"] },
          { cells: ["Steel", "50.2", "Glass", "0.8"] },
          { cells: ["Lead", "34.7", "Ice", "1.6"] },
          { cells: ["Mercury", "8.3", "Glass wool", "0.04"] },
          { cells: ["Water", "0.8", "Wood", "0.12"] },
          { cells: ["Air", "0.024", "Argon", "0.016"] },
          { cells: ["Hydrogen", "0.14", "—", "—"] },
        ]}
      />

      <Expandable variant="example" title="Example 10.6 — steel-copper junction temperature">
        <ProblemSolution.Problem>
            What is the temperature of the steel-copper junction in the steady state? Steel rod length 15.0 cm,
            copper rod length 10.0 cm; furnace 300 °C, other end 0 °C; cross-section of steel twice that of copper.
            (K_steel = 50.2, K_copper = 385 J s⁻¹ m⁻¹ K⁻¹)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              In the steady state the heat current is the same at every cross-section — otherwise a section would
              gain or lose heat and its temperature would not be steady. With A₁ = 2A₂:
            </p>
            <FormulaBlock latex={String.raw`\frac{K_1 A_1 (300 - T)}{L_1} = \frac{K_2 A_2 (T - 0)}{L_2}`} />
            <FormulaBlock latex={String.raw`\frac{50.2\times 2A(300 - T)}{15} = \frac{385\,A\,T}{10}\quad\Rightarrow\quad 6.693(300 - T) = 38.5\,T`} />
            <FormulaBlock latex={String.raw`T = \frac{2008}{45.19} = 44.4^\circ\mathrm{C}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="example" title="Example 10.7 — iron-brass compound bar">
        <ProblemSolution.Problem>
            An iron bar (L₁ = 0.1 m, A₁ = 0.02 m², K₁ = 79) and a brass bar (L₂ = 0.1 m, A₂ = 0.02 m², K₂ = 109)
            are soldered end to end; free ends at 373 K and 273 K. Obtain (i) the junction temperature, (ii) the
            equivalent thermal conductivity of the compound bar, and (iii) the heat current.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>Since A and L are equal, K₁(T₁ − T₀) = K₂(T₀ − T₂):</p>
            <FormulaBlock latex={String.raw`T_0 = \frac{K_1 T_1 + K_2 T_2}{K_1 + K_2} = \frac{79\times373 + 109\times273}{79 + 109} = 315\;\mathrm{K}`} important />
            <p>Equivalent K′ of the compound bar of length 2L:</p>
            <FormulaBlock latex={String.raw`\frac{1}{2}\left[\text{series resistance}\right] \quad K' = \frac{2K_1K_2}{K_1 + K_2} = \frac{2\times 79\times 109}{188} = 91.6\;\mathrm{W\,m^{-1}\,K^{-1}}`} important />
            <FormulaBlock latex={String.raw`H = \frac{K' A (T_1 - T_2)}{2L} = \frac{91.6\times 0.02\times 100}{0.2} = 916\;\mathrm{W}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h3 id="h-convection">10.9.2 Convection</h3>
      <p>
        Convection transfers heat by the <strong>actual bulk motion of matter</strong> — possible only in fluids.
        In <strong>natural convection</strong> gravity drives the motion: heated fluid expands, becomes less dense,
        rises, and is replaced by cooler fluid that is heated in turn. In <strong>forced convection</strong> a pump
        or other means drives the fluid — forced-air home heating, the human circulatory system (the heart is the
        pump), and the cooling system of an automobile engine.
      </p>
      <Stepper
        steps={[
          {
            label: "Sea breeze (day)",
            description:
              "Land heats faster than water (higher specific heat of water + mixing currents). Warm air over land rises; cooler air from the sea moves in — a cooling onshore breeze.",
          },
          {
            label: "Land breeze (night)",
            description:
              "Land loses heat faster than water, so the water is now warmer. The cycle reverses: air rises over the sea and cooler air comes off the land.",
          },
          {
            label: "Trade winds",
            description:
              "Equatorial air rises and streams toward the poles; because of Earth's rotation it descends at about 30° N and returns to the equator — the steady north-east trade winds.",
          },
        ]}
      />

      <h3 id="h-radiation">10.9.3 Radiation</h3>
      <p>
        Conduction and convection need a material medium — but Earth receives heat from the Sun across empty space.
        <strong>Radiation</strong> transfers energy by <strong>electromagnetic waves</strong>, which travel in
        vacuum at the speed of light (3 × 10⁸ m s⁻¹). All bodies emit radiant energy; radiation emitted by virtue
        of a body&rsquo;s temperature (red-hot iron, a filament lamp) is{" "}
        <strong>thermal radiation</strong>. When it falls on other bodies it is partly reflected, partly absorbed.
      </p>
      <KeyPoint title="Black bodies and the Dewar flask">
        Black bodies <strong>absorb and emit</strong> radiant energy better than lighter-coloured bodies: we wear
        white clothes in summer to absorb least solar heat, dark clothes in winter; utensil bottoms are blackened
        to absorb maximum heat. A <strong>Dewar flask (thermos)</strong> minimizes all three transfers: silvered
        inner+outer walls reflect radiation, an evacuated space stops conduction/convection, and cork supports the
        vessel.
      </KeyPoint>

      <h3 id="h-blackbody">10.9.4 Blackbody Radiation</h3>
      <p>
        Thermal radiation has a <strong>continuous spectrum</strong>, and the energy varies with wavelength — the
        experimental blackbody curves are <strong>universal</strong>, depending only on temperature, not on size,
        shape or material. The wavelength λ_m of maximum energy shortens as temperature rises:
      </p>
      <FormulaBlock latex={String.raw`\lambda_m T = 2.9\times10^{-3}\;\mathrm{m\,K}`} important />
      <p>
        This <strong>Wien's displacement law</strong> explains why iron heated in a flame turns dull red, then
        reddish-yellow, then white hot, and lets us estimate surface temperatures of stars: moonlight peaks near
        14 μm ⟹ moon surface ≈ 200 K; solar radiation peaks at 4753 Å ⟹ T ≈ 6060 K (the Sun&rsquo;s surface, not
        interior).
      </p>
      <p>
        The total radiant energy emitted per unit time by a body is the{" "}
        <strong>Stefan-Boltzmann law</strong>:
      </p>
      <FormulaBlock latex={String.raw`H = A\,e\,\sigma T^4`} important />
      <FormulaBlock latex={String.raw`\sigma = 5.67\times10^{-8}\;\mathrm{W\,m^{-2}\,K^{-4}}`} />
      <p>
        Here A is the surface area, e the <strong>emissivity</strong> (e = 1 for a perfect radiator; tungsten is
        ~0.4), and T the <strong>absolute</strong> temperature. A tungsten lamp at 3000 K with area 0.3 cm²
        radiates about 60 W. A body also <em>receives</em> radiation from its surroundings, so the net loss is
      </p>
      <FormulaBlock latex={String.raw`H = e\,\sigma A\,(T^4 - T_s^4)`} important />
      <Callout type="note" title="Human-body heat loss">
        Skin at ~28 °C (e = 0.97, area 1.9 m²) in a room at 22 °C radiates heat at about{" "}
        <strong>66 W</strong> — over half the body&rsquo;s resting energy production of ~120 W. Arctic clothing has
        a thin shiny metallic layer next to the skin to reflect the body&rsquo;s own radiation back.
      </Callout>

      <h2 id="h-newton-cooling">10.10 Newton's Law of Cooling</h2>
      <p>
        Hot water left on a table cools gradually; the rate is high initially and decreases as the temperature
        falls. Newton&rsquo;s law of cooling says the <strong>rate of loss of heat is directly proportional to the
        (small) temperature difference</strong> between the body (T₂) and its surroundings (T₁), for a given area
        and surface nature:
      </p>
      <FormulaBlock latex={String.raw`-\frac{dQ}{dt} = k\,(T_2 - T_1)`} important />
      <p>
        With dQ = ms dT₂ (m = mass, s = specific heat) this becomes
      </p>
      <FormulaBlock latex={String.raw`\frac{dT_2}{dt} = -K'(T_2 - T_1),\qquad K' = \frac{k}{ms}`} />
      <FormulaBlock latex={String.raw`\ln(T_2 - T_1) = -K' t + c \qquad\Longrightarrow\qquad T_2 = T_1 + C' e^{-K't}`} important />
      <p>
        A plot of ln(T₂ − T₁) versus time is therefore a straight line with negative slope — the verification shown
        in the double-walled-vessel experiment. The law is a valid approximation for small differences, combining
        conduction, convection and radiation (radiator-to-room, room-wall loss, cooling tea).
      </p>
      <Expandable variant="example" title="Example 10.8 — cooling of a pan of hot food">
        <ProblemSolution.Problem>
            A pan filled with hot food cools from 94 °C to 86 °C in 2 minutes when the room is at 20 °C. How long
            will it take to cool from 71 °C to 69 °C?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>For 94 → 86 °C: average 90 °C, i.e. 70 °C above room temperature, so (8 °C)/(2 min) = K × 70.</p>
            <p>For 71 → 69 °C: average 70 °C, i.e. 50 °C above room temperature, so (2 °C)/t = K × 50.</p>
            <p>K is the same in both situations; dividing the equations:</p>
            <FormulaBlock latex={String.raw`\frac{8/2}{2/t} = \frac{70}{50} \quad\Rightarrow\quad \frac{4t}{2} = 1.4 \quad\Rightarrow\quad t = 0.7\;\mathrm{min} = 42\;\mathrm{s}`} important />
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-exercises">Exercises 10.1 – 10.20</h2>
      <p>Selected exercises with hints and the essential answers.</p>

      <Expandable variant="exercise" title="Exercises 10.1 &amp; 10.2">
        <ProblemSolution.Problem>
            10.1 The triple points of neon and carbon dioxide are 24.57 K and 216.55 K respectively. Express these
            temperatures on the Celsius and Fahrenheit scales. <br />
            10.2 Two absolute scales A and B have triple points of water defined to be 200 A and 350 B. What is the
            relation between T_A and T_B?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              10.1 t_C = T − 273.15; t_F = (9/5)t_C + 32. Neon: <strong>−248.58 °C, −415.44 °F</strong>. CO₂:{" "}
              <strong>−56.60 °C, −69.88 °F</strong>.
            </p>
            <p>
              10.2 The triple point = 273.16 K = 200 A = 350 B, so 1 A = 273.16/200 = 1.366 K and 1 B = 273.16/350
              = 0.780 K. For the same temperature T_A·(273.16/200) = T_B·(273.16/350), hence{" "}
              <strong>T_A = (4/7) T_B</strong> (check on the triple point: 200 = (4/7) × 350). The A scale has
              larger degrees, so it reads fewer of them.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 10.3 &amp; 10.4">
        <ProblemSolution.Problem>
            10.3 A thermometer&rsquo;s resistance follows R = R₀[1 + α(T − T₀)]: 101.6 Ω at the triple point
            (273.16 K) and 165.5 Ω at lead&rsquo;s normal melting point (600.5 K). What temperature corresponds to
            R = 123.4 Ω? <br />
            10.4 (a) Why is the triple point the standard fixed point, and what is wrong with the ice/steam points?
            (b) What is the other fixed point on the Kelvin scale? (c) Why does t_C = T − 273.15 and not 273.16?
            (d) What is the triple point on an absolute scale with Fahrenheit-size units?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              10.3 α = (165.5/101.6 − 1)/(600.5 − 273.16) = 0.6289/327.34 = 1.92 × 10⁻³ K⁻¹. For 123.4 Ω: ΔT =
              (123.4/101.6 − 1)/1.92 × 10⁻³ = 111.7 K ⟹ <strong>T ≈ 385 K</strong>.
            </p>
            <p>
              10.4 (a) The triple point is the <em>unique</em> reproducible state where all three phases coexist;
              ice and steam points depend on (variable) pressure. (b) <strong>Absolute zero (0 K)</strong>. (c) The
              Kelvin scale sets the triple point at exactly 273.16 K; the ice point lies 0.01 K below it at
              273.15 K. (d) <strong>491.69</strong> (273.16 × 9/5, the Rankine-style scale).
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 10.5 &amp; 10.6">
        <ProblemSolution.Problem>
            10.5 Ideal-gas thermometers A (oxygen) and B (hydrogen): at the triple point A reads 1.250 × 10⁵ Pa and
            B reads 0.200 × 10⁵ Pa; at sulphur&rsquo;s melting point A reads 1.797 × 10⁵ Pa and B reads 0.287 ×
            10⁵ Pa. (a) What absolute temperature does each read for the melting point? (b) Why the slight
            difference, and how is it reduced? <br />
            10.6 A 1 m steel tape calibrated at 27.0 °C measures a steel rod as 63.0 cm at 45.0 °C. What are the
            actual lengths at 45.0 °C and at 27.0 °C? (α_steel = 1.20 × 10⁻⁵ K⁻¹)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              10.5 T = 273.16 × P/P_triple. (a) A: 273.16 × 1.797/1.250 = <strong>392.7 K</strong>; B: 273.16 ×
              0.287/0.200 = <strong>392.0 K</strong>. (b) Real gases deviate slightly from ideal behaviour at finite
              pressure; measure at progressively lower densities and extrapolate to zero pressure.
            </p>
            <p>
              10.6 The tape&rsquo;s metre expands too: its true metre length at 45 °C = 1 + 1.2 × 10⁻⁵ × 18 =
              1.000216 m. Actual length at 45 °C = 63.0 × 1.000216 = <strong>63.014 cm</strong>; at 27 °C =
              63.014/1.000216 = <strong>63.0 cm</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 10.7 &amp; 10.8">
        <ProblemSolution.Problem>
            10.7 A large steel wheel (hole 8.69 cm) must fit a steel shaft (8.70 cm) at 27 °C. The shaft is cooled
            with dry ice. At what shaft temperature does the wheel slip on? (α_steel = 1.20 × 10⁻⁵ K⁻¹) <br />
            10.8 A hole drilled in copper sheet is 4.24 cm at 27.0 °C. What is the change in its diameter when the
            sheet is heated to 227 °C? (α_copper = 1.70 × 10⁻⁵ K⁻¹)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              10.7 Shrink needed: ΔL/L = 0.01/8.70 = 1.149 × 10⁻³. ΔT = 1.149 × 10⁻³/1.2 × 10⁻⁵ = 95.8 °C. Cool
              from 27 °C to <strong>−68.8 °C ≈ −69 °C</strong>.
            </p>
            <p>
              10.8 The hole expands like the sheet: Δd = d α ΔT = 4.24 × 1.7 × 10⁻⁵ × 200 ={" "}
              <strong>1.44 × 10⁻² cm (~0.014 cm)</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 10.9 &amp; 10.10">
        <ProblemSolution.Problem>
            10.9 A 1.8 m brass wire (diameter 2.0 mm) held taut with little tension between rigid supports is cooled
            from 27 °C to −39 °C. What tension develops? (α_brass = 2.0 × 10⁻⁵ K⁻¹, Y = 0.91 × 10¹¹ Pa) <br />
            10.10 A brass rod of length 50 cm (diameter 3.0 mm) joined to a steel rod of the same dimensions. What
            is the change in length of the combined rod at 250 °C, original at 40.0 °C? Is thermal stress
            developed? (α_brass = 2.0 × 10⁻⁵, α_steel = 1.2 × 10⁻⁵ K⁻¹)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              10.9 Thermal strain = αΔT = 2.0 × 10⁻⁵ × 66 = 1.32 × 10⁻³; stress = Y × strain = 1.20 × 10⁸ Pa.
              Tension F = stress × π(2 × 10⁻³)²/4 (area 3.14 × 10⁻⁶ m²) ≈ <strong>3.8 × 10² N</strong>.
            </p>
            <p>
              10.10 ΔL_brass = 0.5 × 2.0 × 10⁻⁵ × 210 = 2.10 mm; ΔL_steel = 0.5 × 1.2 × 10⁻⁵ × 210 = 1.26 mm.
              Total <strong>ΔL ≈ 3.36 mm</strong>. <strong>No thermal stress</strong> — the ends are free to expand,
              so nothing constrains the rods.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 10.11 &amp; 10.12">
        <ProblemSolution.Problem>
            10.11 The coefficient of volume expansion of glycerine is 49 × 10⁻⁵ K⁻¹. What is the fractional change
            in its density for a 30 °C rise? <br />
            10.12 A 10 kW drilling machine drills a bore in an 8.0 kg aluminium block. How much does the block
            temperature rise in 2.5 minutes if 50% of the power goes into heating the machine or is lost?
            (s_aluminium = 0.91 J g⁻¹ K⁻¹)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              10.11 Δρ/ρ = −βΔT = −49 × 10⁻⁵ × 30 = <strong>−1.47 × 10⁻² (about 1.5% decrease)</strong>.
            </p>
            <p>
              10.12 Energy into the block = ½ × 10⁴ × 150 = 7.5 × 10⁵ J. s = 910 J kg⁻¹ K⁻¹; ΔT = Q/(ms) =
              7.5 × 10⁵/(8 × 910) = <strong>103 °C</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 10.13 &amp; 10.14">
        <ProblemSolution.Problem>
            10.13 A 2.5 kg copper block heated to 500 °C is placed on a large ice block. What is the maximum amount
            of ice that can melt? (s_copper = 0.39 J g⁻¹ K⁻¹, L_f = 335 J g⁻¹) <br />
            10.14 A 0.20 kg metal block at 150 °C is dropped into a copper calorimeter (water equivalent 0.025 kg)
            containing 150 cm³ of water at 27 °C; final temperature 40 °C. Compute the metal&rsquo;s specific heat.
            If heat losses are not negligible, is your answer greater or smaller than the true value?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              10.13 Q = m c ΔT = 2.5 × 390 × 500 = 4.875 × 10⁵ J. Ice melted = 4.875 × 10⁵/(335 × 10³) ={" "}
              <strong>1.46 kg (≈ 1.45 kg)</strong>.
            </p>
            <p>
              10.14 Heat gained = (0.150 + 0.025) × 4186 × 13 = 9.52 × 10³ J. s = 9.52 × 10³/(0.20 × 110) ={" "}
              <strong>4.33 × 10² ≈ 0.43 × 10³ J kg⁻¹ K⁻¹</strong>. With heat losses the computed s is{" "}
              <strong>smaller</strong> than the true value (measured heat gained undercounts the heat actually
              lost).
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 10.15 &amp; 10.16">
        <ProblemSolution.Problem>
            10.15 Measured molar specific heats (C_V, cal mol⁻¹ K⁻¹): H₂ 4.87, N₂ 4.97, O₂ 5.02, NO 4.99, CO 5.01,
            Cl₂ 6.17 — versus 2.92 for monatomic gases. Explain, and what does chlorine&rsquo;s larger value imply?
            <br />
            10.16 A 30 kg child&rsquo;s fever falls from 101 °F to 98 °F in 20 minutes by extra sweat evaporation
            (the only heat-loss mechanism). What is the average extra evaporation rate? (s_body ≈ s_water; L_v ≈
            580 cal g⁻¹)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              10.15 Monatomic gases: C_V = 3/2 R ≈ 2.98 cal; diatomic molecules <strong>add rotational degrees of
              freedom</strong>, giving C_V = 5/2 R ≈ 4.97 cal. Chlorine&rsquo;s larger 6.17 cal/mol K shows its{" "}
              <strong>vibrational modes also contribute at room temperature</strong> (it is heavy and easily
              excited).
            </p>
            <p>
              10.16 ΔT = 3 °F = (5/9)×3 = 1.67 °C. Q = 30 × 4186 × 1.67 = 2.09 × 10⁵ J = 5.0 × 10⁴ cal. Vapour
              mass = 5.0 × 10⁴/580 = 86 g in 20 min ⟹ <strong>≈ 4.3 g min⁻¹</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 10.17 &amp; 10.18">
        <ProblemSolution.Problem>
            10.17 A cubical thermacole icebox (side 30 cm, wall thickness 5.0 cm) holds 4.0 kg of ice. Estimate the
            ice remaining after 6 h if the outside is 45 °C. (K_thermacole = 0.01 J s⁻¹ m⁻¹ K⁻¹; L_f = 335 × 10³ J
            kg⁻¹) <br />
            10.18 A brass boiler (base 0.15 m², thickness 1.0 cm) boils water at 6.0 kg/min. Estimate the flame
            contact temperature. (K_brass = 109 J s⁻¹ m⁻¹ K⁻¹; L_v water = 2256 × 10³ J kg⁻¹)
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              10.17 All six faces conduct: A = 6 × 0.09 = 0.54 m². H = K A ΔT/L = 0.01 × 0.54 × 45/0.05 = 4.86 W;
              Q in 6 h = 4.86 × 21,600 = 1.05 × 10⁵ J. Ice melted = 1.05 × 10⁵/335 × 10³ = 0.31 kg ⟹{" "}
              <strong>≈ 3.7 kg remaining</strong>.
            </p>
            <p>
              10.18 H = 0.1 × 2256 × 10³ = 2.256 × 10⁵ W. ΔT = H L/(K A) = 2.256 × 10⁵ × 0.01/(109 × 0.15) = 138 °C
              above the boiling water ⟹ flame temperature ≈ <strong>238 °C</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <Expandable variant="exercise" title="Exercises 10.19 &amp; 10.20">
        <ProblemSolution.Problem>
            10.19 Explain why (a) a body with large reflectivity is a poor emitter; (b) a brass tumbler feels colder
            than a wooden tray on a chilly day; (c) an optical pyrometer reads low for red-hot iron in the open but
            correctly inside the furnace; (d) the earth without its atmosphere would be inhospitably cold; (e)
            steam-based heating warms a building more efficiently than hot water. <br />
            10.20 A body cools from 80 °C to 50 °C in 5 minutes. Calculate the time to cool from 60 °C to 30 °C.
            Surroundings at 20 °C.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <p>
              10.19 (a) Reflectors absorb (and therefore emit) little radiation. (b) Brass conducts heat away from
              the hand far better than wood. (c) Iron in the open has e &lt; 1, so a blackbody-calibrated pyrometer
              reads low; inside the furnace the iron is in a near-blackbody enclosure. (d) The atmosphere traps
              outgoing radiation (greenhouse effect) and stores heat. (e) Steam releases the large latent heat of
              vaporisation (22.6 × 10⁵ J kg⁻¹) when it condenses — far more than hot water&rsquo;s sensible heat.
            </p>
            <p>
              10.20 Using the mean-temperature form: (80 − 50)/5 = K(65 − 20) ⟹ K = 0.1333 min⁻¹; then (60 − 30)/t
              = K(45 − 20) ⟹ 30/t = 3.333 ⟹ <strong>t = 9 min</strong>.
            </p>
          </ProblemSolution.Solution>
        </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormulaCard>
          <p><strong>Temperatures &amp; gas law</strong></p>
          t_F = (9/5)t_C + 32; T = t_C + 273.15; absolute zero = −273.15 °C. Ideal gas: PV = μRT, R = 8.31 J
          mol⁻¹K⁻¹; triple point of water = 273.16 K.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Thermal expansion</strong></p>
          Δl/l = α_l ΔT; ΔV/V = α_V ΔT; α_V = 3α_l (solid). Water is densest at 4 °C. Thermal stress = Y Δl/l
          when expansion is blocked (a clamped steel rod can exert ~10⁵ N).
        </FormulaCard>
        <FormulaCard>
          <p><strong>Heat capacities</strong></p>
          ΔQ = msΔT (specific heat, J kg⁻¹K⁻¹); molar C = ΔQ/(μΔT). Phase changes: Q = mL with L_f = 3.33 × 10⁵
          and L_V = 22.6 × 10⁵ J kg⁻¹ for water. Steam carries ~2.2 MJ kg⁻¹ more heat than boiling water.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Conduction</strong></p>
          H = KA(T_C − T_D)/L; K in W m⁻¹K⁻¹. Silver 406, copper 385, air 0.024. Series compound bar: same heat
          current in steady state; junction T = (K₁T₁ + K₂T₂)/(K₁ + K₂) for equal A, L.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Radiation</strong></p>
          Wien: λ_m T = 2.9 × 10⁻³ m K. Stefan-Boltzmann: H = eσA(T⁴ − T_s⁴), σ = 5.67 × 10⁻⁸ W m⁻²K⁻⁴, e = 1 for
          a perfect radiator. Use kelvin; a body both emits and absorbs.
        </FormulaCard>
        <FormulaCard>
          <p><strong>Key physical insights</strong></p>
          Heat is energy transferred <em>by virtue of temperature difference</em>. Temperature is constant during a
          phase change (latent heat). Convection needs fluids; radiation needs no medium. Newton&rsquo;s cooling:
          rate ∝ small ΔT, giving ln(ΔT) a straight line. Boiling point rises with pressure, falls at altitude.
        </FormulaCard>
      </div>

      <MistakeCard
        mistake="Plugging °C directly into PV = μRT or into Stefan-Boltzmann H = eσAT⁴."
        correction="Both require the ABSOLUTE temperature T = t_C + 273.15 (kelvin). Gas-law ratios like P₁T₂ = P₂T₁ and T⁴ scaling are meaningless unless T is in kelvin. In expansions, ΔT in length problems may be in °C or K — the size of the unit is the same."
      />
      <MistakeCard
        mistake="Assuming the ice and steam points are perfect fixed points of the modern Celsius scale."
        correction="They depend on pressure and are not exactly reproducible. The standard fixed point is the TRIPLE point of water (273.16 K), the unique state where all three phases coexist; the ice point lies 0.01 K below it, which is why t_C = T − 273.15."
      />
      <MistakeCard
        mistake="Thinking α_V = 3α_l holds for liquids or that α_V is a constant for a given material."
        correction="α_V = 3α_l assumes an isotropic SOLID expanding equally in all directions. For liquids α_V ∝ 1/T (ideal gas) or is tabulated; water even contracts between 0 and 4 °C. α_V for a real material varies with temperature and becomes constant only at high T."
      />
      <MistakeCard
        mistake="Adding the steam&rsquo;s latent heat to a temperature rise as if they were both sensible-heat steps."
        correction="During melting or vaporisation the temperature is CONSTANT — all supplied heat goes into the phase change (Q = mL), not into warming. In multi-stage problems (ice → steam) you must sum separate terms: warm, melt, warm, vaporise — never collapse them."
      />
      <MistakeCard
        mistake="Forgetting that conduction problems like steel A₂ twice copper need equal heat-current arithmetic, or using gauge readings that skip the tape's own expansion."
        correction="In the steady state the SAME H passes every cross-section — write K₁A₁(T₁−T)/L₁ = K₂A₂(T−T₂)/L₂ and solve. For a hot-day measurement with a calibrated steel tape, the tape expands too: true length = reading × (tape&rsquo;s expanded metre)."
      />
    </>
  );
}