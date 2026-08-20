# PIPELINE_ENGLISH.md

> Kerala Board Class 12 English — 16 chapters. Text-heavy, analysis-focused, literary components.

---

## Subject Info

| Property | Value |
|----------|-------|
| Subject | English |
| Slug | `english` |
| Chapters | 16 |
| Color | `--subject-english` (orange) |
| Content type | Literature, grammar, vocabulary, literary analysis, speeches, poems, stories |
| Practice types | MCQs, comprehension, grammar exercises, flashcards |

---

## Chapter List

| # | Chapter | Slug | Type | Status |
|---|---------|------|------|--------|
| 1 | The 3Ls of Empowerment | `the-3ls-of-empowerment` | Speech | 🔲 Pending |
| 2 | Any Woman | `any-woman` | Poem | 🔲 Pending |
| 3 | Matchbox | `matchbox` | Story | 🔲 Pending |
| 4 | Horegallu | `horegallu` | Essay | 🔲 Pending |
| 5 | Mending Wall | `mending-wall` | Poem | 🔲 Pending |
| 6 | Amigo Brothers | `amigo-brothers` | Story | 🔲 Pending |
| 7 | The Hour of Truth | `the-hour-of-truth` | Play | 🔲 Pending |
| 8 | A Three Wheel Solution | `a-three-wheel-solution` | Interview | 🔲 Pending |
| 9 | Didi | `dhyan-chand` | Life writing | 🔲 Pending |
| 10 | Stammer | `stammer` | Poem | 🔲 Pending |
| 11 | When a Sapling is Planted | `when-a-sapling-is-planted` | Speech | 🔲 Pending |
| 12 | Rice | `rice` | Poem | 🔲 Pending |
| 13 | Dangers of Drug Abuse | `dangers-of-drug-abuse` | Essay | 🔲 Pending |
| 14 | Post Early for Christmas | `post-early-for-christmas` | Play | 🔲 Pending |
| 15 | This Is Going to Hurt Just a Little Bit | `this-is-going-to-hurt` | Poem | 🔲 Pending |
| 16 | Crime and Punishment | `crime-and-punishment` | Story | 🔲 Pending |

---

## Source of Truth: Chapter Text

Each chapter has a `chapter-text.md` file at `src/content/english/{slug}/chapter-text.md`. This is the **single source of truth** for the chapter's text content — the cleaned, readable version of the textbook pages.

### Structure

```markdown
# Chapter Title

## CHAPTER TITLE (optional duplicate)

### Author Name

[Full text: story, poem, speech, essay, or play]

---

## About the Author

[Biography paragraph]

---

## Read and Respond

[Numbered questions from textbook]
```

### Rules

- **No OCR artifacts**: No page numbers, no `Textbook for Class XII` headers, no `Unit III/IV/V` headers, no single-word-per-line breaks, no stray `r`/`m` glyphs
- **No interleaved activities**: Activity sections, "Think and write", glossary entries, supplementary readings are NOT included
- **No duplicate content**: If "About the Author" appears twice (bare + formatted), keep only the `##` formatted version
- **Complete text**: Every paragraph/line of the core text must be preserved
- **Play format**: Character names followed by colon, stage directions in brackets
- **Poem format**: Preserved line breaks, stanza groupings with `###` subheadings

### Status (as of cleanup)

