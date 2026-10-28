"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { TableCard } from "@/components/content/data/TableCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function InverseTrigonometricFunctionsChapter() {
  return (
    <>
      <h2 id="h-2-1">2.1 Introduction</h2>
      <Callout type="important">
        <p>
          The <Highlight color="yellow">inverse trigonometric functions</Highlight> allow us to find angles
          corresponding to given trigonometric values. Since trigonometric functions are not one-one and onto
          over their natural domains, we restrict domains/ranges to ensure inverses exist. They are important
          in calculus for defining many integrals.
        </p>
      </Callout>

      <h2 id="h-2-2">2.2 Basic Concepts</h2>
      <p>
        Recall the domains and ranges of the six trigonometric functions studied in Class XI. To define
        inverses, we restrict each to an interval where it is bijective.
      </p>

      <KeyPoint>
        If <Formula>{String.raw`f:X\to Y`}</Formula> is one-one and onto, then <Formula>{String.raw`f^{-1}:Y\to X`}</Formula>{" "}
        exists uniquely with <Formula>{String.raw`(f^{-1}\circ f)(x)=x,\ (f\circ f^{-1})(y)=y`}</Formula>.
      </KeyPoint>

      <h3>Principal value branches and domains/ranges</h3>
      <p>
        For each inverse trigonometric function we choose a <Highlight color="yellow">principal value branch</Highlight>{" "}
        (a particular range of values). The table below gives principal value branches along with domains and ranges.
      </p>

      <TableCard
        title="Principal value branches of inverse trigonometric functions"
        headers={["Function", "Domain", "Range (Principal Value Branch)"]}
        rows={[
          {
            cells: [
              <Formula key="f1">{String.raw`y=\sin^{-1}x`}</Formula>,
              <Formula key="d1">{String.raw`[-1,1]`}</Formula>,
              <Formula key="r1">{String.raw`\left[-\frac{\pi}{2},\frac{\pi}{2}\right]`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="f2">{String.raw`y=\cos^{-1}x`}</Formula>,
              <Formula key="d2">{String.raw`[-1,1]`}</Formula>,
              <Formula key="r2">{String.raw`[0,\pi]`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="f3">{String.raw`y=\operatorname{cosec}^{-1}x`}</Formula>,
              <Formula key="d3">{String.raw`\mathbb{R}-(-1,1)`}</Formula>,
              <Formula key="r3">{String.raw`\left[-\frac{\pi}{2},\frac{\pi}{2}\right]-\{0\}`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="f4">{String.raw`y=\sec^{-1}x`}</Formula>,
              <Formula key="d4">{String.raw`\mathbb{R}-(-1,1)`}</Formula>,
              <Formula key="r4">{String.raw`[0,\pi]-\left\{\frac{\pi}{2}\right\}`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="f5">{String.raw`y=\tan^{-1}x`}</Formula>,
              <Formula key="d5">{String.raw`\mathbb{R}`}</Formula>,
              <Formula key="r5">{String.raw`\left(-\frac{\pi}{2},\frac{\pi}{2}\right)`}</Formula>,
            ],
          },
          {
            cells: [
              <Formula key="f6">{String.raw`y=\cot^{-1}x`}</Formula>,
              <Formula key="d6">{String.raw`\mathbb{R}`}</Formula>,
              <Formula key="r6">{String.raw`(0,\pi)`}</Formula>,
            ],
          },
        ]}
      />

      <Callout type="note">
        <ul>
          <li>
            <Formula>{String.raw`\sin^{-1}x \neq (\sin x)^{-1}=\frac{1}{\sin x}`}</Formula> (similarly for others).
          </li>
          <li>
            If no branch is mentioned, we take the <strong>principal value branch</strong>.
          </li>
          <li>
            A value lying in the principal value branch is called the <strong>principal value</strong>.
          </li>
        </ul>
      </Callout>

      <Expandable title="Examples 1 to 2 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 1:</strong> Find the principal value of <Formula>{String.raw`\sin^{-1}\left(\frac{1}{2}\right)`}</Formula>.
            </p>
            <p>
              <strong>Solution:</strong> Let <Formula>{String.raw`y=\sin^{-1}\left(\frac{1}{2}\right)`}</Formula>. Then <Formula>{String.raw`\sin y=\frac{1}{2}`}</Formula>.
              Range of principal value branch of <Formula>{String.raw`\sin^{-1}`}</Formula> is <Formula>{String.raw`\left[-\frac{\pi}{2},\frac{\pi}{2}\right]`}</Formula>.
              Since <Formula>{String.raw`\sin\frac{\pi}{4}=\frac{1}{2}`}</Formula>, principal value is <Formula>{String.raw`\frac{\pi}{4}`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 2:</strong> Find the principal value of <Formula>{String.raw`\cot^{-1}\left(-\frac{1}{\sqrt{3}}\right)`}</Formula>.
            </p>
            <p>
              <strong>Solution:</strong> Let <Formula>{String.raw`y=\cot^{-1}\left(-\frac{1}{\sqrt{3}}\right)`}</Formula>. Then <Formula>{String.raw`\cot y = -\frac{1}{\sqrt{3}}`}</Formula>.
              Range of principal value branch of <Formula>{String.raw`\cot^{-1}`}</Formula> is <Formula>{String.raw`(0,\pi)`}</Formula>.
              We have <Formula>{String.raw`\cot\frac{2\pi}{3} = -\frac{1}{\sqrt{3}}`}</Formula>. Hence principal value is <Formula>{String.raw`\frac{2\pi}{3}`}</Formula>.
            </p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 2.1 — NCERT">
        <ExerciseQa
          questions={[
            <>
              Find the principal value of <Formula>{String.raw`\sin^{-1}\left(-\frac{1}{2}\right)`}</Formula>.
            </>,
            <>
              Find the principal value of <Formula>{String.raw`\cos^{-1}\left(\frac{\sqrt{3}}{2}\right)`}</Formula>.
            </>,
            <>
              Find the principal value of <Formula>{String.raw`\operatorname{cosec}^{-1}(2)`}</Formula>.
            </>,
            <>
              Find the principal value of <Formula>{String.raw`\tan^{-1}(-\sqrt{3})`}</Formula>.
            </>,
            <>
              Find the principal value of <Formula>{String.raw`\cos^{-1}\left(-\frac{1}{2}\right)`}</Formula>.
            </>,
            <>
              Find the principal value of <Formula>{String.raw`\tan^{-1}(-1)`}</Formula>.
            </>,
            <>
              Find the principal value of <Formula>{String.raw`\sec^{-1}\left(\frac{2}{\sqrt{3}}\right)`}</Formula>.
            </>,
            <>
              Find the principal value of <Formula>{String.raw`\cot^{-1}(\sqrt{3})`}</Formula>.
            </>,
            <>
              Find the principal value of <Formula>{String.raw`\cos^{-1}\left(-\frac{1}{2}\right)`}</Formula> (as given).
            </>,
            <>
              Find the principal value of <Formula>{String.raw`\operatorname{cosec}^{-1}(-\sqrt{2})`}</Formula>.
            </>,
            <>
              Find the value of <Formula>{String.raw`\tan^{-1}(1)+\cos^{-1}\left(-\frac{1}{2}\right)+\sin^{-1}\left(-\frac{1}{2}\right)`}</Formula>.
            </>,
            <>
              Find the value of <Formula>{String.raw`\cos^{-1}\left(\frac{1}{2}\right)+2\sin^{-1}\left(\frac{1}{2}\right)`}</Formula>.
            </>,
            <>
              If <Formula>{String.raw`\sin^{-1}x=y`}</Formula>, then
              <ul>
                <li>(A) <Formula>{String.raw`0\le y\le \pi`}</Formula></li>
                <li>(B) <Formula>{String.raw`-\frac{\pi}{2}\le y\le \frac{\pi}{2}`}</Formula></li>
                <li>(C) <Formula>{String.raw`0<y<\pi`}</Formula></li>
                <li>(D) <Formula>{String.raw`-\frac{\pi}{2}<y<\frac{\pi}{2}`}</Formula></li>
              </ul>
            </>,
            <>
              <Formula>{String.raw`\tan^{-1}\sqrt{3}-\sec^{-1}(-2)`}</Formula> is equal to
              <ul>
                <li>(A) <Formula>{String.raw`\pi`}</Formula></li>
                <li>(B) <Formula>{String.raw`-\frac{\pi}{3}`}</Formula></li>
                <li>(C) <Formula>{String.raw`\frac{\pi}{3}`}</Formula></li>
                <li>(D) <Formula>{String.raw`\frac{2\pi}{3}`}</Formula></li>
              </ul>
            </>,
          ]}
        />
        <Expandable title="Answer Key — Exercise 2.1">
          <ExerciseQa
            questions={[
              <></>,
              <></>,
              <></>,
              <></>,
              <></>,
              <></>,
              <></>,
              <></>,
              <></>,
              <></>,
              <></>,
              <></>,
              <></>,
              <></>,
            ]}
            answers={[
              <>
                <Formula>{String.raw`-\frac{\pi}{6}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`\frac{\pi}{6}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`\frac{\pi}{6}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`-\frac{\pi}{3}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`\frac{2\pi}{3}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`-\frac{\pi}{4}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`\frac{\pi}{6}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`\frac{\pi}{6}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`\frac{2\pi}{3}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`-\frac{\pi}{4}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`\frac{3\pi}{4}`}</Formula>
              </>,
              <>
                <Formula>{String.raw`\pi`}</Formula>
              </>,
              <>
                (B) <Formula>{String.raw`-\frac{\pi}{2}\le y\le \frac{\pi}{2}`}</Formula>
              </>,
              <>
                (B) <Formula>{String.raw`-\frac{\pi}{3}`}</Formula>
              </>,
            ]}
          />
        </Expandable>
      </Expandable>

      <SpeedTricks>
        <ul>
          <li>Always check the principal value range first when finding <Formula>{String.raw`\sin^{-1}/\cos^{-1}/\ldots`}</Formula>.</li>
          <li>For negative arguments use <Formula>{String.raw`\sin^{-1}(-x)=-\sin^{-1}x,\ \tan^{-1}(-x)=-\tan^{-1}x,\ \operatorname{cosec}^{-1}(-x)=-\operatorname{cosec}^{-1}x`}</Formula> and <Formula>{String.raw`\cos^{-1}(-x)=\pi-\cos^{-1}x,\ \sec^{-1}(-x)=\pi-\sec^{-1}x,\ \cot^{-1}(-x)=\pi-\cot^{-1}x`}</Formula> within principal ranges.</li>
        </ul>
      </SpeedTricks>

      <h2 id="h-2-3">2.3 Properties of Inverse Trigonometric Functions</h2>
      <p>
        The following identities hold for suitable values of <Formula>{String.raw`x`}</Formula> in the domain of the
        corresponding principal value branches.
      </p>

      <h3>Basic relations</h3>
      <FormulaCard>
        <div className="space-y-2">
          <div>
            <Formula>{String.raw`\sin\left(\sin^{-1}x\right)=x,\ x\in[-1,1],\quad \sin^{-1}(\sin x)=x,\ x\in\left[-\frac{\pi}{2},\frac{\pi}{2}\right]`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\cos\left(\cos^{-1}x\right)=x,\ x\in[-1,1],\quad \cos^{-1}(\cos x)=x,\ x\in[0,\pi]`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\tan\left(\tan^{-1}x\right)=x,\ x\in\mathbb{R},\quad \tan^{-1}(\tan x)=x,\ x\in\left(-\frac{\pi}{2},\frac{\pi}{2}\right)`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\cot\left(\cot^{-1}x\right)=x,\ x\in\mathbb{R},\quad \cot^{-1}(\cot x)=x,\ x\in(0,\pi)`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\sec\left(\sec^{-1}x\right)=x,\ |x|\ge 1,\quad \sec^{-1}(\sec x)=x,\ x\in[0,\pi]-\left\{\frac{\pi}{2}\right\}`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\operatorname{cosec}\left(\operatorname{cosec}^{-1}x\right)=x,\ |x|\ge 1,\quad \operatorname{cosec}^{-1}(\operatorname{cosec} x)=x,\ x\in\left[-\frac{\pi}{2},\frac{\pi}{2}\right]-\{0\}`}</Formula>
          </div>
        </div>
      </FormulaCard>

      <h3>Reciprocal/complimentary forms</h3>
      <FormulaCard>
        <div className="space-y-2">
          <div>
            <Formula>{String.raw`\sin^{-1}x+\cos^{-1}x=\frac{\pi}{2},\ x\in[-1,1]`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\tan^{-1}x+\cot^{-1}x=\frac{\pi}{2},\ x\in\mathbb{R}`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\sec^{-1}x+\operatorname{cosec}^{-1}x=\frac{\pi}{2},\ |x|\ge 1`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\operatorname{cosec}^{-1}x=\sin^{-1}\left(\frac{1}{x}\right),\ |x|\ge 1`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\sec^{-1}x=\cos^{-1}\left(\frac{1}{x}\right),\ |x|\ge 1`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\cot^{-1}x=\begin{cases} \tan^{-1}\left(\frac{1}{x}\right), & x>0\\[4pt] \pi+\tan^{-1}\left(\frac{1}{x}\right), & x<0\end{cases}`}</Formula>
          </div>
        </div>
      </FormulaCard>

      <h3>Sum/difference and double-angle forms (important)</h3>
      <FormulaCard>
        <div className="space-y-2">
          <div>
            <Formula>{String.raw`\tan^{-1}x+\tan^{-1}y=\tan^{-1}\left(\frac{x+y}{1-xy}\right),\ xy<1`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`\tan^{-1}x-\tan^{-1}y=\tan^{-1}\left(\frac{x-y}{1+xy}\right),\ xy>-1`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`2\tan^{-1}x=\sin^{-1}\left(\frac{2x}{1+x^2}\right)=\cos^{-1}\left(\frac{1-x^2}{1+x^2}\right)=\tan^{-1}\left(\frac{2x}{1-x^2}\right)`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`2\sin^{-1}x=\sin^{-1}\left(2x\sqrt{1-x^2}\right),\ -\frac{1}{2}\le x\le \frac{1}{2}`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`2\cos^{-1}x=\cos^{-1}\left(2x^2-1\right),\ 0\le x\le 1`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`3\sin^{-1}x=\sin^{-1}\left(3x-4x^3\right),\ -\frac{1}{2}\le x\le \frac{1}{2}`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`3\cos^{-1}x=\cos^{-1}\left(4x^3-3x\right),\ \frac{1}{2}\le x\le 1`}</Formula>
          </div>
          <div>
            <Formula>{String.raw`3\tan^{-1}x=\tan^{-1}\left(\frac{3x-x^3}{1-3x^2}\right)`}</Formula>
          </div>
        </div>
      </FormulaCard>

      <Expandable title="Examples 3 to 5 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 3:</strong> Show that (i) <Formula>{String.raw`\sin^{-1}(2x\sqrt{1-x^2})=2\sin^{-1}x,\ -\frac{1}{2}\le x\le \frac{1}{2}`}</Formula> (ii) <Formula>{String.raw`\sin^{-1}(2x\sqrt{1-x^2})=2\cos^{-1}x,\ \frac{1}{2}\le x\le 1`}</Formula>
            </p>
            <p>
              <strong>Solution (outline):</strong> Let <Formula>{String.raw`x=\sin\theta`}</Formula>, then <Formula>{String.raw`2x\sqrt{1-x^2}=2\sin\theta\cos\theta=\sin 2\theta`}</Formula> so value <Formula>{String.raw`2\theta=2\sin^{-1}x`}</Formula> in the appropriate range. For (ii) take <Formula>{String.raw`x=\cos\theta`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 4:</strong> Express <Formula>{String.raw`\tan^{-1}\left(\frac{\cos x - \sin x}{\cos x + \sin x}\right),\ -\frac{\pi}{2}<x<\frac{\pi}{2}`}</Formula> in the simplest form.
            </p>
            <p>
              <strong>Solution:</strong> Divide numerator and denominator by <Formula>{String.raw`\cos x`}</Formula>:
              <FormulaBlock latex={String.raw`\tan^{-1}\left(\frac{1-\tan x}{1+\tan x}\right)=\tan^{-1}\left(\tan\left(\frac{\pi}{4}-x\right)\right)=\frac{\pi}{4}-x`} />
              (valid for the given range).
            </p>
          </div>
          <div>
            <p>
              <strong>Example 5:</strong> Write <Formula>{String.raw`\cot^{-1}\left(\frac{1}{\sqrt{x^2-1}}\right),\ x>1`}</Formula> in the simplest form.
            </p>
            <p>
              <strong>Solution:</strong> Let <Formula>{String.raw`x=\sec\theta,\ \theta\in(0,\pi/2)`}</Formula>. Then <Formula>{String.raw`\sqrt{x^2-1}=\tan\theta`}</Formula>, <Formula>{String.raw`\cot^{-1}(1/\tan\theta)=\cot^{-1}(\cot\theta)=\theta=\sec^{-1}x`}</Formula>.
            </p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 2.2 — NCERT">
        <ExerciseQa
          questions={[
            <>
              Prove: <Formula>{String.raw`3\sin^{-1}x=\sin^{-1}(3x-4x^3),\ x\in\left[-\frac{1}{2},\frac{1}{2}\right]`}</Formula>
            </>,
            <>
              Prove: <Formula>{String.raw`3\cos^{-1}x=\cos^{-1}(4x^3-3x),\ x\in\left[\frac{1}{2},1\right]`}</Formula>
            </>,
            <>
              Write in simplest form: <Formula>{String.raw`\tan^{-1}\frac{1}{\sqrt{x^2-1}},\ x>1`}</Formula>
            </>,
            <>
              Write in simplest form: <Formula>{String.raw`\tan^{-1}\left(\frac{\cos x - \sin x}{\cos x + \sin x}\right),\ 0<x<\pi`}</Formula>
            </>,
            <>
              Write in simplest form: <Formula>{String.raw`\tan^{-1}\frac{\cos x - \sin x}{\cos x + \sin x},\ -\frac{\pi}{4}<x<\frac{3\pi}{4}`}</Formula> (general form)
            </>,
            <>
              Write in simplest form: <Formula>{String.raw`\tan^{-1}\frac{x}{\sqrt{a^2-x^2}},\ |x|<a`}</Formula>
            </>,
            <>
              Write in simplest form: <Formula>{String.raw`\tan^{-1}\left(\frac{3a^2 x - x^3}{a^3 - 3a x^2}\right),\ a>0,\ -\frac{a}{\sqrt{3}}<x<\frac{a}{\sqrt{3}}`}</Formula>
            </>,
            <>
              Find value: <Formula>{String.raw`\tan^{-1}\left[2\cos\left(2\sin^{-1}\frac{1}{2}\right)\right]`}</Formula>
            </>,
            <>
              Find value: <Formula>{String.raw`\tan^{-1}\frac{x}{\sqrt{a^2-x^2}}`}</Formula> related form (as given)
            </>,
            <>
              Find value: <Formula>{String.raw`\sin^{-1}\left(\sin\frac{2\pi}{3}\right)`}</Formula>
            </>,
            <>
              Find value: <Formula>{String.raw`\tan^{-1}\left(\tan\frac{3\pi}{4}\right)`}</Formula>
            </>,
            <>
              Find value: <Formula>{String.raw`\tan^{-1}\left(\sin^{-1}\frac{3}{5}+\cot^{-1}\frac{3}{2}\right)`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\cos^{-1}\left(\cos\frac{7\pi}{6}\right)`}</Formula> is equal to
              <ul>
                <li>(A) <Formula>{String.raw`\frac{7\pi}{6}`}</Formula></li>
                <li>(B) <Formula>{String.raw`\frac{5\pi}{6}`}</Formula></li>
                <li>(C) <Formula>{String.raw`\frac{\pi}{3}`}</Formula></li>
                <li>(D) <Formula>{String.raw`\frac{\pi}{6}`}</Formula></li>
              </ul>
            </>,
            <>
              <Formula>{String.raw`\sin\left(\frac{\pi}{3}-\sin^{-1}\left(-\frac{1}{2}\right)\right)`}</Formula> is equal to
              <ul>
                <li>(A) <Formula>{String.raw`\frac{1}{2}`}</Formula></li>
                <li>(B) <Formula>{String.raw`\frac{1}{3}`}</Formula></li>
                <li>(C) <Formula>{String.raw`\frac{1}{4}`}</Formula></li>
                <li>(D) <Formula>{String.raw`1`}</Formula></li>
              </ul>
            </>,
            <>
              <Formula>{String.raw`\tan^{-1}\sqrt{3}-\cot^{-1}(-\sqrt{3})`}</Formula> is equal to
              <ul>
                <li>(A) <Formula>{String.raw`\pi`}</Formula></li>
                <li>(B) <Formula>{String.raw`-\frac{\pi}{2}`}</Formula></li>
                <li>(C) <Formula>{String.raw`0`}</Formula></li>
                <li>(D) <Formula>{String.raw`2\sqrt{3}`}</Formula></li>
              </ul>
            </>,
          ]}
        />
        <Expandable title="Answer Key — Exercise 2.2">
          <ExerciseQa
            questions={[<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>]}
            answers={[
              <>Proved</>,
              <>Proved</>,
              <><Formula>{String.raw`\frac{\pi}{2}-\operatorname{cosec}^{-1}x`}</Formula> / <Formula>{String.raw`\sec^{-1}x`}</Formula> in simplest form as appropriate</>,
              <><Formula>{String.raw`\frac{\pi}{4}-x`}</Formula></>,
              <><Formula>{String.raw`\frac{\pi}{4}-x`}</Formula> (with range care)</>,
              <><Formula>{String.raw`\sin^{-1}\frac{x}{a}`}</Formula></>,
              <><Formula>{String.raw`3\tan^{-1}\frac{x}{a}`}</Formula></>,
              <><Formula>{String.raw`\frac{\pi}{4}`}</Formula></>,
              <>As given</>,
              <><Formula>{String.raw`\frac{\pi}{3}`}</Formula></>,
              <><Formula>{String.raw`-\frac{\pi}{4}`}</Formula></>,
              <><Formula>{String.raw`\frac{17}{6}`}</Formula></>,
              <>(B) <Formula>{String.raw`\frac{5\pi}{6}`}</Formula></>,
              <>(D) <Formula>{String.raw`1`}</Formula></>,
              <>(B) <Formula>{String.raw`-\frac{\pi}{2}`}</Formula></>,
            ]}
          />
        </Expandable>
      </Expandable>

      <SpeedTricks>
        <ul>
          <li>Use <Formula>{String.raw`\tan^{-1}x+\tan^{-1}y`}</Formula> carefully: add <Formula>{String.raw`\pi`}</Formula> if <Formula>{String.raw`xy>1, x>0,y>0`}</Formula> (principal value adjustment).</li>
          <li>Convert to sine/cosine form to simplify expressions like <Formula>{String.raw`\frac{\cos x-\sin x}{\cos x+\sin x}`}</Formula>.</li>
          <li>For <Formula>{String.raw`\sin^{-1}(\sin\theta), \cos^{-1}(\cos\theta)`}</Formula> bring <Formula>{String.raw`\theta`}</Formula> into the principal range first.</li>
        </ul>
      </SpeedTricks>

      <h2 id="h-2-misc">Miscellaneous Examples</h2>
      <Expandable title="Examples 6 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 6:</strong> Find the value of <Formula>{String.raw`\sin^{-1}\left(\sin\frac{3\pi}{5}\right)`}</Formula>.
            </p>
            <p>
              <strong>Solution:</strong> <Formula>{String.raw`\frac{3\pi}{5}=\pi-\frac{2\pi}{5}\notin\left[-\frac{\pi}{2},\frac{\pi}{2}\right]`}</Formula>. But <Formula>{String.raw`\sin\frac{3\pi}{5}=\sin\frac{2\pi}{5}`}</Formula> and <Formula>{String.raw`\frac{2\pi}{5}\in\left[-\frac{\pi}{2},\frac{\pi}{2}\right]`}</Formula>. Thus <Formula>{String.raw`\sin^{-1}\left(\sin\frac{3\pi}{5}\right)=\frac{2\pi}{5}`}</Formula>.
            </p>
          </div>
        </div>
      </Expandable>

      <h2 id="h-2-misc-ex">Miscellaneous Exercise on Chapter 2</h2>
      <Expandable title="Miscellaneous Exercise — NCERT">
        <ExerciseQa
          questions={[
            <>
              Find value: <Formula>{String.raw`\cos^{-1}\left(\cos\frac{13\pi}{6}\right)`}</Formula>
            </>,
            <>
              Find value: <Formula>{String.raw`\tan^{-1}\left(\tan\frac{7\pi}{6}\right)`}</Formula>
            </>,
            <>
              Prove: <Formula>{String.raw`2\sin^{-1}\frac{3}{5}=\tan^{-1}\frac{24}{7}`}</Formula>
            </>,
            <>
              Prove: <Formula>{String.raw`\sin^{-1}\frac{8}{17}+\sin^{-1}\frac{3}{5}=\tan^{-1}\frac{77}{36}`}</Formula>
            </>,
            <>
              Prove: <Formula>{String.raw`\cos^{-1}\frac{4}{5}+\cos^{-1}\frac{12}{13}=\cos^{-1}\frac{33}{65}`}</Formula>
            </>,
            <>
              Prove: <Formula>{String.raw`\cos^{-1}\frac{12}{13}+\sin^{-1}\frac{3}{5}=\sin^{-1}\frac{56}{65}`}</Formula>
            </>,
            <>
              Prove: <Formula>{String.raw`\tan^{-1}\frac{63}{16}=\sin^{-1}\frac{5}{13}+\cos^{-1}\frac{3}{5}`}</Formula>
            </>,
            <>
              Prove: <Formula>{String.raw`\tan^{-1}\frac{1}{2}+\tan^{-1}\frac{1}{3}=\frac{\pi}{4}`}</Formula>
            </>,
            <>
              Prove: <Formula>{String.raw`2\tan^{-1}\frac{1}{2}+\tan^{-1}\frac{1}{7}=\tan^{-1}\frac{31}{17}`}</Formula>
            </>,
            <>
              Prove: <Formula>{String.raw`\tan^{-1}\frac{1-x}{1+x}=\frac{1}{2}\tan^{-1}x,\ x\ge 0`}</Formula>
            </>,
            <>
              Solve: <Formula>{String.raw`2\tan^{-1}(\cos x)=\tan^{-1}(2\operatorname{cosec} x)`}</Formula>
            </>,
            <>
              Solve: <Formula>{String.raw`\tan^{-1}\frac{1-x}{1+x}=\frac{1}{2}\tan^{-1}x`}</Formula>
            </>,
            <>
              <Formula>{String.raw`\sin(\tan^{-1}x),\ |x|<1`}</Formula> is equal to
              <ul>
                <li>(A) <Formula>{String.raw`\frac{x}{\sqrt{1-x^2}}`}</Formula></li>
                <li>(B) <Formula>{String.raw`\frac{1}{\sqrt{1-x^2}}`}</Formula></li>
                <li>(C) <Formula>{String.raw`\frac{1}{\sqrt{1+x^2}}`}</Formula></li>
                <li>(D) <Formula>{String.raw`\frac{x}{\sqrt{1+x^2}}`}</Formula></li>
              </ul>
            </>,
            <>
              If <Formula>{String.raw`\sin^{-1}(1-x)-2\sin^{-1}x=\frac{\pi}{2}`}</Formula>, then <Formula>{String.raw`x`}</Formula> is
              <ul>
                <li>(A) <Formula>{String.raw`0,\frac{1}{2}`}</Formula></li>
                <li>(B) <Formula>{String.raw`1,\frac{1}{2}`}</Formula></li>
                <li>(C) <Formula>{String.raw`0`}</Formula></li>
                <li>(D) <Formula>{String.raw`\frac{1}{2}`}</Formula></li>
              </ul>
            </>,
          ]}
        />
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ExerciseQa
            questions={[<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>,<></>]}
            answers={[
              <><Formula>{String.raw`\frac{\pi}{6}`}</Formula></>,
              <><Formula>{String.raw`-\frac{5\pi}{6}`}</Formula></>,
              <>Proved</>,
              <>Proved</>,
              <>Proved</>,
              <>Proved</>,
              <>Proved</>,
              <>Proved</>,
              <>Proved</>,
              <>Proved</>,
              <><Formula>{String.raw`x=\frac{\pi}{4}`}</Formula></>,
              <><Formula>{String.raw`x=\frac{1}{\sqrt{3}}`}</Formula></>,
              <>(D) <Formula>{String.raw`\frac{x}{\sqrt{1+x^2}}`}</Formula></>,
              <>(C) <Formula>{String.raw`0`}</Formula></>,
            ]}
          />
        </Expandable>
      </Expandable>

      <SpeedTricks>
        <ul>
          <li>For <Formula>{String.raw`\sin^{-1}(\sin x), \cos^{-1}(\cos x), \tan^{-1}(\tan x)`}</Formula> always reduce <Formula>{String.raw`x`}</Formula> to principal interval.</li>
          <li>Use substitution <Formula>{String.raw`x=\tan\alpha, x=\sin\alpha, x=\cos\alpha, x=\sec\alpha`}</Formula> to simplify ratios.</li>
          <li>Group terms: <Formula>{String.raw`\sin^{-1}A+\cos^{-1}B, \tan^{-1}A+\tan^{-1}B`}</Formula> often combine via addition formulas.</li>
        </ul>
      </SpeedTricks>
    </>
  );
}
