module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./lib/components/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(auto-fill, minmax(300px, 1fr))"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
