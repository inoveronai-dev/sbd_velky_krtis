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
          soft: "#e8f0e9",
          muted: "#eef4ef",
        },
        gray: {
          dark: "#414141",
          soft: "#f7f8f6",
          muted: "#e7e8e6",
        },
        ink: {
          DEFAULT: "#414141",
          muted: "#6b6b6b",
        },
        line: "#e0e2de",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Segoe UI", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "Times New Roman", "serif"],
      },
      maxWidth: {
        content: "72rem",
        narrow: "40rem",
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        card: "0 14px 40px -18px rgba(65, 65, 65, 0.18)",
        soft: "0 10px 28px -16px rgba(65, 65, 65, 0.14)",
        nav: "0 10px 30px -18px rgba(65, 65, 65, 0.28)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
