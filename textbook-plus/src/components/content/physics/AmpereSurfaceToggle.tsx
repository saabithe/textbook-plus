"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

type SurfaceId = 1 | 2;

interface SurfaceData {
  id: SurfaceId;
  label: string;
  short: string;
  description: string;
  enclosed: string;
  integral: string;
  verdict: string;
}

const SURFACES: SurfaceData[] = [
  {
    id: 1,
    label: "Surface 1 — flat (through the wire)",
    short: "Flat surface",
    description:
      "A flat circular surface bounded by the loop, cutting the wire. The conduction current i pierces it.",
    enclosed: String.raw`I_{\text{enclosed}} = i`,
    integral: String.raw`\oint \mathbf{B}\cdot \mathrm{d}\mathbf{l} = \mu_0 i`,
    verdict: "B ≠ 0",
  },
  {
    id: 2,
    label: "Surface 2 — pot-shaped (bottom between the plates)",
    short: "Pot surface",
    description:
      "A tiffin-shaped surface sharing the loop's rim, with its bottom between the capacitor plates. No wire pierces it.",
    enclosed: String.raw`I_{\text{enclosed}} = 0`,
    integral: String.raw`\oint \mathbf{B}\cdot \mathrm{d}\mathbf{l} = 0`,
    verdict: "B = 0",
  },
];

export function AmpereSurfaceToggle() {
  const [active, setActive] = useState<SurfaceId>(1);
  const surface = SURFACES.find((s) => s.id === active)!;

  return (
    <div className="my-6 rounded-2xl border border-blue-500/20 bg-card p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-sm font-extrabold tracking-wide text-blue-900 dark:text-blue-100">
        <Formula>{String.raw`\Rightarrow`}</Formula>
        <span>Surface selector, same loop</span>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {SURFACES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            className={cn(
              "rounded-xl border px-3 py-1.5 text-sm font-bold tracking-tight transition-colors",
              active === s.id
                ? "border-blue-500 bg-blue-500 text-white shadow-sm shadow-blue-500/30"
                : "border-border/60 bg-muted/40 text-foreground/70 hover:bg-muted/60"
            )}
          >
            {s.short}
          </button>
        ))}
      </div>

      <div className="mb-3 grid gap-2 rounded-xl border border-border/40 bg-muted/25 p-3 sm:grid-cols-2">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Current enclosed
          </p>
          <div className="text-sm font-semibold text-foreground">
            <Formula>{String.raw`${surface.enclosed}`}</Formula>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{surface.description}</p>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Ampère's law
          </p>
          <div className="text-sm font-semibold text-foreground">
            <Formula>{String.raw`${surface.integral}`}</Formula>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Result: <strong className="text-blue-700 dark:text-blue-300">{surface.verdict}</strong>
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2 rounded-xl border border-amber-500/30 bg-amber-500/[0.08] px-3 py-2.5 text-sm font-semibold text-amber-900 dark:text-amber-200">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        <span>
          ⚠️ Same loop → two different answers. The magnetic field at P is{" "}
          <strong>B ≠ 0</strong> with the flat surface, but <strong>B = 0</strong> with the pot
          surface — Ampère's law as stated is inconsistent.
        </span>
      </div>
    </div>
  );
}