/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export for GitHub Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Add trailing slash to match current site structure
  trailingSlash: true,

  // Base path for GitHub Pages (empty for custom domain)
  basePath: '',

  // Strict mode for better React practices
  reactStrictMode: true,

  // Preserve existing Angular apps
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/apps/:path*',
          destination: '/apps/:path*',
        },
      ],
    };
  },

  // Webpack configuration
  webpack: (config) => {
    // Add support for markdown files
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
