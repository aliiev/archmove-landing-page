/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ './src/**/*.js', './public/index.html' ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [ 'Inter', ...defaultTheme.fontFamily.serif ],
        'serif': [ 'Playfair Display', ...defaultTheme.fontFamily.serif ]
      }
    }
  },
  plugins: [],
}
