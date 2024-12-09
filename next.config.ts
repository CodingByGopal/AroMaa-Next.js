import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200],


    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
