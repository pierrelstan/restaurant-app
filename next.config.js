/** @type {import('next').NextConfig} +*/
// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // domains: ['res.cloudinary.com'],
    formats: ['image/png'],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
module.exports = [
  nextConfig,
  withImages({
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  }),
];
