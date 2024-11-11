import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "trustworthy-caribou-361.convex.cloud",
      }
    ]
  }
};

export default nextConfig;
