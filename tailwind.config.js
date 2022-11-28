const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
  theme: {
    fontFamily: {
        'main': ['Urbanist', ...defaultTheme.fontFamily.sans],
    },
    extend: {
        colors: {
            'purple-main': '#8873EF',
            'yellow-main': '#FCDA69'
        },
    },
  },
  plugins: [],
}
