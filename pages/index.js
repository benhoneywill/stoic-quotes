import React from "react";
import PropTypes from "prop-types";

import { fetchQuote, fetchQuotes } from "../helpers/api";
import { QuoteProvider } from "../contexts/quote";
import HomeView from "../components/home-view";
import ScreenReaderList from "../components/screen-reader-list";

const HomePage = ({ quote, quotes, error }) => {
  return (
    <QuoteProvider initialQuote={quote} serverError={error}>
      <HomeView />
      <ScreenReaderList quotes={quotes} />
    </QuoteProvider>
  );
};

HomePage.getInitialProps = async () => {
  try {
    const [quote, quotes] = await Promise.all([fetchQuote(), fetchQuotes(50)]);
    return { quote, quotes, error: null };
  } catch (error) {
    return { error, quote: null, quotes: [] };
  }
};

HomePage.defaultProps = {
  error: null,
  quote: null,
  quotes: []
};

HomePage.propTypes = {
  error: PropTypes.any,
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }),
  quotes: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })),
};

export default HomePage;
