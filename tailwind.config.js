const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./views/**/*.{ejs,html,js}"],
  theme: {
    extend: {
    }
  },
  plugins: [
    plugin(function({ addUtilities }){
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/img/hero/hero.png)",
          "background-size": "cover"
        }
      };
      addUtilities(utilities);
    }),
  ],
}
