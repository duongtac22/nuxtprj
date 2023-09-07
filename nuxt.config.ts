// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Sushi Nuxt',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },
  css: ['~/assets/style/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/style/variables.scss";',
        },
      },
    },
  },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],

  tailwindcss: {
    configPath: '~/config/tailwind.js',
  },
  googleFonts: {
    families: {
      Roboto: true,
      // display: 'swap',
      // prefetch: true,
      // preconnect: true,
      // preload: true,
      download: true,
      inject: true,
    },
  },
  runtimeConfig: {
    apiBase: process.env.BASE_API_URL || 'http://sushi.test/api/',
    secretKey: '262ab14e9b8b7cb8ea2d566052a6e9f8ac5d2ad3',
    public: {
      apiBase: process.env.BASE_API_URL,
    },
  },
});
