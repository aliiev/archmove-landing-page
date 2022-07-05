/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ './src/**/*.js', './public/index.html' ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [ 'Inter', ...defaultTheme.fontFamily.serif ],
        'serif': [ 'Playfair Display', ...defaultTheme.fontFamily.serif ]
      },
      colors: {
        primary: {
          DEFAULT: '#fd665e',
          '50': '#ffffff',
          '100': '#ffffff',
          '200': '#ffd9d7',
          '300': '#feb3af',
          '400': '#fe8c86',
          '500': '#fd665e',
          '600': '#fc3127',
          '700': '#e80e03',
          '800': '#b10b02',
          '900': '#790802'
        }
      },
      backgroundImage: {
        'hero': 'url("./resources/images/backgrounds/hero.jpg")'
      }
    }
  },
  plugins: [ require('@tailwindcss/forms') ],
}
