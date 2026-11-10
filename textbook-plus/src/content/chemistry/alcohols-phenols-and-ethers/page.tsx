import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { Stepper } from "@/components/content/Stepper";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { HydroxylFormationCards } from "@/components/content/chemistry/HydroxylFormationCards";
import { HydroxylGroupClassification } from "@/components/content/chemistry/HydroxylGroupClassification";
import { AlcoholTypeCards } from "@/components/content/chemistry/AlcoholTypeCards";
import { StructureFeatureCard } from "@/components/content/chemistry/StructureFeatureCard";
import { Sp2HydroxylComparison } from "@/components/content/chemistry/Sp2HydroxylComparison";
import { EtherClassification } from "@/components/content/chemistry/EtherClassification";
import { BenzeneRing, StructureMark } from "@/components/content/chemistry/StructureGlyphs";
import { NamingSystemCards } from "@/components/content/chemistry/NamingSystemCards";
import { NumberedRuleRows } from "@/components/content/chemistry/NumberedRuleRows";
import { PolyhydricAlcoholCards } from "@/components/content/chemistry/PolyhydricAlcoholCards";
import { PhenolParentCard } from "@/components/content/chemistry/PhenolParentCard";
import { PhenolPositionComparison } from "@/components/content/chemistry/PhenolPositionComparison";
import { GroupedNameTable } from "@/components/content/chemistry/GroupedNameTable";
import { ReactionPathway } from "@/components/content/chemistry/ReactionPathway";
import { ReactionPairCards } from "@/components/content/chemistry/ReactionPairCards";
import { CarbonylClassTable } from "@/components/content/chemistry/CarbonylClassTable";
import { TrendCards } from "@/components/content/chemistry/TrendCards";
import { HydrogenBondCard } from "@/components/content/chemistry/HydrogenBondCard";
import { SolubilityPanel } from "@/components/content/chemistry/SolubilityPanel";
import { CompoundOrderStrip } from "@/components/content/chemistry/CompoundOrderStrip";
import { BoardQuestionCard } from "@/components/content/chemistry/BoardQuestionCard";
import { BoardMcq } from "@/components/content/chemistry/BoardMcq";
import { Formula } from "@/components/content/Formula";

