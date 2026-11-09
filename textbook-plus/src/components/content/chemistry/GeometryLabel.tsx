type GeometryKind = "tetrahedral" | "trigonal-bipyramidal" | "octahedral";

/**
 * GeometryGlyph — schematic 2D projection: the coordination polyhedron reduced
 * to its outline plus the axial vertices, which is enough to tell the three
 * geometries apart at table size.
 */
function GeometryGlyph({ kind }: { kind: GeometryKind }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[var(--subject-chemistry)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "tetrahedral" && (
        <>
          <polygon points="12,3 21,19 3,19" />
          <circle cx="12" cy="13.5" r="1.3" fill="currentColor" stroke="none" />
        </>
      )}
      {kind === "trigonal-bipyramidal" && (
        <>
          <polygon points="12,8 20,18 4,18" />
          <circle cx="12" cy="2.5" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="12" cy="22" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="12" cy="13.5" r="1.3" fill="currentColor" stroke="none" />
        </>
      )}
      {kind === "octahedral" && (
        <>
          <polygon points="4,4 20,4 20,20 4,20" />
          <circle cx="12" cy="2" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="12" cy="22" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
        </>
      )}
    </svg>
  );
}

/**
 * GeometryLabel — the coordination geometry as a glyph plus its name, for the
 * carbonyl comparison table.
 */
export function GeometryLabel({
  kind,
  label,
}: {
  kind: GeometryKind;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <GeometryGlyph kind={kind} />
      <span className="font-semibold text-foreground">{label}</span>
    </span>
  );
}
