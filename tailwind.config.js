/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#FDFEC3",
        secondary: "#333333",
        third: "#D9D9D9",
      },
      fontFamily: {
        impact: ["Impact", "sans-serif"],
        mavenpro: ["Maven Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
