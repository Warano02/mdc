import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mdccanada.ca',
      },
    ],
  },
};

export default nextConfig;
