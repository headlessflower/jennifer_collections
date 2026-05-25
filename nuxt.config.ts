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
    "@nuxtjs/supabase",
    "nuxt-gtag",
      "~/modules/nuxt-image-gallery-lightbox/src/module"
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap' }
      ]
    }
  },
  site: {
    url: 'https://jenniferpayan.info',
    name: 'Jennifer Payan: Registration and Collections Care Professional',
  },
  supabase: {
    redirect: false,

  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    }
  },
  imageGallery: {
    css: true,
    defaults: {
      gap: 10,
      radius: 16,
      columns: { base: 2, sm: 3, md: 4, lg: 5 },
      nuxtImg: { format: "webp", quality: 82, sizes: "sm:50vw md:33vw lg:20vw" },
    },
  },


});