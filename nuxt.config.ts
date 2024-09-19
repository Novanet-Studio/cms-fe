// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  app: {
    pageTransition: {
      enterFromClass: "opacity-0",
      enterActiveClass: "transition duration-300",
      mode: "out-in"
    }
  },

  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-gtag",
    "@nuxtjs/seo",
    "@nuxtjs/strapi",
    "@nuxt/ui",
  ],

  ui: {
    // icons: ["fa-solid", "fa-brands"],
  },

  colorMode: {
    preference: "light",
    fallback: "light",
  },

  googleFonts: {
    families: {
      "Nunito Sans": [300, 900],
    },
  },

  site: {
    url: 'https://www.ccsmultisport.com',
  },

  ogImage: {
    enabled: false
  },

  compatibilityDate: "2024-09-09"
});