"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Zap, Waves, Ruler } from "lucide-react";
import { cn } from "@/lib/utils";

interface Band {
  id: string;
  name: string;
  initial: string;
  icon: string;
  freq: string;
  wavelength: string;
  produced: string;
  used: string;
  remember: string;
  tab: string;
}

const BANDS: Band[] = [
  {
    id: "radio",
    name: "Radio waves",
    initial: "R",
    icon: "📡",
    freq: "500 kHz – 1000 MHz (5×10⁵ – 10⁹ Hz)",
    wavelength: "> 0.1 m (from ~1 cm up)",
    produced: "Accelerated motion of charges in conducting wires — electrons in aerials accelerating and decelerating rapidly.",
    used: "Radio and TV communication systems; cellular phones (UHF band).",
    remember: "Lowest frequency / longest wavelength of the spectrum. The first EM waves ever demonstrated (Hertz, radio region).",
    tab: "RADIO",
  },
  {
    id: "microwave",
    name: "Microwaves",
    initial: "M",
    icon: "📶",
    freq: "3×10⁹ – 3×10¹¹ Hz (GHz range)",
    wavelength: "10 cm – 1 mm",
    produced: "Special vacuum tubes — klystrons, magnetrons and Gunn diodes.",
    used: "RADAR (aircraft navigation), speed guns; microwave ovens heat food by resonance with water molecules.",
    remember: "Short-wavelength radio waves. Oven frequency is matched to the resonant frequency of water molecules.",
    tab: "MICRO",
  },
  {
    id: "infrared",
    name: "Infrared waves",
    initial: "I",
    icon: "🔥",
    freq: "3×10¹¹ – 4×10¹⁴ Hz",
    wavelength: "1000 μm – 0.7 μm",
    produced: "Hot bodies and molecules — thermal vibration and rotation.",
    used: "Physical-therapy lamps; maintaining Earth's warmth (greenhouse effect); Earth-observation satellites; TV/video/hi-fi remote switches (LEDs).",
    remember: "Called 'heat waves' — water molecules in most materials readily absorb IR and heat up. Serpent 'vision' detects IR.",
    tab: "INFRARED",
  },
  {
    id: "visible",
    name: "Visible rays",
    initial: "V",
    icon: "🌈",
    freq: "4×10¹⁴ – 7×10¹⁴ Hz",
    wavelength: "700 – 400 nm",
    produced: "Electrons in atoms emitting light when moving from a higher to a lower energy level.",
    used: "The only part the human eye can detect (vision).",
    remember: "Tiny slice of the spectrum. Snakes sense IR, and many insects see into the UV. This is the band the Sun's energy peaks in.",
    tab: "VISIBLE",
  },
  {
    id: "uv",
    name: "Ultraviolet rays",
    initial: "U",
    icon: "☀️",
    freq: "7.5×10¹⁴ – 3×10¹⁶ Hz",
    wavelength: "400 nm – 0.6 nm",
    produced: "Special lamps and very hot bodies — the Sun is an important source.",
    used: "LASIK eye surgery; UV lamps kill germs in water purifiers; sterilisation.",
    remember: "Ozone layer (40–50 km) absorbs most solar UV; depletion by CFCs is an international concern. UV makes skin tan and can burn.",
    tab: "UV",
  },
  {
    id: "xray",
    name: "X-rays",
    initial: "X",
    icon: "🦴",
    freq: "3×10¹⁶ – 3×10¹⁹ Hz",
    wavelength: "10 nm – 10⁻⁴ nm",
    produced: "X-ray tubes — bombard a metal target with high-energy electrons; inner-shell electron transitions.",
    used: "Diagnostic tool in medicine (flesh passes, bone blocks — fractures show); crystal-structure studies; treatment of some cancers.",
    remember: "Discovered by Roentgen. X-rays damage living tissue — avoid unnecessary or over exposure.",
    tab: "X-RAY",
  },
  {
    id: "gamma",
    name: "Gamma rays",
    initial: "G",
    icon: "☢️",
    freq: "> 3×10¹⁹ Hz",
    wavelength: "< 10⁻³ nm (down to 10⁻¹⁴ m)",
    produced: "Nuclear reactions; emitted by radioactive nuclei.",
    used: "Destroy cancer cells (high energy, strong penetrating power); soft gamma rays preserve foodstuffs by killing micro-organisms.",
    remember: "Highest frequency / shortest wavelength. Highest energy of the spectrum.",
    tab: "GAMMA",
  },
];

const SCALES = [
  { icon: <Zap className="h-3.5 w-3.5" />, label: "Energy", note: "↑", min: "Low", max: "High" },
  { icon: <Waves className="h-3.5 w-3.5" />, label: "Frequency", note: "↑", min: "Low", max: "High" },
  { icon: <Ruler className="h-3.5 w-3.5" />, label: "Wavelength", note: "↓", min: "Long", max: "Short" },
];

