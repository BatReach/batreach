/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 **
 ** DEFAULTS: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 ** Get shades by entering brand color: https://tailwind.ink/
 **
 ** Brand Color: primary-500, secondary-900
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // see https://tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',

  // Extends the default Studio Meta Tailwind configuration here...
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // to change or add fonts, see also nuxt.config.js -> webfontloader
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#69A63A',
          '50': '#C9E4B3',
          '100': '#BEDFA4',
          '200': '#A8D586',
          '300': '#92CA68',
          '400': '#7DC049',
          '500': '#69A63A',
          '600': '#4F7C2B',
          '700': '#34531D',
          '800': '#1A290E',
          '900': '#000000'
        },
        secondary: {
          DEFAULT: '#7C4B3C',
          '50': '#E7D3CD',
          '100': '#DEC3BB',
          '200': '#CCA295',
          '300': '#B9806F',
          '400': '#A2624E',
          '500': '#7C4B3C',
          '600': '#673F32',
          '700': '#533228',
          '800': '#3E261E',
          '900': '#2A1914'
        },

        // tertiary: {
        //   50: '#f6faf6',
        //   100: '#eef9e9',
        //   200: '#d8f3c3',
        //   300: '#b3e891',
        //   400: '#65d44f',
        //   500: '#2ebb24',
        //   600: '#219d17',
        //   700: '#237d19',
        //   800: '#215f1c',
        //   900: '#1c4b1b',
        // },

      },
    },
  },
  variants: {
    extend: {
      // opacity: ['disabled'],
      // cursor: ['disabled'],
    },
  },
  plugins: [
    // Docs https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
    // Docs https://github.com/tailwindlabs/tailwindcss-typography
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    // enabled: process.env.NODE_ENV === 'production',
    whitelistPatterns: [/^formulate/],
    // If you really want to remove all unused styles, use the mode: 'all'
    // option and be very careful to provide the paths to all files that might
    // reference any classes or HTML elements
    // mode: 'all',
    content: [
      'components/**/*.vue',
      'content/**/*.md',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'utils/**/*.js',
      'nuxt.config.js',
      'formulate.config.js',
    ],
  },
}
