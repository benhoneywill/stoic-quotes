import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Quote = styled.blockquote`
  max-width: 600px;
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
  font-size: 32px;
  line-height: 1.3;
`;

const Footer = styled.footer`
  text-align: right;
  padding: 30px;
`;

const Cite = styled.cite`
  font-size: 24px;
`;

const Blockquote = ({ author, text }) => {
  return (
    <Quote>
      <Text>{text}</Text>
      <Footer>
        - <Cite>{author}</Cite>
      </Footer>
    </Quote>
  );
};

Blockquote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Blockquote;
