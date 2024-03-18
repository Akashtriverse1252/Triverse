const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ...
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        "playfair-display": ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans"],
        roboto: ["Roboto", "sans"],
        Averta: ["AvertaStd", "sans"],
      },
      screens: {
        "4xl": "1700px",
        "3xl": "1600px",
        
      },
    },
  },
  plugins: [],
});