export function SpectrumExplorer() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const band = BANDS[active];
  const shown = hover ?? active;

  const pickFromPointer = (clientX: number) => {
    const el = barRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const frac = (clientX - rect.left) / rect.width;
    const idx = Math.max(0, Math.min(BANDS.length - 1, Math.round(frac * (BANDS.length - 1))));
    setActive(idx);
  };

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <span className="text-sm font-extrabold tracking-tight text-foreground">
          The electromagnetic spectrum — one interaction, three scales
        </span>
        <span className="text-[0.68rem] font-semibold text-muted-foreground">
          drag across the bar · higher ν → higher energy → shorter λ
        </span>
      </div>

      <div className="px-4 pt-4">
        <div
          ref={barRef}
          className="relative h-14 w-full cursor-pointer select-none touch-none overflow-hidden rounded-xl"
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            pickFromPointer(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.buttons & 1) pickFromPointer(e.clientX);
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #ef4444 0%, #f97316 18%, #f59e0b 34%, #eab308 48%, #22c55e 62%, #3b82f6 78%, #8b5cf6 90%, #7c3aed 100%)",
            }}
          />
          <div className="absolute inset-0 flex">
            {BANDS.map((b, i) => (
              <button
                key={b.id}
                type="button"
                aria-label={b.name}
                className={cn(
                  "relative h-full flex-1 border-r border-white/25 transition-colors last:border-r-0",
                  shown === i && "bg-black/15 dark:bg-white/15",
                  shown !== i && "hover:bg-black/5 dark:hover:bg-white/5"
                )}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_2px_rgba(0,0,0,0.35)] transition-[left] duration-150"
            style={{ left: `${(shown / (BANDS.length - 1)) * 100}%` }}
          />
        </div>

        <div className="mt-1.5 flex text-[0.6rem] font-bold uppercase tracking-wider">
          <span className="text-red-600 dark:text-red-400">Low frequency · long λ</span>
          <span className="ml-auto text-violet-600 dark:text-violet-400">High frequency · short λ</span>
        </div>

        <div className="mt-4 space-y-1.5">
          {SCALES.map((s) => (
            <div key={s.label} className="grid grid-cols-[5.5rem_1fr_3.5rem] items-center gap-2 text-[0.7rem]">
              <span className="flex items-center gap-1.5 font-extrabold text-foreground/80">
                {s.icon}
                {s.label} {s.note}
              </span>
              <div className="relative h-1.5 rounded-full bg-muted">
                <span
                  className={cn(
                    "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r",
                    s.label === "Wavelength" ? "from-red-500 to-violet-600" : "from-red-500 via-amber-400 to-violet-600"
                  )}
                  style={{ width: `${((shown + 1) / BANDS.length) * 100}%` }}
                />
              </div>
              <span className="text-right font-semibold text-foreground/60">
                {s.label === "Wavelength" && shown === 0 ? "Long" : shown === BANDS.length - 1 ? "High/Short" : "↑"}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {BANDS.map((b, i) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "rounded-lg px-2.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-wider transition-colors",
                active === i
                  ? "bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-md shadow-violet-500/30"
                  : "border border-border/60 bg-muted/20 text-foreground/70 hover:bg-muted/40"
              )}
            >
              {b.icon} {b.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 border-t border-border/40 bg-muted/15 px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="text-3xl">{band.icon}</span>
            <div>
              <div className="text-sm font-extrabold tracking-tight text-foreground">
                {String(active + 1).padStart(2, "0")} {band.name}
              </div>
              <div className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                {band.freq}
              </div>
            </div>
          </div>
          <div className="hidden shrink-0 items-center gap-1 sm:flex">
            <button
              type="button"
              aria-label="Previous band"
              onClick={() => setActive((a) => (a - 1 + BANDS.length) % BANDS.length)}
              className="rounded-lg border border-border/60 bg-card p-1.5 text-foreground/70 hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next band"
              onClick={() => setActive((a) => (a + 1) % BANDS.length)}
              className="rounded-lg border border-border/60 bg-card p-1.5 text-foreground/70 hover:text-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-card px-3.5 py-2.5">
            <p className="text-[0.62rem] font-extrabold uppercase tracking-widest text-muted-foreground">What are they?</p>
            <p className="mt-0.5 text-[0.85rem] leading-relaxed text-foreground/85">
              {band.wavelength} <span className="text-muted-foreground">·</span> {band.freq}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-card px-3.5 py-2.5">
            <p className="text-[0.62rem] font-extrabold uppercase tracking-widest text-muted-foreground">Produced by</p>
            <p className="mt-0.5 text-[0.85rem] leading-relaxed text-foreground/85">{band.produced}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-card px-3.5 py-2.5">
            <p className="text-[0.62rem] font-extrabold uppercase tracking-widest text-muted-foreground">Used for</p>
            <p className="mt-0.5 text-[0.85rem] leading-relaxed text-foreground/85">{band.used}</p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.06] px-3.5 py-2.5">
            <p className="text-[0.62rem] font-extrabold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">★ Remember</p>
            <p className="mt-0.5 text-[0.85rem] leading-relaxed text-foreground/85">{band.remember}</p>
          </div>
        </div>
      </div>
    </div>
  );
}