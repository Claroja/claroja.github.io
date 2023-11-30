import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  base: "/",
  host: 'localhost',
  port: 8888,
  lang: "zh-CN",
  title: "Claroja",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
});
