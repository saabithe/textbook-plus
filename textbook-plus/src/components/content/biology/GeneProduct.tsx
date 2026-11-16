import { ArrowDown, ArrowRight } from "lucide-react";
import { FlowRow } from "@/components/content/biology/FlowRow";
import { cn } from "@/lib/utils";

/**
 * GeneProduct — the protein the recombinant gene makes, how it is grown at lab
 * scale, and the continuous culture that keeps cells in log phase.
 */

export function RecombinantProtein() {
  return (
    <div className="my-5 rounded-xl border border-indigo-600/30 bg-indigo-50/40 p-4 dark:bg-indigo-950/20">
      <div className="t-micro text-indigo-800 dark:text-indigo-300">Definition</div>

      <div className="mt-1.5 text-sm leading-relaxed text-foreground">
        When a protein-encoding gene is expressed in a{" "}
        <span className="rounded-[3px] bg-indigo-100 px-1 font-semibold text-indigo-900 dark:bg-indigo-900/50 dark:text-indigo-100">
          heterologous host
        </span>
        , the resulting protein is called a{" "}
        <span className="rounded-[3px] bg-emerald-100 px-1 font-semibold text-emerald-900 dark:bg-emerald-900/50 dark:text-emerald-100">
          Recombinant Protein
        </span>
        .
      </div>
    </div>
  );
}

export function SmallScaleCulturing() {
  return (
    <FlowRow
      items={[
        { label: "Laboratory culturing", detail: "Laboratory cultures are used to grow host cells." },
        { label: "Host cell harvesting", detail: "Host cells are harvested." },
        {
          label: "Protein extraction and purification",
          detail: "The target protein is extracted and purified using separation techniques.",
        },
      ]}
    />
  );
}

const CHAIN = [
  "Continuous medium supply",
  "Log/exponential phase maintenance",
  "Higher biomass",
  "Higher protein yield",
];

export function ContinuousCulture() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Continuous culture system</div>

      <div className="mt-2">
        <ContinuousFlowArt />
      </div>

      <div className="mt-2 space-y-1">
        <Bullet>Used growth medium is drained out from one side.</Bullet>
        <Bullet>Fresh growth medium is continuously added from the other side.</Bullet>
        <Bullet>
          This maintains host cells in their physiologically most active{" "}
          <strong className="font-semibold">log/exponential phase</strong>.
        </Bullet>
        <Bullet>Results in larger biomass and significantly higher protein yields.</Bullet>
      </div>

      <div className="mt-3 flex flex-col gap-1 border-t border-border pt-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-1.5">
        {CHAIN.map((item, index) => (
          <div key={item} className="flex items-center gap-1.5">
            <span
              className={cn(
                "rounded border px-2 py-0.5 text-[11px] font-medium leading-snug",
                index === CHAIN.length - 1
                  ? "border-2 border-emerald-600/40 bg-emerald-50/60 font-semibold text-foreground dark:bg-emerald-950/25"
                  : "border-border bg-muted/40 text-foreground",
              )}
            >
              {item}
            </span>
            {index < CHAIN.length - 1 && (
              <span className="text-muted-foreground" aria-hidden>
                <ArrowDown className="h-3 w-3 sm:hidden" />
                <ArrowRight className="hidden h-3 w-3 sm:block" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- bits */

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-1.5">
      <span className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-foreground/35" aria-hidden />
      <div className="text-xs leading-snug text-foreground">{children}</div>
    </div>
  );
}

function ContinuousFlowArt() {
  return (
    <svg viewBox="0 0 340 118" className="w-full" role="img" aria-label="Continuous culture with fresh medium entering and used medium leaving">
      {/* fresh medium pipe */}
      <line x1="8" y1="42" x2="86" y2="42" className="stroke-teal-600" strokeWidth="2" strokeLinecap="round" />
      <path d="M86 42 L78 38 M86 42 L78 46" className="stroke-teal-600" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="8" y="32" className="fill-teal-800 text-[7px] font-semibold dark:fill-teal-300">
        Fresh medium
      </text>

      {/* used medium pipe */}
      <line x1="254" y1="42" x2="332" y2="42" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="2" strokeLinecap="round" />
      <path d="M332 42 L324 38 M332 42 L324 46" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="256" y="32" className="fill-amber-800 text-[7px] font-semibold dark:fill-amber-300">
        Used medium
      </text>

      {/* vessel */}
      <rect
        x="94"
        y="18"
        width="152"
        height="78"
        rx="10"
        className="fill-teal-50/70 stroke-teal-600/40 dark:fill-teal-950/25"
        strokeWidth="1.4"
      />
      <rect x="104" y="34" width="132" height="52" rx="4" className="fill-teal-100/60 dark:fill-teal-900/30" />

      {/* cells */}
      {[
        [118, 50],
        [136, 44],
        [154, 58],
        [172, 46],
        [190, 56],
        [208, 48],
        [124, 68],
        [146, 72],
        [170, 70],
        [196, 70],
        [216, 66],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" className="fill-teal-600/60" />
      ))}

      <text x="170" y="110" textAnchor="middle" className="fill-muted-foreground text-[7px]">
        host cells held in log/exponential phase
      </text>
    </svg>
  );
}
