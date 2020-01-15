import NextApp from "next/app";
import Head from "next/head";
import React from "react";

import GlobalStyle from "../components/global-style";

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Stoic Quotes</title>
          <meta
            name="description"
            content="Daily Stoic quotes from Marcus Aurelius, Seneca, and Epictetus; making it simple to bring Stoicism into your everyday life."
          />
        </Head>

        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default App;
