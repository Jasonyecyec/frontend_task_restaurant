/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        bebas: ["BebasKai", "sans-serif"],
      },
      colors: {
        primary: "#FF0000",
        accent: "#DD2B2B",
        primaryBackground: "#1A1A1A",
      },

      borderColor: {
        "contact-border": "rgba(255, 255, 255, 0.09)",
        "reserve-border": "rgba(255, 255, 255, 0.20)",
        "menu-list-border": "rgba(255, 255, 255, 0.2)",
      },

      backgroundImage: {
        "contact-gradient":
          "linear-gradient(180deg, rgba(217, 217, 217, 0.7) 0%, #A5A5A5 28.76%, #737373 65.71%, #737373 77.66%, rgba(115, 115, 115, 0.7) 100%)",
        "menu-list-border":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
      },
    },
  },
  plugins: [],
};
