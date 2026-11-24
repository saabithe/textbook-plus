/*
 * VectorProblemCards — three numbered problem-type cards for Vector Algebra
 * revision. Each card keeps its Problem Type, Method and Final Answer visible;
 * the worked solution is collapsed by default via Expandable.
 * Purely presentational: no hooks, no "use client", no external libraries.
 */

import type { ReactNode } from "react";

import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";

const ACCENT = "var(--subject-mathematics)";

const tones = {
  accent:
    "border-[color-mix(in_oklab,var(--subject-mathematics)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-mathematics)_7%,transparent)]",
  emerald: "border-emerald-600/40 bg-emerald-50/60 dark:bg-emerald-950/20",
  sky: "border-sky-600/40 bg-sky-50/60 dark:bg-sky-950/20",
} as const;

type Tone = keyof typeof tones;

/** One numbered problem type: Type → Method → collapsed Worked Solution → Final Answer. */
function ProblemTypeCard({
  number,
  title,
  method,
  answer,
  children,
}: {
  number: number;
  title: string;
  method: ReactNode;
  answer: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="space-y-5 p-4 sm:p-6">
        <div>
          <p className="t-micro mb-2">Problem Type</p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span
              className="rounded-lg border px-2 py-0.5 text-[0.68rem] font-extrabold uppercase tracking-wider"
              style={{
                color: ACCENT,
                borderColor: "color-mix(in oklab, var(--subject-mathematics) 30%, transparent)",
                backgroundColor: "color-mix(in oklab, var(--subject-mathematics) 7%, transparent)",
              }}
            >
              Type {number}
            </span>
            <span className="text-base font-extrabold tracking-tight text-foreground">
              {title}
            </span>
          </div>
        </div>

        <div>
          <p className="t-micro mb-2">Method</p>
          <div className="text-[0.95rem] leading-[1.7] text-foreground/85">{method}</div>
        </div>

        <div>
          <p className="t-micro mb-2">Worked Solution</p>
          <Expandable title="Worked solution" variant="example" subjectColor={ACCENT}>
            {children}
          </Expandable>
        </div>
      </div>

      <div className="border-t border-border/60 bg-muted/20 px-4 py-4 sm:px-6">
        <div
          className="rounded-xl border px-4 py-3"
          style={{
            borderColor: "color-mix(in oklab, var(--subject-mathematics) 30%, transparent)",
            backgroundColor: "color-mix(in oklab, var(--subject-mathematics) 7%, transparent)",
          }}
        >
          <p className="t-micro">FINAL ANSWER</p>
          <div className="mt-2 space-y-3 overflow-x-auto text-base font-extrabold leading-snug text-foreground">
            {answer}
          </div>
        </div>
      </div>
    </article>
  );
}

