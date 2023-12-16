/** @type {import('next').NextConfig} */

// Load environment variables from .env file
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-4.api-sports.io",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
};
module.exports = nextConfig;
