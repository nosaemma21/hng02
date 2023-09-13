/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screen: {
      sm: "max-width: 400px",
      md: "max-width: 900px",
      smd: "max-width: 1194px",
    },
    extend: {
      colors: {
        rose: "#BE123C",
        date: "#9CA3AF",
        lightrose: "#F8E7EB",
      },
      fontFamily: {
        asset: ["DM sans", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        displayone: ["Poppins", "sans-serif"],
      },
      fontSize: {
        title: "18px",
        subs: "12px",
      },
      fontWeight: {
        title: "700",
        display: "600",
        light: "500",
      },
    },
  },
  plugins: [],
};
