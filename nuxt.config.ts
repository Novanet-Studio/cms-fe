export default defineNuxtConfig({
  telemetry: false,
  app: {
    head: {
      title: "Ccs MultiSport - Sitio web",
      meta: [
        { name: "author", content: "Novanet Studio <info@novanet.studio>" },
        {
          name: "description",
          content:
            "Centro Deportivo que integra los sectores del deporte y la salud. Nuestro objetivo principal es mejorar la calidad de vida de nuestros usuarios mediante la enseñanza y práctica de diversas disciplinas deportivas.",
        },
      ],
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
    "nuxt-windicss",
    "nuxt-gtag",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Ccs MultiSport - Sitio web",
      short_name: "Ccs MultiSport",
      description:
        "Integramos los sectores del deporte y la salud con el objetivo principal de mejorar la calidad de vida de nuestros usuarios mediante la enseñanza y práctica de diversas disciplinas deportivas.",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      lang: "es",
      display: "standalone",
      orientation: "portrait",
      start_url: "/",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      navigateFallback: null,
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

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

  router: {
    options: {
      linkActiveClass: "text-black font-bold",
    },
  },

  image: {
    dir: "assets/images",
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

  compatibilityDate: "2026-01-01",
});
