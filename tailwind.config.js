/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color' : '#0275d8',
        'secondary-color' : '#0a0a0a',
        'third-color' : '#0c0c0c'
      },

    },
  },
  plugins: [],
}