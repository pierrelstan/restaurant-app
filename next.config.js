/** @type {import('next').NextConfig} +*/
// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
module.exports = [
  nextConfig,
  withImages({
    // fileExtensions: ["jpg", "jpeg", "png", "gif"],
    webpack(config) {
      return config;
    },
  }),
];
