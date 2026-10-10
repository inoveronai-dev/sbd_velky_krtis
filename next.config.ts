import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent Next.js from regenerating AGENTS.md on every dev start.
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
