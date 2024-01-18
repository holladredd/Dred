/** @type {import('tailwindcss').Config} */
module.exports = {

      content: {
        relative: true,
        transform: (content) => content.replace(/taos:/g, ''),
        files: ['./src/*.{html,js}', "./src/**/*.{html,js}",
        "./node_modules/flowbite/**/*.js"],
      },
      
      


  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin','taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

