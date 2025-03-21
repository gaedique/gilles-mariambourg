// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: [], // ajoutez vos domaines si nécessaire
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
