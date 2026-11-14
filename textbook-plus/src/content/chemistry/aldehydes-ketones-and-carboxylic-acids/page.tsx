import { Callout } from "@/components/content/Callout";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { TableCard } from "@/components/content/data/TableCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
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
import { ReductionRouteCards } from "@/components/content/chemistry/ReductionRouteCards";
import { AlcoholReductionBoard } from "@/components/content/chemistry/AlcoholReductionBoard";
import { MethyleneReductionCards } from "@/components/content/chemistry/MethyleneReductionCards";
import { OxidationScopeCards } from "@/components/content/chemistry/OxidationScopeCards";
import { ReagentGrid } from "@/components/content/chemistry/ReagentGrid";
import { EquationProductCards } from "@/components/content/chemistry/EquationProductCards";
import { TestObservationCard } from "@/components/content/chemistry/TestObservationCard";
import { KetoneCleavageDiagram } from "@/components/content/chemistry/KetoneCleavageDiagram";
import { ConditionCard } from "@/components/content/chemistry/ConditionCard";
import { AlphaHydrogenTable } from "@/components/content/chemistry/AlphaHydrogenTable";
import { AldolStepFlow } from "@/components/content/chemistry/AldolStepFlow";
import { CrossedAldolBoard } from "@/components/content/chemistry/CrossedAldolBoard";
import { CannizzaroCompoundCards } from "@/components/content/chemistry/CannizzaroCompoundCards";
import { DisproportionationBoard } from "@/components/content/chemistry/DisproportionationBoard";
import { CannizzaroEquationCards } from "@/components/content/chemistry/CannizzaroEquationCards";
import { MetaDirectingCards } from "@/components/content/chemistry/MetaDirectingCards";
import { ReactionTable } from "@/components/content/chemistry/ReactionTable";
import { SectionNavGrid } from "@/components/content/chemistry/SectionNavGrid";
import { AcidNameTable } from "@/components/content/chemistry/AcidNameTable";
import { DicarboxylicSeriesTable } from "@/components/content/chemistry/DicarboxylicSeriesTable";
import { MnemonicCard } from "@/components/content/chemistry/MnemonicCard";
import { PhthalicAcidCard } from "@/components/content/chemistry/PhthalicAcidCard";
import { AcidStateCards } from "@/components/content/chemistry/AcidStateCards";
import { AcidBoilingBoard } from "@/components/content/chemistry/AcidBoilingBoard";
import { AcidSolubilityCards } from "@/components/content/chemistry/AcidSolubilityCards";
import { HydrolysisCards } from "@/components/content/chemistry/HydrolysisCards";
import { StackedReactionCard } from "@/components/content/chemistry/StackedReactionCard";
import { AcidChlorideCards } from "@/components/content/chemistry/AcidChlorideCards";
import { ReagentExceptionStrip } from "@/components/content/chemistry/ReagentExceptionStrip";
import { DecarboxylationCard } from "@/components/content/chemistry/DecarboxylationCard";
import { AlphaHalogenationCard } from "@/components/content/chemistry/AlphaHalogenationCard";
import { IonizationCard } from "@/components/content/chemistry/IonizationCard";
import { AcidReactionCards } from "@/components/content/chemistry/AcidReactionCards";
import { AcidityEffectCards } from "@/components/content/chemistry/AcidityEffectCards";
import { UsesBoard } from "@/components/content/chemistry/UsesBoard";

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

      <ReductionRouteCards
        routes={[
          {
            id: "h-8-4-3-a",
            letter: "A",
            title: "Reduction into alcohols",
            transformation: String.raw`\text{>C=O} \longrightarrow \text{>CH–OH}`,
            note: "Aldehydes give 1° alcohols; ketones give 2° alcohols.",
            tone: "chemistry",
          },
          {
            id: "h-8-4-3-b",
            letter: "B",
            title: "Reduction into hydrocarbons",
            transformation: String.raw`\text{>C=O} \longrightarrow \text{>CH}_2`,
            note: "Clemmensen and Wolff–Kishner both land on a methylene group.",
            tone: "ink",
          },
        ]}
      />

      <h4 id="h-8-4-3-a">Reduction into alcohols</h4>

      <AlcoholReductionBoard
        title="Agents and conversions"
        transformation={String.raw`\text{>C=O} \longrightarrow \text{>CH–OH}`}
        agents={[
          {
            name: "Lithium aluminium hydride",
            formula: String.raw`\text{LiAlH}_4`,
          },
          {
            name: "Sodium borohydride",
            formula: String.raw`\text{NaBH}_4`,
          },
          {
            name: "Catalytic hydrogenation",
            formula: String.raw`\text{Ni/Pd/Pt}`,
          },
        ]}
        conversions={[
          {
            name: "Formaldehyde",
            equation: String.raw`\text{HCHO} \longrightarrow \text{CH}_3\text{OH}`,
            classification: "1° Alcohol",
            tone: "primary",
          },
          {
            name: "Other aldehydes",
            equation: String.raw`\text{RCHO} \longrightarrow \text{R–CH}_2\text{OH}`,
            classification: "1° Alcohol",
            tone: "primary",
          },
          {
            name: "Ketones",
            equation: String.raw`\text{R}_2\text{CO} \longrightarrow \text{R}_2\text{CH–OH}`,
            classification: "2° Alcohol",
            tone: "secondary",
          },
        ]}
      />

      <h4 id="h-8-4-3-b">Reduction into hydrocarbons</h4>

      <MethyleneReductionCards
        title="Clemmensen and Wolff–Kishner"
        routes={[
          {
            name: "Clemmensen's reduction",
            reagent: "Zinc amalgam and hydrochloric acid.",
            reagentFormula: String.raw`\text{Zn–Hg / Conc. HCl}`,
            points: [
              "Converts the carbonyl group directly into a methylene group.",
            ],
            conversion: String.raw`\text{>C=O} \longrightarrow \text{–CH}_2\text{–}`,
            tone: "chemistry",
          },
          {
            name: "Wolff–Kishner reduction",
            reagent:
              "Hydrazine, then potassium hydroxide, in a high-boiling solvent.",
            reagentFormula: String.raw`\text{NH}_2\text{NH}_2 / \text{KOH}`,
            points: [
              "Conversion takes place via a hydrazone intermediate.",
            ],
            conversion: String.raw`\text{>C=O} \longrightarrow \text{–CH}_2\text{–}`,
            tone: "ink",
          },
        ]}
        common={
          <>
            Carbonyl group{" "}
            <span className="font-normal text-muted-foreground">→</span>{" "}
            methylene group
          </>
        }
      />

      <TableCard
        title="Quick revision"
        headers={["Reduction type", "Reagent", "Conversion"]}
        rows={[
          { cells: ["Into alcohols", "LiAlH₄", "C=O → CH–OH"] },
          { cells: ["Into alcohols", "NaBH₄", "C=O → CH–OH"] },
          { cells: ["Catalytic hydrogenation", "Ni / Pd / Pt", "C=O → CH–OH"] },
          { cells: ["Clemmensen", "Zn-Hg / Conc. HCl", "C=O → CH₂"] },
          { cells: ["Wolff–Kishner", "NH₂NH₂ / KOH", "C=O → CH₂"] },
        ]}
      />

      <h3 id="h-8-4-4">Oxidation</h3>

      <OxidationScopeCards
        aldehyde={{
          name: "Aldehydes",
          equation: String.raw`\text{Aldehyde} \xrightarrow{[O]} \text{Carboxylic acid}`,
          verdict: "Oxidation occurs",
          tone: "reacts",
        }}
        ketone={{
          name: "Ketones",
          equation: String.raw`\text{Ketone} \longrightarrow \text{No oxidation}`,
          verdict: "No oxidation",
          note: "Under normal conditions.",
          tone: "resists",
        }}
      />

      <h4>Oxidation of aldehydes</h4>

      <FormulaBlock
        label="General conversion"
        latex={String.raw`\text{Aldehyde} \longrightarrow \text{Carboxylic acid}`}
      />

      <ReagentGrid
        title="Oxidising agents"
        items={[
          { name: "KMnO₄" },
          { name: "K₂Cr₂O₇" },
          { name: "HNO₃" },
          { name: "Tollen's reagent" },
          { name: "Fehling's reagent" },
        ]}
      />

      <EquationProductCards
        title="Specific reactions"
        cards={[
          {
            title: "Oxidation of ethanal",
            tag: "KMnO₄",
            equation: String.raw`\text{CH}_3\text{CHO} \xrightarrow{\text{KMnO}_4} \text{CH}_3\text{COOH}`,
          },
          {
            title: "Oxidation of benzaldehyde",
            tag: "Conc. HNO₃",
            equation: String.raw`\text{C}_6\text{H}_5\text{CHO} \xrightarrow{\text{Conc. HNO}_3} \text{C}_6\text{H}_5\text{COOH}`,
            product: "Benzoic acid",
          },
          {
            title: "Oxidation of propanal",
            tag: "TR",
            equation: String.raw`\text{CH}_3\text{CH}_2\text{CHO} \xrightarrow{\text{TR}} \text{CH}_3\text{CH}_2\text{COOH}`,
          },
        ]}
      />

      <h4>Identification tests</h4>

      <TestObservationCard
        title="Tollen's test"
        tag="Identification test"
        reagent={{
          label: "Tollen's reagent (TR)",
          formula: String.raw`\text{TR} = \text{Ammoniacal AgNO}_3 \text{ solution}`,
        }}
        reaction={String.raw`\text{Aldehyde} \longrightarrow \text{Carboxylic acid} + \text{Ag}`}
        observation={{
          value: "Silver mirror formation",
          note: "Silver (Ag) is formed.",
        }}
      />

      <TestObservationCard
        title="Fehling's test"
        tag="Identification test"
        parts={[
          {
            label: "Fehling solution A",
            text: "Aqueous CuSO₄ solution.",
          },
          {
            label: "Fehling solution B",
            text: "Sodium potassium tartrate (Rochelle salt).",
          },
        ]}
        combine={{
          label: "Fehling's reagent",
          formula: String.raw`\text{FR} = \text{Solution A} + \text{Solution B}`,
        }}
        reaction={String.raw`\text{Aldehyde} \longrightarrow \text{Carboxylic acid} + \text{Cu}_2\text{O}`}
        observation={{ value: "Reddish-brown precipitate" }}
        warning="Aromatic aldehydes do not show Fehling's test."
      />

      <TestObservationCard
        title="Haloform test"
        tag="Identification test"
        reagent={{
          label: "Reagent",
          formula: String.raw`\text{NaOX}`,
          text: "Sodium hypohalite.",
        }}
        parts={[
          {
            label: "Methyl ketones",
            formula: String.raw`\text{R–CO–CH}_3`,
          },
          {
            label: "Specific alcohols",
            formula: String.raw`\text{CH}_3\text{–CH(OH)–}`,
          },
        ]}
        observation={{
          value: <Formula>{String.raw`\text{CHI}_3`}</Formula>,
          note: "Iodoform precipitate.",
        }}
      />

      <h4>Vigorous oxidation of ketones</h4>

      <KetoneCleavageDiagram
        title="Ketone cleavage"
        conditions={[
          "Strong oxidising agents (Strong OA)",
          "High temperature (High T)",
        ]}
        ketone={String.raw`\text{CH}_3\text{CH}_2\text{CO–CH}_3`}
        products={[
          String.raw`\text{HCOOH}`,
          String.raw`\text{CH}_3\text{COOH}`,
          String.raw`\text{CH}_3\text{CH}_2\text{COOH}`,
        ]}
        points={[
          "Asymmetric ketones undergo cleavage.",
          "The cleavage produces a mixture of lower carboxylic acids.",
        ]}
        warning="The supplied example has 4 carbon atoms in the reactant but 6 carbon atoms across the products. Check the original textbook or source before finalizing this equation."
      />

      <h3 id="h-8-4-5">Reactions due to α-hydrogens</h3>

      <h4>Aldol condensation</h4>

      <ConditionCard
        catalyst={{
          label: "Catalyst",
          formula: String.raw`\text{Dil. NaOH} / \text{Dil. KOH}`,
        }}
        condition={{
          label: "Essential condition",
          value: "Presence of at least one α-hydrogen (α-H)",
        }}
      />

      <AlphaHydrogenTable
        rows={[
          { compound: "CH₃–CHO", count: "3", present: true },
          { compound: "CH₃–CH₂–CHO", count: "2", present: true },
          { compound: "CH₃–CH(CH₃)–CHO", count: "1", present: true },
          { compound: "CH₃–C(CH₃)₂–CHO", present: false },
          { compound: "H–CHO", present: false },
          { compound: "C₆H₅CHO", present: false },
          { compound: "CH₃–CO–CH₃", present: true },
        ]}
      />

      <AldolStepFlow
        title="Aldol condensation of acetaldehyde"
        steps={[
          {
            label: "Step 1 · Aldol formation",
            equation: String.raw`2\,\text{CH}_3\text{CHO} \xrightarrow{\text{Dil. NaOH}} \text{CH}_3\text{CH(OH)CH}_2\text{CHO}`,
            product: "Aldol",
            detail: "β-hydroxy aldehyde",
            tone: "intermediate",
          },
          {
            label: "Step 2 · Dehydration",
            equation: String.raw`\text{CH}_3\text{CH(OH)CH}_2\text{CHO} \xrightarrow{\Delta,\; -\text{H}_2\text{O}} \text{CH}_3\text{CH=CHCHO}`,
            product: "But-2-enal (Crotonaldehyde)",
            tone: "product",
          },
        ]}
      />

      <AldolStepFlow
        title="Condensation of acetone"
        steps={[
          {
            label: "Step 1 · Ketol formation",
            equation: String.raw`2\,\text{CH}_3\text{COCH}_3 \xrightarrow{\text{Dil. NaOH}} (\text{CH}_3)_2\text{C(OH)CH}_2\text{COCH}_3`,
            product: "Ketol",
            tone: "intermediate",
          },
          {
            label: "Step 2 · Dehydration",
            equation: String.raw`(\text{CH}_3)_2\text{C(OH)CH}_2\text{COCH}_3 \xrightarrow{-\text{H}_2\text{O}} (\text{CH}_3)_2\text{C=CHCOCH}_3`,
            product: "Mesityl oxide",
            tone: "product",
          },
        ]}
      />

      <h4>Crossed aldol condensation</h4>

      <CrossedAldolBoard
        title="Four possible products"
        principle={[
          "Uses different aldehydes or ketones containing α-hydrogens.",
          "Two different carbonyl compounds participate.",
        ]}
        example={String.raw`\text{CH}_3\text{CHO} + \text{CH}_3\text{CH}_2\text{CHO} \xrightarrow[\Delta]{\text{Dil. NaOH}}`}
        exampleResult="?"
        count="4 possible combinations"
        combinations={[
          { label: "A–A", caption: "Self product 1", kind: "self" },
          { label: "B–B", caption: "Self product 2", kind: "self" },
          { label: "A–B", caption: "Cross product 1", kind: "cross" },
          { label: "B–A", caption: "Cross product 2", kind: "cross" },
        ]}
        products={[
          {
            title: "Self product 1 (A–A)",
            kind: "self",
            equation: String.raw`\text{CH}_3\text{CHO} + \text{CH}_3\text{CHO} \longrightarrow \text{CH}_3\text{CH=CHCHO}`,
            product: "But-2-enal",
          },
          {
            title: "Self product 2 (B–B)",
            kind: "self",
            equation: String.raw`\text{CH}_3\text{CH}_2\text{CHO} + \text{CH}_3\text{CH(CH}_3\text{)CHO} \longrightarrow \text{CH}_3\text{CH}_2\text{CH=C(CH}_3\text{)CHO}`,
            product: "2-Methylpent-2-enal",
          },
          {
            title: "Cross product 1 (A–B)",
            kind: "cross",
            equation: String.raw`\text{CH}_3\text{CHO} + \text{CH}_3\text{CH}_2\text{CHO} \longrightarrow \text{CH}_3\text{CH=C(CH}_3\text{)CHO}`,
            product: "2-Methylbut-2-enal",
          },
          {
            title: "Cross product 2 (B–A)",
            kind: "cross",
            equation: String.raw`\text{CH}_3\text{CH}_2\text{CHO} + \text{CH}_3\text{CHO} \longrightarrow \text{CH}_3\text{CH}_2\text{CH=CHCHO}`,
            product: "Pent-2-enal",
          },
        ]}
        warning="The main example pairs acetaldehyde (A) with propanal (B), but the listed B–B reaction uses propanal and 2-methylpropanal rather than two propanal molecules. Verify the original source before finalizing this entry."
      />

      <h3 id="h-8-4-6">Other reactions</h3>

      <h4>Cannizzaro reaction</h4>

      <ConditionCard
        catalyst={{
          label: "Catalyst",
          formula: String.raw`\text{Conc. NaOH} / \text{Conc. KOH}`,
        }}
        condition={{
          label: "Essential condition",
          value: "Absence of α-hydrogen",
        }}
        conditionIcon="cross"
      />

      <CannizzaroCompoundCards
        condition="No α-H"
        cards={[
          { name: "Formaldehyde", formula: "HCHO" },
          { name: "Benzaldehyde", formula: "C₆H₅CHO" },
          {
            name: "Trimethylacetaldehyde (Pivaldehyde)",
            formula: "(CH₃)₃C–CHO",
          },
        ]}
      />

      <DisproportionationBoard
        oxidation={{
          equation: String.raw`\text{Aldehyde} \longrightarrow \text{Carboxylic acid salt}`,
          product: "Carboxylic acid salt",
        }}
        reduction={{
          equation: String.raw`\text{Aldehyde} \longrightarrow 1^\circ \text{Alcohol}`,
          product: "1° alcohol",
          molecule: "Another aldehyde molecule",
        }}
      />

      <CannizzaroEquationCards
        cards={[
          {
            title: "Formaldehyde",
            equation: String.raw`2\,\text{HCHO} \xrightarrow{\text{Conc. NaOH}} \text{HCOONa} + \text{CH}_3\text{OH}`,
            oxidation: "Sodium formate",
            reduction: "Methanol",
          },
          {
            title: "Benzaldehyde",
            equation: String.raw`2\,\text{C}_6\text{H}_5\text{CHO} \xrightarrow{\text{Conc. NaOH}} \text{C}_6\text{H}_5\text{COONa} + \text{C}_6\text{H}_5\text{CH}_2\text{OH}`,
            oxidation: "Sodium benzoate",
            reduction: "Benzyl alcohol",
          },
        ]}
      />

      <h4>Electrophilic substitution</h4>

      <MetaDirectingCards
        title="Reactions of benzaldehyde"
        group="–CHO"
        effect="Meta-directing"
        cards={[
          {
            title: "Nitration",
            reagent: "Conc. HNO₃/H₂SO₄ or fuming HNO₃.",
            equation: String.raw`\text{Benzaldehyde} \longrightarrow m\text{-Nitrobenzaldehyde}`,
            product: "m-Nitrobenzaldehyde",
            substituent: "NO₂",
          },
          {
            title: "Sulfonation",
            equation: String.raw`\text{Benzaldehyde} \longrightarrow m\text{-Formylbenzenesulfonic acid}`,
            product: "m-Formylbenzenesulfonic acid",
            substituent: "SO₃H",
          },
        ]}
      />

      <h2 id="h-8-5">8.5 Nomenclature of Carboxylic Acids</h2>

      <SectionNavGrid
        title="Carboxylic acids — four sections"
        columns={4}
        items={[
          {
            id: "h-8-5",
            label: "Nomenclature",
            hint: "Monocarboxylic, dicarboxylic, aromatic",
          },
          {
            id: "h-8-6",
            label: "Physical properties",
            hint: "State, boiling point, solubility",
          },
          {
            id: "h-8-7",
            label: "Methods of preparation",
            hint: "Five routes",
          },
          {
            id: "h-8-8",
            label: "Chemical properties",
            hint: "Nine reactions",
          },
        ]}
      />

      <h3 id="h-8-5-mono">Monocarboxylic acids</h3>

      <AcidNameTable
        title="Monocarboxylic acids"
        lead="Aliphatic & aromatic."
        rows={[
          { formula: "H–COOH", common: "Formic acid", iupac: "Methanoic acid" },
          { formula: "CH₃–COOH", common: "Acetic acid", iupac: "Ethanoic acid" },
          { formula: "CH₃–CH₂–COOH", common: "Propionic acid", iupac: "Propanoic acid" },
          {
            formula: "CH₃–CH₂–CH₂–COOH",
            common: "Butyric acid",
            iupac: "Butanoic acid",
          },
          {
            formula: "CH₃–CH₂–CH₂–CH₂–COOH",
            common: "Valeric acid",
            iupac: "Pentanoic acid",
          },
          { formula: "C₆H₅–COOH", common: "Benzoic acid", iupac: "Benzoic acid" },
        ]}
      />

      <h3 id="h-8-5-di">Dicarboxylic acids</h3>

      <FormulaBlock
        latex={String.raw`\text{HOOC–(CH}_2\text{)}_n\text{–COOH}`}
        label="General formula"
      />

      <DicarboxylicSeriesTable
        title="Dicarboxylic acid series"
        caption="n increases down the series; the carbon chain grows by one CH₂ each step."
        rows={[
          {
            n: "0",
            formula: "COOH–COOH",
            common: "Oxalic acid",
            iupac: "Ethanedioic acid",
          },
          {
            n: "1",
            formula: "COOH–CH₂–COOH",
            common: "Malonic acid",
            iupac: "Propanedioic acid",
          },
          {
            n: "2",
            formula: "COOH–(CH₂)₂–COOH",
            common: "Succinic acid",
            iupac: "Butanedioic acid",
          },
          {
            n: "3",
            formula: "COOH–(CH₂)₃–COOH",
            common: "Glutaric acid",
            iupac: "Pentanedioic acid",
          },
          {
            n: "4",
            formula: "COOH–(CH₂)₄–COOH",
            common: "Adipic acid",
            iupac: "Hexanedioic acid",
          },
          {
            n: "5",
            formula: "COOH–(CH₂)₅–COOH",
            common: "Pimelic acid",
            iupac: "Heptanedioic acid",
          },
          {
            n: "6",
            formula: "COOH–(CH₂)₆–COOH",
            common: "Suberic acid",
            iupac: "Octanedioic acid",
          },
        ]}
      />

      <MnemonicCard
        title="Mnemonic — dicarboxylic acid series"
        phrase="Oh My Son Go And Pray Splendidly"
        entries={[
          { letter: "O", name: "Oxalic" },
          { letter: "M", name: "Malonic" },
          { letter: "S", name: "Succinic" },
          { letter: "G", name: "Glutaric" },
          { letter: "A", name: "Adipic" },
          { letter: "P", name: "Pimelic" },
          { letter: "S", name: "Suberic" },
        ]}
      />

      <h3 id="h-8-5-ortho">Aromatic dicarboxylic acid</h3>

      <PhthalicAcidCard
        title="Aromatic dicarboxylic acid"
        common="Phthalic acid"
        iupac="Benzene-1,2-dicarboxylic acid"
        formula="C₆H₄(COOH)₂"
        note="Two –COOH groups occupy adjacent positions."
      />

      <h2 id="h-8-6">8.6 Physical Properties of Carboxylic Acids</h2>

      <h3 id="h-8-6-state">Physical state</h3>

      <AcidStateCards
        title="Physical state"
        liquid={{ limit: "Up to 9 C", state: "Colourless liquids." }}
        solid={{ limit: "Above 9 C", state: "Colourless waxy solids." }}
        verification="the note writes “9 C” for both boundaries; kept as written until its intended meaning is confirmed."
      />

      <h3 id="h-8-6-boiling">Boiling point</h3>

      <AcidBoilingBoard
        title="Boiling point order"
        order={[
          { label: "HC" },
          { label: "Ald" },
          { label: "Ketone" },
          { label: "Alcohol" },
          { label: "C. acids", highlight: true },
        ]}
        reasons={[
          "Strong intermolecular hydrogen bonding.",
          "Carboxylic acids often form stable dimers.",
        ]}
        dimerCaption="Two O–H⋯O hydrogen bonds hold the pair together."
      />

      <h3 id="h-8-6-solubility">Solubility</h3>

      <AcidSolubilityCards
        title="Solubility in water"
        cards={[
          {
            title: "Lower members",
            verdict: "Soluble in water",
            points: ["Form hydrogen bonds with water molecules."],
            tone: "soluble",
          },
          {
            title: "Higher members",
            verdict: "Insoluble in water",
            points: ["Increasing size of the hydrophobic hydrocarbon chain."],
            tone: "insoluble",
          },
          {
            title: "Benzoic acid",
            verdict: "Crystalline solid",
            cold: { label: "Cold water", value: "Insoluble" },
            hot: { label: "Hot water", value: "Soluble" },
            tone: "aromatic",
          },
        ]}
      />

      <h2 id="h-8-7">8.7 Methods of Preparation of Carboxylic Acids</h2>

      <SectionNavGrid
        title="Methods of preparation"
        columns={5}
        items={[
          {
            id: "h-8-7-oxidation",
            label: "From primary alcohols and aldehydes",
            hint: "Alcohol → aldehyde → acid",
          },
          {
            id: "h-8-7-alkylbenzene",
            label: "From alkyl benzene",
            hint: "Benzylic hydrogen required",
          },
          {
            id: "h-8-7-grignard",
            label: "From Grignard reagent",
            hint: "Dry ice, then H₃O⁺",
          },
          {
            id: "h-8-7-hydrolysis",
            label: "Hydrolysis of nitriles",
            hint: "Nitrile card",
          },
          {
            id: "h-8-7-hydrolysis",
            label: "Hydrolysis of amides, acid chlorides, anhydrides and esters",
            hint: "Four derivative cards",
          },
        ]}
      />

      <CollapsibleSection
        title="1 · From primary alcohols and aldehydes"
        id="h-8-7-oxidation"
      >
        <ReactionPathway
          title="General reaction pathway"
          orientation="vertical"
          nodes={[
            { step: "Start", title: "1° Alcohol (–CH₂OH)" },
            { step: "Intermediate", title: "Aldehyde (–CHO)", tone: "intermediate" },
            {
              step: "Product",
              title: "Carboxylic acid (–COOH)",
              tone: "product",
              outcome: "–COOH",
            },
          ]}
          links={[{ label: "[O]" }, { label: "[O]" }]}
        />

        <ReagentGrid
          title="Reagents"
          items={[
            { name: "KMnO₄", detail: "Potassium permanganate" },
            { name: "K₂Cr₂O₇", detail: "Potassium dichromate" },
            { name: "CrO₃ / H₂SO₄", detail: "Jones' reagent" },
          ]}
        />

        <EquationProductCards
          title="Examples"
          columns={2}
          cards={[
            {
              title: "From primary alcohol",
              tag: "KMnO₄",
              equation: String.raw`\text{CH}_3\text{CH}_2\text{CH}_2\text{OH} \xrightarrow{\text{KMnO}_4} \text{CH}_3\text{CH}_2\text{COOH}`,
            },
            {
              title: "From aldehyde",
              tag: "CrO₃/H⁺",
              equation: String.raw`\text{CH}_3\text{CH}_2\text{CHO} \xrightarrow{\text{CrO}_3/\text{H}^{+}} \text{CH}_3\text{CH}_2\text{COOH}`,
            },
          ]}
        />
      </CollapsibleSection>

      <CollapsibleSection title="2 · From alkyl benzene" id="h-8-7-alkylbenzene">
        <Callout type="important" title="Essential condition">
          Presence of benzylic hydrogen.
        </Callout>

        <FormulaBlock
          latex={String.raw`\text{Alkylbenzene} \xrightarrow{\text{Alkaline KMnO}_4/\Delta} \text{Benzoic acid}`}
          label="General reaction"
        />

        <ReactionTable
          title="Examples & exceptions"
          headers={["Alkyl benzene", "Product", "Result"]}
          rows={[
            {
              cells: ["Toluene (C₆H₅–CH₃)", "Benzoic acid", "✓"],
              tone: "mild",
            },
            {
              cells: ["Ethylbenzene", "Benzoic acid", "✓"],
              tone: "mild",
            },
            {
              cells: ["Isopropylbenzene (Cumene)", "Benzoic acid", "✓"],
              tone: "mild",
            },
            {
              cells: ["Tert-butylbenzene [C₆H₅–C(CH₃)₃]", "—", "✗ No reaction"],
              tone: "resistant",
            },
          ]}
          caption="Ethylbenzene and isopropylbenzene produce benzoic acid regardless of alkyl chain length, provided benzylic hydrogen exists."
        />

        <Callout type="warning" title="Tert-butylbenzene — no reaction">
          Tert-butylbenzene does not react because it lacks benzylic hydrogen.
        </Callout>
      </CollapsibleSection>

      <CollapsibleSection
        title="3 · From Grignard reagent (RMgX)"
        id="h-8-7-grignard"
      >
        <ReactionPathway
          title="Reaction sequence"
          orientation="horizontal"
          nodes={[
            { step: "Stage 1", title: "Grignard reagent", equation: String.raw`\text{RMgX}` },
            {
              step: "Stage 2",
              title: "Addition product",
              tone: "intermediate",
              outcome: "Addition product",
            },
            {
              step: "Stage 3",
              title: "Carboxylic acid",
              equation: String.raw`\text{R–COOH}`,
              tone: "product",
              outcome: "Carboxylic acid",
            },
          ]}
          links={[
            { label: "Dry ice", condition: "Solid CO₂" },
            { label: "Hydrolysis", condition: "H₃O⁺" },
          ]}
        />

        <StackedReactionCard
          title="Example"
          steps={[
            {
              label: "Addition",
              equation: String.raw`\text{CH}_3\text{MgBr} + \text{CO}_2 \longrightarrow \text{Addition product}`,
            },
            {
              label: "Acid hydrolysis",
              equation: String.raw`\text{Addition product} \xrightarrow{\text{H}_3\text{O}^{+}} \text{CH}_3\text{COOH}`,
              product: "Acetic acid",
            },
          ]}
        />
      </CollapsibleSection>

      <CollapsibleSection
        title="4–5 · By hydrolysis of derivatives"
        id="h-8-7-hydrolysis"
      >
        <HydrolysisCards
          title="Hydrolysis of derivatives"
          cards={[
            {
              letter: "A",
              name: "Hydrolysis of nitriles",
              starting: String.raw`\text{R–C}\equiv\text{N}`,
              equation: String.raw`\text{R–C}\equiv\text{N} + \text{H}_2\text{O} \xrightarrow{\text{H}^{+}\text{ or OH}^{-}} \text{R–COOH} + \text{NH}_3`,
            },
            {
              letter: "B",
              name: "Hydrolysis of amides",
              starting: String.raw`\text{R–CONH}_2`,
              equation: String.raw`\text{R–CONH}_2 + \text{H}_2\text{O} \longrightarrow \text{R–COOH} + \text{NH}_3`,
            },
            {
              letter: "C",
              name: "Hydrolysis of acid chlorides",
              starting: String.raw`\text{R–COCl}`,
              equation: String.raw`\text{R–COCl} + \text{H}_2\text{O} \longrightarrow \text{R–COOH} + \text{HCl}`,
            },
            {
              letter: "D",
              name: "Hydrolysis of acid anhydrides",
              starting: String.raw`\text{(R–CO)}_2\text{O}`,
              equation: String.raw`\text{(R–CO)}_2\text{O} + \text{H}_2\text{O} \longrightarrow 2\,\text{R–COOH}`,
            },
          ]}
          featured={{
            letter: "E",
            name: "Hydrolysis of esters",
            starting: String.raw`\text{R–COOR}'`,
            equation: String.raw`\text{R–COOR}' + \text{H}_2\text{O} \xrightarrow{\text{H}^{+}} \text{R–COOH} + \text{R}'\text{–OH}`,
            example: {
              equation: String.raw`\text{CH}_3\text{COOCH}_3 + \text{H}_2\text{O} \xrightarrow{\text{H}^{+}} \text{CH}_3\text{COOH} + \text{CH}_3\text{OH}`,
              products: ["Ethanoic acid", "Methanol"],
            },
          }}
        />
      </CollapsibleSection>

      <h2 id="h-8-8">8.8 Chemical Properties of Carboxylic Acids</h2>

      <SectionNavGrid
        title="Nine reactions"
        columns={3}
        items={[
          { id: "h-8-8-acidity", label: "Acidity", hint: "Ionization and substituents" },
          {
            id: "h-8-8-anhydride",
            label: "Formation of anhydride",
            hint: "P₂O₅ or H₂SO₄",
          },
          {
            id: "h-8-8-esterification",
            label: "Esterification",
            hint: "Acid + alcohol or phenol",
          },
          {
            id: "h-8-8-acid-chloride",
            label: "Reaction with PCl₃, PCl₅ and SOCl₂",
            hint: "Three reagents, one product",
          },
          {
            id: "h-8-8-amide",
            label: "Reaction with NH₃",
            hint: "Ammonium salt, then heat",
          },
          { id: "h-8-8-reduction", label: "Reduction", hint: "LiAlH₄ or B₂H₆" },
          {
            id: "h-8-8-decarboxylation",
            label: "Decarboxylation",
            hint: "Soda lime, 3 : 1",
          },
          {
            id: "h-8-8-halogenation",
            label: "Halogenation",
            hint: "HVZ reaction",
          },
          {
            id: "h-8-8-substitution",
            label: "Electrophilic substitution",
            hint: "Benzoic acid, meta",
          },
        ]}
      />

      <CollapsibleSection title="1 · Acidity" id="h-8-8-acidity">
        <IonizationCard
          title="General ionization"
          equation={String.raw`\text{R–COOH} \rightleftharpoons \text{R–COO}^{-} + \text{H}^{+}`}
          ion="R–COO⁻"
        />

        <AcidReactionCards
          title="Reactions demonstrating acidity"
          cards={[
            {
              title: "Reaction with active metals",
              examples: "Na · Mg · Zn",
              general: String.raw`\text{Carboxylic acid} + \text{Active metal} \longrightarrow \text{Salt} + \text{H}_2\uparrow`,
              example: String.raw`2\,\text{CH}_3\text{COOH} + 2\,\text{Na} \longrightarrow 2\,\text{CH}_3\text{COONa} + \text{H}_2\uparrow`,
            },
            {
              title: "Reaction with bases / alkalis",
              examples: "NaOH",
              general: String.raw`\text{Carboxylic acid} + \text{Base} \longrightarrow \text{Salt} + \text{H}_2\text{O}`,
              example: String.raw`\text{CH}_3\text{COOH} + \text{NaOH} \longrightarrow \text{CH}_3\text{COONa} + \text{H}_2\text{O}`,
            },
            {
              title: "Reaction with carbonates & bicarbonates",
              examples: "NaHCO₃",
              general: String.raw`\text{Carboxylic acid} + \text{NaHCO}_3 \longrightarrow \text{Salt} + \text{H}_2\text{O} + \text{CO}_2\uparrow`,
              example: String.raw`\text{CH}_3\text{COOH} + \text{NaHCO}_3 \longrightarrow \text{CH}_3\text{COONa} + \text{H}_2\text{O} + \text{CO}_2\uparrow`,
            },
          ]}
        />

        <Callout type="note" title="Laboratory test">
          Effervescence due to CO₂ formation is used to detect the carboxylic acid group.
        </Callout>

        <AcidityEffectCards
          title="Effect of substituents on acidity"
          sides={[
            {
              kind: "EWG",
              heading: "Electron-Withdrawing Groups",
              direction: "increase",
              points: ["Stabilize carboxylate anion.", "Disperse negative charge."],
              groups: ["–NO₂", "–X", "–CF₃"],
            },
            {
              kind: "EDG",
              heading: "Electron-Donating Groups",
              direction: "decrease",
              points: ["Intensify negative charge on carboxylate anion."],
              groups: ["–CH₃", "–R"],
            },
          ]}
        />
      </CollapsibleSection>

      <CollapsibleSection title="2 · Formation of anhydride" id="h-8-8-anhydride">
        <ReagentGrid
          title="Dehydrating agents"
          items={[
            { name: "Concentrated H₂SO₄" },
            { name: "P₂O₅" },
            { name: "Heating" },
          ]}
        />

        <StackedReactionCard
          title="Formation of anhydride"
          tag="Dehydration"
          steps={[
            {
              label: "General reaction",
              equation: String.raw`2\,\text{R–COOH} \xrightarrow{\text{P}_2\text{O}_5/\Delta} \text{(R–CO)}_2\text{O} + \text{H}_2\text{O}`,
            },
            {
              label: "Example",
              equation: String.raw`2\,\text{CH}_3\text{COOH} \xrightarrow{\text{P}_2\text{O}_5/\Delta} \text{(CH}_3\text{CO)}_2\text{O} + \text{H}_2\text{O}`,
              product: "Ethanoic anhydride / Acetic anhydride",
            },
          ]}
        />
      </CollapsibleSection>

      <CollapsibleSection
        title="3 · Esterification"
        id="h-8-8-esterification"
      >
        <StackedReactionCard
          title="Esterification"
          tag="H⁺"
          steps={[
            {
              label: "General reaction",
              equation: String.raw`\text{Carboxylic acid} + \text{Alcohol/Phenol} \xrightarrow{\text{H}^{+}} \text{Ester} + \text{H}_2\text{O}`,
            },
            {
              label: "General formula",
              equation: String.raw`\text{R–COOH} + \text{HO–R}' \xrightarrow{\text{H}^{+}} \text{R–COOR}' + \text{H}_2\text{O}`,
            },
            {
              label: "Example — methyl ethanoate",
              equation: String.raw`\text{CH}_3\text{COOH} + \text{HOCH}_3 \xrightarrow{\text{H}^{+}} \text{CH}_3\text{COOCH}_3 + \text{H}_2\text{O}`,
              product: "Methyl ethanoate",
            },
          ]}
          footer={
            <>
              The ester functional group is <strong>–COOR′</strong>.
            </>
          }
        />
      </CollapsibleSection>

      <CollapsibleSection
        title="4 · Reaction with PCl₃, PCl₅ & SOCl₂"
        id="h-8-8-acid-chloride"
      >
        <AcidChlorideCards
          title="Acid chloride formation"
          transformation={String.raw`\text{Carboxylic acid} \longrightarrow \text{Acid chloride}`}
          cards={[
            {
              name: "With PCl₃",
              formula: "PCl₃",
              equation: String.raw`3\,\text{R–COOH} + \text{PCl}_3 \longrightarrow 3\,\text{R–COCl} + \text{H}_3\text{PO}_3`,
            },
            {
              name: "With PCl₅",
              formula: "PCl₅",
              equation: String.raw`\text{R–COOH} + \text{PCl}_5 \longrightarrow \text{R–COCl} + \text{HCl} + \text{POCl}_3`,
            },
            {
              name: "With SOCl₂",
              formula: "SOCl₂",
              equation: String.raw`\text{R–COOH} + \text{SOCl}_2 \longrightarrow \text{R–COCl} + \text{HCl} + \text{SO}_2\uparrow`,
              best: true,
              reason: "Byproducts are gaseous.",
            },
          ]}
        />
      </CollapsibleSection>

      <CollapsibleSection title="5 · Reaction with NH₃" id="h-8-8-amide">
        <ReactionPathway
          title="Reaction sequence"
          orientation="vertical"
          nodes={[
            {
              step: "Stage 1",
              title: "Ammonium carboxylate",
              equation: String.raw`\text{R–COOH} + \text{NH}_3 \rightleftharpoons \text{R–COONH}_4`,
              tone: "intermediate",
              outcome: "R–COONH₄",
            },
            {
              step: "Stage 2",
              title: "Amide",
              equation: String.raw`\text{R–CONH}_2 + \text{H}_2\text{O}`,
              tone: "product",
              outcome: "Amide",
            },
          ]}
          links={[{ label: "Heating", condition: "Δ" }]}
        />
      </CollapsibleSection>

      <CollapsibleSection title="6 · Reduction" id="h-8-8-reduction">
        <ReactionFormulaCard
          title="Reduction"
          tag="LiAlH₄"
          equation={String.raw`\text{R–COOH} \xrightarrow{\text{LiAlH}_4} \text{R–CH}_2\text{OH}`}
          equationLabel="General reaction"
          reagentTitle="Reducing agents"
          reagents={[
            { name: "LiAlH₄", formula: "Lithium aluminium hydride" },
            { name: "B₂H₆", formula: "Diborane — better/selective" },
          ]}
          footnote="Product: Primary alcohol (1° alcohol)."
        />

        <ReagentExceptionStrip
          agent="NaBH₄"
          formula="Sodium borohydride"
          statement="Does not reduce carboxylic acids."
        />
      </CollapsibleSection>

      <CollapsibleSection
        title="7 · Decarboxylation"
        id="h-8-8-decarboxylation"
      >
        <DecarboxylationCard
          title="Decarboxylation"
          reagent={{ name: "Soda lime", formula: "NaOH + CaO" }}
          ratio={String.raw`\boxed{\text{NaOH}:\text{CaO}=3:1}`}
          condition="Heating (Δ)"
          equation={String.raw`\text{R–COO}^{-}\text{Na}^{+} \xrightarrow{\text{Soda lime}/\Delta} \text{R–H} + \text{Na}_2\text{CO}_3`}
          example={{
            equation: String.raw`\text{CH}_3\text{CH}_2\text{COO}^{-}\text{Na}^{+} \longrightarrow \text{CH}_3\text{CH}_3`,
            product: "Ethane",
          }}
        />
      </CollapsibleSection>

      <CollapsibleSection
        title="8 · Halogenation — α-halogenation"
        id="h-8-8-halogenation"
      >
        <AlphaHalogenationCard
          title="Halogenation — α-halogenation"
          name="Hell–Volhard–Zelinsky (HVZ) Reaction"
          tag="Named reaction"
          reagents={["X₂ (Cl₂ or Br₂)", "Red phosphorus (Red P)", "Followed by H₂O"]}
          condition="Presence of at least one α-hydrogen."
          equation={String.raw`\text{R–CH}_2\text{–COOH} \xrightarrow{\text{Br}_2/\text{Red P}} \text{R–CH(Br)–COOH}`}
        />
      </CollapsibleSection>

      <CollapsibleSection
        title="9 · Electrophilic substitution"
        id="h-8-8-substitution"
      >
        <MetaDirectingCards
          title="Electrophilic substitution (aromatic)"
          group="–COOH"
          groupLabel="Carboxyl group"
          ringGroup="COOH"
          effect="Meta-directing"
          note="–COOH is a deactivating group."
          cards={[
            {
              title: "Nitration",
              reagent: "Conc. HNO₃/H₂SO₄",
              equation: String.raw`\text{Benzoic acid} \longrightarrow m\text{-Nitrobenzoic acid}`,
              product: "m-Nitrobenzoic acid",
              substituent: "NO₂",
            },
            {
              title: "Bromination",
              reagent: "Br₂/FeBr₃",
              equation: String.raw`\text{Benzoic acid} \longrightarrow m\text{-Bromobenzoic acid}`,
              product: "m-Bromobenzoic acid",
              substituent: "Br",
            },
          ]}
        />
      </CollapsibleSection>

      <h2 id="h-8-9">8.9 Uses of Aldehydes, Ketones and Carboxylic Acids</h2>

      <CollapsibleSection
        title="Uses of aldehydes and ketones"
        id="h-8-9-aldehydes"
      >
        <UsesBoard
          title="Uses of aldehydes and ketones"
          uses={[
            <>
              <strong>Formaldehyde</strong> — well known as <em>formalin</em> (40% solution),
              used to preserve biological specimens and to prepare bakelite (a
              phenol–formaldehyde resin), urea–formaldehyde glues and other polymeric products.
            </>,
            <>
              <strong>Acetaldehyde</strong> — the starting material for acetic acid, ethyl
              acetate, vinyl acetate, polymers and drugs.
            </>,
            <>
              <strong>Benzaldehyde</strong> — used in perfumery and in the dye industry.
            </>,
            <>
              <strong>Acetone</strong> and <strong>ethyl methyl ketone</strong> — common
              industrial solvents.
            </>,
            <>
              Butyraldehyde, vanillin, acetophenone and camphor are well known for their odours
              and flavours.
            </>,
          ]}
        />
      </CollapsibleSection>

      <CollapsibleSection
        title="Uses of carboxylic acids"
        id="h-8-9-acids"
      >
        <UsesBoard
          title="Uses of carboxylic acids"
          uses={[
            <>
              <strong>Methanoic acid</strong> — rubber, textile, dyeing, leather and electroplating
              industries.
            </>,
            <>
              <strong>Ethanoic acid</strong> — as a solvent, and as vinegar in the food industry.
            </>,
            <>
              <strong>Hexanedioic acid</strong> — manufacture of nylon-6,6.
            </>,
            <>
              <strong>Esters of benzoic acid</strong> — perfumery; <strong>sodium benzoate</strong>{" "}
              — food preservative.
            </>,
            <>
              <strong>Higher fatty acids</strong> — manufacture of soaps and detergents.
            </>,
          ]}
        />
      </CollapsibleSection>

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
