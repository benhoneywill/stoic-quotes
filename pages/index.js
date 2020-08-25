import React from "react";
import PropTypes from "prop-types";

import { fetchQuote } from "../helpers/api";
import { QuoteProvider } from "../contexts/quote";
import HomeView from "../components/home-view";

const HomePage = ({ quote, error }) => {
  return (
    <QuoteProvider initialQuote={quote} serverError={error}>
      <HomeView />
    </QuoteProvider>
  );
};

HomePage.getInitialProps = async () => {
  try {
    const quote = await fetchQuote();
    return { quote, error: null };
  } catch (error) {
    return { error, quote: null };
  }
};

HomePage.defaultProps = {
  error: null,
  quote: null
};

HomePage.propTypes = {
  error: PropTypes.any,
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
};

export default HomePage;
