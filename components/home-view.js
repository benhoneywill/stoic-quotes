import React from "react";
import styled from "@emotion/styled";

import { quoteContext } from "../contexts/quote";
import ErrorMessage from "./error-message";
import Blockquote from "./blockquote";
import ClickIcon from "./click-icon";

const Container = styled.div`
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw 5vw 10vw 5vw;
`;

const Hint = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;

  @media (max-width: 620px) {
    right: auto;
    left: 20px;
  }
`;

const HomeView = () => {
  const { quote, error, loading, fetchNewQuote } = React.useContext(quoteContext);
  const [clicked, setClicked] = React.useState(false);

  const getQuote = async () => {
    await fetchNewQuote();
    setClicked(true);
  };

  return (
    <Container onClick={getQuote}>
      {!error && quote ? <Blockquote text={quote.text} author={quote.author} animate={loading} /> : <ErrorMessage />}
      <Hint>
        <ClickIcon color="#ffffff" size={64} animate={clicked} />
      </Hint>
    </Container>
  );
};

export default HomeView;
