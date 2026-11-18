import type { ReactNode } from "react";
import { Droplets, Flame, ShieldAlert } from "lucide-react";

/**
 * FungalDiseases — the ringworm profile: causative fungi, the five body sites,
 * symptoms, heat and moisture, and the soil / shared-items transmission strip.
 *
 * fuchsia = the fungal group, amber = the conditions fungi thrive in,
 * rose = the numbered site markers.
 */

const FUNGI = ["Microsporum", "Trichophyton", "Epidermophyton"];

const SITES = ["Skin", "Scalp", "Nails", "Between toes", "Groin (skin folds)"];

function Marker({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="9" className="fill-white stroke-rose-600" strokeWidth="1.5" />
      <text x={x} y={y + 3.2} textAnchor="middle" className="fill-rose-700 text-[9px] font-bold">
        {n}
      </text>
    </g>
  );
}

function BodySites() {
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 150 300"
        className="h-[210px] w-auto shrink-0"
        role="img"
        aria-label="Front view of a body with five numbered markers at the skin, scalp, nails, spaces between the toes and the groin."
      >
        <g className="fill-slate-300 dark:fill-slate-600">
          <circle cx="75" cy="30" r="16" />
          <rect x="70" y="45" width="10" height="9" />
          <path d="M53 56 Q75 47 97 56 L103 92 Q99 112 95 130 L55 130 Q51 112 47 92 Z" />
          <path d="M53 57 L41 63 L28 118 L35 122 L50 75 Z" />
          <path d="M97 57 L109 63 L122 118 L115 122 L100 75 Z" />
          <path d="M56 130 L72 130 L70 228 L58 228 Z" />
          <path d="M78 130 L94 130 L92 228 L80 228 Z" />
          <path d="M58 226 L70 226 L72 244 L53 244 Z" />
          <path d="M80 226 L92 226 L97 244 L78 244 Z" />
        </g>

        <Marker x={43} y={88} n={1} />
        <Marker x={75} y={12} n={2} />
        <Marker x={28} y={118} n={3} />
        <Marker x={63} y={240} n={4} />
        <Marker x={75} y={140} n={5} />
      </svg>

      <ol className="min-w-0 space-y-1.5">
        {SITES.map((site, index) => (
          <li key={site} className="flex items-center gap-1.5">
            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-rose-600/45 bg-rose-50/60 text-[8.5px] font-bold text-rose-800 dark:bg-rose-950/25 dark:text-rose-200">
              {index + 1}
            </span>
            <span className="text-[10.5px] leading-snug text-foreground">{site}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-[11px] leading-snug text-foreground">{children}</div>
    </div>
  );
}

export function RingwormCard() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-start justify-between gap-2 border-b border-border bg-fuchsia-50/40 px-4 py-2.5 dark:bg-fuchsia-950/20">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-fuchsia-800 dark:text-fuchsia-300">
            Fungal disease
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Ringworm</div>
        </div>
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-700 dark:text-fuchsia-300" aria-hidden />
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        <Field label="Causative fungi">
          <div className="flex flex-wrap gap-1">
            {FUNGI.map((fungus) => (
              <span
                key={fungus}
                className="rounded border border-fuchsia-600/30 bg-fuchsia-50/50 px-1.5 py-0.5 text-[10px] font-semibold italic text-foreground dark:bg-fuchsia-950/20"
              >
                {fungus}
              </span>
            ))}
          </div>
        </Field>

        <Field label="Symptoms">
          <div className="space-y-1">
            <div className="flex gap-1.5">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fuchsia-600/60" aria-hidden />
              <span>Dry, scaly lesions on the affected areas.</span>
            </div>
            <div className="flex gap-1.5">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fuchsia-600/60" aria-hidden />
              <span>Intense itching.</span>
            </div>
          </div>
        </Field>
      </div>

      <div className="border-t border-border p-4">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Affected parts</div>
        <div className="mt-1.5">
          <BodySites />
        </div>
      </div>

      <div className="border-t border-border bg-amber-50/40 px-4 py-2.5 dark:bg-amber-950/20">
        <div className="flex items-center gap-1.5">
          <Flame className="h-3.5 w-3.5 text-amber-700 dark:text-amber-300" aria-hidden />
          <Droplets className="h-3.5 w-3.5 text-amber-700 dark:text-amber-300" aria-hidden />
          <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
            Favourable conditions
          </span>
        </div>
        <div className="mt-1 text-[10.5px] leading-snug text-foreground">
          Heat and moisture help the fungi thrive, particularly in skin folds.
        </div>
      </div>

      <div className="border-t border-border bg-muted/25 px-4 py-2.5">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Mode of transmission
        </div>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <span className="rounded border border-fuchsia-600/30 bg-card px-1.5 py-0.5 text-[10px] font-medium text-foreground">
            Soil
          </span>
          <span className="text-muted-foreground" aria-hidden>
            /
          </span>
          <span className="rounded border border-fuchsia-600/30 bg-card px-1.5 py-0.5 text-[10px] font-medium text-foreground">
            Shared personal items — towels, clothes, combs
          </span>
          <span className="text-sm font-bold text-fuchsia-700 dark:text-fuchsia-300" aria-hidden>
            →
          </span>
          <span className="rounded border border-fuchsia-600/40 bg-fuchsia-50/50 px-1.5 py-0.5 text-[10px] font-semibold text-foreground dark:bg-fuchsia-950/20">
            Fungal infection
          </span>
        </div>
      </div>
    </div>
  );
}
