/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        "light-gray" : "#F3F3F7",
        "light-gray-text" : "#797E82",
        "grayish" : "#EEEEF4",
        "graytext" : "#797E82",
        "purp" : "#6959D9"
      },
      backgroundImage: {
        'pattern': 'url("./assets/pattern.svg")',
        'boxes': 'url("./assets/boxes.svg")'
      }
    },
  },
  plugins: [],
}

