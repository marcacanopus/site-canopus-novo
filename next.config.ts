import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/site-canopus-novo',
  assetPrefix: '/site-canopus-novo/',
  images: {
    unoptimized: true, // Desabilita a otimização de imagens para compatibilidade com o GitHub Pages
  },
};

export default nextConfig;
