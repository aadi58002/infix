/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      function({ addVariant }) {
          addVariant('child', '& > *');
          addVariant('child-hover', '& > *:hover');
      }
  ],
  mode: 'jit',
  darkMode: 'class',
}
