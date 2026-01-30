/**
 * Color Theme Mapping
 * This utility provides semantic color mappings for easy theme switching
 * Colors are defined as CSS variables in index.css
 */

export const colorTheme = {
  // Brand & Primary
  brandPrimary: "var(--color-brand-primary)",
  brandPrimaryLight: "var(--color-brand-primary-light)",
  brandPrimaryLighter: "var(--color-brand-primary-lighter)",
  brandPrimaryPale: "var(--color-brand-primary-pale)",
  brandPrimaryDark: "var(--color-brand-primary-dark)",
  brandPrimaryDarkest: "var(--color-brand-primary-darkest)",

  // Secondary
  secondaryBlue: "var(--color-secondary-blue)",
  secondaryBlueLight: "var(--color-secondary-blue-light)",
  secondaryOrange: "var(--color-secondary-orange)",
  secondaryOrangeDark: "var(--color-secondary-orange-dark)",
  secondaryYellow: "var(--color-secondary-yellow)",
  secondaryRed: "var(--color-secondary-red)",

  // Surface & Background
  surfacePrimary: "var(--color-surface-primary)",
  surfaceSecondary: "var(--color-surface-secondary)",
  surfaceTertiary: "var(--color-surface-tertiary)",

  // Text & Foreground
  fgPrimary: "var(--color-fg-primary)",
  fgSecondary: "var(--color-fg-secondary)",
  fgTertiary: "var(--color-fg-tertiary)",

  // Border & Stroke
  borderPrimary: "var(--color-border-primary)",
  borderSecondary: "var(--color-border-secondary)",

  // Availability
  availGreen: "var(--color-avail-green)",
}

/**
 * Legacy color hex values for backward compatibility
 * These should be replaced with theme variables above
 */
export const legacyColorMap = {
  // Green shades
  "#00994C": "tw-brand-primary",
  "#29BC68": "tw-brand-primary-light",
  "#EBF7EF": "tw-brand-primary-lighter",
  "#CDEBDC": "tw-brand-primary-pale",
  "#1C7D45": "tw-brand-primary-dark",
  "#007F36": "tw-brand-primary-darkest",

  // Blue shades
  "#006BE8": "tw-secondary-blue",
  "#53A2FF": "tw-secondary-blue-light",

  // Orange & Yellow shades
  "#E5A800": "tw-secondary-orange",
  "#997700": "tw-secondary-orange-dark",
  "#FFE8B8": "tw-secondary-yellow",

  // Red shades
  "#DB1616": "tw-secondary-red",

  // Neutral shades
  "#FFFFFF": "tw-surface-primary",
  "#F2F2F2": "tw-surface-secondary",
  "#f3f4f6": "tw-surface-tertiary",
  "#000000": "tw-fg-primary",
  "#6B6B6B": "tw-fg-secondary",
  "#4F4F4F": "tw-fg-tertiary",
  "#BDBDBD": "tw-border-primary",
  "#dfdfdf": "tw-border-secondary",
}

/**
 * Get hex value for given color name (for non-Tailwind contexts like boxShadow)
 * Light mode only - for dark mode support, use CSS variables directly
 */
export const getHexColor = (colorName) => {
  const hexMap = {
    // Brand & Primary
    brandPrimary: "#00994C",
    brandPrimaryLight: "#29BC68",
    brandPrimaryLighter: "#EBF7EF",
    brandPrimaryPale: "#CDEBDC",
    brandPrimaryDark: "#1C7D45",
    brandPrimaryDarkest: "#007F36",

    // Secondary
    secondaryBlue: "#006BE8",
    secondaryBlueLight: "#53A2FF",
    secondaryOrange: "#E5A800",
    secondaryOrangeDark: "#997700",
    secondaryYellow: "#FFE8B8",
    secondaryRed: "#DB1616",

    // Neutral
    white: "#FFFFFF",
    offWhite: "#F2F2F2",
    black: "#000000",
    gray: "#BDBDBD",
    darkGray: "#6B6B6B",
    veryDarkGray: "#4F4F4F",
    lightGray: "#f3f4f6",
    lightGrayStroke: "#dfdfdf",
  }

  return hexMap[colorName] || "#000000"
}
