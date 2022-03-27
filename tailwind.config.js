const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0b1727',
        'secondary': '#0476DE',
      },
      minWidth: {
        '1/12': '8.333333%',
      }
    },
  },
  plugins: [],
}
