/** @type {import('next').NextConfig} */

// Load environment variables from .env file
require('dotenv').config();

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
};
module.exports = nextConfig;