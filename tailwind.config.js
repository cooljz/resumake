/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        '2k': '2000px'
      },
      aspectRatio: {
        'a4': '210/297',
      }
    },
  },
  plugins: [],
}