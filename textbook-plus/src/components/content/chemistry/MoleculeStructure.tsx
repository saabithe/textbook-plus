import { cn } from "@/lib/utils";

/**
 * An inline chemical structure drawing.
 *
 * The SVG is generated at authoring time from a committed SMILES string by
 * `scripts/chem/build_structures.py` — never drawn by hand, never fetched at
 * runtime. Inlining (rather than <img>) means the drawing inherits the page
 * colour, so a single file works in light and dark mode.
 *
 * Usage — spread the generated data:
 *   import { STRUCTURES } from "./structures.generated";
 *   <MoleculeStructure {...STRUCTURES.ethanol} caption="Ethanol — the –OH makes it a polar solvent." />
 */
interface MoleculeStructureProps {
  /** Generated SVG markup (from structures.generated.ts). */
  svg: string;
  /** Canonical isomeric SMILES, shown only when showSmiles is set. */
  smiles?: string;
  /** Molecular formula, e.g. "C2H6O". */
  formula?: string;
  /** Molar mass in g/mol. */
  mw?: number;
  /** One line saying what the reader should notice. */
  caption?: string;
  /** Where the structure comes from, e.g. "§6.3, p.171". */
  source?: string;
  /** Reveal the SMILES behind the drawing (default off). */
  showSmiles?: boolean;
  /** Boxed drawing (default) or bare drawing for tight layouts. */
  variant?: "boxed" | "plain";
  /** Cap the drawing width in pixels; it still shrinks on small screens. */
  maxWidth?: number;
  className?: string;
}

export function MoleculeStructure({
  svg,
  smiles,
  formula,
  mw,
  caption,
  source,
  showSmiles = false,
  variant = "boxed",
  maxWidth = 420,
  className,
}: MoleculeStructureProps) {
  const label = caption ?? formula ?? "Chemical structure";

  return (
    <figure
      className={cn("my-6 print:break-inside-avoid", className)}
      style={{ maxWidth }}
    >
      <div
        role="img"
        aria-label={label}
        className={cn(
          "flex items-center justify-center overflow-hidden [&_svg]:h-auto [&_svg]:w-full [&_svg]:max-w-full",
          variant === "boxed" &&
            "rounded-2xl border border-border/60 bg-card/50 px-3 py-3 shadow-sm print:border-border",
        )}
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      {(caption || formula) && (
        <figcaption className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
          {caption && <span className="text-foreground/80">{caption}</span>}
          {caption && formula && <span className="mx-1.5 opacity-40">·</span>}
          {formula && (
            <span className="whitespace-nowrap font-medium tabular-nums">
              {formula}
              {mw !== undefined && <span className="opacity-60"> ({mw} g/mol)</span>}
            </span>
          )}
          {source && <span className="ms-1.5 text-xs opacity-60">{source}</span>}
        </figcaption>
      )}

      {showSmiles && smiles && (
        <details className="mt-1 text-center">
          <summary className="cursor-pointer list-none text-xs text-muted-foreground/70 underline-offset-2 hover:underline">
            SMILES
          </summary>
          <code className="mt-1 block break-all text-xs text-muted-foreground">{smiles}</code>
        </details>
      )}
    </figure>
  );
}
