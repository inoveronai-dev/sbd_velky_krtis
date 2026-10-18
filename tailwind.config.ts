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
          deep: "#1f5a24",
          soft: "#e7f0e8",
        },
        gray: {
          dark: "#414141",
          DEFAULT: "#e8e8e8",
          light: "#f0f0f0",
        },
        warm: "#f0f0f0",
        topbar: "#e8e8e8",
        ink: {
          DEFAULT: "#414141",
          muted: "#6b6b6b",
        },
        line: "#dcdcdc",
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
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        card: "0 14px 40px -18px rgba(65, 65, 65, 0.22)",
        soft: "0 10px 30px -16px rgba(65, 65, 65, 0.16)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
