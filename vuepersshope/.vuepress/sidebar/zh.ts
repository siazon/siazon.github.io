import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "博客",
      icon: "pen-to-square",
      prefix: "blogs/",
      link: "blogs/",
      children: "structure",
    },
    {
      text: "项目",
      icon: "laptop-code",
      prefix: "projects/",
      children: "structure",
    },
  ],
});
