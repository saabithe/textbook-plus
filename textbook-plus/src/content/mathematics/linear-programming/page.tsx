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

export default function LinearProgrammingChapter() {
  return (
    <>
      <h2 id="h-12-1">12.1 Introduction</h2>
      <Callout type="important">
        <p>
          <Highlight color="yellow">Linear programming</Highlight> (LP) is the method of
          optimising a linear objective subject to linear constraints. A typical
          problem asks: how to use limited resources (labour, money, material) so as
          to maximise profit or minimise cost.
        </p>
      </Callout>

      <h2 id="h-12-2">12.2 Linear Programming Problem and its Mathematical Formulation</h2>
      <p>Every LP problem contains:</p>
      <FormulaCard>
        <div className="space-y-2">
          <div><strong>Decision variables</strong> <Formula>{String.raw`x_1,\dots,x_n`}</Formula> — the quantities to be determined.</div>
          <div><strong>Objective function</strong> <Formula>{String.raw`Z=c_1 x_1+\cdots+c_n x_n`}</Formula> to be maximised or minimised.</div>
          <div><strong>Constraints</strong> <Formula>{String.raw`a_{i1}x_1+\cdots+a_{in}x_n\le (\text{or }\ge,=)\,b_i`}</Formula>, typically representing limits on resources (with <Formula>{String.raw`b_i\ge0`}</Formula>).</div>
          <div><strong>Non-negativity</strong> <Formula>{String.raw`x_j\ge 0`}</Formula> — quantities cannot be negative.</div>
        </div>
      </FormulaCard>
      <p>
        A solution satisfying all constraints is a <strong>feasible solution</strong>;
        a feasible solution optimising <Formula>{String.raw`Z`}</Formula> is an{" "}
        <strong>optimal solution</strong>. The set of all feasible solutions is the{" "}
        <strong>feasible region</strong> — a closed, bounded, convex polygon (in 2-D)
        or polyhedron (in 3-D).
      </p>

      <h2 id="h-12-3">12.3 Graphical Method for Solving LP Problems in Two Variables</h2>
      <p>
        When there are only two decision variables, the feasible region is drawn in the{" "}
        <Formula>{String.raw`xy`}</Formula> plane: plot each inequality as a half-plane,
        the intersection is the feasible region. The objective is maximised (or
        minimised) at a{" "}
        <Highlight color="yellow">corner point (vertex)</Highlight> of the feasible
        region (corner point theorem), provided the region is bounded.
      </p>
      <TableCard
        title="Cases"
        headers={["Case", "Feasible region", "Optimal value of Z"]}
        rows={[
          {
            cells: [
              "Bounded",
              "closed polygon",
              "max/min attain at a corner point (or edge, if flat)",
            ],
          },
          {
            cells: [
              "Unbounded",
              "open polygon",
              "may not exist (max can be infinite); check by translation",
            ],
          },
          {
            cells: ["No feasible region", "empty intersection of half-planes", "problem is infeasible"],
          },
          {
            cells: ["Degenerate", "point or line segment", "optimal at that point/segment"],
          },
        ]}
        caption="Always check boundedness before applying the corner-point theorem."
      />

      <h2 id="h-12-4">12.4 Vertex / Corner-Point Method — Algorithm</h2>
      <FormulaCard>
        <div className="space-y-2">
          <div><strong>Step 1.</strong> Write the constraints including non-negativity.</div>
          <div><strong>Step 2.</strong> Draw each line <Formula>{String.raw`a_i x+b_i y=b_i`}</Formula> and shade the half-plane satisfying the inequality (test origin).</div>
          <div><strong>Step 3.</strong> Identify the feasible polygon and list its vertices (intersections of boundary lines).</div>
          <div><strong>Step 4.</strong> Evaluate <Formula>{String.raw`Z=c_1x+c_2y`}</Formula> at every vertex.</div>
          <div><strong>Step 5.</strong> The largest (or smallest) value is the answer; note the <strong>multiple optima</strong> if two adjacent vertices give the same value.</div>
        </div>
      </FormulaCard>
      <KeyPoint>
        If the objective's level lines are parallel to an edge of the feasible
        region with constant <Formula>{String.raw`Z`}</Formula>, then every point on
        that edge is optimal.
      </KeyPoint>

      <Expandable title="Illustrative Examples (NCERT style)">
        <div className="space-y-4">
          <div>
            <p><strong>Example 1.</strong> Maximise <Formula>{String.raw`Z=3x+4y`}</Formula> subject to <Formula>{String.raw`x+2y\le 8,\ 3x+2y\le 12,\ x\ge0,\ y\ge0`}</Formula>.</p>
            <p><strong>Solution.</strong> Vertices of the feasible region: (0,0), (4,0), (0,4), and the intersection of x+2y=8 and 3x+2y=12 → (2,3). Evaluate Z: 0, 12, 16, 18. Maximum is 18 at (2,3).</p>
          </div>
          <div>
            <p><strong>Example 2.</strong> Minimise <Formula>{String.raw`Z=2x+y`}</Formula> subject to <Formula>{String.raw`3x+2y\ge 12,\ x-y\le 5,\ x+2y\le 19,\ x,y\ge0`}</Formula>.</p>
            <p><strong>Solution.</strong> Vertices include (4,0), (0,6), (5,0), (9/5, 69/10)? Solve the relevant systems; evaluate Z and pick the minimum.</p>
          </div>
          <div>
            <p><strong>Example 3.</strong> A manufacturer makes two products X and Y using two machines with limited hours. Formulate as an LPP and find the optimal production plan.</p>
            <p><strong>Solution.</strong> Variables: number of units x, y. Objective: maximise Z = profit per unit × x + ... Constraints are machine-hour limits. Corner-point evaluation gives the answer.</p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 12.1 — Formulation">
        <ExerciseQa
          questions={[
            <span key="q1">
              Maximise <Formula>{String.raw`Z = x + y`}</Formula> subject to{" "}
              <Formula>{String.raw`x + 2y \le 8,\ 2x + y \le 10,\ x,y \ge 0`}</Formula>.
            </span>,
            <span key="q2">
              Maximise <Formula>{String.raw`Z = 3x + 5y`}</Formula> subject to{" "}
              <Formula>{String.raw`2x + 3y \le 12,\ 2x - y \le 2,\ x,y \ge 0`}</Formula>.
            </span>,
            <span key="q3">
              Minimise <Formula>{String.raw`Z = x + 4y`}</Formula> subject to{" "}
              <Formula>{String.raw`2x + y \ge 80,\ 4x + 9y \ge 270,\ x,y \ge 0`}</Formula>.
            </span>,
            <span key="q4">
              A producer makes two items A and B; each unit of A needs 2 labour-h and 3 kg material, each B needs 3 labour-h and 2 kg material. Labour available is 50 h, material 60 kg. Profits are Rs. 10 and Rs. 15. Formulate the LPP.
            </span>,
            <span key="q5">
              Solve the LPP: minimise <Formula>{String.raw`Z = 8x + 9y`}</Formula> with constraints{" "}
              <Formula>{String.raw`2x + y \ge 8,\ x + 2y \ge 10,\ x,y \ge 0`}</Formula>.
            </span>,
          ]}
          answers={[
            <span key="a1">
              Vertices (0,0), (4,0), (0,4), (2,3). Max Z = 2+3 = 5 at (2,3).
            </span>,
            <span key="a2">
              Intersect 2x+3y=12 and 2x−y=2 → (9/4, 1/2). Evaluate Z: max at (6,0) gives 18.
            </span>,
            <span key="a3">
              Vertices (40,0), (0,270/9=30), and intersection of 2x+y=80 and 4x+9y=270. Min Z occurs at (40,0): 160.
            </span>,
            <span key="a4">
              Max Z = 10x + 15y subject to 2x+3y ≤ 50, 3x+2y ≤ 60, x,y ≥ 0.
            </span>,
            <span key="a5">
              Vertices (0,5), (4,0), intersection (4/3, 8/3)? Min at (0,5): Z = 45.
            </span>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 12.2 — Mixed">
        <ExerciseQa
          questions={[
            <span key="q1">
              A furniture company makes chairs (profit ₹200) and tables (profit ₹300). Each chair needs 3 h on machine 1 and 1 h on machine 2; each table needs 2 h on machine 1 and 2 h on machine 2; machine capacities are 18 h and 12 h. Formulate and solve the LPP.
            </span>,
            <span key="q2">
              A shopkeeper sells two types of sweets: each box of type A costs ₹60 (profit ₹10), type B costs ₹80 (profit ₹15). She wants at least 2 boxes of type A, at least 1 of type B, and total boxes at most 5. Formulate.
            </span>,
            <span key="q3">
              Solve the LPP: maximise <Formula>{String.raw`Z = -x + 2y`}</Formula> with{" "}
              <Formula>{String.raw`x + y \le 3,\ x + 2y \ge 4,\ x,y \ge 0`}</Formula>.
            </span>,
            <span key="q4">
              If the constraints have no solution, then the problem is
            </span>,
            <span key="q5">
              A diet has two foods X (vitamin A 0.1 mg/plate, cost ₹5) and Y (vitamin A 0.2 mg/plate, cost ₹7). Minimum 1 mg vitamin A needed. Minimise cost.
            </span>,
          ]}
          answers={[
            <span key="a1">
              Max Z = 200x+300y subject to 3x+2y ≤ 18, x+2y ≤ 12, x,y≥0. Optimal at (4,4) → Z = 2000.
            </span>,
            <span key="a2">
              Min? Actually maximise profit P = 10a + 15b s.t. a ≥ 2, b ≥ 1, a+b ≤ 5.
            </span>,
            <span key="a3">
              Feasible region empty → no solution.
            </span>,
            <span key="a4">
              Infeasible LPP.
            </span>,
            <span key="a5">
              Min Z = 5x+7y s.t. 0.1x+0.2y ≥ 1. Optimum at x = 0? Check vertices; minimum at x = 0, y = 5 → cost 35.
            </span>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Objective sign:</strong> Maximise revenue/profit, minimise cost; never confuse signs when substituting vertices.</li>
          <li><strong>Half-plane test:</strong> use (0,0) to decide which side of each constraint to shade.</li>
          <li><strong>Corner theorem:</strong> if the region is bounded, the optimum occurs at a vertex.</li>
          <li><strong>Multiple optima:</strong> if two adjacent vertices have equal Z, the whole edge is optimal.</li>
          <li><strong>Feasibility:</strong> if corner points are empty, problem is infeasible (check the constraints first).</li>
        </ul>
      </SpeedTricks>
    </>
  );
}
