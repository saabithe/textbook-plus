import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { Stepper } from "@/components/content/Stepper";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { KeyPoint } from "@/components/content/KeyPoint";
import { PocketGrid } from "@/components/content/PocketGrid";
import { cn } from "@/lib/utils";
import { ExerciseQa } from "@/components/content/ExerciseQa";

export default function HaloalkanesAndHaloarenesChapter() {
  return (
    <div className="container mx-auto px-4 max-w-4xl gap-6">
      <h2 id="h-6-intro" className="text-3xl font-extrabold tracking-tight text-foreground">Introduction: Haloalkanes and Haloarenes</h2>

      <p className="mb-4 text-sm text-muted-foreground">
        Two families. One key difference.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-5 dark:border-sky-900 dark:bg-sky-950/40">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">
            Haloalkanes
          </p>
          <p className="mt-3 text-center text-3xl font-semibold text-sky-900 dark:text-sky-100">
            R—X
          </p>
          <p className="mt-2 text-center text-sm font-medium text-sky-700 dark:text-sky-300">
            sp³ carbon
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-white/70 p-3 text-center dark:border-sky-900 dark:bg-sky-950/60">
            <p className="text-sm font-medium">Chloroethane</p>
            <p className="mt-1 font-mono text-sm">CH₃—CH₂—Cl</p>
          </div>
        </div>

        <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5 dark:border-rose-900 dark:bg-rose-950/40">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-700 dark:text-rose-300">
            Haloarenes
          </p>
          <p className="mt-3 text-center text-3xl font-semibold text-rose-900 dark:text-rose-100">
            Ar—X
          </p>
          <p className="mt-2 text-center text-sm font-medium text-rose-700 dark:text-rose-300">
            sp² carbon
          </p>
          <div className="mt-4 rounded-xl border border-rose-200 bg-white/70 p-3 text-center dark:border-rose-900 dark:bg-rose-950/60">
            <p className="text-sm font-medium">Chlorobenzene</p>
            <p className="mt-1 font-mono text-sm">C₆H₅—Cl</p>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4 text-center dark:border-amber-900 dark:from-amber-950/40 dark:to-orange-950/40">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">
          ⚡ Central idea
        </p>
        <p className="mt-1 text-sm font-medium text-amber-900 dark:text-amber-100">
          sp³ vs sp² hybridisation → Different C—X bond behaviour → Different reactivity
        </p>
      </div>

      <h2 id="h-6-1" className="text-3xl font-extrabold tracking-tight text-foreground">6.1 Classification</h2>

      <PocketGrid
        title="Classify a halogen compound"
        items={[
          {
            id: "h-6-1-halogen-count",
            icon: "🔢",
            label: "1. By number of halogen atoms",
            note: "Mono · di · poly",
            content: (
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-muted/30 p-4 text-center">
                  <p className="text-4xl font-bold text-foreground">1</p>
                  <p className="mt-1 text-sm font-semibold">Monohalogen compounds</p>
                  <p className="mt-3 text-xs text-muted-foreground">CH₃Cl, CH₃CH₂Br, C₆H₅Cl</p>
                </div>
                <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-muted/30 p-4 text-center">
                  <p className="text-4xl font-bold text-foreground">2</p>
                  <p className="mt-1 text-sm font-semibold">Dihalogen compounds</p>
                  <p className="mt-3 text-xs text-muted-foreground">CH₂Cl₂, CH₂BrCH₂Br, C₆H₄Cl₂</p>
                </div>
                <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-muted/30 p-4 text-center">
                  <p className="text-4xl font-bold text-foreground">3+</p>
                  <p className="mt-1 text-sm font-semibold">Polyhalogen compounds</p>
                  <p className="mt-3 text-xs text-muted-foreground">CHCl₃, CCl₄, CHI₃</p>
                </div>
              </div>
            ),
          },
          {
            id: "h-6-1-sp3",
            icon: "🔷",
            label: "2. sp³ C—X compounds",
            note: "Alkyl · allylic · benzylic",
            content: (
              <>
                <div className="mt-3 flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50/60 p-3 dark:border-blue-900 dark:bg-blue-950/30">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                    sp³
                  </span>
                  <p className="text-xs text-blue-800 dark:text-blue-200">
                    The halogen sits on an sp³ (tetrahedral) carbon.
                  </p>
                </div>

                <p className="mt-3">
                  <strong>(a) Alkyl halides or haloalkanes (R—X)</strong> — the halogen is bonded to an
                  alkyl group (R). They form a homologous series{" "}
                  <Formula>{String.raw`\text{C}_n\text{H}_{2n+1}\text{X}`}</Formula> and are classed as
                  primary, secondary or tertiary by the carbon bearing the halogen.
                </p>

                <div className="my-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4 text-center dark:border-sky-900 dark:bg-sky-950/30">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">
                      Primary (1°)
                    </p>
                    <p className="mt-2 font-mono text-sm">CH₃CH₂CH₂Cl</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Halogen on a carbon with 1 C neighbour
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4 text-center dark:border-sky-900 dark:bg-sky-950/30">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">
                      Secondary (2°)
                    </p>
                    <p className="mt-2 font-mono text-sm">CH₃CH(Cl)CH₃</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Halogen on a carbon with 2 C neighbours
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4 text-center dark:border-sky-900 dark:bg-sky-950/30">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">
                      Tertiary (3°)
                    </p>
                    <p className="mt-2 font-mono text-sm">(CH₃)₃CCl</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Halogen on a carbon with 3 C neighbours
                    </p>
                  </div>
                </div>

                <TableCard
                  caption="Other sp³ families at a glance"
                  headers={["Family", "Spatial relationship", "Example"]}
                  rows={[
                    {
                      cells: [
                        "Allylic halide",
                        "sp³ carbon next to a C=C bond",
                        "CH₂=CH—CH₂Br (allyl bromide)",
                      ],
                    },
                    {
                      cells: [
                        "Benzylic halide",
                        "sp³ carbon attached to an aromatic ring",
                        "C₆H₅CH₂Cl (benzyl chloride)",
                      ],
                    },
                  ]}
                />
              </>
            ),
          },
          {
            id: "h-6-1-sp2",
            icon: "🔶",
            label: "3. sp² C—X compounds",
            note: "Vinylic · aryl",
            content: (
              <>
                <div className="mt-3 flex items-center gap-3 rounded-xl border border-violet-200 bg-violet-50/60 p-3 dark:border-violet-900 dark:bg-violet-950/30">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-xs font-bold text-white">
                    sp²
                  </span>
                  <p className="text-xs text-violet-800 dark:text-violet-200">
                    The halogen sits on an sp² (trigonal planar) carbon of a double bond or an aromatic
                    ring.
                  </p>
                </div>

                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-violet-200 bg-violet-50/60 p-4 text-center dark:border-violet-900 dark:bg-violet-950/30">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
                      Vinylic halide
                    </p>
                    <p className="mt-2 font-mono text-sm">CH₂=CHCl</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      X bonded to an sp² carbon of a C=C bond
                    </p>
                  </div>
                  <div className="rounded-2xl border border-violet-200 bg-violet-50/60 p-4 text-center dark:border-violet-900 dark:bg-violet-950/30">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
                      Aryl halide (haloarene)
                    </p>
                    <p className="mt-2 font-mono text-sm">C₆H₅Cl</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      X bonded directly to an aromatic-ring carbon
                    </p>
                  </div>
                </div>
              </>
            ),
          },
        ]}
      />

      <div className="mt-4 rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-violet-50 p-4 dark:border-sky-900 dark:from-sky-950/40 dark:via-background dark:to-violet-950/40">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
          Chemistry takeaway — the sp³ / sp² divide
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-background/70 p-3">
            <p className="text-xs font-semibold">Hybridisation</p>
            <p className="mt-1 text-xs text-muted-foreground">sp³ tetrahedral vs sp² trigonal planar carbon bearing X.</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-background/70 p-3">
            <p className="text-xs font-semibold">C—X bond</p>
            <p className="mt-1 text-xs text-muted-foreground">sp³ C—X is more polar and breaks more readily; sp² C—X has partial double-bond character.</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-background/70 p-3">
            <p className="text-xs font-semibold">Nucleophilic substitution</p>
            <p className="mt-1 text-xs text-muted-foreground">sp³ (alkyl) gives up X readily; sp² (haloarenes/vinylic) hold X tightly and are far less reactive.</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Cause → effect: hybridisation of the carbon bearing X changes C—X bond strength, which decides how easily the halogen leaves.
        </p>
      </div>

      <h2 id="h-6-2" className="text-3xl font-extrabold tracking-tight text-foreground">6.2 Nomenclature</h2>

      <div className="my-4 grid gap-4 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-5 dark:border-sky-900 dark:bg-sky-950/40">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">
            Common System
          </p>
          <p className="mt-3 text-center text-2xl font-semibold text-sky-900 dark:text-sky-100">
            [alkyl group] + [halide name]
          </p>
          <p className="mt-2 text-sm">
            Example: <strong>sec-Butyl chloride</strong> → <strong>2-Chlorobutane</strong>.
          </p>
          <p className="mt-3 rounded-xl border border-sky-200 bg-white/70 p-3 text-center font-mono text-sm dark:border-sky-900 dark:bg-sky-950/60">
            {'CH₃CH₂CH(Cl)CH₃'}
          </p>
          <p className="mt-1 text-center text-xs text-muted-foreground">
            Expanded: {'CH₃–CH₂–CH(Cl)–CH₃'}
          </p>
        </div>
        <div className="hidden w-px bg-border/60 md:block" aria-hidden />
        <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-5 dark:border-violet-900 dark:bg-violet-950/40">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
            IUPAC System
          </p>
          <p className="mt-3 text-center text-2xl font-semibold text-violet-900 dark:text-violet-100">
            halosubstituted hydrocarbon
          </p>
          <p className="mt-2 text-sm">
            The substituent is named as a prefix (chloro-, bromo-, iodo-) with a locant.
          </p>
          <p className="mt-3 rounded-xl border border-violet-200 bg-white/70 p-3 text-center font-mono text-sm dark:border-violet-900 dark:bg-violet-950/60">
            CH₃—CH₂—CH(Cl)—CH₃
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold tracking-tight text-foreground">1. Alkyl Halides</h3>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li><strong>Common System:</strong> Named as <strong>[alkyl group] + [halide name]</strong>.</li>
        <li><strong>IUPAC System:</strong> Named as <strong>halosubstituted hydrocarbons</strong>.</li>
      </ul>

      <h3 className="text-2xl font-bold tracking-tight text-foreground">2. Benzene Derivatives (Haloarenes)</h3>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li><strong>Monohalogen Derivatives:</strong> Common and IUPAC names are <strong>identical</strong>.</li>
        <li>
          <strong>Dihalogen Derivatives:</strong>
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li><strong>Common System:</strong> uses the prefixes <strong>o-</strong> (ortho), <strong>m-</strong> (meta) and <strong>p-</strong> (para).</li>
            <li><strong>IUPAC System:</strong> uses locant numbers (<strong>1,2</strong>; <strong>1,3</strong>; <strong>1,4</strong>).</li>
          </ul>
        </li>
      </ul>

      <p className="mt-4 text-sm font-semibold">Ortho · Meta · Para substitution positions</p>
      <div className="my-3 grid gap-4 md:grid-cols-3">
        <figure className="rounded-2xl border border-border/60 bg-muted/20 p-3 text-center">
          <svg viewBox="0 0 120 120" className="mx-auto h-24 w-24" aria-label="Ortho 1,2">
            <polygon points="60,12 102,36 102,84 60,108 18,84 18,36" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="60" cy="12" r="5" fill="#0284c7" />
            <circle cx="102" cy="36" r="5" fill="#e11d48" />
          </svg>
          <figcaption className="mt-1 text-xs text-muted-foreground">Ortho (o-) · 1,2</figcaption>
        </figure>
        <figure className="rounded-2xl border border-border/60 bg-muted/20 p-3 text-center">
          <svg viewBox="0 0 120 120" className="mx-auto h-24 w-24" aria-label="Meta 1,3">
            <polygon points="60,12 102,36 102,84 60,108 18,84 18,36" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="60" cy="12" r="5" fill="#0284c7" />
            <circle cx="102" cy="84" r="5" fill="#e11d48" />
          </svg>
          <figcaption className="mt-1 text-xs text-muted-foreground">Meta (m-) · 1,3</figcaption>
        </figure>
        <figure className="rounded-2xl border border-border/60 bg-muted/20 p-3 text-center">
          <svg viewBox="0 0 120 120" className="mx-auto h-24 w-24" aria-label="Para 1,4">
            <polygon points="60,12 102,36 102,84 60,108 18,84 18,36" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="60" cy="12" r="5" fill="#0284c7" />
            <circle cx="60" cy="108" r="5" fill="#e11d48" />
          </svg>
          <figcaption className="mt-1 text-xs text-muted-foreground">Para (p-) · 1,4</figcaption>
        </figure>
      </div>

      <h3 className="text-2xl font-bold tracking-tight text-foreground">3. Dihaloalkanes (Same Halogen Type)</h3>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li><strong>Geminal (gem-) Dihalides:</strong> both halogen atoms on the <strong>same carbon</strong> (also called alkylidene dihalides).</li>
        <li><strong>Vicinal (vic-) Dihalides:</strong> halogen atoms on <strong>adjacent carbons</strong> (also called alkylene dihalides).</li>
        <li><strong>IUPAC System:</strong> both are simply named as <strong>dihaloalkanes</strong> using locant numbers.</li>
      </ul>

      <p className="mt-2 text-sm font-semibold">Geminal vs vicinal — visual comparison</p>
      <div className="my-3 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4 text-center dark:border-sky-900 dark:bg-sky-950/30">
          <svg viewBox="0 0 140 80" className="mx-auto h-20 w-32" aria-label="Geminal dihalide">
            <line x1="20" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="2" />
            <circle cx="60" cy="40" r="6" fill="currentColor" />
            <text x="60" y="43" textAnchor="middle" fontSize="8" fill="white">C</text>
            <line x1="60" y1="40" x2="90" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="60" y1="40" x2="90" y2="60" stroke="currentColor" strokeWidth="2" />
            <text x="100" y="24" fontSize="10" fill="currentColor">X</text>
            <text x="100" y="64" fontSize="10" fill="currentColor">X</text>
            <text x="60" y="72" textAnchor="middle" fontSize="9" fill="currentColor">Same carbon</text>
          </svg>
          <p className="mt-1 text-xs">GEM — geminal (alkylidene): both X on one carbon.</p>
        </div>
        <div className="rounded-2xl border border-violet-200 bg-violet-50/60 p-4 text-center dark:border-violet-900 dark:bg-violet-950/30">
          <svg viewBox="0 0 140 80" className="mx-auto h-20 w-32" aria-label="Vicinal dihalide">
            <line x1="30" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="2" />
            <circle cx="40" cy="40" r="6" fill="currentColor" />
            <circle cx="100" cy="40" r="6" fill="currentColor" />
            <text x="40" y="43" textAnchor="middle" fontSize="8" fill="white">C</text>
            <text x="100" y="43" textAnchor="middle" fontSize="8" fill="white">C</text>
            <line x1="40" y1="40" x2="40" y2="14" stroke="currentColor" strokeWidth="2" />
            <line x1="100" y1="40" x2="100" y2="14" stroke="currentColor" strokeWidth="2" />
            <text x="35" y="12" fontSize="10" fill="currentColor">X</text>
            <text x="95" y="12" fontSize="10" fill="currentColor">X</text>
            <text x="70" y="72" textAnchor="middle" fontSize="9" fill="currentColor">Adjacent carbons</text>
          </svg>
          <p className="mt-1 text-xs">VIC — vicinal (alkylene): one X on each adjacent carbon.</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">IUPAC rule: both are named as dihaloalkanes using locant numbers.</p>

      <TableCard
        caption="Table 6.1: Common and IUPAC Names of some Halides"
        headers={[
          "Structure",
          <span className="text-sky-700 dark:text-sky-300">Common name</span>,
          <span className="text-violet-700 dark:text-violet-300">IUPAC name</span>,
        ]}
        rows={[
          { cells: [<code className="font-mono text-xs">CH₃CH₂CH(Cl)CH₃</code>, "sec-Butyl chloride", <span className="text-violet-700 dark:text-violet-300">2-Chlorobutane</span>] },
          { cells: [<code className="font-mono text-xs">(CH₃)₃CCH₂Br</code>, "neo-Pentyl bromide", <span className="text-violet-700 dark:text-violet-300">1-Bromo-2,2-dimethylpropane</span>] },
          { cells: [<code className="font-mono text-xs">(CH₃)₃CBr</code>, "tert-Butyl bromide", <span className="text-violet-700 dark:text-violet-300">2-Bromo-2-methylpropane</span>] },
          { cells: [<code className="font-mono text-xs">CH₂=CHCl</code>, "Vinyl chloride", <span className="text-violet-700 dark:text-violet-300">Chloroethene</span>] },
          { cells: [<code className="font-mono text-xs">CH₂=CHCH₂Br</code>, "Allyl bromide", <span className="text-violet-700 dark:text-violet-300">3-Bromopropene</span>] },
          { cells: [<code className="font-mono text-xs">CH₂Cl₂</code>, "Methylene chloride", <span className="text-violet-700 dark:text-violet-300">Dichloromethane</span>] },
          { cells: [<code className="font-mono text-xs">CHCl₃</code>, "Chloroform", <span className="text-violet-700 dark:text-violet-300">Trichloromethane</span>] },
          { cells: [<code className="font-mono text-xs">CHBr₃</code>, "Bromoform", <span className="text-violet-700 dark:text-violet-300">Tribromomethane</span>] },
          { cells: [<code className="font-mono text-xs">CCl₄</code>, "Carbon tetrachloride", <span className="text-violet-700 dark:text-violet-300">Tetrachloromethane</span>] },
          { cells: [<code className="font-mono text-xs">CH₃CH₂CH₂F</code>, "n-Propyl fluoride", <span className="text-violet-700 dark:text-violet-300">1-Fluoropropane</span>] },
          { cells: [<code className="font-mono text-xs">o-ClC₆H₄CH₃</code>, "o-Chlorotoluene", <span className="text-violet-700 dark:text-violet-300">1-Chloro-2-methylbenzene (or 2-chlorotoluene)</span>] },
          { cells: [<code className="font-mono text-xs">C₆H₅CH₂Cl</code>, "Benzyl chloride", <span className="text-violet-700 dark:text-violet-300">Chlorophenylmethane</span>] },
        ]}
      />
      <p className="mt-3 text-sm font-semibold">Structures of the named halides above (selected)</p>
      <div className="my-3 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-muted/30 p-3">
          <p className="text-sm font-medium">sec-Butyl chloride</p>
          <p className="mt-1 font-mono text-xs">{'CH₃CH₂CH(Cl)CH₃'}</p>
          <p className="font-mono text-xs text-muted-foreground">{'CH₃–CH₂–CH(Cl)–CH₃'}</p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-muted/30 p-3">
          <p className="text-sm font-medium">neo-Pentyl bromide</p>
          <p className="mt-1 font-mono text-xs">{'(CH₃)₃CCH₂Br'}</p>
          <p className="font-mono text-xs text-muted-foreground">{'(CH₃)₃C–CH₂Br'}</p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-muted/30 p-3">
          <p className="text-sm font-medium">tert-Butyl bromide</p>
          <p className="mt-1 font-mono text-xs">{'(CH₃)₃CBr'}</p>
          <p className="font-mono text-xs text-muted-foreground">{'(CH₃)₃C–Br'}</p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-muted/30 p-3">
          <p className="text-sm font-medium">Vinyl chloride</p>
          <p className="mt-1 font-mono text-xs">{'CH₂=CHCl'}</p>
          <p className="font-mono text-xs text-muted-foreground">{'CH₂=CH–Cl'}</p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-muted/30 p-3">
          <p className="text-sm font-medium">Allyl bromide</p>
          <p className="mt-1 font-mono text-xs">{'CH₂=CHCH₂Br'}</p>
          <p className="font-mono text-xs text-muted-foreground">{'CH₂=CH–CH₂Br'}</p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-muted/30 p-3">
          <p className="text-sm font-medium">o-Chlorotoluene</p>
          <p className="mt-1 font-mono text-xs">{'o-ClC₆H₄CH₃'}</p>
          <p className="font-mono text-xs text-muted-foreground">{'o-Cl–C₆H₄–CH₃'}</p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-muted/30 p-3">
          <p className="text-sm font-medium">Benzyl chloride</p>
          <p className="mt-1 font-mono text-xs">{'C₆H₅CH₂Cl'}</p>
          <p className="font-mono text-xs text-muted-foreground">{'C₆H₅–CH₂Cl'}</p>
        </div>
      </div>
       <p className="text-xs text-muted-foreground">
        Detailed drawings appear only where branching or numbering matter; simple formulas remain
        text-based.</p>
      <Expandable
        title="Example 6.1 — All eight structural isomers of C₅H₁₁Br, named and classified"
        variant="example"
      >
        <p>
          Draw the structures of all the eight structural isomers that have the molecular formula
          C<sub>5</sub>H<sub>11</sub>Br. Name each isomer according to the IUPAC system and classify
          them as primary, secondary or tertiary bromide.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <TableCard
          caption="Eight structural isomers of C₅H₁₁Br"
          headers={["Structure", "IUPAC name", "Class"]}
          rows={[
            { cells: ["CH₃CH₂CH₂CH₂CH₂Br", "1-Bromopentane", "1°"] },
            { cells: ["CH₃CH₂CH₂CH(Br)CH₃", "2-Bromopentane", "2°"] },
            { cells: ["CH₃CH₂CH(Br)CH₂CH₃", "3-Bromopentane", "2°"] },
            { cells: ["(CH₃)₂CHCH₂CH₂Br", "1-Bromo-3-methylbutane", "1°"] },
            { cells: ["(CH₃)₂CHCH(Br)CH₃", "2-Bromo-3-methylbutane", "2°"] },
            { cells: ["(CH₃)₂C(Br)CH₂CH₃", "2-Bromo-2-methylbutane", "3°"] },
            { cells: ["CH₃CH₂CH(CH₃)CH₂Br", "1-Bromo-2-methylbutane", "1°"] },
            { cells: ["(CH₃)₃CCH₂Br", "1-Bromo-2,2-dimethylpropane", "1°"] },
          ]}
        />
      </Expandable>

      <Expandable
        title="Example 6.2 — Draw the structures from the IUPAC names"
        variant="example"
      >
        <p>
          Write the structures of the following compounds: (i) 4-bromopent-2-ene
          (ii) 3-bromo-2-methylbut-1-ene (iii) 4-bromo-3-methylpent-2-ene
          (iv) 1-bromo-2-methylbut-2-ene (v) 1-bromobut-2-ene (vi) 3-bromo-2-methylpropene.
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <TableCard
          caption="Name → structure"
          headers={["Name", "Structure"]}
          rows={[
            { cells: ["4-Bromopent-2-ene", "CH₃CH=CHCH(Br)CH₃"] },
            { cells: ["3-Bromo-2-methylbut-1-ene", "CH₂=C(CH₃)CH(Br)CH₃"] },
            { cells: ["4-Bromo-3-methylpent-2-ene", "CH₃CH=C(CH₃)CH(Br)CH₃"] },
            { cells: ["1-Bromo-2-methylbut-2-ene", "BrCH₂C(CH₃)=CHCH₃"] },
            { cells: ["1-Bromobut-2-ene", "BrCH₂CH=CHCH₃"] },
            { cells: ["3-Bromo-2-methylpropene", "CH₂=C(CH₃)CH₂Br"] },
          ]}
        />
        <p className="mt-3">
          Number the chain from the end that gives the double bond the lower locant, then the halogen
          the lower locant consistent with that choice.
        </p>
      </Expandable>

      <Expandable title="Intext 6.1 — Write structures from the given names" variant="exercise">
        <p>
          (i) 2-Chloro-3-methylpentane (ii) 1-Chloro-4-ethylcyclohexane
          (iii) 4-<em>tert</em>-butyl-3-iodoheptane (iv) 1,4-Dibromobut-2-ene
          (v) 1-Bromo-4-<em>sec</em>-butyl-2-methylbenzene.
        </p>
        <TableCard
          caption="Structures of the five named compounds"
          headers={["Name", "Structure"]}
          rows={[
            { cells: ["2-Chloro-3-methylpentane", "CH₃CH₂CH(CH₃)CH(Cl)CH₃"] },
            { cells: ["1-Chloro-4-ethylcyclohexane", "Cl—C₁ of cyclohexane, C₂H₄CH₃ at C₄ of the ring"] },
            { cells: ["4-tert-Butyl-3-iodoheptane", "CH₃CH₂CH₂CH(C(CH₃)₃)CH(I)CH₂CH₃"] },
            { cells: ["1,4-Dibromobut-2-ene", "BrCH₂CH=CHCH₂Br"] },
            { cells: ["1-Bromo-4-sec-butyl-2-methylbenzene", "Br at C1, CH₃ at C2, CH(CH₃)CH₂CH₃ at C4 of benzene"] },
          ]}
        />
      </Expandable>

      <h2 id="h-6-3" className="text-3xl font-extrabold tracking-tight text-foreground">6.3 Nature of C—X Bond</h2>

      <div className="mb-2 rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-violet-50 p-4 dark:border-sky-900 dark:from-sky-950/40 dark:to-violet-950/40">
        <div className="flex flex-col items-center gap-3">
          <svg viewBox="0 0 220 80" className="h-20 w-52" aria-label="Polar C-X bond">
            <text x="60" y="18" textAnchor="middle" fontSize="11" fill="currentColor" fontWeight="bold">
              δ⁺
            </text>
            <text x="160" y="18" textAnchor="middle" fontSize="11" fill="currentColor" fontWeight="bold">
              δ⁻
            </text>
            <circle cx="60" cy="45" r="18" fill="#0ea5e9" />
            <circle cx="160" cy="45" r="18" fill="#7c3aed" />
            <text x="60" y="49" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">
              C
            </text>
            <text x="160" y="49" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">
              X
            </text>
            <line x1="78" y1="45" x2="142" y2="45" stroke="currentColor" strokeWidth="2" />
            <polygon points="142,40 152,45 142,50" fill="currentColor" />
            <text x="110" y="72" textAnchor="middle" fontSize="9" fill="currentColor">
              electron density shifts toward X
            </text>
          </svg>
          <div className="grid gap-2 text-center text-xs md:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-background/70 p-2">
              <p className="font-semibold">Electronegativity difference</p>
              <p className="text-muted-foreground">Halogen more electronegative than carbon</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/70 p-2">
              <p className="font-semibold">Bond polarisation</p>
              <p className="text-muted-foreground">δ⁺ on C, δ⁻ on X</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/70 p-2">
              <p className="font-semibold">Nucleophilic attack</p>
              <p className="text-muted-foreground">Carbon is electrophilic</p>
            </div>
          </div>
        </div>
      </div>

      <p>
        Halogen atoms are more electronegative than carbon, so the carbon–halogen bond of an alkyl
        halide is <strong>polarised</strong>: the carbon bears a partial positive charge (δ+) and the
        halogen a partial negative charge (δ−). This is why the carbon is attacked by nucleophiles and
        the halogen leaves as a halide ion.
      </p>

      <div className="my-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
        <p className="text-sm font-semibold">Periodic trends in C—X parameters</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Down group 17: atomic size F &lt; Cl &lt; Br &lt; I
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-4">
          {[
            { symbol: "F", size: "h-8 w-8", length: "w-[25%]", enthalpy: "h-8", label: "C—F" },
            { symbol: "Cl", size: "h-10 w-10", length: "w-[40%]", enthalpy: "h-7", label: "C—Cl" },
            { symbol: "Br", size: "h-12 w-12", length: "w-[60%]", enthalpy: "h-5", label: "C—Br" },
            { symbol: "I", size: "h-14 w-14", length: "w-[85%]", enthalpy: "h-3", label: "C—I" },
          ].map((item) => (
            <div key={item.symbol} className="rounded-2xl border border-border/60 bg-background/70 p-3 text-center">
              <div className="flex justify-center">
                <div className={cn("rounded-full bg-sky-500", item.size)} />
              </div>
              <p className="mt-2 text-xs font-semibold">{item.label}</p>
              <p className="mt-2 text-[0.65rem] text-muted-foreground">Bond length increases</p>
              <div className="mt-1 h-2 rounded-full bg-muted">
                <div className={cn("h-2 rounded-full bg-amber-500", item.length)} />
              </div>
              <p className="mt-2 text-[0.65rem] text-muted-foreground">Bond enthalpy decreases</p>
              <div className="mt-1 h-8 rounded-full bg-muted flex items-end justify-center">
                <div className={cn("w-full rounded-t-md bg-rose-500", item.enthalpy)} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-2 text-xs md:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-background/70 p-2">
            <p className="font-semibold">C—X bond length</p>
            <p className="text-muted-foreground">C—F &lt; C—Cl &lt; C—Br &lt; C—I</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-background/70 p-2">
            <p className="font-semibold">C—X bond enthalpy</p>
            <p className="text-muted-foreground">C—F &gt; C—Cl &gt; C—Br &gt; C—I</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-background/70 p-2">
            <p className="font-semibold">Reactivity link</p>
            <p className="text-muted-foreground">Weaker/longer bonds break more easily (R—I &gt; R–Br &gt; R–Cl &gt; R–F).</p>
          </div>
        </div>
      </div>

      <div className="my-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
        <p className="text-sm font-semibold">Dipole moment order</p>
        <div className="mt-3 grid gap-2 md:grid-cols-4">
          {[
            { label: "CH₃Cl", value: "1.860 D", width: "w-full" },
            { label: "CH₃F", value: "1.847 D", width: "w-[96%]" },
            { label: "CH₃Br", value: "1.830 D", width: "w-[90%]" },
            { label: "CH₃I", value: "1.636 D", width: "w-[70%]" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border/60 bg-background/70 p-3 text-center">
              <p className="font-mono text-xs">{item.label}</p>
              <p className="mt-1 text-xs font-semibold">{item.value}</p>
              <div className="mt-2 h-2 rounded-full bg-muted">
                <div className={cn("h-2 rounded-full bg-sky-500", item.width)} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs">
          Complete order: <strong>CH₃Cl &gt; CH₃F &gt; CH₃Br &gt; CH₃I</strong>{" "}
          (1.860 &gt; 1.847 &gt; 1.830 &gt; 1.636 D).
        </p>
      </div>

      <h2 id="h-6-4" className="text-3xl font-extrabold tracking-tight text-foreground">6.4 Methods of Preparation of Haloalkanes</h2>

      <PocketGrid
        title="Three routes to a haloalkane"
        items={[
          {
            id: "h-6-4-alcohols",
            icon: "⚗️",
            label: "1. From alcohols",
            note: "HX · phosphorus halides · SOCl₂ · red P",
            content: (
              <>
                <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-sky-50 p-4 dark:border-amber-900/70 dark:from-amber-950/30 dark:to-sky-950/30">
                  <p className="text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Core transformation
                  </p>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                    <span className="font-mono text-lg font-semibold">
                      R—<span className="text-amber-600 dark:text-amber-400">OH</span>
                    </span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-mono text-lg font-semibold">
                      R—<span className="text-amber-600 dark:text-amber-400">X</span>
                    </span>
                  </div>
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    Alcohol → haloalkane · the —OH group is replaced by halogen (X)
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2 text-[0.65rem]">
                    {["HX", "Phosphorus halides", "SOCl₂"].map((reagent) => (
                      <span
                        key={reagent}
                        className="rounded-full border border-border/60 bg-background/70 px-2 py-0.5 font-medium"
                      >
                        {reagent}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold">Methods of preparation</p>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold">A. Using hydrogen halides (H—X)</p>
                  <span className="rounded-full border border-sky-200 bg-sky-50/70 px-2 py-0.5 text-[0.65rem] font-medium dark:border-sky-900 dark:bg-sky-950/40">
                    catalyst · anhydrous ZnCl₂
                  </span>
                </div>

                <div className="mt-3 rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="divide-y divide-border/60">
                    <div className="flex items-start gap-3 py-2">
                      <span className="mt-1 w-14 shrink-0 text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
                        General
                      </span>
                      <span className="min-w-0 overflow-x-auto">
                        <Formula>{String.raw`\text{R–OH} + \text{H–X} \xrightarrow{\text{anh. ZnCl}_2} \text{R–X} + \text{H}_2\text{O}`}</Formula>
                      </span>
                    </div>
                    <div className="flex items-start gap-3 py-2">
                      <span className="mt-1 w-14 shrink-0 text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
                        Example
                      </span>
                      <span className="min-w-0 overflow-x-auto">
                        <Formula>{String.raw`\text{CH}_3\text{CH}_2\text{OH} + \text{HCl} \xrightarrow{\text{anh. ZnCl}_2} \text{CH}_3\text{CH}_2\text{Cl} + \text{H}_2\text{O}`}</Formula>
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold">B. Using phosphorus halides</p>

                <div className="mt-2 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <p className="font-mono text-sm font-semibold">PCl₅</p>
                    <p className="text-[0.7rem] text-muted-foreground">Phosphorus pentachloride</p>
                    <div className="mt-3 overflow-x-auto">
                      <Formula>{String.raw`\text{R–OH} + \text{PCl}_5 \rightarrow \text{R–Cl} + \text{HCl} + \text{POCl}_3`}</Formula>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <p className="font-mono text-sm font-semibold">PCl₃</p>
                    <p className="text-[0.7rem] text-muted-foreground">Phosphorus trichloride</p>
                    <div className="mt-3 overflow-x-auto">
                      <Formula>{String.raw`\mathbf{3}\,\text{R–OH} + \text{PCl}_3 \rightarrow \mathbf{3}\,\text{R–Cl} + \text{H}_3\text{PO}_3`}</Formula>
                    </div>
                    <p className="mt-2 text-[0.7rem] text-muted-foreground">
                      Stoichiometric ratio — 3 alcohol : 1 PCl₃
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold">C. Using thionyl chloride (SOCl₂)</p>
                  <span className="rounded-full border border-emerald-300 bg-emerald-50/70 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                    ⭐ Important
                  </span>
                </div>

                <div className="mt-3 rounded-2xl border-2 border-emerald-300/70 bg-emerald-50/40 p-4 dark:border-emerald-800/70 dark:bg-emerald-950/20">
                  <div className="overflow-x-auto text-center">
                    <Formula>{String.raw`\text{R–OH} + \text{SOCl}_2 \rightarrow \text{R–Cl} + \text{HCl}_{(g)} + \text{SO}_{2(g)}`}</Formula>
                  </div>
                  <div className="mt-4 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
                    <div className="rounded-xl border border-emerald-300/70 bg-background/80 p-3 text-center dark:border-emerald-800/70">
                      <p className="text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
                        Stays behind
                      </p>
                      <p className="mt-1 font-mono text-sm font-semibold">R—Cl</p>
                    </div>
                    <span className="rotate-90 text-center text-xs text-muted-foreground md:rotate-0">
                      →
                    </span>
                    <div className="flex flex-col gap-2">
                      <div className="rounded-xl border border-border/60 bg-background/80 px-3 py-2 text-xs">
                        <strong>HCl ↑</strong> — gas escapes
                      </div>
                      <div className="rounded-xl border border-border/60 bg-background/80 px-3 py-2 text-xs">
                        <strong>SO₂ ↑</strong> — gas escapes
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 rounded-xl bg-emerald-600 px-3 py-2 text-center text-xs font-semibold text-white">
                    Pure alkyl chloride remains
                  </p>
                </div>

                <p className="mt-4 text-sm font-semibold">
                  D. Using halogen in the presence of red phosphorus
                </p>

                <div className="mt-2 rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="overflow-x-auto text-center">
                    <Formula>{String.raw`\text{R–OH} + \text{Cl}_2 \xrightarrow{\text{red P}} \text{R–Cl}`}</Formula>
                  </div>
                </div>
              </>
            ),
          },
          {
            id: "h-6-4-hydrocarbons",
            icon: "⚛️",
            label: "2. From hydrocarbons",
            note: "Alkanes & alkenes",
            content: (
              <>
                <p className="mt-3 text-sm font-semibold">
                  (A) From alkanes by free radical halogenation
                </p>

      <div className="my-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold">Reaction sequence — chlorination of methane</p>
          <div className="flex flex-wrap gap-2 text-[0.65rem]">
            <span className="rounded-full border border-sky-200 bg-sky-50/70 px-2 py-0.5 font-medium dark:border-sky-900 dark:bg-sky-950/40">
              hν — light
            </span>
            <span className="rounded-full border border-amber-200 bg-amber-50/70 px-2 py-0.5 font-medium dark:border-amber-900 dark:bg-amber-950/40">
              Δ — heat
            </span>
          </div>
        </div>
        <ol className="mt-3 divide-y divide-border/60">
          {[
            String.raw`\text{CH}_4\text{ (methane)} + \text{Cl}_2 \xrightarrow{h\nu} \text{CH}_3\text{Cl} + \text{HCl}`,
            String.raw`\text{CH}_3\text{Cl} + \text{Cl}_2 \rightarrow \text{CH}_2\text{Cl}_2\text{ (dichloromethane)} + \text{HCl}`,
            String.raw`\text{CH}_2\text{Cl}_2 + \text{Cl}_2 \rightarrow \text{CHCl}_3\text{ (trichloromethane)} + \text{HCl}`,
            String.raw`\text{CHCl}_3 + \text{Cl}_2 \rightarrow \text{CCl}_4\text{ (tetrachloromethane)} + \text{HCl}`,
          ].map((reaction, index) => (
            <li key={index} className="flex items-start gap-3 py-2">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border border-border bg-card text-[0.65rem] font-bold">
                {index + 1}
              </span>
              <span className="min-w-0 overflow-x-auto">
                <Formula>{reaction}</Formula>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="my-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
        <p className="text-sm font-semibold">Why this method is limited</p>
        <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-stretch">
          {[
            {
              title: "Multiple products",
              detail: "Different isomers and degrees of halogenation form together.",
            },
            {
              title: "Close boiling points",
              detail: "Individual isomers are difficult to separate.",
            },
            {
              title: "Low individual yield",
              detail: "Obtaining one pure compound becomes difficult.",
            },
          ].map((item, index, list) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 md:flex-1 md:flex-row md:items-center"
            >
              <div className="flex-1 rounded-xl border border-border/60 bg-background/70 p-3">
                <p className="text-xs font-semibold">{item.title}</p>
                <p className="mt-1 text-[0.7rem] text-muted-foreground">{item.detail}</p>
              </div>
              {index < list.length - 1 && (
                <span className="rotate-90 text-center text-xs text-muted-foreground md:rotate-0">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

                <p className="mt-4 text-sm font-semibold">(B) From alkenes</p>

      <p className="mt-3 text-sm font-semibold">1. Addition of hydrogen halides (H–X)</p>

      <FormulaBlock
        label="Symmetrical alkene — ethene"
        latex={String.raw`\text{CH}_2=\text{CH}_2 + \text{HCl} \rightarrow \text{CH}_3-\text{CH}_2-\text{Cl}\text{ (1-chloroethane)}`}
      />

      <FormulaBlock
        label="Unsymmetrical alkene — propene"
        latex={String.raw`\text{CH}_3-\text{CH}=\text{CH}_2 + \text{HBr} \rightarrow \text{CH}_3-\text{CH(Br)}-\text{CH}_3\text{ (2-bromopropane)}`}
      />

      <Callout type="important" title="Markovnikov’s rule">
        <p>For addition of H–X to an unsymmetrical alkene:</p>
        <ul>
          <li>
            The <strong>+ve part</strong> (H) adds to the carbon with <strong>more</strong> H atoms.
          </li>
          <li>
            The <strong>−ve part</strong> (X) adds to the carbon with <strong>fewer</strong> H atoms.
          </li>
        </ul>
      </Callout>

      <Callout type="note" title="Peroxide effect — anti-Markovnikov (Kharasch effect)">
        <p>
          In the presence of peroxide, addition of HBr to an unsymmetrical alkene gives the opposite
          regioselectivity:
        </p>
        <ul>
          <li>
            The <strong>+ve part</strong> adds to the carbon with <strong>fewer</strong> H atoms.
          </li>
          <li>
            The <strong>−ve part</strong> adds to the carbon with <strong>more</strong> H atoms.
          </li>
        </ul>
        <p>
          <strong>Only HBr</strong> shows the peroxide effect; HCl and HI do not.
        </p>
      </Callout>

      <div className="my-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
        <p className="text-sm font-semibold">Conversion check — propene to 2-bromopropane</p>
        <p className="mt-1 text-xs text-muted-foreground">
          How can propene be converted into 2-bromopropane?
        </p>
        <div className="mt-2 overflow-x-auto">
          <Formula>
            {String.raw`\text{CH}_3-\text{CH}=\text{CH}_2 + \text{HBr} \rightarrow \text{CH}_3-\text{CH(Br)}-\text{CH}_3`}
          </Formula>
        </div>
        <p className="mt-2 text-xs">
          <strong>Rule applied:</strong> Markovnikov’s rule.
        </p>
      </div>

      <p className="mt-4 text-sm font-semibold">2. Addition of halogens (X₂)</p>

      <FormulaBlock
        label="General reaction"
        latex={String.raw`\text{CH}_2=\text{CH}_2 + \text{X}_2 \rightarrow \text{CH}_2(\text{X})-\text{CH}_2(\text{X})\text{ (vicinal dihalides)}`}
      />

      <FormulaBlock
        label="With chlorine"
        latex={String.raw`\text{CH}_2=\text{CH}_2 + \text{Cl}_2 \rightarrow \text{CH}_2(\text{Cl})-\text{CH}_2(\text{Cl})\text{ (vicinal dichloride)}`}
      />

              </>
            ),
          },
          {
            id: "h-6-4-exchange",
            icon: "🔄",
            label: "3. From haloalkanes",
            note: "Ion exchange — Finkelstein · Swarts",
            content: (
              <>

                <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Ion exchange — one halogen swapped for another
                  </p>
                  <p className="mt-2 text-center font-mono text-sm font-semibold">
                    R—X <span className="text-muted-foreground">→</span> R—Y
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-sky-300/70 bg-sky-50/60 p-3 dark:border-sky-800 dark:bg-sky-950/30">
                      <p className="text-xs font-semibold text-sky-700 dark:text-sky-300">
                        Finkelstein
                      </p>
                      <p className="mt-1 text-[0.7rem] text-muted-foreground">
                        Preparation of R—I · iodoalkanes
                      </p>
                    </div>
                    <div className="rounded-xl border border-emerald-300/70 bg-emerald-50/60 p-3 dark:border-emerald-800 dark:bg-emerald-950/30">
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                        Swarts
                      </p>
                      <p className="mt-1 text-[0.7rem] text-muted-foreground">
                        Preparation of R—F · fluoroalkanes
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold text-sky-700 dark:text-sky-300">
                  A. Finkelstein reaction — iodoalkanes
                </p>

                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <strong>Purpose</strong> — preparation of iodoalkanes from chloroalkanes or
                    bromoalkanes.
                  </li>
                  <li>
                    <strong>Reagents and conditions</strong> — sodium iodide (NaI) in dry acetone.
                  </li>
                </ul>

                <div className="mt-3 rounded-2xl border border-sky-200 bg-muted/30 p-4 dark:border-sky-900">
                  <div className="divide-y divide-border/60">
                    <div className="flex items-start gap-3 py-2">
                      <span className="mt-1 w-14 shrink-0 text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
                        General
                      </span>
                      <span className="min-w-0 overflow-x-auto">
                        <Formula>{String.raw`\text{R–X} + \text{Na}\textcolor{#0284c7}{I} \xrightarrow{\text{dry acetone}} \text{R–}\textcolor{#0284c7}{I} + \text{NaX}`}</Formula>
                      </span>
                    </div>
                    <div className="flex items-start gap-3 py-2">
                      <span className="mt-1 w-14 shrink-0 text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
                        Example
                      </span>
                      <span className="min-w-0 overflow-x-auto">
                        <Formula>{String.raw`\text{CH}_3\text{–CH}_2\text{–Cl} + \text{Na}\textcolor{#0284c7}{I} \xrightarrow{\text{dry acetone}} \text{CH}_3\text{–CH}_2\text{–}\textcolor{#0284c7}{I}\text{ (iodoethane)} + \text{NaCl}`}</Formula>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="my-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <p className="text-sm font-semibold">Why does the reaction proceed?</p>
                  <div className="mt-3 grid items-center gap-2 md:grid-cols-[1fr_auto_1fr]">
                    <div className="rounded-xl border border-border/60 bg-background/70 p-3 text-center text-xs">
                      <p className="font-mono text-sm font-semibold">NaI + R—X</p>
                      <p className="mt-1 text-muted-foreground">reactants in dry acetone</p>
                    </div>
                    <span className="rotate-90 text-center text-xs text-muted-foreground md:rotate-0">
                      →
                    </span>
                    <div className="grid gap-2">
                      <div className="rounded-xl border border-sky-300/70 bg-sky-50/60 p-3 text-center text-xs dark:border-sky-800 dark:bg-sky-950/30">
                        <p className="font-mono text-sm font-semibold">R—I</p>
                        <p className="mt-1 text-muted-foreground">desired product</p>
                      </div>
                      <div className="rounded-xl border border-border/60 bg-background/70 p-3 text-center text-xs">
                        <p className="font-mono text-sm font-semibold">NaX ↓</p>
                        <p className="mt-1 text-muted-foreground">insoluble precipitate</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50/70 px-3 py-2 text-xs dark:border-amber-900 dark:bg-amber-950/40">
                    <strong>Reaction driven forward</strong> — NaX is insoluble in dry acetone and
                    precipitates, so Le Chatelier&apos;s principle pulls the equilibrium to the right.
                    Here X = Cl or Br.
                  </p>
                </div>

                <p className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  B. Swarts reaction — fluoroalkanes
                </p>

                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <strong>Purpose</strong> — preparation of fluoroalkanes from chloroalkanes or
                    bromoalkanes.
                  </li>
                  <li>
                    <strong>Condition</strong> — heating the alkyl chloride or bromide with a metallic
                    fluoride.
                  </li>
                </ul>

                <div className="mt-2 grid gap-2 text-[0.7rem] sm:grid-cols-2">
                  {[
                    { formula: "AgF", name: "Silver fluoride" },
                    { formula: "Hg₂F₂", name: "Mercurous fluoride" },
                    { formula: "CoF₂", name: "Cobalt fluoride" },
                    { formula: "SbF₃", name: "Antimony trifluoride" },
                  ].map((fluoride) => (
                    <div
                      key={fluoride.formula}
                      className="flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-background/70 px-3 py-1.5"
                    >
                      <span className="font-mono font-semibold">{fluoride.formula}</span>
                      <span className="text-muted-foreground">{fluoride.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-2xl border border-emerald-200 bg-muted/30 p-4 dark:border-emerald-900">
                  <div className="divide-y divide-border/60">
                    <div className="flex items-start gap-3 py-2">
                      <span className="mt-1 w-14 shrink-0 text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
                        General
                      </span>
                      <span className="min-w-0 overflow-x-auto">
                        <Formula>{String.raw`\text{R–X} + \text{AgF} \xrightarrow{\Delta} \text{R–}\textcolor{#059669}{F} + \text{AgX}`}</Formula>
                      </span>
                    </div>
                    <div className="flex items-start gap-3 py-2">
                      <span className="mt-1 w-14 shrink-0 text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
                        Example
                      </span>
                      <span className="min-w-0 overflow-x-auto">
                        <Formula>{String.raw`\text{CH}_3\text{–CH}_2\text{–Cl} + \text{AgF} \xrightarrow{\Delta} \text{CH}_3\text{–CH}_2\text{–}\textcolor{#059669}{F}\text{ (fluoroalkane)} + \text{AgCl}`}</Formula>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="my-4 rounded-2xl border border-emerald-300/70 bg-emerald-50/60 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
                  <p className="text-sm font-semibold">🌟 Significance</p>
                  <p className="mt-1 text-sm">
                    The Swarts reaction is the{" "}
                    <strong>best method for preparing alkyl fluorides</strong>.
                  </p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    R—X → R—F · Swarts reaction
                  </p>
                </div>

                <TableCard
                  title="Finkelstein vs Swarts — quick comparison"
                  headers={["Feature", "Finkelstein", "Swarts"]}
                  rows={[
                    { cells: ["Product", "Iodoalkane (R—I)", "Fluoroalkane (R—F)"] },
                    { cells: ["Starting material", "R—Cl / R—Br", "R—Cl / R—Br"] },
                    { cells: ["Main reagent", "NaI", "Metallic fluoride"] },
                    { cells: ["Condition", "Dry acetone", "Heating"] },
                    { cells: ["Key point", "NaX precipitates", "Preparation of alkyl fluorides"] },
                  ]}
                />

                <Expandable title="Check yourself — ion exchange and alcohols" variant="exercise">
                  <ExerciseQa
                    questions={[
                      "Which alkyl halide is generally the most suitable for the Finkelstein reaction?",
                      "The Finkelstein reaction is generally classified as:",
                      "The reaction of an alcohol with PCl₃ produces:",
                      "Which alcohol gives immediate turbidity with Lucas reagent at room temperature?",
                    ]}
                    answers={[
                      "1-Bromopropane. The reaction proceeds mainly by an SN2 mechanism, and primary alkyl halides undergo SN2 substitution more readily because they have less steric hindrance.",
                      "Nucleophilic substitution. The iodide ion acts as a nucleophile and attacks the carbon attached to the leaving group.",
                      "Alkyl chloride and phosphorous acid.",
                      "A tertiary alcohol, such as tert-butyl alcohol (2-methylpropan-2-ol).",
                    ]}
                  />
                </Expandable>
              </>
            ),
          },
        ]}
      />

      <h2 id="h-6-5" className="text-3xl font-extrabold tracking-tight text-foreground">6.5 Preparation of Haloarenes</h2>

      <div className="my-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Two routes to a haloarene
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <a
            href="#h-6-5-hydro"
            className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 transition hover:border-blue-400 dark:border-blue-900 dark:bg-blue-950/40"
          >
            <p className="font-semibold text-blue-900 dark:text-blue-100">
              Route 1 · From hydrocarbons — electrophilic substitution
            </p>
            <p className="mt-1 text-xs text-blue-700 dark:text-blue-300">
              Benzene / toluene + halogen arene
            </p>
          </a>
          <a
            href="#h-6-5-amine"
            className="rounded-xl border border-violet-200 bg-violet-50/70 p-4 transition hover:border-violet-400 dark:border-violet-900 dark:bg-violet-950/40"
          >
            <p className="font-semibold text-violet-900 dark:text-violet-100">
              Route 2 · From amines — Sandmeyer&apos;s reaction
            </p>
            <p className="mt-1 text-xs text-violet-700 dark:text-violet-300">
              Aniline → diazonium salt → haloarene
            </p>
          </a>
        </div>
      </div>

      <PocketGrid
        title="Route at a glance"
        items={[
          {
            id: "h-6-5-hydro",
            icon: "⚛️",
            label: "1. From hydrocarbons",
            note: "Electrophilic substitution · Fe / dark",
            content: (
              <>
                <p className="mt-3 text-sm">
                  Aryl chlorides and bromides are prepared by electrophilic substitution of arenes with
                  chlorine or bromine in the presence of Lewis acid catalysts such as Fe, FeCl₃ or
                  AlCl₃.
                </p>

                <p className="mt-4 text-sm font-semibold">A. Halogenation of benzene</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Reagents — Cl₂ or Br₂. Conditions — dark, with Fe / FeCl₃ / AlCl₃.
                </p>

                <div className="mt-3 rounded-2xl border border-blue-200 bg-muted/30 p-4 dark:border-blue-900">
                  <div className="overflow-x-auto">
                    <FormulaBlock
                      latex={String.raw`\text{C}_6\text{H}_6 + \text{Cl}_2 \xrightarrow[\text{dark}]{\text{Fe / FeCl}_3} \text{C}_6\text{H}_5\text{Cl} + \text{HCl}`}
                    />
                  </div>
                </div>

                <Callout type="note" title="Three practical points">
                  <ul>
                    <li>
                      <strong>Ortho/para separation</strong> — easy, because their melting points differ
                      widely.
                    </li>
                    <li>
                      <strong>Iodine</strong> — the reaction is reversible and needs an oxidising agent
                      (HNO<sub>3</sub>, HIO<sub>4</sub>) to oxidise the HI formed.
                    </li>
                    <li>
                      <strong>Fluorine</strong> — fluoro compounds are not prepared this way because of
                      the high reactivity of fluorine.
                    </li>
                  </ul>
                </Callout>

                <p className="mt-4 text-sm font-semibold">
                  B. Halogenation of toluene — ring vs side chain
                </p>
                <div className="mt-2 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-4 dark:border-blue-900 dark:bg-blue-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
                      1 · Nuclear (ring) substitution
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">Conditions — Fe / dark</p>
                    <div className="mt-3 space-y-1 text-xs">
                      <p className="font-mono">Toluene + Cl₂ → o-chlorotoluene + p-chlorotoluene</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 dark:border-amber-900 dark:bg-amber-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">
                      2 · Side-chain substitution
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Conditions — hν / UV / boiling
                    </p>
                    <div className="mt-3 space-y-1 text-xs">
                      <p className="font-mono">Toluene + Cl₂ → Benzyl chloride</p>
                    </div>
                  </div>
                </div>

                <Callout type="note" title="Note on chlorination with sunlight">
                  <p>
                    In the presence of sunlight (UV), chlorine can <strong>add</strong> to the benzene
                    ring to give the addition product — benzene hexachloride (BHC); direct halogenation
                    in the dark gives substitution.
                  </p>
                </Callout>

                <p className="mt-4 text-sm font-semibold">Directing effects of substituents</p>
                <TableCard
                  title="Ring-directing groups"
                  headers={["Ortho-para directing", "Meta directing"]}
                  rows={[
                    { cells: ["−R (e.g. −CH₃, −CH₂CH₃)", "−COOH"] },
                    { cells: ["−X (−Cl, −Br, …)", "−CN"] },
                    { cells: ["−NH₂", "−NO₂"] },
                    { cells: ["−OH", "−SO₃H"] },
                  ]}
                />
              </>
            ),
          },
          {
            id: "h-6-5-amine",
            icon: "🧪",
            label: "2. From amines",
            note: "Diazonium route · Sandmeyer",
            content: (
              <>
                <p className="mt-3 text-sm">
                  A primary aromatic amine (e.g. aniline), suspended in cold aqueous mineral acid and
                  treated with NaNO₂, gives a <strong>diazonium salt</strong>. Cuprous chloride or
                  bromide then replaces the diazonium group by —Cl or —Br.
                </p>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Step 1 — diazotisation (273–278 K / 0–5 °C)
                </p>
                <div className="mt-2 rounded-2xl border border-violet-200 bg-muted/30 p-4 dark:border-violet-900">
                  <FormulaBlock
                    latex={String.raw`\text{C}_6\text{H}_5\text{NH}_2 + \text{NaNO}_2 + 2\text{HCl} \xrightarrow{273-278\ \text{K}} \text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{NaCl} + 2\text{H}_2\text{O}`}
                  />
                </div>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Step 2 — Sandmeyer (CuCl / CuBr)
                </p>
                <div className="mt-2 rounded-2xl border border-violet-200 bg-muted/30 p-4 dark:border-violet-900">
                  <FormulaBlock
                    latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{CuCl} \rightarrow \text{C}_6\text{H}_5\text{Cl} + \text{N}_2\uparrow`}
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Diazonium group (—N₂⁺X⁻) replaced by —Cl or —Br; nitrogen gas released.
                </p>
                <div className="mt-2 rounded-xl border border-sky-200 bg-sky-50/60 p-3 dark:border-sky-900 dark:bg-sky-950/40">
                  <p className="text-xs font-semibold">
                    For the iodide — no cuprous halide needed
                  </p>
                  <div className="mt-2 overflow-x-auto">
                    <FormulaBlock
                      latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{KI} \rightarrow \text{C}_6\text{H}_5\text{I} + \text{N}_2\uparrow + \text{KCl}`}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Shake the diazonium salt solution with KI.
                  </p>
                </div>

                <p className="mt-4 text-sm font-semibold">Gattermann&apos;s reaction (modification)</p>
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <FormulaBlock
                    latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{X}^- \xrightarrow{\text{Cu powder / HX}} \text{C}_6\text{H}_5\text{–X} + \text{N}_2\uparrow + \text{CuX}`}
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Uses copper powder with HX instead of cuprous halide (CuX). Key distinction: Cu
                    powder + HX vs CuCl / CuBr.
                  </p>
                </div>

                <p className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  Balz–Schiemann reaction — fluorobenzene
                </p>
                <div className="rounded-2xl border border-emerald-300/70 bg-emerald-50/60 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
                  <FormulaBlock
                    latex={String.raw`\text{C}_6\text{H}_5\text{N}_2^+\text{BF}_4^- \xrightarrow{\Delta} \text{C}_6\text{H}_5\text{F} + \text{BF}_3 + \text{N}_2\uparrow`}
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Preparation of fluorobenzene from benzene diazonium tetrafluoroborate (heating). This
                    is the reliable route to fluoroarenes; direct fluorination is unsuitable because
                    fluorine is too reactive.
                  </p>
                </div>
              </>
            ),
          },
          {
            id: "h-6-5-revision",
            icon: "📊",
            label: "3. Quick revision",
            note: "All haloarene routes at a glance",
            content: (
              <TableCard
                title="Reaction comparison"
                headers={["Reaction", "Starting material", "Reagent / condition", "Product"]}
                rows={[
                  { cells: ["Sandmeyer", "Diazonium salt", "CuCl / CuBr", "Ar—Cl / Ar—Br"] },
                  { cells: ["Iodide prep", "Diazonium salt", "KI", "Ar—I"] },
                  { cells: ["Gattermann", "Diazonium salt", "Cu powder + HX", "Ar—X"] },
                  { cells: ["Balz-Schiemann", "Diazonium tetrafluoroborate", "Heating", "Ar—F"] },
                ]}
              />
            ),
          },
        ]}
      />

      <h2 id="h-6-6" className="text-3xl font-extrabold tracking-tight text-foreground">6.6 Physical Properties</h2>

      <PocketGrid
        title="Physical properties at a glance"
        items={[
          {
            id: "h-6-6-state",
            icon: "🌡️",
            label: "1. Physical state",
            note: "Gas → liquid / solid",
            content: (
              <>
                <p className="text-sm font-semibold">1. Physical state</p>
                <p className="text-sm">
                  Lower members are gases or liquids at room temperature; higher members are generally
                  liquids or solids. The state depends on molecular size and structure.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {[
                    { formula: "CH₃Cl", name: "Methyl chloride" },
                    { formula: "CH₃Br", name: "Methyl bromide" },
                    { formula: "C₂H₅Cl", name: "Ethyl chloride" },
                    { formula: "CHClF₂, …", name: "Some chlorofluoromethanes" },
                  ].map((item) => (
                    <div
                      key={item.formula}
                      className="flex items-center justify-between rounded-2xl border border-sky-200 bg-sky-50/60 px-4 py-3 dark:border-sky-900 dark:bg-sky-950/40"
                    >
                      <span className="font-mono text-sm font-semibold text-sky-900 dark:text-sky-100">
                        {item.formula}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.name}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Higher haloalkanes and haloarenes — liquids / solids, of increasing molecular mass.
                </p>

                <div className="mt-3 rounded-xl border border-border/60 bg-muted/30 px-3 py-2 text-xs">
                  Increasing carbon atoms → stronger Van der Waals attractions → greater molecular
                  cohesion and higher physical state.
                </div>
              </>
            ),
          },
          {
            id: "h-6-6-boiling-point",
            icon: "📈",
            label: "2. Boiling point",
            note: "Parent vs haloalkane · factors",
            content: (
              <>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  A. Comparison with parent hydrocarbons
                </p>
                <div className="mt-2 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Parent hydrocarbon
                    </p>
                    <p className="mt-2 text-sm">Weaker overall intermolecular attractions</p>
                  </div>
                  <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-4 dark:border-blue-900 dark:bg-blue-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
                      Haloalkane
                    </p>
                    <p className="mt-2 text-sm">
                      Dipole–dipole <strong>+</strong> Van der Waals attractions
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Generally higher boiling points than the parent hydrocarbons.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  B. Factors affecting boiling point
                </p>
                <div className="mt-2 space-y-2">
                  {[
                    {
                      factor: "Number of carbon atoms",
                      trend: "↑ C atoms → ↑ B.P.",
                      detail: "Increasing carbon-chain size, higher molecular mass",
                      up: true,
                    },
                    {
                      factor: "Number of halogen atoms",
                      trend: "↑ X atoms → ↑ B.P.",
                      detail: "For comparable molecular structures",
                      up: true,
                    },
                    {
                      factor: "Size of halogen (F → Cl → Br → I)",
                      trend: "R–I > R–Br > R–Cl > R–F",
                      detail: "Van der Waals forces increase with atomic size",
                      up: true,
                    },
                    {
                      factor: "Branching",
                      trend: "↑ branching → ↓ B.P.",
                      detail: "Reduced molecular surface area; weaker Van der Waals attractions",
                      up: false,
                    },
                    {
                      factor: "Isomeric dihalobenzenes",
                      trend: "bp: o > p > m",
                      detail:
                        "Boiling point — o > p > m; melting point of para-isomers is much higher (p > o > m) because their symmetry fits the crystal lattice better.",
                      up: null,
                    },
                  ].map((item) => (
                    <div
                      key={item.factor}
                      className="rounded-xl border border-border/60 bg-muted/30 p-3"
                    >
                      <div className="grid gap-1 md:grid-cols-[1fr_auto] md:items-center">
                        <div>
                          <p className="text-sm font-semibold">{item.factor}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
                        </div>
                        {item.up !== null && (
                          <span
                            className={
                              item.up
                                ? "text-xs font-bold text-emerald-700 dark:text-emerald-300"
                                : "text-xs font-bold text-amber-700 dark:text-amber-300"
                            }
                          >
                            {item.trend}
                          </span>
                        )}
                        {item.up === null && (
                          <span className="text-xs font-bold text-foreground">{item.trend}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ),
          },
          {
            id: "h-6-6-solubility-density",
            icon: "💧",
            label: "3. Solubility & density",
            note: "Water / organic solvents",
            content: (
              <>
                <p className="mt-3 text-sm font-semibold">Solubility</p>
                <div className="mt-2 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 dark:border-amber-900 dark:bg-amber-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">
                      In water — very slight / immiscible
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                      <li>Haloalkanes cannot form hydrogen bonds with water.</li>
                      <li>
                        Dissolving needs energy to break haloalkane–haloalkane and water–water
                        attractions; the new haloalkane–water attractions are weaker, so less energy is
                        released.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                      In organic solvents — highly soluble
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      New intermolecular attractions have strength comparable with those being broken.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold">Density</p>
                <p className="mt-2 text-sm">
                  Bromo-, iodo- and polychloro-derivatives of hydrocarbons are heavier than water;
                  density increases with the number of C atoms, the number of halogen atoms and the
                  atomic mass of the halogen.
                </p>
                <TableCard
                  caption="Table 6.3: Density of Some Haloalkanes"
                  headers={["Compound", "Density / g mL⁻¹", "Compound", "Density / g mL⁻¹"]}
                  rows={[
                    { cells: ["n-C₃H₇Cl", "0.89", "CH₂Cl₂", "1.336"] },
                    { cells: ["n-C₃H₇Br", "1.335", "CHCl₃", "1.489"] },
                    { cells: ["n-C₃H₇I", "1.747", "CCl₄", "1.595"] },
                  ]}
                />
              </>
            ),
          },
        ]}
      />

      <Expandable
        title="Intext 6.6 — Arrange in order of increasing boiling point"
        variant="exercise"
      >
        <p>
          (i) Bromomethane, bromoform, chloromethane, dibromomethane. (ii) 1-Chloropropane,
          isopropyl chloride, 1-chlorobutane.
        </p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>
          (i) Chloromethane &lt; bromomethane &lt; dibromomethane &lt; bromoform — boiling point
          increases with molecular mass.
        </p>
        <p>
          (ii) Isopropyl chloride &lt; 1-chloropropane &lt; 1-chlorobutane — the branched isomer has a
          lower boiling point than the straight chain, and the C<sub>4</sub> compound boils higher than
          the C<sub>3</sub> compounds.
        </p>
      </Expandable>

      <h2 id="h-6-7" className="text-3xl font-extrabold tracking-tight text-foreground">6.7 Chemical Reactions</h2>

      <p>The reactions of haloalkanes fall into three categories:</p>
      <ol>
        <li>Nucleophilic substitution</li>
        <li>Elimination reactions</li>
        <li>Reaction with metals</li>
      </ol>

      <h3 id="h-6-7-1" className="text-2xl font-bold tracking-tight text-foreground">6.7.1 Reactions of Haloalkanes</h3>

      <PocketGrid
        title="6.7.1 — Learning blocks"
        items={[
          {
            id: "h-6-7-1-block-1",
            icon: "🔄",
            label: "Block 1: Nucleophilic substitution (incl. stereochemistry)",
            note: "Reagents, Products, Mechanisms",
            content: (
              <>
                <p className="text-sm">Reactions fall into three categories:</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Nucleophilic substitution</li>
                  <li>Elimination reactions</li>
                  <li>Reaction with metals</li>
                </ol>

                <p className="mt-3 text-sm font-semibold">Nucleophilic substitution Reactions ($R-X + Nu^- \rightarrow R-Nu + X^-$)</p>
                <TableCard
                  caption="Nucleophilic substitution of alkyl halides"
                  headers={["Reagent", "Nucleophile (Nu⁻)", "Substitution Product (R–Nu)", "Class of Main Product"]}
                  rows={[
                    { cells: ["NaOH / KOH", "HO⁻", "ROH", "Alcohol"] },
                    { cells: ["H₂O", "H₂O", "ROH", "Alcohol"] },
                    { cells: ["NaOR′", "R′O⁻", "ROR′", "Ether"] },
                    { cells: ["NaI", "I⁻", "R-I", "Alkyl iodide"] },
                    { cells: ["NH₃", "NH₃", "RNH₂", "Primary amine"] },
                    { cells: ["R′NH₂", "R′NH₂", "RNHR′", "Secondary amine"] },
                    { cells: ["R′R″NH", "R′R″NH", "RNR′R″", "Tertiary amine"] },
                    { cells: ["KCN", "CN⁻", "RCN", "Nitrile (cyanide)"] },
                    { cells: ["AgCN", "AgCN⁻", "RNC", "Isonitrile"] },
                    { cells: ["KNO₂", "O-N=O", "R-O-N=O", "Alkyl nitrite"] },
                    { cells: ["AgNO₂", "Ag-O-N=O", "R-NO₂", "Nitroalkane"] },
                    { cells: ["R′COOAg", "R′COO⁻", "R′COOR", "Ester"] },
                    { cells: ["LiAlH₄", "H⁻", "RH", "Hydrocarbon"] },
                    { cells: ["R′⁻M⁺", "R′⁻", "RR′", "Alkane"] },
                  ]}
                />

                <p className="mt-3 text-sm font-semibold">Practice Reactions — Ethyl Bromide ($CH_3-CH_2-Br$)</p>
                <div className="mt-1 space-y-1 text-sm">
                  <p><strong>(a) with aq. KOH:</strong> CH₃-CH₂-Br + aq. KOH → CH₃-CH₂-OH + KBr</p>
                  <p><strong>(b) with KCN:</strong> CH₃-CH₂-Br + KCN → CH₃-CH₂-CN + KBr</p>
                  <p><strong>(c) with AgCN:</strong> CH₃-CH₂-Br + AgCN → CH₃-CH₂-NC + AgBr</p>
                </div>

                <h4 className="mt-3 text-sm font-semibold">S_N2 Mechanism</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                  <li>Example: CH₃-Cl + OH⁻ → CH₃-OH + Cl⁻</li>
                  <li>Single step with transition state [OH···CH₃···Cl]‡.</li>
                  <li>Bond making &amp; breaking simultaneous; no intermediate.</li>
                  <li>Molecularity = 2; Order = 2.</li>
                  <li>Reactivity: 1° &gt; 2° &gt; 3°.</li>
                  <li>Stereochemistry: inversion (Walden inversion).</li>
                </ul>

                <h4 className="mt-3 text-sm font-semibold">S_N1 Mechanism</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                  <li>Example: (CH₃)₃C–Cl + OH⁻ → (CH₃)₃C–OH + Cl⁻</li>
                  <li>Step 1 (slow): ionisation → carbocation + Cl⁻.</li>
                  <li>Step 2 (fast): nucleophile attack.</li>
                  <li>Two steps; carbocation intermediate.</li>
                  <li>Molecularity = 1; Order = 1.</li>
                  <li>Reactivity: 3° &gt; 2° &gt; 1°.</li>
                  <li>Stereochemistry: racemisation (inversion + retention).</li>
                </ul>

                <TableCard
                  caption="Comparison: S_N1 vs. S_N2"
                  headers={["Feature", "S_N1", "S_N2"]}
                  rows={[
                    { cells: ["Mechanism", "Unimolecular", "Bimolecular"] },
                    { cells: ["Molecularity & Order", "1", "2"] },
                    { cells: ["Steps", "Two steps", "Single step"] },
                    { cells: ["Intermediate/State", "Carbocation", "Transition state"] },
                    { cells: ["Reactivity", "3° > 2° > 1°", "1° > 2° > 3°"] },
                    { cells: ["Stereochemical outcome", "Racemisation", "Inversion only"] },
                  ]}
                />
                <p className="mt-3 text-sm font-semibold">Optical Activity, Chirality &amp; Enantiomers</p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                  <li><strong>Ordinary Light:</strong> vibrates in all planes perpendicular to propagation.</li>
                  <li><strong>Nicol Prism:</strong> used to obtain plane-polarised light.</li>
                  <li><strong>Dextrorotatory (d / +):</strong> rotates PPL to the right (clockwise).</li>
                  <li><strong>Laevo (l / -):</strong> rotates PPL to the left (counter-clockwise).</li>
                  <li>A carbon bonded to four different groups is an asymmetric/chiral carbon; achiral = super-imposable mirror images; chiral = enantiomers.</li>
                </ul>

                <p className="mt-3 text-sm font-semibold">Stereochemical outcomes / racemisation</p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                  <li>Racemic mixture: 50% d + 50% l; optically inactive due to external compensation.</li>
                  <li>Inversion: opposite spatial configuration (e.g., SN2).</li>
                  <li>Retention: configuration preserved.</li>
                  <li>Racemisation: equimolar mixture formed; inactive.</li>
                </ul>
              </>
            ),
          },
        ]}
      />

      <Expandable title="Check yourself — SN1, SN2 and stereochemistry" variant="exercise">
        <ExerciseQa
          questions={[
            "Which factor generally increases the rate of an SN2 reaction?",
            "Which compound undergoes SN2 substitution most rapidly with CN⁻?",
            "What is the stereochemical outcome of an SN2 reaction at a chiral carbon?",
            "Which haloalkane contains a chiral carbon atom?",
            "Which compound can exhibit optical isomerism?",
            "A racemic mixture of two enantiomers is optically inactive because:",
            "Which reaction is stereospecific with respect to the configuration of the reacting chiral carbon?",
            "Which stereochemical outcome is characteristic of an SN2 reaction at a chiral carbon?",
          ]}
          answers={[
            "Using a strong nucleophile.",
            "Bromomethane — minimum steric hindrance allows easy backside attack by CN⁻.",
            "Inversion of configuration.",
            "CH₃CHBrCH₂CH₃ (2-bromobutane): carbon-2 is bonded to H, Br, CH₃ and CH₂CH₃ — four different groups.",
            "2-Bromobutane — only it has a carbon carrying four distinct groups (CH₃, H, Br, C₂H₅).",
            "The optical rotations cancel each other (external compensation).",
            "SN2 reaction.",
            "Inversion of configuration (Walden inversion).",
          ]}
        />
      </Expandable>

      <h3 id="h-6-7-2" className="text-2xl font-bold tracking-tight text-foreground">6.7.2 Reactions of Haloarenes</h3>

      <h4 id="h-6-7-2-1" className="text-xl font-semibold tracking-tight text-foreground">1. Nucleophilic substitution</h4>

      <p>
        Aryl halides are <strong>extremely less reactive</strong> towards nucleophilic substitution than
        haloalkanes, for four reasons:
      </p>

      <ol>
        <li>
          <strong>Resonance effect.</strong> In haloarenes the electron pairs on the halogen are in
          conjugation with the p-electrons of the ring, so the C—Cl bond acquires partial double bond
          character. Bond cleavage is therefore more difficult.
        </li>
        <li>
          <strong>Difference in hybridisation.</strong> In a haloalkane the carbon bearing halogen is{" "}
          <em>sp</em>
          <sup>3</sup> hybridised; in a haloarene it is <em>sp</em>
          <sup>2</sup>. The greater s-character makes the <em>sp</em>
          <sup>2</sup> carbon more electronegative, so it holds the C—X electron pair more tightly.
          The C—Cl bond is 177 pm in the haloalkane but only 169 pm in the haloarene, and a shorter bond
          is harder to break.
        </li>
        <li>
          <strong>Instability of the phenyl cation.</strong> The phenyl cation that would form by
          self-ionisation is not stabilised by resonance, so an S<sub>N</sub>1 mechanism is ruled out.
        </li>
        <li>
          <strong>Repulsion.</strong> The electron-rich nucleophile is less likely to approach the
          electron-rich arene ring.
        </li>
      </ol>

      

      <p>
        <strong>Replacement by a hydroxyl group.</strong> Chlorobenzene can be converted into phenol by
        heating in aqueous sodium hydroxide at 623 K and 300 atmospheres.
      </p>

      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{Cl} + \text{NaOH} \xrightarrow{623\ \text{K},\ 300\ \text{atm}} \text{C}_6\text{H}_5\text{OH} + \text{NaCl}`} />

      <p>
        An electron-withdrawing group (—NO<sub>2</sub>) at <em>ortho</em>- and <em>para</em>-positions
        greatly increases the reactivity of haloarenes; at the <em>meta</em>-position it has no effect.
      </p>

      <FormulaBlock latex={String.raw`2,4\text{-dinitrochlorobenzene} + \text{NaOH(aq)} \xrightarrow{368\ \text{K}} 2,4\text{-dinitrophenol} + \text{NaCl}`} />

      <Callout type="note" title="Why only ortho and para?">
        A nitro group at <em>ortho</em> or <em>para</em> withdraws electron density from the ring and
        so facilitates attack of the nucleophile; the carbanion (Meisenheimer complex) formed is
        stabilised by resonance, and the negative charge appears at the positions carrying the —NO
        <sub>2</sub>. With a <em>meta</em>-nitro group, none of the resonating structures bears the
        negative charge on the carbon carrying —NO<sub>2</sub>, so the charge is not stabilised and
        reactivity is unchanged.
      </Callout>

      <Expandable
        title="Example 6.9 — Chlorine withdraws electrons, yet directs ortho/para. Why?"
        variant="example"
      >
        <p>
          Although chlorine is an electron withdrawing group, yet it is <em>ortho</em>-, <em>para</em>
          -directing in electrophilic aromatic substitution reactions. Why?
        </p>
        <p className="mt-3 font-semibold">Solution</p>
        <p>
          Chlorine withdraws electrons through the inductive effect and releases electrons through
          resonance. Through the inductive effect it destabilises the intermediate carbocation formed
          during electrophilic substitution. Through resonance the halogen stabilises that carbocation,
          and the effect is more pronounced at <em>ortho</em>- and <em>para</em>-positions. The
          inductive effect is stronger than the resonance effect and causes net electron withdrawal,
          hence net deactivation. The resonance effect opposes the inductive effect for attack at{" "}
          <em>ortho</em>- and <em>para</em>-positions, making deactivation less there. So{" "}
          <Highlight color="yellow">reactivity is controlled by the stronger inductive effect and
          orientation by the resonance effect</Highlight>.
        </p>
      </Expandable>

      <h4 id="h-6-7-2-2" className="text-xl font-semibold tracking-tight text-foreground">2. Electrophilic substitution reactions</h4>

      <p>
        Haloarenes undergo the usual electrophilic reactions of the benzene ring — halogenation,
        nitration, sulphonation and Friedel–Crafts reactions. The halogen, besides being slightly
        deactivating, is <strong>o,p-directing</strong>, so further substitution occurs at positions{" "}
        <em>ortho</em> and <em>para</em> to it. Because of its −I effect the ring is somewhat
        deactivated compared with benzene, so these reactions occur slowly and need more drastic
        conditions.
      </p>

      <TableCard
        caption="Electrophilic substitution of chlorobenzene"
        headers={["Reaction", "Reagents", "Main product"]}
        rows={[
          { cells: ["Halogenation", "Cl₂ / FeCl₃", "p-Dichlorobenzene (with o-isomer)"] },
          { cells: ["Nitration", "conc. HNO₃ / conc. H₂SO₄", "p-Nitrochlorobenzene (with o-isomer)"] },
          { cells: ["Sulphonation", "conc. H₂SO₄", "p-Chlorobenzenesulphonic acid"] },
          { cells: ["Friedel–Crafts alkylation", "CH₃Cl / anhydrous AlCl₃", "p-Chlorotoluene (with o-isomer)"] },
        ]}
      />

      <h4 id="h-6-7-2-3" className="text-xl font-semibold tracking-tight text-foreground">3. Reaction with metals</h4>

      <p>
        <strong>Wurtz–Fittig reaction.</strong> A mixture of an alkyl halide and an aryl halide gives an
        alkylarene when treated with sodium in dry ether.
      </p>

      <FormulaBlock latex={String.raw`\text{C}_6\text{H}_5\text{Br} + \text{C}_2\text{H}_5\text{Br} + 2\text{Na} \xrightarrow{\text{dry ether}} \text{C}_6\text{H}_5\text{C}_2\text{H}_5 + 2\text{NaBr}`} />

      <p>
        <strong>Fittig reaction.</strong> Aryl halides alone give analogous compounds when treated with
        sodium in dry ether, two aryl groups being joined together.
      </p>

      <FormulaBlock latex={String.raw`2\text{C}_6\text{H}_5\text{Cl} + 2\text{Na} \xrightarrow{\text{dry ether}} \text{C}_6\text{H}_5\text{—C}_6\text{H}_5 + 2\text{NaCl}`} />

      

      <Expandable
        title="Intext 6.3 — Dihalogen derivatives of propane"
        variant="exercise"
      >
        <p>Write structures of different dihalogen derivatives of propane.</p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>
          Four are possible: ClCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>Cl (1,3-), ClCH
          <sub>2</sub>CHClCH<sub>3</sub> (1,2-), Cl<sub>2</sub>CHCH<sub>2</sub>CH<sub>3</sub> (1,1-)
          and CH<sub>3</sub>CCl<sub>2</sub>CH<sub>3</sub> (2,2-dichloropropane).
        </p>
      </Expandable>

      <Expandable
        title="Intext 6.4 — Which C₅H₁₂ isomer gives one, three or four monochlorides?"
        variant="exercise"
      >
        <p>
          Among the isomeric alkanes of molecular formula C<sub>5</sub>H<sub>12</sub>, identify the one
          that on photochemical chlorination yields (i) a single monochloride, (ii) three isomeric
          monochlorides, (iii) four isomeric monochlorides.
        </p>
        <p className="mt-3 font-semibold">Answer</p>
        <p>
          (i) <strong>Neopentane</strong>, (CH<sub>3</sub>)<sub>4</sub>C — all twelve hydrogens are
          equivalent, so replacing any one gives the same product.
        </p>
        <p>
          (ii) <strong>n-Pentane</strong> — its hydrogens fall into three equivalent groups, giving
          1-, 2- and 3-chloropentane.
        </p>
        <p>
          (iii) <strong>Isopentane (2-methylbutane)</strong> — its hydrogens fall into four equivalent
          groups, so four isomeric products are possible.
        </p>
      </Expandable>

      <h3 id="h-6-7-3" className="text-2xl font-bold tracking-tight text-foreground">
6.7.3 Block 2 — β-Elimination (Dehydrohalogenation)</h3>

      <p>Halides also undergo elimination: a halogen is removed from the α‑carbon and a hydrogen from the adjacent β‑carbon, producing an alkene.</p>

      <ul className="list-disc pl-6 space-y-1 my-3">
        <li><strong>Reagents &amp; Conditions:</strong> Alcoholic KOH, heat (Δ).</li>
        <li><strong>General Process:</strong> Elimination of one H and one X from two adjacent carbons forms C=C.</li>
      </ul>

      {/* Design 01 — Elimination Mechanism */}
      <section className="my-5 rounded-2xl border-2 border-sky-200 bg-sky-50/70 p-4 dark:border-sky-900 dark:bg-sky-950/40">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">Mechanism at a glance</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex">
              <span className="rounded-2xl border border-sky-300 bg-white px-3 py-3 text-sm font-mono font-bold text-sky-900 dark:border-sky-600 dark:bg-sky-950/60 dark:text-sky-100">
                CH<sub>3</sub>–CH<sub>2</sub>
              </span>
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900 dark:text-amber-300">β‑C · keep H</span>
            </span>
            <div className="relative h-0.5 w-16 bg-slate-300 dark:bg-slate-600">
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold text-slate-600 dark:text-slate-300">Alcoholic KOH, Δ</span>
              <span className="absolute top-1/2 right-0 -translate-y-1/2 text-lg leading-none text-slate-400 dark:text-slate-500">→</span>
            </div>
            <span className="relative inline-flex">
              <span className="rounded-2xl border border-sky-300 bg-white px-3 py-3 text-sm font-mono font-bold text-sky-900 dark:border-sky-600 dark:bg-sky-950/60 dark:text-sky-100">
                CH<sub>3</sub>=CH<sub>2</sub>
              </span>
            </span>
          </div>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 px-3 py-2 text-xs dark:border-amber-900 dark:bg-amber-950/40">
            <strong>α‑Carbon (highlight Br)</strong> loses the halogen X (leaving group).
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 px-3 py-2 text-xs dark:border-amber-900 dark:bg-amber-950/40">
            <strong>β‑Carbon (highlight H)</strong> loses one adjacent hydrogen, forming C=C.
          </div>
        </div>
      </section>

      {/* Design 02 — Single product example */}
      <section className="my-5 rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">Single elimination pathway — Example A</p>
        <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Reactant</p>
            <p className="mt-1 font-mono text-sm font-bold">CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br</p>
            <p className="mt-1 text-[10px] text-muted-foreground">1‑Bromopropane</p>
          </div>
          <div className="text-center">
            <span className="block text-[10px] font-semibold text-slate-500 dark:text-slate-300">Alcoholic KOH, Δ</span>
            <span className="text-2xl text-slate-400 dark:text-slate-500">→</span>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-center dark:border-emerald-800 dark:bg-emerald-950/40">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">Product</p>
            <p className="mt-1 font-mono text-sm font-bold">CH<sub>3</sub>CH=CH<sub>2</sub></p>
            <p className="mt-1 text-[10px] text-emerald-700 dark:text-emerald-300">Propene</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Only one elimination pathway is possible here — no branching diagram is needed.</p>
      </section>

      {/* Design 03 — Multiple elimination products */}
      <section className="my-5">
        <p className="text-sm font-semibold">6.7.3 (B) 2‑Bromobutane — Zaitsev’s (Saytzeff’s) Rule</p>
        <p className="mt-1 text-xs text-muted-foreground">Removal of β‑hydrogen from different β‑carbons can give two different alkenes.</p>
        <PocketGrid
          title="Which product forms?"

          items={[
            {
              id: "h-6-7-3-but-1-ene",
              icon: "🟨",
              label: "But-1-ene (minor)",
              note: "Less substituted alkene",
              content: (
                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-3 dark:border-amber-900 dark:bg-amber-950/30">
                  <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">Minor</p>
                  <p className="mt-1 font-mono text-sm font-bold">CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub></p>
                </div>
              ),
            },
            {
              id: "h-6-7-3-but-2-ene",
              icon: "🟢",
              label: "But-2-ene (major)",
              note: "More substituted alkene",
              content: (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 dark:border-emerald-900 dark:bg-emerald-950/40">
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Major</p>
                  <p className="mt-1 font-mono text-sm font-bold">CH<sub>3</sub>CH=CHCH<sub>3</sub></p>
                </div>
              ),
            },
          ]}
        />
        <div className="mt-3 rounded-xl border border-border/60 bg-muted/30 px-3 py-2 text-xs">
          <strong>Zaitsev (Saytzeff) rule:</strong>{" "}
          when different alkenes can form during dehydrohalogenation, the preferred major product is the
          <Highlight>more highly substituted alkene</Highlight> (greater number of alkyl groups on the
          double‑bonded carbons).
        </div>
      </section>

      <h3 id="h-6-7-4" className="text-2xl font-bold tracking-tight text-foreground">6.7.4 Block 3 — Reactions with Metals</h3>

      <p>Active metals (Na, Mg) react with haloalkanes to give alkanes/organometallics.</p>

      {/* Design 01 — Two pathways overview */}
      <section className="my-5 rounded-2xl border-2 border-purple-200 bg-purple-50/40 p-4 dark:border-purple-900 dark:bg-purple-950/30">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-purple-700 dark:text-purple-300">Overview — two reaction pathways</p>
        <PocketGrid
          title="Choose your metal"
          items={[
            {
              id: "h-6-7-4-wurtz",
              icon: "🟢",
              label: "Wurtz (Na)",
              note: "C–C coupling",
              content: (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 dark:border-emerald-900 dark:bg-emerald-950/40">
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Wurtz (Na)</p>
                  <p className="mt-1 text-xs">Dry ether · C–C bond formed → alkane.</p>
                </div>
              ),
            },
            {
              id: "h-6-7-4-grignard",
              icon: "🟣",
              label: "Grignard (Mg)",
              note: "R–Mg–X",
              content: (
                <div className="rounded-xl border border-purple-200 bg-purple-50/70 p-3 dark:border-purple-700 dark:bg-purple-950/40">
                  <p className="text-xs font-semibold text-purple-700 dark:text-purple-300">Grignard (Mg)</p>
                  <p className="mt-1 text-xs">Dry ether · Mg inserted into C–X → R–Mg–X.</p>
                </div>
              ),
            },
          ]}
        />
      </section>

      {/* Design 02 — Wurtz panel */}
      <section className="my-5 rounded-2xl border-2 border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/50">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">Wurtz reaction — important</p>
        <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <p className="font-mono text-sm font-bold">R–X + 2Na + X–R</p>
          <p className="mt-2 flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-300">Dry Ether</span>
            <span className="text-slate-400 dark:text-slate-500">→</span>
            <span className="font-mono text-sm font-bold">R–R + 2NaX</span>
          </p>
          <p className="mt-3 text-xs text-emerald-700 dark:text-emerald-300">Product: Alkane (R–R) via C–C coupling.</p>
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/40 p-3 dark:border-emerald-900 dark:bg-emerald-950/30">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">Example (chloromethane)</p>
            <p className="mt-1 font-mono text-sm font-bold">2CH<sub>3</sub>Cl + 2Na → CH<sub>3</sub>CH<sub>3</sub> + 2NaCl</p>
            <p className="mt-1 text-xs text-muted-foreground">Ethane (C–C bond highlighted above).</p>
          </div>
        </div>
      </section>

      {/* Design 03 — Grignard formation panel */}
      <section className="my-5 rounded-2xl border-2 border-purple-200 bg-purple-50/60 p-4 dark:border-purple-900 dark:bg-purple-950/50">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-purple-700 dark:text-purple-300">Grignard reagent formation</p>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <p className="font-mono text-sm font-bold">R–X + Mg</p>
          <p className="mt-2 flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-300">Dry Ether</span>
            <span className="text-slate-400 dark:text-slate-500">→</span>
            <span className="font-mono text-sm font-bold">R–Mg–X</span>
          </p>
          <p className="mt-3 text-xs text-purple-700 dark:text-purple-300">Grignard reagent (alkyl magnesium halide). Mg inserted into the C–X bond.</p>
          <div className="mt-4 rounded-xl border border-purple-200 bg-purple-50/40 p-3 dark:border-purple-900 dark:bg-purple-950/30">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-purple-700 dark:text-purple-300">Example (methylmagnesium chloride)</p>
            <p className="mt-1 font-mono text-sm font-bold">CH<sub>3</sub>Cl + Mg → CH<sub>3</sub>MgCl</p>
          </div>
        </div>
      </section>

      {/* Design 04 — Comparison table */}
      <section className="my-5">
        <TableCard
          caption="Wurtz vs Grignard — quick revision"
          headers={["Feature", "Wurtz", "Grignard"]}
          rows={[
            { cells: ["Metal", "Sodium (Na)", "Magnesium (Mg)"] },
            { cells: ["Starting material", "Haloalkane", "Haloalkane"] },
            { cells: ["Condition", "Dry ether", "Dry ether"] },
            { cells: ["Main product", "Alkane (R–R)", "R–Mg–X"] },
            { cells: ["Key outcome", "C–C coupling", "RMgX formation"] },
          ]}
        />
      </section>

      <h2 id="h-6-8" className="text-3xl font-extrabold tracking-tight text-foreground">6.8 Polyhalogen Compounds</h2>"

      <p>
        Carbon compounds containing more than one halogen atom are called <strong>polyhalogen
        compounds</strong>. Many of them are useful in industry and agriculture.
      </p>

      <h3 id="h-6-8-1" className="text-2xl font-bold tracking-tight text-foreground">6.8.1 Dichloromethane (Methylene chloride, CH₂Cl₂)</h3>

      <p>
        Widely used as a solvent and as a paint remover, as a propellant in aerosols, as a process
        solvent in drug manufacture, and as a metal cleaning and finishing solvent. Methylene chloride
        harms the human central nervous system: lower levels in air can slightly impair hearing and
        vision, higher levels cause dizziness, nausea and tingling or numbness in the fingers and toes.
        Direct skin contact causes intense burning and mild redness; contact with the eyes can burn the
        cornea.
      </p>

      

      <h3 id="h-6-8-2" className="text-2xl font-bold tracking-tight text-foreground">6.8.2 Trichloromethane (Chloroform, CHCl₃)</h3>

      <p>
        Chemically, chloroform is a solvent for fats, alkaloids, iodine and other substances. Its major
        use today is in the production of the freon refrigerant R-22. It was once used as a general
        anaesthetic in surgery but has been replaced by less toxic, safer anaesthetics such as ether.
        Inhaling chloroform vapours depresses the central nervous system — about 900 ppm for a short
        time causes dizziness, fatigue and headache. Chronic exposure may damage the liver (where
        chloroform is metabolised to phosgene) and the kidneys.
      </p>

      

      <Callout type="warning" title="Chloroform must be stored in the dark">
        <p>
          Chloroform is slowly oxidised by air in the presence of light to the extremely poisonous gas
          carbonyl chloride (phosgene). It is therefore stored in closed, dark coloured bottles filled
          completely so that air is kept out.
        </p>
        <FormulaBlock latex={String.raw`2\text{CHCl}_3 + \text{O}_2 \xrightarrow{\text{light}} 2\text{COCl}_2 + 2\text{HCl}`} />
      </Callout>

      

      <h3 id="h-6-8-3" className="text-2xl font-bold tracking-tight text-foreground">6.8.3 Triiodomethane (Iodoform, CHI₃)</h3>

      <p>
        It was used earlier as an antiseptic, but the antiseptic properties are due to the liberation of
        free iodine and not to iodoform itself. Because of its objectionable smell it has been replaced
        by other formulations containing iodine.
      </p>

      

      <h3 id="h-6-8-4" className="text-2xl font-bold tracking-tight text-foreground">6.8.4 Tetrachloromethane (Carbon tetrachloride, CCl₄)</h3>

      <p>
        Produced in large quantities for the manufacture of refrigerants and propellants for aerosol
        cans, and used as feedstock in the synthesis of chlorofluorocarbons and other chemicals, in
        pharmaceutical manufacturing and as a general solvent. Until the mid-1960s it was widely used as
        a cleaning fluid — a degreasing agent in industry and a spot remover and fire extinguisher at
        home.
      </p>

      <p>
        There is some evidence that exposure to carbon tetrachloride causes liver cancer in humans. The
        most common effects are dizziness, light headedness, nausea and vomiting, which can cause
        permanent damage to nerve cells; in severe cases these effects can lead rapidly to stupor,
        coma, unconsciousness or death. Exposure can make the heartbeat irregular or stop, and the
        chemical irritates the eyes on contact. When released into the air, CCl<sub>4</sub> rises to the
        atmosphere and depletes the ozone layer, increasing human exposure to ultraviolet rays — leading
        to skin cancer, eye diseases and disorders, and possible disruption of the immune system.
      </p>

      

      <h3 id="h-6-8-5" className="text-2xl font-bold tracking-tight text-foreground">6.8.5 Freons</h3>

      <p>
        The chlorofluorocarbon compounds of methane and ethane are collectively known as{" "}
        <strong>freons</strong>. They are extremely stable, unreactive, non-toxic, non-corrosive and
        easily liquefiable gases. <strong>Freon 12 (CCl<sub>2</sub>F<sub>2</sub>)</strong> is one of the
        most common freons in industrial use; it is manufactured from tetrachloromethane by the Swarts
        reaction. Freons are used as aerosol propellants and for refrigeration and air conditioning.
      </p>

      <FormulaBlock latex={String.raw`\text{CCl}_4 + 2\text{SbF}_3 \xrightarrow{\text{SbCl}_5} \text{CCl}_2\text{F}_2 + 2\text{SbCl}_3`} />

      

      <p>
        Most freon, even that used in refrigeration, eventually reaches the atmosphere, where it diffuses
        unchanged into the stratosphere. There it initiates radical chain reactions that upset the
        natural ozone balance.
      </p>

      <h3 id="h-6-8-6" className="text-2xl font-bold tracking-tight text-foreground">6.8.6 p,p′-Dichlorodiphenyltrichloroethane (DDT)</h3>

      <p>
        DDT, the first chlorinated organic insecticide, was originally prepared in 1873, but it was not
        until 1939 that Paul Muller of Geigy Pharmaceuticals in Switzerland discovered its effectiveness
        as an insecticide; he was awarded the Nobel Prize in Medicine and Physiology in 1948. Its use
        increased enormously worldwide after World War II, mainly because of its effectiveness against
        the mosquito that spreads malaria and the lice that carry typhus.
      </p>

      <p>
        Problems appeared in the late 1940s. Many insect species developed resistance, and DDT was found
        to be highly toxic to fish. Its chemical stability and fat solubility compounded the problem:
        DDT is not metabolised rapidly by animals and is deposited and stored in fatty tissues, so if
        ingestion continues at a steady rate it builds up over time. The use of DDT was banned in the
        United States in 1973, although it is still used in some other parts of the world.
      </p>

      

      <MistakeCard
        mistake="Treating 'Sₙ1 racemises, Sₙ2 inverts' as a fact to memorise without knowing why."
        correction="The carbocation in Sₙ1 is planar (sp²) and achiral, so attack from either face gives both enantiomers; Sₙ2 attacks only from the side opposite the leaving group, so the umbrella flips."
        example="2-bromobutane + OH⁻: Sₙ1 → (±)-butan-2-ol; Sₙ2 → inverted product only."
      />

      <MistakeCard
        mistake="Assuming an o,p-directing group must also be activating."
        correction="Halogens are o,p-directing but deactivating: −I (strong) withdraws electron density, +M (weaker) stabilises the ortho/para intermediate. Reactivity follows −I, orientation follows +M."
        example="Chlorobenzene nitrates more slowly than benzene, yet gives mainly p-nitrochlorobenzene."
      />

      <h2 id="h-6-exercises" className="text-3xl font-extrabold tracking-tight text-foreground">Exercises</h2>

      <Expandable title="Exercises" variant="exercise">


      <ExerciseQa
        answersHeading="NCERT Exercise Questions (6.1–6.22)"
        questions={[
          <>
            Name the following halides according to the IUPAC system and classify them as alkyl,
            allyl, benzyl (primary, secondary, tertiary), vinyl or aryl halides: (i) (CH<sub>3</sub>)
            <sub>2</sub>CHCH(Cl)CH<sub>3</sub> (ii) CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH(C
            <sub>2</sub>H<sub>5</sub>)Cl (iii) CH<sub>3</sub>CH<sub>2</sub>C(CH<sub>3</sub>)
            <sub>2</sub>CH<sub>2</sub>I (iv) (CH<sub>3</sub>)<sub>3</sub>CCH<sub>2</sub>CH(Br)C
            <sub>6</sub>H<sub>5</sub> (v) CH<sub>3</sub>CH(CH<sub>3</sub>)CH(Br)CH<sub>3</sub> (vi) CH
            <sub>3</sub>C(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>CH<sub>2</sub>Br (vii) CH<sub>3</sub>
            C(Cl)(C<sub>2</sub>H<sub>5</sub>)CH<sub>2</sub>CH<sub>3</sub> (viii) CH<sub>3</sub>CH=C(Cl)CH
            <sub>2</sub>CH(CH<sub>3</sub>)<sub>2</sub> (ix) CH<sub>3</sub>CH=CHC(Br)(CH<sub>3</sub>)
            <sub>2</sub> (x) p-ClC<sub>6</sub>H<sub>4</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)<sub>2</sub>{" "}
            (xi) m-ClCH<sub>2</sub>C<sub>6</sub>H<sub>4</sub>CH<sub>2</sub>C(CH<sub>3</sub>)<sub>3</sub>{" "}
            (xii) o-Br-C<sub>6</sub>H<sub>4</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub>.
          </>,
          <>
            Give the IUPAC names of the following compounds: (i) CH<sub>3</sub>CH(Cl)CH(Br)CH<sub>3</sub>{" "}
            (ii) CHF<sub>2</sub>CBrClF (iii) ClCH<sub>2</sub>C≡CCH<sub>2</sub>Br (iv) (CCl<sub>3</sub>)
            <sub>3</sub>CCl (v) CH<sub>3</sub>C(p-ClC<sub>6</sub>H<sub>4</sub>)<sub>2</sub>CH(Br)CH
            <sub>3</sub> (vi) (CH<sub>3</sub>)<sub>3</sub>CCH=CClC<sub>6</sub>H<sub>4</sub>I-p.
          </>,
          <>
            Write the structures of the following organic halogen compounds: (i) 2-Chloro-3-methylpentane
            (ii) p-Bromochlorobenzene (iii) 1-Chloro-4-ethylcyclohexane (iv) 2-(2-Chlorophenyl)-1-iodooctane
            (v) 2-Bromobutane (vi) 4-<em>tert</em>-butyl-3-iodoheptane (vii) 1-Bromo-4-<em>sec</em>
            -butyl-2-methylbenzene (viii) 1,4-Dibromobut-2-ene.
          </>,
          <>
            Which one of the following has the highest dipole moment? (i) CH<sub>2</sub>Cl<sub>2</sub>{" "}
            (ii) CHCl<sub>3</sub> (iii) CCl<sub>4</sub>.
          </>,
          <>
            A hydrocarbon C<sub>5</sub>H<sub>10</sub> does not react with chlorine in dark but gives a
            single monochloro compound C<sub>5</sub>H<sub>9</sub>Cl in bright sunlight. Identify the
            hydrocarbon.
          </>,
          <>Write the isomers of the compound having formula C<sub>4</sub>H<sub>9</sub>Br.</>,
          <>
            Write the equations for the preparation of 1-iodobutane from (i) 1-butanol (ii)
            1-chlorobutane (iii) but-1-ene.
          </>,
          <>What are ambident nucleophiles? Explain with an example.</>,
          <>
            Which compound in each of the following pairs will react faster in S<sub>N</sub>2 reaction
            with OH⁻? (i) CH<sub>3</sub>Br or CH<sub>3</sub>I (ii) (CH<sub>3</sub>)<sub>3</sub>CCl or
            CH<sub>3</sub>Cl.
          </>,
          <>
            Predict all the alkenes that would be formed by dehydrohalogenation of the following halides
            with sodium ethoxide in ethanol and identify the major alkene: (i)
            1-Bromo-1-methylcyclohexane (ii) 2-Chloro-2-methylbutane (iii)
            2,2,3-Trimethyl-3-bromopentane.
          </>,
          <>
            How will you bring about the following conversions? (i) Ethanol to but-1-yne (ii) Ethane to
            bromoethene (iii) Propene to 1-nitropropane (iv) Toluene to benzyl alcohol (v) Propene to
            propyne (vi) Ethanol to ethyl fluoride (vii) Bromomethane to propanone (viii) But-1-ene to
            but-2-ene (ix) 1-Chlorobutane to n-octane (x) Benzene to biphenyl.
          </>,
          <>
            Explain why (i) the dipole moment of chlorobenzene is lower than that of cyclohexyl chloride
            (ii) alkyl halides, though polar, are immiscible with water (iii) Grignard reagents should be
            prepared under anhydrous conditions.
          </>,
          <>Give the uses of freon 12, DDT, carbon tetrachloride and iodoform.</>,
          <>
            Write the structure of the major organic product in each of the following reactions: (i) CH
            <sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Cl + NaI (ii) (CH<sub>3</sub>)<sub>3</sub>CBr + KOH
            (iii) CH<sub>3</sub>CH(Br)CH<sub>2</sub>CH<sub>3</sub> + NaOH (iv) CH<sub>3</sub>CH
            <sub>2</sub>Br + KCN (v) C<sub>6</sub>H<sub>5</sub>ONa + C<sub>2</sub>H<sub>5</sub>Cl (vi)
            CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH + SOCl<sub>2</sub> (vii) CH<sub>3</sub>CH
            <sub>2</sub>CH=CH<sub>2</sub> + HBr (viii) CH<sub>3</sub>CH=C(CH<sub>3</sub>)<sub>2</sub> +
            HBr.
          </>,
          <>Write the mechanism of the following reaction: nBuBr + KCN → nBuCN.</>,
          <>
            Arrange the compounds of each set in order of reactivity towards S<sub>N</sub>2
            displacement: (i) 2-Bromo-2-methylbutane, 1-bromopentane, 2-bromopentane (ii)
            1-Bromo-3-methylbutane, 2-bromo-2-methylbutane, 2-bromo-3-methylbutane (iii)
            1-Bromobutane, 1-bromo-2,2-dimethylpropane, 1-bromo-2-methylbutane,
            1-bromo-3-methylbutane.
          </>,
          <>
            Out of C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl and C<sub>6</sub>H<sub>5</sub>CHClC
            <sub>6</sub>H<sub>5</sub>, which is more easily hydrolysed by aqueous KOH?
          </>,
          <>p-Dichlorobenzene has higher m.p. than those of o- and m-isomers. Discuss.</>,
          <>
            How can the following conversions be carried out? (i) Propene to propan-1-ol (ii) Ethanol to
            but-1-yne (iii) 1-Bromopropane to 2-bromopropane (iv) Toluene to benzyl alcohol (v) Benzene
            to 4-bromonitrobenzene (vi) Benzyl alcohol to 2-phenylethanoic acid (vii) Ethanol to
            propanenitrile (viii) Aniline to chlorobenzene (ix) 2-Chlorobutane to 3,4-dimethylhexane
            (x) 2-Methyl-1-propene to 2-chloro-2-methylpropane (xi) Ethyl chloride to propanoic acid
            (xii) But-1-ene to n-butyliodide (xiii) 2-Chloropropane to 1-propanol (xiv) Isopropyl
            alcohol to iodoform (xv) Chlorobenzene to p-nitrophenol (xvi) 2-Bromopropane to
            1-bromopropane (xvii) Chloroethane to butane (xviii) Benzene to diphenyl (xix) tert-Butyl
            bromide to isobutyl bromide (xx) Aniline to phenylisocyanide.
          </>,
          <>
            The treatment of alkyl chlorides with aqueous KOH leads to the formation of alcohols but in
            the presence of alcoholic KOH, alkenes are major products. Explain.
          </>,
          <>
            Primary alkyl halide C<sub>4</sub>H<sub>9</sub>Br (a) reacted with alcoholic KOH to give
            compound (b). Compound (b) is reacted with HBr to give (c), which is an isomer of (a). When
            (a) is reacted with sodium metal it gives compound (d), C<sub>8</sub>H<sub>18</sub>, which
            is different from the compound formed when n-butyl bromide is reacted with sodium. Give the
            structural formula of (a) and write the equations for all the reactions.
          </>,
          <>
            What happens when (i) n-butyl chloride is treated with alcoholic KOH (ii) bromobenzene is
            treated with Mg in the presence of dry ether (iii) chlorobenzene is subjected to hydrolysis
            (iv) ethyl chloride is treated with aqueous KOH (v) methyl bromide is treated with sodium in
            the presence of dry ether (vi) methyl chloride is treated with KCN?
          </>,
        ]}
      />
    
      </Expandable>
</div>
  );
}
