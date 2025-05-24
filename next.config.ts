import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,

  // Configuration des rewrites
  async rewrites() {
    return [
      {
        source: "/LegalNotice",
        destination: "/mentions-legales",
      },
      {
        source: "/PrivacyPolicy",
        destination: "/politique-de-confidentialite",
      },
    ];
  },

  // Configuration des images optimisée (changements principaux)
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    minimumCacheTTL: 31536000,
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
  },

  // Headers de cache uniquement
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
