#!/usr/bin/env python3
"""Generate committed SVG structure modules from an authored structures.json.

    python build_structures.py --chapter haloalkanes-and-haloarenes
    python build_structures.py --all

Source of truth:   src/content/chemistry/<slug>/structures.json
Generated output:  src/content/chemistry/<slug>/structures.generated.ts   (committed)
Extraction ref:    Developer_Deliveries/Chapters/Chemistry/<slug>-extracted.md

Gates enforced here (see .opencode/plans/plan_0001.md §5):
  G1  the compound's NCERT name must appear in the extraction file
  G2  SMILES must parse and sanitize (valence, aromaticity, elements)
  G3  computed elemental composition must equal the authored formula
  G4  computed molar mass must match the authored mass
  G5  stereochemistry must survive a MolBlock round-trip (and be present when claimed)

Anything that fails is a hard error. A structure is deleted, never patched.
"""

from __future__ import annotations

import argparse
import difflib
import hashlib
import json
import os
import re
import sys
from pathlib import Path

try:
    from rdkit import Chem, RDLogger
    from rdkit.Chem import Descriptors, rdMolDescriptors
    from rdkit.Chem.Draw import rdMolDraw2D
except ImportError:  # pragma: no cover
    sys.exit(
        "rdkit is not installed.\n"
        "  python -m venv scripts/chem/.venv\n"
        "  scripts/chem/.venv/Scripts/python -m pip install -r scripts/chem/requirements.txt"
    )

RDLogger.DisableLog("rdApp.*")

HERE = Path(__file__).resolve().parent
APP = HERE.parents[1]                     # textbook-plus/
REPO = HERE.parents[2]                    # repo root
CONTENT_DIR = Path(os.environ.get("CHEM_CONTENT_DIR", APP / "src" / "content" / "chemistry"))
EXTRACT_DIR = Path(
    os.environ.get("CHEM_EXTRACT_DIR", REPO / "Developer_Deliveries" / "Chapters" / "Chemistry")
)

SIZE_WARN = 25_000
SIZE_FAIL = 60_000


# --------------------------------------------------------------------------- utils
def normalise(text: str) -> str:
    """Lowercase, join hyphenated line breaks, strip everything non-alphanumeric.

    Extractions break long words across lines ("Tetrachlo-\\nromethane"), so a hyphen
    at a line end followed by a lowercase letter is re-joined. A hyphen before a digit
    ("butan-\\n2-ol") is left alone because it is part of the name, not a line break.
    """
    text = text.replace("\u2013", "-").replace("\u2014", "-").replace("\u2019", "'")
    text = re.sub(r"-\s*\n\s*(?=[a-z])", "", text)
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def parse_composition(formula: str) -> dict[str, int]:
    """'C9H8O4' -> {'C': 9, 'H': 8, 'O': 4}. Ignores charge markers (see `charge`)."""
    cleaned = re.sub(r"[+-]\d*", "", formula).replace(" ", "")
    counts: dict[str, int] = {}
    for element, number in re.findall(r"([A-Z][a-z]?)(\d*)", cleaned):
        if not element:
            continue
        counts[element] = counts.get(element, 0) + (int(number) if number else 1)
    return counts


def find_in_extraction(name: str, extraction: str) -> bool:
    return normalise(name) in normalise(extraction)


def closest_line(name: str, extraction: str) -> str:
    target = normalise(name)
    lines = [line.strip() for line in extraction.splitlines() if line.strip()]
    best, best_ratio = "", 0.0
    for line in lines:
        if len(line) > 220:
            continue
        ratio = difflib.SequenceMatcher(None, target, normalise(line)).ratio()
        if ratio > best_ratio:
            best, best_ratio = line, ratio
    return best


def has_stereo_markers(smiles: str) -> bool:
    return "@" in smiles or "/" in smiles or "\\" in smiles


