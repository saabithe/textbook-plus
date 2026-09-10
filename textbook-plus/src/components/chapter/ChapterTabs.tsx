"use client";

import { BookOpen, Dumbbell, Brain, FileText, Layers, HelpCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";

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
  return (
    <Empty className="rounded-3xl p-8 sm:p-10">
      <EmptyHeader>
        <EmptyMedia
          variant="icon"
          className="size-16 rounded-2xl text-white"
          style={{
            background: `linear-gradient(135deg, ${subjectColor}, ${subjectColor}B3)`,
            boxShadow: `0 10px 25px -5px ${subjectColor}55`,
          }}
        >
          <BookOpen className="size-8" />
        </EmptyMedia>
        <EmptyTitle className="text-xl font-extrabold tracking-tight">
          Practice is on its way!
        </EmptyTitle>
        <EmptyDescription className="max-w-sm">
          We&apos;re cooking up questions, flashcards, and revision notes for this
          chapter. Keep learning — practice will be ready soon!
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Badge
          variant="secondary"
          style={{ color: subjectColor, backgroundColor: `${subjectColor}15` }}
        >
          Coming soon
        </Badge>
        <div className="flex max-w-md flex-wrap items-center justify-center gap-2">
          {[
            { icon: Brain, label: "Practice Questions" },
            { icon: Layers, label: "Flashcards" },
            { icon: FileText, label: "Revision Notes" },
            { icon: HelpCircle, label: "Question Bank" },
          ].map((tool) => {
            const Icon = tool.icon;
            return (
              <span
                key={tool.label}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{ color: subjectColor, backgroundColor: `${subjectColor}12` }}
              >
                <Icon className="h-3.5 w-3.5" />
                {tool.label}
              </span>
            );
          })}
        </div>
      </EmptyContent>
    </Empty>
  );
}
