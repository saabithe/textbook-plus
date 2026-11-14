import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { CarbonylFamilyGrid } from "@/components/content/chemistry/CarbonylFamilyGrid";
import { GreekPositionLadder } from "@/components/content/chemistry/GreekPositionLadder";
import { NamingRuleCards } from "@/components/content/chemistry/NamingRuleCards";
import { PracticeProblemCards } from "@/components/content/chemistry/PracticeProblemCards";
import { GroupedNameTable } from "@/components/content/chemistry/GroupedNameTable";
import { PhysicalStateTable } from "@/components/content/chemistry/PhysicalStateTable";
import { ForceComparisonCards } from "@/components/content/chemistry/ForceComparisonCards";
import { BoilingPointRamp } from "@/components/content/chemistry/BoilingPointRamp";
import { OrderingQuestionCards } from "@/components/content/chemistry/OrderingQuestionCards";
import { SolubilityPairCards } from "@/components/content/chemistry/SolubilityPairCards";
import { RankProgression } from "@/components/content/chemistry/RankProgression";
import { MethodSectionTabs } from "@/components/content/chemistry/MethodSectionTabs";
import { OxidationSplitCards } from "@/components/content/chemistry/OxidationSplitCards";
import { RouteChainCards } from "@/components/content/chemistry/RouteChainCards";
import { PrepMethodCard } from "@/components/content/chemistry/PrepMethodCard";
import { ReactionFormulaCard } from "@/components/content/chemistry/ReactionFormulaCard";
import { ReactionOverviewCard } from "@/components/content/chemistry/ReactionOverviewCard";
import { ReactionPathway } from "@/components/content/chemistry/ReactionPathway";
import { ReactivityOrderBoard } from "@/components/content/chemistry/ReactivityOrderBoard";
import { AdditionOverviewTable } from "@/components/content/chemistry/AdditionOverviewTable";
import { AdditionReactionCard } from "@/components/content/chemistry/AdditionReactionCard";
import { CyanohydrinSpotlight } from "@/components/content/chemistry/CyanohydrinSpotlight";
import { GrignardBranchFlow } from "@/components/content/chemistry/GrignardBranchFlow";
import { AlcoholAdditionPaths } from "@/components/content/chemistry/AlcoholAdditionPaths";
import { CondensationFlow } from "@/components/content/chemistry/CondensationFlow";
import { NhDerivativeTable } from "@/components/content/chemistry/NhDerivativeTable";
import { DnpIdentificationCard } from "@/components/content/chemistry/DnpIdentificationCard";