def svg_has_wedge(svg: str) -> bool:
    """RDKit draws stereo bonds as filled polygons."""
    return any("fill:" in style for style in re.findall(r"style='([^']+)'", svg))


def verify_svg_structure(svg: str, mol: Chem.Mol) -> None:
    """Prove the emitted markup still describes the molecule it was drawn from.

    Drawing is only trustworthy if the SVG that ships is the SVG RDKit produced.
    Post-processing (colour substitution, attribute stamping) must not damage it,
    and a truncated or hand-edited file must be caught here rather than by a reader.
    """
    import xml.etree.ElementTree as ET

    try:
        ET.fromstring(svg)
    except ET.ParseError as exc:
        raise ValueError(f"svg is not well-formed XML — {exc}") from exc

    match = re.search(r"data-atoms='(\d+)'", svg)
    if not match:
        raise ValueError("svg carries no data-atoms stamp")
    if int(match.group(1)) != mol.GetNumAtoms():
        raise ValueError(
            f"svg declares {match.group(1)} atoms but the molecule has {mol.GetNumAtoms()}"
        )

    drawn = {int(m.group(1)) for m in re.finditer(r"class='bond-(\d+) atom-\d+ atom-\d+'", svg)}
    expected = set(range(mol.GetNumBonds()))
    if drawn != expected:
        missing = sorted(expected - drawn)[:6]
        extra = sorted(drawn - expected)[:6]
        raise ValueError(f"svg bond set does not match the molecule (missing {missing}, extra {extra})")

    for path in re.finditer(r"<path class='bond-[^']*'([^>]*)>", svg):
        if " d='" not in path.group(1) and ' d="' not in path.group(1):
            raise ValueError("a bond path has no coordinates")


def xml_attr(value: str) -> str:
    """Escape a value for a single-quoted XML attribute.

    The provenance stamp carries the authored SMILES verbatim. RDKit's dative
    bond extension uses `<-`, and `data-smiles='[NH3]->[Cu+2]<-[NH3]'` is not
    well-formed XML — the file would ship but every parser (including the G5b
    integrity gate) would reject it.
    """
    return (
        value.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("'", "&apos;")
    )


def postprocess(svg: str, mol: Chem.Mol, smiles: str, formula: str) -> str:
    """Strip the XML prolog, make black theme-relative, stamp provenance.

    RDKit writes ink two different ways — inline (`style='stroke:#000000'`) and
    as an attribute (`fill='#000000'` on stereo wedge polygons) — so replace the
    colour itself rather than the surrounding syntax.
    """
    svg = re.sub(r"^<\?xml[^>]*\?>\s*", "", svg)
    svg = re.sub(r"#[0]{6}\b", "currentColor", svg, flags=re.IGNORECASE)
    if re.search(r"#[0]{6}\b", svg, flags=re.IGNORECASE):
        raise ValueError("black ink survived post-processing")

    inchikey = inchi_key(mol)
    attrs = (
        f"data-smiles='{xml_attr(smiles)}' "
        f"data-inchikey='{xml_attr(inchikey)}' "
        f"data-formula='{xml_attr(formula)}' "
        f"data-atoms='{mol.GetNumAtoms()}'"
    )
    svg = svg.replace("<svg", f"<svg {attrs}", 1)

    for bad in ("<script", "javascript:", "onload=", 'href="http'):
        if bad in svg:
            raise ValueError(f"unsafe markup in svg: {bad}")

    verify_svg_structure(svg, mol)
    return svg


def inchi_key(mol: Chem.Mol) -> str:
    """InChI cannot represent dative bonds, so coordination compounds return ''."""
    try:
        return Chem.MolToInchiKey(mol)
    except Exception:  # noqa: BLE001 - a missing key is not a chemistry failure
        return ""


