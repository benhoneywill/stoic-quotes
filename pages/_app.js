import NextApp from "next/app";
import Head from "next/head";
import React from "react";

import { QuoteProvider } from "../contexts/quote";
import { fetchQuote } from "../helpers/api";
import GlobalStyle from "../components/global-style";

class App extends NextApp {
  render() {
    const { quote, error, Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Stoic Quotes</title>
          <meta
            name="description"
            content="Daily Stoic quotes from Marcus Aurelius, Seneca, and Epictetus; making it simple to bring Stoicism into your everyday life."
          />
        </Head>

        <QuoteProvider initialQuote={quote} serverError={error}>
          <GlobalStyle />
          <Component {...pageProps} />
        </QuoteProvider>
      </>
    );
  }
}

App.getInitialProps = async ctx => {
  const appProps = await NextApp.getInitialProps(ctx);

  try {
    const quote = await fetchQuote();
    return { quote, error: null, ...appProps };
  } catch (error) {
    return { error, quote: null, ...appProps };
  }
};

export default App;
