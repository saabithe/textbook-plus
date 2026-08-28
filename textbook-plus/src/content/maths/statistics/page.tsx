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
      <Callout type="note" title="Mean vs Median — the two &ldquo;centres&rdquo; of data">
        To talk about how spread out data is, we first need a reference point. Two summaries describe the
        <strong>centre</strong> of a dataset:
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <strong>Mean (arithmetic mean)</strong> x̄ = (x₁ + x₂ + ⋯ + xₙ)/n — the <strong>balance point</strong> of the data,
            where every value contributes equally.
          </li>
          <li>
            <strong>Median</strong> M — the <strong>middle value</strong> when the data is arranged in ascending order.
            If n is odd, M is the middle value; if n is even, M is the average of the two middle values. Unlike the mean,
            the median resists extreme outliers.
          </li>
        </ul>
        This chapter is about <Highlight>measures of dispersion</Highlight> — how far the values spread out around the mean or median.
      </Callout>

      <TableCard
        headers={["Measure of Central Tendency", "Measure of Dispersion"]}
        rows={[
          { cells: ["Mean (x̄) — the balance point, Σxᵢ/n", "Mean deviation (M.D.) — average absolute distance from a centre"] },
          { cells: ["Median (M) — middle value of sorted data", "Standard deviation (σ) — typical distance of values from the mean"] },
          { cells: ["Mode — the most frequent value", "Variance (σ²) — average of the squared distances from the mean"] },
        ]}
        caption="Measures of central tendency say where the data sits; measures of dispersion (this chapter) say how far it spreads."
      />

      <h2 id="h-mean-deviation">13.2 Mean Deviation</h2>
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

      <Expandable title="Example 1 — Mean Deviation (Ungrouped)">
        <ProblemSolution problemNumber="Example 1">
          <ProblemSolution.Problem>
            Find the mean deviation about the mean for: 4, 7, 8, 9, 10, 12, 13, 17.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <TableCard
              headers={["xᵢ", "xᵢ − x̄", "|xᵢ − x̄|"]}
              rows={[
                { cells: ["4", "−6", "6"] },
                { cells: ["7", "−3", "3"] },
                { cells: ["8", "−2", "2"] },
                { cells: ["9", "−1", "1"] },
                { cells: ["10", "0", "0"] },
                { cells: ["12", "2", "2"] },
                { cells: ["13", "3", "3"] },
                { cells: ["17", "7", "7"] },
                { cells: ["Total", "", "Σ = 24"] },
              ]}
              caption="Each row is one observation — the numerator of M.D. is the total of the last column."
            />
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = (4+7+8+9+10+12+13+17)/8 = 80/8 = 10" },
                { label: "Sum the last column", description: "Σ|xᵢ − x̄| = 24" },
                { label: "Mean deviation", description: "M.D.(x̄) = 24/8 = <strong>3</strong>" },
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

      <Expandable title="Examples 2 and 3 — Mean Deviation about Median">
        <ProblemSolution problemNumber="Example 2">
          <ProblemSolution.Problem>
            Find the mean deviation about the median for: 13, 17, 16, 14, 11, 13, 10, 16, 11, 18, 12, 17.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <TableCard
              headers={["xᵢ (sorted)", "xᵢ − M", "|xᵢ − M|"]}
              rows={[
                { cells: ["10", "−3.5", "3.5"] },
                { cells: ["11", "−2.5", "2.5"] },
                { cells: ["11", "−2.5", "2.5"] },
                { cells: ["12", "−1.5", "1.5"] },
                { cells: ["13", "−0.5", "0.5"] },
                { cells: ["13", "−0.5", "0.5"] },
                { cells: ["14", "0.5", "0.5"] },
                { cells: ["16", "2.5", "2.5"] },
                { cells: ["16", "2.5", "2.5"] },
                { cells: ["17", "3.5", "3.5"] },
                { cells: ["17", "3.5", "3.5"] },
                { cells: ["18", "4.5", "4.5"] },
                { cells: ["Total", "", "Σ = 28"] },
              ]}
              caption="Sort the list first — the median is the centre of the sorted values."
            />
            <Stepper
              steps={[
                { label: "Median", description: "n = 12 (even), so M = (6th + 7th sorted value)/2 = (13 + 14)/2 = 13.5" },
                { label: "Sum the last column", description: "Σ|xᵢ − M| = 28" },
                { label: "Mean deviation", description: "M.D.(M) = 28/12 = <strong>2.33</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 3">
          <ProblemSolution.Problem>
            Calculate the mean deviation about median for the following data:
            <br />
            Class: 0–10, 10–20, 20–30, 30–40, 40–50, 50–60 &nbsp; | &nbsp; Frequency: 6, 7, 15, 16, 4, 2
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <TableCard
              headers={["Class", "xᵢ (mid)", "fᵢ", "c.f.", "|xᵢ − M|", "fᵢ|xᵢ − M|"]}
              rows={[
                { cells: ["0–10", "5", "6", "6", "23", "138"] },
                { cells: ["10–20", "15", "7", "13", "13", "91"] },
                { cells: ["20–30", "25", "15", "28", "3", "45"] },
                { cells: ["30–40", "35", "16", "44", "7", "112"] },
                { cells: ["40–50", "45", "4", "48", "17", "68"] },
                { cells: ["50–60", "55", "2", "50", "27", "54"] },
                { cells: ["Total", "", "N = 50", "", "", "Σ = 508"] },
              ]}
              caption="Each class-row feeds its midpoint and |xᵢ − M| into the final column — errors stay localised to one row."
            />
            <Stepper
              steps={[
                { label: "Median", description: "N/2 = 25 falls in class 20–30 (c.f. crosses 25). M = 20 + (25 − 13)/15 × 10 = 20 + 8 = 28" },
                { label: "Sum the last column", description: "Σfᵢ|xᵢ − M| = 508" },
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

      <Expandable title="Examples 4 and 5 — Mean Deviation (Discrete &amp; Continuous Frequency)">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            Find the mean deviation about the mean for the discrete frequency distribution:
            <br />
            x: 2, 5, 7, 10, 12 &nbsp; | &nbsp; f: 5, 8, 12, 10, 5
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <TableCard
              headers={["xᵢ", "fᵢ", "fᵢxᵢ", "|xᵢ − x̄|", "fᵢ|xᵢ − x̄|"]}
              rows={[
                { cells: ["2", "5", "10", "5.35", "26.75"] },
                { cells: ["5", "8", "40", "2.35", "18.80"] },
                { cells: ["7", "12", "84", "0.35", "4.20"] },
                { cells: ["10", "10", "100", "2.65", "26.50"] },
                { cells: ["12", "5", "60", "4.65", "23.25"] },
                { cells: ["Total", "N = 40", "Σ = 294", "", "Σ = 99.50"] },
              ]}
              caption="Three columns build the mean, then the last two columns build M.D. — totals at the bottom drive both answers."
            />
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = 294/40 = 7.35 (from the fᵢxᵢ column total)" },
                { label: "Sum the last column", description: "Σfᵢ|xᵢ − x̄| = 99.50" },
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

      <Expandable title="Example 5 — Mean Deviation (Continuous Frequency)">
        <ProblemSolution problemNumber="Example 5">
          <ProblemSolution.Problem>
            Find the mean deviation about the mean for:
            <br />
            Class: 0–10, 10–20, 20–30, 30–40, 40–50 &nbsp; | &nbsp; f: 4, 7, 12, 8, 6
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <TableCard
              headers={["Class", "xᵢ (mid)", "fᵢ", "fᵢxᵢ", "|xᵢ − x̄|", "fᵢ|xᵢ − x̄|"]}
              rows={[
                { cells: ["0–10", "5", "4", "20", "21.35", "85.40"] },
                { cells: ["10–20", "15", "7", "105", "11.35", "79.45"] },
                { cells: ["20–30", "25", "12", "300", "1.35", "16.20"] },
                { cells: ["30–40", "35", "8", "280", "8.65", "69.20"] },
                { cells: ["40–50", "45", "6", "270", "18.65", "111.90"] },
                { cells: ["Total", "", "N = 37", "Σ = 975", "", "Σ = 362.15"] },
              ]}
              caption="Convert classes to midpoints, then follow the same column layout as the discrete-frequency case."
            />
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = 975/37 = 26.35 (midpoint column, from the fᵢxᵢ total)" },
                { label: "Sum the last column", description: "Σfᵢ|xᵢ − x̄| = 362.15" },
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

      <h2 id="h-variance">13.3 Variance and Standard Deviation</h2>
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

      <Expandable title="Examples 6 and 7 — Ungrouped Variance">
        <ProblemSolution problemNumber="Example 6">
          <ProblemSolution.Problem>
            Find the variance and standard deviation of: 6, 8, 10, 12, 14.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <TableCard
              headers={["xᵢ", "xᵢ − x̄", "(xᵢ − x̄)²"]}
              rows={[
                { cells: ["6", "−4", "16"] },
                { cells: ["8", "−2", "4"] },
                { cells: ["10", "0", "0"] },
                { cells: ["12", "2", "4"] },
                { cells: ["14", "4", "16"] },
                { cells: ["Total", "", "Σ = 40"] },
              ]}
              caption="Squaring the middle column kills the negative signs — the variance numerator is the final column total."
            />
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = 50/5 = 10" },
                { label: "Sum the last column", description: "Σ(xᵢ − x̄)² = 40" },
                { label: "Variance", description: "σ² = 40/5 = <strong>8</strong>" },
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
            <TableCard
              headers={["xᵢ", "xᵢ²"]}
              rows={[
                { cells: ["1", "1"] },
                { cells: ["2", "4"] },
                { cells: ["3", "9"] },
                { cells: ["4", "16"] },
                { cells: ["5", "25"] },
                { cells: ["6", "36"] },
                { cells: ["7", "49"] },
                { cells: ["8", "64"] },
                { cells: ["9", "81"] },
                { cells: ["10", "100"] },
                { cells: ["Total", "Σxᵢ = 55", "Σxᵢ² = 385"] },
              ]}
              caption="For an arithmetic progression, the variance identity σ² = Σxᵢ²/n − x̄² avoids 10 separate squared deviations."
            />
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = 55/10 = 5.5 — since 1, 2, …, 10 is an arithmetic sequence, this is also just (first + last)/2 = (1 + 10)/2" },
                { label: "Variance by identity", description: "σ² = Σxᵢ²/n − x̄² = 385/10 − 5.5² = 38.5 − 30.25 = <strong>8.25</strong>" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Practice — Variance of an Arithmetic Sequence (3, 6, …, 99)">
        <ProblemSolution problemNumber="Practice">
          <ProblemSolution.Problem>
            Consider the sequence 3, 6, 9, 12, …, 99. Find the variance of the sequence.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Callout type="tip" title="Spot the pattern first">
              Every term is a multiple of 3: 3, 6, 9, …, 99 = 3 × (1, 2, 3, …, 33). So this is the
              <strong> first 33 natural numbers scaled by a factor of 3 </strong> — no need to write out 33 rows.
            </Callout>
            <Stepper
              steps={[
                { label: "Count the terms", description: "3n = 99 → n = <strong>33</strong> terms" },
                { label: "Mean", description: "Arithmetic sequence: x̄ = (first + last)/2 = (3 + 99)/2 = <strong>51</strong>. (Also: mean of 1..33 is 17, ×3 = 51.)" },
                { label: "Variance of 1..33", description: "From Ex 13.2 Q2, the first m natural numbers have variance (m² − 1)/12. For m = 33: (1089 − 1)/12 = 1088/12 = <strong>272/3</strong>" },
                { label: "Scale by k = 3", description: "Multiplying every observation by k multiplies variance by k²: σ² = 3² × (272/3) = 9 × (272/3) = <strong>816</strong>" },
                { label: "Standard deviation (optional)", description: "σ = √816 = <strong>4√51 ≈ 28.57</strong>" },
              ]}
            />
            <Callout type="note" title="Verify with the identity σ² = Σxᵢ²/n − x̄²">
              Σxᵢ = 3(1+2+…+33) = 3 × 561 = 1683; Σxᵢ² = 9(1²+2²+…+33²) = 9 × 12529 = 112761.
              σ² = 112761/33 − 51² = 3417 − 2601 = <strong>816</strong> ✓
            </Callout>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Derivation — Standard Deviation of the First n Natural Numbers">
        <ProblemSolution problemNumber="Derivation">
          <ProblemSolution.Problem>
            Find the standard deviation of the first n natural numbers: 1, 2, 3, …, n.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Start from the definition", description: "SD = √Variance — so find the variance first, then take the square root." },
                { label: "Mean of the sequence", description: "1, 2, …, n is an arithmetic sequence, so x̄ = (first + last)/2 = (1 + n)/2 = <strong>(n + 1)/2</strong>" },
                { label: "Variance by the identity", description: "σ² = Σxᵢ²/n − x̄². Also 1² + 2² + ⋯ + n² = n(n+1)(2n+1)/6, so Σxᵢ²/n = (n+1)(2n+1)/6" },
                { label: "Subtract the mean term", description: "σ² = (n+1)(2n+1)/6 − ((n+1)/2)² = [2(n+1)(2n+1) − 3(n+1)²]/12 = (n+1)[(4n+2) − (3n+3)]/12 = (n+1)(n−1)/12 = <strong>(n² − 1)/12</strong>" },
                { label: "Take the square root", description: "SD = √σ² = √((n² − 1)/12)" },
              ]}
            />
            <KeyPoint title="Result to memorise — the (n+1)/2 and (n²−1)/12 pair">
              <FormulaBlock latex="\text{Mean of } 1, 2, \dots, n \ = \frac{n+1}{2}" />
              <FormulaBlock latex="\text{SD of } 1, 2, \dots, n \ = \sqrt{\frac{n^2 - 1}{12}}" />
              <p>
                The same (n² − 1)/12 appeared in the 3, 6, …, 99 practice problem (where the factor 3² scaled it to 816),
                and it answers Ex 13.2 Q2 instantly. For example, n = 10 gives SD = √(99/12) ≈ 2.87 — the root of the 8.25
                from Example 7.
              </p>
            </KeyPoint>
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

      <Expandable title="Example 8 — Discrete Frequency Variance">
        <ProblemSolution problemNumber="Example 8">
          <ProblemSolution.Problem>
            Find the variance for: x: 3, 5, 7, 9, 11 &nbsp; | &nbsp; f: 4, 6, 8, 6, 4
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <TableCard
              headers={["xᵢ", "fᵢ", "fᵢxᵢ", "xᵢ − x̄", "(xᵢ − x̄)²", "fᵢ(xᵢ − x̄)²"]}
              rows={[
                { cells: ["3", "4", "12", "−4", "16", "64"] },
                { cells: ["5", "6", "30", "−2", "4", "24"] },
                { cells: ["7", "8", "56", "0", "0", "0"] },
                { cells: ["9", "6", "54", "2", "4", "24"] },
                { cells: ["11", "4", "44", "4", "16", "64"] },
                { cells: ["Total", "N = 28", "Σ = 196", "", "", "Σ = 176"] },
              ]}
              caption="Weight each squared deviation by its frequency — the last column total is the full Σfᵢ(xᵢ − x̄)²."
            />
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = 196/28 = 7 (from the fᵢxᵢ column total)" },
                { label: "Sum the last column", description: "Σfᵢ(xᵢ − x̄)² = 176" },
                { label: "Variance", description: "σ² = 176/28 = <strong>6.286</strong> (approx)" },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Practice — Inverse: Find A When the Variance is Given (x = A, 2A, …, 6A)">
        <ProblemSolution problemNumber="Practice">
          <ProblemSolution.Problem>
            The frequency distribution given below has a variance of 160 — where A is a positive integer.
            <br />
            x: A, 2A, 3A, 4A, 5A, 6A &nbsp; | &nbsp; f: 2, 1, 1, 1, 1, 1
            <br />
            Determine the value of A.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Callout type="tip" title="Pull the common factor A out first">
              Every value is a multiple of A, so the data is just A × (1, 2, 3, 4, 5, 6). Work out the variance of the
              <strong> base table (A = 1)</strong> — the real variance is then A² times that number.
            </Callout>
            <TableCard
              headers={["xᵢ (base, A = 1)", "fᵢ", "fᵢxᵢ", "xᵢ²", "fᵢxᵢ²"]}
              rows={[
                { cells: ["1", "2", "2", "1", "2"] },
                { cells: ["2", "1", "2", "4", "4"] },
                { cells: ["3", "1", "3", "9", "9"] },
                { cells: ["4", "1", "4", "16", "16"] },
                { cells: ["5", "1", "5", "25", "25"] },
                { cells: ["6", "1", "6", "36", "36"] },
                { cells: ["Total", "N = 7", "Σ = 22", "", "Σ = 92"] },
              ]}
              caption="The identity σ² = Σfᵢxᵢ²/N − x̄² needs only the two column totals."
            />
            <Stepper
              steps={[
                { label: "Base variance (A = 1)", description: "x̄ = 22/7. σ₁² = 92/7 − (22/7)² = 644/49 − 484/49 = <strong>160/49</strong>" },
                { label: "Scale by A", description: "Multiplying every value by A multiplies variance by A²: σ² = A² × (160/49)" },
                { label: "Equate to 160", description: "A² × 160/49 = 160 → A² = 49" },
                { label: "A is a positive integer", description: "A = √49 = <strong>7</strong>" },
              ]}
            />
            <Callout type="note" title="Verify with A = 7">
              x: 7, 14, 21, 28, 35, 42 &nbsp; | &nbsp; f: 2, 1, 1, 1, 1, 1.
              Σfᵢxᵢ = 14 + 14 + 21 + 28 + 35 + 42 = 154, so x̄ = 22.
              Σfᵢxᵢ² = 7² × 92 = 4508. σ² = 4508/7 − 22² = 644 − 484 = <strong>160 ✓</strong>
            </Callout>
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

      <Expandable title="Example 9 — Continuous Frequency Variance">
        <ProblemSolution problemNumber="Example 9">
          <ProblemSolution.Problem>
            Find σ² and σ for:
            <br />
            Class: 0–10, 10–20, 20–30, 30–40, 40–50 &nbsp; | &nbsp; f: 2, 5, 8, 4, 1
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <TableCard
              headers={["Class", "xᵢ (mid)", "fᵢ", "fᵢxᵢ", "(xᵢ − x̄)²", "fᵢ(xᵢ − x̄)²"]}
              rows={[
                { cells: ["0–10", "5", "2", "10", "342.25", "684.50"] },
                { cells: ["10–20", "15", "5", "75", "72.25", "361.25"] },
                { cells: ["20–30", "25", "8", "200", "2.25", "18"] },
                { cells: ["30–40", "35", "4", "140", "132.25", "529"] },
                { cells: ["40–50", "45", "1", "45", "462.25", "462.25"] },
                { cells: ["Total", "", "N = 20", "Σ = 470", "", "Σ = 2055"] },
              ]}
              caption="Same layout as Example 8 — only the first column changes from values to class intervals."
            />
            <Stepper
              steps={[
                { label: "Mean", description: "x̄ = 470/20 = 23.5 (midpoint column, from the fᵢxᵢ total)" },
                { label: "Sum the last column", description: "Σfᵢ(xᵢ − x̄)² = 2055" },
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
            <TableCard
              headers={["xᵢ", "fᵢ", "dᵢ = xᵢ − 10", "fᵢdᵢ", "fᵢdᵢ²"]}
              rows={[
                { cells: ["5", "2", "−5", "−10", "50"] },
                { cells: ["10", "4", "0", "0", "0"] },
                { cells: ["15", "7", "5", "35", "175"] },
                { cells: ["20", "6", "10", "60", "600"] },
                { cells: ["25", "3", "15", "45", "675"] },
                { cells: ["Total", "N = 22", "", "Σ = 130", "Σ = 1500"] },
              ]}
              caption="Coding the values as dᵢ = xᵢ − a keeps the arithmetic small; the variance formula needs only the two column totals."
            />
            <Stepper
              steps={[
                { label: "Variance from the totals", description: "σ² = Σfᵢdᵢ²/N − (Σfᵢdᵢ/N)² = 1500/22 − (130/22)²" },
                { label: "Simplify", description: "= 68.182 − 34.917 ≈ <strong>33.27</strong>" },
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
        <Callout type="tip" title="Arithmetic sequence: mean = (first + last) / 2">
          When the data is an arithmetic sequence (equally spaced, like the first n natural numbers or the first 10 multiples of 3), the mean is just
          x̄ = (first + last)/2. For 1, 2, …, 10 that gives x̄ = (1 + 10)/2 = 5.5 — no summing needed. Combine with the identity
          σ² = Σxᵢ²/n − x̄² and the variance drops out almost instantly.
        </Callout>
        <Callout type="tip" title="σ vs σ² — know when to use which">
          Standard deviation σ has the same units as the data (e.g., cm, kg) — use it for interpretation. Variance σ² is easier for algebraic manipulation — use it in proofs and further calculations.
        </Callout>
      </SpeedTricks>

      <Callout type="warning" title="Hard-Level Tips: Statistics Traps">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Mean deviation ≠ average deviation:</strong> M.D. uses absolute values of deviations from the <strong>mean</strong>, not from an arbitrary point.</li>
          <li><strong>Variance: population vs sample:</strong> NCERT Class 11 uses N (not N−1) in the denominator. The N−1 correction (Bessel&apos;s correction) appears in later statistics courses.</li>
          <li><strong>Step-deviation: h is the class width,</strong> not the number of classes. For classes 0–10, 10–20, …, h = 10. Don&apos;t confuse with the number of classes.</li>
          <li><strong>Midpoint approximation:</strong> For continuous classes, the midpoint is used as a representative value. This introduces a small error but is standard practice.</li>
          <li><strong>Variance of constant data = 0:</strong> If all values are the same, every deviation is zero, so σ² = σ = 0. This makes sense — there is no spread.</li>
          <li><strong>Adding a constant:</strong> If every observation is increased by c, the mean increases by c but <Highlight>variance and standard deviation remain unchanged</Highlight>.</li>
          <li><strong>Multiplying by a constant:</strong> If every observation is multiplied by k, the variance is multiplied by k² and the standard deviation by |k|.</li>
        </ul>
      </Callout>

      <h2 id="h-formula-map">13.4 Formula Map — Which Formula to Use When?</h2>
      <Callout type="important" title="Read the words, not the numbers">
        Every question in this chapter is a keyword decoder: the wording tells you <strong>which formula</strong> to reach
        for before you compute anything. Ask yourself: does the question want (a) an average absolute deviation
        (mean deviation about the mean or the median), or (b) a variance / standard deviation?
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
              <td colSpan={3} className="p-2 font-semibold bg-muted/40 text-[0.8rem]">Mean Deviation — average absolute distance from a centre</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;M.D. about the mean&rdquo; for a list of values</td>
              <td className="p-2"><Formula>{`\text{M.D.}(\bar{x}) = \frac{\sum_{i=1}^{n} |x_i - \bar{x}|}{n}`}</Formula></td>
              <td className="p-2">Example 1</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;M.D. about the median&rdquo;, or data has outliers</td>
              <td className="p-2"><Formula>{`\text{M.D.}(M) = \frac{\sum_{i=1}^{n} |x_i - M|}{n}`}</Formula></td>
              <td className="p-2">Example 2</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Data given as x-values with frequencies (no classes)</td>
              <td className="p-2"><Formula>{`\text{M.D.}(\bar{x}) = \frac{\sum_{i=1}^{k} f_i |x_i - \bar{x}|}{N}, \quad N = \sum f_i`}</Formula></td>
              <td className="p-2">Example 4</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Data given as class intervals (0–10, 10–20, …)</td>
              <td className="p-2">Convert to <strong>midpoints</strong> xᵢ, then <Formula>{`\text{M.D.}(\bar{x}) = \frac{\sum f_i |x_i - \bar{x}|}{N}`}</Formula></td>
              <td className="p-2">Examples 3, 5</td>
            </tr>

            <tr className="border-b border-[var(--border)]/40">
              <td colSpan={3} className="p-2 font-semibold bg-muted/40 text-[0.8rem]">Variance &amp; Standard Deviation — squared deviations</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;Variance&rdquo; / &ldquo;standard deviation&rdquo; of a list</td>
              <td className="p-2"><Formula>{`\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2`}</Formula></td>
              <td className="p-2">Examples 6–7</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Values with frequencies (no classes)</td>
              <td className="p-2"><Formula>{`\sigma^2 = \frac{1}{N} \sum_{i=1}^{k} f_i (x_i - \bar{x})^2`}</Formula></td>
              <td className="p-2">Example 8</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Class intervals (continuous)</td>
              <td className="p-2">Midpoints xᵢ, then <Formula>{`\sigma^2 = \frac{1}{N} \sum f_i (x_i - \bar{x})^2`}</Formula></td>
              <td className="p-2">Example 9</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;Short-cut / step-deviation method&rdquo;, or values are large with a messy mean</td>
              <td className="p-2"><Formula>{`\sigma^2 = h^2 \left[ \frac{1}{N} \sum f_i u_i^2 - \left( \frac{1}{N} \sum f_i u_i \right)^2 \right]`}</Formula></td>
              <td className="p-2">Examples 10–11</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">σ² and x̄ are given; asks for <strong>missing / wrong observations</strong></td>
              <td className="p-2"><Formula>{`\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2 \ \Rightarrow \ \sum x_i^2 = n(\sigma^2 + \bar{x}^2)`}</Formula></td>
              <td className="p-2">Examples 13, 15</td>
            </tr>

            <tr className="border-b border-[var(--border)]/40">
              <td colSpan={3} className="p-2 font-semibold bg-muted/40 text-[0.8rem]">Effect of changing the data — multiplying by k or adding c</td>
            </tr>
            <tr>
              <td className="p-2">Each observation changed: &ldquo;multiplied by k&rdquo; or &ldquo;increased by c&rdquo;</td>
              <td className="p-2"><Formula>{`\times k \Rightarrow \sigma \to |k|\sigma, \ \sigma^2 \to k^2\sigma^2`}</Formula> &nbsp; <Formula>{`+ c \Rightarrow`}</Formula> σ unchanged</td>
              <td className="p-2">Examples 12, 14</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="rounded-md border border-amber-500/30 bg-amber-500/5 p-3">
          <p className="font-semibold text-amber-600 dark:text-amber-400 text-sm mb-1">Mean Deviation</p>
          <p className="text-xs text-muted-foreground"><strong>Grab it when:</strong> question literally says &ldquo;mean deviation&rdquo; (about mean or median). Choose median when there are outliers.</p>
        </div>
        <div className="rounded-md border border-blue-500/30 bg-blue-500/5 p-3">
          <p className="font-semibold text-blue-600 dark:text-blue-400 text-sm mb-1">Variance &amp; SD</p>
          <p className="text-xs text-muted-foreground"><strong>Grab it when:</strong> &ldquo;variance&rdquo;, &ldquo;standard deviation&rdquo;, or you need algebra-friendly spread. σ has the data&apos;s units.</p>
        </div>
      </div>

      <KeyPoint title="The two working identities for missing / wrong observation problems">
        Almost every &ldquo;find the missing observation&rdquo; / &ldquo;one observation was wrong&rdquo; question is solved by
        (<Formula>{`\sum x_i = n\bar{x}`}</Formula>) and (<Formula>{`\sum x_i^2 = n(\sigma^2 + \bar{x}^2)`}</Formula>).
        Recover the totals that got corrupted, fix them, and recompute the mean and variance directly — no need to solve systems by hand (see Examples 13 and 15, Misc Q1–2, 5–6).
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

      <Expandable title="Examples 12 to 15 — Miscellaneous Examples (NCERT)">
        <ProblemSolution problemNumber="Example 12">
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

        <ProblemSolution problemNumber="Example 13">
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

        <ProblemSolution problemNumber="Example 14">
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

        <ProblemSolution problemNumber="Example 15">
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
