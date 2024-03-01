import pwa from "./pwa";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  telemetry: false,
  app: {
    head: {
      script: [
        {
          type: "text/javascript",
          src: "metrics.js",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  modules: [
    "@nuxt/image",
    "@nuxtjs/strapi",
    "@kevinmarrec/nuxt-pwa",
    "nuxt-windicss",
    "nuxt-gtag",
  ],

  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL || "http://localhost:1337",
      },
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        ["swiper-container", "swiper-slide"].includes(tag),
    },
  },

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

  pwa,

  router: {
    options: {
      linkActiveClass: "text-black font-bold",
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
          format: "webp",
          width: 1280,
          height: 620,
        },
      },
    },
  },

  gtag: {
    id: "G-M2VFL7ZD5M",
  },
});
