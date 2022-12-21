import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel='manifest' href='/manifest.json' />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
        </Head>
        <body id="root">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
