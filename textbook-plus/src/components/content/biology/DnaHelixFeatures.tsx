import { FormulaBlock } from "@/components/content/Formula";
import { TableCard } from "@/components/content/data/TableCard";
import { DnaBasePairingDiagram } from "@/components/content/biology/DnaBasePairingDiagram";
import { DnaDoubleHelixDiagram } from "@/components/content/biology/DnaDoubleHelixDiagram";

export function PolynucleotideStrands() {
  return (
    <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
      <li><strong>Two polynucleotide chains.</strong> DNA consists of two of them.</li>
      <li><strong>Sugar-phosphate backbone.</strong> Each chain has one.</li>
      <li><strong>Inward-facing bases.</strong> Nitrogenous bases project towards the inside of the double helix.</li>
    </ul>
  );
}

export function AntiparallelPolarity() {
  return (
    <>
      <p className="my-4 text-sm leading-relaxed text-foreground">The two strands run in opposite directions:</p>
      <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
        <div className="border-b border-border bg-muted/30 px-4 py-2.5 text-center text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
          Antiparallel arrangement
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2">
          <div className="bg-card px-4 py-5 text-center">
            <div className="t-micro">Strand 1</div>
            <p className="mt-2 text-2xl font-bold tracking-tight tabular-nums text-sky-700 dark:text-sky-300">5′ → 3′</p>
          </div>
          <div className="bg-card px-4 py-5 text-center">
            <div className="t-micro">Strand 2</div>
            <p className="mt-2 text-2xl font-bold tracking-tight tabular-nums text-rose-700 dark:text-rose-300">3′ → 5′</p>
          </div>
        </div>
      </div>
      <p className="my-4 text-sm leading-relaxed text-foreground">
        The two complementary strands have opposite polarity.
      </p>
    </>
  );
}

export function ComplementaryBasePairing() {
  return (
    <>
      <p className="my-4 text-sm leading-relaxed text-foreground">
        The two strands are connected by <strong>hydrogen bonds</strong> between complementary nitrogenous bases.
      </p>
      <TableCard
        headers={["Base pair", "Hydrogen bonds"]}
        rows={[
          { cells: ["Adenine – Thymine (A=T)", <strong key="at">2</strong>] },
          { cells: ["Guanine – Cytosine (G≡C)", <strong key="gc">3</strong>] },
        ]}
      />
      <p className="mt-6 text-sm font-bold tracking-tight text-foreground">Purine–Pyrimidine pairing</p>
      <ul className="my-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
        <li><strong>Purine with pyrimidine.</strong> A purine always pairs with a pyrimidine.</li>
        <li><strong>Uniform distance.</strong> This maintains a constant separation between the two DNA strands.</li>
      </ul>
      <DnaBasePairingDiagram />
    </>
  );
}

const DIMENSIONS = [
  { value: "10 bp", label: "Base pairs per turn" },
  { value: "3.4 nm", label: "Pitch of helix" },
  { value: "0.34 nm", label: "Distance between adjacent base pairs" },
] as const;

export function HelicalDimensions() {
  return (
    <>
      <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
        <li><strong>Right-handed coiling.</strong> The two polynucleotide strands are coiled in a right-handed fashion.</li>
        <li><strong>Stacked base pairs.</strong> Base pairs are stacked one above another.</li>
      </ul>

      <p className="mt-6 text-sm font-bold tracking-tight text-foreground">Important dimensions</p>
      <div className="my-3 grid gap-3 sm:grid-cols-3">
        {DIMENSIONS.map((item) => (
          <div key={item.value} className="rounded-xl border border-border bg-gradient-to-b from-card to-muted/30 p-4 text-center">
            <p className="text-2xl font-bold tracking-tight tabular-nums text-foreground">{item.value}</p>
            <p className="t-micro mt-2">{item.label}</p>
          </div>
        ))}
      </div>

      <FormulaBlock latex={String.raw`10\text{ bp}\times0.34\text{ nm}=3.4\text{ nm}`} important />

      <p className="my-4 text-sm leading-relaxed text-foreground">Therefore:</p>
      <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
        <li><strong>One complete turn = 10 base pairs.</strong></li>
        <li><strong>One complete turn = 3.4 nm.</strong></li>
        <li><strong>Adjacent base pairs = 0.34 nm apart.</strong></li>
      </ul>

      <DnaDoubleHelixDiagram />
    </>
  );
}
