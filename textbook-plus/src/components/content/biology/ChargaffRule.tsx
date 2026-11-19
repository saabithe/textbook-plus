import { Expandable } from "@/components/content/Expandable";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { TableCard } from "@/components/content/data/TableCard";

export function ChargaffPrinciple() {
  return (
    <>
      <p className="my-4 text-sm leading-relaxed text-foreground">
        <strong>Proposed by:</strong> Erwin Chargaff.
      </p>
      <p className="my-4 text-sm leading-relaxed text-foreground">
        Applicable to <Highlight color="yellow">double-stranded DNA</Highlight>.
      </p>
      <p className="my-4 text-sm leading-relaxed text-foreground">According to Chargaff&apos;s rule:</p>
      <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
        <li><strong>Adenine (A) = Thymine (T).</strong></li>
        <li><strong>Guanine (G) = Cytosine (C).</strong></li>
        <li><strong>Total purines = Total pyrimidines.</strong></li>
      </ul>
      <FormulaBlock latex={String.raw`\boxed{A=T,\quad G=C}`} important />
      <FormulaBlock latex={String.raw`A+G=T+C`} />
      <FormulaBlock latex={String.raw`\boxed{\frac{A+G}{T+C}=1}`} important />
    </>
  );
}

export function ChargaffSolvedExample() {
  return (
    <Expandable title="Solved example — Adenine = 22%" variant="example">
      <p className="mb-5 text-sm leading-relaxed text-foreground">
        <strong>Problem:</strong> In a DNA molecule, Adenine = 22%. Find the percentages of Cytosine, Thymine and Guanine.
      </p>

      <Stepper
        steps={[
          {
            label: "Apply base-pair equality",
            description: (
              <div className="space-y-1">
                <Formula>{String.raw`A=T`}</Formula>
                <Formula>{String.raw`T=22\%`}</Formula>
              </div>
            ),
          },
          {
            label: "Calculate remaining percentage",
            description: (
              <div className="space-y-1">
                <Formula>{String.raw`A+T=22+22=44\%`}</Formula>
                <Formula>{String.raw`G+C=100-44=56\%`}</Formula>
              </div>
            ),
          },
          {
            label: "Divide equally",
            description: (
              <div className="space-y-1">
                <p className="text-sm">Since <Formula>{String.raw`G=C`}</Formula>:</p>
                <Formula>{String.raw`G=C=\frac{56}{2}=28\%`}</Formula>
              </div>
            ),
          },
        ]}
      />

      <TableCard
        title="Final answer"
        headers={["Nitrogenous base", "Percentage"]}
        rows={[
          { cells: ["Adenine (A)", "22%"] },
          { cells: ["Thymine (T)", "22%"] },
          { cells: ["Guanine (G)", "28%"] },
          { cells: ["Cytosine (C)", "28%"] },
          { cells: [<strong key="total">Total</strong>, <strong key="total-value">100%</strong>] },
        ]}
        caption="Verified"
      />
    </Expandable>
  );
}
