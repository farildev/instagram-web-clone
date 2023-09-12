/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        dark : "#0a0a0a",
        active : "#282828",
        link : "#b3b3b3",
      },
      boxShadow : {
        instagram : "0px 0px 9px 3px rgba(0,0,0,0.15)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}