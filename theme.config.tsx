import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Script from "next/script";

const logoStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "1.45rem",
  fontWeight: "bold",
};

const config: DocsThemeConfig = {
  head: (
    <>
      <title>Chainflip Docs</title>
      <meta
        name="description"
        content="Concept and integration documentation for the Chainflip protocol."
      />
      <meta property="og:url" content="https://docs.chainflip.io" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Chainflip Docs" />
      <meta
        property="og:image"
        content="https://docs.chainflip.io/chainfliplogo.png"
      />
      <Script
        data-domain="https://docs.chainflip.io"
        src="https://plausible.io/js/script.js"
      />
    </>
  ),
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
