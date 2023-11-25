import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  host: 'localhost',
  port: 8888,
  lang: "zh-CN",
  title: "Claroja",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
