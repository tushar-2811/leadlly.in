/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '1rem',
      '3xl': '5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

