import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link key={1} rel="icon" href={`/favicon.svg`} />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@100;300;400;500;600;700&family=Kdam+Thmor+Pro&display=swap"
            rel="stylesheet"
          />
          <title>Test</title>
        </Head>
        <body>
          <div className="wrapper">
            <Main />
          </div>
          <div id="modal-portal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
