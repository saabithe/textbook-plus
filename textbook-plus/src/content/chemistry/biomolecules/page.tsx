import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";

export default function BiomoleculesChapter() {
  return (
    <>
      <p>
        A living system grows, sustains and reproduces itself. The most amazing thing
        about a living system is that it is composed of non-living atoms and molecules.
        The pursuit of knowledge of what goes on chemically within a living system falls
        in the domain of <strong>biochemistry</strong>. Living systems are made up of
        various complex biomolecules like <strong>carbohydrates</strong>,{" "}
        <strong>proteins</strong>, <strong>nucleic acids</strong>, <strong>lipids</strong>,
        etc.
      </p>

      <Callout type="important" title="Molecular logic of life">
        <p>
          Proteins and carbohydrates are essential constituents of our food. These
          biomolecules interact with each other and constitute the molecular logic of life
          processes. In addition, some simple molecules like <strong>vitamins</strong> and{" "}
          <strong>mineral salts</strong> also play an important role in the functions of
          organisms.
        </p>
      </Callout>

      <h2 id="h-10-1">10.1 Carbohydrates</h2>

      <p>
        Carbohydrates are primarily produced by plants and form a very large group of
        naturally occurring organic compounds. Some common examples are cane sugar,
        glucose, starch, etc. Most of them have a general formula, C<sub>x</sub>(H
        <sub>2</sub>O)<sub>y</sub>, and were considered as hydrates of carbon from where
        the name <strong>carbohydrate</strong> was derived. For example, the molecular
        formula of glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) fits into this general
        formula, C<sub>6</sub>(H<sub>2</sub>O)<sub>6</sub>.
      </p>

      <p>
        But all the compounds which fit into this formula may not be classified as
        carbohydrates. For example acetic acid (CH<sub>3</sub>COOH) fits into this general
        formula, C<sub>2</sub>(H<sub>2</sub>O)<sub>2</sub> but is not a carbohydrate.
        Similarly, rhamnose, C<sub>6</sub>H<sub>12</sub>O<sub>5</sub> is a carbohydrate but
        does not fit in this definition.
      </p>

      <KeyPoint title="Definition">
        Chemically, the carbohydrates may be defined as <strong>optically active
        polyhydroxy aldehydes</strong> or <strong>ketones</strong> or the compounds which
        produce such units on hydrolysis. Some of the carbohydrates, which are sweet in
        taste, are also called <strong>sugars</strong>. Carbohydrates are also called{" "}
        <strong>saccharides</strong> (Greek: <em>sakcharon</em> means sugar).
      </KeyPoint>

      <h3 id="h-10-1-1">10.1.1 Classification of Carbohydrates</h3>

      <p>
        Carbohydrates are classified on the basis of their behaviour on hydrolysis. They
        have been broadly divided into following three groups.
      </p>

      <TreeDiagram
        title="Classification of carbohydrates"
        defaultExpanded
        nodes={[
          {
            label: "Carbohydrates (Saccharides)",
            children: [
              {
                label: "Monosaccharides",
                detail:
                  "Cannot be hydrolysed further to give simpler unit of polyhydroxy aldehyde or ketone (e.g. glucose, fructose, ribose). About 20 are known in nature.",
              },
              {
                label: "Oligosaccharides",
                detail:
                  "Yield two to ten monosaccharide units on hydrolysis. Further classified as disaccharides, trisaccharides, etc. (e.g. sucrose gives glucose + fructose; maltose gives two glucose units).",
              },
              {
                label: "Polysaccharides",
                detail:
                  "Yield a large number of monosaccharide units on hydrolysis. Not sweet in taste — non-sugars (e.g. starch, cellulose, glycogen, gums).",
              },
            ],
          },
        ]}
      />

      <p>
        The carbohydrates may also be classified as either{" "}
        <strong>reducing</strong> or <strong>non-reducing sugars</strong>. All those
        carbohydrates which reduce Fehling’s solution and Tollens’ reagent are referred
        to as <strong>reducing sugars</strong>. All monosaccharides whether aldose or
        ketose are reducing sugars.
      </p>

      <h3 id="h-10-1-2">10.1.2 Monosaccharides</h3>

      <p>
        Monosaccharides are further classified on the basis of number of carbon atoms
        and the functional group present in them. If a monosaccharide contains an{" "}
        <strong>aldehyde group</strong>, it is known as an <strong>aldose</strong> and if
        it contains a <strong>keto group</strong>, it is known as a <strong>ketose</strong>.
        The number of carbon atoms is also introduced in the name as shown in{" "}
        <Highlight>Table 10.1</Highlight>.
      </p>

      <TableCard
        title="Table 10.1: Different Types of Monosaccharides"
        headers={["Carbon atoms", "General term", "Aldehyde", "Ketone"]}
        rows={[
          { cells: ["3", "Triose", "Aldotriose", "Ketotriose"] },
          { cells: ["4", "Tetrose", "Aldotetrose", "Ketotetrose"] },
          { cells: ["5", "Pentose", "Aldopentose", "Ketopentose"] },
          { cells: ["6", "Hexose", "Aldohexose", "Ketohexose"] },
          { cells: ["7", "Heptose", "Aldoheptose", "Aldoheptose"] },
        ]}
        caption="(Ketone column follows the same pattern for the given classes.)"
      />

      <h4 className="mt-5 mb-2 text-base font-bold">10.1.2.1 Glucose</h4>

      <p>
        Glucose occurs freely in nature as well as in the combined form. It is present
        in sweet fruits and honey. Ripe grapes also contain glucose in large amounts. It
        is prepared as follows:
      </p>

      <ProcessCard
        steps={[
          {
            label: "From sucrose (Cane sugar)",
            description: (
              <>
                Sucrose is boiled with dilute HCl or H<sub>2</sub>SO<sub>4</sub> in alcoholic
                solution; glucose and fructose are obtained in equal amounts.
                <FormulaBlock
                  latex={String.raw`\text{C}_{12}\text{H}_{22}\text{O}_{11} + \text{H}_2\text{O} \xrightarrow{\text{H}^{+}} \text{C}_6\text{H}_{12}\text{O}_6 + \text{C}_6\text{H}_{12}\text{O}_6`}
                  label="Sucrose → Glucose + Fructose"
                />
              </>
            ),
          },
          {
            label: "From starch",
            description: (
              <>
                Commercially glucose is obtained by hydrolysis of starch by boiling it with
                dilute H<sub>2</sub>SO<sub>4</sub> at 393 K under pressure.
                <FormulaBlock
                  latex={String.raw`(\text{C}_6\text{H}_{10}\text{O}_5)_n + n\text{H}_2\text{O} \xrightarrow[2\!-\!3\,\text{atm}]{393\,\text{K},\,\text{dil.}\,\text{H}_2\text{SO}_4} n\text{C}_6\text{H}_{12}\text{O}_6`}
                  label="Starch/cellulose → Glucose"
                />
              </>
            ),
          },
        ]}
      />

      <p>
        Glucose is an <strong>aldohexose</strong> and is also known as{" "}
        <strong>dextrose</strong>. It is the monomer of many larger carbohydrates, namely
        starch, cellulose. It is probably the most abundant organic compound on earth. It
        was assigned the structure given below on the basis of the following evidences:
      </p>

      <ul>
        <li>
          <strong>1.</strong> Its molecular formula was found to be C<sub>6</sub>H
          <sub>12</sub>O<sub>6</sub>.
        </li>
        <li>
          <strong>2.</strong> On prolonged heating with HI, it forms <strong>n-hexane</strong>,
          suggesting that all the six carbon atoms are linked in a straight chain.
        </li>
        <li>
          <strong>3.</strong> Glucose reacts with hydroxylamine to form an <strong>oxime</strong>{" "}
          and adds a molecule of hydrogen cyanide to give <strong>cyanohydrin</strong>. These
          reactions confirm the presence of a carbonyl group (&gt;C = O) in glucose.
        </li>
        <li>
          <strong>4.</strong> Glucose gets oxidised to six carbon carboxylic acid (
          <strong>gluconic acid</strong>) on reaction with a mild oxidising agent like
          bromine water. This indicates that the carbonyl group is present as an{" "}
          <strong>aldehydic group</strong>.
          <FormulaBlock
            latex={String.raw`\text{CHO}-(\text{CHOH})_4-\text{CH}_2\text{OH} \xrightarrow{\text{Br}_2/\text{H}_2\text{O}} \text{COOH}-(\text{CHOH})_4-\text{CH}_2\text{OH}\,\,\text{(Gluconic acid)}`}
          />
        </li>
        <li>
          <strong>5.</strong> Acetylation of glucose with acetic anhydride gives{" "}
          <strong>glucose pentaacetate</strong> which confirms the presence of{" "}
          <strong>five –OH groups</strong>. Since it exists as a stable compound, five –OH
          groups should be attached to different carbon atoms.
        </li>
        <li>
          <strong>6.</strong> On oxidation with nitric acid, glucose as well as gluconic acid
          both yield a dicarboxylic acid, <strong>saccharic acid</strong>. This indicates
          the presence of a <strong>primary alcoholic (–OH) group</strong> in glucose.
          <FormulaBlock
            latex={String.raw`\text{CHO}-(\text{CHOH})_4-\text{CH}_2\text{OH} \xrightarrow{\text{conc. }\text{HNO}_3} \text{COOH}-(\text{CHOH})_4-\text{COOH}\,\,\text{(Saccharic acid)}`}
          />
        </li>
      </ul>

      <KeyPoint title="Configuration">
        The exact spatial arrangement of different –OH groups was given by Fischer. Glucose
        is correctly named as <strong>D(+)-glucose</strong>. ‘D’ before the name represents
        the configuration whereas ‘(+)’ represents dextrorotatory nature of the molecule.{" "}
        <strong>‘D’ and ‘L’ have no relation with the optical activity</strong> of the
        compound. For assigning configuration of monosaccharides, it is the{" "}
        <strong>lowest asymmetric carbon atom</strong> which is compared to D-(+)-
        glyceraldehyde.
      </KeyPoint>

      <p>
        (+) Isomer of glyceraldehyde has ‘D’ configuration (–OH on right hand side in
        Fischer projection). All compounds correlated to D-(+) glyceraldehyde are said to
        have <strong>D-configuration</strong>, those correlated to L-(–) glyceraldehyde
        have <strong>L-configuration</strong> (–OH on left). In (+) glucose, —OH on the
        lowest asymmetric carbon is on the right side (comparable to (+) glyceraldehyde),
        so (+) glucose is assigned D-configuration.
      </p>

      <h4 className="mt-5 mb-2 text-base font-bold">Cyclic Structure of Glucose (Anomers)</h4>

      <p>
        The open chain structure (I) of glucose explained most of its properties but the
        following could not be explained:
      </p>

      <ul>
        <li>
          <strong>1.</strong> Despite having the aldehyde group, glucose does{" "}
          <strong>not</strong> give Schiff’s test and it does{" "}
          <strong>not</strong> form the hydrogensulphite addition product with NaHSO
          <sub>3</sub>.
        </li>
        <li>
          <strong>2.</strong> The pentaacetate of glucose does not react with hydroxylamine
          indicating the <strong>absence of free —CHO group</strong>.
        </li>
        <li>
          <strong>3.</strong> Glucose is found to exist in two different crystalline forms
          named <strong>α</strong> and <strong>β</strong>. The α-form (m.p. 419 K) is
          obtained by crystallisation from concentrated solution of glucose at 303 K while
          the β-form (m.p. 423 K) is obtained by crystallisation from hot and saturated
          aqueous solution at 371 K.
        </li>
      </ul>

      <Callout type="important" title="Hemiacetal ring formation">
        <p>
          It was proposed that one of the —OH groups may add to the —CHO group and form a{" "}
          <strong>cyclic hemiacetal</strong> structure. Glucose forms a six-membered ring in
          which —OH at C-5 is involved in ring formation. This explains the absence of —CHO
          group and the existence of glucose in two forms.
        </p>
        <p>
          The two cyclic hemiacetal forms of glucose differ only in the configuration of
          the hydroxyl group at <strong>C1</strong>, called the{" "}
          <strong>anomeric carbon</strong>. Such isomers (α-form and β-form) are called{" "}
          <strong>anomers</strong>. The six-membered cyclic structure of glucose is called{" "}
          <strong>pyranose</strong> structure (α– or β–), in analogy with <strong>pyran</strong>.
          The cyclic structure is more correctly represented by <strong>Haworth</strong>{" "}
          structures.
        </p>
      </Callout>

      <h4 className="mt-5 mb-2 text-base font-bold">10.1.2.2 Fructose</h4>

      <p>
        Fructose is an important <strong>ketohexose</strong>. It is obtained along with
        glucose by the hydrolysis of disaccharide, sucrose. It is a natural
        monosaccharide found in fruits, honey and vegetables. In its pure form it is used
        as a sweetner. It has the molecular formula C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>{" "}
        and contains a <strong>ketonic functional group</strong> at carbon number{" "}
        <strong>2</strong> and six carbons in straight chain as in the case of glucose. It
        belongs to D-series and is a laevorotatory compound. It is appropriately written
        as <strong>D-(–)-fructose</strong>.
      </p>

      <p>
        Fructose also exists in two cyclic forms which are obtained by the addition of —OH
        at C5 to the (&gt;C=O) group. The ring, thus formed is a{" "}
        <strong>five membered ring</strong> and is named as <strong>furanose</strong> with
        analogy to the compound <strong>furan</strong> (a five membered cyclic compound
        with one oxygen and four carbon atoms). The cyclic structures of the two anomers
        of fructose are represented by Haworth structures.
      </p>

      <h3 id="h-10-1-3">10.1.3 Disaccharides</h3>

      <p>
        Disaccharides on hydrolysis with dilute acids or enzymes yield two molecules of
        either the same or different monosaccharides. The two monosaccharides are joined
        together by an <strong>oxide linkage</strong> formed by the loss of a water
        molecule. Such a linkage between two monosaccharide units through oxygen atom is
        called a <strong>glycosidic linkage</strong>.
      </p>

      <p>
        In disaccharides, if the reducing groups of monosaccharides i.e., aldehydic or
        ketonic groups are <strong>bonded</strong>, these are{" "}
        <strong>non-reducing sugars</strong>, e.g., <strong>sucrose</strong>. On the other
        hand, sugars in which these functional groups are <strong>free</strong>, are called{" "}
        <strong>reducing sugars</strong>, for example, <strong>maltose</strong> and{" "}
        <strong>lactose</strong>.
      </p>

      <TableCard
        title="Disaccharides — composition, linkage and reducing nature"
        headers={["Disaccharide", "Constituents", "Glycosidic linkage", "Nature"]}
        rows={[
          {
            cells: [
              "Sucrose",
              "α-D-glucose + β-D-fructose",
              "C1 of α-D-glucose and C2 of β-D-fructose",
              "Non-reducing (reducing groups involved)",
            ],
          },
          {
            cells: [
              "Maltose",
              "α-D-glucose + α-D-glucose",
              "C1 of one glucose to C4 of another glucose (I→II)",
              "Reducing (free aldehyde at C1 of second glucose possible)",
            ],
          },
          {
            cells: [
              "Lactose (Milk sugar)",
              "β-D-galactose + β-D-glucose",
              "C1 of galactose to C4 of glucose",
              "Reducing (free aldehyde at C1 of glucose unit possible)",
            ],
          },
        ]}
      />

      <Callout type="note" title="Invert sugar (Sucrose)">
        <p>
          Sucrose is <strong>dextrorotatory</strong> but after hydrolysis gives
          dextrorotatory glucose and laevorotatory fructose. Since the laevorotation of
          fructose (–92.4°) is more than dextrorotation of glucose (+52.5°), the mixture is{" "}
          <strong>laevorotatory</strong>. Thus, hydrolysis of sucrose brings about a change
          in the sign of rotation, from dextro (+) to laevo (–) and the product is named as{" "}
          <strong>invert sugar</strong>.
        </p>
      </Callout>

      <h3 id="h-10-1-4">10.1.4 Polysaccharides</h3>

      <p>
        Polysaccharides contain a large number of monosaccharide units joined together by
        glycosidic linkages. These are the most commonly encountered carbohydrates in
        nature. They mainly act as the <strong>food storage</strong> or{" "}
        <strong>structural materials</strong>.
      </p>

      <TableCard
        title="Important polysaccharides"
        headers={["Polysaccharide", "Source/role", "Structure"]}
        rows={[
          {
            cells: [
              "Starch",
              "Main storage polysaccharide of plants; major dietary source",
              "Polymer of α-glucose: Amylose (15–20%, water soluble, unbranched C1–C4, 200–1000 units) + Amylopectin (80–85%, insoluble, branched: C1–C4 chain, C1–C6 branches)",
            ],
          },
          {
            cells: [
              "Cellulose",
              "Most abundant organic substance in plants; predominant constituent of plant cell wall",
              "Straight chain polysaccharide of β-D-glucose units joined by C1–C4 glycosidic linkages",
            ],
          },
          {
            cells: [
              "Glycogen",
              "Animal starch — stored in liver, muscles and brain (also in yeast and fungi)",
              "Similar to amylopectin but more highly branched; broken down to glucose when body needs it",
            ],
          },
        ]}
      />

      <h3 id="h-10-1-5">10.1.5 Importance of Carbohydrates</h3>

      <ConceptCard title="Role in life and industry" icon="🌾">
        <ul>
          <li>
            Carbohydrates are essential for life in both plants and animals. They form a
            major portion of our food.
          </li>
          <li>
            Honey has been used for a long time as an instant source of energy by ‘Vaids’
            in ayurvedic system of medicine.
          </li>
          <li>
            Used as storage molecules as <strong>starch</strong> in plants and{" "}
            <strong>glycogen</strong> in animals.
          </li>
          <li>
            Cell wall of bacteria and plants is made up of <strong>cellulose</strong>. We
            build furniture, etc. from cellulose in the form of wood and clothe ourselves
            with cellulose in the form of cotton fibre.
          </li>
          <li>
            Provide raw materials for many important industries like textiles, paper,
            lacquers and breweries.
          </li>
          <li>
            Two aldopentoses viz. <strong>D-ribose</strong> and{" "}
            <strong>2-deoxy-D-ribose</strong> are present in nucleic acids.
            Carbohydrates are found in biosystem in combination with many proteins and
            lipids.
          </li>
        </ul>
      </ConceptCard>

      <Expandable title="Intext 10.1–10.3" variant="exercise">
        <ul>
          <li>
            <strong>10.1</strong> Glucose or sucrose are soluble in water but cyclohexane
            or benzene (simple six membered ring compounds) are insoluble in water.
            Explain.
          </li>
          <li>
            <strong>10.2</strong> What are the expected products of hydrolysis of lactose?
          </li>
          <li>
            <strong>10.3</strong> How do you explain the absence of aldehyde group in the
            pentaacetate of D-glucose?
          </li>
        </ul>
      </Expandable>

      <h2 id="h-10-2">10.2 Proteins</h2>

      <p>
        Proteins are the most abundant biomolecules of the living system. Chief sources
        of proteins are milk, cheese, pulses, peanuts, fish, meat, etc. They occur in every
        part of the body and form the fundamental basis of structure and functions of
        life. They are also required for growth and maintenance of body. The word protein
        is derived from Greek word, <strong>“proteios”</strong> which means{" "}
        <strong>primary</strong> or <strong>of prime importance</strong>. All proteins are
        polymers of <strong>α-amino acids</strong>.
      </p>

      <h3 id="h-10-2-1">10.2.1 Amino Acids</h3>

      <p>
        Amino acids contain amino (–NH<sub>2</sub>) and carboxyl (–COOH) functional
        groups. Depending upon the relative position of amino group with respect to
        carboxyl group, the amino acids can be classified as <strong>α, β, γ, δ</strong>{" "}
        and so on. <strong>Only α-amino acids are obtained on hydrolysis of proteins</strong>.
        They may contain other functional groups also.
      </p>

      <p>
        All α-amino acids have trivial names, which usually reflect the property of that
        compound or its source (glycine — sweet, <em>glykos</em>; tyrosine — first
        obtained from cheese, <em>tyros</em>). Amino acids are generally represented by a
        three letter symbol, sometimes one letter symbol is also used. Structures of some
        commonly occurring amino acids along with their 3-letter and 1-letter symbols are
        given in <Highlight>Table 10.2</Highlight>.
      </p>

      <TableCard
        title="Table 10.2: Natural Amino Acids"
        headers={["Name of the amino acids", "Characteristic feature of side chain, R", "Three letter symbol", "One letter code"]}
        rows={[
          { cells: ["Glycine", "H", "Gly", "G"] },
          { cells: ["Alanine", "–CH3", "Ala", "A"] },
          { cells: ["Valine*", "(H3C)2CH–", "Val", "V"] },
          { cells: ["Leucine*", "(H3C)2CH–CH2–", "Leu", "L"] },
          { cells: ["Isoleucine*", "H3C–CH2–CH(CH3)–", "Ile", "I"] },
          { cells: ["Arginine*", "HN=C(NH2)–NH–(CH2)3–", "Arg", "R"] },
          { cells: ["Lysine*", "H2N–(CH2)4–", "Lys", "K"] },
          { cells: ["Glutamic acid", "HOOC–CH2–CH2–", "Glu", "E"] },
          { cells: ["Aspartic acid", "HOOC–CH2–", "Asp", "D"] },
          { cells: ["Glutamine", "H2N–C(=O)–CH2–CH2–", "Gln", "Q"] },
          { cells: ["Asparagine", "H2N–C(=O)–CH2–", "Asn", "N"] },
          { cells: ["Threonine*", "H3C–CHOH–", "Thr", "T"] },
          { cells: ["Serine", "HO–CH2–", "Ser", "S"] },
          { cells: ["Cysteine", "HS–CH2–", "Cys", "C"] },
          { cells: ["Methionine*", "H3C–S–CH2–CH2–", "Met", "M"] },
          { cells: ["Phenylalanine*", "C6H5–CH2–", "Phe", "F"] },
          { cells: ["Tyrosine", "(p)HO–C6H4–CH2–", "Tyr", "Y"] },
          { cells: ["Tryptophan*", "–CH2–(indole ring)", "Trp", "W"] },
          { cells: ["Histidine*", "(imidazole ring)–CH2–", "His", "H"] },
          { cells: ["Proline", "(pyrrolidine ring, a-imino acid)", "Pro", "P"] },
        ]}
        caption="* essential amino acid; a = entire structure as in standard representation."
      />

      <h3 id="h-10-2-2">10.2.2 Classification of Amino Acids</h3>

      <p>
        Amino acids are classified as <strong>acidic, basic or neutral</strong> depending
        upon the relative number of amino and carboxyl groups in their molecule.
      </p>

      <Comparison
        columns={[
          {
            title: "Type",
            children: (
              <ul>
                <li>
                  <strong>Neutral</strong>
                </li>
                <li>
                  <strong>Basic</strong>
                </li>
                <li>
                  <strong>Acidic</strong>
                </li>
              </ul>
            ),
          },
          {
            title: "Condition",
            children: (
              <ul>
                <li>Equal number of –NH<sub>2</sub> and –COOH groups</li>
                <li>More number of –NH<sub>2</sub> than –COOH groups</li>
                <li>More number of –COOH groups than –NH<sub>2</sub> groups</li>
              </ul>
            ),
          },
        ]}
      />

      <p>
        The amino acids, which can be synthesised in the body, are known as{" "}
        <strong>non-essential amino acids</strong>. On the other hand, those which cannot
        be synthesised in the body and must be obtained through diet, are known as{" "}
        <strong>essential amino acids</strong> (marked with asterisk in Table 10.2).
      </p>

      <KeyPoint title="Zwitter ion and amphoteric behaviour">
        <p>
          Amino acids are usually colourless, crystalline solids. They are water-soluble,
          high melting solids and behave like salts rather than simple amines or
          carboxylic acids. In aqueous solution, the carboxyl group can lose a proton and
          amino group can accept a proton, giving rise to a dipolar ion known as{" "}
          <strong>zwitter ion</strong>. This is neutral but contains both positive and
          negative charges.
        </p>
        <p>
          In zwitter ionic form, amino acids show <strong>amphoteric behaviour</strong> as
          they react both with acids and bases.
        </p>
      </KeyPoint>

      <p>
        Except glycine, all other naturally occurring α-amino acids are{" "}
        <strong>optically active</strong>, since the α-carbon atom is asymmetric. These
        exist both in ‘D’ and ‘L’ forms. <strong>Most naturally occurring amino acids have
        L-configuration</strong>. L-Amino acids are represented by writing the –NH
        <sub>2</sub> group on <strong>left</strong> hand side.
      </p>

      <h3 id="h-10-2-3">10.2.3 Structure of Proteins</h3>

      <p>
        Proteins are the polymers of α-amino acids and they are connected to each other
        by <strong>peptide bond</strong> or <strong>peptide linkage</strong>. Chemically,
        peptide linkage is an <strong>amide</strong> formed between –COOH group and –NH
        <sub>2</sub> group with elimination of a water molecule (–CO–NH–).
      </p>

      <Callout type="note" title="From amino acids to polypeptides">
        <ul>
          <li>
            Two amino acids → <strong>dipeptide</strong> (e.g. glycylalanine from glycine +
            alanine)
          </li>
          <li>
            Three amino acids → <strong>tripeptide</strong> (two peptide linkages)
          </li>
          <li>
            Four, five or six amino acids → <strong>tetrapeptide, pentapeptide or
            hexapeptide</strong>
          </li>
          <li>
            More than ten amino acids → <strong>polypeptides</strong>. A polypeptide with
            more than hundred amino acid residues, having molecular mass higher than{" "}
            <strong>10,000 u</strong> is called a <strong>protein</strong>. However, the
            distinction between a polypeptide and a protein is not very sharp (e.g. insulin
            contains 51 amino acids).
          </li>
        </ul>
      </Callout>

      <Comparison
        columns={[
          {
            title: "Fibrous proteins",
            children: (
              <ul>
                <li>Polypeptide chains run parallel and are held together by hydrogen and disulphide bonds.</li>
                <li>Fibre–like structure.</li>
                <li>Generally insoluble in water.</li>
                <li>Examples: <strong>keratin</strong> (hair, wool, silk), <strong>myosin</strong> (muscles).</li>
              </ul>
            ),
          },
          {
            title: "Globular proteins",
            children: (
              <ul>
                <li>Chains of polypeptides coil around to give a spherical shape.</li>
                <li>Usually soluble in water.</li>
                <li>Examples: <strong>insulin</strong> and <strong>albumins</strong>.</li>
              </ul>
            ),
          },
        ]}
      />

      <p>
        Structure and shape of proteins can be studied at four different levels —{" "}
        <strong>primary</strong>, <strong>secondary</strong>, <strong>tertiary</strong> and{" "}
        <strong>quaternary</strong>, each more complex than the previous one.
      </p>

      <TableCard
        title="Four levels of protein structure"
        headers={["Level", "Description"]}
        rows={[
          {
            cells: [
              "Primary structure",
              "Sequence of amino acids in each polypeptide chain. Any change in this sequence creates a different protein.",
            ],
          },
          {
            cells: [
              "Secondary structure",
              "Shape of a long polypeptide chain due to regular folding of the backbone. Exists as α-helix and β-pleated sheet structure arising due to hydrogen bonding between –C(=O) and –NH– groups of the peptide bond.",
            ],
          },
          {
            cells: [
              "Tertiary structure",
              "Overall folding of the polypeptide chains (further folding of secondary structure) giving fibrous or globular shapes. Stabilised by hydrogen bonds, disulphide linkages, van der Waals and electrostatic forces of attraction.",
            ],
          },
          {
            cells: [
              "Quaternary structure",
              "Spatial arrangement of two or more polypeptide chains (sub-units) with respect to each other.",
            ],
          },
        ]}
      />

      <KeyPoint title="α-helix and β-pleated sheet">
        <ul>
          <li>
            <strong>α-Helix:</strong> Polypeptide chain forms all possible hydrogen bonds by
            twisting into a <strong>right handed screw (helix)</strong> with the –NH group of
            each amino acid residue hydrogen bonded to the –C(=O) of an adjacent turn of the
            helix.
          </li>
          <li>
            <strong>β-Pleated sheet:</strong> All peptide chains are stretched out to nearly
            maximum extension and then laid side by side which are held together by{" "}
            <strong>intermolecular hydrogen bonds</strong>. The structure resembles the
            pleated folds of drapery.
          </li>
        </ul>
      </KeyPoint>

      <h3 id="h-10-2-4">10.2.4 Denaturation of Proteins</h3>

      <p>
        Protein found in a biological system with a unique three-dimensional structure and
        biological activity is called a <strong>native protein</strong>. When a protein in
        its native form, is subjected to physical change like change in temperature or
        chemical change like change in pH, the hydrogen bonds are disturbed. Due to this,
        globules unfold and helix get uncoiled and protein loses its biological activity.
        This is called <strong>denaturation of protein</strong>.
      </p>

      <Callout type="note" title="What is destroyed / retained">
        <p>
          During denaturation <strong>secondary and tertiary structures are destroyed</strong>{" "}
          but <strong>primary structure remains intact</strong>. The coagulation of egg white
          on boiling is a common example of denaturation. Another example is curdling of
          milk which is caused due to the formation of lactic acid by the bacteria present
          in milk.
        </p>
      </Callout>

      <Expandable title="Intext 10.4–10.5" variant="exercise">
        <ul>
          <li>
            <strong>10.4</strong> The melting points and solubility in water of amino acids
            are generally higher than that of the corresponding halo acids. Explain.
          </li>
          <li>
            <strong>10.5</strong> Where does the water present in the egg go after boiling the
            egg?
          </li>
        </ul>
      </Expandable>

      <h2 id="h-10-3">10.3 Enzymes</h2>

      <p>
        Life is possible due to the coordination of various chemical reactions in living
        organisms. An example is the digestion of food, absorption of appropriate
        molecules and ultimately production of energy. This process involves a sequence of
        reactions and all these reactions occur in the body under very mild conditions.
        This occurs with the help of certain biocatalysts called <strong>enzymes</strong>.
        <strong>Almost all the enzymes are globular proteins</strong>.
      </p>

      <KeyPoint title="Enzyme specificity and naming">
        <ul>
          <li>
            Enzymes are very specific for a particular reaction and for a particular
            substrate.
          </li>
          <li>
            They are generally named after the compound or class of compounds upon which
            they work. For example, the enzyme that catalyses hydrolysis of maltose into
            glucose is named as <strong>maltase</strong>.
            <FormulaBlock
              latex={String.raw`\text{C}_{12}\text{H}_{22}\text{O}_{11} \xrightarrow{\text{Maltase}} 2\text{C}_6\text{H}_{12}\text{O}_6\,\,\text{(Glucose)}`}
            />
          </li>
          <li>
            Sometimes enzymes are also named after the reaction, where they are used. For
            example, the enzymes which catalyse the oxidation of one substrate with
            simultaneous reduction of another substrate are named as{" "}
            <strong>oxidoreductase enzymes</strong>.
          </li>
          <li>The ending of the name of an enzyme is <strong>-ase</strong>.</li>
        </ul>
      </KeyPoint>

      <h3 id="h-10-3-1">10.3.1 Mechanism of Enzyme Action</h3>

      <p>
        Enzymes are needed only in small quantities for the progress of a reaction.
        Similar to the action of chemical catalysts, enzymes are said to{" "}
        <strong>reduce the magnitude of activation energy</strong>. For example, activation
        energy for acid hydrolysis of sucrose is <strong>6.22 kJ mol<sup>–1</sup></strong>,
        while the activation energy is only <strong>2.15 kJ mol<sup>–1</sup></strong> when
        hydrolysed by the enzyme, <strong>sucrase</strong>.
      </p>

      <h2 id="h-10-4">10.4 Vitamins</h2>

      <p>
        It has been observed that certain organic compounds are required in small amounts
        in our diet but their deficiency causes specific diseases. These compounds are
        called <strong>vitamins</strong>. Most of the vitamins cannot be synthesised in
        our body but plants can synthesise almost all of them, so they are considered as{" "}
        <strong>essential food factors</strong>. However, the bacteria of the gut can
        produce some of the vitamins required by us. All the vitamins are generally
        available in our diet. Different vitamins belong to various chemical classes and
        it is difficult to define them on the basis of structure. They are generally
        regarded as organic compounds required in the diet in small amounts to perform
        specific biological functions for normal maintenance of optimum growth and health
        of the organism.
      </p>

      <p>
        Vitamins are designated by alphabets <strong>A, B, C, D</strong>, etc. Some of
        them are further named as sub-groups e.g. B<sub>1</sub>, B<sub>2</sub>, B
        <sub>6</sub>, B<sub>12</sub>, etc. Excess of vitamins is also harmful and vitamin
        pills should not be taken without the advice of doctor.
      </p>

      <p>
        The term <strong>“Vitamine”</strong> was coined from the word{" "}
        <strong>vital + amine</strong> since the earlier identified compounds had amino
        groups. Later work showed that most of them did not contain amino groups, so the
        letter ‘e’ was dropped and the term <strong>vitamin</strong> is used these days.
      </p>

      <h3 id="h-10-4-1">10.4.1 Classification of Vitamins</h3>

      <Comparison
        columns={[
          {
            title: "Fat soluble vitamins",
            children: (
              <ul>
                <li>Soluble in fat and oils but insoluble in water.</li>
                <li>Vitamins <strong>A, D, E and K</strong>.</li>
                <li>Stored in liver and adipose (fat storing) tissues.</li>
              </ul>
            ),
          },
          {
            title: "Water soluble vitamins",
            children: (
              <ul>
                <li>
                  <strong>B group vitamins</strong> and <strong>vitamin C</strong> are
                  soluble in water.
                </li>
                <li>
                  Must be supplied regularly in diet because they are readily excreted in
                  urine and cannot be stored (except <strong>vitamin B<sub>12</sub></strong>).
                </li>
              </ul>
            ),
          },
        ]}
      />

      <TableCard
        title="Table 10.3: Some important Vitamins, their Sources and their Deficiency Diseases"
        headers={["Sl. No.", "Name of Vitamins", "Sources", "Deficiency diseases"]}
        rows={[
          {
            cells: [
              "1.",
              "Vitamin A",
              "Fish liver oil, carrots, butter and milk",
              "Xerophthalmia (hardening of cornea of eye), Night blindness",
            ],
          },
          {
            cells: [
              "2.",
              "Vitamin B1 (Thiamine)",
              "Yeast, milk, green vegetables and cereals",
              "Beri beri (loss of appetite, retarded growth)",
            ],
          },
          {
            cells: [
              "3.",
              "Vitamin B2 (Riboflavin)",
              "Milk, eggwhite, liver, kidney",
              "Cheilosis (fissuring at corners of mouth and lips), digestive disorders and burning sensation of the skin.",
            ],
          },
          {
            cells: [
              "4.",
              "Vitamin B6 (Pyridoxine)",
              "Yeast, milk, egg yolk, cereals and grams",
              "Convulsions",
            ],
          },
          {
            cells: [
              "5.",
              "Vitamin B12",
              "Meat, fish, egg and curd",
              "Pernicious anaemia (RBC deficient in haemoglobin)",
            ],
          },
          {
            cells: [
              "6.",
              "Vitamin C (Ascorbic acid)",
              "Citrus fruits, amla and green leafy vegetables",
              "Scurvy (bleeding gums)",
            ],
          },
          {
            cells: [
              "7.",
              "Vitamin D",
              "Exposure to sunlight, fish and egg yolk",
              "Rickets (bone deformities in children) and osteomalacia (soft bones and joint pain in adults)",
            ],
          },
          {
            cells: [
              "8.",
              "Vitamin E",
              "Vegetable oils like wheat germ oil, sunflower oil, etc.",
              "Increased fragility of RBCs and muscular weakness",
            ],
          },
          {
            cells: [
              "9.",
              "Vitamin K",
              "Green leafy vegetables",
              "Increased blood clotting time",
            ],
          },
        ]}
      />

      <h2 id="h-10-5">10.5 Nucleic Acids</h2>

      <p>
        Every generation of each and every species resembles its ancestors in many ways.
        How are these characteristics transmitted from one generation to the next? It has
        been observed that <strong>nucleus</strong> of a living cell is responsible for
        this transmission of inherent characters, also called <strong>heredity</strong>.
        The particles in nucleus of the cell, responsible for heredity, are called{" "}
        <strong>chromosomes</strong> which are made up of proteins and another type of
        biomolecules called <strong>nucleic acids</strong>. These are mainly of two types,
        the <strong>deoxyribonucleic acid (DNA)</strong> and{" "}
        <strong>ribonucleic acid (RNA)</strong>. Since nucleic acids are long chain
        polymers of nucleotides, so they are also called <strong>polynucleotides</strong>.
      </p>

      <FactCard
        title="James Dewey Watson"
        definition="Dr Watson received his Ph.D. (1950) from Indiana University in Zoology. He is best known for his discovery of the structure of DNA for which he shared with Francis Crick and Maurice Wilkins the 1962 Nobel prize in Physiology and Medicine. They proposed that DNA molecule takes the shape of a double helix, an elegantly simple structure that resembles a gently twisted ladder. The rails of the ladder are made of alternating units of phosphate and the sugar deoxyribose; the rungs are each composed of a pair of purine/pyrimidine bases. This research laid the foundation for the emerging field of molecular biology."
      />

      <h3 id="h-10-5-1">10.5.1 Chemical Composition of Nucleic Acids</h3>

      <p>
        Complete hydrolysis of DNA (or RNA) yields a <strong>pentose sugar</strong>,
        phosphoric acid and nitrogen containing heterocyclic compounds (called{" "}
        <strong>bases</strong>).
      </p>

      <ul>
        <li>
          In DNA molecules, the sugar moiety is <strong>β-D-2-deoxyribose</strong> whereas
          in RNA molecule, it is <strong>β-D-ribose</strong>.
        </li>
        <li>
          DNA contains four bases viz. <strong>adenine (A)</strong>,{" "}
          <strong>guanine (G)</strong>, <strong>cytosine (C)</strong> and{" "}
          <strong>thymine (T)</strong>. RNA also contains four bases, the first three are
          same as in DNA but the fourth one is <strong>uracil (U)</strong>.
        </li>
      </ul>

      <h3 id="h-10-5-2">10.5.2 Structure of Nucleic Acids</h3>

      <p>
        A unit formed by the attachment of a base to 1′ position of sugar is known as{" "}
        <strong>nucleoside</strong>. In nucleosides, the sugar carbons are numbered as 1′,
        2′, 3′, etc. in order to distinguish these from the bases. When nucleoside is
        linked to phosphoric acid at 5′-position of sugar moiety, we get a{" "}
        <strong>nucleotide</strong>.
      </p>

      <p>
        Nucleotides are joined together by <strong>phosphodiester linkage</strong> between
        5′ and 3′ carbon atoms of the pentose sugar. Information regarding the sequence of
        nucleotides in the chain of a nucleic acid is called its{" "}
        <strong>primary structure</strong>. Nucleic acids have a <strong>secondary
        structure</strong> also.
      </p>

      <KeyPoint title="Watson–Crick model (DNA)">
        <p>
          James Watson and Francis Crick gave a <strong>double strand helix</strong>{" "}
          structure for DNA. Two nucleic acid chains are wound about each other and held
          together by hydrogen bonds between pairs of bases. The two strands are{" "}
          <strong>complementary</strong> to each other because the hydrogen bonds are
          formed between specific pairs of bases.
        </p>
        <ul>
          <li>
            <strong>Adenine (A)</strong> forms hydrogen bonds with{" "}
            <strong>thymine (T)</strong>
          </li>
          <li>
            <strong>Cytosine (C)</strong> forms hydrogen bonds with{" "}
            <strong>guanine (G)</strong>
          </li>
        </ul>
      </KeyPoint>

      <p>
        In secondary structure of RNA <strong>single stranded helix</strong> is present
        which sometimes folds back on itself. RNA molecules are of three types and they
        perform different functions. They are named as <strong>messenger RNA
        (m-RNA)</strong>, <strong>ribosomal RNA (r-RNA)</strong> and{" "}
        <strong>transfer RNA (t-RNA)</strong>.
      </p>

      <FactCard
        title="Har Gobind Khorana"
        definition="Har Gobind Khorana was born in 1922. He obtained his M.Sc. degree from Punjab University in Lahore. It was at Cambridge, U.K. that he got interested in both proteins and nucleic acids. Dr Khorana shared the Nobel Prize for Medicine and Physiology in 1968 with Marshall Nirenberg and Robert Holley for cracking the genetic code."
      />

      <h3 id="h-10-5-3">10.5.3 Biological Functions of Nucleic Acids</h3>

      <Callout type="important" title="DNA and protein synthesis">
        <ul>
          <li>
            <strong>DNA</strong> is the chemical basis of heredity and may be regarded as
            the reserve of genetic information. DNA is exclusively responsible for
            maintaining the identity of different species of organisms over millions of
            years.
          </li>
          <li>
            A DNA molecule is capable of <strong>self duplication</strong> during cell
            division and identical DNA strands are transferred to daughter cells.
          </li>
          <li>
            Another important function of nucleic acids is the{" "}
            <strong>protein synthesis</strong> in the cell. Actually, the proteins are
            synthesised by various RNA molecules in the cell but the{" "}
            <strong>message for the synthesis of a particular protein is present in
            DNA</strong>.
          </li>
        </ul>
      </Callout>

      <KeyPoint title="DNA Fingerprinting">
        <p>
          It is known that every individual has unique fingerprints. A sequence of bases
          on DNA is also unique for a person and information regarding this is called{" "}
          <strong>DNA fingerprinting</strong>. It is same for every cell and cannot be
          altered by any known treatment. DNA fingerprinting is now used (i) in forensic
          laboratories for identification of criminals, (ii) to determine paternity of an
          individual, (iii) to identify the dead bodies in any accident by comparing the
          DNA’s of parents or children, (iv) to identify racial groups to rewrite
          biological evolution.
        </p>
      </KeyPoint>

      <h2 id="h-10-6">10.6 Hormones</h2>

      <p>
        <strong>Hormones</strong> are molecules that act as intercellular messengers.
        These are produced by endocrine glands in the body and are poured directly in the
        blood stream which transports them to the site of action. In terms of chemical
        nature, some of these are <strong>steroids</strong>, e.g., estrogens and
        androgens; some are <strong>poly peptides</strong> for example insulin and
        endorphins and some others are <strong>amino acid derivatives</strong> such as
        epinephrine and norepinephrine.
      </p>

      <p>
        Hormones have several functions in the body. They help to maintain the balance of
        biological activities in the body. The role of <strong>insulin</strong> in keeping
        the blood glucose level within the narrow limit is an example of this function.
        Insulin is released in response to the rapid rise in blood glucose level. On the
        other hand hormone <strong>glucagon</strong> tends to increase the glucose level
        in the blood. The two hormones together regulate the glucose level in the blood.
        Epinephrine and norepinephrine mediate responses to external stimuli. Growth
        hormones and sex hormones play role in growth and development.{" "}
        <strong>Thyroxine</strong> produced in the thyroid gland is an iodinated
        derivative of amino acid tyrosine. Abnormally low level of thyroxine leads to{" "}
        <strong>hypothyroidism</strong> which is characterised by lethargyness and obesity.
        Increased level of thyroxine causes <strong>hyperthyroidism</strong>. Low level of
        iodine in the diet may lead to hypothyroidism and enlargement of the thyroid
        gland. This condition is largely being controlled by adding sodium iodide to
        commercial table salt (“Iodised” salt).
      </p>

      <Callout type="note" title="Steroid hormones">
        <p>
          Steroid hormones are produced by adrenal cortex and gonads (testes in males and
          ovaries in females). Hormones released by the adrenal cortex play very important
          role in the functions of the body. For example,{" "}
          <strong>glucocorticoids</strong> control the carbohydrate metabolism, modulate
          inflammatory reactions, and are involved in reactions to stress. The{" "}
          <strong>mineralocorticoids</strong> control the level of excretion of water and
          salt by the kidney. If adrenal cortex does not function properly then one of the
          results may be <strong>Addison’s disease</strong> characterised by hypoglycemia,
          weakness and increased susceptibility to stress. The disease is fatal unless it
          is treated by glucocorticoids and mineralocorticoids. Hormones released by
          gonads are responsible for development of secondary sex characters.{" "}
          <strong>Testosterone</strong> is the major sex hormone produced in males. It is
          responsible for development of secondary male characteristics (deep voice,
          facial hair, general physical constitution) and{" "}
          <strong>estradiol</strong> is the main female sex hormone. It is responsible for
          development of secondary female characteristics and participates in the control
          of menstrual cycle. <strong>Progesterone</strong> is responsible for preparing
          the uterus for implantation of fertilised egg.
        </p>
      </Callout>

      <Expandable title="Intext 10.6–10.8" variant="exercise">
        <ul>
          <li>
            <strong>10.6</strong> Why cannot vitamin C be stored in our body?
          </li>
          <li>
            <strong>10.7</strong> What products would be formed when a nucleotide from DNA
            containing thymine is hydrolysed?
          </li>
          <li>
            <strong>10.8</strong> When RNA is hydrolysed, there is no relationship among the
            quantities of different bases obtained. What does this fact suggest about the
            structure of RNA?
          </li>
        </ul>
      </Expandable>

      <h2 id="h-10-summary">Summary</h2>

      <ul>
        <li>
          <strong>Carbohydrates</strong> are optically active polyhydroxy aldehydes or
          ketones or molecules which provide such units on hydrolysis. They are broadly
          classified into three groups — monosaccharides, disaccharides and
          polysaccharides. Glucose, the most important source of energy for mammals, is
          obtained by the digestion of starch. Monosaccharides are held together by{" "}
          <strong>glycosidic linkages</strong> to form disaccharides or polysaccharides.
        </li>
        <li>
          <strong>Proteins</strong> are the polymers of about twenty different α-amino
          acids which are linked by <strong>peptide bonds</strong>. Ten amino acids are
          called <strong>essential amino acids</strong> because they cannot be synthesised
          by our body, hence must be provided through diet. Proteins perform various
          structural and dynamic functions in the organisms. Proteins which contain only
          α-amino acids are called <strong>simple proteins</strong>. The secondary or
          tertiary structure of proteins get disturbed on change of pH or temperature and
          they are not able to perform their functions. This is called{" "}
          <strong>denaturation of proteins</strong>. <strong>Enzymes</strong> are
          biocatalysts which speed up the reactions in biosystems. They are very specific
          and selective in their action and chemically majority of enzymes are proteins.
        </li>
        <li>
          <strong>Vitamins</strong> are accessory food factors required in the diet. They
          are classified as <strong>fat soluble</strong> (A, D, E and K) and{" "}
          <strong>water soluble</strong> (B group and C). Deficiency of vitamins leads to
          many diseases.
        </li>
        <li>
          <strong>Nucleic acids</strong> are the polymers of nucleotides which in turn
          consist of a base, a pentose sugar and phosphate moiety. Nucleic acids are
          responsible for the transfer of characters from parents to offsprings. There are
          two types of nucleic acids — <strong>DNA</strong> and <strong>RNA</strong>.
          DNA contains a five carbon sugar molecule called <strong>2-deoxyribose</strong>{" "}
          whereas RNA contains <strong>ribose</strong>. Both DNA and RNA contain adenine,
          guanine and cytosine. The fourth base is <strong>thymine</strong> in DNA and{" "}
          <strong>uracil</strong> in RNA. The structure of DNA is a{" "}
          <strong>double strand</strong> whereas RNA is a <strong>single strand</strong>{" "}
          molecule. DNA is the chemical basis of heredity and have the coded message for
          proteins to be synthesised in the cell. There are three types of RNA — mRNA,
          rRNA and tRNA which actually carry out the protein synthesis in the cell.
        </li>
      </ul>

      <h2 id="h-10-exercises">Exercises</h2>

      <Expandable title="Exercise 10.1–10.25 (NCERT)" variant="exercise">
        <ExerciseQa
          answersHeading="NCERT Exercise Questions (10.1–10.25)"
          questions={[
            <>10.1 What are monosaccharides?</>,
            <>10.2 What are reducing sugars?</>,
            <>10.3 Write two main functions of carbohydrates in plants.</>,
            <>
              10.4 Classify the following into monosaccharides and disaccharides.
              Ribose, 2-deoxyribose, maltose, galactose, fructose and lactose.
            </>,
            <>10.5 What do you understand by the term glycosidic linkage?</>,
            <>10.6 What is glycogen? How is it different from starch?</>,
            <>
              10.7 What are the hydrolysis products of (i) sucrose and (ii) lactose?
            </>,
            <>10.8 What is the basic structural difference between starch and cellulose?</>,
            <>
              10.9 What happens when D-glucose is treated with the following reagents?
              (i) HI (ii) Bromine water (iii) HNO<sub>3</sub>
            </>,
            <>
              10.10 Enumerate the reactions of D-glucose which cannot be explained by its
              open chain structure.
            </>,
            <>
              10.11 What are essential and non-essential amino acids? Give two examples of
              each type.
            </>,
            <>
              10.12 Define the following as related to proteins (i) Peptide linkage (ii)
              Primary structure (iii) Denaturation.
            </>,
            <>10.13 What are the common types of secondary structure of proteins?</>,
            <>10.14 What type of bonding helps in stabilising the α-helix structure of proteins?</>,
            <>10.15 Differentiate between globular and fibrous proteins.</>,
            <>10.16 How do you explain the amphoteric behaviour of amino acids?</>,
            <>10.17 What are enzymes?</>,
            <>10.18 What is the effect of denaturation on the structure of proteins?</>,
            <>
              10.19 How are vitamins classified? Name the vitamin responsible for the
              coagulation of blood.
            </>,
            <>
              10.20 Why are vitamin A and vitamin C essential to us? Give their important
              sources.
            </>,
            <>10.21 What are nucleic acids? Mention their two important functions.</>,
            <>10.22 What is the difference between a nucleoside and a nucleotide?</>,
            <>
              10.23 The two strands in DNA are not identical but are complementary.
              Explain.
            </>,
            <>
              10.24 Write the important structural and functional differences between DNA
              and RNA.
            </>,
            <>10.25 What are the different types of RNA found in the cell?</>,
          ]}
        />
      </Expandable>
    </>
  );
}
