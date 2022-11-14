import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1366px",
      },
      colors: {
        primary: "#F18A00",
        secondary: "#001E61",
        tertiary: "#231F20",
        "gray-mid": "#A7A9AC",
        "gray-light": "#E6E7E8",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      textColor: {
        "primary-alt": "#231F20",
      },
      boxShadow: {
        card: "0 6.0051px 6.0051px rgba(0,0,0,0.25)",
      },
    },
  },
});
