/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
      }
    },
    fontFamily: {
      primary: ["roboto", "sans-serif"]
    },
  },
  plugins: [],
}
