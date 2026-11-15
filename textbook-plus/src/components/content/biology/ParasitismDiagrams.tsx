import { ArrowDown } from "lucide-react";
import { FlowRow } from "@/components/content/biology/FlowRow";

/**
 * ParasitismDiagrams — adaptation grid, host-dependency panels, the
 * classification tree and the endoparasite body-site silhouette.
 */

/* ---------------------------------------------------------------- */
/* Adaptations                                                       */
/* ---------------------------------------------------------------- */

const ADAPTATIONS = [
  {
    label: "Sense organs",
    detail: "Loss of unnecessary sense organs.",
    glyph: <SenseOrganGlyph />,
  },
  {
    label: "Attachment",
    detail: "Adhesive organs or suckers.",
    glyph: <SuckerGlyph />,
  },
  {
    label: "Digestion",
    detail: "Loss of digestive system.",
    glyph: <DigestiveGlyph />,
  },
  {
    label: "Reproduction",
    detail: "High reproductive capacity.",
    glyph: <ReproductionGlyph />,
  },
];

export function AdaptationGrid() {
  return (
    <div className="my-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {ADAPTATIONS.map((item) => (
        <div key={item.label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/30 text-foreground/70">
            {item.glyph}
          </span>
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {item.label}
            </div>
            <div className="mt-0.5 text-sm leading-snug text-foreground">{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const GLYPH = "h-7 w-7";

function SenseOrganGlyph() {
  return (
    <svg viewBox="0 0 40 40" className={GLYPH} aria-hidden>
      <ellipse cx="20" cy="19" rx="12" ry="7.5" className="fill-none stroke-current" strokeWidth="1.6" />
      <circle cx="20" cy="19" r="3.6" className="fill-current" />
      <line x1="9" y1="9" x2="31" y2="30" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SuckerGlyph() {
  return (
    <svg viewBox="0 0 40 40" className={GLYPH} aria-hidden>
      <circle cx="20" cy="17" r="10" className="fill-none stroke-current" strokeWidth="1.8" />
      <circle cx="20" cy="17" r="4.2" className="fill-none stroke-current" strokeWidth="1.4" />
      <line x1="20" y1="27" x2="20" y2="34" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DigestiveGlyph() {
  return (
    <svg viewBox="0 0 40 40" className={GLYPH} aria-hidden>
      <path
        d="M 10 12 C 18 16, 22 20, 20 26 C 19 31, 24 33, 30 30"
        fill="none"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line x1="9" y1="9" x2="31" y2="32" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ReproductionGlyph() {
  return (
    <svg viewBox="0 0 40 40" className={GLYPH} aria-hidden>
      <circle cx="15" cy="13" r="3.4" className="fill-current" />
      <circle cx="24" cy="12" r="3.4" className="fill-current" />
      <circle cx="19" cy="21" r="3.4" className="fill-current" />
      <circle cx="28" cy="21" r="3.4" className="fill-current" />
      <circle cx="13" cy="27" r="3.4" className="fill-current" />
      <circle cx="22" cy="30" r="3.4" className="fill-current" />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Host dependency                                                   */
/* ---------------------------------------------------------------- */

export function HostDependencyDiagram() {
  return (
    <figure className="my-6 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Host dependency — arrows show dependency, not chronology</div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <DependencyPanel
          title="Human liver fluke"
          parent="Human liver fluke"
          children={[
            { name: "Snail", role: "Intermediate host", kind: "host" },
            { name: "Fish", role: "Intermediate host", kind: "host" },
          ]}
          caption="Two intermediate hosts are required."
        />
        <DependencyPanel
          title="Malarial parasite"
          parent="Malarial parasite"
          children={[{ name: "Mosquito", role: "Vector for transmission", kind: "vector" }]}
          caption="A vector carries the parasite — it is not an intermediate host."
        />
      </div>
    </figure>
  );
}

function DependencyPanel({
  title,
  parent,
  children,
  caption,
}: {
  title: string;
  parent: string;
  children: { name: string; role: string; kind: "host" | "vector" }[];
  caption: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-muted/20 p-3">
      <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{title}</div>

      <div className="mt-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground">
        {parent}
      </div>

      <div className="flex justify-center py-1 text-muted-foreground" aria-hidden>
        <ArrowDown className="h-3.5 w-3.5" />
      </div>

      <div className="space-y-2">
        {children.map((child) => (
          <div
            key={child.name}
            className={
              child.kind === "vector"
                ? "rounded-lg border border-dashed border-amber-600/50 bg-amber-50/50 px-3 py-2 dark:bg-amber-950/25"
                : "rounded-lg border border-border bg-card px-3 py-2"
            }
          >
            <div className="text-sm font-medium text-foreground">{child.name}</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {child.role}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{caption}</div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Classification tree                                               */
/* ---------------------------------------------------------------- */

export function ParasiteTree() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border px-4 py-2.5">
        <div className="t-micro">Classification</div>
        <div className="mt-0.5 text-sm font-semibold tracking-tight text-foreground">Parasitism</div>
      </div>

      <div className="ml-5 border-l border-border py-3 pl-4 sm:ml-6">
        <div className="space-y-5">
          <Branch index={1} name="Ectoparasites" where="Live on the external surface of the host.">
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {[
                { parasite: "Lice", host: "Humans" },
                { parasite: "Ticks", host: "Dogs" },
                { parasite: "Copepods", host: "Marine fish" },
                { parasite: <em key="cuscuta">Cuscuta</em>, host: "Hedge plants" },
              ].map((pair) => (
                <div
                  key={pair.host}
                  className="flex items-center justify-between gap-2 rounded-md border border-border bg-muted/20 px-2.5 py-1.5"
                >
                  <span className="text-sm text-foreground">{pair.parasite}</span>
                  <span className="text-xs text-muted-foreground">{pair.host}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
              <em>Cuscuta</em> is a parasitic plant that has lost its leaves and chlorophyll.
            </div>
          </Branch>

          <Branch index={2} name="Endoparasites" where="Live inside the host body at different sites.">
            <BodySiteSilhouette />
          </Branch>

          <Branch index={3} name="Brood parasitism" where="A parasitic bird lays eggs in another bird’s nest.">
            <FlowRow
              className="my-0 mt-1"
              items={[
                { label: "Parasitic bird lays eggs in the host nest" },
                { label: "Host bird incubates the eggs" },
                { label: "Cuckoo / Koel in a crow’s nest", detail: "spring to summer", tone: "warn" },
              ]}
            />
          </Branch>
        </div>
      </div>
    </div>
  );
}

function Branch({
  index,
  name,
  where,
  children,
}: {
  index: number;
  name: string;
  where: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <span
        className="absolute -left-[1.35rem] top-2 h-2 w-2 rounded-full bg-foreground/40 sm:-left-[1.6rem]"
        aria-hidden
      />
      <div className="text-sm font-semibold tracking-tight text-foreground">
        <span className="mr-1.5 text-muted-foreground">{index}.</span>
        {name}
      </div>
      <div className="mt-0.5 text-xs leading-snug text-muted-foreground">{where}</div>
      <div className="mt-2">{children}</div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Body-site silhouette                                              */
/* ---------------------------------------------------------------- */

const BODY_SITES = [
  { n: 1, label: "Lungs", x: 110, y: 76 },
  { n: 2, label: "Liver", x: 99, y: 98 },
  { n: 3, label: "Kidneys", x: 121, y: 104 },
  { n: 4, label: "Red blood cells (RBCs)", x: 77, y: 96 },
];

export function BodySiteSilhouette() {
  return (
    <div className="rounded-lg border border-border bg-muted/20 p-3">
      <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[auto_1fr]">
        <svg
          viewBox="0 0 220 240"
          className="mx-auto h-auto w-full max-w-[150px]"
          role="img"
          aria-labelledby="body-site-title"
        >
          <title id="body-site-title">
            Schematic human silhouette marking the liver, kidneys, lungs and red blood cells as possible parasite
            sites
          </title>
          <g className="fill-muted-foreground/25 stroke-muted-foreground/40" strokeWidth="1">
            <circle cx="110" cy="30" r="16" />
            <rect x="88" y="48" width="44" height="84" rx="14" />
            <rect x="70" y="52" width="14" height="76" rx="7" />
            <rect x="126" y="52" width="14" height="76" rx="7" />
            <rect x="92" y="128" width="16" height="88" rx="8" />
            <rect x="112" y="128" width="16" height="88" rx="8" />
          </g>

          {BODY_SITES.map((site) => (
            <g key={site.n}>
              <circle cx={site.x} cy={site.y} r="8.5" className="fill-card stroke-foreground/50" strokeWidth="1.2" />
              <text
                x={site.x}
                y={site.y + 3.5}
                textAnchor="middle"
                className="fill-foreground"
                fontSize="10"
                fontWeight="700"
                fontFamily="sans-serif"
              >
                {site.n}
              </text>
            </g>
          ))}
        </svg>

        <div className="grid grid-cols-1 gap-1.5" role="list">
          {BODY_SITES.map((site) => (
            <div key={site.n} className="flex items-center gap-2" role="listitem">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground/40 text-[10px] font-bold text-foreground">
                {site.n}
              </span>
              <span className="text-sm text-foreground">{site.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Possible locations only — the notes do not assign a particular parasite to a particular site.
      </div>
    </div>
  );
}
