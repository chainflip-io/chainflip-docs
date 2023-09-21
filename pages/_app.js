import "../styles/globals.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Script
        defer
        data-domain="docs.chainflip.io"
        src="https://plausible.io/js/script.js"
      />
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
    </>
  );
}
