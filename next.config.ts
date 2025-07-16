/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/CurriculumVitae",
  assetPrefix: "/CurriculumVitae/", 
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
