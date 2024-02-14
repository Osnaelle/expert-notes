/** @type {import('tailwind content: [],css').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

