// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    envPrefix: ["PUBLIC_", "PRIVATE_"],
  },
  output: 'server',
  adapter: netlify(),
});