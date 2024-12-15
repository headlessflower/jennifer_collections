// https://nuxt.com/docs/api/configuration/nuxt-config
//
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/seo",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  site: {
    url: 'https://jenniferpayan.info',
    name: 'Jennifer Payan: Registration and Collections Care Professional',
    // ...etc
  },
});
