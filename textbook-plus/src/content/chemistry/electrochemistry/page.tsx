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

export default function ElectrochemistryChapter() {
  return (
    <>
      <h2 id="h-2-1">2.1 Electrochemical Cells</h2>
      <Callout type="important">
        <Highlight color="yellow">Electrochemistry</Highlight> is the study of production of electricity from energy released during spontaneous chemical reactions and the use of electrical energy to bring about non-spontaneous chemical transformations.
      </Callout>
      <p>Chemical reactions can be used to produce electrical energy; conversely, electrical energy can be used to carry out chemical reactions that do not proceed spontaneously.</p>

      <h3 id="h-2-1-1">Galvanic Cell (Voltaic Cell)</h3>
      <p>A <strong>Galvanic cell</strong> converts chemical energy liberated during a redox reaction to electrical energy. It is an electrochemical cell that produces electricity as a result of spontaneous reaction.</p>
      <KeyPoint title="Daniell Cell (Example)">
        <p>Zn(s) | Zn<sup>2+</sup>(aq) || Cu<sup>2+</sup>(aq) | Cu(s)</p>
        <FormulaBlock latex={String.raw`\text{Anode (oxidation):}\quad \text{Zn}(s) \to \text{Zn}^{2+}(aq) + 2e^-`} />
        <FormulaBlock latex={String.raw`\text{Cathode (reduction):}\quad \text{Cu}^{2+}(aq) + 2e^- \to \text{Cu}(s)`} />
        <FormulaBlock latex={String.raw`\text{Overall:}\quad \text{Zn}(s) + \text{Cu}^{2+}(aq) \to \text{Zn}^{2+}(aq) + \text{Cu}(s)`} important />
      </KeyPoint>

      <Comparison
        columns={[
          {
            title: "Galvanic Cell",
            children: (
              <ul>
                <li>Spontaneous redox reaction</li>
                <li>Chemical energy → Electrical energy</li>
                <li>Anode: negative, Oxidation</li>
                <li>Cathode: positive, Reduction</li>
              </ul>
            ),
          },
          {
            title: "Electrolytic Cell",
            children: (
              <ul>
                <li>Non-spontaneous redox reaction</li>
                <li>Electrical energy → Chemical energy</li>
                <li>Anode: positive, Oxidation</li>
                <li>Cathode: negative, Reduction</li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-2-2">2.2 Galvanic Cells</h2>
      <p>The electrode potential difference between the two electrodes causes current to flow. The <strong>cell potential (E<sub>cell</sub>)</strong> is the potential difference between the two electrodes of a galvanic cell.</p>
      
      <KeyPoint title="Standard Electrode Potential">
        <p>When the concentration of all species involved in a half-cell is unity then the electrode potential is known as <strong>standard electrode potential</strong>. According to convention, a <strong>hydrogen electrode</strong> is taken as reference and its electrode potential is taken as <strong>0.00 V</strong>.</p>
        <FormulaBlock latex={String.raw`E_{cell} = E_{cathode} - E_{anode}}`} important />
        <p>In terms of reduction potentials (IUPAC convention): <Formula>{String.raw`E_{cell}^0 = E_{cathode}^0 (reduction) - E_{anode}^0 (reduction)`}</Formula></p>
      </KeyPoint>

      <Callout type="note">A negative value of E<sub>cell</sub> indicates that the reaction is non-spontaneous in the direction written. A positive E<sub>cell</sub> means spontaneous.</Callout>

      <h2 id="h-2-3">2.3 Nernst Equation</h2>
      <p>The <strong>Nernst equation</strong> relates electrode potential to concentration of ions.</p>
      <p>For a general electrode reaction: <Formula>{String.raw`M^{n+}(aq) + n e^- \to M(s)`}</Formula></p>
      <FormulaBlock latex={String.raw`E_{(M^{n+}/M)} = E_{(M^{n+}/M)}^0 - \frac{RT}{nF}\ln\frac{1}{[M^{n+}]}`} important />
      <p>At 298 K, substituting values:</p>
      <FormulaBlock latex={String.raw`E_{(M^{n+}/M)} = E_{(M^{n+}/M)}^0 + \frac{0.0591}{n}\log [M^{n+}]`} important />

      <KeyPoint title="Nernst Equation for Cell Reaction">
        <p>For a general reaction: <Formula>{String.raw`aA + bB \to cC + dD`}</Formula></p>
        <FormulaBlock latex={String.raw`E_{cell} = E_{cell}^0 - \frac{RT}{nF}\ln Q`} />
        <p>Reaction quotient: <Formula>{String.raw`Q = \frac{[C]^c [D]^d}{[A]^a [B]^b}`}</Formula></p>
        <p>At 298 K: <FormulaBlock latex={String.raw`E_{cell} = E_{cell}^0 - \frac{0.0591}{n}\log Q`} /></p>
      </KeyPoint>

      <h3 id="h-2-3-1">Equilibrium Constant from Nernst Equation</h3>
      <p>At equilibrium, <Formula>{String.raw`E_{cell} = 0,\quad Q = K_c`}</Formula></p>
      <FormulaBlock latex={String.raw`E_{cell}^0 = \frac{0.0591}{n}\log K_c \quad (\text{at }298\,K)`} important />

      <h3 id="h-2-3-2">Electrochemical Cell and Gibbs Energy</h3>
      <FormulaBlock latex={String.raw`\Delta_r G = -n F E_{cell}`} important />
      <FormulaBlock latex={String.raw`\Delta_r G^0 = -n F E_{cell}^0 = -RT \ln K_c`} important />
      <p>where <strong>n</strong> is number of electrons, <strong>F</strong> is Faraday constant (96500 C mol<sup>-1</sup>).</p>

      <Expandable title="Example — Calculate E_cell using Nernst equation" variant="exercise">
        <p>For Daniell cell: <Formula>{String.raw`\text{Zn} + \text{Cu}^{2+} \to \text{Zn}^{2+} + \text{Cu},\ E_{cell}^0 = 1.1\,V`}</Formula>. If [Cu<sup>2+</sup>]=1 M, [Zn<sup>2+</sup>]=0.1 M, find E<sub>cell</sub>.</p>
        <p><strong>Solution:</strong></p>
        <FormulaBlock latex={String.raw`E_{cell} = E_{cell}^0 - \frac{0.0591}{2}\log\frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]} = 1.1 - \frac{0.0591}{2}\log(0.1) = 1.1 - 0.02955(-1) = 1.1 + 0.02955 = 1.1295\,V`} />
      </Expandable>

      <h2 id="h-2-4">2.4 Conductance of Electrolytic Solutions</h2>
      
      <KeyPoint title="Important Terms">
        <ul>
          <li><strong>Resistance (R):</strong> <Formula>{String.raw`R = \rho \frac{l}{A}`}</Formula>, unit ohm (Ω)</li>
          <li><strong>Resistivity (ρ):</strong> unit Ω m</li>
          <li><strong>Conductance (G):</strong> <Formula>{String.raw`G = \frac{1}{R} = \kappa \frac{A}{l}`}</Formula>, unit siemens (S) or ohm<sup>-1</sup></li>
          <li><strong>Conductivity/Specific conductance (κ):</strong> <Formula>{String.raw`\kappa = G \frac{l}{A}`}</Formula>, unit S m<sup>-1</sup></li>
          <li><strong>Cell constant (G*):</strong> <Formula>{String.raw`G^* = \frac{l}{A} = \frac{\kappa}{G}`}</Formula>, unit m<sup>-1</sup></li>
        </ul>
      </KeyPoint>

      <h3 id="h-2-4-1">Molar Conductivity (Λ_m)</h3>
      <p>Molar conductivity is the conducting power of all ions produced by dissolving one mole of electrolyte in solution.</p>
      <FormulaBlock latex={String.raw`\Lambda_m = \frac{\kappa \times 1000}{M}`} important />
      <p>where M is molarity of solution. Units: S cm<sup>2</sup> mol<sup>-1</sup> (common) or S m<sup>2</sup> mol<sup>-1</sup>.</p>

      <h3 id="h-2-4-2">Variation of Conductivity and Molar Conductivity with Concentration</h3>
      <Comparison
        columns={[
          {
            title: "Strong Electrolytes (e.g., NaCl, KCl)",
            children: (
              <ul>
                <li>κ decreases slightly with dilution</li>
                <li>Λ<sub>m</sub> increases slowly with dilution</li>
                <li>Follows <strong>Debye-Huckel-Onsager equation:</strong> <Formula>{String.raw`\Lambda_m = \Lambda_m^0 - A c^{1/2}`}</Formula></li>
                <li>Can be extrapolated to get <strong>Λ<sub>m</sub><sup>0</sup></strong> (limiting molar conductivity)</li>
              </ul>
            ),
          },
          {
            title: "Weak Electrolytes (e.g., CH₃COOH, NH₄OH)",
            children: (
              <ul>
                <li>κ decreases with dilution</li>
                <li>Λ<sub>m</sub> increases steeply on dilution</li>
                <li>Cannot be extrapolated linearly</li>
                <li>Use <strong>Kohlrausch law</strong> to calculate Λ<sub>m</sub><sup>0</sup></li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-2-5">2.5 Electrolytic Cells and Electrolysis</h2>
      <p><strong>Electrolysis</strong> is the process of chemical decomposition of an electrolyte by passing electric current.</p>
      
      <KeyPoint title="Faraday’s Laws of Electrolysis">
        <p><strong>First Law:</strong> The mass of substance produced at electrode is directly proportional to quantity of electricity passed.</p>
        <FormulaBlock latex={String.raw`m = Z Q = Z I t`} />
        <p>where Z = electrochemical equivalent.</p>
        <p><strong>Second Law:</strong> When same quantity of electricity is passed through different electrolytes, masses of substances deposited are proportional to their equivalent weights.</p>
        <FormulaBlock latex={String.raw`\frac{m_1}{m_2} = \frac{E_1}{E_2}`} important />
      </KeyPoint>

      <KeyPoint title="Products of Electrolysis">
        <ul>
          <li><strong>Molten NaCl:</strong> Na at cathode, Cl<sub>2</sub> at anode</li>
          <li><strong>Aqueous NaCl (brine):</strong> H<sub>2</sub> at cathode, Cl<sub>2</sub> at anode (preferred due to overpotential)</li>
          <li><strong>Dilute H<sub>2</sub>SO<sub>4</sub>:</strong> H<sub>2</sub> at cathode, O<sub>2</sub> at anode</li>
          <li><strong>Conc. H<sub>2</sub>SO<sub>4</sub>:</strong> Peroxodisulphuric acid (H<sub>2</sub>S<sub>2</sub>O<sub>8</sub>) can be formed</li>
        </ul>
      </KeyPoint>

      <h2 id="h-2-6">2.6 Batteries</h2>
      <p>A <strong>primary battery</strong> becomes dead after use and cannot be recharged (e.g., dry cell, mercury cell). A <strong>secondary battery</strong> can be recharged by passing current in opposite direction (e.g., lead-acid battery, Ni-Cd cell).</p>

      <Comparison
        columns={[
          {
            title: "Dry Cell (Leclanche cell)",
            children: (
              <ul>
                <li>Anode: Zn container</li>
                <li>Cathode: Carbon rod surrounded by MnO<sub>2</sub> + carbon</li>
                <li>Electrolyte: NH<sub>4</sub>Cl + ZnCl<sub>2</sub> paste</li>
                <li>Cell potential ~1.5 V</li>
              </ul>
            ),
          },
          {
            title: "Lead Storage Battery (Secondary)",
            children: (
              <ul>
                <li>Anode: Pb, Cathode: PbO<sub>2</sub></li>
                <li>Electrolyte: 38% H<sub>2</sub>SO<sub>4</sub></li>
                <li><strong>Discharging:</strong> Pb + PbO<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub> → 2PbSO<sub>4</sub> + 2H<sub>2</sub>O</li>
                <li><strong>Charging:</strong> Reverse reaction</li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-2-6-1">Fuel Cells</h3>
      <Callout type="important">
        <strong>Fuel cells</strong> are galvanic cells that convert the energy of combustion of fuels like hydrogen, methane, methanol etc. directly into electrical energy.
      </Callout>
      <KeyPoint title="Hydrogen-Oxygen Fuel Cell">
        <FormulaBlock latex={String.raw`\text{Anode:}\quad 2\text{H}_2(g) + 4\text{OH}^-(aq) \to 4\text{H}_2\text{O}(l) + 4e^-`} />
        <FormulaBlock latex={String.raw`\text{Cathode:}\quad \text{O}_2(g) + 2\text{H}_2\text{O}(l) + 4e^- \to 4\text{OH}^-(aq)`} />
        <FormulaBlock latex={String.raw`\text{Overall:}\quad 2\text{H}_2(g) + \text{O}_2(g) \to 2\text{H}_2\text{O}(l)`} important />
        <p><strong>Advantages:</strong> High efficiency, pollution free, water used for drinking in spacecraft.</p>
      </KeyPoint>

      <h2 id="h-2-7">2.7 Corrosion</h2>
      <Callout type="important">
        <strong>Corrosion</strong> is the gradual deterioration of metals by chemical or electrochemical reaction with their environment (e.g., rusting of iron).
      </Callout>
      <KeyPoint title="Rusting of Iron (Electrochemical Mechanism)">
        <FormulaBlock latex={String.raw`\text{Anode:}\quad \text{Fe}(s) \to \text{Fe}^{2+}(aq) + 2e^- \quad (E^0 = -0.44V)`} />
        <FormulaBlock latex={String.raw`\text{Cathode:}\quad \text{O}_2(g) + 4\text{H}^+(aq) + 4e^- \to 2\text{H}_2\text{O}(l) \quad (E^0 = +1.23V)`} />
        <p>Overall: <Formula>{String.raw`2\text{Fe}(s) + \frac{3}{2}\text{O}_2(g) + x\text{H}_2\text{O} \to \text{Fe}_2\text{O}_3\cdot x\text{H}_2\text{O}(\text{rust})`}</Formula></p>
      </KeyPoint>
      <KeyPoint title="Prevention of Corrosion">
        <ul>
          <li><strong>Barrier protection:</strong> Painting, oiling, greasing, galvanisation</li>
          <li><strong>Sacrificial protection:</strong> Coating with more active metal (Zn on iron)</li>
          <li><strong>Cathodic protection:</strong> Iron connected to more active metal like Mg or Zn</li>
          <li><strong>Alloying:</strong> Stainless steel (Fe + Cr + Ni)</li>
        </ul>
      </KeyPoint>

      <h2 id="h-2-exercises">Exercises (Selected)</h2>
      <ExerciseQa
        questions={[
          <>Arrange the following metals in the order in which they displace each other from the solution of their salts. Al, Cu, Fe, Mg and Zn.</>,
          <>Given the standard electrode potentials, K<sup>+</sup>/K = –2.93V, Ag<sup>+</sup>/Ag = 0.80V, Hg<sup>2+</sup>/Hg = 0.79V, Mg<sup>2+</sup>/Mg = –2.37V, Cr<sup>3+</sup>/Cr = –0.74V. Arrange these metals in their increasing order of reducing power.</>,
          <>Depict the galvanic cell in which the reaction Zn(s) + 2Ag<sup>+</sup>(aq) → Zn<sup>2+</sup>(aq) + 2Ag(s) takes place. Further show: (i) Which of the electrode is negatively charged? (ii) The carriers of the current in the cell. (iii) Individual reaction at each electrode.</>,
          <>Calculate the standard cell potentials of galvanic cell in which the following reactions take place: (i) 2Cr(s) + 3Cd<sup>2+</sup>(aq) → 2Cr<sup>3+</sup>(aq) + 3Cd (ii) Fe<sup>2+</sup>(aq) + Ag<sup>+</sup>(aq) → Fe<sup>3+</sup>(aq) + Ag(s). Calculate Δ<sub>r</sub>G° and equilibrium constant of the reactions.</>,
          <>Write the Nernst equation and emf of the following cells at 298 K: (i) Mg(s)|Mg<sup>2+</sup>(0.001M)||Cu<sup>2+</sup>(0.0001M)|Cu(s) (ii) Fe(s)|Fe<sup>2+</sup>(0.001M)||H<sup>+</sup>(1M)|H<sub>2</sub>(g)(1bar)|Pt(s)</>,
          <>The conductivity of 0.20 M solution of KCl at 298 K is 0.0248 S cm<sup>-1</sup>. Calculate its molar conductivity.</>,
          <>The resistance of a conductivity cell containing 0.001M KCl solution at 298 K is 1500 Ω. What is the cell constant if conductivity of 0.001M KCl solution at 298 K is 0.146×10<sup>-3</sup> S cm<sup>-1</sup>?</>,
          <>The molar conductivity of 0.025 mol L<sup>-1</sup> methanoic acid is 46.1 S cm<sup>2</sup> mol<sup>-1</sup>. Calculate its degree of dissociation and dissociation constant. Given λ°(H<sup>+</sup>) = 349.6 S cm<sup>2</sup> mol<sup>-1</sup> and λ°(HCOO<sup>-</sup>) = 54.6 S cm<sup>2</sup> mol<sup>-1</sup>.</>,
          <>Suggest two materials other than hydrogen that can be used as fuels in fuel cells.</>,
          <>Explain how rusting of iron is envisaged as setting up of an electrochemical cell.</>,
        ]}
        answersHeading="NCERT Exercise Questions (2.1–2.10)"
      />
    </>
  );
}
