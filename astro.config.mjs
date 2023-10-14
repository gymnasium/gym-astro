import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";
import yaml from '@rollup/plugin-yaml';
// import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), mdx(), react(), robotsTxt(), sitemap(),
  // partytown({
  //   // Example: Disable debug mode.
  //   config: { 
  //     debug: true,
  //     forward: ["dataLayer.push"]
  //   },

  // })
  ],
  outDir: "./dist",
  server: { port: 3030 },
  vite: {
    plugins: [yaml()]
  },

});
