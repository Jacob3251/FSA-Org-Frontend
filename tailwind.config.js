/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mono: ["Montserrat", "sans-serif"],
        Robo: ["Roboto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
