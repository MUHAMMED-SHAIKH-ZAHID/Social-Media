/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass:"rgba(255,255,255,0.25)",
        'dark-theme-bg': '#999999',
        'dark-theme-text': '#ffffff',
      },
    },
  },
  plugins: [require("tailwind-scrollbar"),require("tailwind-scrollbar-hide")],
}
