/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik : ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        linearButton: 'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%);',
        backgroundApp: 'linear-gradient(180deg, #807ECE 0%, #8E7ECE 100%);'
      },
      backgroundColor: {
        calc: '#2D2A37',
        'violet': '#462878',
        'violet-300': '#7F45E2'
      },

      boxShadow: {
        button: '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)',
        calc: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
