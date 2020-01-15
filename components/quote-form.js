import React from "react";
import styled from "@emotion/styled";

import { quoteContext } from "../contexts/quote";
import Button from "./button";

const Form = styled.form`
  margin-top: 50px;
`;

const ButtonPosition = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50px;
  min-width: 280px;
  transform: translateX(-50%);

  @media (max-width: 620px) {
    left: 20px;
    right: 20px;
    bottom: 20px;
    transform: none;
  }
`;

const QuoteForm = () => {
  const { fetchNewQuote, loading } = React.useContext(quoteContext);

  const handleSubmit = async event => {
    event.preventDefault();
    await fetchNewQuote();
    window.scroll(0, 0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ButtonPosition>
        <Button disabled={loading} loading={loading} fullWidth>
          Next quote
        </Button>
      </ButtonPosition>
    </Form>
  );
};

QuoteForm.propTypes = {};

export default QuoteForm;
