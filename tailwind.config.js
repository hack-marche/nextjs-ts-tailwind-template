/* eslint-disable @typescript-eslint/no-var-requires */
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    colors: {
      primary: '#B2FEB1',
      secondary: '#33794B',
      accent: '#46CA25',
      ...colors,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
