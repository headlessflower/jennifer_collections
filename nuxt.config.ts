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
  siteConfig: {
    title: 'Jennifer Payan: Collections Care and Registration Professional Services',
    description: 'document, transport, and care for a variety of collections including archaeological and cultural resource material, natural history specimens, and fine art',
    url: 'https://jenniferpayan.info'
  }
});
