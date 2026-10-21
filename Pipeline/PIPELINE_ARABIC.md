# PIPELINE_ARABIC.md

> Kerala Board Class 12 Arabic — 14 chapters in 5 units. RTL layout required, grammar + vocabulary + literary analysis. No practice.

---

## Subject Info

| Property | Value |
|----------|-------|
| Subject | Arabic |
| Slug | `arabic` |
| Chapters | 14 (5 units) |
| Color | `--subject-arabic` (red) |
| Content type | Arabic literature, grammar, vocabulary, poetry, essays (RTL) |
| Practice | **None** — Arabic has no Practice tab, no `questions.json` / `flashcards.json` |
| **RTL** | **Yes — full right-to-left layout support** |

---

## Chapter List

| Unit | # | Chapter | Slug | Type | Status |
|------|---|---------|------|------|--------|
| 1 | 1 | خَيْرُ الله | `khairullah` | Poem | ✅ Content live |
| 1 | 2 | عَبْقَرِيٌّ مِنْ أَبْنَاءِ كِيرَلا | `abqariyyun-min-abna'i-kerala` | Essay | 🔲 Pending |
| 1 | 3 | كِيرَلا وَنِعَمُ اللهِ | `kerala-wa-ni'amullahi` | Essay | 🔲 Pending |
| 2 | 1 | نَامُوا وَلا تَسْتَيْقِظُوا | `naamu-wa-la-tastaiqidhoo` | Poem | 🔲 Pending |
| 2 | 2 | شُرْطِيُّ المُرُورِ | `shurtiyyul-muroor` | Story | 🔲 Pending |
| 2 | 3 | كِيمْيَاءُ السَّعَادَةِ | `keemiya'us-sa'adah` | Essay | 🔲 Pending |
| 3 | 1 | لُغَةُ الضَّادِ | `lughatud-dhaad` | Essay | 🔲 Pending |
| 3 | 2 | لا تَلُمْنِي | `la-talumnee` | Poem | 🔲 Pending |
| 3 | 3 | لَآلِئُ لُغَوِيَّةٌ | `la'ali'u-lughawiyyah` | Essay | 🔲 Pending |
| 4 | 1 | هَلْ أَنْتِ وَحِيدَةٌ | `hal-anti-waheedah` | Poem | 🔲 Pending |
| 4 | 2 | لا تَقْتُلُوا أَنْفُسَكُمْ | `la-taqtuloo-anfusakum` | Essay | 🔲 Pending |
| 4 | 3 | وَصِيَّةٌ مِنَ الوَدُودِ | `wasiyyatun-minal-vadood` | Essay | 🔲 Pending |
| 5 | 1 | أَيْنَ الْمَفَرُّ ؟ | `ayna-al-mafarr` | TBD | 🔲 Pending |
| 5 | 2 | أَخْبَارُ الْيَوْمِ | `akhbar-al-yawm` | TBD | 🔲 Pending |

**Unit names**

| Unit | Arabic | English |
|------|--------|---------|
| 1 | لغة الله في بلد الله | God's Language in God's Country |
| 2 | إلى السعادة | Towards Happiness |
| 3 | حلاوة العربية | The Sweetness of Arabic |
| 4 | إلى شاطئ الأماني | To the Shore of Hopes |
| 5 | نافذة إلى الفرص | Window to Opportunities |

**Authors & genres** — stored on each `Chapter` in `src/data/chapters.ts` and shown in the
`ArabicChapterCard` that opens every Arabic chapter.

