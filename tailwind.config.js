const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './index.html',
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono]
      },
    },
  },
  variants: {},
  plugins: []
}
