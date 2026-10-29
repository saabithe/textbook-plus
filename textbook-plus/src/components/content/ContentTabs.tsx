"use client";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ContentTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const tabs = [
  { id: "summary", label: "Read" },
  { id: "creations", label: "Discourses" },
];

export function ContentTabs({ activeTab, onTabChange, className }: ContentTabsProps) {
  function handleChange(tab: string) {
    onTabChange(tab);
    window.dispatchEvent(new CustomEvent("content-tab-change", { detail: { tab } }));
  }

  return (
    <Tabs value={activeTab} onValueChange={handleChange} className="mb-8">
      <TabsList variant="line" className={cn("w-full gap-6 justify-start", className)}>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="px-0">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}