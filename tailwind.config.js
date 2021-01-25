const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        red: colors.rose,
        yellow: colors.yellow,
        green: colors.green,
        lime: colors.lime,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple,
        pink: colors.pink,
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        amber: colors.amber,
        orange: colors.orange,
        "warm-gray": colors.warmGray,
        "true-gray": colors.trueGray,
        "cool-gray": colors.coolGray,
        "blue-gray": colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
