/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '1200px', // Define a custom breakpoint
        'customSm': '850px',
      },
    },
  },
  plugins: [],
}