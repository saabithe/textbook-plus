import type { ReactNode } from "react";
import {
  ArrowDown,
  Atom,
  Brain,
  Crosshair,
  GitBranch,
  RotateCcw,
  ShieldAlert,
  Zap,
} from "lucide-react";

/**
 * ImmunityAcquired — the acquired-immunity block: its two characteristics,
 * primary versus secondary responses to the same pathogen, the two lymphocyte
 * branches, antibody structure, and the humoral / CMI split with transplant
 * rejection kept entirely inside the CMI callout.
 *
 * violet = the two defining characteristics and the response pair,
 * sky / violet = the B- and T-cell branches, indigo = antibody structure,
 * sky = humoral, violet = CMI, amber = the transplant-rejection callout.
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
/* 1. Characteristics                                                          */
/* -------------------------------------------------------------------------- */

const CHARACTERISTICS = [
  { number: 1, title: "Specificity", detail: "Acts against a particular pathogen.", Icon: Crosshair },
  { number: 2, title: "Memory", detail: "Remembers previous encounters with a pathogen.", Icon: Brain },
];

export function AcquiredImmunityIntro() {
  return (
    <div className="my-5">
      <div className="text-sm font-bold tracking-tight text-foreground">Characteristics</div>
      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CHARACTERISTICS.map(({ number, title, detail, Icon }) => (
          <div
            key={number}
            className="rounded-xl border-2 border-violet-600/35 bg-violet-50/35 p-4 dark:bg-violet-950/20"
          >
            <div className="flex items-start gap-2">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-violet-600/40 bg-violet-50/60 text-[9px] font-bold text-violet-800 dark:bg-violet-950/25 dark:text-violet-200">
                {number}
              </span>
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-violet-700 dark:text-violet-300" aria-hidden />
              <div className="text-[11px] font-bold leading-snug text-foreground">
                {title} <span className="font-normal text-foreground/85">— {detail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Primary and secondary responses                                          */
/* -------------------------------------------------------------------------- */

export function PrimarySecondaryResponse() {
  return (
    <div className="my-5">
      <div className="text-sm font-bold tracking-tight text-foreground">Primary and Secondary Immune Responses</div>

      <div className="mt-2 grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2">
        {/* First encounter — deliberately light emphasis */}
        <div className="overflow-hidden rounded-xl border border-violet-600/25 bg-card">
          <div className="h-1 bg-violet-300/70 dark:bg-violet-500/50" aria-hidden />
          <div className="p-3.5">
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              First encounter
            </div>
            <div className="mt-0.5 flex items-center gap-1.5">
              <RotateCcw className="h-3.5 w-3.5 shrink-0 text-violet-600/70 dark:text-violet-400" aria-hidden />
              <span className="text-sm font-bold tracking-tight text-foreground">Primary response</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="text-[10.5px] leading-snug text-foreground/85">
                Generated when the body encounters a pathogen for the first time.
              </div>
              <div className="text-[10.5px] leading-snug text-foreground/85">
                <strong>Low-intensity</strong> immune response.
              </div>
            </div>
          </div>
        </div>

        {/* Subsequent encounter — deliberately strong emphasis */}
        <div className="overflow-hidden rounded-xl border-2 border-violet-600/60 bg-violet-50/40 shadow-sm dark:bg-violet-950/25">
          <div
            className="h-2 bg-gradient-to-r from-violet-600 to-violet-500 dark:from-violet-500 dark:to-violet-400"
            aria-hidden
          />
          <div className="p-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
                Subsequent encounter
              </span>
              <span className="rounded border border-violet-600/40 bg-violet-50/60 px-1.5 py-0.5 text-[9px] font-semibold text-violet-900 dark:bg-violet-950/30 dark:text-violet-200">
                Same pathogen
              </span>
            </div>
            <div className="mt-0.5 flex items-center gap-1.5">
              <Zap className="h-4 w-4 shrink-0 fill-violet-600/25 text-violet-700 dark:text-violet-300" aria-hidden />
              <span className="text-sm font-bold tracking-tight text-foreground">
                Secondary response (Anamnestic response)
              </span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="text-[10.5px] font-semibold leading-snug text-foreground">
                Triggered when the same pathogen enters again.
              </div>
              <div className="text-[10.5px] leading-snug text-foreground">
                <strong>Highly intensified</strong> response.
              </div>
              <div className="text-[10.5px] leading-snug text-foreground">
                Depends on <strong>immunological memory.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Lymphocytes                                                              */
/* -------------------------------------------------------------------------- */

function LymphocyteBranch({
  label,
  outcomes,
  tone,
}: {
  label: string;
  outcomes: string[];
  tone: "sky" | "violet";
}) {
  const nodeClass =
    tone === "sky"
      ? "border-sky-600/40 bg-sky-50/45 dark:bg-sky-950/20"
      : "border-violet-600/40 bg-violet-50/45 dark:bg-violet-950/20";
  const connectorClass = tone === "sky" ? "bg-sky-600/50" : "bg-violet-600/50";

  return (
    <div className="flex flex-col items-center">
      <div className={`w-full rounded-lg border-2 px-3 py-2 text-center ${nodeClass}`}>
        <div className="text-[11px] font-bold leading-snug text-foreground">{label}</div>
      </div>
      <div className={`h-4 w-px shrink-0 ${connectorClass}`} aria-hidden />
      <div className="w-full rounded-lg border border-border bg-muted/25 px-3 py-2 text-center">
        <div className="space-y-0.5">
          {outcomes.map((outcome, index) => (
            <div key={outcome} className="text-[10.5px] font-semibold leading-snug text-foreground">
              {index > 0 && <span className="mr-1 text-muted-foreground">+</span>}
              {outcome}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const LYMPHOCYTE_ROWS = [
  { cell: "B-lymphocytes (B cells)", role: "Produce antibodies against pathogens" },
  { cell: "T-lymphocytes (T cells)", role: "Assist B cells and mediate cell-mediated immunity" },
];

export function LymphocyteRoles() {
  return (
    <div className="my-5">
      <div className="text-sm font-bold tracking-tight text-foreground">Lymphocytes and Their Roles</div>
      <div className="mt-1 text-[10.5px] leading-snug text-foreground/85">
        Two important lymphocyte types participate in acquired immunity.
      </div>

      <div className="mt-3 rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-1.5">
          <GitBranch className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
          <span className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Two branches
          </span>
        </div>
        <div className="mt-2 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
          <LymphocyteBranch label="B-lymphocytes (B cells)" outcomes={["Antibody production"]} tone="sky" />
          <LymphocyteBranch
            label="T-lymphocytes (T cells)"
            outcomes={["Assistance to B cells", "Cell-mediated immunity"]}
            tone="violet"
          />
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          <div className="px-2.5 py-1.5">Lymphocyte</div>
          <div className="px-2.5 py-1.5">Role</div>
        </div>
        {LYMPHOCYTE_ROWS.map((row) => (
          <div key={row.cell} className="grid grid-cols-2 border-b border-border last:border-b-0">
            <div className="px-2.5 py-2 text-[10.5px] font-semibold leading-snug text-foreground">{row.cell}</div>
            <div className="px-2.5 py-2 text-[10.5px] leading-snug text-foreground/85">{row.role}</div>
          </div>
        ))}
      </div>

      <DotList
        dotClass="bg-violet-600/60"
        items={[
          <>B cells produce an army of proteins called <strong>antibodies.</strong></>,
          <>T cells help B cells produce antibodies.</>,
          <>T cells also play a major role in <strong>cell-mediated immunity.</strong></>,
        ]}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. Antibody structure                                                       */
/* -------------------------------------------------------------------------- */

function AntibodyDiagram() {
  return (
    <div className="rounded-xl border border-indigo-600/25 bg-card p-2 dark:bg-indigo-950/10">
      <svg
        viewBox="0 0 340 292"
        className="h-auto w-full max-w-[300px]"
        role="img"
        aria-label="Simplified Y-shaped antibody schematic. Two long heavy chains form the Y and two shorter light chains run along the upper arms. Antigen-binding sites sit at both arm tips, variable regions occupy the upper arms, constant regions the remaining chain portions, disulfide bonds join the chains, and the lower vertical stem is the Fc region."
      >
        {/* Heavy chains — constant region (lower arms and stem) */}
        <g
          className="text-indigo-400 dark:text-indigo-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
        >
          <path d="M170 240 L170 150" />
          <path d="M113 93 L170 150" />
          <path d="M227 93 L170 150" />
        </g>

        {/* Heavy chains — variable region (upper portions of the arms) */}
        <g
          className="text-indigo-700 dark:text-indigo-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
        >
          <path d="M75 55 L113 93" />
          <path d="M265 55 L227 93" />
        </g>

        {/* Light chains — shorter, parallel to the upper arms */}
        <g
          className="text-sky-500 dark:text-sky-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <path d="M120 108 L68 56" />
          <path d="M220 108 L272 56" />
        </g>

        {/* Disulfide bonds — small connectors between chains */}
        <g className="text-rose-500 dark:text-rose-400" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M100 80 L100 88" />
          <path d="M85 65 L85 73" />
          <path d="M240 80 L240 88" />
          <path d="M255 65 L255 73" />
          <path d="M163 156 L177 156" />
          <path d="M163 164 L177 164" />
        </g>

        {/* Antigen-binding sites at both arm tips */}
        <g className="text-amber-500 dark:text-amber-400" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
          <rect x="66" y="46" width="18" height="14" rx="7" />
          <rect x="256" y="46" width="18" height="14" rx="7" />
        </g>

        {/* Leader lines */}
        <g className="text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="0.9">
          <path d="M80 92 L94 78" />
          <path d="M205 210 L177 214" />
          <path d="M188 143 L176 150" />
          <path d="M246 112 L240 89" />
        </g>

        {/* Labels */}
        <g className="fill-amber-700 text-[8.5px] font-semibold dark:fill-amber-300">
          <text x="75" y="36" textAnchor="middle">
            Antigen-binding site
          </text>
          <text x="265" y="36" textAnchor="middle">
            Antigen-binding site
          </text>
        </g>
        <g className="fill-foreground text-[9px] font-semibold">
          <text x="10" y="92">Variable region</text>
          <text x="210" y="212">Constant region</text>
          <text x="192" y="142">Hinge region</text>
          <text x="248" y="116">Disulfide bonds</text>
          <text x="170" y="262" textAnchor="middle" className="fill-foreground text-[10px] font-bold">
            Fc region
          </text>
        </g>

        {/* Chain legend */}
        <g strokeLinecap="round">
          <path d="M60 284 L76 284" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="6" />
          <text x="82" y="287" className="fill-muted-foreground text-[9px]">
            Heavy (H) chain
          </text>
          <path d="M190 284 L206 284" className="stroke-sky-500 dark:stroke-sky-400" strokeWidth="4" />
          <text x="212" y="287" className="fill-muted-foreground text-[9px]">
            Light (L) chain
          </text>
        </g>
      </svg>

      <p className="mt-2 px-1 text-[9px] leading-snug text-muted-foreground">
        Simplified structural illustration. The antibody has two antigen-binding sites at the tips of its arms.
      </p>
    </div>
  );
}

const STRUCTURAL_FEATURES = [
  { feature: "Antigen-binding sites", description: "Located at the tips of the variable regions" },
  { feature: "Variable region", description: "Upper portions of the arms" },
  { feature: "Constant region", description: "Relatively constant portions of the chains" },
  { feature: "Hinge region", description: "Junction between the arms and stem" },
  { feature: "Disulfide bonds", description: "Hold the chains together" },
  { feature: "Arm region", description: "Upper forked part of the antibody" },
  { feature: "Stem region (Fc region)", description: "Lower vertical part" },
];

const ANTIBODY_CLASSES = ["IgA", "IgM", "IgE", "IgG"];

export function AntibodyStructure() {
  return (
    <div className="my-5">
      <div className="flex items-center gap-2">
        <Atom className="h-4 w-4 shrink-0 text-indigo-700 dark:text-indigo-300" aria-hidden />
        <div className="text-sm font-bold tracking-tight text-foreground">Structure of an Antibody Molecule</div>
      </div>

      <div className="mt-2 rounded-xl border-2 border-indigo-600/35 bg-indigo-50/35 p-4 dark:bg-indigo-950/20">
        <div className="text-[11px] font-bold leading-snug text-foreground">
          Basic structure: antibody molecules are represented as H<sub>2</sub>L<sub>2</sub>
        </div>
        <div className="mt-2 text-[10.5px] leading-snug text-foreground">
          Each antibody contains four polypeptide chains:
        </div>
        <DotList
          dotClass="bg-indigo-600/60"
          items={[
            <>
              <strong>2 Heavy (H) chains</strong> → Longer chains.
            </>,
            <>
              <strong>2 Light (L) chains</strong> → Shorter chains.
            </>,
          ]}
        />
      </div>

      <div className="mt-3 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <AntibodyDiagram />

        <div className="overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            <div className="px-2.5 py-1.5">Feature</div>
            <div className="px-2.5 py-1.5">Description</div>
          </div>
          {STRUCTURAL_FEATURES.map((row) => (
            <div key={row.feature} className="grid grid-cols-2 border-b border-border last:border-b-0">
              <div className="px-2.5 py-1.5 text-[10.5px] font-semibold leading-snug text-foreground">
                {row.feature}
              </div>
              <div className="px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground/85">{row.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 border-t border-border pt-2.5">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Major antibody classes listed in the notes
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {ANTIBODY_CLASSES.map((antibodyClass) => (
            <span
              key={antibodyClass}
              className="rounded-md border border-indigo-600/30 bg-indigo-50/45 px-2 py-1 text-[11px] font-semibold text-foreground dark:bg-indigo-950/20"
            >
              {antibodyClass}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. Humoral versus cell-mediated immunity                                    */
/* -------------------------------------------------------------------------- */

function MiniFlow({ steps, tone }: { steps: string[]; tone: "sky" | "violet" }) {
  const nodeClass =
    tone === "sky"
      ? "border-sky-600/35 bg-sky-50/45 dark:bg-sky-950/20"
      : "border-violet-600/35 bg-violet-50/45 dark:bg-violet-950/20";

  return (
    <div className="mt-2 rounded-lg border border-border bg-muted/20 p-2.5">
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Sequence</div>
      <div className="mt-1.5 flex flex-col items-center gap-1">
        {steps.map((step, index) => (
          <div key={step} className="flex w-full flex-col items-center gap-1">
            <div className={`w-full rounded-md border px-2 py-1.5 text-center text-[10.5px] font-semibold text-foreground ${nodeClass}`}>
              {step}
            </div>
            {index < steps.length - 1 && (
              <ArrowDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HumoralVsCmi() {
  return (
    <div className="my-5">
      <div className="text-sm font-bold tracking-tight text-foreground">Types of Acquired Immune Responses</div>
      <div className="mt-1 text-[10.5px] leading-snug text-foreground/85">
        Acquired immunity operates through two main responses:
      </div>

      <div className="mt-3 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        {/* A. Humoral */}
        <div className="rounded-xl border-2 border-sky-600/35 bg-sky-50/30 p-3.5 dark:bg-sky-950/15">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-sky-800 dark:text-sky-300">
            A. Humoral Immune Response
          </div>
          <DotList
            dotClass="bg-sky-600/60"
            items={[
              <>Also called antibody-mediated immunity.</>,
              <>Involves antibodies present freely in blood plasma.</>,
              <>Mainly associated with <strong>B-lymphocytes.</strong></>,
            ]}
          />
          <MiniFlow
            tone="sky"
            steps={["B-lymphocytes", "Antibodies", "Antibody-mediated immunity"]}
          />
        </div>

        {/* B. CMI + its transplant-rejection callout */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border-2 border-violet-600/35 bg-violet-50/30 p-3.5 dark:bg-violet-950/15">
            <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
              B. Cell-Mediated Immunity (CMI)
            </div>
            <DotList
              dotClass="bg-violet-600/60"
              items={[
                <>Mediated by <strong>T-lymphocytes.</strong></>,
                <>Distinguishes between self and non-self.</>,
                <>Responsible for graft rejection in organ transplantation.</>,
              ]}
            />
            <MiniFlow
              tone="violet"
              steps={["T-lymphocytes", "Self / non-self recognition", "Graft rejection"]}
            />
          </div>

          <div className="rounded-xl border-2 border-amber-600/45 bg-amber-50/50 p-3.5 dark:bg-amber-950/20">
            <div className="flex items-center gap-1.5">
              <ShieldAlert className="h-3.5 w-3.5 shrink-0 text-amber-800 dark:text-amber-300" aria-hidden />
              <div className="text-sm font-bold tracking-tight text-foreground">Transplant rejection</div>
            </div>

            <div className="mt-2 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Examples of transplanted organs mentioned
            </div>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {["Heart", "Eye", "Liver", "Kidney"].map((organ) => (
                <span
                  key={organ}
                  className="rounded-md border border-amber-600/35 bg-card px-2 py-1 text-[11px] font-semibold text-foreground"
                >
                  {organ}
                </span>
              ))}
            </div>

            <div className="mt-3 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Clinical requirements for transplantation
            </div>
            <ol className="mt-1.5 space-y-1.5">
              {[
                "Tissue matching.",
                "Blood group matching.",
                "Lifelong administration of immunosuppressants.",
              ].map((requirement, index) => (
                <li key={requirement} className="flex items-start gap-2">
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-amber-600/40 bg-amber-50/60 text-[8.5px] font-bold text-amber-900 dark:bg-amber-950/25 dark:text-amber-200">
                    {index + 1}
                  </span>
                  <span className="text-[10.5px] leading-snug text-foreground">{requirement}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
