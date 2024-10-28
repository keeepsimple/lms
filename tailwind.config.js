/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blueHeader: "#01458D",
      white: "#FFFFFF",
      black: "#000000",
      buy: {
        500: "#ea580c",
        700: "#c2410c",
      },
      borderColor: "#E6E8EC",
      textGrey: {
        600: "#4b5563",
        800: "#1f2937",
        900: "#111827",
      },
    },
    extend: {},
  },
  plugins: [],
};
