import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Ubuntu:wght@300;500&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Kevin Osorio's Portfolio" />
        <meta property="og:image" content="/portfolio-og.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
