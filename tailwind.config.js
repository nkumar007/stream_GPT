/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        // If you want it to be a background color
        "custom-gray": "rgba(109, 109, 110, 0.7)",
      },
      backgroundImage: {
        "gpt-background": "url('/src/assets/login_background.jpeg')",
      },
    },
  },

  corePlugins: {
    scrollbarWidth: false,
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
