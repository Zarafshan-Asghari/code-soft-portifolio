/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      lx: "1440px",
    },
    extend: {
      colors: {
        colors: {
          softBlue: "hsl(231,69%,60%)",
          veryDarkBlue: "hsl(229,31%,21%)",
          grayishBlue: "hsl(229,8%,60%)",
        },
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
