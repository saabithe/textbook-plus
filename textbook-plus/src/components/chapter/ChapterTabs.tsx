"use client";

import { BookOpen, Dumbbell, Brain, FileText, Layers, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChapterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showPractice?: boolean;
}

const tabs = [
  { id: "learning", label: "Learning", icon: BookOpen },
  { id: "practice", label: "Practice", icon: Dumbbell },
];

export function ChapterTabs({ activeTab, onTabChange, showPractice = true }: ChapterTabsProps) {
  const filteredTabs = showPractice ? tabs : [tabs[0]];
  return (
    <div role="tablist" aria-label="Chapter views" className="flex items-center gap-1 rounded-xl border border-border/60 bg-muted/30 p-1 mb-8">
      {filteredTabs.map((tab) => {
        const Icon = tab.icon;
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active}
            onClick={() => onTabChange(tab.id)}
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

export function PracticePlaceholder({ subjectColor }: { subjectColor: string }) {
  const tools = [
    {
      icon: Brain,
      title: "Practice Questions",
      description: "Test your understanding with MCQs and short answer questions",
      status: "Coming soon",
    },
    {
      icon: Layers,
      title: "Flashcards",
      description: "Review key concepts with flip cards and spaced repetition",
      status: "Coming soon",
    },
    {
      icon: FileText,
      title: "Revision Notes",
      description: "Quick summary sheets for last-minute revision",
      status: "Coming soon",
    },
    {
      icon: HelpCircle,
      title: "Question Bank",
      description: "Past year questions and sample papers organized by topic",
      status: "Coming soon",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.title}
              className="rounded-xl border border-border/60 bg-card p-5 opacity-75"
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg shrink-0"
                  style={{ backgroundColor: `${subjectColor}15` }}
                >
                  <Icon className="h-4.5 w-4.5" style={{ color: subjectColor }} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{tool.title}</h3>
                  <span className="text-xs text-muted-foreground">{tool.status}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
