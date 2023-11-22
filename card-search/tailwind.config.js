/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  // prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainFontColor': '#01010D'
      },
      screens: {
        xs: '320px'
      }
    },
  },
  plugins: [],
}

