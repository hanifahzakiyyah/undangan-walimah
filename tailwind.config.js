/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        delius: ["Delius Swash Caps", "cursive"], 
        zain: ["Zain"]
      },
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [],
}

