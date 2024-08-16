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
    
      colors:{
        primary:"#FF724C",
        secondary:"#FDBF50",
        tertiary:"#F4F4F8",
        fourth:"#2A2C14",
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