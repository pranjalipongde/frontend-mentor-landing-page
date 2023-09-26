/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightPurple: "#451952",
        brightPurpleLight: "#9400FF",
        brightPurpleSupLight: "#9D44C0",
        darkGrayishBlue: "#1E3A4C",
        darkBlue: "#0E21A0",
        veryDarkBlue: "#141E46",
        veryPaleRed: "#DBB8E0",
        veryLightGray: "#D3D3D3",
      },
    },
  },
  plugins: [],
};
