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
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
    &:hover {
      cursor: pointer;
      background-color: #35cef4;
    }
`;

const Button = ({ name, onClick }) => (
  <StyledButton type="button" onClick={onClick}>{name}</StyledButton>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
