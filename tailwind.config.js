const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        flower: "url(.'./assets/img/desktop/flower)",
        lake: "url(.'./assets/img/desktop/lake)",
        logCabin: "url(.'./assets/img/desktop/logCabin)",
        mountains: "url(.'./assets/img/desktop/mountains)",
        mountainsG: "url(.'./assets/img/desktop/mountainsG)",
        nature: "url(.'./assets/img/desktop/nature)",
        tree: "url(.'./assets/img/desktop/tree)",
        tree1: "url(.'./assets/img/desktop/tree1)",
        tree2: "url(.'./assets/img/desktop/tree)2",
        tree3: "url(.'./assets/img/desktop/tree)3",
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
  ],
}

