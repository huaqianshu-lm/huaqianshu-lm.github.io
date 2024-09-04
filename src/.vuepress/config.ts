import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { cut } from "nodejs-jieba";
import theme from "./theme.js";
import { blogPlugin } from '@vuepress/plugin-blog'

export default defineUserConfig({
  base: "/",
  head: [
    ["link", { rel: "icon", href: "favicon.ico" }],
    // ["script",{type:"",src:"/js/index.js"}]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "花千树",
      description: "vuepress-theme-hope 的博客演示",
    },
    "/en-US/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
   
  },

  theme,


  plugins: [
    // searchProPlugin({
    //   indexContent: true,
    //   indexLocaleOptions: {
    //     "/zh/": {
    //       // 使用 nodejs-jieba 进行分词
    //       tokenize: (text, fieldName) =>
    //         fieldName === "id" ? [text] : cut(text, true),
    //     },
    //   },
    // }),


  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
