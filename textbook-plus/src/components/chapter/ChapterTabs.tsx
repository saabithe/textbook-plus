"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from "@/components/ui/empty";

interface ChapterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showPractice?: boolean;
}

const tabs = [
  { id: "learning", label: "Learning" },
  { id: "practice", label: "Practice" },
];

/**
 * Learning / Practice — one tab grammar across the app (§14.11):
 * shadcn line tabs, 2px ink indicator, no pill track, no icons.
 */
export function ChapterTabs({ activeTab, onTabChange, showPractice = true }: ChapterTabsProps) {
  const filteredTabs = showPractice ? tabs : [tabs[0]];
  return (
    <Tabs
      value={activeTab}
      onValueChange={(v) => onTabChange(v as string)}
      className="mb-8"
    >
      <TabsList
        variant="line"
        aria-label="Chapter views"
        className="h-10 w-full justify-start gap-6"
      >
        {filteredTabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="px-0">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <Separator />
    </Tabs>
  );
}

/** Hairline empty state — no icon tile, no fill, no shadow. */
export function PracticePlaceholder({ subjectColor: _subjectColor }: { subjectColor: string }) {
  return (
    <Empty className="border border-border">
      <EmptyHeader>
        <EmptyTitle className="t-h3">Practice is on its way</EmptyTitle>
        <EmptyDescription className="t-caption">
          Questions, flashcards and revision notes for this chapter are still being written.
        </EmptyDescription>
      </EmptyHeader>
      <p className="t-micro">Questions · Flashcards · Revision notes</p>
    </Empty>
  );
}
