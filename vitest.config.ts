import { defineConfig } from "vitest/config";
import path from "node:path";

// Unit tests for pure maths only (lib/cold-email-roi). No DOM, so the node environment is enough.
export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  test: { environment: "node", include: ["lib/**/*.test.ts"] },
});
