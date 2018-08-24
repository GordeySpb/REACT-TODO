import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 0px 15px;
  height: 15px;
  width: 15px;
    &:hover {
      cursor: pointer;
    }
`;

const Checkbox = () => (
  <StyledInput type="checkbox" />
);

export default Checkbox;
