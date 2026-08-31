import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { CycleDiagram } from "@/components/content/process/CycleDiagram";
import { Timeline } from "@/components/content/process/Timeline";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";

export default function MolecularBasisOfInheritanceChapter() {
  return (
    <>
      <h2 id="h-5-1">5.1 The DNA</h2>
      <div className="my-6 rounded-xl border border-border/60 bg-card p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0">
          {/* Left boxed */}
          <div className="rounded-lg border border-border/60 bg-muted/30 px-6 py-6 text-center shrink-0 sm:min-w-[200px] flex flex-col items-center justify-center">
            <p className="text-base font-semibold">Nucleic Acids</p>
            <p className="text-xs text-muted-foreground">— polymers of nucleotides</p>
          </div>
          {/* Branching lines — horizontal to the right */}
          <div className="hidden sm:flex items-center shrink-0">
            {/* horizontal from left box */}
            <div className="h-px w-6 bg-border/60" />
            {/* vertical spine */}
            <div className="relative h-[148px] w-px bg-border/60">
              {/* top horizontal */}
              <div className="absolute top-[34px] left-0 h-px w-6 bg-border/60" />
              {/* bottom horizontal */}
              <div className="absolute bottom-[34px] left-0 h-px w-6 bg-border/60" />
            </div>
          </div>
          {/* Mobile vertical connector */}
          <div className="flex sm:hidden justify-center">
            <div className="w-px h-6 bg-border/60" />
          </div>
          {/* Right — DNA / RNA stacked */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="rounded-lg border border-blue-500/20 bg-blue-500/[0.06] px-4 py-3">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">DNA (Deoxyribonucleic acid)</p>
              <p className="text-sm text-muted-foreground">Genetic material for most organisms.</p>
            </div>
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-3">
              <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">RNA (Ribonucleic acid)</p>
              <p className="text-sm text-muted-foreground">Genetic material for some viruses.</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2 space-y-1">
                <li>Messenger</li>
                <li>Adapter</li>
                <li>Structural role</li>
                <li>Catalytic role</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Callout type="important">
        DNA is a <Highlight color="yellow">long polymer of deoxyribonucleotides</Highlight>.
        Length is defined as number of nucleotides / base pairs (bp) — a characteristic of the organism.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [&>div]:my-0">
        <MetricCard label="φ ×174 bacteriophage" value="5386" unit="nucleotides" description="Single-stranded DNA phage — smallest in the list." />
        <MetricCard label="λ bacteriophage" value="48,502" unit="bp" description="Double-stranded DNA phage." />
        <MetricCard label="E. coli" value="4.6 × 10⁶" unit="bp" description="Bacterial genome — completes replication in 18 min." />
        <MetricCard label="Human (haploid)" value="3.3 × 10⁹" unit="bp" description="Diploid content 6.6 × 10⁹ bp → 2.2 m of DNA per cell." />
      </div>

      <h3 id="h-5-1-1">5.1.1 Structure of Polynucleotide Chain</h3>
      <p>A nucleotide consists of three main components:</p>
      <ol className="list-decimal pl-5 space-y-1">
        <li><strong>Pentose Sugar</strong></li>
        <li><strong>Nitrogenous Base</strong></li>
        <li><strong>Phosphate Group</strong></li>
      </ol>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">1. Pentose Sugar</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Formed of 5 carbons (<strong>C<sub>5</sub></strong>).</li>
        <li><strong>RNA:</strong> Ribose (<strong>C<sub>5</sub>H<sub>10</sub>O<sub>5</sub></strong>)</li>
        <li><strong>DNA:</strong> Deoxyribose (<strong>C<sub>5</sub>H<sub>10</sub>O<sub>4</sub></strong>)</li>
      </ul>
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 220" role="img" aria-label="A detailed biochemical structural diagram comparing Ribose and Deoxyribose pentose sugar rings, showing carbon numbering and highlighting the structural difference at the 2' carbon position with an oxygen atom present in ribose and absent in deoxyribose." className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="219" rx="12" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
          {/* Ribose */}
          <g>
            <text x="160" y="22" textAnchor="middle" fontSize="13" fontWeight="600" fill="hsl(var(--foreground))">Ribose — RNA</text>
            <text x="160" y="38" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">C5H10O5</text>
            {/* Pentagon */}
            <polygon points="160,62 195,88 184,128 136,128 125,88" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.6" />
            <text x="160" y="58" fontSize="10" fill="hsl(var(--muted-foreground))">O</text>
            {/* Carbons */}
            <circle cx="195" cy="88" r="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
            <text x="195" y="92" textAnchor="middle" fontSize="9" fontWeight="600">1&apos;</text>
            <circle cx="184" cy="128" r="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
            <text x="184" y="132" textAnchor="middle" fontSize="9" fontWeight="600">2&apos;</text>
            <circle cx="136" cy="128" r="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
            <text x="136" y="132" textAnchor="middle" fontSize="9" fontWeight="600">3&apos;</text>
            <circle cx="125" cy="88" r="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
            <text x="125" y="92" textAnchor="middle" fontSize="9" fontWeight="600">4&apos;</text>
            <circle cx="160" cy="62" r="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
            <text x="160" y="66" textAnchor="middle" fontSize="9" fontWeight="600">5&apos;</text>
            {/* OH groups */}
            <text x="210" y="132" fontSize="10" fill="#dc2626" fontWeight="600">–OH</text>
            <text x="108" y="132" fontSize="10" fill="#dc2626">–OH</text>
            <text x="210" y="92" fontSize="10" fill="#dc2626" fontWeight="700">–OH at 2&apos;</text>
            <rect x="202" y="82" width="52" height="18" rx="6" fill="#fef2f2" stroke="#fecaca" />
            <text x="228" y="95" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="700">–OH</text>
            <text x="160" y="158" textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="600">Extra O at 2&apos;</text>
            <text x="160" y="175" textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))">Base at 1&apos; • Phosphate at 5&apos;</text>
          </g>
          {/* Divider */}
          <line x1="320" y1="20" x2="320" y2="200" stroke="hsl(var(--border))" strokeDasharray="6 6" />
          {/* Deoxyribose */}
          <g>
            <text x="480" y="22" textAnchor="middle" fontSize="13" fontWeight="600" fill="hsl(var(--foreground))">Deoxyribose — DNA</text>
            <text x="480" y="38" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">C5H10O4</text>
            <polygon points="480,62 515,88 504,128 456,128 445,88" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.6" />
            <text x="480" y="58" fontSize="10" fill="hsl(var(--muted-foreground))">O</text>
            <circle cx="515" cy="88" r="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
            <text x="515" y="92" textAnchor="middle" fontSize="9" fontWeight="600">1&apos;</text>
            <circle cx="504" cy="128" r="10" fill="#dbeafe" stroke="#93c5fd" />
            <text x="504" y="132" textAnchor="middle" fontSize="9" fontWeight="600">2&apos;</text>
            <circle cx="456" cy="128" r="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
            <text x="456" y="132" textAnchor="middle" fontSize="9" fontWeight="600">3&apos;</text>
            <circle cx="445" cy="88" r="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
            <text x="445" y="92" textAnchor="middle" fontSize="9" fontWeight="600">4&apos;</text>
            <circle cx="480" cy="62" r="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
            <text x="480" y="66" textAnchor="middle" fontSize="9" fontWeight="600">5&apos;</text>
            <text x="530" y="132" fontSize="10" fill="#2563eb" fontWeight="600">–H</text>
            <text x="428" y="132" fontSize="10" fill="#2563eb">–OH</text>
            <rect x="522" y="82" width="42" height="18" rx="6" fill="#eff6ff" stroke="#bfdbfe" />
            <text x="543" y="95" textAnchor="middle" fontSize="10" fill="#2563eb" fontWeight="700">–H</text>
            <text x="480" y="158" textAnchor="middle" fontSize="11" fill="#2563eb" fontWeight="600">Missing O at 2&apos;</text>
            <text x="480" y="175" textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))">More stable for storage</text>
          </g>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Ribose (RNA, C<sub>5</sub>H<sub>10</sub>O<sub>5</sub>) vs Deoxyribose (DNA, C<sub>5</sub>H<sub>10</sub>O<sub>4</sub>) — difference at 2&apos; carbon: –OH vs –H. Carbon numbering 1&apos;–5&apos;.</figcaption>
      </figure>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">2. Nitrogenous Bases</h4>
      <p>Classified into two major types:</p>
      <Comparison
        columns={[
          {
            title: "Purines (double ring)",
            children: (
              <ul>
                <li>Ring positions: <strong>1, 3, 7, 9</strong></li>
                <li>Adenine (<strong>A</strong>)</li>
                <li>Guanine (<strong>G</strong>)</li>
              </ul>
            ),
          },
          {
            title: "Pyrimidines (single ring)",
            children: (
              <ul>
                <li>Ring positions: <strong>1, 3</strong></li>
                <li>Cytosine (<strong>C</strong>)</li>
                <li>Thymine (<strong>T</strong>) — in DNA</li>
                <li>Uracil (<strong>U</strong>) — in RNA</li>
              </ul>
            ),
          },
        ]}
      />
      <TableCard
        caption="Nitrogenous base composition by molecule"
        headers={["Molecule", "Bases present"]}
        rows={[
          { cells: ["DNA", "Adenine (A), Guanine (G), Thymine (T), Cytosine (C)"] },
          { cells: ["RNA", "Adenine (A), Guanine (G), Uracil (U), Cytosine (C)"] },
        ]}
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Nucleoside Formation</h4>
      <p>
        A nucleoside is formed by the combination of a <strong>Sugar + Nitrogenous Base</strong> linked via an <Highlight color="yellow">N-Glycosidic bond</Highlight> at 1&apos; C.
      </p>
      <TableCard
        headers={["Nitrogenous Base", "RNA Nucleoside", "DNA Nucleoside"]}
        rows={[
          { cells: ["Adenine", "Adenosine", "Deoxyadenosine"] },
          { cells: ["Guanine", "Guanosine", "Deoxyguanosine"] },
          { cells: ["Cytosine", "Cytidine", "Deoxycytidine"] },
          { cells: ["Thymine", "—", "Deoxythymidine"] },
          { cells: ["Uracil", "Uridine", "—"] },
        ]}
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">3. Phosphate Group (H<sub>3</sub>PO<sub>4</sub>)</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Linked via a <Highlight color="blue">phosphoester bond</Highlight> to the sugar at 5&apos; C.</li>
        <li>
          <strong>Nucleotide Definition:</strong> <Highlight color="yellow">Nucleotide = Sugar + Nitrogenous Base + Phosphate = Nucleoside + Phosphate</Highlight>
        </li>
      </ul>
      <TableCard
        caption="Nucleotide / Nucleic acid nomenclature"
        headers={["Type", "Nucleotides (Phosphate + Sugar + Base)"]}
        rows={[
          { cells: ["RNA Nucleotides (Ribonucleotides)", "Adenylic acid (A), Guanylic acid (G), Cytidylic acid (C), Uridylic acid (U)"] },
          { cells: ["DNA Nucleotides (Deoxyribonucleotides)", "Deoxyadenylic acid (A), Deoxyguanylic acid (G), Deoxycytidylic acid (C), Deoxythymidylic acid (T)"] },
        ]}
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Polynucleotide Chain Backbone</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Nucleotides are linked together through <Highlight color="blue">phosphodiester bonds</Highlight> (3&apos;–5&apos;) forming a dinucleotide and subsequently a polynucleotide chain.</li>
        <li>The backbone consists of alternating <strong>sugar and phosphate</strong> residues, with nitrogenous bases projecting outward from the sugar-phosphate backbone.</li>
        <li>
          <strong>Directionality:</strong> Free phosphate moiety at the 5&apos; carbon end (<strong>5&apos; → P</strong>) and free hydroxyl group at the 3&apos; carbon end (<strong>3&apos; → OH</strong>).
        </li>
      </ul>
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 340 420" role="img" aria-label="A schematic illustration of a polynucleotide chain backbone showing alternating pentose sugar pentagons and phosphate circles connected by phosphodiester bonds, oriented vertically with a 5-prime phosphate end at the top and a 3-prime hydroxyl group at the bottom, with nitrogenous bases extending to the right from each sugar unit." className="w-full h-auto max-w-[360px] mx-auto">
          <rect x="0.5" y="0.5" width="339" height="419" rx="12" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
          {/* Top label */}
          <text x="170" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Polynucleotide Chain</text>
          <text x="170" y="36" textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))">5&apos; → 3&apos; direction</text>
          {/* Top phosphate */}
          <g>
            <circle cx="120" cy="62" r="18" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.4" />
            <text x="120" y="66" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400e">P</text>
            <text x="120" y="48" textAnchor="middle" fontSize="9" fill="#92400e">5&apos; — Phosphate</text>
            <line x1="120" y1="80" x2="120" y2="98" stroke="hsl(var(--foreground))" strokeWidth="1.4" />
            <text x="128" y="90" fontSize="8" fill="hsl(var(--muted-foreground))">phosphoester</text>
          </g>
          {/* Sugar 1 */}
          <g>
            <polygon points="120,98 148,118 138,148 102,148 92,118" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.4" />
            <text x="120" y="128" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e40af">Sugar</text>
            <text x="158" y="128" fontSize="10" fill="hsl(var(--foreground))">— Base A</text>
            <line x1="120" y1="148" x2="120" y2="166" stroke="hsl(var(--foreground))" strokeWidth="1.4" />
            <text x="128" y="160" fontSize="8" fill="hsl(var(--muted-foreground))">3&apos;—5&apos; phosphodiester</text>
          </g>
          {/* Phosphate 2 */}
          <g>
            <circle cx="120" cy="184" r="14" fill="#fef3c7" stroke="#f59e0b" />
            <text x="120" y="188" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400e">P</text>
            <line x1="120" y1="198" x2="120" y2="216" stroke="hsl(var(--foreground))" strokeWidth="1.4" />
          </g>
          {/* Sugar 2 */}
          <g>
            <polygon points="120,216 148,236 138,266 102,266 92,236" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.4" />
            <text x="120" y="246" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e40af">Sugar</text>
            <text x="158" y="246" fontSize="10" fill="hsl(var(--foreground))">— Base G</text>
            <line x1="120" y1="266" x2="120" y2="284" stroke="hsl(var(--foreground))" strokeWidth="1.4" />
          </g>
          {/* Phosphate 3 */}
          <g>
            <circle cx="120" cy="302" r="14" fill="#fef3c7" stroke="#f59e0b" />
            <text x="120" y="306" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400e">P</text>
            <line x1="120" y1="316" x2="120" y2="334" stroke="hsl(var(--foreground))" strokeWidth="1.4" />
          </g>
          {/* Sugar 3 */}
          <g>
            <polygon points="120,334 148,354 138,384 102,384 92,354" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.4" />
            <text x="120" y="364" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e40af">Sugar</text>
            <text x="158" y="364" fontSize="10" fill="hsl(var(--foreground))">— Base C</text>
          </g>
          {/* Bottom OH */}
          <text x="120" y="408" textAnchor="middle" fontSize="11" fontWeight="600" fill="#16a34a">3&apos; — OH</text>
          <text x="120" y="420" textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))">free hydroxyl</text>
          {/* Backbone label */}
          <text x="60" y="240" textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))" transform="rotate(-90 60 240)">Sugar-Phosphate Backbone</text>
          <text x="230" y="240" textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))">Bases project outward</text>
          <line x1="165" y1="125" x2="155" y2="125" stroke="hsl(var(--foreground))" strokeWidth="1" />
          <line x1="165" y1="243" x2="155" y2="243" stroke="hsl(var(--foreground))" strokeWidth="1" />
          <line x1="165" y1="361" x2="155" y2="361" stroke="hsl(var(--foreground))" strokeWidth="1" />
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Polynucleotide chain: alternating sugar (pentagon) — phosphate (P) via 3&apos;–5&apos; phosphodiester bonds; 5&apos; phosphate (top) → 3&apos; OH (bottom); bases to the right (Figure 5.1).</figcaption>
      </figure>
      <Callout type="note" title="Polarity — quick recap">
        Polymer has <Highlight color="yellow">5&apos; end</Highlight> (free phosphate at 5&apos; sugar) and <Highlight color="green">3&apos; end</Highlight> (free –OH at 3&apos; sugar). Backbone = sugar-phosphate; bases project from it. Same convention defines Template (3&apos;→5&apos;) vs Coding (5&apos;→3&apos;) later in Transcription.
      </Callout>
      <Callout type="important" title="Double Helix — proposed 1953">
        <strong>Watson and Crick</strong> (X-ray data: Wilkins & Franklin) — hallmark is <Highlight color="yellow">base pairing</Highlight>. Based also on <strong>Chargaff’s observation</strong>: in dsDNA, <strong>A/T = G/C = 1</strong>.
      </Callout>
      <p>Because strands are complementary, knowing one strand predicts the other. Each parental strand as template → two daughter DNAs identical to parental.</p>
      <ConceptCard title="Salient features of DNA double helix">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>(i) Two chains:</strong> Sugar-phosphate backbone, bases project inside.</li>
          <li><strong>(ii) Anti-parallel polarity:</strong> One strand 5&apos;→3&apos;, the other 3&apos;→5&apos;.</li>
          <li><strong>(iii) H-bond base pairs:</strong> A pairs with T via 2 H-bonds, G with C via 3 H-bonds. Purine opposite pyrimidine → uniform distance.</li>
          <li><strong>(iv) Right-handed coil:</strong> Pitch 3.4 nm, ~10 bp per turn → 0.34 nm per bp (Figure 5.2, 5.3).</li>
          <li><strong>(v) Base stacking:</strong> Plane of one pair stacks over next → adds stability beyond H-bonds.</li>
        </ul>
      </ConceptCard>
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 260" role="img" aria-label="Figure 5.2 Double stranded polynucleotide chain and Figure 5.3 DNA double helix — complementary base pairing, anti-parallel strands, pitch 3.4 nm and 0.34 nm per base pair" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="259" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="160" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.2 — Double Stranded Chain</text>
          {/* Backbones */}
          <line x1="90" y1="40" x2="90" y2="230" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
          <line x1="230" y1="40" x2="230" y2="230" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
          <text x="90" y="36" textAnchor="middle" fontSize="9" fill="#2563eb" fontWeight="600">5&apos; → 3&apos;</text>
          <text x="230" y="36" textAnchor="middle" fontSize="9" fill="#2563eb" fontWeight="600">3&apos; → 5&apos;</text>
          <text x="60" y="54" fontSize="8" fill="hsl(var(--muted-foreground))">Sugar-P</text>
          <text x="240" y="54" fontSize="8" fill="hsl(var(--muted-foreground))">Sugar-P</text>
          {/* Base pairs */}
          <g fontSize="10" fontWeight="600">
            {/* A-T 2 H-bonds */}
            <rect x="100" y="58" width="24" height="14" rx="3" fill="#fef3c7" stroke="#f59e0b" />
            <text x="112" y="68" textAnchor="middle" fill="#92400e">A</text>
            <line x1="124" y1="62" x2="124" y2="70" stroke="#64748b" strokeWidth="1.2" />
            <line x1="128" y1="62" x2="128" y2="70" stroke="#64748b" strokeWidth="1.2" />
            <text x="126" y="60" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">2 H</text>
            <rect x="196" y="58" width="24" height="14" rx="3" fill="#dbeafe" stroke="#93c5fd" />
            <text x="208" y="68" textAnchor="middle" fill="#1e40af">T</text>
            {/* G-C 3 H-bonds */}
            <rect x="100" y="88" width="24" height="14" rx="3" fill="#fee2e2" stroke="#fca5a5" />
            <text x="112" y="98" textAnchor="middle" fill="#991b1b">G</text>
            <line x1="124" y1="92" x2="124" y2="100" stroke="#64748b" strokeWidth="1.2" />
            <line x1="128" y1="92" x2="128" y2="100" stroke="#64748b" strokeWidth="1.2" />
            <line x1="132" y1="92" x2="132" y2="100" stroke="#64748b" strokeWidth="1.2" />
            <text x="128" y="88" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">3 H</text>
            <rect x="196" y="88" width="24" height="14" rx="3" fill="#dcfce7" stroke="#86efac" />
            <text x="208" y="98" textAnchor="middle" fill="#166534">C</text>
            {/* A-T again */}
            <rect x="100" y="118" width="24" height="14" rx="3" fill="#fef3c7" stroke="#f59e0b" />
            <text x="112" y="128" textAnchor="middle" fill="#92400e">A</text>
            <line x1="124" y1="122" x2="124" y2="130" stroke="#64748b" strokeWidth="1.2" />
            <line x1="128" y1="122" x2="128" y2="130" stroke="#64748b" strokeWidth="1.2" />
            <rect x="196" y="118" width="24" height="14" rx="3" fill="#dbeafe" stroke="#93c5fd" />
            <text x="208" y="128" textAnchor="middle" fill="#1e40af">T</text>
            {/* C-G */}
            <rect x="100" y="148" width="24" height="14" rx="3" fill="#dcfce7" stroke="#86efac" />
            <text x="112" y="158" textAnchor="middle" fill="#166534">C</text>
            <line x1="124" y1="152" x2="124" y2="160" stroke="#64748b" strokeWidth="1.2" />
            <line x1="128" y1="152" x2="128" y2="160" stroke="#64748b" strokeWidth="1.2" />
            <line x1="132" y1="152" x2="132" y2="160" stroke="#64748b" strokeWidth="1.2" />
            <rect x="196" y="148" width="24" height="14" rx="3" fill="#fee2e2" stroke="#fca5a5" />
            <text x="208" y="158" textAnchor="middle" fill="#991b1b">G</text>
            {/* Repeat */}
            <rect x="100" y="178" width="24" height="14" rx="3" fill="#fef3c7" stroke="#f59e0b" />
            <text x="112" y="188" textAnchor="middle" fill="#92400e">A</text>
            <line x1="124" y1="182" x2="124" y2="190" stroke="#64748b" strokeWidth="1.2" />
            <line x1="128" y1="182" x2="128" y2="190" stroke="#64748b" strokeWidth="1.2" />
            <rect x="196" y="178" width="24" height="14" rx="3" fill="#dbeafe" stroke="#93c5fd" />
            <text x="208" y="188" textAnchor="middle" fill="#1e40af">T</text>
            <rect x="100" y="208" width="24" height="14" rx="3" fill="#fee2e2" stroke="#fca5a5" />
            <text x="112" y="218" textAnchor="middle" fill="#991b1b">G</text>
            <line x1="124" y1="212" x2="124" y2="220" stroke="#64748b" strokeWidth="1.2" />
            <line x1="128" y1="212" x2="128" y2="220" stroke="#64748b" strokeWidth="1.2" />
            <line x1="132" y1="212" x2="132" y2="220" stroke="#64748b" strokeWidth="1.2" />
            <rect x="196" y="208" width="24" height="14" rx="3" fill="#dcfce7" stroke="#86efac" />
            <text x="208" y="218" textAnchor="middle" fill="#166534">C</text>
          </g>
          {/* Right — Helix */}
          <text x="480" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.3 — Double Helix</text>
          {/* Helix strands as sinusoidal */}
          <path d="M 380 50 C 410 70, 470 70, 500 50" fill="none" stroke="#3b82f6" strokeWidth="3" />
          <path d="M 380 80 C 410 100, 470 100, 500 80" fill="none" stroke="#3b82f6" strokeWidth="3" />
          <path d="M 380 110 C 410 130, 470 130, 500 110" fill="none" stroke="#3b82f6" strokeWidth="3" />
          <path d="M 380 140 C 410 160, 470 160, 500 140" fill="none" stroke="#3b82f6" strokeWidth="3" />
          <path d="M 380 170 C 410 190, 470 190, 500 170" fill="none" stroke="#3b82f6" strokeWidth="3" />
          <path d="M 380 200 C 410 220, 470 220, 500 200" fill="none" stroke="#3b82f6" strokeWidth="3" />
          {/* Complementary strand (offset) */}
          <path d="M 380 65 C 410 45, 470 45, 500 65" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="6 3" />
          <path d="M 380 95 C 410 75, 470 75, 500 95" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="6 3" />
          <path d="M 380 125 C 410 105, 470 105, 500 125" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="6 3" />
          <path d="M 380 155 C 410 135, 470 135, 500 155" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="6 3" />
          <path d="M 380 185 C 410 165, 470 165, 500 185" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="6 3" />
          <path d="M 380 215 C 410 195, 470 195, 500 215" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="6 3" />
          {/* Pitch annotation */}
          <line x1="520" y1="50" x2="520" y2="80" stroke="hsl(var(--foreground))" strokeWidth="1" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
          <text x="535" y="68" fontSize="9" fill="hsl(var(--foreground))">3.4 nm</text>
          <text x="535" y="79" fontSize="7" fill="hsl(var(--muted-foreground))">pitch / 10 bp</text>
          <line x1="520" y1="95" x2="520" y2="110" stroke="hsl(var(--foreground))" strokeWidth="1" />
          <text x="535" y="107" fontSize="9" fill="hsl(var(--foreground))">0.34 nm / bp</text>
          {/* Base stacking hint */}
          <text x="440" y="245" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Right-handed • Anti-parallel 5&apos;→3&apos; / 3&apos;→5&apos; • Base stacking</text>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--foreground))" />
            </marker>
          </defs>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Left: complementary double strand (A–T 2 H-bonds, G–C 3 H-bonds, purine ↔ pyrimidine). Right: right-handed double helix, pitch 3.4 nm ≈10 bp, 0.34 nm per bp.</figcaption>
      </figure>
      <Expandable title="Why does purine–pyrimidine pairing keep distance constant?">
        <p>Purine (double ring) opposite pyrimidine (single ring) gives roughly constant width. Purine–purine would be too wide, pyrimidine–pyrimidine too narrow — Chargaff’s pairing solves this.</p>
      </Expandable>
      <KeyPoint title="Central Dogma — Crick">
        Genetic information flows <Highlight color="yellow">DNA → RNA → Protein</Highlight>. In some viruses flow reverses: <strong>RNA → DNA</strong> (reverse transcription).
      </KeyPoint>

      <h3 id="h-5-1-2">5.1.2 Packaging of DNA Helix</h3>
      <MetricCard label="DNA in a mammalian cell" value="2.2 metres" unit="6.6 × 10⁹ bp × 0.34 nm/bp" trend="up" description="Far larger than nucleus (~10⁻⁶ m). Must be packaged." />
      <Expandable title="Do the calculation: E. coli DNA 1.36 mm → how many bp?">
        <p>1.36 mm = 1.36 × 10⁻³ m. Divide by 0.34 × 10⁻⁹ m/bp → <strong>4 × 10⁶ bp</strong> (≈ 4.6 × 10⁶ bp with precise constants).</p>
      </Expandable>
      <ProcessCard
        steps={[
          { label: "Prokaryotes — nucleoid", description: "No defined nucleus. Negatively charged DNA held with positively charged proteins in large loops in region called nucleoid." },
          { label: "Eukaryotes — histones", description: "Positively charged basic proteins rich in lysine & arginine. Eight molecules form histone octamer." },
          { label: "Nucleosome", description: "Negatively charged DNA wrapped around histone octamer → ~200 bp per nucleosome (Figure 5.4a). Repeating unit of chromatin." },
          { label: "Beads-on-string", description: "Nucleosomes seen as beads-on-string under EM (Figure 5.4b). Further coiled into chromatin fibres → condensed at metaphase into chromosomes. Needs additional NHC proteins." },
        ]}
      />
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 220" role="img" aria-label="Figure 5.4a Nucleosome and Figure 5.4b Beads-on-String — DNA wrapped around histone octamer and chromatin beads-on-string under electron microscope" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="219" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="160" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.4a — Nucleosome</text>
          {/* Histone octamer */}
          <g>
            <circle cx="110" cy="110" r="22" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.4" />
            <circle cx="135" cy="100" r="22" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.4" />
            <circle cx="135" cy="125" r="22" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.4" />
            <circle cx="160" cy="110" r="22" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.4" />
            <circle cx="110" cy="135" r="14" fill="#fef3c7" stroke="#f59e0b" />
            <circle cx="160" cy="85" r="14" fill="#fef3c7" stroke="#f59e0b" />
            <circle cx="185" cy="110" r="14" fill="#fef3c7" stroke="#f59e0b" />
            <circle cx="85" cy="110" r="14" fill="#fef3c7" stroke="#f59e0b" />
            <text x="135" y="115" textAnchor="middle" fontSize="9" fontWeight="700" fill="#92400e">8 histones</text>
            <text x="135" y="128" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Lys + Arg rich</text>
          </g>
          {/* DNA wrapping */}
          <path d="M 40 70 C 70 50, 130 40, 180 60 S 250 140, 210 170 S 80 190, 50 150" fill="none" stroke="#3b82f6" strokeWidth="3" />
          <path d="M 50 150 C 80 170, 150 190, 200 165" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6 3" />
          <text x="135" y="195" textAnchor="middle" fontSize="9" fill="#2563eb">~200 bp DNA wrapped (≈1.65 turns)</text>
          <text x="135" y="208" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Negatively charged DNA → positively charged octamer</text>
          {/* Divider */}
          <line x1="320" y1="20" x2="320" y2="200" stroke="hsl(var(--border))" strokeDasharray="6 6" />
          <text x="480" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.4b — Beads-on-String (EM)</text>
          {/* Beads */}
          <g>
            <circle cx="360" cy="110" r="18" fill="#fef3c7" stroke="#f59e0b" />
            <circle cx="410" cy="110" r="18" fill="#fef3c7" stroke="#f59e0b" />
            <circle cx="460" cy="110" r="18" fill="#fef3c7" stroke="#f59e0b" />
            <circle cx="510" cy="110" r="18" fill="#fef3c7" stroke="#f59e0b" />
            <circle cx="560" cy="110" r="18" fill="#fef3c7" stroke="#f59e0b" />
            {/* String */}
            <line x1="378" y1="110" x2="392" y2="110" stroke="#3b82f6" strokeWidth="2" />
            <line x1="428" y1="110" x2="442" y2="110" stroke="#3b82f6" strokeWidth="2" />
            <line x1="478" y1="110" x2="492" y2="110" stroke="#3b82f6" strokeWidth="2" />
            <line x1="528" y1="110" x2="542" y2="110" stroke="#3b82f6" strokeWidth="2" />
            <text x="360" y="90" textAnchor="middle" fontSize="8" fill="hsl(var(--foreground))">Nucleosome</text>
            <text x="410" y="90" textAnchor="middle" fontSize="8" fill="hsl(var(--foreground))">Nucleosome</text>
            <text x="460" y="140" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Linker DNA</text>
            <text x="480" y="175" textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))">Chromatin → coiled → Chromosomes (metaphase)</text>
            <text x="480" y="190" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Requires NHC proteins for higher packaging</text>
          </g>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Left: nucleosome — 8 histones (Lys/Arg rich) + ~200 bp DNA wrapped. Right: beads-on-string chromatin viewed under EM; further coiling forms chromosomes.</figcaption>
      </figure>
      <Comparison
        columns={[
          {
            title: "Euchromatin",
            children: (
              <ul>
                <li>Loosely packed, stains <strong>light</strong></li>
                <li><Highlight color="green">Transcriptionally active</Highlight></li>
              </ul>
            ),
          },
          {
            title: "Heterochromatin",
            children: (
              <ul>
                <li>Densely packed, stains <strong>dark</strong></li>
                <li><Highlight color="pink">Inactive</Highlight></li>
              </ul>
            ),
          },
        ]}
      />
      <Expandable title="How many nucleosomes in a mammalian cell?">
        <p>Diploid DNA 6.6 × 10⁹ bp ÷ 200 bp/nucleosome ≈ <strong>3.3 × 10⁷ nucleosomes</strong>. Tightly coiled at metaphase into 46 chromosomes via NHC proteins.</p>
      </Expandable>

      <h2 id="h-5-2">5.2 The Search for Genetic Material</h2>
      <p>
        Meischer’s nuclein (1869) and Mendel’s factors were simultaneous, but “DNA is the genetic material” took decades. By 1926 chromosomes in the nucleus were narrowed as carriers — but which molecule?
      </p>

      <h3 id="h-5-2-transforming">Transforming Principle — Griffith (1928)</h3>
      <Stepper
        steps={[
          { label: "S and R strains", description: "S. pneumoniae S strain → smooth shiny colonies + polysaccharide coat, virulent (kills mice). R strain → rough colonies, no coat, non-virulent." },
          { label: "Heat-killed S alone", description: "Injected into mice → mice live. Bacteria dead." },
          { label: "Live R alone", description: "Mice live." },
          { label: "Heat-killed S + Live R", description: "Mice die. Living S bacteria recovered from dead mice — R had been transformed." },
        ]}
      />
      <KeyPoint title="Griffith’s conclusion">
        Some <Highlight color="yellow">transforming principle</Highlight> from heat-killed S enabled R to make a smooth coat and become virulent — transfer of genetic material. Biochemical nature not defined yet.
      </KeyPoint>

      <h3 id="h-5-2-avery">Biochemical Characterisation — Avery, MacLeod, McCarty (1933–44)</h3>
      <Callout type="important">
        Genetic material was thought to be <strong>protein</strong>. They purified proteins, DNA, RNA from heat-killed S and tested transformation of live R → S.
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>DNA alone</strong> caused transformation.</li>
          <li>Proteases & RNases → transformation <strong>unaffected</strong> (not protein/RNA).</li>
          <li>DNase → transformation <strong>inhibited</strong>.</li>
        </ul>
        Conclusion: <Highlight color="yellow">DNA is the hereditary material</Highlight> — but not all biologists convinced.
      </Callout>
      <Expandable title="DNAs vs DNase — what’s the difference?">
        <p><strong>DNA</strong> is the polymer (genetic material). <strong>DNase</strong> is the enzyme that digests DNA. Avery used DNase to prove DNA’s role.</p>
      </Expandable>

      <h3 id="h-5-2-1">5.2.1 The Genetic Material is DNA — Hershey–Chase (1952)</h3>
      <ProcessCard
        steps={[
          { label: "Bacteriophage attaches", description: "Phage genetic material enters bacterial cell; bacterial machinery makes more phages." },
          { label: "Label separately", description: "Grow phages on ³²P medium → radioactive DNA (DNA has P, protein doesn’t). Grow on ³⁵S medium → radioactive protein (DNA has no S)." },
          { label: "Infect + blend + centrifuge", description: "Radioactive phages attach to E. coli. Blend to shear coats, centrifuge to separate bacteria (pellet) from coats (supernatant)." },
          { label: "Result", description: "Bacteria with ³²P-DNA phages → radioactive (DNA entered). Bacteria with ³⁵S-protein phages → not radioactive (protein did not enter)." },
        ]}
      />
      <KeyPoint title="Unequivocal proof">
        <Highlight color="yellow">DNA is the genetic material</Highlight> passed from virus to bacteria (Figure 5.5).
      </KeyPoint>
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 200" role="img" aria-label="Figure 5.5 The Hershey-Chase experiment — 32P labeled DNA vs 35S labeled protein, blender and centrifuge separation" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="199" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.5 — Hershey–Chase Experiment</text>
          {/* Left: 32P DNA */}
          <g>
            <rect x="20" y="36" width="190" height="150" rx="10" fill="#dbeafe" stroke="#93c5fd" />
            <text x="115" y="55" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e40af">³²P — DNA labeled</text>
            <circle cx="70" cy="85" r="18" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <text x="70" y="89" textAnchor="middle" fontSize="8" fill="#1e40af">Phage</text>
            <text x="70" y="105" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">DNA ³²P</text>
            <line x1="88" y1="85" x2="115" y2="85" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#arrowH)" />
            <rect x="120" y="70" width="50" height="30" rx="6" fill="#fef3c7" stroke="#f59e0b" />
            <text x="145" y="88" textAnchor="middle" fontSize="8" fill="#92400e">E. coli</text>
            <text x="115" y="122" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1e40af">Blender → Centrifuge</text>
            <text x="115" y="138" fontSize="8" fill="hsl(var(--foreground))">• Supernatant: coats (no ³²P)</text>
            <text x="115" y="152" fontSize="8" fill="#1e40af" fontWeight="600">• Pellet (bacteria): radioactive ✓</text>
            <text x="115" y="168" fontSize="7" fill="hsl(var(--muted-foreground))">DNA entered</text>
          </g>
          <line x1="225" y1="40" x2="225" y2="175" stroke="hsl(var(--border))" strokeDasharray="6 6" />
          {/* Right: 35S Protein */}
          <g>
            <rect x="240" y="36" width="190" height="150" rx="10" fill="#fee2e2" stroke="#fca5a5" />
            <text x="335" y="55" textAnchor="middle" fontSize="10" fontWeight="600" fill="#991b1b">³⁵S — Protein labeled</text>
            <circle cx="285" cy="85" r="18" fill="none" stroke="#ef4444" strokeWidth="2" />
            <text x="285" y="89" textAnchor="middle" fontSize="8" fill="#991b1b">Phage</text>
            <text x="285" y="105" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Protein ³⁵S</text>
            <line x1="303" y1="85" x2="330" y2="85" stroke="#64748b" strokeWidth="1.2" />
            <rect x="335" y="70" width="50" height="30" rx="6" fill="#fef3c7" stroke="#f59e0b" />
            <text x="360" y="88" textAnchor="middle" fontSize="8" fill="#92400e">E. coli</text>
            <text x="335" y="122" textAnchor="middle" fontSize="8" fontWeight="600" fill="#991b1b">Blender → Centrifuge</text>
            <text x="335" y="138" fontSize="8" fill="#991b1b" fontWeight="600">• Supernatant: radioactive ✓</text>
            <text x="335" y="152" fontSize="8" fill="hsl(var(--foreground))">• Pellet: not radioactive</text>
            <text x="335" y="168" fontSize="7" fill="hsl(var(--muted-foreground))">Protein did not enter</text>
          </g>
          {/* Conclusion */}
          <rect x="455" y="50" width="170" height="120" rx="10" fill="#f0fdf4" stroke="#86efac" />
          <text x="540" y="70" textAnchor="middle" fontSize="10" fontWeight="600" fill="#166534">Conclusion</text>
          <text x="540" y="88" textAnchor="middle" fontSize="9" fill="hsl(var(--foreground))">DNA is the</text>
          <text x="540" y="102" textAnchor="middle" fontSize="9" fontWeight="700" fill="#16a34a">genetic material</text>
          <text x="540" y="120" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">passed from virus</text>
          <text x="540" y="132" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">to bacteria</text>
          <defs>
            <marker id="arrowH" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
            </marker>
          </defs>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">³²P (DNA) → pellet radioactive; ³⁵S (protein) → supernatant radioactive. DNA enters bacteria.</figcaption>
      </figure>

      <h3 id="h-5-2-2">5.2.2 Properties of Genetic Material (DNA vs RNA)</h3>
      <p>In some viruses (TMV, QB bacteriophage) RNA is the genetic material. Why is DNA predominant while RNA is messenger/adapter?</p>
      <TableCard
        caption="Four criteria for a molecule to act as genetic material"
        headers={["Criterion", "DNA", "RNA", "Protein"]}
        rows={[
          { cells: ["(i) Replica (replication)", "Yes — complementarity directs duplication", "Yes — can duplicate", "Cannot direct its own duplication"] },
          { cells: ["(ii) Stability (chemical/structural)", "High — less reactive, double-stranded, thymine + repair", "Low — 2&apos;-OH reactive, catalytic, labile", "Varies"] },
          { cells: ["(iii) Scope for mutation/evolution", "Mutates but slower (stable)", "Mutates faster (unstable) → RNA viruses evolve faster", "—"] },
          { cells: ["(iv) Express as Mendelian characters", "Via RNA → protein (needs RNA for expression)", "Directly codes for protein", "End product"] },
        ]}
      />
      <Callout type="note">
        <strong>Why DNA is better for storage:</strong> 2&apos;-OH in every RNA nucleotide makes RNA labile; RNA is catalytic/reactive; DNA is less reactive, double-stranded, with repair. Thymine (vs uracil) adds stability.
      </Callout>
      <KeyPoint title="Which for what?">
        <Highlight color="yellow">DNA</Highlight> for <strong>storage</strong>, <Highlight color="green">RNA</Highlight> for <strong>transmission</strong>. RNA is more reactive and mutates faster — hence RNA-genome viruses have short life and evolve fast.
      </KeyPoint>

      <h2 id="h-5-3">5.3 RNA World</h2>
      <Callout type="important">
        <Highlight color="yellow">RNA was the first genetic material</Highlight>. Essential life processes (metabolism, translation, splicing) evolved around RNA.
      </Callout>
      <ul>
        <li>RNA acted as <strong>genetic material + catalyst</strong> (important biochemical reactions catalysed by RNA, not protein enzymes).</li>
        <li>As catalyst, RNA was <strong>reactive and unstable</strong> → DNA evolved from RNA via chemical modifications for stability.</li>
        <li>Double-stranded + complementary strand + <Highlight color="green">repair process</Highlight> further resists changes.</li>
      </ul>

      <h2 id="h-5-4">5.4 Replication</h2>
      <Callout type="note" title="Watson–Crick 1953">
        “It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible <strong>copying mechanism</strong>.”
        Each strand separates and acts as template for new complementary strand → after replication each DNA has <Highlight color="yellow">one parental + one new strand</Highlight> → <strong>semiconservative</strong> (Figure 5.6).
      </Callout>
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 170" role="img" aria-label="Figure 5.6 Watson-Crick model for semiconservative DNA replication — parental strands separate and each directs synthesis of complementary new strand" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="169" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.6 — Semiconservative Replication (Watson–Crick)</text>
          {/* Parental */}
          <g>
            <text x="110" y="45" textAnchor="middle" fontSize="10" fontWeight="600" fill="hsl(var(--foreground))">Parental DNA</text>
            <rect x="50" y="55" width="120" height="14" rx="7" fill="#dbeafe" stroke="#93c5fd" />
            <rect x="50" y="75" width="120" height="14" rx="7" fill="#dbeafe" stroke="#93c5fd" />
            <text x="110" y="66" textAnchor="middle" fontSize="8" fill="#1e40af">3&apos;→5&apos; (parental)</text>
            <text x="110" y="86" textAnchor="middle" fontSize="8" fill="#1e40af">5&apos;→3&apos; (parental)</text>
            <line x1="110" y1="89" x2="110" y2="105" stroke="hsl(var(--foreground))" strokeDasharray="3 3" />
            <text x="110" y="102" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">separate</text>
          </g>
          <text x="210" y="75" fontSize="14" fill="hsl(var(--muted-foreground))">→</text>
          {/* Daughter 1 */}
          <g>
            <text x="360" y="45" textAnchor="middle" fontSize="10" fontWeight="600" fill="hsl(var(--foreground))">Daughter 1</text>
            <rect x="280" y="55" width="120" height="14" rx="7" fill="#dbeafe" stroke="#93c5fd" />
            <rect x="280" y="75" width="120" height="14" rx="7" fill="#dcfce7" stroke="#86efac" />
            <text x="340" y="66" textAnchor="middle" fontSize="8" fill="#1e40af">parental</text>
            <text x="340" y="86" textAnchor="middle" fontSize="8" fill="#166534">new</text>
          </g>
          {/* Daughter 2 */}
          <g>
            <text x="540" y="45" textAnchor="middle" fontSize="10" fontWeight="600" fill="hsl(var(--foreground))">Daughter 2</text>
            <rect x="480" y="55" width="120" height="14" rx="7" fill="#dcfce7" stroke="#86efac" />
            <rect x="480" y="75" width="120" height="14" rx="7" fill="#dbeafe" stroke="#93c5fd" />
            <text x="540" y="66" textAnchor="middle" fontSize="8" fill="#166534">new</text>
            <text x="540" y="86" textAnchor="middle" fontSize="8" fill="#1e40af">parental</text>
          </g>
          {/* Legend */}
          <g fontSize="8">
            <rect x="180" y="120" width="14" height="10" rx="3" fill="#dbeafe" stroke="#93c5fd" />
            <text x="200" y="129" fill="hsl(var(--foreground))">Parental strand</text>
            <rect x="300" y="120" width="14" height="10" rx="3" fill="#dcfce7" stroke="#86efac" />
            <text x="320" y="129" fill="hsl(var(--foreground))">Newly synthesised</text>
          </g>
          <text x="320" y="150" textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))">Each daughter: one parental + one new → semiconservative</text>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Each parental strand as template → two daughters identical to parental, each with one old + one new strand.</figcaption>
      </figure>

      <h3 id="h-5-4-1">5.4.1 The Experimental Proof — Meselson & Stahl (1958)</h3>
      <Stepper
        steps={[
          { label: "Grow in ¹⁵N", description: "E. coli in ¹⁵NH₄Cl (heavy N) for many generations → heavy DNA (¹⁵N). Distinguish by CsCl density gradient (¹⁵N not radioactive, separated by density only)." },
          { label: "Shift to ¹⁴N", description: "Transfer to normal ¹⁴NH₄Cl. Sample at 20 min (1 gen), 40 min (2 gens), extract dsDNA, centrifuge on CsCl." },
          { label: "Results", description: "After 1 gen (20 min): single hybrid/intermediate density band. After 2 gens (40 min): equal hybrid + light bands. After 80 min → predict 6/8 light + 2/8 hybrid." },
        ]}
      />
      <Comparison
        columns={[
          {
            title: "One generation (20 min)",
            children: <p>All DNA <Highlight color="yellow">hybrid (¹⁵N/¹⁴N)</Highlight> density</p>,
          },
          {
            title: "Two generations (40 min)",
            children: <p>50% hybrid + 50% <Highlight color="green">light (¹⁴N/¹⁴N)</Highlight></p>,
          },
        ]}
      />
      <Expandable title="If grown for 80 min → proportions?">
        <p>80 min = 4 generations (dividing every 20 min). Start 2 strands heavy. After n gens: 2 hybrid + (2ⁿ – 2) light. For 80 min (4 gens, 16 strands): <strong>2 hybrid : 14 light = 1:7</strong>. Tellingly, Taylor et al. (1958) with radioactive thymidine on <em>Vicia faba</em> chromosomes showed same semiconservative replication in eukaryotes.</p>
      </Expandable>
      <Callout type="note" title="Centrifugation note">
        Can you recall centrifugal force? Higher mass/density sediments faster → heavy (¹⁵N) at bottom, light (¹⁴N) at top, hybrid in middle on CsCl gradient (Figure 5.7).
      </Callout>
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 220" role="img" aria-label="Figure 5.7 Meselson and Stahl's Experiment — CsCl density gradient showing 15N heavy, 14N light, and hybrid DNA after generations" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="219" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.7 — Meselson & Stahl (CsCl Gradient)</text>
          {/* 0 gen heavy */}
          <g>
            <text x="110" y="48" textAnchor="middle" fontSize="10" fontWeight="600" fill="hsl(var(--foreground))">0 gen (¹⁵N)</text>
            <rect x="50" y="60" width="120" height="100" rx="6" fill="#f8fafc" stroke="hsl(var(--border))" />
            <rect x="60" y="95" width="100" height="10" rx="5" fill="#1e3a8a" />
            <text x="110" y="103" textAnchor="middle" fontSize="8" fill="white">Heavy (¹⁵N/¹⁵N)</text>
            <text x="110" y="145" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Bottom</text>
            <text x="110" y="155" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">CsCl dense</text>
          </g>
          {/* 1 gen hybrid */}
          <g>
            <text x="320" y="48" textAnchor="middle" fontSize="10" fontWeight="600" fill="hsl(var(--foreground))">1 gen (20 min, hybrid)</text>
            <rect x="260" y="60" width="120" height="100" rx="6" fill="#f8fafc" stroke="hsl(var(--border))" />
            <rect x="270" y="100" width="100" height="10" rx="5" fill="#a78bfa" />
            <text x="320" y="108" textAnchor="middle" fontSize="8" fill="white">Hybrid (¹⁵N/¹⁴N)</text>
            <text x="320" y="130" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Middle — intermediate</text>
          </g>
          {/* 2 gens */}
          <g>
            <text x="530" y="48" textAnchor="middle" fontSize="10" fontWeight="600" fill="hsl(var(--foreground))">2 gens (40 min)</text>
            <rect x="470" y="60" width="120" height="100" rx="6" fill="#f8fafc" stroke="hsl(var(--border))" />
            <rect x="480" y="85" width="100" height="10" rx="5" fill="#a78bfa" />
            <text x="530" y="93" textAnchor="middle" fontSize="7" fill="white">Hybrid</text>
            <rect x="480" y="115" width="100" height="10" rx="5" fill="#60a5fa" />
            <text x="530" y="123" textAnchor="middle" fontSize="7" fill="white">Light (¹⁴N/¹⁴N)</text>
            <text x="530" y="145" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">50% hybrid + 50% light</text>
          </g>
          <text x="320" y="185" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Heavy = bottom, Light = top — intermediate = hybrid. After 80 min → 1:7 (2 hybrid : 14 light)</text>
          <text x="320" y="200" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Taylor (Vicia faba, ³H-thymidine) confirms same in eukaryotes</text>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">CsCl gradient: heavy (¹⁵N) bottom, light (¹⁴N) top; 1 gen → single hybrid band, 2 gens → hybrid + light.</figcaption>
      </figure>

      <h3 id="h-5-4-2">5.4.2 The Machinery and the Enzymes</h3>
      <FactCard
        title="Main enzyme"
        definition="DNA-dependent DNA polymerase — uses DNA template to polymerise deoxynucleotides. E. coli 4.6×10⁶ bp vs human diploid 6.6×10⁹ bp. E. coli finishes in 18 min → ~2000 bp/s. Must be fast and highly accurate; errors → mutations."
        icon="⚙️"
      />
      <ul>
        <li><strong>Energy:</strong> Deoxyribonucleoside triphosphates act as substrates <em>and</em> energy source (two terminal high-energy phosphates like ATP).</li>
        <li><strong>Replication fork:</strong> Cannot separate whole long DNA at once — replication within small opening called <Highlight color="blue">replication fork</Highlight>.</li>
        <li>Polymerase catalyses only <Highlight color="yellow">5&apos;→3&apos;</Highlight> → one template (3&apos;→5&apos;) → <strong>continuous</strong> replication; the other (5&apos;→3&apos;) → <strong>discontinuous</strong> (Okazaki) fragments later joined by <strong>DNA ligase</strong> (Figure 5.8).</li>
        <li>Cannot initiate on its own; needs <strong>origin of replication</strong> — definite region in E. coli DNA. Vectors need origin to propagate in recombinant DNA procedures.</li>
      </ul>
      <Callout type="note">
        In eukaryotes replication at <Highlight color="yellow">S-phase</Highlight>, tightly coordinated with cell cycle. Failure after replication without division → <strong>polyploidy</strong> (chromosomal anomaly). Detailed origin structure — higher classes.
      </Callout>
      <MistakeCard
        mistake="Thinking both strands replicate continuously."
        correction="Remember: polymerase only 5'→3', so one strand must be discontinuous. Template 3'→5' = continuous; Template 5'→3' = discontinuous + ligase."
      />

            <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 220" role="img" aria-label="Figure 5.8 Replicating Fork — continuous vs discontinuous synthesis, DNA ligase joins Okazaki fragments, origin of replication" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="219" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.8 — Replicating Fork</text>
          {/* Parental duplex left */}
          <line x1="40" y1="60" x2="40" y2="180" stroke="#64748b" strokeWidth="3" />
          <line x1="70" y1="60" x2="70" y2="180" stroke="#64748b" strokeWidth="3" />
          <text x="55" y="50" fontSize="8" fill="hsl(var(--muted-foreground))">Parental</text>
          {/* Fork */}
          <path d="M 70 90 C 120 90, 180 100, 220 110" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <path d="M 40 150 C 90 150, 160 140, 220 130" fill="none" stroke="#22c55e" strokeWidth="2" />
          <text x="140" y="85" fontSize="8" fill="#2563eb">3&apos;→5&apos; template</text>
          <text x="140" y="165" fontSize="8" fill="#16a34a">5&apos;→3&apos; template</text>
          {/* Leading continuous */}
          <line x1="220" y1="110" x2="520" y2="110" stroke="#2563eb" strokeWidth="3" />
          <polygon points="520,106 540,110 520,114" fill="#2563eb" />
          <text x="370" y="102" fontSize="8" fill="#1e40af" fontWeight="600">Continuous (leading) → 5&apos;→3&apos;</text>
          {/* Lagging Okazaki */}
          <g stroke="#16a34a" strokeWidth="2.5">
            <line x1="240" y1="130" x2="310" y2="130" />
            <polygon points="310,126 325,130 310,134" fill="#16a34a" />
            <line x1="340" y1="130" x2="410" y2="130" />
            <polygon points="410,126 425,130 410,134" fill="#16a34a" />
            <line x1="440" y1="130" x2="510" y2="130" />
            <polygon points="510,126 525,130 510,134" fill="#16a34a" />
          </g>
          <text x="380" y="148" fontSize="8" fill="#166534">Discontinuous (lagging) — Okazaki fragments</text>
          <text x="380" y="160" fontSize="7" fill="hsl(var(--muted-foreground))">later joined by DNA ligase • Polymerase only 5&apos;→3&apos;</text>
          {/* Origin */}
          <rect x="40" y="190" width="180" height="18" rx="6" fill="#fef3c7" stroke="#fde68a" />
          <text x="130" y="202" textAnchor="middle" fontSize="8" fill="#92400e">Origin of replication (vector needs it)</text>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Fork: continuous on 3&apos;→5&apos; template, discontinuous Okazaki on 5&apos;→3&apos; template (ligase joins); origin required.</figcaption>
      </figure>

      <h2 id="h-5-5">5.5 Transcription</h2>
      <Callout type="important">
        Copying genetic information from <Highlight color="yellow">one strand of DNA into RNA</Highlight>. Principle of complementarity — but A pairs with <strong>U</strong> (not T). Unlike replication (whole DNA duplicated), only <strong>one segment + one strand</strong> is copied.
      </Callout>
      <Expandable title="Why aren’t both strands copied?">
        <ul>
          <li>If both strands as templates → two different RNAs (complementary ≠ identical) → code for two different proteins from one segment → complicates information transfer.</li>
          <li>Two complementary RNAs made simultaneously would form dsRNA → cannot be translated → transcription becomes futile.</li>
        </ul>
      </Expandable>

      <h3 id="h-5-5-1">5.5.1 Transcription Unit</h3>
      <p>A transcription unit in DNA is defined by three regions:</p>
      <ConceptCard title="Transcription unit — three parts">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Promoter:</strong> Towards 5&apos; end (upstream) of structural gene (w.r.t. coding strand). Binding site for RNA polymerase; defines template vs coding strands.</li>
          <li><strong>Structural gene:</strong> Region transcribed.</li>
          <li><strong>Terminator:</strong> Towards 3&apos; end (downstream) of coding strand; defines end of transcription.</li>
        </ul>
      </ConceptCard>
      <Callout type="note" title="Template vs Coding strand — convention">
        <p>Polymerase also works 5&apos;→3&apos;, so the strand with polarity <Highlight color="yellow">3&apos;→5&apos;</Highlight> acts as <strong>template strand</strong>. The other strand (5&apos;→3&apos;), same sequence as RNA (T instead of U), is <strong>coding strand</strong> (does not code, strange name) — displaced during transcription. Reference point is coding strand. Example:</p>
        <p className="font-mono text-sm bg-muted p-2 rounded">3&apos;-ATGCATGCATGC-5&apos; Template<br />5&apos;-TACGTACGTACG-3&apos; Coding</p>
        <p className="text-sm">RNA transcribed from above template? <strong>5&apos;-UACGUACGUACG-3&apos;</strong> (complement of template, same as coding except U).</p>
        <p className="text-sm text-muted-foreground mt-2">Figure 5.9 schematic. Promoter↔terminator swap would reverse coding/template definitions. Additional regulatory sequences may lie further upstream/downstream — discussed in gene regulation.</p>
      </Callout>

            <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 170" role="img" aria-label="Figure 5.9 Schematic structure of a transcription unit — promoter, structural gene, terminator, coding vs template strands" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="169" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.9 — Transcription Unit</text>
          {/* DNA duplex line */}
          <rect x="40" y="50" width="560" height="24" rx="6" fill="#fef3c7" stroke="#fde68a" />
          <rect x="40" y="80" width="560" height="24" rx="6" fill="#dbeafe" stroke="#93c5fd" />
          <text x="45" y="66" fontSize="8" fill="#92400e">5&apos; → 3&apos; Coding strand (same as RNA, T→U)</text>
          <text x="45" y="96" fontSize="8" fill="#1e40af">3&apos; → 5&apos; Template strand</text>
          {/* Regions */}
          <rect x="40" y="115" width="120" height="30" rx="6" fill="#e0e7ff" stroke="#a5b4fc" />
          <text x="100" y="133" textAnchor="middle" fontSize="9" fontWeight="600" fill="#4338ca">Promoter</text>
          <text x="100" y="143" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">5&apos; upstream</text>
          <rect x="170" y="115" width="260" height="30" rx="6" fill="#dcfce7" stroke="#86efac" />
          <text x="300" y="133" textAnchor="middle" fontSize="9" fontWeight="600" fill="#166534">Structural gene</text>
          <rect x="440" y="115" width="120" height="30" rx="6" fill="#fee2e2" stroke="#fca5a5" />
          <text x="500" y="133" textAnchor="middle" fontSize="9" fontWeight="600" fill="#991b1b">Terminator</text>
          <text x="500" y="143" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">3&apos; downstream</text>
          <text x="320" y="162" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Swap promoter/terminator → coding/template definitions reverse • Regulatory sequences further upstream/downstream</text>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Promoter (upstream, 5&apos;) — Structural gene — Terminator (downstream, 3&apos;); template 3&apos;→5&apos;, coding 5&apos;→3&apos;.</figcaption>
      </figure>

      <h3 id="h-5-5-2">5.5.2 Transcription Unit and the Gene</h3>
      <Callout type="note">
        <strong>Gene</strong> = functional unit of inheritance. Difficult to define strictly as DNA sequence.
      </Callout>
      <ul>
        <li>tRNA/rRNA coding DNA also defines a <strong>gene</strong>.</li>
        <li>Define <Highlight color="yellow">cistron</Highlight> as segment coding for polypeptide → structural gene can be <strong>monocistronic</strong> (mostly eukaryotes) or <strong>polycistronic</strong> (mostly bacteria/prokaryotes).</li>
        <li>Eukaryotic monocistronic genes are <strong>split</strong>: coding <strong>exons</strong> (appear in mature RNA) interrupted by <strong>introns</strong> (intervening, removed). Split arrangement complicates gene definition.</li>
        <li>Promoter/regulatory sequences affect inheritance but don’t code → loosely called <strong>regulatory genes</strong>.</li>
      </ul>

      <h3 id="h-5-5-3">5.5.3 Types of RNA and the process of Transcription</h3>
      <TableCard
        caption="Three major RNAs in bacteria"
        headers={["RNA", "Role"]}
        rows={[
          { cells: ["mRNA (messenger)", "Provides template"] },
          { cells: ["tRNA (transfer)", "Brings amino acids, reads code"] },
          { cells: ["rRNA (ribosomal)", "Structural + catalytic during translation"] },
        ]}
      />
      <ProcessCard
        steps={[
          { label: "Bacteria — single polymerase", description: "One DNA-dependent RNA polymerase transcribes all RNAs. Binds promoter → initiation (uses NTPs as substrate, opens helix, elongates; short RNA stays bound). At terminator, nascent RNA + polymerase fall off → termination (Figure 5.10)." },
          { label: "σ and ρ factors", description: "Polymerase alone can only elongate. Associates transiently with initiation-factor σ and termination-factor ρ to alter specificity to initiate/terminate." },
          { label: "Coupled in bacteria", description: "mRNA needs no processing and transcription/translation in same compartment → translation can begin before mRNA fully transcribed — coupled." },
        ]}
      />
            <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 180" role="img" aria-label="Figure 5.10 Process of Transcription in Bacteria — RNA polymerase binds promoter with sigma, elongation, rho termination" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="179" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.10 — Transcription in Bacteria</text>
          <g fontSize="8">
            <rect x="30" y="40" width="110" height="30" rx="8" fill="#e0e7ff" stroke="#a5b4fc" />
            <text x="85" y="58" textAnchor="middle" fontWeight="600" fill="#4338ca">Promoter</text>
            <text x="85" y="68" textAnchor="middle" fill="hsl(var(--muted-foreground))">+ σ factor</text>
            <text x="160" y="58" fontSize="14" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="180" y="40" width="150" height="30" rx="8" fill="#fef3c7" stroke="#fde68a" />
            <text x="255" y="58" textAnchor="middle" fontWeight="600" fill="#92400e">RNA Pol + NTPs</text>
            <text x="255" y="68" textAnchor="middle" fill="hsl(var(--muted-foreground))">opens helix, elongates</text>
            <text x="350" y="58" fontSize="14" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="370" y="40" width="110" height="30" rx="8" fill="#fee2e2" stroke="#fca5a5" />
            <text x="425" y="58" textAnchor="middle" fontWeight="600" fill="#991b1b">Terminator</text>
            <text x="425" y="68" textAnchor="middle" fill="hsl(var(--muted-foreground))">+ ρ factor</text>
            <text x="505" y="58" fontSize="10" fill="hsl(var(--foreground))">RNA + Pol fall off</text>
          </g>
          <text x="320" y="95" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Polymerase alone can only elongate — σ for initiation, ρ for termination alter specificity</text>
          <rect x="30" y="110" width="580" height="50" rx="8" fill="#f0fdf4" stroke="#86efac" />
          <text x="320" y="128" textAnchor="middle" fontSize="9" fontWeight="600" fill="#166534">No processing needed • Transcription &amp; translation in same compartment → coupled</text>
          <text x="320" y="145" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Translation can begin before mRNA fully transcribed</text>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Bacterial: single RNA polymerase + σ (initiation) / ρ (termination); coupled transcription-translation.</figcaption>
      </figure>

      <Comparison
        columns={[{
            title: "Bacteria",
            children: (
              <ul>
                <li>One polymerase for all RNAs</li>
                <li>σ/ρ factors</li>
                <li>No processing; coupled transcription-translation</li>
              </ul>
            ),
          },
          {
            title: "Eukaryotes — two complexities",
            children: (
              <ul>
                <li>3 polymerases in nucleus + organellar ones</li>
                <li>Primary transcripts have exons + introns → splicing + capping + tailing</li>
              </ul>
            ),
          },
        ]}
      />
      <FactCard
        title="Eukaryotic polymerases — division of labour"
        definition="Pol I → rRNAs (28S, 18S, 5.8S); Pol III → tRNA, 5S rRNA, snRNAs; Pol II → precursor mRNA (hnRNA)."
        icon="🧬"
      />
      <ProcessCard
        steps={[
          { label: "Splicing", description: "Introns removed, exons joined in defined order." },
          { label: "Capping", description: "Unusual nucleotide methyl guanosine triphosphate added to 5&apos; end of hnRNA." },
          { label: "Tailing", description: "Adenylate residues (200–300) added at 3&apos; end template-independently (poly-A tail)." },
          { label: "Export", description: "Fully processed hnRNA now called mRNA transported out of nucleus for translation (Figure 5.11)." },
        ]}
      />
            <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 200" role="img" aria-label="Figure 5.11 Process of Transcription in Eukaryotes — three polymerases, splicing, capping, tailing, mRNA export" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="199" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.11 — Transcription in Eukaryotes</text>
          <g fontSize="8">
            <rect x="20" y="40" width="180" height="28" rx="8" fill="#fef3c7" stroke="#fde68a" />
            <text x="110" y="58" textAnchor="middle" fontWeight="600" fill="#92400e">RNA Pol I → rRNAs</text>
            <text x="110" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">28S, 18S, 5.8S</text>
            <rect x="230" y="40" width="180" height="28" rx="8" fill="#dbeafe" stroke="#93c5fd" />
            <text x="320" y="58" textAnchor="middle" fontWeight="600" fill="#1e40af">RNA Pol II → hnRNA</text>
            <text x="320" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">precursor mRNA</text>
            <rect x="440" y="40" width="180" height="28" rx="8" fill="#dcfce7" stroke="#86efac" />
            <text x="530" y="58" textAnchor="middle" fontWeight="600" fill="#166534">RNA Pol III → tRNA, 5S, snRNAs</text>
          </g>
          <line x1="320" y1="70" x2="320" y2="90" stroke="hsl(var(--border))" />
          <rect x="120" y="92" width="400" height="28" rx="8" fill="#f8fafc" stroke="hsl(var(--border))" />
          <text x="320" y="110" textAnchor="middle" fontSize="9" fontWeight="600" fill="hsl(var(--foreground))">Primary transcript: exons + introns (non-functional)</text>
          <g fontSize="8">
            <rect x="40" y="132" width="120" height="26" rx="8" fill="#e0e7ff" stroke="#a5b4fc" />
            <text x="100" y="148" textAnchor="middle" fontWeight="600" fill="#4338ca">Splicing</text>
            <text x="180" y="148" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="200" y="132" width="120" height="26" rx="8" fill="#fef3c7" stroke="#fde68a" />
            <text x="260" y="148" textAnchor="middle" fontWeight="600" fill="#92400e">Capping (5&apos;)</text>
            <text x="340" y="148" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="360" y="132" width="120" height="26" rx="8" fill="#fee2e2" stroke="#fca5a5" />
            <text x="420" y="148" textAnchor="middle" fontWeight="600" fill="#991b1b">Tailing (3&apos;)</text>
            <text x="500" y="148" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="520" y="132" width="100" height="26" rx="8" fill="#dcfce7" stroke="#86efac" />
            <text x="570" y="148" textAnchor="middle" fontWeight="600" fill="#166534">mRNA → export</text>
          </g>
          <text x="320" y="180" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">200–300 A tail • methyl-G cap at 5&apos; • Splicing = RNA-world relic</text>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Three polymerases; hnRNA → splicing + capping + tailing → mRNA exported for translation.</figcaption>
      </figure>

      <KeyPoint title="Why such complexity?">
        Split genes probably ancient; introns reminiscent of antiquity; splicing represents dominance of <Highlight color="yellow">RNA world</Highlight>. RNA-dependent processes gaining importance.
      </KeyPoint>

      <h2 id="h-5-6">5.6 Genetic Code</h2>
      <p>
        Replication/transcription copy nucleic acid → nucleic acid (complementarity easy). Translation = nucleotides → amino acids — no complementarity, no theoretical mapping. Yet nucleic acid changes cause amino acid changes → genetic code proposes.
      </p>
      <Callout type="note" title="History — who cracked it">
        Physicist <strong>George Gamow</strong> argued: 4 bases code for 20 amino acids ⇒ combination. 3-nucleotide code: 4³ = 64 codons (&gt;20, bold proposition). <strong>Har Gobind Khorana</strong> chemical method for defined RNA (homopolymers/copolymers); <strong>Marshall Nirenberg</strong> cell-free protein synthesis; <strong>Severo Ochoa</strong> enzyme (polynucleotide phosphorylase) template-independent RNA synthesis → checkerboard Table 5.1.
      </Callout>
      <ConceptCard title="Salient features of genetic code">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>(i) Triplet:</strong> 61 codons code for amino acids, 3 do not → stop codons.</li>
          <li><strong>(ii) Degenerate:</strong> Some amino acids coded by &gt;1 codon.</li>
          <li><strong>(iii) No punctuation:</strong> Read contiguously, comma-free.</li>
          <li><strong>(iv) Nearly universal:</strong> UUU → Phe from bacteria to human. Exceptions: mitochondrial, some protozoans.</li>
          <li><strong>(v) AUG dual:</strong> Codes for Met and acts as initiator codon.</li>
          <li><strong>(vi) Stops:</strong> UAA, UAG, UGA are terminator codons.</li>
        </ul>
      </ConceptCard>
      <Expandable title="Predict: AUG UUU UUC UUC UUU UUU UUC → amino acids?">
        <p>Look up checkerboard: <strong>AUG (Met) – Phe – Phe – Phe – Phe – Phe – Phe</strong>. Tryptophan? Check.</p>
      </Expandable>
      <Expandable title="Reverse: Met-Phe-Phe-Phe-Phe-Phe-Phe → RNA sequence?">
        <p>Difficulty! Due to <Highlight color="yellow">degeneracy</Highlight> (Phe has UUU/UUC) and lack of punctuation, reverse prediction is not unique — many RNA sequences possible. Which two properties does this illustrate? Degenerate + non-punctuated.</p>
      </Expandable>

      <h3 id="h-5-6-1">5.6.1 Mutations and Genetic Code</h3>
      <p>Large deletions/rearrangements → loss/gain of gene/function. Point mutation example: single base pair change in beta-globin → Glu → Val → <Highlight color="pink">sickle cell anemia</Highlight>.</p>
      <Expandable title="Frameshift — RAM HAS RED CAP analogy">
        <ul>
          <li>Original: <strong>RAM HAS RED CAP</strong> (each word = codon).</li>
          <li>Insert B between HAS and RED → <strong>RAM HAS BRE DCA P</strong> (frame shifted).</li>
          <li>Insert BI → <strong>RAM HAS BIR EDC AP</strong></li>
          <li>Insert BIG → <strong>RAM HAS BIG RED CAP</strong> (3 letters → frame restored, one codon inserted).</li>
          <li>Delete R → <strong>RAM HAS EDC AP</strong>; Delete E → <strong>RAM HAS DCA P</strong>; Delete D → <strong>RAM HAS CAP</strong></li>
        </ul>
        <p>Conclusion: Insertion/deletion of <Highlight color="yellow">1 or 2 bases</Highlight> → <strong>frameshift</strong> from point onward. Insertion/deletion of <strong>3 or multiple of 3</strong> → one/multiple codons inserted/deleted, frame unaltered from that point.</p>
      </Expandable>

      <h3 id="h-5-6-2">5.6.2 tRNA– the Adapter Molecule</h3>
      <p>Francis Crick postulated an <Highlight color="yellow">adapter</Highlight> — amino acids have no code-reading speciality. tRNA, then sRNA (soluble RNA), later assigned role.</p>
      <FactCard
        title="tRNA structure"
        definition="Anticodon loop complementary to codon + amino acid acceptor end. Specific tRNA per amino acid (Figure 5.12). Initiator tRNA for initiation; no tRNAs for stop codons. Secondary clover-leaf → actual compact inverted L."
        icon="🔗"
      />

            <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 200" role="img" aria-label="Figure 5.12 tRNA — the adapter molecule, clover-leaf secondary to inverted L tertiary, anticodon loop and acceptor end" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="199" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.12 — tRNA: Adapter Molecule</text>
          {/* Clover leaf */}
          <g stroke="hsl(var(--border))" strokeWidth="1.2" fill="none">
            <path d="M 160 60 C 180 40, 220 40, 240 60 L 230 110 L 260 150 L 160 170 L 60 150 L 90 110 Z" fill="#f8fafc" />
            <circle cx="160" cy="70" r="16" fill="#dbeafe" stroke="#93c5fd" />
            <text x="160" y="74" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1e40af">Amino acid</text>
            <text x="160" y="84" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">acceptor end</text>
            <circle cx="160" cy="160" r="14" fill="#fef3c7" stroke="#fde68a" />
            <text x="160" y="164" textAnchor="middle" fontSize="8" fontWeight="600" fill="#92400e">Anticodon</text>
            <text x="160" y="178" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">loop</text>
          </g>
          <text x="160" y="195" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Secondary: clover-leaf</text>
          {/* Inverted L */}
          <g stroke="hsl(var(--border))" strokeWidth="1.2" fill="none">
            <path d="M 420 50 L 520 50 L 520 150 L 470 150 L 470 100 L 420 100 Z" fill="#f0fdf4" stroke="#86efac" />
            <circle cx="470" cy="50" r="14" fill="#dbeafe" stroke="#93c5fd" />
            <text x="470" y="54" textAnchor="middle" fontSize="7" fill="#1e40af">AA</text>
            <circle cx="420" cy="125" r="12" fill="#fef3c7" stroke="#fde68a" />
            <text x="420" y="129" textAnchor="middle" fontSize="7" fill="#92400e">Anti</text>
          </g>
          <text x="480" y="175" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Tertiary: inverted L (compact)</text>
          <text x="320" y="195" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Specific tRNA per amino acid • No tRNA for stop codons • Initiator tRNA for AUG</text>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Clover-leaf secondary → compact inverted L; anticodon loop + amino acid acceptor end.</figcaption>
      </figure>

      <h2 id="h-5-7">5.7 Translation</h2>
      <p>Polymerisation of amino acids to polypeptide (Figure 5.13). Order defined by mRNA base sequence. Amino acids joined by <Highlight color="yellow">peptide bond</Highlight> — needs energy.</p>
      <ProcessCard
        steps={[
          { label: "Charging / aminoacylation", description: "Amino acids activated with ATP and linked to cognate tRNA (charging). Requires energy; two charged tRNAs close enough → peptide bond formation favoured." },
          { label: "Ribosome — factory", description: "Consists of structural RNAs + ~80 proteins. Inactive as two subunits (large + small). Small subunit encounters mRNA → translation begins. Large subunit has two sites for subsequent amino acids to be close for peptide bond. Ribosome acts as catalyst — 23S rRNA in bacteria is the ribozyme." },
          { label: "Translational unit", description: "mRNA sequence flanked by start codon (AUG) and stop codon, codes for polypeptide. Additional untranslated regions (UTRs) at 5&apos; (before start) and 3&apos; (after stop) required for efficient translation." },
          { label: "Initiation → elongation → termination", description: "Ribosome binds at start codon (AUG) recognised only by initiator tRNA → elongation: aminoacyl-tRNA sequentially bind via anticodon-codon pairing, ribosome moves codon to codon, adds amino acids → release factor binds stop codon → polypeptide released." },
        ]}
      />

            <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 200" role="img" aria-label="Figure 5.13 Translation — ribosome subunits, charging, peptide bond, 23S rRNA ribozyme, UTRs" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="199" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.13 — Translation</text>
          <g fontSize="8">
            <rect x="20" y="40" width="110" height="30" rx="8" fill="#fef3c7" stroke="#fde68a" />
            <text x="75" y="58" textAnchor="middle" fontWeight="600" fill="#92400e">Charging</text>
            <text x="75" y="68" textAnchor="middle" fill="hsl(var(--muted-foreground))">AA + ATP → tRNA</text>
            <text x="140" y="58" fontSize="12" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="160" y="40" width="130" height="30" rx="8" fill="#dbeafe" stroke="#93c5fd" />
            <text x="225" y="58" textAnchor="middle" fontWeight="600" fill="#1e40af">Ribosome</text>
            <text x="225" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">80 proteins + rRNAs • 2 subunits</text>
            <text x="305" y="58" fontSize="12" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="320" y="40" width="140" height="30" rx="8" fill="#dcfce7" stroke="#86efac" />
            <text x="390" y="58" textAnchor="middle" fontWeight="600" fill="#166534">Peptide bond</text>
            <text x="390" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">23S rRNA ribozyme</text>
            <text x="470" y="58" fontSize="12" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="480" y="40" width="140" height="30" rx="8" fill="#e0e7ff" stroke="#a5b4fc" />
            <text x="550" y="58" textAnchor="middle" fontWeight="600" fill="#4338ca">Release factor</text>
            <text x="550" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">at stop codon</text>
          </g>
          <rect x="40" y="90" width="560" height="30" rx="8" fill="#f8fafc" stroke="hsl(var(--border))" />
          <text x="320" y="108" textAnchor="middle" fontSize="9" fill="hsl(var(--foreground))">mRNA: — 5&apos; UTR — [AUG —— codons —— Stop] — 3&apos; UTR —</text>
          <text x="320" y="122" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Translational unit: start to stop; UTRs for efficient translation</text>
          <text x="320" y="145" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Small subunit binds mRNA at AUG (initiator tRNA) → elongation: aa-tRNA sequentially via anticodon → ribosome moves codon to codon →</text>
          <text x="320" y="160" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Peptide bond formed between adjacent aa — catalysed by ribosome (23S rRNA)</text>
          <text x="320" y="185" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Two sites in large subunit for aa to be close • Release factor terminates</text>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Charging → ribosome (2 subunits) → peptide bond (ribozyme) → UTR-flanked translational unit.</figcaption>
      </figure>

      <h2 id="h-5-8">5.8 Regulation of Gene Expression</h2>
      <p>Broad term — may occur at various levels. Since expression → polypeptide formation, it can be regulated at:</p>
      <TableCard
        caption="Levels of regulation in eukaryotes"
        headers={["Level", "What is regulated"]}
        rows={[
          { cells: ["Transcriptional level", "Formation of primary transcript"] },
          { cells: ["Processing level", "Regulation of splicing"] },
          { cells: ["Transport level", "mRNA nucleus → cytoplasm"] },
          { cells: ["Translational level", "Protein synthesis"] },
        ]}
      />
      <p>Genes expressed to perform functions — e.g., E. coli <strong>beta-galactosidase</strong> hydrolyses lactose → galactose + glucose for energy. If no lactose, no need to synthesise enzyme. Thus <Highlight color="yellow">metabolic / physiological / environmental conditions</Highlight> regulate expression. Development/differentiation also via coordinated regulation.</p>
      <Callout type="note">
        In prokaryotes <Highlight color="yellow">transcriptional initiation</Highlight> is predominant control. RNA polymerase activity at promoter regulated by accessory proteins (activators positive, repressors negative). Promoter accessibility regulated by proteins interacting with <strong>operators</strong> adjacent to promoter — operator binds repressor. Each operon has specific operator + repressor (e.g., lac operator only interacts with lac repressor).
      </Callout>

      <h3 id="h-5-8-1">5.8.1 The Lac operon</h3>
      <p>Elucidated by <strong>Francois Jacob + Jacque Monod</strong> — first transcriptionally regulated system. <strong>Polycistronic</strong> structural gene regulated by common promoter + regulatory genes — common in bacteria (lac, trp, ara, his, val operons).</p>
      <ConceptCard title="Lac operon components">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>i gene (regulatory):</strong> i = inhibitor (not inducer). Codes for repressor of lac operon (constitutively made).</li>
          <li><strong>z gene:</strong> Codes for beta-galactosidase (β-gal) — hydrolyses lactose → galactose + glucose.</li>
          <li><strong>y gene:</strong> Codes for permease — increases permeability to β-galactosides.</li>
          <li><strong>a gene:</strong> Encodes transacetylase.</li>
        </ul>
      </ConceptCard>
      <p className="text-sm text-muted-foreground">All three products together metabolise lactose; similar clustering in other operons for same/related pathway (Figure 5.14).</p>
      <CycleDiagram
        steps={[
          { label: "No lactose — Repressor bound", detail: "Repressor from i gene binds operator → prevents RNA polymerase transcription → operon OFF" },
          { label: "Lactose present", detail: "Low basal permease lets lactose in; lactose (or allolactose) inducer inactivates repressor" },
          { label: "Operon ON", detail: "Repressor off operator → RNA polymerase accesses promoter → transcription proceeds → enzymes made" },
          { label: "Lactose exhausted", detail: "Inducer gone → repressor re-binds → operon OFF again" },
        ]}
      />
            <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 180" role="img" aria-label="Figure 5.14 The lac Operon — i, z, y, a genes, promoter, operator, repressor, inducer lactose" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="179" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.14 — Lac Operon (i, z, y, a)</text>
          <g fontSize="8">
            <rect x="30" y="40" width="70" height="30" rx="6" fill="#f8fafc" stroke="hsl(var(--border))" />
            <text x="65" y="58" textAnchor="middle" fontWeight="600" fill="hsl(var(--foreground))">i gene</text>
            <text x="65" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">repressor</text>
            <line x1="100" y1="55" x2="120" y2="55" stroke="hsl(var(--border))" strokeDasharray="3 3" />
            <rect x="120" y="40" width="60" height="30" rx="6" fill="#e0e7ff" stroke="#a5b4fc" />
            <text x="150" y="58" textAnchor="middle" fontWeight="600" fill="#4338ca">p</text>
            <text x="150" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">promoter</text>
            <rect x="190" y="40" width="60" height="30" rx="6" fill="#fee2e2" stroke="#fca5a5" />
            <text x="220" y="58" textAnchor="middle" fontWeight="600" fill="#991b1b">o</text>
            <text x="220" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">operator</text>
            <rect x="260" y="40" width="70" height="30" rx="6" fill="#dcfce7" stroke="#86efac" />
            <text x="295" y="58" textAnchor="middle" fontWeight="600" fill="#166534">z</text>
            <text x="295" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">β-gal</text>
            <rect x="340" y="40" width="70" height="30" rx="6" fill="#dcfce7" stroke="#86efac" />
            <text x="375" y="58" textAnchor="middle" fontWeight="600" fill="#166534">y</text>
            <text x="375" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">permease</text>
            <rect x="420" y="40" width="70" height="30" rx="6" fill="#dcfce7" stroke="#86efac" />
            <text x="455" y="58" textAnchor="middle" fontWeight="600" fill="#166534">a</text>
            <text x="455" y="68" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">transacetylase</text>
          </g>
          <g fontSize="8">
            <text x="30" y="95" fontWeight="600" fill="hsl(var(--foreground))">OFF (no lactose):</text>
            <text x="140" y="95" fill="hsl(var(--foreground))">Repressor binds operator → blocks RNA Pol → no transcription</text>
            <text x="30" y="115" fontWeight="600" fill="hsl(var(--foreground))">ON (lactose = inducer):</text>
            <text x="140" y="115" fill="hsl(var(--foreground))">Lactose/allolactose inactivates repressor → Pol transcribes → enzymes made</text>
            <text x="30" y="135" fontSize="7" fill="hsl(var(--muted-foreground))">Low basal permease always present to let lactose in • Negative regulation (repressor); positive also exists</text>
            <text x="30" y="150" fontSize="7" fill="hsl(var(--muted-foreground))">All three products needed together for lactose metabolism • Glucose/galactose cannot induce</text>
          </g>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">i (repressor) → p (promoter) — o (operator) — z,y,a (structural); lactose inducer switches OFF → ON.</figcaption>
      </figure>

      <Callout type="note">
        <strong>Inducer = lactose / allolactose</strong> (substrate regulating enzyme synthesis). Glucose/galactose cannot induce. Very low basal expression always present otherwise lactose cannot enter. Regulation by repressor = <Highlight color="yellow">negative regulation</Highlight>; positive control exists but beyond scope. Can you think how long operon stays expressed with lactose present? (Figure 5.14)
      </Callout>

      <h2 id="h-5-9">5.9 Human Genome Project</h2>
      <Callout type="important">
        Sequence of bases determines genetic information. Finding complete human DNA sequence became the quest → <Highlight color="yellow">Human Genome Project (HGP)</Highlight> launched 1990, completed 2003.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <MetricCard label="Human genome" value="3 × 10⁹" unit="bp" description="Initial cost estimate $3 per bp → ~$9 billion total; 3300 books (1000 pages×1000 letters) to store one cell&apos;s sequence." />
        <MetricCard label="Timeline" value="13 years" unit="1990–2003" description="Coordinated by US DOE + NIH; Wellcome Trust (UK), Japan, France, Germany, China contributed." />
      </div>
      <h3 id="h-5-9-goals">Goals of HGP</h3>
      <TableCard
        caption="Six goals of HGP"
        headers={["#", "Goal"]}
        rows={[
          { cells: ["(i)", "Identify all ~20,000–25,000 genes in human DNA"] },
          { cells: ["(ii)", "Determine sequences of the 3 billion base pairs"] },
          { cells: ["(iii)", "Store information in databases"] },
          { cells: ["(iv)", "Improve tools for data analysis"] },
          { cells: ["(v)", "Transfer related technologies to other sectors (industries)"] },
          { cells: ["(vi)", "Address ELSI — ethical, legal, social issues"] },
        ]}
      />
      <p className="text-sm text-muted-foreground">Impact: revolutionise diagnosis/treatment/prevention; non-human model organisms also sequenced — bacteria, yeast, <em>C. elegans</em>, <em>Drosophila</em>, rice, <em>Arabidopsis</em>.</p>
      <h3 id="h-5-9-method">Methodologies</h3>
      <ProcessCard
        steps={[
          { label: "EST vs Sequence Annotation", description: "Approach 1: identify all genes expressed as RNA (Expressed Sequence Tags — ESTs). Approach 2: blind sequence whole genome (coding + non-coding) then assign functions (Sequence Annotation)." },
          { label: "Fragment + clone", description: "Total DNA → random smaller fragments → cloned in bacteria/yeast via BAC/YAC vectors → amplified." },
          { label: "Sanger sequencing", description: "Fragments sequenced via automated sequencers based on Frederick Sanger’s method (also for amino acid sequences)." },
          { label: "Assembly & annotation", description: "Overlapping regions required → overlapping fragments generated → computer programs align (Figure 5.15), annotated to chromosomes. Chromosome 1 completed May 2006 (last of 24: 22 autosomes + X + Y)." },
          { label: "Mapping", description: "Genetic/physical maps via restriction site polymorphisms + microsatellites (basis for fingerprinting)." },
        ]}
      />
            <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 180" role="img" aria-label="Figure 5.15 Human Genome Project — BAC YAC cloning, Sanger sequencing, assembly" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="179" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.15 — HGP Methodology (BAC/YAC, Sanger)</text>
          <g fontSize="8">
            <rect x="20" y="40" width="110" height="50" rx="8" fill="#fef3c7" stroke="#fde68a" />
            <text x="75" y="62" textAnchor="middle" fontWeight="600" fill="#92400e">Total DNA</text>
            <text x="75" y="75" textAnchor="middle" fill="hsl(var(--muted-foreground))">random fragments</text>
            <text x="140" y="65" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="160" y="40" width="110" height="50" rx="8" fill="#dbeafe" stroke="#93c5fd" />
            <text x="215" y="62" textAnchor="middle" fontWeight="600" fill="#1e40af">Clone in</text>
            <text x="215" y="75" textAnchor="middle" fill="hsl(var(--muted-foreground))">BAC/YAC</text>
            <text x="280" y="65" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="300" y="40" width="110" height="50" rx="8" fill="#e0e7ff" stroke="#a5b4fc" />
            <text x="355" y="62" textAnchor="middle" fontWeight="600" fill="#4338ca">Sanger</text>
            <text x="355" y="75" textAnchor="middle" fill="hsl(var(--muted-foreground))">automated</text>
            <text x="420" y="65" fill="hsl(var(--muted-foreground))">→</text>
            <rect x="440" y="40" width="180" height="50" rx="8" fill="#dcfce7" stroke="#86efac" />
            <text x="530" y="62" textAnchor="middle" fontWeight="600" fill="#166534">Assembly</text>
            <text x="530" y="75" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">overlap → computer → annotate</text>
          </g>
          <text x="320" y="110" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">Chromosome 1 last completed May 2006 (24 chromosomes: 22 autosomes + X/Y) • Repetitive + microsatellite maps</text>
          <text x="320" y="130" textAnchor="middle" fontSize="8" fill="hsl(var(--foreground))">ESTs (expressed RNAs) vs whole-genome blind sequencing → Sequence Annotation</text>
          <text x="320" y="150" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">3 × 10⁹ bp • 3300 books • Bioinformatics for storage/analysis</text>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">DNA → fragments → BAC/YAC clones → Sanger sequencing → overlap assembly → chromosome assignment.</figcaption>
      </figure>

      <KeyPoint title="Bioinformatics">
        Enormous data → high-speed computation for storage/retrieval/analysis. HGP drove birth of <Highlight color="yellow">Bioinformatics</Highlight>.
      </KeyPoint>

      <h3 id="h-5-9-1">5.9.1 Salient Features of Human Genome</h3>
      <TableCard
        caption="Salient observations from HGP"
        headers={["#", "Observation"]}
        rows={[
          { cells: ["(i)", "Human genome contains 3164.7 million bp (~3.16 billion)."] },
          { cells: ["(ii)", "Average gene 3000 bases; largest dystrophin 2.4 million bases; size varies greatly."] },
          { cells: ["(iii)", "Total genes ~30,000 (much lower than 80k–140k estimates). 99.9% bases same in all humans."] },
          { cells: ["(iv)", "Functions unknown for >50% of discovered genes."] },
          { cells: ["(v)", "<2% of genome codes for proteins."] },
          { cells: ["(vi)", "Repeated sequences make up large portion."] },
          { cells: ["(vii)", "Repetitive sequences: stretches repeated 100–1000 times; no direct coding function but shed light on chromosome structure/dynamics/evolution."] },
          { cells: ["(viii)", "Chromosome 1 most genes (2968), Y fewest (231)."] },
          { cells: ["(ix)", "~1.4 million SNPs (single nucleotide polymorphisms, ‘snips’) — single-base differences occur in humans; promise for disease mapping & human history."] },
        ]}
      />

      <h3 id="h-5-9-2">5.9.2 Applications and Future Challenges</h3>
      <p>
        Deriving meaningful knowledge from sequences will define research for decades — tens of thousands of scientists across disciplines, public + private. Greatest impact may be a <Highlight color="yellow">radically new approach</Highlight>: from studying one/a few genes at a time → systemically studying all genes, all transcripts in a tissue/tumor, how tens of thousands of genes/proteins work in networks to orchestrate chemistry of life.
      </p>

      <h2 id="h-5-10">5.10 DNA Fingerprinting</h2>
      <p>
        99.9% bases same; human genome 3 × 10⁹ bp → differences in <strong>~3 × 10⁶ bp</strong>. Comparing full sequences would be daunting. <Highlight color="yellow">DNA fingerprinting</Highlight> quickly compares individuals via repetitive DNA differences.
      </p>
      <ConceptCard title="Repetitive & satellite DNA">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Repetitive DNA:</strong> Small stretch repeated many times. Separated as small peaks vs bulk genomic DNA major peak during density gradient centrifugation.</li>
          <li><strong>Satellite DNA:</strong> Classified by base composition (A:T-rich or G:C-rich), length, repeat units → micro-satellites, mini-satellites, etc. Normally do not code for proteins, form large portion of genome.</li>
          <li><strong>Polymorphism basis:</strong> High degree of polymorphism → basis of fingerprinting. Same in every tissue (blood, hair, skin, bone, saliva, sperm) → forensic use. Inheritable → paternity testing.</li>
        </ul>
      </ConceptCard>
      <Expandable title="What is DNA polymorphism?">
        <ul>
          <li>Variation at genetic level arises due to <strong>mutations</strong> (recall Ch 4 and this chapter).</li>
          <li>New mutations in somatic cells not transmitted; germ cell mutations (gamete-forming) can spread via sexual reproduction if not seriously impairing reproductive ability.</li>
          <li>Traditionally described as <Highlight color="yellow">DNA polymorphism</Highlight> if &gt;1 variant (allele) at a locus occurs in population with frequency &gt;0.01 — high-frequency inheritable mutation.</li>
          <li>More likely in <strong>non-coding DNA</strong> (mutations there may not affect reproductive ability, accumulate generation after generation). Basis of variability. Ranges from single nucleotide to very large scale changes — important for evolution/speciation (higher classes).</li>
        </ul>
      </Expandable>
      <ProcessCard
        steps={[
          { label: "Alec Jeffreys — VNTR", description: "Used satellite DNA probe Variable Number of Tandem Repeats (VNTR) — mini-satellite with copy number varying chromosome to chromosome (0.1–20 kb size). Hybrid DNA separated, autoradiogram gives many bands of differing sizes — characteristic pattern per individual (Figure 5.16). Except identical twins, banding pattern unique. Different colour schemes trace each band’s origin; crime scene banding matches individual B, not A." },
          { label: "Steps (Southern blot hybridisation)", description: "(i) isolation of DNA, (ii) digestion by restriction endonucleases, (iii) separation by electrophoresis, (iv) blotting to nitrocellulose/nylon, (v) hybridisation with labelled VNTR probe, (vi) detection by autoradiography." },
          { label: "Modern sensitivity", description: "PCR (Chapter 9) increased sensitivity — DNA from single cell enough. Now many different probes used. Wider applications: population & genetic diversities beyond forensics." },
        ]}
      />
            <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <svg viewBox="0 0 640 200" role="img" aria-label="Figure 5.16 DNA fingerprinting — VNTR copy number variation, Southern blot, bands matching crime scene B not A" className="w-full h-auto">
          <rect x="0.5" y="0.5" width="639" height="199" rx="12" fill="none" stroke="hsl(var(--border))" />
          <text x="320" y="22" textAnchor="middle" fontSize="12" fontWeight="600" fill="hsl(var(--foreground))">Figure 5.16 — DNA Fingerprinting (VNTR)</text>
          <g fontSize="7">
            <text x="110" y="45" textAnchor="middle" fontWeight="600" fill="hsl(var(--foreground))">Chromosomes with VNTR copies</text>
            <rect x="30" y="55" width="160" height="12" rx="6" fill="#fef3c7" stroke="#fde68a" />
            <text x="110" y="64" textAnchor="middle" fill="#92400e">A: 3 copies (short)</text>
            <rect x="30" y="75" width="160" height="12" rx="6" fill="#dbeafe" stroke="#93c5fd" />
            <text x="110" y="84" textAnchor="middle" fill="#1e40af">B: 6 copies (long)</text>
            <rect x="30" y="95" width="160" height="12" rx="6" fill="#f8fafc" stroke="hsl(var(--border))" />
            <text x="110" y="104" textAnchor="middle" fill="hsl(var(--muted-foreground))">Crime scene: 6 copies</text>
          </g>
          <g fontSize="7">
            <rect x="220" y="50" width="100" height="70" rx="8" fill="#f8fafc" stroke="hsl(var(--border))" />
            <text x="270" y="68" textAnchor="middle" fontWeight="600" fill="hsl(var(--foreground))">Southern blot</text>
            <text x="270" y="80" textAnchor="middle" fill="hsl(var(--muted-foreground))">1. Isolate</text>
            <text x="270" y="90" textAnchor="middle" fill="hsl(var(--muted-foreground))">2. Digest (RE)</text>
            <text x="270" y="100" textAnchor="middle" fill="hsl(var(--muted-foreground))">3. Electrophoresis</text>
            <text x="270" y="110" textAnchor="middle" fill="hsl(var(--muted-foreground))">4. Blot → probe</text>
          </g>
          <g>
            <rect x="350" y="45" width="90" height="100" rx="6" fill="#0f172a" />
            <line x1="368" y1="55" x2="368" y2="75" stroke="white" strokeWidth="2" />
            <line x1="385" y1="65" x2="385" y2="105" stroke="white" strokeWidth="2" />
            <line x1="402" y1="55" x2="402" y2="75" stroke="white" strokeWidth="2" />
            <line x1="368" y1="95" x2="368" y2="135" stroke="#fde68a" strokeWidth="2" />
            <line x1="385" y1="125" x2="385" y2="135" stroke="#fde68a" strokeWidth="2" />
            <text x="368" y="48" textAnchor="middle" fontSize="7" fill="white">A</text>
            <text x="385" y="48" textAnchor="middle" fontSize="7" fill="white">B</text>
            <text x="402" y="48" textAnchor="middle" fontSize="7" fill="white">Crime</text>
            <text x="395" y="145" textAnchor="middle" fontSize="7" fill="white">Crime = B ✓</text>
          </g>
          <rect x="470" y="55" width="150" height="80" rx="8" fill="#f0fdf4" stroke="#86efac" />
          <text x="545" y="75" textAnchor="middle" fontSize="8" fontWeight="600" fill="#166534">Alec Jeffreys — VNTR</text>
          <text x="545" y="88" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Mini-satellite 0.1–20 kb</text>
          <text x="545" y="100" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Monozygotic twins → same</text>
          <text x="545" y="112" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">PCR → single cell enough</text>
          <text x="545" y="124" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Now many probes</text>
        </svg>
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">VNTR copy number varies (0.1–20 kb) → Southern blot bands → fingerprint; crime scene matches B, not A (identical twins same).</figcaption>
      </figure>

      <KeyPoint title="In short">
        DNA fingerprinting works on <Highlight color="yellow">polymorphism in repetitive sequences</Highlight> — especially mini-satellite VNTRs. Copy number polymorphism → band pattern fingerprint.
      </KeyPoint>

      <Expandable title="In-text questions — quick check">
        <ul>
          <li>Two chemical differences between DNA and RNA? → DNA: deoxyribose (no 2&apos;-OH), thymine; RNA: ribose (2&apos;-OH), uracil.</li>
          <li>Reverse transcription name? → Reverse transcription / Central dogma reverse.</li>
          <li>RNA to DNA flow name? → Teminism / Reverse transcription.</li>
        </ul>
      </Expandable>
    </>
  );
}
