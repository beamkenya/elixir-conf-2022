module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: '#22272D',
        // light
        primary: '#3b1d82',
        // dark
        'primary-dark': '#fff',
      },
    },
  },
  // eslint-disable-next-line comma-spacing
  plugins: [require('daisyui',),],
  darkMode: 'class',
}
