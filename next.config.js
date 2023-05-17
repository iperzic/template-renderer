/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
  redirects: () => [
    {
      source: '/',
      destination: '/home',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
