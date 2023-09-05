import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const logoStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "1.45rem",
  fontWeight: "bold",
};

const config: DocsThemeConfig = {
  logo: (
    <div style={logoStyle}>
      <img height="25" width="25" src="/chainfliplogo.png" />
      <span style={{ marginLeft: "8px" }}>Chainflip Docs</span>
    </div>
  ),
  project: {
    link: "https://github.com/chainflip-io",
  },
  chat: {
    link: "https://discord.com/channels/824147014140952596/824147014140952602",
  },
  docsRepositoryBase:
    "https://github.com/chainflip-io/chainflip-docs/blob/main",
  footer: {
    text: "Chainflip Docs",
  },
};

export default config;
