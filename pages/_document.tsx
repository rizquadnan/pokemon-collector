import Document, { Html, Head, Main, NextScript } from "next/document";
import { Font } from "../shared";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Font />
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
