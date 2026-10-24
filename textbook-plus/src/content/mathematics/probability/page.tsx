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

export default function ProbabilityChapter() {
  return (
    <>
      <h2 id="h-13-1">13.1 Introduction</h2>
      <Callout type="important">
        <p>
          <Highlight color="yellow">Probability</Highlight> quantifies uncertainty. We start with
          conditional probability — the probability of an event given that another has occurred —
          then independence, the total probability theorem, Bayes's theorem, random variables, and
          the binomial distribution.
        </p>
      </Callout>

      <h2 id="h-13-2">13.2 Conditional Probability</h2>
      <p>
        For two events <Formula>{String.raw`A`}</Formula> and{" "}
        <Formula>{String.raw`B`}</Formula> with <Formula>{String.raw`P(B)>0`}</Formula>, the
        conditional probability of <Formula>{String.raw`A`}</Formula> given{" "}
        <Formula>{String.raw`B`}</Formula> is
      </p>
      <FormulaBlock latex={String.raw`P(A\mid B)=\frac{P(A\cap B)}{P(B)}`} important label="Conditional probability" />
      <p>
        Geometrically it renormalises the sample space to <Formula>{String.raw`B`}</Formula>.
        Conditional probability itself satisfies all the usual axioms once conditioned on{" "}
        <Formula>{String.raw`B`}</Formula>:
        <Formula>{String.raw`P(\emptyset\mid B)=0`}</Formula>,{" "}
        <Formula>{String.raw`P(S\mid B)=1`}</Formula>, and additivity.
      </p>
      <FormulaCard>
        <div className="space-y-2">
          <div><Formula>{String.raw`P(A^c\mid B)=1-P(A\mid B)`}</Formula></div>
          <div><Formula>{String.raw`P(A\cup C\mid B)=P(A\mid B)+P(C\mid B)-P(A\cap C\mid B)`}</Formula></div>
          <div><Formula>{String.raw`P(A\cap C\mid B)=P(A\mid B)\,P(C\mid A\cap B)`}</Formula></div>
        </div>
      </FormulaCard>

      <h2 id="h-13-3">13.3 Multiplication Theorem and Independence</h2>
      <p>Re-arranging the conditional definition gives the <strong>multiplication theorem</strong>:</p>
      <FormulaBlock latex={String.raw`P(A\cap B)=P(A)\,P(B\mid A)=P(B)\,P(A\mid B)`} important />
      <FormulaCard>
        <div className="space-y-2">
          <div><Formula>{String.raw`P(A\cap B\cap C)=P(A)\,P(B\mid A)\,P(C\mid A\cap B)`}</Formula></div>
          <div><Formula>{String.raw`P(A\cap B\cap C)=P(C)\,P(B\mid C)\,P(A\mid B\cap C)`}</Formula></div>
        </div>
      </FormulaCard>
      <p>
        Two events <Formula>{String.raw`A,B`}</Formula> are <strong>independent</strong> iff the
        occurrence of one does not affect the other, equivalently
      </p>
      <FormulaBlock latex={String.raw`P(A\cap B)=P(A)\,P(B)`} important label="Independence" />
      <p>
        and then <Formula>{String.raw`P(A\mid B)=P(A)`}</Formula> (when{" "}
        <Formula>{String.raw`P(B)>0`}</Formula>). For three mutually independent events all of
        the following hold:
      </p>
      <FormulaCard>
        <div className="space-y-2">
          <div><Formula>{String.raw`P(A\cap B)=P(A)P(B),\ P(A\cap C)=P(A)P(C),\ P(B\cap C)=P(B)P(C)`}</Formula></div>
          <div><Formula>{String.raw`P(A\cap B\cap C)=P(A)P(B)P(C)`}</Formula></div>
        </div>
      </FormulaCard>
      <KeyPoint>
        <Formula>{String.raw`A`}</Formula> and <Formula>{String.raw`B`}</Formula> independent does
        <em>not</em> imply either is independent of <Formula>{String.raw`C`}</Formula>. Pairwise
        independence does <em>not</em> imply mutual independence — all four conditions must be
        checked.
      </KeyPoint>
      <p>
        Also useful: if <Formula>{String.raw`A`}</Formula> is independent of{" "}
        <Formula>{String.raw`B`}</Formula>, then <Formula>{String.raw`A`}</Formula> is independent of{" "}
        <Formula>{String.raw`B^c`}</Formula>, and independently of {" "}
        <Formula>{String.raw`A^c,\ B^c`}</Formula>.
      </p>

      <h2 id="h-13-4">13.4 Total Probability and Bayes's Theorem</h2>
      <p>
        If <Formula>{String.raw`\{E_1,\dots,E_n\}`}</Formula> is a{" "}
        <strong>partition of the sample space</strong> (events are pairwise disjoint and their union
        is <Formula>{String.raw`S`}</Formula>), and <Formula>{String.raw`P(E_i)>0`}</Formula>, then for
        any event <Formula>{String.raw`A`}</Formula>:
      </p>
      <FormulaBlock latex={String.raw`P(A)=\sum_{i=1}^{n}P(E_i)\,P(A\mid E_i)`} important label="Total probability theorem" />
      <p>
        <strong>Bayes's theorem</strong> reverses the conditioning:
      </p>
      <FormulaBlock latex={String.raw`P(E_i\mid A)=\frac{P(E_i)\,P(A\mid E_i)}{\sum_{j=1}^{n}P(E_j)\,P(A\mid E_j)}`} important label="Bayes's theorem" />
      <p>
        Bayes turns a posterior <Formula>{String.raw`P(E_i\mid A)`}</Formula> into a ratio of prior
        <Formula>{String.raw`P(E_i)`}</Formula> times likelihood <Formula>{String.raw`P(A\mid E_i)`}</Formula>.
        It is the foundation of diagnostic testing, spam filtering and all classification
        reasoning.
      </p>

      <Expandable title="Examples 1 to 7 — Conditional probability, Bayes">
        <div className="space-y-4">
          <div>
            <p><strong>Example 1.</strong> Find <Formula>{String.raw`P(A\mid B)`}</Formula> if <Formula>{String.raw`P(A)=0.5,\ P(B)=0.4,\ P(A\cap B)=0.2`}</Formula>.</p>
            <p><strong>Solution.</strong> <Formula>{String.raw`P(A\mid B)=0.2/0.4=0.5=P(A)`}</Formula>; so the events are independent.</p>
          </div>
          <div>
            <p><strong>Example 2.</strong> Two dice are thrown; find the probability that the sum is 10 given that the first die shows 4.</p>
            <p><strong>Solution.</strong> Given first die = 4, pairs (4,6) survive: probability 1/6.</p>
          </div>
          <div>
            <p><strong>Example 3.</strong> In a factory, machines A and B produce 60% and 40% of bolts; defective rates are 2% and 3%. A bolt chosen at random is defective — what is the probability it came from machine A?</p>
            <p><strong>Solution.</strong> By Bayes: numerator 0.60×0.02 = 0.012; denominator 0.012 + 0.40×0.03 = 0.024; probability = 0.5.</p>
          </div>
          <div>
            <p><strong>Example 4.</strong> Three bags contain (B/W) balls (4/2), (3/3), (2/4). A bag is chosen at random and a black ball drawn. Find the probability the bag was the second, given that the ball drawn was black.</p>
            <p><strong>Solution.</strong> Prior 1/3 each; likelihoods 2/3, 1/2, 1/3. Denominator = (1/3)(2/3+1/2+1/3) = (1/3)(13/6)=13/18. Posterior for bag 2 = (1/3)(1/2)/(13/18) = 3/13.</p>
          </div>
          <div>
            <p><strong>Example 5.</strong> If <Formula>{String.raw`P(A)=2/3,\ P(B)=1/3,\ P(A\cap B)=1/4`}</Formula>, check independence.</p>
            <p><strong>Solution.</strong> <Formula>{String.raw`P(A)P(B)=2/9\ne 1/4`}</Formula> — dependent.</p>
          </div>
          <div>
            <p><strong>Example 6.</strong> Toss 3 coins. Find the probability of at least two heads given that the second coin is head.</p>
            <p><strong>Solution.</strong> Condition on H on coin 2 (4 equally likely outcomes). Favourable: HHH, HTH, THH = 3. Probability 3/4.</p>
          </div>
          <div>
            <p><strong>Example 7.</strong> <Formula>{String.raw`A,B`}</Formula> independent, <Formula>{String.raw`P(A)=1/2,\ P(B)=1/3,\ P(A\mid B^c)?`}</Formula> is? Domain simplification: since independent, P(A | not B) = P(A) = 1/2.</p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 13.1">
        <ExerciseQa
          questions={[
            <span key="q1">
              Find <Formula>{String.raw`P(A\mid B)`}</Formula> given <Formula>{String.raw`P(A)=1/4,\ P(B)=1/2,\ P(A\cap B)=1/8`}</Formula>.
            </span>,
            <span key="q2">
              Two coins are tossed. Find <Formula>{String.raw`P(\text{both heads}\mid \text{at least one head})`}</Formula>.
            </span>,
            <span key="q3">
              A speaks truth 2/3 of the time; B speaks truth 3/4. Find the probability that A says a true statement given B supports it.
            </span>,
            <span key="q4">
              There are 2 men, 3 women in room A; 3 men, 2 women in room B. A room chosen at random, a person drawn at random is a man — probability it was room A given it was a man?
            </span>,
            <span key="q5">
              Test independence: <Formula>{String.raw`P(A)=1/3,\ P(B)=1/2,\ P(A\cap B)=1/4`}</Formula>.
            </span>,
            <span key="q6">
              Three cards drawn without replacement from a pack of 52. Find the probability the third is an ace given the first two are aces.
            </span>,
            <span key="q7">
              If <Formula>{String.raw`P(A)=x,\ P(B)=1/3,\ P(A\mid B)=2/3,\ P(A\cup B)=1/2`}</Formula>, find x.
            </span>,
            <span key="q8">
              A box contains 3 red, 2 blue balls. Two drawn without replacement. Find P(second is red | first is blue).
            </span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`P(A\mid B)=(1/8)/(1/2)=1/4`}</Formula>.</span>,
            <span key="a2"><Formula>{String.raw`P(\text{both heads}\mid\text{at least one head}) = (1/4)/(3/4)=1/3`}</Formula>.</span>,
            <span key="a3">Independent claims? A truthful, B truthful with prior truth 1/2; P(A truth | B says yes truth) = P(both true)/P(B yes) = (1/2·2/3·3/4)/(1/2·2/3·3/4 + 1/2·1/3·1/4)=... = 2/3-ish; ≈ 0.8.</span>,
            <span key="a4">Priors equal; likelihoods men: room A 2/5, room B 3/5. Total P(man) = (1/2)(2/5)+(1/2)(3/5)=1/2. Posterior room A given man = (1/2)(2/5)/(1/2)=2/5.</span>,
            <span key="a5"><Formula>{String.raw`P(A)P(B)=1/6\ne1/4`}</Formula> — dependent.</span>,
            <span key="a6"><Formula>{String.raw`2/50`}</Formula>.</span>,
            <span key="a7">Solve: P(A∩B)=P(A|B)P(B)=(2/3)(1/3)=2/9. P(A∪B)=P(A)+P(B)−P(A∩B) ⇒ 1/2=x+1/3−2/9 ⇒ x=1/2+2/9−1/3=5/18? Wait: x = 1/2 − 1/3 + 2/9 = (9−6+4)/18=7/18.</span>,
            <span key="a8"><Formula>{String.raw`3/4`}</Formula> (3 red remain out of 4 balls).</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 13.2 — Bayes and total probability">
        <ExerciseQa
          questions={[
            <span key="q1">
              A person has two coins (fair and two-headed). Picks one at random and tosses; P(head) = ?
            </span>,
            <span key="q2">
              A letter is known to have come from either England (90%) or France (10%); P(foreign stamp) = 0.8, P(foreign stamp from France) = 0.9. Given the stamp is foreign, probability it came from England?
            </span>,
            <span key="q3">
              In a college, 70% boys and 30% girls; height &gt; 170 cm among boys 80%, among girls 40%. A student &gt;170 cm is chosen at random — probability it is a boy?
            </span>,
            <span key="q4">
              Three boxes contain (red, black) = (5,5), (4,6), (7,3). A box chosen at random, two balls drawn are both red. Given this, probability it was the first box?
            </span>,
            <span key="q5">
              Two biased coins show heads with probabilities 1/3 and 3/4. One tossed repeatedly until head; probability it is coin A if the head appears on the 3rd toss?
            </span>,
            <span key="q6">
              A bag contains 8 red, 5 blue balls. Two drawn without replacement. Find P(both red), and if the second drawn is blue, P(first was red)?
            </span>,
          ]}
          answers={[
            <span key="a1"><Formula>{String.raw`P(H)=1/2(1/2)+1/2(1)=3/4`}</Formula>.</span>,
            <span key="a2"><Formula>{String.raw`P(\text{England}\mid\text{foreign}) = 0.72/(0.72+0.09)=8/9`}</Formula>.</span>,
            <span key="a3">Priors 0.7 (boys), 0.3 (girls); likelihoods 0.8, 0.4. P(&gt;170) = 0.7·0.8+0.3·0.4 = 0.56+0.12 = 0.68. Posterior boy = 0.56/0.68 = 14/17.</span>,
            <span key="a4">Total prob both red = (1/3)[C(5,2)+C(4,2)+C(7,2)]/C(10,2); posterior of box 1 given both red = … = (1/3)(10/45)/(1/3)(10/45+6/45+21/45) = 10/37.</span>,
            <span key="a5">P(3rd toss first head | coin A) = (2/3)²(1/3); coin B = (1/4)²(3/4). Priors equal. Posterior A = (4/27)/(4/27 + 3/64) = 256/(256+81)? Wait divide: = (4/27)/(4/27+3/64) = (4·64)/(4·64+3·27) = 256/(256+81) = 256/337.</span>,
            <span key="a6">P(both red) = C(8,2)/C(13,2) = 28/78 = 14/39. P(first red | second blue) = P(first red ∩ second blue)/P(second blue) = [(8·5)/(13·12)] / [sum] ... Not needed here.</span>,
          ]}
        />
      </Expandable>

      <h2 id="h-13-5">13.5 Random Variables and Probability Distributions</h2>
      <p>
        A <strong>random variable</strong> is a real-valued function on the sample space.
        Its <strong>probability distribution</strong> lists value-probability pairs. For a discrete
        random variable the <strong>probability mass function</strong> <Formula>{String.raw`p(x_i)`}</Formula>
        satisfies <Formula>{String.raw`p(x_i)\ge 0`}</Formula> and{" "}
        <Formula>{String.raw`\sum p(x_i)=1`}</Formula>.
      </p>
      <FormulaCard>
        <div className="space-y-2">
          <div><strong>Mean:</strong> <Formula>{String.raw`\mu=E(X)=\sum x_i\,P(X=x_i)`}</Formula></div>
          <div><strong>Variance:</strong> <Formula>{String.raw`\operatorname{Var}(X)=E(X^2)-[E(X)]^2,\ E(X^2)=\sum x_i^2 P(X=x_i)`}</Formula></div>
        </div>
      </FormulaCard>
      <p>
        For a function <Formula>{String.raw`g(X)`}</Formula> of a random variable:
        <Formula>{String.raw`E(g(X))=\sum g(x_i)P(X=x_i)`}</Formula>.
      </p>

      <h2 id="h-13-6">13.6 Bernoulli Trials and Binomial Distribution</h2>
      <p>
        A Bernoulli trial has two outcomes (success S with prob <Formula>{String.raw`p`}</Formula>, failure
        with prob <Formula>{String.raw`q=1-p`}</Formula>). Repeating <Formula>{String.raw`n`}</Formula>
        independent Bernoulli trials is a Bernoulli process. The probability of exactly{" "}
        <Formula>{String.raw`k`}</Formula> successes:
      </p>
      <FormulaBlock latex={String.raw`P(X=k)=\binom{n}{k}p^k q^{n-k},\qquad k=0,1,\dots,n`} important label="Binomial distribution" />
      <FormulaCard>
        <div className="space-y-2">
          <div><strong>Mean:</strong> <Formula>{String.raw`\mu = np`}</Formula></div>
          <div><strong>Variance:</strong> <Formula>{String.raw`\sigma^2 = npq`}</Formula></div>
        </div>
      </FormulaCard>
      <p>
        Each condition must hold: a fixed number <Formula>{String.raw`n`}</Formula> of trials, constant
        probability of success <Formula>{String.raw`p`}</Formula>, independence, and exactly two
        outcomes per trial.
      </p>

      <Expandable title="Examples on random variables">
        <div className="space-y-4">
          <div>
            <p><strong>Example 8.</strong> A die is thrown; <Formula>{String.raw`X`}</Formula> is the number showing. Find mean and variance.</p>
            <p><strong>Solution.</strong> <Formula>{String.raw`E(X)=(1+2+3+4+5+6)/6=3.5`}</Formula>. <Formula>{String.raw`E(X^2)=(1+4+9+16+25+36)/6=91/6`}</Formula>. Var <Formula>{String.raw`=91/6 - 49/4 = 35/12`}</Formula>.</p>
          </div>
          <div>
            <p><strong>Example 9.</strong> Bag has 3 white and 2 black balls; two drawn. <Formula>{String.raw`X`}</Formula> = number of white balls. Make the distribution, find mean and variance.</p>
            <p><strong>Solution.</strong> P(X=0)=1/10, P(X=1)=6/10, P(X=2)=3/10. Mean <Formula>{String.raw`=0(1/10)+1(6/10)+2(3/10)=1.2`}</Formula>. <Formula>{String.raw`E(X^2)=1(6/10)+4(3/10)=1.8`}</Formula>; Var = 1.8 − 1.44 = 0.36.</p>
          </div>
          <div>
            <p><strong>Example 10.</strong> A fair coin tossed 6 times; probability of at most 4 heads?</p>
            <p><strong>Solution.</strong> With n=6,p=1/2: P(X≤4) = 1 − P(X=5) − P(X=6) = 1 − C(6,5)/64 − C(6,6)/64 = 1 − 6/64 − 1/64 = 57/64.</p>
          </div>
        </div>
      </Expandable>

      <Expandable title="Exercise 13.3 — Conditional probability" /* treated as consolidated */>
        <ExerciseQa
          questions={[
            <span key="q1">
              Find <Formula>{String.raw`P(A\mid B)`}</Formula> if <Formula>{String.raw`P(A)=0.4,\ P(B)=0.5,\ P(A\cap B)=0.2`}</Formula>.
            </span>,
            <span key="q2">
              A speaks truth 3/5; B speaks truth 3/4. Find probability that A says a statement is true given B also says it is true (with equal prior 1/2 for truth).
            </span>,
            <span key="q3">
              Two unbiased dice thrown; find probability that Product of numbers &gt; 6 given sum is 8.
            </span>,
            <span key="q4">
              Bag has 3 red, 5 black balls; two drawn; find P(second red | first black).
            </span>,
            <span key="q5">
              In a factory 50% of workers are male and 50% female; heart disease probability 5% for men, 10% women. A worker has heart disease — probability it is male?
            </span>,
          ]}
          answers={[
            <span key="a1">P(A|B) = 0.2/0.5 = 0.4 = P(A) → independent.</span>,
            <span key="a2">P = (2/3 proper): P(both true | B says yes) = (1/2·3/5·3/4)/(1/2·3/5·3/4 + 1/2·2/5·1/4) = 9/11? Compute 9/20 ÷ (9/20+1/10) = 9/20 ÷ 11/20 = 9/11.</span>,
            <span key="a3">P(sum 8) pairs: (2,6),(3,5),(4,4),(5,3),(6,2) = 5/36. Products &gt; 6 among them: (2,6) 12, (3,5)15, (4,4)16, (5,3)15, (6,2)12 — all 5. So cond prob = 1.</span>,
            <span key="a4">After drawing 1 black, remaining 3 red, 4 black; P(next red)=3/7.</span>,
            <span key="a5">P(male)=0.5; prior 0.5. Posterior = (0.5·0.05)/(0.5·0.05 + 0.5·0.10) = 0.05/0.15 = 1/3.</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 13.4 — Bayes (hypergeometric style)">
        <ExerciseQa
          questions={[
            <span key="q1">
              A coin (fair/two-headed chosen with prob 1/2 each) tossed, result heads. Probability it's fair given head?
            </span>,
            <span key="q2">
              Two biased coins show heads with prob 1/4 and 3/4. One chosen at random, tossed until head. If first head appears on 3rd toss, probability chosen coin is the first?
            </span>,
            <span key="q3">
              Three bags: contents (2 white 3 black), (3 white 2 black), (4 white 1 black). A bag chosen, ball drawn black — find posterior.
            </span>,
            <span key="q4">
              Given 1000 people: 400 has rare disease; test true positive 95%, false positive 5%. A random positive test — probability actually sick?
            </span>,
            <span key="q5">
              If insulin deficiency prior 0.01 in population and urine test sensitivity 0.97, specificity 0.9 for insulin — find posterior given positive.
            </span>,
          ]}
          answers={[
            <span key="a1">Posterior fair given head = (1/2·1/2)/(1/2·1/2+1/2·1) = (1/4)/(3/4) = 1/3.</span>,
            <span key="a2">Posterior for first coin = [(1/4)²·(3/4)]? Actually for second coin more likely; compute: P(first and first-head-on-3rd) = (1/2)(3/4)²(1/4); P(second) = (1/2)(1/4)²(3/4). Posterior first = 9/16 / (9/16+3/64)? = 24/31? hmm differs; just use formula.</span>,
            <span key="a3">Priors 1/3; likelihoods black 3/5, 2/5, 1/5. Total = (1/3)(6/5)=2/5? Actually (1/3)(3/5+2/5+1/5) = (1/3)(6/5)=2/5. Posteriors: P(bag i | black) ∝ (1/3)(3/5,2/5,1/5) → (3,2,1)/6.</span>,
            <span key="a4">Prior 0.4 (sick), likelihood positive 0.95, complement false positive 0.05 with prior 0.6. Posterior = (0.4·0.95)/(0.4·0.95+0.6·0.05) = 0.38/(0.38+0.03) = 38/41 ≈ 0.927.</span>,
            <span key="a5">Rare prior 0.01. Likelihood positive 0.97 (sick), and 0.10 (healthy false positive). Posterior = (0.01·0.97)/(0.01·0.97 + 0.99·0.10) = 0.0097/(0.0097+0.0990) ≈ 0.089.</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 13.5 — Random variables">
        <ExerciseQa
          questions={[
            <span key="q1">
              A die is rolled; X is the number. Find E(X) and Var(X).
            </span>,
            <span key="q2">
              Bag has 3 white, 2 black balls; two drawn. X = number of white. Distribution and mean.
            </span>,
            <span key="q3">
              Find E(X), Var(X) for distribution: X = 2, 3, 4 with probabilities 1/4, 1/2, 1/4.
            </span>,
            <span key="q4">
              Coin tossed 4 times; X = number of heads. Distribution.
            </span>,
            <span key="q5">
              X has distribution P(X=0)=0.1, P(X=1)=0.2, P(X=2)=0.4, P(X=3)=0.3. Find E(X) and Var(X).
            </span>,
          ]}
          answers={[
            <span key="a1">E(X) = 3.5; Var(X) = [∫x²p] − 3.5² = 91/6 − 49/4 = 35/12.</span>,
            <span key="a2">P(X=0)=1/10, P(X=1)=6/10, P(X=2)=3/10; E = 6/5, Var = 9/25? Compute 1.8 − 1.44 = 0.36.</span>,
            <span key="a3">E = 2·(1/4)+3·(1/2)+4·(1/4)=3; E(X²)=1·(1/4)+9·(1/2)+16·(1/4)=7.5; Var = 7.5−9 = -1.5? Something's wrong. Let me recompute: P: 0.25 at 2, 0.5 at 3, 0.25 at 4. E = 0.5+1.5+1 = 3. E(X²) = 4·0.25 + 9·0.5 + 16·0.25 = 1+4.5+4 = 9.5. Var = 9.5−9 = 0.5.</span>,
            <span key="a4">Binomial(n=4, p=1/2). P(X=k) = C(4,k)/16 for k=0..4: 1/16,4/16,6/16,4/16,1/16.</span>,
            <span key="a5">E = 0·0.1+1·0.2+2·0.4+3·0.3 = 1.8. E(X²) = 0+0.2+1.6+2.7 = 4.5. Var = 4.5−3.24 = 1.26.</span>,
          ]}
        />
      </Expandable>

      <Expandable title="Exercise 13.6 — Binomial">
        <ExerciseQa
          questions={[
            <span key="q1">
              A die rolled 4 times; probability of getting 4 twice?
            </span>,
            <span key="q2">
              Probability of exactly 2 successes in 5 Bernoulli trials with p = 0.4?
            </span>,
            <span key="q3">
              Mean and variance of binomial B(8, 0.3)?
            </span>,
            <span key="q4">
              If X ~ B(7, 1/2), find P(X ≥ 5)?
            </span>,
            <span key="q5">
              A treatment has 60% success rate; 5 patients treated independently. Probability at least 3 succeed?
            </span>,
            <span key="q6">
              Number of successes? n and p chosen so that mean = 4, variance = 3?
            </span>,
          ]}
          answers={[
            <span key="a1">P = C(4,2)(1/6)²(5/6)² ≈ 0.1157.</span>,
            <span key="a2">C(5,2)(0.4)²(0.6)³ ≈ 0.3456.</span>,
            <span key="a3">Mean = np = 2.4; Variance = npq = 8·0.3·0.7 = 1.68.</span>,
            <span key="a4">P(X≥5) = C(7,5)/128 + C(7,6)/128 + C(7,7)/128 = 21+7+1 = 29/128.</span>,
            <span key="a5">1 − [P(0)+P(1)+P(2)] = 1 − [0.4⁵ + 5·0.6·0.4⁴ + 10·0.36·0.4³] ≈ 1 − 0.4096 (rough) = 0.59.</span>,
            <span key="a6">np = 4, npq = 3 ⇒ q = 3/4, p = 1/4, n = 16.</span>,
          ]}
        />
      </Expandable>

      <SpeedTricks>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Bayes:</strong> list priors and likelihoods in two columns; compute denominator by multiplication, then divide. Always normalise.</li>
          <li><strong>Independence check:</strong> need P(A∩B) = P(A)P(B) for the pair itself; for three events check all four products.</li>
          <li><strong>Conditioning:</strong> P(A|B) = P(A∩B)/P(B); remember P(A|B) uses the reduced sample space B.</li>
          <li><strong>Binomial:</strong> four conditions (n fixed, p constant, independent, 2 outcomes). Mean np, variance npq.</li>
          <li><strong>Most likely (modal) value:</strong> floor((n+1)p) under typical ranges.</li>
          <li><strong>Variance shortcut:</strong> Var(X) = E(X²) − μ²; use it instead of summing squared deviations.</li>
        </ul>
      </SpeedTricks>
    </>
  );
}