export default function AlcoholsPhenolsEthersChapter() {
  return (
    <>
      <p>
        <strong>Alcohols</strong> and <strong>phenols</strong> are hydroxyl derivatives of
        hydrocarbons.
      </p>

      <HydroxylFormationCards
        transformations={[
          {
            label: "Methane → Methanol",
            reactant: (
              <>
                CH<sub>4</sub>
              </>
            ),
            product: (
              <>
                CH<sub>3</sub>
                <StructureMark>OH</StructureMark>
              </>
            ),
          },
          {
            label: "Benzene → Phenol",
            reactant: <BenzeneRing />,
            product: (
              <>
                <BenzeneRing bond />
                <StructureMark>OH</StructureMark>
              </>
            ),
          },
        ]}
      />

      <h2 id="h-7-1">7.1 Classification of Alcohols, Phenols and Ethers</h2>

      <h3 id="h-7-1-1">7.1.1 Based on the Number of Hydroxyl Groups (–OH)</h3>

      <HydroxylGroupClassification
        alcoholRows={[
          {
            classification: "Monohydric",
            groups: "1",
            example: (
              <>
                Ethanol: C<sub>2</sub>H<sub>5</sub>OH
              </>
            ),
          },
          {
            classification: "Dihydric",
            groups: "2",
            example: (
              <>
                Ethylene glycol: CH<sub>2</sub>OH–CH<sub>2</sub>OH
              </>
            ),
          },
          {
            classification: "Trihydric",
            groups: "3",
            example: (
              <>
                Glycerol: CH<sub>2</sub>OH–CHOH–CH<sub>2</sub>OH
              </>
            ),
          },
          {
            classification: "Polyhydric",
            groups: "Many",
            example: "Glucose, fructose",
          },
        ]}
        phenolClasses={[
          { classification: "Monohydric phenols", groups: "One –OH group" },
          { classification: "Dihydric phenols", groups: "Two –OH groups" },
          { classification: "Trihydric phenols", groups: "Three –OH groups" },
        ]}
      />

      <h3 id="h-7-1-2">7.1.2 Monohydric Alcohols Containing an sp³ C—OH Bond</h3>

      <p>
        Monohydric alcohols in which the –OH group is bonded to an <em>sp</em>
        <sup>3</sup> hybridised carbon atom are further classified into three structural categories.
      </p>

      <h4 id="h-7-1-2-a">A. Primary, secondary and tertiary alcohols</h4>

      <AlcoholTypeCards
        types={[
          {
            type: "Primary",
            degree: "1°",
            classification: "–OH attached to a primary carbon.",
            formula: {
              before: (
                <>
                  CH<sub>3</sub>–
                </>
              ),
              focus: (
                <>
                  CH<sub>2</sub>–OH
                </>
              ),
              after: "",
            },
          },
          {
            type: "Secondary",
            degree: "2°",
            classification: "–OH attached to a secondary carbon.",
            formula: {
              before: (
                <>
                  CH<sub>3</sub>–
                </>
              ),
              focus: "CH(OH)",
              after: (
                <>
                  –CH<sub>3</sub>
                </>
              ),
            },
          },
          {
            type: "Tertiary",
            degree: "3°",
            classification: "–OH attached to a tertiary carbon.",
            formula: {
              before: (
                <>
                  CH<sub>3</sub>–
                </>
              ),
              focus: (
                <>
                  C(OH)(CH<sub>3</sub>)
                </>
              ),
              after: (
                <>
                  –CH<sub>3</sub>
                </>
              ),
            },
          },
        ]}
      />

      <h4 id="h-7-1-2-b">B. Allylic alcohols</h4>

      <StructureFeatureCard
        title="Allylic alcohols"
        definition={
          <>
            The –OH group is attached to an <em>sp</em>
            <sup>3</sup> hybridised carbon adjacent to a carbon–carbon double bond (C=C). This
            carbon is called an allylic carbon.
          </>
        }
        structure={
          <>
            <StructureMark tone="warning">
              CH<sub>2</sub>=CH
            </StructureMark>
            <span className="mx-0.5">–</span>
            <StructureMark>
              CH<sub>2</sub>–OH
            </StructureMark>
          </>
        }
        legend={[
          { label: "C=C double bond", tone: "warning" },
          { label: "sp³ carbon carrying –OH", tone: "chemistry" },
        ]}
        note={{
          label: "Substitution degree",
          text: "can be primary, secondary or tertiary depending on the substitution at the allylic carbon.",
        }}
      />

      <h4 id="h-7-1-2-c">C. Benzylic alcohols</h4>

      <StructureFeatureCard
        title="Benzylic alcohols"
        definition={
          <>
            The –OH group is attached to an <em>sp</em>
            <sup>3</sup> hybridised carbon directly adjacent to an aromatic ring.
          </>
        }
        structure={
          <span className="inline-flex items-center gap-1">
            <BenzeneRing tone="warning" bond />
            <StructureMark>
              CH<sub>2</sub>
            </StructureMark>
            <span>OH</span>
          </span>
        }
        structureCaption="Benzene ring attached to –CH₂OH."
        legend={[
          { label: "Aromatic ring", tone: "warning" },
          { label: "sp³ carbon carrying –OH", tone: "chemistry" },
        ]}
        note={{
          label: "Substitution degree",
          text: "can be primary, secondary or tertiary.",
        }}
      />

      <h3 id="h-7-1-3">7.1.3 Compounds Containing an sp² C—OH Bond</h3>

      <p>
        These compounds contain an –OH group bonded directly to an <em>sp</em>
        <sup>2</sup> hybridised carbon atom.
      </p>

      <Sp2HydroxylComparison
        cases={[
          {
            title: "Vinylic alcohols",
            structure: (
              <>
                CH<sub>2</sub>=<StructureMark>CH</StructureMark>–OH
              </>
            ),
            caption: "Vinyl alcohol",
            definition:
              "The –OH group is bonded directly to a carbon–carbon double bond, i.e., to a vinylic carbon.",
          },
          {
            title: "Phenols",
            structure: (
              <span className="inline-flex items-center gap-0.5">
                <BenzeneRing bond vertexDot />
                <span>OH</span>
              </span>
            ),
            caption: "Phenol",
            definition:
              "The –OH group is bonded directly to an aryl carbon of an aromatic ring.",
          },
        ]}
      />

      <h3 id="h-7-1-4">7.1.4 Classification of Ethers</h3>

      <p>
        Ethers are classified based on whether the two alkyl or aryl groups attached to the oxygen
        atom are identical or different.
      </p>

      <EtherClassification
        kinds={[
          {
            title: "Simple / Symmetrical ethers",
            description: "Identical alkyl or aryl groups attached to oxygen.",
            examples: [
              {
                left: (
                  <>
                    CH<sub>3</sub>
                  </>
                ),
                right: (
                  <>
                    CH<sub>3</sub>
                  </>
                ),
              },
              {
                left: (
                  <>
                    C<sub>2</sub>H<sub>5</sub>
                  </>
                ),
                right: (
                  <>
                    C<sub>2</sub>H<sub>5</sub>
                  </>
                ),
              },
            ],
          },
          {
            title: "Mixed / Unsymmetrical ethers",
            description: "Different alkyl or aryl groups attached to oxygen.",
            examples: [
              {
                left: (
                  <>
                    CH<sub>3</sub>
                  </>
                ),
                right: (
                  <>
                    C<sub>2</sub>H<sub>5</sub>
                  </>
                ),
                name: "Ethyl methyl ether",
              },
              {
                left: (
                  <>
                    C<sub>2</sub>H<sub>5</sub>
                  </>
                ),
                right: (
                  <>
                    C<sub>6</sub>H<sub>5</sub>
                  </>
                ),
                name: "Ethyl phenyl ether",
              },
            ],
          },
        ]}
      />

      <h2 id="h-7-2">7.2 Nomenclature of Alcohols and Phenols</h2>

      <h3 id="h-7-2-1">7.2.1 Alcohols</h3>

      <h4 id="h-7-2-1-rules">Naming rules</h4>

      <NamingSystemCards
        systems={[
          {
            label: "Common name system",
            rule: "Alkyl group name + alcohol.",
            example: (
              <>
                CH<sub>3</sub>OH → Methyl alcohol
              </>
            ),
          },
          {
            label: "IUPAC system",
            rule: "Replace the terminal -e of the parent alkane with -ol.",
            example: "Alkane − e + ol = Alkanol",
          },
        ]}
      />

      <NumberedRuleRows
        rules={[
          {
            title: "Numbering",
            detail: "number the parent chain from the end nearest to the –OH group.",
          },
          {
            title: "Polyhydric alcohols",
            detail:
              "retain the terminal -e and add multiplicative suffixes such as -diol or -triol, with appropriate position locants.",
          },
          {
            title: "Cyclic alcohols",
            detail: "use the prefix cyclo-; the carbon bearing –OH is designated C-1.",
          },
        ]}
      />

      <h4 id="h-7-2-1-table">Common and IUPAC names</h4>

      <TableCard
        caption="Table 7.1: Common and IUPAC Names of Some Alcohols"
        pinFirstColumn
        headers={["Compound structure", "Common name", "IUPAC name"]}
        rows={[
          {
            cells: [
              "CH₃OH",
              "Methyl alcohol",
              <strong key="name" className="font-extrabold text-foreground">Methanol</strong>,
            ],
          },
          {
            cells: [
              "CH₃CH₂CH₂OH",
              "n-Propyl alcohol",
              <strong key="name" className="font-extrabold text-foreground">Propan-1-ol</strong>,
            ],
          },
          {
            cells: [
              "(CH₃)₂CHOH",
              "Isopropyl alcohol",
              <strong key="name" className="font-extrabold text-foreground">Propan-2-ol</strong>,
            ],
          },
          {
            cells: [
              "CH₃CH₂CH₂CH₂OH",
              "n-Butyl alcohol",
              <strong key="name" className="font-extrabold text-foreground">Butan-1-ol</strong>,
            ],
          },
          {
            cells: [
              "CH₃CH₂CH(OH)CH₃",
              "sec-Butyl alcohol",
              <strong key="name" className="font-extrabold text-foreground">Butan-2-ol</strong>,
            ],
          },
          {
            cells: [
              "(CH₃)₂CHCH₂OH",
              "Isobutyl alcohol",
              <strong key="name" className="font-extrabold text-foreground">2-Methylpropan-1-ol</strong>,
            ],
          },
          {
            cells: [
              "(CH₃)₃COH",
              "tert-Butyl alcohol",
              <strong key="name" className="font-extrabold text-foreground">2-Methylpropan-2-ol</strong>,
            ],
          },
          {
            cells: [
              "CH₃C(CH₃)₂CH₂OH",
              "Neopentyl alcohol",
              <strong key="name" className="font-extrabold text-foreground">2,2-Dimethylpropan-1-ol</strong>,
            ],
          },
        ]}
      />

      <h4 id="h-7-2-1-polyhydric">Polyhydric alcohols</h4>

      <PolyhydricAlcoholCards
        alcohols={[
          {
            common: "Ethylene glycol",
            iupac: "Ethane-1,2-diol",
            hydroxyls: 2,
            structure: (
              <>
                <StructureMark>HO</StructureMark>–CH<sub>2</sub>–CH<sub>2</sub>–
                <StructureMark>OH</StructureMark>
              </>
            ),
          },
          {
            common: "Glycerol",
            iupac: "Propane-1,2,3-triol",
            hydroxyls: 3,
            structure: (
              <>
                <StructureMark>HO</StructureMark>–CH<sub>2</sub>–CH(
                <StructureMark>OH</StructureMark>)–CH<sub>2</sub>–
                <StructureMark>OH</StructureMark>
              </>
            ),
          },
        ]}
      />

      <h3 id="h-7-2-2">7.2.2 Phenols</h3>

      <h4 id="h-7-2-2-parent">Parent compound</h4>

      <PhenolParentCard
        name="Phenol"
        formula="C₆H₅OH"
        statements={[
          "The simplest hydroxy derivative of benzene.",
          "Both the common name and the accepted IUPAC name.",
        ]}
      />

      <h4 id="h-7-2-2-substituted">Substituted monohydric phenols</h4>

      <p>
        The common name system uses prefixes to indicate the relative positions of substituents.
      </p>

      <PhenolPositionComparison
        positions={[
          { prefix: "o-", name: "Ortho", locants: "1,2", position: 2 },
          { prefix: "m-", name: "Meta", locants: "1,3", position: 3 },
          { prefix: "p-", name: "Para", locants: "1,4", position: 4 },
        ]}
      />

      <h4 id="h-7-2-2-table">Phenols and cresols nomenclature</h4>

      <GroupedNameTable
        groups={[
          {
            label: "Monohydric phenols (phenol and cresols)",
            rows: [
              { structure: "C₆H₅OH", common: "Phenol", iupac: "Phenol" },
              { structure: "o-C₆H₄(CH₃)(OH)", common: "o-Cresol", iupac: "2-Methylphenol" },
              { structure: "m-C₆H₄(CH₃)(OH)", common: "m-Cresol", iupac: "3-Methylphenol" },
              { structure: "p-C₆H₄(CH₃)(OH)", common: "p-Cresol", iupac: "4-Methylphenol" },
            ],
          },
          {
            label: "Polyhydric phenols (benzenediols)",
            rows: [
              {
                structure: "C₆H₄(OH)₂ (1,2-dihydroxy)",
                common: "Catechol",
                iupac: "Benzene-1,2-diol",
              },
              {
                structure: "C₆H₄(OH)₂ (1,3-dihydroxy)",
                common: "Resorcinol",
                iupac: "Benzene-1,3-diol",
              },
              {
                structure: "C₆H₄(OH)₂ (1,4-dihydroxy)",
                common: "Quinol / Hydroquinone",
                iupac: "Benzene-1,4-diol",
              },
            ],
          },
        ]}
      />

      <h2 id="h-7-3">7.3 Structures of Functional Groups</h2>

      <p>
        In alcohols the oxygen of the —OH group is attached to carbon by a σ bond formed by overlap of
        an <em>sp</em>
        <sup>3</sup> orbital of carbon with an <em>sp</em>
        <sup>3</sup> orbital of oxygen. The bond angle in alcohols is slightly less than the tetrahedral
        angle (109°28′) because of repulsion between the unshared electron pairs of oxygen.
      </p>

      <p>
        In phenols the —OH group is attached to an <em>sp</em>
        <sup>2</sup> hybridised carbon of an aromatic ring. The C—O bond length in phenol (136 pm) is
        slightly less than in methanol, because of (i) partial double bond character arising from
        conjugation of the oxygen lone pair with the ring and (ii) the <em>sp</em>
        <sup>2</sup> hybridised state of the carbon bearing oxygen.
      </p>

      <p>
        In ethers the two bond pairs and two lone pairs on oxygen are arranged approximately
        tetrahedrally. The bond angle is slightly greater than tetrahedral because of repulsion between
        the two bulky —R groups, and the C—O bond length (141 pm) is almost the same as in alcohols.
      </p>

      <h2 id="h-7-4">7.4 Alcohols and Phenols</h2>

      <h3 id="h-7-4-1">7.4.1 Preparation of Alcohols</h3>

      <p>Alcohols are prepared through three primary pathways.</p>

      <ProcessCard
        title="Three pathways to alcohols"
        steps={[
          { label: "Addition to alkenes" },
          { label: "Reduction of carbonyl compounds" },
          { label: "Addition of Grignard reagents" },
        ]}
      />

      <h4 id="h-7-4-1-1">1. From alkenes</h4>

      <p>
        <strong>Acid-catalysed hydration.</strong> Alkenes react with water in the presence of an acid
        catalyst to produce alcohols.
      </p>

      <FormulaBlock latex={String.raw`\text{C=C} + \text{H}_2\text{O} \xrightleftharpoons{\text{H}^+} \text{C(H)}-\text{C(OH)}`} />

      <Callout type="important" title="Markovnikov's rule" subjectColor="var(--subject-chemistry)">
        For unsymmetrical alkenes, the –OH group attaches to the carbon having fewer hydrogen atoms.
      </Callout>

      <p>
        <strong>Hydroboration–oxidation.</strong> Diborane (B<sub>2</sub>H<sub>6</sub> or (BH
        <sub>3</sub>)<sub>2</sub>) reacts with alkenes to form trialkylboranes.
      </p>

      <p>
        The trialkylboranes are subsequently oxidised using hydrogen peroxide (H<sub>2</sub>O
        <sub>2</sub>) and aqueous sodium hydroxide (NaOH).
      </p>

      <ul className="my-6 space-y-2 text-[1.03125rem] leading-[1.7] text-foreground/90">
        <li className="flex gap-2.5">
          <span
            aria-hidden
            className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--subject-chemistry)]"
          />
          <span>
            <strong className="font-bold text-foreground">Regioselectivity:</strong> boron adds to the{" "}
            <em>sp</em>
            <sup>2</sup> carbon having the greater number of hydrogen atoms.
          </span>
        </li>
        <li className="flex gap-2.5">
          <span
            aria-hidden
            className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--subject-chemistry)]"
          />
          <span>Produces an anti-Markovnikov alcohol.</span>
        </li>
      </ul>

      <ReactionPathway
        title="Reaction sequence — propene"
        nodes={[
          {
            step: "Step 1",
            title: "First addition",
            equation: String.raw`\text{CH}_3\text{CH=CH}_2 + \text{BH}_3 \rightarrow \text{CH}_3\text{CH}_2\text{CH}_2\text{BH}_2`,
          },
          {
            step: "Step 2",
            title: "Second addition",
            equation: String.raw`\rightarrow (\text{CH}_3\text{CH}_2\text{CH}_2)_2\text{BH}`,
          },
          {
            step: "Step 3",
            title: "Third addition",
            equation: String.raw`\rightarrow (\text{CH}_3\text{CH}_2\text{CH}_2)_3\text{B}`,
            tone: "intermediate",
            outcome: "Trialkylborane",
          },
          {
            step: "Step 4",
            title: "Oxidation",
            equation: String.raw`(\text{CH}_3\text{CH}_2\text{CH}_2)_3\text{B} + 3\text{H}_2\text{O}_2 \xrightarrow{\text{aq. NaOH}} 3\text{CH}_3\text{CH}_2\text{CH}_2\text{OH} + \text{B(OH)}_3`,
            tone: "product",
            outcome: "Propan-1-ol · primary (1°)",
          },
        ]}
      />

      <p>
        <strong>Net outcome.</strong> Anti-Markovnikov addition of water.
      </p>

      <p>Produces primary or unhindered alcohols in excellent yields.</p>

      <FactCard title="Discovery" definition="H. C. Brown — 1979 Nobel Prize." icon="🏅" />

      <ReactionPairCards
        title="Markovnikov hydration vs anti-Markovnikov hydroboration"
        cards={[
          {
            label: "Markovnikov hydration",
            reagent: "H₂O / H⁺",
            description: "–OH attaches to the carbon having fewer hydrogen atoms.",
            substrate: (
              <>
                CH<sub>3</sub>–CH=CH<sub>2</sub>
              </>
            ),
            product: (
              <>
                CH<sub>3</sub>–CH(<StructureMark>OH</StructureMark>)–CH<sub>3</sub>
              </>
            ),
            productName: "Propan-2-ol",
            productMeta: "Secondary (2°)",
            badge: "–OH at C-2",
          },
          {
            label: "Anti-Markovnikov hydroboration",
            reagent: "BH₃, then H₂O₂ / NaOH",
            description: "Boron adds to the sp² carbon having the greater number of hydrogen atoms.",
            substrate: (
              <>
                CH<sub>3</sub>–CH=CH<sub>2</sub>
              </>
            ),
            product: (
              <>
                CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–<StructureMark>OH</StructureMark>
              </>
            ),
            productName: "Propan-1-ol",
            productMeta: "Primary (1°)",
            badge: "–OH at C-1",
          },
        ]}
      />

      <h4 id="h-7-4-1-2">2. From carbonyl compounds</h4>

      <p>
        <strong>Reduction of aldehydes and ketones.</strong> Aldehydes and ketones are reduced to
        alcohols by catalytic hydrogenation or by hydride reducing agents.
      </p>

      <Comparison
        columns={[
          {
            title: "Catalytic hydrogenation",
            children: <p>Finely divided metals: Pt, Pd, Ni.</p>,
          },
          {
            title: "Hydride reducing agents",
            children: (
              <p>
                Sodium borohydride (NaBH<sub>4</sub>) and lithium aluminium hydride (LiAlH
                <sub>4</sub>).
              </p>
            ),
          },
        ]}
      />

      <TableCard
        caption="Product specificity of carbonyl reduction"
        headers={["Starting compound", "General reaction", "Product"]}
        rows={[
          {
            cells: [
              "Aldehyde (RCHO)",
              <Formula key="reaction">{String.raw`\text{RCHO} + \text{H}_2 \xrightarrow{\text{Pd}} \text{RCH}_2\text{OH}`}</Formula>,
              <strong key="name" className="font-extrabold text-foreground">Primary (1°) alcohol</strong>,
            ],
          },
          {
            cells: [
              "Ketone (RCOR′)",
              <Formula key="reaction">{String.raw`\text{RCOR}' \xrightarrow{\text{NaBH}_4} \text{RCH(OH)R}'`}</Formula>,
              <strong key="name" className="font-extrabold text-foreground">Secondary (2°) alcohol</strong>,
            ],
          },
        ]}
      />

      <ReactionPairCards
        title="Catalytic hydrogenation — examples"
        cards={[
          {
            label: "A. Aldehyde → primary alcohol",
            reagent: "H₂ / Ni, Pd or Pt",
            substrate: (
              <>
                CH<sub>3</sub>CHO
              </>
            ),
            product: (
              <>
                CH<sub>3</sub>CH<sub>2</sub>OH
              </>
            ),
            productName: "Ethanol",
            productMeta: "Primary (1°)",
          },
          {
            label: "B. Ketone → secondary alcohol",
            reagent: "H₂ / Ni, Pd or Pt",
            substrate: (
              <>
                CH<sub>3</sub>COCH<sub>3</sub>
              </>
            ),
            product: (
              <>
                CH<sub>3</sub>CH(OH)CH<sub>3</sub>
              </>
            ),
            productName: "Propan-2-ol",
            productMeta: "Secondary (2°)",
          },
        ]}
      />

      <p>
        <strong>Carboxylic acids → alcohols.</strong> Carboxylic acids are directly reduced to primary
        alcohols.
      </p>

      <p>
        The reagent is LiAlH<sub>4</sub>, which produces alcohols in high yields.
      </p>

      <FormulaBlock latex={String.raw`\text{RCOOH} \xrightarrow[\text{(ii) H}_2\text{O}]{\text{(i) LiAlH}_4} \text{RCH}_2\text{OH}`} />

      <FormulaBlock
        label="Ethanoic acid → ethanol"
        latex={String.raw`\text{CH}_3\text{COOH} \xrightarrow{\text{LiAlH}_4} \text{CH}_3\text{CH}_2\text{OH}`}
      />

      <p>
        <strong>Esters → alcohols.</strong> LiAlH<sub>4</sub> is expensive, so commercial production
        first converts carboxylic acids into esters through esterification.
      </p>

      <p>The esters are subsequently reduced by catalytic hydrogenation.</p>

      <ReactionPathway
        orientation="horizontal"
        title="Commercial route — acid → ester → alcohol"
        nodes={[
          { title: "Carboxylic acid", note: "RCOOH + R′OH" },
          {
            step: "Stage 1",
            title: "Ester",
            note: "RCOOR′ + H₂O",
            tone: "intermediate",
          },
          {
            step: "Stage 2",
            title: "Alcohols",
            note: "RCH₂OH + R′OH",
            tone: "product",
          },
        ]}
        links={[
          { label: "Esterification", condition: "H⁺" },
          { label: "Catalytic hydrogenation", condition: "H₂ / catalyst" },
        ]}
      />

      <FormulaBlock
        label="Example"
        latex={String.raw`\begin{aligned} \text{CH}_3\text{COOH} + \text{CH}_3\text{OH} &\xrightarrow{-\text{H}_2\text{O}} \text{CH}_3\text{COOCH}_3 \\ \text{CH}_3\text{COOCH}_3 &\xrightarrow[\text{Ni/Pd/Pt}]{\text{H}_2} \text{CH}_3\text{CH}_2\text{OH} + \text{CH}_3\text{OH} \end{aligned}`}
      />

      <h4 id="h-7-4-1-3">3. From Grignard reagents (RMgX)</h4>

      <p>
        Grignard reagents react with carbonyl compounds to produce alcohols through two stages.
      </p>

      <ReactionPathway
        title="Two-stage Grignard addition"
        nodes={[
          {
            step: "Step 1",
            title: "Nucleophilic addition",
            note: "RMgX attacks the electrophilic carbonyl carbon.",
          },
          {
            title: "Intermediate adduct",
            tone: "intermediate",
          },
          {
            step: "Step 2",
            title: "Alcohol + Mg(OH)X",
            tone: "product",
          },
        ]}
        links={[
          {},
          { label: "Hydrolysis", condition: "H₂O" },
        ]}
      />

      <CarbonylClassTable
        rows={[
          { carbonyl: "Methanal", formula: "HCHO", alcoholClass: "Primary (1°) alcohol" },
          { carbonyl: "Other aldehydes", formula: "RCHO", alcoholClass: "Secondary (2°) alcohol" },
          { carbonyl: "Ketones", formula: "RCOR′", alcoholClass: "Tertiary (3°) alcohol" },
        ]}
      />

      <h3 id="h-7-4-2">7.4.2 Preparation of Phenols</h3>

      <p>
        Phenol, historically known as carbolic acid, was first isolated in the early nineteenth century
        from coal tar.
      </p>

      <p>
        Phenol is now produced synthetically on an industrial scale and prepared in the laboratory
        through four methods.
      </p>

      <h4 id="h-7-4-2-1">1. From haloarenes — Dow&apos;s process</h4>

      <p>
        <strong>Starting compound:</strong> chlorobenzene.
      </p>

      <p>
        <strong>Conditions:</strong> high temperature of 623 K and high pressure of 300 atm.
      </p>

      <ReactionPathway
        orientation="horizontal"
        title="Dow's process"
        nodes={[
          { title: "Chlorobenzene + NaOH" },
          {
            step: "Step 1",
            title: "Sodium phenoxide",
            tone: "intermediate",
          },
          {
            step: "Step 2",
            title: "Phenol + NaCl",
            tone: "product",
          },
        ]}
        links={[
          { label: "Fusion", condition: "623 K · 300 atm" },
          { label: "Acidification", condition: "HCl" },
        ]}
      />

      <Callout type="important" title="Key point" subjectColor="var(--subject-chemistry)">
        The initial product is sodium phenoxide, which gives phenol upon acidification.
      </Callout>

      <h4 id="h-7-4-2-2">2. From benzenesulphonic acid</h4>

      <p>
        <strong>Step 1 — Sulphonation.</strong> Benzene is sulphonated using oleum (fuming sulphuric
        acid, H<sub>2</sub>S<sub>2</sub>O<sub>7</sub>) to produce benzenesulphonic acid.
      </p>

      <p>
        <strong>Step 2 — Fusion and acidification.</strong> Benzenesulphonic acid is heated with molten
        NaOH to form sodium phenoxide.
      </p>

      <p>Acidification produces phenol.</p>

      <ReactionPathway
        title="Benzene → phenol"
        nodes={[
          { title: "Benzene" },
          {
            step: "Stage 1",
            title: "Benzenesulphonic acid",
            note: "Sulphonation with oleum.",
          },
          {
            step: "Stage 2",
            title: "Sodium phenoxide",
            note: "Heated with molten NaOH.",
            tone: "intermediate",
          },
          {
            step: "Stage 3",
            title: "Phenol",
            note: "Acidification.",
            tone: "product",
          },
        ]}
        links={[
          { label: "Sulphonation", condition: "Oleum" },
          { label: "Fusion", condition: "Molten NaOH" },
          { label: "Acidification", condition: "H⁺" },
        ]}
      />

      <h4 id="h-7-4-2-3">3. From diazonium salts</h4>

      <p>
        <strong>Step 1 — Diazotisation.</strong> A primary aromatic amine such as aniline is dissolved
        in cold aqueous mineral acid.
      </p>

      <p>
        It is treated with nitrous acid generated in situ from NaNO<sub>2</sub> + HCl at 273–278 K
        (0–5 °C), producing benzene diazonium chloride.
      </p>

      <p>
        <strong>Step 2 — Hydrolysis.</strong> Benzene diazonium salt is warmed with water to produce
        phenol.
      </p>

      <ReactionPathway
        orientation="horizontal"
        title="Diazotisation and hydrolysis"
        nodes={[
          { title: "Aniline", note: "Cold aqueous mineral acid" },
          {
            step: "Stage 1",
            title: "Benzene diazonium chloride",
            note: "273–278 K (0–5 °C)",
            tone: "intermediate",
          },
          {
            step: "Stage 2",
            title: "Phenol",
            note: "+ N₂ + HCl",
            tone: "product",
          },
        ]}
        links={[
          { label: "Diazotisation", condition: "NaNO₂ + HCl" },
          { label: "Hydrolysis", condition: "Warm H₂O" },
        ]}
      />

      <FormulaBlock
        label="Complete reaction"
        latex={String.raw`\begin{aligned} \text{C}_6\text{H}_5\text{NH}_2 &\xrightarrow[273\text{–}278\ \text{K}]{\text{NaNO}_2 + \text{HCl}} \text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- \\ \text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- &\xrightarrow{\text{Warm H}_2\text{O}} \text{C}_6\text{H}_5\text{OH} + \text{N}_2 + \text{HCl} \end{aligned}`}
      />

      <h4 id="h-7-4-2-4">4. From cumene (industrial production)</h4>

      <p>
        <strong>Cumene</strong> is isopropylbenzene.
      </p>

      <p>Most worldwide production of phenol is carried out using this method.</p>

      <ReactionPathway
        orientation="horizontal"
        title="Cumene route"
        nodes={[
          { title: "Cumene", note: "Isopropylbenzene" },
          {
            step: "Step 1",
            title: "Cumene hydroperoxide",
            tone: "intermediate",
          },
          {
            step: "Step 2",
            title: "Phenol + acetone",
            note: "Acetone: CH₃COCH₃",
            tone: "product",
            outcome: "Acetone · by-product",
            outcomeTone: "byproduct",
          },
        ]}
        links={[
          { label: "Air oxidation", condition: "O₂" },
          { label: "Acid cleavage", condition: "Dil. H₂SO₄" },
        ]}
      />

      <Callout type="important" title="Key point" subjectColor="var(--subject-chemistry)">
        Acetone is obtained as a valuable by-product in large quantities.
      </Callout>

      <h3 id="h-7-4-revision">Quick revision — preparation methods</h3>

      <TableCard
        title="Alcohols"
        headers={["Preparation method", "Key reagent / condition", "Product"]}
        rows={[
          {
            cells: [
              "Acid-catalysed hydration",
              <>H<sub>2</sub>O / H<sup>+</sup></>,
              "Markovnikov alcohol",
            ],
          },
          {
            cells: [
              "Hydroboration–oxidation",
              <>BH<sub>3</sub>, H<sub>2</sub>O<sub>2</sub> / NaOH</>,
              "Anti-Markovnikov alcohol",
            ],
          },
          {
            cells: [
              "Aldehyde reduction",
              <>
                H<sub>2</sub>, NaBH<sub>4</sub> or LiAlH<sub>4</sub>
              </>,
              "Primary alcohol",
            ],
          },
          {
            cells: [
              "Ketone reduction",
              <>
                H<sub>2</sub>, NaBH<sub>4</sub> or LiAlH<sub>4</sub>
              </>,
              "Secondary alcohol",
            ],
          },
          {
            cells: ["Carboxylic acid reduction", <>LiAlH<sub>4</sub></>, "Primary alcohol"],
          },
          {
            cells: ["Ester reduction", <>H<sub>2</sub> / catalyst</>, "Alcohols"],
          },
          {
            cells: [
              "Grignard reaction",
              <>RMgX, followed by hydrolysis</>,
              "1°, 2° or 3° alcohol",
            ],
          },
        ]}
      />

      <TableCard
        title="Phenols"
        headers={["Preparation method", "Key reagent / condition"]}
        rows={[
          {
            cells: ["From haloarenes", "NaOH, 623 K, high pressure; acidification"],
          },
          {
            cells: ["From benzenesulphonic acid", "Oleum → molten NaOH → acidification"],
          },
          {
            cells: [
              "From diazonium salts",
              <>NaNO<sub>2</sub> + HCl, 273–278 K; warm water</>,
            ],
          },
          {
            cells: ["From cumene", "Air oxidation → dilute H₂SO₄"],
          },
        ]}
      />

      <h3 id="h-7-4-3">7.4.3 Physical Properties</h3>

      <h4 id="h-7-4-3-a">1. Boiling Points</h4>

      <TrendCards
        title="General trends"
        cards={[
          {
            title: "A. Carbon chain length",
            from: "Carbon atoms",
            fromDirection: "up",
            to: "Boiling point",
            toDirection: "up",
            points: [
              "Longer carbon chains give stronger van der Waals forces.",
              "Stronger van der Waals forces give higher boiling points.",
            ],
          },
          {
            title: "B. Branching",
            from: "Branching",
            fromDirection: "up",
            to: "Boiling point",
            toDirection: "down",
            points: [
              "Branching reduces the overall surface area.",
              "Weaker van der Waals forces give lower boiling points.",
            ],
          },
        ]}
      />

      <HydrogenBondCard
        label="Intermolecular hydrogen bonding"
        statement="Alcohols and phenols carry hydroxyl groups (–OH), which take part in extensive intermolecular hydrogen bonding."
        comparisonLabel="Boiling points are higher than those of"
        comparisons={["hydrocarbons", "haloalkanes", "haloarenes", "ethers"]}
        comparisonNote="of comparable molar mass."
      />

      <h4 id="h-7-4-3-b">2. Solubility in Water</h4>

      <SolubilityPanel
        sections={[
          {
            label: "Hydrogen bonding with water",
            body: "Alcohols and phenols are soluble in water because they form intermolecular hydrogen bonds with water molecules.",
          },
          {
            label: "Alkyl/aryl group size",
            trend: {
              from: "Alkyl/aryl group size",
              fromDirection: "up",
              to: "Solubility",
              toDirection: "down",
            },
            body: "Increasing the size of the hydrophobic group decreases solubility.",
            emphasis: true,
          },
          {
            label: "Miscibility",
            body: "Lower molecular mass alcohols are miscible with water in all proportions.",
            items: ["Methanol", "Ethanol", "Propanol"],
            itemsLabel: "such as",
          },
        ]}
      />

      <h4 id="h-7-4-3-c">3. Review &amp; Board Exam Questions</h4>

      <BoardQuestionCard number="Q1" tag="Boiling point ordering">
        <p className="text-sm font-semibold leading-relaxed text-foreground">
          Arrange the following compounds in increasing order of boiling points:
        </p>

        <CompoundOrderStrip
          title="Solution"
          compounds={[
            { name: "Ethanol", carbons: "2C" },
            { name: "Propan-1-ol", carbons: "3C" },
            { name: "Butan-2-ol", carbons: "4C" },
            { name: "Butan-1-ol", carbons: "4C" },
          ]}
        />
      </BoardQuestionCard>

      <BoardQuestionCard number="Q2" tag="Highest boiling point">
        <BoardMcq
          question="Which of the following alcohols has the highest boiling point?"
          options={[
            {
              label: "A",
              content: (
                <>
                  CH<sub>3</sub>OH — Methanol
                </>
              ),
            },
            {
              label: "B",
              content: (
                <>
                  CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH — Butan-1-ol
                </>
              ),
              correct: true,
            },
            {
              label: "C",
              content: (
                <>
                  CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub> — Butan-2-ol
                </>
              ),
            },
          ]}
          explanation={{
            heading: "Answer (B) — reasons",
            reasons: [
              "Longest continuous carbon chain.",
              "Maximum surface area.",
              "Stronger van der Waals forces.",
            ],
          }}
        />
      </BoardQuestionCard>

      <h3 id="h-7-4-4">7.4.4 Chemical Reactions</h3>

      <p>
        Alcohols are versatile: they react both as nucleophiles and as electrophiles. The O—H bond
        breaks when an alcohol acts as a nucleophile; the C—O bond breaks when it acts as an
        electrophile (protonated alcohols react this way). On this basis the reactions fall into two
        groups.
      </p>

      <h4 id="h-7-4-4-a">(a) Reactions involving cleavage of the O—H bond</h4>

      <p>
        <strong>1. Acidity of alcohols and phenols.</strong> Alcohols and phenols react with active
        metals such as sodium, potassium and aluminium to give alkoxides/phenoxides and hydrogen.
        Phenols also react with aqueous NaOH to form sodium phenoxide. Both classes are Brønsted acids —
        they donate a proton to a stronger base.
      </p>

      <FormulaBlock latex={String.raw`2\text{ROH} + 2\text{Na} \rightarrow 2\text{RONa} + \text{H}_2\uparrow`} />
      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{OH} + \text{NaOH} \rightarrow \text{C}_6\text{H}_5\text{ONa} + \text{H}_2\text{O}`} />

      <p>
        The acidic character of alcohols comes from the polar O—H bond. An electron-releasing group
        (—CH<sub>3</sub>, —C<sub>2</sub>H<sub>5</sub>) increases electron density on oxygen and reduces
        the polarity of O—H, so acid strength falls in the order{" "}
        <strong>primary &gt; secondary &gt; tertiary</strong>. Alcohols are weaker acids than water:
      </p>

      <FormulaBlock latex={String.raw`\text{C}_2\text{H}_5\text{ONa} + \text{H}_2\text{O} \rightarrow \text{C}_2\text{H}_5\text{OH} + \text{NaOH}`} />

      <p>
        This shows water to be a better proton donor (stronger acid) than an alcohol, and the alkoxide
        ion to be a better proton acceptor than hydroxide — sodium ethoxide is a stronger base than
        NaOH. Alcohols also act as Brønsted bases, because the unshared electron pairs on oxygen make
        them proton acceptors.
      </p>

      <p>
        <strong>Why phenols are stronger acids than alcohols and water.</strong> In phenol the —OH is
        attached to an <em>sp</em>
        <sup>2</sup> carbon of the ring, which acts as an electron-withdrawing group. The higher
        electronegativity of that carbon decreases electron density on oxygen, increasing the polarity
        of O—H and hence ionisation. Moreover, in the alkoxide ion the negative charge is localised on
        oxygen, while in the phenoxide ion it is delocalised over the ring — the phenoxide is therefore
        more stable, which favours ionisation of phenol. Phenol itself has charge separation in its
        resonance structures, so the molecule is less stable than the phenoxide ion.
      </p>

      <TableCard
        caption="Table 7.3: pKa Values of some Phenols and Ethanol"
        headers={["Compound", "Formula", "pKa"]}
        rows={[
          { cells: ["o-Nitrophenol", "o-O₂N–C₆H₄–OH", "7.2"] },
          { cells: ["m-Nitrophenol", "m-O₂N–C₆H₄–OH", "8.3"] },
          { cells: ["p-Nitrophenol", "p-O₂N–C₆H₄–OH", "7.1"] },
          { cells: ["Phenol", "C₆H₅–OH", "10.0"] },
          { cells: ["o-Cresol", "o-CH₃–C₆H₄–OH", "10.2"] },
          { cells: ["m-Cresol", "m-CH₃–C₆H₄–OH", "10.1"] },
          { cells: ["p-Cresol", "p-CH₃–C₆H₄–OH", "10.2"] },
          { cells: ["Ethanol", "C₂H₅OH", "15.9"] },
        ]}
      />

      <Callout type="note" title="Reading a pKa table">
        The greater the pKa, the weaker the acid. From the table, phenol is about a million times more
        acidic than ethanol. Electron-withdrawing groups (—NO<sub>2</sub>) enhance acidity, and the
        effect is most pronounced at <em>ortho</em> and <em>para</em> positions because the negative
        charge is delocalised onto those positions; electron-releasing groups such as alkyl decrease
        acidity, so cresols are less acidic than phenol.
      </Callout>

      <Expandable
        title="Example 7.4 — Increasing order of acid strength"
        variant="example"
      >
        <p>
          Arrange in increasing order of acid strength: propan-1-ol, 2,4,6-trinitrophenol,
          3-nitrophenol, 3,5-dinitrophenol, phenol, 4-methylphenol.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          Propan-1-ol &lt; 4-methylphenol &lt; phenol &lt; 3-nitrophenol &lt; 3,5-dinitrophenol &lt;
          2,4,6-trinitrophenol.
        </p>
      </Expandable>

      <p>
        <strong>2. Esterification.</strong> Alcohols and phenols react with carboxylic acids, acid
        chlorides and acid anhydrides to form esters. The reaction with a carboxylic acid or anhydride
        is carried out with a small amount of concentrated sulphuric acid; it is reversible, so water is
        removed as soon as it forms. With an acid chloride a base (pyridine) is used to neutralise the
        HCl formed and shift the equilibrium to the right.
      </p>

      <FormulaBlock latex={String.raw`\text{R/Ar–OH} + \text{R}'\text{COOH} \rightleftharpoons \text{R/Ar–OCOR}' + \text{H}_2\text{O}`} />
      <FormulaBlock latex={String.raw`\text{R/Ar–OH} + \text{R}'\text{COCl} \xrightarrow{\text{pyridine}} \text{R/Ar–OCOR}' + \text{HCl}`} />

      <p>
        Introducing an acetyl (CH<sub>3</sub>CO) group into an alcohol or phenol is called{" "}
        <strong>acetylation</strong>. Acetylation of salicylic acid produces{" "}
        <strong>aspirin</strong>, which possesses analgesic, anti-inflammatory and antipyretic
        properties.
      </p>

      <h4 id="h-7-4-4-b">(b) Reactions involving cleavage of the C—O bond in alcohols</h4>

      <p>
        These take place only in alcohols; phenols show this type of reaction only with zinc.
      </p>

      <p>
        <strong>1. Reaction with hydrogen halides.</strong> Alcohols react with hydrogen halides to form
        alkyl halides.
      </p>

      <FormulaBlock latex={String.raw`\text{R–OH} + \text{HX} \rightarrow \text{R–X} + \text{H}_2\text{O}`} />

      <p>
        The difference in reactivity of the three classes of alcohols with HCl distinguishes them — the{" "}
        <strong>Lucas test</strong>. Alcohols dissolve in Lucas reagent (conc. HCl + ZnCl
        <sub>2</sub>) while their halides are immiscible and produce turbidity. Tertiary alcohols give
        turbidity immediately, secondary alcohols on heating, and primary alcohols do not give turbidity
        at room temperature.
      </p>

      <p>
        <strong>2. Reaction with phosphorus trihalides.</strong> Alcohols are converted to alkyl
        bromides by reaction with phosphorus tribromide.
      </p>

      <FormulaBlock latex={String.raw`3\text{R–OH} + \text{PBr}_3 \rightarrow 3\text{R–Br} + \text{H}_3\text{PO}_3`} />

      <p>
        <strong>3. Dehydration.</strong> Alcohols lose a molecule of water to form alkenes when treated
        with a protic acid such as concentrated H<sub>2</sub>SO<sub>4</sub> or H<sub>3</sub>PO
        <sub>4</sub>, or with catalysts such as anhydrous ZnCl<sub>2</sub> or alumina. Ethanol is
        dehydrated by heating with concentrated H<sub>2</sub>SO<sub>4</sub> at 443 K.
      </p>

      <FormulaBlock latex={String.raw`\text{CH}_3\text{CH}_2\text{OH} \xrightarrow[\text{443 K}]{\text{conc. H}_2\text{SO}_4} \text{CH}_2\text{=CH}_2 + \text{H}_2\text{O}`} />

      <p>
        Secondary and tertiary alcohols are dehydrated under milder conditions, so the ease of
        dehydration follows <strong>tertiary &gt; secondary &gt; primary</strong>.
      </p>

      <Stepper
        steps={[
          {
            label: "Step 1: Formation of the protonated alcohol",
            description: "The alcohol takes a proton from the acid, giving ROH₂⁺.",
          },
          {
            label: "Step 2: Formation of the carbocation (slowest, rate determining)",
            description: "Water departs from the protonated alcohol, leaving a carbocation. Tertiary carbocations are more stable and easier to form, which is why tertiary alcohols dehydrate most readily.",
          },
          {
            label: "Step 3: Elimination of a proton to give the alkene",
            description: "Loss of H⁺ from the adjacent carbon forms the double bond and releases the acid used in step 1. Removing ethene as it forms drives the equilibrium to the right.",
          },
        ]}
      />

      <p>
        <strong>4. Oxidation.</strong> Oxidation of an alcohol forms a C=O double bond with cleavage of
        an O—H and a C—H bond, so these are also called dehydrogenation reactions. Depending on the
        oxidising agent, a primary alcohol is oxidised to an aldehyde and then to a carboxylic acid.
      </p>

      <TableCard
        caption="Oxidation products and the usual reagents"
        headers={["Alcohol", "Product", "Reagent"]}
        rows={[
          { cells: ["Primary", "Aldehyde (then carboxylic acid)", "CrO₃ in anhydrous medium, or PCC"] },
          { cells: ["Primary", "Carboxylic acid directly", "Acidified KMnO₄ (strong oxidant)"] },
          { cells: ["Secondary", "Ketone", "Chromic anhydride (CrO₃)"] },
          { cells: ["Tertiary", "No oxidation", "—"] },
          { cells: ["Primary/secondary (vapour over Cu at 573 K)", "Aldehyde / ketone", "Heated copper (dehydrogenation)"] },
        ]}
      />

      <p>
        Strong oxidising agents such as acidified potassium permanganate give carboxylic acids directly
        from alcohols. CrO<sub>3</sub> in anhydrous medium is used to isolate aldehydes, and a better
        reagent for oxidising primary alcohols to aldehydes in good yield is{" "}
        <strong>pyridinium chlorochromate (PCC)</strong>, a complex of CrO<sub>3</sub> with pyridine and
        HCl.
      </p>

      <FormulaBlock latex={String.raw`\text{RCH}_2\text{OH} \xrightarrow[\text{anhydrous}]{\text{CrO}_3} \text{RCHO}`} />
      <FormulaBlock latex={String.raw`\text{RCH}_2\text{OH} \xrightarrow{\text{PCC}} \text{RCHO}`} />
      <FormulaBlock latex={String.raw`\text{R}_2\text{CHOH} \xrightarrow{\text{CrO}_3} \text{R}_2\text{CO}`} />

      <p>
        Tertiary alcohols do not undergo oxidation. Under strong conditions (KMnO<sub>4</sub>, elevated
        temperature) C—C bonds cleave as well, giving a mixture of carboxylic acids with fewer carbon
        atoms. Passing vapours of a primary or secondary alcohol over heated copper at 573 K
        dehydrogenates it to an aldehyde or ketone, while tertiary alcohols undergo dehydration.
      </p>

      <Callout type="warning" title="Methanol poisoning">
        Biological oxidation of methanol and ethanol in the body produces the corresponding aldehyde
        followed by the acid. Methanol is oxidised first to methanal and then to methanoic acid, which
        may cause blindness and death. A methanol-poisoned patient is treated with intravenous infusions
        of diluted ethanol: the enzyme that oxidises HCHO to acid is swamped, allowing time for the
        kidneys to excrete methanol.
      </Callout>

      <h4 id="h-7-4-4-c">(c) Reactions of phenols</h4>

      <p>
        The following reactions are shown by phenols only.
      </p>

      <p>
        <strong>1. Electrophilic aromatic substitution.</strong> The —OH group activates the benzene ring
        towards electrophilic substitution and directs the incoming group to <em>ortho</em> and{" "}
        <em>para</em> positions, which become electron-rich through the resonance effect.
      </p>

      <p>
        <strong>(i) Nitration.</strong> With dilute nitric acid at low temperature (298 K) phenol gives a
        mixture of <em>ortho</em> and <em>para</em> nitrophenols. The isomers are separated by steam
        distillation: <em>o</em>-nitrophenol is steam volatile because of intramolecular hydrogen
        bonding, while <em>p</em>-nitrophenol is less volatile because intermolecular hydrogen bonding
        causes association. With concentrated nitric acid phenol gives 2,4,6-trinitrophenol (picric
        acid), though in poor yield; today picric acid is made by first converting phenol to
        phenol-2,4-disulphonic acid with concentrated sulphuric acid and then treating it with
        concentrated nitric acid.
      </p>

      <Callout type="note">
        2,4,6-Trinitrophenol is a strong acid because the three electron-withdrawing —NO<sub>2</sub>{" "}
        groups facilitate release of the hydrogen ion.
      </Callout>

      <p>
        <strong>(ii) Halogenation.</strong> On treating phenol with bromine, different products form
        under different conditions:
      </p>

      <ul>
        <li>
          In solvents of low polarity such as CHCl<sub>3</sub> or CS<sub>2</sub> at low temperature,{" "}
          <strong>monobromophenols</strong> are formed.
        </li>
        <li>
          With <strong>bromine water</strong>, 2,4,6-tribromophenol is formed as a white precipitate.
        </li>
      </ul>

      <p>
        The usual halogenation of benzene needs a Lewis acid such as FeBr<sub>3</sub> to polarise the
        halogen molecule. In phenol the polarisation of bromine occurs even without a Lewis acid,
        because of the highly activating effect of the —OH group.
      </p>

      <Expandable
        title="Example 7.5 — Major products of nitration"
        variant="example"
      >
        <p>
          Write the structures of the major products expected from: (a) mononitration of
          3-methylphenol, (b) dinitration of 3-methylphenol, (c) mononitration of phenyl methanoate.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          The combined influence of the —OH and —CH<sub>3</sub> groups decides the position of the
          incoming group. Both are <em>o,p</em>-directing, so substitution goes to positions activated by
          both groups:
        </p>
        <p>
          (a) Mononitration gives 4-nitro-3-methylphenol (the position <em>para</em> to —OH is also{" "}
          <em>ortho</em> to —CH<sub>3</sub>).
        </p>
        <p>
          (b) Dinitration gives 2,4-dinitro-3-methylphenol — the two positions <em>ortho</em> and{" "}
          <em>para</em> to —OH.
        </p>
        <p>
          (c) In phenyl methanoate the —OH of phenol is acetylated, so only the ester group directs;
          nitration gives mainly the <em>para</em> product, methyl 4-nitrophenyl methanoate.
        </p>
      </Expandable>

      <p>
        <strong>2. Kolbe&apos;s reaction.</strong> The phenoxide ion generated by treating phenol with
        sodium hydroxide is even more reactive than phenol towards electrophilic aromatic substitution,
        so it undergoes substitution with carbon dioxide, a weak electrophile.{" "}
        <strong>Ortho hydroxybenzoic acid (salicylic acid)</strong> is the main product.
      </p>

      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{ONa} + \text{CO}_2 \xrightarrow[\text{4–7 atm}]{\text{400 K}} \xrightarrow{\text{H}^+} o\text{-HOOC–C}_6\text{H}_4\text{OH}`} />

      

      <p>
        <strong>3. Reimer–Tiemann reaction.</strong> Treating phenol with chloroform in the presence of
        sodium hydroxide introduces a —CHO group at the <em>ortho</em> position. The intermediate
        substituted benzal chloride is hydrolysed in alkali to give <strong>salicylaldehyde</strong>.
      </p>

      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{OH} + \text{CHCl}_3 + 3\text{NaOH} \rightarrow o\text{-HOC}_6\text{H}_4\text{CHO} + 3\text{NaCl} + 2\text{H}_2\text{O}`} />

      <p>
        <strong>4. Reaction with zinc dust.</strong> Phenol is converted to benzene on heating with zinc
        dust.
      </p>

      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{OH} + \text{Zn} \xrightarrow{\Delta} \text{C}_6\text{H}_6 + \text{ZnO}`} />

      <p>
        <strong>5. Oxidation.</strong> Oxidation of phenol with chromic acid produces a conjugated
        diketone known as <strong>benzoquinone</strong>. In air, phenols are slowly oxidised to dark
        coloured mixtures containing quinones.
      </p>

      <h2 id="h-7-5">7.5 Some Commercially Important Alcohols</h2>

      <h3 id="h-7-5-1">1. Methanol</h3>

      <p>
        Methanol, CH<sub>3</sub>OH, also known as &apos;wood spirit&apos;, was formerly produced by
        destructive distillation of wood. Today most methanol is made by catalytic hydrogenation of
        carbon monoxide at high pressure and temperature over a ZnO–Cr<sub>2</sub>O<sub>3</sub>{" "}
        catalyst.
      </p>

      <FormulaBlock latex={String.raw`\text{CO} + 2\text{H}_2 \xrightarrow[\text{high } T,\ p]{\text{ZnO–Cr}_2\text{O}_3} \text{CH}_3\text{OH}`} />

      <p>
        Methanol is a colourless liquid boiling at 337 K. It is highly poisonous: ingestion of even
        small quantities can cause blindness, and large quantities cause death. It is used as a solvent
        in paints and varnishes and chiefly for making formaldehyde.
      </p>

      <h3 id="h-7-5-2">2. Ethanol</h3>

      <p>
        Ethanol, C<sub>2</sub>H<sub>5</sub>OH, is obtained commercially by fermentation — the oldest
        method, starting from sugars. Sugar in molasses, sugarcane or fruits such as grapes is converted
        to glucose and fructose (both C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) by the enzyme{" "}
        <strong>invertase</strong>. Glucose and fructose then undergo fermentation under the enzyme{" "}
        <strong>zymase</strong>, found in yeast.
      </p>

      <FormulaBlock latex={String.raw`\text{C}_{12}\text{H}_{22}\text{O}_{11} \xrightarrow{\text{invertase}} \text{C}_6\text{H}_{12}\text{O}_6 + \text{C}_6\text{H}_{12}\text{O}_6`} />
      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_{12}\text{O}_6 \xrightarrow{\text{zymase}} 2\text{C}_2\text{H}_5\text{OH} + 2\text{CO}_2`} />

      <p>
        In wine making, grapes are the source of both sugar and yeast. As grapes ripen the sugar content
        rises and yeast grows on the outer skin; when grapes are crushed the two come into contact and
        fermentation starts. Fermentation takes place under anaerobic conditions and carbon dioxide is
        released. The action of zymase is inhibited once the alcohol content exceeds 14 per cent. If air
        enters the mixture, oxygen oxidises ethanol to ethanoic acid, which destroys the taste of
        alcoholic drinks.
      </p>

      <p>
        Ethanol is a colourless liquid boiling at 351 K, used as a solvent in the paint industry and in
        the preparation of many carbon compounds. Commercial alcohol is made unfit for drinking by
        adding copper sulphate (for colour) and pyridine (a foul-smelling liquid) — this is{" "}
        <strong>denaturation</strong>. Large quantities of ethanol are now obtained by hydration of
        ethene.
      </p>

      <h2 id="h-7-6">7.6 Ethers</h2>

      <h3 id="h-7-6-1">7.6.1 Nomenclature of Ethers</h3>

      <p>
        Common names are derived from the alkyl/aryl groups written as separate words in alphabetical
        order, followed by &apos;ether&apos; (CH<sub>3</sub>OC<sub>2</sub>H<sub>5</sub> is
        ethylmethyl ether). If both groups are the same the prefix &apos;di&apos; is used.
      </p>

      <p>
        In the IUPAC system ethers are regarded as hydrocarbon derivatives in which a hydrogen atom is
        replaced by an —OR or —OAr group. The larger group is chosen as the parent hydrocarbon.
      </p>

      <TableCard
        caption="Table 7.2: Common and IUPAC Names of Some Ethers"
        headers={["Compound", "Common name", "IUPAC name"]}
        rows={[
          { cells: ["CH₃OCH₃", "Dimethyl ether", "Methoxymethane"] },
          { cells: ["C₂H₅OC₂H₅", "Diethyl ether", "Ethoxyethane"] },
          { cells: ["CH₃OCH₂CH₂CH₃", "Methyl n-propyl ether", "1-Methoxypropane"] },
          { cells: ["C₆H₅OCH₃", "Methyl phenyl ether (anisole)", "Methoxybenzene (anisole)"] },
          { cells: ["C₆H₅OCH₂CH₃", "Ethyl phenyl ether (phenetole)", "Ethoxybenzene"] },
          { cells: ["C₆H₅O(CH₂)₆CH₃", "Heptyl phenyl ether", "1-Phenoxyheptane"] },
          { cells: ["CH₃OCH(CH₃)₂", "Methyl isopropyl ether", "2-Methoxypropane"] },
          { cells: ["C₆H₅OCH₂CH₂CH(CH₃)₂", "Phenyl isopentyl ether", "3-Methylbutoxybenzene"] },
          { cells: ["CH₃OCH₂CH₂OCH₃", "—", "1,2-Dimethoxyethane"] },
          { cells: ["2-ethoxy-1,1-dimethylcyclohexane", "—", "2-Ethoxy-1,1-dimethylcyclohexane"] },
        ]}
      />

      <h3 id="h-7-6-2">7.6.2 Preparation of Ethers</h3>

      <p>
        <strong>1. By dehydration of alcohols.</strong> Alcohols undergo dehydration in the presence of
        protic acids (H<sub>2</sub>SO<sub>4</sub>, H<sub>3</sub>PO<sub>4</sub>); whether an alkene or an
        ether is formed depends on the conditions. Ethanol gives ethene with sulphuric acid at 443 K,
        but at 413 K ethoxyethane is the main product.
      </p>

      <FormulaBlock latex={String.raw`2\text{C}_2\text{H}_5\text{OH} \xrightarrow[\text{413 K}]{\text{H}_2\text{SO}_4} \text{C}_2\text{H}_5\text{OC}_2\text{H}_5 + \text{H}_2\text{O}`} />
      <FormulaBlock latex={String.raw`\text{C}_2\text{H}_5\text{OH} \xrightarrow[\text{443 K}]{\text{H}_2\text{SO}_4} \text{CH}_2\text{=CH}_2 + \text{H}_2\text{O}`} />

      <p>
        Formation of the ether is a nucleophilic bimolecular (S<sub>N</sub>2) reaction: an alcohol
        molecule attacks a protonated alcohol. The method is suitable only for ethers with primary alkyl
        groups — the alkyl group must be unhindered and the temperature kept low, otherwise alkene
        formation wins. Dehydration of secondary and tertiary alcohols to ethers is unsuccessful because
        elimination competes with substitution.
      </p>

      <Callout type="note" title="Why not ethyl methyl ether this way?">
        Bimolecular dehydration of a mixture of two alcohols gives a mixture of three ethers (two
        symmetrical and one unsymmetrical), so it is not appropriate for making a single unsymmetrical
        ether such as ethyl methyl ether. Williamson synthesis is used instead.
      </Callout>

      <p>
        <strong>2. Williamson synthesis.</strong> An important laboratory method for symmetrical and
        unsymmetrical ethers: an alkyl halide is allowed to react with a sodium alkoxide.
      </p>

      <FormulaBlock latex={String.raw`\text{R–X} + \text{R}'\text{–ONa} \rightarrow \text{R–O–R}' + \text{NaX}`} important />

      <p>
        The reaction involves S<sub>N</sub>2 attack of the alkoxide ion on a primary alkyl halide, and
        better results are obtained when the halide is primary. With secondary and tertiary halides,
        elimination competes with substitution: alkoxides are not only nucleophiles but strong bases. If
        a tertiary halide is used, an alkene is the only product — CH<sub>3</sub>ONa with (CH
        <sub>3</sub>)<sub>3</sub>C—Br gives exclusively 2-methylpropene. Phenols are also converted to
        ethers by this method, using phenoxide as the phenoxide moiety.
      </p>

      <Expandable
        title="Example 7.6 — Why t-butyl ethyl ether cannot be made this way"
        variant="example"
      >
        <p>
          (i) What would be the major product of CH<sub>3</sub>CH<sub>2</sub>ONa + (CH<sub>3</sub>)
          <sub>3</sub>C—Br? (ii) Write a suitable reaction for the preparation of t-butyl ethyl ether.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          (i) The major product is 2-methylprop-1-ene. Sodium ethoxide is a strong nucleophile as well
          as a strong base, so elimination predominates over substitution.
        </p>
        <p>
          (ii) Use the tertiary alkoxide with a primary halide: (CH<sub>3</sub>)<sub>3</sub>C—ONa +
          CH<sub>3</sub>CH<sub>2</sub>Br → (CH<sub>3</sub>)<sub>3</sub>C—O—CH<sub>2</sub>CH<sub>3</sub>{" "}
          + NaBr.
        </p>
      </Expandable>

      <h3 id="h-7-6-3">7.6.3 Physical Properties</h3>

      <p>
        The C—O bonds in ethers are polar, so ethers have a net dipole moment. That weak polarity does
        not appreciably raise their boiling points, which are comparable to those of alkanes of similar
        molecular mass and much lower than those of alcohols.
      </p>

      <TableCard
        caption="Boiling points of an alkane, an ether and an alcohol of similar mass"
        headers={["Compound", "n-Pentane", "Ethoxyethane", "Butan-1-ol"]}
        rows={[{ cells: ["b.p. / K", "309.1", "307.6", "390"] }]}
      />

      <p>
        The large difference between ethers and alcohols is due to hydrogen bonding in alcohols. Ethers
        are, however, about as miscible with water as alcohols of the same molecular mass — ethoxyethane
        and butan-1-ol dissolve to almost the same extent (7.5 and 9 g per 100 mL of water), while
        pentane is essentially immiscible — because the oxygen of an ether can also form hydrogen bonds
        with water.
      </p>

      <h3 id="h-7-6-4">7.6.4 Chemical Reactions</h3>

      <p>
        <strong>1. Cleavage of the C—O bond.</strong> Ethers are the least reactive of the functional
        groups. Cleavage takes place under drastic conditions with excess hydrogen halide: a dialkyl
        ether gives two alkyl halide molecules.
      </p>

      <FormulaBlock latex={String.raw`\text{R–O–R} + 2\text{HX} \rightarrow 2\text{R–X} + \text{H}_2\text{O}`} />

      <p>
        Alkyl aryl ethers are cleaved at the alkyl–oxygen bond, because the aryl–oxygen bond is more
        stable; the products are phenol and an alkyl halide. Ethers with two different alkyl groups are
        cleaved in the same manner. The reactivity order of hydrogen halides is{" "}
        <strong>HI &gt; HBr &gt; HCl</strong>, and cleavage is carried out with concentrated HI or HBr
        at high temperature.
      </p>

      <Stepper
        steps={[
          {
            label: "Step 1: Protonation of the ether oxygen",
            description: "Concentrated HI (or HBr) is acidic enough to protonate the ether, giving an oxonium ion.",
          },
          {
            label: "Step 2: Attack of the halide ion",
            description: "Iodide, a good nucleophile, attacks the least substituted carbon of the oxonium ion and displaces an alcohol molecule by Sₙ2. With primary or secondary alkyl groups it is the lower alkyl group that becomes the alkyl iodide.",
          },
          {
            label: "Step 3: Reaction of the alcohol with a second HI (when HI is in excess)",
            description: "At high temperature the alcohol reacts with another molecule of HI and is converted to the alkyl iodide, so both alkyl groups end up as iodides.",
          },
        ]}
      />

      <p>
        When one alkyl group is tertiary, that group forms the halide instead, because departure of the
        leaving group creates a stable tertiary carbocation and the reaction follows S<sub>N</sub>1.
      </p>

      <p>
        In anisole, protonation gives the methylphenyl oxonium ion. The O—CH<sub>3</sub> bond is weaker
        than the O—C<sub>6</sub>H<sub>5</sub> bond, because the carbon of the phenyl group is{" "}
        <em>sp</em>
        <sup>2</sup> hybridised and has partial double bond character, so attack by I<sup>−</sup> breaks
        O—CH<sub>3</sub> to give CH<sub>3</sub>I. Phenols do not react further to give halides, since
        the <em>sp</em>
        <sup>2</sup> carbon of phenol cannot undergo the nucleophilic substitution needed.
      </p>

      

      <Expandable
        title="Example 7.7 — Products of heating ethers with HI"
        variant="example"
      >
        <p>Give the major products formed by heating each ether with HI.</p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          Cleavage occurs at the alkyl–oxygen bond, and the smaller/less substituted group becomes the
          iodide (S<sub>N</sub>2). So a dialkyl ether gives an alkyl iodide plus an alcohol, an alkyl
          aryl ether gives an alkyl iodide plus phenol, and with excess HI the alcohol is converted to a
          second molecule of alkyl iodide. Where a tertiary group is present, the tertiary iodide is
          formed by the S<sub>N</sub>1 route.
        </p>
      </Expandable>

      <p>
        <strong>2. Electrophilic substitution.</strong> The alkoxy group (—OR) is <em>ortho, para</em>
        -directing and activates the aromatic ring towards electrophilic substitution in the same way as
        in phenol.
      </p>

      <p>
        <strong>(i) Halogenation.</strong> Anisole undergoes bromination with bromine in ethanoic acid
        even without an FeBr<sub>3</sub> catalyst, because the methoxy group activates the ring. The
        para isomer is obtained in 90% yield.
      </p>

      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{OCH}_3 + \text{Br}_2 \xrightarrow{\text{ethanoic acid}} p\text{-Br–C}_6\text{H}_4\text{OCH}_3 + \text{HBr}`} />

      <p>
        <strong>(ii) Friedel–Crafts reaction.</strong> Anisole undergoes Friedel–Crafts reactions: alkyl
        and acyl groups are introduced at <em>ortho</em> and <em>para</em> positions by reaction with an
        alkyl halide or acyl halide in the presence of anhydrous aluminium chloride.
      </p>

      <p>
        <strong>(iii) Nitration.</strong> Anisole reacts with a mixture of concentrated sulphuric and
        nitric acids to yield a mixture of <em>ortho</em> and <em>para</em> nitroanisole.
      </p>

      <TableCard
        caption="Electrophilic substitution of anisole"
        headers={["Reaction", "Reagents", "Products"]}
        rows={[
          { cells: ["Bromination", "Br₂ in ethanoic acid", "p-Bromoanisole (90%)"] },
          { cells: ["Nitration", "conc. HNO₃ + conc. H₂SO₄", "o- and p-Nitroanisole"] },
          { cells: ["Friedel–Crafts alkylation", "RCl / anhydrous AlCl₃", "o- and p-alkylanisole"] },
          { cells: ["Friedel–Crafts acylation", "RCOCl / anhydrous AlCl₃", "o- and p-acylanisole"] },
        ]}
      />

      <Comparison
        columns={[
          {
            title: "Alcohol",
            children: (
              <>
                <p>—OH on an sp³ carbon.</p>
                <p>Boils high; H-bonded.</p>
                <p>Weakly acidic (pKa ≈ 16).</p>
                <p>O—H and C—O bonds both cleave.</p>
              </>
            ),
          },
          {
            title: "Phenol",
            children: (
              <>
                <p>—OH on an sp² aromatic carbon.</p>
                <p>Boils high; H-bonded.</p>
                <p>More acidic (pKa = 10), dissolves in NaOH.</p>
                <p>Ring activated, o/p-directing; C—O breaks only with Zn.</p>
              </>
            ),
          },
          {
            title: "Ether",
            children: (
              <>
                <p>R—O—R′, no O—H.</p>
                <p>Boils like an alkane; still H-bonds to water.</p>
                <p>Neutral.</p>
                <p>C—O cleaved by conc. HI/HBr.</p>
              </>
            ),
          },
        ]}
      />

      <MistakeCard
        mistake="Using a tertiary alkyl halide in Williamson synthesis and expecting an ether."
        correction="Alkoxides are strong bases too; with a tertiary halide elimination dominates and only the alkene is formed. Pair the alkoxide with a primary halide instead."
        example="CH₃ONa + (CH₃)₃CBr → 2-methylpropene (no ether)."
      />

      <MistakeCard
        mistake="Thinking phenol is acidic because of the ring, and that all phenols are equally acidic."
        correction="Acidity comes from stabilisation of the phenoxide ion. Electron-withdrawing groups at o/p raise acidity (p-nitrophenol pKa 7.1 vs phenol 10.0); alkyl groups lower it (p-cresol 10.2)."
        example="Order: propan-1-ol < p-cresol < phenol < 3-nitrophenol < 3,5-dinitrophenol < picric acid."
      />

      <h2 id="h-7-exercises">Exercises</h2>

      <Expandable title="Exercises" variant="exercise">


      <ExerciseQa
        answersHeading="NCERT Exercise Questions (7.1–7.33)"
        questions={[
          <>
            Write IUPAC names of the following compounds: (i)–(xii), including C<sub>6</sub>H
            <sub>5</sub>—O—C<sub>2</sub>H<sub>5</sub> and C<sub>6</sub>H<sub>5</sub>—O—C<sub>7</sub>H
            <sub>15</sub> (n-).
          </>,
          <>
            Write structures of the compounds whose IUPAC names are as follows: (i)
            2-Methylbutan-2-ol (ii) 1-Phenylpropan-2-ol (iii) 3,5-Dimethylhexane-1,3,5-triol (iv)
            2,3-Diethylphenol (v) 1-Ethoxypropane (vi) 2-Ethoxy-3-methylpentane (vii)
            Cyclohexylmethanol (viii) 3-Cyclohexylpentan-3-ol (ix) Cyclopent-3-en-1-ol (x)
            4-Chloro-3-ethylbutan-1-ol.
          </>,
          <>
            (i) Draw the structures of all isomeric alcohols of molecular formula C<sub>5</sub>H
            <sub>12</sub>O and give their IUPAC names. (ii) Classify these isomers as primary, secondary
            and tertiary alcohols.
          </>,
          <>Explain why propanol has a higher boiling point than the hydrocarbon butane.</>,
          <>
            Alcohols are comparatively more soluble in water than hydrocarbons of comparable molecular
            masses. Explain this fact.
          </>,
          <>What is meant by hydroboration–oxidation reaction? Illustrate it with an example.</>,
          <>
            Give the structures and IUPAC names of monohydric phenols of molecular formula C<sub>7</sub>H
            <sub>8</sub>O.
          </>,
          <>
            While separating a mixture of <em>ortho</em> and <em>para</em> nitrophenols by steam
            distillation, name the isomer which will be steam volatile. Give reason.
          </>,
          <>Give the equations of reactions for the preparation of phenol from cumene.</>,
          <>Write the chemical reaction for the preparation of phenol from chlorobenzene.</>,
          <>Write the mechanism of hydration of ethene to yield ethanol.</>,
          <>
            You are given benzene, conc. H<sub>2</sub>SO<sub>4</sub> and NaOH. Write the equations for
            the preparation of phenol using these reagents.
          </>,
          <>
            Show how you will synthesise: (i) 1-phenylethanol from a suitable alkene (ii)
            cyclohexylmethanol using an alkyl halide by an S<sub>N</sub>2 reaction (iii) pentan-1-ol
            using a suitable alkyl halide.
          </>,
          <>
            Give two reactions that show the acidic nature of phenol. Compare the acidity of phenol with
            that of ethanol.
          </>,
          <>Explain why <em>ortho</em> nitrophenol is more acidic than <em>ortho</em> methoxyphenol.</>,
          <>
            Explain how the —OH group attached to a carbon of the benzene ring activates it towards
            electrophilic substitution.
          </>,
          <>
            Give equations of the following reactions: (i) Oxidation of propan-1-ol with alkaline
            KMnO<sub>4</sub> solution (ii) Bromine in CS<sub>2</sub> with phenol (iii) Dilute HNO
            <sub>3</sub> with phenol (iv) Treating phenol with chloroform in the presence of aqueous
            NaOH.
          </>,
          <>
            Explain the following with an example: (i) Kolbe&apos;s reaction (ii) Reimer–Tiemann
            reaction (iii) Williamson ether synthesis (iv) Unsymmetrical ether.
          </>,
          <>Write the mechanism of acid dehydration of ethanol to yield ethene.</>,
          <>
            How are the following conversions carried out? (i) Propene → Propan-2-ol (ii) Benzyl
            chloride → Benzyl alcohol (iii) Ethyl magnesium chloride → Propan-1-ol (iv) Methyl
            magnesium bromide → 2-Methylpropan-2-ol.
          </>,
          <>
            Name the reagents used in the following reactions: (i) Oxidation of a primary alcohol to
            carboxylic acid (ii) Oxidation of a primary alcohol to aldehyde (iii) Bromination of phenol
            to 2,4,6-tribromophenol (iv) Benzyl alcohol to benzoic acid (v) Dehydration of propan-2-ol
            to propene (vi) Butan-2-one to butan-2-ol.
          </>,
          <>Give reason for the higher boiling point of ethanol in comparison to methoxymethane.</>,
          <>Give IUPAC names of the following ethers.</>,
          <>
            Write the names of reagents and equations for the preparation of the following ethers by
            Williamson&apos;s synthesis: (i) 1-Propoxypropane (ii) Ethoxybenzene (iii)
            2-Methoxy-2-methylpropane (iv) 1-Methoxyethane.
          </>,
          <>
            Illustrate with examples the limitations of Williamson synthesis for the preparation of
            certain types of ethers.
          </>,
          <>
            How is 1-propoxypropane synthesised from propan-1-ol? Write the mechanism of this reaction.
          </>,
          <>
            Preparation of ethers by acid dehydration of secondary or tertiary alcohols is not a suitable
            method. Give reason.
          </>,
          <>
            Write the equation of the reaction of hydrogen iodide with (i) 1-propoxypropane (ii)
            methoxybenzene (iii) benzyl ethyl ether.
          </>,
          <>
            Explain the fact that in aryl alkyl ethers (i) the alkoxy group activates the benzene ring
            towards electrophilic substitution and (ii) it directs the incoming substituents to{" "}
            <em>ortho</em> and <em>para</em> positions in the benzene ring.
          </>,
          <>Write the mechanism of the reaction of HI with methoxymethane.</>,
          <>
            Write equations of the following reactions: (i) Friedel–Crafts reaction — alkylation of
            anisole (ii) Nitration of anisole (iii) Bromination of anisole in ethanoic acid medium (iv)
            Friedel–Crafts acetylation of anisole.
          </>,
          <>Show how you would synthesise the given alcohols from appropriate alkenes.</>,
          <>
            When 3-methylbutan-2-ol is treated with HBr, a rearranged product is obtained. Give a
            mechanism for this reaction. (Hint: the secondary carbocation formed in step II rearranges
            to a more stable tertiary carbocation by a hydride ion shift from the third carbon atom.)
          </>,
        ]}
      />

      <Expandable
        title="Intext 7.7 — Major product of acid catalysed dehydration"
        variant="exercise"
      >
        <p>Predict the major product of acid catalysed dehydration of (i) 1-methylcyclohexanol and (ii) butan-1-ol.</p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>(i) 1-Methylcyclohexene.</p>
        <p>
          (ii) A mixture of but-1-ene and but-2-ene, with but-2-ene the major product because the
          secondary carbocation formed by rearrangement is more stable.
        </p>
      </Expandable>

      <Expandable
        title="Intext 7.9 — Equations for Reimer–Tiemann and Kolbe reactions"
        variant="exercise"
      >
        <p>Write the equations involved in (i) Reimer–Tiemann reaction and (ii) Kolbe&apos;s reaction.</p>
        <p className="mt-3 font-semibold">Answer</p>
        <FormulaBlock latex={String.raw`\text{(i) } \text{C}_6\text{H}_5\text{OH} + \text{CHCl}_3 + 3\text{NaOH} \rightarrow o\text{-HOC}_6\text{H}_4\text{CHO} + 3\text{NaCl} + 2\text{H}_2\text{O}`} />
        <FormulaBlock latex={String.raw`\text{(ii) } \text{C}_6\text{H}_5\text{ONa} + \text{CO}_2 \xrightarrow{400\ \text{K}} o\text{-HOC}_6\text{H}_4\text{COONa} \xrightarrow{\text{H}^+} o\text{-HOC}_6\text{H}_4\text{COOH}`} />
      </Expandable>

      <Expandable
        title="Intext 7.10 — Williamson synthesis of 2-ethoxy-3-methylpentane"
        variant="exercise"
      >
        <p>
          Write the reactions of Williamson synthesis of 2-ethoxy-3-methylpentane starting from ethanol
          and 3-methylpentan-2-ol.
        </p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>
          Convert each alcohol into the required partner: ethanol is converted to ethyl bromide with
          HBr, and 3-methylpentan-2-ol is converted to its sodium alkoxide with sodium metal.
        </p>
        <FormulaBlock latex={String.raw`\text{C}_2\text{H}_5\text{OH} \xrightarrow{\text{HBr}} \text{C}_2\text{H}_5\text{Br}`} />
        <FormulaBlock latex={String.raw`\text{CH}_3\text{CH}_2\text{CH(CH}_3)\text{CH(OH)CH}_3 \xrightarrow{\text{Na}} \text{CH}_3\text{CH}_2\text{CH(CH}_3)\text{CH(ONa)CH}_3`} />
        <FormulaBlock latex={String.raw`\text{C}_2\text{H}_5\text{Br} + \text{CH}_3\text{CH}_2\text{CH(CH}_3)\text{CH(ONa)CH}_3 \rightarrow \text{CH}_3\text{CH}_2\text{CH(CH}_3)\text{CH(OC}_2\text{H}_5)\text{CH}_3 + \text{NaBr}`} />
      </Expandable>
    
      </Expandable>
</>
  );
}
