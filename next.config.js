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

      {
        source: '/integration/getting-started',
        destination: '/swapping/introduction',
        permanent: true,
      },
      {
        source: '/integration/what-is-chainflip-protocol',
        destination: '/swapping/introduction',
        permanent: true,
      },
      {
        source: '/integration/account-roles',
        destination: '/swapping/integrations/chainflip-account/overview',
        permanent: true,
      },
      {
        source: '/integration/swapping-and-aggregation/swapping-basics',
        destination: '/swapping/swapping-basics',
        permanent: true,
      },
      {
        source: '/integration/swapping-and-aggregation/how-swapping-works',
        destination: '/swapping/how-swapping-works',
        permanent: true,
      },
      {
        source: '/integration/swapping-and-aggregation/cross-chain-messaging',
        destination: '/swapping/integrations/advanced/cross-chain-messaging',
        permanent: true,
      },
      {
        source: '/integration/swapping-and-aggregation/evm-integration/vault-swaps',
        destination: '/swapping/integrations/advanced/vault-swaps',
        permanent: true,
      },
      {
        source: '/integration/swapping-and-aggregation/evm-integration/statechain-gateway',
        destination: '/swapping/integrations/chainflip-account/funding',
        permanent: true,
      },
      {
        source: '/integration/swapping-and-aggregation/javascript-sdk/:path*',
        destination: '/swapping/integrations/javascript-sdk/:path*',
        permanent: true,
      },
      {
        source: '/integration/swapping-and-aggregation/running-a-broker/:path*',
        destination: '/swapping/integrations/running-a-broker/:path*',
        permanent: true,
      },
      {
        source: '/integration/swapping-and-aggregation/supported-chains-and-assets',
        destination: '/swapping/supported-chains-and-assets',
        permanent: true,
      },
      {
        source: '/integration/liquidity-provision/liquidity-provision-basics',
        destination: '/lp/liquidity-provisioning-basics',
        permanent: true,
      },
      {
        source: '/integration/liquidity-provision/how-liquidity-provision-works',
        destination: '/lp/how-liquidity-provisioning-works',
        permanent: true,
      },
      {
        source: '/integration/liquidity-provision/lp-api',
        destination: '/lp/integrations/lp-api',
        permanent: true,
      },
      {
        source: '/integration/liquidity-provision/lp-rpcs',
        destination: '/lp/integrations/lp-rpcs',
        permanent: true,
      },
      {
        source: '/integration/liquidity-provision/working-example',
        destination: '/lp/integrations/working-example',
        permanent: true,
      },
      {
        source: '/integration/liquidity-provision/troubleshooting',
        destination: '/lp/integrations/troubleshooting',
        permanent: true,
      },
      {
        source: '/integration/boost/:path*',
        destination: '/swapping/boost/:path*',
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
