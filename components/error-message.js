import React from "react";
import styled from "@emotion/styled";

const Container = styled.blockquote`
  max-width: 600px;
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
  font-size: 32px;
  line-height: 1.3;
`;

const ErrorMessage = () => {
  return (
    <Container>
      <Text>
        Sorry. We are having trouble getting any Stoic quotes right now, but do not worry, it is out of your control.
      </Text>
    </Container>
  );
};

ErrorMessage.propTypes = {};

export default ErrorMessage;