| # | Chapter | Slug | Lines | Status |
|---|---------|------|-------|--------|
| 1 | The 3Ls of Empowerment | `the-3ls-of-empowerment` | 37 | ✅ Clean |
| 2 | Any Woman | `any-woman` | 51 | ✅ Clean |
| 3 | Matchbox | `matchbox` | 369 | ✅ Clean |
| 4 | Horegallu | `horegallu` | 195 | ✅ Clean |
| 5 | Mending Wall | `mending-wall` | 73 | ✅ Clean |
| 6 | Amigo Brothers | `amigo-brothers` | 391 | ✅ Clean |
| 7 | The Hour of Truth | `the-hour-of-truth` | ~280 | ✅ Clean |
| 8 | A Three Wheel Solution | `a-three-wheel-solution` | 80 | ✅ Clean |
| 9 | Dhyan Chand | `dhyan-chand` | 77 | ⚠️ Content is "Didi" by Shaheen Mistri |
| 10 | Stammer | `stammer` | 53 | ✅ Clean |
| 11 | When a Sapling is Planted | `when-a-sapling-is-planted` | 61 | ✅ Clean |
| 12 | Rice | `rice` | 106 | ✅ Clean |
| 13 | Dangers of Drug Abuse | `dangers-of-drug-abuse` | 40 | ✅ Clean |
| 14 | Post Early for Christmas | `post-early-for-christmas` | 414 | ✅ Clean |
| 15 | This Is Going to Hurt Just a Little Bit | `this-is-going-to-hurt` | ~70 | ✅ Clean |
| 16 | Crime and Punishment | `crime-and-punishment` | ~180 | ✅ Clean |

### Known Issue

**Chapter 9 (Didi / `dhyan-chand`)**: The chapter was previously misnamed "Dhyan Chand" in `src/data/chapters.ts`. Now correctly titled "Didi" (Life writing by Shaheen Mistri). The slug remains `dhyan-chand` for URL compatibility.

---

## Pipeline Steps (Dynamic — 12 steps)

English gets **12 steps** — no formulas/derivations, heavier on text analysis and literary comparison.

### Shared Steps (Steps 1–6)

Same as master pipeline: Input → Extract → Verify → Structure → Decompose → Map Source → Audit.

### English Content Steps (Steps 7–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 7 | Understanding Layer | Foundation → bridge → content | Callout, KeyPoint, FactCard |
| 8 | Transform | Convert to interactive formats | **Comparison**, **PerspectiveCard**, **Timeline**, Checklist |
| 9 | Exam Layer | Literary devices, themes, important quotes | **MistakeCard**, TableCard, MetricCard |
| 10 | Learning Layer | Questions, vocabulary, grammar | GuidedStepper, ConceptCard, FactCard |
| 11 | Revision Layer | Full → summary → one-page → last-minute | Expandable, Checklist |
| 12 | Validate | Completeness, accuracy, no hallucinations | — |

### Registration Steps (Steps 13–17)

Same as master pipeline: Output Files → Verify Subject → Register Chapter → Add Sections → Build & Verify.

---

## English-Specific Rules

### Literary Analysis
- Use `Comparison` for character analysis (2 characters side-by-side)
- Use `PerspectiveCard` for themes with multiple interpretations
- Use `Timeline` for plot events in chronological order
- Use `ConceptCard` for literary devices (metaphor, simile, etc.)

### Poetry
- Use `KeyPoint` for key themes and imagery
- Use `Comparison` for contrasting stanzas or interpretations
- Use `FactCard` for poet background and context
- Use `Expandable` for line-by-line analysis (collapsed)

### Grammar & Vocabulary
- Use `TableCard` for grammar rules (e.g., tense comparisons)
- Use `MistakeCard` for common errors
- Use `Checklist` for grammar checklists
- Use `FactCard` for vocabulary definitions

### Speeches & Essays
- Use `ProcessCard` for argument structure
- Use `PerspectiveCard` for multiple viewpoints
- Use `MetricCard` for key statistics cited
- Use `Timeline` for historical context

---

## Component Priority (English)

| Priority | Components | Why |
|----------|-----------|-----|
| **Must-have** | Comparison, PerspectiveCard, FactCard | Every chapter has analysis + vocabulary |
| **High** | Timeline, TableCard, MistakeCard | Plot, grammar rules, errors |
| **Medium** | Checklist, ConceptCard, MetricCard | Grammar checks, devices, statistics |
| **Low** | GuidedStepper, Expandable, ProcessCard | Revision aids, analysis depth |

---

## Example Chapter Reference

*No completed chapters yet. First chapter to be processed will serve as the reference.*

---

## Summary Levels Rule

Every chapter MUST include a `SummaryLevels` component with three **qualitatively different summaries** — not shorter/longer versions of the same text. Each level has its own role:

