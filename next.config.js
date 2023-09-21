const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

const { withPlausibleProxy } = require("next-plausible");

module.exports = {
  ...withNextra(),
  ...withPlausibleProxy(),
  async redirects() {
    return [
      {
        source: "/",
        destination: "/concepts/welcome",
        permanent: true,
      },
      {
        source: "/concepts",
        destination: "/concepts/welcome",
        permanent: true,
      },
      {
        source: "/integration",
        destination: "/integration/getting-started",
        permanent: true,
      },
      {
        source: "/perseverance",
        destination: "/perseverance/validator-documentation",
        permanent: true,
      },
    ];
  },
};
