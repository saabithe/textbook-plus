import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GroupTone = "chemistry" | "warning" | "neutral";

interface EtherExample {
  left: ReactNode;
  right: ReactNode;
  name?: string;
}

interface EtherKind {
  title: string;
  description: string;
  examples: EtherExample[];
}

interface EtherClassificationProps {
  kinds: EtherKind[];
}

const CHIP_TONE = {
  chemistry:
    "border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_10%,transparent)] text-[var(--subject-chemistry)]",
  warning: "border-warning/35 bg-warning/10 text-warning",
  neutral: "border-border bg-card text-foreground",
} as const;

function GroupChip({
  tone,
  size = "sm",
  children,
}: {
  tone: GroupTone;
  size?: "sm" | "lg";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "shrink-0 rounded-md border font-extrabold leading-none",
        size === "lg" ? "px-3 py-2 text-lg" : "px-2 py-1.5 text-sm",
        CHIP_TONE[tone],
      )}
    >
      {children}
    </span>
  );
}

function EtherRow({
  left,
  right,
  leftTone,
  rightTone,
  size = "sm",
}: {
  left: ReactNode;
  right: ReactNode;
  leftTone: GroupTone;
  rightTone: GroupTone;
  size?: "sm" | "lg";
}) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <GroupChip tone={leftTone} size={size}>
        {left}
      </GroupChip>
      <span aria-hidden className="h-px w-3 shrink-0 bg-border" />
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--subject-chemistry)_40%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_12%,transparent)] font-extrabold text-[var(--subject-chemistry)]",
          size === "lg" ? "h-10 w-10 text-base" : "h-8 w-8 text-sm",
        )}
      >
        O
      </span>
      <span aria-hidden className="h-px w-3 shrink-0 bg-border" />
      <GroupChip tone={rightTone} size={size}>
        {right}
      </GroupChip>
    </div>
  );
}

/**
 * EtherClassification — the general formula sits above both categories. Each
 * example draws the two groups as chips around a highlighted oxygen; identical
 * groups share one tone, different groups take two.
 */
export function EtherClassification({ kinds }: EtherClassificationProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-4">
        <span className="t-micro">General formula</span>
        <div className="mt-3 flex justify-center rounded-md border border-border/70 bg-muted/30 py-4">
          <EtherRow
            left={<em>R</em>}
            right={<em>R′</em>}
            leftTone="neutral"
            rightTone="neutral"
            size="lg"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2">
        {kinds.map((kind, kindIndex) => {
          const differs = kindIndex > 0;

          return (
            <div
              key={kind.title}
              className={cn(
                "min-w-0 p-4",
                kindIndex === 0 && "sm:border-r sm:border-border",
                kindIndex > 0 && "border-t border-border sm:border-t-0",
              )}
            >
              <p className="text-sm font-extrabold text-foreground">{kind.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {kind.description}
              </p>

              <div className="mt-4 space-y-4">
                {kind.examples.map((example, index) => (
                  <div key={index}>
                    <EtherRow
                      left={example.left}
                      right={example.right}
                      leftTone="chemistry"
                      rightTone={differs ? "warning" : "chemistry"}
                    />
                    {example.name && (
                      <p className="mt-1.5 text-center text-xs text-muted-foreground">
                        {example.name}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-border px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[0.72rem] text-muted-foreground">
          <span
            aria-hidden
            className="h-2 w-2 rounded-[2px] bg-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)]"
          />
          Identical group
        </span>
        <span className="flex items-center gap-1.5 text-[0.72rem] text-muted-foreground">
          <span aria-hidden className="h-2 w-2 rounded-[2px] bg-warning/60" />
          Different group
        </span>
      </div>
    </section>
  );
}
