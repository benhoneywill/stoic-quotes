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
  appearance: none;
  background-color: transparent;
  border-color: 2px solid #ffffff;
  color: #ffffff;
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  padding: 1em 2.5em;
  transition: background-color 0.2s ease;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.1);
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
        border-top: 2px solid #ffffff;
        animation: ${spin} 0.5s linear infinite, ${appear} 0.3s ease-in;
      }
    `}
`;

const Button = ({ loading, disabled, fullWidth, children }) => {
  return (
    <StyledButton fullWidth={fullWidth} disabled={disabled} loading={loading}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  fullWidth: false
};

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.string.isRequired
};

export default Button;
