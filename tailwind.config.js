/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F18701",
        appGreen: "#00AF54",
        appRed: "#EE2E31",
      },
      backgroundImage: {
        loginImg: "url('/login-backgroundimage.png')",
      },
    },
  },
  plugins: [],
}