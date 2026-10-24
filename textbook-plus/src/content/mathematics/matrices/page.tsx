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

export default function MatricesChapter() {
  return (
    <>
      <h2 id="h-3-1">3.1 Introduction</h2>
      <Callout type="important">
        <p>
          A <Highlight color="yellow">matrix</Highlight> is a compact way of storing
          rectangular data. Matrix algebra lets us add, scale and multiply such
          arrays, and the idea of an <strong>invertible matrix</strong> solves systems
          of linear equations. Matrices are used in business, economics, genetics,
          computer graphics, cryptography and engineering.
        </p>
      </Callout>
      <p>
        We begin with the basic vocabulary — order, types and equality — then build the
        three operations (addition, scalar multiplication, multiplication), the
        transpose, symmetric and skew symmetric matrices, and finally invertible
        matrices.
      </p>

      <h2 id="h-3-2">3.2 Matrix</h2>
      <p>
        Radha has 15 notebooks and 6 pens; Fauzia has 10 notebooks and 2 pens; Simran
        has 13 notebooks and 5 pens. Arranged in a rectangle this data reads
      </p>
      <FormulaBlock
        latex={String.raw`\begin{bmatrix} 15 & 6\\ 10 & 2\\ 13 & 5 \end{bmatrix}`}
        label="Notebooks / pens held by Radha, Fauzia, Simran"
      />
      <Callout type="note">
        <p>
          <strong>Definition 1.</strong> A <strong>matrix</strong> is an ordered
          rectangular array of numbers or functions. The numbers or functions are
          called the <strong>elements</strong> or <strong>entries</strong> of the
          matrix. Matrices are denoted by capital letters.
        </p>
      </Callout>
      <p>
        The horizontal lines of elements are <strong>rows</strong>; the vertical lines
        are <strong>columns</strong>. A matrix with <Formula>{String.raw`m`}</Formula>{" "}
        rows and <Formula>{String.raw`n`}</Formula> columns has order{" "}
        <Formula>{String.raw`m\times n`}</Formula>.
      </p>

      <h2 id="h-3-2-1">3.2.1 Order of a matrix</h2>
      <p>
        A matrix having <Formula>{String.raw`m`}</Formula> rows and{" "}
        <Formula>{String.raw`n`}</Formula> columns is a matrix of order{" "}
        <Formula>{String.raw`m\times n`}</Formula> (read &ldquo;<Formula>{String.raw`m`}</Formula>{" "}
        by <Formula>{String.raw`n`}</Formula>&rdquo;).
      </p>
      <FormulaBlock
        latex={String.raw`A=[a_{ij}]_{m\times n}=\begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n}\\ a_{21} & a_{22} & \cdots & a_{2n}\\ \vdots & \vdots & \ddots & \vdots\\ a_{m1} & a_{m2} & \cdots & a_{mn}\end{bmatrix}`}
        label="General m × n matrix"
        important
      />
      <p>
        The entry <Formula>{String.raw`a_{ij}`}</Formula> lies in the{" "}
        <Formula>{String.raw`i^{th}`}</Formula> row and{" "}
        <Formula>{String.raw`j^{th}`}</Formula> column. An{" "}
        <Formula>{String.raw`m\times n`}</Formula> matrix has{" "}
        <Formula>{String.raw`mn`}</Formula> elements.
      </p>

      <Expandable title="Examples 1 to 3 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 1.</strong> Write the notebooks-and-pens data above as a
              matrix and interpret its order.
            </p>
            <p>
              <strong>Solution.</strong> Taking rows as persons and columns as
              articles, the matrix is{" "}
              <Formula>{String.raw`\begin{bmatrix} 15 & 6\\ 10 & 2\\ 13 & 5 \end{bmatrix}`}</Formula>
              , of order <Formula>{String.raw`3\times 2`}</Formula>. Its first column
              counts notebooks, the second counts pens.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 2.</strong> If a matrix has 8 elements, what are the
              possible orders?
            </p>
            <p>
              <strong>Solution.</strong> We need{" "}
              <Formula>{String.raw`m n = 8`}</Formula> with{" "}
              <Formula>{String.raw`m,n\in\mathbb{N}`}</Formula>. The factor pairs give
              the orders{" "}
              <Formula>{String.raw`1\times 8,\ 2\times 4,\ 4\times 2,\ 8\times 1`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 3.</strong> Construct a{" "}
              <Formula>{String.raw`3\times 2`}</Formula> matrix whose elements are{" "}
              <Formula>{String.raw`a_{ij}=\frac{1}{2}|i-3j|`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Compute each entry:
            </p>
            <FormulaBlock
              latex={String.raw`a_{11}=\tfrac{1}{2}|1-3|=1,\quad a_{12}=\tfrac{1}{2}|1-6|=\tfrac{5}{2}`}
            />
            <FormulaBlock
              latex={String.raw`a_{21}=\tfrac{1}{2}|2-3|=\tfrac{1}{2},\quad a_{22}=\tfrac{1}{2}|2-6|=2`}
            />
            <FormulaBlock
              latex={String.raw`a_{31}=\tfrac{1}{2}|3-3|=0,\quad a_{32}=\tfrac{1}{2}|3-6|=\tfrac{3}{2}`}
            />
            <FormulaBlock
              latex={String.raw`A=\begin{bmatrix} 1 & \tfrac{5}{2}\\[2pt] \tfrac{1}{2} & 2\\[2pt] 0 & \tfrac{3}{2}\end{bmatrix}`}
            />
          </div>
        </div>
      </Expandable>

      <h2 id="h-3-3">3.3 Types of Matrices</h2>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          title="Column matrix"
          definition="A matrix with only one column, of order m × 1."
          icon="▮"
        />
        <FactCard
          title="Row matrix"
          definition="A matrix with only one row, of order 1 × n."
          icon="▬"
        />
        <FactCard
          title="Square matrix"
          definition="A matrix in which the number of rows equals the number of columns; an m × n matrix with m = n has order n."
          icon="■"
        />
        <FactCard
          title="Diagonal matrix"
          definition="A square matrix A = [aᵢⱼ] is diagonal if all non-diagonal entries vanish, i.e. aᵢⱼ = 0 whenever i ≠ j."
          icon="◪"
        />
        <FactCard
          title="Scalar matrix"
          definition="A diagonal matrix whose diagonal entries are all equal, aᵢⱼ = k when i = j and 0 when i ≠ j."
          icon="◆"
        />
        <FactCard
          title="Identity matrix"
          definition="A square matrix with aᵢⱼ = 1 when i = j and aᵢⱼ = 0 when i ≠ j; written Iₙ."
          icon="I"
        />
        <FactCard
          title="Zero matrix"
          definition="A matrix all of whose elements are zero; written O."
          icon="0"
        />
      </div>

      <TableCard
        title="The seven standard types at a glance"
        headers={["Type", "Condition", "Example"]}
        rows={[
          {
            cells: [
              "Column",
              <span key="c">order <Formula>{String.raw`m\times 1`}</Formula></span>,
              <Formula key="ce">{String.raw`\begin{bmatrix} 1\\ 2\\ 3\end{bmatrix}`}</Formula>,
            ],
          },
          {
            cells: [
              "Row",
              <span key="r">order <Formula>{String.raw`1\times n`}</Formula></span>,
              <Formula key="re">{String.raw`\begin{bmatrix} 1 & 2 & 3\end{bmatrix}`}</Formula>,
            ],
          },
          {
            cells: [
              "Square",
              <span key="s"><Formula>{String.raw`m=n`}</Formula></span>,
              <Formula key="se">{String.raw`\begin{bmatrix} 1 & 2\\ 3 & 4\end{bmatrix}`}</Formula>,
            ],
          },
          {
            cells: [
              "Diagonal",
              <span key="d"><Formula>{String.raw`a_{ij}=0,\ i\neq j`}</Formula></span>,
              <Formula key="de">{String.raw`\begin{bmatrix} 2 & 0\\ 0 & 5\end{bmatrix}`}</Formula>,
            ],
          },
          {
            cells: [
              "Scalar",
              <span key="sc"><Formula>{String.raw`a_{ii}=k,\ a_{ij}=0\ (i\neq j)`}</Formula></span>,
              <Formula key="sce">{String.raw`\begin{bmatrix} 3 & 0\\ 0 & 3\end{bmatrix}`}</Formula>,
            ],
          },
          {
            cells: [
              "Identity",
              <span key="i"><Formula>{String.raw`a_{ii}=1,\ a_{ij}=0\ (i\neq j)`}</Formula></span>,
              <Formula key="ie">{String.raw`\begin{bmatrix} 1 & 0\\ 0 & 1\end{bmatrix}`}</Formula>,
            ],
          },
          {
            cells: [
              "Zero",
              <span key="z">every entry <Formula>{String.raw`0`}</Formula></span>,
              <Formula key="ze">{String.raw`\begin{bmatrix} 0 & 0\\ 0 & 0\end{bmatrix}`}</Formula>,
            ],
          },
        ]}
        caption="A diagonal matrix need not have equal diagonal entries; a scalar matrix is a special diagonal matrix with equal entries."
      />

      <h2 id="h-3-3-1">3.3.1 Equality of matrices</h2>
      <Callout type="note">
        <p>
          <strong>Definition 2.</strong> Two matrices{" "}
          <Formula>{String.raw`A=[a_{ij}]`}</Formula> and{" "}
          <Formula>{String.raw`B=[b_{ij}]`}</Formula> are <strong>equal</strong> if
        </p>
        <p>
          (i) they are of the same order, and
        </p>
        <p>
          (ii) each element of <Formula>{String.raw`A`}</Formula> equals the
          corresponding element of <Formula>{String.raw`B`}</Formula>, i.e.{" "}
          <Formula>{String.raw`a_{ij}=b_{ij}`}</Formula> for all{" "}
          <Formula>{String.raw`i,j`}</Formula>.
        </p>
      </Callout>
      <p>
        So <Formula>{String.raw`\begin{bmatrix} 2 & 3\\ 0 & 1\end{bmatrix}`}</Formula>{" "}
        and <Formula>{String.raw`\begin{bmatrix} 2 & 3\\ 0 & 1\end{bmatrix}`}</Formula>{" "}
        are equal, while{" "}
        <Formula>{String.raw`\begin{bmatrix} 3 & 2\\ 0 & 1\end{bmatrix}`}</Formula> and{" "}
        <Formula>{String.raw`\begin{bmatrix} 2 & 3\\ 0 & 1\end{bmatrix}`}</Formula> are
        not.
      </p>

      <Expandable title="Examples 4 and 5 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 4.</strong> Given
            </p>
            <FormulaBlock
              latex={String.raw`\begin{bmatrix} x+3 & z+4 & 2y-7\\ 4x+6 & a-1 & 0\\ b-3 & 3 & 2c+2\end{bmatrix}=\begin{bmatrix} 0 & 6 & 3y-2\\ 2-5x & -3 & 2c+2\\ 2b+4 & 3 & 0\end{bmatrix}`}
            />
            <p>
              <strong>Solution.</strong> Compare corresponding entries.
            </p>
            <FormulaBlock
              latex={String.raw`x+3=0,\quad z+4=6,\quad 2y-7=3y-2`}
            />
            <FormulaBlock
              latex={String.raw`4x+6=2-5x,\quad a-1=-3,\quad 0=2c+2`}
            />
            <FormulaBlock
              latex={String.raw`b-3=2b+4`}
            />
            <p>
              Solving:{" "}
              <Formula>{String.raw`x=-3,\ y=-5,\ z=2,\ a=-2,\ b=-7,\ c=-1`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 5.</strong> Find{" "}
              <Formula>{String.raw`a,b,c,d`}</Formula> from
            </p>
            <FormulaBlock
              latex={String.raw`\begin{bmatrix} 2a+b & a-2b\\ 5c-d & 4c+3d\end{bmatrix}=\begin{bmatrix} 4 & -3\\ 11 & 24\end{bmatrix}`}
            />
            <p>
              <strong>Solution.</strong> Equality of entries gives two pairs of linear
              equations.
            </p>
            <FormulaBlock
              latex={String.raw`2a+b=4,\quad a-2b=-3`}
            />
            <FormulaBlock
              latex={String.raw`5c-d=11,\quad 4c+3d=24`}
            />
            <p>
              Solving:{" "}
              <Formula>{String.raw`a=1,\ b=2,\ c=3,\ d=4`}</Formula>.
            </p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 3.1">
        <ExerciseQa
          questions={[
            <span key="q1">
              In the matrix{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 2 & 5 & 19 & -7\\ 35 & -2 & \tfrac{12}{2} & 17\\ \sqrt{3} & 1 & -5 & 5\end{bmatrix}`}</Formula>{" "}
              write (i) the order, (ii) the number of elements, (iii) the elements{" "}
              <Formula>{String.raw`a_{13},\ a_{21},\ a_{33},\ a_{24},\ a_{23}`}</Formula>.
            </span>,
            <span key="q2">
              If a matrix has 24 elements, what are the possible orders it can have?
              What if it has 13 elements?
            </span>,
            <span key="q3">
              If a matrix has 18 elements, what are the possible orders it can have?
              What if it has 5 elements?
            </span>,
            <span key="q4">
              Construct a <Formula>{String.raw`2\times 2`}</Formula> matrix{" "}
              <Formula>{String.raw`A=[a_{ij}]`}</Formula> whose elements are{" "}
              <br />
              <span className="text-muted-foreground">
                (i){" "}
                <Formula>{String.raw`a_{ij}=\frac{(i+j)^2}{2}`}</Formula> &nbsp; (ii){" "}
                <Formula>{String.raw`a_{ij}=\frac{i}{j}`}</Formula> &nbsp; (iii){" "}
                <Formula>{String.raw`a_{ij}=\frac{(i+2j)^2}{2}`}</Formula>
              </span>
            </span>,
            <span key="q5">
              Construct a <Formula>{String.raw`3\times 4`}</Formula> matrix whose
              elements are <br />
              <span className="text-muted-foreground">
                (i){" "}
                <Formula>{String.raw`a_{ij}=\frac{1}{2}|-3i+j|`}</Formula> &nbsp; (ii){" "}
                <Formula>{String.raw`a_{ij}=2i-j`}</Formula>
              </span>
            </span>,
            <span key="q6">
              Find the values of <Formula>{String.raw`x,y,z`}</Formula> from{" "}
              <Formula>{String.raw`\begin{bmatrix} x+y & 2\\ 5+z & xy\end{bmatrix}=\begin{bmatrix} 6 & 2\\ 5 & 8\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q7">
              Find <Formula>{String.raw`a,b,c,d`}</Formula> from{" "}
              <Formula>{String.raw`\begin{bmatrix} a-b & 2a+c\\ 2a-b & 3c+d\end{bmatrix}=\begin{bmatrix} -1 & 5\\ 0 & 13\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q8">
              <Formula>{String.raw`A=[a_{ij}]_{m\times n}`}</Formula> is a square
              matrix if <br />
              <span className="text-muted-foreground">
                (A) <Formula>{String.raw`m<n`}</Formula> (B){" "}
                <Formula>{String.raw`m>n`}</Formula> (C){" "}
                <Formula>{String.raw`m=n`}</Formula> (D) None of these
              </span>
            </span>,
            <span key="q9">
              Which values of <Formula>{String.raw`x`}</Formula> and{" "}
              <Formula>{String.raw`y`}</Formula> make the pair of matrices equal:{" "}
              <Formula>{String.raw`\begin{bmatrix} 3x+7 & 5\\ y+1 & 2-3x\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`\begin{bmatrix} 0 & y-2\\ 8 & 4\end{bmatrix}`}</Formula>?
            </span>,
            <span key="q10">
              The number of all possible matrices of order{" "}
              <Formula>{String.raw`3\times 3`}</Formula> with each entry 0 or 1 is{" "}
              <br />
              <span className="text-muted-foreground">
                (A) 27 (B) 18 (C) 81 (D) 512
              </span>
            </span>,
          ]}
          answers={[
            <span key="a1">
              (i) <Formula>{String.raw`3\times 4`}</Formula> (ii) 12 (iii){" "}
              <Formula>{String.raw`a_{13}=19,\ a_{21}=35,\ a_{33}=-5,\ a_{24}=17,\ a_{23}=\tfrac{12}{2}=6`}</Formula>
            </span>,
            <span key="a2">
              24 elements: 1×24, 2×12, 3×8, 4×6, 6×4, 8×3, 12×2, 24×1. With 13
              elements only 1×13 and 13×1 (13 is prime).
            </span>,
            <span key="a3">
              18 elements: 1×18, 2×9, 3×6, 6×3, 9×2, 18×1. With 5 elements: 1×5 and
              5×1.
            </span>,
            <span key="a4">
              (i){" "}
              <Formula>{String.raw`\begin{bmatrix} 2 & \tfrac{9}{2}\\ \tfrac{9}{2} & 8\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & \tfrac{1}{2}\\ 2 & 1\end{bmatrix}`}</Formula>{" "}
              (iii){" "}
              <Formula>{String.raw`\begin{bmatrix} \tfrac{9}{2} & 8\\ 8 & \tfrac{25}{2}\end{bmatrix}`}</Formula>
            </span>,
            <span key="a5">
              (i){" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & \tfrac{1}{2} & 0 & \tfrac{1}{2}\\ \tfrac{5}{2} & 2 & \tfrac{3}{2} & 1\\ 4 & \tfrac{7}{2} & 3 & \tfrac{5}{2}\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & 0 & -1 & -2\\ 3 & 2 & 1 & 0\\ 5 & 4 & 3 & 2\end{bmatrix}`}</Formula>
            </span>,
            <span key="a6">
              <Formula>{String.raw`x=2,\ y=4,\ z=3`}</Formula>
            </span>,
            <span key="a7">
              <Formula>{String.raw`a=-1,\ b=-2,\ c=2,\ d=1`}</Formula>
            </span>,
            <span key="a8">(C) m = n</span>,
            <span key="a9">
              (B) not possible to find — the systems give contradictory values of{" "}
              <Formula>{String.raw`y`}</Formula>.
            </span>,
            <span key="a10">(D) 512, since 2⁹ = 512</span>,
          ]}
        />
      </Expandable>

      <h2 id="h-3-4">3.4 Operations on Matrices</h2>

      <h3 id="h-3-4-1">3.4.1 Addition of matrices</h3>
      <p>
        Two matrices are added only when they are of the <strong>same order</strong>,
        by adding corresponding entries.
      </p>
      <FormulaBlock
        latex={String.raw`A+B=[a_{ij}]+[b_{ij}]=[a_{ij}+b_{ij}]`}
        label="Addition — same order required"
        important
      />
      <p>
        The difference is{" "}
        <Formula>{String.raw`A-B=A+(-1)B`}</Formula>. Note that{" "}
        <Formula>{String.raw`A+B`}</Formula> is undefined when the orders differ.
      </p>

      <h3 id="h-3-4-2">3.4.2 Multiplication of a matrix by a scalar</h3>
      <p>
        If <Formula>{String.raw`A=[a_{ij}]_{m\times n}`}</Formula> and{" "}
        <Formula>{String.raw`k`}</Formula> is a scalar, then{" "}
        <Formula>{String.raw`kA=[k\,a_{ij}]_{m\times n}`}</Formula> — every entry is
        multiplied by <Formula>{String.raw`k`}</Formula>. Also{" "}
        <Formula>{String.raw`-A=(-1)A`}</Formula>.
      </p>

      <h3 id="h-3-4-3">3.4.3 Properties of matrix addition</h3>
      <TableCard
        title="Laws of matrix addition"
        headers={["Property", "Statement"]}
        rows={[
          {
            cells: [
              "Commutative",
              <Formula key="p1">{String.raw`A+B=B+A`}</Formula>,
            ],
          },
          {
            cells: [
              "Associative",
              <Formula key="p2">{String.raw`(A+B)+C=A+(B+C)`}</Formula>,
            ],
          },
          {
            cells: [
              "Existence of zero",
              <span key="p3">
                <Formula>{String.raw`A+O=O+A=A`}</Formula>, where O is the zero matrix
                of the same order
              </span>,
            ],
          },
          {
            cells: [
              "Existence of negative",
              <Formula key="p4">{String.raw`A+(-A)=O`}</Formula>,
            ],
          },
        ]}
        caption="All four laws hold only when A, B and C are of the same order."
      />

      <h3 id="h-3-4-4">3.4.4 Properties of scalar multiplication</h3>
      <TableCard
        title="Laws of scalar multiplication"
        headers={["Property", "Statement"]}
        rows={[
          {
            cells: [
              "Distributive over addition",
              <Formula key="s1">{String.raw`k(A+B)=kA+kB`}</Formula>,
            ],
          },
          {
            cells: [
              "Distributive over scalars",
              <Formula key="s2">{String.raw`(k+l)A=kA+lA`}</Formula>,
            ],
          },
          {
            cells: [
              "Associative in scalars",
              <Formula key="s3">{String.raw`(kl)A=k(lA)`}</Formula>,
            ],
          },
          {
            cells: [
              "Unit scalar",
              <Formula key="s4">{String.raw`1\cdot A=A`}</Formula>,
            ],
          },
        ]}
      />

      <Expandable title="Examples 6 to 11 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 6.</strong> If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 2 & 3\\ 1 & -4\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 5 & -2\\ 3 & 1\end{bmatrix}`}</Formula>
              , find <Formula>{String.raw`A+B`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Add corresponding entries:
            </p>
            <FormulaBlock
              latex={String.raw`A+B=\begin{bmatrix} 2+5 & 3-2\\ 1+3 & -4+1\end{bmatrix}=\begin{bmatrix} 7 & 1\\ 4 & -3\end{bmatrix}`}
            />
          </div>
          <div>
            <p>
              <strong>Example 7.</strong> Find{" "}
              <Formula>{String.raw`2A-B`}</Formula> for{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 1 & 2\\ 3 & 4\end{bmatrix},\ B=\begin{bmatrix} 0 & 1\\ 2 & 3\end{bmatrix}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> First double every entry of{" "}
              <Formula>{String.raw`A`}</Formula>, then subtract:
            </p>
            <FormulaBlock
              latex={String.raw`2A-B=\begin{bmatrix} 2 & 4\\ 6 & 8\end{bmatrix}-\begin{bmatrix} 0 & 1\\ 2 & 3\end{bmatrix}=\begin{bmatrix} 2 & 3\\ 4 & 5\end{bmatrix}`}
            />
          </div>
          <div>
            <p>
              <strong>Example 8.</strong> If{" "}
              <Formula>{String.raw`X=\begin{bmatrix} 3 & 1\\ -1 & 2\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`Y=\begin{bmatrix} 1 & 0\\ 2 & 3\end{bmatrix}`}</Formula>
              , find <Formula>{String.raw`2X+3Y`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Scalar multiplication first, then add:
            </p>
            <FormulaBlock
              latex={String.raw`2X+3Y=\begin{bmatrix} 6 & 2\\ -2 & 4\end{bmatrix}+\begin{bmatrix} 3 & 0\\ 6 & 9\end{bmatrix}=\begin{bmatrix} 9 & 2\\ 4 & 13\end{bmatrix}`}
            />
          </div>
          <div>
            <p>
              <strong>Example 9.</strong> Find <Formula>{String.raw`X`}</Formula> and{" "}
              <Formula>{String.raw`Y`}</Formula> if
            </p>
            <FormulaBlock
              latex={String.raw`X+Y=\begin{bmatrix} 7 & 0\\ 2 & 5\end{bmatrix},\qquad X-Y=\begin{bmatrix} 3 & 0\\ 0 & 3\end{bmatrix}`}
            />
            <p>
              <strong>Solution.</strong> Adding the two equations,{" "}
              <Formula>{String.raw`2X=\begin{bmatrix} 10 & 0\\ 2 & 8\end{bmatrix}`}</Formula>{" "}
              so{" "}
              <Formula>{String.raw`X=\begin{bmatrix} 5 & 0\\ 1 & 4\end{bmatrix}`}</Formula>
              . Subtracting,
            </p>
            <FormulaBlock
              latex={String.raw`2Y=\begin{bmatrix} 4 & 0\\ 2 & 2\end{bmatrix}\implies Y=\begin{bmatrix} 2 & 0\\ 1 & 1\end{bmatrix}`}
            />
          </div>
          <div>
            <p>
              <strong>Example 10.</strong> Find{" "}
              <Formula>{String.raw`x`}</Formula> and{" "}
              <Formula>{String.raw`y`}</Formula> from
            </p>
            <FormulaBlock
              latex={String.raw`2\begin{bmatrix} x & 5\\ 7 & y-3\end{bmatrix}+\begin{bmatrix} 3 & -4\\ 1 & 2\end{bmatrix}=\begin{bmatrix} 7 & 6\\ 15 & 14\end{bmatrix}`}
            />
            <p>
              <strong>Solution.</strong> The left side is
            </p>
            <FormulaBlock
              latex={String.raw`\begin{bmatrix} 2x+3 & 6\\ 15 & 2y-4\end{bmatrix}=\begin{bmatrix} 7 & 6\\ 15 & 14\end{bmatrix}`}
            />
            <p>
              Hence <Formula>{String.raw`2x+3=7\Rightarrow x=2`}</Formula> and{" "}
              <Formula>{String.raw`2y-4=14\Rightarrow y=9`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 11.</strong> Two farmers Ramkishan and Gurcharan Singh
              cultivate only three crops — wheat, paddy and maize. The production
              matrix and the price matrix are
            </p>
            <FormulaBlock
              latex={String.raw`\text{Production}=\begin{bmatrix} 100 & 80 & 60\\ 50 & 70 & 90\end{bmatrix},\qquad \text{Price}=\begin{bmatrix} 8000\\ 6000\\ 7000\end{bmatrix}`}
            />
            <p>
              Find each farmer&rsquo;s total income.
            </p>
            <p>
              <strong>Solution.</strong> Multiply production by prices:
            </p>
            <FormulaBlock
              latex={String.raw`\begin{bmatrix} 100 & 80 & 60\\ 50 & 70 & 90\end{bmatrix}\begin{bmatrix} 8000\\ 6000\\ 7000\end{bmatrix}=\begin{bmatrix} 800000+480000+420000\\ 400000+420000+630000\end{bmatrix}=\begin{bmatrix} 1700000\\ 1450000\end{bmatrix}`}
            />
            <p>
              Ramkishan earns ₹17,00,000 and Gurcharan Singh ₹14,50,000.
            </p>
          </div>
        </div>
      </Expandable>

      <h3 id="h-3-4-5">3.4.5 Multiplication of matrices</h3>
      <p>
        Let <Formula>{String.raw`A=[a_{ij}]`}</Formula> be of order{" "}
        <Formula>{String.raw`m\times n`}</Formula> and{" "}
        <Formula>{String.raw`B=[b_{jk}]`}</Formula> be of order{" "}
        <Formula>{String.raw`n\times p`}</Formula>. Then{" "}
        <Formula>{String.raw`AB`}</Formula> is of order{" "}
        <Formula>{String.raw`m\times p`}</Formula> and its{" "}
        <Formula>{String.raw`(i,k)`}</Formula> entry is the sum of products of the{" "}
        <Formula>{String.raw`i^{th}`}</Formula> row of <Formula>{String.raw`A`}</Formula>{" "}
        with the <Formula>{String.raw`k^{th}`}</Formula> column of{" "}
        <Formula>{String.raw`B`}</Formula>.
      </p>
      <FormulaBlock
        latex={String.raw`(AB)_{ik}=\sum_{j=1}^{n}a_{ij}b_{jk}=a_{i1}b_{1k}+a_{i2}b_{2k}+\cdots+a_{in}b_{nk}`}
        label="Row × column rule"
        important
      />
      <KeyPoint>
        <Formula>{String.raw`AB`}</Formula> is defined only when the number of{" "}
        <strong>columns of <Formula>{String.raw`A`}</Formula></strong> equals the
        number of <strong>rows of <Formula>{String.raw`B`}</Formula></strong>. If{" "}
        <Formula>{String.raw`AB`}</Formula> is defined,{" "}
        <Formula>{String.raw`BA`}</Formula> need not be.
      </KeyPoint>

      <Expandable title="Examples 12 to 15 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 12.</strong> Find{" "}
              <Formula>{String.raw`AB`}</Formula> if
            </p>
            <FormulaBlock
              latex={String.raw`A=\begin{bmatrix} 6 & 9\\ 2 & 3\end{bmatrix},\qquad B=\begin{bmatrix} 2 & 6 & 0\\ 7 & 9 & 8\end{bmatrix}`}
            />
            <p>
              <strong>Solution.</strong> Here{" "}
              <Formula>{String.raw`A`}</Formula> is{" "}
              <Formula>{String.raw`2\times 2`}</Formula> and{" "}
              <Formula>{String.raw`B`}</Formula> is{" "}
              <Formula>{String.raw`2\times 3`}</Formula>, so{" "}
              <Formula>{String.raw`AB`}</Formula> is{" "}
              <Formula>{String.raw`2\times 3`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`AB=\begin{bmatrix} 6(2)+9(7) & 6(6)+9(9) & 6(0)+9(8)\\ 2(2)+3(7) & 2(6)+3(9) & 2(0)+3(8)\end{bmatrix}=\begin{bmatrix} 75 & 117 & 72\\ 25 & 39 & 24\end{bmatrix}`}
            />
            <p>
              Note <Formula>{String.raw`BA`}</Formula> is not defined here.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 13.</strong> For
            </p>
            <FormulaBlock
              latex={String.raw`A=\begin{bmatrix} 1 & 2 & 3\\ 4 & 2 & 5\end{bmatrix},\qquad B=\begin{bmatrix} 2 & 3\\ 4 & 5\\ 2 & 1\end{bmatrix}`}
            />
            <p>
              find <Formula>{String.raw`AB`}</Formula> and{" "}
              <Formula>{String.raw`BA`}</Formula>, and show{" "}
              <Formula>{String.raw`AB\neq BA`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong>
            </p>
            <FormulaBlock
              latex={String.raw`AB=\begin{bmatrix} 2+8+6 & 3+10+3\\ 8+8+10 & 12+10+5\end{bmatrix}=\begin{bmatrix} 16 & 16\\ 26 & 27\end{bmatrix}`}
            />
            <FormulaBlock
              latex={String.raw`BA=\begin{bmatrix} 2+12 & 4+6 & 6+15\\ 4+20 & 8+10 & 12+25\\ 2+4 & 4+2 & 6+5\end{bmatrix}=\begin{bmatrix} 14 & 10 & 21\\ 24 & 18 & 37\\ 6 & 6 & 11\end{bmatrix}`}
            />
            <p>
              The two products even have different orders, so{" "}
              <Formula>{String.raw`AB\neq BA`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 14.</strong> If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 1 & 0\\ 0 & -1\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 0 & 1\\ 1 & 0\end{bmatrix}`}</Formula>
              , show <Formula>{String.raw`AB\neq BA`}</Formula> even though both are of
              the same order.
            </p>
            <p>
              <strong>Solution.</strong>
            </p>
            <FormulaBlock
              latex={String.raw`AB=\begin{bmatrix} 0 & 1\\ -1 & 0\end{bmatrix},\qquad BA=\begin{bmatrix} 0 & -1\\ 1 & 0\end{bmatrix}`}
            />
            <p>
              Hence matrix multiplication is <strong>not commutative</strong>. However,
              multiplication of diagonal matrices of the same order is commutative.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 15.</strong> If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 0 & -1\\ 0 & 2\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 3 & 5\\ 0 & 0\end{bmatrix}`}</Formula>
              , find <Formula>{String.raw`AB`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong>
            </p>
            <FormulaBlock
              latex={String.raw`AB=\begin{bmatrix} 0(3)+(-1)(0) & 0(5)+(-1)(0)\\ 0(3)+2(0) & 0(5)+2(0)\end{bmatrix}=\begin{bmatrix} 0 & 0\\ 0 & 0\end{bmatrix}`}
            />
            <p>
              So the product of two non-zero matrices can be the zero matrix — there is
              no &ldquo;zero product rule&rdquo; for matrices.
            </p>
          </div>
        </div>
      </Expandable>

      <h3 id="h-3-4-6">3.4.6 Properties of multiplication of matrices</h3>
      <TableCard
        title="Laws of matrix multiplication"
        headers={["Property", "Statement", "Remark"]}
        rows={[
          {
            cells: [
              "Associative",
              <Formula key="m1">{String.raw`(AB)C=A(BC)`}</Formula>,
              "whenever both sides are defined",
            ],
          },
          {
            cells: [
              "Distributive I",
              <Formula key="m2">{String.raw`A(B+C)=AB+AC`}</Formula>,
              "A, B, C of compatible orders",
            ],
          },
          {
            cells: [
              "Distributive II",
              <Formula key="m3">{String.raw`(A+B)C=AC+BC`}</Formula>,
              "A, B, C of compatible orders",
            ],
          },
          {
            cells: [
              "Identity",
              <Formula key="m4">{String.raw`IA=AI=A`}</Formula>,
              "I of the same order as the square matrix A",
            ],
          },
          {
            cells: [
              "Non-commutative",
              <Formula key="m5">{String.raw`AB\neq BA`}</Formula>,
              "in general, even when both are defined",
            ],
          },
          {
            cells: [
              "No cancellation",
              <Formula key="m6">{String.raw`AB=AC\ \not\Rightarrow\ B=C`}</Formula>,
              "if A is not invertible",
            ],
          },
        ]}
        caption="Multiplication is associative and distributive, but not commutative, and cancellation is not allowed."
      />

      <Expandable title="Examples 16 to 19 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 16.</strong> For the given matrices{" "}
              <Formula>{String.raw`A_{3\times 3},\ B_{3\times 2},\ C_{2\times 4}`}</Formula>
              , compute <Formula>{String.raw`A(BC)`}</Formula> and{" "}
              <Formula>{String.raw`(AB)C`}</Formula> and verify{" "}
              <Formula>{String.raw`(AB)C=A(BC)`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> First compute{" "}
              <Formula>{String.raw`AB`}</Formula> (order{" "}
              <Formula>{String.raw`3\times 2`}</Formula>) and multiply by{" "}
              <Formula>{String.raw`C`}</Formula>. Separately compute{" "}
              <Formula>{String.raw`BC`}</Formula> (order{" "}
              <Formula>{String.raw`3\times 4`}</Formula>) and multiply on the left by{" "}
              <Formula>{String.raw`A`}</Formula>. Both routes give the same{" "}
              <Formula>{String.raw`3\times 4`}</Formula> matrix, confirming
              associativity.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 17.</strong> For{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 0 & 6 & 7\\ 6 & 0 & 8\\ 7 & 8 & 0\end{bmatrix}`}</Formula>
              ,{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 0 & 1 & 1\\ 1 & 0 & 2\\ 1 & 2 & 0\end{bmatrix}`}</Formula>
              ,{" "}
              <Formula>{String.raw`C=\begin{bmatrix} 2\\ 2\\ 3\end{bmatrix}`}</Formula>
              , verify{" "}
              <Formula>{String.raw`(A+B)C=AC+BC`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Compute{" "}
              <Formula>{String.raw`A+B=\begin{bmatrix} 0 & 7 & 8\\ 7 & 0 & 10\\ 8 & 10 & 0\end{bmatrix}`}</Formula>
              , then multiply by <Formula>{String.raw`C`}</Formula>. Compute{" "}
              <Formula>{String.raw`AC`}</Formula> and{" "}
              <Formula>{String.raw`BC`}</Formula> separately and add; the results agree,
              verifying the distributive law.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 18.</strong> If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 1 & 2 & 3\\ 3 & 2 & 1\\ 4 & 2 & 1\end{bmatrix}`}</Formula>
              , show that{" "}
              <Formula>{String.raw`A^2-4A-5I=O`}</Formula> and hence find{" "}
              <Formula>{String.raw`A^{-1}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Compute{" "}
              <Formula>{String.raw`A^2`}</Formula> by row–column multiplication, then
              substitute:
            </p>
            <FormulaBlock
              latex={String.raw`A^2-4A-5I=O\ \Longrightarrow\ A(A-4I)=5I\ \Longrightarrow\ A^{-1}=\tfrac{1}{5}(A-4I)`}
            />
            <p>
              The matrix <Formula>{String.raw`A-4I`}</Formula> is easy to write down,
              so the inverse follows without any elimination.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 19.</strong> In a legislative assembly election a political
              group hired a public relations agency to advertise its candidate. The
              agency contacted two groups of people. The number contacted in each group
              and the fraction who voted for the candidate are known; use matrix
              multiplication to find the total number of votes.
            </p>
            <p>
              <strong>Solution.</strong> Multiply the contact-matrix by the
              vote-fraction matrix:
            </p>
            <FormulaBlock
              latex={String.raw`\text{Votes}=\text{Number contacted}\times\text{Fraction voting}`}
            />
            <p>
              The resulting entries are the number of votes from each group; adding them
              gives the total.
            </p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 3.2">
        <ExerciseQa
          questions={[
            <span key="q1">
              Let{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 2 & 4\\ 3 & 2\end{bmatrix}`}</Formula>
              ,{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 1 & 3\\ -2 & 5\end{bmatrix}`}</Formula>
              ,{" "}
              <Formula>{String.raw`C=\begin{bmatrix} -2 & 5\\ 3 & 4\end{bmatrix}`}</Formula>
              . Find (i) <Formula>{String.raw`A+B`}</Formula> (ii){" "}
              <Formula>{String.raw`A-B`}</Formula> (iii){" "}
              <Formula>{String.raw`3A-C`}</Formula> (iv){" "}
              <Formula>{String.raw`AB`}</Formula> (v){" "}
              <Formula>{String.raw`BA`}</Formula>.
            </span>,
            <span key="q2">
              Compute: (i){" "}
              <Formula>{String.raw`\begin{bmatrix} a & b\\ -b & a\end{bmatrix}+\begin{bmatrix} a & b\\ b & a\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} a^2+b^2 & b^2+c^2\\ a^2+c^2 & a^2+b^2\end{bmatrix}+\begin{bmatrix} 2ab & 2bc\\ -2ac & -2ab\end{bmatrix}`}</Formula>
            </span>,
            <span key="q3">
              Compute the indicated products: (i){" "}
              <Formula>{String.raw`\begin{bmatrix} a & b\\ -b & a\end{bmatrix}\begin{bmatrix} a & -b\\ b & a\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} 1\\ 2\\ 3\end{bmatrix}\begin{bmatrix} 2 & 3 & 4\end{bmatrix}`}</Formula>{" "}
              (iii){" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & -2\\ 2 & 3\end{bmatrix}\begin{bmatrix} 1 & 2 & 3\\ 2 & 3 & 1\end{bmatrix}`}</Formula>
            </span>,
            <span key="q4">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 1 & 2 & -3\\ 5 & 0 & 2\\ 1 & -1 & 1\end{bmatrix}`}</Formula>
              ,{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 3 & -1 & 2\\ 4 & 2 & 5\\ 2 & 0 & 3\end{bmatrix}`}</Formula>
              ,{" "}
              <Formula>{String.raw`C=\begin{bmatrix} 4 & 1 & 2\\ 0 & 3 & 2\\ 1 & -2 & 3\end{bmatrix}`}</Formula>
              , compute <Formula>{String.raw`(A+B)`}</Formula> and{" "}
              <Formula>{String.raw`(B-C)`}</Formula>; verify{" "}
              <Formula>{String.raw`A+(B-C)=(A+B)-C`}</Formula>.
            </span>,
            <span key="q5">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 2/3 & 1 & 5/3\\ 1/3 & 2/3 & 4/3\\ 7/3 & 2 & 2/3\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 2/5 & 3/5 & 1\\ 1/5 & 2/5 & 4/5\\ 7/5 & 6/5 & 2/5\end{bmatrix}`}</Formula>
              , compute <Formula>{String.raw`3A-5B`}</Formula>.
            </span>,
            <span key="q6">
              Simplify{" "}
              <Formula>{String.raw`\cos\theta\begin{bmatrix} \cos\theta & \sin\theta\\ -\sin\theta & \cos\theta\end{bmatrix}+\sin\theta\begin{bmatrix} \sin\theta & -\cos\theta\\ \cos\theta & \sin\theta\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q7">
              Find <Formula>{String.raw`X`}</Formula> and{" "}
              <Formula>{String.raw`Y`}</Formula> if{" "}
              <Formula>{String.raw`X+Y=\begin{bmatrix} 7 & 0\\ 2 & 5\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`X-Y=\begin{bmatrix} 3 & 0\\ 0 & 3\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q8">
              Find <Formula>{String.raw`X`}</Formula> if{" "}
              <Formula>{String.raw`Y=\begin{bmatrix} 3 & 2\\ 1 & 4\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`2X+Y=\begin{bmatrix} 1 & 0\\ 3 & 2\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q9">
              Find <Formula>{String.raw`x`}</Formula> and{" "}
              <Formula>{String.raw`y`}</Formula> if{" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & 3\\ 0 & 1\end{bmatrix}\begin{bmatrix} y\\ x\end{bmatrix}=\begin{bmatrix} 5\\ 6\end{bmatrix}`}</Formula>{" "}
              — solve{" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & 3\\ 0 & 1\end{bmatrix}\begin{bmatrix} y\\ x\end{bmatrix}=\begin{bmatrix} 5\\ 6\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q10">
              Solve for <Formula>{String.raw`x,y,z,t`}</Formula> if{" "}
              <Formula>{String.raw`2\begin{bmatrix} x & z\\ y & t\end{bmatrix}+3\begin{bmatrix} 1 & -1\\ 0 & 2\end{bmatrix}=3\begin{bmatrix} 3 & 5\\ 4 & 6\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q11">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 2 & -1\\ 3 & 1\end{bmatrix}`}</Formula>
              , find <Formula>{String.raw`x`}</Formula> and{" "}
              <Formula>{String.raw`y`}</Formula> such that{" "}
              <Formula>{String.raw`A^2+xA+yI=O`}</Formula>.
            </span>,
            <span key="q12">
              Given{" "}
              <Formula>{String.raw`3\begin{bmatrix} x & y\\ z & w\end{bmatrix}=\begin{bmatrix} x & 6\\ -1 & 2w\end{bmatrix}+\begin{bmatrix} 4 & x+y\\ z+w & 3\end{bmatrix}`}</Formula>
              , find <Formula>{String.raw`x,y,z,w`}</Formula>.
            </span>,
            <span key="q13">
              If{" "}
              <Formula>{String.raw`F(x)=\begin{bmatrix} \cos x & -\sin x & 0\\ \sin x & \cos x & 0\\ 0 & 0 & 1\end{bmatrix}`}</Formula>
              , show that{" "}
              <Formula>{String.raw`F(x)F(y)=F(x+y)`}</Formula>.
            </span>,
            <span key="q14">
              Show that (i){" "}
              <Formula>{String.raw`\begin{bmatrix} 5 & -1\\ 6 & 7\end{bmatrix}\begin{bmatrix} 2 & 1\\ 3 & 4\end{bmatrix}\neq\begin{bmatrix} 2 & 1\\ 3 & 4\end{bmatrix}\begin{bmatrix} 5 & -1\\ 6 & 7\end{bmatrix}`}</Formula>
              , (ii) matrix products do not commute in general.
            </span>,
            <span key="q15">
              Find <Formula>{String.raw`A^2-5A+6I`}</Formula> if{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 2 & 0 & 1\\ 2 & 1 & 3\\ 1 & -1 & 0\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q16">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 1 & 0 & 2\\ 0 & 2 & 1\\ 2 & 0 & 3\end{bmatrix}`}</Formula>
              , prove that{" "}
              <Formula>{String.raw`A^3-6A^2+7A+2I=O`}</Formula>.
            </span>,
            <span key="q17">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 3 & -2\\ 4 & -2\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`I=\begin{bmatrix} 1 & 0\\ 0 & 1\end{bmatrix}`}</Formula>
              , find <Formula>{String.raw`k`}</Formula> so that{" "}
              <Formula>{String.raw`A^2=kA-2I`}</Formula>.
            </span>,
            <span key="q18">
              A trust fund has ₹30,000 to invest in two bonds paying 5% and 7% per year.
              Using matrix multiplication, decide the split if the annual interest must
              be (a) ₹1800 (b) ₹2000.
            </span>,
            <span key="q19">
              A school bookshop has 10 dozen chemistry, 8 dozen physics and 10 dozen
              economics books, sold at ₹80, ₹60 and ₹40 each. Find the total amount
              received using matrix algebra.
            </span>,
            <span key="q20">
              Given <Formula>{String.raw`X_{2\times n},\ Y_{3\times k},\ Z_{2\times p},\ W_{n\times 3},\ P_{p\times k}`}</Formula>
              , the restrictions on <Formula>{String.raw`n,k,p`}</Formula> so that{" "}
              <Formula>{String.raw`PY+WY`}</Formula> is defined are <br />
              <span className="text-muted-foreground">
                (A) <Formula>{String.raw`k=3,\ p=n`}</Formula> (B){" "}
                <Formula>{String.raw`k`}</Formula> arbitrary,{" "}
                <Formula>{String.raw`p=2`}</Formula> (C){" "}
                <Formula>{String.raw`p`}</Formula> arbitrary,{" "}
                <Formula>{String.raw`k=3`}</Formula> (D){" "}
                <Formula>{String.raw`k=2,\ p=3`}</Formula>
              </span>
            </span>,
            <span key="q21">
              If <Formula>{String.raw`n=p`}</Formula>, the order of{" "}
              <Formula>{String.raw`7X-5Z`}</Formula> is <br />
              <span className="text-muted-foreground">
                (A) <Formula>{String.raw`p\times 2`}</Formula> (B){" "}
                <Formula>{String.raw`2\times n`}</Formula> (C){" "}
                <Formula>{String.raw`n\times 3`}</Formula> (D){" "}
                <Formula>{String.raw`p\times n`}</Formula>
              </span>
            </span>,
          ]}
          answers={[
            <span key="a1">
              (i){" "}
              <Formula>{String.raw`\begin{bmatrix} 3 & 7\\ 1 & 7\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & 1\\ 5 & -3\end{bmatrix}`}</Formula>{" "}
              (iii){" "}
              <Formula>{String.raw`\begin{bmatrix} 8 & 7\\ 6 & 2\end{bmatrix}`}</Formula>{" "}
              (iv){" "}
              <Formula>{String.raw`\begin{bmatrix} -6 & 26\\ -1 & 19\end{bmatrix}`}</Formula>{" "}
              (v){" "}
              <Formula>{String.raw`\begin{bmatrix} 11 & 10\\ 11 & 2\end{bmatrix}`}</Formula>{" "}
              — note <Formula>{String.raw`AB\neq BA`}</Formula>.
            </span>,
            <span key="a2">
              (i){" "}
              <Formula>{String.raw`\begin{bmatrix} 2a & 2b\\ 0 & 2a\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} (a+b)^2 & (b+c)^2\\ (a-c)^2 & (a-b)^2\end{bmatrix}`}</Formula>
            </span>,
            <span key="a3">
              (i){" "}
              <Formula>{String.raw`\begin{bmatrix} a^2+b^2 & 0\\ 0 & a^2+b^2\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} 2 & 3 & 4\\ 4 & 6 & 8\\ 6 & 9 & 12\end{bmatrix}`}</Formula>{" "}
              (iii){" "}
              <Formula>{String.raw`\begin{bmatrix} -3 & -4 & 1\\ 8 & 13 & 9\end{bmatrix}`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`A+B=\begin{bmatrix} 4 & 1 & -1\\ 9 & 2 & 7\\ 3 & -1 & 4\end{bmatrix}`}</Formula>
              ,{" "}
              <Formula>{String.raw`B-C=\begin{bmatrix} -1 & -2 & 0\\ 4 & -1 & 3\\ 1 & 2 & 0\end{bmatrix}`}</Formula>
              ; both sides of the identity give the same matrix.
            </span>,
            <span key="a5">
              <Formula>{String.raw`\begin{bmatrix} 0 & 0 & 0\\ 0 & 0 & 0\\ 0 & 0 & 0\end{bmatrix}`}</Formula>{" "}
              — the zero matrix.
            </span>,
            <span key="a6">
              <Formula>{String.raw`\begin{bmatrix} 1 & 0\\ 0 & 1\end{bmatrix}`}</Formula>{" "}
              (using <Formula>{String.raw`\cos^2\theta+\sin^2\theta=1`}</Formula>).
            </span>,
            <span key="a7">
              <Formula>{String.raw`X=\begin{bmatrix} 5 & 0\\ 1 & 4\end{bmatrix}`}</Formula>
              ,{" "}
              <Formula>{String.raw`Y=\begin{bmatrix} 2 & 0\\ 1 & 1\end{bmatrix}`}</Formula>
            </span>,
            <span key="a8">
              <Formula>{String.raw`X=\begin{bmatrix} -1 & -1\\ 1 & -1\end{bmatrix}`}</Formula>
            </span>,
            <span key="a9">
              <Formula>{String.raw`x=6,\ y=5`}</Formula>
            </span>,
            <span key="a10">
              <Formula>{String.raw`x=4,\ y=6,\ z=5,\ t=4`}</Formula>
            </span>,
            <span key="a11">
              <Formula>{String.raw`x=-4,\ y=-7`}</Formula>{" "}
              (from <Formula>{String.raw`A^2+xA+yI=O`}</Formula>).
            </span>,
            <span key="a12">
              <Formula>{String.raw`x=2,\ y=4,\ z=1,\ w=3`}</Formula>
            </span>,
            <span key="a13">
              Multiply the two matrices and use the addition formulas for sine and
              cosine:{" "}
              <Formula>{String.raw`\cos(x+y)=\cos x\cos y-\sin x\sin y`}</Formula>,{" "}
              <Formula>{String.raw`\sin(x+y)=\sin x\cos y+\cos x\sin y`}</Formula>.
            </span>,
            <span key="a14">
              The two products differ, as direct computation shows. Hence
              multiplication is non-commutative.
            </span>,
            <span key="a15">
              <Formula>{String.raw`\begin{bmatrix} 1 & -1 & 1\\ 2 & -1 & 3\\ -1 & 1 & 1\end{bmatrix}`}</Formula>
            </span>,
            <span key="a16">
              Compute <Formula>{String.raw`A^2`}</Formula> and{" "}
              <Formula>{String.raw`A^3`}</Formula>, substitute; all entries vanish.
            </span>,
            <span key="a17">
              <Formula>{String.raw`k=1`}</Formula> (compare entries after computing{" "}
              <Formula>{String.raw`A^2`}</Formula>).
            </span>,
            <span key="a18">
              Let{" "}
              <Formula>{String.raw`\begin{bmatrix} x & 30000-x\end{bmatrix}\begin{bmatrix} 0.05\\ 0.07\end{bmatrix}`}</Formula>{" "}
              be the interest. (a) ₹10,000 at 5% and ₹20,000 at 7%; (b) ₹5,000 at 5%
              and ₹25,000 at 7%.
            </span>,
            <span key="a19">
              <Formula>{String.raw`\begin{bmatrix} 120 & 96 & 120\end{bmatrix}\begin{bmatrix} 80\\ 60\\ 40\end{bmatrix}=9600+5760+4800=₹20{,}160`}</Formula>
            </span>,
            <span key="a20">(A) k = 3, p = n</span>,
            <span key="a21">(B) 2 × n</span>,
          ]}
        />
      </Expandable>

      <h2 id="h-3-5">3.5 Transpose of a Matrix</h2>
      <p>
        If <Formula>{String.raw`A=[a_{ij}]`}</Formula> is of order{" "}
        <Formula>{String.raw`m\times n`}</Formula>, then its <strong>transpose</strong>{" "}
        <Formula>{String.raw`A'`}</Formula> (also written{" "}
        <Formula>{String.raw`A^{T}`}</Formula>) is the{" "}
        <Formula>{String.raw`n\times m`}</Formula> matrix obtained by interchanging rows
        and columns:
      </p>
      <FormulaBlock
        latex={String.raw`A'=[a_{ji}]_{n\times m}`}
        label="Transpose — rows become columns"
        important
      />
      <p>
        For example, if{" "}
        <Formula>{String.raw`A=\begin{bmatrix} 1 & 2 & 3\\ 4 & 5 & 6\end{bmatrix}`}</Formula>
        , then{" "}
        <Formula>{String.raw`A'=\begin{bmatrix} 1 & 4\\ 2 & 5\\ 3 & 6\end{bmatrix}`}</Formula>
        .
      </p>

      <h3 id="h-3-5-1">3.5.1 Properties of transpose</h3>
      <FormulaCard>
        <div className="space-y-2">
          <div>
            <Formula>{String.raw`(A')'=A`}</Formula> — transposing twice returns the
            original matrix.
          </div>
          <div>
            <Formula>{String.raw`(A+B)'=A'+B'`}</Formula> — transpose of a sum is the sum
            of transposes.
          </div>
          <div>
            <Formula>{String.raw`(kA)'=kA'`}</Formula> — a scalar passes through.
          </div>
          <div>
            <Formula>{String.raw`(AB)'=B'A'`}</Formula> — the order <em>reverses</em> in a
            product.
          </div>
        </div>
      </FormulaCard>

      <Expandable title="Examples 20 and 21 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 20.</strong> For the given matrices{" "}
              <Formula>{String.raw`A`}</Formula> and{" "}
              <Formula>{String.raw`B`}</Formula>, verify{" "}
              <Formula>{String.raw`(AB)'=B'A'`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Compute{" "}
              <Formula>{String.raw`AB`}</Formula> and transpose it. Separately compute{" "}
              <Formula>{String.raw`B'`}</Formula> and{" "}
              <Formula>{String.raw`A'`}</Formula>, then multiply in the reversed order{" "}
              <Formula>{String.raw`B'A'`}</Formula>. The two results are identical —
              note the reversal of order is essential.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 21.</strong> For the given matrices verify{" "}
              <Formula>{String.raw`(A+B)'=A'+B'`}</Formula> and{" "}
              <Formula>{String.raw`(A-B)'=A'-B'`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Add (or subtract) entrywise, then transpose;
              compare with the transpose of each matrix added (or subtracted). Equality
              holds entry by entry because{" "}
              <Formula>{String.raw`a_{ij}\pm b_{ij}=b_{ij}\pm a_{ij}`}</Formula>.
            </p>
          </div>
        </div>
      </Expandable>

      <h2 id="h-3-6">3.6 Symmetric and Skew Symmetric Matrices</h2>
      <p>
        A square matrix <Formula>{String.raw`A`}</Formula> is{" "}
        <strong>symmetric</strong> if <Formula>{String.raw`A'=A`}</Formula>, and{" "}
        <strong>skew symmetric</strong> if{" "}
        <Formula>{String.raw`A'=-A`}</Formula>. In a skew symmetric matrix every diagonal
        entry must be zero, because{" "}
        <Formula>{String.raw`a_{ii}=-a_{ii}\Rightarrow a_{ii}=0`}</Formula>.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <FactCard
          title="Symmetric"
          definition="A' = A, i.e. aᵢⱼ = aⱼᵢ for all i, j. Example: [1 2; 2 3]."
          icon="=T"
        />
        <FactCard
          title="Skew symmetric"
          definition="A' = −A, i.e. aᵢⱼ = −aⱼᵢ and every diagonal entry is 0. Example: [0 2; −2 0]."
          icon="−T"
        />
      </div>

      <Callout type="important">
        <p>
          <strong>Theorem 1.</strong> For any square matrix{" "}
          <Formula>{String.raw`A`}</Formula>,{" "}
          <Formula>{String.raw`A+A'`}</Formula> is symmetric and{" "}
          <Formula>{String.raw`A-A'`}</Formula> is skew symmetric.
        </p>
      </Callout>
      <Callout type="important">
        <p>
          <strong>Theorem 2.</strong> Every square matrix can be written as the sum of a
          symmetric and a skew symmetric matrix:
        </p>
        <FormulaBlock
          latex={String.raw`A=\underbrace{\tfrac{1}{2}(A+A')}_{\text{symmetric}}+\underbrace{\tfrac{1}{2}(A-A')}_{\text{skew symmetric}}`}
        />
      </Callout>

      <Expandable title="Example 22 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 22.</strong> Express{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 2 & -2 & -4\\ -1 & 3 & 4\\ 1 & -2 & -3\end{bmatrix}`}</Formula>{" "}
              as the sum of a symmetric and a skew symmetric matrix.
            </p>
            <p>
              <strong>Solution.</strong> Write{" "}
              <Formula>{String.raw`P=\tfrac{1}{2}(B+B')`}</Formula> and{" "}
              <Formula>{String.raw`Q=\tfrac{1}{2}(B-B')`}</Formula>. Then{" "}
              <Formula>{String.raw`B=P+Q`}</Formula>, with{" "}
              <Formula>{String.raw`P'=P`}</Formula> and{" "}
              <Formula>{String.raw`Q'=-Q`}</Formula>.
            </p>
            <FormulaBlock
              latex={String.raw`P=\begin{bmatrix} 2 & -\tfrac{3}{2} & -\tfrac{3}{2}\\[2pt] -\tfrac{3}{2} & 3 & 1\\[2pt] -\tfrac{3}{2} & 1 & -3\end{bmatrix},\qquad Q=\begin{bmatrix} 0 & -\tfrac{1}{2} & -\tfrac{5}{2}\\[2pt] \tfrac{1}{2} & 0 & 3\\[2pt] \tfrac{5}{2} & -3 & 0\end{bmatrix}`}
            />
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 3.3">
        <ExerciseQa
          questions={[
            <span key="q1">
              Find the transpose of (i){" "}
              <Formula>{String.raw`\begin{bmatrix} 5\\ \tfrac{1}{2}\\ -1\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & -1\\ 2 & 3\end{bmatrix}`}</Formula>{" "}
              (iii){" "}
              <Formula>{String.raw`\begin{bmatrix} -1 & 5 & 6\\ 3 & 5 & 6\\ 2 & 3 & -1\end{bmatrix}`}</Formula>
            </span>,
            <span key="q2">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 1 & 2 & 3\\ 5 & 7 & 9\\ 2 & 1 & 1\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 4 & 1 & 5\\ -1 & 2 & 0\\ 1 & 3 & 1\end{bmatrix}`}</Formula>
              , verify (i){" "}
              <Formula>{String.raw`(A+B)'=A'+B'`}</Formula> (ii){" "}
              <Formula>{String.raw`(A-B)'=A'-B'`}</Formula>.
            </span>,
            <span key="q3">
              If{" "}
              <Formula>{String.raw`A'=\begin{bmatrix} 3 & 4\\ -1 & 2\\ 0 & 1\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 1 & 2 & 1\\ -1 & 2 & 3\end{bmatrix}`}</Formula>
              , verify (i){" "}
              <Formula>{String.raw`(A+B)'=A'+B'`}</Formula> (ii){" "}
              <Formula>{String.raw`(A-B)'=A'-B'`}</Formula>.
            </span>,
            <span key="q4">
              If{" "}
              <Formula>{String.raw`A'=\begin{bmatrix} -2 & 3\\ 1 & 2\end{bmatrix}`}</Formula>{" "}
              and{" "}
              <Formula>{String.raw`B=\begin{bmatrix} -1 & 0\\ 1 & 2\end{bmatrix}`}</Formula>
              , find <Formula>{String.raw`(A+2B)'`}</Formula>.
            </span>,
            <span key="q5">
              For the matrices <Formula>{String.raw`A`}</Formula> and{" "}
              <Formula>{String.raw`B`}</Formula>, verify{" "}
              <Formula>{String.raw`(AB)'=B'A'`}</Formula> where (i){" "}
              <Formula>{String.raw`A=\begin{bmatrix} 1\\ -4\\ 3\end{bmatrix}`}</Formula>
              ,{" "}
              <Formula>{String.raw`B=\begin{bmatrix} -1 & 2 & 1\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`A=\begin{bmatrix} 0\\ 1\\ 2\end{bmatrix}`}</Formula>
              ,{" "}
              <Formula>{String.raw`B=\begin{bmatrix} 1 & 5 & 7\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q6">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} \cos\alpha & \sin\alpha\\ -\sin\alpha & \cos\alpha\end{bmatrix}`}</Formula>
              , verify <Formula>{String.raw`A'A=I`}</Formula>. Do the same for{" "}
              <Formula>{String.raw`A=\begin{bmatrix} \sin\alpha & \cos\alpha\\ -\cos\alpha & \sin\alpha\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q7">
              Show that (i){" "}
              <Formula>{String.raw`A=\begin{bmatrix} 1 & -1 & 5\\ -1 & 2 & 1\\ 5 & 1 & 3\end{bmatrix}`}</Formula>{" "}
              is symmetric, (ii){" "}
              <Formula>{String.raw`A=\begin{bmatrix} 0 & 1 & -1\\ -1 & 0 & 1\\ 1 & -1 & 0\end{bmatrix}`}</Formula>{" "}
              is skew symmetric.
            </span>,
            <span key="q8">
              For{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 1 & 5\\ 6 & 7\end{bmatrix}`}</Formula>
              , verify that <Formula>{String.raw`A+A'`}</Formula> is symmetric and{" "}
              <Formula>{String.raw`A-A'`}</Formula> is skew symmetric.
            </span>,
            <span key="q9">
              Find{" "}
              <Formula>{String.raw`\tfrac{1}{2}(A+A')`}</Formula> and{" "}
              <Formula>{String.raw`\tfrac{1}{2}(A-A')`}</Formula> when{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 0 & a & b\\ -a & 0 & c\\ -b & -c & 0\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q10">
              Express each matrix as the sum of a symmetric and a skew symmetric matrix:
              (i){" "}
              <Formula>{String.raw`\begin{bmatrix} 3 & -1\\ -1 & 1\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} 6 & -2 & 2\\ -2 & 3 & -1\\ 2 & -1 & 3\end{bmatrix}`}</Formula>{" "}
              (iii){" "}
              <Formula>{String.raw`\begin{bmatrix} 3 & 3 & -1\\ -2 & -2 & 1\\ -4 & -5 & 2\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q11">
              If <Formula>{String.raw`A,B`}</Formula> are symmetric matrices of the same
              order, then <Formula>{String.raw`AB-BA`}</Formula> is <br />
              <span className="text-muted-foreground">
                (A) skew symmetric (B) symmetric (C) zero matrix (D) identity matrix
              </span>
            </span>,
            <span key="q12">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} \cos\alpha & -\sin\alpha\\ \sin\alpha & \cos\alpha\end{bmatrix}`}</Formula>{" "}
              and <Formula>{String.raw`A+A'=I`}</Formula>, then{" "}
              <Formula>{String.raw`\alpha`}</Formula> equals <br />
              <span className="text-muted-foreground">
                (A) <Formula>{String.raw`\tfrac{\pi}{6}`}</Formula> (B){" "}
                <Formula>{String.raw`\tfrac{\pi}{3}`}</Formula> (C){" "}
                <Formula>{String.raw`\pi`}</Formula> (D){" "}
                <Formula>{String.raw`\tfrac{3\pi}{2}`}</Formula>
              </span>
            </span>,
          ]}
          answers={[
            <span key="a1">
              (i){" "}
              <Formula>{String.raw`\begin{bmatrix} 5 & \tfrac{1}{2} & -1\end{bmatrix}`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & 2\\ -1 & 3\end{bmatrix}`}</Formula>{" "}
              (iii){" "}
              <Formula>{String.raw`\begin{bmatrix} -1 & 3 & 2\\ 5 & 5 & 3\\ 6 & 6 & -1\end{bmatrix}`}</Formula>
            </span>,
            <span key="a2">
              Both identities hold; compare entries of the two sides.
            </span>,
            <span key="a3">
              Both identities hold; remember{" "}
              <Formula>{String.raw`A=(A')'`}</Formula>.
            </span>,
            <span key="a4">
              <Formula>{String.raw`(A+2B)'=A'+2B'=\begin{bmatrix} -4 & 5\\ 3 & 6\end{bmatrix}`}</Formula>
            </span>,
            <span key="a5">
              Compute both sides — equal in each case.
            </span>,
            <span key="a6">
              <Formula>{String.raw`A'A=\begin{bmatrix} \cos^2\alpha+\sin^2\alpha & 0\\ 0 & \cos^2\alpha+\sin^2\alpha\end{bmatrix}=I`}</Formula>
            </span>,
            <span key="a7">
              Compare <Formula>{String.raw`a_{ij}`}</Formula> with{" "}
              <Formula>{String.raw`a_{ji}`}</Formula> in each matrix.
            </span>,
            <span key="a8">
              <Formula>{String.raw`A+A'=\begin{bmatrix} 2 & 11\\ 11 & 14\end{bmatrix}`}</Formula>{" "}
              (symmetric),{" "}
              <Formula>{String.raw`A-A'=\begin{bmatrix} 0 & -1\\ 1 & 0\end{bmatrix}`}</Formula>{" "}
              (skew symmetric).
            </span>,
            <span key="a9">
              <Formula>{String.raw`\tfrac{1}{2}(A+A')=O`}</Formula> and{" "}
              <Formula>{String.raw`\tfrac{1}{2}(A-A')=A`}</Formula> — the given matrix is
              already skew symmetric.
            </span>,
            <span key="a10">
              (i){" "}
              <Formula>{String.raw`\begin{bmatrix} 3 & -1\\ -1 & 1\end{bmatrix}+O`}</Formula>{" "}
              (ii){" "}
              <Formula>{String.raw`\begin{bmatrix} 6 & -2 & 2\\ -2 & 3 & -1\\ 2 & -1 & 3\end{bmatrix}+O`}</Formula>{" "}
              (the given matrices are already symmetric), (iii) apply Theorem 2.
            </span>,
            <span key="a11">(A) skew symmetric</span>,
            <span key="a12">
              (B) <Formula>{String.raw`\alpha=\tfrac{\pi}{3}`}</Formula>, since{" "}
              <Formula>{String.raw`2\cos\alpha=1`}</Formula>.
            </span>,
          ]}
        />
      </Expandable>

      <h2 id="h-3-7">3.7 Invertible Matrices</h2>
      <p>
        A square matrix <Formula>{String.raw`A`}</Formula> of order{" "}
        <Formula>{String.raw`m`}</Formula> is <strong>invertible</strong> if there is a
        square matrix <Formula>{String.raw`B`}</Formula> of the same order such that{" "}
        <Formula>{String.raw`AB=BA=I_m`}</Formula>. Then{" "}
        <Formula>{String.raw`B`}</Formula> is the <strong>inverse</strong> of{" "}
        <Formula>{String.raw`A`}</Formula>, written{" "}
        <Formula>{String.raw`A^{-1}`}</Formula>.
      </p>
      <KeyPoint>
        An inverse exists only for a <strong>square</strong> matrix, and when it exists
        it is <strong>unique</strong>.
      </KeyPoint>

      <FormulaCard>
        <div className="space-y-2">
          <div>
            <strong>Uniqueness:</strong> if{" "}
            <Formula>{String.raw`AB=BA=I`}</Formula> and{" "}
            <Formula>{String.raw`AC=CA=I`}</Formula>, then{" "}
            <Formula>{String.raw`B=C`}</Formula>.
          </div>
          <div>
            <strong>Reversal law:</strong>{" "}
            <Formula>{String.raw`(AB)^{-1}=B^{-1}A^{-1}`}</Formula>, provided{" "}
            <Formula>{String.raw`A`}</Formula> and <Formula>{String.raw`B`}</Formula> are
            invertible.
          </div>
        </div>
      </FormulaCard>

      <Expandable title="Examples 23 to 25 — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Example 23.</strong> If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} \cos\theta & \sin\theta\\ -\sin\theta & \cos\theta\end{bmatrix}`}</Formula>
              , prove that{" "}
              <Formula>{String.raw`A^n=\begin{bmatrix} \cos n\theta & \sin n\theta\\ -\sin n\theta & \cos n\theta\end{bmatrix}`}</Formula>{" "}
              for all <Formula>{String.raw`n\in\mathbb{N}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Use induction. The result is true for{" "}
              <Formula>{String.raw`n=1`}</Formula>. Assume it for{" "}
              <Formula>{String.raw`n=k`}</Formula>. Then
            </p>
            <FormulaBlock
              latex={String.raw`A^{k+1}=A^{k}A=\begin{bmatrix} \cos k\theta & \sin k\theta\\ -\sin k\theta & \cos k\theta\end{bmatrix}\begin{bmatrix} \cos\theta & \sin\theta\\ -\sin\theta & \cos\theta\end{bmatrix}`}
            />
            <p>
              Using the addition formulas,
            </p>
            <FormulaBlock
              latex={String.raw`A^{k+1}=\begin{bmatrix} \cos(k+1)\theta & \sin(k+1)\theta\\ -\sin(k+1)\theta & \cos(k+1)\theta\end{bmatrix}`}
            />
            <p>
              So the result holds for <Formula>{String.raw`n=k+1`}</Formula>, and by
              induction for all <Formula>{String.raw`n\in\mathbb{N}`}</Formula>.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 24.</strong> If <Formula>{String.raw`A`}</Formula> and{" "}
              <Formula>{String.raw`B`}</Formula> are symmetric matrices of the same
              order, show that <Formula>{String.raw`AB`}</Formula> is symmetric if and
              only if <Formula>{String.raw`AB=BA`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Since{" "}
              <Formula>{String.raw`A'=A`}</Formula> and{" "}
              <Formula>{String.raw`B'=B`}</Formula>, for the product
            </p>
            <FormulaBlock
              latex={String.raw`(AB)'=B'A'=BA`}
            />
            <p>
              If <Formula>{String.raw`AB`}</Formula> is symmetric then{" "}
              <Formula>{String.raw`(AB)'=AB`}</Formula>, hence{" "}
              <Formula>{String.raw`BA=AB`}</Formula>. Conversely, if{" "}
              <Formula>{String.raw`AB=BA`}</Formula>, then{" "}
              <Formula>{String.raw`(AB)'=BA=AB`}</Formula>, so{" "}
              <Formula>{String.raw`AB`}</Formula> is symmetric.
            </p>
          </div>
          <div>
            <p>
              <strong>Example 25.</strong> If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 3 & -1\\ -1 & 2\end{bmatrix}`}</Formula>
              , verify that{" "}
              <Formula>{String.raw`A^2-5A+7I=O`}</Formula> and hence find{" "}
              <Formula>{String.raw`A^{-1}`}</Formula>.
            </p>
            <p>
              <strong>Solution.</strong> Compute{" "}
              <Formula>{String.raw`A^2=\begin{bmatrix} 10 & -5\\ -5 & 5\end{bmatrix}`}</Formula>
              . Then
            </p>
            <FormulaBlock
              latex={String.raw`A^2-5A+7I=\begin{bmatrix} 10 & -5\\ -5 & 5\end{bmatrix}-\begin{bmatrix} 15 & -5\\ -5 & 10\end{bmatrix}+\begin{bmatrix} 7 & 0\\ 0 & 7\end{bmatrix}=O`}
            />
            <p>
              Hence{" "}
              <Formula>{String.raw`A^2-5A=-7I`}</Formula>, i.e.{" "}
              <Formula>{String.raw`A(A-5I)=-7I`}</Formula>, so
            </p>
            <FormulaBlock
              latex={String.raw`A^{-1}=-\tfrac{1}{7}(A-5I)=\tfrac{1}{7}(5I-A)=\tfrac{1}{7}\begin{bmatrix} 2 & 1\\ 1 & 3\end{bmatrix}`}
            />
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 3.4">
        <ExerciseQa
          questions={[
            <span key="q1">
              Using elementary row operations, find the inverse (if it exists) of{" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & -1\\ 2 & 3\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q2">
              Find the inverse of{" "}
              <Formula>{String.raw`\begin{bmatrix} 2 & 1\\ 1 & 1\end{bmatrix}`}</Formula>{" "}
              by elementary operations.
            </span>,
            <span key="q3">
              Find the inverse of{" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & 3\\ 2 & 7\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q4">
              Find the inverse of{" "}
              <Formula>{String.raw`\begin{bmatrix} 2 & 3\\ 5 & 7\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q5">
              Find the inverse of{" "}
              <Formula>{String.raw`\begin{bmatrix} 2 & 1\\ 4 & 2\end{bmatrix}`}</Formula>{" "}
              — does it exist?
            </span>,
            <span key="q6">
              Find the inverse of{" "}
              <Formula>{String.raw`\begin{bmatrix} 2 & -6\\ 1 & -2\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q7">
              Find the inverse of the{" "}
              <Formula>{String.raw`3\times 3`}</Formula> matrix{" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & 2 & 3\\ 2 & 5 & 7\\ -2 & -4 & -5\end{bmatrix}`}</Formula>{" "}
              using elementary row operations.
            </span>,
            <span key="q8">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 2 & -1\\ 1 & 3\end{bmatrix}`}</Formula>
              , verify{" "}
              <Formula>{String.raw`(A')^{-1}=(A^{-1})'`}</Formula>.
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`\tfrac{1}{5}\begin{bmatrix} 3 & 1\\ -2 & 1\end{bmatrix}`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`\begin{bmatrix} 1 & -1\\ -1 & 2\end{bmatrix}`}</Formula>
            </span>,
            <span key="a3">
              <Formula>{String.raw`\begin{bmatrix} 7 & -3\\ -2 & 1\end{bmatrix}`}</Formula>
            </span>,
            <span key="a4">
              <Formula>{String.raw`\begin{bmatrix} -7 & 3\\ 5 & -2\end{bmatrix}`}</Formula>
            </span>,
            <span key="a5">
              No — the second row is twice the first, so the matrix is singular.
            </span>,
            <span key="a6">
              <Formula>{String.raw`\begin{bmatrix} -1 & 3\\ -\tfrac{1}{2} & 1\end{bmatrix}`}</Formula>
            </span>,
            <span key="a7">
              <Formula>{String.raw`\begin{bmatrix} 3 & -2 & -1\\ -4 & 1 & -1\\ 2 & 0 & 1\end{bmatrix}`}</Formula>
            </span>,
            <span key="a8">
              Invert both sides:{" "}
              <Formula>{String.raw`A^{-1}=\tfrac{1}{7}\begin{bmatrix} 3 & 1\\ -1 & 2\end{bmatrix}`}</Formula>
              , and transposing gives the same result as inverting{" "}
              <Formula>{String.raw`A'`}</Formula>.
            </span>,
          ]}
        />
      </Expandable>

      <h2 id="h-3-misc">Miscellaneous Examples</h2>
      <Expandable title="Miscellaneous Examples — NCERT">
        <div className="space-y-4">
          <div>
            <p>
              <strong>Miscellaneous Example 1.</strong> If{" "}
              <Formula>{String.raw`A`}</Formula> and <Formula>{String.raw`B`}</Formula>{" "}
              are symmetric matrices, prove that <Formula>{String.raw`AB-BA`}</Formula>{" "}
              is skew symmetric.
            </p>
            <p>
              <strong>Solution.</strong> Using{" "}
              <Formula>{String.raw`(AB)'=B'A'`}</Formula> and{" "}
              <Formula>{String.raw`A'=A,\ B'=B`}</Formula>:
            </p>
            <FormulaBlock
              latex={String.raw`(AB-BA)'=(AB)'-(BA)'=B'A'-A'B'=BA-AB=-(AB-BA)`}
            />
            <p>
              Hence <Formula>{String.raw`AB-BA`}</Formula> is skew symmetric.
            </p>
          </div>
          <div>
            <p>
              <strong>Miscellaneous Example 2.</strong> Show that{" "}
              <Formula>{String.raw`B'AB`}</Formula> is symmetric or skew symmetric
              according as <Formula>{String.raw`A`}</Formula> is symmetric or skew
              symmetric.
            </p>
            <p>
              <strong>Solution.</strong> Compute the transpose:
            </p>
            <FormulaBlock
              latex={String.raw`(B'AB)'=B'A'(B')'=B'A'B`}
            />
            <p>
              If <Formula>{String.raw`A'=A`}</Formula> the result equals{" "}
              <Formula>{String.raw`B'AB`}</Formula> (symmetric); if{" "}
              <Formula>{String.raw`A'=-A`}</Formula> it equals{" "}
              <Formula>{String.raw`-B'AB`}</Formula> (skew symmetric).
            </p>
          </div>
          <div>
            <p>
              <strong>Miscellaneous Example 3.</strong> A manufacturer sells three
              products <Formula>{String.raw`x,y,z`}</Formula> in two markets. The
              annual sales matrix and the unit price/cost matrix are known. Find the
              total revenue in each market and the gross profit using matrix algebra.
            </p>
            <p>
              <strong>Solution.</strong> Revenue is the product of the sales matrix and
              the price column:
            </p>
            <FormulaBlock
              latex={String.raw`R=\begin{bmatrix} 10000 & 2000 & 18000\\ 6000 & 20000 & 8000\end{bmatrix}\begin{bmatrix} 2.50\\ 1.50\\ 1.00\end{bmatrix}`}
            />
            <p>
              Profit is the product of the sales matrix with the price-minus-cost
              column:{" "}
              <Formula>{String.raw`\begin{bmatrix} 0.50\\ 0.50\\ 0.50\end{bmatrix}`}</Formula>
              .
            </p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Miscellaneous Exercise on Chapter 3">
        <ExerciseQa
          questions={[
            <span key="q1">
              If <Formula>{String.raw`A`}</Formula> and{" "}
              <Formula>{String.raw`B`}</Formula> are symmetric matrices, prove that{" "}
              <Formula>{String.raw`AB-BA`}</Formula> is skew symmetric.
            </span>,
            <span key="q2">
              Show that <Formula>{String.raw`B'AB`}</Formula> is symmetric or skew
              symmetric according as <Formula>{String.raw`A`}</Formula> is symmetric or
              skew symmetric.
            </span>,
            <span key="q3">
              Find <Formula>{String.raw`x,y,z`}</Formula> if{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 0 & 2y & z\\ x & y & -z\\ x & -y & z\end{bmatrix}`}</Formula>{" "}
              satisfies <Formula>{String.raw`A'A=I`}</Formula>.
            </span>,
            <span key="q4">
              For what values of <Formula>{String.raw`x`}</Formula> is{" "}
              <Formula>{String.raw`\begin{bmatrix} 1 & 2 & 1\end{bmatrix}\begin{bmatrix} 1 & 2 & 0\\ 2 & 0 & 1\\ 1 & 0 & 2\end{bmatrix}\begin{bmatrix} 1\\ 2\\ x\end{bmatrix}=O`}</Formula>?
            </span>,
            <span key="q5">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} 3 & 1\\ -1 & 2\end{bmatrix}`}</Formula>
              , show that <Formula>{String.raw`A^2-5A+7I=O`}</Formula>.
            </span>,
            <span key="q6">
              Find <Formula>{String.raw`x`}</Formula> if{" "}
              <Formula>{String.raw`\begin{bmatrix} x & -5 & -1\end{bmatrix}\begin{bmatrix} 1 & 0 & 2\\ 0 & 2 & 1\\ 2 & 0 & 3\end{bmatrix}\begin{bmatrix} x\\ 4\\ 1\end{bmatrix}=O`}</Formula>.
            </span>,
            <span key="q7">
              A manufacturer produces three products <Formula>{String.raw`x,y,z`}</Formula>{" "}
              sold in two markets with annual sales{" "}
              <Formula>{String.raw`\begin{bmatrix} 10000 & 2000 & 18000\\ 6000 & 20000 & 8000\end{bmatrix}`}</Formula>
              . Unit sale prices are ₹2.50, ₹1.50, ₹1.00 and unit costs ₹2.00, ₹1.00,
              ₹0.50. Find (a) total revenue in each market, (b) gross profit.
            </span>,
            <span key="q8">
              Find the matrix <Formula>{String.raw`X`}</Formula> so that{" "}
              <Formula>{String.raw`X\begin{bmatrix} 1 & 2 & 3\\ 4 & 5 & 6\end{bmatrix}=\begin{bmatrix} -7 & -8 & -9\\ 2 & 4 & 6\end{bmatrix}`}</Formula>.
            </span>,
            <span key="q9">
              If{" "}
              <Formula>{String.raw`A=\begin{bmatrix} \alpha & \beta\\ \gamma & -\alpha\end{bmatrix}`}</Formula>{" "}
              is such that <Formula>{String.raw`A^2=I`}</Formula>, then <br />
              <span className="text-muted-foreground">
                (A){" "}
                <Formula>{String.raw`1+\alpha^2+\beta\gamma=0`}</Formula> (B){" "}
                <Formula>{String.raw`1-\alpha^2+\beta\gamma=0`}</Formula> (C){" "}
                <Formula>{String.raw`1-\alpha^2-\beta\gamma=0`}</Formula> (D){" "}
                <Formula>{String.raw`1+\alpha^2-\beta\gamma=0`}</Formula>
              </span>
            </span>,
            <span key="q10">
              If the matrix <Formula>{String.raw`A`}</Formula> is both symmetric and skew
              symmetric, then <br />
              <span className="text-muted-foreground">
                (A) A is a diagonal matrix (B) A is a zero matrix (C) A is a square
                matrix (D) None of these
              </span>
            </span>,
            <span key="q11">
              If <Formula>{String.raw`A`}</Formula> is a square matrix such that{" "}
              <Formula>{String.raw`A^2=A`}</Formula>, then{" "}
              <Formula>{String.raw`(I+A)^3-7A`}</Formula> equals <br />
              <span className="text-muted-foreground">
                (A) <Formula>{String.raw`A`}</Formula> (B){" "}
                <Formula>{String.raw`I-A`}</Formula> (C){" "}
                <Formula>{String.raw`I`}</Formula> (D){" "}
                <Formula>{String.raw`3A`}</Formula>
              </span>
            </span>,
          ]}
          answers={[
            <span key="a1">
              <Formula>{String.raw`(AB-BA)'=B'A'-A'B'=BA-AB=-(AB-BA)`}</Formula>
            </span>,
            <span key="a2">
              <Formula>{String.raw`(B'AB)'=B'A'B`}</Formula>; substitute{" "}
              <Formula>{String.raw`A'=\pm A`}</Formula>.
            </span>,
            <span key="a3">
              Comparing entries of <Formula>{String.raw`A'A`}</Formula> with{" "}
              <Formula>{String.raw`I`}</Formula> gives{" "}
              <Formula>{String.raw`x=\pm\tfrac{1}{\sqrt{2}},\ y=\pm\tfrac{1}{\sqrt{2}},\ z=\pm\tfrac{1}{\sqrt{2}}`}</Formula>
              , with the sign combinations allowed by{" "}
              <Formula>{String.raw`A'A=I`}</Formula>.
            </span>,
            <span key="a4">
              <Formula>{String.raw`x=-4`}</Formula>
            </span>,
            <span key="a5">
              <Formula>{String.raw`A^2=\begin{bmatrix} 8 & 5\\ -5 & 3\end{bmatrix}`}</Formula>
              ; substituting gives <Formula>{String.raw`O`}</Formula>.
            </span>,
            <span key="a6">
              <Formula>{String.raw`x=3`}</Formula>
            </span>,
            <span key="a7">
              (a) Market I: ₹46,000; Market II: ₹50,000. (b) Gross profit: ₹15,000.
            </span>,
            <span key="a8">
              <Formula>{String.raw`X=\begin{bmatrix} 1 & 2\\ 3 & 4\end{bmatrix}`}</Formula>
            </span>,
            <span key="a9">
              (C) <Formula>{String.raw`1-\alpha^2-\beta\gamma=0`}</Formula>
            </span>,
            <span key="a10">(B) A is a zero matrix</span>,
            <span key="a11">
              (C) <Formula>{String.raw`I`}</Formula>, since{" "}
              <Formula>{String.raw`(I+A)^3=I+7A`}</Formula> when{" "}
              <Formula>{String.raw`A^2=A`}</Formula>.
            </span>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Check the order first.</strong> Addition needs the <em>same</em>{" "}
            order; multiplication needs{" "}
            <Formula>{String.raw`\text{columns of }A=\text{rows of }B`}</Formula>.
          </li>
          <li>
            <strong>Row × column.</strong>{" "}
            <Formula>{String.raw`(AB)_{ik}=\sum_j a_{ij}b_{jk}`}</Formula> — march across a
            row of <Formula>{String.raw`A`}</Formula> and down a column of{" "}
            <Formula>{String.raw`B`}</Formula>.
          </li>
          <li>
            <strong>Never assume commutativity.</strong>{" "}
            <Formula>{String.raw`AB\neq BA`}</Formula> in general;{" "}
            <Formula>{String.raw`AB=O`}</Formula> does not force{" "}
            <Formula>{String.raw`A=O`}</Formula> or{" "}
            <Formula>{String.raw`B=O`}</Formula>.
          </li>
          <li>
            <strong>Transpose reverses order:</strong>{" "}
            <Formula>{String.raw`(AB)'=B'A'`}</Formula>, not{" "}
            <Formula>{String.raw`A'B'`}</Formula>.
          </li>
          <li>
            <strong>Decompose any square matrix:</strong>{" "}
            <Formula>{String.raw`A=\tfrac{1}{2}(A+A')+\tfrac{1}{2}(A-A')`}</Formula>{" "}
            (symmetric + skew symmetric). The diagonal of the skew part is always zero.
          </li>
          <li>
            <strong>Inverse from a polynomial relation.</strong> From{" "}
            <Formula>{String.raw`A^2+kA+lI=O`}</Formula> get{" "}
            <Formula>{String.raw`A^{-1}=-\tfrac{1}{l}(A+kI)`}</Formula>.
          </li>
        </ul>
      </SpeedTricks>
    </>
  );
}
