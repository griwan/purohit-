/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

module.exports = {
  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  jsc: {
    transform: {
      react: {
        throwIfNamespace: false,
      },
    },
  },
};
