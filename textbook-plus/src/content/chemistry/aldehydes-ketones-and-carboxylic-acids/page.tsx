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
import { MoleculeStructure } from "@/components/content/chemistry/MoleculeStructure";
import { STRUCTURES } from "./structures.generated";

export default function AldehydesKetonesCarboxylicAcidsChapter() {
  return (
    <>
      <p>
        In the previous Unit you studied organic compounds with a carbon–oxygen
        <strong> single</strong> bond. This Unit is about compounds containing the
        carbon–oxygen <strong>double</strong> bond (&gt;C=O) — the{" "}
        <strong>carbonyl group</strong>, one of the most important functional groups in
        organic chemistry. Carbonyl compounds are constituents of fabrics, flavourings,
        plastics and drugs.
      </p>

      <Callout type="important" title="One functional group, six families">
        <ul className="space-y-1.5">
          <li>
            <strong>Aldehyde</strong> — the carbonyl carbon is bonded to a carbon and a
            hydrogen.
          </li>
          <li>
            <strong>Ketone</strong> — the carbonyl carbon is bonded to two carbon atoms.
          </li>
          <li>
            <strong>Carboxylic acid</strong> — the carbonyl carbon is bonded to carbon or
            hydrogen and to the oxygen of a hydroxyl moiety (–OH).
          </li>
          <li>
            <strong>Amide</strong> — the carbonyl carbon is bonded to the nitrogen of an
            –NH<sub>2</sub> moiety.
          </li>
          <li>
            <strong>Acyl halide</strong> — the carbonyl carbon is bonded to a halogen.
          </li>
          <li>
            <strong>Esters and anhydrides</strong> are derivatives of carboxylic acids.
          </li>
        </ul>
      </Callout>

      <p>
        Aldehydes, ketones and carboxylic acids are widespread in the plant and animal
        kingdoms and play an important role in biochemical processes of life. They also add
        fragrance and flavour to nature — <strong>vanillin</strong> (from vanilla beans),{" "}
        <strong>salicylaldehyde</strong> (from meadow sweet) and{" "}
        <strong>cinnamaldehyde</strong> (from cinnamon) all have very pleasant fragrances.
        Many of these families are manufactured for use as solvents (acetone) and for
        preparing adhesives, paints, resins, perfumes, plastics and fabrics.
      </p>

      <h2 id="h-8-1">8.1 Nomenclature and Structure of the Carbonyl Group</h2>

      <h3 id="h-8-1-1">8.1.1 Nomenclature</h3>

      <p>
        Aldehydes and ketones are the simplest and most important carbonyl compounds. There
        are two systems of naming them.
      </p>

      <h4 className="mt-5 mb-2 text-base font-bold">(a) Common names</h4>

      <ul>
        <li>
          The common names of most aldehydes are derived from the common names of the
          corresponding carboxylic acids by replacing the ending <em>–ic</em> of the acid
          with <em>aldehyde</em>.
        </li>
        <li>
          These names also reflect the Latin or Greek term for the original source of the
          acid or aldehyde.
        </li>
        <li>
          The position of a substituent in the chain is shown by Greek letters α, β, γ, δ,
          … — the <strong>α-carbon</strong> is the one directly linked to the aldehyde
          group, β the next, and so on.
        </li>
        <li>
          The common names of ketones are derived by naming the two alkyl or aryl groups
          bonded to the carbonyl group.
        </li>
        <li>
          For ketones the positions are marked αα′, ββ′, … starting from the carbon atoms
          next to the carbonyl group.
        </li>
        <li>
          Some ketones have historical common names — the simplest dimethyl ketone is
          called <strong>acetone</strong>.
        </li>
        <li>
          Alkyl phenyl ketones are named by adding the name of the acyl group as a prefix to
          the word <em>phenone</em> (acetophenone, propiophenone, butyrophenone).
        </li>
      </ul>

      <h4 className="mt-5 mb-2 text-base font-bold">(b) IUPAC names</h4>

      <ul>
        <li>
          The IUPAC names of open-chain aliphatic aldehydes and ketones are derived from the
          corresponding alkanes by replacing the ending <em>–e</em> with <em>–al</em> and{" "}
          <em>–one</em> respectively.
        </li>
        <li>
          For aldehydes the longest chain is numbered starting from the carbon of the
          aldehyde group.
        </li>
        <li>
          For ketones the numbering begins from the end nearer to the carbonyl group.
        </li>
        <li>
          Substituents are prefixed in alphabetical order with numerals showing their
          positions.
        </li>
        <li>
          In cyclic ketones the carbonyl carbon is numbered one.
        </li>
        <li>
          When the aldehyde group is attached to a ring, the suffix{" "}
          <strong>carbaldehyde</strong> is added after the full name of the cycloalkane; ring
          numbering starts from the carbon carrying the –CHO group.
        </li>
        <li>
          The simplest aromatic aldehyde is <strong>benzenecarbaldehyde</strong>; the common
          name <strong>benzaldehyde</strong> is also accepted by IUPAC, and other aromatic
          aldehydes are named as substituted benzaldehydes.
        </li>
      </ul>

      <TableCard
        title="Table 8.1: Common and IUPAC names of some aldehydes and ketones"
        headers={["Structure", "Common name", "IUPAC name"]}
        rows={[
          { cells: ["HCHO", "Formaldehyde", "Methanal"] },
          { cells: ["CH₃CHO", "Acetaldehyde", "Ethanal"] },
          {
            cells: ["(CH₃)₂CHCHO", "Isobutyraldehyde", "2-Methylpropanal"],
          },
          {
            cells: [
              "γ-Methylcyclohexanecarbaldehyde",
              "—",
              "3-Methylcyclohexanecarbaldehyde",
            ],
          },
          {
            cells: [
              "CH₃CH(OCH₃)CHO",
              "α-Methoxypropionaldehyde",
              "2-Methoxypropanal",
            ],
          },
          { cells: ["CH₃CH₂CH₂CH₂CHO", "Valeraldehyde", "Pentanal"] },
          { cells: ["CH₂=CHCHO", "Acrolein", "Prop-2-enal"] },
          {
            cells: ["C₆H₄(CHO)₂ (1,2)", "Phthaldehyde", "Benzene-1,2-dicarbaldehyde"],
          },
          {
            cells: [
              "m-BrC₆H₄CHO",
              "m-Bromobenzaldehyde",
              "3-Bromobenzaldehyde (3-bromobenzenecarbaldehyde)",
            ],
          },
          { cells: ["CH₃COCH₂CH₂CH₃", "Methyl n-propyl ketone", "Pentan-2-one"] },
          {
            cells: [
              "(CH₃)₂CHCOCH(CH₃)₂",
              "Diisopropyl ketone",
              "2,4-Dimethylpentan-3-one",
            ],
          },
          { cells: ["α-Methylcyclohexanone", "—", "2-Methylcyclohexanone"] },
          {
            cells: [
              "(CH₃)₂C=CHCOCH₃",
              "Mesityl oxide",
              "4-Methylpent-3-en-2-one",
            ],
          },
        ]}
        caption="The ketone column shows how the two groups attached to the carbonyl carbon decide the common name."
      />

      <MistakeCard
        mistake="Numbering an aldehyde chain from the end that gives the substituent the lowest locant."
        correction="For aldehydes the aldehyde carbon is always C-1 — the chain is numbered from –CHO, never from the other end."
        example="CH₃CH(CH₃)CH₂CH₂CHO is 4-methylpentanal, not 2-methylpentanal."
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

      <h3 id="h-8-2-1">8.2.1 Preparation of Aldehydes</h3>

      <p>The general routes, then the specific named methods:</p>

      <ul>
        <li>
          <strong>By oxidation of alcohols</strong> — primary alcohols give aldehydes
          (Unit 7).
        </li>
        <li>
          <strong>By dehydrogenation of alcohols</strong> — alcohol vapours are passed over
          heavy metal catalysts (Ag or Cu); suitable for volatile alcohols and used
          industrially. Primary alcohols → aldehydes, secondary alcohols → ketones.
        </li>
        <li>
          <strong>By ozonolysis of alkenes</strong> — ozonolysis followed by reaction with
          zinc dust and water gives aldehydes, ketones or a mixture, depending on the
          substitution pattern of the alkene (Unit 9).
        </li>
        <li>
          <strong>By hydration of alkynes</strong> — addition of water to ethyne in the
          presence of H<sub>2</sub>SO<sub>4</sub> and HgSO<sub>4</sub> gives acetaldehyde;
          all other alkynes give ketones.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{HC}\equiv\text{CH} + \text{H}_2\text{O} \xrightarrow{\text{H}_2\text{SO}_4,\ \text{HgSO}_4} \text{CH}_3\text{CHO}`}
        label="Hydration of ethyne"
      />

      <EquationLadder
        title="Named methods that stop cleanly at the aldehyde"
        steps={[
          {
            label: "Rosenmund reduction — from acyl chloride",
            equation: String.raw`\text{RCOCl} + \text{H}_2 \xrightarrow{\text{Pd/BaSO}_4} \text{RCHO} + \text{HCl}`,
            note: "Acyl chloride is hydrogenated over palladium on barium sulphate. The catalyst is deliberately poisoned so that the aldehyde is not reduced further.",
          },
          {
            label: "Stephen reaction — from a nitrile",
            equation: String.raw`\text{RCN} + \text{SnCl}_2 + \text{HCl} \longrightarrow \text{RCH=NH} \xrightarrow{\text{H}_3\text{O}^+} \text{RCHO}`,
            note: "Nitriles are reduced to the corresponding imine with stannous chloride in the presence of hydrochloric acid; hydrolysis of the imine gives the aldehyde.",
          },
          {
            label: "Selective reduction with DIBAL-H",
            equation: String.raw`\text{RCN} \xrightarrow{\text{DIBAL-H}} \text{RCH=NH} \xrightarrow{\text{H}_2\text{O}} \text{RCHO}`,
            note: "Diisobutylaluminium hydride (DIBAL-H) reduces nitriles selectively to imines, hydrolysed to aldehydes. Esters are also reduced to aldehydes with DIBAL-H.",
            final: true,
          },
        ]}
      />

      <h4 className="mt-5 mb-2 text-base font-bold">
        Aromatic aldehydes from aromatic hydrocarbons
      </h4>

      <p>
        Strong oxidising agents oxidise toluene and its derivatives all the way to benzoic
        acids. The oxidation can be stopped at the aldehyde stage with reagents that convert
        the methyl group into an intermediate difficult to oxidise further.
      </p>

      <TableCard
        title="Four routes to benzaldehyde"
        headers={["Method", "Reagents", "Key point"]}
        rows={[
          {
            cells: [
              "Etard reaction",
              "CrO₂Cl₂ (chromyl chloride), then H₃O⁺",
              "The methyl group becomes a chromium complex which hydrolyses to –CHO.",
            ],
          },
          {
            cells: [
              "Chromic oxide in acetic anhydride",
              "CrO₃ / (CH₃CO)₂O, then aqueous acid",
              "Toluene gives benzylidene diacetate, hydrolysed to benzaldehyde.",
            ],
          },
          {
            cells: [
              "Side-chain chlorination",
              "Cl₂ / hν, then hydrolysis",
              "Toluene → benzal chloride → benzaldehyde; the commercial manufacture of benzaldehyde.",
            ],
          },
          {
            cells: [
              "Gattermann–Koch reaction",
              "CO + HCl, anhydrous AlCl₃ or CuCl",
              "Formylation of benzene or a substituted benzene gives benzaldehyde or a substituted benzaldehyde.",
            ],
          },
        ]}
      />

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{CH}_3 \xrightarrow[\text{2. H}_3\text{O}^{+}]{\text{1. CrO}_2\text{Cl}_2} \text{C}_6\text{H}_5\text{CHO}`}
        label="Etard reaction"
      />

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_6 + \text{CO} + \text{HCl} \xrightarrow{\text{anhyd. AlCl}_3} \text{C}_6\text{H}_5\text{CHO}`}
        label="Gattermann–Koch reaction"
      />

      <h3 id="h-8-2-2">8.2.2 Preparation of Ketones</h3>

      <ProcessCard
        title="Three routes to ketones"
        steps={[
          {
            label: "From acyl chlorides",
            description:
              "Treatment of acyl chlorides with dialkylcadmium — prepared from cadmium chloride and a Grignard reagent — gives ketones.",
          },
          {
            label: "From nitriles",
            description:
              "Treating a nitrile with a Grignard reagent followed by hydrolysis yields a ketone.",
          },
          {
            label: "From benzene or substituted benzenes",
            description:
              "Benzene with an acid chloride in the presence of anhydrous aluminium chloride gives the corresponding ketone — the Friedel–Crafts acylation reaction.",
          },
        ]}
      />

      <FormulaBlock
        latex={String.raw`2\,\text{CH}_3\text{COCl} + (\text{C}_6\text{H}_5\text{CH}_2)_2\text{Cd} \longrightarrow 2\,\text{C}_6\text{H}_5\text{CH}_2\text{COCH}_3`}
        label="Acyl chloride + dialkylcadmium"
      />

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_6 + \text{CH}_3\text{COCl} \xrightarrow{\text{anhyd. AlCl}_3} \text{C}_6\text{H}_5\text{COCH}_3 + \text{HCl}`}
        label="Friedel–Crafts acylation"
      />

      <Expandable title="Example 8.1 — Naming the reagent for a transformation" variant="example">
        <p>
          <strong>Problem:</strong> Give the names of the reagents to bring about the
          following transformations:
        </p>
        <ul>
          <li>(i) Hexan-1-ol to hexanal</li>
          <li>(ii) Cyclohexanol to cyclohexanone</li>
          <li>(iii) p-Fluorotoluene to p-fluorobenzaldehyde</li>
          <li>(iv) Ethanenitrile to ethanal</li>
          <li>(v) Allyl alcohol to propenal</li>
          <li>(vi) But-2-ene to ethanal</li>
        </ul>
        <p>
          <strong>Solution:</strong>
        </p>
        <ul>
          <li>
            (i) Pyridinium chlorochromate (PCC) — it oxidises a primary alcohol only up to the
            aldehyde.
          </li>
          <li>(ii) Anhydrous CrO<sub>3</sub> (a secondary alcohol gives a ketone).</li>
          <li>
            (iii) CrO<sub>3</sub> in the presence of acetic anhydride, followed by hydrolysis.
          </li>
          <li>
            (iv) Diisobutylaluminium hydride (DIBAL-H), followed by hydrolysis.
          </li>
          <li>(v) PCC.</li>
          <li>
            (vi) O<sub>3</sub>/H<sub>2</sub>O–Zn dust (ozonolysis).
          </li>
        </ul>
      </Expandable>

      <Expandable title="Intext 8.2 — Products of the given reactions" variant="exercise">
        <p>
          <strong>Question:</strong> Write the structures of the products of the given
          reactions.
        </p>
        <p>
          <strong>How to read them:</strong> each of these is a “stop at the carbonyl”
          reaction, so the product keeps the carbonyl group intact —
        </p>
        <ul>
          <li>
            an acid chloride with H<sub>2</sub>/Pd–BaSO<sub>4</sub> gives the{" "}
            <strong>aldehyde</strong> with the same number of carbons;
          </li>
          <li>
            a nitrile with SnCl<sub>2</sub>/HCl followed by hydrolysis gives the{" "}
            <strong>aldehyde</strong>;
          </li>
          <li>
            a methylbenzene with CrO<sub>2</sub>Cl<sub>2</sub> then H<sub>3</sub>O
            <sup>+</sup> gives the <strong>benzaldehyde</strong>;
          </li>
          <li>
            an alkyne with Hg<sup>2+</sup>/H<sub>2</sub>SO<sub>4</sub> gives the{" "}
            <strong>ketone</strong> (except ethyne, which gives ethanal).
          </li>
        </ul>
      </Expandable>

      <h2 id="h-8-3">8.3 Physical Properties</h2>

      <ul>
        <li>
          <strong>Methanal</strong> is a gas at room temperature and <strong>ethanal</strong>{" "}
          a volatile liquid; other aldehydes and ketones are liquids or solids.
        </li>
        <li>
          Boiling points are <strong>higher than those of hydrocarbons and ethers</strong> of
          comparable molecular mass, because of weak molecular association through
          dipole–dipole interactions.
        </li>
        <li>
          They are <strong>lower than those of alcohols</strong> of similar molecular mass,
          because there is no intermolecular hydrogen bonding.
        </li>
        <li>
          The lower members (methanal, ethanal, propanone) are miscible with water in all
          proportions — they form hydrogen bonds with water.
        </li>
        <li>
          Solubility falls rapidly as the alkyl chain lengthens; all aldehydes and ketones are
          fairly soluble in benzene, ether, methanol, chloroform, etc.
        </li>
        <li>
          The lower aldehydes have sharp pungent odours; as the molecule grows the odour
          becomes less pungent and more fragrant — many occur in perfumes and flavouring
          agents.
        </li>
      </ul>

      <TableCard
        title="Boiling points of compounds of molecular mass 58–60"
        headers={["Compound", "b.p. / K", "Molecular mass"]}
        rows={[
          { cells: ["n-Butane", "273", "58"] },
          { cells: ["Methoxyethane", "281", "60"] },
          { cells: ["Propanal", "322", "58"] },
          { cells: ["Acetone", "329", "58"] },
          { cells: ["Propan-1-ol", "370", "60"] },
        ]}
        caption="Hydrocarbon < ether < aldehyde/ketone < alcohol — the same molecular mass, a different set of forces holding the molecules together."
      />

      <Expandable title="Example 8.2 — Ordering boiling points" variant="example">
        <p>
          <strong>Problem:</strong> Arrange the following in increasing order of boiling
          point: CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO, CH<sub>3</sub>CH
          <sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH, H<sub>5</sub>C<sub>2</sub>–O–C
          <sub>2</sub>H<sub>5</sub>, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH
          <sub>3</sub>.
        </p>
        <p>
          <strong>Solution:</strong> the molecular masses of these compounds are in the range
          72–74.
        </p>
        <ul>
          <li>
            Only butan-1-ol molecules are associated through extensive intermolecular hydrogen
            bonding, so butan-1-ol has the highest boiling point.
          </li>
          <li>
            Butanal is more polar than ethoxyethane, so the intermolecular dipole–dipole
            attraction is stronger in the aldehyde.
          </li>
          <li>The alkane molecules have only weak van der Waals forces.</li>
        </ul>
        <p>
          <strong>Increasing order:</strong>
        </p>
        <FormulaBlock
          latex={String.raw`\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_3 < \text{C}_2\text{H}_5\text{OC}_2\text{H}_5 < \text{CH}_3\text{CH}_2\text{CH}_2\text{CHO} < \text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{OH}`}
          important
        />
      </Expandable>

      <Expandable title="Intext 8.3 — Arrange by boiling point" variant="exercise">
        <p>
          <strong>Question:</strong> Arrange CH<sub>3</sub>CHO, CH<sub>3</sub>CH
          <sub>2</sub>OH, CH<sub>3</sub>OCH<sub>3</sub> and CH<sub>3</sub>CH<sub>2</sub>CH
          <sub>3</sub> in increasing order of boiling points.
        </p>
        <p>
          <strong>Answer:</strong>
        </p>
        <FormulaBlock
          latex={String.raw`\text{CH}_3\text{CH}_2\text{CH}_3 < \text{CH}_3\text{OCH}_3 < \text{CH}_3\text{CHO} < \text{CH}_3\text{CH}_2\text{OH}`}
        />
        <p>
          Propane has only van der Waals forces; ethoxyethane is weakly polar; ethanal is more
          polar (dipole–dipole); ethanol alone has intermolecular hydrogen bonding.
        </p>
      </Expandable>

      <h2 id="h-8-4">8.4 Chemical Reactions</h2>

      <p>
        Because both aldehydes and ketones carry the carbonyl group, they undergo similar
        chemical reactions.
      </p>

      <h3 id="h-8-4-1">1. Nucleophilic addition reactions</h3>

      <p>
        Contrary to the electrophilic additions of alkenes, aldehydes and ketones undergo{" "}
        <strong>nucleophilic addition</strong>.
      </p>

      <ProcessCard
        title="Mechanism of nucleophilic addition"
        steps={[
          {
            label: "Attack from above or below the plane",
            description:
              "A nucleophile attacks the electrophilic carbonyl carbon from a direction approximately perpendicular to the plane of the sp² orbitals.",
          },
          {
            label: "sp² → sp³",
            description:
              "The hybridisation of the carbonyl carbon changes from sp² to sp³ and a tetrahedral alkoxide intermediate is produced.",
          },
          {
            label: "Protonation",
            description:
              "The alkoxide takes a proton from the reaction medium to give the electrically neutral product.",
          },
          {
            label: "Net result",
            description:
              "Nu⁻ and H⁺ are added across the carbon–oxygen double bond.",
          },
        ]}
      />

      <FormulaBlock
        latex={String.raw`\text{>C=O} + \text{Nu}^{-} \longrightarrow \text{tetrahedral alkoxide} \xrightarrow{\text{H}^{+}} \text{>C(OH)(Nu)}`}
        label="Nucleophilic addition"
      />

      <KeyPoint title="Reactivity: aldehydes beat ketones">
        <p>
          Aldehydes are generally <strong>more reactive than ketones</strong> towards
          nucleophilic addition, for two reasons:
        </p>
        <ul>
          <li>
            <strong>Steric</strong> — two relatively large substituents in a ketone hinder the
            approach of the nucleophile; an aldehyde has only one such substituent.
          </li>
          <li>
            <strong>Electronic</strong> — two alkyl groups reduce the electrophilicity of the
            carbonyl carbon more effectively than one does.
          </li>
        </ul>
      </KeyPoint>

      <Expandable title="Example 8.3 — Benzaldehyde or propanal: which is more reactive?" variant="example">
        <p>
          <strong>Problem:</strong> Would you expect benzaldehyde to be more or less reactive
          than propanal in nucleophilic addition reactions? Explain.
        </p>
        <p>
          <strong>Solution:</strong> <strong>Less reactive.</strong> The carbonyl carbon of
          benzaldehyde is less electrophilic than that of propanal, because the polarity of
          the carbonyl group is reduced by resonance with the ring:
        </p>
        <FormulaBlock
          latex={String.raw`\text{C}_6\text{H}_5\text{CH=O} \ \longleftrightarrow \ \text{C}_6\text{H}_5\text{CH}^{+}-\text{O}^{-}`}
        />
        <p>
          The ring donates electron density into the carbonyl group, so the partial positive
          charge on carbon is smaller and the nucleophile attacks more slowly.
        </p>
      </Expandable>

      <h3 id="h-8-4-2">2. Important addition reactions</h3>

      <EquationLadder
        title="Nucleophilic addition at the carbonyl carbon"
        steps={[
          {
            label: "Hydrogen cyanide → cyanohydrin",
            equation: String.raw`\text{R}_2\text{C=O} + \text{HCN} \xrightarrow{\text{base}} \text{R}_2\text{C(OH)CN}`,
            note: "The reaction is very slow with pure HCN, so it is catalysed by a base; the CN⁻ generated is a stronger nucleophile. Cyanohydrins are useful synthetic intermediates.",
          },
          {
            label: "Sodium hydrogensulphite → bisulphite addition product",
            equation: String.raw`\text{R}_2\text{C=O} + \text{NaHSO}_3 \longrightarrow \text{R}_2\text{C(OH)SO}_3\text{Na}`,
            note: "The equilibrium lies largely to the right for most aldehydes and to the left for most ketones, for steric reasons. The adduct is water soluble and is reversed by dilute mineral acid or alkali — so it is used to separate and purify aldehydes.",
          },
          {
            label: "Alcohol (one equivalent) → hemiacetal",
            equation: String.raw`\text{RCHO} + \text{R}'\text{OH} \xrightarrow{\text{dry HCl}} \text{RCH(OH)OR}'`,
            note: "Dry HCl protonates the carbonyl oxygen and increases the electrophilicity of the carbonyl carbon.",
          },
          {
            label: "A second alcohol → acetal",
            equation: String.raw`\text{RCH(OH)OR}' + \text{R}'\text{OH} \longrightarrow \text{RCH(OR}')_2 + \text{H}_2\text{O}`,
            note: "The gem-dialkoxy compound is an acetal. Ketones with ethylene glycol give cyclic ethylene glycol ketals under the same conditions.",
          },
          {
            label: "Aqueous mineral acid reverses it",
            equation: String.raw`\text{RCH(OR}')_2 + \text{H}_2\text{O} \xrightarrow{\text{H}^{+}} \text{RCHO} + 2\,\text{R}'\text{OH}`,
            note: "Acetals and ketals are hydrolysed back to the corresponding aldehyde and ketone.",
            final: true,
          },
        ]}
      />

      <MoleculeStructure {...STRUCTURES.hexan_3_one_ethylene_ketal} maxWidth={420} />

      <h4 className="mt-5 mb-2 text-base font-bold">Addition of ammonia and its derivatives</h4>

      <p>
        Nucleophiles of the type H<sub>2</sub>N–Z add to the carbonyl group. The reaction is
        reversible and acid-catalysed; the equilibrium favours the product because the
        intermediate dehydrates rapidly to &gt;C=N–Z.
      </p>

      <FormulaBlock
        latex={String.raw`\text{R}_2\text{C=O} + \text{H}_2\text{N-Z} \ \rightleftharpoons \ \text{R}_2\text{C=N-Z} + \text{H}_2\text{O}`}
        label="General condensation with H₂N–Z"
      />

      <TableCard
        title="Table 8.2: Some N-substituted derivatives of aldehydes and ketones (>C=N–Z)"
        headers={["Z", "Reagent name", "Carbonyl derivative", "Product name"]}
        rows={[
          { cells: ["–H", "Ammonia", "Imine", "Imine"] },
          { cells: ["–R", "Amine", "Substituted imine", "Schiff's base"] },
          { cells: ["–OH", "Hydroxylamine", "Oxime", "Oxime"] },
          { cells: ["–NH₂", "Hydrazine", "Hydrazone", "Hydrazone"] },
          {
            cells: ["–C₆H₅NH", "Phenylhydrazine", "Phenylhydrazone", "Phenylhydrazone"],
          },
          {
            cells: [
              "–NHCONH₂",
              "Semicarbazide",
              "Semicarbazone",
              "Semicarbazone",
            ],
          },
          {
            cells: [
              "2,4-dinitrophenyl",
              "2,4-Dinitrophenylhydrazine",
              "2,4-DNP derivative",
              "2,4-Dinitrophenylhydrazone",
            ],
          },
        ]}
        caption="2,4-DNP derivatives are yellow, orange or red solids — useful for characterising aldehydes and ketones."
      />

      <MoleculeStructure {...STRUCTURES.cyclobutanone_semicarbazone} maxWidth={460} />

      <h3 id="h-8-4-3">3. Reduction</h3>

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

      <h3 id="h-8-4-4">4. Oxidation</h3>

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

      <h3 id="h-8-4-5">5. Reactions due to α-hydrogens</h3>

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

      <h3 id="h-8-4-6">6. Other reactions</h3>

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
