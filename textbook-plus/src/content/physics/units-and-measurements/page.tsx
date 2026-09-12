import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function UnitsAndMeasurementsChapter() {
  return (
    <>
      <h2 id="h-intro">1.1 Introduction</h2>
      <Callout type="important" title="What is a physical quantity?">
        A <strong>physical quantity</strong> is any quantity that can be measured. Every measurement
        has two <strong>components</strong>: a{" "}
        <Highlight>number (numerical measure or magnitude)</Highlight> and a{" "}
        <strong>unit</strong>. Measuring means comparing the quantity with a basic, arbitrarily
        chosen, internationally accepted reference standard called a <strong>unit</strong>.
      </Callout>
      <Comparison
        columns={[
          {
            title: "Fundamental / Base Quantities",
            children: (
              <>
                <p className="mb-2">
                  A set of physical quantities that are <strong>independent</strong> of each other.
                </p>
                <ul>
                  <li>Mass — kilogram (kg)</li>
                  <li>Length — metre (m)</li>
                  <li>Time — second (s)</li>
                  <li>Electric current — ampere (A)</li>
                  <li>Thermodynamic temperature — kelvin (K)</li>
                  <li>Amount of substance — mole (mol)</li>
                  <li>Luminous intensity — candela (cd)</li>
                </ul>
              </>
            ),
          },
          {
            title: "Derived Quantities",
            children: (
              <>
                <p className="mb-2">
                  Quantities that can be <strong>expressed in terms of fundamental quantities</strong>.
                </p>
                <ul>
                  <li>
                    Speed <Formula>{String.raw`= \dfrac{\text{distance}}{\text{time}}`}</Formula> — m s<sup>−1</sup>
                  </li>
                  <li>
                    Area <Formula>{String.raw`= \text{length} \times \text{breadth}`}</Formula> — m<sup>2</sup>
                  </li>
                  <li>
                    Volume <Formula>{String.raw`= \text{length}^3`}</Formula> — m<sup>3</sup>
                  </li>
                  <li>
                    Density <Formula>{String.raw`= \dfrac{\text{mass}}{\text{volume}}`}</Formula> — kg m<sup>−3</sup>
                  </li>
                  <li>
                    Force <Formula>{String.raw`= \text{mass} \times \text{acceleration}`}</Formula> — newton (N)
                  </li>
                </ul>
              </>
            ),
          },
        ]}
      />

      <h2 id="h-1-2">1.2 The International System of Units (SI)</h2>
      <TableCard
        caption="Base units of length, mass and time in the three older systems."
        headers={["System", "Length", "Mass", "Time"]}
        rows={[
          { cells: ["CGS", "centimetre (cm)", "gram (g)", "second (s)"] },
          { cells: ["FPS (British)", "foot (ft)", "pound (lb)", "second (s)"] },
          { cells: ["MKS", "metre (m)", "kilogram (kg)", "second (s)"] },
        ]}
      />
      <p>
        The now internationally accepted system is the <em>Système Internationale d&rsquo;unités</em>{" "}
        <Highlight>(French for <strong>International System of Units</strong>), abbreviated <strong>SI</strong></Highlight>.
      </p>
      <ul>
        <li>SI has <Highlight><strong>seven base units</strong>, plus two supplementary units</Highlight>:</li>
      </ul>
      <Comparison
        columns={[
          {
            title: "Fundamental — the seven base quantities",
            children: (
              <>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-emerald-500/15 bg-emerald-500/[0.06] text-emerald-900/80 dark:bg-emerald-500/[0.08] dark:text-emerald-100/90">
                      <th className="px-3 py-2 text-left font-semibold">Quantity</th>
                      <th className="px-3 py-2 text-left font-semibold">Unit</th>
                      <th className="px-3 py-2 text-left font-semibold">Symbol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/20 last:border-0">
                      <td className="px-3 py-1.5">Length</td>
                      <td className="px-3 py-1.5">metre</td>
                      <td className="px-3 py-1.5">m</td>
                    </tr>
                    <tr className="border-b border-border/20 last:border-0">
                      <td className="px-3 py-1.5">Mass</td>
                      <td className="px-3 py-1.5">kilogram</td>
                      <td className="px-3 py-1.5">kg</td>
                    </tr>
                    <tr className="border-b border-border/20 last:border-0">
                      <td className="px-3 py-1.5">Time</td>
                      <td className="px-3 py-1.5">second</td>
                      <td className="px-3 py-1.5">s</td>
                    </tr>
                    <tr className="border-b border-border/20 last:border-0">
                      <td className="px-3 py-1.5">Electric current</td>
                      <td className="px-3 py-1.5">ampere</td>
                      <td className="px-3 py-1.5">A</td>
                    </tr>
                    <tr className="border-b border-border/20 last:border-0">
                      <td className="px-3 py-1.5">Thermodynamic temperature</td>
                      <td className="px-3 py-1.5">kelvin</td>
                      <td className="px-3 py-1.5">K</td>
                    </tr>
                    <tr className="border-b border-border/20 last:border-0">
                      <td className="px-3 py-1.5">Amount of substance</td>
                      <td className="px-3 py-1.5">mole</td>
                      <td className="px-3 py-1.5">mol</td>
                    </tr>
                    <tr className="border-b border-border/20 last:border-0">
                      <td className="px-3 py-1.5">Luminous intensity</td>
                      <td className="px-3 py-1.5">candela</td>
                      <td className="px-3 py-1.5">cd</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-xs italic text-muted-foreground">
                  Table 1.1 — the seven SI base quantities (2025–26 syllabus: exact definitions
                  need not be memorised).
                </p>
              </>
            ),
          },
          {
            title: "Supplementary — two angle quantities",
            children: (
              <ul>
                <li>
                  <strong>Plane angle</strong> (symbol <Formula>{String.raw`\theta`}</Formula>): the
                  angle between two lines meeting at a point — the ratio of the arc length <em>s</em>
                  to the radius <em>r</em> (<Formula>{String.raw`\theta = s/r`}</Formula>). SI unit:
                  the <strong>radian</strong> (rad).
                </li>
                <li>
                  <strong>Solid angle</strong> (symbol <Formula>{String.raw`\Omega`}</Formula>): the
                  angle subtended at a point by an area on the surface of a sphere — the ratio of the
                  intercepted area <em>A</em> to the square of the radius <em>r</em>{" "}
                  (<Formula>{String.raw`\Omega = A/r^2`}</Formula>). SI unit: the{" "}
                  <strong>steradian</strong> (sr).
                </li>
                <li>
                  Both are ratios of a length to a length (or an area to a length&sup2;) — they have{" "}
                  <strong>a unit but no dimension</strong>.
                </li>
              </ul>
            ),
          },
        ]}
      />
      <Callout type="note" title="Why do they have no dimension?">
        Both are ratios of a length to a length (or an area to an area) — the units cancel, so they
        carry <strong>a unit but no dimension</strong>.
      </Callout>

      <h3 id="h-dim-vs-unit">Dimension vs unit — the four combinations</h3>
      <TableCard
        caption="A quantity is either dimensional or dimensionless, and either carries a unit or not. These are all four combinations a quantity can take."
        headers={["Combination", "Dimensional formula?", "Unit?", "Examples"]}
        rows={[
          { cells: ["Dimension + unit", "✓ e.g. [M L T⁻²]", "✓ e.g. newton (N)", "Force, energy, pressure"] },
          { cells: ["Unit, no dimension", "—", "✓ rad, sr", "Plane angle (θ), solid angle (Ω)"] },
          { cells: ["No dimension, no unit", "—", "—", "Strain, refractive index, relative density, π"] },
          { cells: ["Dimension, no unit", "✓", "—", "None — a quantity with dimensions always carries a unit"] },
        ]}
      />

      <h3 id="h-decimal">The decimal system and conversions</h3>
      <p>
        SI is a <strong>decimal system</strong>: <Highlight>every unit is a power of ten of the base unit</Highlight>.
        Conversions are just a matter of <strong>shifting the decimal point</strong>, guided by{" "}
        <strong>prefixes</strong>.
      </p>
      <Callout type="note" title="How to convert — shift the decimal point">
        Take the <strong>difference of the two prefix exponents</strong>: that is the number of
        places to move the decimal point — to the <strong>right</strong> for a larger unit, to the{" "}
        <strong>left</strong> for a smaller one. E.g. nanometre (10<sup>&minus;9</sup>) to millimetre
        (10<sup>&minus;3</sup>): exponent difference <Formula>{String.raw`-3 - (-9) = 6`}</Formula>{" "}
        steps up, so <Formula>{String.raw`1\ \text{nm} = 10^{-6}\ \text{mm}`}</Formula>. For{" "}
        <strong>area</strong> or <strong>volume</strong>, apply the factor once per dimension
        (square or cube it).
      </Callout>
      <TableCard
        caption="Common SI prefixes — each step is a power of ten."
        headers={["Prefix", "Symbol", "Power"]}
        rows={[
          { cells: ["giga", "G", "10⁹"] },
          { cells: ["mega", "M", "10⁶"] },
          { cells: ["kilo", "k", "10³"] },
          { cells: ["deci", "d", "10⁻¹"] },
          { cells: ["centi", "c", "10⁻²"] },
          { cells: ["milli", "m", "10⁻³"] },
          { cells: ["micro", "µ", "10⁻⁶"] },
          { cells: ["nano", "n", "10⁻⁹"] },
          { cells: ["pico", "p", "10⁻¹²"] },
        ]}
      />
      <FormulaCard>
        <ul>
          <li>
            <Formula>{String.raw`1\ \text{km} = 10^3\ \text{m}`}</Formula>,{" "}
            <Formula>{String.raw`1\ \text{cm} = 10^{-2}\ \text{m}`}</Formula>,{" "}
            <Formula>{String.raw`1\ \text{mm} = 10^{-3}\ \text{m}`}</Formula>
          </li>
          <li>
            <Formula>{String.raw`1\ \text{mg} = 10^{-3}\ \text{g}`}</Formula>,{" "}
            <Formula>{String.raw`1\ \mu\text{s} = 10^{-6}\ \text{s}`}</Formula>
          </li>
          <li>
            <Formula>{String.raw`1\ \text{m}^2 = 10^4\ \text{cm}^2 = 10^6\ \text{mm}^2`}</Formula>{" "}
            — area converts with the square of the length factor.
          </li>
        </ul>
      </FormulaCard>
      <MistakeCard
        mistake="Converting area or volume with a single decimal shift: thinking 1 m² = 10² cm² or 1 m³ = 10³ cm³."
        correction="Square (area) or cube (volume) the length conversion factor: 1 m² = 10⁴ cm² and 1 m³ = 10⁶ cm³. The power of ten multiplies by 2 or 3."
      />

      <h3 id="h-practice">Practice questions &amp; conversions</h3>
      <Callout type="important" title="Question">
        Plane angle has:
        <ul>
          <li>(a) a unit and a dimension</li>
          <li>(b) a unit but no dimension</li>
          <li>(c) no unit but a dimension</li>
          <li>(d) no unit and no dimension</li>
        </ul>
        <p className="mt-2">
          <strong>Answer: (b)</strong> — an angle has the SI unit radian but, being a ratio of
          lengths, no dimension.
        </p>
      </Callout>
      <TableCard
        caption="Fill in the blanks — from smallest to largest."
        headers={["Given", "Value", "Tag"]}
        rows={[
          { cells: ["1 fermi / femtometre (fm)", "10⁻¹⁵ m", "smallest"] },
          { cells: ["1 Ångström (Å)", "10⁻¹⁰ m", "—"] },
          { cells: ["1 Astronomical Unit (AU)", "1.496 × 10¹¹ m", "—"] },
          { cells: ["1 light year (ly)", "9.46 × 10¹⁵ m", "—"] },
          { cells: ["1 parsec (pc)", "3.08 × 10¹⁶ m", "largest"] },
        ]}
      />
      <Callout type="note" title="Energy — a common confusion">
        <strong>kilowatt-hour (kWh)</strong> is a unit of <strong>energy</strong>, not power:
        <FormulaBlock latex={String.raw`1\ \text{kWh} = 1000\ \text{W} \times 3600\ \text{s} = 3.6 \times 10^6\ \text{J}`} />
      </Callout>

      <h2 id="h-sig-figs">1.3 Significant Figures</h2>
      <Callout type="important" title="Definition">
        <strong>Significant digits (significant figures)</strong> = the reliable digits plus the first
        uncertain digit of a reported measurement.
      </Callout>
      <TableCard
        caption="Counting significant figures — a variety of examples."
        headers={["Measurement", "Sig. figs", "Why"]}
        rows={[
          { cells: ["1.62 s", "3", "digits 1, 6 reliable, 2 uncertain"] },
          { cells: ["287.5 cm", "4", "digits 2, 8, 7 certain, 5 uncertain"] },
          { cells: ["2.308 cm", "4", "all non-zero + zero between non-zeros"] },
          { cells: ["0.0069 m", "2", "leading zeros after the decimal are not significant"] },
          { cells: ["3.500 g", "4", "trailing zeros with a decimal point are significant"] },
          { cells: ["12300 cm", "3", "trailing zeros without a decimal point are not significant"] },
          { cells: ["2.64 × 10²⁴ kg", "3", "scientific notation — the power of 10 is irrelevant"] },
          { cells: ["100.0 mL", "4", "zeros inside plus trailing zero after the point"] },
        ]}
      />
      <KeyPoint title="Chosen unit ≠ precision">
        A change of units does <strong>not</strong> change the number of significant figures.
        2.308 cm = 0.02308 m = 23080 <em>&mu;</em>m all have the <strong>same four</strong> significant figures (2, 3, 0, 8).
      </KeyPoint>

      <h3 id="h-sig-count">Rules for counting significant figures</h3>
      <ol>
        <li>All <strong>non-zero digits</strong> are significant.</li>
        <li>All <strong>zeros between two non-zero digits</strong> are significant, wherever the decimal point is.</li>
        <li>For numbers less than 1, <Highlight><strong>leading zeros after the decimal point</strong> (left of the first non-zero digit) are <strong>not</strong> significant</Highlight>. (In 0.00&nbsp;2308, the two leading zeros are not significant.)</li>
        <li><Highlight>Trailing zeros in a number <strong>without</strong> a decimal point are <strong>not</strong> significant</Highlight> (123 m = 12300 cm = 123000 mm &rarr; 3 sig. figs).</li>
        <li><Highlight>Trailing zeros in a number <strong>with</strong> a decimal point <strong>are</strong> significant</Highlight> (3.500 and 0.06900 &rarr; 4 sig. figs each).</li>
      </ol>
      <MistakeCard
        mistake="Reporting 4700 mm for a 4.700 m length and calling it 2 significant figures."
        correction="Change of units never changes the count: 4.700 m = 470.0 cm = 4700 mm = 0.004700 km — every form has four significant figures. If in doubt, use scientific notation: 4.700 × 10³ mm."
        example="4700 mm with trailing zeros counts the same four digits as 4.700 m."
      />
      <h3 id="h-sig-arithmetic">1.3.1 Arithmetic operations with significant figures</h3>
      <p>
        A calculated result <Highlight><strong>cannot be more accurate</strong> than the least precise input on
        which it relies</Highlight>.
      </p>
      <Comparison
        columns={[
          {
            title: "Rules",
            children: (
              <ul>
                <li>
                  <strong>Multiplication / Division:</strong> keep as many{" "}
                  <strong>significant figures</strong> as the input with the <strong>least</strong>.
                </li>
                <li>
                  <strong>Addition / Subtraction:</strong> keep as many{" "}
                  <strong>decimal places</strong> as the input with the <strong>least</strong>.
                </li>
              </ul>
            ),
          },
          {
            title: "Examples",
            children: (
              <ul>
                <li>
                  Mass 4.237 g (4 sig. figs) ÷ volume 2.51 cm³ (3 sig. figs) &rarr; density reported
                  to <strong>3 significant figures</strong>:
                  <FormulaBlock latex={String.raw`\rho = \frac{4.237\ \text{g}}{2.51\ \text{cm}^3} = 1.69\ \text{g cm}^{-3}`} important />
                </li>
                <li>
                  436.32 g + 227.2 g + 0.301 g = 663.821 g arithmetically, but 227.2 g is correct to
                  one decimal place &rarr; report <strong>663.8 g</strong>.
                </li>
                <li>
                  <Formula>{String.raw`0.307\ \text{m} - 0.304\ \text{m} = 0.003\ \text{m} = 3\times10^{-3}\ \text{m}`}</Formula>{" "}
                  (decimal places decide, not significant figures).
                </li>
              </ul>
            ),
          },
        ]}
      />
      <MistakeCard
        mistake="Rounding an addition to significant figures (664 g) or a subtraction to 3.00 × 10⁻³ m — applying the multiplication/division rule to the wrong operation."
        correction="Addition and subtraction count decimal places, not significant figures. For 0.307 − 0.304 write 3 × 10⁻³ m (one significant digit), never 3.00 × 10⁻³ m here."
      />

      <h3 id="h-sig-rounding">1.3.2 Rounding off the uncertain digits</h3>
      <ul>
        <li>Drop the insignificant digit: <Highlight>raise the preceding digit by 1 if it is <strong>more than 5</strong>; leave it if <strong>less than 5</strong></Highlight>.</li>
        <li>If the dropped digit is exactly <strong>5</strong>: <Highlight>drop it when the preceding digit is <strong>even</strong>, raise by 1 when it is <strong>odd</strong></Highlight>.</li>
      </ul>
      <TableCard
        caption="Rounding to three significant figures."
        headers={["Number", "Rounded", "Reason"]}
        rows={[
          { cells: ["2.746", "2.75", "dropped 6 > 5 → raise 4 to 5"] },
          { cells: ["1.743", "1.74", "dropped 3 < 5 → 4 left unchanged"] },
          { cells: ["2.745", "2.74", "dropped 5, preceding 4 is even → drop"] },
          { cells: ["2.735", "2.74", "dropped 5, preceding 3 is odd → raise to 4"] },
        ]}
      />
      <Callout type="note" title="Multi-step calculations">
        Retain <strong>one digit more than the significant digits</strong> in every intermediate step
        and round off only at the end — rounding early lets errors build up. E.g., 1/9.58 = 0.1044,
        then 1/0.1044 &rarr; 9.58 (rounded, the original value is retrieved).
      </Callout>
      <Expandable title="Example 1.1 — Surface area and volume of a cube" variant="example">
        <ProblemSolution.Problem>
          <p>Each side of a cube is measured to be 7.203 m. What are the total surface area and the volume of the cube to appropriate significant figures?</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>The measured length has <strong>4 significant figures</strong>, so area and volume must be rounded to 4 sig. figs.</p>
          <FormulaBlock latex={String.raw`\text{Surface area} = 6(7.203)^2 = 311.299254\ \text{m}^2 = 311.3\ \text{m}^2`} important />
          <FormulaBlock latex={String.raw`\text{Volume} = (7.203)^3 = 373.714754\ \text{m}^3 = 373.7\ \text{m}^3`} important />
        </ProblemSolution.Solution>
      </Expandable>
      <Expandable title="Example 1.2 — Density to the correct significant figures" variant="example">
        <ProblemSolution.Problem>
          <p>5.74 g of a substance occupies 1.2 cm³. Express its density keeping the significant figures in view.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>Mass has 3 sig. figs, volume has only <strong>2</strong> sig. figs &rarr; the density is limited to 2 sig. figs.</p>
          <FormulaBlock latex={String.raw`\rho = \frac{5.74\ \text{g}}{1.2\ \text{cm}^3} = 4.8\ \text{g cm}^{-3}`} important />
        </ProblemSolution.Solution>
      </Expandable>

      <h2 id="h-1-4">1.4 Dimensions of Physical Quantities</h2>
      <Callout type="important" title="Definition">
        The <strong>dimensions</strong> of a physical quantity are the{" "}
        <Highlight>powers (exponents) to which the base quantities are raised</Highlight>{" "}
        to represent that quantity. Writing [quantity] means &ldquo;the dimensions of&rdquo; the quantity.
      </Callout>
      <ul>
        <li><Highlight>The seven base quantities form the <strong>seven dimensions</strong></Highlight>: length [L], mass [M], time [T], electric current [A], thermodynamic temperature [K], luminous intensity [cd], amount of substance [mol].</li>
        <li><Highlight>In mechanics everything reduces to <strong>[L], [M], [T]</strong></Highlight>.</li>
        <li><Highlight>Dimensions carry <strong>no magnitudes</strong> — only the type of quantity matters</Highlight>.</li>
      </ul>

      <h3 id="h-dim-base">Fundamental quantities and their representations</h3>
      <TableCard
        caption="Each base quantity has a symbol for its dimension; the general form shows its full exponent set."
        headers={["Fundamental quantity", "Representation", "General representation"]}
        rows={[
          { cells: ["Mass", "[M]", "M¹ L⁰ T⁰"] },
          { cells: ["Length", "[L]", "M⁰ L¹ T⁰"] },
          { cells: ["Time", "[T]", "M⁰ L⁰ T¹"] },
          { cells: ["Electric current", "[A]", "M⁰ L⁰ T⁰ A¹"] },
          { cells: ["Thermodynamic temperature", "[K] (or [θ])", "M⁰ L⁰ T⁰ K¹"] },
          { cells: ["Amount of substance", "[mol]", "M⁰ L⁰ T⁰ mol¹"] },
          { cells: ["Luminous intensity", "[cd]", "M⁰ L⁰ T⁰ cd¹"] },
        ]}
      />

      <h3 id="h-dim-rules">Exponent rules that make dimensions work</h3>
      <FormulaCard>
        <ul>
          <li><Formula>{String.raw`x^0 = 1`}</Formula> — so <Formula>{String.raw`20^0 = 100^0 = 1^0 = 1`}</Formula></li>
          <li><Formula>{String.raw`x^1 = x`}</Formula></li>
          <li><Formula>{String.raw`a^x \times a^y = a^{x+y}`}</Formula> — <Formula>{String.raw`L^1 \times L^1 = L^{1+1} = L^2`}</Formula></li>
          <li><Formula>{String.raw`\frac{1}{a^x} = a^{-x}`}</Formula> — <Formula>{String.raw`\frac{L^1}{T^1} = L^1 T^{-1}`}</Formula></li>
          <li><Formula>{String.raw`(x^y)^z = x^{y\cdot z}`}</Formula> — <Formula>{String.raw`(L\,T^{-1})^2 = L^2\,T^{-2}`}</Formula></li>
          <li><Formula>{String.raw`[M^1 L^0 T^0] = M \times 1 \times 1 = M`}</Formula></li>
        </ul>
      </FormulaCard>

      <h3 id="h-dim-master">Dimensions of derived quantities — the master table</h3>
      <p>
        Every entry follows the same recipe: write the defining formula, substitute the dimensions of
        each part, and simplify with the exponent rules above.
      </p>
      <TableCard
        caption="Master table of physical quantities and their dimensional formulae."
        headers={["Quantity", "Formula / expression", "Dimensional formula"]}
        rows={[
          { cells: ["Area", "length × breadth", "M⁰ L² T⁰"] },
          { cells: ["Volume", "length × breadth × height", "M⁰ L³ T⁰"] },
          { cells: ["Density", "mass / volume", "M L⁻³ T⁰"] },
          { cells: ["Speed / velocity", "distance (displacement) / time", "M⁰ L T⁻¹"] },
          { cells: ["Acceleration", "change in velocity / time", "M⁰ L T⁻²"] },
          { cells: ["Force", "mass × acceleration", "M L T⁻²"] },
          { cells: ["Work, energy", "force × displacement; ½ mv²", "M L² T⁻²"] },
          { cells: ["Power", "work / time", "M L² T⁻³"] },
          { cells: ["Momentum", "mass × velocity", "M L T⁻¹"] },
          { cells: ["Impulse", "force × time", "M L T⁻¹"] },
          { cells: ["Angular velocity", "angle / time (θ / t)", "M⁰ L⁰ T⁻¹"] },
          { cells: ["Frequency", "1 / time period", "M⁰ L⁰ T⁻¹"] },
          { cells: ["Pressure", "force / area", "M L⁻¹ T⁻²"] },
          { cells: ["Coefficient of viscosity", "(force/area) ÷ (velocity gradient)", "M L⁻¹ T⁻¹"] },
          { cells: ["Modulus of elasticity", "force / area", "M L⁻¹ T⁻²"] },
          { cells: ["Gravitational constant G", "F·r² ÷ (m₁·m₂)", "M⁻¹ L³ T⁻²"] },
          { cells: ["Plane angle", "arc length / radius", "M⁰ L⁰ T⁰ (none)"] },
          { cells: ["Solid angle", "area / radius²", "M⁰ L⁰ T⁰ (none)"] },
          { cells: ["Strain", "ΔL / L", "M⁰ L⁰ T⁰ (none)"] },
        ]}
      />

      <h3 id="h-dim-worked">Worked derivations — step by step</h3>
      <Expandable title="Angular velocity ω and frequency f — both [T⁻¹]" variant="default">
        <p>
          <strong>Angular velocity:</strong> <Formula>{String.raw`\omega = \frac{\theta}{t}`}</Formula>.
          An angle in radians is dimensionless, <Formula>{String.raw`[\theta] = M^0 L^0 T^0 = 1`}</Formula>, so
          <FormulaBlock latex={String.raw`[\omega] = \frac{[\theta]}{[t]} = \frac{1}{T} = M^0 L^0 T^{-1}`} />
        </p>
        <p>
          <strong>Frequency:</strong> <Formula>{String.raw`f = \frac{1}{T}`}</Formula> gives the same
          result, agreeing with <Formula>{String.raw`\omega = 2\pi f`}</Formula> since 2π is dimensionless.
        </p>
      </Expandable>
      <Expandable title="Work W, energy E, momentum p and impulse J" variant="default">
        <p>
          <strong>Force:</strong> <Formula>{String.raw`F = ma`}</Formula> with{" "}
          <Formula>{String.raw`[v] = L T^{-1}`}</Formula> and{" "}
          <Formula>{String.raw`[a] = \frac{[v]}{[t]} = L T^{-2}`}</Formula> gives{" "}
          <Formula>{String.raw`[F] = M L T^{-2}`}</Formula>.
        </p>
        <p>
          <strong>Work:</strong> <Formula>{String.raw`W = F \times s`}</Formula> →{" "}
          <Formula>{String.raw`[W] = M L T^{-2} \times L = M L^2 T^{-2}`}</Formula>.
        </p>
        <p>
          <strong>Energy:</strong> <Formula>{String.raw`KE = \frac{1}{2}mv^2`}</Formula>; ½ is
          dimensionless, so <Formula>{String.raw`[E] = M \times (L T^{-1})^2 = M L^2 T^{-2}`}</Formula>{" "}
          — work and energy share the same dimensions.
        </p>
        <p>
          <strong>Momentum:</strong> <Formula>{String.raw`p = mv`}</Formula> →{" "}
          <Formula>{String.raw`[p] = M L T^{-1}`}</Formula>.{" "}
          <strong>Impulse:</strong> <Formula>{String.raw`J = F\,\Delta t`}</Formula> →{" "}
          <Formula>{String.raw`[J] = M L T^{-2} \times T = M L T^{-1} = [p]`}</Formula> — consistent
          with <Formula>{String.raw`J = \Delta p`}</Formula>.
        </p>
      </Expandable>
      <Expandable title="Power P — work per unit time" variant="default">
        <p>
          <Formula>{String.raw`P = \frac{W}{t}`}</Formula> with{" "}
          <Formula>{String.raw`W = F \times s`}</Formula>:
          <FormulaBlock
            latex={String.raw`[P] = \frac{[W]}{[T]} = \frac{M L T^{-2} \times L}{T} = M L^2 T^{-3}`}
            important
          />
        </p>
      </Expandable>

      <h3 id="h-dimensionless">Dimensionless quantities</h3>
      <ul>
        <li><strong>Pure numbers:</strong> <Formula>{String.raw`[2] = [100] = M^0 L^0 T^0 = 1`}</Formula></li>
        <li><strong>Constants:</strong> <Formula>{String.raw`[\pi] = [3.14] = 1`}</Formula>, <Formula>{String.raw`[e] = 1`}</Formula></li>
        <li><strong>Angles:</strong> <Formula>{String.raw`[30^\circ] = 1`}</Formula>, <Formula>{String.raw`[\pi\ \text{rad}] = 1`}</Formula></li>
        <li><strong>Trigonometric ratios:</strong> arguments and values are dimensionless — <Formula>{String.raw`[\sin\theta] = 1`}</Formula> requires <Formula>{String.raw`[\theta] = 1`}</Formula>.</li>
        <li><strong>Powers &amp; exponents:</strong> the 2 in <Formula>{String.raw`x^2`}</Formula>, the ½ in <Formula>{String.raw`\frac{1}{2}mv^2`}</Formula> — dimensionless.</li>
      </ul>

<KeyPoint>
        Because dimensions ignore magnitudes, <em>speed</em>, <em>velocity</em>, and all velocity-like
        quantities are dimensionally identical — a change of position per unit time is [L T⁻¹] in every case.
      </KeyPoint>

      <h2 id="h-1-5">1.5 Dimensional Formulae and Dimensional Equations</h2>
      <ul>
        <li>
          <strong>Dimensional formula:</strong> <Highlight>how and which base quantities represent the dimensions of a quantity</Highlight>.
        </li>
        <li>
          <strong>Dimensional equation:</strong> <Highlight>the physical quantity equated to its dimensional formula</Highlight>.
        </li>
      </ul>
      <FormulaCard>
        <ul>
          <li>Volume: <Formula>{String.raw`[V] = [M^0 L^3 T^0]`}</Formula></li>
          <li>Speed / velocity: <Formula>{String.raw`[v] = [M^0 L T^{-1}]`}</Formula></li>
          <li>Acceleration: <Formula>{String.raw`[M^0 L T^{-2}]`}</Formula></li>
          <li>Force: <Formula>{String.raw`[F] = [M L T^{-2}]`}</Formula></li>
          <li>Mass density: <Formula>{String.raw`[\rho] = [M L^{-3} T^0]`}</Formula></li>
        </ul>
      </FormulaCard>

      <h2 id="h-1-6">1.6 Dimensional Analysis and its Applications</h2>
      <h3 id="h-1-6-poh">Principle of homogeneity of dimensions (P.O.H)</h3>
      <Callout type="important" title="Principle of homogeneity (P.O.H)">
        <p>
          In any valid physical equation, the dimensions of each term on both sides must be
          identical — in short, <strong>the dimension of the RHS and the LHS of an equation must be
          the same</strong>.
        </p>
        <FormulaBlock latex={String.raw`[\text{LHS}] = [\text{RHS}]`} important />
      </Callout>
      <ul>
        <li>
          <strong>Rule:</strong> only quantities having <Highlight>the same dimensions</Highlight>{" "}
          can be added or subtracted — velocity cannot be added to force, nor electric current
          subtracted from temperature.
        </li>
        <li>
          <strong>Property:</strong> <Highlight>all terms in an equation separated by +, − or = must have the
          same dimensions</Highlight>. If <Formula>{String.raw`x = a + b - ct - \frac{d}{t}`}</Formula>, then
          <FormulaBlock latex={String.raw`[x] = [a] = [b] = [ct] = \left[\frac{d}{t}\right]`} />
        </li>
      </ul>

      <h3 id="h-1-6-app">Uses and limits of P.O.H — a side-by-side</h3>
      <Comparison
        columns={[
          {
            title: "Uses",
            children: (
              <ol>
                <li>
                  To find the <strong>dimension of unknown quantities</strong>.
                </li>
                <li>
                  To <strong>check the correctness</strong> of a given equation.
                </li>
                <li>
                  To find the <strong>relationship between physical quantities</strong>{" "}
                  (<Formula>{String.raw`A \propto k\,B`}</Formula>).
                </li>
              </ol>
            ),
          },
          {
            title: "Limits",
            children: (
              <ol>
                <li>
                  Cannot handle equations with <strong>dimensional constants</strong> — e.g. the
                  gravitational law <Formula>{String.raw`F = G\frac{m_1 m_2}{r^2}`}</Formula>.
                </li>
                <li>
                  Cannot handle <strong>more than two terms</strong> added/subtracted — e.g.{" "}
                  <Formula>{String.raw`S = ut + \tfrac{1}{2}at^2`}</Formula>.
                </li>
                <li>
                  No information on <strong>numerical correctness</strong>: both{" "}
                  <Formula>{String.raw`KE = \tfrac{1}{2}mv^2`}</Formula> and{" "}
                  <Formula>{String.raw`KE = 2mv^2`}</Formula> are dimensionally correct, but only the
                  first is numerically right.
                </li>
                <li><strong>Dimensionless constants</strong> (like 2π) are never obtained.</li>
                <li>
                  Cannot distinguish quantities with the <strong>same dimensions</strong> (e.g., work
                  and torque).
                </li>
              </ol>
            ),
          },
        ]}
      />

      <h3 id="h-1-6-1">1.6.1 Checking the dimensional consistency of equations</h3>
      <Expandable title="Check 1 — S = ut + ½at² is dimensionally correct" variant="default">
        <ul>
          <li><Formula>{String.raw`[S] = L^1`}</Formula></li>
          <li><Formula>{String.raw`[ut] = (L^1 T^{-1})\cdot T^1 = L^1`}</Formula></li>
          <li><Formula>{String.raw`[\tfrac{1}{2}at^2] = 1 \cdot (L^1 T^{-2}) \cdot T^2 = L^1`}</Formula></li>
        </ul>
        <p>
          <Formula>{String.raw`[S] = [ut] = [\tfrac{1}{2}at^2]`}</Formula> &rarr;{" "}
          <Highlight>[LHS] = [RHS]</Highlight>. The equation is{" "}
          <strong>dimensionally correct</strong>.
        </p>
      </Expandable>

      <Expandable title="Check 2 — T = 2π√(g/l)" variant="default">
        <p>T → time period, g → acceleration due to gravity, l → length.</p>
        <ul>
          <li><Formula>{String.raw`[\text{LHS}] = [T] = T^1`}</Formula></li>
          <li><Formula>{String.raw`[\text{RHS}] = \left[2\pi\sqrt{\frac{g}{l}}\right] = 1 \cdot \sqrt{\frac{L^1 T^{-2}}{L^1}} = \sqrt{T^{-2}} = T^{-1}`}</Formula></li>
        </ul>
        <p>
          <Formula>{String.raw`[\text{LHS}] \neq [\text{RHS}]`}</Formula> &rarr; the equation is{" "}
          <strong>dimensionally incorrect</strong>. (The correct relation is{" "}
          <Formula>{String.raw`T = 2\pi\sqrt{l/g}`}</Formula> — swapping l and g flips the time
          dimension, as seen in Example 1.5.)
        </p>
      </Expandable>

      <Expandable title="Check 3 — f = 2π√(l/g)" variant="default">
        <p>f → frequency, g → acceleration due to gravity, l → length.</p>
        <ul>
          <li><Formula>{String.raw`[f] = T^{-1}`}</Formula></li>
          <li><Formula>{String.raw`\left[2\pi\sqrt{\frac{l}{g}}\right] = 1 \cdot \sqrt{\frac{L^1}{L^1 T^{-2}}} = \sqrt{T^2} = T^1`}</Formula></li>
        </ul>
        <p>
          <Formula>{String.raw`[\text{LHS}] \neq [\text{RHS}]`}</Formula> (
          <Formula>{String.raw`T^{-1} \neq T^1`}</Formula>) &rarr; the equation is{" "}
          <strong>dimensionally incorrect</strong>. (Frequency actually runs as{" "}
          <Formula>{String.raw`f = \frac{1}{T} = \frac{1}{2\pi}\sqrt{g/l}`}</Formula>.)
        </p>
      </Expandable>

      <Expandable title="Example 1.3 — Is ½mv² = mgh dimensionally correct?" variant="example">
        <ProblemSolution.Problem>
          <p>Consider the equation ½mv² = mgh, where m is the mass of the body, v its velocity, g the acceleration due to gravity and h the height. Check whether the equation is dimensionally correct.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>LHS: <Formula>{String.raw`[M][L T^{-1}]^2 = [M L^2 T^{-2}]`}</Formula></p>
          <p>RHS: <Formula>{String.raw`[M][L T^{-2}][L] = [M L^2 T^{-2}]`}</Formula></p>
          <p>LHS and RHS have the same dimensions &rarr; the equation is <strong>dimensionally correct</strong>.</p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Example 1.4 — Which kinetic-energy formulas can be ruled out?" variant="example">
        <ProblemSolution.Problem>
          <p>The SI unit of energy is J = kg m² s⁻², that of speed v is m s⁻¹ and of acceleration a is m s⁻². Which of these formulas for kinetic energy K (m = mass) can you rule out on the basis of dimensional arguments?</p>
          <ol>
            <li>K = m²v³</li>
            <li>K = ½mv²</li>
            <li>K = ma</li>
            <li>K = (3/16)mv²</li>
            <li>K = ½mv² + ma</li>
          </ol>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <ul>
            <li>(a) <Formula>{String.raw`[M^2 L^3 T^{-3}]`}</Formula> — wrong dimensions &rarr; ruled out.</li>
            <li>(b) <Formula>{String.raw`[M L^2 T^{-2}]`}</Formula> — matches K &rarr; possible.</li>
            <li>(c) <Formula>{String.raw`[M L T^{-2}]`}</Formula> — wrong dimensions &rarr; ruled out.</li>
            <li>(d) <Formula>{String.raw`[M L^2 T^{-2}]`}</Formula> — matches K &rarr; possible.</li>
            <li>(e) ½mv² + ma adds quantities of <strong>different dimensions</strong> &rarr; no proper dimensions, ruled out.</li>
          </ul>
          <p>
            Dimensional arguments tell us that only (b) and (d) survive — they <em>cannot</em> choose
            between them. The correct formula (from the definition of work) is{" "}
            <Formula>{String.raw`K = \tfrac{1}{2}mv^2`}</Formula>.
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-1-6-2">1.6.2 Deducing relation among physical quantities</h3>
      <p>The method of dimensions can sometimes <strong>deduce a relation</strong> among quantities, assuming a product-type dependence (up to three linearly independent variables). <Highlight>The dimensionless constant k can never be found this way</Highlight> — it requires experiment or a deeper theory.</p>
      <ProcessCard
        title="The method of dimensions — how to deduce a relation"
        steps={[
          { label: "Assume a product dependence", description: "Write T = k·lˣ·gʸ·mᶻ with k dimensionless and x, y, z unknown exponents." },
          { label: "Insert dimensions of both sides", description: "Use [l] = L, [g] = LT⁻², [m] = M and collect powers of L, M, T." },
          { label: "Equate exponents on both sides", description: "Match the power of L, then T, then M — one equation per base dimension." },
          { label: "Solve and write the relation", description: "Insert x, y, z back; the dimensionless constant k is left undetermined." },
        ]}
      />
      <Expandable title="Example 1.5 — Period of a simple pendulum by the method of dimensions" variant="example">
        <ProblemSolution.Problem>
          <p>Suppose the period of oscillation T of a simple pendulum depends on its length l, mass of the bob m and acceleration due to gravity g. Derive its expression using the method of dimensions.</p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <Stepper
            steps={[
              {
                label: "Assume a product relation",
                description: <Formula>{String.raw`T = k\, l^x g^y m^z`}</Formula>,
              },
              {
                label: "Equate dimensions on both sides",
                description: <Formula>{String.raw`[L^0 M^0 T^1] = [L]^x [L T^{-2}]^y [M]^z = L^{x+y} T^{-2y} M^z`}</Formula>,
              },
              {
                label: "Solve the exponent equations",
                description: <Formula>{String.raw`x + y = 0,\quad -2y = 1,\quad z = 0 \;\Rightarrow\; x = \tfrac{1}{2},\ y = -\tfrac{1}{2},\ z = 0`}</Formula>,
              },
              {
                label: "Write the relation",
                description: <Formula>{String.raw`T = k \sqrt{l/g}`}</Formula>,
              },
            ]}
          />
          <p>
            The constant k cannot be obtained by this method; from the actual dynamics k = 2π, giving{" "}
            <Formula>{String.raw`T = 2\pi\sqrt{l/g}`}</Formula>. <Highlight>The period of a simple pendulum is independent of the bob&apos;s mass.</Highlight>
          </p>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Derivation 1 — Centripetal force Fc = mv²/r (k = 1)" variant="example">
        <ProblemSolution.Problem>
          <p>
            Centripetal force experienced by a body in uniform circular motion relates to its mass (m),
            velocity (v) and radius (r). Derive the expression for F<sub>c</sub>, taking the
            dimensionless constant k = 1.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <Stepper
            steps={[
              {
                label: "Assume a product dependence",
                description: <Formula>{String.raw`F_c = k\, m^a v^b r^c`}</Formula>,
              },
              {
                label: "Insert dimensions on both sides",
                description: <Formula>{String.raw`M^1 L^1 T^{-2} = (M^1)^a (L^1 T^{-1})^b (L^1)^c = M^a L^{b+c} T^{-b}`}</Formula>,
              },
              {
                label: "Equate the powers",
                description: <Formula>{String.raw`a = 1;\quad -b = -2 \Rightarrow b = 2;\quad b + c = 1 \Rightarrow 2 + c = 1 \Rightarrow c = -1`}</Formula>,
              },
              {
                label: "Write the relation",
                description: <Formula>{String.raw`F_c = m^1 v^2 r^{-1} = \frac{m v^2}{r}`}</Formula>,
              },
            ]}
          />
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="Derivation 2 — Time period of a planet around the Sun" variant="example">
        <ProblemSolution.Problem>
          <p>
            A planet moves around the Sun in a nearly circular orbit. Its period (T) depends on the
            radius of the orbit (r), the mass of the Sun (M) and the gravitational constant (G).
            Derive the expression for T using the method of dimensions.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <Stepper
            steps={[
              {
                label: "Assume a product dependence",
                description: <Formula>{String.raw`T = k\, r^a M^b G^c`}</Formula>,
              },
              {
                label: "Insert dimensions on both sides",
                description: <Formula>{String.raw`T^1 = (L^1)^a (M^1)^b (M^{-1} L^3 T^{-2})^c = M^{b-c} L^{a+3c} T^{-2c}`}</Formula>,
              },
              {
                label: "Equate the powers",
                description: <Formula>{String.raw`-2c = 1 \Rightarrow c = -\tfrac{1}{2};\quad b - c = 0 \Rightarrow b = -\tfrac{1}{2};\quad a + 3c = 0 \Rightarrow a = \tfrac{3}{2}`}</Formula>,
              },
              {
                label: "Write the relation",
                description: <Formula>{String.raw`T = k r^{3/2} M^{-1/2} G^{-1/2} = k\sqrt{\frac{r^3}{G M}}`}</Formula>,
              },
            ]}
          />
        </ProblemSolution.Solution>
      </Expandable>

      <h3 id="h-1-6-3">1.6.3 Practice questions — applying P.O.H</h3>
      <Expandable title="Solved practice questions on dimensions" variant="exercise">
        <Expandable title="Q1 — A quantity has dimensions [M¹ L² T⁻²]" variant="exercise">
          <p>What are its SI and CGS units?</p>
          <p>Replace M, L, T by the base units of each system:</p>
          <ul>
            <li>
              <strong>SI:</strong> <Formula>{String.raw`\text{kg}\cdot\text{m}^2\cdot\text{s}^{-2}`}</Formula>{" "}
              — the joule (J), a unit of energy/work.
            </li>
            <li>
              <strong>CGS:</strong> <Formula>{String.raw`\text{g}\cdot\text{cm}^2\cdot\text{s}^{-2}`}</Formula>{" "}
              — the erg.
            </li>
          </ul>
        </Expandable>
        <Expandable title="Q2 — SI unit is kg m⁻². Find the dimensions" variant="exercise">
          <p>Replace each unit by its dimension: kg → [M], m → [L].</p>
          <FormulaBlock latex={String.raw`\frac{\text{kg}^1}{\text{m}^2} \;\Rightarrow\; [M^1 L^{-2} T^0]`} important />
        </Expandable>
        <Expandable title="Q3 — Kinetic energy K = ½mv²" variant="example">
          <FormulaBlock latex={String.raw`[K] = [\tfrac{1}{2}]\,[m]\,[v]^2 = 1 \times M \times (L T^{-1})^2 = [M L^2 T^{-2}]`} important />
        </Expandable>
        <Expandable title="Q4 — Gravitational constant G from F = Gm₁m₂/r²" variant="example">
          <p>Rearrange for G, then substitute dimensions:</p>
          <FormulaBlock latex={String.raw`G = \frac{F\,r^2}{m_1 m_2} = \frac{(M L T^{-2})\,L^2}{M \times M} = [M^{-1} L^3 T^{-2}]`} important />
        </Expandable>
        <Expandable title="Q5 — Coefficient of viscosity, modulus of elasticity and G" variant="exercise">
          <p>Write the dimensional formula of each quantity:</p>
          <TableCard
            headers={["Quantity", "Formula / expression", "Dimensional formula"]}
            rows={[
              { cells: ["Coefficient of viscosity", "(force/area) ÷ (velocity gradient)", "M L⁻¹ T⁻¹"] },
              { cells: ["Gravitational constant", "force × (distance)² ÷ (mass)²", "M⁻¹ L³ T⁻²"] },
              { cells: ["Modulus of elasticity", "force ÷ area", "M L⁻¹ T⁻²"] },
            ]}
          />
        </Expandable>
        <Expandable title="Q6 — Spring constant k from F = −kx" variant="exercise">
          <p>
            The restoring force developed in a spring extended by a length x is <Formula>{String.raw`F = -kx`}</Formula>.
            What is the dimensional formula of k?
          </p>
          <FormulaBlock latex={String.raw`[k] = \frac{[F]}{[x]} = \frac{M L T^{-2}}{L} = [M L^0 T^{-2}] = [M T^{-2}]`} important />
        </Expandable>
        <Expandable title="P1 — Dimensions of a, b, c in x = a + bt + c/t²" variant="exercise">
        <ProblemSolution.Problem>
          <p>
            The displacement x of a body is given by{" "}
            <Formula>{String.raw`x = a + bt + \frac{c}{t^2}`}</Formula>, where x is displacement and t
            is time. Find the dimensions of a, b and c.
          </p>
        </ProblemSolution.Problem>
        <ProblemSolution.Solution>
          <p>
            By P.O.H: <Formula>{String.raw`[x] = [a] = [bt] = \left[\frac{c}{t^2}\right]`}</Formula>,
            with <Formula>{String.raw`[x] = M^0 L^1 T^0`}</Formula>:
          </p>
          <ul>
            <li><Formula>{String.raw`[a] = [x] = [M^0 L^1 T^0]`}</Formula></li>
            <li><Formula>{String.raw`[bt] = [x] \Rightarrow [b] = \frac{[x]}{[t]} = \frac{L^1}{T^1} = [M^0 L^1 T^{-1}]`}</Formula></li>
            <li><Formula>{String.raw`\left[\frac{c}{t^2}\right] = [x] \Rightarrow [c] = [x] \cdot [t^2] = L^1 \cdot T^2 = [M^0 L^1 T^2]`}</Formula></li>
          </ul>
        </ProblemSolution.Solution>
      </Expandable>

      <Expandable title="P2 — Is P = Fv + Av³ρ dimensionally valid?" variant="exercise">
        <p>
          Mechanical power is represented by <Formula>{String.raw`P = Fv + Av^3 \rho`}</Formula>,
          where F is force, v velocity, A area and ρ density. Check the dimensional validity of the
          equation.
        </p>
        <p><Formula>{String.raw`[P] = M L^2 T^{-3}`}</Formula>. Term by term:</p>
        <ul>
          <li>
            <Formula>{String.raw`[Fv] = (M L T^{-2})(L T^{-1}) = M L^2 T^{-3} = [P]`}</Formula> — matches ✓
          </li>
          <li>
            <Formula>{String.raw`[Av^3 \rho] = L^2 \cdot (L T^{-1})^3 \cdot M L^{-3} = M L^2 T^{-3} = [P]`}</Formula> — matches ✓
          </li>
        </ul>
        <p>
          Every term has the dimensions of power &rarr; the equation is{" "}
          <strong>dimensionally valid</strong>.
        </p>
      </Expandable>

      <Expandable title="P3 — A pipe company&apos;s claim V = KA²ut" variant="exercise">
        <p>
          A company manufacturing PVC pipes claims that the volume of water flowing out through a pipe
          in a given time is <Formula>{String.raw`V = K A^2 u t`}</Formula>, where A is the area of
          cross section, u is the speed of flow, t is the time and K is a dimensionless constant.
          Check the equation and state whether the claim can be correct.
        </p>
        <ul>
          <li><Formula>{String.raw`[V] = [L^3]`}</Formula></li>
          <li><Formula>{String.raw`[K A^2 u t] = 1 \cdot (L^2)^2 \cdot (L T^{-1}) \cdot T = L^5`}</Formula></li>
        </ul>
        <p>
          <Formula>{String.raw`[L^3] \neq [L^5]`}</Formula> &rarr; the equation is{" "}
          <strong>dimensionally incorrect</strong>, so the claim <strong>cannot be correct</strong>.
          (Dimensionally sound forms are <Formula>{String.raw`V = K A u t`}</Formula> for the volume,
          or the volume flow rate <Formula>{String.raw`Q = A u`}</Formula>.)
        </p>
      </Expandable>

      <Expandable title="P4 — Relativistic mass and the dimension of x" variant="exercise">
        <p>
          A student writes the relativistic variation of mass with velocity as{" "}
          <Formula>{String.raw`m = \frac{m_0}{\sqrt{1 - \frac{x^2}{c^2}}}`}</Formula>, where m₀ is the
          rest mass and c is the speed of light. What is the dimensional formula of x?
        </p>
        <p>
          The number 1 is dimensionless, so by P.O.H the term subtracted from it must also be
          dimensionless:
        </p>
        <ul>
          <li><Formula>{String.raw`\left[\frac{x^2}{c^2}\right] = M^0 L^0 T^0`}</Formula></li>
          <li><Formula>{String.raw`[x^2] = [c^2] \Rightarrow [x] = [c] = [M^0 L T^{-1}]`}</Formula></li>
        </ul>
        <p>
          <Highlight>[x] = [M⁰ L T⁻¹]</Highlight> — x has the dimensions of velocity (in
          the real relation, x is the speed v).
        </p>
      </Expandable>

      <Expandable title="P5 — Orbital velocity v = √(GM/R)" variant="exercise">
        <p>
          Check the dimensional correctness of <Formula>{String.raw`v = \sqrt{GM/R}`}</Formula>, where
          v is orbital velocity, G the gravitational constant, M the mass of Earth and R its radius.
        </p>
        <ul>
          <li>
            <Formula>{String.raw`[G] = \frac{[F r^2]}{[M^2]} = \frac{M L T^{-2} \cdot L^2}{M^2} = M^{-1} L^3 T^{-2}`}</Formula>
          </li>
          <li>
            <Formula>{String.raw`\left[\frac{GM}{R}\right] = \frac{M^{-1} L^3 T^{-2} \cdot M}{L} = L^2 T^{-2}`}</Formula>
          </li>
          <li>
            <Formula>{String.raw`[\text{RHS}] = \sqrt{L^2 T^{-2}} = L T^{-1} = [v]`}</Formula>
          </li>
        </ul>
        <p>
          [LHS] = [RHS] = <Highlight>[M⁰ L T⁻¹]</Highlight> &rarr; the relation is{" "}
          <strong>dimensionally correct</strong>.
        </p>
      </Expandable>

      <Expandable title="P6 — Velocity as a function of time: V = At² + Bt" variant="exercise">
        <p>
          Given <Formula>{String.raw`V = At^2 + Bt`}</Formula>, where V is velocity and t is time,
          find the dimensions and SI units of A and B.
        </p>
        <ul>
          <li><Formula>{String.raw`[V] = [At^2] \Rightarrow [A] = \frac{[V]}{[t^2]} = \frac{L T^{-1}}{T^2} = [L T^{-3}]`}</Formula></li>
          <li><Formula>{String.raw`[V] = [Bt] \Rightarrow [B] = \frac{[V]}{[t]} = \frac{L T^{-1}}{T^1} = [L T^{-2}]`}</Formula></li>
        </ul>
        <p>Units: A → <strong>m·s⁻³</strong>, B → <strong>m·s⁻²</strong>.</p>
      </Expandable>

      <Expandable title="P7 — Is PV = F·x dimensionally correct?" variant="exercise">
        <p>
          Check <Formula>{String.raw`P V = F \cdot x`}</Formula>, where P is pressure, V volume, F
          force and x displacement.
        </p>
        <ul>
          <li>LHS: <Formula>{String.raw`[P][V] = [M L^{-1} T^{-2}] \times [L^3] = [M L^2 T^{-2}]`}</Formula></li>
          <li>RHS: <Formula>{String.raw`[F][x] = [M L T^{-2}] \times [L] = [M L^2 T^{-2}]`}</Formula></li>
        </ul>
        <p>[LHS] = [RHS] &rarr; the equation is <strong>dimensionally correct</strong>.</p>
      </Expandable>

      <Expandable title="P8 — Is v = v₀ + at dimensionally correct?" variant="exercise">
        <ul>
          <li><Formula>{String.raw`[v] = [L T^{-1}]`}</Formula></li>
          <li><Formula>{String.raw`[v_0] = [L T^{-1}]`}</Formula></li>
          <li><Formula>{String.raw`[at] = [L T^{-2} \cdot T] = [L T^{-1}]`}</Formula></li>
        </ul>
        <p>
          Every term is <Formula>{String.raw`[L T^{-1}]`}</Formula> &rarr; the equation is{" "}
          <strong>dimensionally correct</strong>.
        </p>
      </Expandable>

      <Expandable title="P9 — h = F v² L where L is angular momentum" variant="exercise">
        <p>
          Find the dimensions of h if <Formula>{String.raw`h = F v^2 L`}</Formula>, where F is force,
          v is velocity and <strong>L is angular momentum</strong>{" "}
          (<Formula>{String.raw`[L] = [M L^2 T^{-1}]`}</Formula> — note: <em>not</em> length).
        </p>
        <FormulaBlock latex={String.raw`[h] = [F]\,[v]^2\,[L] = [M L T^{-2}] \times [L^2 T^{-2}] \times [M L^2 T^{-1}] = [M^2 L^5 T^{-5}]`} important />
      </Expandable>

      <Expandable title="P10 — 1 N = 10⁵ dyne (converting units)" variant="exercise">
        <p>Show that 1 newton = 10⁵ dynes using the numerical-factor formula:</p>
        <FormulaBlock latex={String.raw`n_2 = n_1 \cdot \left(\frac{M_1}{M_2}\right)^a \left(\frac{L_1}{L_2}\right)^b \left(\frac{T_1}{T_2}\right)^c`} />
        <p>Force has dimensions <Formula>{String.raw`[M^1 L^1 T^{-2}]`}</Formula>, so</p>
        <FormulaBlock latex={String.raw`n_2 = 1 \cdot \left(\frac{1\ \text{kg}}{1\ \text{g}}\right)^1 \left(\frac{1\ \text{m}}{1\ \text{cm}}\right)^1 \left(\frac{1\ \text{s}}{1\ \text{s}}\right)^{-2} = 10^3 \times 10^2 \times 1 = 10^5\ \text{dynes}`} important />
      </Expandable>

      <Expandable title="P11 — Coefficient b in x = a + bt + ct²" variant="exercise">
        <p>
          Given <Formula>{String.raw`x = a + bt + ct^2`}</Formula> (x displacement, t time), find the
          dimension of b.
        </p>
        <FormulaBlock latex={String.raw`[bt] = [x] \Rightarrow [b] = \frac{[x]}{[t]} = [L^1 T^{-1}]`} important />
      </Expandable>

      <Expandable title="P12 — Percentage error in the volume of a block" variant="exercise">
        <p>
          A rectangular block has percentage errors of 2%, 1% and 3% in its length, breadth and
          thickness. Since <Formula>{String.raw`V = L \times B \times H`}</Formula> is a product, the
          percentage errors add:
        </p>
        <FormulaBlock latex={String.raw`\frac{\Delta V}{V} \times 100 = 2\% + 1\% + 3\% = 6\%`} important />
      </Expandable>

      <Expandable title="P13 — Measuring the diameter of the Moon" variant="exercise">
        <p>
          Direct measurement is impossible, so the <strong>parallax method</strong> is used: the Moon
          is observed from two points separated by a known baseline b, giving the parallax angle θ
          with <Formula>{String.raw`\theta = \frac{b}{D}`}</Formula>, where D is the Moon&rsquo;s
          distance. Combined with the Moon&rsquo;s angular size, this yields its diameter.
        </p>
      </Expandable>

      <Expandable title="P14 — Which of second, newton, joule is a fundamental unit?" variant="exercise">
        <p>
          <strong>Second</strong>. Newton (force) and joule (energy) are{" "}
          <strong>derived</strong> units — each is built from the base units m, kg, s.
        </p>
      </Expandable>

      <Expandable title="P15 — Angular frequency ω from y = A sin(ωt)" variant="exercise">
        <p>
          The displacement of an oscillating body is <Formula>{String.raw`y = A \sin(\omega t)`}</Formula>,
          where y and A are in metres and t is in seconds. Find the dimensions of the angular
          frequency ω.
        </p>
        <p>
          Trigonometric functions and their arguments are dimensionless:
          <Formula>{String.raw`[\sin(\omega t)] = 1 \implies [\omega t] = 1`}</Formula>. Hence
          <FormulaBlock latex={String.raw`[\omega]\cdot[t] = 1 \implies [\omega] = \frac{1}{[t]} = [T^{-1}]`} important />
        </p>
      </Expandable>

      <Expandable title="P16 — Wave parameters k, ω, φ, A from y = A sin(kx + ωt + φ)" variant="exercise">
        <p>
          A wave is described by <Formula>{String.raw`y = A \sin(kx + \omega t + \phi)`}</Formula>,
          where y and x are displacements. Find the dimensions of k (wave number), ω (angular
          frequency), φ (phase angle) and A (amplitude).
        </p>
        <p>
          The whole angle inside the sine must be dimensionless, so each piece is too:
          <Formula>{String.raw`[kx + \omega t + \phi] = 1 \implies [kx] = [\omega t] = [\phi] = 1`}</Formula>.
        </p>
        <ul>
          <li>
            <strong>Wave number k:</strong>{" "}
            <Formula>{String.raw`[k]\cdot[x] = 1 \implies [k] = \frac{1}{[L]} = [L^{-1}]`}</Formula>
          </li>
          <li>
            <strong>Angular frequency ω:</strong>{" "}
            <Formula>{String.raw`[\omega]\cdot[t] = 1 \implies [\omega] = \frac{1}{[T]} = [T^{-1}]`}</Formula>
          </li>
          <li>
            <strong>Phase angle φ:</strong>{" "}
            <Formula>{String.raw`[\phi] = M^0 L^0 T^0`}</Formula> — dimensionless.
          </li>
          <li>
            <strong>Amplitude A:</strong> since <Formula>{String.raw`[\sin(\dots)] = 1`}</Formula> and{" "}
            <Formula>{String.raw`[y] = [A]`}</Formula>, we get <Formula>{String.raw`[A] = [L^1]`}</Formula>.
          </li>
        </ul>
      </Expandable>

      <Expandable title="P17 — Quantity x in the exponential law A = A₀·e^(xt)" variant="exercise">
        <p>
          The pressure of a system falls as <Formula>{String.raw`A = A_0\,e^{xt}`}</Formula>, where A
          and A₀ are pressures and t is time. Find the dimensions of x.
        </p>
        <p>
          Exponents of power terms (the argument of <Formula>{String.raw`e^{(\dots)}`}</Formula>) must
          be dimensionless:
          <FormulaBlock latex={String.raw`[xt] = 1 \implies [x]\cdot[t] = 1 \implies [x] = \frac{1}{[T]} = [T^{-1}]`} important />
        </p>
      </Expandable>

      <Expandable title="P18 — Constants a and b in the van der Waals equation" variant="exercise">
        <p>
          In the van der Waals equation{" "}
          <Formula>{String.raw`\left(P + \frac{a}{V^2}\right)(V - b) = R T`}</Formula>, find the
          dimensions of the constants a and b.
        </p>
        <ul>
          <li>
            <strong>b:</strong> only terms with identical dimensions can be subtracted, so{" "}
            <Formula>{String.raw`[b] = [V] = [L^3]`}</Formula>.
          </li>
          <li>
            <strong>a:</strong> only terms with identical dimensions can be added, so{" "}
            <Formula>{String.raw`\left[\frac{a}{V^2}\right] = [P]`}</Formula>:
            <FormulaBlock latex={String.raw`[a] = [P]\cdot[V]^2 = [M L^{-1} T^{-2}] \cdot (L^3)^2 = [M L^5 T^{-2}]`} important />
          </li>
        </ul>
      </Expandable>
      </Expandable>

      <h2 id="h-exercises">Exercises 1.1 – 1.17</h2>
      <Expandable title="Exercises 1.1 – 1.17" variant="exercise">
        <ol>
          <li>Fill in the blanks: (a) volume of a cube of side 1 cm = ..... m³; (b) surface area of a solid cylinder of radius 2.0 cm and height 10.0 cm = ... (mm)²; (c) a vehicle moving at 18 km h⁻¹ covers .... m in 1 s; (d) relative density of lead is 11.3, so its density is .... g cm⁻³ or .... kg m⁻³.</li>
          <li>Fill in the blanks by suitable conversion of units: (a) 1 kg m² s⁻² = .... g cm² s⁻²; (b) 1 m = ..... ly; (c) 3.0 m s⁻² = .... km h⁻²; (d) G = 6.67 × 10⁻¹¹ N m² (kg)⁻² = .... (cm)³ s⁻² g⁻¹.</li>
          <li>A calorie equals about 4.2 J (1 J = 1 kg m² s⁻²). In a system where the unit of mass equals α kg, of length β m and of time γ s, show that a calorie has magnitude 4.2 α⁻¹ β⁻² γ².</li>
          <li>Explain: &ldquo;To call a dimensional quantity &lsquo;large&rsquo; or &lsquo;small&rsquo; is meaningless without specifying a standard for comparison.&rdquo; Reframe the statements (a)–(f) wherever necessary.</li>
          <li>A new unit of length is chosen such that the speed of light in vacuum is unity. What is the Sun–Earth distance in the new unit if light takes 8 min 20 s to cover it?</li>
          <li>Which is the most precise device for measuring length: (a) vernier callipers with 20 divisions on the sliding scale; (b) screw gauge of pitch 1 mm and 100 divisions on the circular scale; (c) an optical instrument that can measure length to within a wavelength of light?</li>
          <li>A student measures the thickness of a human hair through a microscope of magnification 100; over 20 observations the average width in the field of view is 3.5 mm. Estimate the thickness of the hair.</li>
          <li>Answer: (a) with a thread and a metre scale, how will you estimate the diameter of the thread? (b) can you increase the accuracy of a screw gauge arbitrarily by increasing divisions on the circular scale? (c) why is a set of 100 measurements of a brass rod&apos;s diameter more reliable than 5?</li>
          <li>The photograph of a house occupies 1.75 cm² on a 35 mm slide; on the screen the house covers 1.55 m². What is the linear magnification of the projector–screen arrangement?</li>
          <li>State the number of significant figures in: (a) 0.007 m²; (b) 2.64 × 10²⁴ kg; (c) 0.2370 g cm⁻³; (d) 6.320 J; (e) 6.032 N m⁻²; (f) 0.0006032 m².</li>
          <li>A rectangular sheet of metal has length 4.234 m, breadth 1.005 m and thickness 2.01 cm. Give the area and volume of the sheet to correct significant figures.</li>
          <li>A box weighs 2.30 kg on a grocer&apos;s balance. Two gold pieces of masses 20.15 g and 20.17 g are added. Find (a) total mass of the box, (b) the difference in the masses of the pieces, to correct significant figures.</li>
          <li>A famous relation relates &lsquo;moving mass&rsquo; m to &lsquo;rest mass&rsquo; m₀ in terms of speed v and speed of light c. A boy recalls m = m₀/(1 − v²)^½ but forgets where to put c. Guess where the missing c goes.</li>
          <li>1 Å = 10⁻¹⁰ m; the size of a hydrogen atom is about 0.5 Å. What is the total atomic volume in m³ of a mole of hydrogen atoms?</li>
          <li>One mole of an ideal gas at STP occupies 22.4 L. What is the ratio of molar volume to the atomic volume of a mole of hydrogen (molecule size ~1 Å)? Why is this ratio so large?</li>
          <li>Explain: from a fast-moving train, nearby trees seem to move rapidly opposite to the train, while distant objects (hills, Moon, stars) seem stationary.</li>
          <li>The Sun is hot plasma (core &gt; 10⁷ K, surface ~6000 K). In what density range do you expect the Sun? Check from data: mass = 2.0 × 10³⁰ kg, radius = 7.0 × 10⁸ m.</li>
        </ol>
        <Expandable title="Answer Key — Exercises 1.1 – 1.17">
          <ol>
            <li>(a) 10⁻⁶ m³; (b) 1.508 × 10⁴ (mm)²; (c) 5 m; (d) 11.3 g cm⁻³ = 1.13 × 10⁴ kg m⁻³.</li>
            <li>(a) 10⁷; (b) 1.06 × 10⁻¹⁶ ly; (c) 3.9 × 10⁴ km h⁻²; (d) 6.67 × 10⁻⁸ (cm)³ s⁻² g⁻¹.</li>
            <li>Use the conversion of units: multiplying by the ratios <Formula>{String.raw`(\tfrac{\alpha\ \text{kg}}{1})`}</Formula> etc., a calorie = 4.2 J = 4.2 α⁻¹ β⁻² γ² in the new units.</li>
            <li>Every size claim needs a reference standard. Reframe with comparisons: (a) atoms are very small compared to everyday objects; (b) jet plane speed is large relative to a bicycle; (c) Jupiter&apos;s mass is large relative to Earth&apos;s; (d) the air contains a large number of molecules relative to the number of people in the room; (e) proton is more massive than an electron (≈1836×); (f) speed of sound is much smaller than the speed of light (≈10⁶×).</li>
            <li>Light takes 8 min 20 s = 500 s; in the new unit c = 1 → distance = 500 (new units).</li>
            <li>(c) — an optical instrument measuring to within a wavelength of light has the greatest resolution (least count).</li>
            <li>Thickness = 3.5 mm / 100 = 0.035 mm = 35 μm.</li>
            <li>(a) Wind the thread tightly around a pencil and divide the length of the wound turns by the number of turns; or measure many turns. (b) No — beyond the limit of the microscope/eyepiece resolution and thermal/mechanical effects, refining divisions adds no accuracy. (c) Averaging many readings reduces random errors; 100 readings give a more reliable estimate than 5.</li>
            <li>Area magnification = 1.55 / (1.75 × 10⁻⁴) = 8.86 × 10³; linear magnification = √(8.86 × 10³) ≈ 94.</li>
            <li>(a) 1; (b) 3; (c) 4; (d) 4; (e) 4; (f) 4.</li>
            <li>Area = 2(lb + bt + lt) with t = 2.01 cm = 2.010 × 10⁻² m: A ≈ 8.72 m² (3 sig. figs, limited by thickness); Volume = 4.234 × 1.005 × 0.0201 ≈ 0.0855 m³.</li>
            <li>(a) Total = 2.30 kg + 0.02015 kg + 0.02017 kg = 2.34032 kg → <strong>2.34 kg</strong> (to 2 decimal places). (b) Difference = 0.02017 − 0.02015 = 0.00002 kg = <strong>2 × 10⁻⁵ kg</strong>.</li>
            <li>The correct relativistic relation is <Formula>{String.raw`m = \frac{m_0}{\sqrt{1 - v^2/c^2}}`}</Formula> — the missing c appears squared under the root dividing v².</li>
            <li>Volume per atom ≈ (10⁻¹⁰)³ = 10⁻³⁰ m³ (taking the hydrogen atom as a cube of side 0.5 Å ≈ 5 × 10⁻¹¹ m gives ~1.6 × 10⁻³¹ m³; NCERT answer uses the atomic radius picture: atomic volume of 1 mole ≈ 3.8 × 10⁻⁷ m³).</li>
            <li>Molar volume (22.4 × 10⁻³ m³) ÷ atomic volume of a mole of hydrogen (~3.8 × 10⁻⁷ m³) ≈ 6 × 10⁴ — the ratio is huge because gas molecules are far apart compared with atoms packed in a solid.</li>
            <li>Apparent motion depends on distance: for a fixed observer speed, nearby objects sweep a larger angle per second (rapid relative motion); distant objects subtend nearly the same direction (appear stationary).</li>
            <li>Expected density: plasma gas range (orders below solids/liquids). Check: <Formula>{String.raw`\rho = \frac{M}{\frac{4}{3}\pi R^3} \approx 1.4 \times 10^3\ \text{kg m}^{-3}`}</Formula> — close to the density of liquids, because the core is enormously compressed.</li>
          </ol>
        </Expandable>
      </Expandable>

      <h2 id="h-revision">Quick Revision</h2>
      <Expandable title="Last-minute recall — formulas only">
        <ul>
          <li><Formula>{String.raw`\rho = \frac{m}{V}`}</Formula> — density (÷ : least sig. figs)</li>
          <li><Formula>{String.raw`[F] = [M L T^{-2}]`}</Formula>, <Formula>{String.raw`[E] = [M L^2 T^{-2}]`}</Formula></li>
          <li><Formula>{String.raw`T = 2\pi\sqrt{l/g}`}</Formula> — pendulum (k not from dimensions)</li>
          <li>Scientific notation: <Formula>{String.raw`a \times 10^b`}</Formula>, <Formula>{String.raw`1\le a\le 10`}</Formula></li>
          <li>1 ly = 9.46 × 10¹⁵ m; 1 Å = 10⁻¹⁰ m; 1 cal ≈ 4.2 J</li>
          <li>N_A = 6.02 × 10²³ mol⁻¹</li>
        </ul>
      </Expandable>
    </>
  );
}