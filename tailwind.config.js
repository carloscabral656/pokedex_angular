/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ["Oxanium", "sans-serif"],
      },
      colors: {
        black: "#000000",
        "pokedex-shadow": "#90052A",
        "pokedex-color": "#D30A40",
        "blue-light-1": "#0EBDD2",
        "blue-light-2": "#13EAF8",
        "blue-light-3": "#A5F5F9",
        "red-light-1": "#A60511",
        "red-light-2": "#D80519",
        "yellow-light-1": "#90963A",
        "yellow-light-2": "#E2EB60",
        "green-light-1": "#68AB38",
        "green-light-2": "#95F75D",
        "screen-color": "#E3E3E3",
        "button-color": "#444444",
      },

      spacing: {
        "90/100": "90%",
        "80/100": "80%",
        "60/100": "60%",
        "50/100": "40%",
        "30/100": "30%",
        "20/100": "20%",
        "25/100": "25%",
        "20/100": "20%",
        "5/100": "5%",
        "75/100": "75%",
        "27/10": "27%", 
        "27/10": "27%", 
        26: "6.5rem",
        97: "97%",
      },

      boxShadow: {
        "button-shadow": "-5px 7px 0px 3px #222222;",
      }
    },
  },
  plugins: [],
};
