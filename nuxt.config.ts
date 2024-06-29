// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-gtag",
    "@nuxtjs/seo",
    "@nuxtjs/strapi",
    "@nuxt/ui",
  ],

  ui: {
    icons: ["fa-solid", "fa-brands"],
  },

  colorMode: {
    preference: "ligth",
    fallback: "light",
  },

  googleFonts: {
    families: {
      "Nunito Sans": [300, 900],
    },
  },
});
