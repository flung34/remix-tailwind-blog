/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'bone': '#eae0cc',
      'paleBrown': '#c9ada1',
      'greenishBrown': '#e7bc91',
      'green': '#798478',
      'darkGreen': '#4d6a6d'
    },
    extend: {
    },
  },
  plugins: [],
}