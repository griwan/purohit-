import { defineConfig } from "windicss/helpers";

import colors from "windicss/colors";
import plugin from "windicss/plugin";

export default defineConfig({
  extract: {
    include: ["**/*.{js,jsx,tsx,css,mdx}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  attributify: true,
  shortcuts: {
    btn: "h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800",
  },
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
        red: "#A9253F",
        pink: "#eb5e7f",
        "ui-light": "#F0F0F0",
        "ui-text": "#707070",
        "ui-cyan": "#557996",
        "ui-gray": "#333333",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Libre Baskerville", "serif"],
      },
    },
  },
});
