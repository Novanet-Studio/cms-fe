import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["fa-solid", "fa-brands"]),
    }),
  ],
};
