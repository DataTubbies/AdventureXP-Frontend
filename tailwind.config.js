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
      "astronaut-blue": {
        50: "#eef9ff",
        100: "#dcf4ff",
        200: "#b2ebff",
        300: "#6ddcff",
        400: "#20cbff",
        500: "#00b4ff",
        600: "#0091df",
        700: "#0073b4",
        800: "#006194",
        900: "#00466b",
        950: "#003351",
      },
      "outer-space": {
        50: "#f3f7f8",
        100: "#e0eaed",
        200: "#c4d6dd",
        300: "#9cbac4",
        400: "#6c95a4",
        500: "#50788a",
        600: "#456575",
        700: "#3d5461",
        800: "#384852",
        900: "#2c373f",
        950: "#1e282e",
      },
    },
    extend: {},
  },
  plugins: [],
};
