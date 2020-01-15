import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

const spin = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const appear = keyframes`
  0% {
    opacity: 0;
  }

  90% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const StyledButton = styled.button`
  position: relative;
  appearance: none;
  background-color: transparent;
  border-color: 2px solid white;
  color: white;
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  padding: 1em 2.5em;
  transition: background-color 0.2s ease;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.2);
      }
    `}

  ${({ loading }) =>
    loading &&
    css`
      color: transparent;
      &:before {
        content: "";
        position: absolute;
        left: calc(50% - 10px);
        top: calc(50% - 10px);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top: 2px solid white;
        animation: ${spin} 0.5s linear infinite, ${appear} 0.3s ease-in;
      }
    `}
`;

const Button = ({ loading, disabled, children }) => {
  return (
    <StyledButton disabled={disabled} loading={loading}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  disabled: false,
  loading: false
};

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.string.isRequired
};

export default Button;
