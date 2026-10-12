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
          mid: "#1f4d34",
          soft: "#e7f0e8",
          soft2: "#f0f5f0",
        },
        warm: "#f5f7f2",
        topbar: "#eef1ec",
        ink: {
          DEFAULT: "#1f2421",
          muted: "#5c655e",
        },
        line: "#d9e0d9",
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
        card: "0 14px 40px -18px rgba(24, 63, 45, 0.28)",
        soft: "0 10px 30px -16px rgba(24, 63, 45, 0.22)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
