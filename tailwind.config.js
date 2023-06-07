const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'lake': "url('/assets/img/desktop/lake.jpg')",
        'flowers': "url('/assets/img/desktop/flowers.jpg')",
        'logCabin': "url('/assets/img/desktop/logCabin.jpg')",
        'mountains': "url('/assets/img/desktop/mountains.jpg')",
        'mountainsG': "url('/assets/img/desktop/mountainsG.jpg')",
        'nature': "url('/assets/img/desktop/nature.jpg')",
        'tree': "url('/assets/img/desktop/tree.jpg')",
        'tree1': "url('/assets/img/desktop/treeg1.jpg')",
        'tree2': "url('/assets/img/desktop/treeg2.jpg')",
        'tree3': "url('/assets/img/desktop/treeg3.jpg')",
        'bg-l': "url('/assets/img/mobile/bg-l.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        first: "#CC2D4A",
        second: "#8FA206",
        third: "#61AEC9",
      }),
      textColor: {
        first: "#CC2D4A",
        second: "#8FA206",
        third: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide')
  ],
}

