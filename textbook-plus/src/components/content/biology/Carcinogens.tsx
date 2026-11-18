import type { ReactNode } from "react";
import {
  Biohazard,
  Dna,
  FlaskConical,
  Info,
  Radiation,
  type LucideIcon,
} from "lucide-react";
import { Highlight } from "@/components/content/Highlight";

/**
 * Carcinogens — the causes-of-cancer block: the definition panel and three
 * like-for-like cards. Each card owns its accent colour and icon so the three
 * classes can be told apart at a glance without changing their visual weight.
 *
 * amber = physical, rose = chemical, violet = biological.
 */

type Tone = "amber" | "rose" | "violet";

const TONES: Record<
  Tone,
  {
    card: string;
    bar: string;
    header: string;
    icon: string;
    chip: string;
    panel: string;
    dot: string;
  }
> = {
  amber: {
    card: "border-amber-600/35",
    bar: "bg-amber-400/80 dark:bg-amber-500/60",
    header: "bg-amber-50/45 dark:bg-amber-950/20",
    icon: "text-amber-700 dark:text-amber-300",
    chip: "border-amber-600/30 bg-amber-50/45 dark:bg-amber-950/20",
    panel: "border-amber-600/25 bg-amber-50/30 dark:bg-amber-950/15",
    dot: "bg-amber-600/60",
  },
  rose: {
    card: "border-rose-600/35",
    bar: "bg-rose-400/80 dark:bg-rose-500/60",
    header: "bg-rose-50/45 dark:bg-rose-950/20",
    icon: "text-rose-700 dark:text-rose-300",
    chip: "border-rose-600/30 bg-rose-50/45 dark:bg-rose-950/20",
    panel: "border-rose-600/25 bg-rose-50/30 dark:bg-rose-950/15",
    dot: "bg-rose-600/60",
  },
  violet: {
    card: "border-violet-600/35",
    bar: "bg-violet-400/80 dark:bg-violet-500/60",
    header: "bg-violet-50/45 dark:bg-violet-950/20",
    icon: "text-violet-700 dark:text-violet-300",
    chip: "border-violet-600/30 bg-violet-50/45 dark:bg-violet-950/20",
    panel: "border-violet-600/25 bg-violet-50/30 dark:bg-violet-950/15",
    dot: "bg-violet-600/60",
  },
};

