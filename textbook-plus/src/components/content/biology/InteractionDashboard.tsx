"use client";

import { useState } from "react";
import { SignBadge, type Sign } from "@/components/content/biology/InteractionSigns";

interface DashboardRow {
  name: string;
  a: Sign;
  b: Sign;
  outcome: string;
  relationship: string;
}

const ROWS: DashboardRow[] = [
  {
    name: "Mutualism",
    a: "+",
    b: "+",
    outcome: "Both species gain",
    relationship: "Both interacting species benefit.",
  },
  {
    name: "Competition",
    a: "−",
    b: "−",
    outcome: "Both species lose",
    relationship: "The fitness of one species is significantly reduced in the presence of another.",
  },
  {
    name: "Predation",
    a: "+",
    b: "−",
    outcome: "Predator gains · prey loses",
    relationship: "The predator benefits by feeding on the prey, which is harmed.",
  },
  {
    name: "Parasitism",
    a: "+",
    b: "−",
    outcome: "Parasite gains · host loses",
    relationship: "The parasite benefits by living on or inside a host, which is harmed.",
  },
  {
    name: "Commensalism",
    a: "+",
    b: "0",
    outcome: "One gains · other unaffected",
    relationship: "One species benefits while the other remains unaffected.",
  },
  {
    name: "Amensalism",
    a: "−",
    b: "0",
    outcome: "One loses · other unaffected",
    relationship: "One species is harmed while the other is unaffected.",
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "+ +", label: "Mutualism" },
  { key: "− −", label: "Competition" },
  { key: "+ −", label: "Predation / parasitism" },
  { key: "+ 0", label: "Commensalism" },
  { key: "− 0", label: "Amensalism" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

/**
 * InteractionDashboard — one row per interaction, signs as the strongest
 * anchor, filterable by sign combination. Horizontal scroll on mobile with a
 * sticky first column so the interaction name never leaves the screen.
 */
export function InteractionDashboard() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const rows = filter === "all" ? ROWS : ROWS.filter((row) => `${row.a} ${row.b}` === filter);

  return (
    <div className="my-6">
      <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter interactions by sign combination">
        {FILTERS.map((item) => {
          const active = filter === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              aria-pressed={active}
              className={
                "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors " +
                (active
                  ? "border-foreground/40 bg-foreground text-background"
                  : "border-border bg-card text-foreground/80 hover:bg-muted/60")
              }
            >
              {item.key !== "all" && (
                <span className="flex items-center gap-0.5" aria-hidden>
                  <SignBadge sign={item.key.charAt(0) as Sign} size="sm" className="h-4 w-4 rounded-[3px] text-[10px]" />
                  <SignBadge sign={item.key.charAt(2) as Sign} size="sm" className="h-4 w-4 rounded-[3px] text-[10px]" />
                </span>
              )}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-3 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[36rem] border-collapse text-left">
          <caption className="sr-only">Six interactions compared by sign combination, outcome and defining relationship</caption>
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th scope="col" className="sticky left-0 z-10 bg-muted px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Interaction
              </th>
              <th scope="col" className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Signs
              </th>
              <th scope="col" className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Who gains / loses
              </th>
              <th scope="col" className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Defining relationship
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-b border-border last:border-b-0">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-card px-3 py-2.5 text-sm font-semibold text-foreground"
                >
                  {row.name}
                </th>
                <td className="px-3 py-2.5">
                  <span className="flex items-center gap-1.5">
                    <SignBadge sign={row.a} size="md" />
                    <SignBadge sign={row.b} size="md" />
                  </span>
                </td>
                <td className="px-3 py-2.5 text-sm text-foreground">{row.outcome}</td>
                <td className="px-3 py-2.5 text-sm leading-relaxed text-muted-foreground">{row.relationship}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 text-xs text-muted-foreground">
        {rows.length} of {ROWS.length} interactions shown. Signs follow the legend used throughout this topic.
      </div>
    </div>
  );
}
