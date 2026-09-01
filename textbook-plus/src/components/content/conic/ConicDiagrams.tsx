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