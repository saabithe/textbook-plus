import type { ReactNode } from "react";
import { Filter, Layers, Network, type LucideIcon } from "lucide-react";

/**
 * LymphoidOrgans — the secondary lymphoid organs block: the two defining
 * points, three like-for-like organ cards (with a lymph-node pathway schematic),
 * and the MALT site map with its approximate share of total lymphoid tissue.
 *
 * sky / teal = secondary organs, amber = the spleen's RBC graveyard,
 * violet / indigo / fuchsia = MALT and its three mucosal sites, amber = the ≈50% card.
 */

/* -------------------------------------------------------------------------- */
/* 1. Secondary lymphoid organs                                                */
/* -------------------------------------------------------------------------- */

function OrganCard({
  numeral,
  Icon,
  title,
  children,
}: {
  numeral: string;
  Icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-sky-600/30 bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-sky-50/40 px-3 py-2 dark:bg-sky-950/20">
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-sky-600/45 bg-card text-[10px] font-bold text-sky-800 dark:text-sky-200">
          {numeral}
        </span>
        <Icon className="h-4 w-4 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
        <span className="text-[11px] font-bold tracking-tight text-foreground">{title}</span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function LymphNodePathway() {
  return (
    <div className="mt-2.5 rounded-lg border border-border bg-muted/20 p-2">
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Filtration points along the pathway
      </div>
      <svg
        viewBox="0 0 300 78"
        className="mx-auto mt-1 h-auto w-full max-w-[280px]"
        role="img"
        aria-label="Straight horizontal lymphatic pathway with three small oval lymph nodes positioned along it as filtration points."
      >
        <line
          x1="10"
          y1="42"
          x2="284"
          y2="42"
          className="stroke-sky-600/60 dark:stroke-sky-400"
          strokeWidth="2"
        />
        <path
          d="M 277 36 L 284 42 L 277 48"
          className="fill-none stroke-sky-600/60 dark:stroke-sky-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[68, 148, 228].map((x) => (
          <g key={x}>
            <ellipse
              cx={x}
              cy="42"
              rx="10"
              ry="7"
              className="fill-teal-100 stroke-teal-600 dark:fill-teal-900/50 dark:stroke-teal-400"
              strokeWidth="1.6"
            />
            <text
              x={x}
              y="25"
              textAnchor="middle"
              className="fill-teal-800 text-[8px] font-semibold dark:fill-teal-300"
            >
              Lymph node
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const SPLEEN_FUNCTIONS = [
  { number: 1, text: "Traps microorganisms present in the blood." },
  { number: 2, text: "Acts as a reservoir of red blood cells (RBCs)." },
  { number: 3, text: "Removes worn-out RBCs — hence called the graveyard of RBCs.", amber: true },
];

const OTHER_ORGANS = ["Tonsils.", "Peyer's patches.", "Appendix."];

export function SecondaryLymphoidOrgans() {
  return (
    <div className="my-5 space-y-3">
      <div className="space-y-1.5">
        <div className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-600/60" aria-hidden />
          <span className="text-[10.5px] leading-snug text-foreground">
            <strong>Sites where mature lymphocytes</strong> interact with antigens.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-600/60" aria-hidden />
          <span className="text-[10.5px] leading-snug text-foreground">
            <strong>Facilitate lymphocyte proliferation</strong> and differentiation into active effector cells.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <OrganCard numeral="①" Icon={Filter} title="Spleen">
          <div className="space-y-0.5">
            <div className="text-[10.5px] leading-snug text-foreground">Large, bean-shaped organ.</div>
            <div className="text-[10.5px] leading-snug text-foreground">
              Contains <strong>lymphocytes</strong> and <strong>phagocytes</strong>.
            </div>
          </div>

          <div className="mt-2.5">
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Functions
            </div>
            <ol className="mt-1.5 space-y-1.5">
              {SPLEEN_FUNCTIONS.map((item) => (
                <li
                  key={item.number}
                  className={`flex items-start gap-2 rounded-lg border px-2.5 py-1.5 ${
                    item.amber
                      ? "border-amber-600/35 bg-amber-50/45 dark:border-amber-600/40 dark:bg-amber-950/20"
                      : "border-border bg-card"
                  }`}
                >
                  <span
                    className={`mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border text-[8.5px] font-bold ${
                      item.amber
                        ? "border-amber-600/45 bg-amber-50/70 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200"
                        : "border-sky-600/40 bg-sky-50/60 text-sky-800 dark:bg-sky-950/25 dark:text-sky-200"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`text-[10.5px] leading-snug ${
                      item.amber ? "text-amber-900 dark:text-amber-100" : "text-foreground"
                    }`}
                  >
                    {item.amber ? (
                      <>
                        Removes worn-out RBCs — hence called the{" "}
                        <strong className="text-amber-900 dark:text-amber-200">graveyard of RBCs</strong>.
                      </>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </OrganCard>

        <OrganCard numeral="②" Icon={Network} title="Lymph Nodes">
          <div className="space-y-0.5">
            <div className="text-[10.5px] leading-snug text-foreground">
              Small, <strong>solid structures</strong> located along the lymphatic system.
            </div>
            <div className="text-[10.5px] leading-snug text-foreground">
              Trap microorganisms and antigens present in <strong>lymph and tissue fluid</strong>.
            </div>
            <div className="text-[10.5px] leading-snug text-foreground">Facilitate immune responses.</div>
          </div>
          <LymphNodePathway />
        </OrganCard>

        <div className="sm:col-span-2">
          <OrganCard numeral="③" Icon={Layers} title="Other Secondary Lymphoid Organs">
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Also included
            </div>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {OTHER_ORGANS.map((organ) => (
                <span
                  key={organ}
                  className="rounded-md border border-teal-600/30 bg-teal-50/45 px-2 py-1 text-[11px] font-semibold text-foreground dark:bg-teal-950/20"
                >
                  {organ}
                </span>
              ))}
            </div>
          </OrganCard>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. MALT                                                                     */
/* -------------------------------------------------------------------------- */

const MALT_TRACTS: { label: string; fill: string; swatch: string }[] = [
  {
    label: "Digestive tract",
    fill: "fill-indigo-500/75 dark:fill-indigo-400/70",
    swatch: "bg-indigo-500 dark:bg-indigo-400",
  },
  {
    label: "Respiratory tract",
    fill: "fill-violet-500/75 dark:fill-violet-400/70",
    swatch: "bg-violet-500 dark:bg-violet-400",
  },
  {
    label: "Urogenital tract",
    fill: "fill-fuchsia-500/75 dark:fill-fuchsia-400/70",
    swatch: "bg-fuchsia-500 dark:bg-fuchsia-400",
  },
];

function MaltSiteMap() {
  return (
    <div className="rounded-xl border border-violet-600/30 bg-card p-3 dark:bg-violet-950/10">
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Site map · mucosal lining
      </div>
      <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
        <svg
          viewBox="0 0 140 226"
          className="h-auto w-[104px] shrink-0"
          role="img"
          aria-label="Minimal front-view human body silhouette with three highlighted mucosal zones: respiratory tract in the chest, digestive tract in the abdomen, and urogenital tract in the lower pelvis."
        >
          {/* Limbs — drawn first so the torso overlaps their upper ends */}
          <g className="stroke-muted/35" strokeWidth="12" strokeLinecap="round" fill="none">
            <path d="M 45,50 L 30,116" />
            <path d="M 95,50 L 110,116" />
            <path d="M 61,150 L 57,212" />
            <path d="M 79,150 L 83,212" />
          </g>

          {/* Silhouette */}
          <g className="fill-muted/35 stroke-border" strokeWidth="1.5" strokeLinejoin="round">
            <rect x="65" y="29" width="10" height="11" rx="2" />
            <path d="M 54,38 L 86,38 C 92,38 96,42 96,48 L 99,92 C 101,108 95,126 90,140 L 88,152 L 52,152 L 50,140 C 45,126 39,108 41,92 L 44,48 C 44,42 48,38 54,38 Z" />
            <circle cx="70" cy="19" r="11" />
          </g>

          {/* Respiratory zone */}
          <g className={MALT_TRACTS[1].fill}>
            <ellipse cx="59" cy="74" rx="9" ry="15" />
            <ellipse cx="81" cy="74" rx="9" ry="15" />
          </g>
          <g
            className="fill-none stroke-violet-700/80 dark:stroke-violet-200/80"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M 70,40 L 70,61" />
            <path d="M 70,61 L 59,70" />
            <path d="M 70,61 L 81,70" />
          </g>

          {/* Digestive zone */}
          <rect x="56" y="97" width="28" height="34" rx="10" className={MALT_TRACTS[0].fill} />

          {/* Urogenital zone */}
          <ellipse cx="70" cy="142" rx="11" ry="7" className={MALT_TRACTS[2].fill} />
        </svg>

        <div className="space-y-1">
          {MALT_TRACTS.map((tract) => (
            <div key={tract.label} className="flex items-center gap-1.5">
              <span className={`h-2 w-2 shrink-0 rounded-sm ${tract.swatch}`} aria-hidden />
              <span className="text-[9.5px] leading-snug text-foreground">{tract.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MaltCard() {
  return (
    <div className="my-5 rounded-xl border-2 border-violet-600/35 bg-violet-50/30 p-3.5 dark:bg-violet-950/15">
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
        C. Mucosa-Associated Lymphoid Tissue (MALT)
      </div>
      <div className="mt-0.5 text-sm font-bold tracking-tight text-foreground">MALT</div>
      <div className="mt-1.5 text-[10.5px] leading-snug text-foreground">
        <strong>Full form:</strong> Mucosa-Associated Lymphoid Tissue.
      </div>

      <div className="mt-3 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <MaltSiteMap />

        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Location
          </div>
          <div className="mt-0.5 text-[10.5px] leading-snug text-foreground">
            <strong>Present in the mucosal lining of:</strong>
          </div>
          <ul className="mt-1.5 space-y-1">
            {MALT_TRACTS.map((tract) => (
              <li key={tract.label} className="flex items-start gap-2">
                <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${tract.swatch}`} aria-hidden />
                <span className="text-[10.5px] leading-snug text-foreground">{tract.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-2.5 rounded-lg border border-violet-600/30 bg-violet-50/45 px-2.5 py-2 dark:bg-violet-950/25">
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
              Function
            </div>
            <p className="mt-0.5 text-[10.5px] leading-snug text-foreground">
              <strong>Traps</strong> microorganisms entering through these tracts.
            </p>
          </div>

          <div className="mt-2.5 rounded-xl border-2 border-amber-600/45 bg-amber-50/50 p-3 dark:bg-amber-950/20">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold tracking-tight text-amber-900 dark:text-amber-200">
                <span className="font-normal">≈</span>
                <strong>50%</strong>
              </div>
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
                  Of the total lymphoid tissue in the human body.
                </div>
                <div className="mt-0.5 text-[10px] leading-snug text-foreground/85">
                  Approximate proportion constituted by MALT.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
