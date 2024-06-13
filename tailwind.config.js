/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#f42c37",
        secondary:"#f42c37",
        tertiary:"#fdc62e",
        fourth:"#eeeeee",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
         
      }
      }
    },
  },
  plugins: [],
}