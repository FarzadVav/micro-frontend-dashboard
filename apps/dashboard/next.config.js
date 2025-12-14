/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@modules/home",
    "@modules/users",
    "@modules/products",
    "@modules/articles",
    "@modules/comments",
    "@repo/ui",
    "@repo/config",
  ],
};

export default nextConfig;

