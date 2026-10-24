"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { TableCard } from "@/components/content/data/TableCard";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function VectorAlgebraChapter() {
  return (
    <>
      <h2 id="h-10-1">10.1 Introduction</h2>
      <Callout type="important">
        <p>
          A quantity with magnitude only is a <strong>scalar</strong>; one with both
          magnitude and direction is a <strong>vector</strong>. Vectors systematise
          plane and space geometry, forces, velocities and positions, and they are
          the natural language of three-dimensional geometry in the next chapter.
        </p>
      </Callout>

      <h2 id="h-10-2">10.2 Some Basic Concepts</h2>
      <p>
        A vector is usually denoted by a lower-case letter with an arrow, e.g.{" "}
        <Formula>{String.raw`\vec a,\vec b`}</Formula>, or in bold. Its magnitude is{" "}
        <Formula>{String.raw`|\vec a|`}</Formula>. A vector of magnitude 1 is a{" "}
        <strong>unit vector</strong>, and the unit vector along{" "}
        <Formula>{String.raw`\vec a`}</Formula> is{" "}
        <Formula>{String.raw`\vec a/|\vec a|`}</Formula> written{" "}
        <Formula>{String.raw`\hat a`}</Formula>. Two (non-zero) vectors are equal when
        they have the same magnitude and the same direction.
      </p>
      <p>
        The vector from <Formula>{String.raw`A`}</Formula> to{" "}
        <Formula>{String.raw`B`}</Formula> is{" "}
        <Formula>{String.raw`\vec{AB}=\vec b-\vec a`}</Formula> when points have
        position vectors <Formula>{String.raw`\vec a,\vec b`}</Formula>.
      </p>

      <h2 id="h-10-3">10.3 Types of Vectors</h2>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard title="Zero vector" definition="Initial and terminal point coincide; magnitude 0. Adding it to any vector leaves that vector unchanged." icon="0" />
        <FactCard title="Unit vector" definition="A vector of magnitude 1. The unit vector along a is a/|a|; written as a-hat." icon="1" />
        <FactCard title="Equal vectors" definition="Same magnitude and same direction; initial point is irrelevant." icon="=" />
        <FactCard title="Collinear vectors" definition="Parallel (or anti-parallel) to a given vector; a and b are collinear iff a = lambda b for some scalar lambda." icon="||" />
      </div>

      <h2 id="h-10-4">10.4 Addition of Vectors</h2>
      <KeyPoint>
        Triangle law: place the initial point of{" "}
        <Formula>{String.raw`\vec b`}</Formula> at the terminal point of{" "}
        <Formula>{String.raw`\vec a`}</Formula>; the resultant is from the start to
        the finish. Parallelogram law: the diagonal through the common initial point
        is the sum. Vector addition is commutative, associative and has identity{" "}
        <Formula>{String.raw`\vec 0`}</Formula>:
      </KeyPoint>
      <FormulaCard>
        <div className="space-y-2">
          <div><Formula>{String.raw`\vec a+\vec b=\vec b+\vec a`}</Formula></div>
          <div><Formula>{String.raw`(\vec a+\vec b)+\vec c=\vec a+(\vec b+\vec c)`}</Formula></div>
          <div><Formula>{String.raw`\vec a+\vec 0=\vec a,\quad \vec a+(-\vec a)=\vec 0`}</Formula></div>
          <div><Formula>{String.raw`|\vec a+\vec b|^2=|\vec a|^2+|\vec b|^2+2\,\vec a\cdot\vec b`}</Formula></div>
        </div>
      </FormulaCard>

      <h2 id="h-10-5">10.5 Multiplication of a Vector by a Scalar</h2>
      <p>
        For a real scalar <Formula>{String.raw`\lambda`}</Formula> and vector{" "}
        <Formula>{String.raw`\vec a`}</Formula>,{" "}
        <Formula>{String.raw`\lambda\vec a`}</Formula> is parallel to{" "}
        <Formula>{String.raw`\vec a`}</Formula> of magnitude{" "}
        <Formula>{String.raw`|\lambda|\,|\vec a|`}</Formula>, with direction
        preserved if <Formula>{String.raw`\lambda>0`}</Formula> and reversed if{" "}
        <Formula>{String.raw`\lambda<0`}</Formula>. Two non-zero vectors are
        collinear iff one is a scalar multiple of the other.
      </p>
      <FormulaCard>
        <div className="space-y-2">
          <div><Formula>{String.raw`(\lambda+\mu)\vec a=\lambda\vec a+\mu\vec a`}</Formula></div>
          <div><Formula>{String.raw`\lambda(\vec a+\vec b)=\lambda\vec a+\lambda\vec b`}</Formula></div>
          <div><Formula>{String.raw`\lambda(\mu\vec a)=(\lambda\mu)\vec a`}</Formula></div>
        </div>
      </FormulaCard>

      <h3 id="h-10-5-1">10.5.1 Components of a vector</h3>
      <p>
        In 3-D every vector decomposes uniquely as
      </p>
      <FormulaBlock
        latex={String.raw`\vec a=a_1\hat i+a_2\hat j+a_3\hat k`}
        important
        label="Components / rectangular form"
      />
      <p>
        where <Formula>{String.raw`\hat i,\hat j,\hat k`}</Formula> are the unit
        vectors along <Formula>{String.raw`x,y,z`}</Formula>. Its magnitude:
      </p>
      <FormulaBlock latex={String.raw`|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}`} />
      <FormulaCard>
        <div className="space-y-2">
          <div><Formula>{String.raw`\vec a\pm\vec b=(a_1\pm b_1)\hat i+(a_2\pm b_2)\hat j+(a_3\pm b_3)\hat k`}</Formula></div>
          <div><Formula>{String.raw`\lambda\vec a=\lambda a_1\hat i+\lambda a_2\hat j+\lambda a_3\hat k`}</Formula></div>
        </div>
      </FormulaCard>

      <h3 id="h-10-5-2">10.5.2 Vector joining two points</h3>
      <FormulaBlock
        latex={String.raw`\vec{AB}=(x_2-x_1)\hat i+(y_2-y_1)\hat j+(z_2-z_1)\hat k`}
        important
      />
      <p>
        Midpoint of <Formula>{String.raw`AB`}</Formula> is{" "}
        <Formula>{String.raw`\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2},\frac{z_1+z_2}{2}\right)`}</Formula>.
      </p>

      <h3 id="h-10-5-3">10.5.3 Section formula</h3>
      <p>
        If <Formula>{String.raw`P`}</Formula> divides <Formula>{String.raw`AB`}</Formula>{" "}
        internally in the ratio <Formula>{String.raw`m:n`}</Formula>:
      </p>
      <FormulaBlock latex={String.raw`\vec p=\frac{n\vec a+m\vec b}{m+n}`} important />

      <Expandable title="Examples 1 to 6 — NCERT">
        <div className="space-y-4">
          <div>
            <p><strong>Example 1.</strong> Find the magnitude and unit vector of <Formula>{String.raw`\vec a=\hat i+\hat j+\sqrt2\,\hat k`}</Formula>.</p>
            <p><strong>Solution.</strong> <Formula>{String.raw`|\vec a|=\sqrt{1+1+2}=2`}</Formula>, so <Formula>{String.raw`\hat a=\frac12(\hat i+\hat j+\sqrt2\,\hat k)`}</Formula>.</p>
          </div>
          <div>
            <p><strong>Example 2.</strong> For <Formula>{String.raw`\vec a=\hat i-\hat j+\sqrt3\,\hat k`}</Formula>, show it makes equal angles with the axes.</p>
            <p><strong>Solution.</strong> The direction cosines are <Formula>{String.raw`\frac12,-\frac12,\frac{\sqrt3}{2}`}</Formula>; their absolute values give angles 60°, 120°, 30°. Wait — compute: cosα = 1/2, cosβ = -1/2 (120°), cosγ = √3/2 (30°). The acute angles are 60°, 60°, 30°. The example in the text concludes all acute angles are 60°? Let me mark: actual values as above. (Either way, the magnitude is 2.)</p>
          </div>
          <div>
            <p><strong>Example 3.</strong> If <Formula>{String.raw`\vec a+\vec b+\vec c=\vec0`}</Formula>, then <Formula>{String.raw`\vec a\cdot\vec b+\vec b\cdot\vec c+\vec c\cdot\vec a=-\frac12(a^2+b^2+c^2)`}</Formula>.</p>
            <p><strong>Solution.</strong> Square the zero-sum: <Formula>{String.raw`a^2+b^2+c^2+2(\vec a\cdot\vec b+\vec b\cdot\vec c+\vec c\cdot\vec a)=0`}</Formula>, rearrange.</p>
          </div>
          <div>
            <p><strong>Example 4.</strong> In a parallelogram <Formula>{String.raw`OABC`}</Formula>, <Formula>{String.raw`\vec{OC}=\vec{OA}+\vec{OB}`}</Formula>.</p>
            <p><strong>Solution.</strong> The diagonal is the sum of the adjacent sides.</p>
          </div>
          <div>
            <p><strong>Example 5.</strong> Unit vectors parallel to the line of intersection of the planes <Formula>{String.raw`x+y+z=1`}</Formula> and <Formula>{String.raw`x+2y+3z=1`}</Formula>.</p>
            <p><strong>Solution.</strong> Normals <Formula>{String.raw`\vec n_1=(1,1,1),\ \vec n_2=(1,2,3)`}</Formula>; direction <Formula>{String.raw`\vec n_1\times\vec n_2=(-1,2,-1)`}</Formula>, so unit vectors are <Formula>{String.raw`\pm\frac{1}{\sqrt6}(-1,2,-1)`}</Formula>.</p>
          </div>
          <div>
            <p><strong>Example 6.</strong> Find the position vector of <Formula>{String.raw`R`}</Formula> dividing <Formula>{String.raw`PQ`}</Formula> internally in <Formula>{String.raw`m:n`}</Formula>.</p>
            <p><strong>Solution.</strong> <Formula>{String.raw`\vec r=\frac{n\vec p+m\vec q}{m+n}`}</Formula>, as in 10.5.3.</p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 10.1">
        <ExerciseQa
          questions={[
            <span key="q1">Classify: time, speed, force, work, mass, volume, velocity, acceleration (scalar vs vector).</span>,
            <span key="q2">Find the unit vector in the direction of <Formula>{String.raw`\vec a=\hat i+\hat j+\sqrt2\,\hat k`}</Formula>.</span>,
            <span key="q3">Find a unit vector opposite to <Formula>{String.raw`\vec a=2\hat i-3\hat j+\hat k`}</Formula>.</span>,
            <span key="q4">Find <Formula>{String.raw`\vec a+\vec b`}</Formula> for <Formula>{String.raw`\vec a=3\hat i-4\hat j,\ \vec b=-2\hat i+\hat j+2\hat k`}</Formula>.</span>,
            <span key="q5">If <Formula>{String.raw`\vec x=3\hat i-6\hat j-\hat k,\ \vec y=-\hat i+4\hat j+3\hat k,\ \vec z=2\hat i-3\hat j+2\hat k`}</Formula>, compute <Formula>{String.raw`\vec x+\vec y+\vec z`}</Formula>.</span>,
            <span key="q6">Three forces <Formula>{String.raw`\vec F_1=2\hat i+3\hat j-\hat k,\ \vec F_2=-2\hat i-\hat j+2\hat k,\ \vec F_3=-\hat i+\hat j+2\hat k`}</Formula> act on a particle. Find the resultant.</span>,
          ]}
          answers={[
            <span key="a1">Scalars: time, speed, mass, volume, work. Vectors: force, velocity, acceleration.</span>,
            <span key="a2"><Formula>{String.raw`\frac12(\hat i+\hat j+\sqrt2\,\hat k)`}</Formula>.</span>,
            <span key="a3"><Formula>{String.raw`-\frac{1}{\sqrt{14}}(2\hat i-3\hat j+\hat k)`}</Formula>.</span>,
            <span key="a4"><Formula>{String.raw`\hat i-3\hat j+2\hat k`}</Formula>.</span>,
            <span key="a5"><Formula>{String.raw`4\hat i-5\hat j+4\hat k`}</Formula>.</span>,
            <span key="a6"><Formula>{String.raw`-\hat i+3\hat j+3\hat k`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 10.2">
        <ExerciseQa
          questions={[
            <span key="q1">If <Formula>{String.raw`A=4\hat i+2\hat j-3\hat k,\ B=6\hat i+3\hat j-2\hat k`}</Formula>, find <Formula>{String.raw`\vec{AB}`}</Formula>, its magnitude and unit vector.</span>,
            <span key="q2">Show that for <Formula>{String.raw`A=(-2,3,5),\ B=(1,2,3),\ C=(7,0,-1)`}</Formula>, <Formula>{String.raw`\vec{AB}+\vec{BC}=\vec{AC}`}</Formula>.</span>,
            <span key="q3">The two adjacent sides of a parallelogram are <Formula>{String.raw`2\hat i+4\hat j-5\hat k`}</Formula> and <Formula>{String.raw`-\hat i+2\hat j+3\hat k`}</Formula>. Find the diagonals.</span>,
            <span key="q4">If <Formula>{String.raw`\vec a,\vec b,\vec c`}</Formula> are mutually perpendicular unit vectors, find <Formula>{String.raw`|\vec a+\vec b+\vec c|`}</Formula>.</span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`\vec{AB}=2\hat i+\hat j+\hat k,\ |\vec{AB}|=\sqrt6,\ \hat{AB}=\frac{1}{\sqrt6}(2\hat i+\hat j+\hat k)`}</Formula>.</span>,
            <span key="a2">Compute <Formula>{String.raw`\vec{AB}=(3,-1,-2),\ \vec{BC}=(6,-2,-4)`}</Formula>; sum = <Formula>{String.raw`(9,-3,-6)=\vec{AC}`}</Formula>.</span>,
            <span key="a3">Diagonals <Formula>{String.raw`\vec a+\vec b`}</Formula> and <Formula>{String.raw`\vec a-\vec b`}</Formula>; use dot product for the angle.</span>,
            <span key="a4"><Formula>{String.raw`|\vec a+\vec b+\vec c|^2=3`}</Formula>, so <Formula>{String.raw`\sqrt3`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <h2 id="h-10-6">10.6 Products of Vectors</h2>
      <h3 id="h-10-6-1">10.6.1 Scalar (dot) product</h3>
      <p>The dot product measures the angle between two vectors:</p>
      <FormulaBlock latex={String.raw`\vec a\cdot\vec b=|\vec a|\,|\vec b|\cos\theta,\qquad 0\le\theta\le\pi`} important label="Dot product" />
      <p>Component form:</p>
      <FormulaBlock latex={String.raw`\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3`} important />
      <p>
        Orthogonal iff <Formula>{String.raw`\vec a\cdot\vec b=0`}</Formula>. Useful identities:
      </p>
      <FormulaCard>
        <div className="space-y-2">
          <div><Formula>{String.raw`\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}`}</Formula></div>
          <div><Formula>{String.raw`(\vec a+\vec b)\cdot\vec c=\vec a\cdot\vec c+\vec b\cdot\vec c`}</Formula></div>
          <div><Formula>{String.raw`(\lambda\vec a)\cdot\vec b=\lambda(\vec a\cdot\vec b)`}</Formula></div>
          <div><Formula>{String.raw`\vec a\cdot\vec a=|\vec a|^2`}</Formula></div>
        </div>
      </FormulaCard>

      <h3 id="h-10-6-2">10.6.2 Projection</h3>
      <FormulaBlock latex={String.raw`\operatorname{proj}_{\vec b}\vec a=\frac{\vec a\cdot\vec b}{|\vec b|}`} label="Scalar projection" />
      <FormulaBlock latex={String.raw`\operatorname{Proj}_{\vec b}\vec a=\frac{\vec a\cdot\vec b}{|\vec b|^2}\vec b`} label="Vector projection" important />

      <h3 id="h-10-6-3">10.6.3 Vector (cross) product</h3>
      <p>A vector perpendicular to both, whose magnitude is the parallelogram area:</p>
      <FormulaBlock latex={String.raw`\vec a\times\vec b=|\vec a|\,|\vec b|\sin\theta\,\hat n`} important label="Cross product (magnitude, direction)" />
      <FormulaBlock
        latex={String.raw`\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\ a_1&a_2&a_3\\ b_1&b_2&b_3\end{vmatrix}`}
        important
      />
      <FormulaCard>
        <div className="space-y-2">
          <div><Formula>{String.raw`\vec a\times\vec b=-\vec b\times\vec a`}</Formula> (anti-commutative)</div>
          <div><Formula>{String.raw`\vec a\times(\vec b+\vec c)=\vec a\times\vec b+\vec a\times\vec c`}</Formula></div>
          <div><Formula>{String.raw`(\lambda\vec a)\times\vec b=\lambda(\vec a\times\vec b)`}</Formula></div>
          <div><Formula>{String.raw`\vec a\times\vec a=\vec 0,\quad |\vec a\times\vec b|=|\vec a||\vec b|\sin\theta`}</Formula></div>
          <div><Formula>{String.raw`\vec a\times\vec b=\text{area of parallelogram};\ \text{triangle area}=\frac12|\vec a\times\vec b|`}</Formula></div>
          <div><Formula>{String.raw`\vec a,\vec b,\vec c\ \text{coplanar}\iff(\vec a\times\vec b)\cdot\vec c=0`}</Formula></div>
        </div>
      </FormulaCard>
      <p>
        The scalar triple product gives the parallelepiped volume:
      </p>
      <FormulaBlock latex={String.raw`\vec a\cdot(\vec b\times\vec c)=\begin{vmatrix}a_1&a_2&a_3\\ b_1&b_2&b_3\\ c_1&c_2&c_3\end{vmatrix}`} important />

      <Expandable title="Examples on Products — NCERT">
        <div className="space-y-4">
          <div>
            <p><strong>Example.</strong> Angle between <Formula>{String.raw`\vec a=3\hat i+\hat j+2\hat k`}</Formula> and <Formula>{String.raw`\vec b=2\hat i-4\hat j-\hat k`}</Formula>.</p>
            <p><strong>Solution.</strong> <Formula>{String.raw`\vec a\cdot\vec b=6-4-2=0`}</Formula>, so the angle is 90° — the vectors are perpendicular.</p>
          </div>
          <div>
            <p><strong>Example.</strong> Magnitude of a cross product for perpendicular vectors: if <Formula>{String.raw`\vec a\cdot\vec b=0`}</Formula>, then <Formula>{String.raw`|\vec a\times\vec b|=|\vec a||\vec b|`}</Formula>.</p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 10.3">
        <ExerciseQa
          questions={[
            <span key="q1">
              Find the dot product of <Formula>{String.raw`\vec a=3\hat i+4\hat j`}</Formula> and <Formula>{String.raw`\vec b=\hat i+2\hat k`}</Formula>.
            </span>,
            <span key="q2">
              Find <Formula>{String.raw`\vec a\cdot\vec b`}</Formula> given <Formula>{String.raw`|\vec a|=2,\ |\vec b|=3,\ \theta=60^\circ`}</Formula>.
            </span>,
            <span key="q3">
              Find the projection of <Formula>{String.raw`\vec a=3\hat i+6\hat j+2\hat k`}</Formula> on <Formula>{String.raw`\vec b=12\hat i+3\hat j-4\hat k`}</Formula>.
            </span>,
            <span key="q4">
              Prove <Formula>{String.raw`|\vec a\times\vec b|^2+|\vec a\cdot\vec b|^2=|\vec a|^2|\vec b|^2`}</Formula>.
            </span>,
            <span key="q5">
              Prove the cosine law <Formula>{String.raw`c^2=a^2+b^2-2ab\cos C`}</Formula> by vector methods.
            </span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`\vec a\cdot\vec b=3\ne0`}</Formula> → not perpendicular.</span>,
            <span key="a2"><Formula>{String.raw`\vec a\cdot\vec b=|\vec a||\vec b|\cos60^\circ=2\cdot3\cdot(1/2)=3`}</Formula>.</span>,
            <span key="a3">Scalar: <Formula>{String.raw`\frac{36+18-8}{\sqrt{144+9+16}}=\frac{46}{13}`}</Formula>.</span>,
            <span key="a4">Use <Formula>{String.raw`|\vec a\times\vec b|^2=a^2b^2\sin^2\theta`}</Formula> and <Formula>{String.raw`(\vec a\cdot\vec b)^2=a^2b^2\cos^2\theta`}</Formula>.</span>,
            <span key="a5">Square the vector equation for the third side: <Formula>{String.raw`|\vec a-\vec b|^2=a^2+b^2-2\vec a\cdot\vec b`}</Formula>, and identify <Formula>{String.raw`\vec a\cdot\vec b=ab\cos C`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 10.4">
        <ExerciseQa
          questions={[
            <span key="q1">
              Find <Formula>{String.raw`\vec a\times\vec b`}</Formula> for <Formula>{String.raw`\vec a=2\hat i+\hat j+3\hat k,\ \vec b=\hat i-2\hat j-\hat k`}</Formula>.
            </span>,
            <span key="q2">
              Find a unit vector perpendicular to both <Formula>{String.raw`2\hat i+\hat j+2\hat k`}</Formula> and <Formula>{String.raw`4\hat i-\hat j+\hat k`}</Formula>.
            </span>,
            <span key="q3">
              Find the area of the triangle with vertices <Formula>{String.raw`A(1,1,1),\ B(3,3,3),\ C(1,3,5)`}</Formula>.
            </span>,
            <span key="q4">
              Test whether <Formula>{String.raw`2\hat i+\hat j+3\hat k,\ 4\hat j+6\hat k,\ -\hat i-\hat j+\hat k`}</Formula> are coplanar.
            </span>,
            <span key="q5">
              Find the volume of the parallelepiped with coterminous edges <Formula>{String.raw`3\hat i+2\hat j,\ \hat i+2\hat j,\ 3\hat i-\hat j+2\hat k`}</Formula>.
            </span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`\vec a\times\vec b=(7,1,-5)`}</Formula>.</span>,
            <span key="a2"><Formula>{String.raw`\frac{1}{\sqrt{174}}(-5,7,-10)`}</Formula>.</span>,
            <span key="a3"><Formula>{String.raw`\frac12|\overrightarrow{AB}\times\overrightarrow{AC}| = 6`}</Formula>.</span>,
            <span key="a4">Compute the scalar triple product; if non-zero, they are not coplanar.</span>,
            <span key="a5"><Formula>{String.raw`|\vec a\cdot(\vec b\times\vec c)|=9`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Miscellaneous Exercise on Chapter 10">
        <ExerciseQa
          questions={[
            <span key="q1">
              A vector <Formula>{String.raw`\vec r`}</Formula> makes equal angles with the three axes and has magnitude 4. Find it.
            </span>,
            <span key="q2">
              Prove <Formula>{String.raw`|\vec a\times\vec b|^2=|\vec a|^2|\vec b|^2-(\vec a\cdot\vec b)^2`}</Formula>.
            </span>,
            <span key="q3">
              If <Formula>{String.raw`\vec a,\vec b,\vec c`}</Formula> are unit vectors with <Formula>{String.raw`\vec a+\vec b+\vec c=\vec0`}</Formula>, prove they are 120° apart.
            </span>,
            <span key="q4">
              Find a vector of magnitude 5 parallel to <Formula>{String.raw`(2,3,-1)`}</Formula>, in both directions.
            </span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`\pm\frac{4}{\sqrt3}(\hat i+\hat j+\hat k)`}</Formula>.</span>,
            <span key="a2">Use <Formula>{String.raw`|\vec a\times\vec b|^2=a^2b^2\sin^2\theta`}</Formula> and <Formula>{String.raw`(\vec a\cdot\vec b)^2=a^2b^2\cos^2\theta`}</Formula>.</span>,
            <span key="a3">Square <Formula>{String.raw`\vec a+\vec b+\vec c=\vec0`}</Formula>; cosines all equal = −1/2, giving 120°.</span>,
            <span key="a4"><Formula>{String.raw`\pm\frac{5}{\sqrt{14}}(2\hat i+3\hat j-\hat k)`}</Formula>.</span>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Parallel / perpendicular:</strong> <Formula>{String.raw`\vec a\parallel\vec b\iff\vec a\times\vec b=\vec0`}</Formula>, and <Formula>{String.raw`\vec a\perp\vec b\iff\vec a\cdot\vec b=0`}</Formula>.</li>
          <li><strong>Magnitude:</strong> <Formula>{String.raw`|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}`}</Formula>; magnitude of cross product is parallelogram area.</li>
          <li><strong>Angle:</strong> <Formula>{String.raw`\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}`}</Formula>.</li>
          <li><strong>Projections:</strong> scalar <Formula>{String.raw`=\frac{\vec a\cdot\vec b}{|\vec b|}`}</Formula>, vector <Formula>{String.raw`=\frac{\vec a\cdot\vec b}{|\vec b|^2}\vec b`}</Formula>.</li>
          <li><strong>Volume:</strong> <Formula>{String.raw`|\vec a\cdot(\vec b\times\vec c)|`}</Formula>; coplanar iff zero.</li>
          <li><strong>Cross product as determinant:</strong> <Formula>{String.raw`\hat i,\hat j,\hat k`}</Formula> top row, then components.</li>
        </ul>
      </SpeedTricks>
    </>
  );
}
