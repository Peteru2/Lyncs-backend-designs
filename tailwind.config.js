/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        loginImg: 'url(./images/lyncs-login-bg.svg)'
      },
      colors: {
        primary: "#F18701",
      },
      backgroundColor: {
        bgPrimary: "#F18701",
      },
    },
  },
  plugins: [],
}