/** Ordered method steps, each on its own line. */
function MethodList({ steps }: { steps: ReactNode[] }) {
  return (
    <ol className="space-y-2">
      {steps.map((step, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[0.7rem] font-extrabold"
            style={{
              color: ACCENT,
              borderColor: "color-mix(in oklab, var(--subject-mathematics) 30%, transparent)",
              backgroundColor: "color-mix(in oklab, var(--subject-mathematics) 7%, transparent)",
            }}
          >
            {index + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

/** A single labelled stage inside a worked solution. */
function Stage({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border/50 bg-muted/20 p-4 sm:p-5">
      <p className="t-micro mb-3">{label}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

/** One formula per row, never two on a line. */
function MathRow({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto text-[1rem] font-semibold leading-relaxed text-foreground">
      {children}
    </div>
  );
}

/** Tinted highlighted result, used both inside solutions and in answer strips. */
function AnswerBox({
  label,
  latex,
  tone = "accent",
}: {
  label: string;
  latex: string;
  tone?: Tone;
}) {
  return (
    <div className={`rounded-xl border px-4 py-3 text-center ${tones[tone]}`}>
      <p className="t-micro mb-2">{label}</p>
      <div className="overflow-x-auto text-lg font-extrabold leading-snug text-foreground">
        <Formula>{latex}</Formula>
      </div>
    </div>
  );
}

/** Magnitude 7 called out in the worked example statement. */
function MagnitudePill() {
  return (
    <span className="mx-0.5 inline-flex rounded-md border border-amber-500/40 bg-amber-100/70 px-1.5 py-0.5 align-baseline text-[0.9rem] font-extrabold text-amber-900 dark:bg-amber-900/30 dark:text-amber-100">
      <Formula>{String.raw`7`}</Formula>
    </span>
  );
}

export function VectorProblemCards() {
  return (
    <section className="my-6 rounded-2xl border-y border-border/60 bg-muted/25 px-4 py-6 sm:px-6 sm:py-8">
      <div className="space-y-8">
        <ProblemTypeCard
          number={1}
          title="Vector Operations in Component Form"
          method={
            <p>Perform addition or subtraction on corresponding scalar components.</p>
          }
          answer={
            <div className="grid gap-3 sm:grid-cols-2">
              <AnswerBox label="(1)" latex={String.raw`\boxed{-\hat i+2\hat j+6\hat k}`} />
              <AnswerBox label="(2)" latex={String.raw`\boxed{8\hat i-16\hat j-13\hat k}`} />
            </div>
          }
        >
          <div className="space-y-6">
            <Stage label="Given:">
              <MathRow>
                <Formula>{String.raw`\vec a=\hat i-2\hat j+\hat k`}</Formula>
              </MathRow>
              <MathRow>
                <Formula>{String.raw`\vec b=-2\hat i+4\hat j+5\hat k`}</Formula>
              </MathRow>
              <p className="pt-2 text-[0.95rem] leading-relaxed text-foreground/85">Find:</p>
              <MathRow>
                <span className="mr-2 font-extrabold" style={{ color: ACCENT }}>
                  (1)
                </span>
                <Formula>{String.raw`\vec a+\vec b`}</Formula>
              </MathRow>
              <MathRow>
                <span className="mr-2 font-extrabold" style={{ color: ACCENT }}>
                  (2)
                </span>
                <Formula>{String.raw`2\vec a-3\vec b`}</Formula>
              </MathRow>
            </Stage>

            <Stage label="Part A — Addition">
              <FormulaBlock
                latex={String.raw`\begin{aligned} \vec a+\vec b &=(1-2)\hat i\\ &\quad+(-2+4)\hat j\\ &\quad+(1+5)\hat k \end{aligned}`}
              />
              <AnswerBox label="Result (1)" latex={String.raw`\boxed{-\hat i+2\hat j+6\hat k}`} />
            </Stage>

            <Stage label="Part B — Scalar multiplication and subtraction">
              <p className="t-micro">Scale each vector</p>
              <MathRow>
                <Formula>{String.raw`2\vec a=2\hat i-4\hat j+2\hat k`}</Formula>
              </MathRow>
              <MathRow>
                <Formula>{String.raw`3\vec b=-6\hat i+12\hat j+15\hat k`}</Formula>
              </MathRow>
              <FormulaBlock
                latex={String.raw`\begin{aligned} 2\vec a-3\vec b &=(2+6)\hat i\\ &\quad+(-4-12)\hat j\\ &\quad+(2-15)\hat k \end{aligned}`}
              />
              <AnswerBox label="Result (2)" latex={String.raw`\boxed{8\hat i-16\hat j-13\hat k}`} />
            </Stage>
          </div>
        </ProblemTypeCard>

        <ProblemTypeCard
          number={2}
          title="Finding a Vector with Specified Magnitude and Direction"
          method={
            <MethodList
              steps={[
                "Calculate the magnitude of the given vector.",
                "Find its unit vector.",
                "Multiply the unit vector by the required magnitude.",
              ]}
            />
          }
          answer={
            <AnswerBox
              label="Required vector"
              latex={String.raw`\boxed{ \frac{\sqrt{14}}{2} (2\hat i+3\hat j-\hat k) }`}
            />
          }
        >
          <div className="space-y-6">
            <Stage label="Standard Example">
              <p className="text-[0.95rem] leading-relaxed text-foreground/85">
                Find a vector of magnitude <MagnitudePill /> in the direction of:
              </p>
              <MathRow>
                <Formula>{String.raw`\vec a=2\hat i+3\hat j-\hat k`}</Formula>
              </MathRow>
            </Stage>

            <Stage label="Step 1 — Calculate magnitude">
              <MathRow>
                <Formula>{String.raw`|\vec a|=\sqrt{2^2+3^2+(-1)^2}`}</Formula>
              </MathRow>
              <MathRow>
                <Formula>{String.raw`=\sqrt{4+9+1}=\sqrt{14}`}</Formula>
              </MathRow>
            </Stage>

            <Stage label="Step 2 — Find the required vector">
              <MathRow>
                <Formula>{String.raw`\text{Required vector}=7\hat a`}</Formula>
              </MathRow>
              <MathRow>
                <Formula>{String.raw`=\frac{7}{\sqrt{14}} (2\hat i+3\hat j-\hat k)`}</Formula>
              </MathRow>
            </Stage>

            <Stage label="Step 3 — Simplify">
              <AnswerBox
                label="Final answer"
                latex={String.raw`\boxed{ \frac{\sqrt{14}}{2} (2\hat i+3\hat j-\hat k) }`}
              />
            </Stage>
          </div>
        </ProblemTypeCard>

        <ProblemTypeCard
          number={3}
          title="Section Formula Division Problems"
          method={
            <MethodList
              steps={[
                <>
                  Identify the position vectors <Formula>{String.raw`\vec a`}</Formula> and{" "}
                  <Formula>{String.raw`\vec b`}</Formula> of the given points.
                </>,
                <>
                  Identify the division ratio <Formula>{String.raw`m:n`}</Formula>.
                </>,
                "Determine whether division is internal or external.",
                "Apply the corresponding section formula.",
              ]}
            />
          }
          answer={
            <div className="space-y-3">
              <AnswerBox
                label="Internal"
                latex={String.raw`\boxed{ \vec r=-\frac13\hat i+ \frac43\hat j+\frac13\hat k }`}
                tone="emerald"
              />
              <AnswerBox
                label="External"
                latex={String.raw`\boxed{\vec r=-3\hat i+3\hat k}`}
                tone="sky"
              />
            </div>
          }
        >
          <div className="space-y-6">
            <Stage label="Standard Example">
              <p className="text-[0.95rem] leading-relaxed text-foreground/85">
                Find the position vector of point R, dividing the line segment joining:
              </p>
              <MathRow>
                <Formula>{String.raw`P(1,2,-1)`}</Formula>
              </MathRow>
              <MathRow>
                <Formula>{String.raw`Q(-1,1,1)`}</Formula>
              </MathRow>
              <p className="text-[0.95rem] leading-relaxed text-foreground/85">
                in the ratio <Formula>{String.raw`2:1`}</Formula>:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-[0.95rem] leading-relaxed text-foreground/85">
                <li>Internally</li>
                <li>Externally</li>
              </ul>
              <p className="t-micro mt-2">Step 1 — Identify position vectors</p>
              <p className="text-[0.95rem] leading-relaxed text-foreground/85">
                <strong>For P(1,2,-1):</strong>
              </p>
              <MathRow>
                <Formula>{String.raw`\vec a=\hat i+2\hat j-\hat k`}</Formula>
              </MathRow>
              <p className="text-[0.95rem] leading-relaxed text-foreground/85">
                <strong>For Q(-1,1,1):</strong>
              </p>
              <MathRow>
                <Formula>{String.raw`\vec b=-\hat i+\hat j+\hat k`}</Formula>
              </MathRow>
              <p className="text-[0.95rem] leading-relaxed text-foreground/85">
                <strong>Given:</strong>
              </p>
              <MathRow>
                <Formula>{String.raw`m=2,\qquad n=1`}</Formula>
              </MathRow>
            </Stage>

            <div className="rounded-2xl border border-emerald-600/30 bg-emerald-50/25 p-4 sm:p-5 dark:bg-emerald-950/10">
              <p className="t-micro mb-4 text-emerald-800 dark:text-emerald-300">
                Part A — Internal Division
              </p>
              <div className="space-y-5">
                <Stage label="Formula:">
                  <MathRow>
                    <Formula>{String.raw`\vec r=\frac{m\vec b+n\vec a}{m+n}`}</Formula>
                  </MathRow>
                </Stage>
                <Stage label="Substitution:">
                  <MathRow>
                    <Formula>
                      {String.raw`\vec r= \frac{ 2(-\hat i+\hat j+\hat k) +(\hat i+2\hat j-\hat k) }{2+1}`}
                    </Formula>
                  </MathRow>
                </Stage>
                <Stage label="Simplification:">
                  <MathRow>
                    <Formula>{String.raw`=\frac{-\hat i+4\hat j+\hat k}{3}`}</Formula>
                  </MathRow>
                </Stage>
                <AnswerBox
                  label="Internal — final answer"
                  latex={String.raw`\boxed{ \vec r=-\frac13\hat i+ \frac43\hat j+\frac13\hat k }`}
                  tone="emerald"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-sky-600/30 bg-sky-50/25 p-4 sm:p-5 dark:bg-sky-950/10">
              <p className="t-micro mb-4 text-sky-800 dark:text-sky-300">
                Part B — External Division
              </p>
              <div className="space-y-5">
                <Stage label="Formula:">
                  <MathRow>
                    <Formula>{String.raw`\vec r=\frac{m\vec b-n\vec a}{m-n}`}</Formula>
                  </MathRow>
                </Stage>
                <Stage label="Substitution:">
                  <MathRow>
                    <Formula>
                      {String.raw`\vec r= \frac{ 2(-\hat i+\hat j+\hat k) -(\hat i+2\hat j-\hat k) }{2-1}`}
                    </Formula>
                  </MathRow>
                </Stage>
                <Stage label="Simplification:">
                  <MathRow>
                    <Formula>{String.raw`=\frac{-3\hat i+0\hat j+3\hat k}{1}`}</Formula>
                  </MathRow>
                </Stage>
                <AnswerBox
                  label="External — final answer"
                  latex={String.raw`\boxed{\vec r=-3\hat i+3\hat k}`}
                  tone="sky"
                />
              </div>
            </div>
          </div>
        </ProblemTypeCard>
      </div>
    </section>
  );
}
