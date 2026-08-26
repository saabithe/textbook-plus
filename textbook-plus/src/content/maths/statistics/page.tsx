import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { FormulaBlock } from "@/components/content/Formula";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Stepper } from "@/components/content/Stepper";
import { FormulaCard } from "@/components/content/FormulaCard";
import { Highlight } from "@/components/content/Highlight";
import { SpeedTricks } from "@/components/content/SpeedTricks";
import { TableCard } from "@/components/content/data/TableCard";

export default function StatisticsChapter() {
  return (
    <>
      <h2 id="h-intro">13.1 Introduction</h2>
      <Callout type="note" title="Why Statistics?">
        Two shops may sell rice at the same average price — but one might vary wildly while the other is consistent.
        <strong> Measures of central tendency</strong> (mean, median, mode) tell us the &ldquo;centre&rdquo; of data.
        <strong> Measures of dispersion</strong> tell us how <Highlight>spread out</Highlight> the data is around that centre.
        Both are needed to fully describe a dataset.
      </Callout>
      <ul>
        <li><strong>Central tendency:</strong> single value representing the &ldquo;typical&rdquo; observation (arithmetic mean x̄).</li>
        <li><strong>Dispersion:</strong> quantify how far individual observations deviate from the centre.</li>
        <li>If dispersion is small, the data is clustered near the mean; if large, data is widely scattered.</li>
      </ul>

      <h2 id="h-range">13.3 Range</h2>
      <FormulaCard>
        <p className="font-semibold mb-2">Range</p>
        <FormulaBlock latex="R = L - S" />
        <p className="text-sm text-muted-foreground mt-2">L = largest value, S = smallest value in the dataset.</p>
      </FormulaCard>
      <Callout type="important" title="Range">
        The <Highlight>range</Highlight> is the simplest measure of dispersion — the difference between the maximum and minimum values.
        It gives a quick idea of the spread but <strong>ignores all intermediate values</strong> and is sensitive to outliers.
      </Callout>

      <Expandable title="Examples 1 and 2 — Range">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            Find the range of the data: 12, 25, 8, 42, 17, 3, 31.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            L = 42, S = 3. Range = 42 − 3 = <strong>39</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            Heights (in cm) of 8 students: 145, 152, 160, 148, 155, 162, 170, 140. Find the range.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            L = 170, S = 140. Range = 170 − 140 = <strong>30 cm</strong>.
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Range = quick sanity check">
          Before computing mean or variance, scan for the min and max. Their difference (range) gives an instant estimate of spread — useful for catching data-entry errors.
        </Callout>
        <Callout type="tip" title="Range in grouped data">
          For grouped frequency tables, L and S are the <strong>upper boundary of the last class</strong> and <strong>lower boundary of the first class</strong>, not the midpoints.
        </Callout>
      </SpeedTricks>

      <h2 id="h-mean-deviation">13.4 Mean Deviation</h2>
      <Callout type="important" title="Definition">
        The <Highlight>mean deviation</Highlight> of a dataset measures the average of the absolute deviations from the mean.
        It answers: &ldquo;On average, how far is each data point from the centre?&rdquo;
      </Callout>

      <h3>Mean Deviation for Ungrouped Data</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Mean Deviation about Mean</p>
        <FormulaBlock latex="\text{M.D.}(\bar{x}) = \frac{\sum_{i=1}^{n} |x_i - \bar{x}|}{n}" />
        <p className="text-sm text-muted-foreground mt-2">where x̄ = (1/n) Σxᵢ is the arithmetic mean.</p>
      </FormulaCard>

      <Expandable title="Example 3 — Mean Deviation (Ungrouped)">
        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            Find the mean deviation about the mean for: 4, 7, 8, 9, 10, 12, 13, 17.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = (4+7+8+9+10+12+13+17)/8 = 80/8 = 10" },
                { label: "Absolute deviations", description: "|4−10|=6, |7−10|=3, |8−10|=2, |9−10|=1, |10−10|=0, |12−10|=2, |13−10|=3, |17−10|=7" },
                { label: "Mean deviation", description: "M.D.(x̄) = (6+3+2+1+0+2+3+7)/8 = 24/8 = <strong>3</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Mean Deviation for Discrete Frequency Distribution</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Mean Deviation (Discrete Frequency)</p>
        <FormulaBlock latex="\text{M.D.}(\bar{x}) = \frac{\sum_{i=1}^{k} f_i |x_i - \bar{x}|}{N}, \quad N = \sum_{i=1}^{k} f_i" />
        <p className="text-sm text-muted-foreground mt-2">xᵢ are the distinct values, fᵢ their frequencies.</p>
      </FormulaCard>

      <Expandable title="Example 4 — Mean Deviation (Discrete Frequency)">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            Find the mean deviation about the mean for the discrete frequency distribution:
            <br />
            x: 2, 5, 7, 10, 12 &nbsp; | &nbsp; f: 5, 8, 12, 10, 5
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Total frequency", description: "N = 5+8+12+10+5 = 40" },
                { label: "Mean", description: "x̄ = (2×5 + 5×8 + 7×12 + 10×10 + 12×5)/40 = (10+40+84+100+60)/40 = 294/40 = 7.35" },
                { label: "Σfᵢ|xᵢ − x̄|", description: "5|2−7.35| + 8|5−7.35| + 12|7−7.35| + 10|10−7.35| + 5|12−7.35| = 5(5.35)+8(2.35)+12(0.35)+10(2.65)+5(4.65) = 26.75+18.80+4.20+26.50+23.25 = 99.50" },
                { label: "Mean deviation", description: "M.D.(x̄) = 99.50/40 = <strong>2.4875</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Mean Deviation for Continuous Frequency Distribution</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Mean Deviation (Continuous Frequency)</p>
        <FormulaBlock latex="\text{M.D.}(\bar{x}) = \frac{\sum_{i=1}^{k} f_i |d_i|}{N}, \quad d_i = x_i - \bar{x}" />
        <p className="text-sm text-muted-foreground mt-2">xᵢ = midpoint of the i-th class interval, fᵢ = frequency of that class, N = Σfᵢ.</p>
      </FormulaCard>

      <Expandable title="Example 5 — Mean Deviation (Continuous Frequency)">
        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            Find the mean deviation about the mean for:
            <br />
            Class: 0–10, 10–20, 20–30, 30–40, 40–50 &nbsp; | &nbsp; f: 4, 7, 12, 8, 6
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Midpoints", description: "xᵢ = 5, 15, 25, 35, 45" },
                { label: "N", description: "4+7+12+8+6 = 37" },
                { label: "Mean", description: "x̄ = (4×5 + 7×15 + 12×25 + 8×35 + 6×45)/37 = (20+105+300+280+270)/37 = 975/37 ≈ 26.35" },
                { label: "Σfᵢ|dᵢ|", description: "4|5−26.35|+7|15−26.35|+12|25−26.35|+8|35−26.35|+6|45−26.35| = 4(21.35)+7(11.35)+12(1.35)+8(8.65)+6(18.65) = 85.40+79.45+16.20+69.20+111.90 = 362.15" },
                { label: "Mean deviation", description: "M.D.(x̄) = 362.15/37 ≈ <strong>9.79</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Limitations of Mean Deviation</h3>
      <Callout type="warning" title="Limitations">
        <ul className="list-disc pl-5 space-y-1">
          <li>The absolute value |xᵢ − x̄| is <strong>not algebraically convenient</strong> — it is difficult to differentiate or manipulate further.</li>
          <li>This limits the use of mean deviation in advanced mathematical analysis.</li>
          <li><Highlight>Variance and standard deviation</Highlight> overcome this by squaring deviations instead of taking absolute values.</li>
        </ul>
      </Callout>

      <SpeedTricks>
        <Callout type="tip" title="Mean deviation shortcut: use the median">
          When the data has outliers, mean deviation about the <strong>median</strong> is often smaller (and more representative) than about the mean. For symmetric data, both are close.
        </Callout>
        <Callout type="tip" title="Continuous data: midpoint rule">
          For class intervals, always use the <strong>midpoint</strong> (lower + upper)/2 as xᵢ. This approximation is standard and expected in exams.
        </Callout>
      </SpeedTricks>

      <h2 id="h-variance">13.5 Variance and Standard Deviation</h2>
      <Callout type="important" title="Why Squared Deviations?">
        Squaring eliminates negative signs and is <Highlight>algebraically tractable</Highlight>.
        Variance and standard deviation are the most widely used measures of dispersion in statistics.
      </Callout>

      <h3>Variance — Definition</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Population Variance (σ²)</p>
        <FormulaBlock latex="\sigma^2 = \frac{1}{N}\sum_{i=1}^{N}(x_i - \bar{x})^2" />
        <p className="text-sm text-muted-foreground mt-2">N = total number of observations. The variance is always ≥ 0.</p>
      </FormulaCard>
      <KeyPoint title="Standard Deviation">
        <FormulaBlock latex="\sigma = \sqrt{\sigma^2} = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(x_i - \bar{x})^2}" />
        <p>Standard deviation has the <strong>same units</strong> as the original data (unlike variance which is in squared units).</p>
      </KeyPoint>

      <h3>Variance for Ungrouped Data</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Ungrouped Variance</p>
        <FormulaBlock latex="\sigma^2 = \frac{1}{N}\sum_{i=1}^{N}(x_i - \bar{x})^2" />
        <p className="text-sm text-muted-foreground mt-2">Step 1: find x̄. Step 2: compute each (xᵢ − x̄)². Step 3: average them.</p>
      </FormulaCard>

      <Expandable title="Examples 6 and 7 — Ungrouped Variance">
        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            Find the variance and standard deviation of: 6, 8, 10, 12, 14.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = (6+8+10+12+14)/5 = 50/5 = 10" },
                { label: "Squared deviations", description: "(6−10)²=16, (8−10)²=4, (10−10)²=0, (12−10)²=4, (14−10)²=16" },
                { label: "Variance", description: "σ² = (16+4+0+4+16)/5 = 40/5 = <strong>8</strong>" },
                { label: "Standard deviation", description: "σ = √8 = <strong>2√2 ≈ 2.828</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 7">
          <ProblemSolution.Problem>
            Find the variance of the first 10 natural numbers.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = (1+2+⋯+10)/10 = 55/10 = 5.5" },
                { label: "Σ(xᵢ − x̄)²", description: "= (1−5.5)²+(2−5.5)²+⋯+(10−5.5)² = 20.25+12.25+6.25+2.25+0.25+0.25+2.25+6.25+12.25+20.25 = 82.5" },
                { label: "Variance", description: "σ² = 82.5/10 = <strong>8.25</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Variance for Discrete Frequency Distribution</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Discrete Frequency Variance</p>
        <FormulaBlock latex="\sigma^2 = \frac{1}{N}\sum_{i=1}^{k}f_i(x_i - \bar{x})^2, \quad N = \sum_{i=1}^{k}f_i" />
        <p className="text-sm text-muted-foreground mt-2">xᵢ = distinct values, fᵢ = corresponding frequencies.</p>
      </FormulaCard>

      <Expandable title="Example 8 — Discrete Frequency Variance">
        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            Find the variance for: x: 3, 5, 7, 9, 11 &nbsp; | &nbsp; f: 4, 6, 8, 6, 4
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "N", description: "4+6+8+6+4 = 28" },
                { label: "Mean", description: "x̄ = (3×4+5×6+7×8+9×6+11×4)/28 = (12+30+56+54+44)/28 = 196/28 = 7" },
                { label: "Σfᵢ(xᵢ−7)²", description: "4(16)+6(4)+8(0)+6(4)+4(16) = 64+24+0+24+64 = 176" },
                { label: "Variance", description: "σ² = 176/28 = <strong>6.286</strong> (approx)" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Variance for Continuous Frequency Distribution</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Continuous Frequency Variance</p>
        <FormulaBlock latex="\sigma^2 = \frac{1}{N}\sum_{i=1}^{k}f_i(x_i - \bar{x})^2" />
        <p className="text-sm text-muted-foreground mt-2">xᵢ = midpoint of i-th class, fᵢ = class frequency, N = total frequency.</p>
      </FormulaCard>

      <Expandable title="Example 9 — Continuous Frequency Variance">
        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            Find σ² and σ for:
            <br />
            Class: 0–10, 10–20, 20–30, 30–40, 40–50 &nbsp; | &nbsp; f: 2, 5, 8, 4, 1
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Midpoints & N", description: "xᵢ = 5, 15, 25, 35, 45. N = 2+5+8+4+1 = 20" },
                { label: "Mean", description: "x̄ = (10+75+200+140+45)/20 = 470/20 = 23.5" },
                { label: "Σfᵢ(xᵢ−23.5)²", description: "= 2(342.25)+5(72.25)+8(2.25)+4(132.25)+1(462.25) = 684.50+361.25+18+529+462.25 = 2055" },
                { label: "Variance", description: "σ² = 2055/20 = <strong>102.75</strong>" },
                { label: "Standard deviation", description: "σ = √102.75 ≈ <strong>10.14</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Shortcut / Step-Deviation Method</h3>
      <Callout type="important" title="Step-Deviation Method">
        When the data values are large or the mean is a messy fraction, the <Highlight>step-deviation method</Highlight> simplifies calculations by shifting and scaling the data.
        Choose an <strong>assumed mean</strong> a and <strong>class width</strong> h (or common factor).
      </Callout>

      <FormulaCard>
        <p className="font-semibold mb-2">Step-Deviation Formulas</p>
        <FormulaBlock latex="u_i = \frac{x_i - a}{h}" />
        <FormulaBlock latex="\bar{x} = a + h \cdot \frac{\sum f_i u_i}{N}" />
        <FormulaBlock latex="\sigma^2 = h^2 \left[\frac{1}{N}\sum f_i u_i^2 - \left(\frac{1}{N}\sum f_i u_i\right)^2\right]" />
        <p className="text-sm text-muted-foreground mt-2">a = assumed mean, h = class width (or common factor), uᵢ = coded value, N = Σfᵢ.</p>
      </FormulaCard>

      <KeyPoint title="Shortcut Method (without step-deviation)">
        If you only shift by a (no dividing by h):
        <FormulaBlock latex="d_i = x_i - a" />
        <FormulaBlock latex="\sigma^2 = \frac{1}{N}\sum f_i d_i^2 - \left(\frac{1}{N}\sum f_i d_i\right)^2" />
      </KeyPoint>

      <Expandable title="Example 10 — Step-Deviation Method">
        <ProblemSolution problemNumber="Example 10">
          <ProblemSolution.Problem>
            Using the step-deviation method, find the variance and standard deviation for:
            <br />
            Class: 0–10, 10–20, 20–30, 30–40, 40–50 &nbsp; | &nbsp; f: 2, 5, 8, 4, 1
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <TableCard
              headers={["Class", "xᵢ", "fᵢ", "uᵢ = (xᵢ−25)/10", "fᵢuᵢ", "fᵢuᵢ²"]}
              rows={[
                { cells: ["0–10", "5", "2", "−2", "−4", "8"] },
                { cells: ["10–20", "15", "5", "−1", "−5", "5"] },
                { cells: ["20–30", "25", "8", "0", "0", "0"] },
                { cells: ["30–40", "35", "4", "1", "4", "4"] },
                { cells: ["40–50", "45", "1", "2", "2", "4"] },
                { cells: ["Total", "", "N = 20", "", "Σ = −3", "Σ = 21"] },
              ]}
            />
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = 25 + 10 × (−3/20) = 25 − 1.5 = 23.5" },
                { label: "Variance", description: "σ² = 100 × [21/20 − (−3/20)²] = 100 × [1.05 − 0.0225] = 100 × 1.0275 = <strong>102.75</strong>" },
                { label: "Standard deviation", description: "σ = √102.75 ≈ <strong>10.14</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Example 11 — Shortcut Method (Assumed Mean)">
        <ProblemSolution problemNumber="Example 11">
          <ProblemSolution.Problem>
            Find σ² using the shortcut method with assumed mean a = 10 for:
            <br />
            x: 5, 10, 15, 20, 25 &nbsp; | &nbsp; f: 2, 4, 7, 6, 3
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "N", description: "2+4+7+6+3 = 22" },
                { label: "dᵢ = xᵢ − 10", description: "d: −5, 0, 5, 10, 15" },
                { label: "Σfᵢdᵢ", description: "2(−5)+4(0)+7(5)+6(10)+3(15) = −10+0+35+60+45 = 130" },
                { label: "Σfᵢdᵢ²", description: "2(25)+4(0)+7(25)+6(100)+3(225) = 50+0+175+600+675 = 1500" },
                { label: "Variance", description: "σ² = 1500/22 − (130/22)² = 68.182 − 34.917 ≈ <strong>33.27</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Step-deviation: pick a near x̄">
          Choose the assumed mean a close to the middle of the data (or the midpoint of the class with the highest frequency). This keeps uᵢ values small (mostly −1, 0, +1), making multiplication trivial.
        </Callout>
        <Callout type="tip" title="Always verify: σ² ≥ 0">
          Variance is a sum of squares divided by N — it can never be negative. If your answer is negative, you made a sign error.
        </Callout>
        <Callout type="tip" title="σ vs σ² — know when to use which">
          Standard deviation σ has the same units as the data (e.g., cm, kg) — use it for interpretation. Variance σ² is easier for algebraic manipulation — use it in proofs and further calculations.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: Statistics Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Range ignores distribution shape:</strong> Two datasets can have the same range but completely different spreads. Always pair range with mean deviation or standard deviation.</li>
          <li><strong>Mean deviation ≠ average deviation:</strong> M.D. uses absolute values of deviations from the <strong>mean</strong>, not from an arbitrary point.</li>
          <li><strong>Variance: population vs sample:</strong> NCERT Class 11 uses N (not N−1) in the denominator. The N−1 correction (Bessel&apos;s correction) appears in later statistics courses.</li>
          <li><strong>Step-deviation: h is the class width,</strong> not the range. For classes 0–10, 10–20, …, h = 10. Don&apos;t confuse with the number of classes.</li>
          <li><strong>Midpoint approximation:</strong> For continuous classes, the midpoint is used as a representative value. This introduces a small error but is standard practice.</li>
          <li><strong>Variance of constant data = 0:</strong> If all values are the same, every deviation is zero, so σ² = σ = 0. This makes sense — there is no spread.</li>
          <li><strong>Adding a constant:</strong> If every observation is increased by c, the mean increases by c but <Highlight>variance and standard deviation remain unchanged</Highlight>.</li>
          <li><strong>Multiplying by a constant:</strong> If every observation is multiplied by k, the variance is multiplied by k² and the standard deviation by |k|.</li>
        </ul>
      </Callout>

      <Expandable id="h-ex-13-1" title="Exercise 13.1">
        <ol>
          <li>Find the range of: (a) 12, 34, 56, 8, 90, 15, (b) 100, 87, 56, 34, 23, 12.</li>
          <li>The heights (in cm) of 10 students: 150, 152, 148, 155, 160, 145, 158, 162, 153, 147. Find the range.</li>
          <li>Find the mean deviation about the mean for: 3, 6, 10, 12, 18, 21.</li>
          <li>Find the mean deviation about the median for: 12, 15, 18, 20, 25, 30, 35.</li>
          <li>Find the mean deviation about the mean for: x: 10, 30, 50, 70, 90 | f: 4, 6, 8, 6, 4.</li>
          <li>Find the mean deviation about the mean for the class intervals: 0–10, 10–20, 20–30, 30–40 with frequencies 5, 8, 10, 7.</li>
          <li>Calculate the variance of: 2, 4, 6, 8, 10.</li>
          <li>Find the variance and standard deviation of the first 5 positive integers.</li>
          <li>For the discrete distribution x: 1, 3, 5, 7 | f: 3, 5, 4, 2, find σ² and σ.</li>
          <li>Find the variance of the data: 5, 10, 15, 20, 25, 30 using the step-deviation method with a = 17.5.</li>
        </ol>
        <Expandable title="Answer Key — Exercise 13.1">
          <ol>
            <li>(a) 90 − 8 = 82. (b) 100 − 12 = 88.</li>
            <li>Range = 162 − 145 = 17 cm.</li>
            <li>x̄ = 70/6 ≈ 11.67. M.D.(x̄) ≈ 4.89.</li>
            <li>Median = 20. M.D.(median) ≈ 6.86.</li>
            <li>x̄ = 50. Σfᵢ|xᵢ−50| = 160+120+0+120+160 = 560. M.D. = 560/28 = 20.</li>
            <li>x̄ = (25+120+250+245)/30 = 640/30 ≈ 21.33. M.D. ≈ 8.44.</li>
            <li>x̄ = 6. σ² = (16+4+0+4+16)/5 = 40/5 = 8.</li>
            <li>x̄ = 3. σ² = 2, σ = √2 ≈ 1.414.</li>
            <li>N = 14. x̄ = (3+15+20+14)/14 = 52/14 ≈ 3.714. σ² ≈ 3.061, σ ≈ 1.75.</li>
            <li>N = 6. dᵢ: −12.5, −7.5, −2.5, 2.5, 7.5, 12.5. Σdᵢ = 0. Σdᵢ² = 437.5. σ² = 437.5/6 ≈ 72.92.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-ex-13-2" title="Exercise 13.2">
        <ol>
          <li>Find the variance of: 6, 8, 10, 12, 14, 16.</li>
          <li>Find the standard deviation of: 2, 4, 6, 8, 10, 12, 14, 16.</li>
          <li>For x: 1, 2, 3, 4, 5, 6 | f: 2, 4, 6, 8, 10, 12, find σ².</li>
          <li>Find σ² for: Class: 0–5, 5–10, 10–15, 15–20 | f: 3, 7, 5, 2 using step-deviation method (a = 7.5, h = 5).</li>
          <li>The variance of a dataset is 4. If each observation is multiplied by 3, find the new variance.</li>
          <li>The mean and standard deviation of 10 observations are 12 and 4. Find Σ(xᵢ − 12)².</li>
          <li>Find the mean deviation about the mean for the continuous frequency distribution: Class 0–20, 20–40, 40–60, 60–80 with f: 6, 8, 10, 4.</li>
          <li>If σ² = 9 for a dataset, what is the coefficient of variation if x̄ = 15?</li>
        </ol>
        <Expandable title="Answer Key — Exercise 13.2">
          <ol>
            <li>x̄ = 11. σ² = (25+9+1+1+9+25)/6 = 70/6 ≈ 11.67.</li>
            <li>x̄ = 9. σ² = (49+25+9+1+1+9+25+49)/8 = 168/8 = 21. σ = √21 ≈ 4.583.</li>
            <li>N = 42. x̄ = (2+8+18+32+50+72)/42 = 182/42 ≈ 4.33. σ² ≈ 2.551.</li>
            <li>Midpoints: 2.5, 7.5, 12.5, 17.5. uᵢ: −1, 0, 1, 2. Σfᵢuᵢ = −3+0+5+4 = 6. Σfᵢuᵢ² = 3+0+5+8 = 16. σ² = 25[16/20 − (6/20)²] = 25[0.8 − 0.09] = 25(0.71) = 17.75.</li>
            <li>New variance = 9 × 9 = 81. (Variance scales by k² when data is multiplied by k.)</li>
            <li>Σ(xᵢ − x̄)² = Nσ² = 10 × 16 = 160.</li>
            <li>Midpoints: 10, 30, 50, 70. x̄ = (60+240+500+280)/28 = 1080/28 ≈ 38.57. M.D. ≈ 14.29.</li>
            <li>CV = (σ/x̄) × 100 = (3/15) × 100 = 20%.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-misc-ex-13" title="Miscellaneous Exercise on Chapter 13">
        <ol>
          <li>Find the range and mean deviation about the mean for: 7, 11, 15, 19, 23, 27, 31.</li>
          <li>The mean of 5 observations is 4.4 and the variance is 8.24. If three of the five observations are 1, 2, 6, find the other two.</li>
          <li>Find the mean deviation about the median for: x: 5, 10, 15, 20, 25 | f: 3, 5, 4, 2, 1.</li>
          <li>For the data: Class 0–10, 10–20, 20–30, 30–40, 40–50 | f: 1, 3, 4, 3, 2, find σ² using the step-deviation method.</li>
          <li>The standard deviation of a dataset is 5. If every observation is decreased by 3, what is the new standard deviation?</li>
          <li>Find the coefficient of variation for: x: 10, 12, 15, 18, 20, 25, 30.</li>
          <li>The mean and variance of 20 observations are 15 and 9. If one observation 19 is replaced by 11, find the new mean and variance.</li>
          <li>For two datasets A: 2, 4, 6, 8 and B: 5, 10, 15, 20, which has greater dispersion? Justify using the coefficient of variation.</li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>Range = 31−7 = 24. x̄ = 19. M.D. = (12+8+4+0+4+8+12)/7 = 48/7 ≈ 6.86.</li>
            <li>Sum = 22. Known three sum = 9. Other two sum = 13. Using variance: (1+4+36+a²+b²)/5 − (4.4)² = 8.24. Solve: a+b = 13, a²+b² = 83. → a = 4, b = 9 or a = 9, b = 4.</li>
            <li>N = 15, Median = 15. Σfᵢ|xᵢ−15| = 30+25+0+10+25 = 90. M.D.(median) = 90/15 = 6.</li>
            <li>Midpoints: 5, 15, 25, 35, 45. N = 13. x̄ = (5+45+100+105+90)/13 = 345/13 ≈ 26.54. σ² ≈ 139.6.</li>
            <li>σ = 5. (Shifting by a constant does not change the standard deviation.)</li>
            <li>x̄ = 120/7 ≈ 17.14. σ ≈ 6.84. CV = (6.84/17.14)×100 ≈ 39.9%.</li>
            <li>New mean = (300−19+11)/20 = 292/20 = 14.6. New Σ(xᵢ−x̄)² = 20×9 − (19−15)² + (11−15)² = 180−16+16 = 180. New σ² = 180/20 = 9. (Variance unchanged because the net shift in sum of squares cancelled.)</li>
            <li>A: x̄ = 5, σ = √5 ≈ 2.24, CV = 44.7%. B: x̄ = 12.5, σ ≈ 6.45, CV ≈ 51.6%. Dataset B has greater dispersion (higher CV).</li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
