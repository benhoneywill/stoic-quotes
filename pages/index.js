import React from "react";
import PropTypes from "prop-types";

import { fetchQuote } from "../helpers/api";
import { QuoteProvider } from "../contexts/quote";
import HomeView from "../components/home-view";

const HomePage = ({ quote, error }) => (
  <QuoteProvider initialQuote={quote} serverError={error}>
    <HomeView />
  </QuoteProvider>
);

export const getStaticProps = async () => {
  let quote = null;
  let error = null;
  try {
    quote = await fetchQuote();
  } catch (err) {
    error = err;
  }

  return { props: { quote, error }, revalidate: 10 };
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
