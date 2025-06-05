import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
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
      const { asPath } = useRouter();
      const url = `https://docs.chainflip.io${asPath}`;
      return (
        <>
          <link rel="canonical" href={url.split('?')[0]} />
          <link rel="icon" href="/chainflip-favicon.ico" sizes="any" />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://docs.chainflip.io/chainfliplogo.png"
          />
        </>
      );
    }
  },
  logo: (
    <div style={logoStyle}>
      <img height="25" width="25" src="/chainfliplogo.png" />
      <span className="custom-header" style={{ marginLeft: "8px" }}>
        Chainflip Docs
      </span>
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
      <div className="flex items-center w-full justify-between">
        <span>{title}</span>
        {route === "#" && <NewWindow />}
      </div>
    ),
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "Chainflip Docs - %s",
    };
  },
};

export default config;
