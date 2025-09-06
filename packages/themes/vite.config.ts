import { readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json" with { type: "json" };

const srcPath = resolve(__dirname, "src");
const componentsPath = join(srcPath, "components");

const entry: Record<string, string> = {};

const componentsDir = await readdir(componentsPath);

if (componentsDir.length) {
  for (const componentDir of componentsDir) {
    const [componentName] = componentDir.split(".");
    entry[componentName] = join(componentsPath, componentDir);
  }
}

if (!Object.keys(entry).length) {
  // biome-ignore lint/suspicious/noConsole: Inform user when entry is empty
  console.log("No entry found");
  process.exit(1);
}

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        ...entry,
        "index.css": join(srcPath, "styles.css"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies), /^node:.*/],
    },
    cssCodeSplit: true,
    cssMinify: "esbuild",
    minify: "esbuild",
    sourcemap: "hidden",
    chunkSizeWarningLimit: 14,
  },
  resolve: {
    alias: {
      "@": join(srcPath, "/"),
    },
  },
  plugins: [dts(), tailwindcss()],
});
