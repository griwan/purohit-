// pages/_document.js
// font-family: 'Libre Baskerville', serif;
// font-family: 'Montserrat', sans-serif;

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.bunny.net"
            crossOrigin="true"
          />
          <link
            href="https://fonts.bunny.net/css?family=libre-baskerville:400,700,400i,700i|montserrat:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
