"use client";

import { cn } from "@/lib/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

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
        "pointer-events-auto flex items-center gap-1 rounded-lg border border-border bg-card p-1",
        floating
          ? "fixed z-40"
          : "fixed inset-x-6 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 w-auto justify-center overflow-x-auto sm:justify-start lg:hidden"
      )}
      style={
        floating && p.rect
          ? {
              top: `${Math.max(8, p.rect.top - 44)}px`,
              left: `${Math.max(8, p.rect.left + p.rect.width / 2 - (p.altMac ? 150 : 150))}px`,
              transform: "translateX(-50%)",
            }
          : undefined
      }
    >
      <Menubar className="h-8 border-border bg-transparent p-0">
        <MenubarMenu>
          <MenubarTrigger className="rounded-[3px]">Format</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              onClick={() => p.onToggle("b")}
              className={cn(p.pressed.b && "bg-accent font-bold")}
            >
              Bold
              <MenubarShortcut>Ctrl+B</MenubarShortcut>
            </MenubarItem>
            <MenubarItem
              onClick={() => p.onToggle("i")}
              className={cn(p.pressed.i && "bg-accent font-bold")}
            >
              Italic
              <MenubarShortcut>Ctrl+I</MenubarShortcut>
            </MenubarItem>
            <MenubarItem
              onClick={() => p.onToggle("u")}
              className={cn(p.pressed.u && "bg-accent font-bold")}
            >
              Underline
              <MenubarShortcut>Ctrl+U</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive" onClick={p.onClear}>
              Clear
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="rounded-[3px]">Highlight</MenubarTrigger>
          <MenubarContent>
            {TONES.map((t) => (
              <MenubarItem
                key={t.key}
                onClick={() => p.onTone(t.key)}
                className={cn(p.activeTone === t.key && "bg-accent")}
              >
                <span
                  className="h-3 w-3 shrink-0 rounded-[2px] border border-border"
                  style={{ backgroundColor: `var(--hl-${t.key})` }}
                />
                {t.label}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className="mx-0.5 h-4 w-px bg-border" />
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
  );
}
