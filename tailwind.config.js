/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sen: ["Sen"],
      },
      colors: {
        headerDark: "#402B3A",
        hoverDark: "#53404d",
        bodyWhite: "#F8F4EC",
        hoverWhite: "#dfdbd4",
      },
    },
  },
  plugins: [],
};
