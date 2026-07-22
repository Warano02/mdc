import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mdccanada.ca',
      },
      {
        protocol: 'https',
        hostname: 'dwyeyw425tqez.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
