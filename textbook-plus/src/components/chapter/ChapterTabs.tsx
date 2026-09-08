"use client";

import { BookOpen, Dumbbell, Brain, FileText, Layers, HelpCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <Tabs value={activeTab} onValueChange={(v) => onTabChange(v as string)} className="mb-8">
      <TabsList aria-label="Chapter views" className="flex w-full gap-1 rounded-xl border border-border/60 bg-muted/30 p-1">
        {filteredTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <TabsTrigger key={tab.id} value={tab.id} className="flex-1 justify-center rounded-lg px-4 py-2.5">
              <Icon className="h-4 w-4" />
              {tab.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
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
            <Card
              key={tool.title}
              className="p-5 opacity-75"
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
                  <Badge variant="secondary" className="mt-1 text-xs font-normal">{tool.status}</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
