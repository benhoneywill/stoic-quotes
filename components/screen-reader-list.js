import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const List = styled.ul`
  position: absolute;
  height: 1px;
  width: 1px; 
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  margin: 0;
`;

const ScreenReaderList = ({ quotes }) => {
  return (
    <List>
      {quotes.map((quote, index) => (
        <li key={index}>
          <blockquote>
            <p>{quote.text}</p>
            <footer>
              <cite>
                - <span>{quote.author}</span>
              </cite>
            </footer>
          </blockquote>
        </li>
      ))}
    </List>
  )
}

ScreenReaderList.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired
}

export default ScreenReaderList;
