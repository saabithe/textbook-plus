"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { TableCard } from "@/components/content/data/TableCard";
import { Comparison } from "@/components/content/Comparison";
import { SpeedTricks } from "@/components/content/SpeedTricks";

export default function DeterminantsChapter() {
  return (
    <>
      <h2 id="h-4-1">4.1 Introduction</h2>
      <Callout type="important">
        <p>
          A system of linear equations like{" "}
          <Formula>{String.raw`a_1x + b_1y = c_1,\ a_2x + b_2y = c_2`}</Formula>{" "}
          can be represented in matrix form. The number{" "}
          <Formula>{String.raw`a_1b_2 - a_2b_1`}</Formula>{" "}
          determines whether the system has a unique solution and is associated with the
          matrix{" "}
          <Formula>{String.raw`\begin{bmatrix}
a_1&b_1\\
a_2&b_2
\end{bmatrix}`}</Formula>
          ; this number is called the <Highlight color="yellow">determinant</Highlight> of the matrix.
        </p>
      </Callout>
      <p>
        <strong>P.S. Laplace (1749–1827)</strong>
      </p>
      <p>
        In this chapter, we study determinants up to order three with real entries, their
        properties, minors and cofactors, area of a triangle, adjoint and inverse of a
        square matrix, and solution of linear equations using the inverse of a matrix.
      </p>

      <h2 id="h-4-2">4.2 Determinant</h2>
      <p>
        To every square matrix{" "}
        <Formula>{String.raw`A = [a_{ij}]`}</Formula>{" "}
        of order <Formula>n</Formula>, we can associate a number (real or complex) called the{" "}
        <strong>determinant</strong> of <Formula>A</Formula>, denoted{" "}
        <Formula>{String.raw`|A|`}</Formula>, <Formula>{String.raw`\det(A)`}</Formula>{" "}
        or <Formula>{String.raw`\Delta`}</Formula>. Only square matrices have determinants.
      </p>

      <h3 id="h-4-2-1">4.2.1 Determinant of a matrix of order one</h3>
      <p>
        If{" "}
        <Formula>{String.raw`A = [a]`}</Formula>{" "}
        is of order 1, then{" "}
        <FormulaBlock latex={String.raw`|A| = a`} />
      </p>

      <h3 id="h-4-2-2">4.2.2 Determinant of a matrix of order two</h3>
      <p>
        For{" "}
        <Formula>{String.raw`A = \begin{bmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}
\end{bmatrix}`}</Formula>
        ,
      </p>
      <FormulaBlock latex={String.raw`|A| = \begin{vmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}
\end{vmatrix} = a_{11}a_{22} - a_{21}a_{12}`} important />

      <h3 id="h-4-2-3">4.2.3 Determinant of a matrix of order three</h3>
      <p>
        For a 3 × 3 matrix, a determinant can be expanded along any row or any column.
        Expanding along first row <Formula>{String.raw`R_1`}</Formula>:
      </p>
      <FormulaBlock
        latex={String.raw`|A| = \begin{vmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{vmatrix} = a_{11}\begin{vmatrix}
a_{22}&a_{23}\\
a_{32}&a_{33}
\end{vmatrix} - a_{12}\begin{vmatrix}
a_{21}&a_{23}\\
a_{31}&a_{33}
\end{vmatrix} + a_{13}\begin{vmatrix}
a_{21}&a_{22}\\
a_{31}&a_{32}
\end{vmatrix}`}
        important
      />
      <Callout type="note">
        <ul className="space-y-2">
          <li>
            Expanding along any row or any column gives the{" "}
            <Highlight color="yellow">same value</Highlight>.
          </li>
          <li>
            To simplify calculations, expand along the row or column with the{" "}
            <Highlight color="blue">maximum number of zeros</Highlight>.
          </li>
          <li>
            We may use{" "}
            <Formula>{String.raw`+`}</Formula> or{" "}
            <Formula>{String.raw`-`}</Formula> according as{" "}
            <Formula>{String.raw`(i+j)`}</Formula>{" "}
            is even or odd (instead of writing{" "}
            <Formula>{String.raw`(-1)^{i+j}`}</Formula>{" "}
            explicitly in rough work).
          </li>
          <li>
            If{" "}
            <Formula>{String.raw`A = kB`}</Formula>{" "}
            where <Formula>A,B</Formula> are square matrices of order <Formula>n</Formula>,
            then{" "}
            <FormulaBlock latex={String.raw`|A| = k^n |B|`} />
          </li>
        </ul>
      </Callout>

      <Expandable title="Examples 1 to 5 — NCERT">
        <KeyPoint title="Example 1">
          <p>
            Evaluate{" "}
            <Formula>{String.raw`\begin{vmatrix}
2&4\\
-1&2
\end{vmatrix}`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`2(2) - 4(-1) = 4 + 4 = 8`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 2">
          <p>
            Evaluate{" "}
            <Formula>{String.raw`\begin{vmatrix}
x&x+1\\
x-1&x
\end{vmatrix}`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`x(x) - (x+1)(x-1) = x^2 - (x^2 - 1) = 1`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 3">
          <p>
            Evaluate{" "}
            <Formula>{String.raw`\Delta = \begin{vmatrix}
1&2&4\\
-1&3&0\\
4&1&0
\end{vmatrix}`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong> Expanding along third column (two zeros):
            <Formula>{String.raw`\Delta = 4\begin{vmatrix}
-1&3\\
4&1
\end{vmatrix} - 0 + 0 = 4(-1 - 12) = -52`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 4">
          <p>
            Evaluate{" "}
            <Formula>{String.raw`\Delta = \begin{vmatrix}
0&\sin\alpha&-\cos\alpha\\
-\sin\alpha&0&\sin\beta\\
\cos\alpha&-\sin\beta&0
\end{vmatrix}`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong> Expanding along <Formula>{String.raw`R_1`}</Formula> gives{" "}
            <Formula>{String.raw`\Delta = 0 - \sin\alpha\,(0 - \sin\beta\cos\alpha) - \cos\alpha\,(\sin\alpha\sin\beta - 0) = \sin\alpha\sin\beta\cos\alpha - \cos\alpha\sin\alpha\sin\beta = 0`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 5">
          <p>
            Find values of <Formula>x</Formula> for which{" "}
            <Formula>{String.raw`\begin{vmatrix}
3&x\\
x&1
\end{vmatrix} = \begin{vmatrix}
3&2\\
4&1
\end{vmatrix}`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`3 - x^2 = 3 - 8 \implies x^2 = 8 \implies x = \pm 2\sqrt{2}`}</Formula>
          </p>
        </KeyPoint>
      </Expandable>

      <h2 id="h-4-3">4.3 Area of a Triangle</h2>
      <p>
        Area of triangle with vertices{" "}
        <Formula>{String.raw`(x_1,y_1),(x_2,y_2),(x_3,y_3)`}</Formula> is
      </p>
      <FormulaBlock
        latex={String.raw`\Delta = \frac{1}{2}\begin{vmatrix}
x_1&y_1&1\\
x_2&y_2&1\\
x_3&y_3&1
\end{vmatrix}`}
        important
      />
      <Callout type="note">
        <ul className="space-y-2">
          <li>Take the <strong>absolute value</strong> of the determinant.</li>
          <li>If area is given, use both positive and negative values.</li>
          <li>
            Three points are <Highlight color="blue">collinear</Highlight> if and only if the
            area is zero.
          </li>
        </ul>
      </Callout>

      <Expandable title="Examples 6 to 7 — NCERT">
        <KeyPoint title="Example 6">
          <p>
            Find the area of the triangle whose vertices are{" "}
            <Formula>{String.raw`(3,8), (-4,2), (5,1)`}</Formula>.
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`\Delta = \frac{1}{2}\begin{vmatrix}
3&8&1\\
-4&2&1\\
5&1&1
\end{vmatrix} = \frac{1}{2}\left[3(2-1) - 8(-4-5) + 1(-4-10)\right] = \frac{1}{2}\left[3 + 72 - 14\right] = \frac{61}{2}\,\text{sq. units}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 7">
          <p>
            Find the equation of the line joining{" "}
            <Formula>{String.raw`A(1,3)`}</Formula> and{" "}
            <Formula>{String.raw`B(0,0)`}</Formula> using determinants. Also find{" "}
            <Formula>k</Formula> if{" "}
            <Formula>{String.raw`D(k,0)`}</Formula> is a point such that area of triangle{" "}
            <Formula>{String.raw`ABD`}</Formula> is <Formula>3</Formula> sq. units.
          </p>
          <p>
            <strong>Solution:</strong> For any <Formula>{String.raw`P(x,y)`}</Formula> on{" "}
            <Formula>{String.raw`AB`}</Formula>, area is zero:{" "}
            <Formula>{String.raw`\frac{1}{2}\begin{vmatrix}
0&0&1\\
1&3&1\\
x&y&1
\end{vmatrix}=0 \implies y=3x`}</Formula>. For{" "}
            <Formula>{String.raw`D(k,0)`}</Formula>:{" "}
            <Formula>{String.raw`\frac{1}{2}\begin{vmatrix}
1&3&1\\
0&0&1\\
k&0&1
\end{vmatrix}=\pm 3 \implies \left|\frac{1}{2}(-3k)\right|=3 \implies k=\mp 2`}</Formula>.
          </p>
        </KeyPoint>
      </Expandable>

      <h2 id="h-4-4">4.4 Minors and Cofactors</h2>
      <p>
        <strong>Minor</strong> <Formula>{String.raw`M_{ij}`}</Formula> of an element{" "}
        <Formula>{String.raw`a_{ij}`}</Formula> is the determinant obtained by deleting the{" "}
        <Formula>{String.raw`i^{th}`}</Formula> row and <Formula>{String.raw`j^{th}`}</Formula> column.
      </p>
      <p>
        <strong>Cofactor</strong>{" "}
        <Formula>{String.raw`A_{ij} = (-1)^{i+j} M_{ij}`}</Formula>.
      </p>
      <Callout type="important">
        <p>
          The value of a determinant is the sum of the products of the elements of any row (or
          column) with their corresponding cofactors:
        </p>
        <FormulaBlock latex={String.raw`|A| = \sum_j a_{ij}A_{ij} = \sum_i a_{ij}A_{ij}`} />
        <p>
          If elements of a row are multiplied with cofactors of another row, the sum is{" "}
          <Highlight color="yellow">zero</Highlight>.
        </p>
      </Callout>

      <Expandable title="Examples 8 to 11 — NCERT">
        <KeyPoint title="Example 8">
          <p>
            Find the minor of element <Formula>6</Formula> in{" "}
            <Formula>{String.raw`\begin{vmatrix}
1&2&3\\
4&5&6\\
7&8&9
\end{vmatrix}`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`M_{23}=\begin{vmatrix}
1&2\\
7&8
\end{vmatrix}=8-14=-6`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 9">
          <p>
            Find minors and cofactors of all elements of{" "}
            <Formula>{String.raw`\begin{vmatrix}
1&-2\\
4&3
\end{vmatrix}`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`M_{11}=3,A_{11}=3;\ M_{12}=4,A_{12}=-4;\ M_{21}=-2,A_{21}=2;\ M_{22}=1,A_{22}=1`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 10">
          <p>
            Find minors and cofactors of <Formula>{String.raw`a_{11}`}</Formula> and{" "}
            <Formula>{String.raw`a_{21}`}</Formula> in{" "}
            <Formula>{String.raw`\begin{vmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{vmatrix}`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`M_{11}=\begin{vmatrix}
a_{22}&a_{23}\\
a_{32}&a_{33}
\end{vmatrix},A_{11}=M_{11};\quad M_{21}=\begin{vmatrix}
a_{12}&a_{13}\\
a_{32}&a_{33}
\end{vmatrix},A_{21}=-M_{21}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 11">
          <p>
            Find minors and cofactors of elements of{" "}
            <Formula>{String.raw`\begin{vmatrix}
2&-3&5\\
6&0&4\\
1&5&-7
\end{vmatrix}`}</Formula>{" "}
            and verify{" "}
            <Formula>{String.raw`a_{11}A_{31}+a_{12}A_{32}+a_{13}A_{33}=0`}</Formula>.
          </p>
          <p>
            <strong>Solution:</strong> The verification gives{" "}
            <Formula>{String.raw`2(-12) + (-3)(22) + 5(18)= -24 - 66 + 90 = 0`}</Formula>.
          </p>
        </KeyPoint>
      </Expandable>

      <h2 id="h-4-5">4.5 Adjoint and Inverse of a Matrix</h2>
      <h3 id="h-4-5-1">4.5.1 Adjoint of a matrix</h3>
      <p>
        Let <Formula>A</Formula> be a square matrix and let{" "}
        <Formula>{String.raw`[A_{ij}]`}</Formula> be the matrix of cofactors. The{" "}
        <strong>adjoint</strong> of <Formula>A</Formula> is the transpose of{" "}
        <Formula>{String.raw`[A_{ij}]`}</Formula>, written{" "}
        <Formula>{String.raw`\operatorname{adj} A`}</Formula>.
      </p>
      <FormulaBlock
        latex={String.raw`A(\operatorname{adj} A) = (\operatorname{adj} A)A = |A|\,I`}
        important
      />
      <p>
        For a 2 × 2 matrix{" "}
        <Formula>{String.raw`A=\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}`}</Formula>,{" "}
        <Formula>{String.raw`\operatorname{adj} A=\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}`}</Formula> (interchange diagonal, change signs of off-diagonal).
      </p>

      <h3 id="h-4-5-2">Singular and non-singular matrices</h3>
      <Comparison
        columns={[
          {
            title: "Singular matrix",
            children: (
              <p>
                A square matrix <Formula>A</Formula> is <strong>singular</strong> if{" "}
                <Formula>{String.raw`|A| = 0`}</Formula>.
              </p>
            ),
          },
          {
            title: "Non-singular matrix",
            children: (
              <p>
                A square matrix <Formula>A</Formula> is <strong>non-singular</strong> if{" "}
                <Formula>{String.raw`|A| \neq 0`}</Formula>.
              </p>
            ),
          },
        ]}
      />

      <h3 id="h-4-5-3">Inverse of a matrix</h3>
      <p>
        A square matrix <Formula>A</Formula> is <strong>invertible</strong> if and only if{" "}
        <Formula>A</Formula> is non-singular. If <Formula>{String.raw`|A|\neq 0`}</Formula>,
      </p>
      <FormulaBlock
        latex={String.raw`A^{-1} = \frac{1}{|A|}\operatorname{adj} A`}
        important
      />
      <Callout type="important">
        <ul className="space-y-2">
          <li>
            <Formula>{String.raw`(AB)^{-1} = B^{-1}A^{-1}`}</Formula>
          </li>
          <li>
            <Formula>{String.raw`(A^{-1})^{-1} = A`}</Formula>
          </li>
          <li>
            If <Formula>A,B</Formula> are non-singular of same order, <Formula>AB</Formula> and{" "}
            <Formula>BA</Formula> are non-singular and{" "}
            <Formula>{String.raw`|AB| = |A||B|`}</Formula>.
          </li>
          <li>
            For a square matrix of order <Formula>n</Formula>,{" "}
            <Formula>{String.raw`|\operatorname{adj} A| = |A|^{n-1}`}</Formula>.
          </li>
        </ul>
      </Callout>

      <Expandable title="Examples 12 to 15 — NCERT">
        <KeyPoint title="Example 12">
          <p>
            Find <Formula>{String.raw`\operatorname{adj} A`}</Formula> for{" "}
            <Formula>{String.raw`A=\begin{bmatrix}
2&3\\
1&4
\end{bmatrix}`}</Formula>
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`A_{11}=4,A_{12}=-1,A_{21}=-3,A_{22}=2,\quad \operatorname{adj} A=\begin{bmatrix}
4&-3\\
-1&2
\end{bmatrix}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 13">
          <p>
            If{" "}
            <Formula>{String.raw`A=\begin{bmatrix}
1&3&3\\
1&4&3\\
1&3&4
\end{bmatrix}`}</Formula>, verify{" "}
            <Formula>{String.raw`A(\operatorname{adj}A)=|A|I`}</Formula> and find{" "}
            <Formula>{String.raw`A^{-1}`}</Formula>.
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`|A|=1,\quad \operatorname{adj}A=\begin{bmatrix}
7&-3&-3\\
-1&1&0\\
-1&0&1
\end{bmatrix},\quad A^{-1}=\begin{bmatrix}
7&-3&-3\\
-1&1&0\\
-1&0&1
\end{bmatrix}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 14">
          <p>
            If{" "}
            <Formula>{String.raw`A=\begin{bmatrix}
2&3\\
-1&2
\end{bmatrix}, B=\begin{bmatrix}
1&4\\
-1&3
\end{bmatrix}`}</Formula>, verify{" "}
            <Formula>{String.raw`(AB)^{-1}=B^{-1}A^{-1}`}</Formula>.
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`AB=\begin{bmatrix}
-1&17\\
-3&2
\end{bmatrix},\ |AB|=-11,\ (AB)^{-1}=-\frac{1}{11}\begin{bmatrix}
2&-17\\
3&-1
\end{bmatrix},\ B^{-1}A^{-1} gives the same.`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 15">
          <p>
            Show{" "}
            <Formula>{String.raw`A=\begin{bmatrix}
2&3\\
1&2
\end{bmatrix}`}</Formula> satisfies{" "}
            <Formula>{String.raw`A^2 - 4A + I = O`}</Formula>, hence find{" "}
            <Formula>{String.raw`A^{-1}`}</Formula>.
          </p>
          <p>
            <strong>Solution:</strong> From the equation,{" "}
            <Formula>{String.raw`A - 4I = -A^{-1}\implies A^{-1}=4I-A=\begin{bmatrix}
2&-3\\
-1&2
\end{bmatrix}`}</Formula>.
          </p>
        </KeyPoint>
      </Expandable>

      <h2 id="h-4-6">4.6 Applications of Determinants and Matrices</h2>
      <h3 id="h-4-6-1">4.6.1 Solution of system of linear equations using inverse of a matrix</h3>
      <p>
        For the system
      </p>
      <FormulaBlock
        latex={String.raw`\begin{aligned}
a_1x+b_1y+c_1z&=d_1,\\
a_2x+b_2y+c_2z&=d_2,\\
a_3x+b_3y+c_3z&=d_3,
\end{aligned}\qquad
A=\begin{bmatrix}
a_1&b_1&c_1\\
a_2&b_2&c_2\\
a_3&b_3&c_3
\end{bmatrix},\ X=\begin{bmatrix}
x\\y\\z
\end{bmatrix},\ B=\begin{bmatrix}
d_1\\d_2\\d_3
\end{bmatrix},\ AX=B.`}
      />
      <TableCard
        title="Matrix method (consistency)"
        headers={["Case", "Condition", "Conclusion"]}
        rows={[
          {
            cells: [
              "Case I",
              <Formula key="c1">{String.raw`|A| \neq 0`}</Formula>,
              <span key="k1">
                <Formula>{String.raw`A^{-1}`}</Formula> exists; unique solution{" "}
                <Formula>{String.raw`X = A^{-1}B`}</Formula> (consistent)
              </span>,
            ],
          },
          {
            cells: [
              "Case II",
              <span key="c2">
                <Formula>{String.raw`|A| = 0,\ (\operatorname{adj}A)B \neq O`}</Formula>
              </span>,
              "No solution (inconsistent)",
            ],
          },
          {
            cells: [
              "Case III",
              <span key="c3">
                <Formula>{String.raw`|A| = 0,\ (\operatorname{adj}A)B = O`}</Formula>
              </span>,
              "Either infinitely many solutions or no solution (check further)",
            ],
          },
        ]}
      />
      <Callout type="note">
        In this chapter we mainly consider systems with <Highlight color="yellow">unique solutions</Highlight>{" "}
        (non-singular coefficient matrix).
      </Callout>

      <Expandable title="Examples 16 to 19 — NCERT">
        <KeyPoint title="Example 16">
          <p>
            Solve{" "}
            <Formula>{String.raw`2x+5y=1,\ 3x+2y=7`}</Formula> by matrix method.
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`A=\begin{bmatrix}
2&5\\
3&2
\end{bmatrix},|A|=-11,\ A^{-1}=-\frac{1}{11}\begin{bmatrix}
2&-5\\
-3&2
\end{bmatrix},\ X=A^{-1}\begin{bmatrix}
1\\7
\end{bmatrix}=\begin{bmatrix}
3\\-1
\end{bmatrix}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 17">
          <p>
            Solve{" "}
            <Formula>{String.raw`3x-2y+3z=8,\ 2x+y-z=1,\ 4x-3y+2z=4`}</Formula> by matrix method.
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`|A|=-17\neq 0,\ A^{-1}=-\frac{1}{17}\begin{bmatrix}
-1&-5&-1\\
-8&-6&9\\
-10&1&7
\end{bmatrix},\ X=A^{-1}\begin{bmatrix}
8\\1\\4
\end{bmatrix}=\begin{bmatrix}
1\\2\\3
\end{bmatrix}`}</Formula>
          </p>
        </KeyPoint>
        <KeyPoint title="Example 18">
          <p>
            The sum of three numbers is <Formula>6</Formula>. If we multiply the third number by{" "}
            <Formula>3</Formula> and add the second number to it, we get <Formula>11</Formula>.
            By adding first and third numbers, we get double of the second number. Find the numbers
            using matrix method.
          </p>
          <p>
            <strong>Solution:</strong> Equations{" "}
            <Formula>{String.raw`x+y+z=6,\ y+3z=11,\ x-2y+z=0`}</Formula>,{" "}
            <Formula>{String.raw`A=\begin{bmatrix}
1&1&1\\
0&1&3\\
1&-2&1
\end{bmatrix},|A|=9,\ X=A^{-1}B=\begin{bmatrix}
1\\2\\3
\end{bmatrix}`}</Formula>.
          </p>
        </KeyPoint>
        <KeyPoint title="Example 19">
          <p>
            Use the product{" "}
            <Formula>{String.raw`\begin{bmatrix}
1&-1&2\\
0&2&-3\\
3&-2&4
\end{bmatrix}\begin{bmatrix}
-2&0&1\\
9&2&-3\\
6&1&-2
\end{bmatrix}=\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&1
\end{bmatrix}`}</Formula>{" "}
            to solve{" "}
            <Formula>{String.raw`x-y+2z=1,\ 2y-3z=1,\ 3x-2y+4z=2`}</Formula>.
          </p>
          <p>
            <strong>Solution:</strong>{" "}
            <Formula>{String.raw`X=\begin{bmatrix}
-2&0&1\\
9&2&-3\\
6&1&-2
\end{bmatrix}\begin{bmatrix}
1\\1\\2
\end{bmatrix}=\begin{bmatrix}
0\\5\\3
\end{bmatrix}`}</Formula>, so{" "}
            <Formula>{String.raw`x=0,y=5,z=3`}</Formula>.
          </p>
        </KeyPoint>
      </Expandable>

      <h2 id="h-4-exercises">Exercises</h2>

      <Expandable title="Exercise 4.1 — Determinants of order 1,2,3">
        <ExerciseQa
          questions={[
            <>
              Evaluate{" "}
              <Formula>{String.raw`\begin{vmatrix}
2&4\\
-5&-1
\end{vmatrix}`}</Formula>.
            </>,
            <>
              Evaluate{" "}
              <Formula>{String.raw`\begin{vmatrix}
\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta
\end{vmatrix}`}</Formula>.
            </>,
            <>
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix}
1&2\\
4&2
\end{bmatrix}`}</Formula>, show that{" "}
              <Formula>{String.raw`|2A|=4|A|`}</Formula>.
            </>,
            <>
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix}
1&0&1\\
0&1&2\\
0&0&4
\end{bmatrix}`}</Formula>, show that{" "}
              <Formula>{String.raw`|3A|=27|A|`}</Formula>.
            </>,
            <>
              Evaluate{" "}
              <Formula>{String.raw`\begin{vmatrix}
3&-1&-2\\
0&0&-1\\
3&-5&0
\end{vmatrix}`}</Formula>.
            </>,
            <>
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix}
1&1&-2\\
2&1&-3\\
5&4&-9
\end{bmatrix}`}</Formula>, find{" "}
              <Formula>{String.raw`|A|`}</Formula>.
            </>,
            <>
              Find values of <Formula>x</Formula> if{" "}
              <Formula>{String.raw`\begin{vmatrix}
2&4\\
5&1
\end{vmatrix}=\begin{vmatrix}
2x&4\\
6&x
\end{vmatrix}`}</Formula>.
            </>,
            <>
              If{" "}
              <Formula>{String.raw`\begin{vmatrix}
2&6\\
18&x
\end{vmatrix}=\begin{vmatrix}
2&6\\
18&6
\end{vmatrix}`}</Formula>, then <Formula>x</Formula> is equal to
              (A) 6 (B) ±6 (C) -6 (D) 0
            </>,
          ]}
          answers={[
            <Formula>{String.raw`2(-1)-4(-5)= -2+20=18`}</Formula>,
            <Formula>{String.raw`\cos^2\theta+\sin^2\theta=1`}</Formula>,
            <>Shown (order 2).</>,
            <>Shown (order 3).</>,
            <Formula>{String.raw`-1\begin{vmatrix}
3&-5\\
3&-1
\end{vmatrix}= -1(-3+15)= -12`}</Formula>,
            <Formula>{String.raw`0`}</Formula>,
            <Formula>{String.raw`2 - 20 = 2x^2 - 24 \implies 2x^2 = 6 \implies x=\pm\sqrt{3}`}</Formula>,
            <>(B) ±6</>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 4.2 — Area of triangle">
        <ExerciseQa
          questions={[
            <>
              Find area of triangle with vertices{" "}
              <Formula>{String.raw`(1,0),(6,0),(4,3)`}</Formula>.
            </>,
            <>
              Show that{" "}
              <Formula>{String.raw`A(a,b+c), B(b,c+a), C(c,a+b)`}</Formula> are collinear.
            </>,
            <>
              Find <Formula>k</Formula> if area is <Formula>4</Formula> sq. units and vertices are{" "}
              <Formula>{String.raw`(k,0),(4,0),(0,2)`}</Formula>.
            </>,
            <>
              Find equation of line joining{" "}
              <Formula>{String.raw`(1,2)`}</Formula> and{" "}
              <Formula>{String.raw`(3,6)`}</Formula> using determinants.
            </>,
            <>
              If area is <Formula>35</Formula> sq. units with vertices{" "}
              <Formula>{String.raw`(2,-6),(5,4),(k,4)`}</Formula>, <Formula>k</Formula> is
              (A) 12 (B) -2 (C) -12,-2 (D) 12,-2
            </>,
          ]}
          answers={[
            <Formula>{String.raw`\frac{1}{2}\begin{vmatrix}
1&0&1\\
6&0&1\\
4&3&1
\end{vmatrix}=\frac{9}{2}`}</Formula>,
            <Formula>{String.raw`\frac{1}{2}\begin{vmatrix}
a&b+c&1\\
b&c+a&1\\
c&a+b&1
\end{vmatrix}=0`}</Formula>,
            <Formula>{String.raw`\left|\frac{1}{2}k(-2)\right|=4 \implies |k|=4 \implies k=\pm 4`}</Formula>,
            <Formula>{String.raw`\begin{vmatrix}
x&y&1\\
1&2&1\\
3&6&1
\end{vmatrix}=0 \implies 2x-y=0`}</Formula>,
            <>(D) 12,-2</>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 4.3 — Minors and Cofactors">
        <ExerciseQa
          questions={[
            <>
              Write minors and cofactors of elements of{" "}
              <Formula>{String.raw`\begin{vmatrix}
2&-4\\
0&3
\end{vmatrix}`}</Formula>.
            </>,
            <>
              Using cofactors of elements of second row, evaluate{" "}
              <Formula>{String.raw`\begin{vmatrix}
5&3&8\\
2&0&1\\
1&2&3
\end{vmatrix}`}</Formula>.
            </>,
            <>
              Using cofactors of elements of third column, evaluate{" "}
              <Formula>{String.raw`\begin{vmatrix}
1&1&1\\
x&y&z\\
yz&zx&xy
\end{vmatrix}`}</Formula>.
            </>,
            <>
              If{" "}
              <Formula>{String.raw`|A|=\sum a_{ij}A_{ij}`}</Formula>, which gives expansion along row 1,
              which of the following is also equal to{" "}
              <Formula>{String.raw`|A|`}</Formula>?
              (A){" "}
              <Formula>{String.raw`a_{11}A_{31}+a_{12}A_{32}+a_{13}A_{33}`}</Formula>{" "}
              (B){" "}
              <Formula>{String.raw`a_{11}A_{11}+a_{12}A_{21}+a_{13}A_{31}`}</Formula>{" "}
              (C){" "}
              <Formula>{String.raw`a_{21}A_{11}+a_{22}A_{12}+a_{23}A_{13}`}</Formula>{" "}
              (D){" "}
              <Formula>{String.raw`a_{11}A_{11}+a_{21}A_{21}+a_{31}A_{31}`}</Formula>
            </>,
          ]}
          answers={[
            <>
              <Formula>{String.raw`M_{11}=3,A_{11}=3;\ M_{12}=0,A_{12}=0;\ M_{21}=-4,A_{21}=4;\ M_{22}=2,A_{22}=2`}</Formula>
            </>,
            <Formula>{String.raw`-2\begin{vmatrix}
3&8\\
2&3
\end{vmatrix} + 0 - 1\begin{vmatrix}
5&3\\
1&2
\end{vmatrix}= -2(-7) - 1(7)= 7`}</Formula>,
            <Formula>{String.raw`1\begin{vmatrix}
x&y\\
yz&zx
\end{vmatrix} - z\begin{vmatrix}
1&1\\
yz&zx
\end{vmatrix} + xy\begin{vmatrix}
1&1\\
x&y
\end{vmatrix}= (x^2z - y^2z) - z(z - yz) + xy(y-x)= xz(x-y) + yz(z-1)+xy(y-x)`}</Formula>,
            <>(D)</>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 4.4 — Adjoint and Inverse">
        <ExerciseQa
          questions={[
            <>
              Find adjoint of{" "}
              <Formula>{String.raw`\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}`}</Formula>.
            </>,
            <>
              Find adjoint of{" "}
              <Formula>{String.raw`\begin{bmatrix}
1&-1&2\\
2&3&5\\
-2&0&1
\end{bmatrix}`}</Formula>.
            </>,
            <>
              Verify{" "}
              <Formula>{String.raw`A(\operatorname{adj}A)=(\operatorname{adj}A)A=|A|I`}</Formula> for{" "}
              <Formula>{String.raw`A=\begin{bmatrix}
2&3\\
-4&-6
\end{bmatrix}`}</Formula>.
            </>,
            <>
              Find inverse of{" "}
              <Formula>{String.raw`\begin{bmatrix}
2&-2\\
4&3
\end{bmatrix}`}</Formula> if exists.
            </>,
            <>
              Find inverse of{" "}
              <Formula>{String.raw`\begin{bmatrix}
1&2&3\\
0&2&4\\
0&0&5
\end{bmatrix}`}</Formula> if exists.
            </>,
            <>
              Let{" "}
              <Formula>{String.raw`A=\begin{bmatrix}
3&7\\
2&5
\end{bmatrix}, B=\begin{bmatrix}
6&8\\
7&9
\end{bmatrix}`}</Formula>; verify{" "}
              <Formula>{String.raw`(AB)^{-1}=B^{-1}A^{-1}`}</Formula>.
            </>,
            <>
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix}
3&1\\
-1&2
\end{bmatrix}`}</Formula>, show{" "}
              <Formula>{String.raw`A^2 - 5A + 7I=O`}</Formula> and hence find{" "}
              <Formula>{String.raw`A^{-1}`}</Formula>.
            </>,
          ]}
          answers={[
            <Formula>{String.raw`\operatorname{adj}A=\begin{bmatrix}
4&-2\\
-3&1
\end{bmatrix}`}</Formula>,
            <Formula>{String.raw`\operatorname{adj}A=\begin{bmatrix}
3&1&-11\\
-12&5&-1\\
6&-2&5
\end{bmatrix}`}</Formula>,
            <>Verified (singular matrix gives zero matrix).</>,
            <Formula>{String.raw`A^{-1}=\frac{1}{14}\begin{bmatrix}
3&2\\
-4&2
\end{bmatrix}`}</Formula>,
            <Formula>{String.raw`A^{-1}=\begin{bmatrix}
1&-1/2&-1/5\\
0&1/2&-2/5\\
0&0&1/5
\end{bmatrix}`}</Formula>,
            <>Verified.</>,
            <Formula>{String.raw`A^{-1}=\frac{1}{7}\begin{bmatrix}
2&-1\\
1&3
\end{bmatrix}`}</Formula>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 4.5 — System of linear equations (matrix method)">
        <ExerciseQa
          questions={[
            <>
              Solve{" "}
              <Formula>{String.raw`5x+2y=4,\ 7x+3y=5`}</Formula> using matrix method.
            </>,
            <>
              Solve{" "}
              <Formula>{String.raw`2x+y+z=1,\ x-2y-z=\frac{3}{2},\ 3y-5z=9`}</Formula> using matrix method.
            </>,
            <>
              Solve{" "}
              <Formula>{String.raw`2x+3y+3z=5,\ x-2y+z=-4,\ 3x-y-2z=3`}</Formula> using matrix method.
            </>,
            <>
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix}
2&-3&5\\
3&2&-4\\
1&1&-2
\end{bmatrix}`}</Formula>, find{" "}
              <Formula>{String.raw`A^{-1}`}</Formula> and solve{" "}
              <Formula>{String.raw`2x-3y+5z=11,\ 3x+2y-4z=-5,\ x+y-2z=-3`}</Formula>.
            </>,
            <>
              The cost of <Formula>4</Formula> kg onion, <Formula>3</Formula> kg wheat and{" "}
              <Formula>2</Formula> kg rice is <Formula>₹60</Formula>. Cost of{" "}
              <Formula>2</Formula> kg onion, <Formula>4</Formula> kg wheat and{" "}
              <Formula>6</Formula> kg rice is <Formula>₹90</Formula>. Cost of{" "}
              <Formula>6</Formula> kg onion, <Formula>2</Formula> kg wheat and{" "}
              <Formula>3</Formula> kg rice is <Formula>₹70</Formula>. Find cost per kg by matrix method.
            </>,
          ]}
          answers={[
            <Formula>{String.raw`x=2,y=-3`}</Formula>,
            <Formula>{String.raw`x=1,y=1/2,z=-3/2`}</Formula>,
            <Formula>{String.raw`x=1,y=2,z=-1`}</Formula>,
            <>
              <Formula>{String.raw`A^{-1}=\begin{bmatrix}
0&-1&2\\
2&-9&23\\
1&-5&13
\end{bmatrix},\ x=1,y=2,z=3`}</Formula>
            </>,
            <>
              Let costs be <Formula>x,y,z</Formula> ₹/kg: <Formula>{String.raw`4x+3y+2z=60,\ 2x+4y+6z=90,\ 6x+2y+3z=70 \implies x=5, y=8, z=8`}</Formula>
            </>,
          ]}
        />
      </Expandable>

      <Expandable title="Miscellaneous Exercise on Chapter 4">
        <ExerciseQa
          questions={[
            <>
              Prove that{" "}
              <Formula>{String.raw`\begin{vmatrix}
x&\sin\theta&\cos\theta\\
-\sin\theta&-x&1\\
\cos\theta&1&x
\end{vmatrix}`}</Formula>{" "}
              is independent of <Formula>{String.raw`\theta`}</Formula>.
            </>,
            <>
              Evaluate{" "}
              <Formula>{String.raw`\begin{vmatrix}
\cos(\alpha+\beta)&-\sin(\alpha+\beta)&\cos(2\beta)\\
\sin\alpha&\cos\alpha&\sin\beta\\
-\cos\alpha&\sin\alpha&\cos\beta
\end{vmatrix}`}</Formula>.
            </>,
            <>
              Solve by matrix method{" "}
              <Formula>{String.raw`\frac{2}{x}+\frac{3}{y}+\frac{10}{z}=4,\ \frac{4}{x}-\frac{6}{y}+\frac{5}{z}=1,\ \frac{6}{x}+\frac{9}{y}-\frac{20}{z}=2`}</Formula>.
            </>,
            <>
              If <Formula>x,y,z</Formula> are nonzero real numbers, inverse of{" "}
              <Formula>{String.raw`\operatorname{diag}(x,y,z)`}</Formula> is
              (A){" "}
              <Formula>{String.raw`\operatorname{diag}(x^{-1},y^{-1},z^{-1})`}</Formula>{" "}
              (B) <Formula>{String.raw`\frac{1}{xyz}\operatorname{diag}(x,y,z)`}</Formula>{" "}
              (C){" "}
              <Formula>{String.raw`\frac{1}{xyz}\operatorname{diag}(1,1,1)`}</Formula>{" "}
              (D){" "}
              <Formula>{String.raw`\frac{1}{xyz}\operatorname{diag}(yz,xz,xy)`}</Formula>
            </>,
            <>
              For{" "}
              <Formula>{String.raw`A=\begin{bmatrix}
1&\sin\theta&1\\
-\sin\theta&1&\sin\theta\\
-1&-\sin\theta&1
\end{bmatrix}, 0\le\theta\le 2\pi`}</Formula>,{" "}
              <Formula>{String.raw`\det(A)`}</Formula> lies in
              (A) <Formula>{String.raw`\{0\}`}</Formula> (B){" "}
              <Formula>{String.raw`(2,\infty)`}</Formula> (C){" "}
              <Formula>{String.raw`(2,4)`}</Formula> (D){" "}
              <Formula>{String.raw`[2,4]`}</Formula>
            </>,
          ]}
          answers={[
            <>Value is{" "}<Formula>{String.raw`x^3 + x`}</Formula> (independent of <Formula>{String.raw`\theta`}</Formula>).</>,
            <Formula>{String.raw`0`}</Formula>,
            <>
              Let <Formula>{String.raw`u=1/x,v=1/y,w=1/z`}</Formula>: solution{" "}
              <Formula>{String.raw`x=2,y=3,z=5`}</Formula>.
            </>,
            <>(D)</>,
            <>(D)</>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="space-y-2">
          <li>
            <strong>2×2:</strong>{" "}
            <Formula>{String.raw`ad-bc`}</Formula> (main diagonal product minus off-diagonal).
          </li>
          <li>
            <strong>3×3:</strong> Expand along a row/column with <strong>maximum zeros</strong> to save time.
          </li>
          <li>
            <strong>Area zero</strong> = points are collinear. Use absolute value for area.
          </li>
          <li>
            <strong>Cofactor expansion shortcut:</strong> <Formula>{String.raw`|A|=\sum a_{ij}A_{ij}`}</Formula>; mixing rows/cols gives <Formula>0</Formula>.
          </li>
          <li>
            <strong>Inverse:</strong> <Formula>{String.raw`A^{-1}=\frac{1}{|A|}\operatorname{adj}A`}</Formula>; exists only if{" "}
            <Formula>{String.raw`|A|\neq 0`}</Formula>.
          </li>
          <li>
            <strong>Matrix method:</strong> <Formula>{String.raw`X=A^{-1}B`}</Formula> for unique solution when{" "}
            <Formula>{String.raw`|A|\neq 0`}</Formula>.
          </li>
          <li>
            <strong>Order trick:</strong> <Formula>{String.raw`|kA|=k^n|A|`}</Formula> for <Formula>n\times n</Formula>;{" "}
            <Formula>{String.raw`|\operatorname{adj}A|=|A|^{n-1}`}</Formula>.
          </li>
        </ul>
      </SpeedTricks>
    </>
  );
}
