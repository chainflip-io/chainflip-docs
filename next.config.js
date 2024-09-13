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
        source: '/concepts/components/incentive-design-emission-and-burning',
        destination: '/concepts/token-economics/incentive-design-emission-and-burning',
        permanent: true,
      },
      {
        source: '/concepts/components/auction-theory-ssod',
        destination: '/concepts/token-economics/auction-theory-ssod',
        permanent: true,
      },


      {
        source: '/perseverance',
        destination: '/validators/introduction',
        permanent: true,
      },
      {
        source: '/perseverance/:path*',
        destination: '/validators/testnet/:path*',
        permanent: false,
      },
      {
        source: '/berghain',
        destination: '/validators/introduction',
        permanent: true,
      },
      {
        source: '/berghain/:path*',
        destination: '/validators/mainnet/:path*',
        permanent: false,
      },


      {
        source: '/testnet/validator-documentation',
        destination: '/validators/introduction',
        permanent: true,
      },
      {
        source: '/testnet/changelog',
        destination: '/validators/misc/changelog',
        permanent: true,
      },
      {
        source: '/testnet/validator-setup/:path*',
        destination: '/validators/testnet/validator-setup/:path*',
        permanent: false,
      },
      {
        source: '/testnet/funding/:path*',
        destination: '/validators/testnet/funding/:path*',
        permanent: false,
      },
      {
        source: '/testnet/maintenance/:path*',
        destination: '/validators/testnet/maintenance/:path*',
        permanent: false,
      },
      {
        source: '/testnet/modifying-your-systemd-config',
        destination: '/validators/misc/tips/modifying-your-systemd-config',
        permanent: true,
      },
      {
        source: '/testnet/recover-private-keys',
        destination: '/validators/misc/tips/recover-private-keys',
        permanent: true,
      },


      {
        source: '/mainnet/validator-setup/prerequisites',
        destination: '/validators/mainnet/validator-setup/prerequisites',
        permanent: false,
      },
      {
        source: '/mainnet/validator-setup/installation',
        destination: '/validators/mainnet/validator-setup/installation',
        permanent: false,
      },
      {
        source: '/mainnet/validator-setup/keys',
        destination: '/validators/mainnet/validator-setup/keys',
        permanent: false,
      },
      {
        source: '/mainnet/validator-setup/engine-settings',
        destination: '/validators/mainnet/validator-setup/engine-settings',
        permanent: false,
      },
      {
        source: '/mainnet/validator-setup/starting-the-node',
        destination: '/validators/mainnet/validator-setup/starting-the-node',
        permanent: false,
      },
      {
        source: '/mainnet/validator-setup/important-notes',
        destination: '/validators/mainnet/validator-setup/important-notes',
        permanent: false,
      },
      {
        source: '/mainnet/validator-setup/funding-and-bidding',
        destination: '/validators/mainnet/funding/funding-and-bidding',
        permanent: false,
      },
      {
        source: '/mainnet/validator-setup/redeeming-funds-and-retiring',
        destination: '/validators/mainnet/funding/redeeming-funds-and-retiring',
        permanent: false,
      },
      {
        source: '/mainnet/validator-setup/advanced-account-management',
        destination: '/validators/mainnet/funding/advanced-account-management',
        permanent: false,
      },
      {
        source: '/mainnet/contract-addresses',
        destination: '/validators/misc/contract-addresses',
        permanent: false,
      },
      {
        source: '/mainnet/running-an-rpc-node',
        destination: '/validators/misc/running-an-rpc-node',
        permanent: false,
      },


      {
        source: '/integration',
        destination: '/swapping/introduction',
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
