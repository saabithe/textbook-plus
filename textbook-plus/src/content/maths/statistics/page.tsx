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

      <h3>1. Ungrouped Data</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <FormulaCard>
          <p className="font-semibold mb-2">Mean Deviation about Mean</p>
          <FormulaBlock latex={String.raw`\text{M.D.}(\bar{x}) = \frac{\sum |x_i - \bar{x}|}{n}`} />
          <p className="text-sm text-muted-foreground mt-2">where x̄ = (1/n) Σxᵢ is the arithmetic mean.</p>
          <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> a raw list of values says &ldquo;mean deviation about the mean&rdquo;.</p>
        </FormulaCard>
        <FormulaCard>
          <p className="font-semibold mb-2">Mean Deviation about Median</p>
          <FormulaBlock latex={String.raw`\text{M.D.}(M) = \frac{\sum |x_i - M|}{n}`} />
          <p className="text-sm text-muted-foreground mt-2">where M is the median — the <strong>middle</strong> value of the sorted list.</p>
          <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> a raw list says &ldquo;mean deviation about the median&rdquo;, or the data has outliers — the median is robust.</p>
        </FormulaCard>
      </div>

      <Expandable title="Example 1 — M.D. about the Mean (Ungrouped)">
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
                { label: "Mean", description: <Formula>{String.raw`\bar{x} = \frac{4+7+8+9+10+12+13+17}{8} = \frac{80}{8} = 10`}</Formula> },
                { label: "Sum the last column", description: <Formula>{String.raw`\sum |x_i - \bar{x}| = 24`}</Formula> },
                { label: "Mean deviation", description: <Formula>{String.raw`\text{M.D.}(\bar{x}) = \frac{24}{8} = \mathbf{3}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Example 2 — M.D. about the Median (Ungrouped)">
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
                { label: "Median", description: <><Formula>{String.raw`n = 12`}</Formula> (even), so M = (6th + 7th sorted value)/2 = <Formula>{String.raw`\frac{13+14}{2} = 13.5`}</Formula></> },
                { label: "Sum the last column", description: <Formula>{String.raw`\sum |x_i - M| = 28`}</Formula> },
                { label: "Mean deviation", description: <Formula>{String.raw`\text{M.D.}(M) = \frac{28}{12} = \mathbf{2.33}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>2. Grouped Data — Discrete Frequency</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <FormulaCard>
          <p className="font-semibold mb-2">Mean Deviation about Mean (Discrete Frequency)</p>
          <FormulaBlock latex={String.raw`\text{M.D.}(\bar{x}) = \frac{\sum f_i |x_i - \bar{x}|}{n}, \quad n = \sum f_i`} />
          <p className="text-sm text-muted-foreground mt-2">xᵢ are the distinct values, fᵢ their frequencies.</p>
          <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> discrete data given as x-values with frequencies f (no class intervals). Divide by n = Σfᵢ.</p>
        </FormulaCard>
        <FormulaCard>
          <p className="font-semibold mb-2">Mean Deviation about Median (Discrete Frequency)</p>
          <FormulaBlock latex={String.raw`\text{M.D.}(M) = \frac{\sum f_i |x_i - M|}{n}, \quad n = \sum f_i`} />
          <p className="text-sm text-muted-foreground mt-2">Find M from the cumulative frequency — n/2 falls within the value whose c.f. reaches n/2.</p>
          <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> frequency data (x and f together) asks for deviation about the median.</p>
        </FormulaCard>
      </div>

      <Expandable title="Example 3 — M.D. about the Mean (Discrete Frequency)">
        <ProblemSolution problemNumber="Example 3">
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
                { cells: ["Total", "n = 40", "Σ = 294", "", "Σ = 99.50"] },
              ]}
              caption="Three columns build the mean, then the last two columns build M.D. — totals at the bottom drive both answers."
            />
            <Stepper
              steps={[
                { label: "Mean", description: <><Formula>{String.raw`\bar{x} = \frac{294}{40} = 7.35`}</Formula> (from the fᵢxᵢ column total)</> },
                { label: "Sum the last column", description: <Formula>{String.raw`\sum f_i\,|x_i - \bar{x}| = 99.50`}</Formula> },
                { label: "Mean deviation", description: <Formula>{String.raw`\text{M.D.}(\bar{x}) = \frac{99.50}{40} = \mathbf{2.4875}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Example 4 — M.D. about the Median (Discrete Frequency)">
        <ProblemSolution problemNumber="Example 4">
          <ProblemSolution.Problem>
            Calculate the mean deviation about the median for:
            <br />
            x: 5, 7, 9, 10, 12, 15 &nbsp; | &nbsp; f: 8, 6, 2, 2, 2, 6
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <TableCard
              headers={["xᵢ", "fᵢ", "c.f.", "|xᵢ − M|", "fᵢ|xᵢ − M|"]}
              rows={[
                { cells: ["5", "8", "8", "2", "16"] },
                { cells: ["7", "6", "14", "0", "0"] },
                { cells: ["9", "2", "16", "2", "4"] },
                { cells: ["10", "2", "18", "3", "6"] },
                { cells: ["12", "2", "20", "5", "10"] },
                { cells: ["15", "6", "26", "8", "48"] },
                { cells: ["Total", "n = 26", "", "", "Σ = 84"] },
              ]}
              caption="The cumulative frequency column isolates the median position; the two right columns build M.D."
            />
            <Stepper
              steps={[
                { label: "Median", description: <><Formula>{String.raw`\frac{n}{2} = 13`}</Formula> falls in x = 7 (c.f. jumps 8 → 14) — the 13th and 14th values are both 7, so <Formula>{String.raw`M = 7`}</Formula></> },
                { label: "Sum the last column", description: <Formula>{String.raw`\sum f_i\,|x_i - M| = 8\cdot 2 + 6\cdot 0 + 2\cdot 2 + 2\cdot 3 + 2\cdot 5 + 6\cdot 8 = 84`}</Formula> },
                { label: "Mean deviation", description: <><Formula>{String.raw`\text{M.D.}(M) = \frac{84}{26} = \frac{42}{13} \approx 3.23`}</Formula> (same data as Exercise 13.1 Q7)</> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>3. Grouped Data — Continuous (Class Intervals)</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Median of Grouped (Continuous) Data — the l + (n/2 − c.f.)/f × h formula</p>
        <FormulaBlock latex={String.raw`M = l + \frac{n/2 - \text{c.f.}}{f} \times h`} />
        <p className="text-sm text-muted-foreground mt-2">l = lower limit of the <strong>median class</strong> (the first class whose cumulative frequency ≥ n/2), f = frequency of the median class, h = class width, c.f. = cumulative frequency of the class <strong>just before</strong> the median class, n = Σfᵢ.</p>
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> data appears as <strong>class intervals (continuous)</strong> and the question asks for the median — most commonly inside &ldquo;mean deviation about the median&rdquo;. <strong>Don&apos;t use for</strong> a raw list (median = middle of the sorted data) or a discrete x-f table (median = the value whose c.f. reaches/exceeds n/2 — no formula needed, read it straight off the table).</p>
      </FormulaCard>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <FormulaCard>
          <p className="font-semibold mb-2">Mean Deviation about Mean (Continuous Frequency)</p>
          <FormulaBlock latex={String.raw`\text{M.D.}(\bar{x}) = \frac{\sum f_i |x_i - \bar{x}|}{n}`} />
          <p className="text-sm text-muted-foreground mt-2">xᵢ = midpoint of the i-th class interval, fᵢ = frequency of that class, n = Σfᵢ.</p>
          <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> data is grouped into class intervals — convert each class to its midpoint first.</p>
        </FormulaCard>
        <FormulaCard>
          <p className="font-semibold mb-2">Mean Deviation about Median (Continuous Frequency)</p>
          <FormulaBlock latex={String.raw`\text{M.D.}(M) = \frac{\sum f_i |x_i - M|}{n}, \quad n = \sum f_i`} />
          <p className="text-sm text-muted-foreground mt-2">Locate the median class from cumulative frequency, then M = l + (n/2 − c.f.) × h/f via the median formula.</p>
          <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> class-interval data asks for deviation about the median — compute M from the median class first.</p>
        </FormulaCard>
      </div>

      <Expandable title="Example 5 — M.D. about the Mean (Continuous Frequency)">
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
                { cells: ["Total", "", "n = 37", "Σ = 975", "", "Σ = 362.15"] },
              ]}
              caption="Convert classes to midpoints, then follow the same column layout as the discrete-frequency case."
            />
            <Stepper
              steps={[
                { label: "Mean", description: <><Formula>{String.raw`\bar{x} = \frac{975}{37} = 26.35`}</Formula> (midpoint column, from the fᵢxᵢ total)</> },
                { label: "Sum the last column", description: <Formula>{String.raw`\sum f_i\,|x_i - \bar{x}| = 362.15`}</Formula> },
                { label: "Mean deviation", description: <Formula>{String.raw`\text{M.D.}(\bar{x}) = \frac{362.15}{37} \approx \mathbf{9.79}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <Expandable title="Example 6 — M.D. about the Median (Continuous Frequency)">
        <ProblemSolution problemNumber="Example 6">
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
                { cells: ["Total", "", "n = 50", "", "", "Σ = 508"] },
              ]}
              caption="Each class-row feeds its midpoint and |xᵢ − M| into the final column — errors stay localised to one row."
            />
            <Stepper
              steps={[
                { label: "Median", description: <><Formula>{String.raw`\frac{n}{2} = 25`}</Formula> falls in class 20–30 (c.f. crosses 25). <Formula>{String.raw`M = 20 + \frac{25-13}{15}\times 10 = 20 + 8 = 28`}</Formula></> },
                { label: "Sum the last column", description: <Formula>{String.raw`\sum f_i\,|x_i - M| = 508`}</Formula> },
                { label: "Mean deviation", description: <Formula>{String.raw`\text{M.D.}(M) = \frac{508}{50} = \mathbf{10.16}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h2 id="h-variance">13.3 Variance and Standard Deviation</h2>

      <h3>Variance — Definition</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Population Variance (σ²)</p>
        <FormulaBlock latex={String.raw`\sigma^2 = \frac{\sum(x_i - \bar{x})^2}{n}`} />
        <p className="text-sm text-muted-foreground mt-2">n = total number of observations. The variance is always ≥ 0.</p>
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> the question asks for variance of a raw list — compute x̄, then average the squared deviations. NCERT Class 11 divides by n (not n−1).</p>
      </FormulaCard>
      <KeyPoint title="Standard Deviation">
        <FormulaBlock latex={String.raw`\sigma = \sqrt{\sigma^2} = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n}}`} />
        <p>Standard deviation has the <strong>same units</strong> as the original data (unlike variance which is in squared units).</p>
      </KeyPoint>

      <h3>Variance for Ungrouped Data</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Ungrouped Variance</p>
        <FormulaBlock latex={String.raw`\sigma^2 = \frac{\sum(x_i - \bar{x})^2}{n}`} />
        <p className="text-sm text-muted-foreground mt-2">Step 1: find x̄. Step 2: compute each (xᵢ − x̄)². Step 3: average them.</p>
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> variance of an ungrouped list, e.g. examples 7–8. Same formula as the definition.</p>
      </FormulaCard>

      <Expandable title="Examples 7 and 8 — Ungrouped Variance">
        <ProblemSolution problemNumber="Example 7">
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
                { label: "Mean", description: <Formula>{String.raw`\bar{x} = \frac{50}{5} = 10`}</Formula> },
                { label: "Sum the last column", description: <Formula>{String.raw`\sum (x_i - \bar{x})^2 = 40`}</Formula> },
                { label: "Variance", description: <Formula>{String.raw`\sigma^2 = \frac{40}{5} = \mathbf{8}`}</Formula> },
                { label: "Standard deviation", description: <Formula>{String.raw`\sigma = \sqrt 8 = \mathbf{2\sqrt 2 \approx 2.828}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 8">
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
                { label: "Mean", description: <><Formula>{String.raw`\bar{x} = \frac{55}{10} = 5.5`}</Formula> — since 1, 2, …, 10 is an arithmetic sequence, this is also just <Formula>{String.raw`\frac{1+10}{2}`}</Formula></> },
                { label: "Variance by identity", description: <Formula>{String.raw`\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2 = \frac{385}{10} - 5.5^2 = 38.5 - 30.25 = \mathbf{8.25}`}</Formula> },
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
                { label: "Count the terms", description: <><Formula>{String.raw`3n = 99 \to n = \mathbf{33}`}</Formula> terms</> },
                { label: "Mean", description: <><Formula>{String.raw`\bar{x} = \frac{3+99}{2} = \mathbf{51}`}</Formula> (mean of 1..33 is 17, ×3 = 51)</> },
                { label: "Variance of 1..33", description: <><Formula>{String.raw`\frac{m^2-1}{12}`}</Formula> (from Ex 13.2 Q2). For m = 33: <Formula>{String.raw`\frac{1089-1}{12} = \frac{1088}{12} = \mathbf{\frac{272}{3}}`}</Formula></> },
                { label: "Scale by k = 3", description: <Formula>{String.raw`\sigma^2 = 3^2 \times \frac{272}{3} = 9 \times \frac{272}{3} = \mathbf{816}`}</Formula> },
                { label: "Standard deviation (optional)", description: <Formula>{String.raw`\sigma = \sqrt{816} = \mathbf{4\sqrt{51} \approx 28.57}`}</Formula> },
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
                { label: "Mean of the sequence", description: <><Formula>{String.raw`\bar{x} = \frac{1+n}{2} = \mathbf{\frac{n+1}{2}}`}</Formula></> },
                { label: "Variance by the identity", description: <Formula>{String.raw`\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2,\quad 1^2+2^2+\cdots+n^2 = \frac{n(n+1)(2n+1)}{6} \ \Rightarrow\ \frac{\sum x_i^2}{n} = \frac{(n+1)(2n+1)}{6}`}</Formula> },
                { label: "Subtract the mean term", description: <Formula>{String.raw`\sigma^2 = \frac{(n+1)(2n+1)}{6} - \left(\frac{n+1}{2}\right)^2 = \frac{2(n+1)(2n+1) - 3(n+1)^2}{12} = \frac{(n+1)\left[(4n+2) - (3n+3)\right]}{12} = \frac{(n+1)(n-1)}{12} = \mathbf{\frac{n^2-1}{12}}`}</Formula> },
                { label: "Take the square root", description: <Formula>{String.raw`\text{SD} = \sqrt{\sigma^2} = \sqrt{\frac{n^2-1}{12}}`}</Formula> },
              ]}
            />
            <KeyPoint title="Result to memorise — the (n+1)/2 and (n²−1)/12 pair">
              <FormulaBlock latex={String.raw`\text{Mean of } 1, 2, \dots, n \ = \frac{n+1}{2}`} />
              <FormulaBlock latex={String.raw`\text{SD of } 1, 2, \dots, n \ = \sqrt{\frac{n^2 - 1}{12}}`} />
              <p>
                The same (n² − 1)/12 appeared in the 3, 6, …, 99 practice problem (where the factor 3² scaled it to 816),
                and it answers Ex 13.2 Q2 instantly. For example, n = 10 gives SD = √(99/12) ≈ 2.87 — the root of the 8.25
                from Example 8.
              </p>
            </KeyPoint>
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <h3>Variance for Discrete Frequency Distribution</h3>
      <FormulaCard>
        <p className="font-semibold mb-2">Discrete Frequency Variance</p>
        <FormulaBlock latex={String.raw`\sigma^2 = \frac{\sum f_i(x_i - \bar{x})^2}{n}, \quad n = \sum f_i`} />
        <p className="text-sm text-muted-foreground mt-2">xᵢ = distinct values, fᵢ = corresponding frequencies.</p>
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> variance of discrete frequency data (x and f side by side, no classes).</p>
      </FormulaCard>

      <Expandable title="Example 9 — Discrete Frequency Variance">
        <ProblemSolution problemNumber="Example 9">
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
                { cells: ["Total", "n = 28", "Σ = 196", "", "", "Σ = 176"] },
              ]}
              caption="Weight each squared deviation by its frequency — the last column total is the full Σfᵢ(xᵢ − x̄)²."
            />
            <Stepper
              steps={[
                { label: "Mean", description: <><Formula>{String.raw`\bar{x} = \frac{196}{28} = 7`}</Formula> (from the fᵢxᵢ column total)</> },
                { label: "Sum the last column", description: <Formula>{String.raw`\sum f_i\,(x_i - \bar{x})^2 = 176`}</Formula> },
                { label: "Variance", description: <><Formula>{String.raw`\sigma^2 = \frac{176}{28} = \mathbf{6.286}`}</Formula> (approx)</> },
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
                { cells: ["Total", "n = 7", "Σ = 22", "", "Σ = 92"] },
              ]}
              caption="The identity σ² = Σfᵢxᵢ²/n − x̄² needs only the two column totals."
            />
            <Stepper
              steps={[
                { label: "Base variance (A = 1)", description: <><Formula>{String.raw`\bar{x} = \frac{22}{7},\quad \sigma_1^2 = \frac{92}{7} - \left(\frac{22}{7}\right)^2 = \frac{644}{49} - \frac{484}{49} = \mathbf{\frac{160}{49}}`}</Formula></> },
                { label: "Scale by A", description: <Formula>{String.raw`\sigma^2 = A^2 \times \frac{160}{49}`}</Formula> },
                { label: "Equate to 160", description: <Formula>{String.raw`A^2 \times \frac{160}{49} = 160 \to A^2 = 49`}</Formula> },
                { label: "A is a positive integer", description: <Formula>{String.raw`A = \sqrt{49} = \mathbf{7}`}</Formula> },
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
        <FormulaBlock latex={String.raw`\sigma^2 = \frac{\sum f_i(x_i - \bar{x})^2}{n}`} />
        <p className="text-sm text-muted-foreground mt-2">xᵢ = midpoint of i-th class, fᵢ = class frequency, n = total frequency.</p>
        <p className="text-xs text-muted-foreground mt-1"><strong>Use when:</strong> variance of continuous (class-interval) data — take midpoints, then apply the discrete formula.</p>
      </FormulaCard>

      <Expandable title="Example 10 — Continuous Frequency Variance">
        <ProblemSolution problemNumber="Example 10">
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
                { cells: ["Total", "", "n = 20", "Σ = 470", "", "Σ = 2055"] },
              ]}
              caption="Same layout as Example 9 — only the first column changes from values to class intervals."
            />
            <Stepper
              steps={[
                { label: "Mean", description: <><Formula>{String.raw`\bar{x} = \frac{470}{20} = 23.5`}</Formula> (midpoint column, from the fᵢxᵢ total)</> },
                { label: "Sum the last column", description: <Formula>{String.raw`\sum f_i\,(x_i - \bar{x})^2 = 2055`}</Formula> },
                { label: "Variance", description: <Formula>{String.raw`\sigma^2 = \frac{2055}{20} = \mathbf{102.75}`}</Formula> },
                { label: "Standard deviation", description: <Formula>{String.raw`\sigma = \sqrt{102.75} \approx \mathbf{10.14}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>
      </Expandable>

      <SpeedTricks>
        <Callout type="tip" title="Always verify: σ² ≥ 0">
          Variance is a sum of squares divided by n — it can never be negative. If your answer is negative, you made a sign error.
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
          <li><strong>Midpoint approximation:</strong> For continuous classes, the midpoint is used as a representative value. This introduces a small error but is standard practice.</li>
          <li><strong>Variance of constant data = 0:</strong> If all values are the same, every deviation is zero, so σ² = σ = 0. This makes sense — there is no spread.</li>
          <li><strong>Adding a constant:</strong> If every observation is increased by c, the mean increases by c but <Highlight>variance and standard deviation remain unchanged</Highlight>.</li>
          <li><strong>Multiplying by a constant:</strong> If every observation is multiplied by k, the variance is multiplied by k² and the standard deviation by |k|.</li>
        </ul>
      </Callout>

      <h2 id="h-formula-map">13.4 Formula Map — Which Formula to Use When?</h2>

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
              <td className="p-2"><Formula>{String.raw`\text{M.D.}(\bar{x}) = \frac{\sum |x_i - \bar{x}|}{n}`}</Formula></td>
              <td className="p-2">Example 1</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;M.D. about the median&rdquo;, or data has outliers</td>
              <td className="p-2"><Formula>{String.raw`\text{M.D.}(M) = \frac{\sum |x_i - M|}{n}`}</Formula></td>
              <td className="p-2">Example 2</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Data given as x-values with frequencies (no classes)</td>
              <td className="p-2"><Formula>{String.raw`\text{M.D.}(\bar{x}) = \frac{\sum f_i |x_i - \bar{x}|}{n}, \quad n = \sum f_i`}</Formula></td>
              <td className="p-2">Example 3</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Data given as class intervals (0–10, 10–20, …)</td>
              <td className="p-2">Convert to <strong>midpoints</strong> xᵢ, then <Formula>{String.raw`\text{M.D.}(\bar{x}) = \frac{\sum f_i |x_i - \bar{x}|}{n}`}</Formula></td>
              <td className="p-2">Examples 5, 6</td>
            </tr>

            <tr className="border-b border-[var(--border)]/40">
              <td colSpan={3} className="p-2 font-semibold bg-muted/40 text-[0.8rem]">Variance &amp; Standard Deviation — squared deviations</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">&ldquo;Variance&rdquo; / &ldquo;standard deviation&rdquo; of a list</td>
              <td className="p-2"><Formula>{String.raw`\sigma^2 = \frac{\sum (x_i - \bar{x})^2}{n}`}</Formula></td>
              <td className="p-2">Examples 7–8</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Values with frequencies (no classes)</td>
              <td className="p-2"><Formula>{String.raw`\sigma^2 = \frac{\sum f_i (x_i - \bar{x})^2}{n}`}</Formula></td>
              <td className="p-2">Example 9</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">Class intervals (continuous)</td>
              <td className="p-2">Midpoints xᵢ, then <Formula>{String.raw`\sigma^2 = \frac{\sum f_i (x_i - \bar{x})^2}{n}`}</Formula></td>
              <td className="p-2">Example 10</td>
            </tr>
            <tr className="border-b border-[var(--border)]/50">
              <td className="p-2">σ² and x̄ are given; asks for <strong>missing / wrong observations</strong></td>
              <td className="p-2"><Formula>{String.raw`\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2 \ \Rightarrow \ \sum x_i^2 = n(\sigma^2 + \bar{x}^2)`}</Formula></td>
              <td className="p-2">Examples 12, 14</td>
            </tr>

            <tr className="border-b border-[var(--border)]/40">
              <td colSpan={3} className="p-2 font-semibold bg-muted/40 text-[0.8rem]">Effect of changing the data — multiplying by k or adding c</td>
            </tr>
            <tr>
              <td className="p-2">Each observation changed: &ldquo;multiplied by k&rdquo; or &ldquo;increased by c&rdquo;</td>
              <td className="p-2"><Formula>{String.raw`\times k \Rightarrow \sigma \to |k|\sigma, \ \sigma^2 \to k^2\sigma^2`}</Formula> &nbsp; <Formula>{String.raw`+ c \Rightarrow`}</Formula> σ unchanged</td>
              <td className="p-2">Examples 11, 13</td>
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
        (<Formula>{String.raw`\sum x_i = n\bar{x}`}</Formula>) and (<Formula>{String.raw`\sum x_i^2 = n(\sigma^2 + \bar{x}^2)`}</Formula>).
        Recover the totals that got corrupted, fix them, and recompute the mean and variance directly — no need to solve systems by hand (see Examples 12 and 14, Misc Q1–2, 5–6).
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
            <li>n = 25, x̄ = 350/25 = 14. MD = (63+16+6+18+55)/25 = 158/25 = <strong>6.32</strong>.</li>
            <li>n = 80, x̄ = 4000/80 = 50. MD = (160+480+0+320+320)/80 = 1280/80 = <strong>16</strong>.</li>
            <li>n = 26, median = 7. MD = (16+0+4+6+10+48)/26 = 84/26 ≈ <strong>3.23</strong>.</li>
            <li>n = 29, median = 30. MD = (45+45+18+0+40)/29 = 148/29 ≈ <strong>5.10</strong>.</li>
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
            <li>n = 40. x̄ = 760/40 = 19. σ² = 16176/40 − 19² = 404.4 − 361 = <strong>43.4</strong>.</li>
            <li>n = 22. x̄ = 2200/22 = 100. Variance = <strong>29.09</strong>.</li>
            <li>x̄ = 64. σ² = <strong>2.86</strong>, σ ≈ 1.69.</li>
            <li>Midpoints: 15, 45, …, 195. x̄ = 107. σ² = <strong>2276</strong>.</li>
            <li>Midpoints: 5, 15, …, 45. x̄ = 27. σ² = <strong>132</strong>.</li>
            <li>x̄ = 93. σ² ≈ <strong>105.58</strong>, σ ≈ 10.28.</li>
            <li>Continuous classes: 32.5–36.5, … x̄ = <strong>43.5 mm</strong>, σ ≈ <strong>5.55 mm</strong>.</li>
          </ol>
        </Expandable>
      </Expandable>

      <Expandable title="Examples 11 to 14 — Miscellaneous Examples (NCERT)">
        <ProblemSolution problemNumber="Example 11">
          <ProblemSolution.Problem>
            The variance of 20 observations is 5. If each observation is multiplied by 2, find the new variance.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Key fact", description: "When every observation is multiplied by k, the variance is multiplied by k²." },
                { label: "Apply", description: <Formula>{String.raw`\text{New variance } = k^2 \times \text{old} = 2^2 \times 5 = \mathbf{20}`}</Formula> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 12">
          <ProblemSolution.Problem>
            The mean of 5 observations is 4.4 and the variance is 8.24. If three of the observations are 1, 2 and 6, find the other two.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Sum from mean", description: <><Formula>{String.raw`\sum x_i = 5\times 4.4 = 22`}</Formula>. Known: 1+2+6 = 9, so <Formula>{String.raw`x + y = 13`}</Formula></> },
                { label: "Variance equation", description: <><Formula>{String.raw`\sum x_i^2 = n(\sigma^2 + \bar{x}^2) = 5(8.24 + 19.36) = 138`}</Formula>. Known squares: 1+4+36 = 41, so <Formula>{String.raw`x^2 + y^2 = 97`}</Formula></> },
                { label: "Solve", description: <><Formula>{String.raw`(x+y)^2 = x^2 + y^2 + 2xy \to 169 = 97 + 2xy \to 2xy = 72`}</Formula>. Then <Formula>{String.raw`(x-y)^2 = 97-72 = 25 \to x-y = \pm 5`}</Formula></> },
                { label: "Answer", description: <>With <Formula>{String.raw`x+y = 13`}</Formula> and <Formula>{String.raw`x-y = \pm 5`}</Formula>, the two observations are <strong>4 and 9</strong>.</> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 13">
          <ProblemSolution.Problem>
            If each observation x₁, x₂, …, xₙ is increased by a (positive or negative), show that the variance remains unchanged.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "New values", description: <Formula>{String.raw`y_i = x_i + a\ \text{ and }\ \bar{y} = \bar{x} + a`}</Formula> },
                { label: "Deviations cancel", description: <><Formula>{String.raw`y_i - \bar{y} = (x_i + a) - (\bar{x} + a) = x_i - \bar{x}`}</Formula> — the constant a drops out of every deviation.</> },
                { label: "Conclusion", description: <><Formula>{String.raw`\sigma_y^2 = \frac{1}{n}\sum (y_i - \bar{y})^2 = \frac{1}{n}\sum (x_i - \bar{x})^2 = \sigma_x^2`}</Formula>, so <strong>variance is unchanged</strong>.</> },
              ]}
            />
          </ProblemSolution.Solution>
        </ProblemSolution>

        <ProblemSolution problemNumber="Example 14">
          <ProblemSolution.Problem>
            The mean and SD of 100 observations were calculated as 40 and 5.1 by a student who took 50 instead of 40 for one observation. Find the correct mean and SD.
          </ProblemSolution.Problem>
          <ProblemSolution.Solution>
            <Stepper
              steps={[
                { label: "Correct sum", description: <><Formula>{String.raw`\sum x_i = 100\times 40 = 4000;\ \text{correct sum } = 4000-50+40 = 3990`}</Formula>. Correct mean <Formula>{String.raw`= \frac{3990}{100} = \mathbf{39.9}`}</Formula></> },
                { label: "Incorrect Σx²", description: <Formula>{String.raw`\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2 \to 26.01 = \frac{\sum x_i^2}{100} - 1600 \to \sum x_i^2 = 100(26.01+1600) = 162601`}</Formula> },
                { label: "Correct Σx²", description: <Formula>{String.raw`= 162601 - 50^2 + 40^2 = 162601 - 2500 + 1600 = 161701`}</Formula> },
                { label: "Correct SD", description: <Formula>{String.raw`\sigma^2 = \frac{161701}{100} - (39.9)^2 = 1617.01 - 1592.01 = 25 \to \sigma = \mathbf{5}`}</Formula> },
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
