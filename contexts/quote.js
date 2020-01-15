import React from "react";
import PropTypes from "prop-types";

import { fetchQuote } from "../helpers/api";

export const quoteContext = React.createContext({ quote: null });
const { Provider } = quoteContext;

export const QuoteProvider = ({ children, initialQuote, serverError }) => {
  const [quote, setQuote] = React.useState(initialQuote);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(serverError);

  const fetchNewQuote = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchQuote();
      setQuote(data);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  return <Provider value={{ quote, loading, error, fetchNewQuote }}>{children}</Provider>;
};

QuoteProvider.defaultProps = {
  serverError: null,
  initialQuote: null
};

QuoteProvider.propTypes = {
  children: PropTypes.node.isRequired,
  serverError: PropTypes.any,
  initialQuote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
};
