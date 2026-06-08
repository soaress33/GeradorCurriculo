/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@react-pdf/renderer"],
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
