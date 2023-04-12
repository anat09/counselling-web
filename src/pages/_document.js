import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title key="title">Anamaria Tigan - Counselling in Greater Manchester & Cheshire</title>
          <meta charSet="utf-8">
            Anamaria Tigan offers face-to-face & remote counselling in Greater Manchester & Cheshire,
            providing a safe space for personal growth & healing. Book a consultation today.
          </meta>
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
