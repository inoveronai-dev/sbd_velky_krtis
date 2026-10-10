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
        brand: {
          DEFAULT: "#26702d",
          deep: "#183f2d",
          soft: "#e8f0e9",
        },
        warm: "#f5f7f2",
        ink: {
          DEFAULT: "#232725",
          muted: "#5a635c",
        },
        line: "#d7ddd6",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
        narrow: "40rem",
      },
      boxShadow: {
        soft: "0 12px 40px -20px rgba(24, 63, 45, 0.28)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
