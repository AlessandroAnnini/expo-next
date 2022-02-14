// @generated: @expo/next-adapter@3.1.19
// export { default } from '@expo/next-adapter/document';

import { getInitialProps } from '@expo/next-adapter/document';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

// Import the getInitialProps method and assign it to your component to ensure the react-native-web styles are used.
CustomDocument.getInitialProps = getInitialProps;

// OR...
// CustomDocument.getInitialProps = async (props) => {
//   const result = await getInitialProps(props);
//   // Mutate result...
//   return result;
// };

export default CustomDocument;
