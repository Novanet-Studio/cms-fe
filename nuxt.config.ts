import pwa from './pwa';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },

  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/strapi',
    '@kevinmarrec/nuxt-pwa',
    'nuxt-windicss',
  ],

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ['project.d.ts'],
      },
    },
  },

  css: [
    '~/assets/index.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'virtual:windi.css',
    'virtual:windi-devtools',
  ],

  pwa,

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },

  router: {
    options: {
      linkActiveClass: 'text-black font-bold',
    },
  },

  image: {
    dir: 'assets/images',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/novanet-studio/image/upload/',
    },
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
          format: 'webp',
          width: 1280,
          height: 620,
        },
      },
    },
  },
});
