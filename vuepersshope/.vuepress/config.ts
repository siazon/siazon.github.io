import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Siazon's Blog",
      description: "A personal blog from siazon",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客",
      description: "陈夏松的个人网站",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