def render(mol: Chem.Mol, width: int, height: int) -> str:
    prepared = rdMolDraw2D.PrepareMolForDrawing(mol)
    drawer = rdMolDraw2D.MolDraw2DSVG(width, height)
    opts = drawer.drawOptions()
    opts.clearBackground = False
    opts.bondLineWidth = 2
    opts.padding = 0.08
    opts.addStereoAnnotation = True
    drawer.DrawMolecule(prepared)
    drawer.AddMoleculeMetadata(prepared)
    drawer.FinishDrawing()
    return drawer.GetDrawingText()


# --------------------------------------------------------------------------- chapter
def load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as handle:
        return json.load(handle)


def build_chapter(slug: str) -> tuple[bool, list[str]]:
    chapter_dir = CONTENT_DIR / slug
    manifest_path = chapter_dir / "structures.json"
    out_path = chapter_dir / "structures.generated.ts"
    extract_path = EXTRACT_DIR / f"{slug}-extracted.md"

    if not manifest_path.exists():
        return True, [f"{slug}: no structures.json — skipped"]

    manifest = load_json(manifest_path)
    if not isinstance(manifest, dict) or not manifest:
        return False, [f"{slug}: structures.json is empty or not an object"]

    if not extract_path.exists():
        return False, [f"{slug}: extraction not found at {extract_path} (cannot run G1)"]
    extraction = extract_path.read_text(encoding="utf-8", errors="replace")

    problems: list[str] = []
    notes: list[str] = []
    generated: dict[str, dict] = {}

    for key in sorted(manifest):
        entry = manifest[key]
        label = f"{slug}/{key}"
        smiles = (entry.get("smiles") or "").strip()
        if not smiles:
            problems.append(f"[G2] {label}: no smiles")
            continue

        # ---- G2 parse + sanitize
        mol = Chem.MolFromSmiles(smiles)
        if mol is None:
            problems.append(f"[G2] {label}: SMILES does not parse — {smiles}")
            continue
        try:
            Chem.SanitizeMol(mol)
        except Exception as exc:  # noqa: BLE001
            problems.append(f"[G2] {label}: sanitize failed — {exc}")
            continue

        # ---- G3 elemental composition
        computed_formula = rdMolDescriptors.CalcMolFormula(mol)
        wanted_formula = (entry.get("formula") or "").strip()
        if not wanted_formula:
            problems.append(f"[G3] {label}: no formula supplied (required)")
            continue
        if parse_composition(wanted_formula) != parse_composition(computed_formula):
            problems.append(
                f"[G3] {label}: formula mismatch — authored {wanted_formula}, computed {computed_formula}"
            )
            continue

        charge = entry.get("charge")
        if charge is not None and int(charge) != Chem.GetFormalCharge(mol):
            problems.append(
                f"[G3] {label}: charge mismatch — authored {charge:+d}, computed {Chem.GetFormalCharge(mol):+d}"
            )
            continue

        # ---- G4 molar mass
        computed_mass = round(Descriptors.MolWt(mol), 2)
        wanted_mass = entry.get("mw")
        if wanted_mass is not None and abs(float(wanted_mass) - computed_mass) > 0.02:
            problems.append(
                f"[G4] {label}: mass mismatch — authored {wanted_mass}, computed {computed_mass}"
            )
            continue

        # ---- G5 stereochemistry
        canonical = Chem.MolToSmiles(mol)
        recycled = Chem.MolFromMolBlock(Chem.MolToMolBlock(mol))
        if recycled is None or Chem.MolToSmiles(recycled) != canonical:
            problems.append(f"[G5] {label}: stereochemistry lost in MolBlock round-trip")
            continue

        claims_stereo = bool(entry.get("stereo"))
        if claims_stereo and not has_stereo_markers(smiles):
            problems.append(f"[G5] {label}: marked stereo but SMILES has no @ / \\ marker")
            continue

        # ---- G1 existence in the NCERT extraction
        names = entry.get("ncertName") or []
        if isinstance(names, str):
            names = [names]
        names = [name for name in names if name]
        if not names:
            problems.append(f"[G1] {label}: no ncertName supplied (required)")
            continue
        if not any(find_in_extraction(name, extraction) for name in names):
            hint = closest_line(names[0], extraction)
            problems.append(
                f"[G1] {label}: '{names[0]}' not found in extraction. Closest line: {hint[:120]}"
            )
            continue
        if not (entry.get("source") or "").strip():
            problems.append(f"[G1] {label}: no source citation (e.g. '§6.3, p.171')")
            continue

        # ---- render
        width, height = (entry.get("size") or [420, 300])[:2]
        try:
            svg = postprocess(render(mol, width, height), mol, smiles, computed_formula)
        except Exception as exc:  # noqa: BLE001
            problems.append(f"[G6] {label}: render/post-process failed — {exc}")
            continue

        if len(svg.encode("utf-8")) > SIZE_FAIL:
            problems.append(
                f"[G7] {label}: svg is {len(svg.encode('utf-8'))} bytes, over the {SIZE_FAIL} limit "
                f"(reduce size or split the figure)"
            )
            continue
        if len(svg.encode("utf-8")) > SIZE_WARN:
            notes.append(f"{label}: svg {len(svg.encode('utf-8'))} bytes (over warn threshold)")

        if claims_stereo and not svg_has_wedge(svg):
            problems.append(f"[G5] {label}: marked stereo but the drawing has no wedge/dash bond")
            continue

        generated[key] = {
            "svg": svg,
            "smiles": smiles,
            "formula": computed_formula,
            "mw": computed_mass,
            "inchiKey": inchi_key(mol),
            "atoms": mol.GetNumAtoms(),
        }
        # The page spreads these props onto <MoleculeStructure>, so the caption
        # must travel with the drawing — otherwise every figure renders as a
        # bare formula and the authored wording is dead weight in the manifest.
        if (entry.get("caption") or "").strip():
            generated[key]["caption"] = entry["caption"].strip()
        generated[key]["source"] = entry["source"].strip()

    if problems:
        return False, problems

    digest = hashlib.sha256(manifest_path.read_bytes()).hexdigest()
    entries = []
    for key, data in generated.items():
        fields = ",\n".join(
            f"      {name}: {json.dumps(value)}" for name, value in data.items()
        )
        entries.append(f'  {json.dumps(key)}: {{\n{fields},\n  }},')

    version = __import__("rdkit").__version__
    header = (
        "// AUTO-GENERATED FILE — DO NOT EDIT.\n"
        f"// Source: src/content/chemistry/{slug}/structures.json\n"
        f"// Regenerate: npm run chem:build -- --chapter {slug}\n"
        f"// Toolchain: rdkit {version}\n"
        "/* eslint-disable */\n\n"
        f'export const STRUCTURES_INPUT_HASH = {json.dumps(digest)};\n\n'
        "export const STRUCTURES = {\n"
    )
    body = "\n".join(entries)
    footer = "\n} as const;\n\nexport type StructureKey = keyof typeof STRUCTURES;\n"
    out_path.write_text(header + body + footer, encoding="utf-8", newline="\n")

    notes.append(f"{slug}: {len(generated)} structures written to {out_path.name}")
    return True, notes


# --------------------------------------------------------------------------- main
def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--chapter", help="chapter slug, e.g. haloalkanes-and-haloarenes")
    group.add_argument("--all", action="store_true", help="every chapter with a structures.json")
    args = parser.parse_args()

    if args.all:
        slugs = sorted(
            path.parent.name for path in CONTENT_DIR.glob("*/structures.json")
        )
        if not slugs:
            print("No structures.json found — nothing to do.")
            return 0
    else:
        slugs = [args.chapter]

    failed = False
    for slug in slugs:
        ok, messages = build_chapter(slug)
        for message in messages:
            print(("  " if ok else "") + message)
        failed = failed or not ok

    if failed:
        print("\nFAILED — fix the structures above, then re-run. Do not hand-edit generated files.")
        return 1

    print("\nOK — all gates passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
