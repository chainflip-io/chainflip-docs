const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
});

module.exports = {
  ...withNextra(),
  async redirects() {
    return [
      {
        source: '/',
        destination: '/concepts/welcome',
        permanent: true,
      },
      {
        source: '/concepts',
        destination: '/concepts/welcome',
        permanent: true,
      },
      {
        source: '/integration',
        destination: '/integration/getting-started',
        permanent: true,
      },
      {
        source: '/perseverance',
        destination: '/perseverance/validator-documentation',
        permanent: true,
      },
      {
        source: '/perseverance/:path*',
        destination: '/testnet/:path*',
        permanent: false,
      },
      {
        source: '/berghain/:path*',
        destination: '/mainnet/:path*',
        permanent: false,
      },
      {
        source: '/concepts/components/incentive-design-emission-and-burning',
        destination:
          '/concepts/token-economics/incentive-design-emission-and-burning',
        permanent: true,
      },
      {
        source: '/concepts/components/auction-theory-ssod',
        destination: '/concepts/token-economics/auction-theory-ssod',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/js/script.js',
        destination: 'https://plausible.io/js/script.js',
      },
      {
        source: '/api/event',
        destination: 'https://plausible.io/api/event',
      },
    ];
  },
};
