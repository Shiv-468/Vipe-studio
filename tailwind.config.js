/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Gilroy-Light': ('Gilroy-Light'), 
        'Konexy': ['"Konexy"', "sans-serif"],
        'Jost': ('Jost', 'sans-serif'),
        'Inter': ('Inter'),
      },
      boxShadow: {
        'gray': ('0px 20px 60.571px 0px #E5E9F6'),
        'purple':('0px 20px 50px 0px rgba(39, 0, 124, 0.50)'),
      }
    },
  },
  plugins: [],
}