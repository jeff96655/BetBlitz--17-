/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "rgba(0, 0, 0, 0.17)",
        black: "#000",
        white: "#fff",
        whitesmoke: "#f5f5f5",
        red: "#f11d00",
        yellow: "#fff505",
        lime: "#1aff06",
      },
      spacing: {},
      fontFamily: {
        "inknut-antiqua": "'Inknut Antiqua'",
        inika: "Inika",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      "2xs": "11px",
      xl: "20px",
      mini: "15px",
      "11xl": "30px",
      "6xl": "25px",
      "21xl": "40px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
