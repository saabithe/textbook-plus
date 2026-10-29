"use client";

import { cn } from "@/lib/utils";

interface Props {
  active: boolean;
  mode: "floating" | "dock";
  rect?: DOMRect | null;
  ctrl?: boolean;
  altMac?: boolean;
  pressed: { b: boolean; i: boolean; u: boolean };
  activeTone?: string | null;
  onToggle: (key: "b" | "i" | "u") => void;
  onTone: (tone: string) => void;
  onClear: () => void;
}

const TONES = [
  { key: "yellow", label: "Definition" },
  { key: "blue", label: "Key term" },
  { key: "green", label: "Result" },
  { key: "pink", label: "Caution" },
  { key: "orange", label: "Formula" },
];

export function SelectionToolbar(p: Props) {
  if (!p.active) return null;
  const floating = p.mode === "floating";
  return (
    <div
      role="toolbar"
      aria-label="Text formatting"
      className={cn(
        "pointer-events-auto flex items-center gap-1 rounded-lg border border-border bg-card p-1 shadow-sm",
        floating
          ? "fixed z-40"
          : "fixed inset-x-6 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 w-auto justify-center overflow-x-auto sm:justify-start lg:hidden"
      )}
      style={
        floating && p.rect
          ? {
              top: `${Math.max(8, p.rect.top - 44)}px`,
              left: `${Math.max(8, p.rect.left + p.rect.width / 2 - (p.altMac ? 150 : 150))}px`,
              // clamp is handled by not crossing container width using a translate
              transform: "translateX(-50%)",
            }
          : undefined
      }
    >
      <div className="flex items-center gap-0.5 border-r border-border pr-1">
        <button
          type="button"
          aria-pressed={p.pressed.b}
          aria-label="Bold"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => p.onToggle("b")}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-[3px] text-[14px] font-bold transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring",
            p.pressed.b && "bg-foreground text-background"
          )}
        >
          B
        </button>
        <button
          type="button"
          aria-pressed={p.pressed.i}
          aria-label="Italic"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => p.onToggle("i")}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-[3px] text-[14px] italic transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring",
            p.pressed.i && "bg-foreground text-background"
          )}
        >
          I
        </button>
        <button
          type="button"
          aria-pressed={p.pressed.u}
          aria-label="Underline"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => p.onToggle("u")}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-[3px] text-[14px] underline transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring",
            p.pressed.u && "bg-foreground text-background"
          )}
        >
          U
        </button>
      </div>
      <div className="flex items-center gap-0.5 px-1">
        {TONES.map((t) => (
          <button
            key={t.key}
            type="button"
            aria-label={`Highlight as ${t.label}`}
            title={t.label}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => p.onTone(t.key)}
            className={cn(
              "h-7 w-7 rounded-[3px] border border-border transition-all duration-[120ms] ease-[var(--ease-blueprint)] hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring",
              p.activeTone === t.key && "ring-2 ring-foreground ring-offset-1 ring-offset-card"
            )}
            style={{ backgroundColor: `var(--hl-${t.key})` }}
          />
        ))}
      </div>
      <div className="border-l border-border pl-1">
        <button
          type="button"
          aria-label="Clear formatting"
          onMouseDown={(e) => e.preventDefault()}
          onClick={p.onClear}
          className="flex h-8 w-8 items-center justify-center rounded-[3px] text-[13px] text-muted-foreground transition-colors duration-[120ms] ease-[var(--ease-blueprint)] hover:bg-foreground/[0.04] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          ⌫
        </button>
      </div>
    </div>
  );
}
