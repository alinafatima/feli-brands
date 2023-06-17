/** @type {import('next').NextConfig} */
const nextConfig = {
  // Specify your custom "exportPathMap" function
  generateStaticRoutes: async function () {
    return {
      '/': { page: '/' },
      // Add other routes here if needed
    };
  },
  // Specify the location of the export directory
  distDir: 'out',
  // Add any other custom configuration options if necessary
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
};

module.exports = nextConfig
