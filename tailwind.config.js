/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#000000",
      },
      "persian-red": {
        50: "#fff1f2",
        100: "#ffe1e4",
        200: "#ffc8ce",
        300: "#ffa1aa",
        400: "#fe6b7a",
        500: "#f73c4f",
        600: "#e41e32",
        700: "#d3172a",
        800: "#9f1523",
        900: "#831924",
        950: "#48070e",
      },
    },
    extend: {},
  },
  plugins: [],
};
