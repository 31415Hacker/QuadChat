import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { execSync } from "child_process";

function getCommitHash() {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    return "dev";
  }
}

export default defineConfig({
  base: "/",
  plugins: [react()],
  define: {
    __COMMIT_HASH__: JSON.stringify(getCommitHash())
  }
});
