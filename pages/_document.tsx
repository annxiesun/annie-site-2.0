import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {" "}
        <link
          rel="preload"
          href="assets/fonts/BRHendrix-Black.ttf"
          as="font"
          type="font/ttf"
        />
        <link
          rel="preload"
          href="assets/fonts/BRHendrix-Regular.ttf"
          as="font"
          type="font/ttf"
        />
        <link
          rel="preload"
          href="assets/fonts/BRHendrix-SemiBold.ttf"
          as="font"
          type="font/ttf"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
