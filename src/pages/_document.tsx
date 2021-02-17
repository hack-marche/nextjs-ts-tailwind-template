import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

const faviconUrl = '/favicon.ico'
class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link rel="shortcut icon" href={faviconUrl} />
          <link rel="icon" href={faviconUrl} />
          <link rel="apple-touch-icon" href={faviconUrl} />
          <link rel="apple-touch-icon-precomposed" href={faviconUrl} />
        </Head>
        <body className="bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
