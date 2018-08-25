import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledForm = styled.form`
  display: flex;
  background-color: #FAFAFA;
  border-top: 1px solid rgba(0,0,0,.1);
  padding: 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  outline: none;
  transition: all .2s;
  outline: 1px solid #61dafb; 
`;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <StyledForm>
        <StyledInput type="text" value={title} />
        <Button name="Add" />
      </StyledForm>
    );
  }
}

export default Form;
