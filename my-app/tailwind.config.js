/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      Primary: "#606A5C",
      Secondary: "#90978D",
      LightGreen: "#D7ECD9",
      Borders: "#2D2D2D",
      Accent: "#FFADAD",
      Background: "#141414",
      Text: "#F7F5F3",
      Hover: "#4E9B47",
      silver: "#ecebff",
      bermuda: "#78dcca",
    },
    extend: {},
    darkMode: "class",
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
