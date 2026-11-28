"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleRevision } from "@/components/content/CollapsibleRevision";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { TableCard } from "@/components/content/data/TableCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { Stepper } from "@/components/content/Stepper";
import { EquationLadder } from "@/components/content/process/EquationLadder";
import {
  RateVisual,
  CircleRadiusDiagram,
  CircularWaveDiagram,
  CubeEdgeDiagram,
} from "@/components/content/mathematics/RateDiagrams";
import {
  RectangleRateDiagram,
  BalloonInflationDiagram,
  SphereRadiusDiagram,
  SphereDiameterDiagram,
  LadderDiagram,
} from "@/components/content/mathematics/RateDiagramsPart2";
import { SandConeDiagram } from "@/components/content/mathematics/RateDiagramsPart3";
import {
  StrictlyIncreasingGraph,
  IncreasingGraph,
  StrictlyDecreasingGraph,
  DecreasingGraph,
  WaveCurveDiagram,
  ParabolaDiagram,
  DecisionFlowDiagram,
} from "@/components/content/mathematics/BehaviourGraphs";
import {
  ExponentialCurveDiagram,
  LogCurveDiagram,
  AstcQuadrantDiagram,
  SineCurveDiagram,
  CosineCurveDiagram,
  UnitCircleTanDiagram,
} from "@/components/content/mathematics/TrigGraphs";
import {
  RisingLineDiagram,
  SignNumberLine,
  InequalityNumberLine,
  WavyCurveProcess,
  CosDecreasingStrip,
} from "@/components/content/mathematics/SignDiagrams";
import {
  MaximumPointPanel,
  MinimumPointPanel,
  SquareFunctionGraph,
  ModulusGraph,
  ShiftedModulusGraph,
  InvertedModulusGraph,
  RaisedModulusGraph,
  SineBandGraph,
} from "@/components/content/mathematics/ExtremaShapeGraphs";
import {
  OpenClosedIntervalsDiagram,
  OpenIntervalLineGraph,
  MonotonicEndpointGraphs,
  ExtremeValueTheoremGraph,
  LocalExtremaGraph,
  SmoothSharpMinima,
} from "@/components/content/mathematics/ExtremaIntervalGraphs";
import {
  PositiveToNegativeSignLine,
  NegativeToPositiveSignLine,
  PositiveToPositiveSignLine,
  NegativeToNegativeSignLine,
  CubicSignNumberLine,
  DerivativeGraphRoots,
} from "@/components/content/mathematics/DerivativeSignGraphs";
import {
  ConcaveDownGraph,
  ConcaveUpGraph,
  InconclusiveSecondDerivativeGraph,
  StationaryInflectionGraph,
} from "@/components/content/mathematics/SecondDerivativeGraphs";
import { PocketGrid } from "@/components/content/PocketGrid";

/** One labelled stage inside a worked solution. */
function SolutionStep({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-3 first:border-t-0 first:pt-0">
      <div className="t-micro mb-1.5">{label}</div>
      <div className="space-y-2 [&>div]:my-0 [&>p]:mb-0">{children}</div>
    </div>
  );
}

/** A collapsed worked example: question first, then the step-by-step stages. */
function WorkedExample({
  title,
  question,
  children,
}: {
  title: string;
  question: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Expandable title={title} subjectColor="var(--subject-mathematics)">
      <div className="space-y-3">
        <SolutionStep label="Question">{question}</SolutionStep>
        {children}
      </div>
    </Expandable>
  );
}

/** A worked problem whose question, givens and diagrams stay visible above the collapsed solution. */
function SolvedProblem({
  title,
  question,
  children,
}: {
  title: string;
  question: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3 sm:px-5">
        <span className="t-micro">{title}</span>
      </div>
      <div className="px-4 py-4 sm:px-5">
        <SolutionStep label="Question">{question}</SolutionStep>
        <Expandable
          title="Show solution"
          variant="example"
          subjectColor="var(--subject-mathematics)"
        >
          <div className="space-y-3">{children}</div>
        </Expandable>
      </div>
    </div>
  );
}

