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
import { MoleculeStructure } from "@/components/content/chemistry/MoleculeStructure";
import { STRUCTURES } from "./structures.generated";

export default function AlcoholsPhenolsEthersChapter() {
  return (
    <>
      <Callout type="didyouknow">
        Alcohols, phenols and ethers are the basic compounds for the formation of{" "}
        <strong>detergents, antiseptics and fragrances</strong> respectively. The spirit used for
        polishing wooden furniture is chiefly ethanol — a compound containing a hydroxyl group.
      </Callout>

      <p>
        An <strong>alcohol</strong> contains one or more hydroxyl (—OH) groups directly attached to
        carbon atom(s) of an aliphatic system (CH<sub>3</sub>OH). A <strong>phenol</strong> contains
        —OH group(s) directly attached to carbon atom(s) of an aromatic system (C<sub>6</sub>H
        <sub>5</sub>OH). Replacing a hydrogen atom of a hydrocarbon by an alkoxy or aryloxy group
        (R—O/Ar—O) gives an <strong>ether</strong>, for example CH<sub>3</sub>OCH<sub>3</sub>. Ethers
        can also be seen as compounds formed by replacing the hydrogen of the hydroxyl group of an
        alcohol or phenol by an alkyl or aryl group.
      </p>

      <h2 id="h-7-1">7.1 Classification</h2>

      <h3 id="h-7-1-1">7.1.1 Alcohols — Mono, Di, Tri or Polyhydric</h3>

      <p>
        Alcohols and phenols are classified as mono-, di-, tri- or polyhydric depending on whether
        they contain one, two, three or many hydroxyl groups.
      </p>

      <TableCard
        caption="Classification by number of —OH groups"
        headers={["Type", "—OH groups", "Example"]}
        rows={[
          { cells: ["Monohydric", "One", "CH₃CH₂OH (ethanol)"] },
          { cells: ["Dihydric", "Two", "HOCH₂CH₂OH (ethane-1,2-diol, ethylene glycol)"] },
          { cells: ["Trihydric", "Three", "HOCH₂CH(OH)CH₂OH (propane-1,2,3-triol, glycerol)"] },
          { cells: ["Polyhydric", "Many", "Sugars, starch, cellulose"] },
        ]}
      />

      <MoleculeStructure {...STRUCTURES.glycerol} maxWidth={380} />

      <p>
        Monohydric alcohols are further classified according to the hybridisation of the carbon
        carrying the —OH group.
      </p>

      <p>
        <strong>(i) Compounds containing an sp³ C—OH bond.</strong> The —OH group is attached to an{" "}
        <em>sp</em>
        <sup>3</sup> hybridised carbon of an alkyl group. These are further divided into:
      </p>

      <ul>
        <li>
          <strong>Primary, secondary and tertiary alcohols</strong> — the —OH group is attached to a
          primary, secondary or tertiary carbon respectively.
        </li>
        <li>
          <strong>Allylic alcohols</strong> — the —OH group is attached to an <em>sp</em>
          <sup>3</sup> carbon adjacent to a C=C bond, i.e. to an allylic carbon.
        </li>
        <li>
          <strong>Benzylic alcohols</strong> — the —OH group is attached to an <em>sp</em>
          <sup>3</sup> carbon next to an aromatic ring.
        </li>
      </ul>

      <p>
        Allylic and benzylic alcohols may themselves be primary, secondary or tertiary.
      </p>

      <p>
        <strong>(ii) Compounds containing an sp² C—OH bond.</strong> These alcohols contain —OH bonded
        to a carbon–carbon double bond (a vinylic carbon) or to an aryl carbon; they are also called{" "}
        <strong>vinylic alcohols</strong>. Example: CH<sub>2</sub>=CH—OH.
      </p>

      <h3 id="h-7-1-2">7.1.2 Phenols — Mono, Di and Trihydric Phenols</h3>

      <p>
        Phenols containing one, two or three hydroxyl groups attached to an aromatic ring are called
        monohydric, dihydric and trihydric phenols respectively.
      </p>

      <MoleculeStructure {...STRUCTURES.phenol} maxWidth={340} />

      <h3 id="h-7-1-3">7.1.3 Ethers</h3>

      <p>
        Ethers are <strong>simple or symmetrical</strong> when the two alkyl or aryl groups attached to
        oxygen are the same, and <strong>mixed or unsymmetrical</strong> when they differ. Diethyl
        ether, C<sub>2</sub>H<sub>5</sub>OC<sub>2</sub>H<sub>5</sub>, is symmetrical, whereas C
        <sub>2</sub>H<sub>5</sub>OCH<sub>3</sub> and C<sub>2</sub>H<sub>5</sub>OC<sub>6</sub>H
        <sub>5</sub> are unsymmetrical.
      </p>

      <h2 id="h-7-2">7.2 Nomenclature</h2>

      <h3 id="h-7-2-1">(a) Alcohols</h3>

      <p>
        The common name of an alcohol is derived from the common name of the alkyl group plus the word
        alcohol (CH<sub>3</sub>OH is methyl alcohol). In the IUPAC system the name of the alkane is
        modified by substituting the final &apos;e&apos; with the suffix &apos;ol&apos;; the longest
        chain is numbered from the end nearest the hydroxyl group. For polyhydric alcohols the
        &apos;e&apos; of the alkane is retained and the multiplicative prefix di, tri, etc. is added
        before &apos;ol&apos; — HOCH<sub>2</sub>CH<sub>2</sub>OH is ethane-1,2-diol. Cyclic alcohols
        use the prefix cyclo with —OH attached to C-1.
      </p>

      <TableCard
        caption="Table 7.1: Common and IUPAC Names of Some Alcohols"
        headers={["Compound", "Common name", "IUPAC name"]}
        rows={[
          { cells: ["CH₃—OH", "Methyl alcohol", "Methanol"] },
          { cells: ["CH₃CH₂CH₂—OH", "n-Propyl alcohol", "Propan-1-ol"] },
          { cells: ["CH₃CH(OH)CH₃", "Isopropyl alcohol", "Propan-2-ol"] },
          { cells: ["CH₃CH₂CH₂CH₂—OH", "n-Butyl alcohol", "Butan-1-ol"] },
          { cells: ["CH₃CH₂CH(OH)CH₃", "sec-Butyl alcohol", "Butan-2-ol"] },
          { cells: ["(CH₃)₂CHCH₂OH", "Isobutyl alcohol", "2-Methylpropan-1-ol"] },
          { cells: ["(CH₃)₃COH", "tert-Butyl alcohol", "2-Methylpropan-2-ol"] },
          { cells: ["HOCH₂CH₂OH", "Ethylene glycol", "Ethane-1,2-diol"] },
          { cells: ["HOCH₂CH(OH)CH₂OH", "Glycerol", "Propane-1,2,3-triol"] },
          { cells: ["Cyclohexanol", "—", "Cyclohexanol"] },
          { cells: ["2-Methylcyclopentanol", "—", "2-Methylcyclopentanol"] },
        ]}
      />

      <h3 id="h-7-2-2">(b) Phenols</h3>

      <p>
        The simplest hydroxy derivative of benzene is <strong>phenol</strong> — both its common and
        accepted IUPAC name. Because the structure involves a benzene ring, the terms <em>ortho</em>{" "}
        (1,2-), <em>meta</em> (1,3-) and <em>para</em> (1,4-disubstituted) are often used in common
        names.
      </p>

      <TableCard
        caption="Cresols and benzenediols"
        headers={["Common name", "IUPAC name"]}
        rows={[
          { cells: ["Phenol", "Phenol"] },
          { cells: ["o-Cresol", "2-Methylphenol"] },
          { cells: ["m-Cresol", "3-Methylphenol"] },
          { cells: ["p-Cresol", "4-Methylphenol"] },
          { cells: ["Catechol", "Benzene-1,2-diol"] },
          { cells: ["Resorcinol", "Benzene-1,3-diol"] },
          { cells: ["Hydroquinone (quinol)", "Benzene-1,4-diol"] },
        ]}
      />

      <h3 id="h-7-2-3">(c) Ethers</h3>

      <p>
        Common names are derived from the alkyl/aryl groups written as separate words in alphabetical
        order, followed by &apos;ether&apos; (CH<sub>3</sub>OC<sub>2</sub>H<sub>5</sub> is
        ethylmethyl ether). If both groups are the same the prefix &apos;di&apos; is used. In the IUPAC
        system ethers are regarded as hydrocarbon derivatives in which a hydrogen atom is replaced by
        an —OR or —OAr group; the larger group is chosen as the parent hydrocarbon.
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

      <Expandable
        title="Example 7.1 — Write structures from the IUPAC names"
        variant="example"
      >
        <p>
          Give IUPAC names of the following compounds: (i) 4-chloro-2,3-dimethylpentan-1-ol
          (ii) 2-ethoxypropane (iii) 2,6-dimethylphenol (iv) 1-ethoxy-2-nitrocyclohexane.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <TableCard
          caption="Name → structure"
          headers={["Name", "Structure"]}
          rows={[
            { cells: ["4-Chloro-2,3-dimethylpentan-1-ol", "HOCH₂CH(CH₃)CH(CH₃)CH(Cl)CH₃"] },
            { cells: ["2-Ethoxypropane", "CH₃CH(OCH₂CH₃)CH₃"] },
            { cells: ["2,6-Dimethylphenol", "benzene ring with OH at C1, CH₃ at C2 and C6"] },
            { cells: ["1-Ethoxy-2-nitrocyclohexane", "cyclohexane with OC₂H₅ at C1 and NO₂ at C2"] },
          ]}
        />
      </Expandable>

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

      <h4 id="h-7-4-1-1">1. From alkenes</h4>

      <p>
        <strong>(i) By acid catalysed hydration.</strong> Alkenes react with water in the presence of
        acid to form alcohols; with unsymmetrical alkenes the addition follows Markovnikov&apos;s rule.
      </p>

      <FormulaBlock latex={String.raw`\text{CH}_2\text{=CH}_2 + \text{H}_2\text{O} \xrightarrow{\text{H}^+} \text{CH}_3\text{CH}_2\text{OH}`} />

      <Stepper
        steps={[
          {
            label: "Step 1: Protonation of the alkene",
            description: (
              <>
                Electrophilic attack of H<sub>3</sub>O<sup>+</sup> on the double bond gives a
                carbocation.
                <FormulaBlock latex={String.raw`\text{CH}_2\text{=CH}_2 + \text{H}_3\text{O}^+ \rightarrow \text{CH}_3\text{CH}_2^+ + \text{H}_2\text{O}`} />
              </>
            ),
          },
          {
            label: "Step 2: Nucleophilic attack of water",
            description: "Water attacks the carbocation, giving a protonated alcohol.",
          },
          {
            label: "Step 3: Deprotonation",
            description: "Loss of a proton gives the alcohol and regenerates the acid catalyst.",
          },
        ]}
      />

      <p>
        <strong>(ii) By hydroboration–oxidation.</strong> Diborane (BH<sub>3</sub>)<sub>2</sub> adds to
        alkenes giving trialkyl boranes, which are oxidised to alcohols by hydrogen peroxide in aqueous
        sodium hydroxide. Boron attaches to the <em>sp</em>
        <sup>2</sup> carbon carrying the greater number of hydrogen atoms, so the alcohol looks as if
        water had added <em>against</em> Markovnikov&apos;s rule. Yields are excellent.
      </p>

      <FormulaBlock latex={String.raw`3\text{CH}_3\text{CH=CH}_2 + \text{BH}_3 \rightarrow (\text{CH}_3\text{CH}_2\text{CH}_2)_3\text{B} \xrightarrow{\text{H}_2\text{O}_2/\text{OH}^-} 3\text{CH}_3\text{CH}_2\text{CH}_2\text{OH}`} />

      <FactCard
        title="Hydroboration–oxidation"
        definition="First reported by H. C. Brown in 1959; he shared the 1979 Nobel Prize in Chemistry with G. Wittig for studies on boron-containing organic compounds."
        icon="🧪"
      />

      <h4 id="h-7-4-1-2">2. From carbonyl compounds</h4>

      <p>
        <strong>(i) By reduction of aldehydes and ketones.</strong> Aldehydes and ketones are reduced to
        alcohols by catalytic hydrogenation over finely divided platinum, palladium or nickel, or by
        treatment with NaBH<sub>4</sub> or LiAlH<sub>4</sub>. Aldehydes give primary alcohols; ketones
        give secondary alcohols.
      </p>

      <FormulaBlock latex={String.raw`\text{RCHO} + \text{H}_2 \xrightarrow{\text{Ni}} \text{RCH}_2\text{OH}`} />
      <FormulaBlock latex={String.raw`\text{R}_2\text{CO} + \text{H}_2 \xrightarrow{\text{Ni}} \text{R}_2\text{CHOH}`} />

      <p>
        <strong>(ii) By reduction of carboxylic acids and esters.</strong> Carboxylic acids are reduced
        to primary alcohols in excellent yields by LiAlH<sub>4</sub>, a strong reducing agent. Since
        LiAlH<sub>4</sub> is expensive, it is used only for special chemicals; commercially acids are
        converted to esters and then hydrogenated over a catalyst.
      </p>

      <FormulaBlock latex={String.raw`\text{RCOOH} \xrightarrow[\text{(ii) H}_2\text{O}]{\text{(i) LiAlH}_4} \text{RCH}_2\text{OH}`} />

      <h4 id="h-7-4-1-3">3. From Grignard reagents</h4>

      <p>
        Alcohols are produced by the reaction of Grignard reagents with aldehydes and ketones. The first
        step is nucleophilic addition of the Grignard reagent to the carbonyl group, giving an adduct;
        hydrolysis of the adduct gives the alcohol.
      </p>

      <FormulaBlock latex={String.raw`\text{RMgX} + \text{R}'\text{CHO} \rightarrow \text{R–CH(OMgX)–R}' \xrightarrow{\text{H}_2\text{O}} \text{R–CH(OH)–R}'`} />

      <TableCard
        caption="Which alcohol you get depends on the carbonyl compound"
        headers={["Carbonyl compound", "Product alcohol"]}
        rows={[
          { cells: ["Methanal, HCHO", "Primary alcohol"] },
          { cells: ["Any other aldehyde, RCHO", "Secondary alcohol"] },
          { cells: ["Ketone, R₂CO", "Tertiary alcohol"] },
        ]}
      />

      <Expandable
        title="Example 7.2 — Predict the products of three standard preparations"
        variant="example"
      >
        <p>
          Give the structures and IUPAC names of the products expected from: (a) catalytic reduction of
          butanal, (b) hydration of propene in dilute sulphuric acid, (c) reaction of propanone with
          methylmagnesium bromide followed by hydrolysis.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          (a) Butanal is an aldehyde, so reduction gives a primary alcohol — butan-1-ol,
          CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH.
        </p>
        <p>
          (b) Markovnikov addition of water gives propan-2-ol, CH<sub>3</sub>CH(OH)CH<sub>3</sub>.
        </p>
        <p>
          (c) A ketone with a Grignard reagent gives a tertiary alcohol — 2-methylpropan-2-ol, (CH
          <sub>3</sub>)<sub>3</sub>COH.
        </p>
      </Expandable>

      <h3 id="h-7-4-2">7.4.2 Preparation of Phenols</h3>

      <p>
        Phenol, also known as carbolic acid, was first isolated in the early nineteenth century from
        coal tar; today it is produced synthetically. In the laboratory, phenols are prepared from
        benzene derivatives by four routes.
      </p>

      <ProcessCard
        title="Four laboratory routes to phenol"
        steps={[
          {
            label: "1. From haloarenes",
            description: "Chlorobenzene is fused with NaOH at 623 K and 320 atm; acidification of the sodium phenoxide so produced gives phenol.",
          },
          {
            label: "2. From benzenesulphonic acid",
            description: "Benzene is sulphonated with oleum; the benzenesulphonic acid formed is heated with molten NaOH to give sodium phenoxide, and acidification liberates phenol.",
          },
          {
            label: "3. From diazonium salts",
            description: "Aniline is treated with NaNO2 + HCl at 273–278 K to give benzene diazonium chloride, which is hydrolysed by warming with water or dilute acid.",
          },
          {
            label: "4. From cumene (industrial)",
            description: "Cumene (isopropylbenzene) is oxidised by air to cumene hydroperoxide, which is decomposed by dilute acid into phenol and acetone. Most of the world production of phenol is by this route.",
          },
        ]}
      />

      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{Cl} \xrightarrow[\text{623 K, 320 atm}]{\text{NaOH}} \text{C}_6\text{H}_5\text{ONa} \xrightarrow{\text{H}^+} \text{C}_6\text{H}_5\text{OH}`} />
      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- \xrightarrow{\text{warm H}_2\text{O}} \text{C}_6\text{H}_5\text{OH} + \text{N}_2 + \text{HCl}`} />
      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{CH(CH}_3)_2 \xrightarrow{\text{O}_2} \text{C}_6\text{H}_5\text{C(CH}_3)_2\text{OOH} \xrightarrow{\text{dil. H}^+} \text{C}_6\text{H}_5\text{OH} + (\text{CH}_3)_2\text{CO}`} />

      <h3 id="h-7-4-3">7.4.3 Physical Properties</h3>

      <p>
        Boiling points of alcohols and phenols increase with the number of carbon atoms (stronger van
        der Waals forces) and, within alcohols, decrease with increasing branching (smaller surface
        area). The —OH group is involved in <strong>intermolecular hydrogen bonding</strong>, so
        alcohols and phenols boil much higher than hydrocarbons, ethers, haloalkanes and haloarenes of
        comparable molecular mass. Ethanol and propane have comparable molecular masses but very
        different boiling points, with methoxymethane lying in between.
      </p>

      <p>
        Solubility in water is due to hydrogen bonding with water molecules and decreases as the
        hydrophobic alkyl/aryl group grows; several lower alcohols are miscible with water in all
        proportions.
      </p>

      <Expandable
        title="Example 7.3 — Arrange in order of increasing boiling point"
        variant="example"
      >
        <p>
          (a) Pentan-1-ol, butan-1-ol, butan-2-ol, ethanol, propan-1-ol, methanol.
          (b) Pentan-1-ol, n-butane, pentanal, ethoxyethane.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          (a) Methanol &lt; ethanol &lt; propan-1-ol &lt; butan-2-ol &lt; butan-1-ol &lt; pentan-1-ol.
        </p>
        <p>(b) n-Butane &lt; ethoxyethane &lt; pentanal &lt; pentan-1-ol.</p>
      </Expandable>

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

      <MoleculeStructure {...STRUCTURES.salicylic_acid} maxWidth={380} />

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

      <h3 id="h-7-6-1">7.6.1 Preparation of Ethers</h3>

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

      <h3 id="h-7-6-2">7.6.2 Physical Properties</h3>

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

      <h3 id="h-7-6-3">7.6.3 Chemical Reactions</h3>

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

      <MoleculeStructure {...STRUCTURES.anisole} maxWidth={380} />

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
    </>
  );
}
