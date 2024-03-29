/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: '"Ysabeau Infant"',
        geist: ["Geist", "sans-serif"],
      }
    },
  },
  plugins: [],
}
