import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  optimizeFonts: false, // Disable Google Fonts optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
