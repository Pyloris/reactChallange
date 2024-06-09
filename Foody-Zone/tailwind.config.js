/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,jsx,html}'],
  theme: {
    extend: {
      backgroundImage: {
        'foody' : "url('/src/assets/bg.png')"
      },
      colors: {
        'gray': '#323334'
      }
    },
  },
  plugins: [],
}

