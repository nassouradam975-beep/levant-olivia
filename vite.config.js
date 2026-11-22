// Build setup for Whop hosting (levant-olivia.whop.site).
// The site stays plain HTML; Vite only copies and optimizes it into dist/client,
// which is where Whop serves static files from.
import { defineConfig } from "vite";
import { whop } from "@whop/cli/vite";
import { resolve } from "node:path";

const pages = [
  "index.html", "en/index.html", "ar/index.html",
  "impressum.html", "datenschutz.html", "agb.html", "widerruf.html", "versand.html",
];

export default defineConfig({
  plugins: [whop()],
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p.replace(/\.html$/, ""), resolve(import.meta.dirname, p)])),
    },
  },
});
