import type { ReactNode } from "react";
import { Brain, Crosshair, GitBranch, Shield, ShieldCheck } from "lucide-react";

/**
 * ImmuneSystem — the system's three functions and four components, the
 * primary / secondary lymphoid-organ split, and the two primary organs.
 *
 * indigo = the immune system itself, sky = functions and secondary organs,
 * emerald = components and the lymphocyte associations,
 * violet = primary lymphoid organs and the thymus locator.
 */

function DotList({ items, dotClass }: { items: ReactNode[]; dotClass: string }) {
  return (
    <div className="mt-2 space-y-1">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2 text-[10.5px] leading-snug text-foreground">
          <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dotClass}`} aria-hidden />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. ImmuneSystemOverview                                                     */
/* -------------------------------------------------------------------------- */

const FUNCTIONS = [
  { number: 1, title: "Recognition", detail: "Recognises foreign substances.", Icon: Crosshair },
  { number: 2, title: "Response", detail: "Responds against foreign substances.", Icon: Shield },
  { number: 3, title: "Memory", detail: "Remembers previous encounters.", Icon: Brain },
];

const COMPONENTS = ["Lymphoid organs", "Immune cells", "Tissues", "Molecules such as antibodies"];

function ConceptBranch({
  label,
  items,
  tone,
  variant,
}: {
  label: string;
  items: string[];
  tone: "sky" | "emerald";
  variant: "nodes" | "chips";
}) {
  const nodeClass =
    tone === "sky"
      ? "border-sky-600/45 bg-sky-50/45 dark:bg-sky-950/20"
      : "border-emerald-600/45 bg-emerald-50/45 dark:bg-emerald-950/20";
  const stemClass = tone === "sky" ? "bg-sky-500/60" : "bg-emerald-500/60";

  return (
    <div className="flex flex-col items-center">
      <div className={`w-full rounded-lg border-2 px-3 py-2 text-center ${nodeClass}`}>
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-foreground">{label}</div>
      </div>
      <div className={`h-3 w-px shrink-0 ${stemClass}`} aria-hidden />
      <div className="w-full rounded-lg border border-border bg-muted/20 p-2">
        {variant === "chips" ? (
          <div className="flex flex-wrap justify-center gap-1.5">
            {items.map((item) => (
              <span
                key={item}
                className={`rounded-md border px-2 py-1 text-[10.5px] font-semibold leading-snug text-foreground ${nodeClass}`}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="space-y-1">
            {items.map((item) => (
              <div
                key={item}
                className={`rounded-md border px-2 py-1.5 text-center text-[10.5px] font-semibold leading-snug text-foreground ${nodeClass}`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ImmuneSystemOverview() {
  return (
    <div className="my-5 space-y-4">
      <div>
        <p className="text-[10.5px] leading-snug text-foreground">
          The immune system performs three major functions:
        </p>

        <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {FUNCTIONS.map(({ number, title, detail, Icon }) => (
            <div
              key={number}
              className="rounded-xl border-2 border-sky-600/35 bg-sky-50/35 p-3 dark:bg-sky-950/20"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-sky-600/40 bg-card text-[9px] font-bold text-sky-800 dark:text-sky-200">
                  {number}
                </span>
                <Icon className="h-4 w-4 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
                <span className="text-[11px] font-bold leading-snug text-foreground">{title}</span>
              </div>
              <div className="mt-1.5 text-[10.5px] leading-snug text-foreground/85">
                <span className="mr-1 text-muted-foreground" aria-hidden>
                  →
                </span>
                <strong>{detail.split(" ")[0]}</strong> {detail.slice(detail.indexOf(" ") + 1)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-sm font-bold tracking-tight text-foreground">Components</div>
        <p className="mt-1 text-[10.5px] leading-snug text-foreground">The immune system consists of:</p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {COMPONENTS.map((component) => (
            <span
              key={component}
              className="rounded-md border border-emerald-600/30 bg-emerald-50/45 px-2 py-1 text-[11px] font-semibold text-foreground dark:bg-emerald-950/20"
            >
              {component}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-3.5">
        <div className="flex items-center gap-1.5">
          <GitBranch className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
          <span className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Concept map
          </span>
        </div>

        <div className="mt-2 mx-auto w-fit rounded-lg border-2 border-indigo-600/50 bg-indigo-50/55 px-5 py-2 text-center dark:bg-indigo-950/30">
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="h-4 w-4 shrink-0 text-indigo-700 dark:text-indigo-300" aria-hidden />
            <span className="text-sm font-bold tracking-tight text-foreground">Immune System</span>
          </div>
        </div>

        {/* Desktop: centre stem → horizontal bar → one drop per branch */}
        <div className="relative mx-auto hidden h-10 w-full max-w-xl sm:block" aria-hidden>
          <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-indigo-500/55" />
          <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-indigo-500/55" />
          <div className="absolute left-1/4 top-1/2 h-1/2 w-px -translate-x-1/2 bg-sky-500/55" />
          <div className="absolute right-1/4 top-1/2 h-1/2 w-px translate-x-1/2 bg-emerald-500/55" />
        </div>
        {/* Mobile: a single stem; the two branches stack below it */}
        <div className="mx-auto h-4 w-px bg-indigo-500/55 sm:hidden" aria-hidden />

        <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
          <ConceptBranch
            label="Three functions"
            items={["Recognition", "Response", "Memory"]}
            tone="sky"
            variant="nodes"
          />
          <ConceptBranch
            label="Major components"
            items={COMPONENTS}
            tone="emerald"
            variant="chips"
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. LymphoidOrgansBranch                                                     */
/* -------------------------------------------------------------------------- */

const PRIMARY_ORGANS = ["Bone marrow", "Thymus"];
const SECONDARY_ORGANS = ["Spleen", "Lymph nodes", "Tonsils", "Peyer's patches", "Appendix"];

function OrganGroup({ label, items, tone }: { label: string; items: string[]; tone: "violet" | "sky" }) {
  const nodeClass =
    tone === "violet"
      ? "border-violet-600/45 bg-violet-50/45 dark:bg-violet-950/20"
      : "border-sky-600/45 bg-sky-50/45 dark:bg-sky-950/20";
  const stemClass = tone === "violet" ? "bg-violet-500/60" : "bg-sky-500/60";
  const dotClass = tone === "violet" ? "bg-violet-600/60" : "bg-sky-600/60";

  return (
    <div className="flex flex-col items-center">
      <div className={`w-full rounded-lg border-2 px-3 py-2 text-center ${nodeClass}`}>
        <div className="text-[11px] font-bold leading-snug text-foreground">{label}</div>
      </div>
      <div className={`h-4 w-px shrink-0 ${stemClass}`} aria-hidden />
      <div className="w-full rounded-lg border border-border bg-muted/20 px-3 py-2">
        <div className="space-y-1">
          {items.map((item) => (
            <div key={item} className="flex gap-2 text-[10.5px] leading-snug text-foreground">
              <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dotClass}`} aria-hidden />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LymphoidOrgansBranch() {
  return (
    <div className="my-5">
      <div className="text-sm font-bold tracking-tight text-foreground">Lymphoid Organs</div>
      <p className="mt-1 text-[10.5px] leading-snug text-foreground">
        Lymphoid organs are sites associated with the:
      </p>
      <DotList
        dotClass="bg-violet-600/60"
        items={[
          <>
            <strong>Origin</strong> of lymphocytes.
          </>,
          <>
            <strong>Maturation</strong> of lymphocytes.
          </>,
          <>
            <strong>Proliferation</strong> of lymphocytes.
          </>,
        ]}
      />

      <div className="mt-3 rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-1.5">
          <GitBranch className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
          <span className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Two branches
          </span>
        </div>

        <div className="mx-auto mt-2 w-fit rounded-lg border-2 border-indigo-600/45 bg-indigo-50/45 px-5 py-2 text-center dark:bg-indigo-950/20">
          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-indigo-900 dark:text-indigo-200">
            Lymphoid organs
          </span>
        </div>

        {/* Desktop: centre stem → horizontal bar → one drop per branch */}
        <div className="relative mx-auto hidden h-10 w-full max-w-xl sm:block" aria-hidden>
          <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-indigo-500/55" />
          <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-indigo-500/55" />
          <div className="absolute left-1/4 top-1/2 h-1/2 w-px -translate-x-1/2 bg-violet-500/55" />
          <div className="absolute right-1/4 top-1/2 h-1/2 w-px translate-x-1/2 bg-sky-500/55" />
        </div>
        {/* Mobile: a single stem; branches stack below it */}
        <div className="mx-auto h-4 w-px bg-indigo-500/55 sm:hidden" aria-hidden />

        <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
          <OrganGroup label="Primary lymphoid organs" items={PRIMARY_ORGANS} tone="violet" />
          <OrganGroup label="Secondary lymphoid organs" items={SECONDARY_ORGANS} tone="sky" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. PrimaryLymphoidOrgans                                                    */
/* -------------------------------------------------------------------------- */

function ThymusLocator() {
  return (
    <div className="mt-2.5 rounded-lg border border-violet-600/25 bg-card p-2 dark:bg-violet-950/10">
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Location schematic
      </div>
      <svg
        viewBox="0 0 220 126"
        className="mx-auto mt-1 h-auto w-full max-w-[220px]"
        role="img"
        aria-label="Schematic showing the thymus as two small lobes in the upper chest, above the heart and beneath the sternum."
      >
        {/* Chest / torso outline */}
        <g className="text-muted-foreground/50" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M42 120 C42 86 66 60 110 56 C154 60 178 86 178 120" />
          <path d="M110 56 L110 74" strokeDasharray="2 2" />
        </g>

        {/* Thymus — two small lobes above the heart */}
        <g
          className="text-violet-600 dark:text-violet-300"
          fill="currentColor"
          fillOpacity="0.22"
          stroke="currentColor"
          strokeWidth="1.1"
        >
          <ellipse cx="104" cy="64" rx="4.5" ry="7" transform="rotate(-18 104 64)" />
          <ellipse cx="116" cy="64" rx="4.5" ry="7" transform="rotate(18 116 64)" />
        </g>

        {/* Heart */}
        <g
          className="text-rose-600 dark:text-rose-400"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.1"
          transform="translate(98 74)"
        >
          <path d="M12 22 C12 22 1 14 1 7 C1 3 4 1 7 1 C10 1 12 3 13 5 C14 3 16 1 19 1 C22 1 25 3 25 7 C25 14 12 22 12 22 Z" />
        </g>

        {/* Leader lines */}
        <g className="text-muted-foreground/70" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M120 61 L146 50" />
          <path d="M123 88 L146 98" />
        </g>

        {/* Labels */}
        <g className="fill-foreground text-[8px] font-semibold">
          <text x="149" y="52">Thymus</text>
          <text x="149" y="96">Near heart,</text>
          <text x="149" y="106">beneath sternum</text>
        </g>
      </svg>
    </div>
  );
}

function PrimaryOrganCard({
  numeral,
  title,
  bullets,
  association,
  illustration,
}: {
  numeral: string;
  title: string;
  bullets: ReactNode[];
  association: string;
  illustration?: ReactNode;
}) {
  return (
    <div className="rounded-xl border-2 border-violet-600/35 bg-violet-50/30 p-3.5 dark:bg-violet-950/15">
      <div className="flex items-center gap-2">
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-violet-600/40 bg-card text-[9px] font-bold text-violet-800 dark:text-violet-200">
          {numeral}
        </span>
        <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
      </div>

      <div className="mt-2.5 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Role
      </div>
      <DotList dotClass="bg-violet-600/60" items={bullets} />

      {illustration}

      <div className="mt-2.5">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Association
        </div>
        <div className="mt-1 rounded-md border border-emerald-600/30 bg-emerald-50/45 px-2.5 py-1.5 text-center dark:bg-emerald-950/20">
          <span className="text-[10.5px] font-bold text-emerald-900 dark:text-emerald-200">{association}</span>
        </div>
      </div>
    </div>
  );
}

export function PrimaryLymphoidOrgans() {
  return (
    <div className="my-5">
      <p className="text-[10.5px] leading-snug text-foreground">
        Sites where immature lymphocytes originate and mature into antigen-sensitive lymphocytes.
      </p>

      <div className="mt-3 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <PrimaryOrganCard
          numeral="①"
          title="Bone Marrow"
          association="Bone marrow → B cells"
          bullets={[
            <>
              <strong>Main site</strong> of formation of blood cells.
            </>,
            <>
              All blood cells, including lymphocytes, <strong>originate here</strong>.
            </>,
            <>
              <strong>B-lymphocytes</strong> mature in the bone marrow.
            </>,
          ]}
        />

        <PrimaryOrganCard
          numeral="②"
          title="Thymus"
          association="Thymus → T cells"
          illustration={<ThymusLocator />}
          bullets={[
            <>
              <strong>Lobed organ</strong> located near the heart, beneath the breastbone (sternum).
            </>,
            <>
              Site of <strong>T-lymphocyte maturation</strong>.
            </>,
            <>
              <strong>Large at birth.</strong>
            </>,
            <>
              Gradually <strong>reduces in size</strong> with age.
            </>,
          ]}
        />
      </div>
    </div>
  );
}
