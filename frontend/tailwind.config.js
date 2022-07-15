const config = {
    content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}",],
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
};

module.exports = config;
