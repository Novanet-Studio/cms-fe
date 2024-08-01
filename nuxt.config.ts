// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
