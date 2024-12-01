/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      // SCREENS
      screens: {
        "big-desktop": { max: "87.499em" }, // 1400px
        laptop: { max: "80em" }, // 1280px
        "tab-land": { max: "74.999em" }, // 1200px
        "custom-1050": { max: "65.624em" }, // 1050px
        "tab-port": { max: "61.999em" }, // 992px
        "custom-915": { max: "57.187em" }, // 915px
        "custom-850": { max: "53.124em" }, // 850px
        "land-phone": { max: "47.999em" }, // 768px
        "custom-680": { max: "42.499em" }, // 680px
        phone: { max: "35.999em" }, // 576px
        "custom-540": { max: "33.749em" }, // 540px
        "custom-390": { max: "24.374em" }, // 390px
      },

      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
