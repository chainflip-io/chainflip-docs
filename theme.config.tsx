import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Script from "next/script";
import { useRouter } from "next/router";
import NewWindow from "./icons/NewWindow";

const logoStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "1.45rem",
  fontWeight: "bold",
};

const config: DocsThemeConfig = {
  head: () => {
    {
      const { asPath } = useRouter();
      const { frontMatter } = useConfig();
      const url = `https://docs.chainflip.io${asPath}`;

      return (
        <>
          <title>Chainflip Docs - {frontMatter.title}</title>
          <meta property="og:url" content={url} />
          <meta
            property="og:title"
            content={frontMatter.title || "Chainflip Docs"}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={frontMatter.description || "Chainflip Docs"}
          />
          <meta
            property="og:image"
            content="https://docs.chainflip.io/chainfliplogo.png"
          />
          <Script
            data-domain="https://docs.chainflip.io"
            src="https://plausible.io/js/script.js"
          />
        </>
      );
    }
  },
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
  sidebar: {
    titleComponent: ({ title, route }) => (
      <div className="flex items-center space-x-1">
        <span>{title}</span>
        {route === "#" && <NewWindow />}
      </div>
    ),
  },
};

export default config;
