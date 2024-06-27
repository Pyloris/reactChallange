/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,jsx,ts,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': 'Ubuntu'
      },
      boxShadow: {
        'all': '1px 3px 20px 1px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

