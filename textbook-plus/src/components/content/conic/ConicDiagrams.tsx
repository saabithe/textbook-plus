"use client";

import { cn } from "@/lib/utils";

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

export function DoubleCone() {
  return (
    <FigureShell
      title="Fig 11.1–11.2 — Double-napped cone"
      desc="Double-napped right circular cone with vertex V, axis l, generator m inclined at angle alpha, extending both directions"
      caption="l = axis (vertical), m = generator, V = vertex, α = angle between l and m. Rotating m about l generates the double cone."
    >
      <svg viewBox="0 0 340 220" className="w-full h-auto">
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#94a3b8" /></marker>
        </defs>
        {/* upper nappe */}
        <path d="M170 110 L 80 40 L 260 40 Z" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.9" />
        <ellipse cx="170" cy="40" rx="90" ry="18" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1.2" />
        {/* lower nappe */}
        <path d="M170 110 L 80 180 L 260 180 Z" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.7" />
        <ellipse cx="170" cy="180" rx="90" ry="18" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.2" />
        {/* axis l */}
        <line x1="170" y1="15" x2="170" y2="205" stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 3" markerEnd="url(#arr)" />
        <text x="178" y="22" fontSize="11" fill="#475569">l (axis)</text>
        {/* generator m */}
        <line x1="170" y1="110" x2="250" y2="40" stroke="#f59e0b" strokeWidth="2" />
        <text x="252" y="45" fontSize="11" fill="#d97706">m</text>
        {/* angle alpha */}
        <path d="M170 75 A 35 35 0 0 1 200 45" fill="none" stroke="#f59e0b" strokeWidth="1.2" />
        <text x="185" y="60" fontSize="11" fill="#d97706">α</text>
        <text x="145" y="118" fontSize="11" fontWeight="600" fill="#4c1d95">V</text>
        <circle cx="170" cy="110" r="3" fill="#4c1d95" />
      </svg>
    </FigureShell>
  );
}

export function ConeSections() {
  const Item = ({ title, beta, desc, d }: { title: string; beta: string; desc: string; d: string }) => (
    <div className="rounded-lg border border-border/30 bg-background p-2">
      <p className="text-[11px] font-bold tracking-wide text-center text-violet-700 dark:text-violet-300">{title}</p>
      <p className="text-[10px] text-center text-muted-foreground">{beta}</p>
      <svg viewBox="0 0 140 110" className="w-full h-auto mt-1">
        <path d="M70 55 L 20 15 L 120 15 Z" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="1" />
        <path d="M70 55 L 20 95 L 120 95 Z" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
        <line x1="20" y1="15" x2="120" y2="15" stroke="#8b5cf6" strokeWidth="0.6" opacity="0.3" />
        <line x1="20" y1="95" x2="120" y2="95" stroke="#8b5cf6" strokeWidth="0.6" opacity="0.3" />
        <path d={d} stroke="#ef4444" strokeWidth="2" fill={title === "Circle" || title === "Ellipse" ? "#fecaca" : "none"} opacity="0.9" />
        <text x="70" y="105" fontSize="7" textAnchor="middle" fill="#64748b">{desc}</text>
      </svg>
    </div>
  );
  return (
    <FigureShell
      title="Fig 11.4–11.7 — Plane vs cone (β vs α)"
      desc="Four non-degenerate sections: circle when beta=90°, ellipse when alpha<beta<90°, parabola when beta=alpha, hyperbola when beta<alpha. Plane cuts one or both nappes."
      caption="β = angle between plane and axis. α = generator angle. β=90°→circle, α<β<90°→ellipse, β=α→parabola, 0≤β<α→hyperbola (both nappes)."
    >
      <div className="grid grid-cols-2 gap-3">
        <Item title="Circle" beta="β = 90°" desc="⊥ axis" d="M 50 45 A 22 12 0 0 0 90 45 A 22 12 0 0 0 50 45" />
        <Item title="Ellipse" beta="α < β < 90°" desc="oblique, one nappe" d="M 45 42 A 28 16 0 0 0 95 48 A 28 16 0 0 0 45 42" />
        <Item title="Parabola" beta="β = α" desc="∥ generator" d="M 40 20 Q 70 55 40 90 Q 50 55 40 20" />
        <Item title="Hyperbola" beta="0 ≤ β < α" desc="both nappes" d="M 35 25 Q 55 35 35 45 M 85 65 Q 65 75 85 85" />
      </div>
    </FigureShell>
  );
}

export function DegenerateStrip() {
  return (
    <FigureShell
      title="Fig 11.8–11.10 — Degenerate (plane through vertex)"
      desc="Point when plane perpendicular to axis through vertex, line when plane contains generator, intersecting lines when plane cuts both nappes through vertex"
      caption="Degenerate parabola → line, degenerate hyperbola → intersecting lines."
    >
      <div className="grid grid-cols-3 gap-3">
        {[
          { t: "Point", d: "M70 55 A 2 2 0 0 0 70 55", sub: "α<β≤90°" },
          { t: "Line", d: "M70 20 L70 90", sub: "β=α" },
          { t: "Intersecting lines", d: "M40 20 L100 90 M100 20 L40 90", sub: "0≤β<α" },
        ].map((x) => (
          <div key={x.t} className="rounded-lg border border-border/30 bg-background p-2">
            <p className="text-[11px] font-bold text-center text-slate-700 dark:text-slate-300">{x.t}</p>
            <p className="text-[10px] text-center text-muted-foreground">{x.sub}</p>
            <svg viewBox="0 0 140 110" className="w-full h-auto mt-1">
              <path d="M70 55 L 20 15 L 120 15 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
              <path d="M70 55 L 20 95 L 120 95 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
              <path d={x.d} stroke="#ef4444" strokeWidth="2" fill="none" />
            </svg>
          </div>
        ))}
      </div>
    </FigureShell>
  );
}

export function CircleDiagram() {
  return (
    <FigureShell
      title="Fig 11.11 — Circle definition"
      desc="Circle as locus at fixed distance r from centre C(h,k)"
      caption="Centre C(h,k), radius r: all points P satisfy CP = r. Standard: (x−h)²+(y−k)²=r²."
    >
      <svg viewBox="0 0 340 200" className="w-full h-auto max-w-[340px] mx-auto">
        <circle cx="170" cy="100" r="70" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" opacity="0.9" />
        <circle cx="170" cy="100" r="3" fill="#1e40af" />
        <text x="175" y="95" fontSize="11" fontWeight="600" fill="#1e40af">C(h,k)</text>
        <circle cx="220" cy="50" r="4" fill="#ef4444" stroke="white" strokeWidth="1.5" />
        <text x="228" y="50" fontSize="11" fill="#dc2626">P</text>
        <line x1="170" y1="100" x2="220" y2="50" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="185" y="70" fontSize="10" fill="#dc2626">r</text>
        <line x1="170" y1="100" x2="170" y2="30" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="170" y1="100" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </FigureShell>
  );
}

export function ParabolaFocus() {
  return (
    <FigureShell
      title="Fig 11.13–11.14 — Parabola focus-directrix"
      desc="Parabola as locus equidistant from focus F and directrix l, with axis, vertex, latus rectum 4a"
      caption="Focus F(a,0), directrix x=−a, vertex at origin, axis = x-axis, PF = distance to directrix, latus rectum = 4a through F."
    >
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        <line x1="80" y1="20" x2="80" y2="180" stroke="#f59e0b" strokeWidth="2" />
        <text x="45" y="100" fontSize="11" fill="#d97706">l: x=−a</text>
        <line x1="80" y1="100" x2="320" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5 3" />
        <text x="322" y="105" fontSize="11" fill="#64748b">axis</text>
        <circle cx="200" cy="100" r="3" fill="#1e40af" />
        <text x="205" y="93" fontSize="11" fontWeight="600" fill="#1e40af">V(0,0)</text>
        <circle cx="260" cy="100" r="4" fill="#dc2626" stroke="white" strokeWidth="1.5" />
        <text x="260" y="90" fontSize="11" fontWeight="600" fill="#dc2626">F(a,0)</text>
        <path d="M 200 20 Q 280 100 200 180" fill="none" stroke="#3b82f6" strokeWidth="2.2" />
        <circle cx="260" cy="60" r="3" fill="#3b82f6" />
        <line x1="260" y1="60" x2="80" y2="60" stroke="#10b981" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="260" y1="60" x2="260" y2="100" stroke="#10b981" strokeWidth="1" strokeDasharray="4 3" />
        <text x="150" y="55" fontSize="10" fill="#059669">PF = PL</text>
        {/* latus rectum */}
        <line x1="260" y1="40" x2="260" y2="160" stroke="#ef4444" strokeWidth="1.5" />
        <text x="268" y="50" fontSize="10" fill="#ef4444">4a</text>
      </svg>
    </FigureShell>
  );
}

export function EllipseDiagram() {
  return (
    <FigureShell
      title="Fig 11.20–11.28 — Ellipse (foci, axes, latus rectum)"
      desc="Ellipse sum of distances to foci constant 2a, with centre, major 2a, minor 2b, c²=a²−b², eccentricity e=c/a, latus rectum 2b²/a"
      caption="F₁,F₂ foci (±c,0), vertices ±a, b²=a²(1−e²), major 2a, minor 2b, LR=2b²/a ⟂ major through focus."
    >
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        <ellipse cx="200" cy="100" rx="110" ry="70" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
        <line x1="90" y1="100" x2="310" y2="100" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="200" y1="30" x2="200" y2="170" stroke="#94a3b8" strokeWidth="1.2" />
        <circle cx="200" cy="100" r="3" fill="#1e293b" />
        <text x="205" y="115" fontSize="10" fill="#1e293b">C</text>
        <circle cx="140" cy="100" r="4" fill="#dc2626" />
        <circle cx="260" cy="100" r="4" fill="#dc2626" />
        <text x="132" y="90" fontSize="11" fill="#dc2626">F₁</text>
        <text x="262" y="90" fontSize="11" fill="#dc2626">F₂</text>
        <text x="85" y="92" fontSize="11" fill="#be185d">−a</text>
        <text x="305" y="92" fontSize="11" fill="#be185d">+a</text>
        <text x="195" y="35" fontSize="10" fill="#9333ea">b</text>
        {/* latus rectum */}
        <line x1="260" y1="60" x2="260" y2="140" stroke="#f59e0b" strokeWidth="2" />
        <text x="268" y="70" fontSize="10" fill="#d97706">2b²/a</text>
        <line x1="140" y1="70" x2="140" y2="130" stroke="#f59e0b" strokeWidth="1.5" opacity="0.7" />
      </svg>
    </FigureShell>
  );
}

export function HyperbolaDiagram() {
  return (
    <FigureShell
      title="Fig 11.29–11.31 — Hyperbola (asymptotes, transverse)"
      desc="Hyperbola difference of distances constant 2a, foci ±c, vertices ±a, transverse 2a, conjugate 2b, c²=a²+b², asymptotes y=±b/a x, latus rectum 2b²/a"
      caption="Centre C, foci ±c, vertices ±a, transverse along x, conjugate along y, asymptotes dashed, LR ⟂ transverse through focus."
    >
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        <line x1="40" y1="100" x2="360" y2="100" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="200" y1="20" x2="200" y2="180" stroke="#94a3b8" strokeWidth="1.2" />
        {/* asymptotes */}
        <line x1="80" y1="30" x2="320" y2="170" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="5 4" />
        <line x1="80" y1="170" x2="320" y2="30" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="5 4" />
        <text x="325" y="35" fontSize="10" fill="#d97706">y=b/a x</text>
        {/* hyperbola branches */}
        <path d="M 260 75 Q 300 100 260 125" fill="none" stroke="#8b5cf6" strokeWidth="2.2" />
        <path d="M 140 75 Q 100 100 140 125" fill="none" stroke="#8b5cf6" strokeWidth="2.2" />
        <circle cx="200" cy="100" r="3" fill="#1e293b" />
        <text x="205" y="115" fontSize="10" fill="#1e293b">C</text>
        <circle cx="250" cy="100" r="4" fill="#dc2626" />
        <circle cx="150" cy="100" r="4" fill="#dc2626" />
        <text x="245" y="90" fontSize="11" fill="#dc2626">F₂(c)</text>
        <text x="132" y="90" fontSize="11" fill="#dc2626">F₁</text>
        <circle cx="230" cy="100" r="3" fill="#be185d" />
        <circle cx="170" cy="100" r="3" fill="#be185d" />
        <text x="228" y="110" fontSize="10" fill="#be185d">a</text>
        <text x="165" y="110" fontSize="10" fill="#be185d">−a</text>
        {/* latus rectum */}
        <line x1="250" y1="70" x2="250" y2="130" stroke="#10b981" strokeWidth="2" />
        <text x="258" y="70" fontSize="10" fill="#059669">2b²/a</text>
        <text x="210" y="30" fontSize="10" fill="#d97706">conjugate 2b</text>
      </svg>
    </FigureShell>
  );
}

export function ParabolaFour() {
  return (
    <FigureShell
      title="Fig 11.15 — Four standard parabolas"
      desc="Vertex at origin: y²=4ax (right, a>0, focus a,0, directrix x=-a), y²=-4ax (left), x²=4ay (up), x²=-4ay (down)"
      caption="a = distance vertex→focus. Latus rectum 4a for all."
    >
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
