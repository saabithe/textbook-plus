"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronsDownUp,
  Lock,
  Move,
  RotateCw,
  Box,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Branch {
  key: string;
  title: string;
  memory: string;
  tagline: string;
  icon: React.ElementType;
  svg: () => React.ReactNode;
}

function BlocksSvg() {
  return (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <line x1={14} y1={60} x2={86} y2={60} stroke="currentColor" strokeWidth={1.5} />
      <rect x={30} y={38} width={40} height={22} rx={2} fill="currentColor" fillOpacity={0.14} stroke="currentColor" strokeWidth={1.8} />
      <line x1={72} y1={44} x2={88} y2={44} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#arrow)" />
      <line x1={72} y1={52} x2={88} y2={52} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  );
}

function FanSvg() {
  return (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <line x1={50} y1={5} x2={50} y2={65} stroke="currentColor" strokeWidth={0.8} strokeDasharray="2 1.5" opacity={0.45} />
      <circle cx={50} cy={35} r={20} fill="none" stroke="currentColor" strokeWidth={1.8} />
      <path d="M50,35 L62,20 M50,35 L62,50 M50,35 L38,50" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <circle cx={50} cy={35} r={3} fill="currentColor" />
      <path d="M66,22 A18,18 0 1 1 50,17" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.75} />
      <path d="M74,22 L74,15 L66,18" fill="currentColor" opacity={0.75} />
    </svg>
  );
}

function CylinderSvg() {
  return (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <line x1={14} y1={60} x2={86} y2={60} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={42} cy={46} r={14} fill="currentColor" fillOpacity={0.12} stroke="currentColor" strokeWidth={1.8} />
      <line x1={42} y1={46} x2={42} y2={60} stroke="currentColor" strokeWidth={1.3} strokeDasharray="2 1.5" />
      <circle cx={42} cy={60} r={2} fill="currentColor" />
      <path d="M42,46 L52,40" stroke="currentColor" strokeWidth={1.3} />
      <path d="M54,34 A16,16 0 1 1 50,30" fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.7} />
      <path d="M62,36 L64,29 L57,31" fill="currentColor" opacity={0.7} />
      <line x1={60} y1={52} x2={78} y2={52} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#rollArrow)" />
      <defs>
        <marker id="rollArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  );
}

const BRANCHES: Branch[] = [
  {
    key: "translation",
    title: "Translation",
    memory: "→ v",
    tagline: "Same linear velocity",
    icon: Move,
    svg: BlocksSvg,
  },
  {
    key: "rotation",
    title: "Rotation",
    memory: "→ ω",
    tagline: "Same angular velocity",
    icon: RotateCw,
    svg: FanSvg,
  },
  {
    key: "rolling",
    title: "Rolling",
    memory: "v + ω",
    tagline: "Translation + rotation",
    icon: Box,
    svg: CylinderSvg,
  },
];

export function RigidBodyMotions() {
  const [open, setOpen] = useState<string | null>(null);

  const branchData: Record<string, { text: React.ReactNode; details: string[]; example: string }> = {
    translation: {
      text: "every particle of the body has the same linear velocity at any instant",
      details: [
        "All points move along parallel straight lines with the same speed.",
        "No point of the body is at rest; there is no fixed axis.",
      ],
      example: "A block sliding down an inclined plane.",
    },
    rotation: {
      text: "every particle has the same angular velocity; each moves in a circle in a plane perpendicular to the axis, with its centre on the axis",
      details: [
        "Particles on the axis are stationary.",
        "The axis may or may not be fixed (e.g. a spinning top).",
      ],
      example: "A ceiling fan, a potter&rsquo;s wheel, a merry-go-round.",
    },
    rolling: {
      text: "translation of the centre of mass combined with rotation about it",
      details: [
        "Particles contribute both a translational and a rotational velocity.",
        "The point of contact of a rolling cylinder is instantaneously at rest when it rolls without slipping.",
      ],
      example: "A cylinder rolling on the ground without slipping.",
    },
  };

  return (
    <div className="my-6">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-border/40 bg-muted/30 px-4 py-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-sm shadow-sky-500/30">
            <Box className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-extrabold tracking-tight text-foreground">Rigid Body Motion</span>
          <span className="ml-auto text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Tap a branch to expand
          </span>
        </div>
        <div className="px-4 py-3">
          <div className="mx-auto w-fit rounded-xl border border-border/50 bg-gradient-to-br from-foreground/[0.05] to-foreground/[0.02] px-4 py-2 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-foreground/80">
              Rigid Body
            </span>
            <span className="mt-0.5 block text-[0.65rem] text-muted-foreground">
              distance between any two points remains constant
            </span>
          </div>
          <div className="mx-auto h-4 w-px bg-border" />
          <div className="grid gap-2 sm:grid-cols-1">
            {BRANCHES.map((branch) => {
              const isOpen = open === branch.key;
              const info = branchData[branch.key];
              return (
                <div key={branch.key}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : branch.key)}
                    aria-expanded={isOpen}
                    className={cn(
                      "group flex w-full items-center gap-2.5 rounded-xl border px-3 py-2 text-left transition-colors",
                      isOpen
                        ? "border-violet-500/30 bg-violet-500/[0.08]"
                        : "border-border/50 bg-muted/20 hover:bg-muted/40"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors",
                        isOpen
                          ? "bg-gradient-to-br from-violet-500 to-purple-400 text-white"
                          : "bg-muted-foreground/10 text-foreground/70"
                      )}
                    >
                      <branch.icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-extrabold tracking-tight text-foreground">
                        {branch.title}
                      </span>
                      <span className="block text-xs text-muted-foreground">{branch.tagline}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-[0.65rem] font-bold tabular-nums text-muted-foreground">
                      <Lock className="h-3 w-3" />
                      {branch.memory}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-1.5 rounded-xl border border-border/40 bg-muted/10 px-3 py-3">
                      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                        <ChevronsDownUp className="h-3 w-3" />
                        {branch.title}
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/85">
                        In {branch.title.toLowerCase()} motion, {info.text}.
                      </p>
                      <ul className="mt-2 space-y-1.5 list-none">
                        {info.details.map((d) => (
                          <li key={d} className="flex gap-2 text-sm text-foreground/75">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="h-[70px] w-[100px] shrink-0">
                          <branch.svg />
                        </div>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          <strong className="font-bold text-foreground/80">Example:</strong> {info.example}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-2">
            <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-300">
              <Lock className="h-3.5 w-3.5" /> Memory lock
            </span>
            <span className="text-xs font-semibold text-foreground/85">Translation → v</span>
            <span className="text-xs font-semibold text-foreground/85">Rotation → ω</span>
            <span className="text-xs font-semibold text-foreground/85">Rolling → v + ω</span>
          </div>
        </div>
      </div>
    </div>
  );
}