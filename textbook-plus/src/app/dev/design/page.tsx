import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Kbd } from "@/components/ui/kbd";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Expandable } from "@/components/content/Expandable";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Comparison } from "@/components/content/Comparison";
import { TableCard } from "@/components/content/data/TableCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Stepper } from "@/components/content/Stepper";
import { Timeline } from "@/components/content/process/Timeline";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { TopicIndex } from "@/components/content/TopicIndex";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6 border-t border-border pt-8">
      <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

export default function DesignPage() {
  return (
    <div className="mx-auto max-w-[1100px] space-y-10 px-6 py-12">
      <header className="space-y-2 border-b border-border pb-6">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">Blueprint — living contract</h1>
        <p className="text-sm text-muted-foreground">
          Every primitive, both themes, real content. If a change drifts, this is where it shows.
        </p>
      </header>

      <Section title="Type scale">
        <p className="t-title">Title 44</p>
        <p className="t-h1">H1 — Alternating Current</p>
        <p className="t-h2">H2 — Faraday's law of induction</p>
        <p className="t-h3">H3 — Solenoids and toroids</p>
        <p className="t-h4">H4 — Lab step 3</p>
        <p className="t-lead">Lead — the opening sentence of a chapter, muted.</p>
        <p className="t-body">Body — the reading voice, 18px at 1.75.</p>
        <p className="t-caption">Caption — figure sources, secondary notes.</p>
        <p className="t-micro">Micro — every label, every chip, every eyebrow</p>
      </Section>

      <Section title="Surfaces & tokens">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { n: "background", c: "bg-background" },
            { n: "card", c: "bg-card" },
            { n: "muted", c: "bg-muted" },
            { n: "foreground", c: "bg-foreground" },
            { n: "muted-foreground", c: "bg-muted-foreground" },
            { n: "border", c: "bg-border" },
            { n: "rule-strong", c: "bg-rule-strong" },
            { n: "primary (ink)", c: "bg-primary" },
          ].map((s) => (
            <div key={s.n} className="space-y-2">
              <div className={`h-12 rounded-lg border border-border ${s.c}`} />
              <p className="t-micro">{s.n}</p>
            </div>
          ))}
        </div>
        <div className="dark max-h-72 overflow-hidden rounded-lg border border-border bg-background p-4 text-foreground">
          <p className="t-micro mb-2">Dark column preview</p>
          <p className="t-h3">Chapter title in dark mode</p>
          <p className="t-body text-foreground/90">Body voice with primary-as-ink focus ring and border tokens.</p>
        </div>
      </Section>

      <Section title="Core primitives">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
        <div className="flex flex-wrap items-end gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="dg-in">Input</Label>
            <Input id="dg-in" placeholder="Type here …" />
          </div>
          <Kbd>Ctrl K</Kbd>
          <Progress value={62} className="w-40" />
          <Skeleton className="h-8 w-44" />
        </div>
        <Separator />
        <Tabs defaultValue="a">
          <TabsList variant="line" className="w-full gap-6 justify-start">
            <TabsTrigger value="a" className="px-0">Read</TabsTrigger>
            <TabsTrigger value="b" className="px-0">Discourses</TabsTrigger>
          </TabsList>
          <TabsContent value="a" className="mt-3 t-body">Learning pane.</TabsContent>
          <TabsContent value="b" className="mt-3 t-body">Discourse pane.</TabsContent>
        </Tabs>
        <ToggleGroup variant="outline" spacing={2} aria-label="Format">
          <ToggleGroupItem value="b" aria-label="Bold">B</ToggleGroupItem>
          <ToggleGroupItem value="i" aria-label="Italic">I</ToggleGroupItem>
          <ToggleGroupItem value="u" aria-label="Underline">U</ToggleGroupItem>
        </ToggleGroup>
        <Table label="Gallery sample">
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead className="text-right">Chapters</TableHead>
              <TableHead>Colour</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Physics</TableCell>
              <TableCell className="text-right">14</TableCell>
              <TableCell>Blue</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Chemistry</TableCell>
              <TableCell className="text-right">10</TableCell>
              <TableCell>Green</TableCell>
            </TableRow>
          </TableBody>
          <TableCaption>Two sample rows.</TableCaption>
        </Table>
      </Section>

      <Section title="Text & emphasis">
        <Callout type="note">A note tone — ink rule, short prose, one fact per box.</Callout>
        <Callout type="important" subjectColor="var(--subject-physics)">
          An important tone — the subject rule marks the law.
        </Callout>
        <Callout type="warning">A warning tone — amber rule, never a red panel.</Callout>
        <KeyPoint title="Electric flux">The scalar product of E and the area vector.</KeyPoint>
        <p className="t-body">
          A <Highlight color="yellow">definition</Highlight>, a <Highlight color="blue">key term</Highlight>, a{" "}
          <Highlight color="green">result</Highlight>, a <Highlight color="pink">caution</Highlight>, and a{" "}
          <Highlight color="orange">formula</Highlight>.
        </p>
        <Expandable title="Worked example" variant="example">
          <p className="text-sm">Solution steps collapse, the way every worked example in the app does.</p>
        </Expandable>
        <Expandable title="Practice question" variant="exercise">
          <p className="text-sm">Exercise content, amber accent.</p>
        </Expandable>
        <Formula>{"E = mc^2"}</Formula>
        <FormulaBlock label="OHM'S LAW" latex="V = IR" />
      </Section>

      <Section title="Data & structure">
        <TableCard
          title="Formulas of halides of 3d metals"
          headers={["Oxidation number", "Halides"]}
          rows={[
            { cells: ["+6", "CrF₆"] },
            { cells: ["+5", "VF₅, CrF₅"] },
            { cells: ["+2", "TiX₂ … ZnX₂"] },
          ]}
          caption="X = F→I."
        />
        <Comparison
          columns={[
            { title: "Scalar", children: <p>Magnitude only — Distance, speed</p> },
            { title: "Vector", children: <p>Magnitude + direction — Displacement, velocity</p> },
          ]}
        />
        <Stepper
          steps={[
            { label: "State the given", description: "List variables with units." },
            { label: "Write the law", description: "Pick the equation that links them." },
            { label: "Substitute", description: "Plug in numbers and compute." },
          ]}
        />
      </Section>

      <Section title="Study & answers">
        <ExerciseQa
          questions={[
            <>State Ohm's law.</>,
            <>A 10 Ω resistor carries 2 A. Voltage?</>,
          ]}
          answers={[<>V = IR</>, <>V = 20 V</>]}
        />
        <MetricCard label="Magnetic flux" value="2.5" unit="Wb" trend="up" description="Six lines under dot." />
        <MistakeCard mistake="Using χ instead of χ" correction="Use χ_e in SI; mixing them changes the denominator." example="E = χ_e ε₀ E" />
      </Section>

      <Section title="Chapter furniture">
        <ChapterIntro author="Humpy Dumpty" subname="Egg pants" genre="Insect fiction" genreArabic="قصة خيالية" characters={["Humpy", "Dumpty"]} />
        <TopicIndex items={[{ id: "h-1", icon: "·", label: "Introduction", note: "Frames the argument" }]} />
      </Section>

      <Section title="Highlight tones">
        <p className="t-body">
          Each tone names a meaning so the page's colour story stays consistent
          with the 953 <Highlight color="yellow">definitions</Highlight>,{" "}
          <Highlight color="blue">key terms</Highlight>, <Highlight color="green">results</Highlight>,{" "}
          <Highlight color="pink">cautions</Highlight>, and <Highlight color="orange">formulas</Highlight>.
        </p>
      </Section>

      <Section title="Chart (recharts proof)">
        <div className="rounded-lg border border-border bg-card p-4">
          <ChartContainer
            config={{
              value: { label: "Chapters", color: "var(--foreground)" },
            }}
            className="h-44 w-full"
          >
            <BarChart data={[{ s: "Phys", value: 14 }, { s: "Chem", value: 10 }, { s: "Math", value: 13 }]}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="s" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} width={24} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="var(--color-value)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
      </Section>

      <Section title="Motion">
        <div className="h-16 w-44 border-l-[3px] border-ok bg-card px-4 py-3 transition-all duration-[180ms] ease-[var(--ease-blueprint)] hover:translate-x-0.5">
          <p className="t-micro">hover me — 180ms ink wash only</p>
        </div>
      </Section>
    </div>
  );
}