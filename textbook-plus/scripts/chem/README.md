# Chemistry structure pipeline

Authoring-time tooling that turns an authored **SMILES** string into a committed **SVG** drawing.
The app ships no chemistry engine — only the SVG. Use-case routing lives in `scripts/README.md`.

## Why

Hand-drawn diagrams drift and AI-invented bond paths are unverifiable. Here the SMILES is the
source of truth, a real cheminformatics toolkit (RDKit) does the chemistry and the drawing, and
seven gates decide whether a structure is allowed to ship.

## One-time setup (local machine only)

```powershell
cd textbook-plus
python -m venv scripts/chem/.venv
scripts/chem/.venv/Scripts/python -m pip install -r scripts/chem/requirements.txt
```

Vercel never runs this: generated `.ts` files are committed, and only the Node linter runs in `npm run build`.

## Per-chapter loop

```powershell
# 1. author src/content/chemistry/<slug>/structures.json  (see schema below)
npm run chem:build   -- --chapter <slug>   # gates G1–G5, writes structures.generated.ts
npm run chem:sheet   -- --chapter <slug>   # gate G6, writes a review PNG
npm run chem:check                          # gate G7 (also runs inside npm run build)
```

The review PNG lands in `Developer_Deliveries/Chapters/02_Chemistry/Structures/<slug>-structures-review.png`.
Open it, scan every structure, name anything wrong. Nothing merges without that sign-off.

Regenerate every chapter at once: `npm run chem:build -- --all`.

## `structures.json` schema

```json
{
  "aspirin": {
    "smiles": "CC(=O)Oc1ccccc1C(=O)O",
    "name": "Aspirin",
    "ncertName": ["acetylsalicylic acid"],
    "caption": "The acetyl group blocks the phenolic –OH, so aspirin is not acidic like phenol.",
    "formula": "C9H8O4",
    "mw": 180.16,
    "source": "§8.6, Example 8.11, p.241",
    "size": [420, 300],
    "stereo": false,
    "charge": 0
  }
}
```

| Field | Required | Notes |
| --- | --- | --- |
| `smiles` | yes | Isomeric SMILES. The only chemical truth. |
| `formula` | yes | Elemental composition (Hill order). Compared element-by-element, so order does not matter. |
| `ncertName` | yes | String or array. Must appear verbatim in `<slug>-extracted.md` (gate G1 — the anti-hallucination check). |
| `source` | yes | Section/page citation in the extraction. |
| `name` | no | Display name, defaults to the key. |
| `caption` | no | One line of insight. Never restate the structure. |
| `mw` | no | Compared with the computed mass when present. |
| `charge` | no | Compared with the computed formal charge when present. |
| `stereo` | no | Set `true` when the structure must show wedges/dashes. Then the SMILES must contain `@`, `/` or `\` **and** the drawing must contain a wedge. |
| `size` | no | `[width, height]` in px, default `[420, 300]`. |

`caption` and `source` are copied into `structures.generated.ts` and consumed by
`<MoleculeStructure {...STRUCTURES.key} />` — **never re-type a caption on the page**, it would
then live in two places and drift. `name` is not emitted: it is used only by the contact sheet.

The SVG carries its provenance in `data-smiles` / `data-inchikey` / `data-formula` attributes,
escaped for XML. That matters for RDKit's dative-bond extension: an unescaped `<-` would produce
a malformed document (caught by the G5b integrity gate).

## Gates

| Gate | Check |
| --- | --- |
| G1 | `ncertName` appears in the chapter extraction; `source` is filled |
| G2 | SMILES parses and sanitizes (valence, aromaticity, known elements) |
| G3 | Computed elemental composition equals `formula`; charge matches when given |
| G4 | Computed molar mass matches `mw` when given |
| G5 | Stereochemistry survives a MolBlock round-trip; claimed stereo is present in both SMILES and drawing |
| G5b | The emitted SVG still parses as XML and carries exactly the molecule's atoms and bond set — a post-process that damaged the drawing cannot ship |
| G6 | Human contact-sheet review |
| G7 | Generated files are fresh, referenced exactly where used, no black ink, no scripts/links, size budget |

A structure that fails any gate is **deleted, not patched**. A missing figure is a known gap;
a wrong figure is a defect.

## What this never automates

Curly-arrow mechanisms, crystal lattices, chair/Newman conformations, orbital and
crystal-field diagrams, and multi-step industrial flow schemes. Those stay hand-authored SVG.
