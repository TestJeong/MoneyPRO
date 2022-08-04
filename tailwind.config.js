const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./lib/components/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      phone: {min: "40px", max: "667px"},
      ...defaultTheme.screens
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
