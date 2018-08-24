import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: white;
  background-color: #61dafb;
  text-align: center;
  text-transform: uppercase;
`;

const StyledH1 = styled.h1`
  display: inline-block;
  color: #fff;
  margin: 1rem auto;
`;

const Header = ({ title }) => (
  <StyledHeader>
    <StyledH1>{title}</StyledH1>
  </StyledHeader>

);


Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
