import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/new",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "/assets/TommyAgarwalResumePublic.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
