import { Award, Dna, Microscope, type LucideIcon } from "lucide-react";

type Role = "discovery" | "model" | "data";

const ROLE: Record<
  Role,
  { label: string; Icon: LucideIcon; card: string; badge: string; text: string }
> = {
  discovery: {
    label: "Discovery",
    Icon: Award,
    card: "border-emerald-500/30 bg-emerald-50/45 dark:bg-emerald-950/20",
    badge: "bg-emerald-600 text-white dark:bg-emerald-500",
    text: "text-emerald-800 dark:text-emerald-200",
  },
  model: {
    label: "Model proposers",
    Icon: Dna,
    card: "border-blue-500/30 bg-blue-50/45 dark:bg-blue-950/20",
    badge: "bg-blue-600 text-white dark:bg-blue-500",
    text: "text-blue-800 dark:text-blue-200",
  },
  data: {
    label: "X-ray diffraction data",
    Icon: Microscope,
    card: "border-violet-500/30 bg-violet-50/45 dark:bg-violet-950/20",
    badge: "bg-violet-600 text-white dark:bg-violet-500",
    text: "text-violet-800 dark:text-violet-200",
  },
};

function RoleCard({
  role,
  names,
  detail,
  closing,
}: {
  role: Role;
  names: string;
  detail: string;
  closing?: string;
}) {
  const style = ROLE[role];
  return (
    <div className={`rounded-xl border p-3.5 ${style.card}`}>
      <div className="flex items-center gap-2">
        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${style.badge}`}>
          <style.Icon className="h-3.5 w-3.5" aria-hidden />
        </span>
        <span className={`text-[0.68rem] font-bold uppercase tracking-wider ${style.text}`}>
          {style.label}
        </span>
      </div>
      <p className="mt-2.5 text-sm font-bold leading-snug text-foreground">{names}</p>
      <p className="mt-1 text-sm leading-relaxed text-foreground/80">{detail}</p>
      {closing && (
        <p className={`mt-2 border-t border-current/15 pt-2 text-xs font-semibold ${style.text}`}>
          {closing}
        </p>
      )}
    </div>
  );
}

function Milestone({
  year,
  dot,
  children,
}: {
  year: string;
  dot: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div className="mb-4 flex items-center gap-3">
        <span className="relative z-10 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-border bg-card">
          <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        </span>
        <span className="text-sm font-bold tabular-nums text-foreground">{year}</span>
      </div>
      {children}
    </section>
  );
}

/** Horizontal two-milestone history timeline with roles called out explicitly. */
export function DnaDiscoveryTimeline() {
  return (
    <div className="my-6 rounded-2xl border border-border bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <div>
          <div className="t-micro">Major discoveries</div>
          <p className="mt-1 text-sm font-bold tracking-tight text-foreground">
            From Nuclein to the double helix
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.7rem] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden /> Model proposers
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-violet-500" aria-hidden /> X-ray researchers
          </span>
        </div>
      </div>

      <div className="relative mt-6 grid gap-5 sm:grid-cols-2 sm:gap-6">
        <div className="pointer-events-none absolute left-[8px] right-0 top-[8px] hidden h-px bg-border sm:block" />
        <Milestone year="1869" dot="bg-emerald-500">
          <RoleCard
            role="discovery"
            names="Friedrich Miescher"
            detail="Identified an acidic substance in the cell nucleus and named it Nuclein."
          />
        </Milestone>
        <Milestone year="1953" dot="bg-blue-500">
          <div className="space-y-3">
            <RoleCard
              role="model"
              names="James Watson and Francis Crick"
              detail="Proposed the DNA Double Helical Model."
              closing="Major hallmark: complementary base pairing"
            />
            <RoleCard
              role="data"
              names="Maurice Wilkins and Rosalind Franklin"
              detail="Supplied the X-ray diffraction data the model was based on."
            />
          </div>
        </Milestone>
      </div>
    </div>
  );
}
