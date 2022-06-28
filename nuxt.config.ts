import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  _nuxtConfigFiles: undefined,
  ssr: false,
  // target: 'static',
  meta: {
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.2/css/font-awesome.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,400,300,700,900', id: 'roboto-font' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700&subset=latin,latin-ext', id: 'roboto-slab-font' },
    ],
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: [
    // 'vue-social-sharing/nuxt',
  ],
  app: {
    buildAssetsDir: '/nuxt/',
    baseURL: '/elixir-conf-2022/',
    // cdnURL: 'http://0.0.0.0:3000/elixir-conf-2022/',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    // transpile: ['moment'],
    // publicPath: '/elixir-conf-2022/',
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  // hooks: {
  //   build: {
  //     done(builder) {
  //       const publicDir = join(generator.nuxt.options.rootDir, 'public', '_nuxt')
  //       copySync(join(generator.nuxt.options.generate.dir, '_nuxt'), publicDir)
  //     }
  //   }
  // }
  // publicRuntimeConfig: {
  //   BASE_URL: process.env.BASE_URL || 'https://nuxtjs.org',
  // },
})
