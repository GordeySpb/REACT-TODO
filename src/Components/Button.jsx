import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-weight: bold;
  font-size: 15px;
  border-radius: 3px;
  background-color: #61dafb;
  margin-left: 10px;
  border: none;
  height: 25px;
  width: 60px;
  color: white;
    &:hover {
      cursor pointer;
      background-color: #35cef4;
    }
`;

const Button = ({ name }) => (
  <StyledButton type="button">{name}</StyledButton>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
