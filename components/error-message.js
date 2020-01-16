import React from "react";

import Blockquote from "./blockquote";

const ErrorMessage = () => {
  return (
    <Blockquote
      text="Sorry. We are having trouble getting any Stoic quotes right now. However, do not worry. It is out of your control."
      author="stoic-quotes.com"
    />
  );
};

ErrorMessage.propTypes = {};

export default ErrorMessage;
