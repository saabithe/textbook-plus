#!/usr/bin/env node
/**
 * Run an authoring-time Python helper with the local venv, if one exists.
 * Keeps the npm scripts cross-platform and keeps Python off Vercel.
 */
const { spawnSync } = require("node:child_process");
const path = require("node:path");
const fs = require("node:fs");

const [, , script, ...args] = process.argv;
if (!script) {
  console.error("usage: node scripts/chem/py.cjs <script.py> [...args]");
  process.exit(1);
}

const venvPython =
  process.platform === "win32"
    ? path.join(__dirname, ".venv", "Scripts", "python.exe")
    : path.join(__dirname, ".venv", "bin", "python");

const python = fs.existsSync(venvPython) ? venvPython : process.platform === "win32" ? "python" : "python3";

if (!fs.existsSync(venvPython)) {
  console.error(
    [
      "No local venv found at scripts/chem/.venv — falling back to global python.",
      "First-time setup:",
      "  python -m venv scripts/chem/.venv",
      "  scripts/chem/.venv/Scripts/python -m pip install -r scripts/chem/requirements.txt",
      "",
    ].join("\n"),
  );
}

const result = spawnSync(python, [path.join(__dirname, script), ...args], { stdio: "inherit" });
process.exit(result.status ?? 1);
