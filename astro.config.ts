import solid from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { AstroPWAIntegration } from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    solid(),
    AstroPWAIntegration({
      manifest: {
        name: "Poker Timer",
        short_name: "Poker Timer",
        theme_color: "#016630",
        icons: [
          { src: "icons/1024.jpg", sizes: "1024x1024", type: "image/jpeg" },
        ],
      },
    }),
  ],
  vite: { plugins: [tailwindcss()], build: { cssTarget: "safari15" } },
  site: "https://poker-timer.rman.dev",
});
