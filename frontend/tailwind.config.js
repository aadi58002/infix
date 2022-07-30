/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require("daisyui"),
      function({ addVariant }) {
          addVariant('child', '& > *');
          addVariant('child-hover', '& > *:hover');
      }
  ],
  mode: 'jit',
  darkMode: 'class',
}
