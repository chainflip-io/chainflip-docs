const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

module.exports = {
  ...withNextra(),
  async redirects() {
    return [
      {
        source: "/",
        destination: "/concepts/welcome",
        permanent: true,
      },
    ];
  },
};
