import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Example } from "@/components/content/Example";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { FormulaCard } from "@/components/content/FormulaCard";
import { FormulaBlock } from "@/components/content/Formula";
import { Stepper } from "@/components/content/Stepper";
import { Highlight } from "@/components/content/Highlight";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { SolvedProblem } from "@/components/content/SolvedProblem";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { CycleDiagram } from "@/components/content/process/CycleDiagram";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import { RevealAnswer } from "@/components/content/process/RevealAnswer";
import { ProblemInsightSolutionCard } from "@/components/content/process/ProblemInsightSolutionCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { OrgChart } from "@/components/content/OrgChart";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { CharacterComparison } from "@/components/content/CharacterComparison";
import { SpectrumExplorer } from "@/components/content/physics/SpectrumExplorer";
import { OscillationPlayer } from "@/components/content/physics/OscillationPlayer";
import { ChargeFateTrio } from "@/components/content/physics/ChargeFateTrio";
import { SpeedLayers } from "@/components/content/physics/SpeedLayers";
import { FieldRatio } from "@/components/content/physics/FieldRatio";
import { PropagationExplorer } from "@/components/content/physics/PropagationExplorer";
import { AmpereSurfaceToggle } from "@/components/content/physics/AmpereSurfaceToggle";
import { WaveTypesPanels } from "@/components/content/physics/WaveTypesPanels";
import { WaveAnatomyDiagram } from "@/components/content/physics/WaveAnatomyDiagram";
import { DisplacementExplorer } from "@/components/content/physics/DisplacementExplorer";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-8 flex items-center gap-3">
        <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-400" />
        {title}
      </h2>
      <div className="space-y-12">{children}</div>
    </section>
  );
}

function Label({ text }: { text: string }) {
  return (
    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground mb-4">
      {text}
    </p>
  );
}

