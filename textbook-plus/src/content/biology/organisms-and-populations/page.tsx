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
    </>
  );
}
