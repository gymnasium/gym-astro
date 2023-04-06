import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";
import yaml from '@rollup/plugin-yaml';
// import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroImageTools,
    compress(),
    sitemap(),
    robotsTxt(),
    react(),
    // partytown({
    //   // Example: Disable debug mode.
    //   config: { 
    //     debug: true,
    //     forward: ["dataLayer.push"]
    //   },
  
    // })
  ],
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [yaml()]
  }
});
