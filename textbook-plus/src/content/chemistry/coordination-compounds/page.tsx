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
import { PocketGrid } from "@/components/content/PocketGrid";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";

export default function CoordinationCompoundsChapter() {
  return (
    <>
      <h2 id="h-5-intro">Introduction: Coordination Compounds</h2>

      <TableCard
        caption="a. 🔑 Key Terms at a Glance"
        headers={["Term", "Definition"]}
        rows={[
          { cells: ["Coordination compound", "Compound containing a central metal atom/ion bonded to ligands."] },
          { cells: ["Coordinate bond", "Bond formed by donation of a ligand's lone electron pair to the metal: M ← L."] },
          { cells: ["Coordination entity", "Central metal + its directly attached ligands."] },
          { cells: ["Central atom / ion", "Metal atom/ion to which ligands are attached."] },
          { cells: ["Ligand", "Ion/molecule donating one or more electron pairs to the metal."] },
          { cells: ["Donor atom", "Ligand atom directly bonded to the metal."] },
          { cells: ["Denticity", "Number of donor atoms through which a ligand binds." ] },
          { cells: ["Coordination number (CN)", "Total number of ligand donor atoms directly bonded to the central metal."] },
        ]}
      />

        <PocketGrid columns={1} title="Introduction – Coordination Compounds" items={[
    {
      id: "h-5-intro-entity",
      icon: "📦",
      label: "1️⃣ Coordination Entity & Coordination Sphere",
      note: "Entity, sphere, counter‑ions",
      content: (
        <>
          <h3>b. 📦 Coordination Entity &amp; Coordination Sphere</h3>
          <ul>
            <li>Coordination entity: metal atom/ion bonded to a fixed number of ligands.</li>
            <li>Coordination sphere: central metal + attached ligands enclosed in square brackets [ ].</li>
            <li>Counter ions: ionisable ions outside the brackets.</li>
          </ul>
          <p>Example: K₄[Fe(CN)₆].</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Coordination sphere → [Fe(CN)₆]⁴⁻</li>
            <li>Counter ions → 4K⁺</li>
            <li>Central metal → Fe</li>
            <li>Ligand → CN⁻</li>
          </ul>
          <p>Examples of coordination entities:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>[CoCl₃(NH₃)₃]</li>
            <li>[Ni(CO)₄]</li>
            <li>[PtCl₂(NH₃)₂]</li>
            <li>[Fe(CN)₆]⁴⁻</li>
            <li>[Co(NH₃)₆]³+</li>
          </ul>
        </>
      ),
    },
    {
      id: "h-5-intro-central",
      icon: "⚛️",
      label: "2️⃣ Central Atom / Ion",
      note: "Representative central ions",
      content: (
        <>
          <h3>c. ⚛️ Central Atom / Ion</h3>
          <TableCard
            caption="Central ion in representative complexes"
            headers={["Complex", "Central ion"]}
            rows={[
              { cells: ["[NiCl₂(H₂O)₄]", "Ni²⁺"] },
              { cells: ["[CoCl(NH₃)₅]²⁺", "Co³⁺"] },
              { cells: ["[Fe(CN)₆]³⁻", "Fe³⁺"] },
            ]}
          />
          <ul>
            <li>Central metal: electron‑pair acceptor; acts as a Lewis acid.</li>
            <li>Ligand: electron‑pair donor; acts as a Lewis base.</li>
          </ul>
        </>
      ),
    },
    {
      id: "h-5-intro-ligands",
      icon: "🔗",
      label: "3️⃣ Ligands & Denticity",
      note: "Types, denticity, chelate effect",
      content: (
        <>
          <h3>d. 🔗 Ligands &amp; Denticity</h3>
          <TableCard
            caption="Ligand by denticity"
            headers={["Type", "Attachment", "Examples"]}
            rows={[
              { cells: ["Unidentate", "1 donor atom → 1 attachment", "Cl⁻, H₂O, NH₃, CN⁻, OH⁻"] },
              { cells: ["Didentate", "2 donor atoms → 2 attachments", "en (ethane-1,2-diamine), C₂O₄²⁻ (oxalate)"] },
              { cells: ["Polydentate", "≥3 donor atoms → ≥3 attachments", "EDTA⁴⁻ (hexadentate), N(CH₂CH₂NH₂)₃"] },
            ]}
          />
          <p className="mt-2">Important ligands:</p>
          <TableCard
            caption="Important ligands and their denticity"
            headers={["Ligand", "Formula", "Denticity"]}
            rows={[
              { cells: ["Chloride", "Cl⁻", "1"] },
              { cells: ["Water", "H₂O", "1"] },
              { cells: ["Ammonia", "NH₃", "1"] },
              { cells: ["Ethane-1,2-diamine (en)", "H₂NCH₂CH₂NH₂", "2"] },
              { cells: ["Oxalate", "C₂O₄²⁻", "2"] },
              { cells: ["EDTA", "EDTA⁴⁻", "6"] },
            ]}
          />
          <KeyPoint title="Chelate effect">
            <p>
              Chelation: di‑or polydentate ligands bind through two or more donor atoms to the same metal,
              forming ring complexes (chelates). Chelate complexes are more stable than complexes of
              comparable unidentate ligands.
            </p>
            <p className="mt-2 text-sm">
              Examples: C₂O₄²⁻ (oxalate), H₂NCH₂CH₂NH₂ (ethane‑1,2‑diamine).
            </p>
          </KeyPoint>
          <p>Ambidentate ligands (two donor atoms, coordinate through one at a time):</p>
          <TableCard
            caption="Ambidentate ligands"
            headers={["Ligand", "Donor atom", "Representation"]}
            rows={[
              { cells: ["Nitrite NO₂⁻", "N or O", "M–NO₂ / M–ONO"] },
              { cells: ["Thiocyanate SCN⁻", "S or N", "M–SCN / M–NCS"] },
            ]}
          />
        </>
      ),
    },
    {
      id: "h-5-intro-cn",
      icon: "🔢",
      label: "4️⃣ Coordination Number",
      note: "CN calculation examples",
      content: (
        <>
          <h3>e. 🔢 Coordination Number (CN)</h3>
          <TableCard
            caption="Coordination number examples"
            headers={["Complex", "Calculation", "CN"]}
            rows={[
              { cells: ["[PtCl₆]²⁻", "6 × 1", "6"] },
              { cells: ["[Ni(NH₃)₄]²⁺", "4 × 1", "4"] },
              { cells: ["[Fe(C₂O₄)₃]³⁻", "3 × 2", "6"] },
              { cells: ["[Co(en)₃]³⁺", "3 × 2", "6"] },
            ]}
          />
          <FormulaBlock latex={String.raw`CN = \sum(\text{Ligand count} \times \text{Denticity})`} />
          <p>CN counts donor atoms, not ligand molecules: 3 bidentate ligands → CN = 6; 6 monodentate ligands → CN = 6.</p>
        </>
      ),
    },
    {
      id: "h-5-intro-polyhedron",
      icon: "📐",
      label: "5️⃣ Coordination Polyhedron",
      note: "Octahedral, tetrahedral, square‑planar",
      content: (
        <>
          <h3>f. 📐 Coordination Polyhedron</h3>
          <p>Three‑dimensional geometrical arrangement of ligand donor atoms around the central metal.</p>
          <Comparison
            columns={[
              {
                title: "Octahedral (CN = 6)",
                children: (
                  <>
                    <svg viewBox="0 0 120 120" width="120" height="120" className="mx-auto" aria-label="Octahedral geometry">
                      <line x1="60" y1="60" x2="60" y2="12" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="60" y1="60" x2="60" y2="108" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="60" y1="60" x2="12" y2="60" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="60" y1="60" x2="108" y2="60" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="60" y1="60" x2="84" y2="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
                      <line x1="60" y1="60" x2="36" y2="84" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
                      <circle cx="60" cy="60" r="7" fill="currentColor" />
                      <text x="60" y="62" textAnchor="middle" fontSize="8" fill="white">M</text>
                      <circle cx="60" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="60" cy="108" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="108" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="84" cy="36" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="36" cy="84" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <p className="mt-2">Example: [Co(NH₃)₆]³⁺.</p>
                  </>
                ),
              },
              {
                title: "Tetrahedral (CN = 4)",
                children: (
                  <>
                    <svg viewBox="0 0 120 120" width="120" height="120" className="mx-auto" aria-label="Tetrahedral geometry">
                      <line x1="60" y1="60" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="60" y1="60" x2="88" y2="32" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="60" y1="60" x2="32" y2="88" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="60" y1="60" x2="88" y2="88" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
                      <circle cx="60" cy="60" r="7" fill="currentColor" />
                      <text x="60" y="62" textAnchor="middle" fontSize="8" fill="white">M</text>
                      <circle cx="32" cy="32" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="88" cy="32" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="32" cy="88" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="88" cy="88" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <p className="mt-2">Example: [Ni(CO)₄].</p>
                  </>
                ),
              },
              {
                title: "Square planar (CN = 4)",
                children: (
                  <>
                    <svg viewBox="0 0 120 120" width="120" height="120" className="mx-auto" aria-label="Square planar geometry">
                      <line x1="60" y1="60" x2="60" y2="18" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="60" y1="60" x2="60" y2="102" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="60" y1="60" x2="18" y2="60" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="60" y1="60" x2="102" y2="60" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="60" cy="60" r="7" fill="currentColor" />
                      <text x="60" y="62" textAnchor="middle" fontSize="8" fill="white" />
                      <circle cx="60" cy="18" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="60" cy="102" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="18" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="102" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <p className="mt-2">Example: [PtCl₄]²⁻.</p>
                  </>
                ),
              },
            ]}
          />
        </>
      ),
    },
    {
      id: "h-5-intro-oxidation",
      icon: "🏷️",
      label: "6️⃣ Oxidation Number",
      note: "Definition + worked examples",
      content: (
        <>
          <h3>g. 🏷️ Oxidation Number of Central Metal</h3>
          <p>Definition: the residual charge on the central metal atom/ion if all ligands are removed along with their shared electron pairs. Notation: a Roman numeral in parentheses, e.g. Fe(II), Ni(II).</p>
          <FormulaBlock latex={String.raw`x + \sum(\text{Ligand charges}) = \text{Complex charge}`} />
          <p>Example: [Cu(CN)₄]³⁻.</p>
          <FormulaBlock latex={String.raw`x + 4(-1) = -3 \;\Rightarrow\; x = +1`} />
          <p>Copper oxidation state = +1 → Cu(I).</p>
          <p className="mt-2 font-semibold">A. [Ni(NH₃)₄]²⁺</p>
          <FormulaBlock latex={String.raw`x + 4(0) = +2 \;\Rightarrow\; x = +2 \;\Rightarrow\; \text{Ni} = +2 \;(\text{Ni(II)})`} />
          <p className="mt-2 font-semibold">B. K₄[Fe(CN)₆]</p>
          <FormulaBlock latex={String.raw`4(+1) + x + 6(-1) = 0 \;\Rightarrow\; x - 2 = 0 \;\Rightarrow\; x = +2 \;\Rightarrow\; \text{Fe} = +2 \;(\text{Fe(II)})`} />
          <p className="mt-2 font-semibold">C. K₃[Fe(CN)₆]</p>
          <FormulaBlock latex={String.raw`3(+1) + x + 6(-1) = 0 \;\Rightarrow\; x - 3 = 0 \;\Rightarrow\; x = +3 \;\Rightarrow\; \text{Fe} = +3 \;(\text{Fe(III)})`} />
          <p className="mt-2 font-semibold">D. [Ni(CO)₄]</p>
          <FormulaBlock latex={String.raw`x + 4(0) = 0 \;\Rightarrow\; x = 0 \;\Rightarrow\; \text{Ni} = 0`} />
          <p className="mt-2 font-semibold">E. [Co(NH₃)₄Cl₂]⁺</p>
          <FormulaBlock latex={String.raw`x + 4(0) + 2(-1) = +1 \;\Rightarrow\; x - 2 = +1 \;\Rightarrow\; x = +3 \;\Rightarrow\; \text{Co} = +3 \;(\text{Co(III)})`} />
        </>
      ),
    },
    {
      id: "h-5-intro-homo-hetero",
      icon: "🔀",
      label: "7️⃣ Homoleptic vs Heteroleptic",
      note: "Category comparison",
      content: (
        <>
          <h3>h. 🔀 Homoleptic vs Heteroleptic</h3>
          <TableCard
            caption="Complex category (merged)"
            headers={["Category", "Definition", "Representative example"]}
            rows={[
              { cells: ["Homoleptic", "Metal bound to only one kind of donor group.", "[Co(NH₃)₆]³+ (bound solely to NH₃)."] },
              { cells: ["Heteroleptic", "Metal bound to more than one kind of donor group.", "[Co(NH₃)₄Cl₂]⁺ (bound to both NH₃ and Cl⁻)."] },
            ]}
          />
        </>
      ),
    },
    {
      id: "h-5-intro-double-complex",
      icon: "🧪",
      label: "8️⃣ Double vs Complex Salt",
      note: "Comparison of salt types",
      content: (
        <>
          <h3>i. 🧪 Double Salt vs. Complex Salt</h3>
          <Comparison
            columns={[
              {
                title: "Double salt",
                children: (
                  <ul>
                    <li>Keeps identity only in the solid state; dissociates completely in solution into simple ions.</li>
                    <li>Mohr&apos;s salt: FeSO₄·(NH₄)₂SO₄·6H₂O.</li>
                    <li>Carnallite: KCl·MgCl₂·6H₂O.</li>
                    <li>Potash alum: K₂SO₄·Al₂(SO₄)₃·24H₂O.</li>
                  </ul>
                ),
              },
              {
                title: "Complex salt",
                children: (
                  <ul>
                    <li>Keeps identity in both solid and solution states.</li>
                    <li>K₄[Fe(CN)₆], [Cu(NH₃)₄]SO₄, K₂[PtCl₄], [Ni(CO)₄].</li>
                  </ul>
                ),
              },
            ]}
          />
        </>
      ),
    },
  ]} />
{/*
<h3>b. 📦 Coordination Entity &amp; Coordination Sphere</h3>
      <ul>
        <li>Coordination entity: metal atom/ion bonded to a fixed number of ligands.</li>
        <li>Coordination sphere: central metal + attached ligands enclosed in square brackets [ ].</li>
        <li>Counter ions: ionisable ions outside the brackets.</li>
      </ul>
      <p>Example: K₄[Fe(CN)₆].</p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Coordination sphere → [Fe(CN)₆]⁴⁻</li>
        <li>Counter ions → 4K⁺</li>
        <li>Central metal → Fe</li>
        <li>Ligand → CN⁻</li>
      </ul>
      <p>Examples of coordination entities:</p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>[CoCl₃(NH₃)₃]</li>
        <li>[Ni(CO)₄]</li>
        <li>[PtCl₂(NH₃)₂]</li>
        <li>[Fe(CN)₆]⁴⁻</li>
        <li>[Co(NH₃)₆]³⁺</li>
      </ul>

      <h3>c. ⚛️ Central Atom / Ion</h3>
      <TableCard
        caption="Central ion in representative complexes"
        headers={["Complex", "Central ion"]}
        rows={[
          { cells: ["[NiCl₂(H₂O)₄]", "Ni²⁺"] },
          { cells: ["[CoCl(NH₃)₅]²⁺", "Co³⁺"] },
          { cells: ["[Fe(CN)₆]³⁻", "Fe³⁺"] },
        ]}
      />
      <ul>
        <li>Central metal: electron-pair acceptor; acts as a Lewis acid.</li>
        <li>Ligand: electron-pair donor; acts as a Lewis base.</li>
      </ul>

      <h3>d. 🔗 Ligands &amp; Denticity</h3>
      <TableCard
        caption="Ligand by denticity"
        headers={["Type", "Attachment", "Examples"]}
        rows={[
          { cells: ["Unidentate", "1 donor atom → 1 attachment", "Cl⁻, H₂O, NH₃, CN⁻, OH⁻"] },
          { cells: ["Didentate", "2 donor atoms → 2 attachments", "en (ethane-1,2-diamine), C₂O₄²⁻ (oxalate)"] },
          { cells: ["Polydentate", "≥3 donor atoms → ≥3 attachments", "EDTA⁴⁻ (hexadentate), N(CH₂CH₂NH₂)₃"] },
        ]}
      />
      <p className="mt-2">Important ligands:</p>
      <TableCard
        caption="Important ligands and their denticity"
        headers={["Ligand", "Formula", "Denticity"]}
        rows={[
          { cells: ["Chloride", "Cl⁻", "1"] },
          { cells: ["Water", "H₂O", "1"] },
          { cells: ["Ammonia", "NH₃", "1"] },
          { cells: ["Ethane-1,2-diamine (en)", "H₂NCH₂CH₂NH₂", "2"] },
          { cells: ["Oxalate", "C₂O₄²⁻", "2"] },
          { cells: ["EDTA", "EDTA⁴⁻", "6"] },
        ]}
      />
      <KeyPoint title="Chelate effect">
        <p>
          Chelation: di- or polydentate ligands bind through two or more donor atoms to the same metal,
          forming ring complexes (chelates). Chelate complexes are more stable than complexes of
          comparable unidentate ligands.
        </p>
        <p className="mt-2 text-sm">
          Examples: C₂O₄²⁻ (oxalate), H₂NCH₂CH₂NH₂ (ethane-1,2-diamine).
        </p>
      </KeyPoint>
      <p>Ambidentate ligands (two donor atoms, coordinate through one at a time):</p>
      <TableCard
        caption="Ambidentate ligands"
        headers={["Ligand", "Donor atom", "Representation"]}
        rows={[
          { cells: ["Nitrite NO₂⁻", "N or O", "M–NO₂ / M–ONO"] },
          { cells: ["Thiocyanate SCN⁻", "S or N", "M–SCN / M–NCS"] },
        ]}
      />

      <h3>e. 🔢 Coordination Number (CN)</h3>
      <TableCard
        caption="Coordination number examples"
        headers={["Complex", "Calculation", "CN"]}
        rows={[
          { cells: ["[PtCl₆]²⁻", "6 × 1", "6"] },
          { cells: ["[Ni(NH₃)₄]²⁺", "4 × 1", "4"] },
          { cells: ["[Fe(C₂O₄)₃]³⁻", "3 × 2", "6"] },
          { cells: ["[Co(en)₃]³⁺", "3 × 2", "6"] },
        ]}
      />
      <FormulaBlock latex={String.raw`CN = \sum(\text{Ligand count} \times \text{Denticity})`} />
      <p>CN counts donor atoms, not ligand molecules: 3 bidentate ligands → CN = 6; 6 monodentate ligands → CN = 6.</p>

      <h3>f. 📐 Coordination Polyhedron</h3>
      <p>Three-dimensional geometrical arrangement of ligand donor atoms around the central metal.</p>
      <Comparison
        columns={[
          {
            title: "Octahedral (CN = 6)",
            children: (
              <>
                <svg viewBox="0 0 120 120" width="120" height="120" className="mx-auto" aria-label="Octahedral geometry">
                  <line x1="60" y1="60" x2="60" y2="12" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="60" x2="60" y2="108" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="60" x2="12" y2="60" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="60" x2="108" y2="60" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="60" x2="84" y2="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="60" y1="60" x2="36" y2="84" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
                  <circle cx="60" cy="60" r="7" fill="currentColor" />
                  <text x="60" y="62" textAnchor="middle" fontSize="8" fill="white">M</text>
                  <circle cx="60" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="60" cy="108" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="108" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="84" cy="36" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="36" cy="84" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <p className="mt-2">Example: [Co(NH₃)₆]³⁺.</p>
              </>
            ),
          },
          {
            title: "Tetrahedral (CN = 4)",
            children: (
              <>
                <svg viewBox="0 0 120 120" width="120" height="120" className="mx-auto" aria-label="Tetrahedral geometry">
                  <line x1="60" y1="60" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="60" x2="88" y2="32" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="60" x2="32" y2="88" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="60" x2="88" y2="88" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
                  <circle cx="60" cy="60" r="7" fill="currentColor" />
                  <text x="60" y="62" textAnchor="middle" fontSize="8" fill="white">M</text>
                  <circle cx="32" cy="32" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="88" cy="32" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="32" cy="88" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="88" cy="88" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <p className="mt-2">Example: [Ni(CO)₄].</p>
              </>
            ),
          },
          {
            title: "Square planar (CN = 4)",
            children: (
              <>
                <svg viewBox="0 0 120 120" width="120" height="120" className="mx-auto" aria-label="Square planar geometry">
                  <line x1="60" y1="60" x2="60" y2="18" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="60" x2="60" y2="102" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="60" x2="18" y2="60" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="60" x2="102" y2="60" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="60" cy="60" r="7" fill="currentColor" />
                  <text x="60" y="62" textAnchor="middle" fontSize="8" fill="white">M</text>
                  <circle cx="60" cy="18" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="60" cy="102" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="18" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="102" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <p className="mt-2">Example: [PtCl₄]²⁻.</p>
              </>
            ),
          },
        ]}
      />

      <h3>g. 🏷️ Oxidation Number of Central Metal</h3>
      <p>Definition: the residual charge on the central metal atom/ion if all ligands are removed along with their shared electron pairs. Notation: a Roman numeral in parentheses, e.g. Fe(II), Ni(II).</p>
      <FormulaBlock latex={String.raw`x + \sum(\text{Ligand charges}) = \text{Complex charge}`} />
      <p>Example: [Cu(CN)₄]³⁻.</p>
      <FormulaBlock latex={String.raw`x + 4(-1) = -3 \;\Rightarrow\; x = +1`} />
      <p>Copper oxidation state = +1 → Cu(I).</p>

      <p className="mt-2 font-semibold">A. [Ni(NH₃)₄]²⁺</p>
      <FormulaBlock latex={String.raw`x + 4(0) = +2 \;\Rightarrow\; x = +2 \;\Rightarrow\; \text{Ni} = +2 \; (\text{Ni(II)})`} />

      <p className="mt-2 font-semibold">B. K₄[Fe(CN)₆]</p>
      <FormulaBlock latex={String.raw`4(+1) + x + 6(-1) = 0 \;\Rightarrow\; x - 2 = 0 \;\Rightarrow\; x = +2 \;\Rightarrow\; \text{Fe} = +2 \; (\text{Fe(II)})`} />

      <p className="mt-2 font-semibold">C. K₃[Fe(CN)₆]</p>
      <FormulaBlock latex={String.raw`3(+1) + x + 6(-1) = 0 \;\Rightarrow\; x - 3 = 0 \;\Rightarrow\; x = +3 \;\Rightarrow\; \text{Fe} = +3 \; (\text{Fe(III)})`} />

      <p className="mt-2 font-semibold">D. [Ni(CO)₄]</p>
      <FormulaBlock latex={String.raw`x + 4(0) = 0 \;\Rightarrow\; x = 0 \;\Rightarrow\; \text{Ni} = 0`} />

      <p className="mt-2 font-semibold">E. [Co(NH₃)₄Cl₂]⁺</p>
      <FormulaBlock latex={String.raw`x + 4(0) + 2(-1) = +1 \;\Rightarrow\; x - 2 = +1 \;\Rightarrow\; x = +3 \;\Rightarrow\; \text{Co} = +3 \; (\text{Co(III)})`} />

      <h3>h. 🔀 Homoleptic vs Heteroleptic</h3>
      <TableCard
        caption="Complex category (merged)"
        headers={["Category", "Definition", "Representative example"]}
        rows={[
          { cells: ["Homoleptic", "Metal bound to only one kind of donor group.", "[Co(NH₃)₆]³⁺ (bound solely to NH₃)."] },
          { cells: ["Heteroleptic", "Metal bound to more than one kind of donor group.", "[Co(NH₃)₄Cl₂]⁺ (bound to both NH₃ and Cl⁻)."] },
        ]}
      />

      <h3>i. 🧪 Double Salt vs. Complex Salt</h3>
      <Comparison
        columns={[
          {
            title: "Double salt",
            children: (
              <ul>
                <li>Keeps identity only in the solid state; dissociates completely in solution into simple ions.</li>
                <li>Mohr&apos;s salt: FeSO₄·(NH₄)₂SO₄·6H₂O.</li>
                <li>Carnallite: KCl·MgCl₂·6H₂O.</li>
                <li>Potash alum: K₂SO₄·Al₂(SO₄)₃·24H₂O.</li>
              </ul>
            ),
          },
          {
            title: "Complex salt",
            children: (
              <ul>
                <li>Keeps identity in both solid and solution states.</li>
                <li>K₄[Fe(CN)₆], [Cu(NH₃)₄]SO₄, K₂[PtCl₄], [Ni(CO)₄].</li>
              </ul>
            ),
          },
        ]}
      />

      */}
<h2 id="h-5-1">5.1 Werner&apos;s Theory of Coordination Compounds</h2>

      <p>
        Alfred Werner (1866–1919) was the first to explain the structures of coordination compounds.
        He proposed that every metal atom or ion in a complex has <strong>two types of valency</strong> —
        primary and secondary.
      </p>

      <Callout type="important" title="Two types of valency">
        <ul>
          <li><strong>Primary valency</strong> — ionisable and non‑directional; decides the oxidation state of the metal.</li>
          <li><strong>Secondary valency</strong> — non‑ionisable and directional; decides the coordination number and spatial arrangement of ligands.</li>
        </ul>
      </Callout>

      <ul>
        <li>Primary valency is satisfied by negative ions.</li>
        <li>Secondary valency is satisfied by negative ions or neutral molecules.</li>
        <li>The geometry of the complex depends on the secondary valency.</li>
      </ul>

      <TableCard
        title="Primary vs secondary valency"
        headers={["Feature", "Primary valency", "Secondary valency"]}
        rows={[
          { cells: ["Meaning", <strong key="primary-meaning">Oxidation state</strong>, <strong key="secondary-meaning">Coordination number</strong>] },
          { cells: ["Ionisability", "Ionisable", "Non-ionisable"] },
          { cells: ["Satisfied by", "Negative ions", "Negative ions or neutral molecules"] },
          { cells: ["Direction", "Non-directional", "Directional"] },
          { cells: ["Determines", <strong key="primary-determines">Oxidation state</strong>, <strong key="secondary-determines">Geometry</strong>] },
          { cells: ["Nature", "May vary with oxidation state", "Fixed for a given metal ion in a particular oxidation state"] },
        ]}
      />

      <h3 id="h-5-1-board">Board Exam Questions &amp; Solutions</h3>

      <Expandable title="Board Exam Questions & Solutions" variant="example">
        <ExerciseQa
          questions={[
            <>Assign the primary and secondary valencies of the central metal in <code>[Ni(CO)₄]</code>.</>,
            <>KCN is poisonous, but <code>K₄[Fe(CN)₆]</code> is not. Why?</>,
            <>How many moles of <code>AgCl</code> are formed when each cobalt–ammonia complex reacts with <code>AgNO₃</code>?</>,
            <>According to Werner&apos;s theory, the secondary valencies of a metal ion are:</>,
            <>Which valency determines the spatial arrangement of ligands around the central metal ion?</>,
          ]}
          answers={[
            <div key="q1" className="space-y-2">
              <p><code>[Ni(CO)₄]⁰</code></p>
              <ul>
                <li>Primary valency = 0 (oxidation state).</li>
                <li>Secondary valency = 4 (coordination number).</li>
              </ul>
              <p><em>March 2020</em></p>
            </div>,
            <div key="q2" className="space-y-2">
              <ul>
                <li><code>KCN → K⁺ + CN⁻</code> — releases free CN⁻ ions, which are toxic.</li>
                <li><code>K₄[Fe(CN)₆] → 4K⁺ + [Fe(CN)₆]⁴⁻</code> — does not release free CN⁻ because the complex ion is stable.</li>
              </ul>
            </div>,
            <div key="q3" className="space-y-2">
              <ul>
                <li><code>CoCl₃·6NH₃</code> (yellow) → <code>[Co(NH₃)₆]Cl₃ + 3Ag⁺ → 3AgCl</code> (3 moles).</li>
                <li><code>CoCl₃·5NH₃</code> (purple) → <code>[Co(NH₃)₅Cl]Cl₂ + 2Ag⁺ → 2AgCl</code> (2 moles).</li>
                <li><code>CoCl₃·4NH₃</code> (green/violet) → <code>[Co(NH₃)₄Cl₂]Cl + Ag⁺ → AgCl</code> (1 mole).</li>
              </ul>
            </div>,
            <>Fixed for a given metal ion in a particular oxidation state.</>,
            <>Secondary valency.</>,
          ]}
        />
      </Expandable>


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

      <Callout type="important" title="Definition">
        Isomers are compounds with identical chemical formulae but different arrangements of atoms, resulting in different physical and chemical properties.
      </Callout>

      <TreeDiagram
        title="Classification of Isomerism"
        nodes={[
          { label: "Structural Isomerism", children: [
            { label: "Ionisation" },
            { label: "Linkage" },
            { label: "Coordination" },
            { label: "Solvate / Hydrate" },
          ]},
          { label: "Stereoisomerism", children: [
            { label: "Geometrical" },
            { label: "Optical" },
          ]},
        ]}
      />

      <Comparison
        columns={[
          { title: "Structural Isomerism", children: (<p>Different bonding / linkage; same formula.</p>) },
          { title: "Stereoisomerism", children: (<p>Same bonding connectivity; different 3‑D spatial arrangement.</p>) },
        ]}
      />

      <h3 id="h-5-4-1">5.4.1 Structural Isomerism</h3>

      <ConceptCard title="Ionisation Isomerism" icon="⚛️">
        <p>Mechanism: interchange of an ion inside and outside the coordination sphere.</p>
        <p>Example:</p>
        <ul>
          <li><code>[Co(NH₃)₅SO₄]Br</code></li>
          <li><code>[Co(NH₃)₅Br]SO₄</code></li>
        </ul>
        <p>Distinguishing feature: counter‑ion can act as a ligand.</p>
      </ConceptCard>

      <ConceptCard title="Linkage Isomerism" icon="⚛️">
        <p>Mechanism: ambidentate ligand binds through different donor atoms.</p>
        <Comparison
          columns={[
            { title: "Nitro (N‑bound)", children: (<p><code>[Co(NH₃)₅(NO₂)]Cl₂</code> – N donor</p>) },
            { title: "Nitrito (O‑bound)", children: (<p><code>[Co(NH₃)₅(ONO)]Cl₂</code> – O donor</p>) },
          ]}
        />
        <p>Common ambidentate ligands: NO₂⁻, SCN⁻.</p>
      </ConceptCard>

      <ConceptCard title="Coordination Isomerism" icon="⚛️">
        <p>Mechanism: ligand interchange between cationic and anionic complex entities.</p>
        <ul>
          <li><code>[Co(NH₃)₆][Cr(CN)₆]</code></li>
          <li><code>[Cr(NH₃)₆][Co(CN)₆]</code></li>
        </ul>
      </ConceptCard>

      <ConceptCard title="Solvate (Hydrate) Isomerism" icon="⚛️">
        <p>Mechanism: difference in the number of solvent molecules directly coordinated.</p>
        <ul>
          <li><code>[Cr(H₂O)₆]Cl₃</code></li>
          <li><code>[Cr(H₂O)₅Cl]Cl₂·H₂O</code></li>
        </ul>
      </ConceptCard>

      <h3 id="h-5-4-2">5.4.2 Stereoisomerism</h3>

      <Callout type="note" title="Definition">
        Isomers having the same atom‑to‑atom bonding connectivity but different spatial arrangements of ligands around the central metal ion.
      </Callout>

      <Comparison
        columns={[
          { title: "Geometrical Isomerism", children: (<p>Cis/Trans, Fac/Mer.</p>) },
          { title: "Optical Isomerism", children: (<p>Enantiomers – non‑superimposable mirror images.</p>) },
        ]}
      />

      <h3 id="h-5-4-3">5.4.3 Geometrical Isomerism</h3>

      <p>Cause: different arrangements of ligands around the central metal ion.</p>

      <Comparison
        columns={[
          { title: "Square Planar (CN = 4)", children: (
            <ul>
              <li>Cis – adjacent ligands (90°)</li>
              <li>Trans – opposite ligands (180°)</li>
              <li>Example: <code>[Pt(NH₃)₂Cl₂]</code></li>
            </ul>
          ) },
          { title: "Octahedral (CN = 6)", children: (
            <ul>
              <li>Cis – adjacent ligands</li>
              <li>Trans – opposite ligands</li>
              <li>Fac – three identical ligands occupy one face</li>
              <li>Mer – three identical ligands lie on a meridian</li>
              <li>Example: <code>[Co(NH₃)₄Cl₂]⁺</code></li>
            </ul>
          ) },
        ]}
      />

      <Callout type="warning">
        Tetrahedral complexes of the type <code>[MA₂B₂]</code> do not exhibit geometrical isomerism because all four positions are equivalent.
      </Callout>

      <h3 id="h-5-4-4">5.4.4 Optical Isomerism</h3>

      <Callout type="note" title="Key points">
        <ul>
          <li>Chiral complexes are non‑superimposable on their mirror images.</li>
          <li>Optically active complexes rotate plane‑polarised light (dextrorotatory ‘d’/‘+’, levorotatory ‘l’/‘‑’).</li>
          <li>Typical example: <code>[Co(en)₃]³+</code> – Δ (right‑handed) and Λ (left‑handed) forms.</li>
        </ul>
      </Callout>

      <TableCard
        title="Optical activity of selected complexes"
        headers={["Complex", "Isomer", "Optical activity"]}
        rows={[
          { cells: ["[PtCl₂(en)₂]²+", "Cis", "Active"] },
          { cells: ["[PtCl₂(en)₂]²+", "Trans", "Inactive"] },
          { cells: ["[Co(en)₃]³+", "Δ / Λ", "Active enantiomers"] },
        ]}
      />

      <MistakeCard
        mistake="cis‑[Co(NH₃)₄Cl₂]⁺ is optically active"
        correction="Both cis and trans forms of [Co(NH₃)₄Cl₂]⁺ are achiral; they do not exhibit optical activity."
        example="A common optically active example is cis‑[CoCl₂(en)₂]⁺."
      />

      <h3 id="h-5-4-5">5.4.5 Board Exam Questions</h3>

      <Expandable title="Board exam practice" variant="example">
        <ExerciseQa
          questions={[
            <>Medical application: The cis‑isomer of <code>[Pt(NH₃)₂Cl₂]</code> is used to inhibit tumour growth.</>,
            <>Which complex shows optical isomerism? (A) [Ni(CO)₄] (B) [CoF₆]³⁻ (C) cis‑[Co(NH₃)₄Cl₂]⁺ (D) trans‑[Co(NH₃)₄Cl₂]⁺</>,
            <>Identify the geometrical isomers of <code>[Co(NH₃)₃Cl₃]</code>.</>,
          ]}
          answers={[
            <>IUPAC name: Diamminedichloridoplatinum(II). Difference: cis – Cl ligands adjacent; trans – opposite.</>,
            <>None of the given options is correct. The intended optically active complex is cis‑[CoCl₂(en)₂]⁺.</>,
            <>fac‑[Co(NH₃)₃Cl₃] and mer‑[Co(NH₃)₃Cl₃].</>,
          ]}
        />
      </Expandable>

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

      <Expandable title="Exercises" variant="exercise">


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
    
      </Expandable>
</>
  );
}
