import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";

import { Stepper } from "@/components/content/Stepper";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";

export default function DAndFBlockElementsChapter() {
  return (
    <>
      <h2 id="h-4-1">4.1 Position in the Periodic Table</h2>

      <Callout type="important">
        The <strong>d-block</strong> of the periodic table contains the elements of the groups
        3–12 in which the <strong>d orbitals are progressively filled</strong> in each of the four
        long periods. The <strong>f-block</strong> consists of elements in which 4f and 5f orbitals
        are progressively filled.
      </Callout>

      <ul>
        <li>The f-block elements are placed in a separate panel at the bottom of the periodic table.</li>
        <li>The names <strong>transition metals</strong> and <strong>inner transition metals</strong> are used for the d- and f-block elements respectively.</li>
      </ul>

      <TableCard
        title="The four transition series and the two inner transition series"
        headers={["Series", "Elements", "Block"]}
        rows={[
          { cells: ["3d", "Sc to Zn", "d"] },
          { cells: ["4d", "Y to Cd", "d"] },
          { cells: ["5d", "La and Hf to Hg", "d"] },
          { cells: ["6d", "Ac and Rf to Cn", "d"] },
          { cells: ["4f (lanthanoids)", "Ce to Lu", "f"] },
          { cells: ["5f (actinoids)", "Th to Lr", "f"] },
        ]}
      />

      <p>
        The name <em>transition</em> was originally derived from the fact that their chemical
        properties were transitional between those of s- and p-block elements.
      </p>

      <Callout type="important" title="IUPAC definition of transition metals">
        Transition metals are metals which have <strong>incomplete d subshell either in the neutral
        atom or in their ions</strong>.
      </Callout>

      <p>
        Zinc, cadmium and mercury of group 12 have full d<sup>10</sup> configuration in their ground
        state as well as in their common oxidation states, and hence are <strong>not regarded as
        transition metals</strong>. However, being the end members of the 3d, 4d and 5d series, their
        chemistry is studied along with that of the transition metals.
      </p>

      <KeyPoint title="Why study transition elements separately?">
        <p>
          The presence of partly filled d or f orbitals in their atoms makes transition elements
          different from non-transition elements. Ions of a given d<sup>n</sup> configuration
          (n = 1–9) have similar magnetic and electronic properties, and partly filled d orbitals
          give a variety of oxidation states, coloured ions, complex formation, catalytic property
          and paramagnetic behaviour.
        </p>
      </KeyPoint>

      <h2 id="h-4-2">4.2 Electronic Configurations of the d-Block Elements</h2>

      <p>
        The d-orbitals of the <strong>penultimate energy level</strong> receive electrons, giving the
        four rows of transition metals — 3d, 4d, 5d and 6d.
      </p>

      <FormulaBlock
        latex={String.raw`(n-1)d^{1-10}\,ns^{1-2}`}
        important
        label="General outer configuration of d-block elements"
      />

      <Callout type="note">
        Exception: Pd has the configuration <Formula>{String.raw`4d^{10}5s^{0}`}</Formula>. The
        generalisation also breaks for Cr and Cu because the energy gap between (n−1)d and ns
        orbitals is very small and <strong>half-filled and completely filled sets of orbitals are
        relatively more stable</strong>.
      </Callout>

      <ul>
        <li>Cr: <Formula>{String.raw`3d^{5}4s^{1}`}</Formula> instead of <Formula>{String.raw`3d^{4}4s^{2}`}</Formula>.</li>
        <li>Cu: <Formula>{String.raw`3d^{10}4s^{1}`}</Formula> instead of <Formula>{String.raw`3d^{9}4s^{2}`}</Formula>.</li>
        <li>Zn, Cd, Hg, Cn: general formula <Formula>{String.raw`(n-1)d^{10}ns^{2}`}</Formula> — completely filled d orbitals, so not transition elements.</li>
      </ul>

      <TableCard
        caption="Table 4.1: Electronic Configurations of outer orbitals of the Transition Elements (ground state)"
        headers={["Series", "Element", "Z", "ns", "(n−1)d"]}
        rows={[
          { cells: ["3d", "Sc", "21", "4s²", "3d¹"] },
          { cells: ["3d", "Ti", "22", "4s²", "3d²"] },
          { cells: ["3d", "V", "23", "4s²", "3d³"] },
          { cells: ["3d", "Cr", "24", "4s¹", "3d⁵"] },
          { cells: ["3d", "Mn", "25", "4s²", "3d⁵"] },
          { cells: ["3d", "Fe", "26", "4s²", "3d⁶"] },
          { cells: ["3d", "Co", "27", "4s²", "3d⁷"] },
          { cells: ["3d", "Ni", "28", "4s²", "3d⁸"] },
          { cells: ["3d", "Cu", "29", "4s¹", "3d¹⁰"] },
          { cells: ["3d", "Zn", "30", "4s²", "3d¹⁰"] },
          { cells: ["4d", "Y", "39", "5s²", "4d¹"] },
          { cells: ["4d", "Zr", "40", "5s²", "4d²"] },
          { cells: ["4d", "Nb", "41", "5s¹", "4d⁴"] },
          { cells: ["4d", "Mo", "42", "5s¹", "4d⁵"] },
          { cells: ["4d", "Tc", "43", "5s¹", "4d⁶"] },
          { cells: ["4d", "Ru", "44", "5s¹", "4d⁷"] },
          { cells: ["4d", "Rh", "45", "5s¹", "4d⁸"] },
          { cells: ["4d", "Pd", "46", "5s⁰", "4d¹⁰"] },
          { cells: ["4d", "Ag", "47", "5s¹", "4d¹⁰"] },
          { cells: ["4d", "Cd", "48", "5s²", "4d¹⁰"] },
          { cells: ["5d", "La", "57", "6s²", "5d¹"] },
          { cells: ["5d", "Hf", "72", "6s²", "5d²"] },
          { cells: ["5d", "Ta", "73", "6s²", "5d³"] },
          { cells: ["5d", "W", "74", "6s²", "5d⁴"] },
          { cells: ["5d", "Re", "75", "6s²", "5d⁵"] },
          { cells: ["5d", "Os", "76", "6s²", "5d⁶"] },
          { cells: ["5d", "Ir", "77", "6s²", "5d⁷"] },
          { cells: ["5d", "Pt", "78", "6s¹", "5d⁹"] },
          { cells: ["5d", "Au", "79", "6s¹", "5d¹⁰"] },
          { cells: ["5d", "Hg", "80", "6s²", "5d¹⁰"] },
          { cells: ["6d", "Ac", "89", "7s²", "6d¹"] },
          { cells: ["6d", "Rf", "104", "7s²", "6d²"] },
          { cells: ["6d", "Db", "105", "7s²", "6d³"] },
          { cells: ["6d", "Sg", "106", "7s²", "6d⁴"] },
          { cells: ["6d", "Bh", "107", "7s²", "6d⁵"] },
          { cells: ["6d", "Hs", "108", "7s²", "6d⁶"] },
          { cells: ["6d", "Mt", "109", "7s²", "6d⁷"] },
          { cells: ["6d", "Ds", "110", "7s²", "6d⁸"] },
          { cells: ["6d", "Rg", "111", "7s¹", "6d¹⁰"] },
          { cells: ["6d", "Cn", "112", "7s²", "6d¹⁰"] },
        ]}
      />

      <Expandable title="Example 4.1 — Scandium is a transition element, zinc is not" variant="example">
        <p>
          <strong>Question:</strong> On what ground can you say that scandium (Z = 21) is a
          transition element but zinc (Z = 30) is not?
        </p>
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Scandium has incompletely filled 3d orbitals in its ground state (3d<sup>1</sup>), so it is a transition element.</li>
          <li>Zinc has completely filled d orbitals (3d<sup>10</sup>) in its ground state as well as in its oxidised state, so it is not a transition element.</li>
        </ul>
      </Expandable>

      <Expandable title="Intext 4.1 — Silver has 4d¹⁰ in its ground state. Why is it a transition element?" variant="exercise">
        <p>
          Silver (Z = 47) can exhibit the +2 oxidation state, in which it has incompletely filled
          4d orbitals. Hence it behaves as a transition element.
        </p>
      </Expandable>

      <h2 id="h-4-3">4.3 General Properties of the Transition Elements (d-Block)</h2>

      <p>
        The properties of the first transition series (3d) are discussed here; the heavier series
        follow the same pattern.
      </p>

      <h3 id="h-4-3-1">4.3.1 Physical Properties</h3>

      <ul>
        <li>Nearly all transition elements show typical metallic properties — high tensile strength, ductility, malleability, high thermal and electrical conductivity, metallic lustre.</li>
        <li>With the exceptions of Zn, Cd, Hg and Mn, they have one or more typical metallic structures at normal temperatures (bcc, hcp, ccp).</li>
        <li>The metals (except Zn, Cd and Hg) are <strong>very hard and have low volatility</strong>; melting and boiling points are high.</li>
      </ul>

      <KeyPoint title="Why are melting points and enthalpies of atomisation high?">
        <p>
          Greater number of electrons from (n−1)d, in addition to the ns electrons, take part in
          interatomic metallic bonding. In any row the melting points rise to a maximum at
          d<sup>5</sup> (except the anomalous Mn and Tc) and then fall regularly.
        </p>
        <p>
          The maxima near the middle of each series indicate that <strong>one unpaired electron per
          d orbital</strong> is particularly favourable for strong interatomic interaction. Higher
          enthalpy of atomisation makes a metal <em>noble</em> in its reactions.
        </p>
      </KeyPoint>

      <p>
        Metals of the second and third series have greater enthalpies of atomisation than the
        corresponding first-series metals — this accounts for the much more frequent
        <strong> metal–metal bonding</strong> in compounds of the heavy transition metals.
      </p>

      <Expandable title="Example 4.2 — Why do transition elements have high enthalpies of atomisation?" variant="example">
        <p>
          <strong>Solution:</strong> Because of a large number of unpaired electrons in their atoms,
          they have stronger interatomic interaction and hence stronger bonding between atoms,
          resulting in higher enthalpies of atomisation.
        </p>
      </Expandable>

      <Expandable title="Intext 4.2 — Why is the enthalpy of atomisation of zinc the lowest (126 kJ mol⁻¹)?" variant="exercise">
        <p>
          In the formation of metallic bonds no electrons from 3d orbitals are involved in zinc
          (3d<sup>10</sup>), while in all other metals of the 3d series d electrons do take part in
          metallic bonding.
        </p>
      </Expandable>

      <h3 id="h-4-3-2">4.3.2 Variation in Atomic and Ionic Sizes</h3>

      <ul>
        <li>Ions of the same charge in a given series show a <strong>progressive decrease in radius</strong> with increasing atomic number.</li>
        <li>Reason: each new electron enters a d orbital while nuclear charge rises by unity, and the shielding effect of a d electron is not effective.</li>
        <li>The variation within a series is quite small.</li>
        <li>Radii increase from the 3d to the 4d series, but the 5d radii are virtually the same as those of the corresponding 4d elements.</li>
      </ul>

      <Callout type="important" title="Lanthanoid contraction">
        The filling of 4f orbitals before the 5d orbitals results in a regular decrease in atomic
        radii called <strong>lanthanoid contraction</strong>. It compensates for the expected
        increase in atomic size with increasing atomic number, because the shielding of one 4f
        electron by another is less than that of one d electron by another.
      </Callout>

      <p>
        Net result: the second and third d series have similar radii — e.g. Zr = 160 pm, Hf = 159 pm —
        and therefore very similar physical and chemical properties.
      </p>

      <p>
        Decreasing metallic radius coupled with increasing atomic mass gives a general
        <strong> increase in density</strong>: from titanium (3.43 g cm<sup>−3</sup>) to copper
        (8.9 g cm<sup>−3</sup>).
      </p>

      <h3 id="h-4-3-3">4.3.3 Ionisation Enthalpies</h3>

      <ul>
        <li>Ionisation enthalpy increases along each series from left to right, due to increasing nuclear charge while inner d orbitals are filled.</li>
        <li>Successive enthalpies do not rise as steeply as in non-transition elements; variation along the series is much smaller.</li>
        <li>The first ionisation enthalpy increases in general, but the second and third rise much more steeply.</li>
        <li>The irregular trend in the first ionisation enthalpy of the 3d metals is of little chemical significance; it arises because removing one electron alters the relative energies of 4s and 3d orbitals.</li>
      </ul>

      <KeyPoint title="Three terms that decide ionisation enthalpy">
        <ul>
          <li>Attraction of each electron towards the nucleus.</li>
          <li>Repulsion between the electrons.</li>
          <li><strong>Exchange energy</strong> — approximately proportional to the total number of possible pairs of parallel spins in degenerate orbitals; the lowest energy state has maximum single occupation with parallel spins (Hund&apos;s rule).</li>
        </ul>
        <p>
          Loss of exchange energy increases stability, so ionisation becomes more difficult.
          Breaks occur at Mn<sup>2+</sup> (3d<sup>5</sup>) and Fe<sup>3+</sup> (3d<sup>5</sup>)
          because of the extra stability of the half-filled d<sup>5</sup> configuration.
        </p>
      </KeyPoint>

      <p>
        The lowest common oxidation state is +2. Forming M<sup>2+</sup>(g) needs the enthalpy of
        atomisation plus the first and second ionisation enthalpies; the second ionisation enthalpy
        dominates, giving unusually high values for Cr and Cu (M<sup>+</sup> has d<sup>5</sup> and
        d<sup>10</sup>) and a low value for Zn.
      </p>

      <p>
        Third ionisation enthalpies are quite high and show the difficulty of removing an electron
        from d<sup>5</sup> (Mn<sup>2+</sup>) and d<sup>10</sup> (Zn<sup>2+</sup>). The high values
        for Cu, Ni and Zn explain why an oxidation state greater than +2 is difficult for them.
      </p>

      <h3 id="h-4-3-4">4.3.4 Oxidation States</h3>

      <TableCard
        caption="Table 4.3: Oxidation States of the first row Transition Metal (the most common ones are in bold types)"
        headers={["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn"]}
        rows={[
          { cells: ["+2", "+2", "+2", "+2", "+2", "+2", "+2", "+1", "+2"] },
          { cells: ["+3", "+3", "+3", "+3", "+3", "+3", "+3", "+2"] },
          { cells: ["+4", "+4", "+4", "+4", "+4", "+4", "+4"] },
          { cells: ["+5", "+5", "+5"] },
          { cells: ["+6", "+6", "+6"] },
          { cells: ["+7"] },
        ]}
      />

      <ul>
        <li>The elements with the greatest number of oxidation states occur in or near the <strong>middle</strong> of the series; manganese shows all states from +2 to +7.</li>
        <li>Fewer states at the ends: either too few electrons to lose or share (Sc, Ti) or too many d electrons leaving fewer orbitals for higher valence (Cu, Zn).</li>
        <li>Maximum oxidation state of reasonable stability corresponds to the sum of s and d electrons up to manganese: TiO<sub>2</sub>, VO<sub>2</sub><sup>+</sup>, CrO<sub>4</sub><sup>2−</sup>, MnO<sub>4</sub><sup>−</sup>.</li>
        <li>Beyond Mn there is an abrupt decrease in the stability of higher states, so the typical species are Fe<sup>II,III</sup>, Co<sup>II,III</sup>, Ni<sup>II</sup>, Cu<sup>I,II</sup>, Zn<sup>II</sup>.</li>
      </ul>

      <Callout type="note">
        Transition-metal oxidation states differ from each other by <strong>unity</strong>
        (V<sup>II</sup>, V<sup>III</sup>, V<sup>IV</sup>, V<sup>V</sup>), whereas non-transition
        element states normally differ by two.
      </Callout>

      <ul>
        <li>In groups 4–10 the heavier members favour <em>higher</em> oxidation states — the opposite of the inert pair effect in the p-block.</li>
        <li>In group 6, Mo(VI) and W(VI) are more stable than Cr(VI): dichromate in acid is a strong oxidising agent, whereas MoO<sub>3</sub> and WO<sub>3</sub> are not.</li>
        <li>Low oxidation states occur when ligands have π-acceptor character: nickel and iron are <strong>zero</strong> in Ni(CO)<sub>4</sub> and Fe(CO)<sub>5</sub>.</li>
      </ul>

      <Expandable title="Example 4.3 — A transition element without variable oxidation states" variant="example">
        <p><strong>Question:</strong> Name a transition element which does not exhibit variable oxidation states.</p>
        <p><strong>Solution:</strong> Scandium (Z = 21) does not exhibit variable oxidation states.</p>
      </Expandable>

      <Expandable title="Intext 4.3 — Which 3d metal shows the largest number of oxidation states?" variant="exercise">
        <p>
          Manganese (Z = 25), because its atom has the maximum number of unpaired electrons
          (3d<sup>5</sup> 4s<sup>2</sup>).
        </p>
      </Expandable>

      <h3 id="h-4-3-5">4.3.5 Trends in the M²⁺/M Standard Electrode Potentials</h3>

      <TableCard
        caption="Table 4.4: Thermochemical data (kJ mol⁻¹) for the first row transition elements and E° for M²⁺ → M"
        headers={["Element", "ΔₐH°", "ΔᵢH₁°", "ΔᵢH₂°", "Δ_hydH°(M²⁺)", "E°/V"]}
        rows={[
          { cells: ["Ti", "469", "656", "1309", "−1866", "−1.63"] },
          { cells: ["V", "515", "650", "1414", "−1895", "−1.18"] },
          { cells: ["Cr", "398", "653", "1592", "−1925", "−0.90"] },
          { cells: ["Mn", "279", "717", "1509", "−1862", "−1.18"] },
          { cells: ["Fe", "418", "762", "1561", "−1998", "−0.44"] },
          { cells: ["Co", "427", "758", "1644", "−2079", "−0.28"] },
          { cells: ["Ni", "431", "736", "1752", "−2121", "−0.25"] },
          { cells: ["Cu", "339", "745", "1958", "−2121", "+0.34"] },
          { cells: ["Zn", "130", "906", "1734", "−2059", "−0.76"] },
        ]}
      />

      <ul>
        <li>The general trend is towards less negative E° values across the series, related to the increase in the sum of the first and second ionisation enthalpies.</li>
        <li>E° for Mn, Ni and Zn is more negative than the trend predicts: Mn<sup>2+</sup> (d<sup>5</sup>) and Zn<sup>2+</sup> (d<sup>10</sup>) have extra stability, while Ni<sup>2+</sup> has the most negative enthalpy of hydration.</li>
        <li>Copper has a <strong>positive</strong> E° and so cannot liberate H<sub>2</sub> from acids. Only oxidising acids (nitric acid, hot concentrated sulphuric acid) react with it, and they are reduced.</li>
      </ul>

      <Expandable title="Example 4.4 — Why is Cr²⁺ reducing while Mn³⁺ is oxidising, though both are d⁴?" variant="example">
        <p><strong>Solution:</strong></p>
        <p>
          Cr<sup>2+</sup> is reducing because its configuration changes from d<sup>4</sup> to
          d<sup>3</sup>, the latter having a half-filled t<sub>2g</sub> level.
        </p>
        <p>
          The change from Mn<sup>3+</sup> to Mn<sup>2+</sup> gives the half-filled d<sup>5</sup>
          configuration, which has extra stability — so Mn<sup>3+</sup> readily accepts an electron.
        </p>
      </Expandable>

      <h3 id="h-4-3-6">4.3.6 Trends in the M³⁺/M²⁺ Standard Electrode Potentials</h3>

      <ul>
        <li>The low value for Sc reflects the stability of Sc<sup>3+</sup>, which has a noble gas configuration.</li>
        <li>The highest value for Zn is due to removal of an electron from the stable d<sup>10</sup> configuration of Zn<sup>2+</sup>.</li>
        <li>The high value for Mn shows that Mn<sup>2+</sup> (d<sup>5</sup>) is particularly stable; the low value for Fe shows the extra stability of Fe<sup>3+</sup> (d<sup>5</sup>).</li>
        <li>The low value for V is related to the stability of V<sup>2+</sup> (half-filled t<sub>2g</sub> level).</li>
        <li>Mn<sup>3+</sup> and Co<sup>3+</sup> are the strongest oxidising agents in aqueous solution; Ti<sup>2+</sup>, V<sup>2+</sup> and Cr<sup>2+</sup> are strong reducing agents.</li>
      </ul>

      <Expandable title="Intext 4.4 — Why is E°(Cu²⁺/Cu) positive (+0.34 V)?" variant="exercise">
        <p>
          The high energy needed to transform Cu(s) to Cu<sup>2+</sup>(aq) (high Δ<sub>a</sub>H°,
          and high Δ<sub>i</sub>H₁° + Δ<sub>i</sub>H₂°) is not balanced by its hydration enthalpy.
        </p>
      </Expandable>

      <h3 id="h-4-3-7">4.3.7 Trends in Stability of Higher Oxidation States</h3>

      <p>
        The highest oxidation numbers are achieved in TiX<sub>4</sub>, VF<sub>5</sub> and
        CrF<sub>6</sub>. The +7 state of Mn is not represented in simple halides, but MnO<sub>3</sub>F
        is known; beyond Mn no metal gives a trihalide except FeX<sub>3</sub> and CoF<sub>3</sub>.
      </p>

      <p>
        Fluorine stabilises the highest state through higher lattice energy (CoF<sub>3</sub>) or
        higher bond enthalpy terms (VF<sub>5</sub>, CrF<sub>6</sub>).
      </p>

      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-2 py-1 text-left">Oxidation number</th>
              <th className="px-2 py-1 text-left">Halides of the 3d metals</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1">+6</td><td className="px-2 py-1">CrF₆</td></tr>
            <tr><td className="px-2 py-1">+5</td><td className="px-2 py-1">VF₅, CrF₅</td></tr>
            <tr><td className="px-2 py-1">+4</td><td className="px-2 py-1">TiX₄, VX₄, CrX₄, MnF₄</td></tr>
            <tr><td className="px-2 py-1">+3</td><td className="px-2 py-1">TiX₃, VX₃, CrX₃, MnF₃, FeX₃, CoF₃</td></tr>
            <tr><td className="px-2 py-1">+2</td><td className="px-2 py-1">TiX₂, VX₂, CrX₂, MnX₂, FeX₂, CoX₂, NiX₂, CuX₂, ZnX₂</td></tr>
            <tr><td className="px-2 py-1">+1</td><td className="px-2 py-1">CuX</td></tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs text-muted-foreground">
          Table 4.5: Formulas of halides of 3d metals. X = F→I; X′ = F→Br; X″ = F, Cl; X‴ = Cl→I.
        </p>
      </div>

      <Callout type="warning" title="Cu²⁺ and Cu⁺">
        All Cu<sup>II</sup> halides are known except the iodide, because Cu<sup>2+</sup> oxidises
        I<sup>−</sup> to I<sub>2</sub>. Many copper(I) compounds are unstable in aqueous solution and
        disproportionate.
      </Callout>

      <FormulaBlock
        latex={String.raw`2\text{Cu}^{2+} + 4\text{I}^- \rightarrow \text{Cu}_2\text{I}_2 + \text{I}_2`}
      />
      <FormulaBlock latex={String.raw`2\text{Cu}^+ \rightarrow \text{Cu}^{2+} + \text{Cu}`} />

      <p>
        Cu<sup>2+</sup>(aq) is more stable than Cu<sup>+</sup>(aq) because the much more negative
        Δ<sub>hyd</sub>H° of Cu<sup>2+</sup> more than compensates for the second ionisation enthalpy.
      </p>

      <TableCard
        caption="Table 4.6: Oxides of 3d metals (* mixed oxides)"
        headers={["Oxidation number", "Oxides"]}
        rows={[
          { cells: ["+7", "Mn₂O₇"] },
          { cells: ["+6", "CrO₃"] },
          { cells: ["+5", "V₂O₅"] },
          { cells: ["+4", "TiO₂, V₂O₄, CrO₂, MnO₂"] },
          { cells: ["+3", "Sc₂O₃, Ti₂O₃, V₂O₃, Cr₂O₃, Mn₂O₃, Fe₂O₃, Mn₃O₄*, Fe₃O₄*, Co₃O₄*"] },
          { cells: ["+2", "TiO, VO, (CrO), MnO, FeO, CoO, NiO, CuO, ZnO"] },
          { cells: ["+1", "Cu₂O"] },
        ]}
      />

      <KeyPoint title="Oxygen beats fluorine at stabilising high oxidation states">
        <p>
          The highest oxidation number in oxides coincides with the group number and is attained
          from Sc<sub>2</sub>O<sub>3</sub> to Mn<sub>2</sub>O<sub>7</sub>. Thus the highest Mn
          fluoride is MnF<sub>4</sub> while the highest oxide is Mn<sub>2</sub>O<sub>7</sub>.
          Oxygen wins because it forms <strong>multiple bonds</strong> to metals. Oxocations also
          stabilise high states: VO<sub>2</sub><sup>+</sup> (V<sup>V</sup>),
          VO<sup>2+</sup> (V<sup>IV</sup>), TiO<sup>2+</sup> (Ti<sup>IV</sup>).
        </p>
      </KeyPoint>

      <Expandable title="Example 4.5 — Increasing oxidising power along VO₂⁺ < Cr₂O₇²⁻ < MnO₄⁻" variant="example">
        <p><strong>Solution:</strong> This is due to the increasing stability of the lower species to which they are reduced.</p>
      </Expandable>

      <Expandable title="Intext 4.6 — Why is the highest oxidation state shown only in oxides or fluorides?" variant="exercise">
        <p>
          Because of the small size and high electronegativity of oxygen and fluorine, they can
          oxidise the metal to its highest oxidation state.
        </p>
      </Expandable>

      <h3 id="h-4-3-8">4.3.8 Chemical Reactivity and E° Values</h3>

      <ul>
        <li>Transition metals vary widely in reactivity. Many dissolve in mineral acids, but a few are &lsquo;noble&rsquo; and unaffected by single acids.</li>
        <li>In the first series, all metals except copper are relatively reactive and are oxidised by 1 M H<sup>+</sup>, though the rate may be slow.</li>
        <li>Titanium and vanadium are passive to dilute non-oxidising acids at room temperature.</li>
        <li>E° values for M<sup>2+</sup>/M show a decreasing tendency to form divalent cations across the series.</li>
      </ul>

      <FormulaBlock latex={String.raw`2\text{Cr}^{2+}(\text{aq}) + 2\text{H}^+(\text{aq}) \rightarrow 2\text{Cr}^{3+}(\text{aq}) + \text{H}_2(\text{g})`} />

      <Expandable title="Example 4.6 — Irregular E°(M²⁺/M) values of the first row" variant="example">
        <p>
          <strong>Question:</strong> The values are V −1.18, Cr −0.91, Mn −1.18, Fe −0.44,
          Co −0.28, Ni −0.25, Cu +0.34 V. Explain the irregularity.
        </p>
        <p>
          <strong>Solution:</strong> The E°(M<sup>2+</sup>/M) values are not regular because of the
          irregular variation of ionisation enthalpies (Δ<sub>i</sub>H₁ + Δ<sub>i</sub>H₂) and also
          the sublimation enthalpies, which are relatively much less for manganese and vanadium.
        </p>
      </Expandable>

      <Expandable title="Example 4.7 — Why is E°(Mn³⁺/Mn²⁺) much more positive than Cr³⁺/Cr²⁺ or Fe³⁺/Fe²⁺?" variant="example">
        <p>
          <strong>Solution:</strong> The much larger third ionisation enthalpy of Mn (the change is
          d<sup>5</sup> → d<sup>4</sup>) is mainly responsible. This also explains why the +3 state
          of Mn is of little importance.
        </p>
      </Expandable>

      <Expandable title="Intext 4.7 — Which is a stronger reducing agent, Cr²⁺ or Fe²⁺?" variant="exercise">
        <p>
          Cr<sup>2+</sup> is the stronger reducing agent: it changes from d<sup>4</sup> to d<sup>3</sup>,
          whereas Fe<sup>2+</sup> changes from d<sup>6</sup> to d<sup>5</sup>. In aqueous medium
          d<sup>3</sup> is more stable than d<sup>5</sup> when crystal field stabilisation is considered.
        </p>
      </Expandable>

      <h3 id="h-4-3-9">4.3.9 Magnetic Properties</h3>

      <ul>
        <li><strong>Diamagnetic</strong> substances are repelled by an applied field; <strong>paramagnetic</strong> substances are attracted.</li>
        <li>Substances attracted very strongly are <strong>ferromagnetic</strong> — an extreme form of paramagnetism.</li>
        <li>Paramagnetism arises from unpaired electrons, each with spin and orbital angular momentum.</li>
        <li>For first-series compounds the orbital contribution is effectively quenched, so the <strong>spin-only</strong> formula is used.</li>
      </ul>

      <FormulaBlock latex={String.raw`\mu = \sqrt{n(n+2)}\ \text{BM}`} important label="Spin-only magnetic moment" />

      <p>
        Here n is the number of unpaired electrons and μ is in Bohr magnetons (BM). A single
        unpaired electron gives 1.73 BM.
      </p>

      <TableCard
        caption="Table 4.7: Calculated and Observed Magnetic Moments (BM)"
        headers={["Ion", "Configuration", "Unpaired e⁻", "Calculated", "Observed"]}
        rows={[
          { cells: ["Sc³⁺", "3d⁰", "0", "0", "0"] },
          { cells: ["Ti³⁺", "3d¹", "1", "1.73", "1.75"] },
          { cells: ["Ti²⁺", "3d²", "2", "2.84", "2.76"] },
          { cells: ["V²⁺", "3d³", "3", "3.87", "3.86"] },
          { cells: ["Cr²⁺", "3d⁴", "4", "4.90", "4.80"] },
          { cells: ["Mn²⁺", "3d⁵", "5", "5.92", "5.96"] },
          { cells: ["Fe²⁺", "3d⁶", "4", "4.90", "5.3–5.5"] },
          { cells: ["Co²⁺", "3d⁷", "3", "3.87", "4.4–5.2"] },
          { cells: ["Ni²⁺", "3d⁸", "2", "2.84", "2.9–3.4"] },
          { cells: ["Cu²⁺", "3d⁹", "1", "1.73", "1.8–2.2"] },
          { cells: ["Zn²⁺", "3d¹⁰", "0", "0", "—"] },
        ]}
      />

      <Expandable title="Example 4.8 — Magnetic moment of a divalent ion with Z = 25" variant="example">
        <p>
          <strong>Solution:</strong> Z = 25 is manganese; the divalent ion is Mn<sup>2+</sup> with
          3d<sup>5</sup>, i.e. five unpaired electrons.
        </p>
        <FormulaBlock latex={String.raw`\mu = \sqrt{5(5+2)} = \sqrt{35} = 5.92\ \text{BM}`} />
      </Expandable>

      <Expandable title="Intext 4.8 — Spin-only moment of M²⁺(aq) with Z = 27" variant="exercise">
        <p>
          Z = 27 is cobalt; Co<sup>2+</sup> is 3d<sup>7</sup> with three unpaired electrons, so
          <Formula>{String.raw`\mu = \sqrt{3(3+2)} = 3.87\ \text{BM}`}</Formula>.
        </p>
      </Expandable>

      <h3 id="h-4-3-10">4.3.10 Formation of Coloured Ions</h3>

      <Callout type="note">
        When an electron from a lower energy d orbital is excited to a higher energy d orbital,
        the energy of excitation corresponds to the frequency of light absorbed. This frequency
        generally lies in the visible region, and the colour observed is the
        <strong>complementary colour</strong> of the light absorbed.
      </Callout>

      <TableCard
        caption="Table 4.8: Colours of Some of the First Row (aquated) Transition Metal Ions"
        headers={["Configuration", "Ion", "Colour"]}
        rows={[
          { cells: ["3d⁰", "Sc³⁺", "colourless"] },
          { cells: ["3d⁰", "Ti⁴⁺", "colourless"] },
          { cells: ["3d¹", "Ti³⁺", "purple"] },
          { cells: ["3d¹", "V⁴⁺", "blue"] },
          { cells: ["3d²", "V³⁺", "green"] },
          { cells: ["3d³", "V²⁺", "violet"] },
          { cells: ["3d³", "Cr³⁺", "violet"] },
          { cells: ["3d⁴", "Mn³⁺", "violet"] },
          { cells: ["3d⁴", "Cr²⁺", "blue"] },
          { cells: ["3d⁵", "Mn²⁺", "pink"] },
          { cells: ["3d⁵", "Fe³⁺", "yellow"] },
          { cells: ["3d⁶", "Fe²⁺", "green"] },
          { cells: ["3d⁷", "Co²⁺", "pink"] },
          { cells: ["3d⁸", "Ni²⁺", "green"] },
          { cells: ["3d⁹", "Cu²⁺", "blue"] },
          { cells: ["3d¹⁰", "Zn²⁺", "colourless"] },
        ]}
      />

      <FactCard
        title="Ions with d⁰ or d¹⁰ configurations are colourless"
        definition="Sc³⁺, Ti⁴⁺ and Zn²⁺ have no partially filled d orbitals, so no d–d transition is possible and their aqueous ions are colourless."
        icon="🎨"
      />

      <h3 id="h-4-3-11">4.3.11 Formation of Complex Compounds</h3>

      <p>
        Complex compounds are those in which metal ions bind a number of anions or neutral
        molecules, giving species with characteristic properties — e.g. [Fe(CN)<sub>6</sub>]<sup>3−</sup>,
        [Fe(CN)<sub>6</sub>]<sup>4−</sup>, [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>,
        [PtCl<sub>4</sub>]<sup>2−</sup>.
      </p>

      <KeyPoint title="Why transition metals form many complexes">
        <ul>
          <li>Comparatively <strong>small size</strong> of the metal ions.</li>
          <li><strong>High ionic charges</strong>.</li>
          <li>Availability of <strong>d orbitals</strong> for bond formation.</li>
        </ul>
      </KeyPoint>

      <h3 id="h-4-3-12">4.3.12 Catalytic Properties</h3>

      <ul>
        <li>Catalytic activity is ascribed to the ability to adopt multiple oxidation states and to form complexes.</li>
        <li>Examples: V<sub>2</sub>O<sub>5</sub> in the Contact process, finely divided iron in the Haber process, nickel in catalytic hydrogenation.</li>
        <li>At a solid surface, bonds form between reactant molecules and atoms of the catalyst surface, increasing reactant concentration and weakening bonds in the reacting molecules (lowering activation energy).</li>
      </ul>

      <EquationLadder
        title="Fe³⁺ catalysis of the iodide–persulphate reaction"
        steps={[
          { label: "Overall reaction", equation: String.raw`2\text{I}^- + \text{S}_2\text{O}_8^{2-} \rightarrow \text{I}_2 + 2\text{SO}_4^{2-}` },
          { label: "Step 1 — Fe³⁺ is reduced", equation: String.raw`2\text{Fe}^{3+} + 2\text{I}^- \rightarrow 2\text{Fe}^{2+} + \text{I}_2` },
          { label: "Step 2 — Fe²⁺ is re-oxidised", equation: String.raw`2\text{Fe}^{2+} + \text{S}_2\text{O}_8^{2-} \rightarrow 2\text{Fe}^{3+} + 2\text{SO}_4^{2-}`, final: true },
        ]}
      />

      <h3 id="h-4-3-13">4.3.13 Formation of Interstitial Compounds</h3>

      <Callout type="important">
        <strong>Interstitial compounds</strong> are formed when small atoms like H, C or N are
        trapped inside the crystal lattices of metals. They are usually non-stoichiometric and are
        neither typically ionic nor covalent — e.g. TiC, Mn<sub>4</sub>N, Fe<sub>3</sub>H,
        VH<sub>0.56</sub>, TiH<sub>1.7</sub>.
      </Callout>

      <ul>
        <li>They have high melting points, higher than those of the pure metals.</li>
        <li>They are very hard — some borides approach diamond in hardness.</li>
        <li>They retain metallic conductivity.</li>
        <li>They are chemically inert.</li>
      </ul>

      <h3 id="h-4-3-14">4.3.14 Alloy Formation</h3>

      <p>
        An <strong>alloy</strong> is a blend of metals prepared by mixing the components. Alloys may
        be homogeneous solid solutions in which atoms of one metal are distributed randomly among
        atoms of the other; such alloys form when metallic radii are within about 15 percent of each
        other.
      </p>

      <ul>
        <li>Ferrous alloys: chromium, vanadium, tungsten, molybdenum and manganese are used to make steels and stainless steel.</li>
        <li>Alloys with non-transition metals: brass (copper–zinc) and bronze (copper–tin).</li>
      </ul>

      <h2 id="h-4-4">4.4 Some Important Compounds of Transition Elements</h2>

      <h3 id="h-4-4-1">4.4.1 Oxides and Oxoanions of Metals</h3>

      <ul>
        <li>These oxides are generally formed by reaction of metals with oxygen at high temperatures.</li>
        <li>All metals except scandium form MO oxides, which are ionic.</li>
        <li>As the oxidation number of the metal increases, ionic character decreases — Mn<sub>2</sub>O<sub>7</sub> is a covalent green oil; CrO<sub>3</sub> and V<sub>2</sub>O<sub>5</sub> have low melting points.</li>
        <li>In higher oxides the <strong>acidic</strong> character predominates: Mn<sub>2</sub>O<sub>7</sub> gives HMnO<sub>4</sub>, CrO<sub>3</sub> gives H<sub>2</sub>CrO<sub>4</sub> and H<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>.</li>
        <li>V<sub>2</sub>O<sub>5</sub> is amphoteric (mainly acidic), giving VO<sub>4</sub><sup>3−</sup> as well as VO<sub>2</sub><sup>+</sup> salts.</li>
        <li>In vanadium: basic V<sub>2</sub>O<sub>3</sub> → less basic V<sub>2</sub>O<sub>4</sub> → amphoteric V<sub>2</sub>O<sub>5</sub>.</li>
        <li>CrO is basic, Cr<sub>2</sub>O<sub>3</sub> is amphoteric.</li>
      </ul>

      <h3 id="h-4-4-2">Potassium dichromate, K₂Cr₂O₇</h3>

      <p>
        Potassium dichromate is used in the leather industry and as an oxidant for the preparation
        of many azo compounds. Dichromates are generally prepared from chromate, obtained by fusion
        of chromite ore (FeCr<sub>2</sub>O<sub>4</sub>) with sodium or potassium carbonate in free
        access of air.
      </p>

      <ProcessCard
        title="Preparation of potassium dichromate from chromite ore"
        steps={[
          {
            label: "Fusion of chromite ore with sodium carbonate in air",
            description: "Chromium is oxidised to chromate; iron remains as Fe₂O₃.",
          },
          {
            label: "Filter the yellow sodium chromate solution and acidify with sulphuric acid",
            description: "Orange sodium dichromate, Na₂Cr₂O₇·2H₂O, crystallises out.",
          },
          {
            label: "Treat sodium dichromate solution with potassium chloride",
            description: "Sodium dichromate is more soluble than potassium dichromate, so orange crystals of K₂Cr₂O₇ separate.",
          },
        ]}
      />

      <FormulaBlock latex={String.raw`4\text{FeCr}_2\text{O}_4 + 8\text{Na}_2\text{CO}_3 + 7\text{O}_2 \rightarrow 8\text{Na}_2\text{CrO}_4 + 2\text{Fe}_2\text{O}_3 + 8\text{CO}_2`} />

      <FormulaBlock latex={String.raw`2\text{Na}_2\text{CrO}_4 + 2\text{H}^+ \rightarrow \text{Na}_2\text{Cr}_2\text{O}_7 + 2\text{Na}^+ + \text{H}_2\text{O}`} />

      <FormulaBlock latex={String.raw`\text{Na}_2\text{Cr}_2\text{O}_7 + 2\text{KCl} \rightarrow \text{K}_2\text{Cr}_2\text{O}_7 + 2\text{NaCl}`} />

      <KeyPoint title="Chromate ⇌ dichromate — pH controls the equilibrium">
        <p>
          The oxidation state of chromium is the same (+6) in both ions. In acid, chromate turns
          into dichromate; in alkali, dichromate turns back into chromate.
        </p>
        <FormulaBlock latex={String.raw`2\text{CrO}_4^{2-} + 2\text{H}^+ \rightleftharpoons \text{Cr}_2\text{O}_7^{2-} + \text{H}_2\text{O}`} />
        <FormulaBlock latex={String.raw`\text{Cr}_2\text{O}_7^{2-} + 2\text{OH}^- \rightleftharpoons 2\text{CrO}_4^{2-} + \text{H}_2\text{O}`} />
        <p>
          The chromate ion is tetrahedral; the dichromate ion consists of two tetrahedra sharing one
          corner, with a Cr–O–Cr bond angle of 126°.
        </p>
      </KeyPoint>

      <p>
        Sodium and potassium dichromates are strong oxidising agents. The sodium salt is more
        soluble and is extensively used as an oxidising agent in organic chemistry; potassium
        dichromate is used as a <strong>primary standard</strong> in volumetric analysis.
      </p>

      <FormulaBlock
        latex={String.raw`\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6e^- \rightarrow 2\text{Cr}^{3+} + 7\text{H}_2\text{O}\quad (E^\circ = 1.33\ \text{V})`}
        important
      />

      <p>
        Acidified potassium dichromate therefore oxidises iodides to iodine, sulphides to sulphur,
        tin(II) to tin(IV) and iron(II) salts to iron(III).
      </p>

      <FormulaBlock latex={String.raw`6\text{I}^- \rightarrow 3\text{I}_2 + 6e^-`} />
      <FormulaBlock latex={String.raw`3\text{Sn}^{2+} \rightarrow 3\text{Sn}^{4+} + 6e^-`} />
      <FormulaBlock latex={String.raw`3\text{H}_2\text{S} \rightarrow 6\text{H}^+ + 3\text{S} + 6e^-`} />
      <FormulaBlock latex={String.raw`6\text{Fe}^{2+} \rightarrow 6\text{Fe}^{3+} + 6e^-`} />

      <FormulaBlock
        latex={String.raw`\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6\text{Fe}^{2+} \rightarrow 2\text{Cr}^{3+} + 6\text{Fe}^{3+} + 7\text{H}_2\text{O}`}
        label="Full ionic equation for the iron(II) oxidation"
      />

      <h3 id="h-4-4-3">Potassium permanganate, KMnO₄</h3>

      <p>
        Potassium permanganate is prepared by fusion of MnO<sub>2</sub> with an alkali metal
        hydroxide and an oxidising agent like KNO<sub>3</sub>. This produces dark green
        K<sub>2</sub>MnO<sub>4</sub>, which disproportionates in neutral or acidic solution to give
        permanganate.
      </p>

      <FormulaBlock latex={String.raw`2\text{MnO}_2 + 4\text{KOH} + \text{O}_2 \rightarrow 2\text{K}_2\text{MnO}_4 + 2\text{H}_2\text{O}`} />

      <FormulaBlock latex={String.raw`3\text{MnO}_4^{2-} + 4\text{H}^+ \rightarrow 2\text{MnO}_4^- + \text{MnO}_2 + 2\text{H}_2\text{O}`} />

      <p>
        Commercially it is prepared by alkaline oxidative fusion of MnO<sub>2</sub> followed by
        electrolytic oxidation of manganate(VI).
      </p>

      <Stepper
        steps={[
          {
            label: "Alkaline oxidative fusion",
            description: <>MnO<sub>2</sub> is fused with KOH and oxidised with air or KNO<sub>3</sub> to give the manganate ion, MnO<sub>4</sub><sup>2−</sup>.</>,
          },
          {
            label: "Electrolytic oxidation in alkaline solution",
            description: <>Manganate, MnO<sub>4</sub><sup>2−</sup>, is oxidised to permanganate, MnO<sub>4</sub><sup>−</sup>.</>,
          },
        ]}
      />

      <p>In the laboratory, a manganese(II) salt is oxidised by peroxodisulphate to permanganate.</p>

      <FormulaBlock latex={String.raw`2\text{Mn}^{2+} + 5\text{S}_2\text{O}_8^{2-} + 8\text{H}_2\text{O} \rightarrow 2\text{MnO}_4^- + 10\text{SO}_4^{2-} + 16\text{H}^+`} />

      <ul>
        <li>Dark purple (almost black) crystals, isostructural with KClO<sub>4</sub>.</li>
        <li>Not very soluble in water (6.4 g per 100 g water at 293 K).</li>
        <li>Decomposes on heating at 513 K: 2KMnO<sub>4</sub> → K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub>.</li>
        <li>Intense colour and diamagnetism (with weak temperature-dependent paramagnetism) are explained by molecular orbital theory.</li>
        <li>Manganate and permanganate ions are tetrahedral; π-bonding arises from overlap of oxygen p orbitals with manganese d orbitals.</li>
        <li>Green manganate is paramagnetic (one unpaired electron); permanganate is diamagnetic (no unpaired electron).</li>
      </ul>

      <Comparison
        columns={[
          {
            title: "In acid solution (MnO₄⁻ → Mn²⁺)",
            children: (
              <ul>
                <li>Iodide → iodine</li>
                <li>Fe²⁺ (green) → Fe³⁺ (yellow)</li>
                <li>Oxalate → CO₂ at 333 K</li>
                <li>H₂S → S (precipitated)</li>
                <li>Sulphite → sulphate</li>
                <li>Nitrite → nitrate</li>
              </ul>
            ),
          },
          {
            title: "In neutral or faintly alkaline solution (MnO₄⁻ → MnO₂)",
            children: (
              <ul>
                <li>Iodide → iodate</li>
                <li>Thiosulphate → sulphate (almost quantitative)</li>
                <li>Manganous salt → MnO₂ (catalysed by ZnSO₄ or ZnO)</li>
              </ul>
            ),
          },
        ]}
      />

      <EquationLadder
        title="Important oxidising reactions of acidified KMnO₄"
        steps={[
          { label: "Iodide → iodine", equation: String.raw`10\text{I}^- + 2\text{MnO}_4^- + 16\text{H}^+ \rightarrow 2\text{Mn}^{2+} + 8\text{H}_2\text{O} + 5\text{I}_2` },
          { label: "Iron(II) → iron(III)", equation: String.raw`5\text{Fe}^{2+} + \text{MnO}_4^- + 8\text{H}^+ \rightarrow \text{Mn}^{2+} + 4\text{H}_2\text{O} + 5\text{Fe}^{3+}` },
          { label: "Oxalate → carbon dioxide (333 K)", equation: String.raw`5\text{C}_2\text{O}_4^{2-} + 2\text{MnO}_4^- + 16\text{H}^+ \rightarrow 2\text{Mn}^{2+} + 8\text{H}_2\text{O} + 10\text{CO}_2` },
          { label: "Sulphide → sulphur", equation: String.raw`5\text{S}^{2-} + 2\text{MnO}_4^- + 16\text{H}^+ \rightarrow 2\text{Mn}^{2+} + 8\text{H}_2\text{O} + 5\text{S}` },
          { label: "Sulphite → sulphate", equation: String.raw`5\text{SO}_3^{2-} + 2\text{MnO}_4^- + 6\text{H}^+ \rightarrow 2\text{Mn}^{2+} + 3\text{H}_2\text{O} + 5\text{SO}_4^{2-}` },
          { label: "Nitrite → nitrate", equation: String.raw`5\text{NO}_2^- + 2\text{MnO}_4^- + 6\text{H}^+ \rightarrow 2\text{Mn}^{2+} + 5\text{NO}_3^- + 3\text{H}_2\text{O}` },
        ]}
      />

      <EquationLadder
        title="Oxidising reactions of KMnO₄ in neutral or faintly alkaline solution"
        steps={[
          { label: "Iodide → iodate", equation: String.raw`2\text{MnO}_4^- + \text{H}_2\text{O} + \text{I}^- \rightarrow 2\text{MnO}_2 + 2\text{OH}^- + \text{IO}_3^-` },
          { label: "Thiosulphate → sulphate", equation: String.raw`8\text{MnO}_4^- + 3\text{S}_2\text{O}_3^{2-} + \text{H}_2\text{O} \rightarrow 8\text{MnO}_2 + 6\text{SO}_4^{2-} + 2\text{OH}^-` },
          { label: "Manganese(II) → MnO₂", equation: String.raw`2\text{MnO}_4^- + 3\text{Mn}^{2+} + 2\text{H}_2\text{O} \rightarrow 5\text{MnO}_2 + 4\text{H}^+`, final: true },
        ]}
      />

      <Callout type="warning" title="Permanganate titrations and HCl">
        Permanganate titrations in the presence of hydrochloric acid are unsatisfactory, since
        hydrochloric acid is oxidised to chlorine.
      </Callout>

      <KeyPoint title="Half-reactions of MnO₄⁻ — why pH matters">
        <FormulaBlock latex={String.raw`\text{MnO}_4^- + e^- \rightarrow \text{MnO}_4^{2-}\quad (E^\circ = +0.56\ \text{V})`} />
        <FormulaBlock latex={String.raw`\text{MnO}_4^- + 4\text{H}^+ + 3e^- \rightarrow \text{MnO}_2 + 2\text{H}_2\text{O}\quad (E^\circ = +1.69\ \text{V})`} />
        <FormulaBlock latex={String.raw`\text{MnO}_4^- + 8\text{H}^+ + 5e^- \rightarrow \text{Mn}^{2+} + 4\text{H}_2\text{O}\quad (E^\circ = +1.52\ \text{V})`} />
        <p>
          The hydrogen ion concentration strongly influences the product. At [H<sup>+</sup>] = 1,
          permanganate should oxidise water, but in practice the reaction is extremely slow unless
          manganese(II) ions are present or the temperature is raised.
        </p>
      </KeyPoint>

      <Callout type="note" title="Uses of KMnO₄">
        Besides analytical chemistry, it is a favourite oxidant in preparative organic chemistry, and
        is used for bleaching wool, cotton, silk and other textile fibres and for decolourising oils.
      </Callout>

      <Expandable title="Example 4.9 — What is meant by disproportionation of an oxidation state?" variant="example">
        <p>
          <strong>Solution:</strong> When a particular oxidation state becomes less stable relative
          to other oxidation states — one lower and one higher — it undergoes disproportionation.
          Manganese(VI) is unstable relative to Mn(VII) and Mn(IV) in acidic solution:
        </p>
        <FormulaBlock latex={String.raw`3\text{Mn}^{VI}\text{O}_4^{2-} + 4\text{H}^+ \rightarrow 2\text{Mn}^{VII}\text{O}_4^- + \text{Mn}^{IV}\text{O}_2 + 2\text{H}_2\text{O}`} />
      </Expandable>

      <Expandable title="Intext 4.9 — Why is Cu⁺ not stable in aqueous solution?" variant="exercise">
        <p>
          Cu<sup>+</sup> undergoes disproportionation in aqueous solution:
          <Formula>{String.raw`2\text{Cu}^+(\text{aq}) \rightarrow \text{Cu}^{2+}(\text{aq}) + \text{Cu}(\text{s})`}</Formula>.
          The E° value for this change is favourable.
        </p>
      </Expandable>

      <h2 id="h-4-5">4.5 The Lanthanoids</h2>

      <p>
        The f-block consists of two series — <strong>lanthanoids</strong> (the fourteen elements
        following lanthanum) and <strong>actinoids</strong> (the fourteen elements following
        actinium). Lanthanum closely resembles the lanthanoids and is usually included; the general
        symbol is <strong>Ln</strong>.
      </p>

      <ul>
        <li>The lanthanoids resemble one another more closely than members of an ordinary transition series.</li>
        <li>They have only one stable oxidation state (+3).</li>
        <li>Their chemistry shows the effect of small changes in size and nuclear charge along the series.</li>
      </ul>

      <h3 id="h-4-5-1">4.5.1 Electronic Configurations</h3>

      <p>
        Atoms of these elements have the configuration 6s<sup>2</sup> with variable occupancy of the
        4f level. All tripositive ions (the most stable oxidation state) have configurations of the
        form <Formula>{String.raw`4f^n`}</Formula> (n = 1 to 14 with increasing atomic number).
      </p>

      <ul>
        <li>La: [Xe] 5d<sup>1</sup> 6s<sup>2</sup></li>
        <li>Ce: [Xe] 4f<sup>1</sup> 5d<sup>1</sup> 6s<sup>2</sup></li>
        <li>Gd: [Xe] 4f<sup>7</sup> 5d<sup>1</sup> 6s<sup>2</sup> (half-filled f shell)</li>
        <li>Lu: [Xe] 4f<sup>14</sup> 5d<sup>1</sup> 6s<sup>2</sup> (filled f shell)</li>
      </ul>

      <h3 id="h-4-5-2">4.5.2 Atomic and Ionic Sizes</h3>

      <Callout type="important" title="Lanthanoid contraction">
        The overall decrease in atomic and ionic radii from lanthanum to lutetium is called the
        <strong>lanthanoid contraction</strong>. It is attributed to the imperfect shielding of one
        electron by another in the same sub-shell — the shielding of one 4f electron by another is
        less than that of one d electron by another.
      </Callout>

      <ul>
        <li>The decrease in atomic radii is not quite regular, but it is regular in M<sup>3+</sup> ions.</li>
        <li>Consequence: radii of the third transition series are very similar to the corresponding members of the second series.</li>
        <li>Zr (160 pm) and Hf (159 pm) have almost identical radii, which accounts for their occurrence together in nature and the difficulty of separating them.</li>
      </ul>

      <h3 id="h-4-5-3">4.5.3 Oxidation States</h3>

      <p>
        La(III) and Ln(III) compounds are predominant. Occasionally +2 and +4 ions are obtained in
        solution or solid compounds; this irregularity arises mainly from the extra stability of
        empty, half-filled or filled f subshells.
      </p>

      <TableCard
        headers={["Ion", "f configuration", "Behaviour"]}
        rows={[
          { cells: ["Ce⁴⁺", "4f⁰", "Noble gas configuration; strong oxidant reverting to +3 (E° = +1.74 V) but reaction with water is very slow, so Ce(IV) is a good analytical reagent"] },
          { cells: ["Pr⁴⁺, Nd⁴⁺, Tb⁴⁺, Dy⁴⁺", "—", "Shown only in oxides, MO₂; Tb(IV) has half-filled f orbitals and is an oxidant"] },
          { cells: ["Eu²⁺", "4f⁷", "Half-filled shell; strong reducing agent changing to +3"] },
          { cells: ["Yb²⁺", "4f¹⁴", "Filled shell; reductant"] },
          { cells: ["Sm²⁺ / Sm³⁺", "4f⁶ / 4f⁵", "Behaves like europium, showing both +2 and +3"] },
        ]}
      />

      <Expandable title="Example 4.10 — A lanthanoid that shows +4 oxidation state" variant="example">
        <p><strong>Solution:</strong> Cerium (Z = 58).</p>
      </Expandable>

      <h3 id="h-4-5-4">4.5.4 General Characteristics</h3>

      <ul>
        <li>All lanthanoids are silvery white soft metals that tarnish rapidly in air.</li>
        <li>Hardness increases with atomic number; samarium is steel hard.</li>
        <li>Melting points range between 1000 and 1200 K, but samarium melts at 1623 K.</li>
        <li>Typical metallic structure; good conductors of heat and electricity.</li>
        <li>Density and other properties change smoothly, except for Eu and Yb and occasionally Sm and Tm.</li>
        <li>Many trivalent ions are coloured in the solid state and in solution, due to f electrons; La<sup>3+</sup> and Lu<sup>3+</sup> are colourless. Absorption bands are narrow.</li>
        <li>Ions other than f<sup>0</sup> (La<sup>3+</sup>, Ce<sup>4+</sup>) and f<sup>14</sup> (Yb<sup>2+</sup>, Lu<sup>3+</sup>) are paramagnetic.</li>
        <li>First ionisation enthalpies are around 600 kJ mol<sup>−1</sup>, second about 1200 kJ mol<sup>−1</sup> — comparable with calcium.</li>
        <li>The abnormally low third ionisation enthalpy of La, Gd and Lu indicates the stability of empty, half-filled and completely filled f orbitals.</li>
      </ul>

      <p>
        In chemical behaviour the earlier members are quite reactive, similar to calcium; with
        increasing atomic number they behave more like aluminium. E° for
        Ln<sup>3+</sup>(aq) + 3e<sup>−</sup> → Ln(s) lies between −2.2 and −2.4 V (Eu: −2.0 V).
      </p>

      <ProcessCard
        title="Chemical reactions of the lanthanoids"
        steps={[
          { label: "With carbon at high temperature", description: "Carbides Ln₃C, Ln₂C₃ and LnC₂ are formed." },
          { label: "With nitrogen", description: "Nitrides are formed when heated with N₂." },
          { label: "Burns in oxygen", description: "Oxides Ln₂O₃ are formed." },
          { label: "With hydrogen on gentle heating", description: "Hydrides are formed." },
          { label: "With dilute acids", description: "Hydrogen is liberated." },
          { label: "With sulphur on heating", description: "Sulphides Ln₂S₃ are formed." },
          { label: "With halogens", description: "Halides LnX₃ are formed." },
        ]}
      />

      <p>
        They also form hydroxides Ln(OH)<sub>3</sub>, which are definite compounds (not hydrated
        oxides) and are basic like alkaline earth hydroxides.
      </p>

      <KeyPoint title="Uses of lanthanoids">
        <ul>
          <li>Best single use: production of alloy steels for plates and pipes.</li>
          <li><strong>Mischmetall</strong> — lanthanoid metal (~95%) with iron (~5%) and traces of S, C, Ca and Al — used in Mg-based alloys for bullets, shells and lighter flint.</li>
          <li>Mixed oxides are used as catalysts in petroleum cracking.</li>
          <li>Some individual Ln oxides are used as phosphors in television screens.</li>
        </ul>
      </KeyPoint>

      <h2 id="h-4-6">4.6 The Actinoids</h2>

      <p>
        The actinoids include the fourteen elements from Th to Lr. They are radioactive; the earlier
        members have relatively long half-lives, while the later ones range down to about 3 minutes
        for lawrencium (Z = 103). The later members can be prepared only in nanogram quantities,
        which makes their study difficult.
      </p>

      <h3 id="h-4-6-1">4.6.1 Electronic Configurations</h3>

      <ul>
        <li>All actinoids are believed to have 7s<sup>2</sup> with variable occupancy of 5f and 6d subshells.</li>
        <li>Fourteen electrons are formally added to 5f, though not in thorium; from Pa onwards the 5f orbitals are complete at element 103.</li>
        <li>Irregularities are related to the stability of f<sup>0</sup>, f<sup>7</sup> and f<sup>14</sup> occupancies — e.g. Am [Rn] 5f<sup>7</sup> 7s<sup>2</sup> and Cm [Rn] 5f<sup>7</sup> 6d<sup>1</sup> 7s<sup>2</sup>.</li>
        <li>5f orbitals are not as buried as 4f orbitals, so 5f electrons can participate in bonding to a far greater extent.</li>
      </ul>

      <h3 id="h-4-6-2">4.6.2 Ionic Sizes</h3>

      <p>
        There is a gradual decrease in the size of atoms or M<sup>3+</sup> ions across the series —
        the <strong>actinoid contraction</strong>. It is greater from element to element than the
        lanthanoid contraction because of poor shielding by 5f electrons.
      </p>

      <h3 id="h-4-6-3">4.6.3 Oxidation States</h3>

      <TableCard
        caption="Table 4.11: Oxidation States of Actinium and Actinoids"
        headers={["Element", "Oxidation states"]}
        rows={[
          { cells: ["Ac", "+3"] },
          { cells: ["Th", "+3, +4"] },
          { cells: ["Pa", "+3, +4, +5"] },
          { cells: ["U", "+3, +4, +5, +6"] },
          { cells: ["Np", "+3, +4, +5, +6, +7"] },
          { cells: ["Pu", "+3, +4, +5, +6, +7"] },
          { cells: ["Am", "+3, +4, +5, +6"] },
          { cells: ["Cm", "+3, +4, +5, +6"] },
          { cells: ["Bk", "+3, +4"] },
          { cells: ["Cf", "+3, +4"] },
          { cells: ["Es, Fm, Md, No, Lr", "+3 (+2 for Md, No)"] },
        ]}
      />

      <ul>
        <li>The actinoids show +3 in general; elements in the first half frequently show higher states.</li>
        <li>The maximum oxidation state increases from +4 in Th to +5, +6 and +7 in Pa, U and Np, then decreases.</li>
        <li>More compounds are known in the +3 than the +4 state, as with the lanthanoids; +3 and +4 ions tend to hydrolyse.</li>
        <li>Because the distribution of oxidation states is so uneven, their chemistry is not easily reviewed in terms of oxidation states.</li>
      </ul>

      <h3 id="h-4-6-4">4.6.4 General Characteristics and Comparison with Lanthanoids</h3>

      <ul>
        <li>Actinoid metals are silvery in appearance but show a variety of structures, because irregularities in metallic radii are far greater than in the lanthanoids.</li>
        <li>They are highly reactive, especially when finely divided. Boiling water gives a mixture of oxide and hydride; combination with most non-metals occurs at moderate temperatures.</li>
        <li>Hydrochloric acid attacks all metals; most are only slightly affected by nitric acid because of protective oxide layers; alkalies have no action.</li>
        <li>Magnetic properties are more complex than those of the lanthanoids; susceptibility varies roughly parallel to the lanthanoids but with lower values.</li>
        <li>Ionisation enthalpies of the early actinoids are lower than those of the early lanthanoids — 5f electrons are more effectively shielded from the nuclear charge than 4f electrons.</li>
        <li>Behaviour similar to the lanthanoids becomes evident only in the second half of the actinoid series.</li>
      </ul>

      <Callout type="note">
        Both contractions affect the sizes and properties of the elements succeeding them in their
        periods. The lanthanoid contraction is more important because the chemistry of elements
        succeeding the actinoids is much less known.
      </Callout>

      <Expandable title="Intext 4.10 — Why is actinoid contraction greater than lanthanoid contraction?" variant="exercise">
        <p>
          The 5f electrons provide poor shielding from the nuclear charge, so the effective nuclear
          charge rises more sharply from element to element than in the 4f series.
        </p>
      </Expandable>

      <h2 id="h-4-7">4.7 Some Applications of d- and f-Block Elements</h2>

      <ul>
        <li>Iron and steels are the most important construction materials; production is based on reduction of iron oxides, removal of impurities and addition of carbon and alloying metals such as Cr, Mn and Ni.</li>
        <li>TiO<sub>2</sub> is used in the pigment industry; MnO<sub>2</sub> in dry battery cells; the battery industry also needs Zn and Ni/Cd.</li>
        <li>Group 11 elements are the coinage metals; UK &lsquo;copper&rsquo; coins are copper-coated steel and &lsquo;silver&rsquo; coins are a Cu/Ni alloy.</li>
        <li>V<sub>2</sub>O<sub>5</sub> catalyses oxidation of SO<sub>2</sub> in sulphuric acid manufacture.</li>
        <li>TiCl<sub>4</sub> with Al(CH<sub>3</sub>)<sub>3</sub> forms the Ziegler catalyst used to make polyethylene.</li>
        <li>Iron catalysts are used in the Haber process; nickel catalysts enable hydrogenation of fats.</li>
        <li>In the Wacker process, oxidation of ethyne to ethanal is catalysed by PdCl<sub>2</sub>.</li>
        <li>Nickel complexes are useful in the polymerisation of alkynes and other organic compounds such as benzene.</li>
        <li>The photographic industry relies on the light-sensitive properties of AgBr.</li>
      </ul>

      <MistakeCard
        mistake="Calling Zn, Cd and Hg transition metals because they sit in the d-block."
        correction="The d-block contains them, but IUPAC defines transition metals by an incomplete d subshell. Their d¹⁰ configuration makes them non-transition elements."
        example="Zn²⁺ is d¹⁰, colourless and diamagnetic — no d–d transitions, no variable oxidation states."
      />

      <h2 id="h-4-exercises">Exercises</h2>

      <ExerciseQa
        answersHeading="NCERT Exercise Questions (4.1–4.38)"
        questions={[
          <>Write down the electronic configuration of: (i) Cr<sup>3+</sup> (ii) Pm<sup>3+</sup> (iii) Cu<sup>+</sup> (iv) Ce<sup>4+</sup> (v) Co<sup>2+</sup> (vi) Lu<sup>2+</sup> (vii) Mn<sup>2+</sup> (viii) Th<sup>4+</sup></>,
          <>Why are Mn<sup>2+</sup> compounds more stable than Fe<sup>2+</sup> towards oxidation to their +3 state?</>,
          <>Explain briefly how +2 state becomes more and more stable in the first half of the first row transition elements with increasing atomic number?</>,
          <>To what extent do the electronic configurations decide the stability of oxidation states in the first series of the transition elements? Illustrate your answer with examples.</>,
          <>What may be the stable oxidation state of the transition element with the following d electron configurations in the ground state of their atoms: 3d<sup>3</sup>, 3d<sup>5</sup>, 3d<sup>8</sup> and 3d<sup>4</sup>?</>,
          <>Name the oxometal anions of the first series of the transition metals in which the metal exhibits the oxidation state equal to its group number.</>,
          <>What is lanthanoid contraction? What are the consequences of lanthanoid contraction?</>,
          <>What are the characteristics of the transition elements and why are they called transition elements? Which of the d-block elements may not be regarded as the transition elements?</>,
          <>In what way is the electronic configuration of the transition elements different from that of the non transition elements?</>,
          <>What are the different oxidation states exhibited by the lanthanoids?</>,
          <>Explain giving reasons: (i) Transition metals and many of their compounds show paramagnetic behaviour. (ii) The enthalpies of atomisation of the transition metals are high. (iii) The transition metals generally form coloured compounds. (iv) Transition metals and their many compounds act as good catalyst.</>,
          <>What are interstitial compounds? Why are such compounds well known for transition metals?</>,
          <>How is the variability in oxidation states of transition metals different from that of the non transition metals? Illustrate with examples.</>,
          <>Describe the preparation of potassium dichromate from iron chromite ore. What is the effect of increasing pH on a solution of potassium dichromate?</>,
          <>Describe the oxidising action of potassium dichromate and write the ionic equations for its reaction with: (i) iodide (ii) iron(II) solution and (iii) H<sub>2</sub>S.</>,
          <>Describe the preparation of potassium permanganate. How does the acidified permanganate solution react with (i) iron(II) ions (ii) SO<sub>2</sub> and (iii) oxalic acid? Write the ionic equations for the reactions.</>,
          <>For M<sup>2+</sup>/M and M<sup>3+</sup>/M<sup>2+</sup> systems the E° values for some metals are: Cr<sup>2+</sup>/Cr −0.9 V, Cr<sup>3+</sup>/Cr<sup>2+</sup> −0.4 V, Mn<sup>2+</sup>/Mn −1.2 V, Mn<sup>3+</sup>/Mn<sup>2+</sup> +1.5 V, Fe<sup>2+</sup>/Fe −0.4 V, Fe<sup>3+</sup>/Fe<sup>2+</sup> +0.8 V. Use this data to comment upon: (i) the stability of Fe<sup>3+</sup> in acid solution as compared to that of Cr<sup>3+</sup> or Mn<sup>3+</sup> and (ii) the ease with which iron can be oxidised as compared to a similar process for either chromium or manganese metal.</>,
          <>Predict which of the following will be coloured in aqueous solution: Ti<sup>3+</sup>, V<sup>3+</sup>, Cu<sup>+</sup>, Sc<sup>3+</sup>, Mn<sup>2+</sup>, Fe<sup>3+</sup> and Co<sup>2+</sup>. Give reasons for each.</>,
          <>Compare the stability of +2 oxidation state for the elements of the first transition series.</>,
          <>Compare the chemistry of actinoids with that of the lanthanoids with special reference to: (i) electronic configuration (ii) atomic and ionic sizes (iii) oxidation state (iv) chemical reactivity.</>,
          <>How would you account for the following: (i) Of the d<sup>4</sup> species, Cr<sup>2+</sup> is strongly reducing while manganese(III) is strongly oxidising. (ii) Cobalt(II) is stable in aqueous solution but in the presence of complexing reagents it is easily oxidised. (iii) The d<sup>1</sup> configuration is very unstable in ions.</>,
          <>What is meant by &lsquo;disproportionation&rsquo;? Give two examples of disproportionation reaction in aqueous solution.</>,
          <>Which metal in the first series of transition metals exhibits +1 oxidation state most frequently and why?</>,
          <>Calculate the number of unpaired electrons in the following gaseous ions: Mn<sup>3+</sup>, Cr<sup>3+</sup>, V<sup>3+</sup> and Ti<sup>3+</sup>. Which one of these is the most stable in aqueous solution?</>,
          <>Give examples and suggest reasons for the following features of the transition metal chemistry: (i) The lowest oxide of transition metal is basic, the highest is amphoteric/acidic. (ii) A transition metal exhibits highest oxidation state in oxides and fluorides. (iii) The highest oxidation state is exhibited in oxoanions of a metal.</>,
          <>Indicate the steps in the preparation of: (i) K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> from chromite ore (ii) KMnO<sub>4</sub> from pyrolusite ore.</>,
          <>What are alloys? Name an important alloy which contains some of the lanthanoid metals. Mention its uses.</>,
          <>What are inner transition elements? Decide which of the following atomic numbers are the atomic numbers of the inner transition elements: 29, 59, 74, 95, 102, 104.</>,
          <>The chemistry of the actinoid elements is not so smooth as that of the lanthanoids. Justify this statement by giving some examples from the oxidation state of these elements.</>,
          <>Which is the last element in the series of the actinoids? Write the electronic configuration of this element. Comment on the possible oxidation state of this element.</>,
          <>Use Hund&apos;s rule to derive the electronic configuration of Ce<sup>3+</sup> ion, and calculate its magnetic moment on the basis of &lsquo;spin-only&rsquo; formula.</>,
          <>Name the members of the lanthanoid series which exhibit +4 oxidation states and those which exhibit +2 oxidation states. Try to correlate this type of behaviour with the electronic configurations of these elements.</>,
          <>Compare the chemistry of the actinoids with that of lanthanoids with reference to: (i) electronic configuration (ii) oxidation states and (iii) chemical reactivity.</>,
          <>Write the electronic configurations of the elements with the atomic numbers 61, 91, 101, and 109.</>,
          <>Compare the general characteristics of the first series of the transition metals with those of the second and third series metals in the respective vertical columns. Give special emphasis on the following points: (i) electronic configurations (ii) oxidation states (iii) ionisation enthalpies and (iv) atomic sizes.</>,
          <>Write down the number of 3d electrons in each of the following ions: Ti<sup>2+</sup>, V<sup>2+</sup>, Cr<sup>3+</sup>, Mn<sup>2+</sup>, Fe<sup>2+</sup>, Fe<sup>3+</sup>, Co<sup>2+</sup>, Ni<sup>2+</sup> and Cu<sup>2+</sup>. Indicate how would you expect the five 3d orbitals to be occupied for these hydrated ions (octahedral).</>,
          <>Comment on the statement that elements of the first transition series possess many properties different from those of heavier transition elements.</>,
          <>What can be inferred from the magnetic moment values of the following complex species? K<sub>4</sub>[Mn(CN)<sub>6</sub>] 2.2 BM, [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> 5.3 BM, K<sub>2</sub>[MnCl<sub>4</sub>] 5.9 BM.</>,
        ]}
      />
    </>
  );
}
