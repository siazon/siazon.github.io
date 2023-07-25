import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  markdown: {
    config: _ => {
      _.use(require("markdown-it-html5-embed"), {
        html5embed: {
          useImageSyntax: true,
          useLinkSyntax: false,
        },
      });
    },
    extendMarkdown: (md) => {
      md.use(require("markdown-it-task-lists"));
    },
  },
  theme: defaultTheme({
    plugins: [
      backToTopPlugin(),
      docsearchPlugin({
        // 配置项
      }),
    ],
    navbar: [
      // NavbarItem
      {
        text: "Blog",
        link: "/blogs/",
      },
      // NavbarGroup
      {
        text: "Project",
        children: [
          "/projects/ireholidays.md",
          "/projects/miiot.md",
          "/projects/luhuiwcs.md",
          "/projects/supermanfix.md",
          "/projects/ticketgrabbing.md",
          "/projects/winandroidinstaller.md",
        ],
      },
      {
        text: "Cnblogs",
        link: "https://www.cnblogs.com/siazon/ ",
      },
      {
        text: "Github",
        link: "https://github.com/siazon",
      },
    ],
    sidebar: [
      // SidebarItem
      {
        text: "Tech Blogs",
        link: "/blogs/",
        children: [
          // SidebarItem
          // {
          //   text: 'CabinetSDK',
          //   link: '/projects/CabinetSDK.md'
          // },
          "/blogs/EngineeringFundamentalsChecklist.md",
          "/blogs/GitContribute.md",
          "/blogs/PhDPersonalStatement.md",
          "/blogs/Aria2Settings.md",
          {
            text: "More...",
            link: "/blogs/",
          },
        ],
      },
      {
        text: "Projects",
        link: "/projects/ireholidays.md",
        children: [
          // SidebarItem
          // {
          //   text: 'CabinetSDK',
          //   link: '/projects/CabinetSDK.md'
          // },
          "/projects/ireholidays.md",
          "/projects/miiot.md",
          "/projects/luhuiwcs.md",
          "/projects/supermanfix.md",
          "/projects/ticketgrabbing.md",
          "/projects/winandroidinstaller.md",
        ],
      },
    ],
  }),
  lang: "zh-CN",
  title: "Xiasong Chen",
  description: "Never settle for mediocrity.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: '/blog/' 
});
