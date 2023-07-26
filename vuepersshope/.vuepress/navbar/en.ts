import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/blogs/",
  {
    text: "Projects",
    icon: "laptop-code",
    prefix: "/projects/",
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
    text: "cnblogs",
    icon: "book",
    link: "https://cnblogs.com/siazon/",
  },
]);
