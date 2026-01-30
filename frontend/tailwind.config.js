const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      fontSize: {
        xs: ["0.813rem", "1rem"],
      },
      colors: {
        /* Brand & Primary Colors - mapped from CSS variables */
        "brand-primary": "var(--color-brand-primary)",
        "brand-primary-light": "var(--color-brand-primary-light)",
        "brand-primary-lighter": "var(--color-brand-primary-lighter)",
        "brand-primary-pale": "var(--color-brand-primary-pale)",
        "brand-primary-dark": "var(--color-brand-primary-dark)",
        "brand-primary-darkest": "var(--color-brand-primary-darkest)",

        /* Secondary Colors */
        "secondary-blue": "var(--color-secondary-blue)",
        "secondary-blue-light": "var(--color-secondary-blue-light)",
        "secondary-orange": "var(--color-secondary-orange)",
        "secondary-orange-dark": "var(--color-secondary-orange-dark)",
        "secondary-yellow": "var(--color-secondary-yellow)",
        "secondary-red": "var(--color-secondary-red)",

        /* Surface & Background Colors */
        "surface-primary": "var(--color-surface-primary)",
        "surface-secondary": "var(--color-surface-secondary)",
        "surface-tertiary": "var(--color-surface-tertiary)",

        /* Text & Foreground Colors */
        "fg-primary": "var(--color-fg-primary)",
        "fg-secondary": "var(--color-fg-secondary)",
        "fg-tertiary": "var(--color-fg-tertiary)",

        /* Border & Stroke Colors */
        "border-primary": "var(--color-border-primary)",
        "border-secondary": "var(--color-border-secondary)",

        /* Availability Colors */
        "avail-green": "var(--color-avail-green)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "pale-green": "#CDEBDC",
      "light-green": "#29BC68",
      "ligher-green": "#EBF7EF",
      green: "#00994C",
      "dark-green": "#1C7D45",
      "darkest-green": "#007F36",
      "light-blue": "#53A2FF",
      blue: "#006BE8",
      orange: "#E5A800",
      yellow: "#FFE8B8",
      "dark-yellow": "#997700",
      white: "#FFFFFF",
      "off-white": "#F2F2F2",
      black: "#000000",
      gray: "#BDBDBD",
      "dark-gray": "#6B6B6B",
      "very-dark-gray": "#4F4F4F",
      "light-gray": "#f3f4f6",
      "light-gray-stroke": "#dfdfdf",
      "avail-green": colors.emerald, // The green used for marking availability
      red: "#DB1616",
    },
    screens: {
      sm: "640px",
      md: "768px",
      mdlg: "896px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
  prefix: "tw-",
  safelist: [],
}
