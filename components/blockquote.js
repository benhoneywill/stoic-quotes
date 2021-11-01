import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/core";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Quote = styled.blockquote`
  max-width: 620px;
  margin: 0;
  animation: ${fadeIn} 0.8s ease-in forwards;
  cursor: default;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${fadeOut} 0.4s ease-in forwards;
    `}
`;

const Text = styled.p`
  margin: 0;
  font-size: 36px;
  line-height: 1.3;
  cursor: text;

  @media (max-width: 620px) {
    font-size: 32px;
  }
`;

const Footer = styled.footer`
  text-align: right;
  padding: 30px 30px 0 30px;
`;

const Cite = styled.cite`
  font-size: 24px;
  cursor: text;
`;

const Blockquote = ({ author, text, animate }) => (
  <Quote animate={animate} onClick={e => e.stopPropagation()}>
    <Text>{text}</Text>
    <Footer>
      <Cite>
        - <span>{author}</span>
      </Cite>
    </Footer>
  </Quote>
);

Blockquote.defaultProps = {
  animate: false
};

Blockquote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  animate: PropTypes.bool
};

export default Blockquote;
