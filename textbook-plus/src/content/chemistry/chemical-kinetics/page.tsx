import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";

export default function ChemicalKineticsChapter() {
  return (
    <>
      <h2 id="h-3-1">3.1 Rate of a Chemical Reaction</h2>
      <Callout type="important">
        <Highlight color="yellow">Chemical kinetics</Highlight> is the branch of chemistry which deals with the study of rates of chemical reactions, the factors affecting the rate of reactions and the mechanism by which the reactions proceed.
      </Callout>
      <p>The speed of a reaction or the rate of a chemical reaction can be defined as the change in concentration of a reactant or product in unit time.</p>
      
      <FormulaBlock latex={String.raw`\text{Rate} = -\frac{\Delta [R]}{\Delta t} = +\frac{\Delta [P]}{\Delta t}`} important />
      <p>For a reaction: <Formula>{String.raw`aA + bB \to cC + dD`}</Formula></p>
      <FormulaBlock latex={String.raw`\text{Rate} = -\frac{1}{a}\frac{\Delta [A]}{\Delta t} = -\frac{1}{b}\frac{\Delta [B]}{\Delta t} = +\frac{1}{c}\frac{\Delta [C]}{\Delta t} = +\frac{1}{d}\frac{\Delta [D]}{\Delta t}`} important />

      <KeyPoint title="Average Rate vs Instantaneous Rate">
        <ul>
          <li><strong>Average rate:</strong> Change in concentration over a finite time interval, <Formula>{String.raw`r_{av} = -\frac{\Delta[R]}{\Delta t}`}</Formula></li>
          <li><strong>Instantaneous rate:</strong> Rate at a particular moment, <Formula>{String.raw`r_{inst} = -\frac{d[R]}{dt}`}</Formula> obtained from slope of tangent to concentration-time curve</li>
        </ul>
      </KeyPoint>

      <h3 id="h-3-1-1">Factors Influencing Rate of Reaction</h3>
      <ul>
        <li><Highlight color="blue">Nature of reactants</Highlight></li>
        <li><Highlight color="blue">Concentration of reactants</Highlight></li>
        <li><Highlight color="blue">Temperature</Highlight></li>
        <li><Highlight color="blue">Presence of catalyst</Highlight></li>
        <li><Highlight color="blue">Surface area of reactants</Highlight> (for solids)</li>
      </ul>

      <h2 id="h-3-2">3.2 Rate Law and Rate Constant</h2>
      <Callout type="note">
        <strong>Rate law</strong> is the expression in which reaction rate is given in terms of molar concentration of reactants with each term raised to some power which may or may not be same as the stoichiometric coefficient.
      </Callout>
      <p>For a reaction: <Formula>{String.raw`aA + bB \to cC + dD`}</Formula></p>
      <FormulaBlock latex={String.raw`\text{Rate} = k [A]^x [B]^y`} important />
      <p>where <strong>x</strong> and <strong>y</strong> are determined experimentally, <strong>k</strong> is the rate constant.</p>

      <KeyPoint title="Order of Reaction">
        <p>Sum of powers of the concentration of the reactants in the rate law expression is called the <strong>order of reaction</strong>.</p>
        <FormulaBlock latex={String.raw`\text{Order} = x + y`} important />
        <p>Order can be 0, 1, 2, 3 and even fractional or negative.</p>
      </KeyPoint>

      <KeyPoint title="Molecularity of Reaction">
        <p>The number of reacting species (atoms, ions or molecules) taking part in an elementary reaction is called <strong>molecularity</strong>. It is always a whole number (1,2,3...) and cannot be zero or fractional.</p>
      </KeyPoint>

      <Comparison
        columns={[
          {
            title: "Order of Reaction",
            children: (
              <ul>
                <li>Experimental quantity</li>
                <li>Can be zero, fractional, negative</li>
                <li>Applicable to elementary and complex reactions</li>
                <li>Sum of exponents in rate law</li>
              </ul>
            ),
          },
          {
            title: "Molecularity of Reaction",
            children: (
              <ul>
                <li>Theoretical concept</li>
                <li>Always a positive integer (1,2,3)</li>
                <li>Applicable only to elementary reactions</li>
                <li>Number of species colliding simultaneously</li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-3-3">3.3 Integrated Rate Equations</h2>

      <h3 id="h-3-3-1">Zero Order Reactions</h3>
      <p>Rate is independent of concentration of reactants.</p>
      <FormulaBlock latex={String.raw`\text{Rate} = k [R]^0 = k`} />
      <FormulaBlock latex={String.raw`[R] = [R]_0 - k t`} important />
      <p>Units of k: mol L<sup>-1</sup> s<sup>-1</sup></p>
      <p>Half-life: <FormulaBlock latex={String.raw`t_{1/2} = \frac{[R]_0}{2k}`} /></p>

      <h3 id="h-3-3-2">First Order Reactions</h3>
      <p>Rate depends on concentration of one reactant raised to first power.</p>
      <FormulaBlock latex={String.raw`k = \frac{2.303}{t}\log\frac{[R]_0}{[R]}`} important />
      <p>Or in exponential form: <Formula>{String.raw`[R] = [R]_0 e^{-kt}`}</Formula></p>
      <p>Units of k: s<sup>-1</sup></p>
      <p>Half-life (independent of [R]<sub>0</sub>): <FormulaBlock latex={String.raw`t_{1/2} = \frac{0.693}{k}`} important /></p>

      <KeyPoint title="Examples of First Order Reactions">
        <ul>
          <li><Formula>{String.raw`2\text{N}_2\text{O}_5(g) \to 4\text{NO}_2(g) + \text{O}_2(g)`}</Formula></li>
          <li>Decomposition of NH<sub>4</sub>NO<sub>2</sub></li>
          <li>Hydrolysis of methyl acetate in acidic medium</li>
        </ul>
      </KeyPoint>

      <Expandable title="Example — First Order Calculation" variant="exercise">
        <p>A first order reaction has a rate constant 1.15 × 10<sup>-3</sup> s<sup>-1</sup>. How long will 5 g of this reactant take to reduce to 3 g?</p>
        <p><strong>Solution:</strong></p>
        <FormulaBlock latex={String.raw`t = \frac{2.303}{k}\log\frac{[R]_0}{[R]} = \frac{2.303}{1.15 \times 10^{-3}}\log\frac{5}{3} = \frac{2.303}{1.15 \times 10^{-3}} \times 0.2219 \approx 444\,s`} />
      </Expandable>

      <h2 id="h-3-4">3.4 Temperature Dependence of the Rate of a Reaction</h2>
      <p>Most reactions increase in rate with increase of temperature. A general rule of thumb suggests that rate becomes nearly <Highlight color="yellow">double</Highlight> for every <strong>10° rise</strong> in temperature.</p>

      <h3 id="h-3-4-1">Arrhenius Equation</h3>
      <FormulaBlock latex={String.raw`k = A e^{-E_a/(RT)}}`} important />
      <p>where <strong>A</strong> = Arrhenius factor/pre-exponential factor, <strong>E<sub>a</sub></strong> = activation energy (J mol<sup>-1</sup>), <strong>R</strong> = gas constant, <strong>T</strong> = temperature in Kelvin.</p>

      <FormulaBlock latex={String.raw`\ln k = -\frac{E_a}{RT} + \ln A`} />
      
      <KeyPoint title="Activation Energy">
        <p><strong>Activation energy (E<sub>a</sub>)</strong> is the minimum energy that the reacting molecules must possess in order to form the product.</p>
        <p><strong>Threshold energy</strong> = Activation energy + energy possessed by reactants</p>
      </KeyPoint>

      <h3 id="h-3-4-2">Effect of Catalyst</h3>
      <Callout type="note">
        A <strong>catalyst</strong> provides an alternate pathway or reaction mechanism by <Highlight color="yellow">reducing the activation energy</Highlight> between reactants and products. It does <strong>not</strong> affect Gibbs energy (ΔG) of reaction.
      </Callout>
      <FormulaBlock latex={String.raw`k = A e^{-E_a'/(RT)}`} />
      <p>where <strong>E<sub>a</sub>' &lt; E<sub>a</sub></strong>, hence k increases.</p>

      <h3 id="h-3-4-3">Arrhenius Equation at Two Temperatures</h3>
      <FormulaBlock latex={String.raw`\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{T_2 - T_1}{T_1 T_2}\right)`} important />

      <h2 id="h-3-5">3.5 Collision Theory of Chemical Reactions</h2>
      <p>According to collision theory, chemical reactions occur as a result of <strong>effective collisions</strong> between reacting molecules.</p>
      
      <KeyPoint title="Criteria for Effective Collision">
        <ul>
          <li><strong>Threshold energy:</strong> Colliding molecules must have energy equal to or greater than threshold energy.</li>
          <li><strong>Proper orientation:</strong> Molecules must collide with proper orientation so that old bonds break and new bonds form.</li>
        </ul>
      </KeyPoint>

      <FormulaBlock latex={String.raw`\text{Rate} = P Z_{AB} e^{-E_a/(RT)}`} />
      <p>where <strong>Z<sub>AB</sub></strong> = collision frequency of reactants A and B, <strong>P</strong> = probability or steric factor (proper orientation).</p>

      <Callout type="note">In actual practice, the rate constant is found to be smaller than the one calculated from collision theory due to orientation factor.</Callout>

      <h2 id="h-3-exercises">Exercises (Selected)</h2>
      <ExerciseQa
        questions={[
          <>From the rate expression for the following reactions, determine their order of reaction and the dimensions of the rate constants. (i) 3NO(g) → N<sub>2</sub>O(g) Rate = k[NO]<sup>2</sup> (ii) H<sub>2</sub>O<sub>2</sub>(aq) + 3I<sup>-</sup>(aq) + 2H<sup>+</sup> → 2H<sub>2</sub>O(l) + I<sub>3</sub><sup>-</sup> Rate = k[H<sub>2</sub>O<sub>2</sub>][I<sup>-</sup>] (iii) CH<sub>3</sub>CHO(g) → CH<sub>4</sub>(g) + CO(g) Rate = k[CH<sub>3</sub>CHO]<sup>3/2</sup> (iv) C<sub>2</sub>H<sub>5</sub>Cl(g) → C<sub>2</sub>H<sub>4</sub>(g) + HCl(g) Rate = k[C<sub>2</sub>H<sub>5</sub>Cl]</>,
          <>For the reaction: 2A + B → A<sub>2</sub>B, rate = k[A][B]<sup>2</sup> with k = 2.0 × 10<sup>-6</sup> mol<sup>-2</sup> L<sup>2</sup> s<sup>-1</sup>. Calculate the initial rate of the reaction when [A] = 0.1 mol L<sup>-1</sup>, [B] = 0.2 mol L<sup>-1</sup>. Calculate the rate of reaction after [A] is reduced to 0.06 mol L<sup>-1</sup>.</>,
          <>The decomposition of NH<sub>3</sub> on platinum surface is zero order reaction. What are the rates of production of N<sub>2</sub> and H<sub>2</sub> if k = 2.5 × 10<sup>-4</sup> mol L<sup>-1</sup> s<sup>-1</sup>?</>,
          <>The rate constant for a first order reaction is 60 s<sup>-1</sup>. How much time will it take to reduce the initial concentration of the reactant to its 1/16th value?</>,
          <>A first order reaction takes 40 min for 30% decomposition. Calculate t<sub>1/2</sub>.</>,
          <>The rate of the chemical reaction doubles for an increase of 10K in absolute temperature from 298K. Calculate E<sub>a</sub>.</>,
          <>The activation energy for the reaction 2HI(g) → H<sub>2</sub> + I<sub>2</sub>(g) is 209.5 kJ mol<sup>-1</sup> at 581K. Calculate the fraction of molecules of reactants having energy equal to or greater than activation energy?</>,
          <>What is the effect of catalyst on: (i) Gibbs energy (ΔG) of a reaction (ii) activation energy of a reaction?</>,
          <>Explain the difference between instantaneous rate of a reaction and average rate of a reaction.</>,
          <>A reaction is first order in A and second order in B. (i) Write the differential rate equation. (ii) How is the rate affected on increasing the concentration of B three times? (iii) How is the rate affected when the concentrations of both A and B are doubled?</>,
        ]}
        answersHeading="NCERT Exercise Questions (3.1–3.10)"
      />
    </>
  );
}
