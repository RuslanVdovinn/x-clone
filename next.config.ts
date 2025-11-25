import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'fakestoreapi.com'
      }
    ]
  }
};

export default nextConfig;
