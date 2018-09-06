import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="/static/Font/stylesheet.css" />
          <style dangerouslySetInnerHTML={{__html: `
            body {
              margin: 0;
              font-family: 'cartoon_slamregular';
            }
            p {
              font-family: 'Century Gothic', sans-serif;
            }
            .confetti {
              background-image: url('/static/Pattern.gif');
              overflow: auto;
            }
          `}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}