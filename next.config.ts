import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent Next.js from regenerating AGENTS.md on every dev start.
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
