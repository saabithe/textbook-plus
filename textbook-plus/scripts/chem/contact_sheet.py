#!/usr/bin/env python3
"""Render one review contact sheet per chapter — every structure on a single image.

    python contact_sheet.py --chapter haloalkanes-and-haloarenes
    python contact_sheet.py --all

Gate G6 (see scripts/chem/README.md): the user scans this one image and approves,
or names the wrong ones. A structure is never merged without a signed-off sheet.

Output: Developer_Deliveries/Chapters/02_Chemistry/Structures/<slug>-structures-review.png
"""

from __future__ import annotations

import argparse
import os
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
    from rdkit import Chem, RDLogger
    from rdkit.Chem import Descriptors, Draw, rdMolDescriptors
except ImportError:  # pragma: no cover
    sys.exit(
        "rdkit/pillow are not installed.\n"
        "  python -m venv scripts/chem/.venv\n"
        "  scripts/chem/.venv/Scripts/python -m pip install -r scripts/chem/requirements.txt"
    )

RDLogger.DisableLog("rdApp.*")

HERE = Path(__file__).resolve().parent
APP = HERE.parents[1]
REPO = HERE.parents[2]
CONTENT_DIR = Path(os.environ.get("CHEM_CONTENT_DIR", APP / "src" / "content" / "chemistry"))
EXTRACT_DIR = Path(
    os.environ.get(
        "CHEM_EXTRACT_DIR",
        REPO / "Developer_Deliveries" / "Chapters" / "02_Chemistry" / "Extractions",
    )
)
STRUCTURES_DIR = Path(
    os.environ.get(
        "CHEM_STRUCTURES_DIR",
        REPO / "Developer_Deliveries" / "Chapters" / "02_Chemistry" / "Structures",
    )
)

COLUMNS = 3
CELL = (360, 270)
HEADER = 78
PAD = 18


def load_font(size: int, bold: bool = False):
    candidates = ["segoeuib.ttf", "arialbd.ttf"] if bold else ["segoeui.ttf", "arial.ttf"]
    for name in candidates:
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            continue
    try:
        return ImageFont.load_default(size=size)
    except TypeError:  # Pillow < 10
        return ImageFont.load_default()


def wrap(text: str, font, width: int) -> list[str]:
    words, lines, current = text.split(), [], ""
    for word in words:
        trial = f"{current} {word}".strip()
        if font.getlength(trial) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines[:2]


def build_sheet(slug: str) -> Path | None:
    manifest_path = CONTENT_DIR / slug / "structures.json"
    if not manifest_path.exists():
        print(f"{slug}: no structures.json — skipped")
        return None

    import json

    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    if not manifest:
        print(f"{slug}: structures.json is empty — skipped")
        return None

    keys, mols, legends = [], [], []
    for key in sorted(manifest):
        entry = manifest[key]
        mol = Chem.MolFromSmiles(entry.get("smiles", ""))
        if mol is None:
            print(f"{slug}/{key}: unreadable SMILES — run npm run chem:build first")
            return None
        keys.append(key)
        mols.append(mol)
        formula = rdMolDescriptors.CalcMolFormula(mol)
        mass = round(Descriptors.MolWt(mol), 2)
        legends.append(f"{entry.get('name') or key}   ·   {formula}   ·   {mass}")

    rows = (len(mols) + COLUMNS - 1) // COLUMNS
    grid = Draw.MolsToGridImage(
        mols,
        molsPerRow=COLUMNS,
        subImgSize=CELL,
        legends=legends,
        useSVG=False,
        drawMolsSameScale=True,
    )

    width = max(grid.width, 1100)
    canvas = Image.new("RGB", (width, HEADER + grid.height + PAD), "white")
    canvas.paste(grid, ((width - grid.width) // 2, HEADER))

    draw = ImageDraw.Draw(canvas)
    draw.text(
        (PAD, 14),
        f"Structure review — {slug}  ({len(mols)} structures)",
        fill="#111111",
        font=load_font(26, bold=True),
    )
    draw.text(
        (PAD, 48),
        "Check each drawing: right molecule, right isomer, right charge. Reply with the row names that are wrong.",
        fill="#555555",
        font=load_font(16),
    )

    STRUCTURES_DIR.mkdir(parents=True, exist_ok=True)
    out = STRUCTURES_DIR / f"{slug}-structures-review.png"
    canvas.save(out)

    # Guard against a silently blank sheet: every cell must contain drawing ink.
    grey = canvas.convert("L")
    ink_warn = []
    for index in range(len(mols)):
        row, column = divmod(index, COLUMNS)
        left = (width - grid.width) // 2 + column * CELL[0]
        top = HEADER + row * CELL[1]
        cell = grey.crop((left, top, min(left + CELL[0], grey.width), min(top + CELL[1], grey.height)))
        dark = sum(cell.histogram()[:200])
        if dark / (cell.width * cell.height) < 0.004:
            ink_warn.append(keys[index])

    print(f"{slug}: {len(mols)} structures -> {out}  ({canvas.width}x{canvas.height}px)")
    if ink_warn:
        print(f"  WARNING: these cells look blank, check them by eye: {', '.join(ink_warn)}")
    return out


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--chapter")
    group.add_argument("--all", action="store_true")
    args = parser.parse_args()

    if args.all:
        slugs = sorted(path.parent.name for path in CONTENT_DIR.glob("*/structures.json"))
        if not slugs:
            print("No structures.json found — nothing to review.")
            return 0
    else:
        slugs = [args.chapter]

    for slug in slugs:
        build_sheet(slug)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
