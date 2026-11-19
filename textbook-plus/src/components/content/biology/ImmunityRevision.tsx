import type { ReactNode } from "react";
import { CollapsibleRevision } from "@/components/content/CollapsibleRevision";
import {
  Bug,
  ClipboardList,
  Network,
  type LucideIcon,
} from "lucide-react";

/**
 * ImmunityRevision — compact closing revision block for the allergy /
 * autoimmunity and lymphoid-organ notes. Amber + indigo accent, matched in
 * weight to FinalRevisionSheet but with its own layout and content.
 */

const ALLERGY_ROWS: [string, string][] = [
  ["Allergy", "Exaggerated immune response"],
  ["Allergens", "Dust, mites, pollen, animal dander"],
  ["Antibody", "IgE"],
  ["Mast-cell chemicals", "Histamine, serotonin"],
  ["Allergy treatment", "Antihistamines, adrenaline, steroids"],
  ["Autoimmunity", "Immune system attacks own tissues"],
  ["Example", "Rheumatoid arthritis"],
];

type OrganTone = "primary" | "secondary" | "malt";

interface OrganRow {
  classification: string;
  organ: string;
  role: string;
  tone: OrganTone;
}

const ORGAN_ROWS: OrganRow[] = [
  {
    classification: "Primary",
    organ: "Bone marrow",
    role: "Blood-cell formation; B-cell maturation",
    tone: "primary",
  },
  {
    classification: "Primary",
    organ: "Thymus",
    role: "T-cell maturation",
    tone: "primary",
  },
  {
    classification: "Secondary",
    organ: "Spleen",
    role: "Traps blood-borne microbes; RBC reservoir and removal",
    tone: "secondary",
  },
  {
    classification: "Secondary",
    organ: "Lymph nodes",
    role: "Trap microbes in lymph",
    tone: "secondary",
  },
  {
    classification: "Secondary",
    organ: "Tonsils",
    role: "Lymphoid organ",
    tone: "secondary",
  },
  {
    classification: "Secondary",
    organ: "Peyer's patches",
    role: "Lymphoid tissue",
    tone: "secondary",
  },
  {
    classification: "Secondary",
    organ: "Appendix",
    role: "Lymphoid tissue",
    tone: "secondary",
  },
  {
    classification: "MALT",
    organ: "Digestive, respiratory, urogenital mucosa",
    role: "Traps microorganisms",
    tone: "malt",
  },
];

const toneStyles: Record<OrganTone, { row: string; label: string }> = {
  primary: {
    row: "bg-indigo-50/35 dark:bg-indigo-950/15",
    label: "text-indigo-800 dark:text-indigo-300",
  },
  secondary: {
    row: "bg-card",
    label: "text-sky-800 dark:text-sky-300",
  },
  malt: {
    row: "bg-amber-50/35 dark:bg-amber-950/15",
    label: "text-amber-800 dark:text-amber-300",
  },
};

function Subhead({ Icon, children }: { Icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-3.5 w-3.5 shrink-0 text-indigo-700 dark:text-indigo-300" aria-hidden />
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

function AllergyTable() {
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-border">
      <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        <div className="px-2.5 py-1.5">Topic</div>
        <div className="px-2.5 py-1.5">Must remember</div>
      </div>
      {ALLERGY_ROWS.map(([topic, remember]) => (
        <div key={topic} className="grid grid-cols-2 border-b border-border last:border-b-0">
          <div className="px-2.5 py-1.5 text-[10.5px] font-semibold leading-snug text-foreground">
            {topic}
          </div>
          <div className="px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground/85">
            {remember}
          </div>
        </div>
      ))}
    </div>
  );
}

function LymphoidOrgansTable() {
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-border">
      <div className="grid grid-cols-3 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        <div className="px-2 py-1.5">Classification</div>
        <div className="px-2 py-1.5">Organ</div>
        <div className="px-2 py-1.5">Important role</div>
      </div>
      {ORGAN_ROWS.map((row) => {
        const styles = toneStyles[row.tone];
        return (
          <div
            key={`${row.classification}-${row.organ}`}
            className={`grid grid-cols-3 border-b border-border last:border-b-0 ${styles.row}`}
          >
            <div className={`px-2 py-1.5 text-[9.5px] font-bold leading-snug ${styles.label}`}>
              {row.classification}
            </div>
            <div className="px-2 py-1.5 text-[10px] font-semibold leading-snug text-foreground">
              {row.organ}
            </div>
            <div className="px-2 py-1.5 text-[9.5px] leading-snug text-foreground/85">
              {row.role}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function QuickRevisionSheet() {
  return (
    <CollapsibleRevision
      className="my-8 rounded-2xl border-2 border-amber-500/50 bg-gradient-to-br from-indigo-50/50 via-card to-amber-50/60 shadow-sm dark:from-indigo-950/20 dark:via-card dark:to-amber-950/20"
      label="Quick Revision Sheet"
      header={
        <div className="flex items-start gap-3 border-b border-amber-500/30 bg-amber-50/50 px-4 py-3.5 pr-12 dark:bg-amber-950/25">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-600 text-white shadow-sm dark:bg-amber-500">
            <ClipboardList className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">
              At a glance
            </div>
            <div className="text-lg font-bold tracking-tight text-foreground">Quick Revision Sheet</div>
          </div>
          <Bug className="ml-auto hidden h-5 w-5 shrink-0 text-amber-500 sm:block" aria-hidden />
        </div>
      }
    >
      <div className="space-y-4 p-4">
        <div>
          <Subhead Icon={Bug}>Allergy and Autoimmunity</Subhead>
          <AllergyTable />
        </div>

        <div>
          <Subhead Icon={Network}>Lymphoid Organs</Subhead>
          <LymphoidOrgansTable />
        </div>
      </div>
    </CollapsibleRevision>
  );
}
