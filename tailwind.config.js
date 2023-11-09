const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          50: "#f3f4fa",
          100: "#e1e3ed",
          200: "#d0d2e0",
          300: "#bfc2d4",
          400: "#afb3c7",
          500: "#9095ad",
          600: "#747994",
          700: "#5a5f7a",
          800: "#434861",
          900: "#2e3247",
          1000: "#1b1e2e",
        },
        red: {
          50: "#fbefef",
          100: "#fad9d9",
          200: "#f8c4c4",
          300: "#f59a9a",
          400: "#e4575a",
          500: "#c62b34",
          600: "#9f1321",
          700: "#7a0718",
          800: "#5e0216",
          900: "#4f0016",
          1000: "#490018",
        },
        orange: {
          50: "#fcf1e0",
          100: "#fbe3c3",
          200: "#f9d4a7",
          300: "#f6b66f",
          400: "#e5771a",
          500: "#c74f00",
          600: "#9f3500",
          700: "#792100",
          800: "#5d1300",
          900: "#4e0b00",
          1000: "#470600",
        },
        jade: {
          50: "#def8ed",
          100: "#b9eed8",
          200: "#96e4c4",
          300: "#58d09e",
          400: "#0aa767",
          500: "#00804c",
          600: "#005e39",
          700: "#00432a",
          800: "#003220",
          900: "#00291b",
          1000: "#00261a",
        },
        indigo: {
          50: "#eff1fd",
          100: "#dce2fb",
          200: "#cad2fa",
          300: "#a6b3f7",
          400: "#6b7de8",
          500: "#4356cf",
          600: "#2a3aae",
          700: "#1b288e",
          800: "#131d76",
          900: "#0f1767",
          1000: "#0e1461",
        },
        purple: {
          50: "#f5f0fb",
          100: "#e9ddfa",
          200: "#decbf8",
          300: "#c8a7f5",
          400: "#a06ce4",
          500: "#7f43c9",
          600: "#632aa6",
          700: "#4b1a83",
          800: "#3b1268",
          900: "#320e58",
          1000: "#2f0c52",
        },
      },
    },
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
    require("@tailwindcss/aspect-ratio"),
    // https://github.com/tailwindlabs/tailwindcss-forms
    require("@tailwindcss/forms"),
    // https://github.com/tailwindlabs/tailwindcss-typography
    require("@tailwindcss/typography"),
  ],
}
