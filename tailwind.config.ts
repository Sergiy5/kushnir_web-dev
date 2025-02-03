import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F9F9F9",
        bgDark: "#000000",
        bgProject: "#171717",
        bgFooter: "#000000",
        grey_300: "#D1D1D1",
        grey_400: "#6E6E6E",
        grey_500: "#454545",
        white: "#FFFFFF",
        black_900: "#171717",
        black: "#000000",
        green_600: "#9BEF2D",
        green_500: "#B8FF5B",
        accentGreen: "#B8FF5B",
        textFooter: "#D1D1D1",
        textBlack: "#000000",
        textDark: "#171717",
        textLight: "#FFFFFF",
        textGrey: "#6E6E6E",
      },
      fontFamily: {
        space_grotesk: "var(--font-space-grotesk), sans-serif",
        // technology: "var(--font-technology), sans-serif",
        advancedPixel: "var(--font-advanced-pixel-lcd), sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
