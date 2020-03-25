import NextApp from "next/app";
import Head from "next/head";
import React from "react";

import GlobalStyle from "../components/global-style";

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    const title = "Stoic Quotes | The best quotes from the great Roman Stoics";
    const description =
      "The very best Stoic quotes from the three great Roman Stoics: Marcus Aurelius, Seneca, and Epictetus. Presented in bitesize chunks, learn from their wisdom and bring Stoicism into your everyday life.";

    return (
      <>
        <Head>
          <title>{title}</title>
          {[
            {
              name: "description",
              content: description
            },
            {
              property: "og:title",
              content: title
            },
            {
              property: "og:description",
              content: description
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              name: "twitter:creator",
              content: "benhoneywill"
            },
            {
              name: "twitter:title",
              content: title
            },
            {
              name: "twitter:description",
              content: description
            },
            {
              name: "keywords",
              content: "Stoic, Stoicism, Marcus, Aurelius, Seneca, Epictetus, Roman, Philosophy, Quotes, Inspirational"
            },
            {
              name: "theme-color",
              content: "#0c0c0c"
            }
          ].map(props => (
            <meta {...props} />
          ))}
        </Head>

        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default App;
