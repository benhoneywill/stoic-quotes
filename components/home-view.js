import React from "react";
import styled from "@emotion/styled";

import { quoteContext } from "../contexts/quote";
import ErrorMessage from "./error-message";
import Blockquote from "./blockquote";
import QuoteForm from "./quote-form";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: calc(100vh - 40px);
`;

const HomeView = () => {
  const { quote, error, loading } = React.useContext(quoteContext);

  return (
    <Container>
      {!error && quote ? <Blockquote text={quote.text} author={quote.author} animate={loading} /> : <ErrorMessage />}
      <QuoteForm />
    </Container>
  );
};

export default HomeView;
