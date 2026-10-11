/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        squids:   ['Squids', 'sans-serif'],
        anta:     ['Anta', 'sans-serif'],
        misa:     ['Misa', 'sans-serif'],
        playfair: ['Playfair', 'serif'],
      },
      colors: {
        'dredd-blue':  '#c7d9f7',
        'dredd-green': '#009b4d',
      },
    },
  },
  plugins: [],
};
