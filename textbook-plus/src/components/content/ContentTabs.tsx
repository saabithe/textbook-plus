"use client";

import { BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ContentTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const tabs = [
  { id: "summary", label: "Read", icon: BookOpen },
  { id: "creations", label: "Discourses", icon: Sparkles },
];

export function ContentTabs({ activeTab, onTabChange, className }: ContentTabsProps) {
  function handleChange(tab: string) {
    onTabChange(tab);
    window.dispatchEvent(new CustomEvent("content-tab-change", { detail: { tab } }));
  }

  return (
    <Tabs value={activeTab} onValueChange={handleChange} className="mb-8">
      <TabsList className={cn("flex w-full items-center gap-1.5 rounded-2xl border border-border/60 bg-muted/30 p-1.5 shadow-sm", className)}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium data-[state=active]:font-bold data-[state=active]:shadow-md"
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
