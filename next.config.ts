import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['192.168.40.11'],
  output: "export",
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;