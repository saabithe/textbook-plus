import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
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
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> the question says &ldquo;range&rdquo;, or asks for largest minus smallest.</p>
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
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> a raw list of values says &ldquo;mean deviation about the mean&rdquo;.</p>
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

      <h3>Mean Deviation about Median</h3>
      <Callout type="important" title="Median — robust alternative">
        When data has <Highlight>outliers or extreme values</Highlight>, the median M is a more representative measure of
        the centre than the mean. Mean deviation can be computed about the median too:
      </Callout>
      <FormulaCard>
        <p className="font-semibold mb-2">Mean Deviation about Median (Ungrouped)</p>
        <FormulaBlock latex="\text{M.D.}(M) = \frac{\sum_{i=1}^{n} |x_i - M|}{n}" />
        <p className="text-sm text-muted-foreground mt-2">where M is the median of the observations.</p>
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> a raw list says &ldquo;mean deviation about the median&rdquo;, or the data has outliers (M is robust).</p>
      </FormulaCard>
      <FormulaCard>
        <p className="font-semibold mb-2">Mean Deviation about Median (Frequency Distribution)</p>
        <FormulaBlock latex="\text{M.D.}(M) = \frac{\sum_{i=1}^{k} f_i |x_i - M|}{N}, \quad N = \sum f_i" />
        <p className="text-sm text-muted-foreground mt-2">For grouped data, first find the median class using cumulative frequency, then the median formula from Chapter 5.</p>
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> frequency data (x and f together) asks for deviation about the median.</p>
      </FormulaCard>

      <Expandable title="Example 4 and 5 — Mean Deviation about Median">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            Find the mean deviation about the median for: 13, 17, 16, 14, 11, 13, 10, 16, 11, 18, 12, 17.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Arrange in order", description: "10, 11, 11, 12, 13, 13, 14, 16, 16, 17, 17, 18" },
                { label: "Median", description: "n = 12 (even), so M = average of the 6th and 7th values = (13 + 14)/2 = 13.5" },
                { label: "∑|xᵢ − M|", description: "= |10−13.5| + |11−13.5| + |11−13.5| + |12−13.5| + |13−13.5| + |13−13.5| + |14−13.5| + |16−13.5| + |16−13.5| + |17−13.5| + |17−13.5| + |18−13.5| = 3.5 + 2.5 + 2.5 + 1.5 + 0.5 + 0.5 + 0.5 + 2.5 + 2.5 + 3.5 + 3.5 + 4.5 = 28" },
                { label: "Mean deviation", description: "M.D.(M) = 28/12 = <strong>2.33</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            Calculate the mean deviation about median for the following data:
            <br />
            Class: 0–10, 10–20, 20–30, 30–40, 40–50, 50–60 &nbsp; | &nbsp; Frequency: 6, 7, 15, 16, 4, 2
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Cumulative frequency", description: "c.f.: 6, 13, 28, 44, 48, 50. N = 50, so N/2 = 25 falls in class 20–30 (median class)." },
                { label: "Median", description: "M = l + (N/2 − C)/f × h = 20 + (25 − 13)/15 × 10 = 20 + 8 = 28" },
                { label: "∑fᵢ|xᵢ − M|", description: "Using midpoints: 6|5−28| + 7|15−28| + 15|25−28| + 16|35−28| + 4|45−28| + 2|55−28| = 138 + 91 + 45 + 112 + 68 + 54 = 508" },
                { label: "Mean deviation", description: "M.D.(M) = 508/50 = <strong>10.16</strong>" },
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
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> discrete data given as x-values with frequencies f (no class intervals). Divide by N = Σfᵢ.</p>
      </FormulaCard>

      <Expandable title="Examples 6 and 7 — Mean Deviation (Discrete & Continuous Frequency)">
        <ProblemSolution problemNumber="Example 6">
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
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> data is grouped into class intervals — convert each class to its midpoint first.</p>
      </FormulaCard>

      <Expandable title="Example 7 — Mean Deviation (Continuous Frequency)">
        <ProblemSolution problemNumber="Example 7">
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
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> the question asks for variance of a raw list — compute x̄, then average the squared deviations. NCERT Class 11 divides by N (not N−1).</p>
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
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> variance of an ungrouped list, e.g. examples 8–9. Same formula as the definition.</p>
      </FormulaCard>

      <Expandable title="Examples 8 and 9 — Ungrouped Variance">
        <ProblemSolution problemNumber="Example 8">
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

        <ProblemSolution problemNumber="Example 9">
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
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> variance of discrete frequency data (x and f side by side, no classes).</p>
      </FormulaCard>

      <Expandable title="Example 10 — Discrete Frequency Variance">
        <ProblemSolution problemNumber="Example 10">
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
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> variance of continuous (class-interval) data — take midpoints, then apply the discrete formula.</p>
      </FormulaCard>

      <Expandable title="Example 11 — Continuous Frequency Variance">
        <ProblemSolution problemNumber="Example 11">
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
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> values are large / the mean is a messy fraction, or the question says &ldquo;step-deviation method&rdquo;. Keep h as the class width (e.g. classes 0–10 → h = 10).</p>
      </FormulaCard>

      <KeyPoint title="Shortcut Method (without step-deviation)">
        If you only shift by a (no dividing by h):
        <FormulaBlock latex="d_i = x_i - a" />
        <FormulaBlock latex="\sigma^2 = \frac{1}{N}\sum f_i d_i^2 - \left(\frac{1}{N}\sum f_i d_i\right)^2" />
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> you only want to shift by an assumed mean a (no class width h) to simplify arithmetic — the &ldquo;short-cut method&rdquo;.</p>
      </KeyPoint>

      <Expandable title="Example 12 — Step-Deviation Method">
        <ProblemSolution problemNumber="Example 12">
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

      <Expandable title="Example 13 — Shortcut Method (Assumed Mean)">
        <ProblemSolution problemNumber="Example 13">
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

      <h2 id="h-cv">13.6 Comparing Series: Coefficient of Variation <span className="text-sm font-normal text-muted-foreground">(beyond syllabus)</span></h2>
      <Callout type="important" title="Why compare two standard deviations?">
        Suppose two classes scored SD = 5 on two different exams — but one exam was out of 100 and the other out of 25.
        A raw σ of 5 tells us <strong>nothing</strong> about which class is more consistent. The <Highlight>coefficient of variation (C.V.)</Highlight>
        standardises σ against the mean, so datasets with <strong>different means or units</strong> can be compared.
      </Callout>
      <FormulaCard>
        <p className="font-semibold mb-2">Coefficient of Variation</p>
        <FormulaBlock latex="\text{C.V.} = \frac{\sigma}{\bar{x}} \times 100" />
        <p className="text-sm text-muted-foreground mt-2">Expressed as a percentage. The dataset with the <strong>smaller</strong> C.V. is more consistent (less relative variability).</p>
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> comparing two series (&ldquo;which is more consistent / stable / uniform?&rdquo;), possibly with different means or units. Same mean → compare σ directly.</p>
      </FormulaCard>
      <ul>
        <li><strong>Smaller C.V. → more consistent / uniform</strong> dataset (better performance, tighter control, etc.).</li>
        <li><strong>Larger C.V. → more scattered</strong> dataset relative to its mean.</li>
        <li>C.V. is <Highlight>unit-free</Highlight> — it works across kilograms vs centimetres, rupees vs marks.</li>
        <li>Use σ (not σ²) in the numerator — C.V. is a percentage, and σ has the same units as x̄.</li>
      </ul>

      <Expandable title="Example 14 — Comparing Two Series with C.V.">
        <ProblemSolution problemNumber="Example 14">
          <ProblemSolution.Problem>
            Prices of shares of two companies are: A: 45, 55, 50, 52, 48 &nbsp; B: 33, 35, 40, 38, 39. Which company&apos;s prices are more stable?
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Company A", description: "x̄ = 250/5 = 50. σ² = (25+25+0+4+4)/5 = 58/5 = 11.6, so σ ≈ 3.41. C.V. = (3.41/50)×100 = <strong>6.82%</strong>" },
                { label: "Company B", description: "x̄ = 185/5 = 37. σ² = (16+4+9+1+4)/5 = 34/5 = 6.8, so σ ≈ 2.61. C.V. = (2.61/37)×100 = <strong>7.05%</strong>" },
                { label: "Compare", description: "6.82% &lt; 7.05%, so <strong>Company A is more stable</strong> (lower relative variability)." },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="C.V. exam trick: same mean, compare σ directly">
          If two datasets have the <strong>same mean</strong>, comparing C.V. is the same as comparing σ directly — skip the percentage and just compare the standard deviations.
        </Callout>
        <Callout type="tip" title="Watch the denominator's units">
          C.V. = σ/x̄ pairs data of the same type. Never mix, e.g., σ in kg with a mean in ₹ — the ratio becomes meaningless.
        </Callout>
        <Callout type="tip" title="C.V. < 15% is 'low'">
          A quick benchmark: in many fields, C.V. below ~15% signals tight, consistent data; above ~30% signals high relative scatter.
        </Callout>
      </SpeedTricks>

      <h2 id="h-formula-map">13.2 Formula Map — Which Formula to Use When?</h2>
      <Callout type="important" title="Read the words, not the numbers">
        Every question in this chapter is a keyword decoder: the wording tells you <strong>which formula</strong> to reach
        for before you compute anything. Ask yourself: does the question want (a) a quick range, (b) an average absolute
        deviation, (c) variance/standard deviation, or (d) a <Highlight>comparison between two series</Highlight>?
        Then let the <strong>shape of the data</strong> (raw list, x-and-f table, class intervals) finish the decision.
      </Callout>

      <div className="my-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left p-2 font-semibold text-xs uppercase text-muted-foreground">When the question says…</th>
              <th className="text-left p-2 font-semibold text-xs uppercase text-muted-foreground">Reach for this formula</th>
              <th className="text-left p-2 font-semibold text-xs uppercase text-muted-foreground">Model example</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--border)]/40">
              <td colSpan={3} className="p-2 font-semibold bg-muted/40 text-[0.8rem]">Range — one-line spread check</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;Range&rdquo;, or &ldquo;largest − smallest&rdquo;</td>
              <td className="p-2"><Formula>{`R = L - S`}</Formula></td>
              <td className="p-2">Examples 1–2</td>
            </tr>

            <tr className="border-b border-[var(--border)]/40">
              <td colSpan={3} className="p-2 font-semibold bg-muted/40 text-[0.8rem]">Mean Deviation — average absolute distance from a centre</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;M.D. about the mean&rdquo; for a list of values</td>
              <td className="p-2"><Formula>{`\text{M.D.}(\bar{x}) = \frac{\sum_{i=1}^{n} |x_i - \bar{x}|}{n}`}</Formula></td>
              <td className="p-2">Example 3</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;M.D. about the median&rdquo;, or data has outliers</td>
              <td className="p-2"><Formula>{`\text{M.D.}(M) = \frac{\sum_{i=1}^{n} |x_i - M|}{n}`}</Formula></td>
              <td className="p-2">Example 4</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Data given as x-values with frequencies (no classes)</td>
              <td className="p-2"><Formula>{`\text{M.D.}(\bar{x}) = \frac{\sum_{i=1}^{k} f_i |x_i - \bar{x}|}{N}, \quad N = \sum f_i`}</Formula></td>
              <td className="p-2">Example 6</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Data given as class intervals (0–10, 10–20, …)</td>
              <td className="p-2">Convert to <strong>midpoints</strong> xᵢ, then <Formula>{`\text{M.D.}(\bar{x}) = \frac{\sum f_i |x_i - \bar{x}|}{N}`}</Formula></td>
              <td className="p-2">Examples 5, 7</td>
            </tr>

            <tr className="border-b border-[var(--border)]/40">
              <td colSpan={3} className="p-2 font-semibold bg-muted/40 text-[0.8rem]">Variance &amp; Standard Deviation — squared deviations</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;Variance&rdquo; / &ldquo;standard deviation&rdquo; of a list</td>
              <td className="p-2"><Formula>{`\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2`}</Formula></td>
              <td className="p-2">Examples 8–9</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Values with frequencies (no classes)</td>
              <td className="p-2"><Formula>{`\sigma^2 = \frac{1}{N} \sum_{i=1}^{k} f_i (x_i - \bar{x})^2`}</Formula></td>
              <td className="p-2">Example 10</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Class intervals (continuous)</td>
              <td className="p-2">Midpoints xᵢ, then <Formula>{`\sigma^2 = \frac{1}{N} \sum f_i (x_i - \bar{x})^2`}</Formula></td>
              <td className="p-2">Example 11</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;Short-cut / step-deviation method&rdquo;, or values are large with a messy mean</td>
              <td className="p-2"><Formula>{`\sigma^2 = h^2 \left[ \frac{1}{N} \sum f_i u_i^2 - \left( \frac{1}{N} \sum f_i u_i \right)^2 \right]`}</Formula></td>
              <td className="p-2">Examples 12–13</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">σ² and x̄ are given; asks for <strong>missing / wrong observations</strong></td>
              <td className="p-2"><Formula>{`\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2 \ \Rightarrow \ \sum x_i^2 = n(\sigma^2 + \bar{x}^2)`}</Formula></td>
              <td className="p-2">Examples 16, 18</td>
            </tr>

            <tr className="border-b border-[var(--border)]/40">
              <td colSpan={3} className="p-2 font-semibold bg-muted/40 text-[0.8rem]">Coefficient of Variation — comparing two series</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;Which series is more consistent / stable / uniform?&rdquo; (often different means or units)</td>
              <td className="p-2"><Formula>{`\text{C.V.} = \frac{\sigma}{\bar{x}} \times 100`}</Formula> — smaller C.V. wins</td>
              <td className="p-2">Example 14</td>
            </tr>
            <tr>
              <td className="p-2">Each observation changed: &ldquo;multiplied by k&rdquo; or &ldquo;increased by c&rdquo;</td>
              <td className="p-2"><Formula>{`\times k \Rightarrow \sigma \to |k|\sigma, \ \sigma^2 \to k^2\sigma^2`}</Formula> &nbsp; <Formula>{`+ c \Rightarrow`}</Formula> σ unchanged</td>
              <td className="p-2">Examples 15, 17</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="rounded-md border border-emerald-500/30 bg-emerald-500/5 p-3">
          <p className="font-semibold text-emerald-600 dark:text-emerald-400 text-sm mb-1">Range</p>
          <p className="text-xs text-muted-foreground"><strong>Grab it when:</strong> &ldquo;range&rdquo;, smallest−largest, instant sanity check. Never enough alone — pair with M.D. or σ.</p>
        </div>
        <div className="rounded-md border border-amber-500/30 bg-amber-500/5 p-3">
          <p className="font-semibold text-amber-600 dark:text-amber-400 text-sm mb-1">Mean Deviation</p>
          <p className="text-xs text-muted-foreground"><strong>Grab it when:</strong> question literally says &ldquo;mean deviation&rdquo; (about mean or median). Choose median when there are outliers.</p>
        </div>
        <div className="rounded-md border border-blue-500/30 bg-blue-500/5 p-3">
          <p className="font-semibold text-blue-600 dark:text-blue-400 text-sm mb-1">Variance &amp; SD</p>
          <p className="text-xs text-muted-foreground"><strong>Grab it when:</strong> &ldquo;variance&rdquo;, &ldquo;standard deviation&rdquo;, or you need algebra-friendly spread. σ has the data&apos;s units.</p>
        </div>
        <div className="rounded-md border border-purple-500/30 bg-purple-500/5 p-3">
          <p className="font-semibold text-purple-600 dark:text-purple-400 text-sm mb-1">Coefficient of Variation</p>
          <p className="text-xs text-muted-foreground"><strong>Grab it when:</strong> two series, &ldquo;which is more consistent?&rdquo;, possibly different means/units. Same mean → just compare σ.</p>
        </div>
      </div>

      <KeyPoint title="The two working identities for missing / wrong observation problems">
        Almost every &ldquo;find the missing observation&rdquo; / &ldquo;one observation was wrong&rdquo; question is solved by
        (<Formula>{`\sum x_i = n\bar{x}`}</Formula>) and (<Formula>{`\sum x_i^2 = n(\sigma^2 + \bar{x}^2)`}</Formula>).
        Recover the totals that got corrupted, fix them, and recompute the mean and variance directly — no need to solve systems by hand (see Examples 16 and 18, Misc Q1–2, 5–6).
      </KeyPoint>

      <Expandable id="h-ex-13-1" title="Exercise 13.1">
        <ol>
          <li>Find the mean deviation about the mean for the data: 4, 7, 8, 9, 10, 12, 13, 17.</li>
          <li>Find the mean deviation about the mean for the data: 38, 70, 48, 40, 42, 55, 63, 46, 54, 44.</li>
          <li>Find the mean deviation about the median for the data: 13, 17, 16, 14, 11, 13, 10, 16, 11, 18, 12, 17.</li>
          <li>Find the mean deviation about the median for the data: 36, 72, 46, 42, 60, 45, 53, 46, 51, 49.</li>
          <li>Find the mean deviation about the mean for the data: x: 5, 10, 15, 20, 25 | f: 7, 4, 6, 3, 5.</li>
          <li>Find the mean deviation about the mean for the data: x: 10, 30, 50, 70, 90 | f: 4, 24, 28, 16, 8.</li>
          <li>Find the mean deviation about the median for the data: x: 5, 7, 9, 10, 12, 15 | f: 8, 6, 2, 2, 2, 6.</li>
          <li>Find the mean deviation about the median for the data: x: 15, 21, 27, 30, 35 | f: 3, 5, 6, 7, 8.</li>
        </ol>
        <Expandable title="Answer Key — Exercise 13.1">
          <ol>
            <li>x̄ = 80/8 = 10. MD = (6+3+2+1+0+2+3+7)/8 = 24/8 = <strong>3</strong>.</li>
            <li>x̄ = 500/10 = 50. MD = (12+20+2+10+8+5+13+4+4+6)/10 = 84/10 = <strong>8.4</strong>.</li>
            <li>Median = 13.5 (average of 6th & 7th values). MD = 28/12 ≈ <strong>2.33</strong>.</li>
            <li>Median = 47.5. MD = 70/10 = <strong>7</strong>.</li>
            <li>N = 25, x̄ = 350/25 = 14. MD = (63+16+6+18+55)/25 = 158/25 = <strong>6.32</strong>.</li>
            <li>N = 80, x̄ = 4000/80 = 50. MD = (160+480+0+320+320)/80 = 1280/80 = <strong>16</strong>.</li>
            <li>N = 26, median = 7. MD = (0+0+4+6+10+48)/26 = 68/26 ≈ <strong>2.62</strong>.</li>
            <li>N = 29, median = 30. MD = (45+45+18+0+40)/29 = 148/29 ≈ <strong>5.10</strong>.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable id="h-ex-13-2" title="Exercise 13.2">
        <ol>
          <li>Find the mean and variance for the data: 6, 7, 10, 12, 13, 4, 8, 12.</li>
          <li>Find the mean and variance for the first n natural numbers.</li>
          <li>Find the mean and variance for the first 10 multiples of 3.</li>
          <li>Find the mean and variance for: x: 6, 10, 14, 18, 24, 28, 30 | f: 2, 4, 7, 12, 8, 4, 3.</li>
          <li>Find the mean and variance for: x: 92, 93, 97, 98, 102, 104, 109 | f: 3, 2, 3, 2, 6, 3, 3.</li>
          <li>Find the mean and standard deviation using the short-cut method: x: 60, 61, 62, 63, 64, 65, 66, 67, 68 | f: 2, 1, 12, 29, 25, 12, 10, 4, 5.</li>
          <li>Find the mean and variance for the distribution: Classes: 0–30, 30–60, 60–90, 90–120, 120–150, 150–180, 180–210 | Frequencies: 2, 3, 5, 10, 3, 5, 2.</li>
          <li>Find the mean and variance for the distribution: Classes: 0–10, 10–20, 20–30, 30–40, 40–50 | Frequencies: 5, 8, 15, 16, 6.</li>
          <li>Find the mean, variance and standard deviation using the short-cut method for heights (in cm): 70–75, 75–80, 80–85, 85–90, 90–95, 95–100, 100–105, 105–110, 110–115 with frequencies 3, 4, 7, 7, 15, 9, 6, 6, 3.</li>
          <li>The diameters of circles (in mm): 33–36, 37–40, 41–44, 45–48, 49–52 with frequencies 15, 17, 21, 22, 25. Calculate the SD and mean diameter. <em>Hint:</em> make data continuous as 32.5–36.5, 36.5–40.5, 40.5–44.5, 44.5–48.5, 48.5–52.5.</li>
        </ol>
        <Expandable title="Answer Key — Exercise 13.2">
          <ol>
            <li>x̄ = 72/8 = 9. Variance = 74/8 = <strong>9.25</strong>.</li>
            <li>Mean = (n+1)/2; Variance = (n²−1)/12.</li>
            <li>First 10 multiples of 3: 3, 6, …, 30. Mean = 16.5; Variance = <strong>74.25</strong>.</li>
            <li>N = 40. x̄ = 760/40 = 19. σ² = 16176/40 − 19² = 404.4 − 361 = <strong>43.4</strong>.</li>
            <li>N = 22. x̄ = 2200/22 = 100. Variance = <strong>29.09</strong>.</li>
            <li>x̄ = 64. σ² = <strong>2.86</strong>, σ ≈ 1.69.</li>
            <li>Midpoints: 15, 45, …, 195. x̄ = 107. σ² = <strong>2276</strong>.</li>
            <li>Midpoints: 5, 15, …, 45. x̄ = 27. σ² = <strong>132</strong>.</li>
            <li>x̄ = 93. σ² ≈ <strong>105.58</strong>, σ ≈ 10.28.</li>
            <li>Continuous classes: 32.5–36.5, … x̄ = <strong>43.5 mm</strong>, σ ≈ <strong>5.55 mm</strong>.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable title="Examples 15 to 18 — Miscellaneous Examples (NCERT)">
        <ProblemSolution problemNumber="Example 15">
          <ProblemSolution.Problem>
            The variance of 20 observations is 5. If each observation is multiplied by 2, find the new variance.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Key fact", description: "When every observation is multiplied by k, the variance is multiplied by k²." },
                { label: "Apply", description: "New variance = k² × old variance = 2² × 5 = 4 × 5 = <strong>20</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 16">
          <ProblemSolution.Problem>
            The mean of 5 observations is 4.4 and the variance is 8.24. If three of the observations are 1, 2 and 6, find the other two.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Sum from mean", description: "Total = 5 × 4.4 = 22. Already known: 1+2+6 = 9, so the other two satisfy x + y = 13." },
                { label: "Variance equation", description: "Σ(xᵢ)² = n(σ² + x̄²) = 5(8.24 + 19.36) = 138. Known squares: 1+4+36 = 41, so x² + y² = 97." },
                { label: "Solve", description: "(x+y)² = x² + y² + 2xy → 169 = 97 + 2xy → 2xy = 72. Then (x−y)² = 97 − 72 = 25 → x − y = ±5." },
                { label: "Answer", description: "With x + y = 13 and x − y = ±5, the two observations are <strong>4 and 9</strong>." },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 17">
          <ProblemSolution.Problem>
            If each observation x₁, x₂, …, xₙ is increased by a (positive or negative), show that the variance remains unchanged.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "New values", description: "yᵢ = xᵢ + a and the new mean ȳ = x̄ + a." },
                { label: "Deviations cancel", description: "yᵢ − ȳ = (xᵢ + a) − (x̄ + a) = xᵢ − x̄ — the constant a drops out of every deviation." },
                { label: "Conclusion", description: "σᵧ² = (1/n)Σ(yᵢ − ȳ)² = (1/n)Σ(xᵢ − x̄)² = σₓ², so <strong>variance is unchanged</strong>." },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 18">
          <ProblemSolution.Problem>
            The mean and SD of 100 observations were calculated as 40 and 5.1 by a student who took 50 instead of 40 for one observation. Find the correct mean and SD.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Correct sum", description: "Incorrect sum = 100 × 40 = 4000. Correct sum = 4000 − 50 + 40 = 3990. Correct mean = 3990/100 = <strong>39.9</strong>" },
                { label: "Incorrect Σx²", description: "σ² = Σx²/n − x̄² → 26.01 = Σx²/100 − 1600 → Σx² = 100(26.01 + 1600) = 162601" },
                { label: "Correct Σx²", description: "= 162601 − 50² + 40² = 162601 − 2500 + 1600 = 161701" },
                { label: "Correct SD", description: "σ² = 161701/100 − (39.9)² = 1617.01 − 1592.01 = 25 → σ = <strong>5</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable id="h-misc-ex-13" title="Miscellaneous Exercise on Chapter 13">
        <ol>
          <li>The mean and variance of eight observations are 9 and 9.25, respectively. If six of the observations are 6, 7, 10, 12, 12 and 13, find the remaining two.</li>
          <li>The mean and variance of 7 observations are 8 and 16, respectively. If five of the observations are 2, 4, 10, 12 and 14, find the remaining two.</li>
          <li>The mean and standard deviation of six observations are 8 and 4, respectively. If each observation is multiplied by 3, find the new mean and new standard deviation.</li>
          <li>Given that x̄ is the mean and σ² the variance of n observations x₁, x₂, …, xₙ, prove that the mean and variance of ax₁, ax₂, …, axₙ are ax̄ and a²σ² respectively (a ≠ 0).</li>
          <li>The mean and standard deviation of 20 observations are found to be 10 and 2. On rechecking, an observation 8 was found incorrect. Calculate the correct mean and SD in each case: (i) if the wrong item is omitted, (ii) if it is replaced by 12.</li>
          <li>The mean and SD of a group of 100 observations were found to be 20 and 3. Later, three observations were found incorrect, recorded as 21, 21 and 18. Find the mean and SD if the incorrect observations are omitted.</li>
        </ol>
        <Expandable title="Answer Key — Miscellaneous Exercise">
          <ol>
            <li>Total sum = 72. Known sum = 60, so the two numbers satisfy a + b = 12 and a² + b² = 80 → ab = 32. They are <strong>4 and 8</strong>.</li>
            <li>Total sum = 56. Known sum = 42 → a + b = 14, a² + b² = 100 → ab = 48. They are <strong>6 and 8</strong>.</li>
            <li>New mean = 3 × 8 = <strong>24</strong>. New SD = 3 × 4 = <strong>12</strong>.</li>
            <li>Mean of {`{axᵢ}`} = a·x̄. Variance = (1/n)Σ(axᵢ − ax̄)² = a²·(1/n)Σ(xᵢ − x̄)² = <strong>a²σ²</strong>.</li>
            <li>(i) Omitted: correct sum = 192, n = 19, mean ≈ 10.11, σ² ≈ 3.99, σ ≈ 2.00. (ii) Replaced by 12: sum = 204, mean = 10.2, σ² = 3.96, σ ≈ 1.99.</li>
            <li>Correct sum = 2000 − 60 = 1940, n = 97, mean = <strong>20</strong>. σ² = 39694/97 − (1940/97)² ≈ 9.22, σ ≈ <strong>3.04</strong>.</li>
          </ol>
        </Expandable>
      </Expandable>
    </>
  );
}
