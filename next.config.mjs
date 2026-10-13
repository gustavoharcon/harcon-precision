/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['argon2', 'mongoose'],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true, // Log full URLs for fetch requests
    },
    hmrRefreshes: true, // Log HMR refreshes
  },
};

export default nextConfig;
