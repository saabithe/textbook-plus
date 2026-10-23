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
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";

export default function SolutionsChapter() {
  return (
    <>
      <h2 id="h-1-1">1.1 Types of Solutions</h2>
      <Callout type="important">
        <Highlight color="yellow">Solutions are homogeneous mixtures of two or more than two components</Highlight>. Their composition and properties are uniform throughout the mixture.
      </Callout>
      <p>In a solution, the component present in the largest quantity is the <strong>solvent</strong>. One or more components present other than the solvent are called <strong>solutes</strong>. We shall consider only binary solutions (two components).</p>

      <TableCard
        caption="Table 1.1: Types of Solutions"
        headers={["Type of Solution", "Solute", "Solvent", "Common Examples"]}
        rows={[
          { cells: ["Gaseous Solutions", "Gas", "Gas", "Mixture of oxygen and nitrogen gases"] },
          { cells: ["", "Liquid", "Gas", "Chloroform mixed with nitrogen gas"] },
          { cells: ["", "Solid", "Gas", "Camphor in nitrogen gas"] },
          { cells: ["Liquid Solutions", "Gas", "Liquid", "Oxygen dissolved in water"] },
          { cells: ["", "Liquid", "Liquid", "Ethanol dissolved in water"] },
          { cells: ["", "Solid", "Liquid", "Glucose dissolved in water"] },
          { cells: ["Solid Solutions", "Gas", "Solid", "Solution of hydrogen in palladium"] },
          { cells: ["", "Liquid", "Solid", "Amalgam of mercury with sodium"] },
          { cells: ["", "Solid", "Solid", "Copper dissolved in gold"] },
        ]}
      />

      <h2 id="h-1-2">1.2 Expressing Concentration of Solutions</h2>
      <p>Concentration can be expressed qualitatively as dilute or concentrated, but quantitative description is needed.</p>

      <h3 id="h-1-2-1">Mass percentage (w/w)</h3>
      <FormulaBlock latex={String.raw`\text{Mass \% of a component} = \frac{\text{Mass of the component in the solution}}{\text{Total mass of the solution}} \times 100`} important />

      <h3 id="h-1-2-2">Volume percentage (V/V)</h3>
      <FormulaBlock latex={String.raw`\text{Volume \% of a component} = \frac{\text{Volume of the component}}{\text{Total volume of solution}} \times 100`} important />

      <h3 id="h-1-2-3">Mass by volume percentage (w/V)</h3>
      <p>Mass of solute dissolved in <strong>100 mL</strong> of the solution. Common in medicine and pharmacy.</p>

      <h3 id="h-1-2-4">Parts per million (ppm)</h3>
      <p>Used when solute is present in trace quantities.</p>
      <FormulaBlock latex={String.raw`\text{ppm} = \frac{\text{Number of parts of the component}}{\text{Total number of parts of all components}} \times 10^6`} important />
      <p>Can be expressed as mass to mass, volume to volume and mass to volume.</p>

      <h3 id="h-1-2-5">Mole fraction (x)</h3>
      <FormulaBlock latex={String.raw`x_i = \frac{n_i}{\sum n_i}`} important />
      <p>For a binary mixture of A and B:</p>
      <FormulaBlock latex={String.raw`x_A = \frac{n_A}{n_A + n_B},\quad x_B = \frac{n_B}{n_A + n_B},\quad x_A + x_B = 1`} />
      <Callout type="note">Mole fraction is useful in relating vapour pressure to concentration and in gas mixtures.</Callout>

      <h3 id="h-1-2-6">Molarity (M)</h3>
      <FormulaBlock latex={String.raw`\text{Molarity} = \frac{\text{Moles of solute}}{\text{Volume of solution in litre}}`} important />
      <p>Unit: mol L<sup>-1</sup> or M. <Highlight color="yellow">Molarity depends on temperature</Highlight> as volume changes with temperature.</p>

      <h3 id="h-1-2-7">Molality (m)</h3>
      <FormulaBlock latex={String.raw`\text{Molality (m)} = \frac{\text{Moles of solute}}{\text{Mass of solvent in kg}}`} important />
      <p>Unit: mol kg<sup>-1</sup>. <Highlight color="blue">Molality is independent of temperature</Highlight>.</p>

      <Expandable title="Example 1.1 — Mole fraction of ethylene glycol">
        <p><strong>Problem:</strong> Calculate the mole fraction of ethylene glycol (C<sub>2</sub>H<sub>6</sub>O<sub>2</sub>) in a solution containing 20% of C<sub>2</sub>H<sub>6</sub>O<sub>2</sub> by mass.</p>
        <p><strong>Solution:</strong></p>
        <p>Assume 100 g solution: 20 g ethylene glycol, 80 g water.</p>
        <p>Molar mass of C<sub>2</sub>H<sub>6</sub>O<sub>2</sub> = 62 g mol<sup>-1</sup>, H<sub>2</sub>O = 18 g mol<sup>-1</sup></p>
        <FormulaBlock latex={String.raw`n(\text{C}_2\text{H}_6\text{O}_2) = \frac{20}{62} = 0.322\,\text{mol},\quad n(\text{H}_2\text{O}) = \frac{80}{18} = 4.444\,\text{mol}`} />
        <FormulaBlock latex={String.raw`x(\text{glycol}) = \frac{0.322}{0.322 + 4.444} = 0.068,\quad x(\text{water}) = 1 - 0.068 = 0.932`} />
      </Expandable>

      <Expandable title="Example 1.2 — Molarity of NaOH solution">
        <p><strong>Problem:</strong> Calculate the molarity of a solution containing 5 g of NaOH in 450 mL solution.</p>
        <p><strong>Solution:</strong></p>
        <FormulaBlock latex={String.raw`n(\text{NaOH}) = \frac{5}{40} = 0.125\,\text{mol}`} />
        <FormulaBlock latex={String.raw`\text{Molarity} = \frac{0.125 \times 1000}{450} = 0.278\,\text{mol}\,\text{L}^{-1}`} />
      </Expandable>

      <Expandable title="Example 1.3 — Molality of ethanoic acid in benzene">
        <p><strong>Problem:</strong> Calculate molality of 2.5 g of ethanoic acid (CH<sub>3</sub>COOH) in 75 g of benzene.</p>
        <p><strong>Solution:</strong></p>
        <FormulaBlock latex={String.raw`n(\text{CH}_3\text{COOH}) = \frac{2.5}{60} = 0.0417\,\text{mol}`} />
        <FormulaBlock latex={String.raw`m = \frac{0.0417 \times 1000}{75} = 0.556\,\text{mol}\,\text{kg}^{-1}`} />
      </Expandable>

      <Expandable title="Example 1.4 — Solubility of N₂ using Henry’s law" variant="exercise">
        <p><strong>Problem:</strong> If N<sub>2</sub> gas is bubbled through water at 293 K, how many millimoles of N<sub>2</sub> gas would dissolve in 1 litre of water? Assume that N<sub>2</sub> exerts a partial pressure of 0.987 bar. Given K<sub>H</sub> for N<sub>2</sub> at 293 K is 76.48 kbar.</p>
        <p><strong>Solution:</strong></p>
        <FormulaBlock latex={String.raw`x(\text{N}_2) = \frac{p}{K_H} = \frac{0.987}{76480} = 1.29 \times 10^{-5}`} />
        <p>In 1 L water = 55.5 mol</p>
        <FormulaBlock latex={String.raw`n(\text{N}_2) \approx x \times 55.5 = 1.29 \times 10^{-5} \times 55.5 = 7.16 \times 10^{-4}\,\text{mol} = 0.716\,\text{mmol}`} />
      </Expandable>

      <ExerciseQa
        questions={[
          <>Calculate the mass percentage of benzene (C<sub>6</sub>H<sub>6</sub>) and carbon tetrachloride (CCl<sub>4</sub>) if 22 g of benzene is dissolved in 122 g of carbon tetrachloride.</>,
          <>Calculate the mole fraction of benzene in solution containing 30% by mass in carbon tetrachloride.</>,
          <>Calculate the molarity of each of the following solutions: (a) 30 g of Co(NO<sub>3</sub>)<sub>2</sub>·6H<sub>2</sub>O in 4.3 L of solution (b) 30 mL of 0.5 M H<sub>2</sub>SO<sub>4</sub> diluted to 500 mL.</>,
          <>Calculate the mass of urea (NH<sub>2</sub>CONH<sub>2</sub>) required in making 2.5 kg of 0.25 molal aqueous solution.</>,
          <>Calculate (a) molality (b) molarity and (c) mole fraction of KI if the density of 20% (mass/mass) aqueous KI is 1.202 g mL<sup>-1</sup>.</>,
        ]}
      />

      <h2 id="h-1-3">1.3 Solubility</h2>
      <p><strong>Solubility</strong> is its maximum amount that can be dissolved in a specified amount of solvent at a specified temperature.</p>
      <Callout type="note">A solution in dynamic equilibrium with undissolved solute is a <strong>saturated solution</strong>. An <strong>unsaturated solution</strong> can dissolve more solute at the same temperature.</Callout>

      <h3 id="h-1-3-1">Solubility of a Solid in a Liquid</h3>
      <p>Polar solutes dissolve in polar solvents and non-polar solutes in non-polar solvents — <Highlight color="yellow">like dissolves like</Highlight>.</p>
      <p>For dissolution equilibrium: <Formula>{String.raw`\text{Solute} + \text{Solvent} \rightleftharpoons \text{Solution}`}</Formula></p>
      <KeyPoint title="Effect of Temperature">
        <ul>
          <li>If dissolution is <strong>endothermic</strong> (Δ<sub>sol</sub>H &gt; 0), solubility increases with rise in temperature.</li>
          <li>If dissolution is <strong>exothermic</strong> (Δ<sub>sol</sub>H &lt; 0), solubility decreases with rise in temperature.</li>
        </ul>
      </KeyPoint>
      <Callout type="note">Pressure does not have any significant effect on solubility of solids in liquids (solids and liquids are highly incompressible).</Callout>

      <h3 id="h-1-3-2">Solubility of a Gas in a Liquid</h3>
      <p>Solubility of gases in liquids is affected by <strong>pressure</strong> and <strong>temperature</strong>. Solubility increases with increase of pressure.</p>
      
      <KeyPoint title="Henry’s Law">
        <p>At constant temperature, the solubility of a gas in a liquid is <strong>directly proportional</strong> to the partial pressure of the gas present above the surface of liquid or solution.</p>
        <FormulaBlock latex={String.raw`p = K_H x`} important />
        <p>where <strong>p</strong> is partial pressure of the gas in vapour phase, <strong>x</strong> is mole fraction of the gas in solution, and <strong>K<sub>H</sub></strong> is Henry’s law constant.</p>
      </KeyPoint>

      <TableCard
        caption="Table 1.2: Values of Henry’s Law Constant for Some Selected Gases in Water"
        headers={["Gas", "Temperature/K", "K_H/kbar", "Gas", "Temperature/K", "K_H/kbar"]}
        rows={[
          { cells: ["He", "293", "144.97", "Argon", "298", "40.3"] },
          { cells: ["H₂", "293", "69.16", "CO₂", "298", "1.67"] },
          { cells: ["N₂", "293", "76.48", "Formaldehyde", "298", "1.83×10⁻⁵"] },
          { cells: ["N₂", "303", "88.84", "Methane", "298", "0.413"] },
          { cells: ["O₂", "293", "34.86", "Vinyl chloride", "298", "0.611"] },
          { cells: ["O₂", "303", "46.82", "", "", ""] },
        ]}
      />

      <KeyPoint title="Important Points about Henry’s Law">
        <ul>
          <li><Highlight color="yellow">Higher K<sub>H</sub> value at given pressure → lower solubility</Highlight> of the gas in the liquid.</li>
          <li>K<sub>H</sub> values increase with increase of temperature, so solubility of gases <strong>decreases</strong> with rise in temperature.</li>
          <li>As dissolution is <strong>exothermic</strong>, solubility decreases with increase of temperature.</li>
        </ul>
      </KeyPoint>

      <Callout type="note" title="Applications of Henry’s Law">
        <ul>
          <li><strong>Soft drinks and soda water:</strong> CO<sub>2</sub> is dissolved under high pressure.</li>
          <li><strong>Scuba divers:</strong> Tanks filled with air diluted with helium (11.7% He, 56.2% N<sub>2</sub>, 32.1% O<sub>2</sub>) to avoid bends and nitrogen narcosis.</li>
          <li><strong>High altitudes:</strong> Low partial pressure of O<sub>2</sub> leads to low oxygen concentration in blood causing <strong>anoxia</strong>.</li>
        </ul>
      </Callout>

      <ExerciseQa
        questions={[
          <>H<sub>2</sub>S, a toxic gas with rotten egg like smell, is used for the qualitative analysis. If the solubility of H<sub>2</sub>S in water at STP is 0.195 m, calculate Henry’s law constant.</>,
          <>Henry’s law constant for CO<sub>2</sub> in water is 1.67×10<sup>8</sup> Pa at 298 K. Calculate the quantity of CO<sub>2</sub> in 500 mL of soda water when packed under 2.5 atm CO<sub>2</sub> pressure at 298 K.</>,
        ]}
      />

      <h2 id="h-1-4">1.4 Vapour Pressure of Liquid Solutions</h2>
      <p>For a binary solution of two volatile liquids 1 and 2 in a closed vessel, both evaporate forming vapour phase. Let p<sub>total</sub>, p<sub>1</sub>, p<sub>2</sub> be total and partial vapour pressures.</p>

      <KeyPoint title="Raoult’s Law (for volatile liquids)">
        <p>The partial vapour pressure of each component of the solution is <strong>directly proportional</strong> to its mole fraction present in solution.</p>
        <FormulaBlock latex={String.raw`p_1 = p_1^0 x_1,\quad p_2 = p_2^0 x_2`} />
        <p>where p<sub>1</sub><sup>0</sup>, p<sub>2</sub><sup>0</sup> are vapour pressures of pure components at same temperature.</p>
        <FormulaBlock latex={String.raw`p_{total} = p_1 + p_2 = p_1^0 x_1 + p_2^0 x_2 = p_1^0 + (p_2^0 - p_1^0)x_2`} important />
      </KeyPoint>

      <Callout type="note">
        For a solution containing a <strong>non-volatile solute</strong>, the vapour pressure of solution is lower than that of pure solvent: <Formula>{String.raw`p_1 = p_1^0 x_1`}</Formula> and p<sub>total</sub> = p<sub>1</sub>.
      </Callout>

      <h2 id="h-1-5">1.5 Ideal and Non-ideal Solutions</h2>

      <h3 id="h-1-5-1">Ideal Solutions</h3>
      <p>A solution which obeys <strong>Raoult’s law</strong> over the entire range of concentration is called an <strong>ideal solution</strong>.</p>
      <KeyPoint title="Properties of Ideal Solutions">
        <ul>
          <li><Formula>{String.raw`p_i = p_i^0 x_i`}</Formula> for all components</li>
          <li><Formula>{String.raw`\Delta_{mix}H = 0`}</Formula> (no heat change on mixing)</li>
          <li><Formula>{String.raw`\Delta_{mix}V = 0`}</Formula> (no volume change on mixing)</li>
          <li>Intermolecular forces between A-A, B-B and A-B are nearly equal</li>
        </ul>
      </KeyPoint>
      <p><strong>Examples:</strong> n-hexane and n-heptane, bromoethane and chloroethane, benzene and toluene.</p>

      <h3 id="h-1-5-2">Non-ideal Solutions</h3>
      <p>When a solution does not obey Raoult’s law over the entire range of concentration, it is called <strong>non-ideal solution</strong>.</p>

      <Comparison
        columns={[
          {
            title: "Positive Deviation (ΔmixH > 0, ΔmixV > 0)",
            children: (
              <ul>
                <li><Formula>{String.raw`p_1 > p_1^0 x_1,\; p_2 > p_2^0 x_2`}</Formula></li>
                <li>A-B interactions &lt; A-A and B-B interactions</li>
                <li>Vapour pressure higher than predicted</li>
                <li><strong>Examples:</strong> ethanol + acetone, carbon disulphide + acetone</li>
              </ul>
            ),
          },
          {
            title: "Negative Deviation (ΔmixH < 0, ΔmixV < 0)",
            children: (
              <ul>
                <li><Formula>{String.raw`p_1 < p_1^0 x_1,\; p_2 < p_2^0 x_2`}</Formula></li>
                <li>A-B interactions &gt; A-A and B-B interactions</li>
                <li>Vapour pressure lower than predicted</li>
                <li><strong>Examples:</strong> phenol + aniline, chloroform + acetone</li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-1-5-3">Azeotropes</h3>
      <Callout type="important">
        <strong>Azeotropes</strong> are binary mixtures having the same composition in liquid and vapour phase and boil at a constant temperature. They cannot be separated by fractional distillation.
      </Callout>
      <Comparison
        columns={[
          {
            title: "Minimum boiling azeotropes",
            children: (
              <ul>
                <li>Show <strong>large positive deviation</strong> from Raoult’s law</li>
                <li>Boil at temperature &lt; boiling points of either component</li>
                <li><strong>Example:</strong> Ethanol-water mixture (95% ethanol by volume)</li>
              </ul>
            ),
          },
          {
            title: "Maximum boiling azeotropes",
            children: (
              <ul>
                <li>Show <strong>large negative deviation</strong> from Raoult’s law</li>
                <li>Boil at temperature &gt; boiling points of either component</li>
                <li><strong>Example:</strong> Nitric acid-water mixture (68% HNO<sub>3</sub> by mass)</li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-1-6">1.6 Colligative Properties and Determination of Molar Mass</h2>
      <p><strong>Colligative properties</strong> depend only on the <Highlight color="yellow">number of solute particles</Highlight> irrespective of their nature, relative to the total number of particles present in the solution.</p>
      <p>These include: (i) Relative lowering of vapour pressure, (ii) Elevation of boiling point, (iii) Depression of freezing point, (iv) Osmotic pressure.</p>

      <h3 id="h-1-6-1">Relative Lowering of Vapour Pressure</h3>
      <p>For a solution of non-volatile solute, Raoult’s law gives <Formula>{String.raw`p_1 = p_1^0 x_1`}</Formula></p>
      <FormulaBlock latex={String.raw`\frac{p_1^0 - p_1}{p_1^0} = x_2 = \frac{n_2}{n_1 + n_2}`} important />
      <p>For dilute solutions, <Formula>{String.raw`\frac{p_1^0 - p_1}{p_1^0} = \frac{n_2}{n_1} = \frac{w_2/M_2}{w_1/M_1}`}</Formula>.</p>

      <h3 id="h-1-6-2">Elevation of Boiling Point</h3>
      <p>A solution boils at a higher temperature than the pure solvent. The elevation ΔT<sub>b</sub> is proportional to molality.</p>
      <FormulaBlock latex={String.raw`\Delta T_b = T_b - T_b^0 = K_b\, m`} important />
      <FormulaBlock latex={String.raw`\Delta T_b = K_b \frac{w_2 \times 1000}{M_2 \times w_1}`} />
      <p><strong>K<sub>b</sub></strong> is the molal elevation constant (Ebullioscopic constant), units K kg mol<sup>-1</sup>.</p>

      <h3 id="h-1-6-3">Depression of Freezing Point</h3>
      <p>A solution freezes at a lower temperature than the pure solvent.</p>
      <FormulaBlock latex={String.raw`\Delta T_f = T_f^0 - T_f = K_f\, m`} important />
      <FormulaBlock latex={String.raw`\Delta T_f = K_f \frac{w_2 \times 1000}{M_2 \times w_1}`} />
      <p><strong>K<sub>f</sub></strong> is the molal depression constant (Cryoscopic constant).</p>

      <h3 id="h-1-6-4">Osmosis and Osmotic Pressure</h3>
      <Callout type="note">
        <strong>Osmosis</strong> is the flow of solvent molecules from pure solvent to solution across a semipermeable membrane.
      </Callout>
      <p><strong>Osmotic pressure (π)</strong> is the excess pressure applied to stop osmosis.</p>
      <FormulaBlock latex={String.raw`\pi = \frac{n_2}{V} R T = C R T`} important />
      <p>where C is molar concentration, R gas constant, T temperature in Kelvin.</p>
      <FormulaBlock latex={String.raw`M_2 = \frac{w_2 R T}{\pi V}`} />

      <KeyPoint title="Types of Solutions (Osmosis)">
        <ul>
          <li><strong>Isotonic:</strong> Same osmotic pressure as body fluids (e.g., 0.9% (mass/volume) NaCl)</li>
          <li><strong>Hypertonic:</strong> Higher osmotic pressure than another solution</li>
          <li><strong>Hypotonic:</strong> Lower osmotic pressure than another solution</li>
        </ul>
      </KeyPoint>
      <Callout type="note"><strong>Reverse osmosis:</strong> Pressure larger than osmotic pressure applied on solution side — solvent flows from solution to pure solvent. Used in desalination of sea water.</Callout>

      <h2 id="h-1-7">1.7 Abnormal Molar Masses</h2>
      <p>When solute undergoes <strong>association</strong> or <strong>dissociation</strong> in solution, the observed molar mass is different from calculated molar mass (abnormal molar mass).</p>

      <h3 id="h-1-7-1">Van’t Hoff factor (i)</h3>
      <FormulaBlock latex={String.raw`i = \frac{\text{Normal molar mass}}{\text{Abnormal molar mass}} = \frac{\text{Observed colligative property}}{\text{Calculated colligative property}} = \frac{\text{Total moles after}}{\text{Total moles before}}`} important />

      <KeyPoint title="Effect on Colligative Properties">
        <FormulaBlock latex={String.raw`\Delta T_b = i K_b m,\quad \Delta T_f = i K_f m,\quad \pi = i C R T,\quad \frac{p_1^0 - p_1}{p_1^0} = i \frac{n_2}{n_1}`} />
        <ul>
          <li><strong>Dissociation (e.g., NaCl, KCl):</strong> i &gt; 1</li>
          <li><strong>Association (e.g., ethanoic acid in benzene forming dimer):</strong> i &lt; 1</li>
          <li><strong>No association/dissociation:</strong> i = 1</li>
        </ul>
      </KeyPoint>

      <h2 id="h-1-exercises">Exercises (Selected)</h2>
      <ExerciseQa
        questions={[
          <>Define the term solution. How many types of solutions are formed? Write briefly about each type with an example.</>,
          <>Give an example of a solid solution in which the solute is a gas.</>,
          <>Define the following terms: (i) Mole fraction (ii) Molality (iii) Molarity (iv) Mass percentage.</>,
          <>Concentrated nitric acid used in laboratory work is 68% nitric acid by mass in aqueous solution. What should be the molarity of such a sample of the acid if the density of the solution is 1.504 g mL<sup>-1</sup>?</>,
          <>A solution of glucose in water is labelled as 10% w/w, what would be the molality and mole fraction of each component in the solution? If the density of solution is 1.2 g mL<sup>-1</sup>, then what shall be the molarity of the solution?</>,
          <>How many mL of 0.1 M HCl are required to react completely with 1 g mixture of Na<sub>2</sub>CO<sub>3</sub> and NaHCO<sub>3</sub> containing equimolar amounts of both?</>,
          <>A solution is obtained by mixing 300 g of 25% solution and 400 g of 40% solution by mass. Calculate the mass percentage of the resulting solution.</>,
          <>An antifreeze solution is prepared from 222.6 g of ethylene glycol (C<sub>2</sub>H<sub>6</sub>O<sub>2</sub>) and 200 g of water. Calculate the molality of the solution. If the density of the solution is 1.072 g mL<sup>-1</sup>, then what shall be the molarity of the solution?</>,
          <>A sample of drinking water was found to be severely contaminated with chloroform (CHCl<sub>3</sub>) supposed to be a carcinogen. The level of contamination was 15 ppm (by mass): (i) express this in percent by mass (ii) determine the molality of chloroform in the water sample.</>,
          <>What role does the molecular interaction play in a solution of alcohol and water?</>,
        ]}
        answersHeading="NCERT Exercise Questions (1.1–1.10)"
      />
    </>
  );
}
