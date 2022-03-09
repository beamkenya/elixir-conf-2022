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
        accent: '#f05423',
        'light-text': '#999',
        'dark-text': '#5B5E5E',
        // dark
        dark: '#22272D',
        'primary-dark': '#AD3889',
        'secondary-dark': '#0E6D8F',
        'accent-dark': '#f05423',
        'light-text-dark': '#A69F94',
        'dark-text-dark': '#B2ADA3',
      },
    },
  },
  // eslint-disable-next-line comma-spacing
  plugins: [require('daisyui')],
  darkMode: 'class',
  important: true,
}
