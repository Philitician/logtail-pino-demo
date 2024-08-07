/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "pino",
      "@logtail/pino",
      "@logtail/node",
    ],
  },
};

export default nextConfig;
