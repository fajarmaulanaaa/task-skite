/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  }
};

export default nextConfig;

