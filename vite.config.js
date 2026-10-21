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
  plugins: [
    react(),
    {
      name: "quadchat-build-version",
      generateBundle() {
        this.emitFile({
          type: "asset",
          fileName: "version.json",
          source: JSON.stringify({ commit: getCommitHash() })
        });
      }
    }
  ],
  define: {
    __COMMIT_HASH__: JSON.stringify(getCommitHash())
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          firebase: [
            "firebase/app",
            "firebase/auth",
            "firebase/firestore",
            "firebase/database"
          ],
          media: ["lucide-react"]
        }
      }
    }
  }
});
