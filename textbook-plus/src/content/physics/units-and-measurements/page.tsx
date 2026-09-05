import Link from "next/link";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { FormulaCard } from "@/components/content/FormulaCard";
import { ProblemSolution } from "@/components/content/ProblemSolution";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";

export default function UnitsAndMeasurementsChapter() {
  return (
    <>
      <h2 id="h-intro">1.1 Introduction</h2>
      <Callout type="important" title="Measurement — a comparison with a standard">
        Measurement of any physical quantity involves comparison with a certain basic, arbitrarily
        chosen, <Highlight color="blue">internationally accepted reference standard</Highlight> called a{" "}
        <strong>unit</strong>. The result of a measurement is expressed by a{" "}
        <strong>number (numerical measure)</strong> accompanied by a <strong>unit</strong>.
      </Callout>
      <ul>
        <li>We need only a <strong>limited number of units</strong> to express all physical quantities — the quantities are inter-related.</li>
        <li>Units for the <strong>fundamental or base quantities</strong> are called <strong>fundamental or base units</strong>.</li>
        <li>Units of all other quantities, expressed as combinations of base units, are called <strong>derived units</strong>.</li>
        <li>A complete set of base units and derived units is known as a <strong>system of units</strong>.</li>
      </ul>
      <KeyPoint>
        Physics is a quantitative science: every result must name <em>both</em> a number and a unit.
        The same physical quantity can take different numbers in different systems — the unit pins down what the number means.
      </KeyPoint>

      <h2 id="h-1-2">1.2 The International System of Units (SI)</h2>
      <p>
        Until recently, three systems were in wide use. They differed only in their base units for
        length, mass and time:
      </p>
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
        (French for <strong>International System of Units</strong>), abbreviated <strong>SI</strong>.
        It was developed by the Bureau International des Poids et Mesures (BIPM) in 1971 and revised
        by the General Conference on Weights and Measures in November 2018.
      </p>
      <ul>
        <li>SI uses the <strong>decimal system</strong>, so conversions within the system are simple and convenient.</li>
        <li>SI has <strong>seven base units</strong>. Two more units are defined for dimensionless quantities:</li>
      </ul>
      <TableCard
        caption="Table 1.1 — The seven SI base quantities and their base units (2025–26 syllabus: the exact values need not be memorised)."
        headers={["Quantity", "Unit", "Symbol"]}
        rows={[
          { cells: ["Length", "metre", "m"] },
          { cells: ["Mass", "kilogram", "kg"] },
          { cells: ["Time", "second", "s"] },
          { cells: ["Electric current", "ampere", "A"] },
          { cells: ["Thermodynamic temperature", "kelvin", "K"] },
          { cells: ["Amount of substance", "mole", "mol"] },
          { cells: ["Luminous intensity", "candela", "cd"] },
        ]}
      />
      <p>Two supplementary dimensionless units are also defined:</p>
      <ul>
        <li>
          <strong>Plane angle</strong> d<em>&theta;</em> = ratio of arc length d<em>s</em> to radius <em>r</em> —
          unit <strong>radian</strong> (rad).
        </li>
        <li>
          <strong>Solid angle</strong> d<em>&Omega;</em> = ratio of intercepted area d<em>A</em> on a sphere to
          <em> r</em><sup>2</sup> — unit <strong>steradian</strong> (sr).
        </li>
        <li>Both are <strong>dimensionless</strong> (ratio of length/length or area/area).</li>
      </ul>

      <h3 id="h-sig-defs">Defining the base units (modern SI)</h3>
      <p>
        In the 2018 revision, the base units are defined by fixing the numerical values of certain
        physical constants. The ones worth knowing:
      </p>
      <FormulaCard>
        <ul>
          <li><strong>Second</strong>: caesium-133 hyperfine frequency <Formula>{String.raw`\Delta\nu_{cs} = 9\,192\,631\,770\ \text{Hz}`}</Formula></li>
          <li><strong>Metre</strong>: speed of light <Formula>{String.raw`c = 299\,792\,458\ \text{m s}^{-1}`}</Formula></li>
          <li><strong>Kilogram</strong>: Planck constant <Formula>{String.raw`h = 6.62607015 \times 10^{-34}\ \text{J s}`}</Formula></li>
          <li><strong>Ampere</strong>: elementary charge <Formula>{String.raw`e = 1.602176634 \times 10^{-19}\ \text{C}`}</Formula></li>
          <li><strong>Kelvin</strong>: Boltzmann constant <Formula>{String.raw`k = 1.380649 \times 10^{-23}\ \text{J K}^{-1}`}</Formula></li>
          <li><strong>Mole</strong>: Avogadro constant <Formula>{String.raw`N_A = 6.02214076 \times 10^{23}\ \text{mol}^{-1}`}</Formula></li>
        </ul>
      </FormulaCard>
      <Callout type="note" title="Mole">
        When the mole is used, the <strong>elementary entities must be specified</strong> — atoms,
        molecules, ions, electrons, other particles, or specified groups of such particles.
      </Callout>

      <h2 id="h-sig-figs">1.3 Significant Figures</h2>
      <p>
        Every measurement involves errors. The reported result must indicate the{" "}
        <strong>precision</strong> of the measurement: all digits known <em>reliably</em> plus{" "}
        <strong>the first digit that is uncertain</strong>.
      </p>
      <Callout type="important" title="Definition">
        <strong>Significant digits (significant figures)</strong> = the reliable digits plus the first
        uncertain digit of a reported measurement.
      </Callout>
      <ul>
        <li>Period of a pendulum reported as 1.62 s &rarr; digits 1, 6 reliable, 2 uncertain &rarr; <strong>3 significant figures</strong>.</li>
        <li>Length reported as 287.5 cm &rarr; digits 2, 8, 7 certain, 5 uncertain &rarr; <strong>4 significant figures</strong>.</li>
        <li>Reporting <em>more</em> digits than the significant digits is <Highlight color="blue">superfluous and misleading</Highlight> — it claims a precision the instrument never had.</li>
      </ul>
      <KeyPoint title="Chosen unit ≠ precision">
        A change of units does <strong>not</strong> change the number of significant figures.
        2.308 cm = 0.02308 m = 23080 <em>&mu;</em>m all have the <strong>same four</strong> significant figures (2, 3, 0, 8).
      </KeyPoint>

      <h3 id="h-sig-count">Rules for counting significant figures</h3>
      <ul>
        <li>All <strong>non-zero digits</strong> are significant.</li>
        <li>All <strong>zeros between two non-zero digits</strong> are significant, wherever the decimal point is.</li>
        <li>For numbers less than 1, <strong>leading zeros after the decimal point</strong> (left of the first non-zero digit) are <strong>not</strong> significant. (In 0.00&nbsp;2308, the two underlined leading zeros are not significant.)</li>
        <li>Trailing zeros in a number <strong>without</strong> a decimal point are <strong>not</strong> significant (123 m = 12300 cm = 123000 mm &rarr; 3 sig. figs).</li>
        <li>Trailing zeros in a number <strong>with</strong> a decimal point <strong>are</strong> significant (3.500 and 0.06900 &rarr; 4 sig. figs each).</li>
      </ul>
      <MistakeCard
        mistake="Reporting 4700 mm for a 4.700 m length and calling it 2 significant figures."
        correction="Change of units never changes the count: 4.700 m = 470.0 cm = 4700 mm = 0.004700 km — every form has four significant figures. If in doubt, use scientific notation: 4.700 × 10³ mm."
        example="4700 mm with trailing zeros counts the same four digits as 4.700 m."
      />
      <p>
        To remove the trailing-zero ambiguity, report every measurement in{" "}
        <strong>scientific notation</strong>: <Formula>{String.raw`a \times 10^b`}</Formula> with{" "}
        <Formula>{String.raw`1 \le a \le 10`}</Formula>. All zeros in the base number are
        significant; the power of 10 is irrelevant.
      </p>
      <ul>
        <li>
          For an estimate, round <em>a</em> to 1 (for <Formula>{String.raw`a \le 5`}</Formula>) or to 10 (for{" "}
          <Formula>{String.raw`5 < a \le 10`}</Formula>). The exponent <em>b</em> is the{" "}
          <strong>order of magnitude</strong>.
        </li>
        <li>
          Earth&rsquo;s diameter <Formula>{String.raw`1.28\times10^7\ \text{m}`}</Formula> &rarr; order{" "}
          <Formula>{String.raw`10^7\ \text{m}`}</Formula> (order of magnitude 7). Hydrogen atom diameter{" "}
          <Formula>{String.raw`1.06\times10^{-10}\ \text{m}`}</Formula> &rarr; order{" "}
          <Formula>{String.raw`10^{-10}\ \text{m}`}</Formula>.
        </li>
        <li>The Earth is <strong>17 orders of magnitude larger</strong> than the hydrogen atom.</li>
      </ul>
      <MetricCard
        label="Order of magnitude gap"
        value="17"
        unit="orders of magnitude"
        trend="up"
        description="Diameter of Earth (10⁷ m) vs diameter of a hydrogen atom (10⁻¹⁰ m): 7 − (−10) = 17."
      />
      <p>
        Exact numbers in formulae (the 2 in <Formula>{String.raw`d = 2r`}</Formula> or <Formula>{String.raw`T = t/n`}</Formula>)
        have <strong>infinite</strong> significant figures; <Formula>2\pi</Formula> in{" "}
        <Formula block>{String.raw`T = 2\pi\sqrt{l/g}`}</Formula> is treated the same way.
      </p>

      <h3 id="h-sig-arithmetic">1.3.1 Arithmetic operations with significant figures</h3>
      <p>
        A calculated result <strong>cannot be more accurate</strong> than the least precise input on
        which it relies.
      </p>
      <FormulaCard>
        <ul>
          <li>
            <strong>Multiplication / Division:</strong> keep as many significant figures as the input
            with the <strong>least</strong> significant figures.
          </li>
          <li>
            <strong>Addition / Subtraction:</strong> keep as many <strong>decimal places</strong> as
            the input with the <strong>least</strong> decimal places.
          </li>
        </ul>
      </FormulaCard>
      <ul>
        <li>
          Mass 4.237 g (4 sig. figs) ÷ volume 2.51 cm³ (3 sig. figs) &rarr; density reported to{" "}
          <strong>3 significant figures</strong>:
          <FormulaBlock latex={String.raw`\rho = \frac{4.237\ \text{g}}{2.51\ \text{cm}^3} = 1.69\ \text{g cm}^{-3}`} important />
        </li>
        <li>
          436.32 g + 227.2 g + 0.301 g = 663.821 g arithmetically, but 227.2 g is correct to one
          decimal place &rarr; report <strong>663.8 g</strong>.
        </li>
        <li>
          <Formula>{String.raw`0.307\ \text{m} - 0.304\ \text{m} = 0.003\ \text{m} = 3\times10^{-3}\ \text{m}`}</Formula>{" "}
          (decimal places decide, not significant figures).
        </li>
      </ul>
      <MistakeCard
        mistake="Rounding an addition to significant figures (664 g) or a subtraction to 3.00 × 10⁻³ m — applying the multiplication/division rule to the wrong operation."
        correction="Addition and subtraction count decimal places, not significant figures. For 0.307 − 0.304 write 3 × 10⁻³ m (one significant digit), never 3.00 × 10⁻³ m here."
      />

      <h3 id="h-sig-rounding">1.3.2 Rounding off the uncertain digits</h3>
      <ul>
        <li>Drop the insignificant digit: raise the preceding digit by 1 if it is <strong>more than 5</strong>; leave it if <strong>less than 5</strong>.</li>
        <li>If the dropped digit is exactly <strong>5</strong>: drop it when the preceding digit is <strong>even</strong>, raise by 1 when it is <strong>odd</strong>.</li>
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

      <h3 id="h-sig-uncertainty">1.3.3 Uncertainty in the results of arithmetic calculations</h3>
      <ul>
        <li>
          <strong>Product rule:</strong> relative errors add. For a sheet with l = 16.2 ± 0.1 cm (0.6%) and
          b = 10.1 ± 0.1 cm (1%):
          <FormulaBlock latex={String.raw`l \times b = 163.62\ \text{cm}^2 \pm 1.6\% = 163.62 \pm 2.6\ \text{cm}^2`} />
          Final result: <Formula>{String.raw`l \times b = 164 \pm 3\ \text{cm}^2`}</Formula> — 3 cm² is the uncertainty in the area.
        </li>
        <li>
          <strong>Subtraction can destroy significance:</strong> 12.9 g − 7.06 g, both given to 3 sig.
          figs, can only be written as <strong>5.8 g</strong> — uncertainties combine in a different
          fashion for sums and differences (decimal places, not sig. figs).
        </li>
        <li>
          <strong>Relative error depends on the number too:</strong> 1.02 g ± 0.01 g has relative error ±1%,
          while 9.89 g ± 0.01 g has relative error ±0.1%.
        </li>
      </ul>

      <h2 id="h-1-4">1.4 Dimensions of Physical Quantities</h2>
      <Callout type="important" title="Definition">
        The <strong>dimensions</strong> of a physical quantity are the{" "}
        <Highlight color="blue">powers (exponents) to which the base quantities are raised</Highlight>{" "}
        to represent that quantity. Writing [quantity] means &ldquo;the dimensions of&rdquo; the quantity.
      </Callout>
      <ul>
        <li>The seven base quantities form the <strong>seven dimensions</strong>: length [L], mass [M], time [T], electric current [A], thermodynamic temperature [K], luminous intensity [cd], amount of substance [mol].</li>
        <li>In mechanics everything reduces to <strong>[L], [M], [T]</strong>.</li>
        <li>Dimensions carry <strong>no magnitudes</strong> — only the type of quantity matters.</li>
      </ul>
      <FormulaCard>
        <ul>
          <li>Volume = L × L × L &rarr; <strong>[L<sup>3</sup>]</strong> (zero dimensions in mass and time)</li>
          <li>Force = mass × acceleration <Formula>{String.raw`= [M]\times\frac{[L]}{[T]^2}`}</Formula> &rarr; <strong>[M L T<sup>−2</sup>]</strong></li>
          <li>Velocity, speed, initial/final/average velocity &rarr; all <strong>[L T<sup>−1</sup>]</strong></li>
        </ul>
      </FormulaCard>
      <KeyPoint>
        Because dimensions ignore magnitudes, <em>speed</em>, <em>velocity</em>, and all velocity-like
        quantities are dimensionally identical — a change of position per unit time is [L T⁻¹] in every case.
      </KeyPoint>

      <h2 id="h-1-5">1.5 Dimensional Formulae and Dimensional Equations</h2>
      <ul>
        <li>
          <strong>Dimensional formula:</strong> how and which base quantities represent the dimensions of a quantity.
        </li>
        <li>
          <strong>Dimensional equation:</strong> the physical quantity equated to its dimensional formula.
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
      <p>
        Only physical quantities of <strong>the same dimensions</strong> can be added or subtracted.
        When magnitudes are multiplied, their units are treated like algebraic symbols — identical
        units cancel, and the same is true of dimensions. This whole toolkit is{" "}
        <strong>dimensional analysis</strong>.
      </p>

      <h3 id="h-1-6-1">1.6.1 Checking the dimensional consistency of equations</h3>
      <Callout type="important" title="Principle of homogeneity of dimensions">
        An equation can be correct only if every term on both sides has the <Highlight color="blue">same dimensions</Highlight>.
        Velocity cannot be added to force; electric current cannot be subtracted from temperature.
      </Callout>
      <ul>
        <li>Arguments of trigonometric, logarithmic and exponential <strong>functions must be dimensionless</strong>.</li>
        <li>Ratios of similar quantities — angle (length/length), refractive index (c₀/c<sub>m</sub>) — are dimensionless.</li>
        <li>
          If an equation fails the test it is <strong>proved wrong</strong>; if it passes it is{" "}
          <strong>not proved right</strong> — dimensionless factors can hide in front.
        </li>
      </ul>
      <Expandable title="Consistency test — x = x₀ + v₀t + ½at²" variant="default">
        <p>For a particle starting at x₀ with velocity v₀ and uniform acceleration a:</p>
        <ul>
          <li><Formula>{String.raw`[x] = [L]`}</Formula> and <Formula>{String.raw`[x_0] = [L]`}</Formula></li>
          <li><Formula>{String.raw`[v_0 t] = [L T^{-1}][T] = [L]`}</Formula></li>
          <li><Formula>{String.raw`[\tfrac{1}{2} a t^2] = [L T^{-2}][T^2] = [L]`}</Formula></li>
        </ul>
        <p>Every term has the dimension of length &rarr; the equation is <strong>dimensionally correct</strong>.</p>
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
      <p>The method of dimensions can sometimes <strong>deduce a relation</strong> among quantities, assuming a product-type dependence (up to three linearly independent variables). The dimensionless constant k can never be found this way — it requires experiment or a deeper theory.</p>
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
            <Formula>{String.raw`T = 2\pi\sqrt{l/g}`}</Formula>. <Highlight color="blue">The period of a simple pendulum is independent of the bob&apos;s mass.</Highlight>
          </p>
        </ProblemSolution.Solution>
      </Expandable>
      <Callout type="warning" title="Limitations of dimensional analysis">
        <ul>
          <li>Dimensionless constants (like 2π) can never be obtained by this method.</li>
          <li>It tests dimensional validity only — not the exact relationship.</li>
          <li>It cannot distinguish quantities with the same dimensions (e.g., work and torque).</li>
        </ul>
      </Callout>

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
      <Expandable title="Key formulas &amp; facts — one page">
        <p><strong>1. Measurement &amp; units</strong></p>
        <ul>
          <li>Base quantity → fundamental unit; derived quantities → combinations of base units.</li>
          <li>Seven SI base units: m, kg, s, A, K, mol, cd. Plane angle (rad) and solid angle (sr) are dimensionless.</li>
          <li>2018 SI: second ↔ Δν_cs; metre ↔ c; kilogram ↔ h; ampere ↔ e; kelvin ↔ k; mole ↔ N_A.</li>
        </ul>
        <p><strong>2. Significant figures</strong></p>
        <ul>
          <li>Count = reliable digits + first uncertain digit. Change of units never changes the count.</li>
          <li>Leading zeros: not significant. Trailing zeros: significant only with a decimal point.</li>
          <li>× / ÷ → least number of significant figures. + / − → least number of decimal places.</li>
          <li>Rounding: &gt;5 raise, &lt;5 leave, exactly 5 → even preceding digit drops, odd raises.</li>
          <li>Keep one extra digit through multi-step calculations; round off only at the end.</li>
        </ul>
        <p><strong>3. Dimensions</strong></p>
        <ul>
          <li>Volume [L³], velocity [L T⁻¹], acceleration [L T⁻²], force [M L T⁻²], density [M L⁻³], energy [M L² T⁻²].</li>
          <li>Only same-dimension quantities can be added/subtracted; function arguments must be dimensionless.</li>
          <li>Homogeneity: dimensionally wrong ⇒ certainly wrong; dimensionally correct ⇒ not proved right.</li>
          <li>Method of dimensions can deduce product-form relations but never the dimensionless constant k.</li>
        </ul>
      </Expandable>
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