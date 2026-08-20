"use client";

import { BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className={cn("flex items-center gap-1 rounded-xl border border-border/60 bg-muted/30 p-1 mb-8", className)}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => handleChange(tab.id)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 flex-1 justify-center",
              active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
