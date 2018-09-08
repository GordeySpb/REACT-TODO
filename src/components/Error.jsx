import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
`;


const Error = ({ error }) => (error ? <StyledDiv>Error try again</StyledDiv> : null);

Error.propTypes = {
  error: PropTypes.bool.isRequired,
};

export default Error;
