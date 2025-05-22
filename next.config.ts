// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: [], // ajoutez vos domaines si nécessaire
//   },
// };

// export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/LegalNotice",
//         destination: "/mentions-legales",
//       },
//       {
//         source: "/PrivacyPolicy",
//         destination: "/politique-de-confidentialite",
//       },
//     ];
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

  // Configuration des images
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Remplacez par votre domaine ou supprimez cette ligne si vous n'utilisez
    // que des images locales
    domains: [],
    path: "/_next/image",
    loader: "default",
    minimumCacheTTL: 60,
    formats: ["image/webp"],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
  },
};

export default nextConfig;
