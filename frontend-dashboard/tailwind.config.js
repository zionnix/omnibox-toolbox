/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",
          gray: "#121212",
          blue: "#3b82f6"
        }
      }
    },
  },
  plugins: [],
}