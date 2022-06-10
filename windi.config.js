import { defineConfig } from "windicss/helpers";

import colors from "windicss/colors";
import plugin from "windicss/plugin";

export default defineConfig({
  extract: {
    include: ["**/*.{js,jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  attributify: true,
  shortcuts: {
    btn: "rounded-lg border border-gray-300 text-gray-100 bg-blue-500 px-4 py-2 m-2 inline-block hover:shadow",
  },
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Libre Baskerville", "serif"],
      },
    },
  },
});
