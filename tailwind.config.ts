import { join } from "path";
import type { Config } from "tailwindcss";
import { getClassesUsed } from "tailwindjs";

getClassesUsed(join(__dirname, "src"));

module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,json}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "Montserrat",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
} satisfies Config;
