/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        squids: ["Squids", "sans-serif"],
        anta: ["Anta", "sans-serif"],
      },
      colors: {
        "dredd-blue": "#c7d9f7fd",
        "dredd-green": "#009b4d",
      },
    },
  },
  plugins: [],
};
