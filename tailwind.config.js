/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Konexy': ['"KonexyPersonalUse", sans-serif'],
        'Gilroy-Light': ('Gilroy-Light'),
        'Gilroy-Bold': ('Gilroy-Bold'),
        'Jost': ('"Jost", sans-serif'),
        'Inter': ('Inter'),
        'Fontleroy-Brown': ('Fontleroy-Brown'),
        'fontbrown-2':('fontbrown-2'),
      },
      boxShadow: {
        'gray': ('0px 20px 60.571px 0px #E5E9F6'),
        'purple':('0px 20px 50px 0px rgba(39, 0, 124, 0.50)'),
      }
    },
  },
  plugins: [],
}