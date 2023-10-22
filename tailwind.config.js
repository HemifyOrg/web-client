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
        xs: "378px",
      },
      colors: {
        themeColor: "#6E5E1B",
        navBarColor: "rgba(246, 239, 226, 0.7)",
        primary: "#f0ecec",
        secondary: "#FFFCEE",
        lightGold: "#FFF5CD",
        gold: "#D2B37D",
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
  plugins: [require("tailwind-scrollbar")],
};
