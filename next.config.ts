import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/products",
        destination: "/data/products.json",
      },
    ];
  },
};

export default nextConfig;
