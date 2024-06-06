/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto']
      },
      colors: {
        'howTo' : '#FBF1F1',
      }
    },
  },
  plugins: [],
}
