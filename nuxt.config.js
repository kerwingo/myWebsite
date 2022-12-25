import { resolve } from "path";
import components from "./config/components";

export default {
  /*alias: {
        'style': resolve(__dirname, './assets/css')
    },*/
  target: "static",
  build: {
    extractCSS: true,
  },
  buildModules: ["@nuxtjs/dotenv"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/vuetify"],
  env: {
    TEST: process.env.TEST,
  },
  css: ["~/assets/css/main.css"],
  plugins: ["~/assets/js/main.js"],
  head: {
    title: "Kerwin – Full-stack web developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "个人网站，记录平凡生活，输出优质技术文章。",
      },
      {
        name: "keywords",
        content: "前端,前端技术,nuxtjs,vuejs,reactjs,javascript,nestjs,nodejs",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "nuxt_64x.png" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
      },
    ],
  },
  noscript: [{ innerHTML: "This website requires JavaScript." }],
  tailwindcss: {
    // Options
  },
};
