"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { Highlight } from "@/components/content/Highlight";
import { Callout } from "@/components/content/Callout";
import { TableCard } from "@/components/content/data/TableCard";
import { SubjectCard } from "@/components/subject/SubjectCard";
import { subjects } from "@/data/subjects";

export default function ComponentLibrary() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 py-12">
      <h1 className="text-3xl font-extrabold">Component Library (dev)</h1>

      {/* UI Primitives */}
      <section>
        <h2 className="t-h2 mb-4">UI Primitives</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Input placeholder="type…" />
          <ToggleGroup variant="outline" aria-label="Format" spacing={2}>
            <ToggleGroupItem value="b" aria-label="Bold">B</ToggleGroupItem>
            <ToggleGroupItem value="i" aria-label="Italic">I</ToggleGroupItem>
          </ToggleGroup>
          <Separator />
        </div>
      </section>

      {/* Content blocks */}
      <section>
        <h2 className="t-h2 mb-4">Content Blocks</h2>
        <div className="grid gap-6">
          <Callout type="note">A note – live demo.</Callout>
          <Highlight color="yellow">definition</Highlight>
          <TableCard
            title="Sample Table"
            headers={["Col A", "Col B"]}
            rows={[{ cells: ["A1", "B1"] }, { cells: ["A2", "B2"] }]}
          />
        </div>
      </section>

      {/* Subject widgets (few) */}
      <section>
        <h2 className="t-h2 mb-4">Subject Widgets</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {subjects.slice(0,2).map((s) => (
              <SubjectCard key={s.id} subject={s} />
            ))}
        </div>
      </section>
    </div>
  );
}
