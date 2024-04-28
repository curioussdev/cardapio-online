/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js"],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'section': "url('/assets/rest/bg.png')",
      }
    },
  },
  plugins: [],
}

