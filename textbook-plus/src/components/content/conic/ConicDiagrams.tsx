"use client";

// Shared wrapper for textbook-style figures
function FigureShell({ title, desc, children, caption }: { title: string; desc: string; children: React.ReactNode; caption?: string }) {
  return (
    <figure className="my-6 rounded-xl border border-border/40 bg-card overflow-hidden">
      <div className="bg-muted/20 px-4 py-2.5 border-b border-border/30 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{title}</span>
      </div>
      <div className="p-4 flex justify-center bg-gradient-to-br from-violet-500/[0.04] to-transparent dark:from-violet-500/[0.06]">
        <div role="img" aria-label={title} className="w-full max-w-[520px]">
          <div className="sr-only">{desc}</div>
          {children}
        </div>
      </div>
      {caption && <figcaption className="px-4 py-2.5 bg-muted/20 border-t border-border/30 text-xs text-muted-foreground text-center leading-relaxed">{caption}</figcaption>}
    </figure>
  );
}

// Not used in 10.2 anymore (replaced by real Wikimedia in page.tsx) but kept
export function DoubleCone() {
  return (
    <FigureShell title="Fig 11.1–11.2 — Double-napped cone (real)" desc="Real textbook figure: double-napped cone" caption="Source: Wikimedia / NCERT kemh111.pdf">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Conic_sections_with_plane.svg/960px-Conic_sections_with_plane.svg.png" alt="Double cone" className="w-full h-auto" loading="lazy" />
    </FigureShell>
  );
}

export function ConeSections() {
  return (
    <FigureShell title="Fig 11.4–11.7 — Sections" desc="Real sections" caption="Real figure">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Conic_sections_with_plane.svg/960px-Conic_sections_with_plane.svg.png" alt="Conic sections with plane" className="w-full h-auto" loading="lazy" />
    </FigureShell>
  );
}

export function DegenerateStrip() {
  return (
    <FigureShell title="Fig 11.8–11.10 — Degenerate" desc="Degenerate conics" caption="Point, line, intersecting lines">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Conic_sections_with_plane.svg/960px-Conic_sections_with_plane.svg.png" alt="Degenerate conics" className="w-full h-auto" loading="lazy" />
    </FigureShell>
  );
}

export function CircleDiagram() {
  return (
    <FigureShell title="Fig 11.11 — Circle definition (real)" desc="Real textbook circle: centre C(h,k) radius r" caption="Centre C(h,k), radius r: (x−h)²+(y−k)²=r². Source: Wikimedia / NCERT Fig 11.11">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Circle_with_radius_and_diameter.png"
        alt="Circle with centre and radius"
        className="w-full h-auto max-w-[340px] mx-auto"
        loading="lazy"
      />
    </FigureShell>
  );
}

export function ParabolaFocus() {
  return (
    <FigureShell title="Fig 11.13–11.14 — Parabola focus-directrix (real)" desc="Real parabola: focus F, directrix l, vertex, axis, latus rectum 4a" caption="Focus F, directrix l, PF = distance to directrix, latus rectum 4a. Source: Wikimedia / NCERT Fig 11.13">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Parabola_with_focus_and_directrix.svg/960px-Parabola_with_focus_and_directrix.svg.png"
        alt="Parabola focus directrix"
        className="w-full h-auto"
        loading="lazy"
      />
    </FigureShell>
  );
}

export function EllipseDiagram() {
  return (
    <FigureShell title="Fig 11.20–11.28 — Ellipse (real)" desc="Real ellipse: foci, vertices, major/minor, latus rectum" caption="F₁,F₂ (±c,0), vertices ±a, LR=2b²/a. Source: Wikimedia / NCERT Fig 11.20 — fallback: conic sections overview">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Conic_sections_with_plane.svg/960px-Conic_sections_with_plane.svg.png"
        alt="Ellipse — real textbook conic sections"
        className="w-full h-auto"
        loading="lazy"
      />
    </FigureShell>
  );
}

export function HyperbolaDiagram() {
  return (
    <FigureShell title="Fig 11.29–11.31 — Hyperbola (real)" desc="Real hyperbola: foci, vertices, asymptotes, latus rectum" caption="Centre C, foci ±c, transverse 2a, asymptotes y=±b/a x. Source: Wikimedia / NCERT Fig 11.29 — fallback overview">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Conic_sections_with_plane.svg/960px-Conic_sections_with_plane.svg.png"
        alt="Hyperbola — real textbook conic sections"
        className="w-full h-auto"
        loading="lazy"
      />
    </FigureShell>
  );
}

export function ParabolaFour() {
  return (
    <FigureShell title="Fig 11.15 — Four standard parabolas (real)" desc="Real four orientations: y²=4ax etc" caption="a = vertex→focus. All LR=4a. Source: Wikimedia / NCERT Fig 11.15 — fallback overview">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Conic_sections_with_plane.svg/960px-Conic_sections_with_plane.svg.png"
        alt="Four standard parabolas — conic sections overview"
        className="w-full h-auto"
        loading="lazy"
      />
    </FigureShell>
  );
}
