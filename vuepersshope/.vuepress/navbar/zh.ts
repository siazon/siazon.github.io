import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/blogs/",
  {
    text: "项目",
    icon: "laptop-code",
    prefix: "/zh/projects/",
    children: [
      "ireholidays.md",
      "miiot.md",
      "luhuiwcs.md",
      "supermanfix.md",
      "ticketgrabbing.md",
      "winandroidinstaller.md",
    ],
  },
  {
    text: "博客园",
    icon: "book",
    link: "https://cnblogs.com/siazon/",
  },
]);
