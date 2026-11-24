/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/dpi-analyzer',
        destination: '/mouse-dpi-analyzer',
        permanent: true,
      },
      {
        source: '/mouse-test',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/best-gaming-mouse',
        destination: '/blog/best-dpi-and-sensitivity-settings-for-gaming',
        permanent: true,
      },
      {
        source: '/blog/mouse-troubleshooting',
        destination: '/blog/left-click-not-working-on-mouse',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
