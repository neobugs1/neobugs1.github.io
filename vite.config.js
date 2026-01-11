import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import { viteStaticCopy } from "vite-plugin-static-copy";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")?.[1];
const isUserOrOrgPages = Boolean(repoName && repoName.endsWith(".github.io"));

// https://vitejs.dev/config/
export default defineConfig({
  base: isUserOrOrgPages ? "/" : repoName ? `/${repoName}/` : "/",
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    viteStaticCopy({
      targets: [
        {
          src: "particlesjs-config.json",
          dest: ".",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"],
  },
});
