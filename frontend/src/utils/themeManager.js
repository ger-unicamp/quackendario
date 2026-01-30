/**
 * Theme Manager Utility
 * Manages theme switching between light and dark modes using CSS class on document root
 */

export const themeManager = {
  /**
   * Get current theme mode
   */
  getTheme() {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
    }
    return "light"
  },

  /**
   * Set theme mode
   */
  setTheme(mode) {
    if (typeof document !== "undefined") {
      if (mode === "dark") {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme-mode", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme-mode", "light")
      }
    }
  },

  /**
   * Toggle theme between light and dark
   */
  toggleTheme() {
    const current = this.getTheme()
    this.setTheme(current === "dark" ? "light" : "dark")
  },

  /**
   * Initialize theme from localStorage or system preference
   */
  initializeTheme() {
    if (typeof document === "undefined") return

    const saved = localStorage.getItem("theme-mode")
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    if (saved) {
      this.setTheme(saved)
    } else if (prefersDark) {
      this.setTheme("dark")
    } else {
      this.setTheme("light")
    }
  },
}

export default themeManager
