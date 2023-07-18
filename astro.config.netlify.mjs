import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";
import yaml from '@rollup/plugin-yaml';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), mdx(), react(), robotsTxt(), sitemap()],
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [yaml()]
  },
});
