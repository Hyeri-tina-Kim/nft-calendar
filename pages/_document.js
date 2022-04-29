import Document, { Head, Main, NextScript } from "next/document";

export default class RootDocument extends Document {
  render() {
    return (
      <html>
        <title>tomorrow NFT</title>
        <Head>
          <meta charSet="utf-8" />
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
          /> */}
          <meta
            name="description"
            content="It's a calendar that you can see the NFT minting schedule."
          />
          <meta name="keywords" content="nextjs,static,website" />
          <link rel="icon" href="/favicon.ico" />
          <style global jsx>
            {`
              html,
              body,
              #__next {
                height: 100%;
                width: 100%;
                overflow: hidden;
              }
            `}
          </style>
        </Head>
        <body>
          <div
            style={{
              maxWidth: "85vw",
              minHeight: "100vh",
              margin: "0 auto",
              padding: "2rem 0",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
