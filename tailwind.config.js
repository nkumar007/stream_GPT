/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        // If you want it to be a background color
        "custom-gray": "rgba(109, 109, 110, 0.7)",
      },
    },
  },
  plugins: [],
};
