
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/strapi",
    "@kevinmarrec/nuxt-pwa",
    "nuxt-windicss",
  ],

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ["project.d.ts"],
      },
    },
  },

  css: [
    "~/assets/index.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "virtual:windi.css",
    "virtual:windi-devtools",
  ],

  pwa: {
    meta: {
      title: "Caracas Multi Sport - Sitio web",
      name: "CCS Multi Sport web",
      author: "Novanet Studio <info@novanet.studio>",
      description:
        "Centro Deportivo que integra los sectores del deporte y la salud. Nuestro objetivo principal es mejorar la calidad de vida de nuestros usuarios mediante la enseñanza y práctica de diversas disciplinas deportivas.",
      theme_color: "#fff",
      lang: "es",
    },
    manifest: {
      name: "Caracas Multi Sport - Sitio web",
      short_name: "CCS Multi Sport web app ",
      description:
        "Integramos los sectores del deporte y la salud con el  objetivo principal de mejorar la calidad de vida de nuestros usuarios mediante la enseñanza y práctica de diversas disciplinas deportivas.",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#fff",
    },
    icon: { source: "assets/images/favicon.png" },
    workbox: {
      enabled: false,
    },
  },

  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
  },

  router: {
    options: {
      linkActiveClass: 'text-black font-bold',
    },
  },

  image: {
    dir: "assets/images",
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1920,
    },

    presets: {
      slide: {
        modifiers: {
          format: "jpg",
          width: 1280,
          height: 620,
        },
      },
    },
  },
});
