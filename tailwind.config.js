/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
        loginLabel: '#333333',
        loginForm: '#F2F2F2',
        formOutline: '#E5E5E5',
        placeHolderColor: '#808080',
        loginButton: '#57AE99',
        googleButton: '#F2F2F2',
        googleFontColor: '#393C3F'
      },
      margin: {
        "87": '87px'
      },
      padding: {
        "417": '417px'
      },
    },
    fontFamily: {
      primary: ["roboto", "sans-serif"]
    },
    width: {
      x_loginContainer: '1195px',
      x_inputForm: '360px'
    },
    height: {
      y_loginContainer: '637px',
      y_inputForm: '51px'
    }
  },
  plugins: [],
}