| Level | Role | Format |
|-------|------|--------|
| **Quick** | **Gist** — what the text is + core idea in 2-4 bullets. For pre-read orientation & last-minute revision. | 2-4 short bullets |
| **Standard** | **Walkthrough** — follows the text in order (speech arguments, story events, play scenes, stanza-by-stanza for poems). For comprehension. | 5-10 bullets, text order |
| **Detailed** | **Analysis** — themes, evidence & quotes, devices, critical comment. For exam prep & appreciation. | 8-14 bullets with quotes/evidence |

### Prose vs Poem Adaptation

| Level | Prose (speech/story/essay/play) | Poem |
|-------|-------------------------------|------|
| **Quick** | Gist of subject + core idea | Gist of theme + mood |
| **Standard** | Walkthrough following the text's structure (arguments in order, events chronologically, scene-by-scene) | Stanza-by-stanza walkthrough — what each stanza says |
| **Detailed** | Analysis: themes, characters/motivations, evidence & quotes, significance, critical comment | Appreciation style: theme, rhyme scheme, poetic devices with quoted lines, imagery, critical comment |

### Hard Rules

- Each level is **rewritten from scratch for its role** — never derived by cutting or shortening another level
- All three levels use **bullet points**
- Quick is for a reader who hasn't read the text yet; Detailed is for a reader revising for exams
- Use `Highlight` for key terms in Quick and Standard; use bold + quoted text in Detailed

---

## Poem Appreciation Format (Kerala Board)

Every poem chapter MUST include a Poem Appreciation section in the Creations tab, following this exact structure:

### 1. Introduction
- State the title of the poem and the name of the poet
- Give a brief background or general tone (e.g., melancholic, reflective, inspiring, appreciative of nature)

### 2. Summary and Theme (Gist)
- Write a short summary explaining what the poem is about
- Clearly state the central idea or core message the poet wishes to convey

### 3. Poetic Devices and Style
- Discuss the rhyme scheme (free verse, abcb, abab, blank verse, etc.) and rhythm
- Highlight key figures of speech (Alliteration, Metaphor, Personification, Simile, Imagery, etc.) and explain their effect
- Mention any striking use of visual or auditory images

### 4. Critical Comment / Personal Opinion
- Conclude with personal perspective or overall impression
- Explain why the poem is powerful, beautiful, or relevant

### Example (Mending Wall — Robert Frost)

> **1. Introduction**
> "Mending Wall" is a celebrated poem by Robert Frost, first published in his 1914 collection *North of Boston*. The poem has a reflective and conversational tone...
>
> **2. Summary and Theme (Gist)**
> The poem describes two New England neighbours who meet each spring to repair the stone wall between their properties... The central idea is that nature does not like separation...
>
> **3. Poetic Devices and Style**
> The poem is written in blank verse — unrhymed iambic pentameter... Frost employs personification, simile, metaphor, apostrophe...
>
> **4. Critical Comment / Personal Opinion**
> What makes "Mending Wall" truly powerful is its ambiguity... The epigram "Good fences make good neighbours" has become one of the most quoted lines in American poetry...

---

## Practice Rules (English)

### Questions (`questions.json`)
- **MCQs**: Comprehension, literary devices, grammar
- **Short answer**: Theme analysis, character questions
- **Grammar exercises**: Fill in blanks, correct errors
- Mix: 50% MCQs, 30% short answer, 20% grammar

### Flashcards (`flashcards.json`)
- **Front**: Vocabulary word / literary device / character name
- **Back**: Definition / example from text / significance
- **Tags**: `vocabulary`, `literary-device`, `character`, `theme`, `grammar`

---

## Content Density Targets

| Content Type | Target per Section |
|-------------|-------------------|
| Comparisons | 1 per section (characters, themes, stanzas) |
| Perspectives | 1 per major theme |
| Timelines | 1 per narrative chapter |
| FactCards | 3–5 per section (vocabulary, terms) |
| KeyPoints | 1 per section (core insight only) |
| Callouts | 1 per key quote or definition |
