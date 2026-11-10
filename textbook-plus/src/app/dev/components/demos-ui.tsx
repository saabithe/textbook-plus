"use client";

import type { ReactNode } from "react";
import { Check, Plus, Search } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { Progress } from "@/components/ui/progress";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Skeleton } from "@/components/ui/skeleton";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CodeBlock } from "@/components/ui/code-block";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Toaster } from "@/components/ui/sonner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar";

const VARIANTS = ["default", "outline", "secondary", "ghost", "destructive", "link"] as const;
const SIZES = ["xs", "sm", "default", "lg"] as const;

export const UI_DEMOS: Record<string, ReactNode> = {
  "ui/button.tsx#Button": (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {VARIANTS.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {SIZES.map((size) => (
          <Button key={size} size={size}>
            {size}
          </Button>
        ))}
        <Button size="icon" aria-label="Add">
          <Plus />
        </Button>
        <Button size="icon-xs" aria-label="Search">
          <Search />
        </Button>
        <Button size="icon-sm" aria-label="Check">
          <Check />
        </Button>
        <Button size="icon-lg" aria-label="Add">
          <Plus />
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>
          Disabled outline
        </Button>
        <Button>
          <Plus /> With icon
        </Button>
      </div>
    </div>
  ),

  "ui/button-group.tsx#ButtonGroup": (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline">Day</Button>
        <Button variant="outline">Week</Button>
        <Button variant="outline">Month</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" className="w-fit">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">
          <Plus /> Add
        </Button>
        <ButtonGroupSeparator />
        <ButtonGroupText>⌘ K</ButtonGroupText>
      </ButtonGroup>
    </div>
  ),

  "ui/toggle.tsx#Toggle": (
    <div className="flex flex-wrap items-center gap-3">
      {(["default", "outline"] as const).map((variant) =>
        (["sm", "default", "lg"] as const).map((size) => (
          <Toggle key={`${variant}-${size}`} variant={variant} size={size} aria-label={`${variant} ${size}`}>
            B
          </Toggle>
        ))
      )}
      <Toggle aria-label="Bold" defaultPressed>
        Pressed
      </Toggle>
    </div>
  ),

  "ui/toggle-group.tsx#ToggleGroup": (
    <div className="flex flex-col gap-4">
      <ToggleGroup variant="outline" spacing={0}>
        <ToggleGroupItem value="b" aria-label="Bold">
          B
        </ToggleGroupItem>
        <ToggleGroupItem value="i" aria-label="Italic">
          I
        </ToggleGroupItem>
        <ToggleGroupItem value="u" aria-label="Underline">
          U
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant="outline" spacing={2}>
        <ToggleGroupItem value="left" aria-label="Left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Center">
          Center
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),

  "ui/badge.tsx#Badge": (
    <div className="flex flex-wrap items-center gap-2">
      {(["default", "secondary", "outline", "destructive", "ghost", "link"] as const).map((variant) => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      ))}
    </div>
  ),

  "ui/kbd.tsx#Kbd": (
    <div className="flex flex-wrap items-center gap-3">
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
  ),

  "ui/input.tsx#Input": (
    <div className="max-w-sm space-y-2">
      <Input placeholder="Plain input" />
      <Input placeholder="Disabled" disabled />
    </div>
  ),

  "ui/textarea.tsx#Textarea": (
    <div className="max-w-sm space-y-2">
      <Textarea placeholder="Write a note…" rows={3} />
      <Textarea placeholder="Disabled" disabled rows={2} />
    </div>
  ),

  "ui/label.tsx#Label": (
    <div className="max-w-sm space-y-2">
      <Label htmlFor="demo-label">Chapter title</Label>
      <Input id="demo-label" placeholder="Electric Charges and Fields" />
    </div>
  ),

  "ui/checkbox.tsx#Checkbox": (
    <div className="flex flex-wrap items-center gap-4">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox /> Unchecked
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox defaultChecked /> Checked
      </label>
      <label className="flex items-center gap-2 text-sm text-muted-foreground">
        <Checkbox disabled /> Disabled
      </label>
    </div>
  ),

  "ui/input-group.tsx#InputGroup": (
    <div className="max-w-sm space-y-3">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Search className="size-3.5" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search chapters…" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>kg</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Write a note…" rows={2} />
        <InputGroupAddon align="block-end">
          <InputGroupButton size="sm">Send</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),

  "ui/progress.tsx#Progress": (
    <div className="max-w-sm space-y-3">
      <Progress value={62} />
      <Progress value={12} />
    </div>
  ),

  "ui/card.tsx#Card": (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Electric flux</CardTitle>
        <CardDescription>The scalar product of E and A.</CardDescription>
        <CardAction>
          <Badge variant="outline">H2</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Flux counts field lines crossing a surface. The unit is N m² C⁻¹.
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Open</Button>
        <Button size="sm" variant="ghost">
          Dismiss
        </Button>
      </CardFooter>
    </Card>
  ),

  "ui/table.tsx#Table": (
    <div className="max-w-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead className="text-right">Chapters</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Physics</TableCell>
            <TableCell className="text-right">14</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Chemistry</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
        </TableBody>
        <TableCaption>Sample rows.</TableCaption>
      </Table>
    </div>
  ),

  "ui/separator.tsx#Separator": (
    <div className="space-y-4">
      <Separator />
      <div className="flex h-10 items-center gap-4 text-sm">
        <span>Above</span>
        <Separator orientation="vertical" />
        <span>Below</span>
      </div>
    </div>
  ),

  "ui/tabs.tsx#Tabs": (
    <div className="space-y-6">
      <Tabs defaultValue="read">
        <TabsList>
          <TabsTrigger value="read">Read</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
        </TabsList>
        <TabsContent value="read" className="pt-3 text-sm">
          Reading pane.
        </TabsContent>
        <TabsContent value="practice" className="pt-3 text-sm">
          Practice pane.
        </TabsContent>
      </Tabs>
      <Tabs defaultValue="a">
        <TabsList variant="line" className="w-full justify-start gap-6">
          <TabsTrigger value="a" className="px-0">
            Concept
          </TabsTrigger>
          <TabsTrigger value="b" className="px-0">
            Practice
          </TabsTrigger>
        </TabsList>
        <TabsContent value="a" className="pt-3 text-sm">
          Line variant pane.
        </TabsContent>
        <TabsContent value="b" className="pt-3 text-sm">
          Second pane.
        </TabsContent>
      </Tabs>
    </div>
  ),

  "ui/accordion.tsx#Accordion": (
    <Accordion className="max-w-lg">
      <AccordionItem value="a">
        <AccordionTrigger>What is electric flux?</AccordionTrigger>
        <AccordionContent className="pb-3 text-sm text-muted-foreground">
          The scalar product of the electric field and the area vector.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>What is Gauss&apos;s law?</AccordionTrigger>
        <AccordionContent className="pb-3 text-sm text-muted-foreground">
          Total flux through a closed surface equals q/ε₀.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),

  "ui/collapsible.tsx#Collapsible": (
    <Collapsible defaultOpen className="max-w-lg">
      <CollapsibleTrigger render={<Button variant="outline">Toggle details</Button>} />
      <CollapsibleContent className="pt-3 text-sm text-muted-foreground">
        Hidden content is revealed here.
      </CollapsibleContent>
    </Collapsible>
  ),

  "ui/skeleton.tsx#Skeleton": (
    <div className="max-w-sm space-y-2">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),

  "ui/empty.tsx#Empty": (
    <Empty className="max-w-md border border-border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Search />
        </EmptyMedia>
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>Try a different search term.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Clear search
        </Button>
      </EmptyContent>
    </Empty>
  ),

  "ui/alert.tsx#Alert": (
    <div className="max-w-lg space-y-3">
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>This chapter has a practice set.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Careful</AlertTitle>
        <AlertDescription>Do not confuse flux with field strength.</AlertDescription>
      </Alert>
    </div>
  ),

  "ui/breadcrumb.tsx#Breadcrumb": (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Physics</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Electric Charges</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),

  "ui/code-block.tsx#CodeBlock": (
    <CodeBlock lang="tsx">{`<Button variant="outline" size="sm">\n  Open\n</Button>`}</CodeBlock>
  ),

  "ui/dialog.tsx#Dialog": (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename chapter</DialogTitle>
          <DialogDescription>This changes the chapter title everywhere.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),

  "ui/dropdown-menu.tsx#DropdownMenu": (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Open menu</Button>} />
      <DropdownMenuContent align="start" className="w-44">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuItem>Rename</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),

  "ui/context-menu.tsx#ContextMenu": (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-20 items-center justify-center rounded border border-dashed border-border text-[12px] text-muted-foreground">
          Right-click this area
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Inspect</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),

  "ui/menubar.tsx#Menubar": (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New tab</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),

  "ui/command.tsx#Command": (
    <Command className="max-w-md rounded-lg border border-border">
      <CommandInput placeholder="Search components…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Content">
          <CommandItem>Callout</CommandItem>
          <CommandItem>TableCard</CommandItem>
          <CommandItem>Stepper</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),

  "ui/navigation-menu.tsx#NavigationMenu": (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Subjects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-56 p-3 text-sm text-muted-foreground">Physics · Chemistry · Mathematics</div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Grammar
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),

  "ui/sonner.tsx#Toaster": (
    <div className="space-y-2 text-sm text-muted-foreground">
      <p>The toast host. Trigger it from any client component with `toast()`.</p>
      <Toaster />
    </div>
  ),

  "ui/carousel.tsx#Carousel": (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {[1, 2, 3].map((n) => (
          <CarouselItem key={n}>
            <div className="flex h-28 items-center justify-center rounded-lg border border-border bg-muted text-sm">
              Slide {n}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),

  "ui/chart.tsx#ChartContainer": (
    <div className="max-w-md rounded-lg border border-border p-3">
      <ChartContainer config={{ value: { label: "Chapters", color: "var(--foreground)" } }} className="h-40 w-full">
        <BarChart data={[{ s: "Phys", value: 14 }, { s: "Chem", value: 10 }, { s: "Math", value: 13 }]}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="s" tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-value)" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  ),

  "ui/sidebar.tsx#SidebarGroup": (
    <div className="w-64 rounded-lg border border-border bg-card p-3">
      <SidebarGroup>
        <SidebarGroupLabel>Contents</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>Electric charges</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Gauss&apos;s law</SidebarMenuButton>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>Statement</SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>Applications</SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                Potential <SidebarMenuBadge>3</SidebarMenuBadge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
  ),
};
