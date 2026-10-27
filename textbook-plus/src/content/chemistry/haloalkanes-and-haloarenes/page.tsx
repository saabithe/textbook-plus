import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { MoleculeStructure } from "@/components/content/chemistry/MoleculeStructure";
import { STRUCTURES } from "./structures.generated";

export default function HaloalkanesAndHaloarenesChapter() {
  return (
    <>
      <h2 id="h-6-1">6.1 Classification</h2>

      <p>
        Haloalkanes and haloarenes are classified as mono-, di- or polyhalogen compounds according to
        how many halogen atoms they contain. The mono- / di- / poly- distinction and typical examples
        are summarised below.
      </p>

      <h3 id="h-6-1-1">6.1.1 On the Basis of Number of Halogen Atoms</h3>

      <TableCard
        caption="Mono-, di- and polyhalogen compounds"
        headers={["Halogen atoms", "Class", "Examples"]}
        rows={[
          { cells: ["One", "Monohalogen", "CH₃Cl, CH₃CH₂Br, C₆H₅Cl"] },
          { cells: ["Two", "Dihalogen", "CH₂Cl₂, CH₂BrCH₂Br, C₆H₄Cl₂"] },
          { cells: ["Three or more", "Polyhalogen", "CHCl₃, CCl₄, CHI₃"] },
        ]}
      />

      <h3 id="h-6-1-2">6.1.2 Compounds Containing sp³ C—X Bond (X = F, Cl, Br, I)</h3>

      <p>
        <strong>(a) Alkyl halides or haloalkanes (R—X).</strong> The halogen is bonded to an alkyl group
        (R).
      </p>
      <p>
        They form a homologous series <Formula>{String.raw`\text{C}_n\text{H}_{2n+1}\text{X}`}</Formula> and
        are classed as primary, secondary or tertiary by the carbon bearing the halogen.
      </p>

      <TableCard
        caption="Types of alkyl halides"
        headers={["Type", "Halogen sits on", "Example"]}
        rows={[
          { cells: ["Primary (1°)", "A primary carbon (attached to one other carbon)", "CH₃CH₂CH₂Cl"] },
          { cells: ["Secondary (2°)", "A secondary carbon (attached to two other carbons)", "CH₃CH(Cl)CH₃"] },
          { cells: ["Tertiary (3°)", "A tertiary carbon (attached to three other carbons)", "(CH₃)₃CCl"] },
        ]}
      />

      <p>
        <strong>(b) Allylic halides:</strong> halogen on an <em>sp</em>
        <sup>3</sup>-hybridised carbon adjacent to a C=C bond (an allylic carbon); example CH₂=CH—CH₂Br
        (allyl bromide).
      </p>

      <p>
        <strong>(c) Benzylic halides:</strong> halogen on an <em>sp</em>
        <sup>3</sup>-hybridised carbon attached to an aromatic ring; example C₆H₅CH₂Cl (benzyl
        chloride).
      </p>

      <h3 id="h-6-1-3">6.1.3 Compounds Containing sp² C—X Bond</h3>

      <p>
        <strong>(a) Vinylic halides:</strong> halogen on an <em>sp</em>
        <sup>2</sup>-hybridised carbon of a C=C bond; example CH₂=CHCl (vinyl chloride).
      </p>

      <p>
        <strong>(b) Aryl halides:</strong> halogen bonded directly to an <em>sp</em>
        <sup>2</sup>-hybridised carbon of an aromatic ring; example C₆H₅Cl (chlorobenzene).
      </p>

      <KeyPoint title="Alkyl vs aryl — the sp³ / sp² divide decides the chemistry">
        <p>
          The hybridisation of the carbon holding the halogen decides how easily the C—X bond breaks.
          An <em>sp</em>
          <sup>3</sup> carbon gives up its halogen readily (nucleophilic substitution); an <em>sp</em>
          <sup>2</sup> carbon holds it tightly, so haloarenes and vinylic halides are far less reactive.
        </p>
      </KeyPoint>

      <h2 id="h-6-2">6.2 Nomenclature</h2>

      <p>
        Common names of alkyl halides are derived by naming the alkyl group followed by the name of the
        halide. In the IUPAC system, alkyl halides are named as <strong>halosubstituted hydrocarbons</strong>.
        For monohalogen derivatives of benzene the common and IUPAC names are the same; for dihalogen
        derivatives the prefixes <em>o</em>-, <em>m</em>-, <em>p</em>- are used in the common system,
        while 1,2; 1,3 and 1,4 are used in the IUPAC system.
      </p>

      <p>
        Dihaloalkanes having the same type of halogen atoms are named as <strong>alkylidene</strong> or{" "}
        <strong>alkylene dihalides</strong>. When both halogens are on the same carbon the compound is a{" "}
        <strong>geminal (gem-) dihalide</strong>; when they are on adjacent carbons it is a{" "}
        <strong>vicinal (vic-) dihalide</strong>. In the IUPAC system both are simply dihaloalkanes.
      </p>

      <TableCard
        caption="Table 6.1: Common and IUPAC Names of some Halides"
        headers={["Structure", "Common name", "IUPAC name"]}
        rows={[
          { cells: ["CH₃CH₂CH(Cl)CH₃", "sec-Butyl chloride", "2-Chlorobutane"] },
          { cells: ["(CH₃)₃CCH₂Br", "neo-Pentyl bromide", "1-Bromo-2,2-dimethylpropane"] },
          { cells: ["(CH₃)₃CBr", "tert-Butyl bromide", "2-Bromo-2-methylpropane"] },
          { cells: ["CH₂=CHCl", "Vinyl chloride", "Chloroethene"] },
          { cells: ["CH₂=CHCH₂Br", "Allyl bromide", "3-Bromopropene"] },
          { cells: ["CH₂Cl₂", "Methylene chloride", "Dichloromethane"] },
          { cells: ["CHCl₃", "Chloroform", "Trichloromethane"] },
          { cells: ["CHBr₃", "Bromoform", "Tribromomethane"] },
          { cells: ["CCl₄", "Carbon tetrachloride", "Tetrachloromethane"] },
          { cells: ["CH₃CH₂CH₂F", "n-Propyl fluoride", "1-Fluoropropane"] },
          { cells: ["o-ClC₆H₄CH₃", "o-Chlorotoluene", "1-Chloro-2-methylbenzene (or 2-chlorotoluene)"] },
          { cells: ["C₆H₅CH₂Cl", "Benzyl chloride", "Chlorophenylmethane"] },
        ]}
      />

      <Expandable
        title="Example 6.1 — All eight structural isomers of C₅H₁₁Br, named and classified"
        variant="example"
      >
        <p>
          Draw the structures of all the eight structural isomers that have the molecular formula
          C<sub>5</sub>H<sub>11</sub>Br. Name each isomer according to the IUPAC system and classify
          them as primary, secondary or tertiary bromide.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <TableCard
          caption="Eight structural isomers of C₅H₁₁Br"
          headers={["Structure", "IUPAC name", "Class"]}
          rows={[
            { cells: ["CH₃CH₂CH₂CH₂CH₂Br", "1-Bromopentane", "1°"] },
            { cells: ["CH₃CH₂CH₂CH(Br)CH₃", "2-Bromopentane", "2°"] },
            { cells: ["CH₃CH₂CH(Br)CH₂CH₃", "3-Bromopentane", "2°"] },
            { cells: ["(CH₃)₂CHCH₂CH₂Br", "1-Bromo-3-methylbutane", "1°"] },
            { cells: ["(CH₃)₂CHCH(Br)CH₃", "2-Bromo-3-methylbutane", "2°"] },
            { cells: ["(CH₃)₂C(Br)CH₂CH₃", "2-Bromo-2-methylbutane", "3°"] },
            { cells: ["CH₃CH₂CH(CH₃)CH₂Br", "1-Bromo-2-methylbutane", "1°"] },
            { cells: ["(CH₃)₃CCH₂Br", "1-Bromo-2,2-dimethylpropane", "1°"] },
          ]}
        />
      </Expandable>

      <Expandable
        title="Example 6.2 — Draw the structures from the IUPAC names"
        variant="example"
      >
        <p>
          Write the structures of the following compounds: (i) 4-bromopent-2-ene
          (ii) 3-bromo-2-methylbut-1-ene (iii) 4-bromo-3-methylpent-2-ene
          (iv) 1-bromo-2-methylbut-2-ene (v) 1-bromobut-2-ene (vi) 3-bromo-2-methylpropene.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <TableCard
          caption="Name → structure"
          headers={["Name", "Structure"]}
          rows={[
            { cells: ["4-Bromopent-2-ene", "CH₃CH=CHCH(Br)CH₃"] },
            { cells: ["3-Bromo-2-methylbut-1-ene", "CH₂=C(CH₃)CH(Br)CH₃"] },
            { cells: ["4-Bromo-3-methylpent-2-ene", "CH₃CH=C(CH₃)CH(Br)CH₃"] },
            { cells: ["1-Bromo-2-methylbut-2-ene", "BrCH₂C(CH₃)=CHCH₃"] },
            { cells: ["1-Bromobut-2-ene", "BrCH₂CH=CHCH₃"] },
            { cells: ["3-Bromo-2-methylpropene", "CH₂=C(CH₃)CH₂Br"] },
          ]}
        />
        <p className="mt-3">
          Number the chain from the end that gives the double bond the lower locant, then the halogen
          the lower locant consistent with that choice.
        </p>
      </Expandable>

      <Expandable title="Intext 6.1 — Write structures from the given names" variant="exercise">
        <p>
          (i) 2-Chloro-3-methylpentane (ii) 1-Chloro-4-ethylcyclohexane
          (iii) 4-<em>tert</em>-butyl-3-iodoheptane (iv) 1,4-Dibromobut-2-ene
          (v) 1-Bromo-4-<em>sec</em>-butyl-2-methylbenzene.
        </p>
        <TableCard
          caption="Structures of the five named compounds"
          headers={["Name", "Structure"]}
          rows={[
            { cells: ["2-Chloro-3-methylpentane", "CH₃CH₂CH(CH₃)CH(Cl)CH₃"] },
            { cells: ["1-Chloro-4-ethylcyclohexane", "Cl—C₁ of cyclohexane, C₂H₄CH₃ at C₄ of the ring"] },
            { cells: ["4-tert-Butyl-3-iodoheptane", "CH₃CH₂CH₂CH(C(CH₃)₃)CH(I)CH₂CH₃"] },
            { cells: ["1,4-Dibromobut-2-ene", "BrCH₂CH=CHCH₂Br"] },
            { cells: ["1-Bromo-4-sec-butyl-2-methylbenzene", "Br at C1, CH₃ at C2, CH(CH₃)CH₂CH₃ at C4 of benzene"] },
          ]}
        />
      </Expandable>

      <h2 id="h-6-3">6.3 Nature of C—X Bond</h2>

      <p>
        Halogen atoms are more electronegative than carbon, so the carbon–halogen bond of an alkyl
        halide is <strong>polarised</strong>: the carbon bears a partial positive charge (δ+) and the
        halogen a partial negative charge (δ−). This is why the carbon is attacked by nucleophiles and
        the halogen leaves as a halide ion.
      </p>

      <p>
        Going down the group the halogen atom gets larger — fluorine is the smallest, iodine the
        largest — so the C—X bond length increases from C—F to C—I.
      </p>

      <TableCard
        caption="Table 6.2: Carbon-Halogen (C—X) Bond Lengths, Bond Enthalpies and Dipole Moments"
        headers={["Bond", "Bond length / pm", "Bond enthalpy / kJ mol⁻¹", "Dipole moment / Debye"]}
        rows={[
          { cells: ["CH₃—F", "139", "452", "1.847"] },
          { cells: ["CH₃—Cl", "178", "351", "1.860"] },
          { cells: ["CH₃—Br", "193", "293", "1.830"] },
          { cells: ["CH₃—I", "214", "234", "1.636"] },
        ]}
      />

      <KeyPoint title="Bond strength, not polarity, decides leaving ability">
        <p>
          Bond enthalpy falls steeply from C—F to C—I while the bond gets longer, so the order of ease
          of breaking the bond — and hence of reactivity in substitution — is:
        </p>
        <FormulaBlock latex={String.raw`\text{R–I} > \text{R–Br} > \text{R–Cl} > \text{R–F}`} important />
      </KeyPoint>

      <h2 id="h-6-4">6.4 Methods of Preparation of Haloalkanes</h2>

      <h3 id="h-6-4-1">6.4.1 From Alcohols</h3>

      <p>
        Alkyl halides are best prepared from alcohols, which are easily accessible. The hydroxyl group
        of an alcohol is replaced by halogen on reaction with concentrated halogen acids, phosphorus
        halides or thionyl chloride.
      </p>

      <FormulaBlock latex={String.raw`\text{R–OH} + \text{HX} \rightarrow \text{R–X} + \text{H}_2\text{O}`} />

      <p>
        The preparation of an alkyl chloride is carried out either by passing dry hydrogen chloride gas
        through a solution of the alcohol, or by heating a mixture of the alcohol and concentrated
        aqueous halogen acid. Reactions of primary and secondary alcohols with HCl need a catalyst,{" "}
        <strong>ZnCl<sub>2</sub></strong>; tertiary alcohols react simply on shaking with concentrated
        HCl at room temperature. Constant boiling HBr (48%) is used for alkyl bromides, and good yields
        of R—I are obtained by heating the alcohol with sodium or potassium iodide in 95%{" "}
        <em>ortho</em>phosphoric acid. The order of reactivity of alcohols with a given haloacid is{" "}
        <strong>3° &gt; 2° &gt; 1°</strong>.
      </p>

      <FormulaBlock latex={String.raw`3\text{R–OH} + \text{PX}_3 \rightarrow 3\text{R–X} + \text{H}_3\text{PO}_3`} />

      <p>
        Phosphorus tribromide and triiodide are usually generated <em>in situ</em> by the reaction of
        red phosphorus with bromine and iodine respectively.
      </p>

      <Callout type="important" title="Why thionyl chloride is preferred">
        <p>
          Thionyl chloride is the reagent of choice because the alkyl halide is formed along with
          gases SO<sub>2</sub> and HCl. Both gaseous products escape, so the reaction gives{" "}
          <strong>pure alkyl halides</strong>.
        </p>
        <FormulaBlock latex={String.raw`\text{R–OH} + \text{SOCl}_2 \rightarrow \text{R–Cl} + \text{SO}_2\uparrow + \text{HCl}\uparrow`} />
      </Callout>

      <Callout type="note">
        These methods are <strong>not</strong> applicable to aryl halides: the carbon–oxygen bond in
        phenols has partial double bond character and is stronger than a single bond, so it is
        difficult to break.
      </Callout>

      <h3 id="h-6-4-2">6.4.2 From Hydrocarbons</h3>

      <p>
        <strong>(I) From alkanes by free radical halogenation.</strong> Free radical chlorination or
        bromination of alkanes gives a complex mixture of isomeric mono- and polyhaloalkanes which is
        difficult to separate as pure compounds. Consequently the yield of any single compound is low.
      </p>

      <FormulaBlock latex={String.raw`\text{CH}_4 + \text{Cl}_2 \xrightarrow{h\nu} \text{CH}_3\text{Cl} + \text{HCl}`} />

      <Expandable
        title="Example 6.3 — Monochloro products of (CH₃)₂CHCH₂CH₃"
        variant="example"
      >
        <p>
          Identify all the possible monochloro structural isomers expected to be formed on free radical
          monochlorination of (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>CH<sub>3</sub>.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          The molecule has four different types of hydrogen atoms. Replacing each type gives one
          product, so four isomeric monochloro compounds are formed:
        </p>
        <TableCard
          caption="Four monochloro products"
          headers={["Hydrogen replaced", "Product"]}
          rows={[
            { cells: ["On the two equivalent CH₃ groups of the isopropyl end", "(CH₃)₂CHCH₂CH₂Cl"] },
            { cells: ["On the CH₂ group", "(CH₃)₂CHCH(Cl)CH₃"] },
            { cells: ["On the CH group", "(CH₃)₂C(Cl)CH₂CH₃"] },
            { cells: ["On the terminal CH₃ of the ethyl end", "CH₃CH(CH₂Cl)CH₂CH₃"] },
          ]}
        />
      </Expandable>

      <p>
        <strong>(II) From alkenes.</strong> An alkene is converted to the corresponding alkyl halide by
        reaction with HCl, HBr or HI. Propene yields two products, but only one predominates according
        to <strong>Markovnikov&apos;s rule</strong> — the halogen goes to the carbon carrying fewer
        hydrogens.
      </p>

      <FormulaBlock latex={String.raw`\text{CH}_3\text{CH=CH}_2 + \text{HBr} \rightarrow \text{CH}_3\text{CH(Br)CH}_3 \ (\text{major}) + \text{CH}_3\text{CH}_2\text{CH}_2\text{Br} \ (\text{minor})`} />

      <p>
        Addition of halogens gives <strong>vic-dibromides</strong>. Adding bromine in CCl<sub>4</sub>{" "}
        to an alkene discharges the reddish brown colour of bromine — an important test for a double
        bond.
      </p>

      <FormulaBlock latex={String.raw`\text{CH}_3\text{CH=CH}_2 + \text{Br}_2 \rightarrow \text{CH}_3\text{CH(Br)CH}_2\text{Br}`} />

      <MoleculeStructure {...STRUCTURES.dibromopropane} />

      <h3 id="h-6-4-3">6.4.3 Halogen Exchange</h3>

      <p>
        Alkyl iodides are often prepared by the reaction of alkyl chlorides/bromides with NaI in dry
        acetone — the <strong>Finkelstein reaction</strong>. NaCl or NaBr formed is precipitated in dry
        acetone, which drives the forward reaction according to Le Chatelier&apos;s principle.
      </p>

      <FormulaBlock latex={String.raw`\text{R–Cl} + \text{NaI} \xrightarrow{\text{dry acetone}} \text{R–I} + \text{NaCl}\downarrow`} />

      <p>
        Alkyl fluorides are best made by heating an alkyl chloride/bromide with a metallic fluoride
        such as AgF, Hg<sub>2</sub>F<sub>2</sub>, CoF<sub>2</sub> or SbF<sub>3</sub> — the{" "}
        <strong>Swarts reaction</strong>.
      </p>

      <FormulaBlock latex={String.raw`\text{R–Br} + \text{AgF} \rightarrow \text{R–F} + \text{AgBr}`} />

      <Expandable
        title="Intext 6.2 — Why is sulphuric acid not used with KI?"
        variant="exercise"
      >
        <p>Why is sulphuric acid not used during the reaction of alcohols with KI?</p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>
          H<sub>2</sub>SO<sub>4</sub> cannot be used along with KI in the conversion of an alcohol to
          an alkyl iodide, because it converts KI into the corresponding acid HI, which is then
          oxidised by it to I<sub>2</sub>.
        </p>
      </Expandable>

      <h2 id="h-6-5">6.5 Preparation of Haloarenes</h2>

      <h3 id="h-6-5-1">(i) From hydrocarbons by electrophilic substitution</h3>

      <p>
        Aryl chlorides and bromides are easily prepared by electrophilic substitution of arenes with
        chlorine and bromine in the presence of Lewis acid catalysts such as iron or iron(III)
        chloride.
      </p>

      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_6 + \text{Cl}_2 \xrightarrow{\text{FeCl}_3} \text{C}_6\text{H}_5\text{Cl} + \text{HCl}`} />

      <p>
        The <em>ortho</em> and <em>para</em> isomers are easily separated because of the large
        difference in their melting points. Reactions with iodine are reversible and need an oxidising
        agent (HNO<sub>3</sub>, HIO<sub>4</sub>) to oxidise the HI formed. Fluoro compounds are not
        prepared this way because of the high reactivity of fluorine.
      </p>

      <h3 id="h-6-5-2">(ii) From amines by Sandmeyer&apos;s reaction</h3>

      <p>
        When a primary aromatic amine, dissolved or suspended in cold aqueous mineral acid, is treated
        with sodium nitrite, a <strong>diazonium salt</strong> is formed. Mixing a freshly prepared
        solution of the diazonium salt with cuprous chloride or cuprous bromide replaces the diazonium
        group by —Cl or —Br.
      </p>

      <Stepper
        steps={[
          {
            label: "Diazotisation (273–278 K)",
            description: (
              <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{NH}_2 + \text{NaNO}_2 + 2\text{HCl} \xrightarrow{273-278\ \text{K}} \text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{NaCl} + 2\text{H}_2\text{O}`} />
            ),
          },
          {
            label: "Sandmeyer substitution with CuCl / CuBr",
            description: (
              <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{CuCl} \rightarrow \text{C}_6\text{H}_5\text{Cl} + \text{N}_2\uparrow`} />
            ),
          },
          {
            label: "For the iodide, no cuprous halide is needed",
            description: (
              <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{KI} \rightarrow \text{C}_6\text{H}_5\text{I} + \text{N}_2\uparrow + \text{KCl}`} />
            ),
          },
        ]}
      />

      <p>
        Replacement of the diazonium group by iodine is done simply by shaking the diazonium salt with
        potassium iodide.
      </p>

      <h2 id="h-6-6">6.6 Physical Properties</h2>

      <p>
        Alkyl halides are colourless when pure, but bromides and iodides develop colour on exposure to
        light. Many volatile halogen compounds have a sweet smell.
      </p>

      <h3 id="h-6-6-1">Melting and boiling points</h3>

      <p>
        Methyl chloride, methyl bromide, ethyl chloride and some chlorofluoromethanes are gases at room
        temperature; higher members are liquids or solids. Organic halogen compounds are generally
        polar, and their molecular masses are higher than those of the parent hydrocarbons, so
        dipole–dipole and van der Waals forces are stronger. That is why the boiling points of
        chlorides, bromides and iodides are considerably higher than those of hydrocarbons of
        comparable molecular mass.
      </p>

      <ul>
        <li>
          For the same alkyl group, boiling points decrease in the order{" "}
          <strong>RI &gt; RBr &gt; RCl &gt; RF</strong>, because van der Waals forces increase with the
          size and mass of the halogen.
        </li>
        <li>
          Boiling points of isomeric haloalkanes <strong>decrease with increasing branching</strong> —
          2-bromo-2-methylpropane has the lowest boiling point of its three isomers.
        </li>
        <li>
          Boiling points of isomeric dihalobenzenes are very nearly the same, but{" "}
          <strong>para-isomers have much higher melting points</strong> — their symmetry lets them fit
          into the crystal lattice better than the <em>ortho</em> and <em>meta</em> forms.
        </li>
      </ul>

      <h3 id="h-6-6-2">Solubility</h3>

      <p>
        Haloalkanes are very slightly soluble in water. Energy is needed to overcome the attractions
        between haloalkane molecules and to break the hydrogen bonds between water molecules, while
        less energy is released when new haloalkane–water attractions form (they are weaker than the
        original hydrogen bonds). By contrast, haloalkanes dissolve readily in organic solvents, because
        the new intermolecular attractions are of much the same strength as those being broken.
      </p>

      <h3 id="h-6-6-3">Density</h3>

      <p>
        Bromo, iodo and polychloro derivatives of hydrocarbons are heavier than water, and density
        increases with the number of carbon atoms, the number of halogen atoms and the atomic mass of
        the halogen.
      </p>

      <TableCard
        caption="Table 6.3: Density of Some Haloalkanes"
        headers={["Compound", "Density / g mL⁻¹", "Compound", "Density / g mL⁻¹"]}
        rows={[
          { cells: ["n-C₃H₇Cl", "0.89", "CH₂Cl₂", "1.336"] },
          { cells: ["n-C₃H₇Br", "1.335", "CHCl₃", "1.489"] },
          { cells: ["n-C₃H₇I", "1.747", "CCl₄", "1.595"] },
        ]}
      />

      <Expandable
        title="Intext 6.6 — Arrange in order of increasing boiling point"
        variant="exercise"
      >
        <p>
          (i) Bromomethane, bromoform, chloromethane, dibromomethane. (ii) 1-Chloropropane,
          isopropyl chloride, 1-chlorobutane.
        </p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>
          (i) Chloromethane &lt; bromomethane &lt; dibromomethane &lt; bromoform — boiling point
          increases with molecular mass.
        </p>
        <p>
          (ii) Isopropyl chloride &lt; 1-chloropropane &lt; 1-chlorobutane — the branched isomer has a
          lower boiling point than the straight chain, and the C<sub>4</sub> compound boils higher than
          the C<sub>3</sub> compounds.
        </p>
      </Expandable>

      <h2 id="h-6-7">6.7 Chemical Reactions</h2>

      <p>The reactions of haloalkanes fall into three categories:</p>
      <ol>
        <li>Nucleophilic substitution</li>
        <li>Elimination reactions</li>
        <li>Reaction with metals</li>
      </ol>

      <h3 id="h-6-7-1">6.7.1 Reactions of Haloalkanes</h3>

      <h4 id="h-6-7-1-1">(1) Nucleophilic substitution reactions</h4>

      <p>
        Nucleophiles are electron-rich species, so they attack the electron-deficient carbon of the
        substrate. In a <strong>nucleophilic substitution reaction</strong> a nucleophile replaces an
        already existing nucleophile (the <strong>leaving group</strong>, which departs as a halide
        ion) in the molecule. Haloalkanes are the substrate; the reaction is initiated by the
        nucleophile, and the halogen-bonded carbon carries a partial positive charge.
      </p>

      <TableCard
        caption="Table 6.4: Nucleophilic Substitution of Alkyl Halides (R–X)"
        headers={["Reagent", "Nucleophile (Nu⁻)", "Substitution product R–Nu", "Class of main product"]}
        rows={[
          { cells: ["NaOH (KOH)", "HO⁻", "ROH", "Alcohol"] },
          { cells: ["H₂O", "H₂O", "ROH", "Alcohol"] },
          { cells: ["NaOR′", "R′O⁻", "ROR′", "Ether"] },
          { cells: ["NaI", "I⁻", "R—I", "Alkyl iodide"] },
          { cells: ["NH₃", "NH₃", "RNH₂", "Primary amine"] },
          { cells: ["R′NH₂", "R′NH₂", "RNHR′", "Secondary amine"] },
          { cells: ["R′R″NH", "R′R″NH", "RNR′R″", "Tertiary amine"] },
          { cells: ["KCN", "CN⁻", "RCN", "Nitrile (cyanide)"] },
          { cells: ["AgCN", "Ag—CN:", "RNC", "Isonitrile (isocyanide)"] },
          { cells: ["KNO₂", "O=N—O⁻", "R—O—N=O", "Alkyl nitrite"] },
          { cells: ["AgNO₂", "Ag—O—N=O", "R—NO₂", "Nitroalkane"] },
          { cells: ["R′COOAg", "R′COO⁻", "R′COOR", "Ester"] },
          { cells: ["LiAlH₄", "H⁻", "RH", "Hydrocarbon"] },
          { cells: ["R′—M⁺", "R′⁻", "RR′", "Alkane"] },
        ]}
      />

      <ConceptCard title="Ambident nucleophiles" icon="🔀">
        <p>
          Groups such as cyanide and nitrite possess two nucleophilic centres and are called{" "}
          <strong>ambident nucleophiles</strong>. The cyanide group is a hybrid of two contributing
          structures, so it can link through carbon (giving alkyl cyanides) or through nitrogen
          (giving isocyanides). Similarly the nitrite ion links through oxygen to give alkyl nitrites
          and through nitrogen to give nitroalkanes.
        </p>
      </ConceptCard>

      <Expandable title="Example 6.5 — Why KCN gives cyanides but AgCN gives isocyanides" variant="example">
        <p>
          Haloalkanes react with KCN to form alkyl cyanides as the main product, while AgCN forms
          isocyanides as the chief product. Explain.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          KCN is predominantly ionic and provides cyanide ions in solution. Although both carbon and
          nitrogen can donate electron pairs, attack takes place mainly through carbon, because the
          C—C bond is more stable than the C—N bond. AgCN, however, is mainly covalent, so nitrogen is
          free to donate its electron pair and isocyanide becomes the main product.
        </p>
      </Expandable>

      <h5 id="h-6-7-1-1-a">(a) Substitution nucleophilic bimolecular (S<sub>N</sub>2)</h5>

      <p>
        The reaction between CH<sub>3</sub>Cl and hydroxide ion to give methanol and chloride ion
        follows <strong>second order kinetics</strong> — the rate depends on the concentration of both
        reactants.
      </p>

      <FormulaBlock latex={String.raw`\text{Rate} = k[\text{CH}_3\text{Cl}][\text{OH}^-]`} important />

      <Stepper
        steps={[
          {
            label: "The nucleophile attacks from the side opposite the leaving group",
            description: "The incoming OH⁻ approaches the carbon bearing the halogen; the C—Cl bond begins to weaken as the new C—O bond starts to form.",
          },
          {
            label: "A single transition state — no intermediate",
            description: "All three C—H bonds lie in one plane and the carbon is bonded to five atoms (three H, the incoming OH, the outgoing Cl). Such a structure is unstable and cannot be isolated.",
          },
          {
            label: "The leaving group departs and the configuration inverts",
            description: "The umbrella turns inside out: the product has the opposite spatial arrangement to the reactant. This is called inversion of configuration.",
          },
        ]}
      />

      <p>
        Because the nucleophile must approach the carbon bearing the leaving group, bulky substituents
        on or near that carbon have a dramatic inhibiting effect. Of the simple alkyl halides, methyl
        halides react most rapidly in S<sub>N</sub>2 reactions (only three small hydrogens), while
        tertiary halides are least reactive because bulky groups hinder the approaching nucleophile.
      </p>

      <FormulaBlock latex={String.raw`\text{Reactivity in S}_N2:\ \text{CH}_3\text{X} > 1^\circ > 2^\circ > 3^\circ`} important />

      <h5 id="h-6-7-1-1-b">(b) Substitution nucleophilic unimolecular (S<sub>N</sub>1)</h5>

      <p>
        S<sub>N</sub>1 reactions are generally carried out in <strong>polar protic solvents</strong>{" "}
        (water, alcohol, acetic acid). The reaction between <em>tert</em>-butyl bromide and hydroxide
        ion follows <strong>first order kinetics</strong> — the rate depends only on the concentration
        of the alkyl halide.
      </p>

      <FormulaBlock latex={String.raw`\text{Rate} = k[(\text{CH}_3)_3\text{CBr}]`} important />

      <Stepper
        steps={[
          {
            label: "Step I (slow, reversible): ionisation of the C—Br bond",
            description: "The polarised C—Br bond cleaves heterolytically to give a carbocation and a bromide ion. Energy for this comes from solvation of the halide ion by the protic solvent. Being the slowest step, it controls the rate.",
          },
          {
            label: "Step II (fast): attack of the nucleophile",
            description: "The planar sp² carbocation is attacked by the nucleophile from either face to complete the substitution.",
          },
        ]}
      />

      <p>
        The more stable the carbocation, the easier it forms and the faster the reaction. For alkyl
        halides, 3° halides undergo S<sub>N</sub>1 very fast because of the high stability of 3°
        carbocations. Allylic and benzylic halides are also highly reactive towards S<sub>N</sub>1,
        because their carbocations are stabilised by resonance.
      </p>

      <FormulaBlock latex={String.raw`\text{Reactivity in S}_N1:\ 3^\circ > 2^\circ > 1^\circ > \text{CH}_3\text{X}`} important />

      <Comparison
        columns={[
          {
            title: "S_N2",
            children: (
              <>
                <p>One step, bimolecular, second order.</p>
                <p>Rate = k[RX][Nu⁻].</p>
                <p>No carbocation; a five-coordinate transition state.</p>
                <p>Product has inverted configuration.</p>
                <p>Reactivity: CH₃X &gt; 1° &gt; 2° &gt; 3°.</p>
              </>
            ),
          },
          {
            title: "S_N1",
            children: (
              <>
                <p>Two steps, unimolecular, first order.</p>
                <p>Rate = k[RX].</p>
                <p>Planar carbocation intermediate; polar protic solvent helps.</p>
                <p>Product is racemised.</p>
                <p>Reactivity: 3° &gt; 2° &gt; 1° &gt; CH₃X.</p>
              </>
            ),
          },
        ]}
      />

      <Expandable title="Example 6.6 — Which halide reacts faster by Sₙ2?" variant="example">
        <p>
          In the following pairs of halogen compounds, which would undergo S<sub>N</sub>2 reaction
          faster?
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          (i) The primary halide reacts faster, because a primary carbon offers little steric
          hindrance to the approaching nucleophile.
        </p>
        <p>
          (ii) The iodide reacts faster: iodine is a better leaving group because of its large size, so
          it is released at a faster rate in the presence of the incoming nucleophile.
        </p>
      </Expandable>

      <Expandable
        title="Example 6.7 — Order of reactivity in Sₙ1 and Sₙ2"
        variant="example"
      >
        <p>
          Predict the order of reactivity of the following compounds in S<sub>N</sub>1 and S
          <sub>N</sub>2 reactions: (i) the four isomeric bromobutanes; (ii) C<sub>6</sub>H
          <sub>5</sub>CH<sub>2</sub>Br, C<sub>6</sub>H<sub>5</sub>CH(C<sub>6</sub>H<sub>5</sub>)Br,
          C<sub>6</sub>H<sub>5</sub>CH(CH<sub>3</sub>)Br, C<sub>6</sub>H<sub>5</sub>C(CH<sub>3</sub>)
          (C<sub>6</sub>H<sub>5</sub>)Br.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          (i) S<sub>N</sub>1: CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>Br &lt; (CH
          <sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>Br &lt; CH<sub>3</sub>CH<sub>2</sub>CH(Br)CH
          <sub>3</sub> &lt; (CH<sub>3</sub>)<sub>3</sub>CBr.
        </p>
        <p>
          S<sub>N</sub>2: CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>Br &gt; (CH
          <sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>Br &gt; CH<sub>3</sub>CH<sub>2</sub>CH(Br)CH
          <sub>3</sub> &gt; (CH<sub>3</sub>)<sub>3</sub>CBr.
        </p>
        <p>
          Of the two primary bromides, the carbocation from (CH<sub>3</sub>)<sub>2</sub>CHCH
          <sub>2</sub>Br is more stable than that from CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH
          <sub>2</sub>Br, owing to the greater electron-donating inductive effect of the (CH
          <sub>3</sub>)<sub>2</sub>CH– group. CH<sub>3</sub>CH<sub>2</sub>CH(Br)CH<sub>3</sub> is
          secondary and (CH<sub>3</sub>)<sub>3</sub>CBr is tertiary, which fixes the S<sub>N</sub>1
          order. In S<sub>N</sub>2 the order is reversed because steric hindrance around the
          electrophilic carbon increases in that direction.
        </p>
        <p>
          (ii) S<sub>N</sub>1: C<sub>6</sub>H<sub>5</sub>C(CH<sub>3</sub>)(C<sub>6</sub>H
          <sub>5</sub>)Br &gt; C<sub>6</sub>H<sub>5</sub>CH(C<sub>6</sub>H<sub>5</sub>)Br &gt; C
          <sub>6</sub>H<sub>5</sub>CH(CH<sub>3</sub>)Br &gt; C<sub>6</sub>H<sub>5</sub>CH
          <sub>2</sub>Br.
        </p>
        <p>
          S<sub>N</sub>2: C<sub>6</sub>H<sub>5</sub>C(CH<sub>3</sub>)(C<sub>6</sub>H<sub>5</sub>)Br
          &lt; C<sub>6</sub>H<sub>5</sub>CH(C<sub>6</sub>H<sub>5</sub>)Br &lt; C<sub>6</sub>H
          <sub>5</sub>CH(CH<sub>3</sub>)Br &lt; C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Br.
        </p>
        <p>
          The carbocation from C<sub>6</sub>H<sub>5</sub>CH(C<sub>6</sub>H<sub>5</sub>)Br is stabilised
          by two phenyl groups through resonance, so it is more reactive than the one from C<sub>6</sub>H
          <sub>5</sub>CH(CH<sub>3</sub>)Br in S<sub>N</sub>1. A phenyl group is bulkier than a methyl
          group, so in S<sub>N</sub>2 the former is less reactive than the latter.
        </p>
      </Expandable>

      <h5 id="h-6-7-1-1-c">(c) Stereochemical aspects of nucleophilic substitution</h5>

      <p>
        <strong>Optical activity.</strong> Plane-polarised light, produced by passing ordinary light
        through a Nicol prism, is rotated when passed through solutions of certain compounds. Such
        compounds are <strong>optically active</strong>, and the angle of rotation is measured with a{" "}
        <strong>polarimeter</strong>. Rotation to the right (clockwise) is <strong>dextrorotatory</strong>{" "}
        (d-form, positive sign); rotation to the left is <strong>laevorotatory</strong> (l-form,
        negative sign). Such (+) and (−) isomers are <strong>optical isomers</strong> and the phenomenon
        is <strong>optical isomerism</strong>.
      </p>

      <p>
        <strong>Chirality and enantiomers.</strong> Louis Pasteur (1848) found that crystals of certain
        compounds exist as mirror images and that aqueous solutions of both types rotate light equally
        but in opposite directions. In 1874, J. van&apos;t Hoff and C. Le Bel independently argued that
        the four groups around a carbon are arranged tetrahedrally, and that if all four substituents
        are different the mirror image cannot be superimposed on the molecule. Such a carbon is an{" "}
        <strong>asymmetric carbon</strong> or <strong>stereocentre</strong>, and the molecule is
        asymmetric and optically active.
      </p>

      <p>
        Objects that are non-superimposable on their mirror image (like a pair of hands) are{" "}
        <strong>chiral</strong>; the property is <strong>chirality</strong>. Objects superimposable on
        their mirror images are <strong>achiral</strong> and optically inactive. Stereoisomers related
        as non-superimposable mirror images are <strong>enantiomers</strong>; they have identical
        melting points, boiling points and refractive indices, and differ only in the direction of
        rotation of plane-polarised light.
      </p>

      <div className="my-6 grid gap-3 sm:grid-cols-2">
        <MoleculeStructure {...STRUCTURES.butan_2_ol_r} maxWidth={300} className="my-0" />
        <MoleculeStructure {...STRUCTURES.butan_2_ol_s} maxWidth={300} className="my-0" />
      </div>

      <FactCard
        title="Racemic mixture"
        definition="A mixture of two enantiomers in equal proportions has zero optical rotation, because the rotations cancel. It is called a racemic mixture or racemic modification, written with the prefix dl or (±), e.g. (±)-butan-2-ol. Converting an enantiomer into a racemic mixture is racemisation."
        icon="⚖️"
      />

      <Callout type="warning" title="Sign of rotation ≠ absolute configuration">
        The sign of optical rotation is not necessarily related to the absolute (actual) configuration
        of the molecule. Two compounds with the same configuration at the asymmetric centre may rotate
        light in opposite directions.
      </Callout>

      <p>
        <strong>Retention, inversion and racemisation.</strong> Three outcomes are possible when a bond
        directly linked to an asymmetric carbon is broken in a reaction:
      </p>

      <TableCard
        caption="Outcomes at a stereocentre"
        headers={["Outcome", "Meaning"]}
        rows={[
          { cells: ["Retention", "The spatial arrangement of bonds at the stereocentre is preserved (no bond to the stereocentre is broken)."] },
          { cells: ["Inversion", "The product has the opposite arrangement — the nucleophile attaches on the side opposite the leaving group."] },
          { cells: ["Racemisation", "A 50:50 mixture of both configurations is obtained, so the product is optically inactive."] },
        ]}
      />

      <p>
        In optically active alkyl halides, an S<sub>N</sub>2 reaction gives the product with{" "}
        <strong>inverted configuration</strong>: when (−)-2-bromooctane reacts with sodium hydroxide,
        (+)-octan-2-ol is formed with the —OH occupying the position opposite to that of bromide.
      </p>

      <p>
        S<sub>N</sub>1 reactions of optically active halides, on the other hand, are accompanied by{" "}
        <strong>racemisation</strong>. The carbocation formed in the slow step is <em>sp</em>
        <sup>2</sup> hybridised and planar (achiral), so the nucleophile can attack from either side of
        the plane. Hydrolysis of optically active 2-bromobutane therefore gives (±)-butan-2-ol.
      </p>

      <h4 id="h-6-7-1-2">(2) Elimination reactions</h4>

      <p>
        When a haloalkane with a β-hydrogen is heated with an <strong>alcoholic solution of potassium
        hydroxide</strong>, hydrogen is eliminated from the β-carbon and halogen from the α-carbon,
        giving an alkene. Because a β-hydrogen is involved, this is called <strong>β-elimination</strong>.
      </p>

      <FactCard
        title="α- and β-carbon"
        definition="The carbon on which the halogen is directly attached is the α-carbon; the carbon adjacent to it is the β-carbon."
        icon="🏷️"
      />

      <FormulaBlock latex={String.raw`\text{CH}_3\text{CH}_2\text{CH(Br)CH}_3 \xrightarrow{\text{alc. KOH}} \text{CH}_3\text{CH=CHCH}_3 \ (\text{major}) + \text{CH}_3\text{CH}_2\text{CH=CH}_2 \ (\text{minor})`} />

      <p>
        If more than one alkene can form, usually one is the major product. Alexander Zaitsev (1875)
        summarised the pattern: <Highlight color="yellow">in dehydrohalogenation reactions the preferred
        product is the alkene with the greater number of alkyl groups attached to the doubly bonded
        carbon atoms</Highlight>. Thus 2-bromopentane gives pent-2-ene as the major product.
      </p>

      <Callout type="note" title="Elimination versus substitution">
        <p>
          A reaction is a race won by the fastest route. An alkyl halide with β-hydrogens, treated
          with a base or nucleophile, faces two competing routes: substitution (S<sub>N</sub>1, S
          <sub>N</sub>2) and elimination. Which one wins depends on the alkyl halide, the strength and
          size of the base/nucleophile and the reaction conditions.
        </p>
        <ul>
          <li>A bulkier nucleophile prefers to act as a base and abstracts a proton rather than approach a tetravalent carbon.</li>
          <li>A primary halide prefers S<sub>N</sub>2; a secondary halide may do S<sub>N</sub>2 or eliminate; a tertiary halide follows S<sub>N</sub>1 or elimination, depending on carbocation stability versus the more substituted alkene.</li>
        </ul>
      </Callout>

      <h4 id="h-6-7-1-3">(3) Reaction with metals</h4>

      <p>
        Most organic chlorides, bromides and iodides react with certain metals to give compounds
        containing carbon–metal bonds, known as <strong>organometallic compounds</strong>. The most
        important class — discovered by Victor Grignard in 1900 — is the alkyl magnesium halide RMgX,
        called the <strong>Grignard reagent</strong>, obtained by the reaction of a haloalkane with
        magnesium metal in dry ether.
      </p>

      <FormulaBlock latex={String.raw`\text{R–X} + \text{Mg} \xrightarrow{\text{dry ether}} \text{R–Mg–X}`} important />

      <p>
        In a Grignard reagent the carbon–magnesium bond is covalent but highly polar, with carbon
        pulling electrons from electropositive magnesium; the magnesium–halogen bond is essentially
        ionic. Grignard reagents are highly reactive and react with any source of proton to give
        hydrocarbons — even water, alcohols and amines are sufficiently acidic.
      </p>

      <FormulaBlock latex={String.raw`\text{R–Mg–X} + \text{H}_2\text{O} \rightarrow \text{R–H} + \text{Mg(OH)X}`} />

      <Callout type="warning">
        Even traces of moisture must be avoided, which is why the reaction is carried out in dry ether.
        On the other hand, this protonation can be used as a method for converting halides into
        hydrocarbons.
      </Callout>

      <p>
        <strong>Wurtz reaction.</strong> Alkyl halides react with sodium in dry ether to give
        hydrocarbons containing double the number of carbon atoms present in the halide.
      </p>

      <FormulaBlock latex={String.raw`2\text{R–X} + 2\text{Na} \xrightarrow{\text{dry ether}} \text{R–R} + 2\text{NaX}`} />

      <Expandable
        title="Intext 6.7 — Which alkyl halide reacts faster by Sₙ2?"
        variant="exercise"
      >
        <p>
          Which alkyl halide from each pair would you expect to react more rapidly by an S<sub>N</sub>2
          mechanism? Explain.
        </p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>
          (i) The straight-chain primary bromide reacts faster — being primary, there is no steric
          hindrance.
        </p>
        <p>(ii) The secondary halide reacts faster than the tertiary halide.</p>
        <p>
          (iii) A methyl group closer to the halogen increases steric hindrance and so decreases the
          rate.
        </p>
      </Expandable>

      <Expandable
        title="Intext 6.8 — Which compound undergoes faster Sₙ1?"
        variant="exercise"
      >
        <p>In each pair of halogen compounds, which compound undergoes a faster S<sub>N</sub>1 reaction?</p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>
          (i) The tertiary halide reacts faster than the secondary halide, because of the greater
          stability of the tertiary carbocation.
        </p>
        <p>
          (ii) The compound giving the secondary carbocation reacts faster, because a secondary
          carbocation is more stable than a primary one.
        </p>
      </Expandable>

      <h3 id="h-6-7-2">6.7.2 Reactions of Haloarenes</h3>

      <h4 id="h-6-7-2-1">1. Nucleophilic substitution</h4>

      <p>
        Aryl halides are <strong>extremely less reactive</strong> towards nucleophilic substitution than
        haloalkanes, for four reasons:
      </p>

      <ol>
        <li>
          <strong>Resonance effect.</strong> In haloarenes the electron pairs on the halogen are in
          conjugation with the p-electrons of the ring, so the C—Cl bond acquires partial double bond
          character. Bond cleavage is therefore more difficult.
        </li>
        <li>
          <strong>Difference in hybridisation.</strong> In a haloalkane the carbon bearing halogen is{" "}
          <em>sp</em>
          <sup>3</sup> hybridised; in a haloarene it is <em>sp</em>
          <sup>2</sup>. The greater s-character makes the <em>sp</em>
          <sup>2</sup> carbon more electronegative, so it holds the C—X electron pair more tightly.
          The C—Cl bond is 177 pm in the haloalkane but only 169 pm in the haloarene, and a shorter bond
          is harder to break.
        </li>
        <li>
          <strong>Instability of the phenyl cation.</strong> The phenyl cation that would form by
          self-ionisation is not stabilised by resonance, so an S<sub>N</sub>1 mechanism is ruled out.
        </li>
        <li>
          <strong>Repulsion.</strong> The electron-rich nucleophile is less likely to approach the
          electron-rich arene ring.
        </li>
      </ol>

      <MoleculeStructure {...STRUCTURES.chlorobenzene} maxWidth={380} />

      <p>
        <strong>Replacement by a hydroxyl group.</strong> Chlorobenzene can be converted into phenol by
        heating in aqueous sodium hydroxide at 623 K and 300 atmospheres.
      </p>

      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{Cl} + \text{NaOH} \xrightarrow{623\ \text{K},\ 300\ \text{atm}} \text{C}_6\text{H}_5\text{OH} + \text{NaCl}`} />

      <p>
        An electron-withdrawing group (—NO<sub>2</sub>) at <em>ortho</em>- and <em>para</em>-positions
        greatly increases the reactivity of haloarenes; at the <em>meta</em>-position it has no effect.
      </p>

      <FormulaBlock latex={String.raw`2,4\text{-dinitrochlorobenzene} + \text{NaOH(aq)} \xrightarrow{368\ \text{K}} 2,4\text{-dinitrophenol} + \text{NaCl}`} />

      <Callout type="note" title="Why only ortho and para?">
        A nitro group at <em>ortho</em> or <em>para</em> withdraws electron density from the ring and
        so facilitates attack of the nucleophile; the carbanion (Meisenheimer complex) formed is
        stabilised by resonance, and the negative charge appears at the positions carrying the —NO
        <sub>2</sub>. With a <em>meta</em>-nitro group, none of the resonating structures bears the
        negative charge on the carbon carrying —NO<sub>2</sub>, so the charge is not stabilised and
        reactivity is unchanged.
      </Callout>

      <Expandable
        title="Example 6.9 — Chlorine withdraws electrons, yet directs ortho/para. Why?"
        variant="example"
      >
        <p>
          Although chlorine is an electron withdrawing group, yet it is <em>ortho</em>-, <em>para</em>
          -directing in electrophilic aromatic substitution reactions. Why?
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          Chlorine withdraws electrons through the inductive effect and releases electrons through
          resonance. Through the inductive effect it destabilises the intermediate carbocation formed
          during electrophilic substitution. Through resonance the halogen stabilises that carbocation,
          and the effect is more pronounced at <em>ortho</em>- and <em>para</em>-positions. The
          inductive effect is stronger than the resonance effect and causes net electron withdrawal,
          hence net deactivation. The resonance effect opposes the inductive effect for attack at{" "}
          <em>ortho</em>- and <em>para</em>-positions, making deactivation less there. So{" "}
          <Highlight color="yellow">reactivity is controlled by the stronger inductive effect and
          orientation by the resonance effect</Highlight>.
        </p>
      </Expandable>

      <h4 id="h-6-7-2-2">2. Electrophilic substitution reactions</h4>

      <p>
        Haloarenes undergo the usual electrophilic reactions of the benzene ring — halogenation,
        nitration, sulphonation and Friedel–Crafts reactions. The halogen, besides being slightly
        deactivating, is <strong>o,p-directing</strong>, so further substitution occurs at positions{" "}
        <em>ortho</em> and <em>para</em> to it. Because of its −I effect the ring is somewhat
        deactivated compared with benzene, so these reactions occur slowly and need more drastic
        conditions.
      </p>

      <TableCard
        caption="Electrophilic substitution of chlorobenzene"
        headers={["Reaction", "Reagents", "Main product"]}
        rows={[
          { cells: ["Halogenation", "Cl₂ / FeCl₃", "p-Dichlorobenzene (with o-isomer)"] },
          { cells: ["Nitration", "conc. HNO₃ / conc. H₂SO₄", "p-Nitrochlorobenzene (with o-isomer)"] },
          { cells: ["Sulphonation", "conc. H₂SO₄", "p-Chlorobenzenesulphonic acid"] },
          { cells: ["Friedel–Crafts alkylation", "CH₃Cl / anhydrous AlCl₃", "p-Chlorotoluene (with o-isomer)"] },
        ]}
      />

      <h4 id="h-6-7-2-3">3. Reaction with metals</h4>

      <p>
        <strong>Wurtz–Fittig reaction.</strong> A mixture of an alkyl halide and an aryl halide gives an
        alkylarene when treated with sodium in dry ether.
      </p>

      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{Br} + \text{C}_2\text{H}_5\text{Br} + 2\text{Na} \xrightarrow{\text{dry ether}} \text{C}_6\text{H}_5\text{C}_2\text{H}_5 + 2\text{NaBr}`} />

      <p>
        <strong>Fittig reaction.</strong> Aryl halides alone give analogous compounds when treated with
        sodium in dry ether, two aryl groups being joined together.
      </p>

      <FormulaBlock latex={String.raw`2\text{C}_6\text{H}_5\text{Cl} + 2\text{Na} \xrightarrow{\text{dry ether}} \text{C}_6\text{H}_5\text{—C}_6\text{H}_5 + 2\text{NaCl}`} />

      <MoleculeStructure {...STRUCTURES.biphenyl} maxWidth={440} />

      <Expandable
        title="Intext 6.3 — Dihalogen derivatives of propane"
        variant="exercise"
      >
        <p>Write structures of different dihalogen derivatives of propane.</p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>
          Four are possible: ClCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>Cl (1,3-), ClCH
          <sub>2</sub>CHClCH<sub>3</sub> (1,2-), Cl<sub>2</sub>CHCH<sub>2</sub>CH<sub>3</sub> (1,1-)
          and CH<sub>3</sub>CCl<sub>2</sub>CH<sub>3</sub> (2,2-dichloropropane).
        </p>
      </Expandable>

      <Expandable
        title="Intext 6.4 — Which C₅H₁₂ isomer gives one, three or four monochlorides?"
        variant="exercise"
      >
        <p>
          Among the isomeric alkanes of molecular formula C<sub>5</sub>H<sub>12</sub>, identify the one
          that on photochemical chlorination yields (i) a single monochloride, (ii) three isomeric
          monochlorides, (iii) four isomeric monochlorides.
        </p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>
          (i) <strong>Neopentane</strong>, (CH<sub>3</sub>)<sub>4</sub>C — all twelve hydrogens are
          equivalent, so replacing any one gives the same product.
        </p>
        <p>
          (ii) <strong>n-Pentane</strong> — its hydrogens fall into three equivalent groups, giving
          1-, 2- and 3-chloropentane.
        </p>
        <p>
          (iii) <strong>Isopentane (2-methylbutane)</strong> — its hydrogens fall into four equivalent
          groups, so four isomeric products are possible.
        </p>
      </Expandable>

      <h2 id="h-6-8">6.8 Polyhalogen Compounds</h2>

      <p>
        Carbon compounds containing more than one halogen atom are called <strong>polyhalogen
        compounds</strong>. Many of them are useful in industry and agriculture.
      </p>

      <h3 id="h-6-8-1">6.8.1 Dichloromethane (Methylene chloride, CH₂Cl₂)</h3>

      <p>
        Widely used as a solvent and as a paint remover, as a propellant in aerosols, as a process
        solvent in drug manufacture, and as a metal cleaning and finishing solvent. Methylene chloride
        harms the human central nervous system: lower levels in air can slightly impair hearing and
        vision, higher levels cause dizziness, nausea and tingling or numbness in the fingers and toes.
        Direct skin contact causes intense burning and mild redness; contact with the eyes can burn the
        cornea.
      </p>

      <MoleculeStructure {...STRUCTURES.dichloromethane} maxWidth={340} />

      <h3 id="h-6-8-2">6.8.2 Trichloromethane (Chloroform, CHCl₃)</h3>

      <p>
        Chemically, chloroform is a solvent for fats, alkaloids, iodine and other substances. Its major
        use today is in the production of the freon refrigerant R-22. It was once used as a general
        anaesthetic in surgery but has been replaced by less toxic, safer anaesthetics such as ether.
        Inhaling chloroform vapours depresses the central nervous system — about 900 ppm for a short
        time causes dizziness, fatigue and headache. Chronic exposure may damage the liver (where
        chloroform is metabolised to phosgene) and the kidneys.
      </p>

      <MoleculeStructure {...STRUCTURES.trichloromethane} maxWidth={340} />

      <Callout type="warning" title="Chloroform must be stored in the dark">
        <p>
          Chloroform is slowly oxidised by air in the presence of light to the extremely poisonous gas
          carbonyl chloride (phosgene). It is therefore stored in closed, dark coloured bottles filled
          completely so that air is kept out.
        </p>
        <FormulaBlock latex={String.raw`2\text{CHCl}_3 + \text{O}_2 \xrightarrow{\text{light}} 2\text{COCl}_2 + 2\text{HCl}`} />
      </Callout>

      <MoleculeStructure {...STRUCTURES.phosgene} maxWidth={340} />

      <h3 id="h-6-8-3">6.8.3 Triiodomethane (Iodoform, CHI₃)</h3>

      <p>
        It was used earlier as an antiseptic, but the antiseptic properties are due to the liberation of
        free iodine and not to iodoform itself. Because of its objectionable smell it has been replaced
        by other formulations containing iodine.
      </p>

      <MoleculeStructure {...STRUCTURES.triiodomethane} maxWidth={340} />

      <h3 id="h-6-8-4">6.8.4 Tetrachloromethane (Carbon tetrachloride, CCl₄)</h3>

      <p>
        Produced in large quantities for the manufacture of refrigerants and propellants for aerosol
        cans, and used as feedstock in the synthesis of chlorofluorocarbons and other chemicals, in
        pharmaceutical manufacturing and as a general solvent. Until the mid-1960s it was widely used as
        a cleaning fluid — a degreasing agent in industry and a spot remover and fire extinguisher at
        home.
      </p>

      <p>
        There is some evidence that exposure to carbon tetrachloride causes liver cancer in humans. The
        most common effects are dizziness, light headedness, nausea and vomiting, which can cause
        permanent damage to nerve cells; in severe cases these effects can lead rapidly to stupor,
        coma, unconsciousness or death. Exposure can make the heartbeat irregular or stop, and the
        chemical irritates the eyes on contact. When released into the air, CCl<sub>4</sub> rises to the
        atmosphere and depletes the ozone layer, increasing human exposure to ultraviolet rays — leading
        to skin cancer, eye diseases and disorders, and possible disruption of the immune system.
      </p>

      <MoleculeStructure {...STRUCTURES.tetrachloromethane} maxWidth={340} />

      <h3 id="h-6-8-5">6.8.5 Freons</h3>

      <p>
        The chlorofluorocarbon compounds of methane and ethane are collectively known as{" "}
        <strong>freons</strong>. They are extremely stable, unreactive, non-toxic, non-corrosive and
        easily liquefiable gases. <strong>Freon 12 (CCl<sub>2</sub>F<sub>2</sub>)</strong> is one of the
        most common freons in industrial use; it is manufactured from tetrachloromethane by the Swarts
        reaction. Freons are used as aerosol propellants and for refrigeration and air conditioning.
      </p>

      <FormulaBlock latex={String.raw`\text{CCl}_4 + 2\text{SbF}_3 \xrightarrow{\text{SbCl}_5} \text{CCl}_2\text{F}_2 + 2\text{SbCl}_3`} />

      <MoleculeStructure {...STRUCTURES.freon_12} maxWidth={340} />

      <p>
        Most freon, even that used in refrigeration, eventually reaches the atmosphere, where it diffuses
        unchanged into the stratosphere. There it initiates radical chain reactions that upset the
        natural ozone balance.
      </p>

      <h3 id="h-6-8-6">6.8.6 p,p′-Dichlorodiphenyltrichloroethane (DDT)</h3>

      <p>
        DDT, the first chlorinated organic insecticide, was originally prepared in 1873, but it was not
        until 1939 that Paul Muller of Geigy Pharmaceuticals in Switzerland discovered its effectiveness
        as an insecticide; he was awarded the Nobel Prize in Medicine and Physiology in 1948. Its use
        increased enormously worldwide after World War II, mainly because of its effectiveness against
        the mosquito that spreads malaria and the lice that carry typhus.
      </p>

      <p>
        Problems appeared in the late 1940s. Many insect species developed resistance, and DDT was found
        to be highly toxic to fish. Its chemical stability and fat solubility compounded the problem:
        DDT is not metabolised rapidly by animals and is deposited and stored in fatty tissues, so if
        ingestion continues at a steady rate it builds up over time. The use of DDT was banned in the
        United States in 1973, although it is still used in some other parts of the world.
      </p>

      <MoleculeStructure {...STRUCTURES.ddt} maxWidth={520} />

      <MistakeCard
        mistake="Treating 'Sₙ1 racemises, Sₙ2 inverts' as a fact to memorise without knowing why."
        correction="The carbocation in Sₙ1 is planar (sp²) and achiral, so attack from either face gives both enantiomers; Sₙ2 attacks only from the side opposite the leaving group, so the umbrella flips."
        example="2-bromobutane + OH⁻: Sₙ1 → (±)-butan-2-ol; Sₙ2 → inverted product only."
      />

      <MistakeCard
        mistake="Assuming an o,p-directing group must also be activating."
        correction="Halogens are o,p-directing but deactivating: −I (strong) withdraws electron density, +M (weaker) stabilises the ortho/para intermediate. Reactivity follows −I, orientation follows +M."
        example="Chlorobenzene nitrates more slowly than benzene, yet gives mainly p-nitrochlorobenzene."
      />

      <h2 id="h-6-exercises">Exercises</h2>

      <ExerciseQa
        answersHeading="NCERT Exercise Questions (6.1–6.22)"
        questions={[
          <>
            Name the following halides according to the IUPAC system and classify them as alkyl,
            allyl, benzyl (primary, secondary, tertiary), vinyl or aryl halides: (i) (CH<sub>3</sub>)
            <sub>2</sub>CHCH(Cl)CH<sub>3</sub> (ii) CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH(C
            <sub>2</sub>H<sub>5</sub>)Cl (iii) CH<sub>3</sub>CH<sub>2</sub>C(CH<sub>3</sub>)
            <sub>2</sub>CH<sub>2</sub>I (iv) (CH<sub>3</sub>)<sub>3</sub>CCH<sub>2</sub>CH(Br)C
            <sub>6</sub>H<sub>5</sub> (v) CH<sub>3</sub>CH(CH<sub>3</sub>)CH(Br)CH<sub>3</sub> (vi) CH
            <sub>3</sub>C(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>CH<sub>2</sub>Br (vii) CH<sub>3</sub>
            C(Cl)(C<sub>2</sub>H<sub>5</sub>)CH<sub>2</sub>CH<sub>3</sub> (viii) CH<sub>3</sub>CH=C(Cl)CH
            <sub>2</sub>CH(CH<sub>3</sub>)<sub>2</sub> (ix) CH<sub>3</sub>CH=CHC(Br)(CH<sub>3</sub>)
            <sub>2</sub> (x) p-ClC<sub>6</sub>H<sub>4</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)<sub>2</sub>{" "}
            (xi) m-ClCH<sub>2</sub>C<sub>6</sub>H<sub>4</sub>CH<sub>2</sub>C(CH<sub>3</sub>)<sub>3</sub>{" "}
            (xii) o-Br-C<sub>6</sub>H<sub>4</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub>.
          </>,
          <>
            Give the IUPAC names of the following compounds: (i) CH<sub>3</sub>CH(Cl)CH(Br)CH<sub>3</sub>{" "}
            (ii) CHF<sub>2</sub>CBrClF (iii) ClCH<sub>2</sub>C≡CCH<sub>2</sub>Br (iv) (CCl<sub>3</sub>)
            <sub>3</sub>CCl (v) CH<sub>3</sub>C(p-ClC<sub>6</sub>H<sub>4</sub>)<sub>2</sub>CH(Br)CH
            <sub>3</sub> (vi) (CH<sub>3</sub>)<sub>3</sub>CCH=CClC<sub>6</sub>H<sub>4</sub>I-p.
          </>,
          <>
            Write the structures of the following organic halogen compounds: (i) 2-Chloro-3-methylpentane
            (ii) p-Bromochlorobenzene (iii) 1-Chloro-4-ethylcyclohexane (iv) 2-(2-Chlorophenyl)-1-iodooctane
            (v) 2-Bromobutane (vi) 4-<em>tert</em>-butyl-3-iodoheptane (vii) 1-Bromo-4-<em>sec</em>
            -butyl-2-methylbenzene (viii) 1,4-Dibromobut-2-ene.
          </>,
          <>
            Which one of the following has the highest dipole moment? (i) CH<sub>2</sub>Cl<sub>2</sub>{" "}
            (ii) CHCl<sub>3</sub> (iii) CCl<sub>4</sub>.
          </>,
          <>
            A hydrocarbon C<sub>5</sub>H<sub>10</sub> does not react with chlorine in dark but gives a
            single monochloro compound C<sub>5</sub>H<sub>9</sub>Cl in bright sunlight. Identify the
            hydrocarbon.
          </>,
          <>Write the isomers of the compound having formula C<sub>4</sub>H<sub>9</sub>Br.</>,
          <>
            Write the equations for the preparation of 1-iodobutane from (i) 1-butanol (ii)
            1-chlorobutane (iii) but-1-ene.
          </>,
          <>What are ambident nucleophiles? Explain with an example.</>,
          <>
            Which compound in each of the following pairs will react faster in S<sub>N</sub>2 reaction
            with OH⁻? (i) CH<sub>3</sub>Br or CH<sub>3</sub>I (ii) (CH<sub>3</sub>)<sub>3</sub>CCl or
            CH<sub>3</sub>Cl.
          </>,
          <>
            Predict all the alkenes that would be formed by dehydrohalogenation of the following halides
            with sodium ethoxide in ethanol and identify the major alkene: (i)
            1-Bromo-1-methylcyclohexane (ii) 2-Chloro-2-methylbutane (iii)
            2,2,3-Trimethyl-3-bromopentane.
          </>,
          <>
            How will you bring about the following conversions? (i) Ethanol to but-1-yne (ii) Ethane to
            bromoethene (iii) Propene to 1-nitropropane (iv) Toluene to benzyl alcohol (v) Propene to
            propyne (vi) Ethanol to ethyl fluoride (vii) Bromomethane to propanone (viii) But-1-ene to
            but-2-ene (ix) 1-Chlorobutane to n-octane (x) Benzene to biphenyl.
          </>,
          <>
            Explain why (i) the dipole moment of chlorobenzene is lower than that of cyclohexyl chloride
            (ii) alkyl halides, though polar, are immiscible with water (iii) Grignard reagents should be
            prepared under anhydrous conditions.
          </>,
          <>Give the uses of freon 12, DDT, carbon tetrachloride and iodoform.</>,
          <>
            Write the structure of the major organic product in each of the following reactions: (i) CH
            <sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Cl + NaI (ii) (CH<sub>3</sub>)<sub>3</sub>CBr + KOH
            (iii) CH<sub>3</sub>CH(Br)CH<sub>2</sub>CH<sub>3</sub> + NaOH (iv) CH<sub>3</sub>CH
            <sub>2</sub>Br + KCN (v) C<sub>6</sub>H<sub>5</sub>ONa + C<sub>2</sub>H<sub>5</sub>Cl (vi)
            CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH + SOCl<sub>2</sub> (vii) CH<sub>3</sub>CH
            <sub>2</sub>CH=CH<sub>2</sub> + HBr (viii) CH<sub>3</sub>CH=C(CH<sub>3</sub>)<sub>2</sub> +
            HBr.
          </>,
          <>Write the mechanism of the following reaction: nBuBr + KCN → nBuCN.</>,
          <>
            Arrange the compounds of each set in order of reactivity towards S<sub>N</sub>2
            displacement: (i) 2-Bromo-2-methylbutane, 1-bromopentane, 2-bromopentane (ii)
            1-Bromo-3-methylbutane, 2-bromo-2-methylbutane, 2-bromo-3-methylbutane (iii)
            1-Bromobutane, 1-bromo-2,2-dimethylpropane, 1-bromo-2-methylbutane,
            1-bromo-3-methylbutane.
          </>,
          <>
            Out of C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl and C<sub>6</sub>H<sub>5</sub>CHClC
            <sub>6</sub>H<sub>5</sub>, which is more easily hydrolysed by aqueous KOH?
          </>,
          <>p-Dichlorobenzene has higher m.p. than those of o- and m-isomers. Discuss.</>,
          <>
            How can the following conversions be carried out? (i) Propene to propan-1-ol (ii) Ethanol to
            but-1-yne (iii) 1-Bromopropane to 2-bromopropane (iv) Toluene to benzyl alcohol (v) Benzene
            to 4-bromonitrobenzene (vi) Benzyl alcohol to 2-phenylethanoic acid (vii) Ethanol to
            propanenitrile (viii) Aniline to chlorobenzene (ix) 2-Chlorobutane to 3,4-dimethylhexane
            (x) 2-Methyl-1-propene to 2-chloro-2-methylpropane (xi) Ethyl chloride to propanoic acid
            (xii) But-1-ene to n-butyliodide (xiii) 2-Chloropropane to 1-propanol (xiv) Isopropyl
            alcohol to iodoform (xv) Chlorobenzene to p-nitrophenol (xvi) 2-Bromopropane to
            1-bromopropane (xvii) Chloroethane to butane (xviii) Benzene to diphenyl (xix) tert-Butyl
            bromide to isobutyl bromide (xx) Aniline to phenylisocyanide.
          </>,
          <>
            The treatment of alkyl chlorides with aqueous KOH leads to the formation of alcohols but in
            the presence of alcoholic KOH, alkenes are major products. Explain.
          </>,
          <>
            Primary alkyl halide C<sub>4</sub>H<sub>9</sub>Br (a) reacted with alcoholic KOH to give
            compound (b). Compound (b) is reacted with HBr to give (c), which is an isomer of (a). When
            (a) is reacted with sodium metal it gives compound (d), C<sub>8</sub>H<sub>18</sub>, which
            is different from the compound formed when n-butyl bromide is reacted with sodium. Give the
            structural formula of (a) and write the equations for all the reactions.
          </>,
          <>
            What happens when (i) n-butyl chloride is treated with alcoholic KOH (ii) bromobenzene is
            treated with Mg in the presence of dry ether (iii) chlorobenzene is subjected to hydrolysis
            (iv) ethyl chloride is treated with aqueous KOH (v) methyl bromide is treated with sodium in
            the presence of dry ether (vi) methyl chloride is treated with KCN?
          </>,
        ]}
      />
    </>
  );
}
