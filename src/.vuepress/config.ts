import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "灯塔",
  description: "脚下的路更明了",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
