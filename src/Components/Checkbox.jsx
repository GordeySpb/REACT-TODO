import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 0px 15px;
  height: 15px;
  width: 15px;
    &:hover {
      cursor: pointer;
    }
`;

const Checkbox = ({ onChange }) => (
  <StyledInput type="checkbox" onClick={onChange} />
);

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
