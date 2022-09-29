import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  // target: 'static',
  head: {
    title: 'The Largest Elixir Conference in Africa',
    // titleTemplate: 'ElixirConfAfric - %s',
  },
  meta: {
    meta: [
      { charset: 'utf-8' },
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ElixirConfAfr is an annual conference bringing together BEAM enthusiasts for collaboration, networking and learning.' },
      { hid: 'keywords', name: 'keywords', content: 'Conference, Africa, conferences in africa, Elixir, Beam, Elixir Conference, Elixir Kenya, Elixir Africa, Africa Tech, Afr,  Conf' },
      { hid: 'og:description', property: 'description', content: 'ElixirConfAfr is an annual conference bringing together BEAM enthusiasts for collaboration, networking and learning.' },
      { hid: 'og:title', property: 'og:title', content: 'The Largest Elixir Conference in Africa' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'The Largest Elixir Conference in Africa' },
      { hid: 'og:url', property: 'og:url', content: 'https://elixirconf.africa' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://elixirconf.africa' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@ElixirConfAfric' },
      { name: 'twitter:creator', content: '@ElixirConfAfric' },
      { property: 'og:site_name', content: 'ElixirConfAfric' },
      { hid: 'og:image', property: 'og:image', content: 'https://elixirconf.africa/images/banner.png' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://elixirconf.africa/images/banner.png' },
      { hid: 'theme-color', name: 'theme-color', content: '#AD3989' },
      { name: 'canonical', content: 'https://elixirconf.africa' },
      {
        name: 'msapplication-TileColor',
        content: '#ffffff',
      },
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/ms-icon-144x144.png',
      },
    ],
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.2/css/font-awesome.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,400,300,700,900', id: 'roboto-font' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700&subset=latin,latin-ext', id: 'roboto-slab-font' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/images/icons/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/images/icons/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/images/icons/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/images/icons/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/images/icons/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/images/icons/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/images/icons/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/images/icons/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/icons/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/images/icons/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/images/icons/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/icons/favicon-16x16.png',
      },
    ],
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: [
    // 'vue-social-sharing/nuxt',
  ],
  // app: {
  //   buildAssetsDir: '/nuxt/',
  //   baseURL: '/elixir-conf-2022/',
  //   // cdnURL: 'http://0.0.0.0:3000/elixir-conf-2022/',
  // },
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
  nitro: {
    prerender: {
      routes: ['/404.html'],
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
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'https://nuxtjs.org',
      isEventLive: true,
    },
  },
})
