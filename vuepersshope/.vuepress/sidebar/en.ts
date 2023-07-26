import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
   
    {
      text: "Blogs",
      icon: "pen-to-square",
      prefix: "blogs/",
      link: "blogs/",
      children: "structure",
    },
    {
      text: "Projects",
      icon: "laptop-code",
      prefix: "projects/",
      children: "structure",
    },
  ],
});