export default function DesignGallery() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">
            Design System Preview
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            Kitchen-sink gallery of every in-page content component. Each component is rendered
            once with representative data. Check both light and dark mode, and resize to 360px
            for mobile.
          </p>
        </header>

        <div className="prose-custom max-w-3xl">
          {/* ── CORE ───────────────────────────────────────────── */}
          <Section title="Core">
            <div>
              <Label text="Callout — 5 variants" />
              <Callout type="note">This is a <strong>note</strong> callout with additional detail.</Callout>
              <Callout type="important" title="Maxwell&apos;s Equations">
                This is an <strong>important</strong> callout with a custom title.
              </Callout>
              <Callout type="warning">This is a <strong>warning</strong> callout.</Callout>
              <Callout type="didyouknow">Did you know? Light travels at 3×10⁸ m/s in vacuum.</Callout>
              <Callout type="tip">Speed trick: remember the order by acronym <strong>EMW</strong>.</Callout>
            </div>

            <div>
              <Label text="KeyPoint" />
              <KeyPoint>
                The displacement current was Maxwell&apos;s key addition to Ampère&apos;s law, completing
                the symmetry of electromagnetic theory.
              </KeyPoint>
            </div>

            <div>
              <Label text="Example" />
              <Example title="Example 8.1">
                A plane electromagnetic wave has electric field amplitude E₀ = 100 V/m.
                Find the magnetic field amplitude.
              </Example>
            </div>

            <div>
              <Label text="Comparison (3 columns)" />
              <Comparison
                columns={[
                  { title: "Transverse", children: "Oscillation perpendicular to propagation. Examples: light, water waves." },
                  { title: "Longitudinal", children: "Oscillation parallel to propagation. Examples: sound, compression springs." },
                  { title: "Electromagnetic", children: "Always transverse. E and B fields are perpendicular to each other and to propagation." },
                ]}
              />
            </div>

            <div>
              <Label text="Highlight" />
              <p>
                The speed of electromagnetic waves in vacuum is{" "}
                <Highlight>c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s</Highlight>, a fundamental constant.
              </p>
            </div>

            <div>
              <Label text="Stepper" />
              <Stepper
                steps={[
                  { label: "Identify the wave type", description: "Check whether E or B is given." },
                  { label: "Apply the relation E₀ = cB₀", description: "Use c = 3×10⁸ m/s for vacuum." },
                  { label: "Compute the result", description: "B₀ = E₀/c = 100/(3×10⁸) ≈ 3.33×10⁻⁷ T" },
                ]}
              />
            </div>

            <div>
              <Label text="FormulaCard + FormulaBlock" />
              <FormulaCard>
                <FormulaBlock
                  latex={String.raw`E = h\nu = \frac{hc}{\lambda}`}
                  label="Planck-Einstein relation"
                  tag="important"
                />
              </FormulaCard>
            </div>

            <div>
              <Label text="SpeedTricks" />
              <SpeedTricks>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  When E₀ and B₀ are both given, check their ratio: E₀/B₀ should equal c.
                  If it doesn&apos;t, the data is inconsistent.
                </p>
              </SpeedTricks>
            </div>

            <div>
              <Label text="Expandable — all 5 variants" />
              <Expandable title="Worked Example 8.1" variant="example">
                <p>Solution content goes here.</p>
              </Expandable>
              <Expandable title="Exercise 8.1 — Wave equation" variant="exercise">
                <p>Exercise content goes here.</p>
              </Expandable>
              <Expandable title="Recall: Gauss&apos;s Law" variant="recall">
                <p>Recall content goes here.</p>
              </Expandable>
              <Expandable title="Miscellaneous" variant="misc">
                <p>Miscellaneous content goes here.</p>
              </Expandable>
              <Expandable title="Custom Default Variant" variant="default">
                <p>Default variant content goes here.</p>
              </Expandable>
            </div>

            <div>
              <Label text="ProblemSolution" />
              <ProblemSolution problemNumber="8.1">
                <ProblemSolution.Problem>
                  Find the wavelength of a radio wave with frequency 100 MHz.
                </ProblemSolution.Problem>
                <ProblemSolution.Solution>
                  <p>Using λ = c/f = (3×10⁸)/(100×10⁶) = 3 m</p>
                </ProblemSolution.Solution>
              </ProblemSolution>
            </div>

            <div>
              <Label text="SolvedProblem" />
              <SolvedProblem
                number={1}
                title="Wave Speed"
                question="Find the wavelength of a radio wave with frequency 100 MHz."
                options={[
                  { label: "A", text: "1.5 m" },
                  { label: "B", text: "3.0 m" },
                  { label: "C", text: "6.0 m" },
                  { label: "D", text: "0.5 m" },
                ]}
                given="Frequency = 100 MHz, Speed of light = 3×10⁸ m/s"
                solution={<p>Using λ = c/f = (3×10⁸)/(100×10⁶) = 3 m</p>}
                answer="B. 3.0 m"
              />
            </div>

            <div>
              <Label text="ExerciseQa" />
              <ExerciseQa
                questions={[
                  <span key="q1">What is the speed of EM waves in vacuum?</span>,
                  <span key="q2">State the relation between E₀ and B₀.</span>,
                ]}
                answers={[
                  <span key="a1">3×10⁸ m/s</span>,
                  <span key="a2">E₀ = cB₀ where c = 3×10⁸ m/s</span>,
                ]}
              />
            </div>
          </Section>

          {/* ── DATA ───────────────────────────────────────────── */}
          <Section title="Data">
            <div>
              <Label text="TableCard" />
              <TableCard
                title="Properties of EM Waves"
                headers={["Property", "Symbol", "Unit"]}
                rows={[
                  { cells: ["Speed in vacuum", "c", "3×10⁸ m/s"] },
                  { cells: ["Wavelength", "λ", "m"] },
                  { cells: ["Frequency", "ν", "Hz"] },
                  { cells: ["Energy", "E", "J"] },
                ]}
                caption="Fundamental electromagnetic wave properties"
              />
            </div>

            <div>
              <Label text="Checklist" />
              <Checklist
                title="Study Checklist"
                items={[
                  { label: "Maxwell's equations (all 4)", defaultChecked: true },
                  { label: "EM wave derivation from Faraday's law" },
                  { label: "Spectrum regions and their uses" },
                  { label: "Speed of light calculation from μ₀ and ε₀" },
                ]}
              />
            </div>
          </Section>

          {/* ── PROCESS ────────────────────────────────────────── */}
          <Section title="Process">
            <div>
              <Label text="ProcessCard" />
              <ProcessCard
                title="How EM Waves Propagate"
                steps={[
                  { label: "Accelerating charge creates oscillating E and B fields", description: "Both fields are perpendicular to each other." },
                  { label: "Fields sustain each other via Faraday + Ampère-Maxwell", description: "Changing E produces B, changing B produces E." },
                  { label: "Wavefront propagates at speed c = 1/√(μ₀ε₀)", description: "Energy is carried away as electromagnetic radiation." },
                ]}
              />
            </div>

            <div>
              <Label text="CycleDiagram" />
              <CycleDiagram
                steps={[
                  { label: "Charge accelerates", detail: "Creates oscillating fields" },
                  { label: "E field changes", detail: "Induces B field" },
                  { label: "B field changes", detail: "Induces E field" },
                  { label: "Wave propagates", detail: "Energy radiates outward" },
                ]}
              />
            </div>

            <div>
              <Label text="EquationLadder" />
              <EquationLadder
                steps={[
                  { label: "Start", equation: String.raw`E = h\nu` },
                  { label: "Substitute", equation: String.raw`E = \frac{hc}{\lambda}` },
                  { label: "Rearrange", equation: String.raw`\lambda = \frac{hc}{E}`, final: true },
                ]}
              />
            </div>

            <div>
              <Label text="RevealAnswer" />
              <RevealAnswer
                question={<p>What is the speed of EM waves derived from μ₀ and ε₀?</p>}
                answer={<p>The answer is c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s.</p>}
              />
            </div>

            <div>
              <Label text="ProblemInsightSolutionCard" />
              <ProblemInsightSolutionCard
                question={<p>What is the speed of EM waves?</p>}
                insight={<p>We need μ₀ and ε₀ to derive it.</p>}
                solution={<p>c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s</p>}
              />
            </div>
          </Section>

          {/* ── CONCEPT ────────────────────────────────────────── */}
          <Section title="Concept">
            <div>
              <Label text="FactCard" />
              <FactCard
                title="Speed of Light"
                definition="The speed of electromagnetic waves in vacuum is exactly 299,792,458 m/s, commonly approximated as 3×10⁸ m/s."
                icon="⚡"
              />
            </div>

            <div>
              <Label text="ConceptCard" />
              <ConceptCard title="Displacement Current" icon="🌀">
                <p>
                  The displacement current I<sub>d</sub> = ε₀ dΦ<sub>E</sub>/dt is a term added by
                  Maxwell to Ampère&apos;s law. It accounts for the changing electric flux in regions
                  where no physical charge flows, such as between capacitor plates.
                </p>
              </ConceptCard>
            </div>

            <div>
              <Label text="OrgChart" />
              <OrgChart
                nodes={[
                  { label: "Electromagnetic Theory", children: [{ label: "Maxwell's Equations" }, { label: "EM Waves" }, { label: "Spectrum" }] },
                  { label: "Maxwell's Equations", children: [{ label: "Gauss (E)" }, { label: "Gauss (B)" }, { label: "Faraday" }, { label: "Ampère-Maxwell" }] },
                ]}
              />
            </div>

            <div>
              <Label text="TreeDiagram" />
              <TreeDiagram
                nodes={[
                  { label: "EM Spectrum", children: [{ label: "Radio" }, { label: "Microwave" }, { label: "Infrared" }, { label: "Visible" }, { label: "UV" }, { label: "X-ray" }, { label: "Gamma" }] },
                ]}
              />
            </div>
          </Section>

          {/* ── STUDY ──────────────────────────────────────────── */}
          <Section title="Study">
            <div>
              <Label text="MetricCard" />
              <div className="grid gap-4 sm:grid-cols-3">
                <MetricCard label="Speed" value="3×10⁸" unit="m/s" description="Speed of light in vacuum" />
                <MetricCard label="Wavelength" value="550" unit="nm" trend="neutral" description="Green visible light" />
                <MetricCard label="Frequency" value="100" unit="MHz" trend="up" description="FM radio band" />
              </div>
            </div>

            <div>
              <Label text="MistakeCard" />
              <MistakeCard
                mistake="Saying EM waves need a medium to travel."
                correction="EM waves are self-sustaining — oscillating E and B fields sustain each other."
                example="Light travels through the vacuum of space."
              />
            </div>
          </Section>

          {/* ── ENGLISH / ARABIC ───────────────────────────────── */}
          <Section title="English / Arabic">
            <div>
              <Label text="CharacterSketch" />
              <CharacterSketch name="The Narrator">
                <p>The narrator observes the world with quiet intensity, often drawing meaning from ordinary events. Their voice carries both detachment and deep empathy.</p>
              </CharacterSketch>
            </div>

            <div>
              <Label text="CharacterComparison" />
              <CharacterComparison
                characters={["Narrator", "The Old Man"]}
                rows={[
                  { label: "Role", values: ["Observer", "Catalyst"] },
                  { label: "Personality", values: ["Reflective, detached", "Stubborn, traditional"] },
                  { label: "Key Quote", values: [<em key="n">{"I wandered..."}</em>, <em key="o">{"I'll mend this wall"}</em>] },
                ]}
              />
            </div>
          </Section>

          {/* ── PHYSICS INTERACTIVE ─────────────────────────────── */}
          <Section title="Physics Interactive">
            <div>
              <Label text="PropagationExplorer" />
              <PropagationExplorer />
            </div>

            <div>
              <Label text="AmpereSurfaceToggle" />
              <AmpereSurfaceToggle />
            </div>

            <div>
              <Label text="ChargeFateTrio" />
              <ChargeFateTrio />
            </div>

            <div>
              <Label text="SpeedLayers" />
              <SpeedLayers />
            </div>

            <div>
              <Label text="FieldRatio" />
              <FieldRatio />
            </div>

            <div>
              <Label text="SpectrumExplorer" />
              <SpectrumExplorer />
            </div>

            <div>
              <Label text="OscillationPlayer" />
              <OscillationPlayer />
            </div>

            <div>
              <Label text="WaveTypesPanels" />
              <WaveTypesPanels />
            </div>

            <div>
              <Label text="WaveAnatomyDiagram" />
              <WaveAnatomyDiagram />
            </div>

            <div>
              <Label text="DisplacementExplorer" />
              <DisplacementExplorer />
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
