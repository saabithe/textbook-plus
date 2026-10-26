import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { MoleculeStructure } from "@/components/content/chemistry/MoleculeStructure";
import { STRUCTURES } from "./structures.generated";

export default function AminesChapter() {
  return (
    <>
      <Callout type="didyouknow" title="Amines Around You">
        <p>
          <strong>Amines</strong> constitute an important class of organic compounds derived by
          replacing one or more hydrogen atoms of ammonia molecule by alkyl/aryl group(s).
        </p>
        <ul>
          <li>
            In nature they occur among <strong>proteins, vitamins, alkaloids and hormones</strong>.
          </li>
          <li>Synthetic examples include <strong>polymers, dye stuffs and drugs</strong>.</li>
          <li>
            <strong>Adrenaline</strong> and <strong>ephedrine</strong>, both containing a secondary
            amino group, are used to increase blood pressure.
          </li>
          <li>
            <strong>Novocain</strong>, a synthetic amino compound, is used as an anaesthetic in
            dentistry.
          </li>
          <li>
            <strong>Benadryl</strong>, a well known antihistaminic drug, contains a tertiary amino
            group.
          </li>
          <li>
            <strong>Quaternary ammonium salts</strong> are used as surfactants.
          </li>
          <li>
            <strong>Diazonium salts</strong> are intermediates in the preparation of a variety of
            aromatic compounds including dyes.
          </li>
        </ul>
      </Callout>

      <KeyPoint title="Chief Commercial Use">
        <p>
          “The chief commercial use of amines is as <strong>intermediates in the synthesis of
          medicines and fibres</strong>.”
        </p>
      </KeyPoint>

      <h2 id="h-9-1">9.1 Structure of Amines</h2>

      <Callout type="important">
        Amines can be considered as <strong>derivatives of ammonia</strong>, obtained by replacement
        of one, two or all the three hydrogen atoms by alkyl and/or aryl groups.
      </Callout>

      <p>
        Like ammonia, the nitrogen atom of amines is <strong>trivalent</strong> and carries an{" "}
        <strong>unshared pair of electrons</strong>. Nitrogen orbitals in amines are therefore
        sp<sup>3</sup> hybridised and the geometry of amines is <strong>pyramidal</strong>.
      </p>

      <ul>
        <li>
          Each of the three sp<sup>3</sup> hybridised orbitals of nitrogen overlaps with orbitals of
          hydrogen or carbon, depending upon the composition of the amine.
        </li>
        <li>
          The <strong>fourth orbital</strong> of nitrogen in all amines holds an unshared pair of
          electrons.
        </li>
        <li>
          Because of that lone pair, the angle C–N–E (E = C or H) is <strong>less than 109.5°</strong>
          ; in trimethylamine it is <strong>108°</strong>.
        </li>
        <li>
          In trimethylamine the three methyl groups sit at the corners of a pyramid with nitrogen
          at the apex — the same shape as ammonia.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\angle\,\text{C–N–C} = 108^\circ \;(\text{trimethylamine}) \;<\; 109.5^\circ \;(\text{tetrahedral})`}
        label="Pyramidal nitrogen"
      />

      <KeyPoint title="Structure in One Line">
        <p>
          Nitrogen keeps its lone pair in an sp<sup>3</sup> orbital, so every amine is{" "}
          <Highlight color="yellow">pyramidal, not planar</Highlight> — and that lone pair is what
          makes amines basic and nucleophilic.
        </p>
      </KeyPoint>

      <h2 id="h-9-2">9.2 Classification of Amines</h2>

      <p>
        Amines are classified as <strong>primary (1°)</strong>, <strong>secondary (2°)</strong> and{" "}
        <strong>tertiary (3°)</strong> depending upon the number of hydrogen atoms replaced by alkyl
        or aryl groups in the ammonia molecule.
      </p>

      <ul>
        <li>
          Replacement of <strong>one</strong> hydrogen atom of ammonia by R or Ar gives RNH
          <sub>2</sub> or ArNH<sub>2</sub> — a primary amine.
        </li>
        <li>
          Replacement of a second hydrogen atom (of ammonia, or of R–NH<sub>2</sub>) by another
          alkyl/aryl group R′ gives R–NHR′ — a secondary amine.
        </li>
        <li>The second alkyl/aryl group may be the same as the first, or different.</li>
        <li>
          Replacement of a third hydrogen atom by an alkyl/aryl group gives a tertiary amine,
          R<sub>3</sub>N.
        </li>
        <li>
          Amines are said to be <strong>simple</strong> when all the alkyl or aryl groups are the
          same, and <strong>mixed</strong> when they are different.
        </li>
      </ul>

      <TableCard
        caption="Table 9.1a: The three classes of amines"
        headers={["Class", "General formula", "Example", "Groups on nitrogen"]}
        rows={[
          { cells: ["Primary (1°)", "RNH₂ / ArNH₂", "Methanamine, CH₃NH₂", "1"] },
          { cells: ["Secondary (2°)", "R₂NH / R–NHR′", "N-Methylmethanamine, CH₃NHCH₃", "2"] },
          { cells: ["Tertiary (3°)", "R₃N", "N,N-Dimethylmethanamine, (CH₃)₃N", "3"] },
        ]}
      />

      <KeyPoint title="Class = Hydrogen Count Replaced">
        <p>
          Count the hydrogens of NH<sub>3</sub> that have been replaced: one replaced → 1°, two → 2°,
          three → 3°. Every class still keeps <strong>one unshared pair</strong> on nitrogen, so all
          three behave as <strong>Lewis bases</strong>.
        </p>
      </KeyPoint>

      <h2 id="h-9-3">9.3 Nomenclature</h2>

      <Callout type="important">
        In the IUPAC system, primary amines are named as <strong>alkanamines</strong>. The name is
        derived by replacement of ‘e’ of alkane by the word amine — CH<sub>3</sub>NH<sub>2</sub> is
        methanamine.
      </Callout>

      <h3>Common names</h3>
      <ul>
        <li>
          An aliphatic amine is named by prefixing the alkyl group to amine, i.e. alkylamine as one
          word (methylamine).
        </li>
        <li>
          In secondary and tertiary amines with identical groups, the prefix <strong>di</strong> or{" "}
          <strong>tri</strong> is appended before the name of the alkyl group (dimethylamine,
          trimethylamine).
        </li>
      </ul>

      <h3>IUPAC names</h3>
      <ul>
        <li>
          More than one –NH<sub>2</sub> group: positions are specified by numbering the carbon atoms
          bearing –NH<sub>2</sub>, with a prefix di, tri, etc.
        </li>
        <li>
          The letter ‘e’ of the suffix of the hydrocarbon part is <strong>retained</strong> — H
          <sub>2</sub>N–CH<sub>2</sub>–CH<sub>2</sub>–NH<sub>2</sub> is ethane-1,2-diamine.
        </li>
        <li>
          For secondary and tertiary amines the locant <strong>N</strong> designates a substituent
          attached to the nitrogen atom.
        </li>
        <li>
          CH<sub>3</sub>NHCH<sub>2</sub>CH<sub>3</sub> is N-methylethanamine; (CH<sub>3</sub>CH
          <sub>2</sub>)<sub>3</sub>N is N,N-diethylethanamine.
        </li>
      </ul>

      <h3>Arylamines</h3>
      <ul>
        <li>
          In arylamines the –NH<sub>2</sub> group is attached directly to the benzene ring; C
          <sub>6</sub>H<sub>5</sub>NH<sub>2</sub> is the simplest example.
        </li>
        <li>
          Its common name <strong>aniline</strong> is also an accepted IUPAC name; by the systematic
          rule (suffix ‘e’ of arene replaced by ‘amine’) it is <strong>benzenamine</strong>.
        </li>
      </ul>

      <TableCard
        caption="Table 9.1: Nomenclature of some alkylamines and arylamines"
        headers={["Structure", "Common name", "IUPAC name"]}
        rows={[
          { cells: ["CH₃–CH₂–NH₂", "Ethylamine", "Ethanamine"] },
          { cells: ["CH₃–CH₂–CH₂–NH₂", "n-Propylamine", "Propan-1-amine"] },
          { cells: ["(CH₃)₂CH–NH₂", "Isopropylamine", "Propan-2-amine"] },
          { cells: ["CH₃–CH₂–NH–CH₃", "Ethylmethylamine", "N-Methylethanamine"] },
          { cells: ["(CH₃)₃N", "Trimethylamine", "N,N-Dimethylmethanamine"] },
          { cells: ["(C₂H₅)₂N–C₄H₉", "N,N-Diethylbutylamine", "N,N-Diethylbutan-1-amine"] },
          { cells: ["CH₂=CH–CH₂–NH₂", "Allylamine", "Prop-2-en-1-amine"] },
          { cells: ["H₂N–(CH₂)₆–NH₂", "Hexamethylenediamine", "Hexane-1,6-diamine"] },
          { cells: ["C₆H₅–NH₂", "Aniline", "Aniline or Benzenamine"] },
          { cells: ["o-CH₃–C₆H₄–NH₂", "o-Toluidine", "2-Methylaniline"] },
          { cells: ["p-Br–C₆H₄–NH₂", "p-Bromoaniline", "4-Bromobenzenamine or 4-Bromoaniline"] },
          { cells: ["C₆H₅–N(CH₃)₂", "N,N-Dimethylaniline", "N,N-Dimethylbenzenamine"] },
        ]}
      />

      <MistakeCard
        mistake="Naming (CH₃)₃N as trimethylamine in IUPAC style — “N,N,N-trimethylmethanamine”."
        correction="Only the substituents on nitrogen take the locant N. (CH₃)₃N is N,N-dimethylmethanamine: one methyl is the parent chain, the other two are N-substituents."
        example="Similarly (CH₃CH₂)₃N is N,N-diethylethanamine, not triethylethanamine."
      />

      <h2 id="h-9-4">9.4 Preparation of Amines</h2>

      <p>Amines are prepared by the following methods.</p>

      <h3>1. Reduction of nitro compounds</h3>
      <ul>
        <li>
          Nitro compounds are reduced to amines by passing hydrogen gas in the presence of finely
          divided <strong>nickel, palladium or platinum</strong>.
        </li>
        <li>They are also reduced by metals in acidic medium.</li>
        <li>Nitroalkanes can be similarly reduced to the corresponding alkanamines.</li>
        <li>
          Reduction with <strong>iron scrap and hydrochloric acid</strong> is preferred because the
          FeCl<sub>2</sub> formed gets hydrolysed to release hydrochloric acid during the reaction —
          so only a small amount of acid is needed to start it.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{NO}_2 + 3\text{H}_2 \xrightarrow{\text{Ni / Pd / Pt}} \text{C}_6\text{H}_5\text{NH}_2 + 2\text{H}_2\text{O}`}
        label="Catalytic hydrogenation"
      />

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{NO}_2 + 3\text{Fe} + 6\text{HCl} \longrightarrow \text{C}_6\text{H}_5\text{NH}_2 + 3\text{FeCl}_2 + 2\text{H}_2\text{O}`}
        label="Iron scrap + HCl"
      />

      <h3>2. Ammonolysis of alkyl halides</h3>
      <ul>
        <li>
          The C–X bond of an alkyl or benzyl halide is cleaved by a nucleophile; with an ethanolic
          solution of ammonia the halogen is replaced by –NH<sub>2</sub>.
        </li>
        <li>
          This cleavage of the C–X bond by ammonia is called <strong>ammonolysis</strong>; it is
          carried out in a <strong>sealed tube at 373 K</strong>.
        </li>
        <li>
          The primary amine formed is itself a nucleophile, so it reacts with more alkyl halide to
          give secondary and tertiary amines and finally a quaternary ammonium salt.
        </li>
        <li>
          <Highlight color="yellow">A large excess of ammonia</Highlight> makes the primary amine the
          major product.
        </li>
        <li>
          Order of reactivity of halides with amines: <strong>RI &gt; RBr &gt; RCl</strong>.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{C}_2\text{H}_5\text{Cl} \xrightarrow{\text{NH}_3} \text{C}_2\text{H}_5\text{NH}_2 \xrightarrow{\text{C}_2\text{H}_5\text{Cl}} (\text{C}_2\text{H}_5)_2\text{NH} \xrightarrow{\text{C}_2\text{H}_5\text{Cl}} (\text{C}_2\text{H}_5)_3\text{N} \xrightarrow{\text{C}_2\text{H}_5\text{Cl}} (\text{C}_2\text{H}_5)_4\text{N}^+\text{Cl}^-`}
        label="Successive ammonolysis"
      />

      <p>
        The free amine is obtained from the ammonium salt by treatment with a strong base:
      </p>

      <FormulaBlock
        latex={String.raw`\text{RNH}_3^+\text{X}^- + \text{NaOH} \longrightarrow \text{RNH}_2 + \text{NaX} + \text{H}_2\text{O}`}
      />

      <Callout type="note">
        Disadvantage of ammonolysis: it gives a <strong>mixture</strong> of primary, secondary and
        tertiary amines together with a quaternary ammonium salt, so the product must be separated.
      </Callout>

      <h3>3. Reduction of nitriles</h3>
      <ul>
        <li>
          Nitriles on reduction with <strong>LiAlH<sub>4</sub></strong> or by catalytic hydrogenation
          give primary amines.
        </li>
        <li>
          The reaction is used for the <strong>ascent of the amine series</strong> — it makes an
          amine with one carbon atom more than the starting amine.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{R–CN} + 4\text{H} \xrightarrow{\text{LiAlH}_4} \text{R–CH}_2\text{NH}_2`}
      />

      <h3>4. Reduction of amides</h3>
      <ul>
        <li>
          Amides on reduction with <strong>LiAlH<sub>4</sub></strong> yield amines.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{R–CONH}_2 + 4\text{H} \xrightarrow{\text{LiAlH}_4} \text{R–CH}_2\text{NH}_2 + \text{H}_2\text{O}`}
      />

      <h3>5. Gabriel phthalimide synthesis</h3>
      <ul>
        <li>Gabriel synthesis is used for the preparation of <strong>primary amines</strong>.</li>
        <li>
          Phthalimide is treated with ethanolic potassium hydroxide to form the potassium salt of
          phthalimide.
        </li>
        <li>
          Heating that salt with an alkyl halide, followed by alkaline hydrolysis, gives the
          corresponding primary amine.
        </li>
        <li>
          <Highlight color="yellow">
            Aromatic primary amines cannot be prepared this way
          </Highlight>{" "}
          because aryl halides do not undergo nucleophilic substitution with the anion formed by
          phthalimide.
        </li>
      </ul>

      <EquationLadder
        title="Gabriel phthalimide synthesis"
        steps={[
          {
            label: "Phthalimide + ethanolic KOH → potassium phthalimide",
            equation: String.raw`\text{Phthalimide} + \text{KOH (ethanolic)} \longrightarrow \text{Potassium phthalimide} + \text{H}_2\text{O}`,
          },
          {
            label: "Potassium phthalimide + alkyl halide → N-alkylphthalimide",
            equation: String.raw`\text{Potassium phthalimide} + \text{R–X} \longrightarrow \text{N-alkylphthalimide} + \text{KX}`,
          },
          {
            label: "Alkaline hydrolysis → primary amine + phthalate",
            equation: String.raw`\text{N-alkylphthalimide} \xrightarrow{\text{OH}^-/\text{H}_2\text{O},\;\Delta} \text{R–NH}_2 + \text{phthalate ion}`,
            final: true,
          },
        ]}
      />

      <h3>6. Hoffmann bromamide degradation reaction</h3>
      <ul>
        <li>
          Hoffmann developed a method for the preparation of primary amines by treating an amide
          with <strong>bromine in an aqueous or ethanolic solution of sodium hydroxide</strong>.
        </li>
        <li>
          In this degradation, an alkyl or aryl group <strong>migrates from the carbonyl carbon of
          the amide to the nitrogen atom</strong>.
        </li>
        <li>
          The amine so formed contains <Highlight color="blue">one carbon less</Highlight> than that
          present in the amide — a descent of the series.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{R–CONH}_2 + \text{Br}_2 + 4\text{NaOH} \longrightarrow \text{R–NH}_2 + \text{Na}_2\text{CO}_3 + 2\text{NaBr} + 2\text{H}_2\text{O}`}
        label="Hoffmann bromamide degradation"
      />

      <KeyPoint title="Primary Amines Only">
        <p>
          Every method above gives a <strong>mixture</strong> except two: Gabriel phthalimide
          synthesis and Hoffmann bromamide degradation both give{" "}
          <Highlight color="yellow">pure primary amines</Highlight>. Gabriel works only for alkyl
          halides; Hoffmann works for both alkyl and aryl amides.
        </p>
      </KeyPoint>

      <Expandable title="Example 9.1 — Equations for two reactions" variant="example">
        <p>
          <strong>Problem:</strong> Write chemical equations for the following reactions:
        </p>
        <p>(i) Reaction of ethanolic NH<sub>3</sub> with C<sub>2</sub>H<sub>5</sub>Cl.</p>
        <p>
          (ii) Ammonolysis of benzyl chloride and reaction of the amine so formed with two moles of
          CH<sub>3</sub>Cl.
        </p>
        <p>
          <strong>Solution:</strong>
        </p>
        <p>(i) Ammonolysis of ethyl chloride:</p>
        <FormulaBlock
          latex={String.raw`\text{C}_2\text{H}_5\text{Cl} + \text{NH}_3\;(\text{ethanolic}) \longrightarrow \text{C}_2\text{H}_5\text{NH}_2 + \text{HCl}`}
        />
        <p>(ii) Benzyl chloride first gives benzylamine, which is then alkylated twice:</p>
        <FormulaBlock
          latex={String.raw`\text{C}_6\text{H}_5\text{CH}_2\text{Cl} + \text{NH}_3 \longrightarrow \text{C}_6\text{H}_5\text{CH}_2\text{NH}_2 + \text{HCl}`}
        />
        <FormulaBlock
          latex={String.raw`\text{C}_6\text{H}_5\text{CH}_2\text{NH}_2 + 2\text{CH}_3\text{Cl} \longrightarrow \text{C}_6\text{H}_5\text{CH}_2\text{N}(\text{CH}_3)_2 + 2\text{HCl}`}
        />
        <p>
          The final product is <strong>N,N-dimethylbenzylamine</strong> (N,N-dimethyl-1-phenylmethanamine).
        </p>
      </Expandable>

      <Expandable title="Example 9.2 — Conversions by chain lengthening" variant="example">
        <p>
          <strong>Problem:</strong> Write chemical equations for the following conversions:
        </p>
        <p>
          (i) CH<sub>3</sub>–CH<sub>2</sub>–Cl into CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–NH
          <sub>2</sub>
        </p>
        <p>
          (ii) C<sub>6</sub>H<sub>5</sub>–CH<sub>2</sub>–Cl into C<sub>6</sub>H<sub>5</sub>–CH
          <sub>2</sub>–CH<sub>2</sub>–NH<sub>2</sub>
        </p>
        <p>
          <strong>Solution:</strong> Both are one-carbon ascents. Convert the halide to the nitrile
          with KCN, then reduce the nitrile with LiAlH<sub>4</sub>.
        </p>
        <p>(i)</p>
        <FormulaBlock
          latex={String.raw`\text{CH}_3\text{CH}_2\text{Cl} \xrightarrow{\text{KCN}} \text{CH}_3\text{CH}_2\text{CN} \xrightarrow{\text{LiAlH}_4} \text{CH}_3\text{CH}_2\text{CH}_2\text{NH}_2`}
        />
        <p>(ii)</p>
        <FormulaBlock
          latex={String.raw`\text{C}_6\text{H}_5\text{CH}_2\text{Cl} \xrightarrow{\text{KCN}} \text{C}_6\text{H}_5\text{CH}_2\text{CN} \xrightarrow{\text{LiAlH}_4} \text{C}_6\text{H}_5\text{CH}_2\text{CH}_2\text{NH}_2`}
        />
      </Expandable>

      <Expandable title="Example 9.3 — Amide that gives a named amine on Hoffmann degradation" variant="example">
        <p>
          <strong>Problem:</strong> Write structures and IUPAC names of (i) the amide which gives
          propanamine by Hoffmann bromamide reaction, (ii) the amine produced by the Hoffmann
          degradation of benzamide.
        </p>
        <p>
          <strong>Solution:</strong>
        </p>
        <p>
          (i) Propanamine contains three carbons, so the amide molecule must contain{" "}
          <strong>four</strong> carbons:
        </p>
        <p>
          CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CONH<sub>2</sub> —{" "}
          <strong>butanamide</strong>
        </p>
        <p>
          (ii) Benzamide is an aromatic amide with seven carbons, so the amine formed is an aromatic
          primary amine with six carbons:
        </p>
        <p>
          C<sub>6</sub>H<sub>5</sub>–NH<sub>2</sub> — <strong>aniline</strong> (benzenamine)
        </p>
      </Expandable>

      <Expandable title="Intext 9.2 — Isomeric amines of C₄H₁₁N" variant="exercise">
        <p>
          <strong>Question:</strong> (i) Write structures of different isomeric amines corresponding
          to the molecular formula C<sub>4</sub>H<sub>11</sub>N. (ii) Write IUPAC names of all the
          isomers. (iii) What type of isomerism is exhibited by different pairs of amines?
        </p>
        <p>
          <strong>Answer:</strong>
        </p>
        <p>
          (i) and (ii) — four primary, three secondary and one tertiary amine:
        </p>
        <ul>
          <li>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> — butan-1-amine</li>
          <li>CH<sub>3</sub>CH<sub>2</sub>CH(NH<sub>2</sub>)CH<sub>3</sub> — butan-2-amine</li>
          <li>(CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>NH<sub>2</sub> — 2-methylpropan-1-amine</li>
          <li>(CH<sub>3</sub>)<sub>3</sub>CNH<sub>2</sub> — 2-methylpropan-2-amine</li>
          <li>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NHCH<sub>3</sub> — N-methylpropan-1-amine</li>
          <li>(CH<sub>3</sub>)<sub>2</sub>CHNHCH<sub>3</sub> — N-methylpropan-2-amine</li>
          <li>CH<sub>3</sub>CH<sub>2</sub>NHCH<sub>2</sub>CH<sub>3</sub> — N-ethylethanamine</li>
          <li>(CH<sub>3</sub>)<sub>2</sub>NCH<sub>2</sub>CH<sub>3</sub> — N,N-dimethylethanamine</li>
        </ul>
        <p>
          (iii) <strong>Chain isomerism</strong> (straight vs branched skeleton),{" "}
          <strong>position isomerism</strong> (the –NH<sub>2</sub> group at different carbons) and{" "}
          <strong>metamerism</strong> (different alkyl groups distributed around the nitrogen atom,
          e.g. N-ethylethanamine versus N,N-dimethylethanamine).
        </p>
      </Expandable>

      <Expandable title="Intext 9.3 — Three conversions to amines" variant="exercise">
        <p>
          <strong>Question:</strong> How will you convert (i) benzene into aniline, (ii) benzene into
          N,N-dimethylaniline, (iii) Cl–(CH<sub>2</sub>)<sub>4</sub>–Cl into hexane-1,6-diamine?
        </p>
        <p>
          <strong>Answer:</strong>
        </p>
        <p>(i) Nitration, then reduction of the nitro group:</p>
        <p>
          C<sub>6</sub>H<sub>6</sub> → (conc. HNO<sub>3</sub> / conc. H<sub>2</sub>SO<sub>4</sub>) C
          <sub>6</sub>H<sub>5</sub>NO<sub>2</sub> → (Fe / HCl) C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>
        </p>
        <p>(ii) Aniline is then exhaustively alkylated:</p>
        <p>
          C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> → (excess CH<sub>3</sub>I, Na<sub>2</sub>CO
          <sub>3</sub>) C<sub>6</sub>H<sub>5</sub>N(CH<sub>3</sub>)<sub>2</sub>
        </p>
        <p>(iii) Two successive one-carbon ascents on a dihalide give the C<sub>6</sub> diamine:</p>
        <FormulaBlock
          latex={String.raw`\text{Cl–(CH}_2)_4\text{–Cl} \xrightarrow{2\text{KCN}} \text{NC–(CH}_2)_4\text{–CN} \xrightarrow{\text{LiAlH}_4} \text{H}_2\text{N–(CH}_2)_6\text{–NH}_2`}
        />
      </Expandable>

      <h2 id="h-9-5">9.5 Physical Properties</h2>

      <ul>
        <li>
          The lower aliphatic amines are <strong>gases with a fishy odour</strong>.
        </li>
        <li>
          Primary amines with three or more carbon atoms are <strong>liquids</strong>; still higher
          ones are <strong>solids</strong>.
        </li>
        <li>
          Aniline and other arylamines are usually colourless but get coloured on storage due to{" "}
          <strong>atmospheric oxidation</strong>.
        </li>
      </ul>

      <h3>Solubility</h3>
      <ul>
        <li>
          Lower aliphatic amines are soluble in water because they form{" "}
          <strong>hydrogen bonds with water molecules</strong>.
        </li>
        <li>
          Solubility decreases with increase in molar mass because the hydrophobic alkyl part grows.
        </li>
        <li>Higher amines are essentially insoluble in water.</li>
        <li>Amines are soluble in organic solvents like alcohol, ether and benzene.</li>
      </ul>

      <h3>Boiling points</h3>
      <ul>
        <li>
          Primary and secondary amines are associated through{" "}
          <strong>intermolecular hydrogen bonding</strong> between the nitrogen of one molecule and
          the hydrogen of another.
        </li>
        <li>
          This association is greater in primary amines than in secondary amines, because a primary
          amine has <strong>two</strong> hydrogens available for hydrogen bonding and a secondary
          amine only one.
        </li>
        <li>
          Tertiary amines have <strong>no hydrogen on nitrogen</strong>, so no intermolecular
          association — hence the lowest boiling points.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{Boiling point of isomeric amines: primary} > \text{secondary} > \text{tertiary}`}
        important
        label="Order of boiling points"
      />

      <TableCard
        caption="Table 9.2: Comparison of boiling points of amines, alcohols and alkanes of similar molecular masses"
        headers={["Compound", "Molar mass", "b.p. / K"]}
        rows={[
          { cells: ["n-C₄H₉NH₂", "73", "350.8"] },
          { cells: ["(C₂H₅)₂NH", "73", "329.3"] },
          { cells: ["C₂H₅N(CH₃)₂", "73", "310.5"] },
          { cells: ["C₂H₅CH(CH₃)₂ (2-methylbutane)", "72", "300.8"] },
          { cells: ["n-C₄H₉OH", "74", "390.3"] },
        ]}
      />

      <Comparison
        columns={[
          {
            title: "Amine (N–H)",
            children: (
              <ul>
                <li>Nitrogen electronegativity 3.0 — N–H is only weakly polar.</li>
                <li>Weaker intermolecular hydrogen bonds than alcohols.</li>
                <li>Lower boiling point than the alcohol of comparable molar mass.</li>
                <li>Less soluble in water than the corresponding alcohol.</li>
              </ul>
            ),
          },
          {
            title: "Alcohol (O–H)",
            children: (
              <ul>
                <li>Oxygen electronegativity 3.5 — O–H is more polar.</li>
                <li>Stronger intermolecular hydrogen bonds.</li>
                <li>Higher boiling point (n-butanol 390.3 K vs n-butylamine 350.8 K).</li>
                <li>More soluble in water — compare butan-1-ol with butan-1-amine.</li>
              </ul>
            ),
          },
        ]}
      />

      <MistakeCard
        mistake="Assuming the tertiary amine boils highest because it carries the most alkyl groups."
        correction="Boiling point here is set by hydrogen bonding, not by mass. With no N–H bond, a tertiary amine cannot associate — for isomeric C₄H₁₁N amines the order is 1° > 2° > 3°."
        example="N,N-dimethylethanamine (310.5 K) < N-methylethanamine (329.3 K) < butan-1-amine (350.8 K)."
      />

      <h2 id="h-9-6">9.6 Chemical Reactions</h2>

      <p>
        The difference in electronegativity between nitrogen and hydrogen atoms and the presence of
        an unshared pair of electrons over the nitrogen atom make amines reactive. The number of
        hydrogen atoms attached to nitrogen also decides the course of the reaction — that is why
        primary (–NH<sub>2</sub>), secondary (&gt;N–H) and tertiary (&gt;N–) amines differ in many
        reactions. Amines behave as <strong>nucleophiles</strong> because of the unshared pair.
      </p>

      <h3>1. Basic character of amines</h3>

      <Callout type="important">
        Amines, being basic in nature, <strong>react with acids to form salts</strong>. Amine salts on
        treatment with a base like NaOH <strong>regenerate the parent amine</strong>.
      </Callout>

      <FormulaBlock
        latex={String.raw`\text{RNH}_2 + \text{HCl} \longrightarrow \text{RNH}_3^+\text{Cl}^-`}
        label="Salt formation"
      />

      <FormulaBlock
        latex={String.raw`\text{RNH}_3^+\text{Cl}^- + \text{NaOH} \longrightarrow \text{RNH}_2 + \text{NaCl} + \text{H}_2\text{O}`}
        label="Regeneration of the amine"
      />

      <ul>
        <li>
          Amine salts are <strong>soluble in water</strong> but <strong>insoluble</strong> in organic
          solvents like ether.
        </li>
        <li>
          This is the basis for separating amines from non-basic organic compounds that are insoluble
          in water.
        </li>
        <li>
          Reaction with mineral acids to form ammonium salts shows amines are basic; the unshared
          pair on nitrogen makes them <strong>Lewis bases</strong>.
        </li>
      </ul>

      <p>
        Basic character is better understood through K<sub>b</sub> and pK<sub>b</sub> values:
      </p>

      <FormulaBlock
        latex={String.raw`\text{RNH}_2 + \text{H}_2\text{O} \rightleftharpoons \text{RNH}_3^+ + \text{OH}^-`}
      />

      <FormulaBlock
        latex={String.raw`K_b = \frac{[\text{RNH}_3^+][\text{OH}^-]}{[\text{RNH}_2]}`}
        important
        label="Base dissociation constant"
      />

      <FormulaBlock latex={String.raw`pK_b = -\log K_b`} important />

      <p>
        <Highlight color="yellow">Larger the value of K<sub>b</sub>, or smaller the value of pK
        <sub>b</sub>, stronger is the base.</Highlight>
      </p>

      <TableCard
        caption="Table 9.3: pKb values of amines in aqueous phase"
        headers={["Name of amine", "pKb"]}
        rows={[
          { cells: ["Methanamine", "3.38"] },
          { cells: ["N-Methylmethanamine", "3.27"] },
          { cells: ["N,N-Dimethylmethanamine", "4.22"] },
          { cells: ["Ethanamine", "3.29"] },
          { cells: ["N-Ethylethanamine", "3.00"] },
          { cells: ["N,N-Diethylethanamine", "3.25"] },
          { cells: ["Benzenamine", "9.38"] },
          { cells: ["Phenylmethanamine", "4.70"] },
          { cells: ["N-Methylaniline", "9.30"] },
          { cells: ["N,N-Dimethylaniline", "8.92"] },
        ]}
      />

      <ul>
        <li>pK<sub>b</sub> of ammonia is <strong>4.75</strong>.</li>
        <li>
          Aliphatic amines are <strong>stronger bases than ammonia</strong> because of the +I effect
          of alkyl groups, which raises electron density on nitrogen; their pK<sub>b</sub> values lie
          between <strong>3 and 4.22</strong>.
        </li>
        <li>
          Aromatic amines are <strong>weaker bases than ammonia</strong> because of the electron
          withdrawing nature of the aryl group (pK<sub>b</sub> of aniline 9.38).
        </li>
      </ul>

      <h3>Structure–basicity relationship</h3>

      <p>
        Basicity depends upon the <strong>ease of formation of the cation</strong> by accepting a
        proton from the acid. The more stable the cation is relative to the amine, the more basic the
        amine.
      </p>

      <h4>(a) Alkanamines versus ammonia</h4>
      <ul>
        <li>
          The electron releasing alkyl group pushes electrons towards nitrogen, making the unshared
          pair more available for sharing with the proton.
        </li>
        <li>
          The substituted ammonium ion is stabilised by dispersal of the positive charge through the
          +I effect of the alkyl group.
        </li>
        <li>
          So in the <strong>gaseous phase</strong> basicity rises with the number of alkyl groups.
        </li>
        <li>
          In the <strong>aqueous phase</strong> the trend is not regular: the ammonium cations are
          also stabilised by solvation with water.
        </li>
        <li>
          The greater the size of the ion, the lesser the solvation and the less stabilised the ion.
        </li>
        <li>
          When the alkyl group is bigger than –CH<sub>3</sub> there is{" "}
          <strong>steric hindrance to hydrogen bonding</strong>, which again changes the order.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{Gaseous phase: }(\text{C}_2\text{H}_5)_3\text{N} > (\text{C}_2\text{H}_5)_2\text{NH} > \text{C}_2\text{H}_5\text{NH}_2 > \text{NH}_3`}
        label="Order expected from the inductive effect"
      />

      <FormulaBlock
        latex={String.raw`\text{Ethylamines in water: }(\text{C}_2\text{H}_5)_2\text{NH} > (\text{C}_2\text{H}_5)_3\text{N} > \text{C}_2\text{H}_5\text{NH}_2 > \text{NH}_3`}
        important
        label="Actual order in aqueous solution"
      />

      <FormulaBlock
        latex={String.raw`\text{Methylamines in water: }(\text{CH}_3)_2\text{NH} > \text{CH}_3\text{NH}_2 > (\text{CH}_3)_3\text{N} > \text{NH}_3`}
        important
        label="Actual order in aqueous solution"
      />

      <KeyPoint title="Three Effects Decide Basicity">
        <p>
          In water, basic strength is a subtle interplay of the{" "}
          <strong>inductive effect</strong>, the <strong>solvation effect</strong> and the{" "}
          <strong>steric hindrance</strong> of the alkyl group — no single factor wins.
        </p>
      </KeyPoint>

      <h4>(b) Arylamines versus ammonia</h4>
      <ul>
        <li>
          In aniline the –NH<sub>2</sub> group is attached directly to the benzene ring, so the
          unshared pair on nitrogen is in <strong>conjugation with the ring</strong>.
        </li>
        <li>That makes the lone pair less available for protonation, so pK<sub>b</sub> is high.</li>
        <li>Aniline is a resonance hybrid of <strong>five structures</strong>.</li>
        <li>
          The anilinium ion formed by accepting a proton has only <strong>two</strong> resonating
          (Kekulé) structures.
        </li>
        <li>
          Greater number of resonating structures means greater stability — aniline is more stable
          than the anilinium ion, so its proton acceptability is lower.
        </li>
        <li>
          In substituted anilines, electron releasing groups (–OCH<sub>3</sub>, –CH<sub>3</sub>){" "}
          <strong>increase</strong> basic strength.
        </li>
        <li>
          Electron withdrawing groups (–NO<sub>2</sub>, –SO<sub>3</sub>H, –COOH, –X){" "}
          <strong>decrease</strong> it.
        </li>
      </ul>

      <ConceptCard title="Why aniline is a weaker base than ammonia" icon="⚖">
        <ul>
          <li>Aniline: 5 resonance structures → ring-delocalised lone pair → low proton affinity.</li>
          <li>Anilinium ion: only 2 Kekulé structures → less stabilised than aniline.</li>
          <li>
            Consequence: aniline (pK<sub>b</sub> 9.38) is about five orders of magnitude weaker as a
            base than ammonia (pK<sub>b</sub> 4.75).
          </li>
          <li>Benzylamine (pK<sub>b</sub> 4.70) keeps the –NH₂ on a CH₂, so the lone pair stays free — it is as basic as an aliphatic amine.</li>
        </ul>
      </ConceptCard>

      <div className="my-6 grid gap-3 sm:grid-cols-2">
        <MoleculeStructure {...STRUCTURES.aniline} maxWidth={300} className="my-0" />
        <MoleculeStructure {...STRUCTURES.benzylamine} maxWidth={300} className="my-0" />
      </div>

      <Expandable title="Example 9.4 — Decreasing order of basic strength" variant="example">
        <p>
          <strong>Problem:</strong> Arrange the following in decreasing order of basic strength: C
          <sub>6</sub>H<sub>5</sub>NH<sub>2</sub>, C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub>, (C
          <sub>2</sub>H<sub>5</sub>)<sub>2</sub>NH, NH<sub>3</sub>.
        </p>
        <p>
          <strong>Solution:</strong> Aniline is an aromatic amine, so it is the weakest of the four.
          Among the aliphatic amines, the +I effect of two ethyl groups makes diethylamine stronger
          than ethylamine, and both are stronger than ammonia.
        </p>
        <FormulaBlock
          latex={String.raw`(\text{C}_2\text{H}_5)_2\text{NH} > \text{C}_2\text{H}_5\text{NH}_2 > \text{NH}_3 > \text{C}_6\text{H}_5\text{NH}_2`}
          important
        />
      </Expandable>

      <Expandable title="Intext 9.4 — Increasing order of basic strength" variant="exercise">
        <p>
          <strong>Question:</strong> Arrange the following in increasing order of basic strength:
        </p>
        <p>
          (i) C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub>, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>, NH
          <sub>3</sub>, C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>NH<sub>2</sub> and (C<sub>2</sub>H
          <sub>5</sub>)<sub>2</sub>NH
        </p>
        <p>
          (ii) C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub>, (C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>NH,
          (C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>
        </p>
        <p>
          (iii) CH<sub>3</sub>NH<sub>2</sub>, (CH<sub>3</sub>)<sub>2</sub>NH, (CH<sub>3</sub>)<sub>3</sub>N,
          C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>, C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>NH<sub>2</sub>
        </p>
        <p>
          <strong>Answer</strong> (pK<sub>b</sub> values from Table 9.3):
        </p>
        <FormulaBlock
          latex={String.raw`\text{(i) }\text{C}_6\text{H}_5\text{NH}_2 < \text{NH}_3 < \text{C}_6\text{H}_5\text{CH}_2\text{NH}_2 < \text{C}_2\text{H}_5\text{NH}_2 < (\text{C}_2\text{H}_5)_2\text{NH}`}
        />
        <FormulaBlock
          latex={String.raw`\text{(ii) }\text{C}_6\text{H}_5\text{NH}_2 < \text{C}_2\text{H}_5\text{NH}_2 < (\text{C}_2\text{H}_5)_3\text{N} < (\text{C}_2\text{H}_5)_2\text{NH}`}
        />
        <FormulaBlock
          latex={String.raw`\text{(iii) }\text{C}_6\text{H}_5\text{NH}_2 < \text{C}_6\text{H}_5\text{CH}_2\text{NH}_2 < (\text{CH}_3)_3\text{N} < \text{CH}_3\text{NH}_2 < (\text{CH}_3)_2\text{NH}`}
        />
      </Expandable>

      <h3>2. Alkylation</h3>
      <ul>
        <li>Amines undergo alkylation on reaction with alkyl halides.</li>
        <li>
          The reaction is a nucleophilic substitution that keeps moving up the series — 1° → 2° → 3°
          → quaternary ammonium salt.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{RNH}_2 \xrightarrow{\text{R–X}} \text{R}_2\text{NH} \xrightarrow{\text{R–X}} \text{R}_3\text{N} \xrightarrow{\text{R–X}} \text{R}_4\text{N}^+\text{X}^-`}
      />

      <h3>3. Acylation</h3>
      <ul>
        <li>
          Aliphatic and aromatic primary and secondary amines react with{" "}
          <strong>acid chlorides, anhydrides and esters</strong> by nucleophilic substitution.
        </li>
        <li>
          The reaction is a <strong>replacement of the hydrogen of –NH<sub>2</sub> or &gt;N–H by an
          acyl group</strong>; the products are called <strong>amides</strong>.
        </li>
        <li>
          It is carried out in the presence of a base <strong>stronger than the amine</strong>, like
          pyridine, which removes the HCl formed and shifts the equilibrium to the right.
        </li>
        <li>
          Reaction with benzoyl chloride (C<sub>6</sub>H<sub>5</sub>COCl) is called{" "}
          <strong>benzoylation</strong>.
        </li>
        <li>
          With carboxylic acids, amines form <strong>salts</strong> at room temperature (no amide).
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{CH}_3\text{NH}_2 + \text{C}_6\text{H}_5\text{COCl} \longrightarrow \text{C}_6\text{H}_5\text{CONHCH}_3 + \text{HCl}`}
        label="Benzoylation (pyridine present)"
      />

      <FormulaBlock
        latex={String.raw`\text{RNH}_2 + (\text{CH}_3\text{CO})_2\text{O} \longrightarrow \text{CH}_3\text{CONHR} + \text{CH}_3\text{COOH}`}
      />

      <h3>4. Carbylamine reaction</h3>
      <ul>
        <li>
          Aliphatic and aromatic <strong>primary</strong> amines on heating with chloroform and
          ethanolic potassium hydroxide form <strong>isocyanides (carbylamines)</strong> — foul
          smelling substances.
        </li>
        <li>Secondary and tertiary amines do not show this reaction.</li>
        <li>
          It is therefore called the carbylamine reaction or{" "}
          <Highlight color="yellow">isocyanide test — a test for primary amines</Highlight>.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{R–NH}_2 + \text{CHCl}_3 + 3\text{KOH} \longrightarrow \text{R–N}\equiv\text{C} + 3\text{KCl} + 3\text{H}_2\text{O}`}
        label="Carbylamine reaction"
      />

      <h3>5. Reaction with nitrous acid</h3>
      <p>
        Three classes of amines react differently with nitrous acid, which is prepared{" "}
        <em>in situ</em> from a mineral acid and sodium nitrite.
      </p>

      <ul>
        <li>
          <strong>Primary aliphatic amines</strong> form aliphatic diazonium salts which, being
          unstable, liberate nitrogen gas quantitatively and give alcohols.
        </li>
        <li>
          Quantitative evolution of nitrogen is used in the <strong>estimation of amino acids and
          proteins</strong>.
        </li>
        <li>
          <strong>Primary aromatic amines</strong> react at low temperature (273–278 K) to form
          diazonium salts — the very important class of compounds used in Section 9.7.
        </li>
        <li>Secondary and tertiary amines react with nitrous acid in a different manner.</li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{R–NH}_2 \xrightarrow{\text{HNO}_2} [\text{R–N}_2^+\text{Cl}^-] \longrightarrow \text{R–OH} + \text{N}_2\uparrow + \text{HCl}`}
        label="Primary aliphatic amine"
      />

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{NH}_2 \xrightarrow[\text{273–278 K}]{\text{NaNO}_2/\text{HCl}} \text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + 2\text{H}_2\text{O}`}
        label="Primary aromatic amine"
      />

      <TableCard
        caption="Behaviour of the three classes with nitrous acid — the basis of the nitrous acid test"
        headers={["Amine", "Product with HNO₂", "Observation"]}
        rows={[
          {
            cells: [
              "1° aliphatic",
              "Unstable alkyldiazonium salt → alcohol",
              "Brisk effervescence of N₂ gas",
            ],
          },
          {
            cells: [
              "1° aromatic",
              "Stable arenediazonium salt at 273–278 K",
              "Clear solution; gives azo dye on coupling",
            ],
          },
          { cells: ["2°", "N-Nitrosamine", "Yellow oily liquid"] },
          { cells: ["3°", "Nitrosamine salt (aromatic 3°)", "No visible gas; salt formed"] },
        ]}
      />

      <h3>6. Reaction with arylsulphonyl chloride</h3>
      <ul>
        <li>
          Benzenesulphonyl chloride (C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>Cl), known as{" "}
          <strong>Hinsberg’s reagent</strong>, reacts with primary and secondary amines to form
          sulphonamides.
        </li>
        <li>
          With a primary amine it gives N-ethylbenzenesulphonyl amide; the hydrogen on nitrogen is
          strongly acidic because of the electron withdrawing sulphonyl group, so it is{" "}
          <strong>soluble in alkali</strong>.
        </li>
        <li>
          With a secondary amine it gives N,N-diethylbenzenesulphonamide, which has{" "}
          <strong>no hydrogen on nitrogen</strong> — not acidic, hence{" "}
          <strong>insoluble in alkali</strong>.
        </li>
        <li>Tertiary amines do not react at all.</li>
        <li>
          This difference is used to distinguish, and to separate, primary, secondary and tertiary
          amines.
        </li>
        <li>Nowadays p-toluenesulphonyl chloride replaces benzenesulphonyl chloride.</li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{C}_2\text{H}_5\text{NH}_2 + \text{C}_6\text{H}_5\text{SO}_2\text{Cl} \longrightarrow \text{C}_6\text{H}_5\text{SO}_2\text{NHC}_2\text{H}_5 + \text{HCl}`}
        label="Primary amine → soluble sulphonamide"
      />

      <FormulaBlock
        latex={String.raw`(\text{C}_2\text{H}_5)_2\text{NH} + \text{C}_6\text{H}_5\text{SO}_2\text{Cl} \longrightarrow \text{C}_6\text{H}_5\text{SO}_2\text{N}(\text{C}_2\text{H}_5)_2 + \text{HCl}`}
        label="Secondary amine → insoluble sulphonamide"
      />

      <TableCard
        caption="Hinsberg test — distinguishing the three classes of amines"
        headers={["Amine", "Product with Hinsberg’s reagent", "Soluble in alkali?"]}
        rows={[
          { cells: ["Primary (1°)", "N-Alkylbenzenesulphonamide (N–H present)", "Yes — acidic N–H dissolves"] },
          { cells: ["Secondary (2°)", "N,N-Dialkylbenzenesulphonamide (no N–H)", "No — no acidic hydrogen"] },
          { cells: ["Tertiary (3°)", "No reaction", "Amine stays insoluble"] },
        ]}
      />

      <h3>7. Electrophilic substitution</h3>
      <ul>
        <li>
          In aniline the ortho and para positions to –NH<sub>2</sub> become centres of high electron
          density, so –NH<sub>2</sub> is <strong>ortho- and para-directing and a powerful activating
          group</strong>.
        </li>
        <li>
          The main problem in electrophilic substitution of aromatic amines is their very high
          reactivity — substitution tends to go to ortho and para positions repeatedly.
        </li>
        <li>
          To obtain a monosubstituted derivative, the –NH<sub>2</sub> group is{" "}
          <strong>protected by acetylation</strong> with acetic anhydride; substitution is then
          carried out and the amide is hydrolysed back to the amine.
        </li>
        <li>
          In acetanilide the lone pair of nitrogen interacts with the oxygen of the carbonyl group by
          resonance, so it is less available for donation to the ring — the activating effect of
          –NHCOCH<sub>3</sub> is less than that of –NH<sub>2</sub>.
        </li>
      </ul>

      <h4>(a) Bromination</h4>
      <p>
        Aniline reacts with bromine water at room temperature to give a white precipitate of{" "}
        <strong>2,4,6-tribromoaniline</strong>.
      </p>
      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{NH}_2 + 3\text{Br}_2 \xrightarrow{\text{H}_2\text{O}} \text{C}_6\text{H}_2\text{Br}_3\text{NH}_2 + 3\text{HBr}`}
      />

      <MoleculeStructure {...STRUCTURES.tribromoaniline} maxWidth={400} />

      <h4>(b) Nitration</h4>
      <ul>
        <li>
          Direct nitration of aniline yields <strong>tarry oxidation products</strong> in addition to
          the nitro derivatives.
        </li>
        <li>
          In the strongly acidic medium aniline is protonated to the <strong>anilinium ion</strong>,
          which is meta directing — so a significant amount of the meta derivative forms alongside
          ortho and para.
        </li>
        <li>
          Protecting –NH<sub>2</sub> by acetylation controls the reaction and gives the{" "}
          <strong>p-nitro derivative as the major product</strong>.
        </li>
      </ul>

      <h4>(c) Sulphonation</h4>
      <p>
        Aniline reacts with concentrated sulphuric acid to form anilinium hydrogensulphate, which on
        heating with sulphuric acid at 453–473 K gives <strong>p-aminobenzenesulphonic acid</strong>{" "}
        (sulphanilic acid) as the major product.
      </p>
      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{NH}_2 + \text{H}_2\text{SO}_4 \longrightarrow \text{C}_6\text{H}_5\text{NH}_3^+\text{HSO}_4^- \xrightarrow{453\text{–}473\;\text{K}} \text{p-H}_2\text{N–C}_6\text{H}_4\text{SO}_3\text{H} + \text{H}_2\text{O}`}
      />

      <Callout type="warning" title="Friedel–Crafts Fails with Aniline">
        Aniline does not undergo Friedel–Crafts alkylation or acetylation because it forms a salt with
        aluminium chloride, the Lewis acid used as catalyst. The nitrogen acquires a positive charge
        and acts as a <strong>strong deactivating group</strong> for further reaction.
      </Callout>

      <Expandable title="Intext 9.5 — Complete the acid–base reactions" variant="exercise">
        <p>
          <strong>Question:</strong> Complete the following acid-base reactions and name the
          products: (i) CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> + HCl →{" "}
          (ii) (C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N + HCl →
        </p>
        <p>
          <strong>Answer:</strong>
        </p>
        <FormulaBlock
          latex={String.raw`\text{(i) }\text{CH}_3\text{CH}_2\text{CH}_2\text{NH}_2 + \text{HCl} \longrightarrow \text{CH}_3\text{CH}_2\text{CH}_2\text{NH}_3^+\text{Cl}^-`}
        />
        <p>Product: propan-1-ammonium chloride (propylammonium chloride).</p>
        <FormulaBlock
          latex={String.raw`\text{(ii) }(\text{C}_2\text{H}_5)_3\text{N} + \text{HCl} \longrightarrow (\text{C}_2\text{H}_5)_3\text{NH}^+\text{Cl}^-`}
        />
        <p>Product: triethylammonium chloride.</p>
      </Expandable>

      <Expandable title="Intext 9.6 — Exhaustive methylation of aniline" variant="exercise">
        <p>
          <strong>Question:</strong> Write reactions of the final alkylation product of aniline with
          excess of methyl iodide in the presence of sodium carbonate solution.
        </p>
        <p>
          <strong>Answer:</strong> Excess methyl iodide carries alkylation all the way to the
          quaternary salt — N,N,N-trimethylanilinium iodide.
        </p>
        <FormulaBlock
          latex={String.raw`\text{C}_6\text{H}_5\text{NH}_2 + 3\text{CH}_3\text{I} \xrightarrow{\text{Na}_2\text{CO}_3} \text{C}_6\text{H}_5\text{N}^+(\text{CH}_3)_3\text{I}^- + 2\text{HI}`}
        />
      </Expandable>

      <Expandable title="Intext 9.7 — Aniline with benzoyl chloride" variant="exercise">
        <p>
          <strong>Question:</strong> Write the chemical reaction of aniline with benzoyl chloride and
          the name of the product obtained.
        </p>
        <p>
          <strong>Answer:</strong> Benzoylation gives N-phenylbenzamide (benzanilide).
        </p>
        <FormulaBlock
          latex={String.raw`\text{C}_6\text{H}_5\text{NH}_2 + \text{C}_6\text{H}_5\text{COCl} \longrightarrow \text{C}_6\text{H}_5\text{CONHC}_6\text{H}_5 + \text{HCl}`}
        />
      </Expandable>

      <Expandable title="Intext 9.8 — Isomers of C₃H₉N and the nitrous acid test" variant="exercise">
        <p>
          <strong>Question:</strong> Write structures of different isomers corresponding to the
          molecular formula C<sub>3</sub>H<sub>9</sub>N. Write IUPAC names of the isomers which will
          liberate nitrogen gas on treatment with nitrous acid.
        </p>
        <p>
          <strong>Answer:</strong> Four isomers exist:
        </p>
        <ul>
          <li>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> — propan-1-amine (1°)</li>
          <li>(CH<sub>3</sub>)<sub>2</sub>CHNH<sub>2</sub> — propan-2-amine (1°)</li>
          <li>CH<sub>3</sub>CH<sub>2</sub>NHCH<sub>3</sub> — N-methylethanamine (2°)</li>
          <li>(CH<sub>3</sub>)<sub>3</sub>N — N,N-dimethylmethanamine (3°)</li>
        </ul>
        <p>
          Only the <strong>primary</strong> amines — propan-1-amine and propan-2-amine — give an
          unstable diazonium salt that liberates N<sub>2</sub> gas.
        </p>
      </Expandable>

      <h2 id="h-9-7">9.7 Method of Preparation of Diazonium Salts</h2>

      <p>Diazonium salts have the general formula R–N<sub>2</sub><sup>+</sup>X<sup>–</sup>.</p>

      <ul>
        <li>R stands for an <strong>aryl group</strong>.</li>
        <li>
          X<sup>–</sup> may be Cl<sup>–</sup>, Br<sup>–</sup>, HSO<sub>4</sub><sup>–</sup>, BF
          <sub>4</sub><sup>–</sup>, etc.
        </li>
        <li>
          They are named by suffixing <strong>diazonium</strong> to the name of the parent
          hydrocarbon, followed by the name of the anion.
        </li>
        <li>
          The –N<sub>2</sub><sup>+</sup> group is called the <strong>diazonium group</strong>; C
          <sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>–</sup> is benzenediazonium
          chloride and C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>HSO<sub>4</sub>
          <sup>–</sup> is benzenediazonium hydrogensulphate.
        </li>
      </ul>

      <ul>
        <li>
          Primary <strong>aliphatic</strong> amines form highly unstable alkyldiazonium salts.
        </li>
        <li>
          Primary <strong>aromatic</strong> amines form arenediazonium salts that are stable for a
          short time in solution at low temperature (273–278 K).
        </li>
        <li>The stability of the arenediazonium ion is explained on the basis of resonance.</li>
        <li>
          The conversion of primary aromatic amines into diazonium salts is known as{" "}
          <strong>diazotisation</strong>.
        </li>
      </ul>

      <p>
        Benzenediazonium chloride is prepared by the reaction of aniline with nitrous acid at
        273–278 K; the nitrous acid is produced in the mixture from sodium nitrite and hydrochloric
        acid.
      </p>

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{NH}_2 + \text{NaNO}_2 + 2\text{HCl} \xrightarrow{273\text{–}278\;\text{K}} \text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{NaCl} + 2\text{H}_2\text{O}`}
        important
        label="Diazotisation"
      />

      <Callout type="warning">
        Because of its instability, the diazonium salt is <strong>not generally stored</strong> — it is
        used immediately after preparation.
      </Callout>

      <h2 id="h-9-8">9.8 Physical Properties of Diazonium Salts</h2>

      <ul>
        <li>Benzenediazonium chloride is a <strong>colourless crystalline solid</strong>.</li>
        <li>It is readily soluble in water.</li>
        <li>It is stable in cold but <strong>reacts with water when warmed</strong>.</li>
        <li>It decomposes easily in the dry state.</li>
        <li>
          Benzenediazonium fluoroborate is <strong>water insoluble</strong> and stable at room
          temperature — which is why the fluoroborate is the salt chosen for storage and for the
          fluoride and nitro substitutions.
        </li>
      </ul>

      <h2 id="h-9-9">9.9 Chemical Reactions of Diazonium Salts</h2>

      <p>
        The reactions fall into two categories:{" "}
        <strong>(A) reactions involving displacement of nitrogen</strong> and{" "}
        <strong>(B) reactions involving retention of the diazo group</strong>.
      </p>

      <h3>A. Reactions involving displacement of nitrogen</h3>

      <p>
        The diazonium group is a <strong>very good leaving group</strong>. It is substituted by Cl
        <sup>–</sup>, Br<sup>–</sup>, I<sup>–</sup>, CN<sup>–</sup> and OH<sup>–</sup>, which displace
        nitrogen from the aromatic ring; the nitrogen escapes as a gas.
      </p>

      <h4>1. Replacement by halide or cyanide ion — Sandmeyer and Gattermann reactions</h4>
      <ul>
        <li>
          Cl<sup>–</sup>, Br<sup>–</sup> and CN<sup>–</sup> are introduced in the presence of{" "}
          <strong>Cu(I) ion</strong> — the <strong>Sandmeyer reaction</strong>.
        </li>
        <li>
          Alternatively, chlorine or bromine can be introduced by treating the diazonium salt with
          the corresponding halogen acid in the presence of <strong>copper powder</strong> — the{" "}
          <strong>Gattermann reaction</strong>.
        </li>
        <li>
          The yield in the Sandmeyer reaction is <Highlight color="blue">better</Highlight> than in
          the Gattermann reaction.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- \xrightarrow{\text{CuCl/HCl}} \text{C}_6\text{H}_5\text{Cl} + \text{N}_2\uparrow`}
        label="Sandmeyer — chloride"
      />

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- \xrightarrow{\text{CuCN/KCN}} \text{C}_6\text{H}_5\text{CN} + \text{N}_2\uparrow`}
        label="Sandmeyer — cyanide"
      />

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- \xrightarrow{\text{Cu powder, HBr}} \text{C}_6\text{H}_5\text{Br} + \text{N}_2\uparrow`}
        label="Gattermann — bromide"
      />

      <h4>2. Replacement by iodide ion</h4>
      <p>
        Iodine is not easily introduced into the benzene ring directly, but treating the diazonium
        salt solution with potassium iodide gives iodobenzene.
      </p>
      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{KI} \longrightarrow \text{C}_6\text{H}_5\text{I} + \text{KCl} + \text{N}_2\uparrow`}
      />

      <h4>3. Replacement by fluoride ion</h4>
      <p>
        Arenediazonium chloride treated with fluoroboric acid precipitates the diazonium fluoroborate,
        which on heating decomposes to give the aryl fluoride.
      </p>
      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{HBF}_4 \longrightarrow \text{C}_6\text{H}_5\text{N}_2^+\text{BF}_4^- \xrightarrow{\Delta} \text{C}_6\text{H}_5\text{F} + \text{N}_2\uparrow + \text{BF}_3`}
      />

      <h4>4. Replacement by H</h4>
      <p>
        Mild reducing agents like hypophosphorous acid (phosphinic acid) or ethanol reduce diazonium
        salts to arenes, and are themselves oxidised to phosphorous acid and ethanal respectively.
      </p>
      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{H}_3\text{PO}_2 + \text{H}_2\text{O} \longrightarrow \text{C}_6\text{H}_6 + \text{N}_2\uparrow + \text{H}_3\text{PO}_3 + \text{HCl}`}
      />

      <h4>5. Replacement by hydroxyl group</h4>
      <p>If the temperature of the diazonium salt solution is allowed to rise above 283 K, the salt is hydrolysed to phenol.</p>
      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{H}_2\text{O} \xrightarrow{>\,283\;\text{K}} \text{C}_6\text{H}_5\text{OH} + \text{N}_2\uparrow + \text{HCl}`}
      />

      <h4>6. Replacement by –NO₂ group</h4>
      <p>
        Diazonium fluoroborate heated with aqueous sodium nitrite in the presence of copper gives the
        nitroarene.
      </p>
      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{BF}_4^- + \text{NaNO}_2 \xrightarrow{\text{Cu},\;\Delta} \text{C}_6\text{H}_5\text{NO}_2 + \text{N}_2\uparrow + \text{NaBF}_4`}
      />

      <h3>B. Reactions involving retention of the diazo group — coupling reactions</h3>

      <ul>
        <li>
          The azo products have an <strong>extended conjugated system</strong>, with both aromatic
          rings joined through the –N=N– bond.
        </li>
        <li>These compounds are often coloured and are used as <strong>dyes</strong>.</li>
        <li>
          Benzenediazonium chloride reacts with phenol, coupling at the para position, to form{" "}
          <strong>p-hydroxyazobenzene</strong>.
        </li>
        <li>The reaction with aniline similarly gives p-aminoazobenzene.</li>
        <li>
          This is an example of an <strong>electrophilic substitution</strong> reaction.
        </li>
      </ul>

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{C}_6\text{H}_5\text{OH} \xrightarrow{\text{alkali}} \text{p-HO–C}_6\text{H}_4\text{N=NC}_6\text{H}_5 + \text{HCl}`}
        label="Coupling with phenol"
      />

      <MoleculeStructure {...STRUCTURES.p_hydroxyazobenzene} maxWidth={520} />

      <FormulaBlock
        latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{C}_6\text{H}_5\text{NH}_2 \longrightarrow \text{p-H}_2\text{N–C}_6\text{H}_4\text{N=NC}_6\text{H}_5 + \text{HCl}`}
        label="Coupling with aniline"
      />

      <h2 id="h-9-10">9.10 Importance of Diazonium Salts in Synthesis of Aromatic Compounds</h2>

      <ul>
        <li>
          Diazonium salts are <strong>very good intermediates</strong> for introducing –F, –Cl, –Br,
          –I, –CN, –OH and –NO<sub>2</sub> groups into the aromatic ring.
        </li>
        <li>
          <strong>Aryl fluorides and iodides</strong> cannot be prepared by direct halogenation.
        </li>
        <li>
          The <strong>cyano group</strong> cannot be introduced by nucleophilic substitution of
          chlorine in chlorobenzene, but cyanobenzene is easily obtained from a diazonium salt.
        </li>
        <li>
          Replacement of the diazo group is therefore the way to prepare substituted aromatic
          compounds that cannot be made by direct substitution in benzene or substituted benzene.
        </li>
      </ul>

      <Expandable title="Example 9.5 — 4-Nitrotoluene to 2-bromobenzoic acid" variant="example">
        <p>
          <strong>Problem:</strong> How will you convert 4-nitrotoluene to 2-bromobenzoic acid?
        </p>
        <p>
          <strong>Solution:</strong> Bromine must sit ortho to the –COOH that will be created from the
          methyl group, so bromination is done <em>before</em> oxidation, and the unwanted –NO
          <sub>2</sub> is finally removed through a diazonium salt.
        </p>
        <FormulaBlock
          latex={String.raw`\text{4-Nitrotoluene} \xrightarrow{\text{Br}_2/\text{Fe}} \text{2-bromo-4-nitrotoluene}`}
        />
        <FormulaBlock
          latex={String.raw`\text{2-bromo-4-nitrotoluene} \xrightarrow{\text{KMnO}_4/\text{H}^+} \text{2-bromo-4-nitrobenzoic acid}`}
        />
        <FormulaBlock
          latex={String.raw`\text{2-bromo-4-nitrobenzoic acid} \xrightarrow{\text{Fe/HCl}} \text{2-bromo-4-aminobenzoic acid}`}
        />
        <FormulaBlock
          latex={String.raw`\text{2-bromo-4-aminobenzoic acid} \xrightarrow[\text{273–278 K}]{\text{NaNO}_2/\text{HCl}} \text{diazonium salt} \xrightarrow{\text{H}_3\text{PO}_2} \text{2-bromobenzoic acid}`}
          important
        />
      </Expandable>

      <Expandable title="Intext 9.9 — Two diazonium-based conversions" variant="exercise">
        <p>
          <strong>Question:</strong> Convert (i) 3-methylaniline into 3-nitrotoluene, (ii) aniline
          into 1,3,5-tribromobenzene.
        </p>
        <p>
          <strong>Answer:</strong>
        </p>
        <p>
          (i) Diazotise the –NH<sub>2</sub> at 273–278 K, then replace the diazonium group by –NO
          <sub>2</sub> using aqueous sodium nitrite and copper:
        </p>
        <FormulaBlock
          latex={String.raw`\text{3-Methylaniline} \xrightarrow[\text{273–278 K}]{\text{NaNO}_2/\text{HCl}} \text{diazonium salt} \xrightarrow[\Delta]{\text{NaNO}_2/\text{Cu}} \text{3-nitrotoluene}`}
        />
        <p>
          (ii) Brominate aniline to 2,4,6-tribromoaniline (white precipitate with bromine water), then
          remove the –NH<sub>2</sub> through its diazonium salt with hypophosphorous acid — the ring is
          already brominated, so the product is 1,3,5-tribromobenzene:
        </p>
        <FormulaBlock
          latex={String.raw`\text{C}_6\text{H}_5\text{NH}_2 \xrightarrow{\text{Br}_2/\text{H}_2\text{O}} \text{2,4,6-tribromoaniline} \xrightarrow[273\text{–}278\;\text{K}]{\text{NaNO}_2/\text{HCl}} \xrightarrow{\text{H}_3\text{PO}_2} \text{1,3,5-tribromobenzene}`}
        />
      </Expandable>

      <h2 id="h-9-exercises">Exercises</h2>

      <Expandable title="NCERT Exercises 9.1 – 9.14" variant="exercise">
        <ExerciseQa
          answersHeading="Answer key (9.1 – 9.14)"
          questions={[
            <>Write IUPAC names of the following compounds and classify them into primary, secondary and tertiary amines. (i) (CH₃)₂CHNH₂ (ii) CH₃(CH₂)₂NH₂ (iii) CH₃NHCH(CH₃)₂ (iv) (CH₃)₃CNH₂ (v) C₆H₅NHCH₃ (vi) (CH₃CH₂)₂NCH₃ (vii) m–BrC₆H₄NH₂</>,
            <>Give one chemical test to distinguish between the following pairs of compounds. (i) Methylamine and dimethylamine (ii) Secondary and tertiary amines (iii) Ethylamine and aniline (iv) Aniline and benzylamine (v) Aniline and N-methylaniline.</>,
            <>Account for the following: (i) pK<sub>b</sub> of aniline is more than that of methylamine. (ii) Ethylamine is soluble in water whereas aniline is not. (iii) Methylamine in water reacts with ferric chloride to precipitate hydrated ferric oxide. (iv) Although amino group is o– and p– directing in aromatic electrophilic substitution reactions, aniline on nitration gives a substantial amount of m-nitroaniline. (v) Aniline does not undergo Friedel-Crafts reaction. (vi) Diazonium salts of aromatic amines are more stable than those of aliphatic amines. (vii) Gabriel phthalimide synthesis is preferred for synthesising primary amines.</>,
            <>Arrange the following: (i) In decreasing order of the pK<sub>b</sub> values: C₂H₅NH₂, C₆H₅NHCH₃, (C₂H₅)₂NH and C₆H₅NH₂ (ii) In increasing order of basic strength: C₆H₅NH₂, C₆H₅N(CH₃)₂, (C₂H₅)₂NH and CH₃NH₂ (iii) In increasing order of basic strength: (a) Aniline, p-nitroaniline and p-toluidine (b) C₆H₅NH₂, C₆H₅NHCH₃, C₆H₅CH₂NH₂ (iv) In decreasing order of basic strength in gas phase: C₂H₅NH₂, (C₂H₅)₂NH, (C₂H₅)₃N and NH₃ (v) In increasing order of boiling point: C₂H₅OH, (CH₃)₂NH, C₂H₅NH₂ (vi) In increasing order of solubility in water: C₆H₅NH₂, (C₂H₅)₂NH, C₂H₅NH₂.</>,
            <>How will you convert: (i) Ethanoic acid into methanamine (ii) Hexanenitrile into 1-aminopentane (iii) Methanol to ethanoic acid (iv) Ethanamine into methanamine (v) Ethanoic acid into propanoic acid (vi) Methanamine into ethanamine (vii) Nitromethane into dimethylamine (viii) Propanoic acid into ethanoic acid?</>,
            <>Describe a method for the identification of primary, secondary and tertiary amines. Also write chemical equations of the reactions involved.</>,
            <>Write short notes on the following: (i) Carbylamine reaction (ii) Diazotisation (iii) Hofmann’s bromamide reaction (iv) Coupling reaction (v) Ammonolysis (vi) Acetylation (vii) Gabriel phthalimide synthesis.</>,
            <>Accomplish the following conversions: (i) Nitrobenzene to benzoic acid (ii) Benzene to m-bromophenol (iii) Benzoic acid to aniline (iv) Aniline to 2,4,6-tribromofluorobenzene (v) Benzyl chloride to 2-phenylethanamine (vi) Chlorobenzene to p-chloroaniline (vii) Aniline to p-bromoaniline (viii) Benzamide to toluene (ix) Aniline to benzyl alcohol.</>,
            <>Give the structures of A, B and C in the following reactions: (i) CH₃CH₂I →(NaCN) A →(partial hydrolysis) B →(NaOH/Br₂) C (ii) C₆H₅N₂Cl →(CuCN) A →(H₂O/H⁺) B →(NH₃, Δ) C (iii) CH₃CH₂Br →(KCN) A →(LiAlH₄) B →(HNO₂, 0 °C) C (iv) C₆H₅NO₂ →(Fe/HCl) A →(NaNO₂/HCl, 273 K) B →(H₂O/H⁺) C (v) CH₃COOH →(NH₃, Δ) A →(NaOBr) B →(NaNO₂/HCl) C (vi) C₆H₆ →(conc. HNO₃/conc. H₂SO₄) A →(Fe/HCl) B →(NaNO₂/HCl, 273 K) C.</>,
            <>An aromatic compound ‘A’ on treatment with aqueous ammonia and heating forms compound ‘B’ which on heating with Br₂ and KOH forms a compound ‘C’ of molecular formula C₆H₇N. Write the structures and IUPAC names of compounds A, B and C.</>,
            <>Complete the following reactions: (i) C₆H₅NH₂ + CHCl₃ + alc. KOH → (ii) C₆H₅N₂Cl + H₃PO₂ + H₂O → (iii) C₆H₅NH₂ + conc. H₂SO₄ → (iv) C₆H₅N₂Cl + C₂H₅OH → (v) C₆H₅NH₂ + Br₂(aq) → (vi) (CH₃CO)₂O + C₆H₅NH₂ → (vii) C₆H₅N₂Cl →(i) HBF₄ (ii) NaNO₂/Cu, Δ.</>,
            <>Why cannot aromatic primary amines be prepared by Gabriel phthalimide synthesis?</>,
            <>Write the reactions of (i) aromatic and (ii) aliphatic primary amines with nitrous acid.</>,
            <>Give plausible explanation for each of the following: (i) Why are amines less acidic than alcohols of comparable molecular masses? (ii) Why do primary amines have higher boiling point than tertiary amines? (iii) Why are aliphatic amines stronger bases than aromatic amines?</>,
          ]}
          answers={[
            <>(i) Propan-2-amine, 1° (ii) Propan-1-amine, 1° (iii) N-Methylpropan-2-amine, 2° (iv) 2-Methylpropan-2-amine, 1° (v) N-Methylaniline (N-methylbenzenamine), 2° (vi) N-Ethyl-N-methylethanamine, 3° (vii) 3-Bromobenzenamine (3-bromoaniline), 1°.</>,
            <>Use tests that depend on the class of the amine. (i) Carbylamine test — methylamine (1°) gives foul-smelling methyl isocyanide with CHCl₃/alc. KOH; dimethylamine (2°) gives no isocyanide. (ii) Hinsberg test — the 2° amine gives an N,N-dialkylbenzenesulphonamide insoluble in alkali; the 3° amine does not react. (iii) Azo dye test — aniline gives a diazonium salt that couples with phenol to an orange dye; ethylamine gives only N₂ and an alcohol. (iv) Nitrous acid test — aniline gives a diazonium salt stable at 273–278 K; benzylamine (aliphatic) gives an unstable diazonium salt and N₂ gas. (v) Carbylamine test — aniline (1°) gives phenyl isocyanide; N-methylaniline (2°) does not.</>,
            <>(i) In aniline the lone pair is conjugated with the ring and aniline has five resonance structures against only two for the anilinium ion, so proton acceptance is harder. (ii) Ethylamine forms hydrogen bonds with water; the phenyl group of aniline is large and hydrophobic and its lone pair is delocalised. (iii) Methylamine gives OH⁻ in water, which precipitates hydrated ferric oxide, Fe(OH)₃, from FeCl₃. (iv) In strongly acidic medium aniline is protonated to the anilinium ion, which is meta directing. (v) Aniline forms a salt with the AlCl₃ catalyst; the positively charged nitrogen strongly deactivates the ring. (vi) The arenediazonium ion is stabilised by resonance with the ring; an alkyldiazonium ion has no such delocalisation. (vii) Gabriel synthesis gives a pure primary amine, not a mixture with 2°/3° amines or a quaternary salt.</>,
            <>(i) C₆H₅NH₂ &gt; C₆H₅NHCH₃ &gt; C₂H₅NH₂ &gt; (C₂H₅)₂NH. (ii) C₆H₅NH₂ &lt; C₆H₅N(CH₃)₂ &lt; CH₃NH₂ &lt; (C₂H₅)₂NH. (iii) (a) p-Nitroaniline &lt; aniline &lt; p-toluidine. (b) C₆H₅NH₂ &lt; C₆H₅NHCH₃ &lt; C₆H₅CH₂NH₂. (iv) (C₂H₅)₃N &gt; (C₂H₅)₂NH &gt; C₂H₅NH₂ &gt; NH₃. (v) (CH₃)₂NH &lt; C₂H₅NH₂ &lt; C₂H₅OH. (vi) C₆H₅NH₂ &lt; (C₂H₅)₂NH &lt; C₂H₅NH₂.</>,
            <>(i) CH₃COOH →(NH₃, Δ) CH₃CONH₂ →(Br₂/KOH) CH₃NH₂. (ii) Partial hydrolysis of hexanenitrile to hexanamide, then Hoffmann bromamide degradation → pentan-1-amine. (iii) CH₃OH →(PCl₅) CH₃Cl →(KCN) CH₃CN →(H₃O⁺) CH₃COOH. (iv) C₂H₅NH₂ →(HNO₂) C₂H₅OH →(K₂Cr₂O₇/H₂SO₄) CH₃COOH →(NH₃, Δ) CH₃CONH₂ →(Br₂/KOH) CH₃NH₂. (v) CH₃COOH →(NH₃) CH₃CONH₂ →(Br₂/KOH) CH₃NH₂ →(HNO₂) CH₃OH →(KCN, then H₃O⁺) CH₃CH₂COOH. (vi) CH₃NH₂ →(HNO₂) CH₃OH →(PCl₅) CH₃Cl →(KCN) CH₃CN →(LiAlH₄) CH₃CH₂NH₂. (vii) CH₃NO₂ →(Fe/HCl) CH₃NH₂ →(excess CH₃Cl) (CH₃)₂NH. (viii) CH₃CH₂COOH →(NH₃, Δ) CH₃CH₂CONH₂ →(Br₂/KOH) CH₃CH₂NH₂ →(HNO₂) CH₃CH₂OH →(KMnO₄/H⁺) CH₃COOH.</>,
            <>Hinsberg test. Shake each amine with benzenesulphonyl chloride (Hinsberg’s reagent) and then with alkali. The 1° amine gives a sulphonamide with an acidic N–H that dissolves in alkali; the 2° amine gives a sulphonamide with no N–H that stays insoluble; the 3° amine does not react and remains as an insoluble amine. Equations: C₂H₅NH₂ + C₆H₅SO₂Cl → C₆H₅SO₂NHC₂H₅ + HCl; (C₂H₅)₂NH + C₆H₅SO₂Cl → C₆H₅SO₂N(C₂H₅)₂ + HCl.</>,
            <>(i) 1° amines + CHCl₃ + alc. KOH → foul-smelling isocyanide (test for –NH₂). (ii) Conversion of a primary aromatic amine into its diazonium salt with NaNO₂/HCl at 273–278 K. (iii) Amide + Br₂ + aq./alc. NaOH → primary amine with one carbon less. (iv) Diazonium salt + phenol or aniline → coloured azo dye, through electrophilic substitution at the para position. (v) Cleavage of the C–X bond of an alkyl halide by ammonia in a sealed tube at 373 K. (vi) Replacement of the H of –NH₂ or &gt;N–H by an acyl group using acid chloride, anhydride or ester. (vii) Phthalimide → potassium phthalimide → N-alkylphthalimide → alkaline hydrolysis → pure primary amine.</>,
            <>(i) Nitrobenzene →(Fe/HCl) aniline →(NaNO₂/HCl, 273–278 K) diazonium salt →(CuCN/KCN) benzonitrile →(H₃O⁺, Δ) benzoic acid. (ii) Benzene →(HNO₃/H₂SO₄) nitrobenzene →(Br₂/Fe) m-bromonitrobenzene →(Fe/HCl) m-bromoaniline →(NaNO₂/HCl, 273–278 K, then warm water) m-bromophenol. (iii) Benzoic acid →(NH₃, Δ) benzamide →(Br₂/KOH) aniline. (iv) Aniline →(Br₂/H₂O) 2,4,6-tribromoaniline →(NaNO₂/HCl, 273–278 K) →(HBF₄, Δ) 2,4,6-tribromofluorobenzene. (v) C₆H₅CH₂Cl →(KCN) C₆H₅CH₂CN →(LiAlH₄) C₆H₅CH₂CH₂NH₂. (vi) Chlorobenzene →(HNO₃/H₂SO₄) p-chloronitrobenzene →(Fe/HCl) p-chloroaniline. (vii) Aniline →(Ac₂O) acetanilide →(Br₂/CH₃COOH) p-bromoacetanilide →(H₂O/H⁺) p-bromoaniline. (viii) Benzamide →(LiAlH₄) benzylamine →(HNO₂) benzyl alcohol →(Zn/Hg, HCl) toluene. (ix) Aniline →(NaNO₂/HCl, 273–278 K) →(CuCN/KCN) benzonitrile →(LiAlH₄) benzylamine →(HNO₂) benzyl alcohol.</>,
            <>(i) A = CH₃CH₂CN (propanenitrile), B = CH₃CH₂CONH₂ (propanamide), C = CH₃CH₂NH₂ (ethanamine). (ii) A = C₆H₅CN (benzonitrile), B = C₆H₅COOH (benzoic acid), C = C₆H₅CONH₂ (benzamide). (iii) A = CH₃CH₂CN, B = CH₃CH₂CH₂NH₂ (propan-1-amine), C = CH₃CH₂CH₂OH (propan-1-ol). (iv) A = C₆H₅NH₂ (aniline), B = C₆H₅N₂Cl (benzenediazonium chloride), C = C₆H₅OH (phenol). (v) A = CH₃CONH₂ (ethanamide), B = CH₃NH₂ (methanamine), C = CH₃OH (methanol). (vi) A = C₆H₅NO₂ (nitrobenzene), B = C₆H₅NH₂ (aniline), C = C₆H₅N₂Cl (benzenediazonium chloride).</>,
            <>A = benzoyl chloride, C₆H₅COCl; B = benzamide, C₆H₅CONH₂; C = aniline, C₆H₅NH₂ (C₆H₇N). Aqueous ammonia converts the acid chloride to the amide, and Br₂/KOH then performs Hoffmann bromamide degradation, losing one carbon to give the C₆ amine.</>,
            <>(i) C₆H₅NH₂ + CHCl₃ + 3KOH → C₆H₅NC + 3KCl + 3H₂O (phenyl isocyanide). (ii) C₆H₅N₂Cl + H₃PO₂ + H₂O → C₆H₆ + N₂ + H₃PO₃ + HCl (benzene). (iii) C₆H₅NH₂ + H₂SO₄ → C₆H₅NH₃⁺HSO₄⁻ (anilinium hydrogensulphate). (iv) C₆H₅N₂Cl + C₂H₅OH → C₆H₆ + CH₃CHO + N₂ + HCl (benzene + ethanal). (v) C₆H₅NH₂ + 3Br₂ → 2,4,6-tribromoaniline + 3HBr (white precipitate). (vi) (CH₃CO)₂O + C₆H₅NH₂ → C₆H₅NHCOCH₃ + CH₃COOH (acetanilide). (vii) C₆H₅N₂Cl →(HBF₄) C₆H₅N₂BF₄ →(NaNO₂/Cu, Δ) C₆H₅NO₂ (nitrobenzene).</>,
            <>Aryl halides do not undergo nucleophilic substitution with the phthalimide anion, so the N-arylphthalimide intermediate cannot be formed. Hence only aliphatic primary amines can be made by this route.</>,
            <>(i) Aromatic: C₆H₅NH₂ + NaNO₂ + 2HCl →(273–278 K) C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O — a stable diazonium salt. (ii) Aliphatic: RNH₂ →(HNO₂) [RN₂⁺Cl⁻] → ROH + N₂↑ + HCl — the unstable diazonium salt decomposes at once.</>,
            <>(i) Nitrogen is less electronegative than oxygen, so the N–H bond is less polar than O–H and the amide ion (RNH⁻) is less stable than the alkoxide ion (RO⁻) — amines are therefore far weaker acids than alcohols. (ii) A primary amine has two N–H bonds and forms extensive intermolecular hydrogen bonds; a tertiary amine has none, so it cannot associate. (iii) In aliphatic amines the +I effect of the alkyl group raises electron density on nitrogen and the substituted ammonium ion is stabilised; in aromatic amines the lone pair is delocalised into the ring and is less available for protonation.</>,
          ]}
        />
      </Expandable>

    </>
  );
}
