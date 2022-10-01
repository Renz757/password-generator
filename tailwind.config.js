/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}
