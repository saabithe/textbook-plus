// Transformation Registry
// Maps content types → components + when-to-use recommendations

export interface Transformation {
  id: string;
  name: string;
  component: string;
  inputTypes: string[];
  whenToUse: string;
  priority: number; // 1-5, 5 = highest efficiency
}

export const TRANSFORMATIONS: Transformation[] = [
  // Data display
  {
    id: "table",
    name: "Table",
    component: "@/components/content/data/TableCard",
    inputTypes: ["structured-data", "multi-column", "numerical"],
    whenToUse: "Multi-column data, numerical relationships, organising scattered facts",
    priority: 5,
  },
  {
    id: "checklist",
    name: "Checklist",
    component: "@/components/content/data/Checklist",
    inputTypes: ["action-items", "prerequisites", "completion"],
    whenToUse: "Task completion, prerequisite tracking, step-by-step completion",
    priority: 4,
  },
  {
    id: "sortable-table",
    name: "Sortable Table",
    component: "@/components/content/data/SortableTable",
    inputTypes: ["ranked", "ordered", "metric-comparison"],
    whenToUse: "Ordered lists, ranking by metric, when sorting adds value",
    priority: 3,
  },
  {
    id: "kanban",
    name: "Kanban Board",
    component: "@/components/content/data/Kanban",
    inputTypes: ["status-based", "work-in-progress", "workflow"],
    whenToUse: "Status tracking, work-in-progress, active management",
    priority: 3,
  },

  // Process & flow
  {
    id: "process",
    name: "Process Card",
    component: "@/components/content/process/ProcessCard",
    inputTypes: ["sequential", "step-by-step", "procedure"],
    whenToUse: "Numbered sequential processes, cause→effect→action chains",
    priority: 4,
  },
  {
    id: "flow",
    name: "Flow Diagram",
    component: "@/components/content/process/FlowDiagram",
    inputTypes: ["cause-effect", "reaction", "mechanism"],
    whenToUse: "Reaction mechanisms, multi-stage processes, before→after tracing",
    priority: 4,
  },
  {
    id: "cycle",
    name: "Cycle Diagram",
    component: "@/components/content/process/CycleDiagram",
    inputTypes: ["recurring", "loop", "seasonal"],
    whenToUse: "Repetitive cycles, seasonal patterns, loop visual aids",
    priority: 3,
  },
  {
    id: "timeline",
    name: "Timeline",
    component: "@/components/content/process/Timeline",
    inputTypes: ["chronological", "historical", "version"],
    whenToUse: "Historical sequences, version tracking, event relationships",
    priority: 4,
  },

  // Concept & classification
  {
    id: "fact",
    name: "Fact Card",
    component: "@/components/content/concept/FactCard",
    inputTypes: ["definition", "single-fact", "takeaway"],
    whenToUse: "Single-sentence takeaways, quick reference, density matters",
    priority: 5,
  },
  {
    id: "concept",
    name: "Concept Card",
    component: "@/components/content/concept/ConceptCard",
    inputTypes: ["classification", "category", "3-plus-items"],
    whenToUse: "3+ categories, hierarchical grouping, more than 2 items",
    priority: 4,
  },
  {
    id: "tree",
    name: "Tree Diagram",
    component: "@/components/content/concept/TreeDiagram",
    inputTypes: ["hierarchy", "levels", "dependency"],
    whenToUse: "Multi-level classifications, dependency graphs, family trees",
    priority: 4,
  },
  {
    id: "network",
    name: "Network Diagram",
    component: "@/components/content/concept/NetworkDiagram",
    inputTypes: ["relationships", "connections", "entity-map"],
    whenToUse: "Connection maps, hub-and-spoke, entity relationship focus",
    priority: 3,
  },

  // Decision & analysis
  {
    id: "decision-tree",
    name: "Decision Tree",
    component: "@/components/content/decision/DecisionTree",
    inputTypes: ["conditional", "if-then", "branching"],
    whenToUse: "Conditional logic, if→then hierarchies, branching paths",
    priority: 4,
  },
  {
    id: "risk-matrix",
    name: "Risk Matrix",
    component: "@/components/content/decision/RiskMatrix",
    inputTypes: ["risk", "uncertainty", "probability"],
    whenToUse: "Uncertainty mapping, probability×impact, risk analysis",
    priority: 3,
  },
  {
    id: "scenario",
    name: "Scenario Card",
    component: "@/components/content/decision/ScenarioCard",
    inputTypes: ["what-if", "outcomes", "variations"],
    whenToUse: "What-if analysis, multiple pathways, exploring variations",
    priority: 3,
  },
  {
    id: "perspective",
    name: "Perspective Card",
    component: "@/components/content/decision/PerspectiveCard",
    inputTypes: ["viewpoints", "controversy", "multi-perspective"],
    whenToUse: "Side-by-side viewpoints, controversy has positions",
    priority: 3,
  },

  // Study & recall
  {
    id: "metric",
    name: "Metric Card",
    component: "@/components/content/study/MetricCard",
    inputTypes: ["kpi", "numerical", "single-value"],
    whenToUse: "Single value emphasis, progress tracking, number visualisation",
    priority: 4,
  },
  {
    id: "mistake",
    name: "Mistake Card",
    component: "@/components/content/study/MistakeCard",
    inputTypes: ["common-mistake", "error", "correction"],
    whenToUse: "Error prevention, learning from errors, anti-patterns educational",
    priority: 4,
  },
  {
    id: "guided-stepper",
    name: "Guided Stepper",
    component: "@/components/content/study/GuidedStepper",
    inputTypes: ["checkpoints", "guided", "progress-tracking"],
    whenToUse: "Numbered checkpoints, progress tracking, checkpoint adherence",
    priority: 4,
  },

  // System & architecture
  {
    id: "architecture",
    name: "Architecture Card",
    component: "@/components/content/system/ArchitectureCard",
    inputTypes: ["system", "components", "breakdown"],
    whenToUse: "System breakdown, component relationships, system understanding",
    priority: 3,
  },
  {
    id: "io-diagram",
    name: "I/O Diagram",
    component: "@/components/content/system/IODiagram",
    inputTypes: ["inputs-outputs", "flow-boundary", "system-edges"],
    whenToUse: "Flow boundaries, system edges, boundary analysis",
    priority: 3,
  },
  {
    id: "event-flow",
    name: "Event Flow",
    component: "@/components/content/system/EventFlow",
    inputTypes: ["trigger-reaction", "event-sequence"],
    whenToUse: "Trigger→reaction chains, event sequencing key",
    priority: 3,
  },
  {
    id: "roadmap",
    name: "Roadmap",
    component: "@/components/content/system/RoadmapCard",
    inputTypes: ["milestones", "goals", "timeline-goals"],
    whenToUse: "Long-term progression, version roadmap, timeline visualisation",
    priority: 3,
  },
];

/**
 * Select the best transformation for a given content type.
 */
export function selectTransformation(contentTypes: string[]): Transformation | null {
  let best: Transformation | null = null;
  let bestScore = -1;

  for (const t of TRANSFORMATIONS) {
    const overlap = t.inputTypes.filter(ct => contentTypes.includes(ct)).length;
    const score = overlap * 10 + t.priority;
    if (score > bestScore) {
      bestScore = score;
      best = t;
    }
  }

  return best;
}

/**
 * Get all transformations matching a content type.
 */
export function getTransformationsFor(contentType: string): Transformation[] {
  return TRANSFORMATIONS.filter(t => t.inputTypes.includes(contentType));
}
