import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  server: {
    proxy: {
      "/api": "https://itc-nurafshon.uz",
    },
  },
  resolve: { alias: [{ find: "@", replacement: "/src" }] },
  base: "./",
  build: {
    outDir: "dist",
    target: "modules",
    assetsDir: "assets",
    sourcemap: true,
  },
});
