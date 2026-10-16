"use client";

import { BookOpen, PenLine } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type GrammarTab = "concept" | "practice";

interface GrammarTabsProps {
  tab: GrammarTab;
  onTabChange: (tab: GrammarTab) => void;
  className?: string;
}

const tabs = [
  { id: "concept", label: "Concept", icon: BookOpen },
  { id: "practice", label: "Practice", icon: PenLine },
] as const;

export function GrammarTabs({ tab, onTabChange, className }: GrammarTabsProps) {
  return (
    <Tabs
      value={tab}
      onValueChange={(v) => onTabChange(v as GrammarTab)}
      className="mb-8"
    >
      <TabsList className={`flex w-full items-center gap-1.5 rounded-2xl border border-border/60 bg-muted/30 p-1.5 shadow-sm ${className ?? ""}`}>
        {tabs.map((t) => {
          const Icon = t.icon;
          return (
            <TabsTrigger
              key={t.id}
              value={t.id}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium data-[state=active]:font-bold data-[state=active]:shadow-md"
            >
              <Icon className="h-4 w-4" />
              {t.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
