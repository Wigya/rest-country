/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        darkBackground: "hsl(207, 26%, 17%)",
      },
    },
  },
  plugins: [],
};
