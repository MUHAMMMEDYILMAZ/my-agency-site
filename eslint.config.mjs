import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals.js";
import nextTs from "eslint-config-next/typescript.js";

export default defineConfig({
  overrides: [
    ...(nextVitals.overrides || []),
    ...(nextTs.overrides || []),
  ],
  ignorePatterns: [
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
});
