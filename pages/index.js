import React from "react";
import styled from "@emotion/styled";

import { quoteContext } from "../contexts/quote";
import Blockquote from "../components/blockquote";
import ErrorMessage from "../components/error-message";
import QuoteForm from "../components/quote-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: calc(100vh - 40px);
`;

const HomePage = () => {
  const { quote, error } = React.useContext(quoteContext);

  return (
    <Container>
      {!error && quote ? <Blockquote text={quote.text} author={quote.author} /> : <ErrorMessage />}
      <QuoteForm />
    </Container>
  );
};

export default HomePage;
