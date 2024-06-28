/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite', // Adjust values as needed
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors:{
        primary:"#3D52A0",
        secondary:"#7091E6",
        tertiary:"#8697C4",
        fourth:"#ADBBDA",
        fifth:"#EDE8F5"
      },
      container:{
        center:true,
      //   padding:{
      //     DEFAULT:"1rem",
      //     sm:"2rem",
         
      // }
      }
    },
  },
  plugins: [],
}