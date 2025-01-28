// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2A9D8F',
        secondary: '#E9C46A',
        accent: {
          orange: '#F4A261',
          navy: '#264653',
          coral: '#E76F51',
        }
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'dm-serif': ['"DM Serif Display"', 'serif'],
      },
      borderRadius: {
        'xl': '12px',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}