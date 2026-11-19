import type { ReactNode } from "react";
import {
  ArrowDown,
  Dna,
  ListChecks,
  Biohazard,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * NucleicAcidsGeneticMaterial — the opening molecular-biology block: the
 * definition of nucleic acids, the two-branch DNA / RNA tree, the four major
 * roles of RNA, and the viruses that carry RNA as their genetic material.
 *
 * blue = DNA branch, emerald = RNA branch, violet = the roles table,
 * neutral = the shared "NUCLEIC ACIDS" root and section furniture.
 */

/* -------------------------------------------------------------------------- */
/* Shared tokens                                                              */
/* -------------------------------------------------------------------------- */

const EYEBROW =
  "text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground";
const BODY = "text-[10.5px] leading-snug text-foreground";

type BranchTone = "blue" | "emerald";

type BranchData = {
  code: string;
  fullName: string;
  role: string;
  detail: string;
  tone: BranchTone;
  Icon: LucideIcon;
};

const NUCLEIC_ACID_BRANCHES: BranchData[] = [
  {
    code: "DNA",
    fullName: "Deoxyribonucleic Acid",
    role: "Genetic material",
    detail: "Primary genetic material in most organisms.",
    tone: "blue",
    Icon: Dna,
  },
  {
    code: "RNA",
    fullName: "Ribonucleic Acid",
    role: "Multiple roles",
    detail: "Genetic material in some viruses; performs several cellular functions.",
    tone: "emerald",
    Icon: Sparkles,
  },
];

const BRANCH_STYLES: Record<
  BranchTone,
  { card: string; code: string; node: string; arrow: string; connector: string }
> = {
  blue: {
    card: "border-blue-600/35 bg-blue-50/40 dark:bg-blue-950/20",
    code: "text-blue-800 dark:text-blue-200",
    node: "border-blue-600/25 bg-blue-50/50 dark:bg-blue-950/25",
    arrow: "text-blue-500/70 dark:text-blue-400",
    connector: "bg-blue-500/55",
  },
  emerald: {
    card: "border-emerald-600/35 bg-emerald-50/40 dark:bg-emerald-950/20",
    code: "text-emerald-800 dark:text-emerald-200",
    node: "border-emerald-600/25 bg-emerald-50/50 dark:bg-emerald-950/25",
    arrow: "text-emerald-500/70 dark:text-emerald-400",
    connector: "bg-emerald-500/55",
  },
};

/* -------------------------------------------------------------------------- */
/* 1.1 Nucleic Acids                                                          */
/* -------------------------------------------------------------------------- */

function ChainArrow({ tone }: { tone: BranchTone }) {
  return (
    <div className="flex justify-center py-0.5" aria-hidden>
      <ArrowDown className={`h-3.5 w-3.5 ${BRANCH_STYLES[tone].arrow}`} />
    </div>
  );
}

function BranchChain({ branch }: { branch: BranchData }) {
  const style = BRANCH_STYLES[branch.tone];

  return (
    <div className={`rounded-xl border-2 p-3 ${style.card}`}>
      <div className="flex items-center gap-2">
        <branch.Icon
          className={`h-4 w-4 shrink-0 ${style.code}`}
          aria-hidden
        />
        <span className={`text-sm font-bold tracking-tight ${style.code}`}>
          {branch.code}
        </span>
      </div>

      <ChainArrow tone={branch.tone} />

      <div className={`rounded-md border px-2 py-1.5 text-center ${style.node}`}>
        <span className={BODY}>{branch.fullName}</span>
      </div>

      <ChainArrow tone={branch.tone} />

      <div className={`rounded-md border px-2 py-1.5 text-center ${style.node}`}>
        <span className={`text-[10.5px] font-bold leading-snug ${style.code}`}>
          {branch.role}
        </span>
      </div>

      <ChainArrow tone={branch.tone} />

      <div className={`rounded-md border px-2 py-1.5 ${style.node}`}>
        <p className={BODY}>{branch.detail}</p>
      </div>
    </div>
  );
}

function NucleicAcidsTree() {
  return (
    <div className="mt-3">
      <div className="mx-auto w-fit rounded-lg border-2 border-border bg-muted/40 px-5 py-1.5 text-center">
        <span className={`${EYEBROW} tracking-[0.12em] text-foreground`}>
          Nucleic Acids
        </span>
      </div>

      {/* Mobile: a single stem feeds the stacked branches. */}
      <div className="mx-auto flex h-6 justify-center sm:hidden" aria-hidden>
        <div className="h-full w-px bg-muted-foreground/40" />
      </div>

      {/* sm+: central stem → split bar → two colour-coded drops. */}
      <div className="relative mx-auto hidden h-8 w-full max-w-md sm:block" aria-hidden>
        <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-muted-foreground/45" />
        <div className="absolute left-1/4 right-1/2 top-1/2 h-px bg-blue-500/55" />
        <div className="absolute left-1/2 right-1/4 top-1/2 h-px bg-emerald-500/55" />
        <div className="absolute left-1/4 top-1/2 h-1/2 w-px -translate-x-1/2 bg-blue-500/55" />
        <div className="absolute right-1/4 top-1/2 h-1/2 w-px translate-x-1/2 bg-emerald-500/55" />
      </div>

      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        {NUCLEIC_ACID_BRANCHES.map((branch) => (
          <BranchChain key={branch.code} branch={branch} />
        ))}
      </div>
    </div>
  );
}

function NucleicAcidsBlock() {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <Dna className="h-4 w-4 shrink-0 text-blue-700 dark:text-blue-300" aria-hidden />
        <h3 className="text-sm font-bold tracking-tight text-foreground">1.1 Nucleic Acids</h3>
      </div>

      <div className="flex items-start gap-2.5 rounded-xl border-2 border-blue-600/35 bg-blue-50/40 p-4 dark:bg-blue-950/20">
        <Dna
          className="mt-0.5 h-4 w-4 shrink-0 text-blue-700 dark:text-blue-300"
          aria-hidden
        />
        <div>
          <div className={`${EYEBROW} text-blue-800 dark:text-blue-300`}>Definition</div>
          <p className={`mt-1 ${BODY}`}>
            Nucleic acids are <strong>long polymers of nucleotides</strong> found in living organisms.
          </p>
        </div>
      </div>

      <div>
        <div className={EYEBROW}>Two types</div>
        <NucleicAcidsTree />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 1.2 Functions of RNA                                                        */
/* -------------------------------------------------------------------------- */

const RNA_ROLES: [string, string][] = [
  ["Messenger", "mRNA"],
  ["Adapter", "tRNA"],
  ["Structural", "rRNA"],
  ["Catalytic", "Ribozyme"],
];

function RolesTable() {
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-violet-600/25 bg-card">
      <div className="grid grid-cols-2 border-b border-violet-600/25 bg-violet-50/50 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-violet-900 dark:bg-violet-950/25 dark:text-violet-200">
        <div className="px-2.5 py-1.5">Role</div>
        <div className="px-2.5 py-1.5">Type of RNA</div>
      </div>
      {RNA_ROLES.map(([role, type]) => (
        <div key={role} className="grid grid-cols-2 border-b border-border last:border-b-0">
          <div className="px-2.5 py-1.5 text-[10.5px] font-semibold leading-snug text-foreground">
            {role}
          </div>
          <div className="px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground/85">
            {type}
          </div>
        </div>
      ))}
    </div>
  );
}

function VirusChip({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-emerald-600/30 bg-emerald-50/40 px-2.5 py-2 dark:bg-emerald-950/20">
      <Biohazard
        className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-300"
        aria-hidden
      />
      <span className={`${BODY} font-semibold`}>{children}</span>
    </div>
  );
}

function RnaFunctionsBlock() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <ListChecks className="h-4 w-4 shrink-0 text-violet-700 dark:text-violet-300" aria-hidden />
        <h3 className="text-sm font-bold tracking-tight text-foreground">1.2 Functions of RNA</h3>
      </div>

      <div>
        <p className={`${BODY} font-semibold`}>RNA can perform four major roles:</p>
        <RolesTable />
      </div>

      <div>
        <div className={EYEBROW}>RNA as genetic material</div>
        <p className={`mt-1 ${BODY}`}>
          <strong>RNA serves as genetic material</strong> in certain viruses, including:
        </p>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <VirusChip>
            <em>Tobacco Mosaic Virus</em> (TMV)
          </VirusChip>
          <VirusChip>
            <em>Qβ</em> (QB) bacteriophage
          </VirusChip>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export function NucleicAcidsSection() {
  return (
    <div className="my-5 space-y-5">
      <NucleicAcidsBlock />
      <RnaFunctionsBlock />
    </div>
  );
}
