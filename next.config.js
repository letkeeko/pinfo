/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
    reactStrictMode: true,
  },
  images: { domains: ["images.pexels.com"] },
};

module.exports = nextConfig;
