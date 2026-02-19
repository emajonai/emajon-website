import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // Disable keep-alive in development to work around Next.js 16 Turbopack
    // dev server hanging on persistent connections
    if (process.env.NODE_ENV !== "production") {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "Connection", value: "close" },
          ],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
