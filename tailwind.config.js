// Tailwind Modules
const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "media",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", ...defaultTheme.fontFamily.sans],
        body: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Inter", ...defaultTheme.fontFamily.sans],
        sub: ["Antonio", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: "568px",
        md: "768px",
        lg: "1200px",
        xl: "1440px",
      },
      colors: {
        primary: {
          light: colors.red[400],
          DEFAULT: colors.red[500],
          dark: colors.red[600],
        },
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
