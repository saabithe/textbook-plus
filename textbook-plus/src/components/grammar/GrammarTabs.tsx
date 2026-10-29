"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type GrammarTab = "concept" | "practice";

interface GrammarTabsProps {
  tab: GrammarTab;
  onTabChange: (tab: GrammarTab) => void;
  className?: string;
}

const tabs = [
  { id: "concept", label: "Concept" },
  { id: "practice", label: "Practice" },
] as const;

export function GrammarTabs({ tab, onTabChange, className }: GrammarTabsProps) {
  return (
    <Tabs
      value={tab}
      onValueChange={(v) => onTabChange(v as GrammarTab)}
      className="mb-8"
    >
      <TabsList
        variant="line"
        aria-label="Grammar views"
        className={`w-full justify-start gap-6 ${className ?? ""}`}
      >
        {tabs.map((t) => (
          <TabsTrigger key={t.id} value={t.id} className="px-0">
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
