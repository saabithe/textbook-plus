import { execSync } from "child_process";

let cached: string | null = null;

export function getBuildCommit(): string {
  if (cached !== null) return cached;
  const fromEnv = process.env.VERCEL_GIT_COMMIT_SHA;
  if (fromEnv) {
    cached = fromEnv.slice(0, 7);
  } else {
    try {
      cached = execSync("git rev-parse --short HEAD").toString().trim();
    } catch {
      cached = "";
    }
  }
  return cached;
}