| # | Chapter | Author / Orator | Genre / Lesson Type |
|---|---------|-----------------|---------------------|
| 1 | Khayrullah | N. K. Ahmed Moulavi (ن. ك. أَحْمَدُ الْمَوْلَوِي) | Descriptive Poem (مَنْظُومٌ) |
| 2 | Abqariyyun min Abna' Kerala | Dr. Muhyiddin Al-Alwaye (د. محي الدين الآلوائي) | Biographical Essay (سيرة ذاتية) |
| 3 | Kerala... wa Ni'amullah... | Abu Al-Yazi (أبو اليازي) | Travelogue (أدب الرحلة) |
| 4 | Namu wa la Tastayqidhu | Maroof Al-Rasafi (معروف الرصافي) | Satirical / Political Poem (مَنْظُوم) |
| 5 | Shurtiyy al-Murur | Mahmud Taymur (محمود تيمور) | Short Story (قصة قصيرة) |
| 6 | Kimiya' al-Sa'adah | Curriculum Text | Motivational / Self-Development Article (مقالة) |
| 7 | Lughat al-Dhad | Curriculum Text | Informative / Language Essay (مقالة) |
| 8 | La Talamni | Halim Dammus (حليم دمّوس) | Lyrical Poem (مَنْظُوم) |
| 9 | La'ali' Lughawiyyah | Traditional Heritage Texts | Proverbs, Maxims & Parables (حكم وأمثال) |
| 10 | Hal Anti Waheedatun...? | Umm Salamah (أم سلمة) | Historical / Islamic Narrative (قصة تاريخية) |
| 11 | La Taqtulu Anfusakum | Curriculum Text & Prophetic Hadith | Awareness & Social Guidance Article (مقالة توعوية) |
| 12 | Wasiyyatun min al-Wadud | Divine Revelation (Surah Al-An'am) | Qur'anic Precepts & Preachment (نص قرآني) |
| 13 | Ayna al-Mafarr...? | Tariq ibn Ziyad (طارق بن زياد) | Historical Oration (خطبة تاريخية) |
| 14 | Akhbar al-Yawm | Media / Journalistic Feature (Al-Watan) | News Report & Feature Article (تقرير إخباري) |

Slugs are the live URLs — `src/data/chapters.ts` is authoritative.

---

## Pipeline Steps (Dynamic — 16 steps)

Arabic follows the **master 16-step pipeline** with subject-specific content rules and component suggestions.

### Analysis Phase (Steps 1–7)

| Step | Name | Description | Input | Output |
|------|------|-------------|-------|--------|
| 1 | Input | Receive the chapter material | User-supplied text / notes | Source text |
| 2 | Extract | Transcribe the supplied material → markdown | Source text | `{slug}-extracted.md` |
| 3 | Clean/Reformat | Tool + AI → clean markdown (ALL content preserved) | Extraction | Clean markdown |
| 4 | Verify | Automated comparison against the source | Extraction + Source | Gap-filled extraction |
| 5 | Structure | Reconstruct chapter hierarchy from extraction | Extraction | Topic tree |
| 6 | Decompose + Map | Break into knowledge units + source traceability | Extraction | Unit list + refs |
| 7 | Audit | Automated completeness check against extraction | Units + extraction | Gap report |

**Step 1 note:** no textbook PDF is provided for Arabic — chapter material is
supplied by the user, so `Developer_Deliveries/Chapters/Arabic Textbooks/`
stays empty. Nothing is authored that the user has not supplied.

### Content Creation Phase (Steps 8–12)

| Step | Name | Description | Component Suggestions |
|------|------|-------------|----------------------|
| 8 | Understanding | Auto-generate foundation → bridge → content | Callout, KeyPoint, FactCard |
| 9 | Transform + Exam | Auto-suggest components, user approves | **Comparison**, **ConceptCard**, **Timeline**, Checklist, TableCard, MistakeCard |
| 10 | Learning | Generate vocabulary + grammar content | ConceptCard, FactCard, TableCard |
| 11 | Revision | Generate 3 views (Full → Revision → Last-Minute) | Expandable, Checklist |
| 12 | Validate | Automated accuracy + completeness check | — |

#### RTL Validation (Sub-step under Step 12)

| Step | Name | Description |
|------|------|-------------|
| **12a** | **RTL Validate** | Verify all components render correctly in RTL context |

**Step 9 component suggestions:** Arabic chapters typically need Comparison (character analysis, grammar rule comparisons), ConceptCard (themes with multiple angles), Timeline (historical context), Checklist (grammar checklists), TableCard (vocabulary lists), MistakeCard (common grammar errors). AI suggests per chapter, user approves.

**Step 10 notes:** Include literary device identification, grammar tables, and vocabulary lists. No practice files are produced for Arabic.

### Output & Registration Phase (Steps 13–16)

| Step | Name | Description |
|------|------|-------------|
| 13 | Output | Create `page.tsx` only — no practice files for Arabic |
| 14 | Verify Subject | Confirm `arabic` exists in `src/data/subjects.ts` |
| 15 | Register | Auto-register chapter + sections |
| 16 | Build | `npm run build` — 0 errors, chapter live |

---

## RTL Support Rules (Arabic-Specific)

### Text Direction
- All Arabic content must have `dir="rtl"` on the container
- Use CSS logical properties: `ms-start`, `ms-end`, `ps-`, `pe-` instead of `ml-`, `mr-`, `pl-`, `pr-`
- KaTeX formulas remain LTR even in RTL context

### Component RTL Audit

Every content component must be checked for RTL compatibility:

| Component | RTL Issue | Fix |
|-----------|----------|-----|
| ProcessCard | Step numbers | Keep numbers on right side |
| CycleDiagram | Loop direction | Flip cycle direction |
| Timeline | Event alignment | Events on right, timeline on left |
| Comparison | Side-by-side | Flip columns in RTL |
| TreeDiagram | Indentation | Indent from right |
| TableCard | Text alignment | Right-align text, left-align numbers |
| Expandable | Arrow icon | Flip chevron icon |
| All cards | Padding/margin | Use logical properties |

### CSS Implementation

Add to `globals.css`:
```css
[dir="rtl"] .cycle-direction { direction: rtl; }
[dir="rtl"] .tree-indent { margin-right: 1rem; margin-left: 0; }
[dir="rtl"] .timeline-events { text-align: right; }
```

### Layout Requirements
- Sidebar navigation: mirrored for RTL
- TOC (Table of Contents): right-aligned
- Progress bars: direction-aware
- Icons with directional meaning: flipped in RTL

---

## Arabic-Specific Content Rules

### Vocabulary
- Arabic word in Arabic script + transliteration + English meaning
- Use `FactCard` for vocabulary (front: Arabic, back: meaning + example)
- Use `TableCard` for vocabulary lists (word | meaning | example)

### Grammar
- Use `Comparison` for grammar rule comparisons (e.g., verb forms)
- Use `MistakeCard` for common grammar errors
- Use `Checklist` for grammar rule checklists
- Use `ConceptCard` for grammar categories

### Poetry
- Use `KeyPoint` for themes and imagery
- Use `ConceptCard` for multiple interpretations
- Use `Comparison` for contrasting stanzas
- Use `Timeline` for historical context

### Literary Analysis
- Same approach as English pipeline
- Additional: Compare Arabic literary devices with English equivalents where relevant

---

## Text Emphasis Rules

- **Bold** key terms on first use + final answers; *italics* for emphasis/contrast; `Highlight` component for exam-critical phrases only (max 1–2 per section)
- Never bold/italicize whole paragraphs — full spec: `CHAPTER_PIPELINE.md → Text Emphasis Rules`

---

## Arabic Discourses (`/arabic/discourses`)

The Arabic counterpart of the English Discourses section — the writing frames
an Arabic question paper can ask for. Topics live in
`src/data/arabic-discourses.ts`, page bodies in
`src/content/arabic/discourses/{slug}/page.tsx`, hub at `/arabic/discourses`
(a plain card grid like the English hub), linked from the Arabic subject hub.

| # | Page | Arabic | Status |
|---|------|--------|--------|
| 1 | The Central Message (Modular Template) | الرِّسَالَةُ الْمَرْكَزِيَّةُ | ✅ Live |

---

## Practice — None (Arabic)

Arabic has **no practice**. There is no Practice tab, no `questions.json`, no
`flashcards.json`, and no entries in the `src/lib/content.ts` registry for any
Arabic chapter. `ChapterLayout` already hides the Learning/Practice tab bar for
Arabic. Comprehension, grammar and vocabulary work lives inside the chapter
content itself (vocabulary tables, grammar tables, worked examples).

