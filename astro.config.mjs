import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  site: "https://www.seomissioncontrol.com",
  output: "server",
  adapter: vercel(),

  trailingSlash: "always",
  devToolbar: {
    enabled: false,
  },

  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
  ],
});
