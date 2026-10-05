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
};

export default nextConfig;
