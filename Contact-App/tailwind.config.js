/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,jsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        "inter" : "Inter"
      },
      colors: {
        'gray' : '#323334',
        'card' : '#FEEAAE'
      }
    },
  },
  plugins: [],
}
