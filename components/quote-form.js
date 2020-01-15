import React from "react";
import styled from "@emotion/styled";

import { quoteContext } from "../contexts/quote";
import Button from "./button";

const Form = styled.form`
  margin-top: 50px;
`;

const QuoteForm = () => {
  const { fetchNewQuote, loading } = React.useContext(quoteContext);

  const handleSubmit = event => {
    event.preventDefault();
    fetchNewQuote();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button disabled={loading} loading={loading}>
        Next quote
      </Button>
    </Form>
  );
};

QuoteForm.propTypes = {};

export default QuoteForm;