export default function AldehydesKetonesCarboxylicAcidsChapter() {
  return (
    <>
      <CarbonylFamilyGrid
        lead="The carbonyl group is the core functional group defining every family below."
        families={[
          "Aldehydes",
          "Ketones",
          "Carboxylic acids",
          "Esters",
          "Amides",
          "Acid chlorides",
          "Acid anhydrides",
        ]}
        cards={[
          { name: "Aldehyde", structure: "R–CHO" },
          { name: "Ketone", structure: "R–CO–R′" },
          { name: "Ester", structure: "R–COOR′" },
          { name: "Amide", structure: "R–CONH₂" },
          { name: "Acid chloride", structure: "R–COCl" },
          { name: "Acid anhydride", structure: "(R–CO)₂O" },
        ]}
      />

      <h2 id="h-8-1">8.1 Nomenclature and Structure of the Carbonyl Group</h2>

      <h3 id="h-8-1-1">8.1.1 Nomenclature of Aldehydes and Ketones</h3>

      <p>
        Aldehydes and ketones are the simplest and most fundamental carbonyl compounds. They are named
        using two systems — <strong>common nomenclature</strong> and <strong>IUPAC nomenclature</strong>.
      </p>

      <h4>Common names</h4>

      <h5>Aldehydes</h5>

      <ul>
        <li>
          <strong>Origin</strong> — derived from the common names of the corresponding carboxylic acids.
        </li>
        <li>
          <strong>Change</strong> — the suffix <em>-ic acid</em> is replaced with <em>aldehyde</em>.
        </li>
        <li>
          <strong>Source</strong> — the names reflect Latin or Greek terms associated with their natural
          sources.
        </li>
      </ul>

      <GreekPositionLadder
        title="Aldehyde positions"
        anchor="CHO"
        anchorNote="carbonyl"
        right={[
          { symbol: "α", note: "next to C=O", highlight: true },
          { symbol: "β" },
          { symbol: "γ" },
          { symbol: "δ" },
        ]}
        note="Substituent positions are designated with Greek letters — the α-carbon is the one directly linked to the carbonyl carbon."
      />

      <h5>Ketones</h5>

      <ul>
        <li>
          <strong>Naming</strong> — name the two alkyl or aryl groups attached to the carbonyl group
          separately, then follow with the word <em>ketone</em>.
        </li>
        <li>
          <strong>Positions</strong> — the Greek letters α, α′, β, β′ start from the carbons adjacent to
          the carbonyl carbon.
        </li>
      </ul>

      <GreekPositionLadder
        title="Ketone positions"
        anchor=">C=O"
        anchorNote="carbonyl"
        left={[{ symbol: "β" }, { symbol: "α", highlight: true }]}
        right={[{ symbol: "α′", highlight: true }, { symbol: "β′" }]}
      />

      <Callout type="note" title="Historical common names">
        <ul className="space-y-1.5">
          <li>
            <strong>Dimethyl ketone</strong> is called <em>acetone</em>.
          </li>
          <li>
            <strong>Alkyl phenyl ketones</strong> are named by adding the acyl group as a prefix to{" "}
            <em>phenone</em> — acetophenone, benzophenone.
          </li>
        </ul>
      </Callout>

      <h4>IUPAC nomenclature rules</h4>

      <NamingRuleCards
        rules={[
          {
            label: "A",
            title: "Open-chain aliphatic aldehydes",
            suffix: "–al",
            rule: "Replace the terminal -e of the parent alkane with -al.",
            numbering: "Numbering always begins from the aldehyde carbon — CHO carbon = C-1.",
            equation: String.raw`\text{Alkane} - \text{e} + \text{al} = \text{Alkanal}`,
          },
          {
            label: "B",
            title: "Open-chain aliphatic ketones",
            suffix: "–one",
            rule: "Replace the terminal -e of the parent alkane with -one.",
            numbering: "Number the chain from the end nearer to the carbonyl group.",
            equation: String.raw`\text{Alkane} - \text{e} + \text{one} = \text{Alkanone}`,
          },
          {
            label: "C",
            title: "Cyclic ketones",
            rule: "The carbonyl carbon of the ring is designated as C-1.",
          },
          {
            label: "D",
            title: "Ring-attached aldehydes",
            suffix: "carbaldehyde",
            rule: "When the –CHO group is attached directly to a ring, use the suffix carbaldehyde.",
            numbering: "Ring numbering starts from the carbon bearing –CHO.",
            example: "Benzenecarbaldehyde — accepted IUPAC name, benzaldehyde.",
          },
          {
            label: "E",
            title: "Polycarbaldehydes",
            suffix: "carbaldehyde",
            rule: "When three or more –CHO groups are attached to an unbranched carbon chain, use the prefix carbaldehyde.",
            example: "Propane-1,2,3-tricarbaldehyde.",
            wide: true,
          },
        ]}
      />

      <h4>Common and IUPAC names of aldehydes</h4>

      <GroupedNameTable
        groups={[
          {
            label: "Simple aliphatic aldehydes",
            rows: [
              { structure: "HCHO", common: "Formaldehyde", iupac: "Methanal" },
              {
                structure: (
                  <>
                    CH<sub>3</sub>CHO
                  </>
                ),
                common: "Acetaldehyde",
                iupac: "Ethanal",
              },
              {
                structure: (
                  <>
                    CH<sub>3</sub>CH<sub>2</sub>CHO
                  </>
                ),
                common: "Propionaldehyde",
                iupac: "Propanal",
              },
              {
                structure: (
                  <>
                    CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO
                  </>
                ),
                common: "Butyraldehyde",
                iupac: "Butanal",
              },
              {
                structure: (
                  <>
                    CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CHO
                  </>
                ),
                common: "Valeraldehyde",
                iupac: "Pentanal",
              },
              {
                structure: (
                  <>
                    (CH<sub>3</sub>)<sub>2</sub>CHCHO
                  </>
                ),
                common: "Isobutyraldehyde",
                iupac: "2-Methylpropanal",
              },
              {
                structure: (
                  <>
                    CH<sub>2</sub>=CHCHO
                  </>
                ),
                common: "Acrolein",
                iupac: "Prop-2-enal",
              },
            ],
          },
          {
            label: "Aromatic and substituted aldehydes",
            rows: [
              {
                structure: (
                  <>
                    C<sub>6</sub>H<sub>5</sub>CHO
                  </>
                ),
                common: "Benzaldehyde",
                iupac: "Benzaldehyde",
              },
              {
                structure: (
                  <>
                    C<sub>6</sub>H<sub>4</sub>(CHO)<sub>2</sub> (1,2-)
                  </>
                ),
                common: "Phthaldehyde",
                iupac: "Benzene-1,2-dicarbaldehyde",
              },
              {
                structure: (
                  <>
                    C<sub>6</sub>H<sub>4</sub>(OH)(CHO)
                  </>
                ),
                common: "Salicylaldehyde",
                iupac: "2-Hydroxybenzaldehyde",
              },
              {
                structure: "—",
                common: "Vanillin",
                iupac: "4-Hydroxy-3-methoxybenzaldehyde",
              },
              {
                structure: (
                  <>
                    C<sub>6</sub>H<sub>5</sub>CH=CHCHO
                  </>
                ),
                common: "Cinnamaldehyde",
                iupac: "—",
              },
            ],
          },
        ]}
      />

      <h4>Common names of ketones</h4>

      <GroupedNameTable
        emphasis="common"
        rows={[
          {
            structure: (
              <>
                CH<sub>3</sub>COCH<sub>3</sub>
              </>
            ),
            common: "Acetone",
            iupac: "Propanone",
          },
          {
            structure: (
              <>
                C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub>
              </>
            ),
            common: "Acetophenone / Hypnone",
            iupac: "Acetophenone",
          },
          {
            structure: (
              <>
                C<sub>6</sub>H<sub>5</sub>COC<sub>6</sub>H<sub>5</sub>
              </>
            ),
            common: "Benzophenone",
            iupac: "Benzophenone",
          },
          {
            structure: (
              <>
                CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>
              </>
            ),
            common: "Methyl n-propyl ketone",
            iupac: "Pentan-2-one",
          },
          {
            structure: (
              <>
                (CH<sub>3</sub>)<sub>2</sub>C=CHCOCH<sub>3</sub>
              </>
            ),
            common: "Mesityl oxide",
            iupac: "4-Methylpent-3-en-2-one",
          },
        ]}
      />

      <h3 id="h-8-1-practice">Practice — IUPAC Names</h3>

      <h4>Aldehydes</h4>

      <PracticeProblemCards
        problems={[
          {
            structure: String.raw`\text{CH}_3\text{–CH}_2\text{–CH}_2\text{–CH(Br)–CH}_2\text{–CH}_2\text{–CHO}`,
            answer: "4-Bromo-3-methylheptanal",
            flag: "The displayed structure has seven carbons including the aldehyde carbon and a bromine substituent, but no methyl substituent is visible — verify the supplied name.",
          },
          {
            structure: String.raw`\text{CH}_3\text{–CH}_2\text{–CO–CH}_2\text{–CHO}`,
            answer: "3-Oxopentanal",
          },
          {
            structureNode: (
              <p className="text-sm leading-relaxed text-foreground/85">
                Nitro group at the 4-position of a benzene ring containing an aldehyde group (–CHO).
              </p>
            ),
            answer: "4-Nitrobenzaldehyde",
          },
        ]}
      />

      <h4>Ketones</h4>

      <PracticeProblemCards
        problems={[
          {
            structureNode: (
              <svg
                aria-hidden
                viewBox="0 0 150 132"
                className="mx-auto h-[6.5rem] w-[7.4rem] text-foreground/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="66,40 102.1,66.3 88.3,108.7 43.7,108.7 29.9,66.3" />
                <line x1="62.5" y1="38" x2="62.5" y2="16" />
                <line x1="69.5" y1="38" x2="69.5" y2="16" />
                <line x1="88.3" y1="108.7" x2="102.4" y2="128.1" />
                <text
                  x="66"
                  y="11"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="currentColor"
                  stroke="none"
                >
                  O
                </text>
                <text
                  x="105"
                  y="131"
                  fontSize="11"
                  fontWeight="700"
                  fill="currentColor"
                  stroke="none"
                >
                  CH3
                </text>
              </svg>
            ),
            answer: "3-Methylcyclopentanone",
          },
          {
            structure: String.raw`\text{CH}_3\text{–CH(CH}_3\text{)–CO–CH(CH}_3\text{)–CH}_3`,
            answer: "2,4-Dimethylpentan-3-one",
          },
          {
            structure: String.raw`\text{CH}_3\text{–CH=CH–CO–CH}_3`,
            answer: "Pent-3-en-2-one",
          },
          {
            structure: String.raw`\text{CH}_3\text{–C(CH}_3\text{)=CH–CO–CH}_3`,
            answer: "4-Methylpent-3-en-2-one",
            answerNote: "Common name: mesityl oxide.",
          },
        ]}
      />

      <h3 id="h-8-1-2">8.1.2 Structure of the Carbonyl Group</h3>

      <ul>
        <li>
          The carbonyl carbon is <strong>sp<sup>2</sup>-hybridised</strong> and forms three
          sigma (σ) bonds.
        </li>
        <li>
          The fourth valence electron of carbon remains in its p-orbital and forms a{" "}
          <strong>π-bond</strong> with oxygen by overlap with a p-orbital of oxygen.
        </li>
        <li>Oxygen also has two non-bonding electron pairs.</li>
        <li>
          The carbonyl carbon and the three atoms attached to it lie in the same plane, with
          the π-electron cloud above and below it.
        </li>
        <li>Bond angles are approximately <strong>120°</strong> — a trigonal coplanar structure.</li>
      </ul>

      <Callout type="important" title="Where the polarity comes from">
        The carbon–oxygen double bond is <strong>polarised</strong> because oxygen is more
        electronegative than carbon. Hence the carbonyl <strong>carbon is electrophilic
        (a Lewis acid)</strong> and the carbonyl <strong>oxygen is nucleophilic (a Lewis
        base)</strong>. Carbonyl compounds have substantial dipole moments and are more
        polar than ethers. The high polarity is explained by resonance between a neutral
        structure and a dipolar structure:
        <FormulaBlock
          latex={String.raw`\text{>C=O} \ \longleftrightarrow \ \text{>C}^{+}-\text{O}^{-}`}
          label="Neutral form ↔ dipolar form"
        />
      </Callout>

      <h2 id="h-8-2">8.2 Preparation of Aldehydes and Ketones</h2>

      <MethodSectionTabs
        label="Preparation methods"
        panes={[
          {
            id: "h-8-2-common",
            numeral: "I",
            label: "Common methods",
            caption: "Oxidation, dehydrogenation, from hydrocarbons",
            accent: "chemistry",
            content: (
              <>
                <Expandable title="Oxidation of alcohols">
                  <p>
                    Oxidation of alcohols produces different carbonyl compounds
                    depending on the type of alcohol.
                  </p>

                  <OxidationSplitCards
                    title="Primary and secondary alcohols"
                    cards={[
                      {
                        alcoholClass: "Primary alcohol (1°)",
                        product: "Aldehyde",
                        general: String.raw`1^{\circ}\ \text{Alcohol} \xrightarrow{\text{Oxidation}} \text{Aldehyde}`,
                        example: String.raw`\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{OH} \xrightarrow{\text{PCC}} \text{CH}_3\text{CH}_2\text{CH}_2\text{CHO}`,
                        exampleName: "Butan-1-ol → Butanal",
                        tone: "aldehyde",
                      },
                      {
                        alcoholClass: "Secondary alcohol (2°)",
                        product: "Ketone",
                        general: String.raw`2^{\circ}\ \text{Alcohol} \xrightarrow{\text{Oxidation}} \text{Ketone}`,
                        example: String.raw`\text{CH}_3\text{CH}_2\text{CH(OH)CH}_3 \xrightarrow{\text{CrO}_3} \text{CH}_3\text{COCH}_2\text{CH}_3`,
                        exampleName: "Butan-2-ol → Butan-2-one",
                        tone: "ketone",
                      },
                    ]}
                  />
                </Expandable>

                <Expandable title="Dehydrogenation of alcohols">
                  <ul>
                    <li>
                      <strong>Removal of hydrogen</strong> using metallic
                      catalysts.
                    </li>
                    <li>
                      Suitable for <strong>volatile alcohols</strong>.
                    </li>
                    <li>
                      Applied <strong>industrially</strong>.
                    </li>
                  </ul>

                  <RouteChainCards
                    title="Dehydrogenation over a heated metal"
                    conditions={[
                      { label: "Catalysts", value: "Ag or Cu" },
                      { label: "Conditions in examples", value: "Cu / 573 K" },
                    ]}
                    chains={[
                      {
                        label: "Primary alcohol (1°)",
                        badge: "→ Aldehyde",
                        stages: [
                          {
                            title: "General reaction",
                            equation: String.raw`\text{R–CH}_2\text{OH} \xrightarrow{-\text{H}_2} \text{R–CHO}`,
                          },
                          {
                            title: "Ethanol",
                            equation: String.raw`\text{CH}_3\text{CH}_2\text{OH} \xrightarrow{\text{Cu/573 K}} \text{CH}_3\text{CHO}`,
                            note: "Ethanal",
                            tone: "product",
                          },
                        ],
                      },
                      {
                        label: "Secondary alcohol (2°)",
                        badge: "→ Ketone",
                        stages: [
                          {
                            title: "Propan-2-ol",
                            equation: String.raw`\text{CH}_3\text{CH(OH)CH}_3 \xrightarrow{\text{Cu/573 K}} \text{CH}_3\text{COCH}_3`,
                            note: "Propanone (acetone)",
                            tone: "product",
                          },
                        ],
                      },
                    ]}
                  />
                </Expandable>

                <Expandable title="Ozonolysis of alkenes">
                  <ul>
                    <li>
                      <strong>Cleavage of the C=C double bond.</strong>
                    </li>
                    <li>
                      <strong>Followed by reduction</strong> using Zn / H
                      <sub>2</sub>O.
                    </li>
                    <li>
                      Produces <strong>aldehydes, ketones or a mixture</strong>,
                      depending on the substitution pattern of the alkene.
                    </li>
                  </ul>

                  <ReactionPathway
                    orientation="horizontal"
                    title="Alkene → carbonyl"
                    nodes={[
                      {
                        title: "But-2-ene",
                        note: "CH₃–CH=CH–CH₃",
                      },
                      {
                        title: "Ozonolysis",
                        note: "O₃ cleaves the C=C double bond.",
                      },
                      {
                        title: "Reduction",
                        note: "Zn / H₂O",
                      },
                      {
                        title: "2 × Ethanal",
                        tone: "product",
                        equation: String.raw`2\,\text{CH}_3\text{CHO}`,
                      },
                    ]}
                  />

                  <FormulaBlock
                    latex={String.raw`\text{CH}_3\text{–CH=CH–CH}_3 \xrightarrow[\text{Zn/H}_2\text{O}]{\text{O}_3} 2\,\text{CH}_3\text{CHO}`}
                    label="But-2-ene → two molecules of ethanal"
                  />
                </Expandable>

                <Expandable title="Hydration of alkynes">
                  <RouteChainCards
                    title="Ethyne and other alkynes"
                    conditions={[
                      {
                        label: "Reagents",
                        value: "H₂O / H₂SO₄ / HgSO₄",
                      },
                    ]}
                    chains={[
                      {
                        label: "Ethyne",
                        badge: "→ Ethanal",
                        stages: [
                          { title: "Ethyne" },
                          {
                            title: "Unstable enol",
                            via: "Hydration",
                            tone: "intermediate",
                          },
                          {
                            title: "Ethanal",
                            via: "Keto–enol tautomerism",
                            equation: String.raw`\text{CH}_3\text{CHO}`,
                            note: "Acetaldehyde",
                            tone: "product",
                          },
                        ],
                      },
                      {
                        label: "Other alkynes",
                        badge: "→ Ketones",
                        stages: [
                          { title: "Other alkynes" },
                          {
                            title: "Ketone",
                            via: "Hydration",
                            note: "Propyne → propanone (acetone)",
                            tone: "product",
                          },
                        ],
                      },
                    ]}
                    footnote={
                      <>
                        <strong>Keto–enol tautomerism</strong> converts the
                        unstable enol into ethanal.
                      </>
                    }
                  />
                </Expandable>
              </>
            ),
          },
          {
            id: "h-8-2-aldehydes",
            numeral: "II",
            label: "Aldehydes only",
            caption: "Rosenmund, Stephen, DIBAL-H, toluene, Gattermann–Koch",
            accent: "warning",
            content: (
              <>
                <h3>From acid chlorides</h3>

                <PrepMethodCard
                  title="Rosenmund reduction"
                  tag="Named reaction"
                  zones={[
                    {
                      label: "Reaction",
                      equations: [
                        {
                          latex: String.raw`\text{R–COCl} + \text{H}_2 \xrightarrow{\text{Pd/BaSO}_4} \text{R–CHO} + \text{HCl}`,
                        },
                      ],
                    },
                    {
                      label: "Catalyst & function",
                      items: [
                        "Palladium on barium sulfate (Pd/BaSO₄).",
                        "A poisoned palladium catalyst.",
                        "Prevents over-reduction of the aldehyde to the alcohol.",
                        "Also identified as Lindlar's catalyst.",
                      ],
                    },
                    {
                      label: "Limitation",
                      items: [
                        "Formaldehyde (HCHO) cannot be prepared by this method.",
                        "Formyl chloride (HCOCl) is unstable at room temperature.",
                      ],
                      tone: "warning",
                    },
                  ]}
                />

                <h3>From nitriles and esters</h3>

                <ReactionPathway
                  title="Stephen's reduction"
                  nodes={[
                    {
                      step: "Step 1",
                      title: "Nitrile + SnCl₂ / HCl",
                      equation: String.raw`\text{R–CN} + \text{SnCl}_2 + \text{HCl} \longrightarrow \text{R–CH=NH}`,
                      note: (
                        <>
                          Example: CH<sub>3</sub>C≡N + SnCl<sub>2</sub> + HCl →
                          CH<sub>3</sub>CH=NH
                        </>
                      ),
                    },
                    {
                      step: "Intermediate",
                      title: "R–CH=NH",
                      tone: "intermediate",
                    },
                    {
                      step: "Step 2",
                      title: "Aldehyde",
                      equation: String.raw`\text{R–CH=NH} \xrightarrow{\text{H}_3\text{O}^+} \text{R–CHO}`,
                      tone: "product",
                    },
                  ]}
                  links={[
                    { label: "Reduction" },
                    { label: "Hydrolysis", condition: "H₃O⁺" },
                  ]}
                />

                <PrepMethodCard
                  title="Reduction using DIBAL-H"
                  tag="Selective reduction"
                  principle={
                    <>
                      Diisobutylaluminium hydride — AlH(i-Bu)<sub>2</sub>.
                    </>
                  }
                  zones={[
                    {
                      label: "Nitriles → aldehydes",
                      equations: [
                        {
                          latex: String.raw`\text{R–CN} \xrightarrow{\text{DIBAL-H}} \text{R–CHO}`,
                          label: "General reaction",
                        },
                        {
                          latex: String.raw`\text{CH}_3\text{CH}_2\text{CN} \xrightarrow{\text{DIBAL-H}} \text{CH}_3\text{CH}_2\text{CHO}`,
                          label: "Example",
                        },
                      ],
                    },
                    {
                      label: "Selectivity",
                      text: "DIBAL-H leaves double bonds intact.",
                      equations: [
                        {
                          latex: String.raw`\text{CH}_2\text{=CH–CH}_2\text{–CH}_2\text{–CN} \xrightarrow{\text{DIBAL-H}} \text{CH}_2\text{=CH–CH}_2\text{–CH}_2\text{–CHO}`,
                        },
                      ],
                      tone: "highlight",
                    },
                    {
                      label: "Esters → aldehydes",
                      equations: [
                        {
                          latex: String.raw`\text{R–COO–R}' \xrightarrow{\text{DIBAL-H}} \text{R–CHO}`,
                        },
                      ],
                    },
                  ]}
                />

                <h3>From toluene</h3>

                <ReactionPathway
                  orientation="horizontal"
                  title="Etard's reaction"
                  nodes={[
                    { title: "Toluene" },
                    { title: "Chromium complex", tone: "intermediate" },
                    { title: "Benzaldehyde", tone: "product" },
                  ]}
                  links={[
                    { label: "Oxidation", condition: "CrO₂Cl₂ / CS₂" },
                    { label: "Hydrolysis", condition: "H₃O⁺" },
                  ]}
                />

                <ReactionPathway
                  orientation="horizontal"
                  title="Side-chain chlorination"
                  nodes={[
                    { title: "Toluene" },
                    { title: "Benzal chloride", tone: "intermediate" },
                    { title: "Benzaldehyde", tone: "product" },
                  ]}
                  links={[
                    { label: "Chlorination", condition: "Cl₂ / hν" },
                    { label: "Hydrolysis", condition: "H₂O, 373 K" },
                  ]}
                />

                <ReactionPathway
                  orientation="horizontal"
                  title="Chromic anhydride (CrO₃)"
                  nodes={[
                    { title: "Toluene", note: "Treated with CrO₃" },
                    { title: "Benzylidene diacetate", tone: "intermediate" },
                    { title: "Benzaldehyde", tone: "product" },
                  ]}
                  links={[
                    { label: "Acetic anhydride" },
                    { label: "Hydrolysis", condition: "H₃O⁺" },
                  ]}
                />

                <h3>From benzene</h3>

                <ReactionFormulaCard
                  title="Gattermann–Koch reaction"
                  tag="Named reaction"
                  equation={String.raw`\text{Benzene} \xrightarrow[\text{AlCl}_3,\ \text{CuCl}]{\text{CO},\ \text{HCl}} \text{Benzaldehyde}`}
                  reagentTitle="Reagents"
                  reagents={[
                    { name: "Carbon monoxide", formula: "CO" },
                    { name: "Hydrogen chloride", formula: "HCl" },
                    {
                      name: "Anhydrous aluminium chloride",
                      formula: "AlCl₃",
                    },
                    { name: "Cuprous chloride", formula: "CuCl" },
                  ]}
                />
              </>
            ),
          },
          {
            id: "h-8-2-ketones",
            numeral: "III",
            label: "Ketones only",
            caption: "Dialkylcadmium, nitriles, Friedel–Crafts acylation",
            accent: "ink",
            content: (
              <>
                <h3>From acid chlorides</h3>

                <PrepMethodCard
                  title="Reaction with dialkylcadmium"
                  tag="R′₂Cd"
                  zones={[
                    {
                      label: "General reaction",
                      equations: [
                        {
                          latex: String.raw`2\,\text{R–COCl} + \text{R}'_2\text{Cd} \longrightarrow 2\,\text{R–CO–R}' + \text{CdCl}_2`,
                        },
                      ],
                    },
                    {
                      label: "Example",
                      equations: [
                        {
                          latex: String.raw`2\,\text{CH}_3\text{CH}_2\text{COCl} + (\text{CH}_3)_2\text{Cd} \longrightarrow 2\,\text{CH}_3\text{CH}_2\text{COCH}_3 + \text{CdCl}_2`,
                        },
                      ],
                    },
                    {
                      label: "Preparation of dialkylcadmium",
                      items: [
                        "Cadmium chloride (CdCl₂) reacts with a Grignard reagent (RMgX).",
                        "The product is dialkylcadmium.",
                      ],
                      tone: "quiet",
                    },
                  ]}
                />

                <h3>From nitriles</h3>

                <ReactionPathway
                  title="Nitrile → ketone"
                  nodes={[
                    { title: "Nitrile" },
                    { title: "Grignard reagent", tone: "intermediate" },
                    { title: "Acid hydrolysis" },
                    { title: "Ketone", tone: "product" },
                  ]}
                />

                <h3>From benzene or substituted benzenes</h3>

                <ReactionOverviewCard
                  name="Friedel–Crafts Acylation Reaction"
                  tag="Acylation"
                  reactants={[
                    "Benzene or substituted benzenes",
                    "Acyl chloride or acid anhydride",
                  ]}
                  catalyst="Anhydrous aluminium chloride (AlCl₃)"
                  product="Aromatic ketones"
                />
              </>
            ),
          },
        ]}
      />

      <h2 id="h-8-3">8.3 Physical Properties of Aldehydes and Ketones</h2>

      <h3 id="h-8-3-state">Physical state at room temperature</h3>

      <PhysicalStateTable
        rows={[
          { compound: "Methanal", formula: "HCHO", state: "Gas", highlight: true },
          { compound: "Ethanal", formula: "CH₃CHO", state: "Volatile liquid", highlight: true },
          { compound: "Higher aldehydes and ketones", state: "Liquids or solids" },
        ]}
      />

      <h3 id="h-8-3-boiling">Boiling point trends and intermolecular forces</h3>

      <h4>General boiling point order</h4>

      <RankProgression
        orientation="inline"
        direction="ascending"
        title="Boiling point order"
        items={[
          { label: "Hydrocarbon" },
          { label: "Ether" },
          { label: "Aldehyde" },
          { label: "Ketone" },
          { label: "Alcohol" },
        ]}
      />

      <h4>Reason — intermolecular forces</h4>

      <ForceComparisonCards
        cards={[
          {
            title: "Dipole–dipole interactions",
            direction: "higher",
            against: ["Hydrocarbons", "Ethers"],
            statement:
              "Aldehydes and ketones have higher boiling points than hydrocarbons and ethers of comparable molecular masses.",
            reason: "The molecules are held by dipole–dipole interactions.",
            tone: "higher",
          },
          {
            title: "Hydrogen bonding",
            direction: "lower",
            against: ["Alcohols"],
            statement:
              "They have lower boiling points than alcohols of similar molecular masses.",
            reason: "They cannot form intermolecular hydrogen bonds among themselves.",
            tone: "lower",
          },
        ]}
      />

      <h4>Comparative boiling points</h4>

      <BoilingPointRamp
        massRange="Molar mass ≈ 58–60 g mol⁻¹"
        rows={[
          {
            compound: "n-Butane",
            family: "Alkane",
            mass: "58",
            boiling: "273 K",
            kelvin: 273,
          },
          {
            compound: "Methoxyethane",
            family: "Ether",
            mass: "60",
            boiling: "281 K",
            kelvin: 281,
          },
          {
            compound: "Propanal",
            family: "Aldehyde",
            mass: "58",
            boiling: "322 K",
            kelvin: 322,
          },
          {
            compound: "Acetone (propanone)",
            family: "Ketone",
            mass: "58",
            boiling: "329 K",
            kelvin: 329,
          },
          {
            compound: "Propan-1-ol",
            family: "Alcohol",
            mass: "60",
            boiling: "370 K",
            kelvin: 370,
            highlight: true,
          },
        ]}
        axisLabel="Increasing boiling point →"
      />

      <h4>Board-style boiling point ordering</h4>

      <OrderingQuestionCards
        questions={[
          {
            label: "Ordering 1",
            prompt: "Arrange in increasing order of boiling point",
            given: [
              { label: "(a)", compound: "CH₃CH₂CH₂CH₃", family: "Alkane" },
              { label: "(b)", compound: "CH₃CH₂CH₂CH₂OH", family: "Alcohol" },
              { label: "(c)", compound: "CH₃CH₂CH₂CHO", family: "Aldehyde" },
              { label: "(d)", compound: "CH₃COCH₂CH₃", family: "Ketone" },
            ],
            answer: "(a) < (c) < (d) < (b)",
            answerNote: "Alkane < aldehyde < ketone < alcohol",
          },
          {
            label: "Ordering 2",
            prompt: "Molar mass ≈ 72–74",
            answer: "n-Pentane < Ethoxyethane < Butanal < Butan-1-ol",
          },
        ]}
      />

      <h3 id="h-8-3-solubility">Solubility in water</h3>

      <SolubilityPairCards
        cards={[
          {
            title: "Hydrogen bonding with water",
            statement: "Methanal, ethanal and propanone are miscible with water in all proportions.",
            structure: ">C=O ⋯ H–O–H",
            note: "The carbonyl oxygen forms hydrogen bonds with water molecules.",
            tone: "chemistry",
          },
          {
            title: "Effect of alkyl chain length",
            relation: "Alkyl chain length ↑ ⇒ water solubility ↓",
            note: "Increasing the hydrophobic alkyl chain decreases water solubility rapidly.",
            tone: "muted",
          },
        ]}
      />

      <h2 id="h-8-4">8.4 Chemical Reactions</h2>

      <h3 id="h-8-4-1">Nucleophilic addition reactions</h3>

      <MethodSectionTabs
        label="Nucleophilic addition of aldehydes and ketones"
        panes={[
          {
            id: "nucleophilic-reactivity",
            numeral: "I",
            label: "Reactivity Order",
            caption: "Why aldehydes react faster than ketones",
            accent: "chemistry",
            content: (
              <ReactivityOrderBoard
                formula={String.raw`\text{Reactivity} \propto \frac{1}{\text{Steric Effect} + \text{Electronic Effect (Inductive Effect)}}`}
                cards={[
                  {
                    name: "Aldehydes",
                    structure: String.raw`\text{R–CHO}`,
                    groups: [{ label: "R", bulky: true }, { label: "H" }],
                    hindrance: "Less sterically hindered",
                    verdict: "More reactive",
                    tone: "higher",
                  },
                  {
                    name: "Ketones",
                    structure: String.raw`\text{R}_2\text{C=O}`,
                    groups: [
                      { label: "R", bulky: true },
                      { label: "R", bulky: true },
                    ],
                    hindrance: "More sterically crowded",
                    verdict: "Less reactive",
                    tone: "lower",
                  },
                ]}
                takeaway="Aldehydes > Ketones"
              />
            ),
          },
          {
            id: "nucleophilic-overview",
            numeral: "II",
            label: "Reaction Overview",
            caption: "Reagent, applicability and product",
            accent: "ink",
            content: (
              <AdditionOverviewTable
                rows={[
                  {
                    reagent: "HCN",
                    aldehydes: true,
                    ketones: true,
                    product: "Cyanohydrin",
                  },
                  {
                    reagent: (
                      <>
                        NaHSO<sub>3</sub>
                      </>
                    ),
                    aldehydes: true,
                    ketones: "Limited (steric)",
                    product: "Bisulphite addition product",
                  },
                  {
                    reagent: "Grignard reagent (RMgX)",
                    aldehydes: true,
                    ketones: true,
                    product: "Alcohols",
                  },
                  {
                    reagent: <>Alcohols (R–OH)</>,
                    aldehydes: "Aldehydes only",
                    ketones: "Via glycol",
                    product: "Hemiacetal / Acetal / Ketal",
                  },
                  {
                    reagent: (
                      <>
                        NH<sub>3</sub> & derivatives
                      </>
                    ),
                    aldehydes: true,
                    ketones: true,
                    product: "Nitrogen derivatives",
                  },
                ]}
              />
            ),
          },
          {
            id: "nucleophilic-detailed",
            numeral: "III",
            label: "Nucleophilic Addition Reactions",
            caption: "HCN, bisulphite, Grignard, alcohols",
            accent: "chemistry",
            content: (
              <>
                <AdditionReactionCard
                  title="Addition of HCN"
                  reactants={["Aldehyde or ketone", "HCN"]}
                  mechanism={[
                    <>
                      Cyanide ion (CN<sup>−</sup>) attacks the carbonyl carbon.
                    </>,
                    "Protonation follows.",
                  ]}
                  product="Cyanohydrin"
                  productExtra={
                    <CyanohydrinSpotlight
                      equation={String.raw`\mathrm{R_2C(OH)(CN)}`}
                      groups={[
                        { symbol: "–OH", label: "Hydroxyl" },
                        { symbol: "–CN", label: "Cyano" },
                      ]}
                      cases={[
                        {
                          family: "Aldehyde",
                          equation: String.raw`\text{R–CH(OH)CN}`,
                          groups: "R and H",
                        },
                        {
                          family: "Ketone",
                          equation: String.raw`\mathrm{R_2C(OH)CN}`,
                          groups: "R and R",
                        },
                      ]}
                    />
                  }
                  facts={[
                    "For aldehydes, one of the groups is H; for ketones, both groups are R groups.",
                  ]}
                />

                <AdditionReactionCard
                  title="Addition of sodium hydrogen sulphite (NaHSO₃)"
                  reactants={[
                    "Aldehyde or ketone (sterically unhindered)",
                    <>
                      NaHSO<sub>3</sub>
                    </>,
                  ]}
                  mechanism={["Nucleophilic attack", "Proton transfer"]}
                  product="Bisulphite addition compound"
                  facts={["Crystalline solid."]}
                  application="Separation and purification"
                />

                <GrignardBranchFlow
                  title="Products depend on the carbonyl compound"
                  source="Carbonyl compound + Grignard reagent (RMgX)"
                  branches={[
                    { family: "Formaldehyde", degree: "1°", product: "Alcohol" },
                    { family: "Other aldehydes", degree: "2°", product: "Alcohol" },
                    { family: "Ketones", degree: "3°", product: "Alcohol" },
                  ]}
                  note="Reference — Preparation of alcohols."
                />

                <AlcoholAdditionPaths
                  aldehyde={[
                    {
                      label: "Step 1 · Hemiacetal formation",
                      equation: String.raw`\text{Aldehyde} + 1\ \text{eq. R-OH} \longrightarrow \text{Hemiacetal}`,
                      note: "Unstable intermediate",
                      tone: "intermediate",
                    },
                    {
                      label: "Step 2 · Acetal formation",
                      equation: String.raw`\text{Aldehyde} + 2\ \text{eq. R-OH} \xrightarrow{\text{Dry HCl}} \text{Acetal}`,
                      tone: "product",
                    },
                  ]}
                  ketone={{
                    note: "Do not react directly with mono-alcohols efficiently.",
                    reagent: "Ethylene glycol",
                    reagentEquation: String.raw`\mathrm{HO-CH_2-CH_2-OH}`,
                    equation: String.raw`\text{Ketone} + \text{Ethylene glycol} \longrightarrow \text{Cyclic Ketal}`,
                  }}
                />
              </>
            ),
          },
          {
            id: "nucleophilic-nh3",
            numeral: "IV",
            label: "NH₃ Derivatives",
            caption: "Addition–elimination with H₂N–Z",
            accent: "warning",
            content: (
              <>
                <p className="t-micro">
                  Nucleophilic addition–elimination / condensation
                </p>

                <CondensationFlow
                  startFormula={
                    <>
                      &gt;C=O + H<sub>2</sub>N–Z
                    </>
                  }
                  intermediate="Addition intermediate"
                  keyPoints={[
                    <>
                      H<sub>2</sub>N–Z nucleophiles add reversibly to the carbonyl
                      group.
                    </>,
                    "Reaction occurs under acid catalysis.",
                    "Water is eliminated rapidly.",
                    "Produces C=N–Z derivatives.",
                  ]}
                />

                <NhDerivativeTable
                  rows={[
                    {
                      reagent: (
                        <>
                          Ammonia (NH<sub>3</sub>)
                        </>
                      ),
                      group: "–H",
                      product: "Imine",
                    },
                    {
                      reagent: (
                        <>
                          Primary amine (R–NH<sub>2</sub>)
                        </>
                      ),
                      group: "–R",
                      product: "Schiff's base",
                    },
                    {
                      reagent: (
                        <>
                          Hydroxylamine (NH<sub>2</sub>OH)
                        </>
                      ),
                      group: "–OH",
                      product: "Oxime",
                    },
                    {
                      reagent: (
                        <>
                          Hydrazine (NH<sub>2</sub>NH<sub>2</sub>)
                        </>
                      ),
                      group: (
                        <>
                          –NH<sub>2</sub>
                        </>
                      ),
                      product: "Hydrazone",
                    },
                    {
                      reagent: (
                        <>
                          Phenylhydrazine (NH<sub>2</sub>NH–Ph)
                        </>
                      ),
                      group: (
                        <>
                          –NH–C<sub>6</sub>H<sub>5</sub>
                        </>
                      ),
                      product: "Phenylhydrazone",
                    },
                    {
                      reagent: "2,4-Dinitrophenylhydrazine (2,4-DNP)",
                      group: (
                        <>
                          –NH–C<sub>6</sub>H<sub>3</sub>(NO<sub>2</sub>)<sub>2</sub>
                        </>
                      ),
                      product: "2,4-DNP derivative",
                    },
                    {
                      reagent: "Semicarbazide",
                      group: (
                        <>
                          –NHCONH<sub>2</sub>
                        </>
                      ),
                      product: "Semicarbazone",
                    },
                  ]}
                />

                <DnpIdentificationCard
                  title="2,4-Dinitrophenylhydrazone"
                  reagent="2,4-Dinitrophenylhydrazine (2,4-DNP)"
                  product="2,4-DNP derivative"
                  colours={["yellow", "orange", "red"]}
                />
              </>
            ),
          },
        ]}
      />

      

      <h3 id="h-8-4-3">Reduction</h3>

      <Comparison
        columns={[
          {
            title: "To alcohols",
            children: (
              <ul>
                <li>
                  Aldehydes → <strong>primary alcohols</strong>; ketones →{" "}
                  <strong>secondary alcohols</strong>.
                </li>
                <li>
                  Reagents: NaBH<sub>4</sub>, LiAlH<sub>4</sub> or catalytic hydrogenation.
                </li>
                <li>The C=O π-bond is broken; the chain is unchanged.</li>
              </ul>
            ),
          },
          {
            title: "To hydrocarbons",
            children: (
              <ul>
                <li>
                  The carbonyl group is reduced all the way to a <strong>–CH
                  <sub>2</sub>–</strong> group.
                </li>
                <li>
                  <strong>Clemmensen reduction</strong>: zinc amalgam + concentrated HCl.
                </li>
                <li>
                  <strong>Wolff–Kishner reduction</strong>: hydrazine, then heating with NaOH or
                  KOH in a high-boiling solvent such as ethylene glycol.
                </li>
              </ul>
            ),
          },
        ]}
      />

      <FormulaBlock
        latex={String.raw`\text{R}_2\text{C=O} \xrightarrow[\text{conc. HCl}]{\text{Zn-Hg}} \text{R}_2\text{CH}_2`}
        label="Clemmensen reduction"
      />

      <FormulaBlock
        latex={String.raw`\text{R}_2\text{C=O} \xrightarrow[\Delta]{\text{NH}_2\text{NH}_2,\ \text{KOH}} \text{R}_2\text{CH}_2`}
        label="Wolff–Kishner reduction"
      />

      <h3 id="h-8-4-4">Oxidation</h3>

      <p>
        This is where aldehydes and ketones part ways. Aldehydes are <strong>easily
        oxidised</strong> to carboxylic acids by nitric acid, KMnO<sub>4</sub>, K
        <sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> — and even by mild reagents such as Tollens’
        and Fehling’s solutions. Ketones need <strong>vigorous conditions</strong>; their
        oxidation cleaves a carbon–carbon bond and gives a mixture of carboxylic acids with
        fewer carbons than the parent ketone.
      </p>

      <Comparison
        columns={[
          {
            title: "Tollens' test",
            children: (
              <ul>
                <li>Reagent: freshly prepared ammoniacal silver nitrate.</li>
                <li>
                  On warming, a bright <strong>silver mirror</strong> of metallic silver forms.
                </li>
                <li>The aldehyde is oxidised to the carboxylate anion.</li>
                <li>The reaction occurs in an alkaline medium.</li>
              </ul>
            ),
          },
          {
            title: "Fehling's test",
            children: (
              <ul>
                <li>
                  Solution A is aqueous copper sulphate; solution B is alkaline sodium
                  potassium tartarate (Rochelle salt). Mix equal amounts before the test.
                </li>
                <li>
                  On heating an aldehyde, a <strong>reddish-brown precipitate</strong> of
                  Cu<sub>2</sub>O forms.
                </li>
                <li>The aldehyde is oxidised to the carboxylate anion.</li>
                <li>Aromatic aldehydes do not respond to this test.</li>
              </ul>
            ),
          },
        ]}
      />

      <FormulaBlock
        latex={String.raw`\text{RCHO} + 2[\text{Ag(NH}_3)_2]^{+} + 3\text{OH}^{-} \longrightarrow \text{RCOO}^{-} + 2\text{Ag}\downarrow + 4\text{NH}_3 + 2\text{H}_2\text{O}`}
        label="Tollens' reaction"
      />

      <h4 className="mt-5 mb-2 text-base font-bold">Haloform reaction of methyl ketones</h4>

      <p>
        Aldehydes and ketones having at least one methyl group attached to the carbonyl
        carbon are oxidised by sodium hypohalite to the sodium salt of the carboxylic acid
        with <strong>one carbon less</strong> than the carbonyl compound. The methyl group
        becomes haloform. A C=C bond elsewhere in the molecule is not affected.
      </p>

      <FormulaBlock
        latex={String.raw`\text{CH}_3\text{COR} + 3\text{I}_2 + 4\text{NaOH} \longrightarrow \text{CHI}_3\downarrow + \text{RCOONa} + 3\text{NaI} + 3\text{H}_2\text{O}`}
        label="Iodoform reaction"
      />

      <Callout type="note">
        The iodoform reaction with sodium hypoiodite also <strong>detects</strong> a –CH
        <sub>3</sub>CO group, or a –CH<sub>3</sub>CH(OH)– group which produces –CH
        <sub>3</sub>CO on oxidation.
      </Callout>

      <Expandable title="Example 8.4 — Identify (A) and (B) from the test results" variant="example">
        <p>
          <strong>Problem:</strong> An organic compound (A), C<sub>8</sub>H<sub>8</sub>O,
          forms an orange-red precipitate with 2,4-DNP reagent and gives a yellow precipitate
          on heating with iodine in the presence of sodium hydroxide. It neither reduces
          Tollens’ or Fehling’s reagent, nor decolourises bromine water or Baeyer’s reagent. On
          drastic oxidation with chromic acid it gives a carboxylic acid (B), C<sub>7</sub>H
          <sub>6</sub>O<sub>2</sub>. Identify (A) and (B) and explain the reactions.
        </p>
        <p>
          <strong>Solution:</strong>
        </p>
        <ul>
          <li>
            (A) forms a 2,4-DNP derivative — so it is an aldehyde or a ketone.
          </li>
          <li>
            (A) does not reduce Tollens’ or Fehling’s reagent — so it must be a{" "}
            <strong>ketone</strong>.
          </li>
          <li>(A) responds to the iodoform test — so it is a <strong>methyl ketone</strong>.</li>
          <li>
            The high degree of unsaturation (C<sub>8</sub>H<sub>8</sub>O) yet no reaction with
            bromine water or Baeyer’s reagent means the unsaturation is due to an{" "}
            <strong>aromatic ring</strong>.
          </li>
          <li>
            (B), the oxidation product of a ketone, is a carboxylic acid of formula C
            <sub>7</sub>H<sub>6</sub>O<sub>2</sub> — that is <strong>benzoic acid</strong>.
          </li>
          <li>
            So (A) is a monosubstituted aromatic methyl ketone:{" "}
            <strong>acetophenone</strong> (phenyl methyl ketone).
          </li>
        </ul>
        <FormulaBlock
          latex={String.raw`\text{C}_6\text{H}_5\text{COCH}_3 \xrightarrow[\text{heat}]{\text{CrO}_3/\text{H}^{+}} \text{C}_6\text{H}_5\text{COOH}`}
          label="(A) acetophenone → (B) benzoic acid"
          important
        />
      </Expandable>

      <h3 id="h-8-4-5">Reactions due to α-hydrogens</h3>

      <p>
        The α-hydrogens of aldehydes and ketones are <strong>acidic</strong>. The acidity comes
        from the strong electron-withdrawing effect of the carbonyl group and from resonance
        stabilisation of the conjugate base.
      </p>

      <EquationLadder
        title="Aldol condensation"
        steps={[
          {
            label: "Aldol reaction (dilute alkali)",
            equation: String.raw`2\,\text{CH}_3\text{CHO} \xrightarrow{\text{dil. NaOH}} \text{CH}_3\text{CH(OH)CH}_2\text{CHO}`,
            note: "Aldehydes and ketones with at least one α-hydrogen form β-hydroxy aldehydes (aldols) or β-hydroxy ketones (ketols). The name aldol comes from aldehyde + alcohol.",
          },
          {
            label: "Aldol condensation (loss of water)",
            equation: String.raw`\text{CH}_3\text{CH(OH)CH}_2\text{CHO} \xrightarrow{\Delta} \text{CH}_3\text{CH=CHCHO} + \text{H}_2\text{O}`,
            note: "The aldol readily loses water to give an α,β-unsaturated carbonyl compound — the aldol condensation product. Ketones give ketols, but the name aldol condensation is still used.",
            final: true,
          },
        ]}
      />

      <Callout type="note" title="Cross aldol condensation">
        <p>
          When aldol condensation is carried out between two <em>different</em> aldehydes
          and/or ketones it is called cross aldol condensation. If both carry α-hydrogens the
          result is a mixture of <strong>four products</strong> — for example, the reaction of
          a mixture of ethanal and propanal. Ketones can also be used as one component.
        </p>
      </Callout>

      <h3 id="h-8-4-6">Other reactions</h3>

      <KeyPoint title="Cannizzaro reaction">
        <p>
          Aldehydes which have <strong>no α-hydrogen</strong> undergo self oxidation and
          reduction (disproportionation) on heating with concentrated alkali. One molecule of
          the aldehyde is reduced to the alcohol while another is oxidised to the carboxylic
          acid salt.
        </p>
        <FormulaBlock
          latex={String.raw`2\,\text{C}_6\text{H}_5\text{CHO} \xrightarrow{\text{conc. NaOH}} \text{C}_6\text{H}_5\text{CH}_2\text{OH} + \text{C}_6\text{H}_5\text{COONa}`}
        />
      </KeyPoint>

      <p>
        <strong>Electrophilic substitution:</strong> aromatic aldehydes and ketones undergo
        electrophilic substitution on the ring, where the carbonyl group acts as a{" "}
        <strong>deactivating and meta-directing</strong> group.
      </p>

      <Expandable title="Intext 8.4 — Order of reactivity towards nucleophilic addition" variant="exercise">
        <p>
          <strong>Question:</strong> Arrange in increasing order of reactivity in nucleophilic
          addition: (i) ethanal, propanal, propanone, butanone; (ii) benzaldehyde, p-tolualdehyde,
          p-nitrobenzaldehyde, acetophenone.
        </p>
        <p>
          <strong>Answer:</strong>
        </p>
        <ul>
          <li>
            (i) Butanone &lt; propanone &lt; propanal &lt; ethanal — the more and the larger the
            alkyl groups, the slower the addition.
          </li>
          <li>
            (ii) Acetophenone &lt; p-tolualdehyde &lt; benzaldehyde &lt; p-nitrobenzaldehyde —
            an electron-donating methyl slows the attack, an electron-withdrawing nitro group
            speeds it up.
          </li>
        </ul>
      </Expandable>

      <Expandable title="Intext 8.5 — Predict the products" variant="exercise">
        <p>
          <strong>Question:</strong> Predict the products of the given reactions.
        </p>
        <p>
          <strong>Method:</strong> identify which reagent has been used and match it to the
          reaction type —
        </p>
        <ul>
          <li>Tollens’ or Fehling’s reagent → the corresponding carboxylate (aldehyde only).</li>
          <li>NaBH<sub>4</sub>/LiAlH<sub>4</sub> → the alcohol.</li>
          <li>Zn–Hg/conc. HCl or NH<sub>2</sub>NH<sub>2</sub>/KOH → the –CH<sub>2</sub>– hydrocarbon.</li>
          <li>Dilute NaOH → the β-hydroxy aldol, which dehydrates on heating.</li>
          <li>2,4-DNP, hydroxylamine, semicarbazide → the corresponding derivative.</li>
        </ul>
      </Expandable>

      <h2 id="h-8-5">8.5 Uses of Aldehydes and Ketones</h2>

      <ConceptCard title="Industrial solvents, starting materials and reagents" icon="⚗️">
        <ul>
          <li>
            <strong>Formaldehyde</strong> — well known as <em>formalin</em> (40% solution),
            used to preserve biological specimens and to prepare bakelite (a
            phenol–formaldehyde resin), urea–formaldehyde glues and other polymeric products.
          </li>
          <li>
            <strong>Acetaldehyde</strong> — the starting material for acetic acid, ethyl
            acetate, vinyl acetate, polymers and drugs.
          </li>
          <li>
            <strong>Benzaldehyde</strong> — used in perfumery and in the dye industry.
          </li>
          <li>
            <strong>Acetone</strong> and <strong>ethyl methyl ketone</strong> — common
            industrial solvents.
          </li>
          <li>
            Butyraldehyde, vanillin, acetophenone and camphor are well known for their odours
            and flavours.
          </li>
        </ul>
      </ConceptCard>

      <h2 id="h-8-6">8.6 Nomenclature and Structure of the Carboxyl Group</h2>

      <Callout type="important">
        Carbon compounds containing a <strong>carboxyl functional group, –COOH</strong>, are
        called <strong>carboxylic acids</strong>. The carboxyl group consists of a carbonyl
        group attached to a hydroxyl group — hence its name. Carboxylic acids may be aliphatic
        (RCOOH) or aromatic (ArCOOH), depending on whether an alkyl or an aryl group is
        attached to the carboxyl carbon.
      </Callout>

      <ul>
        <li>
          Large numbers of carboxylic acids occur in nature; the higher aliphatic members
          (C<sub>12</sub>–C<sub>18</sub>), known as <strong>fatty acids</strong>, occur in
          natural fats as esters of glycerol.
        </li>
        <li>
          Carboxylic acids are starting materials for anhydrides, esters, acid chlorides,
          amides and many other compounds.
        </li>
        <li>
          Because they were among the earliest organic compounds isolated from nature, most
          have common names ending in <em>–ic acid</em>, derived from the Latin or Greek names
          of their sources.
        </li>
        <li>
          Formic acid (HCOOH) — from red ants (<em>formica</em> means ant). Acetic acid (CH
          <sub>3</sub>COOH) — from vinegar (<em>acetum</em>). Butyric acid (CH<sub>3</sub>CH
          <sub>2</sub>CH<sub>2</sub>COOH) — from rancid butter (<em>butyrum</em>).
        </li>
      </ul>

      <h3 id="h-8-6-1">8.6.1 Nomenclature</h3>

      <ul>
        <li>
          In the IUPAC system, aliphatic carboxylic acids are named by replacing the ending{" "}
          <em>–e</em> of the corresponding alkane with <em>–oic acid</em>.
        </li>
        <li>In numbering the chain, the carboxyl carbon is numbered one.</li>
        <li>
          For compounds with more than one carboxyl group, the alkyl chain is numbered and the
          number of –COOH groups is shown by a multiplicative prefix: <em>dicarboxylic acid</em>,{" "}
          <em>tricarboxylic acid</em>, etc.
        </li>
        <li>
          The positions of the –COOH groups are indicated by arabic numerals before the
          multiplicative prefix.
        </li>
      </ul>

      <TableCard
        title="Table 8.3: Names and structures of some carboxylic acids"
        headers={["Structure", "Common name", "IUPAC name"]}
        rows={[
          { cells: ["HCOOH", "Formic acid", "Methanoic acid"] },
          { cells: ["CH₃COOH", "Acetic acid", "Ethanoic acid"] },
          { cells: ["CH₃CH₂COOH", "Propionic acid", "Propanoic acid"] },
          { cells: ["CH₃CH₂CH₂COOH", "Butyric acid", "Butanoic acid"] },
          { cells: ["(CH₃)₂CHCOOH", "Isobutyric acid", "2-Methylpropanoic acid"] },
          { cells: ["HOOC–COOH", "Oxalic acid", "Ethanedioic acid"] },
          { cells: ["HOOC–CH₂–COOH", "Malonic acid", "Propanedioic acid"] },
          { cells: ["HOOC–(CH₂)₂–COOH", "Succinic acid", "Butanedioic acid"] },
          { cells: ["HOOC–(CH₂)₃–COOH", "Glutaric acid", "Pentanedioic acid"] },
          { cells: ["HOOC–(CH₂)₄–COOH", "Adipic acid", "Hexanedioic acid"] },
          {
            cells: [
              "HOOC–CH₂–CH(COOH)–CH₂–COOH",
              "Tricarballylic (carballylic) acid",
              "Propane-1,2,3-tricarboxylic acid",
            ],
          },
          { cells: ["C₆H₅COOH", "Benzoic acid", "Benzenecarboxylic acid (benzoic acid)"] },
          { cells: ["C₆H₅CH₂COOH", "Phenylacetic acid", "2-Phenylethanoic acid"] },
          {
            cells: [
              "o-HOOC–C₆H₄–COOH",
              "Phthalic acid",
              "Benzene-1,2-dicarboxylic acid",
            ],
          },
        ]}
      />

      <h3 id="h-8-6-2">8.6.2 Structure of the Carboxyl Group</h3>

      <ul>
        <li>
          The bonds to the carboxyl carbon lie <strong>in one plane</strong> and are separated
          by about <strong>120°</strong>.
        </li>
        <li>
          The carboxylic carbon is <strong>less electrophilic than the carbonyl carbon</strong>{" "}
          because of resonance — the lone pair on the hydroxyl oxygen is delocalised into the
          carbonyl group.
        </li>
        <li>
          That same resonance is why the –OH hydrogen is acidic: the resulting carboxylate ion
          is stabilised by two equivalent resonance structures.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{R-C(=O)-OH} \ \longleftrightarrow \ \text{R-C(O}^{-}\text{)=O}^{+}\text{H} \ \longleftrightarrow \ \text{R-C(O}^{-}\text{)-O}^{+}\text{H}`}
        label="Resonance in the carboxyl group"
      />

      <Expandable title="Intext 8.6 — Give the IUPAC names" variant="exercise">
        <p>
          <strong>Question:</strong> Give the IUPAC names of: (i) PhCH<sub>2</sub>CH
          <sub>2</sub>COOH (ii) (CH<sub>3</sub>)<sub>2</sub>C=CHCOOH (iii) the cyclohexane
          carboxylic acid with a methyl at C-2.
        </p>
        <p>
          <strong>Answer:</strong>
        </p>
        <ul>
          <li>(i) 3-Phenylpropanoic acid</li>
          <li>(ii) 3-Methylbut-2-enoic acid</li>
          <li>(iii) 2-Methylcyclohexanecarboxylic acid</li>
        </ul>
      </Expandable>

      <h2 id="h-8-7">8.7 Methods of Preparation of Carboxylic Acids</h2>

      <TableCard
        title="Six routes to a carboxylic acid"
        headers={["From", "Reagents / conditions", "Note"]}
        rows={[
          {
            cells: [
              "Primary alcohols and aldehydes",
              "KMnO₄ (neutral, acidic or alkaline), K₂Cr₂O₇ or CrO₃ in acid (Jones reagent)",
              "The alcohol is oxidised through the aldehyde to the acid; aldehydes give acids with mild oxidising agents.",
            ],
          },
          {
            cells: [
              "Alkylbenzenes",
              "Chromic acid, or acidic/alkaline KMnO₄, heat",
              "The entire side chain becomes –COOH, whatever its length. Primary and secondary alkyl groups are oxidised; a tertiary group resists.",
            ],
          },
          {
            cells: [
              "Nitriles and amides",
              "H⁺ or OH⁻ hydrolysis",
              "Nitrile → amide → acid. Mild conditions stop the reaction at the amide.",
            ],
          },
          {
            cells: [
              "Grignard reagents",
              "Dry CO₂ (dry ice), then acidification",
              "Adds one carbon — a way of ascending the series from an alkyl halide.",
            ],
          },
          {
            cells: [
              "Acyl halides and anhydrides",
              "Water, or aqueous base then acidification",
              "Acid chlorides hydrolyse to acids; anhydrides give the acid(s) on hydrolysis.",
            ],
          },
          {
            cells: [
              "Esters",
              "Acidic hydrolysis (direct) or basic hydrolysis then acidification",
              "Basic hydrolysis gives the carboxylate, which needs acidification.",
            ],
          },
        ]}
      />

      <Callout type="note" title="Ascending the series">
        Nitriles and Grignard reagents can themselves be made from alkyl halides, so methods
        3 and 4 convert an alkyl halide into a carboxylic acid having{" "}
        <strong>one carbon more</strong> than the halide.
      </Callout>

      <FormulaBlock
        latex={String.raw`\text{RMgX} + \text{CO}_2 \longrightarrow \text{RCOO}^{-}\text{MgX}^{+} \xrightarrow{\text{H}_3\text{O}^{+}} \text{RCOOH}`}
        label="Grignard reagent + dry ice"
      />

      <Expandable title="Example 8.5 — Reactions for the transformations" variant="example">
        <p>
          <strong>Problem:</strong> Write chemical reactions to carry out the following
          transformations:
        </p>
        <ul>
          <li>(i) Butan-1-ol to butanoic acid</li>
          <li>(ii) Benzyl alcohol to phenylethanoic acid</li>
          <li>(iii) 3-Nitrobromobenzene to 3-nitrobenzoic acid</li>
          <li>(iv) 4-Methylacetophenone to benzene-1,4-dicarboxylic acid</li>
          <li>(v) Cyclohexene to hexane-1,6-dioic acid</li>
          <li>(vi) Butanal to butanoic acid</li>
        </ul>
        <p>
          <strong>Solution:</strong>
        </p>
        <ul>
          <li>
            (i) <strong>Jones reagent</strong> (CrO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub>) or
            hot acidified KMnO<sub>4</sub>: primary alcohol → carboxylic acid.
          </li>
          <li>
            (ii) Hot alkaline KMnO<sub>4</sub>, then acidification — the –CH<sub>2</sub>OH is
            oxidised to –COOH.
          </li>
          <li>
            (iii) (a) Mg/dry ether to form the Grignard reagent, (b) dry CO<sub>2</sub>, (c)
            H<sub>3</sub>O<sup>+</sup>.
          </li>
          <li>
            (iv) Hot alkaline KMnO<sub>4</sub>, then H<sub>3</sub>O<sup>+</sup> — both side
            chains (–CH<sub>3</sub> and –COCH<sub>3</sub>) are oxidised to –COOH.
          </li>
          <li>
            (v) Hot acidified KMnO<sub>4</sub>: oxidative cleavage of the ring double bond gives
            the dioic acid.
          </li>
          <li>
            (vi) A mild oxidising agent such as Tollens’ reagent, followed by acidification.
          </li>
        </ul>
      </Expandable>

      <Expandable title="Intext 8.7 — Convert each compound to benzoic acid" variant="exercise">
        <p>
          <strong>Question:</strong> Show how each of the following can be converted to benzoic
          acid: (i) ethylbenzene (ii) acetophenone (iii) bromobenzene (iv) phenylethene
          (styrene).
        </p>
        <p>
          <strong>Answer:</strong>
        </p>
        <ul>
          <li>
            (i) and (ii) Vigorous oxidation with hot alkaline KMnO<sub>4</sub> (or chromic
            acid) oxidises the whole side chain to –COOH.
          </li>
          <li>
            (iii) Mg/dry ether → phenylmagnesium bromide → dry CO<sub>2</sub> → H<sub>3</sub>O
            <sup>+</sup>.
          </li>
          <li>
            (iv) Hot alkaline KMnO<sub>4</sub> cleaves the vinyl side chain and oxidises it to
            –COOH.
          </li>
        </ul>
      </Expandable>

      <h2 id="h-8-8">8.8 Physical Properties</h2>

      <ul>
        <li>
          Aliphatic carboxylic acids up to nine carbon atoms are colourless liquids at room
          temperature with unpleasant odours.
        </li>
        <li>
          Higher acids are wax-like solids that are practically odourless because of their low
          volatility.
        </li>
        <li>
          Carboxylic acids boil <strong>higher than aldehydes, ketones and even alcohols</strong>{" "}
          of comparable molecular mass, because of more extensive association through
          intermolecular hydrogen bonding.
        </li>
        <li>
          The hydrogen bonds are not broken completely even in the vapour phase — most
          carboxylic acids exist as a <strong>dimer</strong> in the vapour phase or in aprotic
          solvents.
        </li>
        <li>
          Simple aliphatic acids with up to four carbons are miscible with water (hydrogen
          bonding with water); solubility decreases as the number of carbons increases.
        </li>
        <li>
          Higher acids are practically insoluble in water because of the hydrophobic
          hydrocarbon part; benzoic acid, the simplest aromatic carboxylic acid, is nearly
          insoluble in cold water.
        </li>
        <li>
          Carboxylic acids are soluble in less polar organic solvents — benzene, ether,
          alcohol, chloroform.
        </li>
      </ul>

      <h2 id="h-8-9">8.9 Chemical Reactions</h2>

      <p>The reactions of carboxylic acids fall into four groups, decided by which bond breaks.</p>

      <h3 id="h-8-9-1">8.9.1 Reactions involving cleavage of the O–H bond</h3>

      <h4 className="mt-5 mb-2 text-base font-bold">Reactions with metals and alkalies</h4>

      <ul>
        <li>
          Like alcohols, carboxylic acids evolve hydrogen with electropositive metals and form
          salts with alkalies.
        </li>
        <li>
          Unlike phenols, they react with <strong>weaker bases</strong> such as carbonates and
          hydrogencarbonates to evolve carbon dioxide.
        </li>
        <li>
          That effervescence is the standard test for the presence of a carboxyl group in an
          organic compound.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{RCOOH} + \text{NaHCO}_3 \longrightarrow \text{RCOONa} + \text{H}_2\text{O} + \text{CO}_2\uparrow`}
        label="Bicarbonate test"
      />

      <h4 className="mt-5 mb-2 text-base font-bold">Acidity</h4>

      <p>
        Carboxylic acids dissociate in water to give resonance-stabilised carboxylate anions
        and the hydronium ion.
      </p>

      <FormulaBlock
        latex={String.raw`\text{RCOOH} + \text{H}_2\text{O} \ \rightleftharpoons \ \text{RCOO}^{-} + \text{H}_3\text{O}^{+}`}
      />

      <EquationLadder
        title="Measuring acid strength"
        steps={[
          {
            label: "Acid dissociation constant",
            equation: String.raw`K_a = \frac{[\text{RCOO}^{-}][\text{H}_3\text{O}^{+}]}{[\text{RCOOH}]}`,
            note: "K(eq) is the equilibrium constant; K(a) is the acid dissociation constant.",
          },
          {
            label: "The pKa scale",
            equation: String.raw`\text{p}K_a = -\log K_a`,
            note: "For convenience the strength of an acid is usually quoted as pKa rather than Ka.",
            final: true,
          },
        ]}
      />

      <TableCard
        title="pKa values to remember"
        headers={["Acid", "pKa"]}
        rows={[
          { cells: ["HCl (mineral acid)", "−7.0"] },
          { cells: ["CF₃COOH (strongest carboxylic acid)", "0.23"] },
          { cells: ["Benzoic acid", "4.19"] },
          { cells: ["Acetic acid", "4.76"] },
          { cells: ["Phenol", "10"] },
          { cells: ["Ethanol", "~16"] },
        ]}
        caption="Smaller pKa → stronger acid (better proton donor). Strong acids have pKa < 1; 1–5 moderately strong; 5–15 weak; > 15 extremely weak."
      />

      <KeyPoint title="Why carboxylic acids beat phenols">
        <ul>
          <li>
            The carboxylate ion is stabilised by <strong>two equivalent resonance
            structures</strong> in which the negative charge sits on the more electronegative
            oxygen atom.
          </li>
          <li>
            The phenoxide ion has <strong>non-equivalent</strong> resonance structures in which
            the negative charge sits on the less electronegative carbon atom — so resonance in
            phenoxide is not as important.
          </li>
          <li>
            In the carboxylate ion the charge is delocalised over <strong>two oxygen
            atoms</strong>; in the phenoxide ion it is delocalised less effectively over one
            oxygen and several carbons.
          </li>
          <li>
            The more stabilised conjugate base makes the acid stronger: carboxylic acids &gt;
            phenols &gt; alcohols.
          </li>
        </ul>
      </KeyPoint>

      <h4 className="mt-5 mb-2 text-base font-bold">Effect of substituents on acidity</h4>

      <ul>
        <li>
          <strong>Electron withdrawing groups (EWG)</strong> increase acidity — they stabilise
          the carboxylate anion by delocalising the negative charge through inductive and/or
          resonance effects.
        </li>
        <li>
          <strong>Electron donating groups (EDG)</strong> decrease acidity — they destabilise the
          carboxylate anion.
        </li>
        <li>
          Increasing acidity order of the groups:{" "}
          <Formula>{String.raw`\text{Ph} < \text{I} < \text{Br} < \text{Cl} < \text{F} < \text{CN} < \text{NO}_2 < \text{CF}_3`}</Formula>
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{CF}_3\text{COOH} > \text{CCl}_3\text{COOH} > \text{CHCl}_2\text{COOH} > \text{NO}_2\text{CH}_2\text{COOH} > \text{NC-CH}_2\text{COOH} > \text{FCH}_2\text{COOH} > \text{ClCH}_2\text{COOH} > \text{BrCH}_2\text{COOH} > \text{HCOOH} > \text{ClCH}_2\text{CH}_2\text{COOH} > \text{C}_6\text{H}_5\text{COOH} > \text{C}_6\text{H}_5\text{CH}_2\text{COOH} > \text{CH}_3\text{COOH} > \text{CH}_3\text{CH}_2\text{COOH}`}
        label="Acidity decreases from left to right"
      />

      <Callout type="note">
        Groups such as phenyl or vinyl, attached <em>directly</em> to the carboxyl carbon,
        actually <strong>increase</strong> acidity — contrary to the decrease expected from
        their resonance effect. The reason is the greater electronegativity of the sp
        <sup>2</sup>-hybridised carbon to which the carboxyl carbon is attached. On an aromatic
        ring, electron-withdrawing substituents increase acidity and electron-donating
        substituents decrease it.
      </Callout>

      <TableCard
        title="Substituted benzoic acids"
        headers={["Acid", "pKa"]}
        rows={[
          { cells: ["4-Methoxybenzoic acid", "4.46"] },
          { cells: ["Benzoic acid", "4.19"] },
          { cells: ["4-Nitrobenzoic acid", "3.41"] },
        ]}
        caption="–OCH₃ is an EDG (weaker acid); –NO₂ is an EWG (stronger acid)."
      />

      <h3 id="h-8-9-2">8.9.2 Reactions involving cleavage of the C–OH bond</h3>

      <ProcessCard
        title="Four reactions that replace –OH"
        steps={[
          {
            label: "Anhydride formation",
            description:
              "Carboxylic acids on heating with mineral acids such as H₂SO₄, or with P₂O₅, give the corresponding anhydride.",
          },
          {
            label: "Esterification",
            description:
              "Carboxylic acids are esterified with alcohols or phenols using concentrated H₂SO₄ or HCl gas as catalyst.",
          },
          {
            label: "Reaction with PCl₅, PCl₃ and SOCl₂",
            description:
              "The –OH group is replaced by chlorine. SOCl₂ is preferred because the other two products are gaseous and escape, making purification of the acid chloride easier.",
          },
          {
            label: "Reaction with ammonia",
            description:
              "The acid gives an ammonium salt, which on heating at high temperature gives the amide.",
          },
        ]}
      />

      <FormulaBlock
        latex={String.raw`2\,\text{CH}_3\text{COOH} \xrightarrow{\text{P}_2\text{O}_5} (\text{CH}_3\text{CO})_2\text{O} + \text{H}_2\text{O}`}
        label="Anhydride formation"
      />

      <FormulaBlock
        latex={String.raw`\text{CH}_3\text{COOH} + \text{C}_2\text{H}_5\text{OH} \xrightarrow{\text{conc. H}_2\text{SO}_4} \text{CH}_3\text{COOC}_2\text{H}_5 + \text{H}_2\text{O}`}
        label="Esterification"
      />

      <FormulaBlock
        latex={String.raw`\text{RCOOH} + \text{SOCl}_2 \longrightarrow \text{RCOCl} + \text{SO}_2\uparrow + \text{HCl}\uparrow`}
        label="Preferred route to the acid chloride"
      />

      <FormulaBlock
        latex={String.raw`\text{RCOOH} + \text{NH}_3 \longrightarrow \text{RCOO}^{-}\text{NH}_4^{+} \xrightarrow{\Delta} \text{RCONH}_2 + \text{H}_2\text{O}`}
        label="Amide formation"
      />

      <Expandable title="Mechanism — esterification is nucleophilic acyl substitution" variant="misc">
        <p>
          Esterification of a carboxylic acid with an alcohol is a kind of{" "}
          <strong>nucleophilic acyl substitution</strong>. Step by step:
        </p>
        <ProcessCard
          steps={[
            {
              label: "Protonation of the carbonyl oxygen",
              description:
                "The acid catalyst protonates the carbonyl oxygen, activating the carbonyl group towards nucleophilic addition of the alcohol.",
            },
            {
              label: "Nucleophilic addition of the alcohol",
              description:
                "The alcohol oxygen attacks the carbonyl carbon and a tetrahedral intermediate is formed.",
            },
            {
              label: "Proton transfer",
              description:
                "Proton transfer in the tetrahedral intermediate converts the hydroxyl group into –OH₂⁺.",
            },
            {
              label: "Loss of water",
              description:
                "–OH₂⁺ is a better leaving group and is eliminated as a neutral water molecule, giving the protonated ester.",
            },
            {
              label: "Deprotonation",
              description: "The protonated ester loses a proton to give the ester.",
            },
          ]}
        />
      </Expandable>

      <h3 id="h-8-9-3">8.9.3 Reactions involving the –COOH group</h3>

      <ul>
        <li>
          <strong>Reduction:</strong> carboxylic acids are reduced to primary alcohols by lithium
          aluminium hydride, or better by diborane. Diborane does not easily reduce ester, nitro
          or halo groups, so it is the selective choice. Sodium borohydride does{" "}
          <em>not</em> reduce the carboxyl group.
        </li>
        <li>
          <strong>Decarboxylation:</strong> carboxylic acids lose carbon dioxide to form
          hydrocarbons when their sodium salts are heated with soda lime (NaOH and CaO in the
          ratio 3 : 1).
        </li>
        <li>
          <strong>Kolbe electrolysis:</strong> alkali metal salts of carboxylic acids also
          decarboxylate on electrolysis of their aqueous solutions, forming hydrocarbons with{" "}
          <strong>twice</strong> the number of carbon atoms present in the alkyl group of the
          acid.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{RCOOH} \xrightarrow{\text{LiAlH}_4} \text{RCH}_2\text{OH}`}
        label="Reduction to a primary alcohol"
      />

      <FormulaBlock
        latex={String.raw`\text{CH}_3\text{COONa} + \text{NaOH(CaO)} \xrightarrow{\Delta} \text{CH}_4 + \text{Na}_2\text{CO}_3`}
        label="Decarboxylation with soda lime"
      />

      <FormulaBlock
        latex={String.raw`2\,\text{CH}_3\text{COONa} + 2\text{H}_2\text{O} \xrightarrow{\text{electrolysis}} \text{C}_2\text{H}_6 + 2\text{CO}_2 + 2\text{NaOH} + \text{H}_2`}
        label="Kolbe electrolysis"
      />

      <h3 id="h-8-9-4">8.9.4 Substitution reactions in the hydrocarbon part</h3>

      <ul>
        <li>
          <strong>Halogenation (Hell–Volhard–Zelinsky reaction):</strong> carboxylic acids having
          an α-hydrogen are halogenated at the α-position by chlorine or bromine in the presence
          of a small amount of red phosphorus, giving α-halocarboxylic acids.
        </li>
        <li>
          <strong>Ring substitution:</strong> aromatic carboxylic acids undergo electrophilic
          substitution in which the carboxyl group is <strong>deactivating and
          meta-directing</strong>.
        </li>
        <li>
          Aromatic carboxylic acids do <strong>not</strong> undergo Friedel–Crafts reactions — the
          carboxyl group is deactivating and the Lewis acid catalyst (AlCl<sub>3</sub>) bonds to
          the carboxyl group.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{RCH}_2\text{COOH} \xrightarrow[\text{red P}]{\text{Cl}_2} \text{RCH(Cl)COOH}`}
        label="Hell–Volhard–Zelinsky reaction"
      />

      <Expandable title="Intext 8.8 — Which acid of each pair is stronger?" variant="exercise">
        <p>
          <strong>Question:</strong> Which acid of each pair is stronger?
        </p>
        <ul>
          <li>(i) CH<sub>3</sub>CO<sub>2</sub>H or CH<sub>2</sub>FCO<sub>2</sub>H</li>
          <li>(ii) CH<sub>2</sub>FCO<sub>2</sub>H or CH<sub>2</sub>ClCO<sub>2</sub>H</li>
          <li>(iii) CH<sub>2</sub>FCH<sub>2</sub>CH<sub>2</sub>CO<sub>2</sub>H or CH
          <sub>3</sub>CHFCH<sub>2</sub>CO<sub>2</sub>H</li>
        </ul>
        <p>
          <strong>Answer:</strong>
        </p>
        <ul>
          <li>(i) CH<sub>2</sub>FCO<sub>2</sub>H — fluorine withdraws electrons inductively.</li>
          <li>(ii) CH<sub>2</sub>FCO<sub>2</sub>H — F is more electronegative than Cl.</li>
          <li>
            (iii) CH<sub>3</sub>CHFCH<sub>2</sub>CO<sub>2</sub>H — the fluorine is closer to the
            carboxyl group, so its inductive withdrawal is stronger.
          </li>
        </ul>
      </Expandable>

      <h2 id="h-8-10">8.10 Uses of Carboxylic Acids</h2>

      <ConceptCard title="Where these acids are used" icon="🏭">
        <ul>
          <li>
            <strong>Methanoic acid</strong> — rubber, textile, dyeing, leather and electroplating
            industries.
          </li>
          <li>
            <strong>Ethanoic acid</strong> — as a solvent, and as vinegar in the food industry.
          </li>
          <li>
            <strong>Hexanedioic acid</strong> — manufacture of nylon-6,6.
          </li>
          <li>
            <strong>Esters of benzoic acid</strong> — perfumery; <strong>sodium benzoate</strong>{" "}
            — food preservative.
          </li>
          <li>
            <strong>Higher fatty acids</strong> — manufacture of soaps and detergents.
          </li>
        </ul>
      </ConceptCard>

      <MistakeCard
        mistake="Using NaBH₄ to reduce a carboxylic acid to an alcohol."
        correction="NaBH₄ does not touch the carboxyl group. Use LiAlH₄, or diborane when other reducible groups must survive."
        example="4-Nitrobenzoic acid → 4-nitrobenzyl alcohol needs diborane, because LiAlH₄ would also attack the nitro group."
      />

      <h2 id="h-8-exercises">Exercises</h2>

      <Expandable title="Exercise 8.1–8.20 (NCERT)" variant="exercise">
        <ExerciseQa
          answersHeading="NCERT Exercise Questions (8.1–8.20)"
          questions={[
            <>
              What is meant by the following terms? Give an example of the reaction in each
              case. (i) Cyanohydrin (ii) Acetal (iii) Semicarbazone (iv) Aldol (v) Hemiacetal
              (vi) Oxime (vii) Ketal (viii) Imine (ix) 2,4-DNP-derivative (x) Schiff&apos;s base
            </>,
            <>
              Name the following compounds according to the IUPAC system of nomenclature: (i)
              CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>2</sub>CHO (ii) CH
              <sub>3</sub>CH<sub>2</sub>COCH(C<sub>2</sub>H<sub>5</sub>)CH<sub>2</sub>CH
              <sub>2</sub>Cl (iii) CH<sub>3</sub>CH=CHCHO (iv) CH<sub>3</sub>COCH<sub>2</sub>COCH
              <sub>3</sub> (v) CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>C(CH<sub>3</sub>)
              <sub>2</sub>COCH<sub>3</sub> (vi) (CH<sub>3</sub>)<sub>3</sub>CCH<sub>2</sub>COOH
              (vii) OHCC<sub>6</sub>H<sub>4</sub>CHO-p
            </>,
            <>
              Draw the structures of the following compounds: (i) 3-Methylbutanal (ii)
              p-Nitropropiophenone (iii) p-Methylbenzaldehyde (iv) 4-Methylpent-3-en-2-one (v)
              4-Chloropentan-2-one (vi) 3-Bromo-4-phenylpentanoic acid (vii)
              p,p&apos;-Dihydroxybenzophenone (viii) Hex-2-en-4-ynoic acid
            </>,
            <>
              Write the IUPAC names of the following ketones and aldehydes. Wherever possible,
              give also common names: (i) CH<sub>3</sub>CO(CH<sub>2</sub>)<sub>4</sub>CH<sub>3</sub>{" "}
              (ii) CH<sub>3</sub>CH<sub>2</sub>CHBrCH<sub>2</sub>CH(CH<sub>3</sub>)CHO (iii) CH
              <sub>3</sub>(CH<sub>2</sub>)<sub>5</sub>CHO (iv) Ph-CH=CH-CHO (v) CHO on a ring
              (vi) PhCOPh
            </>,
            <>
              Draw the structures of the following derivatives: (i) the
              2,4-dinitrophenylhydrazone of benzaldehyde (ii) cyclopropanone oxime (iii)
              acetaldehyde dimethylacetal (iv) the semicarbazone of cyclobutanone (v) the
              ethylene ketal of hexan-3-one (vi) the methyl hemiacetal of formaldehyde
            </>,
            <>
              Predict the products formed when cyclohexanecarbaldehyde reacts with: (i) PhMgBr
              and then H<sub>3</sub>O<sup>+</sup> (ii) Tollens&apos; reagent (iii)
              semicarbazide and weak acid (iv) excess ethanol and acid (v) zinc amalgam and
              dilute hydrochloric acid
            </>,
            <>
              Which of the following would undergo aldol condensation, which the Cannizzaro
              reaction, and which neither? Write the structures of the expected products. (i)
              Methanal (ii) 2-Methylpentanal (iii) Benzaldehyde (iv) Benzophenone (v)
              Cyclohexanone (vi) 1-Phenylpropanone (vii) Phenylacetaldehyde (viii) Butan-1-ol
              (ix) 2,2-Dimethylbutanal
            </>,
            <>
              How will you convert ethanal into: (i) butane-1,3-diol (ii) but-2-enal (iii)
              but-2-enoic acid?
            </>,
            <>
              Write structural formulas and names of four possible aldol condensation products
              from propanal and butanal. In each case, indicate which aldehyde acts as
              nucleophile and which as electrophile.
            </>,
            <>
              An organic compound with the molecular formula C<sub>9</sub>H<sub>10</sub>O forms
              a 2,4-DNP derivative, reduces Tollens&apos; reagent and undergoes the Cannizzaro
              reaction. On vigorous oxidation it gives 1,2-benzenedicarboxylic acid. Identify the
              compound.
            </>,
            <>
              An organic compound (A), C<sub>8</sub>H<sub>16</sub>O<sub>2</sub>, was hydrolysed
              with dilute sulphuric acid to give a carboxylic acid (B) and an alcohol (C).
              Oxidation of (C) with chromic acid produced (B). (C) on dehydration gives
              but-1-ene. Write equations for the reactions involved.
            </>,
            <>
              Arrange the following in increasing order of the property indicated: (i)
              Acetaldehyde, acetone, di-tert-butyl ketone, methyl tert-butyl ketone (reactivity
              towards HCN) (ii) CH<sub>3</sub>CH<sub>2</sub>CH(Br)COOH, CH<sub>3</sub>CH(Br)CH
              <sub>2</sub>COOH, (CH<sub>3</sub>)<sub>2</sub>CHCOOH, CH<sub>3</sub>CH<sub>2</sub>CH
              <sub>2</sub>COOH (acid strength) (iii) Benzoic acid, 4-nitrobenzoic acid,
              3,4-dinitrobenzoic acid, 4-methoxybenzoic acid (acid strength)
            </>,
            <>
              Give simple chemical tests to distinguish between: (i) propanal and propanone (ii)
              acetophenone and benzophenone (iii) phenol and benzoic acid (iv) benzoic acid and
              ethyl benzoate (v) pentan-2-one and pentan-3-one (vi) benzaldehyde and acetophenone
              (vii) ethanal and propanal
            </>,
            <>
              How will you prepare the following from benzene? You may use any inorganic reagent
              and any organic reagent having not more than one carbon atom: (i) methyl benzoate
              (ii) m-nitrobenzoic acid (iii) p-nitrobenzoic acid (iv) phenylacetic acid (v)
              p-nitrobenzaldehyde
            </>,
            <>
              Bring about the following conversions in not more than two steps: (i) propanone to
              propene (ii) benzoic acid to benzaldehyde (iii) ethanol to 3-hydroxybutanal (iv)
              benzene to m-nitroacetophenone (v) benzaldehyde to benzophenone (vi) bromobenzene
              to 1-phenylethanol (vii) benzaldehyde to 3-phenylpropan-1-ol (viii) benzaldehyde to
              α-hydroxyphenylacetic acid (ix) benzoic acid to m-nitrobenzyl alcohol
            </>,
            <>
              Describe the following: (i) acetylation (ii) Cannizzaro reaction (iii) cross aldol
              condensation (iv) decarboxylation
            </>,
            <>Complete each synthesis by giving the missing starting material, reagent or product.</>,
            <>
              Give a plausible explanation for each of the following: (i) Cyclohexanone forms a
              cyanohydrin in good yield but 2,2,6-trimethylcyclohexanone does not. (ii) There are
              two –NH<sub>2</sub> groups in semicarbazide, but only one is involved in the
              formation of semicarbazones. (iii) During the preparation of esters from a
              carboxylic acid and an alcohol with an acid catalyst, the water or the ester should
              be removed as soon as it is formed.
            </>,
            <>
              An organic compound contains 69.77% carbon, 11.63% hydrogen and the rest oxygen.
              Its molecular mass is 86. It does not reduce Tollens&apos; reagent but forms an
              addition compound with sodium hydrogensulphite and gives a positive iodoform test.
              On vigorous oxidation it gives ethanoic and propanoic acid. Write the possible
              structure of the compound.
            </>,
            <>
              Although the phenoxide ion has more resonating structures than the carboxylate ion,
              carboxylic acid is a stronger acid than phenol. Why?
            </>,
          ]}
        />
      </Expandable>
    </>
  );
}
