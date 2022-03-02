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
        // light
        primary: '#AD3889',
        secondary: '#112943',
        // dark
        dark: '#22272D',
        'primary-dark': '#fff',
        'secondary-dark': '#B5C4CD',
      },
    },
  },
  // eslint-disable-next-line comma-spacing
  plugins: [require('daisyui',),],
  darkMode: 'class',
  important: true,
}
