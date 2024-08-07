/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["pino", "@logtail/pino"],
  },
};

export default nextConfig;
