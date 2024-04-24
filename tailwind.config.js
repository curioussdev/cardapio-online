/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js"],
  theme: {
    extend: {
      backgroundImage: {
        'section': "url('/assets/rest/bg.png')",
      }
    },
  },
  plugins: [],
}

