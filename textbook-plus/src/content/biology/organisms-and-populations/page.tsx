import { Callout } from "@/components/content/Callout";
import { TableCard } from "@/components/content/data/TableCard";
import { FormulaBlock } from "@/components/content/Formula";
import { AgePyramidsFigure11_1 } from "@/components/content/biology/AgePyramidsFigure11_1";
import { PopulationGrowthGraphs } from "@/components/content/biology/PopulationGrowthGraphs";

export default function OrganismsAndPopulationsChapter() {
  return (
    <>
      <h2 id="h-11-1">1. Population</h2>

      <h3 id="h-11-1a">A. Definition</h3>
      <p>
        A <strong>population</strong> is a group of individuals of the same species living in a well-defined
        geographical area, sharing or competing for similar resources, and potentially interbreeding.
      </p>

      <h3 id="h-11-1a-core">Core Characteristics</h3>
      <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <div className="mb-2 text-2xl" aria-hidden>
            🌍
          </div>
          <p className="text-sm font-semibold text-foreground">Geographical Area</p>
          <p className="mt-1 text-sm text-muted-foreground">Live in groups within a well-defined geographical area.</p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <div className="mb-2 text-2xl" aria-hidden>
            🌱
          </div>
          <p className="text-sm font-semibold text-foreground">Same Species</p>
          <p className="mt-1 text-sm text-muted-foreground">Consist of individuals belonging to the same species.</p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <div className="mb-2 text-2xl" aria-hidden>
            🔗
          </div>
          <p className="text-sm font-semibold text-foreground">Resources</p>
          <p className="mt-1 text-sm text-muted-foreground">Share or compete for similar resources.</p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <div className="mb-2 text-2xl" aria-hidden>
            🧬
          </div>
          <p className="text-sm font-semibold text-foreground">Reproduction</p>
          <p className="mt-1 text-sm text-muted-foreground">Potentially interbreed. Asexual reproduction is also included.</p>
        </div>
      </div>

      <Callout type="note" title="Asexual reproduction — important note">
        Groups of individuals resulting from <strong>asexual reproduction</strong> are also generally considered
        populations in ecological studies.
      </Callout>

      <h3 id="h-11-1b">B. Examples of Population</h3>
      <TableCard
        title="Examples of population"
        headers={["No.", "Example", "Habitat"]}
        rows={[
          { cells: ["1", "Cormorants", "Wetland"] },
          { cells: ["2", "Rats", "Abandoned dwelling"] },
          { cells: ["3", "Teakwood trees", "Forest tract"] },
          { cells: ["4", "Bacteria", "Culture plate"] },
          { cells: ["5", "Lotus plants", "Pond"] },
        ]}
      />

      <h3 id="h-11-1c">C. Population Attributes</h3>
      <p>A population is characterised by three major attributes:</p>
      <ol className="list-decimal pl-5 space-y-1">
        <li>
          <strong>Birth rates and death rates</strong> <span className="text-muted-foreground">(Per-capita)</span>
        </li>
        <li>
          <strong>Sex ratio</strong>
        </li>
        <li>
          <strong>Age pyramid</strong>
        </li>
      </ol>

      <h2 id="h-11-2">2. Individual vs. Population Attributes</h2>
      <TableCard
        title="Individual vs population attributes"
        headers={["Attribute", "Individual Organism", "Population"]}
        rows={[
          { cells: ["Birth & Death", "Has births and deaths", "Characterised by per-capita birth rates and death rates"] },
          { cells: ["Gender / Sex", "Is either male or female", "Characterised by sex ratio"] },
          { cells: ["Age", "Has a specific age", "Characterised by age distribution"] },
        ]}
      />

      <h2 id="h-11-3">3. Per Capita Rate Calculations</h2>
      <p>
        <strong>Concept:</strong> Per capita rate calculations for birth rate and death rate.
      </p>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground">A. Birth Rate — Lotus Plants</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Given:</span>
          </p>
          <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Initial population = 20 lotus plants.</li>
            <li>New plants produced = 8.</li>
            <li>Time = 1 year.</li>
          </ul>
          <p className="mt-3 text-sm font-medium text-foreground">Calculation:</p>
          <FormulaBlock latex={String.raw`\text{Birth Rate}=\frac{8}{20}`} />
          <FormulaBlock latex={String.raw`0.4\text{ offspring per lotus per year}`} />
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground">B. Death Rate — Fruitflies</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Given:</span>
          </p>
          <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Population = 40 fruitflies.</li>
            <li>Deaths = 4.</li>
            <li>Time = 1 week.</li>
          </ul>
          <p className="mt-3 text-sm font-medium text-foreground">Calculation:</p>
          <FormulaBlock latex={String.raw`\text{Death Rate}=\frac{4}{40}`} />
          <FormulaBlock latex={String.raw`0.1\text{ individuals per fruitfly per week}`} />
        </div>
      </div>

      <h2 id="h-11-4">4. Age Pyramids &amp; Population Growth Status</h2>
      <h3 id="h-11-4a">A. Structure of Age Pyramids</h3>
      <p>
        <strong>Definition:</strong> A graphic representation showing the age distribution of males and females in a
        population.
      </p>
      <p className="mt-2 text-sm font-medium text-foreground">Three age groups (bottom → top):</p>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Pre-reproductive</li>
        <li>Reproductive</li>
        <li>Post-reproductive</li>
      </ol>

      <h3 id="h-11-4b">B. Three Population Growth Patterns — Figure 11.1</h3>
      <AgePyramidsFigure11_1 />
      <div className="space-y-4">
        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <p className="text-sm font-semibold text-foreground">(a) Expanding Population — Broad base</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Triangular pyramid shape.</li>
            <li>Broad pre-reproductive group.</li>
            <li>Pre-reproductive group larger than reproductive group.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <p className="text-sm font-semibold text-foreground">(b) Stable Population — Bell-shaped</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Bell-shaped or pillar-like appearance.</li>
            <li>Pre-reproductive and reproductive groups nearly equal.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
          <p className="text-sm font-semibold text-foreground">(c) Declining Population — Urn-shaped</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Narrow base.</li>
            <li>Pre-reproductive group smaller than reproductive group.</li>
          </ul>
        </div>
      </div>

      <h2 id="h-11-5">Population Ecology — Population Attributes</h2>

      <h3 id="h-11-5-1">1. Population Density (N)</h3>
      <h4 id="h-11-5-1a">A. Definition &amp; Range</h4>
      <p>
        <strong>Population density (N):</strong> Technical term for population size.
      </p>
      <p className="mt-2 text-sm font-medium text-foreground">Range:</p>
      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
        <li>
          <strong>Less than 10:</strong> Siberian cranes at Bharatpur wetlands in any year.
        </li>
        <li>
          <strong>Millions:</strong> <em>Chlamydomonas</em> in a pond.
        </li>
      </ul>

      <h4 id="h-11-5-1b">B. Methods of Measuring Population Density</h4>
      <TableCard
        title="Methods of measuring population density"
        headers={["Method", "Explanation", "Example"]}
        rows={[
          {
            cells: [
              "Total Count",
              "Standard measure; difficult or misleading when numbers are massive.",
              "Direct counting",
            ],
          },
          {
            cells: [
              "Per Cent Cover / Biomass",
              "Preferred when counting numbers underestimates ecological impact.",
              "200 carrot grass (Parthenium hysterophorus) plants vs. one huge banyan tree",
            ],
          },
          {
            cells: [
              "Relative Density",
              "Used when absolute numbers are difficult to count.",
              "Number of fish caught per trap in a lake",
            ],
          },
          {
            cells: [
              "Indirect Estimation",
              "Estimates population without directly seeing or counting individuals.",
              "Tiger census using pug marks and faecal pellets",
            ],
          },
        ]}
      />
      <div className="mt-2 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Important distinction:</p>
        <ul className="mt-1 list-disc pl-5 space-y-1">
          <li><strong>Total count</strong> → Number of individuals.</li>
          <li><strong>Per cent cover / biomass</strong> → Ecological impact.</li>
          <li><strong>Relative density</strong> → Relative measure.</li>
          <li><strong>Indirect estimation</strong> → Evidence-based estimate without direct counting.</li>
        </ul>
      </div>

      <h3 id="h-11-5-2">2. Processes Influencing Population Density (N)</h3>
      <h4 id="h-11-5-2a">A. Dynamic Nature of Population</h4>
      <p>
        <strong>Population size fluctuates continuously over time.</strong>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">Key influences: Food availability, Predation pressure, Adverse weather.</p>

      <h4 id="h-11-5-2b">B. Four Basic Factors</h4>
      <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/40 p-4 dark:bg-emerald-950/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">Addition (+)</p>
          <p className="mt-1 text-lg" aria-hidden>
            🐣
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">Natality (B)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Number of births during a given period added to the initial population density.
          </p>
        </div>
        <div className="rounded-2xl border border-rose-500/30 bg-rose-50/40 p-4 dark:bg-rose-950/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-300">Removal (−)</p>
          <p className="mt-1 text-lg" aria-hidden>
            ☠️
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">Mortality (D)</p>
          <p className="mt-1 text-sm text-muted-foreground">Number of deaths in the population during a given period.</p>
        </div>
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/40 p-4 dark:bg-emerald-950/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">Addition (+)</p>
          <p className="mt-1 text-lg" aria-hidden>
            🛬
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">Immigration (I)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Number of individuals of the same species entering the habitat from elsewhere during a given period.
          </p>
        </div>
        <div className="rounded-2xl border border-rose-500/30 bg-rose-50/40 p-4 dark:bg-rose-950/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-300">Removal (−)</p>
          <p className="mt-1 text-lg" aria-hidden>
            🛫
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">Emigration (E)</p>
          <p className="mt-1 text-sm text-muted-foreground">Number of individuals leaving the habitat for another during a given period.</p>
        </div>
      </div>

      <h4 id="h-11-5-2c">C. Population Density Equation</h4>
      <p className="text-sm font-medium text-foreground">Population density at the next time interval</p>
      <FormulaBlock latex={String.raw`N_{t+1}=N_t+[(B+I)-(D+E)]`} />
      <TableCard
        title="Symbols"
        headers={["Symbol", "Meaning"]}
        rows={[
          { cells: [String.raw`N_{t+1}`, "Population density at next time"] },
          { cells: [String.raw`N_t`, "Initial population density"] },
          { cells: ["B", "Natality"] },
          { cells: ["I", "Immigration"] },
          { cells: ["D", "Mortality"] },
          { cells: ["E", "Emigration"] },
        ]}
      />
      <p className="mt-3 text-sm font-medium text-foreground">Population growth conditions:</p>
      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
        <li>
          Increase: <FormulaBlock latex={String.raw`B+I > D+E`} />
        </li>
        <li>
          Decrease: <FormulaBlock latex={String.raw`B+I < D+E`} />
        </li>
      </ul>

      <h4 id="h-11-5-2d">D. Key Drivers</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Under normal conditions → <strong>Births and deaths</strong> are the primary factors.
        </li>
        <li>
          Special conditions → <strong>Immigration</strong> can become a major factor.
        </li>
        <li>Example: Colonising a brand-new habitat.</li>
      </ul>

      <h2 id="h-11-6">🌱 Population Growth Models</h2>

      <h3 id="h-11-6-1">1. Exponential Growth (Geometric Growth)</h3>
      <p>
        <strong>Condition:</strong> Unlimited resources (food and space).
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Species realise their full innate growth potential.</li>
        <li>
          <strong>Intrinsic rate of natural increase (r):</strong> Measures the potential of population growth.
        </li>
        <li>
          <FormulaBlock latex={String.raw`r=b-d`} /> (b = per capita birth rate, d = per capita death rate)
        </li>
      </ul>
      <p className="mt-2 text-sm font-medium text-foreground">Differential equation:</p>
      <FormulaBlock latex={String.raw`\frac{dN}{dt}=rN`} />
      <p className="mt-2 text-sm font-medium text-foreground">Integral form:</p>
      <FormulaBlock latex={String.raw`N_t=N_0e^{rt}`} />
      <p className="mt-2 text-sm text-muted-foreground">
        Where: N<sub>t</sub> = population density at time t; N<sub>0</sub> = initial population density; r = intrinsic
        rate of natural increase; e = 2.71828.
      </p>
      <p className="mt-3 text-sm font-medium text-foreground">Examples of intrinsic growth rate (r)</p>
      <TableCard
        title="Examples of r"
        headers={["Population", "r"]}
        rows={[
          { cells: ["Norway rat", "0.015"] },
          { cells: ["Flour beetle", "0.12"] },
          { cells: ["Human population in India (1981)", "0.0205"] },
        ]}
      />
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li>
          <strong>Curve:</strong> J-shaped.
        </li>
        <li>Even slow-breeding animals like elephants can build enormous populations if unchecked.</li>
      </ul>

      <h3 id="h-11-6-2">2. Verhulst–Pearl Logistic Growth</h3>
      <p>
        <strong>Condition:</strong> Limited resources in nature.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Resources are finite and limiting.</li>
        <li>Competition occurs; only the fittest survive.</li>
      </ul>
      <div className="my-3 rounded-2xl border border-amber-500/40 bg-amber-50/60 p-4 dark:bg-amber-950/20">
        <p className="text-sm font-semibold text-foreground">Carrying Capacity (K)</p>
        <p className="mt-1 text-sm text-muted-foreground">Maximum population density that a habitat can sustain.</p>
      </div>
      <p className="text-sm font-medium text-foreground">Phases of growth:</p>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Lag phase</li>
        <li>Acceleration phase</li>
        <li>Deceleration phase</li>
        <li>Asymptote (population reaches K)</li>
      </ol>
      <p className="mt-3 text-sm font-medium text-foreground">Logistic growth equation:</p>
      <FormulaBlock latex={String.raw`\frac{dN}{dt}=rN\left(\frac{K-N}{K}\right)`} />
      <p className="mt-2 text-sm text-muted-foreground">
        Where: N = population density at time t; r = intrinsic rate of natural increase; K = carrying capacity.
      </p>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li>
          <strong>Curve:</strong> Sigmoid (S-shaped).
        </li>
        <li>More realistic for natural populations because resources are rarely unlimited.</li>
      </ul>

      <h3 id="h-11-6-3">3. 📈 Graphical Comparison</h3>
      <div className="flex flex-wrap gap-4 text-sm">
        <div>
          <span className="font-semibold text-foreground">Exponential growth</span> — <span className="text-muted-foreground">J-shaped</span>
        </div>
        <div>
          <span className="font-semibold text-foreground">Logistic growth</span> — <span className="text-muted-foreground">S-shaped</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">Population density vs. time. Schematic representations of the two growth models.</p>
      <PopulationGrowthGraphs />

      <h3 id="h-11-6-4">4. ⚖️ Comparison Summary</h3>
      <TableCard
        title="Exponential vs logistic growth"
        headers={["Feature", "Exponential", "Logistic"]}
        rows={[
          { cells: ["Resources", "Unlimited", "Limited"] },
          { cells: ["Curve", "J-shaped", "S-shaped"] },
          { cells: ["Carrying capacity", "Not applicable", "Present (K)"] },
          { cells: ["Equation", String.raw`\frac{dN}{dt}=rN`, String.raw`\frac{dN}{dt}=rN\left(\frac{K-N}{K}\right)`] },
          { cells: ["Realism", "Less realistic", "More realistic"] },
        ]}
      />
      <Callout type="important" title="Exam takeaway">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Exponential</strong> → Unlimited resources → J-shaped curve.
          </li>
          <li>
            <strong>Logistic</strong> → Limited resources → S-shaped curve → Carrying capacity (K).
          </li>
        </ul>
      </Callout>

      <h2 id="h-11-7">11.1.4 Population Interactions</h2>

      <h3 id="h-11-7-1">1. 🤝 Interspecific Interactions</h3>
      <p className="text-sm font-medium text-foreground">Ecological necessity</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>No species lives in isolation.</li>
        <li>Animals, plants and microbes interact to form biological communities.</li>
      </ul>
      <p className="mt-2">
        <strong>Interspecific interactions</strong> = interactions between populations of two different species.
      </p>
      <div className="my-4 rounded-2xl border border-border/60 bg-muted/30 p-4" aria-label="Interaction sign legend">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Sign legend (used throughout)</p>
        <div className="mt-3 flex flex-wrap items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-lg font-bold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200" aria-hidden>+</span>
            <span className="text-sm"><span className="font-medium text-foreground">Beneficial</span> <span className="text-muted-foreground">(+)</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-lg font-bold text-rose-800 dark:bg-rose-900/40 dark:text-rose-200" aria-hidden>−</span>
            <span className="text-sm"><span className="font-medium text-foreground">Detrimental</span> <span className="text-muted-foreground">(−)</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-lg font-bold text-slate-800 dark:bg-slate-700 dark:text-slate-100" aria-hidden>0</span>
            <span className="text-sm"><span className="font-medium text-foreground">Neutral / no effect</span> <span className="text-muted-foreground">(0)</span></span>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        <strong>Common characteristic:</strong> Predation, parasitism and commensalism involve closely living interacting
        species.
      </p>

      <h4 id="h-11-7-1-summary">Summary of interactions</h4>
      <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "Mutualism", href: "#h-11-7-6", a: "+", b: "+", effect: "Both benefit", aCls: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200", bCls: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200" },
          { name: "Competition", href: "#h-11-7-3", a: "−", b: "−", effect: "Both are adversely affected", aCls: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200", bCls: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200" },
          { name: "Predation", href: "#h-11-7-2", a: "+", b: "−", effect: "Predator benefits; prey is harmed", aCls: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200", bCls: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200" },
          { name: "Parasitism", href: "#h-11-7-4", a: "+", b: "−", effect: "Parasite benefits; host is harmed", aCls: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200", bCls: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200" },
          { name: "Commensalism", href: "#h-11-7-5", a: "+", b: "0", effect: "One benefits; other is unaffected", aCls: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200", bCls: "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100" },
          { name: "Amensalism", href: "#h-11-7-3a", a: "−", b: "0", effect: "One is harmed; other is unaffected", aCls: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200", bCls: "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100" },
        ].map((it) => (
          <a
            key={it.name}
            href={it.href}
            className="block rounded-2xl border border-border/60 bg-card p-4 shadow-sm transition hover:border-emerald-500/40 hover:shadow-md"
          >
            <p className="text-sm font-semibold text-foreground">{it.name}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-muted-foreground">A</span>
              <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-bold ${it.aCls}`}>{it.a}</span>
              <span className="text-xs text-muted-foreground">B</span>
              <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-bold ${it.bCls}`}>{it.b}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{it.effect}</p>
          </a>
        ))}
      </div>

      <h3 id="h-11-7-2">2. 🐅 Predation (+ / −)</h3>
      <p>
        <strong>Definition:</strong> One species (predator) benefits by feeding on another species (prey), which is
        harmed.
      </p>
      <h4 id="h-11-7-2a">A. Ecological significance</h4>
      <p className="text-sm font-medium text-foreground">1. Energy transfer</p>
      <div className="my-3 rounded-2xl border border-border/60 bg-muted/20 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Trophic energy transfer (direction = energy flow)</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-lg bg-emerald-100 px-3 py-1.5 font-medium text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100">Autotrophs</span>
          <span className="text-muted-foreground" aria-hidden>→</span>
          <span className="rounded-lg bg-amber-100 px-3 py-1.5 font-medium text-amber-900 dark:bg-amber-900/40 dark:text-amber-100">Herbivore / seed-eater</span>
          <span className="text-muted-foreground" aria-hidden>→</span>
          <span className="rounded-lg bg-rose-100 px-3 py-1.5 font-medium text-rose-900 dark:bg-rose-900/40 dark:text-rose-100">Higher-level predator</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Examples: sparrow eating a seed; tiger eating a deer (both are predation in this ecological sense).</p>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>Acts as a conduit for transferring energy fixed by autotrophs to higher trophic levels.</li>
        <li>Even a sparrow eating a seed is ecologically a predator, just like a tiger eating a deer.</li>
      </ul>
      <p className="mt-2 text-sm font-medium text-foreground">2. Prey population control</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Keeps prey populations under check.</li>
        <li>Helps prevent ecosystem instability.</li>
      </ul>
      <p className="mt-2 text-sm font-medium text-foreground">3. Biological control of invasive species</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <em>Prickly pear cactus</em> introduced into Australia (1920s) was controlled using a cactus-feeding moth
          predator.
        </li>
        <li>Biological pest control in agriculture uses this principle.</li>
      </ul>
      <p className="mt-2 text-sm font-medium text-foreground">4. Maintenance of species diversity</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Predation reduces competition among competing prey species.</li>
        <li>
          <strong>Example — Starfish (Pisaster):</strong> Removal from American Pacific Coast intertidal areas → over 10
          invertebrate species became extinct due to interspecific competition.
        </li>
      </ul>
      <h4 id="h-11-7-2b">B. Prudent nature of predators</h4>
      <div className="my-3 rounded-2xl border border-amber-500/30 bg-amber-50/40 p-4 dark:bg-amber-950/20">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-200">Consequence of overexploitation (not a normal cycle)</p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-lg border border-border/60 bg-card px-2 py-1">Predator overexploits prey</span>
          <span aria-hidden>→</span>
          <span className="rounded-lg border border-border/60 bg-card px-2 py-1">Prey extinction</span>
          <span aria-hidden>→</span>
          <span className="rounded-lg border border-border/60 bg-card px-2 py-1">Predator extinction</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Arrow loop conceptually returns to predator dependence on prey (overexploitation breaks the system).</p>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>Predators do not overexploit prey.</li>
        <li>Overexploitation → Prey extinction → Predator extinction.</li>
      </ul>
      <h4 id="h-11-7-2c">C. Prey defences</h4>
      <p className="text-sm font-medium text-foreground">Animal defences</p>
      <TableCard
        title="Animal defences"
        headers={["Defence", "Example"]}
        rows={[
          { cells: ["Camouflage / cryptic coloration", "Insects, frogs"] },
          { cells: ["Toxicity", "Monarch butterfly"] },
        ]}
      />
      <p className="mt-2 text-sm text-muted-foreground">
        <strong>Monarch butterfly:</strong> During its caterpillar stage, it feeds on a poisonous weed and accumulates
        distasteful chemicals.
      </p>
      <p className="mt-3 text-sm font-medium text-foreground">Plant defences against herbivores</p>
      <p className="text-sm text-muted-foreground">Approximately 25% of insects are phytophagous (plant-eating).</p>
      <TableCard
        title="Plant defences against herbivores"
        headers={["Defence type", "Mechanism", "Examples"]}
        rows={[
          { cells: ["Morphological", "Physical structures", "Thorns in Acacia and Cactus"] },
          { cells: ["Chemical", "Chemical substances", "Cardiac glycosides in Calotropis; secondary metabolites"] },
        ]}
      />
      <p className="mt-2 text-sm font-medium text-foreground">Chemical defences</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Cardiac glycosides in <em>Calotropis</em> → protect against browsing by cattle and goats.</li>
        <li>Secondary metabolites → nicotine, caffeine, quinine, strychnine and opium.</li>
      </ul>

      <h3 id="h-11-7-3">3. ⚔️ Competition (− / −)</h3>
      <p>
        <strong>Definition:</strong> An interaction in which the fitness of one species is significantly reduced in the
        presence of another species. Fitness is measured by the <strong>intrinsic rate of increase (r)</strong>.
      </p>
      <h4 id="h-11-7-3a">A. Misconceptions and realities</h4>
      <TableCard
        title="Misconceptions vs realities"
        headers={["Misconception", "Reality"]}
        rows={[
          { cells: ["Competition occurs only between closely related species.", "Unrelated species can also compete."] },
          { cells: ["Competition requires limited resources.", "Interference competition can occur even when resources are abundant."] },
        ]}
      />
      <p className="mt-2 text-sm font-medium text-foreground">Example — Unrelated competitors</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Visiting flamingos and resident fishes in shallow South American lakes.</li>
        <li>Both compete for zooplankton.</li>
      </ul>
      <p className="mt-2 text-sm font-medium text-foreground">Interference competition</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>One species interferes with another.</li>
        <li>Result → Reduced feeding efficiency, even when resources are abundant.</li>
      </ul>
      <h4 id="h-11-7-3b">B. Gause’s Competitive Exclusion Principle</h4>
      <Callout type="important" title="Competitive Exclusion Principle (Gause)">
        Two closely related species competing for the same limiting resources cannot coexist indefinitely. The inferior
        competitor is eliminated.
      </Callout>
      <p className="mt-2 text-sm font-medium text-foreground">Example — Abingdon tortoise</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Goats introduced into the Galapagos.</li>
        <li>Goats had greater browsing efficiency.</li>
        <li>Result → Abingdon tortoise became extinct within a decade.</li>
      </ul>
      <h4 id="h-11-7-3c">C. Competitive release</h4>
      <p>
        <strong>Definition:</strong> A restricted species expands its distributional range dramatically when its
        superior competitor is experimentally removed.
      </p>
      <p className="mt-2 text-sm font-medium text-foreground">Example — Connell’s field experiments</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Location → Scotland’s rocky coast.</li>
        <li>Barnacle <em>Balanus</em> competitively excludes <em>Chathamalus</em>.</li>
      </ul>
      <h4 id="h-11-7-3d">D. Coexistence through resource partitioning</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Competing species may evolve mechanisms that promote coexistence rather than exclusion.</li>
        <li>
          <strong>Example — MacArthur’s warblers:</strong> Five warbler species coexist on the same tree, using
          different foraging patterns and feeding times (resource partitioning).
        </li>
      </ul>

      <h3 id="h-11-7-4">4. 🦟 Parasitism (+ / −)</h3>
      <p>
        <strong>Definition:</strong> A parasite benefits by living on or inside a host, which is harmed.
      </p>
      <h4 id="h-11-7-4a">A. Adaptations of parasites</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Loss of unnecessary sense organs.</li>
        <li>Adhesive organs or suckers.</li>
        <li>Loss of digestive system.</li>
        <li>High reproductive capacity.</li>
      </ul>
      <h4 id="h-11-7-4b">B. Complex life cycles</h4>
      <TableCard
        title="Complex life cycles"
        headers={["Parasite", "Requirement"]}
        rows={[
          { cells: ["Human liver fluke", "Two intermediate hosts → Snail and fish"] },
          { cells: ["Malarial parasite", "Mosquito vector for transmission"] },
        ]}
      />
      <h4 id="h-11-7-4c">C. Types of parasites</h4>
      <p className="text-sm font-medium text-foreground">1. Ectoparasites</p>
      <p className="text-sm text-muted-foreground">Live on the external surface of the host.</p>
      <TableCard
        title="Ectoparasites"
        headers={["Example", "Host"]}
        rows={[
          { cells: ["Lice", "Humans"] },
          { cells: ["Ticks", "Dogs"] },
          { cells: ["Copepods", "Marine fish"] },
          { cells: ["Cuscuta", "Hedge plants"] },
        ]}
      />
      <p className="mt-2 text-sm text-muted-foreground">
        <em>Cuscuta</em> → parasitic plant that has lost its leaves and chlorophyll.
      </p>
      <p className="mt-3 text-sm font-medium text-foreground">2. Endoparasites</p>
      <p className="text-sm text-muted-foreground">Live inside the host body at different sites.</p>
      <p className="text-sm text-muted-foreground">Possible locations: liver, kidneys, lungs and red blood cells (RBCs).</p>
      <p className="mt-3 text-sm font-medium text-foreground">3. Brood parasitism</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Parasitic bird lays eggs in another bird’s nest; host bird incubates the eggs.</li>
        <li>
          <strong>Example — Cuckoo/Koel:</strong> lays eggs in a crow’s nest during spring to summer.
        </li>
      </ul>

      <h3 id="h-11-7-5">5. 🪺 Commensalism (+ / 0)</h3>
      <p>
        <strong>Definition:</strong> One species benefits while the other remains unaffected.
      </p>
      <TableCard
        title="Commensalism examples"
        headers={["Example", "Benefiting species (+)", "Unaffected species (0)"]}
        rows={[
          { cells: ["Epiphytic orchid on mango branch", "Orchid → gets space", "Mango tree"] },
          { cells: ["Barnacles on whale’s back", "Barnacles → get transport and food", "Whale"] },
          { cells: ["Cattle egrets and grazing cattle", "Egrets → catch insects flushed out by cattle", "Cattle"] },
          { cells: ["Clown fish and sea anemone", "Fish → gets protection among stinging tentacles", "Sea anemone"] },
        ]}
      />

      <h3 id="h-11-7-6">6. 🌸 Mutualism (+ / +)</h3>
      <p>
        <strong>Definition:</strong> Both interacting species benefit.
      </p>
      <h4>Key examples</h4>
      <p className="text-sm font-medium text-foreground">1. Lichens</p>
      <p className="text-sm text-muted-foreground">Symbiotic association between:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Fungus</strong> → protection and absorption.</li>
        <li><strong>Photosynthesising algae / cyanobacteria</strong> → food.</li>
      </ul>
      <p className="mt-2 text-sm font-medium text-foreground">2. Mycorrhizae</p>
      <p className="text-sm text-muted-foreground">Symbiotic association between:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Fungi</strong> → absorb essential phosphorus from soil.</li>
        <li><strong>Roots of higher plants</strong> → provide carbohydrates.</li>
      </ul>
      <p className="mt-2 text-sm font-medium text-foreground">3. Fig tree and wasp</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>One-to-one obligate relationship.</li>
        <li>Female wasp pollinates the fig inflorescence while laying eggs in the ovary locule.</li>
        <li>Developing seeds provide food for wasp larvae.</li>
      </ul>
      <p className="mt-2 text-sm font-medium text-foreground">4. Orchid (Ophrys) and bee — Sexual deceit</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>One petal resembles a female bee.</li>
        <li>Male bee pseudocopulates with the flower.</li>
        <li>Pollen gets transferred; demonstrates tight co-evolution.</li>
      </ul>

      <p className="mt-6 text-sm text-muted-foreground">
        <strong>Chapter 11 — Organisms and Populations</strong>
        <br />
        Population interactions and their ecological significance — consolidated for revision.
      </p>
    </>
  );
}
