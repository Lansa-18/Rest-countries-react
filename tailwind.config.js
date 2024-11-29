/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      // COLORS
      colors: {
        "dark-mode-bg": "#202C36",
        "dark-mode-elements": "hsl(209, 23%, 22%)",
        "dark-mode-text": "hsl(0, 0%, 100%)",
        "light-mode-bg": "#FAFAFA",
        "light-mode-elements": "hsl(0, 0%, 100%)",
        "light-mode-text": "hsl(200, 15%, 8%)",
        "light-mode-input": "hsl(0, 0%, 52%)",
      },
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}