export default function ApplicationOfDerivativesChapter() {
  return (
    <>
      <h2 id="h-6-1">Applications of Derivatives</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Rate of Change of Quantities</li>
        <li>Increasing and Decreasing Functions</li>
        <li>Maxima and Minima</li>
      </ul>

      <h2 id="h-6-2">Rate of Change of Quantities</h2>
      <div className="my-6 flex flex-col gap-5 rounded-lg border border-border bg-card px-5 py-5 sm:flex-row sm:items-center sm:gap-8 sm:px-6">
        <div className="min-w-0 flex-1">
          <span className="t-micro">Chapter 6 · Mathematics</span>
          <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            How fast does one quantity change with respect to another?
          </p>
        </div>
        <div className="w-40 shrink-0 sm:w-52" aria-hidden>
          <RateVisual />
        </div>
      </div>

      <h3 id="h-6-2-1">1. Meaning of Rate of Change</h3>
      <p>The rate of change describes how one quantity changes with respect to another quantity.</p>

      <h4 id="h-6-2-1-1">1.1 Mathematical Notation</h4>
      <TableCard
        title="Notation at a glance"
        headers={["Notation", "Meaning"]}
        rows={[
          {
            cells: [
              <Formula key="n1">{String.raw`\frac{dy}{dx}`}</Formula>,
              <span key="m1">Rate of change of <Formula>y</Formula> with respect to <Formula>x</Formula></span>,
            ],
          },
          {
            cells: [
              <Formula key="n2">{String.raw`\frac{ds}{dt}`}</Formula>,
              <span key="m2">Rate of change of <Formula>s</Formula> with respect to <Formula>t</Formula></span>,
            ],
          },
          {
            cells: [
              <Formula key="n3">{String.raw`\frac{dA}{dt}`}</Formula>,
              <span key="m3">Rate of change of area with respect to time</span>,
            ],
          },
          {
            cells: [
              <Formula key="n4">{String.raw`\frac{dr}{dt}`}</Formula>,
              <span key="m4">Rate of change of radius with respect to time</span>,
            ],
          },
        ]}
      />
      <Callout type="note" title="Read the denominator first">
        <p>The denominator names the quantity with respect to which the rate is measured.</p>
      </Callout>

      <h4 id="h-6-2-1-2">1.2 Rate of Change at a Particular Point</h4>
      <Callout
        type="important"
        title="Derivative vs. value at a point"
        subjectColor="var(--subject-mathematics)"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="[&>div]:my-0">
            <p className="t-micro mb-1">The derivative</p>
            <FormulaBlock latex={String.raw`\frac{dy}{dx}`} />
          </div>
          <div className="[&>div]:my-0">
            <p className="t-micro mb-1">Evaluated at x = x₀</p>
            <FormulaBlock latex={String.raw`\left.\frac{dy}{dx}\right|_{x=x_0}`} important />
            <p className="text-center text-sm text-muted-foreground">or</p>
            <FormulaBlock latex={String.raw`f'(x_0)`} important />
          </div>
        </div>
        <p className="mt-3">
          Rate of change of <Formula>y</Formula> with respect to <Formula>x</Formula>, evaluated at{" "}
          <Formula>{String.raw`x=x_0`}</Formula>.
        </p>
      </Callout>

      <h3 id="h-6-2-2">2. Differentiation of Related Quantities</h3>
      <p>When a quantity depends on another variable, differentiation can be used to determine its rate of change.</p>

      <h4 id="h-6-2-2-1">Example: Area of a Circle</h4>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_200px]">
        <div className="min-w-0 [&>div]:my-0">
          <EquationLadder
            title="Area of a circle"
            steps={[
              { label: "Given", equation: String.raw`A=\pi r^2` },
              { label: "Differentiate with respect to time", equation: String.raw`\frac{dA}{dt}=\frac{d(\pi r^2)}{dt}` },
              { label: "Apply the chain rule", equation: String.raw`=\pi\times 2r\times\frac{dr}{dt}` },
              { label: "Final result", equation: String.raw`\boxed{\frac{dA}{dt}=2\pi r\frac{dr}{dt}}`, final: true },
            ]}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <CircleRadiusDiagram />
          <span className="t-micro text-center">Circle of radius r</span>
        </div>
      </div>
      <span className="t-micro mt-4 block">Interpretation</span>
      <ul className="mt-2 list-disc space-y-1.5 pl-5">
        <li><Formula>{String.raw`\frac{dA}{dt}`}</Formula> = Rate of change of area.</li>
        <li><Formula>r</Formula> = Radius at that instant.</li>
        <li><Formula>{String.raw`\frac{dr}{dt}`}</Formula> = Rate of change of radius.</li>
      </ul>

      <h3 id="h-6-2-3">3. Standard Geometric Rate Formulas</h3>

      <h4 id="h-6-2-3-1">3.1 Circle — Area and Circumference</h4>
      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3 sm:px-5">
          <span className="t-micro">Circle — Area and Circumference</span>
          <div className="mt-2 grid gap-1 sm:grid-cols-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-muted-foreground">Given</span>
              <Formula>{String.raw`A=\pi r^2`}</Formula>
            </div>
            <div>
              <Formula>{String.raw`C=2\pi r`}</Formula>
            </div>
          </div>
        </div>
        <div className="grid gap-6 px-4 py-5 sm:grid-cols-2 sm:px-5">
          <div>
            <span className="t-micro">Area</span>
            <div className="mt-3 flex flex-col gap-3">
              <div className="[&>div]:my-0">
                <span className="mb-2 block text-xs text-muted-foreground">With respect to radius</span>
                <FormulaBlock latex={String.raw`\boxed{\frac{dA}{dr}=2\pi r}`} />
              </div>
              <div className="[&>div]:my-0">
                <span className="mb-2 block text-xs text-muted-foreground">With respect to time</span>
                <FormulaBlock latex={String.raw`\boxed{\frac{dA}{dt}=2\pi r\frac{dr}{dt}}`} />
              </div>
            </div>
          </div>
          <div>
            <span className="t-micro">Circumference</span>
            <div className="mt-3 flex flex-col gap-3">
              <div className="[&>div]:my-0">
                <span className="mb-2 block text-xs text-muted-foreground">With respect to radius</span>
                <FormulaBlock latex={String.raw`\boxed{\frac{dC}{dr}=2\pi}`} />
              </div>
              <div className="[&>div]:my-0">
                <span className="mb-2 block text-xs text-muted-foreground">With respect to time</span>
                <FormulaBlock latex={String.raw`\boxed{\frac{dC}{dt}=2\pi\frac{dr}{dt}}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 id="h-6-2-3-2">3.2 Cube — Volume and Surface Area</h4>
      <p>Let <Formula>x</Formula> represent the edge length of a cube.</p>
      <span className="t-micro mt-4 block">Key formulas</span>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card px-4 py-3 [&>div]:my-0">
          <span className="t-micro mb-2 block">Volume</span>
          <FormulaBlock latex={String.raw`V=x^3`} />
        </div>
        <div className="rounded-lg border border-border bg-card px-4 py-3 [&>div]:my-0">
          <span className="t-micro mb-2 block">Surface area</span>
          <FormulaBlock latex={String.raw`S=6x^2`} />
        </div>
      </div>
      <span className="t-micro mt-5 block">Rate of change with respect to time</span>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_200px]">
        <div className="grid gap-3 sm:grid-cols-2">
          <FormulaCard label="Volume" subjectColor="var(--subject-mathematics)">
            <FormulaBlock latex={String.raw`\boxed{\frac{dV}{dt}=3x^2\frac{dx}{dt}}`} important />
          </FormulaCard>
          <FormulaCard label="Surface area" subjectColor="var(--subject-mathematics)">
            <FormulaBlock latex={String.raw`\boxed{\frac{dS}{dt}=12x\frac{dx}{dt}}`} important />
          </FormulaCard>
        </div>
        <div className="flex flex-col items-center gap-2">
          <CubeEdgeDiagram />
          <span className="t-micro text-center">Cube of edge x</span>
        </div>
      </div>

      <h3 id="h-6-2-4">4. Solved Examples</h3>

      <WorkedExample
        title="Question 1 — Rate of Change of Circle Area"
        question={
          <>
            Find the rate of change of the area of a circle with respect to its radius{" "}
            <Formula>r</Formula> when (a) <Formula>{String.raw`r=3\ \text{cm}`}</Formula> and (b){" "}
            <Formula>{String.raw`r=4\ \text{cm}`}</Formula>.
          </>
        }
      >
        <SolutionStep label="Given">
          <FormulaBlock latex={String.raw`A=\pi r^2`} />
        </SolutionStep>
        <SolutionStep label="Differentiation">
          <FormulaBlock latex={String.raw`\frac{dA}{dr}=\frac{d(\pi r^2)}{dr}`} />
          <FormulaBlock latex={String.raw`\boxed{\frac{dA}{dr}=2\pi r}`} important />
        </SolutionStep>
        <SolutionStep label="Substitution">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">(a) r = 3 cm</span>
              <FormulaBlock latex={String.raw`\left.\frac{dA}{dr}\right|_{r=3}=2\pi(3)`} />
              <FormulaBlock latex={String.raw`\boxed{6\pi\ \text{cm}^2/\text{cm}}`} important />
            </div>
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">(b) r = 4 cm</span>
              <FormulaBlock latex={String.raw`\left.\frac{dA}{dr}\right|_{r=4}=2\pi(4)`} />
              <FormulaBlock latex={String.raw`\boxed{8\pi\ \text{cm}^2/\text{cm}}`} important />
            </div>
          </div>
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 2 — Increasing Volume of a Cube"
        question={
          <>
            The volume of a cube is increasing at a rate of{" "}
            <Formula>{String.raw`8\ \text{cm}^3/\text{s}`}</Formula>. How fast is the surface area
            increasing when the length of an edge is <Formula>{String.raw`12\ \text{cm}`}</Formula>?
          </>
        }
      >
        <SolutionStep label="Given">
          <FormulaBlock latex={String.raw`\frac{dV}{dt}=8\ \text{cm}^3/\text{s}`} />
          <FormulaBlock latex={String.raw`x=12\ \text{cm}`} />
        </SolutionStep>
        <SolutionStep label="Required">
          <FormulaBlock latex={String.raw`\frac{dS}{dt}=?`} />
        </SolutionStep>
        <SolutionStep label="Step 1 — Differentiate the volume equation">
          <FormulaBlock latex={String.raw`V=x^3`} />
          <FormulaBlock latex={String.raw`\frac{dV}{dt}=3x^2\frac{dx}{dt}`} />
          <FormulaBlock latex={String.raw`8=3x^2\frac{dx}{dt}`} />
          <div className="[&>aside]:my-0">
            <KeyPoint title="Intermediate result — edge rate">
              <FormulaBlock latex={String.raw`\boxed{\frac{dx}{dt}=\frac{8}{3x^2}}`} important />
            </KeyPoint>
          </div>
        </SolutionStep>
        <SolutionStep label="Step 2 — Differentiate the surface area equation">
          <FormulaBlock latex={String.raw`S=6x^2`} />
          <FormulaBlock latex={String.raw`\frac{dS}{dt}=12x\frac{dx}{dt}`} />
        </SolutionStep>
        <SolutionStep label="Step 3 — Substitute the edge rate">
          <FormulaBlock latex={String.raw`\frac{dS}{dt}=12x\times\frac{8}{3x^2}`} />
        </SolutionStep>
        <SolutionStep label="Step 4 — Substitute x = 12">
          <FormulaBlock latex={String.raw`=\frac{12\times12\times8}{3\times12^2}`} />
          <FormulaBlock latex={String.raw`\boxed{\frac{dS}{dt}=\frac{8}{3}\ \text{cm}^2/\text{s}}`} important />
        </SolutionStep>
      </WorkedExample>

      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3 sm:px-5">
          <span className="t-micro">Question 3 — Practice · Increasing Surface Area of a Cube</span>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <p>
            The volume of a cube is increasing at a rate of{" "}
            <Formula>{String.raw`9\ \text{cm}^3/\text{s}`}</Formula>. How fast is the surface area
            increasing when the length of an edge is <Formula>{String.raw`10\ \text{cm}`}</Formula>?
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">Given</span>
              <FormulaBlock latex={String.raw`\frac{dV}{dt}=9,\qquad x=10`} />
            </div>
            <div className="rounded-md border-l-[3px] border-ok bg-muted p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">Answer</span>
              <FormulaBlock latex={String.raw`\boxed{\frac{dS}{dt}=3.6\ \text{cm}^2/\text{s}}`} important />
            </div>
          </div>
        </div>
      </div>

      <WorkedExample
        title="Question 4 — Area of a Circular Wave"
        question={
          <>
            A stone is dropped into a quiet lake and waves move in circles at a speed of{" "}
            <Formula>{String.raw`5\ \text{cm}/\text{s}`}</Formula>. At the instant when the radius of
            the circular wave is <Formula>{String.raw`8\ \text{cm}`}</Formula>, how fast is the
            enclosed area increasing?
          </>
        }
      >
        <SolutionStep label="Data panel">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)]">
            <CircularWaveDiagram />
            <div className="rounded-md border border-border bg-muted/40 p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">Given</span>
              <FormulaBlock latex={String.raw`\frac{dr}{dt}=5\ \text{cm}/\text{s}`} />
              <FormulaBlock latex={String.raw`r=8\ \text{cm}`} />
              <span className="t-micro mb-2 mt-3 block">Required</span>
              <FormulaBlock latex={String.raw`\frac{dA}{dt}=?`} />
            </div>
          </div>
        </SolutionStep>
        <SolutionStep label="Differentiation">
          <FormulaBlock latex={String.raw`A=\pi r^2`} />
          <FormulaBlock latex={String.raw`\frac{dA}{dt}=2\pi r\frac{dr}{dt}`} />
        </SolutionStep>
        <SolutionStep label="Substitution">
          <FormulaBlock latex={String.raw`=2\pi(8)(5)`} />
        </SolutionStep>
        <SolutionStep label="Final Answer">
          <FormulaBlock latex={String.raw`\boxed{\frac{dA}{dt}=80\pi\ \text{cm}^2/\text{s}}`} important />
        </SolutionStep>
      </WorkedExample>

      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3 sm:px-5">
          <span className="t-micro">Question 5 — Practice · Area of a Circular Wave</span>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)]">
            <CircularWaveDiagram />
            <div>
              <p>
                A stone is dropped into a quiet lake and waves move in circles at a speed of{" "}
                <Formula>{String.raw`4\ \text{cm}/\text{s}`}</Formula>. At the instant when the radius
                of the circular wave is <Formula>{String.raw`10\ \text{cm}`}</Formula>, how fast is
                the enclosed area increasing?
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-border p-3 [&>div]:my-0">
                  <span className="t-micro mb-2 block">Given</span>
                  <FormulaBlock latex={String.raw`\frac{dr}{dt}=4\ \text{cm}/\text{s}`} />
                  <FormulaBlock latex={String.raw`r=10\ \text{cm}`} />
                </div>
                <div className="rounded-md border-l-[3px] border-ok bg-muted p-3 [&>div]:my-0">
                  <span className="t-micro mb-2 block">Answer</span>
                  <FormulaBlock latex={String.raw`=2\pi(10)(4)`} />
                  <FormulaBlock latex={String.raw`\boxed{80\pi\ \text{cm}^2/\text{s}}`} important />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 border-t border-border pt-3 [&>div]:my-0">
            <span className="t-micro mb-2 block">Using</span>
            <FormulaBlock latex={String.raw`\frac{dA}{dt}=2\pi r\frac{dr}{dt}`} />
          </div>
        </div>
      </div>

      <WorkedExample
        title="Question 6 — Rate of Change of Circumference"
        question={
          <>
            The radius of a circle is increasing at the rate of{" "}
            <Formula>{String.raw`0.7\ \text{cm}/\text{s}`}</Formula>. What is the rate of increase of
            its circumference?
          </>
        }
      >
        <SolutionStep label="Given">
          <FormulaBlock latex={String.raw`\frac{dr}{dt}=0.7\ \text{cm}/\text{s}`} />
        </SolutionStep>
        <SolutionStep label="Circumference">
          <FormulaBlock latex={String.raw`C=2\pi r`} />
        </SolutionStep>
        <SolutionStep label="Differentiation">
          <FormulaBlock latex={String.raw`\frac{dC}{dt}=2\pi\frac{dr}{dt}`} />
        </SolutionStep>
        <SolutionStep label="Substitution">
          <FormulaBlock latex={String.raw`=2\pi(0.7)`} />
        </SolutionStep>
        <SolutionStep label="Final Answer">
          <FormulaBlock latex={String.raw`\boxed{\frac{dC}{dt}=1.4\pi\ \text{cm}/\text{s}}`} important />
          <div className="rounded-md border border-border bg-muted/40 p-3">
            <CircleRadiusDiagram showArrow />
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Circumference changes at a <Highlight color="yellow">constant rate</Highlight> when the
              radius changes at a constant rate.
            </p>
          </div>
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 7 — Rate of Increase of Circle Area"
        question={
          <>
            The radius of a circle is increasing uniformly at the rate of{" "}
            <Formula>{String.raw`3\ \text{cm}/\text{s}`}</Formula>. Find the rate at which the area of
            the circle is increasing when the radius is <Formula>{String.raw`10\ \text{cm}`}</Formula>.
          </>
        }
      >
        <SolutionStep label="Given">
          <FormulaBlock latex={String.raw`\frac{dr}{dt}=3\ \text{cm}/\text{s}`} />
          <FormulaBlock latex={String.raw`r=10\ \text{cm}`} />
        </SolutionStep>
        <SolutionStep label="Differentiation">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_160px]">
            <div className="min-w-0 [&>div]:my-0">
              <FormulaBlock latex={String.raw`A=\pi r^2`} />
              <FormulaBlock latex={String.raw`\frac{dA}{dt}=2\pi r\frac{dr}{dt}`} />
            </div>
            <CircleRadiusDiagram />
          </div>
        </SolutionStep>
        <SolutionStep label="Substitution">
          <span className="t-micro mb-2 block">
            <Highlight color="yellow">Substitution stage</Highlight>
          </span>
          <FormulaBlock latex={String.raw`=2\pi r(3)`} />
          <FormulaBlock latex={String.raw`=6\pi r`} />
        </SolutionStep>
        <SolutionStep label="Final Answer">
          <FormulaBlock latex={String.raw`=6\pi(10)`} />
          <FormulaBlock latex={String.raw`\boxed{\frac{dA}{dt}=60\pi\ \text{cm}^2/\text{s}}`} important />
        </SolutionStep>
      </WorkedExample>

      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3 sm:px-5">
          <span className="t-micro">Question 8 — Multiple Choice (Work)</span>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <p>
            The rate of change of the area of a circle with respect to its radius <Formula>r</Formula>{" "}
            at <Formula>{String.raw`r=6\ \text{cm}`}</Formula> is <Formula>{String.raw`\frac{dA}{dr}=?`}</Formula>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
            {[
              { label: "(A)", value: String.raw`10\pi` },
              { label: "(B)", value: String.raw`12\pi` },
              { label: "(C)", value: String.raw`8\pi` },
              { label: "(D)", value: String.raw`11\pi` },
            ].map((option) => (
              <div
                key={option.label}
                className="flex items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2.5"
              >
                <span className="t-micro">{option.label}</span>
                <Formula>{option.value}</Formula>
              </div>
            ))}
          </div>
          <Expandable
            title="Show solution"
            variant="example"
            subjectColor="var(--subject-mathematics)"
          >
            <div className="space-y-2 [&>div]:my-0">
              <FormulaBlock latex={String.raw`A=\pi r^2`} />
              <FormulaBlock latex={String.raw`\frac{dA}{dr}=2\pi r`} />
              <FormulaBlock latex={String.raw`=2\pi(6)`} />
              <FormulaBlock latex={String.raw`\boxed{12\pi}`} important />
            </div>
            <p className="mt-3 text-sm font-semibold text-ok">Correct option: B</p>
          </Expandable>
        </div>
      </div>

      <WorkedExample
        title="Question 9 — Increasing Volume of a Cube"
        question={
          <>
            An edge of a variable cube is increasing at the rate of{" "}
            <Formula>{String.raw`3\ \text{cm}/\text{s}`}</Formula>. How fast is the volume of the cube
            increasing when the edge is <Formula>{String.raw`10\ \text{cm}`}</Formula> long?
          </>
        }
      >
        <SolutionStep label="Given">
          <FormulaBlock latex={String.raw`\frac{dx}{dt}=3\ \text{cm}/\text{s}`} />
          <FormulaBlock latex={String.raw`x=10\ \text{cm}`} />
        </SolutionStep>
        <SolutionStep label="Required">
          <FormulaBlock latex={String.raw`\frac{dV}{dt}=?`} />
        </SolutionStep>
        <SolutionStep label="Formula">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_160px]">
            <div className="min-w-0 [&>div]:my-0">
              <FormulaBlock latex={String.raw`V=x^3`} />
              <FormulaBlock latex={String.raw`\frac{dV}{dt}=3x^2\frac{dx}{dt}`} />
            </div>
            <CubeEdgeDiagram showArrow />
          </div>
        </SolutionStep>
        <SolutionStep label="Substitution">
          <FormulaBlock latex={String.raw`=3x^2(3)`} />
          <FormulaBlock latex={String.raw`=9x^2`} />
          <FormulaBlock latex={String.raw`=9(10)^2`} />
        </SolutionStep>
        <SolutionStep label="Final Answer">
          <FormulaBlock latex={String.raw`\boxed{\frac{dV}{dt}=900\ \text{cm}^3/\text{s}}`} important />
        </SolutionStep>
      </WorkedExample>

      <h3 id="h-6-2-5">5. Quick Formula Reference</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          {
            name: "Circle area",
            formula: String.raw`A=\pi r^2`,
            rate: String.raw`\frac{dA}{dt}=2\pi r\frac{dr}{dt}`,
          },
          {
            name: "Circumference",
            formula: String.raw`C=2\pi r`,
            rate: String.raw`\frac{dC}{dt}=2\pi\frac{dr}{dt}`,
          },
          {
            name: "Cube volume",
            formula: String.raw`V=x^3`,
            rate: String.raw`\frac{dV}{dt}=3x^2\frac{dx}{dt}`,
          },
          {
            name: "Cube surface area",
            formula: String.raw`S=6x^2`,
            rate: String.raw`\frac{dS}{dt}=12x\frac{dx}{dt}`,
          },
        ].map((card) => (
          <div key={card.name} className="rounded-lg border border-border bg-card p-4">
            <span className="t-micro mb-3 block">{card.name}</span>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-xs text-muted-foreground">Formula</span>
              <Formula>{card.formula}</Formula>
            </div>
            <div className="mt-2 flex items-baseline justify-between gap-3 border-t border-border pt-2">
              <span className="text-xs text-muted-foreground">w.r.t. time</span>
              <Formula>{card.rate}</Formula>
            </div>
          </div>
        ))}
      </div>

      {/* ── Part 2: Solved Problems & Exercises ───────────────────────────── */}
      <div className="mt-10 border-t border-border pt-8">
        <div className="my-6 rounded-lg border border-border bg-muted/40 px-5 py-5 sm:px-6">
          <span className="t-micro">
            Chapter 6 · Mathematics · Continued from the formula reference
          </span>
          <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            Solved Problems &amp; Exercises — Part 2
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Related rates applied to familiar shapes.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-border pt-4">
            {["Related Rates", "Rectangles", "Spheres", "Ladder Problem"].map((topic, i) => (
              <span key={topic} className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80">
                  {topic}
                </span>
                {i < 3 && (
                  <span className="text-muted-foreground" aria-hidden>
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <h3 id="h-6-2-p2-1">1. Rate of Change of Rectangle — Perimeter and Area</h3>

        <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
          <div className="border-b border-border px-4 py-3 sm:px-5">
            <span className="t-micro">Question 1 — Rectangle · Perimeter and Area</span>
          </div>
          <div className="px-4 py-4 sm:px-5">
            <p>
              The length <Formula>x</Formula> of a rectangle is decreasing at{" "}
              <Formula>{String.raw`5\ \text{cm/min}`}</Formula> and the width{" "}
              <Formula>y</Formula> is increasing at{" "}
              <Formula>{String.raw`4\ \text{cm/min}`}</Formula>. When{" "}
              <Formula>{String.raw`x=8\ \text{cm}`}</Formula> and{" "}
              <Formula>{String.raw`y=6\ \text{cm}`}</Formula>, find the rates of change of the
              perimeter and the area.
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-[minmax(0,190px)_minmax(0,1fr)]">
              <div className="flex flex-col items-center gap-2">
                <RectangleRateDiagram />
                <span className="t-micro text-center">Length falls · width rises</span>
              </div>
              <div className="rounded-md border border-border bg-muted/40 p-3 [&>div]:my-0">
                <span className="t-micro mb-2 block">Given</span>
                <FormulaBlock latex={String.raw`\frac{dx}{dt}=-5\ \text{cm/min}`} />
                <FormulaBlock latex={String.raw`\frac{dy}{dt}=4\ \text{cm/min}`} />
                <span className="t-micro mb-2 mt-3 block">At the given instant</span>
                <FormulaBlock latex={String.raw`x=8\ \text{cm},\qquad y=6\ \text{cm}`} />
                <span className="t-micro mb-2 mt-3 block">Required</span>
                <div className="space-y-1.5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-muted-foreground">(a)</span>
                    <Formula>{String.raw`\frac{dP}{dt}`}</Formula>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-muted-foreground">(b)</span>
                    <Formula>{String.raw`\frac{dA}{dt}`}</Formula>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Callout type="note" title="Sign convention">
          <div className="grid gap-2 sm:grid-cols-2">
            <p>
              <strong>Increasing quantity →</strong> positive rate, written with a + sign.
            </p>
            <p>
              <strong>Decreasing quantity →</strong> negative rate, written with a − sign.
            </p>
          </div>
        </Callout>

        <Expandable
          title="Show solution — perimeter and area"
          variant="example"
          subjectColor="var(--subject-mathematics)"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-3 block">(a) Rate of change of perimeter</span>
              <FormulaBlock latex={String.raw`P=2(x+y)`} />
              <FormulaBlock latex={String.raw`\frac{dP}{dt}=2\frac{d(x+y)}{dt}`} />
              <FormulaBlock latex={String.raw`=2\left(\frac{dx}{dt}+\frac{dy}{dt}\right)`} />
              <FormulaBlock latex={String.raw`=2(-5+4)`} />
              <FormulaBlock latex={String.raw`=2(-1)`} />
              <FormulaBlock latex={String.raw`\boxed{\frac{dP}{dt}=-2\ \text{cm/min}}`} important />
              <p className="mt-2 text-sm text-muted-foreground">
                The perimeter is <Highlight color="yellow">decreasing at 2 cm/min</Highlight>.
              </p>
            </div>
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-3 block">(b) Rate of change of area</span>
              <FormulaBlock latex={String.raw`A=xy`} />
              <div className="rounded-md border border-border bg-muted px-3 py-2 [&>div]:my-0">
                <span className="t-micro mb-1 block">
                  <Highlight color="yellow">Product rule</Highlight>
                </span>
                <FormulaBlock latex={String.raw`(uv)'=uv'+vu'`} />
              </div>
              <FormulaBlock latex={String.raw`\frac{dA}{dt}=x\frac{dy}{dt}+y\frac{dx}{dt}`} />
              <FormulaBlock latex={String.raw`=x(4)+y(-5)`} />
              <FormulaBlock latex={String.raw`=4x-5y`} />
              <FormulaBlock latex={String.raw`=4(8)-5(6)`} />
              <FormulaBlock latex={String.raw`=32-30`} />
              <FormulaBlock latex={String.raw`\boxed{\frac{dA}{dt}=2\ \text{cm}^2/\text{min}}`} important />
              <p className="mt-2 text-sm text-muted-foreground">
                The area is <Highlight color="yellow">increasing at 2 cm²/min</Highlight>.
              </p>
            </div>
          </div>
        </Expandable>

        <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
          <div className="border-b border-border px-4 py-3 sm:px-5">
            <span className="t-micro">Question 2 — Practice · Rectangle (Work)</span>
          </div>
          <div className="px-4 py-4 sm:px-5">
            <p>
              The length <Formula>x</Formula> of a rectangle is decreasing at{" "}
              <Formula>{String.raw`3\ \text{cm/min}`}</Formula> and the width{" "}
              <Formula>y</Formula> is increasing at{" "}
              <Formula>{String.raw`2\ \text{cm/min}`}</Formula>. When{" "}
              <Formula>{String.raw`x=10\ \text{cm}`}</Formula> and{" "}
              <Formula>{String.raw`y=6\ \text{cm}`}</Formula>, find the rates of change of the
              perimeter and the area.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-border p-3 [&>div]:my-0">
                <span className="t-micro mb-2 block">Given</span>
                <FormulaBlock latex={String.raw`\frac{dx}{dt}=-3\ \text{cm/min}`} />
                <FormulaBlock latex={String.raw`\frac{dy}{dt}=2\ \text{cm/min}`} />
                <FormulaBlock latex={String.raw`x=10\ \text{cm},\qquad y=6\ \text{cm}`} />
              </div>
              <div className="rounded-md border border-border p-3">
                <span className="t-micro mb-2 block">Two answer slots</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-muted-foreground">(a)</span>
                  <Formula>{String.raw`\frac{dP}{dt}=?`}</Formula>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-xs text-muted-foreground">(b)</span>
                  <Formula>{String.raw`\frac{dA}{dt}=?`}</Formula>
                </div>
              </div>
            </div>
            <Expandable
              title="Show answers"
              variant="example"
              subjectColor="var(--subject-mathematics)"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border-l-[3px] border-ok bg-muted p-3 [&>div]:my-0">
                  <span className="t-micro mb-2 block">Answer (a)</span>
                  <FormulaBlock latex={String.raw`\boxed{\frac{dP}{dt}=-2\ \text{cm/min}}`} important />
                </div>
                <div className="rounded-md border-l-[3px] border-ok bg-muted p-3 [&>div]:my-0">
                  <span className="t-micro mb-2 block">Answer (b)</span>
                  <FormulaBlock latex={String.raw`\boxed{\frac{dA}{dt}=2\ \text{cm}^2/\text{min}}`} important />
                </div>
              </div>
            </Expandable>
          </div>
        </div>

        <h3 id="h-6-2-p2-2">2. Rate of Change of a Sphere — Volume and Radius</h3>

        <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
          <div className="border-b border-border px-4 py-3 sm:px-5">
            <span className="t-micro">Question 3 — Inflating Balloon</span>
          </div>
          <div className="px-4 py-4 sm:px-5">
            <p>
              A balloon, which always remains spherical on inflation, is being inflated by pumping
              in <Formula>{String.raw`900\ \text{cm}^3`}</Formula> of gas per second. Find the rate
              at which the radius increases when the radius is{" "}
              <Formula>{String.raw`15\ \text{cm}`}</Formula>.
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-[minmax(0,170px)_minmax(0,1fr)]">
              <div className="flex flex-col items-center gap-2">
                <BalloonInflationDiagram />
                <span className="t-micro text-center">Gas pumped inward</span>
              </div>
              <div className="rounded-md border border-border bg-muted/40 p-3 [&>div]:my-0">
                <span className="t-micro mb-2 block">Given</span>
                <FormulaBlock latex={String.raw`V=\frac43\pi r^3`} />
                <FormulaBlock latex={String.raw`\frac{dV}{dt}=900\ \text{cm}^3/\text{s}`} />
                <FormulaBlock latex={String.raw`r=15\ \text{cm}`} />
                <span className="t-micro mb-2 mt-3 block">Required</span>
                <FormulaBlock latex={String.raw`\frac{dr}{dt}=?`} />
              </div>
            </div>
            <Expandable
              title="Show solution"
              variant="example"
              subjectColor="var(--subject-mathematics)"
            >
              <EquationLadder
                title="Differentiate the volume"
                steps={[
                  {
                    label: "Differentiate with respect to time",
                    equation: String.raw`\frac{d}{dt}\left(\frac43\pi r^3\right)=900`,
                  },
                  {
                    label: "Apply the chain rule",
                    equation: String.raw`\frac43\pi(3r^2)\frac{dr}{dt}=900`,
                  },
                  {
                    label: "Simplify",
                    equation: String.raw`4\pi r^2\frac{dr}{dt}=900`,
                    final: true,
                  },
                ]}
              />
              <div className="[&>aside]:my-0">
                <KeyPoint title="Intermediate relationship">
                  <FormulaBlock
                    latex={String.raw`\boxed{\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}}`}
                    important
                  />
                </KeyPoint>
              </div>
              <EquationLadder
                title="Substitute r = 15"
                steps={[
                  {
                    label: "Rearrange for dr/dt",
                    equation: String.raw`\frac{dr}{dt}=\frac{900}{4\pi r^2}`,
                  },
                  {
                    label: "Put in the radius",
                    equation: String.raw`=\frac{900}{4\pi(15)^2}`,
                  },
                  {
                    label: "Simplify",
                    equation: String.raw`=\frac{900}{900\pi}`,
                  },
                  {
                    label: "Final answer",
                    equation: String.raw`\boxed{\frac{dr}{dt}=\frac1\pi\ \text{cm/s}}`,
                    final: true,
                  },
                ]}
              />
            </Expandable>
          </div>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
          <div className="border-b border-border px-4 py-3 sm:px-5">
            <span className="t-micro">Question 4 — Sphere Volume w.r.t. Radius</span>
          </div>
          <div className="px-4 py-4 sm:px-5">
            <p>
              A balloon, which always remains spherical, has a variable radius. Find the rate at
              which its volume is increasing with the radius when the radius is{" "}
              <Formula>{String.raw`10\ \text{cm}`}</Formula>.
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-[minmax(0,150px)_minmax(0,1fr)]">
              <div className="flex flex-col items-center gap-2">
                <SphereRadiusDiagram radiusLabel="r = 10 cm" />
                <span className="t-micro text-center">Variable radius</span>
              </div>
              <div className="rounded-md border border-border bg-muted/40 p-3 [&>div]:my-0">
                <span className="t-micro mb-2 block">Given</span>
                <FormulaBlock latex={String.raw`V=\frac43\pi r^3`} />
                <FormulaBlock latex={String.raw`r=10\ \text{cm}`} />
                <span className="t-micro mb-2 mt-3 block">Required</span>
                <FormulaBlock latex={String.raw`\left.\frac{dV}{dr}\right|_{r=10}=?`} />
              </div>
            </div>
            <Callout
              type="important"
              title="Radius or time?"
              subjectColor="var(--subject-mathematics)"
            >
              <div className="grid gap-2 sm:grid-cols-2">
                <p>
                  <strong>With respect to time:</strong> the radius itself changes, so the chain
                  rule supplies <Formula>{String.raw`\frac{dr}{dt}`}</Formula>.
                </p>
                <p>
                  <strong>With respect to radius:</strong> the radius is the variable, so no extra
                  factor appears.
                </p>
              </div>
            </Callout>
            <Expandable
              title="Show solution"
              variant="example"
              subjectColor="var(--subject-mathematics)"
            >
              <SolutionStep label="Differentiate with respect to r">
                <FormulaBlock latex={String.raw`\frac{dV}{dr}=\frac{d}{dr}\left(\frac43\pi r^3\right)`} />
                <FormulaBlock latex={String.raw`=\frac43\pi(3r^2)`} />
                <FormulaBlock latex={String.raw`\boxed{\frac{dV}{dr}=4\pi r^2}`} important />
              </SolutionStep>
              <SolutionStep label="Substitute r = 10">
                <FormulaBlock latex={String.raw`=4\pi(10)^2`} />
                <FormulaBlock
                  latex={String.raw`\boxed{\left.\frac{dV}{dr}\right|_{r=10}=400\pi\ \text{cm}^2}`}
                  important
                />
                <p className="text-center text-sm text-muted-foreground">
                  <Formula>
                    {String.raw`400\pi\ \text{cm}^3/\text{cm}=400\pi\ \text{cm}^2`}
                  </Formula>
                </p>
              </SolutionStep>
            </Expandable>
          </div>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
          <div className="border-b border-border px-4 py-3 sm:px-5">
            <span className="t-micro">Question 5 — Sphere with Variable Diameter</span>
          </div>
          <div className="px-4 py-4 sm:px-5">
            <div className="grid gap-5 sm:grid-cols-[minmax(0,150px)_minmax(0,1fr)]">
              <div className="flex flex-col items-center gap-2">
                <SphereDiameterDiagram />
                <span className="t-micro text-center">Diameter d</span>
              </div>
              <div>
                <p>
                  A balloon, which always remains spherical, has a variable diameter{" "}
                  <Formula>{String.raw`d=\frac32(2x+1)`}</Formula>. Find the rate of change of its
                  volume with respect to <Formula>x</Formula>.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center">
                  <div className="rounded-md border border-border p-3 [&>div]:my-0">
                    <span className="t-micro mb-1 block">Diameter</span>
                    <FormulaBlock latex={String.raw`d=\frac32(2x+1)`} />
                  </div>
                  <span className="text-center text-muted-foreground" aria-hidden>
                    →
                  </span>
                  <div className="rounded-md border border-border p-3 [&>div]:my-0">
                    <span className="t-micro mb-1 block">Radius</span>
                    <FormulaBlock latex={String.raw`r=\frac d2`} />
                    <FormulaBlock latex={String.raw`\boxed{r=\frac34(2x+1)}`} />
                  </div>
                  <span className="text-center text-muted-foreground" aria-hidden>
                    →
                  </span>
                  <div className="rounded-md border border-border p-3 [&>div]:my-0">
                    <span className="t-micro mb-1 block">Volume</span>
                    <FormulaBlock latex={String.raw`V=\frac43\pi r^3`} />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="t-micro">Required</span>
                  <Formula>{String.raw`\frac{dV}{dx}=?`}</Formula>
                </div>
              </div>
            </div>
            <Expandable
              title="Show solution"
              variant="example"
              subjectColor="var(--subject-mathematics)"
            >
              <Stepper
                steps={[
                  {
                    label: "Convert diameter into radius",
                    description: (
                      <div className="[&>div]:my-0">
                        <FormulaBlock latex={String.raw`r=\frac12\times\frac32(2x+1)`} />
                        <FormulaBlock latex={String.raw`\boxed{r=\frac34(2x+1)}`} important />
                      </div>
                    ),
                  },
                  {
                    label: "Substitute into the volume formula",
                    description: (
                      <div className="[&>div]:my-0">
                        <FormulaBlock latex={String.raw`V=\frac43\pi\left[\frac34(2x+1)\right]^3`} />
                        <FormulaBlock latex={String.raw`=\frac43\pi\times\frac{27}{64}(2x+1)^3`} />
                      </div>
                    ),
                  },
                  {
                    label: "Differentiate using the chain rule",
                    description: (
                      <div className="[&>div]:my-0">
                        <FormulaBlock
                          latex={String.raw`\frac{dV}{dx}=\frac43\pi\times\frac{27}{64}\frac{d}{dx}(2x+1)^3`}
                        />
                        <FormulaBlock
                          latex={String.raw`=\frac43\pi\times\frac{27}{64}\times3(2x+1)^2\times2`}
                        />
                        <span className="t-micro mb-1 mt-3 block">
                          <Highlight color="yellow">Final expression</Highlight>
                        </span>
                        <FormulaBlock
                          latex={String.raw`\boxed{\frac{dV}{dx}=\frac{27\pi}{8}(2x+1)^2}`}
                          important
                        />
                      </div>
                    ),
                  },
                ]}
              />
            </Expandable>
          </div>
        </div>

        <h3 id="h-6-2-p2-3">3. Related Rates — Pythagorean Theorem</h3>

        <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
          <div className="border-b border-border px-4 py-3 sm:px-5">
            <span className="t-micro">Question 6 — Sliding Ladder Problem</span>
          </div>
          <div className="px-4 py-4 sm:px-5">
            <p>
              A ladder <Formula>{String.raw`5\ \text{m}`}</Formula> long leans against a wall, and
              its bottom is pulled along the ground away from the wall at{" "}
              <Formula>{String.raw`2\ \text{cm/s}`}</Formula>. How fast is its height on the wall
              decreasing when the foot is <Formula>{String.raw`4\ \text{m}`}</Formula> away from the
              wall?
            </p>
            <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
              <div className="flex flex-col items-center gap-2">
                <LadderDiagram />
                <span className="t-micro text-center">The ladder forms a right triangle</span>
              </div>
              <div className="rounded-md border border-border bg-muted/40 p-3 [&>div]:my-0">
                <span className="t-micro mb-2 block">Given</span>
                <FormulaBlock latex={String.raw`\text{Ladder length}=5\ \text{m}`} />
                <FormulaBlock latex={String.raw`\frac{dx}{dt}=2\ \text{cm/s}`} />
                <span className="t-micro mb-2 mt-3 block">Convert into metres</span>
                <FormulaBlock latex={String.raw`\frac{dx}{dt}=\frac{2}{100}\ \text{m/s}`} />
                <FormulaBlock latex={String.raw`x=4\ \text{m}`} />
                <span className="t-micro mb-2 mt-3 block">Required</span>
                <FormulaBlock latex={String.raw`\frac{dy}{dt}=?`} />
              </div>
            </div>
            <Expandable
              title="Show solution"
              variant="example"
              subjectColor="var(--subject-mathematics)"
            >
              <Stepper
                steps={[
                  {
                    label: "Step 1 — Find the height",
                    description: (
                      <div className="[&>div]:my-0">
                        <FormulaBlock
                          latex={String.raw`\text{Hypotenuse}^2=\text{Base}^2+\text{Altitude}^2`}
                        />
                        <FormulaBlock latex={String.raw`5^2=x^2+y^2`} />
                        <FormulaBlock latex={String.raw`25=4^2+y^2`} />
                        <FormulaBlock latex={String.raw`25-16=y^2`} />
                        <FormulaBlock latex={String.raw`y^2=9`} />
                        <FormulaBlock latex={String.raw`\boxed{y=3\ \text{m}}`} important />
                      </div>
                    ),
                  },
                  {
                    label: "Step 2 — Differentiate the relationship",
                    description: (
                      <div className="[&>div]:my-0">
                        <FormulaBlock latex={String.raw`x^2+y^2=5^2`} />
                        <FormulaBlock latex={String.raw`\frac{d}{dt}(x^2+y^2)=0`} />
                        <FormulaBlock latex={String.raw`2x\frac{dx}{dt}+2y\frac{dy}{dt}=0`} />
                      </div>
                    ),
                  },
                  {
                    label: "Step 3 — Substitute the given values",
                    description: (
                      <div className="[&>div]:my-0">
                        <FormulaBlock latex={String.raw`2(4)\left(\frac{2}{100}\right)+2(3)\frac{dy}{dt}=0`} />
                        <FormulaBlock latex={String.raw`\frac{16}{100}+6\frac{dy}{dt}=0`} />
                        <FormulaBlock latex={String.raw`6\frac{dy}{dt}=-\frac{16}{100}`} />
                        <FormulaBlock latex={String.raw`\frac{dy}{dt}=-\frac{16}{600}`} />
                        <FormulaBlock latex={String.raw`=-\frac{16}{600}\times100`} />
                        <FormulaBlock
                          latex={String.raw`\boxed{\frac{dy}{dt}=-\frac83\ \text{cm/s}}`}
                          important
                        />
                      </div>
                    ),
                  },
                ]}
              />
              <div className="rounded-md border-l-[3px] border-l-warning bg-muted px-4 py-4 [&>p]:mb-0">
                <span className="t-micro">Interpretation</span>
                <p className="mt-1 text-2xl font-bold tracking-tight text-foreground">2.67 cm/s</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  The height of the ladder on the wall is decreasing at this rate. The{" "}
                  <Highlight color="yellow">negative sign indicates a decreasing height</Highlight>.
                </p>
              </div>
            </Expandable>
          </div>
        </div>

        <h3 id="h-6-2-p2-4">4. Formula &amp; Concept Reference</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          <FormulaCard label="Rectangle" subjectColor="var(--subject-mathematics)">
            <FormulaBlock latex={String.raw`A=xy,\qquad P=2(x+y)`} />
            <FormulaBlock latex={String.raw`\frac{dA}{dt}=x\frac{dy}{dt}+y\frac{dx}{dt}`} />
            <FormulaBlock latex={String.raw`\frac{dP}{dt}=2\left(\frac{dx}{dt}+\frac{dy}{dt}\right)`} />
          </FormulaCard>
          <FormulaCard label="Sphere" subjectColor="var(--subject-mathematics)">
            <FormulaBlock latex={String.raw`V=\frac43\pi r^3`} />
            <FormulaBlock latex={String.raw`\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}`} />
            <FormulaBlock latex={String.raw`\frac{dV}{dr}=4\pi r^2`} />
          </FormulaCard>
          <FormulaCard label="Sliding ladder" subjectColor="var(--subject-mathematics)">
            <FormulaBlock latex={String.raw`x^2+y^2=L^2`} />
            <FormulaBlock latex={String.raw`x\frac{dx}{dt}+y\frac{dy}{dt}=0`} />
          </FormulaCard>
        </div>
        <div className="mt-5">
          <TableCard
            title="Differentiation rules used"
            headers={["Rule", "Formula"]}
            rows={[
              {
                cells: [
                  "Product rule",
                  <Formula key="rule-product">{String.raw`(uv)'=uv'+vu'`}</Formula>,
                ],
              },
              {
                cells: [
                  "Chain rule",
                  <Formula key="rule-chain">
                    {String.raw`\frac{d}{dx}f(g(x))=f'(g(x))g'(x)`}
                  </Formula>,
                ],
              },
              {
                cells: [
                  "Power rule",
                  <Formula key="rule-power">{String.raw`\frac{d}{dx}x^n=nx^{n-1}`}</Formula>,
                ],
              },
            ]}
          />
        </div>
      </div>

      {/* ── Part 3: Continued ──────────────────────────────────────────────── */}
      <div className="mt-10 border-t border-border pt-8">
        <div className="my-6 rounded-lg border border-border bg-muted/40 px-5 py-5 sm:px-6">
          <span className="t-micro">Chapter 6 · Mathematics · Continued</span>
          <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            Rate of Change of Quantities — Continued
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-border pt-4">
            {["Sand Cones", "Motion Along Curves", "Marginal Functions", "Rate Types"].map(
              (topic, i) => (
                <span key={topic} className="flex items-center gap-2">
                  <span className="rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80">
                    {topic}
                  </span>
                  {i < 3 && (
                    <span className="text-muted-foreground" aria-hidden>
                      →
                    </span>
                  )}
                </span>
              )
            )}
          </div>
        </div>

        <h3 id="h-6-2-p3-1">1. Sand Cone: Rate of Increase of Height</h3>
        <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
          <div className="border-b border-border px-4 py-3 sm:px-5">
            <span className="t-micro">Sand cone · Related rates</span>
          </div>
          <div className="px-4 py-4 sm:px-5">
            <p>
              Sand pours from a pipe at <Formula>{String.raw`12\ \text{cm}^3/\text{s}`}</Formula> and
              forms a cone whose height is always one-sixth of its base radius. Find the rate at
              which the height increases when <Formula>{String.raw`h=4\ \text{cm}`}</Formula>.
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-[minmax(0,190px)_minmax(0,1fr)]">
              <div className="flex flex-col items-center gap-2">
                <SandConeDiagram />
                <span className="t-micro text-center">Cone of radius r and height h</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-border bg-muted/40 p-3 [&>div]:my-0">
                  <span className="t-micro mb-2 block">Given</span>
                  <FormulaBlock latex={String.raw`\frac{dV}{dt}=12\ \text{cm}^3/\text{s}`} />
                </div>
                <div className="rounded-md border border-border bg-muted/40 p-3 [&>div]:my-0">
                  <span className="t-micro mb-2 block">Fixed relationship</span>
                  <FormulaBlock latex={String.raw`h=\frac{r}{6}\ \Rightarrow\ r=6h`} />
                </div>
              </div>
            </div>
            <Expandable
              title="Show solution"
              variant="example"
              subjectColor="var(--subject-mathematics)"
            >
              <EquationLadder
                steps={[
                  { label: "Geometry relation", equation: String.raw`r=6h` },
                  { label: "Volume of a cone", equation: String.raw`V=\frac13\pi r^2h` },
                  { label: "Substitute r = 6h", equation: String.raw`V=\frac13\pi(6h)^2h` },
                  { label: "Simplify", equation: String.raw`V=12\pi h^3` },
                  {
                    label: "Differentiate with respect to time",
                    equation: String.raw`\frac{dV}{dt}=36\pi h^2\frac{dh}{dt}`,
                  },
                  {
                    label: "Substitute the pouring rate",
                    equation: String.raw`12=36\pi h^2\frac{dh}{dt}`,
                  },
                  {
                    label: "Solve for dh/dt",
                    equation: String.raw`\frac{dh}{dt}=\frac{1}{3\pi h^2}`,
                  },
                  {
                    label: "At h = 4 cm",
                    equation: String.raw`\frac{dh}{dt}=\frac{1}{3\pi(4)^2}`,
                  },
                ]}
              />
              <div className="[&>div]:my-0">
                <FormulaCard label="Result" subjectColor="var(--subject-mathematics)">
                  <FormulaBlock
                    latex={String.raw`\boxed{\frac{dh}{dt}=\frac{1}{48\pi}\ \text{cm/s}}`}
                    important
                  />
                </FormulaCard>
              </div>
            </Expandable>
          </div>
        </div>

        <h3 id="h-6-2-p3-2">2. Curve: Comparing Rates of Change</h3>
        <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
          <div className="border-b border-border px-4 py-3 sm:px-5">
            <span className="t-micro">Motion along a curve</span>
          </div>
          <div className="px-4 py-4 sm:px-5">
            <p>
              A particle moves along the curve <Formula>{String.raw`6y=x^3+2`}</Formula>. Find the
              points where the <Formula>y</Formula>-coordinate changes eight times as fast as the{" "}
              <Formula>x</Formula>-coordinate.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-border p-3 [&>div]:my-0">
                <span className="t-micro mb-2 block">Curve</span>
                <FormulaBlock latex={String.raw`6y=x^3+2`} />
              </div>
              <div className="rounded-md border border-border p-3 [&>div]:my-0">
                <span className="t-micro mb-2 block">Rate condition</span>
                <FormulaBlock latex={String.raw`\frac{dy}{dt}=8\frac{dx}{dt}`} />
              </div>
            </div>
            <Expandable
              title="Show solution"
              variant="example"
              subjectColor="var(--subject-mathematics)"
            >
              <SolutionStep label="Differentiate with respect to time">
                <FormulaBlock latex={String.raw`6\frac{dy}{dt}=3x^2\frac{dx}{dt}`} />
              </SolutionStep>
              <SolutionStep label="Substitute the rate condition">
                <FormulaBlock latex={String.raw`6\left(8\frac{dx}{dt}\right)=3x^2\frac{dx}{dt}`} />
              </SolutionStep>
              <SolutionStep label="Cancel dx/dt">
                <FormulaBlock latex={String.raw`48=3x^2`} />
                <FormulaBlock latex={String.raw`x^2=16`} />
                <FormulaBlock latex={String.raw`x=\pm4`} />
              </SolutionStep>
              <SolutionStep label="Find the corresponding y-coordinates">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-md border border-border p-3 [&>div]:my-0">
                    <span className="t-micro mb-2 block">When x = 4</span>
                    <FormulaBlock latex={String.raw`6y=4^3+2=66`} />
                    <FormulaBlock latex={String.raw`y=11`} />
                    <FormulaBlock latex={String.raw`\boxed{(4,11)}`} important />
                  </div>
                  <div className="rounded-md border border-border p-3 [&>div]:my-0">
                    <span className="t-micro mb-2 block">When x = −4</span>
                    <FormulaBlock latex={String.raw`6y=(-4)^3+2=-62`} />
                    <FormulaBlock latex={String.raw`y=-\frac{31}{3}`} />
                    <FormulaBlock
                      latex={String.raw`\boxed{\left(-4,-\frac{31}{3}\right)}`}
                      important
                    />
                  </div>
                </div>
              </SolutionStep>
              <div className="[&>aside]:my-0">
                <KeyPoint title="Points on the curve">
                  <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                    <Formula>{String.raw`(4,11)`}</Formula>
                    <Formula>{String.raw`\left(-4,-\frac{31}{3}\right)`}</Formula>
                  </div>
                </KeyPoint>
              </div>
            </Expandable>
          </div>
        </div>

        <h3 id="h-6-2-p3-3">3. Marginal Revenue and Marginal Cost</h3>
        <p>Derivatives measure how revenue and cost change as the number of units changes.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormulaCard label="Marginal Revenue (MR)" subjectColor="var(--subject-mathematics)">
            <p className="text-sm text-muted-foreground">
              If <Formula>R(x)</Formula> represents total revenue:
            </p>
            <FormulaBlock latex={String.raw`\boxed{MR=\frac{dR(x)}{dx}}`} important />
          </FormulaCard>
          <FormulaCard label="Marginal Cost (MC)" subjectColor="var(--subject-mathematics)">
            <p className="text-sm text-muted-foreground">
              If <Formula>C(x)</Formula> represents total cost:
            </p>
            <FormulaBlock latex={String.raw`\boxed{MC=\frac{dC(x)}{dx}}`} important />
          </FormulaCard>
        </div>

        <h3 id="h-6-2-p3-4">4. Marginal Revenue Problem</h3>
        <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
          <div className="border-b border-border px-4 py-3 sm:px-5">
            <span className="t-micro">Marginal revenue · Worked example</span>
          </div>
          <div className="px-4 py-4 sm:px-5">
            <p>
              Total revenue from selling <Formula>x</Formula> units is{" "}
              <Formula>{String.raw`R(x)=13x^2+26x+15`}</Formula>. Find the marginal revenue when{" "}
              <Formula>{String.raw`x=7`}</Formula>.
            </p>
            <Expandable
              title="Show solution"
              variant="example"
              subjectColor="var(--subject-mathematics)"
            >
              <Stepper
                steps={[
                  {
                    label: "Revenue function",
                    description: (
                      <div className="[&>div]:my-0">
                        <FormulaBlock latex={String.raw`R(x)=13x^2+26x+15`} />
                      </div>
                    ),
                  },
                  {
                    label: "Differentiate",
                    description: (
                      <div className="[&>div]:my-0">
                        <FormulaBlock latex={String.raw`MR=\frac{dR(x)}{dx}`} />
                        <FormulaBlock latex={String.raw`MR=26x+26`} />
                      </div>
                    ),
                  },
                  {
                    label: "Evaluate at x = 7",
                    description: (
                      <div className="[&>div]:my-0">
                        <FormulaBlock latex={String.raw`MR=26(7)+26`} />
                        <div className="rounded-md border border-border bg-muted px-3 py-2 [&>div]:my-0">
                          <FormulaBlock
                            latex={String.raw`\boxed{MR=208\ \text{Rupees}}`}
                            important
                          />
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </Expandable>
          </div>
        </div>

        <h3 id="h-6-2-p3-5">5. Marginal Cost Problem</h3>
        <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
          <div className="border-b border-border px-4 py-3 sm:px-5">
            <span className="t-micro">Marginal cost · Worked example</span>
          </div>
          <div className="px-4 py-4 sm:px-5">
            <p>
              Total production cost is{" "}
              <Formula>{String.raw`C(x)=0.007x^3-0.003x^2+15x+4000`}</Formula>. Find the marginal
              cost when <Formula>17</Formula> units are produced.
            </p>
            <Expandable
              title="Show solution"
              variant="example"
              subjectColor="var(--subject-mathematics)"
            >
              <SolutionStep label="Differentiate the cost function">
                <FormulaBlock latex={String.raw`MC=\frac{dC(x)}{dx}`} />
                <FormulaBlock latex={String.raw`MC=0.021x^2-0.006x+15`} />
              </SolutionStep>
              <SolutionStep label="Substitute x = 17">
                <FormulaBlock latex={String.raw`MC=0.021(17)^2-0.006(17)+15`} />
              </SolutionStep>
              <SolutionStep label="Calculation breakdown">
                <TableCard
                  headers={["Term", "Value"]}
                  rows={[
                    {
                      cells: [
                        <Formula key="mc-term-1">{String.raw`0.021(17)^2`}</Formula>,
                        <Formula key="mc-value-1">{String.raw`6.069`}</Formula>,
                      ],
                    },
                    {
                      cells: [
                        <Formula key="mc-term-2">{String.raw`-0.006(17)`}</Formula>,
                        <Formula key="mc-value-2">{String.raw`-0.102`}</Formula>,
                      ],
                    },
                    {
                      cells: ["Constant", <Formula key="mc-value-3">{String.raw`15`}</Formula>],
                    },
                  ]}
                />
                <FormulaBlock latex={String.raw`=6.069-0.102+15`} />
                <FormulaBlock latex={String.raw`\boxed{MC=20.967\ \text{Rupees}}`} important />
              </SolutionStep>
            </Expandable>
          </div>
        </div>

        <h3 id="h-6-2-p3-6">6. Rate-Type Reference</h3>
        <PocketGrid
          title="Choose the shape, then choose the rate"
          columns={3}
          items={[
            {
              id: "rate-type-core",
              icon: "📐",
              label: "Core Principles & Definitions",
              note: "Single-variable and parametric rates",
              content: (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      1 · Direct rate w.r.t. a single variable
                    </p>
                    <ul className="mt-1.5 list-disc space-y-1.5 pl-5 text-sm">
                      <li>
                        <strong>Concept:</strong> evaluate{" "}
                        <Formula>{String.raw`\frac{dy}{dx}=f'(x)`}</Formula> at{" "}
                        <Formula>{String.raw`x=x_0`}</Formula>.
                      </li>
                      <li>
                        <strong>Sign rule:</strong> <Formula>{String.raw`\frac{dy}{dx}>0`}</Formula>{" "}
                        means <Formula>y</Formula> increases as <Formula>x</Formula> increases;{" "}
                        <Formula>{String.raw`\frac{dy}{dx}<0`}</Formula> means it decreases.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      2 · Parametric rates (chain rule)
                    </p>
                    <ul className="mt-1.5 list-disc space-y-1.5 pl-5 text-sm">
                      <li>
                        <strong>Concept:</strong> both <Formula>{String.raw`x=f(t)`}</Formula> and{" "}
                        <Formula>{String.raw`y=g(t)`}</Formula> depend on time <Formula>t</Formula>.
                      </li>
                      <li>
                        <strong>Formula:</strong>{" "}
                        <Formula>{String.raw`\frac{dy}{dx}=\frac{dy/dt}{dx/dt}`}</Formula>, provided{" "}
                        <Formula>{String.raw`\frac{dx}{dt}\neq0`}</Formula>.
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              id: "rate-type-geometry",
              icon: "📏",
              label: "Geometric & Physical Rate Types",
              note: "Circles, cubes, spheres, rectangles, vessels, ladders, shadows, curves",
              content: (
                <TableCard
                  headers={["Type", "Relationship / rate"]}
                  rows={[
                    {
                      cells: [
                        "2A · Circles & ripples",
                        <div key="type-2a" className="flex flex-wrap gap-x-4 gap-y-1.5">
                          <Formula>{String.raw`\frac{dA}{dr}=2\pi r`}</Formula>
                          <Formula>{String.raw`\frac{dA}{dt}=2\pi r\frac{dr}{dt}`}</Formula>
                          <Formula>{String.raw`\frac{dC}{dt}=2\pi\frac{dr}{dt}`}</Formula>
                        </div>,
                      ],
                    },
                    {
                      cells: [
                        "2B · Cubes",
                        <div key="type-2b" className="flex flex-wrap gap-x-4 gap-y-1.5">
                          <Formula>{String.raw`\frac{dV}{dt}=3x^2\frac{dx}{dt}`}</Formula>
                          <Formula>{String.raw`\frac{dS}{dt}=12x\frac{dx}{dt}`}</Formula>
                          <Formula>{String.raw`\frac{dx}{dt}=\frac{1}{3x^2}\frac{dV}{dt}`}</Formula>
                          <span className="w-full text-xs text-muted-foreground">
                            Inter-variable elimination: solve for the edge rate, then substitute
                            into <Formula>{String.raw`\frac{dS}{dt}`}</Formula>.
                          </span>
                        </div>,
                      ],
                    },
                    {
                      cells: [
                        "2C · Spheres & bubbles",
                        <div key="type-2c" className="flex flex-wrap gap-x-4 gap-y-1.5">
                          <Formula>{String.raw`\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}`}</Formula>
                          <Formula>{String.raw`\frac{dS}{dt}=8\pi r\frac{dr}{dt}`}</Formula>
                          <Formula>{String.raw`d=2r=f(x)\ \Rightarrow\ \frac{dV}{dx}`}</Formula>
                        </div>,
                      ],
                    },
                    {
                      cells: [
                        "2D · Rectangles",
                        <div key="type-2d" className="flex flex-wrap gap-x-4 gap-y-1.5">
                          <Formula>{String.raw`\frac{dP}{dt}=2\left(\frac{dx}{dt}+\frac{dy}{dt}\right)`}</Formula>
                          <Formula>{String.raw`\frac{dA}{dt}=\frac{dx}{dt}y+x\frac{dy}{dt}`}</Formula>
                        </div>,
                      ],
                    },
                    {
                      cells: [
                        "2E · Vessels & sand cones",
                        <ul key="type-2e" className="list-disc space-y-1.5 pl-5">
                          <li>
                            <strong>Sand cones:</strong> <Formula>{String.raw`h=\frac{r}{6}`}</Formula>,{" "}
                            <Formula>{String.raw`V=12\pi h^3`}</Formula> → <Formula>{String.raw`\frac{dh}{dt}`}</Formula>.
                          </li>
                          <li>
                            <strong>Conical tanks:</strong>{" "}
                            <Formula>{String.raw`\alpha=\tan^{-1}(0.5)`}</Formula>,{" "}
                            <Formula>{String.raw`r=0.5h`}</Formula>,{" "}
                            <Formula>{String.raw`V=\frac{\pi h^3}{12}`}</Formula> →{" "}
                            <Formula>{String.raw`\frac{dh}{dt}`}</Formula>.
                          </li>
                          <li>
                            <strong>Cylindrical tanks:</strong>{" "}
                            <Formula>{String.raw`\frac{dV}{dt}=\pi r^2\frac{dh}{dt}`}</Formula>.
                          </li>
                        </ul>,
                      ],
                    },
                    {
                      cells: [
                        "2F · Leaning ladders",
                        <div key="type-2f" className="flex flex-wrap gap-x-4 gap-y-1.5">
                          <Formula>{String.raw`x^2+y^2=L^2`}</Formula>
                          <Formula>{String.raw`2x\frac{dx}{dt}+2y\frac{dy}{dt}=0`}</Formula>
                          <Formula>{String.raw`\frac{dy}{dt}=-\frac{x}{y}\frac{dx}{dt}`}</Formula>
                        </div>,
                      ],
                    },
                    {
                      cells: [
                        "2G · Shadows",
                        <div key="type-2g" className="flex flex-wrap gap-x-4 gap-y-1.5">
                          <span className="w-full text-xs text-muted-foreground">
                            By similar triangles:
                          </span>
                          <Formula>{String.raw`\frac{s}{s+l}=\frac{\text{height of man}}{\text{height of lamp-post}}`}</Formula>
                          <Formula>{String.raw`l=2s\ \Rightarrow\ \frac{dl}{dt}=2\frac{ds}{dt}`}</Formula>
                        </div>,
                      ],
                    },
                    {
                      cells: [
                        "2H · Motion along curves",
                        <Formula key="type-2h">
                          {String.raw`\frac{dy}{dt}=k\cdot\frac{dx}{dt}\ \Rightarrow\ \text{find }(x,y)\text{ on }y=f(x)`}
                        </Formula>,
                      ],
                    },
                  ]}
                />
              ),
            },
            {
              id: "rate-type-economics",
              icon: "💼",
              label: "Economic Applications",
              note: "Marginal cost and marginal revenue",
              content: (
                <TableCard
                  headers={["Type", "Definition", "Rate"]}
                  rows={[
                    {
                      cells: [
                        "3A · Marginal cost",
                        "Instantaneous rate of change of total cost w.r.t. production units.",
                        <Formula key="type-3a">
                          {String.raw`MC=\frac{dC}{dx}\ \text{at}\ x=x_0`}
                        </Formula>,
                      ],
                    },
                    {
                      cells: [
                        "3B · Marginal revenue",
                        "Instantaneous rate of change of total revenue w.r.t. units sold.",
                        <Formula key="type-3b">
                          {String.raw`MR=\frac{dR}{dx}\ \text{at}\ x=x_0`}
                        </Formula>,
                      ],
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      </div>

      <h2 id="h-6-3">6.3 Increasing and Decreasing Functions</h2>
      <p>
        A function is classified according to how its output <Formula>f(x)</Formula> changes as its
        input <Formula>x</Formula> increases.
      </p>
      <p>The material is organized into two connected units:</p>
      <ol className="list-decimal space-y-1.5 pl-5">
        <li>
          <strong>Increasing and Decreasing Functions</strong> — derivative conditions, graphical
          interpretation, solved problems and exercises.
        </li>
        <li>
          <strong>Solving Inequalities</strong> — linear inequalities, quadratic inequalities and
          the wavy-curve method.
        </li>
      </ol>
      <Callout type="note" title="About the working">
        <p>
          The original question sequence and mathematical working are retained. Obvious
          transcription errors and inconsistent answers are corrected and identified.
        </p>
      </Callout>

      <h3 id="h-6-3-1">1. Understanding Function Behaviour</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="grid gap-3 sm:grid-cols-[130px_minmax(0,1fr)] sm:items-center">
            <StrictlyIncreasingGraph />
            <div>
              <span className="t-micro">Strictly increasing</span>
              <p className="mt-2">
                <Formula>{String.raw`f'(x)>0`}</Formula>
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Rises continuously from left to right.</li>
                <li>
                  If <Formula>{String.raw`x_1<x_2`}</Formula>, then{" "}
                  <Formula>{String.raw`f(x_1)<f(x_2)`}</Formula>.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="grid gap-3 sm:grid-cols-[130px_minmax(0,1fr)] sm:items-center">
            <IncreasingGraph />
            <div>
              <span className="t-micro">Increasing</span>
              <p className="mt-2">
                <Formula>{String.raw`f'(x)\geq0`}</Formula>
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Never decreases.</li>
                <li>May have horizontal portions or isolated stationary points.</li>
                <li>
                  <Formula>{String.raw`f'(x)=0`}</Formula> at some points is allowed.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="grid gap-3 sm:grid-cols-[130px_minmax(0,1fr)] sm:items-center">
            <StrictlyDecreasingGraph />
            <div>
              <span className="t-micro">Strictly decreasing</span>
              <p className="mt-2">
                <Formula>{String.raw`f'(x)<0`}</Formula>
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Falls continuously from left to right.</li>
                <li>
                  If <Formula>{String.raw`x_1<x_2`}</Formula>, then{" "}
                  <Formula>{String.raw`f(x_1)>f(x_2)`}</Formula>.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="grid gap-3 sm:grid-cols-[130px_minmax(0,1fr)] sm:items-center">
            <DecreasingGraph />
            <div>
              <span className="t-micro">Decreasing</span>
              <p className="mt-2">
                <Formula>{String.raw`f'(x)\leq0`}</Formula>
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Never increases.</li>
                <li>May have horizontal portions or stationary points.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h4 id="h-6-3-1-5">1.5 Neither Increasing Nor Decreasing</h4>
      <p>
        A function is neither increasing nor decreasing over an interval if its direction changes
        within that interval.
      </p>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="min-w-0">
          <span className="t-micro">Example — wave-like curve</span>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>Initially increases.</li>
            <li>Reaches a local maximum.</li>
            <li>Decreases.</li>
            <li>Reaches a local minimum.</li>
            <li>Increases again.</li>
          </ul>
        </div>
        <WaveCurveDiagram />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="min-w-0">
          <span className="t-micro">Example</span>
          <div className="mt-2 [&>div]:my-0">
            <FormulaBlock latex={String.raw`f:\mathbb{R}\rightarrow\mathbb{R},\qquad f(x)=x^2`} />
          </div>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>
              Decreasing for <Formula>{String.raw`x<0`}</Formula>.
            </li>
            <li>
              Increasing for <Formula>{String.raw`x>0`}</Formula>.
            </li>
            <li>
              Therefore, neither increasing nor decreasing over all of{" "}
              <Formula>{String.raw`\mathbb{R}`}</Formula>.
            </li>
          </ul>
        </div>
        <ParabolaDiagram />
      </div>

      <h3 id="h-6-3-2">2. Core Method: Using Derivatives</h3>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="min-w-0">
          <p>Determine whether a function is increasing or decreasing:</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5">
            <li>
              Find <Formula>{String.raw`f'(x)`}</Formula>.
            </li>
            <li>
              Solve <Formula>{String.raw`f'(x)=0`}</Formula> to find critical points.
            </li>
            <li>
              Divide the domain into intervals and determine the sign of{" "}
              <Formula>{String.raw`f'(x)`}</Formula>.
            </li>
          </ol>
          <Callout type="important" title="Important distinction" subjectColor="var(--subject-mathematics)">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Formula>{String.raw`f'(x)>0`}</Formula> throughout an interval → strictly
                increasing.
              </li>
              <li>
                <Formula>{String.raw`f'(x)<0`}</Formula> throughout an interval → strictly
                decreasing.
              </li>
              <li>
                <Formula>{String.raw`f'(x)\geq0`}</Formula> → non-decreasing; it can still be
                strictly increasing if it does not remain constant over any subinterval.
              </li>
              <li>
                <Formula>{String.raw`f'(x)\leq0`}</Formula> → non-increasing; it can still be
                strictly decreasing under the corresponding condition.
              </li>
            </ul>
          </Callout>
        </div>
        <DecisionFlowDiagram />
      </div>

      <h3 id="h-6-3-3">3. Solved Problems: Basic Derivative Conditions</h3>

      <WorkedExample
        title="Question 1 — Linear Function"
        question={
          <>
            Show that <Formula>{String.raw`f(x)=7x-3`}</Formula> is strictly increasing on{" "}
            <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </>
        }
      >
        <SolutionStep label="Derivative and conclusion">
          <div className="grid gap-4 sm:grid-cols-[110px_minmax(0,1fr)_minmax(0,1fr)]">
            <RisingLineDiagram />
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">Condition: f&apos;(x) &gt; 0</span>
              <FormulaBlock latex={String.raw`f(x)=7x-3`} />
              <FormulaBlock latex={String.raw`f'(x)=7`} />
              <FormulaBlock latex={String.raw`7>0`} />
            </div>
            <div className="rounded-md border-l-[3px] border-ok bg-muted p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">Conclusion</span>
              <FormulaBlock
                latex={String.raw`\boxed{f(x)\text{ is strictly increasing on }\mathbb{R}}`}
                important
              />
            </div>
          </div>
        </SolutionStep>
      </WorkedExample>

      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3 sm:px-5">
          <span className="t-micro">Question 2 — Work · Linear Function</span>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <p>
            Show that <Formula>{String.raw`f(x)=3x+17`}</Formula> is strictly increasing on{" "}
            <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </p>
          <Expandable
            title="Show answer"
            variant="example"
            subjectColor="var(--subject-mathematics)"
          >
            <SolutionStep label="Derivative">
              <p className="text-sm text-muted-foreground">
                Since <Formula>f</Formula> is a polynomial, it is continuous and differentiable on{" "}
                <Formula>{String.raw`\mathbb{R}`}</Formula>.
              </p>
              <FormulaBlock latex={String.raw`f'(x)=3`} />
              <FormulaBlock latex={String.raw`3>0,\qquad \forall x\in\mathbb{R}`} />
            </SolutionStep>
            <SolutionStep label="Conclusion">
              <FormulaBlock
                latex={String.raw`\boxed{f(x)\text{ is strictly increasing on }\mathbb{R}}`}
                important
              />
            </SolutionStep>
          </Expandable>
        </div>
      </div>

      <WorkedExample
        title="Question 3 — Exponential Function"
        question={
          <>
            Show that <Formula>{String.raw`f(x)=e^{2x}`}</Formula> is strictly increasing on{" "}
            <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </>
        }
      >
        <SolutionStep label="Reference notes">
          <div className="grid gap-4 sm:grid-cols-[160px_minmax(0,1fr)] sm:items-center">
            <ExponentialCurveDiagram />
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Formula>{String.raw`e^x,e^{2x},e^{3x},\ldots>0`}</Formula>
              </li>
              <li>
                <Formula>{String.raw`e=2.718\ldots`}</Formula>
              </li>
            </ul>
          </div>
        </SolutionStep>
        <SolutionStep label="Chain rule">
          <FormulaBlock latex={String.raw`f(x)=e^{2x}`} />
          <FormulaBlock latex={String.raw`f'(x)=e^{2x}\frac{d(2x)}{dx}`} />
          <FormulaBlock latex={String.raw`f'(x)=2e^{2x}`} />
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <p className="text-sm text-muted-foreground">
            Since <Formula>{String.raw`e^{2x}>0`}</Formula>, we get{" "}
            <Formula>{String.raw`f'(x)>0`}</Formula>.
          </p>
          <FormulaBlock
            latex={String.raw`\boxed{f(x)\text{ is strictly increasing on }\mathbb{R}}`}
            important
          />
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 4 — Perfect Square Factorisation"
        question={
          <>
            Prove that <Formula>{String.raw`f(x)=x^3-3x^2+3x-100`}</Formula> is strictly increasing
            on <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </>
        }
      >
        <SolutionStep label="Condition: f'(x) ≥ 0">
          <FormulaBlock latex={String.raw`f'(x)=3x^2-6x+3`} />
        </SolutionStep>
        <SolutionStep label="Factorise">
          <FormulaBlock latex={String.raw`=3(x^2-2x+1)`} />
          <FormulaBlock latex={String.raw`=3(x-1)^2`} />
          <div className="[&>div]:my-0">
            <KeyPoint title="Identity used">
              <FormulaBlock latex={String.raw`(x-1)^2=x^2-2x+1`} />
            </KeyPoint>
          </div>
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <p className="text-sm text-muted-foreground">
            A square is always non-negative, so <Formula>{String.raw`f'(x)\geq0`}</Formula>.
            Equality occurs only at <Formula>{String.raw`x=1`}</Formula> — a stationary point, not a
            turning point.
          </p>
          <FormulaBlock
            latex={String.raw`\boxed{f(x)\text{ is strictly increasing on }\mathbb{R}}`}
            important
          />
        </SolutionStep>
      </WorkedExample>

      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3 sm:px-5">
          <span className="t-micro">Question 5 — Work · Perfect Square</span>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <p>
            Show that <Formula>{String.raw`f(x)=x^3-3x^2+4x`}</Formula> is strictly increasing on{" "}
            <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </p>
          <Expandable
            title="Show answer"
            variant="example"
            subjectColor="var(--subject-mathematics)"
          >
            <SolutionStep label="Differentiate and complete the square">
              <FormulaBlock latex={String.raw`f'(x)=3x^2-6x+4`} />
              <FormulaBlock latex={String.raw`=3(x^2-2x+1)+1`} />
              <FormulaBlock latex={String.raw`=3(x-1)^2+1`} />
            </SolutionStep>
            <SolutionStep label="Key insight and conclusion">
              <div className="[&>div]:my-0">
                <KeyPoint title="Completed-square form">
                  <FormulaBlock latex={String.raw`3(x-1)^2+1>0`} important />
                </KeyPoint>
              </div>
              <FormulaBlock
                latex={String.raw`\boxed{f(x)\text{ is strictly increasing on }\mathbb{R}}`}
                important
              />
            </SolutionStep>
          </Expandable>
        </div>
      </div>

      <h3 id="h-6-3-4">4. Logarithmic and Trigonometric Functions</h3>

      <WorkedExample
        title="Question 1 — Logarithmic Function"
        question={<>Prove that the logarithmic function is increasing on <Formula>{String.raw`(0,\infty)`}</Formula>.</>}
      >
        <SolutionStep label="Given and domain">
          <div className="grid gap-4 sm:grid-cols-[160px_minmax(0,1fr)] sm:items-center">
            <LogCurveDiagram />
            <div className="rounded-md border border-border bg-muted/40 p-3 [&>div]:my-0">
              <FormulaBlock latex={String.raw`f(x)=\log x`} />
              <FormulaBlock latex={String.raw`x\in(0,\infty)\Rightarrow x>0`} />
            </div>
          </div>
        </SolutionStep>
        <SolutionStep label="Differentiate">
          <FormulaBlock latex={String.raw`f'(x)=\frac1x`} />
          <p className="text-sm text-muted-foreground">
            Since <Formula>{String.raw`x>0`}</Formula>, we get <Formula>{String.raw`f'(x)>0`}</Formula>.
          </p>
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <FormulaBlock
            latex={String.raw`\boxed{\log x\text{ is strictly increasing on }(0,\infty)}`}
            important
          />
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 2 — Sine Function"
        question={
          <>
            Show that <Formula>{String.raw`f(x)=\sin x`}</Formula> is increasing in{" "}
            <Formula>{String.raw`\left(0,\frac\pi2\right)`}</Formula>, decreasing in{" "}
            <Formula>{String.raw`\left(\frac\pi2,\pi\right)`}</Formula>, and neither in{" "}
            <Formula>{String.raw`(0,\pi)`}</Formula>.
          </>
        }
      >
        <SolutionStep label="Reference — ASTC rule: signs by quadrant">
          <div className="grid gap-4 sm:grid-cols-[220px_minmax(0,1fr)]">
            <AstcQuadrantDiagram />
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { q: "I Quadrant", range: String.raw`\left(0,\frac\pi2\right)`, signs: "All are positive." },
                { q: "II Quadrant", range: String.raw`\left(\frac\pi2,\pi\right)`, signs: "Sine, cosecant positive." },
                { q: "III Quadrant", range: String.raw`\left(\pi,\frac{3\pi}2\right)`, signs: "Tangent, cotangent positive." },
                { q: "IV Quadrant", range: String.raw`\left(\frac{3\pi}2,2\pi\right)`, signs: "Cosine, secant positive." },
              ].map((item) => (
                <div key={item.q} className="rounded-md border border-border p-3">
                  <span className="t-micro block">{item.q}</span>
                  <Formula>{item.range}</Formula>
                  <p className="mt-1 text-sm text-foreground/80">{item.signs}</p>
                </div>
              ))}
            </div>
          </div>
        </SolutionStep>
        <SolutionStep label="Derivative">
          <FormulaBlock latex={String.raw`f'(x)=\cos x`} />
        </SolutionStep>
        <SolutionStep label="(a) In the first quadrant">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>First quadrant.</li>
            <li>
              <Formula>{String.raw`\cos x>0`}</Formula>, so <Formula>{String.raw`f'(x)>0`}</Formula>.
            </li>
          </ul>
          <p className="mt-2 text-sm font-semibold">Therefore, <Formula>{String.raw`\sin x`}</Formula> is increasing.</p>
        </SolutionStep>
        <SolutionStep label="(b) In the second quadrant">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>Second quadrant.</li>
            <li>
              <Formula>{String.raw`\cos x<0`}</Formula>, so <Formula>{String.raw`f'(x)<0`}</Formula>.
            </li>
          </ul>
          <p className="mt-2 text-sm font-semibold">Therefore, <Formula>{String.raw`\sin x`}</Formula> is decreasing.</p>
        </SolutionStep>
        <SolutionStep label="(c) Over the whole interval">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_260px]">
            <div>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Increasing in the first interval.</li>
                <li>Decreasing in the second interval.</li>
              </ul>
              <FormulaBlock
                latex={String.raw`\boxed{\sin x\text{ is neither increasing nor decreasing on }(0,\pi)}`}
                important
              />
            </div>
            <SineCurveDiagram />
          </div>
        </SolutionStep>
      </WorkedExample>

      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3 sm:px-5">
          <span className="t-micro">Question 3 — Work · Cosine Function</span>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <p>
            Prove that <Formula>{String.raw`f(x)=\cos x`}</Formula> is decreasing in{" "}
            <Formula>{String.raw`(0,\pi)`}</Formula>, increasing in{" "}
            <Formula>{String.raw`(\pi,2\pi)`}</Formula>, and neither in{" "}
            <Formula>{String.raw`(0,2\pi)`}</Formula>.
          </p>
          <Expandable
            title="Show solution"
            variant="example"
            subjectColor="var(--subject-mathematics)"
          >
            <SolutionStep label="Derivative">
              <FormulaBlock latex={String.raw`f'(x)=-\sin x`} />
            </SolutionStep>
            <SolutionStep label="(a) In (0, π)">
              <FormulaBlock latex={String.raw`\sin x>0`} />
              <FormulaBlock latex={String.raw`f'(x)=-\sin x<0`} />
              <p className="text-sm font-semibold">Therefore, <Formula>f</Formula> is decreasing.</p>
            </SolutionStep>
            <SolutionStep label="(b) In (π, 2π)">
              <FormulaBlock latex={String.raw`\sin x<0`} />
              <FormulaBlock latex={String.raw`f'(x)=-\sin x>0`} />
              <p className="text-sm font-semibold">Therefore, <Formula>f</Formula> is increasing.</p>
            </SolutionStep>
            <SolutionStep label="(c) Over the whole interval">
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_280px]">
                <div>
                  <p className="text-sm text-muted-foreground">
                    The function first decreases and then increases.
                  </p>
                  <FormulaBlock latex={String.raw`\boxed{f(x)\text{ is neither increasing nor decreasing}}`} important />
                </div>
                <CosineCurveDiagram />
              </div>
            </SolutionStep>
          </Expandable>
        </div>
      </div>

      <WorkedExample
        title="Question 4 — Logarithm of Absolute Cosine"
        question={
          <>
            Prove that <Formula>{String.raw`f(x)=\log|\cos x|`}</Formula> is decreasing on{" "}
            <Formula>{String.raw`\left(0,\frac\pi2\right)`}</Formula> and increasing on{" "}
            <Formula>{String.raw`\left(\frac{3\pi}2,2\pi\right)`}</Formula>.
          </>
        }
      >
        <SolutionStep label="Derivative">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_190px] sm:items-center">
            <div className="[&>div]:my-0">
              <p className="text-sm text-muted-foreground">
                On the specified intervals, <Formula>{String.raw`\cos x>0`}</Formula>, so{" "}
                <Formula>{String.raw`f(x)=\log(\cos x)`}</Formula>.
              </p>
              <FormulaBlock latex={String.raw`f'(x)=\frac1{\cos x}(-\sin x)`} />
              <FormulaBlock latex={String.raw`\boxed{f'(x)=-\tan x}`} important />
            </div>
            <UnitCircleTanDiagram />
          </div>
        </SolutionStep>
        <SolutionStep label="Two intervals">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">First interval</span>
              <FormulaBlock latex={String.raw`x\in\left(0,\frac\pi2\right)`} />
              <p className="text-sm text-muted-foreground">First quadrant.</p>
              <FormulaBlock latex={String.raw`\tan x>0`} />
              <FormulaBlock latex={String.raw`f'(x)=-\tan x<0`} />
              <p className="text-sm font-semibold">Therefore, decreasing.</p>
            </div>
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">Second interval</span>
              <FormulaBlock latex={String.raw`x\in\left(\frac{3\pi}2,2\pi\right)`} />
              <p className="text-sm text-muted-foreground">Fourth quadrant.</p>
              <FormulaBlock latex={String.raw`\tan x<0`} />
              <FormulaBlock latex={String.raw`f'(x)=-\tan x>0`} />
              <p className="text-sm font-semibold">Therefore, increasing.</p>
            </div>
          </div>
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <FormulaBlock latex={String.raw`\boxed{\text{Decreasing: }\left(0,\frac\pi2\right)}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Increasing: }\left(\frac{3\pi}2,2\pi\right)}`} important />
        </SolutionStep>
      </WorkedExample>

      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3 sm:px-5">
          <span className="t-micro">Question 5 — Work · Logarithm of Sine</span>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <p>
            Prove that <Formula>{String.raw`f(x)=\log(\sin x)`}</Formula> is increasing on{" "}
            <Formula>{String.raw`\left(0,\frac\pi2\right)`}</Formula> and decreasing on{" "}
            <Formula>{String.raw`\left(\frac\pi2,\pi\right)`}</Formula>.
          </p>
          <Expandable
            title="Show solution"
            variant="example"
            subjectColor="var(--subject-mathematics)"
          >
            <SolutionStep label="Graph reference and derivative">
              <div className="grid gap-4 sm:grid-cols-[260px_minmax(0,1fr)]">
                <SineCurveDiagram />
                <div className="[&>div]:my-0">
                  <FormulaBlock latex={String.raw`f'(x)=\frac1{\sin x}\cos x`} />
                  <FormulaBlock latex={String.raw`f'(x)=\cot x`} important />
                </div>
              </div>
            </SolutionStep>
            <SolutionStep label="First interval">
              <FormulaBlock latex={String.raw`\cot x>0\quad\text{for }x\in\left(0,\frac\pi2\right)`} />
              <p className="text-sm font-semibold">Therefore, increasing.</p>
            </SolutionStep>
            <SolutionStep label="Second interval">
              <FormulaBlock latex={String.raw`\cot x<0\quad\text{for }x\in\left(\frac\pi2,\pi\right)`} />
              <p className="text-sm font-semibold">Therefore, decreasing.</p>
            </SolutionStep>
            <SolutionStep label="Conclusion">
              <FormulaBlock latex={String.raw`\boxed{\text{Increasing: }\left(0,\frac\pi2\right)}`} important />
              <FormulaBlock latex={String.raw`\boxed{\text{Decreasing: }\left(\frac\pi2,\pi\right)}`} important />
            </SolutionStep>
          </Expandable>
        </div>
      </div>

      <WorkedExample
        title="Question 6 — Neither Strictly Increasing Nor Decreasing"
        question={
          <>
            Prove that <Formula>{String.raw`f(x)=x^2-x+1`}</Formula> is neither strictly increasing
            nor strictly decreasing on <Formula>{String.raw`(-1,1)`}</Formula>.
          </>
        }
      >
        <SolutionStep label="Critical point">
          <FormulaBlock latex={String.raw`f'(x)=2x-1`} />
          <FormulaBlock latex={String.raw`2x-1=0`} />
          <FormulaBlock latex={String.raw`x=\frac12=0.5`} />
          <p className="text-sm text-muted-foreground">This divides the domain into two intervals.</p>
          <SignNumberLine points={["−1", "1/2", "1"]} signs={["", "−", "+", ""]} note="sign of f'(x)" />
        </SolutionStep>
        <SolutionStep label="Test point 1: x = 0">
          <FormulaBlock latex={String.raw`f'(0)=2(0)-1=-1<0`} />
          <p className="text-sm font-semibold">
            So the function is decreasing on <Formula>{String.raw`\left(-1,\frac12\right)`}</Formula>.
          </p>
        </SolutionStep>
        <SolutionStep label="Test point 2: x = 0.75">
          <FormulaBlock latex={String.raw`f'(0.75)=2(0.75)-1=0.5>0`} />
          <p className="text-sm font-semibold">
            So the function is increasing on <Formula>{String.raw`\left(\frac12,1\right)`}</Formula>.
          </p>
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <FormulaBlock
            latex={String.raw`\boxed{\text{Neither increasing nor decreasing on }(-1,1)}`}
            important
          />
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 7 — Logarithm of (1 + x)"
        question={
          <>
            Show that <Formula>{String.raw`y=\log(1+x)-\frac{2x}{2+x}`}</Formula>, for{" "}
            <Formula>{String.raw`x>-1`}</Formula>, is an increasing function throughout its domain.
          </>
        }
      >
        <SolutionStep label="Domain and derivative">
          <FormulaBlock latex={String.raw`1+x>0\quad\Rightarrow\quad x>-1`} />
          <FormulaBlock latex={String.raw`\frac{dy}{dx}=\frac1{1+x}-\frac4{(2+x)^2}`} />
        </SolutionStep>
        <SolutionStep label="Combine into one fraction">
          <FormulaBlock latex={String.raw`\frac{dy}{dx}=\frac{(2+x)^2-4(1+x)}{(1+x)(2+x)^2}`} />
          <FormulaBlock latex={String.raw`=\frac{x^2}{(1+x)(2+x)^2}`} important />
        </SolutionStep>
        <SolutionStep label="Sign conclusion">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              <Formula>{String.raw`(1+x)>0`}</Formula> in the domain.
            </li>
            <li>
              <Formula>{String.raw`(2+x)^2>0`}</Formula> for every allowed{" "}
              <Formula>x</Formula>.
            </li>
            <li>
              <Formula>{String.raw`x^2\geq0`}</Formula>, and it vanishes only at{" "}
              <Formula>{String.raw`x=0`}</Formula>.
            </li>
          </ul>
          <div className="[&>div]:my-0">
            <KeyPoint title="An isolated zero is allowed">
              <FormulaBlock latex={String.raw`\frac{dy}{dx}\geq0\text{ on the domain, with equality only at }x=0`} />
            </KeyPoint>
          </div>
          <FormulaBlock latex={String.raw`\boxed{y\text{ is increasing for }x>-1}`} important />
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 8 — Trigonometric Quotient"
        question={
          <>
            Prove that <Formula>{String.raw`y=\frac{4\sin\theta}{2+\cos\theta}-\theta`}</Formula>{" "}
            is an increasing function of <Formula>\theta</Formula> on{" "}
            <Formula>{String.raw`\left[0,\frac\pi2\right]`}</Formula>.
          </>
        }
      >
        <SolutionStep label="Differentiate the quotient">
          <FormulaBlock
            latex={String.raw`\frac{dy}{d\theta}=\frac{4\cos\theta(2+\cos\theta)+4\sin^2\theta}{(2+\cos\theta)^2}-1`}
          />
          <FormulaBlock latex={String.raw`=\frac{8\cos\theta+4\cos^2\theta+4\sin^2\theta}{(2+\cos\theta)^2}-1`} />
          <FormulaBlock latex={String.raw`=\frac{8\cos\theta+4}{(2+\cos\theta)^2}-1`} />
        </SolutionStep>
        <SolutionStep label="Simplify the numerator">
          <FormulaBlock
            latex={String.raw`\frac{dy}{d\theta}=\frac{8\cos\theta+4-(2+\cos\theta)^2}{(2+\cos\theta)^2}`}
          />
          <FormulaBlock
            latex={String.raw`=\frac{\cos\theta\,(4-\cos\theta)}{(2+\cos\theta)^2}`}
            important
          />
        </SolutionStep>
        <SolutionStep label="Sign on the given interval">
          <div className="grid gap-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center">
            <CosDecreasingStrip />
            <ul className="list-disc space-y-1 pl-5 text-sm">
              <li>
                <Formula>{String.raw`0\leq\theta\leq\frac\pi2`}</Formula> gives{" "}
                <Formula>{String.raw`0\leq\cos\theta\leq1`}</Formula>.
              </li>
              <li>
                <Formula>{String.raw`4-\cos\theta>0`}</Formula> and{" "}
                <Formula>{String.raw`(2+\cos\theta)^2>0`}</Formula>.
              </li>
              <li>
                Hence <Formula>{String.raw`\frac{dy}{d\theta}\geq0`}</Formula>; the derivative is
                zero only at <Formula>{String.raw`\theta=\frac\pi2`}</Formula>.
              </li>
            </ul>
          </div>
          <FormulaBlock
            latex={String.raw`\boxed{y\text{ is increasing on }\left[0,\frac\pi2\right]}`}
            important
          />
        </SolutionStep>
      </WorkedExample>

      <h3 id="h-6-3-5">5. Finding Intervals of Increase and Decrease</h3>
      <p>
        Solve <Formula>{String.raw`f'(x)=0`}</Formula>, split the domain at the critical points, and
        test the sign of <Formula>{String.raw`f'(x)`}</Formula> in every interval.
      </p>

      <WorkedExample
        title="Question 1 — Quadratic"
        question={
          <>
            Find the intervals in which <Formula>{String.raw`f(x)=x^2-4x+6`}</Formula> is
            increasing and decreasing.
          </>
        }
      >
        <SolutionStep label="Critical point">
          <FormulaBlock latex={String.raw`f'(x)=2x-4=2(x-2)`} />
          <FormulaBlock latex={String.raw`2(x-2)=0\quad\Rightarrow\quad x=2`} />
          <SignNumberLine points={["2"]} signs={["−", "+"]} note="sign of f'(x)" />
        </SolutionStep>
        <SolutionStep label="Interval-wise conclusion">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">Decreasing</span>
              <FormulaBlock latex={String.raw`x<2\;\Rightarrow\;f'(x)<0`} />
              <FormulaBlock latex={String.raw`(-\infty,2)`} important />
            </div>
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">Increasing</span>
              <FormulaBlock latex={String.raw`x>2\;\Rightarrow\;f'(x)>0`} />
              <FormulaBlock latex={String.raw`(2,\infty)`} important />
            </div>
          </div>
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 2 — Three Functions"
        question={<>Find the intervals of increase and decrease for each function.</>}
      >
        <SolutionStep label="(i) f(x) = 6 − 9x − x²">
          <FormulaBlock latex={String.raw`f'(x)=-9-2x`} />
          <FormulaBlock latex={String.raw`-9-2x=0\quad\Rightarrow\quad x=-\frac92`} />
          <FormulaBlock latex={String.raw`-9-2x>0\quad\Rightarrow\quad x<-\frac92`} />
          <SignNumberLine points={["−9/2"]} signs={["+", "−"]} note="sign of f'(x)" />
          <FormulaBlock latex={String.raw`\boxed{\text{Increasing: }\left(-\infty,-\frac92\right)\quad\text{Decreasing: }\left(-\frac92,\infty\right)}`} important />
          <Callout type="warning" title="Correction applied">
            <p>
              Dividing <Formula>{String.raw`-9-2x>0`}</Formula> by{" "}
              <Formula>{String.raw`-2`}</Formula> reverses the inequality, giving{" "}
              <Formula>{String.raw`x<-\frac92`}</Formula>.
            </p>
          </Callout>
        </SolutionStep>
        <SolutionStep label="(ii) f(x) = −2x³ − 9x² − 12x + 1">
          <FormulaBlock latex={String.raw`f'(x)=-6x^2-18x-12`} />
          <FormulaBlock latex={String.raw`=-6(x^2+3x+2)`} />
          <FormulaBlock latex={String.raw`=-6(x+1)(x+2)`} important />
          <FormulaBlock latex={String.raw`f'(x)=0\quad\Rightarrow\quad x=-2,\,-1`} />
          <SignNumberLine points={["−2", "−1"]} signs={["−", "+", "−"]} note="sign of f'(x)" />
          <FormulaBlock latex={String.raw`\boxed{\text{Increasing: }(-2,-1)}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Decreasing: }(-\infty,-2)\cup(-1,\infty)}`} important />
        </SolutionStep>
        <SolutionStep label="(iii) f(x) = (x + 1)³(x − 3)³">
          <FormulaBlock latex={String.raw`f'(x)=3(x+1)^2(x-3)^3+3(x+1)^3(x-3)^2`} />
          <FormulaBlock latex={String.raw`=3(x+1)^2(x-3)^2\big[(x-3)+(x+1)\big]`} />
          <FormulaBlock latex={String.raw`=6(x-1)(x+1)^2(x-3)^2`} important />
          <p className="text-sm text-muted-foreground">
            The squared factors never change sign. Only <Formula>{String.raw`x=1`}</Formula> changes
            the sign of <Formula>{String.raw`f'(x)`}</Formula>.
          </p>
          <SignNumberLine
            points={["−1", "1", "3"]}
            signs={["−", "−", "+", "+"]}
            note="no sign change at −1 or 3"
          />
          <FormulaBlock latex={String.raw`\boxed{\text{Increasing: }(1,\infty)}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Decreasing: }(-\infty,1)}`} important />
          <Callout type="warning" title="Correction applied">
            <p>
              The points <Formula>{String.raw`x=-1`}</Formula> and{" "}
              <Formula>{String.raw`x=3`}</Formula> are stationary points. The derivative does not
              change sign there, so they do not split the monotonic intervals.
            </p>
          </Callout>
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 3 — Strict Monotonicity"
        question={<>Find where each function is strictly increasing or strictly decreasing.</>}
      >
        <SolutionStep label="(a) f(x) = x² + 2x − 5">
          <FormulaBlock latex={String.raw`f'(x)=2x+2=2(x+1)`} />
          <SignNumberLine points={["−1"]} signs={["−", "+"]} note="sign of f'(x)" />
          <FormulaBlock latex={String.raw`\boxed{\text{Decreasing: }(-\infty,-1)\quad\text{Increasing: }(-1,\infty)}`} important />
        </SolutionStep>
        <SolutionStep label="(b) f(x) = 10 − 6x − 2x²">
          <FormulaBlock latex={String.raw`f'(x)=-6-4x=-2(2x+3)`} />
          <FormulaBlock latex={String.raw`-2(2x+3)=0\quad\Rightarrow\quad x=-\frac32`} />
          <FormulaBlock
            latex={String.raw`x<-\frac32\;\Rightarrow\;2x+3<0\;\Rightarrow\;f'(x)>0`}
          />
          <FormulaBlock
            latex={String.raw`x>-\frac32\;\Rightarrow\;2x+3>0\;\Rightarrow\;f'(x)<0`}
          />
          <SignNumberLine points={["−3/2"]} signs={["+", "−"]} note="sign of f'(x)" />
          <FormulaBlock latex={String.raw`\boxed{\text{Increasing: }\left(-\infty,-\frac32\right)}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Decreasing: }\left(-\frac32,\infty\right)}`} important />
        </SolutionStep>
      </WorkedExample>

      <h3 id="h-6-3-6">6. Application Exercises</h3>
      <p>
        These questions combine trigonometric derivatives, sign tables and multiple-choice
        judgement.
      </p>

      <WorkedExample
        title="Question 1 — sin 3x on a Closed Interval"
        question={
          <>
            Find the intervals in which <Formula>{String.raw`f(x)=\sin 3x`}</Formula>,{" "}
            <Formula>{String.raw`x\in\left[0,\frac\pi2\right]`}</Formula>, is increasing and
            decreasing.
          </>
        }
      >
        <SolutionStep label="Derivative and critical points">
          <FormulaBlock latex={String.raw`f'(x)=3\cos 3x`} />
          <FormulaBlock latex={String.raw`\cos 3x=0\;\Rightarrow\;3x=\frac\pi2,\ \frac{3\pi}2`} />
          <FormulaBlock latex={String.raw`x=\frac\pi6,\ \frac\pi2`} important />
        </SolutionStep>
        <SolutionStep label="Sign of the derivative">
          <SignNumberLine points={["0", "π/6", "π/2"]} signs={["", "+", "−", ""]} note="sign of f'(x)" />
          <FormulaBlock latex={String.raw`0<x<\frac\pi6\;\Rightarrow\;f'(x)>0`} />
          <FormulaBlock latex={String.raw`\frac\pi6<x<\frac\pi2\;\Rightarrow\;f'(x)<0`} />
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <FormulaBlock latex={String.raw`\boxed{\text{Increasing: }\left[0,\frac\pi6\right]}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Decreasing: }\left[\frac\pi6,\frac\pi2\right]}`} important />
          <Callout type="warning" title="Correction applied">
            <p>
              The decreasing interval ends at <Formula>{String.raw`\frac\pi2`}</Formula>. Because{" "}
              <Formula>f</Formula> is continuous there, the endpoint is included.
            </p>
          </Callout>
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 2 — sin x + cos x"
        question={
          <>
            Find the intervals in which <Formula>{String.raw`f(x)=\sin x+\cos x`}</Formula>,{" "}
            <Formula>{String.raw`0\leq x\leq2\pi`}</Formula>, is increasing or decreasing.
          </>
        }
      >
        <SolutionStep label="Derivative and critical points">
          <FormulaBlock latex={String.raw`f'(x)=\cos x-\sin x`} />
          <FormulaBlock latex={String.raw`\cos x=\sin x\;\Rightarrow\;x=\frac\pi4,\ \frac{5\pi}4`} />
        </SolutionStep>
        <SolutionStep label="Sign table">
          <TableCard
            headers={["Interval", "Sign of f'(x)", "Nature of f"]}
            rows={[
              {
                cells: [
                  <Formula key="i1">{String.raw`\left[0,\frac\pi4\right)`}</Formula>,
                  <Formula key="i1s">{String.raw`>0`}</Formula>,
                  "increasing",
                ],
              },
              {
                cells: [
                  <Formula key="i2">{String.raw`\left(\frac\pi4,\frac{5\pi}4\right)`}</Formula>,
                  <Formula key="i2s">{String.raw`<0`}</Formula>,
                  "decreasing",
                ],
              },
              {
                cells: [
                  <Formula key="i3">{String.raw`\left(\frac{5\pi}4,2\pi\right]`}</Formula>,
                  <Formula key="i3s">{String.raw`>0`}</Formula>,
                  "increasing",
                ],
              },
            ]}
          />
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <FormulaBlock
            latex={String.raw`\boxed{\text{Increasing: }\left[0,\frac\pi4\right]\cup\left[\frac{5\pi}4,2\pi\right]}`}
            important
          />
          <FormulaBlock
            latex={String.raw`\boxed{\text{Decreasing: }\left[\frac\pi4,\frac{5\pi}4\right]}`}
            important
          />
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 3 — A Squared Product"
        question={
          <>
            Find the values of <Formula>x</Formula> for which{" "}
            <Formula>{String.raw`y=\big[x(x-2)\big]^2`}</Formula> is increasing.
          </>
        }
      >
        <SolutionStep label="Rewrite and differentiate">
          <FormulaBlock latex={String.raw`y=(x^2-2x)^2`} />
          <FormulaBlock latex={String.raw`\frac{dy}{dx}=2(x^2-2x)(2x-2)`} />
          <FormulaBlock latex={String.raw`=4x(x-2)(x-1)`} important />
        </SolutionStep>
        <SolutionStep label="Critical points and sign chart">
          <FormulaBlock latex={String.raw`x=0,\ 1,\ 2`} />
          <SignNumberLine points={["0", "1", "2"]} signs={["−", "+", "−", "+"]} note="sign of dy/dx" />
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <FormulaBlock latex={String.raw`\boxed{\text{Increasing: }(0,1)\cup(2,\infty)}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Decreasing: }(-\infty,0)\cup(1,2)}`} important />
        </SolutionStep>
      </WorkedExample>

      <WorkedExample
        title="Question 4 — Multiple Choice"
        question={
          <>
            The interval in which <Formula>{String.raw`y=x^2e^{-x}`}</Formula> is increasing is:
            (A) <Formula>{String.raw`(-\infty,\infty)`}</Formula> (B){" "}
            <Formula>{String.raw`(-2,0)`}</Formula> (C){" "}
            <Formula>{String.raw`(2,\infty)`}</Formula> (D){" "}
            <Formula>{String.raw`(0,2)`}</Formula>.
          </>
        }
      >
        <SolutionStep label="Derivative">
          <FormulaBlock latex={String.raw`\frac{dy}{dx}=2xe^{-x}-x^2e^{-x}`} />
          <FormulaBlock latex={String.raw`=x(2-x)e^{-x}`} important />
          <p className="text-sm text-muted-foreground">
            Since <Formula>{String.raw`e^{-x}>0`}</Formula>, the sign depends on{" "}
            <Formula>{String.raw`x(2-x)`}</Formula>.
          </p>
          <SignNumberLine points={["0", "2"]} signs={["−", "+", "−"]} note="sign of dy/dx" />
        </SolutionStep>
        <SolutionStep label="Answer">
          <FormulaBlock latex={String.raw`\boxed{0<x<2\quad\Rightarrow\quad\text{(D) }(0,2)}`} important />
        </SolutionStep>
      </WorkedExample>

      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3 sm:px-5">
          <span className="t-micro">Question 5 — Work · Multiple Choice</span>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <p>
            On which interval is <Formula>{String.raw`f(x)=x^{100}+\sin x-1`}</Formula> decreasing?
            (A) <Formula>{String.raw`(0,1)`}</Formula> (B){" "}
            <Formula>{String.raw`\left(\frac\pi2,\pi\right)`}</Formula> (C){" "}
            <Formula>{String.raw`\left(0,\frac\pi2\right)`}</Formula> (D) None of these.
          </p>
          <Expandable
            title="Show solution"
            variant="example"
            subjectColor="var(--subject-mathematics)"
          >
            <SolutionStep label="Derivative">
              <FormulaBlock latex={String.raw`f'(x)=100x^{99}+\cos x`} />
            </SolutionStep>
            <SolutionStep label="Test each option">
              <ul className="list-disc space-y-1.5 pl-5 text-sm">
                <li>
                  <Formula>{String.raw`(0,1)`}</Formula>:{" "}
                  <Formula>{String.raw`x^{99}>0`}</Formula> and{" "}
                  <Formula>{String.raw`\cos x>0`}</Formula>, so{" "}
                  <Formula>{String.raw`f'(x)>0`}</Formula>.
                </li>
                <li>
                  <Formula>{String.raw`\left(\frac\pi2,\pi\right)`}</Formula>:{" "}
                  <Formula>{String.raw`\cos x<0`}</Formula>, but{" "}
                  <Formula>{String.raw`100x^{99}>100\left(\frac\pi2\right)^{99}>1`}</Formula>, so{" "}
                  <Formula>{String.raw`f'(x)>0`}</Formula>.
                </li>
                <li>
                  <Formula>{String.raw`\left(0,\frac\pi2\right)`}</Formula>: both terms are
                  positive, so <Formula>{String.raw`f'(x)>0`}</Formula>.
                </li>
              </ul>
            </SolutionStep>
            <SolutionStep label="Answer">
              <FormulaBlock latex={String.raw`\boxed{\text{The function is never decreasing: (D) None of these}}`} important />
            </SolutionStep>
          </Expandable>
        </div>
      </div>

      <h2 id="h-6-3b">Solving Inequalities</h2>
      <p>
        An inequality compares expressions using <Formula>{String.raw`<`}</Formula>,{" "}
        <Formula>{String.raw`>`}</Formula>, <Formula>{String.raw`\leq`}</Formula> or{" "}
        <Formula>{String.raw`\geq`}</Formula>. The solution is a set of intervals, not a single
        value.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro">Linear inequality</span>
          <p className="mt-2 text-sm">
            The variable appears only to the first power.
          </p>
          <div className="mt-2">
            <Formula>{String.raw`ax+b>0`}</Formula>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro">Quadratic inequality</span>
          <p className="mt-2 text-sm">
            The variable appears up to the second power.
          </p>
          <div className="mt-2">
            <Formula>{String.raw`ax^2+bx+c>0`}</Formula>
          </div>
        </div>
      </div>

      <h3 id="h-6-3b-7">7. Linear Inequalities</h3>
      <p>
        Solve a linear inequality like a linear equation, with one extra rule: reverse the sign
        when you multiply or divide by a negative number.
      </p>
      <Callout type="warning" title="The reversal rule" subjectColor="var(--subject-mathematics)">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            Multiplying or dividing by a <strong>positive</strong> number keeps the inequality sign.
          </li>
          <li>
            Multiplying or dividing by a <strong>negative</strong> number reverses the inequality
            sign.
          </li>
          <li>
            An open endpoint uses <Formula>{String.raw`(`}</Formula> or{" "}
            <Formula>{String.raw`)`}</Formula>; a closed endpoint uses{" "}
            <Formula>{String.raw`[`}</Formula> or <Formula>{String.raw`]`}</Formula>.
          </li>
        </ul>
      </Callout>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro">Example 1</span>
          <FormulaBlock latex={String.raw`x+3>-2`} />
          <div className="space-y-1 [&>div]:my-0">
            <FormulaBlock latex={String.raw`x>-2-3`} />
            <FormulaBlock latex={String.raw`x>-5`} />
            <FormulaBlock latex={String.raw`x\in(-5,\infty)`} important />
          </div>
          <InequalityNumberLine value="−5" direction="right" label="x > −5" />
          <Expandable title="Show answer" subjectColor="var(--subject-mathematics)">
            <FormulaBlock latex={String.raw`\boxed{(-5,\infty)}`} important />
          </Expandable>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro">Example 2</span>
          <FormulaBlock latex={String.raw`3x-9<3`} />
          <div className="space-y-1 [&>div]:my-0">
            <FormulaBlock latex={String.raw`3x<12`} />
            <FormulaBlock latex={String.raw`x<4`} />
            <FormulaBlock latex={String.raw`x\in(-\infty,4)`} important />
          </div>
          <InequalityNumberLine value="4" direction="left" label="x < 4" />
          <Expandable title="Show answer" subjectColor="var(--subject-mathematics)">
            <FormulaBlock latex={String.raw`\boxed{(-\infty,4)}`} important />
          </Expandable>
        </div>
      </div>

      <h3 id="h-6-3b-8">8. Quadratic Inequalities and the Wavy Curve</h3>
      <p>
        Factorise the quadratic, mark its roots on a number line, and read the sign in each region.
        The method extends to any product of linear factors.
      </p>
      <WavyCurveProcess />
      <ol className="mt-4 list-decimal space-y-1.5 pl-5">
        <li>Factorise the expression completely.</li>
        <li>Find the critical points where a factor is zero.</li>
        <li>Arrange the critical points in increasing order on a number line.</li>
        <li>Determine the sign of the expression in each region.</li>
        <li>Select the regions that satisfy the inequality.</li>
      </ol>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro">Example 1 — greater than zero</span>
          <FormulaBlock latex={String.raw`x^2+3x+2>0`} />
          <Expandable
            title="Show solution"
            variant="example"
            subjectColor="var(--subject-mathematics)"
          >
            <FormulaBlock latex={String.raw`(x+1)(x+2)>0`} />
            <FormulaBlock latex={String.raw`x=-2,\ -1`} />
            <SignNumberLine points={["−2", "−1"]} signs={["+", "−", "+"]} note="sign of (x+1)(x+2)" />
            <FormulaBlock latex={String.raw`\boxed{(-\infty,-2)\cup(-1,\infty)}`} important />
          </Expandable>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro">Example 2 — less than zero</span>
          <FormulaBlock latex={String.raw`x^2-4x+3<0`} />
          <Expandable
            title="Show solution"
            variant="example"
            subjectColor="var(--subject-mathematics)"
          >
            <FormulaBlock latex={String.raw`(x-1)(x-3)<0`} />
            <FormulaBlock latex={String.raw`x=1,\ 3`} />
            <SignNumberLine points={["1", "3"]} signs={["+", "−", "+"]} note="sign of (x−1)(x−3)" />
            <FormulaBlock latex={String.raw`\boxed{(1,3)}`} important />
          </Expandable>
        </div>
      </div>
      <Callout type="note" title="Why the signs alternate">
        <p>
          Each simple linear factor changes sign at its root. Crossing a root therefore flips the
          sign of the whole product, giving the wavy pattern.
        </p>
      </Callout>

      <h3 id="h-6-3b-9">9. Quick Practice</h3>
      <ExerciseQa
        questions={[
          <>
            Find the intervals in which <Formula>{String.raw`f(x)=x^2-4x+6`}</Formula> is
            increasing and decreasing.
          </>,
        ]}
        answers={[
          <>
            <Formula>{String.raw`f'(x)=2(x-2)`}</Formula>; decreasing on{" "}
            <Formula>{String.raw`(-\infty,2)`}</Formula>, increasing on{" "}
            <Formula>{String.raw`(2,\infty)`}</Formula>.
          </>,
        ]}
      />

      <h3 id="h-6-3b-10">10. Corrections Made to the Source Note</h3>
      <p>
        The original question order and working are preserved. These six points were corrected or
        clarified.
      </p>
      <TableCard
        headers={["#", "Point in the working", "Correction"]}
        rows={[
          {
            cells: [
              "1",
              <Formula key="c1">{String.raw`f'(x)\geq0`}</Formula>,
              <>Means non-decreasing; it is not automatically strictly increasing.</>,
            ],
          },
          {
            cells: [
              "2",
              <Formula key="c2">{String.raw`f'(x)=3(x-1)^2`}</Formula>,
              <>A zero at one isolated point does not break strict increase.</>,
            ],
          },
          {
            cells: [
              "3",
              <Formula key="c3">{String.raw`(x+1)^3(x-3)^3`}</Formula>,
              <>
                Increasing on <Formula>{String.raw`(1,\infty)`}</Formula>, decreasing on{" "}
                <Formula>{String.raw`(-\infty,1)`}</Formula>; no sign change at{" "}
                <Formula>{String.raw`-1`}</Formula> or <Formula>{String.raw`3`}</Formula>.
              </>,
            ],
          },
          {
            cells: [
              "4",
              <Formula key="c4">{String.raw`-9-2x>0`}</Formula>,
              <>
                Gives <Formula>{String.raw`x<-\frac92`}</Formula>, not{" "}
                <Formula>{String.raw`x>-\frac92`}</Formula>.
              </>,
            ],
          },
          {
            cells: [
              "5",
              <Formula key="c5">{String.raw`\sin 3x`}</Formula>,
              <>
                The decreasing interval includes the endpoint{" "}
                <Formula>{String.raw`\frac\pi2`}</Formula>.
              </>,
            ],
          },
          {
            cells: [
              "6",
              <Formula key="c6">{String.raw`f'(x)=-\tan x`}</Formula>,
              <>Valid wherever <Formula>{String.raw`\cos x\neq0`}</Formula>.</>,
            ],
          },
        ]}
      />

      <CollapsibleRevision
        className="my-6 rounded-xl border border-border bg-card"
        contentClassName="p-4"
        label="Quick Revision Sheets"
        header={
          <div className="border-b border-border bg-muted/25 px-4 py-3 pr-12">
            <h3 id="h-6-3b-11" className="m-0! border-0! p-0! text-base! font-semibold! tracking-tight!">
              11. Quick Revision Sheets
            </h3>
          </div>
        }
      >
      <p>Open one pocket at a time for a compact revision table.</p>
      <PocketGrid
        title="Revision sheets"
        columns={2}
        items={[
          {
            id: "h-6-3b-11-conditions",
            icon: "📈",
            label: "1 · Derivative conditions",
            note: "Strict, non-strict and neither",
            content: (
              <TableCard
                headers={["Derivative", "Behaviour", "Meaning"]}
                rows={[
                  {
                    cells: [
                      <Formula key="r1a">{String.raw`f'(x)>0`}</Formula>,
                      "Strictly increasing",
                      "Rises throughout the interval.",
                    ],
                  },
                  {
                    cells: [
                      <Formula key="r1b">{String.raw`f'(x)\geq0`}</Formula>,
                      "Non-decreasing",
                      "Never falls; flat parts are allowed.",
                    ],
                  },
                  {
                    cells: [
                      <Formula key="r1c">{String.raw`f'(x)<0`}</Formula>,
                      "Strictly decreasing",
                      "Falls throughout the interval.",
                    ],
                  },
                  {
                    cells: [
                      <Formula key="r1d">{String.raw`f'(x)\leq0`}</Formula>,
                      "Non-increasing",
                      "Never rises; flat parts are allowed.",
                    ],
                  },
                ]}
              />
            ),
          },
          {
            id: "h-6-3b-11-method",
            icon: "🧭",
            label: "2 · Monotonicity method",
            note: "Four moves from f to interval",
            content: (
              <TableCard
                headers={["Step", "Action"]}
                rows={[
                  { cells: ["1", <>Differentiate to get <Formula>{String.raw`f'(x)`}</Formula>.</>] },
                  { cells: ["2", <>Solve <Formula>{String.raw`f'(x)=0`}</Formula>.</>] },
                  { cells: ["3", "Split the domain at the critical points."] },
                  { cells: ["4", "Test the sign in each interval and state the answer."] },
                ]}
              />
            ),
          },
          {
            id: "h-6-3b-11-derivatives",
            icon: "∂",
            label: "3 · Common derivatives",
            note: "Functions used in this section",
            content: (
              <TableCard
                headers={["f(x)", "f'(x)"]}
                rows={[
                  {
                    cells: [
                      <Formula key="r3a">{String.raw`e^{2x}`}</Formula>,
                      <Formula key="r3b">{String.raw`2e^{2x}`}</Formula>,
                    ],
                  },
                  {
                    cells: [
                      <Formula key="r3c">{String.raw`\log x`}</Formula>,
                      <Formula key="r3d">{String.raw`\frac1x`}</Formula>,
                    ],
                  },
                  {
                    cells: [
                      <Formula key="r3e">{String.raw`\sin x`}</Formula>,
                      <Formula key="r3f">{String.raw`\cos x`}</Formula>,
                    ],
                  },
                  {
                    cells: [
                      <Formula key="r3g">{String.raw`\cos x`}</Formula>,
                      <Formula key="r3h">{String.raw`-\sin x`}</Formula>,
                    ],
                  },
                  {
                    cells: [
                      <Formula key="r3i">{String.raw`\log|\cos x|`}</Formula>,
                      <Formula key="r3j">{String.raw`-\tan x`}</Formula>,
                    ],
                  },
                ]}
              />
            ),
          },
          {
            id: "h-6-3b-11-inequalities",
            icon: "⚖️",
            label: "4 · Inequality rules",
            note: "Endpoints and reversal",
            content: (
              <TableCard
                headers={["Situation", "Rule"]}
                rows={[
                  { cells: ["Strict < or >", "Open endpoint: use ( or )."] },
                  { cells: ["Non-strict ≤ or ≥", "Closed endpoint: use [ or ]."] },
                  { cells: ["Multiply by positive", "Keep the inequality sign."] },
                  { cells: ["Multiply by negative", "Reverse the inequality sign."] },
                ]}
              />
            ),
          },
          {
            id: "h-6-3b-11-wavy",
            icon: "〰️",
            label: "5 · Wavy-curve method",
            note: "From factors to intervals",
            content: (
              <TableCard
                headers={["Stage", "What to do"]}
                rows={[
                  { cells: ["Factorise", "Write the expression as a product of factors."] },
                  { cells: ["Critical points", "Set each factor equal to zero."] },
                  { cells: ["Arrange on line", "Place the roots in increasing order."] },
                  { cells: ["Determine signs", "Mark + and − in each region."] },
                  { cells: ["Select intervals", "Choose the regions that match the inequality."] },
                ]}
              />
            ),
          },
        ]}
      />
      </CollapsibleRevision>

      <h2 id="h-6-4">6.4 Maxima and Minima of Functions</h2>
      <p>
        This chapter is organized into four connected units. Each unit builds on the previous one.
      </p>
      <ol className="list-decimal space-y-1.5 pl-5">
        <li>
          <strong>Maximum and Minimum Values</strong> — definitions, graphs, domain and range
          considerations.
        </li>
        <li>
          <strong>Critical Points</strong> — stationary points and non-differentiable points.
        </li>
        <li>
          <strong>First Derivative Test</strong> — identifying local maxima and minima through sign
          changes.
        </li>
        <li>
          <strong>Second Derivative Test</strong> — classifying critical points using the second
          derivative.
        </li>
      </ol>
      <Callout type="note" title="About the working">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>The original question sequence is retained.</li>
          <li>
            Mathematical corrections are incorporated where the supplied working contains clear
            errors.
          </li>
          <li>
            Missing source working is identified rather than silently treated as original content.
          </li>
        </ul>
      </Callout>

      <h3 id="h-6-4-1">Unit 1 — Maximum and Minimum Values</h3>
      <h4 id="h-6-4-1-1">1. Definitions and Graphical Concepts</h4>
      <p>
        A function may attain its highest or lowest value at particular points in its domain.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro mb-3 block">Point of maximum</span>
          <MaximumPointPanel />
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-md border border-border p-3">
              <span className="t-micro block">Point</span>
              <Formula>{String.raw`x=c_1`}</Formula>
            </div>
            <div className="rounded-md border border-border p-3">
              <span className="t-micro block">Value</span>
              <Formula>{String.raw`f(c_1)`}</Formula>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            At the maximum point, the function reaches a peak relative to nearby values.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro mb-3 block">Point of minimum</span>
          <MinimumPointPanel />
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-md border border-border p-3">
              <span className="t-micro block">Point</span>
              <Formula>{String.raw`x=c_2`}</Formula>
            </div>
            <div className="rounded-md border border-border p-3">
              <span className="t-micro block">Value</span>
              <Formula>{String.raw`f(c_2)`}</Formula>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            At the minimum point, the function reaches a valley relative to nearby values.
          </p>
        </div>
      </div>
      <KeyPoint title="Point versus value">
        <p>
          <strong>c</strong> is the <strong>point</strong> — an input value on the x-axis.
        </p>
        <p>
          <strong>f(c)</strong> is the <strong>value</strong> — the corresponding output on the
          y-axis.
        </p>
      </KeyPoint>

      <h4 id="h-6-4-1-2">2. Solved Problems — Maximum and Minimum Values</h4>

      <SolvedProblem
        title="Question 1 — Square Function"
        question={
          <>
            <p>
              Find the maximum and minimum values, if any, of{" "}
              <Formula>{String.raw`f(x)=x^2,\qquad x\in\mathbb{R}`}</Formula>.
            </p>
            <SquareFunctionGraph />
          </>
        }
      >
        <SolutionStep label="Non-negative square">
          <FormulaBlock latex={String.raw`x^2\geq0`} />
          <p className="text-sm text-muted-foreground">
            Since the square of every real number is non-negative, the function cannot fall below
            zero.
          </p>
          <FormulaBlock latex={String.raw`\boxed{\text{Minimum value}=0}`} important />
          <p className="text-sm">This occurs at <Formula>{String.raw`x=0`}</Formula>.</p>
        </SolutionStep>
        <SolutionStep label="No upper bound">
          <p className="text-sm text-muted-foreground">
            As <Formula>x</Formula> increases or decreases without bound,{" "}
            <Formula>{String.raw`x^2`}</Formula> increases without bound.
          </p>
          <FormulaBlock latex={String.raw`\boxed{\text{No maximum}}`} important />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 2 — Modulus Function"
        question={
          <>
            <p>
              Find the maximum and minimum values, if any, of{" "}
              <Formula>{String.raw`f(x)=|x|,\qquad x\in\mathbb{R}`}</Formula>.
            </p>
            <ModulusGraph />
          </>
        }
      >
        <SolutionStep label="Reference property">
          <FormulaBlock latex={String.raw`|x|\geq0`} />
        </SolutionStep>
        <SolutionStep label="Minimum">
          <FormulaBlock latex={String.raw`\boxed{\text{Minimum value}=0}`} important />
          <p className="text-sm">This occurs at <Formula>{String.raw`x=0`}</Formula>.</p>
        </SolutionStep>
        <SolutionStep label="No maximum">
          <p className="text-sm text-muted-foreground">
            The function increases without bound as <Formula>{String.raw`|x|`}</Formula> increases.
          </p>
          <FormulaBlock latex={String.raw`\boxed{\text{No maximum}}`} important />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 3 — Open and Closed Intervals"
        question={
          <>
            <p>
              Find the maximum and minimum values, if any, of{" "}
              <Formula>{String.raw`f(x)=x,\qquad x\in(0,1)`}</Formula>.
            </p>
            <OpenClosedIntervalsDiagram />
          </>
        }
      >
        <SolutionStep label="Open interval">
          <p className="text-sm text-muted-foreground">
            The function is increasing throughout <Formula>{String.raw`(0,1)`}</Formula>, but
            neither endpoint belongs to the domain.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              The function approaches <Formula>0</Formula> but never attains it.
            </li>
            <li>
              The function approaches <Formula>1</Formula> but never attains it.
            </li>
          </ul>
          <FormulaBlock latex={String.raw`\boxed{\text{No minimum and no maximum}}`} important />
        </SolutionStep>
        <SolutionStep label="Closed interval comparison">
          <p className="text-sm text-muted-foreground">
            If the domain is instead <Formula>{String.raw`x\in[0,1]`}</Formula>, both endpoints are
            included.
          </p>
          <FormulaBlock latex={String.raw`\boxed{\text{Minimum}=0}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Maximum}=1}`} important />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 4 — Work · Linear Function on an Open Interval"
        question={
          <>
            <p>
              Find the local maxima and local minima, if any, of{" "}
              <Formula>{String.raw`h(x)=x+1,\qquad x\in(-1,1)`}</Formula>.
            </p>
            <OpenIntervalLineGraph />
          </>
        }
      >
        <SolutionStep label="Behaviour on the domain">
          <p className="text-sm text-muted-foreground">
            The function is strictly increasing throughout its domain. Neither endpoint belongs to
            the interval, and the function has no interior turning point.
          </p>
          <FormulaBlock latex={String.raw`\boxed{\text{No maximum and no minimum}}`} important />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 5 — Modulus Function Shifted Downward"
        question={
          <>
            <p>
              Find the maximum and minimum values, if any, of{" "}
              <Formula>{String.raw`f(x)=|x+2|-1`}</Formula>.
            </p>
            <ShiftedModulusGraph />
          </>
        }
      >
        <SolutionStep label="Reference property">
          <FormulaBlock latex={String.raw`|x|\geq0`} />
        </SolutionStep>
        <SolutionStep label="Subtract 1">
          <FormulaBlock latex={String.raw`|x+2|\geq0`} />
          <FormulaBlock latex={String.raw`|x+2|-1\geq-1`} />
          <FormulaBlock latex={String.raw`f(x)\geq-1`} />
        </SolutionStep>
        <SolutionStep label="Equality and conclusion">
          <FormulaBlock latex={String.raw`x+2=0\Rightarrow x=-2`} />
          <FormulaBlock latex={String.raw`\boxed{\text{Minimum value}=-1}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{No maximum}}`} important />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 6 — Negative Modulus Function"
        question={
          <>
            <p>
              Find the maximum and minimum values, if any, of{" "}
              <Formula>{String.raw`g(x)=-|x+1|+3`}</Formula>.
            </p>
            <InvertedModulusGraph />
          </>
        }
      >
        <SolutionStep label="Reverse the inequality">
          <FormulaBlock latex={String.raw`|x+1|\geq0`} />
          <FormulaBlock latex={String.raw`-|x+1|\leq0`} />
          <p className="text-sm text-muted-foreground">
            Multiplication by <Formula>{String.raw`-1`}</Formula> reverses the inequality.
          </p>
        </SolutionStep>
        <SolutionStep label="Add 3">
          <FormulaBlock latex={String.raw`-|x+1|+3\leq3`} />
          <FormulaBlock latex={String.raw`g(x)\leq3`} />
          <FormulaBlock latex={String.raw`x+1=0\Rightarrow x=-1`} />
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <FormulaBlock latex={String.raw`\boxed{\text{Maximum value}=3}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{No minimum}}`} important />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 7 — Work · Local Minimum of a Modulus Function"
        question={
          <>
            <p>
              Find the local minimum value of{" "}
              <Formula>{String.raw`f(x)=3+|x|,\qquad x\in\mathbb{R}`}</Formula>.
            </p>
            <RaisedModulusGraph />
          </>
        }
      >
        <SolutionStep label="Bound and equality">
          <FormulaBlock latex={String.raw`|x|\geq0`} />
          <FormulaBlock latex={String.raw`3+|x|\geq3`} />
          <p className="text-sm text-muted-foreground">Equality occurs at{" "}
          <Formula>{String.raw`x=0`}</Formula>.</p>
          <FormulaBlock latex={String.raw`f(0)=3+|0|=3`} />
        </SolutionStep>
        <SolutionStep label="Point and value">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              <Formula>{String.raw`x=0`}</Formula> is the point of local minimum.
            </li>
            <li>
              <Formula>{String.raw`f(0)=3`}</Formula> is the local minimum value.
            </li>
          </ul>
          <FormulaBlock latex={String.raw`\boxed{\text{Local minimum value}=3}`} important />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 8 — Shifted Sine Function"
        question={
          <>
            <p>
              Find the maximum and minimum values, if any, of{" "}
              <Formula>{String.raw`h(x)=\sin(2x)+5`}</Formula>.
            </p>
            <SineBandGraph low={4} high={6} cycles={1.5} title="y = sin 2x + 5" />
          </>
        }
      >
        <SolutionStep label="Reference property">
          <FormulaBlock latex={String.raw`-1\leq\sin x\leq1`} />
        </SolutionStep>
        <SolutionStep label="Shift the bounds">
          <FormulaBlock latex={String.raw`-1\leq\sin(2x)\leq1`} />
          <FormulaBlock latex={String.raw`-1+5\leq\sin(2x)+5\leq1+5`} />
          <FormulaBlock latex={String.raw`4\leq h(x)\leq6`} />
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <FormulaBlock latex={String.raw`\boxed{\text{Minimum value}=4}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Maximum value}=6}`} important />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 9 — Modulus of a Shifted Sine Function"
        question={
          <>
            <p>
              Find the maximum and minimum values, if any, of{" "}
              <Formula>{String.raw`f(x)=|\sin4x+3|`}</Formula>.
            </p>
            <SineBandGraph low={2} high={4} cycles={2} title="y = |sin 4x + 3|" />
          </>
        }
      >
        <SolutionStep label="Shift the sine bounds">
          <FormulaBlock latex={String.raw`-1\leq\sin(4x)\leq1`} />
          <FormulaBlock latex={String.raw`2\leq\sin(4x)+3\leq4`} />
        </SolutionStep>
        <SolutionStep label="The modulus changes nothing">
          <div className="[&>div]:my-0">
            <KeyPoint title="Why the absolute value is redundant">
              <FormulaBlock
                latex={String.raw`\sin 4x+3\geq2>0\;\Rightarrow\;|\sin4x+3|=\sin4x+3`}
              />
            </KeyPoint>
          </div>
          <FormulaBlock latex={String.raw`2\leq f(x)\leq4`} />
        </SolutionStep>
        <SolutionStep label="Conclusion">
          <FormulaBlock latex={String.raw`\boxed{\text{Minimum value}=2}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Maximum value}=4}`} important />
        </SolutionStep>
      </SolvedProblem>

      <h4 id="h-6-4-1-3">3. Important Theorems</h4>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro block">3.1 Monotonic function and endpoints</span>
          <p className="mt-2 text-sm">
            A monotonic function on a closed interval attains its maximum and minimum values at the
            endpoints.
          </p>
          <MonotonicEndpointGraphs />
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro block">3.2 Extreme Value Theorem</span>
          <p className="mt-2 text-sm">
            Every continuous function on a closed and bounded interval has both a maximum and a
            minimum value.
          </p>
          <div className="mt-3 [&>div]:my-0">
            <KeyPoint title="Extreme Value Theorem">
              <Highlight>continuous + closed and bounded interval = extrema exist</Highlight>
              <p className="mt-2 text-sm">
                The theorem guarantees existence. It does not give the points where the extrema
                occur.
              </p>
            </KeyPoint>
          </div>
          <ExtremeValueTheoremGraph />
        </div>
      </div>

      <h4 id="h-6-4-1-4">4. Local Maxima and Local Minima</h4>
      <p>
        A function can have several local maximum and minimum points. Each one is judged only
        against nearby values.
      </p>
      <LocalExtremaGraph />
      <TableCard
        headers={["Feature", "Local maxima", "Local minima"]}
        rows={[
          {
            cells: [
              "Points",
              <Formula key="lm-p">{String.raw`c_1,\ c_2`}</Formula>,
              <Formula key="mn-p">{String.raw`c_3`}</Formula>,
            ],
          },
          {
            cells: [
              "Values",
              <Formula key="lm-v">{String.raw`f(c_1),\ f(c_2)`}</Formula>,
              <Formula key="mn-v">{String.raw`f(c_3)`}</Formula>,
            ],
          },
          {
            cells: [
              "Meaning",
              "Highest among nearby values",
              "Lowest among nearby values",
            ],
          },
        ]}
      />

      <p className="mt-6 font-semibold">Critical points</p>
      <p>
        A critical point is a point in the domain where the derivative is zero or where the
        derivative does not exist.
      </p>
      <FormulaBlock
        latex={String.raw`\boxed{f'(c)=0\quad\text{or}\quad f'(c)\text{ does not exist}}`}
        important
      />
      <SmoothSharpMinima />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-border p-3">
          <span className="t-micro block">Smooth minimum</span>
          <FormulaBlock latex={String.raw`f'(c)=0`} />
          <p className="text-sm text-muted-foreground">A horizontal tangent exists at the bottom.</p>
        </div>
        <div className="rounded-md border border-border p-3">
          <span className="t-micro block">Sharp minimum</span>
          <Formula>{String.raw`f(x)=|x|`}</Formula>
          <p className="text-sm text-muted-foreground">
            At <Formula>{String.raw`x=0`}</Formula>, the graph has a corner and{" "}
            <Formula>{String.raw`f'(0)`}</Formula> does not exist. This is still a critical point and
            a local minimum.
          </p>
        </div>
      </div>

      <h4 id="h-6-4-1-5">5. Solved Problem — Functions Without Maxima or Minima</h4>
      <p>Prove that the following functions do not have maxima or minima:</p>
      <ol className="list-decimal space-y-1 pl-5">
        <li><Formula>{String.raw`f(x)=e^x`}</Formula></li>
        <li><Formula>{String.raw`g(x)=\log x`}</Formula></li>
        <li><Formula>{String.raw`h(x)=x^3+x^2+x+1`}</Formula></li>
      </ol>

      <SolvedProblem
        title="Question 10(i) — Exponential Function"
        question={
          <>
            <FormulaBlock latex={String.raw`f(x)=e^x`} />
            <ExponentialCurveDiagram />
          </>
        }
      >
        <SolutionStep label="Stationary point test">
          <FormulaBlock latex={String.raw`f'(x)=e^x`} />
          <FormulaBlock latex={String.raw`f'(x)=0\Rightarrow e^x=0`} />
          <p className="text-sm text-muted-foreground">
            But <Formula>{String.raw`e^x`}</Formula> is always positive, so no stationary point
            exists.
          </p>
        </SolutionStep>
        <SolutionStep label="Monotonicity">
          <FormulaBlock latex={String.raw`f'(x)>0\quad\text{on }\mathbb{R}`} />
          <p className="text-sm text-muted-foreground">
            The function is strictly increasing throughout <Formula>{String.raw`\mathbb{R}`}</Formula>.
          </p>
          <FormulaBlock latex={String.raw`\boxed{\text{No maximum or minimum on }\mathbb{R}}`} important />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 10(ii) — Logarithmic Function"
        question={
          <>
            <FormulaBlock latex={String.raw`g(x)=\log x`} />
            <LogCurveDiagram />
          </>
        }
      >
        <SolutionStep label="Domain and derivative">
          <FormulaBlock latex={String.raw`x>0`} />
          <FormulaBlock latex={String.raw`g'(x)=\frac1x`} />
          <FormulaBlock latex={String.raw`\frac1x=0`} />
          <p className="text-sm text-muted-foreground">This is impossible.</p>
        </SolutionStep>
        <SolutionStep label="Monotonicity">
          <FormulaBlock latex={String.raw`\frac1x>0\qquad(x>0)`} />
          <p className="text-sm text-muted-foreground">
            The function is strictly increasing throughout its domain.
          </p>
          <FormulaBlock latex={String.raw`\boxed{\text{No maximum or minimum on }(0,\infty)}`} important />
        </SolutionStep>
      </SolvedProblem>

      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3 sm:px-5">
          <span className="t-micro">Question 10(iii) — Source working incomplete</span>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <FormulaBlock latex={String.raw`h(x)=x^3+x^2+x+1`} />
          <Callout type="note" title="Working not supplied">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>The supplied material contains this question but does not include its working.</li>
              <li>No solution has been fabricated.</li>
              <li>
                A solution can be added once the remaining source working is available.
              </li>
            </ul>
          </Callout>
        </div>
      </div>

      <h3 id="h-6-4-2">Unit 2 — First Derivative Test</h3>
      <h4 id="h-6-4-2-1">6. Identifying Local Maxima and Minima</h4>
      <p>
        The First Derivative Test determines the nature of a critical point by observing how the
        sign of <Formula>{String.raw`f'(x)`}</Formula> changes around it.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro block">6.1 Local maximum</span>
          <p className="mt-2 text-sm">
            Sign changes from positive to negative through{" "}
            <Formula>{String.raw`x=c`}</Formula>.
          </p>
          <PositiveToNegativeSignLine />
          <p className="text-sm">
            <Formula>{String.raw`c`}</Formula> is the point;{" "}
            <Formula>{String.raw`f(c)`}</Formula> is the local maximum value.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro block">6.2 Local minimum</span>
          <p className="mt-2 text-sm">
            Sign changes from negative to positive through{" "}
            <Formula>{String.raw`x=c`}</Formula>.
          </p>
          <NegativeToPositiveSignLine />
          <p className="text-sm">
            <Formula>{String.raw`c`}</Formula> is the point;{" "}
            <Formula>{String.raw`f(c)`}</Formula> is the local minimum value.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro block">No sign change · positive</span>
          <PositiveToPositiveSignLine />
          <p className="text-sm">Neither a maximum nor a minimum.</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro block">No sign change · negative</span>
          <NegativeToNegativeSignLine />
          <p className="text-sm">Neither a maximum nor a minimum.</p>
        </div>
      </div>
      <TableCard
        headers={["Sign change", "Conclusion"]}
        rows={[
          {
            cells: [
              <Formula key="fd1">{String.raw`+\longrightarrow-`}</Formula>,
              "Local maximum",
            ],
          },
          {
            cells: [
              <Formula key="fd2">{String.raw`-\longrightarrow+`}</Formula>,
              "Local minimum",
            ],
          },
          {
            cells: [
              <Formula key="fd3">{String.raw`+\longrightarrow+`}</Formula>,
              "Neither",
            ],
          },
          {
            cells: [
              <Formula key="fd4">{String.raw`-\longrightarrow-`}</Formula>,
              "Neither",
            ],
          },
        ]}
      />

      <h4 id="h-6-4-2-2">7. Solved Problems — First Derivative Test</h4>

      <SolvedProblem
        title="Question 1 — Cubic Function"
        question={
          <>
            <p>
              Find all points of local maxima and local minima of{" "}
              <Formula>{String.raw`f(x)=x^3-3x+3`}</Formula>.
            </p>
            <CubicSignNumberLine />
          </>
        }
      >
        <SolutionStep label="Step 1 — Differentiate">
          <FormulaBlock latex={String.raw`f'(x)=3x^2-3`} />
        </SolutionStep>
        <SolutionStep label="Step 2 — Critical points">
          <FormulaBlock latex={String.raw`3x^2-3=0`} />
          <FormulaBlock latex={String.raw`x^2=1`} />
          <FormulaBlock latex={String.raw`\boxed{x=-1,\ 1}`} important />
        </SolutionStep>
        <SolutionStep label="Step 3 — Sign evaluation">
          <FormulaBlock latex={String.raw`f'(-2)=3(4)-3=9>0`} />
          <FormulaBlock latex={String.raw`f'(0)=-3<0`} />
          <FormulaBlock latex={String.raw`f'(2)=3(4)-3=9>0`} />
        </SolutionStep>
        <SolutionStep label="Step 4 — Apply the First Derivative Test">
          <ul className="list-disc space-y-1.5 pl-5 text-sm">
            <li>
              At <Formula>{String.raw`x=-1`}</Formula>:{" "}
              <Formula>{String.raw`+\longrightarrow-`}</Formula>, so a local maximum.
            </li>
            <li>
              At <Formula>{String.raw`x=1`}</Formula>:{" "}
              <Formula>{String.raw`-\longrightarrow+`}</Formula>, so a local minimum.
            </li>
          </ul>
          <FormulaBlock latex={String.raw`\boxed{\text{Local maximum point: }x=-1}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Local minimum point: }x=1}`} important />
          <FormulaBlock latex={String.raw`f(-1)=5,\qquad f(1)=1`} />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 2 — Given Graph of the Derivative"
        question={
          <>
            <p>
              Observe the graph of <Formula>{String.raw`f'(x)`}</Formula> and answer:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              <li>Write the intervals in which <Formula>f(x)</Formula> is increasing and decreasing.</li>
              <li>Find the local maximum and local minimum points.</li>
            </ul>
            <DerivativeGraphRoots />
            <div className="rounded-md border border-border bg-muted/40 p-3 text-sm">
              <span className="t-micro block">Graph information from the source</span>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <Formula>{String.raw`f'(x)=0`}</Formula> at <Formula>{String.raw`x=1`}</Formula> and{" "}
                  <Formula>{String.raw`x=5`}</Formula>.
                </li>
                <li>
                  <Formula>{String.raw`f'(x)>0`}</Formula> for <Formula>{String.raw`x<1`}</Formula>.
                </li>
                <li>
                  <Formula>{String.raw`f'(x)<0`}</Formula> for <Formula>{String.raw`1<x<5`}</Formula>.
                </li>
                <li>
                  <Formula>{String.raw`f'(x)>0`}</Formula> for <Formula>{String.raw`x>5`}</Formula>.
                </li>
              </ul>
            </div>
          </>
        }
      >
        <SolutionStep label="(a) Increasing and decreasing intervals">
          <p className="text-sm text-muted-foreground">
            The function is increasing where <Formula>{String.raw`f'(x)>0`}</Formula>.
          </p>
          <FormulaBlock latex={String.raw`\boxed{(-\infty,1)\cup(5,\infty)}`} important />
          <p className="text-sm text-muted-foreground">
            It is decreasing where <Formula>{String.raw`f'(x)<0`}</Formula>.
          </p>
          <FormulaBlock latex={String.raw`\boxed{(1,5)}`} important />
        </SolutionStep>
        <SolutionStep label="(b) Local extrema">
          <ul className="list-disc space-y-1.5 pl-5 text-sm">
            <li>
              At <Formula>{String.raw`x=1`}</Formula>:{" "}
              <Formula>{String.raw`+\longrightarrow-`}</Formula>, so a local maximum.
            </li>
            <li>
              At <Formula>{String.raw`x=5`}</Formula>:{" "}
              <Formula>{String.raw`-\longrightarrow+`}</Formula>, so a local minimum.
            </li>
          </ul>
          <FormulaBlock latex={String.raw`\boxed{\text{Local maximum point: }x=1}`} important />
          <FormulaBlock latex={String.raw`\boxed{\text{Local minimum point: }x=5}`} important />
        </SolutionStep>
        <SolutionStep label="What the graph cannot show">
          <Callout type="note" title="Derivative sign only">
            <p>
              The actual values <Formula>{String.raw`f(1)`}</Formula> and{" "}
              <Formula>{String.raw`f(5)`}</Formula> cannot be determined from the derivative sign
              graph alone.
            </p>
          </Callout>
        </SolutionStep>
      </SolvedProblem>

      <h3 id="h-6-4-3">Unit 3 — Second Derivative Test</h3>
      <h4 id="h-6-4-3-1">8. The Second Derivative Test</h4>
      <p>
        This test classifies a stationary point using the sign of the second derivative at that
        point. Let <Formula>f</Formula> be defined on an interval <Formula>I</Formula>, let{" "}
        <Formula>{String.raw`c\in I`}</Formula>, and suppose <Formula>f</Formula> is twice
        differentiable at <Formula>c</Formula>.
      </p>
      <TableCard
        headers={["Condition", "Shape", "Conclusion"]}
        rows={[
          {
            cells: [
              <div key="sd1" className="[&>div]:my-0">
                <FormulaBlock latex={String.raw`f'(c)=0,\quad f''(c)<0`} />
              </div>,
              <ConcaveDownGraph key="sd1g" />,
              "Local maximum",
            ],
          },
          {
            cells: [
              <div key="sd2" className="[&>div]:my-0">
                <FormulaBlock latex={String.raw`f'(c)=0,\quad f''(c)>0`} />
              </div>,
              <ConcaveUpGraph key="sd2g" />,
              "Local minimum",
            ],
          },
          {
            cells: [
              <div key="sd3" className="[&>div]:my-0">
                <FormulaBlock latex={String.raw`f'(c)=0,\quad f''(c)=0`} />
              </div>,
              <InconclusiveSecondDerivativeGraph key="sd3g" />,
              "Test inconclusive — use the First Derivative Test",
            ],
          },
        ]}
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-border p-3">
          <span className="t-micro block">Local maximum</span>
          <p className="mt-1 text-sm">
            <Formula>{String.raw`x=c`}</Formula> is the point;{" "}
            <Formula>{String.raw`f(c)`}</Formula> is the local maximum value.
          </p>
        </div>
        <div className="rounded-md border border-border p-3">
          <span className="t-micro block">Local minimum</span>
          <p className="mt-1 text-sm">
            <Formula>{String.raw`x=c`}</Formula> is the point;{" "}
            <Formula>{String.raw`f(c)`}</Formula> is the local minimum value.
          </p>
        </div>
      </div>
      <Stepper
        steps={[
          {
            label: <>Find the first derivative <Formula>{String.raw`f'(x)`}</Formula>.</>,
          },
          {
            label: <>Solve <Formula>{String.raw`f'(x)=0`}</Formula> to find critical points.</>,
          },
          {
            label: <>Find the second derivative <Formula>{String.raw`f''(x)`}</Formula>.</>,
          },
          {
            label: <>Substitute each critical point <Formula>c</Formula>.</>,
            description: (
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <Formula>{String.raw`f''(c)<0`}</Formula> → local maximum.
                </li>
                <li>
                  <Formula>{String.raw`f''(c)>0`}</Formula> → local minimum.
                </li>
                <li>
                  <Formula>{String.raw`f''(c)=0`}</Formula> → inconclusive; use the First Derivative
                  Test.
                </li>
              </ul>
            ),
          },
        ]}
      />

      <h4 id="h-6-4-3-2">9. Solved Problems — Second Derivative Test</h4>

      <SolvedProblem
        title="Question 1 — Cubic Function"
        question={
          <>
            <p>
              Find the local maxima and local minima, if any, of{" "}
              <Formula>{String.raw`g(x)=x^3-3x`}</Formula>. Also find their corresponding values.
            </p>
          </>
        }
      >
        <SolutionStep label="Step 1 — First and second derivatives">
          <FormulaBlock latex={String.raw`g'(x)=3x^2-3`} />
          <FormulaBlock latex={String.raw`g''(x)=6x`} />
        </SolutionStep>
        <SolutionStep label="Step 2 — Critical points">
          <FormulaBlock latex={String.raw`3x^2-3=0\Rightarrow x^2=1`} />
          <FormulaBlock latex={String.raw`\boxed{x=1,\ -1}`} important />
        </SolutionStep>
        <SolutionStep label="Step 3 — Two-column evaluation">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">At x = 1</span>
              <FormulaBlock latex={String.raw`g''(1)=6(1)=6>0`} />
              <p className="text-sm">Local minimum.</p>
              <FormulaBlock latex={String.raw`g(1)=1^3-3(1)`} />
              <FormulaBlock latex={String.raw`\boxed{g(1)=-2}`} important />
            </div>
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">At x = −1</span>
              <FormulaBlock latex={String.raw`g''(-1)=6(-1)=-6<0`} />
              <p className="text-sm">Local maximum.</p>
              <FormulaBlock latex={String.raw`g(-1)=(-1)^3-3(-1)`} />
              <FormulaBlock latex={String.raw`\boxed{g(-1)=2}`} important />
            </div>
          </div>
        </SolutionStep>
        <SolutionStep label="Final results">
          <TableCard
            headers={["Type", "Point", "Value"]}
            rows={[
              {
                cells: [
                  "Local maximum",
                  <Formula key="q1a">{String.raw`x=-1`}</Formula>,
                  <Formula key="q1b">{String.raw`2`}</Formula>,
                ],
              },
              {
                cells: [
                  "Local minimum",
                  <Formula key="q1c">{String.raw`x=1`}</Formula>,
                  <Formula key="q1d">{String.raw`-2`}</Formula>,
                ],
              },
            ]}
          />
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 2 — Second Derivative Test Fails"
        question={
          <>
            <p>
              Find all points of local maxima and local minima of{" "}
              <Formula>{String.raw`f(x)=2x^3-6x^2+6x+5`}</Formula>.
            </p>
          </>
        }
      >
        <SolutionStep label="Step 1 — First derivative and critical point">
          <FormulaBlock latex={String.raw`f'(x)=6x^2-12x+6`} />
          <FormulaBlock latex={String.raw`=6(x^2-2x+1)`} />
          <FormulaBlock latex={String.raw`\boxed{f'(x)=6(x-1)^2}`} important />
          <FormulaBlock latex={String.raw`6(x-1)^2=0\Rightarrow x=1`} />
        </SolutionStep>
        <SolutionStep label="Step 2 — Second derivative is inconclusive">
          <FormulaBlock latex={String.raw`f''(x)=12x-12`} />
          <FormulaBlock latex={String.raw`f''(1)=12-12=0`} />
          <p className="text-sm font-semibold">The test is inconclusive.</p>
        </SolutionStep>
        <SolutionStep label="Step 3 — First Derivative Test">
          <FormulaBlock latex={String.raw`f'(0)=6>0`} />
          <FormulaBlock latex={String.raw`f'(2)=6>0`} />
          <SignNumberLine points={["1"]} signs={["+", "+"]} note="no sign change at x = 1" />
          <p className="text-sm text-muted-foreground">
            The derivative remains positive on both sides of{" "}
            <Formula>{String.raw`x=1`}</Formula>.
          </p>
          <FormulaBlock latex={String.raw`+\longrightarrow+`} />
          <FormulaBlock
            latex={String.raw`\boxed{\text{No local maximum or minimum}}`}
            important
          />
        </SolutionStep>
        <SolutionStep label="Stationary inflection point">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_230px] sm:items-center">
            <div>
              <p className="text-sm text-muted-foreground">
                The point is a stationary point of inflection, not an extremum.
              </p>
              <FormulaBlock latex={String.raw`f(1)=2-6+6+5=7`} />
              <FormulaBlock latex={String.raw`\boxed{\text{Stationary inflection point }(1,7)}`} important />
            </div>
            <StationaryInflectionGraph />
          </div>
        </SolutionStep>
      </SolvedProblem>

      <SolvedProblem
        title="Question 3 — Work · Cubic Function"
        question={
          <>
            <p>
              Find the local maxima and local minima, if any, of{" "}
              <Formula>{String.raw`f(x)=x^3-6x^2+9x+15`}</Formula>. Also find the corresponding local
              maximum and minimum values.
            </p>
          </>
        }
      >
        <SolutionStep label="Stage 1 — Critical-point calculation">
          <FormulaBlock latex={String.raw`f'(x)=3x^2-12x+9`} />
          <FormulaBlock latex={String.raw`=3(x^2-4x+3)`} />
          <FormulaBlock latex={String.raw`\boxed{f'(x)=3(x-1)(x-3)}`} important />
          <FormulaBlock latex={String.raw`3(x-1)(x-3)=0\Rightarrow x=1,\ 3`} />
        </SolutionStep>
        <SolutionStep label="Stage 2 — Second-derivative classification">
          <FormulaBlock latex={String.raw`f''(x)=6x-12`} />
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">At x = 1</span>
              <FormulaBlock latex={String.raw`f''(1)=6-12=-6<0`} />
              <p className="text-sm">Local maximum.</p>
              <FormulaBlock latex={String.raw`f(1)=1-6+9+15`} />
              <FormulaBlock latex={String.raw`\boxed{f(1)=19}`} important />
            </div>
            <div className="rounded-md border border-border p-3 [&>div]:my-0">
              <span className="t-micro mb-2 block">At x = 3</span>
              <FormulaBlock latex={String.raw`f''(3)=18-12=6>0`} />
              <p className="text-sm">Local minimum.</p>
              <FormulaBlock latex={String.raw`f(3)=27-54+27+15`} />
              <FormulaBlock latex={String.raw`\boxed{f(3)=15}`} important />
            </div>
          </div>
        </SolutionStep>
        <SolutionStep label="Final results">
          <TableCard
            headers={["Type", "Point", "Value"]}
            rows={[
              {
                cells: [
                  "Local maximum",
                  <Formula key="q3a">{String.raw`x=1`}</Formula>,
                  <Formula key="q3b">{String.raw`19`}</Formula>,
                ],
              },
              {
                cells: [
                  "Local minimum",
                  <Formula key="q3c">{String.raw`x=3`}</Formula>,
                  <Formula key="q3d">{String.raw`15`}</Formula>,
                ],
              },
            ]}
          />
        </SolutionStep>
      </SolvedProblem>

      <CollapsibleRevision
        className="my-6 rounded-xl border border-border bg-card"
        contentClassName="p-4"
        label="Unit 4 — Quick Revision"
        header={
          <div className="border-b border-border bg-muted/25 px-4 py-3 pr-12">
            <h3 id="h-6-4-4" className="m-0! border-0! p-0! text-base! font-semibold! tracking-tight!">
              Unit 4 — Quick Revision
            </h3>
          </div>
        }
      >
      <h4 id="h-6-4-4-1">10. Comparison of the Two Tests</h4>
      <TableCard
        headers={["Feature", "First Derivative Test", "Second Derivative Test"]}
        rows={[
          {
            cells: [
              "Uses",
              <Formula key="cmp1a">{String.raw`f'(x)`}</Formula>,
              <Formula key="cmp1b">{String.raw`f'(x),\ f''(x)`}</Formula>,
            ],
          },
          { cells: ["First step", "Find critical points", "Find critical points"] },
          {
            cells: [
              "Local maximum",
              <Formula key="cmp2a">{String.raw`+\longrightarrow-`}</Formula>,
              <Formula key="cmp2b">{String.raw`f''(c)<0`}</Formula>,
            ],
          },
          {
            cells: [
              "Local minimum",
              <Formula key="cmp3a">{String.raw`-\longrightarrow+`}</Formula>,
              <Formula key="cmp3b">{String.raw`f''(c)>0`}</Formula>,
            ],
          },
          {
            cells: [
              "Inconclusive case",
              "No sign change",
              <Formula key="cmp4">{String.raw`f''(c)=0`}</Formula>,
            ],
          },
        ]}
      />

      <h4 id="h-6-4-4-2">11. Formula and Concept Reference</h4>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro block">Critical points</span>
          <div className="mt-2 [&>div]:my-0">
            <FormulaBlock latex={String.raw`f'(c)=0`} />
            <p className="text-sm">
              or <Formula>{String.raw`f'(c)`}</Formula> does not exist, provided{" "}
              <Formula>c</Formula> belongs to the domain.
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="t-micro block">Extreme Value Theorem</span>
          <p className="mt-2 text-sm">
            A continuous function on a closed and bounded interval has both a maximum and a minimum
            value.
          </p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-border p-3">
          <span className="t-micro block">First Derivative Test</span>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              <Formula>{String.raw`+\rightarrow-`}</Formula> ⇒ local maximum.
            </li>
            <li>
              <Formula>{String.raw`-\rightarrow+`}</Formula> ⇒ local minimum.
            </li>
            <li>
              <Formula>{String.raw`+\rightarrow+`}</Formula> ⇒ neither.
            </li>
            <li>
              <Formula>{String.raw`-\rightarrow-`}</Formula> ⇒ neither.
            </li>
          </ul>
        </div>
        <div className="rounded-md border border-border p-3">
          <span className="t-micro block">Second Derivative Test</span>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            <li>
              <Formula>{String.raw`f'(c)=0,\ f''(c)<0`}</Formula> ⇒ local maximum.
            </li>
            <li>
              <Formula>{String.raw`f'(c)=0,\ f''(c)>0`}</Formula> ⇒ local minimum.
            </li>
            <li>
              <Formula>{String.raw`f'(c)=0,\ f''(c)=0`}</Formula> ⇒ inconclusive.
            </li>
          </ul>
        </div>
      </div>
      <TableCard
        headers={["Term", "Meaning"]}
        rows={[
          {
            cells: [
              "Point of maximum",
              <>Input <Formula>{String.raw`x=c`}</Formula></>,
            ],
          },
          {
            cells: [
              "Maximum value",
              <>Output <Formula>{String.raw`f(c)`}</Formula></>,
            ],
          },
          {
            cells: [
              "Point of minimum",
              <>Input <Formula>{String.raw`x=c`}</Formula></>,
            ],
          },
          {
            cells: [
              "Minimum value",
              <>Output <Formula>{String.raw`f(c)`}</Formula></>,
            ],
          },
          { cells: ["Local extremum", "Highest or lowest relative to nearby points"] },
          { cells: ["Absolute extremum", "Highest or lowest over the entire domain"] },
        ]}
      />
      </CollapsibleRevision>

      <h2 id="h-6-5">6.5 Tangents and Normals</h2>
      <Callout type="note">
        <p>
          This section and the next appear in the full edition of the chapter; the current NCERT
          reprint trims them into the exercises. They are kept here because the tangent line is the
          geometric meaning of the derivative, and because approximation is the first application
          of the differential.
        </p>
      </Callout>
      <p>
        Let the curve be <Formula>{String.raw`y = f(x)`}</Formula> and let{" "}
        <Formula>{String.raw`P(x_0, y_0)`}</Formula> be a point on it. The derivative at{" "}
        <Formula>{String.raw`P`}</Formula> is the slope of the line that touches the curve there.
        If <Formula>{String.raw`\psi`}</Formula> is the angle the tangent makes with the positive{" "}
        <Formula>x</Formula>-axis, then
      </p>
      <FormulaBlock
        latex={String.raw`m = \left.\frac{dy}{dx}\right|_{(x_0,y_0)} = f'(x_0) = \tan\psi`}
        label="Slope of the tangent"
        important
      />
      <p>
        The line through <Formula>{String.raw`P`}</Formula> perpendicular to the tangent is the{" "}
        <Highlight color="yellow">normal</Highlight>. Its slope is the negative reciprocal of{" "}
        <Formula>m</Formula>, so the two equations are:
      </p>
      <FormulaBlock
        latex={String.raw`y - y_0 = m\,(x - x_0)\qquad\text{(tangent)}`}
        label="Equation of the tangent"
      />
      <FormulaBlock
        latex={String.raw`y - y_0 = -\frac{1}{m}\,(x - x_0),\qquad m \neq 0\qquad\text{(normal)}`}
        label="Equation of the normal"
      />
      <Callout type="important">
        <p>Three special cases worth memorising:</p>
        <ul className="mt-2 space-y-1.5">
          <li>
            If <Formula>{String.raw`m = 0`}</Formula> the tangent is the horizontal line{" "}
            <Formula>{String.raw`y = y_0`}</Formula> and the normal is the vertical line{" "}
            <Formula>{String.raw`x = x_0`}</Formula>.
          </li>
          <li>
            If the curve has a vertical tangent at <Formula>{String.raw`P`}</Formula> (
            <Formula>{String.raw`\frac{dy}{dx} \to \infty`}</Formula>), the tangent is{" "}
            <Formula>{String.raw`x = x_0`}</Formula> and the normal is{" "}
            <Formula>{String.raw`y = y_0`}</Formula>.
          </li>
          <li>
            When the curve is given parametrically by{" "}
            <Formula>{String.raw`x = u(t)`}</Formula>,{" "}
            <Formula>{String.raw`y = v(t)`}</Formula>, then{" "}
            <Formula>{String.raw`\frac{dy}{dx} = \frac{v'(t)}{u'(t)}`}</Formula>,{" "}
            <Formula>{String.raw`u'(t) \neq 0`}</Formula>.
          </li>
        </ul>
      </Callout>
      <TableCard
        title="Reading a question into a slope"
        headers={["The question says", "The condition is", "Solve"]}
        rows={[
          {
            cells: [
              "tangent is parallel to the x-axis",
              <span key="t1">
                <Formula>{String.raw`f'(x_0) = 0`}</Formula>
              </span>,
              <span key="t1s">
                <Formula>{String.raw`f'(x) = 0`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "tangent is parallel to y = mx + c",
              <span key="t2">
                <Formula>{String.raw`f'(x_0) = m`}</Formula>
              </span>,
              <span key="t2s">
                <Formula>{String.raw`f'(x) = m`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "tangent is perpendicular to a line of slope m",
              <span key="t3">
                <Formula>{String.raw`f'(x_0)\cdot m = -1`}</Formula>
              </span>,
              <span key="t3s">
                <Formula>{String.raw`f'(x) = -\frac{1}{m}`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "normal is parallel to a line of slope m",
              <span key="t4">
                <Formula>{String.raw`f'(x_0) = -\frac{1}{m}`}</Formula>
              </span>,
              <span key="t4s">
                <Formula>{String.raw`f'(x) = -\frac{1}{m}`}</Formula>
              </span>,
            ],
          },
        ]}
        caption={
          <>
            Find <Formula>{String.raw`x_0`}</Formula> from the slope condition, then substitute into
            the curve to get <Formula>{String.raw`y_0`}</Formula>.
          </>
        }
      />

      <Expandable title="Worked Examples — Tangents and Normals">
        <KeyPoint title="Worked example 1">
          <p>
            Find the tangent and normal to <Formula>{String.raw`y = x^3 - 3x + 2`}</Formula> at{" "}
            <Formula>{String.raw`(2,4)`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>{" "}
            <Formula>{String.raw`\frac{dy}{dx} = 3x^2 - 3`}</Formula>, so at{" "}
            <Formula>{String.raw`x = 2`}</Formula> the slope is{" "}
            <Formula>{String.raw`m = 12 - 3 = 9`}</Formula>.
          </p>
          <p>
            Tangent: <Formula>{String.raw`y - 4 = 9(x-2)`}</Formula>, i.e.{" "}
            <Formula>{String.raw`9x - y - 14 = 0`}</Formula>.
          </p>
          <p>
            Normal: <Formula>{String.raw`y - 4 = -\frac{1}{9}(x-2)`}</Formula>, i.e.{" "}
            <Formula>{String.raw`x + 9y - 38 = 0`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 2">
          <p>
            Find the points on <Formula>{String.raw`y = x^3 - 3x`}</Formula> where the tangent is
            parallel to <Formula>{String.raw`3x - y + 5 = 0`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> The line is{" "}
            <Formula>{String.raw`y = 3x + 5`}</Formula>, slope 3. So we need{" "}
            <Formula>{String.raw`3x^2 - 3 = 3`}</Formula>, i.e.{" "}
            <Formula>{String.raw`x^2 = 2`}</Formula>, giving{" "}
            <Formula>{String.raw`x = \pm\sqrt{2}`}</Formula>.
          </p>
          <p>
            At <Formula>{String.raw`x = \sqrt{2}`}</Formula>,{" "}
            <Formula>{String.raw`y = 2\sqrt{2} - 3\sqrt{2} = -\sqrt{2}`}</Formula>; at{" "}
            <Formula>{String.raw`x = -\sqrt{2}`}</Formula>,{" "}
            <Formula>{String.raw`y = -2\sqrt{2} + 3\sqrt{2} = \sqrt{2}`}</Formula>. The points are{" "}
            <Formula>{String.raw`(\sqrt{2}, -\sqrt{2})`}</Formula> and{" "}
            <Formula>{String.raw`(-\sqrt{2}, \sqrt{2})`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 3">
          <p>
            Find the tangent to <Formula>{String.raw`y = x^2 + 4x - 5`}</Formula> perpendicular to{" "}
            <Formula>{String.raw`x - 2y + 3 = 0`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> The given line has slope{" "}
            <Formula>{String.raw`\frac{1}{2}`}</Formula>, so the required tangent has slope{" "}
            <Formula>{String.raw`-2`}</Formula>. Then{" "}
            <Formula>{String.raw`2x + 4 = -2`}</Formula> gives{" "}
            <Formula>{String.raw`x = -3`}</Formula> and{" "}
            <Formula>{String.raw`y = 9 - 12 - 5 = -8`}</Formula>.
          </p>
          <p>
            Tangent: <Formula>{String.raw`y + 8 = -2(x+3)`}</Formula>, i.e.{" "}
            <Formula>{String.raw`2x + y + 14 = 0`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 4">
          <p>
            For the curve <Formula>{String.raw`x = t^2`}</Formula>,{" "}
            <Formula>{String.raw`y = 2t`}</Formula>, find the tangent at{" "}
            <Formula>{String.raw`t = 2`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>{" "}
            <Formula>{String.raw`\frac{dx}{dt} = 2t`}</Formula> and{" "}
            <Formula>{String.raw`\frac{dy}{dt} = 2`}</Formula>, hence
          </p>
          <p>
            <Formula>{String.raw`\frac{dy}{dx} = \frac{2}{2t} = \frac{1}{t}`}</Formula>
          </p>
          <p>
            At <Formula>{String.raw`t = 2`}</Formula> the point is{" "}
            <Formula>{String.raw`(4,4)`}</Formula> and the slope is{" "}
            <Formula>{String.raw`\frac{1}{2}`}</Formula>. Tangent:{" "}
            <Formula>{String.raw`y - 4 = \frac{1}{2}(x-4)`}</Formula>, i.e.{" "}
            <Formula>{String.raw`x - 2y + 4 = 0`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 5">
          <p>
            Find the normal to <Formula>{String.raw`y = x^3 + 2x + 6`}</Formula> which is parallel
            to <Formula>{String.raw`x + 14y + 4 = 0`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> The given line has slope{" "}
            <Formula>{String.raw`-\frac{1}{14}`}</Formula>, so the normal must have slope{" "}
            <Formula>{String.raw`-\frac{1}{14}`}</Formula> and the tangent slope{" "}
            <Formula>{String.raw`14`}</Formula>. Then{" "}
            <Formula>{String.raw`3x^2 + 2 = 14`}</Formula> gives{" "}
            <Formula>{String.raw`x = \pm 2`}</Formula>.
          </p>
          <p>
            At <Formula>{String.raw`x = 2`}</Formula>, <Formula>{String.raw`y = 18`}</Formula>:
            normal is <Formula>{String.raw`x + 14y = 254`}</Formula>.
          </p>
          <p>
            At <Formula>{String.raw`x = -2`}</Formula>,{" "}
            <Formula>{String.raw`y = -6`}</Formula>: normal is{" "}
            <Formula>{String.raw`x + 14y + 86 = 0`}</Formula>.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 6.4 — Tangents and Normals">
        <ExerciseQa
          questions={[
            <>
              Find the slope of the tangent to <Formula>{String.raw`y = x^3 - x + 1`}</Formula> at{" "}
              <Formula>{String.raw`x = 2`}</Formula>.
            </>,
            <>
              Find the equation of the tangent to{" "}
              <Formula>{String.raw`y = x^2 + 3x + 4`}</Formula> at{" "}
              <Formula>{String.raw`(1,8)`}</Formula>.
            </>,
            <>
              Find the point on <Formula>{String.raw`y = x^2 - 4x + 5`}</Formula> where the tangent
              is parallel to <Formula>{String.raw`2x - y + 3 = 0`}</Formula>.
            </>,
            <>
              Find the tangent and normal to <Formula>{String.raw`y = x^3`}</Formula> at{" "}
              <Formula>{String.raw`(1,1)`}</Formula>.
            </>,
            <>
              Find the normal to <Formula>{String.raw`x^2 = 4y`}</Formula> at{" "}
              <Formula>{String.raw`(2,1)`}</Formula>.
            </>,
            <>
              Find the points on <Formula>{String.raw`y = x^3 - 3x^2 + 3x - 1`}</Formula> where the
              tangent is parallel to the <Formula>x</Formula>-axis.
            </>,
            <>
              Find the tangent to <Formula>{String.raw`xy = 4`}</Formula> at{" "}
              <Formula>{String.raw`(2,2)`}</Formula>.
            </>,
            <>
              Find the normal to <Formula>{String.raw`y = x^3 + 2x + 6`}</Formula> parallel to{" "}
              <Formula>{String.raw`x + 14y + 4 = 0`}</Formula>.
            </>,
            <>
              Find the tangent to <Formula>{String.raw`y = \sin x`}</Formula> at{" "}
              <Formula>{String.raw`x = 0`}</Formula>.
            </>,
            <>
              Find the slope of the normal to{" "}
              <Formula>{String.raw`y = 2x^2 + 3\sin x`}</Formula> at{" "}
              <Formula>{String.raw`x = 0`}</Formula>.
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`11`}</Formula>
            </>,
            <>
              <Formula>{String.raw`5x - y + 3 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`(3,2)`}</Formula>
            </>,
            <>
              tangent <Formula>{String.raw`3x - y - 2 = 0`}</Formula>, normal{" "}
              <Formula>{String.raw`x + 3y - 4 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x + y - 3 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`(1,0)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x + y - 4 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`x + 14y = 254`}</Formula> and{" "}
              <Formula>{String.raw`x + 14y + 86 = 0`}</Formula>
            </>,
            <>
              <Formula>{String.raw`y = x`}</Formula>
            </>,
            <>
              <Formula>{String.raw`-\frac{1}{3}`}</Formula>
            </>,
          ]}
        />
      </Expandable>

      <h2 id="h-6-6">6.6 Approximation</h2>
      <p>
        A small change in the input produces a small change in the output, and for small changes
        the curve is almost its own tangent. That single sentence is the whole theory of
        approximation. Let <Formula>{String.raw`y = f(x)`}</Formula> and let{" "}
        <Formula>{String.raw`\Delta x`}</Formula> be a small change in{" "}
        <Formula>x</Formula>; the corresponding change in <Formula>y</Formula> is{" "}
        <Formula>{String.raw`\Delta y = f(x + \Delta x) - f(x)`}</Formula>.
      </p>
      <FormulaBlock
        latex={String.raw`\Delta y \approx f'(x)\,\Delta x \qquad\text{i.e.}\qquad dy = f'(x)\,dx`}
        label="The differential"
        important
      />
      <p>
        Solving for the new value gives the working formula for approximations:
      </p>
      <FormulaBlock
        latex={String.raw`f(x + \Delta x) \approx f(x) + f'(x)\,\Delta x`}
        label="Linear approximation"
        important
      />
      <Callout type="tip">
        <p>
          The approximation is good when <Formula>{String.raw`\Delta x`}</Formula> is small compared
          with <Formula>x</Formula>, and it fails near points where{" "}
          <Formula>{String.raw`f'`}</Formula> is large or undefined. Choose{" "}
          <Formula>x</Formula> to be the nearest number whose <Formula>f</Formula> value you can
          compute exactly.
        </p>
      </Callout>
      <TableCard
        title="Errors — the language of measurement"
        headers={["Quantity", "Meaning", "Formula"]}
        rows={[
          {
            cells: [
              "absolute error",
              "size of the mistake in the measured value",
              <span key="a1">
                <Formula>{String.raw`\Delta x`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "relative error",
              "the mistake compared with the value itself",
              <span key="a2">
                <Formula>{String.raw`\frac{\Delta x}{x}`}</Formula>
              </span>,
            ],
          },
          {
            cells: [
              "percentage error",
              "relative error written as a percentage",
              <span key="a3">
                <Formula>{String.raw`\frac{\Delta x}{x}\times 100`}</Formula>
              </span>,
            ],
          },
        ]}
        caption={
          <>
            For a computed quantity <Formula>{String.raw`y = f(x)`}</Formula>, the errors propagate
            as <Formula>{String.raw`\Delta y \approx f'(x)\Delta x`}</Formula>.
          </>
        }
      />

      <Expandable title="Worked Examples — Approximation">
        <KeyPoint title="Worked example 1">
          <p>
            Use differentials to find an approximate value of{" "}
            <Formula>{String.raw`\sqrt{25.3}`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> Take{" "}
            <Formula>{String.raw`f(x) = \sqrt{x}`}</Formula>,{" "}
            <Formula>{String.raw`x = 25`}</Formula>,{" "}
            <Formula>{String.raw`\Delta x = 0.3`}</Formula>. Then{" "}
            <Formula>{String.raw`f'(x) = \frac{1}{2\sqrt{x}}`}</Formula> and{" "}
            <Formula>{String.raw`f'(25) = \frac{1}{10}`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`dy = f'(25)\Delta x = \frac{1}{10}(0.3) = 0.03`}</Formula>
          </p>
          <p>
            Hence <Formula>{String.raw`\sqrt{25.3} \approx 5 + 0.03 = 5.03`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 2">
          <p>
            Find an approximate value of <Formula>{String.raw`(1.999)^5`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> Take{" "}
            <Formula>{String.raw`f(x) = x^5`}</Formula>, <Formula>{String.raw`x = 2`}</Formula>,{" "}
            <Formula>{String.raw`\Delta x = -0.001`}</Formula>. Then{" "}
            <Formula>{String.raw`f'(x) = 5x^4`}</Formula> and{" "}
            <Formula>{String.raw`f'(2) = 80`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`dy = 80(-0.001) = -0.08`}</Formula>
          </p>
          <p>
            Hence <Formula>{String.raw`(1.999)^5 \approx 32 - 0.08 = 31.92`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 3">
          <p>
            The radius of a sphere is measured as 7 m with an error of 0.02 m. Find the approximate
            error in calculating its volume.
          </p>
          <p>
            <strong>Solution.</strong> With{" "}
            <Formula>{String.raw`V = \frac{4}{3}\pi r^3`}</Formula>,
          </p>
          <p>
            <Formula>{String.raw`\frac{dV}{dr} = 4\pi r^2`}</Formula>
          </p>
          <p>
            so for <Formula>{String.raw`r = 7`}</Formula> m and{" "}
            <Formula>{String.raw`\Delta r = 0.02`}</Formula> m,
          </p>
          <p>
            <Formula>{String.raw`\Delta V \approx 4\pi(49)(0.02) = 3.92\pi \approx 12.31\ \text{m}^3`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 4">
          <p>
            The radius of a sphere is measured as 9 m with an error of 0.03 m. Find the approximate
            error in calculating its surface area.
          </p>
          <p>
            <strong>Solution.</strong> With{" "}
            <Formula>{String.raw`S = 4\pi r^2`}</Formula>,{" "}
            <Formula>{String.raw`\frac{dS}{dr} = 8\pi r`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`\Delta S \approx 8\pi(9)(0.03) = 2.16\pi \approx 6.79\ \text{m}^2`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Worked example 5">
          <p>
            If the edge of a cube is measured with a 1% error, what is the percentage error in its
            surface area?
          </p>
          <p>
            <strong>Solution.</strong> With <Formula>{String.raw`S = 6x^2`}</Formula>,{" "}
            <Formula>{String.raw`\Delta S \approx 12x\,\Delta x`}</Formula>, hence
          </p>
          <p>
            <Formula>{String.raw`\frac{\Delta S}{S} = \frac{12x\,\Delta x}{6x^2} = 2\frac{\Delta x}{x}`}</Formula>
          </p>
          <p>
            A 1% error in <Formula>x</Formula> therefore gives a 2% error in the surface area.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Exercise 6.5 — Approximation">
        <ExerciseQa
          questions={[
            <>
              Find the approximate value of <Formula>{String.raw`\sqrt{25.3}`}</Formula>.
            </>,
            <>
              Find the approximate value of <Formula>{String.raw`\sqrt{49.5}`}</Formula>.
            </>,
            <>
              Find the approximate value of <Formula>{String.raw`(1.999)^5`}</Formula>.
            </>,
            <>
              Find the approximate value of <Formula>{String.raw`(2.001)^4`}</Formula>.
            </>,
            <>
              Find the approximate value of <Formula>{String.raw`(15)^{1/4}`}</Formula>.
            </>,
            <>
              Find the approximate value of <Formula>{String.raw`(0.999)^{1/10}`}</Formula>.
            </>,
            <>
              The radius of a sphere is measured as 7 m with an error of 0.02 m. Find the
              approximate error in its volume.
            </>,
            <>
              The radius of a sphere is measured as 9 m with an error of 0.03 m. Find the
              approximate error in its surface area.
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`5.03`}</Formula>
            </>,
            <>
              <Formula>{String.raw`7 + \frac{0.5}{14} \approx 7.036`}</Formula>
            </>,
            <>
              <Formula>{String.raw`31.92`}</Formula>
            </>,
            <>
              <Formula>{String.raw`16.032`}</Formula>
            </>,
            <>
              <Formula>{String.raw`2 - \frac{1}{32} = 1.96875`}</Formula>
            </>,
            <>
              <Formula>{String.raw`1 - 0.0001 = 0.9999`}</Formula>
            </>,
            <>
              <Formula>{String.raw`3.92\pi \approx 12.31\ \text{m}^3`}</Formula>
            </>,
            <>
              <Formula>{String.raw`2.16\pi \approx 6.79\ \text{m}^2`}</Formula>
            </>,
          ]}
        />
      </Expandable>

      <Expandable title="Miscellaneous Examples 30 to 37 — NCERT">
        <KeyPoint title="Example 30">
          <p>
            A car starts from <Formula>P</Formula> at <Formula>{String.raw`t = 0`}</Formula> s and
            stops at <Formula>Q</Formula>. The distance covered in <Formula>t</Formula> s is{" "}
            <Formula>{String.raw`x = t^2\left(2 - \frac{t}{3}\right)`}</Formula>. Find the time
            taken to reach <Formula>Q</Formula> and the distance <Formula>PQ</Formula>.
          </p>
          <p>
            <strong>Solution.</strong> The velocity is
          </p>
          <p>
            <Formula>{String.raw`v = \frac{dx}{dt} = 4t - t^2 = t(4-t)`}</Formula>
          </p>
          <p>
            So <Formula>{String.raw`v = 0`}</Formula> at <Formula>{String.raw`t = 0`}</Formula> and{" "}
            <Formula>{String.raw`t = 4`}</Formula>. The car is at rest at{" "}
            <Formula>P</Formula> when <Formula>{String.raw`t = 0`}</Formula>, so it stops at{" "}
            <Formula>Q</Formula> when <Formula>{String.raw`t = 4`}</Formula> s. The distance is
          </p>
          <p>
            <Formula>{String.raw`x\big|_{t=4} = 16\left(2 - \frac{4}{3}\right) = \frac{32}{3}\ \text{m}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 31">
          <p>
            An inverted conical tank has semi-vertical angle{" "}
            <Formula>{String.raw`\tan^{-1}(0.5)`}</Formula>. Water is poured in at{" "}
            <Formula>{String.raw`5\ \text{m}^3/\text{h}`}</Formula>. Find the rate at which the
            level rises when the depth is 4 m.
          </p>
          <p>
            <strong>Solution.</strong> From{" "}
            <Formula>{String.raw`\tan\alpha = \frac{r}{h} = 0.5`}</Formula> we get{" "}
            <Formula>{String.raw`r = \frac{h}{2}`}</Formula>. Then
          </p>
          <p>
            <Formula>{String.raw`V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi\left(\frac{h}{2}\right)^2 h = \frac{\pi h^3}{12}`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`\frac{dV}{dt} = \frac{\pi h^2}{4}\cdot\frac{dh}{dt}`}</Formula>
          </p>
          <p>
            With <Formula>{String.raw`\frac{dV}{dt} = 5`}</Formula> and{" "}
            <Formula>{String.raw`h = 4`}</Formula>:
          </p>
          <p>
            <Formula>{String.raw`5 = \frac{\pi(16)}{4}\frac{dh}{dt} \Rightarrow \frac{dh}{dt} = \frac{5}{4\pi} = \frac{35}{88}\ \text{m/h}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 32">
          <p>
            A man 2 m tall walks at 5 km/h away from a 6 m lamp post. Find the rate at which his
            shadow lengthens.
          </p>
          <p>
            <strong>Solution.</strong> Let <Formula>{String.raw`AM = l`}</Formula> be the
            man&rsquo;s distance from the post and <Formula>{String.raw`MS = s`}</Formula> the
            shadow. Since <Formula>{String.raw`\triangle MSN \sim \triangle ASB`}</Formula>,
          </p>
          <p>
            <Formula>{String.raw`\frac{MS}{AS} = \frac{MN}{AB} = \frac{2}{6} \Rightarrow AS = 3s`}</Formula>
          </p>
          <p>
            Hence <Formula>{String.raw`l = AM = 3s - s = 2s`}</Formula>, so{" "}
            <Formula>{String.raw`\frac{dl}{dt} = 2\frac{ds}{dt}`}</Formula>. With{" "}
            <Formula>{String.raw`\frac{dl}{dt} = 5`}</Formula> km/h,
          </p>
          <p>
            <Formula>{String.raw`\frac{ds}{dt} = \frac{5}{2}\ \text{km/h}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 33">
          <p>
            Find the intervals in which{" "}
            <Formula>{String.raw`f(x) = \frac{3}{10}x^4 - \frac{4}{5}x^3 - 3x^2 + \frac{36}{5}x + 11`}</Formula>{" "}
            is (a) increasing (b) decreasing.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = \frac{6}{5}x^3 - \frac{12}{5}x^2 - 6x + \frac{36}{5} = \frac{6}{5}(x-1)(x+2)(x-3)`}</Formula>
          </p>
          <p>
            So <Formula>{String.raw`f'(x) = 0`}</Formula> at{" "}
            <Formula>{String.raw`x = 1,\ -2,\ 3`}</Formula>, giving four intervals. Test the sign of
            each factor in turn:
          </p>
          <TableCard
            headers={["Interval", "Sign of f'(x)", "Nature of f"]}
            rows={[
              {
                cells: [
                  <span key="m1">
                    <Formula>{String.raw`(-\infty,-2)`}</Formula>
                  </span>,
                  <span key="m1v">
                    <Formula>{String.raw`< 0`}</Formula>
                  </span>,
                  "decreasing",
                ],
              },
              {
                cells: [
                  <span key="m2">
                    <Formula>{String.raw`(-2,1)`}</Formula>
                  </span>,
                  <span key="m2v">
                    <Formula>{String.raw`> 0`}</Formula>
                  </span>,
                  "increasing",
                ],
              },
              {
                cells: [
                  <span key="m3">
                    <Formula>{String.raw`(1,3)`}</Formula>
                  </span>,
                  <span key="m3v">
                    <Formula>{String.raw`< 0`}</Formula>
                  </span>,
                  "decreasing",
                ],
              },
              {
                cells: [
                  <span key="m4">
                    <Formula>{String.raw`(3,\infty)`}</Formula>
                  </span>,
                  <span key="m4v">
                    <Formula>{String.raw`> 0`}</Formula>
                  </span>,
                  "increasing",
                ],
              },
            ]}
          />
          <p>
            Hence <Formula>f</Formula> is decreasing on{" "}
            <Formula>{String.raw`(-\infty,-2)`}</Formula> and{" "}
            <Formula>{String.raw`(1,3)`}</Formula>, increasing on{" "}
            <Formula>{String.raw`(-2,1)`}</Formula> and{" "}
            <Formula>{String.raw`(3,\infty)`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 34">
          <p>
            Show that{" "}
            <Formula>{String.raw`f(x) = \tan^{-1}(\sin x + \cos x)`}</Formula>,{" "}
            <Formula>{String.raw`x > 0`}</Formula>, is increasing in{" "}
            <Formula>{String.raw`\left(0,\frac{\pi}{4}\right)`}</Formula>.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`f'(x) = \frac{\cos x - \sin x}{1 + (\sin x + \cos x)^2} = \frac{\cos x - \sin x}{2 + \sin 2x}`}</Formula>
          </p>
          <p>
            Since <Formula>{String.raw`2 + \sin 2x > 0`}</Formula> on{" "}
            <Formula>{String.raw`\left(0,\frac{\pi}{4}\right)`}</Formula>, the sign of{" "}
            <Formula>{String.raw`f'`}</Formula> is the sign of{" "}
            <Formula>{String.raw`\cos x - \sin x`}</Formula>. Now{" "}
            <Formula>{String.raw`\cos x > \sin x`}</Formula> exactly when{" "}
            <Formula>{String.raw`\tan x < 1`}</Formula>, i.e. when{" "}
            <Formula>{String.raw`0 < x < \frac{\pi}{4}`}</Formula>. Hence{" "}
            <Formula>{String.raw`f'(x) > 0`}</Formula> there and <Formula>f</Formula> is increasing.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 35">
          <p>
            A circular disc of radius 3 cm is heated so that its radius increases at 0.05 cm/s.
            Find the rate at which its area increases when the radius is 3.2 cm.
          </p>
          <p>
            <strong>Solution.</strong> With <Formula>{String.raw`A = \pi r^2`}</Formula>,
          </p>
          <p>
            <Formula>{String.raw`\frac{dA}{dt} = 2\pi r\frac{dr}{dt}`}</Formula>
          </p>
          <p>
            and <Formula>{String.raw`dr \approx \frac{dr}{dt}\Delta t = 0.05`}</Formula> for a unit
            time step. Hence
          </p>
          <p>
            <Formula>{String.raw`dA = 2\pi(3.2)(0.05) = 0.32\pi\ \text{cm}^2/\text{s}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 36">
          <p>
            An open topped box is made by removing equal squares from each corner of a 3 m by 8 m
            sheet and folding up the sides. Find the volume of the largest such box.
          </p>
          <p>
            <strong>Solution.</strong> Let <Formula>x</Formula> be the side of the removed square.
            The box has height <Formula>x</Formula>, length{" "}
            <Formula>{String.raw`8 - 2x`}</Formula> and breadth{" "}
            <Formula>{String.raw`3 - 2x`}</Formula>, so
          </p>
          <p>
            <Formula>{String.raw`V(x) = x(3-2x)(8-2x) = 4x^3 - 22x^2 + 24x`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`V'(x) = 12x^2 - 44x + 24 = 4(3x-2)(x-3)`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`V'(x) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`x = \frac{2}{3}`}</Formula> or{" "}
            <Formula>{String.raw`x = 3`}</Formula>. But{" "}
            <Formula>{String.raw`x = 3`}</Formula> makes the breadth zero, so it is rejected. With{" "}
            <Formula>{String.raw`V''(x) = 24x - 44`}</Formula>,{" "}
          </p>
          <p>
            <Formula>{String.raw`V''\left(\frac{2}{3}\right) = 16 - 44 = -28 < 0`}</Formula>
          </p>
          <p>
            so <Formula>{String.raw`x = \frac{2}{3}`}</Formula> is the point of maximum volume. The
            largest volume is
          </p>
          <p>
            <Formula>{String.raw`V\left(\frac{2}{3}\right) = \frac{2}{3}\cdot\frac{5}{3}\cdot\frac{20}{3} = \frac{200}{27}\ \text{m}^3`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 37">
          <p>
            A manufacturer can sell <Formula>x</Formula> items at{" "}
            <Formula>{String.raw`\left(5 - \frac{x}{100}\right)`}</Formula> rupees each; the cost of{" "}
            <Formula>x</Formula> items is{" "}
            <Formula>{String.raw`\left(\frac{x}{5} + 500\right)`}</Formula> rupees. Find the number
            of items he should sell to earn maximum profit.
          </p>
          <p>
            <strong>Solution.</strong>
          </p>
          <p>
            <Formula>{String.raw`S(x) = x\left(5 - \frac{x}{100}\right) = 5x - \frac{x^2}{100},\qquad C(x) = \frac{x}{5} + 500`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`P(x) = S(x) - C(x) = \frac{24}{5}x - \frac{x^2}{100} - 500`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`P'(x) = \frac{24}{5} - \frac{x}{50},\qquad P''(x) = -\frac{1}{50} < 0`}</Formula>
          </p>
          <p>
            <Formula>{String.raw`P'(x) = 0`}</Formula> gives{" "}
            <Formula>{String.raw`x = 240`}</Formula>, and{" "}
            <Formula>{String.raw`P''(240) < 0`}</Formula> confirms a maximum. The manufacturer
            should sell <Formula>240</Formula> items.
          </p>
        </KeyPoint>
      </Expandable>

      <Expandable title="Miscellaneous Exercise on Chapter 6">
        <ExerciseQa
          questions={[
            <>
              Show that <Formula>{String.raw`f(x) = \frac{\log x}{x}`}</Formula> has a maximum at{" "}
              <Formula>{String.raw`x = e`}</Formula>.
            </>,
            <>
              The two equal sides of an isosceles triangle with fixed base <Formula>b</Formula>{" "}
              decrease at <Formula>{String.raw`3`}</Formula> cm/s. How fast is the area decreasing
              when the equal sides equal the base?
            </>,
            <>
              Find the intervals in which{" "}
              <Formula>{String.raw`f(x) = \frac{4\sin x - 2x - x\cos x}{2 + \cos x}`}</Formula> is
              (i) increasing (ii) decreasing.
            </>,
            <>
              Find the intervals in which{" "}
              <Formula>{String.raw`f(x) = x^3 + \frac{1}{x^3}`}</Formula>,{" "}
              <Formula>{String.raw`x \neq 0`}</Formula>, is (i) increasing (ii) decreasing.
            </>,
            <>
              Find the maximum area of an isosceles triangle inscribed in the ellipse{" "}
              <Formula>{String.raw`\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1`}</Formula> with its vertex
              at one end of the major axis.
            </>,
            <>
              A tank with rectangular base and sides, open at the top, has depth 2 m and volume{" "}
              <Formula>{String.raw`8\ \text{m}^3`}</Formula>. The base costs{" "}
              <Formula>{String.raw`\text{Rs }70`}</Formula> per m² and the sides{" "}
              <Formula>{String.raw`\text{Rs }45`}</Formula> per m². Find the cost of the least
              expensive tank.
            </>,
            <>
              The sum of the perimeters of a circle and a square is <Formula>k</Formula>. Prove that
              the sum of their areas is least when the side of the square is double the radius of
              the circle.
            </>,
            <>
              A window is a rectangle surmounted by a semicircular opening, with total perimeter 10
              m. Find the dimensions that admit maximum light.
            </>,
            <>
              A point on the hypotenuse of a right triangle is at distances{" "}
              <Formula>a</Formula> and <Formula>b</Formula> from the two sides. Show that the
              minimum length of the hypotenuse is{" "}
              <Formula>{String.raw`\left(a^{2/3} + b^{2/3}\right)^{3/2}`}</Formula>.
            </>,
            <>
              Find the points at which{" "}
              <Formula>{String.raw`f(x) = (x-2)^4(x+1)^3`}</Formula> has (i) local maxima (ii) local
              minima (iii) a point of inflexion.
            </>,
            <>
              Find the absolute maximum and minimum values of{" "}
              <Formula>{String.raw`f(x) = \cos^2 x + \sin x`}</Formula>,{" "}
              <Formula>{String.raw`x \in [0,\pi]`}</Formula>.
            </>,
            <>
              Show that the altitude of the right circular cone of maximum volume inscribed in a
              sphere of radius <Formula>r</Formula> is{" "}
              <Formula>{String.raw`\frac{4r}{3}`}</Formula>.
            </>,
            <>
              Let <Formula>f</Formula> be defined on <Formula>{String.raw`[a,b]`}</Formula> with{" "}
              <Formula>{String.raw`f'(x) > 0`}</Formula> for all{" "}
              <Formula>{String.raw`x \in (a,b)`}</Formula>. Prove that <Formula>f</Formula> is
              increasing on <Formula>{String.raw`(a,b)`}</Formula>.
            </>,
            <>
              Show that the height of the cylinder of maximum volume inscribed in a sphere of
              radius <Formula>R</Formula> is{" "}
              <Formula>{String.raw`\frac{2R}{\sqrt{3}}`}</Formula>. Also find the maximum volume.
            </>,
            <>
              Show that the height of the cylinder of greatest volume inscribed in a right circular
              cone of height <Formula>h</Formula> and semi-vertical angle{" "}
              <Formula>\alpha</Formula> is one-third that of the cone, and the greatest volume is{" "}
              <Formula>{String.raw`\frac{4}{27}\pi h^3\tan^2\alpha`}</Formula>.
            </>,
            <>
              A cylindrical tank of radius 10 m is filled with wheat at{" "}
              <Formula>{String.raw`314\ \text{m}^3`}</Formula> per hour. The depth is increasing at:
              (A) <Formula>{String.raw`1`}</Formula> m/h (B){" "}
              <Formula>{String.raw`0.1`}</Formula> m/h (C){" "}
              <Formula>{String.raw`1.1`}</Formula> m/h (D){" "}
              <Formula>{String.raw`0.5`}</Formula> m/h
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`f'(x) = \frac{1 - \log x}{x^2} = 0`}</Formula> at{" "}
              <Formula>{String.raw`x = e`}</Formula>; <Formula>{String.raw`f''(e) < 0`}</Formula>,
              so it is a maximum.
            </>,
            <>
              Decreasing at <Formula>{String.raw`\sqrt{3}\,b\ \text{cm}^2/\text{s}`}</Formula>
            </>,
            <>
              <Formula>{String.raw`f'(x) = \frac{\cos x\,(4-\cos x)}{(2+\cos x)^2}`}</Formula>: (i)
              increasing on <Formula>{String.raw`\left(0,\frac{\pi}{2}\right)`}</Formula> (ii)
              decreasing on <Formula>{String.raw`\left(\frac{\pi}{2},\pi\right)`}</Formula>
            </>,
            <>
              (i) increasing on{" "}
              <Formula>{String.raw`(-1,0) \cup (1,\infty)`}</Formula> (ii) decreasing on{" "}
              <Formula>{String.raw`(-\infty,-1) \cup (0,1)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\frac{3\sqrt{3}}{4}ab`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\text{Rs }1000`}</Formula>
            </>,
            <>
              With <Formula>{String.raw`4a + 2\pi r = k`}</Formula>,{" "}
              <Formula>{String.raw`\frac{dA}{dr} = 0`}</Formula> forces{" "}
              <Formula>{String.raw`a = 2r`}</Formula>.
            </>,
            <>
              <Formula>{String.raw`r = \frac{10}{4+\pi}`}</Formula> m, height{" "}
              <Formula>{String.raw`\frac{10}{4+\pi}`}</Formula> m, width{" "}
              <Formula>{String.raw`\frac{20}{4+\pi}`}</Formula> m
            </>,
            <>
              Writing the hypotenuse as <Formula>{String.raw`l = b\csc\theta + a\sec\theta`}</Formula>{" "}
              and setting <Formula>{String.raw`\frac{dl}{d\theta} = 0`}</Formula> gives the stated
              minimum.
            </>,
            <>
              (i) local maximum at <Formula>{String.raw`x = \frac{2}{7}`}</Formula> (ii) local
              minimum at <Formula>{String.raw`x = 2`}</Formula> (iii) point of inflexion at{" "}
              <Formula>{String.raw`x = -1`}</Formula>
            </>,
            <>
              maximum <Formula>{String.raw`\frac{5}{4}`}</Formula>, minimum{" "}
              <Formula>1</Formula>
            </>,
            <>
              Maximising <Formula>{String.raw`\frac{\pi}{3}(r+x)(r^2-x^2)`}</Formula> gives{" "}
              <Formula>{String.raw`x = \frac{r}{3}`}</Formula>, so the altitude is{" "}
              <Formula>{String.raw`\frac{4r}{3}`}</Formula>.
            </>,
            <>
              Apply the Mean Value Theorem to{" "}
              <Formula>{String.raw`x_1 < x_2`}</Formula> in{" "}
              <Formula>{String.raw`(a,b)`}</Formula>:{" "}
              <Formula>{String.raw`f(x_2) - f(x_1) = f'(c)(x_2-x_1) > 0`}</Formula>.
            </>,
            <>
              height <Formula>{String.raw`\frac{2R}{\sqrt{3}}`}</Formula>, maximum volume{" "}
              <Formula>{String.raw`\frac{4\pi R^3}{3\sqrt{3}}`}</Formula>
            </>,
            <>
              Maximise <Formula>{String.raw`V = \pi r^2(h-y)`}</Formula> with{" "}
              <Formula>{String.raw`\frac{r}{h} = \frac{y}{h-y}\tan\alpha`}</Formula>.
            </>,
            <>
              (A)
            </>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Rate problems:</strong> write the relation between the quantities <em>first</em>,
            differentiate with respect to <Formula>t</Formula>, and substitute only at the end.
            Never differentiate the numbers.
          </li>
          <li>
            <strong>Sign discipline:</strong> &ldquo;decreasing&rdquo; means a negative rate. Put
            the minus sign in <Formula>{String.raw`\frac{dx}{dt}`}</Formula> at the very start.
          </li>
          <li>
            <strong>Maxima/minima in one line:</strong> solve{" "}
            <Formula>{String.raw`f'(x) = 0`}</Formula>, then read{" "}
            <Formula>{String.raw`f''(c) > 0`}</Formula> as minimum and{" "}
            <Formula>{String.raw`f''(c) < 0`}</Formula> as maximum.
          </li>
          <li>
            <strong>Second test fails</strong> (<Formula>{String.raw`f''(c) = 0`}</Formula>)? Go
            straight to the sign chart of <Formula>{String.raw`f'`}</Formula> — no sign change means
            a point of inflexion, not an extremum.
          </li>
          <li>
            <strong>Absolute extrema on [a, b]:</strong> only the candidates matter — the critical
            points <em>inside</em> the interval plus the two end points. A table of values settles
            it with no sign analysis at all.
          </li>
          <li>
            <strong>Applied optimisation:</strong> reduce to one variable, note its admissible
            range (a length cannot be negative), and check that the critical point lies in that
            range before declaring an answer.
          </li>
          <li>
            <strong>Tangent slope:</strong>{" "}
            <Formula>{String.raw`m = f'(x_0)`}</Formula>; parallel lines share <Formula>m</Formula>,
            perpendicular lines satisfy{" "}
            <Formula>{String.raw`m_1m_2 = -1`}</Formula>.
          </li>
          <li>
            <strong>Approximation:</strong> pick the nearest perfect value, compute{" "}
            <Formula>{String.raw`dy = f'(x)\,dx`}</Formula>, add it on. The answer is always slightly
            better than it looks when <Formula>{String.raw`dx`}</Formula> is small.
          </li>
        </ul>
      </SpeedTricks>
    </>
  );
}
