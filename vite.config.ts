/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// TODO: When GitHub Pages is enabled for this repo, `base` may need to be
// "/Series-65-Studier/" unless the site is served from a custom domain or
// the `gh-pages` branch is configured as the root.
export default defineConfig({
  base: "/",
  build: {
    // Split the biggest third-party trees into named vendor chunks so the
    // app's own code can update without busting a 1.2 MB monolith. Each
    // chunk names a concern the reviewer can easily reason about.
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-markdown": [
            "react-markdown",
            "remark-gfm",
            "remark-math",
            "rehype-katex",
          ],
          "vendor-katex": ["katex"],
          "vendor-recharts": ["recharts"],
          "vendor-dexie": ["dexie"],
          "vendor-zod": ["zod"],
          "vendor-fsrs": ["ts-fsrs"],
          "vendor-fuse": ["fuse.js"],
        },
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: [
        "icons/apple-touch-180.png",
        "icons/icon-192.png",
        "icons/icon-512.png",
        "icons/maskable-512.png",
      ],
      manifest: {
        name: "Series 65 Studier",
        short_name: "S65",
        description: "Offline study app for NASAA Series 65.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#0a0a0a",
        theme_color: "#0a0a0a",
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icons/maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        navigateFallback: "/index.html",
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest,woff,woff2}"],
        runtimeCaching: [
          {
            // Same-origin only. `sameOrigin` comes from Workbox's route matcher
            // context; we never cache cross-origin requests at runtime.
            urlPattern: ({ sameOrigin }) => sameOrigin,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "s65-runtime",
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    css: false,
  },
});
