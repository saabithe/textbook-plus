"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Zap, Waves, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const infoCell = (label: string, body: React.ReactNode) => (
    <div className="rounded-lg border border-border bg-card px-3.5 py-2.5">
      <p className="t-micro">{label}</p>
      <p className="mt-1 text-[0.85rem] leading-relaxed text-foreground">{body}</p>
    </div>
  );

  return (
    <div className="my-6 min-w-0 overflow-x-auto rounded-lg border border-border bg-card">      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-sm font-semibold text-foreground">
          The electromagnetic spectrum — one interaction, three scales
        </span>
        <span className="t-micro">
          drag across the bar · higher ν → higher energy → shorter λ
        </span>
      </div>

      <div className="px-4 pt-4">
        <div
          ref={barRef}
          className="relative h-14 w-full cursor-pointer touch-none overflow-hidden rounded-[3px] border border-border bg-card select-none"
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            pickFromPointer(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.buttons & 1) pickFromPointer(e.clientX);
          }}
        >
          <div className="absolute inset-0 flex">
            {BANDS.map((b, i) => (
              <button
                key={b.id}
                type="button"
                aria-label={b.name}
                className={cn(
                  "relative h-full flex-1 border-r border-border transition-colors last:border-r-0",
                  shown === i
                    ? "bg-[color-mix(in_oklab,var(--foreground)_8%,transparent)]"
                    : "hover:bg-[color-mix(in_oklab,var(--foreground)_4%,transparent)]"
                )}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setActive(i)}
              >
                <span className="t-micro absolute inset-x-0 bottom-1.5 text-center">{b.initial}</span>
                {shown === i && (
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-foreground" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-foreground transition-[left] duration-150"
            style={{ left: `${(shown / (BANDS.length - 1)) * 100}%` }}
          />
        </div>

        <div className="mt-1.5 flex">
          <span className="t-micro">Low frequency · long λ</span>
          <span className="t-micro ml-auto">High frequency · short λ</span>
        </div>

        <div className="mt-4 space-y-2">
          {SCALES.map((s) => (
            <div key={s.label} className="grid grid-cols-[5.5rem_1fr_3.5rem] items-center gap-2">
              <span className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-foreground">
                <span className="text-muted-foreground">{s.icon}</span>
                {s.label} {s.note}
              </span>
              <div className="relative h-[3px] rounded-[1px] bg-muted">
                <span
                  className="absolute inset-y-0 left-0 bg-foreground"
                  style={{ width: `${((shown + 1) / BANDS.length) * 100}%` }}
                />
              </div>
              <span className="text-right text-[0.7rem] font-semibold tabular-nums text-muted-foreground">
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
                "rounded-[3px] border px-2.5 py-1.5 text-[0.68rem] font-semibold tracking-wide transition-colors",
                active === i
                  ? "border-foreground bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)] text-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {b.icon} {b.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 border-t border-border bg-muted/40 px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="text-3xl">{band.icon}</span>
            <div>
              <div className="text-sm font-semibold text-foreground">
                <span className="mr-1.5 tabular-nums text-muted-foreground">{String(active + 1).padStart(2, "0")}</span>
                {band.name}
              </div>
              <div className="t-micro mt-1">
                {band.freq}
              </div>
            </div>
          </div>
          <div className="hidden shrink-0 items-center gap-1 sm:flex">
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Previous band"
              onClick={() => setActive((a) => (a - 1 + BANDS.length) % BANDS.length)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Next band"
              onClick={() => setActive((a) => (a + 1) % BANDS.length)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {infoCell("What are they?", <>{band.wavelength} <span className="text-muted-foreground">·</span> {band.freq}</>)}
          {infoCell("Produced by", band.produced)}
          {infoCell("Used for", band.used)}
          <div className="border-l-[3px] border-l-foreground bg-muted/60 px-3.5 py-2.5">
            <p className="t-micro">★ Remember</p>
            <p className="mt-1 text-[0.85rem] leading-relaxed text-foreground">{band.remember}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
