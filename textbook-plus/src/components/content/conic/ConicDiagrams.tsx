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
    <FigureShell title="Fig 11.20–11.28 — Ellipse (real)" desc="Real ellipse: foci, vertices, major/minor, latus rectum" caption="F₁,F₂ (±c,0), vertices ±a, LR=2b²/a. Source: Wikimedia / Ellipse.svg (Zorgit, CC0) — NCERT Fig 11.20">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ellipse.svg/500px-Ellipse.svg.png"
        alt="Ellipse with foci"
        className="w-full h-auto max-w-[380px] mx-auto"
        loading="lazy"
      />
    </FigureShell>
  );
}

export function HyperbolaDiagram() {
  return (
    <FigureShell title="Fig 11.29–11.31 — Hyperbola (real)" desc="Real hyperbola: foci, vertices, asymptotes, latus rectum" caption="Centre C, foci ±c, transverse 2a, asymptotes. Source: Wikimedia / Hyperbola.svg (DieBuche, PD) — NCERT Fig 11.29">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Hyperbola.svg/960px-Hyperbola.svg.png"
        alt="Hyperbola"
        className="w-full h-auto max-w-[380px] mx-auto"
        loading="lazy"
      />
    </FigureShell>
  );
}

export function ParabolaFour() {
  return (
    <FigureShell title="Fig 11.15 — Four standard parabolas" desc="Four orientations: y²=4ax (right), y²=−4ax (left), x²=4ay (up), x²=−4ay (down)" caption="a = vertex→focus, LR=4a. Custom 2×2 grid — each mini shows one orientation (blue parabola, red focus).">
      <div className="grid grid-cols-2 gap-3">
        {[
          { eq: "y²=4ax", dir: "→ right", f: "(a,0)", d: "x=−a" },
          { eq: "y²=−4ax", dir: "← left", f: "(−a,0)", d: "x=a" },
          { eq: "x²=4ay", dir: "↑ up", f: "(0,a)", d: "y=−a" },
          { eq: "x²=−4ay", dir: "↓ down", f: "(0,−a)", d: "y=a" },
        ].map((x) => (
          <div key={x.eq} className="rounded-lg border border-border/30 bg-background p-2">
            <p className="text-xs font-mono font-semibold text-center text-violet-700 dark:text-violet-300">{x.eq}</p>
            <p className="text-[10px] text-center text-muted-foreground">{x.dir} • F{x.f} • {x.d}</p>
            <svg viewBox="0 0 100 70" className="w-full h-auto mt-1">
              <line x1="10" y1="35" x2="90" y2="35" stroke="#cbd5e1" strokeWidth="0.8" />
              <line x1="50" y1="5" x2="50" y2="65" stroke="#cbd5e1" strokeWidth="0.8" />
              <path
                d={
                  x.eq.includes("y²=4a")
                    ? "M50 35 Q65 20 85 10 Q65 35 85 60 Q65 50 50 35"
                    : x.eq.includes("y²=-4a")
                    ? "M50 35 Q35 20 15 10 Q35 35 15 60 Q35 50 50 35"
                    : x.eq.includes("x²=4a")
                    ? "M50 35 Q35 20 20 10 Q50 25 80 10 Q65 20 50 35"
                    : "M50 35 Q35 50 20 60 Q50 45 80 60 Q65 50 50 35"
                }
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1.6"
              />
              <circle cx={x.eq.includes("4ax") ? 60 : x.eq.includes("-4ax") ? 40 : 50} cy={x.eq.includes("4ay") ? 45 : x.eq.includes("-4ay") ? 25 : 35} r="1.5" fill="#ef4444" />
            </svg>
          </div>
        ))}
      </div>
    </FigureShell>
  );
}
