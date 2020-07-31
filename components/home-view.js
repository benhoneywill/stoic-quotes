import React from "react";
import styled from "@emotion/styled";

import { quoteContext } from "../contexts/quote";
import ErrorMessage from "./error-message";
import Blockquote from "./blockquote";
import ClickIcon from "./click-icon";

const Container = styled.div`
  position: relative;
  min-height: 100%;
  width: 100%;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw 5vw;
  cursor: pointer;

  &:focus {
    outline: none;
  }
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

  const buttonKeyDown = event => {
    if (event.keyCode === 32) {
      event.preventDefault();
    } else if (event.keyCode === 13) {
      event.preventDefault();
      getQuote();
    }
  };

  const buttonKeyUp = event => {
    if (event.keyCode === 32) {
      event.preventDefault();
      getQuote();
    }
  };

  return (
    <Container
      tabIndex="0"
      role="button"
      aria-label="Get a new random quote"
      onClick={getQuote}
      onKeyDown={buttonKeyDown}
      onKeyUp={buttonKeyUp}
    >
      {!error && quote ? <Blockquote text={quote.text} author={quote.author} animate={loading} /> : <ErrorMessage />}
      <Hint>
        <ClickIcon color="#ffffff" size={64} animate={clicked} />
      </Hint>
    </Container>
  );
};

export default HomeView;
