/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        themeColor: "#D2B37D",
        navBarColor: "rgba(246, 239, 226, 0.7)",
        primary: "#f0ecec",
        secondary: "#FFFCEE",
        darkGold: "#6E5E1B",
        lightGold: "#FFF5CD",
        statusBg: "#3F3626",
        footerBg: "#353535",
      },
      backgroundImage: {
        btnImage: "radial-gradient(transparent, #D2B37D)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