function DotList({ items, dotClass }: { items: ReactNode[]; dotClass: string }) {
  return (
    <div className="space-y-1">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2 text-[10.5px] leading-snug text-foreground">
          <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dotClass}`} aria-hidden />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function CardShell({
  tone,
  Icon,
  title,
  children,
}: {
  tone: Tone;
  Icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  const t = TONES[tone];
  return (
    <div className={`flex flex-col overflow-hidden rounded-xl border-2 ${t.card} bg-card`}>
      <div className={`h-1 ${t.bar}`} aria-hidden />
      <div className={`flex items-center gap-2 border-b border-border px-3 py-2 ${t.header}`}>
        <Icon className={`h-4 w-4 shrink-0 ${t.icon}`} aria-hidden />
        <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
      </div>
      <div className="flex flex-1 flex-col p-3.5">{children}</div>
    </div>
  );
}

function SourceTag({ children, tone }: { children: ReactNode; tone: Tone }) {
  return (
    <span
      className={`rounded border px-1.5 py-0.5 text-[8.5px] font-semibold ${TONES[tone].chip} text-foreground/85`}
    >
      {children}
    </span>
  );
}

export function CarcinogensSection() {
  return (
    <div className="my-5 space-y-4">
      <div className="text-sm font-bold tracking-tight text-foreground">Causes of Cancer — Carcinogens</div>

      {/* Definition */}
      <div className="flex items-start gap-2.5 rounded-xl border-2 border-border bg-muted/25 p-4">
        <Biohazard className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Definition
          </div>
          <p className="mt-1 text-[10.5px] leading-snug text-foreground">
            <strong>Carcinogens</strong> = Physical, chemical or biological agents that can induce the transformation
            of normal cells into cancerous cells.
          </p>
        </div>
      </div>

      {/* Three equal-weight class cards */}
      <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-3">
        {/* A. Physical */}
        <CardShell tone="amber" Icon={Radiation} title="A. Physical Carcinogens">
          <p className="text-[10.5px] leading-snug text-foreground">
            <strong>Radiations</strong> that damage DNA.
          </p>

          <div className="mt-3">
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Type | Examples
            </div>
            <div className="mt-1 overflow-hidden rounded-lg border border-border">
              <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                <div className="px-2 py-1.5">Type</div>
                <div className="px-2 py-1.5">Examples</div>
              </div>
              {[
                ["Ionising radiation", "X-rays, gamma rays"],
                ["Non-ionising radiation", "Ultraviolet (UV) rays"],
              ].map(([type, examples]) => (
                <div key={type} className="grid grid-cols-2 border-b border-border last:border-b-0">
                  <div className="px-2 py-1.5 text-[10.5px] font-semibold leading-snug text-foreground">{type}</div>
                  <div className="px-2 py-1.5 text-[10.5px] leading-snug text-foreground/85">{examples}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-3 rounded-lg border px-2.5 py-2 ${TONES.amber.panel}`}>
            <DotList
              dotClass={TONES.amber.dot}
              items={[
                <>
                  <strong>Ionising radiation</strong> can cause structural DNA damage.
                </>,
                <>
                  <strong>UV radiation</strong> can induce DNA alterations.
                </>,
              ]}
            />
          </div>
        </CardShell>

        {/* B. Chemical */}
        <CardShell tone="rose" Icon={FlaskConical} title="B. Chemical Carcinogens">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Examples mentioned in the notes:
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {["Tobacco smoke", "Aniline dyes", "Mustard gas"].map((item) => (
              <span key={item} className={`rounded-md border px-2 py-1 text-[11px] font-semibold text-foreground ${TONES.rose.chip}`}>
                {item}
              </span>
            ))}
          </div>

          {/* Scientific clarification */}
          <div className="mt-3 rounded-lg border-2 border-rose-600/35 bg-rose-50/40 p-3 dark:bg-rose-950/20">
            <div className="flex items-start gap-2">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
              <div>
                <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
                  Scientific clarification
                </div>
                <div className="text-sm font-bold tracking-tight text-foreground">Tobacco smoke vs Nicotine</div>
              </div>
            </div>

            <div className="mt-2 space-y-2">
              <div className="rounded-md border border-border bg-card px-2.5 py-2">
                <p className="text-[10.5px] leading-snug text-foreground">
                  <strong>Tobacco smoke</strong> contains numerous carcinogenic chemicals. Nicotine is primarily the
                  addictive substance, not the main carcinogenic component of tobacco smoke.
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                    Source
                  </span>
                  <SourceTag tone="rose">FDA</SourceTag>
                </div>
              </div>

              <div className="rounded-md border border-border bg-card px-2.5 py-2">
                <p className="text-[10.5px] leading-snug text-foreground">
                  Also, your source lists caffeine as a carcinogen. However,{" "}
                  <strong>IARC evaluated caffeine as Group 3</strong> — not classifiable as to its carcinogenicity to
                  humans. Do not memorise it as an established carcinogen.
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                    Source
                  </span>
                  <SourceTag tone="rose">IARC · publications.iarc.fr</SourceTag>
                </div>
              </div>
            </div>
          </div>
        </CardShell>

        {/* C. Biological */}
        <CardShell tone="violet" Icon={Dna} title="C. Biological Carcinogens">
          <p className="text-[10.5px] leading-snug text-foreground">
            <strong>Cancer-causing viruses and oncogenes</strong> are involved.
          </p>

          <div className="mt-3 space-y-2.5">
            <div className={`rounded-lg border px-2.5 py-2 ${TONES.violet.panel}`}>
              <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
                1. Viral oncogenes
              </div>
              <div className="mt-1.5">
                <DotList
                  dotClass={TONES.violet.dot}
                  items={[
                    <>
                      <strong>Oncogenic viruses</strong> are cancer-causing viruses.
                    </>,
                    <>
                      They carry genes called <strong>viral oncogenes</strong>.
                    </>,
                  ]}
                />
              </div>
            </div>

            <div className={`rounded-lg border px-2.5 py-2 ${TONES.violet.panel}`}>
              <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
                2. Cellular oncogenes (c-onc)
              </div>
              <div className="mt-1.5 rounded-md border border-violet-600/35 bg-card px-2 py-1.5">
                <div className="text-[8px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  Key distinction
                </div>
                <p className="mt-0.5 text-[10.5px] leading-snug text-foreground">
                  <strong>Normal cells</strong> contain genes called <Highlight>proto-oncogenes</Highlight>.
                </p>
              </div>
              <p className="mt-1.5 text-[10.5px] leading-snug text-foreground">
                <strong>Under certain activating conditions</strong>, these genes can contribute to oncogenic cell
                transformation.
              </p>
            </div>
          </div>
        </CardShell>
      </div>
    </div>
  );
}
