import { cn } from "@/lib/utils";

/**
 * Bioreactor — why the vessel exists, what it holds steady, the two stirred-tank
 * shapes, and the systems bolted onto it.
 *
 * One tank drawing is reused across the three blocks so the sparger callout in
 * the comparison reads against the same silhouette.
 */

export function BioreactorNeed() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Need for bioreactors</div>

      <div className="mt-2 space-y-1.5">
        <Bullet>Industrial production requires large-scale culturing.</Bullet>
        <Bullet>
          Bioreactors handle large volumes of culture, approximately{" "}
          <strong className="font-semibold tabular-nums">100–1000 litres</strong>.
        </Bullet>
        <Bullet>
          They provide optimal conditions for biological conversion of raw materials into specific products.
        </Bullet>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg border-2 border-amber-600/35 bg-amber-50/60 px-3 py-2 dark:bg-amber-950/25">
        <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
          Scale
        </span>
        <span className="text-sm font-bold tabular-nums text-foreground">100–1000 litres</span>
        <span className="text-[11px] text-muted-foreground">large volumes of culture</span>
      </div>
    </div>
  );
}

const ENVIRONMENT_LEFT = ["Temperature", "pH", "Substrate"];
const ENVIRONMENT_RIGHT = ["Salts", "Vitamins", "Oxygen"];

export function BioreactorEnvironment() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="t-micro">Optimal growth environment</div>

      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-3">
        <div className="order-first col-span-2 sm:order-2 sm:col-span-1 sm:w-48">
          <div className="mx-auto max-w-48">
            <TankArt />
            <div className="mt-1 text-center">
              <span className="rounded border border-border bg-muted/40 px-1.5 py-px text-[10px] font-bold tabular-nums text-foreground">
                100–1000 L
              </span>
            </div>
          </div>
        </div>

        <div className="contents sm:order-1 sm:block sm:space-y-2 sm:text-right">
          {ENVIRONMENT_LEFT.map((item) => (
            <ControlLabel key={item} label={item} align="right" />
          ))}
        </div>

        <div className="contents sm:order-3 sm:block sm:space-y-2">
          {ENVIRONMENT_RIGHT.map((item) => (
            <ControlLabel key={item} label={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const TANK_TYPES = [
  {
    n: "1",
    name: "Simple stirred-tank bioreactor",
    facts: ["Cylindrical vessel with a curved base.", "Facilitates thorough mixing.", "Ensures even oxygen distribution throughout the reactor."],
    sparged: false,
  },
  {
    n: "2",
    name: "Sparged stirred-tank bioreactor",
    facts: ["Equipped with a sparger.", "Sterile air bubbles are pumped through the sparger.", "Enhances the oxygen transfer area."],
    sparged: true,
  },
];

export function StirredTankTypes() {
  return (
    <div className="my-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {TANK_TYPES.map((tank) => (
        <div key={tank.n} className="rounded-xl border border-border bg-card p-3.5">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-indigo-600/30 bg-indigo-50 text-[10px] font-bold tabular-nums text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300">
              {tank.n}
            </span>
            <div className="text-xs font-semibold leading-tight text-foreground">{tank.name}</div>
          </div>

          <div className="mt-2">
            <TankArt sparged={tank.sparged} />
          </div>

          <div className="mt-1.5 space-y-1">
            {tank.facts.map((fact) => (
              <Bullet key={fact}>{fact}</Bullet>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const CONTROLS = [
  { name: "Agitator system", purpose: "Agitation" },
  { name: "Oxygen delivery system", purpose: "Oxygen supply" },
  { name: "Foam control system", purpose: "Foam control" },
  { name: "Temperature control system", purpose: "Temperature regulation" },
  { name: "pH control system", purpose: "pH regulation" },
  { name: "Sampling ports", purpose: "Periodic culture sampling" },
];

export function BioreactorControls() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="mx-auto max-w-52">
        <TankArt sparged />
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {CONTROLS.map((control) => (
          <div
            key={control.name}
            className={cn(
              "rounded-lg border px-3 py-2",
              control.name === "Sampling ports"
                ? "border-amber-600/35 bg-amber-50/50 dark:bg-amber-950/20"
                : "border-border bg-muted/20",
            )}
          >
            <div className="text-xs font-semibold leading-snug text-foreground">{control.name}</div>
            <div className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{control.purpose}</div>
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

function ControlLabel({ label, align }: { label: string; align?: "right" }) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-lg border border-border bg-muted/20 px-2 py-1.5",
        align === "right" && "sm:justify-end",
      )}
    >
      <span className="text-xs font-medium text-foreground">{label}</span>
      <span className="h-1 w-1 rounded-full bg-teal-600" aria-hidden />
    </div>
  );
}

function TankArt({ sparged = false }: { sparged?: boolean }) {
  return (
    <svg viewBox="0 0 200 150" className="w-full" role="img" aria-label={sparged ? "Sparged stirred-tank bioreactor" : "Stirred-tank bioreactor"}>
      {/* motor */}
      <rect x="88" y="4" width="24" height="12" rx="2" className="fill-muted stroke-border" strokeWidth="1" />
      <line x1="100" y1="16" x2="100" y2="26" className="stroke-muted-foreground" strokeWidth="1.6" />

      {/* jacket */}
      <path
        d="M46 26 H154 V104 Q154 128 100 128 Q46 128 46 104 Z"
        className="fill-none stroke-teal-600/35"
        strokeWidth="6"
      />

      {/* vessel */}
      <path
        d="M50 26 H150 V104 Q150 124 100 124 Q50 124 50 104 Z"
        className="fill-teal-50/70 stroke-teal-600/50 dark:fill-teal-950/25"
        strokeWidth="1.4"
      />

      {/* broth */}
      <path
        d="M56 46 H144 V104 Q144 118 100 118 Q56 118 56 104 Z"
        className="fill-teal-100/60 dark:fill-teal-900/25"
      />

      {/* agitator shaft and impeller */}
      <line x1="100" y1="26" x2="100" y2="104" className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="1.8" />
      <line x1="82" y1="98" x2="118" y2="98" className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="82" y1="92" x2="82" y2="104" className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="118" y1="92" x2="118" y2="104" className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="1.6" strokeLinecap="round" />

      {/* bubbles */}
      {[
        [72, 108],
        [88, 100],
        [112, 106],
        [128, 98],
        [78, 84],
        [122, 80],
        [96, 76],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.8" className="fill-teal-600/40" />
      ))}

      {sparged && (
        <>
          <ellipse cx="100" cy="110" rx="26" ry="4.5" className="fill-none stroke-violet-600" strokeWidth="1.6" />
          <line x1="126" y1="110" x2="150" y2="110" className="stroke-violet-600" strokeWidth="1.2" />
          <text x="153" y="113" className="fill-violet-700 text-[7px] font-semibold dark:fill-violet-300">
            sparger
          </text>
        </>
      )}
    </svg>
  );
}
