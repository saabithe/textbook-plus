import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";

import { TableCard } from "@/components/content/data/TableCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { MoleculeStructure } from "@/components/content/chemistry/MoleculeStructure";
import { STRUCTURES } from "./structures.generated";

export default function CoordinationCompoundsChapter() {
  return (
    <>
      <h2 id="h-5-intro">Introduction: Coordination Compounds</h2>

      <p><strong>Coordination Compound</strong></p>
      <p>A compound in which a central metal atom or ion is linked to a number of ions or neutral molecules known as ligands.</p>

      <p><strong>Bonding & Structure</strong></p>
      <ul className="list-disc pl-6 space-y-1 mb-2">
        <li>Coordinate bond: formed by one-side sharing of electron pairs.</li>
        <li>Representation: <Formula>{String.raw`\mathrm{M \leftarrow L}`}</Formula> (M = central metal atom, L = ligand).</li>
      </ul>
      <p>The central metal atom or ion and the ligands together form a coordination entity.</p>

      <p><strong>Central Atom / Ion</strong></p>
      <p>Definition: in a coordination entity, the atom or ion to which a fixed number of ions or neutral molecules are attached is called the central atom or ion.</p>
      <p>Diagram annotation: [Ni(CO)₄] — the central metal atom is Ni (nickel) in tetracarbonylnickel.</p>

      <p><strong>🧬 2. Ligands</strong></p>
      <p>Definition: the ions or neutral molecules bound to the central atom or ion in the coordination entity are called ligands.</p>
      <p>Electron-donation rule: for a species to act as a ligand it must be able to donate at least one pair of electrons to the central atom.</p>
      <p>Co-ordinating (donor) atom: the atom of the ligand that is directly bonded to the central atom or ion.</p>
      <p>The number of donor atoms present in a ligand is called its <strong>denticity</strong>.</p>
      <p>The number of ligand donor atoms directly bonded to the central metal ion is called the <strong>coordination number</strong>.</p>

      <h2 id="h-5-1">5.1 Werner&apos;s Theory of Coordination Compounds</h2>

      <p>
        Alfred Werner (1866–1919) was the first to formulate ideas about the structures of
        coordination compounds. He proposed the concept of a <strong>primary valence</strong> and a
        <strong> secondary valence</strong> for a metal ion.
      </p>

      <ul>
        <li>Binary compounds such as CrCl<sub>3</sub>, CoCl<sub>2</sub>, PdCl<sub>2</sub> have primary valences of 3, 2 and 2 respectively.</li>
        <li>In cobalt(III) chloride–ammonia complexes, some chloride ions precipitate as AgCl on adding excess AgNO<sub>3</sub> in cold, and some do not.</li>
      </ul>

      <TableCard
        caption="Table 5.1: Formulation of Cobalt(III) Chloride–Ammonia Complexes"
        headers={["Colour", "Formula", "Solution conductivity corresponds to"]}
        rows={[
          { cells: ["Yellow", "[Co(NH₃)₆]³⁺ 3Cl⁻", "1:3 electrolyte"] },
          { cells: ["Purple", "[CoCl(NH₃)₅]²⁺ 2Cl⁻", "1:2 electrolyte"] },
          { cells: ["Green", "[CoCl₂(NH₃)₄]⁺ Cl⁻", "1:1 electrolyte"] },
          { cells: ["Violet", "[CoCl₂(NH₃)₄]⁺ Cl⁻", "1:1 electrolyte"] },
        ]}
      />

      <p>
        The last two compounds have the same empirical formula CoCl<sub>3</sub>·4NH<sub>3</sub> but
        different properties — they are <strong>isomers</strong>. The atoms inside the square brackets
        form a single entity that does not dissociate under the reaction conditions.
      </p>

      <KeyPoint title="Werner's postulates (1898)">
        <ol>
          <li>Metals in coordination compounds show two types of linkages — primary and secondary.</li>
          <li>Primary valences are normally <strong>ionisable</strong> and are satisfied by negative ions.</li>
          <li>Secondary valences are <strong>non-ionisable</strong>; they are satisfied by neutral molecules or negative ions. The secondary valence equals the coordination number and is fixed for a metal.</li>
          <li>Ions/groups bound by secondary linkages to the metal have characteristic <strong>spatial arrangements</strong> corresponding to different coordination numbers (coordination polyhedra).</li>
        </ol>
      </KeyPoint>

      <p>
        Species inside the bracket are <strong>coordination entities</strong> (complexes); ions outside
        the bracket are <strong>counter ions</strong>. Octahedral, tetrahedral and square planar
        geometries are most common: [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>,
        [CoCl(NH<sub>3</sub>)<sub>5</sub>]<sup>2+</sup> and
        [CoCl<sub>2</sub>(NH<sub>3</sub>)<sub>4</sub>]<sup>+</sup> are octahedral, while
        [Ni(CO)<sub>4</sub>] is tetrahedral and [PtCl<sub>4</sub>]<sup>2−</sup> is square planar.
      </p>

      <Comparison
        columns={[
          {
            title: "Double salt",
            children: (
              <ul>
                <li>Formed from two or more stable compounds in stoichiometric ratio.</li>
                <li><strong>Dissociates completely</strong> into simple ions in water.</li>
                <li>Examples: carnallite KCl·MgCl₂·6H₂O, Mohr&apos;s salt FeSO₄·(NH₄)₂SO₄·6H₂O, potash alum KAl(SO₄)₂·12H₂O.</li>
              </ul>
            ),
          },
          {
            title: "Complex",
            children: (
              <ul>
                <li>Also formed in stoichiometric ratio.</li>
                <li>The complex ion <strong>does not dissociate</strong> into its constituent ions — [Fe(CN)₆]⁴⁻ in K₄[Fe(CN)₆] does not give Fe²⁺ and CN⁻.</li>
                <li>Example: K₄[Fe(CN)₆].</li>
              </ul>
            ),
          },
        ]}
      />

      <Expandable title="Example 5.1 — Assign secondary valences from AgCl precipitation" variant="example">
        <p>
          <strong>Question:</strong> On the basis of the observations made with aqueous solutions,
          assign secondary valences to metals in: (i) PdCl<sub>2</sub>·4NH<sub>3</sub> — 2 mol AgCl
          (ii) NiCl<sub>2</sub>·6H<sub>2</sub>O — 2 mol AgCl (iii) PtCl<sub>4</sub>·2HCl — 0 mol AgCl
          (iv) CoCl<sub>3</sub>·4NH<sub>3</sub> — 1 mol AgCl (v) PtCl<sub>2</sub>·2NH<sub>3</sub> — 0 mol AgCl.
        </p>
        <p><strong>Solution:</strong> The number of chloride ions precipitated gives the number of ionisable chlorides; the rest stay bound to the metal.</p>
        <ul>
          <li>(i) Secondary 4 — [Pd(NH<sub>3</sub>)<sub>4</sub>]Cl<sub>2</sub></li>
          <li>(ii) Secondary 6 — [Ni(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>2</sub></li>
          <li>(iii) Secondary 6 — H<sub>2</sub>[PtCl<sub>6</sub>]</li>
          <li>(iv) Secondary 6 — [CoCl<sub>2</sub>(NH<sub>3</sub>)<sub>4</sub>]Cl</li>
          <li>(v) Secondary 4 — [PtCl<sub>2</sub>(NH<sub>3</sub>)<sub>2</sub>]</li>
        </ul>
      </Expandable>

      <h2 id="h-5-2">5.2 Definitions of Some Important Terms Pertaining to Coordination Compounds</h2>

      <ConceptCard title="Coordination entity" icon="🧩">
        <p>
          A central metal atom or ion bonded to a fixed number of ions or molecules — e.g.
          [CoCl<sub>3</sub>(NH<sub>3</sub>)<sub>3</sub>], [Ni(CO)<sub>4</sub>],
          [Fe(CN)<sub>6</sub>]<sup>4−</sup>, [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>.
        </p>
      </ConceptCard>

      <ConceptCard title="Central atom / ion" icon="⚛️">
        <p>
          The atom/ion to which a fixed number of ions/groups are bound in a definite geometrical
          arrangement. In [NiCl<sub>2</sub>(H<sub>2</sub>O)<sub>4</sub>],
          [CoCl(NH<sub>3</sub>)<sub>5</sub>]<sup>2+</sup> and [Fe(CN)<sub>6</sub>]<sup>3−</sup> the
          central ions are Ni<sup>2+</sup>, Co<sup>3+</sup> and Fe<sup>3+</sup>. They act as
          <strong> Lewis acids</strong>.
        </p>
      </ConceptCard>

      <ConceptCard title="Ligands and denticity" icon="🔗">
        <ul>
          <li><strong>Unidentate</strong> — binds through a single donor atom (Cl<sup>−</sup>, H<sub>2</sub>O, NH<sub>3</sub>).</li>
          <li><strong>Didentate</strong> — binds through two donor atoms (ethane-1,2-diamine en, oxalate C<sub>2</sub>O<sub>4</sub><sup>2−</sup>).</li>
          <li><strong>Polydentate</strong> — several donor atoms in one ligand (N(CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub>)<sub>3</sub>).</li>
          <li><strong>Hexadentate</strong> — EDTA<sup>4−</sup> binds through two N and four O atoms.</li>
          <li><strong>Chelate</strong> — a di- or polydentate ligand using two or more donor atoms simultaneously for one metal ion; the number of ligating groups is the <em>denticity</em>. Chelate complexes are more stable than similar unidentate complexes.</li>
          <li><strong>Ambidentate</strong> — two different donor atoms, either of which can bind: NO<sub>2</sub><sup>−</sup> (through N or O) and SCN<sup>−</sup> (through S or N).</li>
        </ul>
      </ConceptCard>

      <MoleculeStructure {...STRUCTURES.edta} />

      <Callout type="important" title="Coordination number (CN)">
        The number of <strong>ligand donor atoms</strong> to which the metal is directly bonded.
        In [PtCl<sub>6</sub>]<sup>2−</sup> CN = 6; in [Ni(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>
        CN = 4. Both [Fe(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3−</sup> and
        [Co(en)<sub>3</sub>]<sup>3+</sup> have CN = 6 because the ligands are didentate.
      </Callout>

      <FactCard
        title="Only sigma bonds count"
        definition="The coordination number is determined only by the number of sigma bonds formed by the ligand with the central atom/ion. Pi bonds, if formed, are not counted."
        icon="Σ"
      />

      <ul>
        <li><strong>Coordination sphere</strong> — the central atom/ion plus attached ligands, enclosed in square brackets. Ionisable groups outside are the counter ions: in K<sub>4</sub>[Fe(CN)<sub>6</sub>] the sphere is [Fe(CN)<sub>6</sub>]<sup>4−</sup> and the counter ion is K<sup>+</sup>.</li>
        <li><strong>Coordination polyhedron</strong> — the spatial arrangement of ligand atoms directly attached to the central atom. Common ones: octahedral, square planar, tetrahedral.</li>
        <li><strong>Oxidation number</strong> — the charge the central atom would carry if all ligands were removed along with the shared electron pairs. Written as a Roman numeral in parentheses: copper in [Cu(CN)<sub>4</sub>]<sup>3−</sup> is Cu(I).</li>
        <li><strong>Homoleptic</strong> — one kind of donor group, e.g. [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>. <strong>Heteroleptic</strong> — more than one kind, e.g. [Co(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]<sup>+</sup>.</li>
      </ul>

      <h2 id="h-5-3">5.3 Nomenclature of Coordination Compounds</h2>

      <h3 id="h-5-3-1">5.3.1 Formulas of Mononuclear Coordination Entities</h3>

      <ul>
        <li>The central atom is listed first.</li>
        <li>Ligands are then listed in <strong>alphabetical order</strong>; the placement does not depend on charge.</li>
        <li>Polydentate ligands are also listed alphabetically; for abbreviated ligands the first letter of the abbreviation decides the position.</li>
        <li>The entire entity is enclosed in square brackets; polyatomic ligands and abbreviations go in parentheses.</li>
        <li>No space between ligands and metal inside the sphere.</li>
        <li>Charge is shown outside the brackets as a right superscript, number before sign: [Co(CN)<sub>6</sub>]<sup>3−</sup>, [Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>.</li>
        <li>The charge of the cation(s) balances the charge of the anion(s).</li>
      </ul>

      <h3 id="h-5-3-2">5.3.2 Naming of Mononuclear Coordination Compounds</h3>

      <ul>
        <li>The cation is named first.</li>
        <li>Ligands are named alphabetically <em>before</em> the central atom — the reverse of formula order.</li>
        <li>Anionic ligand names end in <strong>-o</strong>; neutral and cationic ligands keep their names, except <strong>aqua</strong> (H<sub>2</sub>O), <strong>ammine</strong> (NH<sub>3</sub>), <strong>carbonyl</strong> (CO) and <strong>nitrosyl</strong> (NO).</li>
        <li>Prefixes mono, di, tri indicate the number of each ligand. If the ligand name itself has a numerical prefix, use bis, tris, tetrakis with the ligand in parentheses — e.g. [NiCl<sub>2</sub>(PPh<sub>3</sub>)<sub>2</sub>] is dichloridobis(triphenylphosphine)nickel(II).</li>
        <li>The oxidation state of the metal is a Roman numeral in parentheses.</li>
        <li>In a complex <strong>cation</strong> the metal keeps its element name; in a complex <strong>anion</strong> the name ends in <strong>-ate</strong> (cobaltate), with Latin names for some metals (ferrate for Fe).</li>
        <li>A neutral complex molecule is named like a complex cation.</li>
      </ul>

      <Callout type="note">
        The 2004 IUPAC draft recommends sorting ligands alphabetically irrespective of charge, and
        ending anionic ligand names in <em>-ido</em> (chloro → chlorido). Current NCERT usage follows
        the <em>-o</em> form.
      </Callout>

      <TableCard
        title="Naming worked example by example"
        headers={["Formula", "Name"]}
        rows={[
          { cells: ["[Cr(NH₃)₃(H₂O)₃]Cl₃", "triamminetriaquachromium(III) chloride"] },
          { cells: ["[Co(H₂NCH₂CH₂NH₂)₃]₂(SO₄)₃", "tris(ethane-1,2-diamine)cobalt(III) sulphate"] },
          { cells: ["[Ag(NH₃)₂][Ag(CN)₂]", "diamminesilver(I) dicyanidoargentate(I)"] },
        ]}
      />

      <Expandable title="Example 5.2 — Write formulas from names" variant="example">
        <p><strong>Question:</strong> Write formulas for (a) tetraammineaquachloridocobalt(III) chloride (b) potassium tetrahydroxidozincate(II) (c) potassium trioxalatoaluminate(III) (d) dichloridobis(ethane-1,2-diamine)cobalt(III) (e) tetracarbonylnickel(0).</p>
        <p><strong>Solution:</strong></p>
        <ul>
          <li>(a) [Co(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)Cl]Cl<sub>2</sub></li>
          <li>(b) K<sub>2</sub>[Zn(OH)<sub>4</sub>]</li>
          <li>(c) K<sub>3</sub>[Al(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]</li>
          <li>(d) [CoCl<sub>2</sub>(en)<sub>2</sub>]<sup>+</sup></li>
          <li>(e) [Ni(CO)<sub>4</sub>]</li>
        </ul>
      </Expandable>

      <Expandable title="Example 5.3 — Write IUPAC names from formulas" variant="example">
        <p><strong>Question:</strong> Name (a) [Pt(NH<sub>3</sub>)<sub>2</sub>Cl(NO<sub>2</sub>)] (b) K<sub>3</sub>[Cr(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>] (c) [CoCl<sub>2</sub>(en)<sub>2</sub>]Cl (d) [Co(NH<sub>3</sub>)<sub>5</sub>(CO<sub>3</sub>)]Cl (e) Hg[Co(SCN)<sub>4</sub>].</p>
        <p><strong>Solution:</strong></p>
        <ul>
          <li>(a) diamminechloridonitrito-N-platinum(II)</li>
          <li>(b) potassium trioxalatochromate(III)</li>
          <li>(c) dichloridobis(ethane-1,2-diamine)cobalt(III) chloride</li>
          <li>(d) pentaamminecarbonatocobalt(III) chloride</li>
          <li>(e) mercury(I) tetrathiocyanato-S-cobaltate(III)</li>
        </ul>
      </Expandable>

      <h2 id="h-5-4">5.4 Isomerism in Coordination Compounds</h2>

      <p>
        Isomers have the same chemical formula but a different arrangement of atoms, and hence differ
        in one or more physical or chemical properties.
      </p>

      <TableCard
        title="Types of isomerism"
        headers={["Stereoisomerism (same bonds, different spatial arrangement)", "Structural isomerism (different bonds)"]}
        rows={[
          { cells: ["Geometrical isomerism", "Linkage isomerism"] },
          { cells: ["Optical isomerism", "Coordination isomerism"] },
          { cells: ["", "Ionisation isomerism"] },
          { cells: ["", "Solvate isomerism"] },
        ]}
      />

      <h3 id="h-5-4-1">5.4.1 Geometric Isomerism</h3>

      <ul>
        <li>Arises in heteroleptic complexes from different possible geometric arrangements of ligands; important for coordination numbers 4 and 6.</li>
        <li>Square planar [MX<sub>2</sub>L<sub>2</sub>]: the two X ligands may be adjacent (<strong>cis</strong>) or opposite (<strong>trans</strong>).</li>
        <li>Square planar MABXL gives three isomers — two cis and one trans.</li>
        <li>Not possible for tetrahedral geometry.</li>
        <li>Octahedral [MX<sub>2</sub>L<sub>4</sub>]: the two X ligands may be cis or trans.</li>
        <li>Also arises with didentate ligands in [MX<sub>2</sub>(L–L)<sub>2</sub>].</li>
        <li>Octahedral [Ma<sub>3</sub>b<sub>3</sub>]: <strong>facial (fac)</strong> when the three donor atoms of the same ligand occupy adjacent corners of an octahedral face; <strong>meridional (mer)</strong> when they lie around the meridian.</li>
      </ul>

      <Expandable title="Example 5.4 — Why no geometrical isomerism in tetrahedral complexes?" variant="example">
        <p>
          <strong>Solution:</strong> Tetrahedral complexes do not show geometrical isomerism because
          the relative positions of the unidentate ligands attached to the central metal atom are the
          same with respect to each other.
        </p>
      </Expandable>

      <h3 id="h-5-4-2">5.4.2 Optical Isomerism</h3>

      <p>
        Optical isomers are mirror images that cannot be superimposed on one another —
        <strong>enantiomers</strong>. The molecules or ions that cannot be superimposed are
        <strong>chiral</strong>. The two forms are called <strong>dextro (d)</strong> and
        <strong>laevo (l)</strong> according to the direction in which they rotate the plane of
        polarised light (<em>d</em> rotates to the right, <em>l</em> to the left).
      </p>

      <ul>
        <li>Optical isomerism is common in octahedral complexes involving didentate ligands, e.g. [Co(en)<sub>3</sub>]<sup>3+</sup>.</li>
        <li>In [PtCl<sub>2</sub>(en)<sub>2</sub>]<sup>2+</sup>, only the <strong>cis</strong> isomer shows optical activity.</li>
      </ul>

      <Expandable title="Example 5.5 — Which is chiral: cis- or trans-[CrCl₂(ox)₂]³⁻?" variant="example">
        <p>
          <strong>Solution:</strong> Of the two, <strong>cis-[CrCl<sub>2</sub>(ox)<sub>2</sub>]<sup>3−</sup></strong>
          is chiral (optically active). The trans isomer has a plane of symmetry.
        </p>
      </Expandable>

      <h3 id="h-5-4-3">5.4.3 Linkage Isomerism</h3>

      <p>
        Arises in a compound containing an <strong>ambidentate ligand</strong>. The thiocyanate
        ligand NCS<sup>−</sup> may bind through nitrogen (M–NCS) or through sulphur (M–SCN).
        Jørgensen discovered this in [Co(NH<sub>3</sub>)<sub>5</sub>(NO<sub>2</sub>)]Cl<sub>2</sub>:
        the red form has nitrite bound through oxygen (–ONO), the yellow form through nitrogen (–NO<sub>2</sub>).
      </p>

      <h3 id="h-5-4-4">5.4.4 Coordination Isomerism</h3>

      <p>
        Arises from interchange of ligands between cationic and anionic entities of different metal
        ions. Example: [Co(NH<sub>3</sub>)<sub>6</sub>][Cr(CN)<sub>6</sub>] and its coordination
        isomer [Cr(NH<sub>3</sub>)<sub>6</sub>][Co(CN)<sub>6</sub>].
      </p>

      <h3 id="h-5-4-5">5.4.5 Ionisation Isomerism</h3>

      <p>
        Arises when the counter ion is itself a potential ligand and can displace a ligand that then
        becomes the counter ion: [Co(NH<sub>3</sub>)<sub>5</sub>(SO<sub>4</sub>)]Br and
        [Co(NH<sub>3</sub>)<sub>5</sub>Br]SO<sub>4</sub>.
      </p>

      <h3 id="h-5-4-6">5.4.6 Solvate Isomerism</h3>

      <p>
        Also called <strong>hydrate isomerism</strong> when water is the solvent. Solvate isomers
        differ in whether a solvent molecule is directly bonded to the metal or merely present as free
        solvent in the crystal lattice: [Cr(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>3</sub> (violet) and
        [Cr(H<sub>2</sub>O)<sub>5</sub>Cl]Cl<sub>2</sub>·H<sub>2</sub>O (grey-green).
      </p>

      <h2 id="h-5-5">5.5 Bonding in Coordination Compounds</h2>

      <p>
        Werner&apos;s theory could not answer why only certain elements form complexes, why the bonds
        are directional, or why the compounds have characteristic magnetic and optical properties.
        The main approaches are Valence Bond Theory (VBT), Crystal Field Theory (CFT), Ligand Field
        Theory (LFT) and Molecular Orbital Theory (MOT).
      </p>

      <h3 id="h-5-5-1">5.5.1 Valence Bond Theory</h3>

      <p>
        The metal atom or ion uses its (n−1)d, ns, np — or ns, np, nd — orbitals for hybridisation,
        giving equivalent orbitals of definite geometry. These hybridised orbitals overlap with
        ligand orbitals that donate electron pairs.
      </p>

      <TableCard
        caption="Table 5.2: Number of Orbitals and Types of Hybridisations"
        headers={["Coordination number", "Type of hybridisation", "Distribution of hybrid orbitals in space"]}
        rows={[
          { cells: ["4", "sp³", "Tetrahedral"] },
          { cells: ["4", "dsp²", "Square planar"] },
          { cells: ["5", "sp³d", "Trigonal bipyramidal"] },
          { cells: ["6", "sp³d²", "Octahedral"] },
          { cells: ["6", "d²sp³", "Octahedral"] },
        ]}
      />

      <Comparison
        columns={[
          {
            title: "[Co(NH₃)₆]³⁺ — inner orbital, diamagnetic",
            children: (
              <ul>
                <li>Co is +3 with 3d⁶.</li>
                <li>The 3d electrons pair up, leaving two 3d orbitals free.</li>
                <li>Hybridisation is <strong>d²sp³</strong> — inner d orbital used.</li>
                <li>Six electron pairs from six NH₃ molecules occupy the hybrid orbitals.</li>
                <li>Octahedral; no unpaired electron → <strong>low spin / spin paired</strong>.</li>
              </ul>
            ),
          },
          {
            title: "[CoF₆]³⁻ — outer orbital, paramagnetic",
            children: (
              <ul>
                <li>Co is +3 with 3d⁶; F⁻ is a weak ligand and does not pair the electrons.</li>
                <li>Hybridisation is <strong>sp³d²</strong> — outer 4d orbital used.</li>
                <li>Octahedral; unpaired electrons remain → <strong>high spin / spin free</strong>.</li>
              </ul>
            ),
          },
        ]}
      />

      <ul>
        <li>[NiCl<sub>4</sub>]<sup>2−</sup>: Ni is +2, 3d<sup>8</sup>; one s and three p orbitals hybridise (sp<sup>3</sup>) → tetrahedral, paramagnetic with two unpaired electrons.</li>
        <li>[Ni(CO)<sub>4</sub>]: nickel is in zero oxidation state, tetrahedral, diamagnetic — no unpaired electrons.</li>
        <li>[Ni(CN)<sub>4</sub>]<sup>2−</sup>: Ni is +2, 3d<sup>8</sup>; hybridisation is <strong>dsp²</strong> → square planar; each hybrid orbital receives a pair from a cyanide ion, so it is diamagnetic.</li>
      </ul>

      <Callout type="note">
        Hybrid orbitals do not actually exist. Hybridisation is a mathematical manipulation of the
        wave equation for the atomic orbitals involved.
      </Callout>

      <h3 id="h-5-5-2">5.5.2 Magnetic Properties of Coordination Compounds</h3>

      <p>
        Magnetic susceptibility measurements give the number of unpaired electrons and hence the
        structure. The magnetic moment follows the spin-only formula.
      </p>

      <FormulaBlock latex={String.raw`\mu = \sqrt{n(n+2)}\ \text{BM}`} important />

      <ul>
        <li>For ions with up to three d electrons — Ti<sup>3+</sup> (d<sup>1</sup>), V<sup>3+</sup> (d<sup>2</sup>), Cr<sup>3+</sup> (d<sup>3</sup>) — two vacant d orbitals are available for octahedral hybridisation, so the magnetic behaviour matches the free ion.</li>
        <li>With more than three 3d electrons the required pair of 3d orbitals is not directly available (Hund&apos;s rule).</li>
        <li>For d<sup>4</sup> (Cr<sup>2+</sup>, Mn<sup>3+</sup>), d<sup>5</sup> (Mn<sup>2+</sup>, Fe<sup>3+</sup>) and d<sup>6</sup> (Fe<sup>2+</sup>, Co<sup>3+</sup>), a vacant pair of d orbitals results only by pairing, leaving two, one and zero unpaired electrons respectively.</li>
      </ul>

      <TableCard
        title="Inner vs outer orbital complexes — the evidence"
        headers={["Complex", "Unpaired electrons", "Orbital type", "Hybridisation"]}
        rows={[
          { cells: ["[Mn(CN)₆]³⁻", "2", "inner", "d²sp³"] },
          { cells: ["[Fe(CN)₆]³⁻", "1", "inner", "d²sp³"] },
          { cells: ["[Co(C₂O₄)₃]³⁻", "0", "inner", "d²sp³"] },
          { cells: ["[MnCl₆]³⁻", "4", "outer", "sp³d²"] },
          { cells: ["[FeF₆]³⁻", "5", "outer", "sp³d²"] },
          { cells: ["[CoF₆]³⁻", "4", "outer", "sp³d²"] },
        ]}
      />

      <Expandable title="Example 5.7 — Geometry of [MnBr₄]²⁻ from its magnetic moment" variant="example">
        <p>
          <strong>Question:</strong> The spin-only magnetic moment of [MnBr<sub>4</sub>]<sup>2−</sup>
          is 5.9 BM. Predict the geometry of the complex ion.
        </p>
        <p>
          <strong>Solution:</strong> The coordination number of Mn<sup>2+</sup> is 4, so the ion is
          either tetrahedral (sp<sup>3</sup>) or square planar (dsp<sup>2</sup>). A moment of 5.9 BM
          corresponds to five unpaired electrons, which is possible only in the tetrahedral case —
          dsp<sup>2</sup> would force pairing and leave fewer unpaired electrons.
        </p>
      </Expandable>

      <h3 id="h-5-5-3">5.5.3 Limitations of Valence Bond Theory</h3>

      <ul>
        <li>It involves a number of assumptions.</li>
        <li>It does not give a quantitative interpretation of magnetic data.</li>
        <li>It does not explain the colour of coordination compounds.</li>
        <li>It does not quantitatively interpret thermodynamic or kinetic stabilities.</li>
        <li>It does not make exact predictions regarding tetrahedral and square planar structures of 4-coordinate complexes.</li>
        <li>It does not distinguish between weak and strong ligands.</li>
      </ul>

      <h3 id="h-5-5-4">5.5.4 Crystal Field Theory</h3>

      <p>
        CFT is an <strong>electrostatic model</strong>: the metal–ligand bond is ionic, arising from
        electrostatic interaction between the metal ion and the ligand. Ligands are point charges
        (anions) or point dipoles (neutral molecules).
      </p>

      <p>
        The five d orbitals of an isolated gaseous metal ion are degenerate. A spherically symmetrical
        field keeps them degenerate, but a ligand field is asymmetrical — the degeneracy is lifted and
        the d orbitals split. The pattern depends on the geometry.
      </p>

      <Callout type="important" title="Splitting in an octahedral field">
        The d<sub>x²−y²</sub> and d<sub>z²</sub> orbitals point towards the ligands, so they
        experience more repulsion and are raised in energy — the <strong>e<sub>g</sub></strong> set.
        The d<sub>xy</sub>, d<sub>yz</sub> and d<sub>xz</sub> orbitals point between the axes and are
        lowered — the <strong>t<sub>2g</sub></strong> set. The separation is
        <Formula>{String.raw`\Delta_o`}</Formula>; the e<sub>g</sub> orbitals rise by
        (3/5)Δ<sub>o</sub> and the t<sub>2g</sub> fall by (2/5)Δ<sub>o</sub>.
      </Callout>

      <FormulaBlock
        latex={String.raw`\text{I}^- < \text{Br}^- < \text{SCN}^- < \text{Cl}^- < \text{S}^{2-} < \text{F}^- < \text{OH}^- < \text{C}_2\text{O}_4^{2-} < \text{H}_2\text{O} < \text{NCS}^- < \text{edta}^{4-} < \text{NH}_3 < \text{en} < \text{CN}^- < \text{CO}`}
        label="Spectrochemical series (increasing field strength)"
      />

      <p>
        This is an experimentally determined series based on the absorption of light by complexes with
        different ligands. Larger splitting is produced by strong-field ligands.
      </p>

      <TableCard
        title="Filling the d orbitals — Δₒ versus pairing energy P"
        headers={["Condition", "Configuration", "Ligand type", "Spin"]}
        rows={[
          { cells: ["Δₒ < P", "t₂g³ e_g¹", "weak field", "high spin"] },
          { cells: ["Δₒ > P", "t₂g⁴ e_g⁰", "strong field", "low spin"] },
        ]}
      />

      <p>
        Calculations show that d<sup>4</sup> to d<sup>7</sup> coordination entities are more stable
        for strong fields than for weak fields.
      </p>

      <Callout type="note" title="Tetrahedral splitting">
        In tetrahedral entities the splitting is <strong>inverted</strong> and smaller:
        <Formula>{String.raw`\Delta_t = \tfrac{4}{9}\Delta_o`}</Formula>. The splitting is not large
        enough to force pairing, so low-spin tetrahedral configurations are rarely observed. The
        subscript <em>g</em> is used only for octahedral and square planar complexes, which have a
        centre of symmetry.
      </Callout>

      <h3 id="h-5-5-5">5.5.5 Colour in Coordination Compounds</h3>

      <p>
        The colour of a complex is <strong>complementary</strong> to the light absorbed: if green
        light is absorbed, the complex looks red. CFT attributes the colour to
        <strong>d–d transitions</strong>.
      </p>

      <TableCard
        caption="Table 5.3: Relationship between the Wavelength of Light absorbed and the Colour observed"
        headers={["Coordination entity", "λ absorbed (nm)", "Colour absorbed", "Colour observed"]}
        rows={[
          { cells: ["[CoCl(NH₃)₅]²⁺", "535", "Yellow", "Violet"] },
          { cells: ["[Co(NH₃)₅(H₂O)]³⁺", "500", "Blue green", "Red"] },
          { cells: ["[Co(NH₃)₆]³⁺", "475", "Blue", "Yellow orange"] },
          { cells: ["[Co(CN)₆]³⁻", "310", "Ultraviolet", "Pale yellow"] },
          { cells: ["[Cu(H₂O)₄]²⁺", "600", "Red", "Blue"] },
          { cells: ["[Ti(H₂O)₆]³⁺", "498", "Blue green", "Violet"] },
        ]}
      />

      <KeyPoint title="[Ti(H₂O)₆]³⁺ — the standard CFT example">
        <p>
          Ti<sup>3+</sup> is a 3d<sup>1</sup> system. The single electron sits in the t<sub>2g</sub>
          level. Absorption of blue-green light excites it to the empty e<sub>g</sub> level
          (t<sub>2g</sub><sup>1</sup>e<sub>g</sub><sup>0</sup> → t<sub>2g</sub><sup>0</sup>e<sub>g</sub><sup>1</sup>),
          so the complex appears violet.
        </p>
      </KeyPoint>

      <ul>
        <li>Without a ligand there is no crystal field splitting and no colour — removing water from [Ti(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>3</sub> on heating renders it colourless.</li>
        <li>Anhydrous CuSO<sub>4</sub> is white; CuSO<sub>4</sub>·5H<sub>2</sub>O is blue.</li>
        <li>Adding en to [Ni(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> changes the colour from green → pale blue → blue/purple → violet as water is replaced by en.</li>
      </ul>

      <Callout type="didyouknow" title="Colour of gem stones">
        Ruby is aluminium oxide containing about 0.5–1% Cr<sup>3+</sup> (d<sup>3</sup>) in
        octahedral sites; d–d transitions give the colour. In emerald, Cr<sup>3+</sup> occupies
        octahedral sites in beryl (Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>); the
        absorption bands shift to longer wavelength (yellow-red and blue), so emerald transmits green.
      </Callout>

      <h3 id="h-5-5-6">5.5.6 Limitations of Crystal Field Theory</h3>

      <ul>
        <li>If ligands were point charges, anionic ligands should exert the greatest splitting — but anions are found at the low end of the spectrochemical series.</li>
        <li>It does not take into account the <strong>covalent character</strong> of the metal–ligand bond.</li>
        <li>These weaknesses are addressed by ligand field theory and molecular orbital theory.</li>
      </ul>

      <h2 id="h-5-6">5.6 Bonding in Metal Carbonyls</h2>

      <p>
        Homoleptic carbonyls contain only carbonyl ligands and are formed by most transition metals.
        They have simple, well-defined structures.
      </p>

      <TableCard
        title="Structures of representative homoleptic metal carbonyls"
        headers={["Carbonyl", "Structure"]}
        rows={[
          { cells: ["Ni(CO)₄", "Tetrahedral"] },
          { cells: ["Fe(CO)₅", "Trigonal bipyramidal"] },
          { cells: ["Cr(CO)₆", "Octahedral"] },
          { cells: ["Mn₂(CO)₁₀", "Two square pyramidal Mn(CO)₅ units joined by a Mn–Mn bond"] },
          { cells: ["Co₂(CO)₈", "Co–Co bond bridged by two CO groups"] },
        ]}
      />

      <KeyPoint title="Synergic bonding in metal carbonyls">
        <p>The M–C bond has both σ and π character.</p>
        <ul>
          <li><strong>σ bond:</strong> donation of the lone pair on the carbonyl carbon into a vacant orbital of the metal (ligand → metal).</li>
          <li><strong>π bond:</strong> donation of a pair of electrons from a filled d orbital of the metal into the vacant antibonding π* orbital of CO (metal → ligand).</li>
          <li>This metal-to-ligand back donation is the <strong>synergic effect</strong>; it strengthens the metal–carbon bond.</li>
        </ul>
      </KeyPoint>

      <h2 id="h-5-7">5.7 Importance and Applications of Coordination Compounds</h2>

      <ul>
        <li><strong>Analytical chemistry</strong> — colour reactions with chelating ligands (EDTA, DMG, α-nitroso-β-naphthol, cupron) allow detection and estimation of metal ions.</li>
        <li><strong>Water hardness</strong> — estimated by titration with Na<sub>2</sub>EDTA; Ca<sup>2+</sup> and Mg<sup>2+</sup> form stable complexes, and their stability constants differ, allowing selective estimation.</li>
        <li><strong>Extraction of metals</strong> — gold combines with cyanide in the presence of oxygen and water to form [Au(CN)<sub>2</sub>]<sup>−</sup>; metallic gold is recovered by adding zinc.</li>
        <li><strong>Purification of metals</strong> — impure nickel is converted to [Ni(CO)<sub>4</sub>], which is then decomposed to pure nickel.</li>
        <li><strong>Biological systems</strong> — chlorophyll (Mg), haemoglobin (Fe), vitamin B<sub>12</sub> (Co), and enzymes such as carboxypeptidase A and carbonic anhydrase.</li>
        <li><strong>Catalysis</strong> — Wilkinson catalyst [(Ph<sub>3</sub>P)<sub>3</sub>RhCl] hydrogenates alkenes.</li>
        <li><strong>Electroplating</strong> — silver and gold plate more smoothly from [Ag(CN)<sub>2</sub>]<sup>−</sup> and [Au(CN)<sub>2</sub>]<sup>−</sup> than from simple metal ions.</li>
        <li><strong>Photography</strong> — hypo dissolves undecomposed AgBr as [Ag(S<sub>2</sub>O<sub>3</sub>)<sub>2</sub>]<sup>3−</sup>.</li>
        <li><strong>Chelate therapy</strong> — D-penicillamine and desferrioxime B remove excess copper and iron; EDTA treats lead poisoning; cis-platin inhibits tumour growth.</li>
      </ul>

      <MistakeCard
        mistake="Counting charge in the name but forgetting it in the formula (or vice versa)."
        correction="Overall charge must be neutral: [Co(NH₃)₄(H₂O)Cl]Cl₂ has a +1 complex ion because two Cl⁻ are outside."
        example="tetraammineaquachloridocobalt(III) chloride → [Co(NH₃)₄(H₂O)Cl]Cl₂"
      />

      <h2 id="h-5-exercises">Exercises</h2>

      <ExerciseQa
        answersHeading="NCERT Exercise Questions (5.1–5.31)"
        questions={[
          <>Explain the bonding in coordination compounds in terms of Werner&apos;s postulates.</>,
          <>FeSO<sub>4</sub> solution mixed with (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> solution in 1:1 molar ratio gives the test of Fe<sup>2+</sup> ion but CuSO<sub>4</sub> solution mixed with aqueous ammonia in 1:4 molar ratio does not give the test of Cu<sup>2+</sup> ion. Explain why?</>,
          <>Explain with two examples each of the following: coordination entity, ligand, coordination number, coordination polyhedron, homoleptic and heteroleptic.</>,
          <>What is meant by unidentate, didentate and ambidentate ligands? Give two examples for each.</>,
          <>Specify the oxidation numbers of the metals in the following coordination entities: (i) [Co(H<sub>2</sub>O)(CN)(en)<sub>2</sub>]<sup>2+</sup> (ii) [CoBr<sub>2</sub>(en)<sub>2</sub>]<sup>+</sup> (iii) [PtCl<sub>4</sub>]<sup>2−</sup> (iv) K<sub>3</sub>[Fe(CN)<sub>6</sub>] (v) [Cr(NH<sub>3</sub>)<sub>3</sub>Cl<sub>3</sub>].</>,
          <>Using IUPAC norms write the formulas for the following: (i) tetrahydroxidozincate(II) (ii) potassium tetrachloridopalladate(II) (iii) diamminedichloridoplatinum(II) (iv) potassium tetracyanidonickelate(II) (v) pentaamminenitrito-O-cobalt(III) (vi) hexaamminecobalt(III) sulphate (vii) potassium tri(oxalato)chromate(III) (viii) hexaammineplatinum(IV) (ix) tetrabromidocuprate(II) (x) pentaamminenitrito-N-cobalt(III).</>,
          <>Using IUPAC norms write the systematic names of the following: (i) [Co(NH<sub>3</sub>)<sub>6</sub>]Cl<sub>3</sub> (ii) [Pt(NH<sub>3</sub>)<sub>2</sub>Cl(NH<sub>2</sub>CH<sub>3</sub>)]Cl (iii) [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> (iv) [Co(NH<sub>3</sub>)<sub>4</sub>Cl(NO<sub>2</sub>)]Cl (v) [Mn(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> (vi) [NiCl<sub>4</sub>]<sup>2−</sup> (vii) [Ni(NH<sub>3</sub>)<sub>6</sub>]Cl<sub>2</sub> (viii) [Co(en)<sub>3</sub>]<sup>3+</sup> (ix) [Ni(CO)<sub>4</sub>].</>,
          <>List various types of isomerism possible for coordination compounds, giving an example of each.</>,
          <>How many geometrical isomers are possible in the following coordination entities? (i) [Cr(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3−</sup> (ii) [Co(NH<sub>3</sub>)<sub>3</sub>Cl<sub>3</sub>].</>,
          <>Draw the structures of optical isomers of: (i) [Cr(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3−</sup> (ii) [PtCl<sub>2</sub>(en)<sub>2</sub>]<sup>2+</sup> (iii) [Cr(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>(en)]<sup>+</sup>.</>,
          <>Draw all the isomers (geometrical and optical) of: (i) [CoCl<sub>2</sub>(en)<sub>2</sub>]<sup>+</sup> (ii) [Co(NH<sub>3</sub>)Cl(en)<sub>2</sub>]<sup>2+</sup> (iii) [Co(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>(en)]<sup>+</sup>.</>,
          <>Write all the geometrical isomers of [Pt(NH<sub>3</sub>)(Br)(Cl)(py)] and how many of these will exhibit optical isomers?</>,
          <>Aqueous copper sulphate solution (blue in colour) gives: (i) a green precipitate with aqueous potassium fluoride and (ii) a bright green solution with aqueous potassium chloride. Explain these experimental results.</>,
          <>What is the coordination entity formed when excess of aqueous KCN is added to an aqueous solution of copper sulphate? Why is it that no precipitate of copper sulphide is obtained when H<sub>2</sub>S(g) is passed through this solution?</>,
          <>Discuss the nature of bonding in the following coordination entities on the basis of valence bond theory: (i) [Fe(CN)<sub>6</sub>]<sup>4−</sup> (ii) [FeF<sub>6</sub>]<sup>3−</sup> (iii) [Co(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3−</sup> (iv) [CoF<sub>6</sub>]<sup>3−</sup>.</>,
          <>Draw figure to show the splitting of d orbitals in an octahedral crystal field.</>,
          <>What is spectrochemical series? Explain the difference between a weak field ligand and a strong field ligand.</>,
          <>What is crystal field splitting energy? How does the magnitude of Δ<sub>o</sub> decide the actual configuration of d orbitals in a coordination entity?</>,
          <>[Cr(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> is paramagnetic while [Ni(CN)<sub>4</sub>]<sup>2−</sup> is diamagnetic. Explain why?</>,
          <>A solution of [Ni(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> is green but a solution of [Ni(CN)<sub>4</sub>]<sup>2−</sup> is colourless. Explain.</>,
          <>[Fe(CN)<sub>6</sub>]<sup>4−</sup> and [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> are of different colours in dilute solutions. Why?</>,
          <>Discuss the nature of bonding in metal carbonyls.</>,
          <>Give the oxidation state, d orbital occupation and coordination number of the central metal ion in the following complexes: (i) K<sub>3</sub>[Co(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>] (ii) cis-[CrCl<sub>2</sub>(en)<sub>2</sub>]Cl (iii) (NH<sub>4</sub>)<sub>2</sub>[CoF<sub>4</sub>] (iv) [Mn(H<sub>2</sub>O)<sub>6</sub>]SO<sub>4</sub>.</>,
          <>Write down the IUPAC name for each of the following complexes and indicate the oxidation state, electronic configuration and coordination number. Also give stereochemistry and magnetic moment of the complex: (i) K[Cr(H<sub>2</sub>O)<sub>2</sub>(C<sub>2</sub>O<sub>4</sub>)<sub>2</sub>]·3H<sub>2</sub>O (ii) [Co(NH<sub>3</sub>)<sub>5</sub>Cl]Cl<sub>2</sub> (iii) [CrCl<sub>3</sub>(py)<sub>3</sub>] (iv) Cs[FeCl<sub>4</sub>] (v) K<sub>4</sub>[Mn(CN)<sub>6</sub>].</>,
          <>Explain the violet colour of the complex [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> on the basis of crystal field theory.</>,
          <>What is meant by the chelate effect? Give an example.</>,
          <>Discuss briefly giving an example in each case the role of coordination compounds in: (i) biological systems (ii) medicinal chemistry (iii) analytical chemistry (iv) extraction/metallurgy of metals.</>,
          <>How many ions are produced from the complex Co(NH<sub>3</sub>)<sub>6</sub>Cl<sub>2</sub> in solution? (i) 6 (ii) 4 (iii) 3 (iv) 2.</>,
          <>Amongst the following ions which one has the highest magnetic moment value? (i) [Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> (ii) [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> (iii) [Zn(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>.</>,
          <>Amongst the following, the most stable complex is (i) [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> (ii) [Fe(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> (iii) [Fe(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3−</sup> (iv) [FeCl<sub>6</sub>]<sup>3−</sup>.</>,
          <>What will be the correct order for the wavelengths of absorption in the visible region for the following: [Ni(NO<sub>2</sub>)<sub>6</sub>]<sup>4−</sup>, [Ni(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup>, [Ni(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>?</>,
        ]}
      />
    </>
  );
}
