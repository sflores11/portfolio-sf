/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        impact: ['Impact', 'sans-serif'],
        Impacted: ['Impacted', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

