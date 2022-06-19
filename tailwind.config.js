/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
