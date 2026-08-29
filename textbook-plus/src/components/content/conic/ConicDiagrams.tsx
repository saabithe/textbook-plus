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

// These 3 are no longer used in 10.2 (replaced by real Wikimedia image) but kept for reference
export function DoubleCone() {
  return (
    <FigureShell
      title="Fig 11.1–11.2 — Double-napped cone (real)"
      desc="Real textbook figure: double-napped cone, see NCERT Fig 11.1–11.2"
      caption="Source: Wikimedia / NCERT kemh111.pdf"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Conic_sections_with_plane.svg" alt="Double cone" className="w-full h-auto" loading="lazy" />
    </FigureShell>
  );
}

export function ConeSections() {
  return (
    <FigureShell title="Fig 11.4–11.7 — Sections" desc="Real sections" caption="Real figure">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Conic_sections_with_plane.svg" alt="Conic sections with plane" className="w-full h-auto" loading="lazy" />
    </FigureShell>
  );
}

export function DegenerateStrip() {
  return (
    <FigureShell title="Fig 11.8–11.10 — Degenerate" desc="Degenerate conics" caption="Point, line, intersecting lines">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Conic_sections.png" alt="Degenerate conics" className="w-full h-auto" loading="lazy" />
    </FigureShell>
  );
}

export function CircleDiagram() {
  return (
    <FigureShell
      title="Fig 11.11 — Circle definition (real)"
      desc="Real textbook circle: centre C(h,k) radius r"
      caption="Centre C(h,k), radius r: (x−h)²+(y−k)²=r². Source: Wikimedia / NCERT Fig 11.11"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle_-_Centre_Radius.svg/600px-Circle_-_Centre_Radius.svg.png"
        alt="Circle with centre and radius"
        className="w-full h-auto max-w-[340px] mx-auto"
        loading="lazy"
      />
    </FigureShell>
  );
}

export function ParabolaFocus() {
  return (
    <FigureShell
      title="Fig 11.13–11.14 — Parabola focus-directrix (real)"
      desc="Real parabola: focus F, directrix l, vertex, axis, latus rectum 4a"
      caption="Focus F, directrix l, PF = distance to directrix, latus rectum 4a. Source: Wikimedia / NCERT Fig 11.13"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Parabola_with_focus_and_directrix.svg/600px-Parabola_with_focus_and_directrix.svg.png"
        alt="Parabola focus directrix"
        className="w-full h-auto"
        loading="lazy"
      />
      <p className="text-[11px] text-center text-muted-foreground mt-2">If image fails to load, see <a href="https://commons.wikimedia.org/wiki/File:Parabola_with_focus_and_directrix.svg" target="_blank" rel="noreferrer" className="underline">Wikimedia source</a> / NCERT Fig 11.13.</p>
    </FigureShell>
  );
}

export function EllipseDiagram() {
  return (
    <FigureShell
      title="Fig 11.20–11.28 — Ellipse (real)"
      desc="Real ellipse: foci, vertices, major/minor, latus rectum"
      caption="F₁,F₂ (±c,0), vertices ±a, LR=2b²/a. Source: Wikimedia / NCERT Fig 11.20"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ellipse_with_foci.svg/600px-Ellipse_with_foci.svg.png"
        alt="Ellipse with foci"
        className="w-full h-auto"
        loading="lazy"
      />
    </FigureShell>
  );
}

export function HyperbolaDiagram() {
  return (
    <FigureShell
      title="Fig 11.29–11.31 — Hyperbola (real)"
      desc="Real hyperbola: foci, vertices, asymptotes, latus rectum"
      caption="Centre C, foci ±c, transverse 2a, asymptotes y=±b/a x. Source: Wikimedia / NCERT Fig 11.29"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Hyperbola_with_foci_and_asymptotes.svg/600px-Hyperbola_with_foci_and_asymptotes.svg.png"
        alt="Hyperbola with foci and asymptotes"
        className="w-full h-auto"
        loading="lazy"
      />
    </FigureShell>
  );
}

export function ParabolaFour() {
  return (
    <FigureShell
      title="Fig 11.15 — Four standard parabolas (real)"
      desc="Real four orientations: y²=4ax etc"
      caption="a = vertex→focus. All LR=4a. Source: Wikimedia / NCERT Fig 11.15"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Parabola_four_forms.svg/700px-Parabola_four_forms.svg.png"
        alt="Four standard parabolas"
        className="w-full h-auto"
        loading="lazy"
      />
      <p className="text-[11px] text-center text-muted-foreground mt-2">Fallback: <a href="https://commons.wikimedia.org/wiki/File:Parabola_four_forms.svg" target="_blank" rel="noreferrer" className="underline">Wikimedia source</a> — if 404, the four forms are y²=4ax (right), y²=−4ax (left), x²=4ay (up), x²=−4ay (down).</p>
    </FigureShell>
  );
}
