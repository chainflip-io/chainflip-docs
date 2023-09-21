import PlausibleProvider from "next-plausible";
import "../styles/globals.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="docs.chainflip.io">
      <Component {...pageProps} />;
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VS19KR3TSL"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VS19KR3TSL');",
        }}
      ></Script>
    </PlausibleProvider>
  );
}
